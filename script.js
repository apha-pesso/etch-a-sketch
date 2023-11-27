// Sketchpad

const gridContainer = document.querySelector(".grid-container");

// Grid container styling
gridContainer.style.width = "500px";
gridContainer.style.height = "500px";

const container = document.querySelector(".container");

// add  button to take inpput
const inputButton = document.createElement("button");
inputButton.innerText = "Enter number of grids";
inputButton.addEventListener("click", () => {
  const grid = prompt("Enter number of grids: ");

  while (gridContainer.firstChild) {
    gridContainer.removeChild(gridContainer.firstChild);
  }
  createGrid(grid);
  console.log(grid);
});

container.appendChild(inputButton);

function createGrid(count = 16) {
  for (let i = 0; i < count; i++) {
    const outerBox = document.createElement("div");
    outerBox.style.display = "flex";

    const minColumnWidth = "100px";
    const maxColumnWidth = "1fr";

    outerBox.style.gridTemplateColumns = `repeat(auto-fill, minmax(${minColumnWidth}, ${maxColumnWidth}))`;

    gridContainer.appendChild(outerBox);
    // outerBox.style.width = "960px";
    outerBox.style.margin = "0 auto";

    for (let j = 0; j < count; j++) {
      const box = document.createElement("div");
      box.setAttribute("class", "box");
      box.style.flex = 1;
      box.style.border = "1px solid #000";
      box.style.padding = "10px";
      outerBox.appendChild(box);
    }
  }

  const boxes = document.querySelectorAll(".box");

  boxes.forEach((box) => {
    box.addEventListener("mouseout", () => {
      box.style.backgroundColor = "pink";
    });
  });
}

createGrid();
