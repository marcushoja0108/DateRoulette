updateLoginView();
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

function loginW(){
    document.getElementById("app").innerHTML = /*html*/ `
    <div class="logcontainer"> 
    <div class="login">
    <img class='loginheader-img' src="th4.png"/>
    <div class="buttons">
    Email
    <input type="text" id="LEmail" >
    password
    <input type="text" id="LPassword">
    <button class="" onclick="logincheck()">log in</button>
    Dont have a account?
    <button class="" onclick="signup()">Sign up</button>
    </div>
    </div>
    </div>
    `;
}

function signup(){
    document.getElementById("app").innerHTML = /*html*/ `
    <div class="logcontainer"> 
        <div class="login">
            <img class='loginheader-img' src="th4.png"/>
            <div class="buttons">
            Name
            <input type="text" id="Rname">
            PhoneNummer
            <input type="text"id="PhoneNummer">
            Address
            <input type="text" id="Address">
            birthday
            <input  type="date"id="birthday">
            Email
            <input type="text" id="REmail">
            password
            <input type="text" id="Rpassword">
            repeat-password
             <input type="text" id="repeat-password">
    
             <button class="" onclick="registerUser()">Sign up</button>
            Have a user?
            <button class="" onclick="loginW()">log in</button>
    
            </div>
        </div>
    </div>
    `;
}