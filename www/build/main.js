webpackJsonp([8],{

/***/ 160:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CadastroPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_usuarios_usuarios__ = __webpack_require__(220);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_fire_auth__ = __webpack_require__(68);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};






/**
 * Generated class for the CadastroPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CadastroPage = /** @class */ (function () {
    function CadastroPage(navCtrl, navParams, dbUsuario, alertCtrl, fb) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.dbUsuario = dbUsuario;
        this.alertCtrl = alertCtrl;
        this.fb = fb;
        this.usuario = { nome: '', cpf: '', email: '', telefone: '', password: '' };
    }
    CadastroPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CadastroPage');
    };
    CadastroPage.prototype.salvar = function () {
        return __awaiter(this, void 0, void 0, function () {
            var result, e_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.fb.auth.createUserWithEmailAndPassword(this.usuario.email, this.usuario.password)];
                    case 1:
                        result = _a.sent();
                        this.dbUsuario.salvar(this.usuario);
                        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */]);
                        this.showAlert(1);
                        console.log(result);
                        return [3 /*break*/, 3];
                    case 2:
                        e_1 = _a.sent();
                        this.showAlert(2);
                        console.log(e_1);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    CadastroPage.prototype.showAlert = function (p) {
        if (p == 1) {
            var alert_1 = this.alertCtrl.create({
                title: 'Ola!!',
                subTitle: 'Cadastro realizado com sucesso!',
                buttons: ['OK']
            });
            alert_1.present();
        }
        else {
            var alert_2 = this.alertCtrl.create({
                title: 'Ola!!',
                subTitle: 'Cadastro com erro!!, email invalido ou senha com menos de 4 digitos.',
                buttons: ['OK']
            });
            alert_2.present();
        }
    };
    CadastroPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-cadastro',template:/*ion-inline-start:"C:\Users\Lucas\Desktop\INTEGRADORA\INTEGRADORA\AtividadeIntegradora\src\pages\cadastro\cadastro.html"*/'<!--\n  Generated template for the CadastroPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Cadastro</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding class="body-default">\n    <ion-list style="opacity:0.8; margin-top: 20px;">\n        <ion-item>\n            <ion-input type="text" placeholder="Nome" [(ngModel)]="usuario.nome"></ion-input>\n          </ion-item>\n          <ion-item>\n              <ion-input type="text" placeholder="CPF" [(ngModel)]="usuario.cpf"></ion-input>\n            </ion-item>\n          <ion-item>\n              <ion-input type="text" placeholder="Email" [(ngModel)]="usuario.email"></ion-input>\n            </ion-item>\n            <ion-item>\n                <ion-input type="text" placeholder="Telefone" [(ngModel)]="usuario.telefone"></ion-input>\n              </ion-item>\n  \n    \n        <ion-item>\n          <ion-input type="password" placeholder="Senha" [(ngModel)]="usuario.password"></ion-input>\n        </ion-item>\n      </ion-list>\n    \n      <button ion-button full round class="btn-cadastrar" (click)="salvar()">Cadastrar</button>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\Lucas\Desktop\INTEGRADORA\INTEGRADORA\AtividadeIntegradora\src\pages\cadastro\cadastro.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_usuarios_usuarios__["a" /* UsuariosProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_4__angular_fire_auth__["a" /* AngularFireAuth */]])
    ], CadastroPage);
    return CadastroPage;
}());

//# sourceMappingURL=cadastro.js.map

/***/ }),

/***/ 161:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_fire_auth__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__home_home__ = __webpack_require__(67);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};





