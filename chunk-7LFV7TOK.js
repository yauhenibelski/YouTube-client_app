import{a as ot,d as st,s as N}from"./chunk-PB4YVX6M.js";import{Bb as S,D as G,Db as k,G as V,Ha as f,L as H,La as X,Nb as rt,Oa as F,Pa as A,Qa as v,R as j,Sb as U,U as p,V as Y,Wa as K,Y as P,Z as C,_ as E,aa as q,ab as Q,ba as T,ca as Z,d as O,da as J,db as tt,eb as et,fb as nt,hb as I,ib as u,j as L,la as $,m as l,n as W,q as m,sb as it,tb as at,w as D,z,zb as c}from"./chunk-ZEAMJ53Z.js";var vt=["*"],x;function wt(){if(x===void 0&&(x=null,typeof window<"u")){let a=window;a.trustedTypes!==void 0&&(x=a.trustedTypes.createPolicy("angular#components",{createHTML:i=>i}))}return x}function _(a){return wt()?.createHTML(a)||a}function lt(a){return Error(`Unable to find icon with the name "${a}"`)}function yt(){return Error("Could not find HttpClient provider for use with Angular Material icons. Please include the HttpClientModule from @angular/common/http in your app imports.")}function ut(a){return Error(`The URL provided to MatIconRegistry was not trusted as a resource URL via Angular's DomSanitizer. Attempted URL was "${a}".`)}function ct(a){return Error(`The literal provided to MatIconRegistry was not trusted as safe HTML by Angular's DomSanitizer. Attempted literal was "${a}".`)}var g=class{constructor(i,y,t){this.url=i,this.svgText=y,this.options=t}},Ct=(()=>{let i=class i{constructor(t,e,n,r){this._httpClient=t,this._sanitizer=e,this._errorHandler=r,this._svgIconConfigs=new Map,this._iconSetConfigs=new Map,this._cachedIconsByUrl=new Map,this._inProgressUrlFetches=new Map,this._fontCssClassesByAlias=new Map,this._resolvers=[],this._defaultFontSetClass=["material-icons","mat-ligature-font"],this._document=n}addSvgIcon(t,e,n){return this.addSvgIconInNamespace("",t,e,n)}addSvgIconLiteral(t,e,n){return this.addSvgIconLiteralInNamespace("",t,e,n)}addSvgIconInNamespace(t,e,n,r){return this._addSvgIconConfig(t,e,new g(n,null,r))}addSvgIconResolver(t){return this._resolvers.push(t),this}addSvgIconLiteralInNamespace(t,e,n,r){let o=this._sanitizer.sanitize(f.HTML,n);if(!o)throw ct(n);let s=_(o);return this._addSvgIconConfig(t,e,new g("",s,r))}addSvgIconSet(t,e){return this.addSvgIconSetInNamespace("",t,e)}addSvgIconSetLiteral(t,e){return this.addSvgIconSetLiteralInNamespace("",t,e)}addSvgIconSetInNamespace(t,e,n){return this._addSvgIconSetConfig(t,new g(e,null,n))}addSvgIconSetLiteralInNamespace(t,e,n){let r=this._sanitizer.sanitize(f.HTML,e);if(!r)throw ct(e);let o=_(r);return this._addSvgIconSetConfig(t,new g("",o,n))}registerFontClassAlias(t,e=t){return this._fontCssClassesByAlias.set(t,e),this}classNameForFontAlias(t){return this._fontCssClassesByAlias.get(t)||t}setDefaultFontSetClass(...t){return this._defaultFontSetClass=t,this}getDefaultFontSetClass(){return this._defaultFontSetClass}getSvgIconFromUrl(t){let e=this._sanitizer.sanitize(f.RESOURCE_URL,t);if(!e)throw ut(t);let n=this._cachedIconsByUrl.get(e);return n?l(R(n)):this._loadSvgIconFromConfig(new g(t,null)).pipe(j(r=>this._cachedIconsByUrl.set(e,r)),m(r=>R(r)))}getNamedSvgIcon(t,e=""){let n=gt(e,t),r=this._svgIconConfigs.get(n);if(r)return this._getSvgFromConfig(r);if(r=this._getIconConfigFromResolvers(e,t),r)return this._svgIconConfigs.set(n,r),this._getSvgFromConfig(r);let o=this._iconSetConfigs.get(e);return o?this._getSvgFromIconSetConfigs(t,o):W(lt(n))}ngOnDestroy(){this._resolvers=[],this._svgIconConfigs.clear(),this._iconSetConfigs.clear(),this._cachedIconsByUrl.clear()}_getSvgFromConfig(t){return t.svgText?l(R(this._svgElementFromConfig(t))):this._loadSvgIconFromConfig(t).pipe(m(e=>R(e)))}_getSvgFromIconSetConfigs(t,e){let n=this._extractIconWithNameFromAnySet(t,e);if(n)return l(n);let r=e.filter(o=>!o.svgText).map(o=>this._loadSvgIconSetFromConfig(o).pipe(z(s=>{let d=`Loading icon set URL: ${this._sanitizer.sanitize(f.RESOURCE_URL,o.url)} failed: ${s.message}`;return this._errorHandler.handleError(new Error(d)),l(null)})));return D(r).pipe(m(()=>{let o=this._extractIconWithNameFromAnySet(t,e);if(!o)throw lt(t);return o}))}_extractIconWithNameFromAnySet(t,e){for(let n=e.length-1;n>=0;n--){let r=e[n];if(r.svgText&&r.svgText.toString().indexOf(t)>-1){let o=this._svgElementFromConfig(r),s=this._extractSvgIconFromSet(o,t,r.options);if(s)return s}}return null}_loadSvgIconFromConfig(t){return this._fetchIcon(t).pipe(j(e=>t.svgText=e),m(()=>this._svgElementFromConfig(t)))}_loadSvgIconSetFromConfig(t){return t.svgText?l(null):this._fetchIcon(t).pipe(j(e=>t.svgText=e))}_extractSvgIconFromSet(t,e,n){let r=t.querySelector(`[id="${e}"]`);if(!r)return null;let o=r.cloneNode(!0);if(o.removeAttribute("id"),o.nodeName.toLowerCase()==="svg")return this._setSvgAttributes(o,n);if(o.nodeName.toLowerCase()==="symbol")return this._setSvgAttributes(this._toSvgElement(o),n);let s=this._svgElementFromString(_("<svg></svg>"));return s.appendChild(o),this._setSvgAttributes(s,n)}_svgElementFromString(t){let e=this._document.createElement("DIV");e.innerHTML=t;let n=e.querySelector("svg");if(!n)throw Error("<svg> tag not found");return n}_toSvgElement(t){let e=this._svgElementFromString(_("<svg></svg>")),n=t.attributes;for(let r=0;r<n.length;r++){let{name:o,value:s}=n[r];o!=="id"&&e.setAttribute(o,s)}for(let r=0;r<t.childNodes.length;r++)t.childNodes[r].nodeType===this._document.ELEMENT_NODE&&e.appendChild(t.childNodes[r].cloneNode(!0));return e}_setSvgAttributes(t,e){return t.setAttribute("fit",""),t.setAttribute("height","100%"),t.setAttribute("width","100%"),t.setAttribute("preserveAspectRatio","xMidYMid meet"),t.setAttribute("focusable","false"),e&&e.viewBox&&t.setAttribute("viewBox",e.viewBox),t}_fetchIcon(t){let{url:e,options:n}=t,r=n?.withCredentials??!1;if(!this._httpClient)throw yt();if(e==null)throw Error(`Cannot fetch icon from URL "${e}".`);let o=this._sanitizer.sanitize(f.RESOURCE_URL,e);if(!o)throw ut(e);let s=this._inProgressUrlFetches.get(o);if(s)return s;let h=this._httpClient.get(o,{responseType:"text",withCredentials:r}).pipe(m(d=>_(d)),V(()=>this._inProgressUrlFetches.delete(o)),H());return this._inProgressUrlFetches.set(o,h),h}_addSvgIconConfig(t,e,n){return this._svgIconConfigs.set(gt(t,e),n),this}_addSvgIconSetConfig(t,e){let n=this._iconSetConfigs.get(t);return n?n.push(e):this._iconSetConfigs.set(t,[e]),this}_svgElementFromConfig(t){if(!t.svgElement){let e=this._svgElementFromString(t.svgText);this._setSvgAttributes(e,t.options),t.svgElement=e}return t.svgElement}_getIconConfigFromResolvers(t,e){for(let n=0;n<this._resolvers.length;n++){let r=this._resolvers[n](e,t);if(r)return At(r)?new g(r.url,null,r.options):new g(r,null)}}};i.\u0275fac=function(e){return new(e||i)(C(ot,8),C(st),C(U,8),C(F))},i.\u0275prov=p({token:i,factory:i.\u0275fac,providedIn:"root"});let a=i;return a})();function R(a){return a.cloneNode(!0)}function gt(a,i){return a+":"+i}function At(a){return!!(a.url&&a.options)}var It=new P("MAT_ICON_DEFAULT_OPTIONS"),St=new P("mat-icon-location",{providedIn:"root",factory:_t});function _t(){let a=E(U),i=a?a.location:null;return{getPathname:()=>i?i.pathname+i.search:""}}var ht=["clip-path","color-profile","src","cursor","fill","filter","marker","marker-start","marker-mid","marker-end","mask","stroke"],bt=ht.map(a=>`[${a}]`).join(", "),jt=/^url\(['"]?#(.*?)['"]?\)$/,dt=(()=>{let i=class i{get color(){return this._color||this._defaultColor}set color(t){this._color=t}get svgIcon(){return this._svgIcon}set svgIcon(t){t!==this._svgIcon&&(t?this._updateSvgIcon(t):this._svgIcon&&this._clearSvgElement(),this._svgIcon=t)}get fontSet(){return this._fontSet}set fontSet(t){let e=this._cleanupFontValue(t);e!==this._fontSet&&(this._fontSet=e,this._updateFontIconClasses())}get fontIcon(){return this._fontIcon}set fontIcon(t){let e=this._cleanupFontValue(t);e!==this._fontIcon&&(this._fontIcon=e,this._updateFontIconClasses())}constructor(t,e,n,r,o,s){this._elementRef=t,this._iconRegistry=e,this._location=r,this._errorHandler=o,this.inline=!1,this._previousFontSetClass=[],this._currentIconFetch=O.EMPTY,s&&(s.color&&(this.color=this._defaultColor=s.color),s.fontSet&&(this.fontSet=s.fontSet)),n||t.nativeElement.setAttribute("aria-hidden","true")}_splitIconName(t){if(!t)return["",""];let e=t.split(":");switch(e.length){case 1:return["",e[0]];case 2:return e;default:throw Error(`Invalid icon name: "${t}"`)}}ngOnInit(){this._updateFontIconClasses()}ngAfterViewChecked(){let t=this._elementsWithExternalReferences;if(t&&t.size){let e=this._location.getPathname();e!==this._previousPath&&(this._previousPath=e,this._prependPathToReferences(e))}}ngOnDestroy(){this._currentIconFetch.unsubscribe(),this._elementsWithExternalReferences&&this._elementsWithExternalReferences.clear()}_usingFontIcon(){return!this.svgIcon}_setSvgElement(t){this._clearSvgElement();let e=this._location.getPathname();this._previousPath=e,this._cacheChildrenWithExternalReferences(t),this._prependPathToReferences(e),this._elementRef.nativeElement.appendChild(t)}_clearSvgElement(){let t=this._elementRef.nativeElement,e=t.childNodes.length;for(this._elementsWithExternalReferences&&this._elementsWithExternalReferences.clear();e--;){let n=t.childNodes[e];(n.nodeType!==1||n.nodeName.toLowerCase()==="svg")&&n.remove()}}_updateFontIconClasses(){if(!this._usingFontIcon())return;let t=this._elementRef.nativeElement,e=(this.fontSet?this._iconRegistry.classNameForFontAlias(this.fontSet).split(/ +/):this._iconRegistry.getDefaultFontSetClass()).filter(n=>n.length>0);this._previousFontSetClass.forEach(n=>t.classList.remove(n)),e.forEach(n=>t.classList.add(n)),this._previousFontSetClass=e,this.fontIcon!==this._previousFontIconClass&&!e.includes("mat-ligature-font")&&(this._previousFontIconClass&&t.classList.remove(this._previousFontIconClass),this.fontIcon&&t.classList.add(this.fontIcon),this._previousFontIconClass=this.fontIcon)}_cleanupFontValue(t){return typeof t=="string"?t.trim().split(" ")[0]:t}_prependPathToReferences(t){let e=this._elementsWithExternalReferences;e&&e.forEach((n,r)=>{n.forEach(o=>{r.setAttribute(o.name,`url('${t}#${o.value}')`)})})}_cacheChildrenWithExternalReferences(t){let e=t.querySelectorAll(bt),n=this._elementsWithExternalReferences=this._elementsWithExternalReferences||new Map;for(let r=0;r<e.length;r++)ht.forEach(o=>{let s=e[r],h=s.getAttribute(o),d=h?h.match(jt):null;if(d){let b=n.get(s);b||(b=[],n.set(s,b)),b.push({name:o,value:d[1]})}})}_updateSvgIcon(t){if(this._svgNamespace=null,this._svgName=null,this._currentIconFetch.unsubscribe(),t){let[e,n]=this._splitIconName(t);e&&(this._svgNamespace=e),n&&(this._svgName=n),this._currentIconFetch=this._iconRegistry.getNamedSvgIcon(n,e).pipe(G(1)).subscribe(r=>this._setSvgElement(r),r=>{let o=`Error retrieving icon ${e}:${n}! ${r.message}`;this._errorHandler.handleError(new Error(o))})}}};i.\u0275fac=function(e){return new(e||i)(v(X),v(Ct),$("aria-hidden"),v(St),v(F),v(It,8))},i.\u0275cmp=T({type:i,selectors:[["mat-icon"]],hostAttrs:["role","img",1,"mat-icon","notranslate"],hostVars:10,hostBindings:function(e,n){e&2&&(Q("data-mat-icon-type",n._usingFontIcon()?"font":"svg")("data-mat-icon-name",n._svgName||n.fontIcon)("data-mat-icon-namespace",n._svgNamespace||n.fontSet)("fontIcon",n._usingFontIcon()?n.fontIcon:null),nt(n.color?"mat-"+n.color:""),tt("mat-icon-inline",n.inline)("mat-icon-no-color",n.color!=="primary"&&n.color!=="accent"&&n.color!=="warn"))},inputs:{color:"color",inline:[q.HasDecoratorInputTransform,"inline","inline",rt],svgIcon:"svgIcon",fontSet:"fontSet",fontIcon:"fontIcon"},exportAs:["matIcon"],standalone:!0,features:[K,k],ngContentSelectors:vt,decls:1,vars:0,template:function(e,n){e&1&&(it(),at(0))},styles:["mat-icon,mat-icon.mat-primary,mat-icon.mat-accent,mat-icon.mat-warn{color:var(--mat-icon-color)}.mat-icon{-webkit-user-select:none;user-select:none;background-repeat:no-repeat;display:inline-block;fill:currentColor;height:24px;width:24px;overflow:hidden}.mat-icon.mat-icon-inline{font-size:inherit;height:inherit;line-height:inherit;width:inherit}.mat-icon.mat-ligature-font[fontIcon]::before{content:attr(fontIcon)}[dir=rtl] .mat-icon-rtl-mirror{transform:scale(-1, 1)}.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-prefix .mat-icon,.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-suffix .mat-icon{display:block}.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-prefix .mat-icon-button .mat-icon,.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-suffix .mat-icon-button .mat-icon{margin:auto}"],encapsulation:2,changeDetection:0});let a=i;return a})(),mt=(()=>{let i=class i{};i.\u0275fac=function(e){return new(e||i)},i.\u0275mod=Z({type:i}),i.\u0275inj=Y({imports:[N,N]});let a=i;return a})();var w=function(a){return a.red="red",a.yellow="yellow",a.green="green",a.blue="blue",a}(w||{});var pt=a=>{let i=new Date(a),y=new Date,t={days:(Date.parse(y.toDateString())-Date.parse(a))/864e5,months:(y.getUTCFullYear()-i.getFullYear())*12+(y.getMonth()-i.getMonth())};return t.months>6?w.red:t.months>1?w.yellow:t.days<7?w.blue:w.green};var Jt=(()=>{let i=class i{constructor(){this.appPaintBorderBottom=null}get style(){return{"border-bottom":"solid 3px","border-bottom-color":this.appPaintBorderBottom?pt(this.appPaintBorderBottom):"none"}}};i.\u0275fac=function(e){return new(e||i)},i.\u0275dir=J({type:i,selectors:[["","appPaintBorderBottom",""]],hostVars:2,hostBindings:function(e,n){e&2&&et(n.style)},inputs:{appPaintBorderBottom:"appPaintBorderBottom"},standalone:!0});let a=i;return a})();var Kt=(()=>{let i=class i{constructor(){this.statistics=null}};i.\u0275fac=function(e){return new(e||i)},i.\u0275cmp=T({type:i,selectors:[["app-statistics"]],inputs:{statistics:"statistics"},standalone:!0,features:[k],decls:16,vars:4,consts:[[1,"icon-wrap"]],template:function(e,n){e&1&&(I(0,"div",0)(1,"mat-icon"),c(2,"visibility"),u(),c(3),u(),I(4,"div",0)(5,"mat-icon"),c(6,"favorite"),u(),c(7),u(),I(8,"div",0)(9,"mat-icon"),c(10,"heart_broken"),u(),c(11),u(),I(12,"div",0)(13,"mat-icon"),c(14,"chat"),u(),c(15),u()),e&2&&(A(3),S(" ",n.statistics==null?null:n.statistics.viewCount,`
`),A(4),S(" ",n.statistics==null?null:n.statistics.likeCount,`
`),A(4),S(" ",n.statistics==null?null:n.statistics.dislikeCount,`
`),A(4),S(" ",n.statistics==null?null:n.statistics.commentCount,`
`))},dependencies:[mt,dt],styles:["[_nghost-%COMP%]{display:flex;justify-content:space-around;font-size:10px}.icon-wrap[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;justify-content:center;align-items:center;margin:4px}"],changeDetection:0});let a=i;return a})();var B=[{kind:"youtube#video",etag:'"Fznwjl6JEQdo1MGvHOGaz_YanRU/tmmI1yiRrmLWlKikXk1gD3TXsUI"',id:"YN8zNnV0sK8",snippet:{publishedAt:"2024-02-19T12:42:19.000Z",channelId:"UCg8ss4xW9jASrqWGP30jXiw",title:"Angular 8 - \u0411\u044B\u0441\u0442\u0440\u044B\u0439 \u043A\u0443\u0440\u0441 \u0437\u0430 60 \u043C\u0438\u043D\u0443\u0442",description:`\u041F\u043E\u043B\u043D\u044B\u0439 \u043A\u0443\u0440\u0441 \u043F\u043E Angular 8+:
https://clc.to/angular

Telegram: https://teleg.one/js_by_vladilen 
Instagram: https://www.instagram.com/vladilen.minin 
VK: https://vk.com/vladilen.minin 
\u0413\u0440\u0443\u043F\u043F\u0430 VK: https://vk.com/js_by_vladilen 

React Native: \u043C\u043E\u0431\u0438\u043B\u044C\u043D\u0430\u044F \u0440\u0430\u0437\u0440\u0430\u0431\u043E\u0442\u043A\u0430 \u043D\u0430 JavaScript:
https://clc.to/rnative

\u041F\u043E\u0434\u0434\u0435\u0440\u0436\u0430\u0442\u044C \u0432\u044B\u043F\u0443\u0441\u043A \u043D\u043E\u0432\u044B\u0445 \u0432\u0438\u0434\u0435\u043E:
\u042F\u0414: https://money.yandex.ru/to/410013757655670
PayPal: https://www.paypal.me/vladilenm 

30 \u043C\u0430\u044F 2019 \u0433\u043E\u0434\u0430 \u0431\u044B \u0440\u0435\u043B\u0438\u0437 Angular 8 \u0438 \u044F \u0440\u0435\u0448\u0438\u043B \u0437\u0430\u043F\u0438\u0441\u0430\u0442\u044C  \u043F\u043E \u043D\u0435\u043C\u0443 \u0431\u044B\u0441\u0442\u0440\u044B\u0439 \u043A\u0443\u0440\u0441. \u0412 \u0432\u0438\u0434\u0435\u043E \u0432\u044B \u0443\u0437\u043D\u0430\u0435\u0442\u0435, \u043A\u0430\u043A Angular \u0440\u0430\u0431\u043E\u0442\u0430\u0435\u0442, \u043A\u0430\u043A \u0435\u0433\u043E \u0443\u0441\u0442\u0430\u043D\u043E\u0432\u0438\u0442\u044C.
\u0412 \u0440\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442\u0435 \u0443\u0440\u043E\u043A\u0430 \u044F \u043F\u043E\u043A\u0430\u0436\u0443 \u0441\u043E\u0437\u0434\u0430\u043D\u0438\u0435 Todo \u043F\u0440\u0438\u043B\u043E\u0436\u0435\u043D\u0438\u044F \u0441 \u0440\u0430\u0437\u043D\u044B\u043C\u0438 \u043F\u043E\u0434\u0445\u043E\u0434\u0430\u043C\u0438. \u0420\u0430\u0437\u0431\u0435\u0440\u0435\u043C \u0440\u0430\u0431\u043E\u0442\u0443 \u0441 \u0441\u0435\u0440\u0432\u0435\u0440\u043E\u043C, \u0441\u0435\u0440\u0432\u0438\u0441\u0430\u043C\u0438, \u043F\u0430\u0439\u043F\u0430\u043C\u0438, \u043A\u043E\u043C\u043C\u0443\u043D\u0438\u043A\u0430\u0446\u0438\u0435\u0439 \u043C\u0435\u0436\u0434\u0443 \u043A\u043E\u043C\u043F\u043E\u043D\u0435\u043D\u0442\u0430\u043C\u0438 \u0438 \u043D\u0435\u043C\u043D\u043E\u0433\u043E RxJS

\u0418\u0441\u0445\u043E\u0434\u043D\u044B\u0439 \u043A\u043E\u0434:
https://github.com/vladilenm/angular8-cc

Angular 8 - \u0411\u044B\u0441\u0442\u0440\u044B\u0439 \u043A\u0443\u0440\u0441 \u0437\u0430 60 \u043C\u0438\u043D\u0443\u0442`,thumbnails:{default:{url:"https://i.ytimg.com/vi/YN8zNnV0sK8/default.jpg",width:120,height:90},medium:{url:"https://i.ytimg.com/vi/YN8zNnV0sK8/mqdefault.jpg",width:320,height:180},high:{url:"https://i.ytimg.com/vi/YN8zNnV0sK8/hqdefault.jpg",width:480,height:360},standard:{url:"https://i.ytimg.com/vi/YN8zNnV0sK8/sddefault.jpg",width:640,height:480},maxres:{url:"https://i.ytimg.com/vi/YN8zNnV0sK8/maxresdefault.jpg",width:1280,height:720}},channelTitle:"\u0412\u043B\u0430\u0434\u0438\u043B\u0435\u043D \u041C\u0438\u043D\u0438\u043D",tags:["angular","angular 8","angularjs","js","javascript","rxjs","angular 60 \u043C\u0438\u043D\u0443\u0442","angular 1 \u0447\u0430\u0441","angular 8 1 \u0447\u0430\u0441","\u0432\u043B\u0430\u0434\u0438\u043B\u0435\u043D \u043C\u0438\u043D\u0438\u043D","\u0443\u0440\u043E\u043A\u0438 javascript","angular 2","angular 4","angular \u0443\u0440\u043E\u043A\u0438","\u043A\u0443\u0440\u0441 angular","\u043E\u0441\u043D\u043E\u0432\u044B angular","angular \u0444\u0440\u0435\u0439\u043C\u0432\u043E\u0440\u043A","angular \u0443\u0440\u043E\u043A\u0438 \u0434\u043B\u044F \u043D\u0430\u0447\u0438\u043D\u0430\u044E\u0449\u0438\u0445","\u0443\u0440\u043E\u043A\u0438 angular","angular \u043F\u0440\u0430\u043A\u0442\u0438\u043A\u0430","\u0430\u043D\u0433\u0443\u043B\u044F\u0440","angular \u0438\u0437\u0443\u0447\u0435\u043D\u0438\u0435","angular \u043A\u0443\u0440\u0441","\u0430\u043D\u0433\u0443\u043B\u044F\u0440 4 \u0443\u0440\u043E\u043A\u0438","angular \u0443\u0440\u043E\u043A\u0438 \u043D\u0430 \u0440\u0443\u0441\u0441\u043A\u043E\u043C"],categoryId:"27",liveBroadcastContent:"none",localized:{title:"Angular 8 - \u0411\u044B\u0441\u0442\u0440\u044B\u0439 \u043A\u0443\u0440\u0441 \u0437\u0430 60 \u043C\u0438\u043D\u0443\u0442",description:`\u041F\u043E\u043B\u043D\u044B\u0439 \u043A\u0443\u0440\u0441 \u043F\u043E Angular 8+:
https://clc.to/angular

Telegram: https://teleg.one/js_by_vladilen 
Instagram: https://www.instagram.com/vladilen.minin 
VK: https://vk.com/vladilen.minin 
\u0413\u0440\u0443\u043F\u043F\u0430 VK: https://vk.com/js_by_vladilen 

React Native: \u043C\u043E\u0431\u0438\u043B\u044C\u043D\u0430\u044F \u0440\u0430\u0437\u0440\u0430\u0431\u043E\u0442\u043A\u0430 \u043D\u0430 JavaScript:
https://clc.to/rnative

\u041F\u043E\u0434\u0434\u0435\u0440\u0436\u0430\u0442\u044C \u0432\u044B\u043F\u0443\u0441\u043A \u043D\u043E\u0432\u044B\u0445 \u0432\u0438\u0434\u0435\u043E:
\u042F\u0414: https://money.yandex.ru/to/410013757655670
PayPal: https://www.paypal.me/vladilenm 

30 \u043C\u0430\u044F 2019 \u0433\u043E\u0434\u0430 \u0431\u044B \u0440\u0435\u043B\u0438\u0437 Angular 8 \u0438 \u044F \u0440\u0435\u0448\u0438\u043B \u0437\u0430\u043F\u0438\u0441\u0430\u0442\u044C  \u043F\u043E \u043D\u0435\u043C\u0443 \u0431\u044B\u0441\u0442\u0440\u044B\u0439 \u043A\u0443\u0440\u0441. \u0412 \u0432\u0438\u0434\u0435\u043E \u0432\u044B \u0443\u0437\u043D\u0430\u0435\u0442\u0435, \u043A\u0430\u043A Angular \u0440\u0430\u0431\u043E\u0442\u0430\u0435\u0442, \u043A\u0430\u043A \u0435\u0433\u043E \u0443\u0441\u0442\u0430\u043D\u043E\u0432\u0438\u0442\u044C.
\u0412 \u0440\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442\u0435 \u0443\u0440\u043E\u043A\u0430 \u044F \u043F\u043E\u043A\u0430\u0436\u0443 \u0441\u043E\u0437\u0434\u0430\u043D\u0438\u0435 Todo \u043F\u0440\u0438\u043B\u043E\u0436\u0435\u043D\u0438\u044F \u0441 \u0440\u0430\u0437\u043D\u044B\u043C\u0438 \u043F\u043E\u0434\u0445\u043E\u0434\u0430\u043C\u0438. \u0420\u0430\u0437\u0431\u0435\u0440\u0435\u043C \u0440\u0430\u0431\u043E\u0442\u0443 \u0441 \u0441\u0435\u0440\u0432\u0435\u0440\u043E\u043C, \u0441\u0435\u0440\u0432\u0438\u0441\u0430\u043C\u0438, \u043F\u0430\u0439\u043F\u0430\u043C\u0438, \u043A\u043E\u043C\u043C\u0443\u043D\u0438\u043A\u0430\u0446\u0438\u0435\u0439 \u043C\u0435\u0436\u0434\u0443 \u043A\u043E\u043C\u043F\u043E\u043D\u0435\u043D\u0442\u0430\u043C\u0438 \u0438 \u043D\u0435\u043C\u043D\u043E\u0433\u043E RxJS

\u0418\u0441\u0445\u043E\u0434\u043D\u044B\u0439 \u043A\u043E\u0434:
https://github.com/vladilenm/angular8-cc

Angular 8 - \u0411\u044B\u0441\u0442\u0440\u044B\u0439 \u043A\u0443\u0440\u0441 \u0437\u0430 60 \u043C\u0438\u043D\u0443\u0442`},defaultAudioLanguage:"en-US"},statistics:{viewCount:"33265",likeCount:"1173",dislikeCount:"26",favoriteCount:"0",commentCount:"170"}},{kind:"youtube#video",etag:'"Fznwjl6JEQdo1MGvHOGaz_YanRU/uto79F2R8W05GFpiUAcLdFGs7PQ"',id:"Fdf5aTYRW0E",snippet:{publishedAt:"2023-10-23T17:46:58.000Z",channelId:"UC29ju8bIPH5as8OGnQzwJyA",title:"Angular Crash Course",description:`In this video we will talk about what Angular is and then jump in and build a small app With Angular 7, looking at most of the fundamental concepts like components, services, modules, etc

Sponsor:
http://www.netlify.com

Code:
https://github.com/bradtraversy/angular-crash-todolist

\u{1F496} Become a Patron: Show support & get perks!
http://www.patreon.com/traversymedia

Website & Udemy Courses
http://www.traversymedia.com

Follow Traversy Media:
https://www.facebook.com/traversymedia
https://www.twitter.com/traversymedia
https://www.instagram.com/traversymedia`,thumbnails:{default:{url:"https://i.ytimg.com/vi/Fdf5aTYRW0E/default.jpg",width:120,height:90},medium:{url:"https://i.ytimg.com/vi/Fdf5aTYRW0E/mqdefault.jpg",width:320,height:180},high:{url:"https://i.ytimg.com/vi/Fdf5aTYRW0E/hqdefault.jpg",width:480,height:360},standard:{url:"https://i.ytimg.com/vi/Fdf5aTYRW0E/sddefault.jpg",width:640,height:480},maxres:{url:"https://i.ytimg.com/vi/Fdf5aTYRW0E/maxresdefault.jpg",width:1280,height:720}},channelTitle:"Traversy Media",tags:["angular","angular 7","angular tutorial","angularjs"],categoryId:"28",liveBroadcastContent:"none",localized:{title:"Angular Crash Course",description:`In this video we will talk about what Angular is and then jump in and build a small app With Angular 7, looking at most of the fundamental concepts like components, services, modules, etc

Sponsor:
http://www.netlify.com

Code:
https://github.com/bradtraversy/angular-crash-todolist

\u{1F496} Become a Patron: Show support & get perks!
http://www.patreon.com/traversymedia

Website & Udemy Courses
http://www.traversymedia.com

Follow Traversy Media:
https://www.facebook.com/traversymedia
https://www.twitter.com/traversymedia
https://www.instagram.com/traversymedia`},defaultAudioLanguage:"en"},statistics:{viewCount:"456979",likeCount:"8213",dislikeCount:"131",favoriteCount:"0",commentCount:"555"}},{kind:"youtube#video",etag:'"Fznwjl6JEQdo1MGvHOGaz_YanRU/6e0k9ik7TThWpqueHGOhTRIN1-A"',id:"k5E2AVpwsko",snippet:{publishedAt:"2024-01-05T16:48:15.000Z",channelId:"UCWv7vMbMWH4-V0ZXdmDpPBA",title:"Angular Tutorial for Beginners: Learn Angular from Scratch | Mosh",description:`\u{1F525}Get the COMPLETE COURSE (60% OFF - LIMITED TIME): https://programmingwithmosh.com/courses/angular

This Angular tutorial teaches you the fundamentals of Angular and TypeScript.

SUBSCRIBE FOR MORE VIDEOS!
https://www.youtube.com/channel/UCWv7vMbMWH4-V0ZXdmDpPBA?sub_confirmation=1


TABLE OF CONTENT 

00:00 Introduction
02:54 What is Angular?
04:54 Architecture of Angular Apps
08:41 Setting Up the Development Environment
11:25 Your First Angular App
13:50 Structure of Angular Projects
20:43 Webpack
23:57 Angular Version History 
27:31 Course Structure
31:55 TypeScript Fundamentals
32:34 What is TypeScript?
34:58 Your First TypeScript Program
37:57 Declaring Variables
42:46 Types
48:29 Type Assertions
51:15 Arrow Functions
52:59 Interfaces
56:54 Classes
01:01:22 Objects
01:05:31 Constructors
01:08:22 Access Modifiers
01:11:18 Access Modifiers in Constructor Parameters
01:12:58 Properties
01:18:15 Modules
01:23:22 Angular Fundamentals
01:23:41 Building Blocks of Angular Apps
01:27:22 Creating Components
01:37:00 Generating Components Using Angular CLI
01:41:40 Templates
01:44:08 Directives
01:47:34 Services
01:52:02 Dependency Injection
01:59:22 Generating Services Using Angular CLI
02:01:32 Exercise
 

STAY IN TOUCH

https://www.facebook.com/programmingwithmosh/
https://twitter.com/moshhamedani`,thumbnails:{default:{url:"https://i.ytimg.com/vi/k5E2AVpwsko/default.jpg",width:120,height:90},medium:{url:"https://i.ytimg.com/vi/k5E2AVpwsko/mqdefault.jpg",width:320,height:180},high:{url:"https://i.ytimg.com/vi/k5E2AVpwsko/hqdefault.jpg",width:480,height:360},standard:{url:"https://i.ytimg.com/vi/k5E2AVpwsko/sddefault.jpg",width:640,height:480},maxres:{url:"https://i.ytimg.com/vi/k5E2AVpwsko/maxresdefault.jpg",width:1280,height:720}},channelTitle:"Programming with Mosh",tags:["learn angular 4","learn angular 4 from scratch","angular4","learn angular","angular tutorial","angular 4","Angular","angular 5","angular 5 course","angular course","angular.js","angularjs","angular 2","angular2","angular 4 tutorial","angular 4 tutorial for beginners","angular tutorial for beginners","angular 4 crash course","angular 4 in 60 minutes","angularjs 4","angular 4 tutorial for beginners step by step","angular js","angularjs tutorial for beginners","angular 6","angular 7"],categoryId:"22",liveBroadcastContent:"none",localized:{title:"Angular Tutorial for Beginners: Learn Angular from Scratch | Mosh",description:`\u{1F525}Get the COMPLETE COURSE (60% OFF - LIMITED TIME): https://programmingwithmosh.com/courses/angular

This Angular tutorial teaches you the fundamentals of Angular and TypeScript.

SUBSCRIBE FOR MORE VIDEOS!
https://www.youtube.com/channel/UCWv7vMbMWH4-V0ZXdmDpPBA?sub_confirmation=1


TABLE OF CONTENT 

00:00 Introduction
02:54 What is Angular?
04:54 Architecture of Angular Apps
08:41 Setting Up the Development Environment
11:25 Your First Angular App
13:50 Structure of Angular Projects
20:43 Webpack
23:57 Angular Version History 
27:31 Course Structure
31:55 TypeScript Fundamentals
32:34 What is TypeScript?
34:58 Your First TypeScript Program
37:57 Declaring Variables
42:46 Types
48:29 Type Assertions
51:15 Arrow Functions
52:59 Interfaces
56:54 Classes
01:01:22 Objects
01:05:31 Constructors
01:08:22 Access Modifiers
01:11:18 Access Modifiers in Constructor Parameters
01:12:58 Properties
01:18:15 Modules
01:23:22 Angular Fundamentals
01:23:41 Building Blocks of Angular Apps
01:27:22 Creating Components
01:37:00 Generating Components Using Angular CLI
01:41:40 Templates
01:44:08 Directives
01:47:34 Services
01:52:02 Dependency Injection
01:59:22 Generating Services Using Angular CLI
02:01:32 Exercise
 

STAY IN TOUCH

https://www.facebook.com/programmingwithmosh/
https://twitter.com/moshhamedani`},defaultAudioLanguage:"en-US"},statistics:{viewCount:"1266085",likeCount:"18342",dislikeCount:"473",favoriteCount:"0",commentCount:"1255"}},{kind:"youtube#video",etag:'"Fznwjl6JEQdo1MGvHOGaz_YanRU/cDwx4Ds5-J9CmiqmazUetzrLZKY"',id:"Rf54BH35yrY",snippet:{publishedAt:"2019-09-04T15:00:12.000Z",channelId:"UCg8ss4xW9jASrqWGP30jXiw",title:"Angular 8 \u041E\u0441\u043D\u043E\u0432\u044B. \u041F\u043E\u043B\u043D\u044B\u0439 \u041A\u0443\u0440\u0441 \u0434\u043B\u044F \u043D\u0430\u0447\u0438\u043D\u0430\u044E\u0449\u0438\u0445",description:`\u041F\u043E\u043B\u043D\u044B\u0439 \u043A\u0443\u0440\u0441 \u043F\u043E Angular 8+:
https://clc.to/angular

\u0414\u043E\u0431\u0430\u0432\u043B\u044F\u0439\u0442\u0435 \u043C\u0435\u043D\u044F \u0432 \u0412\u041A: https://vk.com/vladilen.minin
Telegram: https://teleg.one/js_by_vladilen
Instagram: https://www.instagram.com/vladilen.minin
\u0413\u0440\u0443\u043F\u043F\u0430 \u0412\u041A: https://vk.com/js_by_vladilen

\u041F\u043E\u0434\u0434\u0435\u0440\u0436\u0430\u0442\u044C \u0432\u044B\u043F\u0443\u0441\u043A \u043D\u043E\u0432\u044B\u0445 \u0432\u0438\u0434\u0435\u043E:
\u042F\u0414: https://money.yandex.ru/to/410013757655670
PayPal: https://www.paypal.me/vladilenm 

\u0423\u0440\u043E\u043A \u043F\u043E Angular. \u0412 \u044D\u0442\u043E\u043C \u043A\u0443\u0440\u0441\u0435 \u0432\u044B \u043F\u043E\u0437\u043D\u0430\u043A\u043E\u043C\u0438\u0442\u0435\u0441\u044C \u0441\u043E \u0432\u0441\u0435\u043C\u0438 \u043E\u0441\u043D\u043E\u0432\u043D\u044B\u043C\u0438 \u044D\u043B\u0435\u043C\u0435\u043D\u0442\u0430\u043C\u0438, \u043A\u043E\u0442\u043E\u0440\u044B\u0435 \u0435\u0441\u0442\u044C \u0432 Angular \u0441 \u043F\u043E\u043B\u043D\u043E\u0433\u043E \u043D\u0443\u043B\u044F

Angular 8 \u041E\u0441\u043D\u043E\u0432\u044B. \u041F\u043E\u043B\u043D\u044B\u0439 \u041A\u0443\u0440\u0441. \u0423\u0440\u043E\u043A \u0434\u043B\u044F \u041D\u043E\u0432\u0438\u0447\u043A\u043E\u0432`,thumbnails:{default:{url:"https://i.ytimg.com/vi/Rf54BH35yrY/default.jpg",width:120,height:90},medium:{url:"https://i.ytimg.com/vi/Rf54BH35yrY/mqdefault.jpg",width:320,height:180},high:{url:"https://i.ytimg.com/vi/Rf54BH35yrY/hqdefault.jpg",width:480,height:360},standard:{url:"https://i.ytimg.com/vi/Rf54BH35yrY/sddefault.jpg",width:640,height:480},maxres:{url:"https://i.ytimg.com/vi/Rf54BH35yrY/maxresdefault.jpg",width:1280,height:720}},channelTitle:"\u0412\u043B\u0430\u0434\u0438\u043B\u0435\u043D \u041C\u0438\u043D\u0438\u043D",tags:["angular","angularjs","js","javascript","\u0443\u0440\u043E\u043A\u0438 angular","angular \u0443\u0440\u043E\u043A\u0438","angular 8","\u043A\u0443\u0440\u0441 angular","angular \u043E\u0441\u043D\u043E\u0432\u044B","\u0432\u043B\u0430\u0434\u0438\u043B\u0435\u043D","\u0432\u043B\u0430\u0434\u0438\u043B\u0435\u043D \u043C\u0438\u043D\u0438\u043D","\u043C\u0438\u043D\u0438\u043D","\u043E\u0441\u043D\u043E\u0432\u044B angular","\u0430\u043D\u0433\u0443\u043B\u044F\u0440","angular 6","angular js","angular \u0443\u0440\u043E\u043A\u0438 \u0434\u043B\u044F \u043D\u0430\u0447\u0438\u043D\u0430\u044E\u0449\u0438\u0445","angular \u0444\u0440\u0435\u0439\u043C\u0432\u043E\u0440\u043A","angular \u043F\u0440\u0430\u043A\u0442\u0438\u043A\u0430","\u0447\u0442\u043E \u0442\u0430\u043A\u043E\u0435 angular","angular cli","angular \u0443\u0440\u043E\u043A\u0438 \u043D\u0430 \u0440\u0443\u0441\u0441\u043A\u043E\u043C","\u043A\u0443\u0440\u0441\u044B \u043F\u0440\u043E\u0433\u0440\u0430\u043C\u043C\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u044F","angular tutorial"],categoryId:"27",liveBroadcastContent:"none",localized:{title:"Angular 8 \u041E\u0441\u043D\u043E\u0432\u044B. \u041F\u043E\u043B\u043D\u044B\u0439 \u041A\u0443\u0440\u0441 \u0434\u043B\u044F \u043D\u0430\u0447\u0438\u043D\u0430\u044E\u0449\u0438\u0445",description:`\u041F\u043E\u043B\u043D\u044B\u0439 \u043A\u0443\u0440\u0441 \u043F\u043E Angular 8+:
https://clc.to/angular

\u0414\u043E\u0431\u0430\u0432\u043B\u044F\u0439\u0442\u0435 \u043C\u0435\u043D\u044F \u0432 \u0412\u041A: https://vk.com/vladilen.minin
Telegram: https://teleg.one/js_by_vladilen
Instagram: https://www.instagram.com/vladilen.minin
\u0413\u0440\u0443\u043F\u043F\u0430 \u0412\u041A: https://vk.com/js_by_vladilen

\u041F\u043E\u0434\u0434\u0435\u0440\u0436\u0430\u0442\u044C \u0432\u044B\u043F\u0443\u0441\u043A \u043D\u043E\u0432\u044B\u0445 \u0432\u0438\u0434\u0435\u043E:
\u042F\u0414: https://money.yandex.ru/to/410013757655670
PayPal: https://www.paypal.me/vladilenm 

\u0423\u0440\u043E\u043A \u043F\u043E Angular. \u0412 \u044D\u0442\u043E\u043C \u043A\u0443\u0440\u0441\u0435 \u0432\u044B \u043F\u043E\u0437\u043D\u0430\u043A\u043E\u043C\u0438\u0442\u0435\u0441\u044C \u0441\u043E \u0432\u0441\u0435\u043C\u0438 \u043E\u0441\u043D\u043E\u0432\u043D\u044B\u043C\u0438 \u044D\u043B\u0435\u043C\u0435\u043D\u0442\u0430\u043C\u0438, \u043A\u043E\u0442\u043E\u0440\u044B\u0435 \u0435\u0441\u0442\u044C \u0432 Angular \u0441 \u043F\u043E\u043B\u043D\u043E\u0433\u043E \u043D\u0443\u043B\u044F

Angular 8 \u041E\u0441\u043D\u043E\u0432\u044B. \u041F\u043E\u043B\u043D\u044B\u0439 \u041A\u0443\u0440\u0441. \u0423\u0440\u043E\u043A \u0434\u043B\u044F \u041D\u043E\u0432\u0438\u0447\u043A\u043E\u0432`},defaultAudioLanguage:"en-US"},statistics:{viewCount:"14544",likeCount:"573",dislikeCount:"11",favoriteCount:"0",commentCount:"88"}},{kind:"youtube#video",etag:'"Fznwjl6JEQdo1MGvHOGaz_YanRU/_99tEunMszVYvCj2-1aUTKgOoSY"',id:"m0yGx2MGZWg",snippet:{publishedAt:"2018-05-13T07:44:08.000Z",channelId:"UCe_H8hzx9WV7Ca7Ps5gt72Q",title:"\u0427\u0442\u043E \u0442\u0430\u043A\u043E\u0435 Angular. \u041E\u0431\u0437\u043E\u0440 \u0432\u043E\u0437\u043C\u043E\u0436\u043D\u043E\u0441\u0442\u0435\u0439",description:"\u0412 \u044D\u0442\u043E\u043C \u0432\u0438\u0434\u0435\u043E \u0440\u0435\u0447\u044C \u043F\u043E\u0439\u0434\u0435\u0442 \u043F\u0440\u043E javascript \u0444\u0440\u0435\u0439\u043C\u0432\u043E\u0440\u043A Angular. \u042F \u0440\u0430\u0441\u0441\u043A\u0430\u0436\u0443 \u0447\u0442\u043E \u0442\u0430\u043A\u043E\u0435 Angular, \u0433\u0434\u0435 \u0438 \u043A\u043E\u0433\u0434\u0430 \u0435\u0433\u043E \u043F\u0440\u0438\u043C\u0435\u043D\u044F\u044E\u0442, \u0430 \u0442\u0430\u043A \u0436\u0435 \u0441\u0434\u0435\u043B\u0430\u044E \u043D\u0435\u0431\u043E\u043B\u044C\u0448\u043E\u0439 \u043E\u0431\u0437\u043E\u0440 \u0435\u0433\u043E \u0432\u043E\u0437\u043C\u043E\u0436\u043D\u043E\u0441\u0442\u0435\u0439. \u0420\u0430\u0441\u0441\u043A\u0430\u0436\u0443 \u0447\u0435\u043C \u0444\u0440\u0435\u0439\u043C\u0432\u043E\u0440\u043A \u0441\u043B\u043E\u0436\u0435\u043D \u0434\u043B\u044F \u043D\u043E\u0432\u0438\u0447\u043A\u043E\u0432 \u0438 \u0447\u0435\u043C \u043E\u043D \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0442\u0435\u043B\u044C\u043D\u043E \u0445\u043E\u0440\u043E\u0448 \u0434\u043B\u044F \u043D\u043E\u0432\u044B\u0445 \u043F\u0440\u043E\u0435\u043A\u0442\u043E\u0432. \u0421\u0435\u0439\u0447\u0430\u0441 \u0434\u043B\u044F \u0442\u043E\u0433\u043E \u0447\u0442\u043E \u0431 \u0441\u0442\u0430\u0442\u044C junior javascript \u0440\u0430\u0437\u0440\u0430\u0431\u043E\u0442\u0447\u0438\u043A\u043E\u043C \u043D\u0443\u0436\u043D\u043E \u043E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u043D\u043E \u0437\u043D\u0430\u0442\u044C \u0445\u043E\u0442\u044F \u0431\u044B \u043E\u0434\u0438\u043D \u0444\u0440\u0435\u0439\u043C\u0432\u043E\u0440\u043A js \u0438 \u0430\u043D\u0433\u0443\u043B\u044F\u0440 \u0431\u0443\u0434\u0435\u0442 \u043E\u0442\u043B\u0438\u0447\u043D\u044B\u043C \u0432\u044B\u0431\u043E\u0440\u043E\u043C.",thumbnails:{default:{url:"https://i.ytimg.com/vi/m0yGx2MGZWg/default.jpg",width:120,height:90},medium:{url:"https://i.ytimg.com/vi/m0yGx2MGZWg/mqdefault.jpg",width:320,height:180},high:{url:"https://i.ytimg.com/vi/m0yGx2MGZWg/hqdefault.jpg",width:480,height:360},standard:{url:"https://i.ytimg.com/vi/m0yGx2MGZWg/sddefault.jpg",width:640,height:480},maxres:{url:"https://i.ytimg.com/vi/m0yGx2MGZWg/maxresdefault.jpg",width:1280,height:720}},channelTitle:"Web Developer Blog",tags:["angular","\u0430\u043D\u0433\u0443\u043B\u044F\u0440","angular js","\u0443\u0440\u043E\u043A\u0438 angular","angular \u0443\u0440\u043E\u043A\u0438","angular tutorial","\u0447\u0442\u043E \u0442\u0430\u043A\u043E\u0435 angular","angular \u043E\u0431\u0437\u043E\u0440","angular \u0444\u0440\u0435\u0439\u043C\u0432\u043E\u0440\u043A","js","javascript","web development","angular 6","angular \u043F\u0440\u0438\u043C\u0435\u0440\u044B","angular \u043F\u0440\u0430\u043A\u0442\u0438\u043A\u0430","\u0441\u0442\u043E\u0438\u0442 \u043B\u0438 \u0443\u0447\u0438\u0442\u044C angular","angular \u0443\u0447\u0438\u0442\u044C","\u043F\u0440\u043E\u0433\u0440\u0430\u043C\u043C\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u0435"],categoryId:"27",liveBroadcastContent:"none",defaultLanguage:"ru",localized:{title:"\u0427\u0442\u043E \u0442\u0430\u043A\u043E\u0435 Angular. \u041E\u0431\u0437\u043E\u0440 \u0432\u043E\u0437\u043C\u043E\u0436\u043D\u043E\u0441\u0442\u0435\u0439",description:"\u0412 \u044D\u0442\u043E\u043C \u0432\u0438\u0434\u0435\u043E \u0440\u0435\u0447\u044C \u043F\u043E\u0439\u0434\u0435\u0442 \u043F\u0440\u043E javascript \u0444\u0440\u0435\u0439\u043C\u0432\u043E\u0440\u043A Angular. \u042F \u0440\u0430\u0441\u0441\u043A\u0430\u0436\u0443 \u0447\u0442\u043E \u0442\u0430\u043A\u043E\u0435 Angular, \u0433\u0434\u0435 \u0438 \u043A\u043E\u0433\u0434\u0430 \u0435\u0433\u043E \u043F\u0440\u0438\u043C\u0435\u043D\u044F\u044E\u0442, \u0430 \u0442\u0430\u043A \u0436\u0435 \u0441\u0434\u0435\u043B\u0430\u044E \u043D\u0435\u0431\u043E\u043B\u044C\u0448\u043E\u0439 \u043E\u0431\u0437\u043E\u0440 \u0435\u0433\u043E \u0432\u043E\u0437\u043C\u043E\u0436\u043D\u043E\u0441\u0442\u0435\u0439. \u0420\u0430\u0441\u0441\u043A\u0430\u0436\u0443 \u0447\u0435\u043C \u0444\u0440\u0435\u0439\u043C\u0432\u043E\u0440\u043A \u0441\u043B\u043E\u0436\u0435\u043D \u0434\u043B\u044F \u043D\u043E\u0432\u0438\u0447\u043A\u043E\u0432 \u0438 \u0447\u0435\u043C \u043E\u043D \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0442\u0435\u043B\u044C\u043D\u043E \u0445\u043E\u0440\u043E\u0448 \u0434\u043B\u044F \u043D\u043E\u0432\u044B\u0445 \u043F\u0440\u043E\u0435\u043A\u0442\u043E\u0432. \u0421\u0435\u0439\u0447\u0430\u0441 \u0434\u043B\u044F \u0442\u043E\u0433\u043E \u0447\u0442\u043E \u0431 \u0441\u0442\u0430\u0442\u044C junior javascript \u0440\u0430\u0437\u0440\u0430\u0431\u043E\u0442\u0447\u0438\u043A\u043E\u043C \u043D\u0443\u0436\u043D\u043E \u043E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u043D\u043E \u0437\u043D\u0430\u0442\u044C \u0445\u043E\u0442\u044F \u0431\u044B \u043E\u0434\u0438\u043D \u0444\u0440\u0435\u0439\u043C\u0432\u043E\u0440\u043A js \u0438 \u0430\u043D\u0433\u0443\u043B\u044F\u0440 \u0431\u0443\u0434\u0435\u0442 \u043E\u0442\u043B\u0438\u0447\u043D\u044B\u043C \u0432\u044B\u0431\u043E\u0440\u043E\u043C."},defaultAudioLanguage:"ru"},statistics:{viewCount:"43470",likeCount:"1047",dislikeCount:"198",favoriteCount:"0",commentCount:"96"}},{kind:"youtube#video",etag:'"Fznwjl6JEQdo1MGvHOGaz_YanRU/GuGydXnkvpl-L4ntYhAaLNiseZ4"',id:"VAkio68d51A",snippet:{publishedAt:"2019-02-25T00:09:23.000Z",channelId:"UCZ9qFEC82qM6Pk-54Q4TVWA",title:"What is Angular? (Explained for Beginners)",description:`When you're just starting out you are probably wondering "What is Angular exactly? When you ask that question it leads to a lot of concepts that are over your head and don't make sense. So in this video I really want to cover what exactly Angular is and why it's even necessary... all from a beginners point of view.

*** DOWNLOAD THE FREE REPORT ***
For my free report on the five best programming languages in 2019 (for beginners) go to: https://andysterkowitz.com/report`,thumbnails:{default:{url:"https://i.ytimg.com/vi/VAkio68d51A/default.jpg",width:120,height:90},medium:{url:"https://i.ytimg.com/vi/VAkio68d51A/mqdefault.jpg",width:320,height:180},high:{url:"https://i.ytimg.com/vi/VAkio68d51A/hqdefault.jpg",width:480,height:360},standard:{url:"https://i.ytimg.com/vi/VAkio68d51A/sddefault.jpg",width:640,height:480},maxres:{url:"https://i.ytimg.com/vi/VAkio68d51A/maxresdefault.jpg",width:1280,height:720}},channelTitle:"Andy Sterkowitz",tags:["angular","angular 7","angularjs","learn angular","angular.js","angular tutorial for beginners","angular for beginners","angular for dummies","what is angular","what is angular 7","angular2","angular 2","javascript","front end framework","web development","web development 2019","front end framework 2019","what is a front end framework","software development","programming","front end software developer","web developer"],categoryId:"28",liveBroadcastContent:"none",defaultLanguage:"en",localized:{title:"What is Angular? (Explained for Beginners)",description:`When you're just starting out you are probably wondering "What is Angular exactly? When you ask that question it leads to a lot of concepts that are over your head and don't make sense. So in this video I really want to cover what exactly Angular is and why it's even necessary... all from a beginners point of view.

*** DOWNLOAD THE FREE REPORT ***
For my free report on the five best programming languages in 2019 (for beginners) go to: https://andysterkowitz.com/report`},defaultAudioLanguage:"en"},statistics:{viewCount:"57997",likeCount:"1662",dislikeCount:"34",favoriteCount:"0",commentCount:"114"}},{kind:"youtube#video",etag:'"Fznwjl6JEQdo1MGvHOGaz_YanRU/u2qq5ltpXouoIrpkJgGLu8YOIeg"',id:"u1VCxpvDgsk",snippet:{publishedAt:"2018-12-01T15:00:05.000Z",channelId:"UCvuY904el7JvBlPbdqbfguw",title:"\u0423\u0440\u043E\u043A\u0438 Angular \u0434\u043B\u044F \u043D\u0430\u0447\u0438\u043D\u0430\u044E\u0449\u0438\u0445 / #1 - \u0412\u0432\u0435\u0434\u0435\u043D\u0438\u0435 \u0432 Angular",description:`\u041F\u0440\u0438\u0441\u0442\u0443\u043F\u0430\u0435\u043C \u043A \u0438\u0437\u0443\u0447\u0435\u043D\u0438\u044E \u0431\u0438\u0431\u043B\u0438\u043E\u0442\u0435\u043A\u0438 Angular. \u0412 \u0445\u043E\u0434\u0435 \u043A\u0443\u0440\u0441\u0430 \u043C\u044B \u0441\u043E\u0437\u0434\u0430\u0434\u0438\u043C \u043D\u0435\u0431\u043E\u043B\u044C\u0448\u043E\u0439 \u0441\u0430\u0439\u0442 \u0438 \u043D\u0430\u0443\u0447\u0438\u043C\u0441\u044F \u0432\u0441\u0435\u043C \u043E\u0441\u043D\u043E\u0432\u043D\u044B\u043C \u043A\u043E\u043D\u0446\u0435\u043F\u0446\u0438\u044F\u043C \u0431\u0438\u0431\u043B\u0438\u043E\u0442\u0435\u043A\u0438 Angular. \u041C\u044B \u0440\u0430\u0441\u0441\u043C\u043E\u0442\u0440\u0438\u043C \u0441\u043E\u0431\u044B\u0442\u0438\u044F, \u043A\u043E\u043C\u043F\u043E\u043D\u0435\u043D\u0442\u044B, \u0441\u043E\u0437\u0434\u0430\u043D\u0438\u0435 \u0444\u043E\u0440\u043C \u0438 \u043C\u043D\u043E\u0433\u043E\u0435 \u0434\u0440\u0443\u0433\u043E\u0435, \u0447\u0442\u043E\u0431\u044B \u0432\u044B \u0432 \u0434\u0430\u043B\u044C\u043D\u0435\u0439\u0448\u0435\u043C \u0441\u0430\u043C\u0438 \u043C\u043E\u0433\u043B\u0438 \u0441\u043E\u0437\u0434\u0430\u0432\u0430\u0442\u044C \u0432\u0435\u0431 \u0441\u0430\u0439\u0442\u044B \u043D\u0430 Angular.

1) \u041A\u0443\u0440\u0441 \u043D\u0430 \u0441\u0430\u0439\u0442\u0435 itProger: https://itproger.com/course/angular
2) Node JS: https://nodejs.org/
3) \u0420\u0435\u0434\u0430\u043A\u0442\u043E\u0440 \u043A\u043E\u0434\u0430: https://atom.io/
4) Angular CLI: https://cli.angular.io/

