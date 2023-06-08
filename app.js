import data from './data.json' assert {type: 'json'};
const reactionSpan = document.querySelector(".reaction p span");
const memorySpan = document.querySelector(".memory p span");
const verbalSpan = document.querySelector(".verbal p span");
const visualSpan = document.querySelector(".visual p span");

reactionSpan.textContent = data[0]["score"];
memorySpan.textContent = data[1]["score"];
verbalSpan.textContent = data[2]["score"];
visualSpan.textContent = data[3]["score"];
console.log(reactionSpan.textContent);
