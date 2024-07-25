
var username = prompt('Please Enter your name');
document.querySelector('#userName').innerHTML=username;
var button = document.querySelector(".btn");
button.addEventListener('click',function()
{
    var randomNumber = Math.floor(Math.random() * 6) + 1;

    var imagepath = 'images/'+'dice'+randomNumber+'.png';
    
    var image = document.querySelectorAll("img")[0];
    image.setAttribute('src',imagepath);
    
    var randomNumber2 = Math.floor(Math.random() * 6) + 1;
    
    var imagepath2 = 'images/'+'dice'+randomNumber2+'.png';
    
    var image2 = document.querySelectorAll('img')[1];
    image2.setAttribute('src',imagepath2);
    
    if(randomNumber > randomNumber2)
    {
       
        document.querySelector('h1').innerHTML= username +' wins';
    }
    
    else if(randomNumber2 > randomNumber)
        {
            document.querySelector('h1').innerHTML="player 2 wins";
        }
        else{
             document.querySelector('h1').innerHTML="Draw";
        }
})



