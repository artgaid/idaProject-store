export const state = () => ({
  items: [
    {
      id: 0,
      name: "item 1",
      description:
        "Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк",
      photo:
        "https://www.zenit.photo/upload/resize_cache/iblock/092/670_558_1/fotoapparat_zenit_m_silver_zenitar_1_35_1.jpg",
      price: 10000,
    },
    {
      id: 1,
      name: "item 2",
      description:
        "Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк",
      photo:
        "https://www.zenit.photo/upload/resize_cache/iblock/092/670_558_1/fotoapparat_zenit_m_silver_zenitar_1_35_1.jpg",
      price: 12000,
    },
    {
      id: 2,
      name: "item 3",
      description:
        "Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк",
      photo:
        "https://www.zenit.photo/upload/resize_cache/iblock/092/670_558_1/fotoapparat_zenit_m_silver_zenitar_1_35_1.jpg",
      price: 11000,
    },
    {
      id: 3,
      name: "item 4",
      description:
        "Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк",
      photo:
        "https://www.zenit.photo/upload/resize_cache/iblock/092/670_558_1/fotoapparat_zenit_m_silver_zenitar_1_35_1.jpg",
      price: 14000,
    },
    {
      id: 4,
      name: "item 5",
      description:
        "Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк",
      photo:
        "https://www.zenit.photo/upload/resize_cache/iblock/092/670_558_1/fotoapparat_zenit_m_silver_zenitar_1_35_1.jpg",
      price: 16000,
    },
    {
      id: 5,
      name: "item 6",
      description:
        "Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк",
      photo:
        "https://www.zenit.photo/upload/resize_cache/iblock/092/670_558_1/fotoapparat_zenit_m_silver_zenitar_1_35_1.jpg",
      price: 15000,
    },
  ],
});

export const mutations = {
  add(state, payload) {
    return state.items.push({ id: state.items.length, ...payload });
  },
  remove(state, payload) {
    state.items.splice(state.items.indexOf(payload), 1);
  },
  sortMin(state) {
    state.items.sort(function (a, b) {
      return a.price - b.price;
    });
  },
  sortMax(state) {
    state.items.sort(function (a, b) {
      return b.price - a.price;
    });
  },
  sortName(state) {
    state.items.sort(function (a, b) {
      let nameA = a.name.toLowerCase(),
        nameB = b.name.toLowerCase();
      if (nameA < nameB) return -1;
      if (nameA > nameB) return 1;
      return 0;
    });
  },
};
