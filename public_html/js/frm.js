function addRow() {
	if('countnum' in localStorage)
	{
		var x=parseInt(localStorage.getItem('countnum')) + 1;
	}
	else
	{
		var x=1;
	}
	var ent1=document.getElementById("exampleFormControlInput1").value;
	var ent2=document.getElementById("exampleFormControlInput2").value;
	var ent3=document.getElementById("exampleFormControlSelect1").value;
	var ent4=document.getElementById("exampleFormControlTextarea1").value;

	localStorage.setItem(x, [ent1, ent2, ent3, ent4]);
	localStorage.setItem('countnum', x);

	var tble=document.getElementById('form_tble');
	tble.innerHTML += '<tr><td>' + ent1 + '</td><td>' + ent2 + '</td><td>' + ent3 + '</td><td>' + ent4 + '</td></tr>';
}

function makeTable() {
	if('countnum' in localStorage)
	{
		var n=parseInt(localStorage.getItem('countnum'));
		var tble=document.getElementById('form_tble');
		for(var i=1; i<=n; i++)
		{
			var listArr=Array.from(localStorage.getItem(i).split(','));
			tble.innerHTML += '<tr><td>' + listArr[0] + '</td><td>' + listArr[1] + '</td><td>' + listArr[2] + '</td><td>' + listArr[3] + '</td></tr>';
		}
	}
}