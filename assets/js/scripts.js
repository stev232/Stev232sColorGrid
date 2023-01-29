var count = 0;
var color = ["#FF0000", "#FF3300", "#FF7700", "#FFBB00", "#FFFF00", "#BBFF00", "#77FF00", "#33FF00", "#00FF00", "#00FF33", "#00FF77", 
    "#00FFBB", "#00FFFF", "#00BBFF", "#0077FF", "#0033FF", "#0000FF", "#3300FF", "#7700FF", "#BB00FF", "#FF00FF", "#FF00BB", "#FF0077", "#FF0033"];

$('.square').on('click', function(event) {
    event.preventDefault();
    event.target.setAttribute("style", "background-color: ");
});

$('.square').hover(function(event) {
    event.preventDefault();
    event.target.setAttribute("style", "background-color: " + color[count]);
    countChecker();
});

function countChecker() {
    count++;
    if(count >= color.length) {
        count = 0;
    }
}