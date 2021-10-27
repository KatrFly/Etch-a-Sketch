const container = document.querySelector(".container");
let n = prompt("hoeveel op hoeveel?");

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

const divs = document.querySelectorAll('.grid');

divs.forEach((div) => {
    div.addEventListener("mouseenter", () => {
        div.style.backgroundColor = "purple";
    });
});

const reset = document.querySelector('.reset');
button.addEventListener("click", () => {
    makeGrid(n);
})

//een maximum groote op de hele container zetten, waarbinnen de grid altijd verdeeld wordt.
//borders opzetten zodat je ze ziet, en een kleine margin tussen de divs.
// eventlisteners opzetten voor wanneer er over een grid wordt gehovered. Dat geldt voor alle divs. 