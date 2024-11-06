//hovedview
function updateOngoingView() {
    let user = model.data.users[model.app.loggedinuserID];
    let partner = model.data.users[user.selectedPartner];
    let coupleIndex = getCoupleIndex(user);
    let ongoingDate = findOngoingDate(coupleIndex);
    let blindUser1 = '';
    let blindUser2 = '';
    let ongoingChoice = '';
    if (ongoingDate && user.ongoingCoupledate) {
        if (ongoingDate.secondCouple !== null) {
            let otherCouple = ongoingDate.coupleId === coupleIndex 
            ? model.data.couples[ongoingDate.secondCouple] 
            : model.data.couples[ongoingDate.coupleId];
            blindUser1 = model.data.users[otherCouple.firstId].name;
            blindUser2 = model.data.users[otherCouple.secondId].name;
            ongoingChoice = `
            <h2>${user.name} og ${partner.name}.<br> Dere har en ${model.data.Dates[user.selectedDate].Name}date med ${blindUser1} og ${blindUser2}</h2>
            <img class="ongoingHeart" height = 70px src="IMG/Ongoingheart.png" onclick="ongoingRating()"/>
            `;
        } else {
            ongoingChoice = `
            <h2>${user.name}, venter på en annen gruppe for ${model.data.Dates[user.selectedDate].Name}date...</h2>
            <button onclick="cancelOngoingDoubleDate()">Avbryt</button>
            `;
        }
    } else {
        ongoingChoice = `
        <h2>${user.name}, ${model.data.Dates[user.selectedDate].Name} daten din venter...</h2>
        <img class="ongoingHeart" height = 70px src="IMG/Ongoingheart.png" onclick="ongoingRating()"/>
        `;
    }
    document.getElementById('app').innerHTML = /*html*/ `
            ${createOngoingHeader()}
            <div class="ongoingGrid">
            ${ongoingChoice}
            <div class="ongoingText">Trykk på hjertet når daten er ferdig</div>
            <br>
            ${createOngoingCard()}
            </div>
        `;
}

//ratingview
function ongoingRating() {
    let user = model.data.users[model.app.loggedinuserID];
    let coupleIndex = getCoupleIndex(user);
    let ongoingDate = findOngoingDate(coupleIndex);
    let header = createOngoingHeader();
    let gridStart = `<div class="ongoingGrid"><div class="ratingCard">`;
    let gridEnd = `</div></div>`;
    let content = '';

    if (ongoingDate) {
        if (ongoingDate.firstcompleted || coupleIndex === ongoingDate.coupleId) {
            content = `
                <h3>Hvordan var dobbeldaten?</h3>
                ${createOngoingRating()}
                ${createOngoingInputs()}`;
        } else {
            content = `
                <p style="padding: 5px">Vennligst vent til første par fullfører før du kan trykke på knappen.</p>
                <button class="ongoingCancelRating" onclick="cancelOngoingRating()">Avbryt</button>`;
        }
    } else {
        content = `
                <h3>Hvordan var daten?</h3>
                ${createOngoingRating()}
                ${createOngoingInputs()}`;
    }
    document.getElementById('app').innerHTML = `${header}${gridStart}${content}${gridEnd}`;
}


function createOngoingHeader(){
    let user = model.data.users[model.app.loggedinuserID]
    let selectedProfileImg = user.userImage ? user.userImage : "profile.png";
    return `
    <div class="header">
        <div class="Box-left"></div>
        <img class='header-img' src="th4.png"/>
        <div class="Box-right">
            <img src="${selectedProfileImg}" height= 50px onclick="goProfile()" class="profileImageBtn"/>
        </div>
    </div>
    `;
}
function createOngoingRating(){
    return`
    <div class="star-rating">
        <span class="stars" onclick="rate(1)">★</span>
        <span class="stars" onclick="rate(2)">★</span>
        <span class="stars" onclick="rate(3)">★</span>
        <span class="stars" onclick="rate(4)">★</span>
        <span class="stars" onclick="rate(5)">★</span>
    </div>
    `;
}
function createOngoingInputs(){
    return `
    <div class="onGoingComment">
        <input type="text" value="${model.input.endDate.comment ?? ''}" oninput="model.input.endDate.comment=this.value"/>
    </div>
    <div class="onGoingFile">
        <input type="file" value="${model.input.endDate.memoryPicture ?? ''}" onchange="readPhotoMemory(this)">
    </div>
    <div class="onGoingButtons">
        <button onclick="makeMemory()">Send inn</button>
        <button class="ongoingCancelRating" onclick="cancelOngoingRating()">Avbryt</button>
    </div>
    `;
}
function createOngoingCard(){
    let user = model.data.users[model.app.loggedinuserID]
return `
    <div class="ongoingCard">
        <img style="border-radius: 10px" src="${model.data.Dates[user.selectedDate].Picture}" height=250px>
    </div>
`;
}