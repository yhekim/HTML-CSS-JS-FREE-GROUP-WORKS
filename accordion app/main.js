const buttons = document.querySelectorAll("#akordiyon");
const arrow = document.querySelectorAll(".fa-arrow-alt-circle-down");
console.log(arrow)
array = Array.from(buttons);
for (var i = 0; i < array.length; i++) {
    array[i].onclick = function() {
        var panel = this.nextElementSibling;
        this.lastElementChild.classList.toggle("fa-arrow-alt-circle-up")
            //console.log(panel)
        if (panel.style.maxHeight) {
            panel.style.maxHeight = null;

        } else {
            panel.style.maxHeight = panel.scrollHeight + "px";

        }

    }
}