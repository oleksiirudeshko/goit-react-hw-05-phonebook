(this["webpackJsonpgoit-react-hw-05-phonebook"]=this["webpackJsonpgoit-react-hw-05-phonebook"]||[]).push([[0],{12:function(t,e,n){t.exports={enter:"ContactList_enter__6gFuU",enterActive:"ContactList_enterActive__3Y0_4",exit:"ContactList_exit__tgUod",exitActive:"ContactList_exitActive__YNrD1",listItem:"ContactList_listItem__1IjZ3"}},14:function(t,e,n){t.exports={enter:"notify_enter__2OB6-",enterActive:"notify_enterActive__3vDMA",exit:"notify_exit__pnWq9",exitActive:"notify_exitActive__1WHVL",notify:"notify_notify__-X8IW"}},18:function(t,e,n){t.exports={appear:"logo_appear__25MTa",appearActive:"logo_appearActive__3RAug"}},19:function(t,e,n){t.exports={enter:"filter_enter__2ykYh",enterActive:"filter_enterActive__39LyD",exit:"filter_exit__b3GwR",exitActive:"filter_exitActive__KJYfW"}},27:function(t,e,n){},30:function(t,e,n){"use strict";n.r(e);var a=n(0),c=n(1),i=n(9),r=n.n(i),o=(n(27),n(20)),s=n(3),u=n(4),l=n(8),m=n(7),j=n(32);var h=function(t){var e=t.children;return Object(a.jsx)("section",{children:e})},b=n(34),f=n(12),v=n.n(f),d=function(t){var e=t.name,n=t.number,c=t.onRemove;return Object(a.jsxs)("li",{className:v.a.listItem,children:[Object(a.jsxs)("span",{children:[e," ",n]}),Object(a.jsx)("button",{type:"button",className:"deleteBtn",onClick:c,children:"x"})]})},p=function(t){var e=t.contacts,n=t.onRemovecontact,c=e.length>0||void 0;return Object(a.jsx)(b.a,{in:{check:c}.toString(),component:"ul",className:"List",children:e.map((function(t){var e=t.id,c=t.name,i=t.number;return Object(a.jsx)(j.a,{in:!0,classNames:v.a,timeout:250,children:Object(a.jsx)(d,{name:c,number:i,onRemove:function(){return n(e)}})},e)}))})},x=n(17),O=n(2),_=n.n(O),y=n(18),g=n.n(y),C={name:"",number:""},A=function(t){Object(l.a)(n,t);var e=Object(m.a)(n);function n(){var t;Object(s.a)(this,n);for(var a=arguments.length,c=new Array(a),i=0;i<a;i++)c[i]=arguments[i];return(t=e.call.apply(e,[this].concat(c))).state=C,t.handleChange=function(e){var n=e.target,a=n.name,c=n.value;t.setState(Object(x.a)({},a,c))},t.handleSubmit=function(e){e.preventDefault(),t.props.onAddContact(t.state),t.setState(C)},t}return Object(u.a)(n,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var t=this.state,e=t.name,n=t.number;return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(j.a,{in:!0,appear:!0,timeout:500,classNames:g.a,unmountOnExit:!0,children:Object(a.jsx)("h1",{children:"Phonebook"})}),Object(a.jsxs)("form",{onSubmit:this.handleSubmit,children:[Object(a.jsxs)("label",{htmlFor:"name",children:["Name",Object(a.jsx)("br",{}),Object(a.jsx)("input",{type:"text",value:e,onChange:this.handleChange,name:"name"})]}),Object(a.jsxs)("label",{htmlFor:"number",children:["Number",Object(a.jsx)("br",{}),Object(a.jsx)("input",{type:"text",value:n,onChange:this.handleChange,name:"number"})]}),Object(a.jsx)("button",{className:"add_contact",type:"submit",children:"Add contact"})]})]})}}]),n}(c.Component);function N(t){var e=t.value,n=t.onChangeFilter;return Object(a.jsxs)("div",{className:"find",children:[Object(a.jsx)("span",{children:"Find contacts by name"}),Object(a.jsx)("input",{type:"text",value:e,onChange:function(t){var e=t.target;return n(e.value)}})]})}p.PropTypes={name:_.a.string,number:_.a.string};var S=n(14),k=n.n(S),F=function(t){Object(l.a)(n,t);var e=Object(m.a)(n);function n(){var t;Object(s.a)(this,n);for(var a=arguments.length,c=new Array(a),i=0;i<a;i++)c[i]=arguments[i];return(t=e.call.apply(e,[this].concat(c))).state={timer:null},t}return Object(u.a)(n,[{key:"componentDidUpdate",value:function(){clearTimeout(this.timer)}},{key:"render",value:function(){var t=this;return this.timer=setTimeout(this.props.onNotify.bind(this),3e3),Object(a.jsx)("div",{className:k.a.notify,onClick:function(){return t.props.onNotify()},children:"Contact alredy exist!"})}}]),n}(c.Component),w=n(33),L=n(19),D=n.n(L),I=function(t){Object(l.a)(n,t);var e=Object(m.a)(n);function n(){var t;Object(s.a)(this,n);for(var a=arguments.length,c=new Array(a),i=0;i<a;i++)c[i]=arguments[i];return(t=e.call.apply(e,[this].concat(c))).state={contacts:[],filter:"",unic:""},t.addContact=function(e){var n=e.name,a=e.number,c={id:Object(w.a)(),name:n,number:a};t.state.contacts.find((function(t){return t.name===n}))?t.setState({unic:"true"}):t.setState((function(t){return{contacts:[].concat(Object(o.a)(t.contacts),[c])}}))},t.removeContact=function(e){t.setState((function(t){return{contacts:t.contacts.filter((function(t){return t.id!==e}))}}))},t.changeFilter=function(e){t.setState({filter:e})},t.getFilterName=function(){var e=t.state,n=e.contacts,a=e.filter;return n.filter((function(t){return t.name.toLowerCase().includes(a.toLowerCase())}))},t.removeNotification=function(){t.setState({unic:""})},t}return Object(u.a)(n,[{key:"componentDidMount",value:function(){var t=localStorage.getItem("contacts");t&&this.setState({contacts:JSON.parse(t)})}},{key:"componentDidUpdate",value:function(t){t.contacts!==this.state.contacts&&localStorage.setItem("contacts",JSON.stringify(this.state.contacts))}},{key:"render",value:function(){var t=this.state,e=t.filter,n=t.contacts,c=t.unic,i=this.getFilterName();return Object(a.jsxs)(h,{children:[Object(a.jsx)(j.a,{in:!!c||void 0,classNames:k.a,timeout:250,unmountOnExit:!0,children:Object(a.jsx)(F,{onNotify:this.removeNotification})}),Object(a.jsx)(A,{onAddContact:this.addContact}),Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(j.a,{in:n.length>0||void 0,classNames:D.a,timeout:250,unmountOnExit:!0,children:Object(a.jsx)(N,{value:e,onChangeFilter:this.changeFilter})}),Object(a.jsx)(j.a,{in:!0,timeout:0,unmountOnExit:!0,children:Object(a.jsx)(p,{contacts:i,onRemovecontact:this.removeContact})})]})]})}}]),n}(c.Component);r.a.render(Object(a.jsx)(I,{}),document.querySelector("#root"))}},[[30,1,2]]]);
//# sourceMappingURL=main.00583248.chunk.js.map