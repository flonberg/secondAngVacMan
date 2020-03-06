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

module.exports = ".example-form {\n    min-width: 150px;\n    max-width: 500px;\n    width: 100%;\n  }\n  \n  .example-full-width {\n    width: 100%;\n  }\n  \n  .example-container {\n    display: flex;\n    flex-direction: column;\n  }\n  \n  html *\n{\n   font-size: 8 !important;\n   color: red !important;\n   font-family: Arial !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxnQkFBZ0I7SUFDaEIsZ0JBQWdCO0lBQ2hCLFdBQVc7RUFDYjs7RUFFQTtJQUNFLFdBQVc7RUFDYjs7RUFFQTtJQUNFLGFBQWE7SUFDYixzQkFBc0I7RUFDeEI7O0VBQ0E7O0dBRUMsdUJBQXVCO0dBQ3ZCLHFCQUFxQjtHQUNyQiw2QkFBNkI7QUFDaEMiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5leGFtcGxlLWZvcm0ge1xuICAgIG1pbi13aWR0aDogMTUwcHg7XG4gICAgbWF4LXdpZHRoOiA1MDBweDtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuICBcbiAgLmV4YW1wbGUtZnVsbC13aWR0aCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cblxuICAuZXhhbXBsZS1jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgfVxuICBodG1sICpcbntcbiAgIGZvbnQtc2l6ZTogOCAhaW1wb3J0YW50O1xuICAgY29sb3I6IHJlZCAhaW1wb3J0YW50O1xuICAgZm9udC1mYW1pbHk6IEFyaWFsICFpbXBvcnRhbnQ7XG59Il19 */"

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
                    { path: 'WWD/:docidx', component: _dose_fx_dose_fx_component__WEBPACK_IMPORTED_MODULE_12__["DoseFxComponent"] },
                    { path: 'VacMan**', component: _time_line_time_line_component__WEBPACK_IMPORTED_MODULE_16__["TimeLineComponent"] },
                    { path: 'VacMan/:userid', component: _time_line_time_line_component__WEBPACK_IMPORTED_MODULE_16__["TimeLineComponent"] },
                    { path: '**', component: _time_line_time_line_component__WEBPACK_IMPORTED_MODULE_16__["TimeLineComponent"] }
                ])
            ],
            schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["CUSTOM_ELEMENTS_SCHEMA"]],
            providers: [_angular_common__WEBPACK_IMPORTED_MODULE_19__["DatePipe"], _time_line_time_line_component__WEBPACK_IMPORTED_MODULE_16__["TimeLineComponent"]],
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
    DoseFxComponent.prototype.editVal = function ($event, colName) {
        this.editParamSet.editParams[0].colName = colName;
        if ($event.target) // for 'input' fields
            this.editParamSet.editParams[0].editVal = $event.target.value;
        if ($event.value) // for 'select' fields
            this.editParamSet.editParams[0].editVal = $event.value;
        if (colName == 'fxDose' && +this.form.get('Dose').value > 0) { // if enteredVal is fxDose and Dose > 0 set numFx=Dose/fxDose
            var numFxE = +this.form.get('Dose').value / $event.target.value; // calulate Dose/fxDose
            this.form.get('numFx').setValue(numFxE); // set value of numFx in form
            var pushVal = {
                colName: 'numFx',
                editVal: String(numFxE)
            };
            this.editParamSet.editParams.push(pushVal); // push 
        }
        this.DoseFxSvce.update(this.editParamSet); // do the update. 
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



var GenEditService = /** @class */ (function () {
    function GenEditService(http) {
        this.http = http;
    }
    GenEditService.prototype.update = function (dBParams) {
        console.log('editPatams ', dBParams);
        var url = 'http://blackboard-dev.partners.org/dev/FJL/vacMan/RESTupdatePOST.php';
        //    const url = 'http://blackboard-dev.partners.org/dev/RESTupdatePOST.php';
        this.http.post(url, JSON.stringify(dBParams)).subscribe(function (val) {
            console.log("POST call", val);
        });
    };
    GenEditService.prototype.insert = function (dBParams) {
        console.log('inserParams ', dBParams);
        var url = 'http://blackboard-dev.partners.org/dev/FJL/vacMan/RESTinsertPOST.php';
        //    const url = 'http://blackboard-dev.partners.org/dev/RESTinsertPOST.php';
        this.http.post(url, JSON.stringify(dBParams)).subscribe(function (val) {
            console.log("POST call", val);
        });
    };
    GenEditService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], GenEditService);
    return GenEditService;
}());



/***/ }),

