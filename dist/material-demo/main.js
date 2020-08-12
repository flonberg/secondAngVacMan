(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host ::ng-deep .mat-tab-body-content{\n  padding-top:20px\n}\n\n\n.example-form {\n  min-width: 150px;\n    max-width: 500px;\n    width: 100%;\n  }\n\n\n.example-full-width {\n    width: 100%;\n  }\n\n\n.example-container {\n    display: flex;\n    flex-direction: column;\n  }\n\n\nhtml *\n{\n   font-size: 8 !important;\n   color: red !important;\n   font-family: Arial !important;\n}\n\n\n#help {\n  position: fixed;\n  bottom: 0;\n  right: 0;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRTtBQUNGOzs7QUFHQTtFQUNFLGdCQUFnQjtJQUNkLGdCQUFnQjtJQUNoQixXQUFXO0VBQ2I7OztBQUVBO0lBQ0UsV0FBVztFQUNiOzs7QUFFQTtJQUNFLGFBQWE7SUFDYixzQkFBc0I7RUFDeEI7OztBQUNBOztHQUVDLHVCQUF1QjtHQUN2QixxQkFBcUI7R0FDckIsNkJBQTZCO0FBQ2hDOzs7QUFDQTtFQUNFLGVBQWU7RUFDZixTQUFTO0VBQ1QsUUFBUTtBQUNWIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCA6Om5nLWRlZXAgLm1hdC10YWItYm9keS1jb250ZW50e1xuICBwYWRkaW5nLXRvcDoyMHB4XG59XG5cblxuLmV4YW1wbGUtZm9ybSB7XG4gIG1pbi13aWR0aDogMTUwcHg7XG4gICAgbWF4LXdpZHRoOiA1MDBweDtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuICBcbiAgLmV4YW1wbGUtZnVsbC13aWR0aCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cblxuICAuZXhhbXBsZS1jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgfVxuICBodG1sICpcbntcbiAgIGZvbnQtc2l6ZTogOCAhaW1wb3J0YW50O1xuICAgY29sb3I6IHJlZCAhaW1wb3J0YW50O1xuICAgZm9udC1mYW1pbHk6IEFyaWFsICFpbXBvcnRhbnQ7XG59XG4jaGVscCB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgYm90dG9tOiAwO1xuICByaWdodDogMDtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<app-nav-bar-vm></app-nav-bar-vm>\n\n\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'Time Away Calendar';
        this.foods = [
            { value: 'steak-0', viewValue: 'Steak' },
            { value: 'pizza-1', viewValue: 'Pizza' },
            { value: 'tacos-2', viewValue: 'Tacos' }
        ];
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/checkbox */ "./node_modules/@angular/material/esm5/checkbox.es5.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/esm5/select.es5.js");
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/radio */ "./node_modules/@angular/material/esm5/radio.es5.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/esm5/input.es5.js");
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/autocomplete */ "./node_modules/@angular/material/esm5/autocomplete.es5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/datepicker */ "./node_modules/@angular/material/esm5/datepicker.es5.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _dose_fx_dose_fx_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./dose-fx/dose-fx.component */ "./src/app/dose-fx/dose-fx.component.ts");
/* harmony import */ var _autocomplete_filter_example_autocomplete_filter_example_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./autocomplete-filter-example/autocomplete-filter-example.component */ "./src/app/autocomplete-filter-example/autocomplete-filter-example.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _time_line_time_line_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./time-line/time-line.component */ "./src/app/time-line/time-line.component.ts");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/esm5/core.es5.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm5/button.es5.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _nav_bar_vm_nav_bar_vm_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./nav-bar-vm/nav-bar-vm.component */ "./src/app/nav-bar-vm/nav-bar-vm.component.ts");
/* harmony import */ var _month_view_month_view_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./month-view/month-view.component */ "./src/app/month-view/month-view.component.ts");
/* harmony import */ var _window_provider__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./window.provider */ "./src/app/window.provider.ts");
/* harmony import */ var _notice_notice_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./notice/notice.component */ "./src/app/notice/notice.component.ts");
/* harmony import */ var _my_duties_my_duties_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./my-duties/my-duties.component */ "./src/app/my-duties/my-duties.component.ts");
/* harmony import */ var _help_help_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./help/help.component */ "./src/app/help/help.component.ts");
/* harmony import */ var _week_view_week_view_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./week-view/week-view.component */ "./src/app/week-view/week-view.component.ts");




























//import { PhysicsCoverageComponent } from './physics-coverage/physics-coverage.component';
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_11__["AppComponent"],
                _dose_fx_dose_fx_component__WEBPACK_IMPORTED_MODULE_12__["DoseFxComponent"],
                _autocomplete_filter_example_autocomplete_filter_example_component__WEBPACK_IMPORTED_MODULE_13__["AutocompleteFilterExample"],
                _time_line_time_line_component__WEBPACK_IMPORTED_MODULE_16__["TimeLineComponent"],
                _nav_bar_vm_nav_bar_vm_component__WEBPACK_IMPORTED_MODULE_20__["NavBarVMComponent"],
                _month_view_month_view_component__WEBPACK_IMPORTED_MODULE_21__["MonthViewComponent"],
                _my_duties_my_duties_component__WEBPACK_IMPORTED_MODULE_24__["MyDutiesComponent"],
                _notice_notice_component__WEBPACK_IMPORTED_MODULE_23__["NoticeComponent"],
                _help_help_component__WEBPACK_IMPORTED_MODULE_25__["HelpComponent"],
                _week_view_week_view_component__WEBPACK_IMPORTED_MODULE_26__["WeekViewComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"],
                _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_4__["MatCheckboxModule"],
                _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_10__["MatDatepickerModule"],
                _angular_material_core__WEBPACK_IMPORTED_MODULE_17__["MatNativeDateModule"],
                _angular_material_select__WEBPACK_IMPORTED_MODULE_5__["MatSelectModule"],
                _angular_material_radio__WEBPACK_IMPORTED_MODULE_6__["MatRadioModule"],
                _angular_material_input__WEBPACK_IMPORTED_MODULE_7__["MatInputModule"],
                _angular_material_button__WEBPACK_IMPORTED_MODULE_18__["MatButtonModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_15__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_14__["ReactiveFormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_14__["FormsModule"],
                _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_8__["MatAutocompleteModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_9__["RouterModule"].forRoot([
                    { path: 'MonthView', component: _month_view_month_view_component__WEBPACK_IMPORTED_MODULE_21__["MonthViewComponent"] },
                    { path: 'VacMan**', component: _time_line_time_line_component__WEBPACK_IMPORTED_MODULE_16__["TimeLineComponent"] },
                    { path: 'VacMan/:userid', component: _time_line_time_line_component__WEBPACK_IMPORTED_MODULE_16__["TimeLineComponent"] },
                    { path: 'MyDuties', component: _my_duties_my_duties_component__WEBPACK_IMPORTED_MODULE_24__["MyDutiesComponent"] },
                    { path: 'WeekView', component: _week_view_week_view_component__WEBPACK_IMPORTED_MODULE_26__["WeekViewComponent"] },
                    { path: '**', component: _time_line_time_line_component__WEBPACK_IMPORTED_MODULE_16__["TimeLineComponent"] }
                ])
            ],
            schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["CUSTOM_ELEMENTS_SCHEMA"]],
            providers: [_angular_common__WEBPACK_IMPORTED_MODULE_19__["DatePipe"], _time_line_time_line_component__WEBPACK_IMPORTED_MODULE_16__["TimeLineComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_19__["Location"],
                _window_provider__WEBPACK_IMPORTED_MODULE_22__["WINDOW_PROVIDERS"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_11__["AppComponent"]],
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/autocomplete-filter-example/autocomplete-filter-example.component.css":
/*!***************************************************************************************!*\
  !*** ./src/app/autocomplete-filter-example/autocomplete-filter-example.component.css ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-form {\n    min-width: 150px;\n    max-width: 100px;\n    font-size: 10pt;\n    width: 100%;\n  }\n  \n  .example-full-width {\n    width: 100%;\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXV0b2NvbXBsZXRlLWZpbHRlci1leGFtcGxlL2F1dG9jb21wbGV0ZS1maWx0ZXItZXhhbXBsZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGdCQUFnQjtJQUNoQixlQUFlO0lBQ2YsV0FBVztFQUNiOztFQUVBO0lBQ0UsV0FBVztFQUNiIiwiZmlsZSI6InNyYy9hcHAvYXV0b2NvbXBsZXRlLWZpbHRlci1leGFtcGxlL2F1dG9jb21wbGV0ZS1maWx0ZXItZXhhbXBsZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmV4YW1wbGUtZm9ybSB7XG4gICAgbWluLXdpZHRoOiAxNTBweDtcbiAgICBtYXgtd2lkdGg6IDEwMHB4O1xuICAgIGZvbnQtc2l6ZTogMTBwdDtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuICBcbiAgLmV4YW1wbGUtZnVsbC13aWR0aCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH0iXX0= */"

/***/ }),

/***/ "./src/app/autocomplete-filter-example/autocomplete-filter-example.component.html":
/*!****************************************************************************************!*\
  !*** ./src/app/autocomplete-filter-example/autocomplete-filter-example.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<form class=\"example-form\">\n  <mat-form-field class=\"example-full-width\">\n      <mat-label style='color:blue'>Expansions Based On</mat-label>\n    <input type=\"text\"  aria-label=\"Number\" matInput [formControl]=\"myControl\" [matAutocomplete]=\"auto\">\n    <mat-autocomplete #auto=\"matAutocomplete\">\n      <mat-option *ngFor=\"let option of filteredOptions | async\" [value]=\"option\">\n        {{option}}\n      </mat-option>\n    </mat-autocomplete>\n  </mat-form-field>\n</form>"

/***/ }),

/***/ "./src/app/autocomplete-filter-example/autocomplete-filter-example.component.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/autocomplete-filter-example/autocomplete-filter-example.component.ts ***!
  \**************************************************************************************/
/*! exports provided: AutocompleteFilterExample */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AutocompleteFilterExample", function() { return AutocompleteFilterExample; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");




/**
 * @title Filter autocomplete
 */
var AutocompleteFilterExample = /** @class */ (function () {
    function AutocompleteFilterExample() {
        this.myControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]();
        this.options = ['GTV', 'CTV', 'PTV', 'ITV'];
    }
    AutocompleteFilterExample.prototype.ngOnInit = function () {
        var _this = this;
        this.filteredOptions = this.myControl.valueChanges
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["startWith"])(''), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (value) { return _this._filter(value); }));
    };
    AutocompleteFilterExample.prototype._filter = function (value) {
        var filterValue = value.toLowerCase();
        return this.options.filter(function (option) { return option.toLowerCase().includes(filterValue); });
    };
    AutocompleteFilterExample = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'autocomplete-filter-example',
            template: __webpack_require__(/*! ./autocomplete-filter-example.component.html */ "./src/app/autocomplete-filter-example/autocomplete-filter-example.component.html"),
            styles: [__webpack_require__(/*! ./autocomplete-filter-example.component.css */ "./src/app/autocomplete-filter-example/autocomplete-filter-example.component.css")]
        })
    ], AutocompleteFilterExample);
    return AutocompleteFilterExample;
}());



/***/ }),

/***/ "./src/app/dose-fx.service.ts":
/*!************************************!*\
  !*** ./src/app/dose-fx.service.ts ***!
  \************************************/
/*! exports provided: DoseFxService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DoseFxService", function() { return DoseFxService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var DoseFxService = /** @class */ (function () {
    function DoseFxService(http) {
        this.http = http;
    }
    DoseFxService.prototype.setDBP = function (tableName, docidx) {
        var dBPm = {
            tableName: tableName,
            docidx: docidx,
            editParams: []
        };
    };
    DoseFxService.prototype.setColName = function (s) {
        this.dBPm.editParams[0].colName = s;
    };
    DoseFxService.prototype.setEditVal = function (s) {
        this.dBPm.editParams[0].editVal = s;
    };
    DoseFxService.prototype.update = function (dBParams) {
        console.log('editPatams ', dBParams);
        var url = 'https://whiteboard.partners.org/esb/FLwbe/REST/AngularRest/matDemoRest.php';
        this.http.post(url, JSON.stringify(dBParams)).subscribe(function (val) {
            console.log("POST call", val);
        });
    };
    DoseFxService.prototype.getData = function (docidx, tableName) {
        var url = 'https://whiteboard.partners.org/esb/FLwbe/REST/AngularRest/matDemoGetREST.php?tableName=' + tableName + '&docidx=' + docidx;
        return this.http.get(url);
    };
    DoseFxService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], DoseFxService);
    return DoseFxService;
}());



/***/ }),

/***/ "./src/app/dose-fx/dose-fx.component.css":
/*!***********************************************!*\
  !*** ./src/app/dose-fx/dose-fx.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-form {\n    min-width: 150px;\n    max-width: 430px;\n    width: 100%;\n    font-size: 10pt;\n  }\n\n  \n  .example-full-width {\n    width: 100%;\n    background-color:white;\n    font-size: 10pt;\n  }\n\n  \n  .alignX {\n      text-align: bottom;\n      height:20px;\n      font-size:8;\n  }\n\n  \n  td {\n    padding-right:50px;\n      width:20px;\n  }\n\n  \n  table {\n      width:1200px;\n      table-layout:fixed;\n  }\n\n  \n  textarea {\n    overflow-y: scroll;\n\n   \n}\n\n  \n  input {\n    max-width: 50px;\n}\n\n  \n  labelClass {\n      color:blue;\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZG9zZS1meC9kb3NlLWZ4LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxnQkFBZ0I7SUFDaEIsZ0JBQWdCO0lBQ2hCLFdBQVc7SUFDWCxlQUFlO0VBQ2pCOzs7RUFHQTtJQUNFLFdBQVc7SUFDWCxzQkFBc0I7SUFDdEIsZUFBZTtFQUNqQjs7O0VBQ0E7TUFDSSxrQkFBa0I7TUFDbEIsV0FBVztNQUNYLFdBQVc7RUFDZjs7O0VBQ0E7SUFDRSxrQkFBa0I7TUFDaEIsVUFBVTtFQUNkOzs7RUFDQTtNQUNJLFlBQVk7TUFDWixrQkFBa0I7RUFDdEI7OztFQUVBO0lBQ0Usa0JBQWtCOzs7QUFHdEI7OztFQUNBO0lBQ0ksZUFBZTtBQUNuQjs7O0VBQ0U7TUFDSSxVQUFVO0VBQ2QiLCJmaWxlIjoic3JjL2FwcC9kb3NlLWZ4L2Rvc2UtZnguY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5leGFtcGxlLWZvcm0ge1xuICAgIG1pbi13aWR0aDogMTUwcHg7XG4gICAgbWF4LXdpZHRoOiA0MzBweDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBmb250LXNpemU6IDEwcHQ7XG4gIH1cblxuICBcbiAgLmV4YW1wbGUtZnVsbC13aWR0aCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjp3aGl0ZTtcbiAgICBmb250LXNpemU6IDEwcHQ7XG4gIH1cbiAgLmFsaWduWCB7XG4gICAgICB0ZXh0LWFsaWduOiBib3R0b207XG4gICAgICBoZWlnaHQ6MjBweDtcbiAgICAgIGZvbnQtc2l6ZTo4O1xuICB9XG4gIHRkIHtcbiAgICBwYWRkaW5nLXJpZ2h0OjUwcHg7XG4gICAgICB3aWR0aDoyMHB4O1xuICB9XG4gIHRhYmxlIHtcbiAgICAgIHdpZHRoOjEyMDBweDtcbiAgICAgIHRhYmxlLWxheW91dDpmaXhlZDtcbiAgfVxuXG4gIHRleHRhcmVhIHtcbiAgICBvdmVyZmxvdy15OiBzY3JvbGw7XG5cbiAgIFxufVxuaW5wdXQge1xuICAgIG1heC13aWR0aDogNTBweDtcbn1cbiAgbGFiZWxDbGFzcyB7XG4gICAgICBjb2xvcjpibHVlO1xuICB9Il19 */"

/***/ }),

/***/ "./src/app/dose-fx/dose-fx.component.html":
/*!************************************************!*\
  !*** ./src/app/dose-fx/dose-fx.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n\n<form [formGroup] = \"form\">\n<div class=\"form-group\">\n  <div style=\"width:30%\">\n      <mat-form-field class=\"example-full-width\">\n        <mat-label style='color:blue'>Plan Name </mat-label>\n        <input matInput size=\"35\" autocomplete=\"off\" value=\"\"   formControlName=\"planName\" (change) = \"editVal($event, 'planName')\" >\n      </mat-form-field>\n   </div>   \n    <table  style=\"table-layout:fixed;\"><tr>\n    <td>\n      <mat-form-field class=\"example-full-width\">\n        <mat-label  style='color:blue'>Dose</mat-label>\n        <div style=\"width:200px\">\n        <input matInput id='dose' formControlName=\"Dose\" name=\"dose\" (change) = \"editVal($event, 'dose')\" autocomplete=\"off\" value=\"\">\n    \n        </div>\n        <span matSuffix>cGy</span>\n      </mat-form-field>\n    </td> \n     <td><mat-form-field class=\"example-full-width\">\n        <mat-label style='color:blue'>FxDose </mat-label>\n            <input matInput value=\"\"  formControlName=\"fxDose\" (change) = \"editVal($event, 'fxDose')\"  size=10>\n            <span matSuffix>cGy</span>\n          </mat-form-field>\n    </td>\n    <td>\n      <mat-form-field class=\"example-full-width\">\n          <mat-label style='color:blue'>Num. Fx.</mat-label>\n            <input matInput  formControlName=\"numFx\" (change) = \"editVal($event, 'numFx')\"  >\n          </mat-form-field>\n    </td>\n    <td>\n        <mat-form-field  class=\"example-full-width\" style=\"width:140px;\">\n            <mat-label style='color:blue'>Beam Type </mat-label>\n            <mat-select name='beamTypeSel' \n            (selectionChange)=\"editVal($event, 'beamType')\"\n            formControlName=\"beamType\" >\n              <mat-optgroup *ngFor=\"let group of beamGroups\" [label]=\"group.name\"\n                            [disabled]=\"group.disabled\">\n                <mat-option *ngFor=\"let beam of group.beam\" [value]=\"beam.value\">\n                  {{beam.value}}\n                </mat-option>\n              </mat-optgroup>\n            </mat-select>\n        </mat-form-field>\n    </td>\n    <td style=\"width:200px; padding-left:100px;\">\n    <mat-form-field class=\"example-full-width\">\n      <mat-label style='color:blue'>General Consideration</mat-label>\n    <textarea matInput   cols=\"200\"  matTextareaAutosize formControlName=\"generalConsideration\"  (change) = \"editVal($event, 'generalConsideration')\" ></textarea>\n  </mat-form-field>\n  </td>\n   </tr> </table>\n   \n   <autocomplete-filter-example></autocomplete-filter-example>\n\n </div>\n  </form>\n<app-time-line></app-time-line>\n\n\n\n\n\n "

/***/ }),

/***/ "./src/app/dose-fx/dose-fx.component.ts":
/*!**********************************************!*\
  !*** ./src/app/dose-fx/dose-fx.component.ts ***!
  \**********************************************/
