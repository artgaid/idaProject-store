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
    };
  },
  computed: {
    sortItems() {
      if (this.sort === "min") this.$store.commit("sortMin");
      if (this.sort === "max") this.$store.commit("sortMax");
      if (this.sort === "name") this.$store.commit("sortName");
      return this.items;
    },
  },
  mounted() {},
};
</script>

