function goHome(){
    if(model.data.users[model.app.loggedinuserID].ongoingDate == true){
        goOngoing();
    }
    else{
    model.app.currentpage = model.app.pages[0];
    changeView();
    }   
}
// filter dropdown funksjon
function openFilter(){
    model.input.filter.isOpen = true;
    updateHomeView();
}
function backToHome(){
    model.input.filter.isOpen = false;
    
    updateHomeView();
}

// spin knapp for å få random date
function randomDate() {
    let searchResult = filterRandomDate();
    console.log(searchResult)
    if (searchResult.length > 0) {
        let rng = Math.floor(Math.random() * searchResult.length);
        let randomSelected = searchResult[rng];
        let selectedIndex = model.data.Dates.findIndex(date => date === randomSelected);
        model.app.selectedDate = selectedIndex;
        console.log(model.app.selectedDate);
        goInfo();
    } else {
        console.log('Ingen resultat');
    }
}

// filtreringsfunksjon
function filterRandomDate() {
    let filterInput = model.input.filter;
    let disableFromTime = filterInput.disableFromTime;
    let disablePrice = filterInput.disablePrice;
    let disableTimeSpent = filterInput.disableTimeSpent;
    let disableHome = filterInput.disableHome;
    
    let doneDates = model.data.users[model.app.loggedinuserID].doneDates

    return model.data.Dates.filter(date => 
                (disableFromTime || date.fromTime >= filterInput.fromTime) &&
                (disablePrice || date.maxPrice <= filterInput.maxPrice) &&
                (disableTimeSpent || date.timeSpent <= filterInput.timeUsage) &&
                (disableHome || date.home === filterInput.home) &&
                !doneDates.includes(date.Name) 
    );
}



// disable filters
function disableFromTimeButton(){
    model.input.filter.disableFromTime = !model.input.filter.disableFromTime
    updateHomeView()
}
function disablePriceButton(){
    model.input.filter.disablePrice = !model.input.filter.disablePrice
    updateHomeView()
}
function disableTimeSpentButton(){
    model.input.filter.disableTimeSpent = !model.input.filter.disableTimeSpent
    updateHomeView()
}

function addCounter(){
    model.input.filter.buttoncounter ++
    if(model.input.filter.buttoncounter == 3){
        model.input.filter.buttoncounter = 0;
    }
    updateHomeView()
}
// default filters
// function createMaxPrice(){
//      let html = /*HTML*/ `  
//         MaksPris
//         <input type="range" min="0" max="2000" value=${model.input.filter.maxPrice}
//         onchange="setMaxPrice(this.value)">
//         ${createMaxPriceContent()}
//         `;
//         return html
//     }
function createMaxPrice(){
    if(model.input.filter.disablePrice){
        return `  
        Slå på pris
        `;
    }else{
        return /*HTML*/ `  
        MaksPris
        <input type="range" min="0" max="2000" value=${model.input.filter.maxPrice}
        onchange="setMaxPrice(this.value)">
        ${createMaxPriceContent()}
        `;
    }
}

function setMaxPrice(value){
    model.input.filter.maxPrice = value;
    updateHomeView();
}
function createMaxPriceContent(){
    if(model.input.maxPrice == 0){
        let html = 'Gratis';
        return html
    }
    else{
        let html = /*HTML*/ `
        ${model.input.filter.maxPrice} kr
        `;
        return html
    }
}

// function createLocation(){
//     if(model.input.filter.home == true){
//         let html = /*HTML*/`
//             <div onclick="changeHomeFilter()">Hjemme</div>
//         `;
//         return html
//         }
//         else if(model.input.filter.home == false){
//             let html = /*HTML*/`
//             <div onclick="changeHomeFilter()">Ikke hjemme</div>
//             `;
//             return html
//         }
//         else if(model.input.filter.home == 'disabled'){
//             let html = /*HTML*/`
//             <div style="backround-color: gray" onclick="changeHomeFilter()">Deaktivert</div>
//             `;
//             return html
//         }
// }
function createLocation(){
    if(model.input.filter.buttoncounter == 0){
        model.input.filter.disableHome = true
        return /*HTML*/`
        <div>Slå på hjemme</div>
        `;
    }else if(model.input.filter.buttoncounter == 1){
        model.input.filter.home = true
        model.input.filter.disablefilter = false
        return /*HTML*/`
            <div>Hjemme</div>
        `;
    }else if(model.input.filter.buttoncounter == 2){
        model.input.filter.home = false
        model.input.filter.disablefilter = false
        return /*HTML*/`
            <div>Ikke hjemme</div>
        `;
    }
}

// function changeHomeFilter(){
//     if(model.input.filter.home == true){
//         model.input.filter.home = false
//         updateHomeView();
//     }
//     else{
//         model.input.filter.home = true
//         updateHomeView();
//     }
// }


function createTimeUsage(){
    if(model.input.filter.disableTimeSpent){
        return `  
        Slå på Tidsbruk
        `;
    }else{
        return /*HTML*/ `
        Tidsbruk
        <input type="range" min="1" max="5" value=${model.input.filter.timeUsage}
        onchange="setMaxTime(this.value)">
        ${model.input.filter.timeUsage} ${createTimeContent()}
        `;
    }
}
function createTimeContent(){
    if(model.input.filter.timeUsage == 1){
        let html = 'time'
        return html;
    }
    else{
        let html = 'timer'
        return html;
    }
}

function setMaxTime(value){
    model.input.filter.timeUsage = value;
    updateHomeView();
}

// function createFromTime(){
//     let html = /*HTML*/ `
//     Fra kl
//         <input type="range" min="0" max="23" value = ${model.input.filter.fromTime}
//         onchange="model.input.filter.fromTime = this.value; updateHomeView()">
//         ${model.input.filter.fromTime}.00
    
//     `;
//     return html
// }
function createFromTime(){
    if(model.input.filter.disableFromTime){
        return `  
        Slå på fra klokken
        `;
    }else{
        return /*HTML*/ `
        Fra kl
        <input type="range" min="0" max="23" value = ${model.input.filter.fromTime}
        onchange="model.input.filter.fromTime = this.value; updateHomeView()">
        ${model.input.filter.fromTime}.00
        `;

    }
}

function startWheel(){
    model.input.filter.startWheel = true
    updateHomeView();
    setTimeout(randomDate,3500)
}