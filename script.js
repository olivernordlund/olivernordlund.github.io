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
   Wedding gallery (JSON) – grouped by category (no headings)
   Requires images.json with category: "vigsel" | "resa" | "on"
   ========================= */

const galleryEl = document.getElementById("wedding-gallery");

const rotations = [
    "wg-rotate-left",
    "wg-rotate-right",
    "wg-rotate-none"
];

async function loadImages() {
    // More robust pathing if you ever move index.html into a subfolder
    const url = new URL("images.json", window.location.href);
    const response = await fetch(url.toString(), { cache: "no-store" });

    if (!response.ok) {
        throw new Error(`Could not load images.json (HTTP ${response.status})`);
    }
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

function renderSection(parentEl, items) {
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

        // Keep chapter order fixed, random within each chapter
        const vigsel = images.filter(i => i.category === "vigsel");
        const resa = images.filter(i => i.category === "resa");
        const on = images.filter(i => i.category === "on");

        // If something is miscategorized, show it last (optional)
        const other = images.filter(i => !["vigsel", "resa", "on"].includes(i.category));

        renderSection(galleryEl, vigsel);
        renderSection(galleryEl, resa);
        renderSection(galleryEl, on);
        if (other.length) renderSection(galleryEl, other);

    } catch (err) {
        console.error(err);

        galleryEl.innerHTML = `<p class="text-center" style="padding:16px;background:#fff;border-radius:12px;">
          Kunde inte ladda galleriet (images.json). Kontrollera att <strong>images.json</strong> finns bredvid index.html och går att öppna i webbläsaren.
        </p>`;
    }
}

buildGallery();
