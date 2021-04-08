(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{315:function(t,s,e){t.exports=e.p+"assets/img/wind-waker-actions.47d21024.png"},374:function(t,s,e){"use strict";e.r(s);var n=e(43),a=Object(n.a)({},(function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h1",{attrs:{id:"the-actions"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#the-actions"}},[t._v("#")]),t._v(" The Actions")]),t._v(" "),n("p",[t._v("A Wind Waker App is all about "),n("code",[t._v("Actions")]),t._v(".\nIt's a simple way to figure out how to build your Application,\nonly thinking in the "),n("code",[t._v("Actions")]),t._v(" you need.")]),t._v(" "),n("p",[t._v("All incoming requests are map to the corresponding Action.\nAn "),n("code",[t._v("Action")]),t._v(" is responsible to handle a request and send back a response to client.")]),t._v(" "),n("p",[n("img",{attrs:{src:e(315),alt:"actions"}})]),t._v(" "),n("h2",{attrs:{id:"define-your-first-action"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#define-your-first-action"}},[t._v("#")]),t._v(" Define your first Action")]),t._v(" "),n("p",[t._v("To define an "),n("code",[t._v("Action")]),t._v(" you need to create a file using the "),n("code",[t._v(".actions.ts")]),t._v(" suffix,\nthen the "),n("code",[t._v("Application")]),t._v(" will load it automatically.\nFor example let's create a "),n("code",[t._v("user.actions.ts")]),t._v(" file.")]),t._v(" "),n("div",{staticClass:"language-typescript extra-class"},[n("pre",{pre:!0,attrs:{class:"language-typescript"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("UserActions")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    @"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("Action")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("getUsers")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'List of users'")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),n("p",[t._v("Break down the "),n("code",[t._v("Action")]),t._v(" file:")]),t._v(" "),n("ul",[n("li",[t._v("Create a file named "),n("code",[t._v("user.actions.ts")]),t._v(". The "),n("code",[t._v(".actions.ts")]),t._v(" suffix is "),n("em",[n("strong",[t._v("required")])]),t._v(".")]),t._v(" "),n("li",[t._v("Use the "),n("code",[t._v("@Action()")]),t._v(" decorator to mark methods as Application Actions.")]),t._v(" "),n("li",[t._v("Now "),n("code",[t._v("getUsers()")]),t._v(" is an "),n("code",[t._v("Action")]),t._v(" and will be executed for request with path equal to "),n("code",[t._v("/getUsers")]),t._v(".")])]),t._v(" "),n("div",{staticClass:"custom-block tip"},[n("p",{staticClass:"custom-block-title"},[t._v("Notice")]),t._v(" "),n("p",[t._v("The method's name will be used as the "),n("code",[t._v("Action")]),t._v(" name.")])]),t._v(" "),n("div",{staticClass:"custom-block warning"},[n("p",{staticClass:"custom-block-title"},[t._v("Warning")]),t._v(" "),n("p",[t._v("The Methods not decorated with "),n("code",[t._v("@Action")]),t._v(" will be no expose as Application Actions.")])]),t._v(" "),n("h2",{attrs:{id:"multiples-actions"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#multiples-actions"}},[t._v("#")]),t._v(" Multiples Actions")]),t._v(" "),n("p",[t._v("Action files usually define many actions,\nyou just needs to define class methods and decorated it with "),n("code",[t._v("@Action()")]),t._v(".")]),t._v(" "),n("p",[t._v("The next example will define "),n("code",[t._v("getUsers")]),t._v(", "),n("code",[t._v("getUser")]),t._v(" and "),n("code",[t._v("createUser")]),t._v(" actions.")]),t._v(" "),n("div",{staticClass:"language-typescript extra-class"},[n("pre",{pre:!0,attrs:{class:"language-typescript"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// user.actions.ts")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("UserActions")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    @"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("Action")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("getUsers")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'List of users'")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    \n    @"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("Action")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("getUser")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'User details'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n    @"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("Action")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("createUser")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'User created!'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),n("h2",{attrs:{id:"actions-arguments"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#actions-arguments"}},[t._v("#")]),t._v(" Actions Arguments")]),t._v(" "),n("p",[t._v("Each "),n("code",[t._v("Action")]),t._v(" method can use some useful decorator\nto collect needed information to build your "),n("code",[t._v("Action")]),t._v(" logic.")]),t._v(" "),n("p",[t._v("The available Action Arguments Decorators are:")]),t._v(" "),n("ul",[n("li",[n("code",[t._v("@Input()")]),t._v(": provides the request data.")]),t._v(" "),n("li",[n("code",[t._v("@Ctx()")]),t._v(": provide the Context for current "),n("code",[t._v("Action")]),t._v(".")]),t._v(" "),n("li",[n("code",[t._v("@Req()")]),t._v(": provide the entire Request data.")]),t._v(" "),n("li",[n("code",[t._v("@Res()")]),t._v(": provide the entire Request data.")]),t._v(" "),n("li",[n("code",[t._v("@Headers()")]),t._v(": provide Request Headers.")])]),t._v(" "),n("h3",{attrs:{id:"using-input"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#using-input"}},[t._v("#")]),t._v(" Using @Input")])])}),[],!1,null,null,null);s.default=a.exports}}]);