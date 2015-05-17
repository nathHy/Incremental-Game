var data = {
	wood: 0,
	woodMultipler:1,
	stone:0,
	stoneMultipler:1,
	food: 0,
	foodMultipler:1,
};

var persistant = {
	changedMap:false,
	currentMap:'townCenter',
	prevMap:'townCenter'
};

var maps = ['townCenter','lumberYard','quarry'];

var numberOfTrees=10;
var numberOfStones=10;
var numberOfFood=10;

$(document).ready(function()
{
	generateScene();
	setInterval(function(){ // runs once second
		updateResources();
		drawScene();
	},1000);

});

function increase(material)
{
	if (material == 'wood') 
	{
		data.wood+=data.woodMultipler*1;
		updateResources();
	}
	if (material == 'stone') 
	{
		data.stone+=data.stoneMultipler*1;
		updateResources();
	}
	if (material == 'food') 
	{
		data.food+=data.foodMultipler*1;
		updateResources();
	}
}


function generateScene() 
{
	for (var i = numberOfTrees - 1; i >= 0; i--) {
		createTree();
	}
	for (var j = numberOfStones - 1; j >= 0; j--) {
		createStone();
	}
	for (var k = numberOfFood - 1; k >= 0; k--) {
		createFood();
	}
}

function createTree()
{
	var gameWidth = parseInt($('#gameArea').css('width'))-200;
	var gameHeight = parseInt($('#gameArea').css('height'))-300;
	var treeData = {
		left:rndMax(gameWidth),
		top:rndMax(gameHeight)
	};
	var tag = $('<img src="../img/tree.png" onClick=increase(\'wood\') class="tree resource" />')
	.css({
		'left': treeData.left + 'px',
		'top': treeData.top +'px',
		'height':'100px',
		'width':'100px'
	});
	$('#townCenter').append(tag);
}

function createStone()
{
	var gameWidth = parseInt($('#gameArea').css('width'))-200;
	var gameHeight = parseInt($('#gameArea').css('height'))-300;
	var treeData = {
		left:rndMax(gameWidth),
		top:rndMax(gameHeight)
	};
	var tag = $('<img src="../img/boulder.png" onClick=increase(\'stone\') class="stone resource" />')
	.css({
		'left': treeData.left + 'px',
		'top': treeData.top +'px',
		'height':'100px',
		'width':'100px'
	});
	$('#townCenter').append(tag);
}

function createFood()
{
	var gameWidth = parseInt($('#gameArea').css('width'))-200;
	var gameHeight = parseInt($('#gameArea').css('height'))-300;
	var treeData = {
		left:rndMax(gameWidth),
		top:rndMax(gameHeight)
	};
	var tag = $('<img src="../img/bush.png" onClick=increase(\'food\') class="bush resource" />')
	.css({
		'left': treeData.left + 'px',
		'top': treeData.top +'px',
		'height':'100px',
		'width':'100px'
	});
	$('#townCenter').append(tag);
}

function rndMax(max) { 
	var num =Math.floor(Math.random()*(max+1));
	return  num;
}

function rndMinMax(min,max) { 
	var num = min - 1;
	while (min > num && num < max) {
		num =Math.floor(Math.random()*(max+1));
	}
	return  num;
}

function updateResources()
{
	$('#counter').html('<li>' + data.wood + '<li>' + data.stone +'<li>' + data.food);
}

function moveToMap(mapName)
{
	if (mapName === '') {
		console.log('Empty map name. Check img tag');
		return;
	}
	persistant.currentMap=mapName;
	for (var i = maps.length - 1; i >= 0; i--) {
		if (maps[i] === mapName) {
			document.getElementById(maps[i]).style.display = 'block';
		} else {
			document.getElementById(maps[i]).style.display = 'none';
		}
	}
	drawScene();
}

function drawScene()
{
	//draw workers moving.
	// draw items moving
	//
}


function loadLumberYard()
{
	
}