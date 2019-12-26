// zeplin-flutter-gen
// Copyright (c) 2019-present NAVER Corp.
// MIT license

import * as color from "./color";
import * as util from './util';

export class Border {
    constructor(color, width) {
        this.color = color;
        this.width = width;
    }
}

export function parse(context, layer) {
    if (layer.borders.length > 0) {
        return new Border(
            layer.borders[layer.borders.length -1].fill.color,
            layer.borders[layer.borders.length -1].thickness,
        );
    } else {
        return null;
    } 
}

export function toDart(context, border, depth = 1) {
    const depthStr = util.depthToString(depth);
    const endDepthStr = util.depthToString(depth - 1);

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