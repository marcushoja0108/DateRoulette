function goLogin() {
  model.app.currentpage = model.app.pages[1];
  changeView();
}

//take the inputs into register
function registerUser() {
  
  //filter if slots are empty
  if (!model.input.register.eMail) {
    alert("mail not filled in");
  } else if (!model.input.register.name) {
    alert("name not filled in");
  } else if (!model.input.register.adress) {
    alert("address not filled in");
  } else if (!model.input.register.password) {
    alert("password not filled in");
  } else if (!model.input.register.birthday) {
    alert("birthday not filled in");
  } else {
    mail();
  }

  //filter if the mail is okay
  function mail() {
    const parts = model.input.register.eMail.split("@");

    if (model.input.register.eMail.includes(" ")) {
      return false;
    } else if (parts.length !== 2) {
      return false;
    } else if (!parts[1].includes(".")) {
      return false;
    } else if (parts[0].includes(".")) {
      return false;
    } else if (parts[1].endsWith(".")) {
      return false;
    } else {
      const user = model.data.users.find(
        (user) => user.eMail === model.input.register.eMail
      );
      if (user) {
        alert("Mail in use");
      } else {
        phone();
      }
    }
  }

  //filter if the phone is okay
  function phone() {
    const user = model.data.users.find(
      (user) => user.phone === model.input.register.phone
    );
    if (user) {
      alert("Nummer in use");
    } else {
      pushuser();
    }
  }
  //push into users and check password match
  function pushuser() {
    if (model.input.register.password === model.input.register.secondPassword) {
      model.data.users.push({
        ID: model.data.users.length,
        name: model.input.register.name,
        password: model.input.register.password,
        birthday: model.input.register.birthday,
        adress: model.input.register.address,
        eMail: model.input.register.eMail,
        phone: model.input.register.phone,
        ongoingDate: false,
        doneDates: [],
        finishedDates: [],
      });
      loginW();
      alert("user registered");
    } else {
      alert("Password dont match");
    }
  }
}

//check if log in is a match then make loginID the user id. if a match go to home page
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
    alert("Invalid email or password");
  }
}