\u2714 \u0421\u043E\u043E\u0431\u0449\u0435\u0441\u0442\u0432\u043E \u043F\u0440\u043E\u0433\u0440\u0430\u043C\u043C\u0438\u0441\u0442\u043E\u0432: https://itproger.com/

\u2714 -------------
\u0412\u0441\u0442\u0443\u043F\u0430\u0439 \u0432 \u0433\u0440\u0443\u043F\u043F\u0443 \u0412\u043A - https://vk.com/prog_life \u{1F680}
\u0413\u0440\u0443\u043F\u043F\u0430 FaceBook - https://goo.gl/XW0aaP

Instagram: https://www.instagram.com/gosha_dudar/
Telegram: http://t.me/itProger_official
Twitter - https://twitter.com/GoshaDudar

- \u0423\u0440\u043E\u043A\u0438 \u043E\u0442 #GoshaDudar \u{1F468}\u{1F3FC}\u200D\u{1F4BB}
- \u0412\u0441\u0435 \u0443\u0440\u043E\u043A\u0438 \u043F\u043E \u0445\u0435\u0448\u0442\u0435\u0433\u0443 #goshaAngular`,thumbnails:{default:{url:"https://i.ytimg.com/vi/u1VCxpvDgsk/default.jpg",width:120,height:90},medium:{url:"https://i.ytimg.com/vi/u1VCxpvDgsk/mqdefault.jpg",width:320,height:180},high:{url:"https://i.ytimg.com/vi/u1VCxpvDgsk/hqdefault.jpg",width:480,height:360},standard:{url:"https://i.ytimg.com/vi/u1VCxpvDgsk/sddefault.jpg",width:640,height:480},maxres:{url:"https://i.ytimg.com/vi/u1VCxpvDgsk/maxresdefault.jpg",width:1280,height:720}},channelTitle:"\u0413\u043E\u0448\u0430 \u0414\u0443\u0434\u0430\u0440\u044C",tags:["angular","angular 6","angular \u0443\u0440\u043E\u043A\u0438","angular node js","angularjs","angularjs \u0443\u0440\u043E\u043A\u0438","\u0434\u043B\u044F \u043D\u0430\u0447\u0438\u043D\u0430\u044E\u0449\u0438\u0445","angular \u0443\u0440\u043E\u043A\u0438 \u043D\u0430 \u0440\u0443\u0441\u0441\u043A\u043E\u043C","\u0412\u0432\u0435\u0434\u0435\u043D\u0438\u0435 \u0432 Angular","\u0447\u0442\u043E \u0442\u0430\u043A\u043E\u0435 angular","\u0443\u0441\u0442\u0430\u043D\u043E\u0432\u043A\u0430 angular","#GoshaDudar","#goshaAngular"],categoryId:"27",liveBroadcastContent:"none",defaultLanguage:"ru",localized:{title:"\u0423\u0440\u043E\u043A\u0438 Angular \u0434\u043B\u044F \u043D\u0430\u0447\u0438\u043D\u0430\u044E\u0449\u0438\u0445 / #1 - \u0412\u0432\u0435\u0434\u0435\u043D\u0438\u0435 \u0432 Angular",description:`\u041F\u0440\u0438\u0441\u0442\u0443\u043F\u0430\u0435\u043C \u043A \u0438\u0437\u0443\u0447\u0435\u043D\u0438\u044E \u0431\u0438\u0431\u043B\u0438\u043E\u0442\u0435\u043A\u0438 Angular. \u0412 \u0445\u043E\u0434\u0435 \u043A\u0443\u0440\u0441\u0430 \u043C\u044B \u0441\u043E\u0437\u0434\u0430\u0434\u0438\u043C \u043D\u0435\u0431\u043E\u043B\u044C\u0448\u043E\u0439 \u0441\u0430\u0439\u0442 \u0438 \u043D\u0430\u0443\u0447\u0438\u043C\u0441\u044F \u0432\u0441\u0435\u043C \u043E\u0441\u043D\u043E\u0432\u043D\u044B\u043C \u043A\u043E\u043D\u0446\u0435\u043F\u0446\u0438\u044F\u043C \u0431\u0438\u0431\u043B\u0438\u043E\u0442\u0435\u043A\u0438 Angular. \u041C\u044B \u0440\u0430\u0441\u0441\u043C\u043E\u0442\u0440\u0438\u043C \u0441\u043E\u0431\u044B\u0442\u0438\u044F, \u043A\u043E\u043C\u043F\u043E\u043D\u0435\u043D\u0442\u044B, \u0441\u043E\u0437\u0434\u0430\u043D\u0438\u0435 \u0444\u043E\u0440\u043C \u0438 \u043C\u043D\u043E\u0433\u043E\u0435 \u0434\u0440\u0443\u0433\u043E\u0435, \u0447\u0442\u043E\u0431\u044B \u0432\u044B \u0432 \u0434\u0430\u043B\u044C\u043D\u0435\u0439\u0448\u0435\u043C \u0441\u0430\u043C\u0438 \u043C\u043E\u0433\u043B\u0438 \u0441\u043E\u0437\u0434\u0430\u0432\u0430\u0442\u044C \u0432\u0435\u0431 \u0441\u0430\u0439\u0442\u044B \u043D\u0430 Angular.

