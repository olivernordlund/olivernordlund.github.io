/* =========================
   jQuery – scroll & back to top
   ========================= */

$(document).ready(function () {

    $("a").on('click', function (event) {
        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function () {
                window.location.hash = hash;
            });
        }
    });

    var btn = $('#button');

    window.onscroll = function () {
        if ((window.innerHeight + Math.round(window.scrollY)) >= document.body.offsetHeight) {
            btn.addClass('show');
        } else {
            btn.removeClass('show');
        }
    };

    btn.on('click', function (e) {
        e.preventDefault();
        $('html, body').animate({ scrollTop: 0 }, 300);
    });

});


/* =========================
   Wedding gallery (JSON)
   ========================= */

const galleryEl = document.getElementById("wedding-gallery");

const rotations = [
    "wg-rotate-left",
    "wg-rotate-right",
    "wg-rotate-none"
];

async function loadImages() {
    const response = await fetch("images.json", { cache: "no-store" });
    if (!response.ok) throw new Error("Could not load images.json");
    return response.json();
}

function shuffleCopy(arr) {
    return [...arr].sort(() => Math.random() - 0.5);
}

function inRange(n, min, max) {
    return n >= min && n <= max;
}

async function buildGallery() {
    if (!galleryEl) return;

    galleryEl.innerHTML = "";

    const images = await loadImages();

    // Kapitlen (baserat på order)
    const vigsel = images.filter(i => inRange(i.order ?? 999, 1, 24));
    const resa = images.filter(i => inRange(i.order ?? 999, 25, 49));
    const on = images.filter(i => inRange(i.order ?? 999, 50, 74));

    // Random inom varje kapitel, men kapitlen i fast ordning
    const finalImages = [
        ...shuffleCopy(vigsel),
        ...shuffleCopy(resa),
        ...shuffleCopy(on)
    ];

    finalImages.forEach(item => {
        const div = document.createElement("div");
        div.className = `wg-item ${rotations[Math.floor(Math.random() * rotations.length)]}`;

        const img = document.createElement("img");
        img.src = item.src;
        img.loading = "lazy";
        img.alt = item.caption || "Bröllopsbild";

        div.appendChild(img);

        if (item.caption) {
            const caption = document.createElement("p");
            caption.className = "wg-caption";
            caption.textContent = item.caption;
            div.appendChild(caption);
        }

        galleryEl.appendChild(div);
    });
}

buildGallery();