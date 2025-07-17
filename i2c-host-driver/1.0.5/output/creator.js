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
/******/ 	return __webpack_require__(__webpack_require__.s = "./generated_module/src/creator.tsx");
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

/***/ "./generated_module/src/autoModule sync recursive":
/*!**********************************************!*\
  !*** ./generated_module/src/autoModule sync ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	var e = new Error("Cannot find module '" + req + "'");
	e.code = 'MODULE_NOT_FOUND';
	throw e;
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "./generated_module/src/autoModule sync recursive";

/***/ }),

/***/ "./generated_module/src/autoModule/AutoModuleHardware.ts":
/*!***************************************************************!*\
  !*** ./generated_module/src/autoModule/AutoModuleHardware.ts ***!
  \***************************************************************/
/*! exports provided: createPrototypeImport, isFullyAssigned */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createPrototypeImport", function() { return createPrototypeImport; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isFullyAssigned", function() { return isFullyAssigned; });
/* harmony import */ var _microchip_scf_common_lib_Processor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @microchip/scf-common/lib/Processor */ "./node_modules/@microchip/scf-common/lib/Processor.js");
/* harmony import */ var _microchip_scf_common_lib_Processor__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_microchip_scf_common_lib_Processor__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _getConfigData__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getConfigData */ "./generated_module/src/autoModule/getConfigData.ts");
/* harmony import */ var _microchip_scf_device_lib_util_Arrays__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @microchip/scf-device/lib/util/Arrays */ "./node_modules/@microchip/scf-device/lib/util/Arrays.js");
/* harmony import */ var _microchip_scf_device_lib_util_Arrays__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_microchip_scf_device_lib_util_Arrays__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _AutoModuleHelpers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./AutoModuleHelpers */ "./generated_module/src/autoModule/AutoModuleHelpers.tsx");




var createPrototypeImport = function createPrototypeImport(interfaceName, config) {
  var _config, _config$imports, _config$imports$inter;

  config = Object(_getConfigData__WEBPACK_IMPORTED_MODULE_1__["getConfigData"])(undefined, config);
  return (_config = config) === null || _config === void 0 ? void 0 : (_config$imports = _config.imports) === null || _config$imports === void 0 ? void 0 : (_config$imports$inter = _config$imports[interfaceName]) === null || _config$imports$inter === void 0 ? void 0 : _config$imports$inter["import"];
};
var isFullyAssigned = function isFullyAssigned(imports, config) {
  var _config$peripherals, _config2;

  config = Object(_getConfigData__WEBPACK_IMPORTED_MODULE_1__["getConfigData"])(undefined, config); //get peripheral interfaces.

  var interfaces = getHardwareInterfaces((_config$peripherals = (_config2 = config) === null || _config2 === void 0 ? void 0 : _config2.peripherals) !== null && _config$peripherals !== void 0 ? _config$peripherals : []);

  for (var i = 0; i < interfaces.length; i++) {
    var imp = imports[interfaces[i]];

    if (!imp || !Object(_microchip_scf_common_lib_Processor__WEBPACK_IMPORTED_MODULE_0__["isAssigned"])(imp)) {
      return false;
    }
  }

  return true;
}; //Assumes hardware import keys are the same as the interface IDs

var getHardwareInterfaces = function getHardwareInterfaces(peripherals) {
  var interfaces = Object(_microchip_scf_device_lib_util_Arrays__WEBPACK_IMPORTED_MODULE_2__["map"])(peripherals, function (peripheral) {
    var _getFriendlyInterface;

    return (_getFriendlyInterface = Object(_AutoModuleHelpers__WEBPACK_IMPORTED_MODULE_3__["getFriendlyInterfaceId"])(peripheral.interfaceId.name)) !== null && _getFriendlyInterface !== void 0 ? _getFriendlyInterface : "";
  });
  return interfaces;
};

/***/ }),

/***/ "./generated_module/src/autoModule/AutoModuleHelpers.tsx":
/*!***************************************************************!*\
  !*** ./generated_module/src/autoModule/AutoModuleHelpers.tsx ***!
  \***************************************************************/
