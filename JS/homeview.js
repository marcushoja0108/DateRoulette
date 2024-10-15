updateHomeView();
function updateHomeView(){
    document.getElementById('app').innerHTML = `
    <div class="header">
    <div class="Box-left">
        <img class='filter-img' height = 90px src="filter.png"/>
    </div>
        <img class='header-img' src="th2.png"/>
        <div class="Box-right">
        <img class='profile-img' height = 90px src="profile.png"/>
        </div>
    </div>
       
        <h2 class="text">Homeview</h2>

        <div class='wheel'>
        <img width='350px' src='wheel.png'>
        </div>
    `;
}

function createFilterPage(){
    document.getElementById('app').innerHTML = `
    <div class="header">
    <div class="Box-left">
        <img class='filter-img' height = 90px src="back.png"/>
    </div>
        <img class='header-img' src="th2.png"/>
        <div class="Box-right">
        <img class='profile-img' height = 90px src="profile.png"/>
        </div>
    </div>
    
    `;
}