<template>
    <div style="width: 300px" class="card-body">
        <img style="width: 300px" :src="item.photo" />
        <h2> {{ item.name }} </h2>
        <p> {{ item.description }} </p>
        <h4> {{ item.price }} </h4>
    </div>
</template>

<script>
export default {
    props: {
        item: {
            type: Object,
            default: () => {}
        }
    }
}
</script>

<style>

</style>