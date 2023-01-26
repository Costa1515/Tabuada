const multiplicate = document.getElementById("button");
const input = document.getElementById("input");
const table = document.getElementsByTagName("table");
const div = document.getElementById("table1");
let result = 1;

div.addEventListener("submit", (e) => {
    e.preventDefault();
})

multiplicate.addEventListener("click", () => {
    for (let i = 0; i <= 12; i++) {
        result = input.value * i;
        console.log(result);
    }

})