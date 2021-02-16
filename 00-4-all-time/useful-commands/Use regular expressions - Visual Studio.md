# Use regular expressions - Visual Studio

> Learn about some regular expression characters, operators, constructs, and pattern examples that you can use in Visual Studio.

*   09/13/2019
*   6 minutes to read

### In this article

1.  [Regular expression examples](#regular-expression-examples)
2.  [Capture groups and replacement patterns](#capture-groups-and-replacement-patterns)
3.  [See also](#see-also)

Visual Studio uses [.NET regular expressions](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/en-us/dotnet/standard/base-types/regular-expressions) to find and replace text.

[](#regular-expression-examples)Regular expression examples
-----------------------------------------------------------

The following table contains some regular expression characters, operators, constructs, and pattern examples. For a more complete reference, see [Regular expression language](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/en-us/dotnet/standard/base-types/regular-expression-language-quick-reference).

An example regular expression that combines some of the operators and constructs to match a hexadecimal number is `\b0[xX]([0-9a-fA-F]+\)\b`. This expression matches "0xc67f" but not "0xc67g".

Tip

In Windows operating systems, most lines end in "\\r\\n" (a carriage return followed by a new line). These characters aren't visible but are present in the editor and passed to the .NET regular expression service.

[](#capture-groups-and-replacement-patterns)Capture groups and replacement patterns
-----------------------------------------------------------------------------------

A capture group delineates a subexpression of a regular expression and captures a substring of an input string. You can use captured groups within the regular expression itself (for example, to look for a repeated word), or in a replacement pattern. For detailed information, see [Grouping constructs in regular expressions](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/en-us/dotnet/standard/base-types/grouping-constructs-in-regular-expressions).

To create a numbered capture group, surround the subexpression with parentheses in the regular expression pattern. Captures are numbered automatically from left to right based on the position of the opening parenthesis in the regular expression. To access the captured group:

*   **within the regular expression**: Use `\number`. For example, `\1` in the regular expression `(\w+)\s\1` references the first capture group `(\w+)`.
    
*   **in a replacement pattern**: Use `$number`. For example, the grouped regular expression `(\d)([a-z])` defines two groups: the first group contains a single decimal digit, and the second group contains a single character between **a** and **z**. The expression finds four matches in the following string: **1a 2b 3c 4d**. The replacement string `z$1` references the first group only (`$1`), and converts the string to **z1 z2 z3 z4**.
    

The following image shows a regular expression `(\w+)\s\1` and a replacement string `$1`. Both the regular expression and the replacement pattern reference the first capture group that's automatically numbered 1. When you choose **Replace all** in the **Quick Replace** dialog box in Visual Studio, repeated words are removed from the text.

![Quick Replace showing a numbered capture group in Visual Studio](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/media/numbered-capture-group.png?view=vs-2019)

Tip

Make sure the **Use Regular Expressions** button is selected in the **Quick Replace** dialog box.

### [](#named-capture-groups)Named capture groups

Instead of relying on the automatic numbering of a capture group, you can give it a name. The syntax for a named capture group is `(?<name>subexpression)`.

Named capture groups, like numbered capture groups, can be used within the regular expression itself or in a replacement pattern. To access the named capture group:

*   **within the regular expression**: Use `\k<name>`. For example, `\k<repeated>` in the regular expression `(?<repeated>\w+)\s\k<repeated>` references the capture group that's named `repeated` and whose subexpression is `\w+`.
    
*   **in a replacement pattern**: Use `${name}`. For example, `${repeated}`.
    

As an example, the following image shows a regular expression `(?<repeated>\w+)\s\k<repeated>` and a replacement string `${repeated}`. Both the regular expression and the replacement pattern reference the capture group named `repeated`. When you choose **Replace all** in the **Quick Replace** dialog box in Visual Studio, repeated words are removed from the text.

![Quick Replace showing a named capture group in Visual Studio](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/media/named-capture-group.png?view=vs-2019)

Tip

Make sure the **Use Regular Expressions** button is selected in the **Quick Replace** dialog box.

For more information about named capture groups, see [Named matched subexpressions](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/en-us/dotnet/standard/base-types/grouping-constructs-in-regular-expressions#named-matched-subexpressions). For more information about regular expressions that are used in replacement patterns, see [Substitutions in regular expressions](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/en-us/dotnet/standard/base-types/substitutions-in-regular-expressions).

[](#see-also)See also
---------------------

*   [Regular expression language](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/en-us/dotnet/standard/base-types/regular-expression-language-quick-reference)
*   [Find and replace text](https://docs.microsoft.com/en-us/visualstudio/ide/finding-and-replacing-text?view=vs-2019)

Feedback
--------

Submit and view feedback for

<table><tbody><tr><td id="vcc-left-position"></td><td><div><div id="vcc-video-frame"><div id="vidcor-video-frame"><img id="vidcor-ff-img" onerror="this.onerror=null;this.src='chrome-extension://hfadalcgppcbffdnichplalnmhjbabbm/images/user.jpeg';" src="chrome-extension://cjedbglnccaioiolemnfhjncicchinao/this.onerror=null;this.src='chrome-extension://hfadalcgppcbffdnichplalnmhjbabbm/images/user.jpeg';"></div><span></span><span id="vcc-flip-camera"></span></div></div></td><td id="vcc-right-position"><div><table id="cc-pen-editor"><tbody><tr><td></td><td></td></tr></tbody></table><table id="vcc-draw-elem"><tbody><tr><td><div>&nbsp;</div></td><td id="vcc-draw-pen"><div id="vcc-draw-active"><span>Pen</span></div></td><td id="vcc-draw-eraser"><div><span>Eraser</span></div></td><td id="vcc-enable-click"><div><span>Enable Click</span></div></td><td id="vcc-clear-draw"><div><span>Clear paint (Alt + z)</span></div></td><td id="vcc-draw-highlight"><div><span>Highlight Mouse</span></div></td><td id="vcc-cursor-focus"><div><span>Focus Mouse</span></div></td></tr></tbody></table><table><tbody><tr><td id="vcc-hide-menu-btn"></td><td id="control-menu-id"><table><tbody><tr><td id="vcc-cam-setting-btn"><div><span>Camera settings</span></div></td><td id="vcc-cancel-btn"><div><span>Cancel Recording (Alt + q)</span></div></td><td id="vcc-pause-btn"><div><span>Pause</span></div></td><td id="vcc-resume-btn"><div><span>Resume</span></div></td><td id="vcc-init-btn"><div><span>Start (Alt + s)</span></div></td><td id="vcc-stop-btn"><div><span>Finish (Alt + w)</span></div></td><td id="vcc-timer-elem1"></td></tr></tbody></table></td></tr></tbody></table></div></td></tr></tbody></table>


[Source](https://docs.microsoft.com/en-us/visualstudio/ide/using-regular-expressions-in-visual-studio?view=vs-2019)