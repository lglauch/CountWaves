let result = 0

function increment()
{
	let counter = document.getElementById("counter")
	result += 1
	counter.textContent = result
	counter = result
}


function save()
{
	let savedmsg = document.getElementById("saved")
	let savedcorrect = document.getElementById("savedmsg")
	if (result > 0)
	{
		savedmsg.innerText += " - " + result
		counter.textContent = result
		result = 0
		savedcorrect.textContent = "Saved successfully!"
		savedcorrect.style.display = 'block'
		/* setTimeout(() => {
			savedcorrect.style.display = 'none';
		}, 1500); */
		$('#savedmsg').show('slow').delay(2000).hide('slow');
	}
}

let username;

document.getElementById("user").onclick = function(){
	username = document.getElementById("myInput").value
	document.getElementById("myh1").textContent = `Welcome ${username}, have fun!`
}