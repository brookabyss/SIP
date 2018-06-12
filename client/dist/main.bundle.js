webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/alarms/alarms-dispatch/alarms-dispatch.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/alarms/alarms-dispatch/alarms-dispatch.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div class=\"col-md-9 alarms\">\n    <p class=\"errors\" *ngFor=\"let error of error_messages\">{{error}}</p>\n\n    <h1 class=\"primarycolor \"><span>Dispatch Center</span></h1>\n    <form  #alarmForm=\"ngForm\"  novalidate>\n      <div class=\"form-group \"> \n        <input \n        class=\"form-control col-sm-4\"\n        type=\"string\" \n        name=\"description\"\n        required\n        [(ngModel)]=\"alarm.description\"\n        #description=\"ngModel\"\n        placeholder=\"Alarm\"\n    /><br>\n    <button class=\"btn btn-primary col-sm-4\" [disabled]=\"!alarmForm.form.valid\" (click)=\"onDispatch()\" >Dispatch</button>\n    </div>\n    \n     \n</form>\n</div>\n\n\n\n<a href=\"tel:+1-206-307-7360\">+1 206 307 7360</a>\n\n\n\n\n\n\n"

/***/ }),

/***/ "./src/app/alarms/alarms-dispatch/alarms-dispatch.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var alarms_service_1 = __webpack_require__("./src/app/alarms/alarms-service.ts");
var alarms_1 = __webpack_require__("./src/app/alarms/alarms.ts");
var router_1 = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var AlarmsDispatchComponent = /** @class */ (function () {
    function AlarmsDispatchComponent(_alarmsService, _router) {
        this._alarmsService = _alarmsService;
        this._router = _router;
    }
    AlarmsDispatchComponent.prototype.ngOnInit = function () {
        this.alarm = new alarms_1.Alarm;
        this.sign_in_url = "https://login.microsoftonline.com/common/oauth2/v2.0/authorize?scope=openid+User.Read+Mail.Read&redirect_uri=http%3A%2F%2Fsip-brookabyss.c9users.io%2Fsites%2Fgettoken&response_type=code&client_id=4b13fb9d-4fe5-4e48-82c5-21f3eee4e0f3";
    };
    AlarmsDispatchComponent.prototype.onDispatch = function () {
        console.log(this.alarm);
        this._alarmsService.dispatch(this.alarm)
            .then(function (data) {
            data = JSON.parse(data);
            window.location.href = data.status;
        })
            .catch(function (err) { console.log(err); });
    };
    AlarmsDispatchComponent = __decorate([
        core_1.Component({
            selector: 'app-alarms-dispatch',
            template: __webpack_require__("./src/app/alarms/alarms-dispatch/alarms-dispatch.component.html"),
            styles: [__webpack_require__("./src/app/alarms/alarms-dispatch/alarms-dispatch.component.css")]
        }),
        __metadata("design:paramtypes", [alarms_service_1.AlarmsService, router_1.Router])
    ], AlarmsDispatchComponent);
    return AlarmsDispatchComponent;
}());
exports.AlarmsDispatchComponent = AlarmsDispatchComponent;


/***/ }),

/***/ "./src/app/alarms/alarms-pending/alarms-pending.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/alarms/alarms-pending/alarms-pending.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  alarms-pending works!\n</p>\n"

/***/ }),

/***/ "./src/app/alarms/alarms-pending/alarms-pending.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var AlarmsPendingComponent = /** @class */ (function () {
    function AlarmsPendingComponent() {
    }
    AlarmsPendingComponent.prototype.ngOnInit = function () {
    };
    AlarmsPendingComponent = __decorate([
        core_1.Component({
            selector: 'app-alarms-pending',
            template: __webpack_require__("./src/app/alarms/alarms-pending/alarms-pending.component.html"),
            styles: [__webpack_require__("./src/app/alarms/alarms-pending/alarms-pending.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AlarmsPendingComponent);
    return AlarmsPendingComponent;
}());
exports.AlarmsPendingComponent = AlarmsPendingComponent;


/***/ }),

/***/ "./src/app/alarms/alarms-service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var http_1 = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
__webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
__webpack_require__("./node_modules/rxjs/_esm5/add/operator/toPromise.js");
var BehaviorSubject_1 = __webpack_require__("./node_modules/rxjs/_esm5/BehaviorSubject.js");
var AlarmsService = /** @class */ (function () {
    function AlarmsService(_http) {
        this._http = _http;
        this.observedAlarms = new BehaviorSubject_1.BehaviorSubject([]);
    }
    AlarmsService.prototype.updateaAlarms = function (alarms) {
        this.observedAlarms.next(alarms);
    };
    AlarmsService.prototype.dispatch = function (alarm) {
        console.log('alarm service');
        return this._http.post('sites/alarm/dispatch', alarm).map(function (data) { return data.json(); }).toPromise();
    };
    AlarmsService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.Http])
    ], AlarmsService);
    return AlarmsService;
}());
exports.AlarmsService = AlarmsService;


/***/ }),

/***/ "./src/app/alarms/alarms.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/alarms/alarms.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  alarms works!\n</p>\n"

/***/ }),

/***/ "./src/app/alarms/alarms.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var AlarmsComponent = /** @class */ (function () {
    function AlarmsComponent() {
    }
    AlarmsComponent.prototype.ngOnInit = function () {
    };
    AlarmsComponent = __decorate([
        core_1.Component({
            selector: 'app-alarms',
            template: __webpack_require__("./src/app/alarms/alarms.component.html"),
            styles: [__webpack_require__("./src/app/alarms/alarms.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AlarmsComponent);
    return AlarmsComponent;
}());
exports.AlarmsComponent = AlarmsComponent;


/***/ }),

/***/ "./src/app/alarms/alarms.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Alarm = /** @class */ (function () {
    function Alarm() {
    }
    return Alarm;
}());
exports.Alarm = Alarm;


/***/ }),

/***/ "./src/app/app-routing.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var login_component_1 = __webpack_require__("./src/app/login/login.component.ts");
var sites_all_component_1 = __webpack_require__("./src/app/sites/sites-all/sites-all.component.ts");
var sites_new_component_1 = __webpack_require__("./src/app/sites/sites-new/sites-new.component.ts");
var sites_edit_component_1 = __webpack_require__("./src/app/sites/sites-edit/sites-edit.component.ts");
var router_1 = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var alarms_dispatch_component_1 = __webpack_require__("./src/app/alarms/alarms-dispatch/alarms-dispatch.component.ts");
var alarms_pending_component_1 = __webpack_require__("./src/app/alarms/alarms-pending/alarms-pending.component.ts");
var routes = [
    {
        'path': '',
        component: login_component_1.LoginComponent
    },
    {
        'path': 'sites',
        children: [
            { 'path': '', component: sites_all_component_1.SitesAllComponent },
            { 'path': 'new', component: sites_new_component_1.SitesNewComponent },
            { 'path': 'edit/:id', component: sites_edit_component_1.SitesEditComponent },
            { 'path': 'detail/:id', component: sites_edit_component_1.SitesEditComponent },
            { 'path': '*', component: sites_all_component_1.SitesAllComponent }
        ]
    },
    {
        'path': 'alarms',
        children: [
            { 'path': 'pending', component: alarms_pending_component_1.AlarmsPendingComponent },
            { 'path': 'dispatch', component: alarms_dispatch_component_1.AlarmsDispatchComponent },
            { 'path': '*', component: sites_all_component_1.SitesAllComponent }
        ]
    },
    { path: '**', redirectTo: '' }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule.forRoot(routes, { useHash: true })],
            exports: [router_1.RouterModule],
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
exports.AppRoutingModule = AppRoutingModule;


/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = "agm-map {\n  height: 300px;\n  border: 1px solid red;\n}"

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;


