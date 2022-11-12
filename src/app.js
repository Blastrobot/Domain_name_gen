/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

//

let pronoun = ["the", "our"];
let adj = ["great", "big"];
let noun = ["jogger", "racoon"];
let dom = [".com", ".es", ".net"];

let domains = document.querySelector("#domains"); // esta variable capturo mi p en html
let content = ""; // variable donde se guardan todos los dominios

for (let a = 0; a < pronoun.length; a++) {
  let proele = pronoun[a];

  for (let b = 0; b < adj.length; b++) {
    let adjele = adj[b];

    for (let c = 0; c < noun.length; c++) {
      let nounele = noun[c];

      for (let d = 0; d < dom.length; d++) {
        let domele = dom[d];

        // console.log(`${proele}${adjele}${nounele}${domele}`);
        content += `${proele}${adjele}${nounele}${domele}<br>`;
      }
    }
  }
}
domains.innerHTML = content;
