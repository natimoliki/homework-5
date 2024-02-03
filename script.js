"use strict";

// 1.

function findUnit(link) {
  return link.indexOf("https://") !== -1;
}
let link = "https://google.com";
console.log(findUnit(link));

//   2.

let newelement = document.createElement("img");
document.getElementById("wraper").appendChild(newelement);

newelement.setAttribute(
  "scr",
  "https://static.semrush.com/blog/uploads/media/bd/39/bd3945cff339fe5cd96c069ce6e5f1f3/javascript-rendering.svg"
);
newelement.setAttribute("alt", "image");
wraper.appendChild(newelement);

let text = document.createElement("h2");

text.classList.add("title");
text.textContent = "image title";
text.style.color = "red";
text.style.fontSize = "30px";
document.getElementById("wraper").appendChild(text);

// 3. 



let containeraaray = document.querySelectorAll(".container");

containeraaray.forEach(function (item) {
    let paragraphs = document.createElement("p");
paragraphs.textContent = "hello";
  item.appendChild(paragraphs);
});


// 4. 

let array6 = [-1, -2, -3, 4].some ((number) => number > 0);

console.log(array6);

// 5.

let array7 = "12345".split("").reduce ((accumulators, currentValues)=> {
    return accumulators + Number(currentValues);
  }, 0);
  console.log(array7);


// 6.

let array8 = [-1, -2, -3, 4]
let sum = array8.reduce((accumulator, currentValue) => {
  return accumulator + currentValue
},0);

console.log(sum)


