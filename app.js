const menu = [
  {
    id: 1,
    title: "Güllaç",
    category: "Milk",
    price: "$6.99",
    img:
      "https://cdn.yemek.com/mnresize/940/940/uploads/2014/06/gullac-ytk-site.jpg",
    desc: `Güllaç is made with corn strach, rose water, milk and sugar.`,
  },
  {
    id: 2,
    title: "Tiramisu",
    category: "Cheese",
    price: "$5.99",
    img:
      "https://assets.tmecosys.com/image/upload/t_web767x639/img/recipe/ras/Assets/6BE1C69C-69FB-4957-96EA-D76159076661/Derivates/BA406212-38AE-4EA0-B4D5-591514C21C2D.jpg",
    desc: `Tiramisu is made with mainly mascarpone cheese and chocolate and with another ingredients. `,
  },
  {
    id: 3,
    title: "Apple Pie",
    category: "Pastry",
    price: "$4.99",
    img:
      "https://www.southernliving.com/thmb/bbDY1d_ySIrCFcq8WNBkR-3x6pU=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/2589601_Mailb_Mailbox_Apple_Pie_003-da802ff7a8984b2fa9aa0535997ab246.jpg",
    desc: `Just apple and dough.`,
  },
  {
    id: 4,
    title: "Soğuk Baklava",
    category: "Milk",
    price: "$11.99",
    img:
      "https://www.celebiogullari.com.tr/UserFiles/Image/images/soguk-baklava-hakkinda-bilmeniz-gerekenler.jpg",
    desc: `Baklava but with delicious cold milk and chocolate ☻. `,
  },
  {
    id: 5,
    title: "Tres Leches",
    category: "Milk",
    price: "$4.99",
    img:
      "https://www.piesandtacos.com/wp-content/uploads/2023/08/Tres-Leches-Cake-8-scaled.jpg",
    desc: `A dessert that have 3 kinds of milk and other ingredients. `,
  },
  {
    id: 6,
    title: "Sütlaç",
    category: "Milk",
    price: "$5.99",
    img:
      "https://cdn.yemek.com/mnresize/940/940/uploads/2015/03/ytk-firin-sutlac-site.jpg",
    desc: `Rice, milk and a pinch of sugar.`,
  },
  {
    id: 7,
    title: "Cheesecake",
    category: "Cheese",
    price: "$4.99",
    img:
      "https://d2lswn7b0fl4u2.cloudfront.net/photos/pg-a-slice-of-cheesecake-with-berries-on-top-1608056709.jpg",
    desc: `Combination of cheese, egg and sugar. `,
  },
  {
    id: 8,
    title: "Chocolate Brownie",
    category: "Pastry",
    price: "$5.99",
    img:
      "https://www.recipetineats.com/wp-content/uploads/2020/03/Brownies_0-SQ.jpg",
    desc: `Fudgy cake with nuts, chocolate chips or other ingredients.`,
  },
  {
    id: 9,
    title: "Muffin",
    category: "Pastry",
    price: "$3.99",
    img:
      "https://www.ardaninmutfagi.com/wp-content/uploads/2019/04/bol-cikolatali-muffin-di.jpg",
    desc: `Bread but with chocolate chips, lemon, or other ingredients.`,
  },
];

const section = document.querySelector(".section-center");
const btnContainer = document.querySelector(".btn-container");

const category = menu.reduce((values, item) => {
  if (!values.includes(item.category)) {
    values.push(item.category);
  }
  return values;
}, ["All"]
);

const categoryList = () => {
  const catBtn = category
  .map((category) => {
    return `<button class="btn btn-outline-dark btn-item" data-id=${category}>${category}</button>`;
  })
  .join("");

  btnContainer.innerHTML = catBtn;
  const filterBtns = document.querySelectorAll(".btn-item");

  filterBtns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const category = e.currentTarget.dataset.id;
      console.log(category)
      const menuCategory = menu.filter((menuItem) => {
        if (menuItem.category === category) {
          return menuItem;
        }
      });
      if ( category === "All") {
        menuList(menu)
      } else {
        menuList(menuCategory);
      }
    })
  })
}

const menuList = (menuItems) => {
  let displayMenu = menuItems.map((item) => {
    return `<div class="menu-items col-lg-6 col-sm-12">
            <img
              src=${item.img}
              alt=${item.title}
              class="photo"
            />
            <div class="menu-info">
              <div class="menu-title">
                <h4>${item.title}</h4>
                <h4 class="price">${item.price}</h4>
              </div>
              <div class="menu-text">
                ${item.desc}
              </div>
            </div>
          </div>
    `;
  });
  displayMenu = displayMenu.join("");
  section.innerHTML = displayMenu;
};

menuList(menu);
categoryList();