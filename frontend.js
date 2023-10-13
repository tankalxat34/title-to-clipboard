function copyToClipboard(data) {
    // https://stackoverflow.com/questions/3436102/copy-to-clipboard-in-chrome-extension
    const copySource = document.createElement('textarea');
    copySource.textContent = data;
    document.body.appendChild(copySource);
    copySource.select();
    document.execCommand('copy');
    document.body.removeChild(copySource);
}


chrome.runtime.onMessage.addListener(function (request) {
    switch (request.action) {
        case 'copyToClipboardTitle':
            copyToClipboard(request.currentTab.title);
            break;

        case 'copyToClipboardURL':
            copyToClipboard(request.currentTab.url);
            break;

        case 'copyToClipboardGOST':
            let resp = request.currentTab;
            let date = new Date();

            let result = `${resp.title}. — Текст : электронный // ${new URL(resp.url).host} : [сайт]. — URL: ${resp.url} (дата обращения: ${date.toLocaleDateString()}).`

            copyToClipboard(result)
            break;

        default:
            break;
    }
})