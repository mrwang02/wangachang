import{_ as g,d as F,r as b,m as h,o as k,c as E,a as c,b as o,w as r,u as V,l as w,h as d,j as v,k as y,e as $}from"./index-0392ae0c.js";import{E as C}from"./el-image-viewer-2c25c0e6.js";import{u as U}from"./index-e6f7a759.js";const B=F({setup(){return{src:b("../../src/assets/logo.png")}},data(){return{n:30,userForm:{email:"",password:""},rules:{email:[{required:!0,message:"请输入正确的电子邮箱",trigger:"blur"},{type:"email",message:"电子邮箱格式错误",trigger:"blur"}],password:[{required:!0,message:"请输入正确的用户密码",trigger:"blur"},{min:8,message:"密码长度不得小于8个字符",trigger:"blur"}]}}},mounted(){},methods:{...h(V,["setToken","fillUserinfo"]),btnLogin(){const e=this,s=e.$refs.ruleFormRef;s&&s.validate(u=>{if(u)U(e.userForm).then(l=>{if(l.success){const t=l.data.userinfo;console.log(e),e.setToken(t.token),e.fillUserinfo(t),e.$router.push("/")}else return!1}).catch(l=>{console.log(l)});else return console.log("error submit!"),!1})},resetForm(){this.$refs.ruleFormRef.resetFields()}}}),I={class:"login"},L={class:"login-form"},R={class:"login-form-logo"};function N(e,s,u,f,l,t){const p=C,i=v,n=y,m=$,_=w;return k(),E("div",I,[c("div",L,[c("div",R,[o(p,{src:e.src,fit:"fill",lazy:!0},null,8,["src"])]),o(_,{ref:"ruleFormRef",model:e.userForm,"status-icon":"",rules:e.rules,class:"login-ruleForm"},{default:r(()=>[o(n,{prop:"email"},{default:r(()=>[o(i,{modelValue:e.userForm.email,"onUpdate:modelValue":s[0]||(s[0]=a=>e.userForm.email=a),autocomplete:"off",placeholder:"请输入你的用户邮箱","suffix-icon":"Message"},null,8,["modelValue"])]),_:1}),o(n,{prop:"password"},{default:r(()=>[o(i,{modelValue:e.userForm.password,"onUpdate:modelValue":s[1]||(s[1]=a=>e.userForm.password=a),type:"password",autocomplete:"off",placeholder:"请输入你的用户密码","suffix-icon":"Lock"},null,8,["modelValue"])]),_:1}),o(n,{class:"login-form-btns"},{default:r(()=>[o(m,{type:"primary",onClick:e.btnLogin},{default:r(()=>[d("用户登录")]),_:1},8,["onClick"]),o(m,{onClick:e.resetForm},{default:r(()=>[d("Reset")]),_:1},8,["onClick"])]),_:1})]),_:1},8,["model","rules"])])])}const z=g(B,[["render",N],["__scopeId","data-v-8b02a72c"]]);export{z as default};
