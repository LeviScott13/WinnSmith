function showGallery(){
    var about = document.getElementById("aboutMe");
    var gallery = document.getElementById("gallery");
    var work = document.getElementById("work");

    document.getElementsByTagName("BODY")[0].style.backgroundColor = "white";
    document.getElementsByTagName("BODY")[0].style.transition = "background 1s ease";
    document.getElementsByTagName("MAIN")[0].style.border = "white";
    
    gallery.style.display = "block";
    about.style.display = "none";
    work.style.display = "none";
}