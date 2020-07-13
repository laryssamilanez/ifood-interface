<template>
    <div>
        <strong>Restaurantes</strong>
        <div class="restaurants-grid">
            <restaurant-card v-for="res in restaurants" :key="res.name" :restaurant="res"></restaurant-card>
        </div>
    </div>
</template>

<script>
import RestaurantCard from './RestaurantCard'

export default {
    name: "RestaurantsList",
    components: {
        RestaurantCard
    },
    props: ["restaurants"]
}
</script>

<style scoped>
.restaurants-grid {
    margin-top: 20px;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
}
</style>
