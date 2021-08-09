const add_offer_form = document.forms.add_offer_form;
add_offer_form.addEventListener("submit", add_offer);

const add_picture_form = add_offer_form.add_offer_picture;
add_picture_form.addEventListener("change", add_picture);

function add_offer(e) {
  e.preventDefault();
  const Title = add_offer_form.add_offer_title.value.trim();
  const Description = add_offer_form.add_offer_description.value.trim();
  const Category = add_offer_form.add_offer_category.value;
  console.log("Title: ", Title, "Category: ", Category, "Description: ", Description);

}

function add_picture() {
  console.log("Image: ", this.files[0])
}