<template>
  <div>
    <h3>Добавление товара</h3>
    <form @submit="checkForm">
      <div>
        <label for="name">Наименование товара <span>*</span> </label>
        <input
          type="text"
          name="name"
          id="name"
          v-model="name"
          placeholder="Введите наименование товара"
        />
        <p v-if="!name && errors">Поле является обязательным</p>
      </div>

      <p>
        <label for="description">Описание товара</label>
        <textarea
          type="text"
          name="description"
          id="description"
          v-model="description"
          placeholder="Введите описание товара"
        ></textarea>
      </p>

      <div>
        <label for="img">Ссылка на изображение товара <span>*</span></label>
        <input
          type="text"
          name="img"
          id="img"
          v-model="img"
          placeholder="Введите ссылку"
        />
        <p v-if="!img && errors">Поле является обязательным</p>
      </div>

      <div>
        <label for="price">Цена товара <span>*</span></label>
        <input
          type="number"
          name="price"
          id="price"
          v-model.number="price"
          min="0"
          placeholder="Введите цену"
        />
        <p v-if="!price && errors">Поле является обязательным</p>
      </div>

      <button
        v-bind:disabled="getErrors || errors"
        type="submit"
        value="Submit"
        @click="addItem()"
      >
        Добавить товар
      </button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      errors: false,
      name: null,
      description: null,
      img: null,
      price: null,
    };
  },
  computed: {
    getErrors: function (e) {
      if (this.name && this.price && this.img) {
        this.errors = false;
      } else if (this.name || this.price || this.img) {
        return false;
      } else return true;
    },
  },
  methods: {
    checkForm: function (e) {
      e.preventDefault();
      if (this.name && this.price) return true;
      if (!this.name || !this.price || !this.img) this.errors = true;
    },
    addItem() {
      const newItem = {
        name: this.name,
        description: this.description,
        photo: this.img,
        price: this.price,
      };
      if (this.name && this.price && this.img) {
        this.$store.commit("add", newItem);
      }
    },
  },
};
</script>

<style>
</style>