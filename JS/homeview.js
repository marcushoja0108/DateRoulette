function updateHomeView(){
        let user = model.data.users[model.app.loggedinuserID];
        let partnerDate = user.selectedPartner != null ? `<div class="homeDoubledateBtn" onclick="goCouple()">Dobbeldate</div>` : '';
        let selectedProfileImg = user.userImage ? user.userImage : "profile.png";
        document.getElementById('app').innerHTML = /*HTML*/ `
        <div class="header">
        <div class="Box-left"></div>
            <img class='header-img' src="th4.png"
            onclick="goHome()"/>
            <div class="Box-right">
            <img src="${selectedProfileImg}" height= 50px onclick="goProfile()" class="profileImageBtn"/>
            </div>
        </div>
        ${createFilterView()}
            <div class="randomContainer">
            ${partnerDate}
            ${randomContent()}
            </div>
        `;
    }

// filterview
function createFilterView(){
    if(model.input.filter.isOpen == false) return`
        <div class="Box-placeholder" onclick="openFilter()">
            <img class='filter-img' height = 70px src="filter.png"/>
        </div>`;


        return `
    <div class="dropDownContainer">
        <div class="filterGrid">
        <div class="filterItem">${createCategory()}</div>
            <div class="filterItem" onclick="disablePriceButton()">${createMaxPrice()}</div>
            <div class="filterItem" onclick="addCounter()">${createLocation()}</div>
            <div class="filterItem" onclick="disableTimeSpentButton()">${createTimeUsage()}</div>
            <div class="filterItem" onclick="disableFromTimeButton()">${createFromTime()}</div>
        </div>
        <div class="confirmChangesButton" onclick="backToHome()">
        Bekreft endringer</div>
    </div>
        `;
    
}

// spin og random view
function randomContent(){
    if(model.input.filter.showResultmessage == false){
    let startWheelAnimation = model.input.filter.startWheel ? `<img width='350px' class='wheelspin' src='wheel.png'>` : `<img width='350px' class='wheel' src='wheel.png'>`
    let html = /*HTML*/`
        <div class="spinButton" onclick="startWheel()">SPIN</div>
        ${startWheelAnimation}
    `;
    return html;
    }
    else{
        let html = /*HTML*/ `
        <div class="noResultbutton" onclick="tryAgainButton()">Try again?</div>
            <div class="resultMessage">${model.input.filter.resultMessage}</div>
        `;
        return html;
    }
}

function tryAgainButton(){
    model.input.filter.showResultmessage = false;
    updateHomeView()
}

function goToSightseeing(){
    model.app.selectedDate = 9;
    goInfo();
}
