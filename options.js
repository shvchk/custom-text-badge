(function(){
  document.getElementById('addonOptions').textContent=browser.i18n.getMessage('options');
  document.getElementById('badgeTextLabel').textContent=browser.i18n.getMessage('badgeText');
  document.getElementById('badgeColorLabel').textContent=browser.i18n.getMessage('badgeColor');
  document.getElementById('save').textContent=browser.i18n.getMessage('save');
})();

function saveOptions(e) {
  browser.storage.local.set({
    badgeText: document.querySelector('#badgeText').value
  });

  browser.browserAction.setBadgeText({
    text: document.querySelector('#badgeText').value
  });

  browser.storage.local.set({
    badgeColor: document.querySelector('#badgeColor').value
  });

  browser.browserAction.setBadgeBackgroundColor({
    color: document.querySelector('#badgeColor').value
  });

  e.preventDefault();
}

function restoreOptions() {
  browser.storage.local.get('badgeText').then(result => {
    document.querySelector('#badgeText').value = result.badgeText ? result.badgeText: 'text';
  });

  browser.storage.local.get('badgeColor').then(result=>{
    document.querySelector('#badgeColor').value = result.badgeColor ? result.badgeColor: '#333333';
  });
}

document.addEventListener('DOMContentLoaded', restoreOptions);
document.querySelector('form').addEventListener('submit', saveOptions); 
