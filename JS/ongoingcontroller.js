function goOngoing(){
    model.app.currentpage = model.app.pages[4];
    changeView();
}
function dateRating(value) {
    model.input.endDate.rating = Number(value);
}
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
function cancelOngoingRating(){
    updateOngoingView()
    model.input.endDate.memoryPicture = '';
    model.input.endDate.rating = '';
    model.input.endDate.comment = '';
}
function makeMemory(){
    todaysDate = new Date().toLocaleString()
    model.data.users[model.app.loggedinuserID].finishedDates.push(
        {
            Name: model.data.Dates[model.app.selectedDate].Name,
            Rating: model.input.endDate.rating,
            day: todaysDate,
            comment: model.input.endDate.comment,
            memoryPicture: model.input.endDate.memoryPicture,
        }
    )
    model.data.users[model.app.loggedinuserID].doneDates.push(model.data.Dates[0].Name)
    model.data.users[model.app.loggedinuserID].ongoingDate = false;
    goHome()
}