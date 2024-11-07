function updateProfileView(){
    let user = model.data.users[model.app.loggedinuserID]
    let partner = user.partner
    let searchOtherProfile = user.selectedPartner == null && !partner.length > 0
    ? `<div class="profileSearchInput"><input type="text" placeholder="Søk etter partner" oninput="model.input.profile.inputSearch=this.value"/>
    <button onclick="profileSearchUser()">Søk</button></div><br>${model.input.profile.showSearch}` 
    : '';
    document.getElementById('app').innerHTML = /*HTML*/ `
    ${createProfileHeader()}
    <div class="profileContainer">
        ${searchOtherProfile}
        <div></div>
        ${createProfileInfo(user)}
        ${createPartner()}
    </div>
    <div></div>
    `;
}
function createProfileInfo(user){
    let selectedProfileImg = user.userImage ? user.userImage : "profile.png";
    let partner = '';
    let selectedPartnerImg = '';
    if(user.selectedPartner != null){
        partner = model.data.users[user.selectedPartner]
        selectedPartnerImg = partner.userImage ? partner.userImage : "profile.png";
    }
    let coupleImage = user.selectedPartner != null 
    ? `<div class="profileImageBox"><img src="${selectedProfileImg}" height= 300px/></div>
    <div class="profileImageBoxPartner"><img src="${selectedPartnerImg}" height= 150px/></div>` 
    : `<div class="profileImageBox"><img src="${selectedProfileImg}" height= 300px/></div>`
    selectedProfileImg
    let html = `
    <div>${coupleImage}</div>
    <br>
    <div>Bursdag: ${user.birthday}</div>
    <div>By: ${user.city}</div>
    <div>Navn: ${user.name}</div>
    `;
    return html;
}


function createPartner(){
    let html='';
    let user = model.data.users[model.app.loggedinuserID]
        if(user.selectedPartner != null){
            html = `
            <div>Partner: ${model.data.users[user.selectedPartner].name}</div>
            <button onclick="deletePartner()">Fjern Partner</button>
            `;
        }
        if(user.partner.length > 0){
            if(user.partner[0].hasAccepted){
                html = `
                <div>Partner: ikke godtatt enda</div>
                `;
            }else{
                html = `
                <div>Partner: ikke godtatt enda</div>
                <div class="profileChoicesPartner">
                <button onclick="acceptPartner()">Godta</button>
                <button onclick="rejectPartner()">Avslå</button>
                </div>
                `;
            }
        }
    
    return html;
}
function createProfileHeader(){
    return `
    <div class="header">
        <div class="Box-leftProfile">
        <img height = 40px src="IMG/logout.png" onclick="goLogin()"/>
        </div>
        <img class='header-img' src="th4.png" onclick="goHome()"/>
        <div class="Box-rightProfile">
        <img height = 50px src="IMG/memory.png" onclick="goMemory()"/>
        </div>
    </div>
    `;
}

function createProfileSearchUser(){
    let html = '';
    for(let result of model.input.profile.searchresult){
        html += `
        <div class="searchresultboxes">
            <div>Navn: ${result.name}</div> 
            <div>Brukernavn: ${result.eMail}</div>
            <div class="searchresultbutton">
            <button onclick="selectPartner(${result.ID})">Velg</button>
            </div>
        </div>
        `;
    }
    return html;
}
