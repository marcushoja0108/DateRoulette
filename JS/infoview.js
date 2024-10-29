function updateInfoView() {
  const selectedIndexDate = model.app.selectedDate;
  const selectedDate = model.data.Dates[selectedIndexDate];
  if (selectedDate) {
    document.getElementById("app").innerHTML = `



  <div class='header'>
   <div class="Box-left"></div>
        <img class='header-img' src="th4.png" onclick="goHome()"/>
        <div class="Box-right"></div>
        </div>
    </div>
<div class='info-box'>
        

        <img class='img' src=${selectedDate.Picture} />
    

    <div class='info'>
    <h1 class='info-name'>${selectedDate.Name}</h1>
    <p class='info-description'>${selectedDate.description}</p>
    </div>

        <div class='btn-container'>
            <button onclick='goHome()'>Tilbake</button>
            <button onclick="goOngoing()">Aksepter</button>
        </div>

</div>
${createCommentField()}
    `;
  }
}
function createCommentField(){
  let html='';
  for(let comment of model.data.Dates[model.app.selectedDate].review){
    let name = model.data.users[comment.userId].name
    let rating = comment.Rating
    let starRating = convertRatingToStars(rating)
    html +=`
    <div class="infoCommentBox" onclick="goFriend(${comment.userId})">
      <div>${name}</div>
      <div>${comment.comment}</div>
      <div style="color: gold">${starRating}</div>
    </div>
    `;
  }
  return html;
}