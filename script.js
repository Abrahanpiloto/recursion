const numberInput = document.getElementById("number-input");
const convertBtn = document.getElementById("convert-btn");
const result = document.getElementById("result");

const checkUserInput = () => {
  if(!numberInput.value || isNaN(parseInt(numberInput.value)) || numberInput.value < 0) {
    alert("Please provide a decimal number greater than or equal to 0")
    return
  }
  decimalToBinary(parseInt(numberInput.value));
  numberInput.value = "";
};

convertBtn.addEventListener("click", checkUserInput);

numberInput.addEventListener("keydown", (e) => {
  if(e.key === "Enter") {
    checkUserInput()
  }
}
);

const decimalToBinary = (input) => {
  const inputs = [];
  const quotients = [];
  const remainders = [];

  if(input === 0) {
    result.innerText = "0"
    return
  };
  
  while(input > 0) {
    
    const quotient = Math.floor(input/2);
    const remainder = input % 2;
    inputs.push(input)
    quotients.push(quotient);
    remainders.push(remainder);
    input = quotient;
  };
  result.innerText = remainders.reverse().join("");
  console.log("inputs: ", inputs);
  console.log("quotients: ", quotients);
  console.log("remainders: ", remainders);
};

