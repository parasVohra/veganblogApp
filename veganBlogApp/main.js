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
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _content_blog_list_blog_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./content/blog-list/blog-list.component */ "./src/app/content/blog-list/blog-list.component.ts");
/* harmony import */ var _content_blog_blog_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./content/blog/blog.component */ "./src/app/content/blog/blog.component.ts");
/* harmony import */ var _content_recipe_list_recipe_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./content/recipe-list/recipe-list.component */ "./src/app/content/recipe-list/recipe-list.component.ts");
/* harmony import */ var _content_recipe_recipe_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./content/recipe/recipe.component */ "./src/app/content/recipe/recipe.component.ts");
/* harmony import */ var _content_reference_reference_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./content/reference/reference.component */ "./src/app/content/reference/reference.component.ts");
/* harmony import */ var _content_content_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./content/content.component */ "./src/app/content/content.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var routes = [
    //  { path:'', redirectTo:'posts', pathMatch:'full'},
    { path: '', component: _content_content_component__WEBPACK_IMPORTED_MODULE_7__["ContentComponent"] },
    { path: 'blogs', component: _content_blog_list_blog_list_component__WEBPACK_IMPORTED_MODULE_2__["BlogListComponent"] },
    { path: 'blog/:id', component: _content_blog_blog_component__WEBPACK_IMPORTED_MODULE_3__["BlogComponent"], data: { type: 'blog' } },
    { path: 'recipes', component: _content_recipe_list_recipe_list_component__WEBPACK_IMPORTED_MODULE_4__["RecipeListComponent"] },
    { path: 'recipe/:id', component: _content_recipe_recipe_component__WEBPACK_IMPORTED_MODULE_5__["RecipeComponent"], data: { type: 'recipe' } },
    { path: 'reference', component: _content_reference_reference_component__WEBPACK_IMPORTED_MODULE_6__["ReferenceComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes),
                _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"]
            ],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body{\n    padding: 0;\n    margin: 0;\n    font-family: 'Roboto', sans-serif;\n    background: url('green.jpg');\n}"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<app-header></app-header>\n<router-outlet></router-outlet>\n<app-footer></app-footer>"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/footer/footer.component.ts");
/* harmony import */ var _content_content_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./content/content.component */ "./src/app/content/content.component.ts");
/* harmony import */ var _content_home_content_home_content_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./content/home-content/home-content.component */ "./src/app/content/home-content/home-content.component.ts");
/* harmony import */ var _content_blog_list_blog_list_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./content/blog-list/blog-list.component */ "./src/app/content/blog-list/blog-list.component.ts");
/* harmony import */ var _content_recipe_list_recipe_list_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./content/recipe-list/recipe-list.component */ "./src/app/content/recipe-list/recipe-list.component.ts");
/* harmony import */ var _content_blog_blog_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./content/blog/blog.component */ "./src/app/content/blog/blog.component.ts");
/* harmony import */ var _content_recipe_recipe_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./content/recipe/recipe.component */ "./src/app/content/recipe/recipe.component.ts");
/* harmony import */ var _content_reference_reference_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./content/reference/reference.component */ "./src/app/content/reference/reference.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _shared_service_data_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./shared_service/data.service */ "./src/app/shared_service/data.service.ts");
/* harmony import */ var _content_comment_comment_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./content/comment/comment.component */ "./src/app/content/comment/comment.component.ts");
/* harmony import */ var _content_slider_slider_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./content/slider/slider.component */ "./src/app/content/slider/slider.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                _header_header_component__WEBPACK_IMPORTED_MODULE_7__["HeaderComponent"],
                _footer_footer_component__WEBPACK_IMPORTED_MODULE_8__["FooterComponent"],
                _content_content_component__WEBPACK_IMPORTED_MODULE_9__["ContentComponent"],
                _content_home_content_home_content_component__WEBPACK_IMPORTED_MODULE_10__["HomeContentComponent"],
                _content_blog_list_blog_list_component__WEBPACK_IMPORTED_MODULE_11__["BlogListComponent"],
                _content_recipe_list_recipe_list_component__WEBPACK_IMPORTED_MODULE_12__["RecipeListComponent"],
                _content_blog_blog_component__WEBPACK_IMPORTED_MODULE_13__["BlogComponent"],
                _content_recipe_recipe_component__WEBPACK_IMPORTED_MODULE_14__["RecipeComponent"],
                _content_reference_reference_component__WEBPACK_IMPORTED_MODULE_15__["ReferenceComponent"],
                _content_comment_comment_component__WEBPACK_IMPORTED_MODULE_18__["CommentComponent"],
                _content_slider_slider_component__WEBPACK_IMPORTED_MODULE_19__["SliderComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_16__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_5__["HttpModule"]
            ],
            providers: [_shared_service_data_service__WEBPACK_IMPORTED_MODULE_17__["DataService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/content/blog-list/blog-list.component.css":
/*!***********************************************************!*\
  !*** ./src/app/content/blog-list/blog-list.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".wrap{\n    min-height: calc(100vh - 5rem );\n    position: relative;\n}\n\n\n.listContainer{\n    display: -ms-grid;\n    display: grid;\n        -ms-grid-rows: 1rem minmax(5rem ,auto) 1rem;\n        grid-template-rows: 1rem minmax(5rem ,auto) 1rem;\n        -ms-grid-columns: (1fr)[6];\n        grid-template-columns: repeat(6, 1fr);\n    margin-top: 2rem;\n    margin-left: 5vw;\n    margin-bottom: 2rem;\n    margin-right: 5vw;\n        grid-template-areas: \n    \"images images . . . .\"\n    \"images  images titles titles titles titles\"\n    \"images images . . . .\"\n    ;\n\n   \n}\n\n\n.blogTitles{\n    cursor: pointer;\n    font-family: 'Love Ya Like A Sister', cursive;\n     -ms-grid-row: 2;\n     -ms-grid-column: 3;\n     -ms-grid-column-span: 4;\n     grid-area: titles;\n     background-color: #1f2d0f;\n     box-shadow: 1px 2px 8px #5f5f5f;\n     padding-top: 1rem;\n     padding-left: 1rem;\n     color: #afbf0e;\n     text-shadow: 1px 1px 1px black;\n     border-radius: 2px;\n   \n}\n\n\n.blogImage{\n    cursor: pointer;\n   -ms-grid-row: 1;\n   -ms-grid-row-span: 3;\n   -ms-grid-column: 1;\n   -ms-grid-column-span: 2;\n   grid-area: images;\n   background-color: salmon;\n   box-shadow: 3px 3px 13px #000000b5;\n   background-position: center;\n   background-size: cover;\n   border-radius: 2px;\n\n}\n\n\n@media only screen and (min-width: 768px){\n    .blogTitles{\n        -ms-grid-row: 2;\n        -ms-grid-column: 3;\n        -ms-grid-column-span: 4;\n    \n       \n    }\n    .blogImage{\n        -ms-grid-row: 1;\n        -ms-grid-row-span: 3;\n        -ms-grid-column: 1;\n        -ms-grid-column-span: 2;\n    \n       \n    }\n}\n\n\n@media only screen and (min-width: 768px){\n    .wrap{\n        min-height: calc(100vh - 5rem );\n        position: relative;\n        margin-left: 20rem;\n        margin-right: 20rem;\n    }\n    .listContainer{\n        display: -ms-grid;\n        display: grid;\n            -ms-grid-rows: 2rem minmax(8rem ,auto) 2rem;\n            grid-template-rows: 2rem minmax(8rem ,auto) 2rem;\n            -ms-grid-columns: (1fr)[6];\n            grid-template-columns: repeat(6, 1fr);\n        margin-top: 2rem;\n        margin-left: 5vw;\n        margin-bottom: 2rem;\n        margin-right: 5vw;\n            grid-template-areas: \n        \"images images . . . .\"\n        \"images  images titles titles titles titles\"\n        \"images images . . . .\"\n        ;\n    \n       \n    }\n    .blogTitles{\n        -ms-grid-row: 2;\n        -ms-grid-column: 3;\n        -ms-grid-column-span: 4;\n        grid-area: titles;\n        background-color: #1f2d0f;\n        font-size: 1.2rem;\n        box-shadow: 1px 2px 8px #5f5f5f;\n        padding-top: 2rem;\n        padding-left: 1rem;\n        color: #afbf0e;\n        text-shadow: 1px 1px 1px black;\n        border-radius: 2px;\n        \n     }\n}\n\n"

/***/ }),

