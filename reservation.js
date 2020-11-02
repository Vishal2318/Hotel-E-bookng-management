function validate()
{
	let name=document.querySelector("#name").value;
	let email=document.querySelector("#email").value;
	let tel=document.querySelector("#tel").value;
	if(name && email && tel)
	{
		return true;
	}
	else
	{
		return false;
	}
}