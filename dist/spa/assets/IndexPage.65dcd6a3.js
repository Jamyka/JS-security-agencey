import{Q as re}from"./QImg.db0348c8.js";import{d as me,a as ee,c as ce,e as pe,h as fe}from"./render.87657a83.js";import{D,v as ge,G as _e,I as X,J as G,M as ne,s as J,N as Z,r as z,c as m,w as L,g as te,h as _,a2 as he,x as xe,a6 as be,a7 as ye,o as ue,l as de,H as oe,a8 as Se,_ as N,S as x,X as y,j as C,V as ie,F as Q,Z as K,U as Ce,W as c,a9 as P,R as A,aa as $e,d as qe}from"./index.f0daff15.js";import{g as se,s as ae,c as we,u as Pe,a as Te}from"./selection.2f0c9629.js";import{e as ke,b as Ie,d as H}from"./QBtn.58523365.js";import{u as Y}from"./vue-i18n.runtime.4cb9d1f0.js";import{B as Ae}from"./BlurryImgComponent.b9e6f70e.js";function Be(e){const n=[.06,6,50];return typeof e=="string"&&e.length&&e.split(":").forEach((l,s)=>{const a=parseFloat(l);a&&(n[s]=a)}),n}var Me=me({name:"touch-swipe",beforeMount(e,{value:n,arg:l,modifiers:s}){if(s.mouse!==!0&&D.has.touch!==!0)return;const a=s.mouseCapture===!0?"Capture":"",t={handler:n,sensitivity:Be(l),direction:se(s),noop:ge,mouseStart(o){ae(o,t)&&_e(o)&&(X(t,"temp",[[document,"mousemove","move",`notPassive${a}`],[document,"mouseup","end","notPassiveCapture"]]),t.start(o,!0))},touchStart(o){if(ae(o,t)){const r=o.target;X(t,"temp",[[r,"touchmove","move","notPassiveCapture"],[r,"touchcancel","end","notPassiveCapture"],[r,"touchend","end","notPassiveCapture"]]),t.start(o)}},start(o,r){D.is.firefox===!0&&G(e,!0);const v=ne(o);t.event={x:v.left,y:v.top,time:Date.now(),mouse:r===!0,dir:!1}},move(o){if(t.event===void 0)return;if(t.event.dir!==!1){J(o);return}const r=Date.now()-t.event.time;if(r===0)return;const v=ne(o),p=v.left-t.event.x,u=Math.abs(p),h=v.top-t.event.y,f=Math.abs(h);if(t.event.mouse!==!0){if(u<t.sensitivity[1]&&f<t.sensitivity[1]){t.end(o);return}}else if(window.getSelection().toString()!==""){t.end(o);return}else if(u<t.sensitivity[2]&&f<t.sensitivity[2])return;const b=u/r,$=f/r;t.direction.vertical===!0&&u<f&&u<100&&$>t.sensitivity[0]&&(t.event.dir=h<0?"up":"down"),t.direction.horizontal===!0&&u>f&&f<100&&b>t.sensitivity[0]&&(t.event.dir=p<0?"left":"right"),t.direction.up===!0&&u<f&&h<0&&u<100&&$>t.sensitivity[0]&&(t.event.dir="up"),t.direction.down===!0&&u<f&&h>0&&u<100&&$>t.sensitivity[0]&&(t.event.dir="down"),t.direction.left===!0&&u>f&&p<0&&f<100&&b>t.sensitivity[0]&&(t.event.dir="left"),t.direction.right===!0&&u>f&&p>0&&f<100&&b>t.sensitivity[0]&&(t.event.dir="right"),t.event.dir!==!1?(J(o),t.event.mouse===!0&&(document.body.classList.add("no-pointer-events--children"),document.body.classList.add("non-selectable"),we(),t.styleCleanup=B=>{t.styleCleanup=void 0,document.body.classList.remove("non-selectable");const q=()=>{document.body.classList.remove("no-pointer-events--children")};B===!0?setTimeout(q,50):q()}),t.handler({evt:o,touch:t.event.mouse!==!0,mouse:t.event.mouse,direction:t.event.dir,duration:r,distance:{x:u,y:f}})):t.end(o)},end(o){t.event!==void 0&&(Z(t,"temp"),D.is.firefox===!0&&G(e,!1),t.styleCleanup!==void 0&&t.styleCleanup(!0),o!==void 0&&t.event.dir!==!1&&J(o),t.event=void 0)}};if(e.__qtouchswipe=t,s.mouse===!0){const o=s.mouseCapture===!0||s.mousecapture===!0?"Capture":"";X(t,"main",[[e,"mousedown","mouseStart",`passive${o}`]])}D.has.touch===!0&&X(t,"main",[[e,"touchstart","touchStart",`passive${s.capture===!0?"Capture":""}`],[e,"touchmove","noop","notPassiveCapture"]])},updated(e,n){const l=e.__qtouchswipe;l!==void 0&&(n.oldValue!==n.value&&(typeof n.value!="function"&&l.end(),l.handler=n.value),l.direction=se(n.modifiers))},beforeUnmount(e){const n=e.__qtouchswipe;n!==void 0&&(Z(n,"main"),Z(n,"temp"),D.is.firefox===!0&&G(e,!1),n.styleCleanup!==void 0&&n.styleCleanup(),delete e.__qtouchswipe)}});function Le(){const e=new Map;return{getCache:function(n,l){return e[n]===void 0?e[n]=l:e[n]},getCacheWithFn:function(n,l){return e[n]===void 0?e[n]=l():e[n]}}}const Ne={name:{required:!0},disable:Boolean},le={setup(e,{slots:n}){return()=>_("div",{class:"q-panel scroll",role:"tabpanel"},ee(n.default))}},Ve={modelValue:{required:!0},animated:Boolean,infinite:Boolean,swipeable:Boolean,vertical:Boolean,transitionPrev:String,transitionNext:String,transitionDuration:{type:[String,Number],default:300},keepAlive:Boolean,keepAliveInclude:[String,Array,RegExp],keepAliveExclude:[String,Array,RegExp],keepAliveMax:Number},Ee=["update:modelValue","beforeTransition","transition"];function Fe(){const{props:e,emit:n,proxy:l}=te(),{getCacheWithFn:s}=Le();let a,t;const o=z(null),r=z(null);function v(i){const d=e.vertical===!0?"up":"left";w((l.$q.lang.rtl===!0?-1:1)*(i.direction===d?1:-1))}const p=m(()=>[[Me,v,void 0,{horizontal:e.vertical!==!0,vertical:e.vertical,mouse:!0}]]),u=m(()=>e.transitionPrev||`slide-${e.vertical===!0?"down":"right"}`),h=m(()=>e.transitionNext||`slide-${e.vertical===!0?"up":"left"}`),f=m(()=>`--q-transition-duration: ${e.transitionDuration}ms`),b=m(()=>typeof e.modelValue=="string"||typeof e.modelValue=="number"?e.modelValue:String(e.modelValue)),$=m(()=>({include:e.keepAliveInclude,exclude:e.keepAliveExclude,max:e.keepAliveMax})),B=m(()=>e.keepAliveInclude!==void 0||e.keepAliveExclude!==void 0);L(()=>e.modelValue,(i,d)=>{const S=T(i)===!0?E(i):-1;t!==!0&&M(S===-1?0:S<E(d)?-1:1),o.value!==S&&(o.value=S,n("beforeTransition",i,d),xe(()=>{n("transition",i,d)}))});function q(){w(1)}function R(){w(-1)}function V(i){n("update:modelValue",i)}function T(i){return i!=null&&i!==""}function E(i){return a.findIndex(d=>d.props.name===i&&d.props.disable!==""&&d.props.disable!==!0)}function O(){return a.filter(i=>i.props.disable!==""&&i.props.disable!==!0)}function M(i){const d=i!==0&&e.animated===!0&&o.value!==-1?"q-transition--"+(i===-1?u.value:h.value):null;r.value!==d&&(r.value=d)}function w(i,d=o.value){let S=d+i;for(;S>-1&&S<a.length;){const I=a[S];if(I!==void 0&&I.props.disable!==""&&I.props.disable!==!0){M(i),t=!0,n("update:modelValue",I.props.name),setTimeout(()=>{t=!1});return}S+=i}e.infinite===!0&&a.length!==0&&d!==-1&&d!==a.length&&w(i,i===-1?a.length:-1)}function F(){const i=E(e.modelValue);return o.value!==i&&(o.value=i),!0}function W(){const i=T(e.modelValue)===!0&&F()&&a[o.value];return e.keepAlive===!0?[_(be,$.value,[_(B.value===!0?s(b.value,()=>({...le,name:b.value})):le,{key:b.value,style:f.value},()=>i)])]:[_("div",{class:"q-panel scroll",style:f.value,key:b.value,role:"tabpanel"},[i])]}function g(){if(a.length!==0)return e.animated===!0?[_(he,{name:r.value},W)]:W()}function k(i){return a=ke(ee(i.default,[])).filter(d=>d.props!==null&&d.props.slot===void 0&&T(d.props.name)===!0),a.length}function j(){return a}return Object.assign(l,{next:q,previous:R,goTo:V}),{panelIndex:o,panelDirectives:p,updatePanelsList:k,updatePanelIndex:F,getPanelContent:g,getEnabledPanels:O,getPanels:j,isValidPanelName:T,keepAliveProps:$,needsUniqueKeepAliveWrapper:B,goToPanelByOffset:w,goToPanel:V,nextPanel:q,previousPanel:R}}var je=ce({name:"QCarouselSlide",props:{...Ne,imgSrc:String},setup(e,{slots:n}){const l=m(()=>e.imgSrc?{backgroundImage:`url("${e.imgSrc}")`}:{});return()=>_("div",{class:"q-carousel__slide",style:l.value},ee(n.default))}});let U=0;const De={fullscreen:Boolean,noRouteFullscreenExit:Boolean},Ue=["update:fullscreen","fullscreen"];function ze(){const e=te(),{props:n,emit:l,proxy:s}=e;let a,t,o;const r=z(!1);Ie(e)===!0&&L(()=>s.$route.fullPath,()=>{n.noRouteFullscreenExit!==!0&&u()}),L(()=>n.fullscreen,h=>{r.value!==h&&v()}),L(r,h=>{l("update:fullscreen",h),l("fullscreen",h)});function v(){r.value===!0?u():p()}function p(){r.value!==!0&&(r.value=!0,o=s.$el.parentNode,o.replaceChild(t,s.$el),document.body.appendChild(s.$el),U++,U===1&&document.body.classList.add("q-body--fullscreen-mixin"),a={handler:u},oe.add(a))}function u(){r.value===!0&&(a!==void 0&&(oe.remove(a),a=void 0),o.replaceChild(s.$el,t),r.value=!1,U=Math.max(0,U-1),U===0&&(document.body.classList.remove("q-body--fullscreen-mixin"),s.$el.scrollIntoView!==void 0&&setTimeout(()=>{s.$el.scrollIntoView()})))}return ye(()=>{t=document.createElement("span")}),ue(()=>{n.fullscreen===!0&&p()}),de(u),Object.assign(s,{toggleFullscreen:v,setFullscreen:p,exitFullscreen:u}),{inFullscreen:r,toggleFullscreen:v}}const Qe=["top","right","bottom","left"],Re=["regular","flat","outline","push","unelevated"];var Oe=ce({name:"QCarousel",props:{...Pe,...Ve,...De,transitionPrev:{type:String,default:"fade"},transitionNext:{type:String,default:"fade"},height:String,padding:Boolean,controlColor:String,controlTextColor:String,controlType:{type:String,validator:e=>Re.includes(e),default:"flat"},autoplay:[Number,Boolean],arrows:Boolean,prevIcon:String,nextIcon:String,navigation:Boolean,navigationPosition:{type:String,validator:e=>Qe.includes(e)},navigationIcon:String,navigationActiveIcon:String,thumbnails:Boolean},emits:[...Ue,...Ee],setup(e,{slots:n}){const{proxy:{$q:l}}=te(),s=Te(e,l);let a=null,t;const{updatePanelsList:o,getPanelContent:r,panelDirectives:v,goToPanel:p,previousPanel:u,nextPanel:h,getEnabledPanels:f,panelIndex:b}=Fe(),{inFullscreen:$}=ze(),B=m(()=>$.value!==!0&&e.height!==void 0?{height:e.height}:{}),q=m(()=>e.vertical===!0?"vertical":"horizontal"),R=m(()=>`q-carousel q-panel-parent q-carousel--with${e.padding===!0?"":"out"}-padding`+($.value===!0?" fullscreen":"")+(s.value===!0?" q-carousel--dark q-dark":"")+(e.arrows===!0?` q-carousel--arrows-${q.value}`:"")+(e.navigation===!0?` q-carousel--navigation-${O.value}`:"")),V=m(()=>{const g=[e.prevIcon||l.iconSet.carousel[e.vertical===!0?"up":"left"],e.nextIcon||l.iconSet.carousel[e.vertical===!0?"down":"right"]];return e.vertical===!1&&l.lang.rtl===!0?g.reverse():g}),T=m(()=>e.navigationIcon||l.iconSet.carousel.navigationIcon),E=m(()=>e.navigationActiveIcon||T.value),O=m(()=>e.navigationPosition||(e.vertical===!0?"right":"bottom")),M=m(()=>({color:e.controlColor,textColor:e.controlTextColor,round:!0,[e.controlType]:!0,dense:!0}));L(()=>e.modelValue,()=>{e.autoplay&&w()}),L(()=>e.autoplay,g=>{g?w():a!==null&&(clearTimeout(a),a=null)});function w(){const g=Se(e.autoplay)===!0?Math.abs(e.autoplay):5e3;a!==null&&clearTimeout(a),a=setTimeout(()=>{a=null,g>=0?h():u()},g)}ue(()=>{e.autoplay&&w()}),de(()=>{a!==null&&clearTimeout(a)});function F(g,k){return _("div",{class:`q-carousel__control q-carousel__navigation no-wrap absolute flex q-carousel__navigation--${g} q-carousel__navigation--${O.value}`+(e.controlColor!==void 0?` text-${e.controlColor}`:"")},[_("div",{class:"q-carousel__navigation-inner flex flex-center no-wrap"},f().map(k))])}function W(){const g=[];if(e.navigation===!0){const k=n["navigation-icon"]!==void 0?n["navigation-icon"]:i=>_(H,{key:"nav"+i.name,class:`q-carousel__navigation-icon q-carousel__navigation-icon--${i.active===!0?"":"in"}active`,...i.btnProps,onClick:i.onClick}),j=t-1;g.push(F("buttons",(i,d)=>{const S=i.props.name,I=b.value===d;return k({index:d,maxIndex:j,name:S,active:I,btnProps:{icon:I===!0?E.value:T.value,size:"sm",...M.value},onClick:()=>{p(S)}})}))}else if(e.thumbnails===!0){const k=e.controlColor!==void 0?` text-${e.controlColor}`:"";g.push(F("thumbnails",j=>{const i=j.props;return _("img",{key:"tmb#"+i.name,class:`q-carousel__thumbnail q-carousel__thumbnail--${i.name===e.modelValue?"":"in"}active`+k,src:i.imgSrc||i["img-src"],onClick:()=>{p(i.name)}})}))}return e.arrows===!0&&b.value>=0&&((e.infinite===!0||b.value>0)&&g.push(_("div",{key:"prev",class:`q-carousel__control q-carousel__arrow q-carousel__prev-arrow q-carousel__prev-arrow--${q.value} absolute flex flex-center`},[_(H,{icon:V.value[0],...M.value,onClick:u})])),(e.infinite===!0||b.value<t-1)&&g.push(_("div",{key:"next",class:`q-carousel__control q-carousel__arrow q-carousel__next-arrow q-carousel__next-arrow--${q.value} absolute flex flex-center`},[_(H,{icon:V.value[1],...M.value,onClick:h})]))),fe(n.control,g)}return()=>(t=o(n),_("div",{class:R.value,style:B.value},[pe("div",{class:"q-carousel__slides-container"},r(),"sl-cont",e.swipeable,()=>v.value)].concat(W())))}});const We={setup(){const{t:e}=Y({useScope:"global"}),n=m(()=>[{id:1,title:e("MainSlider[0].title"),subTitle:e("MainSlider[0].subTitle"),img:"/first_slide.jpg"},{id:2,title:e("MainSlider[1].title"),subTitle:e("MainSlider[1].subTitle"),img:"/screens.jpg"},{id:3,title:e("MainSlider[2].title"),subTitle:e("MainSlider[2].subTitle"),img:"/guard-2.jpeg"}]);return{slide:z(1),autoplay:z(!0),newSlidesItems:n}}},Xe={id:"mainCarousel",class:"mainCarousel--wrapper"},He={class:"absolute-top-right cust-js text-weight-bold text-negative"},Ke={class:"absolute-center custom-caption"},Ye={class:"text-weight-bold text-negative"},Ge={class:"text-subtitle q-mt-md"};function Je(e,n,l,s,a,t){return x(),y("section",Xe,[C(Oe,{animated:"",modelValue:s.slide,"onUpdate:modelValue":n[0]||(n[0]=o=>s.slide=o),navigation:"",infinite:"",autoplay:s.autoplay,swipeable:"","transition-prev":"slide-right","transition-next":"slide-left",onMouseenter:n[1]||(n[1]=o=>s.autoplay=!1),onMouseleave:n[2]||(n[2]=o=>s.autoplay=!1),class:"mainCarousel"},{default:ie(()=>[(x(!0),y(Q,null,K(s.newSlidesItems,o=>(x(),Ce(je,{key:o.id,name:o.id,"img-src":o.img},{default:ie(()=>[c("div",He,[C(re,{src:"/logo.png",fit:"contain",width:"90px",height:"90px","no-spinner":"",loading:"eager",class:"q-my-md q-mx-sm"})]),c("div",Ke,[c("div",Ye,P(o.title),1),c("div",Ge,P(o.subTitle),1)])]),_:2},1032,["name","img-src"]))),128))]),_:1},8,["modelValue","autoplay"])])}var Ze=N(We,[["render",Je]]);const et={props:["title"]},tt={class:"section-title"},nt=c("div",{class:"bottom-line"},null,-1);function ot(e,n,l,s,a,t){return x(),y("div",tt,[c("div",null,P(l.title),1),nt])}var ve=N(et,[["render",ot]]);const it={components:{SectionTitleComponent:ve,BlurryImgComponent:Ae},setup(){const{locale:e,t:n}=Y({useScope:"global"}),l=m(()=>({desc:n("ServiceSection.desc"),list:n("ServiceSection.list").split(",")})),s=m(()=>[{id:1,img:"/guard-1.jpg",title:n("ServicesList[0].title"),subTitle:n("ServicesList[0].subTitle")},{id:2,img:"/guard-3.jpg",title:n("ServicesList[1].title"),subTitle:n("ServicesList[1].subTitle")},{id:3,img:"/cams-1.webp",title:n("ServicesList[2].title"),subTitle:n("ServicesList[2].subTitle")}]);return{locale:e,serviceSection:l,sercviceItems:s}}},st={id:"servicesSection",class:"servicesSection","data-aos":"fade-right","data-aos-offset":"200","data-aos-easing":"ease-in-out"},at={class:"row flex justify-center q-mt-xl q-mb-lg"},lt={class:"row justify-center"},rt={class:"col-lg-10 col-md-10 col-sm-11 desc"},ct={class:"text-h4 text-weight-bold q-px-lg text-center"},ut={class:"row justify-evenly q-my-xl q-px-lg"},dt={class:"service--card full-height"},vt={class:"content-container"},mt={class:"test"},pt={class:"service__title"},ft={class:"service__desc"},gt={class:"btn-wrapper"};function _t(e,n,l,s,a,t){const o=A("section-title-component"),r=A("blurry-img-component");return x(),y("section",st,[c("div",at,[C(o,{class:"col-md-3 col-sm-12",title:s.locale=="en"?"Our Services":"Nos Services"},null,8,["title"])]),c("div",lt,[c("div",rt,[c("div",ct,P(s.serviceSection.desc),1),c("ul",null,[(x(!0),y(Q,null,K(s.serviceSection.list,(v,p)=>(x(),y("li",{key:p,class:"text-h6 q-mr-xl text-weight-bold"},P(v),1))),128))])])]),c("div",ut,[(x(!0),y(Q,null,K(s.sercviceItems,(v,p)=>(x(),y("div",{key:p,class:"col-lg-3 col-md-4 col-sm-6 col-xs-12 q-px-lg-sm q-px-md-lg q-px-sm-md q-py-md text-center"},[c("div",dt,[C(r,{width:"100%",height:"224px",image:v.img},null,8,["image"]),c("div",vt,[c("div",mt,[c("div",pt,P(v.title),1),c("div",ft,P(v.subTitle),1)]),c("div",gt,[C(H,{color:"negative",label:s.locale=="en"?"Read More":"En savoir plus",size:"md",onClick:u=>e.$router.push(`/service/${v.id}`)},null,8,["label","onClick"])])])])]))),128))])])}var ht=N(it,[["render",_t]]);const xt={setup(){const{t:e}=Y({useScope:"global"});return{aboutusList:m(()=>[{id:1,icon:"/security-guard.svg",title:e("AboutUs[0].title"),subTitle:e("AboutUs[0].subTitle")},{id:2,icon:"/motivated-guards.svg",title:e("AboutUs[1].title"),subTitle:e("AboutUs[1].subTitle")}])}}},bt={id:"aboutUs",class:"about-us--wrapper row wrap"},yt={class:"col-3 text-center"},St={class:"content-wrapper col-9 q-px-sm"},Ct={class:"text-h5"},$t={class:"text-justify q-pr-lg"};function qt(e,n,l,s,a,t){return x(),y("section",bt,[(x(!0),y(Q,null,K(s.aboutusList,(o,r)=>(x(),y("div",{class:$e(["col-lg-6 col-md-6 col-sm-12 row no-wrap q-px-sm q-py-xl",r%2===0?"bg-grey-2":"bg-grey-4"]),key:o.id},[c("div",yt,[C(re,{width:"58px",fit:"contain",src:o.icon},null,8,["src"])]),c("div",St,[c("div",Ct,P(o.title),1),c("div",$t,P(o.subTitle),1)])],2))),128))])}var wt=N(xt,[["render",qt]]);const Pt={components:{SectionTitleComponent:ve},setup(){const{locale:e,t:n}=Y({useScope:"global"});return{locale:e}}},Tt={id:"contactUs",class:"contact-us","data-aos":"fade-up","data-aos-offset":"200","data-aos-easing":"ease-in-out"},kt={class:"row flex justify-center q-mt-xl q-mb-lg"},It=c("div",{class:"row justify-center q-mt-xl"},[c("div",{class:"col-lg-3 col-md-6 col-sm-12 q-my-lg text-center contact-us-item"}," 1211,blvd de avoir #205 lava "),c("div",{class:"col-lg-3 col-md-6 col-sm-12 q-my-lg text-center contact-us-item"}," 1-233-1333 "),c("div",{class:"col-lg-3 col-md-6 col-sm-12 q-my-lg text-center contact-us-item"}," Service @securalpha.com ")],-1);function At(e,n,l,s,a,t){const o=A("section-title-component");return x(),y("section",Tt,[c("div",kt,[C(o,{class:"col-md-3 col-sm-12",title:s.locale=="en"?"Contact Us":"Contactez Nous"},null,8,["title"])]),It])}var Bt=N(Pt,[["render",At]]);const Mt=qe({name:"IndexPage",components:{MainCarousel:Ze,AboutUs:wt,ServicesSection:ht,ContactUs:Bt}});function Lt(e,n,l,s,a,t){const o=A("main-carousel"),r=A("about-us"),v=A("services-section"),p=A("contact-us");return x(),y(Q,null,[C(o),C(r),C(v),C(p)],64)}var zt=N(Mt,[["render",Lt]]);export{zt as default};
