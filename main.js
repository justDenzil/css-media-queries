window.onresize = screen;
window.onload = screen;

function screen() {
    myWidth = window.innerWidth;
    myHeight = window.innerHeight;
    document.getElementById('sizeWidth').innerHTML = "Width : " + myWidth + "px" ;
    document.getElementById('sizeHeight').innerHTML = "Height : " + myHeight + "px" ;
}