/*! exports provided: DoseFxComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DoseFxComponent", function() { return DoseFxComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _dose_fx_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../dose-fx.service */ "./src/app/dose-fx.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var DoseFxComponent = /** @class */ (function () {
    function DoseFxComponent(route, DoseFxSvce) {
        this.route = route;
        this.beamGroups = [
            {
                name: 'Photons',
                beam: [
                    { id: 1, value: '6Mv' },
                    { id: 2, value: '10Mv' },
                    { id: 3, value: '15Mv' },
                    { id: 3, value: '6_&_10Mv' },
                    { id: 3, value: '6_&_15Mv' },
                ]
            },
            {
                name: 'Protons',
                beam: [
                    { id: 11, value: 'Protons_BS' },
                    { id: 12, value: 'Protons_DS' },
                    { id: 13, value: 'Protons_Star' },
                    { id: 13, value: 'Protons_EYE' },
                ]
            },
            {
                name: 'Electrons',
                disabled: false,
                beam: [
                    { id: 21, value: 'Electrons' },
                ]
            },
        ];
        this.editParamSet = {
            tableName: 'AWWD_Plans',
            docidx: 1,
            editParams: [
                { colName: '', editVal: '' },
            ]
        };
        this.selectedBeamType = '';
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            'Dose': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            'fxDose': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            'numFx': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            'planName': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            'beamType': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.selectedBeamType),
            'generalConsideration': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
        });
        this.DoseFxSvce = DoseFxSvce;
    }
    DoseFxComponent.prototype.editVal = function (s, n) { };
    DoseFxComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.paramMap.subscribe(function (params) {
            _this.editParamSet.docidx = +params.get('docidx');
            _this.DoseFxSvce.setDBP("AWWD_Plans", +params.get('docidx'));
        }); // set the docidx
        this.DoseFxSvce.getData(this.editParamSet.docidx, this.editParamSet.tableName).subscribe(// get the data from dB for this docidx
        function (val) {
            if (val) { // if there is data from dB
                _this.form.get('Dose').setValue(val['dose']); // write the data to the form 
                _this.form.get('fxDose').setValue(val['fxDose']);
                _this.form.get('numFx').setValue(val['numFx']);
                _this.form.get('beamType').setValue(val['beamType']);
                _this.form.get('planName').setValue(val['planName']);
                _this.form.get('generalConsideration').setValue(val['generalConsideration']);
            }
        });
    };
    DoseFxComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-dose-fx',
            template: __webpack_require__(/*! ./dose-fx.component.html */ "./src/app/dose-fx/dose-fx.component.html"),
            styles: [__webpack_require__(/*! ./dose-fx.component.css */ "./src/app/dose-fx/dose-fx.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], _dose_fx_service__WEBPACK_IMPORTED_MODULE_1__["DoseFxService"]])
    ], DoseFxComponent);
    return DoseFxComponent;
}());



/***/ }),

/***/ "./src/app/five-day-cal.service.ts":
/*!*****************************************!*\
  !*** ./src/app/five-day-cal.service.ts ***!
  \*****************************************/
/*! exports provided: FiveDayCalService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiveDayCalService", function() { return FiveDayCalService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _window_provider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./window.provider */ "./src/app/window.provider.ts");



var FiveDayCalService = /** @class */ (function () {
    function FiveDayCalService(window) {
        this.window = window;
        this.dS = [{}];
    } // @Inject is needed 
    FiveDayCalService.prototype.makeWeek = function (advance) {
        var mns = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
        var weekday = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'];
        var today = new Date();
        today.setDate(today.getDate() + advance * 7);
        var monDate = this.getMonday(today);
        for (var i = 0; i < 5; i++) {
            this.dS[i] = { "monthDay": mns[monDate.getMonth()] + "-" + monDate.getDate(),
                "dayName": weekday[i],
                "date": monDate.toISOString().split('T')[0] };
            monDate.setDate(monDate.getDate() + 1);
        }
    };
    FiveDayCalService.prototype.getMonday = function (d) {
        var day = d.getDay(), diff = d.getDate() - day + (day == 0 ? -6 : 1); // adjust when day is sunday
        return new Date(d.setDate(diff));
    };
    FiveDayCalService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_window_provider__WEBPACK_IMPORTED_MODULE_2__["WINDOW"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Window])
    ], FiveDayCalService);
    return FiveDayCalService;
}());



/***/ }),

/***/ "./src/app/gen-edit.service.ts":
/*!*************************************!*\
  !*** ./src/app/gen-edit.service.ts ***!
  \*************************************/
/*! exports provided: GenEditService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GenEditService", function() { return GenEditService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _window_provider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./window.provider */ "./src/app/window.provider.ts");




var GenEditService = /** @class */ (function () {
    function GenEditService(http, window) {
        this.http = http;
        this.window = window;
    }
    GenEditService.prototype.setUserId = function (s) {
        this.userid = s;
    };
    GenEditService.prototype.setPlatform = function () {
        //  this.angularRoute = this.loc.path();    
        this.emailStage = "Dev"; // the default. 
        var wlr = window.location.href;
        console.log("window.location.herf is " + window.location.href);
        //  if (window.location.href.indexOf('localhost') !== -1 || window.location.href.indexOf('blackboard') !== -1 ){
        //     this.urlBase = 'http://blackboard-dev.partners.org/dev/FJL/vacMan/';      //get data from BB  for localhost or BB 
        //   }   
        if (window.location.href.indexOf('localhost') !== -1 || window.location.href.indexOf('blackboard') !== -1) {
            this.urlBase = 'http://blackboard-dev.partners.org/dev/FJL/AngProd/'; //get data from BB  for localhost or BB 
            // this.urlBase = 'https://whiteboard.partners.org/esb/FLwbe/AngProd/'; 
            this.emailStage = "Dev";
        }
        if (window.location.href.indexOf('whiteboard') !== -1) { // PROD. 
            console.log(" dectected whiteboard so setting urlBase to whitboard");
            this.urlBase = 'https://whiteboard.partners.org/esb/FLwbe/AngProd/'; //get data from BB  for localhost or BB 
            this.emailStage = "Prod";
        }
        if (window.location.href.indexOf('cat') !== -1) {
            console.log(" dectected balckcat so setting urlBase to whitboard");
            this.urlBase = 'https://blackcat.partners.org/dev/FJL/AngProd/'; //get data from BB  for localhost or BB 
        }
        return this.host; // for time-line which has its own REST
    };
    GenEditService.prototype.checkIfNoticeNeeded = function (name) {
        var getParams = {
            action: 'simpleGet',
            tableName: 'notice',
            whereColName: 'UserId',
            whereColVal: this.userid,
            getColName: name,
        };
    };
    GenEditService.prototype.getFromFile = function () {
        if (!this.urlBase) {
            this.setPlatform(); // sets the platform to BB or 242
        }
        var url2 = this.urlBase + 'REST_GET.php?action=getFromFile';
        console.log('getTa url is getFromFile' + url2);
        return this.http.get(url2);
    };
    /*********  get using selStr from GET param  */
    GenEditService.prototype.getWithSelString = function (arg) {
        var url = this.urlBase + "REST_GET.php?action=getWithSelString&selStr=" + arg['selStr'];
        if (arg['key'])
            url += "&key=" + arg['key'];
        console.log("getWithSelString URL is " + url);
        return this.http.get(url);
    };
    /*******  get with param list and single WHERE conditon */
    GenEditService.prototype.simpleGet = function (p) {
        var getStr = "";
        for (var property in p) {
            getStr += "&" + ("" + property) + "=" + ("" + p[property]);
        }
        var url = this.urlBase + "REST_GET.php?dataS=getSimple" + getStr;
        return this.http.get(url);
    };
    GenEditService.prototype.multGet = function (p) {
        var jS = JSON.stringify(p);
        var url = this.urlBase + "REST_GET.php?action=multGet&jG=" + jS;
        console.log("167 multGet url is  " + url);
        return this.http.get(url);
    };
    GenEditService.prototype.getPhysicistFromION = function () {
    };
    GenEditService.prototype.genDB_POST = function (dP) {
        if (!this.urlBase) {
            this.setPlatform();
        }
        var url2 = this.urlBase + 'RESTgenDB_POST.php';
        console.log("genBDPosrt url 2is " + url2);
        this.http.post(url2, JSON.stringify(dP)).subscribe(function (val) {
            //   console.log('POST call', val);
        });
    };
    /*
      getLastIdx(){
        const url2 = this.urlBase + 'REST_GET.php?action=getLastIdx';
        console.log('getMyDuties url is ' + url2);
        return this.http.get(url2);
        }
     */
    GenEditService.prototype.genGet = function (s) {
        if (!this.urlBase)
            this.setPlatform(); // sets the platform to BB or 242
        var url2 = this.urlBase + s;
        console.log('getMyDuties url is ' + url2);
        return this.http.get(url2);
    };
    /*
     getTAs(){
         if (!this.urlBase){
           this.setPlatform();                   // sets the platform to BB or 242
         }
         const url2 = this.urlBase + 'REST_GET.php?action=getTAs&userid=' + this.userid ;
         console.log('getTa url is 5-21' + url2);
         return this.http.get(url2);
       }
       */
    /*
      getPMDs(userid){
          if (!this.urlBase){
            this.setPlatform();                   // sets the platform to BB or 242
          }
          const url2 = this.urlBase + 'REST_GET.php?action=getPMDs&userid=' + userid ;
          console.log('getTa url is 5-21' + url2);
          return this.http.get(url2);
        }
        */
    GenEditService.prototype.genDB_GET = function (dP) {
        if (!this.urlBase) {
            this.setPlatform();
        }
        var url2 = this.urlBase + 'genGETterPOST.php';
        console.log("genBDPosrt url 2is " + url2);
        return this.http.post(url2, JSON.stringify(dP));
    };
    /*
  getPhysicsMonthlyDuties(startDateString, userid){
      if (!this.urlBase){
        this.setPlatform();
      }
      const url2 = this.urlBase + 'getPhysicsDuties.php?dateSince=' + startDateString + '&userid=' + userid;
      //const url2 = this.urlBase + 'RESThub.php?dataS=getPhysicsMonthlyDuties&userid=' + userid;
      console.log("getEdit 115 url is " + url2);
      return this.http.get(url2)
    }
    */
    GenEditService.prototype.genRest = function (dBParams, scriptName, hostName) {
        var url = 'http:/' + hostName + scriptName;
    };
    //////  does update of SINGLE column. Params in POST. Params are tableName, editColName, editColVal, whereColName, whereColVal  \\\\\
    GenEditService.prototype.update = function (dBParams) {
        var url = 'http://blackboard-dev.partners.org/dev/FJL/vacMan/RESTupdatePOST.php?host=' + this.host;
        this.http.post(url, JSON.stringify(dBParams)).subscribe(function (val) {
            //   console.log("POST call", val);
        });
    };
    GenEditService.prototype.sendEmail = function (emailParams) {
        emailParams['debug'] = '1';
        var url2 = this.urlBase + 'RESTgenDB_POST.php';
        console.log(" 248  senEmail %o", emailParams);
        return this.http.post(url2, JSON.stringify(emailParams), { responseType: 'json' });
    };
    GenEditService.prototype.genPOST = function (dBParams) {
        dBParams['emailStage'] = this.emailStage;
        var url2 = this.urlBase + 'RESTgenDB_POST.php';
        return this.http.post(url2, JSON.stringify(dBParams), { responseType: 'json' });
    };
    /////  params: params.tablename= string; params.editColNames=[]; params.editColVals = []; \\\\\
    ////// whereColName = [];  whereColVal = [] \\\\\
    /////  Use for EDITing  \\\\\\\\\\\
    /////  params: params.tablename= string; params.editColNames=[]; params.editColVals = []; \\\\
    /////  Use for GETting  \\\\\\\\\\\
    ///////  test of get from ION  \\\\\\\\\\
    GenEditService.prototype.IONgetterCustom = function () {
        var url = "https://ion.mgh.harvard.edu/cgi-bin/imrtqa/TESTgetter.php";
    };
    GenEditService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_window_provider__WEBPACK_IMPORTED_MODULE_3__["WINDOW"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], Window])
    ], GenEditService);
    return GenEditService;
}());



/***/ }),

/***/ "./src/app/help/help.component.css":
/*!*****************************************!*\
  !*** ./src/app/help/help.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#helpDiv {\n    display:none;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaGVscC9oZWxwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxZQUFZO0FBQ2hCIiwiZmlsZSI6InNyYy9hcHAvaGVscC9oZWxwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjaGVscERpdiB7XG4gICAgZGlzcGxheTpub25lO1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/help/help.component.html":
/*!******************************************!*\
  !*** ./src/app/help/help.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"hideHelp\" class='right'>\n  <button mat-raised-button (click)=\"showHelp()\" type=\"button\"> Help </button>\n</div>\n\n<div id='helpDiv'  class='right'>\n    <button mat-raised-button (click)=\"hideHelp()\"> Hide Help </button>\n\n    <p *ngFor = \"let line of helpArray\">\n        {{ line }}  </p> \n</div>\n"

/***/ }),

/***/ "./src/app/help/help.component.ts":
/*!****************************************!*\
  !*** ./src/app/help/help.component.ts ***!
  \****************************************/
/*! exports provided: HelpComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HelpComponent", function() { return HelpComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HelpComponent = /** @class */ (function () {
    function HelpComponent() {
    }
    HelpComponent.prototype.ngOnInit = function () {
    };
    HelpComponent.prototype.showHelp = function () {
        console.log('showHelp');
        document.getElementById('helpDiv').style.display = "block";
        document.getElementById('hideHelp').style.display = "none";
    };
    HelpComponent.prototype.hideHelp = function () {
        console.log('showHelp');
        document.getElementById('helpDiv').style.display = "none";
        document.getElementById('hideHelp').style.display = "block";
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
    ], HelpComponent.prototype, "helpArray", void 0);
    HelpComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-help',
            template: __webpack_require__(/*! ./help.component.html */ "./src/app/help/help.component.html"),
            styles: [__webpack_require__(/*! ./help.component.css */ "./src/app/help/help.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HelpComponent);
    return HelpComponent;
}());



/***/ }),

/***/ "./src/app/log.service.ts":
/*!********************************!*\
  !*** ./src/app/log.service.ts ***!
  \********************************/
/*! exports provided: LogService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogService", function() { return LogService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var LogService = /** @class */ (function () {
    function LogService(http) {
        this.http = http;
    }
    LogService.prototype.setURL = function (s) {
        this.url = s;
    };
    LogService.prototype.logMessage = function (s) {
        var url = this.url + '?message=' + s;
        console.log("deBug url is " + url);
        this.http.get(url);
    };
    LogService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], LogService);
    return LogService;
}());



/***/ }),

