<template>
  <div>
    <button @click="showEditor = !showEditor" v-if="!showEditor">Add new blog</button>
    <BlogEditor v-else @addNewItem="addItem"/>
    <Blogs :error="error" :isLoading="isLoading" :blogs="blogs" @deleteBlog="deleteItem" />
  </div>
</template>
<script setup>
import BlogEditor from "@/components/BlogEditor.vue";
import {useBlogs} from "@/composables/useBlogs.js";
import {ref} from "vue";
import Blogs from "@/components/Blogs.vue";

const {blogs, isLoading, error, addItem, deleteItem} = useBlogs()
const showEditor = ref(false);

</script>