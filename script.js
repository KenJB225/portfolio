document.addEventListener("DOMContentLoaded", () => {
    anime({
        targets: 'h1',
        translateY: [-20, 0],
        opacity: [0, 1],
        duration: 1000,
        easing: 'easeOutExpo'
    });
});

document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("experience-link").addEventListener("click", function (event) {
        event.preventDefault(); 

        fetch("experience.html")
            .then(response => {
                if (!response.ok) {
                    throw new Error("Network response was not ok");
                }
                return response.text();
            })
            .then(data => {
                document.getElementById("experience-section").innerHTML = data;
            })
            .catch(error => console.error("Error loading the experience section:", error));
    });
});

