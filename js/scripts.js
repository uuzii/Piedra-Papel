var case_win="¡Has ganado! :)"
var case_lose="¡Has perdido! :("
var case_empty="¡Empate!"
var case_error="Ha ocurrido un error"
var choose_piedra="PC: Piedra"
var choose_papel="PC: Papel"
var choose_tijera="PC: Tijera"

function RegistraClick(caso){

	function ClickPiedra()
	{
		var clickPC=(Math.round((Math.random())*100)/100);
		if (clickPC<=0.33)
		{
			alert(choose_piedra);
			return 2;
		}

		else if (clickPC>0.33 && clickPC<=0.66)
		{
			alert(choose_papel);
			return 1;
		}

		else
		{
			alert(choose_tijera);
			return 0;
		};
	};

	function ClickPapel()
	{
		var clickPC=(Math.round((Math.random())*100)/100);
		if (clickPC<=0.33)
		{
			alert(choose_piedra);
			return 0;
		}

		else if (clickPC>0.33 && clickPC<=0.66)
		{
			alert(choose_papel);
			return 2;
		}

		else
		{
			alert(choose_tijera);
			return 1;
		};
	};

	function ClickTijera()
	{
		var clickPC=(Math.round((Math.random())*100)/100);
		if (clickPC<=0.33)
		{
			alert(choose_piedra);
			return 1;
		}

		else if (clickPC>0.33 && clickPC<=0.66)
		{
			alert(choose_papel);
			return 0;
		}

		else
		{
			alert(choose_tijera);
			return 2;
		}; 
	};

	function PartidaResultado(a)
	{
		if (a===0)
		{
			alert(case_win);
		}

		else if (a===1)
		{
			alert(case_lose);
		}

		else if (a===2)
		{
			alert(case_empty);
		}

		else
		{
			alert(case_error);
		};
	};




	if (caso===1)
	{
		var result=ClickPiedra();
		PartidaResultado(result);
	}

	else if (caso===2)
	{
		var result=ClickPapel();
		PartidaResultado(result);
	}

	else if (caso===3)
	{
		var result=ClickTijera();
		PartidaResultado(result);
	}

	else
	{
		alert(case_error);
	};
}; 


function Imprime_piramide(){
	for (var i=1; i<=20; i++) {
		for (var j=1; j<=i; j++) {
			document.write("*");
		};
	document.write("<p> </p>");
	};
};

function Mensaje(){
	document.write("Hello World!");
	document.write("Hello World!");
	document.write("Hello World!");
	document.write("Hello World!");
	document.write("Hello World!");
}

