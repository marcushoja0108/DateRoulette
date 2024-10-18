updateInfoView();
function updateInfoView() {
  document.getElementById("app").innerHTML = `

  <div class='header'>
   <div class="Box-left"></div>
        <img class='header-img' src="th2.png"/>
        <div class="Box-right"></div>
        </div>
    </div>
<div class='info-box'>
        
    <div class='date-img'>
        <img src='./dateImage/cooking_class.jpg' />
    </div>

    <div class='info'>
    <h1>Cooking date</h1>
    <p>Info om date</p>
    </div>

        <div class='btn-container'>
            <button>Tilbake</button>
            <button>Aksepter</button>
        </div>

</div>
    `;
}
