function updateFriendView(){
    document.getElementById('app').innerHTML = /*HTML*/ `
    ${createFriendHeader()}
    <div class="friendContainer">
        <h1><a href="mailto:${model.data.users[model.app.selectedFriend].eMail}">${model.data.users[model.app.selectedFriend].name}</a></h1>
    </div>
    <div class="friendComment">${createfriendDates()}</div>
    `;
}
function createFriendHeader(){
    return `
    <div class="header">
        <div class="Box-leftFriend">
        <img height = 50px src="back.png" onclick="goInfo()"/>
        </div>
        <img class='header-img' src="th4.png"/>
        <div class="Box-right"></div>
    </div>
    `;
}
function createfriendDates(){
    let html = '';
    for(let date of model.data.users[model.app.selectedFriend].finishedDates){
        let starRating = convertRatingToStars(date.Rating)
        html += `
        <div class="friendDateBox">
            <div class="FriendCommentName">
                <div class="friendFieldfirst">Navn:</div> 
                <div class="friendField">${date.Name}</div>
            </div>
            <div class="FriendCommentName">
                <div class="friendFieldfirst">Rating: </div>
                <div class="showStarRating">${starRating}</div>
            </div>
            <div class="FriendCommentName">
                <div class="friendFieldfirst">Kommentar: </div>
                <div class="friendField">${date.comment}</div>
            </div>
            <div style="font-size: 12px">${date.day}</div>
        </div>
        `;
        }
        return html;
}