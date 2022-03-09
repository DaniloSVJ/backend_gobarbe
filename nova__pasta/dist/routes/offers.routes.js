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
var MethodsOffers_1 = __importDefault(require("../service/MethodsOffers"));
var ensureAuthenticated_1 = __importDefault(require("../middleware/ensureAuthenticated"));
var offerRouter = (0, express_1.Router)();
offerRouter.use(ensureAuthenticated_1.default);
offerRouter.post('/', function (request, response) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, type_offer, user_id, product_id, attr_id, price, amount, form_of_stock, comments, zipcode, state, city, district, region, address, ad_number, status, createOffer, offers, Offers;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _a = request.body, type_offer = _a.type_offer, user_id = _a.user_id, product_id = _a.product_id, attr_id = _a.attr_id, price = _a.price, amount = _a.amount, form_of_stock = _a.form_of_stock, comments = _a.comments, zipcode = _a.zipcode, state = _a.state, city = _a.city, district = _a.district, region = _a.region, address = _a.address, ad_number = _a.ad_number, status = _a.status;
                createOffer = new MethodsOffers_1.default();
                return [4 /*yield*/, createOffer.execute({
                        type_offer: type_offer,
                        user_id: user_id,
                        product_id: product_id,
                        attr_id: attr_id,
                        price: price,
                        amount: amount,
                        form_of_stock: form_of_stock,
                        comments: comments,
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
                offers = _b.sent();
                Offers = {
                    id: offers.id,
                    order: offers.order,
                    type_offer: offers.type_offer,
                    user_id: offers.user_id,
                    product_id: offers.product_id,
                    attr_id: offers.attr_id,
                    price: offers.price,
                    amount: offers.amount,
                    form_of_stock: offers.form_of_stock,
                    comments: offers.comments,
                    zipcode: offers.zipcode,
                    state: offers.state,
                    city: offers.city,
                    district: offers.district,
                    region: offers.region,
                    address: offers.address,
                    ad_number: offers.ad_number,
                    status: offers.status,
                    created_at: offers.created_at,
                    updated_at: offers.updated_at,
                };
                return [2 /*return*/, response.json(Offers)];
        }
    });
}); });
offerRouter.patch('/:id', function (request, response) { return __awaiter(void 0, void 0, void 0, function () {
    var id, _a, type_offer, user_id, product_id, attr_id, price, amount, form_of_stock, comments, zipcode, state, city, district, region, address, ad_number, status, updateOffers, offers;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                id = request.params.id;
                _a = request.body, type_offer = _a.type_offer, user_id = _a.user_id, product_id = _a.product_id, attr_id = _a.attr_id, price = _a.price, amount = _a.amount, form_of_stock = _a.form_of_stock, comments = _a.comments, zipcode = _a.zipcode, state = _a.state, city = _a.city, district = _a.district, region = _a.region, address = _a.address, ad_number = _a.ad_number, status = _a.status;
                updateOffers = new MethodsOffers_1.default();
                return [4 /*yield*/, updateOffers.update(id, type_offer, user_id, product_id, attr_id, price, amount, form_of_stock, comments, zipcode, state, city, district, region, address, ad_number, status)];
            case 1:
                offers = _b.sent();
                return [2 /*return*/, response.json(offers)];
        }
    });
}); });
offerRouter.get('/', function (request, response) { return __awaiter(void 0, void 0, void 0, function () {
    var viewOffers, offers, Offers;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                viewOffers = new MethodsOffers_1.default();
                return [4 /*yield*/, viewOffers.getall()];
            case 1:
                offers = _a.sent();
                Offers = offers.map(function (offers) { return ({
                    id: offers.id,
                    order: offers.order,
                    name: offers.type_offer,
                    email: offers.user_id,
                    offers_type: offers.product_id,
                    status: offers.attr_id,
                    birthday: offers.price,
                    cpf_cnpj: offers.amount,
                    phone: offers.form_of_stock,
                    whatsapp: offers.comments,
                    zipcode: offers.zipcode,
                    state: offers.state,
                    city: offers.city,
                    district: offers.district,
                    region: offers.region,
                    address: offers.address,
                    ad_number: offers.ad_number,
                    created_at: offers.created_at,
                    updated_at: offers.updated_at,
                }); });
                return [2 /*return*/, response.json(Offers)];
        }
    });
}); });
offerRouter.get('/:id', function (request, response) { return __awaiter(void 0, void 0, void 0, function () {
    var id, viewOffers, offers, Offers;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                id = request.params.id;
                viewOffers = new MethodsOffers_1.default();
                return [4 /*yield*/, viewOffers.viewOffers(id)];
            case 1:
                offers = _a.sent();
                Offers = {
                    id: offers.id,
                    order: offers.order,
                    name: offers.type_offer,
                    email: offers.user_id,
                    offers_type: offers.product_id,
                    status: offers.attr_id,
                    birthday: offers.price,
                    cpf_cnpj: offers.amount,
                    phone: offers.form_of_stock,
                    whatsapp: offers.comments,
                    zipcode: offers.zipcode,
                    state: offers.state,
                    city: offers.city,
                    district: offers.district,
                    region: offers.region,
                    address: offers.address,
                    ad_number: offers.ad_number,
                    created_at: offers.created_at,
                    updated_at: offers.updated_at,
                };
                return [2 /*return*/, response.json(Offers)];
        }
    });
}); });
offerRouter.delete('/:id', function (request, response) { return __awaiter(void 0, void 0, void 0, function () {
    var id, deleteOffers;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                id = request.params.id;
                deleteOffers = new MethodsOffers_1.default();
                return [4 /*yield*/, deleteOffers.delete(id)];
            case 1:
                _a.sent();
                return [2 /*return*/, response.json({ message: "Disabled offers" })];
        }
    });
}); });
exports.default = offerRouter;
