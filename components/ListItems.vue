<template>
  <div>
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
    <span>Выбрано: {{ sort }}</span>
    <div v-for="item in sortItems" :key="item.id">
      <div class="card">
        <ItemCard :item="item" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: this.$store.state.items,
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
  },
};
</script>

