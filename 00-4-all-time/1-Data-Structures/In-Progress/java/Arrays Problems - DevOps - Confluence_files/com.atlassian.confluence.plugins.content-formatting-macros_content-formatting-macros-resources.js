WRMCB=function(e){var c=console;if(c&&c.log&&c.error){c.log('Error running batched script.');c.error(e);}}
;
try {
/* module-key = 'com.atlassian.confluence.plugins.content-formatting-macros:content-formatting-macros-resources', location = '/templates/align.soy' */
// This file was automatically generated from align.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace Confluence.Templates.ContentFormatting.
 */

if (typeof Confluence == 'undefined') { var Confluence = {}; }
if (typeof Confluence.Templates == 'undefined') { Confluence.Templates = {}; }
if (typeof Confluence.Templates.ContentFormatting == 'undefined') { Confluence.Templates.ContentFormatting = {}; }


Confluence.Templates.ContentFormatting.align = function(opt_data, opt_ignored) {
  return '<div style="text-align: ' + soy.$$escapeHtml(opt_data.align) + ';"' + ((opt_data['class']) ? 'class="' + soy.$$escapeHtml(opt_data['class']) + '"' : '') + ((opt_data.id) ? 'id="' + soy.$$escapeHtml(opt_data.id) + '"' : '') + '>' + soy.$$filterNoAutoescape(opt_data.macroBodyWithHtml) + '</div>';
};
if (goog.DEBUG) {
  Confluence.Templates.ContentFormatting.align.soyTemplateName = 'Confluence.Templates.ContentFormatting.align';
}

}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.content-formatting-macros:content-formatting-macros-resources', location = '/templates/center.soy' */
// This file was automatically generated from center.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace Confluence.Templates.ContentFormatting.
 */

if (typeof Confluence == 'undefined') { var Confluence = {}; }
if (typeof Confluence.Templates == 'undefined') { Confluence.Templates = {}; }
if (typeof Confluence.Templates.ContentFormatting == 'undefined') { Confluence.Templates.ContentFormatting = {}; }


Confluence.Templates.ContentFormatting.center = function(opt_data, opt_ignored) {
  return '<div style="text-align:center;"' + ((opt_data['class']) ? 'class="' + soy.$$escapeHtml(opt_data['class']) + '"' : '') + ((opt_data.id) ? 'id="' + soy.$$escapeHtml(opt_data.id) + '"' : '') + '>' + soy.$$filterNoAutoescape(opt_data.macroBodyWithHtml) + '</div>';
};
if (goog.DEBUG) {
  Confluence.Templates.ContentFormatting.center.soyTemplateName = 'Confluence.Templates.ContentFormatting.center';
}

}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.content-formatting-macros:content-formatting-macros-resources', location = '/js/clickable.js' */
jQuery(function(a){a(".clickable").live("click",function(c){if(a(c.target).closest("a[href]").length===0&&a(c.target).closest(".clickable").length===1){var b=a(this).attr("href")||a("a[href]:first",this).attr("href");if(b){location.href=b}}})});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.content-formatting-macros:content-formatting-macros-resources', location = '/templates/colgroup.soy' */
// This file was automatically generated from colgroup.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace Confluence.Templates.ContentFormatting.
 */

if (typeof Confluence == 'undefined') { var Confluence = {}; }
if (typeof Confluence.Templates == 'undefined') { Confluence.Templates = {}; }
if (typeof Confluence.Templates.ContentFormatting == 'undefined') { Confluence.Templates.ContentFormatting = {}; }


