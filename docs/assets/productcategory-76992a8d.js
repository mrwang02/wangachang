import{n as S,r as U,o as k,c as f,a as t,h as a,x as o,y as d,z as r,F as z,A as B,t as s}from"./index-0392ae0c.js";function h(p){return S({url:"/mall/pms-product-category/page",method:"post",data:p})}function E(p){return S({url:`/mall/pms-product-category/one/${p}`,method:"get"})}function F(p){return S({url:`/mall/pms-product-category/del/${p}`,method:"get"})}function L(p){return S({url:"/mall/pms-product-category/add",method:"post",data:p})}function M(p){return S({url:"/mall/pms-product-category/edit",method:"post",data:p})}const N=t("br",null,null,-1),T=t("br",null,null,-1),A=t("br",null,null,-1),R={border:"1"},j=t("tr",null,[t("th",null,"id"),t("th",null,"parent_id"),t("th",null,"name"),t("th",null,"level"),t("th",null,"product_count"),t("th",null,"product_unit"),t("th",null,"nav_status"),t("th",null,"show_status"),t("th",null,"sort"),t("th",null,"icon"),t("th",null,"keywords"),t("th",null,"description"),t("th",null,"操作")],-1),q=["src"],G=["onClick"],H=["onClick"],J=t("br",null,null,-1),K=t("br",null,null,-1),Q=t("td",null,"id:",-1),W=t("td",null,"parent_id:",-1),X=t("td",null,"name:",-1),Y=t("td",null,"level:",-1),Z=t("td",null,"product_count:",-1),tt=t("td",null,"product_unit:",-1),lt=t("td",null,"nav_status:",-1),et=t("td",null,"show_status",-1),ut=t("td",null,"sort:",-1),nt=t("td",null,"keywords:",-1),ot=t("td",null,"description:",-1),at={colspan:"2"},st={__name:"productcategory",setup(p){const b=U([]),m=U(0),y=U(1),w=U(1),V=U(5),n=U({id:0,parentId:"",name:"",level:"",productCount:"",productUnit:"",navStatus:"",showStatus:"",sort:"",icon:"",keywords:"",description:""}),u=U({});i();const I=v=>{confirm("是否要删除该商品？")&&F(v).then(e=>{e.code==1&&(alert("成功删除商品！"),i())})},C=()=>{let v={id:0,parentId:parseInt(n.value.parentId),name:n.value.name,level:parseInt(n.value.level),productCount:parseInt(n.value.productCount),productUnit:n.value.productUnit,navStatus:parseInt(n.value.navStatus),showStatus:parseInt(n.value.showStatus),sort:parseInt(n.value.sort),icon:"",keywords:n.value.keywords,description:n.value.description};L(v).then(e=>{e.code==1&&(alert("添加商品成功！"),i())})},x=v=>{E(v).then(e=>{let l=e.data.help;u.value=l})},$=()=>{if(confirm("是否要进行更新？"))if(u.value.id=="")alert("请选择要操作的商品。");else{let v={id:u.value.id,parentId:parseInt(u.value.parentId),name:u.value.name,level:parseInt(u.value.level),productCount:parseInt(u.value.productCount),productUnit:u.value.productUnit,navStatus:parseInt(u.value.navStatus),showStatus:parseInt(u.value.showStatus),sort:parseInt(u.value.sort),icon:"",keywords:u.value.keywords,description:u.value.description};M(v).then(e=>{e.code==1&&(alert("更新成功。"),g(),i())})}},g=()=>{u.value={id:"",parent_id:"",name:"",level:"",productCount:"",productUnit:"",navStatus:"",showStatus:"",sort:"",icon:"",keywords:"",description:""}},c=()=>{y.value==1?alert("当前已经是首页了。"):(y.value--,w.value--,i())},O=()=>{y.value==m.value?alert("当前已经是尾页了。"):(y.value++,w.value++,i())},P=()=>{y.value=1,w.value=1,i()},D=()=>{y.value=m.value,w.value=m.value,i()};function i(){let v={current:w.value,size:V.value};h(v).then(e=>{console.log(e);let l=e.data.page.total;l==0?m.value=1:l%V.value==0?m.value=parseInt(l/V.value):m.value=parseInt(l/V.value+1),b.value=e.data.page.records,console.log(b.value)})}return(v,e)=>(k(),f("div",null,[t("div",null,[a(" parent_id："),o(t("input",{type:"number","onUpdate:modelValue":e[0]||(e[0]=l=>n.value.parentId=l)},null,512),[[d,n.value.parentId]]),a("   name："),o(t("input",{type:"text","onUpdate:modelValue":e[1]||(e[1]=l=>n.value.name=l)},null,512),[[d,n.value.name]]),a("   level："),o(t("input",{type:"number","onUpdate:modelValue":e[2]||(e[2]=l=>n.value.level=l)},null,512),[[d,n.value.level]]),a("   "),N,a(" keywords："),o(t("input",{type:"text","onUpdate:modelValue":e[3]||(e[3]=l=>n.value.keywords=l)},null,512),[[d,n.value.keywords]]),a("   description："),o(t("input",{type:"text","onUpdate:modelValue":e[4]||(e[4]=l=>n.value.description=l)},null,512),[[d,n.value.description]]),a("   product_count："),o(t("input",{type:"number","onUpdate:modelValue":e[5]||(e[5]=l=>n.value.productCount=l)},null,512),[[d,n.value.productCount]]),a("   "),T,a(" product_unit"),o(t("input",{type:"text","onUpdate:modelValue":e[6]||(e[6]=l=>n.value.productUnit=l)},null,512),[[d,n.value.productUnit]]),a("   nav_status： "),o(t("input",{type:"radio",value:"1","onUpdate:modelValue":e[7]||(e[7]=l=>n.value.navStatus=l)},null,512),[[r,n.value.navStatus]]),a("是 "),o(t("input",{type:"radio",value:"0","onUpdate:modelValue":e[8]||(e[8]=l=>n.value.navStatus=l)},null,512),[[r,n.value.navStatus]]),a("否   show_status： "),o(t("input",{type:"radio",value:"1","onUpdate:modelValue":e[9]||(e[9]=l=>n.value.showStatus=l)},null,512),[[r,n.value.showStatus]]),a("是 "),o(t("input",{type:"radio",value:"0","onUpdate:modelValue":e[10]||(e[10]=l=>n.value.showStatus=l)},null,512),[[r,n.value.showStatus]]),a("否   sort： "),o(t("input",{type:"radio",value:"1","onUpdate:modelValue":e[11]||(e[11]=l=>n.value.sort=l)},null,512),[[r,n.value.sort]]),a("是 "),o(t("input",{type:"radio",value:"0","onUpdate:modelValue":e[12]||(e[12]=l=>n.value.sort=l)},null,512),[[r,n.value.sort]]),a("否   "),t("button",{type:"button",onClick:e[13]||(e[13]=l=>C())},"添加")]),A,t("div",null,[t("div",null,[t("table",R,[j,(k(!0),f(z,null,B(b.value,l=>(k(),f("tr",{key:l.id},[t("td",null,s(l.id),1),t("td",null,s(l.parentId),1),t("td",null,s(l.name),1),t("td",null,s(l.level),1),t("td",null,s(l.productCount),1),t("td",null,s(l.productUnit),1),t("td",null,s(l.navStatus),1),t("td",null,s(l.showStatus),1),t("td",null,s(l.sort),1),t("td",null,[t("img",{src:l.icon,alt:"暂无图片"},null,8,q)]),t("td",null,s(l.keywords),1),t("td",null,s(l.description),1),t("td",null,[t("button",{onClick:_=>x(l.id)},"更新",8,G),t("button",{onClick:_=>I(l.id)},"删除",8,H)])]))),128))])]),J,t("div",null,[t("button",{type:"button",onClick:e[14]||(e[14]=l=>P())},"首页"),a("   "),t("button",{type:"button",onClick:e[15]||(e[15]=l=>c())},"上一页"),a("   "+s(y.value)+" / "+s(m.value)+"   ",1),t("button",{type:"button",onClick:e[16]||(e[16]=l=>O())},"下一页"),a("   "),t("button",{type:"button",onClick:e[17]||(e[17]=l=>D())},"尾页")])]),K,t("div",null,[t("table",null,[t("tr",null,[Q,t("td",null,[o(t("input",{type:"text","onUpdate:modelValue":e[18]||(e[18]=l=>u.value.id=l),readonly:""},null,512),[[d,u.value.id]])])]),t("tr",null,[W,t("td",null,[o(t("input",{type:"text","onUpdate:modelValue":e[19]||(e[19]=l=>u.value.parentId=l)},null,512),[[d,u.value.parentId]])])]),t("tr",null,[X,t("td",null,[o(t("input",{type:"text","onUpdate:modelValue":e[20]||(e[20]=l=>u.value.name=l)},null,512),[[d,u.value.name]])])]),t("tr",null,[Y,t("td",null,[o(t("input",{type:"text","onUpdate:modelValue":e[21]||(e[21]=l=>u.value.level=l)},null,512),[[d,u.value.level]])])]),t("tr",null,[Z,t("td",null,[o(t("input",{type:"text","onUpdate:modelValue":e[22]||(e[22]=l=>u.value.productCount=l)},null,512),[[d,u.value.productCount]])])]),t("tr",null,[tt,t("td",null,[o(t("input",{type:"text","onUpdate:modelValue":e[23]||(e[23]=l=>u.value.productUnit=l)},null,512),[[d,u.value.productUnit]])])]),t("tr",null,[lt,t("td",null,[o(t("input",{type:"radio",name:"nav_status",value:"1","onUpdate:modelValue":e[24]||(e[24]=l=>u.value.navStatus=l)},null,512),[[r,u.value.navStatus]]),a("是 "),o(t("input",{type:"radio",name:"nav_status",value:"0","onUpdate:modelValue":e[25]||(e[25]=l=>u.value.navStatus=l)},null,512),[[r,u.value.navStatus]]),a("否 ")])]),t("tr",null,[et,t("td",null,[o(t("input",{type:"radio",name:"show_status：",value:"1","onUpdate:modelValue":e[26]||(e[26]=l=>u.value.showStatus=l)},null,512),[[r,u.value.showStatus]]),a("是 "),o(t("input",{type:"radio",name:"show_status：",value:"0","onUpdate:modelValue":e[27]||(e[27]=l=>u.value.showStatus=l)},null,512),[[r,u.value.showStatus]]),a("否 ")])]),t("tr",null,[ut,t("td",null,[o(t("input",{type:"radio",name:"sort",value:"1","onUpdate:modelValue":e[28]||(e[28]=l=>u.value.sort=l)},null,512),[[r,u.value.sort]]),a("是 "),o(t("input",{type:"radio",name:"sort",value:"0","onUpdate:modelValue":e[29]||(e[29]=l=>u.value.sort=l)},null,512),[[r,u.value.sort]]),a("否 ")])]),t("tr",null,[nt,t("td",null,[o(t("input",{type:"text","onUpdate:modelValue":e[30]||(e[30]=l=>u.value.keywords=l)},null,512),[[d,u.value.keywords]])])]),t("tr",null,[ot,t("td",null,[o(t("input",{type:"text","onUpdate:modelValue":e[31]||(e[31]=l=>u.value.description=l)},null,512),[[d,u.value.description]])])]),t("tr",null,[t("td",at,[t("button",{type:"button",onClick:e[32]||(e[32]=l=>$())},"更新"),t("button",{type:"button",onClick:e[33]||(e[33]=l=>g())},"清空")])])])])]))}};export{st as default};
