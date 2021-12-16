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
var offers_1 = __importDefault(require("./offers"));
var product_1 = __importDefault(require("./product"));
var Product_atributes = /** @class */ (function () {
    function Product_atributes() {
    }
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
        __metadata("design:type", String)
    ], Product_atributes.prototype, "id", void 0);
    __decorate([
        (0, typeorm_1.Column)('integer'),
        __metadata("design:type", Number)
    ], Product_atributes.prototype, "order", void 0);
    __decorate([
        (0, typeorm_1.Column)(),
        __metadata("design:type", String)
    ], Product_atributes.prototype, "name", void 0);
    __decorate([
        (0, typeorm_1.Column)(),
        __metadata("design:type", String)
    ], Product_atributes.prototype, "product_id", void 0);
    __decorate([
        (0, typeorm_1.ManyToOne)(function () { return product_1.default; }),
        (0, typeorm_1.JoinColumn)({ name: 'product_id' }),
        __metadata("design:type", product_1.default)
    ], Product_atributes.prototype, "product", void 0);
    __decorate([
        (0, typeorm_1.OneToMany)(function () { return offers_1.default; }, function (offer) { return offer.atributes; }),
        __metadata("design:type", Array)
    ], Product_atributes.prototype, "offer", void 0);
    __decorate([
        (0, typeorm_1.CreateDateColumn)(),
        __metadata("design:type", Date)
    ], Product_atributes.prototype, "created_at", void 0);
    __decorate([
        (0, typeorm_1.UpdateDateColumn)(),
        __metadata("design:type", Date)
    ], Product_atributes.prototype, "updated_at", void 0);
    Product_atributes = __decorate([
        (0, typeorm_1.Entity)('product_atributes')
    ], Product_atributes);
    return Product_atributes;
}());
exports.default = Product_atributes;
