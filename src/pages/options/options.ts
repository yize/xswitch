import { ViewController, observable, inject } from "@ali/recore";
import { Checkbox } from "antd";
import { getOptions, setOptions } from "../../chrome-storage";
import { Enabled } from "../../enums";
import "./options.less";
@inject({
  components: { Checkbox }
})
export default class Options extends ViewController {
  @observable
  clearCacheEnabled = false;

  @observable
  corsEnabled = false;

  setOptionStorage() {
    setOptions({
      clearCacheEnabled: this.clearCacheEnabled,
      corsEnabled: this.corsEnabled
    });
  }

  async $init() {
    this.clearCacheEnabled = (await getOptions()).clearCacheEnabled !== Enabled.NO;
    this.corsEnabled = (await getOptions()).corsEnabled !== Enabled.NO;
  }

  setClearCacheEnabled() {
    this.clearCacheEnabled = !this.clearCacheEnabled;
    this.setOptionStorage();
  }

  setCorsEnabled() {
    this.corsEnabled = !this.corsEnabled;
    this.setOptionStorage();
  }
}
