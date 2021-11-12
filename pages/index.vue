<template>
  <div class="default-layout">
    <div class="container-layout">
      <AddForm />
      <ListItems />
    </div>
  </div>
</template>

<style lang="scss">
.default-layout {
  background-color: #e5e5e5;
  background-size: 100%;
  display: flex;
  justify-content: center;
}
.container-layout {
  max-width: 1440px;
  display: grid;
  align-items: start;
  justify-content: center;
  align-content: start;
  grid-template-columns: 1fr 3fr;
  grid-gap: 15px;
  padding: 30px;
  background-color: #e5e5e5;
  background-size: 100%;
}

@media (min-width: 769px) and (max-width: 1024px) {
  .container-layout {
    width: 100%;
    grid-template-columns: 1fr 2fr;
  }
}
@media (min-width: 376px) and (max-width: 768px) {
  .container-layout {
    width: 100%;
    grid-template-columns: 1fr 1fr;
  }
}

@media (max-width: 375px) {
  .container-layout {
    width: 100%;
    grid-template-columns: 1fr;
  }
}
</style>>

