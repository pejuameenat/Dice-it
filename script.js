let randomNumber1 = Math.floor(Math.random()*6)+1
let randomImage = 'images/dice'+ randomNumber1 +'.png'//image/dice3.png
let image = document.querySelectorAll("img")[0].setAttribute("src", randomImage)

let randomNumber2 = Math.floor(Math.random()*6)+1
let randomImage2= 'images/dice'+randomNumber2+'.png'//image/dice3.png
let image2 = document.querySelectorAll("img")[1].setAttribute("src", randomImage2)

if(randomNumber1>randomNumber2){
    document.querySelector("h1").innerHTML = "Player 1 wins"
}else if(randomNumber2>randomNumber1){
    document.querySelector("h1").innerHTML= "Player 2 wins"
}else{
    document.querySelector("h1").innerHTML= "DRAW"
}

document.querySelector("button").addEventListener("click", function(){
    window.location.reload()
});

//  let getDate = Math.floor(Math.random()*31) + 1;
//  console.log(`today's date is ${getDate} 🤦‍♂️`)