Confluence.Templates.ContentFormatting.colgroup = function(opt_data, opt_ignored) {
  return '<colgroup' + ((opt_data.id) ? ' id="' + soy.$$escapeHtml(opt_data.id) + '"' : '') + ((opt_data['class']) ? ' class="' + soy.$$escapeHtml(opt_data['class']) + '"' : '') + ((opt_data.width) ? ' width="' + soy.$$escapeHtml(opt_data.width) + '"' : '') + ((opt_data.span) ? ' span="' + soy.$$escapeHtml(opt_data.span) + '"' : '') + '>' + soy.$$filterNoAutoescape(opt_data.macroBodyWithHtml) + '</colgroup>';
};
if (goog.DEBUG) {
  Confluence.Templates.ContentFormatting.colgroup.soyTemplateName = 'Confluence.Templates.ContentFormatting.colgroup';
}

}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.content-formatting-macros:content-formatting-macros-resources', location = '/templates/comment.soy' */
// This file was automatically generated from comment.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace Confluence.Templates.ContentFormatting.
 */

if (typeof Confluence == 'undefined') { var Confluence = {}; }
if (typeof Confluence.Templates == 'undefined') { Confluence.Templates = {}; }
if (typeof Confluence.Templates.ContentFormatting == 'undefined') { Confluence.Templates.ContentFormatting = {}; }


Confluence.Templates.ContentFormatting.comment = function(opt_data, opt_ignored) {
  return '<!--' + soy.$$filterNoAutoescape(opt_data.macroBodyWithHtml) + '-->';
};
if (goog.DEBUG) {
  Confluence.Templates.ContentFormatting.comment.soyTemplateName = 'Confluence.Templates.ContentFormatting.comment';
}

}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.content-formatting-macros:content-formatting-macros-resources', location = '/templates/img.soy' */
// This file was automatically generated from img.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace Confluence.Templates.ContentFormatting.
 */

if (typeof Confluence == 'undefined') { var Confluence = {}; }
if (typeof Confluence.Templates == 'undefined') { Confluence.Templates = {}; }
if (typeof Confluence.Templates.ContentFormatting == 'undefined') { Confluence.Templates.ContentFormatting = {}; }


Confluence.Templates.ContentFormatting.img = function(opt_data, opt_ignored) {
  return '<img' + ((opt_data.id) ? '        id ="' + soy.$$escapeHtml(opt_data.id) + '"              ' : '') + ((opt_data['class']) ? '     class="' + soy.$$escapeHtml(opt_data['class']) + '"         ' : '') + ((opt_data.title) ? '     title="' + soy.$$escapeHtml(opt_data.title) + '"         ' : '') + ((opt_data.style) ? '     style="' + soy.$$escapeHtml(opt_data.style) + '"         ' : '') + ((opt_data.dir) ? '       dir="' + soy.$$escapeHtml(opt_data.dir) + '"             ' : '') + ((opt_data.align) ? '     align="' + soy.$$escapeHtml(opt_data.align) + '"         ' : '') + ((opt_data.lang) ? '      lang="' + soy.$$escapeHtml(opt_data.lang) + '"           ' : '') + ((opt_data.height) ? '    height="' + soy.$$escapeHtml(opt_data.height) + '"       ' : '') + ((opt_data.width) ? '     width="' + soy.$$escapeHtml(opt_data.width) + '"         ' : '') + ((opt_data.border) ? '    border="' + soy.$$escapeHtml(opt_data.border) + '"       ' : '') + ((opt_data.src) ? '       src="' + soy.$$escapeHtml(opt_data.src) + '"             ' : '') + ((opt_data.alt) ? '       alt="' + soy.$$escapeHtml(opt_data.alt) + '"             ' : '') + ((opt_data.longdesc) ? '  longdesc="' + soy.$$escapeHtml(opt_data.longdesc) + '"   ' : '') + ((opt_data.ismap) ? '     ismap                    ' : '') + ((opt_data.usemap) ? '    usemap="' + soy.$$escapeHtml(opt_data.usemap) + '"       ' : '') + '/>';
};
if (goog.DEBUG) {
  Confluence.Templates.ContentFormatting.img.soyTemplateName = 'Confluence.Templates.ContentFormatting.img';
}

}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.content-formatting-macros:content-formatting-macros-resources', location = '/templates/list.soy' */
// This file was automatically generated from list.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace Confluence.Templates.ContentFormatting.
 */

