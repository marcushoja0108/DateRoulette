function goOngoing(){
    model.app.currentpage = model.app.pages[4];
    changeView();
}
//rating konvertert til tall
function dateRating(value) {
    model.input.endDate.rating = Number(value);
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
//pusher daten inn i doneDates og pusher memories inn i finishDates

function makeMemory(){
    todaysDate = new Date().toLocaleString()
    if(model.input.endDate.memoryPicture && model.input.endDate.rating && model.input.endDate.comment){
        model.data.users[model.app.loggedinuserID].finishedDates.push(
            {
                Name: model.data.Dates[model.app.selectedDate].Name,
                Rating: model.input.endDate.rating,
                day: todaysDate,
                comment: model.input.endDate.comment,
                memoryPicture: model.input.endDate.memoryPicture,
            }
        )
        model.data.users[model.app.loggedinuserID].doneDates.push(model.data.Dates[model.app.selectedDate].Name)
        model.data.users[model.app.loggedinuserID].ongoingDate = false;
        model.input.endDate.memoryPicture = '';
        model.input.endDate.rating = '';
        model.input.endDate.comment = '';
        goHome()
    }else{
        model.input.endDate.showongoingMessage = "Alle felter må fylles inn"
        ongoingRating()
    }
}