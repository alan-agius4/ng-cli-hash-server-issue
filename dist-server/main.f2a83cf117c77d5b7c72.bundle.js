!function(e,n){for(var t in n)e[t]=n[t]}(exports,function(e){var n={};function t(o){if(n[o])return n[o].exports;var l=n[o]={i:o,l:!1,exports:{}};return e[o].call(l.exports,l,l.exports,t),l.l=!0,l.exports}return t.m=e,t.c=n,t.d=function(e,n,o){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:o})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="",t(t.s=0)}({0:function(e,n,t){e.exports=t("or6l")},"600m":function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),t("B5Z9"),n.AppServerModule=function(){}},"8wGh":function(e,n){e.exports=require("@angular/animations/browser")},A7Ap:function(e,n){e.exports=require("@angular/router")},ASwt:function(e,n){e.exports=require("@angular/platform-server")},B5Z9:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.AppShellComponent=function(){function e(){}return e.prototype.ngOnInit=function(){},e}()},"Hq/i":function(e,n){e.exports=require("@angular/platform-browser/animations")},Iksp:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.AppModule=function(){}},Ir0Z:function(e,n){e.exports=require("@angular/common/http")},LvpR:function(e,n,t){"use strict";n.styles=[""]},OQ0P:function(e,n){e.exports=require("@angular/core")},Ub9p:function(e,n,t){"use strict";var o=t("OQ0P"),l=t("600m"),r=t("YWx4"),u=t("hQx7"),p=t("jnyR"),i=t("yv0u"),d=t("wp5R"),a=t("ASwt"),m=t("8wGh"),c=t("Hq/i"),s=t("f9NF"),A=t("Ir0Z"),M=t("l0JX"),R=t("A7Ap"),f=t("B5Z9"),g=t("Iksp");n.AppServerModuleNgFactory=o.\u0275cmf(l.AppServerModule,[r.AppComponent],function(e){return o.\u0275mod([o.\u0275mpd(512,o.ComponentFactoryResolver,o.\u0275CodegenComponentFactoryResolver,[[8,[u.AppComponentNgFactory,p.AppShellComponentNgFactory]],[3,o.ComponentFactoryResolver],o.NgModuleRef]),o.\u0275mpd(5120,o.LOCALE_ID,o.\u0275q,[[3,o.LOCALE_ID]]),o.\u0275mpd(4608,i.NgLocalization,i.NgLocaleLocalization,[o.LOCALE_ID,[2,i.\u0275a]]),o.\u0275mpd(5120,o.IterableDiffers,o.\u0275n,[]),o.\u0275mpd(5120,o.KeyValueDiffers,o.\u0275o,[]),o.\u0275mpd(4608,d.DomSanitizer,d.\u0275e,[i.DOCUMENT]),o.\u0275mpd(6144,o.Sanitizer,null,[d.DomSanitizer]),o.\u0275mpd(4608,d.HAMMER_GESTURE_CONFIG,d.HammerGestureConfig,[]),o.\u0275mpd(5120,d.EVENT_MANAGER_PLUGINS,function(e,n,t,o,l){return[new d.\u0275DomEventsPlugin(e,n),new d.\u0275KeyEventsPlugin(t),new d.\u0275HammerGesturesPlugin(o,l)]},[i.DOCUMENT,o.NgZone,i.DOCUMENT,i.DOCUMENT,d.HAMMER_GESTURE_CONFIG]),o.\u0275mpd(4608,d.EventManager,d.EventManager,[d.EVENT_MANAGER_PLUGINS,o.NgZone]),o.\u0275mpd(135680,d.\u0275DomSharedStylesHost,d.\u0275DomSharedStylesHost,[i.DOCUMENT]),o.\u0275mpd(4608,d.\u0275DomRendererFactory2,d.\u0275DomRendererFactory2,[d.EventManager,d.\u0275DomSharedStylesHost]),o.\u0275mpd(4608,a.\u0275c,a.\u0275c,[d.DOCUMENT,[2,d.\u0275TRANSITION_ID]]),o.\u0275mpd(6144,d.\u0275SharedStylesHost,null,[a.\u0275c]),o.\u0275mpd(4608,a.\u0275ServerRendererFactory2,a.\u0275ServerRendererFactory2,[o.NgZone,d.DOCUMENT,d.\u0275SharedStylesHost]),o.\u0275mpd(4608,m.AnimationDriver,m.\u0275NoopAnimationDriver,[]),o.\u0275mpd(5120,m.\u0275AnimationStyleNormalizer,c.\u0275d,[]),o.\u0275mpd(4608,m.\u0275AnimationEngine,c.\u0275b,[m.AnimationDriver,m.\u0275AnimationStyleNormalizer]),o.\u0275mpd(5120,o.RendererFactory2,a.\u0275a,[a.\u0275ServerRendererFactory2,m.\u0275AnimationEngine,o.NgZone]),o.\u0275mpd(4352,o.Testability,null,[]),o.\u0275mpd(4608,d.Meta,d.Meta,[i.DOCUMENT]),o.\u0275mpd(4608,d.Title,d.Title,[i.DOCUMENT]),o.\u0275mpd(4608,s.BrowserXhr,a.\u0275d,[]),o.\u0275mpd(4608,s.ResponseOptions,s.BaseResponseOptions,[]),o.\u0275mpd(4608,s.XSRFStrategy,a.\u0275e,[]),o.\u0275mpd(4608,s.XHRBackend,s.XHRBackend,[s.BrowserXhr,s.ResponseOptions,s.XSRFStrategy]),o.\u0275mpd(4608,s.RequestOptions,s.BaseRequestOptions,[]),o.\u0275mpd(5120,s.Http,a.\u0275f,[s.XHRBackend,s.RequestOptions]),o.\u0275mpd(4608,A.HttpXsrfTokenExtractor,A.\u0275h,[i.DOCUMENT,o.PLATFORM_ID,A.\u0275f]),o.\u0275mpd(4608,A.\u0275i,A.\u0275i,[A.HttpXsrfTokenExtractor,A.\u0275g]),o.\u0275mpd(5120,A.HTTP_INTERCEPTORS,function(e){return[e]},[A.\u0275i]),o.\u0275mpd(4608,A.XhrFactory,a.\u0275d,[]),o.\u0275mpd(4608,A.HttpXhrBackend,A.HttpXhrBackend,[A.XhrFactory]),o.\u0275mpd(6144,A.HttpBackend,null,[A.HttpXhrBackend]),o.\u0275mpd(5120,A.HttpHandler,a.\u0275g,[A.HttpBackend,[2,A.HTTP_INTERCEPTORS]]),o.\u0275mpd(4608,A.HttpClient,A.HttpClient,[A.HttpHandler]),o.\u0275mpd(4608,A.\u0275e,A.\u0275e,[]),o.\u0275mpd(4608,M.AnimationBuilder,c.\u0275BrowserAnimationBuilder,[o.RendererFactory2,d.DOCUMENT]),o.\u0275mpd(5120,R.ActivatedRoute,R.\u0275f,[R.Router]),o.\u0275mpd(4608,R.NoPreloading,R.NoPreloading,[]),o.\u0275mpd(6144,R.PreloadingStrategy,null,[R.NoPreloading]),o.\u0275mpd(135680,R.RouterPreloader,R.RouterPreloader,[R.Router,o.NgModuleFactoryLoader,o.Compiler,o.Injector,R.PreloadingStrategy]),o.\u0275mpd(4608,R.PreloadAllModules,R.PreloadAllModules,[]),o.\u0275mpd(5120,R.ROUTER_INITIALIZER,R.\u0275i,[R.\u0275g]),o.\u0275mpd(5120,o.APP_BOOTSTRAP_LISTENER,function(e){return[e]},[R.ROUTER_INITIALIZER]),o.\u0275mpd(512,i.CommonModule,i.CommonModule,[]),o.\u0275mpd(1024,o.ErrorHandler,d.\u0275a,[]),o.\u0275mpd(1024,o.NgProbeToken,function(){return[R.\u0275b()]},[]),o.\u0275mpd(256,o.APP_ID,"serverApp",[]),o.\u0275mpd(2048,d.\u0275TRANSITION_ID,null,[o.APP_ID]),o.\u0275mpd(512,R.\u0275g,R.\u0275g,[o.Injector]),o.\u0275mpd(1024,o.APP_INITIALIZER,function(e,n,t,o,l){return[d.\u0275h(e),d.\u0275f(n,t,o),R.\u0275h(l)]},[[2,o.NgProbeToken],d.\u0275TRANSITION_ID,i.DOCUMENT,o.Injector,R.\u0275g]),o.\u0275mpd(512,o.ApplicationInitStatus,o.ApplicationInitStatus,[[2,o.APP_INITIALIZER]]),o.\u0275mpd(131584,o.ApplicationRef,o.ApplicationRef,[o.NgZone,o.\u0275Console,o.Injector,o.ErrorHandler,o.ComponentFactoryResolver,o.ApplicationInitStatus]),o.\u0275mpd(512,o.ApplicationModule,o.ApplicationModule,[o.ApplicationRef]),o.\u0275mpd(512,d.BrowserModule,d.BrowserModule,[[3,d.BrowserModule]]),o.\u0275mpd(1024,R.\u0275a,R.\u0275d,[[3,R.Router]]),o.\u0275mpd(512,R.UrlSerializer,R.DefaultUrlSerializer,[]),o.\u0275mpd(512,R.ChildrenOutletContexts,R.ChildrenOutletContexts,[]),o.\u0275mpd(256,R.ROUTER_CONFIGURATION,{},[]),o.\u0275mpd(1024,i.LocationStrategy,R.\u0275c,[i.PlatformLocation,[2,i.APP_BASE_HREF],R.ROUTER_CONFIGURATION]),o.\u0275mpd(512,i.Location,i.Location,[i.LocationStrategy]),o.\u0275mpd(512,o.Compiler,o.Compiler,[]),o.\u0275mpd(512,o.NgModuleFactoryLoader,o.SystemJsNgModuleLoader,[o.Compiler,[2,o.SystemJsNgModuleLoaderConfig]]),o.\u0275mpd(1024,R.ROUTES,function(){return[[{path:"shell",component:f.AppShellComponent}]]},[]),o.\u0275mpd(1024,R.Router,R.\u0275e,[o.ApplicationRef,R.UrlSerializer,R.ChildrenOutletContexts,i.Location,o.Injector,o.NgModuleFactoryLoader,o.Compiler,R.ROUTES,R.ROUTER_CONFIGURATION,[2,R.UrlHandlingStrategy],[2,R.RouteReuseStrategy]]),o.\u0275mpd(512,R.RouterModule,R.RouterModule,[[2,R.\u0275a],[2,R.Router]]),o.\u0275mpd(512,g.AppModule,g.AppModule,[]),o.\u0275mpd(512,s.HttpModule,s.HttpModule,[]),o.\u0275mpd(512,A.HttpClientXsrfModule,A.HttpClientXsrfModule,[]),o.\u0275mpd(512,A.HttpClientModule,A.HttpClientModule,[]),o.\u0275mpd(512,c.NoopAnimationsModule,c.NoopAnimationsModule,[]),o.\u0275mpd(512,a.ServerModule,a.ServerModule,[]),o.\u0275mpd(512,l.AppServerModule,l.AppServerModule,[]),o.\u0275mpd(256,A.\u0275f,"XSRF-TOKEN",[]),o.\u0275mpd(256,A.\u0275g,"X-XSRF-TOKEN",[])])})},YWx4:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.AppComponent=function(){this.title="app"}},aKHF:function(e,n,t){"use strict";n.styles=[""]},f9NF:function(e,n){e.exports=require("@angular/http")},hQx7:function(e,n,t){"use strict";var o=t("LvpR"),l=t("OQ0P"),r=t("A7Ap"),u=t("YWx4"),p=l.\u0275crt({encapsulation:0,styles:[o.styles],data:{}});function i(e){return l.\u0275vid(0,[(e()(),l.\u0275ted(-1,null,["\n"])),(e()(),l.\u0275eld(1,0,null,null,6,"div",[["style","text-align:center"]],null,null,null,null,null)),(e()(),l.\u0275ted(-1,null,["\n  "])),(e()(),l.\u0275eld(3,0,null,null,1,"h1",[],null,null,null,null,null)),(e()(),l.\u0275ted(4,null,["\n    Welcome to ","!\n  "])),(e()(),l.\u0275ted(-1,null,["\n  "])),(e()(),l.\u0275eld(6,0,null,null,0,"img",[["alt","Angular Logo"],["src","data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNTAgMjUwIj4KICAgIDxwYXRoIGZpbGw9IiNERDAwMzEiIGQ9Ik0xMjUgMzBMMzEuOSA2My4ybDE0LjIgMTIzLjFMMTI1IDIzMGw3OC45LTQzLjcgMTQuMi0xMjMuMXoiIC8+CiAgICA8cGF0aCBmaWxsPSIjQzMwMDJGIiBkPSJNMTI1IDMwdjIyLjItLjFWMjMwbDc4LjktNDMuNyAxNC4yLTEyMy4xTDEyNSAzMHoiIC8+CiAgICA8cGF0aCAgZmlsbD0iI0ZGRkZGRiIgZD0iTTEyNSA1Mi4xTDY2LjggMTgyLjZoMjEuN2wxMS43LTI5LjJoNDkuNGwxMS43IDI5LjJIMTgzTDEyNSA1Mi4xem0xNyA4My4zaC0zNGwxNy00MC45IDE3IDQwLjl6IiAvPgogIDwvc3ZnPg=="],["width","300"]],null,null,null,null,null)),(e()(),l.\u0275ted(-1,null,["\n"])),(e()(),l.\u0275ted(-1,null,["\n"])),(e()(),l.\u0275eld(9,0,null,null,1,"h2",[],null,null,null,null,null)),(e()(),l.\u0275ted(-1,null,["Here are some links to help you start: "])),(e()(),l.\u0275ted(-1,null,["\n\n"])),(e()(),l.\u0275eld(12,16777216,null,null,1,"router-outlet",[],null,null,null,null,null)),l.\u0275did(13,212992,null,0,r.RouterOutlet,[r.ChildrenOutletContexts,l.ViewContainerRef,l.ComponentFactoryResolver,[8,null],l.ChangeDetectorRef],null,null),(e()(),l.\u0275ted(-1,null,["\n\n"]))],function(e,n){e(n,13,0)},function(e,n){e(n,4,0,n.component.title)})}function d(e){return l.\u0275vid(0,[(e()(),l.\u0275eld(0,0,null,null,1,"app-root",[],null,null,null,i,p)),l.\u0275did(1,49152,null,0,u.AppComponent,[],null,null)],null,null)}n.RenderType_AppComponent=p,n.View_AppComponent_0=i,n.View_AppComponent_Host_0=d,n.AppComponentNgFactory=l.\u0275ccf("app-root",u.AppComponent,d,{},{},[])},jnyR:function(e,n,t){"use strict";var o=t("aKHF"),l=t("OQ0P"),r=t("B5Z9"),u=l.\u0275crt({encapsulation:0,styles:[o.styles],data:{}});function p(e){return l.\u0275vid(0,[(e()(),l.\u0275eld(0,0,null,null,1,"p",[],null,null,null,null,null)),(e()(),l.\u0275ted(-1,null,["\n  app-shell works!\n"])),(e()(),l.\u0275ted(-1,null,["\n"]))],null,null)}function i(e){return l.\u0275vid(0,[(e()(),l.\u0275eld(0,0,null,null,1,"app-shell",[],null,null,null,p,u)),l.\u0275did(1,114688,null,0,r.AppShellComponent,[],null,null)],function(e,n){e(n,1,0)},null)}n.RenderType_AppShellComponent=u,n.View_AppShellComponent_0=p,n.View_AppShellComponent_Host_0=i,n.AppShellComponentNgFactory=l.\u0275ccf("app-shell",r.AppShellComponent,i,{},{},[])},kZql:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.environment={production:!0}},l0JX:function(e,n){e.exports=require("@angular/animations")},or6l:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var o=t("Ub9p");n.AppServerModuleNgFactory=o.AppServerModuleNgFactory;var l=t("OQ0P");t("kZql").environment.production&&l.enableProdMode();var r=t("600m");n.AppServerModule=r.AppServerModule,n.LAZY_MODULE_MAP={}},wp5R:function(e,n){e.exports=require("@angular/platform-browser")},yv0u:function(e,n){e.exports=require("@angular/common")}}));