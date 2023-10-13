const MANIFEST = chrome.runtime.getManifest();

async function getCurrentTab() {
    let queryOptions = { active: true, lastFocusedWindow: true };
    // `tab` will either be a `tabs.Tab` instance or `undefined`.
    // let [tab] = await chrome.tabs.query(queryOptions);
    return await chrome.tabs.query(queryOptions);
}

async function genericOnClick(info) {
    let currentTab = await getCurrentTab();
    chrome.tabs.sendMessage(currentTab[0].id, {
        action: info.menuItemId,
        currentTab: currentTab[0]
    })
}





chrome.contextMenus.onClicked.addListener(genericOnClick);

chrome.runtime.onInstalled.addListener(function () {

    chrome.contextMenus.create({
        title: "Copy to clipboard...",
        id: 'parent',
    })

    // Create a parent item and two children.
    chrome.contextMenus.create({
        title: "Title of this page",
        id: 'copyToClipboardTitle',
        parentId: 'parent'
    });
    chrome.contextMenus.create({
        title: "URL of this page",
        id: 'copyToClipboardURL',
        parentId: 'parent'
    });
    chrome.contextMenus.create({
        title: "Link to this page as GOST",
        id: 'copyToClipboardGOST',
        parentId: 'parent'
    });
});
