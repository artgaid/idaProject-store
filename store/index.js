export const state = () => ({
  items: [],
});

export const mutations = {
  getStore(state, payload) {
    state.items = payload;
    localStorage.setItem("localItems", JSON.stringify(state.items));
  },
  add(state, payload) {
    state.items.push({ id: state.items.length, ...payload });
    localStorage.setItem("localItems", JSON.stringify(state.items));
  },
  remove(state, payload) {
    state.items.splice(state.items.indexOf(payload), 1);
    localStorage.setItem("localItems", JSON.stringify(state.items));
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