/***/ "./src/app/content/blog-list/blog-list.component.html":
/*!************************************************************!*\
  !*** ./src/app/content/blog-list/blog-list.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"wrap\" *ngIf=\"blogs\">\n  <div *ngFor=\"let blog of blogs.blogs.reverse()\">\n      <div  class=\"listContainer\" [routerLink]=\"['/blog', blog.blogId]\" >\n        <div class=\"blogTitles\">{{blog.blogTitle}}</div> \n        <div class=\"blogImage\" [style.background-image]=\"'url(' + blog.blogImage + ')'\"></div>\n      </div>\n  </div>\n  \n</div>\n \n"

/***/ }),

/***/ "./src/app/content/blog-list/blog-list.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/content/blog-list/blog-list.component.ts ***!
  \**********************************************************/
/*! exports provided: BlogListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlogListComponent", function() { return BlogListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_service_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared_service/data.service */ "./src/app/shared_service/data.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BlogListComponent = /** @class */ (function () {
    function BlogListComponent(data) {
        this.data = data;
    }
    BlogListComponent.prototype.ngOnInit = function () {
        this.blogData();
    };
    BlogListComponent.prototype.blogData = function () {
        var _this = this;
        return this.data.getData().subscribe(function (data) {
            _this.blogs = data,
                function (error) { return console.log("Error: ", error); };
        });
    };
    BlogListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-blog-list',
            template: __webpack_require__(/*! ./blog-list.component.html */ "./src/app/content/blog-list/blog-list.component.html"),
            styles: [__webpack_require__(/*! ./blog-list.component.css */ "./src/app/content/blog-list/blog-list.component.css")]
        }),
        __metadata("design:paramtypes", [_shared_service_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"]])
    ], BlogListComponent);
    return BlogListComponent;
}());



/***/ }),

/***/ "./src/app/content/blog/blog.component.css":
/*!*************************************************!*\
  !*** ./src/app/content/blog/blog.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".blogContainer{\n    margin: 3vw;\n    min-height: calc(100vh - 6rem );\n    position: relative;\n}\n.blogMainTitle{\n    font-family: 'Love Ya Like A Sister', cursive;\n    color: #1f2d0f;\n    font-weight: bolder;\n    font-size: 7vw;\n    text-align: center;\n\n}\n.contentWrap{\n    margin-bottom: 1rem;\n}\n.subTitle{\n    font-family: 'Oswald', sans-serif;\n    font-weight: bold;\n    font-size:5vw;\n    padding: 10px;\n    margin-bottom: 0.5rem;\n    margin-top: 1rem;\n    border-radius: 3px;\n\n}\n.blogContent{\n    font-family: 'Oswald', sans-serif;\n    font-weight: normal;\n    font-size:4vw;\n    margin-top: 1rem;\n    font-weight: 400;\n}\n.paras{\n    text-align: justify;\n}\n.paraImage{\n    height: 21rem;\n    width: 21rem;\n    margin-left: auto;\n    margin-right: auto;\n    margin-top: 1rem;\n    background-position: center;\n    background-size: contain;\n    background-repeat: no-repeat;\n}\n@media only screen and (min-width: 768px){\n    .blogContainer{\n        margin-left: 15rem;\n        margin-right: 15rem;\n        min-height: calc(100vh - 6rem );\n        position: relative;\n    }\n    .blogMainTitle{\n        font-family: 'Love Ya Like A Sister', cursive;\n         color: #1f2d0f;\n        font-weight: bolder;\n        font-size: 3rem;\n        text-align: center;\n    \n    }\n    .subTitle{\n        font-family: 'Oswald', sans-serif;\n        font-weight: bold;\n        font-size:2rem;\n        padding: 10px;\n        margin-bottom: 0.5rem;\n        margin-top: 1rem;\n        border-radius: 3px;\n    \n    }\n    .blogContent{\n        font-family: 'Oswald', sans-serif;\n        font-weight: normal;\n        font-size:1rem;\n        margin-top: 1rem;\n        font-weight: 400;\n    }\n    .paraImage{\n        height: 40vw;\n        width: 60vw;\n        margin-left: auto;\n        margin-right: auto;\n        margin-top: 1rem;\n        background-position: center;\n        background-size: contain;\n        background-repeat: no-repeat;\n    }\n}"

/***/ }),

/***/ "./src/app/content/blog/blog.component.html":
/*!**************************************************!*\
  !*** ./src/app/content/blog/blog.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"blogContainer\" *ngIf=\"blogs\">\n    <div class=\"blogMainTitle\">{{blogs.blogTitle}}</div>\n    <div class=\"contentWrap\" *ngFor=\"let blog of blogs.content.titles\">\n        <div class=\"subTitle\">\n            {{blog.subTitle}}\n            <div class=\"blogContent\" *ngFor=\"let para of blog.paras\" >\n                <div class=\"paras\">\n                  {{para}}\n                </div>\n            </div>\n            <div class=\"imageBox\" *ngFor=\"let imgs of blog.images\">\n                <div class=\"paraImage\" [style.background-image]=\"'url(' + imgs + ')'\" *ngIf= \"imgs.length > 7 \"></div>\n            </div>\n        </div>\n    </div>\n    \n</div>\n\n<app-comment></app-comment>\n"

/***/ }),

/***/ "./src/app/content/blog/blog.component.ts":
/*!************************************************!*\
  !*** ./src/app/content/blog/blog.component.ts ***!
  \************************************************/
/*! exports provided: BlogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlogComponent", function() { return BlogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_service_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared_service/data.service */ "./src/app/shared_service/data.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var BlogComponent = /** @class */ (function () {
    function BlogComponent(Data, activeRoute) {
        this.Data = Data;
        this.activeRoute = activeRoute;
        this.isLoaded = false;
        this.param = 0;
    }
    BlogComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.blogData();
        this.sub = this.activeRoute.params.subscribe(function (params) {
            _this.id = params['id'];
        });
    };
    BlogComponent.prototype.blogData = function () {
        var _this = this;
        return this.Data.getData().subscribe(function (data) {
            _this.blogs = data.blogs[_this.id],
                function (error) { return console.log("Error: ", error); };
        });
    };
    BlogComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-blog',
            template: __webpack_require__(/*! ./blog.component.html */ "./src/app/content/blog/blog.component.html"),
            styles: [__webpack_require__(/*! ./blog.component.css */ "./src/app/content/blog/blog.component.css")]
        }),
        __metadata("design:paramtypes", [_shared_service_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], BlogComponent);
    return BlogComponent;
}());



/***/ }),