1) \u041A\u0443\u0440\u0441 \u043D\u0430 \u0441\u0430\u0439\u0442\u0435 itProger: https://itproger.com/course/angular
2) Node JS: https://nodejs.org/
3) \u0420\u0435\u0434\u0430\u043A\u0442\u043E\u0440 \u043A\u043E\u0434\u0430: https://atom.io/
4) Angular CLI: https://cli.angular.io/

\u2714 \u0421\u043E\u043E\u0431\u0449\u0435\u0441\u0442\u0432\u043E \u043F\u0440\u043E\u0433\u0440\u0430\u043C\u043C\u0438\u0441\u0442\u043E\u0432: https://itproger.com/

\u2714 -------------
\u0412\u0441\u0442\u0443\u043F\u0430\u0439 \u0432 \u0433\u0440\u0443\u043F\u043F\u0443 \u0412\u043A - https://vk.com/prog_life \u{1F680}
\u0413\u0440\u0443\u043F\u043F\u0430 FaceBook - https://goo.gl/XW0aaP

Instagram: https://www.instagram.com/gosha_dudar/
Telegram: http://t.me/itProger_official
Twitter - https://twitter.com/GoshaDudar

- \u0423\u0440\u043E\u043A\u0438 \u043E\u0442 #GoshaDudar \u{1F468}\u{1F3FC}\u200D\u{1F4BB}
- \u0412\u0441\u0435 \u0443\u0440\u043E\u043A\u0438 \u043F\u043E \u0445\u0435\u0448\u0442\u0435\u0433\u0443 #goshaAngular`},defaultAudioLanguage:"ru"},statistics:{viewCount:"33896",likeCount:"612",dislikeCount:"37",favoriteCount:"0",commentCount:"50"}},{kind:"youtube#video",etag:'"Fznwjl6JEQdo1MGvHOGaz_YanRU/96JEWzuOaAgaHrcnKhmatlZzPME"',id:"rc3E4tplFCU",snippet:{publishedAt:"2019-10-29T15:00:14.000Z",channelId:"UCg8ss4xW9jASrqWGP30jXiw",title:"Angular 40 \u0432\u043E\u043F\u0440\u043E\u0441\u043E\u0432 \u0434\u043B\u044F \u0441\u043E\u0431\u0435\u0441\u0435\u0434\u043E\u0432\u0430\u043D\u0438\u044F",description:`\u041F\u043E\u043B\u043D\u044B\u0439 \u043A\u0443\u0440\u0441 \u043F\u043E Angular 8+:
https://clc.to/angular

