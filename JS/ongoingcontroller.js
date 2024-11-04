function goOngoing(){
    let user = model.data.users[model.app.loggedinuserID];
    user.ongoingDate = true;
    if(user.partner.length > 0){
        model.app.selectedPartner = user.partner[0].userId;
        let partner = model.data.users[model.app.selectedPartner];
        if(user.partner[0].hasAccepted && partner.partner[0].hasAccepted){
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
        if(model.input.endDate.memoryPicture && model.input.endDate.rating && model.input.endDate.comment){
            pushFinishdates()
            pushDoneDates()
            pushReview()
            makeMemorySettings()
            goHome()
        }else{
            model.input.endDate.showongoingMessage = "Alle felter må fylles inn"
            ongoingRating()
        }
    } else {
        pushDoneDates();
        makeMemorySettings()
        goHome()
    }
}
function pushDoneDates(){
    let user = model.data.users[model.app.loggedinuserID];
    if(user.partner.length > 0){
        let partner = model.data.users[model.app.selectedPartner];
        partner.doneDates.push(model.data.Dates[user.selectedDate].Name);
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
function makeMemorySettings(){
    let user = model.data.users[model.app.loggedinuserID];
    if(user.partner.length > 0){
        let partner = model.data.users[model.app.selectedPartner];
        partner.ongoingDate = false;
    }
    user.ongoingDate = false;
    model.input.endDate.memoryPicture = '';
    model.input.endDate.rating = '';
    model.input.endDate.comment = '';
}
