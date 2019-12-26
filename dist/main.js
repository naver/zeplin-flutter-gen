(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["extension"] = factory();
	else
		root["extension"] = factory();
})(typeof self !== 'undefined' ? self : this, function() {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.depthToString = depthToString;
exports.camelize = camelize;
// zeplin-flutter-gen
// Copyright (c) 2019-present NAVER Corp.
// MIT license

function depthToString() {
    var count = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;

    var depthStr = "";
    for (var i = 0; i < count; i++) {
        depthStr += "\t";
    }
    return depthStr;
}

function camelize(str) {
    return str.replace(/(?:^\w|[A-Z]|\b\w)/g, function (word, index) {
        return index == 0 ? word.toLowerCase() : word.toUpperCase();
    }).replace(/\s+/g, '');
}

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.colorsClassPrefix = colorsClassPrefix;
exports.useColorName = useColorName;
exports.textStylesClassPrefix = textStylesClassPrefix;
exports.useTextStylesName = useTextStylesName;
exports.skipDefaultValue = skipDefaultValue;
exports.skipWidthInContainer = skipWidthInContainer;
exports.skipHeightInContainer = skipHeightInContainer;
exports.skipMarginLeftAndRight = skipMarginLeftAndRight;
exports.skipFontFamilies = skipFontFamilies;
exports.skipLetterSpacing = skipLetterSpacing;
exports.skipLineHeight = skipLineHeight;
exports.SkipStrutStyleSkipped = SkipStrutStyleSkipped;
// zeplin-flutter-gen
// Copyright (c) 2019-present NAVER Corp.
// MIT license

var OPTION_KEYS = {
    COLORS_CLASS_PREFIX: "colorsClassPrefix",
    USE_COLOR_NAME: "useColorName",
    TEXTSTYLES_CLASS_PREFIX: "textStylesClassPrefix",
    USE_TEXTSTYLE_NAME: "useTextStyleName",
    SKIP_DEFAULT_VALUE: "defaultValueSkipped",
    SKIP_WIDTH_CONTAINER: "widthInContainerSkipped",
    SKIP_HEIGHT_CONTAINER: "heightInContainerSkipped",
    SKIP_MARGIN_LEFT_RIGHT_CONTAINER: "marginLeftAndRightInContainerSkipped",
    SKIP_FONT_FAMILY: "excludeFontFamily",
    SKIP_LETTER_SPACING: "letterSpacingValueSkipped",
    SKIP_LINE_HEIGHT: "lineHeightValueSkipped",
    SKIP_STRUT_STYLE: "strutStyleSkipped"
};

/**
 * Options
 */
function colorsClassPrefix(context) {
    var prefix = "";
    var optionClassPrefix = context.getOption(OPTION_KEYS.COLORS_CLASS_PREFIX);
    if (optionClassPrefix != null && optionClassPrefix != '') {
        prefix = optionClassPrefix;
    }
    return prefix;
}

function useColorName(context) {
    return context.getOption(OPTION_KEYS.USE_COLOR_NAME);
}

function textStylesClassPrefix(context) {
    var prefix = "";
    var optionClassPrefix = context.getOption(OPTION_KEYS.TEXTSTYLES_CLASS_PREFIX);
    if (optionClassPrefix != null && optionClassPrefix != '') {
        prefix = optionClassPrefix;
    }
    return prefix;
}

function useTextStylesName(context) {
    return context.getOption(OPTION_KEYS.TEXTSTYLES_CLASS_PREFIX);
}

function skipDefaultValue(context) {
    return context.getOption(OPTION_KEYS.SKIP_DEFAULT_VALUE);
}

function skipWidthInContainer(context) {
    return context.getOption(OPTION_KEYS.SKIP_WIDTH_CONTAINER);
}

function skipHeightInContainer(context) {
    return context.getOption(OPTION_KEYS.SKIP_HEIGHT_CONTAINER);
}
function skipMarginLeftAndRight(context) {
    return context.getOption(OPTION_KEYS.SKIP_MARGIN_LEFT_RIGHT_CONTAINER);
}

function skipFontFamilies(context) {
    var values = context.getOption(OPTION_KEYS.SKIP_FONT_FAMILY);
    if (values == '*') {
        return '*';
    } else {
        return values.split(',');
    }
}

function skipLetterSpacing(context) {
    return context.getOption(OPTION_KEYS.SKIP_LETTER_SPACING);
}

function skipLineHeight(context) {
    return context.getOption(OPTION_KEYS.SKIP_LINE_HEIGHT);
}

function SkipStrutStyleSkipped(context) {
    return context.getOption(OPTION_KEYS.SKIP_STRUT_STYLE);
}

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.toDart = toDart;

var _options = __webpack_require__(1);

var options = _interopRequireWildcard(_options);

var _material = __webpack_require__(6);

var Material = _interopRequireWildcard(_material);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

// zeplin-flutter-gen
// Copyright (c) 2019-present NAVER Corp.
// MIT license

function toDart(context, color, opacity) {
    var useColorName = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : true;

    var prefix = options.colorsClassPrefix(context);
    if (useColorName) {
        if (options.useColorName(context)) {
            var materialColor = findFromMaterialColors(color);
            if (materialColor != null && materialColor != undefined) {
                return `Colors.${materialColor}`;
            }

            var projectColor = findFromProjectColors(context, color);
            if (projectColor != null && projectColor != undefined) {
                return `${prefix}Colors.${projectColor}`;
            }
        }
    }

    color = color.toHex();

    var hex = `0x${color.a}${color.r}${color.g}${color.b}`;
    if (opacity < 1) {
        return `Color(${hex}).withOpacity(${opacity})`;
    }

    return `Color(${hex})`;
}

function findFromMaterialColors(inputColor) {
    var color = inputColor.toHex();
    var hex = '0x' + `${color.a}${color.r}${color.g}${color.b}`.toUpperCase();
    return Material.COLORS_MAP.get(hex);
}

function findFromProjectColors(context, inputColor) {
    var find = context.project.colors.find(function (color) {
        return inputColor.a == color.a && inputColor.r == color.r && inputColor.g == color.g && inputColor.b == color.b;
    });

    if (find == undefined || find == null) return null;
    return find.name;
}

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.BoxShadow = undefined;
exports.parse = parse;
exports.toDart = toDart;

var _color = __webpack_require__(2);

var color = _interopRequireWildcard(_color);

var _util = __webpack_require__(0);

var util = _interopRequireWildcard(_util);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } } // zeplin-flutter-gen
// Copyright (c) 2019-present NAVER Corp.
// MIT license

var BoxShadow = exports.BoxShadow = function BoxShadow(color, offsetx, offsety, blurRadius, spreadRadius) {
    _classCallCheck(this, BoxShadow);

    this.color = color;
    this.offsetx = offsetx;
    this.offsety = offsety;
    this.blurRadius = blurRadius;
    this.spreadRadius = spreadRadius;
};

function parse(context, shadows) {
    if (shadows.length > 0) {
        return shadows.map(function (shadow) {
            return new BoxShadow(shadow.color, shadow.offsetX, shadow.offsetY, shadow.blurRadius, shadow.spread);
        });
    } else {
        return null;
    }
}

function toDartAShadow(context, shadow) {
    var depth = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;

    var depthStr = util.depthToString(depth);
    var endDepthStr = util.depthToString(depth - 1);
    var colorElement = "";
    if (shadow.color != null && shadow.color != undefined) {
        colorElement = `\n${depthStr}color: ${color.toDart(context, shadow.color, 1)},`;
    }

    return `BoxShadow(${colorElement}
${depthStr}offset: Offset(${shadow.offsetx}, ${shadow.offsety}),
${depthStr}blurRadius: ${shadow.blurRadius},
${depthStr}spreadRadius: ${shadow.spreadRadius},
${endDepthStr}),`;
}

function toDart(context, shadows) {
    var depth = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;

    var depthStr = util.depthToString(depth);
    var endDepthStr = util.depthToString(depth - 1);

    return `[
${shadows.map(function (shadow) {
        return depthStr + toDartAShadow(context, shadow, depth + 1);
    })}
${endDepthStr}],`;
}

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.TextStyle = undefined;
exports.toDart = toDart;

var _options = __webpack_require__(1);

var options = _interopRequireWildcard(_options);

var _color = __webpack_require__(2);

var color = _interopRequireWildcard(_color);

var _util = __webpack_require__(0);

var util = _interopRequireWildcard(_util);

var _box_shadows = __webpack_require__(3);

var boxShadows = _interopRequireWildcard(_box_shadows);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } } // zeplin-flutter-gen
// Copyright (c) 2019-present NAVER Corp.
// MIT license

var TextStyle = exports.TextStyle = function TextStyle(name, fontFamily, color, fontSize, fontWeight, fontStyle, letterSpacing, height, shadows) {
    _classCallCheck(this, TextStyle);

    this.name = name;
    this.fontFamily = fontFamily;
    this.color = color;
    this.fontSize = fontSize;
    this.fontWeight = fontWeight;
    this.fontStyle = fontStyle;
    this.letterSpacing = letterSpacing;
    this.height = height;
    this.shadows = shadows;
};

function toDart(context, textStyle) {
    var depth = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;
    var useName = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : true;

    if (useName) {
        if (options.useTextStylesName) {
            var result = findTextStyleName(context, textStyle);
            var prefix = options.textStylesClassPrefix(context);

            if (result != null) {
                return `${prefix}TextStyles.${result}`;
            }
        }
    }
    var depthStr = util.depthToString(depth);
    var endDepthStr = util.depthToString(depth - 1);

    var fontSizeElement = "";
    var fontFamilyElement = "";
    var fontWeightElement = "";
    var fontStyleElement = "";
    var shadowElements = "";
    var letterSpacingElement = "";
    var lineHeightElement = "";

    var skipDefaultValue = options.skipDefaultValue(context);

    if (textStyle.fontSize != null) {
        if (!(skipDefaultValue && textStyle.fontSize == 14.0)) {
            fontSizeElement = `\n${depthStr}fontSize: ${textStyle.fontSize},`;
        }
    }

    if (textStyle.fontFamily != null) {
        var excludedFonts = options.skipFontFamilies(context);
        if (excludedFonts != '*') {
            if (!excludedFonts.includes(textStyle.fontFamily)) {
                fontFamilyElement = `\n${depthStr}fontFamily: '${textStyle.fontFamily}',`;
            }
        }
    }

    if (textStyle.fontWeight != null) {
        if (!(skipDefaultValue && textStyle.fontWeight == 400)) {
            fontWeightElement = `\n${depthStr}fontWeight: FontWeight.w${textStyle.fontWeight},`;
        }
    }

    if (textStyle.fontStyle != null) {
        if (!(skipDefaultValue && textStyle.fontStyle == "normal")) {
            fontStyleElement = `\n${depthStr}fontStyle: FontStyle.${textStyle.fontStyle},`;
        }
    }
    if (textStyle.shadows != null) {
        shadowElements = `\n${depthStr}shadows: ${boxShadows.toDart(context, textStyle.shadows)},`;
    }

    if (textStyle.letterSpacing != null) {
        if (!options.skipLetterSpacing(context)) {
            letterSpacingElement = `\n${depthStr}letterSpacing: ${textStyle.letterSpacing},`;
        }
    }

    if (textStyle.height != null) {
        if (!(skipDefaultValue && textStyle.height == 1.0)) {
            if (!options.skipLineHeight(context)) {
                lineHeightElement = `\n${depthStr}height: ${textStyle.height},`;
            }
        }
    }

    return `TextStyle(
${depthStr}color: ${color.toDart(context, textStyle.color, 1)},${fontSizeElement}${fontFamilyElement}${fontWeightElement}${fontStyleElement}${letterSpacingElement}${shadowElements}${lineHeightElement}
${endDepthStr})`;
}

function findTextStyleName(context, input) {
    var find = context.project.textStyles.find(function (ts) {
        return input.name == ts.name;
    });

    if (find == undefined || find == null) return null;
    return util.camelize(find.name);
}

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _options = __webpack_require__(1);

var options = _interopRequireWildcard(_options);

var _util = __webpack_require__(0);

var util = _interopRequireWildcard(_util);

var _color = __webpack_require__(2);

var color = _interopRequireWildcard(_color);

var _text = __webpack_require__(7);

var text = _interopRequireWildcard(_text);

var _container = __webpack_require__(10);

var container = _interopRequireWildcard(_container);

var _text_style = __webpack_require__(4);

var textStyle = _interopRequireWildcard(_text_style);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

// zeplin-flutter-gen
// Copyright (c) 2019-present NAVER Corp.
// MIT license

function layer(context, selectedLayer) {
    var body = "";
    switch (selectedLayer.type) {
        case 'text':
            body = text.widget(context, selectedLayer);
            break;
        case 'shape':
            body = container.widget(context, selectedLayer);
            break;
        default:
            break;
    }

    return {
        code: `${body}`,
        language: "dart"
    };
}

/*
function screen(context, selectedVersion, selectedScreen) {

}
*/

/*
function component(context, selectedVersion, selectedComponent) {

}
*/

function colors(context) {
    var body = projectColorsToDart(context);
    return {
        code: body,
        language: "dart"
    };
}

function textStyles(context) {
    var body = projectTextStylesToDart(context);
    return {
        code: body,
        language: "dart"
    };
}

/*
function exportColors(context) {

}
*/

/*
function exportTextStyles(context) {

}
*/
/*
function styleguideColors(context, colors) {
  
}
/*
/*
function styleguideTextStyles(context, textStyles) {

}
*/
/*
function exportStyleguideColors(context, colors) {

}
*/

/*
function exportStyleguideTextStyles(context, textStyles) {

}
*/

function comment(context, text) {}

function projectColorsToDart(context) {
    var prefix = options.colorsClassPrefix(context);
    var body = `class ${prefix}Colors {\n`;

    var colors = [];
    context.project.colors.map(function (colorMap) {
        colors.push(`\tstatic const Color ${colorMap.name} = ${color.toDart(context, colorMap, 1, false)};`);
    });

    body += colors.join('\n');

    body += "\n}\n";
    return body;
}

function projectTextStylesToDart(context) {
    var prefix = options.textStylesClassPrefix(context);
    var body = `class ${prefix}TextStyles {\n`;

    var textStyles = [];
    context.project.textStyles.map(function (ts) {
        textStyles.push(`\tstatic const TextStyle ${util.camelize(ts.name)} = ${textStyle.toDart(context, ts, 2, false)};`);
    });

    body += textStyles.join('\n');

    body += "\n}\n";
    return body;
}

exports.default = {
    layer,
    // screen,
    // component,
    colors,
    textStyles,
    // exportColors,
    // exportTextStyles,
    // styleguideColors,
    // styleguideTextStyles,
    // exportStyleguideColors,
    // exportStyleguideTextStyles,
    comment
};

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
// zeplin-flutter-gen
// Copyright (c) 2019-present NAVER Corp.
// MIT license

/// Color information based on flutter/material/colors.dart
/// - Upper Case
var COLORS_MAP = exports.COLORS_MAP = new Map();
COLORS_MAP.set("0x00000000", "transparent");

COLORS_MAP.set("0xFF000000", "black");
COLORS_MAP.set("0xDD000000", "black87");
COLORS_MAP.set("0x8A000000", "black54");
COLORS_MAP.set("0x73000000", "black45");
COLORS_MAP.set("0x61000000", "black38");
COLORS_MAP.set("0x42000000", "black26");
COLORS_MAP.set("0x1F000000", "black12");

COLORS_MAP.set("0xFFFFFFFF", "white");
COLORS_MAP.set("0xB3FFFFFF", "white70");
COLORS_MAP.set("0x99FFFFFF", "white60");
COLORS_MAP.set("0x8AFFFFFF", "white54");
COLORS_MAP.set("0x62FFFFFF", "white38");
COLORS_MAP.set("0x4DFFFFFF", "white30");
COLORS_MAP.set("0x62FFFFFF", "white38");
COLORS_MAP.set("0x3DFFFFFF", "white24");
COLORS_MAP.set("0x1FFFFFFF", "white12");
COLORS_MAP.set("0x1AFFFFFF", "white10");