/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var platform_browser_1 = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var forms_1 = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
var http_1 = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
var app_routing_module_1 = __webpack_require__("./src/app/app-routing.module.ts");
var amazing_time_picker_1 = __webpack_require__("./node_modules/amazing-time-picker/amazing-time-picker.es5.js"); // this line you need
var angular_font_awesome_1 = __webpack_require__("./node_modules/angular-font-awesome/dist/angular-font-awesome.es5.js");
var linkedlist_directive_1 = __webpack_require__("./src/app/linkedlist-directive.ts");
var core_2 = __webpack_require__("./node_modules/@agm/core/index.js");
var app_component_1 = __webpack_require__("./src/app/app.component.ts");
var login_component_1 = __webpack_require__("./src/app/login/login.component.ts");
var sites_component_1 = __webpack_require__("./src/app/sites/sites.component.ts");
var sites_all_component_1 = __webpack_require__("./src/app/sites/sites-all/sites-all.component.ts");
var sites_new_component_1 = __webpack_require__("./src/app/sites/sites-new/sites-new.component.ts");
var sites_edit_component_1 = __webpack_require__("./src/app/sites/sites-edit/sites-edit.component.ts");
var sites_single_detail_component_1 = __webpack_require__("./src/app/sites/sites-single-detail/sites-single-detail.component.ts");
var alarms_component_1 = __webpack_require__("./src/app/alarms/alarms.component.ts");
var alarms_pending_component_1 = __webpack_require__("./src/app/alarms/alarms-pending/alarms-pending.component.ts");
var alarms_dispatch_component_1 = __webpack_require__("./src/app/alarms/alarms-dispatch/alarms-dispatch.component.ts");
var login_service_1 = __webpack_require__("./src/app/login/login-service.ts");
var sites_service_1 = __webpack_require__("./src/app/sites/sites-service.ts");
var alarms_service_1 = __webpack_require__("./src/app/alarms/alarms-service.ts");
var address_component_1 = __webpack_require__("./src/app/sites/sites-new/address/address.component.ts");
var poc_component_1 = __webpack_require__("./src/app/sites/sites-new/poc/poc.component.ts");
function cookieStrategy() {
    console.log("******************************************************");
    var c = new http_1.CookieXSRFStrategy('csrftoken', 'X-CSRFToken');
    console.log(c);
    return c;
}
exports.cookieStrategy = cookieStrategy;
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                login_component_1.LoginComponent,
                sites_component_1.SitesComponent,
                sites_all_component_1.SitesAllComponent,
                sites_new_component_1.SitesNewComponent,
                sites_edit_component_1.SitesEditComponent,
                sites_single_detail_component_1.SitesSingleDetailComponent,
                alarms_component_1.AlarmsComponent,
                alarms_pending_component_1.AlarmsPendingComponent,
                alarms_dispatch_component_1.AlarmsDispatchComponent,
                linkedlist_directive_1.WhileDirective,
                address_component_1.AddressComponent,
                poc_component_1.PocComponent
            ],
            imports: [
                platform_browser_1.BrowserModule,
                forms_1.FormsModule,
                http_1.HttpModule,
                app_routing_module_1.AppRoutingModule,
                amazing_time_picker_1.AmazingTimePickerModule,
                angular_font_awesome_1.AngularFontAwesomeModule,
                core_2.AgmCoreModule.forRoot({
                    apiKey: "AIzaSyC8mUARmEjgn9lDp199rjvV8QpRr5o_W6s",
                    libraries: ["places"]
                })
            ],
            providers: [alarms_service_1.AlarmsService, login_service_1.LoginService, sites_service_1.SitesService, {
                    provide: http_1.XSRFStrategy,
                    useFactory: cookieStrategy,
                }],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;


/***/ }),

/***/ "./src/app/linkedlist-directive.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var sll_1 = __webpack_require__("./src/app/sites/linked_list/sll.ts");
var sites_service_1 = __webpack_require__("./src/app/sites/sites-service.ts");
var WhileDirective = /** @class */ (function () {
    function WhileDirective(templateRef, viewContainer, _sitesService, differs) {
        var _this = this;
        this.templateRef = templateRef;
        this.viewContainer = viewContainer;
        this._sitesService = _sitesService;
        this.differs = differs;
        // console.log("directive initialized")
        this.subscription = this._sitesService.observed_new_site_pocs.subscribe(function (pocs) { return _this._observedpocs = pocs; }, function (err) { return console.log(err); }, function () { });
    }
    WhileDirective.prototype.ngOnInit = function () {
    };
    Object.defineProperty(WhileDirective.prototype, "appWhile", {
        set: function (sll) {
            // this.differ= this.differs.find(sll).create()
            console.log(sll);
            this.last_changed = sll.last_changed;
        },
        enumerable: true,
        configurable: true
    });
    // ngOnChanges(changes: SimpleChanges): void{
    // }
    WhileDirective.prototype.ngDoCheck = function () {
        if (this._observedpocs.last_changed != this.last_changed) {
            console.log('changes detected');
            var current = this._observedpocs.head;
            this.viewContainer.clear();
            while (current) {
                if (current.poc) {
                    // console.log("current.poc",current.poc)
                    this.viewContainer.createEmbeddedView(this.templateRef, { $implicit: current.poc });
                }
                current = current.next;
            }
            this.last_changed = this._observedpocs.last_changed;
        }
        else {
            console.log('nothing changed');
        }
    };
    WhileDirective.prototype.ngOnDestroy = function () {
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", sll_1.SLL),
        __metadata("design:paramtypes", [sll_1.SLL])
    ], WhileDirective.prototype, "appWhile", null);
    WhileDirective = __decorate([
        core_1.Directive({ selector: '[appWhile]' }),
        __metadata("design:paramtypes", [core_1.TemplateRef, core_1.ViewContainerRef, sites_service_1.SitesService, core_1.KeyValueDiffers])
    ], WhileDirective);
    return WhileDirective;
}());
exports.WhileDirective = WhileDirective;


/***/ }),

/***/ "./src/app/login/login-service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var http_1 = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
__webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
__webpack_require__("./node_modules/rxjs/_esm5/add/operator/toPromise.js");
var BehaviorSubject_1 = __webpack_require__("./node_modules/rxjs/_esm5/BehaviorSubject.js");
var LoginService = /** @class */ (function () {
    function LoginService(_http) {
        this._http = _http;
        this.observedUsers = new BehaviorSubject_1.BehaviorSubject([]);
    }
    LoginService.prototype.updateUsers = function (users) {
        this.observedUsers.next(users);
    };
    LoginService.prototype.login = function () {
        console.log('login service');
        return this._http.get('employee/login').map(function (data) { return data.json(); }).toPromise();
    };
    LoginService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.Http])
    ], LoginService);
    return LoginService;
}());
exports.LoginService = LoginService;


/***/ }),

/***/ "./src/app/login/login.component.css":
/***/ (function(module, exports) {

module.exports = ".login_container{\n    position: absolute;\n    left: 50%;\n    top: 50%;\n}"

/***/ }),

/***/ "./src/app/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"login_container\">\n    \n<button  type=\"button\" class=\"btn btn-primary \" (click)=\"getOutlook()\">\n  Outlook Login\n</button>\n\n\n</div>"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var user_1 = __webpack_require__("./src/app/user.ts");
var login_service_1 = __webpack_require__("./src/app/login/login-service.ts");
var LoginComponent = /** @class */ (function () {
    function LoginComponent(_loginservice) {
        this._loginservice = _loginservice;
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.user = new user_1.User;
    };
    /* onLogin(){
       console.log(this.user);
       this._loginservice.login(this.user)
       .then(data=>console.log(data))
       .catch(err=>console.log(err));
     }
   
   */
    LoginComponent.prototype.getOutlook = function () {
        this._loginservice.login()
            .then(function (data) {
            console.log(data);
            data = JSON.parse(data);
            window.location.href = data.sign_in_url;
        })
            .catch(function (err) { return console.log(err); });
    };
    LoginComponent.prototype.ngOnDestroy = function () {
    };
    LoginComponent = __decorate([
        core_1.Component({
            selector: 'app-login',
            template: __webpack_require__("./src/app/login/login.component.html"),
            styles: [__webpack_require__("./src/app/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [login_service_1.LoginService])
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;


/***/ }),

/***/ "./src/app/sites/address.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Address = /** @class */ (function () {
    function Address() {
    }
    return Address;
}());
exports.Address = Address;


/***/ }),

/***/ "./src/app/sites/linked_list/node.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Node = /** @class */ (function () {
    function Node(poc) {
        this.poc = poc;
        this.next = null;
    }
    return Node;
}());
exports.Node = Node;


