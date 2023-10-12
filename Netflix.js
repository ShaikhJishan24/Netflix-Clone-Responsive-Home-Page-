ScrollReveal().reveal(".heading-content", {
    origin: 'top',
    distance: '120px',
    duration: 1200,
    reset: true
})

let sr = ScrollReveal({
    distance: '120px',
    duration: 1500,
    reset: true,
})

sr.reveal(".container-fluid-1",{origin:"left", dealay:"100"});
sr.reveal(".container-fluid-2",{origin:"right", dealay:"300"});
sr.reveal(".container-fluid-3",{origin:"left", dealay:"500"});

VanillaTilt.init(document.querySelectorAll(".tilt"), {
    max: 25,
    speed: 600
});