/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var LoginPage = /** @class */ (function () {
    function LoginPage(navCtrl, navParams, fbAuth, formBuilder, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.fbAuth = fbAuth;
        this.formBuilder = formBuilder;
        this.alertCtrl = alertCtrl;
        this.user = { email: '', password: '' };
        this.messageEmail = '';
        this.messagePassword = '';
        this.errorEmail = false;
        this.errorPassword = false;
        this.loginForm = formBuilder.group({
            email: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required],
            password: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required]
        });
    }
    LoginPage.prototype.login = function (user) {
        return __awaiter(this, void 0, void 0, function () {
            var result, e_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.fbAuth.auth.signInWithEmailAndPassword(user.email, user.password)];
                    case 1:
                        result = _a.sent();
                        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__home_home__["a" /* HomePage */]);
                        this.showAlert(1);
                        return [3 /*break*/, 3];
                    case 2:
                        e_1 = _a.sent();
                        console.error(e_1);
                        this.showAlert(2);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    LoginPage.prototype.showAlert = function (p) {
        if (p == 1) {
            var alert_1 = this.alertCtrl.create({
                title: 'Ola !!',
                subTitle: 'Login realizado com sucesso!',
                buttons: ['OK']
            });
            alert_1.present();
        }
        else {
            var alert_2 = this.alertCtrl.create({
                title: 'Ola !!',
                subTitle: 'Login com erro!!senha ou e-mail incorreto.',
                buttons: ['OK']
            });
            alert_2.present();
        }
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"C:\Users\Lucas\Desktop\INTEGRADORA\INTEGRADORA\AtividadeIntegradora\src\pages\login\login.html"*/'<!--\n  Generated template for the LoginPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>login</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding class="body-default">\n\n  <img class="logo" src="../../assets/imgs/control.png" alt="Logo">\n  <form [formGroup]="loginForm"  novalidate>\n\n    <ion-item>\n      <ion-input type="text" placeholder="Email" [(ngModel)]="user.email" formControlName = "email"></ion-input>\n    </ion-item>\n    <div *ngIf="errorEmail">\n        {{mensageEmail}}\n      </div>\n\n    <ion-item>\n      <ion-input type="password" placeholder="Senha" [(ngModel)]="user.password" formControlName = "password" ></ion-input>\n    </ion-item>\n    <div *ngIf="errorPassword">\n        {{mensagePassword}}\n    </div>\n\n\n  <button ion-button full round class="btn-login" (click)="login(user)">Entrar</button>\n</form>\n</ion-content>\n'/*ion-inline-end:"C:\Users\Lucas\Desktop\INTEGRADORA\INTEGRADORA\AtividadeIntegradora\src\pages\login\login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__angular_fire_auth__["a" /* AngularFireAuth */], __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 162:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContatoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(26);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the ContatoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ContatoPage = /** @class */ (function () {
    function ContatoPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    ContatoPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ContatoPage');
    };
    ContatoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-contato',template:/*ion-inline-start:"C:\Users\Lucas\Desktop\INTEGRADORA\INTEGRADORA\AtividadeIntegradora\src\pages\contato\contato.html"*/'<!--\n  Generated template for the ContatoPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>contato</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding class="principalcontato">\n  <h1>Equipe</h1>\n    <div >\n       \n      \n        <ion-list >\n          <ion-item>\n            <ion-thumbnail item-start>\n              <img src="../../assets/imgs/diego.jpg">\n            </ion-thumbnail>\n            <label><strong>Diego Pereira </strong></label>\n            <p style="font-size:12px;">diego25714@hotmail.com</p>\n          </ion-item>\n     \n        </ion-list>\n        <ion-list >\n            <ion-item>\n              <ion-thumbnail item-start>\n                <img src="../../assets/imgs/diegop.jpg">\n              </ion-thumbnail>\n              <label><strong>Diego Paiva </strong></label>\n              <p style="font-size:12px;">paivahenrique88@hotmail.com</p>\n            </ion-item>\n        \n          </ion-list>\n        \n          <ion-list >\n            <ion-item>\n              <ion-thumbnail item-start>\n                <img src="../../assets/imgs/JeanFernandes.jpg">\n              </ion-thumbnail>\n              <label><strong>Jean Fernandes</strong></label>\n              <p style="font-size:12px;">jeanfernandes10@hotmail.com</p>\n            </ion-item>\n       \n          </ion-list>\n          <ion-list >\n              <ion-item>\n                <ion-thumbnail item-start>\n                  <img src="../../assets/imgs/lucas.jpg">\n                </ion-thumbnail>\n                <label><strong>Lucas Silva </strong></label>\n                <p style="font-size:12px;">lucassousa71@hotmail.com</p>\n              </ion-item>\n          \n            </ion-list>\n      </div>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\Lucas\Desktop\INTEGRADORA\INTEGRADORA\AtividadeIntegradora\src\pages\contato\contato.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], ContatoPage);
    return ContatoPage;
}());

