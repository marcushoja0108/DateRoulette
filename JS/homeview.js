updateHomeView();
function updateHomeView(){
    document.getElementById('app').innerHTML = /*HTML*/ `
    <div class="header">
    <div class="Box-left" onclick="updateFilterView()">
        <img class='filter-img' height = 90px src="filter.png"/>
    </div>
        <img class='header-img' src="th2.png"/>
        <div class="Box-right">
        <img class='profile-img' height = 90px src="profile.png"/>
        </div>
    </div>
       
        <h2 class="text">Homeview</h2>

        ${randomContent()}
       
    `;
}

function updateFilterView(){
    document.getElementById('app').innerHTML = /*HTML*/ `
    <div class="header">
    <div class="Box-left" onclick="updateHomeView()">
        <img class='filter-img' height = 90px src="back.png"/>
    </div>
        <img class='header-img' src="th2.png"/>
        <div class="Box-right">
        <img class='profile-img' height = 90px src="profile.png"/>
        </div>
    </div>
    

    <div class="filterGrid">
        <div class="filterItem">
        ${createMaxPrice()}
        </div>
        <div class="filterItem">${createLocation()}</div>
        <div class="filterItem">Tidsbruk</div>
        <div class="filterItem">Fra kl:</div>
    </div>
    <div class="confirmChangesButton" onclick="updateHomeView()">
    Bekreft endringer</div>
    `;
}