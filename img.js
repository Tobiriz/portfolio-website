function toggleProjectsBox() {
    const artBox = document.getElementById("article-projects-box-id");
    const infoBox = document.getElementById("projects-info-box-id");

    
    if(document.body.dataset.projects == "false") {
        adjustZAxis(1);
        artBox.style.backgroundImage =
        "linear-gradient(to bottom, var(--gradient-color-white-0),"
        + "var(--gradient-color-white-1)), url('img/projects_crop.jpg')";
        artBox.style.scale = "1.1";
        infoBox.style.opacity = "1.0";
        document.body.dataset.projects = "true";
    } else {
        artBox.style.backgroundImage =
        "linear-gradient(to bottom, var(--background-color-transparent),"
        + "var(--background-color)), url('img/projects_crop.jpg')";
        artBox.style.scale = "1";
        infoBox.style.opacity = "0";
        document.body.dataset.projects = "false";
    }
}

function toggleProfileBox() {
    const artBox = document.getElementById("article-profile-box-id");
    const infoBox = document.getElementById("profile-info-box-id");

    
    if(document.body.dataset.profile == "false") {
        adjustZAxis(2);
        artBox.style.backgroundImage =
        "linear-gradient(to bottom, var(--gradient-color-white-0),"
        + "var(--gradient-color-white-1)), url('img/profile_crop.jpg')";
        artBox.style.scale = "1.1";
        infoBox.style.opacity = "1.0";
        document.body.dataset.profile = "true";
    } else {
        artBox.style.backgroundImage =
        "linear-gradient(to bottom, var(--background-color-transparent),"
        + "var(--background-color)), url('img/profile_crop.jpg')";
        artBox.style.scale = "1";
        infoBox.style.opacity = "0";
        document.body.dataset.profile = "false";
    }
}

function toggleContactBox() {
    const artBox = document.getElementById("article-contact-box-id");
    const infoBox = document.getElementById("contact-info-box-id");

    
    if(document.body.dataset.contact == "false") {
        adjustZAxis(3);
        artBox.style.backgroundImage =
        "linear-gradient(to bottom, var(--gradient-color-white-0),"
        + "var(--gradient-color-white-1)), url('img/contact_crop.jpg')";
        artBox.style.scale = "1.1";
        infoBox.style.opacity = "1.0";
        document.body.dataset.contact = "true";
    } else {
        artBox.style.backgroundImage =
        "linear-gradient(to bottom, var(--background-color-transparent),"
        + "var(--background-color)), url('img/contact_crop.jpg')";
        artBox.style.scale = "1";
        infoBox.style.opacity = "0";
        document.body.dataset.contact = "false";
    }
}

function adjustZAxis(article) {
    const projects = document.getElementById("article-projects-box-id");
    const profile = document.getElementById("article-profile-box-id");
    const contact = document.getElementById("article-contact-box-id");

    if(article == 1) {
        projects.style.zIndex = "2";
        profile.style.zIndex = "1";
        contact.style.zIndex = "1";
    } 
    else if(article == 2) {
        projects.style.zIndex = "1";
        profile.style.zIndex = "2";
        contact.style.zIndex = "1";
    }
    else {
        projects.style.zIndex = "1";
        profile.style.zIndex = "1";
        contact.style.zIndex = "2";
    }
}