/// MaterialColor
COLORS_MAP.set("0xFFF44336", "red");
COLORS_MAP.set("0xFFE91E63", "pink");
COLORS_MAP.set("0xFF9C27B0", "purple");
COLORS_MAP.set("0xFF7C4DFF", "deepPurple");
COLORS_MAP.set("0xFF3F51B5", "indigo");
COLORS_MAP.set("0xFF2196F3", "blue");
COLORS_MAP.set("0xFF03A9F4", "lightBlue");
COLORS_MAP.set("0xFF00BCD4", "cyan");
COLORS_MAP.set("0xFF009688", "teal");
COLORS_MAP.set("0xFF4CAF50", "green");
COLORS_MAP.set("0xFF8BC34A", "lightGreen");
COLORS_MAP.set("0xFFCDDC39", "lime");
COLORS_MAP.set("0xFFFFEB3B", "yellow");
COLORS_MAP.set("0xFFFFC107", "amber");
COLORS_MAP.set("0xFFFF9800", "orange");
COLORS_MAP.set("0xFFFF5722", "deepOrange");
COLORS_MAP.set("0xFF795548", "brown");
COLORS_MAP.set("0xFF9E9E9E", "grey");
COLORS_MAP.set("0xFF607D8B", "blueGrey");

/// Accents
COLORS_MAP.set("0xFFFF5252", "redAccent");
COLORS_MAP.set("0xFFFF4081", "pinkAccent");
COLORS_MAP.set("0xFFE040FB", "purpleAccent");
COLORS_MAP.set("0xFF7C4DFF", "deepPurpleAccent");
COLORS_MAP.set("0xFF536DFE", "indigoAccent");
COLORS_MAP.set("0xFF448AFF", "blueAccent");
COLORS_MAP.set("0xFF40C4FF", "lightBlueAccent");
COLORS_MAP.set("0xFF18FFFF", "cyanAccent");
COLORS_MAP.set("0xFF64FFDA", "tealAccent");
COLORS_MAP.set("0xFF69F0AE", "greenAccent");
COLORS_MAP.set("0xFFB2FF59", "lightGreenAccent");
COLORS_MAP.set("0xFFEEFF41", "limeAccent");
COLORS_MAP.set("0xFFFFFF00", "yellowAccent");
COLORS_MAP.set("0xFFFFD740", "amberAccent");
COLORS_MAP.set("0xFFFFAB40", "orangeAccent");
COLORS_MAP.set("0xFFFF6E40", "deepOrangeAccent");

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.widget = widget;

var _options = __webpack_require__(1);

var options = _interopRequireWildcard(_options);

var _box_shadows = __webpack_require__(3);

var boxShadows = _interopRequireWildcard(_box_shadows);

var _text_style = __webpack_require__(4);

var textStyle = _interopRequireWildcard(_text_style);

var _strut_style = __webpack_require__(8);

var strutStyle = _interopRequireWildcard(_strut_style);

var _text_span = __webpack_require__(9);

var textSpan = _interopRequireWildcard(_text_span);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function widget(context, layer) {
    var body;

    if (layer.textStyles.length == 1) {
        /// Text Widget
        body = textToDart(context, new _text_span.TextSpan(layer.content, new _text_style.TextStyle(layer.textStyles[0].textStyle.name, layer.textStyles[0].textStyle.fontFamily, layer.textStyles[0].textStyle.color, layer.textStyles[0].textStyle.fontSize, layer.textStyles[0].textStyle.fontWeight, layer.textStyles[0].textStyle.fontStyle, layer.textStyles[0].textStyle.letterSpacing, layer.textStyles[0].textStyle.lineHeight, boxShadows.parse(context, layer.shadows))));
    } else {
        /// RichText Widget
        var textSpans = [];
        layer.textStyles.map(function (textSpan) {
            textSpans.push(new _text_span.TextSpan(layer.content.substring(textSpan.range.start, textSpan.range.end), new _text_style.TextStyle(textSpan.textStyle.name, textSpan.textStyle.fontFamily, textSpan.textStyle.color, textSpan.textStyle.fontSize, textSpan.textStyle.fontWeight, textSpan.textStyle.fontStyle, textSpan.textStyle.letterSpacing, textSpan.textStyle.lineHeight, boxShadows.parse(context, layer.shadows))));
        });
        body = richTextToDart(context, textSpans);
    }

    return body;
} // zeplin-flutter-gen
// Copyright (c) 2019-present NAVER Corp.
// MIT license

function textToDart(context, textSelected) {
    var strutStyleElement = "";
    var skipStrutStyleSkipped = options.SkipStrutStyleSkipped(context);
    if (!skipStrutStyleSkipped) {
        strutStyleElement = `\n\tstrutStyle: ${strutStyle.toDart(context, textSelected.textStyle, 2)},`;
    }

    return `Text('${textSelected.text}',
\tstyle: ${textStyle.toDart(context, textSelected.textStyle, 2)},${strutStyleElement}
),`;
}

function richTextToDart(context, textSpans) {
    var strutStyleElement = "";
    var skipStrutStyleSkipped = options.SkipStrutStyleSkipped(context);
    if (!skipStrutStyleSkipped) {
        var ts;
        for (var i = 0; i < textSpans.length; i++) {
            var style = textSpans[i].textStyle;
            if (ts == null) {
                ts = style;
            } else {
                if (style.fontSize == ts.fontSize) {
                    if (style.fontWeight > ts.fontWeight) {
                        ts = style;
                    }
                } else if (style.fontSize > ts.fontSize) {
                    ts = style;
                }
            }
        }
        strutStyleElement = `\n\tstrutStyle: ${strutStyle.toDart(context, ts, 2)},`;
    }

    return `RichText(${strutStyleElement}
\ttext: TextSpan(
\t\tchildren: [${textSpans.map(function (ts) {
        return "\n\t\t\t" + textSpan.toDart(context, ts, 4);
    })},
\t\t],
\t),
),`;
}

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.toDart = toDart;

var _options = __webpack_require__(1);

var options = _interopRequireWildcard(_options);

var _util = __webpack_require__(0);

var util = _interopRequireWildcard(_util);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

// zeplin-flutter-gen
// Copyright (c) 2019-present NAVER Corp.
// MIT license

function toDart(context, textStyle) {
    var depth = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;

    var depthStr = util.depthToString(depth);
    var endDepthStr = util.depthToString(depth - 1);

    var fontSizeElement = "";
    var lineHeightElement = "";
    var fontWeightElement = "";
    var fontStyleElement = "";

    var skipDefaultValue = options.skipDefaultValue(context);

    if (textStyle.fontSize != null) {
        if (!(skipDefaultValue && textStyle.fontSize == 14.0)) {
            fontSizeElement = `\n${depthStr}fontSize: ${textStyle.fontSize},`;
        }
    }

    if (textStyle.height != null) {
        if (!(skipDefaultValue && textStyle.height == 1.0)) {
            if (!options.skipLineHeight(context)) {
                lineHeightElement = `\n${depthStr}height: ${textStyle.height},`;
            }
        }
    }

    if (textStyle.fontWeight != null) {
        if (!(skipDefaultValue && textStyle.fontWeight == 400)) {
            fontWeightElement = `\n${depthStr}fontWeight: FontWeight.w${textStyle.fontWeight},`;
        }
    }

    if (textStyle.fontStyle != null) {
        if (!(skipDefaultValue && textStyle.fontStyle == "normal")) {
            fontStyleElement = `\n${depthStr}fontStyle: FontStyle.${textStyle.fontStyle},`;
        }
    }

    var forceStrutHeightElement = `\n${depthStr}forceStrutHeight: true,`;

    return `StrutStyle(${fontSizeElement}${lineHeightElement}${fontWeightElement}${fontStyleElement}${forceStrutHeightElement}
${endDepthStr})`;
}

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.TextSpan = undefined;
exports.toDart = toDart;

var _util = __webpack_require__(0);

var util = _interopRequireWildcard(_util);

var _text_style = __webpack_require__(4);

var textStyle = _interopRequireWildcard(_text_style);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } } // zeplin-flutter-gen
// Copyright (c) 2019-present NAVER Corp.
// MIT license

var TextSpan = exports.TextSpan = function TextSpan(text, textStyle) {
    _classCallCheck(this, TextSpan);

    this.text = text;
    this.textStyle = textStyle;
};

function toDart(context, textSpan) {
    var depth = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;

    var depthStr = util.depthToString(depth);
    var endDepthStr = util.depthToString(depth - 1);

    return `TextSpan(
${depthStr}text: '${textSpan.text}',
${depthStr}style: ${textStyle.toDart(context, textSpan.textStyle, 4 + 1)},
${endDepthStr})`;
}

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Container = undefined;
exports.widget = widget;

var _box_decoration = __webpack_require__(11);

var decoration = _interopRequireWildcard(_box_decoration);

var _util = __webpack_require__(0);

var util = _interopRequireWildcard(_util);

var _options = __webpack_require__(1);

var options = _interopRequireWildcard(_options);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } } // zeplin-flutter-gen
// Copyright (c) 2019-present NAVER Corp.
// MIT license

function widget(context, layer) {
    var container = parse(context, layer);
    return toDart(context, container);
}

var Container = exports.Container = function Container(x, y, width, height, decoration) {
    _classCallCheck(this, Container);

    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.decoration = decoration;
};

function parse(context, layer) {
    var container = new Container(layer.rect.x, layer.rect.y, layer.rect.width, layer.rect.height);
    container.decoration = decoration.parse(context, layer);
    return container;
}

function toDart(context, container) {
    var widthElement = "";
    if (!options.skipWidthInContainer(context)) {
        widthElement = `\n\twidth: ${container.width},`;
    }

    var heightElement = "";
    if (!options.skipHeightInContainer(context)) {
        heightElement = `\n\theight: ${container.height},`;
    }

    var marginElement = "";
    if (!options.skipMarginLeftAndRight(context)) {
        if (container.x != 0) {
            marginElement = `\n\tmargin: EdgeInsets.only(\n\t\tleft: ${container.x},\n\t\tright: ${container.x},\n\t),`;
        }
    }

    var decorationElement = "";
    var decorationDart = decoration.toDart(context, container.decoration, 2);
    if (decorationDart != null) {
        decorationElement = `\n\tdecoration: ${decorationDart},`;
    }

    return `Container(${widthElement}${heightElement}${marginElement}${decorationElement}\n),`;
}

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.BoxDecoration = undefined;
exports.parse = parse;
exports.toDart = toDart;

var _color = __webpack_require__(2);

var color = _interopRequireWildcard(_color);

var _util = __webpack_require__(0);

var util = _interopRequireWildcard(_util);

var _box_shadows = __webpack_require__(3);

var boxShadows = _interopRequireWildcard(_box_shadows);

var _border = __webpack_require__(12);

var border = _interopRequireWildcard(_border);

var _gradient = __webpack_require__(13);

var gradient = _interopRequireWildcard(_gradient);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } } // zeplin-flutter-gen
// Copyright (c) 2019-present NAVER Corp.
// MIT license

var BoxDecoration = exports.BoxDecoration = function BoxDecoration(color, border, borderRadius, shadows, gradient, opacity) {
    _classCallCheck(this, BoxDecoration);

    this.color = color;
    this.border = border;
    this.borderRadius = borderRadius;
    this.shadows = shadows;
    this.gradient = gradient;
    this.opacity = opacity;
};

function parse(context, layer) {
    var decoration = new BoxDecoration();

    if (layer.fills.length > 0) {
        decoration.gradient = gradient.parse(context, layer);
        if (decoration.gradient == null) {
            decoration.color = layer.fills[layer.fills.length - 1].color;
        }
    }

    decoration.border = border.parse(context, layer);

    if (layer.borderRadius != 0) {
        decoration.borderRadius = layer.borderRadius;
    }

    decoration.shadows = boxShadows.parse(context, layer.shadows);
    decoration.opacity = layer.opacity;
    return decoration;
}

function toDart(context, decoration) {
    var depth = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;

    var depthStr = util.depthToString(depth);
    var endDepthStr = util.depthToString(depth - 1);

    var colorElement = "";
    var borderElement = "";
    var borderRadiusElement = "";
    var gradientElement = "";
    var shadowsElements = "";

    if (decoration.color != null && decoration.color != undefined) {
        var dartFromColor = color.toDart(context, decoration.color, decoration.opacity);
        if (dartFromColor != null && dartFromColor != undefined) {
            colorElement = `\n${depthStr}color: ${dartFromColor},`;
        }
    }

    if (decoration.border != null && decoration.border != undefined) {
        var dartFromBorder = border.toDart(context, decoration.border, depth + 1);
        if (dartFromBorder != null && dartFromBorder != undefined) {
            colorElement = `\n${depthStr}border: ${dartFromBorder}`;
        }
    }

    if (decoration.borderRadius != null && decoration.borderRadius != undefined) {
        borderRadiusElement = `\n${depthStr}borderRadius: BorderRadius.circular(${decoration.borderRadius}),`;
    }

    if (decoration.gradient != null && decoration.gradient != undefined) {
        var dartFromGradient = gradient.toDart(context, decoration.gradient, depth + 1);
        if (dartFromGradient != null && dartFromGradient != undefined) {
            gradientElement = `\n${depthStr}gradient: ${gradient.toDart(context, decoration.gradient, depth + 1)}`;
        }
    }

    if (decoration.shadows != null && decoration.shadows != undefined) {
        var dartFromShadows = boxShadows.toDart(context, decoration.shadows, depth + 1);
        if (dartFromShadows != null && dartFromShadows != undefined) {
            shadowsElements = `\n${depthStr}boxShadow: ${dartFromShadows}`;
        }
    }

    if (colorElement == "" && borderElement == "" && borderRadiusElement == "" && gradientElement == "" && shadowsElements == "") {
        return null;
    } else {
        return `BoxDecoration(${colorElement}${borderElement}${borderRadiusElement}${gradientElement}${shadowsElements}\n${endDepthStr})`;
    }
}

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Border = undefined;
exports.parse = parse;
exports.toDart = toDart;

var _color = __webpack_require__(2);

var color = _interopRequireWildcard(_color);

var _util = __webpack_require__(0);

var util = _interopRequireWildcard(_util);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } } // zeplin-flutter-gen
// Copyright (c) 2019-present NAVER Corp.
// MIT license

var Border = exports.Border = function Border(color, width) {
    _classCallCheck(this, Border);

    this.color = color;
    this.width = width;
};

function parse(context, layer) {
    if (layer.borders.length > 0) {
        return new Border(layer.borders[layer.borders.length - 1].fill.color, layer.borders[layer.borders.length - 1].thickness);
    } else {
        return null;
    }
}

function toDart(context, border) {
    var depth = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;

    var depthStr = util.depthToString(depth);
    var endDepthStr = util.depthToString(depth - 1);

    var colorElement = "";
    if (border.color != null && border.color != undefined) {
        colorElement = `\n${depthStr}color: ${color.toDart(context, border.color, 1)},`;
    }

    var widthElement = "";
    if (border.width != null && border.width != undefined) {
        widthElement = `\n${depthStr}width: ${border.width},`;
    }

    return `Border.all(${colorElement}${widthElement}
${endDepthStr}),`;
}

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Gradient = undefined;
exports.parse = parse;
exports.toDart = toDart;

var _color = __webpack_require__(2);

var color = _interopRequireWildcard(_color);

var _util = __webpack_require__(0);

var util = _interopRequireWildcard(_util);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } } // zeplin-flutter-gen
// Copyright (c) 2019-present NAVER Corp.
// MIT license

var Gradient = exports.Gradient = function Gradient(type, colors, stops, angle) {
    _classCallCheck(this, Gradient);

    this.type = type;
    this.colors = colors;
    this.stops = stops;
    this.angle = angle;
};

