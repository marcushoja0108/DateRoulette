function updateInfoView() {
  const selectedIndexDate = model.app.selectedDate;
  const selectedDate = model.data.Dates[selectedIndexDate];

  if (selectedDate) {
    let backButton = selectedDate.maxPrice > 1000 ? `<button onclick='goHome()'>Tilbake</button>` : '';
    document.getElementById("app").innerHTML = `



  <div class='header'>
   <div class="Box-left"></div>
        <img class='header-img' src="th4.png"/>
        <div class="Box-right"></div>
        </div>
    </div>
<div id='infoBox' class='info-box'>
        

        <img class='img' src=${selectedDate.Picture} />


    <div id='info' class='info-date'>
    
       <i id='closeBtn' class="fa-solid fa-xmark"></i>
  
      <div class='info-cont'>
          <h2>Hjemme:</h2>
          <p>${selectedDate.home}</p>
      </div>
      <div class='info-cont'>
          <h2>Fra tid:</h2>
          <p>${selectedDate.fromTime} : 00</p>
      </div>
      <div class='info-cont'>
          <h2>Time spent:</h2>
          <p>${selectedDate.timeSpent} timer</p>
      </div>
      <div class='info-cont'>
          <h2>Kategori:</h2>
          <p>${selectedDate.Category}</p>
      </div>
    </div>


      <button id='openBtn' class='info-date-btn'>Date info</button>
    <div class='info'>
    <h1 class='info-name'>${selectedDate.Name}</h1>
    <p class='info-description'>${selectedDate.description}</p>
    </div>

        <div class='btn-container'>
            ${backButton}
            <button onclick="goOngoing()">Aksepter</button>
        </div>

</div>
${createCommentField()}
    `;
  }

  const closeBtn = document.getElementById("closeBtn");
  const infoBox = document.getElementById("infoBox");
  const infoDate = document.getElementById("info");
  const btn = document.getElementById("openBtn");

  btn.addEventListener("click", () => {
    infoDate.classList.toggle("show");
  });

  window.addEventListener("click", (e) => {
    if (e.target === infoBox) {
      infoDate.classList.remove("show");
    } else if (e.target === closeBtn) {
      infoDate.classList.remove("show");
    }
  });
}
function createCommentField(){
  let html='';
  if (model.data.Dates[model.app.selectedDate].review.length > 0) {
    for(let comment of model.data.Dates[model.app.selectedDate].review){
        let name = model.data.users[comment.userId].name
        let starRating = convertRatingToStars(comment.Rating)
        html +=`
        <div class="infoCommentBox" onclick="goFriend(${comment.userId})">
        <div>${name}</div>
        <div>${comment.comment}</div>
        <div style="color: gold">${starRating}</div>
        </div>
        `;
    }
  }else{
    html = '<div class="infoCommentMessage">Ingen tidligere kommentarer</div>';
}
  return html;
}