function save_options() {

  var clearCacheEnabled = (<HTMLInputElement>document.getElementById('clearCacheEnabled')).checked;
  var corsEnabled = (<HTMLInputElement>document.getElementById('corsEnabled')).checked;

  chrome.storage.sync.set({
    clearCacheEnabled: clearCacheEnabled ? 'enabled' : 'disabled',
    corsEnabled: corsEnabled ? 'enabled' : 'disabled',
  }, function () {
    // Update status to let user know options were saved.
    var status = document.getElementById('status');
    status.textContent = 'Options saved.';
    setTimeout(function () {
      status.textContent = '';
    }, 750);
  });
}

function restore_options() {

  chrome.storage.sync.get({
    clearCacheEnabled: 'enabled',
    corsEnabled: 'enabled',
  }, function (result) {
    (<HTMLInputElement>document.getElementById('clearCacheEnabled')).checked = result.clearCacheEnabled === 'enabled';
    (<HTMLInputElement>document.getElementById('corsEnabled')).checked = result.corsEnabled === 'enabled';
  });
}
document.addEventListener('DOMContentLoaded', restore_options);

document.getElementById('clearCacheEnabled').addEventListener('change', save_options);
document.getElementById('corsEnabled').addEventListener('change', save_options);