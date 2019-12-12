import Vue from 'vue'
import Router from 'vue-router'

const AddBlog = ()=> import ('components/AddBlog')
const ShowBlogs = ()=> import ('components/ShowBlogs')
const SingLeBlog = ()=> import ('components/SingLeBlog')
 
Vue.use(Router);

const router = new Router({
  routes:[
    {
      path:"/",
      redirect:"/showblogs"
    },
    {
      path:"/addblog",
      component:AddBlog,
    },
    {
      path:"/showblogs",
      component:ShowBlogs
    },
    {
      path:"/blog/:id",
      component:SingLeBlog
    }
  ],
  mode:'history'
})

export default router