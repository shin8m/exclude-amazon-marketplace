function removeMarketplace(url) {
    if (url.indexOf("https://www.amazon.co.jp/s?") < 0) {
        return;
    }
    if (url.indexOf("AN1VRQENFRJN5") >= 0) {
        return;
    }

    location.href = url + "&emi=AN1VRQENFRJN5";
}

window.onload = function() {
    chrome.storage.local.get("switch_enable", function(value) {
        var value_data = value.switch_enable;
        if (value_data === false) {
            return;
        }

        var url = location.href;
        removeMarketplace(url);
    });
}
