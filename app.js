(function() {
  var canvas = document.querySelector("#canvas"),
      context = canvas.getContext("2d"),
      canvasPos = getPosition(canvas),
      gnomeImg = new Image(),
      mouseX = canvas.width / 2,
      mouseY = canvas.height / 2;

  canvas.addEventListener("mousemove", setMousePosition, false);

  gnomeImg.src = "gnome-13.png";

  function update() {

    context.clearRect(0, 0, canvas.width, canvas.height);

    var gnomeImgWidth = gnomeImg.width / 4,
        gnomeImgHeight = gnomeImg.height / 4;

    context.drawImage(gnomeImg, mouseX - gnomeImgWidth / 2, mouseY - gnomeImgHeight / 2, gnomeImgWidth, gnomeImgHeight);

    requestAnimationFrame(update);
  }

  gnomeImg.onload = function() {
    context.drawImage(gnomeImg, 0, 0);
  };

  function setMousePosition(event) {
    mouseX = event.clientX - canvasPos.x;
    mouseY = event.clientY - canvasPos.y;
  }

  function getPosition(event) {
    var xPosition = 0;
    var yPosition = 0;

    while (event) {
      xPosition += (event.offsetLeft - event.scrollLeft + event.clientLeft);
      yPosition += (event.offsetTop - event.scrollTop + event.clientTop);
      event = event.offsetParent;
    }
    return {
      x: xPosition,
      y: yPosition
    };
  }

  update();

})();