updateMemoryView();
function updateMemoryView(){
    document.getElementById('app').innerHTML = `
    <div class="header">
    <div class="Box-left"></div>
        <img class='header-img' src="th4.png" onclick="goHome()"/>
        <div class="Box-right"></div>
    </div>
    <div>${model}</div>
        <h2 class="text">Memoryview</h2>
    `;
}
