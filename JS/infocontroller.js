function goInfo() {
  model.app.currentpage = model.app.pages[2];
  changeView();
}

function goBack() {
  model.app.currentpage = model.app.pages[0];
  updateHomeView();
}

function acceptDate() {
  const selectedDate = model.app.selectedDate;
  const user = model.data.users[model.app.loggedinuserID];

  user.ongoingDate = true;
  user.selectedDate = selectedDate;
  updateHomeView();
}
