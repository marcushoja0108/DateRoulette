updateLoginView();
function updateLoginView() {
  document.getElementById("app").innerHTML = /*html*/ `
  <div class="logcontainer"> 
  <div class="login">
     <img class='loginheader-img' src="th4.png"/>
     <div class="buttons">
     <button class="" onclick=" login()">log in</button>
     <button class="" onclick="signup()">Sign up</button>
     </div>
  </div>
  </div>
    `;
}

function login(){
    document.getElementById("app").innerHTML = /*html*/ `
    <div class="logcontainer"> 
    <div class="login">
    <img class='loginheader-img' src="th4.png"/>
    <div class="buttons">
    Email
    <input type="text">
    password
    <input type="text">
    <button class="" onclick="">log in</button>
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
            <div class="buttons" id="Rname">
            Name
            <input type="text" id="name">
            PhoneNummer
            <input type="text"id="PhoneNummer">
            Address
            <input type="text" id="Address">
            birthday
            <input  type="date"id="birthday">
            Email
            <input type="text" id="Email">
            password
            <input type="text" id="Rpassword">
            repeat-password
             <input type="text" id="repeat-password">
    
             <button class="" onclick="registerUser()">Sign up</button>
            Have a user?
            <button class="" onclick="login()">log in</button>
    
            </div>
        </div>
    </div>
    `;
}