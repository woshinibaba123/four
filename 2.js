

var vm=new Vue({
    el:"#div",
    data:{
        msg:""
    },
    methods:{
        add:function (a) {
            var  me = this
            var value = a.target.textContent
            me.msg += value;
            var shu=document.getElementsByTagName("input")[0].value
            if(value=='+'){
           
            }

        }
    },


})