function goLogin() {
  model.app.currentpage = model.app.pages[1];
  changeView();
}


function registerUser() {
  const { eMail, name, address, password, birthday, secondPassword, phone } = model.input.register;

  // see if inputs is filled
  signup()
  if (!eMail) return model.input.login.showMessage = 'Email not filled in';
  if (!name) return model.input.login.showMessage = 'Name not filled in';
  if (!address) return model.input.login.showMessage = 'Address not filled in';
  if (!password) return model.input.login.showMessage = 'Password not filled in';
  if (!birthday) return model.input.login.showMessage = 'Birthday not filled in';

  // check if mail is in okay format
  if (!isValidEmail(eMail)) return;

  // Check if they are already in use
  if (isEmailInUse(eMail)) return model.input.login.showMessage = 'Email in use';
  if (isPhoneInUse(phone)) return model.input.login.showMessage = 'Phone nummer in use';

  // register the user
  pushUser();
}

// see jf tbe mail is okay
function isValidEmail(email) {
  const parts = email.split("@");
  
  if (email.includes(" ") || parts.length !== 2 || !parts[1].includes(".") || 
      parts[0].includes(".") || parts[1].endsWith(".")) {
    return false;
  }
  return true;
}

// Function to check if the email is already in use
function isEmailInUse(email) {
  return model.data.users.some(user => user.eMail === email);
}

// Function to check if the phone is already in use
function isPhoneInUse(phone) {
  return model.data.users.some(user => user.phone === phone);
}

// push the user
function pushUser() {
  const { password, secondPassword, name, birthday, address, eMail, phone } = model.input.register;

  if (password !== secondPassword) return model.input.login.showMessage = "Passwords don't match";
  model.input.login.showMessage = 'User Registered';
  model.data.users.push({
    ID: model.data.users.length,
    name,
    password,
    birthday,
    address,
    eMail,
    phone,
    ongoingDate: false,
    doneDates: [],
    finishedDates: [],
  });

  loginW();
}

//check if log in is a match then make loginID the user id. if its a match it goes to homepage
function logincheck() {
  const user = model.data.users.find(
    (user) =>
      user.eMail === model.input.login.eMail &&
      user.password === model.input.login.password
  );

  if (user) {
    model.app.loggedinuserID = user.ID;
    goHome();
    console.log(model.app.loggedinuserID);
  } else {
    loginW()
    return model.input.login.showMessage = "Invalid email or password";
  }
}