/***/ "./src/app/month-view/month-view.component.css":
/*!*****************************************************!*\
  !*** ./src/app/month-view/month-view.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n  body{\n    font-size:8pt;\n    font-family:sans-serif;\n}\n  button {\n    background-color: var(--accent);\n}\n  .title {\n    font-style: italic;\n    font-size:200% !important;\n    color:blue;\n}\n  td {\n    border:solid;\n    width: 200px;\n    height: 100px;\n    font-family:sans-serif;\n}\n  .inMonth {\n    background-color: rgb(245, 230, 230);  \n}\n  .outMonth {\n    background-color: var(--disable)\n}\n  #header {\n    text-align: center;\n\n}\n  #legend {\n    height: 80px;\n    width:100px;\n  \n}\n  .dow {\n    color:black;\n}\n  .accent {\n    background-color: var(--accent);\n}\n  .smallTable {\n    table-layout:fixed;\n    width:200px;\n    height:40px;;\n}\n  tr {\n    color:black;\n}\n  caption {\n    color:black;\n    font-size:100%;\n}\n  .flex-container {\n    display: flex;\n    justify-content:center;\n    width:100%;\n    height:120px;\n \n  }\n  .flex-container > div {\n    margin: 10px;\n    padding: 20px;\n    font-size:100%;\n  }\n  .one {\n      background-color:rgb(212, 212, 248);\n  }\n  .two {\n    background-color:rgb(181, 181, 221)\n    }\n  .three {\n    background-color:rgb(153, 153, 214)\n    }\n  .four {\n    background-color:rgb(124, 124, 168)\n    }\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9udGgtdmlldy9tb250aC12aWV3LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtFQUNFO0lBQ0UsYUFBYTtJQUNiLHNCQUFzQjtBQUMxQjtFQUNFO0lBQ0UsK0JBQStCO0FBQ25DO0VBQ0E7SUFDSSxrQkFBa0I7SUFDbEIseUJBQXlCO0lBQ3pCLFVBQVU7QUFDZDtFQUNBO0lBQ0ksWUFBWTtJQUNaLFlBQVk7SUFDWixhQUFhO0lBQ2Isc0JBQXNCO0FBQzFCO0VBQ0E7SUFDSSxvQ0FBb0M7QUFDeEM7RUFDQTtJQUNJO0FBQ0o7RUFDQTtJQUNJLGtCQUFrQjs7QUFFdEI7RUFDQTtJQUNJLFlBQVk7SUFDWixXQUFXOztBQUVmO0VBQ0E7SUFDSSxXQUFXO0FBQ2Y7RUFDQTtJQUNJLCtCQUErQjtBQUNuQztFQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxXQUFXO0FBQ2Y7RUFDQTtJQUNJLFdBQVc7QUFDZjtFQUNBO0lBQ0ksV0FBVztJQUNYLGNBQWM7QUFDbEI7RUFDQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsVUFBVTtJQUNWLFlBQVk7O0VBRWQ7RUFFQTtJQUNFLFlBQVk7SUFDWixhQUFhO0lBQ2IsY0FBYztFQUNoQjtFQUNBO01BQ0ksbUNBQW1DO0VBQ3ZDO0VBQ0E7SUFDRTtJQUNBO0VBQ0o7SUFDSTtJQUNBO0VBQ0o7SUFDSTtJQUNBIiwiZmlsZSI6InNyYy9hcHAvbW9udGgtdmlldy9tb250aC12aWV3LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgYm9keXtcbiAgICBmb250LXNpemU6OHB0O1xuICAgIGZvbnQtZmFtaWx5OnNhbnMtc2VyaWY7XG59XG4gIGJ1dHRvbiB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYWNjZW50KTtcbn1cbi50aXRsZSB7XG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xuICAgIGZvbnQtc2l6ZToyMDAlICFpbXBvcnRhbnQ7XG4gICAgY29sb3I6Ymx1ZTtcbn1cbnRkIHtcbiAgICBib3JkZXI6c29saWQ7XG4gICAgd2lkdGg6IDIwMHB4O1xuICAgIGhlaWdodDogMTAwcHg7XG4gICAgZm9udC1mYW1pbHk6c2Fucy1zZXJpZjtcbn1cbi5pbk1vbnRoIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQ1LCAyMzAsIDIzMCk7ICBcbn1cbi5vdXRNb250aCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGlzYWJsZSlcbn1cbiNoZWFkZXIge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcblxufVxuI2xlZ2VuZCB7XG4gICAgaGVpZ2h0OiA4MHB4O1xuICAgIHdpZHRoOjEwMHB4O1xuICBcbn1cbi5kb3cge1xuICAgIGNvbG9yOmJsYWNrO1xufVxuLmFjY2VudCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYWNjZW50KTtcbn1cblxuLnNtYWxsVGFibGUge1xuICAgIHRhYmxlLWxheW91dDpmaXhlZDtcbiAgICB3aWR0aDoyMDBweDtcbiAgICBoZWlnaHQ6NDBweDs7XG59XG50ciB7XG4gICAgY29sb3I6YmxhY2s7XG59XG5jYXB0aW9uIHtcbiAgICBjb2xvcjpibGFjaztcbiAgICBmb250LXNpemU6MTAwJTtcbn1cbi5mbGV4LWNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO1xuICAgIHdpZHRoOjEwMCU7XG4gICAgaGVpZ2h0OjEyMHB4O1xuIFxuICB9XG4gIFxuICAuZmxleC1jb250YWluZXIgPiBkaXYge1xuICAgIG1hcmdpbjogMTBweDtcbiAgICBwYWRkaW5nOiAyMHB4O1xuICAgIGZvbnQtc2l6ZToxMDAlO1xuICB9XG4gIC5vbmUge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjpyZ2IoMjEyLCAyMTIsIDI0OCk7XG4gIH1cbiAgLnR3byB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjpyZ2IoMTgxLCAxODEsIDIyMSlcbiAgICB9XG4udGhyZWUge1xuICAgIGJhY2tncm91bmQtY29sb3I6cmdiKDE1MywgMTUzLCAyMTQpXG4gICAgfVxuLmZvdXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6cmdiKDEyNCwgMTI0LCAxNjgpXG4gICAgfVxuXG4iXX0= */"

/***/ }),