if (typeof Confluence == 'undefined') { var Confluence = {}; }
if (typeof Confluence.Templates == 'undefined') { Confluence.Templates = {}; }
if (typeof Confluence.Templates.ContentFormatting == 'undefined') { Confluence.Templates.ContentFormatting = {}; }


Confluence.Templates.ContentFormatting.orderedList = function(opt_data, opt_ignored) {
  return '<ol' + ((opt_data.id) ? ' id="' + soy.$$escapeHtml(opt_data.id) + '"' : '') + ((opt_data['class']) ? ' class="' + soy.$$escapeHtml(opt_data['class']) + '"' : '') + ((opt_data.style) ? ' style="' + soy.$$escapeHtml(opt_data.style) + '"' : '') + ((opt_data.title) ? ' title="' + soy.$$escapeHtml(opt_data.title) + '"' : '') + ((opt_data.dir) ? ' dir="' + soy.$$escapeHtml(opt_data.dir) + '"' : '') + ((opt_data.lang) ? ' lang="' + soy.$$escapeHtml(opt_data.lang) + '"' : '') + '>' + soy.$$filterNoAutoescape(opt_data.macroBodyWithHtml) + '</ol>';
};
if (goog.DEBUG) {
  Confluence.Templates.ContentFormatting.orderedList.soyTemplateName = 'Confluence.Templates.ContentFormatting.orderedList';
}


Confluence.Templates.ContentFormatting.unorderedList = function(opt_data, opt_ignored) {
  return '<ul' + ((opt_data.id) ? ' id="' + soy.$$escapeHtml(opt_data.id) + '"' : '') + ((opt_data['class']) ? ' class="' + soy.$$escapeHtml(opt_data['class']) + '"' : '') + ((opt_data.style) ? ' style="' + soy.$$escapeHtml(opt_data.style) + '"' : '') + ((opt_data.title) ? ' title="' + soy.$$escapeHtml(opt_data.title) + '"' : '') + ((opt_data.dir) ? ' dir="' + soy.$$escapeHtml(opt_data.dir) + '"' : '') + ((opt_data.lang) ? ' lang="' + soy.$$escapeHtml(opt_data.lang) + '"' : '') + '>' + soy.$$filterNoAutoescape(opt_data.macroBodyWithHtml) + '</ul>';
};
if (goog.DEBUG) {
  Confluence.Templates.ContentFormatting.unorderedList.soyTemplateName = 'Confluence.Templates.ContentFormatting.unorderedList';
}


Confluence.Templates.ContentFormatting.listItem = function(opt_data, opt_ignored) {
  return '<li' + ((opt_data.id) ? ' id="' + soy.$$escapeHtml(opt_data.id) + '"' : '') + ((opt_data['class']) ? ' class="' + soy.$$escapeHtml(opt_data['class']) + '"' : '') + ((opt_data.style) ? ' style="' + soy.$$escapeHtml(opt_data.style) + '"' : '') + ((opt_data.title) ? ' title="' + soy.$$escapeHtml(opt_data.title) + '"' : '') + ((opt_data.dir) ? ' dir="' + soy.$$escapeHtml(opt_data.dir) + '"' : '') + ((opt_data.lang) ? ' lang="' + soy.$$escapeHtml(opt_data.lang) + '"' : '') + '>' + soy.$$escapeHtml(opt_data.macroBodyWithHtml) + '</li>';
};
if (goog.DEBUG) {
  Confluence.Templates.ContentFormatting.listItem.soyTemplateName = 'Confluence.Templates.ContentFormatting.listItem';
}

}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.content-formatting-macros:content-formatting-macros-resources', location = '/templates/lozenge.soy' */
// This file was automatically generated from lozenge.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace Confluence.Templates.ContentFormatting.
 */

