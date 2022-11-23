function toggleNav(id) {
    let delta;
    switch(id) {
        case 'profile': delta = 52; break;
        case 'projects': delta = 65; break;
        case 'contact': delta = 60; break;
    }

    const img = document.getElementById("nav-" + id + "-img");
    const txt = document.getElementById("nav-" + id + "-txt");
    
    if(document.body.dataset.nav == "false") {
        img.style.scale = "1.3";
        img.style.translate = "-" + delta + "px";
        document.body.dataset.nav = "true";
        setTimeout(showNavText, 100, txt);
    } else {
        img.style.scale = "1.0";
        img.style.translate = "0";
        txt.style.opacity = "0.0";
        document.body.dataset.nav = "false";
        setTimeout(hideNavText, 200, txt);
    }
}

function showNavText(txt) {
    txt.style.opacity = "1.0";
}

function hideNavText(txt) {
    txt.style.opacity = "0.0";
}

function toggleLink(id) {
    let deltaImg;
    switch(id) {
        case 'profile': deltaImg = 44; break;
        case 'projects': deltaImg = 57; break;
        case 'contact': deltaImg = 52; break;
    }

    const img = document.getElementById("nav-" + id + "-img");
    const txt = document.getElementById("nav-" + id + "-txt");

    img.style.scale = "1.0";
    img.style.translate = "-" + deltaImg + "px";
    txt.style.scale = "0.8";
    txt.style.translate = "-7px";

    setTimeout(resetNav, 1000, img, txt, deltaImg);
}

function resetNav(img, txt, deltaImg) {
    if(document.body.dataset.nav == "false") {
        img.style.scale = "1.0";
        img.style.translate = "0";
        txt.style.scale = "1.0";
        txt.style.opacity = "0.0";
    } else {
        img.style.scale = "1.3";
        img.style.translate = "-" + (deltaImg + 8) + "px";
        txt.style.scale = "1.0";
        txt.style.translate = "0px";
    }
}