import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { Checkbox } from "antd";
import { getOptions, setOptions } from "../../chrome-storage";
import { Enabled } from "../../enums";
import "./options.less";

const Options: React.FC = () => {
  const [clearCacheEnabled, setClearCacheEnabled] = useState(false);
  const [corsEnabled, setCorsEnabled] = useState(false);

  useEffect(() => {
    async function fetchOptions() {
      const opts = await getOptions();
      setClearCacheEnabled(opts.clearCacheEnabled !== Enabled.NO);
      setCorsEnabled(opts.corsEnabled !== Enabled.NO);
    }
    fetchOptions();
  }, []);

  const handleClearCacheChange = () => {
    const newValue = !clearCacheEnabled;
    setClearCacheEnabled(newValue);
    setOptions({
      clearCacheEnabled: newValue,
      corsEnabled,
    });
  };

  const handleCorsChange = () => {
    const newValue = !corsEnabled;
    setCorsEnabled(newValue);
    setOptions({
      clearCacheEnabled,
      corsEnabled: newValue,
    });
  };

  return (
    <div className="options-container">
      <Checkbox checked={clearCacheEnabled} onChange={handleClearCacheChange}>
        启用清除缓存
      </Checkbox>
      <br />
      <Checkbox checked={corsEnabled} onChange={handleCorsChange}>
        启用 CORS
      </Checkbox>
    </div>
  );
};

ReactDOM.render(<Options />, document.getElementById("root"));