/***/ "./src/app/month-view/month-view.component.css":
/*!*****************************************************!*\
  !*** ./src/app/month-view/month-view.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n  body{\n    font-size:8pt;\n    font-family:sans-serif;\n}\n  button {\n    background-color: var(--accent);\n}\n  .title {\n    font-style: italic;\n    font-size:200% !important;\n    color:blue;\n}\n  table.small {\n    border:none;\n    height:30px;\n}\n  td {\n    border:solid;\n    width: 200px;\n    height: 100px;\n    font-family:sans-serif;\n}\n  td.small {\n    height:200px;\n    border:none;\n    text-align: center;\n}\n  td.large {\n    font-size:200%;\n    text-align: center;\n    border: none;\n\n}\n  td.tiny {\n    height:20px;\n    border:none;\n    text-align: right;\n}\n  button.tiny{\n\n        width: 2px;\n        height: 2px;\n        padding: 0px;\n        box-sizing: border-box;\n        border: 0;\n        background: red;\n\n}\n  .outMonth {\n    background-color: rgb(245, 230, 230);  \n}\n  .inMonth {\n    background-color: var(--disable)\n}\n  #header {\n    text-align: center;\n    padding:40px;\n}\n  .headClass {\n    background-color:white;\n    text-align: center;\n}\n  #legend {\n    height: 80px;\n    width:100px;\n  \n}\n  .dow {\n    color:black;\n}\n  .accent {\n    background-color: var(--accent);\n}\n  .tinyTable {\n    table-layout:fixed;\n    width:200px;\n}\n  .tinyTable tr {\n    line-height: 14px;\n}\n  .smallTable {\n    table-layout:fixed;\n    width:200px;\n    height:40px;;\n   \n}\n  tr {\n    color:black;\n}\n  caption {\n    color:black;\n    font-size:100%;\n}\n  .flex-container {\n    display: flex;\n    justify-content:center;\n    width:100%;\n    height:120px;\n \n  }\n  .flex-container > div {\n    margin: 10px;\n    padding: 20px;\n    font-size:100%;\n  }\n  .MorningA-IORT:hover, .MorningB:hover, .EveningA:hover, .EveningB:hover {\n    background-color:yellow;\n    cursor: pointer;\n}\n  .one, .MorningA-IORT {\n    background-color:#fcc9ae;\n    height:10px;\n    border: 1px outset #ccc;\n}\n  .two, .MorningB {\n    background-color:#fcdfbc;\n    height:10px;\n    border: 1px outset #ccc;\n}\n  .three, .EveningA {\n    background-color:#fceb8e;\n    height:10px;\n    border: 1px outset #ccc;\n}\n  .four, .EveningB {\n    background-color:#ccccc5;\n    height:10px;\n    border: 1px outset #ccc;\n}\n  .five,.Float1 {\n    background-color:#cce9b6;\n    height:10px;\n    border: 1px outset #ccc;\n}\n  .six, .Float2  {\n    background-color:#a4c2b9;\n    height:10px;\n    border: 1px outset #ccc;\n}\n  .theUser {\n    color: red;\n    font-size: 200%;\n}\n  .lUser {\n    color:red;\n}    \n   \n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9udGgtdmlldy9tb250aC12aWV3LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtFQUNFO0lBQ0UsYUFBYTtJQUNiLHNCQUFzQjtBQUMxQjtFQUNFO0lBQ0UsK0JBQStCO0FBQ25DO0VBQ0E7SUFDSSxrQkFBa0I7SUFDbEIseUJBQXlCO0lBQ3pCLFVBQVU7QUFDZDtFQUNBO0lBQ0ksV0FBVztJQUNYLFdBQVc7QUFDZjtFQUNBO0lBQ0ksWUFBWTtJQUNaLFlBQVk7SUFDWixhQUFhO0lBQ2Isc0JBQXNCO0FBQzFCO0VBQ0E7SUFDSSxZQUFZO0lBQ1osV0FBVztJQUNYLGtCQUFrQjtBQUN0QjtFQUNBO0lBQ0ksY0FBYztJQUNkLGtCQUFrQjtJQUNsQixZQUFZOztBQUVoQjtFQUNBO0lBQ0ksV0FBVztJQUNYLFdBQVc7SUFDWCxpQkFBaUI7QUFDckI7RUFDQTs7UUFFUSxVQUFVO1FBQ1YsV0FBVztRQUNYLFlBQVk7UUFDWixzQkFBc0I7UUFDdEIsU0FBUztRQUNULGVBQWU7O0FBRXZCO0VBQ0E7SUFDSSxvQ0FBb0M7QUFDeEM7RUFDQTtJQUNJO0FBQ0o7RUFDQTtJQUNJLGtCQUFrQjtJQUNsQixZQUFZO0FBQ2hCO0VBQ0E7SUFDSSxzQkFBc0I7SUFDdEIsa0JBQWtCO0FBQ3RCO0VBQ0E7SUFDSSxZQUFZO0lBQ1osV0FBVzs7QUFFZjtFQUNBO0lBQ0ksV0FBVztBQUNmO0VBQ0E7SUFDSSwrQkFBK0I7QUFDbkM7RUFDQTtJQUNJLGtCQUFrQjtJQUNsQixXQUFXO0FBQ2Y7RUFDQTtJQUNJLGlCQUFpQjtBQUNyQjtFQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxXQUFXOztBQUVmO0VBRUE7SUFDSSxXQUFXO0FBQ2Y7RUFDQTtJQUNJLFdBQVc7SUFDWCxjQUFjO0FBQ2xCO0VBQ0E7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLFVBQVU7SUFDVixZQUFZOztFQUVkO0VBRUE7SUFDRSxZQUFZO0lBQ1osYUFBYTtJQUNiLGNBQWM7RUFDaEI7RUFHRjtJQUNJLHVCQUF1QjtJQUN2QixlQUFlO0FBQ25CO0VBR0E7SUFDSSx3QkFBd0I7SUFDeEIsV0FBVztJQUNYLHVCQUF1QjtBQUMzQjtFQUNBO0lBQ0ksd0JBQXdCO0lBQ3hCLFdBQVc7SUFDWCx1QkFBdUI7QUFDM0I7RUFDQTtJQUNJLHdCQUF3QjtJQUN4QixXQUFXO0lBQ1gsdUJBQXVCO0FBQzNCO0VBQ0E7SUFDSSx3QkFBd0I7SUFDeEIsV0FBVztJQUNYLHVCQUF1QjtBQUMzQjtFQUNBO0lBQ0ksd0JBQXdCO0lBQ3hCLFdBQVc7SUFDWCx1QkFBdUI7QUFDM0I7RUFDQTtJQUNJLHdCQUF3QjtJQUN4QixXQUFXO0lBQ1gsdUJBQXVCO0FBQzNCO0VBQ0E7SUFDSSxVQUFVO0lBQ1YsZUFBZTtBQUNuQjtFQUNBO0lBQ0ksU0FBUztBQUNiIiwiZmlsZSI6InNyYy9hcHAvbW9udGgtdmlldy9tb250aC12aWV3LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgYm9keXtcbiAgICBmb250LXNpemU6OHB0O1xuICAgIGZvbnQtZmFtaWx5OnNhbnMtc2VyaWY7XG59XG4gIGJ1dHRvbiB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYWNjZW50KTtcbn1cbi50aXRsZSB7XG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xuICAgIGZvbnQtc2l6ZToyMDAlICFpbXBvcnRhbnQ7XG4gICAgY29sb3I6Ymx1ZTtcbn1cbnRhYmxlLnNtYWxsIHtcbiAgICBib3JkZXI6bm9uZTtcbiAgICBoZWlnaHQ6MzBweDtcbn1cbnRkIHtcbiAgICBib3JkZXI6c29saWQ7XG4gICAgd2lkdGg6IDIwMHB4O1xuICAgIGhlaWdodDogMTAwcHg7XG4gICAgZm9udC1mYW1pbHk6c2Fucy1zZXJpZjtcbn1cbnRkLnNtYWxsIHtcbiAgICBoZWlnaHQ6MjAwcHg7XG4gICAgYm9yZGVyOm5vbmU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxudGQubGFyZ2Uge1xuICAgIGZvbnQtc2l6ZToyMDAlO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBib3JkZXI6IG5vbmU7XG5cbn1cbnRkLnRpbnkge1xuICAgIGhlaWdodDoyMHB4O1xuICAgIGJvcmRlcjpub25lO1xuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xufVxuYnV0dG9uLnRpbnl7XG5cbiAgICAgICAgd2lkdGg6IDJweDtcbiAgICAgICAgaGVpZ2h0OiAycHg7XG4gICAgICAgIHBhZGRpbmc6IDBweDtcbiAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgICAgYm9yZGVyOiAwO1xuICAgICAgICBiYWNrZ3JvdW5kOiByZWQ7XG5cbn1cbi5vdXRNb250aCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0NSwgMjMwLCAyMzApOyAgXG59XG4uaW5Nb250aCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGlzYWJsZSlcbn1cbiNoZWFkZXIge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBwYWRkaW5nOjQwcHg7XG59XG4uaGVhZENsYXNzIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOndoaXRlO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbiNsZWdlbmQge1xuICAgIGhlaWdodDogODBweDtcbiAgICB3aWR0aDoxMDBweDtcbiAgXG59XG4uZG93IHtcbiAgICBjb2xvcjpibGFjaztcbn1cbi5hY2NlbnQge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWFjY2VudCk7XG59XG4udGlueVRhYmxlIHtcbiAgICB0YWJsZS1sYXlvdXQ6Zml4ZWQ7XG4gICAgd2lkdGg6MjAwcHg7XG59XG4udGlueVRhYmxlIHRyIHtcbiAgICBsaW5lLWhlaWdodDogMTRweDtcbn1cbi5zbWFsbFRhYmxlIHtcbiAgICB0YWJsZS1sYXlvdXQ6Zml4ZWQ7XG4gICAgd2lkdGg6MjAwcHg7XG4gICAgaGVpZ2h0OjQwcHg7O1xuICAgXG59XG5cbnRyIHtcbiAgICBjb2xvcjpibGFjaztcbn1cbmNhcHRpb24ge1xuICAgIGNvbG9yOmJsYWNrO1xuICAgIGZvbnQtc2l6ZToxMDAlO1xufVxuLmZsZXgtY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDpjZW50ZXI7XG4gICAgd2lkdGg6MTAwJTtcbiAgICBoZWlnaHQ6MTIwcHg7XG4gXG4gIH1cbiAgXG4gIC5mbGV4LWNvbnRhaW5lciA+IGRpdiB7XG4gICAgbWFyZ2luOiAxMHB4O1xuICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgZm9udC1zaXplOjEwMCU7XG4gIH1cblxuXG4uTW9ybmluZ0EtSU9SVDpob3ZlciwgLk1vcm5pbmdCOmhvdmVyLCAuRXZlbmluZ0E6aG92ZXIsIC5FdmVuaW5nQjpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjp5ZWxsb3c7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG5cbi5vbmUsIC5Nb3JuaW5nQS1JT1JUIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiNmY2M5YWU7XG4gICAgaGVpZ2h0OjEwcHg7XG4gICAgYm9yZGVyOiAxcHggb3V0c2V0ICNjY2M7XG59IFxuLnR3bywgLk1vcm5pbmdCIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiNmY2RmYmM7XG4gICAgaGVpZ2h0OjEwcHg7XG4gICAgYm9yZGVyOiAxcHggb3V0c2V0ICNjY2M7XG59ICAgXG4udGhyZWUsIC5FdmVuaW5nQSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjojZmNlYjhlO1xuICAgIGhlaWdodDoxMHB4O1xuICAgIGJvcmRlcjogMXB4IG91dHNldCAjY2NjO1xufSAgXG4uZm91ciwgLkV2ZW5pbmdCIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiNjY2NjYzU7XG4gICAgaGVpZ2h0OjEwcHg7XG4gICAgYm9yZGVyOiAxcHggb3V0c2V0ICNjY2M7XG59ICBcbi5maXZlLC5GbG9hdDEge1xuICAgIGJhY2tncm91bmQtY29sb3I6I2NjZTliNjtcbiAgICBoZWlnaHQ6MTBweDtcbiAgICBib3JkZXI6IDFweCBvdXRzZXQgI2NjYztcbn0gIFxuLnNpeCwgLkZsb2F0MiAge1xuICAgIGJhY2tncm91bmQtY29sb3I6I2E0YzJiOTtcbiAgICBoZWlnaHQ6MTBweDtcbiAgICBib3JkZXI6IDFweCBvdXRzZXQgI2NjYztcbn0gICAgXG4udGhlVXNlciB7XG4gICAgY29sb3I6IHJlZDtcbiAgICBmb250LXNpemU6IDIwMCU7XG59ICAgXG4ubFVzZXIge1xuICAgIGNvbG9yOnJlZDtcbn0gICAgXG4gICAiXX0= */"

/***/ }),

/***/ "./src/app/month-view/month-view.component.html":
/*!******************************************************!*\
  !*** ./src/app/month-view/month-view.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n<div class=\"wholePage\">\n\n  <div class=\"headClass\">\n    <table class=\"tinyTable\">\n      <tr>\n        <td   class=\"small\">\n          <button (click) = 'nextMonth(-1)'  mat-raised-button class=\"accent\"  >Previous Month </button>\n        </td>\n       <td  class='large'> {{ monthName }} </td>\n        <td   class=\"small\">\n            <button (click) = 'nextMonth(1)'  mat-raised-button class=\"accent\"  >Next Month </button>\n          </td>\n          <td class=\"small\">\n              <table class=\"tinyTable\">\n                <tr *ngFor=\"let item of physicsDuties | keyvalue\">\n                <td  [class] = \"item.value.cN\" > {{item.value.name}} </td>\n                </tr>\n              </table>\n            </td>  \n      </tr>\n    </table>\n \n</div>\n  <p *ngIf = \"loggedInUserKey\" class=\"heading\" >  To Assume a Duty, click on physicist's name. </p>\n<div id=\"header\" >\n    <table>\n      <tr class=\"dow\"> <th > Monday</th> <th> Tuesday</th><th> Wednesday</th><th> Thursday</th> <th> Friday</th>\n      </tr>\n      <tr *ngFor = \" let week of daysS\">\n        <td  *ngFor=\" let dayEl of week \"  [class] = \"dayEl.isInCurrMonth\">\n          <table class=\"tinyTable\" style=\"width:100%;\">\n            <caption> {{ dayEl.dayNumber  ? dayEl.dayNumber : ''}} </caption>   \n            <tr *ngFor=\"let item of physicsDutiesClass \"  [class] = \"item.dutyName\" \n             (click)=\"takeAduty(item.dutyId, dayEl.dateString)\" >  \n            <div *ngIf = 'physicsMonthlyDuties  && physicsMonthlyDuties[dayEl.dateString] && physicsMonthlyDuties[dayEl.dateString][item.dutyId] ' \n              [id]=\"physicsMonthlyDuties[dayEl.dateString][item.dutyId]['idx']\" \n              [class] = \"isLoggedInUser( physicsMonthlyDuties[dayEl.dateString][item.dutyId]['UserKey'])\"\n               >   {{  physicsMonthlyDuties[dayEl.dateString][item.dutyId]['lNN'] }}\n   \n            </div>\n            <div></div>\n            </tr> \n          </table>\n        </td>\n      </tr>   \n    </table>\n  </div>\n</div>    \n<div style=\"  position: fixed; bottom: 0; right: 0;\" >\n    <app-help [helpArray] = \"helpArray\"   ></app-help>\n</div>\n<!-- The Modal -->\n<div id=\"myModal\" class=\"modal\">\n  <div class=\"modal-content\">\n    <button mat-raised-button (click) = \"pagePhysicist()\"  > Page Physicist </button>\n    <span class=\"close\" (click) = \"closeModal()\">&times;</span>\n    <p>{{ phrase }}</p>\n    <button (click) = \"confirmDuty()\" >Take Duty</button>\n  </div>\n\n</div>"

/***/ }),

/***/ "./src/app/month-view/month-view.component.ts":
/*!****************************************************!*\
  !*** ./src/app/month-view/month-view.component.ts ***!
  \****************************************************/
/*! exports provided: MonthViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MonthViewComponent", function() { return MonthViewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _gen_edit_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../gen-edit.service */ "./src/app/gen-edit.service.ts");
/* harmony import */ var _log_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../log.service */ "./src/app/log.service.ts");







var MonthViewComponent = /** @class */ (function () {
    // used to calculate a dayNumber to use as key
    function MonthViewComponent(datePipe, http, activatedRoute, genEditSvce, logSvcs) {
        this.datePipe = datePipe;
        this.http = http;
        this.activatedRoute = activatedRoute;
        this.genEditSvce = genEditSvce;
        this.logSvcs = logSvcs;
        this.masterArray = ['This new Month View page is part of upgrade of Whiteboard.',
            'To see details, or edit a TimeAway, click on that TimeAway. ',
            'If you have difficulties or questions concerning the page, please email to flonberg@partners.org.'
        ];
        this.noticeColName = 'monthView';
        this.noticeModalID = 'monthViewModalID';
    }
    MonthViewComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute // point to the route clicked on
            .queryParams // look at the queryParams
            .subscribe(function (queryParams) {
            _this.qParams = queryParams;
            _this.genEditSvce.setPlatform(); // switch between BB and 242 databases. 
            _this.genEditSvce.checkIfNoticeNeeded('monthView');
        });
        this.nextMonth(0); // draw the calendar for current month
        if (this.loggedInUserKey) {
            this.helpArray = ['To take a duty, click on the on the name of physicists who has that duty'];
        }
        else {
            this.helpArray = ['Click on a name to page. '];
        }
        this.monthNumber = 0; // number for going forward or back. 
        this.physicsDutiesClass = [
            { 'dutyId': 20, 'dutyName': 'MorningA-IORT' },
            { 'dutyId': 10, 'dutyName': 'MorningB' },
            { 'dutyId': 21, 'dutyName': 'EveningA' },
            { 'dutyId': 22, 'dutyName': 'EveningB' },
            { 'dutyId': 25, 'dutyName': 'Float1' },
            { 'dutyId': 26, 'dutyName': 'Float2' },
        ];
        this.logSvcs.setURL('http://blackboard-dev.partners.org/dev/FJL/vacMan/writeLog.php');
        this.logSvcs.logMessage('tst');
        this.colors = ['one', 'two', 'three', 'four', 'five', 'six'];
    };
    MonthViewComponent.prototype.isLoggedInUser = function (n) {
        if (this.loggedInUserKey == n)
            return "theUser";
        else
            return "";
    };
    MonthViewComponent.prototype.pagePhysicist = function () {
        console.log("pagePhysicist " + this.toPageID);
        window.open('http://ppd.partners.org/scripts/phsweb.mwl?APP=PDPERS&ACTION=PAGE&ID='
            + this.toPageID + '  , _blank');
        document.getElementById('myModal').style.display = "none";
        return;
    };
    MonthViewComponent.prototype.takeAduty = function (nDutyId, dDayNum) {
        //  const v = this.isUserDutyTaker();
        if (this.isUserDutyTaker() !== true) {
            window.open('http://ppd.partners.org/scripts/phsweb.mwl?APP=PDPERS&ACTION=PAGE&ID='
                + this.physicsMonthlyDuties[dDayNum][nDutyId]['id'] + '  , _blank');
            return;
        }
        var physicsDutiesSelected = this.physicsDutiesClass.find(function (t) { return t.dutyId == nDutyId; });
        this.phrase = "You are assuming --- " + physicsDutiesSelected['dutyName'] + " on " + dDayNum; // phrase for the Modal
        this.idxForEdit = this.physicsMonthlyDuties[dDayNum][nDutyId]['idx']; // used to update the dB
        this.toPageID = this.physicsMonthlyDuties[dDayNum][nDutyId]['id'];
        document.getElementById('myModal').style.display = "block"; // show the modal 
    };
    MonthViewComponent.prototype.isUserDutyTaker = function () {
        if (!this.loggedInUserKey) {
            return false;
        }
        return true;
        /*
        var r = false;
        console.log('loggedInUserKey is ' + this.loggedInUserKey);
        Object.keys(this.physicsMonthlyDuties['users']).forEach(key => {
          if (+key === +this.loggedInUserKey) {
            return true;
            }
          });
        return r;
        */
    };
    MonthViewComponent.prototype.confirmDuty = function () {
        var editParams = {
            'action': 'editAndLog',
            'tableName': 'PhysicsMonthlyDuty',
            'editColNames': ['phys2'],
            'editColVals': [this.loggedInUserKey],
            'whereColName': 'idx',
            'whereColVal': this.idxForEdit,
        };
        document.getElementById(this.idxForEdit).innerText = this.loggedInUserLastName; // put swapperLastName in box
        this.genEditSvce.genPOST(editParams).subscribe(function (response) {
            console.log("emailService");
        }); // do the swap in the dB
        //    this.genEditSvce.update(editParams);                            // do the swap in the dB
        console.log(" 131   hhhhhhhh  genPOST ");
        document.getElementById('myModal').style.display = "none"; // clse the Modal
    };
    MonthViewComponent.prototype.closeModal = function () {
        document.getElementById('myModal').style.display = "none";
    };
    MonthViewComponent.prototype.nextMonth = function (nn) {
        var _this = this;
        this.daysS = Array(Array()); // make array to hold daysS structures
        var tmpDate = new Date(); // this is the date which will be incremented
        this.date = new Date(); //  this will be set to today in production
        //    this.date = new Date('2019-01-28');                            //  this will be set to today in production
        this.baseDate = new Date('2010-01-01');
        this.monthNumber += nn; // nn will be either +1 of -1 to go forward or bacf
        if (nn != 0) // if date has been changed by button  
            this.date = new Date(this.date.setMonth(this.date.getMonth() + this.monthNumber)); // make the new date
        this.monthName = this.datePipe.transform(this.date, 'MMMM-yyyy'); // used for the caption on the calendar 
        var firstDayOfShownMonth = new Date(this.date.getFullYear(), this.date.getMonth(), 1);
        var firstDateOnCalendar = new Date(this.date.getFullYear(), this.date.getMonth(), 1);
        var monthShowNumber = this.date.getMonth(); // use to grey out days NOT in monthShown
        var dowFD = firstDayOfShownMonth.getDay(); // det dayOfWeek e.g. 5 for Friday, 0 = Sunday, 1=Monday ...of 
        var lastDayPrevMonth = new Date(this.date.getFullYear(), this.date.getMonth(), 0);
        var lastDayNum = +this.datePipe.transform(lastDayPrevMonth, 'd'); //  e.g. for March   ->  31
        //////////  use firstDayOnCal as dateSince to make array of physicsDuties     \\\\\\\\\\\\\\\\\
        var firstDayOnCal = lastDayNum - (dowFD - 2); // get dayNum of first Monday on Cal       //  E.g. April 1 is Wed. to firstDayShown is March 29, so firstDanOnCal = 29
        if (dowFD == 1)
            firstDayOnCal = 1;
        /************  make the first day shown on the calendar  **********************/
        if (dowFD !== 6 && dowFD !== 0)
            firstDateOnCalendar.setDate(firstDateOnCalendar.getDate() - (dowFD - 1)); // first of Month is a WeekDay so need to step back to Monday
        if (dowFD === 6)
            firstDateOnCalendar.setDate(firstDateOnCalendar.getDate() + 2); // first of Month is Saturday so need to step forward 2 days to Monday
        if (dowFD === 0)
            firstDateOnCalendar.setDate(firstDateOnCalendar.getDate() + 1); // first of Month is Sunday so need to step forward 1 day1 to Monday
        this.startDateForGettingDataString = this.datePipe.transform(firstDateOnCalendar, 'yyyy-MM-dd');
        console.log('startDataDate ' + this.startDateForGettingDataString);
        /////////////////            make days of first week                                        \\\\\\\\\\\\\\\\\\\
        var startDateForGettingData = new Date(); // define a date to set in the below loop
        if (dowFD > 1 && dowFD < 6) { // if the firstDayOfMonth is NOT Sat or Sun  
            for (var i = 0; i < 5; i++) { // make the 5 days of the first week;
                if (!this.daysS[0]) //  if array row has not been defined
                    this.daysS[0] = Array(); // define the array for the Week
                this.daysS[0][i] = {}; // define an instance of the daysS interface
                this.daysS[0][i].dayNumber = firstDayOnCal; // set dayNumber element of interface
                /************      first Day of first week **********************/
                if (i == 0) {
                    this.daysS[0][i].date = new Date(lastDayPrevMonth.getFullYear(), lastDayPrevMonth.getMonth(), firstDayOnCal); // set first date on Calendar in array
                    tmpDate = new Date(lastDayPrevMonth.getFullYear(), lastDayPrevMonth.getMonth(), firstDayOnCal); // set first date on Calendar in array
                    if (dowFD == 1)
                        this.daysS[0][i].date = firstDateOnCalendar;
                    startDateForGettingData = this.daysS[0][i].date;
                    if (dowFD == 1 || dowFD == 6) {
                        startDateForGettingData = firstDayOfShownMonth;
                    }
                    this.daysS[0][i].isInCurrMonth = tmpDate.getMonth() == monthShowNumber ? "inMonth" : "outMonth";
                }
                /***************    rest of days in first week *******************/
                firstDayOnCal++;
                if (i > 0) { // go to next day
                    startDateForGettingData = this.daysS[0][i].date;
                    tmpDate = new Date(this.daysS[0][i - 1].date.getFullYear(), this.daysS[0][i - 1].date.getMonth(), this.daysS[0][i - 1].date.getDate()); // make a date to increment                                                                                           // from the previous entry in the loop
                    tmpDate.setDate(tmpDate.getDate() + 1);
                    // increment the date
                    this.daysS[0][i].date = new Date(tmpDate.getFullYear(), tmpDate.getMonth(), tmpDate.getDate()); // put that date in the dateBox of the MonthStructure
                    this.daysS[0][i].isInCurrMonth = tmpDate.getMonth() == monthShowNumber ? "inMonth" : "outMonth";
                }
                if (firstDayOnCal == lastDayNum + 1) // if it is greater than lastDayOfMonth
                    firstDayOnCal = 1; // go to 1, for the first day of monthShown 
                this.daysS[0][i].dateString = this.datePipe.transform(this.daysS[0][i].date, 'yyyy-MM-dd');
            }
        }
        if (dowFD == 1 || dowFD == 6) {
            firstDateOnCalendar.setDate(firstDateOnCalendar.getDate() - 1);
            tmpDate = firstDateOnCalendar;
            startDateForGettingData = firstDayOfShownMonth;
        }
        if (dowFD == 0)
            tmpDate = firstDateOnCalendar;
        for (var i = 1; i < 6; i++) { // max of 4 more weeks in calendar
            for (var j = 0; j < 5; j++) { // the days of each week
                tmpDate.setDate(tmpDate.getDate() + 1); // increment the date
                var dayNum = tmpDate.getDay(); // get dayNum of week, this will be Saturday 
                if (dayNum == 6) // check if it is Saturday, 
                    tmpDate.setDate(tmpDate.getDate() + 2); // increment 2 days to get to Monday. 
                if (!this.daysS[i]) //  if array row has not been defined
                    this.daysS[i] = Array();
                this.daysS[i][j] = {}; // define an instance of the daysS interface
                this.daysS[i][j].date = new Date(tmpDate.getFullYear(), tmpDate.getMonth(), tmpDate.getDate()); // put date in daysS dataStructure.
                this.daysS[i][j].dateString = this.datePipe.transform(this.daysS[i][j].date, 'yyyy-MM-dd');
                this.daysS[i][j].dayNumber = tmpDate.getDate();
                this.daysS[i][j].isInCurrMonth = tmpDate.getMonth() == monthShowNumber ? "inMonth" : "outMonth";
            }
        }
        /*************      get the data  ************************/
        // this.genEditSvce.getPMDs(this.qParams['userid']).subscribe(
        this.genEditSvce.genGet('REST_GET.php?action=getPMDs&userid=' + this.qParams['userid']).subscribe(function (res) {
            _this.setPhysicsMonthlyDuties(res);
        }, function (err) {
            console.log("error 223");
            console.log(err);
        });
    }; ////////  end of the routine to build the monthDisplay 
    MonthViewComponent.prototype.setPhysicsMonthlyDuties = function (val) {
        this.physicsMonthlyDuties = val['data'];
        console.log("241 %o", val);
        if (val['loggedInUserKey']) { // the data to the monthly schedule
            this.loggedInUserKey = val['loggedInUserKey']; // the userkey to be used for Take-A-Duty      
            this.helpArray = ['To take a duty, click on the on the name of physicists who has that duty'];
        }
        if (val['loggedInUserLastName']) // the userkey to be used for Take-A-Duty
            this.loggedInUserLastName = val['loggedInUserLastName'];
        this.physicsDuties = Array();
        if (val['PhysicsDuties'])
            this.physicsDuties = val['PhysicsDuties']; // the userkey to be used for Take-A-Duty
        console.log('226 loggedInUserkey is' + this.loggedInUserKey + 'lastName' + this.loggedInUserLastName);
    };
    MonthViewComponent.prototype.daysSince = function (d) {
        var diff = Math.abs(this.baseDate.getTime() - d.getTime());
        return Math.ceil(diff / (1000 * 3600 * 24));
    };
    MonthViewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-month-view',
            template: __webpack_require__(/*! ./month-view.component.html */ "./src/app/month-view/month-view.component.html"),
            styles: [__webpack_require__(/*! ./month-view.component.css */ "./src/app/month-view/month-view.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common__WEBPACK_IMPORTED_MODULE_3__["DatePipe"], _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], _gen_edit_service__WEBPACK_IMPORTED_MODULE_5__["GenEditService"],
            _log_service__WEBPACK_IMPORTED_MODULE_6__["LogService"]])
    ], MonthViewComponent);
    return MonthViewComponent;
}());



