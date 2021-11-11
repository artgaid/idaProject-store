<template>
    <div>
        <div v-for="item in items.items" :key="item.id">
            <div class="card" >
                <ItemCard :item="item" />
            </div>
        </div>
    </div>
</template>

<script>
import dataList from "../assets/items.json"
export default {
    data(){
        return {
            items: dataList
        }
    },
    mounted(){
    }
}
</script>

