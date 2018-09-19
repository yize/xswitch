import { Enabled } from './enums';
import {
  CORS_ENABLED_DOM_ID,
  CLEAR_CACHE_ENABLED_DOM_ID,
  STATUS_DOM_ID,
  CHANGE,
  DOM_CONTENT_LOADED,
  OPTIONS_SAVED,
  EMPTY_STRING
} from './constants';

const timeout = 750;

function save_options() {
  const clearCacheEnabled = (<HTMLInputElement>(
    document.getElementById(CLEAR_CACHE_ENABLED_DOM_ID)
  )).checked;
  const corsEnabled = (<HTMLInputElement>(
    document.getElementById(CORS_ENABLED_DOM_ID)
  )).checked;

  chrome.storage.sync.set(
    {
      clearCacheEnabled: clearCacheEnabled ? Enabled.YES : Enabled.NO,
      corsEnabled: corsEnabled ? Enabled.YES : Enabled.NO
    },
    function() {
      // Update status to let user know options were saved.
      const status = document.getElementById(STATUS_DOM_ID);
      status.textContent = OPTIONS_SAVED;
      setTimeout(function() {
        status.textContent = EMPTY_STRING;
      }, timeout);
    }
  );
}

function restore_options(): void {
  chrome.storage.sync.get(
    {
      clearCacheEnabled: Enabled.YES,
      corsEnabled: Enabled.YES
    },
    function(result) {
      (<HTMLInputElement>(
        document.getElementById(CLEAR_CACHE_ENABLED_DOM_ID)
      )).checked = result.clearCacheEnabled === Enabled.YES;
      (<HTMLInputElement>document.getElementById(CORS_ENABLED_DOM_ID)).checked =
        result.corsEnabled === Enabled.YES;
    }
  );
}
document.addEventListener(DOM_CONTENT_LOADED, restore_options);

document
  .getElementById(CLEAR_CACHE_ENABLED_DOM_ID)
  .addEventListener(CHANGE, save_options);
document
  .getElementById(CORS_ENABLED_DOM_ID)
  .addEventListener(CHANGE, save_options);
