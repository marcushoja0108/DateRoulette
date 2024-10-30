function goOngoing(){
    model.data.users[model.app.loggedinuserID].ongoingDate = true;
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
    todaysDate = new Date().toLocaleString()
    if(model.input.endDate.memoryPicture && model.input.endDate.rating && model.input.endDate.comment){
        pushFinishdates()
        pushReview()
        makeMemorySettings()
        goHome()
    }else{
        model.input.endDate.showongoingMessage = "Alle felter må fylles inn"
        ongoingRating()
    }
}
function pushFinishdates(){
        model.data.users[model.app.loggedinuserID].doneDates.push(model.data.Dates[model.app.selectedDate].Name)
        model.data.users[model.app.loggedinuserID].finishedDates.push(
        {
            Name: model.data.Dates[model.app.selectedDate].Name,
            Rating: model.input.endDate.rating,
            day: todaysDate,
            comment: model.input.endDate.comment,
            memoryPicture: model.input.endDate.memoryPicture,
        }
    )
}
function pushReview(){
        model.data.Dates[model.app.selectedDate].review.push(
        {
            userId: model.app.loggedinuserID,
            comment: model.input.endDate.comment,
            Rating: model.input.endDate.rating
        }
    )
}
function makeMemorySettings(){
    model.data.users[model.app.loggedinuserID].ongoingDate = false;
    model.input.endDate.memoryPicture = '';
    model.input.endDate.rating = '';
    model.input.endDate.comment = '';
}