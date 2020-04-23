const observer = new MutationObserver(() => {
    const banners = document.querySelectorAll('ytd-clarification-renderer');

    if (banners) {
        banners.forEach((banner) => {
            banner.remove();
        });
    }
});

observer.observe(document, { attributes: true, childList: true, subtree: true });