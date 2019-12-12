<template>
  <div id='sing-le-blog'>
    <h1>{{blog.title}}</h1>
    <article>{{blog.body}}</article>
  </div>
</template>

<script>
export default {
  name:'SingLeBlog',
  data(){
    return {
      id:this.$route.params.id,
      blog:{},
    }
  },
  created(){

    this.$axios.get('http://jsonplaceholder.typicode.com/posts/' + this.id).then(res =>{
      this.blog = res.data;
      console.log(this.blog)
    })
  }
}
</script>

<style>
#sing-le-blog {
  max-width:960px;
  margin:0 auto;
  padding:20px;
  background:#eee;
  border:1px dotted #aaa;
} 
</style>