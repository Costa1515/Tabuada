const multiplicate = document.getElementById("button");
const input = document.getElementById("input");
const table = document.getElementById("table");
const form = document.getElementById("form");
let result = 1;

form.addEventListener("submit", (e) => {
    e.preventDefault();
})

multiplicate.addEventListener("click", () => {
    for (let i = 0; i <= 12; i++) {
        result = input.value * i;
        console.log(result);
        const tr = document.createElement("tr");
        const td1 = document.createElement("td");
        const td2 = document.createElement("td");
        const td3 = document.createElement("td");
        const td4 = document.createElement("td");
        const td5 = document.createElement("td");

        td1.innerText = input.value;
        td2.innerText = "X";
        td3.innerText = i;
        td4.innerText = "=";
        td5.innerText = result;

        table.appendChild(tr);
        tr.appendChild(td1);
        tr.appendChild(td2);
        tr.appendChild(td3);
        tr.appendChild(td4);
        tr.appendChild(td5);




    }

})