webpackJsonp([8],{"9XJL":function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=a("P9l9"),i=["http_code","connect_time","start_time","ssl_time","delay","total_time","dns_time","speed_download","lcp","fcp","packet_loss_rate","delay_jitter","redirect_time","web_size"],r={props:{username:{type:String,required:!0}},data:function(){return{form:{batchtest:!1,url:"",author:this.username,apptypes:"2",monitorpoints:"",fixed:[],testmodels:""},screenpic:"",checkAll:!1,isIndeterminate:!0,labelPosition:"top",disabled:!1,loading:!1,score:"/",level:"/",loadtime:"/",web_size:"/",create_date:"2023/03/27 15:28:59",tableData:[{url:"",create_date:"/",connect_time:"/",start_time:"/",ssl_time:"/",delay:"/",total_time:"/",dns_time:"/",speed_download:"/",lcp:"/",fcp:"/",packet_loss_rate:"/",delay_jitter:"/",onload_time:"/",redirectime:"/",pretransfertime:"/"}],radarChart:null,boxChart:null,scatterChart:null,option1:{title:{text:"指标得分：",left:"center"},grid:{left:"5%",top:"5%",right:"0",bottom:"0",containLabel:!0,width:"93%"},xAxis:{type:"value",splitLine:{show:!1},axisLabel:{show:!1},axisTick:{show:!1},axisLine:{show:!1}},yAxis:{data:["建立连接时间","首包时间","SSL握手时间","网络延时","传输总时间","LCP","缓冲时间","DNS解析时间","内容下载速率","传输丢包率","网络抖动","重定向时间"],type:"category",inverse:!0,axisTick:{show:!1},axisLine:{show:!1},axisLabel:{color:"black",fontSize:17}},series:[{name:"/100",type:"bar",barWidth:20,data:[0,0,0,0,0,0,0,0,0,0,0,0],label:{show:!0,distance:5,offset:[20,2],formatter:"{c}{a}",color:"#fff",fontSize:15},itemStyle:{color:"#48b137"},zlevel:1},{name:"进度条背景",type:"bar",barGap:"-100%",barWidth:20,data:[100,100,100,100,100,100,100,100,100,100,100,100],itemStyle:{color:"#d9b321"}}]},option2:{title:{text:"综合得分：",left:"left"},tooltip:{trigger:"axis"},legend:{left:"right",data:["网页带CDN"]},radar:[{indicator:[{text:"建立连接时间",max:100},{text:"首包时间",max:100},{text:"SSL握手时间",max:100},{text:"网络延时",max:100},{text:"传输总时间",max:100},{text:"最大内容绘制（LCP）",max:100},{text:"缓冲时间",max:100},{text:"DNS解析时间",max:100},{text:"内容下载速率",max:100},{text:"传输丢包率",max:100},{text:"网络抖动",max:100},{text:"重定向时间",max:100}],radius:"80%"}],series:[{type:"radar",tooltip:{trigger:"item"},itemStyle:{color:"#c12e34",borderColor:"#c12e34"},areaStyle:{color:"#c12e34"},data:[{value:[0,0,0,0,0,0,0,0,0,0,0,0],name:"网页带CDN"}]}]},option3:{xAxis:{type:"category",axisLabel:{interval:0,rotate:-20},data:["建立连接时间","首包时间","SSL握手时间","网络延时","传输总时间","最大内容绘制LCP","缓冲时间","DNS解析时间","内容下载速率","传输丢包率","网络抖动","重定向时间"]},yAxis:{type:"value"},series:[{itemStyle:{normal:{label:{show:!0,position:"top"}}},symbolSize:20,symbol:"circle",data:[100,100,100,100,100,100,100,100,100,100,100,100],type:"scatter"}],grid:{top:"10%",left:"5%",right:"7%",bottom:"14%"}}}},methods:{handleCheckAllChange:function(t){!0===this.isIndeterminate?(this.form.fixed=i,this.isIndeterminate=!1):(this.form.fixed=[],this.isIndeterminate=!0)},organizedata:function(t){this.screenpic=t.pic,this.tableData=[],this.tableData.push(t),this.score=t.score,this.level=t.level,this.loadtime=t.total_time,this.web_size=t.web_size;var e=[];e.push(t.connect_time_score,t.start_time_score,t.ssl_time_score,t.delay_score,t.total_time_score,t.lcp_score,t.fcp_score,t.dns_time_score,t.speed_download_score,t.packet_loss_rate_score,t.delay_jitter_score,t.redirect_time_score),this.option1.series.data=[],this.option1.series[0].data=e,this.option2.series[0].data[0].value=e,this.option3.series[0].data=e},onSubmit:function(){var t=this;console.log(this.form),this.loading=!0,document.getElementById("testcomplete").scrollTop=900,Object(s.n)(this.form).then(function(e){console.log(e.data),t.organizedata(e.data),t.drawCharts(),t.loading=!1}).catch(function(e){t.$alert("测试失败，请再测一次"),document.getElementById("testcomplete").scrollTop=0,console.log("操作失败"+e)})},ScoreColor:function(){var t="";switch(this.level){case"A":t="#2e7d3a";break;case"B":t="#4caf50";break;case"C":t="#FFEB38";break;case"D":t="#FFC107";break;case"E":t="#FF5722";break;case"F":t="#b71c1c";break;case"G":t="#448AFF";break;case"H":t="#536DFE";break;case"I":t="#7C4DFF";break;case"J":t="#9C27B0"}return t},drawCharts:function(){var t=this;this.boxChart=this.$echarts.init(this.$refs.chart1),this.radarChart=this.$echarts.init(this.$refs.chart2),this.scatterChart=this.$echarts.init(this.$refs.chart3),this.boxChart.setOption(this.option1),this.radarChart.setOption(this.option2),this.scatterChart.setOption(this.option3),window.addEventListener("resize",function(){t.boxChart.resize(),t.radarChart.resize(),t.scatterChart.resize()})},beforeDestroy:function(){var t=this;window.removeEventListener("resize",function(){t.boxChart.resize(),t.radarChart.resize(),t.scatterChart.resize()})},agreeChange:function(t){switch(t){case"A":this.disabled=!0,this.form.fixed=["http_code","connect_time","start_time","ssl_time","redirect_time","delay","total_time","dns_time","speed_download","lcp","fcp","packet_loss_rate","delay_jitter","web_size"];break;case"B":this.disabled=!0,this.form.fixed=["http_code","connect_time","start_time","ssl_time","redirect_time","delay","total_time","dns_time","speed_download","lcp","fcp","web_size"];break;case"C":this.disabled=!0,this.form.fixed=["http_code","connect_time","start_time","ssl_time","redirect_time","delay","total_time","dns_time","packet_loss_rate","delay_jitter","web_size"];break;case"D":this.disabled=!1,this.form.fixed=[]}}},mounted:function(){this.drawCharts(),window.onresize=function(){this.boxChart.resize(),this.radarChart.resize(),this.scatterChart.resize()}}},l={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"mode00"},[s("div",{staticClass:"mode01"},[s("div",{staticClass:"mode04"},[s("el-card",[s("h1",[s("i",{staticClass:"el-icon-s-promotion"}),t._v("\n          选择指标\n        ")]),t._v(" "),s("el-form",{attrs:{"label-position":t.labelPosition,model:t.form}},[s("el-form-item",{attrs:{required:"true"}},[s("span",{attrs:{slot:"label"},slot:"label"},[s("span",{staticClass:"title"},[t._v("测试链接")])]),t._v(" "),s("el-input",{attrs:{placeholder:"请输入URL"},model:{value:t.form.url,callback:function(e){t.$set(t.form,"url",e)},expression:"form.url"}})],1),t._v(" "),s("el-form-item",{attrs:{required:"true"}},[s("span",{attrs:{slot:"label"},slot:"label"},[s("span",{staticClass:"title"},[t._v("监测节点")])]),t._v(" "),s("el-radio-group",{model:{value:t.form.monitorpoints,callback:function(e){t.$set(t.form,"monitorpoints",e)},expression:"form.monitorpoints"}},[s("el-radio",{attrs:{label:"1"}},[t._v("监测节点1--美国")]),t._v(" "),s("el-radio",{attrs:{label:"2"}},[t._v("监测节点2--中国")]),t._v(" "),s("el-radio",{attrs:{label:"3"}},[t._v("监测节点3--日本")]),t._v(" "),s("el-radio",{attrs:{label:"4"}},[t._v("监测节点4--英国")])],1)],1),t._v(" "),s("el-form-item",{attrs:{required:"true"}},[s("span",{attrs:{slot:"label"},slot:"label"},[s("span",{staticClass:"title"},[t._v("测试模板")])]),t._v(" "),s("el-radio-group",{on:{change:t.agreeChange},model:{value:t.form.testmodels,callback:function(e){t.$set(t.form,"testmodels",e)},expression:"form.testmodels"}},[s("el-tooltip",{staticClass:"box-item",attrs:{effect:"dark",placement:"top-start"},scopedSlots:t._u([{key:"content",fn:function(){return[t._v("固定模板A"),s("br"),s("br"),t._v("建立连接时间（0.05），首包时间（0.20），SSL握手时间（0.08），重定向时间（0.21）"),s("br"),s("br"),t._v("网络延时（0.09），传输总时间（0.26），DNS解析时间（0.11）"),s("br"),s("br"),t._v("内容下载速率（0.14），最大内容绘制速率LCP（0.72），缓冲时间（0.14）"),s("br"),s("br"),t._v("传输丢包率（0.67），网络抖动（0.33），HTTP状态码")]},proxy:!0}])},[t._v(" "),s("el-radio",{attrs:{label:"A",border:""}},[t._v("固定模板A")])],1),t._v(" "),s("el-tooltip",{staticClass:"box-item",attrs:{effect:"dark",placement:"top-start"},scopedSlots:t._u([{key:"content",fn:function(){return[t._v("固定模板B"),s("br"),s("br"),t._v("建立连接时间（0.05），首包时间（0.20），SSL握手时间（0.08），重定向时间（0.21）"),s("br"),s("br"),t._v("网络延时（0.09），传输总时间（0.26），DNS解析时间（0.11）"),s("br"),s("br"),t._v("内容下载速率（0.14），最大内容绘制速率LCP（0.72），缓冲时间（0.14），HTTP状态码")]},proxy:!0}])},[t._v(" "),s("el-radio",{attrs:{label:"B",border:""}},[t._v("固定模板B")])],1),t._v(" "),s("el-tooltip",{staticClass:"box-item",attrs:{effect:"dark",placement:"top-start"},scopedSlots:t._u([{key:"content",fn:function(){return[t._v("固定模板C"),s("br"),s("br"),t._v("建立连接时间（0.05），首包时间（0.20），SSL握手时间（0.08），重定向时间（0.21）"),s("br"),s("br"),t._v("网络延时（0.09），传输总时间（0.26），DNS解析时间（0.11）"),s("br"),s("br"),t._v("传输丢包率（0.67），网络抖动（0.33），HTTP状态码")]},proxy:!0}])},[t._v(" "),s("el-radio",{attrs:{label:"C",border:""}},[t._v("固定模板C")])],1),t._v(" "),s("el-tooltip",{staticClass:"box-item",attrs:{effect:"dark",placement:"top-start"},scopedSlots:t._u([{key:"content",fn:function(){return[t._v("用户自由选择指标")]},proxy:!0}])},[t._v(" "),s("el-radio",{attrs:{label:"D",border:""}},[t._v("手动配置")])],1)],1)],1),t._v(" "),s("el-form-item",{attrs:{required:"true"}},[s("span",{attrs:{slot:"label"},slot:"label"},[s("span",{staticClass:"title"},[t._v("测试指标")])]),t._v(" "),s("el-checkbox",{attrs:{indeterminate:t.isIndeterminate},on:{change:t.handleCheckAllChange},model:{value:t.checkAll,callback:function(e){t.checkAll=e},expression:"checkAll"}},[t._v("全选")]),t._v(" "),s("el-checkbox-group",{attrs:{disabled:t.disabled},model:{value:t.form.fixed,callback:function(e){t.$set(t.form,"fixed",e)},expression:"form.fixed"}},[s("el-checkbox",{attrs:{label:"connect_time"}},[t._v("建立连接时间")]),t._v(" "),s("el-checkbox",{attrs:{label:"start_time"}},[t._v("首包时间")]),t._v(" "),s("el-checkbox",{attrs:{label:"ssl_time"}},[t._v("SSL握手时间")]),t._v(" "),s("el-checkbox",{attrs:{label:"delay"}},[t._v("网络延时")]),t._v(" "),s("el-checkbox",{attrs:{label:"total_time"}},[t._v("传输总时间")]),t._v(" "),s("el-checkbox",{attrs:{label:"dns_time"}},[t._v("DNS解析时间")]),t._v(" "),s("el-checkbox",{attrs:{label:"speed_download"}},[t._v("内容下载速率")]),t._v(" "),s("el-checkbox",{attrs:{label:"lcp"}},[t._v("最大内容绘制（LCP）")]),t._v(" "),s("el-checkbox",{attrs:{label:"fcp"}},[t._v("缓冲时间")]),t._v(" "),s("el-checkbox",{attrs:{label:"packet_loss_rate"}},[t._v("传输丢包率")]),t._v(" "),s("el-checkbox",{attrs:{label:"delay_jitter"}},[t._v("网络抖动")]),t._v(" "),s("el-checkbox",{attrs:{label:"http_code"}},[t._v("状态码")]),t._v(" "),s("el-checkbox",{attrs:{label:"redirect_time"}},[t._v("重定向时间")])],1)],1),t._v(" "),s("el-form-item",[s("el-button",{attrs:{type:"primary"},on:{click:t.onSubmit}},[t._v("提交")]),t._v(" "),s("el-button",{attrs:{type:"primary"}},[t._v("取消")])],1)],1)],1)],1)]),t._v(" "),s("div",{staticClass:"mode02"},[s("div",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],attrs:{"element-loading-text":"正在测试中，测试时间较长，请耐心等待","element-loading-spinner":"el-icon-loading","element-loading-background":"rgba(255, 255, 255, 0.9)"}},[s("div",{staticClass:"mode06"},[s("el-card",[s("div",{staticClass:"mode09"},[s("h1",[s("i",{staticClass:"el-icon-s-promotion"}),t._v("\n            测试结果\n          ")]),t._v(" "),s("div",{staticClass:"corn"},[s("h4",[t._v("测试时间："+t._s(t.tableData[0].create_date))]),t._v(" "),s("h4",[t._v("测试URL："+t._s(t.tableData[0].url))])]),t._v(" "),s("div",{staticClass:"resultposition"},[s("div",{staticClass:"webscreen"},[s("img",{attrs:{src:"data:image/png;base64,"+t.screenpic}})]),t._v(" "),s("div",{staticClass:"showscore"},[s("div",{staticClass:"contentUpDn"},[s("div",{staticClass:"spicyfish"},[s("div",{staticStyle:{"margin-top":"5px",height:"20%",color:"#2a3c64"}},[s("h3",[t._v("测试评级")])]),t._v(" "),s("div",{staticClass:"lemon"},[s("div",{staticClass:"score",style:"background:"+t.ScoreColor()},[s("h2",[t._v(t._s(t.level))])])])]),t._v(" "),s("div",{staticClass:"spicyfish"},[s("div",{staticStyle:{"margin-top":"5px",height:"20%",color:"#2a3c64"}},[s("h3",[t._v("测试得分")])]),t._v(" "),s("div",{staticClass:"lemon"},[s("div",{staticClass:"level",style:"background:"+t.ScoreColor()},[s("h2",[t._v(t._s(t.score))])])])])]),t._v(" "),s("div",{staticClass:"contentUpDn"},[s("div",{staticClass:"spicyfish"},[s("div",{staticStyle:{"margin-top":"5px",height:"20%",color:"#2a3c64"}},[s("h3",[t._v("传输总时间")])]),t._v(" "),s("div",{staticClass:"lemon"},[s("div",{staticClass:"blueberry"},[s("h2",{staticStyle:{fontFamily:"'Hiragino Sans GB'",color:"#2a3c64"}},[t._v(t._s(t.loadtime)+"ms")])])])]),t._v(" "),s("div",{staticClass:"spicyfish"},[s("div",{staticStyle:{"margin-top":"5px",height:"20%",color:"#2a3c64"}},[s("h3",[t._v("页面大小")])]),t._v(" "),s("div",{staticClass:"lemon"},[s("div",{staticClass:"blueberry"},[s("h2",{staticStyle:{fontFamily:"'Hiragino Sans GB'",color:"#2a3c64"}},[t._v(t._s(t.web_size)+"kb")])])])])])]),t._v(" "),s("div",{staticClass:"download"},["1"===t.form.monitorpoints?s("div",{staticStyle:{display:"flex","justify-content":"center"}},[s("img",{attrs:{src:a("NXxl")}})]):t._e(),t._v(" "),"2"===t.form.monitorpoints?s("div",{staticStyle:{display:"flex","justify-content":"center"}},[s("img",{attrs:{src:a("HStn")}})]):t._e(),t._v(" "),"3"===t.form.monitorpoints?s("div",{staticStyle:{display:"flex","justify-content":"center"}},[s("img",{attrs:{src:a("xQyo")}})]):t._e(),t._v(" "),"4"===t.form.monitorpoints?s("div",{staticStyle:{display:"flex","justify-content":"center"}},[s("img",{attrs:{src:a("1Zyw")}})]):t._e()])])])])],1),t._v(" "),s("div",{staticClass:"mode07"},[s("el-card",[s("h1",[s("i",{staticClass:"el-icon-s-promotion"}),t._v("\n            各项指标\n          ")]),t._v(" "),s("div",{staticClass:"tableresultposition"},[s("el-table",{staticClass:"datatable",staticStyle:{width:"100%"},attrs:{data:t.tableData,"header-cell-style":{"font-size":"18px",color:"#fff"},"cell-style":{"font-size":"20px","font-weight":"600",fontFamily:"Hiragino Sans GB"}}},[s("el-table-column",{attrs:{prop:"http_code",label:"状态码",fit:"true"}}),t._v(" "),s("el-table-column",{attrs:{prop:"connect_time",label:"建立连接时间",fit:"true"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(t._s(e.row.connect_time?e.row.connect_time+"ms":"/"))]}}])}),t._v(" "),s("el-table-column",{attrs:{prop:"start_time",label:"首包时间",fit:"true"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(t._s(e.row.start_time?e.row.start_time+"ms":"/"))]}}])}),t._v(" "),s("el-table-column",{attrs:{prop:"ssl_time",label:"SSL握手时间",fit:"true"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(t._s(e.row.ssl_time?e.row.ssl_time+"ms":"/"))]}}])}),t._v(" "),s("el-table-column",{attrs:{prop:"delay",label:"网络延时",fit:"true"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(t._s(e.row.delay?e.row.delay+"ms":"/"))]}}])}),t._v(" "),s("el-table-column",{attrs:{prop:"total_time",label:"传输总时间",fit:"true"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(t._s(e.row.total_time?e.row.total_time+"ms":"/"))]}}])})],1),t._v(" "),s("el-table",{staticClass:"datatable",staticStyle:{width:"100%"},attrs:{data:t.tableData,"header-cell-style":{"font-size":"18px",color:"#fff"},"cell-style":{"font-size":"20px","font-weight":"600",fontFamily:"Hiragino Sans GB"}}},[s("el-table-column",{attrs:{prop:"dns_time",label:"DNS解析时间",fit:"true"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(t._s(e.row.dns_time?e.row.dns_time+"ms":"/"))]}}])}),t._v(" "),s("el-table-column",{attrs:{prop:"speed_download",label:"内容下载速率",fit:"true"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(t._s(e.row.speed_download?e.row.speed_download+"Mb/s":"/"))]}}])}),t._v(" "),s("el-table-column",{attrs:{prop:"lcp",label:"最大内容绘制(LCP)",fit:"true"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(t._s(e.row.lcp?e.row.lcp+"s":"/"))]}}])}),t._v(" "),s("el-table-column",{attrs:{prop:"fcp",label:"缓冲时间",fit:"true"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(t._s(e.row.fcp?e.row.fcp+"s":"/"))]}}])}),t._v(" "),s("el-table-column",{attrs:{prop:"packet_loss_rate",label:"传输丢包率",fit:"true"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(t._s(e.row.packet_loss_rate?e.row.packet_loss_rate+"%":"/"))]}}])}),t._v(" "),s("el-table-column",{attrs:{prop:"delay_jitter",label:"网络抖动",fit:"true"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(t._s(e.row.delay_jitter?e.row.delay_jitter+"ms":"/"))]}}])}),t._v(" "),s("el-table-column",{attrs:{prop:"redirect_time",label:"重定向时间",fit:"true"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(t._s(e.row.redirect_time?e.row.redirect_time+"ms":"/"))]}}])})],1)],1)])],1)]),t._v(" "),s("div",{staticClass:"mode08"},[s("el-card",[s("div",{staticClass:"mode12"},[s("div",{ref:"chart1",staticClass:"mode10"}),t._v(" "),s("div",{staticClass:"mode14"},[s("div",{ref:"chart2",staticClass:"mode11"}),t._v(" "),s("div",{ref:"chart3",staticClass:"mode13"})])])])],1)])])},staticRenderFns:[]};var o=a("VU/8")(r,l,!1,function(t){a("z2iB")},"data-v-736dfe74",null);e.default=o.exports},z2iB:function(t,e){}});
//# sourceMappingURL=8.bbf97d55db5801e57ee5.js.map