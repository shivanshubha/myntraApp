const cont = document.getElementById("container");

// let fetchapi = async (str) => {
//   try {
//     let apidate = await fetch("https://fakestoreapi.com/products");
//     let products = await apidate.json();
//     displayProduct(products);
//     console.log(products);
//   } catch (error) {
//     console.error(error);
//   }
// };

let fetchapi = async (str) => {
  try {
    let ram = await fetch("https://fakestoreapi.com/products");
    let products = await ram.json();
    displayProduct(products);
    console.log(products);
  } catch (error) {
    console.error(error);
  }
};

let cartItems = [];

function displayProduct(products) {
  products.forEach((element) => {
    let card = document.createElement("div");
    card.setAttribute("class", "card");

    let img = document.createElement("img");
    img.src = element.image;

    let title = document.createElement("p");
    title.setAttribute("class", "pone");
    title.innerHTML = element.title;

    let price = document.createElement("h4");
    price.setAttribute("class", "priceone");
    price.innerHTML = element.price;

    // add to cart
    let cardBtn = document.createElement("button");

    cardBtn.setAttribute("class", "addbtn");

    cardBtn.innerHTML = "Add to cart";

    cardBtn.addEventListener("click", function () {
      let res = checkCartItems(element.id);
      if (res === true) {
        alert("Item already Exist in Cart");
        return;
      } else {
        cartItems.push(element);

        localStorage.setItem("cartItems", JSON.stringify(cartItems));
      }
    });

    card.append(img, title, price, cardBtn);
    cont.append(card);

    // let description = document.createElement("p");
    // description.setAttribute("class", "descriptionone");
    // description.innerHTML = element.description;

    card.addEventListener("click", () => {
      localStorage.setItem("product", JSON.stringify(element));
      window.location.href = "./details.html";
    });

    // card.append(img, title, price, cardBtn);

    // cont.append(card);
  });
}

function checkCartItems(id) {
  for (let i = 0; i < cartItems.length; i++) {
    if (cartItems[i].id === id) {
      return true;
    }
  }

  return false;
}

fetchapi();

//

// function displayProduct(products) {
// for (i = 0; i < products.length; i++) {
//   let card = document.createElement("div");
//   card.setAttribute("class", "card");

//   let title = document.createElement("p");
//   title.setAttribute("class", "pone");
//   let price = document.createElement("h4");
//   price.setAttribute("class", "priceone");
//   let description = document.createElement("p");
//   description.setAttribute("class", "descriptionone");
//   let image = document.createElement("img");
//   image.src = products[i].image;
//   // image.alt = products;

//   // image.innerHTML = products[i].image;
//   title.innerHTML = products[i].title;
//   price.innerHTML = `Rs. ${products[i].price}`;
//   description.innerHTML = products[i].description;

//   card.append(image, title, price, description);
//   cont.append(card);
// }

//   products.forEach((element) => {
//     let card = document.createElement("div");
//     card.setAttribute("class", "card");

//     let img = document.createElement("img");
//     img.src = element.image;

//     let name = document.createElement("h3");
//     name.innerHTML = element.title;

//     let price = document.createElement("h4");
//     price.innerHTML = element.price;

//     card.addEventListener("click", () => {
//       localStorage.setItem("product", JSON.stringify(element));
//       window.location.href = "/details.html";
//     });
//     card.append(img, name, price);
//     cont.append(card);
//   });
// }

function Redirecttologin() {
  window.location.href = "./loginredirect.html";
}

function RedirectSignup() {
  window.location.href = "./signupredirect.html";
}

function Redirecteverylogin() {
  window.location.href = "./index.html";
}
