var processor =
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./generated_module/src/processor.tsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./generated_module/src/App/AppModel.ts":
/*!**********************************************!*\
  !*** ./generated_module/src/App/AppModel.ts ***!
  \**********************************************/
/*! exports provided: getModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getModel", function() { return getModel; });
/* harmony import */ var _microchip_scf_common_lib_Processor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @microchip/scf-common/lib/Processor */ "./node_modules/@microchip/scf-common/lib/Processor.js");
/* harmony import */ var _microchip_scf_common_lib_Processor__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_microchip_scf_common_lib_Processor__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _interfaces_exports__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../interfaces/exports */ "./generated_module/src/interfaces/exports.tsx");
/* harmony import */ var _interfaces_imports__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../interfaces/imports */ "./generated_module/src/interfaces/imports.tsx");
/* harmony import */ var _autoModule_AutoModuleAppModel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../autoModule/AutoModuleAppModel */ "./generated_module/src/autoModule/AutoModuleAppModel.tsx");
/* harmony import */ var _autoModule_AutoModuleHelpers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../autoModule/AutoModuleHelpers */ "./generated_module/src/autoModule/AutoModuleHelpers.tsx");
/* harmony import */ var _pins_PCPHelper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../pins/PCPHelper */ "./generated_module/src/pins/PCPHelper.ts");
/* harmony import */ var _autoModule_getConfigData__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../autoModule/getConfigData */ "./generated_module/src/autoModule/getConfigData.ts");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }









var getPinsLogic = function getPinsLogic() {
  try {
    return __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module '../../../src/PinsLogic.ts'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
  } catch (ex) {
    var _getCompletePinData = function _getCompletePinData(appModel) {
      return {};
    };

    var _getRowData = function _getRowData(appModel, rowData) {
      return rowData;
    };

    return {
      getCompletePinData: _getCompletePinData,
      getRowData: _getRowData
    };
  }
};

var getModel = function getModel(prototype, getDerivedData) {
  return new AppModel(prototype, getDerivedData);
};

var AppModel = /*#__PURE__*/function () {
  function AppModel(prototype, getDerivedData) {
    var _this = this;

    _classCallCheck(this, AppModel);

    this.prototype = void 0;
    this.getDerivedDataFunction = void 0;
    this.derivedData = void 0;
    this.exportInterfaces = void 0;
    this.importInterfaces = void 0;
    this.autoModuleAppModel = void 0;
    this.registerValues = void 0;
    this.interrupts = void 0;
    this.properties = void 0;
    this.registers = void 0;
    this.pcpHelper = void 0;
    this.defaultHardware = void 0;

    this.getState = function () {
      return _this.prototype.state;
    };

    this.getPayload = function () {
      return _this.prototype.payload;
    };

    this.getImports = function () {
      return _this.prototype.imports;
    };

    this.getExports = function () {
      return _this.prototype.exports;
    };

    this.getName = function () {
      return _this.getAutoModuleAppModel().getModuleName();
    };

    this.getActiveName = function () {
      var _this$getDerivedFunct, _this$getDerivedFunct2, _this$getDerivedFunct3;

      return (_this$getDerivedFunct = (_this$getDerivedFunct2 = (_this$getDerivedFunct3 = _this.getDerivedFunctions()).getActiveName) === null || _this$getDerivedFunct2 === void 0 ? void 0 : _this$getDerivedFunct2.call(_this$getDerivedFunct3)) !== null && _this$getDerivedFunct !== void 0 ? _this$getDerivedFunct : _this.getName();
    };

    this.getGlobalNames = function () {
      var _this$getDerivedFunct4, _this$getDerivedFunct5, _this$getDerivedFunct6;

      return (_this$getDerivedFunct4 = (_this$getDerivedFunct5 = (_this$getDerivedFunct6 = _this.getDerivedFunctions()).getGlobalNames) === null || _this$getDerivedFunct5 === void 0 ? void 0 : _this$getDerivedFunct5.call(_this$getDerivedFunct6)) !== null && _this$getDerivedFunct4 !== void 0 ? _this$getDerivedFunct4 : [];
    };

    this.getAutoModuleAppModel = function () {
      if (_this.autoModuleAppModel) return _this.autoModuleAppModel;
      _this.autoModuleAppModel = Object(_autoModule_AutoModuleAppModel__WEBPACK_IMPORTED_MODULE_3__["createAutoModuleAppModel"])(_this);
      return _this.autoModuleAppModel;
    };

    this.getPrototypeModule = function () {
      return _this.prototype;
    };

    this.getRegisterValues = function (interfaceName, config) {
      if (_this.registerValues) return _this.registerValues;
      _this.registerValues = Object(_autoModule_AutoModuleHelpers__WEBPACK_IMPORTED_MODULE_4__["getRegisterValues"])(_this, interfaceName, config);
      return _this.registerValues;
    };

    this.getInterrupts = function () {
      var _this$getHardware, _this$getHardware$get;

      if (_this.interrupts) return _this.interrupts;
      _this.interrupts = (_this$getHardware = _this.getHardware()) === null || _this$getHardware === void 0 ? void 0 : (_this$getHardware$get = _this$getHardware.getPeripheral()) === null || _this$getHardware$get === void 0 ? void 0 : _this$getHardware$get.interrupts;
      return _this.interrupts;
    };

    this.getProperties = function () {
      var _this$getHardware2, _this$getHardware2$ge;

      if (_this.properties) return _this.properties;
      _this.properties = (_this$getHardware2 = _this.getHardware()) === null || _this$getHardware2 === void 0 ? void 0 : (_this$getHardware2$ge = _this$getHardware2.getPeripheral()) === null || _this$getHardware2$ge === void 0 ? void 0 : _this$getHardware2$ge.properties;
      return _this.properties;
    };

    this.getRegisters = function () {
      var _this$getHardware3, _this$getHardware3$ge;

      if (_this.registers) return _this.registers;
      _this.registers = (_this$getHardware3 = _this.getHardware()) === null || _this$getHardware3 === void 0 ? void 0 : (_this$getHardware3$ge = _this$getHardware3.getPeripheral()) === null || _this$getHardware3$ge === void 0 ? void 0 : _this$getHardware3$ge.registers;
      return _this.registers;
    };

    this.getHardware = function (interfaceName, config) {
      interfaceName = Object(_autoModule_AutoModuleHelpers__WEBPACK_IMPORTED_MODULE_4__["getFriendlyInterfaceId"])(interfaceName);

      if (interfaceName) {
        var _this$getPrototypeMod, _this$getPrototypeMod2, _this$getPrototypeMod3, _peripheral$instance;

        var peripheral = (_this$getPrototypeMod = _this.getPrototypeModule()) === null || _this$getPrototypeMod === void 0 ? void 0 : (_this$getPrototypeMod2 = _this$getPrototypeMod.imports) === null || _this$getPrototypeMod2 === void 0 ? void 0 : (_this$getPrototypeMod3 = _this$getPrototypeMod2[interfaceName]) === null || _this$getPrototypeMod3 === void 0 ? void 0 : _this$getPrototypeMod3.payload;
        if (!peripheral) return undefined;
        return {
          getPeripheral: function getPeripheral() {
            return peripheral;
          },
          getName: function getName() {
            return peripheral.name;
          },
          instanceNumber: Number((_peripheral$instance = peripheral.instance) !== null && _peripheral$instance !== void 0 ? _peripheral$instance : peripheral.name.replace(peripheral.group, ""))
        };
      }

      if (!_this.defaultHardware) {
        var _getConfigData, _getConfigData$periph, _getConfigData$periph2, _this$getPrototypeMod4, _this$getPrototypeMod5, _this$getPrototypeMod6;

        var peripheralName = Object(_autoModule_AutoModuleHelpers__WEBPACK_IMPORTED_MODULE_4__["getFriendlyInterfaceId"])((_getConfigData = Object(_autoModule_getConfigData__WEBPACK_IMPORTED_MODULE_6__["getConfigData"])(_this, config)) === null || _getConfigData === void 0 ? void 0 : (_getConfigData$periph = _getConfigData.peripherals) === null || _getConfigData$periph === void 0 ? void 0 : (_getConfigData$periph2 = _getConfigData$periph[0]) === null || _getConfigData$periph2 === void 0 ? void 0 : _getConfigData$periph2.interfaceId.name);

        var _peripheral = (_this$getPrototypeMod4 = _this.getPrototypeModule()) === null || _this$getPrototypeMod4 === void 0 ? void 0 : (_this$getPrototypeMod5 = _this$getPrototypeMod4.imports) === null || _this$getPrototypeMod5 === void 0 ? void 0 : (_this$getPrototypeMod6 = _this$getPrototypeMod5[peripheralName !== null && peripheralName !== void 0 ? peripheralName : ""]) === null || _this$getPrototypeMod6 === void 0 ? void 0 : _this$getPrototypeMod6.payload;

        if (_peripheral) {
          var _peripheral$instance2;

          _this.defaultHardware = {
            getPeripheral: function getPeripheral() {
              return _peripheral;
            },
            getName: function getName() {
              return _peripheral.name;
            },
            instanceNumber: Number((_peripheral$instance2 = _peripheral.instance) !== null && _peripheral$instance2 !== void 0 ? _peripheral$instance2 : _peripheral.name.replace(_peripheral.group, ""))
          };
        }
      }

      return _this.defaultHardware;
    };

    this.getPeripheralDescription = function () {
      var _this$getHardware4;

      return (_this$getHardware4 = _this.getHardware()) === null || _this$getHardware4 === void 0 ? void 0 : _this$getHardware4.getPeripheral();
    };

    this.getDerivedData = function () {
      if (_this.derivedData) return _this.derivedData;
      _this.derivedData = _this.getDerivedDataFunction(_this);
      return _this.derivedData;
    };

    this.getDerivedFunctions = function () {
      return _this.getDerivedData().getMyFunctions();
    };

    this.getDerivedFunction = function (functionName) {
      var _this$getDerivedFunct7, _this$getDerivedFunct8;

      for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }

      return (_this$getDerivedFunct7 = _this.getDerivedFunctions()) === null || _this$getDerivedFunct7 === void 0 ? void 0 : (_this$getDerivedFunct8 = _this$getDerivedFunct7[functionName]) === null || _this$getDerivedFunct8 === void 0 ? void 0 : _this$getDerivedFunct8.call.apply(_this$getDerivedFunct8, [_this$getDerivedFunct7].concat(args));
    };

    this.getExportInterfaces = function () {
      if (_this.exportInterfaces) return _this.exportInterfaces;
      _this.exportInterfaces = Object(_interfaces_exports__WEBPACK_IMPORTED_MODULE_1__["createExportInterfaces"])(_this.prototype.exports, _this);
      return _this.exportInterfaces;
    };

    this.getImportInterfaces = function () {
      if (_this.importInterfaces) return _this.importInterfaces;
      _this.importInterfaces = Object(_interfaces_imports__WEBPACK_IMPORTED_MODULE_2__["createImportInterfaces"])(_this.prototype.imports, _this);
      return _this.importInterfaces;
    };

    this.isControlledByInterface = function (componentName) {
      var _this$getExportInterf;

      return ((_this$getExportInterf = _this.getExportInterfaces()) === null || _this$getExportInterf === void 0 ? void 0 : _this$getExportInterf.isControlledByInterface(componentName)) == true;
    };

    this.getAssignedImport = function (importName) {
      var _this$prototype$impor;

      if ((_this$prototype$impor = _this.prototype.imports) !== null && _this$prototype$impor !== void 0 && _this$prototype$impor[importName] && _microchip_scf_common_lib_Processor__WEBPACK_IMPORTED_MODULE_0__["isAssigned"](_this.prototype.imports[importName])) {
        return _this.prototype.imports[importName];
      }

      return undefined;
    };

    this.getImportValue = function (importName) {
      var _this$getAssignedImpo;

      return (_this$getAssignedImpo = _this.getAssignedImport(importName)) === null || _this$getAssignedImpo === void 0 ? void 0 : _this$getAssignedImpo.payload;
    };

    this.filterImportBySetting = function (populatedImports, importKey, optionFilter) {
      var filteredImports = _objectSpread({}, populatedImports);

      if (populatedImports[importKey]) {
        filteredImports = _objectSpread(_objectSpread({}, filteredImports), {}, _defineProperty({}, importKey, _microchip_scf_common_lib_Processor__WEBPACK_IMPORTED_MODULE_0__["filterOptions"](populatedImports[importKey], function (option) {
          return optionFilter(option);
        })));
      }

      return filteredImports;
    };

    this.isComponentValue = function (componentName) {
      var value = _this.getComponentValue(componentName);

      return value === true || value === "enabled";
    };

    this.getComponent = function (componentName) {
      return _this.getAutoModuleAppModel().getComponent(componentName);
    };

    this.getPCPHelper = function () {
      return _this.pcpHelper;
    };

    this.prototype = prototype;
    this.getDerivedDataFunction = getDerivedData;
    this.pcpHelper = new _pins_PCPHelper__WEBPACK_IMPORTED_MODULE_5__["PCPHelper"]();
    this.pcpHelper.setCallbacks({
      getCompletePinData: function getCompletePinData() {
        return getPinsLogic().getCompletePinData(_this);
      },
      getRowData: function getRowData(rowData) {
        return getPinsLogic().getRowData(_this, rowData);
      }
    });
  }

  _createClass(AppModel, [{
    key: "getComponentValue",
    value: function getComponentValue(componentName) {
      return this.getAutoModuleAppModel().getComponentValue(componentName);
    }
  }]);

  return AppModel;
}();

/***/ }),

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

/***/ "./generated_module/src/autoModule/AutoModuleAppModel.tsx":
/*!****************************************************************!*\
  !*** ./generated_module/src/autoModule/AutoModuleAppModel.tsx ***!
  \****************************************************************/
/*! exports provided: createAutoModuleAppModel, MyAutoModuleAppModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createAutoModuleAppModel", function() { return createAutoModuleAppModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyAutoModuleAppModel", function() { return MyAutoModuleAppModel; });
/* harmony import */ var _AutoModuleHelpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AutoModuleHelpers */ "./generated_module/src/autoModule/AutoModuleHelpers.tsx");
/* harmony import */ var _microchip_scf_device_lib_Setting__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @microchip/scf-device/lib/Setting */ "./node_modules/@microchip/scf-device/lib/Setting.js");
/* harmony import */ var _microchip_scf_device_lib_Setting__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_microchip_scf_device_lib_Setting__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _getConfigData__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./getConfigData */ "./generated_module/src/autoModule/getConfigData.ts");
/* harmony import */ var _Utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Utils */ "./generated_module/src/Utils.ts");
/* harmony import */ var _microchip_scf_device_lib_util_Arrays__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @microchip/scf-device/lib/util/Arrays */ "./node_modules/@microchip/scf-device/lib/util/Arrays.js");
/* harmony import */ var _microchip_scf_device_lib_util_Arrays__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_microchip_scf_device_lib_util_Arrays__WEBPACK_IMPORTED_MODULE_4__);
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }






