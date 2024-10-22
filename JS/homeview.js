
function updateHomeView(){
   
        document.getElementById('app').innerHTML = /*HTML*/ `
        <div class="header">
        <div class="Box-left">
            
        </div>
            <img class='header-img' src="th4.png"
            onclick="goHome()"/>
            <div class="Box-right">
            <img class='profile-img' height = 90px src="profile.png"/>
            </div>
        </div>
        ${createFilterView()}
            <div class="randomContainer">${randomContent()}</div>
        `;
    }

// filterview
function createFilterView(){
    if(model.input.filter.isOpen == false) return`
        <div class="Box-placeholder" onclick="openFilter()">
            <img class='filter-img' height = 90px src="filter.png"/>
        </div>`;


        return `
    <div class="dropDownContainer">
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
    </div>
        `;
    
}

function randomContent(){
    let html = /*HTML*/`
        <div class="spinButton" onclick="randomDate()">SPIN</div>
        <img width='350px' class='wheel' src='wheel.png'>
    `;
    return html;
}