(this.webpackJsonp7guis=this.webpackJsonp7guis||[]).push([[0],{11:function(e,t,n){},12:function(e,t,n){"use strict";n.r(t);var r=n(0),c=n(1),a=n.n(c),s=n(5),i=n.n(s),l=n(2),o=function(e){var t=e.children;return Object(r.jsx)("div",{className:"max-w-max bg-gray-100 border rounded-md border-gray-300 shadow-lg",children:t})},d=function(e){var t=e.children;return Object(r.jsx)("header",{className:"flex bg-gray-300 text-gray-600 rounded-t-md justify-center w-full px-1 text-base shadow cursor-default",children:t})},u=function(e){var t=e.children;return Object(r.jsx)("div",{className:"p-2",children:t})},j=function(e){var t=e.children,n=e.type,c=void 0===n?"button":n,a=e.onClick,s=e.isDisabled,i=void 0!==s&&s;return Object(r.jsx)("button",{type:c,onClick:a,disabled:i,className:"text-gray-600 rounded-md bg-white border border-gray-300 px-10 py-1 text-xs cursor-default shadow ".concat(!i&&"active:bg-blue-400 active:text-white active:border-blue-500"," ").concat(i&&"cursor-not-allowed opacity-50"),children:t})};var b=function(){var e=Object(c.useState)(0),t=Object(l.a)(e,2),n=t[0],a=t[1];return Object(r.jsxs)(o,{children:[Object(r.jsx)(d,{children:"Counter"}),Object(r.jsx)(u,{children:Object(r.jsxs)("div",{className:"grid grid-cols-2 grid-rows-1 justify-between",children:[Object(r.jsx)("div",{className:"flex justify-center items-center text-sm",children:n}),Object(r.jsx)(j,{onClick:function(){return a((function(e){return e+1}))},children:"Count"})]})})]})},h=function(e){var t=e.type,n=void 0===t?"text":t,c=e.id,a=e.placeholder,s=void 0===a?"":a,i=e.name,l=void 0===i?"":i,o=e.onChange,d=e.value,u=e.isValid,j=void 0===u||u,b=e.isDisabled,h=void 0!==b&&b;return Object(r.jsx)("input",{id:c,name:l,type:n,placeholder:s,className:"rounded-md bg-white border border-gray-200 text-sm shadow py-1 pl-2 w-full ".concat(!j&&"bg-red-300 border-red-300"," ").concat(h&&"cursor-not-allowed bg-gray-100"),onChange:o,value:d,disabled:h})};function m(e){return!isNaN(parseFloat(e))&&isFinite(e)}function x(e){return m(e)||""===e}var f=function(){var e=Object(c.useState)(""),t=Object(l.a)(e,2),n=t[0],a=t[1],s=Object(c.useState)(""),i=Object(l.a)(s,2),j=i[0],b=i[1],f=function(e){var t=e.target,n=t.value;"celsius"===t.name&&(a(n),b(m(n)?function(e){return Math.round(1.8*e+32)}(n):"")),"fahrenheit"===t.name&&(b(n),a(m(n)?function(e){return Math.round(5/9*(e-32))}(n):""))};return Object(r.jsxs)(o,{children:[Object(r.jsx)(d,{children:"Temperature Converter"}),Object(r.jsx)(u,{children:Object(r.jsxs)("div",{className:"flex items-center justify-center",children:[Object(r.jsx)(h,{id:"celsius",name:"celsius",onChange:f,value:n,isValid:x(n)}),Object(r.jsx)("label",{htmlFor:"celsius",className:"text-sm text-gray-800 mx-2",children:"Celsius"}),Object(r.jsx)(h,{id:"fahrenheit",name:"fahrenheit",onChange:f,value:j,isValid:x(j)}),Object(r.jsx)("label",{htmlFor:"fahrenheit",className:"text-sm text-gray-800 ml-2",children:"Fahrenheit"})]})})]})},v=n(3),g=function(e){var t=e.children,n=e.onClose,a=c.useRef(null),s=c.useCallback((function(e){e.preventDefault(),27===e.keyCode&&n()}),[n]),i=c.useCallback((function(e){a.current&&!a.current.contains(e.target)&&n()}),[n]);return c.useEffect((function(){return window.addEventListener("keyup",s,!1),document.addEventListener("click",i,!1),function(){window.removeEventListener("keyup",s,!1),document.removeEventListener("click",i,!1)}}),[s,i]),Object(r.jsx)("div",{className:"fixed flex items-center justify-center inset-0 bg-modalOverlay opacity-100 z-50 overflow-x-hidden overflow-y-auto p-2",children:Object(r.jsxs)("div",{ref:a,className:"flex relative flex-col bg-white p-2 rounded-md items-center shadow-xl",children:[Object(r.jsx)("button",{onClick:n,className:"absolute top-0 right-1.5 cursor-default text-gray-500 hover:text-red-500",children:"x"}),t,Object(r.jsx)(j,{onClick:n,children:"Close"})]})})};function O(e,t){if("0"!==e.charAt(0)||"00"===e){var n=parseInt(e);(isNaN(n)||n<=0||n>t)&&(n=1),e=n>parseInt(t.toString().charAt(0))&&1===n.toString().length?"0"+n:n.toString()}return e}function y(e){var t=v.DateTime.fromFormat(e.replace(/ /g,""),"dd/mm/yyyy");return""===e||!t.invalid}function p(e,t){var n=v.DateTime.fromFormat(e.replace(/ /g,""),"dd/mm/yyyy"),r=v.DateTime.fromFormat(t.replace(/ /g,""),"dd/mm/yyyy");return n.ts<r.ts}var w=function(){var e=Object(c.useState)(""),t=Object(l.a)(e,2),n=t[0],a=t[1],s=Object(c.useState)(""),i=Object(l.a)(s,2),b=i[0],m=i[1],x=Object(c.useState)("one-way"),f=Object(l.a)(x,2),v=f[0],w=f[1],N=Object(c.useState)(!1),C=Object(l.a)(N,2),k=C[0],S=C[1],D="one-way"===v?""===n||!y(n):""===n||""===b||!y(n)||!y(b)||!p(n,b),F=Object(c.useRef)(""),E=function(e){var t=e.target,n=function(e){/\D\/$/.test(e)&&(e=e.substr(0,e.length-3));var t=e.split("/").map((function(e){return e.replace(/\D/g,"")}));return t[1]&&(t[1]=O(t[1],12)),t[0]&&(t[0]=O(t[0],31)),t.map((function(e,t){return 2===e.length&&t<2?e+" / ":e})).join("").substr(0,14)}(t.value);"start"===t.name&&a(n),"end"===t.name&&(m(n),F.current=n)};return Object(r.jsxs)(o,{children:[Object(r.jsx)(d,{children:"Flight Booker"}),Object(r.jsxs)(u,{children:[Object(r.jsxs)("div",{className:"flex flex-col w-40",children:[Object(r.jsxs)("select",{onChange:function(e){var t=e.target.value;"one-way"===t&&m(""),"round-trip"===t&&m(F.current),w(t)},value:v,className:"rounded-md bg-white border border-gray-200 text-sm shadow py-1 pl-1 mb-4",children:[Object(r.jsx)("option",{value:"one-way",children:"One Way"}),Object(r.jsx)("option",{value:"round-trip",children:"Round Trip"})]}),Object(r.jsx)("div",{className:"mb-2",children:Object(r.jsx)(h,{id:"start",name:"start",value:n,onChange:E,isValid:y(n)})}),Object(r.jsx)("div",{className:"mb-4",children:Object(r.jsx)(h,{id:"end",name:"end",value:b,onChange:E,isValid:y(b)&&("one-way"===v||""===b||p(n,b)),isDisabled:"one-way"===v})}),Object(r.jsx)(j,{isDisabled:D,onClick:function(){S(!0)},children:"Book Flight"})]}),k?Object(r.jsxs)(g,{onClose:function(){return S(!1)},children:[Object(r.jsx)("h2",{className:"mb-4",children:"Booking Confirmed"}),Object(r.jsxs)("p",{className:"text-sm text-gray-500 mb-4",children:["You have successfully booked a ",v," flight"," ","one-way"===v?"for ".concat(n.replace(/ /g,"")):"from ".concat(n.replace(/ /g,"")," to ").concat(b.replace(/ /g,""))]})]}):null]})]})};var N=function(){return Object(r.jsxs)("main",{className:"flex flex-col items-center h-screen w-full",children:[Object(r.jsx)("h1",{className:"text-xl font-bold text-center mt-5 text-blue-500 hover:underline",children:Object(r.jsx)("a",{href:"https://eugenkiss.github.io/7guis/tasks",target:"_blank",rel:"noreferrer",children:"7 GUIs Challenge"})}),Object(r.jsx)("h3",{className:"text-center",children:"Implementation using React and Tailwind CSS"}),Object(r.jsxs)("div",{className:"flex flex-col items-center justify-evenly h-screen w-full",children:[Object(r.jsx)(b,{}),Object(r.jsx)(f,{}),Object(r.jsx)(w,{})]})]})};n(11);i.a.render(Object(r.jsx)(a.a.StrictMode,{children:Object(r.jsx)(N,{})}),document.getElementById("root"))}},[[12,1,2]]]);
//# sourceMappingURL=main.d82a777f.chunk.js.map