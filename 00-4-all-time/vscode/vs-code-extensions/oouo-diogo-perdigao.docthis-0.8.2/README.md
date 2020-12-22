https://marketplace.visualstudio.com/items?itemName=oouo-diogo-perdigao.docthis

[![Build Status](https://travis-ci.org/oouo-diogo-perdigao/vscode-docthis.svg?branch=master)](https://travis-ci.org/oouo-diogo-perdigao/vscode-docthis) [![Paypal Donations](https://www.paypalobjects.com/en_US/i/btn/btn_donate_SM.gif)](https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=GG4X8R7UTV3AN&source=url)

# Document This
"Document This" is a Visual Studio Code extension that automatically generates detailed JSDoc comments for both TypeScript and JavaScript files.

![Demo](https://github.com/oouo-diogo-perdigao/vscode-docthis/raw/master/images/demo.gif)

# Tags
Supports JSDoc and Closure Compiler tags: @class, @description, @enum, @export, @function, @implements, @interface, @param, @private, @returns or @return, @static, @template, @type, @memberOf and @date.

# Options
#### docthis.includeTypes
When enabled, type information is added to comment tags.

Default: true

#### docthis.includeMemberOfOnClassMembers
When enabled, memberOf information is added to comment tags on class members.

Default: true

#### docthis.includeMemberOfOnInterfaceMembers
When enabled, memberOf information is added to comment tags on interface members.

Default": true

#### docthis.includeDescriptionTag
When enabled, JSDoc comments for functions and methods will include @description.
Default: false

#### docthis.enableHungarianNotationEvaluation
When enabled, hungarian notation will be used as a type hint.

Default: false

#### docthis.inferTypesFromNames
When enabled, will use names of params & methods as type hints.

Default: false

#### docthis.includeAuthorTag
When enabled, will add the @author tag.

Default: false

#### docthis.authorName
When docthis.includeAuthorTag is enabled, will add @author tag with this value.

Default: "(Set the text for this tag by adding docthis.authorName to your settings file.)"

#### docthis.includeDateTag
When enabled, will add the @date tag in dd-mm-yyyy format.

Default: false

#### docthis.returnsTag
Put @returns in place of @returns

Default: false

# List of all available formats for @date tag

Mask | Description
---- | -----------
`d` | Day of the month as digits; no leading zero for single-digit days.
`dd` | Day of the month as digits; leading zero for single-digit days.
`ddd` | Day of the week as a three-letter abbreviation.
`dddd` | Day of the week as its full name.
`m` | Month as digits; no leading zero for single-digit months.
`mm` | Month as digits; leading zero for single-digit months.
`mmm` | Month as a three-letter abbreviation.
`mmmm` | Month as its full name.
`yy` | Year as last two digits; leading zero for years less than 10.
`yyyy` | Year represented by four digits.
`h` | Hours; no leading zero for single-digit hours (12-hour clock).
`hh` | Hours; leading zero for single-digit hours (12-hour clock).
`H` | Hours; no leading zero for single-digit hours (24-hour clock).
`HH` | Hours; leading zero for single-digit hours (24-hour clock).
`M` | Minutes; no leading zero for single-digit minutes.
`MM` | Minutes; leading zero for single-digit minutes.
`N` | ISO 8601 numeric representation of the day of the week.
`o` | GMT/UTC timezone offset, e.g. -0500 or +0230.
`s` | Seconds; no leading zero for single-digit seconds.
`ss` | Seconds; leading zero for single-digit seconds.
`S` | The date's ordinal suffix (st, nd, rd, or th). Works well with `d`.
`l` |  Milliseconds; gives 3 digits.
`L` | Milliseconds; gives 2 digits.
`t`	| Lowercase, single-character time marker string: a or p.
`tt` | Lowercase, two-character time marker string: am or pm.
`T` | Uppercase, single-character time marker string: A or P.
`TT` | Uppercase, two-character time marker string: AM or PM.
`W` | ISO 8601 week number of the year, e.g. 42
`Z` | US timezone abbreviation, e.g. EST or MDT. With non-US timezones or in the
`'...'`, `"..."` | Literal character sequence. Surrounding quotes are removed.
`UTC:` |	Must be the first four characters of the mask. Converts the date from local time to UTC/GMT/Zulu time before applying the mask. The "UTC:" prefix is removed.

# Commands
## Document This
`Ctrl+Alt+D` and again `Ctrl+Alt+D`

Generates documentation for whatever the caret is on or inside of.

## Trace TypeScript Syntax Node
Prints info about the node ancestry at a given caret position.

## Thank you for using Document This!
