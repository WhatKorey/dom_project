document.querySelector('#starters_image_div img').style.border = '5px dotted yellow';

let listItems = document.querySelectorAll('.list ul li');
listItems[0].textContent = 'Bulbasaur - The Seed Pokémon';
listItems[1].textContent = 'Charmander - The Lizard Pokémon';
listItems[2].textContent = 'Squirtle - The Tiny Turtle Pokémon';

document.querySelectorAll('.each_pokemon_container img').forEach(img => {
    img.style.border = '5px dotted yellow';
    img.style.borderRadius = '10px';
});

document.querySelector('#bulbasaur_container .pokemon_description').textContent = 'Bulbasaur is a dual-type Grass/Poison Pokémon introduced in Generation I.';
document.querySelector('#charmander_container .pokemon_description').textContent = 'Charmander is a Fire-type Pokémon introduced in Generation I.';
document.querySelector('#squirtle_container .pokemon_description').textContent = 'Squirtle is a Water-type Pokémon introduced in Generation I.';