/***/ "./src/app/content/comment/comment.component.css":
/*!*******************************************************!*\
  !*** ./src/app/content/comment/comment.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".cmtTitle{\n    margin-top: 3rem;\n    margin-left: 1rem;\n    margin-bottom: 1rem;\n}\n.newCommentBox{\n    display: -ms-grid;\n    display: grid;\n        -ms-grid-columns: 0.2fr 1rem 1fr 1rem 0.5fr 1rem 1fr 1rem 1fr;\n        grid-template-columns: 0.2fr 1fr 0.5fr 1fr 1fr ;\n        -ms-grid-rows: 0.5fr 1rem auto 1rem 2fr;\n        grid-template-rows: 0.5fr auto 2fr;\n    grid-gap: 1rem;\n    margin-left: 1rem;\n    margin-right: 1rem;\n    margin-bottom: 2rem;\n        grid-template-areas: \n    \" lName name . . . \"\n    \" lCmmt comment comment comment .  \"\n    \" . pBtn pBtn . .\";\n    \n}\n.nameLable{\n    -ms-grid-row: 1;\n    -ms-grid-column: 1;\n    grid-area: lName;\n}\n.nameInput{\n    -ms-grid-row: 1;\n    -ms-grid-column: 3;\n    grid-area: name;\n    border-bottom: 1px solid grey;\n\n}\n.commentLabel{\n    -ms-grid-row: 3;\n    -ms-grid-column: 1;\n    grid-area: lCmmt;\n}\n.commentInput{\n    -ms-grid-row: 3;\n    -ms-grid-column: 3;\n    -ms-grid-column-span: 5;\n    grid-area: comment;\n    outline: 0;\n    border: none;\n    border-bottom: 1px solid grey;\n    resize: none;\n}\ninput{\n    border:none;\n}\ninput:focus{\n    border: none;\n    outline: none;\n}\n.submitBtn{\n    background-color: #212121;\n    color: white;\n    -ms-grid-row: 5;\n    -ms-grid-column: 3;\n    -ms-grid-column-span: 3;\n    grid-area: pBtn;\n    box-shadow: 0px 5px 9px #929292c7;\n    cursor: pointer;\n}\n@media only screen and (min-width: 768px){\n    .nameLable{\n        -ms-grid-row: 1;\n        -ms-grid-column: 1;\n        \n    }\n    .nameInput{\n        -ms-grid-row: 1;\n        -ms-grid-column: 3;\n        \n    }\n    .commentLabel{\n        -ms-grid-row: 3;\n        -ms-grid-column: 1;\n        \n    }\n    .commentInput{\n        -ms-grid-row: 3;\n        -ms-grid-column: 3;\n        -ms-grid-column-span: 5;\n        \n    }\n    .submitBtn{\n        -ms-grid-row: 5;\n        -ms-grid-column: 3;\n        \n    }\n}\n.commentDisplayBox{\n    display: -ms-grid;\n    display: grid;\n        -ms-grid-columns: 0.5fr 5px 0.8fr 5px 0.5fr 5px 3fr;\n        grid-template-columns: 0.5fr 0.8fr 0.5fr 3fr;\n        -ms-grid-rows: auto 5px auto 5px auto 5px 2rem;\n        grid-template-rows: auto auto auto 2rem;\n    border-bottom: 1px solid grey;\n    padding: 2px;\n    margin-top: 1.5rem;\n    grid-gap: 5px;\n    margin-left: 1rem;\n    margin-right: 1rem;\n    margin-bottom: 2rem;\n        grid-template-areas: \n    \" cName cName cName cName\"\n    \" cTime cTime cTime cTime\"\n    \" dContent dContent dContent dContent\"\n    \" cLike likeCount rBtn . \";\n}\n.commenterName{\n    -ms-grid-row: 1;\n    -ms-grid-column: 1;\n    -ms-grid-column-span: 7;\n    grid-area: cName;\n    font-size: 3.2vw;\n    font-weight: 600;\n    text-align: left;\n    padding-left: 0rem;\n    line-height: 1rem;\n}\n.timeStamp{\n    -ms-grid-row: 3;\n    -ms-grid-column: 1;\n    -ms-grid-column-span: 7;\n    grid-area: cTime;\n    padding-left: 0rem;\n    text-align: left;\n    font-size: 3vw;\n\n}\n.commentContent{\n    -ms-grid-row: 5;\n    -ms-grid-column: 1;\n    -ms-grid-column-span: 7;\n    grid-area: dContent;\n    padding-left: 0rem;\n    text-align: left;\n    font-size: 3vw;\n}\n.likeBtn{\n    -ms-grid-row: 7;\n    -ms-grid-column: 1;\n    grid-area: cLike;\n    padding-left: 0.5rem;\n    background-image: url(\"/Images/emptyHeart.png\");\n    background-size: contain;\n    background-position: center;\n    background-repeat: no-repeat;\n\n}\n.likesCount{\n    -ms-grid-row: 7;\n    -ms-grid-column: 3;\n    grid-area: likeCount;\n    padding-left: 0.5rem;\n    line-height: 2rem;\n    text-align: left;\n    font-size: 3vw;\n}\n.replyBtn{\n    -ms-grid-row: 7;\n    -ms-grid-column: 5;\n    grid-area: rBtn;\n    line-height: 2rem;\n    font-weight: 600;\n    font-size: 3vw;\n}\n@media only screen and (min-width: 768px){\n    .commenterName{\n        -ms-grid-row: 1;\n        -ms-grid-column: 1;\n        -ms-grid-column-span: 7;\n    }\n    .timeStamp{\n        -ms-grid-row: 3;\n        -ms-grid-column: 1;\n        -ms-grid-column-span: 7;\n    }\n    .commentContent{\n        -ms-grid-row: 5;\n        -ms-grid-column: 1;\n        -ms-grid-column-span: 7;\n    }\n    .likeBtn{\n        -ms-grid-row: 7;\n        -ms-grid-column: 1;\n    }\n    .likesCount{\n        -ms-grid-row: 7;\n        -ms-grid-column: 3;\n    }\n    .replyBtn{\n        -ms-grid-row: 7;\n        -ms-grid-column: 5;\n    }\n}\n@media only screen and (min-width: 768px){\n    .newCommentBox{\n        display: -ms-grid;\n        display: grid;\n            -ms-grid-columns: 0.2fr 1rem 1fr 1rem 0.5fr 1rem 1fr 1rem 1fr;\n            grid-template-columns: 0.2fr 1fr 0.5fr 1fr 1fr ;\n            -ms-grid-rows: 0.5fr 1rem auto 1rem 2fr;\n            grid-template-rows: 0.5fr auto 2fr;\n        grid-gap: 1rem;\n        margin-left: 15rem;\n        margin-right: 15rem;\n        margin-bottom: 2rem;\n            grid-template-areas: \n        \" lName name . . . \"\n        \" lCmmt comment comment comment .  \"\n        \" . pBtn . . .\";\n        \n    }\n    .commentDisplayBox{\n        display: -ms-grid;\n        display: grid;\n            -ms-grid-columns: 0.5fr 5px 0.8fr 5px 0.5fr 5px 3fr;\n            grid-template-columns: 0.5fr 0.8fr 0.5fr 3fr;\n            -ms-grid-rows: auto 5px auto 5px auto 5px 2rem;\n            grid-template-rows: auto auto auto 2rem;\n        border-bottom: 1px solid grey;\n        padding: 2px;\n        margin-top: 1.5rem;\n        grid-gap: 5px;\n        margin-left: 15rem;\n        margin-right: 15rem;\n        margin-bottom: 2rem;\n            grid-template-areas: \n        \" cName cName cName cName\"\n        \" cTime cTime cTime cTime\"\n        \" dContent dContent dContent dContent\"\n        \" cLike likeCount rBtn . \";\n    }\n    .cmtTitle{\n        margin-top: 3rem;\n        margin-left: 15rem;\n        margin-bottom: 1rem;\n    }\n    .commenterName{\n        -ms-grid-row: 1;\n        -ms-grid-column: 1;\n        -ms-grid-column-span: 7;\n        grid-area: cName;\n        font-size: 1.5vw;\n        font-weight: 600;\n        text-align: left;\n        padding-left: 0rem;\n        line-height: 1rem;\n    }\n    .timeStamp{\n        -ms-grid-row: 3;\n        -ms-grid-column: 1;\n        -ms-grid-column-span: 7;\n        grid-area: cTime;\n        padding-left: 0rem;\n        text-align: left;\n        font-size: 1.5vw;\n    \n    }\n    .commentContent{\n        -ms-grid-row: 5;\n        -ms-grid-column: 1;\n        -ms-grid-column-span: 7;\n        grid-area: dContent;\n        padding-left: 0rem;\n        text-align: left;\n        font-size: 1.5vw;\n    }\n    .submitBtn{\n        background-color: #212121;\n        color: white;\n        -ms-grid-row: 5;\n        -ms-grid-column: 3;\n        -ms-grid-column-span: 3;\n        grid-area: pBtn;\n        box-shadow: 0px 5px 9px #929292c7;\n        cursor: pointer;\n    }\n}\n"

/***/ }),

/***/ "./src/app/content/comment/comment.component.html":
/*!********************************************************!*\
  !*** ./src/app/content/comment/comment.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"cmtTitle\" >Leave Comment</div>\n<div class=\"newCommentBox\">\n  <div class=\"nameLable\">Name</div>\n  <input class=\"nameInput\" placeholder=\"Name\"  (input) = 'cName = $event.target.value' type=\"text\"  [(ngModel)]=\"cName\"> \n  <div class=\"commentLabel\">Comment</div>\n  <textarea type=\"text\" class=\"commentInput\" rows=\"3\"  (input) = 'cComment = $event.target.value' placeholder=\"Add comment\" [(ngModel)]=\"cComment\"></textarea>\n  <input class=\"submitBtn\" (click)=\"addComment($event)\" type=\"button\" value=\"Post Comment\">\n</div>\n\n<div *ngIf=\"comments\">\n    <div class=\"commentDisplayBox\" *ngFor=\"let comment of comments.comments\" >\n      <div class=\"commenterName\">{{comment.name}}</div>\n      <div class=\"timeStamp\">{{comment.timeStamp}}</div>\n      <div class=\"commentContent\">{{comment.content}}</div>\n      <div class=\"likeBtn\"></div>\n      <div class=\"likesCount\"></div>\n      <div class=\"replyBtn\"></div>\n    </div>\n</div>\n\n\n\n\n"

/***/ }),

/***/ "./src/app/content/comment/comment.component.ts":
/*!******************************************************!*\
  !*** ./src/app/content/comment/comment.component.ts ***!
  \******************************************************/
