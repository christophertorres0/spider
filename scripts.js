a = document.getElementById("one");
b = document.getElementById("two");
c = document.getElementById("three");
d = document.getElementById("spider");
e = document.getElementById("four");
f = document.getElementById("five");
g = document.getElementById("six");
n = document.getElementById("dog");
mySound = document.getElementById("song");

// GOBLIN --> PROWLER--> KINGPEN //
function nextImage(el){

if (el.src.match("Images/Goblin.png")){

el.src = "Images/prowler.gif";

} else if (el.src.match("Images/prowler.gif")){

el.src = "Images/kingpen.png";

} else if (el.src.match("Images/kingpen.png")){

el.src = "Images/Goblin.png";

} else {

}
}


// PROWLER --> GOBLIN --> KINGPEN //
function nextImage2(el){

if (el.src.match("Images/prowler.gif")){

el.src = "Images/Goblin.png";

} else if (el.src.match("Images/Goblin.png")){

el.src = "Images/kingpen.png";

} else if (el.src.match("Images/kingpen.png")){

el.src = "Images/prowler.gif";

} else {

}
}

// KINGPEN --> GOBLIN --> PROWLER //
function nextImage3(el){

if (el.src.match("Images/kingpen.png")){

el.src = "Images/Goblin.png";

} else if (el.src.match("Images/Goblin.png")){

el.src = "Images/prowler.gif";

} else if (el.src.match("Images/prowler.gif")){

el.src = "Images/kingpen.png";

}
 else {

}
}

// GOBLIN --> PROWLER--> KINGPEN //
function nextImage4(el){

if (el.src.match("Images/uncleben.png")){

el.src = "Images/pp.png";

} else if (el.src.match("Images/pp.png")){

el.src = "Images/davis.png";

} else if (el.src.match("Images/davis.png")){

el.src = "Images/uncleben.png";

} else {

}
}


// PROWLER --> GOBLIN --> KINGPEN //
function nextImage5(el){

if (el.src.match("Images/pp.png")){

el.src = "Images/uncleben.png";

} else if (el.src.match("Images/uncleben.png")){

el.src = "Images/davis.png";

} else if (el.src.match("Images/davis.png")){

el.src = "Images/pp.png";

} else {

}
}

// KINGPEN --> GOBLIN --> PROWLER //
function nextImage6(el){

if (el.src.match("Images/pp.png")){

el.src = "Images/davis.png";

} else if (el.src.match("Images/davis.png")){

el.src = "Images/uncleben.png";

} else if (el.src.match("Images/uncleben.png")){

el.src = "Images/pp.png";

}
 else {

}
}




function playSound() {
	document.getElementById("you-win").play();
	// when the Completed button is clicked, the gif and sunflower song will appear//
}

//Checkyes function checks images in order davis.png, pp.png, then uncleben.png
function checkYes() {
  if (c.src.match("Images/davis.png") && a.src.match("Images/pp.png") && b.src.match("Images/uncleben.png")){
    alert("next section");
  }
  else {
    alert("no match");
    }
}


function playSound() {
	document.getElementById("you-win").play();
	// when the JACKPOT! button is clicked, play the slot machine sound
}

//checkYes2 checks heros and villains in order prowler.gif, goblin.png, kingpen.pen
function checkYes2() {
  if (e.src.match("Images/prowler.gif") && f.src.match("Images/Goblin.png") && g.src.match("Images/kingpen.png")){
    alert("completed");
  }
  else {
    alert("no match");
    }
}

//finalcheck first hides image "sunflower.gif" until order davis.png, pp.png, uncleben.png the mentors and hero section is checked, then transfers to check heros and villans section with id="spider"
function finalCheck() {
  if (c.src.match("Images/davis.png") && a.src.match("Images/pp.png") && b.src.match("Images/uncleben.png") && e.src.match("Images/prowler.gif") && f.src.match("Images/Goblin.png") && g.src.match("Images/kingpen.png")){
    n.classList.remove("hideimage");
    mySound.play();
    setTimeout(redirect, 2500);
  }
  else {
    console.log("not correct");

  }
}

//function redirect links "https://angelaflo.github.io/final_es/" to transfers to next page once puzzle passed
function redirect(){
  document.location.href = "https://angelaflo.github.io/final_es/"
}
