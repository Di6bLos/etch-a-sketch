"use strict"

// grid container
const gridContainer = document.querySelector('.grid-container');
const numOfPixels = gridContainer.childElementCount;
gridContainer.style.border = '1px solid red';






    function changeGridSize() {
        
       
    }





function createPixel(gridSize) {
    gridContainer.setAttribute('style',
    `grid-template-columns: repeat(${gridSize}, 10px); 
    grid-template-rows: repeat(${gridSize}, 10px);`);


    gridSize = gridSize*gridSize;
    for (let i = 0; i < gridSize; i++) {
         const div = document.createElement('div');

            div.classList.add('pixel');
            gridContainer.appendChild(div);  
        
    }

   console.log(gridSize); 
   return gridSize;
};




createPixel(32);