\u0414\u043E\u0431\u0430\u0432\u043B\u044F\u0439\u0442\u0435 \u043C\u0435\u043D\u044F \u0432 \u0412\u041A: https://vk.com/vladilen.minin
\u0413\u0440\u0443\u043F\u043F\u0430 \u0412\u041A: https://vk.com/js_by_vladilen
Telegram: https://teleg.one/js_by_vladilen
Instagram: https://www.instagram.com/vladilen.minin

\u041F\u043E\u0434\u0434\u0435\u0440\u0436\u0430\u0442\u044C \u0432\u044B\u043F\u0443\u0441\u043A \u043D\u043E\u0432\u044B\u0445 \u0432\u0438\u0434\u0435\u043E:
\u042F\u0414: https://money.yandex.ru/to/410013757655670
PayPal: https://www.paypal.me/vladilenm 

Angular 40 \u0432\u043E\u043F\u0440\u043E\u0441\u043E\u0432 \u0434\u043B\u044F \u0441\u043E\u0431\u0435\u0441\u0435\u0434\u043E\u0432\u0430\u043D\u0438\u044F. \u041F\u043E\u0434\u0433\u043E\u0442\u043E\u0432\u043A\u0430 \u043A \u0438\u043D\u0442\u0435\u0440\u0432\u044C\u044E`,thumbnails:{default:{url:"https://i.ytimg.com/vi/rc3E4tplFCU/default.jpg",width:120,height:90},medium:{url:"https://i.ytimg.com/vi/rc3E4tplFCU/mqdefault.jpg",width:320,height:180},high:{url:"https://i.ytimg.com/vi/rc3E4tplFCU/hqdefault.jpg",width:480,height:360},standard:{url:"https://i.ytimg.com/vi/rc3E4tplFCU/sddefault.jpg",width:640,height:480},maxres:{url:"https://i.ytimg.com/vi/rc3E4tplFCU/maxresdefault.jpg",width:1280,height:720}},channelTitle:"\u0412\u043B\u0430\u0434\u0438\u043B\u0435\u043D \u041C\u0438\u043D\u0438\u043D",tags:["angular","angularjs","js","javascript","\u0443\u0440\u043E\u043A\u0438 angular","angular \u0443\u0440\u043E\u043A\u0438","angular 8","\u043A\u0443\u0440\u0441 angular","angular \u043E\u0441\u043D\u043E\u0432\u044B","\u0432\u043B\u0430\u0434\u0438\u043B\u0435\u043D","\u0432\u043B\u0430\u0434\u0438\u043B\u0435\u043D \u043C\u0438\u043D\u0438\u043D","\u043C\u0438\u043D\u0438\u043D","\u043E\u0441\u043D\u043E\u0432\u044B angular","angular \u0432\u043E\u043F\u0440\u043E\u0441\u044B","angular \u0438\u043D\u0442\u0435\u0440\u0432\u044C\u044E","\u0441\u043E\u0431\u0435\u0441\u0435\u0434\u043E\u0432\u0430\u043D\u0438\u0435","angular \u0441\u043E\u0431\u0435\u0441\u0435\u0434\u043E\u0432\u0430\u043D\u0438\u0435","\u0432\u043E\u043F\u0440\u043E\u0441\u044B \u043D\u0430 \u0441\u043E\u0431\u0435\u0441\u0435\u0434\u043E\u0432\u0430\u043D\u0438\u0435","angular 6","angular \u0434\u043B\u044F \u043D\u0430\u0447\u0438\u043D\u0430\u044E\u0449\u0438\u0445","angular \u0443\u0440\u043E\u043A\u0438 \u043D\u0430 \u0440\u0443\u0441\u0441\u043A\u043E\u043C"],categoryId:"27",liveBroadcastContent:"none",localized:{title:"Angular 40 \u0432\u043E\u043F\u0440\u043E\u0441\u043E\u0432 \u0434\u043B\u044F \u0441\u043E\u0431\u0435\u0441\u0435\u0434\u043E\u0432\u0430\u043D\u0438\u044F",description:`\u041F\u043E\u043B\u043D\u044B\u0439 \u043A\u0443\u0440\u0441 \u043F\u043E Angular 8+:
https://clc.to/angular