var createAutoModuleAppModel = function createAutoModuleAppModel(model, config) {
  return new MyAutoModuleAppModel(model, config);
};
var MyAutoModuleAppModel = /*#__PURE__*/function () {
  function MyAutoModuleAppModel(model, _config) {
    var _this = this;

    _classCallCheck(this, MyAutoModuleAppModel);

    this.model = void 0;
    this.state = void 0;
    this.hardware = void 0;
    this.config = void 0;
    this.componentList = void 0;
    this.moduleName = void 0;

    this.getModuleName = function () {
      var _ref, _ref2, _ref3, _this$model$getDerive, _this$model$getDerive2, _this$model$getDerive3, _this$model$getHardwa, _this$config;

      if (_this.moduleName) return _this.moduleName;
      _this.moduleName = (_ref = (_ref2 = (_ref3 = (_this$model$getDerive = (_this$model$getDerive2 = (_this$model$getDerive3 = _this.model.getDerivedFunctions()).moduleName) === null || _this$model$getDerive2 === void 0 ? void 0 : _this$model$getDerive2.call(_this$model$getDerive3)) !== null && _this$model$getDerive !== void 0 ? _this$model$getDerive : _this.model.getComponentValue("componentName")) !== null && _ref3 !== void 0 ? _ref3 : (_this$model$getHardwa = _this.model.getHardware()) === null || _this$model$getHardwa === void 0 ? void 0 : _this$model$getHardwa.getName()) !== null && _ref2 !== void 0 ? _ref2 : (_this$config = _this.config) === null || _this$config === void 0 ? void 0 : _this$config.moduleName) !== null && _ref !== void 0 ? _ref : "Module";
      return _this.moduleName;
    };

    this.createComponentList = function () {
      var componentList = {};

      var components = _this.getComponentList(_this.config);

      var componentsWithDynamicDependencySelectors = [].concat(_toConsumableArray(components), _toConsumableArray(_this.getDefaultDependencySelectors(components)));

      if (componentsWithDynamicDependencySelectors) {
        componentsWithDynamicDependencySelectors.forEach(function (component) {
          componentList[component.name] = {
            component: component
          };
        });
      }

      return componentList;
    };

    this.getAllComponents = function () {
      return _this.componentList;
    };

    this.getComponentList = function (config) {
      var _values, _config$softwareData, _config$peripherals, _this$model$getDerive4, _this$model$getDerive5;

      var components = [];
      config = Object(_getConfigData__WEBPACK_IMPORTED_MODULE_2__["getConfigData"])(_this.model, config);
      if (!config) return components; //Software Components

      (_values = Object(_Utils__WEBPACK_IMPORTED_MODULE_3__["values"])((_config$softwareData = config.softwareData) !== null && _config$softwareData !== void 0 ? _config$softwareData : {})) === null || _values === void 0 ? void 0 : _values.forEach(function (entry) {
        components.push(entry);
      }); //Hardware Components

      (_config$peripherals = config.peripherals) === null || _config$peripherals === void 0 ? void 0 : _config$peripherals.forEach(function (peripheral) {
        if (peripheral.registers) {
          var _getKeys;

          (_getKeys = Object(_microchip_scf_device_lib_util_Arrays__WEBPACK_IMPORTED_MODULE_4__["getKeys"])(peripheral.registers)) === null || _getKeys === void 0 ? void 0 : _getKeys.forEach(function (registerName) {
            var _peripheral$registers, _peripheral$registers2;

            (_peripheral$registers = peripheral.registers) === null || _peripheral$registers === void 0 ? void 0 : (_peripheral$registers2 = _peripheral$registers[registerName]) === null || _peripheral$registers2 === void 0 ? void 0 : _peripheral$registers2.forEach(function (setting) {
              var _this$model$getHardwa2, _this$model$getHardwa3;

              //Only add hardware components that exist at runtime
              var hardwareRegister = (_this$model$getHardwa2 = _this.model.getHardware()) === null || _this$model$getHardwa2 === void 0 ? void 0 : (_this$model$getHardwa3 = _this$model$getHardwa2.getPeripheral().registers) === null || _this$model$getHardwa3 === void 0 ? void 0 : _this$model$getHardwa3[registerName];

              if (!(hardwareRegister !== null && hardwareRegister !== void 0 && hardwareRegister.settings) || hardwareRegister.settings[setting.setting] || hardwareRegister.type === "register") {
                components.push(setting);
              }
            });
          });
        }
      }); //Custom Dynamic Components

      (_this$model$getDerive4 = (_this$model$getDerive5 = _this.model.getDerivedFunctions()).getDynamicComponents) === null || _this$model$getDerive4 === void 0 ? void 0 : _this$model$getDerive4.call(_this$model$getDerive5).forEach(function (component) {
        components.push(component);
      });
      return components;
    };

    this.getActions = function (component) {
      var _this$model$getDerive6, _this$model$getDerive7, _this$model$getDerive8;

      return (_this$model$getDerive6 = (_this$model$getDerive7 = (_this$model$getDerive8 = _this.model.getDerivedFunctions()).getActions) === null || _this$model$getDerive7 === void 0 ? void 0 : _this$model$getDerive7.call(_this$model$getDerive8, component.name)) !== null && _this$model$getDerive6 !== void 0 ? _this$model$getDerive6 : component.actions;
    };

    this.getDefaultComponentAction = function (componentName) {
      var _this$getComponent;

      var component = (_this$getComponent = _this.getComponent(componentName)) === null || _this$getComponent === void 0 ? void 0 : _this$getComponent.component;
      return {
        type: "[FORM] SUBMIT",
        payload: {
          tabId: "main",
          path: "".concat(component === null || component === void 0 ? void 0 : component.group, ".").concat(component === null || component === void 0 ? void 0 : component.name),
          value: "%v"
        }
      };
    };

    this.getSoftwareComponentValue = function (tab, component) {
      var _this$state$tab$compo, _this$state, _this$state$tab, _this$state$tab$compo2;

      var overriddenValue = _this.model.getDerivedFunction(component.name);

      if (overriddenValue != undefined) {
        return overriddenValue;
      }

      if (_this.model.isControlledByInterface(component.name)) {
        var processedArg = _this.model.getExportInterfaces().getProcessedArgValue(component.name);

        if (processedArg != undefined) {
          return processedArg.value;
        }
      }

      return (_this$state$tab$compo = (_this$state = _this.state) === null || _this$state === void 0 ? void 0 : (_this$state$tab = _this$state[tab]) === null || _this$state$tab === void 0 ? void 0 : (_this$state$tab$compo2 = _this$state$tab[component.group]) === null || _this$state$tab$compo2 === void 0 ? void 0 : _this$state$tab$compo2[component.name]) !== null && _this$state$tab$compo !== void 0 ? _this$state$tab$compo : _AutoModuleHelpers__WEBPACK_IMPORTED_MODULE_0__["getDefaultValue"](_this.model.getDerivedFunctions().overrideDefaultValues, component);
    };

    this.getHardwareComponentValue = function (tab, component, setting) {
      var _this$state2, _this$state2$tab, _this$state2$tab$comp, _component$mode;

      if (!_this.hardware) return undefined;

      var overriddenValue = _this.model.getDerivedFunction(component.name);

      if (overriddenValue != undefined) {
        return overriddenValue;
      }

      if (_this.model.isControlledByInterface(component.name)) {
        var processedArg = _this.model.getExportInterfaces().getProcessedArgValue(component.name);

        if (processedArg != undefined) {
          return processedArg.value;
        }
      }

      var overriddenCompValue = _AutoModuleHelpers__WEBPACK_IMPORTED_MODULE_0__["getOverrideDefaultValue"](component, _this.model);
      var value; // value based on priority

      if (((_this$state2 = _this.state) === null || _this$state2 === void 0 ? void 0 : (_this$state2$tab = _this$state2[tab]) === null || _this$state2$tab === void 0 ? void 0 : (_this$state2$tab$comp = _this$state2$tab[component.group]) === null || _this$state2$tab$comp === void 0 ? void 0 : _this$state2$tab$comp[component.name]) != null) {
        value = _this.state[tab][component.group][component.name];
      } else if (overriddenCompValue !== undefined) {
        value = overriddenCompValue;
      } else {
        var _component$overrideDe;

        value = setting !== undefined ? component.overrideDefaultValue ? component.overrideDefaultValue : _this.getDefaultValue(component.displayOptionSetting, setting) : (_component$overrideDe = component.overrideDefaultValue) !== null && _component$overrideDe !== void 0 ? _component$overrideDe : undefined;
      } //if filtered mode -> get options


      if (value != undefined && ((_component$mode = component.mode) === null || _component$mode === void 0 ? void 0 : _component$mode.operation) === "filterOptions") {
        var _this$model$getCompon, _component$mode2;

        var options = _AutoModuleHelpers__WEBPACK_IMPORTED_MODULE_0__["getSettingOptionsIfPresent"](component, setting, (_this$model$getCompon = _this.model.getComponent((_component$mode2 = component.mode) === null || _component$mode2 === void 0 ? void 0 : _component$mode2.masterComponent)) === null || _this$model$getCompon === void 0 ? void 0 : _this$model$getCompon.value);

        if (options.indexOf(value) == -1) {
          value = options[0];
        }
      }

      return value;
    };

    this.getHardwareComponentBooleanValue = function (tab, component, setting) {
      var _this$state3, _this$state3$tab, _this$state3$tab$comp;

      if (!_this.hardware) return undefined;

      var overriddenValue = _this.model.getDerivedFunction(component.name);

      if (overriddenValue != undefined) {
        return overriddenValue;
      }

      if (_this.model.isControlledByInterface(component.name)) {
        var processedArg = _this.model.getExportInterfaces().getProcessedArgValue(component.name);

        if (processedArg != undefined) {
          return processedArg.value;
        }
      }

      var overriddenCompValue = _AutoModuleHelpers__WEBPACK_IMPORTED_MODULE_0__["getOverrideDefaultValue"](component, _this.model);
      return ((_this$state3 = _this.state) === null || _this$state3 === void 0 ? void 0 : (_this$state3$tab = _this$state3[tab]) === null || _this$state3$tab === void 0 ? void 0 : (_this$state3$tab$comp = _this$state3$tab[component.group]) === null || _this$state3$tab$comp === void 0 ? void 0 : _this$state3$tab$comp[component.name]) != null ? _this.state[tab][component.group][component.name] ? _this.config.booleanValues["true"] : _this.config.booleanValues["false"] : overriddenCompValue !== undefined ? overriddenCompValue : setting !== undefined ? component.overrideDefaultValue ? component.overrideDefaultValue : _this.getDefaultValue(component.displayOptionSetting, setting) : undefined;
    };

    this.getDependencyComponentValue = function (component) {
      var dependencySelector = new _AutoModuleHelpers__WEBPACK_IMPORTED_MODULE_0__["DependencySelector"](_this.model, component);

      var imp = _this.model.getImports()[component.importId];

      if (imp !== null && imp !== void 0 && imp.handle) {
        return dependencySelector.createOptionLabel(imp.handle, imp.payload);
      }

      return "None";
    };

    this.getDefaultValue = function (optionType, setting) {
      if (optionType == undefined) return setting.defaultValue;

      if (setting.defaultValue) {
        var _getOptionByName;

        return (_getOptionByName = Object(_microchip_scf_device_lib_Setting__WEBPACK_IMPORTED_MODULE_1__["getOptionByName"])(setting.defaultValue, setting)) === null || _getOptionByName === void 0 ? void 0 : _getOptionByName[optionType];
      }

      return undefined;
    };

    this.model = model;
    this.state = this.model.getState();
    this.hardware = this.model.getHardware();
    this.config = Object(_getConfigData__WEBPACK_IMPORTED_MODULE_2__["getConfigData"])(model, _config);
    this.componentList = this.createComponentList();
  }

  _createClass(MyAutoModuleAppModel, [{
    key: "getDefaultDependencySelectors",
    value: function getDefaultDependencySelectors(components) {
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
              tabs: [defaultTab]
            });
          }
        });
      }

      return dynamicDependencySelectors;
    }
  }, {
    key: "isComponent",
    value: function isComponent(componentName) {
      var _this$componentList$c;

      var component = (_this$componentList$c = this.componentList[componentName]) === null || _this$componentList$c === void 0 ? void 0 : _this$componentList$c.component;
      var componentValue = this.getComponentValue(componentName);

      if (component.category === "software") {
        if (component.type === "boolean") {
          return this.getComponentValue(componentName);
        }

        return componentValue !== undefined;
      } else if (component.category === "hardware") {
        return componentValue === this.config.booleanValues["true"];
      }

      return undefined;
    }
  }, {
    key: "getComponentValue",
    value: function getComponentValue(componentName) {
      var _this$getComponent2;

      return (_this$getComponent2 = this.getComponent(componentName)) === null || _this$getComponent2 === void 0 ? void 0 : _this$getComponent2.value;
    }
  }, {
    key: "getComponent",
    value: function getComponent(componentName) {
      var _this$componentList$c2,
          _this$componentList$c3,
          _this2 = this;

      if (((_this$componentList$c2 = this.componentList[componentName]) === null || _this$componentList$c2 === void 0 ? void 0 : _this$componentList$c2.value) != undefined) return this.componentList[componentName];
      var component = (_this$componentList$c3 = this.componentList[componentName]) === null || _this$componentList$c3 === void 0 ? void 0 : _this$componentList$c3.component;
      component === null || component === void 0 ? void 0 : component.tabs.forEach(function (tab) {
        if (component) {
          if (component.category === "software") {
            _this2.componentList[componentName].value = _this2.getSoftwareComponentValue(tab, component);
          } else if (component.category === "hardware") {
            var setting = _AutoModuleHelpers__WEBPACK_IMPORTED_MODULE_0__["getSettingFromComponent"](_this2.model, component);

            if (component.type === "boolean") {
              _this2.componentList[componentName].value = _this2.getHardwareComponentBooleanValue(tab, component, setting);
            } else {
              _this2.componentList[componentName].value = _this2.getHardwareComponentValue(tab, component, setting);
            }
          } else if (component.category === "import") {
            _this2.componentList[componentName].value = _this2.getDependencyComponentValue(component);
          }

          _this2.componentList[componentName].component.actions = _this2.getActions(component);
        }
      });
      return this.componentList[componentName];
    }
  }]);

  return MyAutoModuleAppModel;
}();

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

/***/ "./generated_module/src/autoModule/AutoModuleTemplates.tsx":
/*!*****************************************************************!*\
  !*** ./generated_module/src/autoModule/AutoModuleTemplates.tsx ***!
  \*****************************************************************/
/*! exports provided: getTemplates, getTemplatePayload, getTemplateSettings, getConfigBits */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTemplates", function() { return getTemplates; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTemplatePayload", function() { return getTemplatePayload; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTemplateSettings", function() { return getTemplateSettings; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getConfigBits", function() { return getConfigBits; });
/* harmony import */ var _AutoModuleHelpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AutoModuleHelpers */ "./generated_module/src/autoModule/AutoModuleHelpers.tsx");
/* harmony import */ var _microchip_scf_device_lib_util_Arrays__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @microchip/scf-device/lib/util/Arrays */ "./node_modules/@microchip/scf-device/lib/util/Arrays.js");
/* harmony import */ var _microchip_scf_device_lib_util_Arrays__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_microchip_scf_device_lib_util_Arrays__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _getConfigData__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./getConfigData */ "./generated_module/src/autoModule/getConfigData.ts");
/* harmony import */ var _Utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Utils */ "./generated_module/src/Utils.ts");
/* harmony import */ var _AutoModuleHardware__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./AutoModuleHardware */ "./generated_module/src/autoModule/AutoModuleHardware.ts");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







var getTemplates = function getTemplates(model, config) {
  var _config, _config$templates;

  config = Object(_getConfigData__WEBPACK_IMPORTED_MODULE_2__["getConfigData"])(model, config);
  var templates = [];
  (_config = config) === null || _config === void 0 ? void 0 : (_config$templates = _config.templates) === null || _config$templates === void 0 ? void 0 : _config$templates.forEach(function (template) {
    var _model$getDerivedFunc, _model$getDerivedFunc2, _model$getDerivedFunc3;

    var newTemplate = _objectSpread({}, template);

    if (!model) return;
    newTemplate.dest = (_model$getDerivedFunc = (_model$getDerivedFunc2 = (_model$getDerivedFunc3 = model.getDerivedFunctions()).templateName) === null || _model$getDerivedFunc2 === void 0 ? void 0 : _model$getDerivedFunc2.call(_model$getDerivedFunc3, newTemplate.src)) !== null && _model$getDerivedFunc !== void 0 ? _model$getDerivedFunc : newTemplate.dest;
    newTemplate.dest = newTemplate.dest.replace("${sourceFileName}", model.getName().toLowerCase() + ".c");
    newTemplate.dest = newTemplate.dest.replace("${headerFileName}", model.getName().toLowerCase() + ".h");

    if (shouldGenerate(newTemplate, model)) {
      templates.push(newTemplate);
    }
  });
  return templates;
};

var shouldGenerate = function shouldGenerate(template, model) {
  var shouldGenerate = true;
  if (!model) return shouldGenerate;

  if (shouldGenerate && template.generateWithHardware == true && !Object(_AutoModuleHardware__WEBPACK_IMPORTED_MODULE_4__["isFullyAssigned"])(model.getPrototypeModule().imports)) {
    shouldGenerate = false;
  }

  if (shouldGenerate && template.isGeneratableProperty && model.getDerivedFunction(template.isGeneratableProperty) != true) {
    shouldGenerate = false;
  }

  return shouldGenerate;
};

var getTemplatePayload = function getTemplatePayload(model, config) {
  var _values;

  if (!model) return undefined;
  config = Object(_getConfigData__WEBPACK_IMPORTED_MODULE_2__["getConfigData"])(model, config);
  var moduleName = model.getName();
  var templatePayload = {
    name: {
      uppercase: moduleName.toUpperCase(),
      lowercase: moduleName.toLowerCase(),
      instance: moduleName
    },
    filename: {
      source: "".concat(moduleName.toLowerCase(), ".c"),
      header: "".concat(moduleName.toLowerCase(), ".h")
    }
  };
  var components = model.getAutoModuleAppModel().getAllComponents();
  (_values = Object(_Utils__WEBPACK_IMPORTED_MODULE_3__["values"])(components)) === null || _values === void 0 ? void 0 : _values.forEach(function (entry) {
    templatePayload[entry.component.name] = getComponentPayload(entry.component, model);
  });
  templatePayload = _objectSpread(_objectSpread({}, templatePayload), getTemplateSettings(model, config));
  return templatePayload;
};
var getTemplateSettings = function getTemplateSettings(model, config) {
  var _model$getHardware, _model$getHardware2;

  if (!(model !== null && model !== void 0 && model.getHardware())) return undefined;
  return {
    registers: model.getRegisterValues(undefined, config),
    interrupts: (_model$getHardware = model.getHardware()) === null || _model$getHardware === void 0 ? void 0 : _model$getHardware.getPeripheral().interrupts,
    properties: (_model$getHardware2 = model.getHardware()) === null || _model$getHardware2 === void 0 ? void 0 : _model$getHardware2.getPeripheral().properties
  };
};
var getConfigBits = function getConfigBits(model, config) {
  var _config$peripherals, _config2;

  config = Object(_getConfigData__WEBPACK_IMPORTED_MODULE_2__["getConfigData"])(model, config);
  var configModule = Object(_microchip_scf_device_lib_util_Arrays__WEBPACK_IMPORTED_MODULE_1__["find"])((_config$peripherals = (_config2 = config) === null || _config2 === void 0 ? void 0 : _config2.peripherals) !== null && _config$peripherals !== void 0 ? _config$peripherals : [], function (peripheral) {
    return _AutoModuleHelpers__WEBPACK_IMPORTED_MODULE_0__["hasConfigBits"](peripheral.interfaceId.name);
  });

  if (configModule) {
    var _model$getHardware3, _getKeys;

    var interfaceName = _AutoModuleHelpers__WEBPACK_IMPORTED_MODULE_0__["getFriendlyInterfaceId"](configModule.interfaceId.name);
    var templateConfigBits = {};
    var registers = (_model$getHardware3 = model.getHardware(interfaceName)) === null || _model$getHardware3 === void 0 ? void 0 : _model$getHardware3.getPeripheral().registers;
    (_getKeys = Object(_Utils__WEBPACK_IMPORTED_MODULE_3__["getKeys"])(registers !== null && registers !== void 0 ? registers : [])) === null || _getKeys === void 0 ? void 0 : _getKeys.forEach(function (configName) {
      var _configModule$registe;

      var configBits = (_configModule$registe = configModule.registers) === null || _configModule$registe === void 0 ? void 0 : _configModule$registe[configName];
      templateConfigBits = _objectSpread(_objectSpread({}, templateConfigBits), {}, _defineProperty({}, configName, {}));
      configBits === null || configBits === void 0 ? void 0 : configBits.forEach(function (configBit) {
        var _model$getComponent5;

        var register = registers === null || registers === void 0 ? void 0 : registers[configName];
        var value;

        if (register && !register.settings) {
          var _model$getComponent$v, _model$getComponent;

          //missing settings for register
          value = (_model$getComponent$v = (_model$getComponent = model.getComponent(configBit.name)) === null || _model$getComponent === void 0 ? void 0 : _model$getComponent.value) !== null && _model$getComponent$v !== void 0 ? _model$getComponent$v : "";
        } else {
          var _registers$configName, _registers$configName2, _find, _setting$options;

          var setting = registers === null || registers === void 0 ? void 0 : (_registers$configName = registers[configName]) === null || _registers$configName === void 0 ? void 0 : (_registers$configName2 = _registers$configName.settings) === null || _registers$configName2 === void 0 ? void 0 : _registers$configName2[configBit.setting];
          value = (_find = Object(_microchip_scf_device_lib_util_Arrays__WEBPACK_IMPORTED_MODULE_1__["find"])((_setting$options = setting === null || setting === void 0 ? void 0 : setting.options) !== null && _setting$options !== void 0 ? _setting$options : [], function (option) {
            var _model$getComponent2, _model$getComponent3, _model$getComponent4;

            return option.description === ((_model$getComponent2 = model.getComponent(configBit.name)) === null || _model$getComponent2 === void 0 ? void 0 : _model$getComponent2.value) || option.alias === ((_model$getComponent3 = model.getComponent(configBit.name)) === null || _model$getComponent3 === void 0 ? void 0 : _model$getComponent3.value) || option.name === ((_model$getComponent4 = model.getComponent(configBit.name)) === null || _model$getComponent4 === void 0 ? void 0 : _model$getComponent4.value);
          })) === null || _find === void 0 ? void 0 : _find.name;
        }

        templateConfigBits[configName][configBit.setting] = {
          name: configBit.setting,
          value: value,
          description: configBit.description,
          valueAsDescription: (_model$getComponent5 = model.getComponent(configBit.name)) === null || _model$getComponent5 === void 0 ? void 0 : _model$getComponent5.value
        };
      });
    });
    return templateConfigBits;
  } else {
    return {};
  }
};

var getComponentPayload = function getComponentPayload(component, model) {
  var componentValue = model.getComponentValue(component.name);

  switch (component.type) {
    case "ComboBox":
      if (component.category === "hardware") {
        var _component$mode$maste, _component$mode;

        var setting = _AutoModuleHelpers__WEBPACK_IMPORTED_MODULE_0__["getSettingFromComponent"](model, component);
        return {
          value: componentValue,
          options: _AutoModuleHelpers__WEBPACK_IMPORTED_MODULE_0__["getSettingOptionsIfPresent"](component, setting, model.getComponentValue((_component$mode$maste = (_component$mode = component.mode) === null || _component$mode === void 0 ? void 0 : _component$mode.masterComponent) !== null && _component$mode$maste !== void 0 ? _component$mode$maste : ""))
        };
      } else if (component.category === "software") {
        return {
          value: componentValue,
          options: Object(_AutoModuleHelpers__WEBPACK_IMPORTED_MODULE_0__["getComboOptions"])(model.getDerivedFunctions().overrideOptions, component)
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

/***/ }),

/***/ "./generated_module/src/autoModule/AutoModuleView.tsx":
/*!************************************************************!*\
  !*** ./generated_module/src/autoModule/AutoModuleView.tsx ***!
  \************************************************************/
/*! exports provided: createAutoViewPayloads */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createAutoViewPayloads", function() { return createAutoViewPayloads; });
/* harmony import */ var _AutoModuleHelpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AutoModuleHelpers */ "./generated_module/src/autoModule/AutoModuleHelpers.tsx");
/* harmony import */ var _microchip_scf_register_view_helper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @microchip/scf-register-view-helper */ "./node_modules/@microchip/scf-register-view-helper/lib/CreateRegisterView.js");
/* harmony import */ var _microchip_scf_register_view_helper__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_microchip_scf_register_view_helper__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _AutoModuleHardware__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./AutoModuleHardware */ "./generated_module/src/autoModule/AutoModuleHardware.ts");
/* harmony import */ var _getConfigData__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./getConfigData */ "./generated_module/src/autoModule/getConfigData.ts");
/* harmony import */ var _Utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Utils */ "./generated_module/src/Utils.ts");
/* harmony import */ var _tables_tables__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../tables/tables */ "./generated_module/src/tables/tables.ts");
/* harmony import */ var _ContextualHelp__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ContextualHelp */ "./generated_module/src/autoModule/ContextualHelp.ts");
/* harmony import */ var _RegisterFilterMode__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./RegisterFilterMode */ "./generated_module/src/autoModule/RegisterFilterMode.ts");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }










