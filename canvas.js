//CanvassKontext
var canvas = document.getElementById('canvas');
var context = canvas.getContext('2d');
var isDrawing;
var rect;

//Buttons
const lineB = document.querySelector('#default');
const arcB = document.querySelector('#arc');
const eraseB = document.querySelector('#erase');
const eraseAllB = document.querySelector('#eraseAll');
const trashB = document.querySelector('#trash');
const saveB = document.querySelector('#save');


//Strings for toolselection
let activeTool = "default";
let line = "default";
let circle = "circle"
let erase = "erase"
let eraseAll = "eraseAll"
let save = "save"
let trash = "trash"

  

var radgrad = context.createRadialGradient(0, 0, k, 0, 0, k * 2);
radgrad.addColorStop(0, 'rgba(0,0,0,1)');
radgrad.addColorStop(0.5, 'rgba(0,0,0,0.5)');
radgrad.addColorStop(1, 'rgba(0,0,0,0)');
// get our canvas margins;
var rect;

function getRect() {
  rect = canvas.getBoundingClientRect();
}

canvas.onmousedown = function(e) {
  isDrawing = true;
  context.moveTo(e.clientX, e.clientY);
};

canvas.onmousemove = function(e) {

  if (isDrawing) {
    // normalize our mouse event's coordinates
    var x = e.clientX - rect.left;
    var y = e.clientY - rect.top;
    // change the canvas matrix coordinates so we draw at mouse positions
    context.setTransform(1, 0, 0, 1, x, y)
    context.fillStyle = radgrad;
    context.fillRect(-k * 2, -k * 2, k * 2 * 2, k * 2 * 2);
  }
};

canvas.onmouseup = function() {
  isDrawing = false;
};
var debouncing = false;

function resizeHandler() {
  debouncing = false;
  getRect();
}
window.onscroll = window.onresize = function() {
  // debounce the events
  if (!debouncing) {
    requestAnimationFrame(resizeHandler);
  }
  debouncing = true;
}

getRect();




/* Ich bin ein längerer Kommentar


window.addEventListener('load', () => {

    arcB.addEventListener('click', function () {
        activeTool = "circle";
    })
});


function draw(e) {
    if (!painting) return;

    if (activeTool == line) {
        mouse.x = e.pageX;
        mouse.y = e.pageY;
        drawCircle()

    } else if (activeTool == circle) {
        mouse.x = e.pageX;
        mouse.y = e.pageY;
        drawCircle()
    }
}


//drawing circle
function drawCircle() {
    ctx.fillStyle = 'white';
    ctx.fill();
    ctx.beginPath();
    ctx.arc(mouse.x, mouse.y, 50, 0, Math.PI * 2);
    ctx.lineWidht = 5;
    ctx.strokeStyle = 'blue'
    ctx.stroke();
}




const mouse = {
    x: null,
    y: null,
}


window.onresize = function () {
    canvas.width = canvas.parentNode.getBoundingClientRect().width;
    canvas.height = canvas.parentNode.getBoundingClientRect().height;
}

    document.querySelector('#deleteAll');
    deleteAll.addEventListener('click', function () {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
    })

});

function drawFunction(e) {
    if (!isDrawing) {
        return;
    }
    let brushSize = brushSizeInput.value;
    let lastX = e.clientX + window.scrollX;
    let lastY = e.clientY + window.scrollY;

    if ((autoBrushSize) && (activeTool != 'eraser')) {
        if (brushSize >= 100 || brushSize <= 10) {
            direction = !direction;
        }
        if (direction) {
            brushSizeInput.value++;
        } else {
            brushSizeInput.value--;
        }
        brushSize = brushSizeInput.value;
    }
}

    // DOTS ///////////////////////////////////
     if (activeTool == 'dots') {
        let randomX = Math.random() * canvas.width;
        let randomY = Math.random() * canvas.height;
        let randomSize = (Math.random() * 0.6) - 0.55;

        // EVENT LISTENERS - need to be at the END
        canvas.addEventListener('click', menuFunction);
        //panel1.addEventListener('click', menuFunction);
        panel1.addEventListener('change', menuFunction);
        panel2.addEventListener('change', menuFunction);
        panel3.addEventListener('change', menuFunction);
        allShapeButtons.forEach(shapeButton => shapeButton.addEventListener('click', menuFunction));
        allToolsButtons.forEach(toolButton => toolButton.addEventListener('click', menuFunction));
        allEffectsButtons.forEach(effectButton => effectButton.addEventListener('click', menuFunction));

        canvas.addEventListener('mousemove', drawFunction);
        canvas.addEventListener('mousedown', drawFunction);
        canvas.addEventListener('mousedown', () => isDrawing = true);
        canvas.addEventListener('mouseup', () => isDrawing = false);
        canvas.addEventListener('mouseout', () => isDrawing = false);
        canvas.addEventListener('mouseup', function () {
            colorPickerInputFill.value = ctx.fillStyle;
            colorPickerInputStroke.value = ctx.strokeStyle;
        });

*/