/*! exports provided: CommentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommentComponent", function() { return CommentComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CommentComponent = /** @class */ (function () {
    function CommentComponent(httpClient, activeRoute, router) {
        this.httpClient = httpClient;
        this.activeRoute = activeRoute;
        this.router = router;
        this.cName = 'Name';
        this.cComment = 'Add comment';
        this.match = false;
        // headers for http requests
        this.httpHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
            'Content-Type': 'application/json',
            'Response-Type': 'text',
            'Cache-Control': 'no-cache'
        });
        this.options = { headers: this.httpHeaders };
        //get comments data from server
        this.getComments = function () {
            var _this = this;
            this.pageType = this.activeRoute.snapshot.data['type'];
            this.activeRoute.params.subscribe(function (params) {
                _this.pageId = params['id'];
            });
            this.httpClient.post('/post/Comments', { pageType: this.pageType, pageId: this.pageId }, this.options).subscribe(function (data) { _this.comments = data; }, function (err) { return console.error(err); });
        };
    }
    CommentComponent.prototype.ngOnInit = function () {
        this.getComments();
        //reset values in inputs 
        this.cName = '';
        this.cComment = '';
        this.dateFormat();
    };
    CommentComponent.prototype.dateFormat = function () {
    };
    CommentComponent.prototype.showAlert = function (msg) {
        alert(msg);
    };
    // get input value from front end and send it to server 
    CommentComponent.prototype.addComment = function (event) {
        var _this = this;
        if (this.cName == "") {
            this.message = 'Please enter name';
            this.showAlert(this.message);
        }
        else if (this.cComment == "") {
            this.message = 'Please enter comment';
            this.showAlert(this.message);
        }
        else {
            // getting active page type and id
            this.id = this.activeRoute.params.subscribe(function (params) {
                _this.typeID = params['id'];
                //console.log(this.typeID + ", " + this.activeRoute.snapshot.data['type']);
            });
            var commentData = {
                name: this.cName,
                content: this.cComment,
                type: this.activeRoute.snapshot.data['type'],
                typeID: this.typeID
            };
            //console.log(commentData)
            var body = JSON.stringify(commentData);
            //sending post request to server to post comments data 
            this.httpClient.post('/post/comment', body, this.options)
                .subscribe(function (res) {
                //console.log(res)
            });
            // reseting input value after post request 
            this.cName = '';
            this.cComment = '';
            this.ngOnInit();
        }
    };
    CommentComponent.prototype.deleteOne = function () {
        var _this = this;
        var body = { name: "Parasvohra" };
        this.httpClient.post('/post/deleteOne', body, this.options)
            .subscribe(function (res) {
            // console.log(res)
            _this.ngOnInit();
        });
    };
    CommentComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-comment',
            template: __webpack_require__(/*! ./comment.component.html */ "./src/app/content/comment/comment.component.html"),
            styles: [__webpack_require__(/*! ./comment.component.css */ "./src/app/content/comment/comment.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], CommentComponent);
    return CommentComponent;
}());



/***/ }),

/***/ "./src/app/content/content.component.css":
/*!***********************************************!*\
  !*** ./src/app/content/content.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body{\n    position: relative;\n    margin: 0;\n    padding: 0;\n    min-height:100%;\n}"

/***/ }),

/***/ "./src/app/content/content.component.html":
/*!************************************************!*\
  !*** ./src/app/content/content.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-home-content></app-home-content>\n"

/***/ }),

/***/ "./src/app/content/content.component.ts":
/*!**********************************************!*\
  !*** ./src/app/content/content.component.ts ***!
  \**********************************************/
/*! exports provided: ContentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContentComponent", function() { return ContentComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ContentComponent = /** @class */ (function () {
    function ContentComponent() {
    }
    ContentComponent.prototype.ngOnInit = function () {
    };
    ContentComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-content',
            template: __webpack_require__(/*! ./content.component.html */ "./src/app/content/content.component.html"),
            styles: [__webpack_require__(/*! ./content.component.css */ "./src/app/content/content.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ContentComponent);
    return ContentComponent;
}());



/***/ }),

/***/ "./src/app/content/home-content/home-content.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/content/home-content/home-content.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".homeContentWrapper{\n    display: -ms-grid;\n    display: grid;\n        -ms-grid-columns: 1fr;\n        grid-template-columns: 1fr;\n        -ms-grid-rows: 20rem 3rem 20rem 20rem;\n        grid-template-rows: 20rem 3rem 20rem 20rem;\n        grid-template-areas: \n    \"quote\"\n    \"htitle\"\n    \"blogRef\"\n    \"recipeRef\";\n}\n\n.homeSlider{\n    -ms-grid-row: 1;\n    -ms-grid-column: 1;\n    grid-area: quote;\n    background: url('growingFlower.gif');\n    background-position: center;\n    background-size: contain;\n    background-repeat: no-repeat;\n}\n\n.htitle{\n    font-family: 'Love Ya Like A Sister', cursive;\n    font-weight: bold;\n    -ms-grid-row: 2;\n    -ms-grid-column: 1;\n    grid-area: htitle;\n    text-align: center;\n    color: #1f2d0f;\n    margin-top: 3rem;\n    font-size: 2rem;\n    line-height: 3rem;\n}\n\n.blogRef{\n    -ms-grid-row: 3;\n    -ms-grid-column: 1;\n    grid-area: blogRef;\n    display: -ms-grid;\n    display: grid;\n    -ms-grid-columns: (1fr)[12];\n        grid-template-columns: repeat(12, 1fr);\n    -ms-grid-rows: (1fr)[12];\n        grid-template-rows: repeat(12, 1fr);\n}\n\n.blogThumImg{\n    cursor: pointer;\n    -ms-grid-row: 3;\n    -ms-grid-row-span: 7;\n    grid-row: 3/10;\n    -ms-grid-column: 2;\n    -ms-grid-column-span: 6;\n    grid-column: 2/8;\n    box-shadow: 3px 3px 13px #000000b5;\n    background-color: blueviolet;\n    background: url('Blog1.jpg');\n    background-position: center;\n    background-size: cover;\n    background-repeat: no-repeat;\n}\n\n.blogThumText{\n    cursor: pointer;\n    font-family: 'Love Ya Like A Sister', cursive;\n    font-weight: bold;\n    -ms-grid-row: 4;\n    -ms-grid-row-span: 7;\n    grid-row: 4/11;\n    background-color: #afbf0e;\n    -ms-grid-column: 5;\n    -ms-grid-column-span: 7;\n    grid-column: 5/12;\n    box-shadow: 0px 5px 9px #929292c7;\n    padding-left: 7rem;\n    padding-top: 1rem;\n}\n\n.blogBtn{\n    cursor: pointer;\n    -ms-grid-row: 9;\n    -ms-grid-row-span: 1;\n    grid-row: 9/10;\n    -ms-grid-column: 9;\n    -ms-grid-column-span: 2;\n    grid-column: 9/11;\n    background-color: #1f2d0f;\n    color:#afbf0e;\n    line-height: 3rem;\n    font-size: 1.5rem;\n    text-align: center;\n}\n\n.recipeRef{\n    -ms-grid-row: 4;\n    -ms-grid-column: 1;\n    grid-area: recipeRef;\n    display: -ms-grid;\n    display: grid;\n    -ms-grid-columns: (1fr)[12];\n        grid-template-columns: repeat(12, 1fr);\n    -ms-grid-rows: (1fr)[12];\n        grid-template-rows: repeat(12, 1fr);\n}\n\n@media only screen and (min-width: 768px){\n    .homeSlider{\n        -ms-grid-row: 1;\n        -ms-grid-column: 2;\n    }\n    .htitle{\n        -ms-grid-row: 2;\n        -ms-grid-column: 2;\n    }\n    .blogRef{\n        -ms-grid-row: 3;\n        -ms-grid-column: 2;\n    }\n    .recipeRef{\n        -ms-grid-row: 4;\n        -ms-grid-column: 2;\n    }\n    \n}\n\n.recipeThumText{\n    cursor: pointer;\n    font-family: 'Love Ya Like A Sister', cursive;\n    font-weight: bold;\n    background-color: #1f2d0f;\n    color: #afbf0e;\n    -ms-grid-row: 4;\n    -ms-grid-row-span: 7;\n    grid-row: 4/11;\n    -ms-grid-column: 2;\n    -ms-grid-column-span: 7;\n    grid-column: 2/9;\n    padding-left: 0.5rem;\n    box-shadow: 0px 5px 9px #929292c7;\n    padding-right: 6rem;\n    padding-top: 1rem;\n}\n\n.recipeThumImg{\n    cursor: pointer;\n    -ms-grid-row: 3;\n    -ms-grid-row-span: 7;\n    grid-row: 3/10;\n    -ms-grid-column: 6;\n    -ms-grid-column-span: 6;\n    grid-column: 6/12;\n    box-shadow: 3px 3px 13px #000000b5;\n    background-color: blueviolet;\n    background: url('Blog1.jpg');\n    background-position: center;\n    background-size: cover;\n    background-repeat: no-repeat;\n}\n\n.recipeBtn{\n    cursor: pointer;\n    -ms-grid-row: 9;\n    -ms-grid-row-span: 1;\n    grid-row: 9/10;\n    -ms-grid-column: 3;\n    -ms-grid-column-span: 2;\n    grid-column: 3/5;\n    font-size: 1.5rem;\n    background-color: #afbf0e;\n    color:#1f2d0f;\n    line-height: 3rem;\n    text-align: center;\n}\n\n@media only screen and (min-width: 768px){\n    .homeContentWrapper{\n        display: -ms-grid;\n        display: grid;\n            -ms-grid-columns: 2fr 8fr 2fr;\n            grid-template-columns: 2fr 8fr 2fr;\n            -ms-grid-rows: 30rem 3rem 30rem 30rem;\n            grid-template-rows: 30rem 3rem 30rem 30rem;\n            grid-template-areas: \n        \". quote .\"\n        \". htitle .\"\n        \". blogRef .\"\n        \" . recipeRef .\";\n    }\n    .blogThumText{\n        font-family: 'Love Ya Like A Sister', cursive;\n        font-weight: bold;\n        font-size: 1.5rem;\n        color: #1f2d0f;\n        background-color: #afbf0e;\n        -ms-grid-row: 4;\n        -ms-grid-row-span: 7;\n        grid-row: 4/11;\n        -ms-grid-column: 5;\n        -ms-grid-column-span: 7;\n        grid-column: 5/12;\n        box-shadow: 0px 5px 9px #929292c7;\n        padding-left: 20vw;\n        padding-right: 1rem;\n        padding-top: 2rem;\n    }\n    .recipeThumText{\n        font-family: 'Love Ya Like A Sister', cursive;\n        font-weight: bold;\n        background-color: #1f2d0f;\n        color: #afbf0e;\n        font-size: 1.5rem;\n        -ms-grid-row: 4;\n        -ms-grid-row-span: 7;\n        grid-row: 4/11;\n        -ms-grid-column: 2;\n        -ms-grid-column-span: 7;\n        grid-column: 2/9;\n        padding-left: 1rem;\n        box-shadow: 0px 5px 9px #929292c7;\n        padding-right: 18vw;\n        padding-top: 2rem;\n    }\n    .htitle{\n        font-family: 'Love Ya Like A Sister', cursive;\n        font-weight: bold;\n        -ms-grid-row: 2;\n        -ms-grid-column: 1;\n        grid-area: htitle;\n        text-align: center;\n        color: #1f2d0f;\n        margin-top: 3rem;\n        font-size: 5rem;\n        line-height: 3rem;\n    }\n    \n}\n\n\n\n"

/***/ }),

