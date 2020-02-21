// zeplin-flutter-gen
// Copyright (c) 2019-present NAVER Corp.
// MIT license

import * as options from './options';
import * as color from "./color";
import * as util from './util';
import * as boxShadows from './box_shadows';

export class TextStyle {
    constructor(name, fontFamily, color, fontSize, fontWeight, fontStyle, letterSpacing, height, shadows) {
        this.name = name;
        this.fontFamily = fontFamily;
        this.color = color;
        this.fontSize = fontSize;
        this.fontWeight = fontWeight;
        this.fontStyle = fontStyle;
        this.letterSpacing = letterSpacing;
        this.height = height;
        this.shadows = shadows;    
    }
}

export function toDart(context, textStyle, depth = 1, useName = true) {
    if (useName) {
        if (options.useTextStylesName) {
            const result = findTextStyleName(context, textStyle);
            const prefix = options.textStylesClassPrefix(context);
    
            if (result != null) {
                return `${prefix}TextStyles.${result}`;
            }
        }
    }
    const depthStr = util.depthToString(depth);
    const endDepthStr = util.depthToString(depth - 1);

    var fontSizeElement = "";
    var fontFamilyElement = "";
    var fontWeightElement = "";
    var fontStyleElement = "";
    var shadowElements = "";
    var letterSpacingElement = "";
    var lineHeightElement = "";

    const skipDefaultValue = options.skipDefaultValue(context);

    if (textStyle.fontSize != null) {
        if (!(skipDefaultValue && textStyle.fontSize == 14.0)) {
            fontSizeElement = `\n${depthStr}fontSize: ${textStyle.fontSize},`;
        } 
    }

    if (textStyle.fontFamily != null) {
        const excludedFonts = options.skipFontFamilies(context);
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
    
    if (textStyle.shadows != null) {
        shadowElements = `\n${depthStr}shadows: ${boxShadows.toDart(context, textStyle.shadows)}`;
    }

    return `TextStyle(
${depthStr}color: ${color.toDart(context, textStyle.color, 1)},${fontSizeElement}${fontFamilyElement}${fontWeightElement}${fontStyleElement}${letterSpacingElement}${lineHeightElement}${shadowElements}
${endDepthStr})`;
}

function findTextStyleName(context, input) {
    const find = context.project.textStyles.find(ts => {
        return input.name == ts.name;
    });

    if (find == undefined || find == null) return null;
    return util.camelize(find.name);
}