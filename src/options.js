// zeplin-flutter-gen
// Copyright (c) 2019-present NAVER Corp.
// MIT license

const OPTION_KEYS = {
    COLORS_CLASS_PREFIX: "colorsClassPrefix",
    USE_COLOR_NAME: "useColorName",
    TEXT_WIDGET_CLASS_NAME: "textWidgetClassName",
    TEXTSTYLES_CLASS_PREFIX: "textStylesClassPrefix",
    USE_TEXTSTYLE_NAME: "useTextStyleName",
    SKIP_DEFAULT_VALUE: "defaultValueSkipped",
    SKIP_WIDTH_CONTAINER: "widthInContainerSkipped",
    SKIP_HEIGHT_CONTAINER: "heightInContainerSkipped",
    SKIP_MARGIN_LEFT_RIGHT_CONTAINER: "marginLeftAndRightInContainerSkipped",
    SKIP_FONT_FAMILY: "excludeFontFamily",
    SKIP_LETTER_SPACING: "letterSpacingValueSkipped",
    SKIP_LINE_HEIGHT: "lineHeightValueSkipped",
    SKIP_STRUT_STYLE: "strutStyleSkipped",
};

/**
 * Options
 */
export function colorsClassPrefix(context) {
    var prefix = "";
    const optionClassPrefix = context.getOption(OPTION_KEYS.COLORS_CLASS_PREFIX)
    if (optionClassPrefix != null && optionClassPrefix != '') {
        prefix = optionClassPrefix;
    }
    return prefix;
}

export function useColorName(context) {
    return context.getOption(OPTION_KEYS.USE_COLOR_NAME);
}

export function textWidgetClassName(context) {
    var name = "Text";
    const optionClassPrefix = context.getOption(OPTION_KEYS.TEXT_WIDGET_CLASS_NAME)
    if (optionClassPrefix != null && optionClassPrefix != '') {
        name = optionClassPrefix;
    }
    return name;
}

export function textStylesClassPrefix(context) {
    var prefix = "";
    const optionClassPrefix = context.getOption(OPTION_KEYS.TEXTSTYLES_CLASS_PREFIX)
    if (optionClassPrefix != null && optionClassPrefix != '') {
        prefix = optionClassPrefix;
    }
    return prefix;
}

export function useTextStylesName(context) {
    return context.getOption(OPTION_KEYS.TEXTSTYLES_CLASS_PREFIX);
}

export function skipDefaultValue(context) {
    return context.getOption(OPTION_KEYS.SKIP_DEFAULT_VALUE);
}

export function skipWidthInContainer(context) {
    return context.getOption(OPTION_KEYS.SKIP_WIDTH_CONTAINER);
}

export function skipHeightInContainer(context) {
    return context.getOption(OPTION_KEYS.SKIP_HEIGHT_CONTAINER);
}
export function skipMarginLeftAndRight(context) {
    return context.getOption(OPTION_KEYS.SKIP_MARGIN_LEFT_RIGHT_CONTAINER);
}

export function skipFontFamilies(context) {
    var values = context.getOption(OPTION_KEYS.SKIP_FONT_FAMILY)
    if (values == '*') {
        return '*';
    } else {
        return values.split(',');
    }
}

export function skipLetterSpacing(context) {
    return context.getOption(OPTION_KEYS.SKIP_LETTER_SPACING);
}

export function skipLineHeight(context) {
    return context.getOption(OPTION_KEYS.SKIP_LINE_HEIGHT);
}

export function SkipStrutStyleSkipped(context) {
    return context.getOption(OPTION_KEYS.SKIP_STRUT_STYLE);
}

