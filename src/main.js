import './input.css'
import '../styles/modern.normalize.css'
import '../styles/style.css'
import '../styles/components/header.css'
import '../styles/components/hero.css'
import '../styles/components/about.css'
import '../styles/components/feature.css'
import '../styles/components/work.css'
import '../styles/components/contact.css'
import '../styles/components/footer.css'
import '../styles/utils.css'
import { toggle_light } from './components/light_toggle';
import { lazyLoading } from './components/lazy_loading'

const textElements = document.querySelectorAll(".animated-text");

textElements.forEach((textElement) => {
    const text = textElement.textContent.trim();

    textElement.textContent = "";

    function typeText(index) {
        if (index < text.length) {
            textElement.textContent += text.charAt(index);
            gsap.delayedCall(0.05, () => typeText(index + 1));
        }
    }

    typeText(0);
});

// // When page loads, it will trigger the circle menu
// window.onload = function () {
//     var menuButton = document.getElementById("open-menu");
//     menuButton.click();
// };

toggle_light();
lazyLoading();
