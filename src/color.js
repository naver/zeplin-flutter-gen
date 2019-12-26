// zeplin-flutter-gen
// Copyright (c) 2019-present NAVER Corp.
// MIT license

import * as options from './options'
import * as Material from './material'

export function toDart(context, color, opacity, useColorName = true) {
    const prefix = options.colorsClassPrefix(context);
    if (useColorName) {
        if (options.useColorName(context)) {
            const materialColor = findFromMaterialColors(color);
            if (materialColor != null && materialColor != undefined) {
                return `Colors.${materialColor}`;
            }
            
            const projectColor = findFromProjectColors(context, color);
            if (projectColor != null && projectColor != undefined) {
                return `${prefix}Colors.${projectColor}`;
            }
        }
    }

    color = color.toHex();

    const hex = `0x${color.a}${color.r}${color.g}${color.b}`;
    if (opacity < 1) {
        return `Color(${hex}).withOpacity(${opacity})`;
    }

    return `Color(${hex})`;
}

function findFromMaterialColors(inputColor) {
    const color = inputColor.toHex();
    const hex = '0x' + `${color.a}${color.r}${color.g}${color.b}`.toUpperCase();
    return Material.COLORS_MAP.get(hex);
}

function findFromProjectColors(context, inputColor) {
    const find = context.project.colors.find(color => {
        return inputColor.a == color.a && inputColor.r == color.r && inputColor.g == color.g && inputColor.b == color.b;
    });

    if (find == undefined || find == null) return null;
    return find.name;
}
