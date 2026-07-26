const display = document.getElementById("display");
const buttons = document.querySelectorAll("button");

let expression = "";

buttons.forEach(button => {

    button.addEventListener("click", () => {

        const value = button.innerText;

        if (value === "AC") {
            expression = "";
            display.value = "";
        }

        else if (value === "⌫") {
            expression = expression.slice(0, -1);
            display.value = expression;
        }

        else if (value === "=") {

            try {

                let result = expression
                    .replace(/×/g, "*")
                    .replace(/÷/g, "/")
                    .replace(/−/g, "-");

                display.value = eval(result);
                expression = display.value;

            } catch {

                display.value = "Error";
                expression = "";

            }

        }

        else {

            expression += value;
            display.value = expression;

        }

    });

});