\u0414\u043E\u0431\u0430\u0432\u043B\u044F\u0439\u0442\u0435 \u043C\u0435\u043D\u044F \u0432 \u0412\u041A: https://vk.com/vladilen.minin
\u0413\u0440\u0443\u043F\u043F\u0430 \u0412\u041A: https://vk.com/js_by_vladilen
Telegram: https://teleg.one/js_by_vladilen
Instagram: https://www.instagram.com/vladilen.minin

\u041F\u043E\u0434\u0434\u0435\u0440\u0436\u0430\u0442\u044C \u0432\u044B\u043F\u0443\u0441\u043A \u043D\u043E\u0432\u044B\u0445 \u0432\u0438\u0434\u0435\u043E:
\u042F\u0414: https://money.yandex.ru/to/410013757655670
PayPal: https://www.paypal.me/vladilenm 

Angular 40 \u0432\u043E\u043F\u0440\u043E\u0441\u043E\u0432 \u0434\u043B\u044F \u0441\u043E\u0431\u0435\u0441\u0435\u0434\u043E\u0432\u0430\u043D\u0438\u044F. \u041F\u043E\u0434\u0433\u043E\u0442\u043E\u0432\u043A\u0430 \u043A \u0438\u043D\u0442\u0435\u0440\u0432\u044C\u044E`},defaultAudioLanguage:"en-US"},statistics:{viewCount:"6824",likeCount:"595",dislikeCount:"10",favoriteCount:"0",commentCount:"126"}},{kind:"youtube#video",etag:'"Fznwjl6JEQdo1MGvHOGaz_YanRU/pvVvPt5cchXjCoSYxodr18lOaEg"',id:"NaZwVUHnmfE",snippet:{publishedAt:"2019-06-19T16:06:13.000Z",channelId:"UCg8ss4xW9jASrqWGP30jXiw",title:"Angular 8 + RxJS. \u041F\u0440\u0438\u043B\u043E\u0436\u0435\u043D\u0438\u0435 \u041E\u0440\u0433\u0430\u043D\u0430\u0439\u0437\u0435\u0440 \u0421 \u041D\u0443\u043B\u044F (\u0414\u043B\u044F \u041E\u043F\u044B\u0442\u043D\u044B\u0445!)",description:`\u041A\u0443\u0440\u0441 \u043F\u043E Angular 8+: 
https://clc.to/angular 

