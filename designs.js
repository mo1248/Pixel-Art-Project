//Variable definitions

let size = document.getElementById('sizePicker');
let height = document.getElementById('inputHeight');
let width = document.getElementById('inputWidth');
let color = document.getElementById('colorPicker');
let canvas = document.getElementById('pixelCanvas');
makeGrid(height, width);

// Build out makeGrid

function makeGrid(height, width) {
    for (let h = 0; h < height.value; h++) {
        let newRow = canvas.insertRow(h);
        for (let w = 0; w < width.value; w++) {
            let cell = newRow.insertCell(w);
            cell.addEventListener('click', (event) => {
                cell.style.backgroundColor = color.value;
            });
        }
    }
}

// Select size input

size.addEventListener('click', (event) => {
    event.preventDefault();
    canvas.firstElementChild.remove();
    makeGrid(height, width);
});
