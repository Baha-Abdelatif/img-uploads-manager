const api_url = "http://localhost:1337";
const add_offer_form = document.forms.add_offer_form;
add_offer_form.addEventListener("submit", add_offer);

const add_picture_form = add_offer_form.add_offer_picture;
add_picture_form.addEventListener("change", add_picture);
let picture_to_add = null;

function add_offer(e) {
  e.preventDefault();
  const Title = add_offer_form.add_offer_title.value.trim();
  const Description = add_offer_form.add_offer_description.value.trim();
  const Category = add_offer_form.add_offer_category.value;
  const Picture = picture_to_add;
  // console.log("Title: ", Title, "Category: ", Category, "Description: ", Description);

  const payload = {
    Title,
    Description,
    Category
  }

  fetch(`${api_url}/offers`, {
    method: "POST",
    headers: {
      "content-type": "application/json"
    },
    body: JSON.stringify(payload)
  })
    .then(res => res.json())
    .then(created_offer => {
      // console.log("Created Offer: ", created_offer)
      const form_datas = new FormData();
      form_datas.append("files", Picture);
      form_datas.append("ref", "Offer");
      form_datas.append("refId", created_offer.id);
      form_datas.append("field", "Picture")

      fetch(`${api_url}/upload`, {
        method: "POST",
        body: form_datas
      })
        .then(res => {
          // console.log("img upload res -> ", res)
        })
        .catch(err => {
          console.error(err)
        })
    })
    .catch(err => {
      console.error(err)
    })
}

function add_picture() {
  if (!this.files) {
    return
  }
  // console.log("Image: ", this.files[0])
  picture_to_add = this.files[0];
}