const firstName = "Tomasz";
const age = 37;

const emptyParagraph = document.querySelector(".notes__paragraph--js");

emptyParagraph.innerHTML = "Nawet udało mi się przejść do 5 tygodnia.";

function calculate(myNumber) {
  console.log(`Dostałam ${myNumber}`);
  myNumber = myNumber * 7;
  return myNumber * 7;
}
const myResult = calculate(age);

console.log(myResult);
console.log(age);

function greet(age, firstName) {
  console.log(
    `Witaj Drogi Odwiedzający, nazywam się  ${firstName} i mam ${age} lat.`
  );
}
 greet(age,firstName)
 