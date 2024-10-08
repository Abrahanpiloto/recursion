const numberInput = document.getElementById("number-input");
const convertBtn = document.getElementById("convert-btn");
const result = document.getElementById("result");



const checkUserInput = () => {
  if(!numberInput.value || isNaN(parseInt(numberInput.value)) || numberInput.value < 0) {
    alert("Please provide a decimal number greater than or equal to 0")
    return
  }
  result.innerText = decimalToBinary(parseInt(numberInput.value));
  numberInput.value = "";
};



const decimalToBinary = (input) => {
  if(input === 0 || input === 1) {
    return String(input)
  } else {
    return decimalToBinary(Math.floor(input/2)) + (input % 2);
  }
};

convertBtn.addEventListener("click", checkUserInput);

numberInput.addEventListener("keydown", (e) => {
  if(e.key === "Enter") {
    checkUserInput()
  }
}
);

// const decimalToBinary = (input) => {
//  let binary = "";
 
//  if(input === 0) {
//   binary = "0";
//  };

//  while (input > 0) {
//   binary = (input % 2) + binary;
//   input = Math.floor(input / 2);
   
//  }
//  result.innerText = binary;
// };



// esta funcion es solo para observar como funciona una funcion recursiva y el call stack:
// const countDownAndUp = (number) => {
//   console.log(number);
//   if (number === 0) {
//     console.log("caso base alcanzado")
//     return
//   } else {
//     countDownAndUp(number - 1)
//     console.log(number)
//   };
// };
// countDownAndUp(3);
// //////////////////fin///////////////