/***/ "./src/app/month-view/month-view.component.html":
/*!******************************************************!*\
  !*** ./src/app/month-view/month-view.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"wholePage\">\n  <div id=\"header\" class=\"flex-container\">\n    <div>\n      <button (click) = 'nextMonth(-1)'  mat-raised-button class=\"accent\"  >Previous Month </button>\n    </div>\n    <div class=\"title\"> {{ monthName }}</div> \n    <div>\n    <button (click) = 'nextMonth(1)'   mat-raised-button class=\"accent\"  >Next Month </button>\n    </div>  \n    <div id=\"legend\">\n      <div>\n        <table class=\"smallTable\">\n            <tr class=\"one\"><th>MorningA-IORT</th></tr>\n            <tr class=\"two\"><th>MorningB</th></tr>\n            <tr class=\"three\"><th>EveningA</th></tr>\n            <tr class=\"four\"><th>EveningB</th></tr>\n        </table>\n      </div>    \n    </div>\n  </div>\n  \n  <div id=\"header\" class=\"flex-container\">\n    <table>\n      <tr class=\"dow\">\n          <th > Monday</th>\n          <th> Tuesday</th>\n          <th> Wednesday</th>\n          <th> Thursday</th>\n          <th> Friday</th>\n      </tr>\n      <tr *ngFor = \" let week of daysS\">\n        <td [class]=\"dayEl.isInCurrMonth\"   *ngFor=\" let dayEl of week \">\n   \n          <table style=\"width:100%;\">\n            <caption> {{ dayEl.dayNumber }} </caption>\n            <tr class=\"one\"><th>Mauceri</th></tr>\n            <tr class=\"two\"><th>2</th></tr>\n            <tr class=\"three\"><th>3</th></tr>\n            <tr class=\"four\"><th>4</th></tr>\n          </table>\n        </td>\n      </tr>\n      \n    </table>\n  </div>\n</div>    "

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");



var MonthViewComponent = /** @class */ (function () {
    function MonthViewComponent(datePipe) {
        this.datePipe = datePipe;
    }
    MonthViewComponent.prototype.ngOnInit = function () {
        this.nextMonth(0); // draw the calendar for current month
        this.monthNumber = 0; // number for going forward or back. 
    };
    MonthViewComponent.prototype.nextMonth = function (nn) {
        this.daysS = Array(Array()); // make array to hold daysS structures
        var tmpDate = new Date(); // this is the date which will be incremented
        this.date = new Date('2019-01-28'); //  this will be set to today in production
        this.baseDate = new Date('2018-01-01');
        this.monthNumber += nn; // nn will be either +1 of -1 to go forward or bacf
        if (nn != 0) // if date has been changed by button  
            this.date = new Date(this.date.setMonth(this.date.getMonth() + this.monthNumber)); // make the new date
        this.monthName = this.datePipe.transform(this.date, 'MMMM-yyyy'); // used for the caption on the calendar                           // set the date, done by queryParam
        var firstDayOfShownMonth = new Date(this.date.getFullYear(), this.date.getMonth(), 1);
        var monthShowNumber = this.date.getMonth(); // use to grey out days NOT in monthShown
        var dowFD = firstDayOfShownMonth.getDay(); // det dayOfWeek e.g. 5 for Friday, 0 = Sunday, of firstDayOfMonthShown
        var lastDayPrevMonth = new Date(this.date.getFullYear(), this.date.getMonth(), 0);
        var lastDayNum = +this.datePipe.transform(lastDayPrevMonth, 'd'); //  e.g. for March   ->  31
        var firstDayOnCal = lastDayNum - (dowFD - 2); // get dayNum of first Monday on Cal       //  E.g. April 1 is Wed. to firstDayShown is March 29, so firstDanOnCal = 29
        /////////////////            make days of first week                                        \\\\\\\\\\\\\\\\\\\
        if (dowFD > 0 && dowFD < 6) { // if the firstDayOfMonth is NOT Sat or Sun  
            for (var i = 0; i < 5; i++) { // make the 5 days of the first week;
                if (!this.daysS[0]) //  if array row has not been defined
                    this.daysS[0] = Array(); // define the array for the Week
                this.daysS[0][i] = {}; // define an instance of the daysS interface
                this.daysS[0][i].dayNumber = firstDayOnCal; // set dayNumber element of interface
                if (i == 0) {
                    this.daysS[0][i].date = new Date(lastDayPrevMonth.getFullYear(), lastDayPrevMonth.getMonth(), firstDayOnCal); // set first date on Calendar in array
                    this.daysS[0][i].isInCurrMonth = tmpDate.getMonth() == monthShowNumber ? "inMonth" : "outMonth";
                    var diff = Math.abs(this.baseDate.getTime() - tmpDate.getTime());
                    this.daysS[0][i].daysSince = Math.ceil(diff / (1000 * 3600 * 24));
                }
                firstDayOnCal++;
                if (i > 0) { // go to next day
                    tmpDate = new Date(this.daysS[0][i - 1].date.getFullYear(), this.daysS[0][i - 1].date.getMonth(), this.daysS[0][i - 1].date.getDate()); // make a date to increment
                    // from the previous entry in the loop
                    tmpDate.setDate(tmpDate.getDate() + 1); // increment the date
                    this.daysS[0][i].date = new Date(tmpDate.getFullYear(), tmpDate.getMonth(), tmpDate.getDate()); // put that date in the dateBox of the MonthStructure
                    this.daysS[0][i].isInCurrMonth = tmpDate.getMonth() == monthShowNumber ? "inMonth" : "outMonth";
                    var diff = Math.abs(this.baseDate.getTime() - tmpDate.getTime());
                    this.daysS[0][i].daysSince = Math.ceil(diff / (1000 * 3600 * 24));
                }
                if (firstDayOnCal == lastDayNum + 1) // if it is greater than lastDayOfMonth
                    firstDayOnCal = 1; // go to 1, for the first day of monthShown 
            }
        }
        /////////////         take care of months which start on Sat or Sun                       \\\\\\\\\\\\\\\\\\\\\\\\\\\\
        if (dowFD == 6)
            tmpDate = new Date(this.date.getFullYear(), this.date.getMonth(), 2); // if firstDayOfMonth is Sat. increment by 2 days
        if (dowFD == 0)
            tmpDate = new Date(this.date.getFullYear(), this.date.getMonth(), 1); // if firstDayOfMonth is Sub. increment by 1 day  
        ///////////  make the suceeding weeks  \\\\\\\\\\\\\\\\\\\\\\\\\\ 
        for (var i = 1; i < 6; i++) { // max of 4 more weeks in calendar
            for (var j = 0; j < 5; j++) { // the days of each week
                tmpDate.setDate(tmpDate.getDate() + 1); // increment the date
                var dayNum = tmpDate.getDay(); // get dayNum of week  0 = Sunday  
                if (dayNum == 6) // if it is Saturday, increment by 2 days
                    tmpDate.setDate(tmpDate.getDate() + 2);
                if (!this.daysS[i]) //  if array row has not been defined
                    this.daysS[i] = Array();
                this.daysS[i][j] = {}; // define an instance of the daysS interface
                this.daysS[i][j].date = new Date(tmpDate.getFullYear(), tmpDate.getMonth(), tmpDate.getDate()); // put date in daysS dataStructure.
                this.daysS[i][j].dayNumber = tmpDate.getDate();
                this.daysS[i][j].isInCurrMonth = tmpDate.getMonth() == monthShowNumber ? "inMonth" : "outMonth";
                this.daysS[i][j].daysSince = this.daysSince(tmpDate);
            }
        }
        console.log("i is ");
    };
    MonthViewComponent.prototype.daysSince = function (d) {
        var diff = Math.abs(this.baseDate.getTime() - d.getTime());
        return Math.ceil(diff / (1000 * 3600 * 24));
    };
    MonthViewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-month-view',
            template: __webpack_require__(/*! ./month-view.component.html */ "./src/app/month-view/month-view.component.html"),
            styles: [__webpack_require__(/*! ./month-view.component.css */ "./src/app/month-view/month-view.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common__WEBPACK_IMPORTED_MODULE_2__["DatePipe"]])
    ], MonthViewComponent);
    return MonthViewComponent;
}());



/***/ }),

/***/ "./src/app/nav-bar-vm/nav-bar-vm.component.css":
/*!*****************************************************!*\
  !*** ./src/app/nav-bar-vm/nav-bar-vm.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* Style the tab */\n.tab {\n    overflow: hidden;\n  }\n/* Style the buttons inside the tab */\n.button {\n    background-color: inherit;\n    float: left;\n    border: none;\n    outline: none;\n    cursor: pointer;\n    padding: 8px 10px;\n    transition: 0.3s;\n    font-size: 14px;\n    border:solid;\n    border-color:gray;\n    border-top-left-radius: 15px;\n    border-top-right-radius: 15px;\n  }\n/* Change background color of buttons on hover */\n.button:hover {\n    background-color: rgb(231, 154, 154);\n  }\n.button.active {\n    font-style:underline;\n  }\n/* Create an active/current tablink class */\n.button.active {\n    background-color: rgb(97, 89, 89);\n  }\n/* Style the tab content */\n.tabcontent {\n    display: none;\n    padding: 6px 12px;\n    border: 1px solid #ccc;\n    border-top: none;\n  }\n \n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmF2LWJhci12bS9uYXYtYmFyLXZtLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsa0JBQWtCO0FBQ2xCO0lBQ0ksZ0JBQWdCO0VBQ2xCO0FBRUEscUNBQXFDO0FBQ3JDO0lBQ0UseUJBQXlCO0lBQ3pCLFdBQVc7SUFDWCxZQUFZO0lBQ1osYUFBYTtJQUNiLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsZ0JBQWdCO0lBQ2hCLGVBQWU7SUFDZixZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLDRCQUE0QjtJQUM1Qiw2QkFBNkI7RUFDL0I7QUFFQSxnREFBZ0Q7QUFDakQ7SUFDRyxvQ0FBb0M7RUFDdEM7QUFDQTtJQUNFLG9CQUFvQjtFQUN0QjtBQUVBLDJDQUEyQztBQUM1QztJQUNHLGlDQUFpQztFQUNuQztBQUVBLDBCQUEwQjtBQUMxQjtJQUNFLGFBQWE7SUFDYixpQkFBaUI7SUFDakIsc0JBQXNCO0lBQ3RCLGdCQUFnQjtFQUNsQiIsImZpbGUiOiJzcmMvYXBwL25hdi1iYXItdm0vbmF2LWJhci12bS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogU3R5bGUgdGhlIHRhYiAqL1xuLnRhYiB7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgfVxuICBcbiAgLyogU3R5bGUgdGhlIGJ1dHRvbnMgaW5zaWRlIHRoZSB0YWIgKi9cbiAgLmJ1dHRvbiB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogaW5oZXJpdDtcbiAgICBmbG9hdDogbGVmdDtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgb3V0bGluZTogbm9uZTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgcGFkZGluZzogOHB4IDEwcHg7XG4gICAgdHJhbnNpdGlvbjogMC4zcztcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgYm9yZGVyOnNvbGlkO1xuICAgIGJvcmRlci1jb2xvcjpncmF5O1xuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDE1cHg7XG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDE1cHg7XG4gIH1cbiAgXG4gIC8qIENoYW5nZSBiYWNrZ3JvdW5kIGNvbG9yIG9mIGJ1dHRvbnMgb24gaG92ZXIgKi9cbiAuYnV0dG9uOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjMxLCAxNTQsIDE1NCk7XG4gIH1cbiAgLmJ1dHRvbi5hY3RpdmUge1xuICAgIGZvbnQtc3R5bGU6dW5kZXJsaW5lO1xuICB9XG4gIFxuICAvKiBDcmVhdGUgYW4gYWN0aXZlL2N1cnJlbnQgdGFibGluayBjbGFzcyAqL1xuIC5idXR0b24uYWN0aXZlIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoOTcsIDg5LCA4OSk7XG4gIH1cbiAgXG4gIC8qIFN0eWxlIHRoZSB0YWIgY29udGVudCAqL1xuICAudGFiY29udGVudCB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgICBwYWRkaW5nOiA2cHggMTJweDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xuICAgIGJvcmRlci10b3A6IG5vbmU7XG4gIH1cbiAiXX0= */"

/***/ }),

