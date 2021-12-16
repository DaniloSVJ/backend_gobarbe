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
var offers_1 = __importDefault(require("./offers"));
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
    ], Users.prototype, "buyer_id", void 0);
    __decorate([
        (0, typeorm_1.Column)(),
        __metadata("design:type", String)
    ], Users.prototype, "vendor_id", void 0);
    __decorate([
        (0, typeorm_1.Column)(),
        __metadata("design:type", String)
    ], Users.prototype, "offer_id", void 0);
    __decorate([
        (0, typeorm_1.ManyToOne)(function () { return users_1.default; }),
        (0, typeorm_1.JoinColumn)({ name: 'buyer_id' }),
        __metadata("design:type", users_1.default)
    ], Users.prototype, "buyer", void 0);
    __decorate([
        (0, typeorm_1.ManyToOne)(function () { return users_1.default; }),
        (0, typeorm_1.JoinColumn)({ name: 'vendor_id' }),
        __metadata("design:type", users_1.default)
    ], Users.prototype, "vendo", void 0);
    __decorate([
        (0, typeorm_1.ManyToOne)(function () { return offers_1.default; }),
        (0, typeorm_1.JoinColumn)({ name: 'offer_id' }),
        __metadata("design:type", offers_1.default)
    ], Users.prototype, "offer", void 0);
    __decorate([
        (0, typeorm_1.Column)(),
        __metadata("design:type", String)
    ], Users.prototype, "status", void 0);
    __decorate([
        (0, typeorm_1.Column)(),
        __metadata("design:type", String)
    ], Users.prototype, "contract", void 0);
    __decorate([
        (0, typeorm_1.CreateDateColumn)(),
        __metadata("design:type", Date)
    ], Users.prototype, "created_at", void 0);
    __decorate([
        (0, typeorm_1.UpdateDateColumn)(),
        __metadata("design:type", Date)
    ], Users.prototype, "updated_at", void 0);
    Users = __decorate([
        (0, typeorm_1.Entity)('userss')
    ], Users);
    return Users;
}());
exports.default = Users;
