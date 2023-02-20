const elPokeList = document.querySelector(".js-poke-list");
const pokeFragment = new DocumentFragment();

const elPokeTemplate = document.querySelector(".js-poke-temp").content;

renderPoke(pokemons)
function renderPoke(pokemons) {
  pokemons.forEach(function (poke) {
    const clonePokeTemplate = elPokeTemplate.cloneNode(true);
    
    // console.dir(clonePokeTemplate);
    const newPokeItem = clonePokeTemplate.querySelector(".js-poke-item");
    clonePokeTemplate.querySelector(".js-poke-img").src = poke.img;
    clonePokeTemplate.querySelector(".js-poke-title").textContent = poke.name;
    clonePokeTemplate.querySelector(".js-poke-num").textContent = poke.num;
    clonePokeTemplate.querySelector(".js-poke-type").textContent = poke.type.join(", ");
    clonePokeTemplate.querySelector(".js-poke-time").textContent = poke.spawn_time;
    clonePokeTemplate.querySelector(".js-candy").textContent = poke.candy;
    clonePokeTemplate.querySelector(".candy-count").textContent = poke.candy_count;
    clonePokeTemplate.querySelector(".candy-weight").textContent = poke.weight;
    clonePokeTemplate.querySelector(".js-poke-time").setAttribute("datetime", `2023-02-01 ${poke.spawn_time}`);
    
    pokeFragment.appendChild(newPokeItem);
  });
  
  elPokeList.appendChild(pokeFragment);
}