/***/ }),

/***/ "./src/app/my-duties/my-duties.component.css":
/*!***************************************************!*\
  !*** ./src/app/my-duties/my-duties.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "table {\n    table-layout:fixed;\n    width:400px;\n}\ncaption {\n    font-weight: bold;\n}\ntr:nth-child(even) {\n    background-color: #d6d6d6;\n  }\n.center {\n    margin: auto;\n    width: 60%;\n  \n    padding: 10px;\n  }  \n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbXktZHV0aWVzL215LWR1dGllcy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksa0JBQWtCO0lBQ2xCLFdBQVc7QUFDZjtBQUNBO0lBQ0ksaUJBQWlCO0FBQ3JCO0FBRUE7SUFDSSx5QkFBeUI7RUFDM0I7QUFDQTtJQUNFLFlBQVk7SUFDWixVQUFVOztJQUVWLGFBQWE7RUFDZiIsImZpbGUiOiJzcmMvYXBwL215LWR1dGllcy9teS1kdXRpZXMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbInRhYmxlIHtcbiAgICB0YWJsZS1sYXlvdXQ6Zml4ZWQ7XG4gICAgd2lkdGg6NDAwcHg7XG59XG5jYXB0aW9uIHtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbn1cblxudHI6bnRoLWNoaWxkKGV2ZW4pIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDZkNmQ2O1xuICB9XG4gIC5jZW50ZXIge1xuICAgIG1hcmdpbjogYXV0bztcbiAgICB3aWR0aDogNjAlO1xuICBcbiAgICBwYWRkaW5nOiAxMHB4O1xuICB9ICAiXX0= */"

/***/ }),

/***/ "./src/app/my-duties/my-duties.component.html":
/*!****************************************************!*\
  !*** ./src/app/my-duties/my-duties.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n  <div class='center'>\n    <table *ngIf=\"myDuties\">\n      <caption> Duties </caption>\n      <tr *ngFor=\"let item of myDuties | keyvalue; let ind=index;\" >\n        <td> {{ item.value.date }} </td>\n        <td> {{ item.value.dName }} </td>\n        <td> {{ item.value.timeSpan }} </td>\n      </tr>\n    </table>\n  </div>"

/***/ }),

/***/ "./src/app/my-duties/my-duties.component.ts":
/*!**************************************************!*\
  !*** ./src/app/my-duties/my-duties.component.ts ***!
  \**************************************************/
/*! exports provided: MyDutiesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyDutiesComponent", function() { return MyDutiesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _gen_edit_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../gen-edit.service */ "./src/app/gen-edit.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var MyDutiesComponent = /** @class */ (function () {
    function MyDutiesComponent(activatedRoute, genEditSvce) {
        this.activatedRoute = activatedRoute;
        this.genEditSvce = genEditSvce;
    }
    MyDutiesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute // point to the route clicked on
            .queryParams // look at the queryParams
            .subscribe(function (queryParams) {
            _this.qParams = queryParams;
            _this.genEditSvce.setPlatform(); // switch between BB and 242 databases. 
        });
        console.log(" myDuties %o ", this.qParams);
        var s = 'REST_GET.php?action=getMyDuties&userid=' + this.qParams['userid'];
        this.genEditSvce.genGet(s).subscribe(function (res) {
            _this.setMyDuties(res);
        }, function (err) {
            console.log("error 223");
            console.log(err);
        });
        /********  test for multGET
      const mP = <dB_multGETparams>  {
        action:'multGet',
        tableName:'PhysicsDuty',
        getColNames:['Idx','name','timeSpan','nomOrder'],
        whereColNames: ['Idx', 'name'],
        whereColVals:['3','ProstateImplants']
      }
      this.genEditSvce.multGet(mP).subscribe(
        (res)=> {
          this.multParams = res;
          console.log("47  multGer %o", res);
        }
      );
      */
    };
    MyDutiesComponent.prototype.setMyDuties = function (p) {
        this.myDuties = p;
        console.log("myDuties are %o", this.myDuties);
    };
    MyDutiesComponent.prototype.isOdd = function (n) {
        if (n % 2 == 0)
            return 'even';
        else
            return 'odd';
    };
    MyDutiesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-my-duties',
            template: __webpack_require__(/*! ./my-duties.component.html */ "./src/app/my-duties/my-duties.component.html"),
            styles: [__webpack_require__(/*! ./my-duties.component.css */ "./src/app/my-duties/my-duties.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _gen_edit_service__WEBPACK_IMPORTED_MODULE_2__["GenEditService"]])
    ], MyDutiesComponent);
    return MyDutiesComponent;
}());



/***/ }),

/***/ "./src/app/nav-bar-vm/nav-bar-vm.component.css":
/*!*****************************************************!*\
  !*** ./src/app/nav-bar-vm/nav-bar-vm.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* Style the tab */\n.tab {\n    overflow: hidden;\n  }\n/* Style the buttons inside the tab */\n.button {\n    background-color: rgb(230, 187, 187);\n    float: left;\n    border: none;\n    outline: none;\n    cursor: pointer;\n    padding: 8px 10px;\n    transition: 0.3s;\n    font-size: 14px;\n    font-style:underline;\n    border:solid;\n    border-color:gray;\n    border-top-left-radius: 15px;\n    border-top-right-radius: 15px;\n  }\n/* Change background color of buttons on hover */\n.button:hover {\n    background-color: rgb(231, 154, 154);\n  }\n.buttonSel {\n    background-color: inherit;\n    float: left;\n    border: none;\n    outline: none;\n    cursor: pointer;\n    padding: 8px 10px;\n    transition: 0.3s;\n    font-size: 14px;\n    font-style:underline;\n    font-style:bold;\n    border:solid;\n    border-color:gray;\n    border-top-left-radius: 15px;\n    border-top-right-radius: 15px;\n  }\n/* Change background color of buttons on hover */\n.buttonSel:hover {\n    background-color: rgb(231, 154, 154);\n  }\n/* Create an active/current tablink class */\n.button.active {\n    background-color: rgb(97, 89, 89);\n    font-style:underline;\n  }\n/* Style the tab content */\n.tabcontent {\n    display: none;\n    padding: 6px 12px;\n    border: 1px solid #ccc;\n    border-top: none;\n  }\n \n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmF2LWJhci12bS9uYXYtYmFyLXZtLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsa0JBQWtCO0FBQ2xCO0lBQ0ksZ0JBQWdCO0VBQ2xCO0FBRUEscUNBQXFDO0FBQ3JDO0lBQ0Usb0NBQW9DO0lBQ3BDLFdBQVc7SUFDWCxZQUFZO0lBQ1osYUFBYTtJQUNiLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsZ0JBQWdCO0lBQ2hCLGVBQWU7SUFDZixvQkFBb0I7SUFDcEIsWUFBWTtJQUNaLGlCQUFpQjtJQUNqQiw0QkFBNEI7SUFDNUIsNkJBQTZCO0VBQy9CO0FBRUEsZ0RBQWdEO0FBQ2pEO0lBQ0csb0NBQW9DO0VBQ3RDO0FBQ0E7SUFDRSx5QkFBeUI7SUFDekIsV0FBVztJQUNYLFlBQVk7SUFDWixhQUFhO0lBQ2IsZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixnQkFBZ0I7SUFDaEIsZUFBZTtJQUNmLG9CQUFvQjtJQUNwQixlQUFlO0lBQ2YsWUFBWTtJQUNaLGlCQUFpQjtJQUNqQiw0QkFBNEI7SUFDNUIsNkJBQTZCO0VBQy9CO0FBRUEsZ0RBQWdEO0FBQ2pEO0lBQ0csb0NBQW9DO0VBQ3RDO0FBR0EsMkNBQTJDO0FBQzVDO0lBQ0csaUNBQWlDO0lBQ2pDLG9CQUFvQjtFQUN0QjtBQUVBLDBCQUEwQjtBQUMxQjtJQUNFLGFBQWE7SUFDYixpQkFBaUI7SUFDakIsc0JBQXNCO0lBQ3RCLGdCQUFnQjtFQUNsQiIsImZpbGUiOiJzcmMvYXBwL25hdi1iYXItdm0vbmF2LWJhci12bS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogU3R5bGUgdGhlIHRhYiAqL1xuLnRhYiB7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgfVxuICBcbiAgLyogU3R5bGUgdGhlIGJ1dHRvbnMgaW5zaWRlIHRoZSB0YWIgKi9cbiAgLmJ1dHRvbiB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIzMCwgMTg3LCAxODcpO1xuICAgIGZsb2F0OiBsZWZ0O1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBvdXRsaW5lOiBub25lO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBwYWRkaW5nOiA4cHggMTBweDtcbiAgICB0cmFuc2l0aW9uOiAwLjNzO1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBmb250LXN0eWxlOnVuZGVybGluZTtcbiAgICBib3JkZXI6c29saWQ7XG4gICAgYm9yZGVyLWNvbG9yOmdyYXk7XG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMTVweDtcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMTVweDtcbiAgfVxuICBcbiAgLyogQ2hhbmdlIGJhY2tncm91bmQgY29sb3Igb2YgYnV0dG9ucyBvbiBob3ZlciAqL1xuIC5idXR0b246aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMzEsIDE1NCwgMTU0KTtcbiAgfVxuICAuYnV0dG9uU2VsIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBpbmhlcml0O1xuICAgIGZsb2F0OiBsZWZ0O1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBvdXRsaW5lOiBub25lO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBwYWRkaW5nOiA4cHggMTBweDtcbiAgICB0cmFuc2l0aW9uOiAwLjNzO1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBmb250LXN0eWxlOnVuZGVybGluZTtcbiAgICBmb250LXN0eWxlOmJvbGQ7XG4gICAgYm9yZGVyOnNvbGlkO1xuICAgIGJvcmRlci1jb2xvcjpncmF5O1xuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDE1cHg7XG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDE1cHg7XG4gIH1cbiAgXG4gIC8qIENoYW5nZSBiYWNrZ3JvdW5kIGNvbG9yIG9mIGJ1dHRvbnMgb24gaG92ZXIgKi9cbiAuYnV0dG9uU2VsOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjMxLCAxNTQsIDE1NCk7XG4gIH1cbiAgXG5cbiAgLyogQ3JlYXRlIGFuIGFjdGl2ZS9jdXJyZW50IHRhYmxpbmsgY2xhc3MgKi9cbiAuYnV0dG9uLmFjdGl2ZSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDk3LCA4OSwgODkpO1xuICAgIGZvbnQtc3R5bGU6dW5kZXJsaW5lO1xuICB9XG4gIFxuICAvKiBTdHlsZSB0aGUgdGFiIGNvbnRlbnQgKi9cbiAgLnRhYmNvbnRlbnQge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgcGFkZGluZzogNnB4IDEycHg7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcbiAgICBib3JkZXItdG9wOiBub25lO1xuICB9XG4gIl19 */"

/***/ }),

/***/ "./src/app/nav-bar-vm/nav-bar-vm.component.html":
/*!******************************************************!*\
  !*** ./src/app/nav-bar-vm/nav-bar-vm.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class = \"tab\">\n  <nav  >\n    <button \n       *ngFor=\"let routeLink of routeLinks; let i = index;\"\n       [ngClass]=\" index == i ? 'button' : 'buttonSel' \"\n       [routerLink]=\"routeLink.link\"\n       routerLinkActive=\"tab-link-active\"\n       queryParamsHandling=\"merge\"\n       #rla=\"routerLinkActive\"\n       (click)=\"setIndex(i)\"\n        [routerLinkActiveOptions]=\"{exact: false}\"\n    >\n        {{routeLink.label }} \n    </button>\n  </nav>\n</div>\n\n\n<div > \n  <router-outlet ></router-outlet>\n</div>"

/***/ }),

/***/ "./src/app/nav-bar-vm/nav-bar-vm.component.ts":
/*!****************************************************!*\
  !*** ./src/app/nav-bar-vm/nav-bar-vm.component.ts ***!
  \****************************************************/
/*! exports provided: NavBarVMComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavBarVMComponent", function() { return NavBarVMComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _time_line_time_line_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../time-line/time-line.component */ "./src/app/time-line/time-line.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");



var NavBarVMComponent = /** @class */ (function () {
    function NavBarVMComponent(tlc) {
        this.tlc = tlc;
        this.userid = tlc.userid;
        this.button = "button ";
        this.buttonSel = "buttonSel";
        this.index = 0;
        this.routeLinks = [
            {
                label: 'Vacation Manager',
                link: './VacMan',
                index: 0,
            }, {
                label: 'Monthview',
                link: './MonthView',
                index: 1,
            }, {
                label: 'My-Duties',
                link: './MyDuties',
                index: 2,
            }, {
                label: 'Week View',
                link: './WeekView',
                index: 3,
            }
        ];
    }
    NavBarVMComponent.prototype.setIndex = function (n) {
        this.index = n;
    };
    NavBarVMComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-nav-bar-vm',
            template: __webpack_require__(/*! ./nav-bar-vm.component.html */ "./src/app/nav-bar-vm/nav-bar-vm.component.html"),
            styles: [__webpack_require__(/*! ./nav-bar-vm.component.css */ "./src/app/nav-bar-vm/nav-bar-vm.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_time_line_time_line_component__WEBPACK_IMPORTED_MODULE_1__["TimeLineComponent"]])
    ], NavBarVMComponent);
    return NavBarVMComponent;
}());



/***/ }),

