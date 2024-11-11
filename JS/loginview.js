function updateLoginView() {
  document.getElementById("app").innerHTML = /*html*/ `
  <div class="logcontainer"> 
  <div class="login">
     <img class='loginheader-img' src="IMG/th4.png"/>
     <div class="buttons">
     <button class="" onclick="loginW()">Logg inn</button>
     <button class="" onclick="signup()">Registrer</button>
     </div>
  </div>
  </div>
    `;
}

function loginW() {
  document.getElementById("app").innerHTML = /*html*/ `
    <div class="logcontainer"> 
    <div class="login">
    <img class='loginheader-img' src="IMG/th4.png"/>
    <div class='wronglogin'>${model.input.login.showMessage}</div>
    <div class="buttons">
    Epost
    <input type="text" oninput="model.input.login.eMail=this.value" >
    Passord
    <input type="password" oninput="model.input.login.password=this.value">
    <button class="" onclick="logincheck()">Logg inn</button>
    Har du ikke konto?
    <button class="" onclick="signup()">Registrer deg</button>
    </div>
    </div>
    </div>
    `;
}

function signup() {
  document.getElementById("app").innerHTML = /*html*/ `
    <div class="logcontainer"> 
        <div class="login">
            <img class='loginheader-img' src="IMG/th4.png"/>
            <div class="wronglogin">${model.input.login.showMessage}</div>
            <div class="buttons">
            Navn
            <input type="text" oninput= "model.input.register.name=this.value">
            Telefonnummer
            <input type="text" oninput= "model.input.register.phone=this.value">
            By
            <input type="text" oninput= "model.input.register.city=this.value">
            Fødselsdag
            <input  type="date" oninput= "model.input.register.birthday=this.value">
            Epost
            <input type="text" oninput= "model.input.register.eMail=this.value">
            Passord
            <input type="text" oninput= "model.input.register.password=this.value">
            Repeter passordet
             <input type="password" oninput= "model.input.register.secondPassword=this.value">
    
             <button class="" onclick="registerUser()">Registrer</button>
            Allerede bruker?
            <button class="" onclick="loginW()">Logg inn</button>
    
            </div>
        </div>
    </div>
    `;
}
