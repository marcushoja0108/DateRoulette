
function updateHomeView(){
   
        document.getElementById('app').innerHTML = /*HTML*/ `
        <div class="header">
        <div class="Box-left">
            
        </div>
            <img class='header-img' src="th4.png"
            onclick="goHome()"/>
            <div class="Box-right">
            <img class='profile-img' height = 90px src="profile.png"  onclick="goMemory()"/>
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
    let startWheelAnimation = model.input.filter.startWheel ? `<img width='350px' class='wheelspin' src='new_wheel.png'>` : `<img width='350px' class='wheel' src='new_wheel.png'>`
    let html = /*HTML*/`
        <div class="spinButton" onclick="startWheel()">SPIN</div>
        ${startWheelAnimation}
    `;
    return html;
}