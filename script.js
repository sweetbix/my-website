// for spotlight effect on cursor
document.addEventListener("DOMContentLoaded", () => {
    const spotlight = document.getElementById("spotlight");

    document.addEventListener("mousemove", (e) => {
        const offset = 280; // needs to be double of height / width to ensure its centered
        spotlight.style.transform = `translate(${e.clientX - offset}px, ${e.clientY - offset}px)`;
    });
});

// no spotlight for touchscreen devices (no cursor)
document.addEventListener("DOMContentLoaded", () => {
    const isMobile = window.matchMedia('(pointer: coarse)').matches;
    const spotlight = document.getElementById("spotlight");

    if (isMobile) {
        spotlight.classList.remove("md:opacity-30");
    }
});

// for colour-changing text
window.addEventListener("scroll", () => {
    const target = document.getElementById("contact");
    const rect = target.getBoundingClientRect();
    const element = document.getElementById("dynamic-text");
    const offset = 0.4;

    if (rect.top < window.innerHeight * offset) {
        element.classList.remove("text-slate-400");
        element.classList.add("text-slate-200");
    } else {
        element.classList.remove("text-slate-200");
        element.classList.add("text-slate-400");
    }
});

// change title in contact form when input is selected
function changeInputColour(titleId, inputId) {
    const title = document.getElementById(titleId);
    const input = document.getElementById(inputId);

    input.addEventListener('focus', () => {
        title.classList.remove('text-slate-400');
        title.classList.add('text-slate-200');
        input.classList.add('text-slate-200');
    });

    input.addEventListener('blur', () => {
        title.classList.remove('text-slate-200');
        title.classList.add('text-slate-400');
        input.classList.remove('text-slate-200');
    });
}

changeInputColour('email-title', 'email-input');
changeInputColour('subject-title', 'subject-input');
changeInputColour('msg-title', 'msg-input');

function interactiveNav() {
    const sections = document.querySelectorAll("section");
    const navlinks = document.querySelectorAll(".nav-link");

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // remove active 
                navlinks.forEach(link => link.classList.remove("active"));

                // add active to current section 
                const id = entry.target.id;
                const activeLink = document.querySelector(`.nav-link[href="#${id}"]`);
                if (activeLink) activeLink.classList.add("active");
            }
        });
    }, {
        threshold: 0.7
    });

    sections.forEach(section => observer.observe(section));
}

interactiveNav();
