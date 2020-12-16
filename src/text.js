// zeplin-flutter-gen
// Copyright (c) 2019-present NAVER Corp.
// MIT license

import * as options from './options';
import * as boxShadows from './box_shadows';
import { TextStyle } from './text_style';
import * as textStyle from './text_style';
import * as strutStyle from './strut_style';
import { TextSpan } from './text_span';
import * as textSpan from './text_span';

export function widget(context, layer) {
    var body;

    if (layer.textStyles.length == 1) {
        /// Text Widget
        body = textToDart(context, new TextSpan(layer.content, 
            new TextStyle(
                layer.textStyles[0].textStyle.name,
                layer.textStyles[0].textStyle.fontFamily,
                layer.textStyles[0].textStyle.color,
                layer.textStyles[0].textStyle.fontSize,
                layer.textStyles[0].textStyle.fontWeight,
                layer.textStyles[0].textStyle.fontStyle,
                layer.textStyles[0].textStyle.letterSpacing,
                layer.textStyles[0].textStyle.lineHeight,
                boxShadows.parse(context, layer.shadows)
               )
           )
       )
    } else {
        /// RichText Widget
        var textSpans = [];
        layer.textStyles.map(
            textSpan => {
                textSpans.push(
                    new TextSpan(
                        layer.content.substring(textSpan.range.start, textSpan.range.end),
                        new TextStyle(
                            textSpan.textStyle.name,
                            textSpan.textStyle.fontFamily,
                            textSpan.textStyle.color,
                            textSpan.textStyle.fontSize,
                            textSpan.textStyle.fontWeight,
                            textSpan.textStyle.fontStyle,
                            textSpan.textStyle.letterSpacing,
                            textSpan.textStyle.lineHeight ,
                            boxShadows.parse(context, layer.shadows)
                            )
                        )
                    )
            }
        );
        body = richTextToDart(context, textSpans);
    }

    return body;
}

function textToDart(context, textSelected) {
    var strutStyleElement = "";
    const skipStrutStyleSkipped = options.SkipStrutStyleSkipped(context);
    if (!skipStrutStyleSkipped) {
        strutStyleElement = `\n\tstrutStyle: ${strutStyle.toDart(context, textSelected.textStyle, 2)},`;
    }   
    
    const name = options.textWidgetClassName(context);

    return `${name}('${textSelected.text}',
\tstyle: ${textStyle.toDart(context, textSelected.textStyle, 2)},${strutStyleElement}
),`;
}

function richTextToDart(context, textSpans) {
    var styleElement = "";
    var strutStyleElement = "";

    var largestTextStyle;
    for (var i = 0; i < textSpans.length; i++) {
        const style = textSpans[i].textStyle;
        if (largestTextStyle == null) {
            largestTextStyle = style;
        } else {
            if (style.fontSize == largestTextStyle.fontSize) {
                if (style.fontWeight > largestTextStyle.fontWeight) {
                    largestTextStyle = style;
                }
            } else if (style.fontSize > largestTextStyle.fontSize) {
                largestTextStyle = style;
            }
        }
    }

    if (largestTextStyle != null) {
        styleElement = `\n\tstyle: ${textStyle.toDart(context, largestTextStyle, 2)},`;
    }

    const skipStrutStyleSkipped = options.SkipStrutStyleSkipped(context);
    if (!skipStrutStyleSkipped && largestTextStyle != null) {
        strutStyleElement = `\n\tstrutStyle: ${strutStyle.toDart(context, largestTextStyle, 2)},`;
    }

    const name = options.textWidgetClassName(context);

    return `${name}.rich(
\tTextSpan(
\t\tchildren: [${textSpans.map( ts => { return "\n\t\t\t" + textSpan.toDart(context, ts, 4)})},
\t\t],
\t),${styleElement}${strutStyleElement}
),`;
}
