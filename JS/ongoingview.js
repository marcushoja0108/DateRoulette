updateOngoingView();
function updateOngoingView(){
    document.getElementById('app').innerHTML = `
    <div class="header">
        <div class="Box-left"></div>
        <img class='header-img' src="th2.png"/>
        <div class="Box-right"></div>
    </div>
        <h2 class="text">Ongoingview</h2>
    `;
}