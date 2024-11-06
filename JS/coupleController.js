function goCouple(){
    model.app.currentpage = model.app.pages[7];
    changeView();
}
function openAddDate(){
    model.input.coupledate.addIsOpen = true;
    changeView();
}
function closeAddDate(){
    model.input.coupledate.addIsOpen = false;
    changeView();
}
function acceptCoupleDate(dateId){
    let user = model.data.users[model.app.loggedinuserID];
    let selectedPartner = user.selectedPartner;
    let coupleIndex = model.data.couples.findIndex(couple => couple.firstId === user.ID || couple.firstId === selectedPartner);
    model.data.ongoingCoupledate[dateId].secondCouple = coupleIndex;
    model.data.users[selectedPartner].selectedDate = dateId;
    model.data.couples[coupleIndex].ongoingDateId = dateId;
    user.selectedDate = dateId;
    user.ongoingCoupledate = true;
    model.data.users[selectedPartner].ongoingCoupledate = true;
    goOngoing();
    changeView();
}
function selectCoupleDate(selectedDateId) {
    let user = model.data.users[model.app.loggedinuserID];
    user.selectedDate = Number(selectedDateId);
}

function addCoupleDate(){
    let user = model.data.users[model.app.loggedinuserID];
    let selectedPartnerIndex = user.selectedPartner
    let selectedPartner = model.data.users[user.selectedPartner]
    let coupleIndex = model.data.couples.findIndex(couple => couple.firstId === user.ID || couple.firstId === selectedPartnerIndex);
    model.data.ongoingCoupledate.push({
        ongoingDateId: model.data.ongoingCoupledate.length,
        coupleId: coupleIndex,
        secondCouple: null,
        selectedCoupleDate: user.selectedDate,
        firstcompleted: false,
        secondcompleted: false,
        time: model.input.coupledate.time,
        description: model.input.coupledate.description,
    });
    user.selectedDate = user.selectedDate; 
    model.data.couples[coupleIndex].ongoingDateId = user.selectedDate; 
    selectedPartner.selectedDate = user.selectedDate; 
    user.ongoingCoupledate = true; 
    selectedPartner.ongoingCoupledate = true
    closeAddDate();
    goOngoing();
}
