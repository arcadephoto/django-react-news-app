(this.webpackJsonpstatic=this.webpackJsonpstatic||[]).push([[0],{11:function(e,t,n){},18:function(e,t,n){},22:function(e,t,n){"use strict";n.r(t);var a=n(3),s=n.n(a),r=n(13),i=n.n(r),c=(n(18),n(4)),o=n.n(c),u=n(6),l=n(5),h=n(7),d=n(8),p=n(1),j=n(10),b=n(9),m=n(2),O=n.n(m),f=(n(11),n(0)),g=function(e){Object(j.a)(n,e);var t=Object(b.a)(n);function n(e){var a;return Object(h.a)(this,n),(a=t.call(this,e)).state={isLoggedIn:!!O.a.get("Authorization"),username:"",email:"",password1:"",password2:""},a.handleInput=a.handleInput.bind(Object(p.a)(a)),a.handleRegistration=a.handleRegistration.bind(Object(p.a)(a)),a}return Object(d.a)(n,[{key:"handleInput",value:function(e){this.setState(Object(l.a)({},e.target.name,e.target.value))}},{key:"handleRegistration",value:function(){var e=Object(u.a)(o.a.mark((function e(t,n){var a,s,r,i;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),a={method:"POST",headers:{"Content-Type":"application/json","X-CSRFToken":O.a.get("csrftoken")},body:JSON.stringify(n)},s=function(e){return console.warn(e)},e.next=5,fetch("/rest-auth/registration/",a);case 5:return r=e.sent,e.next=8,r.json().catch(s);case 8:(i=e.sent).key&&O.a.set("Authorization","Token ".concat(i.key)),this.setState({username:"",email:"",password1:"",password2:""});case 11:case"end":return e.stop()}}),e,this)})));return function(t,n){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this,t=Object(f.jsxs)("form",{onSubmit:function(t){return e.handleRegistration(t,e.state)},children:[Object(f.jsx)("input",{type:"text",placeholder:"username",name:"username",value:this.state.username,onChange:this.handleInput}),Object(f.jsx)("input",{type:"email",placeholder:"email",name:"email",value:this.state.email,onChange:this.handleInput}),Object(f.jsx)("input",{type:"password",placeholder:"password",name:"password1",value:this.state.password1,onChange:this.handleInput}),Object(f.jsx)("input",{type:"password",placeholder:"confirm pass",name:"password2",value:this.state.password2,onChange:this.handleInput}),Object(f.jsx)("p",{children:Object(f.jsx)("button",{className:"btn-primary btn",type:"submit",children:"Register"})})]});return Object(f.jsx)("div",{children:t})}}]),n}(a.Component),v=function(e){Object(j.a)(n,e);var t=Object(b.a)(n);function n(e){var a;return Object(h.a)(this,n),(a=t.call(this,e)).state={isLoggedIn:!!O.a.get("Authorization"),username:"",email:"",password1:"",password2:""},a.handleInput=a.handleInput.bind(Object(p.a)(a)),a.handleLogin=a.handleLogin.bind(Object(p.a)(a)),a}return Object(d.a)(n,[{key:"handleLogin",value:function(){var e=Object(u.a)(o.a.mark((function e(t,n){var a,s,r,i;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),a={method:"POST",headers:{"Content-Type":"application/json","X-CSRFToken":O.a.get("csrftoken")},body:JSON.stringify(n)},s=function(e){return console.warn(e)},e.next=5,fetch("/rest-auth/login/",a);case 5:return r=e.sent,e.next=8,r.json().catch(s);case 8:(i=e.sent).key&&O.a.set("Authorization","Token ".concat(i.key));case 10:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()},{key:"handleInput",value:function(e){this.setState(Object(l.a)({},e.target.name,e.target.value))}},{key:"render",value:function(){var e=this,t=Object(f.jsxs)("form",{onSubmit:function(t){return e.handleLogin(t,e.state)},children:[Object(f.jsx)("input",{type:"text",placeholder:"username",name:"username",value:this.state.username,onChange:this.handleInput}),Object(f.jsx)("input",{type:"password",placeholder:"password",name:"password",value:this.state.password,onChange:this.handleInput}),Object(f.jsx)("p",{children:Object(f.jsx)("button",{className:"btn btn-primary",type:"submit",children:"Log In"})})]});return Object(f.jsx)("div",{children:t})}}]),n}(a.Component),x=function(e){Object(j.a)(n,e);var t=Object(b.a)(n);function n(e){var a;return Object(h.a)(this,n),(a=t.call(this,e)).state={isLoggedIn:!!O.a.get("Authorization"),username:"",email:"",password1:"",password2:""},a.handleInput=a.handleInput.bind(Object(p.a)(a)),a.submitPhoto=a.submitPhoto.bind(Object(p.a)(a)),a}return Object(d.a)(n,[{key:"handleInput",value:function(e){this.setState(Object(l.a)({},e.target.name,e.target.value))}},{key:"submitPhoto",value:function(){var e=Object(u.a)(o.a.mark((function e(t){var n,a,s;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),(n=new FormData).append("profile_picture",this.state.profile_picture),n.append("user",1),a={method:"POST",headers:{"X-CSRFToken":O.a.get("csrftoken")},body:n},e.next=7,fetch("/profiles/",a);case 7:s=e.sent,console.log(s);case 9:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=Object(f.jsxs)("form",{onSubmit:this.submitPhoto,children:[Object(f.jsx)("input",{type:"file",name:"profile_picture",onChange:this.handleImage}),this.state.profile_picture&&Object(f.jsx)("img",{width:"500",src:this.state.preview,alt:"preview"}),Object(f.jsx)("button",{type:"submit",children:"Save"})]});return Object(f.jsx)("div",{children:e})}}]),n}(a.Component),y=(n(21),function(e){Object(j.a)(n,e);var t=Object(b.a)(n);function n(e){var a;return Object(h.a)(this,n),(a=t.call(this,e)).state={isLoggedIn:!!O.a.get("Authorization"),username:"",email:"",password:"",password1:"",password2:"",profile_picture:""},a.handleInput=a.handleInput.bind(Object(p.a)(a)),a.handleChange=a.handleChange.bind(Object(p.a)(a)),a.handleLogout=a.handleLogout.bind(Object(p.a)(a)),a}return Object(d.a)(n,[{key:"handleInput",value:function(e){this.setState(Object(l.a)({},e.target.name,e.target.value))}},{key:"handleChange",value:function(e){this.setState(Object(l.a)({},e.target.name,e.target.value))}},{key:"handleLogout",value:function(){var e=Object(u.a)(o.a.mark((function e(t,n){var a,s,r,i;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),a={method:"POST",headers:{"Content-Type":"application/json","X-CSRFToken":O.a.get("csrftoken")},body:JSON.stringify(n)},s=function(e){return console.warn(e)},e.next=5,fetch("/rest-auth/logout/",a);case 5:return r=e.sent,e.next=8,r.json().catch(s);case 8:i=e.sent,O.a.remove("Authorization","Token ".concat(i.key));case 10:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this,t=Object(f.jsxs)("form",{onSubmit:function(t){return e.handleLogout(t,e.state)},children:[Object(f.jsx)("input",{type:"text",placeholder:"username",name:"username",value:this.state.username,onChange:this.handleInput}),Object(f.jsx)("button",{className:"btn-primary",type:"submit",children:"Log Out"})]});return Object(f.jsxs)("div",{className:"container",children:[Object(f.jsxs)("div",{className:"row headerbar",children:[Object(f.jsx)("div",{className:"col-8",children:Object(f.jsx)(v,{})}),Object(f.jsx)("div",{className:"col-2",children:!0===this.state.isLoggedIn?Object(f.jsx)("p",{children:"Welcome, logged in person!"}):null}),Object(f.jsx)("div",{className:"col-2",children:t})]}),Object(f.jsxs)("div",{className:"row",children:[Object(f.jsx)("div",{className:"col-8",children:!1===this.state.isLoggedIn?Object(f.jsx)(g,{}):null}),Object(f.jsx)("div",{className:"col-4",children:!0===this.state.isLoggedIn?Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)("p",{children:"Welcome! Please make a profile to leave a comment."}),Object(f.jsx)(x,{})]}):null})]})]})}}]),n}(a.Component)),w=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,23)).then((function(t){var n=t.getCLS,a=t.getFID,s=t.getFCP,r=t.getLCP,i=t.getTTFB;n(e),a(e),s(e),r(e),i(e)}))};i.a.render(Object(f.jsx)(s.a.StrictMode,{children:Object(f.jsx)(y,{})}),document.getElementById("root")),w()}},[[22,1,2]]]);
//# sourceMappingURL=main.b09538b3.chunk.js.map