//# sourceMappingURL=contato.js.map

/***/ }),

/***/ 163:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DetalhesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__compra_compra__ = __webpack_require__(164);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the DetalhesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var DetalhesPage = /** @class */ (function () {
    function DetalhesPage(navCtrl, navParams, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.categoria = { capa: 0, memoria: 0, acessorio: 0 };
        this.tipocategoria = { capa: "", memoria: "", acessorio: "" };
        this.soma = 0;
        this.email = navParams.get('email');
    }
    DetalhesPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad DetalhesPage');
    };
    DetalhesPage.prototype.mostrar = function (tipo) {
        var alert = this.alertCtrl.create({
            title: 'Ola amigo!!',
            subTitle: 'Cadastro realizado com sucesso!',
            buttons: ['OK']
        });
        alert.present();
    };
    DetalhesPage.prototype.adicionarC = function (ad) {
        switch (ad) {
            case 1:
                this.categoria.capa = 100;
                this.tipocategoria.capa = "1";
                break;
            case 2:
                this.categoria.capa = 100;
                this.tipocategoria.capa = "2";
                break;
            case 3:
                this.categoria.capa = 100;
                this.tipocategoria.capa = "3";
                break;
        }
    };
    DetalhesPage.prototype.adicionarM = function (item) {
        switch (item) {
            case 1:
                this.categoria.memoria = 100;
                this.tipocategoria.memoria = "32 GB";
                break;
            case 2:
                this.categoria.memoria = 200;
                this.tipocategoria.memoria = "64 GB";
                break;
            case 3:
                this.categoria.memoria = 300;
                this.tipocategoria.memoria = "128 GB";
                break;
        }
    };
    DetalhesPage.prototype.adicionarA = function (item) {
        switch (item) {
            case 1:
                this.categoria.acessorio = 100;
                this.tipocategoria.acessorio = "1";
                break;
            case 2:
                this.categoria.acessorio = 200;
                this.tipocategoria.acessorio = "2";
                break;
            case 3:
                this.categoria.acessorio = 300;
                this.tipocategoria.acessorio = "3";
                break;
        }
    };
    DetalhesPage.prototype.comprar = function () {
        if (this.categoria.acessorio != 0 && this.categoria.capa != 0 && this.categoria.memoria != 0) {
            this.soma = this.categoria.acessorio + this.categoria.capa + this.categoria.memoria;
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__compra_compra__["a" /* CompraPage */], { categoria: this.categoria, tipoCategoria: this.tipocategoria, soma: this.soma, email: this.email });
        }
    };
    DetalhesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-detalhes',template:/*ion-inline-start:"C:\Users\Lucas\Desktop\INTEGRADORA\INTEGRADORA\AtividadeIntegradora\src\pages\detalhes\detalhes.html"*/'<!--\n  Generated template for the DetalhesPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>detalhes</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding class="principaldetalhe">\n    <ion-list radio-group >\n        <ion-list-header>\n          Capa<ion-badge >$100,00</ion-badge>\n        </ion-list-header>\n      \n        <ion-item class="radio">\n          <ion-label><ion-img class="img-radio"  src=\'../assets/imgs/tipo_capa.jpg\' ></ion-img> </ion-label>\n          <ion-radio class="radio" (click)="adicionarC(1)" ></ion-radio>\n        </ion-item>\n      \n        <ion-item class="radio">\n          <ion-label><ion-img class="img-radio"  src=\'../assets/imgs/tipo_capa2.jpg\' ></ion-img></ion-label>\n          <ion-radio (click)="adicionarC(2)"  ></ion-radio>\n        </ion-item>\n      \n        <ion-item class="radio">\n          \n          <ion-label > <ion-img class="img-radio"  src=\'../assets/imgs/tipo_capa3.jpg\' ></ion-img></ion-label>\n          <ion-radio (click)="adicionarC(3)"   ></ion-radio>\n          \n        </ion-item>\n      </ion-list>\n\n\n      <ion-list radio-group>\n        <ion-list-header>\n          Memoria\n        </ion-list-header>\n      \n        <ion-item class="radio">\n          <ion-label>32 GB <ion-badge >$100,00</ion-badge></ion-label>\n          <ion-radio (click)="adicionarM(1)"  ></ion-radio>\n        </ion-item>\n      \n        <ion-item class="radio">\n          <ion-label>64 GB<ion-badge >$200,00</ion-badge></ion-label>\n          <ion-radio (click)="adicionarM(2)" ></ion-radio>\n        </ion-item>\n      \n        <ion-item class="radio">\n          \n          <ion-label>128 GB <ion-badge >$300,00</ion-badge> </ion-label>\n          <ion-radio (click)="adicionarM(3)" ></ion-radio>\n          \n        </ion-item>\n      </ion-list>\n\n      <ion-list radio-group>\n        <ion-list-header>\n          Acessórios\n        </ion-list-header>\n      \n        <ion-item class="radio">\n          <ion-label>Opção 1 <ion-badge >$100,00</ion-badge></ion-label>\n          <ion-radio (click)="adicionarA(1)"></ion-radio>\n        </ion-item>\n      \n        <ion-item class="radio">\n          <ion-label>Opção 2 <ion-badge >$200,00</ion-badge></ion-label>\n          <ion-radio  (click)="adicionarA(2)"></ion-radio>\n        </ion-item>\n      \n        <ion-item class="radio">\n          \n          <ion-label>Opção 3 <ion-badge >$300,00</ion-badge></ion-label>\n          <ion-radio (click)="adicionarA(3)" ></ion-radio>\n          \n        </ion-item>\n      </ion-list>\n\n      <button ion-button full round class="btn-custom" (click)="comprar()">Comprar</button>\n      \n      \n\n      \n\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\Lucas\Desktop\INTEGRADORA\INTEGRADORA\AtividadeIntegradora\src\pages\detalhes\detalhes.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], DetalhesPage);
    return DetalhesPage;
}());

