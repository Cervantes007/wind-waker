(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{369:function(t,s,e){"use strict";e.r(s);var n=e(43),a=Object(n.a)({},(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"the-actions"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#the-actions"}},[t._v("#")]),t._v(" The Actions")]),t._v(" "),e("p",[t._v("A Wind Waker App is all about "),e("code",[t._v("Actions")]),t._v(".\nIt's a simple way to figure out how to build your Application,\nonly thinking in the "),e("code",[t._v("Actions")]),t._v(" you need.")]),t._v(" "),e("p",[t._v("All incoming requests are map to the corresponding Action.\nAn "),e("code",[t._v("Action")]),t._v(" is responsible to handle a request and send back a response to client.")]),t._v(" "),e("h2",{attrs:{id:"define-your-first-action"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#define-your-first-action"}},[t._v("#")]),t._v(" Define your first Action")]),t._v(" "),e("p",[t._v("To define an "),e("code",[t._v("Action")]),t._v(" you need to create a file using the "),e("code",[t._v(".actions.ts")]),t._v(" suffix,\nthen the "),e("code",[t._v("Application")]),t._v(" will load it automatically.\nFor example let's create a "),e("code",[t._v("user.actions.ts")]),t._v(" file.")]),t._v(" "),e("div",{staticClass:"language-typescript extra-class"},[e("pre",{pre:!0,attrs:{class:"language-typescript"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("UserActions")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    @"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("Action")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("getUsers")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'List of users'")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),e("p",[t._v("Break down the "),e("code",[t._v("Action")]),t._v(" file:")]),t._v(" "),e("ul",[e("li",[t._v("Create a file named "),e("code",[t._v("user.actions.ts")]),t._v(". The "),e("code",[t._v(".actions.ts")]),t._v(" suffix is "),e("em",[e("strong",[t._v("required")])]),t._v(".")]),t._v(" "),e("li",[t._v("Use the "),e("code",[t._v("@Action()")]),t._v(" decorator to mark methods as Application Actions.")]),t._v(" "),e("li",[t._v("Now "),e("code",[t._v("getUsers()")]),t._v(" is an "),e("code",[t._v("Action")]),t._v(" and will be executed for request with path equal to "),e("code",[t._v("/getUsers")]),t._v(".")])]),t._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[t._v("Notice")]),t._v(" "),e("p",[t._v("The method's name will be used as the "),e("code",[t._v("Action")]),t._v(" name.")])]),t._v(" "),e("div",{staticClass:"custom-block warning"},[e("p",{staticClass:"custom-block-title"},[t._v("Warning")]),t._v(" "),e("p",[t._v("The Methods not decorated with "),e("code",[t._v("@Action")]),t._v(" will be no expose as Application Actions.")])]),t._v(" "),e("h2",{attrs:{id:"multiples-actions"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#multiples-actions"}},[t._v("#")]),t._v(" Multiples Actions")]),t._v(" "),e("p",[t._v("Action files usually define many actions,\nyou just needs to define class methods and decorated it with "),e("code",[t._v("@Action()")]),t._v(".")]),t._v(" "),e("p",[t._v("The next example will define "),e("code",[t._v("getUsers")]),t._v(", "),e("code",[t._v("getUser")]),t._v(" and "),e("code",[t._v("createUser")]),t._v(" actions.")]),t._v(" "),e("div",{staticClass:"language-typescript extra-class"},[e("pre",{pre:!0,attrs:{class:"language-typescript"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// user.actions.ts")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("UserActions")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    @"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("Action")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("getUsers")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'List of users'")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    \n    @"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("Action")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("getUser")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'User details'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n    @"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("Action")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("createUser")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'User created!'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),e("h2",{attrs:{id:"actions-arguments"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#actions-arguments"}},[t._v("#")]),t._v(" Actions Arguments")]),t._v(" "),e("p",[t._v("Each "),e("code",[t._v("Action")]),t._v(" method can use some useful decorator\nto collect needed information to build your "),e("code",[t._v("Action")]),t._v(" logic.")]),t._v(" "),e("p",[t._v("The available Action Arguments Decorators are:")]),t._v(" "),e("ul",[e("li",[e("code",[t._v("@Input()")]),t._v(": provides the request data.")]),t._v(" "),e("li",[e("code",[t._v("@Ctx()")]),t._v(": provide the Context for current "),e("code",[t._v("Action")]),t._v(".")]),t._v(" "),e("li",[e("code",[t._v("@Req()")]),t._v(": provide the entire Request data.")]),t._v(" "),e("li",[e("code",[t._v("@Res()")]),t._v(": provide the entire Request data.")]),t._v(" "),e("li",[e("code",[t._v("@Headers()")]),t._v(": provide Request Headers.")])]),t._v(" "),e("h3",{attrs:{id:"using-input"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#using-input"}},[t._v("#")]),t._v(" Using @Input")])])}),[],!1,null,null,null);s.default=a.exports}}]);