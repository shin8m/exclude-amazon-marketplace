document.getElementById("sw").onclick = function() {
    saveOption();
}

function saveOption() {
    chrome.storage.local.set({
        "switch_enable": document.getElementById("sw").checked
    });
}

window.onload = function() {
    chrome.storage.local.get("switch_enable", function(value) {
        var value_data = value.switch_enable;
        if (value_data === undefined) {
            return;
        }

        if (value_data) {
            document.getElementById("sw").checked = true;
        } else {
            document.getElementById("sw").checked = false;
        }
    });
}