/*! exports provided: castComponent, getDefaultValue, getComboOptions, hasConfigBits, getRegisterValues, getSettingBits, getSettingFromComponent, getOptionValueByName, getSettingDefaultIfPresent, getOverrideDefaultValue, getSettingOptionsIfPresent, getProcessedHandle, DependencySelector, getModuleDefaultDescription, getFriendlyInterfaceId */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "castComponent", function() { return castComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDefaultValue", function() { return getDefaultValue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getComboOptions", function() { return getComboOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hasConfigBits", function() { return hasConfigBits; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRegisterValues", function() { return getRegisterValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSettingBits", function() { return getSettingBits; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSettingFromComponent", function() { return getSettingFromComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getOptionValueByName", function() { return getOptionValueByName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSettingDefaultIfPresent", function() { return getSettingDefaultIfPresent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getOverrideDefaultValue", function() { return getOverrideDefaultValue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSettingOptionsIfPresent", function() { return getSettingOptionsIfPresent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getProcessedHandle", function() { return getProcessedHandle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DependencySelector", function() { return DependencySelector; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getModuleDefaultDescription", function() { return getModuleDefaultDescription; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getFriendlyInterfaceId", function() { return getFriendlyInterfaceId; });
/* harmony import */ var _microchip_scf_device_lib_util_Arrays__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @microchip/scf-device/lib/util/Arrays */ "./node_modules/@microchip/scf-device/lib/util/Arrays.js");
/* harmony import */ var _microchip_scf_device_lib_util_Arrays__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_microchip_scf_device_lib_util_Arrays__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _microchip_scf_device_lib_CalculateRegisterValue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @microchip/scf-device/lib/CalculateRegisterValue */ "./node_modules/@microchip/scf-device/lib/CalculateRegisterValue.js");
/* harmony import */ var _microchip_scf_device_lib_CalculateRegisterValue__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_microchip_scf_device_lib_CalculateRegisterValue__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _microchip_scf_device_lib_Setting__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @microchip/scf-device/lib/Setting */ "./node_modules/@microchip/scf-device/lib/Setting.js");
/* harmony import */ var _microchip_scf_device_lib_Setting__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_microchip_scf_device_lib_Setting__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _getConfigData__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./getConfigData */ "./generated_module/src/autoModule/getConfigData.ts");
/* harmony import */ var _Utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Utils */ "./generated_module/src/Utils.ts");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

/* eslint @typescript-eslint/no-var-requires: "off" */





var castComponent = function castComponent(component) {
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
var getDefaultValue = function getDefaultValue(overrideDefaultValues, component) {
  var _overrideDefaultValue;

  return (_overrideDefaultValue = overrideDefaultValues === null || overrideDefaultValues === void 0 ? void 0 : overrideDefaultValues(component.name)) !== null && _overrideDefaultValue !== void 0 ? _overrideDefaultValue : component.type === "ComboBox" ? component.defaultValue.value : component.defaultValue;
};
var getComboOptions = function getComboOptions(overrideOptions, component) {
  var _overrideOptions, _component$defaultVal;

  return (_overrideOptions = overrideOptions === null || overrideOptions === void 0 ? void 0 : overrideOptions(component.name)) !== null && _overrideOptions !== void 0 ? _overrideOptions : component === null || component === void 0 ? void 0 : (_component$defaultVal = component.defaultValue) === null || _component$defaultVal === void 0 ? void 0 : _component$defaultVal["options"];
};
var hasConfigBits = function hasConfigBits(interfaceName) {
  var _getFriendlyInterface;

  return ((_getFriendlyInterface = getFriendlyInterfaceId(interfaceName)) === null || _getFriendlyInterface === void 0 ? void 0 : _getFriendlyInterface.indexOf("configuration_bits")) != -1;
};
var getRegisterValues = function getRegisterValues(model, interfaceName, config) {
  var _config, _config$peripherals;

  var registers = {};
  config = Object(_getConfigData__WEBPACK_IMPORTED_MODULE_3__["getConfigData"])(model, config);
  interfaceName = getFriendlyInterfaceId(interfaceName);
  (_config = config) === null || _config === void 0 ? void 0 : (_config$peripherals = _config.peripherals) === null || _config$peripherals === void 0 ? void 0 : _config$peripherals.forEach(function (peripheral) {
    var _getFriendlyInterface2, _getKeys, _peripheral$registers;

    var peripheralName = (_getFriendlyInterface2 = getFriendlyInterfaceId(peripheral.interfaceId.name)) !== null && _getFriendlyInterface2 !== void 0 ? _getFriendlyInterface2 : "";
    if (hasConfigBits(peripheralName)) return;
    if (interfaceName != undefined && peripheralName !== interfaceName || !peripheral.registers) return;
    (_getKeys = Object(_Utils__WEBPACK_IMPORTED_MODULE_4__["getKeys"])((_peripheral$registers = peripheral.registers) !== null && _peripheral$registers !== void 0 ? _peripheral$registers : {})) === null || _getKeys === void 0 ? void 0 : _getKeys.forEach(function (regName) {
      var _model$getHardware, _model$getHardware$ge, _peripheral$registers2, _reg$alias2;

      var registerValue;
      var reg = (_model$getHardware = model.getHardware(peripheralName)) === null || _model$getHardware === void 0 ? void 0 : (_model$getHardware$ge = _model$getHardware.getPeripheral().registers) === null || _model$getHardware$ge === void 0 ? void 0 : _model$getHardware$ge[regName];

      if (reg) {
        var _reg$alias;

        registerValue = {
          comment: "",
          value: 0,
          valueAsHex: "0x00",
          name: reg === null || reg === void 0 ? void 0 : reg.name,
          alias: (_reg$alias = reg === null || reg === void 0 ? void 0 : reg.alias) !== null && _reg$alias !== void 0 ? _reg$alias : reg === null || reg === void 0 ? void 0 : reg.name,
          settings: {}
        };
      } else {
        return;
      }

      var registerVal = _microchip_scf_device_lib_CalculateRegisterValue__WEBPACK_IMPORTED_MODULE_1___default.a["for"](reg);
      var comments = [];
      (_peripheral$registers2 = peripheral.registers) === null || _peripheral$registers2 === void 0 ? void 0 : _peripheral$registers2[regName].forEach(function (set) {
        var _reg$settings, _getOptionValueByName, _model$getComponent2;

        var setting = (_reg$settings = reg.settings) === null || _reg$settings === void 0 ? void 0 : _reg$settings[set.setting];

        if (setting) {
          var _registerValue;

          if (setting.type !== "R") {
            //Add Comments
            comments.push("".concat(set.setting, " ").concat(model.getComponentValue(set.name), "; "));
          }

          if ((_registerValue = registerValue) !== null && _registerValue !== void 0 && _registerValue.settings) {
            var _model$getComponent, _config$deviceType, _config2;

            registerValue.settings[setting.alias] = getSettingBits(reg, setting, (_model$getComponent = model.getComponent(set.name)) === null || _model$getComponent === void 0 ? void 0 : _model$getComponent.value, (_config$deviceType = (_config2 = config) === null || _config2 === void 0 ? void 0 : _config2.deviceType) !== null && _config$deviceType !== void 0 ? _config$deviceType : "PIC");
          }

          switch (set.type) {
            case "ComboBox":
            case "boolean":
              registerVal.withNumberValue(setting, (_getOptionValueByName = getOptionValueByName(setting, (_model$getComponent2 = model.getComponent(set.name)) === null || _model$getComponent2 === void 0 ? void 0 : _model$getComponent2.value)) !== null && _getOptionValueByName !== void 0 ? _getOptionValueByName : 0);
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
      } else {
        var _model$getComponentVa, _peripheral$registers3, _peripheral$registers4, _peripheral$registers5, _peripheral$registers6;

        registerValue.value = Number((_model$getComponentVa = model.getComponentValue((_peripheral$registers3 = (_peripheral$registers4 = peripheral.registers) === null || _peripheral$registers4 === void 0 ? void 0 : (_peripheral$registers5 = _peripheral$registers4[regName]) === null || _peripheral$registers5 === void 0 ? void 0 : (_peripheral$registers6 = _peripheral$registers5[0]) === null || _peripheral$registers6 === void 0 ? void 0 : _peripheral$registers6.name) !== null && _peripheral$registers3 !== void 0 ? _peripheral$registers3 : "")) !== null && _model$getComponentVa !== void 0 ? _model$getComponentVa : 0);
        comments.push("".concat(registerValue.name, " ").concat(registerValue.value, "; "));
      }

      registerValue.valueAsHex = "0x" + registerValue.value.toString(16).toUpperCase();
      registerValue.comment = sortComments(comments, reg);
      registers[(_reg$alias2 = reg === null || reg === void 0 ? void 0 : reg.alias) !== null && _reg$alias2 !== void 0 ? _reg$alias2 : reg.name] = registerValue;
    });
  });
  return registers;
};

var sortComments = function sortComments(comments, register) {
  comments.sort(function (a, b) {
    var _register$settings, _a$split$, _register$settings2, _b$split;

    var settingA = (_register$settings = register.settings) === null || _register$settings === void 0 ? void 0 : _register$settings[(_a$split$ = a.split[" "]) === null || _a$split$ === void 0 ? void 0 : _a$split$[0]];
    var settingB = (_register$settings2 = register.settings) === null || _register$settings2 === void 0 ? void 0 : _register$settings2[(_b$split = b.split(" ")) === null || _b$split === void 0 ? void 0 : _b$split[0]];
    return Number(settingB === null || settingB === void 0 ? void 0 : settingB.mask) - Number(settingA === null || settingA === void 0 ? void 0 : settingA.mask);
  });
  return comments.join("");
};

var getSettingBits = function getSettingBits(register, setting, value, deviceType) {
  var _getOptionByAlias$val, _getOptionByAlias;

  var setValNumber = Number((_getOptionByAlias$val = (_getOptionByAlias = Object(_microchip_scf_device_lib_Setting__WEBPACK_IMPORTED_MODULE_2__["getOptionByAlias"])(value, setting)) === null || _getOptionByAlias === void 0 ? void 0 : _getOptionByAlias.value) !== null && _getOptionByAlias$val !== void 0 ? _getOptionByAlias$val : 0);
  var settingValue = {
    alias: setting.alias,
    name: setting.name,
    value: setValNumber !== null && setValNumber !== void 0 ? setValNumber : 0,
    valueAsHex: "0x" + setValNumber.toString(16).toUpperCase(),
    valueAsDescription: value,
    bitName: deviceType === "PIC" ? "".concat(register.name, "bits.").concat(setting.name) : "".concat(register.name, ".").concat(setting.name)
  };
  return settingValue;
};

var getRegisterFromComponent = function getRegisterFromComponent(hardware, component) {
  var _component$name$repla, _hardware$registers;

  var registerName = (_component$name$repla = component.name.replace(component.setting.toLowerCase(), "")) === null || _component$name$repla === void 0 ? void 0 : _component$name$repla.toUpperCase();
  var register = hardware === null || hardware === void 0 ? void 0 : (_hardware$registers = hardware.registers) === null || _hardware$registers === void 0 ? void 0 : _hardware$registers[registerName];

  if (register) {
    return register;
  } else {
    var _component$name$repla2, _hardware$registers2;

    var regName = (_component$name$repla2 = component.name.replace(component.setting.toLowerCase(), "")) === null || _component$name$repla2 === void 0 ? void 0 : _component$name$repla2.toUpperCase();
    var registers = Object(_Utils__WEBPACK_IMPORTED_MODULE_4__["getKeys"])((_hardware$registers2 = hardware === null || hardware === void 0 ? void 0 : hardware.registers) !== null && _hardware$registers2 !== void 0 ? _hardware$registers2 : {});

    var _iterator = _createForOfIteratorHelper(registers !== null && registers !== void 0 ? registers : []),
        _step;

    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var reg = _step.value;
        var modifiedRegName = reg.replace(/\_/g, "");

        if (regName === modifiedRegName) {
          var _hardware$registers3;

          return hardware === null || hardware === void 0 ? void 0 : (_hardware$registers3 = hardware.registers) === null || _hardware$registers3 === void 0 ? void 0 : _hardware$registers3[reg];
        }
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
  }
};

var getSettingFromComponent = function getSettingFromComponent(model, component, config) {
  config = Object(_getConfigData__WEBPACK_IMPORTED_MODULE_3__["getConfigData"])(model, config);
  var setting;

  if (model) {
    var _config3, _config3$peripherals;

    (_config3 = config) === null || _config3 === void 0 ? void 0 : (_config3$peripherals = _config3.peripherals) === null || _config3$peripherals === void 0 ? void 0 : _config3$peripherals.forEach(function (peripheral) {
      var _model$getHardware2;

      if (setting) return;
      var peripheralName = getFriendlyInterfaceId(peripheral.interfaceId.name);
      var hardware = (_model$getHardware2 = model.getHardware(peripheralName, config)) === null || _model$getHardware2 === void 0 ? void 0 : _model$getHardware2.getPeripheral();
      var register = getRegisterFromComponent(hardware, component);

      if (register && !register.settings) {
        var _register$alias;

        //No settings for this particular register. Create one
        setting = {
          alias: (_register$alias = register.alias) !== null && _register$alias !== void 0 ? _register$alias : register.name,
          name: register.name,
          defaultValue: register.defaultValue,
          type: register.type,
          description: register.desc,
          porDefault: register.defaultValue
        };
      } else {
        var _register$settings3;

        setting = register === null || register === void 0 ? void 0 : (_register$settings3 = register.settings) === null || _register$settings3 === void 0 ? void 0 : _register$settings3[component.setting];
      }
    });
  }

  return setting;
};
var getOptionValueByName = function getOptionValueByName(setting, optionName) {
  if (!setting) return undefined;
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
var getSettingDefaultIfPresent = function getSettingDefaultIfPresent(component, setting, overrideDefaultValue) {
  var defaultValue;

  if (overrideDefaultValue !== undefined) {
    return overrideDefaultValue;
  }

  if (component.overrideDefaultValue) {
    return component.overrideDefaultValue;
  }

  if (setting !== null && setting !== void 0 && setting.defaultValue) {
    var _option, _component$displayOpt;

    var option = Object(_microchip_scf_device_lib_Setting__WEBPACK_IMPORTED_MODULE_2__["getOptionByName"])(setting.defaultValue, setting);
    defaultValue = (_option = option === null || option === void 0 ? void 0 : option[(_component$displayOpt = component.displayOptionSetting) !== null && _component$displayOpt !== void 0 ? _component$displayOpt : "alias"]) !== null && _option !== void 0 ? _option : setting.defaultValue;
  }

  return defaultValue;
};
var getOverrideDefaultValue = function getOverrideDefaultValue(component, model) {
  var _model$getDerivedFunc, _model$getDerivedFunc2;

  return (_model$getDerivedFunc = (_model$getDerivedFunc2 = model.getDerivedFunctions()).overrideDefaultValues) === null || _model$getDerivedFunc === void 0 ? void 0 : _model$getDerivedFunc.call(_model$getDerivedFunc2, component.name);
};
var getSettingOptionsIfPresent = function getSettingOptionsIfPresent(component, setting, masterComponentValue) {
  var options = [""];

  if (setting) {
    var _setting$options;

    var filteredOptions = component.mode ? filterModeOptions((_setting$options = setting.options) !== null && _setting$options !== void 0 ? _setting$options : [], component, masterComponentValue) : setting.options;
    options = Object(_microchip_scf_device_lib_util_Arrays__WEBPACK_IMPORTED_MODULE_0__["map"])(filteredOptions !== null && filteredOptions !== void 0 ? filteredOptions : [], function (option) {
      var _option2, _component$displayOpt2;

      return (_option2 = option[(_component$displayOpt2 = component.displayOptionSetting) !== null && _component$displayOpt2 !== void 0 ? _component$displayOpt2 : "alias"]) !== null && _option2 !== void 0 ? _option2 : option.alias;
    });
  }

  return options;
};

var filterModeOptions = function filterModeOptions(options, component, masterComponentValue) {
  var _component$mode, _getKeys2, _component$mode$optio, _component$mode2;

  if (((_component$mode = component.mode) === null || _component$mode === void 0 ? void 0 : _component$mode.operation) != "filterOptions" || masterComponentValue == undefined) return options; //Determine mode

  var mode = Object(_microchip_scf_device_lib_util_Arrays__WEBPACK_IMPORTED_MODULE_0__["find"])((_getKeys2 = Object(_Utils__WEBPACK_IMPORTED_MODULE_4__["getKeys"])((_component$mode$optio = (_component$mode2 = component.mode) === null || _component$mode2 === void 0 ? void 0 : _component$mode2.optionModes) !== null && _component$mode$optio !== void 0 ? _component$mode$optio : {})) !== null && _getKeys2 !== void 0 ? _getKeys2 : [], function (mode) {
    var _component$mode3, _component$mode3$opti;

    var match = (_component$mode3 = component.mode) === null || _component$mode3 === void 0 ? void 0 : (_component$mode3$opti = _component$mode3.optionModes) === null || _component$mode3$opti === void 0 ? void 0 : _component$mode3$opti[mode];

    if (match) {
      var _masterComponentValue, _masterComponentValue2;

      return ((_masterComponentValue = masterComponentValue === null || masterComponentValue === void 0 ? void 0 : (_masterComponentValue2 = masterComponentValue.match(match)) === null || _masterComponentValue2 === void 0 ? void 0 : _masterComponentValue2.length) !== null && _masterComponentValue !== void 0 ? _masterComponentValue : -1) > 0;
    }

    return false;
  });
  var filteredOptions = Object(_microchip_scf_device_lib_util_Arrays__WEBPACK_IMPORTED_MODULE_0__["filter"])(options !== null && options !== void 0 ? options : [], function (option) {
    if (option.mode) {
      var _component$mode4, _component$mode4$opti;

      var match = (_component$mode4 = component.mode) === null || _component$mode4 === void 0 ? void 0 : (_component$mode4$opti = _component$mode4.optionModes) === null || _component$mode4$opti === void 0 ? void 0 : _component$mode4$opti[mode];

      if (match) {
        var _option$mode$match$le, _option$mode$match;

        return ((_option$mode$match$le = (_option$mode$match = option.mode.match(match)) === null || _option$mode$match === void 0 ? void 0 : _option$mode$match.length) !== null && _option$mode$match$le !== void 0 ? _option$mode$match$le : -1) > 0;
      }
    }

    return true;
  });
  return filteredOptions;
};

var getProcessedHandle = function getProcessedHandle(handle, payload) {
  if (handle) {
    var _ref, _ref2, _payload$moduleName;

    handle = _objectSpread(_objectSpread({}, handle), {}, {
      label: (_ref = (_ref2 = (_payload$moduleName = payload === null || payload === void 0 ? void 0 : payload.moduleName) !== null && _payload$moduleName !== void 0 ? _payload$moduleName : payload === null || payload === void 0 ? void 0 : payload.name) !== null && _ref2 !== void 0 ? _ref2 : handle.label) !== null && _ref !== void 0 ? _ref : handle.providerId + " : " + handle.exportId
    });
  }

  return handle;
};
var DependencySelector = /*#__PURE__*/function () {
  function DependencySelector(model, component) {
    var _this = this;

    _classCallCheck(this, DependencySelector);

    this.noneSelection = {
      label: "None"
    };
    this.model = void 0;
    this.component = void 0;

    this.createOptionEntry = function (option) {
      return {
        label: _this.createOptionLabel(option.handle, option.payload),
        value: option
      };
    };

    this.createOptionLabel = function (handle, payload) {
      var _getProcessedHandle$l, _getProcessedHandle;

      return (_getProcessedHandle$l = (_getProcessedHandle = getProcessedHandle(handle, payload)) === null || _getProcessedHandle === void 0 ? void 0 : _getProcessedHandle.label) !== null && _getProcessedHandle$l !== void 0 ? _getProcessedHandle$l : "";
    };

    this.model = model;
    this.component = component;
  }

  _createClass(DependencySelector, [{
    key: "generateDropdownOptions",
    value: function generateDropdownOptions() {
      var dropdownOptions = [];
      var thisImport = this.model.getImports()[this.component.importId];
      var options = thisImport === null || thisImport === void 0 ? void 0 : thisImport.options;

      if (this.shouldAllowUnselectDependency(thisImport, options)) {
        dropdownOptions.push(this.noneSelection);
      }

      if (options) {
        for (var option in options) {
          dropdownOptions.push(this.createOptionEntry(options[option]));
        }
      }

      return dropdownOptions;
    }
  }, {
    key: "getDropdownOptionNames",
    value: function getDropdownOptionNames() {
      var names = [];
      this.generateDropdownOptions().forEach(function (option) {
        return names.push(option.label);
      });
      return names;
    }
  }, {
    key: "shouldAllowUnselectDependency",
    value: function shouldAllowUnselectDependency(thisImport, options) {
      return thisImport != undefined && thisImport.isUnassignable != false && options !== undefined;
    }
  }]);

  return DependencySelector;
}();
function getModuleDefaultDescription() {
  var packageJson = __webpack_require__(/*! ../../../package.json */ "./package.json");

  var desc;

  if (packageJson) {
    var _packageJson$scf;

    desc = (_packageJson$scf = packageJson.scf) === null || _packageJson$scf === void 0 ? void 0 : _packageJson$scf.description;
  } else {
    desc = undefined;
  }

  return desc;
}
var getFriendlyInterfaceId = function getFriendlyInterfaceId(interfaceName) {
  var _interfaceName;

  interfaceName = (_interfaceName = interfaceName) === null || _interfaceName === void 0 ? void 0 : _interfaceName.replace(/ /g, "").replace(/-/g, "_");
  return interfaceName;
};

/***/ }),

/***/ "./generated_module/src/autoModule/getConfigData.ts":
/*!**********************************************************!*\
  !*** ./generated_module/src/autoModule/getConfigData.ts ***!
  \**********************************************************/
/*! exports provided: getConfigData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__dirname) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getConfigData", function() { return getConfigData; });
/* harmony import */ var _Utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Utils */ "./generated_module/src/Utils.ts");
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! path */ "./node_modules/path-browserify/index.js");
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_1__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/* eslint-disable @typescript-eslint/no-var-requires */


var configPath = "../../../src/moduleConfig.json";

var config = __webpack_require__(/*! ../../../src/moduleConfig.json */ "./src/moduleConfig.json");

var getConfigData = function getConfigData(model, newConfig) {
  if (!config || newConfig) {
    config = ConfigBuilder["for"](newConfig).withDynamicConfigData(model).withDynamicComponents(model).build();
  }

  return config;
};

var getConfigFile = function getConfigFile(configPath) {
  try {
    return __webpack_require__("./generated_module/src/autoModule sync recursive")(configPath);
  } catch (_unused) {
    throw Error("Cannot find moduleConfig.json at: " + configPath);
  }
};

var ConfigBuilder = function ConfigBuilder(config) {
  var _this = this;

  _classCallCheck(this, ConfigBuilder);

  this.config = void 0;

  this.build = function () {
    return _this.config;
  };

  this.withDynamicConfigData = function (model) {
    var _model$getDerivedFunc;

    return new ConfigBuilder((_model$getDerivedFunc = model === null || model === void 0 ? void 0 : model.getDerivedFunction("getDynamicConfigData", _this.config)) !== null && _model$getDerivedFunc !== void 0 ? _model$getDerivedFunc : _this.config);
  };

  this.withDynamicComponents = function (model) {
    var _model$getDerivedFunc2, _model$getDerivedFunc3;

    var dynamicComponents = model === null || model === void 0 ? void 0 : (_model$getDerivedFunc2 = (_model$getDerivedFunc3 = model.getDerivedFunctions()).getDynamicComponents) === null || _model$getDerivedFunc2 === void 0 ? void 0 : _model$getDerivedFunc2.call(_model$getDerivedFunc3);

    if (dynamicComponents) {
      var dynamicComponentMap = Object(_Utils__WEBPACK_IMPORTED_MODULE_0__["toDictionary"])(dynamicComponents, function (component) {
        var _this$config$UIGroups;

        _this.config.UIGroups[component.group] = (_this$config$UIGroups = _this.config.UIGroups[component.group]) !== null && _this$config$UIGroups !== void 0 ? _this$config$UIGroups : component.group;
        return component.name;
      }, function (component) {
        return component;
      });
      _this.config.softwareData = _objectSpread(_objectSpread({}, _this.config.softwareData), dynamicComponentMap);
    }

    return new ConfigBuilder(_this.config);
  };

  this.config = config;
};

ConfigBuilder.fromNew = function () {
  return ConfigBuilder.fromPath(path__WEBPACK_IMPORTED_MODULE_1__["resolve"](__dirname, configPath));
};

ConfigBuilder.fromPath = function (path) {
  if (!config) {
    config = getConfigFile(path);
  }

  return new ConfigBuilder(config);
};

ConfigBuilder["for"] = function (config) {
  if (!config) return ConfigBuilder.fromNew();
  return new ConfigBuilder(config);
};
/* WEBPACK VAR INJECTION */}.call(this, "/"))

