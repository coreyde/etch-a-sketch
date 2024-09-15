const container = document.querySelector("#grid-container");

function createGrid(size) {
  // Clear previous grid
  container.innerHTML = "";

  // Set CSS Grid properties dynamically based on the size
  container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
  container.style.gridTemplateRows = `repeat(${size}, 1fr)`;

  // Create grid cells
  for (let i = 0; i < size * size; i++) {
    const div = document.createElement("div");
    div.classList.add("grid-item");
    container.appendChild(div);
  }
}