var createAutoViewPayloads = function createAutoViewPayloads(model, config) {
  var _config;

  config = Object(_getConfigData__WEBPACK_IMPORTED_MODULE_3__["getConfigData"])(model, config);
  var payloads = {
    main: {}
  };

  if ((_config = config) !== null && _config !== void 0 && _config.tabs) {
    Object.keys(config.tabs).forEach(function (tab) {
      if (tab === "register") {
        payloads[tab] = createSimpleFormPayloadRegister();
      } else {
        var _config2, _config3;

        payloads[tab] = {
          schema: createSchema(tab),
          uiSchema: createUiSchema(tab),
          formData: createFormData(tab),
          scfUiSchema: createScfUiSchema(tab),
          name: (_config2 = config) === null || _config2 === void 0 ? void 0 : _config2.tabs[tab],
          table: shouldPopulateView() ? model === null || model === void 0 ? void 0 : model.getDerivedFunction("getTableData") : undefined,
          expandGroupsByDefault: (_config3 = config) !== null && _config3 !== void 0 && _config3.UIGroupCollapse ? config.UIGroupCollapse : true
        };
      }
    });
  }

  return payloads;

  function createSchema(tab) {
    var schema = {};

    if (config) {
      var _model$getDerivedFunc, _model$getDerivedFunc2, _model$getDerivedFunc3, _values, _getKeys, _config$UIGroups;

      var populateView = shouldPopulateView();
      schema = {
        description: (_model$getDerivedFunc = model === null || model === void 0 ? void 0 : (_model$getDerivedFunc2 = model.getDerivedFunctions()) === null || _model$getDerivedFunc2 === void 0 ? void 0 : (_model$getDerivedFunc3 = _model$getDerivedFunc2.getModuleDescription) === null || _model$getDerivedFunc3 === void 0 ? void 0 : _model$getDerivedFunc3.call(_model$getDerivedFunc2)) !== null && _model$getDerivedFunc !== void 0 ? _model$getDerivedFunc : Object(_AutoModuleHelpers__WEBPACK_IMPORTED_MODULE_0__["getModuleDefaultDescription"])(),
        title: config.moduleName,
        type: "object",
        properties: {}
      };
      var components = model.getAutoModuleAppModel().getAllComponents();
      var schemaBuilder = {
        properties: {}
      };
      (_values = Object(_Utils__WEBPACK_IMPORTED_MODULE_4__["values"])(components !== null && components !== void 0 ? components : {})) === null || _values === void 0 ? void 0 : _values.forEach(function (entry) {
        var component = entry.component;
        if (!populateView && component.category != "import") return; //always display imports

        if (component.tabs.indexOf(tab) == -1) return;

        if (!schemaBuilder[component.group]) {
          var _model$getDerivedFunc4, _model$getDerivedFunc5, _model$getDerivedFunc6, _config4, _model$getDerivedFunc7, _model$getDerivedFunc8;

          schemaBuilder[component.group] = {
            title: (_model$getDerivedFunc4 = (_model$getDerivedFunc5 = (_model$getDerivedFunc6 = model.getDerivedFunctions()).overrideGroupTitle) === null || _model$getDerivedFunc5 === void 0 ? void 0 : _model$getDerivedFunc5.call(_model$getDerivedFunc6, component.group)) !== null && _model$getDerivedFunc4 !== void 0 ? _model$getDerivedFunc4 : (_config4 = config) === null || _config4 === void 0 ? void 0 : _config4.UIGroups[component.group],
            description: (_model$getDerivedFunc7 = (_model$getDerivedFunc8 = model.getDerivedFunctions()).overrideGroupDescription) === null || _model$getDerivedFunc7 === void 0 ? void 0 : _model$getDerivedFunc7.call(_model$getDerivedFunc8, component.group),
            type: "object",
            properties: {}
          };
        }

        schemaBuilder[component.group].properties = _objectSpread(_objectSpread({}, schemaBuilder[component.group].properties), getComponentSchema(component, tab));
      }); //Sort groups based on order of UIGroups and remove groups with no components

      (_getKeys = Object(_Utils__WEBPACK_IMPORTED_MODULE_4__["getKeys"])((_config$UIGroups = config.UIGroups) !== null && _config$UIGroups !== void 0 ? _config$UIGroups : {})) === null || _getKeys === void 0 ? void 0 : _getKeys.forEach(function (group) {
        var _getKeys$length, _getKeys2, _schemaBuilder$group$, _schemaBuilder$group;

        if (((_getKeys$length = (_getKeys2 = Object(_Utils__WEBPACK_IMPORTED_MODULE_4__["getKeys"])((_schemaBuilder$group$ = (_schemaBuilder$group = schemaBuilder[group]) === null || _schemaBuilder$group === void 0 ? void 0 : _schemaBuilder$group.properties) !== null && _schemaBuilder$group$ !== void 0 ? _schemaBuilder$group$ : {})) === null || _getKeys2 === void 0 ? void 0 : _getKeys2.length) !== null && _getKeys$length !== void 0 ? _getKeys$length : -1) > 0) {
          schema.properties[group] = schemaBuilder[group];
        }
      });
    }

    return schema;
  }

  function createUiSchema(tab) {
    var uiSchema = {};

    if (config) {
      var _values2;

      if (config.UIOrder) {
        var _getKeys3, _config$UIOrder;

        (_getKeys3 = Object(_Utils__WEBPACK_IMPORTED_MODULE_4__["getKeys"])((_config$UIOrder = config.UIOrder) !== null && _config$UIOrder !== void 0 ? _config$UIOrder : {})) === null || _getKeys3 === void 0 ? void 0 : _getKeys3.forEach(function (group) {
          var _config5, _config5$UIOrder;

          uiSchema[group] = {
            "ui:order": (_config5 = config) === null || _config5 === void 0 ? void 0 : (_config5$UIOrder = _config5.UIOrder) === null || _config5$UIOrder === void 0 ? void 0 : _config5$UIOrder[group]
          };
        });
      } //components


      var components = model.getAutoModuleAppModel().getAllComponents();
      var isGroupHidden = {};
      (_values2 = Object(_Utils__WEBPACK_IMPORTED_MODULE_4__["values"])(components !== null && components !== void 0 ? components : {})) === null || _values2 === void 0 ? void 0 : _values2.forEach(function (entry) {
        var _component$tabs$index, _component$tabs;

        var component = entry.component;
        var tabIndex = (_component$tabs$index = (_component$tabs = component.tabs) === null || _component$tabs === void 0 ? void 0 : _component$tabs.indexOf(tab)) !== null && _component$tabs$index !== void 0 ? _component$tabs$index : -1;
        if (tabIndex === -1) return;
        var isComponentGroupHidden = isGroupHidden[component.group] === undefined || isGroupHidden[component.group] === true;

        if (isComponentGroupHidden) {
          var _ref, _component$uiBehavior;

          var isHidden = (_ref = ((_component$uiBehavior = component.uiBehavior) === null || _component$uiBehavior === void 0 ? void 0 : _component$uiBehavior["ui:widget"]) === "hidden") !== null && _ref !== void 0 ? _ref : false;
          isGroupHidden[component.group] = isHidden;
        }

        if (component.category === "table") {
          var table = component;
          var tableCols = table.columns;
          var colNames = Object.keys(tableCols);
          var columns = [];
          var defaultColumnWidth = Object(_tables_tables__WEBPACK_IMPORTED_MODULE_5__["calculateColumnWidth"])(tableCols);
          colNames.forEach(function (name) {
            var _ref2, _tableCols$name$heade, _ref3, _tableCols$name$dataA, _tableCols$name;

            var isColEditable = !tableCols[name].readonly;
            columns.push({
              dataField: name,
              editable: isColEditable ? undefined : false,
              columnWidth: tableCols[name].columnWidth ? tableCols[name].columnWidth + "%" : defaultColumnWidth,
              width: tableCols[name].width ? tableCols[name].width + "%" : defaultColumnWidth,
              dataSort: tableCols[name].isSortable,
              headerAlign: (_ref2 = (_tableCols$name$heade = tableCols[name].headerAlign) !== null && _tableCols$name$heade !== void 0 ? _tableCols$name$heade : tableCols[name].dataAlign) !== null && _ref2 !== void 0 ? _ref2 : "left",
              dataAlign: (_ref3 = (_tableCols$name$dataA = tableCols[name].dataAlign) !== null && _tableCols$name$dataA !== void 0 ? _tableCols$name$dataA : tableCols[name].headerAlign) !== null && _ref3 !== void 0 ? _ref3 : "left",
              tdStyle: Object(_tables_tables__WEBPACK_IMPORTED_MODULE_5__["getCellStyle"])(tableCols[name].readonly),
              headerText: (_tableCols$name = tableCols[name]) === null || _tableCols$name === void 0 ? void 0 : _tableCols$name["columnTip"]
            });
          });
          uiSchema[table.group] = _objectSpread(_objectSpread({}, uiSchema[table.group]), {}, _defineProperty({}, table.name, Object(_tables_tables__WEBPACK_IMPORTED_MODULE_5__["getTableUiSchema"])(table, columns)));
        } else {
          uiSchema[component.group] = _objectSpread(_objectSpread({}, uiSchema[component.group]), {}, _defineProperty({}, component.name, _objectSpread(_objectSpread({}, getUiBehavior(component)), getUiSchemaExportArg(component.name))));
        }
      });

      for (var group in isGroupHidden) {
        if (isGroupHidden[group]) {
          uiSchema[group] = _objectSpread(_objectSpread({}, uiSchema[group]), {}, _defineProperty({}, "ui:widget", "hidden"));
        }
      }
    }

    return uiSchema;
  }

  function createFormData(tab) {
    var formData = {};

    if (config) {
      var _values3;

      var components = model.getAutoModuleAppModel().getAllComponents();
      (_values3 = Object(_Utils__WEBPACK_IMPORTED_MODULE_4__["values"])(components)) === null || _values3 === void 0 ? void 0 : _values3.forEach(function (entry) {
        if (!config) return;
        var component = entry.component;
        var value = model.getComponentValue(component.name);

        if (component.type === "boolean" && (value === config.booleanValues["true"] || value === config.booleanValues["false"])) {
          value = value === config.booleanValues["true"];
        }

        if (component.tabs.indexOf(tab) == -1) return;

        if (component.category === "table") {
          value = Object(_tables_tables__WEBPACK_IMPORTED_MODULE_5__["getTableFormData"])(model, component, tab);
        }

        formData[component.group] = _objectSpread(_objectSpread({}, formData[component.group]), {}, _defineProperty({}, component.name, value));
      });
    }

    return formData;
  }

  function createScfUiSchema(tab) {
    var scfUiSchema = {};

    if (config) {
      var _values4;

      var components = model.getAutoModuleAppModel().getAllComponents();
      (_values4 = Object(_Utils__WEBPACK_IMPORTED_MODULE_4__["values"])(components)) === null || _values4 === void 0 ? void 0 : _values4.forEach(function (entry) {
        var component = entry.component;
        if (component.tabs.indexOf(tab) == -1) return;

        if (!scfUiSchema[component.group]) {
          scfUiSchema[component.group] = {};
        }

        if (!scfUiSchema[component.group][component.name]) {
          scfUiSchema[component.group][component.name] = {};
        }

        var actions = component.category === "import" ? getDependencySelectorActions(component) : getActions(component);
        var transformErrors = model.getDerivedFunction("getCustomUiErrors", component.name);

        if (model.getImports()) {
          var _deviceMeta$hasSdlSup;

          var deviceMeta = model.getImportValue("device_meta");
          var hasSdlSupport = (_deviceMeta$hasSdlSup = deviceMeta === null || deviceMeta === void 0 ? void 0 : deviceMeta.hasSdlSupport) !== null && _deviceMeta$hasSdlSup !== void 0 ? _deviceMeta$hasSdlSup : false;

          if (component.sdlHelp && hasSdlSupport) {
            var _model$getDerivedFunc9, _component$sdlHelp$to, _component$sdlHelp;

            scfUiSchema[component.group][component.name]["helpKeyword"] = (_model$getDerivedFunc9 = model.getDerivedFunction("getHelpUrl", component.name, component.sdlHelp.url)) !== null && _model$getDerivedFunc9 !== void 0 ? _model$getDerivedFunc9 : Object(_ContextualHelp__WEBPACK_IMPORTED_MODULE_6__["getAutoSdlHelp"])(model, component.name, component.sdlHelp.url);
            scfUiSchema[component.group][component.name]["tooltip"] = (_component$sdlHelp$to = (_component$sdlHelp = component.sdlHelp) === null || _component$sdlHelp === void 0 ? void 0 : _component$sdlHelp.tooltip) !== null && _component$sdlHelp$to !== void 0 ? _component$sdlHelp$to : "Click for more information";
          }
        }

        if (component.category === "table") {
          var _model$getState, _model$getState$tab, _model$getState$tab$c;

          var tableState = model === null || model === void 0 ? void 0 : (_model$getState = model.getState()) === null || _model$getState === void 0 ? void 0 : (_model$getState$tab = _model$getState[tab]) === null || _model$getState$tab === void 0 ? void 0 : (_model$getState$tab$c = _model$getState$tab[component.group]) === null || _model$getState$tab$c === void 0 ? void 0 : _model$getState$tab$c[component.name];
          var uids = Object(_tables_tables__WEBPACK_IMPORTED_MODULE_5__["createTableUids"])(component, tab, model, tableState);
          var cellValidationInfo = Object(_tables_tables__WEBPACK_IMPORTED_MODULE_5__["getCellValidationInfo"])(component);
          scfUiSchema[component.group][component.name]["table"] = {
            canRemoveRows: component.canRemoveRows,
            canInsertRows: component.canInsertRows,
            canAddRows: component.canAddRows,
            canMoveRowDown: component.canMoveRowDown,
            canMoveRowUp: component.canMoveRowUp,
            uids: uids,
            cellValidationInfo: cellValidationInfo
          };
          actions = Object(_tables_tables__WEBPACK_IMPORTED_MODULE_5__["getTableActions"])(component, tab, model, uids);
        }

        if (actions) {
          scfUiSchema[component.group][component.name]["actions"] = actions;
        }

        if (transformErrors) {
          scfUiSchema[component.group][component.name]["transformErrors"] = transformErrors;
        }
      });
    }

    return scfUiSchema;
  }

  function getDependencySelectorActions(component) {
    var depSelector = new _AutoModuleHelpers__WEBPACK_IMPORTED_MODULE_0__["DependencySelector"](model, component);
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
          option: dropdownOption.label
        }
      });
    });
    return JSON.stringify(dependencySelectorActions);
  }

  function getActions(component) {
    var actions = model.getDerivedFunction("getActions", component.name, component.actions);
    return JSON.stringify(actions); //TODO: support map
  }

  function shouldPopulateView() {
    var _model$getDerivedFunc10, _model$getDerivedFunc11;

    if (displayViewOnImportAssigned() === false) return false;

    if (((_model$getDerivedFunc10 = (_model$getDerivedFunc11 = model.getDerivedFunctions()).shouldPopulateViewAtStartup) === null || _model$getDerivedFunc10 === void 0 ? void 0 : _model$getDerivedFunc10.call(_model$getDerivedFunc11)) === true || Object(_AutoModuleHardware__WEBPACK_IMPORTED_MODULE_2__["isFullyAssigned"])(model.getPrototypeModule().imports)) {
      return true;
    }

    return false;
  }

  function displayViewOnImportAssigned() {
    var _config6;

    var shouldPopulateView = true;

    if ((_config6 = config) !== null && _config6 !== void 0 && _config6.displayViewOnImportAssigned) {
      config.displayViewOnImportAssigned.forEach(function (impKey) {
        if (model.getAssignedImport(impKey) == undefined) {
          shouldPopulateView = false;
        }
      });
    }

    return shouldPopulateView;
  }

  function getComponentSchema(component, tab) {
    var schema = {};
    if (component.tabs.indexOf(tab) == -1) return schema; //check isVisible - user override

    var isVisible = model.getDerivedFunction("isVisible", component.name);

    if (isVisible === false) {
      return schema;
    }

    if (component.isVisibleProperty && (model === null || model === void 0 ? void 0 : model.getDerivedFunction(component.isVisibleProperty)) == false) {
      return schema;
    } //check for modes


    if (isModeActive("isVisible", component) === false) {
      return schema;
    }

    if (component.category === "software") {
      //add software component
      schema = getSoftwareComponentSchema(component);
    } else if (component.category === "hardware") {
      //add hardware component
      schema = getHardwareComponentSchema(component);
    } else if (component.category === "import") {
      schema = getDependencyComponentSchema(component);
    } else if (component["category"] === "table") {
      //add table component
      schema = Object(_tables_tables__WEBPACK_IMPORTED_MODULE_5__["getTableComponentSchema"])(component, model);
    }

    if (schema == undefined) return schema; //add validator if present

    if (component.validation && model && model.getDerivedFunctions()[component.name + "Validator"]) {
      schema = _objectSpread(_objectSpread({}, schema), model.getDerivedFunctions()[component.name + "Validator"]());
    }

    schema = _defineProperty({}, component.name, _objectSpread({}, schema));
    return schema;
  }

  function getSoftwareComponentSchema(component) {
    var schema = {};

    if (component.type === "ComboBox") {
      var _model$getDerivedFunc12, _model$getDerivedFunc13, _model$getDerivedFunc14;

      schema = {
        type: "string",
        title: (_model$getDerivedFunc12 = (_model$getDerivedFunc13 = (_model$getDerivedFunc14 = model.getDerivedFunctions()).overrideTitle) === null || _model$getDerivedFunc13 === void 0 ? void 0 : _model$getDerivedFunc13.call(_model$getDerivedFunc14, component.name)) !== null && _model$getDerivedFunc12 !== void 0 ? _model$getDerivedFunc12 : component.description,
        "default": _AutoModuleHelpers__WEBPACK_IMPORTED_MODULE_0__["getDefaultValue"](model.getDerivedFunctions().overrideDefaultValues, component),
        "enum": _AutoModuleHelpers__WEBPACK_IMPORTED_MODULE_0__["getComboOptions"](model.getDerivedFunctions().overrideOptions, component)
      };
    } else if (component.type === "hex") {
      var _model$getDerivedFunc15, _model$getDerivedFunc16, _model$getDerivedFunc17;

      schema = {
        type: "integer",
        title: (_model$getDerivedFunc15 = (_model$getDerivedFunc16 = (_model$getDerivedFunc17 = model.getDerivedFunctions()).overrideTitle) === null || _model$getDerivedFunc16 === void 0 ? void 0 : _model$getDerivedFunc16.call(_model$getDerivedFunc17, component.name)) !== null && _model$getDerivedFunc15 !== void 0 ? _model$getDerivedFunc15 : component.description,
        format: "hex",
        "default": _AutoModuleHelpers__WEBPACK_IMPORTED_MODULE_0__["getDefaultValue"](model.getDerivedFunctions().overrideDefaultValues, component)
      };
    } else {
      var _model$getDerivedFunc18, _model$getDerivedFunc19, _model$getDerivedFunc20;

      schema = {
        type: component.type,
        title: (_model$getDerivedFunc18 = (_model$getDerivedFunc19 = (_model$getDerivedFunc20 = model.getDerivedFunctions()).overrideTitle) === null || _model$getDerivedFunc19 === void 0 ? void 0 : _model$getDerivedFunc19.call(_model$getDerivedFunc20, component.name)) !== null && _model$getDerivedFunc18 !== void 0 ? _model$getDerivedFunc18 : component.description
      };

      if (isUrl(component) && component.urlDescription) {
        schema = _objectSpread(_objectSpread({}, schema), {}, {
          description: component.urlDescription
        });
      }

      if (isImage(component) && component.imageDescription) {
        schema = _objectSpread(_objectSpread({}, schema), {}, {
          description: component.imageDescription
        });
      }
    }

    return schema;
  }

  function getDependencyComponentSchema(component) {
    var schema = {};

    if (component.type === "ComboBox") {
      var _model$getImportInter, _model$getDerivedFunc21;

      var dependencySelector = new _AutoModuleHelpers__WEBPACK_IMPORTED_MODULE_0__["DependencySelector"](model, component);

      if (dependencySelector.getDropdownOptionNames().length <= 0) {
        return schema;
      }

      var dropdownOptions = dependencySelector.getDropdownOptionNames();
      var assignedImport = (_model$getImportInter = model.getImportInterfaces().createProcessedImports("views")) === null || _model$getImportInter === void 0 ? void 0 : _model$getImportInter[component.importId];
      var NONE = "None";
      var assignedName = NONE;

      if (assignedImport !== null && assignedImport !== void 0 && assignedImport.handle) {
        assignedName = dependencySelector.createOptionLabel(assignedImport.handle, assignedImport.payload);
        dropdownOptions.push(assignedName);
      }

      dropdownOptions = dropdownOptions.sort(function (a, b) {
        return a.localeCompare(b);
      });
      dropdownOptions = [NONE].concat(_toConsumableArray(dropdownOptions.filter(function (item) {
        return item !== NONE;
      })));
      schema = {
        type: "string",
        title: (_model$getDerivedFunc21 = model.getDerivedFunction("overrideTitle", component.name)) !== null && _model$getDerivedFunc21 !== void 0 ? _model$getDerivedFunc21 : component.description,
        "default": assignedName,
        "enum": dropdownOptions
      };
    }

    return schema;
  }

  function getHardwareComponentSchema(component) {
    var schema = {};

    if (model && model.getComponentValue(component.name) !== undefined && component.type !== "register") {
      if (component.type === "ComboBox") {
        var _model$getDerivedFunc22, _model$getDerivedFunc23, _model$getDerivedFunc24, _component$mode$maste, _component$mode;

        var setting = _AutoModuleHelpers__WEBPACK_IMPORTED_MODULE_0__["getSettingFromComponent"](model, component);
        schema = {
          type: "string",
          title: (_model$getDerivedFunc22 = model.getDerivedFunction("overrideTitle", component.name)) !== null && _model$getDerivedFunc22 !== void 0 ? _model$getDerivedFunc22 : component.description,
          "default": _AutoModuleHelpers__WEBPACK_IMPORTED_MODULE_0__["getSettingDefaultIfPresent"](component, setting, (_model$getDerivedFunc23 = (_model$getDerivedFunc24 = model.getDerivedFunctions()).overrideDefaultValues) === null || _model$getDerivedFunc23 === void 0 ? void 0 : _model$getDerivedFunc23.call(_model$getDerivedFunc24, component.name)),
          "enum": _AutoModuleHelpers__WEBPACK_IMPORTED_MODULE_0__["getSettingOptionsIfPresent"](component, setting, model.getComponentValue((_component$mode$maste = (_component$mode = component.mode) === null || _component$mode === void 0 ? void 0 : _component$mode.masterComponent) !== null && _component$mode$maste !== void 0 ? _component$mode$maste : ""))
        };
      } else {
        var _model$getDerivedFunc25;

        schema = {
          type: component.type,
          title: (_model$getDerivedFunc25 = model.getDerivedFunction("overrideTitle", component.name)) !== null && _model$getDerivedFunc25 !== void 0 ? _model$getDerivedFunc25 : component.description
        };
      }
    }

    return schema;
  }

  function isModeActive(mode, component) {
    var _component$mode2, _component$mode3;

    if ((component === null || component === void 0 ? void 0 : (_component$mode2 = component.mode) === null || _component$mode2 === void 0 ? void 0 : _component$mode2.operation) !== mode) return undefined; //No mode selected

    var masterComponent = model.getComponent(component.mode.masterComponent);

    if ((_component$mode3 = component.mode) !== null && _component$mode3 !== void 0 && _component$mode3.matchRegEx) {
      var _masterComponent$valu, _masterComponent$valu2, _masterComponent$valu3, _masterComponent$valu4;

      var value = (_masterComponent$valu = masterComponent === null || masterComponent === void 0 ? void 0 : (_masterComponent$valu2 = masterComponent.value) === null || _masterComponent$valu2 === void 0 ? void 0 : (_masterComponent$valu3 = _masterComponent$valu2.toString()) === null || _masterComponent$valu3 === void 0 ? void 0 : (_masterComponent$valu4 = _masterComponent$valu3.match(component.mode.matchRegEx)) === null || _masterComponent$valu4 === void 0 ? void 0 : _masterComponent$valu4.length) !== null && _masterComponent$valu !== void 0 ? _masterComponent$valu : 0;
      return value > 0;
    }

    return undefined;
  }

  function getUiSchemaExportArg(name) {
    var uiSchema = {};

    if (model.isControlledByInterface(name)) {
      var expArg = model.getExportInterfaces().getProcessedArgValue(name);

      if (expArg) {
        uiSchema = {
          "ui:readonly": true,
          "ui:help": "Controlled by " + expArg["interface"]
        };
      }
    }

    return uiSchema;
  }

  function getUiBehavior(component) {
    var uiBehavior = {};

    if (component.uiBehavior) {
      var _getKeys4, _component$uiBehavior2;

      (_getKeys4 = Object(_Utils__WEBPACK_IMPORTED_MODULE_4__["getKeys"])((_component$uiBehavior2 = component.uiBehavior) !== null && _component$uiBehavior2 !== void 0 ? _component$uiBehavior2 : {})) === null || _getKeys4 === void 0 ? void 0 : _getKeys4.forEach(function (key) {
        var _component$uiBehavior3, _component$uiBehavior4;

        switch (key) {
          case "readonly":
            uiBehavior["ui:readonly"] = (_component$uiBehavior3 = component.uiBehavior) === null || _component$uiBehavior3 === void 0 ? void 0 : _component$uiBehavior3[key];
            break;

          default:
            uiBehavior[key] = (_component$uiBehavior4 = component.uiBehavior) === null || _component$uiBehavior4 === void 0 ? void 0 : _component$uiBehavior4[key];
            break;
        }
      });
    }

    if (isUrl(component)) {
      uiBehavior["ui:widget"] = "url";
    } else if (isImage(component)) {
      uiBehavior["ui:widget"] = "image";
    }

    var overriddenBehavior = {};

    if (model) {
      var _model$getDerivedFunc26;

      var overriddenValue = model.getDerivedFunction("getUiBehavior", component.name);

      if (overriddenValue != undefined) {
        var _getKeys5, _overriddenBehavior;

        overriddenBehavior = _objectSpread(_objectSpread({}, overriddenBehavior), overriddenValue);

        if (((_getKeys5 = Object(_Utils__WEBPACK_IMPORTED_MODULE_4__["getKeys"])((_overriddenBehavior = overriddenBehavior) !== null && _overriddenBehavior !== void 0 ? _overriddenBehavior : {})) === null || _getKeys5 === void 0 ? void 0 : _getKeys5.indexOf("readonly")) != -1) {
          overriddenBehavior["ui:readonly"] = overriddenBehavior["readonly"];
          delete overriddenBehavior["readonly"];
        }
      }

      var isEnabled = (_model$getDerivedFunc26 = model.getDerivedFunction("isEnabled", component.name)) !== null && _model$getDerivedFunc26 !== void 0 ? _model$getDerivedFunc26 : isModeActive("isEnabled", component);

      if (isEnabled != undefined) {
        overriddenBehavior = _objectSpread(_objectSpread({}, overriddenBehavior), {}, _defineProperty({}, "ui:readonly", !isEnabled));
      }

      var isVisible = model.getDerivedFunction("isVisible", component.name);

      if (isVisible != undefined) {
        if (!isVisible) {
          overriddenBehavior = _objectSpread(_objectSpread({}, overriddenBehavior), {}, _defineProperty({}, "ui:widget", "hidden"));
        }
      }
    }

    uiBehavior = _objectSpread(_objectSpread({}, uiBehavior), overriddenBehavior);
    return uiBehavior;
  }

  function createSimpleFormPayloadRegister() {
    var _config7;

    if (!((_config7 = config) !== null && _config7 !== void 0 && _config7.peripherals)) return {};
    var registerViewPayloads = [];
    config.peripherals.forEach(function (peripheral) {
      var _model$getHardware, _hardwarePeripheral;

      if (_AutoModuleHelpers__WEBPACK_IMPORTED_MODULE_0__["hasConfigBits"](peripheral.interfaceId.name)) return;
      var hardwarePeripheral = (_model$getHardware = model.getHardware(peripheral.interfaceId.name)) === null || _model$getHardware === void 0 ? void 0 : _model$getHardware.getPeripheral();
      if (!((_hardwarePeripheral = hardwarePeripheral) !== null && _hardwarePeripheral !== void 0 && _hardwarePeripheral.registers)) return;
      var registerValues = model.getRegisterValues(peripheral.interfaceId.name, config);
      var interrupts = model.getInterrupts();
      hardwarePeripheral = _RegisterFilterMode__WEBPACK_IMPORTED_MODULE_7__["processRegisterModes"](peripheral, hardwarePeripheral, model); //TODO: implement for all peripherals

      var registerView = _microchip_scf_register_view_helper__WEBPACK_IMPORTED_MODULE_1__["CreateRegisterView"]["for"](hardwarePeripheral);

      if (registerValues) {
        var _getKeys6;

        (_getKeys6 = Object(_Utils__WEBPACK_IMPORTED_MODULE_4__["getKeys"])(registerValues !== null && registerValues !== void 0 ? registerValues : {})) === null || _getKeys6 === void 0 ? void 0 : _getKeys6.forEach(function (registerName) {
          var _hardwarePeripheral2, _hardwarePeripheral2$;

          var foundRegister = (_hardwarePeripheral2 = hardwarePeripheral) === null || _hardwarePeripheral2 === void 0 ? void 0 : (_hardwarePeripheral2$ = _hardwarePeripheral2.registers) === null || _hardwarePeripheral2$ === void 0 ? void 0 : _hardwarePeripheral2$[registerName];

          if (foundRegister) {
            registerView.withRegisterValue(foundRegister, registerValues[registerName].value);
          }
        });
      }

      for (var interruptsKey in interrupts !== null && interrupts !== void 0 ? interrupts : {}) {
        var interrupt = interrupts === null || interrupts === void 0 ? void 0 : interrupts[interruptsKey];

        if (interrupt) {
          var _ref4, _interruptComponent$c, _interruptComponent$c2, _interruptComponent$c3;

          var interruptComponent = model.getComponent(interruptsKey.toLowerCase());
          var interruptCompVal = typeof (interruptComponent === null || interruptComponent === void 0 ? void 0 : interruptComponent.value) === "boolean" ? interruptComponent !== null && interruptComponent !== void 0 && interruptComponent.value ? "enabled" : "disabled" : interruptComponent === null || interruptComponent === void 0 ? void 0 : interruptComponent.value;
          registerView.withInterruptValue(interrupt, (_ref4 = interruptCompVal !== null && interruptCompVal !== void 0 ? interruptCompVal : interrupt.defaultValue) !== null && _ref4 !== void 0 ? _ref4 : "disabled").withInterruptOptions(interrupt, (_interruptComponent$c = interruptComponent === null || interruptComponent === void 0 ? void 0 : (_interruptComponent$c2 = interruptComponent.component) === null || _interruptComponent$c2 === void 0 ? void 0 : (_interruptComponent$c3 = _interruptComponent$c2["defaultValue"]) === null || _interruptComponent$c3 === void 0 ? void 0 : _interruptComponent$c3.options) !== null && _interruptComponent$c !== void 0 ? _interruptComponent$c : ["enabled", "disabled"]);
        }
      }

      registerViewPayloads.push(registerView.create());
    });
    return registerViewPayloads[0];
  }

  function isUrl(component) {
    return component.category === "software" && component.type === "string" && component.format === "url";
  }

  function isImage(component) {
    return component.category === "software" && component.type === "string" && component.format === "image";
  }
};

