import{d as ve,a as J,c as re,e as me,h as pe}from"./render.89df0dac.js";import{D as F,v as fe,G as ge,I as W,J as K,M as ne,s as Y,N as G,r as Q,c as m,w as L,g as Z,h as _,a2 as _e,x as he,a6 as be,a7 as xe,o as ue,l as ce,H as oe,a8 as ye,_ as V,S as y,W as $,j as C,V as ie,F as H,X as ee,U as $e,Z as c,a9 as A,R as I,aa as Ce,d as Se}from"./index.66d2aff6.js";import{g as se,s as ae,c as qe,u as we,a as Pe}from"./selection.91fa41b7.js";import{e as Te,b as ke,d as X}from"./QBtn.11daecf1.js";import{u as te}from"./vue-i18n.runtime.19c84382.js";import{B as Ie}from"./BlurryImgComponent.555159e7.js";import{Q as Ae}from"./QImg.244a2d4d.js";function Be(e){const n=[.06,6,50];return typeof e=="string"&&e.length&&e.split(":").forEach((l,a)=>{const s=parseFloat(l);s&&(n[a]=s)}),n}var Me=ve({name:"touch-swipe",beforeMount(e,{value:n,arg:l,modifiers:a}){if(a.mouse!==!0&&F.has.touch!==!0)return;const s=a.mouseCapture===!0?"Capture":"",t={handler:n,sensitivity:Be(l),direction:se(a),noop:fe,mouseStart(o){ae(o,t)&&ge(o)&&(W(t,"temp",[[document,"mousemove","move",`notPassive${s}`],[document,"mouseup","end","notPassiveCapture"]]),t.start(o,!0))},touchStart(o){if(ae(o,t)){const r=o.target;W(t,"temp",[[r,"touchmove","move","notPassiveCapture"],[r,"touchcancel","end","notPassiveCapture"],[r,"touchend","end","notPassiveCapture"]]),t.start(o)}},start(o,r){F.is.firefox===!0&&K(e,!0);const v=ne(o);t.event={x:v.left,y:v.top,time:Date.now(),mouse:r===!0,dir:!1}},move(o){if(t.event===void 0)return;if(t.event.dir!==!1){Y(o);return}const r=Date.now()-t.event.time;if(r===0)return;const v=ne(o),f=v.left-t.event.x,u=Math.abs(f),h=v.top-t.event.y,p=Math.abs(h);if(t.event.mouse!==!0){if(u<t.sensitivity[1]&&p<t.sensitivity[1]){t.end(o);return}}else if(window.getSelection().toString()!==""){t.end(o);return}else if(u<t.sensitivity[2]&&p<t.sensitivity[2])return;const b=u/r,S=p/r;t.direction.vertical===!0&&u<p&&u<100&&S>t.sensitivity[0]&&(t.event.dir=h<0?"up":"down"),t.direction.horizontal===!0&&u>p&&p<100&&b>t.sensitivity[0]&&(t.event.dir=f<0?"left":"right"),t.direction.up===!0&&u<p&&h<0&&u<100&&S>t.sensitivity[0]&&(t.event.dir="up"),t.direction.down===!0&&u<p&&h>0&&u<100&&S>t.sensitivity[0]&&(t.event.dir="down"),t.direction.left===!0&&u>p&&f<0&&p<100&&b>t.sensitivity[0]&&(t.event.dir="left"),t.direction.right===!0&&u>p&&f>0&&p<100&&b>t.sensitivity[0]&&(t.event.dir="right"),t.event.dir!==!1?(Y(o),t.event.mouse===!0&&(document.body.classList.add("no-pointer-events--children"),document.body.classList.add("non-selectable"),qe(),t.styleCleanup=B=>{t.styleCleanup=void 0,document.body.classList.remove("non-selectable");const q=()=>{document.body.classList.remove("no-pointer-events--children")};B===!0?setTimeout(q,50):q()}),t.handler({evt:o,touch:t.event.mouse!==!0,mouse:t.event.mouse,direction:t.event.dir,duration:r,distance:{x:u,y:p}})):t.end(o)},end(o){t.event!==void 0&&(G(t,"temp"),F.is.firefox===!0&&K(e,!1),t.styleCleanup!==void 0&&t.styleCleanup(!0),o!==void 0&&t.event.dir!==!1&&Y(o),t.event=void 0)}};if(e.__qtouchswipe=t,a.mouse===!0){const o=a.mouseCapture===!0||a.mousecapture===!0?"Capture":"";W(t,"main",[[e,"mousedown","mouseStart",`passive${o}`]])}F.has.touch===!0&&W(t,"main",[[e,"touchstart","touchStart",`passive${a.capture===!0?"Capture":""}`],[e,"touchmove","noop","notPassiveCapture"]])},updated(e,n){const l=e.__qtouchswipe;l!==void 0&&(n.oldValue!==n.value&&(typeof n.value!="function"&&l.end(),l.handler=n.value),l.direction=se(n.modifiers))},beforeUnmount(e){const n=e.__qtouchswipe;n!==void 0&&(G(n,"main"),G(n,"temp"),F.is.firefox===!0&&K(e,!1),n.styleCleanup!==void 0&&n.styleCleanup(),delete e.__qtouchswipe)}});function Le(){const e=new Map;return{getCache:function(n,l){return e[n]===void 0?e[n]=l:e[n]},getCacheWithFn:function(n,l){return e[n]===void 0?e[n]=l():e[n]}}}const Ve={name:{required:!0},disable:Boolean},le={setup(e,{slots:n}){return()=>_("div",{class:"q-panel scroll",role:"tabpanel"},J(n.default))}},Ee={modelValue:{required:!0},animated:Boolean,infinite:Boolean,swipeable:Boolean,vertical:Boolean,transitionPrev:String,transitionNext:String,transitionDuration:{type:[String,Number],default:300},keepAlive:Boolean,keepAliveInclude:[String,Array,RegExp],keepAliveExclude:[String,Array,RegExp],keepAliveMax:Number},Ue=["update:modelValue","beforeTransition","transition"];function Ne(){const{props:e,emit:n,proxy:l}=Z(),{getCacheWithFn:a}=Le();let s,t;const o=Q(null),r=Q(null);function v(i){const d=e.vertical===!0?"up":"left";w((l.$q.lang.rtl===!0?-1:1)*(i.direction===d?1:-1))}const f=m(()=>[[Me,v,void 0,{horizontal:e.vertical!==!0,vertical:e.vertical,mouse:!0}]]),u=m(()=>e.transitionPrev||`slide-${e.vertical===!0?"down":"right"}`),h=m(()=>e.transitionNext||`slide-${e.vertical===!0?"up":"left"}`),p=m(()=>`--q-transition-duration: ${e.transitionDuration}ms`),b=m(()=>typeof e.modelValue=="string"||typeof e.modelValue=="number"?e.modelValue:String(e.modelValue)),S=m(()=>({include:e.keepAliveInclude,exclude:e.keepAliveExclude,max:e.keepAliveMax})),B=m(()=>e.keepAliveInclude!==void 0||e.keepAliveExclude!==void 0);L(()=>e.modelValue,(i,d)=>{const x=P(i)===!0?U(i):-1;t!==!0&&M(x===-1?0:x<U(d)?-1:1),o.value!==x&&(o.value=x,n("beforeTransition",i,d),he(()=>{n("transition",i,d)}))});function q(){w(1)}function R(){w(-1)}function E(i){n("update:modelValue",i)}function P(i){return i!=null&&i!==""}function U(i){return s.findIndex(d=>d.props.name===i&&d.props.disable!==""&&d.props.disable!==!0)}function z(){return s.filter(i=>i.props.disable!==""&&i.props.disable!==!0)}function M(i){const d=i!==0&&e.animated===!0&&o.value!==-1?"q-transition--"+(i===-1?u.value:h.value):null;r.value!==d&&(r.value=d)}function w(i,d=o.value){let x=d+i;for(;x>-1&&x<s.length;){const k=s[x];if(k!==void 0&&k.props.disable!==""&&k.props.disable!==!0){M(i),t=!0,n("update:modelValue",k.props.name),setTimeout(()=>{t=!1});return}x+=i}e.infinite===!0&&s.length!==0&&d!==-1&&d!==s.length&&w(i,i===-1?s.length:-1)}function N(){const i=U(e.modelValue);return o.value!==i&&(o.value=i),!0}function O(){const i=P(e.modelValue)===!0&&N()&&s[o.value];return e.keepAlive===!0?[_(be,S.value,[_(B.value===!0?a(b.value,()=>({...le,name:b.value})):le,{key:b.value,style:p.value},()=>i)])]:[_("div",{class:"q-panel scroll",style:p.value,key:b.value,role:"tabpanel"},[i])]}function g(){if(s.length!==0)return e.animated===!0?[_(_e,{name:r.value},O)]:O()}function T(i){return s=Te(J(i.default,[])).filter(d=>d.props!==null&&d.props.slot===void 0&&P(d.props.name)===!0),s.length}function D(){return s}return Object.assign(l,{next:q,previous:R,goTo:E}),{panelIndex:o,panelDirectives:f,updatePanelsList:T,updatePanelIndex:N,getPanelContent:g,getEnabledPanels:z,getPanels:D,isValidPanelName:P,keepAliveProps:S,needsUniqueKeepAliveWrapper:B,goToPanelByOffset:w,goToPanel:E,nextPanel:q,previousPanel:R}}var De=re({name:"QCarouselSlide",props:{...Ve,imgSrc:String},setup(e,{slots:n}){const l=m(()=>e.imgSrc?{backgroundImage:`url("${e.imgSrc}")`}:{});return()=>_("div",{class:"q-carousel__slide",style:l.value},J(n.default))}});let j=0;const Fe={fullscreen:Boolean,noRouteFullscreenExit:Boolean},je=["update:fullscreen","fullscreen"];function Qe(){const e=Z(),{props:n,emit:l,proxy:a}=e;let s,t,o;const r=Q(!1);ke(e)===!0&&L(()=>a.$route.fullPath,()=>{n.noRouteFullscreenExit!==!0&&u()}),L(()=>n.fullscreen,h=>{r.value!==h&&v()}),L(r,h=>{l("update:fullscreen",h),l("fullscreen",h)});function v(){r.value===!0?u():f()}function f(){r.value!==!0&&(r.value=!0,o=a.$el.parentNode,o.replaceChild(t,a.$el),document.body.appendChild(a.$el),j++,j===1&&document.body.classList.add("q-body--fullscreen-mixin"),s={handler:u},oe.add(s))}function u(){r.value===!0&&(s!==void 0&&(oe.remove(s),s=void 0),o.replaceChild(a.$el,t),r.value=!1,j=Math.max(0,j-1),j===0&&(document.body.classList.remove("q-body--fullscreen-mixin"),a.$el.scrollIntoView!==void 0&&setTimeout(()=>{a.$el.scrollIntoView()})))}return xe(()=>{t=document.createElement("span")}),ue(()=>{n.fullscreen===!0&&f()}),ce(u),Object.assign(a,{toggleFullscreen:v,setFullscreen:f,exitFullscreen:u}),{inFullscreen:r,toggleFullscreen:v}}const Re=["top","right","bottom","left"],ze=["regular","flat","outline","push","unelevated"];var Oe=re({name:"QCarousel",props:{...we,...Ee,...Fe,transitionPrev:{type:String,default:"fade"},transitionNext:{type:String,default:"fade"},height:String,padding:Boolean,controlColor:String,controlTextColor:String,controlType:{type:String,validator:e=>ze.includes(e),default:"flat"},autoplay:[Number,Boolean],arrows:Boolean,prevIcon:String,nextIcon:String,navigation:Boolean,navigationPosition:{type:String,validator:e=>Re.includes(e)},navigationIcon:String,navigationActiveIcon:String,thumbnails:Boolean},emits:[...je,...Ue],setup(e,{slots:n}){const{proxy:{$q:l}}=Z(),a=Pe(e,l);let s=null,t;const{updatePanelsList:o,getPanelContent:r,panelDirectives:v,goToPanel:f,previousPanel:u,nextPanel:h,getEnabledPanels:p,panelIndex:b}=Ne(),{inFullscreen:S}=Qe(),B=m(()=>S.value!==!0&&e.height!==void 0?{height:e.height}:{}),q=m(()=>e.vertical===!0?"vertical":"horizontal"),R=m(()=>`q-carousel q-panel-parent q-carousel--with${e.padding===!0?"":"out"}-padding`+(S.value===!0?" fullscreen":"")+(a.value===!0?" q-carousel--dark q-dark":"")+(e.arrows===!0?` q-carousel--arrows-${q.value}`:"")+(e.navigation===!0?` q-carousel--navigation-${z.value}`:"")),E=m(()=>{const g=[e.prevIcon||l.iconSet.carousel[e.vertical===!0?"up":"left"],e.nextIcon||l.iconSet.carousel[e.vertical===!0?"down":"right"]];return e.vertical===!1&&l.lang.rtl===!0?g.reverse():g}),P=m(()=>e.navigationIcon||l.iconSet.carousel.navigationIcon),U=m(()=>e.navigationActiveIcon||P.value),z=m(()=>e.navigationPosition||(e.vertical===!0?"right":"bottom")),M=m(()=>({color:e.controlColor,textColor:e.controlTextColor,round:!0,[e.controlType]:!0,dense:!0}));L(()=>e.modelValue,()=>{e.autoplay&&w()}),L(()=>e.autoplay,g=>{g?w():s!==null&&(clearTimeout(s),s=null)});function w(){const g=ye(e.autoplay)===!0?Math.abs(e.autoplay):5e3;s!==null&&clearTimeout(s),s=setTimeout(()=>{s=null,g>=0?h():u()},g)}ue(()=>{e.autoplay&&w()}),ce(()=>{s!==null&&clearTimeout(s)});function N(g,T){return _("div",{class:`q-carousel__control q-carousel__navigation no-wrap absolute flex q-carousel__navigation--${g} q-carousel__navigation--${z.value}`+(e.controlColor!==void 0?` text-${e.controlColor}`:"")},[_("div",{class:"q-carousel__navigation-inner flex flex-center no-wrap"},p().map(T))])}function O(){const g=[];if(e.navigation===!0){const T=n["navigation-icon"]!==void 0?n["navigation-icon"]:i=>_(X,{key:"nav"+i.name,class:`q-carousel__navigation-icon q-carousel__navigation-icon--${i.active===!0?"":"in"}active`,...i.btnProps,onClick:i.onClick}),D=t-1;g.push(N("buttons",(i,d)=>{const x=i.props.name,k=b.value===d;return T({index:d,maxIndex:D,name:x,active:k,btnProps:{icon:k===!0?U.value:P.value,size:"sm",...M.value},onClick:()=>{f(x)}})}))}else if(e.thumbnails===!0){const T=e.controlColor!==void 0?` text-${e.controlColor}`:"";g.push(N("thumbnails",D=>{const i=D.props;return _("img",{key:"tmb#"+i.name,class:`q-carousel__thumbnail q-carousel__thumbnail--${i.name===e.modelValue?"":"in"}active`+T,src:i.imgSrc||i["img-src"],onClick:()=>{f(i.name)}})}))}return e.arrows===!0&&b.value>=0&&((e.infinite===!0||b.value>0)&&g.push(_("div",{key:"prev",class:`q-carousel__control q-carousel__arrow q-carousel__prev-arrow q-carousel__prev-arrow--${q.value} absolute flex flex-center`},[_(X,{icon:E.value[0],...M.value,onClick:u})])),(e.infinite===!0||b.value<t-1)&&g.push(_("div",{key:"next",class:`q-carousel__control q-carousel__arrow q-carousel__next-arrow q-carousel__next-arrow--${q.value} absolute flex flex-center`},[_(X,{icon:E.value[1],...M.value,onClick:h})]))),pe(n.control,g)}return()=>(t=o(n),_("div",{class:R.value,style:B.value},[me("div",{class:"q-carousel__slides-container"},r(),"sl-cont",e.swipeable,()=>v.value)].concat(O())))}});const We={setup(){const{t:e}=te({useScope:"global"}),n=m(()=>[{id:1,title:e("MainSlider[0].title"),subTitle:e("MainSlider[0].subTitle"),img:"/montreal.webp"},{id:2,title:e("MainSlider[1].title"),subTitle:e("MainSlider[1].subTitle"),img:"/guard-5.jpg"},{id:3,title:e("MainSlider[2].title"),subTitle:e("MainSlider[2].subTitle"),img:"/guard-2.jpeg"}]);return{slide:Q(1),autoplay:Q(!0),newSlidesItems:n}}},Xe={id:"mainCarousel",class:"mainCarousel--wrapper"},He={class:"absolute-center custom-caption"},Ke={class:"text-h4"},Ye={class:"text-subtitle"};function Ge(e,n,l,a,s,t){return y(),$("section",Xe,[C(Oe,{animated:"",modelValue:a.slide,"onUpdate:modelValue":n[0]||(n[0]=o=>a.slide=o),navigation:"",infinite:"",autoplay:a.autoplay,swipeable:"","transition-prev":"slide-right","transition-next":"slide-left",onMouseenter:n[1]||(n[1]=o=>a.autoplay=!1),onMouseleave:n[2]||(n[2]=o=>a.autoplay=!0),class:"mainCarousel"},{default:ie(()=>[(y(!0),$(H,null,ee(a.newSlidesItems,o=>(y(),$e(De,{key:o.id,name:o.id,"img-src":o.img},{default:ie(()=>[c("div",He,[c("div",Ke,A(o.title),1),c("div",Ye,A(o.subTitle),1)])]),_:2},1032,["name","img-src"]))),128))]),_:1},8,["modelValue","autoplay"])])}var Je=V(We,[["render",Ge]]);const Ze={props:["title"]},et={class:"section-title"},tt=c("div",{class:"bottom-line"},null,-1);function nt(e,n,l,a,s,t){return y(),$("div",et,[c("div",null,A(l.title),1),tt])}var de=V(Ze,[["render",nt]]);const ot={components:{SectionTitleComponent:de,BlurryImgComponent:Ie},setup(){const{t:e}=te({useScope:"global"});return{sercviceItems:m(()=>[{id:1,img:"/guard-1.jpg",title:e("ServicesList[0].title"),subTitle:e("ServicesList[0].subTitle")},{id:2,img:"/guard-3.jpg",title:e("ServicesList[1].title"),subTitle:e("ServicesList[1].subTitle")},{id:3,img:"/cams-1.webp",title:e("ServicesList[2].title"),subTitle:e("ServicesList[2].subTitle")}])}}},it={id:"servicesSection",class:"servicesSection","data-aos":"fade-right","data-aos-offset":"200","data-aos-easing":"ease-in-out"},st={class:"row flex justify-center q-mt-xl q-mb-lg"},at=c("div",{class:"row justify-center"},[c("div",{class:"col-6 desc"}," Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum fuga qui, quo in magnam non doloremque, dicta at voluptatibus soluta maxime, rerum voluptatum. Dolorum facere dignissimos fugiat saepe commodi quae? ")],-1),lt={class:"row justify-evenly q-my-xl"},rt={class:"service--card full-height"},ut={class:"content-container"},ct={class:"test"},dt={class:"service__title"},vt={class:"service__desc"},mt={class:"btn-wrapper"};function pt(e,n,l,a,s,t){const o=I("section-title-component"),r=I("blurry-img-component");return y(),$("section",it,[c("div",st,[C(o,{class:"col-md-3 col-sm-12",title:"Our Services"})]),at,c("div",lt,[(y(!0),$(H,null,ee(a.sercviceItems,(v,f)=>(y(),$("div",{key:f,class:"col-lg-3 col-md-4 col-sm-6 col-xs-12 q-px-lg-sm q-px-md-lg q-px-sm-md q-py-md text-center"},[c("div",rt,[C(r,{width:"100%",height:"224px",image:v.img},null,8,["image"]),c("div",ut,[c("div",ct,[c("div",dt,A(v.title),1),c("div",vt,A(v.subTitle),1)]),c("div",mt,[C(X,{color:"negative",label:"Read More",onClick:u=>e.$router.push(`/service/${v.id}`)},null,8,["onClick"])])])])]))),128))])])}var ft=V(ot,[["render",pt]]);const gt={setup(){const{t:e}=te({useScope:"global"});return{aboutusList:m(()=>[{id:1,icon:"/webcam-security.svg",title:e("AboutUs[0].title"),subTitle:e("AboutUs[0].subTitle")},{id:2,icon:"/security-guard.svg",title:e("AboutUs[1].title"),subTitle:e("AboutUs[1].subTitle")},{id:3,icon:"/motivated-guards.svg",title:e("AboutUs[2].title"),subTitle:e("AboutUs[2].subTitle")},{id:4,icon:"/allday-security.svg",title:e("AboutUs[3].title"),subTitle:e("AboutUs[3].subTitle")}])}}},_t={id:"aboutUs",class:"about-us--wrapper row wrap"},ht={class:"col-3 text-center"},bt={class:"content-wrapper col-9 q-px-sm"},xt={class:"text-h5"},yt={class:"text-justify q-pr-lg"};function $t(e,n,l,a,s,t){return y(),$("section",_t,[(y(!0),$(H,null,ee(a.aboutusList,(o,r)=>(y(),$("div",{class:Ce(["col-lg-3 col-md-6 col-sm-12 row no-wrap q-px-sm q-py-xl",r%2===0?"bg-grey-2":"bg-grey-4"]),key:o.id},[c("div",ht,[C(Ae,{width:"58px",fit:"contain",src:o.icon},null,8,["src"])]),c("div",bt,[c("div",xt,A(o.title),1),c("div",yt,A(o.subTitle),1)])],2))),128))])}var Ct=V(gt,[["render",$t]]);const St={components:{SectionTitleComponent:de}},qt={id:"contactUs",class:"contact-us","data-aos":"fade-up","data-aos-offset":"200","data-aos-easing":"ease-in-out"},wt={class:"row flex justify-center q-mt-xl q-mb-lg q-ml-xl"},Pt=c("div",{class:"row justify-center q-mt-xl"},[c("div",{class:"col-3 text-center contact-us-item"}," 1211,blvd de avoir #205 lava "),c("div",{class:"col-3 text-center contact-us-item"},"1-233-1333"),c("div",{class:"col-3 text-center contact-us-item"}," Service @securalpha.com ")],-1);function Tt(e,n,l,a,s,t){const o=I("section-title-component");return y(),$("section",qt,[c("div",wt,[C(o,{class:"col-md-3 col-sm-12",title:"Contact Us"})]),Pt])}var kt=V(St,[["render",Tt]]);const It=Se({name:"IndexPage",components:{MainCarousel:Je,AboutUs:Ct,ServicesSection:ft,ContactUs:kt}});function At(e,n,l,a,s,t){const o=I("main-carousel"),r=I("about-us"),v=I("services-section"),f=I("contact-us");return y(),$(H,null,[C(o),C(r),C(v),C(f)],64)}var Dt=V(It,[["render",At]]);export{Dt as default};
