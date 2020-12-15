import React from "react";

const name = "Chris";
const nameLength = 5;
const thoughts = "Is interesting...";

const stripVowels = str => {
  return Array.prototype.filter.call(str, char => !"aeiou".includes(char)).join("-");
};
const hasVowels = str => {
  return Array.prototype.filter.call(str, char => "aeiou".includes(char)).join("-");
};

function JSXVariables() {
  return (
    <div className="main-container">
      <div className="container">
        <div className="jumbotron">
          <h1>Hi! My name is {name}</h1>
          <h2>My name has {nameLength} letters</h2>
          <h2>I think React {thoughts}</h2>
          <h2>Your name minus vowels {stripVowels(name)}</h2>
          <h2>Your name include vowels {hasVowels(name)}</h2>
        </div>
      </div>
    </div>
  );
}

export default JSXVariables;
