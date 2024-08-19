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
		result = 0
		counter.textContent = result
		savedcorrect.textContent = "Saved successfully!"
		savedcorrect.style.display = 'block'
		setTimeout(() => {
			savedcorrect.style.display = 'none';
		}, 1500);

	}
}