//# sourceMappingURL=detalhes.js.map

/***/ }),

/***/ 164:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CompraPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_fire_database__ = __webpack_require__(119);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_fire_auth__ = __webpack_require__(68);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the CompraPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CompraPage = /** @class */ (function () {
    function CompraPage(navCtrl, navParams, alertCtrl, db, afAuth) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.db = db;
        this.afAuth = afAuth;
        this.rangeObject = 1;
        this.categoria = navParams.get('categoria');
        this.tipoCategoria = navParams.get('tipoCategoria');
        this.valorTotal = navParams.get('soma');
        this.soma = navParams.get('soma');
        this.email = navParams.get('email');
    }
    CompraPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CompraPage');
    };
    CompraPage.prototype.calculaValorTotal = function () {
        this.valorTotal = this.soma * this.rangeObject;
    };
    CompraPage.prototype.confirmaCompar = function () {
        var alert = this.alertCtrl.create({
            title: 'Parabéns!',
            subTitle: 'Produto adiquirido com sucesso!',
            buttons: ['OK']
        });
        alert.present();
        this.salvar();
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */]);
    };
    CompraPage.prototype.salvar = function () {
        var compra = { email: '', valortotal: 0 };
        compra.valortotal = this.valorTotal;
        compra.email = this.email;
        this.db.list('compras').push(compra);
    };
    CompraPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-compra',template:/*ion-inline-start:"C:\Users\Lucas\Desktop\INTEGRADORA\INTEGRADORA\AtividadeIntegradora\src\pages\compra\compra.html"*/'<!--\n  Generated template for the CompraPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>compra</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding class="principalcompra">\n    <ion-card  id="cardcompra" style="opacity:0.85;">\n        <ion-card-header>\n          MiniConsole\n        </ion-card-header>\n        <ion-card-content >\n            <ion-img width="80" height="60" src="../assets/imgs/mini.jpg" style="position: absolute;"></ion-img>\n         \n          <p style="margin-left:85px"> Capa: tipo {{tipoCategoria.capa}}\n            <br>Memoria: {{tipoCategoria.memoria}}\n            <br>Acessório: Opção {{tipoCategoria.acessorio}}</p>\n        </ion-card-content>\n      </ion-card>\n\n      <ion-label style="color: #fdfdfd;">Quantidade <ion-badge >{{rangeObject}}</ion-badge></ion-label>\n      \n      <ion-item style="opacity:0.85; margin-bottom: 30px;border-radius: 10px;">\n\n          <ion-range min="1" max="10" step="1" snaps="true" color="secondary" [(ngModel)]="rangeObject" (ionChange)="calculaValorTotal()"></ion-range>\n\n      </ion-item>\n        \n      \n      \n\n\n    <ion-item style="opacity:0.85; margin-bottom: 30px; border-radius: 10px;">\n        <ion-label>Tipo de pagamento:</ion-label>\n        <ion-select >\n          <ion-option value="nes">Cartão</ion-option>\n          <ion-option value="n64">Boleto</ion-option>\n        </ion-select>\n      </ion-item>\n\n      <ion-item style="opacity:0.85; margin-bottom: 30px; border-radius: 10px;">\n\n          <ion-label>Valor Total: R${{valorTotal}},00</ion-label>\n\n      </ion-item>\n\n      <button ion-button full round class="btn-custom" style="opacity:0.85;" (click)="confirmaCompar()">Comprar</button>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\Lucas\Desktop\INTEGRADORA\INTEGRADORA\AtividadeIntegradora\src\pages\compra\compra.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_3__angular_fire_database__["a" /* AngularFireDatabase */], __WEBPACK_IMPORTED_MODULE_4__angular_fire_auth__["a" /* AngularFireAuth */]])
    ], CompraPage);
    return CompraPage;
}());

