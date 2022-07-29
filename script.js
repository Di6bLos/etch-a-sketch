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
    gridContainer.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`
    gridContainer.style.gridTemplateRows = `repeat(${gridSize}, 1fr)`

    for (let i = 0; i < gridSize*gridSize; i++) {
         const div = document.createElement('div');

            div.classList.add('pixel');
            gridContainer.appendChild(div);     
    };
   console.log(gridSize); 
   return gridSize;
};

generateGrid(32);

// Getting the pixels to change color when mouse enters

const pixels = document.querySelectorAll('.pixel');

pixels.forEach((pixel)=>{
    pixel.addEventListener('mouseover'||'touchstart', (e)=> {
        e.target.style.background = 'black';
    
    })
});

