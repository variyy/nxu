webpackJsonp([4],{"0JIE":function(t,s){},Quw4:function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var a=e("P9l9"),i={data:function(){return{form:{username:"",password:""},robot:["../static/img/lunbo1.jpg","../static/img/lunbo2.jpg","../static/img/lunbo3.jpg","../static/img/lunbo4.jpg"]}},methods:{login:function(){var t=this;""===this.form.username?this.$message.error("用户名不能为空"):""===this.form.password?this.$message.error("密码不能为空"):Object(a.j)(this.form).then(function(s){200===s.status&&(localStorage.setItem("token",s.data.token),t.$router.push({path:"/home",query:{name:t.form.username}}))}).catch(function(s){t.$alert("用户名或密码错误","登录失败",{confirmButtonText:"确定",callback:function(s){t.form.username="",t.form.password=""}}),console.log("登录失败 "+s)})},register:function(){this.$router.push("/register")}}},o={render:function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("el-container",[a("el-header",[a("div",{staticClass:"header_logo"},[a("img",{attrs:{src:e("wcQ9")}})])]),t._v(" "),a("el-main",[a("div",{staticClass:"con"},[a("div",{staticClass:"row mode01"},[a("div",{staticClass:"contentLf"},[a("el-carousel",{attrs:{height:"400px"}},t._l(t.robot,function(t,s){return a("el-carousel-item",{key:s},[a("img",{staticClass:"cobot",attrs:{src:t,title:t.split("/")[3].split(".")[0]}})])}),1)],1),t._v(" "),a("div",{staticClass:"contentRt"},[a("div",{staticClass:"form-signin",attrs:{id:"login",name:"login"}},[a("div",{staticClass:"signin-heading"},[a("a",[t._v("服务质量评价系统")])]),t._v(" "),a("el-form",{ref:"form",staticStyle:{"margin-top":"40px","margin-left":"25px",width:"300px"},attrs:{model:t.form,"label-width":"20%"}},[a("el-form-item",{attrs:{label:"用户名:"}},[a("el-input",{model:{value:t.form.username,callback:function(s){t.$set(t.form,"username",s)},expression:"form.username"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"密  码:"}},[a("el-input",{attrs:{type:"password"},model:{value:t.form.password,callback:function(s){t.$set(t.form,"password",s)},expression:"form.password"}})],1)],1),t._v(" "),a("div",{staticClass:"reg"},[a("el-button",{staticClass:"btn",attrs:{type:"primary"},on:{click:t.login}},[t._v("登录")]),t._v(" "),a("span",{on:{click:t.register}},[t._v("还没有账户？ 前往注册")])],1)],1)])]),t._v(" "),a("div",{staticClass:"row mode02"},[a("ul",{staticStyle:{"list-style-type":"none"}},[a("li",[a("div",{staticClass:"lk"},[a("h3",[t._v("多类型服务测试")]),t._v(" "),a("div",{staticClass:"lk_con"},[t._v("\n                支持对网页、流媒体、即时通讯等众多类型网络应用服务的质量测试，可以进行准确客观的服务质量评估\n              ")])])]),t._v(" "),a("li",[a("div",{staticClass:"lk"},[a("h3",[t._v("更细粒度评估")]),t._v(" "),a("div",{staticClass:"lk_con"},[t._v("\n                突破探测指标单一、模型少难题，可实现不同服务的针对性细粒度服务质量评估\n              ")])])]),t._v(" "),a("li",[a("div",{staticClass:"lk"},[a("h3",[t._v("多维度服务质量评价")]),t._v(" "),a("div",{staticClass:"lk_con"},[t._v("\n               突破网络指标与量化评估映射技术难题，可构建层次化、多等级服务质量评估模板\n              ")])])]),t._v(" "),a("li",[a("div",{staticClass:"lk"},[a("h3",[t._v("更灵活模板配置")]),t._v(" "),a("div",{staticClass:"lk_con"},[t._v("\n               突破用户需求多样性难题，可实现“服务-探测指标-评分模板”的多级映射评估灵活配置。\n              ")])])])])])])]),t._v(" "),a("el-footer",[t._v("技术支持：XXXXXXXXXXX   联系电话：xxxxxxxxx")])],1)},staticRenderFns:[]};var r=e("VU/8")(i,o,!1,function(t){e("0JIE")},"data-v-57989dae",null);s.default=r.exports},wcQ9:function(t,s,e){t.exports=e.p+"static/img/header_logo1.ee72dfb.png"}});
//# sourceMappingURL=4.3f448509971b08419d90.js.map