/***/ }),

/***/ "./src/app/sites/linked_list/sll.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var node_1 = __webpack_require__("./src/app/sites/linked_list/node.ts");
var SLL = /** @class */ (function () {
    function SLL(new_poc) {
        if (new_poc === void 0) { new_poc = null; }
        if (new_poc) {
            this.head = new node_1.Node(new_poc);
        }
        this.last_changed = Date.now();
    }
    SLL.prototype.insert = function (new_poc) {
        if (!this.head) {
            this.head = new node_1.Node(new_poc);
        }
        else if (this.head.poc.order > new_poc.order) {
            var temp = this.head;
            this.head = new node_1.Node(new_poc);
            this.head.next = temp;
        }
        else {
            var current = this.head;
            // console.log("Current",this.head)
            while (current.next != null && current.poc.order < new_poc.order) {
                current = current.next;
            }
            current.next = new node_1.Node(new_poc);
            // console.log("after",current)
        }
        return this;
    };
    SLL.prototype.traverse = function () {
        if (!this.head) {
            console.log("SLL empty");
        }
        else {
            var current = this.head;
            while (current) {
                console.log(current.poc.order);
                current = current.next;
            }
        }
    };
    SLL.prototype.delete_node = function (poc) {
        console.log("deleteing");
        var temp;
        if (poc.order) {
            if (!this.head) {
                console.log("empty list");
                return false;
            }
            else if (this.head.poc.order === poc.order) {
                temp = this.head;
                this.head = this.head.next;
                console.log("temp", temp);
                return temp;
            }
            else {
                var current = this.head, previous = this.head;
                while (current) {
                    if (current.poc.order === poc.order) {
                        previous.next = current.next;
                        return current;
                    }
                    previous = current, current = current.next;
                }
                console.log("value doesn't exit went through the list");
                return false;
            }
        }
        else {
            console.log("please provide a node to remove");
            return false;
        }
    };
    // find takes a poc and returns pointers to current and previous nodes
    SLL.prototype.find = function (poc) {
        if (poc.order) {
            if (!this.head) {
                console.log("empty list");
                return { "previous": null, "current": null };
            }
            else if (this.head.poc.order === poc.order) {
                return { "previous": null, "current": this.head };
            }
            else {
                var current = this.head, previous = this.head;
                while (current) {
                    if (current.poc.order === poc.order) {
                        return { "previous": previous, "current": current };
                    }
                    previous = current, current = current.next;
                }
                console.log("value doesn't exit went through the list");
                return { "previous": null, "current": null };
            }
        }
        else {
            console.log("please provide a node to remove");
            return { "previous": null, "current": null };
        }
    };
    SLL.prototype.exchange_orders = function (poc1, poc2) {
        console.log(poc1.order);
        console.log(poc2.order);
        var search_poc_1 = this.find(poc1), search_poc_2 = this.find(poc2), temp;
        if (poc1.order != this.head.poc)
            if (!this.head) {
                console.log("empty sll");
                return false;
            }
            else if (!(search_poc_1.current && search_poc_2.current)) {
                console.log("the POCs don't exist");
                return false;
            }
            else if (poc1.order === this.head.poc.order) {
                temp = poc1.order;
                search_poc_1.current.poc.order = poc2.order;
                search_poc_2.current.poc.order = temp;
                temp = search_poc_2.current.next;
                search_poc_2.current.next = search_poc_1.current.next;
                this.head = search_poc_2.current;
                search_poc_1.current.next = temp;
                search_poc_2.previous.next = search_poc_1.current;
                console.log(search_poc_1.current);
                console.log(this.head);
            }
            else if (poc2.order === this.head.poc.order) {
                temp = poc1.order;
                search_poc_1.current.poc.order = poc2.order;
                search_poc_2.current.poc.order = temp;
                temp = search_poc_1.current.next;
                search_poc_1.current.next = search_poc_2.current.next;
                this.head = search_poc_1.current;
                search_poc_2.current.next = temp;
                search_poc_1.previous.next = search_poc_2.current;
                console.log(search_poc_1.current);
                console.log(this.head);
            }
            else if (search_poc_1.previous && search_poc_1.current && search_poc_2.previous && search_poc_2.current) {
                if (poc1.order < poc2.order) {
                    temp = search_poc_1.current;
                    search_poc_1.previous.next = search_poc_2.current;
                    if (search_poc_2.previous.poc.order === poc1.order) {
                        temp = search_poc_2.current.next;
                        search_poc_2.current.next = search_poc_1.current;
                        search_poc_1.current.next = temp;
                        temp = poc1.order;
                        search_poc_1.current.poc.order = poc2.order;
                        search_poc_2.current.poc.order = temp;
                        console.log(search_poc_1.current);
                        console.log(this.head);
                    }
                    else {
                        temp = poc1.order;
                        search_poc_1.current.poc.order = poc2.order;
                        search_poc_2.current.poc.order = temp;
                        temp = search_poc_1.current.next;
                        search_poc_1.current.next = search_poc_2.current.next;
                        search_poc_2.current.next = temp;
                        search_poc_1.previous.next = search_poc_2.current;
                        search_poc_2.previous.next = search_poc_1.current;
                        console.log(search_poc_1.current);
                        console.log(this.head);
                    }
                }
                else {
                    temp = search_poc_2.current;
                    search_poc_2.previous.next = search_poc_1.current;
                    if (search_poc_1.previous.poc.order === poc2.order) {
                        temp = search_poc_1.current.next;
                        search_poc_1.current.next = search_poc_2.current;
                        search_poc_2.current.next = temp;
                        temp = poc2.order;
                        search_poc_2.current.poc.order = poc1.order;
                        search_poc_1.current.poc.order = temp;
                        console.log(search_poc_2.current);
                        console.log(this.head);
                    }
                    else {
                        temp = poc1.order;
                        search_poc_1.current.poc.order = poc2.order;
                        search_poc_2.current.poc.order = temp;
                        temp = search_poc_1.current.next;
                        search_poc_1.current.next = search_poc_2.current.next;
                        search_poc_2.current.next = temp;
                        search_poc_1.previous.next = search_poc_2.current;
                        search_poc_2.previous.next = search_poc_1.current;
                        console.log(search_poc_1.current);
                        console.log(this.head);
                    }
                }
            }
    };
    return SLL;
}());
exports.SLL = SLL;


/***/ }),

/***/ "./src/app/sites/poc.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var POC = /** @class */ (function () {
    function POC() {
        // business hours and after hours
        this.available = {
            bh: false,
            ah: false
        };
    }
    return POC;
}());
exports.POC = POC;


/***/ }),

/***/ "./src/app/sites/site.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Site = /** @class */ (function () {
    function Site() {
        this.business_days = [
            { active: false, start: null, end: null },
            { active: false, start: null, end: null },
            { active: false, start: null, end: null },
            { active: false, start: null, end: null },
            { active: false, start: null, end: null },
            { active: false, start: null, end: null },
            { active: false, start: null, end: null },
        ];
        this.pocs = [];
    }
    return Site;
}());
exports.Site = Site;


/***/ }),