\u0414\u043E\u0431\u0430\u0432\u043B\u044F\u0439\u0442\u0435 \u043C\u0435\u043D\u044F \u0432 \u0412\u041A: https://vk.com/vladilen.minin
Telegram: https://teleg.one/js_by_vladilen
Instagram: https://www.instagram.com/vladilen.minin
\u0413\u0440\u0443\u043F\u043F\u0430 \u0412\u041A: https://vk.com/js_by_vladilen

\u041F\u043E\u0434\u0434\u0435\u0440\u0436\u0430\u0442\u044C \u0432\u044B\u043F\u0443\u0441\u043A \u043D\u043E\u0432\u044B\u0445 \u0432\u0438\u0434\u0435\u043E:
\u042F\u0414: https://money.yandex.ru/to/410013757655670
PayPal: https://www.paypal.me/vladilenm 

\u0412 \u0432\u0438\u0434\u0435\u043E \u044F \u043F\u043E\u043A\u0430\u0436\u0443 \u0440\u0430\u0437\u0440\u0430\u0431\u043E\u0442\u043A\u0443 \u043F\u0440\u0438\u043B\u043E\u0436\u0435\u043D\u0438\u044F \u043E\u0440\u0433\u0430\u043D\u0430\u0439\u0437\u0435\u0440\u0430 \u0441 \u043D\u0443\u043B\u044F.
\u0412 \u0432\u0438\u0434\u0435\u043E \u044F \u043D\u0435 \u0431\u0443\u0434\u0443 \u043F\u043E\u044F\u0441\u043D\u044F\u0442\u044C \u0431\u0430\u0437\u043E\u0432\u044B\u0435 \u043C\u043E\u043C\u0435\u043D\u0442\u044B, \u0442\u0430\u043A \u043A\u0430\u043A \u044D\u0442\u043E \u043F\u0440\u0430\u043A\u0442\u0438\u043A\u0430 \u0434\u043B\u044F \u043E\u043F\u044B\u0442\u043D\u044B\u0445 \u0440\u0430\u0437\u0440\u0430\u0431\u043E\u0442\u0447\u0438\u043A\u043E\u0432

