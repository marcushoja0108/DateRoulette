function updateInfoView() {
  let user = model.data.users[model.app.loggedinuserID];
  let selectedDate = model.data.Dates[user.selectedDate];
  let homeChoice = selectedDate.home ? "Hjemme" : "Borte";

  if (selectedDate) {
    let backButton =
      selectedDate.maxPrice > 1000
        ? `<button onclick='goHome()'>Tilbake</button>`
        : "";
    document.getElementById("app").innerHTML = `
  <div class='header'>
   <div class="Box-left"></div>
        <img class='header-img' src="IMG/th4.png"/>
        <div class="Box-right"></div>
        </div>
    </div>
<div id='infoBox' class='info-box'>
        
      <div class='img'>
        <img src="${selectedDate.Picture}" height= 300px/>
      </div>

    <div id='info' class='info-date'>
    
       <i id='closeBtn' class="fa-solid fa-xmark"></i>
  
      <div class='info-date-btn'>
          <h2 class='choise'>Date er ${homeChoice}</h2>
          
      </div>
      <div class='info-cont'>
          <h2>Fra tid:</h2>
          <p>${selectedDate.fromTime} : 00</p>
      </div>
 
      <div class='info-cont'>
          <h2>Tidsforbruk:</h2>
          <p>${selectedDate.timeSpent} timer</p>
      </div>
      <div class='info-cont'>
          <h2>Kostnad:</h2>
          <p>${selectedDate.maxPrice} kr</p>
      </div>
      <div class='info-contCat'>
          <h2>Kategori:</h2>
          <div class="infocategory">${listCategories()}</div>
      </div>
    </div>

      <button id='openBtn' class='info-btn'>Date info</button>
    <div class='info'>
    <h1 class='info-name'>${selectedDate.Name}</h1>
    <p class='info-description'>${selectedDate.description}</p>
    </div>

        <div class='btn-container'>
           ${backButton}
            <button onclick="goOngoing()">Aksepter</button>
        </div>
        ${createCommentField()}
</div>
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
function listCategories() {
  let html = "";
  let user = model.data.users[model.app.loggedinuserID];
  let selectedDate = model.data.Dates[user.selectedDate];
  for (let category of selectedDate.Category) {
    html += `
    <div>${category}</div>
    `;
  }
  return html;
}
function createCommentField() {
  let user = model.data.users[model.app.loggedinuserID];
  let html = "";
  if (model.data.Dates[user.selectedDate].review.length > 0) {
    for (let comment of model.data.Dates[user.selectedDate].review) {
      let name = model.data.users[comment.userId].name;
      let starRating = convertRatingToStars(comment.Rating);
      html += `
        <div class="infoCommentBox" onclick="goFriend(${comment.userId})">
        <div>${name}</div>
        <div>${comment.comment}</div>
        <div style="color: gold">${starRating}</div>
        </div>
        `;
    }
  } else {
    html = '<div class="infoCommentBox">Ingen tidligere kommentarer</div>';
  }
  return html;
}
