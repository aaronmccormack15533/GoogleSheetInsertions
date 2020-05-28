function submit(){
    chrome.tabs.executeScript(null, { file: "jquery-3.5.1.min.js" },
    function(){
        chrome.tabs.executeScript(null, { file: "content.js " });
    });
}

document.getElementById('submitBtn').addEventListener('click', submit);