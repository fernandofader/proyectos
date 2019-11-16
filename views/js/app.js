
// elementos 
const form = document.getElementById('search-form'); //elemento en el css
const searchField = document.getElementById('search-keyword'); // elemento en el css
const cuadroDatos = document.getElementById('CuadrodeDatos'); //elemento en el css
 const button = document.createElement('button'); 
 button.onclick = function (e){
  alert ("asdasd");
}
  
let NombrePokemon; //le da variable al texto del input

//evento del boton BUSCAR
form.addEventListener('submit', function (e){
  e.preventDefault();
  cuadroDatos.innerHTML = '';
  NombrePokemon = searchField.value; //captura el texto del input
  getPokemon();
  
})

//peticion con la funcion getPokemon
function getPokemon() {
//para traer los datos
  const articleRequest = new XMLHttpRequest();
  articleRequest.open('GET', `https://pokeapi.co/api/v2/pokemon/${NombrePokemon}`);
  articleRequest.onload = addPokemon;
  articleRequest.onerror = handleError;
  articleRequest.send();
  
  // para traer otros datos
  const articleRequestt = new XMLHttpRequest();
  articleRequestt.open('GET', `https://pokeapi.co/api/v2/pokemon-species/${NombrePokemon}`); //PARA LLAMAR DESCRIPCIONES Y DEMAS
  articleRequestt.onload = addPokemon;
  articleRequestt.onerror = handleError;
  articleRequestt.send();
}

function handleError() {
  console.log('Ha ocurrido un error');
}

function addPokemon() {
  const data = JSON.parse(this.responseText);
  //const response = data.response;
  console.log(data);

  //console.log(article);

  
  // muestra imagen
  let imgPokemon = document.createElement('img');
  imgPokemon.className= 'img-responsive';
  imgPokemon.style.width='10em';
  let picture = data.sprites.front_default;
  imgPokemon.src= picture;
  cuadroDatos.appendChild(imgPokemon);


  //muestra el nombre
  let names = document.createElement('li');
  let namesPokemon = data.name;
  console.log(namesPokemon);
  //names.appendChild(namesPokemon);
  names.innerText = 'Nombre: ' + namesPokemon;
  cuadroDatos.appendChild(names);

  
  //muestra habilidad
  let li = document.createElement('li');
  const pokemon = [];
  for (let i=0; i < data.abilities.length; i++ ){
    pokemon.push(data.abilities[i].ability.name);
    console.log(data.abilities);
  }
console.log(pokemon);
  li.innerText = 'Habilidades: ' + pokemon;
  cuadroDatos.appendChild(li);
  
  

  
  //muestra el tipo
  let type = document.createElement('li');
  let typesPokemon = data.types[0].type.name;
  console.log(typesPokemon);
  type.innerText = 'Tipo: ' + typesPokemon;
  cuadroDatos.appendChild(type);

  
  // Boton agregar al team
    
    button.type = 'button';
    button.innerText = 'Agregar a tu Team';
	
//	button.on('click', function (e) {  //Evento para el Click del boton 
//              alert ("Seguro que desea agregar?");
//            });
    
	cuadroDatos.appendChild(button);
	

  
    

  
  

cuadroDatos.style.display='block';
}


        
