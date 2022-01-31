// Global variables
const time_el = document.querySelector('.watch .time');
const start_btn = document.getElementById('start');
const stop_btn = document.getElementById("stop");
const reset_btn = document.getElementById("reset");

let seconds = 0;
let interval = null;

// Event listeners
start_btn.addEventListener('click', start);
stop_btn.addEventListener("click", stop);
reset_btn.addEventListener("click", reset);

// Update the timer
function timer () {
	seconds++;

	// Format our time
	let hrs = Math.floor(seconds / 3600);
	let mins = Math.floor((seconds - (hrs * 3600)) / 60);
	let secs = seconds % 60;

	if (secs < 10) secs = '0' + secs;
	if (mins < 10) mins = "0" + mins;
	if (hrs < 10) hrs = "0" + hrs;

	time_el.innerText = `${hrs}:${mins}:${secs}`;
}

function start () {
	if (interval) {
		return
	}

	interval = setInterval(timer, 1000);
}

function stop () {
	clearInterval(interval);
	interval = null;
}

function reset () {
	stop();
	seconds = 0;
	time_el.innerText = '00:00:00';
}

let addToDoButton = document.getElementById('addToDo');
let toDoContainer = document.getElementById('toDoContainer');
let inputField = document.getElementById('inputField');

addToDoButton.addEventListener('click', function(){
    var paragraph = document.createElement('p');
    paragraph.classList.add('paragraph-styling');
    paragraph.innerText = inputField.value;
    toDoContainer.appendChild(paragraph);
    inputField.value = "";
    paragraph.addEventListener('click', function(){
        paragraph.style.textDecoration = "line-through";
    })
    paragraph.addEventListener('dblclick', function(){
        toDoContainer.removeChild(paragraph);
    })
})

/*const  redbtn = document.querySelector('.redbtn');
const  bluebtn =document.querySelector('.bluebtn');
const  redcolor =document.querySelector('#red');
const bluecolor =document.querySelector('#blue');





redbtn.addEventListener('click', () =>{

        bluecolor.style.display='none';
        redcolor.style.display='block';
});
bluebtn.addEventListener('click', () =>{

    redcolor.style.display='none';
    bluecolor.style.display='block';
});*/

const redbtn =document.querySelector('.stopwatch');
const bluebtn =document.querySelector('.todo');
const  redcolor =document.querySelector('#red');
const bluecolor =document.querySelector('#blue');





redbtn.addEventListener('click', () =>{

        bluecolor.style.display='none';
        redcolor.style.display='block';
});
bluebtn.addEventListener('click', () =>{

    redcolor.style.display='none';
    bluecolor.style.display='block';
});


