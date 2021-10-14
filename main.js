const player1 =
{
	name: 'scorpion',
	hp: 100,
	img: 'http://reactmarathon-api.herokuapp.com/assets/scorpion.gif',
	weapon: ['gun','fire','harpoon '],
	atack()
	{
		console.log(`${this.name} 'Fight...'`)
	},
};
const player2 =
{
	name: 'subzero',
	hp: 100,
	img: 'http://reactmarathon-api.herokuapp.com/assets/subzero.gif',
	weapon: ['gun','ice','harpoon '],
	atack()
	{
		console.log(`${this.name} 'Fight...'`)
	},
};
function createPlayer(playerClass, player1)
{
	const player = document.createElement('div'),
		  progressbar = document.createElement('div'),
		  character1 = document.createElement('div'),
 		  life = document.createElement('div'),
		  name = document.createElement('div'),
		  img = document.createElement('img'),
		  arenas = document.querySelector('.arenas');

	player.classList.add('playerClass');
	player.className = playerClass;
	life.className = 'life';
	name.className = 'name';
	character1.className = 'character';
	progressbar.className = 'progressbar';
	img.src = player1.img;
	name.innerText = player1.name;
	life.style.width = player1.hp + '%';

	player.appendChild(progressbar);
	player.appendChild(character1);
	progressbar.appendChild(name);
	progressbar.appendChild(life);
	character1.appendChild(img);
	arenas.appendChild(player);
	console.log(character1);
}
createPlayer('player1',player1);
createPlayer('player2', player2);