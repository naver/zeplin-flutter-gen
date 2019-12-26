// zeplin-flutter-gen
// Copyright (c) 2019-present NAVER Corp.
// MIT license

import * as options from './options'
import * as util from './util';

export function toDart(context, textStyle, depth = 1) {
    const depthStr = util.depthToString(depth);
    const endDepthStr = util.depthToString(depth - 1);

    var fontSizeElement = "";
    var lineHeightElement = "";
    var fontWeightElement = "";
    var fontStyleElement = "";

    const skipDefaultValue = options.skipDefaultValue(context);

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

    const forceStrutHeightElement = `\n${depthStr}forceStrutHeight: true,`;

    return `StrutStyle(${fontSizeElement}${lineHeightElement}${fontWeightElement}${fontStyleElement}${forceStrutHeightElement}
${endDepthStr})`;
}
