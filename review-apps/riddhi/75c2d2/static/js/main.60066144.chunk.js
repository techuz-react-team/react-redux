(this.webpackJsonpapp=this.webpackJsonpapp||[]).push([[0],{159:function(e,t,c){},261:function(e,t,c){"use strict";c.r(t);var n=c(0),a=c(30),s=c.n(a),o=(c(159),c(25)),i=c(64),r=c(23),l=c(81),j=c(32),d=c(263),b=c(265),u=c(267),O=c(47),p="GET_ALL_POST",h="GET_POST_BY_ID",f="ADD_POST",x="UPDATE_POST",m="DELETE_POST",y="SHOW_LOADER",g="HIDE_LOADER",v=c(33),P=Object(v.a)(),C=c(166),E=function(e){return function(t){return C.get("https://jsonplaceholder.typicode.com/posts/".concat(e)).then((function(e){t({type:h,payload:e.data})})).catch((function(e){console.log(e,e.code,e,"ERRORS")}))}},I=c(8),T=d.a.Content,R={labelCol:{span:5},wrapperCol:{span:10}},S={wrapperCol:{offset:8,span:16}},D=function(){var e=Object(j.b)(),t=Object(n.useState)({title:"",body:""}),c=Object(l.a)(t,2),a=c[0],s=c[1],o=Object(j.c)((function(e){return e.userId})),p=function(e){return function(t){t.persist();var c=t.target.value;s((function(t){return Object(r.a)(Object(r.a)({},t),{},Object(i.a)({},e,c))}))}};return Object(I.jsx)(d.a,{children:Object(I.jsx)(T,{children:Object(I.jsxs)(b.a,Object(r.a)(Object(r.a)({},R),{},{name:"basic",onFinish:function(t){var c;t.userId=o,e((c=t,function(e){e({type:f}),C.post("https://jsonplaceholder.typicode.com/posts",c).then((function(e){201===e.status&&e.data&&(alert("Post Created successfully..."),P.replace("/"))})).catch((function(e){console.log(e,e.code,e,"ERRORS")}))}))},onFinishFailed:function(e){console.log("Failed:",e)},children:[Object(I.jsx)(b.a.Item,{label:"Title",name:"title",value:a.title,onChange:p("title"),rules:[{required:!0,message:"Please enter title!"}],children:Object(I.jsx)(u.a,{})}),Object(I.jsx)(b.a.Item,{label:"Content",name:"body",value:a.body,onChange:p("body"),rules:[{required:!0,message:"Please enter content!"}],children:Object(I.jsx)(u.a.TextArea,{})}),Object(I.jsx)(b.a.Item,Object(r.a)(Object(r.a)({},S),{},{children:Object(I.jsx)(O.a,{type:"primary",htmlType:"submit",children:"Add Post"})}))]}))})})},F=d.a.Content,w={labelCol:{span:5},wrapperCol:{span:10}},A={wrapperCol:{offset:8,span:16}},_=function(e){var t=e.match,c=b.a.useForm(),a=Object(l.a)(c,1)[0],s=t.params.id,o=Object(j.c)((function(e){return e.singlePost})),p=Object(n.useState)({title:o.title,body:o.body}),h=Object(l.a)(p,2),f=h[0],m=h[1],y=Object(j.c)((function(e){return e.userId})),g=Object(j.b)();Object(n.useEffect)((function(){g(E(s))}),[]);var v=function(e){return function(t){t.persist();var c=t.target.value;m((function(t){return Object(r.a)(Object(r.a)({},t),{},Object(i.a)({},e,c))}))}};return Object(n.useEffect)((function(){a.setFieldsValue({title:o.title,body:o.body})}),[o]),Object(I.jsx)(d.a,{children:Object(I.jsx)(F,{children:Object(I.jsxs)(b.a,Object(r.a)(Object(r.a)({},w),{},{form:a,name:"basic",onFinish:function(e){var t,c;e.userId=y,g((t=e,c=s,function(e){e({type:x}),C.put("https://jsonplaceholder.typicode.com/posts/".concat(c),t).then((function(e){200===e.status&&e.data&&(alert("Post Edited successfully..."),P.replace("/"))})).catch((function(e){console.log(e,e.code,e,"ERRORS")}))}))},onFinishFailed:function(e){console.log("Failed:",e)},children:[Object(I.jsx)(b.a.Item,{label:"Title",name:"title",value:f.title,onChange:v("title"),rules:[{required:!0,message:"Please enter title!"}],children:Object(I.jsx)(u.a,{})}),Object(I.jsx)(b.a.Item,{label:"Content",name:"body",value:f.body,onChange:v("body"),rules:[{required:!0,message:"Please enter content!"}],children:Object(I.jsx)(u.a.TextArea,{})}),Object(I.jsx)(b.a.Item,Object(r.a)(Object(r.a)({},A),{},{children:Object(I.jsx)(O.a,{type:"primary",htmlType:"submit",children:"Edit Post"})}))]}))})})},L=c(55),k=function(){return Object(I.jsx)("nav",{children:Object(I.jsxs)("section",{children:[Object(I.jsx)("h1",{children:"React Redux Test demo"}),Object(I.jsx)("div",{className:"navContent",children:Object(I.jsxs)("div",{className:"navLinks",children:[Object(I.jsx)(L.a,{to:"/",children:"Posts"}),Object(I.jsx)(L.a,{to:"/add-post",children:"Add Post"})]})})]})})},q=c(264),B=c(268),N=q.a.Column,G=function(){var e=Object(j.b)(),t=Object(j.c)((function(e){return e.allPosts}));Object(n.useEffect)((function(){e((function(e){return C.get("https://jsonplaceholder.typicode.com/posts").then((function(t){e({type:p,payload:t.data})})).catch((function(e){console.log(e,e.code,e,"ERRORS")}))}))}),[]);var c=function(t){e(function(e){return function(t){return C.delete("https://jsonplaceholder.typicode.com/posts/".concat(e)).then((function(c){alert("Post Deleted successfully..."),t({type:m,postId:e,payload:c.data})})).catch((function(e){console.log(e,e.code,e,"ERRORS")}))}}(t))};return Object(I.jsxs)(q.a,{dataSource:t,rowKey:function(e){return e.id},children:[Object(I.jsx)(N,{title:"Id",dataIndex:"id"},"id"),Object(I.jsx)(N,{title:"Title",dataIndex:"title"},"title"),Object(I.jsx)(N,{title:"Action",render:function(e,t){return Object(I.jsxs)(B.b,{size:"middle",children:[Object(I.jsx)(L.a,{to:"/posts/".concat(e.id),children:"View"}),Object(I.jsx)(L.a,{to:"/edit-post/".concat(e.id),children:"Edit"}),Object(I.jsx)(O.a,{type:"link",onClick:function(){return c(e.id)},children:"Delete"})]})}},"action")]})},H=c(266),J=function(e){var t=e.match.params.id,c=Object(j.b)(),a=Object(j.c)((function(e){return e.singlePost}));return Object(n.useEffect)((function(){c(E(t))}),[]),Object(I.jsx)("div",{className:"site-card-border-less-wrapper",children:Object(I.jsxs)(H.a,{title:"Post Details",bordered:!0,style:{width:500},children:[Object(I.jsxs)("p",{children:[Object(I.jsx)("b",{children:"Id:"})," ",a.id]}),Object(I.jsxs)("p",{children:[Object(I.jsx)("b",{children:"Title:"})," ",a.title]}),Object(I.jsxs)("p",{children:[Object(I.jsx)("b",{children:"Content:"})," ",a.body]})]})})},V=function(){return Object(I.jsx)("div",{children:Object(I.jsx)(o.b,{history:P,children:Object(I.jsxs)("div",{children:[Object(I.jsx)(k,{}),Object(I.jsxs)(o.c,{children:[Object(I.jsx)(o.a,{exact:!0,path:"/",component:G}),Object(I.jsx)(o.a,{exact:!0,path:"/add-post",component:D}),Object(I.jsx)(o.a,{exact:!0,path:"/posts/:id",component:J}),Object(I.jsx)(o.a,{exact:!0,path:"/edit-post/:id",component:_})]})]})})})},z=(c(260),function(){return Object(I.jsx)(V,{})}),K=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,269)).then((function(t){var c=t.getCLS,n=t.getFID,a=t.getFCP,s=t.getLCP,o=t.getTTFB;c(e),n(e),a(e),s(e),o(e)}))},U=c(78),W={allPosts:[],singlePost:[],userId:1,loading:!1},Y=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:W,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case p:return Object(r.a)(Object(r.a)({},e),{},{allPosts:t.payload,singlePost:[]});case f:return Object(r.a)(Object(r.a)({},e),{},{postData:t.payload});case m:return Object(r.a)(Object(r.a)({},e),{},{singlePost:null});case h:return Object(r.a)(Object(r.a)({},e),{},{singlePost:t.payload});case x:return Object(r.a)(Object(r.a)({},e),{},{postData:t.payload});case y:return Object(r.a)(Object(r.a)({},e),{},{loading:!0});case g:return Object(r.a)(Object(r.a)({},e),{},{loading:!1});default:return e}},M=c(148),Q=Object(U.c)(Y,Object(U.a)(M.a));s.a.render(Object(I.jsx)(j.a,{store:Q,children:Object(I.jsx)(z,{})}),document.getElementById("root")),K()}},[[261,1,2]]]);
//# sourceMappingURL=main.60066144.chunk.js.map