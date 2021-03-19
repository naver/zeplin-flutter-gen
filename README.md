# Flutter Gen Zeplin Extension 🚀
The Flutter dart code generator from zeplin. ex) Container, Text, Color, TextStyle, ... - Save your time.

## Getting started
Add the extension to your project from [extensions.zeplin.io](https://extensions.zeplin.io).

## Features

✅ `Text` Widget </br>
✅ `RichText` Widget </br>
✅ `Container` Widget </br>
✅ `BoxDecoration` </br>
✅ `BoxShadow` </br>
✅ `Border` </br>
✅ `TextStyle` </br>
✅ `StrutStyle` </br>
✅ Material Color names
- [ ] `LinearGradient`
- [ ] `RadialGradient`

## Key points

**dartfmt (dart_style)**

The generated code format is set to [`dartfmt(dart_style)`](https://github.com/dart-lang/dart_style) as much as possible.</br>You don't need to reformat genrated code.

**Options**

<img width="450" alt="preferences" src="https://user-images.githubusercontent.com/14192093/71803976-8d80ff80-30a5-11ea-9254-f42849b98ae9.png">


<a href="#options">Many options</a> are available in the format you want.

ex) Option: Use color name ✅
```dart
Color(0xffffffff) /// ❌
Colors.white /// ⭕️
```

## Sample Output

#### `Colors` (Project)
```dart
class ZeplinColors {
   static const Color red = Color(0xffff0000);
   static const Color green = Color(0xff00ff00);
   static const Color yellow = Color(0xffffff00);
   static const Color white = Color(0xffffffff);
}
```

#### `Container` - Layer with shadow:
```dart
Container(
   height: 100,
   margin: EdgeInsets.only(
      left: 50,
      right: 50,
   ),
   decoration: BoxDecoration(
      boxShadow: [
         BoxShadow(
            color: ZeplinColors.black50,
            offset: Offset(0, 2),
            blurRadius: 4,
            spreadRadius: 6,
         ),
      ],
   ),
),
```

#### `Text` - Text layer
```dart
Text('Type something',
   style: TextStyle(
      color: ZeplinColors.black,
      fontSize: 20,
      fontFamily: 'SFProText',
   ),
),
```

#### `RichText` - Text layer with multiple styles
```dart
RichText(
   text: TextSpan(
      children: [
         TextSpan(
            text: 'Type',
            style: TextStyle(
               color: ZeplinColors.black,
               fontSize: 20,
               fontFamily: 'SFProText',
               fontWeight: FontWeight.w500,
            ),
         ),
         TextSpan(
            text: 'something',
            style: TextStyle(
               color: ZeplinColors.black,
               fontSize: 20,
               fontFamily: 'SFProText',
            ),
         ),
         TextSpan(
            text: 'red',
            style: TextStyle(
               color: ZeplinColors.red,
               fontSize: 20,
               fontFamily: 'SFProText',
            ),
         ),
      ],
   ),
),
```

## Options

| Description                                | Default value                               | Example                                                  |
|:-------------------------------------------|:------------------------------------------- |:-------------------------------------------------------- |
| Color class name prefix                    | `Zeplin`                                    | `class ZeplinColors`                                     |
| Use color name                             | `true`                                      | `Color(0xffffffff)` => `ZeplinColors.white`              |
| TextStyle class name prefix                | `Zeplin`                                    | `class ZeplinTextStyles`                                 |
| Use text style name                        | `false`                                     | `ZeplinTextStyles.title`                                 |
| Skip Default value                         | `true`                                      | ~~FontWeight.w400~~, ~~FontStyle.normal~~                |
| Skip width in Container                    | `true`                                      | `Container(`~~width: 120~~`)`                            |
| Skip height in Container                   | `false`                                     | `Container(height: 120)`                                 |
| Skip margin left & right in Container      | `false`                                     | `Container(margin: EdgeInsets.only(left: 20, right: 20)` |
| Skip font family in TextStyle              | ` `                                         | `AppleSDGothicNeo,HelveticaNeue (* : All font)`          |
| Skip letterSpacing in TextStyle            | `true`                                      | `TextStyle(`~~letterSpacing: 1.2~~`)`                    |
| Skip lineHeight in TextStyle               | `true`                                      | `TextStyle(`~~height: 1.2~~`)`                           |
| Skip StrutStyle in Text                    | `true`                                      | `Text('', `~~strutStyle: StrutStyle()~~`)`               |

## Contributing

Welcome to contribute. Thank you very much for your supporting!

## Development

This extension is developed using [zem](https://github.com/zeplin/zem), Zeplin Extension Manager. zem is a command line tool that lets you quickly create, test and publish extensions.

To learn more about creating Zeplin extensions, [see documentation](https://github.com/zeplin/zeplin-extension-documentation).

## License

```
Copyright (c) 2019-present NAVER Corp.

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```
