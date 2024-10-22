function goHome(){
    if(model.data.users[model.app.loggedinuserID].ongoingDate == true){
        goOngoing();
    }
    else{
    model.app.currentpage = model.app.pages[0];
    changeView();
    }   
}

function openFilter(){
    model.input.filter.isOpen = true;
    updateHomeView();
}

function backToHome(){
    model.input.filter.isOpen = false;
    
    updateHomeView();
}

function randomDate() {
    let searchResult = filterRandomDate();

    if (searchResult.length > 0) {
        let rng = Math.floor(Math.random() * searchResult.length);
        let randomSelected = searchResult[rng];
        let selectedIndex = model.data.Dates.findIndex(date => date === randomSelected);
        model.app.selectedDate = selectedIndex;
        console.log(model.app.selectedDate);
    } else {
        console.log('Ingen resultat');
    }
}

function filterRandomDate(){

   return  model.data.Dates.filter(date => date.home === model.input.filter.home &&
        date.maxPrice <= model.input.filter.maxPrice &&
        date.timeSpent <= model.input.filter.timeUsage &&
        date.fromTime >= model.input.filter.fromTime
   )
}

// default filters
function createMaxPrice(){
     let html = /*HTML*/ `  
        MaksPris
        <input type="range" min="0" max="2000" value=${model.input.filter.maxPrice}
        onchange="setMaxPrice(this.value)">
        ${createMaxPriceContent()}
        `;
        return html
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

function createLocation(){
    if(model.input.filter.home == true){
        let html = /*HTML*/`
            <div onclick="changeHomeFilter()">Hjemme</div>
        `;
        return html
    }
    else{
        let html = /*HTML*/`
            <div onclick="changeHomeFilter()">Ikke hjemme</div>
        `;
        return html
    }
}

function changeHomeFilter(){
    if(model.input.filter.home == true){
        model.input.filter.home = false
        updateHomeView();
    }
    else{
        model.input.filter.home = true
        updateHomeView();
    }
}

function createTimeUsage(){
    let html = /*HTML*/ `
    Tidsbruk
    <input type="range" min="1" max="5" value=${model.input.filter.timeUsage}
    onchange="setMaxTime(this.value)">
    ${model.input.filter.timeUsage} ${createTimeContent()}
    `;
    return html
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
    createFilterView();
}

function createFromTime(){
    let html = /*HTML*/ `
    Fra kl
        <input type="range" min="0" max="23" value = ${model.input.filter.fromTime}
        onchange="model.input.filter.fromTime = this.value; updateHomeView()">
        ${model.input.filter.fromTime}.00
    
    `;
    return html
}