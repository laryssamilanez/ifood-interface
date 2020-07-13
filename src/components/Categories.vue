<template>
    <div>
        <strong>Categorias</strong>
        <div class="options-list">
            <div v-for="category in categories" :key="category.name" @click="handleCategoryClick(category.name)">
                <category :photoUrl="category.photoUrl" :name="category.name"></category>
            </div>
        </div>
    </div>
</template>

<script>
import Category from './Category'
import categoriesJson from '@/assets/categories.json'

export default {
    name: "Categories",
    components: {
        Category
    },
    data() {
        return {
            categories: categoriesJson
        }
    },
    methods: {
        handleCategoryClick(categoryName) {
            this.$emit('chosecategory', categoryName)
        }
    }
}
</script>

<style>
.options-list{
    display: flex;
    justify-content: space-between;
    text-align: center;
    margin-top: 15px;
}
strong{
    font-size: 17px;
}
</style>