/***/ }),

/***/ "./generated_module/src/autoModule/ContextualHelp.ts":
/*!***********************************************************!*\
  !*** ./generated_module/src/autoModule/ContextualHelp.ts ***!
  \***********************************************************/
/*! exports provided: getAutoSdlHelp */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAutoSdlHelp", function() { return getAutoSdlHelp; });
/**
 * Returns the valid link for each component of a module
 *
 * @param dataModel - AppModel for current module
 * @param componentName - Current component under the module
 * @param helpUrl - Generic url
 * @returns Valid link to microchip docs
 */
var getAutoSdlHelp = function getAutoSdlHelp(dataModel, componentName, helpUrl) {
  var _deviceMeta$deviceNam, _dataModel$getHardwar, _dataModel$getHardwar2, _dataModel$getHardwar3, _dataModel$getHardwar4, _dataModel$getHardwar5, _dataModel$getHardwar6, _dataModel$getCompone, _dataModel$getCompone2, _comp$setting$toLower, _comp$setting, _registerName$toUpper, _dataModel$getPeriphe, _dataModel$getPeriphe2, _dataModel$getPeriphe3, _dataModel$getPeriphe4;

  var deviceMeta = dataModel.getImportValue("device_meta");
  var deviceName = (_deviceMeta$deviceNam = deviceMeta === null || deviceMeta === void 0 ? void 0 : deviceMeta.deviceName) !== null && _deviceMeta$deviceNam !== void 0 ? _deviceMeta$deviceNam : "";
  var moduleName = (_dataModel$getHardwar = (_dataModel$getHardwar2 = dataModel.getHardware()) === null || _dataModel$getHardwar2 === void 0 ? void 0 : (_dataModel$getHardwar3 = _dataModel$getHardwar2.getPeripheral()) === null || _dataModel$getHardwar3 === void 0 ? void 0 : _dataModel$getHardwar3.group) !== null && _dataModel$getHardwar !== void 0 ? _dataModel$getHardwar : "";
  var dosid = (_dataModel$getHardwar4 = (_dataModel$getHardwar5 = dataModel.getHardware()) === null || _dataModel$getHardwar5 === void 0 ? void 0 : (_dataModel$getHardwar6 = _dataModel$getHardwar5.getPeripheral()) === null || _dataModel$getHardwar6 === void 0 ? void 0 : _dataModel$getHardwar6.dosid) !== null && _dataModel$getHardwar4 !== void 0 ? _dataModel$getHardwar4 : "";
  var comp = (_dataModel$getCompone = (_dataModel$getCompone2 = dataModel.getComponent(componentName)) === null || _dataModel$getCompone2 === void 0 ? void 0 : _dataModel$getCompone2.component) !== null && _dataModel$getCompone !== void 0 ? _dataModel$getCompone : "";
  var setting = (_comp$setting$toLower = comp === null || comp === void 0 ? void 0 : (_comp$setting = comp.setting) === null || _comp$setting === void 0 ? void 0 : _comp$setting.toLowerCase()) !== null && _comp$setting$toLower !== void 0 ? _comp$setting$toLower : "";
  var registerName = componentName.toLowerCase().replace(setting, "");
  var registerAlias = (_registerName$toUpper = registerName === null || registerName === void 0 ? void 0 : registerName.toUpperCase()) !== null && _registerName$toUpper !== void 0 ? _registerName$toUpper : "";
  var deviceRegister = (_dataModel$getPeriphe = (_dataModel$getPeriphe2 = dataModel.getPeripheralDescription()) === null || _dataModel$getPeriphe2 === void 0 ? void 0 : (_dataModel$getPeriphe3 = _dataModel$getPeriphe2.registers) === null || _dataModel$getPeriphe3 === void 0 ? void 0 : (_dataModel$getPeriphe4 = _dataModel$getPeriphe3[registerAlias]) === null || _dataModel$getPeriphe4 === void 0 ? void 0 : _dataModel$getPeriphe4.name) !== null && _dataModel$getPeriphe !== void 0 ? _dataModel$getPeriphe : "";
  var register = registerAlias == deviceRegister ? registerAlias : deviceRegister;
  var url = helpUrl.replace("${deviceName}", deviceName !== null && deviceName !== void 0 ? deviceName : "").replace("${registerName}", register !== null && register !== void 0 ? register : "").replace("${moduleName}", moduleName !== null && moduleName !== void 0 ? moduleName : "").replace("${dosId}", dosid !== null && dosid !== void 0 ? dosid : "");
  return url;
};

/***/ }),

/***/ "./generated_module/src/autoModule/RegisterFilterMode.ts":
/*!***************************************************************!*\
  !*** ./generated_module/src/autoModule/RegisterFilterMode.ts ***!
  \***************************************************************/
/*! exports provided: processRegisterModes, hasModes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "processRegisterModes", function() { return processRegisterModes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hasModes", function() { return hasModes; });
/* harmony import */ var _Utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Utils */ "./generated_module/src/Utils.ts");
function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


var processRegisterModes = function processRegisterModes(peripheral, hardwarePeripheral, model) {
  var _getKeys, _peripheral$registers;

  if (!hasModes(peripheral)) {
    return hardwarePeripheral;
  }

  var modifiedHardwarePeripheral = _objectSpread(_objectSpread({}, hardwarePeripheral), {}, {
    registers: _objectSpread({}, hardwarePeripheral.registers)
  });

  (_getKeys = Object(_Utils__WEBPACK_IMPORTED_MODULE_0__["getKeys"])((_peripheral$registers = peripheral === null || peripheral === void 0 ? void 0 : peripheral.registers) !== null && _peripheral$registers !== void 0 ? _peripheral$registers : {})) === null || _getKeys === void 0 ? void 0 : _getKeys.forEach(function (registerName) {
    var _peripheral$registers2, _modifiedHardwarePeri8, _modifiedHardwarePeri9, _modifiedHardwarePeri10;

    var settings = peripheral === null || peripheral === void 0 ? void 0 : (_peripheral$registers2 = peripheral.registers) === null || _peripheral$registers2 === void 0 ? void 0 : _peripheral$registers2[registerName];
    var delFlag = false;
    settings === null || settings === void 0 ? void 0 : settings.forEach(function (setting) {
      var _setting$mode;

      /* const mode = find(setting.tabs, (mode => {
          return mode === "registerFilter"
      })) */
      // TODO : Multiple modes support
      if ((setting === null || setting === void 0 ? void 0 : (_setting$mode = setting.mode) === null || _setting$mode === void 0 ? void 0 : _setting$mode.operation) === "registerFilter") {
        var _model$getComponent, _setting$mode2, _setting$mode$matchRe, _setting$mode3;

        var targetStr = model === null || model === void 0 ? void 0 : (_model$getComponent = model.getComponent(setting === null || setting === void 0 ? void 0 : (_setting$mode2 = setting.mode) === null || _setting$mode2 === void 0 ? void 0 : _setting$mode2.masterComponent)) === null || _model$getComponent === void 0 ? void 0 : _model$getComponent.value;
        var matchRegEx = new RegExp((_setting$mode$matchRe = setting === null || setting === void 0 ? void 0 : (_setting$mode3 = setting.mode) === null || _setting$mode3 === void 0 ? void 0 : _setting$mode3.matchRegEx) !== null && _setting$mode$matchRe !== void 0 ? _setting$mode$matchRe : "");

        if (!matchRegEx.test(targetStr)) {
          var _modifiedHardwarePeri, _modifiedHardwarePeri2, _modifiedHardwarePeri3;

          var settingObj = modifiedHardwarePeripheral === null || modifiedHardwarePeripheral === void 0 ? void 0 : (_modifiedHardwarePeri = modifiedHardwarePeripheral.registers) === null || _modifiedHardwarePeri === void 0 ? void 0 : (_modifiedHardwarePeri2 = _modifiedHardwarePeri[registerName]) === null || _modifiedHardwarePeri2 === void 0 ? void 0 : (_modifiedHardwarePeri3 = _modifiedHardwarePeri2.settings) === null || _modifiedHardwarePeri3 === void 0 ? void 0 : _modifiedHardwarePeri3[setting.setting];

          if (settingObj !== undefined) {
            var _modifiedHardwarePeri4, _modifiedHardwarePeri5, _modifiedHardwarePeri6;

            modifiedHardwarePeripheral === null || modifiedHardwarePeripheral === void 0 ? true : (_modifiedHardwarePeri4 = modifiedHardwarePeripheral.registers) === null || _modifiedHardwarePeri4 === void 0 ? true : (_modifiedHardwarePeri5 = _modifiedHardwarePeri4[registerName]) === null || _modifiedHardwarePeri5 === void 0 ? true : (_modifiedHardwarePeri6 = _modifiedHardwarePeri5.settings) === null || _modifiedHardwarePeri6 === void 0 ? true : delete _modifiedHardwarePeri6[setting.setting];
          } else {
            var _modifiedHardwarePeri7;

            modifiedHardwarePeripheral === null || modifiedHardwarePeripheral === void 0 ? true : (_modifiedHardwarePeri7 = modifiedHardwarePeripheral.registers) === null || _modifiedHardwarePeri7 === void 0 ? true : delete _modifiedHardwarePeri7[registerName];
          }

          delFlag = true;
        }
      }
    });

    if (delFlag && Object(_Utils__WEBPACK_IMPORTED_MODULE_0__["getKeys"])((_modifiedHardwarePeri8 = modifiedHardwarePeripheral === null || modifiedHardwarePeripheral === void 0 ? void 0 : (_modifiedHardwarePeri9 = modifiedHardwarePeripheral.registers) === null || _modifiedHardwarePeri9 === void 0 ? void 0 : (_modifiedHardwarePeri10 = _modifiedHardwarePeri9[registerName]) === null || _modifiedHardwarePeri10 === void 0 ? void 0 : _modifiedHardwarePeri10.settings) !== null && _modifiedHardwarePeri8 !== void 0 ? _modifiedHardwarePeri8 : []).length <= 0) {
      var _modifiedHardwarePeri11, _modifiedHardwarePeri12, _modifiedHardwarePeri13;

      modifiedHardwarePeripheral === null || modifiedHardwarePeripheral === void 0 ? true : (_modifiedHardwarePeri11 = modifiedHardwarePeripheral.registers) === null || _modifiedHardwarePeri11 === void 0 ? true : (_modifiedHardwarePeri12 = _modifiedHardwarePeri11[registerName]) === null || _modifiedHardwarePeri12 === void 0 ? true : delete _modifiedHardwarePeri12.settings;
      modifiedHardwarePeripheral === null || modifiedHardwarePeripheral === void 0 ? true : (_modifiedHardwarePeri13 = modifiedHardwarePeripheral.registers) === null || _modifiedHardwarePeri13 === void 0 ? true : delete _modifiedHardwarePeri13[registerName];
    }
  });
  return modifiedHardwarePeripheral;
};
var hasModes = function hasModes(peripheral) {
  var _getKeys2, _peripheral$registers3;

  var flag = false;
  (_getKeys2 = Object(_Utils__WEBPACK_IMPORTED_MODULE_0__["getKeys"])((_peripheral$registers3 = peripheral === null || peripheral === void 0 ? void 0 : peripheral.registers) !== null && _peripheral$registers3 !== void 0 ? _peripheral$registers3 : {})) === null || _getKeys2 === void 0 ? void 0 : _getKeys2.forEach(function (registerName) {
    var _peripheral$registers4;

    var settings = peripheral === null || peripheral === void 0 ? void 0 : (_peripheral$registers4 = peripheral.registers) === null || _peripheral$registers4 === void 0 ? void 0 : _peripheral$registers4[registerName];

    var _iterator = _createForOfIteratorHelper(settings !== null && settings !== void 0 ? settings : []),
        _step;

    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var setting = _step.value;

        if ((setting === null || setting === void 0 ? void 0 : setting.mode) !== undefined) {
          flag = true;
        }
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
  });
  return flag;
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

/***/ "./generated_module/src/interfaces/exports.tsx":
/*!*****************************************************!*\
  !*** ./generated_module/src/interfaces/exports.tsx ***!
  \*****************************************************/
/*! exports provided: createExportInterfaces, MyExportInterfaces, isInterface */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createExportInterfaces", function() { return createExportInterfaces; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyExportInterfaces", function() { return MyExportInterfaces; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isInterface", function() { return isInterface; });
/* harmony import */ var _microchip_scf_device_lib_util_Arrays__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @microchip/scf-device/lib/util/Arrays */ "./node_modules/@microchip/scf-device/lib/util/Arrays.js");
/* harmony import */ var _microchip_scf_device_lib_util_Arrays__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_microchip_scf_device_lib_util_Arrays__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _autoModule_getConfigData__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../autoModule/getConfigData */ "./generated_module/src/autoModule/getConfigData.ts");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var createExportInterfaces = function createExportInterfaces(exports, model, config) {
  return new MyExportInterfaces(exports, model, config);
};
var MyExportInterfaces = /*#__PURE__*/function () {
  function MyExportInterfaces(_exports, model, config) {
    var _this = this;

    _classCallCheck(this, MyExportInterfaces);

    this.exports = void 0;
    this.model = void 0;
    this.config = void 0;
    this.components = void 0;

    this.createProcessedExports = function () {
      var exportPayload = _this.exports;

      if (_this.config && _this.config.exports) {
        var _getKeys, _this$config$exports;

        (_getKeys = Object(_microchip_scf_device_lib_util_Arrays__WEBPACK_IMPORTED_MODULE_0__["getKeys"])((_this$config$exports = _this.config.exports) !== null && _this$config$exports !== void 0 ? _this$config$exports : {})) === null || _getKeys === void 0 ? void 0 : _getKeys.forEach(function (key) {
          var _this$config$exports2, _this$config$exports3, _this$model$getDerive, _exportPayload$key;

          var exp = (_this$config$exports2 = _this.config.exports) === null || _this$config$exports2 === void 0 ? void 0 : _this$config$exports2[key];
          exportPayload = _objectSpread(_objectSpread({}, exportPayload), {}, _defineProperty({}, key, _objectSpread(_objectSpread({}, (_this$config$exports3 = _this.config.exports) === null || _this$config$exports3 === void 0 ? void 0 : _this$config$exports3[key]), {}, {
            interfaces: [],
            name: (_this$model$getDerive = _this.model.getDerivedFunction("exportName", key)) !== null && _this$model$getDerive !== void 0 ? _this$model$getDerive : (_exportPayload$key = exportPayload[key]) === null || _exportPayload$key === void 0 ? void 0 : _exportPayload$key.name
          })));
          exp === null || exp === void 0 ? void 0 : exp.interfaces.forEach(function (_int) {
            var processedInterface = _this.getInterface(key, _int.interfaceId);

            if (processedInterface) {
              var _this$model$getDerive2, _this$model, _this$model$getDerive3, _this$model2;

              exportPayload[key].interfaces.push(_objectSpread(_objectSpread({}, processedInterface), {}, {
                payload: (_this$model$getDerive2 = (_this$model = _this.model) === null || _this$model === void 0 ? void 0 : _this$model.getDerivedFunction(_int.interfaceId.name + "_payload")) !== null && _this$model$getDerive2 !== void 0 ? _this$model$getDerive2 : {},
                payloads: (_this$model$getDerive3 = (_this$model2 = _this.model) === null || _this$model2 === void 0 ? void 0 : _this$model2.getDerivedFunction(_int.interfaceId.name + "_payloads")) !== null && _this$model$getDerive3 !== void 0 ? _this$model$getDerive3 : {}
              }));
            }
          });
        });
      }

      return exportPayload;
    };

    this.getInterfaceArgs = function (interfaceKey, interfaceId) {
      var _this$getInterface;

      return (_this$getInterface = _this.getInterface(interfaceKey, interfaceId)) === null || _this$getInterface === void 0 ? void 0 : _this$getInterface.args;
    };

    this.getInterfaceResults = function (interfaceKey, interfaceId) {
      var _this$getInterface2;

      return (_this$getInterface2 = _this.getInterface(interfaceKey, interfaceId)) === null || _this$getInterface2 === void 0 ? void 0 : _this$getInterface2.results;
    };

    this.createComponentList = function () {
      var _this$config$exports4, _this$config, _getKeys2;

      var componentList = [];
      var exports = (_this$config$exports4 = (_this$config = _this.config) === null || _this$config === void 0 ? void 0 : _this$config.exports) !== null && _this$config$exports4 !== void 0 ? _this$config$exports4 : {};
      (_getKeys2 = Object(_microchip_scf_device_lib_util_Arrays__WEBPACK_IMPORTED_MODULE_0__["getKeys"])(exports)) === null || _getKeys2 === void 0 ? void 0 : _getKeys2.forEach(function (key) {
        var exp = exports[key];
        exp.interfaces.forEach(function (_int2) {
          if (_int2.components) {
            componentList.push.apply(componentList, _toConsumableArray(_int2.components));
          }
        });
      });
      return componentList;
    };

    this.isControlledByInterface = function (componentName) {
      return _this.components.indexOf(componentName) != -1;
    };

    this.getProcessedArgValue = function (componentName) {
      var processedArgValue;

      var interfaceData = _this.getInterfaceData();

      if (_this.model && _this.model.getDerivedFunctions().getProcessedArgValue && interfaceData != undefined) {
        var _this$model$getDerive4, _this$model$getDerive5;

        processedArgValue = (_this$model$getDerive4 = _this.model.getDerivedFunctions()) === null || _this$model$getDerive4 === void 0 ? void 0 : (_this$model$getDerive5 = _this$model$getDerive4.getProcessedArgValue) === null || _this$model$getDerive5 === void 0 ? void 0 : _this$model$getDerive5.call(_this$model$getDerive4, componentName, interfaceData);
      }

      return processedArgValue;
    };

    this.getInterfaceData = function () {
      var _this$config$exports5, _getKeys3;

      var argValues;
      var exports = (_this$config$exports5 = _this.config.exports) !== null && _this$config$exports5 !== void 0 ? _this$config$exports5 : {};
      (_getKeys3 = Object(_microchip_scf_device_lib_util_Arrays__WEBPACK_IMPORTED_MODULE_0__["getKeys"])(exports)) === null || _getKeys3 === void 0 ? void 0 : _getKeys3.forEach(function (key) {
        var exp = exports[key];
        exp.interfaces.forEach(function (_int3) {
          var args = _this.getInterfaceArgs(key, _int3.interfaceId);

          if (args) {
            var _getKeys4;

            (_getKeys4 = Object(_microchip_scf_device_lib_util_Arrays__WEBPACK_IMPORTED_MODULE_0__["getKeys"])(args)) === null || _getKeys4 === void 0 ? void 0 : _getKeys4.forEach(function (key) {
              var _getKeys5;

              (_getKeys5 = Object(_microchip_scf_device_lib_util_Arrays__WEBPACK_IMPORTED_MODULE_0__["getKeys"])(args[key])) === null || _getKeys5 === void 0 ? void 0 : _getKeys5.forEach(function (arg) {
                if (!argValues) argValues = [];
                argValues.push({
                  "interface": _int3.interfaceId.name,
                  name: arg,
                  value: args[key][arg],
                  module: key
                });
              });
            });
          }
        });
      });
      return argValues;
    };

    this.exports = _exports;
    this.model = model;
    this.config = Object(_autoModule_getConfigData__WEBPACK_IMPORTED_MODULE_1__["getConfigData"])(model, config);
    this.components = this.createComponentList();
  }

  _createClass(MyExportInterfaces, [{
    key: "getInterface",
    value: function getInterface(interfaceKey, interfaceId) {
      var _this$exports$interfa;

      if (!this.exports[interfaceKey]) return undefined;
      return Object(_microchip_scf_device_lib_util_Arrays__WEBPACK_IMPORTED_MODULE_0__["find"])((_this$exports$interfa = this.exports[interfaceKey].interfaces) !== null && _this$exports$interfa !== void 0 ? _this$exports$interfa : [], function (i) {
        return JSON.stringify(i.interfaceId) === JSON.stringify(interfaceId);
      });
    }
  }]);

  return MyExportInterfaces;
}();
var isInterface = function isInterface(idA, idB) {
  return JSON.stringify(idA) === JSON.stringify(idB);
};

