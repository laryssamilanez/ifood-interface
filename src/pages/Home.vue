<template>
    <div class="container column home">
        <img class="banner" src="images/ifood-banner.png" alt="ifood banner">
        <categories @chosecategory="filterRestaurants"></categories>
        <restaurant-list :restaurants= "restaurants"></restaurant-list>
    </div>
</template>

<script>
import Categories from '../components/Categories'
import RestaurantList from '../components/RestaurantList'
import api from '../api'

export default {
    name: "Home",
    components: {
        Categories,
        RestaurantList
    },
    data() {
        return {
            restaurants: [],
            restaurantsLoded: []
        };
    },
    methods: {
        filterRestaurants(categoryName) {
            this.restaurants = this.restaurantsLoded.filter(res => res.category == categoryName);
        },
        async getAllRestaurants() {
            const response = await api.get('/restaurants');
            this.restaurantsLoded = response.data;
            this.restaurants = response.data;

        }
    },
    created() {
        this.getAllRestaurants();
    }
}
</script>

<style scoped>
.banner {
    width: 100%;
    height: 250px;
}
.home > * {
    margin-bottom: 50px;
}
</style>