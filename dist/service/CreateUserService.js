"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
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
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var typeorm_1 = require("typeorm");
var users_1 = __importDefault(require("../models/users"));
var bcryptjs_1 = require("bcryptjs");
var AppError_1 = __importDefault(require("../errors/AppError"));
var CreateUserService = /** @class */ (function () {
    function CreateUserService() {
    }
    CreateUserService.prototype.execute = function (_a) {
        var name = _a.name, email = _a.email, password = _a.password, user_type = _a.user_type, birthday = _a.birthday, cpf_cnpj = _a.cpf_cnpj, phone = _a.phone, whatsapp = _a.whatsapp, zipcode = _a.zipcode, state = _a.state, city = _a.city, district = _a.district, region = _a.region, address = _a.address, ad_number = _a.ad_number, status = _a.status;
        return __awaiter(this, void 0, void 0, function () {
            var usersRepsitory, checkUserExist, hashedpassword, user;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        usersRepsitory = (0, typeorm_1.getRepository)(users_1.default);
                        return [4 /*yield*/, usersRepsitory.findOne({
                                where: { email: email }
                            })];
                    case 1:
                        checkUserExist = _b.sent();
                        if (checkUserExist) {
                            throw new AppError_1.default('Email address alteready used.');
                        }
                        return [4 /*yield*/, (0, bcryptjs_1.hash)(password, 8)];
                    case 2:
                        hashedpassword = _b.sent();
                        user = usersRepsitory.create({
                            name: name,
                            email: email,
                            password: hashedpassword,
                            user_type: user_type,
                            birthday: birthday,
                            cpf_cnpj: cpf_cnpj,
                            phone: phone,
                            whatsapp: whatsapp,
                            zipcode: zipcode,
                            state: state,
                            city: city,
                            district: district,
                            region: region,
                            address: address,
                            ad_number: ad_number,
                            status: status
                        });
                        return [4 /*yield*/, usersRepsitory.save(user)];
                    case 3:
                        _b.sent();
                        return [2 /*return*/, user];
                }
            });
        });
    };
    CreateUserService.prototype.viewoneclient = function (email) {
        return __awaiter(this, void 0, void 0, function () {
            var usersRepsitory, user;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        usersRepsitory = (0, typeorm_1.getRepository)(users_1.default);
                        return [4 /*yield*/, usersRepsitory.findOne({
                                where: { email: email }
                            })];
                    case 1:
                        user = _a.sent();
                        if (!user) {
                            throw new AppError_1.default('Email address alteready used.');
                        }
                        return [2 /*return*/, user];
                }
            });
        });
    };
    CreateUserService.prototype.viewone = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var usersRepsitory, user;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        usersRepsitory = (0, typeorm_1.getRepository)(users_1.default);
                        return [4 /*yield*/, usersRepsitory.findOne({
                                where: { id: id }
                            })];
                    case 1:
                        user = _a.sent();
                        if (!user) {
                            throw new AppError_1.default('Email address alteready used.');
                        }
                        return [2 /*return*/, user];
                }
            });
        });
    };
    CreateUserService.prototype.getAllAdm = function () {
        return __awaiter(this, void 0, void 0, function () {
            var usersall, users;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, (0, typeorm_1.getRepository)(users_1.default)];
                    case 1:
                        usersall = _a.sent();
                        return [4 /*yield*/, usersall
                                .createQueryBuilder()
                                .where({ user_type: "admin" })
                                .getMany()];
                    case 2:
                        users = _a.sent();
                        if (!users) {
                            throw new AppError_1.default('Not found.');
                        }
                        return [2 /*return*/, (users)];
                }
            });
        });
    };
    CreateUserService.prototype.getAllOffices = function () {
        return __awaiter(this, void 0, void 0, function () {
            var usersall, users;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, (0, typeorm_1.getRepository)(users_1.default)];
                    case 1:
                        usersall = _a.sent();
                        return [4 /*yield*/, usersall
                                .createQueryBuilder()
                                .where({ user_type: "official" })
                                .getMany()];
                    case 2:
                        users = _a.sent();
                        if (!users) {
                            throw new AppError_1.default('Email address alteready used.');
                        }
                        //userss = users as Request
                        return [2 /*return*/, (users)];
                }
            });
        });
    };
    CreateUserService.prototype.getall = function () {
        return __awaiter(this, void 0, void 0, function () {
            var usersall, users;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, (0, typeorm_1.getRepository)(users_1.default)];
                    case 1:
                        usersall = _a.sent();
                        return [4 /*yield*/, usersall
                                .createQueryBuilder()
                                .where([{ user_type: "comprador" }, { user_type: "vendedor" }, { user_type: "comprador,vendedor" }, { user_type: "vendedor,comprador" }])
                                .getMany()];
                    case 2:
                        users = _a.sent();
                        if (!users) {
                            throw new AppError_1.default('Not found.');
                        }
                        return [2 /*return*/, users];
                }
            });
        });
    };
    CreateUserService.prototype.delete = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var userDelete, user;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        userDelete = (0, typeorm_1.getRepository)(users_1.default);
                        return [4 /*yield*/, userDelete.findOne({ where: { id: String(id) } })];
                    case 1:
                        user = _a.sent();
                        if (!user) {
                            throw new AppError_1.default('User not found.', 404);
                        }
                        user.status = false;
                        return [4 /*yield*/, userDelete.save(user)];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    CreateUserService.prototype.update = function (id, name, email, user_type, birthday, cpf_cnpj, phone, whatsapp, zipcode, state, city, district, region, address, ad_number, status) {
        return __awaiter(this, void 0, void 0, function () {
            var repositoryUser, user;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        repositoryUser = (0, typeorm_1.getRepository)(users_1.default);
                        return [4 /*yield*/, repositoryUser.findOne({ where: { id: String(id) } })];
                    case 1:
                        user = _a.sent();
                        if (!user) {
                            throw new AppError_1.default('User not found.', 404);
                        }
                        user.name = name,
                            user.email = email,
                            user.user_type = user_type,
                            user.birthday = birthday,
                            user.cpf_cnpj = cpf_cnpj,
                            user.phone = phone,
                            user.whatsapp = whatsapp,
                            user.zipcode = zipcode,
                            user.state = state,
                            user.city = city,
                            user.district = district,
                            user.region = region,
                            user.address = address,
                            user.ad_number = ad_number,
                            user.status = status;
                        return [4 /*yield*/, repositoryUser.save(user)];
                    case 2:
                        _a.sent();
                        return [2 /*return*/, user];
                }
            });
        });
    };
    return CreateUserService;
}());
exports.default = CreateUserService;
