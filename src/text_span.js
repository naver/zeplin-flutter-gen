// zeplin-flutter-gen
// Copyright (c) 2019-present NAVER Corp.
// MIT license

import * as util from './util';
import * as textStyle from './text_style';

export class TextSpan {
    constructor(text, textStyle) {
        this.text = text;
        this.textStyle = textStyle;
    }
}

export function toDart(context, textSpan, depth = 1) {
    const depthStr = util.depthToString(depth);
    const endDepthStr = util.depthToString(depth - 1);

    return `TextSpan(
${depthStr}text: '${textSpan.text}',
${depthStr}style: ${textStyle.toDart(context, textSpan.textStyle, 4 + 1)},
${endDepthStr})`;
}