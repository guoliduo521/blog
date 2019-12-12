<template>
  <div id='show-blogs' v-theme:column="'narrow'">
    <h1>博客总览</h1>
    <input type="text" placeholder="搜索" v-model="search">
    <div class='single-blog' v-for='blog in filterBlogs'>
     <router-link :to="'/blog/' + blog.id"><h2 v-rainbow >{{blog.title | to-uppercase }}</h2></router-link> 
      <article>{{blog.body | snippet}}</article>
    </div>
  </div>
</template>

<script>
export default {
  name:'ShowBlogs',
  data(){
    return {
      blogs:[],
      search:"",
    }
  },
  computed:{
    filterBlogs(){
      return this.blogs.filter(blog =>{
        return blog.title.match(this.search)
      })
    },
  },
  filters:{
    "to-uppercase" : function(value) {
      return value.toUpperCase();
    }
    //es6方法
    // toUppercase(value){
    //   return value.toUpperCase();
    // }
  },
  // directives:{
  //   'rainbow' : {
  //     bind(el,binding,vnode){
  //        el.style.color = "#" + Math.random().toString(16).slice(2,8);
  //     }
  //   }
  // }

  created(){
    this.$axios.get('http://jsonplaceholder.typicode.com/posts').then(res =>{
      this.blogs = res.data.slice(0,10)
      console.log(this.blogs)
    })

  },

}
</script>

<style>
#show-blogs{
  max-width:800px;
  margin:0 auto;
}

.single-blog {
  padding:20px;
  margin:20px 0 ;
  box-sizing:border-box;
  background:#eee;
  border:1px dotted #aaa;
}

#show-blog a {
  color:#444;
  text-decoration: none;

}
input[type='text'] {
  padding:8px;
  width:100%;
  box-sizing: border-box;
  
}


</style>