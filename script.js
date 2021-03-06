function compile() {
    var e = new XMLHttpRequest;
    e.onreadystatechange = function () {
        4 == e.readyState && 200 == e.status ? (document.getElementById("progress")
                .style.visibility = "hidden", document.getElementById("output-box")
                .style.visibility = "visible", fetchOutputFile()) : document.getElementById("progress")
            .style.visibility = "visible"
    };
    var t = encodeURIComponent(editor.getValue()),
        n = encodeURIComponent(document.getElementById("lang")
            .value),
        i = encodeURIComponent(document.getElementById("input")
            .value);
    e.open("POST", "helper/compile.php", !0), e.setRequestHeader("Content-Type", "application/x-www-form-urlencoded"), e.send("source=" + t + "&lang=" + n + "&input=" + i)
}

function fetchOutputFile() {
    var e = new XMLHttpRequest;
    e.onreadystatechange = function () {
        document.getElementById("output")
            .value = 4 == e.readyState && 200 == e.status ? e.responseText : "Fetching output..."
    }, e.open("GET", "helper/output.txt", !0), e.send()
}

function takeInput() {
    "visible" == document.getElementById("input-box")
        .style.visibility ? (document.getElementById("input-box")
            .style.visibility = "hidden", document.getElementById("stdin")
            .className = "sidebar button ") : (document.getElementById("input-box")
            .style.visibility = "visible", document.getElementById("stdin")
            .className += " btn-pressed", document.getElementById("input")
            .value = "")
}

function hide() {
    document.getElementById("output-box")
        .style.visibility = "hidden"
}
window.onload = function () {
    document.getElementById("input")
        .innerHTML = "", document.getElementById("output")
        .innerHTML = ""
};