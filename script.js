const container = document.querySelector('#container');
// const testContent = document.createElement('p');
// testContent.textContent = "test";
// container.appendChild(testContent);

//function to create intial 16 boxes
function divGrid(){
    for (let i = 0; i < 16; i++){
        const square = document.createElement('div');
        square.style.backgroundColor= "red";
        square.style.borderColor = "black";
        square.style.borderStyle = "solid";
        square.className = "grid";
        container.appendChild(square);
    }
}

divGrid();