(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-index-h5"],{"103c":function(t,e,a){var i=a("24fb");e=i(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.flex-center[data-v-d1da74a2]{display:flex;justify-content:center;align-items:center}.flex-col[data-v-d1da74a2]{flex-direction:column}.flex-worp[data-v-d1da74a2]{flex-wrap:wrap}.flex-just[data-v-d1da74a2]{display:flex;justify-content:space-between;align-items:center}.flex-start[data-v-d1da74a2]{display:flex;align-items:center}.h5 .uni-video[data-v-d1da74a2]{width:100%}.h5 .canvas-box[data-v-d1da74a2]{width:100%}.h5 .portrait[data-v-d1da74a2]{position:absolute;width:100%;height:500px;left:0;top:0}.h5 .video-box[data-v-d1da74a2]{width:100%}.defaultBgm[data-v-d1da74a2]{background:#4aa352}.view_cont_btm[data-v-d1da74a2]{display:flex;padding:%?120?% %?60?%;justify-content:space-between;align-items:center}.portrait[data-v-d1da74a2]{position:absolute;width:100%;height:500px;left:0;top:0}.cont_box[data-v-d1da74a2]{border:1px solid #4aa352;color:#4aa352;padding:%?20?%;font-size:%?28?%}.photobtn[data-v-d1da74a2]{width:%?160?%;height:%?160?%;border-radius:50%;border:1px solid #4aa352;padding:%?10?%;box-sizing:border-box}.photobtn uni-button[data-v-d1da74a2]{width:100%;height:100%;margin:0;background:linear-gradient(90deg,#5eab52,#9ac454);border-radius:50%}',""]),t.exports=e},2476:function(t,e,a){"use strict";var i=a("2e19"),n=a.n(i);n.a},"2e19":function(t,e,a){var i=a("103c");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var n=a("4f06").default;n("e94c0224",i,!0,{sourceMap:!1,shadowMode:!1})},"588b":function(t,e,a){"use strict";a.r(e);var i=a("fee3"),n=a("f5b7");for(var o in n)["default"].indexOf(o)<0&&function(t){a.d(e,t,(function(){return n[t]}))}(o);a("2476");var s,r=a("f0c5"),c=Object(r["a"])(n["default"],i["b"],i["c"],!1,null,"d1da74a2",null,!1,i["a"],s);e["default"]=c.exports},"58be":function(t,e,a){"use strict";a("7a82"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,a("d3b7"),a("3ca3"),a("ddb0"),a("2b3d"),a("9861"),a("99af"),a("ac1f"),a("5319"),a("1276"),a("e9c4");var i=window.screen.availWidth,n={data:function(){return{isBeFore:!0,show:!1,devPosition:"back",viewH:0,btmH:0,authCamera:!0,userInfo:{name:"",phone:"",idNumber:""}}},onLoad:function(t){},onShow:function(){this.video&&this.video.play()},mounted:function(){this.btmH=document.getElementsByClassName("view_cont_btm")[0].clientHeight;var t=document.getElementsByTagName("video")[0];this.video=t,this.canvas=document.getElementsByTagName("canvas")[0],console.log(this.canvas),this.canvas.setAttribute("height",this.btmH),this.context=this.canvas.getContext("2d"),navigator.mediaDevices.getUserMedia||navigator.getUserMedia||navigator.webkitGetUserMedia||navigator.mozGetUserMedia?this.getUserMedia({video:{width:i,height:this.viewH-this.btmH}},this.success,this.error):alert("不支持访问用户媒体")},created:function(){var t=uni.getSystemInfoSync().windowHeight;this.viewH=t},methods:{getUserMedia:function(t,e,a){var i=this;if(navigator.mediaDevices.getUserMedia){var n={};this.isBeFore?(n={facingMode:"user"},this.isBeFore=!1):(n={facingMode:{exact:"environment"}},this.isBeFore=!0),navigator.mediaDevices.getUserMedia({audio:{echoCancellation:!1},video:n}).then((function(t){window.URL||window.webkitURL;i.video.srcObject=t,i.video.play()})).catch((function(t){console.log("访问用户媒体设备失败".concat(t.name,", ").concat(t.message))}))}else navigator.webkitGetUserMedia?navigator.webkitGetUserMedia(t,e,a):navigator.mozGetUserMedia?navigator.mozGetUserMedia(t,e,a):navigator.getUserMedia&&navigator.getUserMedia(t,e,a)},capture:function(){uni.showLoading({title:"证件生成中..."}),this.context.drawImage(this.video,0,0,i,this.viewH-this.btmH),this.uploadPortrait()},openAlbum:function(){var t=this;uni.chooseImage({count:1,sourceType:["album"],success:function(e){t.src=e.tempFilePaths[0],uni.showLoading({title:"证件生成中..."}),t.uploadPortrait()}})},switchPosition:function(){this.getUserMedia({video:{width:i,height:this.viewH-this.btmH}},this.success,this.error)},takePhoto:function(){var t=this;uni.showLoading({title:"证件生成中..."});var e=uni.createCameraContext();e.takePhoto({quality:"high",success:function(e){t.src=e.tempImagePath,t.uploadPortrait()}})},uploadPortrait:function(){var t=this,e=this.canvas.toDataURL().replace("data:image/png;base64,","");console.log("base64",e);var a={url:"https://apicall.id-photo-verify.com/api/cut_check_pic","Content-Type":"application/json",method:"post",data:{spec_id:1,app_key:"0270b8a24fbfd4249db849c156cd0ea0eb766d34",file:e}};uni.request(a).then((function(e){if(uni.hideLoading(),e=e[1].data,console.log("res",e),200==e.code){var a=e.result.img_wm_url_list[0].split("?"),i={name:e.result.check_result.name};e.not_check_result.length&&(i.param_message=e.not_check_result[0].param_message),uni.navigateTo({url:"./portrait?src="+a[0]+"&"+a[1]+"&portraitMsg="+JSON.stringify(i)+"&userInfo="+JSON.stringify(t.userInfo)})}else uni.showModal({title:"错误",content:e.error,showCancel:!1,success:function(t){}})})).catch((function(t){uni.showModal({title:"提示",content:t.result,showCancel:!1,success:function(t){}}),uni.hideLoading()}))},init:function(t){console.log("初始化")}}};e.default=n},bb47:function(t,e,a){t.exports=a.p+"static/img/portrait.de618efb.png"},f5b7:function(t,e,a){"use strict";a.r(e);var i=a("58be"),n=a.n(i);for(var o in i)["default"].indexOf(o)<0&&function(t){a.d(e,t,(function(){return i[t]}))}(o);e["default"]=n.a},fee3:function(t,e,a){"use strict";var i;a.d(e,"b",(function(){return n})),a.d(e,"c",(function(){return o})),a.d(e,"a",(function(){return i}));var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"h5"},[t.authCamera?i("v-uni-view",[i("v-uni-video",{staticClass:"video-box",style:{height:t.viewH-t.btmH+"px"},attrs:{muted:!0,controls:"false",autoplay:!0}}),i("v-uni-image",{staticClass:"portrait",style:{height:t.viewH-t.btmH+"px"},attrs:{src:a("bb47")}})],1):i("v-uni-view",[i("v-uni-view",{staticClass:"defaultBgm",style:{height:t.viewH-t.btmH+"px"}})],1),i("v-uni-view",{staticClass:"view_cont_btm flex_row"},[i("v-uni-view",{staticClass:"cont_box",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.openAlbum.apply(void 0,arguments)}}},[t._v("相册")]),i("v-uni-view",{staticClass:"photobtn"},[i("v-uni-button",{on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.capture.apply(void 0,arguments)}}})],1),i("v-uni-view",{staticClass:"cont_box",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.switchPosition.apply(void 0,arguments)}}},[t._v("切换")])],1),i("v-uni-canvas",{staticClass:"canvas-box",style:{height:t.viewH-t.btmH+"px"}})],1)},o=[]}}]);