/***/ "./src/app/sites/sites-all/sites-all.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/sites/sites-all/sites-all.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-light bg-light\">\n  <a class=\"navbar-brand\" href=\"#\">Navbar</a>\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarNav\" aria-controls=\"navbarNav\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n  <div class=\"collapse navbar-collapse\" id=\"navbarNav\">\n    <ul class=\"navbar-nav\">\n      <li class=\"nav-item active\">\n        <a class=\"nav-link\" href=\"#\">Home <span class=\"sr-only\">(current)</span></a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" [routerLink]=\"['/sites/new']\">New Site</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" [routerLink]=\"['/alarms/dispatch']\">Alarm Dispatch</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" [routerLink]=\"['/alarms/dispatch']\">Pending Alarms</a>\n      </li>\n    </ul>\n  </div>\n</nav>\n<table class=\"table table-sm\">\n  <thead class=\"thead-dark\">\n    <tr>\n      <th scope=\"col\">Site Code</th>\n      <th scope=\"col\">Site Name</th>\n      <th scope=\"col\">Region</th>\n      <th scope=\"col\">Address</th>\n      <th scope=\"col\">Latitude</th>\n      <th scope=\"col\">Longitude</th>\n      <th scope=\"col\">ASM</th>\n      <th scope=\"col\">RSM</th>\n    </tr>\n  </thead>\n  <tbody>\n    \n  </tbody>\n</table>"

/***/ }),

/***/ "./src/app/sites/sites-all/sites-all.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var site_1 = __webpack_require__("./src/app/sites/site.ts");
// import { BST } from "../avl_bst/bst"
var avl_1 = __webpack_require__("./node_modules/avl/src/index.js");
var SitesAllComponent = /** @class */ (function () {
    function SitesAllComponent() {
    }
    SitesAllComponent.prototype.ngOnInit = function () {
        this.tree = new avl_1.default(null, true);
        this.site1 = new site_1.Site;
        this.site1.site_code = "SEA1";
        this.site1.site_name = "Septo";
        this.site2 = new site_1.Site;
        this.site2.site_code = "DEP2";
        this.site2.site_name = "Depto";
        this.site3 = new site_1.Site;
        this.site3.site_code = "SEA28";
        this.site3.site_name = "Kepto";
        this.site4 = new site_1.Site;
        this.site4.site_code = "ZZZ24";
        this.site4.site_name = "Zepto";
        this.site5 = new site_1.Site;
        this.site5.site_code = "ZZZ25";
        this.site5.site_name = "Zepto2";
        this.tree.insert(this.site1.site_code, this.site1);
        this.tree.insert(this.site1.site_code, this.site1);
        console.dir(this.tree);
    };
    SitesAllComponent = __decorate([
        core_1.Component({
            selector: 'app-sites-all',
            template: __webpack_require__("./src/app/sites/sites-all/sites-all.component.html"),
            styles: [__webpack_require__("./src/app/sites/sites-all/sites-all.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SitesAllComponent);
    return SitesAllComponent;
}());
exports.SitesAllComponent = SitesAllComponent;


/***/ }),

/***/ "./src/app/sites/sites-edit/sites-edit.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/sites/sites-edit/sites-edit.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  sites-edit works!\n</p>\n"

/***/ }),

/***/ "./src/app/sites/sites-edit/sites-edit.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var SitesEditComponent = /** @class */ (function () {
    function SitesEditComponent() {
    }
    SitesEditComponent.prototype.ngOnInit = function () {
    };
    SitesEditComponent = __decorate([
        core_1.Component({
            selector: 'app-sites-edit',
            template: __webpack_require__("./src/app/sites/sites-edit/sites-edit.component.html"),
            styles: [__webpack_require__("./src/app/sites/sites-edit/sites-edit.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SitesEditComponent);
    return SitesEditComponent;
}());
exports.SitesEditComponent = SitesEditComponent;


/***/ }),

/***/ "./src/app/sites/sites-new/address/address.component.css":
/***/ (function(module, exports) {

module.exports = "/*.form-group, h6{*/\n/*    margin-left: 5%;*/\n/*}*/\n.nextPage{\n    position: relative;\n    left: 80%;\n    margin-bottom: 5%;\n}\nagm-map {\n  height: 400px;\n}\n.ui-front {\n    z-index: 9999;\n}\n.light-blue{\n    background: #03a9f4;\n    color: white;\n}\n"

/***/ }),

/***/ "./src/app/sites/sites-new/address/address.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div>\n<!-- Button trigger modal -->\n<button type=\"button\" class=\"btn light-blue\" data-toggle=\"modal\" data-target=\"#exampleModalCenter\">\n  Search Address\n</button>\n\n<form #addressForm=\"ngForm\" class=\"address-form\"novalidate >\n   \n<div class=\"form-group\">\n   <label for=\"line_1\">Line 1</label>\n   <input\n     type=\"text\"\n     required\n     class=\"in-marg form-control col-8\"\n     id=\"line_1\"\n     name=\"line_1\"\n     [(ngModel)]=\"address.line_1\"\n     #line_1=\"ngModel\"\n     placeholder=\"Enter Address\">\n </div>\n <div class=\"form-group\">\n   <label for=\"line_2\">Line 2</label>\n   <input\n     type=\"text\"\n     class=\"in-marg form-control col-8\"\n     id=\"line_2\"\n     name=\"line_2\"\n     [(ngModel)]=\"address.line_2\"\n     #line_2=\"ngModel\"\n     placeholder=\"Address\">\n </div>\n\n<div class=\"form-group\">\n   <label for=\"line_3\">Line 3</label>\n   <input\n     type=\"text\"\n     class=\"in-marg form-control col-8\"\n     id=\"line_3\"\n     name=\"line_3\"\n     [(ngModel)]=\"address.line_3\"\n     #line_3=\"ngModel\"\n     placeholder=\"Address\">\n </div>\n\n <div class=\"form-group\">\n   <label for=\"city\">City</label>\n   <input\n     type=\"text\"\n     required\n     class=\"in-marg form-control col-8\"\n     id=\"city\"\n     name=\"city\"\n     [(ngModel)]=\"address.city\"\n     #city=\"ngModel\"\n     placeholder=\"City\">\n </div>\n\n <div class=\"form-group\">\n   <label for=\"region\">Region/State</label>\n   <input\n     type=\"text\"\n     required\n     class=\"in-marg form-control col-8\"\n     id=\"region_state\"\n     name=\"region_state\"\n     [(ngModel)]=\"address.region_state\"\n     #region_state=\"ngModel\"\n     placeholder=\"Enter Region/State\">\n </div>\n\n <div class=\"form-group\">\n   <label for=\"country\">Country</label>\n   <input\n     type=\"text\"\n     required\n     class=\"in-marg form-control col-8\"\n     id=\"country\"\n     name=\"country\"\n     [(ngModel)]=\"address.country\"\n     #country=\"ngModel\"\n     placeholder=\"Country\">\n </div>\n\n <div class=\"form-group\">\n   <label for=\"zipcode\">Zip Code</label>\n   <input\n     type=\"text\"\n     required\n     class=\"in-marg form-control col-8\"\n     id=\"zipcode\"\n     name=\"zipcode\"\n     [(ngModel)]=\"address.zipcode\"\n     #zipcode=\"ngModel\"\n     placeholder=\"Enter Zip Code\">\n </div>\n\n <div class=\"form-group\">\n   <label for=\"latitude\">Latitude</label>\n   <input\n     type=\"text\"\n     required\n     class=\"in-marg form-control col-8\"\n     id=\"latitude\"\n     name=\"latitude\"\n     [(ngModel)]=\"address.latitude\"\n     #latitude=\"ngModel\"\n     placeholder=\"Enter Latitude\">\n </div>\n\n <div class=\"form-group\">\n   <label for=\"longitude\">Longitude</label>\n   <input\n     type=\"text\"\n     required\n     class=\"in-marg form-control col-8\"\n     id=\"longitude\"\n     name=\"longitude\"\n     [(ngModel)]=\"address.longitude\"\n     #longitude=\"ngModel\"\n     placeholder=\"Enter Longitude\">\n </div>\n\n<div class=\"form-group\">\n   <label for=\"other_details\">Other Details</label>\n   <input\n     type=\"text\"\n     class=\"in-marg form-control col-8\"\n     id=\"other_details\"\n     name=\"other_details\"\n     [(ngModel)]=\"address.other_details\"\n     #other_details=\"ngModel\"\n     placeholder=\"Enter Other Details\">\n </div>\n \n <button [disabled]=\"!addressForm.form.valid\" class=\"nextPage btn btn-primary\">Continue</button>\n\n</form>\n\n</div>\n\n\n\n<!-- Modal -->\n<div class=\"modal fade\" id=\"exampleModalCenter\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalCenterTitle\" aria-hidden=\"true\">\n  <div class=\"modal-dialog modal-dialog-centered\" role=\"document\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <h5 class=\"modal-title\" id=\"exampleModalLongTitle\">Search Address</h5>\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n      </div>\n      <div class=\"modal-body\">\n        <div class=\"form-group\">\n        <input id=\"search_address\" name=\"search_address\"  placeholder=\"search for location\"  type=\"text\" autocorrect=\"off\" autocapitalize=\"off\" spellcheck=\"off\" class=\"form-control\" [(ngModel)]=\"searchControl\" #search_address=\"ngModel\">\n</div>\n\n <agm-map \n  [latitude]=\"lat\"\n  [longitude]=\"lng\"\n  [zoom]=\"zoom\"\n  [disableDefaultUI]=\"false\"\n  [zoomControl]=\"false\"\n  (mapClick)=\"mapClicked($event)\">\n\n  <agm-marker class=\"agm\"\n      *ngFor=\"let m of markers; let i = index\"\n      (markerClick)=\"clickedMarker(m.label, i)\"\n      [latitude]=\"m.lat\"\n      [longitude]=\"m.lng\"\n      [label]=\"m.label\"\n      [markerDraggable]=\"m.draggable\"\n      (dragEnd)=\"markerDragEnd(m, $event)\">\n      \n    <agm-info-window>\n      <strong>InfoWindow content</strong>\n    </agm-info-window>\n    \n  </agm-marker>\n  \n  <agm-circle [latitude]=\"lat + 0.3\" [longitude]=\"lng\" \n      [radius]=\"5000\"\n      [fillColor]=\"'red'\"\n      [circleDraggable]=\"true\"\n      [editable]=\"true\">\n  </agm-circle>\n\n</agm-map>\n      </div>\n      <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Close</button>\n        <button type=\"button\" class=\"btn btn-primary\">Set Address</button>\n      </div>\n    </div>\n  </div>\n</div>\n\n"

/***/ }),

/***/ "./src/app/sites/sites-new/address/address.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var address_1 = __webpack_require__("./src/app/sites/address.ts");
var core_2 = __webpack_require__("./node_modules/@agm/core/index.js");
var AddressComponent = /** @class */ (function () {
    function AddressComponent(mapsAPILoader, ngZone) {
        this.mapsAPILoader = mapsAPILoader;
        this.ngZone = ngZone;
        this.zoom = 8;
        // initial center position for the map
        this.lat = 51.673858;
        this.lng = 7.815982;
        //load Places Autocomplete
        this.markers = [
            {
                lat: 51.673858,
                lng: 7.815982,
                label: 'A',
                draggable: true
            },
            {
                lat: 51.373858,
                lng: 7.215982,
                label: 'B',
                draggable: false
            },
            {
                lat: 51.723858,
                lng: 7.895982,
                label: 'C',
                draggable: true
            }
        ];
    }
    AddressComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.address = new address_1.Address;
        this.api_key = "AIzaSyC8mUARmEjgn9lDp199rjvV8QpRr5o_W6s";
        this.searchControl = "Seattle";
        this.input = document.getElementById("search_address");
        this.mapsAPILoader.load().then(function () {
            var autocomplete = new google.maps.places.Autocomplete(_this.input, {
                types: ["address"]
            });
            autocomplete.addListener("place_changed", function () {
                console.log("Place changed");
                _this.ngZone.run(function () {
                    //get the place result
                    var place = autocomplete.getPlace();
                    //verify result
                    if (place.geometry === undefined || place.geometry === null) {
                        return;
                    }
                    //set latitude, longitude and zoom
                    _this.lat = place.geometry.location.lat();
                    _this.lng = place.geometry.location.lng();
                    _this.zoom = 12;
                    _this.clearAddressfields();
                    _this.address.longitude = _this.lat;
                    _this.address.latitude = _this.lat;
                    console.log(place);
                    for (var i in place.address_components) {
                        if (place.address_components[i].types[0] === "street_number") {
                            _this.address.line_1 = place.address_components[i].long_name;
                        }
                        if (place.address_components[i].types[0] === "route") {
                            if (!_this.address.line_1) {
                                _this.address.line_1 = place.address_components[i].long_name;
                            }
                            else {
                                _this.address.line_1 = _this.address.line_1 + " " + place.address_components[i].short_name;
                            }
                        }
                        else if (place.address_components[i].types[0] === "postal_code") {
                            //casting to number
                            _this.address.zipcode = +place.address_components[i].long_name;
                        }
                        else if (place.address_components[i].types[0] === "country") {
                            _this.address.country = place.address_components[i].long_name;
                        }
                        else if (place.address_components[i].types[0] === "administrative_area_level_1") {
                            _this.address.region_state = place.address_components[i].short_name;
                        }
                        else if (place.address_components[i].types[0] === "locality") {
                            _this.address.city = place.address_components[i].long_name;
                        }
                    }
                });
            });
        });
    };
    AddressComponent.prototype.clearAddressfields = function () {
        this.address = new address_1.Address;
    };
    AddressComponent.prototype.addAddress = function () {
        this.address.form_status = true;
    };
    AddressComponent.prototype.clickedMarker = function (label, index) {
        console.log("clicked the marker: " + (label || index));
    };
    AddressComponent.prototype.mapClicked = function ($event) {
        this.markers.push({
            lat: $event.coords.lat,
            lng: $event.coords.lng,
            draggable: true
        });
    };
    AddressComponent.prototype.markerDragEnd = function (m, $event) {
        console.log('dragEnd', m, $event);
    };
    AddressComponent = __decorate([
        core_1.Component({
            selector: 'app-address',
            template: __webpack_require__("./src/app/sites/sites-new/address/address.component.html"),
            styles: [__webpack_require__("./src/app/sites/sites-new/address/address.component.css")]
        }),
        __metadata("design:paramtypes", [core_2.MapsAPILoader, core_1.NgZone])
    ], AddressComponent);
    return AddressComponent;
}());
exports.AddressComponent = AddressComponent;


/***/ }),

