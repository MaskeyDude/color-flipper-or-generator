//set initial count
let Count = 0;
// select value & btns
const Counter_Value = document.querySelector("#Counter_Value");
const btns = document.querySelectorAll(".Counter_Btn");

btns.forEach(function (Counter_Btn) {
    Counter_Btn?.addEventListener("click", function (e) {
        const styles = e.currentTarget.classList;
        if (styles.contains('decrease')) {
            Count--;
        } else if (styles.contains('increase')) {
            Count++;
        } else {
            Count = 0;
        }

        if (Count < 0) {
            Counter_Value.style.color = "red";
        }

        if (Count > 0) {
            Counter_Value.style.color = "green";
        }

        if (Count === 0) {
            Counter_Value.style.color = "#d8d8d8";
        }

        console.log(Count);
        Counter_Value.textContent = Count;
    });
});