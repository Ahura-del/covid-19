import Corona from "./http";
import Ui from "./UI";
let corona = new Corona();
let ui = new Ui();

$(document).ready(function () {
  $(".fixed-action-btn").floatingActionButton();
});

function numberWithCommas(x) {
  x = x.toString();
  var pattern = /(-?\d+)(\d{3})/;
  while (pattern.test(x)) x = x.replace(pattern, "$1,$2");
  return x;
}

document.addEventListener("DOMContentLoaded", getDetails);

function getDetails() {
  corona
    .get(`https://coronavirus-19-api.herokuapp.com/countries`)
    .then((data) => data)
    .then((rsault) => {
      document.querySelector(".world-case").textContent = numberWithCommas(
        parseInt(rsault[0].cases)
      );
      document.querySelector(".world-death").textContent = numberWithCommas(
        parseInt(rsault[0].deaths)
      );
      document.querySelector(".world-recover").textContent = numberWithCommas(
        parseInt(rsault[0].recovered)
      );
      document.querySelector(".world-critical").textContent = numberWithCommas(
        parseInt(rsault[0].critical)
      );
      let output = "";
      for (let i = 1; i < 8; i++) {
        output += `
    <tr>
    <td>${rsault[i].country}</td>
      <td class="purple-text darken-4">${numberWithCommas(
        parseInt(rsault[i].cases)
      )}</td>
      <td class="blue-text lighten-2">${numberWithCommas(
        parseInt(rsault[i].todayCases)
      )}</td>
      <td class=" light-green-text">${numberWithCommas(
        parseInt(rsault[i].active)
      )}</td>
      <td class="red-text accent-4">${numberWithCommas(
        parseInt(rsault[i].deaths)
      )}</td>
      <td class="teal-text accent-4">${numberWithCommas(
        parseInt(rsault[i].recovered)
      )}</td>
      <td class="red-text darken-4">${numberWithCommas(
        parseInt(rsault[i].todayDeaths)
      )}</td>
      <td class="orange-text lighten-1">${numberWithCommas(
        parseInt(rsault[i].critical)
      )}</td>
  </tr>
    
    `;
      }
      document.querySelector(".output").innerHTML = output;
    })
    .catch((err) => console.log(err));
}

// function getData(){

// }
document.querySelector("#search-input").addEventListener("keyup", (e) => {
  if (e.target.value != "") {
    corona
      .get(
        `https://coronavirus-19-api.herokuapp.com/countries/${e.target.value}`
      )
      .then((data) => data)
      .then((res) => {
        let output = `<tr>
        <td>${res.country}</td>
          <td class="purple-text darken-4">${numberWithCommas(
            parseInt(res.cases)
          )}</td>
          <td class="blue-text lighten-2">${numberWithCommas(
            parseInt(res.todayCases)
          )}</td>
          <td class=" light-green-text">${numberWithCommas(
            parseInt(res.active)
          )}</td>
          <td class="red-text accent-4">${numberWithCommas(
            parseInt(res.deaths)
          )}</td>
          <td class="teal-text accent-4">${numberWithCommas(
            parseInt(res.recovered)
          )}</td>
          <td class="red-text darken-4">${numberWithCommas(
            parseInt(res.todayDeaths)
          )}</td>
          <td class="orange-text lighten-1">${numberWithCommas(
            parseInt(res.critical)
          )}</td>
      </tr>`;
        document.querySelector(".output").innerHTML = output;
      })
      .catch((err) => err);
  } else {
    getDetails();
  }
});

document.querySelector(".lang-link").addEventListener("click", (e) => {
  e.preventDefault();
  if (e.target.className == "persian-lang") {
    let img = document.querySelector(".persian-lang");
    img.setAttribute("src", "Assets/usa.png");
    img.classList.remove("persian-lang");
    img.classList.add("usa-lang");
    ui.changToPersian();
  } else {
    let img = document.querySelector(".usa-lang");
    img.setAttribute("src", "Assets/iran.png");
    img.classList.remove("usa-lang");
    img.classList.add("persian-lang");
    ui.changToEnglish();
  }
});