//# sourceMappingURL=compra.js.map

/***/ }),

/***/ 175:
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
webpackEmptyAsyncContext.id = 175;

/***/ }),

/***/ 219:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/cadastro/cadastro.module": [
		714,
		7
	],
	"../pages/carrinho/carrinho.module": [
		715,
		6
	],
	"../pages/compra/compra.module": [
		716,
		5
	],
	"../pages/contato/contato.module": [
		717,
		4
	],
	"../pages/detalhes/detalhes.module": [
		718,
		3
	],
	"../pages/error/error.module": [
		719,
		1
	],
	"../pages/login/login.module": [
		720,
		2
	],
	"../pages/produtos/produtos.module": [
		721,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 219;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 220:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UsuariosProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_fire_database__ = __webpack_require__(119);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/*
  Generated class for the UsuariosProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var UsuariosProvider = /** @class */ (function () {
    function UsuariosProvider(db) {
        this.db = db;
    }
    UsuariosProvider.prototype.getUsuario = function () {
        return this.db.list('usuarios').snapshotChanges();
    };
    UsuariosProvider.prototype.salvar = function (usuario) {
        this.db.list('usuarios').push(usuario);
    };
    UsuariosProvider.prototype.editar = function (usuario) {
        this.db.object('usuarios/' + usuario.key).update({});
    };
    UsuariosProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_fire_database__["a" /* AngularFireDatabase */]])
    ], UsuariosProvider);
    return UsuariosProvider;
}());

