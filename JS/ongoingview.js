//hovedview
function updateOngoingView(){
    let user = model.data.users[model.app.loggedinuserID]
    let partner = model.data.users[model.app.selectedPartner]
    let blindUser1 = 'john';
    let blindUser2 = 'emma';
    let ongoingDoubleDate = true

    let ongoingChoice = ongoingDoubleDate
    ? `<h2>${user.name} og ${partner.name}. Dere har en ${model.data.Dates[user.selectedDate].Name}date med ${blindUser1} og ${blindUser2}</h2>`
    : `<h2>${model.data.users[model.app.loggedinuserID].name}, ${model.data.Dates[user.selectedDate].Name} daten din venter...</h2>`
        document.getElementById('app').innerHTML =/*html*/ `
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
function ongoingRating(){
    document.getElementById('app').innerHTML = `
    ${createOngoingHeader()}
        <div class="ongoingGrid">
            <div class="ratingCard">
                <h3>Hvordan var daten?</h3>
                ${createOngoingRating()}
                ${createOngoingInputs()}
            </div>
        </div>
    `;
}

function createOngoingHeader(){
    return `
    <div class="header">
        <div class="Box-left"></div>
        <img class='header-img' src="th4.png"/>
        <div class="Box-right"><img class='profile-img' height = 90px src="profile.png" onclick="goProfile()"/></div>
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
        <img src="${model.data.Dates[user.selectedDate].Picture}" class="ongoingCardImg">
        <div class="ongoingCheck">
            <img height = 90px src="IMG/Ongoingheart.png" onclick="ongoingRating()"/>
        </div>
    </div>
`;
}