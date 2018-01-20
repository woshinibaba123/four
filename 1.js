
const User = {
    template: `
    <div class="user">
     
      <router-view></router-view>
    </div>
  `
}
const Shou = { template: `
    <div>
        <div class="div1" ><h2>文章列表</h2></div>
        <div class="div2"><h2>视频组件</h2></div>
    </div>
`}
const yi = {  template: `
    <div>
        <div class="div1" ><h1>新闻条目</h1></div>
        <div class="div2"><h1>新闻条目</h1></div>
    </div>
`}
const er = {  template: `
    <div>
        <div class="div1" ><h1>视频组件</h1></div>
        <div class="div2"><h1>视频组件</h1></div>
    </div>
` }
const router = new VueRouter({
    routes: [
        { path: '/test/:id', component: User,
            children: [
                { path: '', component: Shou },
                { path: '新闻', component: yi },
                { path: '视频', component: er },
                { path: '视频', component: er },


            ]
        }
    ]
})
var vm=new Vue({
    el:"#div",
    router
})