function updateCoupleView(){
    let user = model.data.users[model.app.loggedinuserID]
    let selectedProfileImg = user.userImage ? user.userImage : "IMG/profile.png";
    document.getElementById('app').innerHTML = /*HTML*/ `
    <div class="header">
    <div class="Box-left"></div>
        <img class='header-img' src="IMG/th4.png" onclick="goHome()"/>
        <div class="Box-right">
        <img src="${selectedProfileImg}" height= 50px onclick="goProfile()" class="profileImageBtn"/>
        </div>
    </div>
    <div class="coupleContainer">
        <h3>Pardater</h3>
    ${listAvableCoupleDates(user) ?? ''}
    ${createNewCoupleDate() ?? ''}
    <button style="width: 200px" onclick="openAddDate()">Lag en ny Pardate</button>
    </div>
    `;
}

function listAvableCoupleDates(user){
    let html = '';
    for (let i = 0; i < model.data.ongoingCoupledate.length; i++) {
        let date = model.data.ongoingCoupledate[i];
        let couple = model.data.couples[date.coupleId];
        let firstUser = model.data.users[couple.firstId];
        let secondUser = model.data.users[couple.secondId];
        if(date.secondCouple == null && firstUser.city.toLowerCase() == user.city.toLowerCase()){
            html += `
            <div class="coupleOngoingBox" onclick="acceptCoupleDate(${date.ongoingDateId})">
            <div><strong>${firstUser.name} & ${secondUser.name}</div>
            <div>${model.data.Dates[date.selectedCoupleDate].Name} ${model.data.ongoingCoupledate[i].time}</strong></div>
            <div>${model.data.ongoingCoupledate[i].description}</div>
            </div>
            `;
            }
    }
    return html;
}

function createNewCoupleDate(){
    if(model.input.coupledate.addIsOpen){
        let html = `
        <div class="OuterNewCoupleDate">
            <img src="IMG/x.png" onclick="closeAddDate()"/>
            <div class="infoText">Velg en date</div>
            <div>
                <select class="coupleDateSelect" onchange="selectCoupleDate(this.value)">
                    ${generateCoupleDateOptions()}
                </select>
            </div>

          
            <div class="infoText">Sett en tid</div>
            <input class="newCoupleDateTime" type="time" onchange="model.input.coupledate.time = this.value">

            <div class="infoText">Gi en kort beskrivelse</div>
            <input type="text" class="createCoupleDateDescription" placeholder="Description"
            onchange="model.input.coupledate.description = this.value">

            <div>
                <button onclick="addCoupleDate()">Legg til date</button>
            </div>
        </div>
        `;
        return html;
    }
}

function generateCoupleDateOptions() {
    let options = '';
    for (let i = 0; i < model.data.coupleDates.length; i++) {
        let dateIndex = model.data.coupleDates[i];
        options += `<option  value="${dateIndex}" onchange="">${model.data.Dates[dateIndex].Name}</option>`;
    }
    return options;
}

