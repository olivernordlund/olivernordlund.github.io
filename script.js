/* =========================
   jQuery – scroll & back to top
   ========================= */

$(document).ready(function () {

    // Smooth scrolling for anchor links
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

    // Scroll to top button visibility and behavior
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
   Wedding gallery (JSON) – grouped by category
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

function renderItem(gridEl, item) {
    const div = document.createElement("div");
    div.className = `wg-item ${rotations[Math.floor(Math.random() * rotations.length)]}`;

    const img = document.createElement("img");
    img.src = item.src;
    img.loading = "lazy";
    img.alt = item.caption || "Bröllopsbild";

    div.appendChild(img);

    if (item.caption && String(item.caption).trim() !== "") {
        const caption = document.createElement("p");
        caption.className = "wg-caption";
        caption.textContent = item.caption;
        div.appendChild(caption);
    }

    gridEl.appendChild(div);
}

function renderSection(parentEl, title, items) {
    const section = document.createElement("div");
    section.className = "wg-section";

    const grid = document.createElement("div");
    grid.className = "wedding-gallery-grid";

    shuffleCopy(items).forEach(item => renderItem(grid, item));

    section.appendChild(grid);
    parentEl.appendChild(section);
}

async function buildGallery() {
    if (!galleryEl) return;

    galleryEl.innerHTML = "";

    try {
        const images = await loadImages();

        const vigsel = images.filter(i => i.category === "vigsel");
        const resa = images.filter(i => i.category === "resa");
        const on = images.filter(i => i.category === "on");

        renderSection(galleryEl, "Vigsel", vigsel);
        renderSection(galleryEl, "Resan till ön", resa);
        renderSection(galleryEl, "På ön", on);

    } catch (err) {
        console.error(err);
        galleryEl.innerHTML = `<p class="text-center" style="padding:16px;background:#fff;border-radius:12px;">
          Kunde inte ladda galleriet (images.json). Kör sidan via en server (inte file://).
        </p>`;
    }
}

buildGallery();