if (typeof Confluence == 'undefined') { var Confluence = {}; }
if (typeof Confluence.Templates == 'undefined') { Confluence.Templates = {}; }
if (typeof Confluence.Templates.ContentFormatting == 'undefined') { Confluence.Templates.ContentFormatting = {}; }


Confluence.Templates.ContentFormatting.lozenge = function(opt_data, opt_ignored) {
  return soy.$$escapeHtml(webResourceManager_requireResource('com.atlassian.confluence.plugins.content-formatting-macros:content-formatting-macros-lozenge-resources')) + '<table cellspacing="0" cellpadding="0" data-hasbody="true" data-macro-name="lozenge"' + ((opt_data.width) ? 'style="' + soy.$$escapeHtml(opt_data.width) + '"' : '') + ((opt_data.link) ? 'class="lozenge clickable" href="' + soy.$$escapeHtml(opt_data.link) + '"' : 'class="lozenge"') + '><tbody><tr><td style="background-image: url(\'' + soy.$$escapeHtml("/wiki") + soy.$$escapeHtml(opt_data.lozengeImage) + '\')" class="lozenge-icon" rowspan="3"></td><td class="top" colspan="2"> </td><td class="topRight"> </td></tr><tr><td class="breaker"> </td><td style="width:240px" class="body"><div class="lozenge-heading"><a class="external-link" rel="nofollow"' + ((opt_data.link) ? 'href="' + soy.$$escapeHtml(opt_data.link) + '"' : '') + ((opt_data.title) ? 'title="' + soy.$$escapeHtml(opt_data.title) + '"' : '') + '>' + ((opt_data.title) ? soy.$$escapeHtml(opt_data.title) : '') + '</a></div><div class="lozenge-body">' + soy.$$filterNoAutoescape(opt_data.macroBodyWithHtml) + '</div></td><td class="right"> </td></tr><tr><td class="bottom" colspan="2"> </td><td class="bottomRight"> </td></tr></tbody></table>';
};
if (goog.DEBUG) {
  Confluence.Templates.ContentFormatting.lozenge.soyTemplateName = 'Confluence.Templates.ContentFormatting.lozenge';
}

}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.content-formatting-macros:content-formatting-macros-resources', location = '/templates/pre.soy' */
// This file was automatically generated from pre.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace Confluence.Templates.ContentFormatting.
 */

if (typeof Confluence == 'undefined') { var Confluence = {}; }
if (typeof Confluence.Templates == 'undefined') { Confluence.Templates = {}; }
if (typeof Confluence.Templates.ContentFormatting == 'undefined') { Confluence.Templates.ContentFormatting = {}; }


Confluence.Templates.ContentFormatting.pre = function(opt_data, opt_ignored) {
  return '<pre' + ((opt_data.id) ? ' id="' + soy.$$escapeHtml(opt_data.id) + '"' : '') + ((opt_data['class']) ? ' class="' + soy.$$escapeHtml(opt_data['class']) + '"' : '') + ((opt_data.title) ? ' title="' + soy.$$escapeHtml(opt_data.title) + '"' : '') + ((opt_data.style) ? ' style="' + soy.$$escapeHtml(opt_data.style) + '"' : '') + ((opt_data.dir) ? ' dir="' + soy.$$escapeHtml(opt_data.dir) + '"' : '') + ((opt_data.lang) ? ' lang="' + soy.$$escapeHtml(opt_data.lang) + '"' : '') + ((opt_data.width) ? ' width="' + soy.$$escapeHtml(opt_data.width) + '"' : '') + '>' + soy.$$filterNoAutoescape(opt_data.macroBodyWithHtml) + '</pre>';
};
if (goog.DEBUG) {
  Confluence.Templates.ContentFormatting.pre.soyTemplateName = 'Confluence.Templates.ContentFormatting.pre';
}

}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.content-formatting-macros:content-formatting-macros-resources', location = '/templates/roundRect.soy' */
// This file was automatically generated from roundRect.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace Confluence.Templates.ContentFormatting.
 */

