import { StringDecoder } from "node:string_decoder";

const MAX_MESSAGE_BYTES = 1024 * 1024;

export function encodeNativeMessage(value) {
  const body = Buffer.from(JSON.stringify(value), "utf8");
  if (body.length > MAX_MESSAGE_BYTES) {
    throw new Error("Native Messaging message exceeds 1 MiB");
  }
  const header = Buffer.alloc(4);
  header.writeUInt32LE(body.length, 0);
  return Buffer.concat([header, body]);
}

export class NativeMessageDecoder {
  #buffer = Buffer.alloc(0);

  push(chunk) {
    this.#buffer = Buffer.concat([this.#buffer, chunk]);
    const messages = [];
    while (this.#buffer.length >= 4) {
      const length = this.#buffer.readUInt32LE(0);
      if (length > MAX_MESSAGE_BYTES) {
        throw new Error("Native Messaging message exceeds 1 MiB");
      }
      if (this.#buffer.length < length + 4) break;
      const body = this.#buffer.subarray(4, length + 4);
      this.#buffer = this.#buffer.subarray(length + 4);
      messages.push(JSON.parse(body.toString("utf8")));
    }
    return messages;
  }
}

export function encodeJsonLine(value) {
  const line = `${JSON.stringify(value)}\n`;
  if (Buffer.byteLength(line, "utf8") > MAX_MESSAGE_BYTES) {
    throw new Error("IPC message exceeds 1 MiB");
  }
  return line;
}

export class JsonLineDecoder {
  #buffer = "";
  #decoder = new StringDecoder("utf8");

  push(chunk) {
    this.#buffer +=
      typeof chunk === "string" ? chunk : this.#decoder.write(chunk);
    if (Buffer.byteLength(this.#buffer, "utf8") > MAX_MESSAGE_BYTES) {
      throw new Error("IPC message exceeds 1 MiB");
    }
    const messages = [];
    let newline = this.#buffer.indexOf("\n");
    while (newline >= 0) {
      const line = this.#buffer.slice(0, newline);
      this.#buffer = this.#buffer.slice(newline + 1);
      if (line.trim()) messages.push(JSON.parse(line));
      newline = this.#buffer.indexOf("\n");
    }
    return messages;
  }
}
