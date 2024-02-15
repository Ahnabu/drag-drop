let container = document.getElementById('container');
let ball = document.getElementById('ball');


let initialTop, initialLeft;
function ballHandler(e) {
    let top = e.clientY - initialTop;
    let left = e.clientX - initialLeft;
    ball.style.top = `${top}px`;
    ball.style.left = `${left}px`;
    console.log('clicked')
}
ball.addEventListener('mousedown', function (e) {
    if (!initialTop && !initialLeft) {
        initialTop = e.clientY;
        initialLeft = e.clientX;
    }
    container.addEventListener('mouseover',ballHandler)
})
ball.addEventListener('mouseup', function (e) {
    container.removeEventListener('mouseover', ballHandler)
})