/***/ "./src/app/sites/sites-new/poc/poc.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/sites/sites-new/poc/poc.component.html":
/***/ (function(module, exports) {

module.exports = "<form #pocForm=\"ngForm\"  novalidate>\n    <label for=\"asm_email\">ASM</label>\n    <input \n        type=\"email\"\n        required\n        name=\"asm_email\"\n        [(ngModel)]=\"this.site.ASM\"\n        #asm_email=\"ngModel\"\n    ><br>\n    <label for=\"rsm_email\">RSM</label>\n    <input \n        type=\"email\"\n        required\n        name=\"rsm_email\"\n        [(ngModel)]=\"this.site.RSM\"\n        #rsm_email=\"ngModel\"\n    ><br>\n    <label for=\"\">General Alarm Responder</label>\n        <select name=\"gar\" id=\"\"[(ngModel)]=\"this.GAR.poc_type\" #gar=\"ngModel\" class=\"form-control form-control-sm\">\n         <option value=\"null\">Choose POC Method</option>\n         <option value=\"email\">Email</option>\n         <option value=\"cell\">Cell Number</option>\n         <option value=\"office\">Office Number</option>\n        </select>\n    <label for=\"poc_value\">POC Value</label><input class=\"form-control\" type=\"text\" required name=\"poc_value\" [(ngModel)]=\"this.GAR.poc_value\" #poc_value=\"ngModel\"><br>\n\n\n\n<div class=\"form-check form-check-inline\">\n  <input\n  class=\"form-check-input radio\"\n  type=\"radio\"\n  id=\"bh_check\"\n  name=\"bh_check\"\n  required\n  [(ngModel)]=\"this.GAR.available.bh\"\n  #bh_check=\"ngModel\"\n  [value]=\"true\">\n  <label class=\"form-check-label\" id=\"checkboxlabel\" for=\"inlineCheckbox\">Available Business Hours</label>\n</div>\n\n<div class=\"form-check form-check-inline\">\n  <input\n  class=\"form-check-input radio\"\n  type=\"radio\"\n  id=\"ah_check\"\n  name=\"ah_check\"\n  required\n  [(ngModel)]=\"this.GAR.available.ah\"\n  #ah_check=\"ngModel\"\n  [value]=\"false\">\n  <label class=\"form-check-label\" id=\"checkboxlabel\" for=\"inlineCheckbox\">Available After Hours</label>\n</div>\n<i class=\"fa fa-plus\" aria-hidden=\"true\" (click)=\"addGAR()\"></i>\n<table class=\"table table-sm\">\n    <tr>\n        <th>Order of contact</th>\n        <th>Method of contact</th>\n        <th>Number/Email</th>\n        <th></th>\n    </tr>\n    <tr *appWhile=\"pocs,let contact\">\n        <td>{{contact.order}}</td>\n        <td>{{contact.poc_type}}</td>\n        <td>{{contact.poc_value}}</td>\n        <i class=\"fa fa-window-close\" aria-hidden=\"true\" (click)=\"removePOC(contact)\"></i>\n\n    </tr>\n</table>\n    \n    <button [disabled]=\"!pocForm.form.valid\" class=\"nextPage btn btn-primary\">Continue</button>\n</form>\n"

/***/ }),