/***/ }),

/***/ "./generated_module/src/interfaces/imports.tsx":
/*!*****************************************************!*\
  !*** ./generated_module/src/interfaces/imports.tsx ***!
  \*****************************************************/
/*! exports provided: createImportInterfaces, MyImportInterfaces */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createImportInterfaces", function() { return createImportInterfaces; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyImportInterfaces", function() { return MyImportInterfaces; });
/* harmony import */ var _autoModule_getConfigData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../autoModule/getConfigData */ "./generated_module/src/autoModule/getConfigData.ts");
/* harmony import */ var _Utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Utils */ "./generated_module/src/Utils.ts");
/* harmony import */ var _autoModule_AutoModuleHelpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../autoModule/AutoModuleHelpers */ "./generated_module/src/autoModule/AutoModuleHelpers.tsx");
/* harmony import */ var _interrupts_InterruptActions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../interrupts/InterruptActions */ "./generated_module/src/interrupts/InterruptActions.ts");
/* harmony import */ var _microchip_scf_device_lib_util_Arrays__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @microchip/scf-device/lib/util/Arrays */ "./node_modules/@microchip/scf-device/lib/util/Arrays.js");
/* harmony import */ var _microchip_scf_device_lib_util_Arrays__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_microchip_scf_device_lib_util_Arrays__WEBPACK_IMPORTED_MODULE_4__);
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }






var createImportInterfaces = function createImportInterfaces(imports, model, config) {
  return new MyImportInterfaces(imports, model, config);
};
var MyImportInterfaces = function MyImportInterfaces(_imports, model, config) {
  var _this = this;

  _classCallCheck(this, MyImportInterfaces);

  this.imports = void 0;
  this.model = void 0;
  this.config = void 0;

  this.createProcessedImports = function (stage) {
    var _getKeys, _processedImports;

    var processedImports = _this.filterImports();

    (_getKeys = Object(_Utils__WEBPACK_IMPORTED_MODULE_1__["getKeys"])((_processedImports = processedImports) !== null && _processedImports !== void 0 ? _processedImports : {})) === null || _getKeys === void 0 ? void 0 : _getKeys.forEach(function (key) {
      var _this$model, _processedImports$key, _processedImports$key2, _this$model$getDerive, _processedImports$key3, _this$getProcessedImp, _processedImports$key4, _processedImports$key5;

      processedImports = _objectSpread(_objectSpread({}, processedImports), {}, _defineProperty({}, key, _objectSpread(_objectSpread({}, processedImports[key]), {}, {
        args: stage === "arguments" ? (_this$model = _this.model) === null || _this$model === void 0 ? void 0 : _this$model.getDerivedFunction(key + "_args") : (_processedImports$key = processedImports[key]) === null || _processedImports$key === void 0 ? void 0 : _processedImports$key.args,
        results: stage === "results" ? _this.getResults(processedImports, key) : (_processedImports$key2 = processedImports[key]) === null || _processedImports$key2 === void 0 ? void 0 : _processedImports$key2.results,
        name: (_this$model$getDerive = _this.model.getDerivedFunction("importName", key)) !== null && _this$model$getDerive !== void 0 ? _this$model$getDerive : (_processedImports$key3 = processedImports[key]) === null || _processedImports$key3 === void 0 ? void 0 : _processedImports$key3.name,
        handle: Object(_autoModule_AutoModuleHelpers__WEBPACK_IMPORTED_MODULE_2__["getProcessedHandle"])(processedImports[key].handle, processedImports[key].payload),
        options: (_this$getProcessedImp = _this.getProcessedImportOptions(key, (_processedImports$key4 = (_processedImports$key5 = processedImports[key]) === null || _processedImports$key5 === void 0 ? void 0 : _processedImports$key5.options) !== null && _processedImports$key4 !== void 0 ? _processedImports$key4 : [])) !== null && _this$getProcessedImp !== void 0 ? _this$getProcessedImp : processedImports[key].options
      })));
    });
    return processedImports;
  };

  this.filterImports = function () {
    var _this$model$getDerive2, _this$model$getDerive3, _this$model$getDerive4;

    var filteredImports = (_this$model$getDerive2 = (_this$model$getDerive3 = (_this$model$getDerive4 = _this.model.getDerivedFunctions()).filterImports) === null || _this$model$getDerive3 === void 0 ? void 0 : _this$model$getDerive3.call(_this$model$getDerive4, _this.imports)) !== null && _this$model$getDerive2 !== void 0 ? _this$model$getDerive2 : _this.imports;
    return filteredImports;
  };

  this.getProcessedImportOptions = function (importKey, options) {
    var modifiedOptions = [];
    options === null || options === void 0 ? void 0 : options.forEach(function (option, index) {
      var _this$model$getDerive5, _option$payload;

      modifiedOptions[index] = _objectSpread(_objectSpread({}, option), {}, {
        handle: _objectSpread(_objectSpread({}, option.handle), {}, {
          label: (_this$model$getDerive5 = _this.model.getDerivedFunction("importOptionLabel", importKey, option)) !== null && _this$model$getDerive5 !== void 0 ? _this$model$getDerive5 : (_option$payload = option.payload) === null || _option$payload === void 0 ? void 0 : _option$payload.moduleName
        })
      });
    });
    return modifiedOptions;
  };

  this.getResults = function (imports, key) {
    var _this$model2;

    var importResults = (_this$model2 = _this.model) === null || _this$model2 === void 0 ? void 0 : _this$model2.getDerivedFunction(key + "_results");
    if (importResults) return importResults;
    var imp = imports[key];

    if (imp.interfaceId.name === "initializer-system") {
      var _this$model$getDerive6, _this$model3;

      var initResults = {
        initializer: {
          name: _this.model.getName() + "_Initialize",
          header: (_this$model$getDerive6 = (_this$model3 = _this.model) === null || _this$model3 === void 0 ? void 0 : _this$model3.getDerivedFunction("headerFile")) !== null && _this$model$getDerive6 !== void 0 ? _this$model$getDerive6 : {
            name: _this.model.getName().toLowerCase() + ".h",
            path: "include/"
          }
        }
      };
      return initResults;
    } else if (imp.interfaceId.name === "pin-standard") {
      var _this$model$getPCPHel, _this$model4;

      return (_this$model$getPCPHel = (_this$model4 = _this.model).getPCPHelper) === null || _this$model$getPCPHel === void 0 ? void 0 : _this$model$getPCPHel.call(_this$model4).getData();
    } else if (imp.interfaceId.name === "interrupt-standard") {
      var _this$model$getImport, _this$model5, _this$model5$getImpor, _values, _this$model$getHardwa, _this$model$getHardwa2, _this$model$getName;

      var interrupts = [];
      var actions = {};
      var isHighPriority = (_this$model$getImport = (_this$model5 = _this.model) === null || _this$model5 === void 0 ? void 0 : (_this$model5$getImpor = _this$model5.getImportValue("interrupt_standard")) === null || _this$model5$getImpor === void 0 ? void 0 : _this$model5$getImpor.isHighPriority) !== null && _this$model$getImport !== void 0 ? _this$model$getImport : {};
      (_values = Object(_Utils__WEBPACK_IMPORTED_MODULE_1__["values"])((_this$model$getHardwa = (_this$model$getHardwa2 = _this.model.getHardware()) === null || _this$model$getHardwa2 === void 0 ? void 0 : _this$model$getHardwa2.getPeripheral().interrupts) !== null && _this$model$getHardwa !== void 0 ? _this$model$getHardwa : {})) === null || _values === void 0 ? void 0 : _values.forEach(function (interrupt) {
        var _this$model$getDerive7, _this$model$getDerive8, _this$model$getDerive9;

        if (!interrupt) return;
        var filterInterrupt = (_this$model$getDerive7 = (_this$model$getDerive8 = (_this$model$getDerive9 = _this.model.getDerivedFunctions()).filterInterrupts) === null || _this$model$getDerive8 === void 0 ? void 0 : _this$model$getDerive8.call(_this$model$getDerive9, interrupt.name)) !== null && _this$model$getDerive7 !== void 0 ? _this$model$getDerive7 : true;

        if (filterInterrupt) {
          var _ref, _this$getInterruptCom, _this$model$isCompone, _interrupt$name, _ref2, _this$model$getHardwa3, _this$model$getHardwa4, _this$model$getDerive10, _this$model6, _this$model6$getDeriv, _this$model6$getDeriv2, _this$model$getDerive11, _this$model7, _this$model7$getDeriv, _this$model7$getDeriv2, _isHighPriority$inter, _ref3, _this$model$getDerive12, _this$model$getDerive13, _this$model$getDerive14, _actions;

          var interruptComponentName = (_ref = (_this$getInterruptCom = _this.getInterruptComponentName(interrupt.name)) !== null && _this$getInterruptCom !== void 0 ? _this$getInterruptCom : interrupt.name.toLowerCase()) !== null && _ref !== void 0 ? _ref : "";
          var isEnabled = (_this$model$isCompone = _this.model.isComponentValue(interruptComponentName !== null && interruptComponentName !== void 0 ? interruptComponentName : "")) !== null && _this$model$isCompone !== void 0 ? _this$model$isCompone : false;
          interrupts.push({
            //Standard
            name: (_interrupt$name = interrupt.name) !== null && _interrupt$name !== void 0 ? _interrupt$name : "",
            module: (_ref2 = (_this$model$getHardwa3 = (_this$model$getHardwa4 = _this.model.getHardware()) === null || _this$model$getHardwa4 === void 0 ? void 0 : _this$model$getHardwa4.getName()) !== null && _this$model$getHardwa3 !== void 0 ? _this$model$getHardwa3 : _this.model.getName()) !== null && _ref2 !== void 0 ? _ref2 : "",
            isEnabled: isEnabled,
            //Callback Extension
            isrCallback: (_this$model$getDerive10 = (_this$model6 = _this.model) === null || _this$model6 === void 0 ? void 0 : (_this$model6$getDeriv = (_this$model6$getDeriv2 = _this$model6.getDerivedFunctions()).isrCallback) === null || _this$model6$getDeriv === void 0 ? void 0 : _this$model6$getDeriv.call(_this$model6$getDeriv2, interrupt.name)) !== null && _this$model$getDerive10 !== void 0 ? _this$model$getDerive10 : {
              name: _this.model.getName() + interrupt.handlerName,
              header: (_this$model$getDerive11 = (_this$model7 = _this.model) === null || _this$model7 === void 0 ? void 0 : (_this$model7$getDeriv = (_this$model7$getDeriv2 = _this$model7.getDerivedFunctions()).headerFile) === null || _this$model7$getDeriv === void 0 ? void 0 : _this$model7$getDeriv.call(_this$model7$getDeriv2)) !== null && _this$model$getDerive11 !== void 0 ? _this$model$getDerive11 : {
                name: _this.model.getName().toLowerCase() + ".h",
                path: "include/"
              }
            },
            generateISR: isEnabled,
            //Priority Extension
            isHighPriority: (_isHighPriority$inter = isHighPriority[interrupt.name]) !== null && _isHighPriority$inter !== void 0 ? _isHighPriority$inter : true
          });

          var isEnableActions = (_ref3 = (_this$model$getDerive12 = (_this$model$getDerive13 = (_this$model$getDerive14 = _this.model.getDerivedFunctions()).getInterruptActions) === null || _this$model$getDerive13 === void 0 ? void 0 : _this$model$getDerive13.call(_this$model$getDerive14, interrupt.name, "isEnabled")) !== null && _this$model$getDerive12 !== void 0 ? _this$model$getDerive12 : []).concat.apply(_ref3, _toConsumableArray(Object(_interrupts_InterruptActions__WEBPACK_IMPORTED_MODULE_3__["getDefaultInterruptActions"])(_this.model, interruptComponentName)));

          var isEnableAction = Object(_microchip_scf_device_lib_util_Arrays__WEBPACK_IMPORTED_MODULE_4__["find"])(isEnableActions, function (action) {
            return action["validFor"] !== isEnabled;
          });
          actions = _objectSpread(_objectSpread({}, actions), {}, _defineProperty({}, interrupt.name, _objectSpread(_objectSpread({}, (_actions = actions) === null || _actions === void 0 ? void 0 : _actions[interrupt.name]), {}, {
            isEnabled: isEnableAction ? [isEnableAction] : []
          })));
        }
      });
      return {
        interruptList: interrupts,
        interruptActions: actions,
        moduleName: (_this$model$getName = _this.model.getName()) !== null && _this$model$getName !== void 0 ? _this$model$getName : ""
      };
    } else if (imp.interfaceId.name === "api-prefix-registration") {
      var _this$model$getDerive15, _this$model8, _this$model8$getDeriv, _this$model9, _this$model10;

      var apiPrefixResults = {
        apiPrefix: (_this$model$getDerive15 = (_this$model8 = _this.model) === null || _this$model8 === void 0 ? void 0 : (_this$model8$getDeriv = _this$model8.getDerivedFunctions()) === null || _this$model8$getDeriv === void 0 ? void 0 : _this$model8$getDeriv.apiPrefix) !== null && _this$model$getDerive15 !== void 0 ? _this$model$getDerive15 : (_this$model9 = _this.model) === null || _this$model9 === void 0 ? void 0 : _this$model9.getComponentValue("componentName"),
        moduleName: (_this$model10 = _this.model) === null || _this$model10 === void 0 ? void 0 : _this$model10.getName()
      };
      return apiPrefixResults;
    }
  };

  this.getInterruptComponentName = function (interruptName) {
    var _this$model$getDerive16, _this$model$getDerive17;

    return (_this$model$getDerive16 = _this.model.getDerivedFunctions()) === null || _this$model$getDerive16 === void 0 ? void 0 : (_this$model$getDerive17 = _this$model$getDerive16.interruptComponentName) === null || _this$model$getDerive17 === void 0 ? void 0 : _this$model$getDerive17.call(_this$model$getDerive16, interruptName);
  };

  this.imports = _imports;
  this.model = model;
  this.config = Object(_autoModule_getConfigData__WEBPACK_IMPORTED_MODULE_0__["getConfigData"])(model, config);
};

/***/ }),

/***/ "./generated_module/src/interrupts/InterruptActions.ts":
/*!*************************************************************!*\
  !*** ./generated_module/src/interrupts/InterruptActions.ts ***!
  \*************************************************************/
/*! exports provided: InterruptActionsBuilder, getDefaultInterruptActions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InterruptActionsBuilder", function() { return InterruptActionsBuilder; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDefaultInterruptActions", function() { return getDefaultInterruptActions; });
/* harmony import */ var _autoModule_AutoModuleHelpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../autoModule/AutoModuleHelpers */ "./generated_module/src/autoModule/AutoModuleHelpers.tsx");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }


