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
var express_1 = require("express");
var CreateUserService_1 = __importDefault(require("../service/CreateUserService"));
var ensureAuthenticated_1 = __importDefault(require("../middleware/ensureAuthenticated"));
var userRouter = (0, express_1.Router)();
userRouter.use(ensureAuthenticated_1.default);
userRouter.post('/', function (request, response) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, name, email, password, birthday, cpf_cnpj, phone, whatsapp, zipcode, state, city, district, region, address, ad_number, status, createUser, user, userWithoutPassword;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _a = request.body, name = _a.name, email = _a.email, password = _a.password, birthday = _a.birthday, cpf_cnpj = _a.cpf_cnpj, phone = _a.phone, whatsapp = _a.whatsapp, zipcode = _a.zipcode, state = _a.state, city = _a.city, district = _a.district, region = _a.region, address = _a.address, ad_number = _a.ad_number, status = _a.status;
                createUser = new CreateUserService_1.default();
                return [4 /*yield*/, createUser.execute({
                        name: name,
                        email: email,
                        password: password,
                        user_type: 'official',
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
                    })];
            case 1:
                user = _b.sent();
                userWithoutPassword = {
                    id: user.id,
                    order: user.status,
                    name: user.name,
                    email: user.email,
                    user_type: user.user_type.split(','),
                    status: user.status,
                    birthday: user.birthday,
                    cpf_cnpj: user.cpf_cnpj,
                    phone: user.phone,
                    whatsapp: user.whatsapp,
                    zipcode: user.zipcode,
                    state: user.state,
                    city: user.city,
                    district: user.district,
                    region: user.region,
                    address: user.address,
                    ad_number: user.ad_number,
                    created_at: user.created_at,
                    updated_at: user.updated_at,
                };
                return [2 /*return*/, response.json(userWithoutPassword)];
        }
    });
}); });
userRouter.patch('/:id', function (request, response) { return __awaiter(void 0, void 0, void 0, function () {
    var id, _a, name, email, birthday, cpf_cnpj, phone, whatsapp, zipcode, state, city, district, region, address, ad_number, status, updateUser, user, userWithoutPassword;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                id = request.params.id;
                _a = request.body, name = _a.name, email = _a.email, birthday = _a.birthday, cpf_cnpj = _a.cpf_cnpj, phone = _a.phone, whatsapp = _a.whatsapp, zipcode = _a.zipcode, state = _a.state, city = _a.city, district = _a.district, region = _a.region, address = _a.address, ad_number = _a.ad_number, status = _a.status;
                updateUser = new CreateUserService_1.default();
                return [4 /*yield*/, updateUser.update(id, name, email, "official", birthday, cpf_cnpj, phone, whatsapp, zipcode, state, city, district, region, address, ad_number, status)];
            case 1:
                user = _b.sent();
                userWithoutPassword = {
                    id: user === null || user === void 0 ? void 0 : user.id,
                    order: user === null || user === void 0 ? void 0 : user.order,
                    name: user === null || user === void 0 ? void 0 : user.name,
                    email: user === null || user === void 0 ? void 0 : user.email,
                    user_type: user === null || user === void 0 ? void 0 : user.user_type.split(','),
                    status: user === null || user === void 0 ? void 0 : user.status,
                    birthday: user === null || user === void 0 ? void 0 : user.birthday,
                    cpf_cnpj: user === null || user === void 0 ? void 0 : user.cpf_cnpj,
                    phone: user === null || user === void 0 ? void 0 : user.phone,
                    whatsapp: user === null || user === void 0 ? void 0 : user.whatsapp,
                    zipcode: user === null || user === void 0 ? void 0 : user.zipcode,
                    state: user === null || user === void 0 ? void 0 : user.state,
                    city: user === null || user === void 0 ? void 0 : user.city,
                    district: user === null || user === void 0 ? void 0 : user.district,
                    region: user === null || user === void 0 ? void 0 : user.region,
                    address: user === null || user === void 0 ? void 0 : user.address,
                    ad_number: user === null || user === void 0 ? void 0 : user.ad_number,
                    created_at: user === null || user === void 0 ? void 0 : user.created_at,
                    updated_at: user === null || user === void 0 ? void 0 : user.updated_at,
                };
                return [2 /*return*/, response.json(userWithoutPassword)];
        }
    });
}); });
userRouter.get('/', function (request, response) { return __awaiter(void 0, void 0, void 0, function () {
    var viewUsers, user, userWithoutPassword;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                viewUsers = new CreateUserService_1.default();
                return [4 /*yield*/, viewUsers.getAllOffices()];
            case 1:
                user = _a.sent();
                userWithoutPassword = user.map(function (user) { return ({
                    id: user === null || user === void 0 ? void 0 : user.id,
                    order: user === null || user === void 0 ? void 0 : user.order,
                    name: user === null || user === void 0 ? void 0 : user.name,
                    email: user === null || user === void 0 ? void 0 : user.email,
                    user_type: user === null || user === void 0 ? void 0 : user.user_type.split(','),
                    status: user === null || user === void 0 ? void 0 : user.status,
                    birthday: user === null || user === void 0 ? void 0 : user.birthday,
                    cpf_cnpj: user === null || user === void 0 ? void 0 : user.cpf_cnpj,
                    phone: user === null || user === void 0 ? void 0 : user.phone,
                    whatsapp: user === null || user === void 0 ? void 0 : user.whatsapp,
                    zipcode: user === null || user === void 0 ? void 0 : user.zipcode,
                    state: user === null || user === void 0 ? void 0 : user.state,
                    city: user === null || user === void 0 ? void 0 : user.city,
                    district: user === null || user === void 0 ? void 0 : user.district,
                    region: user === null || user === void 0 ? void 0 : user.region,
                    address: user === null || user === void 0 ? void 0 : user.address,
                    ad_number: user === null || user === void 0 ? void 0 : user.ad_number,
                    created_at: user.created_at,
                    updated_at: user.updated_at,
                }); });
                return [2 /*return*/, response.json(userWithoutPassword)];
        }
    });
}); });
userRouter.get('/:id', function (request, response) { return __awaiter(void 0, void 0, void 0, function () {
    var id, viewUser, user, userWithoutPassword;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                id = request.params.id;
                viewUser = new CreateUserService_1.default();
                return [4 /*yield*/, viewUser.viewone(id)];
            case 1:
                user = _a.sent();
                userWithoutPassword = {
                    id: user.id,
                    order: user.order,
                    name: user.name,
                    email: user.email,
                    user_type: user.user_type.split(','),
                    status: user.status,
                    birthday: user.birthday,
                    cpf_cnpj: user.cpf_cnpj,
                    phone: user.phone,
                    whatsapp: user.whatsapp,
                    zipcode: user.zipcode,
                    state: user.state,
                    city: user.city,
                    district: user.district,
                    region: user.region,
                    address: user.address,
                    ad_number: user.ad_number,
                    created_at: user.created_at,
                    updated_at: user.updated_at,
                };
                return [2 /*return*/, response.json(userWithoutPassword)];
        }
    });
}); });
userRouter.delete('/:id', function (request, response) { return __awaiter(void 0, void 0, void 0, function () {
    var id, deleteUser, user;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                id = request.params.id;
                deleteUser = new CreateUserService_1.default();
                return [4 /*yield*/, deleteUser.delete(id)];
            case 1:
                user = _a.sent();
                return [2 /*return*/, response.json({ message: "Disabled user" })];
        }
    });
}); });
exports.default = userRouter;
