/* CSS Reset */
/* Based on Eric Meyer's Reset CSS v2.0 (https://meyerweb.com/eric/tools/css/reset/) */
html,
body,
div,
span,
applet,
object,
iframe,
h1,
h2,
h3,
h4,
h5,
h6,
p,
blockquote,
pre,
a,
abbr,
acronym,
address,
big,
cite,
code,
del,
dfn,
em,
img,
ins,
kbd,
q,
s,
samp,
small,
strike,
strong,
sub,
sup,
tt,
var,
b,
u,
i,
center,
dl,
dt,
dd,
ol,
ul,
li,
fieldset,
form,
label,
legend,
table,
caption,
tbody,
tfoot,
thead,
tr,
th,
td,
article,
aside,
canvas,
details,
embed,
figure,
figcaption,
footer,
header,
hgroup,
menu,
nav,
output,
ruby,
section,
summary,
time,
mark,
audio,
video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
}

/* HTML5 display-role reset for older browsers */
article,
aside,
details,
figcaption,
figure,
footer,
header,
hgroup,
menu,
nav,
section {
    display: block;
}

body {
    line-height: 1;
}

ol,
ul {
    list-style: none;
}

blockquote,
q {
    quotes: none;
}

blockquote::before,
blockquote::after,
q::before,
q::after {
    content: '';
    content: none;
}

table {
    border-collapse: collapse;
    border-spacing: 0;
}

/* End CSS Reset */

/* Fonts */

@font-face {
    font-family: 'Tid-Book';
    src: url('fonts/Tid-Book.woff') format('woff'),
        url('fonts/Tid-Book.woff2') format('woff2');
    font-weight: normal;
    font-style: normal;
}

@font-face {
    font-family: 'Tid-BookItalic';
    src: url('fonts/Tid-BookItalic.woff') format('woff'),
        url('fonts/Tid-BookItalic.woff2') format('woff2');
    font-weight: normal;
    font-style: normal;
}


body {
    margin: 0;
    padding: 0;
    font-family: 'Tid-Book', helvetica, 'Times', serif;
    font-weight: normal;
    line-height: 1.28;
    display: grid;
    grid-template-rows: auto auto 1fr auto;
    justify-items: center;
    background-color: #fffff7;
}

.form-bg {
    background: linear-gradient(360deg, rgba(246, 162, 222, 0.2) 0%, rgba(255, 255, 247, 0) 100%);
}

/* Images */

img {
    width: 100%;
    height: auto;
    margin: 20px 0;
}

.headline-container {
    display: flex;
    justify-content: center;
}

img.headline {
    width: 25%;
    max-height: 250px;
}


/* Typography */

p {
    font-size: 20px;
    color: #0a0a0a;
    margin: 1em 0;
    text-align: justify;
}

.text-small {
    font-size: 16px;
    padding: 0 2rem;
}

.narrow-text {
    width: 90%;
}

@media (min-width: 1024px) {

    p {
        font-size: 28px;
        margin: 1em 0;
        text-align: justify;
    }
}

.text-center {
    text-align: center;
}

.rubrik {
    font-family: Helvetica, sans-serif;
    text-transform: uppercase;
    letter-spacing: -1px;
    font-size: .95rem;
    margin:0;
}

/* Links */

a {
    color: #0a0a0a;
}

a:hover {
    color: rgb(200, 0, 105);
    cursor: pointer;
}

.menu li a {
    text-decoration: none;
}

main {
    background: linear-gradient(360deg, oklch(83.823% 0.07215 243.731 / 0.7) 0%, rgba(255, 255, 247, 0) 100%);
}


/* Header */

.header-img {
    z-index: -1;
    display: flex;
    flex-direction: column;
    width: 80%;
    height: calc(90vh - 70px);
    margin: 0 auto;
    position: relative;
    align-items: center;
    justify-content: center;
}

@media (min-width: 1024px) {

    .header-img {
        z-index: -1;
        display: flex;
        flex-direction: column;
        width: %;
        height: calc(100vh - 70px);
        margin: 0 auto;
        position: relative;
        align-items: center;
        justify-content: center;
    }
}

section {
    padding: 0;
}

