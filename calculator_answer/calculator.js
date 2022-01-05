let sceen;

let state = 0;
let operand = null;
let operator = null;

function addListeners()
{
	screen = document.getElementById('screen');

	addDigitListener();
	addResetListener();
	addMinusListener();
	addOperatorListener();
	addEqualHandler();
	adddotListener();
}

function addDigitListener()
{
	const btns = document.querySelectorAll('.digit');
	for(const btn of btns)
	{
		btn.addEventListener('click', () => {
			if(state == 0 || state == 3 || state == 4 || state == 7 || state == 8)
			{
				screen.value = btn.textContent;
				if(state == 0)
					state = 2;
				else
					state = 6;
			}
			else if(state == 1 || state == 2 || state == 5 || state == 6)
			{
				screen.value = screen.value + btn.textContent;
				if(state == 1 || state == 2)
					state = 2;
				else
					state = 6;
			}
			else
				error();
		});
	}
}

function addResetListener()
{
	const clearBtn = document.querySelector('.reset');
	clearBtn.addEventListener('click', function clear() {
		reset();
	});
}

function addMinusListener()
{
	const minusBtn = document.querySelector('.minus');
	minusBtn.addEventListener('click', () => {
		if(state == 0 || state == 3 || state == 4 || state == 7 || state == 8)
		{
			screen.value = "-";
			if(state == 0)
				state = 1;
			else
				state = 5;
		}
		else if(state == 6)
		{
			evaluate();
			operator = "-";
			state = 7;	
		}
		else if(state == 2 || state == 9)
		{
			operand = parseFloat(screen.value);
			operator = "-";
			
			if(state == 2)
				state = 3;
			else
				state = 7;
		}
		else
			error();
	});
}

function addOperatorListener()
{
	const btns = document.querySelectorAll('.operator');
	for(const btn of btns)
	{
		btn.addEventListener('click', () => {
			if(state == 2 || state == 9)
			{
				operand = parseFloat(screen.value);
				operator = btn.textContent;
				
				if(state == 2)
					state = 4;
				else
					state = 8
			}
			else if(state == 6)
			{
				evaluate();
				operator =  btn.textContent;
				state = 8;
			}
			else
				error();
		});
	}
}

function adddotListener()
{
	const dot = document.querySelector('.dot');
	dot.addEventListener("click", () =>{
		if(state == 0 || state == 1 || state ==3 || state==4 || state ==5 || state ==7)
		{
			error();
		}
		else if(state == 2 || state == 6 || state == 9)
		{
			screen.value += dot.textContent;
		}
		else
		{
			error();
		}
	});
}

function addEqualHandler()
{
	const eqBtn = document.querySelector('.equal');
	eqBtn.addEventListener('click', () => {
		if(state == 6)
		{
			evaluate();
			state = 9;
		}
		else
			error();
	});
}

function error()
{
	alert("Error occurred.");
	reset();	
}

function reset()
{
	state = 0;
	operand = null
	operator = null;
	
	screen.value = "";
}

function evaluate()
{
	let number = parseFloat(screen.value);
	let result = 0;
	if(operator == "+")
		result = operand + number;
	else if(operator == "-")
		result = operand - number;
	else if(operator == "*")
		result = operand * number;
	else
		result = operand / number;
	
	screen.value = result + "";
	operand = result;
}