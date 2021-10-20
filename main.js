const player1 =
{
	player: 1,
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
	player: 2,
	name: 'subzero',
	hp: 100,
	img: 'http://reactmarathon-api.herokuapp.com/assets/subzero.gif',
	weapon: ['gun','ice','harpoon '],
	atack()
	{
		console.log(`${this.name} 'Fight...'`)
	},
};
const arenas = document.querySelector('.arenas');
const randomButton = document.querySelector('.button');

function createElement(tag, className)
{
	const tag1 = document.createElement(tag);
	if(className)
	{
		tag1.classList.add(className);
	}

	return tag1;
};

function createPlayer(playerObj)
{
	const player = createElement('div','player'+ playerObj.player),
		  progressbar = createElement('div', 'progressbar'),
		  character = createElement('div', 'character'),
 		  life = createElement('div', 'life'),
		  name = createElement('div', 'name'),
		  img = createElement('img');

	img.src = playerObj.img;
	name.innerText = playerObj.name;
	life.style.width = playerObj.hp + '%';

	player.appendChild(progressbar);
	player.appendChild(character);
	progressbar.appendChild(name);
	progressbar.appendChild(life);
	character.appendChild(img);

	return player;

}
function changeHp (player)
{
	const playerLife = document.querySelector('.player' + player.player +' .life');
	console.log(player.hp)
	player.hp -= Math.ceil(Math.random() * 20);
	playerLife.style.width = player.hp + '%';



	if (player.hp <= 0){
		playerLife.style.width = 0 + '%';
		randomButton.disabled = true;
        if (player1.hp >= 1){
           arenas.appendChild(playerWin(player1.name));
        }else{
           arenas.appendChild(playerWin(player2.name));
        }
    }
}
function playerWin(name)
{
	const winTitle = createElement('div', 'winTitle');
	winTitle.innerText = name + 'Wins';
console.log(winTitle);
		return winTitle;
}
randomButton.addEventListener('click', function ()
{
	console.log('####: Click Random Button');
	changeHp(player1);
	changeHp(player2);
});

arenas.appendChild(createPlayer(player1));
arenas.appendChild(createPlayer(player2));


player1.atack();
player2.atack();