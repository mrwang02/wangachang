import{n as r,_ as c,d as V,o as g,c as R,a as u,p,b as o,w as i,e as k,f as C,g as E,h as n,i as I,j as P,k as T,l as F}from"./index-0392ae0c.js";const $=e=>r.request({url:"/mall/sms-flash-promotion-session/add",method:"post",data:e}),N=e=>r.request({method:"get",url:"/mall/sms-flash-promotion-session/del/"+e.id}),y=e=>r.request({url:"/mall/sms-flash-promotion-session/edit",method:"post",data:e}),L=e=>r.request({url:"/mall/sms-flash-promotion-session/page",method:"post",data:e}),U=V({data(){return{topics:[],page:{current:0,size:10},sms:{id:0,memberId:0,memberPhone:"",productId:0,productName:"",sendTime:"",subsribeTime:""},dialogFormVisible:!1,formLabelWidth:70,dialogVisible:!1,choiceRow:{}}},mounted(){this.getPage()},methods:{del(e){N({id:e}).then(l=>{this.getPage()})},save(){this.choiceRow.id==0?$(this.choiceRow).then(e=>{this.dialogFormVisible=!1,this.getPage()}):y(this.choiceRow).then(e=>{this.dialogFormVisible=!1,this.getPage()})},handleEdit(e,l){this.choiceRow=l,this.dialogFormVisible=!0},toAdd(){this.choiceRow=this.sms,this.dialogFormVisible=!0},getPage(){L(this.page).then(e=>{console.log("收到的数据:"+JSON.stringify(e)),this.topics=e.data.page.records,console.log("----------------"+JSON.stringify(this.topics[0]))})}}}),W={class:""},v={class:"tools"},q={class:"dialog-footer"};function B(e,l,z,A,S,D){const m=k,d=I,h=C,a=P,s=T,b=F,f=E;return g(),R("div",W,[u("h3",null,[p(e.$slots,"default")]),u("div",v,[o(m,{icon:"Plus",onClick:e.toAdd},null,8,["onClick"])]),p(e.$slots,"header"),o(h,{data:e.topics,style:{width:"100%"}},{default:i(()=>[o(d,{prop:"id",label:"编号",width:"80"}),o(d,{prop:"memberId",label:"成员id",width:"180"}),o(d,{prop:"memberPhone",label:"成员电话",width:"180"}),o(d,{prop:"productId",label:"产品i",width:"180"}),o(d,{prop:"productName",label:"商品名称",width:"180"}),o(d,{prop:"sendTime",label:"发送时间",width:"180"}),o(d,{prop:"subscribeTime",label:"创建时间",width:"180"}),o(d,{label:"操作"},{default:i(t=>[o(m,{size:"small",onClick:w=>e.handleEdit(t.$index,t.row)},{default:i(()=>[n("编辑")]),_:2},1032,["onClick"]),o(m,{size:"small",type:"danger",onClick:w=>e.del(t.row.id)},{default:i(()=>[n("删除")]),_:2},1032,["onClick"])]),_:1})]),_:1},8,["data"]),o(f,{modelValue:e.dialogFormVisible,"onUpdate:modelValue":l[8]||(l[8]=t=>e.dialogFormVisible=t),title:"话题编辑"},{footer:i(()=>[u("span",q,[o(m,{onClick:l[7]||(l[7]=t=>e.dialogFormVisible=!1)},{default:i(()=>[n("取消")]),_:1}),o(m,{type:"primary",onClick:e.save},{default:i(()=>[n(" 保存 ")]),_:1},8,["onClick"])])]),default:i(()=>[o(b,{model:e.choiceRow,rules:e.rules},{default:i(()=>[o(s,{label:"编号","label-width":e.formLabelWidth,prop:"id"},{default:i(()=>[o(a,{modelValue:e.choiceRow.id,"onUpdate:modelValue":l[0]||(l[0]=t=>e.choiceRow.id=t),modelModifiers:{number:!0},autocomplete:"off",type:"text"},null,8,["modelValue"])]),_:1},8,["label-width"]),o(s,{label:"成员id","label-width":e.formLabelWidth},{default:i(()=>[o(a,{modelValue:e.choiceRow.menberId,"onUpdate:modelValue":l[1]||(l[1]=t=>e.choiceRow.menberId=t),autocomplete:"off"},null,8,["modelValue"])]),_:1},8,["label-width"]),o(s,{label:"成员手机号","label-width":e.formLabelWidth},{default:i(()=>[o(a,{modelValue:e.choiceRow.memberPhone,"onUpdate:modelValue":l[2]||(l[2]=t=>e.choiceRow.memberPhone=t),autocomplete:"off"},null,8,["modelValue"])]),_:1},8,["label-width"]),o(s,{label:"产品Id","label-width":e.formLabelWidth},{default:i(()=>[o(a,{modelValue:e.choiceRow.productId,"onUpdate:modelValue":l[3]||(l[3]=t=>e.choiceRow.productId=t),autocomplete:"off"},null,8,["modelValue"])]),_:1},8,["label-width"]),o(s,{label:"产品名称","label-width":e.formLabelWidth},{default:i(()=>[o(a,{modelValue:e.choiceRow.productName,"onUpdate:modelValue":l[4]||(l[4]=t=>e.choiceRow.productName=t),autocomplete:"off"},null,8,["modelValue"])]),_:1},8,["label-width"]),o(s,{label:"发送时间","label-width":e.formLabelWidth},{default:i(()=>[o(a,{modelValue:e.choiceRow.sendTime,"onUpdate:modelValue":l[5]||(l[5]=t=>e.choiceRow.sendTime=t),autocomplete:"off"},null,8,["modelValue"])]),_:1},8,["label-width"]),o(s,{label:"会员订阅时间","label-width":e.formLabelWidth},{default:i(()=>[o(a,{modelValue:e.choiceRow.subsribeTime,"onUpdate:modelValue":l[6]||(l[6]=t=>e.choiceRow.subsribeTime=t),autocomplete:"off",rows:5,type:"textarea"},null,8,["modelValue"])]),_:1},8,["label-width"])]),_:1},8,["model","rules"])]),_:1},8,["modelValue"])])}const O=c(U,[["render",B]]);export{O as default};