/***/ "./src/app/nav-bar-vm/nav-bar-vm.component.html":
/*!******************************************************!*\
  !*** ./src/app/nav-bar-vm/nav-bar-vm.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class = \"tab\">\n  <nav  >\n    <button \n      class=\"button\"\n       *ngFor=\"let routeLink of routeLinks; let i = index;\"\n       [routerLink]=\"routeLink.link\"\n       routerLinkActive=\"tab-link-active\"\n       queryParamsHandling=\"merge\"\n       #rla=\"routerLinkActive\"\n       (click)=\"tlc.setIndex(i)\"\n        [routerLinkActiveOptions]=\"{exact: false}\"\n    >\n        {{routeLink.label }}\n    </button>\n  </nav>\n</div>\n\n\n<div > \n  <router-outlet ></router-outlet>\n</div>"

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
        this.routeLinks = [
            {
                label: 'Vacation Manager',
                link: './VacMan',
                index: 0,
            }, {
                label: 'Monthview',
                link: './MonthView',
                index: 1,
            }
        ];
    }
    NavBarVMComponent.prototype.ngOnInit = function () {
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

/***/ "./src/app/time-line/time-line.component.css":
/*!***************************************************!*\
  !*** ./src/app/time-line/time-line.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n#container {\n  border:solid;\n  overflow:auto;\n}\n#controls {\n  position:relative;\n  height:100px;\n  width:100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  text-align: center;\n}\n.vis-time-axis .vis-grid.vis-saturday,\n\t.vis-time-axis .vis-grid.vis-sunday {\n\t\tbackground: green\t\n\t  }\n.vis-time-axis .vis-grid.vis-today {\n\t\tbackground: #FFFFCC;\t\n\t  }\n.vis-item.red {\n    color: white;\n    background-color: red;\n    border-color: darkred;\n  }\n.form-width{\n    width:100px;\n  }\n.flex-container {\n    padding: 0;\n    margin: 0;\n    list-style: none;\n    display: flex;\n    width:80%;\n    justify-content: space-evenly;\n  }\n.wideItem {\n    width: 250px;\n  }\n/* \n.item {\n    width: 100px;\n    background-color:green;\n  }\n  */\n.space-evenly { \n    justify-content: space-evenly; \n  }\n.vis-item.approved {\n    color: white;\n    background-color: red;\n    border-color: darkred;\n  }\n.vis-item {\n    border-color: orange;\n    background-color: green;\n  }\n.smallLable {\n    color:blue;\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGltZS1saW5lL3RpbWUtbGluZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTtFQUNFLFlBQVk7RUFDWixhQUFhO0FBQ2Y7QUFDQTtFQUNFLGlCQUFpQjtFQUNqQixZQUFZO0VBQ1osVUFBVTtFQUNWLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLGtCQUFrQjtBQUNwQjtBQUNBOztFQUVFO0dBQ0M7QUFFRjtFQUNDLG1CQUFtQjtHQUNsQjtBQUNIO0lBQ0ksWUFBWTtJQUNaLHFCQUFxQjtJQUNyQixxQkFBcUI7RUFDdkI7QUFDRjtJQUNJLFdBQVc7RUFDYjtBQUNGO0lBQ0ksVUFBVTtJQUNWLFNBQVM7SUFDVCxnQkFBZ0I7SUFDaEIsYUFBYTtJQUNiLFNBQVM7SUFDVCw2QkFBNkI7RUFDL0I7QUFDRjtJQUNJLFlBQVk7RUFDZDtBQUNEOzs7OztHQUtFO0FBQ0g7SUFDSSw2QkFBNkI7RUFDL0I7QUFDRjtJQUNJLFlBQVk7SUFDWixxQkFBcUI7SUFDckIscUJBQXFCO0VBQ3ZCO0FBQ0Y7SUFDSSxvQkFBb0I7SUFDcEIsdUJBQXVCO0VBQ3pCO0FBQ0E7SUFDRSxVQUFVO0VBQ1oiLCJmaWxlIjoic3JjL2FwcC90aW1lLWxpbmUvdGltZS1saW5lLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbiNjb250YWluZXIge1xuICBib3JkZXI6c29saWQ7XG4gIG92ZXJmbG93OmF1dG87XG59XG4jY29udHJvbHMge1xuICBwb3NpdGlvbjpyZWxhdGl2ZTtcbiAgaGVpZ2h0OjEwMHB4O1xuICB3aWR0aDoxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLnZpcy10aW1lLWF4aXMgLnZpcy1ncmlkLnZpcy1zYXR1cmRheSxcblx0LnZpcy10aW1lLWF4aXMgLnZpcy1ncmlkLnZpcy1zdW5kYXkge1xuXHRcdGJhY2tncm91bmQ6IGdyZWVuXHRcblx0ICB9XG5cdCAgXG5cdC52aXMtdGltZS1heGlzIC52aXMtZ3JpZC52aXMtdG9kYXkge1xuXHRcdGJhY2tncm91bmQ6ICNGRkZGQ0M7XHRcblx0ICB9XG4udmlzLWl0ZW0ucmVkIHtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xuICAgIGJvcmRlci1jb2xvcjogZGFya3JlZDtcbiAgfVxuLmZvcm0td2lkdGh7XG4gICAgd2lkdGg6MTAwcHg7XG4gIH1cbi5mbGV4LWNvbnRhaW5lciB7XG4gICAgcGFkZGluZzogMDtcbiAgICBtYXJnaW46IDA7XG4gICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIHdpZHRoOjgwJTtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcbiAgfVxuLndpZGVJdGVtIHtcbiAgICB3aWR0aDogMjUwcHg7XG4gIH1cbiAvKiBcbi5pdGVtIHtcbiAgICB3aWR0aDogMTAwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjpncmVlbjtcbiAgfVxuICAqL1xuLnNwYWNlLWV2ZW5seSB7IFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5OyBcbiAgfVxuLnZpcy1pdGVtLmFwcHJvdmVkIHtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xuICAgIGJvcmRlci1jb2xvcjogZGFya3JlZDtcbiAgfVxuLnZpcy1pdGVtIHtcbiAgICBib3JkZXItY29sb3I6IG9yYW5nZTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjtcbiAgfVxuICAuc21hbGxMYWJsZSB7XG4gICAgY29sb3I6Ymx1ZTtcbiAgfSJdfQ== */"

/***/ }),

