var Boo=false;
var CalculationResults=0;
var ope; //存储计算符号的变量


function $(x){
	return document.getElementById(x)
}

function num(Num){
	var txt=$('txtnum');
	if (Boo) {
		txt.value=Num;  //若接受过运算符，文本框清零
		Boo=false;
	} else{
		if (txt.value=="0") {
			txt.value=Num;
		} else{
			txt.value+=Num;
		}
	}
	
	
}
function decimal(){
	var txt=$('txtnum'); //获取文本框，屏显
	if (Boo) {
		txt.value='0.';
	} else{
		if(txt.value.indexOf('.')==-1){
			txt.value+=".";
		}
	}
	Boo=false;
}

function Calculation(op){//op参数就是+-*/运算符号
	var onum=$('txtnum').value; //获取文本框中输入的值
	if(onum==''){
		onum=0;	
	}
	Boo=true; //表示点击了运算符号
	switch(ope){
		case '+':
		CalculationResults+=parseFloat(onum);
		break;
		case '-':
		CalculationResults-=parseFloat(onum);
		break;
		case '*':
		CalculationResults*=parseFloat(onum);
		break;
		case '/':
		CalculationResults/=parseFloat(onum);
		break;
		case '=':
		CalculationResults=parseFloat(onum);
		break;
		case '%':
		CalculationResults%=onum;
		break;
		default:
		CalculationResults=parseFloat(onum);
	}
	$('txtnum').value=CalculationResults;
	ope=op;
}

function backspace(){
	var txt=$('txtnum');
	txt.value=txt.value.substring(0,txt.value.length-1);
	if(txt.value==''){
		txt.value=0;
	}
}

function math(op ){
	var onum=$('txtnum').value;
	if(onum==''){
		alert('数据不能为空');
		Boo=true;
		with(Math){
			switch(op){
				case 'sin':CalculationResults=sin(onum);
				break;
				case 'cos':CalculationResults=cos(onum);
				break;
				case 'tan':CalculationResults=tan(onum);
				break;
				case 'asin':CalculationResults=asin(onum);
				break;
				case 'acos':CalculationResults=acos(onum);
				break;
				case 'atan':CalculationResults=atan(onum);
				break;
				case 'PI':CalculationResults=PI;
				break;
				case '1/x':CalculationResults=1/onum;
				break;
				case 'exp':CalculationResults=exp(onum);
				break;
				case 'lnx':CalculationResults=log(onum);
				break;
				case 'lgx':CalculationResults=log(onum)/log(10);
				break;	
				case 'i':CalculationResults=floor(onum);
				break;
				case 'n!':CalculationResults=jc(onum);
				break;
				default:CalculationResults=parseFloat(onum);
				
			}
			$('txtnum').value=CalculationResults;
		}
	}
}

function jc(a){
	if(a==1){
		return 1;
		
	}else{
		return jc(a-1)*a;
	}
}