/***/ }),

/***/ "./generated_module/src/creator.tsx":
/*!******************************************!*\
  !*** ./generated_module/src/creator.tsx ***!
  \******************************************/
/*! exports provided: create */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "create", function() { return create; });
/* harmony import */ var _interfaces_createPrototypeExports__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./interfaces/createPrototypeExports */ "./generated_module/src/interfaces/createPrototypeExports.ts");
/* harmony import */ var _interfaces_createPrototypeImports__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./interfaces/createPrototypeImports */ "./generated_module/src/interfaces/createPrototypeImports.ts");
/* harmony import */ var _src_CreatorFunctions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../src/CreatorFunctions */ "./src/CreatorFunctions.ts");
/* harmony import */ var _autoModule_getConfigData__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./autoModule/getConfigData */ "./generated_module/src/autoModule/getConfigData.ts");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/*
 *  @license:
 *  © 2019 Microchip Technology Inc. and its subsidiaries.
 *
 *  You may use this software and any derivatives exclusively with Microchip products.
 *
 *  THIS SOFTWARE IS SUPPLIED BY MICROCHIP "AS IS".  NO WARRANTIES, WHETHER EXPRESS,
 *  IMPLIED OR STATUTORY, APPLY TO THIS SOFTWARE, INCLUDING ANY IMPLIED WARRANTIES OF
 *  NON-INFRINGEMENT, MERCHANTABILITY, AND FITNESS FOR A PARTICULAR PURPOSE, OR ITS
 *  INTERACTION WITH MICROCHIP PRODUCTS, COMBINATION WITH ANY OTHER PRODUCTS, OR USE
 *  IN ANY APPLICATION.
 *
 *  IN NO EVENT WILL MICROCHIP BE LIABLE FOR ANY INDIRECT, SPECIAL, PUNITIVE, INCIDENTAL
 *  OR CONSEQUENTIAL LOSS, DAMAGE, COST OR EXPENSE OF ANY KIND WHATSOEVER RELATED TO
 *  THE SOFTWARE, HOWEVER CAUSED, EVEN IF MICROCHIP HAS BEEN ADVISED OF THE POSSIBILITY
 *  OR THE DAMAGES ARE FORESEEABLE.  TO THE FULLEST EXTENT ALLOWED BY LAW, MICROCHIP'S
 *  TOTAL LIABILITY ON ALL CLAIMS IN ANY WAY RELATED TO THIS SOFTWARE WILL NOT EXCEED
 *  THE AMOUNT OF FEES, IF ANY, THAT YOU HAVE PAID DIRECTLY TO MICROCHIP FOR THIS SOFTWARE.
 *
 *  MICROCHIP PROVIDES THIS SOFTWARE CONDITIONALLY UPON YOUR ACCEPTANCE OF THESE TERMS.
 */