/***/ "./src/app/content/home-content/home-content.component.html":
/*!******************************************************************!*\
  !*** ./src/app/content/home-content/home-content.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"homeContentWrapper\" *ngIf=\"recipe\">\n  <div class=\"homeSlider\">\n    <app-slider></app-slider>\n  </div>\n  <div class=\"htitle\" >What's New ?</div>\n  <div class=\"blogRef\" routerLink=\"/blogs\">\n    <div class=\"blogThumText\"> {{blogs.blogTitle}}</div>\n    <div class=\"blogThumImg\"  [style.background-image]=\"'url(' + blogs.blogImage + ')'\"></div>\n    <div class=\"blogBtn\">More</div>\n  </div>\n  <div class=\"recipeRef\" routerLink=\"/recipes\">\n    <div class=\"recipeThumText\"> {{recipe.recipeTitle}}</div>\n    <div class=\"recipeThumImg\"  [style.background-image]=\"'url(' + recipe.coverImage + ')'\"></div>\n    <div class=\"recipeBtn\">More</div>\n  </div>\n</div>\n\n"

/***/ }),

/***/ "./src/app/content/home-content/home-content.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/content/home-content/home-content.component.ts ***!
  \****************************************************************/
/*! exports provided: HomeContentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeContentComponent", function() { return HomeContentComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_service_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared_service/data.service */ "./src/app/shared_service/data.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomeContentComponent = /** @class */ (function () {
    function HomeContentComponent(data) {
        this.data = data;
    }
    HomeContentComponent.prototype.ngOnInit = function () {
        this.blogData();
        this.recipeData();
    };
    HomeContentComponent.prototype.blogData = function () {
        var _this = this;
        return this.data.getData().subscribe(function (data) {
            // console.log(data.blogs[(data.blogs.length)-1]);
            _this.blogs = data.blogs[(data.blogs.length) - 1],
                function (error) { return console.log("Error: ", error); };
        });
    };
    HomeContentComponent.prototype.recipeData = function () {
        var _this = this;
        return this.data.getRecipes().subscribe(function (data) {
            //console.log(data.recipes[(data.recipes.length)-1]);
            _this.recipe = data.recipes[(data.recipes.length) - 1],
                function (error) { return console.log("Error: ", error); };
        });
    };
    HomeContentComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home-content',
            template: __webpack_require__(/*! ./home-content.component.html */ "./src/app/content/home-content/home-content.component.html"),
            styles: [__webpack_require__(/*! ./home-content.component.css */ "./src/app/content/home-content/home-content.component.css")]
        }),
        __metadata("design:paramtypes", [_shared_service_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"]])
    ], HomeContentComponent);
    return HomeContentComponent;
}());



/***/ }),

/***/ "./src/app/content/recipe-list/recipe-list.component.css":
/*!***************************************************************!*\
  !*** ./src/app/content/recipe-list/recipe-list.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".wrapper{\n    min-height: calc(100vh - 5rem );\n    position: relative;\n}\n\n\n.repContainer{\n    display: -ms-grid;\n    display: grid;\n    -ms-grid-columns:  1fr 1fr 1fr 8fr;\n        grid-template-columns:  1fr 1fr 1fr 8fr;\n    -ms-grid-rows:  1rem 4rem 1rem;\n        grid-template-rows:  1rem 4rem 1rem;\n    margin-top: 2rem;\n    margin-left: 5vw;\n    margin-bottom: 2rem;\n    margin-right: 5vw;\n    \n}\n\n\n.RecipeTitles{\n    cursor: pointer;\n    font-family: 'Love Ya Like A Sister', cursive;\n    font-weight: bold;\n   background-color: #1f2d0f;\n   -ms-grid-column: 2;\n   -ms-grid-column-span: 3;\n   grid-column: 2 / 5;\n   -ms-grid-row:   1;\n   -ms-grid-row-span:   3;\n   grid-row:   1 / 4; \n   border-radius: 2px;\n   box-shadow: 0px 3px 6px black;\n   padding-left: 20vw;\n   color:#afbf0e;\n   padding-top: 1rem;\n   text-shadow: 1px 1px 1px black;\n   \n   \n}\n\n\n.RecipeImage{\n    cursor: pointer;\n   background-color: salmon;\n   -ms-grid-column: 1;\n   -ms-grid-column-span: 3;\n   grid-column: 1 / 4;\n   -ms-grid-row:   2;\n   -ms-grid-row-span:   1;\n   grid-row:   2 / 3; \n   background-position: center;\n   background-repeat: no-repeat;\n   background-size: cover;\n   border-radius: 2px;\n   box-shadow: 3px 3px 8px #000000b5;\n}\n\n\n.cookingTime{\n\n}\n\n\n@media only screen and (min-width: 768px){\n    .wrapper{\n        min-height: calc(100vh - 5rem );\n        position: relative;\n        margin-left: 20rem;\n        margin-right: 20rem;\n    }\n    .repContainer{\n        display: -ms-grid;\n        display: grid;\n        -ms-grid-columns:  1fr 1fr 1fr 8fr;\n            grid-template-columns:  1fr 1fr 1fr 8fr;\n        -ms-grid-rows:  2rem 6rem 2rem;\n            grid-template-rows:  2rem 6rem 2rem;\n        margin-top: 2rem;\n        margin-left: 5vw;\n        margin-bottom: 2rem;\n        margin-right: 5vw;\n        \n    }\n\n    .RecipeTitles{\n        font-family: 'Love Ya Like A Sister', cursive;\n        font-weight: bold;\n        background-color: #1f2d0f;\n        -ms-grid-column: 2;\n        -ms-grid-column-span: 3;\n        grid-column: 2 / 5;\n        -ms-grid-row:   1;\n        -ms-grid-row-span:   3;\n        grid-row:   1 / 4; \n        font-size: 1.5rem;\n        border-radius: 2px;\n        box-shadow: 0px 3px 6px black;\n        padding-left: 10vw;\n        color: #afbf0e;\n        padding-top: 1rem;\n        text-shadow: 1px 1px 1px black;\n        \n        \n     }\n}"

/***/ }),

