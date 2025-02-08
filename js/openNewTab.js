chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.action === "processScribd") {
        let match = request.url.match(/scribd\.com\/document\/(\d+)/);
        if (match) {
            let documentID = match[1];
            let newURL = `https://www.scribd.com/embeds/${documentID}/content`;
            chrome.tabs.create({ url: newURL });
        }
    }
});
