
function updateHomeView(){
    if(model.data.users[model.app.loggedinuserID].ongoingDate == true){
        goOngoing();
    }
    else if(model.input.filter.isOpen == true){
        createFilterView();
    }
    else if(model.input.filter.isOpen == false){
        document.getElementById('app').innerHTML = /*HTML*/ `
        <div class="header">
        <div class="Box-left" onclick="openFilter()">
            <img class='filter-img' height = 90px src="filter.png"/>
        </div>
            <img class='header-img' src="th4.png"/>
            <div class="Box-right">
            <img class='profile-img' height = 90px src="profile.png"/>
            </div>
        </div>
            ${randomContent()}
           
        `;}
    
}

// filterview
function createFilterView(){
    document.getElementById('app').innerHTML = /*HTML*/ `
    <div class="header">
    <div class="Box-left" onclick="backToHome()">
        <img class='filter-img' height = 90px src="back.png"/>
    </div>
        <img class='header-img' src="th4.png"/>
        <div class="Box-right">
        <img class='profile-img' height = 90px src="profile.png"/>
        </div>
    </div>
    

    <div class="filterGrid">
        <div class="filterItem">
        ${createMaxPrice()}
        </div>
        <div class="filterItem">${createLocation()}</div>
        <div class="filterItem">${createTimeUsage()}</div>
        <div class="filterItem">${createFromTime()}</div>
    </div>
    <div class="confirmChangesButton" onclick="backToHome()">
    Bekreft endringer</div>
    `;
}