function toggleProfile () {
    const img = document.getElementById("nav-profile-img-id");
    const txt = document.getElementById("nav-profile-txt-id");
    const nav = document.getElementById("nav-profile-id");

    if(document.body.dataset.navProfileData == "false") {
        expand(img, txt, nav);
        document.body.dataset.navProfileData = "true";
    } else {
        collapse(img, txt, nav);
        document.body.dataset.navProfileData = "false";
    }
}

function toggleProjects () {
    const img = document.getElementById("nav-projects-img-id");
    const txt = document.getElementById("nav-projects-txt-id");
    const nav = document.getElementById("nav-projects-id");
    
    if(document.body.dataset.navProjectsData == "false") {
        expand(img, txt, nav);
        document.body.dataset.navProjectsData = "true";
    } else {
        collapse(img, txt, nav);
        document.body.dataset.navProjectsData = "false";
    }
}

function toggleContact () {
    const img = document.getElementById("nav-contact-img-id");
    const txt = document.getElementById("nav-contact-txt-id");
    const nav = document.getElementById("nav-contact-id");
    
    if(document.body.dataset.navContactData == "false") {
        expand(img, txt, nav);
        document.body.dataset.navContactData = "true";
    } else {
        collapse(img, txt, nav);
        document.body.dataset.navContactData = "false";
    }
}

function expand(img, txt, nav){
    let deltaImg = txt.clientHeight * 3/7;
    let deltaTxt = deltaImg * 2;

    img.style.scale = "1.3";
    img.style.transform = "translate(0px, " + deltaImg + "px)";
    txt.style.transform = "translate(0px, -" + deltaTxt + "px)";
    txt.style.opacity = "1.0";
    nav.style.background = "radial-gradient(var(--radial-gradient-color-03) 0%, var(--background-color) 60%)";
}

function collapse(img, txt, nav) {
    img.style.scale = "1.0";
    img.style.transform = "translate(0)";
    txt.style.opacity = "0.0";
    txt.style.scale = "1.0";
    txt.style.transform = "translate(0)";
    nav.style.background = "0";
}

function toggleProfileLink() {
    const img = document.getElementById("nav-profile-img-id");
    const txt = document.getElementById("nav-profile-txt-id");
    const nav = document.getElementById("nav-profile-id");

    toggleLink(img, txt, nav);
    setTimeout(resetProfileLink, 1000, img, txt, nav);
}

function toggleProjectsLink() {
    const img = document.getElementById("nav-projects-img-id");
    const txt = document.getElementById("nav-projects-txt-id");
    const nav = document.getElementById("nav-projects-id");

    toggleLink(img, txt, nav);
    setTimeout(resetProjectsLink, 1000, img, txt, nav);
}

function toggleContactLink() {
    const img = document.getElementById("nav-contact-img-id");
    const txt = document.getElementById("nav-contact-txt-id");
    const nav = document.getElementById("nav-contact-id");

    toggleLink(img, txt, nav);
    setTimeout(resetContactLink, 1000, img, txt, nav);
}

function resetProfileLink(img, txt, nav) {
    if(document.body.dataset.navProfileData == "false") {
        collapse(img, txt, nav);
    } else {
        resetNav(img, txt, nav);
    }
}

function resetProjectsLink(img, txt, nav) {
    if(document.body.dataset.navProjectsData == "false") {
        collapse(img, txt, nav);
    } else {
        resetNav(img, txt, nav);
    }
}

function resetContactLink(img, txt, nav) {
    if(document.body.dataset.navContactData == "false") {
        collapse(img, txt, nav);
    } else {
        resetNav(img, txt, nav);
    }
}

function toggleLink(img, txt, nav) {
    let deltaImg = txt.clientHeight * 3/7;
    let deltaTxt = deltaImg * 2;

    img.style.scale = "1.0";
    img.style.transform = "translate(0px, " + deltaImg + "px)";
    txt.style.scale = "0.8";
    txt.style.transform = "translate(0px, -" + deltaTxt + "px)";
    nav.style.background = "radial-gradient(var(--radial-gradient-color-05) 0%, var(--background-color) 60%)";
}

function resetNav(img, txt, nav) {
    let deltaImg = txt.clientHeight * 3/7;
    let deltaTxt = deltaImg * 2;

    img.style.scale = "1.3";
    img.style.transform = "translate(0px, " + deltaImg + "px)";
    txt.style.scale = "1.0";
    txt.style.transform = "translate(0px, -" + deltaTxt + "px)";
    nav.style.background = "radial-gradient(var(--radial-gradient-color-03) 0%, var(--background-color) 60%)";
}