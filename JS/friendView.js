function updateFriendView(){
    document.getElementById('app').innerHTML = /*HTML*/ `
    <div class="header">
    <div class="Box-left"></div>
        <img class='header-img' src="th4.png" onclick="goHome()"/>
        <div class="Box-right">
            <img class='profile-img' height = 90px src="profile.png"  onclick="goMemory()"/>
        </div>
    </div>
    <div class="friendContainer">
    <h1 >${model.data.users[model.app.selectedFriend].name}</h1>
    </div>
    <div class="friendComment">${createfriendDates()}</div>
    `;
    
}
function createfriendDates(){
    let html = '';
    for(let date of model.data.users[model.app.selectedFriend].finishedDates){
        let rating = date.Rating
        let starRating = convertRatingToStars(rating)
        html += `
        <div class="friendDateBox">
            <div class="FriendCommentName">
                <div class="friendFieldfirst">Navn:</div> 
                <div class="friendField">${date.Name}</div>
            </div>
            <div class="FriendCommentName">
                <div class="friendFieldfirst">Rating: </div>
                <div style="color: gold"class="friendField">${starRating}</div>
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
