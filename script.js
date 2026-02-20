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

function shuffle(array) {
    return array.sort(() => Math.random() - 0.5);
}

async function loadImages() {
    const response = await fetch("images.json", { cache: "no-store" });
    if (!response.ok) throw new Error("Could not load images.json");
    return response.json();
}

async function buildGallery() {
    if (!galleryEl) return;

    galleryEl.innerHTML = "";

    const images = await loadImages();

   images
  .sort((a, b) => (a.order ?? 999) - (b.order ?? 999))
  .forEach(item => {
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