import{a as mt,b as lt}from"./chunk-PPYYGNDS.js";import{a as pt}from"./chunk-GXDGXEHP.js";import{F as h,N as ct,P as dt,c as J,d as W,e as K,f as $,g as tt,h as et,j as nt,k as ot,l as it,m as rt,o as at,qa as st}from"./chunk-WUYVWU6A.js";import{$a as N,$b as Q,Ab as c,Ac as _,Bb as d,Ea as E,Fa as A,Lb as M,Mb as b,Ob as U,Qb as H,Qc as Y,Rb as X,Sc as Z,Tb as u,Va as T,Wa as p,X as S,Xa as j,Z as D,Za as R,Zb as G,_ as v,_b as m,aa as k,bb as V,cb as z,da as O,ha as s,ia as x,ja as y,ka as F,mc as q,qb as L,sb as C,tb as B,xa as I,zb as a}from"./chunk-WZ6CIPJJ.js";var St=()=>["/"],w=(()=>{let t=class t{};t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=s({type:t,selectors:[["app-page-404"]],standalone:!0,features:[m],decls:7,vars:2,consts:[[1,"not-found-container"],["mat-raised-button","","color","primary",3,"routerLink"]],template:function(e,r){e&1&&(a(0,"div",0)(1,"h1"),u(2,"404"),c(),a(3,"p"),u(4,"P\xE1gina no encontrada"),c(),a(5,"a",1),u(6,"Volver al inicio"),c()()),e&2&&(T(5),L("routerLink",Q(1,St)))},dependencies:[dt,ct,it],styles:[".not-found-container[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;justify-content:center;height:100vh;text-align:center}.not-found-container[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-size:10em;margin:0}.not-found-container[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:1.5em;margin:.5em 0}.not-found-container[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{margin-top:1em}"]});let n=t;return n})();var ut=[{path:"auth",loadChildren:()=>import("./chunk-E73JXYEJ.js").then(n=>n.AUHT_ROUTES)},{path:"admin",loadChildren:()=>import("./chunk-JPIUYKY6.js").then(n=>n.ADMIN_ROUTES)},{path:"",component:lt,pathMatch:"full"},{path:"404",component:w},{path:"**",component:w}];var Dt="@",kt=(()=>{let t=class t{constructor(o,e,r,l,g){this.doc=o,this.delegate=e,this.zone=r,this.animationType=l,this.moduleImpl=g,this._rendererFactoryPromise=null,this.scheduler=O(R,{optional:!0})}ngOnDestroy(){this._engine?.flush()}loadImpl(){return(this.moduleImpl??import("./chunk-HYFFTMTG.js").then(e=>e)).catch(e=>{throw new S(5300,!1)}).then(({\u0275createEngine:e,\u0275AnimationRendererFactory:r})=>{this._engine=e(this.animationType,this.doc);let l=new r(this.delegate,this._engine,this.zone);return this.delegate=l,l})}createRenderer(o,e){let r=this.delegate.createRenderer(o,e);if(r.\u0275type===0)return r;typeof r.throwOnSyntheticProps=="boolean"&&(r.throwOnSyntheticProps=!1);let l=new P(r);return e?.data?.animation&&!this._rendererFactoryPromise&&(this._rendererFactoryPromise=this.loadImpl()),this._rendererFactoryPromise?.then(g=>{let Pt=g.createRenderer(o,e);l.use(Pt),this.scheduler?.notify(9)}).catch(g=>{l.use(r)}),l}begin(){this.delegate.begin?.()}end(){this.delegate.end?.()}whenRenderingDone(){return this.delegate.whenRenderingDone?.()??Promise.resolve()}};t.\u0275fac=function(e){j()},t.\u0275prov=D({token:t,factory:t.\u0275fac});let n=t;return n})(),P=class{constructor(t){this.delegate=t,this.replay=[],this.\u0275type=1}use(t){if(this.delegate=t,this.replay!==null){for(let i of this.replay)i(t);this.replay=null}}get data(){return this.delegate.data}destroy(){this.replay=null,this.delegate.destroy()}createElement(t,i){return this.delegate.createElement(t,i)}createComment(t){return this.delegate.createComment(t)}createText(t){return this.delegate.createText(t)}get destroyNode(){return this.delegate.destroyNode}appendChild(t,i){this.delegate.appendChild(t,i)}insertBefore(t,i,o,e){this.delegate.insertBefore(t,i,o,e)}removeChild(t,i,o){this.delegate.removeChild(t,i,o)}selectRootElement(t,i){return this.delegate.selectRootElement(t,i)}parentNode(t){return this.delegate.parentNode(t)}nextSibling(t){return this.delegate.nextSibling(t)}setAttribute(t,i,o,e){this.delegate.setAttribute(t,i,o,e)}removeAttribute(t,i,o){this.delegate.removeAttribute(t,i,o)}addClass(t,i){this.delegate.addClass(t,i)}removeClass(t,i){this.delegate.removeClass(t,i)}setStyle(t,i,o,e){this.delegate.setStyle(t,i,o,e)}removeStyle(t,i,o){this.delegate.removeStyle(t,i,o)}setProperty(t,i,o){this.shouldReplay(i)&&this.replay.push(e=>e.setProperty(t,i,o)),this.delegate.setProperty(t,i,o)}setValue(t,i){this.delegate.setValue(t,i)}listen(t,i,o){return this.shouldReplay(i)&&this.replay.push(e=>e.listen(t,i,o)),this.delegate.listen(t,i,o)}shouldReplay(t){return this.replay!==null&&t.startsWith(Dt)}};function gt(n="animations"){return V("NgAsyncAnimations"),F([{provide:N,useFactory:(t,i,o)=>new kt(t,i,o,n),deps:[_,K,z]},{provide:A,useValue:n==="noop"?"NoopAnimations":"BrowserAnimations"}])}var ft={providers:[q({eventCoalescing:!0}),rt(ut),tt(),gt(),W()]};var Ot=["*",[["mat-toolbar-row"]]],Ft=["*","mat-toolbar-row"],It=(()=>{let t=class t{};t.\u0275fac=function(e){return new(e||t)},t.\u0275dir=y({type:t,selectors:[["mat-toolbar-row"]],hostAttrs:[1,"mat-toolbar-row"],exportAs:["matToolbarRow"],standalone:!0});let n=t;return n})(),ht=(()=>{let t=class t{constructor(o,e,r){this._elementRef=o,this._platform=e,this._document=r}ngAfterViewInit(){this._platform.isBrowser&&(this._checkToolbarMixedModes(),this._toolbarRows.changes.subscribe(()=>this._checkToolbarMixedModes()))}_checkToolbarMixedModes(){this._toolbarRows.length}};t.\u0275fac=function(e){return new(e||t)(p(I),p(at),p(_))},t.\u0275cmp=s({type:t,selectors:[["mat-toolbar"]],contentQueries:function(e,r,l){if(e&1&&U(l,It,5),e&2){let g;H(g=X())&&(r._toolbarRows=g)}},hostAttrs:[1,"mat-toolbar"],hostVars:6,hostBindings:function(e,r){e&2&&(B(r.color?"mat-"+r.color:""),C("mat-toolbar-multiple-rows",r._toolbarRows.length>0)("mat-toolbar-single-row",r._toolbarRows.length===0))},inputs:{color:"color"},exportAs:["matToolbar"],standalone:!0,features:[m],ngContentSelectors:Ft,decls:2,vars:0,template:function(e,r){e&1&&(M(Ot),b(0),b(1,1))},styles:[".mat-toolbar{background:var(--mat-toolbar-container-background-color);color:var(--mat-toolbar-container-text-color)}.mat-toolbar,.mat-toolbar h1,.mat-toolbar h2,.mat-toolbar h3,.mat-toolbar h4,.mat-toolbar h5,.mat-toolbar h6{font-family:var(--mat-toolbar-title-text-font);font-size:var(--mat-toolbar-title-text-size);line-height:var(--mat-toolbar-title-text-line-height);font-weight:var(--mat-toolbar-title-text-weight);letter-spacing:var(--mat-toolbar-title-text-tracking);margin:0}.cdk-high-contrast-active .mat-toolbar{outline:solid 1px}.mat-toolbar .mat-form-field-underline,.mat-toolbar .mat-form-field-ripple,.mat-toolbar .mat-focused .mat-form-field-ripple{background-color:currentColor}.mat-toolbar .mat-form-field-label,.mat-toolbar .mat-focused .mat-form-field-label,.mat-toolbar .mat-select-value,.mat-toolbar .mat-select-arrow,.mat-toolbar .mat-form-field.mat-focused .mat-select-arrow{color:inherit}.mat-toolbar .mat-input-element{caret-color:currentColor}.mat-toolbar .mat-mdc-button-base.mat-mdc-button-base.mat-unthemed{--mdc-text-button-label-text-color:var(--mat-toolbar-container-text-color);--mdc-outlined-button-label-text-color:var(--mat-toolbar-container-text-color)}.mat-toolbar-row,.mat-toolbar-single-row{display:flex;box-sizing:border-box;padding:0 16px;width:100%;flex-direction:row;align-items:center;white-space:nowrap;height:var(--mat-toolbar-standard-height)}@media(max-width: 599px){.mat-toolbar-row,.mat-toolbar-single-row{height:var(--mat-toolbar-mobile-height)}}.mat-toolbar-multiple-rows{display:flex;box-sizing:border-box;flex-direction:column;width:100%;min-height:var(--mat-toolbar-standard-height)}@media(max-width: 599px){.mat-toolbar-multiple-rows{min-height:var(--mat-toolbar-mobile-height)}}"],encapsulation:2,changeDetection:0});let n=t;return n})();var bt=(()=>{let t=class t{};t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=x({type:t}),t.\u0275inj=v({imports:[h,h]});let n=t;return n})();var vt=(()=>{let t=class t{};t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=s({type:t,selectors:[["app-nav-gov-co"]],standalone:!0,features:[m],decls:3,vars:0,consts:[[1,"secondary"],["href","https://www.gov.co/","target","_blank"],["src","Logo-gov.co.svg",1,"logoGOV"]],template:function(e,r){e&1&&(a(0,"mat-toolbar",0)(1,"a",1),d(2,"img",2),c()())},dependencies:[bt,ht],styles:[".secondary[_ngcontent-%COMP%]{background-color:#36c;padding:8px}.logoGOV[_ngcontent-%COMP%]{height:19px;margin-left:10px}"]});let n=t;return n})();var At=["*"];var Tt=new k("MAT_CARD_CONFIG"),xt=(()=>{let t=class t{constructor(o){this.appearance=o?.appearance||"raised"}};t.\u0275fac=function(e){return new(e||t)(p(Tt,8))},t.\u0275cmp=s({type:t,selectors:[["mat-card"]],hostAttrs:[1,"mat-mdc-card","mdc-card"],hostVars:4,hostBindings:function(e,r){e&2&&C("mat-mdc-card-outlined",r.appearance==="outlined")("mdc-card--outlined",r.appearance==="outlined")},inputs:{appearance:"appearance"},exportAs:["matCard"],standalone:!0,features:[m],ngContentSelectors:At,decls:1,vars:0,template:function(e,r){e&1&&(M(),b(0))},styles:['.mdc-card{display:flex;flex-direction:column;box-sizing:border-box}.mdc-card::after{position:absolute;box-sizing:border-box;width:100%;height:100%;top:0;left:0;border:1px solid rgba(0,0,0,0);border-radius:inherit;content:"";pointer-events:none;pointer-events:none}@media screen and (forced-colors: active){.mdc-card::after{border-color:CanvasText}}.mdc-card--outlined::after{border:none}.mdc-card__content{border-radius:inherit;height:100%}.mdc-card__media{position:relative;box-sizing:border-box;background-repeat:no-repeat;background-position:center;background-size:cover}.mdc-card__media::before{display:block;content:""}.mdc-card__media:first-child{border-top-left-radius:inherit;border-top-right-radius:inherit}.mdc-card__media:last-child{border-bottom-left-radius:inherit;border-bottom-right-radius:inherit}.mdc-card__media--square::before{margin-top:100%}.mdc-card__media--16-9::before{margin-top:56.25%}.mdc-card__media-content{position:absolute;top:0;right:0;bottom:0;left:0;box-sizing:border-box}.mdc-card__primary-action{display:flex;flex-direction:column;box-sizing:border-box;position:relative;outline:none;color:inherit;text-decoration:none;cursor:pointer;overflow:hidden}.mdc-card__primary-action:first-child{border-top-left-radius:inherit;border-top-right-radius:inherit}.mdc-card__primary-action:last-child{border-bottom-left-radius:inherit;border-bottom-right-radius:inherit}.mdc-card__actions{display:flex;flex-direction:row;align-items:center;box-sizing:border-box;min-height:52px;padding:8px}.mdc-card__actions--full-bleed{padding:0}.mdc-card__action-buttons,.mdc-card__action-icons{display:flex;flex-direction:row;align-items:center;box-sizing:border-box}.mdc-card__action-icons{color:rgba(0, 0, 0, 0.6);flex-grow:1;justify-content:flex-end}.mdc-card__action-buttons+.mdc-card__action-icons{margin-left:16px;margin-right:0}[dir=rtl] .mdc-card__action-buttons+.mdc-card__action-icons,.mdc-card__action-buttons+.mdc-card__action-icons[dir=rtl]{margin-left:0;margin-right:16px}.mdc-card__action{display:inline-flex;flex-direction:row;align-items:center;box-sizing:border-box;justify-content:center;cursor:pointer;user-select:none}.mdc-card__action:focus{outline:none}.mdc-card__action--button{margin-left:0;margin-right:8px;padding:0 8px}[dir=rtl] .mdc-card__action--button,.mdc-card__action--button[dir=rtl]{margin-left:8px;margin-right:0}.mdc-card__action--button:last-child{margin-left:0;margin-right:0}[dir=rtl] .mdc-card__action--button:last-child,.mdc-card__action--button:last-child[dir=rtl]{margin-left:0;margin-right:0}.mdc-card__actions--full-bleed .mdc-card__action--button{justify-content:space-between;width:100%;height:auto;max-height:none;margin:0;padding:8px 16px;text-align:left}[dir=rtl] .mdc-card__actions--full-bleed .mdc-card__action--button,.mdc-card__actions--full-bleed .mdc-card__action--button[dir=rtl]{text-align:right}.mdc-card__action--icon{margin:-6px 0;padding:12px}.mdc-card__action--icon:not(:disabled){color:rgba(0, 0, 0, 0.6)}.mat-mdc-card{border-radius:var(--mdc-elevated-card-container-shape);background-color:var(--mdc-elevated-card-container-color);border-width:0;border-style:solid;border-color:var(--mdc-elevated-card-container-color);box-shadow:var(--mdc-elevated-card-container-elevation)}.mat-mdc-card .mdc-card::after{border-radius:var(--mdc-elevated-card-container-shape)}.mat-mdc-card-outlined{border-width:var(--mdc-outlined-card-outline-width);border-style:solid;border-color:var(--mdc-outlined-card-outline-color);border-radius:var(--mdc-outlined-card-container-shape);background-color:var(--mdc-outlined-card-container-color);box-shadow:var(--mdc-outlined-card-container-elevation)}.mat-mdc-card-outlined .mdc-card::after{border-radius:var(--mdc-outlined-card-container-shape)}.mat-mdc-card-title{font-family:var(--mat-card-title-text-font);line-height:var(--mat-card-title-text-line-height);font-size:var(--mat-card-title-text-size);letter-spacing:var(--mat-card-title-text-tracking);font-weight:var(--mat-card-title-text-weight)}.mat-mdc-card-subtitle{color:var(--mat-card-subtitle-text-color);font-family:var(--mat-card-subtitle-text-font);line-height:var(--mat-card-subtitle-text-line-height);font-size:var(--mat-card-subtitle-text-size);letter-spacing:var(--mat-card-subtitle-text-tracking);font-weight:var(--mat-card-subtitle-text-weight)}.mat-mdc-card{position:relative}.mat-mdc-card-title,.mat-mdc-card-subtitle{display:block;margin:0}.mat-mdc-card-avatar~.mat-mdc-card-header-text .mat-mdc-card-title,.mat-mdc-card-avatar~.mat-mdc-card-header-text .mat-mdc-card-subtitle{padding:16px 16px 0}.mat-mdc-card-header{display:flex;padding:16px 16px 0}.mat-mdc-card-content{display:block;padding:0 16px}.mat-mdc-card-content:first-child{padding-top:16px}.mat-mdc-card-content:last-child{padding-bottom:16px}.mat-mdc-card-title-group{display:flex;justify-content:space-between;width:100%}.mat-mdc-card-avatar{height:40px;width:40px;border-radius:50%;flex-shrink:0;margin-bottom:16px;object-fit:cover}.mat-mdc-card-avatar~.mat-mdc-card-header-text .mat-mdc-card-subtitle,.mat-mdc-card-avatar~.mat-mdc-card-header-text .mat-mdc-card-title{line-height:normal}.mat-mdc-card-sm-image{width:80px;height:80px}.mat-mdc-card-md-image{width:112px;height:112px}.mat-mdc-card-lg-image{width:152px;height:152px}.mat-mdc-card-xl-image{width:240px;height:240px}.mat-mdc-card-subtitle~.mat-mdc-card-title,.mat-mdc-card-title~.mat-mdc-card-subtitle,.mat-mdc-card-header .mat-mdc-card-header-text .mat-mdc-card-title,.mat-mdc-card-header .mat-mdc-card-header-text .mat-mdc-card-subtitle,.mat-mdc-card-title-group .mat-mdc-card-title,.mat-mdc-card-title-group .mat-mdc-card-subtitle{padding-top:0}.mat-mdc-card-content>:last-child:not(.mat-mdc-card-footer){margin-bottom:0}.mat-mdc-card-actions-align-end{justify-content:flex-end}'],encapsulation:2,changeDetection:0});let n=t;return n})();var yt=(()=>{let t=class t{};t.\u0275fac=function(e){return new(e||t)},t.\u0275dir=y({type:t,selectors:[["mat-card-content"]],hostAttrs:[1,"mat-mdc-card-content"],standalone:!0});let n=t;return n})();var Ct=(()=>{let t=class t{};t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=x({type:t}),t.\u0275inj=v({imports:[h,Y,h]});let n=t;return n})();var Mt=(()=>{let t=class t{};t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=s({type:t,selectors:[["app-footer"]],standalone:!0,features:[m],decls:21,vars:0,consts:[[1,"footer-bottom"],[1,"footer-card"],[1,"social-media-links"],["href","https://x.com/SoySustitucion","target","_blank"],["src","icon-x.png","alt","X"],["href","https://www.instagram.com/soysustitucion/","target","_blank"],["src","icon-instagram.png","alt","Instagram"],["href","https://www.youtube.com/channel/UCpEuwzI8PqS6xPnvr2-PV5g","target","_blank"],["src","youtube.png","alt","YouTube"],["href","https://www.tiktok.com/@soysustitucion?lang=es","target","_blank"],["src","tik-tok.png","alt","Tik Tok"],["href","https://www.facebook.com/SoySustitucion","target","_blank"],["src","icon-facebook.png","alt","Facebook"]],template:function(e,r){e&1&&(a(0,"div",0)(1,"mat-card",1)(2,"mat-card-content")(3,"h3"),u(4,"Direcci\xF3n de Sustituci\xF3n de Cultivos de Uso Il\xEDcito"),c(),a(5,"p"),u(6," Direcci\xF3n Sede Principal: "),d(7,"br"),u(8," Direcci\xF3n: Carrera 7 No.26, Bogot\xE1 D.C., Colombia. "),d(9,"br"),c(),a(10,"div",2)(11,"a",3),d(12,"img",4),c(),a(13,"a",5),d(14,"img",6),c(),a(15,"a",7),d(16,"img",8),c(),a(17,"a",9),d(18,"img",10),c(),a(19,"a",11),d(20,"img",12),c()()()()())},dependencies:[Ct,xt,yt],styles:[".footer-bottom[_ngcontent-%COMP%]{width:100%;background:linear-gradient(to bottom,#fff 20%,#fc0 20%);display:flex;justify-content:center;align-items:center;padding:40px 0}.footer-card[_ngcontent-%COMP%]{width:80%;max-width:1200px;background-color:#fff;border:solid 1px #e0e0e0;padding:20px;box-shadow:0 4px 8px #0000001a}.footer-card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{margin-top:0}.footer-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:10px 0}.social-media-links[_ngcontent-%COMP%]{margin:20px 0}.social-media-links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{margin-right:10px}.footer-links[_ngcontent-%COMP%]{display:flex;justify-content:center;gap:10px;flex-wrap:wrap}.footer-links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:#007bff;text-decoration:none}.footer-links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{text-decoration:underline}.social-media-links[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:30px;height:30px}"]});let n=t;return n})();var _t=(()=>{let t=class t{};t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=s({type:t,selectors:[["app-nav-serach-bar"]],standalone:!0,features:[m],decls:3,vars:0,consts:[[1,"search-bar-container"],["src","sustitucion.png","alt","Unidad de Restituci\xF3n de Tierras",1,"left-logo"],["src","ART.png","alt","Agricultura",1,"right-logo"]],template:function(e,r){e&1&&(a(0,"div",0),d(1,"img",1)(2,"img",2),c())},dependencies:[st],styles:[".search-bar-container[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center;padding:40px 50px;background-color:#fff}.right-logo[_ngcontent-%COMP%]{height:50px}.left-logo[_ngcontent-%COMP%]{height:115px}.search-container[_ngcontent-%COMP%]{display:flex;align-items:center;width:50%}.search-input[_ngcontent-%COMP%]{width:100%;padding:5px 10px;border:1px solid #ccc;border-radius:5px 0 0 5px;font-size:16px}.search-button[_ngcontent-%COMP%]{padding:5px 10px;background-color:#007bff;border:none;border-radius:0 5px 5px 0;color:#fff;cursor:pointer;display:flex;align-items:center;justify-content:center}.search-button[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{font-size:20px}@media (max-width: 800px){.search-bar-container[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:25px}.left-logo[_ngcontent-%COMP%]{height:100px}.right-logo[_ngcontent-%COMP%]{height:40px}}"]});let n=t;return n})();var wt=(()=>{let t=class t{constructor(o,e){this.router=o,this.platformId=e,this.title="Sustitucion de Cultivos Ilicitos"}ngOnInit(){Z(this.platformId)&&this.router.events.subscribe(o=>{o instanceof et&&window.scrollTo(0,0)})}};t.\u0275fac=function(e){return new(e||t)(p(ot),p(E))},t.\u0275cmp=s({type:t,selectors:[["app-root"]],standalone:!0,features:[G([J,pt,mt]),m],decls:7,vars:0,consts:[[1,"layout-container"],[1,"content"]],template:function(e,r){e&1&&(a(0,"div",0),d(1,"app-nav-gov-co")(2,"app-nav-serach-bar"),a(3,"div",1),d(4,"router-outlet"),c(),d(5,"app-footer")(6,"app-nav-gov-co"),c())},dependencies:[nt,vt,Mt,_t]});let n=t;return n})();$(wt,ft).catch(n=>console.error(n));
