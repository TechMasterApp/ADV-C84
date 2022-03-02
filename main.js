canvas = document.getElementById("cv")
pencil = canvas.getContext("2d")
bgImage = "mars.jpg"
image = "rover.png"
rx = 0
ry = 0
window.addEventListener("keydown", keyPress)

function add() {
    bgImgAdd = new Image()
    bgImgAdd.onload = uploadBackground
    bgImgAdd.src = bgImage
    imgAdd = new Image()
    imgAdd.onload = uploadImage
    imgAdd.src = image
}

function uploadBackground() {
    pencil.drawImage(bgImgAdd, 0, 0, 800, 600)
}

function uploadImage() {
    pencil.drawImage(imgAdd, rx, ry, 200, 150)
}

function keyPress(e) {
    keyPressed = e.keyCode
}

// 37=Left 38=Up 39=Right 40=Down