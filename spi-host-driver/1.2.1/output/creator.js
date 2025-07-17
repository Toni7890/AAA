var creator =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./generated_module/src/creator.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./generated_module/src/Utils.ts":
/*!***************************************!*\
  !*** ./generated_module/src/Utils.ts ***!
  \***************************************/
/*! exports provided: getKeys, values, forEach, map, assertNotNull, toDictionary */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getKeys", function() { return getKeys; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "values", function() { return values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "forEach", function() { return forEach; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "map", function() { return map; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "assertNotNull", function() { return assertNotNull; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toDictionary", function() { return toDictionary; });
/** @returns the non-prototype keys of the given object */
var getKeys = function getKeys(obj) {
  /* eslint-disable-line */
  return Object.getOwnPropertyNames(obj);
};
var values = function values(obj) {
  return getKeys(obj).map(function (key) {
    return obj[key];
  });
};
var forEach = function forEach(obj, action) {
  getKeys(obj).forEach(function (key) {
    return action(key, obj[key]);
  });
};
var map = function map(obj, mapper) {
  return getKeys(obj).map(function (key) {
    return mapper(key, obj[key]);
  });
};
var assertNotNull = function assertNotNull(val, msg) {
  if (val == null) {
    throw new Error(msg);
  }
};
var toDictionary = function toDictionary(arr, keyMapper, valueMapper) {
  var result = {};
  arr.forEach(function (entry) {
    result[keyMapper(entry)] = valueMapper(entry);
  });
  return result;
};

/***/ }),

/***/ "./generated_module/src/creator.ts":
/*!*****************************************!*\
  !*** ./generated_module/src/creator.ts ***!
  \*****************************************/
/*! exports provided: create */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "create", function() { return create; });
/* harmony import */ var _microchip_scf_automodule_impl__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @microchip/scf-automodule-impl */ "./node_modules/@microchip/scf-automodule-impl/lib/index.js");
/* harmony import */ var _microchip_scf_automodule_impl__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_microchip_scf_automodule_impl__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _getUserData__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getUserData */ "./generated_module/src/getUserData.ts");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




var createCreator = function createCreator(getCreatorFunctions) {
  var hook = function hook(state) {
    var creatorFunctionsGetter = function creatorFunctionsGetter() {
      return _objectSpread({
        getModuleConfig: _getUserData__WEBPACK_IMPORTED_MODULE_1__["getModuleConfigFromFile"]
      }, getCreatorFunctions());
    };

    return Object(_microchip_scf_automodule_impl__WEBPACK_IMPORTED_MODULE_0__["create"])(state, creatorFunctionsGetter);
  };

  return hook;
};

var create = createCreator(_getUserData__WEBPACK_IMPORTED_MODULE_1__["getCreatorFunctions"]);

/***/ }),

/***/ "./generated_module/src/getUserData.ts":
/*!*********************************************!*\
  !*** ./generated_module/src/getUserData.ts ***!
  \*********************************************/
/*! exports provided: getCreatorFunctions, getDerivedData, getPinsDataFromFile, getPinsLogicFromFile, getModuleConfigFromFile */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPinsDataFromFile", function() { return getPinsDataFromFile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPinsLogicFromFile", function() { return getPinsLogicFromFile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getModuleConfigFromFile", function() { return getModuleConfigFromFile; });
/* harmony import */ var _src_CreatorFunctions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../src/CreatorFunctions */ "./src/CreatorFunctions.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getCreatorFunctions", function() { return _src_CreatorFunctions__WEBPACK_IMPORTED_MODULE_0__["getCreatorFunctions"]; });

/* harmony import */ var _src_DerivedData__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../src/DerivedData */ "./src/DerivedData.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getDerivedData", function() { return _src_DerivedData__WEBPACK_IMPORTED_MODULE_1__["getDerivedData"]; });



var getPinsDataFromFile = function getPinsDataFromFile() {
  try {
    return __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module '../../src/pinsdata.json'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
  } catch (_unused) {
    return undefined;
  }
};
var getPinsLogicFromFile = function getPinsLogicFromFile() {
  try {
    return __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module '../../src/PinsLogic.ts'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
  } catch (_unused2) {
    return undefined;
  }
};
var getModuleConfigFromFile = function getModuleConfigFromFile() {
  try {
    return __webpack_require__(/*! ../../src/moduleConfig.json */ "./src/moduleConfig.json");
  } catch (_unused3) {
    return undefined;
  }
};

/***/ }),

/***/ "./node_modules/@microchip/melody-automodule-interface/lib/src/Tables.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@microchip/melody-automodule-interface/lib/src/Tables.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.RowPrefix = void 0;
var RowPrefix;
(function (RowPrefix) {
    RowPrefix["Default"] = "defaultRow_";
    RowPrefix["Dynamic"] = "dynamicRow_";
})(RowPrefix = exports.RowPrefix || (exports.RowPrefix = {}));
//# sourceMappingURL=Tables.js.map

/***/ }),

/***/ "./node_modules/@microchip/pin-standard/lib/index.js":
/*!***********************************************************!*\
  !*** ./node_modules/@microchip/pin-standard/lib/index.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var pin_standard_1 = __webpack_require__(/*! ./pin-standard */ "./node_modules/@microchip/pin-standard/lib/pin-standard.js");
exports.pin_standard = pin_standard_1.pin_standard;
exports.pin_state = pin_standard_1.pin_state;
exports.direction = pin_standard_1.direction;
exports.behaviour = pin_standard_1.behaviour;
exports.data_schema = pin_standard_1.data_schema;
exports.pin_attribs_enum = pin_standard_1.pin_attribs_enum;
exports.actiontype = pin_standard_1.actiontype;
exports.QueryAdapterKey = pin_standard_1.QueryAdapterKey;
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/@microchip/pin-standard/lib/pin-standard.js":
/*!******************************************************************!*\
  !*** ./node_modules/@microchip/pin-standard/lib/pin-standard.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.pin_standard = function () {
    return {
        interfaceId: {
            name: "pin-standard",
            version: "0.1.0",
        },
    };
};
var QueryAdapterKey;
(function (QueryAdapterKey) {
    QueryAdapterKey["ALLPINS"] = "allpins";
    QueryAdapterKey["ALLPINS_FOR_ATTRIBS"] = "allpins_for_attribs";
    QueryAdapterKey["PPS"] = "pps";
    QueryAdapterKey["APFCON"] = "apfcon";
    QueryAdapterKey["PORTMUX"] = "portmux";
    QueryAdapterKey["HASPPS"] = "hasPPS";
})(QueryAdapterKey = exports.QueryAdapterKey || (exports.QueryAdapterKey = {}));
var pin_state;
(function (pin_state) {
    pin_state["EMPTY"] = "E";
    pin_state["LOCKED"] = "L";
    pin_state["UNLOCK"] = "UL";
    pin_state["DiSABLE_LOCK"] = "DL";
    pin_state["UNLOCKED_DISABLED"] = "DUL";
    pin_state["LOCKED_LINK"] = "LL";
    pin_state["UNLOCKED_MUX"] = "MUL";
    pin_state["LOCKED_CONFLICT"] = "CL";
})(pin_state = exports.pin_state || (exports.pin_state = {}));
var pin_interrupts_enum;
(function (pin_interrupts_enum) {
    pin_interrupts_enum["INTDIS_BUFFEN"] = "INTDIS_BUFFEN";
    pin_interrupts_enum["BOTH_EDGES"] = "BOTH_EDGES";
    pin_interrupts_enum["RISING_EDGE"] = "RISING_EDGE";
    pin_interrupts_enum["FALLING_EDGE"] = "FALLING_EDGE";
    pin_interrupts_enum["NONE"] = "NONE";
    pin_interrupts_enum["LOW_LEVEL"] = "LOW_LEVEL";
})(pin_interrupts_enum = exports.pin_interrupts_enum || (exports.pin_interrupts_enum = {}));
var pin_attribs_enum;
(function (pin_attribs_enum) {
    pin_attribs_enum["aliasReEx"] = "aliasReEx";
    pin_attribs_enum["cname"] = "cname";
    pin_attribs_enum["high"] = "high";
    pin_attribs_enum["inv"] = "inv";
    pin_attribs_enum["wpu"] = "wpu";
    pin_attribs_enum["wpd"] = "wpd";
    pin_attribs_enum["od"] = "od";
    pin_attribs_enum["analog"] = "analog";
    pin_attribs_enum["ioc"] = "ioc";
    pin_attribs_enum["intcallback"] = "intcallback";
    pin_attribs_enum["alias"] = "alias";
    pin_attribs_enum["advInpBuff"] = "advInpBuff";
})(pin_attribs_enum = exports.pin_attribs_enum || (exports.pin_attribs_enum = {}));
var actiontype;
(function (actiontype) {
    actiontype["SETACTION"] = "SETACTION";
    actiontype["ATTRIBACTION"] = "ATTRIBACTION";
})(actiontype = exports.actiontype || (exports.actiontype = {}));
var direction;
(function (direction) {
    direction["output"] = "output";
    direction["input"] = "input";
    direction["bidirectional"] = "bidirectional";
})(direction = exports.direction || (exports.direction = {}));
var behaviour;
(function (behaviour) {
    behaviour["LOCK_UNLOCK"] = "LOCK_UNLOCK";
    behaviour["ALWAYS_LOCKED"] = "ALWAYS_LOCKED";
    behaviour["SINGLE_PIN_MUX"] = "SINGLE_PIN_MUX";
    behaviour["OPTIONAL_PIN_MUX"] = "OPTIONAL_PIN_MUX";
    behaviour["PPS"] = "PPS";
    behaviour["APFCON"] = "APFCON";
    behaviour["PORTMUX"] = "PORTMUX";
    behaviour["EXCLUSIVE_LOCK"] = "EXCLUSIVE_LOCK";
    behaviour["LOCKED_DISABLED"] = "LOCKED_DISABLED";
})(behaviour = exports.behaviour || (exports.behaviour = {}));
//------------------------------------ schema ------------------------------------//
exports.data_schema = {
    $schema: "http://json-schema.org/draft-07/schema#",
    $ref: "#/definitions/intf_data",
    definitions: {
        intf_data: {
            type: "object",
            properties: {
                rows: {
                    type: "array",
                    items: {
                        $ref: "#/definitions/pin_row",
                    },
                },
            },
            required: ["rows"],
            additionalProperties: false,
        },
        pin_row: {
            type: "object",
            properties: {
                name: {
                    type: "string",
                },
                module: {
                    type: "string",
                },
                function: {
                    type: "string",
                },
                direction: {
                    $ref: "#/definitions/direction",
                },
                filter: {
                    $ref: "#/definitions/filter",
                },
                behaviour: {
                    $ref: "#/definitions/behaviour",
                },
                behaviourMeta: {
                    $ref: "#/definitions/behaviourMeta",
                },
                attribs: {
                    type: "array",
                    items: {
                        $ref: "#/definitions/pin_attribs",
                    },
                },
                groupsdata: {
                    $ref: "#/definitions/pingroups_data",
                },
                actions: {},
            },
            required: ["name", "module", "function", "direction", "filter", "behaviour"],
            additionalProperties: false,
        },
        direction: {
            type: "string",
            enum: ["output", "input", "bidirectional"],
        },
        filter: {
            type: "object",
            properties: {
                module: {
                    type: "string",
                },
                aliasReEx: {
                    type: "string",
                },
            },
            required: ["module", "aliasReEx"],
            additionalProperties: false,
        },
        behaviour: {
            type: "string",
            enum: [
                "LOCK_UNLOCK",
                "ALWAYS_LOCKED",
                "SINGLE_PIN_MUX",
                "OPTIONAL_PIN_MUX",
                "PPS",
                "PORTMUX",
                "EXCLUSIVE_LOCK",
                "LOCKED_DISABLED",
            ],
        },
        behaviourMeta: {
            type: "object",
            properties: {
                lockPinRegEx: {
                    type: "string",
                },
            },
            required: ["lockPinRegEx"],
            additionalProperties: false,
        },
        pin_attribs: {
            type: "object",
            properties: {
                aliasReEx: {
                    type: "string",
                },
                cname: {
                    type: "string",
                },
                high: {
                    type: "boolean",
                },
                inv: {
                    type: "boolean",
                },
                wpu: {
                    type: "boolean",
                },
                wpd: {
                    type: "boolean",
                },
                od: {
                    type: "boolean",
                },
                analog: {
                    type: "boolean",
                },
                ioc: {
                    $ref: "#/definitions/pin_interrupts_enum",
                },
                bidirection_out: {
                    type: "boolean",
                },
            },
            required: ["aliasReEx"],
            additionalProperties: false,
        },
        pin_interrupts_enum: {
            type: "string",
            enum: [
                "INTDIS_BUFFEN",
                "BOTH_EDGES",
                "RISING_EDGE",
                "FALLING_EDGE",
                "NONE",
                "LOW_LEVEL",
            ],
        },
        pingroups_data: {
            type: "object",
            properties: {
                groups: {
                    type: "array",
                    items: {
                        $ref: "#/definitions/pins_group",
                    },
                },
            },
            required: ["groups"],
            additionalProperties: false,
        },
        pins_group: {
            type: "object",
            properties: {
                name: {
                    type: "string",
                },
                filter: {
                    $ref: "#/definitions/grpfilter",
                },
                datapath: {
                    type: "string",
                },
            },
            required: ["name", "filter"],
            additionalProperties: false,
        },
        grpfilter: {
            type: "object",
            properties: {
                aliasReEx: {
                    type: "string",
                },
            },
            required: ["aliasReEx"],
            additionalProperties: false,
        },
    },
};
//# sourceMappingURL=pin-standard.js.map

/***/ }),

/***/ "./node_modules/@microchip/scf-automodule-impl/lib/Analytics/AnalyticsHelper.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/@microchip/scf-automodule-impl/lib/Analytics/AnalyticsHelper.js ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.logAnalytics = exports.getAnalyticsDefault = void 0;
var getConfigData_1 = __webpack_require__(/*! ../autoModule/getConfigData */ "./node_modules/@microchip/scf-automodule-impl/lib/autoModule/getConfigData.js");
var autoModuleViewHelpers_1 = __webpack_require__(/*! ../autoModule/views/autoModuleViewHelpers */ "./node_modules/@microchip/scf-automodule-impl/lib/autoModule/views/autoModuleViewHelpers.js");
var getAnalyticsDefault = function (model) {
    var logAlwaysComps = [];
    var stateChangeComps = [];
    return (0, exports.logAnalytics)(model, stateChangeComps, logAlwaysComps);
};
exports.getAnalyticsDefault = getAnalyticsDefault;
var logAnalytics = function (model, logAlwaysComps, logOnChangeComps) {
    var _a, _b;
    var retData = {};
    var moduleconfig = (0, getConfigData_1.getConfigData)(model);
    var alwaysCompsDesired = (_a = moduleconfig.analytics) === null || _a === void 0 ? void 0 : _a.logAlwaysComps.concat(logAlwaysComps !== null && logAlwaysComps !== void 0 ? logAlwaysComps : []);
    retData = logAlwaysStaticAndDynamicData(model, moduleconfig, alwaysCompsDesired);
    var onChangeCompsDesired = (_b = moduleconfig.analytics) === null || _b === void 0 ? void 0 : _b.logOnChangeComps.concat(logOnChangeComps !== null && logOnChangeComps !== void 0 ? logOnChangeComps : []);
    var moduleState = model.getState();
    retData = __assign(__assign({}, retData), logOnChangeStaticAndDynamicData(moduleconfig, model, moduleState, onChangeCompsDesired));
    return retData;
};
exports.logAnalytics = logAnalytics;
var logAlwaysStaticAndDynamicData = function (model, moduleconfig, alwaysCompsDesired) {
    var _a, _b, _c;
    var retData = {};
    for (var _i = 0, _d = alwaysCompsDesired !== null && alwaysCompsDesired !== void 0 ? alwaysCompsDesired : []; _i < _d.length; _i++) {
        var eachDesiredComp = _d[_i];
        var correctMapping = void 0;
        var allComps = model.getAutoModuleAppModel().getAllComponents();
        var compObj = void 0;
        var resultantAnalyticsKey = void 0;
        if (eachDesiredComp !== "*") {
            compObj = (_a = allComps[eachDesiredComp]) === null || _a === void 0 ? void 0 : _a.component;
            if (compObj === undefined ||
                !isCompCategoryAllowed(compObj) ||
                (0, autoModuleViewHelpers_1.isComponentInvisible)(compObj, model))
                continue;
            correctMapping = (_b = moduleconfig.analytics) === null || _b === void 0 ? void 0 : _b.compMapping[eachDesiredComp];
            resultantAnalyticsKey = !correctMapping
                ? compObj.category === "hardware"
                    ? formRegUndercSettNameForComp(compObj)
                    : eachDesiredComp
                : correctMapping;
            var value = model.getComponentValue(eachDesiredComp);
            if (value !== undefined) {
                retData[resultantAnalyticsKey] = value;
            }
        }
        else {
            for (var eachCompName in allComps) {
                correctMapping = (_c = moduleconfig.analytics) === null || _c === void 0 ? void 0 : _c.compMapping[eachCompName];
                compObj = allComps[eachCompName].component;
                if (!isCompCategoryAllowed(compObj) ||
                    (0, autoModuleViewHelpers_1.isComponentInvisible)(compObj, model))
                    continue;
                resultantAnalyticsKey = !correctMapping
                    ? compObj.category === "hardware"
                        ? formRegUndercSettNameForComp(compObj)
                        : eachCompName
                    : correctMapping;
                retData[resultantAnalyticsKey] = model.getComponentValue(eachCompName);
            }
            break;
        }
    }
    return retData;
};
var formRegUndercSettNameForComp = function (compObj) {
    var regUndcSettingName = "";
    var compCategory = compObj.category;
    var compSetting = compCategory === "hardware" ? compObj.setting : "";
    var regName = getRegNameFromCompSettName(compObj.name, compSetting);
    if (regName === "") {
        regUndcSettingName = compSetting;
    }
    else if (compSetting === "") {
        regUndcSettingName = regName;
    }
    else {
        regUndcSettingName = regName + "_" + compSetting;
    }
    return regUndcSettingName;
};
var getRegNameFromCompSettName = function (compName, settingName) {
    var regNameCaps = "";
    var compNameCaps = compName.toUpperCase();
    var settingNameCaps = settingName.toUpperCase();
    regNameCaps = compNameCaps.replace(settingNameCaps, "");
    return regNameCaps;
};
var logOnChangeStaticAndDynamicData = function (moduleconfig, model, moduleState, onChangeCompsDesired) {
    var _a, _b;
    if (!onChangeCompsDesired || onChangeCompsDesired.length === 0)
        return {};
    var retData = logOnChangeDependencyComps(onChangeCompsDesired, model, moduleconfig);
    for (var eachCategoryKey in moduleState) {
        for (var eachSubCategoryKey in moduleState[eachCategoryKey]) {
            for (var eachChangedCompKey in moduleState[eachCategoryKey][eachSubCategoryKey]) {
                if ((onChangeCompsDesired === null || onChangeCompsDesired === void 0 ? void 0 : onChangeCompsDesired.indexOf(eachChangedCompKey)) !== -1 ||
                    (onChangeCompsDesired === null || onChangeCompsDesired === void 0 ? void 0 : onChangeCompsDesired.indexOf("*")) !== -1) {
                    var correctMapping = (_a = moduleconfig.analytics) === null || _a === void 0 ? void 0 : _a.compMapping[eachChangedCompKey];
                    var allComps = model.getAutoModuleAppModel().getAllComponents();
                    var compObj = (_b = allComps[eachChangedCompKey]) === null || _b === void 0 ? void 0 : _b.component;
                    if (compObj === undefined ||
                        !isCompCategoryAllowed(compObj) ||
                        (0, autoModuleViewHelpers_1.isComponentInvisible)(compObj, model))
                        continue;
                    var resultantAnalyticsKey = !correctMapping
                        ? compObj.category === "hardware"
                            ? formRegUndercSettNameForComp(compObj)
                            : eachChangedCompKey
                        : correctMapping;
                    retData[resultantAnalyticsKey] =
                        moduleState[eachCategoryKey][eachSubCategoryKey][eachChangedCompKey];
                }
            }
        }
    }
    return retData;
};
var consolidateDependencyCompNames = function (onChangeCompsDesired, model) {
    var _a, _b;
    var consolidatedCompNames = [];
    var allComps = model.getAutoModuleAppModel().getAllComponents();
    for (var _i = 0, _c = onChangeCompsDesired !== null && onChangeCompsDesired !== void 0 ? onChangeCompsDesired : []; _i < _c.length; _i++) {
        var eachDesCompName = _c[_i];
        var compObj = (_a = allComps[eachDesCompName]) === null || _a === void 0 ? void 0 : _a.component;
        if (eachDesCompName !== "*" && (compObj === null || compObj === void 0 ? void 0 : compObj.category) === "import") {
            consolidatedCompNames.push(eachDesCompName);
        }
        else if (eachDesCompName === "*") {
            consolidatedCompNames = [];
            for (var eachcompKey in allComps) {
                compObj = (_b = allComps[eachcompKey]) === null || _b === void 0 ? void 0 : _b.component;
                if ((compObj === null || compObj === void 0 ? void 0 : compObj.category) === "import") {
                    consolidatedCompNames.push(compObj.name);
                }
            }
            break;
        }
    }
    return consolidatedCompNames;
};
var logOnChangeDependencyComps = function (onChangeCompsDesired, model, moduleconfig) {
    var _a, _b, _c;
    var result = {};
    var allComps = model.getAutoModuleAppModel().getAllComponents();
    //stage 1 - consolidating all desired comps
    var consolidatedCompNames = consolidateDependencyCompNames(onChangeCompsDesired, model);
    //stage 2 - populating the analytics data for consolidated dep comps - stage
    for (var _i = 0, consolidatedCompNames_1 = consolidatedCompNames; _i < consolidatedCompNames_1.length; _i++) {
        var eachCompName = consolidatedCompNames_1[_i];
        var correctMapping = (_b = (_a = moduleconfig.analytics) === null || _a === void 0 ? void 0 : _a.compMapping[eachCompName]) !== null && _b !== void 0 ? _b : eachCompName;
        var compObj = (_c = allComps[eachCompName]) === null || _c === void 0 ? void 0 : _c.component;
        if ((compObj === null || compObj === void 0 ? void 0 : compObj.category) !== "import")
            continue;
        var value = getDependencyCompValueForOnChange(compObj, model);
        if (value)
            result[correctMapping] = value;
    }
    return result;
};
var getDependencyCompValueForOnChange = function (compObj, model) {
    var _a;
    var result = (_a = model.getImports()[compObj.importId].handle) === null || _a === void 0 ? void 0 : _a.label;
    return result;
};
var isCompCategoryAllowed = function (compObj) {
    return (compObj !== undefined &&
        (compObj.category === "hardware" ||
            compObj.category === "software" ||
            compObj.category === "import" ||
            compObj.category === "table"));
};
//# sourceMappingURL=AnalyticsHelper.js.map

/***/ }),

/***/ "./node_modules/@microchip/scf-automodule-impl/lib/App/AppModel.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@microchip/scf-automodule-impl/lib/App/AppModel.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getModel = void 0;
var Processor = __importStar(__webpack_require__(/*! @microchip/scf-common/lib/Processor */ "./node_modules/@microchip/scf-common/lib/Processor.js"));
var AutoModuleAppModel_1 = __webpack_require__(/*! ../autoModule/AutoModuleAppModel */ "./node_modules/@microchip/scf-automodule-impl/lib/autoModule/AutoModuleAppModel.js");
var AutoModuleHelpers_1 = __webpack_require__(/*! ../autoModule/AutoModuleHelpers */ "./node_modules/@microchip/scf-automodule-impl/lib/autoModule/AutoModuleHelpers.js");
var getConfigData_1 = __webpack_require__(/*! ../autoModule/getConfigData */ "./node_modules/@microchip/scf-automodule-impl/lib/autoModule/getConfigData.js");
var exports_1 = __webpack_require__(/*! ../interfaces/exports */ "./node_modules/@microchip/scf-automodule-impl/lib/interfaces/exports.js");
var imports_1 = __webpack_require__(/*! ../interfaces/imports */ "./node_modules/@microchip/scf-automodule-impl/lib/interfaces/imports.js");
var PCPHelper_1 = __webpack_require__(/*! ../pins/PCPHelper */ "./node_modules/@microchip/scf-automodule-impl/lib/pins/PCPHelper.js");
var tables_1 = __webpack_require__(/*! ../tables/tables */ "./node_modules/@microchip/scf-automodule-impl/lib/tables/tables.js");
var getModel = function (prototype, getDerivedData) {
    return new MyAppModel(prototype, getDerivedData);
};
exports.getModel = getModel;
var MyAppModel = /** @class */ (function () {
    function MyAppModel(prototype, getDerivedData) {
        var _this = this;
        this.getState = function () { return _this.prototype.state; };
        this.getPayload = function () { return _this.prototype.payload; };
        this.getImports = function () { return _this.prototype.imports; };
        this.getExports = function () { return _this.prototype.exports; };
        this.getName = function () {
            return _this.getAutoModuleAppModel().getModuleName();
        };
        this.getCategory = function () {
            return _this.getAutoModuleAppModel().getModuleCategory();
        };
        this.getActiveName = function () {
            var _a, _b, _c;
            return (_c = (_b = (_a = _this.getDerivedFunctions()).getActiveName) === null || _b === void 0 ? void 0 : _b.call(_a)) !== null && _c !== void 0 ? _c : _this.getName();
        };
        this.getGlobalNames = function () {
            var _a, _b, _c;
            return (_c = (_b = (_a = _this.getDerivedFunctions()).getGlobalNames) === null || _b === void 0 ? void 0 : _b.call(_a)) !== null && _c !== void 0 ? _c : [];
        };
        this.getAutoModuleAppModel = function () {
            if (_this.autoModuleAppModel)
                return _this.autoModuleAppModel;
            _this.autoModuleAppModel = (0, AutoModuleAppModel_1.createAutoModuleAppModel)(_this);
            return _this.autoModuleAppModel;
        };
        this.getPrototypeModule = function () {
            return _this.prototype;
        };
        this.getRegisterValues = function (interfaceName) {
            if (_this.registerValues)
                return _this.registerValues;
            _this.registerValues = (0, AutoModuleHelpers_1.getRegisterValues)(_this, interfaceName);
            return _this.registerValues;
        };
        this.getInterrupts = function () {
            var _a, _b;
            if (_this.interrupts)
                return _this.interrupts;
            _this.interrupts = (_b = (_a = _this.getHardware()) === null || _a === void 0 ? void 0 : _a.getPeripheral()) === null || _b === void 0 ? void 0 : _b.interrupts;
            return _this.interrupts;
        };
        this.getProperties = function () {
            var _a, _b;
            if (_this.properties)
                return _this.properties;
            _this.properties = (_b = (_a = _this.getHardware()) === null || _a === void 0 ? void 0 : _a.getPeripheral()) === null || _b === void 0 ? void 0 : _b.properties;
            return _this.properties;
        };
        this.getRegisters = function () {
            var _a, _b;
            if (_this.registers)
                return _this.registers;
            _this.registers = (_b = (_a = _this.getHardware()) === null || _a === void 0 ? void 0 : _a.getPeripheral()) === null || _b === void 0 ? void 0 : _b.registers;
            return _this.registers;
        };
        this.getHardware = function (interfaceName) {
            var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l;
            interfaceName = (0, AutoModuleHelpers_1.getFriendlyInterfaceId)(interfaceName);
            if (interfaceName) {
                var peripheral_1 = (_c = (_b = (_a = _this.getPrototypeModule()) === null || _a === void 0 ? void 0 : _a.imports) === null || _b === void 0 ? void 0 : _b[interfaceName]) === null || _c === void 0 ? void 0 : _c.payload;
                if (!peripheral_1)
                    return undefined;
                return {
                    getPeripheral: function () { return peripheral_1; },
                    getName: function () { return peripheral_1.name; },
                    instanceNumber: Number((_d = peripheral_1.instance) !== null && _d !== void 0 ? _d : peripheral_1.name.replace(peripheral_1.group, "")),
                };
            }
            if (!_this.defaultHardware) {
                var peripheralName = (0, AutoModuleHelpers_1.getFriendlyInterfaceId)((_g = (_f = (_e = (0, getConfigData_1.getConfigData)(_this)) === null || _e === void 0 ? void 0 : _e.peripherals) === null || _f === void 0 ? void 0 : _f[0]) === null || _g === void 0 ? void 0 : _g.interfaceId.name);
                var peripheral_2 = (_k = (_j = (_h = _this.getPrototypeModule()) === null || _h === void 0 ? void 0 : _h.imports) === null || _j === void 0 ? void 0 : _j[peripheralName !== null && peripheralName !== void 0 ? peripheralName : ""]) === null || _k === void 0 ? void 0 : _k.payload;
                if (peripheral_2) {
                    _this.defaultHardware = {
                        getPeripheral: function () {
                            return peripheral_2;
                        },
                        getName: function () { return peripheral_2.name; },
                        instanceNumber: Number((_l = peripheral_2.instance) !== null && _l !== void 0 ? _l : peripheral_2.name.replace(peripheral_2.group, "")),
                    };
                }
            }
            return _this.defaultHardware;
        };
        this.getPeripheralDescription = function () {
            var _a;
            return (_a = _this.getHardware()) === null || _a === void 0 ? void 0 : _a.getPeripheral();
        };
        this.getDerivedData = function () {
            if (_this.derivedData)
                return _this.derivedData;
            _this.derivedData = _this.getDerivedDataFunction(_this);
            return _this.derivedData;
        };
        this.getDerivedFunctions = function () {
            return _this.getDerivedData().getMyFunctions();
        };
        this.getDerivedFunction = function (functionName) {
            var _a, _b;
            var args = [];
            for (var _i = 1; _i < arguments.length; _i++) {
                args[_i - 1] = arguments[_i];
            }
            return (_b = (_a = _this.getDerivedFunctions()) === null || _a === void 0 ? void 0 : _a[functionName]) === null || _b === void 0 ? void 0 : _b.call.apply(_b, __spreadArray([_a], args, false));
        };
        this.getExportInterfaces = function () {
            if (_this.exportInterfaces)
                return _this.exportInterfaces;
            _this.exportInterfaces = (0, exports_1.createExportInterfaces)(_this.prototype.exports, _this);
            return _this.exportInterfaces;
        };
        this.getImportInterfaces = function () {
            if (_this.importInterfaces)
                return _this.importInterfaces;
            _this.importInterfaces = (0, imports_1.createImportInterfaces)(_this.prototype.imports, _this);
            return _this.importInterfaces;
        };
        this.isControlledByInterface = function (componentName) {
            var _a;
            return ((_a = _this.getExportInterfaces()) === null || _a === void 0 ? void 0 : _a.isControlledByInterface(componentName)) == true;
        };
        this.getAssignedImport = function (importName) {
            var _a;
            if (((_a = _this.prototype.imports) === null || _a === void 0 ? void 0 : _a[importName]) &&
                Processor.isAssigned(_this.prototype.imports[importName])) {
                return _this.prototype.imports[importName];
            }
            return undefined;
        };
        this.getImportValue = function (importName) {
            var _a;
            return (_a = _this.getAssignedImport(importName)) === null || _a === void 0 ? void 0 : _a.payload;
        };
        this.filterImportBySetting = function (populatedImports, importKey, optionFilter) {
            var _a;
            var filteredImports = __assign({}, populatedImports);
            if (populatedImports[importKey]) {
                filteredImports = __assign(__assign({}, filteredImports), (_a = {}, _a[importKey] = Processor.filterOptions(populatedImports[importKey], function (option) {
                    return optionFilter(option);
                }), _a));
            }
            return filteredImports;
        };
        this.isComponentValue = function (componentName) {
            var _a;
            var value = _this.getComponentValue(componentName);
            var regex = new RegExp("enabled?");
            var isValue = false;
            if (value) {
                if (typeof value === "string") {
                    if (value === "true") {
                        isValue = true;
                    }
                    else if (value === "false") {
                        isValue = false;
                    }
                    else {
                        isValue = regex.test((_a = String(value)) === null || _a === void 0 ? void 0 : _a.toLowerCase());
                    }
                }
                else if (typeof value === "boolean") {
                    isValue = value;
                }
                else {
                    isValue = false;
                }
            }
            else {
                isValue = false;
            }
            return isValue;
        };
        this.getComponent = function (componentName) {
            return _this.getAutoModuleAppModel().getComponent(componentName);
        };
        this.getPCPHelper = function () {
            if (!_this.pcpHelper) {
                _this.pcpHelper = new PCPHelper_1.PCPHelper();
                _this.pcpHelper.setCallbacks({
                    getCompletePinData: function () { var _a, _b; return (_b = (_a = _this.getDerivedFunctions()).getPinsLogic) === null || _b === void 0 ? void 0 : _b.call(_a).getCompletePinData(_this); },
                    getRowData: function (rowData) { var _a, _b; return (_b = (_a = _this.getDerivedFunctions()).getPinsLogic) === null || _b === void 0 ? void 0 : _b.call(_a).getRowData(_this, rowData); },
                    getPinsData: function () { var _a, _b; return (_b = (_a = _this.getDerivedFunctions()).getPinsLogic) === null || _b === void 0 ? void 0 : _b.call(_a).getPinsData(); },
                });
            }
            return _this.pcpHelper;
        };
        this.getTableHelpers = tables_1.getTableHelpers;
        this.prototype = prototype;
        this.getDerivedDataFunction = getDerivedData;
    }
    MyAppModel.prototype.getComponentValue = function (componentName) {
        return this.getAutoModuleAppModel().getComponentValue(componentName);
    };
    return MyAppModel;
}());
//# sourceMappingURL=AppModel.js.map

/***/ }),

/***/ "./node_modules/@microchip/scf-automodule-impl/lib/Utils.js":
/*!******************************************************************!*\
  !*** ./node_modules/@microchip/scf-automodule-impl/lib/Utils.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.toDictionary = exports.assertNotNull = exports.map = exports.forEach = exports.values = exports.getKeys = void 0;
/** @returns the non-prototype keys of the given object */
var getKeys = function (obj) {
    return Object.getOwnPropertyNames(obj);
};
exports.getKeys = getKeys;
/**
 * Gets the values of a map as a list
 * @param obj
 * @returns
 */
var values = function (obj) {
    return (0, exports.getKeys)(obj).map(function (key) { return obj[key]; });
};
exports.values = values;
var forEach = function (obj, action) {
    (0, exports.getKeys)(obj).forEach(function (key) { return action(key, obj[key]); });
};
exports.forEach = forEach;
var map = function (obj, mapper) {
    return (0, exports.getKeys)(obj).map(function (key) { return mapper(key, obj[key]); });
};
exports.map = map;
var assertNotNull = function (val, msg) {
    if (val == null) {
        throw new Error(msg);
    }
};
exports.assertNotNull = assertNotNull;
var toDictionary = function (arr, keyMapper, valueMapper) {
    var result = {};
    arr.forEach(function (entry) {
        result[keyMapper(entry)] = valueMapper(entry);
    });
    return result;
};
exports.toDictionary = toDictionary;
//# sourceMappingURL=Utils.js.map

/***/ }),

/***/ "./node_modules/@microchip/scf-automodule-impl/lib/autoModule/AutoModuleAppModel.js":
/*!******************************************************************************************!*\
  !*** ./node_modules/@microchip/scf-automodule-impl/lib/autoModule/AutoModuleAppModel.js ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MyAutoModuleAppModel = exports.createAutoModuleAppModel = void 0;
var Setting_1 = __webpack_require__(/*! @microchip/scf-device/lib/Setting */ "./node_modules/@microchip/scf-device/lib/Setting.js");
var Arrays_1 = __webpack_require__(/*! @microchip/scf-device/lib/util/Arrays */ "./node_modules/@microchip/scf-device/lib/util/Arrays.js");
var Utils_1 = __webpack_require__(/*! ../Utils */ "./node_modules/@microchip/scf-automodule-impl/lib/Utils.js");
var AutoModuleHelper = __importStar(__webpack_require__(/*! ./AutoModuleHelpers */ "./node_modules/@microchip/scf-automodule-impl/lib/autoModule/AutoModuleHelpers.js"));
var getConfigData_1 = __webpack_require__(/*! ./getConfigData */ "./node_modules/@microchip/scf-automodule-impl/lib/autoModule/getConfigData.js");
var createAutoModuleAppModel = function (model, config) {
    return new MyAutoModuleAppModel(model, config);
};
exports.createAutoModuleAppModel = createAutoModuleAppModel;
var MyAutoModuleAppModel = /** @class */ (function () {
    function MyAutoModuleAppModel(model, config) {
        var _this = this;
        this.getModuleName = function () {
            var _a, _b, _c, _d, _e, _f, _g, _h;
            if (_this.moduleName)
                return _this.moduleName;
            _this.moduleName =
                (_h = (_f = (_d = (_c = (_b = (_a = _this.model.getDerivedFunctions()).moduleName) === null || _b === void 0 ? void 0 : _b.call(_a)) !== null && _c !== void 0 ? _c : _this.model.getComponentValue("componentName")) !== null && _d !== void 0 ? _d : (_e = _this.model.getHardware()) === null || _e === void 0 ? void 0 : _e.getName()) !== null && _f !== void 0 ? _f : (_g = _this.config) === null || _g === void 0 ? void 0 : _g.moduleName) !== null && _h !== void 0 ? _h : "Module";
            return _this.moduleName;
        };
        this.getModuleCategory = function () {
            var _a, _b;
            return (_b = (_a = _this.model.getDerivedFunctions()).moduleCategory) === null || _b === void 0 ? void 0 : _b.call(_a);
        };
        this.createComponentList = function () {
            var componentList = {};
            var components = _this.getComponentList();
            var componentsWithDynamicDependencySelectors = __spreadArray(__spreadArray([], components, true), _this.getDefaultDependencySelectors(components), true);
            if (componentsWithDynamicDependencySelectors) {
                componentsWithDynamicDependencySelectors.forEach(function (component) {
                    componentList[component.name] = {
                        component: component,
                    };
                });
            }
            return componentList;
        };
        this.getAllComponents = function () { return _this.componentList; };
        this.getComponentList = function () {
            var _a, _b, _c, _d, _e;
            var components = [];
            var config = _this.config;
            if (!config)
                return components;
            //Software Components
            (_b = (0, Utils_1.values)((_a = config.softwareData) !== null && _a !== void 0 ? _a : {})) === null || _b === void 0 ? void 0 : _b.forEach(function (entry) {
                components.push(entry);
            });
            //Hardware Components
            (_c = config.peripherals) === null || _c === void 0 ? void 0 : _c.forEach(function (peripheral) {
                var _a;
                if (peripheral.registers) {
                    (_a = (0, Arrays_1.getKeys)(peripheral.registers)) === null || _a === void 0 ? void 0 : _a.forEach(function (registerName) {
                        var _a, _b;
                        (_b = (_a = peripheral.registers) === null || _a === void 0 ? void 0 : _a[registerName]) === null || _b === void 0 ? void 0 : _b.forEach(function (setting) {
                            var _a, _b;
                            //Only add hardware components that exist at runtime
                            var hardwareRegister = (_b = (_a = _this.model.getHardware()) === null || _a === void 0 ? void 0 : _a.getPeripheral().registers) === null || _b === void 0 ? void 0 : _b[registerName];
                            if (!(hardwareRegister === null || hardwareRegister === void 0 ? void 0 : hardwareRegister.settings) ||
                                hardwareRegister.settings[setting.setting] ||
                                hardwareRegister.type === "register") {
                                components.push(setting);
                            }
                        });
                    });
                }
            });
            //Custom Dynamic Components
            (_e = (_d = _this.model
                .getDerivedFunctions()).getDynamicComponents) === null || _e === void 0 ? void 0 : _e.call(_d).forEach(function (component) {
                components.push(component);
            });
            return components;
        };
        this.getActions = function (component) {
            var _a, _b, _c;
            return ((_c = (_b = (_a = _this.model.getDerivedFunctions()).getActions) === null || _b === void 0 ? void 0 : _b.call(_a, component.name)) !== null && _c !== void 0 ? _c : component.actions);
        };
        this.getDefaultComponentAction = function (componentName) {
            var _a;
            var component = (_a = _this.getComponent(componentName)) === null || _a === void 0 ? void 0 : _a.component;
            return {
                type: "[FORM] SUBMIT",
                payload: {
                    tabId: "main",
                    path: "".concat(component === null || component === void 0 ? void 0 : component.group, ".").concat(component === null || component === void 0 ? void 0 : component.name),
                    value: "%v",
                },
            };
        };
        this.getSoftwareComponentValue = function (tab, component) {
            var _a, _b, _c, _d, _e, _f, _g, _h;
            var overriddenValue = _this.model.getDerivedFunction(component.name);
            if (overriddenValue != undefined && component.type === "time") {
                if (overriddenValue.defaultValue) {
                    return overriddenValue.defaultValue;
                }
                else {
                    return ((_d = (_c = (_b = (_a = _this.state) === null || _a === void 0 ? void 0 : _a[tab]) === null || _b === void 0 ? void 0 : _b[component.group]) === null || _c === void 0 ? void 0 : _c[component.name]) !== null && _d !== void 0 ? _d : component.defaultValue);
                }
            }
            if (overriddenValue != undefined) {
                return overriddenValue;
            }
            if (_this.model.isControlledByInterface(component.name)) {
                var processedArg = _this.model
                    .getExportInterfaces()
                    .getProcessedArgValue(component.name);
                if (processedArg != undefined) {
                    return processedArg.value;
                }
            }
            return ((_h = (_g = (_f = (_e = _this.state) === null || _e === void 0 ? void 0 : _e[tab]) === null || _f === void 0 ? void 0 : _f[component.group]) === null || _g === void 0 ? void 0 : _g[component.name]) !== null && _h !== void 0 ? _h : AutoModuleHelper.getDefaultValue(_this.model.getDerivedFunctions().overrideDefaultValues, component));
        };
        this.getHardwareComponentValue = function (tab, component, setting) {
            var _a, _b, _c, _d, _e, _f, _g;
            if (!_this.hardware)
                return undefined;
            var overriddenValue = _this.model.getDerivedFunction(component.name);
            if (overriddenValue != undefined) {
                return overriddenValue;
            }
            if (_this.model.isControlledByInterface(component.name)) {
                var processedArg = _this.model
                    .getExportInterfaces()
                    .getProcessedArgValue(component.name);
                if (processedArg != undefined) {
                    return processedArg.value;
                }
            }
            var overriddenCompValue = AutoModuleHelper.getOverrideDefaultValue(component, _this.model);
            var value; // value based on priority
            if (((_c = (_b = (_a = _this.state) === null || _a === void 0 ? void 0 : _a[tab]) === null || _b === void 0 ? void 0 : _b[component.group]) === null || _c === void 0 ? void 0 : _c[component.name]) != null) {
                value = _this.state[tab][component.group][component.name];
            }
            else if (overriddenCompValue !== undefined) {
                value = overriddenCompValue;
            }
            else {
                value =
                    setting !== undefined
                        ? component.overrideDefaultValue
                            ? component.overrideDefaultValue
                            : _this.getDefaultValue(component.displayOptionSetting, setting)
                        : (_d = component.overrideDefaultValue) !== null && _d !== void 0 ? _d : undefined;
            }
            //if filtered mode -> get options
            if (value != undefined && ((_e = component.mode) === null || _e === void 0 ? void 0 : _e.operation) === "filterOptions") {
                var options = AutoModuleHelper.getSettingOptionsIfPresent(component, setting, (_g = _this.model.getComponent((_f = component.mode) === null || _f === void 0 ? void 0 : _f.masterComponent)) === null || _g === void 0 ? void 0 : _g.value);
                if (options.indexOf(value) == -1) {
                    value = options[0];
                }
            }
            return value;
        };
        this.getHardwareComponentBooleanValue = function (tab, component, setting) {
            var _a, _b, _c;
            if (!_this.hardware)
                return undefined;
            var overriddenValue = _this.model.getDerivedFunction(component.name);
            if (overriddenValue != undefined) {
                return overriddenValue;
            }
            if (_this.model.isControlledByInterface(component.name)) {
                var processedArg = _this.model
                    .getExportInterfaces()
                    .getProcessedArgValue(component.name);
                if (processedArg != undefined) {
                    if (setting &&
                        setting.options &&
                        typeof processedArg.value === "boolean") {
                        var result_1 = "";
                        if (processedArg.value === true) {
                            var settingOptions = setting.options;
                            settingOptions.forEach(function (eachOption) {
                                if (eachOption.alias.toLowerCase().startsWith("enable")) {
                                    result_1 = eachOption.alias;
                                }
                            });
                        }
                        else if (processedArg.value === false) {
                            setting.options.forEach(function (eachOption) {
                                if (eachOption.alias.toLowerCase().startsWith("disable")) {
                                    result_1 = eachOption.alias;
                                }
                            });
                        }
                        return result_1;
                    }
                    return processedArg.value;
                }
            }
            var overriddenCompValue = AutoModuleHelper.getOverrideDefaultValue(component, _this.model);
            return ((_c = (_b = (_a = _this.state) === null || _a === void 0 ? void 0 : _a[tab]) === null || _b === void 0 ? void 0 : _b[component.group]) === null || _c === void 0 ? void 0 : _c[component.name]) != null
                ? _this.state[tab][component.group][component.name]
                    ? _this.config.booleanValues.true
                    : _this.config.booleanValues.false
                : overriddenCompValue !== undefined
                    ? overriddenCompValue
                    : setting !== undefined
                        ? component.overrideDefaultValue
                            ? component.overrideDefaultValue
                            : _this.getDefaultValue(component.displayOptionSetting, setting)
                        : undefined;
        };
        this.getDependencyComponentValue = function (component) {
            var dependencySelector = new AutoModuleHelper.DependencySelector(_this.model, component);
            var imp = _this.model.getImports()[component.importId];
            if (imp === null || imp === void 0 ? void 0 : imp.handle) {
                return dependencySelector.createOptionLabel(imp.handle, imp.payload);
            }
            return "None";
        };
        this.getFileLoadComponentValue = function (component) {
            var _a;
            var fileContents;
            fileContents = (_a = _this.model.getPrototypeModule().loadedFiles) === null || _a === void 0 ? void 0 : _a[component.name];
            return fileContents;
        };
        this.getFileSaveComponentValue = function (component) {
            var _a;
            var fileContents = undefined;
            var overriddenValue = _this.model.getDerivedFunction(component.name);
            if (overriddenValue !== undefined) {
                fileContents = overriddenValue;
            }
            else {
                fileContents = (_a = component.fileMeta) === null || _a === void 0 ? void 0 : _a.defaultContent;
            }
            return fileContents;
        };
        this.getDefaultValue = function (optionType, setting) {
            var _a;
            if (optionType == undefined)
                return setting.defaultValue;
            if (setting.defaultValue) {
                return (_a = (0, Setting_1.getOptionByName)(setting.defaultValue, setting)) === null || _a === void 0 ? void 0 : _a[optionType];
            }
            return undefined;
        };
        this.model = model;
        this.state = this.model.getState();
        this.hardware = this.model.getHardware();
        this.config = (0, getConfigData_1.getConfigData)(model);
        this.componentList = this.createComponentList();
    }
    MyAutoModuleAppModel.prototype.getDefaultDependencySelectors = function (components) {
        var dynamicDependencySelectors = [];
        var defaultTab = "main";
        var defaultGroup = "software";
        if (components.length > 0) {
            defaultTab = components[0].tabs[0];
            defaultGroup = components[0].group;
        }
        var imports = this.model.getImports();
        if (imports) {
            var importedNames = Object.keys(imports);
            importedNames.forEach(function (name) {
                var _a;
                var dependencySelectors = components.filter(function (component) {
                    return component["importId"] && component["importId"] === name;
                });
                if (dependencySelectors.length === 0) {
                    dynamicDependencySelectors.push({
                        name: name + " dependency selector",
                        importId: name,
                        category: "import",
                        type: "ComboBox",
                        description: name + " dependency selector",
                        group: defaultGroup,
                        tabs: [defaultTab],
                        uiBehavior: (_a = {},
                            _a["ui:widget"] = "hidden",
                            _a),
                    });
                }
            });
        }
        return dynamicDependencySelectors;
    };
    MyAutoModuleAppModel.prototype.isComponent = function (componentName) {
        var _a;
        var component = (_a = this.componentList[componentName]) === null || _a === void 0 ? void 0 : _a.component;
        var componentValue = this.getComponentValue(componentName);
        if (component.category === "software") {
            if (component.type === "boolean") {
                return this.getComponentValue(componentName);
            }
            return componentValue !== undefined;
        }
        else if (component.category === "hardware") {
            return componentValue === this.config.booleanValues.true;
        }
        return undefined;
    };
    MyAutoModuleAppModel.prototype.getComponentValue = function (componentName) {
        var _a;
        return (_a = this.getComponent(componentName)) === null || _a === void 0 ? void 0 : _a.value;
    };
    MyAutoModuleAppModel.prototype.getComponent = function (componentName) {
        var _this = this;
        var _a, _b;
        if (((_a = this.componentList[componentName]) === null || _a === void 0 ? void 0 : _a.value) != undefined)
            return this.componentList[componentName];
        var component = (_b = this.componentList[componentName]) === null || _b === void 0 ? void 0 : _b.component;
        component === null || component === void 0 ? void 0 : component.tabs.forEach(function (tab) {
            if (component) {
                if (component.category === "software") {
                    _this.componentList[componentName].value =
                        _this.getSoftwareComponentValue(tab, component);
                }
                else if (component.category === "hardware") {
                    var setting = AutoModuleHelper.getSettingFromComponent(_this.model, component);
                    if (component.type === "boolean") {
                        _this.componentList[componentName].value =
                            _this.getHardwareComponentBooleanValue(tab, component, setting);
                    }
                    else {
                        _this.componentList[componentName].value =
                            _this.getHardwareComponentValue(tab, component, setting);
                    }
                }
                else if (component.category === "import") {
                    _this.componentList[componentName].value =
                        _this.getDependencyComponentValue(component);
                }
                else if (component.category === "file_load") {
                    _this.componentList[componentName].value =
                        _this.getFileLoadComponentValue(component);
                }
                else if (component.category === "file_save") {
                    _this.componentList[componentName].value =
                        _this.getFileSaveComponentValue(component);
                }
                _this.componentList[componentName].component.actions =
                    _this.getActions(component);
            }
        });
        return this.componentList[componentName];
    };
    return MyAutoModuleAppModel;
}());
exports.MyAutoModuleAppModel = MyAutoModuleAppModel;
//# sourceMappingURL=AutoModuleAppModel.js.map

/***/ }),

/***/ "./node_modules/@microchip/scf-automodule-impl/lib/autoModule/AutoModuleHardware.js":
/*!******************************************************************************************!*\
  !*** ./node_modules/@microchip/scf-automodule-impl/lib/autoModule/AutoModuleHardware.js ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.isFullyAssigned = exports.createPrototypeImport = void 0;
var Processor_1 = __webpack_require__(/*! @microchip/scf-common/lib/Processor */ "./node_modules/@microchip/scf-common/lib/Processor.js");
var Arrays_1 = __webpack_require__(/*! @microchip/scf-device/lib/util/Arrays */ "./node_modules/@microchip/scf-device/lib/util/Arrays.js");
var AutoModuleHelpers_1 = __webpack_require__(/*! ./AutoModuleHelpers */ "./node_modules/@microchip/scf-automodule-impl/lib/autoModule/AutoModuleHelpers.js");
var createPrototypeImport = function (interfaceName, config) {
    var _a, _b;
    return (_b = (_a = config === null || config === void 0 ? void 0 : config.imports) === null || _a === void 0 ? void 0 : _a[interfaceName]) === null || _b === void 0 ? void 0 : _b.import;
};
exports.createPrototypeImport = createPrototypeImport;
var isFullyAssigned = function (imports, config) {
    var _a;
    //get peripheral interfaces.
    var interfaces = getHardwareInterfaces((_a = config === null || config === void 0 ? void 0 : config.peripherals) !== null && _a !== void 0 ? _a : []);
    for (var i = 0; i < interfaces.length; i++) {
        var imp = imports === null || imports === void 0 ? void 0 : imports[interfaces[i]];
        if (!imp || !(0, Processor_1.isAssigned)(imp)) {
            return false;
        }
    }
    return true;
};
exports.isFullyAssigned = isFullyAssigned;
//Assumes hardware import keys are the same as the interface IDs
var getHardwareInterfaces = function (peripherals) {
    var interfaces = (0, Arrays_1.map)(peripherals, function (peripheral) {
        var _a;
        return (_a = (0, AutoModuleHelpers_1.getFriendlyInterfaceId)(peripheral.interfaceId.name)) !== null && _a !== void 0 ? _a : "";
    });
    return interfaces;
};
//# sourceMappingURL=AutoModuleHardware.js.map

/***/ }),

/***/ "./node_modules/@microchip/scf-automodule-impl/lib/autoModule/AutoModuleHelpers.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/@microchip/scf-automodule-impl/lib/autoModule/AutoModuleHelpers.js ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getFriendlyInterfaceId = exports.getModuleDefaultDescription = exports.DependencySelector = exports.populateLoadedFiles = exports.getProcessedHandle = exports.filterModeOptions = exports.getSettingOptionsIfPresent = exports.getOverrideDefaultValue = exports.getSettingDefaultIfPresent = exports.getOptionValueByName = exports.getSettingFromComponent = exports.getSettingBits = exports.getRegisterValues = exports.hasConfigBits = exports.getComboOptions = exports.getDefaultValue = exports.castComponent = void 0;
var CalculateRegisterValue_1 = __importDefault(__webpack_require__(/*! @microchip/scf-device/lib/CalculateRegisterValue */ "./node_modules/@microchip/scf-device/lib/CalculateRegisterValue.js"));
var Setting_1 = __webpack_require__(/*! @microchip/scf-device/lib/Setting */ "./node_modules/@microchip/scf-device/lib/Setting.js");
var Arrays_1 = __webpack_require__(/*! @microchip/scf-device/lib/util/Arrays */ "./node_modules/@microchip/scf-device/lib/util/Arrays.js");
var Utils_1 = __webpack_require__(/*! ../Utils */ "./node_modules/@microchip/scf-automodule-impl/lib/Utils.js");
var getConfigData_1 = __webpack_require__(/*! ./getConfigData */ "./node_modules/@microchip/scf-automodule-impl/lib/autoModule/getConfigData.js");
var castComponent = function (component) {
    switch (component.category) {
        case "software":
            return component;
        case "import":
            return component;
        case "hardware":
            return component;
        default:
            throw Error("Unsupported Component Type");
    }
};
exports.castComponent = castComponent;
var getDefaultValue = function (overrideDefaultValues, component) {
    var _a;
    return ((_a = overrideDefaultValues === null || overrideDefaultValues === void 0 ? void 0 : overrideDefaultValues(component.name)) !== null && _a !== void 0 ? _a : (component.type === "ComboBox"
        ? component.defaultValue.value
        : component.defaultValue));
};
exports.getDefaultValue = getDefaultValue;
var getComboOptions = function (overrideOptions, component) {
    var _a, _b;
    return (_a = overrideOptions === null || overrideOptions === void 0 ? void 0 : overrideOptions(component.name)) !== null && _a !== void 0 ? _a : (_b = component === null || component === void 0 ? void 0 : component.defaultValue) === null || _b === void 0 ? void 0 : _b["options"];
};
exports.getComboOptions = getComboOptions;
var hasConfigBits = function (interfaceName) {
    var _a;
    return ((_a = (0, exports.getFriendlyInterfaceId)(interfaceName)) === null || _a === void 0 ? void 0 : _a.indexOf("configuration_bits")) != -1;
};
exports.hasConfigBits = hasConfigBits;
var getRegisterValues = function (model, interfaceName) {
    var _a;
    var registers = {};
    var config = (0, getConfigData_1.getConfigData)(model);
    interfaceName = (0, exports.getFriendlyInterfaceId)(interfaceName);
    (_a = config === null || config === void 0 ? void 0 : config.peripherals) === null || _a === void 0 ? void 0 : _a.forEach(function (peripheral) {
        var _a, _b, _c;
        var peripheralName = (_a = (0, exports.getFriendlyInterfaceId)(peripheral.interfaceId.name)) !== null && _a !== void 0 ? _a : "";
        if ((0, exports.hasConfigBits)(peripheralName))
            return;
        if ((interfaceName != undefined && peripheralName !== interfaceName) ||
            !peripheral.registers)
            return;
        (_c = (0, Utils_1.getKeys)((_b = peripheral.registers) !== null && _b !== void 0 ? _b : {})) === null || _c === void 0 ? void 0 : _c.forEach(function (regName) {
            var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
            var registerValue;
            var reg = (_b = (_a = model.getHardware(peripheralName)) === null || _a === void 0 ? void 0 : _a.getPeripheral().registers) === null || _b === void 0 ? void 0 : _b[regName];
            if (reg) {
                registerValue = {
                    comment: "",
                    value: 0,
                    valueAsHex: "0x00",
                    name: reg === null || reg === void 0 ? void 0 : reg.name,
                    alias: (_c = reg === null || reg === void 0 ? void 0 : reg.alias) !== null && _c !== void 0 ? _c : reg === null || reg === void 0 ? void 0 : reg.name,
                    settings: {},
                };
            }
            else {
                return;
            }
            var registerVal = CalculateRegisterValue_1.default.for(reg);
            var comments = [];
            (_d = peripheral.registers) === null || _d === void 0 ? void 0 : _d[regName].forEach(function (set) {
                var _a, _b, _c, _d, _e;
                var setting = (_a = reg.settings) === null || _a === void 0 ? void 0 : _a[set.setting];
                if (setting) {
                    if (setting.type !== "R") {
                        //Add Comments
                        comments.push("".concat(set.setting, " ").concat(model.getComponentValue(set.name), "; "));
                    }
                    if (registerValue === null || registerValue === void 0 ? void 0 : registerValue.settings) {
                        registerValue.settings[setting.alias] = (0, exports.getSettingBits)(reg, setting, (_b = model.getComponent(set.name)) === null || _b === void 0 ? void 0 : _b.value, (_c = config === null || config === void 0 ? void 0 : config.deviceType) !== null && _c !== void 0 ? _c : "PIC");
                    }
                    switch (set.type) {
                        case "ComboBox":
                        case "boolean":
                            registerVal.withNumberValue(setting, (_e = (0, exports.getOptionValueByName)(setting, (_d = model.getComponent(set.name)) === null || _d === void 0 ? void 0 : _d.value)) !== null && _e !== void 0 ? _e : 0);
                            break;
                        case "number":
                            registerVal.withNumberValue(setting, model.getComponentValue(set.name));
                            break;
                        case "register":
                        case "string":
                            registerVal.withNumberValue(setting, Number(model.getComponentValue(set.name)));
                            break;
                        default:
                            break;
                    }
                }
            });
            if (reg.settings) {
                registerValue.value = registerVal.asNumber();
            }
            else {
                registerValue.value = Number((_j = model.getComponentValue((_h = (_g = (_f = (_e = peripheral.registers) === null || _e === void 0 ? void 0 : _e[regName]) === null || _f === void 0 ? void 0 : _f[0]) === null || _g === void 0 ? void 0 : _g.name) !== null && _h !== void 0 ? _h : "")) !== null && _j !== void 0 ? _j : 0);
                comments.push("".concat(registerValue.name, " ").concat(registerValue.value, "; "));
            }
            registerValue.valueAsHex =
                "0x" + registerValue.value.toString(16).toUpperCase();
            registerValue.comment = sortComments(comments, reg);
            registers[(_k = reg === null || reg === void 0 ? void 0 : reg.alias) !== null && _k !== void 0 ? _k : reg.name] = registerValue;
        });
    });
    return registers;
};
exports.getRegisterValues = getRegisterValues;
var sortComments = function (comments, register) {
    comments.sort(function (a, b) {
        var _a, _b, _c, _d;
        var settingA = (_a = register.settings) === null || _a === void 0 ? void 0 : _a[(_b = a.split[" "]) === null || _b === void 0 ? void 0 : _b[0]];
        var settingB = (_c = register.settings) === null || _c === void 0 ? void 0 : _c[(_d = b.split(" ")) === null || _d === void 0 ? void 0 : _d[0]];
        return Number(settingB === null || settingB === void 0 ? void 0 : settingB.mask) - Number(settingA === null || settingA === void 0 ? void 0 : settingA.mask);
    });
    return comments.join("");
};
var getSettingBits = function (register, setting, value, deviceType) {
    var _a, _b;
    var setValNumber = Number((_b = (_a = (0, Setting_1.getOptionByAlias)(value, setting)) === null || _a === void 0 ? void 0 : _a.value) !== null && _b !== void 0 ? _b : 0);
    var settingValue = {
        alias: setting.alias,
        name: setting.name,
        value: setValNumber !== null && setValNumber !== void 0 ? setValNumber : 0,
        valueAsHex: "0x" + setValNumber.toString(16).toUpperCase(),
        valueAsDescription: value,
        bitName: deviceType === "PIC"
            ? "".concat(register.name, "bits.").concat(setting.name)
            : "".concat(register.name, ".").concat(setting.name),
    };
    return settingValue;
};
exports.getSettingBits = getSettingBits;
var getRegisterFromComponent = function (hardware, component) {
    var _a, _b, _c, _d, _e;
    var registerName = (_a = component.name
        .replace(component.setting.toLowerCase(), "")) === null || _a === void 0 ? void 0 : _a.toUpperCase();
    var register = (_b = hardware === null || hardware === void 0 ? void 0 : hardware.registers) === null || _b === void 0 ? void 0 : _b[registerName];
    if (register) {
        return register;
    }
    else {
        var regName = (_c = component.name
            .replace(component.setting.toLowerCase(), "")) === null || _c === void 0 ? void 0 : _c.toUpperCase();
        var registers = (0, Utils_1.getKeys)((_d = hardware === null || hardware === void 0 ? void 0 : hardware.registers) !== null && _d !== void 0 ? _d : {});
        for (var _i = 0, _f = registers !== null && registers !== void 0 ? registers : []; _i < _f.length; _i++) {
            var reg = _f[_i];
            var modifiedRegName = reg.replace(/_/g, "");
            if (regName === modifiedRegName) {
                return (_e = hardware === null || hardware === void 0 ? void 0 : hardware.registers) === null || _e === void 0 ? void 0 : _e[reg];
            }
        }
    }
};
var getSettingFromComponent = function (model, component) {
    var _a;
    var config = (0, getConfigData_1.getConfigData)(model);
    var setting;
    if (model) {
        (_a = config === null || config === void 0 ? void 0 : config.peripherals) === null || _a === void 0 ? void 0 : _a.forEach(function (peripheral) {
            var _a, _b, _c;
            if (setting)
                return;
            var peripheralName = (0, exports.getFriendlyInterfaceId)(peripheral.interfaceId.name);
            var hardware = (_a = model.getHardware(peripheralName)) === null || _a === void 0 ? void 0 : _a.getPeripheral();
            var register = getRegisterFromComponent(hardware, component);
            if (register && !register.settings) {
                //No settings for this particular register. Create one
                setting = {
                    alias: (_b = register.alias) !== null && _b !== void 0 ? _b : register.name,
                    name: register.name,
                    defaultValue: register.defaultValue,
                    type: register.type,
                    description: register.desc,
                    porDefault: register.defaultValue,
                };
            }
            else {
                setting = (_c = register === null || register === void 0 ? void 0 : register.settings) === null || _c === void 0 ? void 0 : _c[component.setting];
            }
        });
    }
    return setting;
};
exports.getSettingFromComponent = getSettingFromComponent;
var getOptionValueByName = function (setting, optionName) {
    if (!setting)
        return undefined;
    var optionValue = setting.porDefault;
    if (setting.options) {
        setting.options.forEach(function (option) {
            if (option.name === optionName || option.description === optionName) {
                optionValue = option.value;
            }
        });
    }
    return Number(optionValue);
};
exports.getOptionValueByName = getOptionValueByName;
var getSettingDefaultIfPresent = function (component, setting, overrideDefaultValue) {
    var _a, _b;
    var defaultValue;
    if (overrideDefaultValue !== undefined) {
        return overrideDefaultValue;
    }
    if (component.overrideDefaultValue) {
        return component.overrideDefaultValue;
    }
    if (setting === null || setting === void 0 ? void 0 : setting.defaultValue) {
        var option = (0, Setting_1.getOptionByName)(setting.defaultValue, setting);
        defaultValue =
            (_b = option === null || option === void 0 ? void 0 : option[(_a = component.displayOptionSetting) !== null && _a !== void 0 ? _a : "alias"]) !== null && _b !== void 0 ? _b : setting.defaultValue;
    }
    return defaultValue;
};
exports.getSettingDefaultIfPresent = getSettingDefaultIfPresent;
var getOverrideDefaultValue = function (component, model) {
    var _a, _b;
    return (_b = (_a = model.getDerivedFunctions()).overrideDefaultValues) === null || _b === void 0 ? void 0 : _b.call(_a, component.name);
};
exports.getOverrideDefaultValue = getOverrideDefaultValue;
var getSettingOptionsIfPresent = function (component, setting, masterComponentValue) {
    var _a;
    var options = [""];
    if (setting) {
        var filteredOptions = component.mode
            ? (0, exports.filterModeOptions)((_a = setting.options) !== null && _a !== void 0 ? _a : [], component, masterComponentValue)
            : setting.options;
        options = (0, Arrays_1.map)(filteredOptions !== null && filteredOptions !== void 0 ? filteredOptions : [], function (option) { var _a, _b; return (_b = option[(_a = component.displayOptionSetting) !== null && _a !== void 0 ? _a : "alias"]) !== null && _b !== void 0 ? _b : option.alias; });
    }
    return options;
};
exports.getSettingOptionsIfPresent = getSettingOptionsIfPresent;
var filterModeOptions = function (options, component, masterComponentValue) {
    var _a, _b, _c, _d;
    if (((_a = component.mode) === null || _a === void 0 ? void 0 : _a.operation) != "filterOptions" || masterComponentValue == undefined)
        return options;
    //Determine mode
    var mode = (0, Arrays_1.find)((_d = (0, Utils_1.getKeys)((_c = (_b = component.mode) === null || _b === void 0 ? void 0 : _b.optionModes) !== null && _c !== void 0 ? _c : {})) !== null && _d !== void 0 ? _d : [], function (mode) {
        var _a, _b, _c, _d;
        var match = (_b = (_a = component.mode) === null || _a === void 0 ? void 0 : _a.optionModes) === null || _b === void 0 ? void 0 : _b[mode];
        if (match) {
            return ((_d = (_c = masterComponentValue === null || masterComponentValue === void 0 ? void 0 : masterComponentValue.match(match)) === null || _c === void 0 ? void 0 : _c.length) !== null && _d !== void 0 ? _d : -1) > 0;
        }
        return false;
    });
    // optionModes : when Key value are not same
    if (mode === undefined) {
        mode = masterComponentValue;
    }
    var filteredOptions = (0, Arrays_1.filter)(options !== null && options !== void 0 ? options : [], function (option) {
        var _a, _b, _c, _d;
        if (option.mode && mode) {
            var match = (_b = (_a = component.mode) === null || _a === void 0 ? void 0 : _a.optionModes) === null || _b === void 0 ? void 0 : _b[mode];
            if (match) {
                return ((_d = (_c = option.mode.match(match)) === null || _c === void 0 ? void 0 : _c.length) !== null && _d !== void 0 ? _d : -1) > 0;
            }
        }
        return true;
    });
    return filteredOptions;
};
exports.filterModeOptions = filterModeOptions;
var getProcessedHandle = function (handle, payload) {
    var _a, _b, _c, _d;
    if (handle) {
        handle = __assign(__assign({}, handle), { label: (_d = (_c = (_b = (_a = handle === null || handle === void 0 ? void 0 : handle.label) !== null && _a !== void 0 ? _a : payload === null || payload === void 0 ? void 0 : payload.customName) !== null && _b !== void 0 ? _b : payload === null || payload === void 0 ? void 0 : payload.moduleName) !== null && _c !== void 0 ? _c : payload === null || payload === void 0 ? void 0 : payload.name) !== null && _d !== void 0 ? _d : handle.providerId + " : " + handle.exportId });
    }
    return handle;
};
exports.getProcessedHandle = getProcessedHandle;
var populateLoadedFiles = function (processedOutput) {
    var _a;
    var result = __assign({}, processedOutput);
    var consolidatedFiles = {};
    //pushing all the inmemory files provided from Melody
    if (result.loadedFiles !== undefined) {
        for (var eachFileId in result.loadedFiles) {
            var eachFile = result.loadedFiles[eachFileId];
            consolidatedFiles[eachFileId] = eachFile;
        }
    }
    //pushing all the instate files stored in state(project) - NOTE: if same fileId exists in state and memory then state will be given priority
    if (((_a = result.state) === null || _a === void 0 ? void 0 : _a.loadedFiles) !== undefined) {
        for (var eachFileId in result.state.loadedFiles) {
            var eachFile = result.state.loadedFiles[eachFileId];
            consolidatedFiles[eachFileId] = eachFile;
        }
    }
    result.loadedFiles = consolidatedFiles;
    return result;
};
exports.populateLoadedFiles = populateLoadedFiles;
var DependencySelector = /** @class */ (function () {
    function DependencySelector(model, component) {
        var _this = this;
        this.noneSelection = { label: "None" };
        this.createOptionEntry = function (option) {
            return {
                label: _this.createOptionLabel(option.handle, option.payload),
                value: option,
            };
        };
        this.createOptionLabel = function (handle, payload) {
            var _a, _b;
            return (_b = (_a = (0, exports.getProcessedHandle)(handle, payload)) === null || _a === void 0 ? void 0 : _a.label) !== null && _b !== void 0 ? _b : "";
        };
        this.model = model;
        this.component = component;
    }
    DependencySelector.prototype.generateDropdownOptions = function () {
        var dropdownOptions = [];
        var thisImport = this.model.getImports()[this.component.importId];
        var options = thisImport === null || thisImport === void 0 ? void 0 : thisImport.options;
        if (this.shouldAllowUnselectDependency(thisImport, options)) {
            dropdownOptions.push(this.noneSelection);
        }
        if (options !== undefined) {
            for (var option in options) {
                dropdownOptions.push(this.createOptionEntry(options[option]));
            }
        }
        return dropdownOptions;
    };
    DependencySelector.prototype.getDropdownOptionNames = function () {
        var names = [];
        this.generateDropdownOptions().forEach(function (option) { return names.push(option.label); });
        return names;
    };
    DependencySelector.prototype.shouldAllowUnselectDependency = function (thisImport, options) {
        return thisImport != undefined && thisImport.isUnassignable != false;
    };
    return DependencySelector;
}());
exports.DependencySelector = DependencySelector;
function getModuleDefaultDescription() {
    //TODO: Need to refactor this so that gets it from the source.
    //Alternatively, we could get it during the automodule update process and fetch it from there...
    return undefined;
}
exports.getModuleDefaultDescription = getModuleDefaultDescription;
var getFriendlyInterfaceId = function (interfaceName) {
    interfaceName = interfaceName === null || interfaceName === void 0 ? void 0 : interfaceName.replace(/ /g, "").replace(/-/g, "_");
    return interfaceName;
};
exports.getFriendlyInterfaceId = getFriendlyInterfaceId;
//# sourceMappingURL=AutoModuleHelpers.js.map

/***/ }),

/***/ "./node_modules/@microchip/scf-automodule-impl/lib/autoModule/AutoModuleTemplates.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/@microchip/scf-automodule-impl/lib/autoModule/AutoModuleTemplates.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getConfigBits = exports.getTemplateSettings = exports.getTemplatePayload = exports.getTemplates = void 0;
var AutoModuleHelper = __importStar(__webpack_require__(/*! ./AutoModuleHelpers */ "./node_modules/@microchip/scf-automodule-impl/lib/autoModule/AutoModuleHelpers.js"));
var Arrays_1 = __webpack_require__(/*! @microchip/scf-device/lib/util/Arrays */ "./node_modules/@microchip/scf-device/lib/util/Arrays.js");
var getConfigData_1 = __webpack_require__(/*! ./getConfigData */ "./node_modules/@microchip/scf-automodule-impl/lib/autoModule/getConfigData.js");
var Utils_1 = __webpack_require__(/*! ../Utils */ "./node_modules/@microchip/scf-automodule-impl/lib/Utils.js");
var AutoModuleHardware_1 = __webpack_require__(/*! ./AutoModuleHardware */ "./node_modules/@microchip/scf-automodule-impl/lib/autoModule/AutoModuleHardware.js");
var AutoModuleHelpers_1 = __webpack_require__(/*! ./AutoModuleHelpers */ "./node_modules/@microchip/scf-automodule-impl/lib/autoModule/AutoModuleHelpers.js");
var getTemplates = function (model) {
    var _a;
    var config = (0, getConfigData_1.getConfigData)(model);
    var templates = [];
    (_a = config === null || config === void 0 ? void 0 : config.templates) === null || _a === void 0 ? void 0 : _a.forEach(function (template) {
        var _a, _b, _c;
        var newTemplate = __assign({}, template);
        if (!model)
            return;
        newTemplate.dest =
            (_c = (_b = (_a = model.getDerivedFunctions()).templateName) === null || _b === void 0 ? void 0 : _b.call(_a, newTemplate.src)) !== null && _c !== void 0 ? _c : newTemplate.dest;
        newTemplate.dest = newTemplate.dest.replace("${sourceFileName}", model.getName().toLowerCase() + ".c");
        newTemplate.dest = newTemplate.dest.replace("${headerFileName}", model.getName().toLowerCase() + ".h");
        if (shouldGenerate(newTemplate, model)) {
            templates.push(newTemplate);
        }
    });
    return templates;
};
exports.getTemplates = getTemplates;
var shouldGenerate = function (template, model) {
    var shouldGenerate = true;
    if (!model)
        return shouldGenerate;
    if (shouldGenerate &&
        template.generateWithHardware == true &&
        !(0, AutoModuleHardware_1.isFullyAssigned)(model.getPrototypeModule().imports, (0, getConfigData_1.getConfigData)(model))) {
        shouldGenerate = false;
    }
    if (shouldGenerate &&
        template.isGeneratableProperty &&
        model.getDerivedFunction(template.isGeneratableProperty) != true) {
        shouldGenerate = false;
    }
    return shouldGenerate;
};
var getTemplatePayload = function (model) {
    var _a;
    if (!model)
        return undefined;
    var config = (0, getConfigData_1.getConfigData)(model);
    var moduleName = model.getName();
    var templatePayload = {
        name: {
            uppercase: moduleName.toUpperCase(),
            lowercase: moduleName.toLowerCase(),
            instance: moduleName,
        },
        filename: {
            source: "".concat(moduleName.toLowerCase(), ".c"),
            header: "".concat(moduleName.toLowerCase(), ".h"),
        },
    };
    var components = model
        .getAutoModuleAppModel()
        .getAllComponents();
    (_a = (0, Utils_1.values)(components)) === null || _a === void 0 ? void 0 : _a.forEach(function (entry) {
        templatePayload[entry.component.name] = getComponentPayload(entry.component, model);
    });
    templatePayload = __assign(__assign({}, templatePayload), (0, exports.getTemplateSettings)(model, config));
    return templatePayload;
};
exports.getTemplatePayload = getTemplatePayload;
var getTemplateSettings = function (model, config) {
    var _a, _b;
    if (!(model === null || model === void 0 ? void 0 : model.getHardware()))
        return undefined;
    return {
        registers: model.getRegisterValues(undefined),
        interrupts: (_a = model.getHardware()) === null || _a === void 0 ? void 0 : _a.getPeripheral().interrupts,
        properties: (_b = model.getHardware()) === null || _b === void 0 ? void 0 : _b.getPeripheral().properties,
    };
};
exports.getTemplateSettings = getTemplateSettings;
var getConfigBits = function (model) {
    var _a, _b, _c;
    var config = (0, getConfigData_1.getConfigData)(model);
    var configModule = (0, Arrays_1.find)((_a = config === null || config === void 0 ? void 0 : config.peripherals) !== null && _a !== void 0 ? _a : [], function (peripheral) {
        return AutoModuleHelper.hasConfigBits(peripheral.interfaceId.name);
    });
    if (configModule) {
        var interfaceName = AutoModuleHelper.getFriendlyInterfaceId(configModule.interfaceId.name);
        var templateConfigBits_1 = {};
        var registers_1 = (_b = model.getHardware(interfaceName)) === null || _b === void 0 ? void 0 : _b.getPeripheral().registers;
        (_c = (0, Utils_1.getKeys)(registers_1 !== null && registers_1 !== void 0 ? registers_1 : [])) === null || _c === void 0 ? void 0 : _c.forEach(function (configName) {
            var _a;
            var _b;
            var configBits = (_b = configModule.registers) === null || _b === void 0 ? void 0 : _b[configName];
            templateConfigBits_1 = __assign(__assign({}, templateConfigBits_1), (_a = {}, _a[configName] = {}, _a));
            configBits === null || configBits === void 0 ? void 0 : configBits.forEach(function (configBit) {
                var _a, _b, _c, _d, _e, _f, _g, _h;
                var register = registers_1 === null || registers_1 === void 0 ? void 0 : registers_1[configName];
                var value;
                if (register && !register.settings) {
                    //missing settings for register
                    value = (_b = (_a = model.getComponent(configBit.name)) === null || _a === void 0 ? void 0 : _a.value) !== null && _b !== void 0 ? _b : "";
                }
                else {
                    var setting = (_d = (_c = registers_1 === null || registers_1 === void 0 ? void 0 : registers_1[configName]) === null || _c === void 0 ? void 0 : _c.settings) === null || _d === void 0 ? void 0 : _d[configBit.setting];
                    value =
                        (_g = (_f = (0, Arrays_1.find)((_e = setting === null || setting === void 0 ? void 0 : setting.options) !== null && _e !== void 0 ? _e : [], function (option) {
                            var _a, _b, _c;
                            return option.description ===
                                ((_a = model.getComponent(configBit.name)) === null || _a === void 0 ? void 0 : _a.value) ||
                                option.alias ===
                                    ((_b = model.getComponent(configBit.name)) === null || _b === void 0 ? void 0 : _b.value) ||
                                option.name === ((_c = model.getComponent(configBit.name)) === null || _c === void 0 ? void 0 : _c.value);
                        })) === null || _f === void 0 ? void 0 : _f.name) !== null && _g !== void 0 ? _g : "";
                }
                templateConfigBits_1[configName][configBit.setting] = {
                    name: configBit.setting,
                    value: value,
                    description: configBit.description,
                    valueAsDescription: (_h = model.getComponent(configBit.name)) === null || _h === void 0 ? void 0 : _h.value,
                };
            });
        });
        return templateConfigBits_1;
    }
    else {
        return {};
    }
};
exports.getConfigBits = getConfigBits;
var getComponentPayload = function (component, model) {
    var _a, _b;
    var componentValue = model.getComponentValue(component.name);
    switch (component.type) {
        case "ComboBox":
            if (component.category === "hardware") {
                var setting = AutoModuleHelper.getSettingFromComponent(model, component);
                return {
                    value: componentValue,
                    options: AutoModuleHelper.getSettingOptionsIfPresent(component, setting, model.getComponentValue((_b = (_a = component.mode) === null || _a === void 0 ? void 0 : _a.masterComponent) !== null && _b !== void 0 ? _b : "")),
                };
            }
            else if (component.category === "software") {
                return {
                    value: componentValue,
                    options: (0, AutoModuleHelpers_1.getComboOptions)(model.getDerivedFunctions().overrideOptions, component),
                };
            }
            break;
        case "boolean":
            return model.isComponentValue(component.name);
        case "number":
        case "string":
        case "register":
        default:
            return componentValue;
    }
};
//# sourceMappingURL=AutoModuleTemplates.js.map

/***/ }),

/***/ "./node_modules/@microchip/scf-automodule-impl/lib/autoModule/ContextualHelp.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/@microchip/scf-automodule-impl/lib/autoModule/ContextualHelp.js ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.getAutoSdlHelp = void 0;
/**
 * Returns the valid link for each component of a module
 *
 * @param dataModel - AppModel for current module
 * @param componentName - Current component under the module
 * @param helpUrl - Generic url
 * @returns Valid link to microchip docs
 */
var getAutoSdlHelp = function (dataModel, componentName, helpUrl) {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r;
    var deviceMeta = dataModel.getImportValue("device_meta");
    var deviceName = (_a = deviceMeta === null || deviceMeta === void 0 ? void 0 : deviceMeta.deviceName) !== null && _a !== void 0 ? _a : "";
    var moduleName = (_d = (_c = (_b = dataModel.getHardware()) === null || _b === void 0 ? void 0 : _b.getPeripheral()) === null || _c === void 0 ? void 0 : _c.group) !== null && _d !== void 0 ? _d : "";
    var dosid = (_g = (_f = (_e = dataModel.getHardware()) === null || _e === void 0 ? void 0 : _e.getPeripheral()) === null || _f === void 0 ? void 0 : _f.dosid) !== null && _g !== void 0 ? _g : "";
    var comp = (_j = (_h = dataModel.getComponent(componentName)) === null || _h === void 0 ? void 0 : _h.component) !== null && _j !== void 0 ? _j : "";
    var setting = (_l = (_k = comp === null || comp === void 0 ? void 0 : comp.setting) === null || _k === void 0 ? void 0 : _k.toLowerCase()) !== null && _l !== void 0 ? _l : "";
    var registerName = componentName.toLowerCase().replace(setting, "");
    var registerAlias = (_m = registerName === null || registerName === void 0 ? void 0 : registerName.toUpperCase()) !== null && _m !== void 0 ? _m : "";
    var deviceRegister = (_r = (_q = (_p = (_o = dataModel.getPeripheralDescription()) === null || _o === void 0 ? void 0 : _o.registers) === null || _p === void 0 ? void 0 : _p[registerAlias]) === null || _q === void 0 ? void 0 : _q.name) !== null && _r !== void 0 ? _r : "";
    var register = registerAlias == deviceRegister ? registerAlias : deviceRegister;
    var url = helpUrl
        .replace("${deviceName}", deviceName !== null && deviceName !== void 0 ? deviceName : "")
        .replace("${registerName}", register !== null && register !== void 0 ? register : "")
        .replace("${moduleName}", moduleName !== null && moduleName !== void 0 ? moduleName : "")
        .replace("${dosId}", dosid !== null && dosid !== void 0 ? dosid : "");
    return url;
};
exports.getAutoSdlHelp = getAutoSdlHelp;
//# sourceMappingURL=ContextualHelp.js.map

/***/ }),

/***/ "./node_modules/@microchip/scf-automodule-impl/lib/autoModule/FrequencyComponentHelper.js":
/*!************************************************************************************************!*\
  !*** ./node_modules/@microchip/scf-automodule-impl/lib/autoModule/FrequencyComponentHelper.js ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getFreqCompSchema = exports.isFrequencyComponent = exports.isFreqUnitInState = exports.isFreqValueInState = exports.isFreqComponentInState = exports.getFreqCompFormData = void 0;
var getFreqCompFormData = function (model, component, tab) {
    var _a;
    var componentValue = {
        value: component.defaultValue.value,
        unit: component.defaultValue.unit
    };
    if (component.frequencyMeta) {
        // Min value update
        if (component.frequencyMeta.min) {
            componentValue = __assign(__assign({}, componentValue), { min: {
                    value: component.frequencyMeta.min.value,
                    unit: component.frequencyMeta.min.unit
                } });
        }
        // Max value update
        if (component.frequencyMeta.max) {
            componentValue = __assign(__assign({}, componentValue), { max: {
                    value: component.frequencyMeta.max.value,
                    unit: component.frequencyMeta.max.unit
                } });
        }
        // Options update
        if (component.frequencyMeta.unitOptions) {
            componentValue = __assign(__assign({}, componentValue), { options: component.frequencyMeta.unitOptions });
        }
    }
    // Form data updation based on dynamic data
    var updatedFreqComp = (model.getDerivedFunctions() && model.getDerivedFunctions()[component.name] != null) ? (_a = model.getDerivedFunctions()) === null || _a === void 0 ? void 0 : _a[component.name]() : undefined;
    if (updatedFreqComp) {
        // Default value update
        if (updatedFreqComp.defaultValue) {
            componentValue = __assign(__assign({}, componentValue), { value: updatedFreqComp.defaultValue.value, unit: updatedFreqComp.defaultValue.unit });
        }
        // Min, Max and Options update
        if (updatedFreqComp.frequencyMeta) {
            if (updatedFreqComp.frequencyMeta.min) {
                componentValue = __assign(__assign({}, componentValue), { min: {
                        value: updatedFreqComp.frequencyMeta.min.value,
                        unit: updatedFreqComp.frequencyMeta.min.unit,
                    } });
            }
            if (updatedFreqComp.frequencyMeta.max) {
                componentValue = __assign(__assign({}, componentValue), { max: {
                        value: updatedFreqComp.frequencyMeta.max.value,
                        unit: updatedFreqComp.frequencyMeta.max.unit,
                    } });
            }
            if (updatedFreqComp.frequencyMeta.unitOptions) {
                componentValue = __assign(__assign({}, componentValue), { options: updatedFreqComp.frequencyMeta.unitOptions });
            }
        }
    }
    if (!isFreqComponentInState(model, component, tab)) {
        return componentValue;
    }
    else {
        var modelState = model.getState();
        var tabState = modelState ? modelState[tab] : undefined;
        if (isFreqValueInState(model, component, tab)) {
            var valueChanged = tabState[component.group][component.name].value;
            componentValue = __assign(__assign({}, componentValue), { value: valueChanged });
        }
        if (isFreqUnitInState(model, component, tab)) {
            var unitChanged = tabState[component.group][component.name].unit;
            componentValue = __assign(__assign({}, componentValue), { unit: unitChanged });
        }
        return componentValue;
    }
};
exports.getFreqCompFormData = getFreqCompFormData;
function isFreqComponentInState(model, component, tab) {
    var modelState = model.getState();
    var tabState = modelState ? modelState[tab] : undefined;
    return (tabState && tabState[component.group] && tabState[component.group][component.name]);
}
exports.isFreqComponentInState = isFreqComponentInState;
function isFreqValueInState(model, component, tab) {
    var modelState = model.getState();
    var tabState = modelState ? modelState[tab] : undefined;
    return (tabState && tabState[component.group] && tabState[component.group][component.name] && tabState[component.group][component.name].value);
}
exports.isFreqValueInState = isFreqValueInState;
function isFreqUnitInState(model, component, tab) {
    var modelState = model.getState();
    var tabState = modelState ? modelState[tab] : undefined;
    return (tabState && tabState[component.group] && tabState[component.group][component.name] && tabState[component.group][component.name].unit);
}
exports.isFreqUnitInState = isFreqUnitInState;
function isFrequencyComponent(component) {
    return (component.category === "software" &&
        component.type === "frequency");
}
exports.isFrequencyComponent = isFrequencyComponent;
function getFreqCompSchema(component, derivedFunctions) {
    var _a, _b;
    //Schema creation with static moduleConfig data
    var schema = {
        type: "object",
        $id: "frequency",
        title: (_b = (_a = derivedFunctions === null || derivedFunctions === void 0 ? void 0 : derivedFunctions.overrideTitle) === null || _a === void 0 ? void 0 : _a.call(derivedFunctions, component.name)) !== null && _b !== void 0 ? _b : component.description,
        properties: {
            value: {
                type: "number",
                default: component.defaultValue.value,
            },
            unit: {
                type: "string",
                default: component.defaultValue.unit,
            }
        },
    };
    if (component.frequencyMeta) {
        // Min value update
        if (component.frequencyMeta.min) {
            schema = __assign(__assign({}, schema), { properties: __assign(__assign({}, schema.properties), { min: {
                        type: "object",
                        properties: {
                            value: {
                                type: "number",
                                default: component.frequencyMeta.min.value,
                            },
                            unit: {
                                type: "string",
                                default: component.frequencyMeta.min.unit,
                            }
                        }
                    } }) });
        }
        // Max value update
        if (component.frequencyMeta.max) {
            schema = __assign(__assign({}, schema), { properties: __assign(__assign({}, schema.properties), { max: {
                        type: "object",
                        properties: {
                            value: {
                                type: "number",
                                default: component.frequencyMeta.max.value,
                            },
                            unit: {
                                type: "string",
                                default: component.frequencyMeta.max.unit,
                            }
                        }
                    } }) });
        }
        // Unit options update
        if (component.frequencyMeta.unitOptions) {
            schema = __assign(__assign({}, schema), { properties: __assign(__assign({}, schema.properties), { options: {
                        type: "array",
                        items: {
                            type: "string",
                            enum: component.frequencyMeta.unitOptions,
                        }
                    } }) });
        }
    }
    //Schema updation based on dynamic data
    var updatedFreqComp = (derivedFunctions && derivedFunctions[component.name] != null) ? derivedFunctions === null || derivedFunctions === void 0 ? void 0 : derivedFunctions[component.name]() : undefined;
    if (updatedFreqComp) {
        // description update
        if (updatedFreqComp.description) {
            schema = __assign(__assign({}, schema), { title: updatedFreqComp.description });
        }
        // defaultValue update
        if (updatedFreqComp.defaultValue) {
            schema = __assign(__assign({}, schema), { properties: __assign(__assign({}, schema.properties), { value: {
                        type: "number",
                        default: updatedFreqComp.defaultValue.value,
                    }, unit: {
                        type: "string",
                        default: updatedFreqComp.defaultValue.unit,
                    } }) });
        }
        // frequencyMeta update
        if (updatedFreqComp.frequencyMeta) {
            // Min value and unit update
            if (updatedFreqComp.frequencyMeta.min) {
                schema = __assign(__assign({}, schema), { properties: __assign(__assign({}, schema.properties), { min: {
                            type: "object",
                            properties: {
                                value: {
                                    type: "number",
                                    default: updatedFreqComp.frequencyMeta.min.value,
                                },
                                unit: {
                                    type: "string",
                                    default: updatedFreqComp.frequencyMeta.min.unit,
                                }
                            }
                        } }) });
            }
            // Max value and unit update
            if (updatedFreqComp.frequencyMeta.max) {
                schema = __assign(__assign({}, schema), { properties: __assign(__assign({}, schema.properties), { max: {
                            type: "object",
                            properties: {
                                value: {
                                    type: "number",
                                    default: updatedFreqComp.frequencyMeta.max.value,
                                },
                                unit: {
                                    type: "string",
                                    default: updatedFreqComp.frequencyMeta.max.unit,
                                }
                            }
                        } }) });
            }
            // Unit options update
            if (updatedFreqComp.frequencyMeta.unitOptions) {
                schema = __assign(__assign({}, schema), { properties: __assign(__assign({}, schema.properties), { options: {
                            type: "array",
                            items: {
                                type: "string",
                                enum: updatedFreqComp.frequencyMeta.unitOptions,
                            }
                        } }) });
            }
        }
    }
    return schema;
}
exports.getFreqCompSchema = getFreqCompSchema;
//# sourceMappingURL=FrequencyComponentHelper.js.map

/***/ }),

/***/ "./node_modules/@microchip/scf-automodule-impl/lib/autoModule/RegisterFilterMode.js":
/*!******************************************************************************************!*\
  !*** ./node_modules/@microchip/scf-automodule-impl/lib/autoModule/RegisterFilterMode.js ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.hasModes = exports.processRegisterModes = void 0;
var Utils_1 = __webpack_require__(/*! ../Utils */ "./node_modules/@microchip/scf-automodule-impl/lib/Utils.js");
var processRegisterModes = function (peripheral, hardwarePeripheral, model) {
    var _a, _b;
    if (!(0, exports.hasModes)(peripheral)) {
        return hardwarePeripheral;
    }
    var modifiedHardwarePeripheral = __assign(__assign({}, hardwarePeripheral), { registers: __assign({}, hardwarePeripheral.registers) });
    (_b = (0, Utils_1.getKeys)((_a = peripheral === null || peripheral === void 0 ? void 0 : peripheral.registers) !== null && _a !== void 0 ? _a : {})) === null || _b === void 0 ? void 0 : _b.forEach(function (registerName) {
        var _a, _b, _c, _d, _e, _f, _g;
        var settings = (_a = peripheral === null || peripheral === void 0 ? void 0 : peripheral.registers) === null || _a === void 0 ? void 0 : _a[registerName];
        var delFlag = false;
        settings === null || settings === void 0 ? void 0 : settings.forEach(function (setting) {
            var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m;
            /* const mode = find(setting.tabs, (mode => {
                return mode === "registerFilter"
            })) */ // TODO : Multiple modes support
            if (((_a = setting === null || setting === void 0 ? void 0 : setting.mode) === null || _a === void 0 ? void 0 : _a.operation) === "registerFilter") {
                var targetStr = (_c = model === null || model === void 0 ? void 0 : model.getComponent((_b = setting === null || setting === void 0 ? void 0 : setting.mode) === null || _b === void 0 ? void 0 : _b.masterComponent)) === null || _c === void 0 ? void 0 : _c.value;
                var matchRegEx = new RegExp((_e = (_d = setting === null || setting === void 0 ? void 0 : setting.mode) === null || _d === void 0 ? void 0 : _d.matchRegEx) !== null && _e !== void 0 ? _e : "");
                if (!matchRegEx.test(targetStr)) {
                    var settingObj = (_h = (_g = (_f = modifiedHardwarePeripheral === null || modifiedHardwarePeripheral === void 0 ? void 0 : modifiedHardwarePeripheral.registers) === null || _f === void 0 ? void 0 : _f[registerName]) === null || _g === void 0 ? void 0 : _g.settings) === null || _h === void 0 ? void 0 : _h[setting.setting];
                    if (settingObj !== undefined) {
                        (_l = (_k = (_j = modifiedHardwarePeripheral === null || modifiedHardwarePeripheral === void 0 ? void 0 : modifiedHardwarePeripheral.registers) === null || _j === void 0 ? void 0 : _j[registerName]) === null || _k === void 0 ? void 0 : _k.settings) === null || _l === void 0 ? true : delete _l[setting.setting];
                    }
                    else {
                        (_m = modifiedHardwarePeripheral === null || modifiedHardwarePeripheral === void 0 ? void 0 : modifiedHardwarePeripheral.registers) === null || _m === void 0 ? true : delete _m[registerName];
                    }
                    delFlag = true;
                }
            }
        });
        if (delFlag &&
            (0, Utils_1.getKeys)((_d = (_c = (_b = modifiedHardwarePeripheral === null || modifiedHardwarePeripheral === void 0 ? void 0 : modifiedHardwarePeripheral.registers) === null || _b === void 0 ? void 0 : _b[registerName]) === null || _c === void 0 ? void 0 : _c.settings) !== null && _d !== void 0 ? _d : [])
                .length <= 0) {
            (_f = (_e = modifiedHardwarePeripheral === null || modifiedHardwarePeripheral === void 0 ? void 0 : modifiedHardwarePeripheral.registers) === null || _e === void 0 ? void 0 : _e[registerName]) === null || _f === void 0 ? true : delete _f.settings;
            (_g = modifiedHardwarePeripheral === null || modifiedHardwarePeripheral === void 0 ? void 0 : modifiedHardwarePeripheral.registers) === null || _g === void 0 ? true : delete _g[registerName];
        }
    });
    return modifiedHardwarePeripheral;
};
exports.processRegisterModes = processRegisterModes;
var hasModes = function (peripheral) {
    var _a, _b;
    var flag = false;
    (_b = (0, Utils_1.getKeys)((_a = peripheral === null || peripheral === void 0 ? void 0 : peripheral.registers) !== null && _a !== void 0 ? _a : {})) === null || _b === void 0 ? void 0 : _b.forEach(function (registerName) {
        var _a;
        var settings = (_a = peripheral === null || peripheral === void 0 ? void 0 : peripheral.registers) === null || _a === void 0 ? void 0 : _a[registerName];
        for (var _i = 0, _b = settings !== null && settings !== void 0 ? settings : []; _i < _b.length; _i++) {
            var setting = _b[_i];
            if ((setting === null || setting === void 0 ? void 0 : setting.mode) !== undefined) {
                flag = true;
            }
        }
    });
    return flag;
};
exports.hasModes = hasModes;
//# sourceMappingURL=RegisterFilterMode.js.map

/***/ }),

/***/ "./node_modules/@microchip/scf-automodule-impl/lib/autoModule/TimeComponentHelper.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/@microchip/scf-automodule-impl/lib/autoModule/TimeComponentHelper.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getTimeComponentSchema = exports.isTimeComponent = exports.isTimeUnitInState = exports.isTimeValueInState = exports.isTimeComponentInState = exports.getTimeComponentFormData = void 0;
var getTimeComponentFormData = function (model, component, tab) {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
    var componentValue = {
        value: component.defaultValue.value,
        unit: component.defaultValue.unit
    };
    var updatedTimeComponent = (model.getDerivedFunctions() && model.getDerivedFunctions()[component.name] != null) ? (_a = model.getDerivedFunctions()) === null || _a === void 0 ? void 0 : _a[component.name]() : undefined;
    if (updatedTimeComponent) {
        if (updatedTimeComponent.defaultValue) {
            componentValue = {
                value: updatedTimeComponent.defaultValue.value,
                unit: updatedTimeComponent.defaultValue.unit,
            };
        }
        else {
            componentValue = {
                value: component.defaultValue.value,
                unit: component.defaultValue.unit,
            };
        }
        if (updatedTimeComponent.timeMeta) {
            if (updatedTimeComponent.timeMeta.min) {
                componentValue = __assign(__assign({}, componentValue), { min: {
                        value: updatedTimeComponent.timeMeta.min.value,
                        unit: updatedTimeComponent.timeMeta.min.unit,
                    } });
            }
            else {
                componentValue = __assign(__assign({}, componentValue), { min: {
                        value: (_c = (_b = component.timeMeta) === null || _b === void 0 ? void 0 : _b.min) === null || _c === void 0 ? void 0 : _c.value,
                        unit: (_e = (_d = component.timeMeta) === null || _d === void 0 ? void 0 : _d.min) === null || _e === void 0 ? void 0 : _e.unit,
                    } });
            }
            if (updatedTimeComponent.timeMeta.max) {
                componentValue = __assign(__assign({}, componentValue), { max: {
                        value: updatedTimeComponent.timeMeta.max.value,
                        unit: updatedTimeComponent.timeMeta.max.unit,
                    } });
            }
            else {
                componentValue = __assign(__assign({}, componentValue), { max: {
                        value: (_g = (_f = component.timeMeta) === null || _f === void 0 ? void 0 : _f.max) === null || _g === void 0 ? void 0 : _g.value,
                        unit: (_j = (_h = component.timeMeta) === null || _h === void 0 ? void 0 : _h.max) === null || _j === void 0 ? void 0 : _j.unit,
                    } });
            }
            if (updatedTimeComponent.timeMeta.unitOptions) {
                componentValue = __assign(__assign({}, componentValue), { options: updatedTimeComponent.timeMeta.unitOptions });
            }
            else {
                componentValue = __assign(__assign({}, componentValue), { options: (_k = component.timeMeta) === null || _k === void 0 ? void 0 : _k.unitOptions });
            }
        }
    }
    else if (component.timeMeta) {
        componentValue = {
            value: component.defaultValue.value,
            unit: component.defaultValue.unit,
        };
        if (component.timeMeta.min) {
            componentValue = __assign(__assign({}, componentValue), { min: {
                    value: component.timeMeta.min.value,
                    unit: component.timeMeta.min.unit,
                } });
        }
        if (component.timeMeta.max) {
            componentValue = __assign(__assign({}, componentValue), { max: {
                    value: component.timeMeta.max.value,
                    unit: component.timeMeta.max.unit,
                } });
        }
        if (component.timeMeta.unitOptions) {
            componentValue = __assign(__assign({}, componentValue), { options: component.timeMeta.unitOptions });
        }
    }
    else {
        componentValue = {
            value: component.defaultValue.value,
            unit: component.defaultValue.unit,
        };
    }
    if (!isTimeComponentInState(model, component, tab)) {
        return componentValue;
    }
    else {
        var modelState = model.getState();
        var tabState = modelState ? modelState[tab] : undefined;
        if (isTimeValueInState(model, component, tab)) {
            var valueChanged = tabState[component.group][component.name].value;
            componentValue = __assign(__assign({}, componentValue), { value: valueChanged });
        }
        if (isTimeUnitInState(model, component, tab)) {
            var unitChanged = tabState[component.group][component.name].unit;
            componentValue = __assign(__assign({}, componentValue), { unit: unitChanged });
        }
        return componentValue;
    }
};
exports.getTimeComponentFormData = getTimeComponentFormData;
function isTimeComponentInState(model, component, tab) {
    var modelState = model.getState();
    var tabState = modelState ? modelState[tab] : undefined;
    return (tabState && tabState[component.group] && tabState[component.group][component.name]);
}
exports.isTimeComponentInState = isTimeComponentInState;
function isTimeValueInState(model, component, tab) {
    var modelState = model.getState();
    var tabState = modelState ? modelState[tab] : undefined;
    return (tabState && tabState[component.group] && tabState[component.group][component.name] && tabState[component.group][component.name].value);
}
exports.isTimeValueInState = isTimeValueInState;
function isTimeUnitInState(model, component, tab) {
    var modelState = model.getState();
    var tabState = modelState ? modelState[tab] : undefined;
    return (tabState && tabState[component.group] && tabState[component.group][component.name] && tabState[component.group][component.name].unit);
}
exports.isTimeUnitInState = isTimeUnitInState;
function isTimeComponent(component) {
    return (component.category === "software" &&
        component.type === "time");
}
exports.isTimeComponent = isTimeComponent;
function getTimeComponentSchema(component, derivedFunctions) {
    var _a, _b;
    //Schema creation with static moduleConfig data
    var schema = {
        type: "object",
        $id: "timeComponent",
        title: (_b = (_a = derivedFunctions === null || derivedFunctions === void 0 ? void 0 : derivedFunctions.overrideTitle) === null || _a === void 0 ? void 0 : _a.call(derivedFunctions, component.name)) !== null && _b !== void 0 ? _b : component.description,
        properties: {
            value: {
                type: "number",
                default: component.defaultValue.value,
            },
            unit: {
                type: "string",
                default: component.defaultValue.unit,
            }
        },
    };
    if (component.timeMeta) {
        // Min value update
        if (component.timeMeta.min) {
            schema = __assign(__assign({}, schema), { properties: __assign(__assign({}, schema.properties), { min: {
                        type: "object",
                        properties: {
                            value: {
                                type: "number",
                                default: component.timeMeta.min.value,
                            },
                            unit: {
                                type: "string",
                                default: component.timeMeta.min.unit,
                            }
                        }
                    } }) });
        }
        // Max value update
        if (component.timeMeta.max) {
            schema = __assign(__assign({}, schema), { properties: __assign(__assign({}, schema.properties), { max: {
                        type: "object",
                        properties: {
                            value: {
                                type: "number",
                                default: component.timeMeta.max.value,
                            },
                            unit: {
                                type: "string",
                                default: component.timeMeta.max.unit,
                            }
                        }
                    } }) });
        }
        // Unit options update
        if (component.timeMeta.unitOptions) {
            schema = __assign(__assign({}, schema), { properties: __assign(__assign({}, schema.properties), { options: {
                        type: "array",
                        items: {
                            type: "string",
                            enum: component.timeMeta.unitOptions,
                        }
                    } }) });
        }
    }
    //Schema updation based on dynamic data
    var updatedTimeComponent = (derivedFunctions && derivedFunctions[component.name] != null) ? derivedFunctions === null || derivedFunctions === void 0 ? void 0 : derivedFunctions[component.name]() : undefined;
    if (updatedTimeComponent) {
        // description update
        if (updatedTimeComponent.description) {
            schema = __assign(__assign({}, schema), { title: updatedTimeComponent.description });
        }
        // defaultValue update
        if (updatedTimeComponent.defaultValue) {
            schema = __assign(__assign({}, schema), { properties: __assign(__assign({}, schema.properties), { value: {
                        type: "number",
                        default: updatedTimeComponent.defaultValue.value,
                    }, unit: {
                        type: "string",
                        default: updatedTimeComponent.defaultValue.unit,
                    } }) });
        }
        // timeMeta update
        if (updatedTimeComponent.timeMeta) {
            // Min value and unit update
            if (updatedTimeComponent.timeMeta.min) {
                schema = __assign(__assign({}, schema), { properties: __assign(__assign({}, schema.properties), { min: {
                            type: "object",
                            properties: {
                                value: {
                                    type: "number",
                                    default: updatedTimeComponent.timeMeta.min.value,
                                },
                                unit: {
                                    type: "string",
                                    default: updatedTimeComponent.timeMeta.min.unit,
                                }
                            }
                        } }) });
            }
            // Max value and unit update
            if (updatedTimeComponent.timeMeta.max) {
                schema = __assign(__assign({}, schema), { properties: __assign(__assign({}, schema.properties), { max: {
                            type: "object",
                            properties: {
                                value: {
                                    type: "number",
                                    default: updatedTimeComponent.timeMeta.max.value,
                                },
                                unit: {
                                    type: "string",
                                    default: updatedTimeComponent.timeMeta.max.unit,
                                }
                            }
                        } }) });
            }
            // Unit options update
            if (updatedTimeComponent.timeMeta.unitOptions) {
                schema = __assign(__assign({}, schema), { properties: __assign(__assign({}, schema.properties), { options: {
                            type: "array",
                            items: {
                                type: "string",
                                enum: updatedTimeComponent.timeMeta.unitOptions,
                            }
                        } }) });
            }
        }
    }
    return schema;
}
exports.getTimeComponentSchema = getTimeComponentSchema;
//# sourceMappingURL=TimeComponentHelper.js.map

/***/ }),

/***/ "./node_modules/@microchip/scf-automodule-impl/lib/autoModule/getConfigData.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/@microchip/scf-automodule-impl/lib/autoModule/getConfigData.js ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getConfigData = void 0;
/* eslint-disable @typescript-eslint/no-var-requires */
var Utils_1 = __webpack_require__(/*! ../Utils */ "./node_modules/@microchip/scf-automodule-impl/lib/Utils.js");
var getConfigData = function (model) {
    var _a, _b;
    var config = (_b = model === null || model === void 0 ? void 0 : (_a = model.getDerivedData()).getModuleConfig) === null || _b === void 0 ? void 0 : _b.call(_a);
    config = ConfigBuilder.for(config)
        .withDynamicConfigData(model)
        .withDynamicComponents(model)
        .build();
    return config;
};
exports.getConfigData = getConfigData;
var ConfigBuilder = /** @class */ (function () {
    function ConfigBuilder(config) {
        var _this = this;
        this.build = function () {
            return _this.config;
        };
        this.withDynamicConfigData = function (model) {
            var _a;
            return new ConfigBuilder((_a = model === null || model === void 0 ? void 0 : model.getDerivedFunction("getDynamicConfigData", _this.config)) !== null && _a !== void 0 ? _a : _this.config);
        };
        this.withDynamicComponents = function (model) {
            var _a, _b;
            var dynamicComponents = (_b = model === null || model === void 0 ? void 0 : (_a = model.getDerivedFunctions()).getDynamicComponents) === null || _b === void 0 ? void 0 : _b.call(_a);
            if (dynamicComponents) {
                var dynamicComponentMap = (0, Utils_1.toDictionary)(dynamicComponents, function (component) {
                    var _a;
                    _this.config.UIGroups[component.group] =
                        (_a = _this.config.UIGroups[component.group]) !== null && _a !== void 0 ? _a : component.group;
                    return component.name;
                }, function (component) { return component; });
                _this.config.softwareData = __assign(__assign({}, _this.config.softwareData), dynamicComponentMap);
            }
            return new ConfigBuilder(_this.config);
        };
        this.config = config;
    }
    ConfigBuilder.for = function (config) {
        if (!config)
            throw console.error("Cannot find ModuleConfig");
        return new ConfigBuilder(config);
    };
    return ConfigBuilder;
}());
//# sourceMappingURL=getConfigData.js.map

/***/ }),

/***/ "./node_modules/@microchip/scf-automodule-impl/lib/autoModule/views/autoModuleView.js":
/*!********************************************************************************************!*\
  !*** ./node_modules/@microchip/scf-automodule-impl/lib/autoModule/views/autoModuleView.js ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createAutoViewPayloads = void 0;
var scf_register_view_helper_1 = __webpack_require__(/*! @microchip/scf-register-view-helper */ "./node_modules/@microchip/scf-register-view-helper/lib/CreateRegisterView.js");
var Utils_1 = __webpack_require__(/*! ../../Utils */ "./node_modules/@microchip/scf-automodule-impl/lib/Utils.js");
var AutoModuleHelper = __importStar(__webpack_require__(/*! ../AutoModuleHelpers */ "./node_modules/@microchip/scf-automodule-impl/lib/autoModule/AutoModuleHelpers.js"));
var getConfigData_1 = __webpack_require__(/*! ../getConfigData */ "./node_modules/@microchip/scf-automodule-impl/lib/autoModule/getConfigData.js");
var registerFilter = __importStar(__webpack_require__(/*! ../RegisterFilterMode */ "./node_modules/@microchip/scf-automodule-impl/lib/autoModule/RegisterFilterMode.js"));
var autoModuleViewHelpers_1 = __webpack_require__(/*! ./autoModuleViewHelpers */ "./node_modules/@microchip/scf-automodule-impl/lib/autoModule/views/autoModuleViewHelpers.js");
var formData_1 = __webpack_require__(/*! ./formData */ "./node_modules/@microchip/scf-automodule-impl/lib/autoModule/views/formData.js");
var scfUiSchema_1 = __webpack_require__(/*! ./scfUiSchema */ "./node_modules/@microchip/scf-automodule-impl/lib/autoModule/views/scfUiSchema.js");
var schema_1 = __webpack_require__(/*! ./schema */ "./node_modules/@microchip/scf-automodule-impl/lib/autoModule/views/schema.js");
var uiSchema_1 = __webpack_require__(/*! ./uiSchema */ "./node_modules/@microchip/scf-automodule-impl/lib/autoModule/views/uiSchema.js");
var createAutoViewPayloads = function (model) {
    var config = (0, getConfigData_1.getConfigData)(model);
    var payloads = {
        main: {},
    };
    if (config === null || config === void 0 ? void 0 : config.tabs) {
        Object.keys(config.tabs).forEach(function (tab) {
            payloads[tab] = getPayloadForTab(tab);
        });
    }
    return payloads;
    function getPayloadForTab(tab) {
        if (tab === "register") {
            return createSimpleFormPayloadRegister();
        }
        var viewModel = {
            components: model.getAutoModuleAppModel().getAllComponents(),
            getComponent: model.getComponent,
            imports: model.getImports(),
            derivedFunctions: model.getDerivedFunctions(),
            getAssignedImport: model.getAssignedImport,
            getTableHelpers: model.getTableHelpers,
        };
        var schemaViewModel = {
            viewModel: viewModel,
            getDerivedFunction: {
                overrideTitle: model.getDerivedFunction("overrideTitle"),
                isVisible: function (componentName) { var _a, _b; return (_b = (_a = model.getDerivedFunctions()).isVisible) === null || _b === void 0 ? void 0 : _b.call(_a, componentName); },
                getFunction: model.getDerivedFunction,
            },
            overrideTableOptions: model.getDerivedFunctions()["overrideTableOptions"],
            overrideDefaultValues: model.getDerivedFunctions()["overrideTableDefaultValues"],
            model: model,
        };
        var uiSchemaViewModel = {
            viewModel: viewModel,
            getDerivedFunction: {
                isEnabled: function (componentName) { var _a, _b; return (_b = (_a = model.getDerivedFunctions()).isEnabled) === null || _b === void 0 ? void 0 : _b.call(_a, componentName); },
                getUiBehavior: function (componentName) { var _a, _b; return (_b = (_a = model.getDerivedFunctions()).getUiBehavior) === null || _b === void 0 ? void 0 : _b.call(_a, componentName); },
                isVisible: function (componentName) { var _a, _b; return (_b = (_a = model.getDerivedFunctions()).isVisible) === null || _b === void 0 ? void 0 : _b.call(_a, componentName); },
            },
            getProcessedArgValue: model.getExportInterfaces().getProcessedArgValue,
            isControlledByInterface: model.isControlledByInterface,
        };
        return {
            schema: (0, schema_1.createSchema)(tab, config, schemaViewModel),
            uiSchema: (0, uiSchema_1.createUiSchema)(tab, config, uiSchemaViewModel),
            formData: (0, formData_1.createFormData)(tab, config, model),
            scfUiSchema: (0, scfUiSchema_1.createScfUiSchema)(tab, config, model),
            name: config === null || config === void 0 ? void 0 : config.tabs[tab],
            table: (0, autoModuleViewHelpers_1.shouldPopulateView)(model.getDerivedFunctions(), model.getImports(), model.getAssignedImport, config)
                ? model === null || model === void 0 ? void 0 : model.getDerivedFunction("getTableData")
                : undefined,
            expandGroupsByDefault: (config === null || config === void 0 ? void 0 : config.UIGroupCollapse)
                ? config.UIGroupCollapse
                : true,
        };
    }
    function createSimpleFormPayloadRegister() {
        if (!(config === null || config === void 0 ? void 0 : config.peripherals)) {
            return {};
        }
        var registerViewPayloads = [];
        config.peripherals.forEach(function (peripheral) {
            var _a, _b, _c, _d, _e, _f;
            if (AutoModuleHelper.hasConfigBits(peripheral.interfaceId.name)) {
                return;
            }
            var hardwarePeripheral = (_a = model
                .getHardware(peripheral.interfaceId.name)) === null || _a === void 0 ? void 0 : _a.getPeripheral();
            if (!(hardwarePeripheral === null || hardwarePeripheral === void 0 ? void 0 : hardwarePeripheral.registers)) {
                return;
            }
            var registerValues = model.getRegisterValues(peripheral.interfaceId.name);
            var interrupts = model.getInterrupts();
            hardwarePeripheral = registerFilter.processRegisterModes(peripheral, hardwarePeripheral, model);
            //TODO: implement for all peripherals
            var registerView = scf_register_view_helper_1.CreateRegisterView.for(hardwarePeripheral);
            if (registerValues) {
                (_b = (0, Utils_1.getKeys)(registerValues !== null && registerValues !== void 0 ? registerValues : {})) === null || _b === void 0 ? void 0 : _b.forEach(function (registerName) {
                    var _a;
                    var foundRegister = (_a = hardwarePeripheral === null || hardwarePeripheral === void 0 ? void 0 : hardwarePeripheral.registers) === null || _a === void 0 ? void 0 : _a[registerName];
                    if (foundRegister) {
                        registerView.withRegisterValue(foundRegister, registerValues[registerName].value);
                    }
                });
            }
            for (var interruptsKey in interrupts !== null && interrupts !== void 0 ? interrupts : {}) {
                var interrupt = interrupts === null || interrupts === void 0 ? void 0 : interrupts[interruptsKey];
                if (interrupt) {
                    var interruptComponent = model.getComponent(interruptsKey.toLowerCase());
                    var interruptCompVal = typeof (interruptComponent === null || interruptComponent === void 0 ? void 0 : interruptComponent.value) === "boolean"
                        ? (interruptComponent === null || interruptComponent === void 0 ? void 0 : interruptComponent.value)
                            ? "enabled"
                            : "disabled"
                        : interruptComponent === null || interruptComponent === void 0 ? void 0 : interruptComponent.value;
                    registerView
                        .withInterruptValue(interrupt, (_c = interruptCompVal !== null && interruptCompVal !== void 0 ? interruptCompVal : interrupt.defaultValue) !== null && _c !== void 0 ? _c : "disabled")
                        .withInterruptOptions(interrupt, (_f = (_e = (_d = interruptComponent === null || interruptComponent === void 0 ? void 0 : interruptComponent.component) === null || _d === void 0 ? void 0 : _d["defaultValue"]) === null || _e === void 0 ? void 0 : _e.options) !== null && _f !== void 0 ? _f : [
                        "enabled",
                        "disabled",
                    ]);
                }
            }
            registerViewPayloads.push(registerView.create());
        });
        return registerViewPayloads[0];
    }
};
exports.createAutoViewPayloads = createAutoViewPayloads;
//# sourceMappingURL=autoModuleView.js.map

/***/ }),

/***/ "./node_modules/@microchip/scf-automodule-impl/lib/autoModule/views/autoModuleViewHelpers.js":
/*!***************************************************************************************************!*\
  !*** ./node_modules/@microchip/scf-automodule-impl/lib/autoModule/views/autoModuleViewHelpers.js ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.isComponentInvisible = exports.shouldPopulateView = exports.isModeActive = exports.isImage = exports.isUrl = void 0;
var AutoModuleHardware_1 = __webpack_require__(/*! ../AutoModuleHardware */ "./node_modules/@microchip/scf-automodule-impl/lib/autoModule/AutoModuleHardware.js");
function isUrl(component) {
    return (component.category === "software" &&
        component.type === "string" &&
        component.format === "url");
}
exports.isUrl = isUrl;
function isImage(component) {
    return (component.category === "software" &&
        component.type === "string" &&
        component.format === "image");
}
exports.isImage = isImage;
function isModeActive(mode, component, getComponent) {
    var _a, _b, _c, _d, _e, _f;
    if (((_a = component === null || component === void 0 ? void 0 : component.mode) === null || _a === void 0 ? void 0 : _a.operation) !== mode) {
        return undefined; //No mode selected
    }
    var masterComponent = getComponent(component.mode.masterComponent);
    if ((_b = component.mode) === null || _b === void 0 ? void 0 : _b.matchRegEx) {
        var value = (_f = (_e = (_d = (_c = masterComponent === null || masterComponent === void 0 ? void 0 : masterComponent.value) === null || _c === void 0 ? void 0 : _c.toString()) === null || _d === void 0 ? void 0 : _d.match(component.mode.matchRegEx)) === null || _e === void 0 ? void 0 : _e.length) !== null && _f !== void 0 ? _f : 0;
        return value > 0;
    }
    return undefined;
}
exports.isModeActive = isModeActive;
function shouldPopulateView(derivedFunctions, imports, getAssignedImport, config) {
    var _a;
    if (displayViewOnImportAssigned(getAssignedImport, config) === false) {
        return false;
    }
    return (((_a = derivedFunctions === null || derivedFunctions === void 0 ? void 0 : derivedFunctions.shouldPopulateViewAtStartup) === null || _a === void 0 ? void 0 : _a.call(derivedFunctions)) === true ||
        (0, AutoModuleHardware_1.isFullyAssigned)(imports, config));
}
exports.shouldPopulateView = shouldPopulateView;
function displayViewOnImportAssigned(getAssignedImport, config) {
    var shouldPopulateView = true;
    if (config === null || config === void 0 ? void 0 : config.displayViewOnImportAssigned) {
        config.displayViewOnImportAssigned.forEach(function (impKey) {
            if (getAssignedImport(impKey) == undefined) {
                shouldPopulateView = false;
            }
        });
    }
    return shouldPopulateView;
}
var isComponentInvisible = function (component, appModel) {
    var _a, _b;
    var isInvisibleViaProperty = component.isVisibleProperty &&
        appModel.getDerivedFunction(component.isVisibleProperty) == false;
    return (((_b = (_a = appModel.getDerivedFunctions()).isVisible) === null || _b === void 0 ? void 0 : _b.call(_a, component.name)) === false ||
        isInvisibleViaProperty ||
        isModeActive("isVisible", component, appModel.getComponent) === false);
};
exports.isComponentInvisible = isComponentInvisible;
//# sourceMappingURL=autoModuleViewHelpers.js.map

/***/ }),

/***/ "./node_modules/@microchip/scf-automodule-impl/lib/autoModule/views/formData.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/@microchip/scf-automodule-impl/lib/autoModule/views/formData.js ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createFormData = void 0;
var tables_1 = __webpack_require__(/*! ../../tables/tables */ "./node_modules/@microchip/scf-automodule-impl/lib/tables/tables.js");
var Utils_1 = __webpack_require__(/*! ../../Utils */ "./node_modules/@microchip/scf-automodule-impl/lib/Utils.js");
var schema_1 = __webpack_require__(/*! ./schema */ "./node_modules/@microchip/scf-automodule-impl/lib/autoModule/views/schema.js");
var TimeComponentHelper_1 = __webpack_require__(/*! ../TimeComponentHelper */ "./node_modules/@microchip/scf-automodule-impl/lib/autoModule/TimeComponentHelper.js");
var FrequencyComponentHelper_1 = __webpack_require__(/*! ../FrequencyComponentHelper */ "./node_modules/@microchip/scf-automodule-impl/lib/autoModule/FrequencyComponentHelper.js");
function createFormData(tab, config, model) {
    var _a;
    var formData = {};
    if (config) {
        var components = model.getAutoModuleAppModel().getAllComponents();
        (_a = (0, Utils_1.values)(components)) === null || _a === void 0 ? void 0 : _a.forEach(function (entry) {
            var _a;
            if (!config) {
                return;
            }
            var component = entry.component;
            var value = model.getComponentValue(component.name);
            var regex = new RegExp("[en,dis]abled?");
            if (component.type === "boolean") {
                if (value && typeof value === 'string') {
                    if (regex.test(value.toLowerCase()) && typeof config.booleanValues.true === "string") {
                        var configVal = config.booleanValues.true;
                        if (configVal.toLowerCase() === "enable") {
                            value = value.toLowerCase().startsWith(configVal.toLowerCase());
                        }
                        else {
                            value = configVal.toLowerCase().startsWith(value.toLowerCase());
                        }
                    }
                    else if (value === "true") {
                        value = true;
                    }
                    else if (value === "false") {
                        value = false;
                    }
                }
                else if (value && typeof value === 'boolean') {
                    value = value;
                }
            }
            if (component.type === "DescriptionOnly") {
                value = null;
            }
            if ((0, schema_1.isInvalidTab)(component.tabs, tab)) {
                return;
            }
            if (component.category === "table") {
                value = (0, tables_1.getTableFormData)(model, component, tab);
            }
            if (component.category === "file_load") {
                value = "";
            }
            if (component.type === "time") {
                value = (0, TimeComponentHelper_1.getTimeComponentFormData)(model, component, tab);
            }
            if (component.type === "frequency") {
                value = (0, FrequencyComponentHelper_1.getFreqCompFormData)(model, component, tab);
            }
            if (component.category === "file_save") {
                value = "";
            }
            formData[component.group] = __assign(__assign({}, formData[component.group]), (_a = {}, _a[component.name] = value, _a));
        });
    }
    return formData;
}
exports.createFormData = createFormData;
//# sourceMappingURL=formData.js.map

/***/ }),

/***/ "./node_modules/@microchip/scf-automodule-impl/lib/autoModule/views/scfUiSchema.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/@microchip/scf-automodule-impl/lib/autoModule/views/scfUiSchema.js ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createScfUiSchema = void 0;
var tables_1 = __webpack_require__(/*! ../../tables/tables */ "./node_modules/@microchip/scf-automodule-impl/lib/tables/tables.js");
var Utils_1 = __webpack_require__(/*! ../../Utils */ "./node_modules/@microchip/scf-automodule-impl/lib/Utils.js");
var AutoModuleHelpers_1 = __webpack_require__(/*! ../AutoModuleHelpers */ "./node_modules/@microchip/scf-automodule-impl/lib/autoModule/AutoModuleHelpers.js");
var ContextualHelp_1 = __webpack_require__(/*! ../ContextualHelp */ "./node_modules/@microchip/scf-automodule-impl/lib/autoModule/ContextualHelp.js");
function createScfUiSchema(tab, config, model) {
    var _a;
    var scfUiSchema = {};
    if (config) {
        var components_1 = getAllComponents(model);
        (_a = (0, Utils_1.getKeys)(components_1)) === null || _a === void 0 ? void 0 : _a.forEach(function (eachKey) {
            var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
            var component = components_1[eachKey].component;
            var name = component.name, group = component.group;
            var schema = {};
            if (component.tabs.indexOf(tab) == -1)
                return;
            if (!scfUiSchema[group]) {
                scfUiSchema[group] = {};
            }
            if (!scfUiSchema[group][name]) {
                scfUiSchema[group][name] = {};
            }
            var actions = getActions(component, model);
            var transformErrors = model.getDerivedFunction("getCustomUiErrors", name);
            if (model.getImports()) {
                var deviceMeta = model.getImportValue("device_meta");
                var hasSdlSupport = (_a = deviceMeta === null || deviceMeta === void 0 ? void 0 : deviceMeta.hasSdlSupport) !== null && _a !== void 0 ? _a : false;
                if (component.sdlHelp && hasSdlSupport) {
                    var helpUrl = component.sdlHelp.url;
                    schema["helpKeyword"] = getHelpKeyword(model, name, helpUrl);
                    schema["tooltip"] = getTooltip(component);
                }
            }
            if (component.category === "file_load") {
                schema["fileLoadProps"] = {};
                schema["fileLoadProps"]["fileId"] = eachKey;
                schema["fileLoadProps"]["saveState"] = (_c = (_b = component.fileMeta) === null || _b === void 0 ? void 0 : _b.saveState) !== null && _c !== void 0 ? _c : false;
                schema["fileLoadProps"]["filter"] = (_d = component.fileMeta) === null || _d === void 0 ? void 0 : _d.filter;
                schema["fileLoadProps"]["type"] = "file_load";
                schema["fileLoadProps"]["compText"] = (_e = component.fileMeta) === null || _e === void 0 ? void 0 : _e.compText;
            }
            if (component.category === "file_save") {
                schema["fileSaveProps"] = {};
                schema["fileSaveProps"]["fileId"] = eachKey;
                schema["fileSaveProps"]["fileContents"] = model.getComponentValue(component.name);
                schema["fileSaveProps"]["fileName"] = (_f = component.fileMeta) === null || _f === void 0 ? void 0 : _f.defaultName;
                schema["fileSaveProps"]["type"] = "file_save";
                schema["fileSaveProps"]["compText"] = (_g = component.fileMeta) === null || _g === void 0 ? void 0 : _g.compText;
            }
            if (component.category === "table") {
                var tableState = (_k = (_j = (_h = model === null || model === void 0 ? void 0 : model.getState()) === null || _h === void 0 ? void 0 : _h[tab]) === null || _j === void 0 ? void 0 : _j[group]) === null || _k === void 0 ? void 0 : _k[name];
                var uids = (0, tables_1.createTableUids)(component, tab, model, tableState);
                schema["table"] = getTableUiSchema(component, uids);
                actions = (0, tables_1.getTableActions)(component, tab, model, uids);
            }
            schema["precision"] = component["precision"];
            schema["shouldDispatchOnChange"] = component["shouldDispatchOnChange"];
            if (actions) {
                schema["actions"] = actions;
            }
            if (transformErrors) {
                schema["transformErrors"] = transformErrors;
            }
            scfUiSchema[group][name] = __assign({}, schema);
        });
    }
    return scfUiSchema;
}
exports.createScfUiSchema = createScfUiSchema;
function getAllComponents(model) {
    return model.getAutoModuleAppModel().getAllComponents();
}
function getHelpKeyword(model, componentName, helpUrl) {
    var _a;
    return ((_a = model.getDerivedFunction("getHelpUrl", componentName, helpUrl)) !== null && _a !== void 0 ? _a : (0, ContextualHelp_1.getAutoSdlHelp)(model, componentName, helpUrl));
}
function getTooltip(component) {
    var _a, _b;
    return (_b = (_a = component.sdlHelp) === null || _a === void 0 ? void 0 : _a.tooltip) !== null && _b !== void 0 ? _b : "Click for more information";
}
function getTableUiSchema(component, uids) {
    var cellValidationInfo = (0, tables_1.getCellValidationInfo)(component);
    return {
        canRemoveRows: component.canRemoveRows,
        canInsertRows: component.canInsertRows,
        canAddRows: component.canAddRows,
        canMoveRowDown: component.canMoveRowDown,
        canMoveRowUp: component.canMoveRowUp,
        canEnableRows: component.canEnableRows,
        uids: uids,
        cellValidationInfo: cellValidationInfo,
    };
}
function getDependencySelectorActions(component, model) {
    var depSelector = new AutoModuleHelpers_1.DependencySelector(model, component);
    var options = depSelector.generateDropdownOptions();
    var dependencySelectorActions = [];
    options.forEach(function (dropdownOption) {
        var option = dropdownOption.value;
        dependencySelectorActions.push({
            type: "[Import] SET",
            payload: {
                importId: component.importId,
                handle: option === null || option === void 0 ? void 0 : option.handle,
                interfaceId: option === null || option === void 0 ? void 0 : option.interfaceId,
                option: dropdownOption.label,
            },
        });
    });
    return JSON.stringify(dependencySelectorActions);
}
function getActions(component, model) {
    if (component.category === "import") {
        return getDependencySelectorActions(component, model);
    }
    var actions = model.getDerivedFunction("getActions", component.name, component.actions);
    return JSON.stringify(actions); //TODO: support map
}
//# sourceMappingURL=scfUiSchema.js.map

/***/ }),

/***/ "./node_modules/@microchip/scf-automodule-impl/lib/autoModule/views/schema.js":
/*!************************************************************************************!*\
  !*** ./node_modules/@microchip/scf-automodule-impl/lib/autoModule/views/schema.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.isInvalidTab = exports.createSchema = void 0;
var tables_1 = __webpack_require__(/*! ../../tables/tables */ "./node_modules/@microchip/scf-automodule-impl/lib/tables/tables.js");
var Utils_1 = __webpack_require__(/*! ../../Utils */ "./node_modules/@microchip/scf-automodule-impl/lib/Utils.js");
var AutoModuleHelpers_1 = __webpack_require__(/*! ../AutoModuleHelpers */ "./node_modules/@microchip/scf-automodule-impl/lib/autoModule/AutoModuleHelpers.js");
var TimeComponentHelper_1 = __webpack_require__(/*! ../TimeComponentHelper */ "./node_modules/@microchip/scf-automodule-impl/lib/autoModule/TimeComponentHelper.js");
var FrequencyComponentHelper_1 = __webpack_require__(/*! ../FrequencyComponentHelper */ "./node_modules/@microchip/scf-automodule-impl/lib/autoModule/FrequencyComponentHelper.js");
var autoModuleViewHelpers_1 = __webpack_require__(/*! ./autoModuleViewHelpers */ "./node_modules/@microchip/scf-automodule-impl/lib/autoModule/views/autoModuleViewHelpers.js");
function createSchema(tab, config, viewModel) {
    var _a, _b, _c, _d, _e, _f, _g;
    var schema = {};
    if (config) {
        var populateView_1 = (0, autoModuleViewHelpers_1.shouldPopulateView)(viewModel.viewModel.derivedFunctions, viewModel.viewModel.imports, viewModel.viewModel.getAssignedImport, config);
        schema = {
            description: (_c = (_b = (_a = viewModel.viewModel).getModuleDescription) === null || _b === void 0 ? void 0 : _b.call(_a)) !== null && _c !== void 0 ? _c : (0, AutoModuleHelpers_1.getModuleDefaultDescription)(),
            title: config.moduleName,
            type: "object",
            properties: {},
        };
        var schemaBuilder_1 = {
            properties: {},
        };
        (_e = (0, Utils_1.values)((_d = viewModel.viewModel.components) !== null && _d !== void 0 ? _d : {})) === null || _e === void 0 ? void 0 : _e.forEach(function (entry) {
            var _a, _b, _c, _d, _e;
            var component = entry.component;
            if ((!populateView_1 && component.category != "import") ||
                isInvalidTab(component.tabs, tab)) {
                return;
            }
            if (!schemaBuilder_1[component.group]) {
                schemaBuilder_1[component.group] = {
                    title: (_c = (_b = (_a = viewModel.viewModel.derivedFunctions) === null || _a === void 0 ? void 0 : _a.overrideGroupTitle) === null || _b === void 0 ? void 0 : _b.call(_a, component.group)) !== null && _c !== void 0 ? _c : config === null || config === void 0 ? void 0 : config.UIGroups[component.group],
                    description: (_e = (_d = viewModel.viewModel.derivedFunctions) === null || _d === void 0 ? void 0 : _d.overrideGroupDescription) === null || _e === void 0 ? void 0 : _e.call(_d, component.group),
                    type: "object",
                    properties: {},
                };
            }
            schemaBuilder_1[component.group].properties = __assign(__assign({}, schemaBuilder_1[component.group].properties), getComponentSchema(component, tab, viewModel));
        });
        //Sort groups based on order of UIGroups and remove groups with no components
        (_g = (0, Utils_1.getKeys)((_f = config.UIGroups) !== null && _f !== void 0 ? _f : {})) === null || _g === void 0 ? void 0 : _g.forEach(function (group) {
            var _a, _b, _c, _d;
            if (((_d = (_c = (0, Utils_1.getKeys)((_b = (_a = schemaBuilder_1[group]) === null || _a === void 0 ? void 0 : _a.properties) !== null && _b !== void 0 ? _b : {})) === null || _c === void 0 ? void 0 : _c.length) !== null && _d !== void 0 ? _d : -1) > 0 &&
                schema.properties) {
                schema.properties[group] = schemaBuilder_1[group];
            }
        });
    }
    return schema;
}
exports.createSchema = createSchema;
function getComponentSchema(component, tab, viewModel) {
    var _a;
    var schema = {};
    if (isInvalidTab(component.tabs, tab) ||
        (viewModel.model && (0, autoModuleViewHelpers_1.isComponentInvisible)(component, viewModel.model))) {
        return schema;
    }
    schema = addComponentSchema(component, viewModel);
    if (schema == undefined) {
        return schema;
    }
    if (shouldAddValidator(component, viewModel.viewModel.derivedFunctions)) {
        schema = addComponentValidator(schema, component, viewModel.viewModel.derivedFunctions);
    }
    var componentName = component.name;
    schema = (_a = {}, _a[componentName] = __assign({}, schema), _a);
    return schema;
}
function isInvalidTab(tabs, tab) {
    return tabs.indexOf(tab) == -1;
}
exports.isInvalidTab = isInvalidTab;
function addComponentValidator(schema, component, derivedFunctions) {
    return __assign(__assign({}, schema), derivedFunctions === null || derivedFunctions === void 0 ? void 0 : derivedFunctions[component.name + "Validator"]());
}
function shouldAddValidator(component, derivedFunctions) {
    return (component.validation &&
        derivedFunctions &&
        (derivedFunctions === null || derivedFunctions === void 0 ? void 0 : derivedFunctions[component.name + "Validator"]) != null);
}
function addComponentSchema(component, viewModel) {
    if (component.category === "software") {
        return getSoftwareComponentSchema(component, viewModel.viewModel.derivedFunctions);
    }
    else if (component.category === "hardware") {
        return getHardwareComponentSchema(component, viewModel);
    }
    else if (component.category === "import") {
        return getDependencyComponentSchema(component, viewModel);
    }
    else if (component.category === "file_load") {
        return getFileLoadComponentSchema(component, viewModel);
    }
    else if (component.category === "file_save") {
        return getFileSaveComponentSchema(component, viewModel);
    }
    else if (component["category"] === "table") {
        return (0, tables_1.getTableComponentSchema)(component, viewModel);
    }
    return undefined;
}
function getSoftwareComponentSchema(component, derivedFunctions) {
    var _a, _b, _c, _d, _e, _f;
    var schema = {};
    if (component.type === "ComboBox") {
        schema = {
            type: "string",
            title: (_b = (_a = derivedFunctions === null || derivedFunctions === void 0 ? void 0 : derivedFunctions.overrideTitle) === null || _a === void 0 ? void 0 : _a.call(derivedFunctions, component.name)) !== null && _b !== void 0 ? _b : component.description,
            default: (0, AutoModuleHelpers_1.getDefaultValue)(derivedFunctions === null || derivedFunctions === void 0 ? void 0 : derivedFunctions.overrideDefaultValues, component),
            enum: (0, AutoModuleHelpers_1.getComboOptions)(derivedFunctions === null || derivedFunctions === void 0 ? void 0 : derivedFunctions.overrideOptions, component),
        };
    }
    else if (component.type === "hex") {
        schema = {
            type: "integer",
            title: (_d = (_c = derivedFunctions === null || derivedFunctions === void 0 ? void 0 : derivedFunctions.overrideTitle) === null || _c === void 0 ? void 0 : _c.call(derivedFunctions, component.name)) !== null && _d !== void 0 ? _d : component.description,
            format: "hex",
            default: (0, AutoModuleHelpers_1.getDefaultValue)(derivedFunctions === null || derivedFunctions === void 0 ? void 0 : derivedFunctions.overrideDefaultValues, component),
        };
    }
    else if (component.type === "DescriptionOnly") {
        schema = {
            type: "null",
            title: component.description,
        };
    }
    else if (component.type === "time") {
        schema = (0, TimeComponentHelper_1.getTimeComponentSchema)(component, derivedFunctions);
    }
    else if (component.type === "frequency") {
        schema = (0, FrequencyComponentHelper_1.getFreqCompSchema)(component, derivedFunctions);
    }
    else {
        schema = {
            type: component.type,
            title: (_f = (_e = derivedFunctions === null || derivedFunctions === void 0 ? void 0 : derivedFunctions.overrideTitle) === null || _e === void 0 ? void 0 : _e.call(derivedFunctions, component.name)) !== null && _f !== void 0 ? _f : component.description,
        };
        if ((0, autoModuleViewHelpers_1.isUrl)(component) && component.urlDescription) {
            schema = __assign(__assign({}, schema), { description: component.urlDescription });
        }
        if ((0, autoModuleViewHelpers_1.isImage)(component) && component.imageDescription) {
            schema = __assign(__assign({}, schema), { description: component.imageDescription });
        }
    }
    return schema;
}
function getDependencyComponentSchema(component, viewModel) {
    var _a, _b, _c, _d, _e;
    var schema = {};
    if (component.type === "ComboBox" && viewModel.model) {
        var dependencySelector = new AutoModuleHelpers_1.DependencySelector(viewModel.model, component);
        if (dependencySelector.getDropdownOptionNames().length <= 0) {
            return schema;
        }
        var dropdownOptions = dependencySelector.getDropdownOptionNames();
        var assignedImport = (_b = (_a = viewModel.createProcessedImports) === null || _a === void 0 ? void 0 : _a.call(viewModel, "views")) === null || _b === void 0 ? void 0 : _b[component.importId];
        var NONE_1 = "None";
        var assignedName = NONE_1;
        var selectedDependency = viewModel.model.getComponentValue(component.name);
        if (assignedImport === null || assignedImport === void 0 ? void 0 : assignedImport.handle) {
            assignedName = dependencySelector.createOptionLabel(assignedImport.handle, assignedImport.payload);
            dropdownOptions.push(assignedName);
        }
        else if (selectedDependency) {
            dropdownOptions.push(selectedDependency);
        }
        dropdownOptions = dropdownOptions.sort(function (a, b) {
            return a.localeCompare(b);
        });
        dropdownOptions = __spreadArray([NONE_1], dropdownOptions.filter(function (item) { return item !== NONE_1; }), true);
        schema = {
            type: "string",
            title: (_e = (_d = (_c = viewModel.getDerivedFunction).overrideTitle) === null || _d === void 0 ? void 0 : _d.call(_c, component.name)) !== null && _e !== void 0 ? _e : component.description,
            default: assignedName,
            enum: dropdownOptions,
        };
    }
    return schema;
}
function getFileLoadComponentSchema(component, viewModel) {
    var _a, _b, _c;
    var schema = {};
    if (viewModel.model) {
        schema = {
            type: "string",
            title: (_c = (_b = (_a = viewModel.getDerivedFunction).overrideTitle) === null || _b === void 0 ? void 0 : _b.call(_a, component.name)) !== null && _c !== void 0 ? _c : component.description,
        };
    }
    return schema;
}
function getFileSaveComponentSchema(component, viewModel) {
    var _a, _b, _c;
    var schema = {};
    if (viewModel.model) {
        schema = {
            type: "string",
            title: (_c = (_b = (_a = viewModel.getDerivedFunction).overrideTitle) === null || _b === void 0 ? void 0 : _b.call(_a, component.name)) !== null && _c !== void 0 ? _c : component.description,
        };
    }
    return schema;
}
function getHardwareComponentSchema(component, viewModel) {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
    var schema = {};
    var model = viewModel.model;
    if (model) {
        if (model.getComponentValue(component.name) !== undefined &&
            component.type !== "register") {
            if (component.type === "ComboBox") {
                var setting = (0, AutoModuleHelpers_1.getSettingFromComponent)(model, component);
                schema = {
                    type: "string",
                    title: (_c = (_b = (_a = viewModel.getDerivedFunction).overrideTitle) === null || _b === void 0 ? void 0 : _b.call(_a, component.name)) !== null && _c !== void 0 ? _c : component.description,
                    default: (0, AutoModuleHelpers_1.getSettingDefaultIfPresent)(component, setting, (_e = (_d = model
                        .getDerivedFunctions()).overrideDefaultValues) === null || _e === void 0 ? void 0 : _e.call(_d, component.name)),
                    enum: (0, AutoModuleHelpers_1.getSettingOptionsIfPresent)(component, setting, model.getComponentValue((_g = (_f = component.mode) === null || _f === void 0 ? void 0 : _f.masterComponent) !== null && _g !== void 0 ? _g : "")),
                };
            }
            else {
                schema = {
                    type: component.type,
                    title: (_k = (_j = (_h = viewModel.getDerivedFunction).overrideTitle) === null || _j === void 0 ? void 0 : _j.call(_h, component.name)) !== null && _k !== void 0 ? _k : component.description,
                };
            }
        }
    }
    return schema;
}
//# sourceMappingURL=schema.js.map

/***/ }),

/***/ "./node_modules/@microchip/scf-automodule-impl/lib/autoModule/views/uiSchema.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/@microchip/scf-automodule-impl/lib/autoModule/views/uiSchema.js ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createUiSchema = void 0;
var tables_1 = __webpack_require__(/*! ../../tables/tables */ "./node_modules/@microchip/scf-automodule-impl/lib/tables/tables.js");
var Utils_1 = __webpack_require__(/*! ../../Utils */ "./node_modules/@microchip/scf-automodule-impl/lib/Utils.js");
var autoModuleViewHelpers_1 = __webpack_require__(/*! ./autoModuleViewHelpers */ "./node_modules/@microchip/scf-automodule-impl/lib/autoModule/views/autoModuleViewHelpers.js");
function createUiSchema(tab, config, viewModel) {
    var _a;
    var _b, _c, _d;
    var uiSchema = {};
    if (config) {
        if (config.UIOrder) {
            (_c = (0, Utils_1.getKeys)((_b = config.UIOrder) !== null && _b !== void 0 ? _b : {})) === null || _c === void 0 ? void 0 : _c.forEach(function (group) {
                var _a;
                uiSchema[group] = {
                    "ui:order": (_a = config === null || config === void 0 ? void 0 : config.UIOrder) === null || _a === void 0 ? void 0 : _a[group],
                };
            });
        }
        var components = viewModel.viewModel.components;
        var isGroupHidden_1 = {};
        (_d = (0, Utils_1.values)(components !== null && components !== void 0 ? components : {})) === null || _d === void 0 ? void 0 : _d.forEach(function (entry) {
            var _a, _b;
            var _c, _d, _e, _f, _g, _h, _j;
            var component = entry.component;
            var tabIndex = (_d = (_c = component.tabs) === null || _c === void 0 ? void 0 : _c.indexOf(tab)) !== null && _d !== void 0 ? _d : -1;
            if (tabIndex === -1)
                return;
            var isComponentGroupHidden = isGroupHidden_1[component.group] === undefined ||
                isGroupHidden_1[component.group] === true;
            if (isComponentGroupHidden) {
                var isHidden = (_f = ((_e = component.uiBehavior) === null || _e === void 0 ? void 0 : _e["ui:widget"]) === "hidden") !== null && _f !== void 0 ? _f : false;
                if (((_h = (_g = viewModel.getDerivedFunction).isVisible) === null || _h === void 0 ? void 0 : _h.call(_g, component.name)) === false) {
                    isHidden = true;
                }
                isGroupHidden_1[component.group] = isHidden;
            }
            if (component.category === "table") {
                var table = component;
                var tableCols_1 = table.columns;
                var colNames = Object.keys(tableCols_1);
                var defaultAlignment_1 = "left";
                var displayHeadersHorizontally = (_j = table.displayHeadersHorizontally) !== null && _j !== void 0 ? _j : false;
                var displayHeadersDiagonally_1 = !displayHeadersHorizontally;
                var columns_1 = [];
                var defaultColumnWidth_1 = (0, tables_1.calculateColumnWidth)(tableCols_1);
                var headerMaxLength_1 = colNames
                    .map(function (name) { return tableCols_1[name].title.length; })
                    .reduce(function (a, b) { return Math.max(a, b); });
                colNames.forEach(function (name) {
                    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m;
                    var isColEditable = !tableCols_1[name].readonly;
                    var columnWidth = defaultColumnWidth_1[name];
                    var disableRowsForCol = (_c = (_b = (_a = viewModel.viewModel.derivedFunctions) === null || _a === void 0 ? void 0 : _a.disableTableCells) === null || _b === void 0 ? void 0 : _b.call(_a, name)) !== null && _c !== void 0 ? _c : [];
                    columns_1.push({
                        dataField: name,
                        editable: isColEditable ? undefined : false,
                        columnWidth: tableCols_1[name].columnWidth
                            ? tableCols_1[name].columnWidth + "%"
                            : columnWidth + "%",
                        width: tableCols_1[name].width
                            ? tableCols_1[name].width + "%"
                            : columnWidth + "%",
                        dataSort: tableCols_1[name].isSortable,
                        headerAlign: displayHeadersDiagonally_1
                            ? defaultAlignment_1
                            : (_e = (_d = tableCols_1[name].headerAlign) !== null && _d !== void 0 ? _d : tableCols_1[name].dataAlign) !== null && _e !== void 0 ? _e : defaultAlignment_1,
                        dataAlign: (_g = (_f = tableCols_1[name].dataAlign) !== null && _f !== void 0 ? _f : tableCols_1[name].headerAlign) !== null && _g !== void 0 ? _g : defaultAlignment_1,
                        disabledRows: (_h = tableCols_1[name].disabledRows) !== null && _h !== void 0 ? _h : disableRowsForCol,
                        tdStyle: (0, tables_1.getCellStyle)(tableCols_1[name].readonly),
                        headerText: (_j = tableCols_1[name]) === null || _j === void 0 ? void 0 : _j["columnTip"],
                        hidden: (_m = (_l = (_k = viewModel.viewModel.derivedFunctions) === null || _k === void 0 ? void 0 : _k.hideTableColumn) === null || _l === void 0 ? void 0 : _l.call(_k, name)) !== null && _m !== void 0 ? _m : false,
                    });
                });
                columns_1 = columns_1.map(function (col) {
                    return __assign(__assign({}, col), { thStyle: (0, tables_1.getHeaderStyle)(headerMaxLength_1, displayHeadersDiagonally_1) });
                });
                uiSchema[table.group] = __assign(__assign({}, uiSchema[table.group]), (_a = {}, _a[table.name] = (0, tables_1.getTableUiSchema)(table, columns_1), _a));
            }
            else {
                uiSchema[component.group] = __assign(__assign({}, uiSchema[component.group]), (_b = {}, _b[component.name] = __assign(__assign({}, getUiBehavior(component, viewModel)), getUiSchemaExportArg(component.name, viewModel)), _b));
            }
        });
        for (var group in isGroupHidden_1) {
            if (isGroupHidden_1[group]) {
                uiSchema[group] = __assign(__assign({}, uiSchema[group]), (_a = {}, _a["ui:widget"] = "hidden", _a));
            }
        }
    }
    return uiSchema;
}
exports.createUiSchema = createUiSchema;
function getUiSchemaExportArg(name, viewModel) {
    var uiSchema = {};
    if (viewModel.isControlledByInterface(name)) {
        var expArg = viewModel.getProcessedArgValue(name);
        if (expArg) {
            uiSchema = {
                "ui:readonly": true,
                "ui:help": "Controlled by " + expArg.interface,
            };
        }
    }
    return uiSchema;
}
function getUiBehavior(component, viewModel) {
    var _a, _b;
    var _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p;
    var uiBehavior = {};
    if (component.uiBehavior) {
        (_d = (0, Utils_1.getKeys)((_c = component.uiBehavior) !== null && _c !== void 0 ? _c : {})) === null || _d === void 0 ? void 0 : _d.forEach(function (key) {
            var _a, _b;
            switch (key) {
                case "readonly":
                    uiBehavior["ui:readonly"] = (_a = component.uiBehavior) === null || _a === void 0 ? void 0 : _a[key];
                    break;
                default:
                    uiBehavior[key] = (_b = component.uiBehavior) === null || _b === void 0 ? void 0 : _b[key];
                    break;
            }
        });
    }
    if ((0, autoModuleViewHelpers_1.isUrl)(component)) {
        uiBehavior["ui:widget"] = "url";
    }
    else if ((0, autoModuleViewHelpers_1.isImage)(component)) {
        uiBehavior["ui:widget"] = "image";
    }
    else if (component.category === "file_load") {
        uiBehavior["ui:field"] = "file_load";
        uiBehavior["ui:readonly"] = (_e = component.uiBehavior) === null || _e === void 0 ? void 0 : _e.readonly;
    }
    else if (component.type === "time") {
        uiBehavior["ui:field"] = "TimeComponent";
    }
    else if (component.type === "frequency") {
        uiBehavior["ui:field"] = "frequency";
    }
    else if (component.category === "file_save") {
        uiBehavior["ui:field"] = "file_save";
        uiBehavior["ui:readonly"] = (_f = component.uiBehavior) === null || _f === void 0 ? void 0 : _f.readonly;
    }
    var overriddenBehavior = {};
    if (viewModel) {
        var overriddenValue = (_h = (_g = viewModel.getDerivedFunction).getUiBehavior) === null || _h === void 0 ? void 0 : _h.call(_g, component.name);
        if (overriddenValue != undefined) {
            overriddenBehavior = __assign(__assign({}, overriddenBehavior), overriddenValue);
            if (((_j = (0, Utils_1.getKeys)(overriddenBehavior !== null && overriddenBehavior !== void 0 ? overriddenBehavior : {})) === null || _j === void 0 ? void 0 : _j.indexOf("readonly")) != -1) {
                overriddenBehavior["ui:readonly"] = overriddenBehavior["readonly"];
                delete overriddenBehavior["readonly"];
            }
        }
        var isEnabled = (_m = (_l = (_k = viewModel.getDerivedFunction).isEnabled) === null || _l === void 0 ? void 0 : _l.call(_k, component.name)) !== null && _m !== void 0 ? _m : (0, autoModuleViewHelpers_1.isModeActive)("isEnabled", component, viewModel.viewModel.getComponent);
        if (isEnabled != undefined) {
            overriddenBehavior = __assign(__assign({}, overriddenBehavior), (_a = {}, _a["ui:readonly"] = !isEnabled, _a));
        }
        var isVisible = (_p = (_o = viewModel.getDerivedFunction).isVisible) === null || _p === void 0 ? void 0 : _p.call(_o, component.name);
        if (isVisible != undefined) {
            if (!isVisible) {
                overriddenBehavior = __assign(__assign({}, overriddenBehavior), (_b = {}, _b["ui:widget"] = "hidden", _b));
            }
        }
    }
    uiBehavior = __assign(__assign({}, uiBehavior), overriddenBehavior);
    return uiBehavior;
}
//# sourceMappingURL=uiSchema.js.map

/***/ }),

/***/ "./node_modules/@microchip/scf-automodule-impl/lib/creator.js":
/*!********************************************************************!*\
  !*** ./node_modules/@microchip/scf-automodule-impl/lib/creator.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.create = void 0;
var createPrototypeExports_1 = __webpack_require__(/*! ./interfaces/createPrototypeExports */ "./node_modules/@microchip/scf-automodule-impl/lib/interfaces/createPrototypeExports.js");
var createPrototypeImports_1 = __webpack_require__(/*! ./interfaces/createPrototypeImports */ "./node_modules/@microchip/scf-automodule-impl/lib/interfaces/createPrototypeImports.js");
var create = function (state, getCreatorFunctions) {
    var _a, _b, _c;
    var config = (_b = (_a = getCreatorFunctions()).getModuleConfig) === null || _b === void 0 ? void 0 : _b.call(_a);
    var prototypeImports = (0, createPrototypeImports_1.createPrototypeImports)(state, getCreatorFunctions());
    var prototypeExports = (0, createPrototypeExports_1.createPrototypeExports)(config);
    return {
        payload: state,
        imports: __assign({}, prototypeImports),
        exports: prototypeExports,
        isSingletonPerDevice: config === null || config === void 0 ? void 0 : config.isSingletonPerDevice,
        isEntryPoint: (_c = config === null || config === void 0 ? void 0 : config.isEntryPoint) !== null && _c !== void 0 ? _c : true,
    };
};
exports.create = create;
//# sourceMappingURL=creator.js.map

/***/ }),

/***/ "./node_modules/@microchip/scf-automodule-impl/lib/index.js":
/*!******************************************************************!*\
  !*** ./node_modules/@microchip/scf-automodule-impl/lib/index.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.create = exports.process = void 0;
var processor_1 = __webpack_require__(/*! ./processor */ "./node_modules/@microchip/scf-automodule-impl/lib/processor.js");
Object.defineProperty(exports, "process", { enumerable: true, get: function () { return processor_1.process; } });
var creator_1 = __webpack_require__(/*! ./creator */ "./node_modules/@microchip/scf-automodule-impl/lib/creator.js");
Object.defineProperty(exports, "create", { enumerable: true, get: function () { return creator_1.create; } });
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/@microchip/scf-automodule-impl/lib/interfaces/createPrototypeExports.js":
/*!**********************************************************************************************!*\
  !*** ./node_modules/@microchip/scf-automodule-impl/lib/interfaces/createPrototypeExports.js ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createPrototypeExports = void 0;
var Utils_1 = __webpack_require__(/*! ../Utils */ "./node_modules/@microchip/scf-automodule-impl/lib/Utils.js");
var createPrototypeExports = function (config) {
    var _a, _b;
    var exports = {};
    (_b = (0, Utils_1.getKeys)((_a = config === null || config === void 0 ? void 0 : config.exports) !== null && _a !== void 0 ? _a : {})) === null || _b === void 0 ? void 0 : _b.forEach(function (expName) {
        var _a;
        var exp = (_a = config === null || config === void 0 ? void 0 : config.exports) === null || _a === void 0 ? void 0 : _a[expName];
        if (exp == undefined)
            return;
        exports[expName] = __assign(__assign({}, exp), { interfaces: processExportInterfaces(exp.interfaces) });
    });
    return exports;
};
exports.createPrototypeExports = createPrototypeExports;
var processExportInterfaces = function (int) {
    var newInterfaces = [];
    int.forEach(function (_a) {
        var interfaceId = _a.interfaceId, payload = _a.payload;
        newInterfaces.push({ interfaceId: interfaceId, payload: payload });
    });
    return newInterfaces;
};
//# sourceMappingURL=createPrototypeExports.js.map

/***/ }),

/***/ "./node_modules/@microchip/scf-automodule-impl/lib/interfaces/createPrototypeImports.js":
/*!**********************************************************************************************!*\
  !*** ./node_modules/@microchip/scf-automodule-impl/lib/interfaces/createPrototypeImports.js ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createPrototypeImports = void 0;
var AutoModuleHardware_1 = __webpack_require__(/*! ../autoModule/AutoModuleHardware */ "./node_modules/@microchip/scf-automodule-impl/lib/autoModule/AutoModuleHardware.js");
var Arrays_1 = __webpack_require__(/*! @microchip/scf-device/lib/util/Arrays */ "./node_modules/@microchip/scf-device/lib/util/Arrays.js");
var createPrototypeImports = function (state, creatorFunctions, config) {
    var _a, _b, _c;
    var prototypeImports = {};
    config = (_a = creatorFunctions.getModuleConfig) === null || _a === void 0 ? void 0 : _a.call(creatorFunctions);
    if (!config)
        return prototypeImports;
    if (config === null || config === void 0 ? void 0 : config.peripherals) {
        config.peripherals.forEach(function (peripheral) {
            var _a;
            var interfaceName = getFriendlyInterfaceId(peripheral.interfaceId.name);
            var prototypeImport = (0, AutoModuleHardware_1.createPrototypeImport)(interfaceName, config);
            if (prototypeImport) {
                prototypeImports = __assign(__assign({}, prototypeImports), (_a = {}, _a[interfaceName] = __assign(__assign({}, prototypeImport), { isRequired: true }), _a));
            }
        });
    }
    (_c = (0, Arrays_1.getKeys)((_b = config === null || config === void 0 ? void 0 : config.imports) !== null && _b !== void 0 ? _b : {})) === null || _c === void 0 ? void 0 : _c.forEach(function (key) {
        var _a;
        var _b, _c, _d;
        var imp = (_b = config === null || config === void 0 ? void 0 : config.imports) === null || _b === void 0 ? void 0 : _b[key];
        var args = (_c = creatorFunctions === null || creatorFunctions === void 0 ? void 0 : creatorFunctions.getCreatorImportArgs) === null || _c === void 0 ? void 0 : _c.call(creatorFunctions, key, state);
        if (imp && ((_d = creatorFunctions === null || creatorFunctions === void 0 ? void 0 : creatorFunctions.shouldImport) === null || _d === void 0 ? void 0 : _d.call(creatorFunctions, key, state)) != false) {
            prototypeImports = __assign(__assign({}, prototypeImports), (_a = {}, _a[key] = __assign(__assign({}, imp.import), { args: args }), _a));
        }
    });
    return prototypeImports;
};
exports.createPrototypeImports = createPrototypeImports;
var getFriendlyInterfaceId = function (interfaceName) {
    interfaceName = interfaceName.replace(/ /g, "").replace(/-/g, "_");
    return interfaceName;
};
//# sourceMappingURL=createPrototypeImports.js.map

/***/ }),

/***/ "./node_modules/@microchip/scf-automodule-impl/lib/interfaces/exports.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@microchip/scf-automodule-impl/lib/interfaces/exports.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MyExportInterfaces = exports.createExportInterfaces = void 0;
var Arrays_1 = __webpack_require__(/*! @microchip/scf-device/lib/util/Arrays */ "./node_modules/@microchip/scf-device/lib/util/Arrays.js");
var getConfigData_1 = __webpack_require__(/*! ../autoModule/getConfigData */ "./node_modules/@microchip/scf-automodule-impl/lib/autoModule/getConfigData.js");
var createExportInterfaces = function (exports, model) {
    return new MyExportInterfaces(exports, model);
};
exports.createExportInterfaces = createExportInterfaces;
var MyExportInterfaces = /** @class */ (function () {
    function MyExportInterfaces(exports, model) {
        var _this = this;
        this.getConfig = function () {
            if (!_this.config) {
                _this.config = (0, getConfigData_1.getConfigData)(_this.model);
            }
            return _this.config;
        };
        this.getComponents = function () {
            if (!_this.components) {
                _this.components = _this.createComponentList();
            }
            return _this.components;
        };
        this.createProcessedExports = function () {
            var _a, _b;
            var exportPayload = _this.exports;
            var config = _this.getConfig();
            if (config.exports) {
                (_b = (0, Arrays_1.getKeys)((_a = config.exports) !== null && _a !== void 0 ? _a : {})) === null || _b === void 0 ? void 0 : _b.forEach(function (key) {
                    var _a;
                    var _b, _c, _d, _e;
                    var exp = (_b = config.exports) === null || _b === void 0 ? void 0 : _b[key];
                    exportPayload = __assign(__assign({}, exportPayload), (_a = {}, _a[key] = __assign(__assign({}, (_c = config.exports) === null || _c === void 0 ? void 0 : _c[key]), { interfaces: [], name: (_d = _this.model.getDerivedFunction("exportName", key)) !== null && _d !== void 0 ? _d : (_e = exportPayload[key]) === null || _e === void 0 ? void 0 : _e.name }), _a));
                    exp === null || exp === void 0 ? void 0 : exp.interfaces.forEach(function (int) {
                        var _a, _b, _c, _d;
                        var processedInterface = _this.getInterface(key, int.interfaceId);
                        if (processedInterface) {
                            exportPayload[key].interfaces.push(__assign(__assign({}, processedInterface), { payload: (_b = (_a = _this.model) === null || _a === void 0 ? void 0 : _a.getDerivedFunction(int.interfaceId.name + "_payload")) !== null && _b !== void 0 ? _b : {}, payloads: (_d = (_c = _this.model) === null || _c === void 0 ? void 0 : _c.getDerivedFunction(int.interfaceId.name + "_payloads")) !== null && _d !== void 0 ? _d : {} }));
                        }
                    });
                });
            }
            return exportPayload;
        };
        this.getInterfaceArgs = function (interfaceKey, interfaceId) {
            var _a;
            return (_a = _this.getInterface(interfaceKey, interfaceId)) === null || _a === void 0 ? void 0 : _a.args;
        };
        this.getInterfaceResults = function (interfaceKey, interfaceId) {
            var _a;
            return (_a = _this.getInterface(interfaceKey, interfaceId)) === null || _a === void 0 ? void 0 : _a.results;
        };
        this.createComponentList = function () {
            var _a, _b;
            var componentList = [];
            var exports = (_a = _this.getConfig().exports) !== null && _a !== void 0 ? _a : {};
            (_b = (0, Arrays_1.getKeys)(exports)) === null || _b === void 0 ? void 0 : _b.forEach(function (key) {
                var exp = exports[key];
                exp.interfaces.forEach(function (int) {
                    if (int.components) {
                        componentList.push.apply(componentList, int.components);
                    }
                });
            });
            return componentList;
        };
        this.isControlledByInterface = function (componentName) {
            return _this.getComponents().indexOf(componentName) != -1;
        };
        this.getProcessedArgValue = function (componentName) {
            var _a, _b;
            var processedArgValue;
            var interfaceData = _this.getInterfaceData();
            if (_this.model &&
                _this.model.getDerivedFunctions().getProcessedArgValue &&
                interfaceData != undefined) {
                processedArgValue = (_b = (_a = _this.model
                    .getDerivedFunctions()) === null || _a === void 0 ? void 0 : _a.getProcessedArgValue) === null || _b === void 0 ? void 0 : _b.call(_a, componentName, interfaceData);
            }
            return processedArgValue;
        };
        this.getInterfaceData = function () {
            var _a, _b;
            var argValues;
            var exports = (_a = _this.getConfig().exports) !== null && _a !== void 0 ? _a : {};
            (_b = (0, Arrays_1.getKeys)(exports)) === null || _b === void 0 ? void 0 : _b.forEach(function (key) {
                var exp = exports[key];
                exp.interfaces.forEach(function (int) {
                    var _a;
                    var args = _this.getInterfaceArgs(key, int.interfaceId);
                    if (args) {
                        (_a = (0, Arrays_1.getKeys)(args)) === null || _a === void 0 ? void 0 : _a.forEach(function (key) {
                            var _a;
                            (_a = (0, Arrays_1.getKeys)(args[key])) === null || _a === void 0 ? void 0 : _a.forEach(function (arg) {
                                if (!argValues)
                                    argValues = [];
                                argValues.push({
                                    interface: int.interfaceId.name,
                                    name: arg,
                                    value: args[key][arg],
                                    module: key,
                                });
                            });
                        });
                    }
                });
            });
            return argValues;
        };
        this.exports = exports;
        this.model = model;
    }
    MyExportInterfaces.prototype.getInterface = function (interfaceKey, interfaceId) {
        var _a;
        if (!this.exports[interfaceKey])
            return undefined;
        return (0, Arrays_1.find)((_a = this.exports[interfaceKey].interfaces) !== null && _a !== void 0 ? _a : [], function (i) { return JSON.stringify(i.interfaceId) === JSON.stringify(interfaceId); });
    };
    return MyExportInterfaces;
}());
exports.MyExportInterfaces = MyExportInterfaces;
//# sourceMappingURL=exports.js.map

/***/ }),

/***/ "./node_modules/@microchip/scf-automodule-impl/lib/interfaces/imports.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@microchip/scf-automodule-impl/lib/interfaces/imports.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MyImportInterfaces = exports.createImportInterfaces = void 0;
var Arrays_1 = __webpack_require__(/*! @microchip/scf-device/lib/util/Arrays */ "./node_modules/@microchip/scf-device/lib/util/Arrays.js");
var AutoModuleHelpers_1 = __webpack_require__(/*! ../autoModule/AutoModuleHelpers */ "./node_modules/@microchip/scf-automodule-impl/lib/autoModule/AutoModuleHelpers.js");
var InterruptActions_1 = __webpack_require__(/*! ../interrupts/InterruptActions */ "./node_modules/@microchip/scf-automodule-impl/lib/interrupts/InterruptActions.js");
var Utils_1 = __webpack_require__(/*! ../Utils */ "./node_modules/@microchip/scf-automodule-impl/lib/Utils.js");
var createImportInterfaces = function (imports, model, config) {
    return new MyImportInterfaces(imports, model, config);
};
exports.createImportInterfaces = createImportInterfaces;
var MyImportInterfaces = /** @class */ (function () {
    function MyImportInterfaces(imports, model, config) {
        var _this = this;
        this.createProcessedImports = function (stage) {
            var _a;
            var processedImports = _this.filterImports();
            (_a = (0, Utils_1.getKeys)(processedImports !== null && processedImports !== void 0 ? processedImports : {})) === null || _a === void 0 ? void 0 : _a.forEach(function (key) {
                var _a;
                var _b, _c, _d, _e, _f, _g, _h, _j, _k, _l;
                processedImports = __assign(__assign({}, processedImports), (_a = {}, _a[key] = __assign(__assign(__assign({}, processedImports[key]), { args: stage === "arguments"
                        ? (_b = _this.model) === null || _b === void 0 ? void 0 : _b.getDerivedFunction(key + "_args")
                        : (_c = processedImports[key]) === null || _c === void 0 ? void 0 : _c.args, results: stage === "results"
                        ? _this.getResults(processedImports, key)
                        : (_d = processedImports[key]) === null || _d === void 0 ? void 0 : _d.results, name: (_e = _this.model.getDerivedFunction("importName", key)) !== null && _e !== void 0 ? _e : (_f = processedImports[key]) === null || _f === void 0 ? void 0 : _f.name, handle: (0, AutoModuleHelpers_1.getProcessedHandle)(processedImports[key].handle, processedImports[key].payload), options: (_j = _this.getProcessedImportOptions(key, (_h = (_g = processedImports[key]) === null || _g === void 0 ? void 0 : _g.options) !== null && _h !== void 0 ? _h : [])) !== null && _j !== void 0 ? _j : processedImports[key].options }), (_l = (_k = _this.model
                    .getDerivedFunctions()).overrideImport) === null || _l === void 0 ? void 0 : _l.call(_k, key, processedImports[key])), _a));
            });
            return processedImports;
        };
        this.filterImports = function () {
            var _a, _b, _c;
            var filteredImports = (_c = (_b = (_a = _this.model.getDerivedFunctions()).filterImports) === null || _b === void 0 ? void 0 : _b.call(_a, _this.imports)) !== null && _c !== void 0 ? _c : _this.imports;
            return filteredImports;
        };
        //Populates option labels with a custom module name if provided in export payload
        this.getProcessedImportOptions = function (importKey, options) {
            var modifiedOptions = [];
            options === null || options === void 0 ? void 0 : options.forEach(function (option, index) {
                var _a, _b;
                modifiedOptions[index] = __assign(__assign({}, option), { handle: __assign(__assign({}, option.handle), { label: (_a = _this.model.getDerivedFunction("importOptionLabel", importKey, option)) !== null && _a !== void 0 ? _a : (_b = option.payload) === null || _b === void 0 ? void 0 : _b.moduleName }) });
            });
            return modifiedOptions;
        };
        this.getResults = function (imports, key) {
            var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s;
            var importResults = (_a = _this.model) === null || _a === void 0 ? void 0 : _a.getDerivedFunction(key + "_results");
            if (importResults)
                return importResults;
            var imp = imports[key];
            if (imp.interfaceId.name === "initializer-system") {
                var initResults = {
                    initializer: {
                        name: _this.model.getName() + "_Initialize",
                        header: (_c = (_b = _this.model) === null || _b === void 0 ? void 0 : _b.getDerivedFunction("headerFile")) !== null && _c !== void 0 ? _c : {
                            name: _this.model.getName().toLowerCase() + ".h",
                            path: "include/",
                        },
                    },
                };
                return initResults;
            }
            else if (imp.interfaceId.name === "pin-standard") {
                return (_e = (_d = _this.model).getPCPHelper) === null || _e === void 0 ? void 0 : _e.call(_d).getData();
            }
            else if (imp.interfaceId.name === "interrupt-standard") {
                var interrupts_1 = [];
                var actions_1 = {};
                var isHighPriority_1 = (_h = (_g = (_f = _this.model) === null || _f === void 0 ? void 0 : _f.getImportValue("interrupt_standard")) === null || _g === void 0 ? void 0 : _g.isHighPriority) !== null && _h !== void 0 ? _h : {};
                (_l = (0, Utils_1.values)((_k = (_j = _this.model.getHardware()) === null || _j === void 0 ? void 0 : _j.getPeripheral().interrupts) !== null && _k !== void 0 ? _k : {})) === null || _l === void 0 ? void 0 : _l.forEach(function (interrupt) {
                    var _a, _b;
                    var _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z;
                    if (!interrupt)
                        return;
                    var filterInterrupt = (_e = (_d = (_c = _this.model
                        .getDerivedFunctions()).filterInterrupts) === null || _d === void 0 ? void 0 : _d.call(_c, interrupt.name)) !== null && _e !== void 0 ? _e : true;
                    if (filterInterrupt) {
                        var interruptComponentName = (_g = (_f = _this.getInterruptComponentName(interrupt.name)) !== null && _f !== void 0 ? _f : interrupt.name.toLowerCase()) !== null && _g !== void 0 ? _g : "";
                        var isEnabled_1 = (_h = _this.model.isComponentValue(interruptComponentName !== null && interruptComponentName !== void 0 ? interruptComponentName : "")) !== null && _h !== void 0 ? _h : false;
                        interrupts_1.push({
                            //Standard
                            name: (_j = interrupt.name) !== null && _j !== void 0 ? _j : "",
                            module: (_m = (_l = (_k = _this.model.getHardware()) === null || _k === void 0 ? void 0 : _k.getName()) !== null && _l !== void 0 ? _l : _this.model.getName()) !== null && _m !== void 0 ? _m : "",
                            isEnabled: isEnabled_1,
                            //Callback Extension
                            isrCallback: (_r = (_q = (_o = _this.model) === null || _o === void 0 ? void 0 : (_p = _o.getDerivedFunctions()).isrCallback) === null || _q === void 0 ? void 0 : _q.call(_p, interrupt.name)) !== null && _r !== void 0 ? _r : {
                                name: _this.model.getName() + interrupt.handlerName,
                                header: (_v = (_u = (_s = _this.model) === null || _s === void 0 ? void 0 : (_t = _s.getDerivedFunctions()).headerFile) === null || _u === void 0 ? void 0 : _u.call(_t)) !== null && _v !== void 0 ? _v : {
                                    name: _this.model.getName().toLowerCase() + ".h",
                                    path: "include/",
                                },
                            },
                            generateISR: isEnabled_1,
                            //Priority Extension
                            isHighPriority: (_w = isHighPriority_1[interrupt.name]) !== null && _w !== void 0 ? _w : true,
                        });
                        var isEnableActions = (_a = ((_z = (_y = (_x = _this.model
                            .getDerivedFunctions()).getInterruptActions) === null || _y === void 0 ? void 0 : _y.call(_x, interrupt.name, "isEnabled")) !== null && _z !== void 0 ? _z : [])).concat.apply(_a, (0, InterruptActions_1.getDefaultInterruptActions)(_this.model, interruptComponentName));
                        var isEnableAction = (0, Arrays_1.find)(isEnableActions, function (action) { return action["validFor"] !== isEnabled_1; });
                        actions_1 = __assign(__assign({}, actions_1), (_b = {}, _b[interrupt.name] = __assign(__assign({}, actions_1 === null || actions_1 === void 0 ? void 0 : actions_1[interrupt.name]), { isEnabled: isEnableAction ? [isEnableAction] : [] }), _b));
                    }
                });
                return {
                    interruptList: interrupts_1,
                    interruptActions: actions_1,
                    moduleName: (_m = _this.model.getName()) !== null && _m !== void 0 ? _m : "",
                };
            }
            else if (imp.interfaceId.name === "api-prefix-registration") {
                var apiPrefixResults = {
                    apiPrefix: (_q = (_p = (_o = _this.model) === null || _o === void 0 ? void 0 : _o.getDerivedFunctions()) === null || _p === void 0 ? void 0 : _p.apiPrefix) !== null && _q !== void 0 ? _q : (_r = _this.model) === null || _r === void 0 ? void 0 : _r.getComponentValue("componentName"),
                    moduleName: (_s = _this.model) === null || _s === void 0 ? void 0 : _s.getName(),
                };
                return apiPrefixResults;
            }
        };
        this.getInterruptComponentName = function (interruptName) {
            var _a, _b;
            return (_b = (_a = _this.model.getDerivedFunctions()) === null || _a === void 0 ? void 0 : _a.interruptComponentName) === null || _b === void 0 ? void 0 : _b.call(_a, interruptName);
        };
        this.imports = imports;
        this.model = model;
    }
    return MyImportInterfaces;
}());
exports.MyImportInterfaces = MyImportInterfaces;
//# sourceMappingURL=imports.js.map

/***/ }),

/***/ "./node_modules/@microchip/scf-automodule-impl/lib/interrupts/InterruptActions.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/@microchip/scf-automodule-impl/lib/interrupts/InterruptActions.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getDefaultInterruptActions = exports.InterruptActionsBuilder = void 0;
var AutoModuleHelpers_1 = __webpack_require__(/*! ../autoModule/AutoModuleHelpers */ "./node_modules/@microchip/scf-automodule-impl/lib/autoModule/AutoModuleHelpers.js");
var InterruptActionsBuilder = /** @class */ (function () {
    function InterruptActionsBuilder(model) {
        var _this = this;
        this.actions = [];
        this.createActionFor = function (componentName) {
            var _a;
            _this.actions = _this.buildActions();
            _this.curComponent = componentName
                ? (_a = _this.model.getComponent(componentName)) === null || _a === void 0 ? void 0 : _a.component
                : undefined;
            _this.curComponentName = componentName;
            _this.tableRowId = undefined;
            _this.tableRowCol = undefined;
            _this.tableCellPath = undefined;
            return _this;
        };
        this.addActionIfEnabled = function (actionValue) {
            if (!_this.curComponentName || !_this.curComponent)
                return _this;
            if (!_this.isActionValueAcceptable(_this.curComponent, actionValue))
                return _this;
            var payload = {
                tabId: _this.curComponent.tabs[0],
                value: actionValue,
            };
            if (_this.curComponent.category === "table") {
                if (!_this.tableCellPath)
                    return _this;
                payload = __assign(__assign({}, payload), { path: "".concat(_this.curComponent.group, ".").concat(_this.curComponent.name, ".").concat(_this.tableCellPath), rowId: _this.tableRowId });
            }
            else {
                payload = __assign(__assign({}, payload), { path: "".concat(_this.curComponent.group, ".").concat(_this.curComponent.name) });
            }
            _this.actions.push({
                validFor: true,
                action: {
                    type: "[FORM] SUBMIT",
                    payload: payload,
                },
            });
            return _this;
        };
        this.addActionIfDisabled = function (actionValue) {
            if (!_this.curComponentName || !_this.curComponent)
                return _this;
            if (!_this.isActionValueAcceptable(_this.curComponent, actionValue))
                return _this;
            var payload = {
                tabId: _this.curComponent.tabs[0],
                value: actionValue,
            };
            if (_this.curComponent.category === "table") {
                if (!_this.tableCellPath)
                    return _this;
                payload = __assign(__assign({}, payload), { path: "".concat(_this.curComponent.group, ".").concat(_this.curComponent.name, ".").concat(_this.tableCellPath), rowId: _this.tableRowId });
            }
            else {
                payload = __assign(__assign({}, payload), { path: "".concat(_this.curComponent.group, ".").concat(_this.curComponent.name) });
            }
            _this.actions.push({
                validFor: false,
                action: {
                    type: "[FORM] SUBMIT",
                    payload: payload,
                },
            });
            return _this;
        };
        this.setPathToTableCell = function (rowIndex, colName) {
            var _a;
            if (((_a = _this.curComponent) === null || _a === void 0 ? void 0 : _a.category) !== "table")
                return _this;
            _this.tableRowId = rowIndex;
            _this.tableRowCol = colName;
            _this.tableCellPath = "".concat(rowIndex, ".").concat(colName);
            return _this;
        };
        this.isActionValueAcceptable = function (component, actionValue) {
            var _a, _b, _c, _d, _e, _f, _g, _h;
            if (component.category === "hardware") {
                if (component.type === "ComboBox") {
                    var options = (_a = (0, AutoModuleHelpers_1.getSettingFromComponent)(_this.model, component)) === null || _a === void 0 ? void 0 : _a.options;
                    if (!(options === null || options === void 0 ? void 0 : options.some(function (option) {
                        var _a;
                        return option[(_a = component["displayOptionSetting"]) !== null && _a !== void 0 ? _a : "alias"] ===
                            actionValue;
                    }))) {
                        return false;
                    }
                }
                else if (component.type === "boolean") {
                    // if (actionValue !== "enabled" && actionValue !== "disabled") {
                    if (actionValue !== true && actionValue !== false) {
                        return false;
                    }
                }
            }
            else if (component.category === "software") {
                if (component.type === "ComboBox") {
                    var options = component["options"];
                    if (!(options === null || options === void 0 ? void 0 : options.some(function (option) { return option === actionValue; }))) {
                        return false;
                    }
                }
                else if (component.type === "boolean") {
                    if (actionValue !== true && actionValue !== false) {
                        return false;
                    }
                }
            }
            else if (component.category === "table") {
                if (!_this.tableRowCol)
                    return false;
                if (((_c = (_b = component.columns) === null || _b === void 0 ? void 0 : _b[_this.tableRowCol]) === null || _c === void 0 ? void 0 : _c.type) === "ComboBox") {
                    var options = (_f = (_e = (_d = component.columns) === null || _d === void 0 ? void 0 : _d[_this.tableRowCol]) === null || _e === void 0 ? void 0 : _e.defaultValue) === null || _f === void 0 ? void 0 : _f["options"];
                    if (!(options === null || options === void 0 ? void 0 : options.some(function (option) { return option === actionValue; }))) {
                        return false;
                    }
                }
                else if (((_h = (_g = component.columns) === null || _g === void 0 ? void 0 : _g[_this.tableRowCol]) === null || _h === void 0 ? void 0 : _h.type) === "boolean") {
                    if (actionValue !== true && actionValue !== false) {
                        return false;
                    }
                }
            }
            return true;
        };
        this.buildActions = function () {
            return _this.actions;
        };
        this.model = model;
    }
    InterruptActionsBuilder.createActionBuilder = function (model) {
        return new InterruptActionsBuilder(model);
    };
    return InterruptActionsBuilder;
}());
exports.InterruptActionsBuilder = InterruptActionsBuilder;
function getDefaultInterruptActions(model, componentName) {
    if (!componentName)
        return [];
    return (InterruptActionsBuilder.createActionBuilder(model)
        .createActionFor(componentName)
        .addActionIfEnabled(true)
        .addActionIfDisabled(false)
        // .addActionIfEnabled("enabled")
        // .addActionIfDisabled("disabled")
        .buildActions());
}
exports.getDefaultInterruptActions = getDefaultInterruptActions;
//# sourceMappingURL=InterruptActions.js.map

/***/ }),

/***/ "./node_modules/@microchip/scf-automodule-impl/lib/pins/PCPHelper.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@microchip/scf-automodule-impl/lib/pins/PCPHelper.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PCPHelper = exports.stateActionBuilder = void 0;
var PCPStateActionBuilder_1 = __webpack_require__(/*! ./PCPStateActionBuilder */ "./node_modules/@microchip/scf-automodule-impl/lib/pins/PCPStateActionBuilder.js");
function stateActionBuilder(pinRow) {
    return new PCPStateActionBuilder_1.PCPStateActionBuilder(pinRow);
}
exports.stateActionBuilder = stateActionBuilder;
var PCPHelper = /** @class */ (function () {
    function PCPHelper() {
        var _this = this;
        this.pinCallbacks = undefined;
        this.getAllFilteredRows = function (allRows) {
            var validRows = [];
            allRows.forEach(function (eachRow) {
                var userRowData = _this.userRowData(eachRow);
                // check the validity of user provided data
                if (userRowData && _this.isRowValid(userRowData)) {
                    validRows.push(userRowData);
                }
            });
            return validRows;
        };
        this.isRowValid = function (eachRow) {
            if ((eachRow === null || eachRow === void 0 ? void 0 : eachRow.name) &&
                (eachRow === null || eachRow === void 0 ? void 0 : eachRow.module) &&
                (eachRow === null || eachRow === void 0 ? void 0 : eachRow.function) &&
                (eachRow === null || eachRow === void 0 ? void 0 : eachRow.direction) &&
                (eachRow === null || eachRow === void 0 ? void 0 : eachRow.behaviour)) {
                return true;
            }
            else {
                return false;
            }
        };
        this.userRowData = function (eachRow) {
            var _a;
            var eachrowret = eachRow;
            if ((_a = _this.pinCallbacks) === null || _a === void 0 ? void 0 : _a.getRowData) {
                eachrowret = _this.pinCallbacks.getRowData(__assign({}, eachRow));
            }
            return eachrowret;
        };
        this.getAllRows = function () {
            var _a, _b, _c, _d, _e;
            var pinRows = (_d = (_c = (_b = (_a = _this.pinCallbacks) === null || _a === void 0 ? void 0 : _a.getPinsData) === null || _b === void 0 ? void 0 : _b.call(_a)) === null || _c === void 0 ? void 0 : _c.rows) !== null && _d !== void 0 ? _d : [];
            var userdata = {};
            if ((_e = _this.pinCallbacks) === null || _e === void 0 ? void 0 : _e.getCompletePinData) {
                userdata = _this.pinCallbacks.getCompletePinData();
                if (userdata && (userdata === null || userdata === void 0 ? void 0 : userdata.rows)) {
                    pinRows = userdata.rows;
                }
            }
            return pinRows;
        };
        this.getData = function () {
            var retData = {
                rows: _this.getAllFilteredRows(_this.getAllRows()),
            };
            return retData;
        };
    }
    PCPHelper.prototype.stateActionBuilder = function (pinRow) {
        return stateActionBuilder(pinRow);
    };
    PCPHelper.prototype.setCallbacks = function (callbacks) {
        this.pinCallbacks = callbacks;
    };
    return PCPHelper;
}());
exports.PCPHelper = PCPHelper;
//# sourceMappingURL=PCPHelper.js.map

/***/ }),

/***/ "./node_modules/@microchip/scf-automodule-impl/lib/pins/PCPStateActionBuilder.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/@microchip/scf-automodule-impl/lib/pins/PCPStateActionBuilder.js ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.PCPStateActionBuilder = void 0;
var pin_standard_1 = __webpack_require__(/*! @microchip/pin-standard */ "./node_modules/@microchip/pin-standard/lib/index.js");
var PCPStateActionBuilder = /** @class */ (function () {
    function PCPStateActionBuilder(pinRow) {
        this.actionDataArr = [];
        this.pinRow = pinRow;
        this.tabId = "main";
    }
    PCPStateActionBuilder.prototype.rowWithName = function (rowName) {
        this.rowName = rowName;
        return this;
    };
    /**
     *
     * @param tabId - default tabId is "main", please change this as per your needs.
     * @returns PCPStateActionBuilder
     */
    PCPStateActionBuilder.prototype.compWithTabId = function (tabId) {
        this.tabId = tabId;
        return this;
    };
    PCPStateActionBuilder.prototype.addIfLockedSetValue = function (pinRegEx, value, pinNameReEx) {
        this.actionDataArr.push({
            pinstate: pin_standard_1.pin_state.LOCKED,
            validFor: pinRegEx,
            validForpinNameReEx: pinNameReEx,
            value: value,
            actiontype: pin_standard_1.actiontype.SETACTION,
        });
        return this;
    };
    PCPStateActionBuilder.prototype.addIfLockedProvideAttribs = function (pinRegEx, attribs) {
        this.actionDataArr.push({
            pinstate: pin_standard_1.pin_state.LOCKED,
            validFor: pinRegEx,
            value: this.formAttribs(attribs),
            actiontype: pin_standard_1.actiontype.ATTRIBACTION,
        });
        return this;
    };
    PCPStateActionBuilder.prototype.addIfUnlockedProvideAttribs = function (pinRegEx, attribs) {
        this.actionDataArr.push({
            pinstate: pin_standard_1.pin_state.UNLOCK,
            validFor: pinRegEx,
            value: this.formAttribs(attribs),
            actiontype: pin_standard_1.actiontype.ATTRIBACTION,
        });
        return this;
    };
    PCPStateActionBuilder.prototype.formAttribs = function (attribarray) {
        return {
            attribs: attribarray,
        };
    };
    PCPStateActionBuilder.prototype.addIfUnLockedSetValue = function (pinRegEx, value) {
        this.actionDataArr.push({
            pinstate: pin_standard_1.pin_state.UNLOCK,
            validFor: pinRegEx,
            value: value,
            actiontype: pin_standard_1.actiontype.SETACTION,
        });
        return this;
    };
    PCPStateActionBuilder.prototype.forComponent = function (component) {
        this.component = component;
        return this;
    };
    PCPStateActionBuilder.prototype.build = function () {
        var _this = this;
        var actionArr = [];
        if (this.pinRow.name === this.rowName) {
            this.actionDataArr.forEach(function (eachData) {
                var _a;
                var _b;
                var actionObj = {
                    validFor: eachData.validFor,
                    state: (_a = {},
                        _a[eachData.pinstate] = {
                            type: "[FORM] SUBMIT",
                            payload: {
                                tabId: _this.tabId,
                                path: _this.component.group + "." + _this.component.name,
                                value: eachData.value,
                            },
                        },
                        _a),
                    actiontype: (_b = eachData.actiontype) !== null && _b !== void 0 ? _b : "",
                };
                if (eachData.validForpinNameReEx !== undefined) {
                    actionObj.validForpinNameReEx = eachData.validForpinNameReEx;
                }
                actionArr.push(actionObj);
            });
        }
        return actionArr;
    };
    return PCPStateActionBuilder;
}());
exports.PCPStateActionBuilder = PCPStateActionBuilder;
/*
 PCPHelper
            .stateActionBuilder(rowData)
            .rowWithName("dacoutx")
            .forComponent(dacOPEnCompo)
            .addIfLockedSetValue("DAC1OUT1", "DACOUT1 Enabled and DACOUT2 Disabled")
            .addIfLockedSetValue("DAC1OUT2", "DACOUT2 Enabled and DACOUT1 Disabled")
            .addIfUnLockedSetValue(".*", "DACOUT1 and DACOUT2 are Disabled")
            .build()
*/
//# sourceMappingURL=PCPStateActionBuilder.js.map

/***/ }),

/***/ "./node_modules/@microchip/scf-automodule-impl/lib/processor.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@microchip/scf-automodule-impl/lib/processor.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.process = void 0;
var AppModel_1 = __webpack_require__(/*! ./App/AppModel */ "./node_modules/@microchip/scf-automodule-impl/lib/App/AppModel.js");
var AutoModuleHelpers_1 = __webpack_require__(/*! ./autoModule/AutoModuleHelpers */ "./node_modules/@microchip/scf-automodule-impl/lib/autoModule/AutoModuleHelpers.js");
var AutoModuleTemplates_1 = __webpack_require__(/*! ./autoModule/AutoModuleTemplates */ "./node_modules/@microchip/scf-automodule-impl/lib/autoModule/AutoModuleTemplates.js");
var getConfigData_1 = __webpack_require__(/*! ./autoModule/getConfigData */ "./node_modules/@microchip/scf-automodule-impl/lib/autoModule/getConfigData.js");
var autoModuleView_1 = __webpack_require__(/*! ./autoModule/views/autoModuleView */ "./node_modules/@microchip/scf-automodule-impl/lib/autoModule/views/autoModuleView.js");
var AnalyticsHelper_1 = __webpack_require__(/*! ./Analytics/AnalyticsHelper */ "./node_modules/@microchip/scf-automodule-impl/lib/Analytics/AnalyticsHelper.js");
/**
 * @param initialModule
 * @param stage
 * @param getDerivedData
 */
var process = function (initialModule, stage, getDerivedData) {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x;
    initialModule = (0, AutoModuleHelpers_1.populateLoadedFiles)(initialModule);
    var model = (0, AppModel_1.getModel)(initialModule, getDerivedData);
    if (!model)
        return initialModule;
    var processedOutput = __assign({}, initialModule);
    switch (stage) {
        case "arguments":
            processedOutput = __assign(__assign({}, processedOutput), { imports: (_a = model
                    .getImportInterfaces()
                    .createProcessedImports(stage)) !== null && _a !== void 0 ? _a : initialModule.imports });
            break;
        case "payloads":
            processedOutput = __assign(__assign({}, processedOutput), { exports: (_b = model
                    .getExportInterfaces()
                    .createProcessedExports()) !== null && _b !== void 0 ? _b : initialModule.exports, name: model.getName(), help: (_e = (_d = (_c = model === null || model === void 0 ? void 0 : model.getDerivedFunctions()) === null || _c === void 0 ? void 0 : _c.overrideModuleLevelHelp) === null || _d === void 0 ? void 0 : _d.call(_c)) !== null && _e !== void 0 ? _e : (0, getConfigData_1.getConfigData)(model).help });
            break;
        case "results":
            processedOutput = __assign(__assign({}, processedOutput), { imports: (_f = model
                    .getImportInterfaces()
                    .createProcessedImports(stage)) !== null && _f !== void 0 ? _f : initialModule.imports });
            break;
        case "views":
            {
                var customTemplateData = (_j = (_h = model === null || model === void 0 ? void 0 : (_g = model.getDerivedFunctions()).templateData) === null || _h === void 0 ? void 0 : _h.call(_g)) !== null && _j !== void 0 ? _j : {};
                var view = (0, autoModuleView_1.createAutoViewPayloads)(model);
                processedOutput = __assign(__assign({}, processedOutput), { payload: __assign(__assign({}, initialModule.payload), { auto: view, customView: (_l = (_k = model === null || model === void 0 ? void 0 : model.getDerivedFunctions()) === null || _k === void 0 ? void 0 : _k.getCustomView) === null || _l === void 0 ? void 0 : _l.call(_k, initialModule) }), templateData: customTemplateData, templates: (0, AutoModuleTemplates_1.getTemplates)(model), alerts: (_o = model === null || model === void 0 ? void 0 : (_m = model.getDerivedFunctions()).alerts) === null || _o === void 0 ? void 0 : _o.call(_m), name: model.getActiveName(), category: model.getCategory(), description: (_r = (_q = (_p = model === null || model === void 0 ? void 0 : model.getDerivedFunctions()) === null || _p === void 0 ? void 0 : _p.getModuleDescription) === null || _q === void 0 ? void 0 : _q.call(_p)) !== null && _r !== void 0 ? _r : (0, AutoModuleHelpers_1.getModuleDefaultDescription)(), globalNames: (_u = (_t = (_s = model === null || model === void 0 ? void 0 : model.getDerivedFunctions()) === null || _s === void 0 ? void 0 : _s.getGlobalNames) === null || _t === void 0 ? void 0 : _t.call(_s)) !== null && _u !== void 0 ? _u : [], analytics: (_x = (_w = (_v = model.getDerivedFunctions()).getAnalytics) === null || _w === void 0 ? void 0 : _w.call(_v)) !== null && _x !== void 0 ? _x : (0, AnalyticsHelper_1.getAnalyticsDefault)(model) });
            }
            break;
        default:
            return initialModule;
    }
    return processedOutput;
};
exports.process = process;
//# sourceMappingURL=processor.js.map

/***/ }),

/***/ "./node_modules/@microchip/scf-automodule-impl/lib/tables/UidMapBuilder.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@microchip/scf-automodule-impl/lib/tables/UidMapBuilder.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.UidMapBuilder = void 0;
var UidMapBuilder = /** @class */ (function () {
    function UidMapBuilder() {
        this.uidMap = {};
    }
    UidMapBuilder.prototype.addDefaultRows = function (rowData) {
        var _this = this;
        rowData.forEach(function (row, rowCount) {
            var _a;
            _this.uidMap[row.uid] = (_a = row.rowId) !== null && _a !== void 0 ? _a : rowCount;
        });
        return this;
    };
    UidMapBuilder.prototype.addDynamicRows = function (tableState) {
        var _this = this;
        tableState.forEach(function (row) {
            var uid = row === null || row === void 0 ? void 0 : row.uid;
            if (uid && uid.indexOf("dynamicRow_") > -1) {
                _this.incrementUidAndShift(uid, row.rowId);
            }
        });
        return this;
    };
    UidMapBuilder.prototype.removeRows = function (tableState) {
        var _this = this;
        tableState.forEach(function (row) {
            var uid = row === null || row === void 0 ? void 0 : row.uid;
            if (uid && (row === null || row === void 0 ? void 0 : row.dynamicallyRemoved)) {
                _this.uidMap[uid] = -1;
            }
        });
        return this;
    };
    UidMapBuilder.prototype.sortByValue = function () {
        var _this = this;
        var count = 0;
        var sortedUids = [];
        this.getUidKeys().forEach(function (uid) {
            var _a;
            sortedUids.push((_a = {}, _a[uid] = _this.uidMap[uid], _a));
        });
        sortedUids = sortedUids.sort(function (a, b) { return a[Object.keys(a)[0]] - b[Object.keys(b)[0]]; });
        sortedUids.forEach(function (uid) {
            var uidKey = Object.keys(uid)[0];
            if (_this.uidMap[uidKey] > -1) {
                _this.uidMap[uidKey] = count++;
            }
        });
        return this;
    };
    UidMapBuilder.prototype.create = function () {
        return this.uidMap;
    };
    UidMapBuilder.prototype.incrementUidAndShift = function (uid, rowId) {
        var _this = this;
        this.getUidKeys().forEach(function (uid) {
            if (_this.uidMap[uid] >= rowId) {
                _this.uidMap[uid]++;
            }
        });
        this.uidMap[uid] = rowId;
    };
    UidMapBuilder.prototype.getUidKeys = function () {
        return Object.keys(this.uidMap);
    };
    return UidMapBuilder;
}());
exports.UidMapBuilder = UidMapBuilder;
//# sourceMappingURL=UidMapBuilder.js.map

/***/ }),

/***/ "./node_modules/@microchip/scf-automodule-impl/lib/tables/tables.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@microchip/scf-automodule-impl/lib/tables/tables.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getHeaderStyle = exports.getCellStyle = exports.getTableUiSchema = exports.getTableActions = exports.getCellValidationInfo = exports.createTableUids = exports.overrideDefaultsAndFilterRows = exports.getValueBasedOnState = exports.getTableFormData = exports.removeRowFromTable = exports.addRowToTable = exports.addRowsToTable = exports.overrideCellValue = exports.createInitialRows = exports.getInitialTableFormData = exports.calculateColumnWidth = exports.isTableInState = exports.overrideTableDefaultsWithChanges = exports.getTableHelpers = exports.getTableComponentSchema = void 0;
var Tables_1 = __webpack_require__(/*! @microchip/melody-automodule-interface/lib/src/Tables */ "./node_modules/@microchip/melody-automodule-interface/lib/src/Tables.js");
var Arrays_1 = __webpack_require__(/*! @microchip/scf-device/lib/util/Arrays */ "./node_modules/@microchip/scf-device/lib/util/Arrays.js");
var UidMapBuilder_1 = __webpack_require__(/*! ./UidMapBuilder */ "./node_modules/@microchip/scf-automodule-impl/lib/tables/UidMapBuilder.js");
function getTableComponentSchema(component, viewModel) {
    var _a, _b, _c, _d;
    var tableColumns = {};
    for (var columnsKey in component.columns) {
        var rjsfType = void 0;
        if (component.columns[columnsKey].type === "ComboBox") {
            var colBox = component.columns[columnsKey];
            rjsfType = "string";
            tableColumns[columnsKey] = {
                type: rjsfType,
                title: colBox.title,
                default: getDefaultValue(viewModel.overrideDefaultValues, colBox, columnsKey, component.name),
                enum: getComboOptions(viewModel.overrideTableOptions, colBox, columnsKey, component.name),
            };
        }
        else {
            rjsfType = (_a = component === null || component === void 0 ? void 0 : component.columns[columnsKey]) === null || _a === void 0 ? void 0 : _a.type;
            tableColumns[columnsKey] = {
                type: rjsfType,
                title: component.columns[columnsKey].title,
                default: component.columns[columnsKey].defaultValue,
            };
        }
    }
    return {
        type: "array",
        title: (_d = (_c = (_b = viewModel.viewModel.derivedFunctions) === null || _b === void 0 ? void 0 : _b.overrideTitle) === null || _c === void 0 ? void 0 : _c.call(_b, component.name)) !== null && _d !== void 0 ? _d : component.description,
        items: {
            type: "object",
            properties: __assign({}, tableColumns),
        },
    };
}
exports.getTableComponentSchema = getTableComponentSchema;
var getTableHelpers = function () {
    return {
        addRowToTable: addRowToTable,
        addRowsToTable: addRowsToTable,
        calculateColumnWidth: calculateColumnWidth,
        createInitialRows: createInitialRows,
        createTableUids: createTableUids,
        getCellStyle: getCellStyle,
        getCellValidationInfo: getCellValidationInfo,
        getHeaderStyle: getHeaderStyle,
        getInitialTableFormData: getInitialTableFormData,
        getTableActions: getTableActions,
        getTableFormData: getTableFormData,
        getTableUiSchema: getTableUiSchema,
        getValueBasedOnState: getValueBasedOnState,
        isTableInState: isTableInState,
        overrideCellValue: overrideCellValue,
        overrideDefaultsAndFilterRows: overrideDefaultsAndFilterRows,
        overrideTableDefaultsWithChanges: overrideTableDefaultsWithChanges,
        removeRowFromTable: removeRowFromTable,
        createUidMapBuilder: function () { return new UidMapBuilder_1.UidMapBuilder(); },
    };
};
exports.getTableHelpers = getTableHelpers;
function overrideTableDefaultsWithChanges(rowChanged, initialFormData, uidMap) {
    var value = __spreadArray([], initialFormData, true);
    if (Array.isArray(rowChanged)) {
        rowChanged.forEach(function (changedRow) {
            var changedUid = changedRow.uid;
            var rowChangeNum = uidMap[changedUid];
            value[rowChangeNum] = __assign(__assign({}, value[rowChangeNum]), changedRow);
        });
    }
    return value;
}
exports.overrideTableDefaultsWithChanges = overrideTableDefaultsWithChanges;
function isTableInState(tabState, component) {
    return (tabState && tabState[component.group] && tabState[component.group][component.name]);
}
exports.isTableInState = isTableInState;
function calculateColumnWidth(columns) {
    if (!columns) {
        return {};
    }
    var runningWidth = 0;
    var booleanFields = 0;
    var columnWidths = {};
    for (var columnName in columns) {
        if (columns[columnName].type === "boolean") {
            var width = 8;
            booleanFields++;
            columnWidths[columnName] = width;
            runningWidth += width;
        }
    }
    for (var columnName in columns) {
        if (columns[columnName].type !== "boolean") {
            var width = (100 - runningWidth) / (Object.keys(columns).length - booleanFields);
            columnWidths[columnName] = width;
        }
    }
    return columnWidths;
}
exports.calculateColumnWidth = calculateColumnWidth;
function getInitialTableFormData(table, columnNames, model) {
    var value = [];
    var tableFormData = {};
    columnNames.forEach(function (columnName) {
        if (!tableFormData[columnName]) {
            tableFormData[columnName] = getDefaultValue(model.getDerivedFunctions().overrideTableDefaultValues, table.columns[columnName], columnName, table.name);
        }
    });
    if (!(table === null || table === void 0 ? void 0 : table.rowData)) {
        value = createInitialRows(table, tableFormData);
    }
    else {
        var rowId_1 = 0;
        table === null || table === void 0 ? void 0 : table.rowData.forEach(function (row) {
            var rowDataCols = Object.keys(row);
            columnNames.forEach(function (colName) {
                var _a;
                if (rowDataCols.indexOf(colName) === -1) {
                    row = __assign(__assign({}, row), (_a = {}, _a[colName] = tableFormData[colName], _a.uid = createRowUid(Tables_1.RowPrefix.Default, rowId_1), _a));
                }
            });
            value.push(__assign(__assign({}, row), { uid: createRowUid(Tables_1.RowPrefix.Default, rowId_1), rowId: rowId_1 }));
            rowId_1++;
        });
    }
    return value;
}
exports.getInitialTableFormData = getInitialTableFormData;
function createInitialRows(table, tableFormData) {
    var _a;
    if (tableFormData === void 0) { tableFormData = {}; }
    var value = [];
    var initialRows = (_a = table === null || table === void 0 ? void 0 : table.defaultRowNum) !== null && _a !== void 0 ? _a : 1;
    for (var i = 0; i < initialRows; i++) {
        value.push(__assign(__assign({}, tableFormData), { rowId: i, uid: createRowUid(Tables_1.RowPrefix.Default, i) }));
    }
    return value;
}
exports.createInitialRows = createInitialRows;
function overrideCellValue(tableData, cell) {
    var modifiedTableData = __spreadArray([], tableData, true);
    modifiedTableData[cell.rowId][cell.columnName] = cell.value;
    return modifiedTableData;
}
exports.overrideCellValue = overrideCellValue;
function addRowsToTable(tableData, columns, newRow, numberOfRows) {
    if (numberOfRows <= 0) {
        return tableData;
    }
    var value = addRowToTable(tableData, columns, __assign(__assign({}, newRow), { uid: Tables_1.RowPrefix.Dynamic + (numberOfRows - 1) }));
    return addRowsToTable(value, columns, newRow, numberOfRows - 1);
}
exports.addRowsToTable = addRowsToTable;
function addRowToTable(tableData, columns, newRow) {
    var _a;
    var columnNames = Object.keys(columns);
    var newRowCols = Object.keys(newRow);
    var newRowId = newRow.rowId;
    var filteredTableTemp = [];
    if (tableData.length === 0) {
        filteredTableTemp.push(newRow);
        return filteredTableTemp;
    }
    if (newRowId != null) {
        columnNames.forEach(function (colName) {
            var _a;
            var _b, _c;
            var defaultColumnWidth = calculateColumnWidth(columns);
            if (newRowCols.indexOf(colName) === -1) {
                newRow = __assign(__assign({}, newRow), (_a = {}, _a[colName] = (_c = (_b = columns[colName].defaultValue) === null || _b === void 0 ? void 0 : _b["value"]) !== null && _c !== void 0 ? _c : columns[colName].defaultValue, _a.columnWidth = columns[colName].columnWidth
                    ? columns[colName].columnWidth + "%"
                    : defaultColumnWidth[colName] + "%", _a));
            }
        });
        var tableFirstHalf = tableData.slice(0, newRowId);
        var tableSecondHalf = tableData.slice(newRowId);
        for (var i = 0; i < tableSecondHalf.length; i++) {
            var currentRowId = tableSecondHalf[i].rowId;
            tableSecondHalf[i] = __assign(__assign({}, tableSecondHalf[i]), { rowId: currentRowId + 1 });
            var actions = (_a = tableSecondHalf[i]) === null || _a === void 0 ? void 0 : _a.actions;
            if (actions) {
                tableSecondHalf[i]["actions"] = updateActionsRowId(actions, currentRowId + 1);
            }
        }
        tableFirstHalf.push(newRow);
        filteredTableTemp = __spreadArray(__spreadArray([], tableFirstHalf, true), tableSecondHalf, true);
        return filteredTableTemp;
    }
    return tableData;
}
exports.addRowToTable = addRowToTable;
function removeRowFromTable(tableData, rowId) {
    var _a;
    var tableRemoved = tableData.filter(function (row) { return row.rowId !== rowId; });
    for (var i = 0; i < tableRemoved.length; i++) {
        tableRemoved[i].rowId = i;
        var actions = (_a = tableRemoved[i]) === null || _a === void 0 ? void 0 : _a.actions;
        if (actions) {
            tableRemoved[i]["actions"] = updateActionsRowId(actions, i);
        }
    }
    return tableRemoved;
}
exports.removeRowFromTable = removeRowFromTable;
function getTableFormData(model, table, tab) {
    var _a;
    return ((_a = model.getDerivedFunction(table.name, table, model, tab)) !== null && _a !== void 0 ? _a : getValueBasedOnState(table, model, tab));
}
exports.getTableFormData = getTableFormData;
function getValueBasedOnState(table, model, tab) {
    var columnNames = Object.keys(table.columns);
    var modelState = model.getState();
    var tabState = modelState ? modelState[tab] : undefined;
    var initialFormData = getInitialTableFormData(table, columnNames, model);
    if (!isTableInState(tabState, table)) {
        return initialFormData;
    }
    else {
        var rowChanged = tabState[table.group][table.name];
        var tableUids = createTableUids(table, tab, model, rowChanged);
        return overrideDefaultsAndFilterRows(rowChanged, initialFormData, table.columns, tableUids, table, tab);
    }
}
exports.getValueBasedOnState = getValueBasedOnState;
function overrideDefaultsAndFilterRows(rowChanged, initialFormData, columns, tableUids, component, tab) {
    var modifiedForData = __spreadArray([], initialFormData, true);
    var keys = Object.keys(tableUids);
    rowChanged = rowChanged.filter(function (row) { return row != null; });
    rowChanged.forEach(function (row) {
        if (row.uid.indexOf(Tables_1.RowPrefix.Dynamic) > -1) {
            modifiedForData.push(row);
        }
    });
    var filteredModifed = [];
    keys.forEach(function (uid) {
        modifiedForData.forEach(function (row) {
            if (row.uid === uid) {
                filteredModifed[tableUids[uid]] = __assign(__assign({}, initialFormData[0]), row);
            }
        });
    });
    filteredModifed = filteredModifed.filter(function (row) { return row; });
    for (var i = 0; i < filteredModifed.length; i++) {
        if (filteredModifed[i].uid.indexOf(Tables_1.RowPrefix.Dynamic) > -1)
            continue;
        filteredModifed[i].rowId++;
    }
    var _loop_1 = function (i) {
        Object.keys(columns).forEach(function (columnName) {
            modifiedForData[i].actions = updateActionsRowId(createDefaultTableAction(component, i, columnName, tab, tableUids), i);
        });
    };
    for (var i = 0; i < modifiedForData.length; i++) {
        _loop_1(i);
    }
    return overrideTableDefaultsWithChanges(rowChanged, filteredModifed, tableUids);
}
exports.overrideDefaultsAndFilterRows = overrideDefaultsAndFilterRows;
function createTableUids(component, tab, model, tableState) {
    var _a, _b, _c;
    var table = component;
    var dynamicTableData = model === null || model === void 0 ? void 0 : model.getDerivedFunction(component.name, component, model, tab);
    if (dynamicTableData) {
        var uidMap_1 = {};
        var rowNum_1 = 0;
        dynamicTableData.forEach(function (entry) {
            var uid = entry === null || entry === void 0 ? void 0 : entry.uid;
            if (uid !== undefined) {
                uidMap_1[uid] = rowNum_1++;
            }
        });
        return uidMap_1;
    }
    var rowData = table["rowData"];
    if (!dynamicTableData && rowData) {
        var _loop_2 = function (i) {
            if (!rowData[i].uid) {
                rowData[i].uid = createRowUid(Tables_1.RowPrefix.Default, i);
            }
            rowData[i].rowId =
                (_b = (_a = (0, Arrays_1.find)(tableState !== null && tableState !== void 0 ? tableState : [], function (row) { return row.uid === (rowData === null || rowData === void 0 ? void 0 : rowData[i].uid); })) === null || _a === void 0 ? void 0 : _a.rowId) !== null && _b !== void 0 ? _b : rowData[i].rowId;
        };
        for (var i = 0; i < rowData.length; i++) {
            _loop_2(i);
        }
    }
    else {
        rowData =
            dynamicTableData !== null && dynamicTableData !== void 0 ? dynamicTableData : createInitialRows(table).map(function (row) {
                var _a, _b;
                return __assign(__assign({}, (row !== null && row !== void 0 ? row : {})), { rowId: (_b = (_a = (0, Arrays_1.find)(tableState !== null && tableState !== void 0 ? tableState : [], function (r) { return r.uid === (row === null || row === void 0 ? void 0 : row.uid); })) === null || _a === void 0 ? void 0 : _a.rowId) !== null && _b !== void 0 ? _b : row.rowId });
            });
    }
    var uidMapBuilder = (_c = model === null || model === void 0 ? void 0 : model.getTableHelpers().createUidMapBuilder()) !== null && _c !== void 0 ? _c : (0, exports.getTableHelpers)().createUidMapBuilder();
    return uidMapBuilder
        .addDefaultRows(rowData)
        .addDynamicRows(tableState !== null && tableState !== void 0 ? tableState : [])
        .removeRows(tableState !== null && tableState !== void 0 ? tableState : [])
        .sortByValue()
        .create();
}
exports.createTableUids = createTableUids;
function getCellValidationInfo(component) {
    var table = component;
    var colInfo = [];
    var columns = table.columns;
    for (var column in columns) {
        var colData = table.columns[column];
        if (colData === null || colData === void 0 ? void 0 : colData["cellValidator"]) {
            colInfo.push({
                type: colData["type"],
                minValue: colData["cellValidator"]["minValue"],
                maxValue: colData["cellValidator"]["maxValue"],
                errMessage: colData["cellValidator"]["errorMessage"],
                errTitle: colData["cellValidator"]["errorTitle"],
                cValidation: colData["cellValidator"]["cValidation"],
                cValidationErrTitle: colData["cellValidator"]["cValidationErrorTitle"],
                cValidationErrMessage: colData["cellValidator"]["cValidationErrorMessage"],
            });
        }
    }
    return colInfo;
}
exports.getCellValidationInfo = getCellValidationInfo;
function getTableActions(component, tab, model, uids, rowFormData) {
    var _a, _b, _c, _d, _e;
    var table = component;
    var dynamicTableData;
    if (!rowFormData) {
        dynamicTableData = model === null || model === void 0 ? void 0 : model.getDerivedFunction(component.name, component, model, tab);
    }
    var rowData = (_b = (_a = rowFormData !== null && rowFormData !== void 0 ? rowFormData : dynamicTableData) !== null && _a !== void 0 ? _a : table["rowData"]) !== null && _b !== void 0 ? _b : createInitialRows(table);
    var columnNames = Object.keys(table.columns);
    var tableActions = { table: {} };
    var rowCount = 0;
    var tableState = (_e = (_d = (_c = model === null || model === void 0 ? void 0 : model.getState()) === null || _c === void 0 ? void 0 : _c[tab]) === null || _d === void 0 ? void 0 : _d[component.group]) === null || _e === void 0 ? void 0 : _e[component.name];
    rowData.forEach(function (row) {
        columnNames.forEach(function (columnName) {
            var _a, _b, _c, _d;
            if (!tableActions["table"][row.uid]) {
                tableActions["table"][row.uid] = {};
            }
            var uid;
            for (var uidsKey in uids) {
                if (uids[uidsKey] === row.rowId) {
                    uid = uidsKey;
                }
            }
            uid = uid !== null && uid !== void 0 ? uid : createRowUid(Tables_1.RowPrefix.Default, rowCount);
            var defaultAction = createDefaultTableAction(component, rowCount, columnName, tab, uid);
            if (tableState) {
                var ind_1 = -1;
                var filtered = tableState.filter(function (row, index) {
                    ind_1 = index;
                    return row.uid === uid;
                });
                if (filtered.length) {
                    defaultAction = createDefaultTableAction(component, ind_1, columnName, tab, uid !== null && uid !== void 0 ? uid : createRowUid(Tables_1.RowPrefix.Default, rowCount));
                }
            }
            if (component.columns[columnName].type == "ComboBox") {
                defaultAction["payload"] = __assign(__assign({}, defaultAction["payload"]), { options: getComboOptions((_a = model === null || model === void 0 ? void 0 : model.getDerivedFunctions()) === null || _a === void 0 ? void 0 : _a.overrideTableOptions, table.columns[columnName], columnName, component.name) });
            }
            var cellAction = (_c = (_b = row.actions) === null || _b === void 0 ? void 0 : _b[columnName]) !== null && _c !== void 0 ? _c : defaultAction;
            tableActions["table"][row.uid][columnName] =
                (_d = model === null || model === void 0 ? void 0 : model.getDerivedFunction("getActions", table.name, cellAction)) !== null && _d !== void 0 ? _d : cellAction;
        });
        rowCount++;
    });
    var uidKeys = Object.keys(uids);
    uidKeys.forEach(function (uidKey) {
        columnNames.forEach(function (columnName) {
            if (uids[uidKey] > -1) {
                if (!tableActions["table"][uidKey]) {
                    tableActions["table"][uidKey] = {};
                    tableActions["table"][uidKey][columnName] = createDefaultTableAction(table, uids[uidKey], columnName, tab, uidKey);
                }
                else if (!tableActions["table"][uidKey][columnName]) {
                    tableActions["table"][uidKey][columnName] = createDefaultTableAction(table, uids[uidKey], columnName, tab, uidKey);
                }
            }
        });
    });
    return JSON.stringify(tableActions);
}
exports.getTableActions = getTableActions;
function getTableUiSchema(table, columns) {
    var _a, _b;
    var tableUi = {
        tableCols: columns,
        search: table["isSearchable"],
        striped: false,
        bordered: false,
    };
    if (table["canRemoveRows"]) {
        tableUi = __assign(__assign({}, tableUi), { rightActions: getTableRightActions() });
    }
    if (table["canInsertRows"]) {
        tableUi = __assign(__assign({}, tableUi), { leftActions: getTableLeftActions() });
    }
    if (table.canMoveRowDown) {
        tableUi = __assign(__assign({}, tableUi), { leftActions: ((_a = tableUi.leftActions) !== null && _a !== void 0 ? _a : []).concat(getTableMoveRowActions()[0]) });
    }
    if (table.canMoveRowUp) {
        tableUi = __assign(__assign({}, tableUi), { leftActions: ((_b = tableUi.leftActions) !== null && _b !== void 0 ? _b : []).concat(getTableMoveRowActions()[1]) });
    }
    return {
        "ui:field": "table",
        className: "col-md-12 individualComponent",
        table: __assign({}, tableUi),
    };
}
exports.getTableUiSchema = getTableUiSchema;
function getCellStyle(isReadonly) {
    var tdStyle = {
        overflow: "hidden",
        textOverflow: "ellipsis",
    };
    if (isReadonly) {
        tdStyle["backgroundColor"] = "#EEEEEE";
    }
    return tdStyle;
}
exports.getCellStyle = getCellStyle;
function getHeaderStyle(maxHeaderSize, displayHeadersDiagonally) {
    return displayHeadersDiagonally
        ? getDiagonalHeaderStyles(maxHeaderSize)
        : getDefaultHeaderStyles(maxHeaderSize);
}
exports.getHeaderStyle = getHeaderStyle;
function getDiagonalHeaderStyles(maxHeaderSize) {
    var headerSizeMultiplier = 3.3;
    return {
        position: "relative",
        bottom: "-7px",
        pointerEvents: "none",
        left: "6px",
        transformOrigin: "bottom left",
        transform: "rotate(-30deg)",
        paddingTop: "".concat(headerSizeMultiplier * maxHeaderSize, "px"),
    };
}
function getDefaultHeaderStyles(maxHeaderSize) {
    return {
        whiteSpace: "unset",
        maxWidth: "".concat(maxHeaderSize, "px"),
    };
}
function createDefaultTableAction(component, row, column, tab, uid) {
    return {
        type: "[Table] EDIT_CELL",
        payload: {
            tabId: tab !== null && tab !== void 0 ? tab : "main",
            path: "".concat(component === null || component === void 0 ? void 0 : component.group, ".").concat(component === null || component === void 0 ? void 0 : component.name),
            column: column,
            value: "%v",
            uid: uid,
            rowId: row,
        },
    };
}
function updateActionsRowId(currentActions, rowId) {
    var modifiedActions = __assign({}, currentActions);
    var columnNames = Object.keys(currentActions);
    columnNames.forEach(function (columnName) {
        var _a;
        var payload = (_a = modifiedActions[columnName]) === null || _a === void 0 ? void 0 : _a["payload"];
        if (payload) {
            var path = payload["path"].split(".");
            path[path.length - 2] = rowId;
            modifiedActions[columnName]["payload"]["rowId"] = rowId;
            modifiedActions[columnName]["payload"]["path"] = path.join(".");
        }
    });
    return modifiedActions;
}
var getDefaultValue = function (overrideDefaultValues, component, componentName, tableName) {
    var _a;
    return ((_a = overrideDefaultValues === null || overrideDefaultValues === void 0 ? void 0 : overrideDefaultValues(tableName, componentName)) !== null && _a !== void 0 ? _a : (component.type === "ComboBox"
        ? component.defaultValue.value
        : component.defaultValue));
};
var getComboOptions = function (overrideOptions, component, componentName, tableName) {
    var _a;
    var dynamicOptions = overrideOptions === null || overrideOptions === void 0 ? void 0 : overrideOptions(tableName, componentName);
    return dynamicOptions && dynamicOptions.length > 0
        ? dynamicOptions
        : (_a = component === null || component === void 0 ? void 0 : component.defaultValue) === null || _a === void 0 ? void 0 : _a["options"];
};
function getTableLeftActions() {
    return [
        {
            dataField: "insert-button",
            editable: false,
            displayName: "",
            columnWidth: "21px",
            width: "21px",
            tdStyle: { textOverflow: "unset" },
        },
    ];
}
function getTableRightActions() {
    return [
        {
            dataField: "delete-button",
            editable: false,
            displayName: "",
            columnWidth: "21px",
            width: "21px",
            tdStyle: { textOverflow: "unset" },
        },
    ];
}
function getTableMoveRowActions() {
    return [
        {
            dataField: "row-down-button",
            editable: false,
            displayName: "",
            columnWidth: "21px",
            width: "21px",
        },
        {
            dataField: "row-up-button",
            editable: false,
            displayName: "",
            columnWidth: "21px",
            width: "21px",
        },
    ];
}
function createRowUid(prefix, postfix) {
    return prefix + postfix;
}
//# sourceMappingURL=tables.js.map

/***/ }),

/***/ "./node_modules/@microchip/scf-common/lib/Processor.js":
/*!*************************************************************!*\
  !*** ./node_modules/@microchip/scf-common/lib/Processor.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.mapOptionLabels = exports.filterOptions = exports.isSingleton = exports.isUnassigned = exports.isAssigned = exports.hasOptions = exports.AlertTypes = void 0;
var AlertTypes;
(function (AlertTypes) {
    AlertTypes["Error"] = "error";
    AlertTypes["Warning"] = "warning";
    AlertTypes["Hint"] = "hint";
})(AlertTypes = exports.AlertTypes || (exports.AlertTypes = {}));
/**
 * See User-Defined Type Guards in the Typescript Handbook on Advanced Types
 * @see https://www.typescriptlang.org/docs/handbook/advanced-types.html
 */
function hasOptions(dep) {
    return dep.options !== undefined;
}
exports.hasOptions = hasOptions;
/**
 * See User-Defined Type Guards in the Typescript Handbook on Advanced Types
 * @see https://www.typescriptlang.org/docs/handbook/advanced-types.html
 */
function isAssigned(dep) {
    return typeof dep.handle !== "undefined";
}
exports.isAssigned = isAssigned;
/**
 * See User-Defined Type Guards in the Typescript Handbook on Advanced Types
 * @see https://www.typescriptlang.org/docs/handbook/advanced-types.html
 */
function isUnassigned(dep) {
    return typeof dep.handle === "undefined";
}
exports.isUnassigned = isUnassigned;
/**
 * Type guard function for SingletonExport
 * See User-Defined Type Guards in the Typescript Handbook on Advanced Types
 * @see https://www.typescriptlang.org/docs/handbook/advanced-types.html
 * @param resource the export to check on being a singleton
 * @deprecated No longer used. Replaced with dynamic singleton identification
 * at runtime.
 */
function isSingleton(resource) {
    return typeof resource.isSingleton !== "undefined" && resource.isSingleton;
}
exports.isSingleton = isSingleton;
/**
 * Returns a copy of `populatedImport` with all options removed which
 * cause `optionFilter` to return false.
 */
function filterOptions(populatedImport, optionFilter) {
    if (populatedImport.options) {
        return __assign(__assign({}, populatedImport), { options: populatedImport.options.filter(optionFilter) });
    }
    return populatedImport;
}
exports.filterOptions = filterOptions;
/**
 * Returns a copy of `populatedImport` with the options' handle labels
 * mapped according to `labelFactory`.
 */
function mapOptionLabels(populatedImport, labelFactory) {
    if (populatedImport.options) {
        return __assign(__assign({}, populatedImport), { options: populatedImport.options.map(function (option) {
                return __assign(__assign({}, option), { handle: __assign(__assign({}, option.handle), { label: labelFactory(option) }) });
            }) });
    }
    return populatedImport;
}
exports.mapOptionLabels = mapOptionLabels;
//# sourceMappingURL=Processor.js.map

/***/ }),

/***/ "./node_modules/@microchip/scf-device/lib/CalculateRegisterValue.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@microchip/scf-device/lib/CalculateRegisterValue.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
var Setting_1 = __webpack_require__(/*! ./Setting */ "./node_modules/@microchip/scf-device/lib/Setting.js");
var Register_1 = __webpack_require__(/*! ./Register */ "./node_modules/@microchip/scf-device/lib/Register.js");
var Arrays_1 = __webpack_require__(/*! ./util/Arrays */ "./node_modules/@microchip/scf-device/lib/util/Arrays.js");
/** Builder pattern */
var CalculateRegisterValue = /** @class */ (function () {
    function CalculateRegisterValue(register) {
        var _this = this;
        this.modifiedSettings = [];
        /** Assign a numerical value to the given `Setting`. */
        this.withNumberValue = function (setting, value) {
            if (setting === undefined) {
                throw new Error("Cannot assign number value to setting, setting is undefined.");
            }
            if (!_this.getSetting(setting)) {
                throw new Error("Setting ".concat(setting.alias, " is not present in Register ").concat(_this.register.name));
            }
            _this.modifiedSettings = __spreadArray(__spreadArray([], _this.modifiedSettings, true), [
                new NumberSettingValue(setting, value),
            ], false);
            return _this;
        };
        /** Assign the given `Option` to the given `Setting`. */
        this.withOption = function (setting, option) {
            if (setting === undefined) {
                throw new Error("Cannot assign option to setting, setting is undefined.");
            }
            if (!_this.getSetting(setting)) {
                throw new Error("Setting ".concat(setting.alias, " is not present in Register ").concat(_this.register.name));
            }
            if (!option || !_this.getOption(setting, option)) {
                throw new Error("Option ".concat(option === null || option === void 0 ? void 0 : option.name, " is not present in Setting ").concat(setting.name));
            }
            _this.modifiedSettings = __spreadArray(__spreadArray([], _this.modifiedSettings, true), [
                new OptionSettingValue(setting, option),
            ], false);
            return _this;
        };
        /** Assign the `Option` matching the given alias to the given `Setting`. */
        this.withOptionAlias = function (setting, optionAlias) {
            if (setting === undefined) {
                throw new Error("Cannot assign option alias to setting, setting is undefined.");
            }
            var option = (0, Setting_1.getOptionByAlias)(optionAlias, setting);
            if (option === undefined) {
                throw new Error("Option Alias: \"".concat(optionAlias, "\" not present in Setting: \"").concat(setting.name, "\"."));
            }
            return _this.withOption(setting, option);
        };
        /** Assign the `Option` matching the given name to the given `Setting`. */
        this.withOptionName = function (setting, optionName) {
            if (setting === undefined) {
                throw new Error("Cannot assign option name to setting, setting is undefined.");
            }
            var option = (0, Setting_1.getOptionByName)(optionName, setting);
            if (option === undefined) {
                throw new Error("Option Name: \"".concat(optionName, "\" not present in Setting: \"").concat(setting.name, "\"."));
            }
            return _this.withOption(setting, option);
        };
        /** Assign the `Option` matching the given description to the given `Setting`. */
        this.withOptionDescription = function (setting, optionDescription) {
            if (setting === undefined) {
                throw new Error("Cannot assign option description to setting, setting is undefined.");
            }
            var option = (0, Setting_1.getOptionByDescription)(optionDescription, setting);
            if (option === undefined) {
                throw new Error("Option Description: \"".concat(optionDescription, "\" not present in Setting: \"").concat(setting.name, "\"."));
            }
            return _this.withOption(setting, option);
        };
        this.getSetting = function (setting) {
            return (0, Register_1.getSettingByAlias)(setting.alias, _this.register);
        };
        this.getOption = function (setting, option) {
            return (option === null || option === void 0 ? void 0 : option.name) ? (0, Setting_1.getOptionByName)(option.name, setting) : undefined;
        };
        this.calculate = function () {
            var registerValue = 0;
            _this.modifiedSettings.forEach(function (modifiedSetting) {
                registerValue = _this.setValue(modifiedSetting, registerValue);
            });
            var unmodifiedSettings = _this.getUnmodifiedSettings();
            unmodifiedSettings.forEach(function (unmodifiedSetting) {
                registerValue = _this.setValue(SettingValue.defaultValue(unmodifiedSetting), registerValue);
            });
            return Number(registerValue);
        };
        this.setValue = function (setting, registerValue) {
            var value = registerValue;
            value &= ~setting.getMask(); // Clear bits
            value |= setting.getShiftedValue(); // Set bits
            return value >>> 0;
        };
        this.getUnmodifiedSettings = function () {
            var _a, _b;
            var modifiedSettingNames = (0, Arrays_1.map)(_this.modifiedSettings, function (setting) {
                return setting.getName();
            });
            return (0, Arrays_1.filter)((_b = (0, Arrays_1.values)((_a = _this.register.settings) !== null && _a !== void 0 ? _a : {})) !== null && _b !== void 0 ? _b : [], function (setting) { return modifiedSettingNames.indexOf(setting.name) < 0; });
        };
        /** Calculate and print the register's value as a hex string. */
        this.asHexString = function () { return CalculateRegisterValue.toHexString(_this.calculate()); };
        /** Calculate and print the register's value as a binary string. */
        this.asBinaryString = function () {
            return CalculateRegisterValue.toBinaryString(_this.calculate());
        };
        /** Calculate and print the register's value as a decimal string. */
        this.asDecimalString = function () {
            return CalculateRegisterValue.toDecimalString(_this.calculate());
        };
        /** Calculate and return the register's value as a number. */
        this.asNumber = function () { return _this.calculate(); };
        this.register = register;
    }
    /** Creates a register value calculation object for the given register. */
    CalculateRegisterValue.for = function (register) {
        return new CalculateRegisterValue(register);
    };
    /** Format the given number as a hex string value. */
    CalculateRegisterValue.toHexString = function (value) {
        if (value == null) {
            throw new Error("CalculateRegisterValue.toHexString() illegal argument exception. Value must not be null.");
        }
        return "0x" + value.toString(16);
    };
    /** Format the given number as a binary string value. */
    CalculateRegisterValue.toBinaryString = function (value) {
        if (value == null) {
            throw new Error("CalculateRegisterValue.toBinaryString() illegal argument exception. Value must not be null.");
        }
        return "0b" + value.toString(2);
    };
    /** Format the given number as a decimal string value. */
    CalculateRegisterValue.toDecimalString = function (value) {
        if (value == null) {
            throw new Error("CalculateRegisterValue.toDecimalString() illegal argument exception. Value must not be null.");
        }
        return value.toString();
    };
    return CalculateRegisterValue;
}());
exports.default = CalculateRegisterValue;
var SettingValue = /** @class */ (function () {
    function SettingValue(setting) {
        var _this = this;
        this.getMask = function () { return Number(_this.setting.mask); };
        this.getShift = function () {
            var mask = _this.getMask();
            var shiftIndex = 0;
            while (!(mask & 0x1)) {
                mask = mask >> 1;
                shiftIndex++;
            }
            return shiftIndex;
        };
        this.getShiftedValue = function () { return _this.getValue() << _this.getShift(); };
        this.getName = function () { return _this.setting.name; };
        this.setting = setting;
    }
    SettingValue.defaultValue = function (setting) {
        var value = Number(setting.porDefault);
        return new NumberSettingValue(setting, value);
    };
    return SettingValue;
}());
var NumberSettingValue = /** @class */ (function (_super) {
    __extends(NumberSettingValue, _super);
    function NumberSettingValue(setting, value) {
        var _this = _super.call(this, setting) || this;
        _this.getValue = function () { return _this.value; };
        _this.value = value;
        return _this;
    }
    return NumberSettingValue;
}(SettingValue));
var OptionSettingValue = /** @class */ (function (_super) {
    __extends(OptionSettingValue, _super);
    function OptionSettingValue(setting, option) {
        var _this = _super.call(this, setting) || this;
        _this.getValue = function () { return Number(_this.option.value); };
        _this.option = option;
        return _this;
    }
    OptionSettingValue.fromDefaultValue = function (setting, value) {
        var foundValueByName = (0, Setting_1.getOptionByName)(value, setting);
        if (foundValueByName)
            return new OptionSettingValue(setting, foundValueByName);
        var foundValueByAlias = (0, Setting_1.getOptionByAlias)(value, setting);
        if (foundValueByAlias)
            return new OptionSettingValue(setting, foundValueByAlias);
        throw new Error("Unable to create default value '".concat(value, "' for setting '").concat(setting.name, "'."));
    };
    return OptionSettingValue;
}(SettingValue));
//# sourceMappingURL=CalculateRegisterValue.js.map

/***/ }),

/***/ "./node_modules/@microchip/scf-device/lib/Register.js":
/*!************************************************************!*\
  !*** ./node_modules/@microchip/scf-device/lib/Register.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.getSettingByAlias = void 0;
var getSettingByAlias = function (alias, register) {
    var _a;
    return (_a = register.settings) === null || _a === void 0 ? void 0 : _a[alias];
};
exports.getSettingByAlias = getSettingByAlias;
//# sourceMappingURL=Register.js.map

/***/ }),

/***/ "./node_modules/@microchip/scf-device/lib/Setting.js":
/*!***********************************************************!*\
  !*** ./node_modules/@microchip/scf-device/lib/Setting.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.getOptionDescriptions = exports.getOptionNames = exports.getOptionByDescription = exports.getOptionByName = exports.getOptionByAlias = exports.getBitRange = exports.getBitLabel = void 0;
var Arrays_1 = __webpack_require__(/*! ./util/Arrays */ "./node_modules/@microchip/scf-device/lib/util/Arrays.js");
/**
 * Converts a hexadecimal string to binary.
 * Any leading zeros are removed from the returned string.
 */
var hexToBinary = function (hex) {
    return parseInt(hex, 16).toString(2);
};
/**
 * Returns a string of the corresponding bit position(s).
 */
var getBitLabel = function (setting) {
    if (setting.mask === undefined) {
        return undefined;
    }
    var bitRange = (0, exports.getBitRange)(setting);
    if (!bitRange)
        return undefined;
    if (bitRange.high === bitRange.low) {
        return "bit ".concat(bitRange.high);
    }
    return "bit ".concat(bitRange.high, "-").concat(bitRange.low);
};
exports.getBitLabel = getBitLabel;
/**
 * Converts the hexadecimal mask provided within the register setting
 *   and returns an interface containing the corresponding low and high bit positions.
 */
var getBitRange = function (setting) {
    if (!setting.mask)
        return undefined;
    var processedHex = hexToBinary(setting.mask);
    return {
        high: processedHex.length - 1,
        low: getBitRangeLow(processedHex),
    };
};
exports.getBitRange = getBitRange;
var getOptionByAlias = function (alias, setting) {
    var _a;
    return (0, Arrays_1.find)((_a = setting === null || setting === void 0 ? void 0 : setting.options) !== null && _a !== void 0 ? _a : [], function (option) { return option.alias == alias; });
};
exports.getOptionByAlias = getOptionByAlias;
var getOptionByName = function (name, setting) {
    var _a;
    return (0, Arrays_1.find)((_a = setting === null || setting === void 0 ? void 0 : setting.options) !== null && _a !== void 0 ? _a : [], function (option) { return option.name == name; });
};
exports.getOptionByName = getOptionByName;
var getOptionByDescription = function (description, setting) {
    var _a;
    return (0, Arrays_1.find)((_a = setting.options) !== null && _a !== void 0 ? _a : [], function (option) { return option.description == description; });
};
exports.getOptionByDescription = getOptionByDescription;
var getOptionNames = function (setting) {
    var _a;
    return (0, Arrays_1.map)((_a = setting.options) !== null && _a !== void 0 ? _a : [], function (option) { return option.name; });
};
exports.getOptionNames = getOptionNames;
var getOptionDescriptions = function (setting) {
    var _a;
    return (0, Arrays_1.map)((_a = setting.options) !== null && _a !== void 0 ? _a : [], function (option) { return option.description; });
};
exports.getOptionDescriptions = getOptionDescriptions;
function getBitRangeLow(processedHex) {
    if (processedHex.charAt(1) === "1") {
        var index = 1;
        while (processedHex.charAt(index) === "1") {
            index++;
        }
        return processedHex.length - index;
    }
    else {
        return processedHex.length - 1;
    }
}
//# sourceMappingURL=Setting.js.map

/***/ }),

/***/ "./node_modules/@microchip/scf-device/lib/util/Arrays.js":
/*!***************************************************************!*\
  !*** ./node_modules/@microchip/scf-device/lib/util/Arrays.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.values = exports.getKeys = exports.find = exports.filter = exports.map = void 0;
var map = function (arr, callback) {
    var result = [];
    arr.forEach(function (value, index) {
        result[index] = callback(value);
    });
    return result;
};
exports.map = map;
var filter = function (arr, callback) {
    var result = [];
    arr.forEach(function (value) {
        if (callback(value)) {
            result.push(value);
        }
    });
    return result;
};
exports.filter = filter;
/**
 * Iterates over elements of the array, returning the first element that the predicate returns truthy for.
 */
var find = function (arr, callback) {
    for (var i = 0; i < arr.length; i++) {
        if (callback(arr[i])) {
            return arr[i];
        }
    }
    return undefined;
};
exports.find = find;
/** @returns the non-prototype keys of the given object */
var getKeys = function (obj) {
    if (!obj)
        return undefined;
    return Object.getOwnPropertyNames(obj);
};
exports.getKeys = getKeys;
var values = function (obj) {
    var _a;
    if (!obj)
        return undefined;
    return (_a = (0, exports.getKeys)(obj)) === null || _a === void 0 ? void 0 : _a.map(function (key) { return obj[key]; });
};
exports.values = values;
//# sourceMappingURL=Arrays.js.map

/***/ }),

/***/ "./node_modules/@microchip/scf-interface/lib/c-function-types.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@microchip/scf-interface/lib/c-function-types.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.buildSimpleApi = function (functions) {
    var api = {};
    for (var key in functions) {
        api[key] = buildFunction(functions[key]);
    }
    return api;
};
var buildFunction = function (cFunction) {
    return cFunction.returns + " " + cFunction.name + "(" + buildArguments(cFunction.arguments) + ")";
};
var buildArguments = function (args) {
    if (args) {
        return args.map(function (arg) { return arg.type + " " + arg.name; }).join(", ");
    }
    else {
        return "void";
    }
};


/***/ }),

/***/ "./node_modules/@microchip/scf-interface/lib/helpers.js":
/*!**************************************************************!*\
  !*** ./node_modules/@microchip/scf-interface/lib/helpers.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.getInterfaceName = function (pkgJson) {
    var strReplace = "@microchip/";
    var interfaceName;
    if (pkgJson) {
        interfaceName = pkgJson["name"];
        if (interfaceName) {
            interfaceName = interfaceName.replace(strReplace, "");
        }
    }
    if (!interfaceName) {
        throw new Error("Invalid Interface Name...!");
    }
    return interfaceName;
};
exports.getInterfaceVersion = function (pkgJson) {
    var versionRegex = new RegExp("\\d+.\\d+.\\d+");
    var version;
    if (pkgJson) {
        version = pkgJson["version"];
    }
    if (!version && !versionRegex.test(version)) {
        throw new Error("Invalid Interface Version...!");
    }
    return version;
};


/***/ }),

/***/ "./node_modules/@microchip/scf-interface/lib/index.js":
/*!************************************************************!*\
  !*** ./node_modules/@microchip/scf-interface/lib/index.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var c_function_types_1 = __webpack_require__(/*! ./c-function-types */ "./node_modules/@microchip/scf-interface/lib/c-function-types.js");
exports.buildSimpleApi = c_function_types_1.buildSimpleApi;
var helpers_1 = __webpack_require__(/*! ./helpers */ "./node_modules/@microchip/scf-interface/lib/helpers.js");
exports.getInterfaceName = helpers_1.getInterfaceName;
exports.getInterfaceVersion = helpers_1.getInterfaceVersion;


/***/ }),

/***/ "./node_modules/@microchip/scf-register-view-helper/lib/CreateRegisterView.js":
/*!************************************************************************************!*\
  !*** ./node_modules/@microchip/scf-register-view-helper/lib/CreateRegisterView.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateRegisterView = void 0;
var Setting_1 = __webpack_require__(/*! @microchip/scf-device/lib/Setting */ "./node_modules/@microchip/scf-device/lib/Setting.js");
var CalculateRegisterValue_1 = __importDefault(__webpack_require__(/*! @microchip/scf-device/lib/CalculateRegisterValue */ "./node_modules/@microchip/scf-device/lib/CalculateRegisterValue.js"));
var Arrays_1 = __webpack_require__(/*! @microchip/scf-device/lib/util/Arrays */ "./node_modules/@microchip/scf-device/lib/util/Arrays.js");
var ViewSchemaBuilder_1 = __webpack_require__(/*! ./ViewSchemaBuilder */ "./node_modules/@microchip/scf-register-view-helper/lib/ViewSchemaBuilder.js");
var Model_1 = __webpack_require__(/*! ./Model */ "./node_modules/@microchip/scf-register-view-helper/lib/Model.js");
var throwError = function (message) {
    throw new Error(message);
};
var CreateRegisterView = /** @class */ (function () {
    function CreateRegisterView(module) {
        var _this = this;
        this.registers = [];
        this.interrupts = [];
        /** Create a register view */
        this.create = function () {
            var schemaBuilder = new ViewSchemaBuilder_1.ViewSchemaBuilder()
                .withSchema({
                title: "Register Settings",
                type: "object",
            })
                .withTabName("Register Initialization")
                .withExpandedDefault(false);
            _this.registers.forEach(function (reg) {
                schemaBuilder.addChildComponent(reg.getRegister().name, _this.createRegisterView(reg));
            });
            schemaBuilder.addChildComponent("interrupts", _this.createInterruptView());
            return schemaBuilder.build();
        };
        /** Assign a numerical value to the given register. */
        this.withRegisterValue = function (register, value) {
            _this.getSafeRegisterViewModel(register).setValue(value);
            return _this;
        };
        /** Assign a string value to the given interrupt. */
        this.withInterruptValue = function (interrupt, value) {
            _this.getSafeInterruptViewModel(interrupt).setValue(value);
            return _this;
        };
        /** Assign the interrupt combobox options. */
        this.withInterruptOptions = function (interrupt, options) {
            _this.getSafeInterruptViewModel(interrupt).setOptions(options);
            return _this;
        };
        /** Make all settings in all registers editable */
        this.withAllEditable = function () {
            _this.registers.forEach(function (register) {
                return _this.withEditableRegister(register.getRegister());
            });
            _this.interrupts.forEach(function (interrupt) {
                _this.withEditableInterrupt(interrupt.getInterrupt());
            });
            return _this;
        };
        /** Make settings in the given register editable based on setting type*/
        this.withEditableRegister = function (register) {
            var _a, _b;
            _this.getSafeRegisterViewModel(register).setReadonly(false);
            if (register) {
                (_b = (0, Arrays_1.values)((_a = register === null || register === void 0 ? void 0 : register.settings) !== null && _a !== void 0 ? _a : {})) === null || _b === void 0 ? void 0 : _b.forEach(function (setting) {
                    if ((setting === null || setting === void 0 ? void 0 : setting.type) === "R") {
                        _this.getSafeSettingViewModel(register, setting).setReadonly(true);
                    }
                });
            }
            return _this;
        };
        /** Make a given setting in register editable */
        this.withEditableSetting = function (register, setting) {
            _this.getSafeSettingViewModel(register, setting).setReadonly(false);
            return _this;
        };
        /** Make a given interrupt editable */
        this.withEditableInterrupt = function (interrupt) {
            _this.getSafeInterruptViewModel(interrupt).setReadonly(false);
            return _this;
        };
        this.getSafeRegisterViewModel = function (register) {
            var _a;
            return (_a = _this.getRegisterViewModel(register !== null && register !== void 0 ? register : throwError("Invalid register parameter."))) !== null && _a !== void 0 ? _a : throwError("Cannot get register view model for '".concat(register.name, "'. Not found in this module."));
        };
        this.getSafeInterruptViewModel = function (interrupt) {
            var _a;
            return (_a = _this.getInterruptViewModel(interrupt !== null && interrupt !== void 0 ? interrupt : throwError("Invalid interrupt parameter."))) !== null && _a !== void 0 ? _a : throwError("Cannot get interrupt view model for '".concat(interrupt.name, "'. Not found in this module."));
        };
        this.getSafeSettingViewModel = function (register, setting) {
            var _a;
            return (_a = _this.getSafeRegisterViewModel(register).getSettingViewModel(setting !== null && setting !== void 0 ? setting : throwError("Invalid setting parameter."))) !== null && _a !== void 0 ? _a : throwError("Cannot get setting view model for '".concat(setting.name, "'. Not found in this module."));
        };
        this.getRegisterViewModel = function (register) {
            var name = register.name;
            return (0, Arrays_1.find)(_this.registers, function (rv) { return rv.getRegister().name === name; });
        };
        this.getInterruptViewModel = function (interrupt) {
            var name = interrupt.name;
            return (0, Arrays_1.find)(_this.interrupts, function (rv) { return rv.getInterrupt().name === name; });
        };
        this.createRegisterView = function (register) {
            var registerValue = register.getValue() || 0;
            var schemaBuilder = new ViewSchemaBuilder_1.ViewSchemaBuilder()
                .withSchema({
                type: "object",
                title: register.getName() +
                    " : " +
                    CalculateRegisterValue_1.default.toHexString(registerValue),
                description: register.getDescription(),
                properties: {},
            })
                .withUiSchema({})
                .withFormData({});
            register.forEachSetting(function (setting) {
                schemaBuilder.addChildComponent(setting.getName(), _this.createSettingView(setting));
            });
            return schemaBuilder.build();
        };
        this.createSettingView = function (setting) {
            return setting.hasOptions()
                ? _this.createHasOptionsViewSchema(setting)
                : _this.getNoOptionsViewSchema(setting);
        };
        this.createInterruptView = function () {
            var schemaBuilder = new ViewSchemaBuilder_1.ViewSchemaBuilder()
                .withSchema({
                type: "object",
                title: "Interrupts",
                properties: {},
            })
                .withUiSchema({})
                .withFormData({});
            _this.interrupts.forEach(function (int) {
                schemaBuilder.addChildComponent(int.getInterrupt().name, _this.createInterruptViewSchema(int));
            });
            return schemaBuilder.build();
        };
        this.module = module;
        this.registers = this.createRegisterViewModelForEachRegister(module);
        this.interrupts = this.createInterruptViewModelForEachInterrupt(module);
    }
    CreateRegisterView.prototype.createRegisterViewModelForEachRegister = function (module) {
        var _a;
        var models = [];
        var registers = (_a = module.registers) !== null && _a !== void 0 ? _a : {};
        Object.keys(registers).forEach(function (registerKey) {
            models.push(new Model_1.RegisterViewModel(registers[registerKey]));
        });
        return models;
    };
    CreateRegisterView.prototype.createInterruptViewModelForEachInterrupt = function (module) {
        var _a;
        var models = [];
        var interrupts = (_a = module.interrupts) !== null && _a !== void 0 ? _a : {};
        Object.keys(interrupts).forEach(function (interruptKey) {
            models.push(new Model_1.InterruptViewModel(interrupts[interruptKey]));
        });
        return models;
    };
    CreateRegisterView.prototype.getNoOptionsViewSchema = function (setting) {
        var _a;
        var uiSchemaBuilder = new ViewSchemaBuilder_1.UiSchemaBuilder()
            .withReadonlyValue(setting.getIsReadonly())
            .withUiHelp("".concat(setting.getName(), ": ") + ((_a = setting.getDescription()) !== null && _a !== void 0 ? _a : ""));
        return {
            schema: this.createSettingViewSchema(setting),
            uiSchema: setting.getMaxValue() > 1
                ? uiSchemaBuilder.build()
                : this.getBinarySettingUiSchema(setting),
            formData: setting.mapToOptionNameIfExists(setting.getValue()),
        };
    };
    CreateRegisterView.prototype.createHasOptionsViewSchema = function (setting) {
        var _a, _b;
        var schemaBuilder = new ViewSchemaBuilder_1.SchemaBuilder("string", (_a = (0, Setting_1.getBitLabel)(setting.getSetting())) !== null && _a !== void 0 ? _a : "")
            .withEnum(setting.getOptionNames())
            .withDefault(setting.mapToOptionNameIfExists(setting.getValue()));
        var uiSchemaBuilder = new ViewSchemaBuilder_1.UiSchemaBuilder()
            .withReadonlyValue(setting.getIsReadonly())
            .withUiHelp("".concat(setting.getName(), ": ") + ((_b = setting.getDescription()) !== null && _b !== void 0 ? _b : ""));
        return {
            schema: schemaBuilder.build(),
            uiSchema: uiSchemaBuilder.build(),
            formData: setting.mapToOptionNameIfExists(setting.getValue()),
        };
    };
    CreateRegisterView.prototype.createSettingViewSchema = function (setting) {
        var _a;
        var schema = new ViewSchemaBuilder_1.SchemaBuilder("integer", (_a = (0, Setting_1.getBitLabel)(setting.getSetting())) !== null && _a !== void 0 ? _a : "").withDefault(setting.mapToOptionNameIfExists(setting.getPORDefault()));
        setting.getMaxValue() > 1
            ? schema.withMaximum(setting.getMaxValue()).withMinimum(0)
            : schema.withEnum([0, 1]);
        return schema.build();
    };
    CreateRegisterView.prototype.createInterruptViewSchema = function (interrupt) {
        var _a;
        var schema = new ViewSchemaBuilder_1.SchemaBuilder("string", interrupt.getInterrupt().name)
            .withEnum(interrupt.getOptions())
            .withDefault(interrupt.getValue());
        var uiSchemaBuilder = new ViewSchemaBuilder_1.UiSchemaBuilder().withReadonlyValue(interrupt.getIsReadonly());
        return {
            schema: schema.build(),
            uiSchema: uiSchemaBuilder.build(),
            formData: (_a = interrupt.getValue()) !== null && _a !== void 0 ? _a : {},
        };
    };
    CreateRegisterView.prototype.getBinarySettingUiSchema = function (setting) {
        return new ViewSchemaBuilder_1.UiSchemaBuilder()
            .withReadonlyValue(setting.getIsReadonly())
            .withWidget("radio")
            .withOptions({ inline: true })
            .build();
    };
    /** Creates Register View Builder for the given module. */
    CreateRegisterView.for = function (moduleDescription) {
        if (!moduleDescription) {
            throwError("Creation failed. Invalid module parameter.");
        }
        if (!moduleDescription.registers && !moduleDescription.interrupts) {
            throwError("Creation failed for ".concat(moduleDescription.name, ". Input module contains no registers or interrupts."));
        }
        return new CreateRegisterView(moduleDescription);
    };
    return CreateRegisterView;
}());
exports.CreateRegisterView = CreateRegisterView;
//# sourceMappingURL=CreateRegisterView.js.map

/***/ }),

/***/ "./node_modules/@microchip/scf-register-view-helper/lib/Model.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@microchip/scf-register-view-helper/lib/Model.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SettingViewModel = exports.RegisterViewModel = exports.InterruptViewModel = void 0;
var CalculateRegisterValue_1 = __importDefault(__webpack_require__(/*! @microchip/scf-device/lib/CalculateRegisterValue */ "./node_modules/@microchip/scf-device/lib/CalculateRegisterValue.js"));
var Arrays_1 = __webpack_require__(/*! @microchip/scf-device/lib/util/Arrays */ "./node_modules/@microchip/scf-device/lib/util/Arrays.js");
var Setting_1 = __webpack_require__(/*! @microchip/scf-device/lib/Setting */ "./node_modules/@microchip/scf-device/lib/Setting.js");
var InterruptViewModel = /** @class */ (function () {
    function InterruptViewModel(interrupt) {
        var _this = this;
        this.isReadOnly = true;
        this.getInterrupt = function () { return _this.interrupt; };
        this.setValue = function (value) {
            _this.value = value;
        };
        this.getValue = function () { return _this.value; };
        this.setOptions = function (options) {
            _this.options = options;
        };
        this.getOptions = function () { var _a; return (_a = _this.options) !== null && _a !== void 0 ? _a : []; };
        this.getIsReadonly = function () { return _this.isReadOnly; };
        this.setReadonly = function (isReadOnly) {
            _this.isReadOnly = isReadOnly;
        };
        if (!interrupt) {
            throw new Error("IllegalInputArgument for 'interrupt' in InterruptValue");
        }
        this.interrupt = interrupt;
    }
    return InterruptViewModel;
}());
exports.InterruptViewModel = InterruptViewModel;
var RegisterViewModel = /** @class */ (function () {
    function RegisterViewModel(register) {
        var _this = this;
        this.settings = [];
        this.getSettings = function () { return _this.settings; };
        this.getSettingViewModel = function (setting) {
            var name = setting.name;
            return (0, Arrays_1.find)(_this.settings, function (rv) { return rv.getSetting().name === name; });
        };
        this.forEachSetting = function (doThis) {
            _this.settings.forEach(doThis);
        };
        this.getRegister = function () { return _this.register; };
        this.getName = function () { return _this.register.name; };
        this.getDescription = function () { return _this.register.desc; };
        this.getValue = function () { return _this.value; };
        this.setValue = function (value) {
            _this.value = value;
        };
        this.setReadonly = function (value) {
            if (value === void 0) { value = true; }
            _this.forEachSetting(function (setting) { return setting.setReadonly(value); });
        };
        this.getDefaultValue = function () { return CalculateRegisterValue_1.default.for(_this.register).asNumber(); };
        this.getValueOrDefault = function () {
            var value = _this.getValue();
            return value !== null && value !== void 0 ? value : _this.getDefaultValue();
        };
        if (!register) {
            throw new Error("IllegalInputArgument for 'register' in RegisterValue");
        }
        this.register = register;
        if (register.settings) {
            this.settings = this.createSettingViewModels(register);
        }
    }
    RegisterViewModel.prototype.createSettingViewModels = function (register) {
        var _this = this;
        var _a;
        var models = [];
        var settings = (_a = register.settings) !== null && _a !== void 0 ? _a : {};
        Object.keys(settings).forEach(function (settingKey) {
            models.push(new SettingViewModel(settings[settingKey], _this.getValueOrDefault));
        });
        return RegisterViewModel.sortSettingsDescending(models);
    };
    /** Sorts the settings in descending order based on bit positions. */
    RegisterViewModel.sortSettingsDescending = function (settings) {
        var result = __spreadArray([], settings, true);
        result.sort(function (settingOne, settingTwo) {
            var _a, _b, _c, _d;
            var bitRangeOne = (_b = (_a = (0, Setting_1.getBitRange)(settingOne.getSetting())) === null || _a === void 0 ? void 0 : _a.high) !== null && _b !== void 0 ? _b : -1;
            var bitRangeTwo = (_d = (_c = (0, Setting_1.getBitRange)(settingTwo.getSetting())) === null || _c === void 0 ? void 0 : _c.high) !== null && _d !== void 0 ? _d : -1;
            return bitRangeTwo - bitRangeOne;
        });
        return result;
    };
    return RegisterViewModel;
}());
exports.RegisterViewModel = RegisterViewModel;
var SettingViewModel = /** @class */ (function () {
    function SettingViewModel(setting, getRegisterValue) {
        var _this = this;
        this.isReadonly = true;
        this.setReadonly = function (value) {
            if (value === void 0) { value = true; }
            _this.isReadonly = value;
        };
        this.getIsReadonly = function () { return _this.isReadonly; };
        this.getSetting = function () { return _this.setting; };
        this.getName = function () { return _this.setting.name; };
        this.getDescription = function () { return _this.setting.description; };
        this.getPORDefault = function () { return Number(_this.setting.porDefault); };
        this.getMask = function () { return Number(_this.setting.mask); };
        this.hasOptions = function () {
            return !!_this.setting.options;
        };
        this.getOptionNames = function () {
            return (0, Arrays_1.map)(nullSafe(_this.setting.options), function (option) { return option.name; });
        };
        this.mapToOptionNameIfExists = function (value) {
            var option = _this.getOptionForValue(value);
            return option !== undefined ? option.name : value;
        };
        this.getOptionForValue = function (value) {
            return (0, Arrays_1.find)(nullSafe(_this.setting.options), function (option) {
                var optionValue = option.value;
                return optionValue != undefined ? parseInt(optionValue) === value : false;
            });
        };
        this.getValue = function () {
            var value = _this.getRegisterValue();
            value &= _this.getMask();
            return (value >> _this.getShift()) >>> 0;
        };
        this.getShift = function () {
            var mask = _this.getMask();
            var shiftIndex = 0;
            while (!(mask & 0x1)) {
                mask = mask >> 1;
                shiftIndex++;
            }
            return shiftIndex;
        };
        this.getMaxValue = function () {
            var mask = _this.getMask();
            while (!(mask & 0x1)) {
                mask = mask >> 1;
            }
            return mask;
        };
        if (!setting) {
            throw new Error("SettingViewModel: Invalid input argument");
        }
        this.setting = setting;
        this.getRegisterValue = getRegisterValue;
    }
    return SettingViewModel;
}());
exports.SettingViewModel = SettingViewModel;
var nullSafe = function (array) { return array !== null && array !== void 0 ? array : []; };
//# sourceMappingURL=Model.js.map

/***/ }),

/***/ "./node_modules/@microchip/scf-register-view-helper/lib/ViewSchemaBuilder.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/@microchip/scf-register-view-helper/lib/ViewSchemaBuilder.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UiSchemaBuilder = exports.SchemaBuilder = exports.ViewSchemaBuilder = void 0;
var ViewSchemaBuilder = /** @class */ (function () {
    function ViewSchemaBuilder() {
        this.schema = {};
        this.uiSchema = {};
        this.formData = {};
        this.tabName = "main";
        this.expandGroupsByDefault = true;
    }
    ViewSchemaBuilder.prototype.withSchema = function (schema) {
        this.schema = schema;
        return this;
    };
    ViewSchemaBuilder.prototype.withUiSchema = function (uiSchema) {
        this.uiSchema = uiSchema;
        return this;
    };
    ViewSchemaBuilder.prototype.withFormData = function (formData) {
        this.formData = formData;
        return this;
    };
    ViewSchemaBuilder.prototype.withTabName = function (name) {
        this.tabName = name;
        return this;
    };
    ViewSchemaBuilder.prototype.withExpandedDefault = function (expandGroupsByDefault) {
        this.expandGroupsByDefault = expandGroupsByDefault;
        return this;
    };
    ViewSchemaBuilder.prototype.addChildComponent = function (childName, child) {
        var _a, _b, _c;
        this.schema = __assign(__assign({}, this.schema), { properties: __assign(__assign({}, this.schema.properties), (_a = {}, _a[childName] = child.schema, _a)) });
        this.uiSchema = __assign(__assign({}, this.uiSchema), (_b = {}, _b[childName] = child.uiSchema, _b));
        if (this.formData instanceof Object) {
            this.formData = __assign(__assign({}, this.formData), (_c = {}, _c[childName] = child.formData, _c));
        }
    };
    ViewSchemaBuilder.prototype.build = function () {
        return {
            schema: this.schema,
            uiSchema: this.uiSchema,
            formData: this.formData,
            name: this.tabName,
            expandGroupsByDefault: this.expandGroupsByDefault,
        };
    };
    return ViewSchemaBuilder;
}());
exports.ViewSchemaBuilder = ViewSchemaBuilder;
var SchemaBuilder = /** @class */ (function () {
    function SchemaBuilder(type, title) {
        this.title = title;
        this.type = type;
    }
    SchemaBuilder.prototype.withProperties = function (properties) {
        this.properties = properties;
        return this;
    };
    SchemaBuilder.prototype.withDefault = function (defaultValue) {
        this.default = defaultValue;
        return this;
    };
    SchemaBuilder.prototype.withMaximum = function (maximum) {
        this.maximum = maximum;
        return this;
    };
    SchemaBuilder.prototype.withMinimum = function (minimum) {
        this.minimum = minimum;
        return this;
    };
    SchemaBuilder.prototype.withEnum = function (vals) {
        this.enum = vals;
        return this;
    };
    SchemaBuilder.prototype.build = function () {
        return {
            type: this.type,
            title: this.title,
            properties: this.properties,
            default: this.default,
            maximum: this.maximum,
            minimum: this.minimum,
            enum: this.enum,
        };
    };
    return SchemaBuilder;
}());
exports.SchemaBuilder = SchemaBuilder;
var UiSchemaBuilder = /** @class */ (function () {
    function UiSchemaBuilder() {
    }
    UiSchemaBuilder.prototype.withReadonlyValue = function (isReadonly) {
        this.isReadOnly = isReadonly;
        return this;
    };
    UiSchemaBuilder.prototype.withWidget = function (widgetName) {
        this.widget = widgetName;
        return this;
    };
    UiSchemaBuilder.prototype.withOptions = function (options) {
        this.options = options;
        return this;
    };
    UiSchemaBuilder.prototype.withUiHelp = function (uiHelp) {
        this.uiHelp = uiHelp;
        return this;
    };
    UiSchemaBuilder.prototype.build = function () {
        return {
            "ui:readonly": this.isReadOnly,
            "ui:widget": this.widget,
            "ui:options": this.options,
            "ui:help": this.uiHelp,
        };
    };
    return UiSchemaBuilder;
}());
exports.UiSchemaBuilder = UiSchemaBuilder;
//# sourceMappingURL=ViewSchemaBuilder.js.map

/***/ }),

/***/ "./node_modules/@microchip/scf-validators/lib/Validators/CFunctionValidator.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/@microchip/scf-validators/lib/Validators/CFunctionValidator.js ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.getCFunctionValidator = void 0;
var cKeywords = [
    "auto",
    "const",
    "double",
    "float",
    "int",
    "short",
    "struct",
    "unsigned",
    "break",
    "continue",
    "else",
    "for",
    "long",
    "signed",
    "switch",
    "void",
    "case",
    "default",
    "enum",
    "goto",
    "register",
    "sizeof",
    "typedef",
    "volatile",
    "char",
    "do",
    "extern",
    "if",
    "return",
    "static",
    "union",
    "while",
];
var functionPattern = "(?=^([A-Za-z]\\S|_)\\w+$)";
var errorMessage = "Must be valid C function syntax.";
var doNotMatchKeywordsRegex = function () {
    return "(^(?!" + cKeywords.join("|") + ")).*";
};
var result = doNotMatchKeywordsRegex();
var pattern = {
    pattern: functionPattern + result,
};
exports.getCFunctionValidator = function () { return ({
    getRjsfValidation: function () { return pattern; },
    getCustomErrorMessage: function () { return errorMessage; },
    getValidation: function () { return ({
        name: "pattern",
        message: exports.getCFunctionValidator().getCustomErrorMessage(),
    }); },
}); };


/***/ }),

/***/ "./node_modules/@microchip/scf-validators/lib/Validators/HeaderPathValidator.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/@microchip/scf-validators/lib/Validators/HeaderPathValidator.js ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.getHeaderPathValidator = void 0;
//Matches file paths to any valid format. Matches both "\" and "/" as valid separators in file path.
//Extension ("[h]+") checks specifically for '.h' and can be extende to any if required.
//Does NOT match relative file paths.
var pathRegex = "^(([a-zA-Z]:)|((?:\\\\|.\\/?){1,2}\\w+)\\$?)((\\\\|\\/)(\\w[\\w ]*.*))+\\.([h]+)$";
var errorMessage = "Must be valid header path.";
var pathPattern = {
    pattern: pathRegex,
};
exports.getHeaderPathValidator = function () { return ({
    getRjsfValidation: function () { return pathPattern; },
    getCustomErrorMessage: function () { return errorMessage; },
    getValidation: function () { return ({
        name: "pattern",
        message: exports.getHeaderPathValidator().getCustomErrorMessage(),
    }); },
}); };


/***/ }),

/***/ "./node_modules/@microchip/scf-validators/lib/Validators/HexValidator.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@microchip/scf-validators/lib/Validators/HexValidator.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.getHexValidator = void 0;
var regexFormat = /^0x[\da-f]/i;
var ErrorMessages;
(function (ErrorMessages) {
    ErrorMessages["Format"] = "Must be valid hexadecimal number";
    ErrorMessages["Bounds"] = "Input must be ";
    ErrorMessages["BoundsDefault"] = "Input must be within bounds";
})(ErrorMessages || (ErrorMessages = {}));
var format = {
    hex: regexFormat,
};
exports.getHexValidator = function () { return ({
    getRjsfValidation: function () { return format; },
    getInvalidFormatErrorMessage: function () { return ErrorMessages.Format; },
    getBoundsErrorMessage: function (comparison, value) {
        return comparison && value
            ? ErrorMessages.Bounds + comparison + " " + value
            : ErrorMessages.BoundsDefault;
    },
    getFormatValidation: function () { return ({
        name: "format",
        message: exports.getHexValidator().getInvalidFormatErrorMessage(),
    }); },
    getMinValidation: function (comparison, value) { return ({
        name: "minimum",
        message: "" + exports.getHexValidator().getBoundsErrorMessage(comparison, value),
    }); },
    getMaxValidation: function (comparison, value) { return ({
        name: "maximum",
        message: "" + exports.getHexValidator().getBoundsErrorMessage(comparison, value),
    }); },
}); };


/***/ }),

/***/ "./node_modules/@microchip/scf-validators/lib/index.js":
/*!*************************************************************!*\
  !*** ./node_modules/@microchip/scf-validators/lib/index.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var CFunctionValidator_1 = __webpack_require__(/*! ./Validators/CFunctionValidator */ "./node_modules/@microchip/scf-validators/lib/Validators/CFunctionValidator.js");
Object.defineProperty(exports, "getCFunctionValidator", { enumerable: true, get: function () { return CFunctionValidator_1.getCFunctionValidator; } });
var HexValidator_1 = __webpack_require__(/*! ./Validators/HexValidator */ "./node_modules/@microchip/scf-validators/lib/Validators/HexValidator.js");
Object.defineProperty(exports, "getHexValidator", { enumerable: true, get: function () { return HexValidator_1.getHexValidator; } });
var HeaderPathValidator_1 = __webpack_require__(/*! ./Validators/HeaderPathValidator */ "./node_modules/@microchip/scf-validators/lib/Validators/HeaderPathValidator.js");
Object.defineProperty(exports, "getHeaderPathValidator", { enumerable: true, get: function () { return HeaderPathValidator_1.getHeaderPathValidator; } });


/***/ }),

/***/ "./node_modules/@microchip/spi-host-drv-interface/lib/package.json":
/*!*************************************************************************!*\
  !*** ./node_modules/@microchip/spi-host-drv-interface/lib/package.json ***!
  \*************************************************************************/
/*! exports provided: name, version, license, main, typings, scripts, husky, lint-staged, bitBucketRepository, repository, publishConfig, jest, dependencies, devDependencies, files, notificationEmail, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"name\":\"@microchip/spi-host-drv-interface\",\"version\":\"1.1.0\",\"license\":\"SEE LICENSE IN LICENSE.txt\",\"main\":\"lib/src/index.js\",\"typings\":\"./lib/src/index.d.ts\",\"scripts\":{\"build\":\"tsc\",\"test\":\"jest\",\"lint:nofix\":\"eslint \\\"./src/**/*.{ts,tsx}\\\" --quiet\",\"lint\":\"tsc --noEmit && yarn lint:nofix --fix\"},\"husky\":{\"hooks\":{\"pre-commit\":\"tsc --noEmit && lint-staged\"}},\"lint-staged\":{\"./src/**/*.{ts,tsx}\":[\"eslint --fix\"]},\"bitBucketRepository\":\"https://bitbucket.microchip.com/projects/CC16SCRIP/repos/spi-host-drv-interface/browse\",\"repository\":{\"type\":\"git\",\"url\":\"git+ssh://git@https://bitbucket.microchip.com/scm/cc16scrip/spi-host-drv-interface.git\"},\"publishConfig\":{\"registry\":\"https://artifacts.microchip.com/artifactory/api/npm/npm/\"},\"jest\":{\"testPathIgnorePatterns\":[\"/node_modules/\",\"/run/\",\"/lib/\"],\"modulePathIgnorePatterns\":[\"<rootDir>/run\"],\"preset\":\"ts-jest\",\"collectCoverage\":true},\"dependencies\":{\"@microchip/scf-common\":\"^3.17.0\",\"@microchip/scf-interface\":\"^1.4.0\",\"@microchip/spi-master-basic\":\"^1.3.0\"},\"devDependencies\":{\"@types/jest\":\"^24.0.14\",\"@types/node\":\"^12.0.10\",\"@typescript-eslint/eslint-plugin\":\"^2.27.0\",\"@typescript-eslint/parser\":\"^2.27.0\",\"eslint\":\"^6.8.0\",\"eslint-config-prettier\":\"^6.10.1\",\"eslint-plugin-prettier\":\"^3.1.2\",\"husky\":\"^4.2.4\",\"jest\":\"^24.8.0\",\"lint-staged\":\"^10.2.0\",\"prettier\":\"^2.0.4\",\"ts-jest\":\"^24.0.2\",\"typescript\":\"^3.8.3\"},\"files\":[\"lib/**/*\"],\"notificationEmail\":\"1d0dd98b.microchiptechnology.onmicrosoft.com@amer.teams.ms\"}");

/***/ }),

/***/ "./node_modules/@microchip/spi-host-drv-interface/lib/src/index.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@microchip/spi-host-drv-interface/lib/src/index.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var spi_host_drv_interface_1 = __webpack_require__(/*! ./spi-host-drv-interface */ "./node_modules/@microchip/spi-host-drv-interface/lib/src/spi-host-drv-interface.js");
Object.defineProperty(exports, "Interface", { enumerable: true, get: function () { return spi_host_drv_interface_1.Interface; } });
var spi_master_basic_1 = __webpack_require__(/*! @microchip/spi-master-basic */ "./node_modules/@microchip/spi-master-basic/lib/src/index.js");
Object.defineProperty(exports, "getSpiMasterInterfaceApiStructure", { enumerable: true, get: function () { return spi_master_basic_1.getSpiMasterInterfaceApiStructure; } });
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/@microchip/spi-host-drv-interface/lib/src/spi-host-drv-interface.js":
/*!******************************************************************************************!*\
  !*** ./node_modules/@microchip/spi-host-drv-interface/lib/src/spi-host-drv-interface.js ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Interface = void 0;
var pkgJson = __importStar(__webpack_require__(/*! ../package.json */ "./node_modules/@microchip/spi-host-drv-interface/lib/package.json"));
var scf_interface_1 = __webpack_require__(/*! @microchip/scf-interface */ "./node_modules/@microchip/scf-interface/lib/index.js");
var spi_master_basic = __importStar(__webpack_require__(/*! @microchip/spi-master-basic */ "./node_modules/@microchip/spi-master-basic/lib/src/index.js"));
var getInterfaceId = function () {
    return {
        name: scf_interface_1.getInterfaceName(pkgJson),
        version: scf_interface_1.getInterfaceVersion(pkgJson),
    };
};
var createMock = function () {
    return {
        interfaceId: getInterfaceId(),
        payload: {
            customName: "SPI1",
            interfaceApi: spi_master_basic.getSpiMasterInterfaceApiStructure("SPI1"),
            moduleInstance: 1,
            moduleName: "SPI1",
            hasPolling: true,
            hasInterrupt: true,
            interruptDriven: false,
            DataInputSamplePointOptions: ["Middle"],
            spiMasterPayloadData: getMasterPayload(),
        },
        args: {
            requestId: {
                importerName: "SPIImporter",
                customName: "SPI1",
                spiMasterArgData: [
                    {
                        configName: "tempSensor",
                        reqSpeed_Hz: 20000,
                        dataInputSample: "Middle",
                        spiMode: "Mode 0",
                    },
                ],
                interruptDriven: false,
            },
        },
    };
};
var getMasterPayload = function () {
    var masterPayloadData = [];
    var masterPayload = {
        configName: "tempSensor",
        actSpeed_Hz: 125000,
        dataInputSample: "Middle",
        spiMode: "Mode 0",
    };
    masterPayloadData.push(masterPayload);
    return masterPayloadData;
};
var createPrototypeImport = function () {
    return {
        interfaceId: getInterfaceId(),
    };
};
var createPrototypeExport = function () {
    return {
        interfaces: [{ interfaceId: getInterfaceId() }],
    };
};
exports.Interface = {
    createPrototypeExport: createPrototypeExport,
    createPrototypeImport: createPrototypeImport,
    getInterfaceId: getInterfaceId,
    createMock: createMock,
};
//# sourceMappingURL=spi-host-drv-interface.js.map

/***/ }),

/***/ "./node_modules/@microchip/spi-master-basic/lib/package.json":
/*!*******************************************************************!*\
  !*** ./node_modules/@microchip/spi-master-basic/lib/package.json ***!
  \*******************************************************************/
/*! exports provided: name, version, license, main, typings, scripts, husky, lint-staged, bitBucketRepository, repository, publishConfig, jest, dependencies, devDependencies, files, notificationEmail, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"name\":\"@microchip/spi-master-basic\",\"version\":\"1.3.0\",\"license\":\"SEE LICENSE IN LICENSE.txt\",\"main\":\"lib/src/index.js\",\"typings\":\"./lib/src/index.d.ts\",\"scripts\":{\"build\":\"tsc\",\"test\":\"jest\",\"lint:nofix\":\"eslint \\\"./src/**/*.{ts,tsx}\\\" --quiet\",\"lint\":\"tsc --noEmit && yarn lint:nofix --fix\"},\"husky\":{\"hooks\":{\"pre-commit\":\"tsc --noEmit && lint-staged\"}},\"lint-staged\":{\"./src/**/*.{ts,tsx}\":[\"eslint --fix\"]},\"bitBucketRepository\":\"https://bitbucket.microchip.com/projects/SCF/repos/spi-master-basic/browse\",\"repository\":{\"type\":\"git\",\"url\":\"git+ssh://git@https://bitbucket.microchip.com/scm/scf/spi-master-basic.git\"},\"publishConfig\":{\"registry\":\"https://artifacts.microchip.com/artifactory/api/npm/npm/\"},\"jest\":{\"testPathIgnorePatterns\":[\"/node_modules/\",\"/run/\",\"/lib/\"],\"modulePathIgnorePatterns\":[\"<rootDir>/run\"],\"preset\":\"ts-jest\",\"collectCoverage\":true},\"dependencies\":{\"@microchip/scf-common\":\"^3.5.0\",\"@microchip/scf-interface\":\"^1.4.0\"},\"devDependencies\":{\"@types/jest\":\"^24.0.14\",\"@types/node\":\"^12.0.10\",\"@typescript-eslint/eslint-plugin\":\"^2.27.0\",\"@typescript-eslint/parser\":\"^2.27.0\",\"eslint\":\"^6.8.0\",\"eslint-config-prettier\":\"^6.10.1\",\"eslint-plugin-prettier\":\"^3.1.2\",\"husky\":\"^4.2.4\",\"jest\":\"^24.8.0\",\"lint-staged\":\"^10.2.0\",\"prettier\":\"^2.0.4\",\"ts-jest\":\"^24.0.2\",\"typescript\":\"^3.8.3\"},\"files\":[\"lib/**/*\"],\"notificationEmail\":\"1d0dd98b.microchiptechnology.onmicrosoft.com@amer.teams.ms\"}");

/***/ }),

/***/ "./node_modules/@microchip/spi-master-basic/lib/src/api.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@microchip/spi-master-basic/lib/src/api.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.getSpiAPI = function () {
    return {
        Initialize: {
            name: "Initialize",
            returns: "void",
        },
        Deinitialize: {
            name: "Deinitialize",
            returns: "void",
        },
        Open: {
            name: "Open",
            returns: "bool",
            arguments: [{ type: "uint8_t", name: "spiConfigIndex" }],
        },
        Close: {
            name: "Close",
            returns: "void",
        },
        ByteExchange: {
            name: "ByteExchange",
            returns: "uint8_t",
            arguments: [{ type: "uint8_t", name: "byteData" }],
        },
        BufferExchange: {
            name: "BufferExchange",
            returns: "void",
            arguments: [
                { type: "void *", name: "bufferData" },
                { type: "size_t", name: "bufferSize" },
            ],
        },
        BufferWrite: {
            name: "BufferWrite",
            returns: "void",
            arguments: [
                { type: "void *", name: "bufferData" },
                { type: "size_t", name: "bufferSize" },
            ],
        },
        BufferRead: {
            name: "BufferRead",
            returns: "void",
            arguments: [
                { type: "void *", name: "bufferData" },
                { type: "size_t", name: "bufferSize" },
            ],
        },
        ByteWrite: {
            name: "ByteWrite",
            returns: "void",
            arguments: [{ type: "uint8_t", name: "byteData" }],
        },
        ByteRead: {
            name: "ByteRead",
            returns: "uint8_t",
        },
        IsRxReady: {
            name: "IsRxReady",
            returns: "bool",
        },
        IsTxReady: {
            name: "IsTxReady",
            returns: "bool",
        },
        RxCompleteCallbackRegister: {
            name: "RxCompleteCallbackRegister",
            returns: "void",
            arguments: [{ type: "void (*callback)(void)", name: "callback" }],
        },
        TxCompleteCallbackRegister: {
            name: "TxCompleteCallbackRegister",
            returns: "void",
            arguments: [{ type: "void (*callback)(void)", name: "callback" }],
        },
    };
};
exports.getSpiHeaderFileData = function (moduleName) {
    return [
        {
            name: moduleName.toLowerCase() + ".h",
            path: "mcc_generated_files/spi_host/",
        },
        {
            name: "spi_host_interface.h",
            path: "mcc_generated_files/spi_host/",
        },
    ];
};
//# sourceMappingURL=api.js.map

/***/ }),

/***/ "./node_modules/@microchip/spi-master-basic/lib/src/index.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@microchip/spi-master-basic/lib/src/index.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var spi_master_basic_1 = __webpack_require__(/*! ./spi-master-basic */ "./node_modules/@microchip/spi-master-basic/lib/src/spi-master-basic.js");
exports.Interface = spi_master_basic_1.Interface;
exports.getSpiMasterInterfaceApiStructure = spi_master_basic_1.getSpiMasterInterfaceApiStructure;
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/@microchip/spi-master-basic/lib/src/spi-master-basic.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@microchip/spi-master-basic/lib/src/spi-master-basic.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var InterfaceTypes = __importStar(__webpack_require__(/*! @microchip/scf-interface */ "./node_modules/@microchip/scf-interface/lib/index.js"));
var pkgJson = __importStar(__webpack_require__(/*! ../package.json */ "./node_modules/@microchip/spi-master-basic/lib/package.json"));
var scf_interface_1 = __webpack_require__(/*! @microchip/scf-interface */ "./node_modules/@microchip/scf-interface/lib/index.js");
var api_1 = __webpack_require__(/*! ./api */ "./node_modules/@microchip/spi-master-basic/lib/src/api.js");
exports.getSpiMasterInterfaceApiStructure = function (moduleName) {
    return {
        api: api_1.getSpiAPI(),
        headerFiles: api_1.getSpiHeaderFileData(moduleName),
    };
};
var getInterfaceId = function () {
    return {
        name: scf_interface_1.getInterfaceName(pkgJson),
        version: scf_interface_1.getInterfaceVersion(pkgJson),
    };
};
var createMock = function () {
    return {
        interfaceId: getInterfaceId(),
        payload: {
            interfaceApi: exports.Interface.createFirmwareApi("SPI_Master", [
                { name: "spi.h", path: "include/" },
            ]),
            moduleInstance: 1,
            hasPolling: true,
            hasInterrupt: true,
            interruptDriven: false,
            DataInputSamplePointOptions: ["Middle"],
            moduleName: "SPI1",
            spiMasterPayloadData: getMasterPayload(),
        },
        args: {
            requestId: {
                spiMasterArgData: [
                    {
                        configName: "tempSensor",
                        reqSpeed_Hz: 20000,
                        dataInputSample: "Middle",
                        spiMode: "Mode 0",
                    },
                ],
                interruptDriven: false,
            },
        },
    };
};
var getMasterPayload = function () {
    var masterPayloadData = [];
    var masterPayload = {
        configName: "sensor",
        actSpeed_Hz: 125000,
        dataInputSample: "Middle",
        spiMode: "Mode 0",
    };
    masterPayloadData.push(masterPayload);
    return masterPayloadData;
};
exports.createApi = function (prefix) {
    return {
        Initialize: {
            name: prefix + "_Initialize",
            returns: "void",
        },
        Deinitialize: {
            name: prefix + "_Deinitialize",
            returns: "void",
        },
        Open: {
            name: prefix + "_Open",
            returns: "bool",
            arguments: [{ type: "uint8_t", name: "spiConfigIndex" }],
        },
        Close: {
            name: prefix + "_Close",
            returns: "void",
        },
        ByteExchange: {
            name: prefix + "_ByteExchange",
            returns: "uint8_t",
            arguments: [{ type: "uint8_t", name: "byteData" }],
        },
        BufferExchange: {
            name: prefix + "_BufferExchange",
            returns: "void",
            arguments: [
                { type: "void *", name: "bufferData" },
                { type: "size_t", name: "bufferSize" },
            ],
        },
        BufferWrite: {
            name: prefix + "_BufferWrite",
            returns: "void",
            arguments: [
                { type: "void *", name: "bufferData" },
                { type: "size_t", name: "bufferSize" },
            ],
        },
        BufferRead: {
            name: prefix + "_BufferRead",
            returns: "void",
            arguments: [
                { type: "void *", name: "bufferData" },
                { type: "size_t", name: "bufferSize" },
            ],
        },
        ByteWrite: {
            name: prefix + "_ByteWrite",
            returns: "void",
            arguments: [{ type: "uint8_t", name: "byteData" }],
        },
        ByteRead: {
            name: prefix + "_ByteRead",
            returns: "uint8_t",
        },
        IsRxReady: {
            name: prefix + "_IsRxReady",
            returns: "bool",
        },
        IsTxReady: {
            name: prefix + "_IsTxReady",
            returns: "bool",
        },
        RxCompleteCallbackRegister: {
            name: prefix + "_RxCompleteCallbackRegister",
            returns: "void",
            arguments: [{ type: "void (*callback)(void)", name: "callback" }],
        },
        TxCompleteCallbackRegister: {
            name: prefix + "_TxCompleteCallbackRegister",
            returns: "void",
            arguments: [{ type: "void (*callback)(void)", name: "callback" }],
        },
    };
};
var createPrototypeImport = function () {
    return {
        interfaceId: getInterfaceId(),
    };
};
var createPrototypeExport = function () {
    return {
        interfaces: [{ interfaceId: getInterfaceId() }],
    };
};
var createFirmwareApi = function (moduleName, headerFiles, createCustomApi) {
    var prefix = moduleName ? moduleName : "undefined";
    var api = createCustomApi ? createCustomApi() : exports.createApi(prefix);
    return {
        api: api,
        simpleApi: InterfaceTypes.buildSimpleApi(api),
        headerFiles: headerFiles !== null && headerFiles !== void 0 ? headerFiles : [
            { name: (moduleName === null || moduleName === void 0 ? void 0 : moduleName.toLowerCase()) + "_interface.h", path: "include/" },
        ],
    };
};
exports.Interface = {
    createPrototypeExport: createPrototypeExport,
    createPrototypeImport: createPrototypeImport,
    getInterfaceId: getInterfaceId,
    createMock: createMock,
    createFirmwareApi: createFirmwareApi,
};
//# sourceMappingURL=spi-master-basic.js.map

/***/ }),

/***/ "./src/CreatorFunctions.ts":
/*!*********************************!*\
  !*** ./src/CreatorFunctions.ts ***!
  \*********************************/
/*! exports provided: getCreatorFunctions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCreatorFunctions", function() { return getCreatorFunctions; });
var getCreatorFunctions = function getCreatorFunctions() {
  return {
    shouldImport: shouldImport,
    getCreatorImportArgs: getCreatorImportArgs
  };
};

var shouldImport = function shouldImport(importKey, state) {
  return true;
};

var getCreatorImportArgs = function getCreatorImportArgs(importKey, state) {
  return undefined;
};

/***/ }),

/***/ "./src/DerivedData.ts":
/*!****************************!*\
  !*** ./src/DerivedData.ts ***!
  \****************************/
/*! exports provided: getDerivedData, MyDerivedData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDerivedData", function() { return getDerivedData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyDerivedData", function() { return MyDerivedData; });
/* harmony import */ var _microchip_scf_common_lib_Processor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @microchip/scf-common/lib/Processor */ "./node_modules/@microchip/scf-common/lib/Processor.js");
/* harmony import */ var _microchip_scf_common_lib_Processor__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_microchip_scf_common_lib_Processor__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _SpiDataTable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SpiDataTable */ "./src/SpiDataTable.tsx");
/* harmony import */ var _microchip_scf_validators_lib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @microchip/scf-validators/lib */ "./node_modules/@microchip/scf-validators/lib/index.js");
/* harmony import */ var _microchip_scf_validators_lib__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_microchip_scf_validators_lib__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _exports_spiHostDrvInterface__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./exports/spiHostDrvInterface */ "./src/exports/spiHostDrvInterface.ts");
/* harmony import */ var _imports_spiMasterBasic__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./imports/spiMasterBasic */ "./src/imports/spiMasterBasic.ts");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






var getDerivedData = function getDerivedData(dataModel) {
  if (dataModel) {
    return new MyDerivedData(dataModel);
  }

  return new EmptyDerivedData();
}; //This data will be used at the creator stage and it relies on only the state

var EmptyDerivedData = function EmptyDerivedData() {
  _classCallCheck(this, EmptyDerivedData);

  _defineProperty(this, "getMyFunctions", function () {
    return {};
  });

  _defineProperty(this, "getModel", function () {
    return undefined;
  });
};

var MyDerivedData = function MyDerivedData(dataModel) {
  var _this = this;

  _classCallCheck(this, MyDerivedData);

  _defineProperty(this, "dataModel", void 0);

  _defineProperty(this, "cValidator", Object(_microchip_scf_validators_lib__WEBPACK_IMPORTED_MODULE_2__["getCFunctionValidator"])());

  _defineProperty(this, "getMyFunctions", function () {
    return {
      moduleName: _this.getModuleName,
      alerts: _this.getMyAlerts,
      basic_spi_master_args: _this.getBasicSPIMasterArgs,
      basic_spi_master_results: _this.getBasicSPIMasterResults,
      importOptionLabel: _this.friendlyImportOptionLabels,
      importName: _this.friendlyImportName,
      overrideDefaultValues: _this.overrideDefaultValue,
      overrideTableOptions: _this.overrideTableOption,
      filterImports: _this.filterMyImports,
      isVisible: _this.isComponentVisible,
      isEnabled: _this.isComponentEnabled,
      getActiveName: _this.getActiveName,
      customNameValidator: _this.customNameValidator,
      getCustomUiErrors: _this.getCustomUiErrors,
      "spi-host-drv-interface_payload": _this.getSpiHostDrvPayload,
      spiHostDrvInterfaceTable: _this.getSpiHostDrvInterfaceTable,
      spiHostTable: _this.getSpiHostTable,
      isSpiInterfaceTableUsed: _this.isSpiInterfaceTableUsed,
      getDynamicConfigData: _this.getDynamicConfigData,
      overrideModuleLevelHelp: _this.overrideModuleLevelHelp
    };
  });

  _defineProperty(this, "overrideModuleLevelHelp", function () {
    var _this$dataModel$getIm, _this$dataModel$getIm2;

    var deviceArch = (_this$dataModel$getIm = (_this$dataModel$getIm2 = _this.dataModel.getImportValue("device_meta")) === null || _this$dataModel$getIm2 === void 0 ? void 0 : _this$dataModel$getIm2.architecture) !== null && _this$dataModel$getIm !== void 0 ? _this$dataModel$getIm : "DSPIC33";

    switch (deviceArch) {
      case "DSPIC33A":
        return {
          url: "v2/keyword-lookup?keyword=SPI_HOST_33A_MELODY_DRIVER&version=latest&redirect=true",
          tooltip: "Click here to open SPI API documentation"
        };

      case "DSPIC33":
      default:
        return {
          url: "v2/keyword-lookup?keyword=SPI_HOST_MELODY_DRIVER&version=latest&redirect=true",
          tooltip: "Click here to open SPI API documentation"
        };
    }
  });

  _defineProperty(this, "getSpiHostDrvInterfaceTable", function (table, model, tab) {
    var rowData = Object(_SpiDataTable__WEBPACK_IMPORTED_MODULE_1__["createDriverInterfaceTableRowData"])(_this.getModel());
    return _this.formatTableRowData(rowData);
  });

  _defineProperty(this, "isSpiInterfaceTableUsed", function () {
    return Object(_SpiDataTable__WEBPACK_IMPORTED_MODULE_1__["getDriverInterfaceRows"])(_this.dataModel).length > 0;
  });

  _defineProperty(this, "isComponentEnabled", function (componentName) {
    if (componentName === "interruptDriven") {
      var processedPayloadVal = _this.getBasicSpiMasterPayload();

      if ((processedPayloadVal === null || processedPayloadVal === void 0 ? void 0 : processedPayloadVal.hasPolling) && (processedPayloadVal === null || processedPayloadVal === void 0 ? void 0 : processedPayloadVal.hasInterrupt)) {
        return true;
      }

      return false;
    }

    return true;
  });

  _defineProperty(this, "getSpiHostTable", function (table, model, tab) {
    var rowData = _this.getTableRowData();

    return _this.formatTableRowData(rowData);
  });

  _defineProperty(this, "getBasicSpiMasterPayload", function () {
    return _this.dataModel.getImportValue(_imports_spiMasterBasic__WEBPACK_IMPORTED_MODULE_4__["BASIC_SPI_MASTER_INTERFACE"]);
  });

  _defineProperty(this, "overrideTableOption", function (tableName, componentName) {
    var options = [];

    if (tableName === "spiHostTable" && componentName === "spiSamplePt") {
      var processedPayloadVal = _this.getBasicSpiMasterPayload();

      if ((processedPayloadVal === null || processedPayloadVal === void 0 ? void 0 : processedPayloadVal.dataInputSamplePointOptions) != undefined) {
        options = processedPayloadVal === null || processedPayloadVal === void 0 ? void 0 : processedPayloadVal.dataInputSamplePointOptions;
      }
    }

    return options;
  });

  _defineProperty(this, "formatTableRowData", function (rowData) {
    var formattedRowData = rowData.map(function (row) {
      return row;
    });

    var processedPayloadVal = _this.getBasicSpiMasterPayload();

    if (processedPayloadVal === null || processedPayloadVal === void 0 ? void 0 : processedPayloadVal.spiMasterPayloadData) {
      var spiMasterPayloadData = processedPayloadVal.spiMasterPayloadData;
      var configNames = formattedRowData.map(function (data) {
        return data.configName;
      });
      var list = spiMasterPayloadData.filter(function (rowData) {
        var _rowData$configName;

        return configNames.indexOf((_rowData$configName = rowData === null || rowData === void 0 ? void 0 : rowData.configName) !== null && _rowData$configName !== void 0 ? _rowData$configName : "") != -1;
      });

      for (var i = 0; i < list.length; i++) {
        var _list$i;

        if ((_list$i = list[i]) === null || _list$i === void 0 ? void 0 : _list$i.actSpeed_Hz) {
          formattedRowData[i].actSpeed = list[i].actSpeed_Hz / 1000;
        }
      }
    }

    return formattedRowData;
  });

  _defineProperty(this, "getActiveName", function () {
    var _this$dataModel2;

    var processedPayloadVal = _this.getBasicSpiMasterPayload();

    if ((processedPayloadVal === null || processedPayloadVal === void 0 ? void 0 : processedPayloadVal.moduleInstance) != undefined) {
      var _this$dataModel$getCo, _this$dataModel;

      return (_this$dataModel$getCo = (_this$dataModel = _this.dataModel) === null || _this$dataModel === void 0 ? void 0 : _this$dataModel.getComponentValue("customName")) !== null && _this$dataModel$getCo !== void 0 ? _this$dataModel$getCo : "";
    }

    return ((_this$dataModel2 = _this.dataModel) === null || _this$dataModel2 === void 0 ? void 0 : _this$dataModel2.getComponentValue("customName")) + "(None)";
  });

  _defineProperty(this, "isComponentVisible", function (componentName) {
    if (componentName === "customName") {
      return true;
    }

    return undefined;
  });

  _defineProperty(this, "customNameValidator", function () {
    return {
      pattern: _this.cValidator.getRjsfValidation().pattern
    };
  });

  _defineProperty(this, "getCustomUiErrors", function (componentName) {
    if (componentName === "customName") {
      return [{
        name: "pattern",
        message: _this.cValidator.getCustomErrorMessage()
      }];
    }
  });

  _defineProperty(this, "filterMyImports", function (imports) {
    var _filteredImports$basi;

    var filteredImports = _this.dataModel.filterImportBySetting(imports, _imports_spiMasterBasic__WEBPACK_IMPORTED_MODULE_4__["BASIC_SPI_MASTER_INTERFACE"], function (option) {
      return true;
    });

    if (filteredImports === null || filteredImports === void 0 ? void 0 : (_filteredImports$basi = filteredImports.basic_spi_master) === null || _filteredImports$basi === void 0 ? void 0 : _filteredImports$basi.options) {
      filteredImports.basic_spi_master.options.sort(function (importOption1, importOption2) {
        return importOption1.payload.moduleInstance > importOption2.payload.moduleInstance ? 1 : -1;
      });
    }

    return filteredImports;
  });

  _defineProperty(this, "friendlyImportName", function (importKey) {
    if (importKey === _imports_spiMasterBasic__WEBPACK_IMPORTED_MODULE_4__["BASIC_SPI_MASTER_INTERFACE"]) {
      return "SPI Host";
    }

    return "";
  });

  _defineProperty(this, "friendlyImportOptionLabels", function (importKey, option) {
    var _option$payload;

    if (importKey === _imports_spiMasterBasic__WEBPACK_IMPORTED_MODULE_4__["BASIC_SPI_MASTER_INTERFACE"] && (option === null || option === void 0 ? void 0 : (_option$payload = option.payload) === null || _option$payload === void 0 ? void 0 : _option$payload.moduleName)) {
      return option.payload.moduleName;
    }

    return "";
  });

  _defineProperty(this, "getSpiHostDrvPayload", function () {
    var processedPayloadVal = _this.getBasicSpiMasterPayload();

    if (processedPayloadVal) {
      return _objectSpread(_objectSpread({}, processedPayloadVal), {}, {
        customName: _this.getActiveName()
      });
    }
  });

  _defineProperty(this, "getBasicSPIMasterArgs", function () {
    return Object(_imports_spiMasterBasic__WEBPACK_IMPORTED_MODULE_4__["getBasicSPIMasterArgs"])(_this.dataModel, _this.getTableRowData());
  });

  _defineProperty(this, "getTableRowData", function () {
    var _this$dataModel3, _this$dataModel3$getS, _this$dataModel3$getS2, _this$dataModel3$getS3;

    var tableState = (_this$dataModel3 = _this.dataModel) === null || _this$dataModel3 === void 0 ? void 0 : (_this$dataModel3$getS = _this$dataModel3.getState()) === null || _this$dataModel3$getS === void 0 ? void 0 : (_this$dataModel3$getS2 = _this$dataModel3$getS.main) === null || _this$dataModel3$getS2 === void 0 ? void 0 : (_this$dataModel3$getS3 = _this$dataModel3$getS2.software) === null || _this$dataModel3$getS3 === void 0 ? void 0 : _this$dataModel3$getS3.spiHostTable;
    return Object(_SpiDataTable__WEBPACK_IMPORTED_MODULE_1__["createTableRowData"])(_this.dataModel, tableState);
  });

  _defineProperty(this, "getBasicSPIMasterResults", function () {
    return Object(_imports_spiMasterBasic__WEBPACK_IMPORTED_MODULE_4__["getBasicSPIMasterResults"])(_this.getActiveName());
  });

  _defineProperty(this, "getModel", function () {
    return _this.dataModel;
  });

  _defineProperty(this, "getModuleName", function () {
    return "SPI_Host";
  });

  _defineProperty(this, "overrideDefaultValue", function (componentName) {
    if (componentName === "customName") {
      var spiHostDrvInterfaceCustomName = Object(_exports_spiHostDrvInterface__WEBPACK_IMPORTED_MODULE_3__["getSpiHostDrvCustomName"])(_this.getModel());

      if (spiHostDrvInterfaceCustomName) {
        return spiHostDrvInterfaceCustomName;
      }

      var processedPayloadVal = _this.getBasicSpiMasterPayload();

      if ((processedPayloadVal === null || processedPayloadVal === void 0 ? void 0 : processedPayloadVal.moduleInstance) != undefined) {
        return "SPI".concat(processedPayloadVal.moduleInstance, "_Host");
      }
    }

    if (componentName === "interruptDriven") {
      var processedPayloadValue = _this.getBasicSpiMasterPayload();

      if ((processedPayloadValue === null || processedPayloadValue === void 0 ? void 0 : processedPayloadValue.hasPolling) && (processedPayloadValue === null || processedPayloadValue === void 0 ? void 0 : processedPayloadValue.hasInterrupt)) {
        return Object(_exports_spiHostDrvInterface__WEBPACK_IMPORTED_MODULE_3__["getSpiHostDrvInterruptDriven"])(_this.getModel());
      }

      return !(processedPayloadValue === null || processedPayloadValue === void 0 ? void 0 : processedPayloadValue.hasPolling) && (processedPayloadValue === null || processedPayloadValue === void 0 ? void 0 : processedPayloadValue.hasInterrupt);
    }
  });

  _defineProperty(this, "getMyAlerts", function () {
    var alerts = [];

    var isImportAssigned = _this.dataModel.getImportValue(_imports_spiMasterBasic__WEBPACK_IMPORTED_MODULE_4__["BASIC_SPI_MASTER_INTERFACE"]);

    if (!isImportAssigned) {
      return [];
    }

    var spiHostTableRowData = _this.getTableRowData();

    var spiDrvIntfRowData = Object(_SpiDataTable__WEBPACK_IMPORTED_MODULE_1__["createDriverInterfaceTableRowData"])(_this.getModel());
    var masterDataList = [].concat(_toConsumableArray(spiHostTableRowData), _toConsumableArray(spiDrvIntfRowData));
    var isMasterNameEmpty = false;
    var isMasterReqSpeedEmpty = false;
    var masterNameEntrySet = [];
    masterDataList.forEach(function (masterRow) {
      if (!masterRow.configName) {
        isMasterNameEmpty = true;
      } else if (!Object(_SpiDataTable__WEBPACK_IMPORTED_MODULE_1__["isElementPresent"])(masterNameEntrySet, masterRow.configName)) {
        masterNameEntrySet.push(masterRow.configName);
      }

      if (!masterRow.reqSpeed) {
        isMasterReqSpeedEmpty = true;
      }
    });

    if (isMasterNameEmpty) {
      alerts.push({
        type: _microchip_scf_common_lib_Processor__WEBPACK_IMPORTED_MODULE_0__["AlertTypes"].Warning,
        text: "Please ensure Config Name for any entry is not empty."
      });
    } else if (isMasterReqSpeedEmpty) {
      alerts.push({
        type: _microchip_scf_common_lib_Processor__WEBPACK_IMPORTED_MODULE_0__["AlertTypes"].Warning,
        text: "Please add a valid Requested Speed for each entry"
      });
    }

    var invalidCNameList = masterNameEntrySet.filter(function (configName) {
      return configName.match(_this.cValidator.getRjsfValidation().pattern) == null;
    });

    if (invalidCNameList.length > 0) {
      var text = invalidCNameList.length > 1 ? _this.createInvalidNamesAlert(invalidCNameList) : _this.createInvalidNameAlert(invalidCNameList[0]);
      alerts.push({
        type: _microchip_scf_common_lib_Processor__WEBPACK_IMPORTED_MODULE_0__["AlertTypes"].Warning,
        text: text
      });
    }

    alerts.push.apply(alerts, _toConsumableArray(Object(_exports_spiHostDrvInterface__WEBPACK_IMPORTED_MODULE_3__["getSpiHostDrvAlerts"])(_this.getModel())));
    return alerts;
  });

  _defineProperty(this, "createInvalidNamesAlert", function (invalidNamesList) {
    var lastEntry = invalidNamesList.pop();
    var invalidNames = invalidNamesList.join(",");
    return "".concat(invalidNames, " and ").concat(lastEntry, " are invalid Config Name entries, incompatible with C compiler.");
  });

  _defineProperty(this, "createInvalidNameAlert", function (invalidName) {
    return "".concat(invalidName, " is an invalid Config Name entry, incompatible with C compiler.");
  });

  _defineProperty(this, "getDynamicConfigData", function (config) {
    var _updatedConfig$softwa, _updatedConfig$softwa2;

    var updatedConfig = [config].map(function (moduleConfig) {
      return moduleConfig;
    })[0];

    if (updatedConfig === null || updatedConfig === void 0 ? void 0 : (_updatedConfig$softwa = updatedConfig.softwareData) === null || _updatedConfig$softwa === void 0 ? void 0 : (_updatedConfig$softwa2 = _updatedConfig$softwa.spiHostDrvInterfaceTable) === null || _updatedConfig$softwa2 === void 0 ? void 0 : _updatedConfig$softwa2.description) {
      var importerNames = Object(_exports_spiHostDrvInterface__WEBPACK_IMPORTED_MODULE_3__["getAllSpiHostDrvImporterNames"])(_this.getModel());
      var description = "".concat(importerNames.join(", "), " Configurations");
      updatedConfig.softwareData.spiHostDrvInterfaceTable.description = description;
    }

    return updatedConfig;
  });

  this.dataModel = dataModel;
};

/***/ }),

/***/ "./src/SpiDataTable.tsx":
/*!******************************!*\
  !*** ./src/SpiDataTable.tsx ***!
  \******************************/
/*! exports provided: DEFAULT_CONFIG_NAME, DEFAULT_MODE, DEFAULT_REQ_SPEED_KHZ, DEFAULT_SAMPLE_PT, TABLE_NAME, TABLE_PATH, TABLE_TAB_ID, getSpiRowMasterArg, isElementPresent, getActionData, getColumnAction, getRowData, getRowEntryFromDrvIntfArg, getDriverInterfaceRows, getDefaultRowData, createDriverInterfaceTableRowData, createTableRowData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEFAULT_CONFIG_NAME", function() { return DEFAULT_CONFIG_NAME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEFAULT_MODE", function() { return DEFAULT_MODE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEFAULT_REQ_SPEED_KHZ", function() { return DEFAULT_REQ_SPEED_KHZ; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEFAULT_SAMPLE_PT", function() { return DEFAULT_SAMPLE_PT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TABLE_NAME", function() { return TABLE_NAME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TABLE_PATH", function() { return TABLE_PATH; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TABLE_TAB_ID", function() { return TABLE_TAB_ID; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSpiRowMasterArg", function() { return getSpiRowMasterArg; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isElementPresent", function() { return isElementPresent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getActionData", function() { return getActionData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getColumnAction", function() { return getColumnAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRowData", function() { return getRowData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRowEntryFromDrvIntfArg", function() { return getRowEntryFromDrvIntfArg; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDriverInterfaceRows", function() { return getDriverInterfaceRows; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDefaultRowData", function() { return getDefaultRowData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createDriverInterfaceTableRowData", function() { return createDriverInterfaceTableRowData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createTableRowData", function() { return createTableRowData; });
/* harmony import */ var _microchip_melody_automodule_interface_lib_src_Tables__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @microchip/melody-automodule-interface/lib/src/Tables */ "./node_modules/@microchip/melody-automodule-interface/lib/src/Tables.js");
/* harmony import */ var _microchip_melody_automodule_interface_lib_src_Tables__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_microchip_melody_automodule_interface_lib_src_Tables__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _exports_spiHostDrvInterface__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./exports/spiHostDrvInterface */ "./src/exports/spiHostDrvInterface.ts");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



var DEFAULT_CONFIG_NAME = "HOST_CONFIG";
var DEFAULT_MODE = "Mode 1";
var DEFAULT_REQ_SPEED_KHZ = 125;
var DEFAULT_SAMPLE_PT = "Middle";
var TABLE_NAME = "spiHostTable";
var TABLE_PATH = "software.spiHostTable";
var TABLE_TAB_ID = "main";
var getSpiRowMasterArg = function getSpiRowMasterArg(rowStateData) {
  var _rowStateData$configN, _rowStateData$reqSpee, _rowStateData$spiSamp, _rowStateData$spiMode;

  var configNameVal = (_rowStateData$configN = rowStateData.configName) !== null && _rowStateData$configN !== void 0 ? _rowStateData$configN : DEFAULT_CONFIG_NAME;
  var reqSpeedHzVal = ((_rowStateData$reqSpee = rowStateData.reqSpeed) !== null && _rowStateData$reqSpee !== void 0 ? _rowStateData$reqSpee : DEFAULT_REQ_SPEED_KHZ) * 1000;
  var dataInputSampleVal = (_rowStateData$spiSamp = rowStateData.spiSamplePt) !== null && _rowStateData$spiSamp !== void 0 ? _rowStateData$spiSamp : DEFAULT_SAMPLE_PT;
  var spiModeVal = (_rowStateData$spiMode = rowStateData.spiMode) !== null && _rowStateData$spiMode !== void 0 ? _rowStateData$spiMode : DEFAULT_MODE;
  return {
    configName: configNameVal,
    reqSpeed_Hz: reqSpeedHzVal,
    dataInputSample: dataInputSampleVal,
    spiMode: spiModeVal
  };
};
var isElementPresent = function isElementPresent(data1, data2) {
  var isPresent = false;
  data1.forEach(function (data) {
    if (data === data2) {
      isPresent = true;
    }
  });
  return isPresent;
};
var getActionData = function getActionData(uid, rowId, tabId) {
  return {
    configName: getColumnAction("configName", uid, rowId, tabId, TABLE_PATH),
    reqSpeed: getColumnAction("reqSpeed", uid, rowId, tabId, TABLE_PATH),
    spiMode: getColumnAction("spiMode", uid, rowId, tabId, TABLE_PATH),
    spiSamplePt: getColumnAction("spiSamplePt", uid, rowId, tabId, TABLE_PATH)
  };
};
var getColumnAction = function getColumnAction(column, uid, rowId, tabId, path) {
  return {
    type: "[Table] EDIT_CELL",
    payload: {
      tabId: tabId,
      path: path,
      column: column,
      value: "%v",
      uid: uid,
      rowId: rowId
    }
  };
};
var getRowData = function getRowData(rowEntry) {
  var _rowEntry$configName, _rowEntry$reqSpeed, _rowEntry$spiMode, _rowEntry$spiSamplePt;

  return {
    uid: rowEntry.uid,
    configName: (_rowEntry$configName = rowEntry.configName) !== null && _rowEntry$configName !== void 0 ? _rowEntry$configName : DEFAULT_CONFIG_NAME,
    reqSpeed: (_rowEntry$reqSpeed = rowEntry.reqSpeed) !== null && _rowEntry$reqSpeed !== void 0 ? _rowEntry$reqSpeed : DEFAULT_REQ_SPEED_KHZ,
    spiMode: (_rowEntry$spiMode = rowEntry.spiMode) !== null && _rowEntry$spiMode !== void 0 ? _rowEntry$spiMode : DEFAULT_MODE,
    spiSamplePt: (_rowEntry$spiSamplePt = rowEntry.spiSamplePt) !== null && _rowEntry$spiSamplePt !== void 0 ? _rowEntry$spiSamplePt : DEFAULT_SAMPLE_PT
  };
};
var getRowEntryFromDrvIntfArg = function getRowEntryFromDrvIntfArg(masterArgData, importerName) {
  return {
    uid: "".concat(_microchip_melody_automodule_interface_lib_src_Tables__WEBPACK_IMPORTED_MODULE_0__["RowPrefix"].Dynamic).concat(importerName, "_").concat(masterArgData.configName),
    configName: masterArgData.configName,
    reqSpeed: masterArgData.reqSpeed_Hz / 1000,
    spiMode: masterArgData.spiMode,
    spiSamplePt: masterArgData.dataInputSample
  };
};
var getDriverInterfaceRows = function getDriverInterfaceRows(dataModel) {
  var drvIntfConfigRequests = Object(_exports_spiHostDrvInterface__WEBPACK_IMPORTED_MODULE_1__["getSpiHostDrvInterfaceConfigRequests"])(dataModel);
  var importerName = Object(_exports_spiHostDrvInterface__WEBPACK_IMPORTED_MODULE_1__["getSpiHostDrvImporterName"])(dataModel);
  return drvIntfConfigRequests.map(function (request) {
    return getRowEntryFromDrvIntfArg(request, importerName);
  });
};
var getDefaultRowData = function getDefaultRowData() {
  return {
    uid: _microchip_melody_automodule_interface_lib_src_Tables__WEBPACK_IMPORTED_MODULE_0__["RowPrefix"].Dynamic + "0",
    configName: DEFAULT_CONFIG_NAME,
    reqSpeed: DEFAULT_REQ_SPEED_KHZ,
    spiMode: DEFAULT_MODE,
    spiSamplePt: DEFAULT_SAMPLE_PT
  };
};
var createDriverInterfaceTableRowData = function createDriverInterfaceTableRowData(dataModel) {
  var drvIntfRows = getDriverInterfaceRows(dataModel);
  return drvIntfRows.map(getRowData).map(function (rowData, rowId) {
    return _objectSpread(_objectSpread({}, rowData), {}, {
      rowId: rowId
    });
  });
};
var createTableRowData = function createTableRowData(dataModel, tableState) {
  var spiHostRowData = [];
  var rowData = tableState !== null && tableState !== void 0 ? tableState : [];
  var driverInterfaceRows = getDriverInterfaceRows(dataModel);
  var isDefaultRowModified = false;
  rowData.forEach(function (rowEntry) {
    if (rowEntry.uid === _microchip_melody_automodule_interface_lib_src_Tables__WEBPACK_IMPORTED_MODULE_0__["RowPrefix"].Dynamic + "0") {
      isDefaultRowModified = true;

      if (rowEntry.dynamicallyRemoved === undefined) {
        spiHostRowData.unshift(getRowData(rowEntry));
      }
    } else if (rowEntry.dynamicallyRemoved === undefined) {
      spiHostRowData.push(getRowData(rowEntry));
    }
  });

  if (!isDefaultRowModified && driverInterfaceRows.length === 0) {
    spiHostRowData.unshift(getDefaultRowData());
  }

  var rowNo = 0;
  spiHostRowData.forEach(function (hostRow) {
    hostRow.rowId = rowNo;
    hostRow.actions = getActionData(hostRow.uid, rowNo, TABLE_TAB_ID);
    rowNo++;
  });
  return spiHostRowData;
};

/***/ }),

/***/ "./src/exports/spiHostDrvInterface.ts":
/*!********************************************!*\
  !*** ./src/exports/spiHostDrvInterface.ts ***!
  \********************************************/
/*! exports provided: spi_host_drv_interface, getSpiHostDrvInterfaceApiRequest, getSpiHostDrvRequestedArg, getAllSpiHostDrvRequestedArgs, getSpiHostDrvInterfaceConfigRequests, getSpiHostDrvImporterName, getAllSpiHostDrvImporterNames, getSpiHostDrvCustomName, getSpiHostDrvAlerts, getSpiHostDrvInterruptDriven */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSpiHostDrvInterfaceApiRequest", function() { return getSpiHostDrvInterfaceApiRequest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSpiHostDrvRequestedArg", function() { return getSpiHostDrvRequestedArg; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAllSpiHostDrvRequestedArgs", function() { return getAllSpiHostDrvRequestedArgs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSpiHostDrvInterfaceConfigRequests", function() { return getSpiHostDrvInterfaceConfigRequests; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSpiHostDrvImporterName", function() { return getSpiHostDrvImporterName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAllSpiHostDrvImporterNames", function() { return getAllSpiHostDrvImporterNames; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSpiHostDrvCustomName", function() { return getSpiHostDrvCustomName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSpiHostDrvAlerts", function() { return getSpiHostDrvAlerts; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSpiHostDrvInterruptDriven", function() { return getSpiHostDrvInterruptDriven; });
/* harmony import */ var _microchip_scf_common_lib_Processor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @microchip/scf-common/lib/Processor */ "./node_modules/@microchip/scf-common/lib/Processor.js");
/* harmony import */ var _microchip_scf_common_lib_Processor__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_microchip_scf_common_lib_Processor__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _microchip_spi_host_drv_interface__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @microchip/spi-host-drv-interface */ "./node_modules/@microchip/spi-host-drv-interface/lib/src/index.js");
/* harmony import */ var _microchip_spi_host_drv_interface__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_microchip_spi_host_drv_interface__WEBPACK_IMPORTED_MODULE_1__);
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "spi_host_drv_interface", function() { return _microchip_spi_host_drv_interface__WEBPACK_IMPORTED_MODULE_1__; });
/* harmony import */ var _generated_module_src_Utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../generated_module/src/Utils */ "./generated_module/src/Utils.ts");




var getSpiHostDrvExportArgs = function getSpiHostDrvExportArgs(intf, dataModel) {
  var _dataModel$getExportI;

  return (_dataModel$getExportI = dataModel.getExportInterfaces().getInterface("spi_host_drv_interface", intf.getInterfaceId())) === null || _dataModel$getExportI === void 0 ? void 0 : _dataModel$getExportI.args;
};

var getSpiHostDrvRequestedArg = function getSpiHostDrvRequestedArg(componentName, dataModel) {
  var args = getSpiHostDrvExportArgs(_microchip_spi_host_drv_interface__WEBPACK_IMPORTED_MODULE_1__["Interface"], dataModel);

  if (args) {
    var _values$;

    return (_values$ = Object(_generated_module_src_Utils__WEBPACK_IMPORTED_MODULE_2__["values"])(args)[0]) === null || _values$ === void 0 ? void 0 : _values$[componentName];
  }

  return undefined;
};

var getAllSpiHostDrvRequestedArgs = function getAllSpiHostDrvRequestedArgs(componentName, dataModel) {
  var args = getSpiHostDrvExportArgs(_microchip_spi_host_drv_interface__WEBPACK_IMPORTED_MODULE_1__["Interface"], dataModel);

  if (args) {
    return Object(_generated_module_src_Utils__WEBPACK_IMPORTED_MODULE_2__["values"])(args).filter(function (arg) {
      return (arg === null || arg === void 0 ? void 0 : arg[componentName]) !== undefined;
    }).map(function (arg) {
      return arg[componentName];
    });
  }

  return [];
};

var getSpiHostDrvInterfaceApiRequest = function getSpiHostDrvInterfaceApiRequest(dataModel) {
  return getSpiHostDrvRequestedArg("getInterfaceSpiMasterAPI", dataModel);
};

var getSpiHostDrvInterfaceConfigRequests = function getSpiHostDrvInterfaceConfigRequests(dataModel) {
  var _getSpiHostDrvRequest;

  return (_getSpiHostDrvRequest = getSpiHostDrvRequestedArg("spiMasterArgData", dataModel)) !== null && _getSpiHostDrvRequest !== void 0 ? _getSpiHostDrvRequest : [];
};

var getSpiHostDrvImporterName = function getSpiHostDrvImporterName(dataModel) {
  return getSpiHostDrvRequestedArg("importerName", dataModel);
};

var getAllSpiHostDrvImporterNames = function getAllSpiHostDrvImporterNames(dataModel) {
  return getAllSpiHostDrvRequestedArgs("importerName", dataModel);
};

var getSpiHostDrvCustomName = function getSpiHostDrvCustomName(dataModel) {
  return getSpiHostDrvRequestedArg("customName", dataModel);
};

var getSpiHostDrvInterruptDriven = function getSpiHostDrvInterruptDriven(dataModel) {
  return getSpiHostDrvRequestedArg("interruptDriven", dataModel);
};

var getAllSpiHostDrvCustomNames = function getAllSpiHostDrvCustomNames(dataModel) {
  var args = getSpiHostDrvExportArgs(_microchip_spi_host_drv_interface__WEBPACK_IMPORTED_MODULE_1__["Interface"], dataModel);

  if (args) {
    return Object(_generated_module_src_Utils__WEBPACK_IMPORTED_MODULE_2__["values"])(args).filter(function (arg) {
      return (arg === null || arg === void 0 ? void 0 : arg.customName) !== undefined;
    });
  }

  return [];
};

var getSpiHostDrvAlerts = function getSpiHostDrvAlerts(dataModel) {
  var customName = dataModel.getComponentValue("customName");
  var requestedCustomNameArguments = getAllSpiHostDrvCustomNames(dataModel);
  var rejectedNames = requestedCustomNameArguments.filter(function (importer) {
    return importer.customName !== customName;
  });
  var didUserModifyCustomName = rejectedNames.length === requestedCustomNameArguments.length;
  var modifiedBy = didUserModifyCustomName ? "user input" : "importer given";

  if (rejectedNames.length === 0) {
    return [];
  }

  var rejectedNameAlerts = rejectedNames.map(createRejectedNameAlert).join(", ");
  var alertText = "For Custom Name field, ".concat(rejectedNameAlerts, ", but the field is being updated based on ").concat(modifiedBy, " \"").concat(customName, "\"");
  return [{
    type: _microchip_scf_common_lib_Processor__WEBPACK_IMPORTED_MODULE_0__["AlertTypes"].Hint,
    text: alertText
  }];
};

var createRejectedNameAlert = function createRejectedNameAlert(importer) {
  return "\"".concat(importer.customName, "\" was requested by \"").concat(importer.importerName, "\"");
};



/***/ }),

/***/ "./src/imports/spiMasterBasic.ts":
/*!***************************************!*\
  !*** ./src/imports/spiMasterBasic.ts ***!
  \***************************************/
/*! exports provided: basicSpiMasterInterface, BASIC_SPI_MASTER_INTERFACE, getBasicSPIMasterArgs, getBasicSPIMasterResults */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BASIC_SPI_MASTER_INTERFACE", function() { return BASIC_SPI_MASTER_INTERFACE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getBasicSPIMasterArgs", function() { return getBasicSPIMasterArgs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getBasicSPIMasterResults", function() { return getBasicSPIMasterResults; });
/* harmony import */ var _microchip_spi_master_basic__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @microchip/spi-master-basic */ "./node_modules/@microchip/spi-master-basic/lib/src/index.js");
/* harmony import */ var _microchip_spi_master_basic__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_microchip_spi_master_basic__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "basicSpiMasterInterface", function() { return _microchip_spi_master_basic__WEBPACK_IMPORTED_MODULE_0__; });
/* harmony import */ var _SpiDataTable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../SpiDataTable */ "./src/SpiDataTable.tsx");
/* harmony import */ var _exports_spiHostDrvInterface__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../exports/spiHostDrvInterface */ "./src/exports/spiHostDrvInterface.ts");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }




var BASIC_SPI_MASTER_INTERFACE = "basic_spi_master";

var getBasicSPIMasterArgs = function getBasicSPIMasterArgs(dataModel, tableRowData) {
  var _ref, _dataModel$getState$m, _dataModel$getState, _dataModel$getState$m2, _dataModel$getState$m3;

  var spiHostTableRowData = tableRowData.map(_SpiDataTable__WEBPACK_IMPORTED_MODULE_1__["getSpiRowMasterArg"]);
  var spiDrvInterfaceRowData = Object(_SpiDataTable__WEBPACK_IMPORTED_MODULE_1__["getDriverInterfaceRows"])(dataModel).map(_SpiDataTable__WEBPACK_IMPORTED_MODULE_1__["getSpiRowMasterArg"]);
  return {
    spiMasterArgData: [].concat(_toConsumableArray(spiHostTableRowData), _toConsumableArray(spiDrvInterfaceRowData)),
    getInterfaceSpiMasterAPI: Object(_exports_spiHostDrvInterface__WEBPACK_IMPORTED_MODULE_2__["getSpiHostDrvInterfaceApiRequest"])(dataModel),
    interruptDriven: (_ref = (_dataModel$getState$m = (_dataModel$getState = dataModel.getState()) === null || _dataModel$getState === void 0 ? void 0 : (_dataModel$getState$m2 = _dataModel$getState.main) === null || _dataModel$getState$m2 === void 0 ? void 0 : (_dataModel$getState$m3 = _dataModel$getState$m2.interrupt) === null || _dataModel$getState$m3 === void 0 ? void 0 : _dataModel$getState$m3.interruptDriven) !== null && _dataModel$getState$m !== void 0 ? _dataModel$getState$m : Object(_exports_spiHostDrvInterface__WEBPACK_IMPORTED_MODULE_2__["getSpiHostDrvInterruptDriven"])(dataModel)) !== null && _ref !== void 0 ? _ref : false
  };
};

var getBasicSPIMasterResults = function getBasicSPIMasterResults(activeName) {
  return {
    customName: activeName
  };
};



/***/ }),

/***/ "./src/moduleConfig.json":
/*!*******************************!*\
  !*** ./src/moduleConfig.json ***!
  \*******************************/
/*! exports provided: moduleName, deviceType, booleanValues, help, UIGroups, UIOrder, tabs, imports, exports, displayViewOnImportAssigned, softwareData, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"moduleName\":\"SPI Host\",\"deviceType\":\"PIC\",\"booleanValues\":{\"true\":\"enabled\",\"false\":\"disabled\"},\"help\":{\"url\":\"v2/keyword-lookup?keyword=SPI_HOST_MELODY_DRIVER&version=latest&redirect=true\",\"tooltip\":\"Click here to open documentation\"},\"UIGroups\":{\"software\":\"Software Settings\",\"interrupt\":\"Interrupt Settings\",\"dependency\":\"Dependency Selector\"},\"UIOrder\":{\"software\":[\"*\"],\"interrupt\":[\"*\"]},\"tabs\":{\"main\":\"Easy View\"},\"imports\":{\"basic_spi_master\":{\"nodeModule\":{\"importName\":\"basic_spi_master\",\"node\":\"@microchip/spi-master-basic\"},\"import\":{\"interfaceId\":{\"name\":\"spi-master-basic\",\"version\":\"^1.1.0\"}}},\"device_meta\":{\"import\":{\"interfaceId\":{\"name\":\"device-meta\",\"version\":\"^1.0.0\"}}}},\"exports\":{\"spi_host_drv_interface\":{\"interfaces\":[{\"interfaceId\":{\"name\":\"spi-host-drv-interface\",\"version\":\"1.1.0\"}}],\"handleLimit\":1}},\"displayViewOnImportAssigned\":[\"basic_spi_master\"],\"softwareData\":{\"customName\":{\"name\":\"customName\",\"description\":\"Custom Name\",\"type\":\"string\",\"defaultValue\":\"SPI_Host\",\"group\":\"software\",\"tabs\":[\"main\"],\"validation\":true,\"category\":\"software\"},\"spiHostDrvInterfaceTable\":{\"name\":\"spiHostDrvInterfaceTable\",\"description\":\"Middleware Configurations\",\"category\":\"table\",\"type\":\"object\",\"group\":\"software\",\"tabs\":[\"main\"],\"columns\":{\"configName\":{\"title\":\"Config Name\",\"type\":\"string\",\"defaultValue\":\"HOST_CONFIG\",\"readonly\":true},\"reqSpeed\":{\"title\":\"Requested Speed (kHz)\",\"type\":\"number\",\"defaultValue\":125,\"readonly\":true},\"actSpeed\":{\"title\":\"Calculated Speed (kHz)\",\"type\":\"number\",\"defaultValue\":0,\"readonly\":true},\"spiMode\":{\"title\":\"Mode\",\"type\":\"ComboBox\",\"readonly\":true,\"defaultValue\":{\"value\":\"Mode 1\",\"options\":[\"Mode 0\",\"Mode 1\",\"Mode 2\",\"Mode 3\"]}},\"spiSamplePt\":{\"title\":\"Data Input Sample At\",\"type\":\"ComboBox\",\"readonly\":true,\"defaultValue\":{\"value\":\"Middle\",\"options\":[\"Middle\",\"End\"]}}},\"defaultRowNum\":0,\"isVisibleProperty\":\"isSpiInterfaceTableUsed\",\"rowData\":[]},\"spiHostTable\":{\"name\":\"spiHostTable\",\"description\":\"User Configurations\",\"category\":\"table\",\"type\":\"object\",\"group\":\"software\",\"tabs\":[\"main\"],\"columns\":{\"configName\":{\"title\":\"Config Name\",\"type\":\"string\",\"defaultValue\":\"HOST_CONFIG\"},\"reqSpeed\":{\"title\":\"Requested Speed (kHz)\",\"type\":\"number\",\"defaultValue\":125},\"actSpeed\":{\"title\":\"Calculated Speed (kHz)\",\"type\":\"number\",\"defaultValue\":0,\"readonly\":true},\"spiMode\":{\"title\":\"Mode\",\"type\":\"ComboBox\",\"defaultValue\":{\"value\":\"Mode 1\",\"options\":[\"Mode 0\",\"Mode 1\",\"Mode 2\",\"Mode 3\"]}},\"spiSamplePt\":{\"title\":\"Data Input Sample At\",\"type\":\"ComboBox\",\"defaultValue\":{\"value\":\"Middle\",\"options\":[\"Middle\",\"End\"]}}},\"defaultRowNum\":0,\"rowData\":[],\"canAddRows\":true,\"canRemoveRows\":true},\"depSelector\":{\"name\":\"depSelector\",\"category\":\"import\",\"description\":\"SPI Host PLIB Selector\",\"type\":\"ComboBox\",\"group\":\"dependency\",\"importId\":\"basic_spi_master\",\"tabs\":[\"main\"]},\"interruptDriven\":{\"name\":\"interruptDriven\",\"description\":\"Interrupt Driven\",\"type\":\"boolean\",\"defaultValue\":false,\"group\":\"interrupt\",\"tabs\":[\"main\"],\"category\":\"software\"}}}");

/***/ })

/******/ });
//# sourceMappingURL=creator.js.map