/***/ "./src/app/sites/sites-new/poc/poc.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var poc_1 = __webpack_require__("./src/app/sites/poc.ts");
var sites_service_1 = __webpack_require__("./src/app/sites/sites-service.ts");
var PocComponent = /** @class */ (function () {
    function PocComponent(_sitesService) {
        this._sitesService = _sitesService;
    }
    PocComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.pocs_subscription = this._sitesService.observed_new_site_pocs.subscribe(function (pocs) { return _this.pocs = pocs; }, function (err) { return console.log(err); }, function () { });
        this.site_subscription = this._sitesService.observedSite.subscribe(function (site) { return _this.site = site; }, function (err) { return console.log(err); }, function () { });
        this.GAR = new poc_1.POC;
        this.GAR.poc_name = "GAR";
        this.initial_order = 0;
    };
    PocComponent.prototype.ngOnDestroy = function () {
    };
    PocComponent = __decorate([
        core_1.Component({
            selector: 'app-poc',
            template: __webpack_require__("./src/app/sites/sites-new/poc/poc.component.html"),
            styles: [__webpack_require__("./src/app/sites/sites-new/poc/poc.component.css")]
        }),
        __metadata("design:paramtypes", [sites_service_1.SitesService])
    ], PocComponent);
    return PocComponent;
}());
exports.PocComponent = PocComponent;


/***/ }),

/***/ "./src/app/sites/sites-new/sites-new.component.css":
/***/ (function(module, exports) {

module.exports = "input{\n    width: 70%;\n}\n\nform,.form-title{\n   \n    padding: 2%;\n}\n\n#inlineCheckbox1,#inlineCheckbox2,#inlineCheckbox3{\n    width: 30px;\n}\n\n.site-form-content{\n    margin-left: 10%;\n}\n\n.site-form-container{\n    border: orange 1px solid;\n     margin-left: 20%;\n     width: 70%;\n     height: 100%;\n     overflow: scroll;\n}\n\n.form-check-label{\n    margin-left: 30%;\n}\n\n.radio{\n    width: 100px;\n    border: 1px solid red;\n}\n\n.orange{\n    border: .5px solid #fd5d00 ;\n    background: #f7780f ;\n}\n\n.weekDays-selector input {\n  display: none!important;\n}\n\n.weekDays-selector{\n    margin-top: 4%;\n}\n\n.weekDays-selector input[type=checkbox] + label {\n  display: block;\n  border-radius: 6px;\n  background: #dddddd;\n  height: 40px;\n  width: 30px;\n  margin-right: 3px;\n  line-height: 40px;\n  text-align: center;\n  cursor: pointer;\n}\n\n.weekDays-selector input[type=checkbox]:checked + label {\n  background: #2AD705;\n  color: #ffffff;\n}\n\n.day-time{\n  display: inline-block; \n  width: 40px;\n  margin-bottom: 30px;\n}\n\ni{\n    margin: 0;\n    padding: 4px;\n    display: block;\n    \n}\n\n#check_business_hours{\n    width: 10%;\n}\n\n.fa-plus{\n    display: inline;\n}\n\n.nextPage{\n    position: relative;\n    left: 80%;\n}\n\n.all_days_selected{\n    background: #2AD705;\n    color: #ffffff;\n}\n\n/*.form-group, h6,h1{*/\n\n/*    margin-left: 5%;*/\n\n/*}*/\n\n"

/***/ }),

