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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var typeorm_1 = require("typeorm");
var users_1 = __importDefault(require("./users"));
var product_1 = __importDefault(require("./product"));
var product_atributes_1 = __importDefault(require("./product_atributes"));
var Users = /** @class */ (function () {
    function Users() {
    }
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
        __metadata("design:type", String)
    ], Users.prototype, "id", void 0);
    __decorate([
        (0, typeorm_1.Column)("integer"),
        __metadata("design:type", Number)
    ], Users.prototype, "order", void 0);
    __decorate([
        (0, typeorm_1.Column)(),
        __metadata("design:type", String)
    ], Users.prototype, "type_offer", void 0);
    __decorate([
        (0, typeorm_1.Column)(),
        __metadata("design:type", String)
    ], Users.prototype, "user_id", void 0);
    __decorate([
        (0, typeorm_1.Column)(),
        __metadata("design:type", String)
    ], Users.prototype, "product_id", void 0);
    __decorate([
        (0, typeorm_1.Column)(),
        __metadata("design:type", String)
    ], Users.prototype, "attr_id", void 0);
    __decorate([
        (0, typeorm_1.ManyToOne)(function () { return users_1.default; }),
        (0, typeorm_1.JoinColumn)({ name: 'user_id' }),
        __metadata("design:type", users_1.default)
    ], Users.prototype, "user", void 0);
    __decorate([
        (0, typeorm_1.ManyToOne)(function () { return product_1.default; }),
        (0, typeorm_1.JoinColumn)({ name: 'product_id' }),
        __metadata("design:type", product_1.default)
    ], Users.prototype, "product", void 0);
    __decorate([
        (0, typeorm_1.ManyToOne)(function () { return product_atributes_1.default; }),
        (0, typeorm_1.JoinColumn)({ name: 'attr_id' }),
        __metadata("design:type", product_atributes_1.default)
    ], Users.prototype, "atributes", void 0);
    __decorate([
        (0, typeorm_1.Column)(),
        __metadata("design:type", String)
    ], Users.prototype, "price", void 0);
    __decorate([
        (0, typeorm_1.Column)(),
        __metadata("design:type", String)
    ], Users.prototype, "amount", void 0);
    __decorate([
        (0, typeorm_1.Column)(),
        __metadata("design:type", String)
    ], Users.prototype, "form_of_stock", void 0);
    __decorate([
        (0, typeorm_1.Column)(),
        __metadata("design:type", String)
    ], Users.prototype, "comments", void 0);
    __decorate([
        (0, typeorm_1.Column)(),
        __metadata("design:type", String)
    ], Users.prototype, "zipcode", void 0);
    __decorate([
        (0, typeorm_1.Column)(),
        __metadata("design:type", String)
    ], Users.prototype, "state", void 0);
    __decorate([
        (0, typeorm_1.Column)(),
        __metadata("design:type", String)
    ], Users.prototype, "city", void 0);
    __decorate([
        (0, typeorm_1.Column)(),
        __metadata("design:type", String)
    ], Users.prototype, "district", void 0);
    __decorate([
        (0, typeorm_1.Column)(),
        __metadata("design:type", String)
    ], Users.prototype, "region", void 0);
    __decorate([
        (0, typeorm_1.Column)(),
        __metadata("design:type", String)
    ], Users.prototype, "address", void 0);
    __decorate([
        (0, typeorm_1.Column)(),
        __metadata("design:type", String)
    ], Users.prototype, "ad_number", void 0);
    __decorate([
        (0, typeorm_1.Column)('boolean'),
        __metadata("design:type", Boolean)
    ], Users.prototype, "status", void 0);
    __decorate([
        (0, typeorm_1.CreateDateColumn)(),
        __metadata("design:type", Date)
    ], Users.prototype, "created_at", void 0);
    __decorate([
        (0, typeorm_1.UpdateDateColumn)(),
        __metadata("design:type", Date)
    ], Users.prototype, "updated_at", void 0);
    Users = __decorate([
        (0, typeorm_1.Entity)('offer')
    ], Users);
    return Users;
}());
exports.default = Users;
