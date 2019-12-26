// zeplin-flutter-gen
// Copyright (c) 2019-present NAVER Corp.
// MIT license

import * as decoration from './box_decoration';
import * as util from './util';
import * as options from './options';

export function widget(context, layer) {
    const container = parse(context, layer);
    return toDart(context, container);
}

export class Container {
    constructor(x, y, width, height, decoration) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.decoration = decoration;
    }
}

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
    const decorationDart = decoration.toDart(context, container.decoration, 2);
    if (decorationDart != null) {
        decorationElement = `\n\tdecoration: ${decorationDart},`;
    }

    return `Container(${widthElement}${heightElement}${marginElement}${decorationElement}\n),`;
}