var InterruptActionsBuilder = function InterruptActionsBuilder(model) {
  var _this = this;

  _classCallCheck(this, InterruptActionsBuilder);

  this.actions = [];
  this.curComponent = void 0;
  this.curComponentName = void 0;
  this.model = void 0;
  this.tableRowId = void 0;
  this.tableRowCol = void 0;
  this.tableCellPath = void 0;

  this.createActionFor = function (componentName) {
    var _this$model$getCompon;

    _this.actions = _this.buildActions();
    _this.curComponent = componentName ? (_this$model$getCompon = _this.model.getComponent(componentName)) === null || _this$model$getCompon === void 0 ? void 0 : _this$model$getCompon.component : undefined;
    _this.curComponentName = componentName;
    _this.tableRowId = undefined;
    _this.tableRowCol = undefined;
    _this.tableCellPath = undefined;
    return _this;
  };

  this.addActionIfEnabled = function (actionValue) {
    if (!_this.curComponentName || !_this.curComponent) return _this;
    if (!_this.isActionValueAcceptable(_this.curComponent, actionValue)) return _this;
    var payload = {
      tabId: _this.curComponent.tabs[0],
      value: actionValue
    };

    if (_this.curComponent.category === "table") {
      if (!_this.tableCellPath) return _this;
      payload = _objectSpread(_objectSpread({}, payload), {}, {
        path: "".concat(_this.curComponent.group, ".").concat(_this.curComponent.name, ".").concat(_this.tableCellPath),
        rowId: _this.tableRowId
      });
    } else {
      payload = _objectSpread(_objectSpread({}, payload), {}, {
        path: "".concat(_this.curComponent.group, ".").concat(_this.curComponent.name)
      });
    }

    _this.actions.push({
      validFor: true,
      action: {
        type: "[FORM] SUBMIT",
        payload: payload
      }
    });

    return _this;
  };

  this.addActionIfDisabled = function (actionValue) {
    if (!_this.curComponentName || !_this.curComponent) return _this;
    if (!_this.isActionValueAcceptable(_this.curComponent, actionValue)) return _this;
    var payload = {
      tabId: _this.curComponent.tabs[0],
      value: actionValue
    };

    if (_this.curComponent.category === "table") {
      if (!_this.tableCellPath) return _this;
      payload = _objectSpread(_objectSpread({}, payload), {}, {
        path: "".concat(_this.curComponent.group, ".").concat(_this.curComponent.name, ".").concat(_this.tableCellPath),
        rowId: _this.tableRowId
      });
    } else {
      payload = _objectSpread(_objectSpread({}, payload), {}, {
        path: "".concat(_this.curComponent.group, ".").concat(_this.curComponent.name)
      });
    }

    _this.actions.push({
      validFor: false,
      action: {
        type: "[FORM] SUBMIT",
        payload: payload
      }
    });

    return _this;
  };

  this.setPathToTableCell = function (rowIndex, colName) {
    var _this$curComponent;

    if (((_this$curComponent = _this.curComponent) === null || _this$curComponent === void 0 ? void 0 : _this$curComponent.category) !== "table") return _this;
    _this.tableRowId = rowIndex;
    _this.tableRowCol = colName;
    _this.tableCellPath = "".concat(rowIndex, ".").concat(colName);
    return _this;
  };

  this.isActionValueAcceptable = function (component, actionValue) {
    if (component.category === "hardware") {
      if (component.type === "ComboBox") {
        var _getSettingFromCompon;

        var options = (_getSettingFromCompon = Object(_autoModule_AutoModuleHelpers__WEBPACK_IMPORTED_MODULE_0__["getSettingFromComponent"])(_this.model, component)) === null || _getSettingFromCompon === void 0 ? void 0 : _getSettingFromCompon.options;

        if (!(options !== null && options !== void 0 && options.some(function (option) {
          var _component$displayOpt;

          return option[(_component$displayOpt = component["displayOptionSetting"]) !== null && _component$displayOpt !== void 0 ? _component$displayOpt : "alias"] === actionValue;
        }))) {
          return false;
        }
      } else if (component.type === "boolean") {
        // if (actionValue !== "enabled" && actionValue !== "disabled") {
        if (actionValue !== true && actionValue !== false) {
          return false;
        }
      }
    } else if (component.category === "software") {
      if (component.type === "ComboBox") {
        var _options = component["options"];

        if (!(_options !== null && _options !== void 0 && _options.some(function (option) {
          return option === actionValue;
        }))) {
          return false;
        }
      } else if (component.type === "boolean") {
        if (actionValue !== true && actionValue !== false) {
          return false;
        }
      }
    } else if (component.category === "table") {
      var _component$columns, _component$columns$_t, _component$columns3, _component$columns3$_;

      if (!_this.tableRowCol) return false;

      if (((_component$columns = component.columns) === null || _component$columns === void 0 ? void 0 : (_component$columns$_t = _component$columns[_this.tableRowCol]) === null || _component$columns$_t === void 0 ? void 0 : _component$columns$_t.type) === "ComboBox") {
        var _component$columns2, _component$columns2$_, _component$columns2$_2;

        var _options2 = (_component$columns2 = component.columns) === null || _component$columns2 === void 0 ? void 0 : (_component$columns2$_ = _component$columns2[_this.tableRowCol]) === null || _component$columns2$_ === void 0 ? void 0 : (_component$columns2$_2 = _component$columns2$_.defaultValue) === null || _component$columns2$_2 === void 0 ? void 0 : _component$columns2$_2["options"];

        if (!(_options2 !== null && _options2 !== void 0 && _options2.some(function (option) {
          return option === actionValue;
        }))) {
          return false;
        }
      } else if (((_component$columns3 = component.columns) === null || _component$columns3 === void 0 ? void 0 : (_component$columns3$_ = _component$columns3[_this.tableRowCol]) === null || _component$columns3$_ === void 0 ? void 0 : _component$columns3$_.type) === "boolean") {
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
};

InterruptActionsBuilder.createActionBuilder = function (model) {
  return new InterruptActionsBuilder(model);
};

function getDefaultInterruptActions(model, componentName) {
  if (!componentName) return [];
  return InterruptActionsBuilder.createActionBuilder(model).createActionFor(componentName).addActionIfEnabled(true).addActionIfDisabled(false) // .addActionIfEnabled("enabled")
  // .addActionIfDisabled("disabled")
  .buildActions();
}

/***/ }),

/***/ "./generated_module/src/pins/PCPHelper.ts":
/*!************************************************!*\
  !*** ./generated_module/src/pins/PCPHelper.ts ***!
  \************************************************/
/*! exports provided: PCPHelper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PCPHelper", function() { return PCPHelper; });
/* harmony import */ var _PCPStateActionBuilder__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PCPStateActionBuilder */ "./generated_module/src/pins/PCPStateActionBuilder.ts");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var getPinJsonObj = function getPinJsonObj() {
  try {
    return __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module '../../../src/pinsdata.json'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
  } catch (ex) {
    return {
      rows: []
    };
  }
}; // eslint-disable-next-line @typescript-eslint/no-var-requires


var pinjsonobj = getPinJsonObj();
var PCPHelper = /*#__PURE__*/function () {
  function PCPHelper() {
    var _this = this;

    _classCallCheck(this, PCPHelper);

    this.pinCallbacks = undefined;

    this.getAllFilteredRows = function (allRows) {
      var validRows = [];
      allRows.forEach(function (eachRow) {
        var userRowData = _this.userRowData(eachRow); // check the validity of user provided data


        if (userRowData && _this.isRowValid(userRowData)) {
          validRows.push(userRowData);
        }
      });
      return validRows;
    };

    this.isRowValid = function (eachRow) {
      if (eachRow !== null && eachRow !== void 0 && eachRow.name && eachRow !== null && eachRow !== void 0 && eachRow.module && eachRow !== null && eachRow !== void 0 && eachRow["function"] && eachRow !== null && eachRow !== void 0 && eachRow.direction && eachRow !== null && eachRow !== void 0 && eachRow.behaviour) {
        return true;
      } else {
        return false;
      }
    };

    this.userRowData = function (eachRow) {
      var _this$pinCallbacks;

      var eachrowret = eachRow;

      if ((_this$pinCallbacks = _this.pinCallbacks) !== null && _this$pinCallbacks !== void 0 && _this$pinCallbacks.getRowData) {
        eachrowret = _this.pinCallbacks.getRowData(_objectSpread({}, eachRow));
      }

      return eachrowret;
    };

    this.getAllRows = function () {
      var _this$pinCallbacks2;

      var pinRows = pinjsonobj === null || pinjsonobj === void 0 ? void 0 : pinjsonobj.rows;
      var userdata = {};

      if ((_this$pinCallbacks2 = _this.pinCallbacks) !== null && _this$pinCallbacks2 !== void 0 && _this$pinCallbacks2.getCompletePinData) {
        var _userdata;

        userdata = _this.pinCallbacks.getCompletePinData();

        if (userdata && (_userdata = userdata) !== null && _userdata !== void 0 && _userdata.rows) {
          pinRows = userdata.rows;
        }
      }

      return pinRows;
    };

    this.getData = function () {
      var retData = {
        rows: _this.getAllFilteredRows(_this.getAllRows())
      };
      return retData;
    };
  }

  _createClass(PCPHelper, [{
    key: "setCallbacks",
    value: function setCallbacks(callbacks) {
      this.pinCallbacks = callbacks;
    }
  }], [{
    key: "stateActionBuilder",
    value: //TODO: Figure out if this needs to be in the interface
    function stateActionBuilder(pinRow) {
      return new _PCPStateActionBuilder__WEBPACK_IMPORTED_MODULE_0__["PCPStateActionBuilder"](pinRow);
    }
  }]);

  return PCPHelper;
}();

/***/ }),

/***/ "./generated_module/src/pins/PCPStateActionBuilder.ts":
/*!************************************************************!*\
  !*** ./generated_module/src/pins/PCPStateActionBuilder.ts ***!
  \************************************************************/
/*! exports provided: PCPStateActionBuilder */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PCPStateActionBuilder", function() { return PCPStateActionBuilder; });
/* harmony import */ var _microchip_pin_standard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @microchip/pin-standard */ "./node_modules/@microchip/pin-standard/lib/index.js");
/* harmony import */ var _microchip_pin_standard__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_microchip_pin_standard__WEBPACK_IMPORTED_MODULE_0__);
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }


var PCPStateActionBuilder = /*#__PURE__*/function () {
  function PCPStateActionBuilder(pinRow) {
    _classCallCheck(this, PCPStateActionBuilder);

    this.component = void 0;
    this.rowName = void 0;
    this.pinRow = void 0;
    this.tabId = void 0;
    this.actionDataArr = [];
    this.pinRow = pinRow;
    this.tabId = "main";
  }

  _createClass(PCPStateActionBuilder, [{
    key: "rowWithName",
    value: function rowWithName(rowName) {
      this.rowName = rowName;
      return this;
    }
    /**
     *
     * @param tabId - default tabId is "main", please change this as per your needs.
     * @returns PCPStateActionBuilder
     */

  }, {
    key: "compWithTabId",
    value: function compWithTabId(tabId) {
      this.tabId = tabId;
      return this;
    }
  }, {
    key: "addIfLockedSetValue",
    value: function addIfLockedSetValue(pinRegEx, value) {
      this.actionDataArr.push({
        pinstate: _microchip_pin_standard__WEBPACK_IMPORTED_MODULE_0__["pin_state"].LOCKED,
        validFor: pinRegEx,
        value: value,
        actiontype: _microchip_pin_standard__WEBPACK_IMPORTED_MODULE_0__["actiontype"].SETACTION
      });
      return this;
    }
  }, {
    key: "addIfLockedProvideAttribs",
    value: function addIfLockedProvideAttribs(pinRegEx, attribs) {
      this.actionDataArr.push({
        pinstate: _microchip_pin_standard__WEBPACK_IMPORTED_MODULE_0__["pin_state"].LOCKED,
        validFor: pinRegEx,
        value: this.formAttribs(attribs),
        actiontype: _microchip_pin_standard__WEBPACK_IMPORTED_MODULE_0__["actiontype"].ATTRIBACTION
      });
      return this;
    }
  }, {
    key: "addIfUnlockedProvideAttribs",
    value: function addIfUnlockedProvideAttribs(pinRegEx, attribs) {
      this.actionDataArr.push({
        pinstate: _microchip_pin_standard__WEBPACK_IMPORTED_MODULE_0__["pin_state"].UNLOCK,
        validFor: pinRegEx,
        value: this.formAttribs(attribs),
        actiontype: _microchip_pin_standard__WEBPACK_IMPORTED_MODULE_0__["actiontype"].ATTRIBACTION
      });
      return this;
    }
  }, {
    key: "formAttribs",
    value: function formAttribs(attribarray) {
      return {
        attribs: attribarray
      };
    }
  }, {
    key: "addIfUnLockedSetValue",
    value: function addIfUnLockedSetValue(pinRegEx, value) {
      this.actionDataArr.push({
        pinstate: _microchip_pin_standard__WEBPACK_IMPORTED_MODULE_0__["pin_state"].UNLOCK,
        validFor: pinRegEx,
        value: value,
        actiontype: _microchip_pin_standard__WEBPACK_IMPORTED_MODULE_0__["actiontype"].SETACTION
      });
      return this;
    }
  }, {
    key: "forComponent",
    value: function forComponent(component) {
      this.component = component;
      return this;
    }
  }, {
    key: "build",
    value: function build() {
      var _this = this;

      var actionArr = [];

      if (this.pinRow.name === this.rowName) {
        this.actionDataArr.forEach(function (eachData) {
          var _eachData$actiontype;

          actionArr.push({
            validFor: eachData.validFor,
            state: _defineProperty({}, eachData.pinstate, {
              type: "[FORM] SUBMIT",
              payload: {
                tabId: _this.tabId,
                path: _this.component.group + "." + _this.component.name,
                value: eachData.value
              }
            }),
            actiontype: (_eachData$actiontype = eachData.actiontype) !== null && _eachData$actiontype !== void 0 ? _eachData$actiontype : ""
          });
        });
      }

      return actionArr;
    }
  }]);

  return PCPStateActionBuilder;
}();
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

/***/ }),

/***/ "./generated_module/src/processor.tsx":
/*!********************************************!*\
  !*** ./generated_module/src/processor.tsx ***!
  \********************************************/
/*! exports provided: process */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "process", function() { return process; });
/* harmony import */ var _App_AppModel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App/AppModel */ "./generated_module/src/App/AppModel.ts");
/* harmony import */ var _src_DerivedData__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../src/DerivedData */ "./src/DerivedData.tsx");
/* harmony import */ var _autoModule_getConfigData__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./autoModule/getConfigData */ "./generated_module/src/autoModule/getConfigData.ts");
/* harmony import */ var _autoModule_AutoModuleView__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./autoModule/AutoModuleView */ "./generated_module/src/autoModule/AutoModuleView.tsx");
/* harmony import */ var _autoModule_AutoModuleTemplates__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./autoModule/AutoModuleTemplates */ "./generated_module/src/autoModule/AutoModuleTemplates.tsx");
/* harmony import */ var _autoModule_AutoModuleHelpers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./autoModule/AutoModuleHelpers */ "./generated_module/src/autoModule/AutoModuleHelpers.tsx");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/* eslint-disable no-fallthrough */

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






/**
 * Processor Stage Refactor
 * Step 1:
 * @param initialModule
 * @param stage
 */

var process = function process(initialModule, stage, getDerivedData) {
  var _ref, _ref2, _model$getDerivedFunc, _model$getDerivedFunc2, _model$getDerivedFunc3, _ref3;

  // console.log(`Processor Stage: ${stage}`);
  // let time = Date.now();
  if (!getDerivedData) getDerivedData = _src_DerivedData__WEBPACK_IMPORTED_MODULE_1__["getDerivedData"];
  var model = Object(_App_AppModel__WEBPACK_IMPORTED_MODULE_0__["getModel"])(initialModule, getDerivedData);
  if (!model) return initialModule;

  var processedOutput = _objectSpread({}, initialModule);

  switch (stage) {
    case "arguments":
      processedOutput = _objectSpread(_objectSpread({}, processedOutput), {}, {
        imports: (_ref = model.getImportInterfaces().createProcessedImports(stage)) !== null && _ref !== void 0 ? _ref : initialModule.imports
      });
      break;

    case "payloads":
      processedOutput = _objectSpread(_objectSpread({}, processedOutput), {}, {
        exports: (_ref2 = model.getExportInterfaces().createProcessedExports()) !== null && _ref2 !== void 0 ? _ref2 : initialModule.exports,
        name: model.getName(),
        help: (_model$getDerivedFunc = model === null || model === void 0 ? void 0 : (_model$getDerivedFunc2 = model.getDerivedFunctions()) === null || _model$getDerivedFunc2 === void 0 ? void 0 : (_model$getDerivedFunc3 = _model$getDerivedFunc2.overrideModuleLevelHelp) === null || _model$getDerivedFunc3 === void 0 ? void 0 : _model$getDerivedFunc3.call(_model$getDerivedFunc2)) !== null && _model$getDerivedFunc !== void 0 ? _model$getDerivedFunc : Object(_autoModule_getConfigData__WEBPACK_IMPORTED_MODULE_2__["getConfigData"])(model).help
      });
      break;

    case "results":
      processedOutput = _objectSpread(_objectSpread({}, processedOutput), {}, {
        imports: (_ref3 = model.getImportInterfaces().createProcessedImports(stage)) !== null && _ref3 !== void 0 ? _ref3 : initialModule.imports
      });
      break;

    case "views":
      {
        var _model$getDerivedFunc4, _model$getDerivedFunc5, _model$getDerivedFunc6, _model$getDerivedFunc7, _model$getDerivedFunc8, _model$getDerivedFunc9, _model$getDerivedFunc10, _model$getDerivedFunc11, _model$getDerivedFunc12, _model$getDerivedFunc13, _model$getDerivedFunc14, _model$getDerivedFunc15, _model$getDerivedFunc16;

        var customTemplateData = (_model$getDerivedFunc4 = model === null || model === void 0 ? void 0 : (_model$getDerivedFunc5 = (_model$getDerivedFunc6 = model.getDerivedFunctions()).templateData) === null || _model$getDerivedFunc5 === void 0 ? void 0 : _model$getDerivedFunc5.call(_model$getDerivedFunc6)) !== null && _model$getDerivedFunc4 !== void 0 ? _model$getDerivedFunc4 : {};
        var view = Object(_autoModule_AutoModuleView__WEBPACK_IMPORTED_MODULE_3__["createAutoViewPayloads"])(model);
        processedOutput = _objectSpread(_objectSpread({}, processedOutput), {}, {
          payload: _objectSpread(_objectSpread({}, initialModule.payload), {}, {
            auto: view,
            customView: model === null || model === void 0 ? void 0 : (_model$getDerivedFunc7 = model.getDerivedFunctions()) === null || _model$getDerivedFunc7 === void 0 ? void 0 : (_model$getDerivedFunc8 = _model$getDerivedFunc7.getCustomView) === null || _model$getDerivedFunc8 === void 0 ? void 0 : _model$getDerivedFunc8.call(_model$getDerivedFunc7, initialModule)
          }),
          templateData: customTemplateData,
          templates: Object(_autoModule_AutoModuleTemplates__WEBPACK_IMPORTED_MODULE_4__["getTemplates"])(model),
          alerts: model === null || model === void 0 ? void 0 : (_model$getDerivedFunc9 = (_model$getDerivedFunc10 = model.getDerivedFunctions()).alerts) === null || _model$getDerivedFunc9 === void 0 ? void 0 : _model$getDerivedFunc9.call(_model$getDerivedFunc10),
          name: model.getActiveName(),
          description: (_model$getDerivedFunc11 = model === null || model === void 0 ? void 0 : (_model$getDerivedFunc12 = model.getDerivedFunctions()) === null || _model$getDerivedFunc12 === void 0 ? void 0 : (_model$getDerivedFunc13 = _model$getDerivedFunc12.getModuleDescription) === null || _model$getDerivedFunc13 === void 0 ? void 0 : _model$getDerivedFunc13.call(_model$getDerivedFunc12)) !== null && _model$getDerivedFunc11 !== void 0 ? _model$getDerivedFunc11 : Object(_autoModule_AutoModuleHelpers__WEBPACK_IMPORTED_MODULE_5__["getModuleDefaultDescription"])(),
          globalNames: (_model$getDerivedFunc14 = model === null || model === void 0 ? void 0 : (_model$getDerivedFunc15 = model.getDerivedFunctions()) === null || _model$getDerivedFunc15 === void 0 ? void 0 : (_model$getDerivedFunc16 = _model$getDerivedFunc15.getGlobalNames) === null || _model$getDerivedFunc16 === void 0 ? void 0 : _model$getDerivedFunc16.call(_model$getDerivedFunc15)) !== null && _model$getDerivedFunc14 !== void 0 ? _model$getDerivedFunc14 : []
        });
      }
      break;

    default:
      return initialModule;
  } // time = Date.now() - time;
  // console.log(`\nProcessor Time: ${time}ms\n`);


  return processedOutput;
};

/***/ }),

/***/ "./generated_module/src/tables/UidMapBuilder.ts":
/*!******************************************************!*\
  !*** ./generated_module/src/tables/UidMapBuilder.ts ***!
  \******************************************************/
