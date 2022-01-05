let sceen;
let num1;
let num2;
let op;
let result_;

function addListeners()
{
	screen = document.getElementById('screen'); /*C에서 초기화가 안되는 이유는 vaulue 값이 다른 함수에서 사용 중이여서*/

	
	addDigitListener();
	addResetListener();
	addResultListenr();
	
}

function addDigitListener()
{
	const btns = document.querySelectorAll('.digit'); /*.digit 모두*/
	for(const btn of btns)
	{
		btn.addEventListener('click', () => { /*클릭을 하면*/ 
			screen.value = screen.value + btn.textContent; /*스크린 벨류에 추가한다.*/
			if(op){
				num2 = btn.textContent; 
				screen.value = num2
				if(result_){ /* 연속적인 계산을 위해서*/
					num1 = result_
					num2 = btn.textContent;
				}
			}
			else{
				num1 = btn.textContent;
			}
		});
	}
	addOperatorListener(); /*사칙연산을 할 때 부호를 받는 부분*/
	addMinusListener(); /*연산중 -부분을 받는 부분*/
}

function addResetListener()
{
	const clearBtn = document.querySelector('.reset'); /*reset이란 클래스를 불러서*/
	clearBtn.addEventListener('click', function clear() { /*클릭하면 함수 clear을 실행*/
		screen.value = ""; /*벨류는 ""로*/
		num1 = num2 = op = result_= "";
	});
}

function addOperatorListener()
{
	const operbtns = document.querySelectorAll('.operator');
	for(const operbtn of operbtns)
	{
	    operbtn.addEventListener('click', () => 
		{
			op = operbtn.textContent;
			
			
		});
	}
}

function addMinusListener()
{
	const operbtns = document.querySelectorAll('.minus');
	for(const operbtn of operbtns)
	{
	    operbtn.addEventListener('click', () => 
		{
			op = operbtn.textContent;
			
		});
	}
}

function addResultListenr(){ /*사칙연산 부분 */
	const resultBtn = document.querySelector('.equal');
	resultBtn.addEventListener('click', function result() {
		if(op == "+"){
			result_ = String(Number(num1) + Number(num2));
		}
		if(op == "-"){
			result_ = String(Number(num1) - Number(num2));
		}
		if(op == "*"){
			result_ = String(Number(num1) * Number(num2));
		}
		if(op == "/"){
			result_ = String(Number(num1) / Number(num2));
		}
		screen.value = result_;
	});
}