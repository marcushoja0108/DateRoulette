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
    let user = model.data.users[model.app.loggedinuserID]
    model.input.filter.startWheel = false
    let searchResult = filterRandomDate();
    console.log(searchResult)
    if (searchResult.length > 0) {
        let rng = Math.floor(Math.random() * searchResult.length);
        let randomSelected = searchResult[rng];
        let selectedIndex = model.data.Dates.findIndex(date => date === randomSelected);
        user.selectedDate = selectedIndex;
        console.log(user.selectedDate);
        goInfo();
    } else {
        model.input.filter.showResultmessage = true;
        model.input.filter.resultMessage = 'Ingen resultater matchet dine filtere';
        updateHomeView()
    }
}

// filtreringsfunksjon
function filterRandomDate() {
    let filterInput = model.input.filter;
    let disableFromTime = filterInput.disableFromTime;
    let disablePrice = filterInput.disablePrice;
    let disableTimeSpent = filterInput.disableTimeSpent;
    let disableHome = filterInput.disableHome;
    let disableCategory = filterInput.disableCategory;
    
    let doneDates = model.data.users[model.app.loggedinuserID].doneDates

    return model.data.Dates.filter(date => 
                (disableFromTime || date.fromTime >= filterInput.fromTime) &&
                (disablePrice || date.maxPrice <= filterInput.maxPrice) &&
                (disableTimeSpent || date.timeSpent <= filterInput.timeUsage) &&
                (disableHome || date.home === filterInput.home) &&
                (disableCategory || date.Category.includes(filterInput.selectedCategory)) &&
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
function disableCategoryButton(){
    model.input.filter.disableCategory = true; 
    model.input.filter.categoryDropDown = false; 
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

function createMaxPrice(){
    if(model.input.filter.disablePrice){
        return `  
        <div class="turnOnButton">Slå på pris</div>
        `;
    }else{
        return /*HTML*/ `  
        MaksPris
        <input type="range" min="0" max="${findMaxPrice()}" value=${model.input.filter.maxPrice}
        onchange="setMaxPrice(this.value)">
        ${createMaxPriceContent()}
        `;
    }
}

function findMaxPrice(){
    let possibleDates = model.data.Dates.filter(
        date => !model.data.users[model.app.loggedinuserID].doneDates.includes(date.Name)
    );
    let maxPrice = 0;
    for(let i = 0; i < possibleDates.length; i++){
        if(maxPrice < possibleDates[i].maxPrice) maxPrice = possibleDates[i].maxPrice
    }
    return maxPrice
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
    if(model.input.filter.buttoncounter == 0){
        model.input.filter.disableHome = true
        return /*HTML*/`
        <div class="turnOnButton">Slå på hjemme</div>
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



function createTimeUsage(){
    if(model.input.filter.disableTimeSpent){
        return `  
        <div class="turnOnButton">Slå på Tidsbruk</div>
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


function createFromTime(){
    if(model.input.filter.disableFromTime){
        return `  
        <div class="turnOnButton">Slå på fra klokken</div>
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

function createCategory(){
    checkAvailableCategories()
    if(model.input.filter.disableCategory){
        return`
        <div onclick="model.input.filter.disableCategory = false; updateHomeView()" 
        class="turnOnButton">Slå på kategori</div>
        `;
    }else{
        if(model.input.filter.categoryDropDown == false){
            return /*HTML*/ `
            <div onclick="model.input.filter.categoryDropDown = true; updateHomeView()">Kategori</div>
            <div>${model.input.filter.selectedCategory}</div>
            `;
        }
        else{
            return /*HTML*/ `
            <div class="categoryDropDown" >
            ${createCategoryDropdown()}</div>
            `;
        }
    }
}

function checkAvailableCategories(){
    let possibleCategories = findPossibleCategories();
    let rng = Math.floor(Math.random() * possibleCategories.length);

    if(!possibleCategories.includes(model.input.filter.selectedCategory)){
        model.input.filter.selectedCategory = possibleCategories[rng]
        model.input.filter.disableCategory = true
    }
}

function createCategoryDropdown(){
    let html = `<div onclick="disableCategoryButton()" class="turnOffButton">Slå av kategori</div>`;
    let possibleCategories = findPossibleCategories()

    for(let i=0; i < possibleCategories.length; i++){
        html += `<div class="category" onclick="selectCategory(${i})">${possibleCategories[i]}</div>
        `;
    }
    return html
}

function findPossibleCategories(){
    let possibleDates = findPossibleDates()
    let categoryResult = []
    for(i = 0; i < possibleDates.length; i++){
        for(let index = 0; index < possibleDates[i].Category.length; index ++){
            if(!categoryResult.includes(possibleDates[i].Category[index])){
                categoryResult.push(possibleDates[i].Category[index])
            }
        }
    }
    return categoryResult
}

function findPossibleDates(){
    return model.data.Dates.filter(date => 
        !model.data.users[model.app.loggedinuserID].doneDates.includes(date.Name))
}

function selectCategory(i){
    let filter = model.input.filter
    let possibleCategories = findPossibleCategories();

    filter.selectedCategory = possibleCategories[i]
    filter.categoryDropDown = false; 
    updateHomeView();
}

function startWheel(){
    model.input.filter.startWheel = true
    updateHomeView();
    setTimeout(randomDate,3500)
}