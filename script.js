"use strict"

// grid container
const gridContainer = document.querySelector('.grid-container');
const numOfPixels = gridContainer.childElementCount;
gridContainer.style.border = '1px solid red';

// Setting grid height to always equal its with.
const gridStyle = window.getComputedStyle(gridContainer);
const currentGridWidth = gridStyle.getPropertyValue('width');
//console.log(currentGridWidth);
const gridHeight = gridContainer.style.height = currentGridWidth;

// Sets the amount of rows and columns for the grid,
// and generates a div in each tile.

function generateGrid(gridSize) {
    if (gridSize <= 100) {
        gridContainer.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`
        gridContainer.style.gridTemplateRows = `repeat(${gridSize}, 1fr)`

        for (let i = 0; i < gridSize*gridSize; i++) {
            const div = document.createElement('div');

                div.classList.add('pixel');
                gridContainer.appendChild(div);     
        };
    } else {
        generateGrid(prompt("Sorry, can't handle that much. Keep it under 100."));
    };
//    console.log(gridSize);  
//    return gridSize;
};

// Initiating page
generateGrid(prompt("What size will your canvas be?(16-100) "));

// Getting the pixels to change color when mouse enters

const pixels = document.querySelectorAll('.pixel');

pixels.forEach((pixel)=>{
    pixel.addEventListener('mouseover', (e)=> {
        e.target.style.background = 'black';
    
    })
});

// Reset grid button
const resetBtn = document.createElement('button');
const wrap = document.querySelector('.wrap');
document.querySelector('main').insertBefore(resetBtn, wrap);

resetBtn.textContent = 'RESET GRID';
resetBtn.classList.add('btn');
resetBtn.id = 'resetBtn';
resetBtn.setAttribute('type', 'reset');
resetBtn.addEventListener('click', () => {
    window.location.reload(true);
});

