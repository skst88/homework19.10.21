let api2 = "https://rickandmortyapi.com/api/character";
let api = $(".list");
function render(a) {
  fetch(a)
    .then((response) => response.json())
    .then((data) => {
      let result = data.results;
      result.forEach((item) => {
        api.append(`<div>
        <li>${item.name}</li> 
        <div class="img" style="background: url(${item.image}) no-repeat"></div>
        </div>
        `);
      });
    });
}

render(api2);

//
let API1 = "http://localhost:3000/characters";
const addProduct = () => {
  let data = fetch("https://rickandmortyapi.com/api/character");
  data
    .then((response) => response.json())
    .then((data) => {
      let result = data.results;
      //   let character = result.character;
      fetch(API1, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
    });
};
addProduct();
//
let block2 = $(".block2");
let list2 = $(".list2");
fetch("http://localhost:3000/characters")
  .then((res) => res.json())
  .then((data) => {
    console.log(data[0].results);
    let get = data[0].results;
    get.forEach((item) => {
      list2.append(`
     <li>${item.name}</li><img src="${item.image}">
     `);
    });
  });
