// zeplin-flutter-gen
// Copyright (c) 2019-present NAVER Corp.
// MIT license

import * as color from "./color";
import * as util from './util';
import * as boxShadows from './box_shadows';
import * as border from './border';
import * as gradient from './gradient';

export class BoxDecoration {
    constructor(color, border, borderRadius, shadows, gradient, opacity) {
        this.color = color;
        this.border = border;
        this.borderRadius = borderRadius;
        this.shadows = shadows;
        this.gradient = gradient;
        this.opacity = opacity;
    }
}

export function parse(context, layer) {
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

export function toDart(context, decoration, depth = 1) {
    const depthStr = util.depthToString(depth);
    const endDepthStr = util.depthToString(depth - 1);

    var colorElement = "";
    var borderElement = "";
    var borderRadiusElement = "";
    var gradientElement = "";
    var shadowsElements = "";

    if (decoration.color != null && decoration.color != undefined) {
        const dartFromColor = color.toDart(context, decoration.color, decoration.opacity);
        if (dartFromColor != null&& dartFromColor != undefined) {
            colorElement = `\n${depthStr}color: ${dartFromColor},`;
        }
    }

    if (decoration.border != null && decoration.border != undefined) {
        const dartFromBorder = border.toDart(context, decoration.border, depth + 1);
        if (dartFromBorder != null&& dartFromBorder != undefined) {
            borderElement = `\n${depthStr}border: ${dartFromBorder}`;
        }
    }

    if (decoration.borderRadius != null&& decoration.borderRadius != undefined) {
        borderRadiusElement = `\n${depthStr}borderRadius: BorderRadius.circular(${decoration.borderRadius}),`;
    }

    if (decoration.gradient != null&& decoration.gradient != undefined) {
        const dartFromGradient = gradient.toDart(context, decoration.gradient, depth + 1);
        if (dartFromGradient != null&& dartFromGradient != undefined) {
            gradientElement = `\n${depthStr}gradient: ${gradient.toDart(context, decoration.gradient, depth + 1)}`;
        }
    }
    
    if (decoration.shadows != null && decoration.shadows != undefined) {
        const dartFromShadows = boxShadows.toDart(context, decoration.shadows, depth + 1);
        if (dartFromShadows != null&& dartFromShadows != undefined) {
            shadowsElements = `\n${depthStr}boxShadow: ${dartFromShadows}`;
        }
    }

    if (colorElement == "" && borderElement == "" && borderRadiusElement == "" && gradientElement == "" && shadowsElements == "") {
        return null;
    } else {
        return `BoxDecoration(${colorElement}${borderElement}${borderRadiusElement}${gradientElement}${shadowsElements}\n${endDepthStr})`;
    }
}