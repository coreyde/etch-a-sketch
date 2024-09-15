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

function numberPrompt() {
  const userInput = prompt("Please enter a number to choose grid size:");

  if (userInput !== null) {
    const number = parseInt(userInput);
    console.log(number);

    if (number) {
      createGrid(number);
    } else if (number > 100) {
      alert("Please enter a number lower than 100.");
    } else {
      alert("Please enter a number.");
    }
  }
}
