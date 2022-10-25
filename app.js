const screen = document.querySelector(".screen");
const result = document.querySelector(".result")
const buttons = document.querySelectorAll(".btn-gray");
const operators = document.querySelector(".operations");
const equal = document.querySelector(".btn-equal");
const clear = document.querySelector(".btn-clear");
const deleteButton = document.querySelector(".btn-remove");

buttons.forEach(button => {
    button.addEventListener("click", e => {
        let value = e.target.dataset.num;
        if (value === "." && screen.value.includes(".")) return
        // The code for the Four Different Operations
        if (e.target.classList.contains("operations")) {
            if (screen.value === "") {
                return
            }else if(screen.value.includes(e.target.dataset.num)){
                let operator = e.target.dataset.num.toString()
                screen.value += operator.slice(0, operator.length - 1)
                console.log(screen.value);
            }
        }
        screen.value += value;
    })

    
    equal.addEventListener("click", () => {
        if (screen.value === "") {
            result.value = "";
        } else {
            let answer = eval(screen.value);
            result.value = answer;
        }
        if(result.value.length > 12){
            let word = result.value.toString()
            result.value = word.slice(0, 12);
        }
        result.classList.add("result-font");
    })


    clear.addEventListener("click", () => {
        screen.value = "";
        result.value = "";
    })
});

deleteButton.addEventListener("click", () => {
    let string = screen.value.toString();
    screen.value = string.slice(0, string.length - 1)
})