// Navbar Component - Embedded for instant loading
// Artists list - add new artists here when you add their HTML file
const NAVBAR_ARTISTS = [
  { name: "Nathan Mickle", file: "nathan-mickle.html" },
  { name: "Bubba Irwin", file: "bubba-irwin.html" },
  { name: "Tex", file: "tex.html" },
  { name: "Brett", file: "brett.html" },
  { name: "Devyn", file: "devyn.html" },
  { name: "Don", file: "don.html" },
  { name: "Grace", file: "grace.html" },
  { name: "Johnny", file: "johnny.html" },
  { name: "Nate Brothers", file: "natebrothers.html" },
];

(function () {
  const isInArtistsDir = window.location.pathname.includes("/artists/");
  const pathPrefix = isInArtistsDir ? "../" : "./";
  const artistPathPrefix = isInArtistsDir ? "./" : "artists/";

  // Generate artists dropdown items
  const artistsHTML = NAVBAR_ARTISTS.map(
    (artist) =>
      `<a class="false fancy-dropdown-item" href="${artistPathPrefix}${artist.file}">${artist.name}</a>`
  ).join("\n                  ");

  // Navbar HTML - exact structure from original
  const navbarHTML = `<nav
  class="fancynavbar fancynavbar-expand-lg"
  data-zanim-lg='{"from":{"opacity":1,"x":70},"to":{"opacity":1,"x":0},"ease":"CubicBezier","duration":0.8,"delay":0.3}'
  data-zanim-xs='{"from":{"opacity":1,"y":-37},"to":{"opacity":1,"y":0},"ease":"CubicBezier","duration":0.8,"delay":0.3}'
  data-zanim-trigger="scroll"
  data-exclusive="true"
>
  <div class="fancynavbar-togglerbar">
    <a class="fancynavbar-brand" href="${pathPrefix}index.html"
      ><img
        class="fancynavbar-brand-img"
        src="${pathPrefix}assets/img/brandedlogo.png"
        alt=""
        width="30"
        height="30"
        data-zanim-lg='{"from":{"opacity":0,"x":45},"to":{"opacity":1,"x":0},"ease":"CubicBezier","duration":0.8,"delay":0.4}'
        data-zanim-trigger="scroll"
      />
    </a>
    <div class="fancynavbar-toggler">
      <svg
        class="fancynavbar-toggler-icon"
        viewBox="0 0 70 70"
        xmlns="http://www.w3.org/2000/svg"
        data-zanim-lg='{"from":{"opacity":0,"x":45},"to":{"opacity":1,"x":0},"ease":"CubicBezier","duration":0.8,"delay":0.5}'
        data-zanim-trigger="scroll"
      >
        <path
          id="path-top"
          d="M20,25c0,0,22,0,30,0c16,0,18.89,40.71-.15,21.75C38.7,35.65,19.9,16.8,19.9,16.8"
        ></path>
        <path id="path-middle" d="M20,32h30"></path>
        <path
          id="path-bottom"
          d="M19.9,46.98c0,0,18.8-18.85,29.95-29.95C68.89-1.92,66,38.78,50,38.78c-8,0-30,0-30,0"
        ></path>
      </svg>
    </div>
    <div
      class="fancynavbar-addon fancynavbar-addon-height"
      data-zanim-lg='{"from":{"opacity":1,"x":45},"to":{"opacity":1,"x":0},"ease":"CubicBezier","duration":0.8,"delay":0.4}'
      data-zanim-trigger="scroll"
    >
      <a
        class="fancynavbar-addon-item"
        href="https://www.instagram.com/brandedtattooco/?hl=en"
        ><span class="fab fa-instagram"></span></a
      ><a></a>
    </div>
  </div>
  <div class="fancynavbar-collapse">
    <ul class="fancynavbar-nav">
      <li class="fancynav-item">
        <a class="fancynav-link" href="${pathPrefix}store.html"
          ><span class="fancynav-link-content">Store</span></a
        >
      </li>
      <li class="fancynav-item fancy-dropdown">
        <a
          class="fancynav-link fancy-dropdown-toggle"
          href="JavaScript:void(0)"
          ><span class="fancynav-link-content">Artists/Booking</span></a
        >
        <div class="fancy-dropdown-menu">
          <div class="row pb-4 pt-3">
            <div class="col-auto">
                  ${artistsHTML}
            </div>
          </div>
        </div>
      </li>
      <li class="fancynav-item">
        <a class="fancynav-link" href="${pathPrefix}contact.html"
          ><span class="fancynav-link-content">Contact</span></a
        >
      </li>
      <li class="fancynav-item">
        <a class="fancynav-link" href="${pathPrefix}info.html"
          ><span class="fancynav-link-content">Info</span></a
        >
      </li>
    </ul>
  </div>
</nav>`;

  // Insert navbar immediately
  const container = document.getElementById("navbar-container");
  if (container) {
    container.innerHTML = navbarHTML;
    const navbar = container.querySelector("nav");
    if (navbar) {
      container.replaceWith(navbar);
    }
  }
})();