if (typeof Confluence == 'undefined') { var Confluence = {}; }
if (typeof Confluence.Templates == 'undefined') { Confluence.Templates = {}; }
if (typeof Confluence.Templates.ContentFormatting == 'undefined') { Confluence.Templates.ContentFormatting = {}; }


Confluence.Templates.ContentFormatting.roundRect = function(opt_data, opt_ignored) {
  return '<table cellspacing="0" cellpadding="0"' + ((opt_data.width) ? 'width="' + soy.$$escapeHtml(opt_data.width) + '"' : '') + ((opt_data.height) ? 'height="' + soy.$$escapeHtml(opt_data.height) + '"' : '') + ((opt_data['class']) ? 'class="' + soy.$$escapeHtml(opt_data['class']) + '"' : '') + ((opt_data.id) ? 'id="' + soy.$$escapeHtml(opt_data.id) + '"' : '') + '>' + ((opt_data.topRowVisible) ? '<tr valign="top" style="background-color:' + soy.$$escapeHtml(opt_data.titlebgcolor) + '"><td style="text-align:left; vertical-align:top; width:25px; height:25px;' + ((opt_data.topLeftCornerRounded) ? 'border-top-left-radius:' + soy.$$escapeHtml(opt_data.hSize) + ' ' + soy.$$escapeHtml(opt_data.vSize) + ';' : '') + '" > </td><td style="height:25px;">' + ((opt_data.title) ? soy.$$escapeHtml(opt_data.title) : '') + '</td><td style="text-align:right; vertical-align:top; width:25px; height:25px;' + ((opt_data.topRightCornerRounded) ? 'border-top-right-radius:' + soy.$$escapeHtml(opt_data.hSize) + ' ' + soy.$$escapeHtml(opt_data.vSize) + ';' : '') + '" > </td></tr>' : '') + ((opt_data.middleRowVisible) ? '<tr valign="top" style="background-color:' + soy.$$escapeHtml(opt_data.bgcolor) + '"><td colspan="3" style="padding: 0px 25px 0px 25px;"> ' + soy.$$filterNoAutoescape(opt_data.macroBodyWithHtml) + ' </td></tr>' : '') + ((opt_data.bottomRowVisible) ? '<tr valign="bottom" style="background-color:' + soy.$$escapeHtml(opt_data.footerbgcolor) + '"><td style="line-height:0; text-align:left; vertical-align:bottom; width:25px; height:25px;' + ((opt_data.bottomLeftCornerRounded) ? 'border-bottom-left-radius:' + soy.$$escapeHtml(opt_data.hSize) + ' ' + soy.$$escapeHtml(opt_data.vSize) + ';' : '') + '" > </td><td style="height:25px;">' + ((opt_data.footer) ? soy.$$escapeHtml(opt_data.footer) : '') + '</td><td style="text-align:right; vertical-align:bottom; width:25px; height:25px; line-height:0;' + ((opt_data.bottomRightCornerRounded) ? 'border-bottom-right-radius:' + soy.$$escapeHtml(opt_data.hSize) + ' ' + soy.$$escapeHtml(opt_data.vSize) + ';' : '') + '"> </td></tr>' : '') + '</table>';
};
if (goog.DEBUG) {
  Confluence.Templates.ContentFormatting.roundRect.soyTemplateName = 'Confluence.Templates.ContentFormatting.roundRect';
}

}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.content-formatting-macros:content-formatting-macros-resources', location = '/templates/style.soy' */
// This file was automatically generated from style.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace Confluence.Templates.ContentFormatting.
 */

if (typeof Confluence == 'undefined') { var Confluence = {}; }
if (typeof Confluence.Templates == 'undefined') { Confluence.Templates = {}; }
if (typeof Confluence.Templates.ContentFormatting == 'undefined') { Confluence.Templates.ContentFormatting = {}; }


