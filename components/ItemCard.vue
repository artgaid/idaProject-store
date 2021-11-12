<template>
  <div class="card">
    <button class="delete" @click="remove(item)"></button>
    <img class="card_img" :src="item.photo" />
    <div class="card_content">
      <p class="name">{{ item.name }}</p>
      <p class="description">{{ item.description }}</p>
      <p class="price">{{ item.price.toLocaleString() }} руб.</p>
    </div>
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

<style lang="scss" scoped>
.card {
  position: relative;
  width: 100%;
  background-color: $white;
  box-shadow: 0px 20px 30px rgba(0, 0, 0, 0.04),
    0px 6px 10px rgba(0, 0, 0, 0.02);
  border-radius: 4px;
}

.card:hover {
  cursor: pointer;
  .delete {
    display: block;
  }
}

.delete {
  display: none;
  position: absolute;
  border: 0px;
  width: 32px;
  height: 32px;
  background: url("/svg/delete.svg") no-repeat center $red;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  cursor: pointer;
  top: -10px;
  left: 310px;
}

.card_img {
  width: 100%;
  height: 200px;
}

.card_content {
  padding: 0 15px 1px;
  .name {
    font-weight: 600;
    font-size: 20px;
    line-height: 25px;
  }
  .description {
    font-size: 16px;
    line-height: 20px;
  }
  .price {
    font-weight: 600;
    font-size: 24px;
    line-height: 30px;
  }
}
</style>