function parse(context, layer) {
    if (hasGradient(context, layer)) {
        return new Gradient(layer.fills[layer.fills.length - 1].gradient.type, layer.fills[layer.fills.length - 1].gradient.colorStops, layer.fills[layer.fills.length - 1].gradient.colorStops, layer.fills[layer.fills.length - 1].gradient.angle);
    }
    return null;
}

function toDart(context, gradient) {
    var depth = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;

    var depthStr = util.depthToString(depth);
    var endDepthStr = util.depthToString(depth - 1);

    /// TODO: support Gradient until next version.
    /*
    if (gradient.type === 'linear'){
        return `LinearGradient(\n${depthStr}colors: [\n${depthStr}${gradient.colors.map( value => { return color.toDart(context, value.color, 1) } )} ],\n${depthStr}stops: [ ${gradient.stops.join(",\n\t\t\t\t")} \n${depthStr}],\n${endDepthStr}),`;
    } else if (gradient.type === 'radial'){
        return `RadialGradient(\n${depthStr}colors: [\n${depthStr}${gradient.colors.map( value => { return color.toDart(context, value.color, 1) } )} ],\n${depthStr}stops: [ ${gradient.stops.join(",\n\t\t\t\t")} \n${depthStr}],\n${endDepthStr}),`;
    }
    return ``;
    */

    return null;
}

function hasGradient(context, layer) {
    return layer.fills.some(function (f) {
        return f.type == "gradient";
    });
}