/***/ "./src/app/notice/notice.component.css":
/*!*********************************************!*\
  !*** ./src/app/notice/notice.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".modal {\n    display: none; /* Hidden by default */\n    position: fixed; /* Stay in place */\n    z-index: 1; /* Sit on top */\n    left: 0;\n    top: 0;\n    width: 100%; /* Full width */\n    height: 100%; /* Full height */\n    overflow: auto; /* Enable scroll if needed */\n    background-color: rgb(0,0,0); /* Fallback color */\n    background-color: rgba(0,0,0,0.4); /* Black w/ opacity */\n  }\n  \n  /* Modal Content/Box */\n  \n  .modal-content {\n    background-color: #fefefe;\n    margin: 15% auto; /* 15% from the top and centered */\n    padding: 20px;\n    border: 1px solid #888;\n    width: 40%; /* Could be more or less, depending on screen size */\n  }\n  \n  /* The Close Button */\n  \n  .close {\n    color: #aaa;\n    float: right;\n    font-size: 28px;\n    font-weight: bold;\n  }\n  \n  .close:hover,\n  .close:focus {\n    color: black;\n    text-decoration: none;\n    cursor: pointer;\n  }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbm90aWNlL25vdGljZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksYUFBYSxFQUFFLHNCQUFzQjtJQUNyQyxlQUFlLEVBQUUsa0JBQWtCO0lBQ25DLFVBQVUsRUFBRSxlQUFlO0lBQzNCLE9BQU87SUFDUCxNQUFNO0lBQ04sV0FBVyxFQUFFLGVBQWU7SUFDNUIsWUFBWSxFQUFFLGdCQUFnQjtJQUM5QixjQUFjLEVBQUUsNEJBQTRCO0lBQzVDLDRCQUE0QixFQUFFLG1CQUFtQjtJQUNqRCxpQ0FBaUMsRUFBRSxxQkFBcUI7RUFDMUQ7O0VBRUEsc0JBQXNCOztFQUN0QjtJQUNFLHlCQUF5QjtJQUN6QixnQkFBZ0IsRUFBRSxrQ0FBa0M7SUFDcEQsYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixVQUFVLEVBQUUsb0RBQW9EO0VBQ2xFOztFQUVBLHFCQUFxQjs7RUFDckI7SUFDRSxXQUFXO0lBQ1gsWUFBWTtJQUNaLGVBQWU7SUFDZixpQkFBaUI7RUFDbkI7O0VBRUE7O0lBRUUsWUFBWTtJQUNaLHFCQUFxQjtJQUNyQixlQUFlO0VBQ2pCIiwiZmlsZSI6InNyYy9hcHAvbm90aWNlL25vdGljZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1vZGFsIHtcbiAgICBkaXNwbGF5OiBub25lOyAvKiBIaWRkZW4gYnkgZGVmYXVsdCAqL1xuICAgIHBvc2l0aW9uOiBmaXhlZDsgLyogU3RheSBpbiBwbGFjZSAqL1xuICAgIHotaW5kZXg6IDE7IC8qIFNpdCBvbiB0b3AgKi9cbiAgICBsZWZ0OiAwO1xuICAgIHRvcDogMDtcbiAgICB3aWR0aDogMTAwJTsgLyogRnVsbCB3aWR0aCAqL1xuICAgIGhlaWdodDogMTAwJTsgLyogRnVsbCBoZWlnaHQgKi9cbiAgICBvdmVyZmxvdzogYXV0bzsgLyogRW5hYmxlIHNjcm9sbCBpZiBuZWVkZWQgKi9cbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCwwLDApOyAvKiBGYWxsYmFjayBjb2xvciAqL1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwwLDAsMC40KTsgLyogQmxhY2sgdy8gb3BhY2l0eSAqL1xuICB9XG4gIFxuICAvKiBNb2RhbCBDb250ZW50L0JveCAqL1xuICAubW9kYWwtY29udGVudCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZlZmVmZTtcbiAgICBtYXJnaW46IDE1JSBhdXRvOyAvKiAxNSUgZnJvbSB0aGUgdG9wIGFuZCBjZW50ZXJlZCAqL1xuICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgYm9yZGVyOiAxcHggc29saWQgIzg4ODtcbiAgICB3aWR0aDogNDAlOyAvKiBDb3VsZCBiZSBtb3JlIG9yIGxlc3MsIGRlcGVuZGluZyBvbiBzY3JlZW4gc2l6ZSAqL1xuICB9XG4gIFxuICAvKiBUaGUgQ2xvc2UgQnV0dG9uICovXG4gIC5jbG9zZSB7XG4gICAgY29sb3I6ICNhYWE7XG4gICAgZmxvYXQ6IHJpZ2h0O1xuICAgIGZvbnQtc2l6ZTogMjhweDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgfVxuICBcbiAgLmNsb3NlOmhvdmVyLFxuICAuY2xvc2U6Zm9jdXMge1xuICAgIGNvbG9yOiBibGFjaztcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICB9XG4iXX0= */"

/***/ }),

/***/ "./src/app/notice/notice.component.html":
/*!**********************************************!*\
  !*** ./src/app/notice/notice.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div id=\"noticeModalComponent\" class=\"modal\">\n    <div class=\"modal-content\">\n        <span class=\"close\" (click) = \"closeModal()\">&times;</span>\n       <p *ngFor = \"let line of masterArray\">\n        {{ line }}  </p> \n        <button mat-raised-button  (click)='cancelNotice()' > I don't need to see this again.  </button>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/notice/notice.component.ts":
/*!********************************************!*\
  !*** ./src/app/notice/notice.component.ts ***!
  \********************************************/
/*! exports provided: NoticeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NoticeComponent", function() { return NoticeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _gen_edit_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../gen-edit.service */ "./src/app/gen-edit.service.ts");



var NoticeComponent = /** @class */ (function () {
    function NoticeComponent(genEditSvce) {
        this.genEditSvce = genEditSvce;
        this.phraseA = new Array();
    }
    NoticeComponent.prototype.ngOnInit = function () {
        console.log('init' + this.masterArray + "colName " + this.noticeColName);
    };
    NoticeComponent.prototype.closeModal = function () {
        document.getElementById('noticeModalComponent').style.display = "none";
    };
    NoticeComponent.prototype.cancelNotice = function () {
        var gP = {
            action: 'editAndLog',
            tableName: 'notice',
            whereColName: ['UserId'],
            whereColVal: [this.userid],
            editColNames: [this.noticeColName],
            editColVals: ['1'],
            insert: true
        };
        this.genEditSvce.genDB_POST(gP);
        this.closeModal();
    };
    Object.defineProperty(NoticeComponent.prototype, "name", {
        set: function (name) {
            this.userid = (name && name.trim());
        },
        enumerable: true,
        configurable: true
    });
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
    ], NoticeComponent.prototype, "visible", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], NoticeComponent.prototype, "userid", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
    ], NoticeComponent.prototype, "masterArray", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], NoticeComponent.prototype, "noticeColName", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [String])
    ], NoticeComponent.prototype, "name", null);
    NoticeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-notice',
            template: __webpack_require__(/*! ./notice.component.html */ "./src/app/notice/notice.component.html"),
            styles: [__webpack_require__(/*! ./notice.component.css */ "./src/app/notice/notice.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_gen_edit_service__WEBPACK_IMPORTED_MODULE_2__["GenEditService"]])
    ], NoticeComponent);
    return NoticeComponent;
}());



/***/ }),

/***/ "./src/app/time-line/time-line.component.css":
/*!***************************************************!*\
  !*** ./src/app/time-line/time-line.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "input[type=\"date\"]::-webkit-calendar-picker-indicator {\n  background: transparent;\n  bottom: 0;\n  color: transparent;\n  cursor: pointer;\n  height: auto;\n  left: 0;\n  position: absolute;\n  right: 0;\n  top: 0;\n  width: auto;\n}\n#main {\n  width: 90%;\n  height: 20px;\n\n  display: flex;\n}\n#main div:nth-of-type(1) {flex-grow: 3;}\n#main div:nth-of-type(2) {flex-grow: 1;}\n.container{\n  background-color:#2E4272;\n  display:flex;\n}\n.fixed{\n  background-color:#4F628E;\n  width: 900px;\n  flex-grow: 1;\n}\n.flex-item{\n  background-color:#7887AB;\n  flex-grow: 100;\n}\n.mat-raised-button.small {\n  width: 20px;\n  height: 20px;\n  line-height: 20px;\n  min-height: 20px;\n  vertical-align: top;\n  font-size: 10px;\n  padding: 0 0;\n  margin: 0;\n}\n.covered {\n  color: green;\n}\n.notCovered {\n  color: red;\n}\ntd.Accepted {\n  color:green;\n  font-size:12pt;\n}\ntd.NotAccepted {\n  color:red;\n  font-size:12pt;\n}\ncaption {\n  font-size:12pt;\n}\ninput.large {\n  font-size:12pt;\n}\n.vis-item.red {\n  color: white;\n  background-color: red;\n  border-color: darkred;\n}\n.container {\n  display: flex;\n  flex-direction: row;\n  border:solid;\n}\n.container > div {\n  flex: 1; /*grow*/\n}\n.parentCenter {\n  text-align: center;\n}\n#container {\n  border:solid;\n  overflow:auto;\n}\n#controls {\n  position:relative;\n  height:100px;\n  width:100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  text-align: center;\n}\n.vis-time-axis .vis-grid.vis-saturday,\n\t.vis-time-axis .vis-grid.vis-sunday {\n\t\tbackground: green\t\n\t  }\n.vis-time-axis .vis-grid.vis-today {\n\t\tbackground: #FFFFCC;\t\n\t  }\n.vis-item.red {\n    color: white;\n    background-color: red;\n    border-color: darkred;\n  }\n.form-width{\n    width:100px;\n  }\n.flex-container {\n    padding: 0;\n    margin: 0;\n    list-style: none;\n    display: flex;\n    width:80%;\n    justify-content: space-evenly;\n  }\n.wideItem {\n    width: 250px;\n  }\n/* \n.item {\n    width: 100px;\n    background-color:green;\n  }\n  */\n.space-evenly { \n    justify-content: space-evenly; \n  }\n.vis-item.approved {\n    color: white;\n    background-color: red;\n    border-color: darkred;\n  }\n.vis-item {\n    border-color: orange;\n    background-color: green;\n  }\n.smallLable {\n    color:blue;\n  }\n.notice {\n  color:red;\n  font-weight: bold;\n}\n.mat-form-field {\n  padding:20px;\n}\n.item {\n  width:100px;\n}\n.medium {\n  width:140px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGltZS1saW5lL3RpbWUtbGluZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsdUJBQXVCO0VBQ3ZCLFNBQVM7RUFDVCxrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLFlBQVk7RUFDWixPQUFPO0VBQ1Asa0JBQWtCO0VBQ2xCLFFBQVE7RUFDUixNQUFNO0VBQ04sV0FBVztBQUNiO0FBQ0E7RUFDRSxVQUFVO0VBQ1YsWUFBWTs7RUFFWixhQUFhO0FBQ2Y7QUFFQSwwQkFBMEIsWUFBWSxDQUFDO0FBQ3ZDLDBCQUEwQixZQUFZLENBQUM7QUFFdkM7RUFDRSx3QkFBd0I7RUFDeEIsWUFBWTtBQUNkO0FBQ0E7RUFDRSx3QkFBd0I7RUFDeEIsWUFBWTtFQUNaLFlBQVk7QUFDZDtBQUNBO0VBQ0Usd0JBQXdCO0VBQ3hCLGNBQWM7QUFDaEI7QUFDQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLGdCQUFnQjtFQUNoQixtQkFBbUI7RUFDbkIsZUFBZTtFQUNmLFlBQVk7RUFDWixTQUFTO0FBQ1g7QUFDQTtFQUNFLFlBQVk7QUFDZDtBQUNBO0VBQ0UsVUFBVTtBQUNaO0FBQ0E7RUFDRSxXQUFXO0VBQ1gsY0FBYztBQUNoQjtBQUNBO0VBQ0UsU0FBUztFQUNULGNBQWM7QUFDaEI7QUFDQTtFQUNFLGNBQWM7QUFDaEI7QUFDQTtFQUNFLGNBQWM7QUFDaEI7QUFDQTtFQUNFLFlBQVk7RUFDWixxQkFBcUI7RUFDckIscUJBQXFCO0FBQ3ZCO0FBQ0E7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLFlBQVk7QUFDZDtBQUNBO0VBQ0UsT0FBTyxFQUFFLE9BQU87QUFDbEI7QUFDQTtFQUNFLGtCQUFrQjtBQUNwQjtBQUNBO0VBQ0UsWUFBWTtFQUNaLGFBQWE7QUFDZjtBQUNBO0VBQ0UsaUJBQWlCO0VBQ2pCLFlBQVk7RUFDWixVQUFVO0VBQ1YsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsa0JBQWtCO0FBQ3BCO0FBQ0E7O0VBRUU7R0FDQztBQUVGO0VBQ0MsbUJBQW1CO0dBQ2xCO0FBQ0g7SUFDSSxZQUFZO0lBQ1oscUJBQXFCO0lBQ3JCLHFCQUFxQjtFQUN2QjtBQUNGO0lBQ0ksV0FBVztFQUNiO0FBQ0Y7SUFDSSxVQUFVO0lBQ1YsU0FBUztJQUNULGdCQUFnQjtJQUNoQixhQUFhO0lBQ2IsU0FBUztJQUNULDZCQUE2QjtFQUMvQjtBQUNGO0lBQ0ksWUFBWTtFQUNkO0FBQ0Q7Ozs7O0dBS0U7QUFDSDtJQUNJLDZCQUE2QjtFQUMvQjtBQUNGO0lBQ0ksWUFBWTtJQUNaLHFCQUFxQjtJQUNyQixxQkFBcUI7RUFDdkI7QUFDRjtJQUNJLG9CQUFvQjtJQUNwQix1QkFBdUI7RUFDekI7QUFDQTtJQUNFLFVBQVU7RUFDWjtBQUNGO0VBQ0UsU0FBUztFQUNULGlCQUFpQjtBQUNuQjtBQUNBO0VBQ0UsWUFBWTtBQUNkO0FBQ0E7RUFDRSxXQUFXO0FBQ2I7QUFDQTtFQUNFLFdBQVc7QUFDYiIsImZpbGUiOiJzcmMvYXBwL3RpbWUtbGluZS90aW1lLWxpbmUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImlucHV0W3R5cGU9XCJkYXRlXCJdOjotd2Via2l0LWNhbGVuZGFyLXBpY2tlci1pbmRpY2F0b3Ige1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgYm90dG9tOiAwO1xuICBjb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgaGVpZ2h0OiBhdXRvO1xuICBsZWZ0OiAwO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAwO1xuICB0b3A6IDA7XG4gIHdpZHRoOiBhdXRvO1xufVxuI21haW4ge1xuICB3aWR0aDogOTAlO1xuICBoZWlnaHQ6IDIwcHg7XG5cbiAgZGlzcGxheTogZmxleDtcbn1cblxuI21haW4gZGl2Om50aC1vZi10eXBlKDEpIHtmbGV4LWdyb3c6IDM7fVxuI21haW4gZGl2Om50aC1vZi10eXBlKDIpIHtmbGV4LWdyb3c6IDE7fVxuXG4uY29udGFpbmVye1xuICBiYWNrZ3JvdW5kLWNvbG9yOiMyRTQyNzI7XG4gIGRpc3BsYXk6ZmxleDtcbn1cbi5maXhlZHtcbiAgYmFja2dyb3VuZC1jb2xvcjojNEY2MjhFO1xuICB3aWR0aDogOTAwcHg7XG4gIGZsZXgtZ3JvdzogMTtcbn1cbi5mbGV4LWl0ZW17XG4gIGJhY2tncm91bmQtY29sb3I6Izc4ODdBQjtcbiAgZmxleC1ncm93OiAxMDA7XG59XG4ubWF0LXJhaXNlZC1idXR0b24uc21hbGwge1xuICB3aWR0aDogMjBweDtcbiAgaGVpZ2h0OiAyMHB4O1xuICBsaW5lLWhlaWdodDogMjBweDtcbiAgbWluLWhlaWdodDogMjBweDtcbiAgdmVydGljYWwtYWxpZ246IHRvcDtcbiAgZm9udC1zaXplOiAxMHB4O1xuICBwYWRkaW5nOiAwIDA7XG4gIG1hcmdpbjogMDtcbn1cbi5jb3ZlcmVkIHtcbiAgY29sb3I6IGdyZWVuO1xufVxuLm5vdENvdmVyZWQge1xuICBjb2xvcjogcmVkO1xufVxudGQuQWNjZXB0ZWQge1xuICBjb2xvcjpncmVlbjtcbiAgZm9udC1zaXplOjEycHQ7XG59XG50ZC5Ob3RBY2NlcHRlZCB7XG4gIGNvbG9yOnJlZDtcbiAgZm9udC1zaXplOjEycHQ7XG59XG5jYXB0aW9uIHtcbiAgZm9udC1zaXplOjEycHQ7XG59XG5pbnB1dC5sYXJnZSB7XG4gIGZvbnQtc2l6ZToxMnB0O1xufVxuLnZpcy1pdGVtLnJlZCB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xuICBib3JkZXItY29sb3I6IGRhcmtyZWQ7XG59XG4uY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgYm9yZGVyOnNvbGlkO1xufVxuLmNvbnRhaW5lciA+IGRpdiB7XG4gIGZsZXg6IDE7IC8qZ3JvdyovXG59XG4ucGFyZW50Q2VudGVyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuI2NvbnRhaW5lciB7XG4gIGJvcmRlcjpzb2xpZDtcbiAgb3ZlcmZsb3c6YXV0bztcbn1cbiNjb250cm9scyB7XG4gIHBvc2l0aW9uOnJlbGF0aXZlO1xuICBoZWlnaHQ6MTAwcHg7XG4gIHdpZHRoOjEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4udmlzLXRpbWUtYXhpcyAudmlzLWdyaWQudmlzLXNhdHVyZGF5LFxuXHQudmlzLXRpbWUtYXhpcyAudmlzLWdyaWQudmlzLXN1bmRheSB7XG5cdFx0YmFja2dyb3VuZDogZ3JlZW5cdFxuXHQgIH1cblx0ICBcblx0LnZpcy10aW1lLWF4aXMgLnZpcy1ncmlkLnZpcy10b2RheSB7XG5cdFx0YmFja2dyb3VuZDogI0ZGRkZDQztcdFxuXHQgIH1cbi52aXMtaXRlbS5yZWQge1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XG4gICAgYm9yZGVyLWNvbG9yOiBkYXJrcmVkO1xuICB9XG4uZm9ybS13aWR0aHtcbiAgICB3aWR0aDoxMDBweDtcbiAgfVxuLmZsZXgtY29udGFpbmVyIHtcbiAgICBwYWRkaW5nOiAwO1xuICAgIG1hcmdpbjogMDtcbiAgICBsaXN0LXN0eWxlOiBub25lO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgd2lkdGg6ODAlO1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xuICB9XG4ud2lkZUl0ZW0ge1xuICAgIHdpZHRoOiAyNTBweDtcbiAgfVxuIC8qIFxuLml0ZW0ge1xuICAgIHdpZHRoOiAxMDBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOmdyZWVuO1xuICB9XG4gICovXG4uc3BhY2UtZXZlbmx5IHsgXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7IFxuICB9XG4udmlzLWl0ZW0uYXBwcm92ZWQge1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XG4gICAgYm9yZGVyLWNvbG9yOiBkYXJrcmVkO1xuICB9XG4udmlzLWl0ZW0ge1xuICAgIGJvcmRlci1jb2xvcjogb3JhbmdlO1xuICAgIGJhY2tncm91bmQtY29sb3I6IGdyZWVuO1xuICB9XG4gIC5zbWFsbExhYmxlIHtcbiAgICBjb2xvcjpibHVlO1xuICB9XG4ubm90aWNlIHtcbiAgY29sb3I6cmVkO1xuICBmb250LXdlaWdodDogYm9sZDtcbn0gIFxuLm1hdC1mb3JtLWZpZWxkIHtcbiAgcGFkZGluZzoyMHB4O1xufVxuLml0ZW0ge1xuICB3aWR0aDoxMDBweDtcbn1cbi5tZWRpdW0ge1xuICB3aWR0aDoxNDBweDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/time-line/time-line.component.html":
