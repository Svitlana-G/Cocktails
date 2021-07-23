
let modal = document.getElementById('myModal');
let mySubpage = document.getElementById('mySubpage');
let myLinks = document.getElementsByClassName('myLinks')
let span = document.getElementsByClassName('close')[0]


for (let i = 0; i < myLinks.length; i++) {
    console.log(myLinks[i])
    myLinks[i].onclick = function (event) {
        mySubpage.src = '/cocktails/' + event.path[1].id;
        modal.style.display = "block";
        console.log(event.path[1].id)
    }
}


span.onclick = function () {
    modal.style.display = "none"
}

window.onclick = function (event) {

    console.log(event)
    console.log(event.altKey)
    console.log(event.target)
    if (event.target == modal) {
        modal.style.display = "none"
        console.log("if")
    }
}