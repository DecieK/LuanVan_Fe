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
exports.__esModule = true;
exports.handleCapnhatTTKhachhang = exports.Kiemtrataikhoan = exports.Thongke_tuan = exports.Thongke_thang = exports.Thongke_cumrap = exports.Thongke_phim = exports.Thongke_ngay = exports.VNPayRefund = exports.handleQuenMatKhau = exports.handleUpdateMatkhau = exports.Sendmail = exports.handleHuyVe = exports.handleXoaCTVe = exports.handleXoaCTDoan = exports.LayTTKhuyenmai = exports.LayTTDoan_idve = exports.LayTTChieu_idc = exports.LayTTRap = exports.LayTTVe_idKH = exports.VN_Query = exports.XoaTTNhanvien = exports.SuaTTNhanvien = exports.ThemTTNhanvien = exports.LayTTNhanvien = exports.XoaTTkhuyenmai = exports.SuaTTkhuyenmai = exports.ThemTTkhuyenmai = exports.LayTTCTLoaiphim_idP = exports.LayTTKhachhang = exports.XoaTTDichvu = exports.SuaTTDichvu = exports.ThemTTDoan = exports.XoaTTChieu = exports.SuaTTChieu = exports.ThemTTChieu = exports.XoaTTSuatchieu = exports.SuaTTSuatchieu = exports.ThemTTSuatchieu = exports.XoaTTLoaiphim = exports.SuaTTLoaiphim = exports.ThemTTLoaiphim = exports.XoaTTGhe = exports.SuaTTGhe = exports.ThemTTGhe = exports.XoaTTRap = exports.SuaTTRap = exports.ThemTTRap = exports.XoaTTCumrap = exports.SuaTTCumrap = exports.ThemTTCumrap = exports.LayTTLoaiphim = exports.LayTTve_idchieu = exports.LayTTRap_idcumrap = exports.LayTTSuatchieu = exports.LayTTCumrap = exports.handleTest = exports.LayTTPhim = exports.XoaTTPhim = exports.SuaTTPhim = exports.Themttphim = exports.TaoTTPhim = exports.LayTTDoan = exports.LayTTKM = exports.layTTChieu = exports.LayTTGhe_idrap = exports.LayTTGhe = exports.LayTTchitietve = exports.CapnhatTTve = exports.Datve = exports.DangKy_KH = void 0;
function DangKy_KH(params) {
    return __awaiter(this, void 0, Promise, function () {
        var response, data;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, fetch("http://localhost:8080/api/Dangky", {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify(params)
                    })];
                case 1:
                    response = _a.sent();
                    return [4 /*yield*/, response.json()];
                case 2:
                    data = _a.sent();
                    return [2 /*return*/, data];
            }
        });
    });
}
exports.DangKy_KH = DangKy_KH;
function Datve(params) {
    return __awaiter(this, void 0, Promise, function () {
        var response, data;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, fetch("http://localhost:8080/api/Datve", {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify(params)
                    })];
                case 1:
                    response = _a.sent();
                    return [4 /*yield*/, response.json()];
                case 2:
                    data = _a.sent();
                    return [2 /*return*/, data];
            }
        });
    });
}
exports.Datve = Datve;
function CapnhatTTve(params) {
    return __awaiter(this, void 0, Promise, function () {
        var response, data;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, fetch("http://localhost:8080/api/CapnhatTTve", {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify(params)
                    })];
                case 1:
                    response = _a.sent();
                    return [4 /*yield*/, response.json()];
                case 2:
                    data = _a.sent();
                    return [2 /*return*/, data];
            }
        });
    });
}
exports.CapnhatTTve = CapnhatTTve;
function LayTTchitietve(params) {
    return __awaiter(this, void 0, Promise, function () {
        var id_ve, response, data;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    id_ve = params.id_ve;
                    return [4 /*yield*/, fetch("http://localhost:8080/api/TTChitietve?keyword=" + id_ve)];
                case 1:
                    response = _a.sent();
                    return [4 /*yield*/, response.json()];
                case 2:
                    data = _a.sent();
                    return [2 /*return*/, data];
            }
        });
    });
}
exports.LayTTchitietve = LayTTchitietve;
function LayTTGhe(params) {
    return __awaiter(this, void 0, Promise, function () {
        var key, response, data;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    key = params.key;
                    return [4 /*yield*/, fetch("http://localhost:8080/api/TTGhe?keyword=" + key)];
                case 1:
                    response = _a.sent();
                    return [4 /*yield*/, response.json()];
                case 2:
                    data = _a.sent();
                    return [2 /*return*/, data];
            }
        });
    });
}
exports.LayTTGhe = LayTTGhe;
function LayTTGhe_idrap(params) {
    return __awaiter(this, void 0, Promise, function () {
        var id_rap, response, data;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    id_rap = params.id_rap;
                    return [4 /*yield*/, fetch("http://localhost:8080/api/TTGhetheoIdrap?id_rap=" + id_rap)];
                case 1:
                    response = _a.sent();
                    return [4 /*yield*/, response.json()];
                case 2:
                    data = _a.sent();
                    return [2 /*return*/, data];
            }
        });
    });
}
exports.LayTTGhe_idrap = LayTTGhe_idrap;
// export async function layTTChieu(params: { id_rap: number, id_phim: number,id_suatchieu: number}): Promise<any> {
//   const { id_rap,id_phim,id_suatchieu } = params;
//   const response = await fetch(
//     `http://localhost:8080/api/TTChieu?keyword=${id_rap & id_phim & id_suatchieu }`
//   );
//   const data = await response.json();
//   return data;
// }
function layTTChieu(params) {
    return __awaiter(this, void 0, Promise, function () {
        var response, data;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, fetch("http://localhost:8080/api/TTChieu", {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify(params)
                    })];
                case 1:
                    response = _a.sent();
                    return [4 /*yield*/, response.json()];
                case 2:
                    data = _a.sent();
                    return [2 /*return*/, data];
            }
        });
    });
}
exports.layTTChieu = layTTChieu;
function LayTTKM(params) {
    return __awaiter(this, void 0, Promise, function () {
        var key, response, data;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    key = params.key;
                    return [4 /*yield*/, fetch("http://localhost:8080/api/TTKM?keyword=" + key)];
                case 1:
                    response = _a.sent();
                    return [4 /*yield*/, response.json()];
                case 2:
                    data = _a.sent();
                    return [2 /*return*/, data];
            }
        });
    });
}
exports.LayTTKM = LayTTKM;
function LayTTDoan(params) {
    return __awaiter(this, void 0, Promise, function () {
        var key, response, data;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    key = params.key;
                    return [4 /*yield*/, fetch("http://localhost:8080/api/TTDoan?keyword=" + key)];
                case 1:
                    response = _a.sent();
                    return [4 /*yield*/, response.json()];
                case 2:
                    data = _a.sent();
                    return [2 /*return*/, data];
            }
        });
    });
}
exports.LayTTDoan = LayTTDoan;
function TaoTTPhim(params) {
    return __awaiter(this, void 0, Promise, function () {
        var response, data;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, fetch("http://localhost:8080/api/uploadimage", {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify(params)
                    })];
                case 1:
                    response = _a.sent();
                    return [4 /*yield*/, response.json()];
                case 2:
                    data = _a.sent();
                    return [2 /*return*/, data];
            }
        });
    });
}
exports.TaoTTPhim = TaoTTPhim;
function Themttphim(params) {
    return __awaiter(this, void 0, Promise, function () {
        var response, data;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, fetch("http://localhost:8080/api/ThemTTPhim", {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify(params)
                    })];
                case 1:
                    response = _a.sent();
                    return [4 /*yield*/, response.json()];
                case 2:
                    data = _a.sent();
                    return [2 /*return*/, data];
            }
        });
    });
}
exports.Themttphim = Themttphim;
function SuaTTPhim(params) {
    return __awaiter(this, void 0, Promise, function () {
        var response, data;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, fetch("http://localhost:8080/api/SuaTTPhim", {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify(params)
                    })];
                case 1:
                    response = _a.sent();
                    return [4 /*yield*/, response.json()];
                case 2:
                    data = _a.sent();
                    return [2 /*return*/, data];
            }
        });
    });
}
exports.SuaTTPhim = SuaTTPhim;
function XoaTTPhim(params) {
    return __awaiter(this, void 0, Promise, function () {
        var response, data;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, fetch("http://localhost:8080/api/XoaTTPhim", {
                        method: "DELETE",
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify(params)
                    })];
                case 1:
                    response = _a.sent();
                    return [4 /*yield*/, response.json()];
                case 2:
                    data = _a.sent();
                    return [2 /*return*/, data];
            }
        });
    });
}
exports.XoaTTPhim = XoaTTPhim;
function LayTTPhim(params) {
    return __awaiter(this, void 0, Promise, function () {
        var key, response, data;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    key = params.key;
                    return [4 /*yield*/, fetch("http://localhost:8080/api/LayTTPhim?keyword=" + key)];
                case 1:
                    response = _a.sent();
                    return [4 /*yield*/, response.json()];
                case 2:
                    data = _a.sent();
                    return [2 /*return*/, data];
            }
        });
    });
}
exports.LayTTPhim = LayTTPhim;
function handleTest(params) {
    return __awaiter(this, void 0, Promise, function () {
        var response, data;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, fetch("http://localhost:8080/upload", {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify(params)
                    })];
                case 1:
                    response = _a.sent();
                    return [4 /*yield*/, response.json()];
                case 2:
                    data = _a.sent();
                    return [2 /*return*/, data];
            }
        });
    });
}
exports.handleTest = handleTest;
function LayTTCumrap(params) {
    return __awaiter(this, void 0, Promise, function () {
        var key, response, data;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    key = params.key;
                    return [4 /*yield*/, fetch("http://localhost:8080/api/TTCumrap?keyword=" + key)];
                case 1:
                    response = _a.sent();
                    return [4 /*yield*/, response.json()];
                case 2:
                    data = _a.sent();
                    return [2 /*return*/, data];
            }
        });
    });
}
exports.LayTTCumrap = LayTTCumrap;
function LayTTSuatchieu(params) {
    return __awaiter(this, void 0, Promise, function () {
        var key, response, data;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    key = params.key;
                    return [4 /*yield*/, fetch("http://localhost:8080/api/TTSuatchieu?keyword=" + key)];
                case 1:
                    response = _a.sent();
                    return [4 /*yield*/, response.json()];
                case 2:
                    data = _a.sent();
                    return [2 /*return*/, data];
            }
        });
    });
}
exports.LayTTSuatchieu = LayTTSuatchieu;
function LayTTRap_idcumrap(params) {
    return __awaiter(this, void 0, Promise, function () {
        var key, response, data;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    key = params.key;
                    return [4 /*yield*/, fetch("http://localhost:8080/api/TTRap_idcumrap?keyword=" + key)];
                case 1:
                    response = _a.sent();
                    return [4 /*yield*/, response.json()];
                case 2:
                    data = _a.sent();
                    return [2 /*return*/, data];
            }
        });
    });
}
exports.LayTTRap_idcumrap = LayTTRap_idcumrap;
function LayTTve_idchieu(params) {
    return __awaiter(this, void 0, Promise, function () {
        var id_chieu, response, data;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    id_chieu = params.id_chieu;
                    return [4 /*yield*/, fetch("http://localhost:8080/api/TTVe_idchieu?id_chieu=" + id_chieu)];
                case 1:
                    response = _a.sent();
                    return [4 /*yield*/, response.json()];
                case 2:
                    data = _a.sent();
                    return [2 /*return*/, data];
            }
        });
    });
}
exports.LayTTve_idchieu = LayTTve_idchieu;
function LayTTLoaiphim(params) {
    return __awaiter(this, void 0, Promise, function () {
        var id, response, data;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    id = params.id;
                    return [4 /*yield*/, fetch("http://localhost:8080/api/TTLoaiphim?id=" + id)];
                case 1:
                    response = _a.sent();
                    return [4 /*yield*/, response.json()];
                case 2:
                    data = _a.sent();
                    return [2 /*return*/, data];
            }
        });
    });
}
exports.LayTTLoaiphim = LayTTLoaiphim;
function ThemTTCumrap(params) {
    return __awaiter(this, void 0, Promise, function () {
        var response, data;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, fetch("http://localhost:8080/api/ThemTTCumrap", {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify(params)
                    })];
                case 1:
                    response = _a.sent();
                    return [4 /*yield*/, response.json()];
                case 2:
                    data = _a.sent();
                    return [2 /*return*/, data];
            }
        });
    });
}
exports.ThemTTCumrap = ThemTTCumrap;
function SuaTTCumrap(params) {
    return __awaiter(this, void 0, Promise, function () {
        var response, data;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, fetch("http://localhost:8080/api/SuaTTCumrap", {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify(params)
                    })];
                case 1:
                    response = _a.sent();
                    return [4 /*yield*/, response.json()];
                case 2:
                    data = _a.sent();
                    return [2 /*return*/, data];
            }
        });
    });
}
exports.SuaTTCumrap = SuaTTCumrap;
function XoaTTCumrap(params) {
    return __awaiter(this, void 0, Promise, function () {
        var response, data;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, fetch("http://localhost:8080/api/XoaTTCumrap", {
                        method: "DELETE",
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify(params)
                    })];
                case 1:
                    response = _a.sent();
                    return [4 /*yield*/, response.json()];
                case 2:
                    data = _a.sent();
                    return [2 /*return*/, data];
            }
        });
    });
}
exports.XoaTTCumrap = XoaTTCumrap;
function ThemTTRap(params) {
    return __awaiter(this, void 0, Promise, function () {
        var response, data;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, fetch("http://localhost:8080/api/ThemTTRap", {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify(params)
                    })];
                case 1:
                    response = _a.sent();
                    return [4 /*yield*/, response.json()];
                case 2:
                    data = _a.sent();
                    return [2 /*return*/, data];
            }
        });
    });
}
exports.ThemTTRap = ThemTTRap;
function SuaTTRap(params) {
    return __awaiter(this, void 0, Promise, function () {
        var response, data;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, fetch("http://localhost:8080/api/SuaTTRap", {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify(params)
                    })];
                case 1:
                    response = _a.sent();
                    return [4 /*yield*/, response.json()];
                case 2:
                    data = _a.sent();
                    return [2 /*return*/, data];
            }
        });
    });
}
exports.SuaTTRap = SuaTTRap;
function XoaTTRap(params) {
    return __awaiter(this, void 0, Promise, function () {
        var response, data;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, fetch("http://localhost:8080/api/XoaTTRap", {
                        method: "DELETE",
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify(params)
                    })];
                case 1:
                    response = _a.sent();
                    return [4 /*yield*/, response.json()];
                case 2:
                    data = _a.sent();
                    return [2 /*return*/, data];
            }
        });
    });
}
exports.XoaTTRap = XoaTTRap;
function ThemTTGhe(params) {
    return __awaiter(this, void 0, Promise, function () {
        var response, data;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, fetch("http://localhost:8080/api/ThemTTGhe", {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify(params)
                    })];
                case 1:
                    response = _a.sent();
                    return [4 /*yield*/, response.json()];
                case 2:
                    data = _a.sent();
                    return [2 /*return*/, data];
            }
        });
    });
}
exports.ThemTTGhe = ThemTTGhe;
function SuaTTGhe(params) {
    return __awaiter(this, void 0, Promise, function () {
        var response, data;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, fetch("http://localhost:8080/api/SuaTTGhe", {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify(params)
                    })];
                case 1:
                    response = _a.sent();
                    return [4 /*yield*/, response.json()];
                case 2:
                    data = _a.sent();
                    return [2 /*return*/, data];
            }
        });
    });
}
exports.SuaTTGhe = SuaTTGhe;
function XoaTTGhe(params) {
    return __awaiter(this, void 0, Promise, function () {
        var response, data;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, fetch("http://localhost:8080/api/XoaTTGhe", {
                        method: "DELETE",
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify(params)
                    })];
                case 1:
                    response = _a.sent();
                    return [4 /*yield*/, response.json()];
                case 2:
                    data = _a.sent();
                    return [2 /*return*/, data];
            }
        });
    });
}
exports.XoaTTGhe = XoaTTGhe;
function ThemTTLoaiphim(params) {
    return __awaiter(this, void 0, Promise, function () {
        var response, data;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, fetch("http://localhost:8080/api/ThemTTLoaiphim", {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify(params)
                    })];
                case 1:
                    response = _a.sent();
                    return [4 /*yield*/, response.json()];
                case 2:
                    data = _a.sent();
                    return [2 /*return*/, data];
            }
        });
    });
}
exports.ThemTTLoaiphim = ThemTTLoaiphim;
function SuaTTLoaiphim(params) {
    return __awaiter(this, void 0, Promise, function () {
        var response, data;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, fetch("http://localhost:8080/api/SuaTTLoaiphim", {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify(params)
                    })];
                case 1:
                    response = _a.sent();
                    return [4 /*yield*/, response.json()];
                case 2:
                    data = _a.sent();
                    return [2 /*return*/, data];
            }
        });
    });
}
exports.SuaTTLoaiphim = SuaTTLoaiphim;
function XoaTTLoaiphim(params) {
    return __awaiter(this, void 0, Promise, function () {
        var response, data;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, fetch("http://localhost:8080/api/XoaTTLoaiphim", {
                        method: "DELETE",
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify(params)
                    })];
                case 1:
                    response = _a.sent();
                    return [4 /*yield*/, response.json()];
                case 2:
                    data = _a.sent();
                    return [2 /*return*/, data];
            }
        });
    });
}
exports.XoaTTLoaiphim = XoaTTLoaiphim;
function ThemTTSuatchieu(params) {
    return __awaiter(this, void 0, Promise, function () {
        var response, data;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, fetch("http://localhost:8080/api/ThemTTSuatchieu", {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify(params)
                    })];
                case 1:
                    response = _a.sent();
                    return [4 /*yield*/, response.json()];
                case 2:
                    data = _a.sent();
                    return [2 /*return*/, data];
            }
        });
    });
}
exports.ThemTTSuatchieu = ThemTTSuatchieu;
function SuaTTSuatchieu(params) {
    return __awaiter(this, void 0, Promise, function () {
        var response, data;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, fetch("http://localhost:8080/api/SuaTTSuatchieu", {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify(params)
                    })];
                case 1:
                    response = _a.sent();
                    return [4 /*yield*/, response.json()];
                case 2:
                    data = _a.sent();
                    return [2 /*return*/, data];
            }
        });
    });
}
exports.SuaTTSuatchieu = SuaTTSuatchieu;
function XoaTTSuatchieu(params) {
    return __awaiter(this, void 0, Promise, function () {
        var response, data;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, fetch("http://localhost:8080/api/XoaTTSuatchieu", {
                        method: "DELETE",
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify(params)
                    })];
                case 1:
                    response = _a.sent();
                    return [4 /*yield*/, response.json()];
                case 2:
                    data = _a.sent();
                    return [2 /*return*/, data];
            }
        });
    });
}
exports.XoaTTSuatchieu = XoaTTSuatchieu;
function ThemTTChieu(params) {
    return __awaiter(this, void 0, Promise, function () {
        var response, data;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, fetch("http://localhost:8080/api/ThemTTChieu", {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify(params)
                    })];
                case 1:
                    response = _a.sent();
                    return [4 /*yield*/, response.json()];
                case 2:
                    data = _a.sent();
                    return [2 /*return*/, data];
            }
        });
    });
}
exports.ThemTTChieu = ThemTTChieu;
function SuaTTChieu(params) {
    return __awaiter(this, void 0, Promise, function () {
        var response, data;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, fetch("http://localhost:8080/api/SuaTTChieu", {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify(params)
                    })];
                case 1:
                    response = _a.sent();
                    return [4 /*yield*/, response.json()];
                case 2:
                    data = _a.sent();
                    return [2 /*return*/, data];
            }
        });
    });
}
exports.SuaTTChieu = SuaTTChieu;
function XoaTTChieu(params) {
    return __awaiter(this, void 0, Promise, function () {
        var response, data;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, fetch("http://localhost:8080/api/XoaTTChieu", {
                        method: "DELETE",
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify(params)
                    })];
                case 1:
                    response = _a.sent();
                    return [4 /*yield*/, response.json()];
                case 2:
                    data = _a.sent();
                    return [2 /*return*/, data];
            }
        });
    });
}
exports.XoaTTChieu = XoaTTChieu;
function ThemTTDoan(params) {
    return __awaiter(this, void 0, Promise, function () {
        var response, data;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, fetch("http://localhost:8080/api/ThemTTDoan", {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify(params)
                    })];
                case 1:
                    response = _a.sent();
                    return [4 /*yield*/, response.json()];
                case 2:
                    data = _a.sent();
                    return [2 /*return*/, data];
            }
        });
    });
}
exports.ThemTTDoan = ThemTTDoan;
function SuaTTDichvu(params) {
    return __awaiter(this, void 0, Promise, function () {
        var response, data;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, fetch("http://localhost:8080/api/SuaTTDoan", {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify(params)
                    })];
                case 1:
                    response = _a.sent();
                    return [4 /*yield*/, response.json()];
                case 2:
                    data = _a.sent();
                    return [2 /*return*/, data];
            }
        });
    });
}
exports.SuaTTDichvu = SuaTTDichvu;
function XoaTTDichvu(params) {
    return __awaiter(this, void 0, Promise, function () {
        var response, data;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, fetch("http://localhost:8080/api/XoaTTDoan", {
                        method: "DELETE",
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify(params)
                    })];
                case 1:
                    response = _a.sent();
                    return [4 /*yield*/, response.json()];
                case 2:
                    data = _a.sent();
                    return [2 /*return*/, data];
            }
        });
    });
}
exports.XoaTTDichvu = XoaTTDichvu;
function LayTTKhachhang(params) {
    return __awaiter(this, void 0, Promise, function () {
        var Email_KH, response, data;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    Email_KH = params.Email_KH;
                    return [4 /*yield*/, fetch("http://localhost:8080/api/LayTTKhachhang?keyword=" + Email_KH)];
                case 1:
                    response = _a.sent();
                    return [4 /*yield*/, response.json()];
                case 2:
                    data = _a.sent();
                    return [2 /*return*/, data];
            }
        });
    });
}
exports.LayTTKhachhang = LayTTKhachhang;
function LayTTCTLoaiphim_idP(params) {
    return __awaiter(this, void 0, Promise, function () {
        var id, response, data;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    id = params.id;
                    return [4 /*yield*/, fetch("http://localhost:8080/api/LayTTCTLoaiphim_idP?id=" + id)];
                case 1:
                    response = _a.sent();
                    return [4 /*yield*/, response.json()];
                case 2:
                    data = _a.sent();
                    return [2 /*return*/, data];
            }
        });
    });
}
exports.LayTTCTLoaiphim_idP = LayTTCTLoaiphim_idP;
function ThemTTkhuyenmai(params) {
    return __awaiter(this, void 0, Promise, function () {
        var response, data;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, fetch("http://localhost:8080/api/ThemTTKhuyenmai", {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify(params)
                    })];
                case 1:
                    response = _a.sent();
                    return [4 /*yield*/, response.json()];
                case 2:
                    data = _a.sent();
                    return [2 /*return*/, data];
            }
        });
    });
}
exports.ThemTTkhuyenmai = ThemTTkhuyenmai;
function SuaTTkhuyenmai(params) {
    return __awaiter(this, void 0, Promise, function () {
        var response, data;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, fetch("http://localhost:8080/api/SuaTTKhuyenmai", {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify(params)
                    })];
                case 1:
                    response = _a.sent();
                    return [4 /*yield*/, response.json()];
                case 2:
                    data = _a.sent();
                    return [2 /*return*/, data];
            }
        });
    });
}
exports.SuaTTkhuyenmai = SuaTTkhuyenmai;
function XoaTTkhuyenmai(params) {
    return __awaiter(this, void 0, Promise, function () {
        var response, data;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, fetch("http://localhost:8080/api/XoaTTKhuyenmai", {
                        method: "DELETE",
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify(params)
                    })];
                case 1:
                    response = _a.sent();
                    return [4 /*yield*/, response.json()];
                case 2:
                    data = _a.sent();
                    return [2 /*return*/, data];
            }
        });
    });
}
exports.XoaTTkhuyenmai = XoaTTkhuyenmai;
function LayTTNhanvien(params) {
    return __awaiter(this, void 0, Promise, function () {
        var tenTK, response, data;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    tenTK = params.tenTK;
                    return [4 /*yield*/, fetch("http://localhost:8080/api/LayTTNhanvien?keyword=" + tenTK)];
                case 1:
                    response = _a.sent();
                    return [4 /*yield*/, response.json()];
                case 2:
                    data = _a.sent();
                    return [2 /*return*/, data];
            }
        });
    });
}
exports.LayTTNhanvien = LayTTNhanvien;
function ThemTTNhanvien(params) {
    return __awaiter(this, void 0, Promise, function () {
        var response, data;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, fetch("http://localhost:8080/api/ThemTTNhanvien", {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify(params)
                    })];
                case 1:
                    response = _a.sent();
                    return [4 /*yield*/, response.json()];
                case 2:
                    data = _a.sent();
                    return [2 /*return*/, data];
            }
        });
    });
}
exports.ThemTTNhanvien = ThemTTNhanvien;
function SuaTTNhanvien(params) {
    return __awaiter(this, void 0, Promise, function () {
        var response, data;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, fetch("http://localhost:8080/api/SuaTTNhanvien", {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify(params)
                    })];
                case 1:
                    response = _a.sent();
                    return [4 /*yield*/, response.json()];
                case 2:
                    data = _a.sent();
                    return [2 /*return*/, data];
            }
        });
    });
}
exports.SuaTTNhanvien = SuaTTNhanvien;
function XoaTTNhanvien(params) {
    return __awaiter(this, void 0, Promise, function () {
        var response, data;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, fetch("http://localhost:8080/api/XoaTTNhanvien", {
                        method: "DELETE",
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify(params)
                    })];
                case 1:
                    response = _a.sent();
                    return [4 /*yield*/, response.json()];
                case 2:
                    data = _a.sent();
                    return [2 /*return*/, data];
            }
        });
    });
}
exports.XoaTTNhanvien = XoaTTNhanvien;
function VN_Query(params) {
    return __awaiter(this, void 0, Promise, function () {
        var response, data;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, fetch("http://localhost:8080/order/querydr", {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify(params)
                    })];
                case 1:
                    response = _a.sent();
                    return [4 /*yield*/, response.json()];
                case 2:
                    data = _a.sent();
                    return [2 /*return*/, data];
            }
        });
    });
}
exports.VN_Query = VN_Query;
// export async function VNPay(params: { amount: number }): Promise<any> {
//   const { amount } = params;
//   const response = await fetch(
//     `http://localhost:8080/order/create_payment_url?keyword=${amount}`,
//   );
//   const data = await response.json();
//   return data;
// }
function LayTTVe_idKH(params) {
    return __awaiter(this, void 0, Promise, function () {
        var id_kh, response, data;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    id_kh = params.id_kh;
                    return [4 /*yield*/, fetch("http://localhost:8080/api/LayTTVe_idKH?keyword=" + id_kh)];
                case 1:
                    response = _a.sent();
                    return [4 /*yield*/, response.json()];
                case 2:
                    data = _a.sent();
                    return [2 /*return*/, data];
            }
        });
    });
}
exports.LayTTVe_idKH = LayTTVe_idKH;
function LayTTRap(params) {
    return __awaiter(this, void 0, Promise, function () {
        var id, response, data;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    id = params.id;
                    return [4 /*yield*/, fetch("http://localhost:8080/api/LayTTRap?keyword=" + id)];
                case 1:
                    response = _a.sent();
                    return [4 /*yield*/, response.json()];
                case 2:
                    data = _a.sent();
                    return [2 /*return*/, data];
            }
        });
    });
}
exports.LayTTRap = LayTTRap;
function LayTTChieu_idc(params) {
    return __awaiter(this, void 0, Promise, function () {
        var id, response, data;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    id = params.id;
                    return [4 /*yield*/, fetch("http://localhost:8080/api/LayTTChieu_idc?keyword=" + id)];
                case 1:
                    response = _a.sent();
                    return [4 /*yield*/, response.json()];
                case 2:
                    data = _a.sent();
                    return [2 /*return*/, data];
            }
        });
    });
}
exports.LayTTChieu_idc = LayTTChieu_idc;
function LayTTDoan_idve(params) {
    return __awaiter(this, void 0, Promise, function () {
        var id_ve, response, data;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    id_ve = params.id_ve;
                    return [4 /*yield*/, fetch("http://localhost:8080/api/LayTTDoan_idve?keyword=" + id_ve)];
                case 1:
                    response = _a.sent();
                    return [4 /*yield*/, response.json()];
                case 2:
                    data = _a.sent();
                    return [2 /*return*/, data];
            }
        });
    });
}
exports.LayTTDoan_idve = LayTTDoan_idve;
function LayTTKhuyenmai(params) {
    return __awaiter(this, void 0, Promise, function () {
        var id, response, data;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    id = params.id;
                    return [4 /*yield*/, fetch("http://localhost:8080/api/LayTTKhuyenmai?keyword=" + id)];
                case 1:
                    response = _a.sent();
                    return [4 /*yield*/, response.json()];
                case 2:
                    data = _a.sent();
                    return [2 /*return*/, data];
            }
        });
    });
}
exports.LayTTKhuyenmai = LayTTKhuyenmai;
function handleXoaCTDoan(params) {
    return __awaiter(this, void 0, Promise, function () {
        var response, data;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, fetch("http://localhost:8080/api/handleXoaCTDoan", {
                        method: "DELETE",
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify(params)
                    })];
                case 1:
                    response = _a.sent();
                    return [4 /*yield*/, response.json()];
                case 2:
                    data = _a.sent();
                    return [2 /*return*/, data];
            }
        });
    });
}
exports.handleXoaCTDoan = handleXoaCTDoan;
function handleXoaCTVe(params) {
    return __awaiter(this, void 0, Promise, function () {
        var response, data;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, fetch("http://localhost:8080/api/handleXoaCTVe", {
                        method: "DELETE",
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify(params)
                    })];
                case 1:
                    response = _a.sent();
                    return [4 /*yield*/, response.json()];
                case 2:
                    data = _a.sent();
                    return [2 /*return*/, data];
            }
        });
    });
}
exports.handleXoaCTVe = handleXoaCTVe;
function handleHuyVe(params) {
    return __awaiter(this, void 0, Promise, function () {
        var response, data;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, fetch("http://localhost:8080/api/HuyVe", {
                        method: "DELETE",
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify(params)
                    })];
                case 1:
                    response = _a.sent();
                    return [4 /*yield*/, response.json()];
                case 2:
                    data = _a.sent();
                    return [2 /*return*/, data];
            }
        });
    });
}
exports.handleHuyVe = handleHuyVe;
function Sendmail(params) {
    return __awaiter(this, void 0, Promise, function () {
        var response, data;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, fetch("http://localhost:8080/api/test", {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify(params)
                    })];
                case 1:
                    response = _a.sent();
                    return [4 /*yield*/, response.json()];
                case 2:
                    data = _a.sent();
                    return [2 /*return*/, data];
            }
        });
    });
}
exports.Sendmail = Sendmail;
function handleUpdateMatkhau(params) {
    return __awaiter(this, void 0, Promise, function () {
        var response, data;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, fetch("http://localhost:8080/api/UpdateMatkhau", {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify(params)
                    })];
                case 1:
                    response = _a.sent();
                    return [4 /*yield*/, response.json()];
                case 2:
                    data = _a.sent();
                    return [2 /*return*/, data];
            }
        });
    });
}
exports.handleUpdateMatkhau = handleUpdateMatkhau;
function handleQuenMatKhau(params) {
    return __awaiter(this, void 0, Promise, function () {
        var response, data;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, fetch("http://localhost:8080/api/QuenMatKhau", {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify(params)
                    })];
                case 1:
                    response = _a.sent();
                    return [4 /*yield*/, response.json()];
                case 2:
                    data = _a.sent();
                    return [2 /*return*/, data];
            }
        });
    });
}
exports.handleQuenMatKhau = handleQuenMatKhau;
function VNPayRefund(params) {
    return __awaiter(this, void 0, Promise, function () {
        var response, data;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, fetch("http://localhost:8080/order/refund", {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify(params)
                    })];
                case 1:
                    response = _a.sent();
                    return [4 /*yield*/, response.json()];
                case 2:
                    data = _a.sent();
                    return [2 /*return*/, data];
            }
        });
    });
}
exports.VNPayRefund = VNPayRefund;
function Thongke_ngay(params) {
    return __awaiter(this, void 0, Promise, function () {
        var key, response, data;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    key = params.key;
                    return [4 /*yield*/, fetch("http://localhost:8080/api/Thongke?keyword=" + key)];
                case 1:
                    response = _a.sent();
                    return [4 /*yield*/, response.json()];
                case 2:
                    data = _a.sent();
                    return [2 /*return*/, data];
            }
        });
    });
}
exports.Thongke_ngay = Thongke_ngay;
function Thongke_phim(params) {
    return __awaiter(this, void 0, Promise, function () {
        var key, response, data;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    key = params.key;
                    return [4 /*yield*/, fetch("http://localhost:8080/api/Thongke_phim?keyword=" + key)];
                case 1:
                    response = _a.sent();
                    return [4 /*yield*/, response.json()];
                case 2:
                    data = _a.sent();
                    return [2 /*return*/, data];
            }
        });
    });
}
exports.Thongke_phim = Thongke_phim;
function Thongke_cumrap(params) {
    return __awaiter(this, void 0, Promise, function () {
        var key, response, data;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    key = params.key;
                    return [4 /*yield*/, fetch("http://localhost:8080/api/Thongke_cumrap?keyword=" + key)];
                case 1:
                    response = _a.sent();
                    return [4 /*yield*/, response.json()];
                case 2:
                    data = _a.sent();
                    return [2 /*return*/, data];
            }
        });
    });
}
exports.Thongke_cumrap = Thongke_cumrap;
function Thongke_thang(params) {
    return __awaiter(this, void 0, Promise, function () {
        var key, response, data;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    key = params.key;
                    return [4 /*yield*/, fetch("http://localhost:8080/api/Thongke_thang?keyword=" + key)];
                case 1:
                    response = _a.sent();
                    return [4 /*yield*/, response.json()];
                case 2:
                    data = _a.sent();
                    return [2 /*return*/, data];
            }
        });
    });
}
exports.Thongke_thang = Thongke_thang;
function Thongke_tuan(params) {
    return __awaiter(this, void 0, Promise, function () {
        var key, response, data;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    key = params.key;
                    return [4 /*yield*/, fetch("http://localhost:8080/api/Thongke_tuan?keyword=" + key)];
                case 1:
                    response = _a.sent();
                    return [4 /*yield*/, response.json()];
                case 2:
                    data = _a.sent();
                    return [2 /*return*/, data];
            }
        });
    });
}
exports.Thongke_tuan = Thongke_tuan;
function Kiemtrataikhoan(params) {
    return __awaiter(this, void 0, Promise, function () {
        var key, response, data;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    key = params.key;
                    return [4 /*yield*/, fetch("http://localhost:8080/api/kiemtrataikhoan?keyword=" + key)];
                case 1:
                    response = _a.sent();
                    return [4 /*yield*/, response.json()];
                case 2:
                    data = _a.sent();
                    return [2 /*return*/, data];
            }
        });
    });
}
exports.Kiemtrataikhoan = Kiemtrataikhoan;
function handleCapnhatTTKhachhang(params) {
    return __awaiter(this, void 0, Promise, function () {
        var response, data;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, fetch("http://localhost:8080/api/CapnhatTTCanhan", {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify(params)
                    })];
                case 1:
                    response = _a.sent();
                    return [4 /*yield*/, response.json()];
                case 2:
                    data = _a.sent();
                    return [2 /*return*/, data];
            }
        });
    });
}
exports.handleCapnhatTTKhachhang = handleCapnhatTTKhachhang;
