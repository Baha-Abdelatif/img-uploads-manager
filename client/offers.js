const api_url = "http://localhost:1337";
const collection = "offers";

const offers_container = document.querySelector(".offers_container");

init();

function init() {
  getAllOffers();
}

function getAllOffers() {
  fetch(`${api_url}/${collection}`)
    .then(res => res.json())
    .then(offers => {
      offers.map(offer => {
        const offer_container = document.createElement("div");
        offer_container.classList.add("offer_container");
        offer_container.classList.add("container");

        const offer_picture = new Image();
        offer_picture.src = `${api_url}${offer.Picture.formats.thumbnail.url}`;
        offer_container.appendChild(offer_picture);

        const offer_infos = document.createElement("div");
        offer_infos.classList.add("offer_infos");
        offer_infos.classList.add("container");

        const offer_title = document.createElement("h3");
        offer_title.innerText = offer.Title;
        offer_infos.appendChild(offer_title);

        const offer_description = document.createElement("p");
        offer_description.innerText = offer.Description;
        offer_infos.appendChild(offer_description);

        const offer_category = document.createElement("p");
        offer_category.innerText = offer.Category;
        offer_infos.appendChild(offer_category);

        offer_container.appendChild(offer_infos);
        offers_container.appendChild(offer_container);

      })
    })
    .catch(err => {
      console.error(err)
    })
}