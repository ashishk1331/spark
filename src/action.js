//Fetching words


let container = document.querySelector('.container');
let loader = document.querySelector('.loader__container')

function hide_loader(){
	loader.classList.add('hidden');
}

function show_loader(){
	loader.classList.add('block');
}

function hydrate(){
	fetch('https://random-word-api.herokuapp.com/word?number=10')
	  .then(response => response.json())
	  .then(data => {
	  		let count = 1;
			let keys = Object.keys(data);
			for(let i=0;i<keys.length;i++){
				let val = data[keys[i]];
				for(let j=0;j<val.length;j++){
					if(count > 56)
						break;
					count += 1;
					add_p_to_container(create_p(val.charAt(j),false));
				}
				add_p_to_container(create_p(String.fromCharCode(Math.round(Math.random()*120+1)),true));
				if(count > 56)
					break
			}
			while(count < 57){
				add_p_to_container(create_p(String.fromCharCode(Math.round(Math.random()*120+1)),true));
				count += 1;
			}
	  });
}

function de_hydrate(){
	container.innerHTML = "";
}

function create_p(text,is_grayed){
	let p = document.createElement('p');
	p.textContent = text;
	if(is_grayed){
		p.classList.add("uppercase");
		p.style.color = "#454545";
	}
	else{
		p.classList.add("lowercase");
	}
	return p;
}

function add_p_to_container(p_node){
		container.appendChild(p_node);
}


document.querySelector('#refresh').addEventListener('click', (e) =>{
	e.preventDefault();
	de_hydrate();
	hydrate();
});

document.querySelector('#theme').addEventListener('click', (e) =>{
	e.preventDefault();
	let theme = document.body.classList[0];
	if(theme == 'dark'){
		document.body.classList = "light [ bg-white text-black ]";
		document.querySelectorAll('svg').forEach( item =>{
			item.style.fill = "black";
		});
	}
	else{
		document.body.classList = "dark [ bg-black text-white ]";
		document.querySelectorAll('svg').forEach( item =>{
			item.style.fill = "white";
		});
	}
});

hydrate();
hide_loader();