/*!****************************************************!*\
  !*** ./src/app/time-line/time-line.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<!-- 'redraw' param not used at present, can be used if user scrolls beyond fetched data   -->\n<div id=\"container\">  \n        <div id=\"timeline\" #visjsTimeline *ngIf = \"redraw  && index == 0\"   (click) = \"clicked($event)\"> </div>\n    </div>     \n<table style=\"width:100%; table-layout:fixed; \"><tr>\n    <th></th><th></th><th></th><th></th><th></th><th></th></tr>\n    <tr>\n        <td  colspan='7' >\n            <div >\n                <div *ngIf = \"!newTimeAway2 \" >\n                        <button mat-raised-button (click) =\"setNewTimeAway2()\"  >New Time Away </button> \n                </div>\n            </div>\n                <!------        This is the form used for adding new tAs ---------------> \n            <div class = 'contDiv'>\n                <app-notice [name] = 'this.userid' [masterArray]=\"masterArray\" [noticeColName]=\"noticeColName\" ></app-notice>\n    <!--         New Time Away Section  text to test Git   -->\n            <form [formGroup]=\"formG\" *ngIf = \"newTimeAway2\" (ngSubmit)=\"onSubmit()\">\n                <div class = \"heading\" > Enter New Time Away Paramters </div>\n                <mat-form-field class=\"item\">\n                    <input matInput  placeholder= \"Start Date \"  formControlName=\"dateFrom\" type=\"date\" useValueAsDate title=\"click down triangle for calendar\" />\n                </mat-form-field>   \n                <mat-form-field class=\"item\">\n                    <input matInput placeholder= \"End Date \"   formControlName=\"dateTo\" type=\"date\" useValueAsDate />\n                </mat-form-field>    \n                \n                <mat-form-field  appearance=\"none\">\n                        <mat-label>Reason</mat-label>\n                            <mat-select  \n                            formControlName = \"reasonG\"  id='reasonId'>\n                                    <mat-option  value=\"0\">Personal Vacation</mat-option>\n                                    <mat-option  value=\"1\">Other</mat-option>\n                                    <mat-option   value=\"2\">Meeting</mat-option>  \n                            </mat-select>\n                </mat-form-field>\n                <mat-form-field  class=\"wideItem\">\n                        <mat-label class=\"smallLabel\"> Note:</mat-label>\n                        <textarea matInput  formControlName = \"noteG\"  cdkTextareaAutosize  #autosize=\"cdkTextareaAutosize\"  cdkAutosizeMinRows=\"1\"  cdkAutosizeMaxRows=\"5\" >\n                        </textarea>\n                </mat-form-field > \n                <!-- type='submit' is the default, must specify another type to avoid submitting  -->\n                <button mat-raised-button [disabled]=\"!formValidation\" \n                    title=\"Valid Start and End dates as well as Reason required\"  >Submit </button>\n                <button mat-raised-button type='button' (click) = \"cancelNewTA()\" >Cancel </button>\n\n                <div *ngIf=\"this.formG.controls.dateFrom.invalid && ( this.formG.controls.dateFrom.dirty || this.formG.controls.dateFrom.touched  ) \"\n                    class=\"alert alert-danger\">\n                        <div *ngIf=\"this.formG.controls.dateFrom.errors.required\">\n                            Start Date is required.\n                        </div>\n                </div>       \n                <div *ngIf=\"this.formG.controls.dateTo.invalid && ( this.formG.controls.dateTo.dirty || this.formG.controls.dateTo.touched  ) \"\n                    class=\"alert alert-danger\">\n                    <div *ngIf=\"this.formG.controls.dateTo.errors.required\">\n                    End Date is required.\n                    </div>\n                </div>  \n                <div class=\"alert alert-danger\" *ngIf=\"formG.errors\"  >   {{  formG.errors?.dates | json }} </div>     \n            </form>\n        \n\n    <!--          Edit tA  Controls   -->\n             <div style=\"text-align:center\">\n                <table><tr><td>\n                    <form [formGroup]=\"formEdit\" *ngIf = \"drawEditControls && !newTimeAway2 \" (ngSubmit)=\"onSubmit()\">\n                        <div class = \"heading\" *ngIf = '!_readonly'> Edit Time Away Paramters </div>\n                        <mat-form-field class=\"item\" >\n                            <input matInput id=\"dateToEditIDXX\" placeholder= \" Start-Date \" (blur)=\"storeEdit('startDate', $event)\" \n                            formControlName=\"dateToEdit\"  [readonly] = \"_readonly\" \n                            type=\"date\" useValueAsDate  />\n                        </mat-form-field>    \n                        <mat-form-field class=\"item\">\n                                <input matInput id=\"eDateToEditID\"  placeholder= \" End-Date \" (blur)=\"storeEdit('endDate', $event)\" \n                                formControlName=\"dateFromEdit\"  [readonly] = \"_readonly\" \n                                type=\"date\"  useValueAsDate  />\n                        </mat-form-field>  \n                        <mat-form-field *ngIf = \"!_readonly\" class=\"medium\">\n                            <mat-label>Reason</mat-label>\n                                <mat-select [(value)]='reasonSelect' (selectionChange)=\"storeEdit('reason', $event)\"\n                                id='reasonId'>\n                                        <mat-option  value=\"0\">Personal Vacation</mat-option>\n                                        <mat-option  value=\"1\">Other</mat-option>\n                                        <mat-option   value=\"2\">Meeting</mat-option>  \n                                </mat-select>\n                        </mat-form-field>\n                        <mat-form-field *ngIf = \"_readonly\" appearance=\"none\" > \n                                <mat-label class=\"smallLabel\"> Reason</mat-label>\n                                <input matInput  [value]=\"reasons[reasonSelect]\" size = 40  [readonly] = \"_readonly\">\n                        </mat-form-field>\n                        <mat-form-field  class=\"wideItem\">\n                                <mat-label class=\"smallLabel\"> Note:</mat-label>\n                                <textarea matInput  (change)=\"storeEdit( 'note', $event)\" [value]=\"newTimeAwayBool ? ' ' : this.data2._data[this._id]?.note\"\n                                    [formControl] = \"notesFC\"\n                                    cdkTextareaAutosize [readonly]=\"_readonly\"\n                                    #autosize=\"cdkTextareaAutosize\"\n                                    cdkAutosizeMinRows=\"1\"\n                                    cdkAutosizeMaxRows=\"5\"\n                                    >\n                                </textarea>\n                        </mat-form-field >\n                        <div  *ngIf = \"isApprover && this.data2._data[this._id]['approved'] == 0 \" >   \n                            <button  mat-raised-button  type='button' (click) = \"editGen('approve', $event)\">Approve </button>  \n                        </div>\n                    </form> </td>\n                    <td   *ngIf = \"!_readonly && !newTimeAway2 \"  >  <button      mat-raised-button color=\"primary\" \n                        (click) = \" saveEdits();\" >Submit Changes</button> </td>\n                    <td   *ngIf = \"!_readonly && !newTimeAway2 \"  >  <button mat-raised-button color=\"primary\" \n                                                        (click) = \" sendDeleteEmail();editGen('del',$event);\" >Delete</button> </td>\n                </tr></table>  \n                <div *ngIf = \"drawEditControls && !newTimeAway2  && +this.data2._data[this._id]['approved'] == 1\" class=\"parentCenter\"> \n                        <table *ngIf = \"!_readonly \" style = \"width:60%; \">\n                            <tr>\n                                <th *ngIf = \"covererToggle \">Chose First Coverer </th>\n                                <th *ngIf = \"!covererToggle \">Chose Second Coverer </th>\n                                <th colspan=\"2\">Coverers </th>\n                            </tr>\n                            <tr><th></th><th> First Coverer</th><th>Second Coverer</th></tr>\n                            <tr  *ngIf=\"this.rData['data'][this._id]\">\n                                <td> \n                                    <mat-select    name = \"coverer\"  id='covererUserKey' >\n                                        <mat-option *ngFor = \"let item of rData['users'] | keyvalue\" \n                                            value=\"item.value\" (click) = \"selectCoverer(item.key, item.value) \"> {{item.key }} </mat-option>\n                                    </mat-select>\n                                </td>\n                                    <td><input  [class]=\"setColorForCoverage( this.rData['data'][this._id]['covA_Duty'] )\" size=15 matInput *ngIf = \" this.rData['usersByKey'][this.rData['data'][this._id]['coverageA']]  || this.covererName \"\n                                        [value]= \"this.covererName ? this.covererName : this.rData['usersByKey'][this.rData['data'][this._id]['coverageA']] \"></td>\n                                    <td><input [class]=\"setColorForCoverage( this.rData['data'][this._id]['covB_Duty'] )\"   size=15  matInput *ngIf = \" this.rData['usersByKey'][this.rData['data'][this._id]['coverageB']]  || this.covererName2 \"\n                                        [value]= \"this.covererName2  ? this.covererName2 : this.rData['usersByKey'][this.rData['data'][this._id]['coverageB']]\" ></td>\n                                    <td ><button  *ngIf = \"this.covererUserKey > 0 \"  mat-raised-button color=\"primary\" (click) = \"storeCovererData($event)\" >Send Email to Covers </button> </td>\n                            </tr>\n                        </table>\n               \n                        <!--        Read Only Coverers Display        -->\n                        <table *ngIf = \"_readonly\" style = \"width:30%; \">   \n                            <caption> Coverers </caption>    \n                            <tr> \n                                <td [class] = \"coverageAclass\"> {{ this.rData['usersByKey'][this.rData['data'][this._id]['coverageA']]   }} </td>\n                                <td  *ngIf = \"coverageA_isLoggedInUser  && coverageAclass=='NotAccepted'\">  \n                                        <button  mat-raised-button class=\"small\" type='button' (click) = \"acceptCoverage('covA_Duty')\">Accept </button>  \n                                </td>\n                                <td [class] = \"coverageBclass\" > {{ this.rData['usersByKey'][this.rData['data'][this._id]['coverageB']]   }} </td>\n                                <td  *ngIf = \"coverageB_isLoggedInUser && coverageBclass=='NotAccepted'\">  \n                                        <button  mat-raised-button class=\"small\" type='button' (click) = \"acceptCoverage('covB_Duty')\">Accept </button>  \n                                </td>\n                            </tr>\n                        </table>\n                    </div>  \n        </div >      \n        \n            <div id=\"controls\" [formGroup] = 'form' *ngIf = \"drawControls\" >\n                    <ul *ngIf = \"this.showControls && this._id \" class=\"flex-container  \">\n                <!--    This the readOnly version of the Reason control -->\n                        <li class=\"wideItem\" *ngIf =_readonly>\n                        </li>\n                        <li style=\"width:150px\" *ngIf = \"!_readonly || (this.data2._data[this._id] && this.data2._data[this._id].note\n                            && this.data2._data[this._id].note.length > 0)\" >\n                        </li> \n                        <li class=\"item\" *ngIf = \"this.reasonEdited && this.startDateEdited && endDateEdited\" >\n                        <button mat-raised-button  >Save New Time Away </button>    <!-- any button in a form triggers onSubmit, unless type='button-->\n                        </li>\n                    </ul>\n            </div>\n        </div>    \n    </td>\n    <td colspan=\"2\" style=\" text-align:left;\">\n    <div id='help'  style=\"  position: fixed; bottom: 0; right: 0;\" >\n            <app-help [helpArray] = \"helpArray\"   ></app-help>\n    </div>\n    </td>\n</tr></table>\n\n<div id=\"datums\"  style=\"display:none\"> </div> <!----  Gro  ??  id ??-->\n<div id=\"datums2\"  style=\"display:none\"> </div> <!----- holds callBack function e.g. triggers by 'remove' -->\n<div id=\"vidx\"  style=\"display:block\"> </div>\n<div id=\"chData\" style=\"display:none\" > chData </div>  \n\n\n\n<style type=\"text/css\" >\n    #timeline {\n        width: 100%;\n        height: 60%;\n        font-size:6pt;\n        color:green;\n        font-family: sans-serif;\n        padding:0px;    \n    }\n      /* gray background in weekends, white text color */\n  .vis.timeline .timeaxis .grid.saturday,\n  .vis.timeline .timeaxis .grid.sunday {\n    background: green;\n    }\n</style>\n"

/***/ }),

/***/ "./src/app/time-line/time-line.component.ts":
/*!**************************************************!*\
  !*** ./src/app/time-line/time-line.component.ts ***!
  \**************************************************/
/*! exports provided: TimeLineComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimeLineComponent", function() { return TimeLineComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _gen_edit_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../gen-edit.service */ "./src/app/gen-edit.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");




//import { throwMatDialogContentAlreadyAttachedError } from '@angular/material/dialog';



