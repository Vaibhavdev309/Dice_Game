const https = require("https");
const app = express();
const bodyParser = require("body-parser");
app.use(express.static(__dirname + "/public/"));

app.get("/",function(req,res){
    res.sendFile("./index.html");
})

app.listen(process.env.PORT || 3000, function(){
    console.log("Server is started at port 3000");
})




var randomDice = (Math.floor(Math.random()*6) + 1);
document.querySelector("img").setAttribute("src","./images/dice" + randomDice + ".jpg");
var randomDicee = (Math.floor(Math.random()*6) + 1);
document.querySelector(".dice_img").lastElementChild.setAttribute("src","./images/dice"+randomDicee+".jpg");
if(randomDice > randomDicee){
    document.querySelector("h1").textContent = "player 1 Wins";
}
else if(randomDicee > randomDice){
    document.querySelector("h1").textContent = "Player 2 Wins";
}
else{
    document.querySelector("h1").textContent = "Draw ! Refresh Me !";
}