var create = function create(state, getCreatorFunctions, config) {
  var _config, _config$isEntryPoint, _config2;

  if (!getCreatorFunctions) getCreatorFunctions = _src_CreatorFunctions__WEBPACK_IMPORTED_MODULE_2__["getCreatorFunctions"];
  config = Object(_autoModule_getConfigData__WEBPACK_IMPORTED_MODULE_3__["getConfigData"])(undefined, config);
  var prototypeImports = Object(_interfaces_createPrototypeImports__WEBPACK_IMPORTED_MODULE_1__["createPrototypeImports"])(state, getCreatorFunctions());
  var prototypeExports = Object(_interfaces_createPrototypeExports__WEBPACK_IMPORTED_MODULE_0__["createPrototypeExports"])();
  return {
    payload: state,
    imports: _objectSpread({}, prototypeImports),
    exports: prototypeExports,
    isSingletonPerDevice: (_config = config) === null || _config === void 0 ? void 0 : _config.isSingletonPerDevice,
    isEntryPoint: (_config$isEntryPoint = (_config2 = config) === null || _config2 === void 0 ? void 0 : _config2.isEntryPoint) !== null && _config$isEntryPoint !== void 0 ? _config$isEntryPoint : true
  };
};

/***/ }),

/***/ "./generated_module/src/interfaces/createPrototypeExports.ts":
/*!*******************************************************************!*\
  !*** ./generated_module/src/interfaces/createPrototypeExports.ts ***!
  \*******************************************************************/
