function goProfile(){
    model.app.currentpage = model.app.pages[6];
    changeView();
}
function rejectPartner(){
    let user = model.data.users[model.app.loggedinuserID]
    model.data.users[user.partner[0].userId].partner.splice(0)
    user.partner.splice(0)
    changeView();
}
function acceptPartner(){
    let user = model.data.users[model.app.loggedinuserID]
    user.partner[0].hasAccepted = true;
    model.data.users[user.partner[0].userId].doneDates = [];
    user.doneDates = [];
    changeView();
}
function profileSearchUser(){
    let inputSearch = model.input.profile.inputSearch
    model.input.profile.searchresult = model.data.users.filter(user => (user.eMail.toLowerCase().includes(inputSearch.toLowerCase()) ||
    user.name.toLowerCase().includes(inputSearch.toLowerCase())) && user.ID !== model.app.loggedinuserID)
    if(model.input.profile.searchresult.length > 0){
        model.input.profile.showSearch = createProfileSearchUser()
    }else{
        model.input.profile.showSearch = 'Her var det ingenting'
    }
   changeView()
}
function selectPartner(selectedId){
    model.data.users[model.app.loggedinuserID].partner.push(
        {
            userId: selectedId,
            hasAccepted: true,
        }
        )
    model.data.users[selectedId].partner.push(
        {
            userId: model.app.loggedinuserID,
            hasAccepted: false,
        }
        )
    model.input.profile.searchresult = '';
    model.input.profile.showSearch = '';
    changeView();
}