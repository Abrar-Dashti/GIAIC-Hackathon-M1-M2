var div:any = document.getElementById("forspace");
var display = 1;
function hideShow() {
    if (display = 0) {
        div.style.display = "block";
        display = 0;
    }
    else {
        div.style.display = "none";
        display = 1;
    }
}