function updateLoginView() {
  document.getElementById("app").innerHTML = /*html*/ `
  <div class="logcontainer"> 
  <div class="login">
     <img class='loginheader-img' src="th4.png"/>
     <div class="buttons">
     <button class="" onclick="loginW()">log in</button>
     <button class="" onclick="signup()">Sign up</button>
     </div>
  </div>
  </div>
    `;
}

function loginW() {
  document.getElementById("app").innerHTML = /*html*/ `
    <div class="logcontainer"> 
    <div class="login">
    <img class='loginheader-img' src="th4.png"/>
    <div class='wronglogin'>${model.input.login.showMessage}</div>
    <div class="buttons">
    Email
    <input type="text" oninput="model.input.login.eMail=this.value" >
    password
    <input type="password" oninput="model.input.login.password=this.value">
    <button class="" onclick="logincheck()">log in</button>
    Dont have a account?
    <button class="" onclick="signup()">Sign up</button>
    </div>
    </div>
    </div>
    `;
}

function signup() {
  document.getElementById("app").innerHTML = /*html*/ `
    <div class="logcontainer"> 
        <div class="login">
            <img class='loginheader-img' src="th4.png"/>
            <div class="wronglogin">${model.input.login.showMessage}</div>
            <div class="buttons">
            Name
            <input type="text" oninput= "model.input.register.name=this.value">
            PhoneNummer
            <input type="text" oninput= "model.input.register.phone=this.value">
            Address
            <input type="text" oninput= "model.input.register.city=this.value">
            birthday
            <input  type="date" oninput= "model.input.register.birthday=this.value">
            Email
            <input type="text" oninput= "model.input.register.eMail=this.value">
            password
            <input type="text" oninput= "model.input.register.password=this.value">
            repeat-password
             <input type="password" oninput= "model.input.register.secondPassword=this.value">
    
             <button class="" onclick="registerUser()">Sign up</button>
            Have a user?
            <button class="" onclick="loginW()">log in</button>
    
            </div>
        </div>
    </div>
    `;
}
