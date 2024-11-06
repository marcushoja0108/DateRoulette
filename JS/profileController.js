function goProfile(){
    let user = model.data.users[model.app.loggedinuserID];
    model.app.currentpage = model.app.pages[6];
    changeView();
}

function rejectPartner(){
    let user = model.data.users[model.app.loggedinuserID];
    let selectedPartner = model.data.users[user.partner[0].userId];
    let coupleIndex = model.data.couples.findIndex(couple => couple.firstId === user.ID || couple.firstId === selectedPartner.ID);
    if (coupleIndex > -1) {
        model.data.couples.splice(coupleIndex, 1);
    }
    selectedPartner.partner = [];
    user.partner = [];
    changeView();
}
function deletePartner(){
    let user = model.data.users[model.app.loggedinuserID];
    let selectedPartner = model.data.users[user.selectedPartner];
    let coupleIndex = model.data.couples.findIndex(couple => couple.firstId === user.ID || couple.firstId === selectedPartner.ID);
    if (coupleIndex > -1) {
        model.data.couples.splice(coupleIndex, 1);
    }
    selectedPartner.selectPartner = null;
    user.selectedPartner = null;
    changeView();
}

function acceptPartner(){
    let user = model.data.users[model.app.loggedinuserID];
    user.partner[0].hasAccepted = true;
    let partner = model.data.users[user.partner[0].userId];
    user.selectedPartner = user.partner[0].userId;
    partner.selectedPartner = model.app.loggedinuserID
    partner.doneDates = [];
    user.doneDates = [];
    model.data.couples.push({
        coupleId: model.data.couples.length,
        firstId: user.ID,
        secondId: user.partner[0].userId,
        ongoingDateId: 0,
    });
    partner.partner = [];
    user.partner = [];
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
function readPhotoProfile(input) {
    const file = input.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(event) {
            model.input.profile.profilePicture = event.target.result;
        }
        reader.readAsDataURL(file);
    }
}