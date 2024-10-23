function updateFriendView(){
    document.getElementById('app').innerHTML = /*HTML*/ `
    <div class="header">
    <div class="Box-left"></div>
        <img class='header-img' src="th4.png" onclick="goHome()"/>
        <div class="Box-right">
            <img class='profile-img' height = 90px src="profile.png"  onclick="goMemory()"/>
        </div>
    </div>
    <div class="friendContainer">
    <h1 >Friend</h1>
    </div>
        
    `;
}