\u0412 \u0440\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442\u0435 \u0432\u044B \u043F\u043E\u043B\u0443\u0447\u0438\u0442\u0435 \u043F\u0440\u0438\u043B\u043E\u0436\u0435\u043D\u0438\u0435, \u0432 \u043A\u043E\u0442\u043E\u0440\u043E\u043C \u0431\u0443\u0434\u0435\u0442 \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u044C\u0441\u044F \u043C\u043D\u043E\u0433\u043E RxJS, Firebase, MomentJS \u0438 Angular 8
\u041D\u0435 \u0431\u0443\u0434\u0435\u0442 \u043D\u0438\u043A\u0430\u043A\u0438\u0445 CSS \u0444\u0440\u0435\u0439\u043C\u0432\u043E\u0440\u043A\u043E\u0432 - \u0432\u0441\u0435 \u0441\u0442\u0438\u043B\u0438 \u0431\u0443\u0434\u0443\u0442 \u043D\u0430\u043F\u0438\u0441\u0430\u043D\u044B \u0441 \u043D\u0443\u043B\u044F \u0441 \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u043D\u0438\u0435\u043C CSS \u043F\u0435\u0440\u0435\u043C\u0435\u043D\u043D\u044B\u0445

\u0418\u0441\u0445\u043E\u0434\u043D\u044B\u0439 \u043A\u043E\u0434:
https://github.com/vladilenm/angular-organizer

