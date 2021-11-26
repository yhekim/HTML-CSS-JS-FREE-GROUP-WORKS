const gozbebek = document.getElementsByClassName("gozbebek");
//console.log(gozbebek);

document.onmousemove = (event) => {
    var x = event.clientX * 100 / window.innerWidth + "%";
    var y = event.clientY * 100 / window.innerHeight + "%";
    console.log(x, y)
    for (var i = 0; i < 2; i++) {
        gozbebek[i].style.left = x;
        gozbebek[i].style.top = y;
        gozbebek[i].style.transform = `translate(-${x} , -${y})`;
    }



}