/*! exports provided: createPrototypeExports */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createPrototypeExports", function() { return createPrototypeExports; });
/* harmony import */ var _autoModule_getConfigData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../autoModule/getConfigData */ "./generated_module/src/autoModule/getConfigData.ts");
/* harmony import */ var _Utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Utils */ "./generated_module/src/Utils.ts");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



var createPrototypeExports = function createPrototypeExports(config) {
  var _getKeys, _config$exports, _config;

  config = Object(_autoModule_getConfigData__WEBPACK_IMPORTED_MODULE_0__["getConfigData"])(undefined, config);
  var exports = {};
  (_getKeys = Object(_Utils__WEBPACK_IMPORTED_MODULE_1__["getKeys"])((_config$exports = (_config = config) === null || _config === void 0 ? void 0 : _config.exports) !== null && _config$exports !== void 0 ? _config$exports : {})) === null || _getKeys === void 0 ? void 0 : _getKeys.forEach(function (expName) {
    var _config2, _config2$exports;

    var exp = (_config2 = config) === null || _config2 === void 0 ? void 0 : (_config2$exports = _config2.exports) === null || _config2$exports === void 0 ? void 0 : _config2$exports[expName];
    if (exp == undefined) return;
    exports[expName] = _objectSpread(_objectSpread({}, exp), {}, {
      interfaces: processExportInterfaces(exp.interfaces)
    });
  });
  return exports;
};

var processExportInterfaces = function processExportInterfaces(_int) {
  var newInterfaces = [];

  _int.forEach(function (_ref) {
    var interfaceId = _ref.interfaceId,
        payload = _ref.payload;
    newInterfaces.push({
      interfaceId: interfaceId,
      payload: payload
    });
  });

  return newInterfaces;
};

/***/ }),

/***/ "./generated_module/src/interfaces/createPrototypeImports.ts":
/*!*******************************************************************!*\
  !*** ./generated_module/src/interfaces/createPrototypeImports.ts ***!
  \*******************************************************************/
/*! exports provided: createPrototypeImports */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createPrototypeImports", function() { return createPrototypeImports; });
/* harmony import */ var _autoModule_getConfigData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../autoModule/getConfigData */ "./generated_module/src/autoModule/getConfigData.ts");
/* harmony import */ var _autoModule_AutoModuleHardware__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../autoModule/AutoModuleHardware */ "./generated_module/src/autoModule/AutoModuleHardware.ts");
/* harmony import */ var _microchip_scf_device_lib_util_Arrays__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @microchip/scf-device/lib/util/Arrays */ "./node_modules/@microchip/scf-device/lib/util/Arrays.js");
/* harmony import */ var _microchip_scf_device_lib_util_Arrays__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_microchip_scf_device_lib_util_Arrays__WEBPACK_IMPORTED_MODULE_2__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




var createPrototypeImports = function createPrototypeImports(state, creatorFunctions, config) {
  var _config, _getKeys, _config$imports, _config2;

  var prototypeImports = {};
  config = Object(_autoModule_getConfigData__WEBPACK_IMPORTED_MODULE_0__["getConfigData"])(undefined, config);
  if (!config) return prototypeImports;

  if ((_config = config) !== null && _config !== void 0 && _config.peripherals) {
    config.peripherals.forEach(function (peripheral) {
      var interfaceName = getFriendlyInterfaceId(peripheral.interfaceId.name);
      var prototypeImport = Object(_autoModule_AutoModuleHardware__WEBPACK_IMPORTED_MODULE_1__["createPrototypeImport"])(interfaceName);

      if (prototypeImport) {
        prototypeImports = _objectSpread(_objectSpread({}, prototypeImports), {}, _defineProperty({}, interfaceName, _objectSpread(_objectSpread({}, prototypeImport), {}, {
          isRequired: true
        })));
      }
    });
  }

  (_getKeys = Object(_microchip_scf_device_lib_util_Arrays__WEBPACK_IMPORTED_MODULE_2__["getKeys"])((_config$imports = (_config2 = config) === null || _config2 === void 0 ? void 0 : _config2.imports) !== null && _config$imports !== void 0 ? _config$imports : {})) === null || _getKeys === void 0 ? void 0 : _getKeys.forEach(function (key) {
    var _config3, _config3$imports, _creatorFunctions$get, _creatorFunctions$sho;

    var imp = (_config3 = config) === null || _config3 === void 0 ? void 0 : (_config3$imports = _config3.imports) === null || _config3$imports === void 0 ? void 0 : _config3$imports[key];
    var args = creatorFunctions === null || creatorFunctions === void 0 ? void 0 : (_creatorFunctions$get = creatorFunctions.getCreatorImportArgs) === null || _creatorFunctions$get === void 0 ? void 0 : _creatorFunctions$get.call(creatorFunctions, key, state);

    if (imp && (creatorFunctions === null || creatorFunctions === void 0 ? void 0 : (_creatorFunctions$sho = creatorFunctions.shouldImport) === null || _creatorFunctions$sho === void 0 ? void 0 : _creatorFunctions$sho.call(creatorFunctions, key, state)) != false) {
      prototypeImports = _objectSpread(_objectSpread({}, prototypeImports), {}, _defineProperty({}, key, _objectSpread(_objectSpread({}, imp["import"]), {}, {
        args: args
      })));
    }
  });
  return prototypeImports;
};