//# sourceMappingURL=usuarios.js.map

/***/ }),

/***/ 366:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CarrinhoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(26);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the CarrinhoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CarrinhoPage = /** @class */ (function () {
    function CarrinhoPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    CarrinhoPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CarrinhoPage');
    };
    CarrinhoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-carrinho',template:/*ion-inline-start:"C:\Users\Lucas\Desktop\INTEGRADORA\INTEGRADORA\AtividadeIntegradora\src\pages\carrinho\carrinho.html"*/'<!--\n  Generated template for the CarrinhoPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>carrinho</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\Lucas\Desktop\INTEGRADORA\INTEGRADORA\AtividadeIntegradora\src\pages\carrinho\carrinho.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], CarrinhoPage);
    return CarrinhoPage;
}());

//# sourceMappingURL=carrinho.js.map

/***/ }),

/***/ 367:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(368);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(372);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 372:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export firebaseConfig */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(362);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(365);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(711);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_cadastro_cadastro__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_contato_contato__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_login_login__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_carrinho_carrinho__ = __webpack_require__(366);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_detalhes_detalhes__ = __webpack_require__(163);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_compra_compra__ = __webpack_require__(164);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__providers_categorias_categorias__ = __webpack_require__(712);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__angular_fire__ = __webpack_require__(136);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__angular_fire_database__ = __webpack_require__(119);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__angular_fire_auth__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__providers_usuarios_usuarios__ = __webpack_require__(220);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


















