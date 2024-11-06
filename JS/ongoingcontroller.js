function goOngoing(){
    let user = model.data.users[model.app.loggedinuserID];
    if(!user.ongoingCoupledate){
        user.ongoingDate = true;
        if(user.selectedPartner != null){
            let partner = model.data.users[user.selectedPartner];
            partner.selectedDate = user.selectedDate;
            partner.ongoingDate = true;
        }
    }
    model.app.currentpage = model.app.pages[4];
    changeView();
}

//rating
function rate(rating){
    let stars = document.getElementsByClassName('stars')
    model.input.endDate.rating = rating;
    for (let i = 0; i < 5; i++) {
        stars[i].style.color = i < rating ? 'gold' : 'gray';
    }
}
//lagring for bilde, blir sendt til memoryPicture
function readPhotoMemory(input) {
    const file = input.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(event) {
            model.input.endDate.memoryPicture = event.target.result;
        }
        reader.readAsDataURL(file);
    }
}
//avbryt rating
function cancelOngoingRating(){
    updateOngoingView()
    model.input.endDate.memoryPicture = '';
    model.input.endDate.rating = '';
    model.input.endDate.comment = '';
}
//pusher daten inn i doneDates, finishDates og review.
function makeMemory(){
    if (model.input.endDate.memoryPicture || model.input.endDate.rating || model.input.endDate.comment) {
        if (model.input.endDate.memoryPicture && model.input.endDate.rating && model.input.endDate.comment) {
            pushFinishdates();
            pushDoneDates();
            pushReview();
            makeMemorySettings();
            goHome();
        } else {
            model.input.endDate.showongoingMessage = "Alle felter må fylles inn";
            ongoingRating();
        }
    } else {
        pushDoneDates();
        makeMemorySettings();
        goHome();
    }
}

function pushDoneDates(){
    model.data.users[model.app.loggedinuserID].doneDates.push(model.data.Dates[model.app.selectedDate].Name)
}
function pushDoneDates(){
    let user = model.data.users[model.app.loggedinuserID];
    if(user.partner.length > 0){
        let partner = model.data.users[model.app.selectedPartner];
        if(user.partner[0].hasAccepted && partner.partner[0].hasAccepted){
        partner.doneDates.push(model.data.Dates[user.selectedDate].Name);
        }
    }
    user.doneDates.push(model.data.Dates[user.selectedDate].Name);
}

function pushFinishdates(){
    let user = model.data.users[model.app.loggedinuserID];
    let todaysDate = new Date().toLocaleString();
    
    user.finishedDates.push({
        Name: model.data.Dates[user.selectedDate].Name,
        Rating: model.input.endDate.rating,
        day: todaysDate,
        comment: model.input.endDate.comment,
        memoryPicture: model.input.endDate.memoryPicture,
    });
}

function pushReview(){
    let user = model.data.users[model.app.loggedinuserID]
    model.data.Dates[user.selectedDate].review.push(
        {
            userId: model.app.loggedinuserID,
            comment: model.input.endDate.comment,
            Rating: model.input.endDate.rating
        }
    )
}
function makeMemorySettings() {
    let user = model.data.users[model.app.loggedinuserID];
    let coupleIndex = getCoupleIndex(user);
    let ongoingDate = findOngoingDate(coupleIndex);
    let partner = '';
    if (user.selectedPartner != null) {
        partner = model.data.users[user.selectedPartner];
        partner.ongoingDate = false;
        partner.ongoingCoupledate = false;
        if (user.doneDates.length === model.data.Dates.length) {
            partner.doneDates = [];
        }
    }
    if (user.doneDates.length === model.data.Dates.length) {
        user.doneDates = [];
    }
    if (ongoingDate) {
        if (ongoingDate.coupleId === coupleIndex) {
            ongoingDate.firstcompleted = true;
        } else {
            ongoingDate.secondcompleted = true;
        }

        if (ongoingDate.firstcompleted && ongoingDate.secondcompleted) {
            let index = model.data.ongoingCoupledate.findIndex(date => date === ongoingDate);
            if (index !== -1) {
                model.data.ongoingCoupledate.splice(index, 1);
            }
        }
    }
    user.ongoingDate = false;
    user.ongoingCoupledate = false;
    model.input.endDate.memoryPicture = '';
    model.input.endDate.rating = '';
    model.input.endDate.comment = '';
}


function getCoupleIndex(user){
    return model.data.couples.findIndex(couple => 
        couple.firstId === user.ID || couple.secondId === user.ID
    );
}
function findOngoingDate(coupleIndex) {
    return model.data.ongoingCoupledate.find(date => 
        date.coupleId === coupleIndex || date.secondCouple === coupleIndex
    );
}
function cancelOngoingDoubleDate(){
    let user = model.data.users[model.app.loggedinuserID];
    let partner = model.data.users[user.selectedPartner];
    let coupleIndex = getCoupleIndex(user);
    let ongoingDate = findOngoingDate(coupleIndex);
    let index = model.data.ongoingCoupledate.findIndex(date => date === ongoingDate); 
        if (index !== -1) { 
            model.data.ongoingCoupledate.splice(index, 1); 
        } 
    user.ongoingCoupledate = false;
    partner.ongoingCoupledate = false;
    goHome();
}