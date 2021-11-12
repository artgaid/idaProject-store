<template>
  <div class="container">
    <form @submit="checkForm">
      <div>
        <label for="name" class="text"
          >Наименование товара <span class="error">*</span>
        </label>
        <br />
        <input
          type="text"
          name="name"
          id="name"
          v-model="name"
          placeholder="Введите наименование товара"
        />
        <p v-if="!name && errors" class="error">Поле является обязательным</p>
      </div>

      <div>
        <label for="description" class="text">Описание товара</label>
        <br />
        <textarea
          type="text"
          name="description"
          id="description"
          v-model="description"
          placeholder="Введите описание товара"
        ></textarea>
      </div>

      <div>
        <label for="img" class="text"
          >Ссылка на изображение товара <span class="error">*</span></label
        >
        <br />
        <input
          type="text"
          name="img"
          id="img"
          v-model="img"
          placeholder="Введите ссылку"
        />
        <p v-if="!img && errors" class="error">Поле является обязательным</p>
      </div>

      <div>
        <label for="price" class="text"
          >Цена товара <span class="error">*</span></label
        >
        <br />
        <input
          type="number"
          name="price"
          id="price"
          v-model.number="price"
          min="0"
          placeholder="Введите цену"
        />
        <p v-if="!price && errors" class="error">Поле является обязательным</p>
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

<style lang="scss" scoped>
input,
textarea {
  margin: 5px 0 15px;
  padding: 10px 16px;
  border: 0px;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  font-size: 12px;
  line-height: 15px;
  width: 90%;
  outline: none;
}
::placeholder {
  color: $grey;
}

button {
  margin-top: 10px;
  padding: 10px 16px;
  border-radius: 10px;
  border: 0px;
  width: 100%;
  font-size: 12px;
  line-height: 15px;
  background-color: $green;
  color: $white;
  outline: none;
}

button[disabled="disabled"] {
  color: $grey;
  background-color: #eeeeee;
}

.text {
  font-size: 10px;
  line-height: 13px;
}
.error {
  margin: 4px 0;
  color: $red;
  font-size: 8px;
  line-height: 10px;
}
.container {
  padding: 20px;
  background-color: $white;
  box-shadow: 0px 20px 30px rgba(0, 0, 0, 0.04),
    0px 6px 10px rgba(0, 0, 0, 0.02);
  border-radius: 4px;
}
</style>