(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{102:function(e,a,r){},103:function(e,a,r){},104:function(e,a,r){},105:function(e,a,r){"use strict";r.r(a);var t=r(0),n=r.n(t),o=r(25),s=r.n(o),i=(r(60),r(3)),c=r(47),l=r(14),u=r(48),m=r(40),p=r(49),d=r.n(p),g=r(1),h={error:"",isAuth:!1,token:"",refreshToken:"",userId:"",expiresIn:null,username:"",imageUrl:"",loading:!1,success:!1},f=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:h,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"SUCCESS_REFRESH_AUTH":return Object(g.a)({},e,{isAuth:!0,token:a.payload.data.refreshToken.token,expiresIn:a.payload.data.refreshToken.expiresIn,username:a.payload.data.refreshToken.username,imageUrl:a.payload.data.refreshToken.imageUrl,loading:!1,error:""});case"LOGIN_START":return Object(g.a)({},e,{loading:!0});case"LOGIN_SUCCESS":return Object(g.a)({},e,{loading:!1,isAuth:!0,success:!0,token:a.payload.data.login.token,refreshToken:a.payload.data.login.refreshToken,userId:a.payload.data.login.userId,expiresIn:a.payload.data.login.expiresIn,username:a.payload.data.login.username,imageUrl:a.payload.data.login.imageUrl,error:""});case"LOGIN_FAIL":return Object(g.a)({},e,{error:a.payload.message,isAuth:!1,token:"",refreshToken:"",userId:"",expiresIn:null,username:"",imageUrl:"",loading:!1});case"CREATE_USER_START":return Object(g.a)({},e,{loading:!0});case"CREATE_USER_SUCCESS":return Object(g.a)({},e,{isAuth:!0,token:a.payload.data.createUser.token,refreshToken:a.payload.data.createUser.refreshToken,userId:a.payload.data.createUser.userId,expiresIn:a.payload.data.createUser.expiresIn,username:a.payload.data.createUser.username,imageUrl:a.payload.data.createUser.imageUrl,loading:!1,success:!0,error:""});case"CREATE_USER_FAIL":return Object(g.a)({},e,{error:a.payload.message,isAuth:!1,token:"",refreshToken:"",userId:"",expiresIn:null,username:"",imageUrl:"",loading:!1});case"LOGOUT_SUCCESS":return{error:"",isAuth:!1,token:"",refreshToken:"",userId:"",expiresIn:null,username:"",imageUrl:"",loading:!1,success:!1};case"LOGOUyAIL":return Object(g.a)({},e,{error:a.payload.message,loading:!1});case"CLEAR_ERROR":return Object(g.a)({},e,{error:""});default:return Object(g.a)({},e)}},E=r(41),v=function(e){return{type:"THUMP_DOWN",payload:e}},y=function(e){return{type:"THUMP_UP",payload:e}},b=function(e){return{type:"UPDATE_SINGLE_IMAGE_THUMP_UP",payload:e}},w=function(e){return{type:"UPDATE_SINGLE_IMAGE_THUMP_DOWN",payload:e}},U={loading:!1,images:[],error:""},I=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:U,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"THUMP_BEGIN":return Object(g.a)({},e,{loading:!0});case"THUMP_UP":var r=Object(E.a)(e.images),t=r.findIndex((function(e){return e.imageId.toString()===a.payload.data.thumpUpMutation.imageId.toString()}));return t>-1&&(r[t].thumpUp=a.payload.data.thumpUpMutation.thumpUp,r[t].thumpDown=a.payload.data.thumpUpMutation.thumpDown),Object(g.a)({},e,{images:r,loading:!1});case"THUMP_DOWN":var n=Object(E.a)(e.images),o=n.findIndex((function(e){return e.imageId.toString()===a.payload.data.thumpDownMutation.imageId.toString()}));return o>-1&&(n[o].thumpUp=a.payload.data.thumpDownMutation.thumpUp,n[o].thumpDown=a.payload.data.thumpDownMutation.thumpDown),Object(g.a)({},e,{images:n,loading:!1});case"START_FETCH_LIST":return Object(g.a)({},e,{loading:!0});case"SUCCESS_FETCH_LIST":return Object(g.a)({},e,{loading:!1,images:a.payload.images.data.imageList});case"FAIL_FETCH_LIST":return Object(g.a)({},e,{loading:!1,error:a.payload.error.message});default:return e}},O={loading:!1,error:"",imageId:"",imageUrl:"",creator:{},description:"",category:"",createdAt:null,thumpUp:{thumpUpCount:null,userActionThumpUp:[]},thumpDown:{thumpUpCount:null,userActionThumpUp:[]},success:!1},S=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:O,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"SINGLE_IMAGE_FETCH_STARTS":return Object(g.a)({},e,{loading:!0});case"SINGLE_IMAGE_FETCH_SUCCESS":return Object(g.a)({},e,{loading:!1,error:null,imageUrl:a.payload.result.data.singleImage.imageUrl,imageId:a.payload.result.data.singleImage.imageId,creator:a.payload.result.data.singleImage.creator,description:a.payload.result.data.singleImage.description,category:a.payload.result.data.singleImage.category,createdAt:a.payload.result.data.singleImage.createdAt,thumpUp:a.payload.result.data.singleImage.thumpUp,thumpDown:a.payload.result.data.singleImage.thumpDown,success:!0});case"SINGLE_IMAGE_FETCH_FAILS":return Object(g.a)({},e,{loading:!1,error:a.payload.error.message,success:!1});case"UPLOAD_STARTS":return Object(g.a)({},e,{error:null,loading:!0});case"UPLOAD_SUCCESS":return Object(g.a)({},e,{loading:!1,error:null,imageUrl:a.payload.result.data.uploadImage.imageUrl,imageId:a.payload.result.data.uploadImage.imageId,creator:a.payload.result.data.uploadImage.creator,description:a.payload.result.data.uploadImage.description,category:a.payload.result.data.uploadImage.category,createdAt:a.payload.result.data.uploadImage.createdAt,thumpUp:a.payload.result.data.uploadImage.thumpUp,thumpDown:a.payload.result.data.uploadImage.thumpDown,success:!0});case"UPLOAD_FAIL":return Object(g.a)({},e,{loading:!1,error:a.payload.error.message,success:!1});case"UPDATE_SINGLE_IMAGE_THUMP_UP":var r=a.payload.data.thumpUpMutation;return Object(g.a)({},e,{imageId:r.imageId,thumpUp:r.thumpUp,thumpDown:r.thumpDown,loading:!1});case"UPDATE_SINGLE_IMAGE_THUMP_DOWN":var t=a.payload.data.thumpDownMutation;return Object(g.a)({},e,{imageId:t.imageId,thumpUp:t.thumpUp,thumpDown:t.thumpDown,loading:!1});default:return e}},N=r(50),T={key:"root",storage:d.a,whitelist:["auth"]},j=Object(l.combineReducers)({auth:f,images:I,singleImage:S}),C=Object(m.a)(T,j),_=Object(l.createStore)(C,Object(N.composeWithDevTools)(Object(l.applyMiddleware)(u.a))),A=Object(m.b)(_),k=r(37),D=r.n(k),x=(r(68),function(){return n.a.createElement("div",{className:"loading"},n.a.createElement(D.a,null)," ")}),L=r(15),R=r(13),P=r(22),F=r(2),G=r.n(F),M=function(e,a,r){var t=new FormData;return t.append("image",r),function(r){var n,o,s,i,c,l,u;return G.a.async((function(m){for(;;)switch(m.prev=m.next){case 0:return m.prev=0,r({type:"CREATE_USER_START"}),console.log("starting"),m.next=5,G.a.awrap(fetch("/api/create-user",{method:"POST",body:t}));case 5:if((n=m.sent).ok){m.next=10;break}if(422!==n.status){m.next=9;break}throw new Error("Invalid Input");case 9:throw new Error("An error occured");case 10:return m.next=12,G.a.awrap(n.json());case 12:return o=m.sent,s=o.imageUrl,i=o.imagePath,c={query:"\n            mutation createFunc($username: String!, $password: String!, $imageUrl: String!, $imagePath: String!){\n                createUser(userData: {username: $username, password: $password, imageUrl: $imageUrl, imagePath: $imagePath}){\n                    token\n                    refreshToken\n                    userId\n                    expiresIn\n                    username\n                    imageUrl\n                }\n            }\n            ",variables:{username:e,password:a,imageUrl:s,imagePath:i}},m.next=18,G.a.awrap(fetch("/graphql",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(c)}));case 18:return l=m.sent,m.next=21,G.a.awrap(l.json());case 21:if(!(u=m.sent).errors){m.next=26;break}if(422!==u.errors[0].status){m.next=25;break}throw new Error(u.errors[0].message);case 25:throw new Error("A server error occured!");case 26:r({type:"CREATE_USER_SUCCESS",payload:u}),m.next=32;break;case 29:m.prev=29,m.t0=m.catch(0),r({type:"CREATE_USER_FAIL",payload:m.t0});case 32:case"end":return m.stop()}}),null,null,[[0,29]])}},q=r(53),H=function(){return n.a.createElement(q.SyncLoader,null)},$=(r(44),function(e){var a=e.handleSignup,r=Object(i.c)(),t=Object(i.d)((function(e){return e.auth})),o=t.error,s=t.success,c=t.loading;return n.a.createElement(P.a,{initialValues:{password:"",username:"",image:null},validate:function(e){var a={};if(e.username)if(e.username.length<4)a.username="Username should be at least four characters long";else if(e.password)if(e.password.length<4)a.password="Password should be at least four characters long";else if(e.image){if(e.image){var r=e.image.name.split("."),t=r[r.length-1];["png","jpg","jpeg"].includes(t)||(a.image="The uploaded image is not in a supported image format")}}else a.image="Image is required";else a.password="Password is required";else a.username="Username is required";return a},onSubmit:function(e){return r(M(e.username,e.password,e.image))}},(function(e){return n.a.createElement("div",{className:"form-wrapper"},n.a.createElement("div",{className:"form_control"},n.a.createElement("div",{className:"signup"},"SIGNUP"),n.a.createElement("form",{onSubmit:e.handleSubmit},n.a.createElement("div",{className:"username-wrapper"},n.a.createElement("label",{htmlFor:"username"}),n.a.createElement("i",{className:"fa fa-user icon"}),n.a.createElement("input",{id:"username",name:"username",type:"text",placeholder:"Username",onChange:e.handleChange,onBlur:e.handleBlur,values:e.values.username})),n.a.createElement("div",{className:"form-error"},e.touched.username&&e.errors.username?n.a.createElement("div",null,e.errors.username):null),n.a.createElement("div",{className:"password-wrapper"},n.a.createElement("label",{htmlFor:"password"}),n.a.createElement("i",{className:"fa fa-key icon"}),n.a.createElement("input",{id:"password",name:"password",type:"password",placeholder:"Password",onChange:e.handleChange,onBlur:e.handleBlur})),n.a.createElement("div",{className:"form-error"},e.touched.password&&e.errors.password?n.a.createElement("div",null,e.errors.password):null),n.a.createElement("div",{className:"image-wrapper"},n.a.createElement("i",{className:"fas fa-upload icon"}),n.a.createElement("label",{htmlFor:"image",className:"customed-upload"},n.a.createElement("input",{id:"image",name:"image",type:"file",onChange:function(a){e.setFieldValue("image",a.currentTarget.files[0])},onBlur:e.handleBlur}),n.a.createElement("div",{className:"upload-label"},"Upload image"))),n.a.createElement("div",{className:"form-error"},e.touched.image&&e.errors.image?e.errors.image:null,e.values.image&&n.a.createElement("div",{className:"image-name"},e.values.image.name)),n.a.createElement("div",{className:"cancel-signup-wrapper"},n.a.createElement("div",{className:"cancel-signup",onClick:a},"Cancel"),n.a.createElement("button",{className:"signup-submit",type:"submit"},c?n.a.createElement("div",{className:"load"},n.a.createElement(H,null)):"Submit"))),o&&n.a.createElement("div",{className:"reducer-error"},o),s&&n.a.createElement("div",{className:"reducer-success"},"You have successfully created an account")))}))}),B=r(30),J=r(31),z=r(34),W=r(32),Y=r(35),V=r(21),K=(r(91),r(54)),Q=r.n(K),X=function(e){var a=Object(i.d)((function(e){return e.images.error})),r=Object(i.d)((function(e){return e.auth.userId}));Object(t.useEffect)((function(){"You are not authorized"===a&&e.handleLogin()}),[a]);var o=e.image,s=new Date(parseInt(o.createdAt)).toJSON(),c=Q()(s).fromNow(),l=null,u=null;return r&&o&&(l=!!o.thumpUp.userActionThumpUp.find((function(e){return e._id===r}))),o.thumpDown.userActionThumpDown&&(u=!!o.thumpDown.userActionThumpDown.find((function(e){return e._id===r}))),n.a.createElement("div",{key:o.imageId,className:"card-wrapper "+(e.isDetailsCard&&"details_card"),onClick:function(){e.detailsRedirect&&e.detailsRedirect(o.imageId)}},n.a.createElement("section",{className:"creator"},n.a.createElement("div",{className:"creator-image-wrapper"},n.a.createElement("img",{src:"/static/".concat(o.creator.imageUrl),alt:"creator"})),n.a.createElement("div",{className:"username"},o.creator.username)),n.a.createElement("section",{className:"image-url"},n.a.createElement("img",{src:"/static/".concat(o.imageUrl),alt:"share"})),n.a.createElement("section",{className:"data-description"},n.a.createElement("div",{className:"thump"},n.a.createElement("div",{className:"thump",onClick:function(a){a.stopPropagation(),e.handleThumpUp(o.imageId)}},n.a.createElement("i",{className:"far fa-thumbs-up thumpup-icon "+(l?"thumped":"")}),n.a.createElement("div",{className:"thump-count "},o.thumpUp.thumpUpCount)),n.a.createElement("div",{className:"thump",onClick:function(a){a.stopPropagation(),e.handleThumpDown(o.imageId)}},n.a.createElement("i",{class:"far fa-thumbs-down thumpdown-icon "+(u?"thumped":"")}),n.a.createElement("div",{className:"thump-count "},o.thumpDown.thumpDownCount))),n.a.createElement("div",{className:"description"},o.description)),n.a.createElement("div",{className:"time-category"},n.a.createElement("div",{className:"moment-time"},c),n.a.createElement("div",{className:"category"},o.category)))},Z=function(e){return function(a){var r,t,n;return G.a.async((function(o){for(;;)switch(o.prev=o.next){case 0:return o.prev=0,a({type:"SINGLE_IMAGE_FETCH_STARTS"}),r={query:"\n            query single($_id: ID!){\n                singleImage(_id: $_id){\n                    imageUrl\n                    imageId\n                    creator {\n                        username\n                        imageUrl\n                    }\n                    description\n                    category\n                    createdAt\n                    thumpUp {\n                        thumpUpCount\n                        userActionThumpUp {\n                            _id\n                        }\n                    }\n                    thumpDown {\n                        thumpDownCount\n                        userActionThumpDown{\n                            _id\n                        }\n                    }  \n                }\n            }",variables:{_id:e}},o.next=5,G.a.awrap(fetch("/graphql",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(r)}));case 5:return t=o.sent,o.next=8,G.a.awrap(t.json());case 8:if(!(n=o.sent).errors){o.next=13;break}if(404!==n.errors[0].status){o.next=12;break}throw new Error("The selected image is not found");case 12:throw new Error("A server error occured");case 13:a({type:"SINGLE_IMAGE_FETCH_SUCCESS",payload:{result:n}}),o.next=19;break;case 16:o.prev=16,o.t0=o.catch(0),a({type:"SINGLE_IMAGE_FETCH_FAILS",payload:{error:o.t0}});case 19:case"end":return o.stop()}}),null,null,[[0,16]])}},ee=(r(93),function(e){var a=Object(t.useState)(""),r=Object(L.a)(a,2),o=r[0],s=r[1],c=Object(t.useState)(""),l=Object(L.a)(c,2),u=l[0],m=l[1],p=(Object(i.d)((function(e){return e.auth})),Object(V.g)());return Object(t.useEffect)((function(){var a=e.userImageUrl,r="/avatar.svg";a&&(r="/static/".concat(a)),m(r)}),[e.userImageUrl]),n.a.createElement("div",{className:"header"},n.a.createElement("div",{className:"header-image"},n.a.createElement("img",{src:u})),n.a.createElement("div",{className:"search-header"},n.a.createElement("form",{onSubmit:function(){o.trim().length}},n.a.createElement("input",{placeholder:"Search for image",type:"text",onChange:function(e){return s(e.target.value)}}))),n.a.createElement("div",{className:"share-image",onClick:function(){p.push("/upload")}},n.a.createElement("img",{src:"/shareFile.png",alt:"share a image"}),n.a.createElement("div",{className:"photo-string"},"Photo")))}),ae=(r(95),function(e){return n.a.createElement("div",{className:"error-page"},e.error)}),re=function(e,a){var r=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];return function(t){var n,o,s;return G.a.async((function(i){for(;;)switch(i.prev=i.next){case 0:return n=r?{query:"\n            mutation thumpUp($imageId: ID!){\n                thumpUpMutation(imageId: $imageId){\n                    thumpUp{\n                        thumpUpCount\n                        userActionThumpUp{\n                            _id\n                        }\n                    }\n\n                    imageId\n                    thumpDown{\n                        thumpDownCount\n                        userActionThumpDown{\n                            _id\n                        }\n                    }\n\n                }\n            }",variables:{imageId:e}}:{query:"\n            mutation thumpDown($imageId: ID!){\n                thumpDownMutation(imageId: $imageId){\n                    thumpUp{\n                        thumpUpCount\n                        userActionThumpUp{\n                            _id\n                        }\n                    }\n                    imageId\n                    thumpDown{\n                        thumpDownCount\n                        userActionThumpDown{\n                            _id\n                        }\n                    }\n\n                }\n            }",variables:{imageId:e}},i.prev=1,i.next=4,G.a.awrap(fetch("/graphql",{method:"POST",headers:{"Content-Type":"application/json",Authorization:"Bearer "+a},body:JSON.stringify(n)}));case 4:return o=i.sent,i.next=7,G.a.awrap(o.json());case 7:if(!(s=i.sent).errors){i.next=12;break}if(401!==s.errors[0].status){i.next=11;break}throw Error("You are not authorized");case 11:throw Error("Image not found");case 12:r?(t(b(s)),t(y(s))):(t(w(s)),t(v(s))),i.next=18;break;case 15:i.prev=15,i.t0=i.catch(1),console.log(i.t0);case 18:case"end":return i.stop()}}),null,null,[[1,15]])}},te=(r(96),r(97),function(){return n.a.createElement("div",{className:"footer-wrapper"},n.a.createElement("section",{className:"website-wrapper"},n.a.createElement("div",{className:"name-footer"},"gidiShare"),n.a.createElement("div",{className:"social-media"},n.a.createElement("a",{href:"https://github.com/AbrahamMayowa"},n.a.createElement("i",{class:"fab fa-github media-icon"})),n.a.createElement("a",{href:"https://twitter.com/mayowa_life"},n.a.createElement("i",{class:"fab fa-twitter media-icon"})))),n.a.createElement("section",{className:"copywrite"},"\xa9 2020 GidiShare. All Right Reserved"))}),ne=function(e){function a(){var e,r;Object(B.a)(this,a);for(var t=arguments.length,n=new Array(t),o=0;o<t;o++)n[o]=arguments[o];return(r=Object(z.a)(this,(e=Object(W.a)(a)).call.apply(e,[this].concat(n)))).handleThumpUp=function(e){var a=r.props.auth.token;a?r.props.dispatch(re(e,a)):r.props.handleLogin()},r.handleThumpDown=function(e){var a=r.props.auth.token;a?r.props.dispatch(re(e,a,!1)):r.props.handleLogin()},r}return Object(Y.a)(a,e),Object(J.a)(a,[{key:"componentDidMount",value:function(){var e=this.props.match.params.id;this.props.dispatch(Z(e))}},{key:"componentDidUpdate",value:function(e){this.props.auth.success!==e.auth.success&&this.props.handleLogin()}},{key:"render",value:function(){var e=this.props.singleImage,a=Object(g.a)({},e),r=a.loading,t=a.error,o=Object(g.a)({},this.props.auth).imageUrl;return r?n.a.createElement(x,null):t?n.a.createElement(ae,{error:t}):n.a.createElement("div",{className:"details"},n.a.createElement(ee,{userImageUrl:o,handleLogin:this.props.handleLogin}),n.a.createElement(X,{image:e,handleLogin:this.props.handleLogin,handleThumpUp:this.handleThumpUp,handleThumpDown:this.handleThumpDown,isDetailsCard:!0}),n.a.createElement(te,null))}}]),a}(n.a.Component),oe=Object(V.h)(Object(i.b)((function(e){return{singleImage:e.singleImage,auth:e.auth}}))(ne)),se=(r(45),function(e,a,r,t){return function(n){var o,s,i,c,l,u;return G.a.async((function(m){for(;;)switch(m.prev=m.next){case 0:return m.prev=0,n({type:"UPLOAD_STARTS"}),(o=new FormData).append("image",e),m.next=6,G.a.awrap(fetch("/api/upload",{method:"PUT",headers:{Authorization:"Bearer "+t},body:o}));case 6:if((s=m.sent).ok){m.next=11;break}if(401!==s.status){m.next=10;break}throw new Error("Please log in to upload image");case 10:throw new Error("A server error occured");case 11:return m.next=13,G.a.awrap(s.json());case 13:return i=m.sent,c={query:"\n            mutation uploadMutation($imageUrl: String!, $description: String!, $category: String!){\n                uploadImage(imageUrl: $imageUrl, description: $description, category: $category){\n                    imageUrl\n                    imageId\n                    creator {\n                        username\n                        imageUrl\n                    }\n                    description\n                    category\n                    createdAt\n                    thumpUp {\n                        thumpUpCount\n                        userActionThumpUp {\n                            _id\n                        }\n                    }\n                    thumpDown {\n                        thumpDownCount\n                        userActionThumpDown{\n                            _id\n                        }\n                    }\n                }\n            }",variables:{imageUrl:i.imageUrl,description:a,category:r}},m.next=17,G.a.awrap(fetch("/graphql",{method:"POST",headers:{Authorization:"Bearer "+t,"Content-Type":"application/json"},body:JSON.stringify(c)}));case 17:return l=m.sent,m.next=20,G.a.awrap(l.json());case 20:if(!(u=m.sent).errors){m.next=25;break}if(401!==u.errors[0].status){m.next=24;break}throw new Error("You need to log in");case 24:throw new Error("Please provide valid input");case 25:n({type:"UPLOAD_SUCCESS",payload:{result:u}}),m.next=31;break;case 28:m.prev=28,m.t0=m.catch(0),n({type:"UPLOAD_FAIL",payload:{error:m.t0}});case 31:case"end":return m.stop()}}),null,null,[[0,28]])}}),ie=r(33),ce=r.n(ie),le=function(){return function(e){var a,r,t;return G.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,e({type:"START_FETCH_LIST"}),a={query:"\n            query images{\n                imageList {\n                    imageUrl\n                    imageId\n                    creator {\n                        username\n                        imageUrl\n                    }\n                    description\n                    category\n                    createdAt\n                    thumpUp {\n                        thumpUpCount\n                        userActionThumpUp {\n                            _id\n                        }\n                    }\n                    \n                    thumpDown {\n                        thumpDownCount\n                        userActionThumpDown {\n                            _id\n                        }\n                    }\n\n                }\n\n            }\n            "},n.next=5,G.a.awrap(fetch("/graphql",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(a)}));case 5:return r=n.sent,n.next=8,G.a.awrap(r.json());case 8:if(!(t=n.sent).errors){n.next=13;break}if(404!==t.errors[0].status){n.next=12;break}throw new Error("No image found");case 12:throw new Error("A server error occured");case 13:e({type:"SUCCESS_FETCH_LIST",payload:{images:t}}),n.next=19;break;case 16:n.prev=16,n.t0=n.catch(0),e({type:"FAIL_FETCH_LIST",payload:{error:n.t0}});case 19:case"end":return n.stop()}}),null,null,[[0,16]])}},ue=function(e){var a=Object(i.c)(),r=Object(i.d)((function(e){return e.singleImage})),o=Object(i.d)((function(e){return e.auth.token})),s=r.error,c=(r.success,r.loading),l=(r.imageId,Object(t.useState)({category:{error:"",value:""},description:{error:"",value:""},image:{error:"",value:null}})),u=Object(L.a)(l,2),m=u[0],p=u[1],d=function(e){e.persist();var a=e.target;if("category"===a.name)a.value?p((function(e){return Object(g.a)({},e,{category:{error:"",value:a.value}})})):p((function(e){return Object(g.a)({},e,{category:{error:"Category is required",value:""}})}));else if("description"===a.name)a.value?p((function(e){return Object(g.a)({},e,{description:{error:"",value:a.value}})})):p((function(e){return Object(g.a)({},e,{description:{error:"Description is required",value:""}})}));else if("image"===a.name)if(a.files[0]){if(a.files[0]){["image/png","image/jpeg","image/jpg"].includes(a.files[0].type)?p((function(e){return Object(g.a)({},e,{image:{error:"",value:a.files[0]}})})):p((function(e){return Object(g.a)({},e,{image:{error:"Only png, jpeg or jpg image mimetype is supported"}})}))}}else p((function(e){return Object(g.a)({},e,{image:{error:"Image is required",value:""}})}))};return n.a.createElement("div",{className:"form-wrapper"},n.a.createElement("div",{className:"form_control"},n.a.createElement("div",{className:"signup"},"Upload Photo"),n.a.createElement("form",{onSubmit:function(e){e.preventDefault();var r=Object(g.a)({},m),t=r.category,n=r.description,s=r.image;t.value?n.value?s.value?t.value&&n.value&&s.value&&a(se(s.value,n.value,t.value,o)):p((function(e){return Object(g.a)({},e,{image:{error:"Upload a supported photo format",value:""}})})):p((function(e){return Object(g.a)({},e,{description:{error:"description is requird",value:""}})})):p((function(e){return Object(g.a)({},e,{category:{error:"Category is required",value:""}})}))}},n.a.createElement("div",{className:"category-wrapper"},n.a.createElement("label",{htmlFor:"category-option"},"Image category"),n.a.createElement("select",{name:"category",onChange:d,className:"category"},n.a.createElement("option",{selected:!0,value:"love"},"Love"),n.a.createElement("option",{value:"celebration"},"Celebration"),n.a.createElement("option",{value:"happiness"},"Happiness"),n.a.createElement("option",{value:"sadness"},"Sadness"),n.a.createElement("option",{value:"throwback"},"ThrowBack"),n.a.createElement("option",{value:"general"},"General")),n.a.createElement("div",{className:"form-error"},m.category.error?n.a.createElement("div",null,m.category.error):null)),n.a.createElement("div",{className:"description-wrapper"},n.a.createElement("label",{htmlFor:"description"},"Caption"),n.a.createElement(ce.a,{name:"description",rows:6,onChange:d,className:"description"})),n.a.createElement("div",{className:"form-error"},m.description.error?n.a.createElement("div",null,m.description.error):null),n.a.createElement("div",{className:"image-upload"},n.a.createElement("input",{id:"image",name:"image",type:"file",onChange:d})),n.a.createElement("div",{className:"form-error"},m.image.error?m.image.error:null,m.image.value&&n.a.createElement("div",{className:"image-name"},m.image.value.name)),n.a.createElement("div",{className:"cancel-signup-wrapper"},n.a.createElement("button",{className:"upload-submit",type:"submit"},c?n.a.createElement("div",{className:"loading"},n.a.createElement(H,null)):"Submit"))),s&&n.a.createElement("div",{className:"reducer-error"},s)))},me=function(e,a){return function(r){var t,n,o;return G.a.async((function(s){for(;;)switch(s.prev=s.next){case 0:return r({type:"LOGIN_START"}),t={query:"\n            mutation loginMutation($username: String!, $password: String!){\n                login(username: $username, password: $password){\n                    token\n                    refreshToken\n                    userId\n                    expiresIn\n                    username\n                    imageUrl\n                }\n            }",variables:{username:e,password:a}},s.prev=2,s.next=5,G.a.awrap(fetch("/graphql",{headers:{"Content-Type":"application/json"},method:"POST",body:JSON.stringify(t)}));case 5:return n=s.sent,s.next=8,G.a.awrap(n.json());case 8:if(!(o=s.sent).errors){s.next=13;break}if(404!==o.errors[0].status){s.next=12;break}throw new Error("Invalid password or username");case 12:throw new Error("A server error occured!");case 13:r({type:"LOGIN_SUCCESS",payload:o}),s.next=19;break;case 16:s.prev=16,s.t0=s.catch(2),r({type:"LOGIN_FAIL",payload:s.t0});case 19:case"end":return s.stop()}}),null,null,[[2,16]])}},pe=function(e){var a=e.handleLogin,r=Object(i.d)((function(e){return e.auth})),t=r.error,o=r.success,s=r.loading,c=Object(i.c)(),l=function(){o&&a()};return n.a.createElement("div",null,n.a.createElement(P.a,{initialValues:{password:"",username:""},validate:function(e){var a={};return e.username?e.username.length<4?a.username="Username should be at least four characters long":e.password?e.password.length<4&&(a.password="Password should be at least four characters long"):a.password="Password is required":a.username="Username is required",a},onSubmit:function(e){return c(me(e.username,e.password))}},(function(e){return n.a.createElement("div",{className:"form-wrapper"},n.a.createElement("div",{className:"form_control"},n.a.createElement("div",{className:"signup"},"Login"),n.a.createElement("form",{onSubmit:e.handleSubmit},n.a.createElement("div",{className:"username-wrapper"},n.a.createElement("label",{htmlFor:"username"}),n.a.createElement("i",{className:"fa fa-user icon"}),n.a.createElement("input",{id:"username",name:"username",type:"text",placeholder:"Username",onChange:e.handleChange,onBlur:e.handleBlur,values:e.values.username})),n.a.createElement("div",{className:"form-error"},e.touched.username&&e.errors.username?n.a.createElement("div",null,e.errors.username):null),n.a.createElement("div",{className:"password-wrapper"},n.a.createElement("label",{htmlFor:"password"}),n.a.createElement("i",{className:"fa fa-key icon"}),n.a.createElement("input",{id:"password",name:"password",type:"password",placeholder:"Password",onChange:e.handleChange,onBlur:e.handleBlur})),n.a.createElement("div",{className:"form-error"},e.touched.password&&e.errors.password?n.a.createElement("div",null,e.errors.password):null),n.a.createElement("div",{className:"cancel-signup-wrapper"},n.a.createElement("div",{className:"cancel-signup",onClick:a},"Cancel"),n.a.createElement("button",{className:"signup-submit",onClick:l,type:"submit"},s?n.a.createElement("div",{className:"load"},n.a.createElement(H,null)):"Submit")),t&&n.a.createElement("div",{className:"reducer-error"},t))))})))},de=function(e){var a=e.handleUpload,r=Object(i.c)(),o=Object(i.d)((function(e){return e.singleImage})),s=Object(i.d)((function(e){return e.auth.token})),c=o.error,l=o.success,u=o.loading,m=o.imageId,p=Object(t.useState)({category:{error:"",value:""},description:{error:"",value:""},image:{error:"",value:null}}),d=Object(L.a)(p,2),h=d[0],f=d[1],E=function(e){e.persist();var a=e.target;if("category"===a.name)a.value?f((function(e){return Object(g.a)({},e,{category:{error:"",value:a.value}})})):f((function(e){return Object(g.a)({},e,{category:{error:"Category is required",value:""}})}));else if("description"===a.name)a.value?f((function(e){return Object(g.a)({},e,{description:{error:"",value:a.value}})})):f((function(e){return Object(g.a)({},e,{description:{error:"Description is required",value:""}})}));else if("image"===a.name)if(a.files[0]){if(a.files[0]){["image/png","image/jpeg","image/jpg"].includes(a.files[0].type)?f((function(e){return Object(g.a)({},e,{image:{error:"",value:a.files[0]}})})):f((function(e){return Object(g.a)({},e,{image:{error:"Only png, jpeg or jpg image mimetype is supported"}})}))}}else f((function(e){return Object(g.a)({},e,{image:{error:"Image is required",value:""}})}))};return l&&!c?n.a.createElement(V.a,{to:"/details/".concat(m)}):n.a.createElement("div",{className:"form-wrapper"},n.a.createElement("div",{className:"form_control"},n.a.createElement("div",{className:"signup"},"Upload Photo"),n.a.createElement("form",{onSubmit:function(e){e.preventDefault();var a=Object(g.a)({},h),t=a.category,n=a.description,o=a.image;t.value?n.value?o.value?t.value&&n.value&&o.value&&r(se(o.value,n.value,t.value,s)):f((function(e){return Object(g.a)({},e,{image:{error:"Upload a supported photo format",value:""}})})):f((function(e){return Object(g.a)({},e,{description:{error:"description is requird",value:""}})})):f((function(e){return Object(g.a)({},e,{category:{error:"Category is required",value:""}})}))}},n.a.createElement("div",{className:"category-wrapper"},n.a.createElement("label",{htmlFor:"category-option"},"Image category"),n.a.createElement("select",{name:"category",onChange:E,className:"category"},n.a.createElement("option",{selected:!0,value:"Love"},"Love"),n.a.createElement("option",{value:"Celebration"},"Celebration"),n.a.createElement("option",{value:"Happiness"},"Happiness"),n.a.createElement("option",{value:"Sadness"},"Sadness"),n.a.createElement("option",{value:"Throwback"},"ThrowBack"),n.a.createElement("option",{value:"General"},"General")),n.a.createElement("div",{className:"form-error"},h.category.error?n.a.createElement("div",null,h.category.error):null)),n.a.createElement("div",{className:"description-wrapper"},n.a.createElement("label",{htmlFor:"description"},"Caption"),n.a.createElement(ce.a,{name:"description",rows:6,onChange:E,className:"description"})),n.a.createElement("div",{className:"form-error"},h.description.error?n.a.createElement("div",null,h.description.error):null),n.a.createElement("div",{className:"image-upload"},n.a.createElement("input",{id:"image",name:"image",type:"file",onChange:E})),n.a.createElement("div",{className:"form-error"},h.image.error?h.image.error:null,h.image.value&&n.a.createElement("div",{className:"image-name"},h.image.value.name)),n.a.createElement("div",{className:"cancel-signup-wrapper"},n.a.createElement("div",{className:"cancel-signup",onClick:a},"Cancel"),n.a.createElement("button",{className:"upload-submit",type:"submit"},u?n.a.createElement("div",{className:"load"},n.a.createElement(H,null)):"Submit"))),c&&n.a.createElement("div",{className:"reducer-error"},c)))},ge=(r(102),r(103),function(){return n.a.createElement("div",{className:"no-item"},"No image found")}),he=(r(104),function(e){function a(e){var r;return Object(B.a)(this,a),(r=Object(z.a)(this,Object(W.a)(a).call(this,e))).handleThumpUp=function(e){var a=r.props.auth.token;console.log(e),a?r.props.dispatch(re(e,a)):r.props.handleLogin()},r.handleThumpDown=function(e){var a=r.props.auth.token;a?r.props.dispatch(re(e,a,!1)):r.props.handleLogin()},r.handleDetailsRedirect=function(e){r.props.history.push("/details/".concat(e))},r}return Object(Y.a)(a,e),Object(J.a)(a,[{key:"componentDidMount",value:function(){this.props.dispatch(le())}},{key:"componentDidUpdate",value:function(e){this.props.auth.success!==e.auth.success&&this.props.handleLogin()}},{key:"render",value:function(){var e=this,a=this.props.images,r=a.images,t=a.loading,o=this.props.auth.imageUrl,s=n.a.createElement(ge,null);return r.length>0&&(s=r.map((function(a){return n.a.createElement(X,{image:a,detailsRedirect:e.handleDetailsRedirect,handleLogin:e.props.handleLogin,handleThumpUp:e.handleThumpUp,handleThumpDown:e.handleThumpDown})}))),n.a.createElement("div",null,n.a.createElement("section",{className:"card-session"},n.a.createElement(ee,{userImageUrl:o,handleUpload:this.props.handleUploadForm,handleLogin:this.props.handleLogin}),t?n.a.createElement("div",{className:"loading"},n.a.createElement(x,null)):s),n.a.createElement(te,null))}}]),a}(n.a.Component)),fe=Object(V.h)(Object(i.b)((function(e){return{auth:e.auth,images:e.images}}))(he)),Ee=function(e){return function(a){var r,t,n;return G.a.async((function(o){for(;;)switch(o.prev=o.next){case 0:return r={query:"\n            mutation {\n                logout\n            }"},o.prev=1,a({type:"LOGOUT_START"}),o.next=5,G.a.awrap(fetch("/graphql",{method:"POST",headers:{"Content-Type":"application/json",Authorization:"Bearer "+e},body:JSON.stringify(r)}));case 5:return t=o.sent,o.next=8,G.a.awrap(t.json());case 8:if(!(n=o.sent).errors){o.next=13;break}if(401!==n.errors[0].status){o.next=12;break}throw Error("You are not authorized");case 12:throw Error("User not found");case 13:a({type:"LOGOUT_SUCCESS",payload:n}),o.next=19;break;case 16:o.prev=16,o.t0=o.catch(1),a({type:"LOGIN_FAIL",payload:o.t0});case 19:case"end":return o.stop()}}),null,null,[[1,16]])}},ve=function(e,a){return function(r){var t,n,o;return G.a.async((function(s){for(;;)switch(s.prev=s.next){case 0:return s.prev=0,r({type:"BEGINS_REFRESH_AUTH"}),t={query:"\n            mutation refresh($refreshToken: String!, $userId: ID!){\n                refreshToken(refreshToken: $refreshToken, userId: $userId){\n                    expiresIn\n                    token\n                    username\n                    imageUrl\n                }\n            }\n            ",variables:{refreshToken:e,userId:a}},s.next=5,G.a.awrap(fetch("/graphql",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}));case 5:return n=s.sent,s.next=8,G.a.awrap(n.json());case 8:if(!(o=s.sent).errors){s.next=13;break}if(401!==o.errors[0].status){s.next=12;break}throw new Error("Please log in to your account");case 12:throw new Error("The login user is not exist");case 13:r({type:"SUCCESS_REFRESH_AUTH",payload:o}),s.next=19;break;case 16:s.prev=16,s.t0=s.catch(0),r({type:"FAILURE_REFRESH_AUTH",payload:s.t0});case 19:case"end":return s.stop()}}),null,null,[[0,16]])}};var ye=function(){var e=Object(t.useState)(!1),a=Object(L.a)(e,2),r=a[0],o=a[1],s=Object(t.useState)(!1),c=Object(L.a)(s,2),l=c[0],u=c[1],m=Object(t.useState)(!1),p=Object(L.a)(m,2),d=p[0],g=p[1],h=Object(i.d)((function(e){return e.auth})),f=h.isAuth,E=h.refreshToken,v=h.userId,y=h.token,b=h.expiresIn,w=Object(i.c)();Object(t.useEffect)((function(){o(!1)}),[f]);var U=function(){w(ve(E,v))};Object(t.useEffect)((function(){if(E){var e,a=new Date(parseInt(b)).getTime();if(Date.now()>a)return e=setTimeout(U,100),function(){return clearTimeout(e)}}}),[]),Object(t.useEffect)((function(){if(E){var e=setInterval(U,72e4);return function(){return clearTimeout(e)}}}),[E]);var I=function(){r?(w({type:"CLEAR_ERROR"}),o(!1)):o(!0)},O=function(){l?(w({type:"CLEAR_ERROR"}),u(!1)):u(!0)},S=function(){d?(w({type:"CLEAR_ERROR"}),g(!1)):g(!0)},N=n.a.createElement("div",{className:"logout-and-signin"},n.a.createElement("ul",null,n.a.createElement("li",{className:"login nav-box",onClick:I},"Login"),n.a.createElement("li",{className:"sign-up nav-box",onClick:O},"Signup")));return n.a.createElement("div",null,n.a.createElement("nav",{className:"nav-wrapper"},n.a.createElement(R.b,{className:"website-name",to:"/"},"gidiShare"),f?n.a.createElement("div",{className:"logout nav-box",onClick:function(){A.purge(),w(Ee(y))}},"Logout"):N),n.a.createElement("div",{className:"main-body"},n.a.createElement("section",{className:l?"signup-modal-open":"signup-modal-close"},n.a.createElement($,{handleSignup:O})),n.a.createElement("section",{className:r?"login-modal-open":"login-modal-close"},n.a.createElement(pe,{handleLogin:I})),n.a.createElement("section",{className:d?"upload-open":"upload-close"},n.a.createElement(de,{handleUpload:S})),n.a.createElement(V.d,null,n.a.createElement(V.b,{path:"/details/:id",exact:!0,render:function(e){return n.a.createElement(oe,Object.assign({handleLogin:I,handleUploadForm:S},e))}}),"/>",n.a.createElement(V.b,{path:"/upload",exact:!0,component:ue}),n.a.createElement(V.b,{path:"/",exact:!0,render:function(e){return n.a.createElement(fe,Object.assign({handleLogin:I,handleUploadForm:S},e))}}),"/>")))};var be=function(){return n.a.createElement(i.a,{store:_},n.a.createElement(c.a,{loading:n.a.createElement(x,null),persistor:A},n.a.createElement(ye,null)))};s.a.render(n.a.createElement(R.a,null,n.a.createElement(be,null)),document.getElementById("root"))},44:function(e,a,r){},45:function(e,a,r){},56:function(e,a,r){e.exports=r(105)},60:function(e,a,r){},68:function(e,a,r){},91:function(e,a,r){},93:function(e,a,r){},95:function(e,a,r){},96:function(e,a,r){},97:function(e,a,r){}},[[56,1,2]]]);
//# sourceMappingURL=main.4cf16608.chunk.js.map