var getFriendlyInterfaceId = function getFriendlyInterfaceId(interfaceName) {
  interfaceName = interfaceName.replace(/ /g, "").replace(/-/g, "_");
  return interfaceName;
};

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
        return __assign({}, populatedImport, { options: populatedImport.options.filter(optionFilter) });
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
        return __assign({}, populatedImport, { options: populatedImport.options.map(function (option) {
                return __assign({}, option, { handle: __assign({}, option.handle, { label: labelFactory(option) }) });
            }) });
    }
    return populatedImport;
}
exports.mapOptionLabels = mapOptionLabels;


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
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
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
                throw new Error("Setting " + setting.alias + " is not present in Register " + _this.register.name);
            }
            _this.modifiedSettings = __spreadArrays(_this.modifiedSettings, [
                new NumberSettingValue(setting, value)
            ]);
            return _this;
        };
        /** Assign the given `Option` to the given `Setting`. */
        this.withOption = function (setting, option) {
            if (setting === undefined) {
                throw new Error("Cannot assign option to setting, setting is undefined.");
            }
            if (!_this.getSetting(setting)) {
                throw new Error("Setting " + setting.alias + " is not present in Register " + _this.register.name);
            }
            if (!_this.getOption(setting, option)) {
                throw new Error("Option " + option.name + " is not present in Setting " + setting.name);
            }
            _this.modifiedSettings = __spreadArrays(_this.modifiedSettings, [
                new OptionSettingValue(setting, option)
            ]);
            return _this;
        };
        /** Assign the `Option` matching the given alias to the given `Setting`. */
        this.withOptionAlias = function (setting, optionAlias) {
            if (setting === undefined) {
                throw new Error("Cannot assign option alias to setting, setting is undefined.");
            }
            var option = Setting_1.getOptionByAlias(optionAlias, setting);
            if (option === undefined) {
                throw new Error("Option Alias: \"" + optionAlias + "\" not present in Setting: \"" + setting.name + "\".");
            }
            return _this.withOption(setting, option);
        };
        /** Assign the `Option` matching the given name to the given `Setting`. */
        this.withOptionName = function (setting, optionName) {
            if (setting === undefined) {
                throw new Error("Cannot assign option name to setting, setting is undefined.");
            }
            var option = Setting_1.getOptionByName(optionName, setting);
            if (option === undefined) {
                throw new Error("Option Name: \"" + optionName + "\" not present in Setting: \"" + setting.name + "\".");
            }
            return _this.withOption(setting, option);
        };
        /** Assign the `Option` matching the given description to the given `Setting`. */
        this.withOptionDescription = function (setting, optionDescription) {
            if (setting === undefined) {
                throw new Error("Cannot assign option description to setting, setting is undefined.");
            }
            var option = Setting_1.getOptionByDescription(optionDescription, setting);
            if (option === undefined) {
                throw new Error("Option Description: \"" + optionDescription + "\" not present in Setting: \"" + setting.name + "\".");
            }
            return _this.withOption(setting, option);
        };
        this.getSetting = function (setting) {
            return Register_1.getSettingByAlias(setting.alias, _this.register);
        };
        this.getOption = function (setting, option) {
            return Setting_1.getOptionByName(option.name, setting);
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
            return value;
        };
        this.getUnmodifiedSettings = function () {
            var _a;
            var modifiedSettingNames = Arrays_1.map(_this.modifiedSettings, function (setting) { return setting.getName(); });
            return Arrays_1.filter((_a = Arrays_1.values(_this.register.settings)) !== null && _a !== void 0 ? _a : [], function (setting) { return modifiedSettingNames.indexOf(setting.name) < 0; });
        };
        /** Calculate and print the register's value as a hex string. */
        this.asHexString = function () { return CalculateRegisterValue.toHexString(_this.calculate()); };
        /** Calculate and print the register's value as a binary string. */
        this.asBinaryString = function () { return CalculateRegisterValue.toBinaryString(_this.calculate()); };
        /** Calculate and print the register's value as a decimal string. */
        this.asDecimalString = function () { return CalculateRegisterValue.toDecimalString(_this.calculate()); };
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
        var foundValueByName = Setting_1.getOptionByName(value, setting);
        if (foundValueByName)
            return new OptionSettingValue(setting, foundValueByName);
        var foundValueByAlias = Setting_1.getOptionByAlias(value, setting);
        if (foundValueByAlias)
            return new OptionSettingValue(setting, foundValueByAlias);
        throw new Error("Unable to create default value '" + value + "' for setting '" + setting.name + "'.");
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
exports.getSettingByAlias = function (alias, register) {
    return register.settings[alias];
};
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
exports.getOptionDescriptions = exports.getOptionNames = exports.getOptionByDescription = exports.getOptionByName = exports.getOptionByAlias = void 0;
var Arrays_1 = __webpack_require__(/*! ./util/Arrays */ "./node_modules/@microchip/scf-device/lib/util/Arrays.js");
exports.getOptionByAlias = function (alias, setting) {
    var _a;
    return Arrays_1.find((_a = setting.options) !== null && _a !== void 0 ? _a : [], function (option) { return option.alias == alias; });
};
exports.getOptionByName = function (name, setting) {
    var _a;
    return Arrays_1.find((_a = setting.options) !== null && _a !== void 0 ? _a : [], function (option) { return option.name == name; });
};
exports.getOptionByDescription = function (description, setting) {
    var _a;
    return Arrays_1.find((_a = setting.options) !== null && _a !== void 0 ? _a : [], function (option) { return option.description == description; });
};
exports.getOptionNames = function (setting) {
    var _a;
    return Arrays_1.map((_a = setting.options) !== null && _a !== void 0 ? _a : [], function (option) { return option.name; });
};
exports.getOptionDescriptions = function (setting) {
    var _a;
    return Arrays_1.map((_a = setting.options) !== null && _a !== void 0 ? _a : [], function (option) { return option.description; });
};
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
exports.map = function (arr, callback) {
    var result = [];
    arr.forEach(function (value, index) {
        result[index] = callback(value);
    });
    return result;
};
exports.filter = function (arr, callback) {
    var result = [];
    arr.forEach(function (value) {
        if (callback(value)) {
            result.push(value);
        }
    });
    return result;
};
/**
 * Iterates over elements of the array, returning the first element that the predicate returns truthy for.
 */
exports.find = function (arr, callback) {
    for (var i = 0; i < arr.length; i++) {
        if (callback(arr[i])) {
            return arr[i];
        }
    }
    return undefined;
};
/** @returns the non-prototype keys of the given object */
exports.getKeys = function (obj) {
    if (!obj)
        return undefined;
    return Object.getOwnPropertyNames(obj);
};
exports.values = function (obj) {
    if (!obj)
        return undefined;
    return exports.getKeys(obj).map(function (key) { return obj[key]; });
};
//# sourceMappingURL=Arrays.js.map

/***/ }),

