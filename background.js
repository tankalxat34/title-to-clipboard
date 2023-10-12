
chrome.action.onClicked.addListener(function (request) {
    console.log(request)

    chrome.tabs.sendMessage(request.id, {
        copyString: request
    })
})