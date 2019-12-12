<template>
  <div id="app">
    <h2>哈哈哈哈哈哈</h2>
     <blog-header></blog-header>
    <keep-alive><router-view></router-view></keep-alive>
  </div>
</template>

<script>
import AddBlog from './components/AddBlog'
import ShowBlogs from './components/ShowBlogs'
import BlogHeader from './components/BlogHeader'

export default {
  name: 'app',
  components: {
    AddBlog,
    ShowBlogs,
    BlogHeader,
  }
}
</script>

<style scoped>
 
</style>