/*! exports provided: UidMapBuilder */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UidMapBuilder", function() { return UidMapBuilder; });
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var UidMapBuilder = /*#__PURE__*/function () {
  function UidMapBuilder() {
    _classCallCheck(this, UidMapBuilder);

    this.uidMap = {};
  }

  _createClass(UidMapBuilder, [{
    key: "addDefaultRows",
    value: function addDefaultRows(rowData) {
      var _this = this;

      rowData.forEach(function (row, rowCount) {
        var _row$rowId;

        _this.uidMap[row.uid] = (_row$rowId = row.rowId) !== null && _row$rowId !== void 0 ? _row$rowId : rowCount;
      });
      return this;
    }
  }, {
    key: "addDynamicRows",
    value: function addDynamicRows(tableState) {
      var _this2 = this;

      tableState.forEach(function (row) {
        var uid = row === null || row === void 0 ? void 0 : row.uid;

        if (uid && uid.indexOf("dynamicRow_") > -1) {
          _this2.incrementUidAndShift(uid, row.rowId);
        }
      });
      return this;
    }
  }, {
    key: "removeRows",
    value: function removeRows(tableState) {
      var _this3 = this;

      tableState.forEach(function (row) {
        var uid = row === null || row === void 0 ? void 0 : row.uid;

        if (uid && row !== null && row !== void 0 && row.dynamicallyRemoved) {
          _this3.uidMap[uid] = -1;
        }
      });
      return this;
    }
  }, {
    key: "sortByValue",
    value: function sortByValue() {
      var _this4 = this;

      var count = 0;
      var sortedUids = [];
      this.getUidKeys().forEach(function (uid) {
        sortedUids.push(_defineProperty({}, uid, _this4.uidMap[uid]));
      });
      sortedUids = sortedUids.sort(function (a, b) {
        return a[Object.keys(a)[0]] - b[Object.keys(b)[0]];
      });
      sortedUids.forEach(function (uid) {
        var uidKey = Object.keys(uid)[0];

        if (_this4.uidMap[uidKey] > -1) {
          _this4.uidMap[uidKey] = count++;
        }
      });
      return this;
    }
  }, {
    key: "create",
    value: function create() {
      return this.uidMap;
    }
  }, {
    key: "incrementUidAndShift",
    value: function incrementUidAndShift(uid, rowId) {
      var _this5 = this;

      this.getUidKeys().forEach(function (uid) {
        if (_this5.uidMap[uid] >= rowId) {
          _this5.uidMap[uid]++;
        }
      });
      this.uidMap[uid] = rowId;
    }
  }, {
    key: "getUidKeys",
    value: function getUidKeys() {
      return Object.keys(this.uidMap);
    }
  }]);

  return UidMapBuilder;
}();

/***/ }),

/***/ "./generated_module/src/tables/tables.ts":
/*!***********************************************!*\
  !*** ./generated_module/src/tables/tables.ts ***!
  \***********************************************/
/*! exports provided: RowPrefix, overrideTableDefaultsWithChanges, isTableInState, calculateColumnWidth, getInitialTableFormData, createInitialRows, overrideCellValue, addRowsToTable, addRowToTable, removeRowFromTable, getTableFormData, getValueBasedOnState, overrideDefaultsAndFilterRows, createTableUids, getCellValidationInfo, getTableActions, getTableUiSchema, getTableComponentSchema, getCellStyle, createRowUid */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RowPrefix", function() { return RowPrefix; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "overrideTableDefaultsWithChanges", function() { return overrideTableDefaultsWithChanges; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isTableInState", function() { return isTableInState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "calculateColumnWidth", function() { return calculateColumnWidth; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getInitialTableFormData", function() { return getInitialTableFormData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createInitialRows", function() { return createInitialRows; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "overrideCellValue", function() { return overrideCellValue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addRowsToTable", function() { return addRowsToTable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addRowToTable", function() { return addRowToTable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeRowFromTable", function() { return removeRowFromTable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTableFormData", function() { return getTableFormData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getValueBasedOnState", function() { return getValueBasedOnState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "overrideDefaultsAndFilterRows", function() { return overrideDefaultsAndFilterRows; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createTableUids", function() { return createTableUids; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCellValidationInfo", function() { return getCellValidationInfo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTableActions", function() { return getTableActions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTableUiSchema", function() { return getTableUiSchema; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTableComponentSchema", function() { return getTableComponentSchema; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCellStyle", function() { return getCellStyle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createRowUid", function() { return createRowUid; });
/* harmony import */ var _UidMapBuilder__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./UidMapBuilder */ "./generated_module/src/tables/UidMapBuilder.ts");
/* harmony import */ var _microchip_scf_device_lib_util_Arrays__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @microchip/scf-device/lib/util/Arrays */ "./node_modules/@microchip/scf-device/lib/util/Arrays.js");
/* harmony import */ var _microchip_scf_device_lib_util_Arrays__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_microchip_scf_device_lib_util_Arrays__WEBPACK_IMPORTED_MODULE_1__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }



var RowPrefix;

(function (RowPrefix) {
  RowPrefix["Default"] = "defaultRow_";
  RowPrefix["Dynamic"] = "dynamicRow_";
})(RowPrefix || (RowPrefix = {}));

function overrideTableDefaultsWithChanges(rowChanged, initialFormData, uidMap) {
  var value = _toConsumableArray(initialFormData);

  if (Array.isArray(rowChanged)) {
    rowChanged.forEach(function (changedRow) {
      var changedUid = changedRow.uid;
      var rowChangeNum = uidMap[changedUid];
      value[rowChangeNum] = _objectSpread(_objectSpread({}, value[rowChangeNum]), changedRow);
    });
  }

  return value;
}
function isTableInState(tabState, component) {
  return tabState && tabState[component.group] && tabState[component.group][component.name];
}
function calculateColumnWidth(columns) {
  return columns ? 100 / Object.keys(columns).length + "%" : "auto";
}
function getInitialTableFormData(table, columnNames, model) {
  var value = [];
  var tableFormData = {};
  columnNames.forEach(function (columnName) {
    if (!tableFormData[columnName]) {
      tableFormData[columnName] = getDefaultValue(model.getDerivedFunctions().overrideTableDefaultValues, table.columns[columnName], columnName, table.name);
    }
  });

  if (!(table !== null && table !== void 0 && table.rowData)) {
    value = createInitialRows(table, tableFormData);
  } else {
    var rowId = 0;
    table === null || table === void 0 ? void 0 : table.rowData.forEach(function (row) {
      var rowDataCols = Object.keys(row);
      columnNames.forEach(function (colName) {
        if (rowDataCols.indexOf(colName) === -1) {
          var _objectSpread2;

          row = _objectSpread(_objectSpread({}, row), {}, (_objectSpread2 = {}, _defineProperty(_objectSpread2, colName, tableFormData[colName]), _defineProperty(_objectSpread2, "uid", createRowUid(RowPrefix.Default, rowId)), _objectSpread2));
        }
      });
      value.push(_objectSpread(_objectSpread({}, row), {}, {
        rowId: rowId++,
        uid: createRowUid(RowPrefix.Default, rowId)
      }));
    });
  }

  return value;
}
function createInitialRows(table) {
  var _table$defaultRowNum;

  var tableFormData = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var value = [];
  var initialRows = (_table$defaultRowNum = table === null || table === void 0 ? void 0 : table.defaultRowNum) !== null && _table$defaultRowNum !== void 0 ? _table$defaultRowNum : 1;

  for (var i = 0; i < initialRows; i++) {
    value.push(_objectSpread(_objectSpread({}, tableFormData), {}, {
      rowId: i,
      uid: createRowUid(RowPrefix.Default, i)
    }));
  }

  return value;
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
      rowId: row
    }
  };
}

function overrideCellValue(tableData, cell) {
  var modifiedTableData = _toConsumableArray(tableData);

  modifiedTableData[cell.rowId][cell.columnName] = cell.value;
  return modifiedTableData;
}
function addRowsToTable(tableData, columns, newRow, numberOfRows) {
  if (numberOfRows <= 0) {
    return tableData;
  }

  var value = addRowToTable(tableData, columns, _objectSpread(_objectSpread({}, newRow), {}, {
    uid: RowPrefix.Dynamic + (numberOfRows - 1)
  }));
  return addRowsToTable(value, columns, newRow, numberOfRows - 1);
}
function addRowToTable(tableData, columns, newRow) {
  var columnNames = Object.keys(columns);
  var newRowCols = Object.keys(newRow);
  var newRowId = newRow.rowId;
  var defaultColumnWidth = calculateColumnWidth(columns);
  var filteredTableTemp = [];

  if (tableData.length === 0) {
    filteredTableTemp.push(newRow);
    return filteredTableTemp;
  }

  if (newRowId != null) {
    columnNames.forEach(function (colName) {
      if (newRowCols.indexOf(colName) === -1) {
        var _columns$colName$defa, _columns$colName$defa2, _objectSpread3;

        newRow = _objectSpread(_objectSpread({}, newRow), {}, (_objectSpread3 = {}, _defineProperty(_objectSpread3, colName, (_columns$colName$defa = (_columns$colName$defa2 = columns[colName].defaultValue) === null || _columns$colName$defa2 === void 0 ? void 0 : _columns$colName$defa2["value"]) !== null && _columns$colName$defa !== void 0 ? _columns$colName$defa : columns[colName].defaultValue), _defineProperty(_objectSpread3, "columnWidth", columns[colName].columnWidth ? columns[colName].columnWidth + "%" : defaultColumnWidth), _objectSpread3));
      }
    });
    var tableFirstHalf = tableData.slice(0, newRowId);
    var tableSecondHalf = tableData.slice(newRowId);

    for (var i = 0; i < tableSecondHalf.length; i++) {
      var _tableSecondHalf$i;

      var currentRowId = tableSecondHalf[i].rowId;
      tableSecondHalf[i] = _objectSpread(_objectSpread({}, tableSecondHalf[i]), {}, {
        rowId: currentRowId + 1
      });
      var actions = (_tableSecondHalf$i = tableSecondHalf[i]) === null || _tableSecondHalf$i === void 0 ? void 0 : _tableSecondHalf$i.actions;

      if (actions) {
        tableSecondHalf[i]["actions"] = updateActionsRowId(actions, currentRowId + 1);
      }
    }

    tableFirstHalf.push(newRow);
    filteredTableTemp = [].concat(_toConsumableArray(tableFirstHalf), _toConsumableArray(tableSecondHalf));
    return filteredTableTemp;
  }

  return tableData;
}
function removeRowFromTable(tableData, rowId) {
  var tableRemoved = tableData.filter(function (row) {
    return row.rowId !== rowId;
  });

  for (var i = 0; i < tableRemoved.length; i++) {
    var _tableRemoved$i;

    tableRemoved[i].rowId = i;
    var actions = (_tableRemoved$i = tableRemoved[i]) === null || _tableRemoved$i === void 0 ? void 0 : _tableRemoved$i.actions;

    if (actions) {
      tableRemoved[i]["actions"] = updateActionsRowId(actions, i);
    }
  }

  return tableRemoved;
}

function updateActionsRowId(currentActions, rowId) {
  var modifiedActions = _objectSpread({}, currentActions);

  var columnNames = Object.keys(currentActions);
  columnNames.forEach(function (columnName) {
    var _modifiedActions$colu;

    var payload = (_modifiedActions$colu = modifiedActions[columnName]) === null || _modifiedActions$colu === void 0 ? void 0 : _modifiedActions$colu["payload"];

    if (payload) {
      var path = payload["path"].split(".");
      path[path.length - 2] = rowId;
      modifiedActions[columnName]["payload"]["rowId"] = rowId;
      modifiedActions[columnName]["payload"]["path"] = path.join(".");
    }
  });
  return modifiedActions;
}

function getTableFormData(model, table, tab) {
  var _model$getDerivedFunc;

  return (_model$getDerivedFunc = model.getDerivedFunction(table.name, table, model, tab)) !== null && _model$getDerivedFunc !== void 0 ? _model$getDerivedFunc : getValueBasedOnState(table, model, tab);
}
function getValueBasedOnState(table, model, tab) {
  var columnNames = Object.keys(table.columns);
  var modelState = model.getState();
  var tabState = modelState ? modelState[tab] : undefined;
  var initialFormData = getInitialTableFormData(table, columnNames, model);

  if (!isTableInState(tabState, table)) {
    return initialFormData;
  } else {
    var rowChanged = tabState[table.group][table.name];
    var tableUids = createTableUids(table, tab, model, rowChanged);
    return overrideDefaultsAndFilterRows(rowChanged, initialFormData, table.columns, tableUids, table, tab);
  }
}
function overrideDefaultsAndFilterRows(rowChanged, initialFormData, columns, tableUids, component, tab) {
  var modifiedForData = _toConsumableArray(initialFormData);

  var keys = Object.keys(tableUids);
  rowChanged = rowChanged.filter(function (row) {
    return row != null;
  });
  rowChanged.forEach(function (row) {
    if (row.uid.indexOf(RowPrefix.Dynamic) > -1) {
      modifiedForData.push(row);
    }
  });
  var filteredModifed = [];
  keys.forEach(function (uid) {
    modifiedForData.forEach(function (row) {
      if (row.uid === uid) {
        filteredModifed[tableUids[uid]] = _objectSpread(_objectSpread({}, initialFormData[0]), row);
      }
    });
  });
  filteredModifed = filteredModifed.filter(function (row) {
    return row;
  });

  for (var i = 0; i < filteredModifed.length; i++) {
    if (filteredModifed[i].uid.indexOf(RowPrefix.Dynamic) > -1) continue;
    filteredModifed[i].rowId++;
  }

  var _loop = function _loop(_i) {
    Object.keys(columns).forEach(function (columnName) {
      modifiedForData[_i].actions = updateActionsRowId(createDefaultTableAction(component, _i, columnName, tab, tableUids), _i);
    });
  };

  for (var _i = 0; _i < modifiedForData.length; _i++) {
    _loop(_i);
  }

  return overrideTableDefaultsWithChanges(rowChanged, filteredModifed, tableUids);
}
function createTableUids(component, tab, model, tableState) {
  var table = component;
  var dynamicTableData = model === null || model === void 0 ? void 0 : model.getDerivedFunction(component.name, component, model, tab);

  if (dynamicTableData) {
    var uidMap = {};
    var rowNum = 0;
    dynamicTableData.forEach(function (entry) {
      var uid = entry === null || entry === void 0 ? void 0 : entry.uid;

      if (uid !== undefined) {
        uidMap[uid] = rowNum++;
      }
    });
    return uidMap;
  }

  var rowData = table["rowData"];

  if (!dynamicTableData && rowData) {
    var _loop2 = function _loop2(i) {
      var _find$rowId, _find;

      if (!rowData[i].uid) {
        rowData[i].uid = createRowUid(RowPrefix.Default, i);
      }

      rowData[i].rowId = (_find$rowId = (_find = Object(_microchip_scf_device_lib_util_Arrays__WEBPACK_IMPORTED_MODULE_1__["find"])(tableState !== null && tableState !== void 0 ? tableState : [], function (row) {
        var _rowData;

        return row.uid === ((_rowData = rowData) === null || _rowData === void 0 ? void 0 : _rowData[i].uid);
      })) === null || _find === void 0 ? void 0 : _find.rowId) !== null && _find$rowId !== void 0 ? _find$rowId : rowData[i].rowId;
    };

    for (var i = 0; i < rowData.length; i++) {
      _loop2(i);
    }
  } else {
    rowData = dynamicTableData !== null && dynamicTableData !== void 0 ? dynamicTableData : createInitialRows(table).map(function (row) {
      var _find$rowId2, _find2;

      return _objectSpread(_objectSpread({}, row !== null && row !== void 0 ? row : {}), {}, {
        rowId: (_find$rowId2 = (_find2 = Object(_microchip_scf_device_lib_util_Arrays__WEBPACK_IMPORTED_MODULE_1__["find"])(tableState !== null && tableState !== void 0 ? tableState : [], function (r) {
          return r.uid === (row === null || row === void 0 ? void 0 : row.uid);
        })) === null || _find2 === void 0 ? void 0 : _find2.rowId) !== null && _find$rowId2 !== void 0 ? _find$rowId2 : row.rowId
      });
    });
  }

  return new _UidMapBuilder__WEBPACK_IMPORTED_MODULE_0__["UidMapBuilder"]().addDefaultRows(rowData).addDynamicRows(tableState !== null && tableState !== void 0 ? tableState : []).removeRows(tableState !== null && tableState !== void 0 ? tableState : []).sortByValue().create();
}
function getCellValidationInfo(component) {
  var table = component;
  var colInfo = [];
  var columns = table.columns;

  for (var column in columns) {
    var colData = table.columns[column];
    var info = void 0;

    if (colData["cellValidator"]) {
      info = {
        type: colData["type"],
        minValue: colData["cellValidator"]["minValue"],
        maxValue: colData["cellValidator"]["maxValue"],
        errMessage: colData["cellValidator"]["errorMessage"],
        errTitle: colData["cellValidator"]["errorTitle"],
        cValidation: colData["cellValidator"]["cValidation"],
        cValidationErrTitle: colData["cellValidator"]["cValidationErrorTitle"],
        cValidationErrMessage: colData["cellValidator"]["cValidationErrorMessage"]
      };
    }

    colInfo.push(info);
  }

  return colInfo;
}
function getTableActions(component, tab, model, uids, rowFormData) {
  var _ref, _ref2, _model$getState, _model$getState$tab, _model$getState$tab$c;

  var table = component;
  var dynamicTableData;

  if (!rowFormData) {
    dynamicTableData = model === null || model === void 0 ? void 0 : model.getDerivedFunction(component.name, component, model, tab);
  }

  var rowData = (_ref = (_ref2 = rowFormData !== null && rowFormData !== void 0 ? rowFormData : dynamicTableData) !== null && _ref2 !== void 0 ? _ref2 : table["rowData"]) !== null && _ref !== void 0 ? _ref : createInitialRows(table);
  var columnNames = Object.keys(table.columns);
  var tableActions = {
    table: {}
  };
  var rowCount = 0;
  var tableState = model === null || model === void 0 ? void 0 : (_model$getState = model.getState()) === null || _model$getState === void 0 ? void 0 : (_model$getState$tab = _model$getState[tab]) === null || _model$getState$tab === void 0 ? void 0 : (_model$getState$tab$c = _model$getState$tab[component.group]) === null || _model$getState$tab$c === void 0 ? void 0 : _model$getState$tab$c[component.name];
  rowData.forEach(function (row) {
    columnNames.forEach(function (columnName) {
      var _uid, _row$actions$columnNa, _row$actions, _model$getDerivedFunc3;

      if (!tableActions["table"][row.uid]) {
        tableActions["table"][row.uid] = {};
      }

      var uid;

      for (var uidsKey in uids) {
        if (uids[uidsKey] === row.rowId) {
          uid = uidsKey;
        }
      }

      uid = (_uid = uid) !== null && _uid !== void 0 ? _uid : createRowUid(RowPrefix.Default, rowCount);
      var defaultAction = createDefaultTableAction(component, rowCount, columnName, tab, uid);

      if (tableState) {
        var ind = -1;
        var filtered = tableState.filter(function (row, index) {
          ind = index;
          return row.uid === uid;
        });

        if (filtered.length) {
          var _uid2;

          defaultAction = createDefaultTableAction(component, ind, columnName, tab, (_uid2 = uid) !== null && _uid2 !== void 0 ? _uid2 : createRowUid(RowPrefix.Default, rowCount));
        }
      }

      if (component.columns[columnName].type == "ComboBox") {
        var _model$getDerivedFunc2;

        defaultAction["payload"] = _objectSpread(_objectSpread({}, defaultAction["payload"]), {}, {
          options: getComboOptions(model === null || model === void 0 ? void 0 : (_model$getDerivedFunc2 = model.getDerivedFunctions()) === null || _model$getDerivedFunc2 === void 0 ? void 0 : _model$getDerivedFunc2.overrideTableOptions, table.columns[columnName], columnName, component.name)
        });
      }

      var cellAction = (_row$actions$columnNa = (_row$actions = row.actions) === null || _row$actions === void 0 ? void 0 : _row$actions[columnName]) !== null && _row$actions$columnNa !== void 0 ? _row$actions$columnNa : defaultAction;
      tableActions["table"][row.uid][columnName] = (_model$getDerivedFunc3 = model === null || model === void 0 ? void 0 : model.getDerivedFunction("getActions", table.name, cellAction)) !== null && _model$getDerivedFunc3 !== void 0 ? _model$getDerivedFunc3 : cellAction;
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
        } else if (!tableActions["table"][uidKey][columnName]) {
          tableActions["table"][uidKey][columnName] = createDefaultTableAction(table, uids[uidKey], columnName, tab, uidKey);
        }
      }
    });
  });
  return JSON.stringify(tableActions);
}
function getTableUiSchema(table, columns) {
  var tableUi = {
    tableCols: columns,
    search: table["isSearchable"],
    striped: true,
    bordered: false
  };

  if (table["canRemoveRows"]) {
    tableUi = _objectSpread(_objectSpread({}, tableUi), {}, {
      rightActions: getTableRightActions()
    });
  }

  if (table["canInsertRows"]) {
    tableUi = _objectSpread(_objectSpread({}, tableUi), {}, {
      leftActions: getTableLeftActions()
    });
  }

  if (table.canMoveRowDown) {
    var _tableUi$leftActions;

    tableUi = _objectSpread(_objectSpread({}, tableUi), {}, {
      leftActions: ((_tableUi$leftActions = tableUi.leftActions) !== null && _tableUi$leftActions !== void 0 ? _tableUi$leftActions : []).concat(getTableMoveRowActions()[0])
    });
  }

  if (table.canMoveRowUp) {
    var _tableUi$leftActions2;

    tableUi = _objectSpread(_objectSpread({}, tableUi), {}, {
      leftActions: ((_tableUi$leftActions2 = tableUi.leftActions) !== null && _tableUi$leftActions2 !== void 0 ? _tableUi$leftActions2 : []).concat(getTableMoveRowActions()[1])
    });
  }

  return {
    "ui:field": "table",
    className: "col-md-12 individualComponent",
    table: _objectSpread({}, tableUi)
  };
}
function getTableComponentSchema(component, model) {
  var _model$getDerivedFunc4;

  var tableColumns = {};

  for (var columnsKey in component.columns) {
    var rjsfType = void 0;

    if (component.columns[columnsKey].type === "ComboBox") {
      var colBox = component.columns[columnsKey];
      rjsfType = "string";
      tableColumns[columnsKey] = {
        type: rjsfType,
        title: colBox.title,
        "default": getDefaultValue(model.getDerivedFunctions().overrideDefaultValues, colBox, columnsKey, component.name),
        "enum": getComboOptions(model.getDerivedFunctions().overrideTableOptions, colBox, columnsKey, component.name)
      };
    } else {
      var _component$columns$co;

      rjsfType = component === null || component === void 0 ? void 0 : (_component$columns$co = component.columns[columnsKey]) === null || _component$columns$co === void 0 ? void 0 : _component$columns$co.type;
      tableColumns[columnsKey] = {
        type: rjsfType,
        title: component.columns[columnsKey].title,
        "default": component.columns[columnsKey].defaultValue
      };
    }
  }

  return {
    type: "array",
    title: (_model$getDerivedFunc4 = model.getDerivedFunction("overrideTitle", component.name)) !== null && _model$getDerivedFunc4 !== void 0 ? _model$getDerivedFunc4 : component.description,
    items: {
      type: "object",
      properties: _objectSpread({}, tableColumns)
    }
  };
}

var getDefaultValue = function getDefaultValue(overrideDefaultValues, component, componentName, tableName) {
  var _overrideDefaultValue;

  return (_overrideDefaultValue = overrideDefaultValues === null || overrideDefaultValues === void 0 ? void 0 : overrideDefaultValues(tableName, componentName)) !== null && _overrideDefaultValue !== void 0 ? _overrideDefaultValue : component.type === "ComboBox" ? component.defaultValue.value : component.defaultValue;
};

var getComboOptions = function getComboOptions(overrideOptions, component, componentName, tableName) {
  var _component$defaultVal;

  var dynamicOptions = overrideOptions === null || overrideOptions === void 0 ? void 0 : overrideOptions(tableName, componentName);
  return dynamicOptions && dynamicOptions.length > 0 ? dynamicOptions : component === null || component === void 0 ? void 0 : (_component$defaultVal = component.defaultValue) === null || _component$defaultVal === void 0 ? void 0 : _component$defaultVal["options"];
};

function getTableLeftActions() {
  return [{
    dataField: "insert-button",
    editable: false,
    displayName: "",
    columnWidth: "6%",
    width: "6%"
  }];
}

function getTableRightActions() {
  return [{
    dataField: "delete-button",
    editable: false,
    displayName: "",
    columnWidth: "6%",
    width: "6%"
  }];
}

function getTableMoveRowActions() {
  return [{
    dataField: "row-down-button",
    editable: false,
    displayName: "",
    columnWidth: "6%",
    width: "6%"
  }, {
    dataField: "row-up-button",
    editable: false,
    displayName: "",
    columnWidth: "6%",
    width: "6%"
  }];
}

function getCellStyle(isReadonly) {
  var tdStyle = {
    overflow: "hidden",
    textOverflow: "ellipsis"
  };

  if (isReadonly) {
    tdStyle["backgroundColor"] = "#EEEEEE";
  }

  return tdStyle;
}
function createRowUid(prefix, postfix) {
  return prefix + postfix;
}

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
    QueryAdapterKey["PPS"] = "pps";
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
    pin_attribs_enum["od"] = "od";
    pin_attribs_enum["analog"] = "analog";
    pin_attribs_enum["ioc"] = "ioc";
    pin_attribs_enum["intcallback"] = "intcallback";
    pin_attribs_enum["alias"] = "alias";
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
    behaviour["PORTMUX"] = "PORTMUX";
    behaviour["EXCLUSIVE_LOCK"] = "EXCLUSIVE_LOCK";
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
var CalculateRegisterValue_1 = __importDefault(__webpack_require__(/*! @microchip/scf-device/lib/CalculateRegisterValue */ "./node_modules/@microchip/scf-register-view-helper/node_modules/@microchip/scf-device/lib/CalculateRegisterValue.js"));
var Arrays_1 = __webpack_require__(/*! @microchip/scf-device/lib/util/Arrays */ "./node_modules/@microchip/scf-register-view-helper/node_modules/@microchip/scf-device/lib/util/Arrays.js");
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
        /** Make all settings in the given register editable */
        this.withEditableRegister = function (register) {
            _this.getSafeRegisterViewModel(register).setReadonly(false);
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
        this.getSafeRegisterViewModel = function (register) { var _a; return (_a = _this.getRegisterViewModel(register !== null && register !== void 0 ? register : throwError("Invalid register parameter."))) !== null && _a !== void 0 ? _a : throwError("Cannot get register view model for '" + register.name + "'. Not found in this module."); };
        this.getSafeInterruptViewModel = function (interrupt) { var _a; return (_a = _this.getInterruptViewModel(interrupt !== null && interrupt !== void 0 ? interrupt : throwError("Invalid interrupt parameter."))) !== null && _a !== void 0 ? _a : throwError("Cannot get interrupt view model for '" + interrupt.name + "'. Not found in this module."); };
        this.getSafeSettingViewModel = function (register, setting) { var _a; return (_a = _this.getSafeRegisterViewModel(register).getSettingViewModel(setting !== null && setting !== void 0 ? setting : throwError("Invalid setting parameter."))) !== null && _a !== void 0 ? _a : throwError("Cannot get setting view model for '" + setting.name + "'. Not found in this module."); };
        this.getRegisterViewModel = function (register) {
            var name = register.name;
            return Arrays_1.find(_this.registers, function (rv) { return rv.getRegister().name === name; });
        };
        this.getInterruptViewModel = function (interrupt) {
            var name = interrupt.name;
            return Arrays_1.find(_this.interrupts, function (rv) { return rv.getInterrupt().name === name; });
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
        var registers = (_a = module.registers) !== null && _a !== void 0 ? _a : [];
        Object.keys(registers).forEach(function (registerKey) {
            models.push(new Model_1.RegisterViewModel(registers[registerKey]));
        });
        return models;
    };
    CreateRegisterView.prototype.createInterruptViewModelForEachInterrupt = function (module) {
        var _a;
        var models = [];
        var interrupts = (_a = module.interrupts) !== null && _a !== void 0 ? _a : [];
        Object.keys(interrupts).forEach(function (interruptKey) {
            models.push(new Model_1.InterruptViewModel(interrupts[interruptKey]));
        });
        return models;
    };
    CreateRegisterView.prototype.getNoOptionsViewSchema = function (setting) {
        return {
            schema: this.createSettingViewSchema(setting),
            uiSchema: setting.getMaxValue() > 1
                ? { "ui:readonly": setting.getIsReadonly() }
                : this.getBinarySettingUiSchema(setting),
            formData: setting.mapToOptionNameIfExists(setting.getValue()),
        };
    };
    CreateRegisterView.prototype.createHasOptionsViewSchema = function (setting) {
        var schemaBuilder = new ViewSchemaBuilder_1.SchemaBuilder("string", setting.getName())
            .withEnum(setting.getOptionNames())
            .withDefault(setting.mapToOptionNameIfExists(setting.getValue()));
        return {
            schema: schemaBuilder.build(),
            uiSchema: { "ui:readonly": setting.getIsReadonly() },
            formData: setting.mapToOptionNameIfExists(setting.getValue()),
        };
    };
    CreateRegisterView.prototype.createSettingViewSchema = function (setting) {
        var schema = new ViewSchemaBuilder_1.SchemaBuilder("integer", setting.getName()).withDefault(setting.mapToOptionNameIfExists(setting.getPORDefault()));
        setting.getMaxValue() > 1
            ? schema.withMaximum(setting.getMaxValue()).withMinimum(0)
            : schema.withEnum([0, 1]);
        return schema.build();
    };
    CreateRegisterView.prototype.createInterruptViewSchema = function (interrupt) {
        var schema = new ViewSchemaBuilder_1.SchemaBuilder("string", interrupt.getInterrupt().name)
            .withEnum(interrupt.getOptions())
            .withDefault(interrupt.getValue());
        return {
            schema: schema.build(),
            uiSchema: { "ui:readonly": interrupt.getIsReadonly() },
            formData: interrupt.getValue(),
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
            throwError("Creation failed for " + moduleDescription.name + ". Input module contains no registers or interrupts.");
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

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SettingViewModel = exports.RegisterViewModel = exports.InterruptViewModel = void 0;
var CalculateRegisterValue_1 = __importDefault(__webpack_require__(/*! @microchip/scf-device/lib/CalculateRegisterValue */ "./node_modules/@microchip/scf-register-view-helper/node_modules/@microchip/scf-device/lib/CalculateRegisterValue.js"));
var Arrays_1 = __webpack_require__(/*! @microchip/scf-device/lib/util/Arrays */ "./node_modules/@microchip/scf-register-view-helper/node_modules/@microchip/scf-device/lib/util/Arrays.js");
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
        this.getOptions = function () { return _this.options; };
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
            return Arrays_1.find(_this.settings, function (rv) { return rv.getSetting().name === name; });
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
        this.getDefaultValue = function () {
            return CalculateRegisterValue_1.default.for(_this.register).asNumber();
        };
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
        var settings = (_a = register.settings) !== null && _a !== void 0 ? _a : [];
        Object.keys(settings).forEach(function (settingKey) {
            models.push(new SettingViewModel(settings[settingKey], _this.getValueOrDefault));
        });
        return models;
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
            return Arrays_1.map(nullSafe(_this.setting.options), function (option) { return option.name; });
        };
        this.mapToOptionNameIfExists = function (value) {
            var option = _this.getOptionForValue(value);
            return option != null ? option.name : value;
        };
        this.getOptionForValue = function (value) {
            return Arrays_1.find(nullSafe(_this.setting.options), function (option) {
                var optionValue = option.value;
                return optionValue != undefined
                    ? parseInt(optionValue) === value
                    : false;
            });
        };
        this.getValue = function () {
            var value = _this.getRegisterValue();
            value &= _this.getMask();
            return value >> _this.getShift();
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
var nullSafe = function (array) {
    return array ? array : [];
};
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
        this.formData = __assign(__assign({}, this.formData), (_c = {}, _c[childName] = child.formData, _c));
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
    UiSchemaBuilder.prototype.build = function () {
        return {
            "ui:readonly": this.isReadOnly,
            "ui:widget": this.widget,
            "ui:options": this.options,
        };
    };
    return UiSchemaBuilder;
}());
exports.UiSchemaBuilder = UiSchemaBuilder;
//# sourceMappingURL=ViewSchemaBuilder.js.map

/***/ }),

