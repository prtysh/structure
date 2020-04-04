function getRandomSize(min, max) {
    return Math.round(Math.random() * (max - min) + min);
}

var allImages = "";
var lorem = "lorem ipsum ";
function loremGen (x) {
    text = '';
    for (i = 0; i < x; i++){
        text += lorem;
    }
    return text;
}
for (var i = 0; i < 25; i++) {
    var width = getRandomSize(200, 400);
    var height = getRandomSize(200, 400);
    var fg = "000000".replace(/0/g,function(){return (~~(Math.random()*16)).toString(16);});
    var bg = "000000".replace(/0/g,function(){return (~~(Math.random()*16)).toString(16);});
    allImages += '<img src="https://dummyimage.com/' + width + 'x' + height + '/' + bg +'/'+ fg + '.png'+ '" alt="test">';
    // allImages += '<img src="https://dummyimage.com/' + width + 'x' + height + '/' + '000' +'/'+ 'fff.png'+ '" alt="test">';
    // allImages += '<img src="https://dummyimage.com/' + width + 'x' + height + '/' + '000' +'/'+ 'fff.png';
    // allImages += '<img src="https://placekitten.com/' + width + '/' + height + '" alt="pretty kitty">';
    console.log(allImages);
}

//   $('#photos').append(allImages);
  $('img').hover(function(){
    $(this).css("border-radius", "22px");
    $(this).attr('title', loremGen(getRandomSize(10,100)));
    }, function(){
    $(this).css("border-radius", "0px");
    $(this).attr('title', '');
  });