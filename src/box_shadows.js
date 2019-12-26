// zeplin-flutter-gen
// Copyright (c) 2019-present NAVER Corp.
// MIT license

import * as color from "./color";
import * as util from './util';

export class BoxShadow {
    constructor(color, offsetx, offsety, blurRadius, spreadRadius) {
        this.color = color;
        this.offsetx = offsetx;
        this.offsety = offsety;
        this.blurRadius = blurRadius;
        this.spreadRadius = spreadRadius;
    }
}

export function parse(context, shadows){
    if (shadows.length > 0) {
        return shadows.map( shadow => {
            return new BoxShadow(
                shadow.color,
                shadow.offsetX,
                shadow.offsetY,
                shadow.blurRadius,
                shadow.spread
                );
            }
        );
    } else {
        return null
    } 

}

function toDartAShadow(context, shadow, depth = 1) {
    const depthStr = util.depthToString(depth);
    const endDepthStr = util.depthToString(depth - 1);
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

export function toDart(context, shadows, depth = 1) {
    const depthStr = util.depthToString(depth);
    const endDepthStr = util.depthToString(depth - 1);

    return  `[
${shadows.map( shadow => { return depthStr + toDartAShadow(context, shadow, depth + 1)})}
${endDepthStr}],`
}
