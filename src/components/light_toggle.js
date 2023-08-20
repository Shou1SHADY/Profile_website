
function toggle_light() {

    let toggle = document.querySelectorAll("#light__toggle");
    let body_element = document.getElementsByTagName("body")[0]; // Access the first element
    // State
    const theme = localStorage.getItem('theme');

    // On mount
    theme && document.body.classList.add(theme);

    toggle.forEach(e => {
        e.onclick = function () {
            body_element.classList.toggle("light-mode");

            if (document.body.classList.contains('light-mode')) {

                localStorage.setItem('theme', 'light-mode');
            } else {
                localStorage.removeItem('theme');
                document.body.removeAttribute('class');
            }

        }





    });
}

export { toggle_light };