/***/ "./src/app/sites/sites-new/sites-new.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div class=\"site-form-container\">\n<nav class=\"navbar navbar-light\" style=\"background-color: #e3f2fd;\">\n  <div class=\"border col-sm-3\" [ngClass]=\"{orange:pages['general_info'], 'tabs':true}\" (click)=\"swicthPages('general_info')\">General Info</div>\n  <div class=\"border col-sm-3\" [ngClass]=\"{orange:pages['address'],'tabs':true}\" (click)=\"swicthPages('address')\">Address</div>\n  <div class=\"border col-sm-3\" [ngClass]=\"{orange:pages['poc'], 'tabs':true}\" (click)=\"swicthPages('poc')\">POC</div>\n  <div class=\"border col-sm-3\" [ngClass]=\"{orange:pages['confirm'], 'tabs':true}\" (click)=\"swicthPages('confirm')\">Confirm</div>\n</nav>\n\n<div class=\"site-form-content\">\n <h1 class=\"form-title\">New Site</h1>\n\n<!--General Site info-->\n\n<form #siteForm=\"ngForm\" novalidate *ngIf=\"pages.general_info\">\n <div class=\"form-group form-group-sm\">\n   <label for=\"site_name\">Site Name</label>\n   <input\n     type=\"text\"\n     required\n     class=\"form-control\"\n     id=\"site_name\"\n     name=\"site_name\"\n     [(ngModel)]=\"site.site_name\"\n     #site_name=\"ngModel\"\n     placeholder=\"Enter Site Name\">\n </div>\n <div class=\"form-group\">\n   <label for=\"site_code\">Site Code</label>\n   <input\n     type=\"text\"\n     required\n     class=\"form-control\"\n     id=\"site_code\"\n     name=\"site_code\"\n     [(ngModel)]=\"site.site_code\"\n     #site_code=\"ngModel\"\n     placeholder=\"Enter Site Code\">\n </div>\n\n <p>Site Monitored?</p>\n <div class=\"form-check form-check-inline\">\n  <input\n  class=\"form-check-input radio\"\n  type=\"radio\"\n  id=\"inlineCheckbox1\"\n  name=\"monitored_zone\"\n  required\n  [(ngModel)]=\"site.monitored_zone\"\n  #monitored_zone=\"ngModel\"\n  value=\"1\">\n  <label class=\"form-check-label\" id=\"checkboxlabel\" for=\"inlineCheckbox\">Yes</label>\n</div>\n\n<div class=\"form-check form-check-inline\">\n  <input\n  class=\"form-check-input radio\"\n  type=\"radio\"\n  id=\"inlineCheckbox2\"\n  name=\"monitored_zone\"\n  required\n  [(ngModel)]=\"site.monitored_zone\"\n  #monitored_zone=\"ngModel\"\n  [value]=\"0\">\n  <label class=\"form-check-label\" id=\"checkboxlabel\" for=\"inlineCheckbox\">No</label>\n</div>\n<br>\n\n\n<div class=\"weekDays-selector\">\n    <p>Select Business Days</p>\n  \n  <div class=\"day-time\">\n      <input type=\"checkbox\" id=\"weekday-mon\" class=\"weekday\" (click)=\"dayClicked(1)\"/>\n      <label for=\"weekday-mon\" >M</label>\n      <i class=\"fa fa-sun-o col col-3\" aria-hidden=\"true\" *ngIf=\"site.business_days[1].active\" (click)=\"open(1,'start')\"></i>\n      <i class=\"fa fa-moon-o col col-3\" aria-hidden=\"true\" *ngIf=\"site.business_days[1].active\" (click)=\"open(1,'end')\"></i>\n  </div>\n  <div class=\"day-time\">\n      <input type=\"checkbox\" id=\"weekday-tue\" class=\"weekday\" (click)=\"dayClicked(2)\"/>\n      <label for=\"weekday-tue\">T</label>\n       <i class=\"fa fa-sun-o col col-3\" aria-hidden=\"true\" *ngIf=\"site.business_days[2].active\" (click)=\"open(2,'start')\"></i>\n      <i class=\"fa fa-moon-o col col-3\" aria-hidden=\"true\" *ngIf=\"site.business_days[2].active\" (click)=\"open(2,'end')\"></i>\n \n  </div>\n  \n  <div class=\"day-time\">\n       <input type=\"checkbox\" id=\"weekday-wed\" class=\"weekday\" (click)=\"dayClicked(3)\"/>\n       <label for=\"weekday-wed\">W</label>\n       <i class=\"fa fa-sun-o col col-3\" aria-hidden=\"true\" *ngIf=\"site.business_days[3].active\" (click)=\"open(3,'start')\"></i>\n      <i class=\"fa fa-moon-o col col-3\" aria-hidden=\"true\" *ngIf=\"site.business_days[3].active\" (click)=\"open(3,'end')\"></i>\n  </div>\n \n  <div class=\"day-time\">\n      <input type=\"checkbox\" id=\"weekday-thu\" class=\"weekday\" (click)=\"dayClicked(4)\"/>\n      <label for=\"weekday-thu\">T</label>\n      <i class=\"fa fa-sun-o col col-3\" aria-hidden=\"true\" *ngIf=\"site.business_days[4].active\" (click)=\"open(4,'start')\"></i>\n      <i class=\"fa fa-moon-o col col-3\" aria-hidden=\"true\" *ngIf=\"site.business_days[4].active\" (click)=\"open(4,'end')\"></i>\n  </div>\n  \n  <div class=\"day-time\">\n      <input type=\"checkbox\" id=\"weekday-fri\" class=\"weekday\" (click)=\"dayClicked(5)\"/>\n      <label for=\"weekday-fri\">F</label>\n     <i class=\"fa fa-sun-o col col-3\" aria-hidden=\"true\" *ngIf=\"site.business_days[5].active\" (click)=\"open(5,'start')\"></i>\n     <i class=\"fa fa-moon-o col col-3\" aria-hidden=\"true\" *ngIf=\"site.business_days[5].active\" (click)=\"open(5,'end')\"></i>\n      \n  </div>\n  \n  <div class=\"day-time\">\n      <input type=\"checkbox\" id=\"weekday-sat\" class=\"weekday\" (click)=\"dayClicked(6)\"/>\n      <label for=\"weekday-sat\">S</label>\n      <i class=\"fa fa-sun-o col col-3\" aria-hidden=\"true\" *ngIf=\"site.business_days[6].active\" (click)=\"open(6,'start')\"></i>\n      <i class=\"fa fa-moon-o col col-3\" aria-hidden=\"true\" *ngIf=\"site.business_days[6].active\" (click)=\"open(6,'end')\"></i>\n  </div>\n  \n  <div class=\"day-time\">\n      <input type=\"checkbox\" id=\"weekday-sun\" class=\"weekday\" (click)=\"dayClicked(0)\" />\n      <label for=\"weekday-sun\">S</label>\n      <i class=\"fa fa-sun-o col col-3\" aria-hidden=\"true\" *ngIf=\"site.business_days[0].active\" (click)=\"open(0,'start')\"></i>\n      <i class=\"fa fa-moon-o col col-3\" aria-hidden=\"true\" *ngIf=\"site.business_days[0].active\" (click)=\"open(0,'end')\"></i>\n  </div>\n  \n \n</div>\n<ul>\n    <li *ngIf=\"site.business_days[1].active\">Mon ~ <strong>Start: {{site.business_days[1].start || 'N/A'}} - End:  {{site.business_days[1].end || 'N/A'}}</strong></li>\n     <li *ngIf=\"site.business_days[2].active\">Tue ~ <strong>Start: {{site.business_days[2].start || 'N/A'}} - End: {{site.business_days[2].end ||'N/A'}}</strong></li>\n     <li *ngIf=\"site.business_days[3].active\">Wed ~ <strong>Start: {{site.business_days[3].start || 'N/A'}} - End: {{site.business_days[3].end ||'N/A'}}</strong></li>\n     <li *ngIf=\"site.business_days[4].active\">Thu ~ <strong>Start: {{site.business_days[4].start || 'N/A'}} - End: {{site.business_days[4].end ||'N/A'}}</strong></li>\n     <li *ngIf=\"site.business_days[5].active\">Fri ~ <strong>Start: {{site.business_days[5].start || 'N/A'}} - End: {{site.business_days[5].end ||'N/A'}}</strong></li>\n     <li *ngIf=\"site.business_days[6].active\">Sat ~ <strong>Start: {{site.business_days[6].start ||'N/A'}} - End: {{site.business_days[6].end ||'N/A'}}</strong></li>\n     <li *ngIf=\"site.business_days[0].active\">Sun ~ <strong>Start: {{site.business_days[0].start ||'N/A'}} - End: {{site.business_days[0].end ||'N/A'}}</strong></li>\n</ul>\n\n\n<!--Quick set time for all business hours-->\n\n<input id=\"check_business_hours\" id=\"inlineCheckbox3\" type=\"checkbox\" (change)=\"checkBusinessHours()\"><label for=\"\">Quick set</label>\n <div class=\"day-time weekDays-selector\" *ngIf=\"all_business\">\n      <i class=\"fa fa-sun-o col col-3\" aria-hidden=\"true\" *ngIf=\"site.business_days[5].active\" (click)=\"open('all','start')\"></i>\n      <i class=\"fa fa-moon-o col col-3\" aria-hidden=\"true\" *ngIf=\"site.business_days[5].active\" (click)=\"open('all','end')\"></i>\n  </div><br>\n\n\n <button [disabled]=\"!siteForm.form.valid\" (click)=\"addSite()\" class=\"btn btn-primary nextPage\">Continue</button>\n</form>\n\n<app-address *ngIf=\"this.pages['address']\"></app-address>\n\n<app-poc *ngIf=\"this.pages['poc']\"></app-poc>\n\n</div>\n\n</div>\n\n\n\n\n\n\n\n"

/***/ }),

