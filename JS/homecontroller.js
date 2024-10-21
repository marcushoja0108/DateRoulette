function goHome(){
    model.app.currentpage = model.app.pages[0];
    changeView();
}

// let randomDateName = '';
// let rng = null;
function randomDate(){
    let Dates = model.data.Dates;
    model.app.selectedDate = Math.floor(Math.random() * Dates.length);
    updateHomeView()
}

function randomContent(){
    if(model.app.selectedDate == null){
        let html = /*HTML*/`
        <div class="spinButton" onclick="randomDate()">SPIN</div>
        <div class='wheel'>
        <img width='350px' src='wheel.png'>
        </div>
        `;
        return html;
    }
    else{
        let html = /*HTML*/`
        <div class="randomDateContainer">
            <div>${model.data.}</div>
            
            <img class="randomDateImage" onclick="goInfo()"
            src="${model.data.Dates[model.app.selectedDate].Picture}">
        </div>
        `;
        return html;
    }
}

// default filters
let maxPriceFilter = 200
let homeFilter = true
function createMaxPrice(){
     let html = /*HTML*/ `  
        MaksPris
        <input type="range" min="0" max="2000" value=${maxPriceFilter}
        onchange="setMaxPrice(this.value) updateFilterView()">
        ${maxPriceFilter}
        `;
        return html
    }

function setMaxPrice(value){
    maxPriceFilter = value;
}

function createLocation(){
    if(homeFilter == true){
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
    if(homeFilter == true){
        homeFilter = false
        updateFilterView()
    }
    else{
        homeFilter = true
        updateFilterView()
    }
}