<template>
  <div>
    <div class="container" :class="{ display: preLoader }">
      <select v-model="sort">
        <option disabled value="">По умолчанию</option>
        <option
          v-for="option in sortOptions"
          :value="option.value"
          :key="option.value"
        >
          {{ option.text }}
        </option>
      </select>
      <div class="card-list">
        <div v-for="item in sortItems" :key="item.id">
          <ItemCard :item="item" />
        </div>
      </div>
    </div>
    <div :class="{ preloader: preLoader }">
      <div>
        <div>
          <div>
            <div>
              <div></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      preLoader: true,
      sort: "",
      sortOptions: [
        { text: "По цене min", value: "min" },
        { text: "По цене max", value: "max" },
        { text: "По наименованию", value: "name" },
      ],
      itemsDate: [
        {
          id: 0,
          name: "item 1",
          description:
            "Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк",
          photo: "/img/photo.png",
          price: 10000,
        },
        {
          id: 1,
          name: "item 2",
          description:
            "Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк",
          photo: "/img/photo.png",
          price: 12000,
        },
        {
          id: 2,
          name: "item 3",
          description:
            "Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк",
          photo: "/img/photo.png",
          price: 11000,
        },
        {
          id: 3,
          name: "item 4",
          description:
            "Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк",
          photo: "/img/photo.png",
          price: 14000,
        },
        {
          id: 4,
          name: "item 5",
          description:
            "Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк",
          photo: "/img/photo.png",
          price: 16000,
        },
        {
          id: 5,
          name: "item 6",
          description:
            "Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк",
          photo: "/img/photo.png",
          price: 15000,
        },
      ],
    };
  },
  computed: {
    sortItems() {
      if (this.sort === "min") this.$store.commit("sortMin");
      if (this.sort === "max") this.$store.commit("sortMax");
      if (this.sort === "name") this.$store.commit("sortName");
      return this.$store.state.items;
    },
  },
  mounted() {
    if (!process.client) return;
    const savedData = localStorage.getItem("localItems");

    // исскуственная задержка, для отоброжения preLoader.
    const timer = setTimeout(() => {
      if (savedData) {
        try {
          const savedDateObj = JSON.parse(savedData);
          this.$store.commit("getStore", savedDateObj);
        } catch (e) {
          console.log("Error : " + e);
        }
      } else {
        this.$store.commit("getStore", this.itemsDate);
      }
      this.preLoader = false;
      clearTimeout(timer);
    }, 3000);
  },
};
</script>

<style lang="scss" scoped>
.preloader div {
  width: 100px;
  height: 100px;
  margin: 10% auto;
  border: 14px inset #fff;
  border-radius: 100%;
  padding: 4px;
  animation: preloader-spin 15s linear infinite;
}
@keyframes preloader-spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

.display {
  display: none;
}

.container {
  width: 100%;
  height: 100%;
  text-align: right;
}
select {
  width: 15%;
  padding: 10px;
  margin-bottom: 20px;
  border: 0;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  color: $grey;
  font-size: 12px;
  appearance: none;
  background: url("/svg/arrow.svg") no-repeat right $white;
  background-position-x: calc(100% - 15px);
  outline: none;
}

.card-list {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 15px;
  justify-items: center;
  text-align: left;
}
</style>

