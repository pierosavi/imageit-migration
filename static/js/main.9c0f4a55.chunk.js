(this["webpackJsonpimageit-migration"]=this["webpackJsonpimageit-migration"]||[]).push([[0],{25:function(e,t,i){"use strict";i.r(t);var n=i(4),o=i(0),r=i.n(o),a=i(11),c=i.n(a),s=i(7),l=i(5);var d=function(){var e=Object(o.useState)(!1),t=Object(s.a)(e,2),i=t[0],r=t[1],a=Object(o.useState)(""),c=Object(s.a)(a,2),d=c[0],p=c[1],g=Object(o.useState)(),h=Object(s.a)(g,2),b=h[0],u=h[1];Object(o.useEffect)((function(){if(b)try{p(JSON.stringify(function(e){var t={options:{imageUrl:e.bgimage,forceImageRefresh:!1,lockSensors:e.islocked,sensorsTextSize:10,sensors:[],mappings:[]},type:"pierosavi-imageit-panel",title:e.title,gridPos:e.gridPos,id:e.id,targets:e.targets,pluginVersion:e.pluginVersion,timeFrom:e.timeFrom,timeShift:e.timeShift,datasource:e.datasource};return t.options.sensors=e.sensors.map((function(e){return{name:e.displayName,backgroundBlink:!1,backgroundColor:e.bgColor,bold:!1,decimals:e.decimals,fontColor:e.fontColor,link:e.link_url,position:{x:e.xlocation,y:e.ylocation},query:{id:e.metric,alias:e.metric},visible:!0,unit:e.unitFormat,valueBlink:!1,mappingId:e.valueMappingIds[0]}})),t.options.mappings=e.valueMappings.map((function(e){return{compareTo:e.compareTo,description:"",id:e.id,values:{visible:!0,backgroundBlink:e.bgBlink,backgroundColor:e.bgColor,bold:e.isSensorFontBold,fontColor:e.fontColor,valueBlink:e.valueBlink},operator:"lessThan"===e.mappingOperatorName?"smallerThan":e.mappingOperatorName}})),t}(b),null,2))}catch(i){r(!0)}}),[b]);var m=i?"calc(100vh - 68px - 152px - 50px)":"calc(100vh - 68px - 152px)";return Object(n.jsxs)(l.b,{padding:4,children:[Object(n.jsx)(l.f,{children:"How does it work?"}),Object(n.jsxs)(l.g,{children:["Go to your v0.x.x ImageIt panel, click on the panel title > Inspect > Panel JSON.",Object(n.jsx)("br",{}),"Copy the content and paste it inside the input text area below."]}),Object(n.jsxs)(l.b,{paddingTop:4,paddingBottom:4,display:["block","block","block","block","flex"],height:m,children:[Object(n.jsx)(l.d,{width:1,padding:2,height:["50%","50%","50%","50%","100%"],children:Object(n.jsx)("textarea",{placeholder:"Input text area. Paste panel JSON here.",onChange:function(e){try{u(JSON.parse(e.currentTarget.value)),r(!1)}catch(i){""===e.currentTarget.value?(r(!1),p("")):r(!0)}},style:{width:"100%",height:"100%",resize:"none"}})}),Object(n.jsx)(l.d,{width:1,padding:2,height:["50%","50%","50%","50%","100%"],children:Object(n.jsx)("textarea",{placeholder:"Output text area. Not editable. Click to copy content to clipboard.",onClick:function(e){try{e.currentTarget.select(),document.execCommand("copy")}catch(i){console.error(i)}},value:d,onChange:function(){},style:{width:"100%",height:"100%",resize:"none"}})})]}),i&&Object(n.jsx)(l.b,{children:Object(n.jsx)(l.c,{variant:"danger",children:"Error parsing JSON. Check that the format is ok."})})]})},p=function(){return Object(n.jsxs)(l.e,{children:[Object(n.jsx)(l.e.Item,{full:!0,children:Object(n.jsx)(l.g,{paddingLeft:4,fontSize:4,children:"ImageIt Migration"})}),Object(n.jsx)(l.e.Link,{href:"https://github.com/pierosavi/imageit-migration/blob/master/README.md",children:Object(n.jsx)(l.g,{fontSize:4,children:"README & FAQ"})})]})};c.a.render(Object(n.jsx)(r.a.StrictMode,{children:Object(n.jsxs)(l.a,{children:[Object(n.jsx)(p,{}),Object(n.jsx)(d,{})]})}),document.getElementById("root"))}},[[25,1,2]]]);
//# sourceMappingURL=main.9c0f4a55.chunk.js.map