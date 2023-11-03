const container = document.querySelector('#container');
const button = document.querySelector("#btnCreate");



makeRows(16, 16);

function userRows(){

}

function random(number) {
    return Math.floor(Math.random() * number + 1);
}

function makeRows(rows, cols){
    container.style.setProperty("--grid-rows", rows);
    container.style.setProperty("--grid-cols", cols);
    for(c = 0; c < (rows * cols); c++){
        let div = document.createElement("div");
        div.classList.add("tile")
        div.addEventListener("mouseover", function change() {
            const randomColor = "rgb(" + random(255) + "," + random(255) + "," + random(255) + ")";
            div.style.backgroundColor = randomColor;
        })
        container.appendChild(div);
    }
}

function formatGrid(number){
    const tiles = document.getElementsByClassName("tile");
}

button.addEventListener('click', function changeSize() {
    size = prompt("Enter a number between 1 and 100");
    container.innerHTML = "";
    if (0 < size && size <= 100) {
        makeRows(size, size);
    } else {
        makeRows(16, 16);
        alert ("Only type values between 1 to 100");
    }
});