/***/ "./src/app/content/recipe-list/recipe-list.component.html":
/*!****************************************************************!*\
  !*** ./src/app/content/recipe-list/recipe-list.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\" *ngIf=\"recipe\">\n  <div *ngFor=\"let recipe of recipe.recipes.reverse()\">\n      <div  class=\"repContainer\" [routerLink]=\"['/recipe', recipe.recipeId]\">\n        <div class=\"RecipeTitles\">\n          {{recipe.recipeTitle}}\n          <br>\n          <br>\n  \n          {{recipe.cookingTime}}\n        </div> \n        <div class=\"RecipeImage\" [style.background-image]=\"'url(' + recipe.coverImage + ')'\"></div>\n   \n      </div>\n  </div>\n    \n</div>\n"

/***/ }),

/***/ "./src/app/content/recipe-list/recipe-list.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/content/recipe-list/recipe-list.component.ts ***!
  \**************************************************************/
/*! exports provided: RecipeListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecipeListComponent", function() { return RecipeListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_service_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared_service/data.service */ "./src/app/shared_service/data.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var RecipeListComponent = /** @class */ (function () {
    function RecipeListComponent(data) {
        this.data = data;
    }
    RecipeListComponent.prototype.ngOnInit = function () {
        this.recipeData();
    };
    RecipeListComponent.prototype.recipeData = function () {
        var _this = this;
        return this.data.getRecipes().subscribe(function (data) {
            _this.recipe = data,
                function (error) { return console.log("Error: ", error); };
        });
    };
    RecipeListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-recipe-list',
            template: __webpack_require__(/*! ./recipe-list.component.html */ "./src/app/content/recipe-list/recipe-list.component.html"),
            styles: [__webpack_require__(/*! ./recipe-list.component.css */ "./src/app/content/recipe-list/recipe-list.component.css")]
        }),
        __metadata("design:paramtypes", [_shared_service_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"]])
    ], RecipeListComponent);
    return RecipeListComponent;
}());



/***/ }),

/***/ "./src/app/content/recipe/recipe.component.css":
/*!*****************************************************!*\
  !*** ./src/app/content/recipe/recipe.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".recipeWrapper{\n    min-height:calc(100vh - 9rem);\n}\n*{\n    box-sizing: border-box;\n}\n.recipeName{\n    text-align: center;\n    padding: 1.5rem;\n    font-size: 1.5rem;\n    text-decoration: underline;\n    text-shadow: 1px 1px 2px #717070;\n    \n\n}\n.recipePic{\n    background-position: center;\n    background-repeat: no-repeat;\n    background-size: cover;\n    height: 11rem;;\n    border-radius: 9rem;\n    margin-left: auto;\n    margin-right: auto;\n    width: 50%;\n    box-shadow: 0px 5px 9px #929292c7;\n}\n.optionBox{\n    display: -ms-grid;\n    display: grid;\n        -ms-grid-columns: 1fr 1fr;\n        grid-template-columns: 1fr 1fr;\n        -ms-grid-rows: 3rem;\n        grid-template-rows: 3rem;\n    background-color: white;\n    margin-bottom: 1rem;\n    margin-top: 1rem;\n    border: 1px solid #212121;\n        grid-template-areas: \n    \"ingBtn dirBtn\"\n}\n.ingBtn{\n    \n    -ms-grid-row: 1;\n    \n    -ms-grid-column: 1;\n    \n    grid-area: ingBtn;\n    text-align: center;\n    line-height: 3rem;\n    cursor: pointer;\n}\n.ing{\n    background-color: #212121;\n    color: orange;\n\n}\n.dir{\n    background-color: #212121;\n    color: orange;\n\n}\n.dirBtn{\n    -ms-grid-row: 1;\n    -ms-grid-column: 2;\n    grid-area: dirBtn;\n    text-align: center;\n    line-height: 3rem;\n    cursor: pointer;\n}\n.recipeContentBox{\n    display: -ms-grid;\n    display: grid;\n    -ms-grid-columns: 1fr;\n        grid-template-columns: 1fr;\n}\n.ingBox{\n    -ms-grid-row: 1;\n        grid-row-start: 1;\n    -ms-grid-column: 1;\n        grid-column-start: 1;\n    -ms-grid-column-span: 1;\n    grid-column-end: 2;\n    z-index: 2;\n    margin: 1rem;\n    opacity: 0;\n\n}\n.dirBox{\n    -ms-grid-row: 1;\n        grid-row-start: 1;\n    -ms-grid-column: 1;\n        grid-column-start: 1;\n    -ms-grid-column-span: 1;\n    grid-column-end: 2;\n    margin: 1rem;\n    opacity: 0;\n}\n.ingVisible{\n    opacity: 1;\n}\n.dirVisible{\n    opacity: 1;\n}\n.index{\n    display: inline;\n}\n@media only screen and (min-width: 768px){\n    .recipeWrapper{\n        min-height:calc(100vh - 9rem);\n        margin-left: 15rem;\n        margin-right: 15rem;\n    }\n\n    .recipePic{\n        background-position: center;\n        background-repeat: no-repeat;\n        background-size: cover;\n        height: 33rem;;\n        border-radius: 9rem;\n        margin-left: auto;\n        margin-right: auto;\n        width: 44rem;\n        box-shadow: 0px 5px 9px #929292c7;\n    }\n}"

/***/ }),

/***/ "./src/app/content/recipe/recipe.component.html":
/*!******************************************************!*\
  !*** ./src/app/content/recipe/recipe.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"recipeWrapper\" *ngIf=\"recipe\" >\n  <div class=\"recipeName\">{{recipe.recipeTitle}}</div>\n  <div class=\"recipePic\"[style.background-image]=\"'url(' + recipe.coverImage + ')'\"></div>\n  <div class=\"optionBox\">\n    <div class=\"ingBtn\" [ngClass]=\"{'ing': is1Active} \" (click) = \"toggle1()\" >\n      Ingedients\n    </div>\n    <div class=\"dirBtn\" [ngClass]=\"{'dir': is2Active} \" (click) = \"toggle2()\">\n      Directions\n    </div>\n  </div>\n\n\n  <div class=\"recipeContentBox\">\n    \n    <div class=\"ingBox\" [ngClass]=\"{'ingVisible': is1Active}\">\n        <div class=\"ingDetails\" *ngFor=\"let ing of recipe.ingredients; let i = index\">\n          <div class=\"index\">{{i+1 }}.  </div> {{  ing}} <br> <br>\n        </div>\n    </div>\n    \n\n    <div class=\"dirBox\" [ngClass]=\"{'dirVisible': is2Active}\">\n        <div class=\"dirDetails\" *ngFor=\"let dir of recipe.directions ; let i = index\">\n          <div class=\"index\">{{i+1 }}.   </div> {{  dir}} <br> <br>\n        </div>\n    </div>  \n    \n  </div>\n\n</div>\n\n<app-comment></app-comment>\n"

/***/ }),

/***/ "./src/app/content/recipe/recipe.component.ts":
/*!****************************************************!*\
  !*** ./src/app/content/recipe/recipe.component.ts ***!
  \****************************************************/
/*! exports provided: RecipeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecipeComponent", function() { return RecipeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_service_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared_service/data.service */ "./src/app/shared_service/data.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RecipeComponent = /** @class */ (function () {
    function RecipeComponent(data, activeRoute) {
        this.data = data;
        this.activeRoute = activeRoute;
        this.is1Active = true;
        this.is2Active = false;
    }
    RecipeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.recipeData();
        this.sub = this.activeRoute.params.subscribe(function (params) {
            _this.id = params['id'];
            console.log(_this.id);
        });
    };
    RecipeComponent.prototype.recipeData = function () {
        var _this = this;
        return this.data.getRecipes().subscribe(function (data) {
            console.log(data);
            _this.recipe = data.recipes[_this.id],
                function (error) { return console.log("Error: ", error); };
        });
    };
    RecipeComponent.prototype.toggle1 = function () {
        this.is1Active = true;
        this.is2Active = false;
    };
    RecipeComponent.prototype.toggle2 = function () {
        this.is1Active = false;
        this.is2Active = true;
    };
    RecipeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-recipe',
            template: __webpack_require__(/*! ./recipe.component.html */ "./src/app/content/recipe/recipe.component.html"),
            styles: [__webpack_require__(/*! ./recipe.component.css */ "./src/app/content/recipe/recipe.component.css")]
        }),
        __metadata("design:paramtypes", [_shared_service_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], RecipeComponent);
    return RecipeComponent;
}());



