(function(){
  browser.storage.local.get('badgeText').then(result => {
    browser.browserAction.setBadgeText({
      text: result.badgeText ? result.badgeText: 'text'
    });
  });

  browser.storage.local.get('badgeColor').then(result => {
    browser.browserAction.setBadgeBackgroundColor({
      color: result.badgeColor ? result.badgeColor: '#333333'
    });
  });

  browser.contextMenus.removeAll();
  browser.contextMenus.create({
    title: browser.i18n.getMessage('options'),
    contexts: ['browser_action'],
    onclick: function(e,tab) {
      browser.runtime.openOptionsPage();
    }
  });
})(); 
