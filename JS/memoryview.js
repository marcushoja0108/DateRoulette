
function updateMemoryView(){
    let user = model.data.users[model.app.loggedinuserID]
    document.getElementById('app').innerHTML = /*html*/ `
    <div class="header">
    <div class="Box-left"><img src="back.png" height = 40px onclick="goProfile()"/></div>
        <img class='header-img' src="th4.png" onclick="goHome()"/>
        <div class="Box-right"></div>
    </div>
    <div class="memoryContainer">
  
    Hei ${user.name} velkommen tilbake:
    ${createImages()}
    </div>
    `;
}

function createImages(){
    let html='';
    for (let i = 0; i < model.data.users[model.app.loggedinuserID].finishedDates.length; i++) {
        let user = model.data.users[model.app.loggedinuserID]
        let starRating = convertRatingToStars(user.finishedDates[i].Rating)
        html += `
        <div class="memoryCard">
        ${user.finishedDates[i].Name}
        <img src="${user.finishedDates[i].memoryPicture}"/>
        <div style="color: gold">${starRating}</div>
        ${user.finishedDates[i].day}<br>
        ${user.finishedDates[i].comment}
        </div>
        
        `;
    }
    return html;
}