@media (min-width: 1024px) {
    section {
        padding: 80px 0px 70px 0px;
    }
}

.wide {
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
}

.narrow {
    width: 86%;
    margin: 0 auto;
}

@media (min-width: 1024px) {
    .narrow {
        width: 45%;
        margin: 0 auto;
    }
}

.center {
    justify-content: center;
    display: flex;
}

.full-width {
    width: 100%;
    margin: 0 auto;
}

.container {
    padding: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    /*min-height: 100vh;*/
}

.grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-auto-rows: auto;
    gap: 20px;
    width: 90%;
}

@media (min-width: 1024px) {
    .grid {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-auto-rows: auto;
        width: 85%;
    }
}

.grid img {
    width: 100%;
    height: auto;
    object-fit: cover;
}

.item1 {
    grid-column: 1;
    grid-row: 1;
}

.item1 img {
    transform: rotate(-2deg);
}

.item2 {
    display: flex;
    grid-column: 1 / span 2;
    grid-row: 2;
    justify-content: center;
    margin-top: -75px;
    z-index: 100;
}

@media (max-width: 1024px) {
    .item2 img {
        transform: rotate(0);
        width: 75%;
    }
}

.item3 {
    grid-column: 2;
    grid-row: 1;
}

.item3 img {
    transform: rotate(6deg);
}

@media (min-width: 1024px) {

    .item2 {
        display: flex;
        grid-column: 2 / span 1;
        grid-row: 1;
        justify-content: center;
        margin-top: 0;
    }

    .item3 {
        grid-column: 3;
        grid-row: 1;
    }
}

.back-to-top {
    display: flex;
    flex: 1;
    justify-content: center;
}

#button {
    display: inline-block;
    text-align: center;
    position: fixed;
    bottom: 0;
    padding: 20px;
    font-size: 20px;
    transition: background-color .3s,
        opacity .5s, visibility .5s;
    opacity: 0;
    visibility: hidden;
    z-index: 1000;
}

#button:hover {
    cursor: pointer;
}

#button.show {
    opacity: 1;
    visibility: visible;
}


/* Navigation */

.spacing {
    height: 100px;
}

.spacing-s {
    margin: 0 auto 60px auto;
}

.spacing-m {
    margin: 0 auto 100px auto;
}

.spacing-l {
    margin: 0 auto 140px auto;
}

.signature {
    width: 65%;
    margin: 0 auto;
}

.header {
    font-size: 16px;
    height: 70px;
    position: sticky;
    top: 0;
    left: 0;
    width: 100%;
    justify-content: center;
    display: flex;
    color: #0a0a0a;
    z-index: 999;
    mix-blend-mode: exclusion;
}

.header li,
.header a {
    color: white;
}


@media (min-width: 1024px) {
    .header {
        font-size: 20px;
        height: 140px;
        position: sticky;
        top: 0;
        left: 0;
        width: 100%;
        justify-content: center;
        display: flex;
        color: #0a0a0a;
    }
}

.menu {
    display: inline-flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 20px;
    padding: 10px 16px;
}

/* osa */

.responsive-iframe {
    width: 100vw;
    height: 100vh;
    margin: 3rem 0;
}

.wedding-gallery {
    column-count: 2;
    column-gap: 40px;
    width: 90%;
}

@media (min-width: 1024px) {
    .wedding-gallery {
        column-count: 3;
        width: 85%;
    }
}



.wg-item {
    break-inside: avoid;
    margin-bottom: 40px;
    position: relative;
}

.wg-item img {
    width: 100%;
    height: auto;
    display: block;
    object-fit: cover;
}

/* polaroid */

.wg-rotate-left {
    transform: rotate(-2deg);
}

.wg-rotate-right {
    transform: rotate(2.5deg);
}

.wg-rotate-none {
    transform: rotate(0.5deg);
}

.wg-caption {
  margin-top: 6px;
  font-size: 14px;
  opacity: 0.7;
  text-align: center;
  font-family: Helvetica, sans-serif;
}

/* mobil / desktop */
@media (min-width: 1024px) {
  .wg-caption {
    font-size: 15px;
  }
}

