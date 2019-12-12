<template>
  <div id="add-blog">
   <h2>添加博客</h2>
   <form action="" v-if='!submmited'>
     <label for="">博客标题</label>
     <input type="text" v-model='blog.title' required>
     <label for="">博客内容</label>
     <textarea name="" id="" cols="30" rows="10" v-model='blog.content'></textarea>
     <div id='checkboxes'>
       <label for="">Vue.js</label>
       <input type="checkbox" value='Vue.js' v-model='blog.categories'>
       <label for="">Node.js</label>
       <input type="checkbox" value='Node.js' v-model='blog.categories'>
       <label for="">React.js</label>
       <input type="checkbox" value='React.js' v-model='blog.categories'>
       <label for="">Angular.js</label>
       <input type="checkbox" value='Angular.js' v-model='blog.categories'>
     </div>
     <label for="">作者：</label>
     <select name="" id="" v-model='blog.author'>
       <option value="" v-for='(author,index) in authors' :key='index'>
         {{author}}
       </option>
     </select>

     <button @click.prevent='postClick'>添加博客</button>
   </form>
   
   <div v-if='submmited'>
     <h3>您的博客添加成功</h3>
   </div>


   <div id='preview'>
     <h3>博客总览</h3>
     <p>博客标题：{{blog.title}}</p>
     <p>博客内容:</p>
     <p>{{blog.content}}</p>
     <p>博客分类:</p>
     <ul>
       <li v-for='item in blog.categories'>{{item}}</li>
     </ul>
     <p>作者：{{blog.author}}</p>
   </div>

  </div>
</template>

<script>
//http://jsonplaceholder.typicode.com/posts
export default {
  name: 'AddBlog',
  data(){
   return {
     blog:{
       title:'',
       content:'',
       categories:[],
       author:'',
     },
     authors:['hehie','xixi','haha'],
     submmited:false,
   }
  },

  methods:{
    postClick(){
    this.$axios.post('http://jsonplaceholder.typicode.com/posts',{
      title:this.blog.title,
      body:this.blog.content,
      userId:1,
    }).then(res =>{
      console.log(res)
      this.submmited = true;
    })
    }
  },
 
}
</script>


<style scoped>
#add-blog *{
  box-sizing:border-box;
}

#add-blog {
  margin:20px auto;
  max-width: 600px;
  padding:20px;
}

label{
  display: block;
  margin:20px 0 10px;
}

input[type='text'],textarea,select {
  display:block;
  width:100%;
  padding:8px;

}

#checkboxes label{
  display:inline-block;
  margin-top:0;
}

#checkboxes input {
  display:inline-block;
  margin-right:10px;
}

button {
  display:block;
  margin:20px 0;
  background-color: crimson;
  color:#fff;
  border:0;
  padding:14px;
  border-radius: 4px;
  font-size: 18px;
  cursor:pointer;
}

#preview {
  padding:10px 20px;
  border:1px dotted #ccc;
  margin:30px 0;
}

h3 {
  margin-top:10px;
  
}

</style>
