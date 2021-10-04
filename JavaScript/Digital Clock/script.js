function currentTime(){
    setInterval(function time(){
    var myDate = new Date();
    document.querySelector("h4").innerHTML=(myDate.toLocaleTimeString());
}, 1000);
}
