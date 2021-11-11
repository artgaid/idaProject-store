<template>
  <div>
    <h3>Форма добавления</h3>
    <form id="form" @submit="checkForm">
      <div>
        <label for="name">Наименование товара <span>*</span> </label>
        <input
          type="text"
          name="name"
          id="name"
          v-model="name"
          placeholder="Введите наименование товара"
        />
        <p v-if="errors === 'name'">Поле является обязательным</p>
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
        <p v-if="errors === 'img'">Поле является обязательным</p>
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
        <p v-if="errors === 'price'">Поле является обязательным</p>
      </div>

      <p>
        <input type="submit" value="Submit" />
      </p>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      errors: null,
      name: null,
      description: null,
      img: null,
      price: null,
    };
  },
  methods: {
    checkForm: function (e) {
      if (this.name && this.age) return true;
      this.errors = [];
      if (!this.name) this.errors = "name";
      if (!this.price) this.errors = "price";
      if (!this.img) this.errors = "img";
      e.preventDefault();
    },
  },
};
</script>

<style>
</style>