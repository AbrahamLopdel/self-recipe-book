(this["webpackJsonplibro-de-recetas"]=this["webpackJsonplibro-de-recetas"]||[]).push([[0],{173:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n(27),r=n.n(c),s=(n(67),n(5)),i=n(7),o=n.n(i),l=n(10),u=n(9),d=n(22),j=n.n(d);n(75),n(79);j.a.initializeApp({apiKey:"AIzaSyC3ABGnq18FkN6ZGmd9mXoq_JsMfsTNxAQ",authDomain:"react-app-cursos-83213.firebaseapp.com",projectId:"react-app-cursos-83213",storageBucket:"react-app-cursos-83213.appspot.com",messagingSenderId:"865497940683",appId:"1:865497940683:web:02e75307acef3b453d914e"});var b=j.a.firestore(),p=new j.a.auth.GoogleAuthProvider,m=n(13),f=n(8),O="[Auth] Login",h="[Auth] Logout",x="[UI] Set Error",v="[UI] Remove Error",g="[UI] Start loading",y="[UI] Finish loading",N="[Notes] New note",_="[Notes] Set active note",w="[Notes] Load notes",C="[Notes] Updated note",S="[Notes] Delete note",k="[Notes] Logout Cleaning",I="[Notes] Active Cleaning",E="[Notes] Notes Filtered By Title",L="[Notes] Notes Filtered By Descripcion",A="[Notes] Notes Filtered By Food",D="[Notes] Notes Filtered By Time",F="[Notes] Notes Filtered By Anything",B=function(e){return{type:x,payload:e}},J=function(){return{type:y}},P=n(17),T=n.n(P),q=n(3),U=function(){var e=Object(l.a)(o.a.mark((function e(t){var n,a,c;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://api.cloudinary.com/v1_1/cloudy-xdehgtfvch/upload",(n=new FormData).append("upload_preset","react-journal"),n.append("file",t),e.prev=4,e.next=7,fetch("https://api.cloudinary.com/v1_1/cloudy-xdehgtfvch/upload",{method:"POST",body:n});case 7:if(!(a=e.sent).ok){e.next=15;break}return e.next=11,a.json();case 11:return c=e.sent,e.abrupt("return",c.secure_url);case 15:return e.next=17,a.json();case 17:throw e.sent;case 18:e.next=23;break;case 20:return e.prev=20,e.t0=e.catch(4),e.abrupt("return",null);case 23:case"end":return e.stop()}}),e,null,[[4,20]])})));return function(t){return e.apply(this,arguments)}}(),M=function(){var e=Object(l.a)(o.a.mark((function e(t){var n,a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b.collection("/".concat(t,"/journal/notes")).get();case 2:return n=e.sent,a=[],n.forEach((function(e){a.push(Object(q.a)({id:e.id},e.data()))})),e.abrupt("return",a);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),R=function(e,t){return{type:_,payload:Object(q.a)({id:e},t)}},G=function(e,t){return{type:N,payload:Object(q.a)({id:e},t)}},W=function(e){return function(){var t=Object(l.a)(o.a.mark((function t(n){var a;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,M(e);case 2:a=t.sent,n(Y(a));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},Y=function(e){return{type:w,payload:e}},z=function(e){return function(){var t=Object(l.a)(o.a.mark((function t(n,a){var c,r,s;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(c=a().auth.uid,e.url||delete e.url,delete(r=Object(q.a)({},e)).id,s={title:"",body:"",steps:"",food:""},e.title!==s.title||e.body!==s.body||e.steps!==s.steps||e.food!==s.food){t.next=11;break}return t.next=8,b.doc("/".concat(c,"/journal/notes/").concat(e.id)).delete();case 8:n(K(e.id)),t.next=13;break;case 11:return t.next=13,b.doc("/".concat(c,"/journal/notes/").concat(e.id)).update(r);case 13:n(X(e.id,r)),T.a.fire("Saved",e.title,"success");case 15:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}()},X=function(e,t){return{type:C,payload:{id:e,note:Object(q.a)({id:e},t)}}},K=function(e){return{type:S,payload:e}},V=function(e){return{type:D,payload:e}},H=function(e,t){return function(n){return n({type:g}),j.a.auth().signInWithEmailAndPassword(e,t).then((function(e){var t=e.user;n(Q(t.uid,t.displayName)),n(J())})).catch((function(e){n(J()),T.a.fire("Error","El usuario no se encontr\xf3 o la contrase\xf1a es incorrecta","error")}))}},Q=function(e,t){return{type:O,payload:{uid:e,displayName:t}}},Z=function(){return{type:h}},$=n(30),ee=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=Object(a.useState)(e),n=Object(u.a)(t,2),c=n[0],r=n[1],s=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:e;r(t)},i=function(e){var t=e.target;r(Object(q.a)(Object(q.a)({},c),{},Object($.a)({},t.name,t.value)))};return[c,i,s]},te=n(0),ne=function(){var e=Object(s.b)(),t=Object(s.c)((function(e){return e.ui})).loading,n=ee({email:"recetas@gmail.com",password:"123456"}),a=Object(u.a)(n,2),c=a[0],r=a[1],i=c.email,o=c.password;return Object(te.jsxs)(te.Fragment,{children:[Object(te.jsx)("h3",{className:"auth__title",children:"Login"}),Object(te.jsxs)("form",{onSubmit:function(t){t.preventDefault(),e(H(i,o))},className:"animate__animated animate__fadeIn",children:[Object(te.jsx)("input",{type:"text",placeholder:"Email",name:"email",className:"auth__input",autoComplete:"off",value:i,onChange:r}),Object(te.jsx)("input",{type:"password",placeholder:"Password",name:"password",className:"auth__input",autoComplete:"off",value:o,onChange:r}),Object(te.jsx)("button",{type:"submit",className:"btn btn-primary btn-block",disabled:t,children:"Login"}),Object(te.jsxs)("div",{className:"auth__social-network",onClick:function(){e((function(e){j.a.auth().signInWithPopup(p).then((function(t){var n=t.user;e(Q(n.uid,n.displayName))}))}))},children:[Object(te.jsx)("p",{children:"Login with social networks"}),Object(te.jsxs)("div",{className:"google-btn",children:[Object(te.jsx)("div",{className:"google-icon-wrapper",children:Object(te.jsx)("img",{className:"google-icon",src:"https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg",alt:"google button"})}),Object(te.jsx)("p",{className:"btn-text",children:Object(te.jsx)("b",{children:"Sign in with google"})})]})]}),Object(te.jsx)(m.b,{to:"/auth/register",className:"link",children:"Create new account"})]})]})},ae=n(60),ce=n.n(ae),re=function(){var e=Object(s.b)(),t=Object(s.c)((function(e){return e.ui})).msgError,n=ee({name:"",email:"",password:"",password2:""}),a=Object(u.a)(n,2),c=a[0],r=a[1],i=c.name,d=c.email,b=c.password,p=c.password2,f=function(){return 0===i.trim().length?(e(B("Nombre requerido")),!1):ce.a.isEmail(d)?b!==p||b.length<6?(e(B("La contrase\xf1a debe coincidir y ser mayor a 5 caracteres")),!1):(e({type:v}),!0):(e(B("El email no es v\xe1lido")),!1)};return Object(te.jsxs)(te.Fragment,{children:[Object(te.jsx)("h3",{className:"auth__title",children:"Register"}),Object(te.jsxs)("form",{onSubmit:function(t){t.preventDefault(),f()&&e(function(e,t,n){return function(a){j.a.auth().createUserWithEmailAndPassword(e,t).then(function(){var e=Object(l.a)(o.a.mark((function e(t){var c;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=t.user,e.next=3,c.updateProfile({displayName:n});case 3:a(Q(c.uid,c.displayName));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).catch((function(t){console.log(t),T.a.fire("Error","El usuario ".concat(e," ya est\xe1 registrado"),"error")}))}}(d,b,i))},className:"animate__animated animate__fadeIn",children:[t&&Object(te.jsx)("div",{className:"auth__alert-error",children:t}),Object(te.jsx)("input",{type:"text",placeholder:"Name",name:"name",className:"auth__input",autoComplete:"off",value:i,onChange:r}),Object(te.jsx)("input",{type:"text",placeholder:"Email",name:"email",className:"auth__input",autoComplete:"off",value:d,onChange:r}),Object(te.jsx)("input",{type:"password",placeholder:"Password",name:"password",className:"auth__input",value:b,onChange:r}),Object(te.jsx)("input",{type:"password",placeholder:"Confirm password",name:"password2",className:"auth__input",value:p,onChange:r}),Object(te.jsx)("button",{type:"submit",className:"btn btn-primary btn-block mb-1",children:"Register"})]}),Object(te.jsx)(m.b,{to:"/auth/login",className:"link float-right",children:"Already register?"})]})},se=function(){return Object(te.jsx)("div",{className:"auth__main",children:Object(te.jsx)("div",{className:"auth__box-container",children:Object(te.jsxs)(f.d,{children:[Object(te.jsx)(f.b,{path:"/auth/login",component:ne}),Object(te.jsx)(f.b,{path:"/auth/register",component:re}),Object(te.jsx)(f.a,{to:"/auth/login"})]})})})},ie=n(32),oe=["isAuthenticated","component"],le=function(e){var t=e.isAuthenticated,n=e.component,a=Object(ie.a)(e,oe);return Object(te.jsx)(f.b,Object(q.a)(Object(q.a)({},a),{},{component:function(e){return t?Object(te.jsx)(f.a,{to:"/"}):Object(te.jsx)(n,Object(q.a)({},e))}}))},ue=["isAuthenticated","component"],de=function(e){var t=e.isAuthenticated,n=e.component,a=Object(ie.a)(e,ue);return Object(te.jsx)(f.b,Object(q.a)(Object(q.a)({},a),{},{component:function(e){return t?Object(te.jsx)(n,Object(q.a)({},e)):Object(te.jsx)(f.a,{to:"/auth/login"})}}))},je=n(31),be=n.n(je),pe=function(e){var t=e.id,n=e.date,a=e.food,c=e.title,r=e.time,i=e.body,o=e.steps,l=e.vegetarian,u=e.url,d=Object(s.b)(),j=be()(n),b={date:n,food:a,title:c,time:r,body:i,steps:o,vegetarian:l,url:u};return Object(te.jsx)("div",{className:"randomClass",onClick:function(){d(R(t,b))},children:Object(te.jsxs)("div",{className:"recipes__entry pointer animate__animated animate__bounceInLeft animate__faster",children:[u&&Object(te.jsx)("div",{className:"recipes__entry-picture",style:{backgroundSize:"cover",backgroundImage:"url(".concat(u,")")}}),Object(te.jsx)("div",{className:"recipes__entry-body",children:Object(te.jsx)("p",{className:"recipes__entry-title",children:c})}),Object(te.jsxs)("div",{className:"recipes__entry-date-box",children:[Object(te.jsx)("span",{children:j.format("dddd")}),Object(te.jsx)("h4",{children:j.format("DD")})]})]})})},me=function(){var e=Object(s.c)((function(e){return e.notes})).notes;return Object(te.jsx)("div",{className:"recipes__entries",children:e.length>0?e.map((function(e){return Object(te.jsx)(pe,Object(q.a)({},e),e.id)})):Object(te.jsxs)("div",{className:"recipes__empty",children:[Object(te.jsx)("p",{children:"Todav\xeda no tienes recetas en tu recetario"}),Object(te.jsx)("p",{children:"\xa1Crea una cuanto antes!"})]})})},fe=function(e){var t=e.history,n=Object(s.b)(),a=Object(s.c)((function(e){return e.auth})).name;return Object(te.jsxs)("section",{className:"recipes__sidebar",children:[Object(te.jsxs)("div",{className:"recipes__sidebar-navbar",children:[Object(te.jsxs)("h3",{className:"mt-5 ml-5",children:[Object(te.jsx)("i",{className:"far fa-moon"}),Object(te.jsxs)("span",{children:[" ",a]})]}),Object(te.jsx)("button",{className:"btn",onClick:function(){n(function(){var e=Object(l.a)(o.a.mark((function e(t){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,j.a.auth().signOut();case 2:t({type:k}),t(Z());case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())},children:"Logout"})]}),Object(te.jsxs)("div",{className:"recipes__submenu",children:[Object(te.jsxs)("div",{className:"recipes__search-entry",onClick:function(){t.push("/search-recipe")},children:[Object(te.jsx)("i",{className:"fas fa-search fa-1x"}),Object(te.jsx)("p",{className:"mt-1",children:"Buscar recetas"})]}),Object(te.jsxs)("div",{className:"recipes__new-entry",onClick:function(){n(function(){var e=Object(l.a)(o.a.mark((function e(t,n){var a,c,r;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=n().auth.uid,c={title:"",body:"",steps:"",food:"",time:0,vegetarian:!1,date:(new Date).getTime()},e.prev=2,e.next=5,b.collection("".concat(a,"/journal/notes")).add(c);case 5:r=e.sent,t(R(r.id,c)),t(G(r.id,c)),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(2),console.log(e.t0);case 13:case"end":return e.stop()}}),e,null,[[2,10]])})));return function(t,n){return e.apply(this,arguments)}}())},children:[Object(te.jsx)("i",{className:"far fa-calendar-plus fa-1x"}),Object(te.jsx)("p",{className:"mt-1",children:"Nueva receta"})]})]}),Object(te.jsx)(me,{})]})},Oe=function(e){e.history;var t=Object(s.b)(),n=Object(s.c)((function(e){return e.notes})).active,a=be()(n.date);return Object(te.jsxs)("div",{className:"notes__appbar",children:[Object(te.jsx)("i",{className:"far fa-window-close notes__cancel",onClick:function(){var e;t((e=n,function(){var t=Object(l.a)(o.a.mark((function t(n,a){var c,r;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(c=a().auth.uid,r={title:"",body:"",steps:"",food:""},e.title!==r.title||e.body!==r.body||e.steps!==r.steps||e.food!==r.food){t.next=6;break}return t.next=5,b.doc("/".concat(c,"/journal/notes/").concat(e.id)).delete();case 5:n(K(e.id));case 6:n({type:I,payload:null});case 7:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}()))}}),Object(te.jsx)("span",{children:a.format("MMMM Do YYYY")}),Object(te.jsx)("input",{id:"fileSelector",type:"file",name:"file",style:{display:"none"},onChange:function(e){var n=e.target.files[0];n&&t(function(e){return function(){var t=Object(l.a)(o.a.mark((function t(n,a){var c,r;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return c=a().notes.active,T.a.fire({title:"Uploading...",text:"Please wait...",allowOutsideClick:!1,showConfirmButton:!1,willOpen:function(){T.a.showLoading()}}),t.next=4,U(e);case 4:r=t.sent,c.url=r,n(z(c)),T.a.close();case 8:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}()}(n))}}),Object(te.jsxs)("div",{children:[Object(te.jsx)("button",{className:"btn",onClick:function(){document.querySelector("#fileSelector").click()},children:"Picture"}),Object(te.jsx)("button",{className:"btn",onClick:function(){t(z(n))},children:"Save"})]})]})},he=function(e){var t=e.history,n=Object(s.b)(),c=Object(s.c)((function(e){return e.notes})).active,r=Object(a.useState)(!1),i=Object(u.a)(r,2),d=i[0],j=i[1],p=Object(a.useState)([]),m=Object(u.a)(p,2),f=m[0],O=m[1],h=Object(a.useState)(c.vegetarian),x=Object(u.a)(h,2),v=x[0],g=x[1],y=ee(c),N=Object(u.a)(y,3),_=N[0],w=N[1],C=N[2],S=_.body,k=_.title,I=_.steps,E=_.time,L=_.food,A=Object(a.useRef)(c.id),D=Object(a.useState)(1),F=Object(u.a)(D,2),B=F[0],J=F[1];Object(a.useEffect)((function(){v&&(document.querySelector("#vg").checked=!0)}),[v]),Object(a.useEffect)((function(){c.id!==A.current&&(C(c),A.current=c.id)}),[c,C]),Object(a.useEffect)((function(){L&&O(L.split(","))}),[L]),Object(a.useEffect)((function(){n(R(_.id,Object(q.a)(Object(q.a)({},_),{},{vegetarian:v})))}),[_,v,n]);return Object(te.jsxs)("div",{className:"notes__main-content animate__animated animate__fadeIn animate__faster",children:[Object(te.jsx)(Oe,{history:t}),Object(te.jsxs)("div",{className:"notes__content",children:[Object(te.jsx)("input",{type:"text",placeholder:"T\xedtulo de la receta",className:"notes__title-input",autoComplete:"off",name:"title",value:k,onChange:w}),Object(te.jsx)("textarea",{placeholder:"Descripci\xf3n de la receta",className:"notes__textarea notes__textarea-ingredientes",name:"body",value:S,onChange:w}),Object(te.jsx)("textarea",{id:"steps",placeholder:"Pasos a seguir",className:"notes__textarea notes__textarea-ingredientes",name:"steps",value:I,onChange:w,onKeyDown:function(e){"Enter"===e.key&&(J(B+1),document.querySelector("#steps").value=B+". ")}}),Object(te.jsxs)("label",{className:"notes__food",children:[Object(te.jsx)("button",{className:"btn btn-primary btn-focus ".concat(d&&"btn-success"),onClick:function(){j(!d)},children:"Ingredientes:"}),"(Poner ingredientes seguidos de comas)",d?Object(te.jsx)("textarea",{placeholder:"Ingrediente",id:"ingredientes_textarea",className:"notes__time-input",name:"food",value:L,onChange:w}):Object(te.jsx)("ul",{children:f.map((function(e,t){return Object(te.jsx)("li",{children:e},t)}))})]}),Object(te.jsxs)("label",{children:["Duraci\xf3n:",Object(te.jsx)("input",{type:"number",placeholder:"0",className:"notes__time-input",autoComplete:"off",name:"time",value:E,onChange:w})]}),Object(te.jsx)("div",{className:"form-check form-switch ",children:Object(te.jsxs)("label",{className:"form-check-label",children:["Vegetariana",Object(te.jsx)("input",{className:"form-check-input",type:"checkbox",id:"vg",name:"vegetarian",value:v,onClick:function(){g(!v)}})]})}),c.url&&Object(te.jsx)("div",{className:"notes__image",children:Object(te.jsx)("img",{src:c.url,alt:"imagen"})})]}),Object(te.jsx)("button",{className:"btn btn-danger btn-delete",onClick:function(){var e;n((e=c.id,function(){var t=Object(l.a)(o.a.mark((function t(n,a){var c,r;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return c=a().notes.active,t.next=3,T.a.fire({title:'\xbfEst\xe1s seguro de que deseas eliminar la receta "'.concat(c.title?c.title:"Sin nombre",'"?'),showCancelButton:!0,confirmButtonText:"Eliminar"});case 3:if(!t.sent.isConfirmed){t.next=9;break}return r=a().auth.uid,t.next=8,b.doc("/".concat(r,"/journal/notes/").concat(e)).delete();case 8:n(K(e));case 9:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}()))},children:"Delete"})]})},xe=function(e){var t=e.history,n=Object(s.c)((function(e){return e.notes})).active;return Object(te.jsx)("div",{className:"recipes__main-content animate__animated animate__fadeIn",children:Object(te.jsx)("main",{children:n?Object(te.jsx)(he,{history:t}):Object(te.jsx)(fe,{history:t})})})},ve=n(61),ge=n.n(ve),ye=function(e){var t=e.id,n=e.date,a=e.food,c=e.title,r=e.time,i=e.body,o=e.vegetarian,l=e.url,u=Object(s.b)(),d={date:n,food:a,title:c,time:r,body:i,vegetarian:o,url:l};return Object(te.jsx)("div",{className:"card m-3 col",style:{maxWidth:540,maxHeight:300},children:Object(te.jsxs)("div",{className:"row no-gutters",children:[l&&Object(te.jsx)("div",{className:"col-md-4",children:Object(te.jsx)("img",{src:l,className:"card-img",alt:c})}),Object(te.jsxs)("div",{className:l&&"col-md-8",style:{textAlign:"center"},children:[Object(te.jsx)("div",{className:"card-body",children:Object(te.jsx)("h5",{className:"card-title",children:c})}),Object(te.jsx)(m.b,{onClick:function(){u(R(t,d))},to:"/",children:"M\xe1s..."})]})]})})},Ne=function(e){var t=e.history,n=Object(s.b)(),c=Object(f.g)(),r=ge.a.parse(c.search).q,i=void 0===r?"":r,o=Object(a.useState)((function(){return!localStorage.getItem("title")||JSON.parse(localStorage.getItem("title"))})),l=Object(u.a)(o,2),d=l[0],j=l[1],b=Object(a.useState)((function(){return JSON.parse(localStorage.getItem("body"))})),p=Object(u.a)(b,2),m=p[0],O=p[1],h=Object(a.useState)((function(){return JSON.parse(localStorage.getItem("food"))})),x=Object(u.a)(h,2),v=x[0],g=x[1],y=Object(a.useState)((function(){return JSON.parse(localStorage.getItem("time"))})),N=Object(u.a)(y,2),_=N[0],w=N[1],C=ee({search:i}),S=Object(u.a)(C,2),k=S[0],I=S[1],D=k.search,F=Object(s.c)((function(e){return e.notes})).notesFiltered;Object(a.useEffect)((function(){d&&n({type:E,payload:D}),m&&n({type:L,payload:D}),v&&n({type:A,payload:D}),_&&n(V(D)),_&&n(V(D))}),[D,d,m,v,_,n]);return Object(te.jsxs)("div",{className:"recipes__search-recipe",children:[Object(te.jsxs)("div",{className:"recipes__top",children:[Object(te.jsx)("i",{className:"far fa-window-close notes__cancel",onClick:function(){t.push("/")}}),Object(te.jsx)("h1",{children:"Buscador de recetas"})]}),Object(te.jsx)("hr",{}),Object(te.jsxs)("div",{className:"row",children:[Object(te.jsxs)("div",{className:"col-5",children:[Object(te.jsx)("h4",{children:"Buscador de recetas..."}),Object(te.jsx)("hr",{}),Object(te.jsxs)("form",{onSubmit:function(e){e.preventDefault(),t.push("?q=".concat(D))},children:[Object(te.jsxs)("div",{children:[Object(te.jsxs)("div",{className:"btn-group btn-group-toggle",children:[Object(te.jsxs)("label",{className:"btn-filter ".concat(d&&"bg-filtered"),children:[Object(te.jsx)("input",{type:"checkbox",onClick:function(){j(!d),localStorage.setItem("title",JSON.stringify(!d)),_&&(w(!1),localStorage.setItem("time",JSON.stringify(!1)))}})," T\xedtulo"]}),Object(te.jsxs)("label",{className:"btn-filter ".concat(m&&"bg-filtered"),children:[Object(te.jsx)("input",{type:"checkbox",onClick:function(){O(!m),localStorage.setItem("body",JSON.stringify(!m)),_&&(w(!1),localStorage.setItem("time",JSON.stringify(!1)))}})," ","Descripci\xf3n"]}),Object(te.jsxs)("label",{className:"btn-filter ".concat(v&&"bg-filtered"),children:[Object(te.jsx)("input",{type:"checkbox",onClick:function(){g(!v),localStorage.setItem("food",JSON.stringify(!v)),_&&(w(!1),localStorage.setItem("time",JSON.stringify(!1)))}})," ","Ingredientes"]}),Object(te.jsxs)("label",{className:"btn-filter ".concat(_&&"bg-filtered"),children:[Object(te.jsx)("input",{type:"checkbox",onClick:function(){w(!_),localStorage.setItem("time",JSON.stringify(!_)),d&&(j(!1),localStorage.setItem("title",JSON.stringify(!1))),m&&(O(!1),localStorage.setItem("body",JSON.stringify(!1))),v&&(g(!1),localStorage.setItem("food",JSON.stringify(!1)))}})," Tiempo"]})]}),Object(te.jsx)("hr",{})]}),Object(te.jsx)("input",{type:"text",placeholder:"Buscar receta",autoComplete:"off",className:"form-control",name:"search",value:D,onChange:I}),Object(te.jsx)("button",{type:"submit",className:"btn btn-success m-3",children:"Buscar..."})]})]}),Object(te.jsxs)("div",{className:"col-7",children:[Object(te.jsx)("h4",{children:"Resultados"}),Object(te.jsx)("hr",{}),""===i&&Object(te.jsx)("div",{className:"alert alert-info",children:"Busca una receta"}),""!==i&&0===F.length&&Object(te.jsxs)("div",{className:"alert alert-danger",children:["No hay ninguna receta por ",i]}),""!==i&&0!==F.length&&F.map((function(e){return Object(te.jsx)(ye,Object(q.a)({},e),e.id)}))]})]})]})},_e=function(){return Object(te.jsx)("div",{children:Object(te.jsx)("div",{children:Object(te.jsxs)(f.d,{children:[Object(te.jsx)(f.b,{exact:!0,path:"/",component:xe}),Object(te.jsx)(f.b,{exact:!0,path:"/search-recipe",component:Ne}),Object(te.jsx)(f.a,{to:"/"})]})})})},we=function(){var e=Object(s.b)(),t=Object(a.useState)(!0),n=Object(u.a)(t,2),c=n[0],r=n[1],i=Object(a.useState)(!1),d=Object(u.a)(i,2),b=d[0],p=d[1];return Object(a.useEffect)((function(){j.a.auth().onAuthStateChanged(function(){var t=Object(l.a)(o.a.mark((function t(n){return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:(null===n||void 0===n?void 0:n.uid)?(e(Q(n.uid,n.displayName)),p(!0),e(W(n.uid))):p(!1),r(!1);case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())}),[e,r,p]),c?Object(te.jsx)("div",{className:"auth__main",children:Object(te.jsx)("h1",{className:" animate__animated animate__bounce animate__infinite",children:"Cargando..."})}):Object(te.jsx)(m.a,{children:Object(te.jsx)("div",{children:Object(te.jsxs)(f.d,{children:[Object(te.jsx)(le,{path:"/auth",component:se,isAuthenticated:b}),Object(te.jsx)(de,{path:"/",component:_e,isAuthenticated:b}),Object(te.jsx)(f.a,{to:"/auth/login"})]})})})},Ce=n(23),Se=n(62),ke=n(40),Ie={notes:[],notesFiltered:[],active:null},Ee={loading:!1,msgError:null},Le="undefined"!==typeof window&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||Ce.c,Ae=Object(Ce.b)({auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case O:return{uid:t.payload.uid,name:t.payload.displayName};case h:return{};default:return e}},ui:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ee,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case x:return Object(q.a)(Object(q.a)({},e),{},{msgError:t.payload});case v:return Object(q.a)(Object(q.a)({},e),{},{msgError:null});case g:return Object(q.a)(Object(q.a)({},e),{},{loading:!0});case y:return Object(q.a)(Object(q.a)({},e),{},{loading:!1});default:return e}},notes:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ie,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case _:return Object(q.a)(Object(q.a)({},e),{},{active:Object(q.a)({},t.payload)});case I:return Object(q.a)(Object(q.a)({},e),{},{active:null});case N:return Object(q.a)(Object(q.a)({},e),{},{notes:[t.payload].concat(Object(ke.a)(e.notes))});case w:return Object(q.a)(Object(q.a)({},e),{},{notes:Object(ke.a)(t.payload)});case C:return Object(q.a)(Object(q.a)({},e),{},{active:null,notes:e.notes.map((function(e){return e.id===t.payload.id?t.payload.note:e}))});case S:return Object(q.a)(Object(q.a)({},e),{},{active:null,notes:e.notes.filter((function(e){return e.id!==t.payload}))});case k:return Object(q.a)(Object(q.a)({},e),{},{active:null,notes:[]});case E:return Object(q.a)(Object(q.a)({},e),{},{active:null,notesFiltered:e.notes.filter((function(e){return e.title.toLowerCase().includes(t.payload.toLowerCase())}))});case L:return Object(q.a)(Object(q.a)({},e),{},{active:null,notesFiltered:e.notes.filter((function(e){return e.body.toLowerCase().includes(t.payload.toLowerCase())}))});case A:return Object(q.a)(Object(q.a)({},e),{},{active:null,notesFiltered:e.notes.filter((function(e){return e.food.toLowerCase().includes(t.payload.toLowerCase())}))});case D:return Object(q.a)(Object(q.a)({},e),{},{active:null,notesFiltered:e.notes.filter((function(e){return e.time===t.payload}))});case F:return Object(q.a)(Object(q.a)({},e),{},{active:null,notesFiltered:e.notes.filter((function(e){return t.filter.map((function(n){return"title"===n?e.title.toLowerCase().includes(t.payload.toLowerCase()):"body"===n?e.body.toLowerCase().includes(t.payload.toLowerCase()):"food"===n&&e.food.toLowerCase().includes(t.payload.toLowerCase())}))}))});default:return e}}}),De=Object(Ce.d)(Ae,Le(Object(Ce.a)(Se.a))),Fe=function(){return Object(te.jsx)(s.a,{store:De,children:Object(te.jsx)(we,{})})};r.a.render(Object(te.jsx)(Fe,{}),document.getElementById("root"))},67:function(e,t,n){}},[[173,1,2]]]);
//# sourceMappingURL=main.e3ebe964.chunk.js.map