/***/ })
/******/ ])["default"];
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCBmNDI2ZmY1NDI3ZWEzODkzZDgwMSIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvb3B0aW9ucy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29sb3IuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2JveF9zaGFkb3dzLmpzIiwid2VicGFjazovLy8uL3NyYy90ZXh0X3N0eWxlLmpzIiwid2VicGFjazovLy8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbWF0ZXJpYWwuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3RleHQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0cnV0X3N0eWxlLmpzIiwid2VicGFjazovLy8uL3NyYy90ZXh0X3NwYW4uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbnRhaW5lci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYm94X2RlY29yYXRpb24uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2JvcmRlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZ3JhZGllbnQuanMiXSwibmFtZXMiOlsiZGVwdGhUb1N0cmluZyIsImNhbWVsaXplIiwiY291bnQiLCJkZXB0aFN0ciIsImkiLCJzdHIiLCJyZXBsYWNlIiwid29yZCIsImluZGV4IiwidG9Mb3dlckNhc2UiLCJ0b1VwcGVyQ2FzZSIsImNvbG9yc0NsYXNzUHJlZml4IiwidXNlQ29sb3JOYW1lIiwidGV4dFN0eWxlc0NsYXNzUHJlZml4IiwidXNlVGV4dFN0eWxlc05hbWUiLCJza2lwRGVmYXVsdFZhbHVlIiwic2tpcFdpZHRoSW5Db250YWluZXIiLCJza2lwSGVpZ2h0SW5Db250YWluZXIiLCJza2lwTWFyZ2luTGVmdEFuZFJpZ2h0Iiwic2tpcEZvbnRGYW1pbGllcyIsInNraXBMZXR0ZXJTcGFjaW5nIiwic2tpcExpbmVIZWlnaHQiLCJTa2lwU3RydXRTdHlsZVNraXBwZWQiLCJPUFRJT05fS0VZUyIsIkNPTE9SU19DTEFTU19QUkVGSVgiLCJVU0VfQ09MT1JfTkFNRSIsIlRFWFRTVFlMRVNfQ0xBU1NfUFJFRklYIiwiVVNFX1RFWFRTVFlMRV9OQU1FIiwiU0tJUF9ERUZBVUxUX1ZBTFVFIiwiU0tJUF9XSURUSF9DT05UQUlORVIiLCJTS0lQX0hFSUdIVF9DT05UQUlORVIiLCJTS0lQX01BUkdJTl9MRUZUX1JJR0hUX0NPTlRBSU5FUiIsIlNLSVBfRk9OVF9GQU1JTFkiLCJTS0lQX0xFVFRFUl9TUEFDSU5HIiwiU0tJUF9MSU5FX0hFSUdIVCIsIlNLSVBfU1RSVVRfU1RZTEUiLCJjb250ZXh0IiwicHJlZml4Iiwib3B0aW9uQ2xhc3NQcmVmaXgiLCJnZXRPcHRpb24iLCJ2YWx1ZXMiLCJzcGxpdCIsInRvRGFydCIsIm9wdGlvbnMiLCJNYXRlcmlhbCIsImNvbG9yIiwib3BhY2l0eSIsIm1hdGVyaWFsQ29sb3IiLCJmaW5kRnJvbU1hdGVyaWFsQ29sb3JzIiwidW5kZWZpbmVkIiwicHJvamVjdENvbG9yIiwiZmluZEZyb21Qcm9qZWN0Q29sb3JzIiwidG9IZXgiLCJoZXgiLCJhIiwiciIsImciLCJiIiwiaW5wdXRDb2xvciIsIkNPTE9SU19NQVAiLCJnZXQiLCJmaW5kIiwicHJvamVjdCIsImNvbG9ycyIsIm5hbWUiLCJwYXJzZSIsInV0aWwiLCJCb3hTaGFkb3ciLCJvZmZzZXR4Iiwib2Zmc2V0eSIsImJsdXJSYWRpdXMiLCJzcHJlYWRSYWRpdXMiLCJzaGFkb3dzIiwibGVuZ3RoIiwibWFwIiwic2hhZG93Iiwib2Zmc2V0WCIsIm9mZnNldFkiLCJzcHJlYWQiLCJ0b0RhcnRBU2hhZG93IiwiZGVwdGgiLCJlbmREZXB0aFN0ciIsImNvbG9yRWxlbWVudCIsImJveFNoYWRvd3MiLCJUZXh0U3R5bGUiLCJmb250RmFtaWx5IiwiZm9udFNpemUiLCJmb250V2VpZ2h0IiwiZm9udFN0eWxlIiwibGV0dGVyU3BhY2luZyIsImhlaWdodCIsInRleHRTdHlsZSIsInVzZU5hbWUiLCJyZXN1bHQiLCJmaW5kVGV4dFN0eWxlTmFtZSIsImZvbnRTaXplRWxlbWVudCIsImZvbnRGYW1pbHlFbGVtZW50IiwiZm9udFdlaWdodEVsZW1lbnQiLCJmb250U3R5bGVFbGVtZW50Iiwic2hhZG93RWxlbWVudHMiLCJsZXR0ZXJTcGFjaW5nRWxlbWVudCIsImxpbmVIZWlnaHRFbGVtZW50IiwiZXhjbHVkZWRGb250cyIsImluY2x1ZGVzIiwiaW5wdXQiLCJ0ZXh0U3R5bGVzIiwidHMiLCJ0ZXh0IiwiY29udGFpbmVyIiwibGF5ZXIiLCJzZWxlY3RlZExheWVyIiwiYm9keSIsInR5cGUiLCJ3aWRnZXQiLCJjb2RlIiwibGFuZ3VhZ2UiLCJwcm9qZWN0Q29sb3JzVG9EYXJ0IiwicHJvamVjdFRleHRTdHlsZXNUb0RhcnQiLCJjb21tZW50IiwicHVzaCIsImNvbG9yTWFwIiwiam9pbiIsIk1hcCIsInNldCIsInN0cnV0U3R5bGUiLCJ0ZXh0U3BhbiIsInRleHRUb0RhcnQiLCJUZXh0U3BhbiIsImNvbnRlbnQiLCJsaW5lSGVpZ2h0IiwidGV4dFNwYW5zIiwic3Vic3RyaW5nIiwicmFuZ2UiLCJzdGFydCIsImVuZCIsInJpY2hUZXh0VG9EYXJ0IiwidGV4dFNlbGVjdGVkIiwic3RydXRTdHlsZUVsZW1lbnQiLCJza2lwU3RydXRTdHlsZVNraXBwZWQiLCJzdHlsZSIsImZvcmNlU3RydXRIZWlnaHRFbGVtZW50IiwiZGVjb3JhdGlvbiIsIkNvbnRhaW5lciIsIngiLCJ5Iiwid2lkdGgiLCJyZWN0Iiwid2lkdGhFbGVtZW50IiwiaGVpZ2h0RWxlbWVudCIsIm1hcmdpbkVsZW1lbnQiLCJkZWNvcmF0aW9uRWxlbWVudCIsImRlY29yYXRpb25EYXJ0IiwiYm9yZGVyIiwiZ3JhZGllbnQiLCJCb3hEZWNvcmF0aW9uIiwiYm9yZGVyUmFkaXVzIiwiZmlsbHMiLCJib3JkZXJFbGVtZW50IiwiYm9yZGVyUmFkaXVzRWxlbWVudCIsImdyYWRpZW50RWxlbWVudCIsInNoYWRvd3NFbGVtZW50cyIsImRhcnRGcm9tQ29sb3IiLCJkYXJ0RnJvbUJvcmRlciIsImRhcnRGcm9tR3JhZGllbnQiLCJkYXJ0RnJvbVNoYWRvd3MiLCJCb3JkZXIiLCJib3JkZXJzIiwiZmlsbCIsInRoaWNrbmVzcyIsIkdyYWRpZW50Iiwic3RvcHMiLCJhbmdsZSIsImhhc0dyYWRpZW50IiwiY29sb3JTdG9wcyIsInNvbWUiLCJmIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsTztRQ1ZBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxLQUFLO1FBQ0w7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7UUFFQTtRQUNBOzs7Ozs7Ozs7Ozs7O1FDekRnQkEsYSxHQUFBQSxhO1FBUUFDLFEsR0FBQUEsUTtBQVpoQjtBQUNBO0FBQ0E7O0FBRU8sU0FBU0QsYUFBVCxHQUFrQztBQUFBLFFBQVhFLEtBQVcsdUVBQUgsQ0FBRzs7QUFDckMsUUFBSUMsV0FBVyxFQUFmO0FBQ0EsU0FBSyxJQUFJQyxJQUFJLENBQWIsRUFBaUJBLElBQUlGLEtBQXJCLEVBQTRCRSxHQUE1QixFQUFpQztBQUM3QkQsb0JBQVksSUFBWjtBQUNIO0FBQ0QsV0FBT0EsUUFBUDtBQUNIOztBQUVNLFNBQVNGLFFBQVQsQ0FBa0JJLEdBQWxCLEVBQXVCO0FBQzFCLFdBQU9BLElBQUlDLE9BQUosQ0FBWSxxQkFBWixFQUFtQyxVQUFTQyxJQUFU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Q2pDLFdBQU9BLE1BQU0rQyxLQUFOLENBQVlrQixJQUFaLENBQWlCO0FBQUEsZUFBS0MsRUFBRS9ELElBQUYsSUFBVSxVQUFmO0FBQUEsS0FBakIsQ0FBUDtBQUNILEMiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcImV4dGVuc2lvblwiXSA9IGZhY3RvcnkoKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJleHRlbnNpb25cIl0gPSBmYWN0b3J5KCk7XG59KSh0eXBlb2Ygc2VsZiAhPT0gJ3VuZGVmaW5lZCcgPyBzZWxmIDogdGhpcywgZnVuY3Rpb24oKSB7XG5yZXR1cm4gXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9cIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSA1KTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCBmNDI2ZmY1NDI3ZWEzODkzZDgwMSIsIi8vIHplcGxpbi1mbHV0dGVyLWdlblxuLy8gQ29weXJpZ2h0IChjKSAyMDE5LXByZXNlbnQgTkFWRVIgQ29ycC5cbi8vIE1JVCBsaWNlbnNlXG5cbmV4cG9ydCBmdW5jdGlvbiBkZXB0aFRvU3RyaW5nKGNvdW50ID0gMSkge1xuICAgIHZhciBkZXB0aFN0ciA9IFwiXCI7XG4gICAgZm9yICh2YXIgaSA9IDAgOyBpIDwgY291bnQ7IGkrKykge1xuICAgICAgICBkZXB0aFN0ciArPSBcIlxcdFwiO1xuICAgIH1cbiAgICByZXR1cm4gZGVwdGhTdHI7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjYW1lbGl6ZShzdHIpIHtcbiAgICByZXR1cm4gc3RyLnJlcGxhY2UoLyg/Ol5cXHd8W0EtWl18XFxiXFx3KS9nLCBmdW5jdGlvbih3b3JkLCBpbmRleCkge1xuICAgICAgcmV0dXJuIGluZGV4ID09IDAgPyB3b3JkLnRvTG93ZXJDYXNlKCkgOiB3b3JkLnRvVXBwZXJDYXNlKCk7XG4gICAgfSkucmVwbGFjZSgvXFxzKy9nLCAnJyk7XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvdXRpbC5qcyIsIi8vIHplcGxpbi1mbHV0dGVyLWdlblxuLy8gQ29weXJpZ2h0IChjKSAyMDE5LXByZXNlbnQgTkFWRVIgQ29ycC5cbi8vIE1JVCBsaWNlbnNlXG5cbmNvbnN0IE9QVElPTl9LRVlTID0ge1xuICAgIENPTE9SU19DTEFTU19QUkVGSVg6IFwiY29sb3JzQ2xhc3NQcmVmaXhcIixcbiAgICBVU0VfQ09MT1JfTkFNRTogXCJ1c2VDb2xvck5hbWVcIixcbiAgICBURVhUU1RZTEVTX0NMQVNTX1BSRUZJWDogXCJ0ZXh0U3R5bGVzQ2xhc3NQcmVmaXhcIixcbiAgICBVU0VfVEVYVFNUWUxFX05BTUU6IFwidXNlVGV4dFN0eWxlTmFtZVwiLFxuICAgIFNLSVBfREVGQVVMVF9WQUxVRTogXCJkZWZhdWx0VmFsdWVTa2lwcGVkXCIsXG4gICAgU0tJUF9XSURUSF9DT05UQUlORVI6IFwid2lkdGhJbkNvbnRhaW5lclNraXBwZWRcIixcbiAgICBTS0lQX0hFSUdIVF9DT05UQUlORVI6IFwiaGVpZ2h0SW5Db250YWluZXJTa2lwcGVkXCIsXG4gICAgU0tJUF9NQVJHSU5fTEVGVF9SSUdIVF9DT05UQUlORVI6IFwibWFyZ2luTGVmdEFuZFJpZ2h0SW5Db250YWluZXJTa2lwcGVkXCIsXG4gICAgU0tJUF9GT05UX0ZBTUlMWTogXCJleGNsdWRlRm9udEZhbWlseVwiLFxuICAgIFNLSVBfTEVUVEVSX1NQQUNJTkc6IFwibGV0dGVyU3BhY2luZ1ZhbHVlU2tpcHBlZFwiLFxuICAgIFNLSVBfTElORV9IRUlHSFQ6IFwibGluZUhlaWdodFZhbHVlU2tpcHBlZFwiLFxuICAgIFNLSVBfU1RSVVRfU1RZTEU6IFwic3RydXRTdHlsZVNraXBwZWRcIixcbn07XG5cbi8qKlxuICogT3B0aW9uc1xuICovXG5leHBvcnQgZnVuY3Rpb24gY29sb3JzQ2xhc3NQcmVmaXgoY29udGV4dCkge1xuICAgIHZhciBwcmVmaXggPSBcIlwiO1xuICAgIGNvbnN0IG9wdGlvbkNsYXNzUHJlZml4ID0gY29udGV4dC5nZXRPcHRpb24oT1BUSU9OX0tFWVMuQ09MT1JTX0NMQVNTX1BSRUZJWClcbiAgICBpZiAob3B0aW9uQ2xhc3NQcmVmaXggIT0gbnVsbCAmJiBvcHRpb25DbGFzc1ByZWZpeCAhPSAnJykge1xuICAgICAgICBwcmVmaXggPSBvcHRpb25DbGFzc1ByZWZpeDtcbiAgICB9XG4gICAgcmV0dXJuIHByZWZpeDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHVzZUNvbG9yTmFtZShjb250ZXh0KSB7XG4gICAgcmV0dXJuIGNvbnRleHQuZ2V0T3B0aW9uKE9QVElPTl9LRVlTLlVTRV9DT0xPUl9OQU1FKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRleHRTdHlsZXNDbGFzc1ByZWZpeChjb250ZXh0KSB7XG4gICAgdmFyIHByZWZpeCA9IFwiXCI7XG4gICAgY29uc3Qgb3B0aW9uQ2xhc3NQcmVmaXggPSBjb250ZXh0LmdldE9wdGlvbihPUFRJT05fS0VZUy5URVhUU1RZTEVTX0NMQVNTX1BSRUZJWClcbiAgICBpZiAob3B0aW9uQ2xhc3NQcmVmaXggIT0gbnVsbCAmJiBvcHRpb25DbGFzc1ByZWZpeCAhPSAnJykge1xuICAgICAgICBwcmVmaXggPSBvcHRpb25DbGFzc1ByZWZpeDtcbiAgICB9XG4gICAgcmV0dXJuIHByZWZpeDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHVzZVRleHRTdHlsZXNOYW1lKGNvbnRleHQpIHtcbiAgICByZXR1cm4gY29udGV4dC5nZXRPcHRpb24oT1BUSU9OX0tFWVMuVEVYVFNUWUxFU19DTEFTU19QUkVGSVgpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc2tpcERlZmF1bHRWYWx1ZShjb250ZXh0KSB7XG4gICAgcmV0dXJuIGNvbnRleHQuZ2V0T3B0aW9uKE9QVElPTl9LRVlTLlNLSVBfREVGQVVMVF9WQUxVRSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBza2lwV2lkdGhJbkNvbnRhaW5lcihjb250ZXh0KSB7XG4gICAgcmV0dXJuIGNvbnRleHQuZ2V0T3B0aW9uKE9QVElPTl9LRVlTLlNLSVBfV0lEVEhfQ09OVEFJTkVSKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNraXBIZWlnaHRJbkNvbnRhaW5lcihjb250ZXh0KSB7XG4gICAgcmV0dXJuIGNvbnRleHQuZ2V0T3B0aW9uKE9QVElPTl9LRVlTLlNLSVBfSEVJR0hUX0NPTlRBSU5FUik7XG59XG5leHBvcnQgZnVuY3Rpb24gc2tpcE1hcmdpbkxlZnRBbmRSaWdodChjb250ZXh0KSB7XG4gICAgcmV0dXJuIGNvbnRleHQuZ2V0T3B0aW9uKE9QVElPTl9LRVlTLlNLSVBfTUFSR0lOX0xFRlRfUklHSFRfQ09OVEFJTkVSKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNraXBGb250RmFtaWxpZXMoY29udGV4dCkge1xuICAgIHZhciB2YWx1ZXMgPSBjb250ZXh0LmdldE9wdGlvbihPUFRJT05fS0VZUy5TS0lQX0ZPTlRfRkFNSUxZKVxuICAgIGlmICh2YWx1ZXMgPT0gJyonKSB7XG4gICAgICAgIHJldHVybiAnKic7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHZhbHVlcy5zcGxpdCgnLCcpO1xuICAgIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNraXBMZXR0ZXJTcGFjaW5nKGNvbnRleHQpIHtcbiAgICByZXR1cm4gY29udGV4dC5nZXRPcHRpb24oT1BUSU9OX0tFWVMuU0tJUF9MRVRURVJfU1BBQ0lORyk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBza2lwTGluZUhlaWdodChjb250ZXh0KSB7XG4gICAgcmV0dXJuIGNvbnRleHQuZ2V0T3B0aW9uKE9QVElPTl9LRVlTLlNLSVBfTElORV9IRUlHSFQpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gU2tpcFN0cnV0U3R5bGVTa2lwcGVkKGNvbnRleHQpIHtcbiAgICByZXR1cm4gY29udGV4dC5nZXRPcHRpb24oT1BUSU9OX0tFWVMuU0tJUF9TVFJVVF9TVFlMRSk7XG59XG5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9vcHRpb25zLmpzIiwiLy8gemVwbGluLWZsdXR0ZXItZ2VuXG4vLyBDb3B5cmlnaHQgKGMpIDIwMTktcHJlc2VudCBOQVZFUiBDb3JwLlxuLy8gTUlUIGxpY2Vuc2VcblxuaW1wb3J0ICogYXMgb3B0aW9ucyBmcm9tICcuL29wdGlvbnMnXG5pbXBvcnQgKiBhcyBNYXRlcmlhbCBmcm9tICcuL21hdGVyaWFsJ1xuXG5leHBvcnQgZnVuY3Rpb24gdG9EYXJ0KGNvbnRleHQsIGNvbG9yLCBvcGFjaXR5LCB1c2VDb2xvck5hbWUgPSB0cnVlKSB7XG4gICAgY29uc3QgcHJlZml4ID0gb3B0aW9ucy5jb2xvcnNDbGFzc1ByZWZpeChjb250ZXh0KTtcbiAgICBpZiAodXNlQ29sb3JOYW1lKSB7XG4gICAgICAgIGlmIChvcHRpb25zLnVzZUNvbG9yTmFtZShjb250ZXh0KSkge1xuICAgICAgICAgICAgY29uc3QgbWF0ZXJpYWxDb2xvciA9IGZpbmRGcm9tTWF0ZXJpYWxDb2xvcnMoY29sb3IpO1xuICAgICAgICAgICAgaWYgKG1hdGVyaWFsQ29sb3IgIT0gbnVsbCAmJiBtYXRlcmlhbENvbG9yICE9IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBgQ29sb3JzLiR7bWF0ZXJpYWxDb2xvcn1gO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgICAgICBjb25zdCBwcm9qZWN0Q29sb3IgPSBmaW5kRnJvbVByb2plY3RDb2xvcnMoY29udGV4dCwgY29sb3IpO1xuICAgICAgICAgICAgaWYgKHByb2plY3RDb2xvciAhPSBudWxsICYmIHByb2plY3RDb2xvciAhPSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gYCR7cHJlZml4fUNvbG9ycy4ke3Byb2plY3RDb2xvcn1gO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29sb3IgPSBjb2xvci50b0hleCgpO1xuXG4gICAgY29uc3QgaGV4ID0gYDB4JHtjb2xvci5hfSR7Y29sb3Iucn0ke2NvbG9yLmd9JHtjb2xvci5ifWA7XG4gICAgaWYgKG9wYWNpdHkgPCAxKSB7XG4gICAgICAgIHJldHVybiBgQ29sb3IoJHtoZXh9KS53aXRoT3BhY2l0eSgke29wYWNpdHl9KWA7XG4gICAgfVxuXG4gICAgcmV0dXJuIGBDb2xvcigke2hleH0pYDtcbn1cblxuZnVuY3Rpb24gZmluZEZyb21NYXRlcmlhbENvbG9ycyhpbnB1dENvbG9yKSB7XG4gICAgY29uc3QgY29sb3IgPSBpbnB1dENvbG9yLnRvSGV4KCk7XG4gICAgY29uc3QgaGV4ID0gJzB4JyArIGAke2NvbG9yLmF9JHtjb2xvci5yfSR7Y29sb3IuZ30ke2NvbG9yLmJ9YC50b1VwcGVyQ2FzZSgpO1xuICAgIHJldHVybiBNYXRlcmlhbC5DT0xPUlNfTUFQLmdldChoZXgpO1xufVxuXG5mdW5jdGlvbiBmaW5kRnJvbVByb2plY3RDb2xvcnMoY29udGV4dCwgaW5wdXRDb2xvcikge1xuICAgIGNvbnN0IGZpbmQgPSBjb250ZXh0LnByb2plY3QuY29sb3JzLmZpbmQoY29sb3IgPT4ge1xuICAgICAgICByZXR1cm4gaW5wdXRDb2xvci5hID09IGNvbG9yLmEgJiYgaW5wdXRDb2xvci5yID09IGNvbG9yLnIgJiYgaW5wdXRDb2xvci5nID09IGNvbG9yLmcgJiYgaW5wdXRDb2xvci5iID09IGNvbG9yLmI7XG4gICAgfSk7XG5cbiAgICBpZiAoZmluZCA9PSB1bmRlZmluZWQgfHwgZmluZCA9PSBudWxsKSByZXR1cm4gbnVsbDtcbiAgICByZXR1cm4gZmluZC5uYW1lO1xufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbG9yLmpzIiwiLy8gemVwbGluLWZsdXR0ZXItZ2VuXG4vLyBDb3B5cmlnaHQgKGMpIDIwMTktcHJlc2VudCBOQVZFUiBDb3JwLlxuLy8gTUlUIGxpY2Vuc2VcblxuaW1wb3J0ICogYXMgY29sb3IgZnJvbSBcIi4vY29sb3JcIjtcbmltcG9ydCAqIGFzIHV0aWwgZnJvbSAnLi91dGlsJztcblxuZXhwb3J0IGNsYXNzIEJveFNoYWRvdyB7XG4gICAgY29uc3RydWN0b3IoY29sb3IsIG9mZnNldHgsIG9mZnNldHksIGJsdXJSYWRpdXMsIHNwcmVhZFJhZGl1cykge1xuICAgICAgICB0aGlzLmNvbG9yID0gY29sb3I7XG4gICAgICAgIHRoaXMub2Zmc2V0eCA9IG9mZnNldHg7XG4gICAgICAgIHRoaXMub2Zmc2V0eSA9IG9mZnNldHk7XG4gICAgICAgIHRoaXMuYmx1clJhZGl1cyA9IGJsdXJSYWRpdXM7XG4gICAgICAgIHRoaXMuc3ByZWFkUmFkaXVzID0gc3ByZWFkUmFkaXVzO1xuICAgIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlKGNvbnRleHQsIHNoYWRvd3Mpe1xuICAgIGlmIChzaGFkb3dzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgcmV0dXJuIHNoYWRvd3MubWFwKCBzaGFkb3cgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBCb3hTaGFkb3coXG4gICAgICAgICAgICAgICAgc2hhZG93LmNvbG9yLFxuICAgICAgICAgICAgICAgIHNoYWRvdy5vZmZzZXRYLFxuICAgICAgICAgICAgICAgIHNoYWRvdy5vZmZzZXRZLFxuICAgICAgICAgICAgICAgIHNoYWRvdy5ibHVyUmFkaXVzLFxuICAgICAgICAgICAgICAgIHNoYWRvdy5zcHJlYWRcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBudWxsXG4gICAgfSBcblxufVxuXG5mdW5jdGlvbiB0b0RhcnRBU2hhZG93KGNvbnRleHQsIHNoYWRvdywgZGVwdGggPSAxKSB7XG4gICAgY29uc3QgZGVwdGhTdHIgPSB1dGlsLmRlcHRoVG9TdHJpbmcoZGVwdGgpO1xuICAgIGNvbnN0IGVuZERlcHRoU3RyID0gdXRpbC5kZXB0aFRvU3RyaW5nKGRlcHRoIC0gMSk7XG4gICAgdmFyIGNvbG9yRWxlbWVudCA9IFwiXCI7XG4gICAgaWYgKHNoYWRvdy5jb2xvciAhPSBudWxsICYmIHNoYWRvdy5jb2xvciAhPSB1bmRlZmluZWQpIHtcbiAgICAgICAgY29sb3JFbGVtZW50ID0gYFxcbiR7ZGVwdGhTdHJ9Y29sb3I6ICR7Y29sb3IudG9EYXJ0KGNvbnRleHQsIHNoYWRvdy5jb2xvciwgMSl9LGA7XG4gICAgfVxuXG4gICAgcmV0dXJuIGBCb3hTaGFkb3coJHtjb2xvckVsZW1lbnR9XG4ke2RlcHRoU3RyfW9mZnNldDogT2Zmc2V0KCR7c2hhZG93Lm9mZnNldHh9LCAke3NoYWRvdy5vZmZzZXR5fSksXG4ke2RlcHRoU3RyfWJsdXJSYWRpdXM6ICR7c2hhZG93LmJsdXJSYWRpdXN9LFxuJHtkZXB0aFN0cn1zcHJlYWRSYWRpdXM6ICR7c2hhZG93LnNwcmVhZFJhZGl1c30sXG4ke2VuZERlcHRoU3RyfSksYDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRvRGFydChjb250ZXh0LCBzaGFkb3dzLCBkZXB0aCA9IDEpIHtcbiAgICBjb25zdCBkZXB0aFN0ciA9IHV0aWwuZGVwdGhUb1N0cmluZyhkZXB0aCk7XG4gICAgY29uc3QgZW5kRGVwdGhTdHIgPSB1dGlsLmRlcHRoVG9TdHJpbmcoZGVwdGggLSAxKTtcblxuICAgIHJldHVybiAgYFtcbiR7c2hhZG93cy5tYXAoIHNoYWRvdyA9PiB7IHJldHVybiBkZXB0aFN0ciArIHRvRGFydEFTaGFkb3coY29udGV4dCwgc2hhZG93LCBkZXB0aCArIDEpfSl9XG4ke2VuZERlcHRoU3RyfV0sYFxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2JveF9zaGFkb3dzLmpzIiwiLy8gemVwbGluLWZsdXR0ZXItZ2VuXG4vLyBDb3B5cmlnaHQgKGMpIDIwMTktcHJlc2VudCBOQVZFUiBDb3JwLlxuLy8gTUlUIGxpY2Vuc2VcblxuaW1wb3J0ICogYXMgb3B0aW9ucyBmcm9tICcuL29wdGlvbnMnO1xuaW1wb3J0ICogYXMgY29sb3IgZnJvbSBcIi4vY29sb3JcIjtcbmltcG9ydCAqIGFzIHV0aWwgZnJvbSAnLi91dGlsJztcbmltcG9ydCAqIGFzIGJveFNoYWRvd3MgZnJvbSAnLi9ib3hfc2hhZG93cyc7XG5cbmV4cG9ydCBjbGFzcyBUZXh0U3R5bGUge1xuICAgIGNvbnN0cnVjdG9yKG5hbWUsIGZvbnRGYW1pbHksIGNvbG9yLCBmb250U2l6ZSwgZm9udFdlaWdodCwgZm9udFN0eWxlLCBsZXR0ZXJTcGFjaW5nLCBoZWlnaHQsIHNoYWRvd3MpIHtcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICAgICAgdGhpcy5mb250RmFtaWx5ID0gZm9udEZhbWlseTtcbiAgICAgICAgdGhpcy5jb2xvciA9IGNvbG9yO1xuICAgICAgICB0aGlzLmZvbnRTaXplID0gZm9udFNpemU7XG4gICAgICAgIHRoaXMuZm9udFdlaWdodCA9IGZvbnRXZWlnaHQ7XG4gICAgICAgIHRoaXMuZm9udFN0eWxlID0gZm9udFN0eWxlO1xuICAgICAgICB0aGlzLmxldHRlclNwYWNpbmcgPSBsZXR0ZXJTcGFjaW5nO1xuICAgICAgICB0aGlzLmhlaWdodCA9IGhlaWdodDtcbiAgICAgICAgdGhpcy5zaGFkb3dzID0gc2hhZG93czsgICAgXG4gICAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gdG9EYXJ0KGNvbnRleHQsIHRleHRTdHlsZSwgZGVwdGggPSAxLCB1c2VOYW1lID0gdHJ1ZSkge1xuICAgIGlmICh1c2VOYW1lKSB7XG4gICAgICAgIGlmIChvcHRpb25zLnVzZVRleHRTdHlsZXNOYW1lKSB7XG4gICAgICAgICAgICBjb25zdCByZXN1bHQgPSBmaW5kVGV4dFN0eWxlTmFtZShjb250ZXh0LCB0ZXh0U3R5bGUpO1xuICAgICAgICAgICAgY29uc3QgcHJlZml4ID0gb3B0aW9ucy50ZXh0U3R5bGVzQ2xhc3NQcmVmaXgoY29udGV4dCk7XG4gICAgXG4gICAgICAgICAgICBpZiAocmVzdWx0ICE9IG51bGwpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gYCR7cHJlZml4fVRleHRTdHlsZXMuJHtyZXN1bHR9YDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBjb25zdCBkZXB0aFN0ciA9IHV0aWwuZGVwdGhUb1N0cmluZyhkZXB0aCk7XG4gICAgY29uc3QgZW5kRGVwdGhTdHIgPSB1dGlsLmRlcHRoVG9TdHJpbmcoZGVwdGggLSAxKTtcblxuICAgIHZhciBmb250U2l6ZUVsZW1lbnQgPSBcIlwiO1xuICAgIHZhciBmb250RmFtaWx5RWxlbWVudCA9IFwiXCI7XG4gICAgdmFyIGZvbnRXZWlnaHRFbGVtZW50ID0gXCJcIjtcbiAgICB2YXIgZm9udFN0eWxlRWxlbWVudCA9IFwiXCI7XG4gICAgdmFyIHNoYWRvd0VsZW1lbnRzID0gXCJcIjtcbiAgICB2YXIgbGV0dGVyU3BhY2luZ0VsZW1lbnQgPSBcIlwiO1xuICAgIHZhciBsaW5lSGVpZ2h0RWxlbWVudCA9IFwiXCI7XG5cbiAgICBjb25zdCBza2lwRGVmYXVsdFZhbHVlID0gb3B0aW9ucy5za2lwRGVmYXVsdFZhbHVlKGNvbnRleHQpO1xuXG4gICAgaWYgKHRleHRTdHlsZS5mb250U2l6ZSAhPSBudWxsKSB7XG4gICAgICAgIGlmICghKHNraXBEZWZhdWx0VmFsdWUgJiYgdGV4dFN0eWxlLmZvbnRTaXplID09IDE0LjApKSB7XG4gICAgICAgICAgICBmb250U2l6ZUVsZW1lbnQgPSBgXFxuJHtkZXB0aFN0cn1mb250U2l6ZTogJHt0ZXh0U3R5bGUuZm9udFNpemV9LGA7XG4gICAgICAgIH0gXG4gICAgfVxuXG4gICAgaWYgKHRleHRTdHlsZS5mb250RmFtaWx5ICE9IG51bGwpIHtcbiAgICAgICAgY29uc3QgZXhjbHVkZWRGb250cyA9IG9wdGlvbnMuc2tpcEZvbnRGYW1pbGllcyhjb250ZXh0KTtcbiAgICAgICAgaWYgKGV4Y2x1ZGVkRm9udHMgIT0gJyonKSB7XG4gICAgICAgICAgICBpZiAoIWV4Y2x1ZGVkRm9udHMuaW5jbHVkZXModGV4dFN0eWxlLmZvbnRGYW1pbHkpKSB7XG4gICAgICAgICAgICAgICAgZm9udEZhbWlseUVsZW1lbnQgPSBgXFxuJHtkZXB0aFN0cn1mb250RmFtaWx5OiAnJHt0ZXh0U3R5bGUuZm9udEZhbWlseX0nLGA7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAodGV4dFN0eWxlLmZvbnRXZWlnaHQgIT0gbnVsbCkge1xuICAgICAgICBpZiAoIShza2lwRGVmYXVsdFZhbHVlICYmIHRleHRTdHlsZS5mb250V2VpZ2h0ID09IDQwMCkpIHtcbiAgICAgICAgICAgIGZvbnRXZWlnaHRFbGVtZW50ID0gYFxcbiR7ZGVwdGhTdHJ9Zm9udFdlaWdodDogRm9udFdlaWdodC53JHt0ZXh0U3R5bGUuZm9udFdlaWdodH0sYDtcbiAgICAgICAgfSBcbiAgICB9IFxuXG4gICAgaWYgKHRleHRTdHlsZS5mb250U3R5bGUgIT0gbnVsbCkge1xuICAgICAgICBpZiAoIShza2lwRGVmYXVsdFZhbHVlICYmIHRleHRTdHlsZS5mb250U3R5bGUgPT0gXCJub3JtYWxcIikpIHtcbiAgICAgICAgICAgIGZvbnRTdHlsZUVsZW1lbnQgPSBgXFxuJHtkZXB0aFN0cn1mb250U3R5bGU6IEZvbnRTdHlsZS4ke3RleHRTdHlsZS5mb250U3R5bGV9LGA7XG4gICAgICAgIH0gXG4gICAgfSBcbiAgICBpZiAodGV4dFN0eWxlLnNoYWRvd3MgIT0gbnVsbCkge1xuICAgICAgICBzaGFkb3dFbGVtZW50cyA9IGBcXG4ke2RlcHRoU3RyfXNoYWRvd3M6ICR7Ym94U2hhZG93cy50b0RhcnQoY29udGV4dCwgdGV4dFN0eWxlLnNoYWRvd3MpfSxgO1xuICAgIH1cbiAgICBcbiAgICBpZiAodGV4dFN0eWxlLmxldHRlclNwYWNpbmcgIT0gbnVsbCkge1xuICAgICAgIGlmICghb3B0aW9ucy5za2lwTGV0dGVyU3BhY2luZyhjb250ZXh0KSkge1xuICAgICAgICBsZXR0ZXJTcGFjaW5nRWxlbWVudCA9IGBcXG4ke2RlcHRoU3RyfWxldHRlclNwYWNpbmc6ICR7dGV4dFN0eWxlLmxldHRlclNwYWNpbmd9LGA7XG4gICAgICAgfVxuICAgIH1cblxuICAgIGlmICh0ZXh0U3R5bGUuaGVpZ2h0ICE9IG51bGwpIHtcbiAgICAgICAgaWYgKCEoc2tpcERlZmF1bHRWYWx1ZSAmJiB0ZXh0U3R5bGUuaGVpZ2h0ID09IDEuMCkpIHtcbiAgICAgICAgICAgIGlmICghb3B0aW9ucy5za2lwTGluZUhlaWdodChjb250ZXh0KSkge1xuICAgICAgICAgICAgICAgIGxpbmVIZWlnaHRFbGVtZW50ID0gYFxcbiR7ZGVwdGhTdHJ9aGVpZ2h0OiAke3RleHRTdHlsZS5oZWlnaHR9LGA7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gXG4gICAgfVxuXG4gICAgcmV0dXJuIGBUZXh0U3R5bGUoXG4ke2RlcHRoU3RyfWNvbG9yOiAke2NvbG9yLnRvRGFydChjb250ZXh0LCB0ZXh0U3R5bGUuY29sb3IsIDEpfSwke2ZvbnRTaXplRWxlbWVudH0ke2ZvbnRGYW1pbHlFbGVtZW50fSR7Zm9udFdlaWdodEVsZW1lbnR9JHtmb250U3R5bGVFbGVtZW50fSR7bGV0dGVyU3BhY2luZ0VsZW1lbnR9JHtzaGFkb3dFbGVtZW50c30ke2xpbmVIZWlnaHRFbGVtZW50fVxuJHtlbmREZXB0aFN0cn0pYDtcbn1cblxuZnVuY3Rpb24gZmluZFRleHRTdHlsZU5hbWUoY29udGV4dCwgaW5wdXQpIHtcbiAgICBjb25zdCBmaW5kID0gY29udGV4dC5wcm9qZWN0LnRleHRTdHlsZXMuZmluZCh0cyA9PiB7XG4gICAgICAgIHJldHVybiBpbnB1dC5uYW1lID09IHRzLm5hbWU7XG4gICAgfSk7XG5cbiAgICBpZiAoZmluZCA9PSB1bmRlZmluZWQgfHwgZmluZCA9PSBudWxsKSByZXR1cm4gbnVsbDtcbiAgICByZXR1cm4gdXRpbC5jYW1lbGl6ZShmaW5kLm5hbWUpO1xufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy90ZXh0X3N0eWxlLmpzIiwiLy8gemVwbGluLWZsdXR0ZXItZ2VuXG4vLyBDb3B5cmlnaHQgKGMpIDIwMTktcHJlc2VudCBOQVZFUiBDb3JwLlxuLy8gTUlUIGxpY2Vuc2VcblxuaW1wb3J0ICogYXMgb3B0aW9ucyBmcm9tICcuL29wdGlvbnMnO1xuaW1wb3J0ICogYXMgdXRpbCBmcm9tICcuL3V0aWwnO1xuaW1wb3J0ICogYXMgY29sb3IgZnJvbSBcIi4vY29sb3JcIjtcbmltcG9ydCAqIGFzIHRleHQgZnJvbSBcIi4vdGV4dFwiO1xuaW1wb3J0ICogYXMgY29udGFpbmVyIGZyb20gXCIuL2NvbnRhaW5lclwiO1xuaW1wb3J0ICogYXMgdGV4dFN0eWxlIGZyb20gJy4vdGV4dF9zdHlsZSc7XG5cblxuZnVuY3Rpb24gbGF5ZXIoY29udGV4dCwgc2VsZWN0ZWRMYXllcikge1xuICAgIHZhciBib2R5ID0gXCJcIjtcbiAgICBzd2l0Y2goc2VsZWN0ZWRMYXllci50eXBlKSB7XG4gICAgICAgIGNhc2UgJ3RleHQnOlxuICAgICAgICAgICAgYm9keSA9IHRleHQud2lkZ2V0KGNvbnRleHQsIHNlbGVjdGVkTGF5ZXIpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ3NoYXBlJzpcbiAgICAgICAgICAgIGJvZHkgPSBjb250YWluZXIud2lkZ2V0KGNvbnRleHQsIHNlbGVjdGVkTGF5ZXIpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICBicmVhazsgICAgICAgICAgICBcbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBjb2RlOiBgJHtib2R5fWAsXG4gICAgICAgIGxhbmd1YWdlOiBcImRhcnRcIlxuICAgIH07XG59XG5cbi8qXG5mdW5jdGlvbiBzY3JlZW4oY29udGV4dCwgc2VsZWN0ZWRWZXJzaW9uLCBzZWxlY3RlZFNjcmVlbikge1xuXG59XG4qL1xuXG4vKlxuZnVuY3Rpb24gY29tcG9uZW50KGNvbnRleHQsIHNlbGVjdGVkVmVyc2lvbiwgc2VsZWN0ZWRDb21wb25lbnQpIHtcblxufVxuKi9cblxuZnVuY3Rpb24gY29sb3JzKGNvbnRleHQpIHtcbiAgICBjb25zdCBib2R5ID0gcHJvamVjdENvbG9yc1RvRGFydChjb250ZXh0KTtcbiAgICByZXR1cm4ge1xuICAgICAgICBjb2RlOiBib2R5LFxuICAgICAgICBsYW5ndWFnZTogXCJkYXJ0XCJcbiAgICB9XG59XG5cbmZ1bmN0aW9uIHRleHRTdHlsZXMoY29udGV4dCkge1xuICAgIGNvbnN0IGJvZHkgPSBwcm9qZWN0VGV4dFN0eWxlc1RvRGFydChjb250ZXh0KTtcbiAgICByZXR1cm4ge1xuICAgICAgICBjb2RlOiBib2R5LFxuICAgICAgICBsYW5ndWFnZTogXCJkYXJ0XCJcbiAgICB9XG59XG5cbi8qXG5mdW5jdGlvbiBleHBvcnRDb2xvcnMoY29udGV4dCkge1xuXG59XG4qL1xuXG4vKlxuZnVuY3Rpb24gZXhwb3J0VGV4dFN0eWxlcyhjb250ZXh0KSB7XG5cbn1cbiovXG4vKlxuZnVuY3Rpb24gc3R5bGVndWlkZUNvbG9ycyhjb250ZXh0LCBjb2xvcnMpIHtcbiAgXG59XG4vKlxuLypcbmZ1bmN0aW9uIHN0eWxlZ3VpZGVUZXh0U3R5bGVzKGNvbnRleHQsIHRleHRTdHlsZXMpIHtcblxufVxuKi9cbi8qXG5mdW5jdGlvbiBleHBvcnRTdHlsZWd1aWRlQ29sb3JzKGNvbnRleHQsIGNvbG9ycykge1xuXG59XG4qL1xuXG4vKlxuZnVuY3Rpb24gZXhwb3J0U3R5bGVndWlkZVRleHRTdHlsZXMoY29udGV4dCwgdGV4dFN0eWxlcykge1xuXG59XG4qL1xuXG5mdW5jdGlvbiBjb21tZW50KGNvbnRleHQsIHRleHQpIHtcblxufVxuXG5mdW5jdGlvbiBwcm9qZWN0Q29sb3JzVG9EYXJ0KGNvbnRleHQpIHtcbiAgICBjb25zdCBwcmVmaXggPSBvcHRpb25zLmNvbG9yc0NsYXNzUHJlZml4KGNvbnRleHQpO1xuICAgIHZhciBib2R5ID0gYGNsYXNzICR7cHJlZml4fUNvbG9ycyB7XFxuYDtcblxuICAgIHZhciBjb2xvcnMgPSBbXTtcbiAgICBjb250ZXh0LnByb2plY3QuY29sb3JzLm1hcChcbiAgICAgICAgY29sb3JNYXAgPT4ge1xuICAgICAgICAgICAgY29sb3JzLnB1c2goYFxcdHN0YXRpYyBjb25zdCBDb2xvciAke2NvbG9yTWFwLm5hbWV9ID0gJHtjb2xvci50b0RhcnQoY29udGV4dCwgY29sb3JNYXAsIDEsIGZhbHNlKX07YClcbiAgICAgICAgfVxuICAgICk7XG5cbiAgICBib2R5ICs9IGNvbG9ycy5qb2luKCdcXG4nKTtcblxuICAgIGJvZHkgKz0gXCJcXG59XFxuXCI7XG4gICAgcmV0dXJuIGJvZHk7XG59XG5cbmZ1bmN0aW9uIHByb2plY3RUZXh0U3R5bGVzVG9EYXJ0KGNvbnRleHQpIHtcbiAgICBjb25zdCBwcmVmaXggPSBvcHRpb25zLnRleHRTdHlsZXNDbGFzc1ByZWZpeChjb250ZXh0KTtcbiAgICB2YXIgYm9keSA9IGBjbGFzcyAke3ByZWZpeH1UZXh0U3R5bGVzIHtcXG5gO1xuXG4gICAgdmFyIHRleHRTdHlsZXMgPSBbXTtcbiAgICBjb250ZXh0LnByb2plY3QudGV4dFN0eWxlcy5tYXAoXG4gICAgICAgIHRzID0+IHtcbiAgICAgICAgICAgIHRleHRTdHlsZXMucHVzaChgXFx0c3RhdGljIGNvbnN0IFRleHRTdHlsZSAke3V0aWwuY2FtZWxpemUodHMubmFtZSl9ID0gJHt0ZXh0U3R5bGUudG9EYXJ0KGNvbnRleHQsIHRzLCAyLCBmYWxzZSl9O2ApXG4gICAgICAgIH1cbiAgICApO1xuXG4gICAgYm9keSArPSB0ZXh0U3R5bGVzLmpvaW4oJ1xcbicpO1xuXG4gICAgYm9keSArPSBcIlxcbn1cXG5cIjtcbiAgICByZXR1cm4gYm9keTtcbn1cblxuZXhwb3J0IGRlZmF1bHQge1xuICAgIGxheWVyLFxuICAgIC8vIHNjcmVlbixcbiAgICAvLyBjb21wb25lbnQsXG4gICAgY29sb3JzLFxuICAgIHRleHRTdHlsZXMsXG4gICAgLy8gZXhwb3J0Q29sb3JzLFxuICAgIC8vIGV4cG9ydFRleHRTdHlsZXMsXG4gICAgLy8gc3R5bGVndWlkZUNvbG9ycyxcbiAgICAvLyBzdHlsZWd1aWRlVGV4dFN0eWxlcyxcbiAgICAvLyBleHBvcnRTdHlsZWd1aWRlQ29sb3JzLFxuICAgIC8vIGV4cG9ydFN0eWxlZ3VpZGVUZXh0U3R5bGVzLFxuICAgIGNvbW1lbnRcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvaW5kZXguanMiLCIvLyB6ZXBsaW4tZmx1dHRlci1nZW5cbi8vIENvcHlyaWdodCAoYykgMjAxOS1wcmVzZW50IE5BVkVSIENvcnAuXG4vLyBNSVQgbGljZW5zZVxuXG4vLy8gQ29sb3IgaW5mb3JtYXRpb24gYmFzZWQgb24gZmx1dHRlci9tYXRlcmlhbC9jb2xvcnMuZGFydFxuLy8vIC0gVXBwZXIgQ2FzZVxuZXhwb3J0IHZhciBDT0xPUlNfTUFQID0gbmV3IE1hcCgpO1xuQ09MT1JTX01BUC5zZXQoXCIweDAwMDAwMDAwXCIsIFwidHJhbnNwYXJlbnRcIik7XG5cbkNPTE9SU19NQVAuc2V0KFwiMHhGRjAwMDAwMFwiLCBcImJsYWNrXCIpO1xuQ09MT1JTX01BUC5zZXQoXCIweEREMDAwMDAwXCIsIFwiYmxhY2s4N1wiKTtcbkNPTE9SU19NQVAuc2V0KFwiMHg4QTAwMDAwMFwiLCBcImJsYWNrNTRcIik7XG5DT0xPUlNfTUFQLnNldChcIjB4NzMwMDAwMDBcIiwgXCJibGFjazQ1XCIpO1xuQ09MT1JTX01BUC5zZXQoXCIweDYxMDAwMDAwXCIsIFwiYmxhY2szOFwiKTtcbkNPTE9SU19NQVAuc2V0KFwiMHg0MjAwMDAwMFwiLCBcImJsYWNrMjZcIik7XG5DT0xPUlNfTUFQLnNldChcIjB4MUYwMDAwMDBcIiwgXCJibGFjazEyXCIpO1xuXG5DT0xPUlNfTUFQLnNldChcIjB4RkZGRkZGRkZcIiwgXCJ3aGl0ZVwiKTtcbkNPTE9SU19NQVAuc2V0KFwiMHhCM0ZGRkZGRlwiLCBcIndoaXRlNzBcIik7XG5DT0xPUlNfTUFQLnNldChcIjB4OTlGRkZGRkZcIiwgXCJ3aGl0ZTYwXCIpO1xuQ09MT1JTX01BUC5zZXQoXCIweDhBRkZGRkZGXCIsIFwid2hpdGU1NFwiKTtcbkNPTE9SU19NQVAuc2V0KFwiMHg2MkZGRkZGRlwiLCBcIndoaXRlMzhcIik7XG5DT0xPUlNfTUFQLnNldChcIjB4NERGRkZGRkZcIiwgXCJ3aGl0ZTMwXCIpO1xuQ09MT1JTX01BUC5zZXQoXCIweDYyRkZGRkZGXCIsIFwid2hpdGUzOFwiKTtcbkNPTE9SU19NQVAuc2V0KFwiMHgzREZGRkZGRlwiLCBcIndoaXRlMjRcIik7XG5DT0xPUlNfTUFQLnNldChcIjB4MUZGRkZGRkZcIiwgXCJ3aGl0ZTEyXCIpO1xuQ09MT1JTX01BUC5zZXQoXCIweDFBRkZGRkZGXCIsIFwid2hpdGUxMFwiKTtcblxuLy8vIE1hdGVyaWFsQ29sb3JcbkNPTE9SU19NQVAuc2V0KFwiMHhGRkY0NDMzNlwiLCBcInJlZFwiKTtcbkNPTE9SU19NQVAuc2V0KFwiMHhGRkU5MUU2M1wiLCBcInBpbmtcIik7XG5DT0xPUlNfTUFQLnNldChcIjB4RkY5QzI3QjBcIiwgXCJwdXJwbGVcIik7XG5DT0xPUlNfTUFQLnNldChcIjB4RkY3QzRERkZcIiwgXCJkZWVwUHVycGxlXCIpO1xuQ09MT1JTX01BUC5zZXQoXCIweEZGM0Y1MUI1XCIsIFwiaW5kaWdvXCIpO1xuQ09MT1JTX01BUC5zZXQoXCIweEZGMjE5NkYzXCIsIFwiYmx1ZVwiKTtcbkNPTE9SU19NQVAuc2V0KFwiMHhGRjAzQTlGNFwiLCBcImxpZ2h0Qmx1ZVwiKTtcbkNPTE9SU19NQVAuc2V0KFwiMHhGRjAwQkNENFwiLCBcImN5YW5cIik7XG5DT0xPUlNfTUFQLnNldChcIjB4RkYwMDk2ODhcIiwgXCJ0ZWFsXCIpO1xuQ09MT1JTX01BUC5zZXQoXCIweEZGNENBRjUwXCIsIFwiZ3JlZW5cIik7XG5DT0xPUlNfTUFQLnNldChcIjB4RkY4QkMzNEFcIiwgXCJsaWdodEdyZWVuXCIpO1xuQ09MT1JTX01BUC5zZXQoXCIweEZGQ0REQzM5XCIsIFwibGltZVwiKTtcbkNPTE9SU19NQVAuc2V0KFwiMHhGRkZGRUIzQlwiLCBcInllbGxvd1wiKTtcbkNPTE9SU19NQVAuc2V0KFwiMHhGRkZGQzEwN1wiLCBcImFtYmVyXCIpO1xuQ09MT1JTX01BUC5zZXQoXCIweEZGRkY5ODAwXCIsIFwib3JhbmdlXCIpO1xuQ09MT1JTX01BUC5zZXQoXCIweEZGRkY1NzIyXCIsIFwiZGVlcE9yYW5nZVwiKTtcbkNPTE9SU19NQVAuc2V0KFwiMHhGRjc5NTU0OFwiLCBcImJyb3duXCIpO1xuQ09MT1JTX01BUC5zZXQoXCIweEZGOUU5RTlFXCIsIFwiZ3JleVwiKTtcbkNPTE9SU19NQVAuc2V0KFwiMHhGRjYwN0Q4QlwiLCBcImJsdWVHcmV5XCIpO1xuXG4vLy8gQWNjZW50c1xuQ09MT1JTX01BUC5zZXQoXCIweEZGRkY1MjUyXCIsIFwicmVkQWNjZW50XCIpO1xuQ09MT1JTX01BUC5zZXQoXCIweEZGRkY0MDgxXCIsIFwicGlua0FjY2VudFwiKTtcbkNPTE9SU19NQVAuc2V0KFwiMHhGRkUwNDBGQlwiLCBcInB1cnBsZUFjY2VudFwiKTtcbkNPTE9SU19NQVAuc2V0KFwiMHhGRjdDNERGRlwiLCBcImRlZXBQdXJwbGVBY2NlbnRcIik7XG5DT0xPUlNfTUFQLnNldChcIjB4RkY1MzZERkVcIiwgXCJpbmRpZ29BY2NlbnRcIik7XG5DT0xPUlNfTUFQLnNldChcIjB4RkY0NDhBRkZcIiwgXCJibHVlQWNjZW50XCIpO1xuQ09MT1JTX01BUC5zZXQoXCIweEZGNDBDNEZGXCIsIFwibGlnaHRCbHVlQWNjZW50XCIpO1xuQ09MT1JTX01BUC5zZXQoXCIweEZGMThGRkZGXCIsIFwiY3lhbkFjY2VudFwiKTtcbkNPTE9SU19NQVAuc2V0KFwiMHhGRjY0RkZEQVwiLCBcInRlYWxBY2NlbnRcIik7XG5DT0xPUlNfTUFQLnNldChcIjB4RkY2OUYwQUVcIiwgXCJncmVlbkFjY2VudFwiKTtcbkNPTE9SU19NQVAuc2V0KFwiMHhGRkIyRkY1OVwiLCBcImxpZ2h0R3JlZW5BY2NlbnRcIik7XG5DT0xPUlNfTUFQLnNldChcIjB4RkZFRUZGNDFcIiwgXCJsaW1lQWNjZW50XCIpO1xuQ09MT1JTX01BUC5zZXQoXCIweEZGRkZGRjAwXCIsIFwieWVsbG93QWNjZW50XCIpO1xuQ09MT1JTX01BUC5zZXQoXCIweEZGRkZENzQwXCIsIFwiYW1iZXJBY2NlbnRcIik7XG5DT0xPUlNfTUFQLnNldChcIjB4RkZGRkFCNDBcIiwgXCJvcmFuZ2VBY2NlbnRcIik7XG5DT0xPUlNfTUFQLnNldChcIjB4RkZGRjZFNDBcIiwgXCJkZWVwT3JhbmdlQWNjZW50XCIpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL21hdGVyaWFsLmpzIiwiLy8gemVwbGluLWZsdXR0ZXItZ2VuXG4vLyBDb3B5cmlnaHQgKGMpIDIwMTktcHJlc2VudCBOQVZFUiBDb3JwLlxuLy8gTUlUIGxpY2Vuc2VcblxuaW1wb3J0ICogYXMgb3B0aW9ucyBmcm9tICcuL29wdGlvbnMnO1xuaW1wb3J0ICogYXMgYm94U2hhZG93cyBmcm9tICcuL2JveF9zaGFkb3dzJztcbmltcG9ydCB7IFRleHRTdHlsZSB9IGZyb20gJy4vdGV4dF9zdHlsZSc7XG5pbXBvcnQgKiBhcyB0ZXh0U3R5bGUgZnJvbSAnLi90ZXh0X3N0eWxlJztcbmltcG9ydCAqIGFzIHN0cnV0U3R5bGUgZnJvbSAnLi9zdHJ1dF9zdHlsZSc7XG5pbXBvcnQgeyBUZXh0U3BhbiB9IGZyb20gJy4vdGV4dF9zcGFuJztcbmltcG9ydCAqIGFzIHRleHRTcGFuIGZyb20gJy4vdGV4dF9zcGFuJztcblxuZXhwb3J0IGZ1bmN0aW9uIHdpZGdldChjb250ZXh0LCBsYXllcikge1xuICAgIHZhciBib2R5O1xuXG4gICAgaWYgKGxheWVyLnRleHRTdHlsZXMubGVuZ3RoID09IDEpIHtcbiAgICAgICAgLy8vIFRleHQgV2lkZ2V0XG4gICAgICAgIGJvZHkgPSB0ZXh0VG9EYXJ0KGNvbnRleHQsIG5ldyBUZXh0U3BhbihsYXllci5jb250ZW50LCBcbiAgICAgICAgICAgIG5ldyBUZXh0U3R5bGUoXG4gICAgICAgICAgICAgICAgbGF5ZXIudGV4dFN0eWxlc1swXS50ZXh0U3R5bGUubmFtZSxcbiAgICAgICAgICAgICAgICBsYXllci50ZXh0U3R5bGVzWzBdLnRleHRTdHlsZS5mb250RmFtaWx5LFxuICAgICAgICAgICAgICAgIGxheWVyLnRleHRTdHlsZXNbMF0udGV4dFN0eWxlLmNvbG9yLFxuICAgICAgICAgICAgICAgIGxheWVyLnRleHRTdHlsZXNbMF0udGV4dFN0eWxlLmZvbnRTaXplLFxuICAgICAgICAgICAgICAgIGxheWVyLnRleHRTdHlsZXNbMF0udGV4dFN0eWxlLmZvbnRXZWlnaHQsXG4gICAgICAgICAgICAgICAgbGF5ZXIudGV4dFN0eWxlc1swXS50ZXh0U3R5bGUuZm9udFN0eWxlLFxuICAgICAgICAgICAgICAgIGxheWVyLnRleHRTdHlsZXNbMF0udGV4dFN0eWxlLmxldHRlclNwYWNpbmcsXG4gICAgICAgICAgICAgICAgbGF5ZXIudGV4dFN0eWxlc1swXS50ZXh0U3R5bGUubGluZUhlaWdodCxcbiAgICAgICAgICAgICAgICBib3hTaGFkb3dzLnBhcnNlKGNvbnRleHQsIGxheWVyLnNoYWRvd3MpXG4gICAgICAgICAgICAgICApXG4gICAgICAgICAgIClcbiAgICAgICApXG4gICAgfSBlbHNlIHtcbiAgICAgICAgLy8vIFJpY2hUZXh0IFdpZGdldFxuICAgICAgICB2YXIgdGV4dFNwYW5zID0gW107XG4gICAgICAgIGxheWVyLnRleHRTdHlsZXMubWFwKFxuICAgICAgICAgICAgdGV4dFNwYW4gPT4ge1xuICAgICAgICAgICAgICAgIHRleHRTcGFucy5wdXNoKFxuICAgICAgICAgICAgICAgICAgICBuZXcgVGV4dFNwYW4oXG4gICAgICAgICAgICAgICAgICAgICAgICBsYXllci5jb250ZW50LnN1YnN0cmluZyh0ZXh0U3Bhbi5yYW5nZS5zdGFydCwgdGV4dFNwYW4ucmFuZ2UuZW5kKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG5ldyBUZXh0U3R5bGUoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dFNwYW4udGV4dFN0eWxlLm5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dFNwYW4udGV4dFN0eWxlLmZvbnRGYW1pbHksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dFNwYW4udGV4dFN0eWxlLmNvbG9yLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHRTcGFuLnRleHRTdHlsZS5mb250U2l6ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0U3Bhbi50ZXh0U3R5bGUuZm9udFdlaWdodCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0U3Bhbi50ZXh0U3R5bGUuZm9udFN0eWxlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHRTcGFuLnRleHRTdHlsZS5sZXR0ZXJTcGFjaW5nLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHRTcGFuLnRleHRTdHlsZS5saW5lSGVpZ2h0ICxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3hTaGFkb3dzLnBhcnNlKGNvbnRleHQsIGxheWVyLnNoYWRvd3MpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICAgIGJvZHkgPSByaWNoVGV4dFRvRGFydChjb250ZXh0LCB0ZXh0U3BhbnMpO1xuICAgIH1cblxuICAgIHJldHVybiBib2R5O1xufVxuXG5mdW5jdGlvbiB0ZXh0VG9EYXJ0KGNvbnRleHQsIHRleHRTZWxlY3RlZCkge1xuICAgIHZhciBzdHJ1dFN0eWxlRWxlbWVudCA9IFwiXCI7XG4gICAgY29uc3Qgc2tpcFN0cnV0U3R5bGVTa2lwcGVkID0gb3B0aW9ucy5Ta2lwU3RydXRTdHlsZVNraXBwZWQoY29udGV4dCk7XG4gICAgaWYgKCFza2lwU3RydXRTdHlsZVNraXBwZWQpIHtcbiAgICAgICAgc3RydXRTdHlsZUVsZW1lbnQgPSBgXFxuXFx0c3RydXRTdHlsZTogJHtzdHJ1dFN0eWxlLnRvRGFydChjb250ZXh0LCB0ZXh0U2VsZWN0ZWQudGV4dFN0eWxlLCAyKX0sYDtcbiAgICB9ICAgXG5cbiAgICByZXR1cm4gYFRleHQoJyR7dGV4dFNlbGVjdGVkLnRleHR9JyxcblxcdHN0eWxlOiAke3RleHRTdHlsZS50b0RhcnQoY29udGV4dCwgdGV4dFNlbGVjdGVkLnRleHRTdHlsZSwgMil9LCR7c3RydXRTdHlsZUVsZW1lbnR9XG4pLGA7XG59XG5cbmZ1bmN0aW9uIHJpY2hUZXh0VG9EYXJ0KGNvbnRleHQsIHRleHRTcGFucykge1xuICAgIHZhciBzdHJ1dFN0eWxlRWxlbWVudCA9IFwiXCI7XG4gICAgY29uc3Qgc2tpcFN0cnV0U3R5bGVTa2lwcGVkID0gb3B0aW9ucy5Ta2lwU3RydXRTdHlsZVNraXBwZWQoY29udGV4dCk7XG4gICAgaWYgKCFza2lwU3RydXRTdHlsZVNraXBwZWQpIHtcbiAgICAgICAgdmFyIHRzO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRleHRTcGFucy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgY29uc3Qgc3R5bGUgPSB0ZXh0U3BhbnNbaV0udGV4dFN0eWxlO1xuICAgICAgICAgICAgaWYgKHRzID09IG51bGwpIHtcbiAgICAgICAgICAgICAgICB0cyA9IHN0eWxlO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBpZiAoc3R5bGUuZm9udFNpemUgPT0gdHMuZm9udFNpemUpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHN0eWxlLmZvbnRXZWlnaHQgPiB0cy5mb250V2VpZ2h0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0cyA9IHN0eWxlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChzdHlsZS5mb250U2l6ZSA+IHRzLmZvbnRTaXplKSB7XG4gICAgICAgICAgICAgICAgICAgIHRzID0gc3R5bGU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHN0cnV0U3R5bGVFbGVtZW50ID0gYFxcblxcdHN0cnV0U3R5bGU6ICR7c3RydXRTdHlsZS50b0RhcnQoY29udGV4dCwgdHMsIDIpfSxgO1xuICAgIH1cblxuICAgIHJldHVybiBgUmljaFRleHQoJHtzdHJ1dFN0eWxlRWxlbWVudH1cblxcdHRleHQ6IFRleHRTcGFuKFxuXFx0XFx0Y2hpbGRyZW46IFske3RleHRTcGFucy5tYXAoIHRzID0+IHsgcmV0dXJuIFwiXFxuXFx0XFx0XFx0XCIgKyB0ZXh0U3Bhbi50b0RhcnQoY29udGV4dCwgdHMsIDQpfSl9LFxuXFx0XFx0XSxcblxcdCksXG4pLGA7XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvdGV4dC5qcyIsIi8vIHplcGxpbi1mbHV0dGVyLWdlblxuLy8gQ29weXJpZ2h0IChjKSAyMDE5LXByZXNlbnQgTkFWRVIgQ29ycC5cbi8vIE1JVCBsaWNlbnNlXG5cbmltcG9ydCAqIGFzIG9wdGlvbnMgZnJvbSAnLi9vcHRpb25zJ1xuaW1wb3J0ICogYXMgdXRpbCBmcm9tICcuL3V0aWwnO1xuXG5leHBvcnQgZnVuY3Rpb24gdG9EYXJ0KGNvbnRleHQsIHRleHRTdHlsZSwgZGVwdGggPSAxKSB7XG4gICAgY29uc3QgZGVwdGhTdHIgPSB1dGlsLmRlcHRoVG9TdHJpbmcoZGVwdGgpO1xuICAgIGNvbnN0IGVuZERlcHRoU3RyID0gdXRpbC5kZXB0aFRvU3RyaW5nKGRlcHRoIC0gMSk7XG5cbiAgICB2YXIgZm9udFNpemVFbGVtZW50ID0gXCJcIjtcbiAgICB2YXIgbGluZUhlaWdodEVsZW1lbnQgPSBcIlwiO1xuICAgIHZhciBmb250V2VpZ2h0RWxlbWVudCA9IFwiXCI7XG4gICAgdmFyIGZvbnRTdHlsZUVsZW1lbnQgPSBcIlwiO1xuXG4gICAgY29uc3Qgc2tpcERlZmF1bHRWYWx1ZSA9IG9wdGlvbnMuc2tpcERlZmF1bHRWYWx1ZShjb250ZXh0KTtcblxuICAgIGlmICh0ZXh0U3R5bGUuZm9udFNpemUgIT0gbnVsbCkge1xuICAgICAgICBpZiAoIShza2lwRGVmYXVsdFZhbHVlICYmIHRleHRTdHlsZS5mb250U2l6ZSA9PSAxNC4wKSkge1xuICAgICAgICAgICAgZm9udFNpemVFbGVtZW50ID0gYFxcbiR7ZGVwdGhTdHJ9Zm9udFNpemU6ICR7dGV4dFN0eWxlLmZvbnRTaXplfSxgO1xuICAgICAgICB9IFxuICAgIH1cblxuICAgIGlmICh0ZXh0U3R5bGUuaGVpZ2h0ICE9IG51bGwpIHtcbiAgICAgICAgaWYgKCEoc2tpcERlZmF1bHRWYWx1ZSAmJiB0ZXh0U3R5bGUuaGVpZ2h0ID09IDEuMCkpIHtcbiAgICAgICAgICAgIGlmICghb3B0aW9ucy5za2lwTGluZUhlaWdodChjb250ZXh0KSkge1xuICAgICAgICAgICAgICAgIGxpbmVIZWlnaHRFbGVtZW50ID0gYFxcbiR7ZGVwdGhTdHJ9aGVpZ2h0OiAke3RleHRTdHlsZS5oZWlnaHR9LGA7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gXG4gICAgfVxuXG4gICAgaWYgKHRleHRTdHlsZS5mb250V2VpZ2h0ICE9IG51bGwpIHtcbiAgICAgICAgaWYgKCEoc2tpcERlZmF1bHRWYWx1ZSAmJiB0ZXh0U3R5bGUuZm9udFdlaWdodCA9PSA0MDApKSB7XG4gICAgICAgICAgICBmb250V2VpZ2h0RWxlbWVudCA9IGBcXG4ke2RlcHRoU3RyfWZvbnRXZWlnaHQ6IEZvbnRXZWlnaHQudyR7dGV4dFN0eWxlLmZvbnRXZWlnaHR9LGA7XG4gICAgICAgIH0gXG4gICAgfSBcblxuICAgIGlmICh0ZXh0U3R5bGUuZm9udFN0eWxlICE9IG51bGwpIHtcbiAgICAgICAgaWYgKCEoc2tpcERlZmF1bHRWYWx1ZSAmJiB0ZXh0U3R5bGUuZm9udFN0eWxlID09IFwibm9ybWFsXCIpKSB7XG4gICAgICAgICAgICBmb250U3R5bGVFbGVtZW50ID0gYFxcbiR7ZGVwdGhTdHJ9Zm9udFN0eWxlOiBGb250U3R5bGUuJHt0ZXh0U3R5bGUuZm9udFN0eWxlfSxgO1xuICAgICAgICB9IFxuICAgIH0gXG5cbiAgICBjb25zdCBmb3JjZVN0cnV0SGVpZ2h0RWxlbWVudCA9IGBcXG4ke2RlcHRoU3RyfWZvcmNlU3RydXRIZWlnaHQ6IHRydWUsYDtcblxuICAgIHJldHVybiBgU3RydXRTdHlsZSgke2ZvbnRTaXplRWxlbWVudH0ke2xpbmVIZWlnaHRFbGVtZW50fSR7Zm9udFdlaWdodEVsZW1lbnR9JHtmb250U3R5bGVFbGVtZW50fSR7Zm9yY2VTdHJ1dEhlaWdodEVsZW1lbnR9XG4ke2VuZERlcHRoU3RyfSlgO1xufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3N0cnV0X3N0eWxlLmpzIiwiLy8gemVwbGluLWZsdXR0ZXItZ2VuXG4vLyBDb3B5cmlnaHQgKGMpIDIwMTktcHJlc2VudCBOQVZFUiBDb3JwLlxuLy8gTUlUIGxpY2Vuc2VcblxuaW1wb3J0ICogYXMgdXRpbCBmcm9tICcuL3V0aWwnO1xuaW1wb3J0ICogYXMgdGV4dFN0eWxlIGZyb20gJy4vdGV4dF9zdHlsZSc7XG5cbmV4cG9ydCBjbGFzcyBUZXh0U3BhbiB7XG4gICAgY29uc3RydWN0b3IodGV4dCwgdGV4dFN0eWxlKSB7XG4gICAgICAgIHRoaXMudGV4dCA9IHRleHQ7XG4gICAgICAgIHRoaXMudGV4dFN0eWxlID0gdGV4dFN0eWxlO1xuICAgIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRvRGFydChjb250ZXh0LCB0ZXh0U3BhbiwgZGVwdGggPSAxKSB7XG4gICAgY29uc3QgZGVwdGhTdHIgPSB1dGlsLmRlcHRoVG9TdHJpbmcoZGVwdGgpO1xuICAgIGNvbnN0IGVuZERlcHRoU3RyID0gdXRpbC5kZXB0aFRvU3RyaW5nKGRlcHRoIC0gMSk7XG5cbiAgICByZXR1cm4gYFRleHRTcGFuKFxuJHtkZXB0aFN0cn10ZXh0OiAnJHt0ZXh0U3Bhbi50ZXh0fScsXG4ke2RlcHRoU3RyfXN0eWxlOiAke3RleHRTdHlsZS50b0RhcnQoY29udGV4dCwgdGV4dFNwYW4udGV4dFN0eWxlLCA0ICsgMSl9LFxuJHtlbmREZXB0aFN0cn0pYDtcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvdGV4dF9zcGFuLmpzIiwiLy8gemVwbGluLWZsdXR0ZXItZ2VuXG4vLyBDb3B5cmlnaHQgKGMpIDIwMTktcHJlc2VudCBOQVZFUiBDb3JwLlxuLy8gTUlUIGxpY2Vuc2VcblxuaW1wb3J0ICogYXMgZGVjb3JhdGlvbiBmcm9tICcuL2JveF9kZWNvcmF0aW9uJztcbmltcG9ydCAqIGFzIHV0aWwgZnJvbSAnLi91dGlsJztcbmltcG9ydCAqIGFzIG9wdGlvbnMgZnJvbSAnLi9vcHRpb25zJztcblxuZXhwb3J0IGZ1bmN0aW9uIHdpZGdldChjb250ZXh0LCBsYXllcikge1xuICAgIGNvbnN0IGNvbnRhaW5lciA9IHBhcnNlKGNvbnRleHQsIGxheWVyKTtcbiAgICByZXR1cm4gdG9EYXJ0KGNvbnRleHQsIGNvbnRhaW5lcik7XG59XG5cbmV4cG9ydCBjbGFzcyBDb250YWluZXIge1xuICAgIGNvbnN0cnVjdG9yKHgsIHksIHdpZHRoLCBoZWlnaHQsIGRlY29yYXRpb24pIHtcbiAgICAgICAgdGhpcy54ID0geDtcbiAgICAgICAgdGhpcy55ID0geTtcbiAgICAgICAgdGhpcy53aWR0aCA9IHdpZHRoO1xuICAgICAgICB0aGlzLmhlaWdodCA9IGhlaWdodDtcbiAgICAgICAgdGhpcy5kZWNvcmF0aW9uID0gZGVjb3JhdGlvbjtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIHBhcnNlKGNvbnRleHQsIGxheWVyKSB7XG4gICAgdmFyIGNvbnRhaW5lciA9IG5ldyBDb250YWluZXIobGF5ZXIucmVjdC54LCBsYXllci5yZWN0LnksIGxheWVyLnJlY3Qud2lkdGgsIGxheWVyLnJlY3QuaGVpZ2h0KTtcbiAgICBjb250YWluZXIuZGVjb3JhdGlvbiA9IGRlY29yYXRpb24ucGFyc2UoY29udGV4dCwgbGF5ZXIpO1xuICAgIHJldHVybiBjb250YWluZXI7XG59XG5cbmZ1bmN0aW9uIHRvRGFydChjb250ZXh0LCBjb250YWluZXIpIHtcbiAgICB2YXIgd2lkdGhFbGVtZW50ID0gXCJcIjtcbiAgICBpZiAoIW9wdGlvbnMuc2tpcFdpZHRoSW5Db250YWluZXIoY29udGV4dCkpIHtcbiAgICAgICAgd2lkdGhFbGVtZW50ID0gYFxcblxcdHdpZHRoOiAke2NvbnRhaW5lci53aWR0aH0sYDtcbiAgICB9XG5cbiAgICB2YXIgaGVpZ2h0RWxlbWVudCA9IFwiXCI7XG4gICAgaWYgKCFvcHRpb25zLnNraXBIZWlnaHRJbkNvbnRhaW5lcihjb250ZXh0KSkge1xuICAgICAgICBoZWlnaHRFbGVtZW50ID0gYFxcblxcdGhlaWdodDogJHtjb250YWluZXIuaGVpZ2h0fSxgO1xuICAgIH1cblxuICAgIHZhciBtYXJnaW5FbGVtZW50ID0gXCJcIjtcbiAgICBpZiAoIW9wdGlvbnMuc2tpcE1hcmdpbkxlZnRBbmRSaWdodChjb250ZXh0KSkge1xuICAgICAgICBpZiAoY29udGFpbmVyLnggIT0gMCkge1xuICAgICAgICAgICAgbWFyZ2luRWxlbWVudCA9IGBcXG5cXHRtYXJnaW46IEVkZ2VJbnNldHMub25seShcXG5cXHRcXHRsZWZ0OiAke2NvbnRhaW5lci54fSxcXG5cXHRcXHRyaWdodDogJHtjb250YWluZXIueH0sXFxuXFx0KSxgO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgdmFyIGRlY29yYXRpb25FbGVtZW50ID0gXCJcIjtcbiAgICBjb25zdCBkZWNvcmF0aW9uRGFydCA9IGRlY29yYXRpb24udG9EYXJ0KGNvbnRleHQsIGNvbnRhaW5lci5kZWNvcmF0aW9uLCAyKTtcbiAgICBpZiAoZGVjb3JhdGlvbkRhcnQgIT0gbnVsbCkge1xuICAgICAgICBkZWNvcmF0aW9uRWxlbWVudCA9IGBcXG5cXHRkZWNvcmF0aW9uOiAke2RlY29yYXRpb25EYXJ0fSxgO1xuICAgIH1cblxuICAgIHJldHVybiBgQ29udGFpbmVyKCR7d2lkdGhFbGVtZW50fSR7aGVpZ2h0RWxlbWVudH0ke21hcmdpbkVsZW1lbnR9JHtkZWNvcmF0aW9uRWxlbWVudH1cXG4pLGA7XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29udGFpbmVyLmpzIiwiLy8gemVwbGluLWZsdXR0ZXItZ2VuXG4vLyBDb3B5cmlnaHQgKGMpIDIwMTktcHJlc2VudCBOQVZFUiBDb3JwLlxuLy8gTUlUIGxpY2Vuc2VcblxuaW1wb3J0ICogYXMgY29sb3IgZnJvbSBcIi4vY29sb3JcIjtcbmltcG9ydCAqIGFzIHV0aWwgZnJvbSAnLi91dGlsJztcbmltcG9ydCAqIGFzIGJveFNoYWRvd3MgZnJvbSAnLi9ib3hfc2hhZG93cyc7XG5pbXBvcnQgKiBhcyBib3JkZXIgZnJvbSAnLi9ib3JkZXInO1xuaW1wb3J0ICogYXMgZ3JhZGllbnQgZnJvbSAnLi9ncmFkaWVudCc7XG5cbmV4cG9ydCBjbGFzcyBCb3hEZWNvcmF0aW9uIHtcbiAgICBjb25zdHJ1Y3Rvcihjb2xvciwgYm9yZGVyLCBib3JkZXJSYWRpdXMsIHNoYWRvd3MsIGdyYWRpZW50LCBvcGFjaXR5KSB7XG4gICAgICAgIHRoaXMuY29sb3IgPSBjb2xvcjtcbiAgICAgICAgdGhpcy5ib3JkZXIgPSBib3JkZXI7XG4gICAgICAgIHRoaXMuYm9yZGVyUmFkaXVzID0gYm9yZGVyUmFkaXVzO1xuICAgICAgICB0aGlzLnNoYWRvd3MgPSBzaGFkb3dzO1xuICAgICAgICB0aGlzLmdyYWRpZW50ID0gZ3JhZGllbnQ7XG4gICAgICAgIHRoaXMub3BhY2l0eSA9IG9wYWNpdHk7XG4gICAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gcGFyc2UoY29udGV4dCwgbGF5ZXIpIHtcbiAgICB2YXIgZGVjb3JhdGlvbiA9IG5ldyBCb3hEZWNvcmF0aW9uKCk7XG5cbiAgICBpZiAobGF5ZXIuZmlsbHMubGVuZ3RoID4gMCkge1xuICAgICAgICBkZWNvcmF0aW9uLmdyYWRpZW50ID0gZ3JhZGllbnQucGFyc2UoY29udGV4dCwgbGF5ZXIpO1xuICAgICAgICBpZiAoZGVjb3JhdGlvbi5ncmFkaWVudCA9PSBudWxsKSB7XG4gICAgICAgICAgICBkZWNvcmF0aW9uLmNvbG9yID0gbGF5ZXIuZmlsbHNbbGF5ZXIuZmlsbHMubGVuZ3RoIC0gMV0uY29sb3I7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBkZWNvcmF0aW9uLmJvcmRlciA9IGJvcmRlci5wYXJzZShjb250ZXh0LCBsYXllcik7XG5cbiAgICBpZiAobGF5ZXIuYm9yZGVyUmFkaXVzICE9IDApIHtcbiAgICAgICAgZGVjb3JhdGlvbi5ib3JkZXJSYWRpdXMgPSBsYXllci5ib3JkZXJSYWRpdXM7XG4gICAgfVxuXG4gICAgZGVjb3JhdGlvbi5zaGFkb3dzID0gYm94U2hhZG93cy5wYXJzZShjb250ZXh0LCBsYXllci5zaGFkb3dzKTtcbiAgICBkZWNvcmF0aW9uLm9wYWNpdHkgPSBsYXllci5vcGFjaXR5O1xuICAgIHJldHVybiBkZWNvcmF0aW9uO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdG9EYXJ0KGNvbnRleHQsIGRlY29yYXRpb24sIGRlcHRoID0gMSkge1xuICAgIGNvbnN0IGRlcHRoU3RyID0gdXRpbC5kZXB0aFRvU3RyaW5nKGRlcHRoKTtcbiAgICBjb25zdCBlbmREZXB0aFN0ciA9IHV0aWwuZGVwdGhUb1N0cmluZyhkZXB0aCAtIDEpO1xuXG4gICAgdmFyIGNvbG9yRWxlbWVudCA9IFwiXCI7XG4gICAgdmFyIGJvcmRlckVsZW1lbnQgPSBcIlwiO1xuICAgIHZhciBib3JkZXJSYWRpdXNFbGVtZW50ID0gXCJcIjtcbiAgICB2YXIgZ3JhZGllbnRFbGVtZW50ID0gXCJcIjtcbiAgICB2YXIgc2hhZG93c0VsZW1lbnRzID0gXCJcIjtcblxuICAgIGlmIChkZWNvcmF0aW9uLmNvbG9yICE9IG51bGwgJiYgZGVjb3JhdGlvbi5jb2xvciAhPSB1bmRlZmluZWQpIHtcbiAgICAgICAgY29uc3QgZGFydEZyb21Db2xvciA9IGNvbG9yLnRvRGFydChjb250ZXh0LCBkZWNvcmF0aW9uLmNvbG9yLCBkZWNvcmF0aW9uLm9wYWNpdHkpO1xuICAgICAgICBpZiAoZGFydEZyb21Db2xvciAhPSBudWxsJiYgZGFydEZyb21Db2xvciAhPSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIGNvbG9yRWxlbWVudCA9IGBcXG4ke2RlcHRoU3RyfWNvbG9yOiAke2RhcnRGcm9tQ29sb3J9LGA7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoZGVjb3JhdGlvbi5ib3JkZXIgIT0gbnVsbCAmJiBkZWNvcmF0aW9uLmJvcmRlciAhPSB1bmRlZmluZWQpIHtcbiAgICAgICAgY29uc3QgZGFydEZyb21Cb3JkZXIgPSBib3JkZXIudG9EYXJ0KGNvbnRleHQsIGRlY29yYXRpb24uYm9yZGVyLCBkZXB0aCArIDEpO1xuICAgICAgICBpZiAoZGFydEZyb21Cb3JkZXIgIT0gbnVsbCYmIGRhcnRGcm9tQm9yZGVyICE9IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgY29sb3JFbGVtZW50ID0gYFxcbiR7ZGVwdGhTdHJ9Ym9yZGVyOiAke2RhcnRGcm9tQm9yZGVyfWA7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoZGVjb3JhdGlvbi5ib3JkZXJSYWRpdXMgIT0gbnVsbCYmIGRlY29yYXRpb24uYm9yZGVyUmFkaXVzICE9IHVuZGVmaW5lZCkge1xuICAgICAgICBib3JkZXJSYWRpdXNFbGVtZW50ID0gYFxcbiR7ZGVwdGhTdHJ9Ym9yZGVyUmFkaXVzOiBCb3JkZXJSYWRpdXMuY2lyY3VsYXIoJHtkZWNvcmF0aW9uLmJvcmRlclJhZGl1c30pLGA7XG4gICAgfVxuXG4gICAgaWYgKGRlY29yYXRpb24uZ3JhZGllbnQgIT0gbnVsbCYmIGRlY29yYXRpb24uZ3JhZGllbnQgIT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGNvbnN0IGRhcnRGcm9tR3JhZGllbnQgPSBncmFkaWVudC50b0RhcnQoY29udGV4dCwgZGVjb3JhdGlvbi5ncmFkaWVudCwgZGVwdGggKyAxKTtcbiAgICAgICAgaWYgKGRhcnRGcm9tR3JhZGllbnQgIT0gbnVsbCYmIGRhcnRGcm9tR3JhZGllbnQgIT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBncmFkaWVudEVsZW1lbnQgPSBgXFxuJHtkZXB0aFN0cn1ncmFkaWVudDogJHtncmFkaWVudC50b0RhcnQoY29udGV4dCwgZGVjb3JhdGlvbi5ncmFkaWVudCwgZGVwdGggKyAxKX1gO1xuICAgICAgICB9XG4gICAgfVxuICAgIFxuICAgIGlmIChkZWNvcmF0aW9uLnNoYWRvd3MgIT0gbnVsbCAmJiBkZWNvcmF0aW9uLnNoYWRvd3MgIT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGNvbnN0IGRhcnRGcm9tU2hhZG93cyA9IGJveFNoYWRvd3MudG9EYXJ0KGNvbnRleHQsIGRlY29yYXRpb24uc2hhZG93cywgZGVwdGggKyAxKTtcbiAgICAgICAgaWYgKGRhcnRGcm9tU2hhZG93cyAhPSBudWxsJiYgZGFydEZyb21TaGFkb3dzICE9IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgc2hhZG93c0VsZW1lbnRzID0gYFxcbiR7ZGVwdGhTdHJ9Ym94U2hhZG93OiAke2RhcnRGcm9tU2hhZG93c31gO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgaWYgKGNvbG9yRWxlbWVudCA9PSBcIlwiICYmIGJvcmRlckVsZW1lbnQgPT0gXCJcIiAmJiBib3JkZXJSYWRpdXNFbGVtZW50ID09IFwiXCIgJiYgZ3JhZGllbnRFbGVtZW50ID09IFwiXCIgJiYgc2hhZG93c0VsZW1lbnRzID09IFwiXCIpIHtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGBCb3hEZWNvcmF0aW9uKCR7Y29sb3JFbGVtZW50fSR7Ym9yZGVyRWxlbWVudH0ke2JvcmRlclJhZGl1c0VsZW1lbnR9JHtncmFkaWVudEVsZW1lbnR9JHtzaGFkb3dzRWxlbWVudHN9XFxuJHtlbmREZXB0aFN0cn0pYDtcbiAgICB9XG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2JveF9kZWNvcmF0aW9uLmpzIiwiLy8gemVwbGluLWZsdXR0ZXItZ2VuXG4vLyBDb3B5cmlnaHQgKGMpIDIwMTktcHJlc2VudCBOQVZFUiBDb3JwLlxuLy8gTUlUIGxpY2Vuc2VcblxuaW1wb3J0ICogYXMgY29sb3IgZnJvbSBcIi4vY29sb3JcIjtcbmltcG9ydCAqIGFzIHV0aWwgZnJvbSAnLi91dGlsJztcblxuZXhwb3J0IGNsYXNzIEJvcmRlciB7XG4gICAgY29uc3RydWN0b3IoY29sb3IsIHdpZHRoKSB7XG4gICAgICAgIHRoaXMuY29sb3IgPSBjb2xvcjtcbiAgICAgICAgdGhpcy53aWR0aCA9IHdpZHRoO1xuICAgIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlKGNvbnRleHQsIGxheWVyKSB7XG4gICAgaWYgKGxheWVyLmJvcmRlcnMubGVuZ3RoID4gMCkge1xuICAgICAgICByZXR1cm4gbmV3IEJvcmRlcihcbiAgICAgICAgICAgIGxheWVyLmJvcmRlcnNbbGF5ZXIuYm9yZGVycy5sZW5ndGggLTFdLmZpbGwuY29sb3IsXG4gICAgICAgICAgICBsYXllci5ib3JkZXJzW2xheWVyLmJvcmRlcnMubGVuZ3RoIC0xXS50aGlja25lc3MsXG4gICAgICAgICk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfSBcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRvRGFydChjb250ZXh0LCBib3JkZXIsIGRlcHRoID0gMSkge1xuICAgIGNvbnN0IGRlcHRoU3RyID0gdXRpbC5kZXB0aFRvU3RyaW5nKGRlcHRoKTtcbiAgICBjb25zdCBlbmREZXB0aFN0ciA9IHV0aWwuZGVwdGhUb1N0cmluZyhkZXB0aCAtIDEpO1xuXG4gICAgdmFyIGNvbG9yRWxlbWVudCA9IFwiXCI7XG4gICAgaWYgKGJvcmRlci5jb2xvciAhPSBudWxsICYmIGJvcmRlci5jb2xvciAhPSB1bmRlZmluZWQpIHtcbiAgICAgICAgY29sb3JFbGVtZW50ID0gYFxcbiR7ZGVwdGhTdHJ9Y29sb3I6ICR7Y29sb3IudG9EYXJ0KGNvbnRleHQsIGJvcmRlci5jb2xvciwgMSl9LGA7XG4gICAgfVxuXG4gICAgdmFyIHdpZHRoRWxlbWVudCA9IFwiXCI7XG4gICAgaWYgKGJvcmRlci53aWR0aCAhPSBudWxsICYmIGJvcmRlci53aWR0aCAhPSB1bmRlZmluZWQpIHtcbiAgICAgICAgd2lkdGhFbGVtZW50ID0gYFxcbiR7ZGVwdGhTdHJ9d2lkdGg6ICR7Ym9yZGVyLndpZHRofSxgO1xuICAgIH1cblxuICAgIHJldHVybiBgQm9yZGVyLmFsbCgke2NvbG9yRWxlbWVudH0ke3dpZHRoRWxlbWVudH1cbiR7ZW5kRGVwdGhTdHJ9KSxgO1xufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9ib3JkZXIuanMiLCIvLyB6ZXBsaW4tZmx1dHRlci1nZW5cbi8vIENvcHlyaWdodCAoYykgMjAxOS1wcmVzZW50IE5BVkVSIENvcnAuXG4vLyBNSVQgbGljZW5zZVxuXG5pbXBvcnQgKiBhcyBjb2xvciBmcm9tIFwiLi9jb2xvclwiO1xuaW1wb3J0ICogYXMgdXRpbCBmcm9tICcuL3V0aWwnO1xuXG5leHBvcnQgY2xhc3MgR3JhZGllbnQge1xuICAgIGNvbnN0cnVjdG9yKHR5cGUsIGNvbG9ycywgc3RvcHMsIGFuZ2xlKSB7XG4gICAgICAgIHRoaXMudHlwZSA9IHR5cGU7XG4gICAgICAgIHRoaXMuY29sb3JzID0gY29sb3JzO1xuICAgICAgICB0aGlzLnN0b3BzID0gc3RvcHM7XG4gICAgICAgIHRoaXMuYW5nbGUgPSBhbmdsZTtcbiAgICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwYXJzZShjb250ZXh0LCBsYXllcikge1xuICAgIGlmIChoYXNHcmFkaWVudChjb250ZXh0LCBsYXllcikpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBHcmFkaWVudChcbiAgICAgICAgICAgIGxheWVyLmZpbGxzW2xheWVyLmZpbGxzLmxlbmd0aCAtMV0uZ3JhZGllbnQudHlwZSxcbiAgICAgICAgICAgIGxheWVyLmZpbGxzW2xheWVyLmZpbGxzLmxlbmd0aCAtMV0uZ3JhZGllbnQuY29sb3JTdG9wcyxcbiAgICAgICAgICAgIGxheWVyLmZpbGxzW2xheWVyLmZpbGxzLmxlbmd0aCAtMV0uZ3JhZGllbnQuY29sb3JTdG9wcyxcbiAgICAgICAgICAgIGxheWVyLmZpbGxzW2xheWVyLmZpbGxzLmxlbmd0aCAtMV0uZ3JhZGllbnQuYW5nbGUsXG4gICAgICAgICk7XG4gICAgfVxuICAgIHJldHVybiBudWxsO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdG9EYXJ0KGNvbnRleHQsIGdyYWRpZW50LCBkZXB0aCA9IDEpIHtcbiAgICBjb25zdCBkZXB0aFN0ciA9IHV0aWwuZGVwdGhUb1N0cmluZyhkZXB0aCk7XG4gICAgY29uc3QgZW5kRGVwdGhTdHIgPSB1dGlsLmRlcHRoVG9TdHJpbmcoZGVwdGggLSAxKTtcblxuICAgIC8vLyBUT0RPOiBzdXBwb3J0IEdyYWRpZW50IHVudGlsIG5leHQgdmVyc2lvbi5cbiAgICAvKlxuICAgIGlmIChncmFkaWVudC50eXBlID09PSAnbGluZWFyJyl7XG4gICAgICAgIHJldHVybiBgTGluZWFyR3JhZGllbnQoXFxuJHtkZXB0aFN0cn1jb2xvcnM6IFtcXG4ke2RlcHRoU3RyfSR7Z3JhZGllbnQuY29sb3JzLm1hcCggdmFsdWUgPT4geyByZXR1cm4gY29sb3IudG9EYXJ0KGNvbnRleHQsIHZhbHVlLmNvbG9yLCAxKSB9ICl9IF0sXFxuJHtkZXB0aFN0cn1zdG9wczogWyAke2dyYWRpZW50LnN0b3BzLmpvaW4oXCIsXFxuXFx0XFx0XFx0XFx0XCIpfSBcXG4ke2RlcHRoU3RyfV0sXFxuJHtlbmREZXB0aFN0cn0pLGA7XG4gICAgfSBlbHNlIGlmIChncmFkaWVudC50eXBlID09PSAncmFkaWFsJyl7XG4gICAgICAgIHJldHVybiBgUmFkaWFsR3JhZGllbnQoXFxuJHtkZXB0aFN0cn1jb2xvcnM6IFtcXG4ke2RlcHRoU3RyfSR7Z3JhZGllbnQuY29sb3JzLm1hcCggdmFsdWUgPT4geyByZXR1cm4gY29sb3IudG9EYXJ0KGNvbnRleHQsIHZhbHVlLmNvbG9yLCAxKSB9ICl9IF0sXFxuJHtkZXB0aFN0cn1zdG9wczogWyAke2dyYWRpZW50LnN0b3BzLmpvaW4oXCIsXFxuXFx0XFx0XFx0XFx0XCIpfSBcXG4ke2RlcHRoU3RyfV0sXFxuJHtlbmREZXB0aFN0cn0pLGA7XG4gICAgfVxuICAgIHJldHVybiBgYDtcbiAgICAqL1xuXG4gICAgcmV0dXJuIG51bGw7XG59XG5cbmZ1bmN0aW9uIGhhc0dyYWRpZW50KGNvbnRleHQsIGxheWVyKSB7XG4gICAgcmV0dXJuIGxheWVyLmZpbGxzLnNvbWUoZiA9PiBmLnR5cGUgPT0gXCJncmFkaWVudFwiKTtcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvZ3JhZGllbnQuanMiXSwic291cmNlUm9vdCI6IiJ9