var firebaseConfig = {
    apiKey: "AIzaSyDrk7JWU-Rzh3jW5jvvu4bPD1TGGjkaEdE",
    authDomain: "oldgames-b4269.firebaseapp.com",
    databaseURL: "https://oldgames-b4269.firebaseio.com",
    projectId: "oldgames-b4269",
    storageBucket: "oldgames-b4269.appspot.com",
    messagingSenderId: "838056127894"
};
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_cadastro_cadastro__["a" /* CadastroPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_contato_contato__["a" /* ContatoPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_carrinho_carrinho__["a" /* CarrinhoPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_detalhes_detalhes__["a" /* DetalhesPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_compra_compra__["a" /* CompraPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/cadastro/cadastro.module#CadastroPageModule', name: 'CadastroPage', segment: 'cadastro', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/carrinho/carrinho.module#CarrinhoPageModule', name: 'CarrinhoPage', segment: 'carrinho', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/compra/compra.module#CompraPageModule', name: 'CompraPage', segment: 'compra', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/contato/contato.module#ContatoPageModule', name: 'ContatoPage', segment: 'contato', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/detalhes/detalhes.module#DetalhesPageModule', name: 'DetalhesPage', segment: 'detalhes', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/error/error.module#ErrorPageModule', name: 'ErrorPage', segment: 'error', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/produtos/produtos.module#ProdutosPageModule', name: 'ProdutosPage', segment: 'produtos', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_14__angular_fire__["a" /* AngularFireModule */].initializeApp(firebaseConfig),
                __WEBPACK_IMPORTED_MODULE_15__angular_fire_database__["b" /* AngularFireDatabaseModule */],
                __WEBPACK_IMPORTED_MODULE_16__angular_fire_auth__["b" /* AngularFireAuthModule */],
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_cadastro_cadastro__["a" /* CadastroPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_contato_contato__["a" /* ContatoPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_carrinho_carrinho__["a" /* CarrinhoPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_detalhes_detalhes__["a" /* DetalhesPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_compra_compra__["a" /* CompraPage */],
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_15__angular_fire_database__["a" /* AngularFireDatabase */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_13__providers_categorias_categorias__["a" /* CategoriasProvider */],
                __WEBPACK_IMPORTED_MODULE_17__providers_usuarios_usuarios__["a" /* UsuariosProvider */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 67:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__cadastro_cadastro__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__contato_contato__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__detalhes_detalhes__ = __webpack_require__(163);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_fire_auth__ = __webpack_require__(68);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var HomePage = /** @class */ (function () {
    function HomePage(navCtrl, afAuth, toast) {
        this.navCtrl = navCtrl;
        this.afAuth = afAuth;
        this.toast = toast;
    }
    HomePage_1 = HomePage;
    HomePage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.afAuth.authState.subscribe(function (data) {
            if (data && data.email && data.uid) {
                _this.email = data.email;
                _this.toast.create({
                    message: "Boas vindas " + data.email,
                    duration: 3000
                }).present();
            }
            else {
                _this.toast.create({
                    message: 'Não foi possível autenticar.',
                    duration: 3000
                }).present();
            }
        });
    };
    HomePage.prototype.openPage1 = function () {
        this.navCtrl.push(HomePage_1);
    };
    HomePage.prototype.openPage2 = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__login_login__["a" /* LoginPage */]);
    };
    HomePage.prototype.openPage3 = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__cadastro_cadastro__["a" /* CadastroPage */]);
    };
    HomePage.prototype.openPage4 = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__contato_contato__["a" /* ContatoPage */]);
    };
    HomePage.prototype.goDetalhes = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__detalhes_detalhes__["a" /* DetalhesPage */], { email: this.email });
    };
    HomePage = HomePage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"C:\Users\Lucas\Desktop\INTEGRADORA\INTEGRADORA\AtividadeIntegradora\src\pages\home\home.html"*/'<ion-header>\n    <ion-navbar>\n    <button ion-button menuToggle >\n        <ion-icon name="menu"></ion-icon>\n      </button>\n        <ion-title style="margin-left:50px; margin-top:-30px; position:absolute">\n          OldGameStore\n        </ion-title>\n      </ion-navbar>   \n\n</ion-header>\n\n<ion-content class="principal" padding >\n    <ion-menu [content]="content" side="left" type="overlay">\n        <ion-content>\n          <ion-list>\n            <button ion-item (click)="openPage2()">\n              Login\n            </button>\n            <button ion-item (click)="openPage3()">\n              Cadastro\n            </button>\n            <button ion-item (click)="openPage4()">\n              Contato\n            </button>\n          </ion-list>\n        </ion-content>\n    </ion-menu>\n      \n      <ion-nav id="nav" #content [root]="rootPage"></ion-nav>\n\n      <ion-card style="opacity:0.85;" full id="card">\n        <ion-card-header>\n          MiniConsole\n        </ion-card-header>\n        <ion-card-content >\n            <ion-img width="80" height="60" src="../assets/imgs/mini.jpg" style="position: absolute;"></ion-img>\n         \n          <p style="margin-left:85px"> Escolha a capa,a capacidade e outros acessorios.</p>\n     \n        </ion-card-content>\n        <button ion-button round class="btn-custom1" full (click)="goDetalhes()">\n          Customizar\n        </button>\n      </ion-card>\n\n     \n   <!---tela de login, tela de cadastro -->   \n  \n \n</ion-content>'/*ion-inline-end:"C:\Users\Lucas\Desktop\INTEGRADORA\INTEGRADORA\AtividadeIntegradora\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_6__angular_fire_auth__["a" /* AngularFireAuth */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ToastController */]])
    ], HomePage);
    return HomePage;
    var HomePage_1;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 711:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(365);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(362);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(67);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\Lucas\Desktop\INTEGRADORA\INTEGRADORA\AtividadeIntegradora\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"C:\Users\Lucas\Desktop\INTEGRADORA\INTEGRADORA\AtividadeIntegradora\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 712:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CategoriasProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(713);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/*
  Generated class for the CategoriasProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var CategoriasProvider = /** @class */ (function () {
    function CategoriasProvider(http) {
        this.http = http;
        console.log('Hello CategoriasProvider Provider');
    }
    CategoriasProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], CategoriasProvider);
    return CategoriasProvider;
}());

//# sourceMappingURL=categorias.js.map

/***/ })

},[367]);
//# sourceMappingURL=main.js.map