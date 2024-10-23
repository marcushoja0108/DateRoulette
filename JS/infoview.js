updateInfoView();

function updateInfoView() {
  const selectedIndexDate = model.app.selectedDate;
  const selectedDate = model.data.Dates[selectedIndexDate];
  if (selectedDate) {
    document.getElementById("app").innerHTML = `



  <div class='header'>
   <div class="Box-left"></div>
        <img class='header-img' src="th4.png"/>
        <div class="Box-right"></div>
        </div>
    </div>
<div class='info-box'>
        
    <div class='date-img'>
        <img src=${selectedDate.Picture} />
    </div>

    <div class='info'>
    <h1 class='info-name'>${selectedDate.Name}</h1>
    <p class='info-description'>${selectedDate.description}</p>
    </div>

        <div class='btn-container'>
            <button onclick='goBack()'>Tilbake</button>
            <button onclick="goOngoing()">Aksepter</button>
        </div>

</div>
    `;
  }
}
