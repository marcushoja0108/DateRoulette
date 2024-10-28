function goFriend(friendId){
    model.app.selectedFriend = friendId;
    model.app.currentpage = model.app.pages[5];
    changeView();
}
function convertRatingToStars(rating) {
    let stars = '';
    for (let i = 0; i < 5; i++) {
        if(i < rating){
            stars +=  '★'
        }else{
            stars += '☆'
        }
    }
    return stars;
}