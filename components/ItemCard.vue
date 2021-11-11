<template>
  <div style="width: 300px" class="card-body">
    <img style="width: 300px" :src="item.photo" />
    <h2>{{ item.name }}</h2>
    <p>{{ item.description }}</p>
    <h4>{{ item.price.toLocaleString() }}</h4>
    <button @click="remove(item)">Удалить</button>
  </div>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
      default: () => {},
    },
  },
  methods: {
    remove(item) {
      return this.$store.commit("remove", item);
    },
  },
};
</script>

<style>
</style>