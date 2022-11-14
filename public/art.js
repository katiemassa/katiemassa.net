const observer = new IntersectionObserver((elems) => {
    elems.forEach((elem) => {
        console.log(elem);
        if (elem.isIntersecting) {
            elem.target.classList.add("fade-in");
        } else {
            elem.target.classList.remove("fade-in");
        }
    });
});

const hiddenElements = document.querySelectorAll(".hidden-fade-in");
hiddenElements.forEach((elem) => observer.observe(elem));