//hovedview
function updateOngoingView(){
    document.getElementById('app').innerHTML = `
    <div class="header">
        <div class="Box-left"></div>
        <img class='header-img' src="th4.png"/>
        <div class="Box-right"><img class='profile-img' height = 90px src="profile.png" onclick="goMemory()"/></div>
    </div>

        <div class="ongoingGrid">
        <h2>${model.data.users[model.app.loggedinuserID].name}, ${model.data.Dates[model.app.selectedDate].Name} daten din venter...</h2>
        <div class="ongoingText">Trykk på hjertet når daten er ferdig</div>
        <br>
            <div class="ongoingCard">
                <img src="${model.data.Dates[model.app.selectedDate].Picture}" class="ongoingCardImg">
                <div class="ongoingCheck">
                    <img height = 90px src="IMG/Ongoingheart.png" onclick="ongoingRating()"/>
                </div>
            </div>
    `;
}
//ratingview
function ongoingRating(){
    document.getElementById('app').innerHTML = `
    <div class="header">
        <div class="Box-left"></div>
        <img class='header-img' src="th4.png"/>
        <div class="Box-right"></div>
    </div>
        <div class="ongoingGrid">
            <div class="ratingCard">
                <h3>Hvordan var daten?</h3>
                <div class="star-rating">
                    <input type="radio" id="star5" name="rating" value="5" onclick="dateRating(this.value)">
                    <label for="star5" title="5 stars">☆</label>
                    <input type="radio" id="star4" name="rating" value="4" onclick="dateRating(this.value)">
                    <label for="star4" title="4 stars">☆</label>
                    <input type="radio" id="star3" name="rating" value="3" onclick="dateRating(this.value)">
                    <label for="star3" title="3 stars">☆</label>
                    <input type="radio" id="star2" name="rating" value="2" onclick="dateRating(this.value)">
                    <label for="star2" title="2 stars">☆</label>
                    <input type="radio" id="star1" name="rating" value="1" onclick="dateRating(this.value)">
                    <label for="star1" title="1 star">☆</label>
                </div>
                <div class="onGoingComment">
                    <input type="text" value="${model.input.endDate.comment ?? ''}" oninput="model.input.endDate.comment=this.value"/>
                </div>
                <div class="onGoingFile">
                    <input type="file" value="${model.input.endDate.memoryPicture ?? ''}" onchange="readPhotoMemory(this)">
                </div>
                <div class="onGoingButtons">
                    <button onclick="makeMemory()">Send inn</button>
                    <button class="ongoingCancelRating" onclick="cancelOngoingRating()">Avbryt</button>
                </div>
            </div>
        </div>
    `;
}
