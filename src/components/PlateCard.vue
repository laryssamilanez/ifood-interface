<template>
    <div class="card row">
        <div class="card-infos column">
            <strong>{{plate.name}}</strong>
            <p class="plate-description">{{description}}</p>
            <p class="price">R$ {{plate.price}}</p>
        </div>
        <div class="photo" :style="`background-image: url(${plate.photo})`"></div>
    </div>
</template>

<script>
export default {
    mane: "PlateCard",
    props: ['plate'],
    computed: {
        description() {
            return this.plate.description.slice(0, 80) + '...'
        }
    }
}
</script>

<style scoped>
.photo {
    margin-left: auto;
}
.plate-name {
    margin-bottom: 10px;
    font-size: 1.2em;
}
.plate-description {
    color: var(--color-gray-2);
}
.price {
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