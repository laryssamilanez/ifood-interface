<template>
    <div class="main">
        <div class="photo" :style="`background-image: url(${photoUrl})`"></div>
        <p class="category-text">{{name}}</p>
    </div>
</template>

<script>
export default {
    name: "Category",
    props: {
        photoUrl: String,
        name: String,
    }
}
</script>

<style scoped>
.main {
    cursor: pointer;
}
.category-text {
    text-align: center;
}
.photo {
    width: 100px;
    height: 100px;
    background-size: cover;
    border-radius: 50%;
}
</style>