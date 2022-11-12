function save() {
    const verifyAll = document.getElementById(
        "verifyAll"
    ).checked;

    chrome.storage.local.set(
        {
        verifyAll
        },
        function () {
        const status = document.getElementById("status");
        status.style.display = "block";
        setTimeout(function () {
            status.style.display = "none";
        }, 1500);
        }
    );
}

function closePage() {
    window.close();
}

function reset() {
chrome.storage.local.get(
    {
    verifyAll: false
    },
    function (items) {
    document.getElementById("verifyAll").checked = items.verifyAll;
    }
);
}
  
document.addEventListener("DOMContentLoaded", function () {
reset();
document.getElementById("save").addEventListener("click", save);
document.getElementById("close").addEventListener("click", closePage);
});

/*
Removed Options page 

	"options_page": "options.html",
	"options_ui": {
		"page": "options.html",
		"open_in_tab": true
	},



*/