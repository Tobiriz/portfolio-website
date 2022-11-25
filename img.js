function toggleProjectsBox() {
    const artBox = document.getElementById("article-projects-box-id");
    const infoBox = document.getElementById("projects-info-box-id");
    const shadow = document.getElementById("shadow");
    
    if(document.body.dataset.projects == "false") {
        showArticle(artBox, infoBox, shadow, "-25%", "projects");
        document.body.dataset.projects = "true";
    } else {
        hideArticle(artBox, infoBox, shadow, "projects");
        document.body.dataset.projects = "false";
    }
}

function toggleProfileBox() {
    const artBox = document.getElementById("article-profile-box-id");
    const infoBox = document.getElementById("profile-info-box-id");
    const shadow = document.getElementById("shadow");
    
    if(document.body.dataset.profile == "false") {
        showArticle(artBox, infoBox, shadow, "75%", "profile");
        document.body.dataset.profile = "true";
    } else {
        hideArticle(artBox, infoBox, shadow, "profile");
        document.body.dataset.profile = "false";
    }
}

function toggleContactBox() {
    const artBox = document.getElementById("article-contact-box-id");
    const infoBox = document.getElementById("contact-info-box-id");
    const shadow = document.getElementById("shadow");
    
    if(document.body.dataset.contact == "false") {
        showArticle(artBox, infoBox, shadow, "175%", "contact");
        document.body.dataset.contact = "true";
    } else {
        hideArticle(artBox, infoBox, shadow, "contact");
        document.body.dataset.contact = "false";
    }
}

function showArticle(artBox, infoBox, shadow, left, url) {
    artBox.style.backgroundImage =
        "linear-gradient(to bottom, var(--gradient-color-white-0),"
        + "var(--background-color-02)), url('img/" + url + "_crop.jpg')";
    artBox.style.scale = "0.9";
    infoBox.style.opacity = "1.0";
    shadow.style.left = left;
    shadow.style.background = "radial-gradient(var(--gradient-color-white-1) 40%, var(--gradient-color-white-0) 60%)";
}

function hideArticle(artBox, infoBox, shadow, url) {
    artBox.style.backgroundImage =
        "linear-gradient(to bottom, var(--background-color-transparent),"
        + "var(--background-color)), url('img/" + url + "_crop.jpg')";
        artBox.style.scale = "0.8";
        infoBox.style.opacity = "0";
        shadow.style.background = "0";
}