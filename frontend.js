chrome.runtime.onMessage.addListener(function(request) {
    console.log(request)
    navigator.clipboard.writeText(request.copyString.title);
})