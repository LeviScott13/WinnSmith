function showAbout(){
    var about = document.getElementById("aboutMe");
    var gallery = document.getElementById("gallery");
    var work = document.getElementById("work");

    document.getElementsByTagName("BODY")[0].style.backgroundColor = "black";
    document.getElementsByTagName("BODY")[0].style.transition = "background 1s ease";
    document.getElementsByTagName("MAIN")[0].style.border = "black";

    about.style.display = "block";
    work.style.display = "none";
    gallery.style.display = "none";
}