/***/ "./src/app/sites/sites-new/sites-new.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var address_1 = __webpack_require__("./src/app/sites/address.ts");
var sites_service_1 = __webpack_require__("./src/app/sites/sites-service.ts");
var poc_1 = __webpack_require__("./src/app/sites/poc.ts");
var amazing_time_picker_1 = __webpack_require__("./node_modules/amazing-time-picker/amazing-time-picker.es5.js");
var SitesNewComponent = /** @class */ (function () {
    function SitesNewComponent(_sitesService, atp) {
        this._sitesService = _sitesService;
        this.atp = atp;
    }
    SitesNewComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.site_subscription = this._sitesService.observedSite.subscribe(function (site) { return _this.site = site; }, function (err) { return console.log(err); }, function () { });
        this.address = new address_1.Address;
        this.pages = {
            general_info: true,
            address: null,
            poc: null,
            confirm: null
        };
        this.all_business = false;
        //for styling
        this.all_days_selected = false;
        /// POC linked list 
        this.pocs_subscription = this._sitesService.observed_new_site_pocs.subscribe(function (pocs) { return _this.pocs = pocs; }, function (err) { return console.log(err); }, function () { });
        this.GAR = new poc_1.POC;
        this.GAR.poc_name = "GAR";
        this.initial_order = 0;
        // Site creation check for each section 
        this.site_creation_status = {
            "general": false,
            "address": false,
            "poc": false,
        };
    };
    SitesNewComponent.prototype.addSite = function () {
        console.dir(this.address);
        console.dir(this.site);
        this._sitesService.addSite(this.site, this.address)
            .then(function (data) {
            console.log(data);
            console.log(data[0].address_id.line_1);
        })
            .catch(function (err) {
            console.log(err);
        });
    };
    SitesNewComponent.prototype.swicthPages = function (page) {
        for (var key in this.pages) {
            this.pages[key] = null;
        }
        this.pages[page] = true;
    };
    SitesNewComponent.prototype.addAddress = function () {
        this.address.form_status = true;
    };
    SitesNewComponent.prototype.dayClicked = function (day) {
        console.log(day);
        if (day === "all") {
            console.log(day);
            for (var key in this.site.business_days) {
                console.log(this.site.business_days[key]);
                this.site.business_days[key].active = !this.site.business_days[key].active;
            }
        }
        else {
            this.site.business_days[day].active = !this.site.business_days[day].active;
        }
    };
    SitesNewComponent.prototype.open = function (day, period) {
        var _this = this;
        var amazingTimePicker = this.atp.open();
        amazingTimePicker.afterClose().subscribe(function (time) {
            console.log(time);
            if (day === "all") {
                for (var key in _this.site.business_days) {
                    console.log(_this.site.business_days[key]);
                    _this.site.business_days[key][period] = time;
                }
            }
            else {
                _this.site.business_days[day][period] = time;
                console.dir(_this.site.business_days);
            }
        });
    };
    SitesNewComponent.prototype.checkBusinessHours = function () {
        var mon, tue, wed, thur, fri, sat, sun;
        console.log("Business hours checked");
        this.all_business = !this.all_business;
        this.all_days_selected = !this.all_days_selected;
        console.log(this.all_business);
        console.log(document);
        mon = document.getElementById("weekday-mon");
        mon.checked = !mon.checked;
        tue = document.getElementById("weekday-tue");
        tue.checked = !tue.checked;
        wed = document.getElementById("weekday-wed");
        wed.checked = !wed.checked;
        thur = document.getElementById("weekday-thu");
        thur.checked = !thur.checked;
        fri = document.getElementById("weekday-fri");
        fri.checked = !fri.checked;
        sat = document.getElementById("weekday-sat");
        sat.checked = !sat.checked;
        sun = document.getElementById("weekday-sun");
        sun.checked = !sun.checked;
        for (var key in this.site.business_days) {
            console.log(this.site.business_days[key]);
            this.site.business_days[key].active = !this.site.business_days[key].active;
        }
        console.log(this.all_days_selected);
    };
    SitesNewComponent.prototype.addGAR = function () {
        console.log("add GAR");
        this.initial_order += 1;
        this.GAR.order = this.initial_order;
        var GAR2 = new poc_1.POC;
        GAR2.poc_name = "Test";
        GAR2.order = 2;
        var GAR3 = new poc_1.POC;
        GAR3.poc_name = "Switch";
        GAR3.order = 3;
        this.pocs.insert(this.GAR);
        this.pocs.insert(GAR2);
        this.pocs.insert(GAR3);
        this.pocs.exchange_orders(this.GAR, GAR3);
        this.pocs.last_changed = Date.now();
        this._sitesService.updateNewSitePOCS(this.pocs);
        this.GAR = new poc_1.POC;
        this.GAR.poc_name = "GAR";
    };
    SitesNewComponent.prototype.removePOC = function (contact) {
        console.log("remove", contact);
        this.pocs.delete_node(contact);
        this.pocs.last_changed = Date.now();
        this._sitesService.updateNewSitePOCS(this.pocs);
    };
    SitesNewComponent.prototype.ngOnDestroy = function () {
    };
    SitesNewComponent = __decorate([
        core_1.Component({
            selector: 'app-sites-new',
            template: __webpack_require__("./src/app/sites/sites-new/sites-new.component.html"),
            styles: [__webpack_require__("./src/app/sites/sites-new/sites-new.component.css")]
        }),
        __metadata("design:paramtypes", [sites_service_1.SitesService, amazing_time_picker_1.AmazingTimePickerService])
    ], SitesNewComponent);
    return SitesNewComponent;
}());
exports.SitesNewComponent = SitesNewComponent;


/***/ }),

/***/ "./src/app/sites/sites-service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var http_1 = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
__webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
__webpack_require__("./node_modules/rxjs/_esm5/add/operator/toPromise.js");
var BehaviorSubject_1 = __webpack_require__("./node_modules/rxjs/_esm5/BehaviorSubject.js");
var site_1 = __webpack_require__("./src/app/sites/site.ts");
var sll_1 = __webpack_require__("./src/app/sites/linked_list/sll.ts");
var SitesService = /** @class */ (function () {
    function SitesService(_http) {
        this._http = _http;
        this.observedSites = new BehaviorSubject_1.BehaviorSubject([]);
        this.observedSite = new BehaviorSubject_1.BehaviorSubject(new site_1.Site);
        this.observed_new_site_pocs = new BehaviorSubject_1.BehaviorSubject(new sll_1.SLL);
    }
    SitesService.prototype.updateSite = function (site) {
        this.observedSite.next(site);
    };
    SitesService.prototype.updateSites = function (sites) {
        this.observedSites.next(sites);
    };
    SitesService.prototype.updateNewSitePOCS = function (pocs) {
        console.log("pocs updated");
        this.observed_new_site_pocs.next(pocs);
    };
    SitesService.prototype.addSite = function (site, address) {
        return this._http.post('/sites/new', { 'site': site, 'address': address }).map(function (data) { return data.json(); }).toPromise();
    };
    SitesService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.Http])
    ], SitesService);
    return SitesService;
}());
exports.SitesService = SitesService;


/***/ }),

/***/ "./src/app/sites/sites-single-detail/sites-single-detail.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/sites/sites-single-detail/sites-single-detail.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  sites-single-detail works!\n</p>\n"

/***/ }),

/***/ "./src/app/sites/sites-single-detail/sites-single-detail.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var SitesSingleDetailComponent = /** @class */ (function () {
    function SitesSingleDetailComponent() {
    }
    SitesSingleDetailComponent.prototype.ngOnInit = function () {
    };
    SitesSingleDetailComponent = __decorate([
        core_1.Component({
            selector: 'app-sites-single-detail',
            template: __webpack_require__("./src/app/sites/sites-single-detail/sites-single-detail.component.html"),
            styles: [__webpack_require__("./src/app/sites/sites-single-detail/sites-single-detail.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SitesSingleDetailComponent);
    return SitesSingleDetailComponent;
}());
exports.SitesSingleDetailComponent = SitesSingleDetailComponent;


/***/ }),

/***/ "./src/app/sites/sites.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/sites/sites.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  sites works!\n</p>\n"

/***/ }),

/***/ "./src/app/sites/sites.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var SitesComponent = /** @class */ (function () {
    function SitesComponent() {
    }
    SitesComponent.prototype.ngOnInit = function () {
    };
    SitesComponent = __decorate([
        core_1.Component({
            selector: 'app-sites',
            template: __webpack_require__("./src/app/sites/sites.component.html"),
            styles: [__webpack_require__("./src/app/sites/sites.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SitesComponent);
    return SitesComponent;
}());
exports.SitesComponent = SitesComponent;


/***/ }),

/***/ "./src/app/user.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var User = /** @class */ (function () {
    function User() {
    }
    return User;
}());
exports.User = User;


/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
Object.defineProperty(exports, "__esModule", { value: true });
exports.environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var platform_browser_dynamic_1 = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
var app_module_1 = __webpack_require__("./src/app/app.module.ts");
var environment_1 = __webpack_require__("./src/environments/environment.ts");
if (environment_1.environment.production) {
    core_1.enableProdMode();
}
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(app_module_1.AppModule)
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map