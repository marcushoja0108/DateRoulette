function goCouple(){
    let user = model.data.users[model.app.loggedinuserID];
    model.app.currentpage = model.app.pages[7];
    model.app.selectedPartner = user.partner[0].userId;
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
    let selectedPartner = model.app.selectedPartner
    let coupleIndex = model.data.couples.findIndex(couple => couple.firstId === user.ID || couple.firstId === selectedPartner.ID);
    model.data.ongoingCoupledate[dateId].secondCouple = coupleIndex;
    model.data.couples[coupleIndex].ongoingDateId = dateId
    user.ongoingCoupledate = true;
    selectedPartner.ongoingCoupledate = true;
    goOngoing();
    changeView();
}
function selectCoupleDate(selectedDateId) {
    let user = model.data.users[model.app.loggedinuserID];
    user.selectedDate = Number(selectedDateId);
}

function addCoupleDate(){
    let user = model.data.users[model.app.loggedinuserID];
    let selectedPartner = model.app.selectedPartner
    let coupleIndex = model.data.couples.findIndex(couple => couple.firstId === user.ID || couple.firstId === selectedPartner.ID);
    model.data.ongoingCoupledate.push({
        ongoingDateId: model.data.ongoingCoupledate.length,
        coupleId: coupleIndex,
        secondCouple: null,
        selectedCoupleDate: user.selectedDate,
        firstcompleted: false,
        secondcompleted: false,
    });
    user.ongoingCoupledate = true;
    selectedPartner.ongoingCoupledate = true;
    closeAddDate();
    goOngoing();
}