var vis = __webpack_require__(/*! ../../../node_modules/vis/dist/vis.js */ "./node_modules/vis/dist/vis.js");
var TimeLineComponent = /** @class */ (function () {
    function TimeLineComponent(http, genEditSvce, router, activatedRoute, datePipe, fb) {
        this.http = http;
        this.genEditSvce = genEditSvce;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.datePipe = datePipe;
        this.fb = fb;
        this.platform = "dev";
        this.covererDates = [];
        this.covererName = "";
        this.covererName2 = "";
        this.showCoverers = false;
        this.reasons = ['Personal Vacation', 'Other', 'Meeting'];
        this.masterArray = ['This new page is part of upgrade of Whiteboard.',
            'To see details, or edit a TimeAway, click on that TimeAway. ',
            'If you have difficulties or questions concerning the page, please email to flonberg@partners.org.'
        ];
        this.helpArray = ['To schedule a Time Away click on the New Time Away button ',
            'To edit your Time Away click on that Time Away. '];
        this.noticeColName = 'vacMan';
        this.noticeModalComonentID = 'vacManModal';
        this.drawControls = true;
        this.drawEditControls = false;
        this.reasonSelect = ''; // the reason from dataBase
        this.newTimeAwayBool = false;
        this.saveTimeAwayBool = false;
        /*
        newTAparams: newTAparams = {
          startDate: '',
          endDate: '',
          reason: -1,
          Note: ''
        };
        */
        this.dB_PP = {
            tableName: 'vacation3',
            whereColName: [],
            whereColVal: [],
            editColNames: [],
            editColVals: [],
            userid: '',
            action: '',
            needEmail: '',
            email: {
                mailToAddresses: [],
                msg: '',
                subject: ''
            }
        };
        this.insertP = {
            tableName: '',
            colName: [],
            colVal: [],
            userid: '',
            action: '',
            email: {
                mailToAddresses: [],
                msg: '',
                subject: ''
            }
        };
        this.storedEdits = [{}]; // store values from startDate, endData, reason, note from user entries. 
        this.seP = {}; // define instance of SeditParams interface
        this.editColNames = [String];
        this.editColVals = [String];
        this.needStartEmail = false;
        this.needEndEmail = false;
        this.newStartDate = String;
        this.newEndDate = String;
        this.EDO = { "OldStartDate": String,
            "NewStartDate": String,
            "OldEndDate": String,
            "NewEndDate": String,
        };
        this.ret = 1;
        this.dateLabels = [];
        this.nomCoverers = [];
        this.redraw = true;
        this.showControls = false; // *ngIf condition for the controls section
        this._readonly = true;
        this.isApprover = false;
        this.nameToUserId = [{ lastName: '', userid: '' }];
        this.useridToUserkeys = [{ userid: 'Unknown', userkey: 0 }];
        this.contentArray = [];
        this.newTimeAwayBool = false; // enable editing of existing tAs
        // this.seP.whereColName = 'vidx';
        //  this.seP.tableName = 'vacation3';
        this.index = 0;
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({
            'startDate': this.startDate = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required),
            'endDate': this.endDate = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]),
            'reason': this.reasonFC = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](),
            'note': this.notesFC = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]("-"),
        });
        this.cutOffDate = new Date('2019-02-01');
        this.createForm();
        this.formValidation = false;
        this.newTimeAway2 = false;
        this.covererToggle = true;
        this.covererUserKey = -1;
        this.covererUserKey2 = -1;
        this.keyFromQP = -1;
    }
    TimeLineComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log(" this.router.url is   " + this.router.url + "server is " + window.location.href);
        this.activatedRoute // point to the route clicked on
            .queryParams // look at the queryParams
            .subscribe(function (queryParams) {
            _this.qP = queryParams;
            _this.setQueryParams(queryParams);
            //   this.seP.who = this.userid;
            _this.getTimelineData2(); // get the data from REST database call.
            var getParams = {
                action: 'simpleGet',
                tableName: 'notice',
                whereColName: 'UserId',
                whereColVal: _this.userid,
                getColName: 'vacMan',
            };
            _this.genEditSvce.simpleGet(getParams).subscribe(function (val) {
                _this.notice = val; // save the resule
                if (_this.notice && _this.notice['vacMan'] == 0) // it r 0
                    document.getElementById('noticeModalComponent').style.display = "block"; // sNEED VAR = MODAL ID 
                if (!_this.notice) { // it NOT FOUND or 0
                    if (document.getElementById('noticeModalComponent'))
                        document.getElementById('noticeModalComponent').style.display = "block";
                    var tP = {
                        action: 'insertRecGen',
                        tableName: 'notice',
                        colName: ['vacMan', 'UserId'],
                        colVal: ['0', _this.userid,]
                    };
                    _this.genEditSvce.genPOST(tP)
                        .subscribe(// can't subscribe to POST REST calls ?????
                    function (response) {
                        _this.lastInsertIdx = response;
                    });
                }
            });
            //   this.genEditSvce.checkIfNoticeNeeded('vacMan');                                   // see if a notice of a change is needed
        });
        console.log("213");
    };
    TimeLineComponent.prototype.selectCoverer = function (n, i) {
        if (this.covererToggle) {
            this.covererName = n;
            this.covererUserKey = i;
            this.covererName2 = '';
        }
        else {
            this.covererName2 = n;
            this.covererUserKey2 = i;
        }
        this.covererToggle = !this.covererToggle;
    };
    TimeLineComponent.prototype.setColorForCoverage = function (s) {
        if (s && s == 1)
            return 'covered';
        else
            return 'notCovered';
    };
    TimeLineComponent.prototype.storeCovererData = function () {
        this.rData['emailByKey']['116'] = "flonberg@partners.org"; // since I am not in dataBase need to add adHoc
        //  if (this.covererUserKey )
        //    var mTA_prod = [this.rData['emailByKey'][this.covererUserKey]];
        var link1 = this.genEditSvce.urlBase + "/acceptCov.php?covererAUserkey="
            + this.covererUserKey + '&mode=acceptCov&vidx=' + this.data2._data[this._id].vidx;
        if (this.covererUserKey2) {
            var link2 = this.genEditSvce.urlBase + "/acceptCov.php?covererAUserkey="
                + this.covererUserKey2 + '&mode=acceptCovB&vidx=' + this.data2._data[this._id].vidx;
        }
        /*************  Send Coverage Emails        */
        var message = "<html> <head><title> Vacation Coverage Acknowledgment </title></head>\n      <p> " + this.loggedInFirstName + "  " + this.loggedInLastName + " would like you to cover her/his time away. \n      starting  " + this.formatDateYYYymmdd(this.data2._data[this._id].start) + "\n      through  " + this.formatDateYYYymmdd(this.data2._data[this._id].end) + " </p>\n      <p> THIS IS A TEST IN SOFTWARE DEVELOPEMENT, APPOLOGIES FOR THE BOTHER, PLEASE IGNORE. </p>\n      <p><a href=" + link1 + "> Accept  " + this.covererName + " coverage. </a></p>\n    ";
        if (this.covererUserKey2 > 0) { // if the IS a second coverer
            message += "<p> <a href=" + link2 + "> Accept  " + this.covererName2 + "  coverage. </a></p>";
        }
        var prodAddr = [this.rData['emailByKey'][this.covererUserKey]]; // the PROD adderess array
        if (this.covererUserKey2) // if there IS a second coverer
            prodAddr.push(this.rData['emailByKey'][this.covererUserKey2]); // add her address. 
        var mTA = {
            "Dev": ["flonberg@partners.org"],
            "Prod": prodAddr,
        };
        var emp = {
            action: "sendEmail2",
            addr: { "Dev": ["flonberg@partners.org"],
                "Prod": prodAddr
            },
            msg: message,
            subject: "coverage",
            debug: 1
        };
        this.genEditSvce.genPOST(emp).subscribe(function (res) {
            console.log("res from sendEmail2 from storeCovererDate is  %o", res);
        });
        /***********  Update the dataBase for the coverers   */
        var upDateParams = {
            action: 'editAndLog',
            tableName: 'vacation3',
            whereColName: ['vidx'],
            whereColVal: [this.data2._data[this._id].vidx],
            editColNames: ['coverageA', 'coverageB'],
            editColVals: [this.covererUserKey.toString(), this.covererUserKey2.toString()],
            userid: this.userid,
        };
        this.genEditSvce.genPOST(upDateParams).subscribe(function (res) {
            console.log("res updateCoveresx" + res);
        });
    }; // end of StoreCovererData 
    TimeLineComponent.prototype.enterInDbAndEmail = function () {
        console.log("enterinDb %o", this.covererDates);
        this.showCoverers = true;
    };
    TimeLineComponent.prototype.closeModal = function () {
        document.getElementById('noticeModal').style.display = "none";
    };
    TimeLineComponent.prototype.cancelNotice = function () {
        console.log('cancel Notice');
        var gP = {
            tableName: 'notice',
            whereColName: ['UserId'],
            whereColVal: [this.userid],
            editColNames: ['vacMan'],
            editColVals: ['1'],
            userid: this.userid,
            action: 'editAndLog',
            insert: true
        };
        this.genEditSvce.genDB_POST(gP);
        this.closeModal();
    };
    TimeLineComponent.prototype.getNotice = function (UserId) {
        var getParams = {
            tableName: 'notice',
            whereColName: ['UserId'],
            whereColVal: [UserId],
            getColName: ['vacMan',]
        };
        this.genEditSvce.genDB_GET(getParams);
    };
    /*******************          This is called anytime the user RELEASES the mouse click **********************/
    TimeLineComponent.prototype.clicked = function (ev) {
        if (document.getElementById('datums') && document.getElementById('datums').innerText.length > 0) { // user click on a tA
            this._id = +document.getElementById('datums').innerText; // _id of the item clickedOn in the DataSet
            this.createEditForm(); // THIS LOADS THE VALUES FROM DATASET INTO WIDGETS
            /////////  this.data2 is a DataSet Object which has the _data property to contain my data \\\\\\\\\\
            if (!this.data2._data[this._id]) { // click was NOT in a tA box;
                return;
            }
            //   console.log("approved " + this.data2._data[this._id]['approved'])
            this._vidx = this.data2._data[this._id].vidx; // store the vidx for editing
            document.getElementById('vidx').innerText = this.data2._data[this._id].vidx; // store the vidx for DELETE
            //   this.seP.whereColVal = this.data2._data[this._id].vidx;                                 // seP =>  this.insertP used for editing tA
            if (this._id >= 0) { // shows user had clicked a box
                this.showControls = true; // show editing controls
                this.drawEditControls = true;
                if (this.data2._data[this._id].approved == 1)
                    this.helpArray = ['Click on the Coverage drop-down and select person who will be you First Coverer.',
                        'If you want to nominate a Second Coverer, click on the Coverage drop-down again',
                    ];
            }
            else
                this.helpArray = ['Your Time Away must be approved before you cen select coverers'];
        }
        console.log('clicked' + this._id);
        /*******  classify loggedInUser as tA Owner or coverer */
        if (this.data2._data[this._id] && this.data2._data[this._id].className === this.userid) { // loggedInUser is tA owner 
            this._readonly = false; // enable editing
        }
        else { // user is NOT tA owner
            this._readonly = true; // make controls readOnly
            this.helpArray = ["Click on a TimeAway to see the details for tha TimeAway.",
                "Coverer namd in green means that the coverage has bee accepted."];
        }
        if (this.userid === 'napolitano') { // official 'approver'
            this.isApprover = true;
        }
        /***********  Set Class for Coverers display,  according to Acceptance */
        if (this.data2._data[this._id]) {
            if (this.data2._data[this._id]['covA_Duty'] == '1')
                this.coverageAclass = "Accepted";
            else
                this.coverageAclass = "NotAccepted";
            if (this.data2._data[this._id]['covB_Duty'] == '1')
                this.coverageBclass = "Accepted";
            else
                this.coverageBclass = "NotAccepted";
            /***********  Set if loggedInUser it the Coverer  */
            if (this.data2._data[this._id]['coverageA'] == this.rData['loggedInUserKey']) {
                this.coverageA_isLoggedInUser = true;
            }
            if (this.data2._data[this._id]['coverageB'] == this.rData['loggedInUserKey']) {
                this.coverageB_isLoggedInUser = true;
            }
            /************   Change Help text */
            console.log("rData has " + +this.rData['loggedInUserKey'] + " data2 hsa " + +this.data2._data[this._id]['userkey']);
            if (+this.rData['loggedInUserKey'] == +this.data2._data[this._id]['userkey']) {
                this.helpArray = [
                    'Click on the Coverage drop-down and select person who will be you First Coverer.',
                    'If you want to nominate a Second Coverer, click on the Coverage drop-down again.',
                ];
            }
        }
        console.log("coverageAclass" + this.coverageAclass);
        var dParams = {
            'tableName': 'vacation3', 'whereColName': 'vidx', 'whereColVal': document.getElementById('vidx').innerText,
            'editColNames': [],
            'editColVals': [],
            'action': 'editAndLog'
        };
        this.dB_PP.whereColName = ['vidx'];
        this.dB_PP.whereColVal = [document.getElementById('vidx').innerText];
        if (document.getElementById('datums2').innerText.indexOf('remove') !== -1) { // presence of the work 'remove' indicates user clicked 'x'
            this.data2.remove({ id: +document.getElementById('datums').innerText }); // remove the item from the dataSet
            this.drawEditControls = false; // turn off the edit Controls.
            document.getElementById('datums2').innerText = ""; // clear it so that further clicks on tA don't result in delete
            dParams.editColNames = ['reasonIdx'];
            dParams.editColVals = ['99'];
            this.genEditSvce.genDB_POST(dParams); // use REST call to delete tA from the dataBase.
        }
        else if (this.data2._data[this._id]) { // Ed/
            var startDateEdit = this.formatDateYYYymmdd(this.data2._data[this._id].start); // format the date for use in dataBase
            var endDateEdit = this.formatDateYYYymmdd(this.data2._data[this._id].end); //    "
            //  dParams.editColNames = ['startDate','endDate'];
            this.dB_PP.editColNames = ['startDate', 'endDate'];
            this.dB_PP.editColVals = [startDateEdit, endDateEdit];
            this.dB_PP.action = 'editAndLog';
            // dParams.editColVals = [startDateEdit,endDateEdit];
            // this.genEditSvce.genDB_POST(this.dB_PP);               // use REST call to update the dataBase.
        }
    }; /*******  end of clicked */
    /*********  This is used by the New TimeAway  ***********/
    TimeLineComponent.prototype.createForm = function () {
        this.doValidation = false;
        this.invalidFromDate = false;
        this.formG = this.fb.group({
            dateTo: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            dateFrom: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            reasonG: [''],
            noteG: ['']
        }, { validator: this.dateLessThan('dateFrom', 'dateTo', 'reasonG') });
    };
    ////////   This triggered by clicked() and is where the data from the selected tA in the dataSet is loaded into the edit boxes. 
    TimeLineComponent.prototype.createEditForm = function () {
        console.log('147');
        this.reasonSelect = this.data2._data[this._id].reason.toString(); // set selected
        this.doValidation = false;
        this.invalidFromDate = false;
        var toDate = new Date(this.data2._data[this._id].start).toISOString().slice(0, 10); // format date yyyy/mm/dd
        var fromDate = new Date(this.data2._data[this._id].end).toISOString().slice(0, 10);
        this.formEdit = this.fb.group({
            goAwayerBox: [this.data2._data[this._id].content],
            dateToEdit: [toDate, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            dateFromEdit: [fromDate, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            reasonGEdit: [''],
            noteGEdit: [this.data2._data[this._id].note]
        }, { validator: this.dateLessThan('dateFromEdit', 'dateToEdit', 'reasonGEdit') });
        this.makeDateLabels();
    };
    TimeLineComponent.prototype.makeDateLabels = function () {
        var dName = ["Mon", "Tues", "Wed", "Thurs", "Fri"];
        var mName = ["Jan.", "Feb.", "Mar.", "Apr.", "May.", "Jun.", "Jul.", "Aug.", "Sep.", "Oct.", "Nov.", "Dec."];
        var sDate = new Date(this.data2._data[this._id].start);
        var vidx = this.data2._data[this._id].vidx;
        var goAwayerUserKey = this.data2._data[this._id].userkey;
        this.dateLabels = Array();
        var day = sDate.getDay() - 1;
        var date = sDate.getDate();
        var monthNum = sDate.getMonth() - 1;
        console.log("date " + dName[day]);
        for (var i = 0; i < 15; i++) {
            var dateString = this.datePipe.transform(sDate, "yyyy-dd-dd");
            if (dName[day]) {
                this.dateLabels.push({ "dayName": dName[day], "date": date,
                    "monthName": mName[monthNum], "dateString": dateString, "dayOfTA": i,
                    "vidx": vidx, "goAwayerUserKey": goAwayerUserKey });
            }
            sDate.setDate(sDate.getDate() + 1);
            if (sDate > new Date(this.data2._data[this._id].end))
                break;
            day = sDate.getDay() - 1;
            date = sDate.getDate();
            monthNum = sDate.getMonth();
        }
        console.log("dateLabels is %o", this.dateLabels);
    };
    TimeLineComponent.prototype.dateLessThan = function (from, to, reason) {
        var _this = this;
        return function (group) {
            var today = new Date();
            if (group.controls[to].value && group.controls[from].value >= group.controls[to].value) {
                return {
                    dates: "End Date must be after Start Date "
                };
            }
            if (group.controls[from].value) {
                var fDate = new Date(group.controls[from].value);
                if (fDate < today)
                    return {
                        dates: "Date must be in the future"
                    };
            }
            if (group.controls[from].value.length > 0 && group.controls[from].value.length > 0 && group.controls[reason].value.length > 0) {
                _this.formValidation = true;
                console.log("form valid " + _this.formValidation);
            }
            return {};
        };
    };
    TimeLineComponent.prototype.cancelNewTA = function () {
        console.log("cancel newTA");
        this.newTimeAway2 = false;
    };
    TimeLineComponent.prototype.onSubmit = function () {
        var _this = this;
        /*********     Add to dataBase  **********************/
        if (+this.loggedInRank < 5)
            this.helpArray = ['Your Time Away needs to be approved before you can select coverage. '];
        this.insertP = {}; // create instance of interface
        this.insertP.tableName = 'vacation3';
        this.insertP.action = 'insertRecGen';
        this.insertP.colName = ['startDate', 'endDate', 'reason', 'note', 'userid', 'approved']; // names of columns to INSERT
        this.insertP.colVal = [this.formG.value.dateFrom,
            this.formG.value.dateTo, this.formG.value.reasonG,
            this.formG.value.noteG, this.userkey], '0';
        var link = this.genEditSvce.urlBase + "/approveTA.php?goAwayerUserKey" + this.rData['loggedInUserKey']; // Need to get the vidx just added/
        console.log("544  insertP is %o", this.insertP);
        /***********  enter newTA in dataBase  */
        this.genEditSvce.genPOST(this.insertP)
            .subscribe(function (response) {
            _this.retFromPost(response);
        });
        this.newTimeAway2 = false;
    };
    /**********  Use the param returned from Insert POSt to add newTA to DataSet  */
    TimeLineComponent.prototype.retFromPost = function (s) {
        this.ret = s;
        console.log("store %o", s); // stores the vacation3 vidx to a
        var idx = s.lastID;
        this.lastInsertIdx = s['lastID'];
        console.log("idx is" + s['lastID']);
        var item = {
            id: Object.keys(this.data2._data).length + 1,
            start: this.formG.value.dateFrom + ' 00:00:00',
            end: this.formG.value.dateTo + ' 00:00:00',
            content: this.contentArray[this.userkey],
            group: this.groupsArray.indexOf(this.contentArray[this.userkey]),
            reason: this.formG.value.reasonG,
            note: this.formG.value.noteG,
            className: this.userid,
            vidx: this.lastInsertIdx
        };
        var idOfAdded = this.timeline.itemsData.getDataSet().add(item); // add the new tA to local DataSe
        /************  send NeedToApprove Email -- must be in subscribe to get lastInsertIdx. */
        if (this.rData.loggedInUserRank < 5) {
            var link11 = this.genEditSvce.urlBase + "/approveTA.php?vidx=" + this.lastInsertIdx;
            console.log("600  link1 for retFromPost is " + link11);
            var emp = {
                action: "sendEmail2",
                addr: { "Dev": "flonberg@partners.org",
                    "Prod": "flonberg@gmail.com"
                },
                msg: "<html> <head><title> Vacation Coverage Acknowledgment </title></head>\n        <p> " + this.loggedInFirstName + "  " + this.loggedInLastName + " has scheduled a Time Away. </p>\n        <p> You can approve this Time Away using the below link: </p>\n        <a href=" + link11 + "> Time away schedule. </a>",
                subject: "New Time Away "
            };
            this.genEditSvce.genPOST(emp).subscribe(function (res) {
                console.log("res from sendEmail2 %o", res);
            });
        }
        return idx;
    };
    TimeLineComponent.prototype.formatDateYYYymmdd = function (d) {
        var pi = 3.14;
        var date = new Date(d);
        var y = date.getFullYear();
        var m = date.getMonth() + 1;
        var dd = date.getDate();
        var fD = m + '/' + dd + '/' + y;
        return fD;
    };
    TimeLineComponent.prototype.setQueryParams = function (qP) {
        if (qP.userid) {
            this.userid = qP.userid;
            this.genEditSvce.setUserId(qP.userid); // pass the userid to gen-edit for use in REST svces
        }
        if (qP.platform) {
            this.platform = qP.platform;
            console.log("timeLine platform " + this.platform);
        }
    };
    // tslint:disable-next-line:use-life-cycle-interface
    TimeLineComponent.prototype.ngAfterViewInit = function () {
        if (this.timelineContainer) {
            this.tlContainer = this.timelineContainer.nativeElement;
        }
    };
    TimeLineComponent.prototype.getTimelineData2 = function () {
        var _this = this;
        /***********   set the startDate and endDates for collecting enuff data for everyone to be in the dataStructure    ***************/
        var numWeeks = 8; // number of weeks to show on the calendar
        var todayDate = new Date();
        var startDate = new Date(todayDate.getFullYear(), todayDate.getMonth(), 1); // move to first day of current month
        var endDate = new Date();
        // create new date to use for end                            
        endDate.setMonth(startDate.getMonth() + 4); // set a date to be the forward date of data collection
        startDate.setMonth(startDate.getMonth() - 4); // set date for backward data collection far enough back to get all users
        this.startDateString = this.datePipe.transform(startDate, 'yyyy-MM-dd'); // format it for dataBase startDate for getting tAs
        this.endDateString = this.datePipe.transform(endDate, 'yyyy-MM-dd'); // mm for endDate
        /****************   set the dates for showing on the calendar as the first of current month and forward 8 weeks  ******************/
        var startDateShown = new Date(todayDate.getFullYear(), todayDate.getMonth(), 1); // move to first day of current month for showing
        var endDateShown = new Date(todayDate.getFullYear(), todayDate.getMonth(), 1); // move endDateShown foward 8 weeks from startDateShown
        endDateShown.setDate(startDate.getDate() + numWeeks * 7);
        //  this.genEditSvce.getTAs().subscribe(
        this.genEditSvce.genGet('REST_GET.php?action=getTAs&userid=' + this.userid).subscribe(function (val) {
            console.log("627  val " + val);
            if (_this.index === 0) {
                _this.rData = val;
                _this.data2 = new vis.DataSet(_this.rData['data']);
            }
            else {
                _this.data2 = Array();
            }
            console.log("rData: %o", _this.rData);
            if (_this.qP['vidx']) {
                Object.keys(_this.rData['data']).forEach(function (key) {
                    if (_this.rData['data'][key].vidx === Number(_this.qP['vidx'])) {
                        _this.keyFromQP = Number(key);
                        console.log("Found.");
                    }
                });
            }
            // store data in this.data2
            _this.removeBads();
            _this.setGroups(_this.data2); // make this.nameList a  list of users who have timeAways found
            _this.groups = new vis.DataSet([]);
            var i = 0; // make a dataStruct for the groups
            for (i = 0; i < _this.nameList.length; i++) { // foreach name found to have tA's
                _this.groups.add({ id: i, content: _this.nameList[i], value: i }); // add a group
                _this.groupsArray[i] = _this.nameList[i];
            }
            var top = _this.nameList.length * 20;
            var topString = top.toString() + 'px';
            _this.assignGroups(); // go thru tA's and assign each to proper Group
            _this.timeline = new vis.Timeline(_this.tlContainer, _this.data2, {});
            _this.timeline.setOptions(_this.options);
            _this.timeline.setGroups(_this.groups);
            _this.timeline.on('select', function (properties) {
                document.getElementById('datums').innerHTML = properties.items; // properties.items is the _id of the item in the DataSet                                                                                   // store the _id in the DOM for use by Angular to do edits ...
            });
            function logEvent(event, properties) {
                var log = document.getElementById('log'); // so if 'remove' is found  
                var msg = document.createElement('div');
                document.getElementById('chData').innerHTML = properties.items.innerHTML = 'event=' + JSON.stringify(event) + ', ' +
                    'properties=' + JSON.stringify(properties);
                log.firstChild ? log.insertBefore(msg, log.firstChild) : log.appendChild(msg);
            }
        });
        this.options = {
            selectable: true,
            onAdd: function (item, callback) {
                document.getElementById('datums').innerHTML = item.group;
                document.getElementById('datums2').innerHTML = item.start;
            },
            onRemove: function (item, callback) {
                document.getElementById('datums').innerHTML = item.id;
                document.getElementById('datums2').innerHTML = callback;
            },
            start: startDateShown,
            end: endDateShown,
        };
    };
    TimeLineComponent.prototype.setLoggedInUserKey = function () {
    };
    TimeLineComponent.prototype.setCoverageAcceptances = function () {
    }; // end of getTimelineData2
    TimeLineComponent.prototype.removeBads = function () {
        for (var key in this.data2._data) {
            if (this.data2._data[key].start > this.data2._data[key].end) {
                delete this.data2._data[key];
            }
        }
    };
    /**********  make a dataStructure to hold all names of tA holders  */
    TimeLineComponent.prototype.setGroups = function (s) {
        this.nameList = new Array();
        this.groupsArray = new Array();
        for (var i = 0; i < s.length; i++) { // step thru the data
            if (s._data[i] && this.nameList.indexOf(s._data[i].content) < 0) { // if name is not already in the dS
                this.nameList.push(s._data[i].content); // put it in the dS 
                this.nameToUserId[i] = { lastName: s._data[i].content, userid: s._data[i].userkey }; // make dS of lastName ; userkey
                this.useridToUserkeys[i] = { userid: s._data[i].userid, userkey: s._data[i].userkey }; // dS userid : userkey
                this.contentArray[s._data[i].userkey] = s._data[i].content; // used to get 'content' param to add to dataSet.
            }
        }
        this.nameList.sort(); // alphabetize the nameList
        var index = this.useridToUserkeys.map(function (e) { return e.userid; }).indexOf(this.userid); // find arrayIndex of userId    
        if (this.useridToUserkeys[index]) { // Someone may use page who is NOT a goAwayer. 
            this.userkey = this.useridToUserkeys[index].userkey;
            this.loggedInLastName = s._data[index].LastName;
            this.loggedInFirstName = s._data[index].FirstName;
        } // the userKey of the loggedIn user
    };
    TimeLineComponent.prototype.assignGroups = function () {
        for (var property in this.data2._data) {
            if (this.data2._data.hasOwnProperty(property)) { // 'hasOwnProperty' is typescript to see it a p is in arry
                this.data2._data[property].group = this.nameList.indexOf(this.data2._data[property].content); // set the correct groupNumber
                //  if (this.data2._data[property].approved === 1) {
                //    this.data2._data[property].style = 'color:green';
                //  }
            }
        }
    };
    /*************  remove the tA from display working, needs dataBase part **************/
    TimeLineComponent.prototype.remove = function () {
        this.data2.remove(this._id); // remove LOCALLY
        this.showControls = false; // turn off controls             
        this.dB_PP.editColNames = ['reasonIdx']; // the col which holds the DELETE sign
        this.dB_PP.editColVals = ['99']; // the DELETE code
        this.dB_PP.whereColName = ['vidx'];
        this.dB_PP.whereColVal = [document.getElementById('vidx').innerText]; // the DOM element link to the timeline
        this.genEditSvce.genDB_POST(this.dB_PP); // do the dB operation
    };
    TimeLineComponent.prototype.sendDeleteEmail = function () {
        var emp = {
            action: "sendEmail2",
            subject: "Time Away Deleted",
            msg: "The Time Away for " + this.data2._data[this._id]['LastName'] + " starting " + this.data2._data[this._id]['start'].substr(0, 10) +
                " ending " + this.data2._data[this._id]['end'].substr(0, 10) + " has been deleted. ",
            addr: ["flonberg@partners.org"]
        };
        this.genEditSvce.genPOST(emp).subscribe(function (res) {
            console.log("res from sendEmail2 %o", res);
        });
    };
    TimeLineComponent.prototype.storeEdit = function (type, e) {
        if (e.value) {
            this.editColNames.push(type);
            this.editColVals.push(e.value);
        }
        else if (e.target) {
            this.editColNames.push(type);
            this.editColVals.push(e.target.value);
            var dateForDataSet = e.target.value + " 00:00:00";
            if (type == 'startDate') {
                this.needStartEmail = true;
                this.EDO.OldStartDate = this.data2._data[this._id]['start'].slice(0, 10);
                ;
                this.EDO.NewStartDate = e.target.value;
                this.data2.update({ id: this._id, start: dateForDataSet }); // for use in the email to Brian
            }
            if (type == 'endDate') {
                this.needStartEmail = true;
                this.EDO.OldEndDate = this.data2._data[this._id]['end'].slice(0, 10);
                ;
                this.EDO.NewEndDate = e.target.value;
                this.data2.update({ id: this._id, end: dateForDataSet });
                this.EDO.NewEndDate = e.target.value;
            }
        }
    };
    TimeLineComponent.prototype.saveEdits = function () {
        this.editColNames.shift(); // remove garbage zeroth element
        this.editColVals.shift();
        var eP = {
            action: 'editAndLog',
            tableName: 'vacation3',
            editColNames: this.editColNames,
            editColVals: this.editColVals,
            whereColName: ['vidx'],
            whereColVal: [this.data2._data[this._id]['vidx']],
            userid: this.userid
        };
        if (this.needStartEmail)
            this.sendStartOrEndDateEmail();
        this.genEditSvce.genPOST(eP).subscribe(function (res) {
            console.log("res from updatel %o", res);
        });
    };
    TimeLineComponent.prototype.sendStartOrEndDateEmail = function () {
        var link33 = this.genEditSvce.urlBase + "/approveTA.php?vidx=" + this.data2._data[this._id].vidx;
        if (this.needStartEmail) {
            var msg = "<p>The  Time Away of " + this.data2._data[this._id]['LastName'] + ' has changed';
            if (typeof this.EDO.NewStartDate === 'string') {
                msg += " from Start Date of " + this.EDO.OldStartDate + " to " + this.EDO.NewStartDate + ',';
            }
            if (typeof this.EDO.NewEndDate === 'string') {
                msg += " from End Date of " + this.EDO.OldEndDate + " to " + this.EDO.NewEndDate + ',';
            }
            msg += "</p> <p> To approve this change click on a <a href=" + link33 + "> Approve Change </a>";
            var emp = {
                action: "sendEmail2",
                addr: { "Dev": ["flonberg@partners.org"],
                    "Prod": ["flonberg@gmail.com"]
                },
                msg: msg,
                subject: "Time Away Change",
                debug: 1 // change to '0' to send email to actual recipients
            };
            this.genEditSvce.genPOST(emp).subscribe(function (res) {
                console.log("res from sendEmail2 %o", res);
            });
            console.log("Brian Email msg is " + msg);
        }
    };
    TimeLineComponent.prototype.editGen = function (type, event) {
        var dateForDataSet = '';
        var shownId = this._id;
        var messageUsed = "";
        console.log('editGen ' + this.data2._data[this._id]['approved'] + "thisis" + shownId);
        if (type == 'start' || type == 'end') { // if it is a date
            messageUsed = "The " + type + " date of the Time Away for " + this.data2._data[this._id]['LastName'] + " has changed  from "
                + this.data2._data[this._id]['start'].substr(0, 10) + " to " + event.target.value +
                ". You can approve this change by clicking on <p><a href=" + link33 + "> Approve Change </a></p>";
            var changedDate = this.formatDateForTimeline(event.value); // make the string for local update
            dateForDataSet = event.target.value + " 00:00:00"; // make a date for dataSet
        }
        if (event.target && event.target.value) // the editColVal can be a target.balue
            this.dB_PP.editColVals = [event.target.value];
        if (event.value) // or it can be an event.value
            this.dB_PP.editColVals = [event.value];
        console.log('edtied local ');
        if (type == 'reason') {
            this.dB_PP.editColNames = ['reason'];
            this.data2.update({ id: this._id, reason: dateForDataSet });
        }
        if (type !== 'del') {
            var link33 = this.genEditSvce.urlBase + "/approveTA.php?vidx=" + this.data2._data[this._id].vidx;
            var emp = {
                action: "sendEmail2",
                addr: { "Dev": "flonberg@partners.org",
                    "Prod": "flonberg@gmail.com"
                    //  "Prod":"bnapolitano@partners.org"
                },
                msg: messageUsed,
                subject: "Time Away Change"
            };
            console.log(" 865 emp %o ", emp);
            this.genEditSvce.genPOST(emp).subscribe(function (res) {
                console.log("res from sendEmail2 %o", res);
            });
        }
        if (type === 'start') {
            this.data2.update({ id: this._id, start: dateForDataSet }); // do the local update
            this.data2.update({ id: this._id, style: 'color:red' });
            this.startDateEdited = true;
            this.dB_PP.editColNames = ['startDate', 'approved'];
            this.dB_PP.editColVals.push('0');
            this.dB_PP.needEmail = "dateChange";
        } // update startDate
        if (type === 'end') {
            emp.msg = "The end date of the Time Away for " + this.data2._data[this._id]['lastName'] + " has changed  from " + this.data2._data[this._id]['end'].substr(0, 10) +
                "to " + event.target.value + ". You can approve this change by clicking on <p><a href + " + link33 + "> Approve Change </a> </p>";
            this.data2.update({ id: this._id, end: dateForDataSet });
            this.data2.update({ id: this._id, style: 'color:red' });
            this.endDateEdited = true;
            this.dB_PP.editColNames = ['endDate', 'approved'];
            this.dB_PP.editColVals.push('0');
            this.dB_PP.needEmail = "dateChange";
        }
        if (type == 'note') {
            this.dB_PP.editColNames = ['note'];
            this.dB_PP.editColVals = [event.target.value];
        }
        if (type == 'del') {
            this.drawEditControls = false;
            this.dB_PP.editColNames = ['reasonIdx'];
            this.dB_PP.editColVals = ['99'];
            this.data2.remove({ id: this._id });
        }
        if (type == 'approve') {
            this.dB_PP.editColNames = ['approved'];
            this.dB_PP.editColVals = ['1'];
            this.data2.update({ id: this._id, style: 'color:orange' });
        }
        this.dB_PP.action = 'editAndLog';
        this.dB_PP.userid = this.userid;
        console.log("839 this.dB_PP %o", this.dB_PP);
        this.genEditSvce.genDB_POST(this.dB_PP); // do the dB edit.
    };
    TimeLineComponent.prototype.makeDateString = function (event) {
        var editTime = new Date(event.value); // date returned by DatePicker
        var month = editTime.getMonth() + 1; // get month to assemble to edit
        if (month <= 9) {
            var monthString = '0' + month;
        }
        var day = editTime.getDate(); // mm
        var year = editTime.getFullYear(); // mm
        var s = month + '-' + editTime.getDate() + '-' + editTime.getFullYear();
        return s;
    };
    /**************  format date as yyyy-mm-dd  for dataBase ********************/
    TimeLineComponent.prototype.formatDateForTimeline = function (date) {
        var d = new Date(date);
        var month = '' + (d.getMonth() + 1);
        var day = '' + d.getDate();
        var year = d.getFullYear();
        if (month.length < 2) {
            month = '0' + month;
        }
        if (day.length < 2) {
            day = '0' + day;
        }
        return year + '-' + month + '-' + day + ' 00:00:00';
    };
    /*
      approve() {
        console.log('appreove' + this._id);
        this.data2.update({id: this._id, style: 'color:blue'});
    
        this.data2._data[this._id].approved = 1;
     //   this.editReason(1, 'approved');
      }
      */
    TimeLineComponent.prototype.setNewTimeAway2 = function () {
        this.newTimeAway2 = true;
        this.helpArray = [
            'Start Date, End Date and Reason must be entered before new Time Aways can be Submitted.  '
        ];
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])('visjsTimeline', { static: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"])
    ], TimeLineComponent.prototype, "timelineContainer", void 0);
    TimeLineComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-time-line',
            template: __webpack_require__(/*! ./time-line.component.html */ "./src/app/time-line/time-line.component.html"),
            styles: [__webpack_require__(/*! ./time-line.component.css */ "./src/app/time-line/time-line.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"], _gen_edit_service__WEBPACK_IMPORTED_MODULE_1__["GenEditService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["DatePipe"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]])
    ], TimeLineComponent);
    return TimeLineComponent;
}());