/***/ "./node_modules/path-browserify/index.js":
/*!***********************************************!*\
  !*** ./node_modules/path-browserify/index.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process) {// .dirname, .basename, and .extname methods are extracted from Node.js v8.11.1,
// backported and transplited with Babel, with backwards-compat fixes

// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

// resolves . and .. elements in a path array with directory names there
// must be no slashes, empty elements, or device names (c:\) in the array
// (so also no leading and trailing slashes - it does not distinguish
// relative and absolute paths)
function normalizeArray(parts, allowAboveRoot) {
  // if the path tries to go above the root, `up` ends up > 0
  var up = 0;
  for (var i = parts.length - 1; i >= 0; i--) {
    var last = parts[i];
    if (last === '.') {
      parts.splice(i, 1);
    } else if (last === '..') {
      parts.splice(i, 1);
      up++;
    } else if (up) {
      parts.splice(i, 1);
      up--;
    }
  }

  // if the path is allowed to go above the root, restore leading ..s
  if (allowAboveRoot) {
    for (; up--; up) {
      parts.unshift('..');
    }
  }

  return parts;
}

// path.resolve([from ...], to)
// posix version
exports.resolve = function() {
  var resolvedPath = '',
      resolvedAbsolute = false;

  for (var i = arguments.length - 1; i >= -1 && !resolvedAbsolute; i--) {
    var path = (i >= 0) ? arguments[i] : process.cwd();

    // Skip empty and invalid entries
    if (typeof path !== 'string') {
      throw new TypeError('Arguments to path.resolve must be strings');
    } else if (!path) {
      continue;
    }

    resolvedPath = path + '/' + resolvedPath;
    resolvedAbsolute = path.charAt(0) === '/';
  }

  // At this point the path should be resolved to a full absolute path, but
  // handle relative paths to be safe (might happen when process.cwd() fails)

  // Normalize the path
  resolvedPath = normalizeArray(filter(resolvedPath.split('/'), function(p) {
    return !!p;
  }), !resolvedAbsolute).join('/');

  return ((resolvedAbsolute ? '/' : '') + resolvedPath) || '.';
};

// path.normalize(path)
// posix version
exports.normalize = function(path) {
  var isAbsolute = exports.isAbsolute(path),
      trailingSlash = substr(path, -1) === '/';

  // Normalize the path
  path = normalizeArray(filter(path.split('/'), function(p) {
    return !!p;
  }), !isAbsolute).join('/');

  if (!path && !isAbsolute) {
    path = '.';
  }
  if (path && trailingSlash) {
    path += '/';
  }

  return (isAbsolute ? '/' : '') + path;
};

// posix version
exports.isAbsolute = function(path) {
  return path.charAt(0) === '/';
};

// posix version
exports.join = function() {
  var paths = Array.prototype.slice.call(arguments, 0);
  return exports.normalize(filter(paths, function(p, index) {
    if (typeof p !== 'string') {
      throw new TypeError('Arguments to path.join must be strings');
    }
    return p;
  }).join('/'));
};


// path.relative(from, to)
// posix version
exports.relative = function(from, to) {
  from = exports.resolve(from).substr(1);
  to = exports.resolve(to).substr(1);

  function trim(arr) {
    var start = 0;
    for (; start < arr.length; start++) {
      if (arr[start] !== '') break;
    }

    var end = arr.length - 1;
    for (; end >= 0; end--) {
      if (arr[end] !== '') break;
    }

    if (start > end) return [];
    return arr.slice(start, end - start + 1);
  }

  var fromParts = trim(from.split('/'));
  var toParts = trim(to.split('/'));

  var length = Math.min(fromParts.length, toParts.length);
  var samePartsLength = length;
  for (var i = 0; i < length; i++) {
    if (fromParts[i] !== toParts[i]) {
      samePartsLength = i;
      break;
    }
  }

  var outputParts = [];
  for (var i = samePartsLength; i < fromParts.length; i++) {
    outputParts.push('..');
  }

  outputParts = outputParts.concat(toParts.slice(samePartsLength));

  return outputParts.join('/');
};

exports.sep = '/';
exports.delimiter = ':';

exports.dirname = function (path) {
  if (typeof path !== 'string') path = path + '';
  if (path.length === 0) return '.';
  var code = path.charCodeAt(0);
  var hasRoot = code === 47 /*/*/;
  var end = -1;
  var matchedSlash = true;
  for (var i = path.length - 1; i >= 1; --i) {
    code = path.charCodeAt(i);
    if (code === 47 /*/*/) {
        if (!matchedSlash) {
          end = i;
          break;
        }
      } else {
      // We saw the first non-path separator
      matchedSlash = false;
    }
  }

  if (end === -1) return hasRoot ? '/' : '.';
  if (hasRoot && end === 1) {
    // return '//';
    // Backwards-compat fix:
    return '/';
  }
  return path.slice(0, end);
};

function basename(path) {
  if (typeof path !== 'string') path = path + '';

  var start = 0;
  var end = -1;
  var matchedSlash = true;
  var i;

  for (i = path.length - 1; i >= 0; --i) {
    if (path.charCodeAt(i) === 47 /*/*/) {
        // If we reached a path separator that was not part of a set of path
        // separators at the end of the string, stop now
        if (!matchedSlash) {
          start = i + 1;
          break;
        }
      } else if (end === -1) {
      // We saw the first non-path separator, mark this as the end of our
      // path component
      matchedSlash = false;
      end = i + 1;
    }
  }

  if (end === -1) return '';
  return path.slice(start, end);
}

// Uses a mixed approach for backwards-compatibility, as ext behavior changed
// in new Node.js versions, so only basename() above is backported here
exports.basename = function (path, ext) {
  var f = basename(path);
  if (ext && f.substr(-1 * ext.length) === ext) {
    f = f.substr(0, f.length - ext.length);
  }
  return f;
};

exports.extname = function (path) {
  if (typeof path !== 'string') path = path + '';
  var startDot = -1;
  var startPart = 0;
  var end = -1;
  var matchedSlash = true;
  // Track the state of characters (if any) we see before our first dot and
  // after any path separator we find
  var preDotState = 0;
  for (var i = path.length - 1; i >= 0; --i) {
    var code = path.charCodeAt(i);
    if (code === 47 /*/*/) {
        // If we reached a path separator that was not part of a set of path
        // separators at the end of the string, stop now
        if (!matchedSlash) {
          startPart = i + 1;
          break;
        }
        continue;
      }
    if (end === -1) {
      // We saw the first non-path separator, mark this as the end of our
      // extension
      matchedSlash = false;
      end = i + 1;
    }
    if (code === 46 /*.*/) {
        // If this is our first dot, mark it as the start of our extension
        if (startDot === -1)
          startDot = i;
        else if (preDotState !== 1)
          preDotState = 1;
    } else if (startDot !== -1) {
      // We saw a non-dot and non-path separator before our dot, so we should
      // have a good chance at having a non-empty extension
      preDotState = -1;
    }
  }

  if (startDot === -1 || end === -1 ||
      // We saw a non-dot character immediately before the dot
      preDotState === 0 ||
      // The (right-most) trimmed path component is exactly '..'
      preDotState === 1 && startDot === end - 1 && startDot === startPart + 1) {
    return '';
  }
  return path.slice(startDot, end);
};

function filter (xs, f) {
    if (xs.filter) return xs.filter(f);
    var res = [];
    for (var i = 0; i < xs.length; i++) {
        if (f(xs[i], i, xs)) res.push(xs[i]);
    }
    return res;
}

// String.prototype.substr - negative index don't work in IE8
var substr = 'ab'.substr(-1) === 'b'
    ? function (str, start, len) { return str.substr(start, len) }
    : function (str, start, len) {
        if (start < 0) start = str.length + start;
        return str.substr(start, len);
    }
;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../process/browser.js */ "./node_modules/process/browser.js")))

/***/ }),

/***/ "./node_modules/process/browser.js":
/*!*****************************************!*\
  !*** ./node_modules/process/browser.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),

/***/ "./package.json":
/*!**********************!*\
  !*** ./package.json ***!
  \**********************/
