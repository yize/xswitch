import { describe, expect, it } from "vitest";
import {
  encodeJsonLine,
  encodeNativeMessage,
  JsonLineDecoder,
  NativeMessageDecoder,
} from "../mcp/protocol.js";

describe("MCP bridge protocol", () => {
  it("decodes fragmented Chrome Native Messaging frames", () => {
    const decoder = new NativeMessageDecoder();
    const first = encodeNativeMessage({ type: "hello", value: "中文" });
    const second = encodeNativeMessage({ type: "response", id: "2" });
    const combined = Buffer.concat([first, second]);

    expect(decoder.push(combined.subarray(0, 3))).toEqual([]);
    expect(decoder.push(combined.subarray(3, 11))).toEqual([]);
    expect(decoder.push(combined.subarray(11))).toEqual([
      { type: "hello", value: "中文" },
      { type: "response", id: "2" },
    ]);
  });

  it("decodes fragmented and batched JSON lines", () => {
    const decoder = new JsonLineDecoder();
    const input = `${encodeJsonLine({ id: "1" })}${encodeJsonLine({ id: "2" })}`;
    expect(decoder.push(Buffer.from(input.slice(0, 5)))).toEqual([]);
    expect(decoder.push(Buffer.from(input.slice(5)))).toEqual([
      { id: "1" },
      { id: "2" },
    ]);
  });

  it("preserves UTF-8 characters split across JSON-line chunks", () => {
    const decoder = new JsonLineDecoder();
    const input = Buffer.from(encodeJsonLine({ name: "中文规则" }), "utf8");
    const splitAt = input.indexOf(Buffer.from("中", "utf8")) + 1;
    expect(decoder.push(input.subarray(0, splitAt))).toEqual([]);
    expect(decoder.push(input.subarray(splitAt))).toEqual([{ name: "中文规则" }]);
  });
});
