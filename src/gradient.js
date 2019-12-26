// zeplin-flutter-gen
// Copyright (c) 2019-present NAVER Corp.
// MIT license

import * as color from "./color";
import * as util from './util';

export class Gradient {
    constructor(type, colors, stops, angle) {
        this.type = type;
        this.colors = colors;
        this.stops = stops;
        this.angle = angle;
    }
}

export function parse(context, layer) {
    if (hasGradient(context, layer)) {
        return new Gradient(
            layer.fills[layer.fills.length -1].gradient.type,
            layer.fills[layer.fills.length -1].gradient.colorStops,
            layer.fills[layer.fills.length -1].gradient.colorStops,
            layer.fills[layer.fills.length -1].gradient.angle,
        );
    }
    return null;
}

export function toDart(context, gradient, depth = 1) {
    const depthStr = util.depthToString(depth);
    const endDepthStr = util.depthToString(depth - 1);

    /// TODO: support Gradient

    return null;
}

function hasGradient(context, layer) {
    return layer.fills.some(f => f.type == "gradient");
}