/*! exports provided: name, version, scf, scf-automodule, license, scripts, husky, lint-staged, files, jest, dependencies, devDependencies, description, main, author, notificationEmail, bitBucketRepository, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"name\":\"@mchp-mcc/i2c-host-driver\",\"version\":\"1.0.5\",\"scf\":{\"reducer\":\"auto\",\"creator\":\"output/creator.js\",\"processor\":\"output/processor.js\",\"nullPrototype\":\"output/nullPrototype.json\",\"views\":{\"main\":\"auto\"},\"displayName\":\"I2C_Host\",\"category\":\"Drivers/I2C\"},\"scf-automodule\":{\"mode\":\"standard\",\"hookPaths\":{\"processor\":\"generated_module/src/processor.tsx\",\"creator\":\"generated_module/src/creator.tsx\"},\"shouldNotifyOnDeploy\":true},\"license\":\"SEE LICENSE IN LICENSE.txt\",\"scripts\":{\"build\":\"gulp build --gulpfile config/gulpfile.js --cwd .\",\"build-dev\":\"gulp build --gulpfile config/gulpfile.js --buildDev --cwd .\",\"build-prod\":\"gulp build --gulpfile config/gulpfile.js --production --cwd .\",\"start\":\"gulp start --gulpfile config/gulpfile.js --cwd .\",\"test\":\"jest\",\"create-auto-module\":\"gulp create-auto-module --gulpfile config/gulpfile.js --cwd .\",\"get-latest-auto-module\":\"yarn add @microchip/scf-automodule -D\",\"build-run-dir\":\"node config/extract-run-directory.js\",\"build-latest-run-dir\":\"yarn add @microchip/run-directory && yarn build-run-dir\",\"dist\":\"gulp dist --gulpfile config/gulpfile.js --cwd .\",\"lint:nofix\":\"eslint \\\"./src/**/*.{ts,tsx}\\\" --quiet\",\"lint\":\"tsc --noEmit && yarn lint:nofix --fix\",\"updateProject\":\"node config/create-auto-module.js --updateProject=true\",\"update-auto-module\":\"yarn add @microchip/scf-automodule -D && yarn updateProject\",\"build-run-dir-future\":\"node config/extract-run-directory-future.js\",\"profile\":\"jest profile\",\"release\":\"yarn build && yarn test && node -e 'require(\\\"./config/scf-project-scripts\\\").releaseProject()'\"},\"husky\":{\"hooks\":{\"pre-commit\":\"tsc --noEmit && lint-staged\"}},\"lint-staged\":{\"./src/**/*.{ts,tsx}\":[\"eslint --fix\"]},\"files\":[\"output/**/*\",\"config.json\",\"src/**/*\"],\"jest\":{\"testPathIgnorePatterns\":[\"/node_modules/\",\"/run/\",\"/generated_module/examples/\",\"/lib/\"],\"modulePathIgnorePatterns\":[\"<rootDir>/run\"],\"preset\":\"ts-jest\",\"collectCoverage\":true},\"dependencies\":{\"@mchp-mcc/pic-8bit-types\":\"^5.4.1\",\"@microchip/api-prefix-registration\":\"^0.1.0\",\"@microchip/basic_pin\":\"^1.0.2\",\"@microchip/fosc-hz\":\"^0.1.2\",\"@microchip/i2c-host-basic\":\"^1.0.0\",\"@microchip/pic-8bit-types\":\"^5.0.1\",\"@microchip/pin-standard\":\"^0.2.14\",\"@microchip/scf-automodule-interface\":\"^0.17.0\",\"@microchip/scf-common\":\"^3.13.4\",\"@microchip/scf-device\":\"^8.2.0\",\"@microchip/scf-integration-test\":\"^1.0.0\",\"@microchip/scf-interface\":\"^1.4.0\",\"@microchip/scf-register-view-helper\":\"^2.4.0\",\"@microchip/scf-validators\":\"^1.1.0\",\"lodash.filter\":\"^4.6.0\",\"lodash.find\":\"^4.6.0\",\"lodash.map\":\"^4.6.0\"},\"devDependencies\":{\"@babel/core\":\"^7.9.6\",\"@babel/plugin-proposal-class-properties\":\"^7.8.3\",\"@babel/preset-env\":\"^7.9.6\",\"@babel/preset-react\":\"^7.9.4\",\"@babel/preset-typescript\":\"^7.9.0\",\"@microchip/initializer-system\":\"^0.5.3\",\"@microchip/run-directory\":\"^2.5.3\",\"@microchip/scf-automodule\":\"^4.14.6\",\"@microchip/scf-autoview\":\"^3.17.0\",\"@microchip/scf-project-scripts\":\"^1.0.0\",\"@types/core-js\":\"^2.5.1\",\"@types/enzyme\":\"^3.9.3\",\"@types/jest\":\"^24.0.14\",\"@types/lodash.filter\":\"^4.6.6\",\"@types/lodash.find\":\"^4.6.6\",\"@types/lodash.map\":\"^4.6.13\",\"@types/node\":\"^12.0.10\",\"@types/properties-reader\":\"^0.0.1\",\"@types/semver\":\"^7.1.0\",\"@typescript-eslint/eslint-plugin\":\"^3.2.0\",\"@typescript-eslint/parser\":\"^3.6.0\",\"babel-eslint\":\"^10.1.0\",\"babel-loader\":\"^8.0.6\",\"babel-plugin-named-asset-import\":\"^0.3.2\",\"babel-preset-react-app\":\"^9.0.0\",\"del\":\"^4.1.1\",\"eslint\":\"^7.4.0\",\"eslint-config-prettier\":\"^6.11.0\",\"eslint-friendly-formatter\":\"^4.0.1\",\"eslint-loader\":\"^4.0.2\",\"eslint-plugin-prettier\":\"^3.1.3\",\"eslint-plugin-react\":\"^7.20.0\",\"fork-ts-checker-webpack-plugin\":\"^1.3.7\",\"fs\":\"^0.0.1-security\",\"gulp\":\"^4.0.2\",\"gulp-changed\":\"^4.0.2\",\"gulp-cli\":\"^2.2.0\",\"gulp-if\":\"^3.0.0\",\"gulp-typescript\":\"^5.0.1\",\"hard-source-webpack-plugin\":\"^0.13.1\",\"husky\":\"^4.2.4\",\"is-wsl\":\"^2.1.0\",\"jest\":\"^24.8.0\",\"jest-html-reporter\":\"^2.5.0\",\"jest-pnp-resolver\":\"^1.2.1\",\"lint-staged\":\"^10.1.3\",\"pnp-webpack-plugin\":\"^1.5.0\",\"prettier\":\"^2.0.5\",\"ts-jest\":\"^24.0.2\",\"ts-pnp\":\"^1.1.2\",\"typescript\":\"^4.0.5\",\"webpack\":\"^4.34.0\",\"webpack-cli\":\"^3.3.4\",\"webpack-merge\":\"^4.2.2\",\"webpack-stream\":\"^5.2.1\",\"yargs\":\"^13.2.4\"},\"description\":\"- Download & Install [nodejs](https://nodejs.org/en/download/)\\r - Download & Install npm\\r - Setup node & npm in enviroment path\",\"main\":\"lib/generated_module/src/index.js\",\"author\":\"\",\"notificationEmail\":\"1d0dd98b.microchiptechnology.onmicrosoft.com@amer.teams.ms\",\"bitBucketRepository\":\"https://bitbucket.microchip.com/projects/scf/repos/i2c-host-basic-driver/browse\"}");

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

/***/ "./src/moduleConfig.json":
/*!*******************************!*\
  !*** ./src/moduleConfig.json ***!
  \*******************************/
/*! exports provided: moduleName, deviceType, booleanValues, UIGroups, UIOrder, help, tabs, displayViewOnImportAssigned, imports, exports, softwareData, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"moduleName\":\"I2C_Host\",\"deviceType\":\"PIC\",\"booleanValues\":{\"true\":\"enabled\",\"false\":\"disabled\"},\"UIGroups\":{\"software\":\"Software Settings\",\"dependency\":\"Dependency Selector\"},\"UIOrder\":{\"software\":[\"*\"]},\"help\":{\"url\":\"v2/keyword-lookup?keyword=I2C_Host_Melody_Driver&version=latest&redirect=true\",\"tooltip\":\"Click here to open documentation.\"},\"tabs\":{\"main\":\"Easy View\"},\"displayViewOnImportAssigned\":[\"i2c_host_basic\"],\"imports\":{\"i2c_host_basic\":{\"import\":{\"interfaceId\":{\"name\":\"i2c-host-basic\",\"version\":\"^1.0.0\"}},\"nodeModule\":{\"importName\":\"i2c_host_basic\",\"node\":\"@microchip/i2c-host-basic\"}},\"device_meta\":{\"import\":{\"interfaceId\":{\"name\":\"device-meta\",\"version\":\"^1.0.0\"}}}},\"exports\":{},\"softwareData\":{\"customName\":{\"name\":\"customName\",\"description\":\"Custom Name\",\"type\":\"string\",\"defaultValue\":\"I2C_Host\",\"group\":\"software\",\"tabs\":[\"main\"],\"validation\":true,\"category\":\"software\"},\"requestedSpeed\":{\"name\":\"requestedSpeed\",\"description\":\"Requested Speed\",\"type\":\"ComboBox\",\"defaultValue\":{\"value\":\"100 KHz\",\"options\":[\"100 KHz\",\"400 KHz\",\"1 MHz\"]},\"group\":\"software\",\"tabs\":[\"main\"],\"category\":\"software\"},\"calculatedSpeed\":{\"name\":\"calculatedSpeed\",\"description\":\"Calculated Speed\",\"type\":\"string\",\"defaultValue\":\"0\",\"group\":\"software\",\"tabs\":[\"main\"],\"uiBehavior\":{\"readonly\":true},\"category\":\"software\"},\"depSelector\":{\"name\":\"depSelector\",\"category\":\"import\",\"description\":\"I2C Host PLIB Selector\",\"type\":\"ComboBox\",\"group\":\"dependency\",\"importId\":\"i2c_host_basic\",\"tabs\":[\"main\"]}}}");

/***/ })

/******/ });
//# sourceMappingURL=creator.js.map