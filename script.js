
function nameValid(){
	var name = document.getElementById('name').value;
	if (name.length > 0 && name.length <20){
		document.getElementById('nameMsg').innerHTML="<font color='DarkBlue'>&#10004</font>";
	} else{
		document.getElementById('nameMsg').innerHTML="";
	}
}

function pswValid(){
	var password = document.getElementById('password').value;
	var pwdReg = new RegExp('(?=.*[0-9])(?=.*[a-zA-Z])');
	if (password.length < 6){
		document.getElementById('pswMsg').innerHTML="<font color='red'>请至少输入六位字符!</font>";
	}else if(pwdReg.test(password)){
		document.getElementById('pswMsg').innerHTML="<font color='DarkBlue'>&#10004</font>";
	}else{
		document.getElementById('pswMsg').innerHTML="<font color='red'>必须包含数字和字母!</font>";
	}
}
function confirm(){
	var password = document.getElementById('password').value;
	var cfpassword = document.getElementById('cfPassword').value;
	if (cfpassword==password){
		document.getElementById('cfMsg').innerHTML="<font color='DarkBlue'>&#10004</font>";
	}else{
		document.getElementById('cfMsg').innerHTML="<font color='red'>两次输入不一致!</font>";
	}
}
function typeValid(type) {
	if (type != 0){
		document.getElementById('typeMsg').innerHTML="<font color='DarkBlue'>&#10004</font>";
	}else{
		document.getElementById('typeMsg').innerHTML="";
	}
}
function idValid() {
	var idNum = document.getElementById('idNum').value;
	if(idNum.length==18){
		document.getElementById('idMsg').innerHTML="<font color='DarkBlue'>&#10004</font>";
	}else{
		document.getElementById('idMsg').innerHTML="<font color='red'>请输入正确的证件号码!</font>";
	}
}
function telValid(){
	var tel = document.getElementById('tel').value;
	if(tel.length==11){
		document.getElementById('telMsg').innerHTML="<font color='DarkBlue'>&#10004</font>";
	}else{
		document.getElementById('telMsg').innerHTML="<font color='red'>请输入正确的手机号码!</font>";
	}
}
function emailValid(){
	var email = document.getElementById('email').value;
	// var pwdReg = new RegExp('(?=.*[0-9])(?=.*[a-zA-Z])');
	var emailReg = /^\w+@\w+\.\S+$/;
	if (emailReg.test(email)){
		document.getElementById('emailMsg').innerHTML="<font color='DarkBlue'>&#10004</font>";
	}else{
		document.getElementById('emailMsg').innerHTML="<font color='red'>请输入正确的邮箱地址!</font>";
	}

}
function enrValid(){
	var enr = document.getElementById('enrollment').value
	if(enr!= '' || enr != undefined){
		document.getElementById('enrMsg').innerHTML="<font color='DarkBlue'>&#10004</font>";
	}
}
function submitCheck(){
	var enr = document.getElementById('enrollment').value
	var errReg = /!$/
	var check=[];
	check[0] = document.getElementById('pswMsg').innerText;
	check[1] = document.getElementById('cfMsg').innerText;
	check[2] = document.getElementById('idMsg').innerText;
	check[3] = document.getElementById('cfMsg').innerText;
	check[4] = document.getElementById('telMsg').innerText;
	check[5] = document.getElementById('emailMsg').innerText;
	var x = 0;
	for (var i =0;i<check.length;i++){
		if (errReg.test(check[i])){
			alert(check[i]);
			break;
		}else{
			x+=1
		}
	}
	if (x==6){
		alert("恭喜您，您已成为家里蹲大学的一名学生！请于"+enr+"报道")
	}
	
}
