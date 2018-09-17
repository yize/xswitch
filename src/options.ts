import { Enabled } from './enum';

const timeout: number = 750;

function save_options() {
  const clearCacheEnabled = (<HTMLInputElement>(
    document.getElementById('clearCacheEnabled')
  )).checked;
  const corsEnabled = (<HTMLInputElement>document.getElementById('corsEnabled'))
    .checked;

  chrome.storage.sync.set(
    {
      clearCacheEnabled: clearCacheEnabled ? Enabled.YES : Enabled.NO,
      corsEnabled: corsEnabled ? Enabled.YES : Enabled.NO
    },
    function() {
      // Update status to let user know options were saved.
      const status = document.getElementById('status');
      status.textContent = 'Options saved.';
      setTimeout(function() {
        status.textContent = '';
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
      (<HTMLInputElement>document.getElementById('clearCacheEnabled')).checked =
        result.clearCacheEnabled === Enabled.YES;
      (<HTMLInputElement>document.getElementById('corsEnabled')).checked =
        result.corsEnabled === Enabled.YES;
    }
  );
}
document.addEventListener('DOMContentLoaded', restore_options);

document
  .getElementById('clearCacheEnabled')
  .addEventListener('change', save_options);
document.getElementById('corsEnabled').addEventListener('change', save_options);
