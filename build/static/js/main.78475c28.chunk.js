(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{12:function(e,t,n){e.exports=n(37)},37:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),r=n(11),u=n.n(r),o=n(2),i=n(3),l=n.n(i),m="/api/contacts",f=function(){return l.a.get(m).then(function(e){return e.data})},d=function(e){return l.a.post(m,e).then(function(e){return e.data})},s=function(e,t){return l.a.put("".concat(m,"/").concat(e),t).then(function(e){return e.data})},h=function(e){return l.a.delete("".concat(m,"/").concat(e.id))},b=function(e){var t=e.contact,n=e.deleteContact;return c.a.createElement("li",{key:t.name},t.name," ",t.number," ",c.a.createElement("button",{onClick:function(){return n(t)}},"poista"))},v=function(e){var t=e.contacts,n=e.filter,a=e.deleteContact,r=t.filter(function(e){return e.name.toLocaleLowerCase().includes(n.toLocaleLowerCase())});return c.a.createElement("ul",null,r.map(function(e){return c.a.createElement(b,{key:e.name,contact:e,deleteContact:a})}))},E=function(e){var t=e.filter,n=e.handleFilter;return c.a.createElement("div",null,"rajaa n\xe4ytett\xe4vi\xe4 ",c.a.createElement("input",{value:t,onChange:n}))},p=function(e){return c.a.createElement("form",{onSubmit:e.addcontact},c.a.createElement("div",null,"nimi: ",c.a.createElement("input",{value:e.newName,onChange:e.handleNameChange})),c.a.createElement("div",null,"numero: ",c.a.createElement("input",{value:e.newNumber,onChange:e.handleNumberChange})),c.a.createElement("div",null,c.a.createElement("button",{type:"submit"},"lis\xe4\xe4")))},g=function(e){var t=e.message,n={color:e.style?"red":"green",background:"lightgrey",fontSize:"20px",borderStyle:"solid",borderSadius:"5px",padding:"10px",marginBottom:"10px"};return null===t?null:c.a.createElement("div",{style:n},t)},j=function(){var e=Object(a.useState)([]),t=Object(o.a)(e,2),n=t[0],r=t[1],u=Object(a.useState)(""),i=Object(o.a)(u,2),l=i[0],m=i[1],b=Object(a.useState)(""),j=Object(o.a)(b,2),w=j[0],C=j[1],O=Object(a.useState)(""),k=Object(o.a)(O,2),y=k[0],S=k[1],N=Object(a.useState)(null),x=Object(o.a)(N,2),L=x[0],P=x[1],B=Object(a.useState)(!1),F=Object(o.a)(B,2),H=F[0],J=F[1];Object(a.useEffect)(function(){f().then(function(e){return r(e)}).catch(function(e){z("Error"),J(!0)})},[]);var z=function(e){P(e),setTimeout(function(){P(null)},2e3)};return c.a.createElement("div",null,c.a.createElement("h2",null,"Puhelinluettelo"),c.a.createElement(g,{message:L,style:H}),c.a.createElement(E,{filter:y,handleFilter:function(e){S(e.target.value)}}),c.a.createElement("h3",null,"lis\xe4\xe4 uusi"),c.a.createElement(p,{handleNameChange:function(e){m(e.target.value)},newName:l,handleNumberChange:function(e){C(e.target.value)},newNumber:w,addcontact:function(e){if(e.preventDefault(),n.filter(function(e){return e.name===l}).length){if(window.confirm("".concat(l," on jo luettelossa, korvataanko vanha numero uudella?"))){var t=n.find(function(e){return e.name===l}),a={name:l,number:w,id:t.id};s(t.id,a).then(function(e){return r(n.map(function(e){return e.id===t.id?a:e}))},z("P\xe4ivitettiin numero henkil\xf6lle ".concat(l))).catch(function(e){z("Henkil\xf6 ".concat(t.name," oli jo poistettu")),J(!0)})}}else d({name:l,number:w}).then(function(e){return r(n.concat(e))},z("Lis\xe4ttiin ".concat(l))).catch(function(e){z("K\xe4ytt\xe4j\xe4n ".concat(l," lis\xe4\xe4minen ep\xe4onnistui")),J(!0)})}}),c.a.createElement("h3",null,"Numerot"),c.a.createElement(v,{contacts:n,filter:y,deleteContact:function(e){window.confirm("Poistetaanko ".concat(e.name,"?"))&&h(e).then(function(t){return r(n.filter(function(t){return t.id!==e.id}))},z("Poistettiin ".concat(e.name))).catch(function(t){z("Henkil\xf6\xe4 ".concat(e.name," ei voitu poistaa")),J(!0)})}}))};u.a.render(c.a.createElement(j,null),document.getElementById("root"))}},[[12,1,2]]]);
//# sourceMappingURL=main.78475c28.chunk.js.map