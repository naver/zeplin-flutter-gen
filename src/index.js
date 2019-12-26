// zeplin-flutter-gen
// Copyright (c) 2019-present NAVER Corp.
// MIT license

import * as options from './options';
import * as util from './util';
import * as color from "./color";
import * as text from "./text";
import * as container from "./container";
import * as textStyle from './text_style';


function layer(context, selectedLayer) {
    var body = "";
    switch(selectedLayer.type) {
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
    const body = projectColorsToDart(context);
    return {
        code: body,
        language: "dart"
    }
}

function textStyles(context) {
    const body = projectTextStylesToDart(context);
    return {
        code: body,
        language: "dart"
    }
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

function comment(context, text) {

}

function projectColorsToDart(context) {
    const prefix = options.colorsClassPrefix(context);
    var body = `class ${prefix}Colors {\n`;

    var colors = [];
    context.project.colors.map(
        colorMap => {
            colors.push(`\tstatic const Color ${colorMap.name} = ${color.toDart(context, colorMap, 1, false)};`)
        }
    );

    body += colors.join('\n');

    body += "\n}\n";
    return body;
}

function projectTextStylesToDart(context) {
    const prefix = options.textStylesClassPrefix(context);
    var body = `class ${prefix}TextStyles {\n`;

    var textStyles = [];
    context.project.textStyles.map(
        ts => {
            textStyles.push(`\tstatic const TextStyle ${util.camelize(ts.name)} = ${textStyle.toDart(context, ts, 2, false)};`)
        }
    );

    body += textStyles.join('\n');

    body += "\n}\n";
    return body;
}

export default {
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
