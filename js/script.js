// game points
let points = 0;

//li elements random number 1-120
function createElements() {
    for (let i = 1; i < 60; i++) {
        let li = document.createElement("li");
        let getNumber = randomNumber(120);

        li.style.width = "80px";
        li.style.height = "80px";
        li.style.fontSize = "2.2rem";
        li.style.top = randomNumber(600) + 7 + "px";
        li.style.position = "absolute";
        li.style.left = randomRange(10, 800) + 'px';
        li.style.border = "1px solid blue";
        li.style.background = "#168e33";
        li.style.borderRadius = "40px";
        li.style.color = "white";
        li.style.display = "flex";
        li.style.justifyContent = "center";
        li.style.alignItems = "center";

        li.innerHTML = getNumber;
        document.getElementById("elementArea").appendChild(li);
    }

}

//Generate random number
function randomNumber(num) {
    return (Math.floor(Math.random() * num) + 1);
}

//Generate random range
function randomRange(min, max) {
    return (Math.random() * (max - min) + min);
}

function gamePlay() {
    createElements();

    document.getElementById('elementArea').addEventListener('click',
        function (e) {
            console.log('Clicked inside the ul-tag');
            let pointElem = document.getElementById("points");
            let removeElem = e.target;
            let listItems = document.querySelectorAll("li");
            let ul = document.getElementById("ul");
            if (listItems.length >= 1){
                console.log(listItems.length);
                if (isOdd(e.target.innerHTML)){
                    points=points+1;
                    pointElem.innerHTML = points+"points";
                    removeElem.parentNode.removeChild(removeElem);
                }
                else {
                    console.log('This is an odd number!');
                    alert("This is not an even number!");
                }
            }
        }, true);
}

//check if odd number
function isOdd (num){
    return num % 2;
}

gamePlay();