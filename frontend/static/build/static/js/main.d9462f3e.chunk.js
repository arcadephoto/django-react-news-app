(this.webpackJsonpstatic=this.webpackJsonpstatic||[]).push([[0],{17:function(t,e,n){},31:function(t,e,n){},40:function(t,e,n){"use strict";n.r(e);var a=n(1),i=n.n(a),s=n(25),r=n.n(s),c=(n(31),n(4)),o=n.n(c),u=n(7),l=n(12),d=n(8),h=n(9),b=n(2),j=n(11),p=n(10),f=n(5),m=n(3),O=n.n(m),v=(n(17),n(0)),x=(a.Component,function(t){Object(j.a)(n,t);var e=Object(p.a)(n);function n(t){var a;return Object(d.a)(this,n),(a=e.call(this,t)).state={isLoggedIn:!!O.a.get("Authorization"),username:"",email:"",password:"",data:[]},a.handleInput=a.handleInput.bind(Object(b.a)(a)),a.handleLogin=a.handleLogin.bind(Object(b.a)(a)),a}return Object(h.a)(n,[{key:"handleLogin",value:function(){var t=Object(u.a)(o.a.mark((function t(e,n){var a,i,s,r;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.preventDefault(),a={method:"POST",headers:{"Content-Type":"application/json","X-CSRFToken":O.a.get("csrftoken")},body:JSON.stringify(n)},i=function(t){return console.warn(t)},t.next=5,fetch("/rest-auth/login/",a);case 5:return s=t.sent,t.next=8,s.json().catch(i);case 8:(r=t.sent).key&&(O.a.set("Authorization","Token ".concat(r.key)),this.props.setUser(r.username),localStorage.setItem("user",r.username),localStorage.setItem("id",r.id),this.setState({username:r.username}),console.log(r));case 10:case"end":return t.stop()}}),t,this)})));return function(e,n){return t.apply(this,arguments)}}()},{key:"handleInput",value:function(t){this.setState(Object(l.a)({},t.target.name,t.target.value))}},{key:"render",value:function(){var t=this,e=Object(v.jsxs)("form",{onSubmit:function(e){return t.handleLogin(e,t.state)},children:[Object(v.jsx)("input",{type:"text",placeholder:"username",name:"username",value:this.state.username,onChange:this.handleInput}),Object(v.jsx)("input",{type:"password",placeholder:"password",name:"password",value:this.state.password,onChange:this.handleInput}),Object(v.jsx)("p",{children:Object(v.jsx)("button",{className:"btn",type:"submit",children:"Log In"})})]});return Object(v.jsx)("div",{children:e})}}]),n}(a.Component)),g=function(t){Object(j.a)(n,t);var e=Object(p.a)(n);function n(t){var a;return Object(d.a)(this,n),(a=e.call(this,t)).state={isLoggedIn:!!O.a.get("Authorization"),username:"",email:"",password1:"",password2:"",data:[]},a.handleInput=a.handleInput.bind(Object(b.a)(a)),a.submitPhoto=a.submitPhoto.bind(Object(b.a)(a)),a.handleImage=a.handleImage.bind(Object(b.a)(a)),a.editPhoto=a.editPhoto.bind(Object(b.a)(a)),a}return Object(h.a)(n,[{key:"componentDidMount",value:function(){var t=this;fetch("/profiles/detail/").then((function(t){return t.json()})).then((function(e){return t.setState({data:e})}))}},{key:"handleInput",value:function(t){this.setState(Object(l.a)({},t.target.name,t.target.value))}},{key:"submitPhoto",value:function(){var t=Object(u.a)(o.a.mark((function t(e){var n,a;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.preventDefault(),(n=new FormData).append("profile_picture",this.state.profile_picture),n.append("user",1),a={method:"POST",headers:{"X-CSRFToken":O.a.get("csrftoken")},body:n},t.next=7,fetch("/profiles/",a);case 7:case"end":return t.stop()}}),t,this)})));return function(e){return t.apply(this,arguments)}}()},{key:"handleImage",value:function(t){var e=this,n=t.target.files[0];this.setState({profile_picture:n});var a=new FileReader;a.onloadend=function(){e.setState({preview:a.result})},a.readAsDataURL(n)}},{key:"editPhoto",value:function(){var t=Object(u.a)(o.a.mark((function t(e){var n,a;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.preventDefault(),(n=new FormData).append("profile_picture",this.state.profile_picture),n.append("user",1),a={method:"PUT",headers:{"X-CSRFToken":O.a.get("csrftoken")},body:n},t.next=7,fetch("/profiles/images/",a);case 7:case"end":return t.stop()}}),t,this)})));return function(e){return t.apply(this,arguments)}}()},{key:"render",value:function(){var t=this.state.data,e=Object(v.jsx)("img",{width:"200px",src:t.profile_picture,alt:"pic"}),n=!0===this.state.isLoggedIn?Object(v.jsx)("p",{children:"Welcome! Please make a profile to leave a comment."}):null,a=Object(v.jsxs)("form",{onSubmit:this.submitPhoto,children:[Object(v.jsx)("input",{type:"file",name:"profile_picture",onChange:this.handleImage}),this.state.profile_picture&&Object(v.jsx)("img",{width:"500",src:this.state.preview,alt:"preview"}),Object(v.jsx)("button",{type:"submit",children:"Save"}),localStorage.user===this.props.username?Object(v.jsx)("button",{onClick:this.editPhoto,children:"Edit"}):null]});return Object(v.jsxs)("div",{children:[n,a,e]})}}]),n}(a.Component),y=function(t){Object(j.a)(n,t);var e=Object(p.a)(n);function n(t){var a;return Object(d.a)(this,n),(a=e.call(this,t)).state={isLoggedIn:!!O.a.get("Authorization"),data:[],text:"",editText:"",isEditing:!1,edited:!1,submitWindow:!1,body:"",title:"",editWindow:null},a.editArticle=a.editArticle.bind(Object(b.a)(a)),a.handleInput=a.handleInput.bind(Object(b.a)(a)),a.submitEdit=a.submitEdit.bind(Object(b.a)(a)),a.saveDraft=a.saveDraft.bind(Object(b.a)(a)),a.submitWindow=a.submitWindow.bind(Object(b.a)(a)),a}return Object(h.a)(n,[{key:"submitWindow",value:function(){this.setState({submitWindow:!0})}},{key:"saveDraft",value:function(){var t=Object(u.a)(o.a.mark((function t(){var e,n,a,i;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e={body:this.state.body,title:this.state.title},this.setState({submitWindow:!1}),n={method:"POST",headers:{"Content-Type":"application/json","X-CSRFToken":O.a.get("csrftoken")},body:JSON.stringify(e)},a=function(t){return console.warn(t)},t.next=6,fetch("/articles/edit/drafts/submit/",n);case 6:return i=t.sent,t.next=9,i.json().catch(a);case 9:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"editArticle",value:function(t){this.setState({editWindow:t.id}),this.setState({isEditing:!0});var e=t.body;this.setState({editText:e})}},{key:"submitEdit",value:function(){var t=Object(u.a)(o.a.mark((function t(e){var n,a,i;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.body=this.state.editText,this.setState({isEditing:!1}),n={method:"PUT",headers:{"Content-Type":"application/json","X-CSRFToken":O.a.get("csrftoken")},body:JSON.stringify(e)},a=function(t){return console.warn(t)},t.next=6,fetch("/articles/edit/".concat(e.id,"/"),n);case 6:return i=t.sent,t.next=9,i.json().catch(a);case 9:case"end":return t.stop()}}),t,this)})));return function(e){return t.apply(this,arguments)}}()},{key:"componentDidMount",value:function(){var t=this;fetch("/articles/").then((function(t){return t.json()})).then((function(e){return t.setState({data:e})}))}},{key:"handleInput",value:function(t){this.setState(Object(l.a)({},t.target.name,t.target.value))}},{key:"render",value:function(){var t=this,e=localStorage.user?Object(v.jsx)("button",{onClick:this.submitWindow,children:"Submit An Article!"}):null,n=!0===this.state.submitWindow?Object(v.jsxs)("p",{children:[Object(v.jsx)("textarea",{placeholder:"Title your submission",type:"text",name:"title",value:this.state.title,onChange:this.handleInput}),Object(v.jsx)("textarea",{className:"form-control",rows:"5",type:"text",name:"body",value:this.state.body,onChange:this.handleInput}),Object(v.jsx)("button",{className:"btn",onClick:this.saveDraft,children:"Save Draft"})]}):null,a=this.state.data.map((function(e){return Object(v.jsxs)("section",{className:"card",children:[Object(v.jsx)("h1",{children:e.title}),Object(v.jsxs)("p",{children:["By: ",e.owner]}),!1===t.state.edited?Object(v.jsx)("p",{children:e.body}):Object(v.jsx)("p",{children:t.state.id.body}),e.owner===localStorage.user?Object(v.jsx)("button",{className:"btn",onClick:function(){return t.editArticle(e)},children:"Edit"}):null,!0===t.state.isEditing&e.owner===localStorage.user&t.state.editWindow===e.id?Object(v.jsxs)("p",{children:[Object(v.jsx)("textarea",{className:"form-control",rows:"5",type:"text",name:"editText",value:t.state.editText,onChange:t.handleInput}),Object(v.jsx)("button",{className:"btn",onClick:function(){return t.submitEdit(e)},children:"Submit Edit"})]}):null]},e.id)}));return Object(v.jsxs)("div",{children:[e,n,a]})}}]),n}(a.Component),w=n(16);var k=function(t){return Object(v.jsxs)("div",{className:"navlinks navbar",children:[Object(v.jsx)(w.b,{to:"/articles/",children:"Articles"}),Object(v.jsx)(w.b,{to:"/articles/archives/",children:"Archives"}),Object(v.jsx)(w.b,{to:"/articles/edit/drafts/",children:"Drafts"}),Object(v.jsx)(w.b,{to:"/profiles/",children:"Profile"})]})},S=function(t){Object(j.a)(n,t);var e=Object(p.a)(n);function n(t){var a;return Object(d.a)(this,n),(a=e.call(this,t)).state={isLoggedIn:!!O.a.get("Authorization"),data:[],text:"",editText:"",isEditing:!1,edited:!1,submitWindow:!1,body:"",title:"",editWindow:null},a.editArticle=a.editArticle.bind(Object(b.a)(a)),a.handleInput=a.handleInput.bind(Object(b.a)(a)),a.submitEdit=a.submitEdit.bind(Object(b.a)(a)),a.saveDraft=a.saveDraft.bind(Object(b.a)(a)),a.submitWindow=a.submitWindow.bind(Object(b.a)(a)),a}return Object(h.a)(n,[{key:"submitWindow",value:function(){this.setState({submitWindow:!0})}},{key:"saveDraft",value:function(){var t=Object(u.a)(o.a.mark((function t(){var e,n,a,i;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e={body:this.state.body,title:this.state.title},this.setState({submitWindow:!1}),n={method:"POST",headers:{"Content-Type":"application/json","X-CSRFToken":O.a.get("csrftoken")},body:JSON.stringify(e)},a=function(t){return console.warn(t)},t.next=6,fetch("/articles/edit/drafts/submit/",n);case 6:return i=t.sent,t.next=9,i.json().catch(a);case 9:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"editArticle",value:function(t){this.setState({editWindow:t.id}),this.setState({isEditing:!0});var e=t.body;this.setState({editText:e})}},{key:"submitEdit",value:function(){var t=Object(u.a)(o.a.mark((function t(e){var n,a,i;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.body=this.state.editText,this.setState({isEditing:!1}),n={method:"PUT",headers:{"Content-Type":"application/json","X-CSRFToken":O.a.get("csrftoken")},body:JSON.stringify(e)},a=function(t){return console.warn(t)},t.next=6,fetch("/articles/edit/".concat(e.id,"/"),n);case 6:return i=t.sent,t.next=9,i.json().catch(a);case 9:case"end":return t.stop()}}),t,this)})));return function(e){return t.apply(this,arguments)}}()},{key:"componentDidMount",value:function(){var t=this;fetch("/articles/edit/drafts/").then((function(t){return t.json()})).then((function(e){return t.setState({data:e})}))}},{key:"handleInput",value:function(t){this.setState(Object(l.a)({},t.target.name,t.target.value))}},{key:"render",value:function(){var t=this,e=localStorage.user?Object(v.jsx)("button",{onClick:this.submitWindow,children:"Submit An Article!"}):null,n=!0===this.state.submitWindow?Object(v.jsxs)("p",{children:[Object(v.jsx)("textarea",{placeholder:"Title your submission",type:"text",name:"title",value:this.state.title,onChange:this.handleInput}),Object(v.jsx)("textarea",{className:"form-control",rows:"5",type:"text",name:"body",value:this.state.body,onChange:this.handleInput}),Object(v.jsx)("button",{onClick:this.saveDraft,children:"Save Draft"})]}):null,a=this.state.data.map((function(e){return Object(v.jsxs)("section",{className:"card",children:[Object(v.jsx)("h1",{children:e.title}),Object(v.jsxs)("p",{children:["By: ",e.owner]}),!1===t.state.edited?Object(v.jsx)("p",{children:e.body}):Object(v.jsx)("p",{children:t.state.id.body}),e.owner===localStorage.user?Object(v.jsx)("button",{className:"btn",onClick:function(){return t.editArticle(e)},children:"Edit"}):null,!0===t.state.isEditing&e.owner===localStorage.user&t.state.editWindow===e.id?Object(v.jsxs)("p",{children:[Object(v.jsx)("textarea",{className:"form-control",rows:"5",type:"text",name:"editText",value:t.state.editText,onChange:t.handleInput}),Object(v.jsx)("button",{className:"btn",onClick:function(){return t.submitEdit(e)},children:"Submit Edit"})]}):null]},e.id)}));return Object(v.jsxs)("div",{children:[e,n,a]})}}]),n}(a.Component),C=function(t){Object(j.a)(n,t);var e=Object(p.a)(n);function n(t){var a;return Object(d.a)(this,n),(a=e.call(this,t)).state={isLoggedIn:!!O.a.get("Authorization"),data:[]},a}return Object(h.a)(n,[{key:"componentDidMount",value:function(){var t=this;fetch("/articles/archives/").then((function(t){return t.json()})).then((function(e){return t.setState({data:e})}))}},{key:"render",value:function(){var t=this.state.data.map((function(t){return Object(v.jsxs)("section",{className:"card",children:[Object(v.jsx)("h1",{children:t.title}),Object(v.jsxs)("p",{children:["By: ",t.owner]}),Object(v.jsx)("p",{children:t.body})]},t.id)}));return Object(v.jsx)("div",{children:t})}}]),n}(a.Component),I=(n(39),function(t){Object(j.a)(n,t);var e=Object(p.a)(n);function n(t){var a;return Object(d.a)(this,n),(a=e.call(this,t)).state={isLoggedIn:!!O.a.get("Authorization"),username:"",email:"",password:"",password1:"",password2:"",profile_picture:"",user:{}},a.handleInput=a.handleInput.bind(Object(b.a)(a)),a.handleChange=a.handleChange.bind(Object(b.a)(a)),a.handleLogout=a.handleLogout.bind(Object(b.a)(a)),a.setUser=a.setUser.bind(Object(b.a)(a)),a}return Object(h.a)(n,[{key:"handleInput",value:function(t){this.setState(Object(l.a)({},t.target.name,t.target.value))}},{key:"handleChange",value:function(t){this.setState(Object(l.a)({},t.target.name,t.target.value))}},{key:"handleLogout",value:function(){var t=Object(u.a)(o.a.mark((function t(e,n){var a,i,s,r;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.preventDefault(),a={method:"POST",headers:{"Content-Type":"application/json","X-CSRFToken":O.a.get("csrftoken")},body:JSON.stringify(n)},i=function(t){return console.warn(t)},t.next=5,fetch("/rest-auth/logout/",a);case 5:return s=t.sent,t.next=8,s.json().catch(i);case 8:r=t.sent,O.a.remove("Authorization","Token ".concat(r.key)),localStorage.clear(),this.setState({username:""});case 12:case"end":return t.stop()}}),t,this)})));return function(e,n){return t.apply(this,arguments)}}()},{key:"setUser",value:function(t){this.setState({username:t.username})}},{key:"render",value:function(){var t=this,e=Object(v.jsx)("form",{onSubmit:function(e){return t.handleLogout(e,t.state)},children:Object(v.jsx)("button",{className:"btn",type:"submit",children:"Log Out"})});return Object(v.jsxs)("div",{className:"container",children:[Object(v.jsxs)("div",{className:"row headerbar",children:[Object(v.jsx)("div",{className:"col-8",children:localStorage.user?null:Object(v.jsx)(x,{setUser:this.setUser})}),Object(v.jsx)("div",{className:"col-2",children:localStorage.user?Object(v.jsxs)("p",{children:["Welcome, ",localStorage.user,"!"]}):null}),Object(v.jsx)("div",{className:"col-2",children:localStorage.user?e:null}),Object(v.jsx)("div",{className:"row",children:Object(v.jsx)(k,{})})]}),Object(v.jsxs)("div",{className:"row",children:[Object(v.jsx)("div",{className:"col-8"}),Object(v.jsx)("div",{className:"col-4"})]}),Object(v.jsx)("div",{className:"row"}),Object(v.jsx)("div",{className:"row"}),Object(v.jsx)(i.a.Fragment,{children:Object(v.jsxs)(f.c,{children:[Object(v.jsx)(f.a,{path:"/articles/edit/drafts/",component:S}),Object(v.jsx)(f.a,{path:"/articles/archives/",component:C}),Object(v.jsx)(f.a,{path:"/articles/",component:y}),Object(v.jsx)(f.a,{path:"/profiles/",children:Object(v.jsx)(g,{user:this.state.user})})]})})]})}}]),n}(a.Component)),T=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,41)).then((function(e){var n=e.getCLS,a=e.getFID,i=e.getFCP,s=e.getLCP,r=e.getTTFB;n(t),a(t),i(t),s(t),r(t)}))};r.a.render(Object(v.jsx)(i.a.StrictMode,{children:Object(v.jsx)(w.a,{children:Object(v.jsx)(I,{})})}),document.getElementById("root")),T()}},[[40,1,2]]]);
//# sourceMappingURL=main.d9462f3e.chunk.js.map