Confluence.Templates.ContentFormatting.style = function(opt_data, opt_ignored) {
  return '<style>' + ((opt_data['import']) ? '@import url(\'' + soy.$$escapeHtml(opt_data['import']) + '\');\n' : '') + '@media ' + soy.$$escapeHtml(opt_data.media) + ' {\n' + soy.$$filterNoAutoescape(opt_data.macroBodyWithHtml) + '\n}</style>';
};
if (goog.DEBUG) {
  Confluence.Templates.ContentFormatting.style.soyTemplateName = 'Confluence.Templates.ContentFormatting.style';
}

}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.content-formatting-macros:content-formatting-macros-resources', location = '/templates/table.soy' */
// This file was automatically generated from table.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace Confluence.Templates.ContentFormatting.
 */

if (typeof Confluence == 'undefined') { var Confluence = {}; }
if (typeof Confluence.Templates == 'undefined') { Confluence.Templates = {}; }
if (typeof Confluence.Templates.ContentFormatting == 'undefined') { Confluence.Templates.ContentFormatting = {}; }


Confluence.Templates.ContentFormatting.table = function(opt_data, opt_ignored) {
  return '<table border="1" cellpadding="2" cellspacing="0" style="border-collapse:collapse;">' + soy.$$filterNoAutoescape(opt_data.macroBody) + '</table>';
};
if (goog.DEBUG) {
  Confluence.Templates.ContentFormatting.table.soyTemplateName = 'Confluence.Templates.ContentFormatting.table';
}


Confluence.Templates.ContentFormatting.tableRow = function(opt_data, opt_ignored) {
  return '<tr>' + soy.$$filterNoAutoescape(opt_data.macroBody) + '</tr>';
};
if (goog.DEBUG) {
  Confluence.Templates.ContentFormatting.tableRow.soyTemplateName = 'Confluence.Templates.ContentFormatting.tableRow';
}


Confluence.Templates.ContentFormatting.tableCell = function(opt_data, opt_ignored) {
  return '<td ' + ((opt_data.rowspan) ? 'rowspan="' + soy.$$escapeHtml(opt_data.rowspan) + '"' : '') + ((opt_data.colspan) ? 'colspan="' + soy.$$escapeHtml(opt_data.colspan) + '"' : '') + '>' + soy.$$filterNoAutoescape(opt_data.macroBody) + '</td>';
};
if (goog.DEBUG) {
  Confluence.Templates.ContentFormatting.tableCell.soyTemplateName = 'Confluence.Templates.ContentFormatting.tableCell';
}


Confluence.Templates.ContentFormatting.tableHead = function(opt_data, opt_ignored) {
  return '<thead>' + soy.$$filterNoAutoescape(opt_data.macroBody) + '</thead>';
};
if (goog.DEBUG) {
  Confluence.Templates.ContentFormatting.tableHead.soyTemplateName = 'Confluence.Templates.ContentFormatting.tableHead';
}


Confluence.Templates.ContentFormatting.tableHeaderCell = function(opt_data, opt_ignored) {
  return '<th>' + soy.$$filterNoAutoescape(opt_data.macroBody) + '</th>';
};
if (goog.DEBUG) {
  Confluence.Templates.ContentFormatting.tableHeaderCell.soyTemplateName = 'Confluence.Templates.ContentFormatting.tableHeaderCell';
}


Confluence.Templates.ContentFormatting.tableBody = function(opt_data, opt_ignored) {
  return '<tbody>' + soy.$$filterNoAutoescape(opt_data.macroBody) + '</tbody>';
};
if (goog.DEBUG) {
  Confluence.Templates.ContentFormatting.tableBody.soyTemplateName = 'Confluence.Templates.ContentFormatting.tableBody';
}

}catch(e){WRMCB(e)};