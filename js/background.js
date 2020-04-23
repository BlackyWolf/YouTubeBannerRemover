chrome.runtime.onInstalled.addListener(function () {
    chrome.storage.sync.set({ enableYouTubeBannerRemover: true }, function () {
        console.log('YouTube Banner Remover is enabled.');
    });

    chrome.declarativeContent.onPageChanged.removeRules(undefined, function () {
        chrome.declarativeContent.onPageChanged.addRules([{
            actions: [new chrome.declarativeContent.ShowPageAction()],
            conditions: [
                new chrome.declarativeContent.PageStateMatcher({
                    pageUrl: { hostEquals: 'youtube.com' },
                }),
                new chrome.declarativeContent.PageStateMatcher({
                    pageUrl: { hostEquals: 'www.youtube.com' },
                })
            ]
        }]);
    });

    chrome.tabs.onUpdated.addListener( function (tabId, changeInfo, tab) {
        if (changeInfo.status == 'complete' && tab.active) {
            console.log(tab);
            // chrome.tabs.executeScript(
            //     tabId,
            //     {
            //         code: `
            //             (function () {
            //                 const bannerAttemptOne = document.querySelectorAll('ytd-clarification-renderer');
    
            //                 if (bannerAttemptOne) {
            //                     bannerAttemptOne.forEach((banner) => {
            //                         banner.remove();
            //                     });
            //                 }
            //             }());
            //         `
            //     }
            // );
        }
    });
});