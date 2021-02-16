# Make VS Code Even Better With These Settings and Tools

> Improve the look and feel of your favorite IDE

Improve the look and feel of your favorite IDE
----------------------------------------------

[![Jason Gomez](https://miro.medium.com/fit/c/96/96/0*_h-TSKy62Mp3buGO.jpg)](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/@gmzjsn?source=post_page-----95144650d8c5--------------------------------)

![VS Code Icon](https://miro.medium.com/max/60/0*gtGlUx73Vb6FMto2.png?q=20)

![VS Code Icon](https://miro.medium.com/max/2672/0*gtGlUx73Vb6FMto2.png)

VS Code Icon

The very [first piece I ever posted here on Medium/Better Programming was about a few VS Code extensions](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/better-programming/vs-code-extensions-1da56837dd10) I use even to this day. I’d always intended to create additional pieces regarding configuring VS Code but never got around to it. Since the last piece was focused more on extensions, this piece will be focused more on settings.

Many people already use VS Code because of its plethora of extensions that are made easily available via the extensions tab. However, there is a lot you can customize right out of the gate without needing to download any extensions. That’ll be our primary focus. You can quickly access your preferences by clicking the command and comma (cmd + ,) or by navigating to it under Code > Preferences > Settings.

Once there, you’ll be greeted with a nice UI of the editor’s settings. You can adjust your settings right here if you prefer, and VS Code also provides you with a little search bar at the top to help you search for any fields you’re looking for. Alternatively, you can click a button on the top right to open up your `settings.json` file. No matter your preference, you should be able to follow along.

Tip: For those editing their settings in the `settings.json` file, you can press control and space to see suggested code completion.

![Image for post](https://miro.medium.com/proxy/1*bMXH2j4bZ_Adw2c-OxoQbg.png)

You noticed a bug in your code and go to fix it. When you go to test your fix, nothing changed … the bug persists. Odd, you’re sure your logic is correct but double-check it nonetheless. Frustrated, you try something else but still no dice. The cycle repeats itself, and you’re wasting more time on this problem than you think you should be. Why are your solutions not working? Oh, you forgot to save.

Avoid the above scenario by enabling autosave. VS Code provides you with some options as to how you want to handle your autosave. I opt for a basic time delay with a delay set to `1000`. This ensures I never have to worry about manually saving my changes.

If you’re using the UI, you’ll find autosave as the very first option available to you. If you’re editing the `setting.json` file, you can enable this feature by setting `files.autoSave` to `afterDelay` and setting `files.autoSaveDelay` to `1000`.

![Image for post](https://miro.medium.com/proxy/1*72H8TC28JoAjCDB5r0hDag.png)

This might seem odd, but you can change quite a bit about that blinking line you see on VS Code. The field `editor.cursorBlinking` accepts `blink`, `expand`, `smooth`, `phase`, or `solid` as valid values.

`blink` is the default and provides you with a constantly blinking cursor. `expand` replaces the blinking with an animation that goes from full height to disappearing and back up to full height. `phase` makes the cursor dim in and out. `smooth`, as the name suggests, is a smoother blinking animation. Lastly, `solid` keeps your cursor visible at all times. If you’re a fan of having smooth animations, you can also set `editor.smoothCaretAnimation` to `true` as well.

You can also change the style of the cursor you have by setting the field `editor.cursorStyle` to one of six values. The `line` value is default and what you’re likely familiar with. With `block`, the line becomes thick and envelops the character after it, highlighting it in the process. With `block-outline`, you effectively get the same thing only without the highlight. The `underline` value changes your cursor from a vertical bar to a horizontal one. You can append a `-thin` to either line or underline it to make the cursor thinner.

Onto something more practical, you can assign the key bind to create multiple cursors with `editor.multiCursorModifier`. It accepts one of two values. The `alt` lets you hold down the option key and click anywhere to make additional cursors appear on the editor. Meanwhile, the `ctrlCmd` value makes it so you hold down the command key and click to create additional cursors.

There are even more customizations you can do with the cursor. If you pick `line` for your cursor style, then you can adjust `editor.cursorWidth` to customize the width of the cursor. With `editor.multiCursorPaste`, you can adjust the behavior of what happens when you paste the text into VS Code while you have multiple cursors active. With `full`, each cursor will paste everything, while with `spread`, each cursor will paste a single line of text.

If you code in multiple languages, you may prefer to have specific editor settings for your different languages.

Consider both Ruby and JavaScript for a moment. Traditionally, Ruby code is styled in such a way that indentations have a width of two spaces. JavaScript, on the other hand, uses a traditional tab (four spaces) for indentation. It can get annoying to have to switch your indentation ever time you switch to a different language. Thankfully, VS Code has a feature where you can set settings for a specific language.

![Image for post](https://miro.medium.com/proxy/1*JNRSTVU5jflYShUBpHajwQ.png)

To enable this feature, simply follow the format in the image. Within quotes and brackets, specify the language you want to apply the settings to, then set it to an object.

From there, you can access the normal editor preferences you want to change for this specific language. VS Code will then override the default settings with these settings whenever you open/save a file with this language extension.

In addition to VS Code, I spend a significant amount of time coding on several IDEs made by JetBrains. They recently released a new font called JetBrains Mono. This font is made available on all their IDEs, but JetBrains has kindly released this font to the [public for free (and open source)](https://www.jetbrains.com/lp/mono/#how-to-install). This is a big plus for me since, for consistency, I like to keep all my editors using the same font. Before JetBrains Mono, I used to use Fira Code, which can be found [here](https://github.com/tonsky/FiraCode).

JetBrains’ website offers some in-depth comparisons with other fonts — as well as a breakdown of its features. But here are a few highlights I’m a fan of:

1.  As the name suggests, it’s a monospaced font — meaning each character takes up the same width.
2.  Lowercase letters are taller compared to other fonts.
3.  It has a very plain look to it. No fancy squiggly strokes on characters like _g_ or _r._
4.  It supports ligatures.
5.  Special care was taken to ensure that characters like 1, l, and I — as well as 0 and O — are easily distinguishable.

Needless to say, having a font that’s comfortable and easy to read is important to any programmer.

Once you’ve downloaded your font, open up VS Code and navigate to your preferences. From here, if you’re using the UI editor, look for Editor: Font Family, and type in your font (take care to match the case and any spaces).

Alternatively, you can access this field in the `settings.json` file — the key is `editor.fontFamily`. While we’re here, now is a good time to set your font size (e.g., `editor.fontSize’: 14`), and if you’re a fan of ligatures, you can enable those now as well (`editor.fontLigatures’: true`).

You can change how VS Code opens its preferences by setting a value to the field `workbench.settings.editor`. The default setting is `ui`, but you can change it to JSON, if you prefer. If you do change it to JSON, then the next time you open your preferences, VS Code will automatically open the `settings.json` file rather than show you the UI.

By default, VS Code comes will a small minimap on the right. This feature shows you a mini version of the code on your current file. You can use the minimap to quickly see where in the file you are, and you can click anywhere on the minimap to quickly get to that portion of the file.

I don’t find this feature very useful. You can disable this feature, which will give you a bit more space. To do so, set `editor.minimap.enabled`, and set the value to `false`.

![Image for post](https://miro.medium.com/proxy/1*8tIxiWcZMC-gPa9dnF1xDA.png)

Breadcrumbs allow you to quickly see your file structure. To set this up, simply set `breadcrumbs.enable` to `true` and then `breadcrumbs.filePath` to `on`. Afterward, at the top right (under your open file), you should see a file path trail to your current location.

The latest version of macOS swapped the default terminal from Bash to Zsh. However, for individuals who haven’t updated their OS but still prefer to use Zsh, you can still do so. You can use `terminal.integrated.shell.osx` to set your terminal path to Zsh.

While I haven’t mentioned any extensions here, I do want to mention a quick setting to help keep your extensions up to date. By setting the field `extensions.autoCheckUpdates` to `true`, VS Code will automatically flag an extension as outdated whenever a newer version is available. You’ll be able to see this in the extension view.

Even better, you can have VS Code automatically install updates to your extensions by setting `extensions.autoUpdate` to `true`. Both of these commands use Microsoft’s online service to fetch updates.

VS Code is known for being a very customizable editor. It’s insane how much thought Microsoft put into every aspect of the editor. Little things, like all of the different cursor settings, blew me away when I first discovered them. Even more amazing is what’s covered here is just a small portion of what’s available to be edited. Whenever you have the chance, I encourage you to open up your `settings.json` file and fiddle around.

Lastly, while I did mention I’d be focusing on settings, I still want to mention one related extension. Settings Sync is an extension I regrettably didn’t mention in my VS Code extensions piece. A relatively straightforward extension, Settings Sync syncs various aspects of your editor (including the `settings.json file` — as well as extensions and their configurations) across multiple devices. This is perfect if you work on multiple computers or just want to share your setup with a friend or coworker. [Here](https://gist.github.com/JsnGmz/5a9891f7efbf127ecd27347c8cc02445) are my settings in case you want to take a look at them.

Hopefully, you found something useful here. It’s impressive how customizable VS Code is even before factoring in extensions.


[Source](https://medium.com/better-programming/make-vs-code-even-better-with-these-settings-and-tools-95144650d8c5)