/***/ }),

/***/ "./src/app/content/reference/reference.component.css":
/*!***********************************************************!*\
  !*** ./src/app/content/reference/reference.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".refWrapper{\n    padding-left: 1rem;\n    padding-right: 1rem;\n    margin-top: 2rem;\n    margin-bottom: 2rem;\n    font-family: 'Oswald', sans-serif;\n    font-weight: normal;\n}\n\na{\n    text-decoration: none;\n    font-family: 'Oswald', sans-serif;\n    color: black;\n    font-weight: bold;\n \n}\n\n.refText{\n    margin-top: 2rem;\n    text-align: inherit;\n\n}\n\n.refTitle{\n    text-align: center;\n    font-weight: bold;\n}\n\n@media only screen and (min-width: 768px){\n    .refWrapper{\n        height: calc(100vh - 20rem);\n        margin-left: 15vw;\n        margin-right: 15vw;\n        margin-top: 5rem;\n        margin-bottom: 2rem;\n        font-family: 'Oswald', sans-serif;\n        font-weight: normal;\n    }\n}"

/***/ }),

/***/ "./src/app/content/reference/reference.component.html":
/*!************************************************************!*\
  !*** ./src/app/content/reference/reference.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"refWrapper\">\n\n <div class=\"refTitle\">REFERENCES</div>  \n   \n <div class=\"refText\"> (IGF-1) Allen, N., Appleby, P., Davey, G., Kaaks, R., Rinaldi, S. and Key, T. (2002). The Associations of Diet with Serum Insulin-like Growth Factor I and Its Main Binding Proteins in 292 Women Meat-Eaters, Vegetarians, and Vegans. [online] Cancer Epidemiology, Biomarkers & Prevention.  [Accessed 7 Jun. 2018].\n    <a href=\"http://cebp.aacrjournals.org/content/11/11/1441\" target=\"_blank\">Go to Link</a></div>\n \n \n  <div class=\"refText\"> (Clearing up arteries) Esselstyn, C., Gendy, G., Doyle, J., Golubic, M. and Roizen, M. (2018). A way to reverse CAD?. [online] Dresselstyn.com.[Accessed 7 Jun. 2018].\n      <a href=\"http://dresselstyn.com/JFP_06307_Article1.pdf\" target=\"_blank\">Go to Link</a></div>\n\n\n <div class=\"refText\"> (mammalian hormones) Maruyama K, e. (2018). Exposure to exogenous estrogen through intake of commercial milk produced from pregnant cows. - PubMed - NCBI. [online] Ncbi.nlm.nih.gov. [Accessed 7 Jun. 2018].\n    <a href=\"https://www.ncbi.nlm.nih.gov/pubmed/19496976\" target=\"_blank\">Go to Link</a> </div>\n \n\n <div class=\"refText\">(milk and cancer) Freilburg, K. (2018). Consumption of Cow’s Milk and Possible Risk of Breast Cancer. [online] Ncbi.nlm.nih.gov. [Accessed 7 Jun. 2018].\n    <a href=\"https://www.ncbi.nlm.nih.gov/pmc/articles/PMC3357167/pdf/brc0005-0044.pdf\" target=\"_blank\">Go to Link</a>\n </div>\n  \n  \n  <div class=\"refText\"> (Hypertension)\n\n <a href=\"http://annals.org/aim/article-abstract/700872/calcium-regulating-hormones-essential-hypertension-relation-plasma-renin-activity-sodium\" target=\"_blank\">Go to Link</a></div>\n\n</div>\n \n"

/***/ }),

/***/ "./src/app/content/reference/reference.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/content/reference/reference.component.ts ***!
  \**********************************************************/
/*! exports provided: ReferenceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReferenceComponent", function() { return ReferenceComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ReferenceComponent = /** @class */ (function () {
    function ReferenceComponent() {
    }
    ReferenceComponent.prototype.ngOnInit = function () {
    };
    ReferenceComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-reference',
            template: __webpack_require__(/*! ./reference.component.html */ "./src/app/content/reference/reference.component.html"),
            styles: [__webpack_require__(/*! ./reference.component.css */ "./src/app/content/reference/reference.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ReferenceComponent);
    return ReferenceComponent;
}());



/***/ }),

/***/ "./src/app/content/slider/slider.component.css":
/*!*****************************************************!*\
  !*** ./src/app/content/slider/slider.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n"

/***/ }),

/***/ "./src/app/content/slider/slider.component.html":
/*!******************************************************!*\
  !*** ./src/app/content/slider/slider.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"sliderWrapper\">\n  <div class=\"sliderImage\">\n    \n  </div>\n</div>"

/***/ }),

/***/ "./src/app/content/slider/slider.component.ts":
/*!****************************************************!*\
  !*** ./src/app/content/slider/slider.component.ts ***!
  \****************************************************/
/*! exports provided: SliderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SliderComponent", function() { return SliderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SliderComponent = /** @class */ (function () {
    function SliderComponent() {
        this.imageArray = [
            { img: '../../../assets/images/Bread.jpg' },
            { img: '../../../assets/images/Combination.jpg' },
            { img: '../../../assets/images/Pasta.jpg' },
            { img: '../../../assets/images/Blog1.jpg' },
            { img: '../../../assets/images/Blog2.jpg' }
        ];
    }
    SliderComponent.prototype.ngOnInit = function () {
    };
    SliderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-slider',
            template: __webpack_require__(/*! ./slider.component.html */ "./src/app/content/slider/slider.component.html"),
            styles: [__webpack_require__(/*! ./slider.component.css */ "./src/app/content/slider/slider.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SliderComponent);
    return SliderComponent;
}());



/***/ }),

/***/ "./src/app/footer/footer.component.css":
/*!*********************************************!*\
  !*** ./src/app/footer/footer.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".footerBox{\n    bottom: 0;\n    width: 100vw;\n    font-size: 1vw;\n    text-align: center;\n    background-color: #1f2d0f;\n    color: white;\n    padding-bottom: 0.5rem;\n}\n.footerLink{\n    padding-left: 4vw;\n}\n.Icon{\n    width: 3vw;\n    height: 3vw;\n    margin-right: 2rem;\n    margin-top: 0.5rem;\n    margin-bottom: 0.5rem;\n}\n@media only screen and (max-width: 768px){\n\n    .footerBox{\n        bottom: 0;\n        width: 100vw;\n        font-size: 3vw;\n        text-align: center;\n        background-color: #1f2d0f;\n        color: white;\n        padding-bottom: 0.5rem;\n    }\n    .footerLink{\n        padding-left: 4vw;\n    }\n    .Icon{\n        width: 5vw;\n        height: 5vw;\n        margin-right: 1rem;\n        margin-top: 0.5rem;\n        margin-bottom: 0.5rem;\n    }\n}"

/***/ }),

/***/ "./src/app/footer/footer.component.html":
/*!**********************************************!*\
  !*** ./src/app/footer/footer.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"footerBox\">\n  <div class=\"footerLink\">\n      <a href=\"https://www.instagram.com/theveganhood/\" target=\"_blank\"><img class=\"insta Icon\" src=\"../../assets/png/insta.png\"></a>\n      <a href=\"https://www.facebook.com/vgnhood/\" target=\"_blank\"><img class=\"facebook Icon\" src=\"../../../assets/png/facebook.png\"></a>\n  </div>\n<div class=\"fotterText\">&copy; 2018 by Pursharth Vohra</div>\n</div>\n"

/***/ }),

