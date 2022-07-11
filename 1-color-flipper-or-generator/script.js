const Hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const Btn = document.querySelector(".Btn");
const Hex_Code = document.querySelector(".Hex_Code");

Btn?.addEventListener('click', function () {
    let Code = '#';
    for (let i = 0; i < 6; i++) {
        Code += Hex[Get_Random_Number()];
    }
    Hex_Code.textContent = Code;
    document.body.style.backgroundColor = Code;
});

function Get_Random_Number() {
    return Math.floor(Math.random() * Hex.length);
}
