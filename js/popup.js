function removeBanners() {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        chrome.tabs.executeScript(
            tabs[0].id,
            {
                code: `
                    (function () {
                        const banners = document.querySelectorAll('ytd-clarification-renderer');
                
                        if (banners) {
                            banners.forEach((banner) => {
                                banner.remove();
                            });
                        }
                    })();
                `
            }
        );
    });
}

document.addEventListener('DOMContentLoaded', () => {
    const button = document.getElementById('removeBanners');

    button.onclick = removeBanners;
});