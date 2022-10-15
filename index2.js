import prompt from "prompt-sync";

const name = prompt()("What is your name?");

console.log(name);

export const toReturn = name;
