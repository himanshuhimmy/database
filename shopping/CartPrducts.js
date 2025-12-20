let cart = {
  hiamnshu: {
    Linked_User_id: 1,
    products: {
      addedTocart: {
        smartphones: {
          LinkedToAllProducts: { id: 3, quantity: 2 },
          LinkedToAllProducts: { id: 1, quantity: 1 },
        },
        laptops: {
          LinkedToAllProducts: { id: 1, quantity: 1 },
        },
      },
      purchased: {
        laptops: {
          LinkedToAllProducts: { id: 2, quantity: 1 },
        },
        smartphones: {
          LinkedToAllProducts: { id: 1, quantity: 1 },
        },
      },
      productconflict: {
        linkedT0Conflict: 1,
      },
    },
  },
  pratik: {
    Linked_User_id: 2,
    products: {
      addedTocart: {
        smartphones: {
          LinkedToAllProducts: { id: 3, quantity: 2 },
          LinkedToAllProducts: { id: 2, quantity: 1 },
        },
        laptops: {
          LinkedToAllProducts: { id: 3, quantity: 3 },
        },
      },
      purchased: {
        laptops: {
          LinkedToAllProducts: { id: 1, quantity: 2 },
        },
      },
      productconflict: {
        linkedT0Conflict: 2,
      },
    },
  },
  ramesh: {
    Linked_User_id: 3,
    products: {
      addedTocart: {
        Earphones: {
          LinkedToAllProducts: { id: 3, quantity: 2 },
          LinkedToAllProducts: { id: 2, quantity: 1 },
        },
        laptops: {
          LinkedToAllProducts: { id: 3, quantity: 3 },
        },
      },
      purchased: {
        Earphones: {
          LinkedToAllProducts: { id: 1, quantity: 2 },
        },
      },
      productconflict: {
        linkedT0Conflict: 3,
      },
    },
  },
};