/***/ "./src/app/footer/footer.component.ts":
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/footer/footer.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/header/header.component.css":
/*!*********************************************!*\
  !*** ./src/app/header/header.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".headerContainer{\n    position: relative;\n    margin: 0;\n    padding: 0;\n    height: 6rem;\n    line-height: 6rem;\n    width: 100vw;\n    background-color: #1f2d0f;\n    display: -ms-grid;\n    display: grid;\n        -ms-grid-rows: 1fr 30vw 1fr;\n        grid-template-rows: 1fr 1fr;\n    grid-gap: 30vw;\n        grid-template-areas: \n    \"logo menuLarge\";\n}\n.logo{\n    -ms-grid-row: 1;\n    -ms-grid-column: 1;\n    grid-area: logo;\n    color: #afbf0e;\n    font-family: 'Love Ya Like A Sister', cursive;\n    font-size: 3vw;\n    margin-left: 1rem;\n    \n}\n.activeRoute{\n    color: orange;\n    border: none;\n}\n.LinkLarge{\n    display: inline;\n    cursor: pointer;\n    font-family: 'Varela Round', sans-serif;\n    font-weight: normal;\n    border:none;\n    margin-left: 2vw;\n    font-size: 2vw;\n    \n\n}\n.menuBoxLarge{\n    -ms-grid-row: 1;\n    -ms-grid-column: 2;\n    grid-area: menuLarge;\n    color:#afbf0e;\n}\n.menuBox{\n    display: none;\n}\n@media only screen and (max-width: 768px){\n    .headerContainer{\n        position: relative;\n        margin: 0;\n        padding: 0;\n        height: 5rem;\n        line-height: 5rem;\n        width: 100vw;\n        background-color: #1f2d0f;\n    }\n    .menuBoxLarge{\n       display: none;\n    }\n    .logo{\n        -ms-grid-row: 1;\n        -ms-grid-column: 1;\n        grid-area: logo;\n        color: #afbf0e;\n        font-family: 'Love Ya Like A Sister', cursive;\n        font-size: 9vw;\n        margin-left: 1rem;\n        \n    }\n    .Link{\n        font-family: 'Varela Round', sans-serif;\n        font-weight: normal;\n        border:none;\n        margin-left: 8vw;\n        font-size: 4vw;\n        outline: 0;\n    }\n    .menuBtn{\n        position: fixed;\n        background-color: transparent;\n        right: 1.5rem;\n        width: 3rem;\n        height: 5rem;\n        top: 1.5rem;\n        z-index: 5;\n    }\n    \n    .menuBox{\n        display: block;\n        position: fixed;\n        width: 100vw;\n        height: 100vh;\n        background-color:#1f2d0f;\n        right: -140%;\n        top:0;\n        color: darkgrey;\n        padding-top: 12vw;\n        z-index: 4;\n    }\n    \n    \n    .firstBar{\n        position: relative;\n        float: left;\n        background-color: orange;\n        border-radius: 2rem;\n        width: 100%;\n        height: 0.3rem;\n        margin-bottom: 0.3rem;\n    }\n    .secondBar{\n        position: relative;\n        float: left;\n        background-color: orange;\n        border-radius: 2rem;\n        width: 100%;\n        height: 0.3rem;  \n        margin-bottom: 0.3rem;\n    }\n    .thirdBar{\n        position: relative;\n        background-color: orange;\n        margin-top: 0.6rem;\n        border-radius: 2rem;\n        width: 100%;\n        height: 0.3rem;                     \n    }\n    .fourthBar{\n        position: relative;\n        float: left;\n        background-color: orange;\n        border-radius: 2rem;\n        width: 100%;\n        height: 0.3rem;  \n    }\n    \n}"

/***/ }),

/***/ "./src/app/header/header.component.html":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"headerContainer\">\n  <div class=\"logo\" routerLink=\"/\" >The VeganHood</div>\n  <div class=\"menuBoxLarge\">\n      <div class=\"home LinkLarge\" [routerLinkActiveOptions]=\"{ exact: true}\" routerLinkActive=\"activeRoute\" routerLink=\"/\" (click)=\"hideMenu()\">Home</div>\n      <div class=\"blogList LinkLarge\" routerLinkActive=\"activeRoute\" routerLink=\"/blogs\" (click)=\"hideMenu()\">Blog</div>\n      <div class=\"recipe LinkLarge\" routerLinkActive=\"activeRoute\" routerLink=\"/recipes\" (click)=\"hideMenu()\">Recipe</div>\n      <div class=\"reference LinkLarge\" routerLinkActive=\"activeRoute\" routerLink=\"/reference\" (click)=\"hideMenu()\">References</div>\n  </div>\n  <div class=\"menuBtn\" (click)=\"showMenu()\">\n    <div class=\"firstBar\" [@barHide]=\"barState\"></div>\n    <div class=\"secondBar\" [@barNRotate]=\"stateN\"></div>\n    <div class=\"thirdBar\"[@barPRotate]=\"stateP\"></div>\n    <div class=\"fourthBar\" [@barHide]=\"barState\"></div>\n  </div>\n  <div class=\"menuBox\" [@showMenu]=\"showBox\">\n    <div @listAnimation>\n        <div class=\"home Link\" [routerLinkActiveOptions]=\"{ exact: true}\" routerLinkActive=\"activeRoute\" routerLink=\"/\" (click)=\"hideMenu()\">Home</div>\n        <div class=\"blogList Link\" routerLinkActive=\"activeRoute\" routerLink=\"/blogs\" (click)=\"hideMenu()\">Blog</div>\n        <div class=\"recipe Link\" routerLinkActive=\"activeRoute\" routerLink=\"/recipes\" (click)=\"hideMenu()\">Recipe</div>\n        <div class=\"reference Link\" routerLinkActive=\"activeRoute\" routerLink=\"/reference\" (click)=\"hideMenu()\">References</div>\n    </div>\n    \n  </div>\n</div>"

/***/ }),

/***/ "./src/app/header/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_service_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared_service/data.service */ "./src/app/shared_service/data.service.ts");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(data) {
        this.data = data;
        this.stateP = 'normalP';
        this.stateN = 'normalN';
        this.barState = 'visible';
        this.showBox = 'hide';
        this.paras = {
            name: "helloow from client"
        };
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent.prototype.printInCon = function () {
        this.data.getData().subscribe(function (data) {
            console.log(data);
        });
    };
    HeaderComponent.prototype.showMenu = function () {
        this.stateP = this.stateP === 'crossP' ? 'normalP' : 'crossP';
        this.stateN = this.stateN === 'crossN' ? 'normalN' : 'crossN';
        this.barState = this.barState === 'hidden' ? 'visible' : 'hidden';
        this.showBox = this.showBox === 'show' ? 'hide' : 'show';
        this.animList = 'list';
    };
    HeaderComponent.prototype.hideMenu = function () {
        this.stateP = 'normalP';
        this.stateN = 'normalN';
        this.barState = 'visible';
        this.showBox = 'hide';
    };
    HeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/header/header.component.css")],
            animations: [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["trigger"])('barPRotate', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])('normalP', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
                        transform: 'rotate(0deg)'
                    })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])('crossP', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
                        transform: 'rotate(45deg)'
                    })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('normalP <=> crossP', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('300ms cubic-bezier(0.44, 0.41, 0.45, 2)')),
                ]),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["trigger"])('barNRotate', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])('normalN', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
                        transform: 'rotate(0deg)'
                    })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])('crossN', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
                        transform: 'rotate(-45deg)'
                    })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('normalN <=> crossN', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('300ms cubic-bezier(0.44, 0.41, 0.45, 2)')),
                ]),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["trigger"])('barHide', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])('visible', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
                        opacity: 1
                    })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])('hidden', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
                        opacity: 0
                    })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('visible <=> hidden', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('300ms ease-out')),
                ]),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["trigger"])('showMenu', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])('show', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
                        right: '0%'
                    })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])('hide', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
                        right: '-150%'
                    })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('show <=> hide', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('300ms ease-in-out')),
                ]),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["trigger"])('listAnimation', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('* => *', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["query"])('.Link', [
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('1s', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ opacity: 0, transform: 'translateX(100px)' }))
                        ]),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["query"])('.Link', [
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["stagger"])(100, [
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('1s ease-in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ opacity: 1, transform: 'translateX(0)' }))
                            ])
                        ])
                    ])
                ])
            ]
        }),
        __metadata("design:paramtypes", [_shared_service_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/shared_service/data.service.ts":
/*!************************************************!*\
  !*** ./src/app/shared_service/data.service.ts ***!
  \************************************************/
/*! exports provided: DataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataService", function() { return DataService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DataService = /** @class */ (function () {
    function DataService(http) {
        this.http = http;
        this.baseUrl = 'http://localhost:4600';
        this.headers = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["Headers"]({ 'Content-Type': 'application/json' });
        this.options = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["RequestOptions"]({ headers: this.headers });
    }
    DataService.prototype.getData = function () {
        return this.http.get("./assets/data/blogData.json");
    };
    DataService.prototype.getRecipes = function () {
        return this.http.get("./assets/data/recipeData.json");
    };
    DataService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], DataService);
    return DataService;
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
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
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
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/parasvohra/Documents/Development/mean_App/veganblogApp/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map