/***/ }),

/***/ "./src/app/week-view/week-view.component.css":
/*!***************************************************!*\
  !*** ./src/app/week-view/week-view.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "table {\n    table-layout:fixed;\n    border-collapse:collapse\n}\n.todayClass {\n    background-color:yellow;\n}\ntr:nth-child(even) {\n    background-color: #d6d6d6;\n  }\ntable.main {\n    width:800px;\n}\n.white {\n    background-color:white\n}\ntr:hover {\n    background-color: #ffff99;\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvd2Vlay12aWV3L3dlZWstdmlldy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksa0JBQWtCO0lBQ2xCO0FBQ0o7QUFDQTtJQUNJLHVCQUF1QjtBQUMzQjtBQUNBO0lBQ0kseUJBQXlCO0VBQzNCO0FBQ0Y7SUFDSSxXQUFXO0FBQ2Y7QUFDQTtJQUNJO0FBQ0o7QUFDQTtJQUNJLHlCQUF5QjtFQUMzQiIsImZpbGUiOiJzcmMvYXBwL3dlZWstdmlldy93ZWVrLXZpZXcuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbInRhYmxlIHtcbiAgICB0YWJsZS1sYXlvdXQ6Zml4ZWQ7XG4gICAgYm9yZGVyLWNvbGxhcHNlOmNvbGxhcHNlXG59XG4udG9kYXlDbGFzcyB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjp5ZWxsb3c7XG59XG50cjpudGgtY2hpbGQoZXZlbikge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNkNmQ2ZDY7XG4gIH1cbnRhYmxlLm1haW4ge1xuICAgIHdpZHRoOjgwMHB4O1xufSAgXG4ud2hpdGUge1xuICAgIGJhY2tncm91bmQtY29sb3I6d2hpdGVcbn1cbnRyOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZjk5O1xuICB9Il19 */"

/***/ }),

/***/ "./src/app/week-view/week-view.component.html":
/*!****************************************************!*\
  !*** ./src/app/week-view/week-view.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<table><tr>\n    <td   class=\"small\">\n      \n        <button (click) = 'makeWeek(-1)'  mat-raised-button class=\"accent\"  >Previous Week </button>\n      </td>\n\n      <td   class=\"small\">\n          <button (click) = 'makeWeek(1)'  mat-raised-button class=\"accent\"  >Next Week </button>\n        </td>\n    </tr>    \n</table>\n<table class='main'>\n  <tr class='white'>\n   <th></th><th></th>\n    <th  *ngFor = \"let item of calHeadings\">\n      <table [class] = 'isToday(item.date)'>\n        <tr><th >{{ item.dayName }} </th> </tr>  \n        <tr><th   [class]='isToday(item.date)'>  {{ item.monthDay }} </th> </tr>\n      </table>\n    </th> \n  </tr>\n  <tr *ngFor = 'let item of WeekDutyNames' >\n    <td style=\"font-weight:bold;\" >  {{ item.name }} </td>\n    <td> {{ item.timeSpan }} </td>\n    <td *ngFor = \"let item2 of calHeadings\"> \n      <div *ngIf = 'physicsMonthlyDuties && physicsMonthlyDuties[item2.date][item.Idx]'>\n      {{ physicsMonthlyDuties[item2.date][item.Idx]['lNN'] }}  \n      </div>\n      <div *ngIf = \"regularDuties[item.Idx] && fromION[regularDuties[item.Idx]['phys1']]\"> \n        {{ fromION[regularDuties[item.Idx]['phys1']]['LastName'] }} </div>\n    </td>\n  </tr>\n</table>\n<p> Physicist A is responsible for new plan checks on L1, L2, L3 that occur during the assigned shift </p>\n<p> Physicist B is responsible for new plan checks on L4, L5, L6 that occur during the assigned shift </p>"

/***/ }),

/***/ "./src/app/week-view/week-view.component.ts":
/*!**************************************************!*\
  !*** ./src/app/week-view/week-view.component.ts ***!
  \**************************************************/
/*! exports provided: WeekViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WeekViewComponent", function() { return WeekViewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _five_day_cal_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../five-day-cal.service */ "./src/app/five-day-cal.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _gen_edit_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../gen-edit.service */ "./src/app/gen-edit.service.ts");






var WeekViewComponent = /** @class */ (function () {
    function WeekViewComponent(http, genEditSvce, router, activatedRoute, fiveDayCalSvce) {
        this.http = http;
        this.genEditSvce = genEditSvce;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.fiveDayCalSvce = fiveDayCalSvce;
        this.advance = 0;
    }
    WeekViewComponent.prototype.ngOnInit = function () {
        this.makeWeek(this.advance);
        console.log("33   calHeadins %o", this.calHeadings);
        this.getFromION();
        this.getDutyNames();
        this.getDutyOwners();
        this.getRegularDuties();
        var todayDate = new Date();
        this.todayString = todayDate.toISOString().split('T')[0];
    };
    WeekViewComponent.prototype.makeWeek = function (advance) {
        this.advance += advance;
        this.fiveDayCalSvce.makeWeek(this.advance);
        this.calHeadings = this.fiveDayCalSvce.dS;
    };
    WeekViewComponent.prototype.isToday = function (s) {
        if (s == this.todayString)
            return "todayClass";
        else
            return "white";
    };
    WeekViewComponent.prototype.page = function () {
    };
    WeekViewComponent.prototype.getFromION = function () {
        var _this = this;
        this.genEditSvce.genGet('REST_GET.php?action=RgetJOINFromION').subscribe(function (res) {
            _this.setFromION(res);
        }, function (err) {
            console.log("error 223");
            console.log(err);
        });
    };
    WeekViewComponent.prototype.setFromION = function (res) {
        console.log("  43    getFromION %o", res);
        this.fromION = res;
    };
    WeekViewComponent.prototype.getDutyOwners = function () {
        var _this = this;
        //  this.genEditSvce.getPMDs('fjl3').subscribe(
        this.genEditSvce.genGet('REST_GET.php?action=getPMDs&userid=fjl3').subscribe(function (res) {
            _this.setPhysicsMonthlyDuties(res);
        }, function (err) {
            console.log("error 223");
            console.log(err);
        });
    };
    WeekViewComponent.prototype.setPhysicsMonthlyDuties = function (val) {
        this.physicsMonthlyDuties = val['data'];
        console.log("241 %o", this.physicsMonthlyDuties);
    };
    WeekViewComponent.prototype.getRegularDuties = function () {
        var _this = this;
        var arg = { 'selStr': 'SELECT * FROM PhysicsRegularDuty', 'key': 'serviceid' };
        this.genEditSvce.getWithSelString(arg)
            .subscribe(function (response) {
            _this.setRegDuties(response);
        });
    };
    WeekViewComponent.prototype.setRegDuties = function (s) {
        console.log(" 81   rebDuties %o", s);
        this.regularDuties = s;
    };
    WeekViewComponent.prototype.getDutyNames = function () {
        var _this = this;
        var arg = { 'selStr': 'SELECT * FROM PhysicsDuty WHERE nomOrder > 0  ORDER bY nomOrder' };
        this.genEditSvce.getWithSelString(arg)
            .subscribe(function (response) {
            _this.setDutyNames(response);
        });
    };
    WeekViewComponent.prototype.setDutyNames = function (dN) {
        console.log("dutyNames is %o", dN);
        this.WeekDutyNames = dN;
    };
    WeekViewComponent.prototype.shift = function (n) {
        this.advance += n;
    };
    WeekViewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-week-view',
            template: __webpack_require__(/*! ./week-view.component.html */ "./src/app/week-view/week-view.component.html"),
            styles: [__webpack_require__(/*! ./week-view.component.css */ "./src/app/week-view/week-view.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"], _gen_edit_service__WEBPACK_IMPORTED_MODULE_5__["GenEditService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _five_day_cal_service__WEBPACK_IMPORTED_MODULE_1__["FiveDayCalService"]])
    ], WeekViewComponent);
    return WeekViewComponent;
}());



/***/ }),

/***/ "./src/app/window.provider.ts":
/*!************************************!*\
  !*** ./src/app/window.provider.ts ***!
  \************************************/
/*! exports provided: WINDOW, WINDOW_PROVIDERS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WINDOW", function() { return WINDOW; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WINDOW_PROVIDERS", function() { return WINDOW_PROVIDERS; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");

var WINDOW = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('window');
var windowProvider = {
    provide: WINDOW,
    useFactory: function () { return window; }
};
var WINDOW_PROVIDERS = [
    windowProvider
];


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/franklinlonberg/Angular/vacMan8202020/VacManTimeline/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map