function toggleProfile () {
    const img = document.getElementById("nav-profile-img");
    const txt = document.getElementById("nav-profile-txt");
    const nav = document.getElementById("nav-profile");

    if(document.body.dataset.navProfile == "false") {
        expand(img, txt, nav);
        document.body.dataset.navProfile = "true";
    } else {
        collapse(img, txt, nav);
        document.body.dataset.navProfile = "false";
    }
}

function toggleProjects () {
    const img = document.getElementById("nav-projects-img");
    const txt = document.getElementById("nav-projects-txt");
    const nav = document.getElementById("nav-projects");
    
    if(document.body.dataset.navProjects == "false") {
        expand(img, txt, nav);
        document.body.dataset.navProjects = "true";
    } else {
        collapse(img, txt, nav);
        document.body.dataset.navProjects = "false";
    }
}

function toggleContact () {
    const img = document.getElementById("nav-contact-img");
    const txt = document.getElementById("nav-contact-txt");
    const nav = document.getElementById("nav-contact");
    
    if(document.body.dataset.navContact == "false") {
        expand(img, txt, nav);
        document.body.dataset.navContact = "true";
    } else {
        collapse(img, txt, nav);
        document.body.dataset.navContact = "false";
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
    const img = document.getElementById("nav-profile-img");
    const txt = document.getElementById("nav-profile-txt");
    const nav = document.getElementById("nav-profile");

    toggleLink(img, txt, nav);
    setTimeout(resetProfileLink, 1000, img, txt, nav);
}

function toggleProjectsLink() {
    const img = document.getElementById("nav-projects-img");
    const txt = document.getElementById("nav-projects-txt");
    const nav = document.getElementById("nav-projects");

    toggleLink(img, txt, nav);
    setTimeout(resetProjectsLink, 1000, img, txt, nav);
}

function toggleContactLink() {
    const img = document.getElementById("nav-contact-img");
    const txt = document.getElementById("nav-contact-txt");
    const nav = document.getElementById("nav-contact");

    toggleLink(img, txt, nav);
    setTimeout(resetContactLink, 1000, img, txt, nav);
}

function resetProfileLink(img, txt, nav) {
    if(document.body.dataset.navProfile == "false") {
        collapse(img, txt, nav);
    } else {
        resetNav(img, txt, nav);
    }
}

function resetProjectsLink(img, txt, nav) {
    if(document.body.dataset.navProjects == "false") {
        collapse(img, txt, nav);
    } else {
        resetNav(img, txt, nav);
    }
}

function resetContactLink(img, txt, nav) {
    if(document.body.dataset.navContact == "false") {
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

/*function resetNavOrig(img, txt) {
    img.style.scale = "1.0";
    img.style.transform = "translate(0)";
    txt.style.scale = "1.0";
    txt.style.opacity = "0.0";
    nav.style.background = "0";
}*/

function resetNav(img, txt, nav) {
    let deltaImg = txt.clientHeight * 3/7;
    let deltaTxt = deltaImg * 2;

    img.style.scale = "1.3";
    img.style.transform = "translate(0px, " + deltaImg + "px)";
    txt.style.scale = "1.0";
    txt.style.transform = "translate(0px, -" + deltaTxt + "px)";
    nav.style.background = "radial-gradient(var(--radial-gradient-color-03) 0%, var(--background-color) 60%)";
}