function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
  /*!**************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<header class=\"layout-cabecalho\">\n  <div class=\"container\">\n    <img src=\"../assets/imagens/logo.png\" alt=\"Pirâmide\" class=\"logo\"> \n    <nav class=\"navegacao__menu\">\n      <app-menu></app-menu>\n      <router-outlet></router-outlet>\n    </nav>\n  </div>\n</header>\n\n<section class=\"layout-chamada\">\n  <div class=\"container\">\n    <div class=\"chamada\">\n      <h1 class=\"chamada__titulo\">É Pirâmide</h1>\n      <p class=\"chamada__subtitulo\">Você não é faraó para ter uma nos seus investimentos!</p>\n    </div>\n  </div>\n</section>\n\n<div class=\"layout-passos\" id=\"Identificar\">\n    <app-passos></app-passos>\n</div>\n\n<div class=\"layout-noticias\" id=\"Notícias\">\n    <app-noticias></app-noticias>\n</div>\n\n<div class=\"layout-denuncias\">\n    <app-denuncias></app-denuncias>\n</div>\n\n<footer class=\"layout-rodape\">\n    <p>&copy; ÉPirâmide. Todos os direitos reservados.</p>\n</footer>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/contato/contato.component.html":
  /*!**************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/contato/contato.component.html ***!
    \**************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppContatoContatoComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<p>contato works!</p>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/denuncias/denuncias.component.html":
  /*!******************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/denuncias/denuncias.component.html ***!
    \******************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppDenunciasDenunciasComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/menu/menu.component.html":
  /*!********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/menu/menu.component.html ***!
    \********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppMenuMenuComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div>\n    <ul class=\"menu\">\n        <a *ngFor=\"let itemMenu of menus\" href=\"#{{itemMenu.texto}}\">\n            <li>{{itemMenu.texto}}</li>\n        </a>\n    </ul>\n</div>\n\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/noticias/noticias.component.html":
  /*!****************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/noticias/noticias.component.html ***!
    \****************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppNoticiasNoticiasComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/passos/passos.component.html":
  /*!************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/passos/passos.component.html ***!
    \************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPassosPassosComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"container\">\n    <div class=\"row justify-content-md-center\">\n      <article class=\"artigos\" *ngIf=\"passoSelecionado\">   \n\n        <img [src]=passoSelecionado.imagemUrl alt=\"Alerta {{passoSelecionado.id}}\" (click)=\"onProximoPasso()\">\n        <header>\n          <h3 class=\"cabecalho\">Alerta {{passoSelecionado.id}} - {{passoSelecionado.manchete}}</h3>\n        </header>\n\n        <footer>\n          <h4 class=\"rodape\">{{passoSelecionado.descricao}}</h4>\n        </footer>\n      </article>\n  </div>\n\n  <div *ngIf=\"!passoSelecionado\"> \n    <img src=\"../assets/imagens/numero-6.png\" alt=\"Clique para ver os 6 passos\" (click)=\"onProximoPasso()\" >\n    <header>\n      <h2 class=\"cabecalho\">Passos para identificar uma pirâmide</h2>\n    </header>\n  </div>\n\n</div>\n\n<!-- <div class=\"container\">\n  <div *ngFor=\"let passo of passos\">\n    <div class=\"row justify-content-md-center\">\n      <article class=\"artigos\">\n        <header>\n          <h3 class=\"\">Alerta {{passo.id}} - {{passo.manchete}}</h3>\n        </header>\n\n        <img [src]=passo.imagemUrl alt=\"Alerta {{passo.id}}\" (click)=>\n\n        <footer>\n          <h5 class=\"\">{{passo.descricao}}</h5>\n        </footer>\n\n      </article>\n    </div>\n  </div>\n</div> -->\n\n<!-- <div *ngFor=\"let passo of passos\">\n    <img [src]=passo.imagemUrl alt=\"Alerta {{passo.id}}\">\n    <div class=\"card\">\n      <h3 class=\"card-header\">Alerta {{passo.id}} - {{passo.manchete}}</h3>\n      <div class=\"card-body\">\n          <h5 class=\"card-title\">{{passo.descricao}}</h5>\n      </div>\n    </div>    \n</div>\n\n -->\n<!--   <ngb-carousel *ngIf=\"passos\">\n    <ng-template ngbSlide *ngFor=\"let passo of passos\">\n      <div class=\"card\">\n      <header class=\"card-header\">\n        <h3>Alerta {{passo.id}} - {{passo.manchete}}</h3>\n      </header>\n      <div class=\"picsum-img-wrapper card-body\">\n        <img [src]=passo.imagemUrl alt=\"Alerta {{passo.id}}\">\n      </div>\n      <div class=\"carousel-caption\">\n        <h3>{{passo.manchete}}</h3>\n        <p>{{passo.descricao}}</p>\n      </div>\n      <footer class=\"card-footer\">\n        <h2>{{passo.descricao}}</h2>\n      </footer>\n    </div>\n    </ng-template>   \n  </ngb-carousel>  -->";
    /***/
  },

  /***/
  "./node_modules/tslib/tslib.es6.js":
  /*!*****************************************!*\
    !*** ./node_modules/tslib/tslib.es6.js ***!
    \*****************************************/

  /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */

  /***/
  function node_modulesTslibTslibEs6Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__extends", function () {
      return __extends;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__assign", function () {
      return _assign;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__rest", function () {
      return __rest;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__decorate", function () {
      return __decorate;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__param", function () {
      return __param;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__metadata", function () {
      return __metadata;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__awaiter", function () {
      return __awaiter;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__generator", function () {
      return __generator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__exportStar", function () {
      return __exportStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__values", function () {
      return __values;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__read", function () {
      return __read;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spread", function () {
      return __spread;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () {
      return __spreadArrays;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__await", function () {
      return __await;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () {
      return __asyncGenerator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () {
      return __asyncDelegator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncValues", function () {
      return __asyncValues;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () {
      return __makeTemplateObject;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importStar", function () {
      return __importStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importDefault", function () {
      return __importDefault;
    });
    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0
    
    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.
    
    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */

    /* global Reflect, Promise */


    var _extendStatics = function extendStatics(d, b) {
      _extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (d, b) {
        d.__proto__ = b;
      } || function (d, b) {
        for (var p in b) {
          if (b.hasOwnProperty(p)) d[p] = b[p];
        }
      };

      return _extendStatics(d, b);
    };

    function __extends(d, b) {
      _extendStatics(d, b);

      function __() {
        this.constructor = d;
      }

      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var _assign = function __assign() {
      _assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];

          for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
          }
        }

        return t;
      };

      return _assign.apply(this, arguments);
    };

    function __rest(s, e) {
      var t = {};

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
      }

      if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
      }
      return t;
    }

    function __decorate(decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
      return function (target, key) {
        decorator(target, key, paramIndex);
      };
    }

    function __metadata(metadataKey, metadataValue) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
      return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }

        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }

        function step(result) {
          result.done ? resolve(result.value) : new P(function (resolve) {
            resolve(result.value);
          }).then(fulfilled, rejected);
        }

        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    }

    function __generator(thisArg, body) {
      var _ = {
        label: 0,
        sent: function sent() {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      },
          f,
          y,
          t,
          g;
      return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
      }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
        return this;
      }), g;

      function verb(n) {
        return function (v) {
          return step([n, v]);
        };
      }

      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");

        while (_) {
          try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];

            switch (op[0]) {
              case 0:
              case 1:
                t = op;
                break;

              case 4:
                _.label++;
                return {
                  value: op[1],
                  done: false
                };

              case 5:
                _.label++;
                y = op[1];
                op = [0];
                continue;

              case 7:
                op = _.ops.pop();

                _.trys.pop();

                continue;

              default:
                if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                  _ = 0;
                  continue;
                }

                if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                  _.label = op[1];
                  break;
                }

                if (op[0] === 6 && _.label < t[1]) {
                  _.label = t[1];
                  t = op;
                  break;
                }

                if (t && _.label < t[2]) {
                  _.label = t[2];

                  _.ops.push(op);

                  break;
                }

                if (t[2]) _.ops.pop();

                _.trys.pop();

                continue;
            }

            op = body.call(thisArg, _);
          } catch (e) {
            op = [6, e];
            y = 0;
          } finally {
            f = t = 0;
          }
        }

        if (op[0] & 5) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    }

    function __exportStar(m, exports) {
      for (var p in m) {
        if (!exports.hasOwnProperty(p)) exports[p] = m[p];
      }
    }

    function __values(o) {
      var m = typeof Symbol === "function" && o[Symbol.iterator],
          i = 0;
      if (m) return m.call(o);
      return {
        next: function next() {
          if (o && i >= o.length) o = void 0;
          return {
            value: o && o[i++],
            done: !o
          };
        }
      };
    }

    function __read(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m) return o;
      var i = m.call(o),
          r,
          ar = [],
          e;

      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
          ar.push(r.value);
        }
      } catch (error) {
        e = {
          error: error
        };
      } finally {
        try {
          if (r && !r.done && (m = i["return"])) m.call(i);
        } finally {
          if (e) throw e.error;
        }
      }

      return ar;
    }

    function __spread() {
      for (var ar = [], i = 0; i < arguments.length; i++) {
        ar = ar.concat(__read(arguments[i]));
      }

      return ar;
    }

    function __spreadArrays() {
      for (var s = 0, i = 0, il = arguments.length; i < il; i++) {
        s += arguments[i].length;
      }

      for (var r = Array(s), k = 0, i = 0; i < il; i++) {
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) {
          r[k] = a[j];
        }
      }

      return r;
    }

    ;

    function __await(v) {
      return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var g = generator.apply(thisArg, _arguments || []),
          i,
          q = [];
      return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i;

      function verb(n) {
        if (g[n]) i[n] = function (v) {
          return new Promise(function (a, b) {
            q.push([n, v, a, b]) > 1 || resume(n, v);
          });
        };
      }

      function resume(n, v) {
        try {
          step(g[n](v));
        } catch (e) {
          settle(q[0][3], e);
        }
      }

      function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
      }

      function fulfill(value) {
        resume("next", value);
      }

      function reject(value) {
        resume("throw", value);
      }

      function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
      }
    }

    function __asyncDelegator(o) {
      var i, p;
      return i = {}, verb("next"), verb("throw", function (e) {
        throw e;
      }), verb("return"), i[Symbol.iterator] = function () {
        return this;
      }, i;

      function verb(n, f) {
        i[n] = o[n] ? function (v) {
          return (p = !p) ? {
            value: __await(o[n](v)),
            done: n === "return"
          } : f ? f(v) : v;
        } : f;
      }
    }

    function __asyncValues(o) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var m = o[Symbol.asyncIterator],
          i;
      return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i);

      function verb(n) {
        i[n] = o[n] && function (v) {
          return new Promise(function (resolve, reject) {
            v = o[n](v), settle(resolve, reject, v.done, v.value);
          });
        };
      }

      function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function (v) {
          resolve({
            value: v,
            done: d
          });
        }, reject);
      }
    }

    function __makeTemplateObject(cooked, raw) {
      if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", {
          value: raw
        });
      } else {
        cooked.raw = raw;
      }

      return cooked;
    }

    ;

    function __importStar(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) for (var k in mod) {
        if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
      }
      result.default = mod;
      return result;
    }

    function __importDefault(mod) {
      return mod && mod.__esModule ? mod : {
        default: mod
      };
    }
    /***/

  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var routes = [];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AppRoutingModule);
    /***/
  },

  /***/
  "./src/app/app.component.css":
  /*!***********************************!*\
    !*** ./src/app/app.component.css ***!
    \***********************************/

  /*! exports provided: default */

  /***/
  function srcAppAppComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".layout-cabecalho {\r\n    height: 60px;\r\n    line-height: 60px;\r\n    border-bottom: 1px solid #ccc;\r\n  \r\n    background-color: #fff;\r\n  }\r\n\r\n  .layout-chamada {\r\n    padding: 80px 0;\r\n  \r\n    background: linear-gradient(to right,#ff6a00 0%,#f14d12 100%);\r\n  }\r\n\r\n  .logo {\r\n    width: 50px;\r\n    height: 40px;\r\n    float: left;\r\n  }\r\n\r\n  .layout-rodape {\r\n    padding: 40px 0;\r\n  \r\n    background-color: #484848;\r\n  \r\n    color: #fff;\r\n    text-align: center;\r\n  }\r\n\r\n  .layout-passos {\r\n    padding: 40px 0;\r\n    text-align: center;\r\n  }\r\n\r\n  /*--------------------*\\\r\n  CHAMADA\r\n\\*--------------------*/\r\n\r\n  .chamada {\r\n    font-size: 1.6rem; /* 1.6 * 10px = 16px */\r\n    text-align: center;\r\n  }\r\n\r\n  .chamada__titulo {\r\n    margin: 0;\r\n  \r\n    color: #fff;\r\n  \r\n    font-size: 3.375em; /* 54px / 16px = 3.375 */\r\n    line-height: 0.9;\r\n    text-shadow: 1px 1px #313131;\r\n  }\r\n\r\n  .chamada__subtitulo {\r\n    margin: 20px 0;\r\n  \r\n    color: #fff;\r\n  \r\n    font-size: 1em;\r\n  }\r\n\r\n  /*--------------------*\\\r\n  NAVEGAÇÃO\r\n\\*--------------------*/\r\n\r\n  .navegacao {\r\n}\r\n\r\n  .navegacao__menu {\r\n    float: left;\r\n}\r\n\r\n  .pyramid {\r\n    width: 100px;\r\n    height: 200px;\r\n    position: relative;\r\n    margin: 50px;\r\n  }\r\n\r\n  .pyramid::before,.pyramid::after {\r\n    content: '';\r\n    display: inline-block;\r\n    width: 0;\r\n    height: 0;\r\n    border: 50px solid;\r\n    position: absolute;\r\n  }\r\n\r\n  .pyramid::before {\r\n    border-color: transparent transparent #ff5656 transparent;\r\n    transform: scaleY(2) skewY(-40deg) rotate(45deg);\r\n  }\r\n\r\n  .pyramid::after {\r\n    border-color: transparent transparent #d64444 transparent;\r\n    transform: scaleY(2) skewY(40deg) rotate(-45deg);\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLDZCQUE2Qjs7SUFFN0Isc0JBQXNCO0VBQ3hCOztFQUVBO0lBQ0UsZUFBZTs7SUFFZiw2REFBNkQ7RUFDL0Q7O0VBRUE7SUFDRSxXQUFXO0lBQ1gsWUFBWTtJQUNaLFdBQVc7RUFDYjs7RUFFQTtJQUNFLGVBQWU7O0lBRWYseUJBQXlCOztJQUV6QixXQUFXO0lBQ1gsa0JBQWtCO0VBQ3BCOztFQUVBO0lBQ0UsZUFBZTtJQUNmLGtCQUFrQjtFQUNwQjs7RUFJRjs7dUJBRXVCOztFQUNyQjtJQUNFLGlCQUFpQixFQUFFLHNCQUFzQjtJQUN6QyxrQkFBa0I7RUFDcEI7O0VBRUE7SUFDRSxTQUFTOztJQUVULFdBQVc7O0lBRVgsa0JBQWtCLEVBQUUsd0JBQXdCO0lBQzVDLGdCQUFnQjtJQUNoQiw0QkFBNEI7RUFDOUI7O0VBRUE7SUFDRSxjQUFjOztJQUVkLFdBQVc7O0lBRVgsY0FBYztFQUNoQjs7RUFFRjs7dUJBRXVCOztFQUN2QjtBQUNBOztFQUVBO0lBQ0ksV0FBVztBQUNmOztFQUVBO0lBQ0ksWUFBWTtJQUNaLGFBQWE7SUFDYixrQkFBa0I7SUFDbEIsWUFBWTtFQUNkOztFQUVBO0lBQ0UsV0FBVztJQUNYLHFCQUFxQjtJQUNyQixRQUFRO0lBQ1IsU0FBUztJQUNULGtCQUFrQjtJQUNsQixrQkFBa0I7RUFDcEI7O0VBRUE7SUFDRSx5REFBeUQ7SUFDekQsZ0RBQWdEO0VBQ2xEOztFQUVBO0lBQ0UseURBQXlEO0lBQ3pELGdEQUFnRDtFQUNsRCIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxheW91dC1jYWJlY2FsaG8ge1xyXG4gICAgaGVpZ2h0OiA2MHB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDYwcHg7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2NjYztcclxuICBcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgfVxyXG5cclxuICAubGF5b3V0LWNoYW1hZGEge1xyXG4gICAgcGFkZGluZzogODBweCAwO1xyXG4gIFxyXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCNmZjZhMDAgMCUsI2YxNGQxMiAxMDAlKTtcclxuICB9XHJcblxyXG4gIC5sb2dvIHtcclxuICAgIHdpZHRoOiA1MHB4O1xyXG4gICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgfVxyXG5cclxuICAubGF5b3V0LXJvZGFwZSB7XHJcbiAgICBwYWRkaW5nOiA0MHB4IDA7XHJcbiAgXHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDg0ODQ4O1xyXG4gIFxyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgfVxyXG5cclxuICAubGF5b3V0LXBhc3NvcyB7XHJcbiAgICBwYWRkaW5nOiA0MHB4IDA7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgfVxyXG5cclxuXHJcblxyXG4vKi0tLS0tLS0tLS0tLS0tLS0tLS0tKlxcXHJcbiAgQ0hBTUFEQVxyXG5cXCotLS0tLS0tLS0tLS0tLS0tLS0tLSovXHJcbiAgLmNoYW1hZGEge1xyXG4gICAgZm9udC1zaXplOiAxLjZyZW07IC8qIDEuNiAqIDEwcHggPSAxNnB4ICovXHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgfVxyXG4gIFxyXG4gIC5jaGFtYWRhX190aXR1bG8ge1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gIFxyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgXHJcbiAgICBmb250LXNpemU6IDMuMzc1ZW07IC8qIDU0cHggLyAxNnB4ID0gMy4zNzUgKi9cclxuICAgIGxpbmUtaGVpZ2h0OiAwLjk7XHJcbiAgICB0ZXh0LXNoYWRvdzogMXB4IDFweCAjMzEzMTMxO1xyXG4gIH1cclxuICBcclxuICAuY2hhbWFkYV9fc3VidGl0dWxvIHtcclxuICAgIG1hcmdpbjogMjBweCAwO1xyXG4gIFxyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgXHJcbiAgICBmb250LXNpemU6IDFlbTtcclxuICB9XHJcblxyXG4vKi0tLS0tLS0tLS0tLS0tLS0tLS0tKlxcXHJcbiAgTkFWRUdBw4fDg09cclxuXFwqLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xyXG4ubmF2ZWdhY2FvIHtcclxufVxyXG5cclxuLm5hdmVnYWNhb19fbWVudSB7XHJcbiAgICBmbG9hdDogbGVmdDtcclxufVxyXG5cclxuLnB5cmFtaWQge1xyXG4gICAgd2lkdGg6IDEwMHB4O1xyXG4gICAgaGVpZ2h0OiAyMDBweDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIG1hcmdpbjogNTBweDtcclxuICB9XHJcbiAgXHJcbiAgLnB5cmFtaWQ6OmJlZm9yZSwucHlyYW1pZDo6YWZ0ZXIge1xyXG4gICAgY29udGVudDogJyc7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICB3aWR0aDogMDtcclxuICAgIGhlaWdodDogMDtcclxuICAgIGJvcmRlcjogNTBweCBzb2xpZDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB9XHJcbiAgXHJcbiAgLnB5cmFtaWQ6OmJlZm9yZSB7XHJcbiAgICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50IHRyYW5zcGFyZW50ICNmZjU2NTYgdHJhbnNwYXJlbnQ7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlWSgyKSBza2V3WSgtNDBkZWcpIHJvdGF0ZSg0NWRlZyk7XHJcbiAgfVxyXG4gIFxyXG4gIC5weXJhbWlkOjphZnRlciB7XHJcbiAgICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50IHRyYW5zcGFyZW50ICNkNjQ0NDQgdHJhbnNwYXJlbnQ7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlWSgyKSBza2V3WSg0MGRlZykgcm90YXRlKC00NWRlZyk7XHJcbiAgfSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var AppComponent = function AppComponent() {
      _classCallCheck(this, AppComponent);

      this.title = 'É Pirâmide';
    };

    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-root',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./app.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./app.component.css */
      "./src/app/app.component.css")).default]
    })], AppComponent);
    /***/
  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var angular_in_memory_web_api__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! angular-in-memory-web-api */
    "./node_modules/angular-in-memory-web-api/index.js");
    /* harmony import */


    var _in_memory_data_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./in-memory-data.service */
    "./src/app/in-memory-data.service.ts");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _menu_menu_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./menu/menu.component */
    "./src/app/menu/menu.component.ts");
    /* harmony import */


    var _passos_passos_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./passos/passos.component */
    "./src/app/passos/passos.component.ts");
    /* harmony import */


    var _noticias_noticias_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./noticias/noticias.component */
    "./src/app/noticias/noticias.component.ts");
    /* harmony import */


    var _denuncias_denuncias_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./denuncias/denuncias.component */
    "./src/app/denuncias/denuncias.component.ts");
    /* harmony import */


    var _contato_contato_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./contato/contato.component */
    "./src/app/contato/contato.component.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"], _menu_menu_component__WEBPACK_IMPORTED_MODULE_9__["MenuComponent"], _passos_passos_component__WEBPACK_IMPORTED_MODULE_10__["PassosComponent"], _noticias_noticias_component__WEBPACK_IMPORTED_MODULE_11__["NoticiasComponent"], _denuncias_denuncias_component__WEBPACK_IMPORTED_MODULE_12__["DenunciasComponent"], _contato_contato_component__WEBPACK_IMPORTED_MODULE_13__["ContatoComponent"]],
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_7__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"], // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
      // and returns simulated server responses.
      // Remove it when a real server is ready to receive requests.
      angular_in_memory_web_api__WEBPACK_IMPORTED_MODULE_5__["HttpClientInMemoryWebApiModule"].forRoot(_in_memory_data_service__WEBPACK_IMPORTED_MODULE_6__["InMemoryDataService"], {
        dataEncapsulation: false
      })],
      providers: [],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]]
    })], AppModule);
    /***/
  },

  /***/
  "./src/app/contato/contato.component.css":
  /*!***********************************************!*\
    !*** ./src/app/contato/contato.component.css ***!
    \***********************************************/

  /*! exports provided: default */

  /***/
  function srcAppContatoContatoComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbnRhdG8vY29udGF0by5jb21wb25lbnQuY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/contato/contato.component.ts":
  /*!**********************************************!*\
    !*** ./src/app/contato/contato.component.ts ***!
    \**********************************************/

  /*! exports provided: ContatoComponent */

  /***/
  function srcAppContatoContatoComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ContatoComponent", function () {
      return ContatoComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var ContatoComponent =
    /*#__PURE__*/
    function () {
      function ContatoComponent() {
        _classCallCheck(this, ContatoComponent);
      }

      _createClass(ContatoComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ContatoComponent;
    }();

    ContatoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-contato',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./contato.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/contato/contato.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./contato.component.css */
      "./src/app/contato/contato.component.css")).default]
    })], ContatoComponent);
    /***/
  },

  /***/
  "./src/app/denuncias/denuncias.component.css":
  /*!***************************************************!*\
    !*** ./src/app/denuncias/denuncias.component.css ***!
    \***************************************************/

  /*! exports provided: default */

  /***/
  function srcAppDenunciasDenunciasComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2RlbnVuY2lhcy9kZW51bmNpYXMuY29tcG9uZW50LmNzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/denuncias/denuncias.component.ts":
  /*!**************************************************!*\
    !*** ./src/app/denuncias/denuncias.component.ts ***!
    \**************************************************/

  /*! exports provided: DenunciasComponent */

  /***/
  function srcAppDenunciasDenunciasComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DenunciasComponent", function () {
      return DenunciasComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var DenunciasComponent =
    /*#__PURE__*/
    function () {
      function DenunciasComponent() {
        _classCallCheck(this, DenunciasComponent);
      }

      _createClass(DenunciasComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return DenunciasComponent;
    }();

    DenunciasComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-denuncias',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./denuncias.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/denuncias/denuncias.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./denuncias.component.css */
      "./src/app/denuncias/denuncias.component.css")).default]
    })], DenunciasComponent);
    /***/
  },

  /***/
  "./src/app/in-memory-data.service.ts":
  /*!*******************************************!*\
    !*** ./src/app/in-memory-data.service.ts ***!
    \*******************************************/

  /*! exports provided: InMemoryDataService */

  /***/
  function srcAppInMemoryDataServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "InMemoryDataService", function () {
      return InMemoryDataService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var InMemoryDataService =
    /*#__PURE__*/
    function () {
      function InMemoryDataService() {
        _classCallCheck(this, InMemoryDataService);
      }

      _createClass(InMemoryDataService, [{
        key: "createDb",
        value: function createDb() {
          var passos = [{
            id: 1,
            manchete: "Dinheiro fácil e rápido",
            descricao: "Informam que você ganhará muito dinheiro e de forma rápida?",
            imagemUrl: "../assets/imagens/hombre-negocios-dinero_1133-311.jpg",
            autor: "Vector de Negocios creado por dooder - www.freepik.es"
          }, {
            id: 2,
            manchete: "Retorno garantido do investido",
            descricao: "Prometem retorno elevado do valor investido? Você ganhará 10%, 20% ou até mais de 50% ao mês?",
            imagemUrl: "../assets/imagens/empleado-flecha-ascendente_1133-195.jpg",
            autor: "Vector de Negocios creado por dooder - www.freepik.es"
          }, {
            id: 3,
            manchete: "Recrutamento infinito",
            descricao: "Você tem que chamar mais gente para participar ? Você ganhará mais dinheiro ao chamar mais pessoas para a empresa?",
            imagemUrl: "../assets/imagens/jefe-empleado-iman-dinero_1133-219.jpg",
            autor: "Vector de Negocios creado por dooder - www.freepik.es"
          }, {
            id: 4,
            manchete: "Produto inexistente ou inútil",
            descricao: "A empresa não possui produto que gere receita de forma sustentável? A empresa vende produto caro, obsoleto ou inútil?",
            imagemUrl: "../assets/imagens/coleccion-iconos-negocios-color_1133-183.jpg",
            autor: "Vector de Negocios creado por dooder - www.freepik.es"
          }, {
            id: 5,
            manchete: "Parente ou amigo falou da empresa",
            descricao: "Algum parente ou amigo que sempre se meteu em rolo te chamou para participar?",
            imagemUrl: "../assets/imagens/jefe-empleado-hablando-dinero_1133-208.jpg",
            autor: "Vector de Negocios creado por dooder - www.freepik.es"
          }, {
            id: 6,
            manchete: "Não é pirâmide",
            descricao: "A pessoa passou tempo explicando o motivo de não ser uma pirâmide? Todo piramideiro dirá que na sua empresa é diferente.",
            imagemUrl: "../assets/imagens/diseno-conversacion-negocios_1133-88.jpg",
            autor: "Vector de Negocios creado por dooder - www.freepik.es"
          }];
          return {
            passos: passos
          };
        }
      }, {
        key: "genId",
        value: function genId(passos) {
          return passos.length > 0 ? Math.max.apply(Math, _toConsumableArray(passos.map(function (passo) {
            return passo.id;
          }))) + 1 : 1;
        }
      }]);

      return InMemoryDataService;
    }();

    InMemoryDataService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], InMemoryDataService);
    /***/
  },

  /***/
  "./src/app/menu/menu.component.css":
  /*!*****************************************!*\
    !*** ./src/app/menu/menu.component.css ***!
    \*****************************************/

  /*! exports provided: default */

  /***/
  function srcAppMenuMenuComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".menu li {\r\n    list-style: none;\r\n    padding: 0em;\r\n    cursor: pointer;\r\n    display: inline-block;\r\n    -webkit-text-decoration-line: none;\r\n            text-decoration-line: none;\r\n    margin-right: 5px;\r\n}\r\n\r\n.menu li ::before { \r\n    margin-right: 0px;\r\n}\r\n\r\n.menu li:hover {\r\n    background-color: #c7eaff;    \r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWVudS9tZW51LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxnQkFBZ0I7SUFDaEIsWUFBWTtJQUNaLGVBQWU7SUFDZixxQkFBcUI7SUFDckIsa0NBQTBCO1lBQTFCLDBCQUEwQjtJQUMxQixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSx5QkFBeUI7QUFDN0IiLCJmaWxlIjoic3JjL2FwcC9tZW51L21lbnUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tZW51IGxpIHtcclxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgICBwYWRkaW5nOiAwZW07XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICB0ZXh0LWRlY29yYXRpb24tbGluZTogbm9uZTtcclxuICAgIG1hcmdpbi1yaWdodDogNXB4O1xyXG59XHJcblxyXG4ubWVudSBsaSA6OmJlZm9yZSB7IFxyXG4gICAgbWFyZ2luLXJpZ2h0OiAwcHg7XHJcbn1cclxuXHJcbi5tZW51IGxpOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNjN2VhZmY7ICAgIFxyXG59Il19 */";
    /***/
  },

  /***/
  "./src/app/menu/menu.component.ts":
  /*!****************************************!*\
    !*** ./src/app/menu/menu.component.ts ***!
    \****************************************/

  /*! exports provided: MenuComponent */

  /***/
  function srcAppMenuMenuComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MenuComponent", function () {
      return MenuComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _mocks_mock_menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../mocks/mock-menu */
    "./src/app/mocks/mock-menu.ts");

    var MenuComponent =
    /*#__PURE__*/
    function () {
      function MenuComponent() {
        _classCallCheck(this, MenuComponent);

        this.menus = _mocks_mock_menu__WEBPACK_IMPORTED_MODULE_2__["MENUS"];
      }

      _createClass(MenuComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return MenuComponent;
    }();

    MenuComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-menu',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./menu.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/menu/menu.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./menu.component.css */
      "./src/app/menu/menu.component.css")).default]
    })], MenuComponent);
    /***/
  },

  /***/
  "./src/app/mocks/mock-menu.ts":
  /*!************************************!*\
    !*** ./src/app/mocks/mock-menu.ts ***!
    \************************************/

  /*! exports provided: MENUS */

  /***/
  function srcAppMocksMockMenuTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MENUS", function () {
      return MENUS;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var MENUS = [{
      id: 1,
      texto: 'Home',
      menuPai: undefined
    }, {
      id: 2,
      texto: 'Identificar',
      menuPai: undefined
    }, {
      id: 3,
      texto: 'Notícias',
      menuPai: undefined
    }, {
      id: 4,
      texto: 'Contato',
      menuPai: undefined
    }];
    /***/
  },

  /***/
  "./src/app/noticias/noticias.component.css":
  /*!*************************************************!*\
    !*** ./src/app/noticias/noticias.component.css ***!
    \*************************************************/

  /*! exports provided: default */

  /***/
  function srcAppNoticiasNoticiasComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL25vdGljaWFzL25vdGljaWFzLmNvbXBvbmVudC5jc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/noticias/noticias.component.ts":
  /*!************************************************!*\
    !*** ./src/app/noticias/noticias.component.ts ***!
    \************************************************/

  /*! exports provided: NoticiasComponent */

  /***/
  function srcAppNoticiasNoticiasComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NoticiasComponent", function () {
      return NoticiasComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var NoticiasComponent =
    /*#__PURE__*/
    function () {
      function NoticiasComponent() {
        _classCallCheck(this, NoticiasComponent);
      }

      _createClass(NoticiasComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return NoticiasComponent;
    }();

    NoticiasComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-noticias',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./noticias.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/noticias/noticias.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./noticias.component.css */
      "./src/app/noticias/noticias.component.css")).default]
    })], NoticiasComponent);
    /***/
  },

  /***/
  "./src/app/passo.service.ts":
  /*!**********************************!*\
    !*** ./src/app/passo.service.ts ***!
    \**********************************/

  /*! exports provided: PassoService */

  /***/
  function srcAppPassoServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PassoService", function () {
      return PassoService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");

    var PassoService =
    /*#__PURE__*/
    function () {
      function PassoService(http) {
        _classCallCheck(this, PassoService);

        this.http = http;
        this.passosUrl = 'api/passos';
        this.httpOptions = {
          headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Content-Type': 'application/json'
          })
        };
      }

      _createClass(PassoService, [{
        key: "getPassos",
        value: function getPassos() {
          return this.http.get(this.passosUrl).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.tratarErro('getPassos', [])));
        }
      }, {
        key: "tratarErro",
        value: function tratarErro() {
          var _this = this;

          var operation = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'operation';
          var result = arguments.length > 1 ? arguments[1] : undefined;
          return function (error) {
            console.error(error);

            _this.log("".concat(operation, " falha: ").concat(error.message));

            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(result);
          };
        }
      }, {
        key: "log",
        value: function log(message) {
          console.log("PassoService: ".concat(message));
        }
      }]);

      return PassoService;
    }();

    PassoService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }];
    };

    PassoService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], PassoService);
    /***/
  },

  /***/
  "./src/app/passos/passos.component.css":
  /*!*********************************************!*\
    !*** ./src/app/passos/passos.component.css ***!
    \*********************************************/

  /*! exports provided: default */

  /***/
  function srcAppPassosPassosComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "img {\r\n    height: 30rem;\r\n    width: 35rem;    \r\n    border-radius: 50%;\r\n    border-style: double;\r\n    margin: 20px 0px;\r\n}\r\n\r\n.artigos {\r\n    \r\n}\r\n\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFzc29zL3Bhc3Nvcy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksYUFBYTtJQUNiLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsb0JBQW9CO0lBQ3BCLGdCQUFnQjtBQUNwQjs7QUFFQTs7QUFFQSIsImZpbGUiOiJzcmMvYXBwL3Bhc3Nvcy9wYXNzb3MuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImltZyB7XHJcbiAgICBoZWlnaHQ6IDMwcmVtO1xyXG4gICAgd2lkdGg6IDM1cmVtOyAgICBcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIGJvcmRlci1zdHlsZTogZG91YmxlO1xyXG4gICAgbWFyZ2luOiAyMHB4IDBweDtcclxufVxyXG5cclxuLmFydGlnb3Mge1xyXG4gICAgXHJcbn1cclxuXHJcblxyXG4iXX0= */";
    /***/
  },

  /***/
  "./src/app/passos/passos.component.ts":
  /*!********************************************!*\
    !*** ./src/app/passos/passos.component.ts ***!
    \********************************************/

  /*! exports provided: PassosComponent */

  /***/
  function srcAppPassosPassosComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PassosComponent", function () {
      return PassosComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _passo_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../passo.service */
    "./src/app/passo.service.ts");

    var PassosComponent =
    /*#__PURE__*/
    function () {
      function PassosComponent(passosService) {
        _classCallCheck(this, PassosComponent);

        this.passosService = passosService;
        this.indiceAtual = 6;
        this.currentJustify = 'start';
      }

      _createClass(PassosComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.getPassos();
        }
      }, {
        key: "getPassos",
        value: function getPassos() {
          var _this2 = this;

          this.passosService.getPassos().subscribe(function (passos) {
            return _this2.passos = passos;
          });
        }
      }, {
        key: "onProximoPasso",
        value: function onProximoPasso() {
          this.indiceAtual = this.indiceAtual + 1;

          if (this.indiceAtual < this.passos.length) {
            this.passoSelecionado = this.passos[this.indiceAtual];
          } else {
            this.indiceAtual = 0;
            this.passoSelecionado = this.passos[this.indiceAtual];
          }
        }
      }, {
        key: "beforeChange",
        value: function beforeChange($event) {
          console.log('Changing tab', $event);
        }
      }]);

      return PassosComponent;
    }();

    PassosComponent.ctorParameters = function () {
      return [{
        type: _passo_service__WEBPACK_IMPORTED_MODULE_2__["PassoService"]
      }];
    };

    PassosComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-passos',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./passos.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/passos/passos.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./passos.component.css */
      "./src/app/passos/passos.component.css")).default]
    })], PassosComponent);
    /***/
  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js"); // This file can be replaced during build by using the `fileReplacements` array.
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

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser-dynamic */
    "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
    }

    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"]).catch(function (err) {
      return console.error(err);
    });
    /***/
  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! D:\código fonte\Personale\epiramide\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map