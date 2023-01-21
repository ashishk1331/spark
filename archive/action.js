//Fetching words

let body = document.body;
let container = document.querySelector('.container');
let loader = document.querySelector('.loader__container')

function hide_loader(){
	loader.classList.add('hidden');
	loader.classList.remove('flex');
}

function show_loader(){
	loader.classList.add('flex');
	loader.classList.remove('hidden');
}
async function hydrate(){
	await fetch('https://random-word-api.herokuapp.com/word?number=10')
	  .then(response => response.json())
	  .then(data => {
	  	de_hydrate();
  		let count = 0, i = 0;
		while(count < 56){
			data[i].split('').forEach(alpha => {
				if(count < 56){
					add_p_to_container(create_p( alpha ));
					count += 1;
				}
			});

			if(count < 56){
				add_p_to_container(create_p(' '));
				count+=1;
			}

			i+=1;
		}
		hide_loader();
	 }).catch(err => {
	 	show_loader();
	 });
}

function de_hydrate(){
	container.innerHTML = "";
}

function create_p(text,is_grayed){
	let p = document.createElement('p');
	p.textContent = text;
	return p;
}

function add_p_to_container(p_node){
		container.appendChild(p_node);
}


document.querySelector('#refresh').addEventListener('click', async(e) =>{
	e.preventDefault();
	show_loader();
	await hydrate();
});

document.querySelector('#theme').addEventListener('click', (e) =>{
	e.preventDefault();
	if(body.classList.contains('dark')){
		body.classList.remove('dark','bg-black','text-white');
		body.classList.add('light','bg-white','text-black');
		document.querySelectorAll('svg').forEach( item =>{
			item.style.fill = "black";
		});
	}
	else{
		body.classList.add('dark','bg-black','text-white');
		body.classList.remove('light','bg-white','text-black');
		document.querySelectorAll('svg').forEach( item =>{
			item.style.fill = "white";
		});
	}
});

hydrate();