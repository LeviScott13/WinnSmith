function showWork(){
    var about = document.getElementById("aboutMe");
    var gallery = document.getElementById("gallery");
    var work = document.getElementById("work");

    document.getElementsByTagName("BODY")[0].style.backgroundColor = "#1B1464";
    document.getElementsByTagName("BODY")[0].style.transition = "background 1s ease";
    document.getElementsByTagName("MAIN")[0].style.border = "#1B1464";

    work.style.display = "block";
    about.style.display = "none";
    gallery.style.display = "none";
}