/***/ "./src/app/time-line/time-line.component.html":
/*!****************************************************!*\
  !*** ./src/app/time-line/time-line.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<!-- 'redraw' param not used at present, can be used if user scrolls beyond fetched data   -->\n\n<div >\n \n    <div id=\"container\">  \n        <div id=\"timeline\" #visjsTimeline *ngIf = \"redraw  && index == 0\"   (click) = \"clicked($event)\">\n        </div>\n        <input id=\"chData\" value=\"test\" >  \n    </div>      \n    <div *ngIf = \"!newTimeAway2\" >\n        <!------        This is the form used for adding new tAs --------------->\n        <button mat-raised-button (click) =\"setNewTimeAway2()\"  >New Time Away </button>\n    </div>\n \n<form [formGroup]=\"formG\" *ngIf = \"newTimeAway2\" (ngSubmit)=\"onSubmit()\">\n        <div class = \"heading\" > Enter New Time Away Paramters </div>\n    <mat-form-field class=\"item\">\n        <input matInput  placeholder= \"Start Date \"  formControlName=\"dateFrom\" type=\"date\" useValueAsDate title=\"click down triangle for calendar\" />\n    </mat-form-field>   \n    <mat-form-field class=\"item\">\n        <input matInput placeholder= \"End Date \"   formControlName=\"dateTo\" type=\"date\" useValueAsDate />\n    </mat-form-field>    \n    <mat-form-field>\n            <mat-label>Reason</mat-label>\n                <mat-select  \n                formControlName = \"reasonG\"  id='reasonId'>\n                        <mat-option  value=\"0\">Personal Vacation</mat-option>\n                        <mat-option  value=\"1\">Other</mat-option>\n                        <mat-option   value=\"2\">Meeting</mat-option>  \n                        \n                </mat-select>\n    </mat-form-field>\n    <mat-form-field  class=\"wideItem\">\n            <mat-label class=\"smallLabel\"> Note:</mat-label>\n            <textarea matInput  formControlName = \"noteG\"  cdkTextareaAutosize  #autosize=\"cdkTextareaAutosize\"  cdkAutosizeMinRows=\"1\"  cdkAutosizeMaxRows=\"5\" >\n            </textarea>\n        </mat-form-field > \n    <button mat-raised-button [disabled]=\"!formValidation\" title=\"Valid Start and End dates as well as Reason required\"  >Submit New Time Away</button>\n        <!-- <button type=\"submit\">Submit</button> -->\n\n    <div *ngIf=\"this.formG.controls.dateFrom.invalid && ( this.formG.controls.dateFrom.dirty || this.formG.controls.dateFrom.touched  ) \"\n        class=\"alert alert-danger\">\n            <div *ngIf=\"this.formG.controls.dateFrom.errors.required\">\n                Start Date is required.\n            </div>\n    </div>       \n    <div *ngIf=\"this.formG.controls.dateTo.invalid && ( this.formG.controls.dateTo.dirty || this.formG.controls.dateTo.touched  ) \"\n         class=\"alert alert-danger\">\n        <div *ngIf=\"this.formG.controls.dateTo.errors.required\">\n           End Date is required.\n        </div>\n    </div>  \n    <div class=\"alert alert-danger\" *ngIf=\"formG.errors\"  > {{ formG.errors?.dates | json }} </div>     \n</form>\n\n<div id=\"controls\" [formGroup] = 'form' *ngIf = \"drawControls\" >\n        <ul *ngIf = \"this.showControls && this._id \" class=\"flex-container  \">\n            <li class=\"item\">\n                <mat-form-field  class=\"item\" >\n                    <input matInput [matDatepicker]=\"picker\" placeholder= \"Start Date \" id='startDateInput' [readonly] = \"_readonly\"\n                    (dateInput)=\"editDate('start', $event)\" (change) = \"clear()\" [formControl] = \"startDate\" formControlName = 'startDate'>\n                    <mat-datepicker-toggle matSuffix [for]=\"picker\" *ngIf = \"!this._readonly\" ></mat-datepicker-toggle>\n                    <mat-datepicker #picker ></mat-datepicker>            \n                </mat-form-field>\n            </li>\n            <div class='alert' *ngIf = \"startDateGet.touched && startDateGet.invalid\"> Date is requred.  </div>\n                \n            <li class=\"item\">\n                <mat-form-field  class=\"item\" x>\n                    <input  matInput [matDatepicker]=\"epicker\" placeholder= \"End Date \" id='endDateInput'[readonly] = \"_readonly\"\n                    (dateInput)=\"editDate('end', $event)\" (change) = \"clear()\" [formControl] = \"endDate\"  >\n                    <mat-datepicker-toggle matSuffix [for]=\"epicker\" *ngIf = \"!this._readonly\" ></mat-datepicker-toggle>\n                    <mat-datepicker #epicker ></mat-datepicker>\n                </mat-form-field>\n            </li>\n            <div class='alert' *ngIf = \"endDateGet.touched && endDateGet.invalid\"> Date is requred and must be great than  </div>\n            <div class='alert' *ngIf = \"endDateGet.mustBeLaterThan \">End Date must be later than {{ startDateGet.mustBeLaterThan  }} </div>    \n            <li class=\"item\" *ngIf =!_readonly>\n                <mat-form-field>\n                    <mat-label>Reason</mat-label>\n                        <mat-select [(value)]=\"reasonSelect\" (selectionChange)=\"editReason($event, 'reason')\"\n                        [formControl] = \"reasonFC\"  id='reasonId'>\n                                <mat-option  value=\"0\">Personal Vacation</mat-option>\n                                <mat-option  value=\"1\">Other</mat-option>\n                                <mat-option   value=\"2\">Meeting</mat-option>  \n                                \n                        </mat-select>\n                </mat-form-field>\n            </li>\n    <!--    This the readOnly version of the Reason control -->\n            <li class=\"wideItem\" *ngIf =_readonly>\n                <mat-form-field>\n                <mat-label class=\"smallLabel\"> Reason</mat-label>\n                <input matInput  [value]=\"reasons[reasonSelect]\" size = 40  [readonly] = \"_readonly\">\n                </mat-form-field>\n            </li>\n    \n        \n            <li style=\"width:150px\" *ngIf = \"!_readonly || (this.data2._data[this._id] && this.data2._data[this._id].note && this.data2._data[this._id].note.length > 0)\" >\n                <mat-form-field  class=\"wideItem\">\n                    <mat-label class=\"smallLabel\"> Note:</mat-label>\n                    <textarea matInput  (change)=\"editReason($event, 'note')\" [value]=\"newTimeAwayBool ? ' ' : this.data2._data[this._id].note\"\n                        [formControl] = \"notesFC\"\n                        cdkTextareaAutosize [readonly]=\"_readonly\"\n                        #autosize=\"cdkTextareaAutosize\"\n                        cdkAutosizeMinRows=\"1\"\n                        cdkAutosizeMaxRows=\"5\"\n                        >\n                    </textarea>\n                </mat-form-field >\n            </li> \n        \n            <li class=\"item\" *ngIf = \"this.isApprover\" (click) = \"approve()\" >\n                    <button mat-raised-button>Approve </button>\n                </li>\n            \n            <li class=\"item\" *ngIf = \"this.reasonEdited && this.startDateEdited && endDateEdited\" >\n                    <button mat-raised-button  (click) =\"saveNewTimeAway()\">Save New Time Away </button>\n            </li>\n        </ul>\n\n</div>\n \n</div>\n<div id=\"datums\"  style=\"display:block\"> </div>\n<div id=\"datums2\"  style=\"display:block\"> </div>\n<div id=\"vidx\"  style=\"display:block\"> </div>\n\n\n<style type=\"text/css\" >\n    #timeline {\n        width: 100%;\n        height: 60%;\n        font-size:8pt;\n        font-family: sans-serif;\n        padding:0px;    \n    }\n      /* gray background in weekends, white text color */\n  .vis.timeline .timeaxis .grid.saturday,\n  .vis.timeline .timeaxis .grid.sunday {\n    background: green;\n    }\n</style>\n"

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







