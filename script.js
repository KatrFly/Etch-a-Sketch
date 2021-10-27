const container = document.querySelector(".container");
let n = 16;

makeGrid(n);
makeMagic(); 

const erase = document.querySelector('#eraser');
erase.addEventListener("click", () => {
    eraseColor();
}); 

function makeGrid(n) {
    // n = prompt("hoeveel op hoeveel?");
    for (i = 0; i < n; i++) {
        let div = document.createElement('div')
        container.appendChild(div);
        div.classList.add("rows");

        for(j = 0; j < n; j++) {
            let divv = document.createElement('div');
            div.appendChild(divv);
            divv.classList.add("grid");
            console.log(i);
        }
    }
}


function makeMagic() {
    const divs = document.querySelectorAll('.grid');

    divs.forEach((div) => {
        div.addEventListener("mouseenter", () => {
            div.style.backgroundColor = "pink";
        });
    });
}



const reset = document.querySelector('#reset');
reset.addEventListener("click", () => {
    makeGrid(n);
    makeMagic();
})


function eraseColor() {
    const divs = document.querySelectorAll('.grid');

    divs.forEach((div) => {
        div.addEventListener('mouseenter', () => {
            div.style.backgroundColor = "white";
        });
    });
}