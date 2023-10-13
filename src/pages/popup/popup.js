async function getCurrentTab() {
    let queryOptions = { active: true, lastFocusedWindow: true };
    // `tab` will either be a `tabs.Tab` instance or `undefined`.
    let [tab] = await chrome.tabs.query(queryOptions);
    return tab;
}

document.querySelector("#kb-copy_title").addEventListener("click", async function () {
    let resp = await getCurrentTab();
    navigator.clipboard.writeText(resp.title);
})

document.querySelector("#kb-copy_url").addEventListener("click", async function () {
    let resp = await getCurrentTab();
    navigator.clipboard.writeText(resp.url);
})

document.querySelector("#kb-copy_gost").addEventListener("click", async function () {
    let resp = await getCurrentTab();
    let date = new Date();

    let result = `${resp.title}. — Текст : электронный // ${new URL(resp.url).host} : [сайт]. — URL: ${resp.url} (дата обращения: ${date.toLocaleDateString()}).`

    navigator.clipboard.writeText(result);
})