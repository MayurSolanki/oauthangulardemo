import './polyfills.server.mjs';
import{B as u,C as x,E as w,F as B,a as s,b as p,c as l,d as a,e as i,f as d,g as h,h as r,i as f,j as C,k as g,r as v,t as y,u as k,x as b}from"./chunk-C3XCVOGG.mjs";var m=(()=>{let t=class t{constructor(){this.title="oauthangulardemo"}};t.\u0275fac=function(o){return new(o||t)},t.\u0275cmp=s({type:t,selectors:[["app-root"]],standalone:!0,features:[g],decls:1,vars:0,template:function(o,c){o&1&&d(0,"router-outlet")},dependencies:[x]});let n=t;return n})();var I=(()=>{let t=class t{constructor(e){this.route=e,this.countdown=10,this.dataString="",this.oauthConsumerKey="",this.successCallBack=""}ngOnInit(){this.route.queryParams.subscribe(e=>{this.oauthConsumerKey=e.oauth_consumer_keyy,this.successCallBack=e.success_call_back,this.dataString=` 

      params : ${e} 

      oauthConsumerKey : ${this.oauthConsumerKey} 

      successCallBack : ${this.successCallBack} 

      `,this.startCountdown()})}startCountdown(){let e=setInterval(()=>{this.countdown--,this.countdown===0&&(clearInterval(e),this.successCallBack&&(window.location.href=this.successCallBack))},1e3)}};t.\u0275fac=function(o){return new(o||t)(l(u))},t.\u0275cmp=s({type:t,selectors:[["app-dashboard"]],decls:6,vars:2,template:function(o,c){o&1&&(a(0,"h1"),r(1,"dashboard Page"),i(),a(2,"div")(3,"pre"),r(4),i(),r(5),i()),o&2&&(p(4),f(c.dataString),p(),C(" Redirecting in ",c.countdown,` seconds...
`))}});let n=t;return n})();var K=(()=>{let t=class t{constructor(e,o){this.router=e,this.route=o,this.oauthConsumerKey="",this.successCallBack=""}ngOnInit(){this.route.queryParams.subscribe(e=>{this.oauthConsumerKey=e.oauth_consumer_key,this.successCallBack=e.success_call_back,console.log("params",e),console.log("oauthConsumerKey",this.oauthConsumerKey),console.log("successCallBack",this.successCallBack)})}OnClick(){this.router.navigate(["/dashboard"],{queryParams:{oauth_consumer_key:this.oauthConsumerKey,success_call_back:this.successCallBack}})}};t.\u0275fac=function(o){return new(o||t)(l(w),l(u))},t.\u0275cmp=s({type:t,selectors:[["app-login"]],decls:5,vars:0,consts:[["mat-flat-button","","color","primary",3,"click"]],template:function(o,c){o&1&&(a(0,"h1"),r(1,"login Page"),i(),a(2,"section")(3,"button",0),h("click",function(){return c.OnClick()}),r(4," Login"),i()())}});let n=t;return n})();var S=[{path:"home",component:m},{path:"login",component:K},{path:"dashboard",component:I},{path:"",redirectTo:"/login",pathMatch:"full"},{path:"**",redirectTo:"/login"}];var D={providers:[B(S),k()]};var A={providers:[b()]},M=v(D,A);var T=()=>y(m,M),tt=T;export{tt as a};
