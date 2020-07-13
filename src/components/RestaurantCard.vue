<template>
    <div class="card row" @click="navigateToDetails">
        <div class="photo" :style="`background-image: url(${restaurant.photo})`"></div>
        <div class="spacer"></div>
        <div class="card-infos column">
            <strong>{{restaurant.name}}</strong>
            <div class="row">
                <img src="@/assets/icons/star.svg" alt="avaliação" class="rating-icon" />
                <p class="rating">{{restaurant.rating}}</p>
                <p>• {{restaurant.category}} • {{restaurant.distance}}km</p>
            </div>
            <div class="row">
                <p>{{restaurant.deliveryTime}} •</p>
                <p v-if="restaurant.deliveryPrice">{{'R$ ' + restaurant.deliveryPrice}}</p>
                <p v-else class="free-delivery">Entrega grátis</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "RestaurantCard",
    props: ["restaurant"],
    methods: {
        navigateToDetails() {
            this.$router.push({
                name: "details", 
                params: {
                    restaurant: this.restaurant
                }
            });
        }
    }
}
</script>

<style scoped>
.rating {
    color: var(--color-yellow);
}
.rating-icon {
    height: 13px;
    width: 13px;
    margin: auto 3px;
}
.free-delivery {
    color: var(--color-green);
}
* {
    --card-height: 120px;
}
.photo {
    background-size: cover;
    width: calc(var(--card-height) * 0.8);
    height: calc(var(--card-height) * 0.8);
    border-radius: 4px;
}
.card {
    width: 100%;
    max-width: 500px;
    height: var(--card-height);
    padding: calc(var(--card-height) * 0.1);
    cursor: pointer;
    border: 1px solid #dcdcdc;
    border-radius: 4px;
    align-items: center;
}
.spacer {
    width: 1px;
    height: 100%;
    margin: 0 20px;
    background-color: var(--color-gray-lighter);
}
.card-infos {
    height: 100%;
    justify-content: space-between;
    max-width: calc(100% - 10px - var(--card-height) * 0.8);
}
</style>>