var vis = __webpack_require__(/*! ../../../node_modules/vis/dist/vis.js */ "./node_modules/vis/dist/vis.js");
var TimeLineComponent = /** @class */ (function () {
    function TimeLineComponent(http, getEditSvce, activatedRoute, datePipe, fb) {
        this.http = http;
        this.getEditSvce = getEditSvce;
        this.activatedRoute = activatedRoute;
        this.datePipe = datePipe;
        this.fb = fb;
        this.reasons = ['Personal Vacation', 'Other', 'Meeting'];
        this.drawControls = true;
        this.reasonSelect = '';
        this.newTimeAwayBool = false;
        this.saveTimeAwayBool = false;
        this.newTAparams = {
            startDate: '',
            endDate: '',
            reason: -1,
            Note: ''
        };
        this.seP = {}; // define instance of SeditParams interface
        this.redraw = true;
        this.showControls = false; // *ngIf condition for the controls section
        this._readonly = true;
        this.isApprover = false;
        this.nameToUserId = [{ lastName: '', userid: '' }];
        this.useridToUserkeys = [{ userid: 'Unknown', userkey: 0 }];
        this.contentArray = [];
        this.localAddId = 34343;
        this.newTimeAwayBool = false; // enable editing of existing tAs
        this.seP.whereColName = 'vidx';
        this.seP.tableName = 'vacation3';
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
    }
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
    TimeLineComponent.prototype.dateLessThan = function (from, to, reason) {
        var _this = this;
        return function (group) {
            var today = new Date('2019-03-01');
            var f = group.controls[from];
            var t = group.controls[to];
            var r = group.controls[reason];
            if (t.value && f.value >= t.value) {
                return {
                    dates: "End Date must be after Start Date "
                };
            }
            if (f.value) {
                var fDate = new Date(f.value);
                if (fDate < today)
                    return {
                        dates: "Date must be in the future"
                    };
            }
            if (f.value.length > 0 && f.value.length > 0 && r.value.length > 0) {
                _this.formValidation = true;
                console.log("form valid " + _this.formValidation);
            }
            return {};
        };
    };
    /*********     This is where the new tA is intered in the local and dB tables  **********************/
    TimeLineComponent.prototype.onSubmit = function () {
        console.log("statue is " + this.formG.status + "formG.value is " + this.formG.value);
        var item = {
            id: Object.keys(this.data2._data).length,
            start: this.formG.value.dateFrom + ' 00:00:00',
            end: this.formG.value.dateTo + ' 00:00:00',
            content: this.contentArray[this.userkey],
            group: this.groupsArray.indexOf(this.contentArray[this.userkey]),
            reason: this.formG.value.reasonG,
            note: this.formG.value.noteG,
        };
        this.timeline.itemsData.getDataSet().add(item); // add the new tA to local DataSet
        console.log("laseItem is " + item);
        var params = {};
        params.tableName = 'vacation3';
        /**********  set up INSERT params as pair of 1-to-1 arrays of colNames -to- colVals  ******************/
        params.colName = ['startDate', 'endDate', 'reason', 'note', 'userid']; // names of columns to INSERT
        params.colVal = [this.formG.value.dateFrom,
            this.formG.value.dateTo, this.formG.value.reasonG,
            this.formG.value.noteG, this.userkey];
        this.getEditSvce.insert(params); //  insert into dB
    };
    TimeLineComponent.prototype.setIndex = function (n) {
        this.index = n;
        console.log('index is ' + this.index);
    };
    Object.defineProperty(TimeLineComponent.prototype, "startDateGet", {
        get: function () {
            return this.form.get('startDate');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TimeLineComponent.prototype, "endDateGet", {
        get: function () {
            return this.form.get('endDate');
        },
        enumerable: true,
        configurable: true
    });
    /*
    mustBeLaterThan(control: AbstractControl) : ValidationErrors | null {
      if (this){
        console.log("startDateEntered" + this.startDateEntered)
      }
      console.log("typeof " + typeof control.value);
      let controlValueDate = new Date(control.value);
      if (typeof control.value =='object' && this && (controlValueDate) <= this.startDateEntered)
        return { mustBeLaterThan : true};
      else
        return null;
    }
    */
    TimeLineComponent.prototype.clicked = function (ev) {
        if (document.getElementById('datums2')) {
            this._content = document.getElementById('datums2').innerText;
            if (this._content === 'new item') {
                this.drawControls = false;
            }
        }
        var id = '';
        if (document.getElementById('datums')) {
            this._id = +document.getElementById('datums').innerText; // id of the item clickedOn in the DataSet
            id = document.getElementById('datums').innerText; // get the id from the vis click
            console.log('box clicked on');
            if (!this.data2._data[id]) { // click was NOT in a tA box;
                return;
            }
            this._vidx = this.data2._data[this._id].vidx; // store the vidx for editing
            document.getElementById('vidx').innerText = this.data2._data[id].vidx; // store the vidx for DELETE
            this.seP.whereColVal = this.data2._data[this._id].vidx;
            if (this._id >= 0) { // shows user had clicked a box
                this.showControls = true; // show editing controls
            }
        }
        console.log('clicked' + this._id);
        if (this.data2._data[id] && this.data2._data[id].className === this.userid) { // loggedInUser is tA owner so make widgets editable
            this._readonly = false; // enable editing
        }
        else {
            this._readonly = true;
        }
        if (this.data2._data[id]) { // if the timeAway is defined
            this.startDate = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](new Date(this.data2._data[id].start), _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required); // this is where the value is set
            this.endDate = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](new Date(this.data2._data[id].end), _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required);
            this.reasonFC = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](this.data2._data[id].reason);
            this.notesFC = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](this.data2._data[id].note);
            if (this.data2._data[id].reason || this.data2._data[id].reason === 0) {
                this.reasonSelect = this.data2._data[id].reason.toString(); // expecting string
                this.reasonFC.setValue(this.data2._data[id].reason.toString()); // needed for initial click
            }
        }
        if (this.userid === 'napolitano') { // official 'approver'
            this.isApprover = true;
        }
        /*******************          This is called anytime the user RELEASES the mouse click **********************/
        /*******************          remove routine  **********************/
        if (document.getElementById('datums2').innerText.indexOf('remove') !== -1) {
            this.data2.remove({ id: +document.getElementById('datums').innerText }); // remove the item from the dataSet
            this.drawControls = false; // turn off the edit Controls.
            var dParams = {
                'tableName': 'vacation3', 'whereColName': 'vidx', 'whereColVal': document.getElementById('vidx').innerText,
                'editColNames': ['reasonIdx'],
                'editColVals': ['99']
            };
            var i = 0;
            this.doREST(dParams);
        }
        else { /************    Edit Routine  ***************************************************/
            console.log("doRest");
            this.updateDB(this.data2._data[id].start, this.data2._data[id].end);
        }
    };
    TimeLineComponent.prototype.updateDB = function (sD, eD) {
        console.log('sD is ' + sD + 'length is ' + sD.length);
        var dParams = {
            'action': 'edit',
            'tableName': 'vacation3', 'whereColName': 'vidx', 'whereColVal': this.data2._data[this._id].vidx,
            'editColNames': ['startDate', 'endDate'],
            'editColVals': [this.formatDateYYYymmdd(sD), this.formatDateYYYymmdd(eD)]
        };
        this.doREST(dParams);
    };
    TimeLineComponent.prototype.doREST = function (dP) {
        var url = 'http://blackboard-dev.partners.org/dev/FJL/vacMan/RESTgenDB_POST.php';
        this.http.post(url, JSON.stringify(dP)).subscribe(function (val) {
            console.log('POST call', val);
        });
    };
    TimeLineComponent.prototype.formatDateYYYymmdd = function (d) {
        var date = new Date(d);
        var y = date.getFullYear();
        var m = date.getMonth() + 1;
        var dd = date.getDate();
        var fD = m + '/' + dd + '/' + y;
        return fD;
    };
    TimeLineComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute // point to the route clicked on
            .queryParams // look at the queryParams
            .subscribe(function (queryParams) {
            _this.qP = queryParams;
            _this.setQueryParams(queryParams);
            console.log(' this.userit ' + _this.userid);
            _this.seP.who = _this.userid;
            _this.getTimelineData2(); // get the data from REST database call.
        });
    };
    TimeLineComponent.prototype.setQueryParams = function (qP) {
        if (qP.userid) {
            this.useridP = qP.userid;
            this.userid = qP.userid;
        }
        console.log('setA ' + this.userid);
    };
    // tslint:disable-next-line:use-life-cycle-interface
    TimeLineComponent.prototype.ngAfterViewInit = function () {
        if (this.timelineContainer) {
            this.tlContainer = this.timelineContainer.nativeElement;
        }
    };
    TimeLineComponent.prototype.getTimelineData2 = function () {
        var _this = this;
        var todayDate = new Date();
        var startDate = new Date(todayDate.getFullYear(), todayDate.getMonth(), 1); // move to first day of current month
        var endDate = new Date();
        var endDateShown = new Date();
        var numWeeks = 12;
        endDateShown.setDate(startDate.getDate() + numWeeks * 7); // set endDate of shown TimeLine for 2 months
        endDate.setMonth(startDate.getMonth() + 4); // set 4 month interval for data collection
        ////////////  go back for DEV only ///////////////
        //  startDate.setFullYear(startDate.getFullYear() - 1) ;                                  // for developement purpose use old data
        //  endDate.setFullYear(endDate.getFullYear() - 1) ;                                      // mm
        //  endDateShown.setFullYear(endDateShown.getFullYear() - 1) ;                            // mm
        // let yesterYear = new Date().setFullYear(today.getFullYear() - 1);
        this.startDateString = this.datePipe.transform(startDate, 'yyyy-MM-dd'); // format it for dataBase startDate for getting tAs
        this.endDateString = this.datePipe.transform(endDate, 'yyyy-MM-dd'); // mm for endDate
        this.endDateShownString = this.datePipe.transform(endDateShown, 'yyyy-MM-dd'); // start date for opening of tL
        this.startDateShownString = this.datePipe.transform(startDate, 'yyyy-MM-dd');
        var url = 'http://blackboard-dev.partners.org/dev/AngVacMan/getVacsBB.php?start=' + this.startDateString + '&end=' + this.endDateString + '&userid=' + this.userid;
        //const url = 'http://blackboard-dev.partners.org/dev/FJL/vacMan/getVacsBB.php?start=' + this.startDateString + '&end=' + this.endDateString + '&userid=' + this.userid;
        console.log(' url is ' + url);
        this.http.get(url).subscribe(function (val) {
            if (_this.index === 0) {
                _this.data2 = new vis.DataSet(val);
            }
            else {
                _this.data2 = Array();
            }
            // store data in this.data2
            _this.setGroups(_this.data2); // make this.nameList a  list of users who have timeAways found
            _this.groups = new vis.DataSet([]);
            var i = 0; // make a dataStruct for the groups
            for (i = 0; i < _this.nameList.length; i++) { // foreach name found to have tA's
                _this.groups.add({ id: i, content: _this.nameList[i], value: i }); // add a group
                _this.groupsArray[i] = _this.nameList[i];
            }
            var top = _this.nameList.length * 20;
            var topString = top.toString() + 'px';
            //    document.getElementById('controls').style.setProperty('top', topString);
            _this.assignGroups(); // go thru tA's and assign each to proper Group
            _this.timeline = new vis.Timeline(_this.tlContainer, _this.data2, {});
            _this.timeline.setOptions(_this.options);
            _this.timeline.setGroups(_this.groups);
            _this.timeline.on('select', function (properties) {
                document.getElementById('datums').innerHTML = properties.items;
                // store the id in the DOM for use by Angular
            });
            function logEvent(event, properties) {
                var log = document.getElementById('log');
                var msg = document.createElement('div');
                document.getElementById('chData').innerHTML = properties.items.innerHTML = 'event=' + JSON.stringify(event) + ', ' +
                    'properties=' + JSON.stringify(properties);
                log.firstChild ? log.insertBefore(msg, log.firstChild) : log.appendChild(msg);
            }
        });
        this.options = {
            /*   editable: {
                  updateTime: true,  // drag items horizontally
                //  updateGroup: true, // drag items from one group to another
                  remove: false,       // delete an item by tapping the delete button top right
                  add: true,         // add new items by double tapping
                },
                */
            onAdd: function (item, callback) {
                document.getElementById('datums').innerHTML = item.group;
                document.getElementById('datums2').innerHTML = item.start;
            },
            onRemove: function (item, callback) {
                document.getElementById('datums').innerHTML = item.id;
                document.getElementById('datums2').innerHTML = callback;
            },
            /*
                onAdd: function(item, callback) {
                  if (item.content != null) {
                 //   var d = this.data;
                    const nextDay = new Date(item.start);
                    nextDay.setDate(item.start.getDate() + 1);
                    item.end = nextDay;
                    document.getElementById('datums').innerHTML = item.end;
                    callback(item); // send back adjusted item
                  }
                  else {
                    callback(null); // cancel updating the item
                  }
                },
                */
            // selectable: true,
            start: new Date(this.startDateShownString),
            //      start: new Date(new Date().getFullYear(), new Date().getMonth(), 1),
            end: new Date(this.endDateShownString),
        };
    }; // end of getTimelineData2
    TimeLineComponent.prototype.setGroups = function (s) {
        this.nameList = new Array();
        this.groupsArray = new Array();
        for (var i = 0; i < s.length; i++) { // step thru the data
            if (this.nameList.indexOf(s._data[i].content) < 0) { // if name is not already there
                this.nameList.push(s._data[i].content);
                this.nameToUserId[i] = { lastName: s._data[i].content, userid: s._data[i].userkey };
                this.useridToUserkeys[i] = { userid: s._data[i].userid, userkey: s._data[i].userkey };
                this.contentArray[s._data[i].userkey] = s._data[i].content; // used to get 'content' param to add to dataSet.
            } // add name
        }
        this.nameList.sort(); // alphabetize the nameList
        var index = this.useridToUserkeys.map(function (e) { return e.userid; }).indexOf(this.userid); // find arrayIndex of userId
        var uKey = this.useridToUserkeys[index].userkey; // the userKey of the loggedIn user
        this.userkey = this.useridToUserkeys[index].userkey; // the userKey of the loggedIn user
    };
    TimeLineComponent.prototype.assignGroups = function () {
        for (var property in this.data2._data) {
            if (this.data2._data.hasOwnProperty(property)) {
                this.data2._data[property].group = this.nameList.indexOf(this.data2._data[property].content); // set the correct groupNumber
                if (this.data2._data[property].approved === 1) {
                    this.data2._data[property].style = 'color:green';
                }
            }
        }
    };
    TimeLineComponent.prototype.clear = function () {
        console.log('clear ');
    };
    TimeLineComponent.prototype.editReason = function (s, colName) {
        var seP = {}; // define instance of SeditParams interface
        seP.who = this.userid;
        seP.whereColName = 'vidx';
        seP.tableName = 'vacation3';
        if (this.data2._data[this._id]) {
            this.seP.whereColVal = this.data2._data[this._id].vidx;
        }
        this.seP.editColName = colName;
        if (s.value) { // if comes from a 'select' widget
            this.seP.editColVal = s.value;
        }
        if (s.target && s.target.value) {
            this.seP.editColVal = s.target.value;
        }
        if (s === 1) {
            this.seP.editColVal = '1';
        }
        if (colName == 'note')
            this.data2.update({ id: this._id, note: this.seP.editColVal });
        if (colName == 'reason')
            this.data2.update({ id: this._id, reason: this.seP.editColVal }); // update dateSet
        this.getEditSvce.update(this.seP); // uses RESTupdatePOST.php
        this.reasonEdited = true; // has to be true to show Save Time Away button
    };
    /*************  remove the tA from display working, needs dataBase part **************/
    TimeLineComponent.prototype.remove = function () {
        this.data2.remove(this._id); // remove LOCALLY
        this.showControls = false; // turn off controls
        this.seP.editColName = 'reasonIdx'; // reasonIdx is the DELETE signal column
        this.seP.editColVal = '99'; // any smallInt > 0
        this.seP.whereColName = 'vidx';
        this.seP.whereColVal = document.getElementById('vidx').innerText;
        //  this.getEditSvce.update(this.seP);
        this.doREST(this.seP);
    };
    TimeLineComponent.prototype.editDate = function (type, event) {
        var s = this.formatDateForTimeline(event.value); // make the string for local update
        if ("" + type === 'start') {
            this.startDateEntered = event.value;
            this.data2.update({ id: this._id, start: s }); // do the local update
            //   this.data2.update({id:this._id, start: tst});                       // do the local update
            this.seP.editColName = 'startDate';
            this.seP.editColVal = s;
            console.log('edtied local ');
            //      this.seP.editColVal = this.datePipe.transform(newDate, 'yyyy-MM-dd');
            this.startDateEdited = true;
        } // update startDate
        if ("" + type === 'end') {
            this.data2.update({ id: this._id, end: s }); // update vis DataSet
            // param for dB
            this.seP.editColName = 'endDate';
            this.seP.editColVal = s; // mm
            this.endDateEdited = true;
            console.log('edtied local ' + s);
        }
        this.getEditSvce.update(this.seP); // do the dB edit.
        // this.timeline.redraw();
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
    TimeLineComponent.prototype.approve = function () {
        console.log('appreove' + this._id);
        this.data2.update({ id: this._id, style: 'color:blue' });
        this.data2._data[this._id].approved = 1;
        this.editReason(1, 'approved');
    };
    TimeLineComponent.prototype.setNewTimeAway2 = function () {
        this.newTimeAway2 = true;
    };
    TimeLineComponent.prototype.newTimeAway = function () {
        this.showControls = true; // show the dataEntry controls
        this._readonly = false;
        this._id = 1;
        this.showControls = true;
        this.newTimeAwayBool = true;
    };
    TimeLineComponent.prototype.saveNewTimeAway2 = function () {
        console.log("222" + this.formG.controls.dateFrom.value);
    };
    TimeLineComponent.prototype.saveNewTimeAway = function () {
        var params = {};
        params.tableName = 'vacation3';
        /**********  set up INSERT params as pair of 1-to-1 arrays of colNames -to- colVals  ******************/
        params.colName = ['startDate', 'endDate', 'reason', 'note', 'userid']; // names of columns to INSERT
        params.colVal = [this.formatDateForTimeline(this.startDate.value),
            this.formatDateForTimeline(this.endDate.value), this.reasonFC.value,
            this.notesFC.value, this.userkey];
        var content = this.contentArray[this.userkey]; // build the dataStruct to add to the timeLine DataSet
        var groupNum = this.groupsArray.indexOf(content); // the groupNumber of the item to be added
        var lastItem = Object.keys(this.data2._data).length;
        console.log("laseItem is " + lastItem);
        var item = {
            id: lastItem,
            start: this.formatDateForTimeline(this.startDate.value),
            end: this.formatDateForTimeline(this.endDate.value),
            style: 'color:blue',
            content: content,
            group: groupNum,
            reason: this.reasonFC.value,
            note: this.notesFC.value
        };
        this.timeline.itemsData.getDataSet().add(item); // add the new tA to local DataSet
        //   this.data2.update({id: this._id, reason: item.start});   
        // add the new tA to local DataSet
        this.localAddId++; // increment the id so can add additional tAs
        this.newTimeAwayBool = false; // enable editing of existing tAs
        this.getEditSvce.insert(params); //  insert into dB
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
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"], _gen_edit_service__WEBPACK_IMPORTED_MODULE_1__["GenEditService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["DatePipe"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]])
    ], TimeLineComponent);
    return TimeLineComponent;
}());



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

module.exports = __webpack_require__(/*! /Users/franklinlonberg/Angular/vacMan5/VacManTimeline/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map