/***/ "./node_modules/@microchip/scf-register-view-helper/node_modules/@microchip/scf-device/lib/CalculateRegisterValue.js":
/*!***************************************************************************************************************************!*\
  !*** ./node_modules/@microchip/scf-register-view-helper/node_modules/@microchip/scf-device/lib/CalculateRegisterValue.js ***!
  \***************************************************************************************************************************/
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
var Setting_1 = __webpack_require__(/*! ./Setting */ "./node_modules/@microchip/scf-register-view-helper/node_modules/@microchip/scf-device/lib/Setting.js");
var Register_1 = __webpack_require__(/*! ./Register */ "./node_modules/@microchip/scf-register-view-helper/node_modules/@microchip/scf-device/lib/Register.js");
var Arrays_1 = __webpack_require__(/*! ./util/Arrays */ "./node_modules/@microchip/scf-register-view-helper/node_modules/@microchip/scf-device/lib/util/Arrays.js");
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

/***/ "./node_modules/@microchip/scf-register-view-helper/node_modules/@microchip/scf-device/lib/Register.js":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/@microchip/scf-register-view-helper/node_modules/@microchip/scf-device/lib/Register.js ***!
  \*************************************************************************************************************/
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

/***/ "./node_modules/@microchip/scf-register-view-helper/node_modules/@microchip/scf-device/lib/Setting.js":
/*!************************************************************************************************************!*\
  !*** ./node_modules/@microchip/scf-register-view-helper/node_modules/@microchip/scf-device/lib/Setting.js ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.getOptionDescriptions = exports.getOptionNames = exports.getOptionByDescription = exports.getOptionByName = exports.getOptionByAlias = void 0;
var Arrays_1 = __webpack_require__(/*! ./util/Arrays */ "./node_modules/@microchip/scf-register-view-helper/node_modules/@microchip/scf-device/lib/util/Arrays.js");
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

/***/ "./node_modules/@microchip/scf-register-view-helper/node_modules/@microchip/scf-device/lib/util/Arrays.js":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/@microchip/scf-register-view-helper/node_modules/@microchip/scf-device/lib/util/Arrays.js ***!
  \****************************************************************************************************************/
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

/***/ "./src/DerivedData.tsx":
/*!*****************************!*\
  !*** ./src/DerivedData.tsx ***!
  \*****************************/
/*! exports provided: getDerivedData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDerivedData", function() { return getDerivedData; });
/* harmony import */ var _microchip_scf_validators_lib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @microchip/scf-validators/lib */ "./node_modules/@microchip/scf-validators/lib/index.js");
/* harmony import */ var _microchip_scf_validators_lib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_microchip_scf_validators_lib__WEBPACK_IMPORTED_MODULE_0__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }


var I2C_HOST_BASIC = "i2c_host_basic";
var MEGA_HERTZ = 1000000;
var KILO_HERTZ = 1000;
var DIGITS_AFTER_DECIMAL_POINT = 2;
var getDerivedData = function getDerivedData(dataModel) {
  if (dataModel) {
    return new MyDerivedData(dataModel);
  }

  return new EmptyDerivedData();
}; //This data will be used at the creator stage and relies on only the state

var EmptyDerivedData = function EmptyDerivedData() {
  _classCallCheck(this, EmptyDerivedData);

  this.getMyFunctions = function () {
    return {};
  };

  this.getModel = function () {
    return undefined;
  };
}; //This data will be used at the processor stage


var MyDerivedData = function MyDerivedData(dataModel) {
  var _this = this;

  _classCallCheck(this, MyDerivedData);

  this.dataModel = void 0;
  this.cValidator = Object(_microchip_scf_validators_lib__WEBPACK_IMPORTED_MODULE_0__["getCFunctionValidator"])();

  this.getMyFunctions = function () {
    return {
      moduleName: _this.getModuleName,
      templateData: _this.getMyTemplateData,
      alerts: _this.getMyAlerts,
      calculatedFunction: _this.calculatedFunction,
      getActiveName: _this.getActiveName,
      getCustomUiErrors: _this.getCustomUiErrors,
      importName: _this.friendlyImportName,
      filterImports: _this.filterMyImports,
      importOptionLabel: _this.friendlyImportOptionLabels,
      customNameValidator: _this.customNameValidator,
      calculatedSpeed: _this.getDisplaySpeed,
      overrideDefaultValues: _this.overrideDefaultValue,
      i2c_host_basic_args: _this.getArguments,
      i2c_host_basic_results: _this.getResults,
      overrideModuleLevelHelp: _this.overrideModuleLevelHelp
    };
  };

  this.overrideModuleLevelHelp = function () {
    var deviceMeta = _this.dataModel.getImportValue("device_meta");

    var deviceName = deviceMeta === null || deviceMeta === void 0 ? void 0 : deviceMeta.architecture;
    var url = "";
    var tooltip = "";

    if (deviceName === "PIC16" || deviceName === "PIC18") {
      url = "v2/keyword-lookup?keyword=SCF-PIC8-I2C-HOST&redirect=true";
      tooltip = "I2C Host Driver for 8-bit PIC devices";
    } else if (deviceName === "AVR8" || deviceName === "AVR8X") {
      url = "v2/keyword-lookup?keyword=SCF-AVR8-I2C-HOST&redirect=true";
      tooltip = "I2C Host Driver for 8-bit AVR devices";
    } else if (deviceName == "DSPIC33A") {
      url = "v2/keyword-lookup?keyword=I2C_HOST_33A_MELODY_DRIVER&version=latest&redirect=true";
      tooltip = "Click here to open I2C API documentation.";
    } else if (deviceName === undefined) {
      url = "";
      tooltip = "Load I2C Host Driver to view help.";
    } else {
      url = "v2/keyword-lookup?keyword=I2C_Host_Melody_Driver&version=latest&redirect=true";
      tooltip = "I2C Host driver for 16-bit PIC and dsPIC devices";
    }

    return {
      url: url,
      tooltip: tooltip
    };
  };

  this.getDisplaySpeed = function () {
    var speed = parseInt(_this.getCalculatedBaudrate());
    return _this.getFrequencyInMHz(speed);
  };

  this.getFrequencyInMHz = function (systemFrequency) {
    var systemFrequencyInStr = "";

    if (systemFrequency >= MEGA_HERTZ) {
      systemFrequency = systemFrequency / MEGA_HERTZ;
      systemFrequencyInStr = systemFrequency.toFixed(DIGITS_AFTER_DECIMAL_POINT) + " MHz";
    } else {
      systemFrequency = systemFrequency / KILO_HERTZ;
      systemFrequencyInStr = systemFrequency.toFixed(DIGITS_AFTER_DECIMAL_POINT) + " KHz";
    }

    return systemFrequencyInStr;
  };

  this.getResults = function () {
    return {
      customName: _this.getActiveName()
    };
  };

  this.getArguments = function () {
    return {
      requestedSpeed_Hz: _this.getRequestedSpeed()
    };
  };

  this.getRequestedSpeed = function () {
    var speed = _this.dataModel.getComponentValue("requestedSpeed");

    switch (speed) {
      case "100 KHz":
        return "100000";

      case "400 KHz":
        return "400000";

      case "1 MHz":
        return "1000000";

      default:
        return "100000";
    }
  };

  this.overrideDefaultValue = function (componentName) {
    if (componentName === "customName") {
      var processedPayloadVal = _this.dataModel.getImportValue(I2C_HOST_BASIC);

      if (processedPayloadVal !== null && processedPayloadVal !== void 0 && processedPayloadVal.moduleName) {
        return "I2C" + processedPayloadVal.moduleInstance + "_Host";
      }
    }

    return undefined;
  };

  this.getCalculatedBaudrate = function () {
    var processedPayloadVal = _this.dataModel.getImportValue(I2C_HOST_BASIC);

    if (processedPayloadVal !== null && processedPayloadVal !== void 0 && processedPayloadVal.calculatedSpeed_Hz) {
      return processedPayloadVal === null || processedPayloadVal === void 0 ? void 0 : processedPayloadVal.calculatedSpeed_Hz;
    }

    return "0";
  };

  this.getModuleName = function () {
    var _this$dataModel;

    return (_this$dataModel = _this.dataModel) === null || _this$dataModel === void 0 ? void 0 : _this$dataModel.getComponentValue("customName");
  };

  this.getActiveName = function () {
    var _this$dataModel3;

    var processedPayloadVal = _this.dataModel.getImportValue(I2C_HOST_BASIC);

    if (processedPayloadVal !== null && processedPayloadVal !== void 0 && processedPayloadVal.moduleName) {
      var _this$dataModel$getCo, _this$dataModel2;

      return (_this$dataModel$getCo = (_this$dataModel2 = _this.dataModel) === null || _this$dataModel2 === void 0 ? void 0 : _this$dataModel2.getComponentValue("customName")) !== null && _this$dataModel$getCo !== void 0 ? _this$dataModel$getCo : "I2C_Host";
    }

    return ((_this$dataModel3 = _this.dataModel) === null || _this$dataModel3 === void 0 ? void 0 : _this$dataModel3.getComponentValue("customName")) + " (None)";
  };

  this.customNameValidator = function () {
    return {
      pattern: _this.cValidator.getRjsfValidation().pattern
    };
  };

  this.getCustomUiErrors = function (componentName) {
    switch (componentName) {
      case "customName":
        return [{
          name: "pattern",
          message: _this.cValidator.getCustomErrorMessage()
        }];

      default:
        return undefined;
    }
  };

  this.filterMyImports = function (imports) {
    var _filteredImports$i2c_;

    var filteredImports = _this.dataModel.filterImportBySetting(imports, I2C_HOST_BASIC, function (option) {
      return true;
    });

    if (filteredImports !== null && filteredImports !== void 0 && (_filteredImports$i2c_ = filteredImports.i2c_host_basic) !== null && _filteredImports$i2c_ !== void 0 && _filteredImports$i2c_.options) {
      filteredImports.i2c_host_basic.options.sort(function (importOption1, importOption2) {
        return importOption1.payload.moduleInstance > importOption2.payload.moduleInstance ? 1 : -1;
      });
    }

    return filteredImports;
  };

  this.friendlyImportName = function (importKey) {
    if (importKey === I2C_HOST_BASIC) {
      return "I2C Host";
    }

    return "";
  };

  this.friendlyImportOptionLabels = function (importKey, option) {
    var _option$payload;

    if (importKey === I2C_HOST_BASIC && option !== null && option !== void 0 && (_option$payload = option.payload) !== null && _option$payload !== void 0 && _option$payload.moduleName) {
      return option.payload.moduleName;
    }

    return "I2C";
  };

  this.getModel = function () {
    return _this.dataModel;
  };

  this.getMyTemplateData = function () {
    return {};
  };

  this.getMyAlerts = function () {
    return [];
  };

  this.calculatedFunction = function () {
    return;
  };

  this.dataModel = dataModel;
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
//# sourceMappingURL=processor.js.map