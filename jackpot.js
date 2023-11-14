//將我們的照片存入陣列
var imgs = [
    "./stone.png",
    "./scissor.png",
    "./paper.png",
];
//初始化我們的值
var user = 0;
var enemy = 0;
var winCount = 0;
var loseCount = 0;
var safeCount = 0;
//取得照片的Id
var getUser = document.getElementById("imgUser");
//更改我們的圖片
function changeImg(choice) {
  user = choice;
  getUser.src = imgs[user];
  compare(user);
}
function compare(user) {
  //給對手一個隨機數字，並去更改他的圖片
  enemy = Math.floor(Math.random() * 3);
  document.getElementById("imgEnemy").src = imgs[enemy];
  //取得結果的Id
  var resultElement = document.getElementById("result");
  //判斷輸、贏、平手
  if ((user === 0 && enemy === 1) || (user === 1 && enemy === 2) || (user === 2 && enemy === 0)) {
    resultElement.innerHTML = "You WIN!";
    winCount += 1;
    document.getElementById("winTime").innerHTML = " 贏: " + winCount;
  } else if ((user === 1 && enemy === 0) || (user === 2 && enemy === 1) || (user === 0 && enemy === 2)) {
    resultElement.innerHTML = "You LOSE!";
    loseCount += 1;
    document.getElementById("loseTime").innerHTML = " 輸: " + loseCount;
  } else {
    resultElement.innerHTML= "You TIE!";
    safeCount += 1;
    document.getElementById("tieTime").innerHTML= " 平手: " + safeCount;
  }
}
