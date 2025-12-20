// quantity
// ! -1 = not available
//  0 = out of stock
// ?  10  / >1   availabe

let quantity = {
  beverages: {
    coffee: {
      coldcoffie: {
        MenuLinked_id: 1,
        branch_id: {
          virar: { Linked_id: 1, quantity: 20 },
          vasai: { Linked_id: 2, quantity: 0 },
          thane: { Linked_id: 3, quantity: -1 },
          panvel: { Linked_id: 4, quantity: 15 },
        },
      },
      chocoletCoffie: {
        MenuLinked_id: 2,
        branch_id: {
          virar: { Linked_id: 1, quantity: 2 },
          vasai: { Linked_id: 2, quantity: -1 },
          thane: { Linked_id: 3, quantity: 0 },
          panvel: { Linked_id: 4, quantity: 11 },
        },
      },
      blackCoffie: {
        MenuLinked_id: 3,
        branch_id: {
          virar: { Linked_id: 1, quantity: 25 },
          vasai: { Linked_id: 2, quantity: 0 },
          thane: { Linked_id: 3, quantity: -1 },
          panvel: { Linked_id: 4, quantity: 30 },
        },
      },
    },
    tea: {
      masalaTea: {
        MenuLinked_id: 4,
        branch_id: {
          virar: { Linked_id: 1, quantity: 25 },
          vasai: { Linked_id: 2, quantity: 12 },
          thane: { Linked_id: 3, quantity: 10 },
          panvel: { Linked_id: 4, quantity: 11 },
        },
      },
      gingerTea: {
        MenuLinked_id: 5,
        branch_id: {
          virar: { Linked_id: 1, quantity: -1 },
          vasai: { Linked_id: 2, quantity: -1 },
          thane: { Linked_id: 3, quantity: -1 },
          panvel: { Linked_id: 4, quantity: 30 },
        },
      },
    },
  },

  snacks: {
    sandwich: {
      vegSandwich: {
        MenuLinked_id: 6,
        branch_id: {
          virar: { Linked_id: 1, quantity: 1 },
          vasai: { Linked_id: 2, quantity: 33 },
          thane: { Linked_id: 3, quantity: -1 },
          panvel: { Linked_id: 4, quantity: 30 },
        },
      },
      cheeseSandwich: {
        MenuLinked_id: 7,
        branch_id: {
          virar: { Linked_id: 1, quantity: -1 },
          vasai: { Linked_id: 2, quantity: 11 },
          thane: { Linked_id: 3, quantity: 14 },
          panvel: { Linked_id: 4, quantity: 30 },
        },
      },
    },
    fries: {
      Fries: {
        MenuLinked_id: 8,
        branch_id: {
          virar: { Linked_id: 1, quantity: -1 },
          vasai: { Linked_id: 2, quantity: 12 },
          thane: { Linked_id: 3, quantity: 14 },
          panvel: { Linked_id: 4, quantity: 11 },
        },
      },
      cheeseFries: {
        MenuLinked_id: 9,
        branch_id: {
          virar: { Linked_id: 1, quantity: 33 },
          vasai: { Linked_id: 2, quantity: -1 },
          thane: { Linked_id: 3, quantity: 14 },
          panvel: { Linked_id: 4, quantity: 22 },
        },
      },
    },
  },

  desserts: {
    cake: {
      chocolateCake: {
        MenuLinked_id: 10,
        branch_id: {
          virar: { Linked_id: 1, quantity: 15 },
          vasai: { Linked_id: 2, quantity: 12 },
          thane: { Linked_id: 3, quantity: -1 },
          panvel: { Linked_id: 4, quantity: 30 },
        },
      },
      vanillaCake: {
        MenuLinked_id: 11,
        branch_id: {
          virar: { Linked_id: 1, quantity: 46 },
          vasai: { Linked_id: 2, quantity: 11 },
          thane: { Linked_id: 3, quantity: -1 },
          panvel: { Linked_id: 4, quantity: 30 },
        },
      },
    },
    iceCream: {
      chocolateIceCream: {
        MenuLinked_id: 12,
        branch_id: {
          virar: { Linked_id: 1, quantity: 33 },
          vasai: { Linked_id: 2, quantity: -1 },
          thane: { Linked_id: 3, quantity: 14 },
          panvel: { Linked_id: 4, quantity: 22 },
        },
      },
      vanillaIceCream: {
        MenuLinked_id: 13,
        branch_id: {
          virar: { Linked_id: 1, quantity: 1 },
          vasai: { Linked_id: 2, quantity: 33 },
          thane: { Linked_id: 3, quantity: -1 },
          panvel: { Linked_id: 4, quantity: 30 },
        },
      },
    },
  },
};