Angular 8 + RxJS. \u041F\u0440\u0438\u043B\u043E\u0436\u0435\u043D\u0438\u0435 \u0426\u0435\u043B\u0438\u043A\u043E\u043C (\u0414\u043B\u044F \u041E\u043F\u044B\u0442\u043D\u044B\u0445!)
https://youtu.be/NaZwVUHnmfE`,thumbnails:{default:{url:"https://i.ytimg.com/vi/NaZwVUHnmfE/default.jpg",width:120,height:90},medium:{url:"https://i.ytimg.com/vi/NaZwVUHnmfE/mqdefault.jpg",width:320,height:180},high:{url:"https://i.ytimg.com/vi/NaZwVUHnmfE/hqdefault.jpg",width:480,height:360},standard:{url:"https://i.ytimg.com/vi/NaZwVUHnmfE/sddefault.jpg",width:640,height:480},maxres:{url:"https://i.ytimg.com/vi/NaZwVUHnmfE/maxresdefault.jpg",width:1280,height:720}},channelTitle:"\u0412\u043B\u0430\u0434\u0438\u043B\u0435\u043D \u041C\u0438\u043D\u0438\u043D",tags:["angular","angular 8","vladilen","\u0432\u043B\u0430\u0434\u0438\u043B\u0435\u043D","\u0432\u043B\u0430\u0434\u0438\u043B\u0435\u043D \u043C\u0438\u043D\u0438\u043D","angularjs","angular \u043F\u0440\u0430\u043A\u0442\u0438\u043A\u0430","\u0443\u0440\u043E\u043A\u0438 angular","rxjs","rxjs \u0443\u0440\u043E\u043A\u0438","momentjs","js","javascript","web","frontend","\u0430\u043D\u0433\u0443\u043B\u044F\u0440","angular \u0443\u0440\u043E\u043A\u0438","angular \u0443\u0440\u043E\u043A\u0438 \u0434\u043B\u044F \u043D\u0430\u0447\u0438\u043D\u0430\u044E\u0449\u0438\u0445","\u0441\u043E\u0437\u0434\u0430\u043D\u0438\u0435 \u043F\u0440\u0438\u043B\u043E\u0436\u0435\u043D\u0438\u044F \u043D\u0430 angular 4","angular 60 \u043C\u0438\u043D\u0443\u0442","\u0438\u0437\u0443\u0447\u0435\u043D\u0438\u0435 angular","angular 6","\u0430\u043D\u0433\u0443\u043B\u044F\u0440 7 \u0443\u0440\u043E\u043A\u0438","\u0440\u0435\u0430\u043A\u0442\u0438\u0432\u043D\u043E\u0435 \u043F\u0440\u043E\u0433\u0440\u0430\u043C\u043C\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u0435"],categoryId:"27",liveBroadcastContent:"none",localized:{title:"Angular 8 + RxJS. \u041F\u0440\u0438\u043B\u043E\u0436\u0435\u043D\u0438\u0435 \u041E\u0440\u0433\u0430\u043D\u0430\u0439\u0437\u0435\u0440 \u0421 \u041D\u0443\u043B\u044F (\u0414\u043B\u044F \u041E\u043F\u044B\u0442\u043D\u044B\u0445!)",description:`\u041A\u0443\u0440\u0441 \u043F\u043E Angular 8+: 
https://clc.to/angular 

\u0414\u043E\u0431\u0430\u0432\u043B\u044F\u0439\u0442\u0435 \u043C\u0435\u043D\u044F \u0432 \u0412\u041A: https://vk.com/vladilen.minin
Telegram: https://teleg.one/js_by_vladilen
Instagram: https://www.instagram.com/vladilen.minin
\u0413\u0440\u0443\u043F\u043F\u0430 \u0412\u041A: https://vk.com/js_by_vladilen

\u041F\u043E\u0434\u0434\u0435\u0440\u0436\u0430\u0442\u044C \u0432\u044B\u043F\u0443\u0441\u043A \u043D\u043E\u0432\u044B\u0445 \u0432\u0438\u0434\u0435\u043E:
\u042F\u0414: https://money.yandex.ru/to/410013757655670
PayPal: https://www.paypal.me/vladilenm 

\u0412 \u0432\u0438\u0434\u0435\u043E \u044F \u043F\u043E\u043A\u0430\u0436\u0443 \u0440\u0430\u0437\u0440\u0430\u0431\u043E\u0442\u043A\u0443 \u043F\u0440\u0438\u043B\u043E\u0436\u0435\u043D\u0438\u044F \u043E\u0440\u0433\u0430\u043D\u0430\u0439\u0437\u0435\u0440\u0430 \u0441 \u043D\u0443\u043B\u044F.
\u0412 \u0432\u0438\u0434\u0435\u043E \u044F \u043D\u0435 \u0431\u0443\u0434\u0443 \u043F\u043E\u044F\u0441\u043D\u044F\u0442\u044C \u0431\u0430\u0437\u043E\u0432\u044B\u0435 \u043C\u043E\u043C\u0435\u043D\u0442\u044B, \u0442\u0430\u043A \u043A\u0430\u043A \u044D\u0442\u043E \u043F\u0440\u0430\u043A\u0442\u0438\u043A\u0430 \u0434\u043B\u044F \u043E\u043F\u044B\u0442\u043D\u044B\u0445 \u0440\u0430\u0437\u0440\u0430\u0431\u043E\u0442\u0447\u0438\u043A\u043E\u0432

\u0412 \u0440\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442\u0435 \u0432\u044B \u043F\u043E\u043B\u0443\u0447\u0438\u0442\u0435 \u043F\u0440\u0438\u043B\u043E\u0436\u0435\u043D\u0438\u0435, \u0432 \u043A\u043E\u0442\u043E\u0440\u043E\u043C \u0431\u0443\u0434\u0435\u0442 \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u044C\u0441\u044F \u043C\u043D\u043E\u0433\u043E RxJS, Firebase, MomentJS \u0438 Angular 8
\u041D\u0435 \u0431\u0443\u0434\u0435\u0442 \u043D\u0438\u043A\u0430\u043A\u0438\u0445 CSS \u0444\u0440\u0435\u0439\u043C\u0432\u043E\u0440\u043A\u043E\u0432 - \u0432\u0441\u0435 \u0441\u0442\u0438\u043B\u0438 \u0431\u0443\u0434\u0443\u0442 \u043D\u0430\u043F\u0438\u0441\u0430\u043D\u044B \u0441 \u043D\u0443\u043B\u044F \u0441 \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u043D\u0438\u0435\u043C CSS \u043F\u0435\u0440\u0435\u043C\u0435\u043D\u043D\u044B\u0445

\u0418\u0441\u0445\u043E\u0434\u043D\u044B\u0439 \u043A\u043E\u0434:
https://github.com/vladilenm/angular-organizer

Angular 8 + RxJS. \u041F\u0440\u0438\u043B\u043E\u0436\u0435\u043D\u0438\u0435 \u0426\u0435\u043B\u0438\u043A\u043E\u043C (\u0414\u043B\u044F \u041E\u043F\u044B\u0442\u043D\u044B\u0445!)
https://youtu.be/NaZwVUHnmfE`},defaultAudioLanguage:"en-US"},statistics:{viewCount:"12128",likeCount:"665",dislikeCount:"11",favoriteCount:"0",commentCount:"156"}},{kind:"youtube#video",etag:'"Fznwjl6JEQdo1MGvHOGaz_YanRU/KuFm1jGNMzgjE2VlAEsPgRVra4o"',id:"G0bBLvWXBvc",snippet:{publishedAt:"2019-09-16T16:53:41.000Z",channelId:"UCsBjURrPoezykLs9EqgamOA",title:"Angular for Beginners - Let's build a Tic-Tac-Toe PWA",description:`Learn the basics of Angular 8 \u{1F680} by building a tic-tac-toe game \u{1F579}\uFE0F from scratch...Then deploy it as an installable progressive web app (PWA). Go beyond the basics \u{1F449}https://fireship.io/courses/angular/

Full Source Code: https://github.com/fireship-io/angular-tic-tac-toe
Angular Docs: https://angular.io/

#angular #pwa #tutorial

Take Angular quizzes \u{1F913}

iOS https://itunes.apple.com/us/app/fireship/id1462592372?mt=8
Android https://play.google.com/store/apps/details?id=io.fireship.quizapp

Upgrade to Fireship PRO at https://fireship.io/pro
Use code lORhwXd2 for 25% off your first payment.`,thumbnails:{default:{url:"https://i.ytimg.com/vi/G0bBLvWXBvc/default.jpg",width:120,height:90},medium:{url:"https://i.ytimg.com/vi/G0bBLvWXBvc/mqdefault.jpg",width:320,height:180},high:{url:"https://i.ytimg.com/vi/G0bBLvWXBvc/hqdefault.jpg",width:480,height:360},standard:{url:"https://i.ytimg.com/vi/G0bBLvWXBvc/sddefault.jpg",width:640,height:480},maxres:{url:"https://i.ytimg.com/vi/G0bBLvWXBvc/maxresdefault.jpg",width:1280,height:720}},channelTitle:"Fireship",tags:["webdev","app development","lesson","tutorial","beginners","beginner","basic","angular tutorial","angular basics","angular for beginners","angular 8","angular components","learn angular"],categoryId:"28",liveBroadcastContent:"none",localized:{title:"Angular for Beginners - Let's build a Tic-Tac-Toe PWA",description:`Learn the basics of Angular 8 \u{1F680} by building a tic-tac-toe game \u{1F579}\uFE0F from scratch...Then deploy it as an installable progressive web app (PWA). Go beyond the basics \u{1F449}https://fireship.io/courses/angular/

Full Source Code: https://github.com/fireship-io/angular-tic-tac-toe
Angular Docs: https://angular.io/

#angular #pwa #tutorial

Take Angular quizzes \u{1F913}

iOS https://itunes.apple.com/us/app/fireship/id1462592372?mt=8
Android https://play.google.com/store/apps/details?id=io.fireship.quizapp

Upgrade to Fireship PRO at https://fireship.io/pro
Use code lORhwXd2 for 25% off your first payment.`},defaultAudioLanguage:"en"},statistics:{viewCount:"56657",likeCount:"2092",dislikeCount:"36",favoriteCount:"0",commentCount:"128"}}];var ft=(()=>{let i=class i{getContent(){return l(B)}getContentByID(t){let e=B.find(({id:n})=>n===t);return l(e||null)}};i.\u0275fac=function(e){return new(e||i)},i.\u0275prov=p({token:i,factory:i.\u0275fac,providedIn:"root"});let a=i;return a})();var le=(()=>{let i=class i{constructor(){this.contentStore$=new L(null),this.currentContentData$=new L(null),this.contentApi=E(ft),this.activeLoadContentStoreSubscription=null,this.activeLoadCurrentContentSubscription=null,this.contentList$=this.contentStore$.asObservable(),this.currentContent$=this.currentContentData$.asObservable()}loadContent(){this.activeLoadContentStoreSubscription&&this.activeLoadContentStoreSubscription.unsubscribe(),this.contentStore$.next(null),this.activeLoadContentStoreSubscription=this.contentApi.getContent().subscribe(t=>{this.contentStore$.next(t)})}loadContentByID(t){t&&(this.activeLoadCurrentContentSubscription&&this.activeLoadCurrentContentSubscription.unsubscribe(),this.currentContentData$.next(null),this.activeLoadCurrentContentSubscription=this.contentApi.getContentByID(t).subscribe(e=>{this.currentContentData$.next(e)}))}};i.\u0275fac=function(e){return new(e||i)},i.\u0275prov=p({token:i,factory:i.\u0275fac,providedIn:"root"});let a=i;return a})();export{dt as a,mt as b,Jt as c,Kt as d,le as e};
