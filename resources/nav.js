fetch('/resources/nav.html')
    .then(res => res.text())
    .then(text => {
        let nav = document.getElementById("nav");
        nav.innerHTML = text;
    });