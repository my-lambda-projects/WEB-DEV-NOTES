/*! License: FQ7fG5UvNu.LICENSE.txt */
( window.webpackJsonp = window.webpackJsonp || [] ).push( [
  [ "atlassian-editor-plugins~9f9b18d1" ], {
    "+7yL": function ( e, t, n ) {
      var o = n( "qNQp" );
      "string" == typeof o && ( o = [
        [ e.i, o, "" ]
      ] );
      var a = {
        hmr: !0,
        transform: void 0,
        insertInto: void 0
      };
      n( "cuK8" )( o, a );
      o.locals && ( e.exports = o.locals )
    },
    "32IQ": function ( e, t, n ) {
      ( e.exports = n( "PBB4" )( !1 ) ).push( [ e.i, ".status-macro {\n\tmin-width: 76px;\n\tpadding: 2px 5px 1px 5px\n}\n", "" ] )
    },
    "3eVS": function ( e, t, n ) {
      var o = n( "32IQ" );
      "string" == typeof o && ( o = [
        [ e.i, o, "" ]
      ] );
      var a = {
        hmr: !0,
        transform: void 0,
        insertInto: void 0
      };
      n( "cuK8" )( o, a );
      o.locals && ( e.exports = o.locals )
    },
    "4DxN": function ( e, t, n ) {
      ( e.exports = n( "PBB4" )( !1 ) ).push( [ e.i, "/* Styles for draggable decoration */\ntable.draggable {\n    margin-left: -10px;\n    margin-top: -10px;\n}\n\ntable.draggable:hover > tbody > tr > td.draggable-table,\ntable.draggable:hover > tbody > tr > td.draggable-column,\ntable.draggable:hover > tbody > tr > td.draggable-row {\n    background-color: #777;\n    border-top: 1px solid #777;\n    border-left: 1px solid #777;\n}\n\ntable.draggable:hover > tbody > tr > td.draggable-table,\ntable.draggable:hover > tbody > tr > td.draggable-column {\n    border-right: 1px solid #aaa;\n}\n\ntable.draggable:hover > tbody > tr > td.draggable-table,\ntable.draggable:hover > tbody > tr > td.draggable-row {\n    border-bottom: 1px solid #aaa;\n}\n\ntd.draggable-table,\ntd.draggable-column,\ntd.draggable-row {\n    background-color: transparent;\n    border-top: 1px solid transparent;\n    border-left: 1px solid transparent;\n    cursor: move;\n}\n\ntd.draggable-table,\ntd.draggable-column {\n    border-right: 1px solid transparent;\n}\n\ntd.draggable-table,\ntd.draggable-row {\n    border-bottom: 1px solid transparent;\n}\n\ntd.draggable-column {\n    height: 10px;\n}\n\ntd.draggable-row {\n    width: 10px;\n}\n\n/*.detached {*/\n    /*position: absolute;*/\n/*}*/\n\n.wiki-content img.confluence-embedded-image,\n.wiki-content img.editor-inline-macro,\n.wiki-content table.wysiwyg-macro {\n    cursor: move;\n}\n\n.wiki-content table.wysiwyg-macro > tbody > tr > td.wysiwyg-macro-body {\n    cursor: text;\n}\n\n#move-indicator {\n    font-weight: normal !important;\n}", "" ] )
    },
    "5wKT": function ( e, t, n ) {
      ( e.exports = n( "PBB4" )( !1 ) ).push( [ e.i, '/* Insert Wiki Select Dialog*/\n.aui-dialog .wiki-parser-selector {\n    font-size: 14px;\n    margin-right: 5px;\n}\n\n.insert-wiki-markup-panel div,\n.insert-wiki-markup-panel div form {\n    height: 100%;\n    text-align: center;\n}\n.insert-wiki-markup-panel .spinner {\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    margin-top: -73px;\n    margin-left: -60px;\n}\n\n#insert-wiki-info-title {\n    text-align: left;\n    margin-left: 10px;\n}\n\n#insert-wiki-markup-form  {\n    height: 95%;\n}\n\n#insert-wiki-markup-form .wiki-title span {\n    -webkit-box-sizing: border-box;\n    -moz-box-sizing: border-box;\n    box-sizing: border-box;\n    display: -moz-inline-stack;\n    display: inline-block;\n    margin-bottom: 10px;\n    max-width: 48%;\n    text-align: left;\n    vertical-align: middle;\n    width: 48%;\n}\n#insert-wiki-markup-form .wiki-title span:first-child {\n    margin-right: 20px;\n}\n\n#insert-wiki-textarea-preview,\n#insert-wiki-textarea {\n    -webkit-box-sizing: border-box;\n    -moz-box-sizing: border-box;\n    box-sizing: border-box;\n    display: -moz-inline-stack;\n    display: inline-block;\n    font-size: 14px;\n    height: 84%;\n    max-width: 48%;\n    vertical-align: middle;\n    width: 48%;\n    resize: none;\n}\n\n#insert-wiki-textarea.originalDefault {\n    height: 100%;\n    min-width: 100%;\n    width: 100%;\n}\n\n/* Insert Wiki Dialog*/\n#insert-wiki-textarea {\n    font-family: "Monaco", "Consolas", "Courier New", "monospace";\n    margin-right: 20px;\n}\n/* Insert Wiki preview*/\n#insert-wiki-textarea-preview {\n    border: 1px solid #ccc;\n    border-radius: 3px;\n    position: relative;\n}\n#insert-wiki-textarea-preview iframe {\n    border: 0;\n    height: 100%;\n    left: 0;\n    min-height: 100%;\n    overflow: hidden;\n    position: absolute;\n    top: 0;\n    width: 100%;\n}\n', "" ] )
    },
    CxWt: function ( e, t, n ) {
      var o = n( "lB22" );
      "string" == typeof o && ( o = [
        [ e.i, o, "" ]
      ] );
      var a = {
        hmr: !0,
        transform: void 0,
        insertInto: void 0
      };
      n( "cuK8" )( o, a );
      o.locals && ( e.exports = o.locals )
    },
    "O/dN": function ( e, t, n ) {
      ( e.exports = n( "PBB4" )( !1 ) ).push( [ e.i, ".tc-aui-help-tip.aui-inline-dialog>.contents{-ms-box-sizing:border-box;box-sizing:border-box;padding:16px;position:relative}.tc-aui-help-tip.aui-inline-dialog .tc-helptip-body,.tc-aui-help-tip.aui-inline-dialog .tc-helptip-link,.tc-aui-help-tip.aui-inline-dialog .tc-helptip-title{margin-bottom:.5em}.tc-aui-help-tip.aui-inline-dialog .tc-helptip-body{color:#292929}.tc-aui-help-tip.aui-inline-dialog .tc-helptip-title{color:#292929;font-weight:400;margin:0}.tc-aui-help-tip.aui-inline-dialog .tc-helptip-body h3{margin-top:0}", "" ] )
    },
    OGf2: function ( e, t, n ) {
      var o = n( "O/dN" ),
        a = n( "7l8p" );
      "string" == typeof o && ( o = [
        [ e.i, o, "" ]
      ] ), e.exports = o.locals || {}, e.exports._getContent = function () {
        return o
      }, e.exports._getCss = function () {
        return o.toString()
      }, e.exports._insertCss = function ( e ) {
        return a( o, e )
      }
    },
    Q2fH: function ( e, t, n ) {
      "use strict";
      n.d( t, "a", ( function () {
        return a
      } ) ), n.d( t, "c", ( function () {
        return r
      } ) ), n.d( t, "b", ( function () {
        return i
      } ) );
      var o = n( "jUyC" );

      function a( e, t, n, a ) {
        return "function" == typeof a ? Object( o.default )( e ).bind( t, n, a ) : Object( o.default )( e ).bind( t, n )
      }

      function r( e, t, n ) {
        return Object( o.default )( e ).unbind( t, n )
      }

      function i( e, t, n ) {
        return Object( o.default )( e ).trigger( t, n )
      }
    },
    "QEi/": function ( e, t, n ) {
      "use strict";
      n.r( t );
      var o = n( "M2LZ" ),
        a = n( "bfgX" );
      const r = "confluence.spa.editor";
      var i = n( "cGYM" );
      const c = ( e, t ) => {
        Object.keys( t ).forEach( e => {
          t[ e ] = Object( i.a )( t[ e ] )
        } ), Object( a.b )( "analytics", {
          name: `${r}.plugins.${e}`,
          data: t
        } )
      };
      var l = n( "WM+X" ),
        s = n( "jUyC" ),
        d = n( "Jygk" ),
        u = n.n( d ),
        f = n( "Zf7T" );

      function m() {
        const e = [],
          t = {};
        let n, o;
        u.a.tinymce.Env.ie ? ( n = "\ufeff{$caret}", o = "<p>{$caret}</p>" ) : u.a.tinymce.Env.webKit ? ( n = "\ufeff{$caret}<br>", o = n ) : ( n = "\ufeff{$caret}", o = n );
        const a = {
          insertTextPlaceHolder( e ) {
            const t = `<span class="text-placeholder">${n}</span>`;
            const o = Object( s.default )( "<div></div>" ).append( t );
            e && o.find( ".text-placeholder" ).html( e ), u.a.tinymce.activeEditor.execCommand( "mceInsertContent", !1, o.html() )
          },
          removePlaceholder( e ) {
            const t = u.a.tinymce.activeEditor,
              a = Object( s.default )( t.getBody() );
            let r = n;
            const i = e.parentElement;
            "LI" === i.nodeName && ( r = o );
            const c = t.dom.create( "span", {
              id: "placeholder-cursor"
            }, "&nbsp;" );
            i.replaceChild( c, e );
            const l = a.find( "#placeholder-cursor" )[ 0 ];
            t.selection.select( l.firstChild ), t.dom.remove( l, !1 ), t.execCommand( "mceInsertContent", !1, r )
          },
          addPlaceholderType( n ) {
            n && n.type && ( e.push( n ), t[ n.type ] = n )
          },
          getPlaceholderTypes: () => [].concat( e ),
          getPlaceholderType: e => t[ e ]
        };
        return Object( f.b )().Placeholder = a, a
      }
      var p = n( "JGxT" );

      function g() {
        return {
          name: "textplaceholder",
          canHandleElement: e => e.hasClass( "text-placeholder" ),
          handle( e ) {
            if ( "click" !== e.e.type && "mouseup" !== e.e.type ) return;
            const t = m.getPlaceholderTypes(),
              n = e.containerEl,
              o = Object( s.default )( n ),
              a = o.attr( "data-placeholder-type" ),
              r = [];

            function i( e, t, n ) {
              return {
                className: "text-placeholder-property-panel-type-item text-placeholder-property-panel-type-" + e,
                text: t,
                tooltip: n,
                selected: a === e,
                click() {
                  ! function ( e ) {
                    "default" === e ? o.removeAttr( "data-placeholder-type" ) : o.attr( "data-placeholder-type", e );
                    const t = Object( s.default )( ".text-placeholder-property-panel-type-" + e );
                    t.parent().find( ".text-placeholder-property-panel-type-item" ).removeClass( "selected" ), t.addClass( "selected" )
                  }( e )
                }
              }
            }
            const c = i( "default", u.a.tinymce.activeEditor.translate( "property.panel.textplaceholder.display.default" ), u.a.tinymce.activeEditor.translate( "property.panel.textplaceholder.display.default.tooltip" ) );
            let l;
            c.selected = !a, r.push( c );
            for ( let s = 0, d = t.length; s < d; s++ ) l = t[ s ], r.push( i( l.type, l.label, l.tooltip ) );
            r.push( null ), r.push( {
              className: "text-placeholder-property-panel-remove-button",
              text: u.a.tinymce.activeEditor.translate( "property.panel.textplaceholder.remove" ),
              click() {
                u.a.Confluence.PropertyPanel.destroy(), m.removePlaceholder( o )
              }
            } ), u.a.Confluence.PropertyPanel.createFromButtonModel( "textplaceholder", n, r, {
              anchorIframe: Object( f.b )().getEditorFrame()
            } )
          }
        }
      }

      function h() {
        const e = m(),
          t = {
            click: !1,
            keypress: !0
          },
          n = u.a.tinymce.VK,
          o = u.a.tinymce.dom.Event,
          r = "template" === p.a.get( "content-type" );

        function i( t ) {
          Object( a.b )( "cursor-target-refresh" ), Object( s.default )( "#rte-button-insert-placeholder" ).click( t => {
            t.preventDefault(), e.insertTextPlaceHolder()
          } ), t.on( "KeyPress", e => {
            if ( 13 === e.keyCode && !e.shiftKey ) {
              const n = t.selection.getNode(),
                o = Object( s.default )( n ).closest( ".text-placeholder" );
              if ( o.length && Object( f.b )().Cursor.isCursorAtEnd( t, t.selection.getRng(), n ) ) return Object( f.b )().Cursor.insertParagraph( t, o, !0 ), u.a.tinymce.dom.Event.cancel( e )
            }
          }, !0 )
        }
        const c = {
          UL: !0,
          OL: !0,
          LI: !0,
          TABLE: !0,
          TBODY: !0
        };

        function l( e ) {
          return !c[ e.nodeName ]
        }

        function d( r ) {
          function i() {
            const e = m();
            e && r.selection.select( e )
          }

          function c( e ) {
            e.off( "KeyDown", d ), e.off( "KeyPress", f ), e.off( "Click", f )
          }

          function d( t ) {
            const a = m();
            return t.keyCode === n.LEFT || t.keyCode === n.UP ? ( function ( e, t ) {
              let n, o = t.previousSibling;
              for ( ; t && !o; ) o = ( t = t.parentNode ).previousSibling;
              if ( o ) {
                for ( n = o; !l( n ) && n.lastChild; ) n = n.lastChild;
                e.selection.select( n.lastChild || n ), e.selection.collapse( !1 ), e.selection.normalize()
              }
            }( r, a ), o.cancel( t ) ) : t.keyCode === n.RIGHT || t.keyCode === n.DOWN ? ( function ( e, t ) {
              let n, o = t.nextSibling;
              for ( ; t && !o; ) o = ( t = t.parentNode ).nextSibling;
              if ( o ) {
                for ( n = o; !l( n ) && n.firstChild; ) n = n.firstChild;
                e.selection.select( n.firstChild || n ), e.selection.collapse( !0 ), e.selection.normalize()
              }
            }( r, a ), o.cancel( t ) ) : t.keyCode === n.BACKSPACE || t.keyCode === n.DELETE ? ( e.removePlaceholder( a ), o.cancel( t ) ) : void 0
          }

          function f( n ) {
            if ( u.a.tinymce.Env.gecko && !n.isChar && "keypress" === n.type ) return;
            const o = m();
            if ( o ) {
              const r = o.getAttribute( "data-placeholder-type" );
              ( function ( n, o ) {
                const a = e.getPlaceholderType( n );
                return !!s.default.extend( {}, t, a && a.activation )[ o ]
              } )( r, n.type ) && ( e.removePlaceholder( o ), Object( a.b )( "editor.text-placeholder.activated", {
                placeholderType: r || "",
                triggerEvent: n
              } ) )
            }
          }

          function m() {
            const e = Object( s.default )( r.getBody() ).find( ".text-placeholder.selected" );
            return e.length ? e[ 0 ] : ( c( r ), null )
          }
          r.on( "NodeChange", ( function ( e ) {
            const t = e.element,
              n = Object( s.default )( t ).closest( ".text-placeholder" );
            Object( s.default )( r.getBody() ).find( ".text-placeholder.selected" ).not( n ).removeClass( "selected" ), n.length ? ( n.hasClass( "selected" ) || ( n.addClass( "selected" ), function ( e ) {
              e.on( "KeyDown", d, !0 ), e.on( "KeyPress", f, !0 ), e.on( "Click", f, !0 )
            }( r ) ), setTimeout( i, 0 ) ) : c( r )
          } ), !0 )
        }
        return {
          init( e ) {
            e.on( "init", () => {
              ( r ? i : d )( e ),
              function ( e ) {
                const t = Object( s.default )( e.getDoc() ).find( "head" );
                s.default.browser.msie ? t.append( '<style type="text/css">.wiki-content .text-placeholder { display: inline; }</style>' ) : t.append( '<style type="text/css">.wiki-content .text-placeholder { display: inline-block; }</style>' )
              }( e )
            } )
          },
          getInfo: () => ( {
            longname: "Text Placeholder Plugin",
            author: "Atlassian",
            authorurl: "http://www.atlassian.com",
            infourl: "http://www.atlassian.com",
            version: "1.0"
          } )
        }
      }
      var b = n( "7LQG" );
      let y = 0;
      const C = {
        updateNode( e, t ) {
          const n = u.a.tinymce.activeEditor,
            o = Object( s.default )( e, n.getDoc() ),
            r = "confluence.update-node-" + y++;
          Object( a.b )( "synchrony.stop", {
            id: r
          } );
          const i = C.prepareNodeForUpdate( o );
          return C.replaceNode( o, t ).fail( i ).always( () => {
            Object( a.b )( "synchrony.start", {
              id: r
            } )
          } ).promise()
        },
        storeNodeState( e, t ) {
          const n = {};
          let o;
          for ( let a = 0, r = t.length; a < r; a++ ) o = t[ a ], n[ o ] = e.attr( o );
          return () => {
            for ( const t in n ) e.attr( t, n[ t ] )
          }
        },
        prepareNodeForUpdate( e ) {
          let t = null;
          return e.is( "img" ) && ( t = C.storeNodeState( e, [ "width", "height", "src", "class" ] ), e.addClass( "image-hotswap" ).attr( {
            src: b.a + "/images/border/spacer.gif",
            width: e.attr( "width" ),
            height: e.attr( "height" )
          } ) ), t
        },
        replaceNode( e, t ) {
          const n = C.getDoc(),
            o = Object( s.default )( t, n ),
            r = Object( s.default )( e, n ),
            i = "confluence.replace-node-" + y++;
          return Object( a.b )( "synchrony.stop", {
            id: i
          } ), s.default.Deferred( ( function () {
            const e = this;
            o.is( "img" ) ? ( o[ 0 ].onload = function () {
              this.onload = null, e.resolve( this )
            }, s.default.browser.opera && ( o[ 0 ].src = o.attr( "src" ) ), n.createDocumentFragment().appendChild( o[ 0 ] ) ) : e.resolve( o[ 0 ] )
          } ) ).always( () => {
            Object( a.b )( "synchrony.start", {
              id: i
            } )
          } ).done( e => {
            r.replaceWith( e )
          } ).promise()
        },
        replaceSelection( e ) {
          const t = u.a.tinymce.activeEditor,
            n = t.selection.getRng( !0 ),
            o = t.getDoc().createRange(),
            a = Object( s.default )( e ).clone( !0, !1 )[ 0 ];
          n.deleteContents(), 3 === n.startContainer.nodeType && "" === n.startContainer.nodeValue && ( n.startContainer.nodeValue = Object( f.b )().HIDDEN_CHAR ), n.insertNode( a );
          const r = t.getDoc().createTextNode( Object( f.b )().HIDDEN_CHAR );
          t.dom.insertAfter( r, a );
          const i = r;
          return o.setStartBefore( i ), o.setEndAfter( i ), o.collapse( !1 ), t.selection.setRng( o ), a
        },
        normalize( e ) {
          const t = u.a.tinymce.activeEditor,
            n = t.selection.getRng( !0 );
          let o, a, r, i = [];
          e && e.childNodes && ( u.a.tinymce.isWebKit ? o = n : u.a.tinymce.isGecko && ( o = n.cloneRange(), a = {
            startIndex: [ ...e.childNodes ].indexOf( n.startContainer ),
            startOffset: o.startOffset,
            endIndex: [ ...e.childNodes ].indexOf( n.endContainer ),
            endOffset: o.endOffset
          }, ( a.startIndex > -1 || a.endIndex > -1 ) && ( i = function ( e ) {
            const t = [];
            let n = 0;
            return e.childNodes.forEach( ( e, o ) => {
              const a = {},
                r = t[ o - 1 ] || {};
              a.isTextNode = 3 === e.nodeType, a.textNodesBefore = ( a.isTextNode && r.isTextNode ? 1 : 0 ) + ~~r.textNodesBefore, a.precedingTextLength = n, n = a.isTextNode ? n + e.nodeValue.length : 0, t.push( a )
            } ), t
          }( e ) ) ), e.normalize(), u.a.tinymce.isGecko && ( ( r = i[ a.startIndex ] ) && ( a.newStartIndex = a.startIndex - r.textNodesBefore, a.newStartOffset = a.startOffset + r.precedingTextLength, o.setStart( e.childNodes[ a.newStartIndex ], a.newStartOffset ) ), ( r = i[ a.endIndex ] ) && ( a.newEndIndex = a.endIndex - r.textNodesBefore, a.newEndOffset = a.endOffset + r.precedingTextLength, o.setEnd( e.childNodes[ a.newEndIndex ], a.newEndOffset ) ) ), o && t.selection.setRng( o ) )
        },
        getDoc: () => s.default.browser.mozilla || s.default.browser.opera ? document : u.a.tinymce.activeEditor.getDoc(),
        isolateSelectedRange() {
          const e = u.a.tinymce.activeEditor,
            t = C.getDoc(),
            n = e.selection,
            o = n.getRng( !0 ),
            a = o.startContainer,
            r = o.startOffset,
            i = o.endContainer;
          let c, l = o.endOffset;
          if ( o.collapsed ) return o;

          function d( n, o, a ) {
            let r, i = e.dom.getParent( n, e.dom.isBlock );
            i || ( i = e.getBody() );
            const c = function ( e, n, o, a ) {
              let r, i, c = null,
                l = null;
              const d = a ? "nextSibling" : "previousSibling";
              if ( r = 0 === n, !r && a && ( r = 3 === e.nodeType ? n === e.length : n === e.childNodes.length ), r )
                for ( c = e[ d ], l = e; null === c; ) {
                  if ( l === o ) return;
                  if ( l.parentNode === o ) break;
                  l = l.parentNode, c = l[ d ]
                } else 3 === e.nodeType ? ( i = e.data, e.data = i.slice( n ), c = t.createTextNode( i.slice( 0, n ) ), l = e, Object( s.default )( c ).insertBefore( l ), a && ( i = l, l = c, c = i ) ) : ( l = e.childNodes[ n - ( a ? 1 : 0 ) ], c = l[ d ] );
              return [ l, c ]
            }( n, o, i, a );
            return r = c ? c[ 1 ] ? function ( e, t, n, o ) {
              let a, r, i, c;
              for ( ; t !== n && t.parentNode !== n; ) {
                if ( r = t.parentNode, a = r.cloneNode( !1 ), o )
                  for ( Object( s.default )( a ).insertAfter( r ), i = e; i; ) c = i.nextSibling, a.appendChild( i ), i = c;
                else
                  for ( Object( s.default )( a ).insertBefore( r ), i = r.firstChild; i !== t; ) c = i.nextSibling, a.appendChild( i ), i = c;
                e = a, t = r
              }
              return t
            }( c[ 1 ], c[ 0 ], i, a ) : c[ 0 ] : void 0, r
          }
          a === i && ( c = l - r );
          const f = d( a, r );
          f && o.setStartBefore( f ), a !== o.startContainer && ( l = c || l );
          const m = d( i, l, !0 );
          return m && o.setEndAfter( m ), n.setRng( o ), o
        }
      };
      var w = C;
      var v = n( "HvGa" ),
        O = n.n( v );
      const x = e => {
        const t = document.querySelector( "meta[name=ajs-enabled-dark-features]" );
        if ( t ) {
          const n = t.content.split( "," );
          return n.indexOf( e ) > -1 && -1 === n.indexOf( e + ".disable" )
        }
      };
      var k = n( "bQlP" );

      function T() {
        let e = p.a.get( "content-id" );
        return +e || ( e = p.a.get( "page-id" ) ), +e || ( e = "0" ), e
      }

      function j( e ) {
        return e.closest( A ).length > 0
      }

      function E( e, t, n ) {
        j( e ) && ( t.disable(), document.getElementById( "rte-button-insert-table" ).setAttribute( "data-tooltip", n.translate( "tinymce.tablepicker.nested_table_unsupported" ) ) )
      }
      const A = x( k.d ) ? "BLOCKQUOTE, TABLE.confluenceTable, LI" : null;

      function I( e ) {
        return Object( s.default )( e ).hasClass( "wysiwyg-macro" )
      }

      function S( e, t ) {
        let n;
        if ( e.macro && e.contentId ) n = {
          type: "POST",
          url: b.a + "/rest/tinymce/1/macro/placeholder",
          contentType: "application/json; charset=utf-8",
          data: s.default.toJSON( e ),
          dataType: "text"
        };
        else {
          if ( !e.url || !e.type ) throw new Error( "illegal argument received: " + e );
          n = e
        }
        const o = s.default.Deferred(),
          r = u.a.tinymce.activeEditor;
        let i;
        if ( !t ) {
          const e = "macro-" + ( new Date ).getTime();
          i = r.dom.create( "span", {
            id: e
          } ), r.selection.setNode( i ), t = i = r.dom.select( "#" + e )[ 0 ], o.fail( () => {
            Object( s.default )( i ).remove()
          } )
        }
        return s.default.extend( n, {
          timeout: this.DEFAULT_INSERT_MACRO_TIMEOUT
        } ), O.a.Editor.UI.setButtonsState( !1 ), s.default.ajax( n ).done( ( function ( e ) {
          function n( e ) {
            return e && e.parentNode
          }
          "<" !== e[ 0 ] && ( e = document.createTextNode( e ) ), n( t ) ? w.updateNode( t, e ).done( t => {
            o.resolve( t, e )
          } ).fail( o.reject ) : o.rejectWith( this, arguments )
        } ) ).fail( ( function ( e, t, n ) {
          o.rejectWith( this, arguments )
        } ) ), o.done( ( e, t ) => {
          O.a.Editor.UI.setButtonsState( !0 ), I( e ) && /P|H\d/.test( e.parentNode.nodeName ) && r.dom.split( e.parentNode, e ),
            function ( e ) {
              const t = u.a.tinymce.activeEditor,
                n = t.getDoc(),
                o = t.selection.getRng( !0 );
              if ( I( e ) ) {
                !u.a.tinymce.isIE && Object( s.default )( "p, pre", e ).each( ( e, t ) => {
                  0 === t.childNodes.length && t.appendChild( n.createElement( "br" ) )
                } );
                const a = t.dom.select( ".wysiwyg-macro-body", e )[ 0 ].firstChild;
                a && ( o.setStart( a, 0 ), o.setEnd( a, 0 ) )
              } else o.setStartAfter( e ), o.setEndAfter( e );
              t.selection.setRng( o )
            }( e ), r.nodeChanged(), Object( f.b )().showElement( e ), r.selection.onSetContent.dispatch( r.selection, {
              content: t,
              format: "html"
            } ), u.a.tinymce.activeEditor.undoManager.add(), Object( a.b )( "macro-browser.macro-inserted" )
        } ).fail( () => {
          O.a.Editor.UI.setButtonsState( !0 )
        } ), o.promise()
      }
      const M = {
        DEFAULT_INSERT_MACRO_TIMEOUT: 5e3,
        insertMacro: S,
        isInMacro: e => ( e.jquery ? e : Object( s.default )( e ) ).closest( ".wysiwyg-macro" ).length > 0,
        updateMacro: ( e, t, n, o ) => S( {
          contentId: T(),
          macro: {
            name: n,
            params: e,
            body: t || ""
          }
        }, o )
      };
      var B = M;
      const N = {
        storedRange: null,
        bookmark: null,
        getCurrentNode: () => Object( s.default )( u.a.tinymce.activeEditor.selection.getNode() ),
        isMacroDiv: e => Object( s.default )( e ).hasClass( "wysiwyg-macro" ),
        isMacroTag( e ) {
          const t = Object( s.default )( e );
          return t.hasClass( "wysiwyg-macro" ) || t.hasClass( "editor-inline-macro" )
        },
        isBodylessMacro: e => Object( s.default )( e ).hasClass( "editor-inline-macro" ),
        isMacroWithBody: e => Object( s.default )( e ).hasClass( "wysiwyg-macro" ),
        isMacroStartTag: e => Object( s.default )( e ).hasClass( "wysiwyg-macro-starttag" ),
        isMacroEndTag: e => Object( s.default )( e ).hasClass( "wysiwyg-macro-endtag" ),
        isMacroBody: e => Object( s.default )( e ).hasClass( "wysiwyg-macro-body" ),
        hasMacroBody: e => "true" == Object( s.default )( e ).attr( "macrohasbody" ),
        getNestingMacros( e ) {
          const t = Object( s.default )( e || N.getCurrentNode() ),
            n = [];
          return t.parents( ".wysiwyg-macro" ).each( ( e, t ) => {
            n.push( Object( s.default )( t ).attr( "data-macro-name" ) )
          } ), n
        },
        logMCESelection( e ) {
          u.a.tinymce.activeEditor.selection
        },
        getSelectedMacro() {
          const e = N.getCurrentNode();
          return N.isMacroDiv( e ) ? e : B.isInMacro( e )
        },
        openMacro( e ) {
          O.a.MacroBrowser.open( {
            selectedMacro: e,
            onComplete: N.macroBrowserComplete,
            onCancel: N.macroBrowserCancel
          } )
        },
        editMacro( e ) {
          const t = Object( s.default )( e );
          N.editedMacroDiv = t[ 0 ];
          const n = u.a.tinymce.activeEditor.serializer.serialize( t.clone()[ 0 ], {
            forced_root_block: !1
          } );
          u.a.tinymce.activeEditor.selection.select( t[ 0 ] ), Object( f.b )().BookmarkManager.storeBookmark(), s.default.ajax( {
            type: "POST",
            contentType: "application/json; charset=utf-8",
            url: b.a + "/rest/tinymce/1/macro/definition",
            data: s.default.toJSON( {
              contentId: T(),
              macroHtml: n
            } ),
            dataType: "text",
            success( e ) {
              N.openMacro( s.default.secureEvalJSON( e ) )
            }
          } )
        },
        macroBrowserToolbarButtonClicked( e ) {
          const t = u.a.tinymce.activeEditor,
            n = N.getCurrentNode();
          Object( f.b )().BookmarkManager.storeBookmark();
          const o = s.default.extend( {
            presetMacroName: null,
            nestingMacros: N.getNestingMacros( n ),
            onComplete: N.macroBrowserComplete,
            onCancel: N.macroBrowserCancel,
            mode: "insert",
            selectedHtml: "",
            selectedText: ""
          }, e );
          if ( e && !e.ignoreEditorSelection && ( o.selectedHtml = t.selection.getContent(), o.selectedText = t.selection.getContent( {
              format: "text"
            } ) ), "function" != typeof O.a.MacroBrowser.Model.addMacro ) return O.a.MacroBrowser.open( o );
          if ( o.presetMacroMetadata ) O.a.MacroBrowser.open( o );
          else if ( o.presetMacroName ) {
            const e = O.a.MacroBrowser.getMacroMetadata( o.presetMacroName );
            e ? ( o.presetMacroMetadata = e, O.a.MacroBrowser.open( o ) ) : O.a.MacroBrowser.Rest.fetchMacroMetadataDetails( {
              id: o.presetMacroName,
              successCallback: e => {
                e && e.details ? ( O.a.MacroBrowser.Model.addMacro( e.details ), o.presetMacroMetadata = O.a.MacroBrowser.getMacroMetadata( o.presetMacroName ), O.a.bind( "reset.complete", ( function e() {
                  O.a.MacroBrowser.open( o ), O.a.unbind( "reset.complete", e )
                } ) ), O.a.trigger( "reset.rte" ) ) : O.a.MacroBrowser.open( o )
              },
              errorCallback: e => {
                console.log( "AJS.MacroBrowser.Rest.fetchMacroMetadataDetails ERROR", e )
              }
            } )
          } else O.a.MacroBrowser.open( o )
        },
        macroBrowserComplete( e ) {
          const t = {
            contentId: p.a.get( "content-id" ) || "0",
            macro: {
              name: e.name,
              params: e.params,
              defaultParameterValue: e.defaultParameterValue,
              body: e.bodyHtml
            }
          };
          Object( f.b )().BookmarkManager.restoreBookmark(), N.editedMacroDiv ? ( B.insertMacro( t, N.editedMacroDiv ), delete N.editedMacroDiv ) : B.insertMacro( t )
        },
        macroBrowserCancel() {
          Object( f.b )().BookmarkManager.restoreBookmark(), N.editedMacroDiv = null, N.editedMacro = null
        }
      };
      var R = N;

      function _( e ) {
        return e && 3 === e.nodeType && 0 === e.nodeValue.length
      }
      var P = {
        isCursorAtStartOf( e, t ) {
          return t.collapsed && this.isRangeAtStartOf( e, t )
        },
        isRangeAtStartOf( e, t ) {
          if ( !t || !t.startContainer ) throw new Error( "range is invalid. received: " + t );
          if ( !e || !e.nodeType ) throw new Error( "context is invalid. received: " + e );
          const n = t.startContainer;
          let o;
          if ( 3 === n.nodeType ) {
            if ( 0 !== t.startOffset ) return !1;
            o = n
          } else if ( o = n.childNodes[ t.startOffset ], void 0 === o && n.childNodes.length > 0 ) return !1;
          const a = new u.a.tinymce.dom.TreeWalker( o, e );
          let r;
          do {
            r = a.prev( !0 )
          } while ( _( r ) );
          return void 0 === r
        },
        isCursorAtEndOf( e, t ) {
          return t.collapsed && this.isRangeAtEndOf( e, t )
        },
        isRangeAtEndOf( e, t ) {
          if ( !t || !t.endContainer ) throw new Error( "range is invalid. received: " + t );
          if ( !e || !e.nodeType ) throw new Error( "container is invalid. received: " + e );
          const n = t.endContainer;
          let o;
          if ( 3 === n.nodeType ) {
            if ( t.endOffset != n.nodeValue.length ) return !1;
            o = n
          } else o = n.childNodes[ 0 === t.endOffset ? t.endOffset : t.endOffset - 1 ];
          const a = new u.a.tinymce.dom.TreeWalker( o, e );
          let r;
          do {
            r = a.next( !0 )
          } while ( _( r ) );
          return void 0 === r || "BR" === r.nodeName && void 0 === a.next( !0 )
        },
        setCursorAtStartOfContents( e ) {
          if ( !e ) throw new Error( "element is required." );
          if ( 1 !== e.nodeType && 3 !== e.nodeType ) throw new Error( "invalid argument: expected a DOM element or text node, got: " + e );
          const t = u.a.tinymce.activeEditor,
            n = t.dom.createRng();
          [ "br", "img" ].includes( e.nodeName.toLowerCase() ) ? ( n.setStartBefore( e ), n.setEndBefore( e ), t.selection.setRng( n ) ) : ( t.selection.select( e, !0 ), t.selection.collapse( !0 ) )
        }
      };

      function $( e, t ) {
        return "undefined" != typeof document && document.addEventListener ? document.addEventListener( e, t ) : null
      }
      n( "CxWt" );
      const H = () => {
        const e = u.a.Confluence.PropertyPanel,
          t = [];
        return Object( a.a )( "add-handler.property-panel", ( e, n ) => {
          n && t.push( n )
        } ), {
          init: n => {
            const o = () => !!e.current;
            let r;
            const i = ( r, i ) => {
              const c = {
                  focusedEl: i,
                  focusedNodeName: i.nodeName && i.nodeName.toLowerCase(),
                  ed: n,
                  e: s.default.extend( {}, r )
                },
                l = ( e => {
                  if ( e.is( "img" ) ) return e[ 0 ];
                  const t = e.closest( "a,table,.wysiwyg-macro,.editor-inline-macro,.text-placeholder" );
                  return t.length ? t[ 0 ] : ""
                } )( Object( s.default )( i ) ),
                d = !!Object( s.default )( i ).closest( "table:not(.wysiwyg-macro,.editor-inline-macro)" ).length;
              const u = !!Object( s.default )( ".toolbar-contextual" ).length;
              if ( c.containerEl = l, Object( a.b )( "user-blurred-rte-element", c ), l && !( e => "click" == e.type && ( e.which ? 3 === e.which : e.button ? 2 == e.button : void 0 ) )( r ) && !o() && e.shouldCreate )
                for ( let e = 0, n = t.length; e < n; e++ )
                  if ( t[ e ].canHandleElement( Object( s.default )( l ) ) ) {
                    if ( u || !d ) return t[ e ].handle( c );
                    ( e => {
                      $( "shown.contextToolbar", () => {
                        e.handle( c )
                      } )
                    } )( t[ e ] )
                  }
            };

            function c( e, t ) {
              i( e, t.elem )
            }

            function l( t, n ) {
              o() && ( !n.containerEl || e.current.hasAnchorChanged( n.containerEl ) ? e.destroy() : Object( a.b )( "same-anchor.property-panel" ) )
            }

            function d() {
              setTimeout( () => {
                Object( f.b )().bindScroll( "property-panel", () => {
                  e.destroy()
                } )
              }, 0 ), Object( s.default )( n.getDoc() ).bind( "keydown.property-panel.escape", t => {
                27 === t.keyCode && o() && e.destroy()
              } )
            }

            function m() {
              Object( f.b )().unbindScroll( "property-panel" ), Object( s.default )( n.getDoc() ).unbind( "keydown.property-panel.escape" )
            }
            u.a.tinymce.Env.ie && n.on( "MouseDown", e => {
              r && r.unbind( "mouseup.IEDragHandlesWorkaround" ), r = Object( s.default )( e.target ), r.filter( "img, table" ).bind( "mouseup.IEDragHandlesWorkaround", () => {
                i( n, e, e.target )
              } )
            } ), n.on( "Click", e => {
              i( e, e.target )
            } ), n.on( "KeyUp", e => {
              27 !== e.keyCode && i( e, n.selection.getNode() )
            }, !0 ), n.on( "ContextMenu", () => {
              e.destroy()
            } ), Object( a.a )( "trigger.property-panel", c ), Object( a.a )( "user-blurred-rte-element", l ), Object( a.a )( "created.property-panel", d ), Object( a.a )( "destroyed.property-panel", m ), n.on( "Remove", () => {
              Object( a.c )( "trigger.property-panel", c ), Object( a.c )( "user-blurred-rte-element", l ), Object( a.c )( "created.property-panel", d ), Object( a.c )( "destroyed.property-panel", m )
            } )
          },
          getInfo: () => ( {
            longname: "Image, Link and Macro Property Panels",
            author: "Atlassian",
            authorurl: "http://www.atlassian.com",
            version: `${u.a.tinymce.majorVersion}.${u.a.tinymce.minorVersion}`
          } )
        }
      };
      let D;
      const L = () => {
          const e = u.a.tinymce.DOM.getViewPort( u.a.tinymce.activeEditor.getWin() );
          return {
            scrollX: e.x,
            scrollY: e.y
          }
        },
        F = e => {
          if ( e ) {
            u.a.tinymce.activeEditor.getWin().scrollTo( e.scrollX, e.scrollY )
          }
        },
        z = {
          storeBookmark: () => {
            const e = u.a.tinymce.activeEditor,
              t = L();
            let n;
            e.focus();
            const o = e.selection.getRng();
            n = o.cloneRange && "function" == typeof o.cloneRange ? o.cloneRange() : o.duplicate && o.duplicate() || o, D = {
              scrollX: t.scrollX,
              scrollY: t.scrollY,
              range: n
            }
          },
          restoreBookmark: () => {
            const e = u.a.tinymce.activeEditor.selection,
              t = u.a.tinymce.activeEditor.getWin();
            D && ( F( D ), t.focus(), e.setRng( D.range ) ), D = null
          },
          getScroll: L,
          restoreScroll: F
        };
      var W = z;
      n( "VRGO" );
      const K = /^\u200b?(\[)$/;

      function V( e ) {
        return e.dom.getParent( e.selection.getStart(), "UL,OL" )
      }

      function U( e ) {
        return !( !e || "ul" !== e.nodeName.toLowerCase() || !e.classList.contains( "inline-task-list" ) )
      }

      function q( e ) {
        return e && "ul" === e.nodeName.toLowerCase() && !U( e )
      }

      function G( e ) {
        if ( e && e.classList.contains( "inline-task-list" ) ) {
          e.classList.remove( "inline-task-list" ), e.removeAttribute( "data-inline-tasks-content-id" );
          Array.prototype.slice.call( e.children ).forEach( e => {
            e.removeAttribute( "data-inline-task-id" ), e.classList.remove( "checked" )
          } )
        }
      }
      var J = n( "dHP6" );
      var X = e => {
        e.addCommand( "confInsertTable", ( t, n ) => {
          ( ( e, t, n, o ) => {
            const a = u.a.tinymce.Env;
            let r, i, c, l, s;
            const d = a.ie && a.ie < 10 ? "&nbsp;" : '<br data-mce-bogus="1">';
            for ( c = '<table id="__mce" class="confluenceTable"><tbody>', r = 0; r < n; r++ ) {
              const e = 0 === r && o,
                n = e ? "confluenceTh" : "confluenceTd";
              for ( c += "<tr>", i = 0; i < t; i++ ) c += e ? `<th class=${n}>${d}</th>` : `<td class=${n}>${d}</td>`;
              c += "</tr>"
            }
            c += "</tbody></table>", e.undoManager.transact( () => {
              e.insertContent( c ), l = e.dom.get( "__mce" ), e.dom.setAttrib( l, "id", null ), e.$( "tr", l ).each( ( t, n ) => {
                e.fire( "newrow", {
                  node: n
                } ), e.$( "th,td", n ).each( ( t, n ) => {
                  s = s || n, e.fire( "newcell", {
                    node: n
                  } )
                } )
              } ), e.dom.setAttribs( l, e.settings.table_default_attributes || {} ), e.dom.setStyles( l, e.settings.table_default_styles || {} )
            } ), e.selection.select( s, !0 ), e.selection.collapse( !0 )
          } )( e, n.cols, n.rows, n.heading ), Object( J.b )( "insert.table" )
        } )
      };

      function Q() {
        return Object( s.default )( "#table-highlight-group" ).attr( "data-highlight-colour" ) || ""
      }

      function Y( e, t, n ) {
        if ( !t.length ) return;
        const o = function ( e, t ) {
            const n = Object( s.default )( e.selection.getNode() );
            return !!n.length && ( n[ 0 ] === t[ 0 ] || !!n.closest( t ).length )
          }( e, t ),
          a = t[ 0 ],
          r = a.ownerDocument.createElement( n ),
          i = a.attributes;
        for ( let c = 0, l = i.length; c < l; c++ ) {
          const e = i[ c ];
          r.setAttribute( e.nodeName, e.nodeValue )
        }
        for ( ; a.hasChildNodes(); ) r.appendChild( a.firstChild );
        return a.parentNode.replaceChild( r, a ), o && ( e.selection.select( r, !0 ), e.selection.collapse() ), Object( s.default )( r )
      }
      var Z = {
        convertToNormalCells( e, t ) {
          t.filter( "th" ).each( ( function () {
            let t = Object( s.default )( this );
            t = Y( e, t, "td" ), t.removeClass( "confluenceTh" ), t.addClass( "confluenceTd" )
          } ) )
        },
        convertToHeadingCells( e, t ) {
          t.filter( "td" ).each( ( function () {
            let t = Object( s.default )( this );
            t = Y( e, t, "th" ), t.removeClass( "confluenceTd" ), t.addClass( "confluenceTh" )
          } ) )
        },
        areCellsHeadings( e ) {
          const t = e.filter( "th" ).length;
          return e.length === t
        },
        isColumnHeading( e, t ) {
          const n = Object( s.default )( e ).children( "tbody" ).children( "tr" );
          if ( 1 === n.length ) return !1;
          return n.children().filter( `th:nth-child(${t})` ).length === n.length
        },
        areCellsHighlighted( e ) {
          const t = e.filter( "td[data-highlight-colour],th[data-highlight-colour]" ),
            n = t.length;
          return e.length === n && function ( e ) {
            const t = Q();
            let n, o, a;
            for ( n = 0, o = e.length; n < o; n++ )
              if ( a = e.eq( n ).attr( "data-highlight-colour" ) || "", a !== t ) return !1;
            return !0
          }( t )
        },
        isColumnHighlighted( e, t ) {
          const n = Object( s.default )( e ).children( "tbody" ).children( "tr" ).children( "th,td" ).nthCol( t ),
            o = n.filter( "td[data-highlight-colour],th[data-highlight-colour]" ).length;
          if ( n.length !== o ) return !1;
          const a = n.eq( 0 ).attr( "data-highlight-colour" );
          for ( let r = 1, i = n.length; r < i; r++ )
            if ( a !== n.eq( r ).attr( "data-highlight-colour" ) ) return !1;
          return !0
        },
        getSelectedHighlightColour: Q
      };

      function ee( e ) {
        let t = 0;
        e.find( ">tbody >tr" ).each( ( function () {
          let e = 0;
          Object( s.default )( this ).find( ">th,>td" ).each( ( function () {
            const t = Object( s.default )( this );
            t.attr( "colspan" ) ? e += parseInt( t.attr( "colspan" ) ) : e++
          } ) ), e > t && ( t = e )
        } ) );
        let n = e.find( ">colgroup" );
        const o = n.find( "col" ),
          a = o.length;
        if ( a === t ) return;
        const r = n.length > 0;
        if ( r || ( n = Object( s.default )( "<colgroup>" ) ), t > a )
          for ( let i = 0; i < t - a; i++ ) {
            const e = Object( s.default )( "<col>" );
            n.append( e )
          } else
            for ( let i = 0; i < a - t; i++ ) o.last().remove();
        return r || e.prepend( n ), n
      }

      function te( e, t, n ) {
        let o = e.find( ">colgroup>col" );
        0 === o.length && ( ee( e ), o = e.find( ">colgroup>col" ) );
        const a = o.length;
        let r, i, c;
        const l = e.find( ">thead>tr,>tbody>tr,>tr" );
        for ( let s = 0; s < l.length; s++ )
          if ( a === l.eq( s ).find( ">th, >td" ).length ) {
            r = l.eq( s );
            break
          } if ( r ) i = r.find( ">th, >td" );
        else {
          const t = Object( s.default )( "<tr>" );
          c = Object( s.default )( "<tfoot>" ), c.append( t );
          for ( let e = 0; e < a; e++ ) t.append( Object( s.default )( "<td>" ) );
          e.append( c ), i = t.find( ">td" )
        }
        const d = e.outerWidth() - 1,
          f = [],
          m = [];
        for ( let s = 0; s < a; s++ ) {
          const e = i.eq( s ),
            n = e[ 0 ].getBoundingClientRect(),
            o = t ? n.width / d * 100 + "%" : e.outerWidth();
          f[ s ] = o, m[ s ] = n
        }
        let p = 0;
        u.a.tinymce.activeEditor && ( p = u.a.tinymce.activeEditor.getWin().pageXOffset );
        for ( let s = 0; s < a; s++ ) o.eq( s ).attr( "data-resize-pixel", m[ s ].width ).attr( "data-resize-percent", m[ s ].width / d * 100 ).attr( "data-offset-left", m[ s ].left + p ).attr( "data-offset-right", m[ s ].right + p ).removeAttr( "data-mce-style" ), ( !n || s === n.index() && s === n.next().index() ) && o.eq( s ).css( {
          width: f[ s ]
        } );
        c && c.remove(), e.removeAttr( "data-mce-style" )
      }

      function ne( e, t, n ) {
        const o = {};
        let a = !1;
        const r = t.find( "body" );
        return n.each( ( function () {
          const t = Object( s.default )( this );
          se( t ) && t.find( "th, td" ).each( ( function () {
            if ( o[ t ] ) return;
            const n = Object( s.default )( this ),
              i = n.offset().left + n.innerWidth();
            Math.abs( i - parseInt( e.attr( "data-offset-right" ) ) ) <= 0 && ( o[ t ] = !0, a = !0, function ( e, t ) {
              Object( s.default )( '<div contenteditable="false" class="resize-alignment-bar">' ).css( {
                top: ae( e[ 0 ], r[ 0 ] ),
                left: t,
                height: e.height()
              } ).appendTo( r )
            }( t, i ) )
          } ) )
        } ) ), a
      }

      function oe( e ) {
        e.find( ".resize-alignment-bar" ).remove()
      }

      function ae( e, t ) {
        return parseInt( e.getBoundingClientRect().top - t.getBoundingClientRect().top, 10 )
      }
      const re = function ( e ) {
        const t = {
            $doc: Object( s.default )( u.a.document )
          },
          n = this;
        let o = n.data( "uuid" );
        if ( n.data( "initialized" ) ) return;
        o || ( o = function () {
          function e() {
            return Math.floor( 65536 * ( 1 + Math.random() ) ).toString( 16 ).substring( 1 )
          }
          return `${e()+e()}-${e()}-${e()}-${e()}-${e()}${e()}${e()}`
        }(), n.data( "uuid", o ) ), e = s.default.extend( t, e || {} );
        const r = e.$doc,
          i = e.editor,
          c = r.find( "body" );
        let l, d, f, m, g, h, b = !1,
          y = -1,
          C = !1;
        let w, v, O, k = Object( s.default )( '<div contenteditable="false" class="synchrony-exclude" id="resize-indicator">' );
        const T = Object( s.default )( '<div contenteditable="false" class="synchrony-exclude resize-width-holder" unselectable="on">' );
        let j, E = !1;

        function A( e, t, o ) {
          f || ( f = l.width() ), l.attr( "data-mce-style" ) && l.removeAttr( "data-mce-style" );
          let a = !1;
          if ( v ) {
            const t = e - v,
              o = n.parent().width(),
              r = n.width() / o * 100;
            le( n ) && r > 99.9 && t > 1 && ( a = !0, !g && ( g = l.width() + l.next().width() ) );
            const i = Math.abs( Math.abs( e ) - Math.abs( v ) );
            if ( i >= 7 && ( w = !1 ), w && i < 7 ) return
          }
          let i = f + e;
          if ( i < 29 && ( i = 29 ), l.width( i ), ( a || m ) && ( l.next().width( g - i ), !m && ( m = o.pageX ) ), m && m > o.pageX && ( m = null ), te( n, !1, l ), !C && t && ( k.css( {
              display: "block",
              top: ae( n[ 0 ], c[ 0 ] ),
              left: parseInt( l.attr( "data-offset-right" ) ) - 1,
              height: n.height()
            } ), se( n ) ) ) {
            const e = ne( l, r, O ) || function ( e, t, n ) {
              let o;
              return Math.abs( parseInt( e.next().attr( "data-resize-pixel" ) ) - parseInt( e.attr( "data-resize-pixel" ) ) ) <= 1 && ( o = !0, n.find( ".resizable-align-right" ).remove(), Object( s.default )( '<div contenteditable="false" class="resize-alignment-bar resizable-align-right">' ).css( {
                height: t.height(),
                top: ae( t[ 0 ], n[ 0 ] ),
                left: parseInt( e.next().attr( "data-offset-right" ) ) - 1
              } ).appendTo( n ).clone().css( {
                left: parseInt( e.attr( "data-offset-left" ) ) - 1
              } ).appendTo( n ) ), Math.abs( parseInt( e.prev().attr( "data-resize-pixel" ) ) - parseInt( e.attr( "data-resize-pixel" ) ) ) <= 1 && ( o = !0, Object( s.default )( '<div contenteditable="false" class="resize-alignment-bar">' ).css( {
                height: t.height(),
                top: ae( t[ 0 ], n[ 0 ] ),
                left: parseInt( e.prev().attr( "data-offset-right" ) ) - 1
              } ).appendTo( n ).clone().css( {
                left: parseInt( e.prev().attr( "data-offset-left" ) ) - 1
              } ).appendTo( n ) ), o
            }( l, n, c );
            e && ( w = !0 ), !e && oe( c )
          }
          v = Math.abs( e )
        }
        const I = function () {
            k.remove(), n.removeClass( "active-resizable" ), E = !1, w = void 0, m = null, g = null, c.attr( "data-table-resizing", !1 )
          },
          S = function ( e ) {
            r.find( "#resize-indicator" ).length > 0 ? k = r.find( "#resize-indicator" ) : k.appendTo( c ), n.addClass( "active-resizable" ), k.css( {
              top: ae( n[ 0 ], c[ 0 ] ),
              left: e,
              height: n.height()
            } ), E = !0
          },
          M = function ( e ) {
            c.outerWidth( !0 ) !== c[ 0 ].scrollWidth && ( e && ce( n ), c.find( `#${o}-holder` ).length || ( T.css( "width", n.width() + parseInt( Object( s.default )( i.getBody() ).css( "margin-right" ) ) ), T.attr( "id", o + "-holder" ), n.after( T ) ) )
          };

        function B( e ) {
          l && E && ( j = se( n ) ? "fixed" : le( n ) ? "relative" : "fluid", b = !0, te( n ), n.updateTableModeInToolbar(), x( "confluence.table.resizable.relative.keep.width" ) && l.next().length || n.css( {
            width: ""
          } ), d = e.pageX, n[ 0 ].setCapture && n[ 0 ].setCapture(), r.find( "body" ).attr( "data-table-resizing", !0 ), f = parseInt( l.width(), 10 ), O = function ( e ) {
            const t = e.nextAll( ".confluenceTable" ).first(),
              n = e.prevAll( ".confluenceTable" ).first();
            return s.default.merge( n, t )
          }( n ), e.preventDefault() )
        }
        return n.on( "mousemove.table-resizable" + o, "th, td", ( function ( e ) {
          if ( b ) return;
          if ( Object( s.default )( this ).parents( "table.confluenceTable" ).length > 1 ) return;
          if ( de( n ) && x( "confluence.table.resizable.hide-indicator-on-fluid" ) ) return;
          ee( n );
          const t = Object( s.default )( this ),
            o = t.offset().left;
          let a;
          const r = Math.round( k.outerWidth() / 2 );
          let i = t.index();
          const c = t.parent().children();
          y = -1;
          const d = t.closest( "tr" ).index();
          if ( t.closest( "table.confluenceTable tr" ).prevAll( "tr" ).each( ( function () {
              const e = Object( s.default )( this ),
                n = e.index();
              e.children( "td, th" ).each( ( function () {
                if ( t.offset().left > Object( s.default )( this ).offset().left ) {
                  const e = parseInt( Object( s.default )( this ).attr( "colspan" ) ),
                    t = parseInt( Object( s.default )( this ).attr( "rowspan" ) );
                  e && t ? n + t > d && ( i += e ) : t && n + t > d && ( i += 1 )
                }
              } ) )
            } ) ), C = !1, e.pageX - t.offset().left < t.outerWidth() / 2 ) {
            if ( i -= 1, 0 === i && t.prev().hasClass( "numberingColumn" ) ) return;
            if ( i < 0 ) {
              C = !0;
              const e = c.eq( 0 );
              e.attr( "colspan" ) ? y += parseInt( e.attr( "colspan" ) ) : y++
            } else
              for ( let e = 0; e <= i; e++ ) {
                const t = c.eq( e );
                t.attr( "colspan" ) ? y += parseInt( t.attr( "colspan" ) ) : y++
              }
            a = C ? o + t.outerWidth() - r : o - r
          } else {
            if ( 0 === i && t.hasClass( "numberingColumn" ) ) return;
            for ( let e = 0; e <= i; e++ ) {
              const t = c.eq( e );
              t.attr( "colspan" ) ? y += parseInt( t.attr( "colspan" ) ) : y++
            }
            a = o + t.outerWidth() - r
          }
          l = t.closest( "table" ).find( "col" ).eq( y ),
            function () {
              if ( Math.abs( h - a ) <= 1 )
                if ( E ) {
                  if ( Math.abs( e.pageX - a - r ) <= 4 ) return;
                  I()
                } else {
                  if ( !( Math.abs( e.pageX - a - r ) <= 4 ) ) return;
                  S( a )
                }
              else Math.abs( e.pageX - a - r ) <= 4 ? S( a ) : I()
            }(), h = a, se( n ) && M()
        } ) ), n.on( "mousedown.table-resizable" + o, e => {
          B( e )
        } ), n.on( "mouseout.table-resizable" + o, () => {
          b || I()
        } ), r.on( "keypress.table-resizable" + o, () => {
          E && I()
        } ), r.on( "mousemove.table-resizable" + o, ( function ( e ) {
          b && ( Object( a.b )( "synchrony.stop", {
            id: "confluence.table-resize-plugin"
          } ), A( e.pageX - d, !0, e ), e.preventDefault() )
        } ) ), r.on( "mouseup.table-resizable" + o, ( function () {
          b && ( n[ 0 ].releaseCapture && n[ 0 ].releaseCapture(), b = !1, I(), oe( r ), ce( n ), l && l.width() !== f && ( de( n ) && n.addClass( "relative-table" ), Object( a.b )( "analytics", {
            name: "confluence.table.resize.from." + j,
            data: {
              pageId: p.a.get( "page-id" )
            }
          } ) ), le( n ) && ie( n ), se( n ) && M( !0 ), i && ( i.undoManager.add(), Object( a.b )( "synchrony.start", {
            id: "confluence.table-resize-plugin"
          } ) ) )
        } ) ), n.data( "initialized", !0 ), this
      };
      let ie = function ( e ) {
          const t = e.parent().width();
          let n = e.width() / t * 100;
          return n > 100 && ( n = 100 ), e.css( {
              width: n + "%"
            } ).attr( "data-resize-percent", n ),
            function ( e ) {
              te( e, !0 )
            }( e ), e
        },
        ce = function ( e ) {
          return e.parent( "body" ).find( `#${e.data("uuid")}-holder` ).remove(), e
        },
        le = function ( e ) {
          return e.hasClass( "relative-table" )
        },
        se = function ( e ) {
          return e.hasClass( "fixed-table" )
        },
        de = function ( e ) {
          return !le( e ) && !se( e )
        };
      const ue = function ( e ) {
          const t = {
              $doc: Object( s.default )( u.a.document )
            },
            n = ( e = s.default.extend( t, e || {} ) ).$doc,
            o = this.data( "uuid" );
          return n.find( "#resize-indicator" ).remove(), this.off( "mousemove.table-resizable" + o ), this.off( "mouseout.table-resizable" + o ), this.off( "mousedown.table-resizable" + o ), n.off( "keypress.table-resizable" + o ), n.off( "mousemove.table-resizable" + o ), n.off( "mouseup.table-resizable" + o ), this.data( "initialized", !1 ), this
        },
        fe = function () {
          return ce( Object( s.default )( this ) ).removeClass( "relative-table fixed-table" ).removeAttr( "style" ).find( ">colgroup" ).remove(), this
        },
        me = function () {
          const e = Object( s.default )( this );
          return ce( e ),
            function ( e ) {
              return te( e ), e
            }( e ).css( "width", "" ).removeClass( "relative-table" ).addClass( "fixed-table" ), this
        },
        pe = function () {
          if ( this.parent().closest( "table.confluenceTable" ).length ) return Object( s.default )( "#table-mode-picker .dropdown-text" ).text( u.a.tinymce.activeEditor.translate( "tinymce.table.responsive" ) ), void Object( s.default )( "#table-mode-picker .aui-dd-parent" ).addClass( "disabled" );
          Object( s.default )( "#table-mode-picker .aui-dd-parent" ).removeClass( "disabled" ), se( this ) ? Object( s.default )( "#table-mode-picker .dropdown-text" ).text( u.a.tinymce.activeEditor.translate( "tinymce.table.fixed_width" ) ) : Object( s.default )( "#table-mode-picker .dropdown-text" ).text( u.a.tinymce.activeEditor.translate( "tinymce.table.responsive" ) )
        },
        ge = function ( e, t, n ) {
          if ( !n && !n.content ) return;
          const o = Object( s.default )( "<div/>" ).append( n.content );
          o.find( "table.confluenceTable.relative-table, table.confluenceTable.relative-table > colgroup > col" ).each( ( function () {
            var e;
            ( e = Object( s.default )( this ) ).data( "resize-percent" ) ? e.css( {
              width: e.data( "resize-percent" ) + "%"
            } ) : e.attr( "style", e.data( "mce-style" ) )
          } ) ), n.content = o.html()
        },
        he = function ( e ) {
          const t = Object( s.default )( e.getWin().document );

          function n() {
            t.find( "table.confluenceTable" ).each( ( function () {
              Object( s.default )( this ).removeTableResizable( {
                $doc: t
              } )
            } ) ), t.find( "#resize-indicator" ).remove(), t.find( ".resize-width-holder" ).remove(), Object( s.default )( e.getBody() ).removeAttr( "data-table-resizing" )
          }
          return e.on( "Change", () => {
            const n = e.selection.getNode(),
              o = Object( s.default )( n ).parent().closest( "table.confluenceTable" ).not( "table.confluenceTable table.confluenceTable" );
            o.is( ".confluenceTable" ) && o.removeTableResizable( {
              $doc: t
            } ).tableResizable( {
              $doc: t,
              editor: e,
              force: !0
            } )
          } ), Object( a.a )( "confluence.editor.on.save", n ), e.on( "Remove", () => {
            Object( a.c )( "confluence.editor.on.save", n )
          } ), t.on( "mousemove", "table.confluenceTable", ( function () {
            const n = Object( s.default )( this );
            n.parents( "table.confluenceTable" ).length || n.data( "initialized" ) || n.tableResizable( {
              $doc: t,
              editor: e
            } )
          } ) ), u.a.tinymce.isWebKit && Object( s.default )( u.a.document ).bind( "prePaste", ge ), u.a.tinymce.Env.ie && Object( s.default )( '<style type="text/css"></style>' ).html( ".confluenceTable td, .confluenceTable th {overflow: hidden !important;}.confluenceTable .content-wrapper {overflow-x : visible !important}" ).appendTo( t.find( "head" ) ), this
        };
      var be = e => {
        x( "confluence.table.resizable" ) && ( s.default.fn.tableResizable = re, s.default.fn.removeTableResizable = ue, s.default.fn.toggleFluidColumnWidth = fe, s.default.fn.toggleFixedColumnWidth = me, s.default.fn.updateTableModeInToolbar = pe, e.on( "init", () => {
          he( e )
        } ) )
      };
      var ye = e => {
          function t( e ) {
            let t;
            n( e ), Z.getSelectedHighlightColour() && ( t = Z.getSelectedHighlightColour(), e.attr( "data-highlight-colour", t ), e.addClass( "highlight-" + t ) )
          }

          function n( e ) {
            let t, n, o;
            for ( t = 0, n = e.length; t < n; t++ ) o = e.eq( t ), o.attr( "data-highlight-colour" ) && o.removeAttr( "data-highlight-colour" ), o[ 0 ].className = o[ 0 ].className.replace( /( |^)highlight(-\w+)+/g, "" )
          }
          e.on( "init", ( function () {
            const o = function ( e ) {
                return Object( s.default )( e.selection.getNode() ).closest( "th.confluenceTh,td.confluenceTd" )
              },
              a = function ( e ) {
                const t = Object( s.default )( e.getBody() ).find( "th.confluenceTh.mceSelected,td.confluenceTd.mceSelected" );
                return t.length ? t : o( e )
              },
              r = function ( e ) {
                return 0 === e.find( "tbody > tr > td" ).length
              };

            function i( e ) {
              return Object( s.default )( e ).parents( "table" ).is( ".confluenceTable" )
            }

            function c( t ) {
              if ( 9 === t.keyCode ) {
                const n = e.selection.getNode();
                if ( i( n ) && ! function ( t ) {
                    const n = e.dom.getParent( t, "UL,OL,TR" ).tagName;
                    return "UL" === n || "OL" === n
                  }( n ) ) {
                  const n = t.shiftKey ? "mceTableMoveCaretToPrevCell" : "mceTableMoveCaretToNextCell";
                  return e.execCommand( n ), t.preventDefault(), !1
                }
              }
            }
            e.addCommand( "confTableRowToggleHeading", ( function () {
              const t = function ( e ) {
                let t = Object( s.default )( e.getBody() ).find( "td.mceSelected,th.mceSelected" );
                t.length || ( t = Object( s.default )( e.selection.getNode() ) );
                let n = t.closest( "tr" ),
                  o = n.parent(),
                  a = o.is( "tbody" ) ? n.parent().parent() : o;
                for ( ; 0 !== n.length && !a.is( ".confluenceTable" ); ) n = a.closest( "tr" ), o = n.parent(), a = o.is( "tbody" ) ? n.parent().parent() : o;
                return n
              }( this );
              let n = t.children( "td,th" ),
                o = 0;
              Z.areCellsHeadings( n ) ? ( r( t.closest( "table" ) ) || ( n = n.filter( ( function () {
                const e = Object( s.default )( this ),
                  t = e.closest( "table" );
                return o += e.attr( "colspan" ) || 1, !Z.isColumnHeading( t, o )
              } ) ) ), Z.convertToNormalCells( e, n ) ) : Z.convertToHeadingCells( e, n )
            } ) ), e.addCommand( "confTableColumnToggleHeading", ( function () {
              let t = function ( e ) {
                let t = Object( s.default )( [] );
                return e.each( ( function () {
                  const e = Object( s.default )( this ),
                    n = e.index() + 1,
                    o = e.closest( "table.confluenceTable" ).children( "tbody" ).children( "tr" );
                  t = t.add( o.children().nthCol( n ) )
                } ) ), t
              }( a( this ) );
              Z.areCellsHeadings( t ) ? ( r( t.closest( "table" ) ) || ( t = t.filter( ( function () {
                const e = Object( s.default )( this ).parent( "tr" ).children(),
                  t = e.filter( "th" );
                return e.length !== t.length
              } ) ) ), Z.convertToNormalCells( e, t ) ) : Z.convertToHeadingCells( e, t )
            } ) ), e.addCommand( "confTableSelectionToggleHighlight", ( function ( e, o ) {
              const r = o && o.alwaysHighlight,
                i = a( this );
              Z.areCellsHighlighted( i ) && !r || Object( s.default )( "#table-highlight-group" ).attr( "data-remove-highlight" ) ? n( i ) : t( i )
            } ) ), ( u.a.tinymce.isIE8 || x( "confluence-table-enhancements.auto-row" ) ) && e.on( "KeyDown", ( function ( t ) {
              function n( t, n ) {
                const o = e.selection.getRng( !0 ),
                  a = o.startContainer;
                if ( o.collapsed ) {
                  const e = function ( e, t, n ) {
                    for ( ; e != t; ) {
                      if ( e[ n ] ) return !1;
                      e = e.parentNode
                    }
                    return !0
                  }( a, t, n );
                  return 3 === a.nodeType ? e && o.startOffset == ( "nextSibling" == n ? a.length : 0 ) : a == t ? o.startOffset == ( "nextSibling" == n ? a.childNodes.length - 1 : 0 ) : e
                }
                return !1
              }
              if ( ( 37 === t.keyCode || 39 === t.keyCode ) && !t.shiftKey ) {
                const a = o( this );
                if ( a.length ) {
                  const o = a[ 0 ];
                  if ( 37 === t.keyCode && n( o, "previousSibling" ) && ! function () {
                      const t = e.selection.getNode();
                      return Object( s.default )( t ).parents( "table" ).first().find( "tr:first-child" ).children().first()[ 0 ] == t
                    }() ) return e.execCommand( "mceTableMoveCaretToPrevCell" ), u.a.tinymce.dom.Event.cancel( t );
                  if ( 39 === t.keyCode && n( o, "nextSibling" ) && ! function () {
                      const t = e.selection.getNode();
                      return Object( s.default )( t ).parents( "table" ).first().find( "tr:last-child" ).children().last()[ 0 ] == t
                    }() ) return e.execCommand( "mceTableMoveCaretToNextCell" ), u.a.tinymce.dom.Event.cancel( t )
                }
              }
            } ) ), e.on( "KeyDown", t => {
              c( t ), x( "editor.spa.uxenhancements" ) || function ( t ) {
                if ( !t.altKey || 38 !== t.keyCode && 40 !== t.keyCode ) return;
                const n = e.selection.getRng( !0 ),
                  o = Object( s.default )( n.startContainer ).closest( "td.confluenceTd, th.confluenceTh", ".mceContent" );
                if ( 0 === o.length ) return;
                e.execCommand( 38 === t.keyCode ? "mceTableInsertRowBefore" : "mceTableInsertRowAfter" );
                let a = o.parent()[ 38 === t.keyCode ? "prev" : "next" ]().find( "td:first-child" )[ 0 ];
                const r = Object( s.default )( a );
                r.hasClass( "numberingColumn" ) && ( a = r.next()[ 0 ] ), n.setStart( a, 0 ), n.setEnd( a, 0 ), e.selection.setRng( n ), t.preventDefault()
              }( t )
            } ), x( "confluence-table-enhancements.auto-row" ) && ( e.on( "Click", ( function () {
              const t = o( this );
              t.hasClass( "numberingColumn" ) && !t.hasClass( "confluenceTh" ) && e.execCommand( "mceTableMoveCaretToNextCell" )
            } ) ), e.on( "KeyDown", ( function ( t ) {
              if ( ( 38 === t.keyCode || 40 === t.keyCode ) && i() && o( this ).hasClass( "numberingColumn" ) ) return e.execCommand( "mceTableMoveCaretToNextCell" ), t.preventDefault(), !1
            } ), !0 ) )
          } ) ), x( "confluence-table-enhancements.auto-row" ) && e.on( "init", ( function () {
            Object( s.default )( u.a.tinymce.activeEditor.getBody() ).find( ".confluenceTd.numberingColumn" ).attr( "contenteditable", "false" )
          } ) )
        },
        Ce = e => {
          const t = /([\+\-]?\d*)[nN]([\+\-]?\d*)/;
          let n, o;
          e.fn.nthCol = function ( a ) {
            return o = function ( e ) {
              let n = [];
              const o = {
                multiplier: 0,
                offset: 0
              };
              return "even" === e ? e = "2n" : "odd" === e ? e = "2n+1" : /^\d*$/.test( e ) && ( e = "0n+" + e ), n = t.exec( e ), null !== n && ( o.multiplier = n[ 1 ] - 0, o.offset = n[ 2 ] - 0 ), o
            }( a ), n = function ( t ) {
              let n, o, a = [],
                r = 0;
              const i = [];
              return e.each( t, ( e, t ) => {
                let c = 0,
                  l = 0;
                const s = t.rowSpan || 1,
                  d = t.colSpan || 1;
                for ( t.parentNode !== n && ( n = t.parentNode, n.parentNode !== o && ( o = n.parentNode, a = [] ), r = 0, void 0 === a[ n.rowIndex ] && ( a[ n.rowIndex ] = [] ) ), c = 0; c < a[ n.rowIndex ].length + 1; c += 1 )
                  if ( void 0 === a[ n.rowIndex ][ c ] ) {
                    r = c;
                    break
                  } for ( i[ e ] = r, c = n.rowIndex; c < n.rowIndex + s; c += 1 )
                  for ( void 0 === a[ c ] && ( a[ c ] = [] ), l = r; l < r + d; l += 1 ) a[ c ][ l ] = !0
              } ), i
            }( this ), e( this ).filter( ( function ( e ) {
              return function ( e, t, a ) {
                const r = n[ a ] - ( o.offset - 1 );
                return 0 === o.multiplier ? 0 === r : r % o.multiplier == 0 && r / o.multiplier >= 0
              }( 0, 0, e )
            } ) )
          }
        },
        we = () => {
          const e = u.a.tinymce.each,
            t = u.a.AJS.storageManager;
          Ce( s.default );
          const n = t( "atlassian.editor", "tables" );
          let o;

          function a( e, t ) {
            return parseInt( e.getAttribute( t ) || 1 )
          }

          function r( t, n, r ) {
            let i, c, l, d, f;
            p();

            function m( e, t ) {
              return ( e = e.cloneNode( t ) ).removeAttribute( "id" ), t && I() && e.removeChild( e.children[ 0 ] ), e
            }

            function p() {
              let o = 0;
              i = [], e( [ "thead", "tbody", "tfoot" ], r => {
                const c = n.select( `> ${r} > tr`, t );
                e( c, ( t, c ) => {
                  c += o, e( n.select( "> td, > th", t ), ( e, t ) => {
                    let n, o;
                    if ( i[ c ] )
                      for ( ; i[ c ][ t ]; ) t++;
                    const l = a( e, "rowspan" ),
                      s = a( e, "colspan" );
                    for ( o = c; o < c + l; o++ )
                      for ( i[ o ] || ( i[ o ] = [] ), n = t; n < t + s; n++ ) i[ o ][ n ] = {
                        part: r,
                        real: o == c && n == t,
                        elm: e,
                        rowspan: l,
                        colspan: s
                      }
                  } )
                } ), o += c.length
              } )
            }

            function g( e, t ) {
              const n = i[ t ];
              if ( n ) return n[ e ]
            }

            function h( e, t, n ) {
              e && ( 1 === ( n = parseInt( n ) ) ? e.removeAttribute( t, 1 ) : e.setAttribute( t, n, 1 ) )
            }

            function b( e ) {
              return e && ( n.hasClass( e.elm, "mceSelected" ) || e == d )
            }

            function y() {
              const o = [];
              return e( t.rows, t => {
                e( t.cells, e => {
                  if ( n.hasClass( e, "mceSelected" ) || e == d.elm ) return o.push( t ), !1
                } )
              } ), o
            }

            function C( t ) {
              let o;
              return u.a.tinymce.walk( t, a => {
                let r;
                if ( 3 === a.nodeType ) return e( n.getParents( a.parentNode, null, t ).reverse(), e => {
                  e = m( e, !1 ), o ? r && r.appendChild( e ) : o = r = e, r = e
                } ), r && ( r.innerHTML = u.a.tinymce.isIE ? "&nbsp;" : '<br data-mce-bogus="1" />' ), !1
              }, "childNodes" ), h( t = m( t, !1 ), "rowSpan", 1 ), h( t, "colSpan", 1 ), o ? t.appendChild( o ) : u.a.tinymce.isIE || ( t.innerHTML = '<br data-mce-bogus="1" />' ), Object( s.default )( t ).attr( "contenteditable", "true" ).removeClass( "numberingColumn" ), t
            }

            function w() {
              const o = n.createRng();
              if ( e( n.select( "tr", t ), e => {
                  0 === e.cells.length && n.remove( e )
                } ), 0 === n.select( "tr", t ).length ) return o.setStartAfter( t ), o.setEndAfter( t ), r.setRng( o ), void n.remove( t );
              e( n.select( "thead,tbody,tfoot", t ), e => {
                  0 === e.rows.length && n.remove( e )
                } ),
                function () {
                  let e;
                  p();
                  const t = i[ Math.min( i.length - 1, c.y ) ];
                  t && ( e = t[ Math.min( t.length - 1, c.x ) ].elm, e && ( n = e, u.a.tinymce.isIE9 || u.a.tinymce.isIE10up ? ( r.setCursorLocation( n, 0 ), r.collapse( !0 ) ) : ( r.select( n, !0 ), r.collapse( !0 ) ) ) );
                  var n
                }()
            }

            function v( e, t, o, a ) {
              let r, c, l, s, d;
              for ( r = i[ t ][ e ].elm.parentNode, l = 1; l <= o; l++ )
                if ( r = n.getNext( r, "tr" ), r ) {
                  for ( c = e; c >= 0; c-- )
                    if ( d = i[ t + l ][ c ].elm, d.parentNode == r ) {
                      for ( s = 1; s <= a; s++ ) n.insertAfter( C( d ), d );
                      break
                    } if ( -1 == c )
                    for ( s = 1; s <= a; s++ ) r.insertBefore( C( r.cells[ 0 ] ), r.cells[ 0 ] )
                }
            }

            function O() {
              e( i, ( t, o ) => {
                e( t, ( e, t ) => {
                  let r, i, c;
                  if ( b( e ) && ( r = a( e = e.elm, "colspan" ), i = a( e, "rowspan" ), r > 1 || i > 1 ) ) {
                    for ( h( e, "rowSpan", 1 ), h( e, "colSpan", 1 ), c = 0; c < r - 1; c++ ) n.insertAfter( C( e ), e );
                    v( t, o, i - 1, r )
                  }
                } )
              } )
            }

            function k( t ) {
              let o, r, c, l, s, d, f, p, g, y, C;
              for ( e( i, ( n, a ) => {
                  if ( e( n, e => {
                      if ( b( e ) && ( e = e.elm, s = e.parentNode, d = m( s, !1 ), o = a, t ) ) return !1
                    } ), t ) return !o
                } ), l = 0; l < i[ 0 ].length; l++ )
                if ( i[ o ][ l ] && ( r = i[ o ][ l ].elm, r != c ) ) {
                  if ( t ) {
                    if ( o > 0 && i[ o - 1 ][ l ] && ( p = i[ o - 1 ][ l ].elm, g = a( p, "rowSpan" ), g > 1 ) ) {
                      h( p, "rowSpan", g + 1 );
                      continue
                    }
                  } else if ( g = a( r, "rowspan" ), g > 1 ) {
                    h( r, "rowSpan", g + 1 );
                    continue
                  }
                  C = T( l ), f = C ? n.create( "th" ) : n.create( "td" ), f.colSpan = r.colSpan, f.width = r.width, f.innerHTML = u.a.tinymce.isIE9 ? "" : u.a.tinymce.isIE ? "&nbsp;" : '<br data-mce-bogus="1" />', f.className = r.className, C || ( n.removeClass( f, u.a.tinymce.settings.confluence_table_heading_style ), n.addClass( f, u.a.tinymce.settings.confluence_table_cell_style ) ), y = n.getAttrib( r, "data-highlight-colour" ), j( l ) ? n.setAttrib( f, "data-highlight-colour", y ) : n.removeClass( f, "highlight-" + y ), d.appendChild( f ), c = r
                } d.hasChildNodes() && ( t ? s.parentNode.insertBefore( d, s ) : n.insertAfter( d, s ) ), A()
            }

            function T( e ) {
              if ( 1 === i.length ) return !1;
              for ( let t = 0; t < i.length; t++ )
                if ( i[ t ] && i[ t ][ e ] && "TH" !== i[ t ][ e ].elm.tagName.toUpperCase() ) return !1;
              return !0
            }

            function j( e ) {
              const t = i[ 0 ][ e ].elm.getAttribute( "data-highlight-colour" );
              if ( null === t ) return !1;
              for ( let n = 0; n < i.length; n++ )
                if ( i[ n ][ e ].elm.getAttribute( "data-highlight-colour" ) !== t ) return !1;
              return !0
            }

            function E( t ) {
              let r, c;
              const l = [];
              return e( i, n => {
                if ( e( n, ( e, n ) => {
                    if ( b( e ) && ( r = n, t ) ) return !1
                  } ), t ) return !r
              } ), ( 0 != r || !t || !I() ) && ( e( i, ( e, i ) => {
                let d, f;
                if ( !e[ r ] ) return;
                const m = e[ r ].elm;
                if ( x( "confluence.table.resizable" ) && 0 === i ) {
                  const e = Object( s.default )( m ).closest( "table" ),
                    n = e.find( ">colgroup>col" ).eq( r ),
                    a = Object( s.default )( "<col>" );
                  t ? a.insertBefore( n ) : a.insertAfter( n ), e.hasClass( "fixed-table" ) && ( o && 0 !== parseFloat( o ) ? a.css( {
                    width: o
                  } ) : a.css( {
                    width: 29
                  } ) )
                }
                if ( m != c ) {
                  if ( f = a( m, "colspan" ), d = a( m, "rowspan" ), 1 == f ) {
                    const e = function ( e ) {
                      const t = n.create( e.tagName );
                      t.colSpan = e.colSpan, t.width = e.width, t.className = e.className, t.innerHTML = u.a.tinymce.isIE ? "&nbsp;" : '<br data-mce-bogus="1"/>';
                      const o = n.getAttrib( e, "data-highlight-colour" );
                      return o && n.setAttrib( t, "data-highlight-colour", o ), Object( s.default )( t ).attr( "contenteditable", "true" ).removeClass( "numberingColumn" ), t
                    }( m );
                    t ? ( m.parentNode.insertBefore( e, m ), v( r, i, d - 1, f ) ) : ( n.insertAfter( e, m ), v( r, i, d - 1, f ) ), l.push( e )
                  } else h( m, "colSpan", m.colSpan + 1 );
                  c = m
                }
              } ), l )
            }

            function A() {
              if ( I() ) {
                f = 1;
                let n = 0,
                  o = 0;
                e( t.rows, e => {
                  e = Object( s.default )( e ), Z.areCellsHeadings( e.children() ) ? e.children( ":first" ).addClass( "numberingColumn" ).attr( "contenteditable", "true" ) : o > 0 ? o-- : ( e.children( ":first" ).html( f ).attr( "contenteditable", "false" ).addClass( "numberingColumn" ), n = e.children( ":first" ).attr( "rowspan" ), n > 1 && ( o = n - 1 ), f++ )
                } )
              }
            }

            function I() {
              return Object( s.default )( t.rows[ 0 ] ).children( ":first" ).hasClass( "numberingColumn" )
            }

            function S( e ) {
              if ( e ) {
                if ( Object( s.default )( t.rows[ 0 ] ).children( ":first" ).addClass( "numberingColumn" ), x( "confluence.table.resizable" ) ) {
                  const e = Object( s.default )( t ),
                    n = e.find( ">colgroup>col" ).eq( 0 ),
                    o = Object( s.default )( "<col>" );
                  o.insertBefore( n ), e.hasClass( "fixed-table" ) && o.css( {
                    width: 29
                  } )
                }
              } else Object( s.default )( t.rows[ 0 ] ).children( ":first" ).removeClass( "numberingColumn" ), x( "confluence.table.resizable" ) && Object( s.default )( t ).find( ">colgroup>col" ).eq( 0 ).remove()
            }

            function M() {
              const t = [];
              e( i, o => {
                e( o, ( o, r ) => {
                  b( o ) && -1 === u.a.tinymce.inArray( t, r ) && ( x( "confluence.table.resizable" ) && Object( s.default )( o.elm ).closest( "table" ).find( ">colgroup>col" ).eq( r ).remove(), e( i, e => {
                    if ( e[ r ] ) {
                      const t = e[ r ].elm,
                        o = a( t, "colSpan" );
                      o > 1 ? h( t, "colSpan", o - 1 ) : n.remove( t )
                    }
                  } ), t.push( r ) )
                } )
              } ), w()
            }

            function B() {
              const t = {};
              return e( i, n => {
                e( n, ( e, n ) => {
                  b( e ) && ( x( "confluence.table.resizable" ) && ( o = Object( s.default )( e.elm ).closest( "table" ).find( ">colgroup>col" ).eq( n ).css( "width" ), 0 === parseFloat( o ) && ( o = e.elm.getBoundingClientRect().width ) ), t[ n ] || ( t[ n ] = [] ) )
                } )
              } ), e( i, n => {
                e( n, ( e, n ) => {
                  t[ n ] && t[ n ].push( e.elm.innerHTML )
                } )
              } ), t
            }

            function N( e ) {
              e && e.parentNode && ( r.select( e.parentNode ), r.collapse( !0 ) )
            }

            function R( e, t ) {
              let n = g( e.x, e.y ).elm;
              const o = void 0 === t || t;
              if ( ( u.a.tinymce.isGecko || u.a.tinymce.isIE ) && n.firstChild && ( n = n.firstChild ), u.a.tinymce.isIE9 || u.a.tinymce.isIE10up ) {
                const e = r.getRng( 1 );
                o ? ( e.setStart( n, 0 ), e.setEnd( n, 0 ) ) : ( e.setStartAfter( n, 0 ), e.setEndAfter( n, 0 ) ), r.setRng( e )
              } else r.select( n, !0 ), r.collapse( o )
            }

            function _() {
              let e;
              const t = i[ 0 ].length;
              return c.x == t - 1 && c.y == i.length - 1 || ( c.x == t - 1 && I() ? ( e = {
                x: 1,
                y: c.y + 1
              }, Z.areCellsHeadings( Object( s.default )( i[ e.y ][ 0 ].elm ).parent().children() ) && ( e.x = 0 ) ) : e = c.x == t - 1 ? {
                x: 0,
                y: c.y + 1
              } : {
                x: c.x + 1,
                y: c.y
              } ), e
            }

            function P() {
              let e, t;
              return 0 == c.x && 0 == c.y || ( 1 == c.x && I() && !Z.areCellsHeadings( Object( s.default )( i[ c.y ][ 0 ].elm ).parent().children() ) ? ( t = c.y - 1, e = {
                x: i[ t ].length - 1,
                y: t
              } ) : c.x > 0 ? e = {
                x: c.x - 1,
                y: c.y
              } : ( t = c.y - 1, e = {
                x: i[ t ].length - 1,
                y: t
              } ) ), e
            }

            function $( t ) {
              let n;
              return e( i, ( o, a ) => ( e( o, ( e, o ) => {
                if ( e.elm == t ) return n = {
                  x: o,
                  y: a
                }, !1
              } ), !n ) ), n
            }
            d = n.select( "td.mceSelected,th.mceSelected" )[ 0 ] || Object( s.default )( r.getStart() ).closest( [ "table.confluenceTable > tbody > tr > th", "table.confluenceTable > tbody > tr > td", "table.confluenceTable > thead > tr > th", "table.confluenceTable > thead > tr > td" ].join( "," ) )[ 0 ], d && ( c = $( d ), l = function () {
              let t, n;
              return t = n = 0, e( i, ( o, a ) => {
                e( o, ( e, o ) => {
                  let r, c;
                  b( e ) && ( e = i[ a ][ o ], o > t && ( t = o ), a > n && ( n = a ), e.real && ( r = e.colspan - 1, c = e.rowspan - 1, r && o + r > t && ( t = o + r ), c && a + c > n && ( n = a + c ) ) )
                } )
              } ), {
                x: t,
                y: n
              }
            }(), d = g( c.x, c.y ) ), u.a.tinymce.extend( this, {
              deleteTable: function () {
                const e = n.createRng();
                e.setStartAfter( t ), e.setEndAfter( t ), r.setRng( e ), n.remove( t )
              },
              split: O,
              merge: function ( t, o, a ) {
                let r, s, d, f, m, b, y, C, v;
                if ( t ) {
                  const e = $( t );
                  r = e.x, s = e.y, d = r + ( o - 1 ), f = s + ( a - 1 )
                } else r = c.x, s = c.y, d = l.x, f = l.y;
                if ( 0 == r && I() ) return;
                y = g( r, s );
                const x = g( d, f );
                if ( y && x && y.part == x.part ) {
                  for ( O(), p(), y = g( r, s ).elm, h( y, "colSpan", d - r + 1 ), h( y, "rowSpan", f - s + 1 ), b = s; b <= f; b++ )
                    for ( m = r; m <= d; m++ ) i[ b ] && i[ b ][ m ] && ( t = i[ b ][ m ].elm ) != y && ( C = u.a.tinymce.grep( t.childNodes ), e( C, e => {
                      y.appendChild( e )
                    } ), C.length && ( C = u.a.tinymce.grep( y.childNodes ), v = 0, e( C, e => {
                      "BR" === e.nodeName && n.getAttrib( e, "data-mce-bogus" ) && v++ < C.length - 1 && y.removeChild( e )
                    } ) ), n.remove( t ) );
                  w()
                }
              },
              insertRow: k,
              insertCol: E,
              insertNumCol: function () {
                if ( I() ) e( i, e => {
                  const t = e[ 0 ].elm;
                  Object( s.default )( t ).hasClass( "numberingColumn" ) && null !== t.parentNode && t.parentNode.removeChild( t )
                } ), S( !1 );
                else {
                  let t;
                  e( i, e => {
                    const n = e[ 0 ].elm;
                    if ( t == n ) return;
                    const o = C( n );
                    n.parentNode.insertBefore( o, n ), n.rowSpan > 1 && ( o.rowSpan = n.rowSpan ), t = n
                  } ), S( !0 )
                }
                A()
              },
              updateNumCol: A,
              deleteCols: M,
              deleteRows: function () {
                const t = y();
                ( u.a.tinymce.isIE9 || u.a.tinymce.isIE10 ) && N( t[ 0 ] ), e( t.reverse(), t => {
                  ! function ( t ) {
                    let o, r;
                    e( t.cells, e => {
                      const t = a( e, "rowSpan" );
                      t > 1 && ( h( e, "rowSpan", t - 1 ), o = $( e ), v( o.x, o.y, 1, 1 ) )
                    } ), o = $( t.cells[ 0 ] ), e( i[ o.y ], e => {
                      let t;
                      ( e = e.elm ) != r && ( t = a( e, "rowSpan" ), t <= 1 ? n.remove( e ) : h( e, "rowSpan", t - 1 ), r = e )
                    } )
                  }( t )
                } ), w(), A()
              },
              cutRows: function () {
                const e = y();
                return ( u.a.tinymce.isIE9 || u.a.tinymce.isIE10 ) && N( e[ 0 ] ), n.remove( e ), w(), A(), e
              },
              copyRows: function () {
                const t = y();
                return e( t, ( e, n ) => {
                  t[ n ] = m( e, !0 )
                } ), t
              },
              pasteRows: function ( t, o ) {
                const a = y(),
                  r = a[ o ? 0 : a.length - 1 ];
                let c = r.cells.length;
                e( i, t => {
                  let n;
                  if ( c = 0, e( t, e => {
                      e.real && ( c += e.colspan ), e.elm.parentNode == r && ( n = 1 )
                    } ), n ) return !1
                } ), o || t.reverse(), e( t, e => {
                  let t, a = e.cells.length;
                  for ( Object( s.default )( e.cells[ 0 ] ).hasClass( "numberingColumn" ) && ( e.removeChild( e.cells[ 0 ] ), a-- ), f = 0; f < a; f++ ) t = e.cells[ f ], h( t, "colSpan", 1 ), h( t, "rowSpan", 1 );
                  for ( I() && ( e.insertBefore( e.firstChild.cloneNode( !1 ), e.firstChild ), Object( s.default )( e.firstChild ).addClass( "numberingColumn" ), a++ ); c < a; ) E( !1 ), c++;
                  for ( f = a; f < c; f++ ) e.appendChild( C( e.cells[ a - 1 ] ) );
                  o ? r.parentNode.insertBefore( e, r ) : n.insertAfter( e, r )
                } ), A()
              },
              getPos: $,
              setStartCell: function ( e ) {
                c = $( e )
              },
              setEndCell: function ( e ) {
                let t, o, a, r, s, d, u, f;
                if ( l = $( e ), c && l ) {
                  t = Math.min( c.x, l.x ), o = Math.min( c.y, l.y ), a = Math.max( c.x, l.x ), r = Math.max( c.y, l.y ), s = a, d = r;
                  for ( let n = o; n <= d; n++ )( e = i[ n ][ t ] ).real || t - ( e.colspan - 1 ) < t && ( t -= e.colspan - 1 );
                  for ( let n = t; n <= s; n++ )( e = i[ o ][ n ] ).real || o - ( e.rowspan - 1 ) < o && ( o -= e.rowspan - 1 );
                  for ( let n = o; n <= r; n++ )
                    for ( let o = t; o <= a; o++ )( e = i[ n ][ o ] ).real && ( u = e.colspan - 1, f = e.rowspan - 1, u && o + u > s && ( s = o + u ), f && n + f > d && ( d = n + f ) );
                  n.removeClass( n.select( "td.mceSelected,th.mceSelected" ), "mceSelected" );
                  for ( let e = o; e <= d; e++ )
                    for ( let o = t; o <= s; o++ ) i[ e ][ o ] && n.addClass( i[ e ][ o ].elm, "mceSelected" )
                }
              },
              moveCaretToNextCell: function () {
                let e = _();
                e || ( k( !1 ), p(), e = _() ), R( e )
              },
              moveCaretToPrevCell: function () {
                let e = P();
                e || ( k( !0 ), p(), c = $( n.getParent( r.getStart(), "th,td" ) ), e = P() ), R( e, !1 )
              },
              cutColumns: function () {
                const e = B();
                return M(), e
              },
              copyColumns: B,
              pasteColumns: function ( e, t ) {
                const n = Object.keys( e );
                t || n.reverse(), s.default.each( n, ( n, o ) => {
                  const a = E( t );
                  for ( n = 0; n < a.length; n++ ) a[ n ].innerHTML = e[ o ][ n ] || ""
                } )
              },
              prepareTableForColPasteAndCheckIfNeedToRepaint: function ( t ) {
                let n, o, a = t[ Object.keys( t )[ 0 ] ].length,
                  r = !1;
                if ( e( i, ( t, r ) => {
                    a--, n = r, e( t, ( e, t ) => {
                      o = t
                    } )
                  } ), a > 0 )
                  for ( r = !0, d = g( o, n ), f = 0; f < a; f++ ) k( !1 );
                return r
              },
              toggleFluidColumnWidth: function () {
                t && t.rows && ( Object( s.default )( t ).toggleFluidColumnWidth(), Object( s.default )( "#table-mode-picker .dropdown-text" ).text( u.a.tinymce.activeEditor.translate( "tinymce.table.responsive" ) ) )
              },
              toggleFixedColumnWidth: function () {
                t && t.rows && ( Object( s.default )( t ).toggleFixedColumnWidth(), Object( s.default )( "#table-mode-picker .dropdown-text" ).text( u.a.tinymce.activeEditor.translate( "tinymce.table.fixed_width" ) ) )
              }
            } )
          }
          return {
            init( t ) {
              let i, c, l = !0;

              function d( e ) {
                const n = t.selection;
                e = e || n.getNode().parentNode;
                const o = t.dom.getParent( e, "table.confluenceTable" );
                if ( o ) return new r( o, t.dom, n )
              }

              function f() {
                t.getBody().style.webkitUserSelect = "", l && ( t.dom.removeClass( t.dom.select( "td.mceSelected,th.mceSelected" ), "mceSelected" ), l = !1 )
              }

              function m( e ) {
                const o = [];
                let a = "";
                for ( let n = 0; n < e.length; n++ ) o.push( t.serializer.serialize( e[ n ] ) );
                a = `<tr>${o.join("</tr><tr>")}</tr>`, n.setItem( "copied", a, 7200 )
              }

              function p() {
                let e = [];
                const o = n.getItem( "copied" ) || "";
                let a;
                return o && ( a = t.getDoc().createElement( "div" ), a.innerHTML = `<table>${o}</table>`, e = Object( s.default )( a ).find( "tr" ) ), e
              }

              function g( e ) {
                n.setItem( "copiedCols", JSON.stringify( e ) )
              }

              function h() {
                return JSON.parse( n.getItem( "copiedCols" ) ) || {}
              }
              e( [
                [ "table", "table.desc", "mceInsertTable", !0 ],
                [ "delete_table", "table.del", "mceTableDelete" ],
                [ "delete_col", "table.delete_col_desc", "mceTableDeleteCol" ],
                [ "delete_row", "table.delete_row_desc", "mceTableDeleteRow" ],
                [ "col_after", "table.col_after_desc", "mceTableInsertColAfter" ],
                [ "col_before", "table.col_before_desc", "mceTableInsertColBefore" ],
                [ "row_after", "table.row_after_desc", "mceTableInsertRowAfter" ],
                [ "row_before", "table.row_before_desc", "mceTableInsertRowBefore" ],
                [ "row_props", "table.row_desc", "mceTableRowProps", !0 ],
                [ "cell_props", "table.cell_desc", "mceTableCellProps", !0 ],
                [ "split_cells", "table.split_cells_desc", "mceTableSplitCells", !0 ],
                [ "merge_cells", "table.merge_cells_desc", "mceTableMergeCells", !0 ]
              ], e => {
                t.addButton( e[ 0 ], {
                  title: e[ 1 ],
                  cmd: e[ 2 ],
                  ui: e[ 3 ]
                } )
              } ), u.a.tinymce.isIE || t.on( "Click", e => {
                "TABLE" === ( e = e.target ).nodeName && ( t.selection.select( e ), t.nodeChanged() )
              } ), t.on( "PreProcess", e => {
                let n, o, a;
                const r = t.dom,
                  i = r.select( "table", e.node );
                for ( n = i.length; n--; ) o = i[ n ], r.setAttrib( o, "data-mce-style", "" ), ( a = r.getAttrib( o, "width" ) ) && ( r.setStyle( o, "width", a ), r.setAttrib( o, "width", "" ) ), ( a = r.getAttrib( o, "height" ) ) && ( r.setStyle( o, "height", a ), r.setAttrib( o, "height", "" ) )
              } ), t.on( "init", () => {
                let n, o, r;
                const i = t.dom;

                function c( e ) {
                  if ( !u.a.tinymce.isWebKit ) return;
                  const t = e.selection.getRng(),
                    n = e.selection.getNode();
                  let o = e.dom.getParent( t.startContainer, "TD,TH" );
                  if ( ! function ( e, t, n, o ) {
                      const a = e.dom.getParent( t.startContainer, "TABLE" );
                      let r;
                      a && ( r = a.parentNode );
                      const i = 3 === t.startContainer.nodeType && 0 == t.startOffset && 0 == t.endOffset && o && ( "TR" === n.nodeName || n == r ),
                        c = ( "TD" === n.nodeName || "TH" === n.nodeName ) && !o;
                      return i || c
                    }( e, t, n, o ) ) return;
                  o || ( o = n );
                  let a = o.lastChild;
                  for ( ; a.lastChild; ) a = a.lastChild;
                  t.setEnd( a, a.nodeValue.length ), e.selection.setRng( t )
                }
                if ( t.on( "MouseDown", e => {
                    2 != e.button && ( f(), o = i.getParent( e.target, "td,th" ), n = i.getParent( o, "table" ) )
                  } ), i.bind( t.getDoc(), "mouseover", e => {
                    let a, c;
                    const s = i.getParent( e.target, "td,th" );
                    if ( o && ( r || s != o ) && s ) {
                      c = i.getParent( s, "table" ), c == n && ( r || ( r = d( c ), r.setStartCell( o ), t.getBody().style.webkitUserSelect = "none" ), r.setEndCell( s ), l = !0 ), a = t.selection.getSel();
                      try {
                        a.removeAllRanges ? a.removeAllRanges() : a.empty()
                      } catch ( u ) {}
                      e.preventDefault()
                    }
                  } ), t.on( "MouseUp", () => {
                    let e;
                    const a = t.selection;
                    let c, l, s, d;
                    if ( o ) {
                      function f( t, n ) {
                        const o = new u.a.tinymce.dom.TreeWalker( t, t );
                        do {
                          if ( 3 === t.nodeType && 0 !== u.a.tinymce.trim( t.nodeValue ).length ) return void( n ? e.setStart( t, 0 ) : e.setEnd( t, t.nodeValue.length ) );
                          if ( "BR" === t.nodeName ) return void( n ? e.setStartBefore( t ) : e.setEndBefore( t ) )
                        } while ( t = n ? o.next() : o.prev() )
                      }
                      if ( r && ( t.getBody().style.webkitUserSelect = "" ), c = i.select( "td.mceSelected,th.mceSelected" ), c.length > 0 ) {
                        e = i.createRng(), s = c[ 0 ], e.setStartBefore( s ), e.setEndAfter( s ), f( s, 1 ), l = new u.a.tinymce.dom.TreeWalker( s, i.getParent( c[ 0 ], "table" ) );
                        do {
                          if ( "TD" === s.nodeName || "TH" === s.nodeName ) {
                            if ( !i.hasClass( s, "mceSelected" ) ) break;
                            d = s
                          }
                        } while ( s = l.next() );
                        f( d ), a.setRng( e )
                      }
                      t.nodeChanged(), o = r = n = null
                    }
                  } ), t.on( "Undo", () => {
                    l = t.dom.select( "td.mceSelected, th.mceSelected" ).length > 0
                  } ), t.on( "KeyUp", () => {
                    f()
                  } ), t.on( "KeyDown", () => {
                    c( t )
                  } ), t.on( "MouseDown", e => {
                    2 != e.button && c( t )
                  } ), t.plugins.aeTable.fixTableCellSelection = c, u.a.tinymce.isWebKit ) {
                  t.on( "KeyDown", ( function ( n ) {
                    const o = u.a.tinymce.util.VK,
                      r = n.keyCode;

                    function i( e, n, o ) {
                      const a = e ? "previousSibling" : "nextSibling",
                        r = t.dom.getParent( n, "tr" ),
                        d = r[ a ];
                      if ( d ) return s( t, n, d, e ), u.a.tinymce.dom.Event.cancel( o ), !0; {
                        const d = t.dom.getParent( r, "table" ),
                          f = r.parentNode,
                          m = f.nodeName.toLowerCase();
                        if ( "tbody" === m || m === ( e ? "tfoot" : "thead" ) ) {
                          const a = function ( e, n, o, a ) {
                            const r = t.dom.select( ">" + a, n ),
                              i = r.indexOf( o );
                            if ( e && 0 === i || !e && i === r.length - 1 ) return function ( e, n ) {
                              const o = e ? "thead" : "tfoot",
                                a = t.dom.select( ">" + o, n );
                              return 0 !== a.length ? a[ 0 ] : null
                            }( e, n );
                            if ( -1 === i ) {
                              const e = "thead" === o.tagName.toLowerCase() ? 0 : r.length - 1;
                              return r[ e ]
                            }
                            return r[ i + ( e ? -1 : 1 ) ]
                          }( e, d, f, "tbody" );
                          if ( null !== a ) return function ( e, n, o, a ) {
                            const r = c( n, e );
                            return r && s( t, o, r, e ), u.a.tinymce.dom.Event.cancel( a ), !0
                          }( e, a, n, o )
                        }
                        return function ( e, n, o, a, r ) {
                          const s = a[ o ];
                          if ( s ) return l( s ), !0; {
                            const o = t.dom.getParent( a, "td,th" );
                            if ( o ) return i( e, o, r );
                            return l( c( n, !e ) ), u.a.tinymce.dom.Event.cancel( r )
                          }
                        }( e, r, a, d, o )
                      }
                    }

                    function c( e, n ) {
                      const o = e && e[ n ? "lastChild" : "firstChild" ];
                      return o && "BR" === o.nodeName ? t.dom.getParent( o, "td,th" ) : o
                    }

                    function l( e ) {
                      t.selection.setCursorLocation( e, 0 )
                    }

                    function s( t, n, o, r ) {
                      const i = function ( t, n ) {
                          let o = 0,
                            r = 0;
                          return e( t.children, ( e, t ) => {
                            if ( o += a( e, "colspan" ), r = t, o > n ) return !1
                          } ), r
                        }( o, function ( e ) {
                          let t = 0,
                            n = e;
                          for ( ; n.previousSibling; ) n = n.previousSibling, t += a( n, "colspan" );
                          return t
                        }( t.dom.getParent( n, "td,th" ) ) ),
                        s = o.childNodes[ i ];
                      l( c( s, r ) || s )
                    }

                    function d( e ) {
                      const n = t.selection.getNode(),
                        o = t.dom.getParent( n, "td,th" ),
                        a = t.dom.getParent( e, "td,th" );
                      return o && o !== a && ( r = o, i = a, t.dom.getParent( r, "TABLE" ) === t.dom.getParent( i, "TABLE" ) );
                      var r, i
                    }
                    if ( ( r == o.UP || r == o.DOWN ) && function ( e ) {
                        const t = e.selection.getNode();
                        return null !== e.dom.getParent( t, "tr" )
                      }( t ) ) {
                      const e = t.selection.getNode();
                      setTimeout( () => {
                        d( e ) && i( !n.shiftKey && r === o.UP, e, n )
                      }, 0 )
                    }
                  } ) )
                }
                if ( !u.a.tinymce.isIE ) {
                  function s() {}
                  u.a.tinymce.isGecko && t.on( "KeyDown", e => {
                    let n, o;
                    const a = t.dom;
                    37 !== e.keyCode && 38 !== e.keyCode || ( n = t.selection.getRng(), o = a.getParent( n.startContainer, "table" ), o && t.getBody().firstChild == o && function ( e, t ) {
                      const n = t.ownerDocument,
                        o = n.createRange();
                      o.setStartBefore( t ), o.setEnd( e.endContainer, e.endOffset );
                      const a = n.createElement( "body" );
                      return a.appendChild( o.cloneContents() ), 0 === a.innerHTML.replace( /<(br|img|object|embed|input|textarea)[^>]*>/gi, "-" ).replace( /<[^>]+>/g, "" ).length
                    }( n, o ) && ( n = a.createRng(), n.setStartBefore( o ), n.setEndBefore( o ), t.selection.setRng( n ), e.preventDefault() ) )
                  } ), t.on( "KeyUp", s ), t.on( "SetContent", s ), t.on( "VisualAid", s ), u.a.tinymce.isGecko && t.on( "KeyDown", e => {
                    if ( e.keyCode === u.a.tinymce.util.VK.ENTER && e.shiftKey ) {
                      const e = t.selection.getRng().startContainer;
                      if ( i.getParent( e, "td,th" ) ) {
                        const n = t.getDoc().createTextNode( "\ufeff" );
                        i.insertAfter( n, e )
                      }
                    }
                  } ), t.startContent = t.getContent( {
                    format: "raw"
                  } )
                }
              } ), e( {
                mceTableSplitCells( e ) {
                  e.split()
                },
                mceTableMergeCells( e ) {
                  t.dom.select( "td.mceSelected,th.mceSelected" ).length && e.merge()
                },
                mceTableInsertRowBefore( e ) {
                  e.insertRow( !0 )
                },
                mceTableInsertRowAfter( e ) {
                  e.insertRow()
                },
                mceTableInsertNumberingCol( e ) {
                  e.insertNumCol()
                },
                mceTableUpdateNumberingCol( e ) {
                  e.updateNumCol()
                },
                mceAutoWidth( e ) {
                  e.toggleFluidColumnWidth()
                },
                mceFixedWidth( e ) {
                  e.toggleFixedColumnWidth()
                },
                mceTableInsertColBefore( e ) {
                  o = null, e.insertCol( !0 )
                },
                mceTableInsertColAfter( e ) {
                  o = null, e.insertCol()
                },
                mceTableDeleteCol( e ) {
                  e.deleteCols()
                },
                mceTableDeleteRow( e ) {
                  e.deleteRows()
                },
                mceTableCutRow( e ) {
                  i = e.cutRows(), m( i )
                },
                mceTableCopyRow( e ) {
                  i = e.copyRows(), m( i )
                },
                mceTablePasteRowBefore( e ) {
                  e.pasteRows( p(), !0 )
                },
                mceTablePasteRowAfter( e ) {
                  e.pasteRows( p() )
                },
                mceTableDelete( e ) {
                  e.deleteTable()
                },
                mceTableMoveCaretToNextCell( e ) {
                  e.moveCaretToNextCell()
                },
                mceTableMoveCaretToPrevCell( e ) {
                  e.moveCaretToPrevCell()
                },
                mceTableCopyCol( e ) {
                  c = e.copyColumns(), g( c )
                },
                mceTableCutCol( e ) {
                  c = e.cutColumns(), g( c )
                },
                mceTablePasteColBefore( e ) {
                  const n = h();
                  e.prepareTableForColPasteAndCheckIfNeedToRepaint( n ) && ( t.execCommand( "mceRepaint" ), e = d() ), e.pasteColumns( n, !0 )
                },
                mceTablePasteColAfter( e ) {
                  e.pasteColumns( h(), !1 )
                }
              }, ( e, n ) => {
                t.addCommand( n, () => {
                  const n = d();
                  n && ( e( n ), t.execCommand( "mceRepaint" ), f() )
                } )
              } ), X( t ), be( t ), ye( t )
            }
          }
        };
      n( "zFIa" );
      var ve = function ( e ) {
        return e.replace( /[&"'<>`]/g, e => {
          const t = {
            "<": "&lt;",
            ">": "&gt;",
            "&": "&amp;",
            "'": "&#39;",
            "`": "&#96;"
          };
          return "string" == typeof t[ e ] ? t[ e ] : "&quot;"
        } )
      };

      function Oe( e, t, n ) {
        "cl.ly" == e.host ? s.default.get( `${b.a}/rest/autoconvert/1.0/cloudappembed?resource=${e.path.substr(1)}`, e => {
          if ( e ) switch ( e.item_type ) {
            case "image":
              const o = ve( e.content_url );
              n( Object( s.default )( `<img class="confluence-embedded-image confluence-external-resource" src="${o}" data-image-src="${o}"/>` )[ 0 ] );
              break;
            case "bookmark":
              t.text( e.name ), t.attr( "href", ve( e.redirect_url ) ), n( t )
          } else n()
        } ) : n()
      }
      var xe = n( "kC4U" ),
        ke = n( "ewfN" );

      function Te() {
        const e = this,
          t = function ( e, t, n ) {
            return t.anchor && 0 !== t.anchor.indexOf( "comment-" ) ? n ? `${e}#${n}` : `${e}#${t.anchor.substring(t.anchor.indexOf("-")+1)}` : e
          },
          n = function ( e, t, n ) {
            if ( !a( e ) ) return void n();
            const r = ke.EDIT_PAGE_V2.match( e.path ) || ke.VIEW_PAGE.match( e.path );
            var i, c;
            r ? ( i = r.params.contentId, Object( xe.a )( "/cgraphql?q=CheckIfFabric", {
              method: "POST",
              headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                "X-APOLLO-OPERATION-NAME": "CheckIfFabric"
              },
              body: ( c = {
                contentId: i
              }, JSON.stringify( {
                operationName: "CheckIfFabric",
                variables: c,
                query: "\n      query CheckIfFabric ($contentId: ID) {\n        content(id: $contentId) {\n          nodes {\n            metadata {\n              simple {\n                isFabric\n              }\n            }\n          }\n        }\n      }\n    "
              } ) )
            } ) ).then( async a => {
              var r;
              const i = await a.json();
              Boolean( null != ( r = i.data ) && null != ( r = r.content ) && null != ( r = r.nodes ) && null != ( r = r[ 0 ] ) && null != ( r = r.metadata ) && null != ( r = r.simple ) ? r.isFabric : r ) ? o( e, t, n, e.anchor ) : o( e, t, n )
            } ).catch( e => {
              throw new Error( "Error retrieving content type: " + e )
            } ) : o( e, t, n )
          },
          o = function ( n, o, a, r ) {
            const i = function ( e ) {
                return b.a ? e.path.substring( b.a.length + 1 ) : e.path.substring( 1 )
              }( n ),
              c = decodeURIComponent( i ).split( "/" );
            let l;
            n.queryKey = n.queryKey || {}, n.queryKey.focusedCommentId ? ( l = "$" + n.queryKey.focusedCommentId, l = t( l, n ) ) : n.queryKey.pageId ? ( l = "$" + n.queryKey.pageId, l = t( l, n ) ) : "display" === c[ 0 ] ? l = function ( e, n, o ) {
              return 2 === o.length && 0 === o[ 1 ].indexOf( "~" ) ? n = o[ 1 ] : 3 === o.length ? ( n = `${o[1]}:${o[2].replace(/\+/g," ")}`, n = t( n, e ) ) : 4 === o.length && "status" === o[ 1 ] ? n = "$" + o[ 3 ] : 6 === o.length && ( n = o[ 1 ] + ":" + `/${o[2]}/${o[3]}/${o[4]}/${o[5].replace(/\+/g," ")}`, n = t( n, e ) ), n
            }( n, l, c ) : "spaces" === c[ 0 ] && ( l = e.spaViewPageLinkHandler( c ), l = l || e.spaBlogPostLinkHandler( c ), l = l ? t( l, n, r ) : function ( e, n, o ) {
              return 2 !== o.length && 3 !== o.length || -1 !== o[ 1 ].indexOf( ".action" ) || ( n = o[ 1 ] + ":", n = t( n, e ) ), n
            }( n, l, c ) ), l ? ( l = `[${l}]`, u.a.tinymce.plugins.Autoconvert.getHtmlFromWikiMarkup( l, e => {
              if ( r ) {
                if ( e.match( /href="#/ ) ) e = e.replace( /(data-base-url=".*">)(.*)(<\/a><\/p>)$/, `$1${decodeURIComponent(r)}$3` );
                else {
                  const t = e.match( /(data-anchor=")([^"]*)(" )/ )[ 2 ],
                    n = e.match( /(data-linked-resource-default-alias=")([^"]*)(" )/ )[ 2 ],
                    o = n.lastIndexOf( t ),
                    a = n.substring( 0, o ) + decodeURIComponent( r );
                  e = e.replace( /(data-base-url=".*">)(.*)(<\/a><\/p>)$/, `$1${a}$3` )
                }
                e = ( e = ( e = e.replace( /(href="[^#]*#)([^"]*)(" )/, `$1${r}$3` ) ).replace( /(data-linked-resource-default-alias=")([^"]*)(" )/, `$1${r}$3` ) ).replace( /data-anchor="(.*?)"/, `data-anchor="${r}"` )
              }
              a( Object( s.default )( e ).children()[ 0 ] )
            }, () => {
              a()
            } ) ) : a()
          },
          a = function ( e ) {
            let t = !0;
            return t = t && e.authority === document.location.host, t = t && ( !b.a || 0 === e.path.indexOf( b.a ) ), t
          };
        this.init = function () {
          u.a.tinymce.plugins.Autoconvert.autoConvert.addHandler( n )
        }
      }
      Te.prototype.spaViewPageLinkHandler = function ( e ) {
        const t = "spaces" === e[ 0 ] && "pages" === e[ 2 ],
          n = "edit" === e[ 3 ] ? e[ 4 ] : e[ 3 ];
        if ( t && n ) return "$" + n
      }, Te.prototype.spaBlogPostLinkHandler = function ( e ) {
        const t = "spaces" === e[ 0 ] && "blog" === e[ 2 ],
          n = e[ 1 ],
          o = e[ 3 ],
          a = e[ 4 ],
          r = e[ 5 ],
          i = e[ 6 ],
          c = e[ 7 ];
        if ( t && n && o && a && r && i && c ) return `${n}:$${i}/${o}/${a}/${r}/${c.replace(/\+/g," ")}`
      };

      function je() {
        u.a.tinymce.plugins.Autoconvert.autoConvert.addHandler( ( function ( e, t, n ) {
          if ( e.host.match( /google.*/ ) && "/url" === e.path && e.queryKey && e.queryKey.url ) {
            const o = decodeURIComponent( e.queryKey.url );
            ( t = Object( s.default )( t ) ).attr( "href", o ), t.attr( "data-mce-href", o ), t.text( o ), n( t )
          } else n()
        } ) )
      }

      function Ee( e, t, n ) {
        if ( -1 === e.host.search( ".linkedin." ) ) return void n();
        const o = "https://card-meta.atlassian.io/meta?url=" + e.source;
        s.default.ajax( o, {
          timeout: 5e3,
          success( n ) {
            if ( -1 !== n.title.search( "Sign In" ) ) return;
            const o = n.title.indexOf( "|" ),
              a = -1 === o ? n.title : n.title.substring( 0, o );
            t.text( a ), t.attr( "href", e.source )
          },
          error( e, t ) {
            0
          },
          complete() {
            n()
          }
        } )
      }
      const Ae = function () {
        let e = [];
        const t = function ( e ) {
          return e.indexOf( "%s" ) >= 0 ? e.replace( /[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&" ).replace( "%s", "(.*)" ) : e.replace( /[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&" ) + "(.*)"
        };
        u.a.tinymce.plugins.Autoconvert.autoConvert.addHandler( ( function ( t, n, o ) {
          if ( t.source === n.text() ) {
            for ( let a = 0; a < e.length; a++ ) {
              const r = e[ a ],
                i = t.source.match( r.regex );
              if ( i ) {
                const e = i[ 1 ];
                if ( r.defaultAlias ) {
                  const t = r.defaultAlias.replace( /%s/, e );
                  return void o( Object( s.default )( n ).text( t ) )
                }
                return void o( Object( s.default )( n ).text( e ) )
              }
            }
            o()
          } else o()
        } ) ), setTimeout( () => {
          s.default.ajax( {
            url: b.a + "/rest/autoconvert/latest/shortcutlinkconfigurations",
            type: "GET",
            dataType: "json",
            success( n ) {
              e = n.configurations;
              for ( let a = 0; a < e.length; a++ ) {
                const n = e[ a ];
                try {
                  n.regex = new RegExp( t( n.expandedValue, n.defaultAlias ) )
                } catch ( o ) {
                  console.log( "Failed to generated regex for " + n )
                }
              }
            },
            error( e ) {
              console.log( "Failed to load shortcut link configurations " + e.statusText )
            }
          } )
        }, 0 )
      };
      const Ie = {
        pasteHandler( e, t, n ) {
          "www.skitch.com" === e.host || "skitch.com" === e.host ? s.default.get( `${b.a}/rest/autoconvert/1.0/skitchembed?url=${e.source}`, e => {
            e && e.url ? n( Object( s.default )( `<img class="confluence-embedded-image confluence-external-resource" src="${e.url}" data-image-src="${e.url}"/>` )[ 0 ] ) : n()
          } ) : n()
        }
      };

      function Se() {
        const e = [ /youtube.com\/watch\?/, /vimeo.com\/[0-9]+/, /maps.google(.[a-z]+)+\/maps/, /[^\.]\.wufoo\.com\/(?:forms|reports)/ ];
        u.a.tinymce.plugins.Autoconvert.autoConvert.addHandler( ( function ( t, n, o ) {
          const a = decodeURI( t.source );
          for ( let r = 0; r < e.length; r++ )
            if ( a.match( e[ r ] ) ) {
              const e = {
                name: "widget",
                params: {
                  url: a
                }
              };
              return void u.a.tinymce.plugins.Autoconvert.convertMacroToDom( e, o, o )
            } o()
        } ) )
      }

      function Me() {
        u.a.tinymce.plugins.Autoconvert.autoConvert.addHandler( ( e, t, n ) => {
          if ( e.host.match( ".*youtu.be.*" ) ) {
            const o = "http://youtube.com/watch?v=" + e.path.substr( 1 );
            n( Object( s.default )( t ).attr( "href", o ).html( o ) )
          } else n()
        } )
      }
      const Be = {
        issueKeyOnlyRegEx: /\/(i#)?browse\/([\x00-\x19\x21-\x22\x24\x27-\x3E\x40-\x7F]+-[0-9]+$)/,
        singleTicketXMLEx: /\/jira\.issueviews:issue-xml\/([\x00-\x19\x21-\x22\x24\x27-\x3E\x40-\x7F]+-[0-9]+)\//,
        issueKeyWithinRegex: /\/(i#)?browse\/([\x00-\x19\x21-\x22\x24\x27-\x3E\x40-\x7F]+-[0-9]+)(?:\?|#)/,
        jqlRegEx: /jqlQuery\=([^&]+)/,
        jqlRegExAlternateFormat: /jql\=([^&]+)/,
        _getMatchedServerFromLink( e, t ) {
          let n = null;
          for ( const o in t )
            if ( t.hasOwnProperty( o ) ) {
              const a = t[ o ];
              let r = a.url;
              if ( "/" !== a.url[ a.url.length - 1 ] && ( r += "/" ), 0 === e.indexOf( r ) ) {
                n = a;
                break
              }
            } return n
        },
        pasteHandler( e, t, n ) {
          const o = O.a.Editor.JiraConnector.servers;
          if ( !o ) return n(), null;
          const a = O.a.Editor.JiraAnalytics,
            r = {},
            i = Be._getMatchedServerFromLink( e.source, o );
          let c = null;
          if ( i ) {
            const t = Be.jqlRegEx.exec( e.source ) || Be.jqlRegExAlternateFormat.exec( e.source ),
              n = O.a.JQLHelper.isFilterUrl( e.source );
            let o = Be.issueKeyOnlyRegEx.exec( e.source ) || Be.issueKeyWithinRegex.exec( e.source );
            if ( o ? ( o = o[ 2 ], a && ( r.type = a.linkTypes.jql ) ) : ( o = Be.singleTicketXMLEx.exec( e.source ), o && ( o = o[ 1 ], a && ( r.type = a.linkTypes.xml ) ) ), t ) r.is_single_issue = !1, r.type = O.a.JQLHelper.checkQueryType( e.source ), c = {
              name: "jira",
              params: {
                server: i.name,
                serverId: i.id,
                jqlQuery: decodeURIComponent( t[ 1 ].replace( /\+/g, "%20" ) )
              }
            };
            else if ( n ) {
              const t = e.source;
              r.is_single_issue = !1, r.type = O.a.JQLHelper.checkQueryType( t ), c = {
                name: "jira",
                params: {
                  server: i.name,
                  serverId: i.id,
                  jqlQuery: O.a.JQLHelper.getFilterFromFilterUrl( t )
                }
              }
            } else o && ( r.is_single_issue = !0, c = {
              name: "jira",
              params: {
                server: i.name,
                serverId: i.id,
                key: o
              }
            } )
          }
          c ? ( u.a.tinymce.plugins.Autoconvert.convertMacroToDom( c, n, n ), a && a.triggerPasteEvent( r ) ) : n()
        }
      };
      const Ne = {
        pasteHandler( e, t, n ) {
          const {
            source: o
          } = e, {
            context: {
              activeElement: a = null
            }
          } = t;
          let r = null;
          ( e => /^http[s]?:\/\/.*\/secure\/Roadmap\.jspa.*(\?|&)projectKey=([\w][\w]+)/g.exec( e ) )( o ) && a && a.classList.contains( "page-edit" ) && ( r = {
            name: "jiraroadmap",
            params: {
              url: o
            }
          } ), r ? u.a.tinymce.plugins.Autoconvert.convertMacroToDom( r, n, n ) : n()
        }
      };
      const Re = /^\/(.*?)\/status\/([^/]+\/?$)/,
        _e = /^\/(.*?)\/statuses\/([^/]+\/?$)/,
        Pe = ( e, t, n ) => {
          let o, a, r;
          e.host.match( /^twitter.com/ ) ? ( ( o = decodeURI( e.path ).match( Re ) ) ? a = `${e.protocol}://twitter.com/${o[1]}/status/${o[2]}` : ( o = decodeURI( e.path ).match( _e ) ) && ( a = `${e.protocol}://twitter.com/${o[1]}/statuses/${o[2]}` ), a ? ( r = {
            name: "widget",
            params: {
              url: a
            }
          }, u.a.tinymce.plugins.Autoconvert.convertMacroToDom( r, n, n ) ) : n() ) : n()
        };
      const $e = {
        pasteHandler( e, t, n ) {
          const {
            source: o
          } = e, {
            context: {
              activeElement: a = null
            }
          } = t;
          let r = null;
          ( e => {
            const t = new RegExp( /^(https?):\/\/[-a-zA-Z0-9+&@#\/%?=~_|!:,.;]*[-a-zA-Z0-9+&@#\/%=~_|]/ );
            return -1 !== e.indexOf( "PortfolioRoadmapConfluence.jspa" ) && e.match( t )
          } )( o ) && a && a.classList.contains( "page-edit" ) && ( r = {
            name: "portfolioforjiraplan",
            params: {
              url: o,
              planHeight: "700"
            }
          } ), r ? u.a.tinymce.plugins.Autoconvert.convertMacroToDom( r, n, n ) : n()
        }
      };
      const He = /\son[\w-]+(?=[^<]*>)/gi;

      function De() {
        Object( a.a )( "init.rte", () => {
            u.a.tinymce.plugins.Autoconvert.autoConvert.addHandler( Oe )
          } ),
          function () {
            const e = new Te;
            Object( a.a )( "init.rte", e.init )
          }(), Object( a.a )( "init.rte", je ), x( "autoconvert-link-to-page-title" ) && Object( a.a )( "init.rte", () => {
            u.a.tinymce.plugins.Autoconvert.autoConvert.addHandler( Ee )
          } ), Object( a.a )( "init.rte", Ae ), Object( a.a )( "init.rte", () => {
            u.a.tinymce.plugins.Autoconvert.autoConvert.addHandler( Ie.pasteHandler )
          } ), Object( a.a )( "init.rte", Se ), Object( a.a )( "init.rte", Me ), Object( a.a )( "init.rte", () => {
            u.a.tinymce.plugins.Autoconvert.autoConvert.addHandler( Be.pasteHandler )
          } ), Object( a.a )( "init.rte", () => u.a.tinymce.plugins.Autoconvert.autoConvert.addHandler( Pe ) ), Object( a.a )( "init.rte", () => {
            u.a.tinymce.plugins.Autoconvert.autoConvert.addHandler( Ne.pasteHandler )
          } ), Object( a.a )( "init.rte", () => {
            u.a.tinymce.plugins.Autoconvert.autoConvert.addHandler( $e.pasteHandler )
          } )
      }
      let Le = {
        initializeEditor() {
          u.a.AJS && u.a.AJS.Rte && u.a.AJS.Rte.BootstrapManager && u.a.AJS.Rte.BootstrapManager.addOnInitCallback( () => {
            const e = u.a.tinymce.activeEditor;
            e && ( !u.a.MutationObserver || u.a.tinymce.Env.gecko || u.a.tinymce.Env.webkit ? function ( e ) {
              e.on( "Paste", e => !!Le.onPaste( e ) || ( u.a.tinymce.dom.Event.cancel( e ), !1 ) )
            }( e ) : function ( e ) {
              new MutationObserver( e => {
                for ( let t = 0; t < e.length; t++ ) {
                  const n = e[ t ];
                  if ( n.addedNodes.length )
                    for ( let e = 0; e < n.addedNodes.length; e++ ) {
                      if ( "img" === n.addedNodes[ e ].localName ) return void u.a.setTimeout( Le.pasteFromDataURL, 0 )
                    }
                }
              } ).observe( e.getDoc(), {
                childList: !0,
                subtree: !0
              } )
            }( e ) )
          } )
        },
        pasteFromDataURL() {
          const e = Object( s.default )( 'img[src^="data:image"]:not(".editor-inline-macro")', u.a.tinymce.activeEditor.getDoc() );
          s.default.each( e, ( function () {
            const e = this.src;
            let t, n, o;
            if ( x( "filestore.direct.upload" ) && !x( "filestore.direct.upload.force.disable" ) ) {
              const o = e.split( "," ),
                a = atob( o[ 1 ] );
              let r = a.length;
              for ( n = a.length, t = new Uint8Array( r ); r--; ) t[ r ] = a.charCodeAt( r )
            } else {
              o = "base64", t = e.substring( 22, e.length ), n = 3 * t.length / 4;
              let a = 0;
              for ( let e = t.length - 1;
                "=" == t[ e ]; e-- ) a++;
              n -= a
            }
            u.a.AJS.Confluence.Uploader.upload( [ Le.createUploadFile( t, n, o ) ] )
          } ) ), e.remove()
        },
        onPaste: e => !e || !e.clipboardData || Le.pasteFromEvent( e ),
        showClipboardAccessError() {
          const e = u.a.tinymce.activeEditor;
          new u.a.AJS.Dialog( {
            width: 400,
            closeOnOutsideClick: !0
          } ).addPanel( "alert", Object( s.default )( "<div />", {
            text: e.translate( "clipboardaccess.browser.not.supported" )
          } ) ).addButton( e.translate( "clipboardaccess.ok" ), e => {
            e.remove()
          } ).show().updateHeight()
        },
        pasteFromEvent( e ) {
          if ( e && e.clipboardData ) {
            if ( e.clipboardData.items ) {
              const t = e.clipboardData.items[ 0 ];
              if ( !t || "file" != t.kind ) return !0;
              const n = t.getAsFile(),
                o = Le.createUploadFile( n, n.size );
              return u.a.AJS.Confluence.Uploader.upload( [ o ] ), !1
            }
            u.a.setTimeout( e => {
              const t = Object( s.default )( "img[src^='webkit-fake-url://']", u.a.tinymce.activeEditor.getDoc() );
              t.length && ( t.remove(), e.showClipboardAccessError() )
            }, 0, this )
          }
          return !0
        },
        createUploadFile( e, t, n ) {
          const o = new Date,
            a = o.getMonth() + 1;
          return {
            fileName: `image${o.getFullYear()}-${a}-${o.getDate()}_${o.getHours()}-${o.getMinutes()}-${o.getSeconds()}.png`,
            fileSize: t,
            slice: ( t, n ) => e.slice( t, t + n ),
            getAsBinary: () => e,
            getData: () => e,
            encoding: n
          }
        }
      };
      n( "e2U2" );
      const Fe = function () {
        const e = u.a.Confluence.PropertyPanel;
        if ( s.default.browser.msie && s.default.browser.version <= 8 ) return;
        let t, n, o, r, i, c, l, d, m, p, g, h, b;
        const y = [ 800, 800, 400, 400, 400, 300, 300, 300, 300, 300, 300, 300, 300, 300, 300, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100 ];
        const C = "p,h1,h2,h3,h4,h5,h6,blockquote,li,td,th,img";

        function w( e ) {
          const n = !!r.children( ".contentLayout,.contentLayout2" ).length;

          function a() {
            return o.find( "#move-indicator" )
          }

          function i( e ) {
            return "move-indicator" === e.attr( "id" )
          }

          function c( e ) {
            return n ? e.is( "div.innerCell,div.cell" ) : e.is( "body" )
          }

          function l( e, t, n ) {
            if ( e.is( "img" ) ) {
              return function ( e, t ) {
                const n = e.offset(),
                  a = t + o.scrollLeft();
                return a - n.left
              }( e, t ) < e.width() / 2
            }
            return d( e, n ) < e.height() / 2
          }

          function d( e, t ) {
            const n = e.offset();
            return t + o.scrollTop() - n.top
          }
          return {
            positionNear: function ( t, n ) {
              const u = function ( t, n ) {
                let u = Object( s.default )( o[ 0 ].elementFromPoint( t, n ) ),
                  f = !0;
                if ( function ( t ) {
                    if ( t.is( C ) && !i( t ) ) return ( !t.is( "td.wysiwyg-macro-body" ) || "PLAIN_TEXT" !== t.closest( "table" ).attr( "data-macro-body-type" ) ) && !( t.is( "img" ) && !e.is( "img" ) );
                    return !1
                  }( u ) ) return {
                  target: u,
                  before: l( u, t, n )
                };
                if ( c( u ) ) {
                  if ( u = function ( e ) {
                      if ( e.is( "div.cell" ) ) return e.children( "div.innerCell" ).first();
                      return e
                    }( u ), function ( e, t ) {
                      return d( e.children().first(), t ) < 0
                    }( u, n ) ) u = u.children().first();
                  else if ( function ( e, t ) {
                      return function ( e, t ) {
                        const n = d( e, t ),
                          o = e.height();
                        return n - o
                      }( e.children().last(), t ) > 0
                    }( u, n ) ) u = u.children().last(), f = !1;
                  else {
                    if ( m = u, a().length > 0 && a().parent( m ).length > 0 ) return null;
                    u = function ( t ) {
                      let n = e.parent( C );
                      n.length || ( n = t.find( C ).last() );
                      n.length || ( n = r.find( C ).last() );
                      return n
                    }( u ), f = !1
                  }
                  return {
                    target: u,
                    before: f
                  }
                }
                var m;
                return null
              }( t, n );
              u && function ( e, t ) {
                if ( i( e ) ) return;
                let n = a();
                if ( e.is( "li,td,th" ) && e.find( n ).length ) return;
                n.length ? n.detach() : n = Object( s.default )( '<span id="move-indicator">|</span>' );
                !( e = function ( e ) {
                  if ( e.is( "li,td,th" ) ) {
                    const t = e.children().first();
                    t.is( "p,h1,h2,h3,h4,h5,h6,blockquote" ) && ( e = t )
                  }
                  return e
                }( e ) ).is( "img" ) && Object( f.b )().Cursor.isTextContainerEmpty( e[ 0 ] ) ? e.prepend( n ) : e.is( "li,td,th" ) ? t ? e.prepend( n ) : e.append( n ) : t ? e.before( n ) : e.after( n )
              }( u.target, u.before )
            },
            replaceWith: function ( e ) {
              const n = a();
              n.length ? ( e.is( "img" ) && c( n.parent() ) && ( e = Object( s.default )( "<p></p>" ).append( e ) ), n.replaceWith( e ), t.dom.isBlock( e[ 0 ] ) && e.parent().is( "p" ) && e.unwrap(), Object( f.b )().showElement( e ), t.selection.select( e[ 0 ] ), t.selection.collapse( !0 ) ) : t.undoManager.undo(), Object( f.b )().Cursor.fixCursorTargets( t.getBody() )
            },
            destroy: function () {
              const e = a();
              e.length && ( e.remove(), Object( f.b )().Cursor.fixCursorTargets( t.getBody() ) )
            }
          }
        }

        function v( e ) {
          if ( 1 !== e.which ) return;
          if ( e.target !== e.currentTarget ) return;
          if ( m ) return void T( e );
          m = Object( s.default )( e.target ), t.selection.select( e.target ), e.preventDefault(), o.bind( {
            "mousemove.moveable-zone": k,
            "mouseup.moveable-zone": T,
            "keydown.moveable-zone": O,
            "mouseover.moveable-zone": x
          } );
          const n = m.offset();
          var a;
          l = e.pageX, d = e.pageY, i = n.top - d, c = n.left - l, g = !0, p = ( a = m ).attr( "style" ) || "", m = a
        }

        function O( e ) {
          27 === e.keyCode && ( h.cancelScrolling(), o.unbind( ".moveable-zone" ), t.undoManager.undo(), t.selection.select( m[ 0 ] ), t.selection.collapse( !1 ), m = null )
        }

        function x() {
          o.find( ".mceSelected" ).removeClass( "mceSelected" )
        }

        function k( o ) {
          if ( g ) {
            if ( function ( e ) {
                const t = Math.abs( l - e.pageX ),
                  n = Math.abs( d - e.pageY );
                return t < 10 && n < 10
              }( o ) ) return;
            Object( f.b )().BookmarkManager.storeBookmark(), t.undoManager.beforeChange(), t.undoManager.typing = !0, t.undoManager.add(), Object( a.b )( "synchrony.stop", {
                id: "confluence.draggable-plugin"
              } ),
              function () {
                const e = t.selection.getSel();
                e && e.removeAllRanges && e.removeAllRanges()
              }(), m.css( {
                position: "absolute",
                width: m.css( "width" ),
                "max-width": "50%"
              } ), e.current && e.destroy(), m.detach(), Object( f.b )().Cursor.fixCursorTargets( t.getBody() ), r.append( m ), b = w( m ), g = !1
          }
          o.preventDefault(), m.hide(),
            function ( e, t ) {
              const o = y.length;
              if ( ( t = Math.max( t, 0 ) ) < o ) return void h.scrollUp( y[ t ] );
              const a = n.height(),
                r = Math.max( 0, a - t );
              if ( r < o ) return void h.scrollDown( y[ r ] );
              h.cancelScrolling()
            }( o.clientX, o.clientY ), b.positionNear( o.clientX, o.clientY );
          const s = Math.min( o.pageY + i, h.scrollHeight() - m.outerHeight() ),
            u = o.pageX + c;
          m.css( {
            top: s,
            left: u,
            opacity: .5
          } ), m.show()
        }

        function T( e ) {
          o.unbind( ".moveable-zone" ), h.cancelScrolling(), g ? m = null : ( e.preventDefault(), m.detach(), m.attr( "style", p ), b.replaceWith( m ), b.destroy(), m = null, b = null, x(), t.undoManager.add(), Object( a.b )( "synchrony.start", {
            id: "confluence.draggable-plugin"
          } ) )
        }
        return {
          init( e ) {
            t = e, e.on( "Init", () => {
              let t;
              n = Object( s.default )( e.getWin() ), o = Object( s.default )( e.getDoc() ), r = Object( s.default )( e.getBody() ), t = s.default.browser.webkit ? r : o.find( "html" ), h = function ( e ) {
                let t = 0;
                return {
                  scrollUp( n ) {
                    if ( t === -n ) return;
                    t = -n;
                    const o = e.scrollTop() / n * 1e3;
                    e.stop( !1, !1 ), e.animate( {
                      scrollTop: 0
                    }, {
                      duration: o
                    } )
                  },
                  scrollDown( n ) {
                    if ( t === n ) return;
                    const o = e[ 0 ].scrollHeight,
                      a = ( o - e.scrollTop() ) / n * 1e3;
                    e.stop( !1, !1 ), e.animate( {
                      scrollTop: o
                    }, {
                      duration: a
                    } )
                  },
                  cancelScrolling() {
                    e.stop( !0, !1 )
                  },
                  scrollHeight: () => e[ 0 ].scrollHeight
                }
              }( t ), o.delegate( "img.confluence-embedded-image,img.editor-inline-macro,table.wysiwyg-macro", {
                mousedown: v
              } )
            } )
          },
          getInfo: () => ( {
            longname: "Draggable objects (images, tables, placeholders) around the document via drag and drop",
            author: "Atlassian",
            authorurl: "http://www.atlassian.com",
            version: "1.0"
          } )
        }
      };
      n( "+7yL" );
      const ze = function e( t, n ) {
        let o;
        if ( p.a.get( "atlassian-account-id" ) && p.a.get( "confluence.prefs.editor.disable.autoformat" ) ) return;

        function r( e ) {
          return Object( s.default )( "<div>" ).append( e.cloneNode( !0 ) ).html()
        }

        function i( e ) {
          let t, n;
          if ( !e || !e.collapsed ) throw new Error( "range is null or not collapsed" );
          if ( t = e.startContainer, n = e.startOffset, 1 === t.nodeType && n > 0 ) {
            if ( t = t.childNodes[ e.startOffset - 1 ], 3 !== t.nodeType ) return "";
            n = t.nodeValue.length
          } else if ( 3 !== t.nodeType ) return "";
          let o = t.nodeValue.substring( 0, n );
          for ( let a = t.previousSibling; a && 3 === a.nodeType; a = a.previousSibling ) o = a.nodeValue + o;
          return o
        }

        function c( e, t, n, a ) {
          return {
            handles( t ) {
              let n = !1;
              const o = t.selection.getRng( !0 ),
                r = o.commonAncestorContainer || {};
              return !!o.collapsed && ( !Object( s.default )( r ).closest( "pre,.text-placeholder" ).length && ( ( !a || !Object( s.default )( r ).closest( a ).length ) && ( n = e.test( i( o ) ), n ) ) )
            },
            execute( a, r, c ) {
              let d, m = 1;
              const p = l( r );
              if ( 32 === p ? a.execCommand( "mceInsertContent", !1, "&nbsp;" ) : a.execCommand( "mceInsertContent", !1, String.fromCharCode( p ) ), a.undoManager.transact( () => {
                  const n = a.selection.getRng( !0 );
                  d = i( n ), "|" == d[ d.length - 1 ] && ( d += " ", m = 0 );
                  const r = e.exec( d.substring( 0, d.length - 1 ) ),
                    c = function ( e, t, n ) {
                      let o, a;
                      if ( t ) {
                        3 !== t.nodeType && ( n = ( t = t.childNodes[ n - 1 ] ).length );
                        for ( let r = t, i = n; r && 3 === r.nodeType; r = r.previousSibling ) {
                          if ( -1 == i && ( i = r.nodeValue.length ), i > e ) return {
                            container: r,
                            offset: i - e
                          };
                          if ( i == e ) {
                            for ( a = 0, o = r.parentNode; r = r.previousSibling; ) a++;
                            return {
                              container: o,
                              offset: a
                            }
                          }
                          e -= i, i = -1
                        }
                        return null
                      }
                    }( r[ 1 ].length + m, n.commonAncestorContainer, n.startOffset );
                  n.setStart( c.container, c.offset );
                  const l = Object( s.default )( n.commonAncestorContainer );
                  a.selection.setRng( n ), l.closest( ".wysiwyg-macro-body" ).length && n.toString() == l.text() ? ( l[ 0 ].innerHTML = "<br>", a.selection.select( l[ 0 ].childNodes[ 0 ] ), a.selection.collapse( !0 ) ) : a.execCommand( "delete", !1, {}, {
                    skip_undo: !0
                  } ), t( r, a.selection.getRng( !0 ) ), o = a.selection.getRng( !0 )
                } ), n ) return c.preventDefault(), c.stopPropagation(), u.a.tinymce.dom.Event.cancel( r ), Object( f.b )().showElement( o.startContainer ), !1
            }
          }
        }

        function l( e ) {
          return e.which
        }

        function d() {
          this.handlers = {}
        }
        d.prototype = {
          registerHandler( e, t ) {
            this.handlers[ e ] || ( this.handlers[ e ] = [] ), this.handlers[ e ].push( t )
          },
          executeHandlers( e, t, n, o ) {
            let a = !0;
            return s.default.each( this.handlers[ e ] || [], ( e, r ) => {
              if ( r.handles( t ) ) return a = r.execute( t, n, o ), !1
            } ), a
          }
        };
        const m = n.editor,
          g = new d;

        function h( e, t, n, o, a ) {
          const r = e.charCodeAt( 0 ),
            i = `${Object(f.b)().getResourceUrlPrefix()}/images/icons/emoticons/${a}`,
            l = c( t, () => {
              const e = m.dom.createHTML( "img", {
                src: i,
                alt: m.translate( "tinymce." + o ),
                title: m.translate( "tinymce." + o ),
                border: 0,
                class: "emoticon emoticon-" + n,
                "data-emoticon-name": n
              } );
              m.execCommand( "mceInsertContent", !1, e, {
                skip_undo: !0
              } )
            }, !0 );
          this.imagePath = i, g.registerHandler( r, l )
        }
        const b = [ new h( ")", e.regularExpressions._REGEXES_EMOTICON.SMILE, "smile", "emotions_dlg.smile", "smile.png" ), new h( "(", e.regularExpressions._REGEXES_EMOTICON.SAD, "sad", "emotions_dlg.sad", "sad.png" ), new h( "P", e.regularExpressions._REGEXES_EMOTICON.CHEEKY, "cheeky", "emotions_dlg.tongue", "tongue.png" ), new h( "p", e.regularExpressions._REGEXES_EMOTICON.CHEEKY_2, "cheeky", "emotions_dlg.tongue", "tongue.png" ), new h( "D", e.regularExpressions._REGEXES_EMOTICON.LAUGH, "laugh", "emotions_dlg.biggrin", "biggrin.png" ), new h( ")", e.regularExpressions._REGEXES_EMOTICON.WINK, "wink", "emotions_dlg.wink", "wink.png" ), new h( ")", e.regularExpressions._REGEXES_EMOTICON.THUMBS_UP, "thumbs-up", "emotions_dlg.thumbs_up", "thumbs_up.png" ), new h( ")", e.regularExpressions._REGEXES_EMOTICON.THUMBS_DOWN, "thumbs-down", "emotions_dlg.thumbs_down", "thumbs_down.png" ), new h( ")", e.regularExpressions._REGEXES_EMOTICON.INFORMATION, "information", "emotions_dlg.information", "information.png" ), new h( ")", e.regularExpressions._REGEXES_EMOTICON.TICK, "tick", "emotions_dlg.check", "check.png" ), new h( ")", e.regularExpressions._REGEXES_EMOTICON.CROSS, "cross", "emotions_dlg.error", "error.png" ), new h( ")", e.regularExpressions._REGEXES_EMOTICON.WARNING, "warning", "emotions_dlg.warning", "warning.png" ), new h( ")", e.regularExpressions._REGEXES_EMOTICON.PLUS, "plus", "emotions_dlg.add", "add.png" ), new h( ")", e.regularExpressions._REGEXES_EMOTICON.MINUS, "minus", "emotions_dlg.forbidden", "forbidden.png" ), new h( ")", e.regularExpressions._REGEXES_EMOTICON.QUESTION, "question", "emotions_dlg.help_16", "help_16.png" ), new h( ")", e.regularExpressions._REGEXES_EMOTICON.LIGHT_ON, "light-on", "emotions_dlg.lightbulb_on", "lightbulb_on.png" ), new h( ")", e.regularExpressions._REGEXES_EMOTICON.LIGHT_OFF, "light-off", "emotions_dlg.lightbulb", "lightbulb.png" ), new h( ")", e.regularExpressions._REGEXES_EMOTICON.YELLOW_STAR, "yellow-star", "emotions_dlg.star_yellow", "star_yellow.png" ), new h( ")", e.regularExpressions._REGEXES_EMOTICON.YELLOW_STAR_2, "yellow-star", "emotions_dlg.star_yellow", "star_yellow.png" ), new h( ")", e.regularExpressions._REGEXES_EMOTICON.RED_STAR, "red-star", "emotions_dlg.star_red", "star_red.png" ), new h( ")", e.regularExpressions._REGEXES_EMOTICON.GREEN_STAR, "green-star", "emotions_dlg.star_green", "star_green.png" ), new h( ")", e.regularExpressions._REGEXES_EMOTICON.BLUE_STAR, "blue-star", "emotions_dlg.star_blue", "star_blue.png" ), new h( "3", e.regularExpressions._REGEXES_EMOTICON.HEART, "heart", "emotions_dlg.heart", "heart.png" ), new h( "3", e.regularExpressions._REGEXES_EMOTICON.BROKEN_HEAR, "broken-heart", "emotions_dlg.broken_heart", "broken_heart.png" ) ];
        let y;
        const C = [];
        for ( y = 0; y < b.length; y++ ) C[ y ] = new u.a.Image, C[ y ].src = b[ y ].imagePath;

        function w( e, t ) {
          const n = m.formatter.get( e )[ 0 ],
            o = m.dom.create( n.inline, {
              style: n.styles
            } );
          o.appendChild( document.createTextNode( t ) ), m.execCommand( "mceInsertContent", !1, r( o ) + "\ufeff", {
            skip_undo: !0
          } )
        }
        if ( x( k.a ) ) {
          const e = {
            "*": "italic",
            _: "italic",
            "`": "monospace"
          };
          s.default.each( e, ( e, t ) => {
            const n = new RegExp( `(?:[\\s\\xA0\\u200b\\uFEFF]+|^)(\\${e}(?=[^\\s${e}])([^${e}]*?[^\\s]))$` );
            g.registerHandler( e.charCodeAt( 0 ), c( n, e => {
              w( t, e[ 2 ] )
            }, !0 ) )
          } );
          const t = {
            "*": "bold",
            _: "bold",
            "~": "strikethrough"
          };
          s.default.each( t, ( e, t ) => {
            const n = new RegExp( `(?:[\\s\\xA0\\u200b\\uFEFF]+|^)(\\${e}\\${e}(?=[^\\s])([^*]*?[^\\s])\\${e})$` );
            g.registerHandler( e.charCodeAt( 0 ), c( n, e => {
              w( t, e[ 2 ] )
            }, !0 ) )
          } ), g.registerHandler( " ".charCodeAt( 0 ), c( /^\u200b?(\#)$/, () => {
            m.execCommand( "formatBlock", !1, "h1", {
              skip_undo: !0
            } )
          }, !0 ) ), g.registerHandler( " ".charCodeAt( 0 ), c( /^\u200b?(\#\#)$/, () => {
            m.execCommand( "formatBlock", !1, "h2", {
              skip_undo: !0
            } )
          }, !0 ) ), g.registerHandler( " ".charCodeAt( 0 ), c( /^\u200b?(\#\#\#)$/, () => {
            m.execCommand( "formatBlock", !1, "h3", {
              skip_undo: !0
            } )
          }, !0 ) ), g.registerHandler( " ".charCodeAt( 0 ), c( /^\u200b?(\#\#\#\#)$/, () => {
            m.execCommand( "formatBlock", !1, "h4", {
              skip_undo: !0
            } )
          }, !0 ) ), g.registerHandler( " ".charCodeAt( 0 ), c( /^\u200b?(\#\#\#\#\#)$/, () => {
            m.execCommand( "formatBlock", !1, "h5", {
              skip_undo: !0
            } )
          }, !0 ) ), g.registerHandler( " ".charCodeAt( 0 ), c( /^\u200b?(\#\#\#\#\#\#)$/, () => {
            m.execCommand( "formatBlock", !1, "h6", {
              skip_undo: !0
            } )
          }, !0 ) ), g.registerHandler( " ".charCodeAt( 0 ), c( /^\u200b?(1\))$/, () => {
            m.execCommand( "InsertOrderedList" )
          }, !0 ) ), g.registerHandler( " ".charCodeAt( 0 ), c( /^\u200b?(>)$/, () => {
            m.execCommand( "formatBlock", !1, "blockquote", {
              skip_undo: !0
            } )
          }, !0 ) );
          const n = c( /^\u200b?(\-\-)$/, () => {
              m.execCommand( "mceInsertContent", !1, "<hr />", {
                skip_undo: !0
              } )
            }, !0 ),
            o = c( /^(\*\*)$/, () => {
              m.execCommand( "mceInsertContent", !1, "<hr />", {
                skip_undo: !0
              } )
            }, !0 );
          g.registerHandler( "-".charCodeAt( 0 ), n ), g.registerHandler( "*".charCodeAt( 0 ), o );
          const a = c( /^\u200b?(\`\`)$/, () => {
            B.insertMacro( {
              contentId: p.a.get( "content-id" ) || "0",
              macro: {
                name: "code",
                body: ""
              }
            } )
          }, !0 );
          g.registerHandler( "`".charCodeAt( 0 ), a )
        } else {
          const e = {
            "*": "bold",
            _: "italic",
            "~": "subscript",
            "^": "superscript",
            "+": "underline",
            "-": "strikethrough"
          };
          for ( s.default.each( e, ( e, t ) => {
              const n = new RegExp( `(?:[\\s\\xA0\\u200b\\uFEFF]+|^)(\\${e}(?=[^\\s${e}])([^${e}]*?[^\\s]))$` );
              g.registerHandler( e.charCodeAt( 0 ), c( n, e => {
                w( t, e[ 2 ] )
              }, !0 ) )
            } ), m.formatter.register( "code", {
              inline: "code"
            } ), g.registerHandler( "}".charCodeAt( 0 ), c( /(?:[\s\xA0\u200b]+|^)({{(?=[^\s])([^}]*?[^\s])})$/, e => {
              w( "code", e[ 2 ] )
            }, !0 ) ), y = 1; y <= 6; y++ )( e => {
            g.registerHandler( " ".charCodeAt( 0 ), c( new RegExp( `^\\u200b?(h${e}\\.)$` ), () => {
              m.execCommand( "formatBlock", !1, "h" + e, {
                skip_undo: !0
              } )
            }, !0 ) )
          } )( y );
          g.registerHandler( " ".charCodeAt( 0 ), c( /^\u200b?(bq\.)$/, () => {
            m.execCommand( "formatBlock", !1, "blockquote", {
              skip_undo: !0
            } )
          }, !0 ) );
          const t = c( /^\u200b?(\-\-\-\-)$/, () => {
            m.execCommand( "mceInsertContent", !1, "<hr />", {
              skip_undo: !0
            } )
          }, !0 );
          g.registerHandler( " ".charCodeAt( 0 ), t ), g.registerHandler( 13, t ), g.registerHandler( " ".charCodeAt( 0 ), c( /^\u200b?(\#)$/, () => {
            m.execCommand( "InsertOrderedList" )
          }, !0 ) )
        }
        g.registerHandler( " ".charCodeAt( 0 ), c( /^\u200b?(\*)$/, () => {
          m.execCommand( "InsertUnorderedList" )
        }, !0 ) ), g.registerHandler( " ".charCodeAt( 0 ), c( /^\u200b?(1\.)$/, () => {
          m.execCommand( "InsertOrderedList" )
        }, !0 ) ), g.registerHandler( " ".charCodeAt( 0 ), c( /^\u200b?(\-)$/, () => {
          const e = m.dom;
          m.execCommand( "InsertUnorderedList" );
          const t = e.getParent( m.selection.getNode(), "OL,UL" );
          t && ( e.setStyles( t, {
            listStyleType: "square"
          } ), t.removeAttribute( "data-mce-style" ) )
        }, !0 ) ), Object( a.b )( "confluence.editor.registerHandlers", {
          handlerManager: g,
          createHandler: c,
          ed: m
        } );
        const v = c( /((\<\-\-?\>)([^\s-]*))$/, e => {
          m.execCommand( "mceInsertContent", !1, "↔" + e[ 3 ], {
            skip_undo: !0
          } )
        }, !1 );
        g.registerHandler( " ".charCodeAt( 0 ), v ), g.registerHandler( 13, v );
        const O = c( /((\-\-?\>)([^\s-]*))$/, e => {
          m.execCommand( "mceInsertContent", !1, "→" + e[ 3 ], {
            skip_undo: !0
          } )
        }, !1 );
        g.registerHandler( " ".charCodeAt( 0 ), O ), g.registerHandler( 13, O );
        const T = c( /((\<\-\-?)([^\s-]*))$/, e => {
          m.execCommand( "mceInsertContent", !1, "←" + e[ 3 ], {
            skip_undo: !0
          } )
        }, !1 );
        g.registerHandler( " ".charCodeAt( 0 ), T ), g.registerHandler( 13, T ), g.registerHandler( " ".charCodeAt( 0 ), c( /[^-]*[\s](\-\-\-?)$/, e => {
          const t = 2 === e[ 1 ].length ? "–" : "—";
          m.execCommand( "mceInsertContent", !1, t, {
            skip_undo: !0
          } )
        }, !1 ) );
        const j = c( /(([^\s-]+)(\-\-\-?)([^\s-]+))$/, e => {
          const t = 2 === e[ 3 ].length ? "–" : "—";
          m.execCommand( "mceInsertContent", !1, e[ 2 ] + t + e[ 4 ], {
            skip_undo: !0
          } )
        }, !1 );
        g.registerHandler( " ".charCodeAt( 0 ), j ), g.registerHandler( 13, j ), g.registerHandler( 13, c( /(^\u200b?\|\|\s*(?:[^|]*\s?\|\|\s?)+$)/, e => {
          let t = '<table class="confluenceTable"><tr>',
            n = "",
            o = !0;
          const a = Object( s.default )( e[ 1 ].slice( 2, -2 ).split( "||" ) ).map( ( function ( e ) {
            return e = s.default.trim( this ), o = o && "" == e, e
          } ) );
          o && ( a[ 0 ] = m.translate( "editor.autoformat.sampletext.firstcell" ) );
          for ( let r = 0, i = a.length; r < i; r++ ) t += `<th class="confluenceTh">${a[r]}</th>`, n += `<td class="confluenceTd">${Object(f.b)().ZERO_WIDTH_WHITESPACE}</td>`;
          t += `</tr><tr>${n}</tr></table>`, m.execCommand( "mceInsertContent", !1, t, {
            skip_undo: !0
          } ), m.selection.select( Object( s.default )( m.selection.getRng( !0 ).commonAncestorContainer ).parents( "table" ).find( o ? "th" : "td" )[ 0 ].childNodes[ 0 ] ), Object( s.default )( m.selection.getRng().startContainer ).parent().closest( '[contenteditable="true"]' ).focus()
        }, !0, A ) ), g.registerHandler( 13, c( /(^\u200b?\|\s?(?:[^|]*\s?\|\s?)+$)/, e => {
          let t = '<table class="confluenceTable"><tr>',
            n = !0;
          const o = Object( s.default )( e[ 1 ].slice( 1, -1 ).split( "|" ) ).map( ( function ( e ) {
            return e = s.default.trim( this ), n = n && "" == e, e
          } ) );
          n && ( o[ 0 ] = m.translate( "editor.autoformat.sampletext.firstcell" ) );
          for ( let a = 0, r = o.length; a < r; a++ ) t += `<td class="confluenceTd">${o[a]}</td>`;
          t += "</tr></table>", m.execCommand( "mceInsertContent", !1, t, {
            skip_undo: !0
          } ), n && m.selection.select( Object( s.default )( m.selection.getRng( !0 ).commonAncestorContainer ).parents( "table" ).find( "td" )[ 0 ].childNodes[ 0 ] ), Object( s.default )( m.selection.getRng().startContainer ).parent().closest( '[contenteditable="true"]' ).focus()
        }, !0, A ) );
        const E = c( /\b(((https?|ftp):\/\/|(www\.))[\w\.\$\-_\+!\*'\(\),/\?:@=&%#~;\[\]]+)$/, e => {
          const t = e[ 3 ] ? e[ 1 ] : "http://" + e[ 1 ],
            n = m.dom.create( "a", {
              href: t
            } );
          n.appendChild( document.createTextNode( e[ 1 ] ) ), m.execCommand( "mceInsertContent", !1, r( n ), {
            skip_undo: !0
          } ), m.getDoc().execCommand( "unlink", !1, {} )
        }, !1, "a" );
        g.registerHandler( " ".charCodeAt( 0 ), E ), g.registerHandler( 13, E );
        const I = c( /\b((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)$/i, e => {
          const t = m.dom.create( "a", {
            href: "mailto:" + e[ 1 ]
          } );
          t.appendChild( document.createTextNode( e[ 1 ] ) ), m.execCommand( "mceInsertContent", !1, r( t ), {
            skip_undo: !0
          } ), m.getDoc().execCommand( "unlink", !1, {} )
        }, !1, "a" );
        g.registerHandler( " ".charCodeAt( 0 ), I ), g.registerHandler( 13, I );
        const S = function ( e, t ) {
          const n = c( e, () => {
            m.execCommand( "mceInsertContent", !1, t, {
              skip_undo: !0
            } )
          }, !1 );
          g.registerHandler( " ".charCodeAt( 0 ), n ), g.registerHandler( 13, n )
        };
        S( /(?:\b|^)(jira|JIRA)$/, "Jira" ), S( /(?:\b|^)([Ss]tatus[Pp]age)$/, "Statuspage" ), S( /(?:\b|^)([Ff]ishEye)$/, "Fisheye" ), S( /(?:\b|^)([Ss]ource[Tt]ree)$/, "Sourcetree" ), S( /(?:\b|^)([Hh]ip[Cc]hat)$/, "Hipchat" ), S( /(?:\b|^)([Bb]it[Bb]ucket)$/, "Bitbucket" ), S( /(?:\b|^)(atlassian)$/, "Atlassian" );
        const M = {
          "]": e.regularExpressions._REGEXES.WIKI_LINK,
          "}": e.regularExpressions._REGEXES.WIKI_MACRO,
          "!": e.regularExpressions._REGEXES.WIKI_EMBED
        };
        s.default.each( M, ( e, t ) => {
          g.registerHandler( e.charCodeAt( 0 ), c( t, t => {
            const n = t[ 1 ] + e,
              o = {
                type: "POST",
                contentType: "application/json; charset=utf-8",
                url: p.a.get( "context-path" ) + "/rest/tinymce/1/wikixhtmlconverter",
                data: s.default.toJSON( {
                  wiki: n,
                  entityId: p.a.get( "content-id" ),
                  spaceKey: p.a.get( "space-key" ),
                  suppressFirstParagraph: !0
                } ),
                dataType: "text",
                timeout: 5e3
              };
            "}" == e ? u.a.tinymce.confluence.MacroUtils.insertMacro( o ) : "!" == e ? s.default.ajax( o ).done( e => {
              !n === e ? u.a.tinymce.confluence.ImageUtils.insertImagePlaceholder( e ) : m.execCommand( "mceInsertContent", !1, e, {
                skip_undo: !0
              } )
            } ) : s.default.ajax( o ).done( e => {
              m.execCommand( "mceInsertContent", !1, e, {
                skip_undo: !0
              } )
            } )
          }, !0 ) )
        } ), m.on( "KeyPress", e => g.executeHandlers( l( e ), m, e, t ) ), m.on( "KeyDown", e => {
          if ( 13 === l( e ) ) return g.executeHandlers( 13, m, e, t )
        }, !0 );
        return {
          getHandlerCount: () => Object.keys( g.handlers ).length
        }
      };
      ze.regularExpressions = {
        _REGEXES: {
          WIKI_MACRO: /(?:\s|^)(\{[^{^}]+)$/,
          WIKI_LINK: /(?:\s|^)(\[[^\[^\]]+)$/,
          WIKI_EMBED: /(?:\s|^)(![^!]{5,})$/
        },
        _REGEXES_EMOTICON: {
          SMILE: /\B(:-?)$/,
          SAD: /\B(:-?)$/,
          CHEEKY: /\B(:-?)$/,
          CHEEKY_2: /\B(:-?)$/,
          LAUGH: /\B(:-?)$/,
          WINK: /\B(;-?)$/,
          THUMBS_UP: /\B(\(y)$/,
          THUMBS_DOWN: /\B(\(n)$/,
          INFORMATION: /\B(\(i)$/,
          TICK: /\B(\(\/)$/,
          CROSS: /\B(\(x)$/,
          WARNING: /\B(\(!)$/,
          PLUS: /\B(\(\+)$/,
          MINUS: /\B(\(-)$/,
          QUESTION: /\B(\(\?)$/,
          LIGHT_ON: /\B(\(on)$/,
          LIGHT_OFF: /\B(\(off)$/,
          YELLOW_STAR: /\B(\(\*)$/,
          YELLOW_STAR_2: /\B(\(\*y)$/,
          RED_STAR: /\B(\(\*r)$/,
          GREEN_STAR: /\B(\(\*g)$/,
          BLUE_STAR: /\B(\(\*b)$/,
          HEART: /\B(<)$/,
          BROKEN_HEAR: /\B(<\/)$/
        }
      };
      let We = 0;
      const Ke = {
        fixedOffset: 0,
        leftOffset: 0,
        marginTop: 0,
        objDocument: u.a.document,
        objHead: "head",
        objWindow: u.a,
        scrollableArea: u.a,
        cacheHeaderHeight: !1
      };

      function Ve( e, t ) {
        const n = this;
        n.$el = Object( s.default )( e ), n.el = e, n.id = We++, n.$el.bind( "destroyed", s.default.proxy( n.teardown, n ) ), n.$clonedHeader = null, n.$originalHeader = null, n.cachedHeaderHeight = null, n.isSticky = !1, n.hasBeenSticky = !1, n.leftOffset = null, n.topOffset = null, n.init = function () {
          n.setOptions( t ), n.$el.each( ( function () {
            const e = Object( s.default )( this );
            e.css( "padding", 0 ), n.$originalHeader = Object( s.default )( "thead:first", this ), n.$clonedHeader = n.$originalHeader.clone(), e.trigger( "clonedHeader.stickyTableHeaders", [ n.$clonedHeader ] ), n.$clonedHeader.addClass( "tableFloatingHeader" ), n.$clonedHeader.css( "display", "none" ), n.$originalHeader.addClass( "tableFloatingHeaderOriginal" ), n.$originalHeader.after( n.$clonedHeader ), n.$printStyle = Object( s.default )( '<style type="text/css" media="print">.tableFloatingHeader{display:none !important;}.tableFloatingHeaderOriginal{position:static !important;}</style>' ), n.$head.append( n.$printStyle )
          } ) ), n.updateWidth(), n.toggleHeaders(), n.bind()
        }, n.destroy = function () {
          n.$el.unbind( "destroyed", n.teardown ), n.teardown()
        }, n.teardown = function () {
          n.isSticky && n.$originalHeader.css( "position", "static" ), s.default.removeData( n.el, "plugin_stickyTableHeaders" ), n.unbind(), n.$clonedHeader.remove(), n.$originalHeader.removeClass( "tableFloatingHeaderOriginal" ), n.$originalHeader.css( "visibility", "visible" ), n.$printStyle.remove(), n.el = null, n.$el = null
        }, n.bind = function () {
          n.$scrollableArea.on( "scroll.stickyTableHeaders", n.toggleHeaders ), n.isWindowScrolling || ( n.$window.on( "scroll.stickyTableHeaders" + n.id, n.setPositionValues ), n.$window.on( "resize.stickyTableHeaders" + n.id, n.toggleHeaders ) ), n.$scrollableArea.on( "resize.stickyTableHeaders", n.toggleHeaders ), n.$scrollableArea.on( "resize.stickyTableHeaders", n.updateWidth )
        }, n.unbind = function () {
          n.$scrollableArea.off( ".stickyTableHeaders", n.toggleHeaders ), n.isWindowScrolling || ( n.$window.off( ".stickyTableHeaders" + n.id, n.setPositionValues ), n.$window.off( ".stickyTableHeaders" + n.id, n.toggleHeaders ) ), n.$scrollableArea.off( ".stickyTableHeaders", n.updateWidth )
        }, n.debounce = function ( e, t ) {
          let n = null;
          return function () {
            const o = this,
              a = arguments;
            clearTimeout( n ), n = setTimeout( () => {
              e.apply( o, a )
            }, t )
          }
        }, n.toggleHeaders = n.debounce( () => {
          n.$el && n.$el.each( ( function () {
            const e = Object( s.default )( this );
            let t;
            const o = n.isWindowScrolling ? isNaN( n.options.fixedOffset ) ? n.options.fixedOffset.outerHeight() : n.options.fixedOffset : n.$scrollableArea.offset().top + ( isNaN( n.options.fixedOffset ) ? 0 : n.options.fixedOffset ),
              a = e.offset(),
              r = n.$scrollableArea.scrollTop() + o,
              i = n.$scrollableArea.scrollLeft(),
              c = n.options.cacheHeaderHeight ? n.cachedHeaderHeight : n.$clonedHeader.height(),
              l = n.isWindowScrolling ? r > a.top : o > a.top,
              d = ( n.isWindowScrolling ? r : 0 ) < a.top + e.height() - c - ( n.isWindowScrolling ? 0 : o );
            l && d ? ( t = a.left - i + n.options.leftOffset, n.$originalHeader.css( {
              position: "fixed",
              "margin-top": n.options.marginTop,
              left: t,
              "z-index": 3
            } ), n.leftOffset = t, n.topOffset = o, n.$clonedHeader.css( "display", "" ), n.isSticky || ( n.isSticky = !0, n.updateWidth(), e.trigger( "enabledStickiness.stickyTableHeaders" ) ), n.setPositionValues() ) : n.isSticky && ( n.$originalHeader.css( "position", "static" ), n.$clonedHeader.css( "display", "none" ), n.isSticky = !1, n.resetWidth( Object( s.default )( "td,th", n.$clonedHeader ), Object( s.default )( "td,th", n.$originalHeader ) ), e.trigger( "disabledStickiness.stickyTableHeaders" ) )
          } ) )
        }, 0 ), n.setPositionValues = n.debounce( () => {
          const e = n.$window.scrollTop(),
            t = n.$window.scrollLeft();
          !n.isSticky || e < 0 || e + n.$window.height() > n.$document.height() || t < 0 || t + n.$window.width() > n.$document.width() || n.$originalHeader.css( {
            top: n.topOffset - ( n.isWindowScrolling ? 0 : e ),
            left: n.leftOffset - ( n.isWindowScrolling ? 0 : t )
          } )
        }, 0 ), n.updateWidth = n.debounce( () => {
          if ( !n.isSticky ) return;
          n.$originalHeaderCells || ( n.$originalHeaderCells = Object( s.default )( "th,td", n.$originalHeader ) ), n.$clonedHeaderCells || ( n.$clonedHeaderCells = Object( s.default )( "th,td", n.$clonedHeader ) );
          const e = n.getWidth( n.$clonedHeaderCells );
          n.setWidth( e, n.$clonedHeaderCells, n.$originalHeaderCells ), n.$originalHeader.css( "width", n.$clonedHeader.width() ), n.options.cacheHeaderHeight && ( n.cachedHeaderHeight = n.$clonedHeader.height() )
        }, 0 ), n.getWidth = function ( e ) {
          const t = [];
          return e.each( ( function ( e ) {
            let o;
            const a = Object( s.default )( this );
            if ( "border-box" === a.css( "box-sizing" ) ) {
              const e = a[ 0 ].getBoundingClientRect();
              o = e.width ? e.width : e.right - e.left
            } else {
              if ( "collapse" === Object( s.default )( "th", n.$originalHeader ).css( "border-collapse" ) )
                if ( u.a.getComputedStyle ) o = parseFloat( u.a.getComputedStyle( this, null ).width );
                else {
                  const e = parseFloat( a.css( "padding-left" ) ),
                    t = parseFloat( a.css( "padding-right" ) ),
                    n = parseFloat( a.css( "border-width" ) );
                  o = a.outerWidth() - e - t - n
                }
              else o = a.width()
            }
            t[ e ] = o
          } ) ), t
        }, n.setWidth = function ( e, t, n ) {
          t.each( t => {
            const o = e[ t ];
            n.eq( t ).css( {
              "min-width": o,
              "max-width": o
            } )
          } )
        }, n.resetWidth = function ( e, t ) {
          e.each( ( function ( e ) {
            const n = Object( s.default )( this );
            t.eq( e ).css( {
              "min-width": n.css( "min-width" ),
              "max-width": n.css( "max-width" )
            } )
          } ) )
        }, n.setOptions = function ( e ) {
          n.options = s.default.extend( {}, Ke, e ), n.$window = Object( s.default )( n.options.objWindow ), n.$head = Object( s.default )( n.options.objHead ), n.$document = Object( s.default )( n.options.objDocument ), n.$scrollableArea = Object( s.default )( n.options.scrollableArea ), n.isWindowScrolling = n.$scrollableArea[ 0 ] === n.$window[ 0 ]
        }, n.updateOptions = function ( e ) {
          n.setOptions( e ), n.unbind(), n.bind(), n.updateWidth(), n.toggleHeaders()
        }, n.init()
      }
      s.default.fn.stickyTableHeaders = function ( e ) {
        return this.each( ( function () {
          const t = s.default.data( this, "plugin_stickyTableHeaders" );
          t ? "string" == typeof e ? t[ e ].apply( t ) : t.updateOptions( e ) : "destroy" !== e && s.default.data( this, "plugin_stickyTableHeaders", new Ve( this, e ) )
        } ) )
      };
      const Ue = function ( e ) {
          return !e.parents( "table" ).length > 0
        },
        qe = function ( e ) {
          return !e.closest( ".columnLayout" ).length > 0
        },
        Ge = function () {
          return !Object( s.default )( "body" ).hasClass( "theme-documentation" )
        };
      var Je = function ( e ) {
          const t = Object( s.default )( e );
          return Ge() && function ( e ) {
            return !e.hasClass( "stickyTableHeaders" )
          }( t ) && qe( t ) && Ue( t ) && function ( e ) {
            return e.find( "> thead:first" ).is( ":visible" )
          }( t ) && function ( e ) {
            return 1 === e.find( "thead" ).children().length
          }( t ) && function ( e ) {
            return 1 === e.find( ".confluenceTh" ).parent().length
          }( t ) && function ( e ) {
            return e.find( ".confluenceTh" ).siblings().hasClass( "confluenceTh" )
          }( t )
        },
        Xe = function ( e, t ) {
          const n = t || Object( s.default )( window );
          e.closest( ".table-wrap" ).scroll( () => {
            n.trigger( "scroll.stickyTableHeaders" )
          } )
        },
        Qe = function ( e ) {
          Object( s.default )( e ).each( ( function () {
            const e = Object( s.default )( this ),
              t = e.find( ".confluenceTh[rowspan]" ).length > 0,
              n = e.find( "> :first-child > :first-child .confluenceTh" ),
              o = n.length && n.closest( "thead" ).length > 0,
              a = n.length && 0 === n.parent().index();
            if ( Ue( e ) && qe( e ) && !o && a && !t ) {
              const t = Object( s.default )( "<thead />" ).append( n.parent() );
              e.prepend( t )
            }
          } ) )
        },
        Ye = Ge;
      const Ze = function ( e, t ) {
        const n = e.filter( ( function () {
          return Je( this )
        } ) );
        n.stickyTableHeaders( t ).addClass( "stickyTableHeaders" ), Object( a.a )( "sticky-table-headers.change.options", ( e, t ) => {
          n.stickyTableHeaders( t )
        } ), Xe( n )
      };
      var et = function () {
        const e = Object( s.default )( ".confluenceTable" ),
          t = Object( s.default )( window );
        if ( Ye() ) {
          if ( Qe( e ), window.MutationObserver ) {
            const e = document.querySelector( "#page" );
            if ( !e ) return;
            const n = /sticky|tableFloating|confluenceTh/;
            new MutationObserver( s.default.debounce( e => {
              let o, a = !1;
              for ( let t = 0, r = e.length; t < r; t++ )
                if ( o = e[ t ].target.className, !n.test( o ) ) {
                  a = !0;
                  break
                } a && t.trigger( "resize.stickyTableHeaders" )
            }, 0 ) ).observe( e, {
              subtree: !0,
              attributes: !0,
              childList: !0
            } )
          }
          Ze( e, {
            cacheHeaderHeight: !0
          } )
        }
      };
      const tt = function ( e, t ) {
        const n = u.a.tinymce.activeEditor;
        if ( n ) {
          const o = function ( e ) {
              const t = {};
              return t.objWindow = Object( s.default )( e.getWin() ), t.scrollableArea = t.objWindow, t.objDocument = Object( s.default )( e.getDoc() ), t.objHead = t.objDocument.find( "head" ), t
            }( n ),
            a = s.default.extend( {}, o, t ),
            r = e.filter( ( function () {
              return Je( this )
            } ) );
          r.stickyTableHeaders( a ).addClass( "stickyTableHeaders" ), Xe( r, a.objWindow )
        }
      };
      var nt = function () {
        const e = u.a.tinymce.activeEditor;
        if ( e ) {
          const t = Object( s.default )( e.getBody() ).find( ".confluenceTable" );
          Qe( t ), tt( t )
        }
      };
      const ot = {
        init( e ) {
          const t = u.a.Confluence.Editor;

          function n() {
            if ( t.UI.isFormEnabled() && e.isDirty() && !t.isEmpty() ) return e.translate( "unsaved.comment.lost" )
          }
          e.on( "Init", () => {
            Object( a.a )( "beforeunload", n )
          } ), e.on( "Remove", () => {
            Object( a.c )( "beforeunload", n )
          } )
        },
        getInfo: () => ( {
          longname: "Confluence Leave Comment",
          author: "Atlassian",
          authorurl: "http://www.atlassian.com",
          version: `${u.a.tinymce.majorVersion}.${u.a.tinymce.minorVersion}`
        } )
      };
      const at = {
        init( e ) {
          const t = u.a.Confluence.Editor;

          function n() {
            if ( t.UI.isFormEnabled() && e.isDirty() && !t.isEmpty() ) return e.translate( "unsaved.template.lost" )
          }
          e.on( "Init", () => {
            Object( a.a )( "beforeunload", n )
          } ), e.on( "Remove", () => {
            Object( a.c )( "beforeunload", n )
          } )
        },
        getInfo: () => ( {
          longname: "Confluence Leave Template",
          author: "Atlassian",
          authorurl: "http://www.atlassian.com",
          version: `${u.a.tinymce.majorVersion}.${u.a.tinymce.minorVersion}`
        } )
      };
      var rt = n( "FuAq" );
      const it = () => ( {
        init: e => {
          const t = u.a.Confluence.Editor.Drafts,
            n = u.a.Confluence.Editor;
          let o;

          function r() {
            let e = u.a.location.search;
            return void 0 === e ? "" : ( "?" === e.charAt( 0 ) && ( e = e.substr( 1 ) ), e.split( "&" ).filter( e => 0 === e.indexOf( "username=" ) || 0 === e.indexOf( "userFullName=" ) || 0 === e.indexOf( "accountId=" ) || 0 === e.indexOf( "displayName=" ) || 0 === e.indexOf( "accessType=" ) || 0 === e.indexOf( "grantAccess=" ) || 0 === e.indexOf( "atlOrigin=" ) || 0 === e.indexOf( "src." ) ).join( "&" ) )
          }

          function i() {
            const t = Object( rt.a )();
            var o, i;
            o = p.a.get( "draft-id" ), i = p.a.get( "draft-share-id" ), 0 !== o && ( Object( s.default )( "#confluence-ui" ).length ? t.replace( `${u.a.location.pathname}?draftId=${o}&draftShareId=${i}&${r()}` ) : t.replace( `${b.a}/pages/resumedraft.action?draftId=${o}&draftShareId=${i}&${r()}` ) ), n.UI.cancelButton.attr( "data-tooltip", e.translate( "editor.shared.draft.done.desc" ) ), n.UI.cancelButton.on( "click", () => {
              Object( a.b )( "analytics", {
                name: "confluence.editor.done.button.clicked"
              } ), Object( a.b )( "analytics", {
                name: "confluence.editor.close",
                data: {
                  source: "closeButton",
                  contentId: p.a.get( "content-id" ),
                  currentVersion: p.a.get( "page-version" ) || "null"
                }
              } )
            } )
          }

          function c() {
            if ( !p.a.get( "has-collaborated" ) && u.a.AJS.Rte.Content.editorHasContentChanged() ) {
              p.a.set( "has-collaborated", !0 );
              const e = p.a.get( "content-id" );
              s.default.ajax( {
                type: "PUT",
                url: `${b.a}/rest/experimental/relation/collaborator/from/user/current/to/content/${e}?targetStatus=draft`,
                error() {
                  p.a.set( "has-collaborated", !1 )
                }
              } ), s.default.ajax( {
                type: "DELETE",
                url: `${b.a}/rest/experimental/relation/touched/from/user/current/to/content/${e}?targetStatus=current`
              } ), s.default.ajax( {
                type: "PUT",
                url: `${b.a}/rest/experimental/relation/touched/from/user/current/to/content/${e}?targetStatus=draft`,
                error() {
                  p.a.set( "has-collaborated", !1 )
                }
              } )
            }
          }
          e.on( "Init", () => {
            x( "collaborative-audit-log" ) && Object( a.a )( "editor.local.change", c )
          } ), e.on( "Remove", () => {
            x( "collaborative-audit-log" ) && Object( a.c )( "editor.local.change", c )
          } ), Object( a.a )( "rte-ready", () => {
            Object( s.default )( "#draft-status" ).show(), t.bindUnloadMessage(), n.UI.cancelButton.click( () => {
              t.save( {
                skipErrorHandler: !0
              } )
            } ), i(), o = setInterval( t.save, +p.a.get( "draft-save-interval" ) || 3e4 )
          } ), Object( a.a )( "rte-destroyed", () => {
            clearInterval( o )
          } )
        },
        getInfo: () => ( {
          longname: "Confluence Drafts",
          author: "Atlassian",
          authorurl: "http://www.atlassian.com",
          version: `${u.a.tinymce.majorVersion}.${u.a.tinymce.minorVersion}`
        } )
      } );
      const ct = {
        init( e ) {
          e.on( "Init", () => {
            e.addCommand( "mceConfMacroBrowser", u.a.tinymce.confluence.macrobrowser.macroBrowserToolbarButtonClicked )
          } )
        },
        getInfo: () => ( {
          longname: "Confluence Macro Browser",
          author: "Atlassian",
          authorurl: "http://www.atlassian.com",
          version: `${u.a.tinymce.majorVersion}.${u.a.tinymce.minorVersion}`
        } )
      };
      const lt = {
        init: e => {
          e.on( "init", () => {
            if ( p.a.get( "use-watch" ) ) {
              const n = {
                userWatchingOwnContent: p.a.get( "user-watching-own-content" )
              };
              Object( s.default )( "#rte-savebar-tinymce-plugin-point" ).append( ( t = t => e.translate( t ), `\n    <ul class="toolbar-group toolbar-group-watch-page" id="toolbar-group-watch-page-after-comment">\n        <li class="toolbar-item">\n            <input id="watchPage" name="watchPageAfterComment" value="true" type="checkbox" ${n.userWatchingOwnContent?'checked="checked"':""}/>\n            <label for="watchPage">${t("comment.notification.enable")}</label>\n        </li>\n    </ul>\n` ) )
            }
            var t
          } )
        },
        getInfo: () => ( {
          longname: "Confluence Watch",
          author: "Atlassian",
          authorurl: "http://www.atlassian.com",
          version: `${u.a.tinymce.majorVersion}.${u.a.tinymce.minorVersion}`
        } )
      };
      const st = {
        init: e => {
          const t = e => {
            Object( s.default )( ".tablesorter", e.node ).each( ( e, t ) => {
              let n, o, a = Object( s.default )( t ).find( "thead" );
              1 === a.length && ( a = a[ 0 ], "THEAD" === a.nodeName && 1 === a.childNodes.length && ( o = a.removeChild( a.childNodes[ 0 ] ), n = Object( s.default )( t ).find( "tbody" )[ 0 ], t.removeChild( a ), n.insertBefore( o, n.childNodes[ 0 ] ) ) )
            } )
          };
          e.on( "PastePostProcess", t ), e.on( "remove", () => {
            e.off( "PastePostProcess", t )
          } )
        },
        getInfo: () => ( {
          longname: "ConfluenceSortableTablesPlugin",
          author: "Atlassian",
          authorurl: "http://www.atlassian.com",
          infourl: "http://www.atlassian.com",
          version: "1.0"
        } )
      };
      const dt = {
        init( e ) {
          e.on( "Init", () => {
            e.getBody().classList.add( "resizable" )
          } );
          let t = 0;
          if ( e.getParam( "fullscreen_is_enabled" ) ) return;
          const n = parseInt( e.getParam( "autoresize_min_height", e.getElement().offsetHeight ) ),
            o = parseInt( e.getParam( "autoresize_max_height", 0 ) );

          function a( r ) {
            const i = e.getDoc(),
              c = i.body,
              l = i.documentElement,
              d = u.a.tinymce.DOM;
            let f = n;
            const m = r === Object( r ) && r.forceExec || !1,
              p = Object( s.default )( i ).height();
            if ( p > n && ( f = p ), o && p > o ? ( f = o, c.style.overflowY = "auto", l.style.overflowY = "auto" ) : ( c.style.overflowY = "hidden", l.style.overflowY = "hidden", c.scrollTop = 0 ), m || f !== t ) {
              const n = f - t;
              d.setStyle( d.get( e.id + "_ifr" ), "height", f + "px" ), t = f, u.a.tinymce.Env.webkit && n < 0 && a()
            }
          }
          e.on( "Change SetContent Paste KeyUp Init", a ), e.addCommand( "mceAutoResize", a )
        },
        getInfo: () => ( {
          longname: "Auto Resize",
          author: "Moxiecode Systems AB",
          authorurl: "http://tinymce.moxiecode.com",
          infourl: "http://wiki.moxiecode.com/index.php/TinyMCE:Plugins/autoresize",
          version: `${u.a.tinymce.majorVersion}.${u.a.tinymce.minorVersion}`
        } )
      };
      var ut = function () {
          function e( e ) {
            return e.nodeValue.toLowerCase()
          }
          return {
            search( t, n, o, a, r ) {
              const i = t.getSel(),
                c = function e( t ) {
                  const n = [];
                  if ( t.nodeType === Node.TEXT_NODE ) n.push( t );
                  else {
                    const o = t.childNodes;
                    for ( let t = 0, a = o.length; t < a; ++t ) n.push.apply( n, e( o[ t ] ) )
                  }
                  return n
                }( a );
              n = n.replace( /\s/g, "" ).toLowerCase();
              const l = c.map( e ).join( "" );
              o = function ( e, t, n ) {
                const o = e.getRng();
                if ( o.endContainer.nodeValue ) {
                  const e = n.indexOf( o.endContainer.nodeValue.toLowerCase() ) + o.endOffset;
                  t = t !== e && -1 !== t ? e : t
                }
                return t
              }( t, o, l );
              const s = function ( e, t, n, o ) {
                let a = o ? e.lastIndexOf( t, n - 1 ) : e.indexOf( t, n + 1 );
                return a < 0 && !o ? a = e.indexOf( t ) : 0 === a && 0 === n && o && ( a = e.lastIndexOf( t ) ), a
              }( l, n, o, r );
              if ( s < 0 ) return [ !1, s ];
              const d = function ( e, t, n ) {
                  let o, a, r, i, c = 0;
                  for ( let l = 0; l < t.length; l++ ) {
                    if ( t[ l ].nodeType === Node.TEXT_NODE ) {
                      const s = e + n.length;
                      !a && t[ l ].length + c >= s && ( a = t[ l ], i = s - c ), !o && t[ l ].length + c > e && ( o = t[ l ], r = e - c ), c += t[ l ].length
                    }
                    if ( o && a ) return {
                      startNode: o,
                      startIndex: r,
                      endNode: a,
                      endIndex: i
                    }
                  }
                }( s, c, n ),
                u = document.createRange();
              return u.setStart( d.startNode, d.startIndex ), u.setEnd( d.endNode, d.endIndex ), i.removeAllRanges(), i.addRange( u ), u.startContainer.parentNode.scrollIntoView(), [ !0, s ]
            }
          }
        },
        ft = n( "m+2k" );
      const mt = function () {
        const e = ut(),
          t = new ft.a( u.a.navigator.userAgent ),
          n = '<mark data-searching class="find-current">',
          o = function e( t ) {
            const n = t;
            let o = null,
              a = null,
              r = null,
              i = null,
              c = null;
            const l = {
              initialised: !1,
              find: function ( e, t, n ) {
                const a = o.getFindInput().val(),
                  i = r.findText( a, !0, e );
                i && t ? t() : !i && n && n()
              },
              replace: function ( e, t ) {
                const n = o.getFindInput(),
                  a = o.getReplaceInput();
                let i = "";
                a && ( i = a.val() );
                const c = r.replaceText( n.val(), i, !0 );
                c && e ? e() : !c && t && t()
              },
              replaceAll: function ( e, t ) {
                const n = o.getFindInput(),
                  a = o.getReplaceInput();
                let i = "";
                a && ( i = a.val() );
                const c = r.replaceAll( n.val(), i );
                c && e ? e() : !c && t && t()
              },
              focus: function () {
                o.focusFindTextBox()
              },
              isVisible: function () {
                return null != o
              },
              init: function () {
                o = e.UI( n, i, c ), a = new e.MarkManager, a.addListener( o ), r = null, r = u.a.tinymce.Env.ie ? new e.implIE( o ) : new e.impl( o, a ), o.getFindInput().focus()
              },
              onVisible: function ( e ) {
                if ( null != e && e.length > 0 ) {
                  const t = o.getFindInput(),
                    n = t.val();
                  t.val( n + e )
                }
                o.onVisible()
              },
              onHide: function () {
                i = o.getFindInput().val(), c = o.getReplaceInput().val(), r.destroy(), r = null, o.destroy(), o = null, a.destroy(), a = null
              },
              _clearSavedValues: function () {
                i = null, c = null
              }
            };
            return l
          };
        return o.utils = {
          moveCursorToEnd( e ) {
            if ( u.a.tinymce.Env.ie ) {
              const t = e.createTextRange();
              t.execCommand( "SelectAll" ), t.move( "textedit" ), t.select()
            } else if ( u.a.tinymce.Env.gecko ) {
              const t = Object( s.default )( e ).val().length;
              e.setSelectionRange( t, t )
            }
          },
          createTextRange: ( e, t ) => e.selection ? e.selection.createRange() : t.getBody().createTextRange()
        }, o.impl = function ( n, o ) {
          let a = new u.a.tinymce.html.Writer,
            r = o,
            i = -1;
          const c = function n( o, a, c ) {
              if ( !o ) return !1;
              const l = u.a.tinymce.activeEditor;
              let s = l.selection;
              const d = l.getWin();

              function f() {
                return l.undoManager.ignore( () => {
                  r.markCurrentlySelectedRange()
                } ), !0
              }

              function m() {
                return l.undoManager.ignore( () => {
                  r.removeCurrentMark( !0 ), u.a.tinymce.activeEditor.selection.isCollapsed() || u.a.tinymce.activeEditor.selection.collapse()
                } ), !1
              }
              if ( r.isCursorAtCurrentMark() && l.undoManager.ignore( () => {
                  s = r.selectCurrentMark()
                } ), s.isCollapsed() || s.collapse( c ), u.a.tinymce.Env.gecko ) return d.find( o, !1, c ) ? f() : a ? ( s.select( l.getBody(), !1 ), s.collapse( !c ), n( o, !1, c ) ) : m();
              if ( !t.isMSEdge() ) return d.find( o, !1, c, !0, !1, !1, !1 ) ? f() : m(); {
                const t = e.search( s, o, i, l.getBody(), c );
                if ( i = t[ 1 ], t[ 0 ] ) return f()
              }
            },
            l = function ( e ) {
              const t = u.a.tinymce.activeEditor;
              a.text( e ), t.selection.setContent( a.getContent(), {
                format: "raw"
              } ), a.reset(), t.selection.collapse( !0 )
            },
            s = {};
          return s.findText = c, s.replaceText = function ( e, t, n ) {
            const o = u.a.tinymce.activeEditor;
            return r.hasCurrentMark() ? ( o.undoManager.transact( () => {
              const e = r.replaceCurrentMark( t );
              e && o.selection.select( e )
            } ), c( e, n ) ) : c( e, n )
          }, s.replaceAll = function ( n, o ) {
            const a = u.a.tinymce.activeEditor;
            let i = 0;
            return a.undoManager.transact( () => {
              const c = a.selection,
                s = a.getWin();
              if ( r.removeCurrentMark( !1 ), a.execCommand( "selectAll" ), a.selection.collapse( !0 ), t.isMSEdge() ) {
                let t = -1;
                for ( ;; ) {
                  const r = e.search( c, n, t, a.getBody(), !1 );
                  if ( !r[ 0 ] ) break;
                  t = r[ 1 ], l( o ), i++
                }
              } else
                for ( ; s.find( n, !1, !1, !1, !1, !1, !1 ); ) l( o ), i++;
              if ( 0 === i ) u.a.Confluence.EditorNotification.notify( "info", a.translate( "tinymce.searchreplace_dlg.notfound" ) );
              else if ( 1 === i ) u.a.Confluence.EditorNotification.notify( "success", a.translate( "tinymce.searchreplace_dlg.allreplaced.singular" ) );
              else if ( i > 1 ) {
                const e = a.translate( "tinymce.searchreplace_dlg.allreplaced.plural" );
                u.a.Confluence.EditorNotification.notify( "success", e.replace( "{0}", i ) )
              }
            } ), i
          }, s.destroy = function () {
            r = null, a = null
          }, s
        }, o.implIE = function ( e ) {
          const t = {};
          let a = e,
            r = null,
            i = new u.a.tinymce.html.Writer;
          const c = o.utils.createTextRange,
            l = function e( n, o, a ) {
              if ( !n ) return !1;
              const i = u.a.tinymce.activeEditor,
                c = i.getDoc();
              let l = t.storedRange = t.storedRange || c.body.createTextRange();
              if ( i.focus(), r && r.select(), i.selection.collapse( !a ), m(), a && r ) {
                const e = c.body.createTextRange();
                e.moveToElementText( Object( s.default )( "p:first", i.getBody() )[ 0 ] ), l.setEndPoint( "StartToStart", e );
                let t = r.text;
                t.length && ( t = t.replace( /s+$/, "" ), t.length && l.moveEnd( "character", -t.length ) );
                const n = l.text.length;
                l.moveEnd( "word", -1 ), l.text.length >= n && l.moveEnd( "character", -1 ), l.select(), l.collapse( !1 )
              }
              return r = null, l.findText( n, a ? -1 : 1, 0 ) ? ( l.scrollIntoView(), l = f( l ), l.select(), r = l, !0 ) : o ? ( i.selection.select( u.a.tinymce.activeEditor.getBody(), !0 ), i.selection.collapse( !a ), e( n, !1, a ) ) : void( t.storedRange = null )
            },
            d = function () {
              m()
            };
          let f = function ( e ) {
              const t = e.htmlText;
              return e.pasteHTML( n + t + "</mark>" ), a.marked(),
                function () {
                  const e = u.a.tinymce.activeEditor;
                  e.on( "Change", d ), e.on( "BeforeSetContent", d )
                }(), e
            },
            m = function () {
              ! function () {
                const e = u.a.tinymce.activeEditor;
                e.off( "Change", d ), e.off( "BeforeSetContent", d )
              }();
              const e = u.a.tinymce.activeEditor,
                t = Object( s.default )( "mark", e.getDoc() );
              if ( t.length ) {
                let n = !1;
                const o = e.selection.getRng( !0 ).commonAncestorContainer;
                Object( s.default )( o ).closest( "mark" ).length && ( n = !0 ), t.each( ( e, t ) => {
                  const n = Object( s.default )( t );
                  n.contents().each( ( e, t ) => {
                    n.before( t )
                  } )
                } ).remove(), n && e.execCommand( "RemoveFormat" )
              }
              a.markRemoved()
            };
          const p = function () {
            m()
          };
          return t.findText = l, t.replaceText = function ( e, t, n ) {
            const o = u.a.tinymce.activeEditor;
            if ( r ) {
              const e = o.getDoc().createTextNode( t ),
                n = Object( s.default )( "mark", o.getDoc() );
              o.undoManager.transact( () => {
                n.parent()[ 0 ].replaceChild( e, n[ 0 ] );
                const a = o.getDoc().createElement( "mark" );
                a.setAttribute( "class", "current" ), a.dataset.searching = !0, e.parentNode.insertBefore( a, e ), a.appendChild( o.getDoc().createTextNode( t ) ), a.parentNode.removeChild( e )
              } )
            }
            return l( e, n )
          }, t.replaceAll = function ( e, t ) {
            const n = u.a.tinymce.activeEditor;
            let o = 0;
            return n.undoManager.transact( () => {
              const a = n.selection,
                r = n.getDoc();
              m(), a.select( n.getBody(), !1 ), a.collapse( !0 ), n.focus();
              const l = c( r, n );
              for ( ; l.findText( e, 1, 0 ); ) l.scrollIntoView(), l.select(), i.text( t ), n.selection.setContent( i.getContent(), {
                format: "raw"
              } ), i.reset(), o++, l.moveStart( "character", t.length );
              if ( 0 == o ) u.a.Confluence.EditorNotification.notify( "info", n.translate( "tinymce.searchreplace_dlg.notfound" ) );
              else if ( 1 == o ) u.a.Confluence.EditorNotification.notify( "success", n.translate( "tinymce.searchreplace_dlg.allreplaced.singular" ) );
              else if ( o > 1 ) {
                const e = n.translate( "tinymce.searchreplace_dlg.allreplaced.plural" );
                u.a.Confluence.EditorNotification.notify( "success", e.replace( "{0}", o ) )
              }
            } ), o
          }, t.destroy = function () {
            u.a.tinymce.activeEditor.onBeforeGetContent.remove( p ), m(), a = null, r = null, i = null
          }, u.a.tinymce.activeEditor.onBeforeGetContent.add( p ), t
        }, o.UI = function ( e, t, n ) {
          let a = null;
          const r = o.utils.moveCursorToEnd;
          u.a.tinymce.activeEditor && u.a.tinymce.activeEditor.plugins && u.a.tinymce.activeEditor.plugins.customtoolbar && ( a = u.a.tinymce.activeEditor.plugins.customtoolbar.getToolbarRow( e ) );
          const i = function () {
              const e = Object( s.default )( ".toolbar-find-input", a );
              return e.length ? e : null
            },
            c = function () {
              const e = Object( s.default )( ".toolbar-replace-input", a );
              return e.length ? e : null
            },
            l = function ( e ) {
              if ( "input" === e.type || "propertychange" === e.type ) {
                const e = i(),
                  t = null != e && e.val().length > 0;
                f( t ), m( t )
              }
            },
            d = function () {
              const e = i();
              h( e && e.val() )
            };
          let f = function ( e ) {
              e ? ( u.a.tinymce.activeEditor.plugins.customtoolbar.enableToolbarButton( "search-toolbar-find-next-button" ), u.a.tinymce.activeEditor.plugins.customtoolbar.enableToolbarButton( "search-toolbar-find-previous-button" ) ) : ( u.a.tinymce.activeEditor.plugins.customtoolbar.disableToolbarButton( "search-toolbar-find-next-button" ), u.a.tinymce.activeEditor.plugins.customtoolbar.disableToolbarButton( "search-toolbar-find-previous-button" ) )
            },
            m = function ( e ) {
              const t = i();
              p().toggleClass( "default-action", e && t.val().length > 0 )
            },
            p = function () {
              const e = Object( s.default )( ".search-toolbar-find-next-button", a ).closest( ".aui-button" );
              return e.length ? e : null
            };
          let g = function ( e ) {
              const t = u.a.tinymce.activeEditor.plugins.customtoolbar;
              e ? t.enableToolbarButton( "search-toolbar-replace-button" ) : t.disableToolbarButton( "search-toolbar-replace-button" )
            },
            h = function ( e ) {
              const t = u.a.tinymce.activeEditor.plugins.customtoolbar;
              e ? t.enableToolbarButton( "search-toolbar-replaceall-button" ) : t.disableToolbarButton( "search-toolbar-replaceall-button" )
            };
          const b = {};
          return b.getFindInput = i, b.getReplaceInput = c, b.focusFindTextBox = function () {
              top.focus(), i().focus()
            }, b.onVisible = function () {
              const e = i();
              e.focus(), e.val().length > 0 && ( r( e[ 0 ] ), f( !0 ), h( !0 ) )
            }, b.destroy = function () {}, b.marked = function () {
              g( !0 )
            }, b.markRemoved = function () {
              g( !1 )
            },
            function ( e, t ) {
              const n = i();
              let o = !1;
              if ( e && e.length && ( n.val( e ), o = !0 ), t && t.length ) {
                c().val( t )
              }! function () {
                function e( e, t ) {
                  if ( e )
                    if ( u.a.tinymce.isIE9 ) e[ 0 ].attachEvent( "onpropertychange", t );
                    else {
                      const n = u.a.tinymce.isIE8 ? "propertychange" : "input";
                      e.bind( n, t )
                    }
                }
                const t = i();
                e( t, l ), e( t, d ), Object( s.default )( a ).focusin( () => {
                  m( !0 )
                } ).focusout( () => {
                  m( !1 )
                } ), t.focus( () => {
                  m( !0 )
                } )
              }(), f( o ), h( o ), g( !1 )
            }( t, n ), b
        }, o.MarkManager = function () {
          let e = null;
          const t = new u.a.tinymce.html.Writer;
          let o = null;
          const a = [],
            r = function () {
              l()
            },
            i = function () {
              if ( !e ) return null;
              const t = u.a.tinymce.activeEditor;
              return t.selection.select( e[ 0 ] ), t.selection
            };
          let c = function ( t ) {
              h(), ( d( e, t ) || o && u.a.tinymce.activeEditor.selection.getRng( !0 ).toString() == o ) && ( e = null, o = null, s.default.each( a, ( e, t ) => {
                t.markRemoved()
              } ) )
            },
            l = function () {
              h(), Object( s.default )( "mark", u.a.tinymce.activeEditor.getDoc() ).each( ( e, t ) => {
                d( Object( s.default )( t ), !1 )
              } ), e = null, o = null, s.default.each( a, ( e, t ) => {
                t.markRemoved()
              } )
            },
            d = function ( e, t ) {
              const n = u.a.tinymce.activeEditor.selection.getRng( !0 );
              if ( !e ) return !1;
              const o = function ( e, t ) {
                if ( e.intersectsNode ) return e.intersectsNode( t ); {
                  const n = u.a.tinymce.activeEditor.getDoc().createRange();
                  return n.selectNodeContents( t ), !( e.compareBoundaryPoints( Range.START_TO_END, n ) <= 0 || e.compareBoundaryPoints( Range.END_TO_START, n ) >= 0 )
                }
              }( n, e[ 0 ] );
              let a = null,
                r = null;
              if ( e.contents().each( ( t, n ) => {
                  e.before( n ), a || ( a = n ), r = n
                } ), o || t ) {
                const e = u.a.tinymce.activeEditor.selection.getRng( !0 );
                e.setStartBefore( a ), e.setEndAfter( r ), t || e.collapse( !1 ), u.a.tinymce.activeEditor.selection.setRng( e )
              }
              return e.remove(), !0
            };
          const f = function () {
              return !!e || ( o ? u.a.tinymce.activeEditor.selection.getRng( !0 ).toString() == o : void 0 )
            },
            m = function () {
              l()
            },
            p = function () {
              h(), s.default.each( a, ( e, t ) => {
                t.markRemoved()
              } )
            };
          let g = function ( e ) {
              const t = u.a.tinymce.activeEditor;
              t.on( "Change", r ), t.on( "BeforeSetContent", r ), e && ( t.on( "Click", p ), t.on( "DblClick", p ) )
            },
            h = function () {
              const e = u.a.tinymce.activeEditor;
              e.off( "Change", r ), e.off( "BeforeSetContent", r ), e.off( "Click", p ), e.off( "DblClick", p )
            };
          const b = {
            markCurrentlySelectedRange: function () {
              const t = u.a.tinymce.activeEditor;
              if ( e ) {
                const e = t.selection.getBookmark();
                c( !1 ), t.selection.moveToBookmark( e )
              }
              o = null;
              const r = t.selection.getRng( !0 );
              e = Object( s.default )( n + "</mark>", t.getDoc() );
              try {
                r.surroundContents( e[ 0 ] ), g( !1 )
              } catch ( l ) {
                1 == l.code && ( o = r.toString(), e = null, g( !0 ) )
              }
              s.default.each( a, ( e, t ) => {
                t.marked()
              } ), o || i().collapse()
            }
          };
          return b.removeCurrentMark = c, b.removeAllMarks = l, b.selectCurrentMark = i, b.isCursorAtCurrentMark = function () {
            if ( !e ) return !1;
            const t = u.a.tinymce.activeEditor.selection;
            t.isCollapsed() || t.collapse();
            const n = t.getRng( !0 );
            if ( 3 === n.startContainer.nodeType ) return n.startContainer.parentNode.normalize(), n.startContainer.nextSibling === e[ 0 ] || n.startContainer.previousSibling === e[ 0 ];
            if ( 1 === n.startContainer.nodeType ) {
              const t = n.startContainer.childNodes,
                o = n.startOffset;
              return o > 0 && t[ o - 1 ] === e[ 0 ] || !!( o + 1 < t.length && t[ o + 1 === e[ 0 ] ] )
            }
          }, b.hasCurrentMark = f, b.replaceCurrentMark = function ( n ) {
            if ( function ( n ) {
                if ( e || !f() ) return !1;
                const o = u.a.tinymce.activeEditor;
                return o.undoManager.transact( () => {
                  t.text( n ), o.selection.setContent( t.getContent(), {
                    format: "raw"
                  } ), t.reset()
                } ), o.undoManager.ignore( () => {
                  c( !1 )
                } ), !0
              }( n ) ) return null;
            if ( !e ) return null;
            const o = u.a.tinymce.activeEditor,
              a = [];
            o.undoManager.ignore( () => {
              e.contents().each( ( e, t ) => {
                a.push( t )
              } ), c( !1 )
            } );
            let r = void 0;
            return o.undoManager.transact( () => {
              r = Object( s.default )( a[ 0 ] ).before( o.getDoc().createTextNode( n ) )[ 0 ].previousSibling;
              for ( let e = a.length - 1; e >= 0; e-- ) Object( s.default )( a[ e ] ).remove()
            } ), r
          }, b.addListener = function ( e ) {
            a.push( e )
          }, b.destroy = function () {
            c( !0 ), u.a.tinymce.activeEditor.onBeforeGetContent.remove( m )
          }, u.a.tinymce.activeEditor.onBeforeGetContent.add( m ), b
        }, o
      };
      var pt = n( "Q2fH" );
      var gt = function () {
        Object( pt.a )( document, "initContextToolbars.Toolbar", ( e, t ) => {
          u.a.Confluence.Editor.searchToolbar = function () {
            const e = u.a.Confluence.Editor;
            return {
              initContextToolbars( t, n ) {
                const o = function ( e ) {
                    if ( u.a.tinymce.Env.ie ) {
                      const t = e.createTextRange();
                      t.execCommand( "SelectAll" ), t.move( "textedit" ), t.select()
                    } else if ( u.a.tinymce.Env.gecko ) {
                      const t = Object( s.default )( e ).val().length;
                      e.setSelectionRange( t, t )
                    }
                  },
                  a = function ( e ) {
                    top.focus(), u.a.tinymce.activeEditor.plugins.customtoolbar.focusToolbarButton( e )
                  },
                  r = function () {
                    top.focus();
                    const e = Object( s.default )( "#search-toolbar-find-text" );
                    e.focus(), o( e[ 0 ] )
                  },
                  i = function () {
                    top.focus();
                    const e = Object( s.default )( "#search-toolbar-replace-text" );
                    e.focus(), o( e[ 0 ] )
                  },
                  c = function () {
                    if ( u.a.tinymce.Env.ie && frames.wysiwygTextarea_ifr.focus(), u.a.tinymce.Env.ie || u.a.tinymce.Env.gecko ) {
                      const e = u.a.tinymce.activeEditor;
                      e.focus(), e.selection.select( e.getBody() ), e.selection.collapse( !1 ), e.focus()
                    }
                  },
                  l = new e.Toolbar.Components.TextBox( {
                    id: "search-toolbar-find-text",
                    text: n.translate( "tinymce.searchreplace_dlg.findlabel" ),
                    name: "find",
                    keydown: function ( e ) {
                      if ( !u.a.tinymce.isIE8 && ( e.ctrlKey || u.a.tinymce.isMac && e.metaKey ) && 70 === e.which ) e.preventDefault();
                      else if ( 13 === e.which ) {
                        e.preventDefault();
                        const t = {
                          backwards: !1,
                          onFound: r,
                          onNotFound: r
                        };
                        u.a.tinymce.activeEditor.undoManager.ignore( () => {
                          u.a.tinymce.activeEditor.execCommand( "mceConfSearch", !1, t, {
                            skip_undo: !0
                          } )
                        } )
                      } else 27 === e.which && ( e.preventDefault(), u.a.tinymce.activeEditor.undoManager.ignore( () => {
                        u.a.tinymce.activeEditor.execCommand( "mceSearchReplaceToolbar", !1, !1, {
                          skip_undo: !0
                        } )
                      } ) )
                    },
                    cssClass: "toolbar-find-input"
                  } ),
                  d = new e.Toolbar.Components.TextBox( {
                    id: "search-toolbar-replace-text",
                    text: n.translate( "tinymce.searchreplace_dlg.replacelabel" ),
                    name: "replace",
                    keydown: function ( e ) {
                      if ( !u.a.tinymce.isIE8 && ( e.ctrlKey || u.a.tinymce.isMac && e.metaKey ) && 70 === e.which ) e.preventDefault();
                      else if ( 13 === e.which ) {
                        e.preventDefault();
                        const t = u.a.tinymce.activeEditor.undoManager.ignore( () => {
                          u.a.tinymce.activeEditor.execCommand( "mceConfSearch", !1, {
                            backwards: !1,
                            onFound: i,
                            onNotFound: r
                          }, {
                            skip_undo: !0
                          } )
                        } );
                        g( i, r, t )
                      } else 27 === e.which && ( e.preventDefault(), u.a.tinymce.activeEditor.undoManager.ignore( () => {
                        u.a.tinymce.activeEditor.execCommand( "mceSearchReplaceToolbar", !1, !1, {
                          skip_undo: !0
                        } )
                      } ) )
                    },
                    cssClass: "toolbar-replace-input"
                  } ),
                  f = new e.Toolbar.Components.TextButton( {
                    text: n.translate( "tinymce.searchreplace_dlg.findprevious" ),
                    click() {
                      const e = {
                        backwards: !0,
                        onFound() {
                          top.focus(), a( "search-toolbar-find-previous-button" )
                        },
                        onNotFound: r
                      };
                      n.undoManager.ignore( () => {
                        n.execCommand( "mceConfSearch", !1, e, {
                          skip_undo: !0
                        } )
                      } )
                    },
                    textClass: "search-toolbar-find-previous-button"
                  } ),
                  m = new e.Toolbar.Components.TextButton( {
                    text: u.a.tinymce.Env.ie ? n.translate( "tinymce.searchreplace_dlg.findlabel" ) : n.translate( "tinymce.searchreplace_dlg.findnext" ),
                    click() {
                      const e = {
                        backwards: !1,
                        onFound() {
                          top.focus(), a( "search-toolbar-find-next-button" )
                        },
                        onNotFound: r
                      };
                      n.undoManager.ignore( () => {
                        n.execCommand( "mceConfSearch", !1, e, {
                          skip_undo: !0
                        } )
                      } )
                    },
                    textClass: "search-toolbar-find-next-button"
                  } ),
                  p = new e.Toolbar.Components.TextButton( {
                    text: n.translate( "tinymce.searchreplace_dlg.replace" ),
                    click() {
                      g( () => {
                        top.focus(), a( "search-toolbar-replace-button" )
                      }, r )
                    },
                    textClass: "search-toolbar-replace-button"
                  } ),
                  g = ( e, t, n ) => {
                    u.a.Confluence.Editor.searchManager && ( u.a.tinymce.activeEditor.plugins.customtoolbar.isToolbarButtonEnabled( "search-toolbar-replace-button" ) ? u.a.Confluence.Editor.searchManager.replace( e, t ) : n && n() )
                  },
                  h = new e.Toolbar.Components.TextButton( {
                    text: n.translate( "tinymce.searchreplace_dlg.replaceall" ),
                    click() {
                      const e = {
                        onReplaced: c,
                        onNotReplaced: r
                      };
                      n.undoManager.transact( () => {
                        n.execCommand( "mceConfReplaceAll", !1, e )
                      } )
                    },
                    textClass: "search-toolbar-replaceall-button"
                  } ),
                  b = new e.Toolbar.Components.Button( {
                    text: n.translate( "tinymce.searchreplace_dlg.close" ),
                    iconClass: "icon-close",
                    click() {
                      n.undoManager.ignore( () => {
                        n.execCommand( "mceConfSearchClose", !1, null )
                      } )
                    }
                  } );
                return {
                  Buttons: [ new e.Toolbar.Components.Group( [ b ], {
                    groupClass: "close"
                  } ), new e.Toolbar.Components.Group( [ l, d ], {
                    groupClass: "no-separator"
                  } ), new e.Toolbar.Components.Group( u.a.tinymce.Env.ie ? [ m ] : [ f, m ] ), new e.Toolbar.Components.Group( [ p, h ] ) ]
                }
              }
            }
          }().initContextToolbars( e, t )
        } )
      };

      function ht() {
        const e = u.a.Confluence.Editor;
        let t = null;
        const n = function ( e ) {
            e.preventDefault(), e.stopPropagation()
          },
          o = function ( e ) {
            n( e );
            let o = e.which;
            o || ( o = e.charCode ? e.charCode : e.keyCode ), o < 48 || t.push( o )
          },
          r = function () {
            const e = u.a.tinymce.activeEditor;
            e.off( "KeyDown", o ), e.off( "KeyPress", n ), e.off( "KeyUp", n );
            let a = "";
            for ( let n = 0; n < t.length; n++ ) a += ( r = t[ n ] ) > 65535 ? ( r -= 65536, String.fromCharCode( 55296 + ( r >> 10 ), 56320 + ( 1023 & r ) ) ) : String.fromCharCode( r );
            var r;
            return a.toLowerCase()
          },
          i = () => {
            ! function () {
              const e = u.a.tinymce.activeEditor;
              t = [], e.on( "KeyDown", o ), e.on( "KeyPress", n ), e.on( "KeyUp", n )
            }();
            const a = Object( s.default )( "body" ),
              i = !a.hasClass( "no-tools" ) || a.hasClass( "no-tools-toolbars-visible" );
            Object( pt.b )( document, "createContextToolbarRow.Toolbar", {
              id: "searchreplace",
              buttons: e.searchToolbar.Buttons,
              topToolbar: !0,
              editorAdjacent: !0,
              animate: i,
              onVisible() {
                const t = r();
                e.searchManager.onVisible( t ), e.searchManager.initialised = !0
              }
            } ), r()
          };
        return {
          init( t ) {
            t.addCommand( "mceSearchReplaceToolbar", () => {
              t.undoManager.ignore( () => {
                ! function () {
                  const t = Object( s.default )( "#rte-button-searchreplace" );
                  !t.hasClass( "active" ) ? ( t.addClass( "active" ), e.searchManager || ( e.searchManager = new e.SearchManager( "searchreplace" ) ), e.searchManager.init(), Object( pt.b )( document, "enableContextToolbarRow.Toolbar", {
                    id: "searchreplace"
                  } ) ) : ( t.removeClass( "active" ), e.searchManager.onHide(), Object( pt.b )( document, "disableContextToolbarRow.Toolbar", {
                    id: "searchreplace"
                  } ), u.a.tinymce.Env.gecko || frames.wysiwygTextarea_ifr.focus(), u.a.tinymce.activeEditor.focus() )
                }()
              } )
            } ), t.addCommand( "mceConfSearch", ( t, n ) => {
              e.searchManager && ( ( !( n = n || {} ).backwards || u.a.tinymce.activeEditor.plugins.customtoolbar.isToolbarButtonEnabled( "search-toolbar-find-previous-button" ) ) && ( n.backwards || u.a.tinymce.activeEditor.plugins.customtoolbar.isToolbarButtonEnabled( "search-toolbar-find-next-button" ) ) ? e.searchManager.find( n.backwards, n.onFound, n.onNotFound ) : e.searchManager.focus() )
            } ), t.addCommand( "mceConfReplaceAll", ( t, n ) => {
              e.searchManager && ( n = n || {}, u.a.tinymce.activeEditor.plugins.customtoolbar.isToolbarButtonEnabled( "search-toolbar-replaceall-button" ) && e.searchManager.replaceAll( n.onReplaced, n.onNotReplaced ) )
            } ), t.addCommand( "mceConfSearchClose", () => {
              e.searchManager && t.undoManager.ignore( () => {
                t.execCommand( "mceSearchReplaceToolbar", !1, null )
              } )
            } ), t.addButton( "searchreplace", {
              title: "searchreplace.search_desc",
              cmd: "mceSearchReplaceToolbar"
            } ), 8 != u.a.tinymce.Env.ie && t.addShortcut( "ctrl+f", "searchreplace.search_desc", () => {
              e.searchManager && e.searchManager.isVisible() ? e.searchManager.focus() : t.undoManager.ignore( () => {
                t.execCommand( "mceSearchReplaceToolbar", !1, !1, {
                  skip_undo: !0
                } )
              } )
            } ), Object( a.a )( "rte-ready", () => {
              i(), Object( pt.b )( document, "disableContextToolbarRow.Toolbar", {
                id: "searchreplace"
              } )
            } )
          },
          getInfo: () => ( {
            longname: "Search/Replace",
            author: "Atlassian",
            authorurl: "http://www.atlassian.com",
            infourl: "http://www.atlassian.com",
            version: `${u.a.tinymce.majorVersion}.${u.a.tinymce.minorVersion}`
          } )
        }
      }

      function bt() {
        const e = u.a.Confluence.Editor;
        let t = null,
          n = !1;
        const o = function ( e ) {
            e.preventDefault(), e.stopPropagation()
          },
          a = function ( e ) {
            o( e );
            let n = e.which;
            n || ( n = e.charCode ? e.charCode : e.keyCode ), n < 48 || t.push( n )
          },
          r = function ( e ) {
            const t = Object( s.default )( "#rte-button-searchreplace a" );
            t.length && ( e ? t.unbind( "click", !1 ) : t.bind( "click", !1 ) )
          },
          i = function () {
            if ( n ) return;
            n = !0;
            const i = Object( s.default )( "#rte-button-searchreplace" ),
              c = !i.hasClass( "active" ),
              l = Object( s.default )( "body" ),
              d = !l.hasClass( "no-tools" ) || l.hasClass( "no-tools-toolbars-visible" );
            c ? ( i.addClass( "active" ), e.searchManager || ( e.searchManager = new e.SearchManager( "searchreplace" ) ), Object( s.default )( document ).trigger( "createContextToolbarRow.Toolbar", {
              id: "searchreplace",
              buttons: e.searchToolbar.Buttons,
              topToolbar: !0,
              editorAdjacent: !0,
              animate: d,
              onVisible() {
                const i = function () {
                  const e = u.a.tinymce.activeEditor;
                  e.off( "KeyDown", a ), e.off( "KeyPress", o ), e.off( "KeyUp", o );
                  let n = "";
                  for ( let o = 0; o < t.length; o++ ) n += ( r = t[ o ] ) > 65535 ? ( r -= 65536, String.fromCharCode( 55296 + ( r >> 10 ), 56320 + ( 1023 & r ) ) ) : String.fromCharCode( r );
                  var r;
                  return n.toLowerCase()
                }();
                e.searchManager.onVisible( i ), r( !0 ), n = !1, e.searchManager.initialised = !0
              }
            } ).trigger( "enableContextToolbarRow.Toolbar" ), function () {
              const e = u.a.tinymce.activeEditor;
              t = [], e.on( "KeyDown", a ), e.on( "KeyPress", o ), e.on( "KeyUp", o )
            }(), e.searchManager.init(), r( !1 ) ) : ( i.removeClass( "active" ), e.searchManager.onHide(), Object( s.default )( document ).trigger( "removeContextToolbarRow.Toolbar", {
              id: "searchreplace",
              animate: d,
              onHide() {
                Object( s.default )( document ).trigger( "contextToolbarRowRemoved.Toolbar" ), r( !0 ), n = !1, e.searchManager.initialised = !1
              }
            } ), r( !1 ), u.a.tinymce.Env.gecko || frames.wysiwygTextarea_ifr.focus(), u.a.tinymce.activeEditor.focus() )
          };
        return {
          init( t ) {
            t.addCommand( "mceSearchReplaceToolbar", () => {
              t.undoManager.ignore( () => {
                i()
              } )
            } ), t.addCommand( "mceConfSearch", ( t, n ) => {
              e.searchManager && ( ( !( n = n || {} ).backwards || u.a.tinymce.activeEditor.plugins.customtoolbar.isToolbarButtonEnabled( "search-toolbar-find-previous-button" ) ) && ( n.backwards || u.a.tinymce.activeEditor.plugins.customtoolbar.isToolbarButtonEnabled( "search-toolbar-find-next-button" ) ) ? e.searchManager.find( n.backwards, n.onFound, n.onNotFound ) : e.searchManager.focus() )
            } ), t.addCommand( "mceConfReplaceAll", ( t, n ) => {
              e.searchManager && ( n = n || {}, u.a.tinymce.activeEditor.plugins.customtoolbar.isToolbarButtonEnabled( "search-toolbar-replaceall-button" ) && e.searchManager.replaceAll( n.onReplaced, n.onNotReplaced ) )
            } ), t.addCommand( "mceConfSearchClose", () => {
              e.searchManager && t.undoManager.ignore( () => {
                t.execCommand( "mceSearchReplaceToolbar", !1, null )
              } )
            } ), t.addButton( "searchreplace", {
              title: "searchreplace.search_desc",
              cmd: "mceSearchReplaceToolbar"
            } ), 8 != u.a.tinymce.Env.ie && t.addShortcut( "ctrl+f", "searchreplace.search_desc", () => {
              e.searchManager && e.searchManager.isVisible() ? e.searchManager.focus() : t.undoManager.ignore( () => {
                t.execCommand( "mceSearchReplaceToolbar", !1, !1, {
                  skip_undo: !0
                } )
              } )
            } )
          },
          getInfo: () => ( {
            longname: "Search/Replace",
            author: "Atlassian",
            authorurl: "http://www.atlassian.com",
            infourl: "http://www.atlassian.com",
            version: `${u.a.tinymce.majorVersion}.${u.a.tinymce.minorVersion}`
          } )
        }
      }
      var yt = n( "oayO" );

      function Ct( e, t ) {
        return t ? `${e}.${t.replace(/\./g,"-")}` : e
      }
      var wt = {
        get: function ( e, t, n ) {
          let o = void 0 !== n ? n : null;
          try {
            const n = Ct( e, t ),
              a = yt.a.getItem( n );
            null !== a && "undefined" !== a && ( o = JSON.parse( a ) )
          } catch ( a ) {}
          return o
        },
        set: function ( e, t, n, o ) {
          const a = Ct( e, t );
          if ( o === n ) yt.a.removeItem( a );
          else {
            const e = 2592e3;
            yt.a.setItem( a, JSON.stringify( o ), e )
          }
        }
      };
      const vt = {
        init: e => {
          e.on( "init", () => {
            const t = {
                contentId: p.a.get( "content-id" )
              },
              n = Object( s.default )( "#rte-savebar-tinymce-plugin-point" );
            n.append( `\n    <span class="minor-edit toolbar-item">\n        <input id="notifyWatchers" name="notifyWatchers" value="true" type="checkbox" checked>\n        <label for="notifyWatchers">\n          <span>${(t=>e.translate(t))("editor.minor.edit")}</span>\n        </label>\n    </span>\n` );
            const o = n[ 0 ].querySelector( 'input[id="notifyWatchers"]' ),
              a = wt.get( "notifyWatchers", t.contentId, !0 );
            null !== a && ( o.checked = a ), Object( pt.a )( o, "change", () => {
              wt.set( "notifyWatchers", t.contentId, !0, o.checked )
            } )
          } )
        },
        getInfo: () => ( {
          longname: "Confluence Notify Watchers",
          author: "Atlassian",
          authorurl: "http://www.atlassian.com",
          version: `${u.a.tinymce.majorVersion}.${u.a.tinymce.minorVersion}`
        } )
      };
      let Ot;

      function xt() {
        Object( a.b )( "analytics", {
          name: "confluence.table.image.insert",
          data: {
            pageId: p.a.get( "page-id" ),
            tableMode: Tt()
          }
        } )
      }

      function kt() {
        return !!Object( s.default )( Ot.selection.getNode() ).closest( "table.confluenceTable" ).length
      }

      function Tt() {
        const e = Object( s.default )( Ot.selection.getNode() ).closest( "table.confluenceTable" );
        return e.hasClass( "fixed-table" ) ? "fixed" : e.hasClass( "relative-table" ) ? "relative" : "fluid"
      }

      function jt() {
        const e = Object( s.default )( Ot.getBody() ).find( "table.confluenceTable" );
        Object( a.b )( "analytics", {
          name: "confluence.table.quality.in.page",
          data: {
            pageId: p.a.get( "page-id" ),
            total: e.length,
            fixed: e.filter( ".fixed-table" ).length,
            fluid: e.filter( ":not(.fixed-table,.relative-table)" ).length,
            relative: e.filter( ".relative-table" ).length,
            nested: e.find( "table.confluenceTable" ).length
          }
        } )
      }
      const Et = {
        init( e ) {
          function t( e, t ) {
            kt() && function ( e ) {
              const t = function () {
                const e = Object( s.default )( Ot.selection.getNode() ),
                  t = e.closest( "th, td" );
                return e.width() > t.width()
              };
              e && e.name && e.name.indexOf( "confluence.editor.image.resize" ) >= 0 && Object( a.b )( "analytics", {
                name: "confluence.table.img.resize",
                data: {
                  pageId: p.a.get( "page-id" ),
                  tableMode: Tt(),
                  isImgBiggerCell: t()
                }
              } )
            }( t )
          }
          Ot = e, e.on( "ExecCommand", e => {
            switch ( e.command ) {
              case "mceAutoWidth":
              case "mceRelativeWidth":
              case "mceFixedWidth":
                Object( a.b )( "analytics", {
                  name: "confluence.table.mode.to." + Tt(),
                  data: {
                    pageId: p.a.get( "page-id" )
                  }
                } );
                break;
              case "mceTableCopyRow":
                Object( a.b )( "analytics", {
                  name: "confluence.table.row.copy",
                  data: {
                    pageId: p.a.get( "page-id" )
                  }
                } );
                break;
              case "mceTablePasteRowBefore":
              case "mceTablePasteRowAfter":
                Object( a.b )( "analytics", {
                  name: "confluence.table.row.paste",
                  data: {
                    pageId: p.a.get( "page-id" )
                  }
                } );
                break;
              case "mceTableCopyCol":
                Object( a.b )( "analytics", {
                  name: "confluence.table.col.copy",
                  data: {
                    pageId: p.a.get( "page-id" )
                  }
                } );
                break;
              case "mceTablePasteColBefore":
              case "mceTablePasteColAfter":
                Object( a.b )( "analytics", {
                  name: "confluence.table.col.paste",
                  data: {
                    pageId: p.a.get( "page-id" )
                  }
                } );
                break;
              case "mceInsertContent":
                ! function ( e ) {
                  const t = Object( s.default )( "<div/>" ).html( e );
                  t.find( "img" ).length && kt() && xt(), t.find( "table.confluenceTable" ).length && Object( a.b )( "analytics", {
                    name: "confluence.table.paste",
                    data: {
                      pageId: p.a.get( "page-id" )
                    }
                  } )
                }( e.value )
            }
          } ), e.on( "Init", () => {
            e.selection.onSetContent.add( ( e, t ) => {
              kt() && t && function ( e ) {
                Object( s.default )( "<div/>" ).html( e.content ).find( ".confluence-embedded-image" ).length && xt()
              }( t )
            } )
          } ), Object( a.a )( "analyticsEvent", t ), Object( a.a )( "rte.safe-save.success", jt ), e.on( "Remove", () => {
            Object( a.c )( "analyticsEvent", t ), Object( a.c )( "rte.safe-save.success", jt )
          } )
        },
        getInfo: () => ( {
          longname: "Table Analytics Plugin",
          author: "Atlassian",
          authorurl: "http://www.atlassian.com",
          version: `${u.a.tinymce.majorVersion}.${u.a.tinymce.minorVersion}`
        } )
      };

      function At( e, t, n ) {
        n && n.node && Object( s.default )( ".inline-comment-marker", n.node ).contents().unwrap()
      }
      const It = {
        init( e ) {
          e.on( "beforeExecCommand", e => {
            if ( "Indent" === e.command || "Outdent" === e.command ) {
              const t = e.target,
                n = t.selection.getNode(),
                o = n.nodeName.toLowerCase();
              if ( "li" !== o && "body" !== o ) {
                const e = parseInt( t.dom.getStyle( n, "margin-left" ) || 0, 10 ) + parseInt( t.dom.getStyle( n, "padding-left" ) || 0, 10 );
                if ( 0 !== e ) {
                  const o = t.settings.indentation,
                    a = /[a-z%]+/i.exec( o );
                  t.dom.setStyle( n, "padding-left", "" ), t.dom.setStyle( n, "margin-left", e + a )
                }
              }
            }
          } )
        },
        getInfo: () => ( {
          longname: "Confluence Indentation",
          author: "Atlassian",
          authorurl: "http://www.atlassian.com",
          version: `${u.a.tinymce.majorVersion}.${u.a.tinymce.minorVersion}`
        } )
      };
      const St = function ( e ) {
          const t = e.selection.getNode(),
            n = Object( s.default )( t ).closest( "a" ),
            o = e.selection.getRng();
          n.length && function ( e, t, n ) {
            if ( !e.selection.getSel().isCollapsed ) return !1;
            if ( t.compareEndPoints ) {
              const o = e.getBody().createTextRange();
              return o.moveToElementText( n ), o.collapse( 0 ), 0 === t.compareEndPoints( "EndToEnd", o )
            }
            const o = t.endContainer;
            if ( 3 === o.nodeType ) return o.wholeText.length == t.endOffset;
            const a = o.childNodes[ t.endOffset ];
            return Object( s.default )( a ).is( ":last-child" )
          }( e, e.selection.getRng(), t ) && ( o.setStartAfter( n[ 0 ] ), o.setEndAfter( n[ 0 ] ), e.selection.setRng( o ), e.selection.collapse() )
        },
        Mt = function ( e ) {
          const t = e.endOffset;
          return 3 === e.endContainer.nodeType ? e.endContainer : e.endContainer.childNodes[ t - 1 ]
        },
        Bt = function ( e, t ) {
          if ( t && t.previousSibling && t.previousSibling.hasChildNodes() ) {
            const n = t.previousSibling,
              o = n.childNodes.length,
              a = n.childNodes[ o - 1 ],
              r = a.length,
              i = e.dom.createRng();
            i.setStart( a, r ), i.setEnd( a, r ), e.selection.setRng( i )
          }
        },
        Nt = {
          init( e ) {
            e.on( "KeyDown", t => {
              u.a.tinymce.VK.modifierPressed( t ) || 32 !== t.keyCode || St( e ), u.a.tinymce.VK.modifierPressed( t ) || 8 !== t.keyCode && 37 !== t.keyCode || function ( e ) {
                if ( e.selection.isCollapsed() && e.selection.selectedRange && ! function ( e ) {
                    return !!e.dom.getParents( e.selection.getNode(), "#autocomplete-search-text" ).length
                  }( e ) ) {
                  const t = Mt( e.selection.selectedRange );
                  t && t.nodeValue && 65279 === t.nodeValue.charCodeAt( 0 ) && function ( e, t ) {
                    return 1 == t.nodeValue.length && 1 == e.selection.getNode().childNodes.length
                  }( e, t ) && e.undoManager.ignore( () => {
                    Bt( e, t ), t.parentNode.removeChild( t )
                  } )
                }
              }( e )
            } )
          }
        };
      n( "Czhu" );

      function Rt( e ) {
        let t = e.offsetTop;
        for ( ; e.offsetParent; ) t += ( e = e.offsetParent ).offsetTop;
        return t
      }
      var _t = n( "SRtI" );
      const Pt = e => {
          const t = [];
          return [ ...e ].forEach( ( e, n ) => {
            ( function ( e, t ) {
              const n = t ? t.documentElement : u.a.document.documentElement;
              if ( !e || !n ) return;
              const o = e.getBoundingClientRect(),
                {
                  top: a,
                  bottom: r
                } = o,
                i = n.offsetHeight;
              return 0 <= a && a < i || 0 <= r && r <= i || a <= 0 && 0 <= r && r >= i
            } )( e ) && t.push( {
              targetElementIndex: n,
              visibleBlockEl: e
            } )
          } ), t
        },
        $t = e => {
          const t = Pt( e );
          let n = null;
          return t.some( e => !! function ( e, t ) {
            const n = t ? t.documentElement : u.a.document.documentElement;
            if ( !e || !n ) return;
            const o = e.getBoundingClientRect(),
              {
                top: a
              } = o,
              r = n.offsetHeight;
            return 0 <= a && a < r
          }( e.visibleBlockEl ) && ( n = e, !0 ) ), !n && t.length > 0 ? t[ 0 ] : n || {
            targetElementIndex: -1,
            visibleBlockEl: null
          }
        };

      function Ht( e, t ) {
        if ( !e || 0 === t ) return null;
        const n = {
          targetElementIndex: -1,
          offsetBetweenTargetAndCurrentScroll: 0,
          columnLayoutPosition: {
            columnIndex: -1,
            rowIndex: -1
          }
        };
        if ( ( e => {
            if ( !e ) return !1;
            const t = e.children[ 0 ];
            return t && t.classList.contains( "contentLayout2" )
          } )( e ) ) {
          const o = e.children[ 0 ].children,
            {
              targetElementIndex: a,
              visibleBlockEl: r
            } = $t( o );
          if ( r ) {
            const e = r.getElementsByClassName( "innerCell" ),
              {
                columnIndex: o,
                targetElementIndexInColumn: i,
                visibleBlockEl: c
              } = ( e => {
                const t = {
                  targetElementIndexInColumn: -1,
                  columnIndex: -1,
                  visibleBlockEl: null
                };
                return [ ...e ].some( ( e, n ) => {
                  const {
                    visibleBlockEl: o,
                    targetElementIndex: a
                  } = $t( e.children );
                  return !!o && ( t.columnIndex = n, t.targetElementIndexInColumn = a, t.visibleBlockEl = o, !0 )
                } ), t
              } )( e );
            c && ( n.targetElementIndex = i, n.offsetBetweenTargetAndCurrentScroll = t - Rt( c ), n.columnLayoutPosition = {
              rowIndex: a,
              columnIndex: o
            } )
          }
        } else {
          const {
            targetElementIndex: o,
            visibleBlockEl: a
          } = $t( e.children );
          a && ( n.targetElementIndex = o, n.offsetBetweenTargetAndCurrentScroll = t - Rt( a ), delete n.columnLayoutPosition )
        }
        return -1 !== n.targetElementIndex ? n : null
      }
      const Dt = {
        _saveScrollPosition( e ) {
          e.getDoc() && e.getWin() && ( e => {
            const {
              contentId: t,
              isInViewPage: n,
              docObject: o = document,
              winObject: a = u.a
            } = e;
            let r;
            r = n ? o.getElementById( _t.b.ID_START_CONTENT_IN_VIEW_PAGE ) : o.body;
            const i = Ht( r, a.pageYOffset );
            i && ( i.contentId = t, i.isInViewPage = n, yt.b.setItem( _t.b.PERSIST_SCROLL_POSITION_IN_VIEW_PAGE, JSON.stringify( i ) ) )
          } )( {
            contentId: T(),
            isInViewPage: !1,
            docObject: e.getDoc(),
            winObject: e.getWin()
          } )
        },
        _restoreScrollPositionIfNeeded( e ) {
          e.getDoc() && e.getWin() && ( e => {
            const {
              contentId: t,
              isInViewPage: n,
              docObject: o = document,
              winObject: a = u.a
            } = e;
            let r, i = yt.b.getItem( _t.b.PERSIST_SCROLL_POSITION_IN_VIEW_PAGE );
            try {
              i = JSON.parse( i )
            } catch ( s ) {
              0
            } finally {
              yt.b.removeItem( _t.b.PERSIST_SCROLL_POSITION_IN_VIEW_PAGE )
            }
            if ( !i || i.contentId !== t || i.isInViewPage === n ) return;
            r = n ? o.getElementById( _t.b.ID_START_CONTENT_IN_VIEW_PAGE ) : o.body;
            const {
              columnLayoutPosition: c
            } = i;
            let l;
            if ( c ) {
              const e = r.children[ 0 ].children[ c.rowIndex ].getElementsByClassName( "innerCell" )[ c.columnIndex ];
              l = e && e.children[ i.targetElementIndex ]
            } else l = r.children[ i.targetElementIndex ];
            if ( l ) {
              const e = Rt( l ) + i.offsetBetweenTargetAndCurrentScroll;
              setTimeout( () => a.scrollTo( 0, e ), 1 )
            }
          } )( {
            contentId: T(),
            isInViewPage: !1,
            docObject: e.getDoc(),
            winObject: e.getWin()
          } )
        },
        init: e => {
          const t = p.a.get( "content-type" );
          "page" !== t && "blogpost" !== t || ( Object( a.a )( "rte-collab-ready", () => {
            Dt._restoreScrollPositionIfNeeded( e )
          } ), Object( a.a )( "rte-ready", () => {
            u.a.Confluence.Editor.UI.cancelButton.click( () => Dt._saveScrollPosition( e ) ), u.a.Confluence.Editor.UI.saveButton.click( () => Dt._saveScrollPosition( e ) )
          } ) )
        },
        getInfo: () => ( {
          longname: "Persist scroll position for transition between view page and edit page",
          author: "Atlassian",
          authorurl: "http://www.atlassian.com",
          version: `${u.a.tinymce.majorVersion}.${u.a.tinymce.minorVersion}`
        } )
      };
      var Lt = n( "cczi" );

      function Ft() {
        u.a.tinymce.activeEditor.getBody().style.height = "auto"
      }
      var zt = n( "owi1" );

      function Wt() {
        const e = Object( zt.a )();
        return {
          component: function ( e ) {
            let t;
            return e = e || {}, e = s.default.extend( {}, {
              keypressListener: n => {
                if ( 27 === n.keyCode ) O.a.debug( "dialog.js: escape keydown caught" ), Object( s.default )( ".aui-dropdown", t.popup.element ).is( ":visible" ) || ( "function" == typeof e.onCancel ? e.onCancel() : t.hide() );
                else if ( 13 === n.keyCode && ( O.a.debug( "dialog.js: enter keydown caught" ), !Object( s.default )( ".aui-dropdown", t.popup.element ).is( ":visible" ) ) ) {
                  "textarea" != ( n.target.nodeName && n.target.nodeName.toLowerCase() ) && "function" == typeof e.onSubmit && setTimeout( e.onSubmit )
                }
              },
              width: 865,
              height: 530
            }, e ), t = new O.a.Dialog( e ), document.addEventListener( "hideLayer", ( n, o, a ) => {
              "popup" == o && a == t && "function" == typeof e.onCancel && e.onCancel()
            } ), t
          },
          initialiser: function ( t ) {
            Object( a.a )( "show.dialog", ( e, t ) => {
              const n = O.a.Meta.get( "page-id" ),
                o = O.a.Meta.get( "space-key" ),
                a = O.a.Meta.get( "editor-mode" ),
                r = O.a.Meta.get( "new-page" );
              O.a.EventQueue = O.a.EventQueue || [], O.a.EventQueue.push( {
                name: t.dialog.id,
                properties: ( () => {
                  const e = {};
                  return n && ( e.pageid = n ), o && ( e.spacekey = o ), a && ( e.editormode = a ), r && ( e.newpage = r ), e
                } )()
              } )
            } ), document.addEventListener( "showLayer", ( n, o, a ) => {
              e.runBinderComponents(), "popup" == o && a && ( n => {
                const o = t( n );
                let a;
                if ( o.attr( "data-lasttab-override" ) ) return;
                o.attr( "data-tab-default" ) && ( a = o.attr( "data-tab-default" ) );
                const r = e.storageManager( o.attr( "id" ) ),
                  i = r.getItem( "last-tab" ),
                  c = null != i ? i : a;
                c && t( `.page-menu-item:visible:eq(${c}) button`, o ).click(), o.attr( "data-lasttab-bound" ) || ( t( ".page-menu-item", o ).each( ( e, n ) => {
                  t( n ).click( () => {
                    r.setItem( "last-tab", e )
                  } )
                } ), o.attr( "data-lasttab-bound", "true" ) )
              } )( a.element )
            } ), O.a.Dialog.prototype.overrideLastTab = () => {
              t( this.popup.element ).attr( "data-lasttab-override", "true" )
            }, O.a.Dialog.prototype.addHelpText = ( e, n ) => {
              if ( !e ) return;
              let o = e;
              n && ( o = O.a.template( e ).fill( n ).toString() );
              const a = this.page[ this.curpage ];
              a.buttonpanel || a.addButtonPanel();
              const r = t( "<div class='dialog-tip'></div>" ).html( o );
              a.buttonpanel.append( r ), t( "a", r ).click( () => ( u.a.open( this.href, "_blank" ).focus(), !1 ) )
            }, O.a.Dialog.prototype.getTitle = () => t( `#${this.id}.dialog-components:visible h2` ).text(), O.a.Dialog.prototype.isVisible = () => t( "#" + this.id ).is( ":visible" )
          }
        }
      }
      var Kt = "undefined" != typeof Confluence ? Confluence : {};
      var Vt = function () {
        const e = {
          Button: function ( e ) {
            const t = e.text,
              n = e.tooltip,
              o = e.triggerText,
              a = e.iconClass,
              r = e.click,
              i = !!e.disabled,
              c = e.id;
            this.render = () => {
              const e = Object( s.default )( '<button type="button"></button>' ).addClass( "aui-button" ).attr( "data-tooltip", n || t );
              if ( c && e.attr( "id", c ), i && e.prop( "disabled", !0 ).attr( "aria-disabled", "true" ), e.click( () => {
                  e.prop( "disabled" ) || r()
                } ), a ) {
                const n = Object( s.default )( "<span />" );
                n.addClass( "icon " + a ), n.text( t ), e.append( n )
              }
              if ( o ) {
                const t = Object( s.default )( "<span />" );
                t.addClass( "trigger-text" ), t.text( o ), e.append( t )
              }
              return e[ 0 ]
            }
          },
          DropDownButton: function ( e ) {
            const t = e.id,
              n = e.tooltip,
              o = e.text || "",
              a = e.iconClass,
              r = !!e.disabled,
              i = e.dropDownContent;
            let c;
            this.render = function () {
              const e = Object( s.default )( "<div></div>" ).addClass( "toolbar-item" ).addClass( "toolbar-dropdown" ).attr( "data-tooltip", n );
              e.attr( "id", t );
              const l = Object( s.default )( "<div/>" ).addClass( "aui-dd-parent" ),
                d = Object( s.default )( "<a href='#'></a>" );
              if ( d.addClass( "toolbar-trigger" ).addClass( "aui-dd-trigger" ).addClass( "aui-button" ), o && d.append( `<span class='dropdown-text'>${o}</span>` ), r && ( e.addClass( "disabled" ), d.addClass( "disabled" ) ), a ) {
                const e = Object( s.default )( "<span />" );
                e.addClass( "icon " + a ), e.text( o ), d.append( e )
              }
              const u = Object( s.default )( "<span/>" );
              return u.addClass( "icon" ).addClass( "icon-dropdown" ), d.append( u ), c = Object( s.default )( "<div/>" ).addClass( "hidden" ).addClass( "aui-dropdown" ), i && c.append( i ), l.append( d ), l.append( c ), e.append( l ), e[ 0 ]
            }
          },
          TextButton: function ( e ) {
            const t = e.text,
              n = e.textClass,
              o = e.click,
              a = !!e.disabled,
              r = e.tooltip;
            this.render = () => {
              const e = Object( s.default )( '<button type="button"></button>' ).addClass( "aui-button" ).addClass( n ).text( t );
              return r && e.attr( "data-tooltip", r ), a && e.prop( "disabled", !0 ).attr( "aria-disabled", "true" ), e.click( () => {
                e.prop( "disabled" ) || o()
              } ), e[ 0 ]
            }
          },
          TextBox: function ( e ) {
            const t = e.id,
              n = e.text,
              o = e.name,
              a = e.keydown,
              r = e.cssClass;
            this.render = function () {
              const e = Object( s.default )( "<div></div>" ).addClass( "toolbar-item" );
              e.append( Object( s.default )( `<label for="${t}">${n}</label>` ) );
              const i = Object( s.default )( `<input id="${t}" type='text' name="${o}" class="${r} text" autocomplete="off">` );
              return i.keydown( e => {
                a( e )
              } ), e.append( i ), e[ 0 ]
            }
          },
          Group: function ( e, t ) {
            const n = e;
            this.render = function () {
              const e = Object( s.default )( "<div></div>" );
              e.addClass( "aui-buttons" ), t && ( t.id && e.attr( "id", t.id ), t.groupClass && e.addClass( t.groupClass ) );
              for ( let t = 0, o = n.length; t < o; t++ ) e.append( n[ t ].render() );
              return e[ 0 ]
            }
          }
        };
        return e.SplitGroup = function ( e, t ) {
          const n = e,
            o = t && t.dropDownOptions || {};
          this.render = function () {
            const e = Object( s.default )( "<div></div>" );
            e.addClass( "aui-buttons" ), t && ( t.id && e.attr( "id", t.id ), t.groupClass && e.addClass( t.groupClass ) );
            for ( let t = 0, o = n.length; t < o; t++ ) e.append( n[ t ].render() );
            return e.append( function () {
              const e = o.id,
                t = o.disabled,
                n = o.dropDownContent,
                a = o.title,
                r = o.alignment,
                i = Object( s.default )( "<div></div>" ).addClass( "toolbar-item" ).addClass( "toolbar-dropdown" ).addClass( "toolbar-splitbutton" );
              e && i.attr( "id", e ), a && i.attr( {
                "data-tooltip": a
              } ), r && i.data( "dropdown-alignment", r );
              const c = Object( s.default )( "<div/>" ).addClass( "aui-dd-parent" ),
                l = Object( s.default )( "<a href='#'></a>" );
              l.addClass( "toolbar-trigger aui-dd-trigger" ), t && ( i.addClass( "disabled" ), l.addClass( "disabled" ) );
              const d = Object( s.default )( "<span/>" );
              d.addClass( "icon" ).addClass( "icon-dropdown" ), l.append( d );
              const u = Object( s.default )( "<div/>" ).addClass( "hidden" ).addClass( "aui-dropdown" );
              return n && u.append( n ), c.append( l ), c.append( u ), i.append( c ), i[ 0 ]
            }() ), t && t.postProcess && t.postProcess( e ), e[ 0 ]
          }
        }, u.a.Confluence.Editor.Toolbar = {}, u.a.Confluence.Editor.Toolbar.Components = e, e
      };
      const Ut = () => {
        const e = {};
        let t, n, o, a, r, i, c, l, d, m, p, g, h;
        let b, y, C, w, v, O = !1;

        function x() {
          c.css( {
            top: Object( s.default )( "#insert-table-dropdown" ).outerHeight( !0 )
          } ), x = function () {}
        }

        function k() {
          c.hasClass( "hidden" ) || ( ! function () {
            const e = Object( s.default )( u.a.tinymce.activeEditor.getDoc() );
            t.unbind( ".atlassian-table-picker" ), e.unbind( ".atlassian-table-picker" )
          }(), c.addClass( "hidden" ), o.addClass( "hidden" ), i.removeClass( "active" ) )
        }

        function T( e, t ) {
          e == C && t == w || ( e = Math.max( 1, Math.min( 15, e ) ), t = Math.max( 1, Math.min( 20, t ) ), b = Math.max( 4, e ), y = Math.max( 4, t ), C = e, w = t, l.width( 25 * b + 1 ), l.height( 17 * y + 20 ), E( d, b, y ), E( p, C, w ), E( m, b, 1 ), E( g, C, 1 ), j(), h.text( `${C} x ${w}` ) )
        }

        function j() {
          m.toggleClass( "hidden", !v ), g.toggleClass( "hidden", !v )
        }

        function E( e, t, n ) {
          e.width( 25 * t + 1 ), e.height( 17 * n + 1 )
        }

        function A( e ) {
          const n = d.offset(),
            o = n.top - t.scrollTop(),
            a = n.left - t.scrollLeft(),
            r = o + d.outerHeight( !0 ) + 0,
            i = r - 17 - 0,
            c = a + d.outerWidth( !0 ) + 0,
            l = c - 25 - 0,
            s = e.clientY,
            u = e.clientX;
          let f, m, p = b,
            g = y;
          u > c ? ( f = u - c, m = ~~( f / 25 + 1 ), p += m ) : u < l && ( f = u - l, m = ~~( f / 25 - 1 ), p += m ), s > r ? ( f = s - r, m = ~~( f / 17 + 1 ), g += m ) : s < i && ( f = s - i, m = ~~( f / 17 - 1 ), g += m ), T( p, g )
        }

        function I( e ) {
          e != v && ( v = e, j() )
        }

        function S( e ) {
          const t = function ( e ) {
            const t = 1 + ~~( ~~( e.offsetX || e.originalEvent.layerX ) / 25 ),
              n = 1 + ~~( ~~( e.offsetY || e.originalEvent.layerY ) / 17 );
            return t < 1 || t > 15 || n < 1 || n > 20 ? null : {
              width: t,
              height: n
            }
          }( e );
          e.preventDefault(), t && ( k(), function ( e, t, o ) {
            let a, r;
            0;
            const i = Object( s.default )( "#tinymce-table-form" );
            i.length ? ( i.find( 'input[name="rows"]' ).val( t ), i.find( 'input[name="cols"]' ).val( e ) ) : ( a = u.a.AJS.renderTemplate( "tableForm", t, e ), r = Object( s.default )( "<div></div>" ).addClass( "hidden" ), r.append( a ), n.append( r ) );
            Object( s.default )( "#table-heading-checkbox" ).prop( "checked", o ), Object( f.b )().BookmarkManager.restoreBookmark(), u.a.tinymce.activeEditor.undoManager.beforeChange();
            const c = {
              cols: e,
              rows: t,
              heading: o
            };
            u.a.tinymce.activeEditor.execCommand( "confInsertTable", !1, c ), r && r.remove()
          }( t.width, t.height, v ) )
        }

        function M( e ) {
          s.default.browser.msie ? ( 16 === e.keyCode && I( !e.shiftKey ), 27 === e.keyCode && k() ) : ( 0 === e.charCode && I( !e.shiftKey ), 27 === e.keyCode && 0 === e.charCode && k() )
        }

        function B() {
          k()
        }
        return e.insertTable = S, {
          bindToControl: function () {
            t = Object( s.default )( document ), n = t.find( "body" ), a = Object( s.default )( "#insert-table-dropdown" ), r = Object( s.default )( "#rte-button-insert-table" ), i = a.find( ".aui-dd-parent" ), c = Object( s.default )( "#table-picker-container" ), l = c.find( ".table-picker-box" ), d = c.find( ".picker-cell" ), m = c.find( ".picker-heading" ), p = c.find( ".picker-selected-cell" ), g = c.find( ".picker-selected-heading" ), h = l.find( ".desc" ), o = Object( s.default )( "<div></div>" ).attr( "id", "table-picker-backdrop" ).addClass( "hidden" ).appendTo( a ), r.click( e => {
              e.preventDefault(), O || ( Object( f.b )().BookmarkManager.storeBookmark(), x(), v = !0, T( 1, 1 ), function () {
                const e = Object( s.default )( u.a.tinymce.activeEditor.getDoc() );
                t.bind( "mousemove.atlassian-table-picker", A ), t.bind( "keydown.atlassian-table-picker", M ), t.bind( "keyup.atlassian-table-picker", M ), e.bind( "keydown.atlassian-table-picker", M ), e.bind( "keyup.atlassian-table-picker", M )
              }(), o.removeClass( "hidden" ), c.removeClass( "hidden" ), i.addClass( "active" ), r.focus() )
            } ), o.click( B ), p.click( S ), g.click( S )
          },
          disable: function () {
            O = !0, a.addClass( "disabled" )
          },
          enable: function () {
            O = !1, a.removeClass( "disabled" ), r.attr( "data-tooltip", u.a.tinymce.activeEditor.translate( "tinymce.tablepicker.insert_table_title" ) )
          },
          close: k,
          _internal: e
        }
      };
      var qt = [],
        Gt = e => {
          e.fn.tipsy.autoBounds2 = function ( t, n ) {
            return function () {
              const o = {},
                a = e( document ).scrollTop() + t,
                r = e( document ).scrollLeft() + t,
                i = e( this );
              return n.length > 1 ? ( o.ns = n[ 0 ], o.ew = n[ 1 ] ) : "e" == n[ 0 ] || "w" == n[ 0 ] ? o.ew = n[ 0 ] : o.ns = n[ 0 ], i.offset().top < a && ( o.ns = "n" ), i.offset().left < r && ( o.ew = "w" ), e( window ).width() + e( document ).scrollLeft() - ( i.offset().left + i.width() ) < t && ( o.ew = "e" ), e( window ).height() + e( document ).scrollTop() - ( i.offset().top + i.height() ) < t && ( o.ns = "s" ), o.ns ? o.ns + ( o.ew ? o.ew : "" ) : o.ew
            }
          }
        };

      function Jt() {
        Object( s.default )( ".tipsy" ).remove()
      }

      function Xt() {
        const e = /\+/g;
        setTimeout( () => {
          Object( s.default )( "#rte-savebar .aui-button[title]" ).each( ( function () {
            const t = Object( s.default )( this );
            let n = t.attr( "title" );
            if ( t.removeAttr( "title" ), u.a.tinymce.Env.mac ) {
              const t = n.indexOf( "(" );
              t >= 0 && ( n = n.substr( 0, t ) + n.substr( t ).replace( e, "" ) )
            }
            t.attr( "data-tooltip", n )
          } ) )
        }, 0 )
      }

      function Qt() {
        Gt( s.default );
        const e = {
            live: !0,
            gravity: "n",
            title: function () {
              return Object( s.default )( this ).attr( "data-tooltip" ) || ""
            },
            delayIn: 250,
            delayOut: 0
          },
          t = s.default.fn.tipsy.autoBounds2( 50, "n" ),
          n = s.default.fn.tipsy.autoBounds2( 50, "w" ),
          o = s.default.extend( {}, e, {
            gravity: t
          } ),
          r = s.default.extend( {}, e, {
            gravity: n
          } ),
          i = s.default.extend( {}, e, {
            gravity: "se"
          } );

        function c( e, t, n ) {
          if ( "dropdown" === t && ( Object( s.default )( ".tipsy" ).remove(), n && n.trigger && n.trigger.jquery ) ) {
            const e = n.trigger.data( "tipsy" );
            e && ( e.hoverState = "out" )
          }
        }
        Object( s.default )( "#rte-toolbar [data-tooltip]:not(.dropdown-item)" ).tooltip( o ), Object( s.default )( "#rte-toolbar .dropdown-item[data-tooltip]" ).tooltip( r ), Object( s.default )( "#rte-savebar [data-tooltip]" ).tooltip( i ), Object( s.default )( "#editor-precursor [data-tooltip]" ).tooltip( o ), Object( s.default )( "#property-panel [data-tooltip]" ).tooltip( o ), $( "showLayer", c ), $( "hideLayer", c ), Object( a.a )( "created.property-panel", Jt ), Object( a.a )( "destroyed.property-panel", Jt ), Object( a.a )( "register-contexts.keyboardshortcuts", Xt )
      }

      function Yt() {
        Object( a.c )( "created.property-panel", Jt ), Object( a.c )( "destroyed.property-panel", Jt ), Object( a.c )( "register-contexts.keyboardshortcuts", Xt )
      }

      function Zt() {
        const e = Kt.Editor;
        let t, n;

        function o( e ) {
          const t = () => {
            e && e.hide()
          };
          Object( pt.a )( document, "showLayer", ( n, o, a ) => {
            if ( "dropdown" == o && a == e ) {
              const e = u.a.tinymce.activeEditor;
              e.on( "Click", t ), e.on( "KeyUp", t )
            }
          } ), Object( pt.a )( document, "hideLayer", ( n, o, a ) => {
            if ( "dropdown" == o && a == e ) {
              const e = u.a.tinymce.activeEditor;
              e.off( "Click", t ), e.off( "KeyUp", t )
            }
          } )
        }

        function a( e ) {
          e.addCallback( "show", () => {
            e.$.parents( ".disabled" ).length && e.hide()
          } )
        }

        function r( e, t ) {
          const n = m( t );
          Object( s.default )( "#" + n ).removeClass( "disabled" )
        }

        function i( e, t ) {
          const n = m( t );
          Object( s.default )( "#" + n ).addClass( "disabled" )
        }

        function c( e, t ) {
          t ? e.closest( ".aui-button" ).prop( "disabled", !0 ).attr( "aria-disabled", "true" ).toggleClass( "disabled", t ) : e.closest( ".aui-button" ).prop( "disabled", !1 ).removeAttr( "aria-disabled" ).toggleClass( "disabled", t )
        }

        function l( e, t, n, o ) {
          const a = Object( s.default )( "#toolbar" ),
            r = a.find( ".toolbar-item" ),
            i = Object( s.default )( "#insert-menu, #more-menu" ),
            c = Object( s.default )( "#insert-menu, #color-picker-control" ),
            l = Object( s.default )( "#format-dropdown" ),
            d = o || function () {
              return !0
            };
          r.toggleClass( "disabled", e ), i.toggleClass( "disabled", e ), c.toggleClass( "disabled", e ), l.toggleClass( "disabled", !!t ), Object( f.b )().TablePicker[ e ? "disable" : "enable" ](), void 0 !== n && a.find( "button, input" ).filter( d ).toggleClass( "disabled", n ).prop( "disabled", n )
        }
        const d = e => n => {
          const o = n.element,
            a = ( r = o, r = Object( s.default )( r ).closest( "PRE,BLOCKQUOTE,.text-placeholder" ), e => r.is( e ) );
          var r;
          const i = a( "BLOCKQUOTE" ),
            c = a( "PRE" ),
            d = a( ".text-placeholder" );
          let u;
          c ? ( u = Object( s.default )( o ).parents( "table" ).is( "[data-macro-body-type='PLAIN_TEXT']" ), l( !0, u ) ) : d ? l( !0 ) : i ? ( l( !1 ), t.toggleClass( "disabled", !0 ) ) : l( !1 ), E( Object( s.default )( o ), Object( f.b )().TablePicker, e ), C( Object( s.default )( o ) )
        };

        function m( e ) {
          let t = "default";
          return e && e.id && ( t = e.id ), "rte-toolbar-row-" + t
        }

        function p( e ) {
          return Object( s.default )( "#" + e ).length > 0
        }

        function g( e, t ) {
          let n = t.animate;
          null == n && ( n = !0 );
          const o = function () {
              Object( s.default )( this ).remove(), Object( pt.b )( document, "resize.resizeplugin" ), t.onHide && t.onHide()
            },
            a = m( t ),
            r = Object( s.default )( "#" + a );
          n ? r.addClass( "disabled" ) : ( r.addClass( "disabled" ), o.call( r ) )
        }

        function h( e, t ) {
          const n = m( t );
          if ( p( n ) ) return;
          let o = t.animate;
          null == o && ( o = !0 );
          const a = Object( s.default )( "<div></div>" ).addClass( "toolbar-split toolbar-split-row toolbar-contextual disabled" );
          a.attr( "id", n ), t.editorAdjacent && a.addClass( "editor-adjacent" );
          const r = t.topToolbar ? Object( s.default )( "#rte-toolbar.aui-toolbar:visible" ) : Object( s.default )( "#savebar-container .aui-toolbar:visible" );
          for ( let i = 0, c = t.buttons.length; i < c; i++ ) {
            const e = t.buttons[ i ];
            a.append( e.render() )
          }
          if ( t.editorAdjacent ) r.append( a );
          else {
            const e = Object( s.default )( ".editor-adjacent", r ).filter( ":first" );
            e.length ? e.before( a ) : r.append( a )
          }
          a.find( ".toolbar-dropdown" ).each( ( function () {
            b( this )
          } ) );
          o || ( Object( pt.b )( document, "resize.resizeplugin" ), Object( pt.b )( document, "shown.contextToolbar" ), t.onVisible && t.onVisible() ), a.removeClass( "disabled" )
        }

        function b( e ) {
          const t = Object( s.default )( e ),
            n = t.dropDown( "Standard", {
              alignment: t.data( "dropdown-alignment" ) || "left"
            } )[ 0 ];
          t.find( ".dropdown-item" ).click( ( function ( e ) {
            ! function ( e ) {
              const t = e.attr( "data-macro-name" ),
                n = e.attr( "data-command" ),
                o = e.attr( "data-format" ),
                a = e.attr( "data-control-id" ),
                r = u.a.tinymce.activeEditor;
              t && R.macroBrowserToolbarButtonClicked( {
                presetMacroName: t
              } ), n && r.execCommand( n, !1 ), o && r.theme.controlHandlers.formatselect.click.dispatch( o ), a && r.theme.controlHandlers.buttons.click.dispatch( a )
            }( Object( s.default )( this ) ), n.hide(), e.preventDefault()
          } ) ), a( n ), o( n )
        }

        function y() {
          const e = {},
            t = [];
          for ( const a in e ) t.push( "hints." + a );
          const n = function ( e ) {
              if ( !Array.isArray( e ) ) throw new Error( "Hints passed in must be an array of strings" );
              let t = Math.floor( Math.random() * e.length );
              return {
                getNextHint: () => {
                  const n = e[ t ];
                  return t = ( t + 1 ) % e.length, n
                }
              }
            }( t ),
            o = () => {
              Object( s.default )( "#rte-savebar .hints-text" ).html( u.a.tinymce.activeEditor.translate( "tinymce." + n.getNextHint() ) )
            };
          o(), Object( s.default )( "#rte-savebar a.hints-close" ).click( ( function ( e ) {
            Object( s.default )( this ).closest( ".toolbar-split" ).addClass( "hidden" ), e.preventDefault()
          } ) ), Object( s.default )( "#rte-savebar a.hints-next" ).click( e => {
            o(), e.preventDefault()
          } )
        }

        function C( e ) {
          x( k.c ) && ( e.closest( "P, BLOCKQUOTE, H1, H2, H3, H4, H5, PRE" ).length > 0 ? n.toggleClass( "disabled", !0 ) : n.toggleClass( "disabled", !1 ) )
        }
        return {
          init( c ) {
            var l;
            b( "#format-dropdown" ), b( "#more-menu .aui-dd-parent" ), b( "#insert-menu .aui-dd-parent" ), Object( s.default )( "#pagelayout-menu" ).length && b( "#pagelayout-menu .aui-dd-parent" ), Object( s.default )( "#template-menu" ).length && b( "#template-menu .aui-dd-parent" ),
              function () {
                const e = Object( s.default )( "#color-picker-control" );
                if ( !e.length ) return;
                const t = e.find( ".aui-dd-parent" ),
                  n = Object( s.default )( "#rte-button-color" ),
                  r = n.find( ".selected-color" ),
                  i = t.dropDown( "Standard", {
                    alignment: "left"
                  } )[ 0 ],
                  c = n.attr( "data-color" );
                r.css( "background-color", "#" + c ), e.delegate( "a[data-color]", "click", ( function ( e ) {
                  const t = Object( s.default )( this ),
                    o = t.attr( "data-color" );
                  e.preventDefault(), t.closest( ".disabled" ).length || ( u.a.tinymce.execCommand( "ForeColor", !1, "#" + o ), n.attr( "data-color", o ), r.css( "background-color", "#" + o ) )
                } ) ), a( i ), o( i )
              }(), Object( f.b )().TablePicker.bindToControl( u.a.tinymce.activeEditor, Object( s.default )( "#insert-table-dropdown" ) ),
              function () {
                const t = Object( s.default )( "#rte-button-source-mode" );
                t.click( () => {
                  t.hasClass( "active" ) ? e.changeMode( e.MODE_RICHTEXT ) : e.changeMode( e.MODE_SOURCE )
                } )
              }(), y(), t = Object( s.default )( "#rte-button-justifyleft, #rte-button-justifycenter, #rte-button-justifyright" ), n = Object( s.default )( "#rte-button-indent" ), l = c, Object( pt.b )( document, "initContextToolbars.Toolbar", l ), Object( pt.a )( document, "createContextToolbarRow.Toolbar", h ), Object( pt.a )( document, "removeContextToolbarRow.Toolbar", g ), Object( pt.a )( document, "enableContextToolbarRow.Toolbar", r ), Object( pt.a )( document, "disableContextToolbarRow.Toolbar", i );
            const m = Object( s.default )( "#format-dropdown" ),
              p = m.find( "span.dropdown-text" );
            c.on( "BeforeExecCommand", e => {
              const t = e.command,
                n = e.value,
                o = u.a.tinymce.activeEditor;
              if ( s.default.each( [ "pre", "blockquote" ], ( function () {
                  "FormatBlock" == t && n == this && ( o.formatter.remove( "alignleft" ), o.formatter.remove( "aligncenter" ), o.formatter.remove( "alignright" ) )
                } ) ), Object( s.default )( o.selection.getNode() ).closest( "pre,.text-placeholder" ).length ) {
                const n = [ "Bold", "Italic", "Underline", "Strikethrough", "InsertUnorderedList", "InsertOrderedList", "InsertInlineTaskList", "InsertInlineTaskListNoToggle", "superscript", "subscript", "mceConfMacroBrowser", "mceConfimage", "mceConfAttachments", "mceEmotion", "InsertWikiMarkup", "mceConflink", "mceInsertTable", "mceConfAutocompleteLink" ],
                  o = n.length;
                for ( let a = 0; a < o; a++ ) t == n[ a ] && e.preventDefault()
              }
              if ( "FormatBlock" == t && "pre" == n && ( o.undoManager.add(), o.execCommand( "removeFormat" ) ), "FormatBlock" == t && "p" == n ) {
                const e = m.find( ".dropdown-item[data-format='blockquote']" ).text();
                p.text() == e && o.execCommand( "FormatBlock", !1, "blockquote" )
              }
              "confDefaultTable" === t && j( Object( s.default )( o.selection.getNode() ) ) && e.preventDefault()
            } ), c.on( "ExecCommand", e => {
              const t = e.command,
                n = e.value;
              if ( "FormatBlock" == t ) {
                let e = m.find( `.dropdown-item[data-format='${n}']` );
                e.length || ( e = m.find( ".dropdown-item[data-format='p']" ) ), p.text( e.text() )
              }
            } ), c.on( "NodeChange", d( c ) ), c.on( "init", () => {
              const e = u.a.tinymce.activeEditor;
              const t = {};
              Object( s.default )( ".aui-toolbar" ).find( "[data-control-id]" ).each( ( n, o ) => {
                let a;
                const r = ( o = Object( s.default )( o ) ).attr( "data-control-id" );
                "formatselect" == r ? ( a = e.theme.controlHandlers[ r ], a.state.add( e => {
                  const t = u.a.tinymce.activeEditor;
                  if ( "p" == e ) {
                    const n = t.selection.getNode();
                    Object( s.default )( n ).closest( "p" ).parent().is( "blockquote" ) && ( e = "blockquote" )
                  }
                  const n = m.find( `.dropdown-item[data-format='${e}']` ).text();
                  n && p.text( n )
                } ) ) : t[ r ] = o
              } );
              const n = e.theme.controlHandlers.buttons;
              n.state.add( ( e, n, o ) => {
                const a = t[ e ];
                if ( !a ) return;
                const r = a.find( ".icon-check" ),
                  i = a.closest( ".toolbar-item" );
                r.length ? r.toggleClass( "hidden", !o ) : i.toggleClass( n, o )
              } ), Object( s.default )( ".aui-toolbar" ).delegate( ".toolbar-item", "click", ( function ( e ) {
                const t = Object( s.default )( this );
                if ( t.hasClass( "disabled" ) ) e.preventDefault();
                else {
                  const o = t.children( ".toolbar-trigger[data-control-id]" ).attr( "data-control-id" );
                  o && ( n.click.dispatch( o ), e.preventDefault() )
                }
              } ) ), s.default.support.shrinkWrapBlocks = !1, Qt()
            } ), c.on( "Remove", () => {
              Yt()
            } ), c.on( "Focus", () => {
              const e = Object( s.default )( c.selection.getNode() );
              E( e, Object( f.b )().TablePicker, c ), C( e )
            } )
          },
          toggleToolbarButton: c,
          disableToolbarButton: function ( e ) {
            c( Object( s.default )( "." + e.replace( ".", "" ) ), !0 )
          },
          enableToolbarButton: function ( e ) {
            c( Object( s.default )( "." + e.replace( ".", "" ) ), !1 )
          },
          focusToolbarButton: function ( e ) {
            Object( s.default )( "." + e.replace( ".", "" ) ).closest( ".aui-button" ).focus()
          },
          isToolbarRowEnabled: function ( e ) {
            const t = m( {
              id: e
            } );
            return p( t ) && !Object( s.default )( "#" + t ).hasClass( "disabled" )
          },
          getToolbarRow: function ( e ) {
            const t = m( {
                id: e
              } ),
              n = Object( s.default )( "#" + t );
            return n.length ? n[ 0 ] : null
          },
          isToolbarButtonEnabled: function ( e ) {
            return !Object( s.default )( "." + e.replace( ".", "" ) ).closest( ".aui-button" ).prop( "disabled" )
          },
          bindDropdownMenu: b,
          toggleToolbarButtons: l,
          getInfo: () => ( {
            longname: "customtoolbar",
            author: "Atlassian",
            authorurl: "http://www.atlassian.com",
            infourl: "http://www.atlassian.com/",
            version: "1.0"
          } )
        }
      }

      function en() {
        const e = Kt.Editor;

        function t( e ) {
          const t = () => {
            e && e.hide()
          };
          Object( pt.a )( document, "showLayer", ( n, o, a ) => {
            if ( "dropdown" == o && a == e ) {
              const e = u.a.tinymce.activeEditor;
              e.on( "Click", t ), e.on( "KeyUp", t )
            }
          } ), Object( pt.a )( document, "hideLayer", ( n, o, a ) => {
            if ( "dropdown" == o && a == e ) {
              const e = u.a.tinymce.activeEditor;
              e.off( "Click", t ), e.off( "KeyUp", t )
            }
          } )
        }

        function n( e ) {
          e.addCallback( "show", () => {
            e.$.parents( ".disabled" ).length && e.hide()
          } )
        }

        function o( e, t ) {
          const n = l( t );
          Object( s.default )( "#" + n ).removeClass( "disabled" )
        }

        function a( e, t ) {
          const n = l( t );
          Object( s.default )( "#" + n ).addClass( "disabled" )
        }

        function r( e, t ) {
          t ? e.closest( ".aui-button" ).prop( "disabled", !0 ).attr( "aria-disabled", "true" ).toggleClass( "disabled", t ) : e.closest( ".aui-button" ).prop( "disabled", !1 ).removeAttr( "aria-disabled" ).toggleClass( "disabled", t )
        }

        function i( e, t, n, o ) {
          const a = Object( s.default )( "#toolbar" ),
            r = a.find( ".toolbar-item" ),
            i = Object( s.default )( "#insert-menu, #more-menu" ),
            c = Object( s.default )( "#insert-menu, #color-picker-control" ),
            l = Object( s.default )( "#format-dropdown" ),
            d = o || function () {
              return !0
            };
          r.toggleClass( "disabled", e ), i.toggleClass( "disabled", e ), c.toggleClass( "disabled", e ), l.toggleClass( "disabled", !!t ), Object( f.b )().TablePicker[ e ? "disable" : "enable" ](), void 0 !== n && a.find( "button, input" ).filter( d ).toggleClass( "disabled", n ).prop( "disabled", n )
        }
        const c = e => t => {
          const n = t.element,
            o = ( a = n, a = Object( s.default )( a ).closest( "PRE,BLOCKQUOTE,.text-placeholder" ), e => a.is( e ) );
          var a;
          const r = o( "BLOCKQUOTE" ),
            c = o( "PRE" ),
            l = o( ".text-placeholder" );
          let d;
          if ( c ) d = Object( s.default )( n ).parents( "table" ).is( "[data-macro-body-type='PLAIN_TEXT']" ), i( !0, d );
          else if ( l ) i( !0 );
          else if ( r ) {
            i( !1 );
            Object( s.default )( "#rte-button-justifyleft, #rte-button-justifycenter, #rte-button-justifyright" ).toggleClass( "disabled", !0 )
          } else i( !1 );
          E( Object( s.default )( n ), Object( f.b )().TablePicker, e )
        };

        function l( e ) {
          let t = "default";
          return e && e.id && ( t = e.id ), "rte-toolbar-row-" + t
        }

        function d( e ) {
          return Object( s.default )( "#" + e ).length > 0
        }
        let m;

        function p( e, t ) {
          let n = t.animate;
          null == n && ( n = !0 );
          const o = function () {
            Object( s.default )( this ).remove(), Object( pt.b )( document, "resize.resizeplugin" ), t.onHide && t.onHide()
          };
          clearTimeout( m ), m = setTimeout( () => {
            const e = l( t ),
              a = Object( s.default )( "#" + e );
            n ? a.slideUp( 400, o ) : ( a.hide(), o.call( a ) )
          }, 100 )
        }

        function g( e, t ) {
          const n = l( t );
          let o = t.animate;
          if ( null == o && ( o = !0 ), d( n ) ) return void Object( s.default )( `#${n}:hidden` ).slideDown( 400, () => {
            0
          } );
          const a = Object( s.default )( "<div></div>" ).addClass( "toolbar-split toolbar-split-row toolbar-contextual" );
          a.attr( "id", n ), t.editorAdjacent && a.addClass( "editor-adjacent" );
          const r = t.topToolbar ? Object( s.default )( "#rte-toolbar.aui-toolbar:visible" ) : Object( s.default )( "#savebar-container .aui-toolbar:visible" );
          for ( let c = 0, l = t.buttons.length; c < l; c++ ) {
            const e = t.buttons[ c ];
            a.append( e.render() )
          }
          if ( a.css( {
              display: "none"
            } ), t.editorAdjacent ) r.append( a );
          else {
            const e = Object( s.default )( ".editor-adjacent", r ).filter( ":first" );
            e.length ? e.before( a ) : r.append( a )
          }
          a.find( ".toolbar-dropdown" ).each( ( function () {
            h( this )
          } ) );
          const i = () => {
            Object( pt.b )( document, "resize.resizeplugin" ), Object( pt.b )( document, "shown.contextToolbar" ), t.onVisible && t.onVisible()
          };
          clearTimeout( m ), m = setTimeout( () => {
            o ? a.slideDown( 400, i ) : ( a.show(), i() )
          }, 100 )
        }

        function h( e ) {
          const o = Object( s.default )( e ),
            a = o.dropDown( "Standard", {
              alignment: o.data( "dropdown-alignment" ) || "left"
            } )[ 0 ];
          o.find( ".dropdown-item" ).click( ( function ( e ) {
            ! function ( e ) {
              const t = e.attr( "data-macro-name" ),
                n = e.attr( "data-command" ),
                o = e.attr( "data-format" ),
                a = e.attr( "data-control-id" ),
                r = u.a.tinymce.activeEditor;
              t && R.macroBrowserToolbarButtonClicked( {
                presetMacroName: t
              } ), n && r.execCommand( n, !1 ), o && r.theme.controlHandlers.formatselect.click.dispatch( o ), a && r.theme.controlHandlers.buttons.click.dispatch( a )
            }( Object( s.default )( this ) ), a.hide(), e.preventDefault()
          } ) ), n( a ), t( a )
        }

        function b() {
          const e = {},
            t = [];
          for ( const a in e ) t.push( "hints." + a );
          const n = function ( e ) {
              if ( !Array.isArray( e ) ) throw new Error( "Hints passed in must be an array of strings" );
              let t = Math.floor( Math.random() * e.length );
              return {
                getNextHint: () => {
                  const n = e[ t ];
                  return t = ( t + 1 ) % e.length, n
                }
              }
            }( t ),
            o = () => {
              Object( s.default )( "#rte-savebar .hints-text" ).html( u.a.tinymce.activeEditor.translate( "tinymce." + n.getNextHint() ) )
            };
          o(), Object( s.default )( "#rte-savebar a.hints-close" ).click( ( function ( e ) {
            Object( s.default )( this ).closest( ".toolbar-split" ).addClass( "hidden" ), e.preventDefault()
          } ) ), Object( s.default )( "#rte-savebar a.hints-next" ).click( e => {
            o(), e.preventDefault()
          } )
        }
        return {
          init( r ) {
            var i;
            h( "#format-dropdown" ), h( "#more-menu .aui-dd-parent" ), h( "#insert-menu .aui-dd-parent" ), Object( s.default )( "#pagelayout-menu" ).length && h( "#pagelayout-menu .aui-dd-parent" ), Object( s.default )( "#template-menu" ).length && h( "#template-menu .aui-dd-parent" ),
              function () {
                const e = Object( s.default )( "#color-picker-control" );
                if ( !e.length ) return;
                const o = e.find( ".aui-dd-parent" ),
                  a = Object( s.default )( "#rte-button-color" ),
                  r = a.find( ".selected-color" ),
                  i = o.dropDown( "Standard", {
                    alignment: "left"
                  } )[ 0 ],
                  c = a.attr( "data-color" );
                r.css( "background-color", "#" + c ), e.delegate( "a[data-color]", "click", ( function ( e ) {
                  const t = Object( s.default )( this ),
                    n = t.attr( "data-color" );
                  e.preventDefault(), t.closest( ".disabled" ).length || ( u.a.tinymce.execCommand( "ForeColor", !1, "#" + n ), a.attr( "data-color", n ), r.css( "background-color", "#" + n ) )
                } ) ), n( i ), t( i )
              }(), Object( f.b )().TablePicker.bindToControl( u.a.tinymce.activeEditor, Object( s.default )( "#insert-table-dropdown" ) ),
              function () {
                const t = Object( s.default )( "#rte-button-source-mode" );
                t.click( () => {
                  t.hasClass( "active" ) ? e.changeMode( e.MODE_RICHTEXT ) : e.changeMode( e.MODE_SOURCE )
                } )
              }(), b(), i = r, Object( pt.b )( document, "initContextToolbars.Toolbar", i ), Object( pt.a )( document, "createContextToolbarRow.Toolbar", g ), Object( pt.a )( document, "removeContextToolbarRow.Toolbar", p ), Object( pt.a )( document, "enableContextToolbarRow.Toolbar", o ), Object( pt.a )( document, "disableContextToolbarRow.Toolbar", a );
            const l = Object( s.default )( "#format-dropdown" ),
              d = l.find( "span.dropdown-text" );
            r.on( "BeforeExecCommand", e => {
              const t = e.command,
                n = e.value,
                o = u.a.tinymce.activeEditor;
              if ( s.default.each( [ "pre", "blockquote" ], ( function () {
                  "FormatBlock" == t && n == this && ( o.formatter.remove( "alignleft" ), o.formatter.remove( "aligncenter" ), o.formatter.remove( "alignright" ) )
                } ) ), Object( s.default )( o.selection.getNode() ).closest( "pre,.text-placeholder" ).length ) {
                const n = [ "Bold", "Italic", "Underline", "Strikethrough", "InsertUnorderedList", "InsertOrderedList", "InsertInlineTaskList", "InsertInlineTaskListNoToggle", "superscript", "subscript", "mceConfMacroBrowser", "mceConfimage", "mceConfAttachments", "mceEmotion", "InsertWikiMarkup", "mceConflink", "mceInsertTable", "mceConfAutocompleteLink" ],
                  o = n.length;
                for ( let a = 0; a < o; a++ ) t == n[ a ] && e.preventDefault()
              }
              if ( "FormatBlock" == t && "pre" == n && ( o.undoManager.add(), o.execCommand( "removeFormat" ) ), "FormatBlock" == t && "p" == n ) {
                const e = l.find( ".dropdown-item[data-format='blockquote']" ).text();
                d.text() == e && o.execCommand( "FormatBlock", !1, "blockquote" )
              }
            } ), r.on( "ExecCommand", e => {
              const t = e.command,
                n = e.value;
              if ( "FormatBlock" == t ) {
                let e = l.find( `.dropdown-item[data-format='${n}']` );
                e.length || ( e = l.find( ".dropdown-item[data-format='p']" ) ), d.text( e.text() )
              }
            } ), r.on( "NodeChange", c( r ) ), r.on( "init", () => {
              const e = u.a.tinymce.activeEditor;
              const t = {};
              Object( s.default )( ".aui-toolbar" ).find( "[data-control-id]" ).each( ( n, o ) => {
                let a;
                const r = ( o = Object( s.default )( o ) ).attr( "data-control-id" );
                "formatselect" == r ? ( a = e.theme.controlHandlers[ r ], a.state.add( e => {
                  const t = u.a.tinymce.activeEditor;
                  if ( "p" == e ) {
                    const n = t.selection.getNode();
                    Object( s.default )( n ).closest( "p" ).parent().is( "blockquote" ) && ( e = "blockquote" )
                  }
                  const n = l.find( `.dropdown-item[data-format='${e}']` ).text();
                  n && d.text( n )
                } ) ) : t[ r ] = o
              } );
              const n = e.theme.controlHandlers.buttons;
              n.state.add( ( e, n, o ) => {
                const a = t[ e ];
                if ( !a ) return;
                const r = a.find( ".icon-check" ),
                  i = a.closest( ".toolbar-item" );
                r.length ? r.toggleClass( "hidden", !o ) : i.toggleClass( n, o )
              } ), Object( s.default )( ".aui-toolbar" ).delegate( ".toolbar-item", "click", ( function ( e ) {
                const t = Object( s.default )( this );
                if ( t.hasClass( "disabled" ) ) e.preventDefault();
                else {
                  const o = t.children( ".toolbar-trigger[data-control-id]" ).attr( "data-control-id" );
                  o && ( n.click.dispatch( o ), e.preventDefault() )
                }
              } ) ), s.default.support.shrinkWrapBlocks = !1, Qt()
            } ), r.on( "Remove", () => {
              Yt()
            } )
          },
          toggleToolbarButton: r,
          disableToolbarButton: function ( e ) {
            r( Object( s.default )( "." + e.replace( ".", "" ) ), !0 )
          },
          enableToolbarButton: function ( e ) {
            r( Object( s.default )( "." + e.replace( ".", "" ) ), !1 )
          },
          focusToolbarButton: function ( e ) {
            Object( s.default )( "." + e.replace( ".", "" ) ).closest( ".aui-button" ).focus()
          },
          isToolbarRowEnabled: function ( e ) {
            const t = l( {
              id: e
            } );
            return d( t ) && !Object( s.default )( "#" + t ).hasClass( "disabled" )
          },
          getToolbarRow: function ( e ) {
            const t = l( {
                id: e
              } ),
              n = Object( s.default )( "#" + t );
            return n.length ? n[ 0 ] : null
          },
          isToolbarButtonEnabled: function ( e ) {
            return !Object( s.default )( "." + e.replace( ".", "" ) ).closest( ".aui-button" ).prop( "disabled" )
          },
          bindDropdownMenu: h,
          toggleToolbarButtons: i,
          getInfo: () => ( {
            longname: "customtoolbar",
            author: "Atlassian",
            authorurl: "http://www.atlassian.com",
            infourl: "http://www.atlassian.com/",
            version: "1.0"
          } )
        }
      }
      var tn = n( "QTRv" );
      tn.a.configure( {
        endpoint: u.a.location ? `${u.a.location.protocol}//${u.a.location.host}` : "",
        contextPath: b.a
      } );
      var nn = tn.a;
      n( "gV2d" );
      const on = () => !x( "editor.insert-wiki-markdown" ),
        an = {
          HELP_REST_API: b.a + "/plugins/tinymce/helplink.action",
          WIKI: {
            CONFLUENCE: {
              api: nn.getWikiConfluenceToXhtml,
              val: "CONFLUENCE",
              label: "tinymce.confluence.conf_wikimarkup_confluence_label",
              helpLink: "help.insert.wiki.markup",
              restApi: "/rest/tinymce/1/wikixhtmlconverter"
            },
            MARKDOWN: {
              api: nn.getWikiMarkdownToXhtml,
              val: "MARKDOWN",
              label: "tinymce.confluence.conf_wikimarkup_markdown_label",
              helpLink: "help.insert.wiki.markup.markdown",
              restApi: "/rest/tinymce/1/markdownxhtmlconverter"
            }
          }
        },
        rn = {
          dialog: {
            id: "insert-wiki-markup-dialog",
            content: "",
            width: 980,
            height: 500,
            popup: !1,
            name: "confluence.conf_wikimarkup_desc"
          },
          markupEditId: "insert-wiki-textarea",
          previewAreaId: "insert-wiki-textarea-preview",
          selectionMenuId: "wiki-parser-selection-tool",
          serverRequestTimer: 300,
          entityId: p.a.get( "content-id" ),
          spaceKey: p.a.get( "space-key" )
        };
      let cn = null;
      const ln = () => {
          const e = wt.get( "insert-wiki-markup-dialog.parser", "global", "CONFLUENCE" );
          return an.WIKI[ e ]
        },
        sn = ( e, t ) => {
          const n = Object( s.default )( ( ( e, t, n ) => `\n    <span class="wiki-parser-selector">\n        <form action="#" method="post" id="d" class="aui">\n            <select class="select medium-field" id="wiki-parser-selection-tool" name="wiki-parser-selection-tool" title="wiki parser selector">\n                <option value="${t.val}">${e(t.label)}</option>\n                ${Object.keys(n).filter(e=>n[e].val!==t.val).map(t=>`<option value="${n[t].val}">${e(n[t].label)}</option>`)}\n            </select>\n        </form>\n    </span>\n` )( e, t, an.WIKI ) );
          return Object( s.default )( "#insert-wiki-insert-title" ).append( n ), Object( s.default )( "#" + rn.selectionMenuId )
        },
        dn = () => {
          const e = Object( s.default )( "#" + rn.selectionMenuId );
          return e.length ? e.val() : ln().val
        },
        un = e => {
          const t = {
            wiki: ( e = e || {} ).textToConvert,
            entityId: rn.entityId,
            spaceKey: rn.spaceKey
          };
          e.api( JSON.stringify( t ), ( t, n ) => {
            t ? e.errorCallback( t ) : e.successCallback( n )
          } )
        },
        fn = () => {
          const e = Object( s.default )( "#" + rn.markupEditId ),
            t = e.val();
          s.default.trim( t ) ? un( {
            api: an.WIKI[ dn() ].api,
            textToConvert: t,
            successCallback: e => {
              cn.html( e )
            },
            errorCallback: () => {
              cn.html( e.val() )
            }
          } ) : cn.html( t )
        },
        mn = () => {
          const e = dn();
          wt.set( "insert-wiki-markup-dialog.parser", "global", "CONFLUENCE", e ), ( e => {
            const t = Object( s.default )( "#" + rn.dialog.id ).find( ".dialog-help-link" ),
              n = an.WIKI[ e ].helpLink;
            t.load( an.HELP_REST_API, {
              linkUrlKey: n
            } )
          } )( e ), fn()
        };

      function pn( e ) {
        if ( "string" != typeof e ) return "";
        const t = {
          "<": "&lt;",
          ">": "&gt;",
          "&": "&amp;",
          "'": "&#39;",
          "`": "&#96;"
        };
        return e.replace( /[&"'<>`]/g, e => "string" == typeof t[ e ] ? t[ e ] : "&quot;" )
      }
      const gn = {
        init: ( e, t ) => {
          var n;
          rn.dialog.content = on() ? `\n    <p id="insert-wiki-info-title">${(n=t=>e.translate(t))("tinymce.confluence.conf_wikimarkup_info_title")}</p>\n    <form action='#' method='post' id="insert-wiki-markup-form" class="aui">\n        <h3 class="wiki-title">\n            <span id="insert-wiki-insert-title">${n("tinymce.confluence.conf_wikimarkup.insert.label")}</span>\n            <span id="insert-wiki-preview-title">${n("tinymce.confluence.conf_wikimarkup_preview_label")}</span>\n        </h3>\n        <textarea class='monospaceInput textarea' id='insert-wiki-textarea' name='wikitext'/>\x3c!--\n            --\x3e<div class='example-container' id='insert-wiki-textarea-preview'></div>\n    </form>\n` : " \n    <form action='#' method='post' id=\"insert-wiki-markup-form\" class=\"aui\">\n        <textarea class='monospaceInput textarea originalDefault' id='insert-wiki-textarea' name='wikitext'/>\n    </form>\n";
          const o = t => {
              const n = rn.dialog.id,
                o = dn();
              var r;
              e.windowManager.setBusy( n, !1 ), u.a.tinymce.EditorManager.activeEditor.windowManager.close( n ), on() && ( Object( a.b )( "analytics", {
                name: "insert-wiki-markup-dialog." + o
              } ), "MARKDOWN" === o && ( t = ( e => {
                const t = Object( s.default )( e );
                t.find( "img" ).addClass( "confluence-embedded-image" );
                return Object( s.default )( "<div>" ).append( t.clone() ).html()
              } )( t ) ) ), e.execCommand( "mceInsertContent", !1, t ), r = e, u.a.tinymce.each( r.dom.select( "p > p" ), e => {
                try {
                  r.dom.split( e.parentNode, e )
                } catch ( t ) {}
              } )
            },
            r = ( t, n, o ) => {
              e.windowManager.setBusy( rn.dialog.id, !1 );
              const a = ( ( e, t ) => `\n        <p class='warning'>\n            ${e}\n        </p>\n        <p class='exception-report'>\n            <span class='exceptionMessage'>\n                ${t}\n            </span>\n        </p>\n` )( u.a.tinymce.EditorManager.activeEditor.translate( "tinymce.confluence.conf_wikimarkup_conversion_errors" ), "timeout" === n ? u.a.tinymce.EditorManager.activeEditor.translate( "tinymce.confluence.conf_wikimarkup_timeout" ) : `${pn(n)} : ${pn(o)}` );
              u.a.tinymce.EditorManager.activeEditor.windowManager.alert( a )
            };
          e.addCommand( "InsertWikiMarkup", () => {
            const n = ln();
            if ( e.windowManager.open( rn.dialog, {
                buttons: [ {
                  label: "confluence_dlg.insertbutton.title",
                  action: () => {
                    e.windowManager.setBusy( rn.dialog.id, !0 ), un( {
                      api: n.api,
                      successCallback: o,
                      errorCallback: r,
                      textToConvert: Object( s.default )( "#" + rn.markupEditId ).val(),
                      setBusy: !0
                    } )
                  }
                } ],
                plugin_url: t,
                helpLink: n.helpLink,
                hintText: "confluence.conf_wikimarkup_hint",
                cssClass: "insert-wiki-markup-panel"
              } ), on() ) {
              let t;
              ( e => {
                const t = Object( s.default )( "#wysiwygTextarea_ifr" ).contents().find( "head" ).html(),
                  n = Object( s.default )( "<iframe tabindex='-1' id='insert-wiki-markup-preview' />" );
                Object( s.default )( "#" + e ).append( n );
                const o = n.contents(),
                  a = o[ 0 ];
                a.open(), a.write( '\n    <!DOCTYPE html>\n    <html class="insert-wiki-markup-dialog">\n        <head>\n        </head>\n        <body class="wiki-content previewWiki">\n        </body>\n    </html>\n' ), a.close(), o.find( "head" ).html( t ), cn = o.find( "body" )
              } )( rn.previewAreaId ), sn( t => e.translate( t ), n ).on( "change", mn ), Object( s.default )( "#" + rn.markupEditId ).on( "keydown", ( function () {
                clearTimeout( t ), t = setTimeout( fn, rn.serverRequestTimer )
              } ) )
            }
          } ), e.addButton( "insertwikimarkup", {
            title: "confluence.conf_wikimarkup_desc",
            cmd: "InsertWikiMarkup"
          } )
        },
        getInfo: () => ( {
          longname: "InsertWikiMarkip",
          author: "Atlassian",
          authorurl: "http://www.atlassian.com",
          infourl: "http://www.atlassian.com/",
          version: "1.1"
        } )
      };
      const hn = {
        fields: {
          string: {
            language: ( e, t ) => {
              const n = Object( s.default )( u.a.Confluence.Templates.MacroBrowser.macroParameterSelect() ),
                o = Object( s.default )( "select", n );
              var a;
              return null == t && ( t = {} ), t.setValue = e => {
                if ( 0 == o.find( `option[value='${e}']` ).length ) {
                  const t = Object( s.default )( "<option/>" );
                  t.val( e ), t.text( e ), o.append( t )
                }
              }, a = o, nn.getPluginCodeLanguages( ( e, t ) => {
                if ( e ) return;
                if ( !t.length ) return;
                const n = a.val();
                a.empty(), a.append( Object( s.default )( "<option/>" ).attr( "value", "" ) ), t.forEach( e => {
                  const t = Object( s.default )( "<option />" );
                  t.val( e.aliases[ 0 ] ), t.text( e.friendlyName ), a.append( t )
                } ), a.val( n )
              } ), new u.a.AJS.MacroBrowser.Field( n, o, t )
            }
          }
        }
      };
      const bn = [],
        yn = function ( e ) {
          return [ "shift", "shiftLeft", "shiftRight", "ctrl", "ctrlLeft", "ctrlRight", "alt", "altLeft", "altRight", "meta", "metaLeft", "metaRight" ].indexOf( e ) > -1
        },
        Cn = function ( e ) {
          const t = {
            "-": {
              default: 189,
              variants: [ 189, 45, 109, 173 ]
            },
            "\\": {
              default: 47,
              variants: [ 47, 191 ]
            },
            "/": {
              default: 92,
              variants: [ 92, 220 ]
            }
          };
          for ( const n in t ) {
            const o = t[ n ];
            if ( o.variants.indexOf( e ) > -1 ) return o.default
          }
          return e
        },
        wn = function ( e ) {
          const t = {};
          return e.forEach( e => {
            const n = Cn( e.which ),
              o = function ( e, t ) {
                return yn( e ) ? e + ( 1 === t.location ? "Left" : "Right" ) : e
              }( xn( n ), e );
            t[ o ] = e
          } ), t
        },
        vn = function ( e, t ) {
          const n = wn( e );
          return kn( n, t )
        },
        On = function ( e ) {
          const t = u.a.tinymce.Env.mac ? "mac" : "win";
          return e.map( e => ( {
            keys: e[ t ].split( "+" ).map( e => 0 === e.toLowerCase().indexOf( "arrow" ) ? function ( e ) {
              return {
                arrowleft: 37,
                arrowup: 38,
                arrowright: 39,
                arrowdown: 40
              } [ e ]
            }( e.toLowerCase() ) : yn( e ) || e.length > 1 ? e : function ( e ) {
              const t = e.charCodeAt( 0 );
              return "-" === e || "\\" === e || "/" === e ? Cn( t ) : t
            }( e ) ),
            context: e.context,
            param: e.param,
            description: e.description
          } ) )
        },
        xn = function ( e ) {
          switch ( e ) {
            case 16:
              return "shift";
            case 17:
              return "ctrl";
            case 18:
              return "alt";
            case 91:
            case 93:
            case 224:
              return "meta";
            default:
              return e
          }
        },
        kn = function ( e, t ) {
          return t.filter( t => function ( e, t ) {
            return Object.keys( e ).length === t.keys.length && t.keys.every( t => !( !yn( t ) || ! function ( e, t ) {
              return !( !e[ t + "Left" ] && !e[ t + "Right" ] )
            }( e, t ) ) || !!e[ t ] )
          }( e, t ) )[ 0 ]
        },
        Tn = function ( e, t, n ) {
          if ( n ) {
            e.preventDefault();
            const o = n.param.split( "-" );
            t.execCommand( o[ 0 ], !1, o[ 1 ] )
          }
        },
        jn = function ( e, t ) {
          for ( let n = 0; n < t.length; n++ ) {
            const o = t[ n ];
            o && o.which === e.which && ( t.splice( n, 1 ), n-- )
          }
        },
        En = function () {
          bn.length = 0
        },
        An = function ( e, t ) {
          return function ( n ) {
            if ( n.metaKey || n.shiftKey || n.altKey || n.ctrlKey ) {
              if ( jn( n, bn ), bn.push( n ), bn.length > 1 && vn( bn, t ) ) {
                const o = vn( bn, t );
                Tn( n, e, o )
              }! function () {
                if ( u.a.tinymce.Env.mac )
                  for ( let t = 0; t < bn.length; t++ ) {
                    const n = bn[ t ].which;
                    xn( e = n ) === e && ( bn.splice( t, 1 ), t-- )
                  }
                var e
              }()
            } else En()
          }
        };
      var In = function ( e, t ) {
        const n = On( t );
        return e.on( "keydown", An( e, n ), !0 ), e.on( "keyup", ( function ( e ) {
          jn( e, bn )
        } ), !0 ), e.on( "blur", En ), u.a.addEventListener( "error", En ), ( ( e, t ) => {
          const n = u.a.document.querySelectorAll( "#versionComment, #content-title" );
          if ( n && 0 !== n.length )
            for ( let o = 0; o < n.length; o++ ) t.forEach( t => {
              n[ o ].addEventListener( "keydown", n => {
                let o = !0;
                const a = n.keyCode ? n.keyCode : n.which,
                  r = u.a.tinymce.Env.mac ? "meta" : "ctrl";
                t.keys.forEach( e => {
                  o = !( !o || !( e == r && n.metaKey || "shift" == e && n.shiftKey || a == e ) )
                } ), o && ( n.preventDefault(), Tn( n, e, t ) )
              } )
            } )
        } )( e, n.filter( e => "form.input" === e.context ) ), n
      };
      var Sn = [ {
        win: "ctrl+altLeft+0",
        mac: "meta+alt+0",
        context: "tinymce.block",
        param: "FormatBlock-p",
        description: "Paragraph"
      }, {
        win: "ctrl+altLeft+1",
        mac: "meta+alt+1",
        context: "tinymce.block",
        param: "FormatBlock-h1",
        description: "Heading 1"
      }, {
        win: "ctrl+altLeft+2",
        mac: "meta+alt+2",
        context: "tinymce.block",
        param: "FormatBlock-h2",
        description: "Heading 2"
      }, {
        win: "ctrl+altLeft+3",
        mac: "meta+alt+3",
        context: "tinymce.block",
        param: "FormatBlock-h3",
        description: "Heading 3"
      }, {
        win: "ctrl+altLeft+4",
        mac: "meta+alt+4",
        context: "tinymce.block",
        param: "FormatBlock-h4",
        description: "Heading 4"
      }, {
        win: "ctrl+altLeft+5",
        mac: "meta+alt+5",
        context: "tinymce.block",
        param: "FormatBlock-h5",
        description: "Heading 5"
      }, {
        win: "ctrl+altLeft+6",
        mac: "meta+alt+6",
        context: "tinymce.block",
        param: "FormatBlock-h6",
        description: "Heading 6"
      }, {
        win: "ctrl+shift+7",
        mac: "meta+shift+7",
        context: "tinymce.list",
        param: "InsertOrderedList",
        description: "Numbered List"
      }, {
        win: "ctrl+shift+8",
        mac: "meta+shift+8",
        context: "tinymce.block",
        param: "InsertUnorderedList",
        description: "Bullet List"
      }, {
        win: "ctrl+altLeft+9",
        mac: "ctrl+altLeft+9",
        context: "tinymce.quote",
        param: "mceBlockQuote",
        description: "Quote"
      }, {
        win: "ctrl+shift+I",
        mac: "meta+shift+I",
        context: "",
        param: "confDefaultTable",
        description: "Insert Table"
      }, {
        win: "ctrl+shift+M",
        mac: "meta+shift+M",
        context: "",
        param: "confMonospace",
        description: "Mono Spaced Font"
      }, {
        win: "ctrl+shift+-",
        mac: "meta+shift+-",
        context: "",
        param: "InsertHorizontalRule",
        description: "Insert Horizontal Rule"
      }, {
        win: "ctrl+H",
        mac: "meta+shift+H",
        context: "",
        param: "mceSearchReplaceToolbar",
        description: "Find Replace"
      }, {
        win: "ctrl+\\",
        mac: "meta+\\",
        context: "",
        param: "RemoveFormat",
        description: "Remove Formatting"
      }, {
        win: "ctrl+/",
        mac: "meta+/",
        context: "",
        param: "mceConfShortcutDialog",
        description: "Help"
      }, {
        win: "alt+shift+arrowUp",
        mac: "ctrl+alt+arrowUp",
        context: "",
        param: "mceTableInsertRowBefore",
        description: "Insert table row above"
      }, {
        win: "alt+shift+arrowDown",
        mac: "ctrl+alt+arrowDown",
        context: "",
        param: "mceTableInsertRowAfter",
        description: "Insert table row after"
      }, {
        win: "alt+shift+arrowRight",
        mac: "ctrl+alt+arrowRight",
        context: "",
        param: "mceTableInsertColAfter",
        description: "Insert column after"
      }, {
        win: "alt+shift+arrowLeft",
        mac: "ctrl+alt+arrowLeft",
        context: "",
        param: "mceTableInsertColBefore",
        description: "Insert column before"
      }, {
        win: "ctrl+shift+9",
        mac: "meta+shift+9",
        context: "",
        param: "FormatBlock-blockquote",
        description: "Quote"
      }, {
        win: "ctrl+S",
        mac: "meta+S",
        context: "form.input",
        param: "preventDefaultSave",
        description: "Prevent default behavior of browser"
      }, {
        win: "ctrl+13",
        mac: "meta+13",
        context: "form.input",
        param: "publish",
        description: "Save"
      }, {
        win: "ctrl+shift+E",
        mac: "meta+shift+E",
        context: "form.input",
        param: "preview",
        description: "Preview"
      }, {
        win: "ctrl+shift+J",
        mac: "meta+shift+J",
        context: "",
        param: "mceJiralink",
        description: "Open Insert JIRA dialog"
      } ];
      var Mn = function ( e ) {
        return {
          "meta+Alt+0": e.shortcuts.remove( "meta+Alt+0" ),
          "meta+Alt+1": e.shortcuts.remove( "meta+Alt+1" ),
          "meta+Alt+2": e.shortcuts.remove( "meta+Alt+2" ),
          "meta+Alt+3": e.shortcuts.remove( "meta+Alt+3" ),
          "meta+Alt+4": e.shortcuts.remove( "meta+Alt+4" ),
          "meta+Alt+5": e.shortcuts.remove( "meta+Alt+5" ),
          "meta+Alt+6": e.shortcuts.remove( "meta+Alt+6" ),
          "meta+Alt+7": e.shortcuts.remove( "meta+Alt+7" ),
          "meta+Alt+8": e.shortcuts.remove( "meta+Alt+8" ),
          "meta+s": e.shortcuts.remove( "meta+s" ),
          "meta+shift+i": e.shortcuts.remove( "meta+shift+i" ),
          "meta+shift+x": e.shortcuts.remove( "meta+shift+x" ),
          "meta+shift+c": e.shortcuts.remove( "meta+shift+c" ),
          "meta+shift+v": e.shortcuts.remove( "meta+shift+v" ),
          "ctrl+shift+M": e.shortcuts.remove( "ctrl+shift+M" ),
          "ctrl+F": e.shortcuts.remove( "ctrl+F" ),
          "meta+shift+n": e.shortcuts.remove( "meta+shift+n" ),
          "meta+shift+b": e.shortcuts.remove( "meta+shift+b" ),
          "access+0": e.shortcuts.remove( "access+0" ),
          "access+1": e.shortcuts.remove( "access+1" ),
          "access+2": e.shortcuts.remove( "access+2" ),
          "access+3": e.shortcuts.remove( "access+3" ),
          "access+4": e.shortcuts.remove( "access+4" ),
          "access+5": e.shortcuts.remove( "access+5" ),
          "access+6": e.shortcuts.remove( "access+6" ),
          "access+7": e.shortcuts.remove( "access+7" ),
          "access+8": e.shortcuts.remove( "access+8" ),
          "access+9": e.shortcuts.remove( "access+9" ),
          "alt+arrowUp": e.shortcuts.remove( "alt+38" ),
          "alt+arrowDown": e.shortcuts.remove( "alt+40" ),
          "ctrl+f": e.shortcuts.remove( "ctrl+f" ),
          "ctrl+shift+n": e.shortcuts.remove( "ctrl+shift+n" ),
          "ctrl+shift+b": e.shortcuts.remove( "ctrl+shift+b" ),
          "ctrl+shift+I": e.shortcuts.remove( "ctrl+shift+I" ),
          "ctrl+0": e.shortcuts.remove( "ctrl+0" ),
          "ctrl+1": e.shortcuts.remove( "ctrl+1" ),
          "ctrl+2": e.shortcuts.remove( "ctrl+2" ),
          "ctrl+3": e.shortcuts.remove( "ctrl+3" ),
          "ctrl+4": e.shortcuts.remove( "ctrl+4" ),
          "ctrl+5": e.shortcuts.remove( "ctrl+5" ),
          "ctrl+6": e.shortcuts.remove( "ctrl+6" ),
          "ctrl+7": e.shortcuts.remove( "ctrl+7" ),
          "ctrl+8": e.shortcuts.remove( "ctrl+8" ),
          "ctrl+s": e.shortcuts.remove( "ctrl+s" )
        }
      };
      const Bn = () => {
          u.a.tinymce.execCommand( "confInsertTable", !1, {
            cols: 3,
            rows: 3
          } )
        },
        Nn = () => {
          document.querySelector( "#rte-button-publish" ).click()
        },
        Rn = () => {
          document.querySelector( "#rte-button-preview" ).click()
        },
        _n = ( e, t ) => function () {
          e.execCommand( "FormatBlock", !1, t )
        };

      function Pn() {
        let e;

        function t() {
          const t = Object( s.default )( "#breadcrumbs" );
          t.detach(), !t.find( ".edited-page-title" ).length && e.length && t.append( e ), Object( s.default )( "#editor-precursor .cell" ).prepend( t )
        }
        if ( "comment" !== p.a.get( "content-type" ) ) {
          const n = Object( s.default )( "#quickedit-breadcrumbs" );
          n.length > 0 && ( Object( s.default )( "#breadcrumbs" ).detach(), n.attr( "id", "breadcrumbs" ), Object( s.default )( "#breadcrumb-section" ).append( n ) ), e = Object( s.default )( ".edited-page-title" ).parent().detach(), t(), Object( pt.a )( u.a.document, "mode-changed", ( n, o ) => {
            "preview" === o ? function () {
              const t = Object( s.default )( "#breadcrumbs" ).detach();
              e.detach(), Object( s.default )( "#breadcrumb-section" ).append( t )
            }() : "richtext" === o && t()
          } )
        }
      }
      const $n = {
        CONNECT: [ "wr!confluence.web.resources:querystring", "wr!confluence.web.resources:navigator-context", "wr!com.atlassian.plugins.atlassian-connect-plugin:confluence-atlassian-connect-resources-v5" ]
      }.CONNECT.concat( [ "wr!com.atlassian.plugins.atlassian-connect-plugin:dynamic-css-resources", "wr!com.atlassian.plugins.atlassian-connect-plugin:featured-macro-css-resources" ] ).concat( [ "wr!com.atlassian.plugins.atlassian-connect-plugin:confluence-atlassian-connect-autoconvert-resources-v5", "wr!com.atlassian.plugins.atlassian-connect-plugin:macro-editor-resources-v5" ] );

      function Hn( e ) {
        function t( e ) {
          Object( s.default )( "#autocomplete-dropdown .top-menu-item" ).spin( e )
        }

        function n( e, t ) {
          const n = t.presetMacroMetadata;
          e.replaceWithSelectedSearchText(), n ? O.a.MacroBrowser.hasRequiredParameters( n ) || n.alwaysShowConfig ? R.macroBrowserToolbarButtonClicked( t ) : ( Object( f.b )().BookmarkManager.storeBookmark(), B.insertMacro( {
            contentId: O.a.Meta.get( "content-id" ) || "0",
            macro: {
              name: n.macroName,
              body: ""
            }
          } ) ) : R.macroBrowserToolbarButtonClicked( t )
        }

        function o( e ) {
          if ( e.hidden && !O.a.MacroBrowser.isHiddenMacroShown( e ) ) return null;
          const t = {
            className: "autocomplete-macro-" + e.macroName,
            callback( t ) {
              n( t, {
                ignoreEditorSelection: !0,
                presetMacroMetadata: e
              } )
            }
          };
          return e.icon ? ( t.name = e.title, t.href = "#", t.icon = ( e.icon.relative ? O.a.params.staticResourceUrlPrefix : "" ) + e.icon.location ) : t.html = O.a.Editor.Autocompleter.Util.dropdownLink( e.title ), t
        }
        O.a.Editor.Autocompleter.Settings[ "{" ] = {
          ch: "{",
          cache: !1,
          endChars: [ "}", ":", "{" ],
          dropDownClassName: "autocomplete-macros",
          dropDownDelay: 0,
          selectFirstItem: !0,
          getHeaderText: () => e.translate( "editor.autocomplete.macros.header.text" ),
          getAdditionalLinks: () => [ {
            className: "dropdown-insert-macro",
            html: O.a.Editor.Autocompleter.Util.dropdownLink( e.translate( "editor.autocomplete.macros.dialog.browse" ), "dropdown-prevent-highlight", "editor-icon" ),
            callback( e ) {
              const t = e.text();
              n( e, {
                searchText: t
              } )
            }
          } ],
          getDataAndRunCallback( n, r, i ) {
            const c = O.a.MacroBrowser.getMetadataPromise(),
              l = this,
              d = arguments;

            function u() {
              let e;
              e = r ? function ( e ) {
                const t = [],
                  a = O.a.MacroBrowser.searchSummaries( e, {
                    keywordsField: "keywordsNoDesc"
                  } );
                for ( let r = 0, i = a.length; r < i; r++ ) {
                  const e = o( a[ r ] );
                  if ( e && t.push( e ) == n.maxResults ) break
                }
                return t
              }( r ) : function ( e ) {
                const t = [];
                return Object( s.default )( "#macro-insert-list li" ).each( ( n, a ) => {
                  const r = Object( s.default )( a ),
                    i = e.find( e => e.macroName === r.attr( "data-macro-name" ) );
                  if ( i ) {
                    const e = o( i );
                    e && t.push( e )
                  }
                } ), t
              }( O.a.MacroBrowser.metadataList ), t( !1 ), i( [ e ], r )
            }

            function f( e ) {
              e.preventDefault(), e.stopPropagation(), Object( a.b )( "analytics", {
                name: "autocomplete-macrobrowser.load-retry"
              } ), O.a.MacroBrowser.reset(), O.a.MacroBrowser.preLoadMacro(), l.getDataAndRunCallback.apply( l, d )
            }
            l.alreadyBinded || ( l.alreadyBinded = !0, c.always( () => {
              u(), l.alreadyBinded = !1
            } ), c.fail( () => {
              Object( a.b )( "analytics", {
                name: "autocomplete-macrobrowser.fail-to-load"
              } ), O.a.messages.warning( "#autocomplete-dropdown ol:nth(1)", {
                title: e.translate( "editor.autocomplete.macros.error.load.header" ),
                body: `<p><a id='macro-retry-link' href='#'>${e.translate("editor.autocomplete.macros.error.load.retrylink")}</a></p>`
              } ), Object( s.default )( "#macro-retry-link" ).click( f ), Object( s.default )( "#autocomplete-dropdown ol" ).eq( 1 ).show()
            } ) ), "pending" === c.state() && ( i( [], r ), t( !0 ) )
          },
          update() {
            throw new Error( "All items in the Macro Autocomplete dropdown must have a callback function" )
          }
        }
      }
      var Dn = n( "3IV/" );
      const Ln = () => ( {
        initContextToolbars() {
          const e = u.a.aui,
            t = u.a.tinymce.activeEditor,
            n = Vt(),
            o = e => {
              const n = "tinymce." + e;
              let o;
              o = x( "editor.spa.uxenhancements" ) ? u.a.tinymce.isMac ? n + "_shortcut_mac" : n + "_shortcut_win" : n + "_shortcut";
              let a = t.translate( n );
              const r = t.translate( o, "" );
              return r && r !== o && ( a += ` (${r})` ), a
            },
            a = "aui-icon aui-icon-small aui-iconfont-table-",
            r = u.a.AJS.storageManager( "atlassian.editor", "tables" ),
            i = {
              Buttons: [ new n.Group( [ new n.Button( {
                text: o( "table.row_before_desc" ),
                iconClass: a + "row-up",
                click() {
                  u.a.tinymce.execCommand( "mceTableInsertRowBefore", !1, "" )
                }
              } ), new n.Button( {
                text: o( "table.row_after_desc" ),
                iconClass: a + "row-down",
                click() {
                  u.a.tinymce.execCommand( "mceTableInsertRowAfter", !1, "" )
                }
              } ), new n.Button( {
                text: o( "table.delete_row_desc" ),
                iconClass: a + "row-remove",
                click() {
                  u.a.tinymce.execCommand( "mceTableDeleteRow", !1, "" )
                }
              } ) ] ), new n.Group( [ new n.Button( {
                text: o( "table.cut_row_desc" ),
                iconClass: a + "cut-row",
                click() {
                  u.a.tinymce.execCommand( "mceTableCutRow", !1, "" ), t.plugins.customtoolbar.enableToolbarButton( "aui-iconfont-table-paste-row" )
                }
              } ), new n.Button( {
                text: o( "table.copy_row_desc" ),
                iconClass: a + "copy-row",
                click() {
                  u.a.tinymce.execCommand( "mceTableCopyRow", !1, "" ), t.plugins.customtoolbar.enableToolbarButton( "aui-iconfont-table-paste-row" )
                }
              } ), new n.Button( {
                text: o( "table.paste_row_before_desc" ),
                iconClass: a + "paste-row",
                click() {
                  u.a.tinymce.execCommand( "mceTablePasteRowBefore", !1, "" )
                },
                disabled: !r.doesContain( "copied" )
              } ) ] ), new n.Group( [ new n.Button( {
                text: o( "table.col_before_desc" ),
                iconClass: a + "col-left",
                click() {
                  u.a.tinymce.execCommand( "mceTableInsertColBefore", !1, "" )
                }
              } ), new n.Button( {
                text: o( "table.col_after_desc" ),
                iconClass: a + "col-right",
                click() {
                  u.a.tinymce.execCommand( "mceTableInsertColAfter", !1, "" )
                }
              } ), new n.Button( {
                text: o( "table.delete_col_desc" ),
                iconClass: a + "col-remove",
                click() {
                  u.a.tinymce.execCommand( "mceTableDeleteCol", !1, "" )
                }
              } ) ] ), new n.Group( [ new n.Button( {
                text: o( "table.merge_cells_desc" ),
                iconClass: a + "merge",
                click() {
                  u.a.tinymce.execCommand( "mceTableMergeCells", !1, "" )
                }
              } ), new n.Button( {
                text: o( "table.split_cells_desc" ),
                iconClass: a + "split",
                click() {
                  u.a.tinymce.execCommand( "mceTableSplitCells", !1, "" )
                }
              } ) ] ), new n.Group( [ new n.Button( {
                text: o( "table.row_highlight" ),
                iconClass: a + "header-row",
                click() {
                  u.a.tinymce.execCommand( "confTableRowToggleHeading", !1 ), u.a.tinymce.execCommand( "mceTableUpdateNumberingCol", !1 )
                }
              } ), new n.Button( {
                text: o( "table.col_highlight" ),
                iconClass: a + "header-column",
                click() {
                  u.a.tinymce.execCommand( "confTableColumnToggleHeading", !1 )
                }
              } ) ] ), new n.SplitGroup( [ new n.Button( {
                text: o( "table.selection_highlight" ),
                iconClass: a + "bg",
                click() {
                  u.a.tinymce.execCommand( "confTableSelectionToggleHighlight", !1 )
                }
              } ) ], {
                id: "table-highlight-group",
                dropDownOptions: {
                  id: "table-highlight-colour",
                  dropDownContent: function () {
                    const e = Object( s.default )( "<ul/>" ).addClass( "table-highlight-picker" ),
                      t = [ Dn.R500, Dn.Y500, Dn.G500, Dn.T500, Dn.B500, Dn.P500, "#000000", Dn.R400, Dn.Y400, Dn.G400, Dn.T400, Dn.B400, Dn.P400, Dn.N800, Dn.R300, Dn.Y300, Dn.G300, Dn.T300, Dn.B300, Dn.P300, Dn.N500, Dn.R200, Dn.Y200, Dn.G200, Dn.T200, Dn.B200, Dn.P200, Dn.N100, Dn.R100, Dn.Y100, Dn.G100, Dn.T100, Dn.B100, Dn.P100, Dn.N50, Dn.R75, Dn.Y75, Dn.G75, Dn.T75, Dn.B75, Dn.P75, Dn.N20, Dn.R50, Dn.Y50, Dn.G50, Dn.T50, Dn.B50, Dn.P50, "clear" ];
                    return s.default.each( t, ( t, n ) => {
                      const o = Object( s.default )( "<li/>" ),
                        a = Object( s.default )( "<a href='#'></a>" );
                      "clear" === ( n = n.toLowerCase() ) ? a.addClass( "remove-highlight" ).attr( "data-remove-highlight", !0 ): a.addClass( "highlight-" + n ).attr( "data-highlight-colour", n ), o.append( a ), e.append( o )
                    } ), e
                  }(),
                  alignment: "left"
                },
                postProcess( e ) {
                  e.attr( "data-highlight-colour", "grey" ), e.addClass( "highlight-grey" );
                  const t = Object( s.default )( "<span>&nbsp;</span>" );
                  t.addClass( "highlight-indicator" ), e.find( ".icon.aui-iconfont-table-bg" ).after( t )
                }
              } ), new n.Group( [ new n.Button( {
                text: o( "table.del" ),
                iconClass: a + "remove",
                click() {
                  u.a.tinymce.execCommand( "mceTableDelete", !1, "" )
                }
              } ) ] ) ],
              Events: qt
            };
          let c;
          const l = e => {
              function t( e, t ) {
                return parseInt( e.attr( t ), 10 )
              }
              return e.filter( ( function () {
                const e = Object( s.default )( this );
                return t( e, "rowspan" ) > 1 || t( e, "colspan" ) > 1
              } ) ).length >= 1
            },
            d = function () {
              const t = e.buttons.button( {
                  id: "table-more-settings-trigger",
                  text: "",
                  iconType: "aui",
                  iconClass: "aui-icon-small aui-iconfont-configure",
                  iconText: o( "table.more.heading" ),
                  extraAttributes: {
                    type: "button",
                    "data-aui-trigger": "true",
                    "aria-controls": "table-more-settings",
                    "data-tooltip": o( "table.more.heading" )
                  }
                } ),
                n = e.inlineDialog2.inlineDialog2( {
                  alignment: "bottom left",
                  respondsTo: "toggle",
                  id: "table-more-settings"
                } ),
                a = e.buttons.buttons( {
                  content: t
                } );
              return function ( t ) {
                this.render = function () {
                  const r = Object( s.default )( a ),
                    i = Object( s.default )( n ),
                    c = i[ 0 ],
                    l = () => {
                      c.open = !1
                    };
                  return i.on( "aui-show", n => {
                    Object( s.default )( ".aui-inline-dialog-contents", n.target ).html( function ( t ) {
                      const n = Object( s.default )( "<div></div>" ),
                        a = Object( s.default )( `<h2>${o("table.more.heading")}</h2>` );
                      return n.append( a ), t.forEach( t => {
                        const o = Object( s.default )( e.form.field( {
                          type: "checkbox",
                          id: t.id,
                          labelContent: t.text,
                          isChecked: t.isChecked(),
                          isDisabled: t.isDisabled
                        } ) );
                        o.on( "change", t.onChange ), n.append( o )
                      } ), n
                    }( t ) )
                  } ), r.append( i ), Object( s.default )( u.a ).on( "resize", s.default.debounce( l, 100 ) ), Object( pt.a )( u.a.document, "enableContextToolbarRow.Toolbar disableContextToolbarRow.Toolbar", l ), r
                }
              }
            }();

          function f( e ) {
            const n = Object( s.default )( this ),
              o = Object( s.default )( "#table-highlight-group" ),
              a = o.attr( "data-highlight-colour" ),
              r = o.attr( "data-remove-highlight" );
            a && ( o.removeClass( "highlight-" + a ), o.removeAttr( "data-highlight-colour" ) ), o.removeClass( "remove-highlight" ), r && o.removeAttr( "data-remove-highlight" );
            const i = n.attr( "data-highlight-colour" );
            i && ( o.addClass( "highlight-" + i ), o.attr( "data-highlight-colour", i ) ), n.attr( "data-remove-highlight" ) && ( o.addClass( "remove-highlight" ), o.attr( "data-remove-highlight", !0 ) ), t.focus(), t.execCommand( "confTableSelectionToggleHighlight", !1, {
              alwaysHighlight: !0
            } ), e.preventDefault()
          }
          if ( t.on( "NodeChange", e => {
              const n = e.element,
                o = Object( s.default )( "body" ),
                a = !o.hasClass( "no-tools" ) || o.hasClass( "no-tools-toolbars-visible" );
              var r;
              c || null == n.parentNode || "BODY" === n.nodeName || ( c = !0, r = n, Object( s.default )( r ).closest( "table:not(.wysiwyg-macro)" ).length ? ( Object( pt.b )( u.a.document, "createContextToolbarRow.Toolbar", {
                buttons: i.Buttons,
                topToolbar: !0,
                animate: a
              } ), Object( pt.b )( u.a.document, "enableContextToolbarRow.Toolbar", {
                id: "default"
              } ), x( "confluence.table.resizable" ) && ( e => {
                s.default.fn.updateTableModeInToolbar && Object( s.default )( e ).closest( "table" ).updateTableModeInToolbar()
              } )( n ), ( e => {
                const n = Object( s.default )( e ).closest( "td,th" ),
                  o = Object( s.default )( ".mceSelected", n.closest( "table" ) );
                l( n.add( o ) ) ? t.plugins.customtoolbar.enableToolbarButton( "aui-iconfont-table-split" ) : t.plugins.customtoolbar.disableToolbarButton( "aui-iconfont-table-split" )
              } )( n ) ) : Object( pt.b )( u.a.document, "disableContextToolbarRow.Toolbar", {
                animate: a
              } ), c = !1 )
            } ), t.on( "Undo", () => {
              t.nodeChanged()
            } ), t.initialized ? Object( s.default )( u.a.document ).delegate( "#table-highlight-colour .aui-dropdown a", "click", f ) : t.on( "init", () => {
              Object( s.default )( u.a.document ).delegate( "#table-highlight-colour .aui-dropdown a", "click", f )
            } ), t.on( "Remove", () => {
              Object( s.default )( u.a.document ).undelegate( "#table-highlight-colour .aui-dropdown a", "click", f )
            } ), x( "confluence.table.resizable" ) && i.Buttons.splice( 0, 0, new n.Group( [ new n.DropDownButton( {
              id: "table-mode-picker",
              text: o( "table.auto_width" ),
              dropDownContent: function () {
                const e = Object( s.default )( "<ul/>" ).addClass( "table-mode-list" ),
                  t = [ {
                    name: o( "table.responsive" ),
                    mceCmd: "mceAutoWidth",
                    tooltip: o( "table.responsive_tooltip" )
                  }, {
                    name: o( "table.fixed_width" ),
                    mceCmd: "mceFixedWidth",
                    tooltip: o( "table.fixed_width_tooltip" )
                  } ];
                return s.default.each( t, ( t, n ) => {
                  const o = Object( s.default )( "<li/>" ).addClass( "dropdown-item" ).attr( "data-tooltip", n.tooltip ),
                    a = Object( s.default )( `<a href='#'>${n.name}</a>` ).addClass( "item-link" );
                  o.on( "click", () => {
                    u.a.tinymce.execCommand( n.mceCmd, !1, "" )
                  } ), e.append( o.append( a ) )
                } ), e
              }()
            } ) ] ) ), x( "confluence-table-enhancements.copy-cut-paste-cols.disabled" ) || i.Buttons.splice( 3, 0, new n.Group( [ new n.Button( {
              text: o( "table.col_cut_desc" ),
              iconClass: a + "cut-column",
              click() {
                u.a.tinymce.execCommand( "mceTableCutCol", !1, "" )
              }
            } ), new n.Button( {
              text: o( "table.col_copy_desc" ),
              iconClass: a + "copy-column",
              click() {
                u.a.tinymce.execCommand( "mceTableCopyCol", !1, "" )
              }
            } ), new n.Button( {
              text: o( "table.col_paste_desc" ),
              iconClass: a + "paste-column",
              click() {
                u.a.tinymce.execCommand( "mceTablePasteColBefore", !1, "" )
              }
            } ) ] ) ), !x( "confluence-table-enhancements.auto-row.disabled" ) ) {
            const e = [];
            x( "confluence-table-enhancements.auto-row.disabled" ) || e.push( {
              text: o( "table.numbering_column_desc" ),
              id: "insert-numbering-column",
              isChecked: () => Object( s.default )( t.selection.getNode() ).closest( "table" ).find( ".numberingColumn" ).length > 0,
              onChange: () => {
                u.a.tinymce.execCommand( "mceTableInsertNumberingCol", !1, "" )
              }
            } ), i.Buttons.push( new d( e ) )
          }
          return i
        }
      } );
      n( "3eVS" );
      var Fn = n( "xODI" ),
        zn = n.n( Fn );
      const Wn = [ "Grey", "Red", "Yellow", "Green", "Blue" ],
        Kn = Wn[ 0 ];
      let Vn, Un, qn, Gn;

      function Jn() {
        Xn();
        const e = u.a.Confluence.MacroParameterSerializer.deserialize( Object( s.default )( Un ).attr( "data-macro-parameters" ) );
        let t = !1,
          n = !1;
        return e && qn && ( t = e.title !== qn.title, n = e.colour !== qn.colour ), t || n
      }

      function Xn() {
        if ( Gn ) {
          const e = Yn( qn ) == Gn.val(),
            t = "" === Gn.val();
          e || t ? delete qn.title : qn.title = Gn.val()
        }
      }

      function Qn() {
        if ( Vn && Vn.state && "pending" === Vn.state() ) return void 0;
        Xn();
        const e = {
          contentId: u.a.Confluence.Editor.getContentId(),
          macro: {
            name: "status",
            params: qn,
            defaultParameterValue: "",
            body: ""
          }
        };
        Vn = u.a.tinymce.confluence.MacroUtils.insertMacro( e, Un ), Vn.done( ( e, t ) => {
          var n;
          Un = e, n = Un, u.a.tinymce.activeEditor.selection.select( n ), W.storeBookmark(), u.a.tinymce.activeEditor.selection.collapse()
        } ).fail( e => {
          0
        } )
      }

      function Yn( e ) {
        return e.colour || e.color || Kn
      }

      function Zn( e ) {
        const t = Object( s.default )( "<input/>" );
        return t.attr( "class", "status-macro-title first last editable" ), t.keyup( e => 13 !== e.keyCode || ( u.a.AJS.Confluence.PropertyPanel.destroy(), !1 ) ), t.keydown( e => 27 !== e.keyCode || ( Gn = null, !0 ) ), t
      }

      function eo( e ) {
        Gn = Zn(), Gn.val( e.find( "span.panel-button-text" ).text() ), e.replaceWith( Gn ), Gn.select().focus()
      }
      const to = e => {
          const t = ( e.attr( "data-macro-parameters" ) || "" ).split( "|" ),
            n = {};
          return t && s.default.each( t, ( e, t ) => {
            const o = t.split( "=", 2 );
            o.length > 0 && ( n[ o[ 0 ] ] = o.length > 1 ? o[ 1 ] : "" )
          } ), n
        },
        no = e => e.attr( "data-macro-name" ),
        oo = () => ( {
          "calendar-view-month": "month",
          "calendar-view-week": "week",
          "calendar-view-list": "list",
          "calendar-view-upcoming": "upcoming",
          "calendar-view-timeline": "timeline"
        } ),
        ao = function () {
          s.default.each( oo(), ( e, t ) => {
            u.a.AJS.Confluence.PropertyPanel.Macro.registerButtonHandler( e, ( e, n ) => {
              const o = Object( s.default )( n );
              u.a.AJS.Rte.getEditor().selection.select( o[ 0 ] ), u.a.AJS.Rte.BookmarkManager.storeBookmark(), u.a.tinymce.confluence.MacroUtils.insertMacro( {
                contentId: u.a.Confluence.Editor.getContentId(),
                macro: {
                  name: no( o ),
                  params: s.default.extend( to( o ), {
                    defaultView: t
                  } ),
                  defaultParameterValue: "",
                  body: ""
                }
              } )
            } )
          } ), u.a.AJS.Confluence.PropertyPanel.Macro.registerButtonHandler( "add-subcalendar", ( e, t ) => {
            const n = Object( s.default )( t );
            u.a.Confluence.TeamCalendars.Dialogs.getAddDialogForMacro( {
              name: no( n ),
              params: to( n ),
              defaultParameterValue: "",
              body: ""
            } )
          } ), Object( a.a )( "created.property-panel", ( e, t ) => {
            let n = to( Object( s.default )( t.anchor ) ).defaultView || "month";
            "upcoming" === n && ( n = "list" ), Object( s.default )( ".macro-property-panel-calendar-view-" + n, t.panel ).addClass( "selected" )
          } )
        };
      var ro = () => {
          Object( a.a )( "init.rte", ao )
        },
        io = n( "OGf2" ),
        co = n.n( io );

      function lo() {
        return !1
      }

      function so() {
        return !0
      }
      let uo = 0;
      const fo = ( new Date ).getTime();

      function mo( e ) {
        return ( e = "" + ( e || "" ) ).replace( /\./g, "-" )
      }

      function po( e, t ) {
        if ( u.a.AJS.EventQueue && t && t.attributes.id ) {
          const n = {},
            o = mo( t.attributes.id );
          n.name = `helptips.${o}.${e}`, n.properties = {}, u.a.AJS.EventQueue.push( n )
        }
      }
      const go = {
          dismissedTipIds: [],
          loaded: s.default.Deferred(),
          url: () => b.a + "/rest/calendar-services/1.0/tips",
          sync( e, t ) {
            return e || ( e = "get" ), t || ( t = null ), s.default.ajax( this.url(), {
              type: e,
              context: this,
              dataType: "json",
              contentType: "application/json",
              data: t && JSON.stringify( t ),
              processData: !1
            } ).promise()
          },
          fetch() {
            if ( !u.a.AJS.Meta.get( "atlassian-account-id" ) ) return;
            const e = this.sync();
            return e.done( ( function ( e ) {
              s.default.merge( this.dismissedTipIds, e ), this.loaded.resolve()
            } ) ), e.promise()
          },
          show( e ) {
            this.loaded.done( e )
          },
          dismiss( e ) {
            const t = e.attributes.id;
            t ? ( this.dismissedTipIds.push( t ), this.sync( "post", {
              id: t
            } ) ) : e._dismissed = !0
          },
          undismiss( e ) {
            const t = e.attributes.id;
            t ? ( this.dismissedTipIds.splice( s.default.inArray( t, this.dismissedTipIds ), 1 ), this.sync( "delete", {
              id: t
            } ) ) : e._dismissed = !1
          },
          isDismissed( e ) {
            const t = e.attributes.id;
            return t ? s.default.inArray( t, this.dismissedTipIds ) >= 0 : e._dismissed
          }
        },
        ho = function ( e ) {
          this.attributes = s.default.extend( {}, e ), this.attributes.id || ( this.attributes.id = !1 ), this.attributes.body && ( this.attributes.bodyHtml = this.attributes.body, delete this.attributes.body ), this.cid = `c${fo}${uo++}`;
          const t = this.attributes.anchor;
          delete this.attributes.anchor, this.view = t ? new bo( this, t ) : new yo( this ), this.view.$el.addClass( "tc-aui-help-tip" )
        };
      s.default.extend( ho.prototype, {
        show() {
          const e = this;
          go.show( () => {
            e.isDismissed() || ( e.view.show(), po( "shown", e ) )
          } )
        },
        dismiss() {
          const e = mo( arguments[ 0 ] || "programmatically" );
          this.view.dismiss(), this.isDismissed() || ( go.dismiss( this ), po( "dismissed." + e, this ) )
        },
        isVisible() {
          return this.view.$el.is( ":visible" )
        },
        isDismissed() {
          return go.isDismissed( this )
        }
      } );
      let bo = function ( e, t ) {
        this.initialize( e, t )
      };
      s.default.extend( bo.prototype, {
        initialize( e, t ) {
          const n = this,
            o = Object( s.default )( "#rte" ).height() - t.offset().top < 200,
            a = Object( s.default )( u.a.AJS.Rte.getEditor().getDoc() ).scrollTop();
          this.model = e, this.beforeHide = lo, this.closeButton = Object( s.default )( `\n    <button class="tc-helptip-close aui-button aui-style"><span>${(e=>u.a.tinymce.activeEditor.translate(e))("com.atlassian.confluence.extra.team-calendars.calendar.helptip.close")}</span></button>\n` ), this.closeButton.click( t => {
            e.dismiss( "close-button" ), t.preventDefault()
          } ), this.popup = u.a.AJS.InlineDialog( t, e.cid, ( t, o, a ) => {
            t.html( ( ( e, t ) => {
              let n = "";
              return e.title && ( n += `<h4 class="tc-helptip-title">${e.title}</h4>` ), n += `<div class="tc-helptip-body">${e.bodyHtml}</div>`, e.url && ( n += `<a class="tc-helptip-link" href="${e.url}" target="_blank">${t("calendar3.helptip.learn.more")}</a>` ), n
            } )( e.attributes, e => u.a.tinymce.activeEditor.translate( e ) ) ), t.append( n.closeButton ), t.unbind( "mouseover mouseout" ), t.find( ".tc-helptip-link" ).click( () => {
              po( "learn-more.clicked", e )
            } ), a()
          }, {
            container: "#content",
            noBind: !0,
            onTop: o,
            preHideCallback: () => n.beforeHide(),
            calculatePositions( e, n, r, i ) {
              const c = u.a.AJS.InlineDialog.opts.calculatePositions( e, n, r, i );
              return c.popupCss.top = o ? Object( s.default )( "#rte" ).offset().top + t.offset().top - e.height() - 9 : Object( s.default )( "#rte" ).offset().top + ( t.offset().top - a ) + t.height() + 9, c.popupCss.left = t.offset().left, c.displayAbove = o, c
            }
          } ), this._popupHide = this.popup.hide, this.popup.hide = lo, this.$el = Object( s.default )( this.popup[ 0 ] ), Object( s.default )( document ).bind( "showLayer", ( t, n, o ) => {
            "inlineDialog" === n && o.id === e.cid && ( u.a.AJS.InlineDialog.current = null, Object( s.default )( document.body ).unbind( `click.${e.cid}.inline-dialog-check` ), o._validateClickToClose = lo, o.hide = lo )
          } )
        },
        show() {
          const e = this.popup,
            t = function ( t ) {
              e.has( t.target ).length || ( e.shadow.remove(), e.remove() )
            };
          e.show(), Object( s.default )( "#full-height-container" ).click( t ), u.a.AJS.Rte.getEditor().onClick.add( t )
        },
        dismiss() {
          this.beforeHide = so, this._popupHide()
        }
      } );
      let yo = function ( e ) {
        this.initialize( e )
      };
      s.default.extend( yo.prototype, {
        initialize() {
          this.$el = Object( s.default )( "<div></div>" )
        },
        show() {},
        dismiss() {}
      } );
      const Co = [ "wr!confluence.web.resources.colors:colors", "wr!com.atlassian.confluence.keyboardshortcuts:confluence-keyboard-shortcuts", "wr!com.atlassian.confluence.editor:editor-resources-conf-frontend", "wr!com.atlassian.confluence.plugins.confluence-browser-metrics:editor", ...[ "wr!confluence.web.resources:quicksearchdropdown", "wr!com.atlassian.confluence.editor:property-panel-image-link-macro-conf-frontend", "wr!confluence.web.resources:legacy-editor-global-AVOID-IF-POSSIBLE", "wr!confluence.web.resources:hint-manager", "wr!confluence.web.resources:raphael", "wr!com.atlassian.confluence.plugins.confluence-link-browser:link-object", "wr!confluence.web.resources:core", "wr!com.atlassian.confluence.plugins.confluence-page-layout:pagelayout-frontend", "wr!com.atlassian.confluence.plugins.confluence-link-browser:link-browser-conf-frontend", "wr!confluence.extra.jira:macro-browser-resources", "wr!confluence.extra.jira:dialogsJs-for-conf-frontend", "wr!confluence.extra.jira:jirachart-macro", ...$n, "wr!com.atlassian.confluence.plugins.confluence-inline-tasks:editor-autocomplete-date-conf-frontend", "wr!confluence.web.resources:breadcrumbs", "wr!com.atlassian.confluence.plugins.confluence-collaborative-editor-plugin:confluence-collaborative-editor-plugin-resources", "wr!com.atlassian.confluence.keyboardshortcuts:confluence-keyboard-shortcuts", "wr!com.atlassian.confluence.plugins.confluence-labels:labels-editor", "wr!com.atlassian.confluence.plugins.content-formatting-macros:content-formatting-macros-resources", "wr!confluence.web.resources:ajs", "wr!com.atlassian.auiplugin:aui-inline-dialog2", "wr!confluence.web.resources:legacy-editor-global-AVOID-IF-POSSIBLE", "wr!com.atlassian.confluence.plugins.drag-and-drop:drag-and-drop-for-editor-conf-frontend", "wr!com.atlassian.confluence.plugins.gadgets:macro-browser-for-gadgetsplugin", "wr!com.atlassian.confluence.plugins.confluence-hipchat-emoticons-plugin:hipchat-emoticons-conf-frontend", "wr!com.atlassian.confluence.plugins.confluence-invite-to-edit:edit-resources", "wr!confluence.macros.multimedia:macro-browser-smart-fields", "wr!com.atlassian.confluence.editor:property-panel-image-link-macro-conf-frontend", "wr!com.atlassian.confluence.editor:property-panel-image-link-macro-conf-frontend", "wr!com.atlassian.confluence.image.effects.ImageEffectsPlugin:propertiespanel", "wr!com.atlassian.confluence.plugins.confluence-roadmap-plugin:roadmap-editor-resources-conf-frontend", "wr!com.atlassian.confluence.plugins.confluence-view-file-macro:view-file-macro-editor-resources", "wr!confluence.macros.advanced:editor_includemacro-conf-frontend", "wr!confluence.macros.advanced:jiraroadmap-editor", "wr!confluence.macros.advanced:jiraroadmap-preview", "wr!confluence.macros.advanced:portfolioforjiraplan-editor", "wr!com.atlassian.confluence.plugins.confluence-request-access-plugin:confluence-request-access-plugin-resources", "wr!confluence.web.resources:deferred-dialog-loader", "wr!com.atlassian.confluence.plugins.confluence-create-content-plugin:editor-resources", "wr!com.atlassian.confluence.plugins.confluence-create-content-plugin:create-from-template-macro-browser-resources", "wr!com.atlassian.confluence.plugins.confluence-create-content-plugin:create-from-template-resources", "wr!com.atlassian.confluence.plugins.confluence-inline-tasks:inline-tasks-macro-browser", "wrc!com.atlassian.confluence.extra.team-calendars:amd", "wrc!com.atlassian.confluence.extra.team-calendars:user-timezone-setup", "wrc!com.atlassian.confluence.extra.team-calendars:calendar-init-editor", "wrc!com.atlassian.confluence.extra.team-calendars:macro-browser-web-resources", "wr!confluence.extra.jira:text-placeholders-jira" ] ],
        wo = [ function () {
          u.a.tinymce.create( "tinymce.plugins.ConfList", {
            init: e => {
              e.editorCommands.addCommands( {
                outdent() {
                  const t = e.selection,
                    n = e.dom;

                  function o( t ) {
                    return ( t = n.getParent( t, n.isBlock ) ) && parseInt( e.dom.getStyle( t, "margin-left" ) || 0, 10 ) + parseInt( e.dom.getStyle( t, "padding-left" ) || 0, 10 ) > 0
                  }
                  return o( t.getStart() ) || o( t.getEnd() ) || e.queryCommandState( "InsertOrderedList" ) || e.queryCommandState( "InsertUnorderedList" ) || e.queryCommandState( "InsertInlineTaskList" )
                }
              }, "state" )
            }
          } ), u.a.tinymce.PluginManager.add( "conflist", u.a.tinymce.plugins.ConfList )
        }, function () {
          u.a.tinymce.PluginManager.add( "tasklist", ( function ( e ) {
            const t = () => {
              const t = V( e );
              t && ( t => {
                const n = e.dom.getParent( t.parentElement, "UL" );
                return t && "UL" === t.tagName && n && n.classList.contains( "inline-task-list" ) && t != n
              } )( t ) && ( e => [ ...e.childNodes ].every( e => e.hasAttribute( "data-inline-task-id" ) ) )( t ) && e.undoManager.ignore( () => {
                t.classList.add( "inline-task-list" )
              } )
            };

            function n( t, n ) {
              if ( ! function () {
                  const e = u.a.AJS.Meta.get( "use-inline-tasks" );
                  return "true" === e || !0 === e
                }() && "page" !== p.a.get( "content-type" ) && "blogpost" !== p.a.get( "content-type" ) ) return;
              const o = n.handlerManager,
                a = n.createHandler;
              o.registerHandler( "]".charCodeAt( 0 ), a( K, () => {
                e.execCommand( "InsertInlineTaskList" )
              }, !0 ) )
            }

            function o() {
              e.addQueryStateHandler( "InsertInlineTaskList", () => U( V( e ) ) ), e.addQueryStateHandler( "InsertUnorderedList", () => q( V( e ) ) )
            }
            e.addCommand( "InsertInlineTaskList", () => {
              "page" !== p.a.get( "content-type" ) && "blogpost" !== p.a.get( "content-type" ) || e.undoManager.transact( () => {
                q( V( e ) ) && ( e.execCommand( "InsertOrderedList" ), G( V( e ) ) ),
                  function ( e ) {
                    const t = e.dom.uniqueId();
                    e.execCommand( "InsertUnorderedList", !1, {
                      "list-attributes": {
                        "data-task-list-id": t,
                        class: "inline-task-list"
                      },
                      "list-item-attributes": {
                        "data-inline-task-id": ""
                      }
                    } ), e.dom.select( `[data-task-list-id="${t}"]` ).forEach( t => {
                      const n = t.querySelectorAll( "li" )[ 0 ];
                      n && e.dom.isEmpty( t ) && ( n.innerHTML = `<span class='placeholder-inline-tasks'>${e.translate("tinymce.confluence.placeholder.inline.tasks")}</span>`, e.selection.select( n.firstChild, !0 ) ), t.removeAttribute( "data-task-list-id" )
                    } )
                  }( e )
              } )
            } ), e.on( "BeforeExecCommand", t => {
              "InsertUnorderedList" === t.command && U( V( e ) ) && !t.value ? e.undoManager.ignore( () => {
                e.execCommand( "InsertOrderedList" ), G( V( e ) )
              } ) : "InsertOrderedList" !== t.command || t.value || e.undoManager.ignore( () => {
                G( V( e ) )
              } )
            } ), e.on( "execCommand", e => {
              "Indent" === e.command && t()
            } ), e.on( "Click", ( function ( t ) {
              const n = t.target;
              if ( "LI" !== n.tagName ) return;
              const o = e.dom.getParent( n, "ul,ol" );
              "UL" === o.tagName && e.dom.hasClass( o, "inline-task-list" ) && function ( t, n ) {
                let o, a;
                if ( u.a.tinymce.Env.gecko ) {
                  const r = n.getBoundingClientRect();
                  o = t.pageX - ( r.left + u.a.tinymce.DOM.getViewPort( e.getWin() ).x ), a = t.pageY - ( r.top + u.a.tinymce.DOM.getViewPort( e.getWin() ).y )
                } else o = t.offsetX, a = t.offsetY;
                return o >= 3 && o <= 14 && a >= 3 && a <= 14
              }( t, n ) && ( e.dom.hasClass( n, "checked" ) ? e.dom.removeClass( n, "checked" ) : e.dom.addClass( n, "checked" ) )
            } ) ), e.on( "KeyUp", ( function ( t ) {
              if ( t.keyCode === u.a.tinymce.util.VK.ENTER && !t.shiftKey ) {
                const t = function () {
                  const t = e.selection.getStart();
                  return t && t.tagName && "LI" === t.tagName.toUpperCase() ? t : e.dom.getParent( t, "li" )
                }();
                t && ( e.dom.removeClass( t, "checked" ), e.dom.hasClass( t.parentNode, "inline-task-list" ) ? t.setAttribute( "data-inline-task-id", "" ) : t.removeAttribute( "data-inline-task-id" ) )
              }
            } ) ), e.on( "KeyDown", e => {
              e.shiftKey || e.keyCode !== u.a.tinymce.util.VK.TAB || u.a.tinymce.util.VK.metaKeyPressed( e ) || t()
            } ), Object( a.a )( "confluence.editor.registerHandlers", n ), Object( a.a )( "rte-ready", o ), e.on( "Remove", () => {
              Object( a.c )( "confluence.editor.registerHandlers", n ), Object( a.c )( "rte-ready", o )
            } )
          } ) )
        }, () => {
          Object( a.a )( "init.rte", ze )
        }, function () {
          u.a.tinymce.create( "tinymce.plugins.DeleteCommandPlugin", {
            init( e ) {
              e.addCommand( "mceDelete", ( t, n ) => {
                ( function () {
                  if ( u.a.tinymce.Env.webkit ) {
                    const t = e.selection.getRng( 1 );
                    if ( t.collapsed ) return !1;
                    const n = Object( s.default )( t.startContainer ).closest( ".wysiwyg-macro-body", e.getBody() )[ 0 ];
                    if ( n && P.isRangeAtStartOf( n, t ) && P.isRangeAtEndOf( n, t ) ) {
                      const t = Object( s.default )( n.firstChild ).is( "pre" ) ? "pre" : "p",
                        o = Object( s.default )( `<${t}><br data-mce-bogus='1'></${t}>` )[ 0 ];
                      return Object( s.default )( n ).html( o ), e.selection.select( o, 1 ), !0
                    }
                  }
                  return !1
                } )() || e.getDoc().execCommand( "Delete", t, n )
              } )
            },
            getInfo: () => ( {
              longname: "Delete Command Plugin",
              author: "Atlassian",
              authorurl: "http://www.atlassian.com",
              version: `${u.a.tinymce.majorVersion}.${u.a.tinymce.minorVersion}`
            } )
          } ), u.a.tinymce.PluginManager.add( "deletecommand", u.a.tinymce.plugins.DeleteCommandPlugin )
        }, function () {}, function () {
          const e = ( e => {
            const t = new u.a.tinymce.util.Dispatcher,
              n = u.a.tinymce.Env.ie;
            return {
              AUIWindowManager: {
                init: e => {
                  e.on( "init", () => {
                    e.windowManager = new u.a.tinymce.AUIWindowManager( e )
                  } )
                },
                getInfo: () => ( {
                  longname: "AUIWindowManager",
                  author: "Atlassian",
                  authorurl: "http://www.atlassian.com",
                  version: `${u.a.tinymce.majorVersion}.${u.a.tinymce.minorVersion}`
                } )
              },
              WindowManager: {
                AUIWindowManager: function ( e ) {
                  const n = this;
                  n.eventDispatcher = t, n.editor = e, n.params = {}, n.features = {}, n.modalDialogsStack = [], n.dialogs = {}, n.count = 0
                },
                open( e, t ) {
                  const o = this;
                  e = e || {}, o.initialiseSettings( e ), t = t || {}, ( t = this.setDefaultParameters( t ) ).mce_width = e.width, t.mce_height = e.height, t.mce_auto_focus = e.auto_focus, n && ( e.center = !0, e.help = !1, e.dialogWidth = e.width + "px", e.dialogHeight = e.height + "px" ), o.features = e, o.params = t, o.eventDispatcher.dispatch( "open", {
                    t: o,
                    settings: e,
                    params: t
                  } );
                  let a = e.height;
                  e.name && ( a += 56 ), ( t.cancelLink || t.buttons ) && ( a += 51 ), a += 40, e.popup && ( a += 8 );
                  const r = e.id || u.a.tinymce.DOM.uniqueId(),
                    i = ( new Wt ).component( {
                      width: e.width,
                      height: a,
                      id: r,
                      onCancel: () => {
                        i.hide().remove()
                      }
                    } );
                  e.name && i.addHeader( this.editor.translate( "tinymce." + e.name ) ), this.createDialogButtons( i, t, r ), e.file = e.file || e.url, e.file && ( e.file = e.file ), this.createDialogContent( i, e, t, r ), t.helpLink && this.createHelpLink( i, t.helpLink, t.helpName, r ), t.hintText && this.createHintText( i, t.hintText, r );
                  const c = {
                    id: r,
                    settings: e,
                    params: t,
                    dialog: i
                  };
                  return this.modalDialogsStack.push( c ), this.dialogs[ r ] = c, this.count++, Object( f.b )().BookmarkManager.storeBookmark(), i.show(), null != i.takeFocus && i.takeFocus(), n && ( Object( s.default )( "#" + r ).css( "overflow", "hidden" ), Object( s.default )( `#${r}.${t.cssClass}` ).css( "overflow", "hidden" ) ), r
                },
                initialiseSettings: e => {
                  e.width = parseInt( e.width || 400, 10 ), e.height = parseInt( e.height || 250, 10 ), e.resizable = !1, null == e.popup && ( e.popup = !0 ), e.popup && null != e.content && ( e.popup = !1 ), e.scrollbars ? e.scrollbars = "yes" : e.scrollbars = "no"
                },
                createDialogButtons( e, t, n ) {
                  if ( t.buttons )
                    for ( let o = 0; o < t.buttons.length; o++ ) {
                      const n = t.buttons[ o ];
                      e.addButton( this.editor.translate( "tinymce." + n.label ), n.action, n.customClass )
                    }
                  t.cancelLink && e.addCancel( this.editor.translate( "tinymce.auiwindowmanager.cancel" ), () => u.a.tinymce.activeEditor.windowManager.close( n ) )
                },
                createDialogContent( e, t, n, o ) {
                  const a = this.createContentId( o ),
                    r = "panel_" + a;
                  t.popup ? ( e.addPanel( r, Object( s.default )( `<iframe id="${a}" width="100%" height="${t.height}px" frameborder="0" name="auidialogiframe" src="${t.file}" scrolling="${t.scrollbars}"></iframe>` ), n.cssClass ), e.takeFocus = () => {
                    Object( s.default )( "#" + a ).focus()
                  } ) : ( null == t.content ? ( e.addPanel( r, Object( s.default )( `<div id="${a}"/>` ), n.cssClass ), Object( s.default )( "#" + a ).load( t.file ) ) : e.addPanel( r, Object( s.default )( `<div id="${a}">${t.content}</div>` ), n.cssClass ), e.takeFocus = () => {
                    const e = Object( s.default )( `#${a}:input` );
                    if ( e.length ) Object( s.default )( e[ 0 ] ).focus();
                    else {
                      const e = Object( s.default )( `#${a} .button-panel button` );
                      e.length && Object( s.default )( e[ 0 ] ).focus()
                    }
                  } ), e.gotoPanel( 0, 0 )
                },
                createHintText: ( e, t, n ) => {
                  const o = Object( s.default )( "<div></div>" ).addClass( "dialog-tip" );
                  o.text( u.a.tinymce.activeEditor.translate( "tinymce." + t ) ), Object( s.default )( `#${n} .dialog-button-panel` ).append( o )
                },
                createHelpLink: ( e, t, n, o ) => {
                  const a = Object( s.default )( "<div></div>" ).addClass( "dialog-help-link" );
                  a.load( b.a + "/plugins/tinymce/helplink.action", {
                    linkUrlKey: t,
                    linkNameKey: n || ""
                  } ), Object( s.default )( `#${o} .dialog-components .dialog-title` ).prepend( a )
                },
                close( e, t ) {
                  let n, o;
                  return "string" == typeof e ? n = e : t ? n = t : ( o = this.modalDialogsStack.pop(), o && ( n = o.id ) ), this.dialogs[ n ] && ( this.count--, o = this.dialogs[ n ], o.dialog.remove(), this.dialogs[ n ] = null, u.a.tinymce.activeEditor.focus(), Object( f.b )().BookmarkManager.restoreBookmark() ), !1
                },
                alert( e, t, n ) {
                  const o = {
                    content: `<p>${e}</p>`,
                    width: 500,
                    height: 160,
                    popup: !1
                  };
                  let a;
                  const r = {
                    buttons: [ {
                      label: "auiwindowmanager.ok",
                      action: function () {
                        u.a.tinymce.activeEditor.windowManager.toggleOtherDialogs( a, !0 ), u.a.tinymce.activeEditor.windowManager.close( a ), t && t.call( n || this )
                      }
                    } ],
                    cancelLink: !1,
                    cssClass: "tinymce-auidialog-alert"
                  };
                  a = this.open( o, r ), this.toggleOtherDialogs( a, !1 )
                },
                createInstance: ( e, t, n, o, a, r ) => new( u.a.tinymce.resolve( e ) )( t, n, o, a, r ),
                toggleOtherDialogs( e, t ) {
                  for ( let n = 0; n < this.modalDialogsStack.length; n++ ) {
                    const o = this.modalDialogsStack[ n ];
                    o.id != e && Object( s.default )( o.id + " .dialog-button-panel" ).toggle( t )
                  }
                },
                confirm( e, t, n, o ) {
                  o = o || u.a, t.call( n || this, o.confirm( this._decode( this.editor.translate( "tinymce." + e ) ) ) )
                },
                setBusy( t, n ) {
                  const o = this.dialogs[ t ],
                    a = "#" + this.createBusyContentId( t ),
                    r = "#" + this.createContentId( t ),
                    i = Object( s.default )( r ),
                    c = Object( s.default )( a );
                  if ( o )
                    if ( n ) {
                      const n = Object( s.default )( r );
                      n.hide();
                      const o = n.parent();
                      let i = Object( s.default )( a, o );
                      i.length || ( o.append( Object( s.default )( `<div id="${a}" class="spinner"></div>` ) ), i = Object( s.default )( a, o ), e.spinner( i[ 0 ], 50, "#666" ) ), Object( s.default )( ".button-panel button", Object( s.default )( "#" + t ) ).each( ( e, t ) => {
                        Object( s.default )( t ).prop( "disabled", !0 )
                      } ), Object( s.default )( i[ 0 ] ).show()
                    } else c.length && c.hide(), Object( s.default )( ".button-panel button", Object( s.default )( "#" + t ) ).each( ( e, t ) => {
                      Object( s.default )( t ).prop( "disabled", !1 )
                    } ), i.show()
                },
                logMCESelection: e => {
                  u.a.tinymce.activeEditor.selection
                },
                setDefaultParameters: e => ( e.inline = !1, e.cssClass || ( e.cssClass = "tinymce-auidialog" ), 0 != e.cancelLink && ( e.cancelLink = !0 ), e ),
                createContentId: e => "content_" + e,
                createBusyContentId: e => "content_busy_" + e,
                resizeBy: () => {}
              }
            }
          } )( u.a.Raphael );
          u.a.tinymce.create( "tinymce.plugins.AUIWindowManager", e.AUIWindowManager ), u.a.tinymce.create( "tinymce.AUIWindowManager:tinymce.WindowManager", e.WindowManager ), u.a.tinymce.PluginManager.add( "auiwindowmanager", u.a.tinymce.plugins.AUIWindowManager )
        }, function () {
          ! function () {
            const e = g();
            u.a.Confluence.PropertyPanel.TextPlaceholder = e, Object( a.a )( "init.rte", () => {
              "template" === p.a.get( "content-type" ) && Object( a.b )( "add-handler.property-panel", e )
            } )
          }(), u.a.tinymce.create( "tinymce.plugins.TextPlaceholderPlugin", h() ), u.a.tinymce.PluginManager.add( "textplaceholders", u.a.tinymce.plugins.TextPlaceholderPlugin )
        }, function () {
          u.a.tinymce.create( "tinymce.plugins.EmotionsPlugin", {
            init( e, t ) {
              e.addCommand( "mceEmotion", () => {
                e.windowManager.open( {
                  file: u.a.tinymce.settings.editor_plugin_action_base_path + "/emotions.action",
                  width: 190 + parseInt( e.getLang( "emotions.delta_width", 0 ) ),
                  height: 125 + parseInt( e.getLang( "emotions.delta_height", 0 ) ),
                  inline: 1,
                  id: "insert-emoticon-dialog",
                  name: "emotions_dlg.title"
                }, {
                  plugin_url: t
                } )
              } ), e.addButton( "emotions", {
                title: "emotions.emotions_desc",
                cmd: "mceEmotion"
              } ), e.on( "Click", t => {
                const n = t.target;
                let o;
                if ( "IMG" === n.nodeName && n.classList.contains( "emoticon" ) ) return o = e.selection.getRng( !0 ), ( t.offsetX || t.layerX - n.x ) < n.width / 2 ? ( o.setStartBefore( n ), o.setEndBefore( n ) ) : ( o.setStartAfter( n ), o.setEndAfter( n ) ), e.selection.setRng( o ), e.selection.collapse(), u.a.tinymce.dom.Event.cancel( t )
              } )
            },
            getInfo: () => ( {
              longname: "Emotions",
              author: "Moxiecode Systems AB",
              authorurl: "http://tinymce.moxiecode.com",
              infourl: "http://wiki.moxiecode.com/index.php/TinyMCE:Plugins/emotions",
              version: `${u.a.tinymce.majorVersion}.${u.a.tinymce.minorVersion}`
            } )
          } ), u.a.tinymce.PluginManager.add( "emotions", u.a.tinymce.plugins.EmotionsPlugin )
        }, function () {
          u.a.tinymce.create( "tinymce.plugins.ConfluencePlugin", {
            init( e ) {
              e.addCommand( "mceConfUnlink", ( t, n ) => {
                const o = e.selection;
                let a = n || o.getNode(),
                  r = Object( s.default )( a );
                if ( "A" !== a.nodeName ) {
                  const e = r.closest( "a" );
                  if ( !e.length ) return;
                  a = e[ 0 ], r = e
                }
                let i = r.attr( "href" );
                if ( i || ( i = "#", r.attr( "href", i ) ), !r.attr( "data-linked-resource-id" ) && Confluence.Link.isExternalLink( i ) && r.text() == function ( e ) {
                    const t = /(.*)[\/]$/.exec( e );
                    return null != t ? t[ 1 ] : e
                  }( i ) ) {
                  const t = e.dom.create( "span", {
                    class: "nolink"
                  }, i );
                  e.dom.replace( t, a, !1 )
                } else o.select( a ), r.removeClass( "createlink unresolved" ), e.execCommand( "UnLink" )
              } ), e.addButton( "confimage", {
                title: "confluence.confimage_desc",
                cmd: "mceConfimage"
              } ), e.addButton( "conf_macro_browser", {
                title: "confluence.conf_macro_browser_desc",
                cmd: "mceConfMacroBrowser"
              } )
            },
            getInfo: () => ( {
              longname: "Confluence TinyMCE Plugin",
              author: "Atlassian",
              authorurl: "http://www.atlassian.com",
              version: `${u.a.tinymce.majorVersion}.${u.a.tinymce.minorVersion}`
            } )
          } ), u.a.tinymce.PluginManager.add( "confluence", u.a.tinymce.plugins.ConfluencePlugin )
        }, function () {
          u.a.tinymce.create( "tinymce.plugins.MacroPlaceHolderPlugin", ( () => {
            const e = u.a.tinymce.util.VK;
            return {
              init( t ) {
                const n = this;

                function o( e ) {
                  t.on( "KeyDown", e ), u.a.tinymce.isGecko && ( t.on( "KeyPress", e ), t.on( "KeyUp", e ) )
                }

                function a( e, t ) {
                  return e && 1 === e.childNodes.length && Object( s.default )( e ).is( t ) && Object( s.default )( e.firstChild ).is( "br" )
                }

                function r( e ) {
                  if ( !e.collapsed ) return !1;
                  let t = 3 === e.startContainer.nodeType ? e.startContainer.parentNode : e.startContainer;
                  if ( !t || !t.parentNode ) return !1;
                  for ( ; t && !Object( s.default )( t ).is( ".wysiwyg-macro-body" ); ) {
                    if ( t.previousSibling || t.nextSibling ) return !1;
                    t = t.parentNode
                  }
                  return !0
                }
                t.on( "Init", () => {
                    t.on( "SetContent", e => {
                      e.selection && u.a.tinymce.each( t.dom.select( "p > .wysiwyg-macro" ), e => {
                        const n = t.dom.getParent( e.parentNode, "p" );
                        try {
                          t.dom.split( n, e )
                        } catch ( o ) {}
                      } )
                    } )
                  } ), t.on( "SetContent", () => {
                    u.a.tinymce.each( t.dom.select( '.wysiwyg-macro[data-macro-body-type="PLAIN_TEXT"] .wysiwyg-macro-body' ), e => {
                      t.dom.select( "pre", e ).length || ( u.a.tinymce.isIE ? t.dom.setHTML( e, "<pre></pre>" ) : t.dom.setHTML( e, "<pre><br /></pre>" ) )
                    } )
                  } ), t.on( "KeyDown", n => {
                    const o = t.selection,
                      a = [ e.BACKSPACE, e.DELETE, e.ENTER, e.ESCAPE ];
                    if ( -1 != s.default.inArray( n.keyCode, a ) || function ( t ) {
                        let n = !1;
                        return 0 === t.charCode && ( n = -1 != s.default.inArray( t.keyCode, [ e.SHIFT, e.CTRL, e.ALT, e.META ] ) ), n
                      }( n ) || o.isCollapsed() ) return;
                    if ( n.ctrlKey || n.metaKey || !u.a.tinymce.isMac && n.altKey ) return;
                    const r = o.getNode();
                    if ( R.isMacroWithBody( r ) ) {
                      const e = Object( s.default )( ".wysiwyg-macro-body", r );
                      e.length > 0 && o.select( e[ 0 ], !0 )
                    }
                  } ), t.on( "DblClick", e => {
                    const t = Object( s.default )( e.target ),
                      n = t.closest( "[data-macro-name]" );
                    if ( n.length ) {
                      if ( n.attr( "data-macro-body-type" ) )
                        if ( u.a.tinymce.isIE ) {
                          if ( !t.hasClass( "wysiwyg-macro-body" ) && !t.hasClass( "wysiwyg-macro" ) ) return void 0
                        } else if ( t.closest( ".wysiwyg-macro-body" ).length ) return void 0;
                      R.editMacro( n ), u.a.AJS.Confluence.PropertyPanel && u.a.AJS.Confluence.PropertyPanel.current && u.a.AJS.Confluence.PropertyPanel.destroy()
                    }
                  } ), t.addCommand( "mceConfRemoveMacro", e => {
                    Object( s.default )( e ).remove(), u.a.tinymce.isGecko && t.execCommand( "mceRepaint", !1 )
                  } ), n._isCursorInMostNestedElement = r,
                  function () {
                    function e( e ) {
                      if ( !e.collapsed ) return !1;
                      const t = 3 === e.startContainer.nodeType ? e.startContainer.parentNode : e.startContainer;
                      return t.previousSibling && !t.nextSibling && a( t, "p, pre" )
                    }( u.a.tinymce.isWebKit || u.a.tinymce.isGecko ) && o( n => {
                      if ( 46 === n.keyCode && e( t.selection.getRng( !0 ) ) ) return u.a.tinymce.dom.Event.cancel( n )
                    } ), n._isCursorInLastParagraphOrPre = e
                  }(), u.a.tinymce.isWebKit && o( e => {
                    if ( 8 !== e.keyCode && 46 !== e.keyCode ) return !0;
                    const n = t.selection.getRng( !0 ),
                      o = 3 === n.startContainer.nodeType ? n.startContainer.parentNode : n.startContainer;
                    return !( function ( e ) {
                      if ( !e.collapsed ) return !1;
                      const t = 3 === e.startContainer.nodeType ? e.startContainer.parentNode : e.startContainer;
                      return r( e ) && 1 === t.childNodes.length && Object( s.default )( t.firstChild ).is( "br" )
                    }( n ) && ( 8 !== e.keyCode || !Object( s.default )( o ).is( "li" ) ) ) || u.a.tinymce.dom.Event.cancel( e )
                  } ),
                  function () {
                    function e( e ) {
                      if ( !e.collapsed ) return !1;
                      const t = 3 === e.startContainer.nodeType ? e.startContainer.parentNode : e.startContainer;
                      return 0 === e.startOffset && Object( s.default )( t ).is( ".wysiwyg-macro-body > ul > li" ) && 1 === t.childNodes.length && Object( s.default )( t.firstChild ).is( "br" )
                    }
                    u.a.tinymce.isWebKit && o( n => 8 !== n.keyCode || ( !e( t.selection.getRng( !0 ) ) || ( t.execCommand( "Outdent" ), u.a.tinymce.dom.Event.cancel( n ) ) ) ), n._isCursorInsideMacroPlacholderInsideListItemContainingSoloBr = e
                  }(),
                  function () {
                    function e( e ) {
                      const t = 3 === e.startContainer.nodeType ? e.startContainer.parentNode : e.startContainer,
                        n = Object( s.default )( t );
                      return 0 === e.startOffset && a( t, "p, pre" ) && n.parent().is( "td.wysiwyg-macro-body" ) && !t.previousSibling && t.nextSibling && a( t.nextSibling, "p, pre" )
                    }
                    u.a.tinymce.isWebKit && o( n => {
                      if ( 46 !== n.keyCode ) return !0;
                      const o = t.selection.getRng( !0 ),
                        a = 3 === o.startContainer.nodeType ? o.startContainer.parentNode : o.startContainer,
                        r = Object( s.default )( a );
                      if ( e( o ) ) {
                        const e = a.nextSibling;
                        return r.remove(), t.selection.select( e, !0 ), u.a.tinymce.dom.Event.cancel( n )
                      }
                    } ), n._isCursorInFirstParagraphWhenThereAreTwoEmptyParagraphs = e
                  }(),
                  function () {
                    function e( e ) {
                      const t = 3 === e.startContainer.nodeType ? e.startContainer.parentNode : e.startContainer,
                        n = Object( s.default )( t );
                      return 0 === e.startOffset && a( t, "p, pre" ) && n.parent().is( "td.wysiwyg-macro-body" ) && !t.nextSibling && t.previousSibling && !t.previousSibling.previousSibling && a( t.previousSibling, "p, pre" )
                    }
                    u.a.tinymce.isWebKit && o( n => {
                      if ( 8 !== n.keyCode ) return !0;
                      const o = t.selection.getRng( !0 ),
                        a = 3 === o.startContainer.nodeType ? o.startContainer.parentNode : o.startContainer,
                        r = Object( s.default )( a );
                      if ( e( o ) ) {
                        const e = a.previousSibling;
                        return r.remove(), t.selection.select( e, !0 ), u.a.tinymce.dom.Event.cancel( n )
                      }
                    } ), n._isCursorInSecondParagraphWhenThereAreTwoEmptyParagraphs = e
                  }(),
                  function () {
                    function e( e ) {
                      if ( !e.collapsed ) return !1;
                      const t = 3 === e.startContainer.nodeType ? e.startContainer.parentNode : e.startContainer,
                        n = Object( s.default )( t );
                      return !( !t || e.startOffset > 0 ) && ( w.normalize( t ), t && 0 === e.startOffset && a( t, "p, pre" ) && n.parent().is( "td.wysiwyg-macro-body" ) && !t.previousSibling && !t.nextSibling )
                    }( u.a.tinymce.isWebKit || u.a.tinymce.isGecko ) && o( n => 8 !== n.keyCode && 46 !== n.keyCode || ( e( t.selection.getRng( !0 ) ) ? u.a.tinymce.dom.Event.cancel( n ) : void 0 ) ), n._isCursorInSoloParagraphOrPreInsidePlaceholder = e
                  }(),
                  function () {
                    function e( e ) {
                      return e && e.parentNode && "BR" === e.nodeName && e === e.parentNode.lastChild
                    }

                    function a( t ) {
                      if ( !t.collapsed ) return !1;
                      const n = t.startContainer;
                      return n && 0 === t.startOffset && 3 === n.nodeType && r( t ) && 1 === n.nodeValue.length && !n.previousSibling && ( !n.nextSibling || e( n.nextSibling ) )
                    }

                    function i( t ) {
                      if ( !t.collapsed ) return !1;
                      const n = t.startContainer;
                      return n && 1 === t.startOffset && 3 === n.nodeType && r( t ) && 1 === n.nodeValue.length && !n.previousSibling && ( !n.nextSibling || e( n.nextSibling ) )
                    }

                    function c( e ) {
                      if ( !e.collapsed ) return !1;
                      const t = e.startContainer;
                      return t && 0 === e.startOffset && 1 === t.nodeType && 1 === t.childNodes.length && r( e ) && !t.previousSibling && !t.nextSibling
                    }

                    function l( e ) {
                      if ( !e.collapsed ) return !1;
                      const t = e.startContainer;
                      return t && 1 === e.startOffset && 1 === t.nodeType && 1 === t.childNodes.length && r( e ) && !t.previousSibling && !t.nextSibling
                    }( u.a.tinymce.isWebKit || u.a.tinymce.isGecko ) && o( e => {
                      if ( 8 !== e.keyCode && 46 !== e.keyCode ) return !0;
                      const n = t.selection.getRng( !0 ),
                        o = 3 === n.startContainer.nodeType ? n.startContainer.parentNode : n.startContainer;
                      return !Object( s.default )( o ).closest( ".wysiwyg-macro-body" ).size() || ( w.normalize( o ), !( 46 === e.keyCode && ( a( n ) || c( n ) ) || 8 === e.keyCode && ( i( n ) || l( n ) ) ) || ( o.lastChild && !Object( s.default )( o.lastChild ).is( "br" ) && Object( s.default )( o ).append( "<br/>" ), Object( s.default )( o.firstChild ).remove(), t.selection.select( o, 1 ), u.a.tinymce.dom.Event.cancel( e ) ) )
                    } ), n._isCursorBehindOnlyCharacterInNestedElement = a, n._isCursorAfterOnlyCharacterInNestedElement = i, n._isCursorBehindOnlyChildInNestedElement = c, n._isCursorAfterOnlyChildInNestedElement = l
                  }(),
                  function () {
                    function e( e ) {
                      if ( e.collapsed ) return !1;
                      return 0 === e.startOffset && a( e.startContainer, ( function ( e ) {
                        return !e.previousSibling
                      } ) ) && function ( e, t ) {
                        if ( !e ) return !1;
                        return 3 === e.nodeType ? t === e.nodeValue.length : 1 === e.nodeType && ( 1 === e.childNodes.length && Object( s.default )( e.firstChild ).is( "br" ) ? 0 === t : t === e.childNodes.length )
                      }( e.endContainer, e.endOffset ) && a( e.endContainer, ( function ( e ) {
                        return !e.nextSibling
                      } ) )
                    }

                    function a( e, t ) {
                      if ( !e ) return !1;
                      if ( Object( s.default )( e ).is( ".wysiwyg-macro-body" ) ) return !0;
                      do {
                        if ( !t( e ) ) return !1;
                        e = e.parentNode
                      } while ( e && !Object( s.default )( e ).is( ".wysiwyg-macro-body" ) );
                      return !0
                    }
                    u.a.tinymce.isWebKit && o( n => {
                      if ( 8 !== n.keyCode && 46 !== n.keyCode ) return !0;
                      const o = t.selection.getRng( !0 );
                      if ( e( o ) ) {
                        const e = Object( s.default )( o.startContainer ).closest( ".wysiwyg-macro-body" );
                        if ( e.length > 0 ) {
                          const o = Object( s.default )( e[ 0 ].firstChild ).is( "pre" );
                          let a;
                          return t.undoManager.add(), e.empty(), a = o ? Object( s.default )( "<pre><br/></pre>" ).appendTo( e ) : Object( s.default )( "<p><br/></p>" ).appendTo( e ), t.selection.select( a[ 0 ], !0 ), u.a.tinymce.dom.Event.cancel( n )
                        }
                      }
                      return !0
                    } ), n._isMacroBodySelected = e
                  }(),
                  function () {
                    function e( e ) {
                      if ( !e.collapsed ) return !1;
                      const t = 3 === e.startContainer.nodeType ? e.startContainer.parentNode : e.startContainer,
                        n = Object( s.default )( t );
                      return 0 === e.startOffset && a( t, "p" ) && n.next().is( "table" )
                    }
                    u.a.tinymce.isWebKit && o( n => {
                      if ( 46 === n.keyCode && e( t.selection.getRng( !0 ) ) ) return u.a.tinymce.dom.Event.cancel( n )
                    } ), n._isCursorInEmptyParagraphPrecedingPlaceholder = e
                  }(),
                  function () {
                    function a( e ) {
                      return e ? 3 === e.nodeType ? e : a( e.firstChild ) || a( e.nextSibling ) : null
                    }

                    function r( e ) {
                      return e && "PRE" !== e.nodeName && "TD" !== e.nodeName ? "BR" === e.nodeName ? e : r( e.previousSibling ) || r( e.parentNode ) : null
                    }

                    function i( e ) {
                      let t, n;
                      return Object( s.default )( e.commonAncestorContainer ).closest( ".wysiwyg-macro td" ).length > 0 && ( r( e.startContainer ) || ( t = a( function e( t ) {
                        return !t || Object( s.default )( t.parentNode ).is( ".wysiwyg-macro td" ) ? null : Object( s.default )( t.parentNode ).is( "p" ) ? t.parentNode : e( t.parentNode )
                      }( e.startContainer ) ) ) ), ( n = Object( s.default )( e.commonAncestorContainer ).closest( ".wysiwyg-macro td > pre" ) ).length > 0 && ( r( e.startContainer ) || ( t = a( n[ 0 ] ) ) ), t && ( e = e.cloneRange() ).setStart( t, 0 ), e
                    }
                    u.a.tinymce.isWebKit && u.a.tinymce.isMac && o( n => {
                      const o = t.selection.getRng();
                      if ( ( n.metaKey || n.ctrlKey ) && n.shiftKey && n.keyCode === e.LEFT ) {
                        const e = i( o );
                        if ( e !== o ) return t.selection.setRng( e ), u.a.tinymce.dom.Event.cancel( n )
                      }
                    } ), n._selectTillStart = i
                  }(), t.on( "KeyDown", e => {
                    if ( e.keyCode !== u.a.tinymce.util.VK.TAB ) return;
                    const n = t.selection.getRng( 1 ),
                      o = 3 === n.startContainer.nodeType ? n.startContainer.parentNode : n.startContainer;
                    if ( Object( s.default )( o ).is( ".wysiwyg-macro-body > pre" ) ) {
                      t.undoManager.beforeChange(), t.undoManager.add();
                      const o = t.getDoc().createTextNode( "\t" );
                      return n.insertNode( o ), t.selection.setCursorLocation( o, 1 ), t.undoManager.add(), u.a.tinymce.dom.Event.cancel( e )
                    }
                  } )
              },
              getInfo: () => ( {
                longname: "Macro Place Holder plugin",
                author: "Atlassian",
                authorurl: "http://www.atlassian.com",
                version: "1.0"
              } )
            }
          } )() ), u.a.tinymce.PluginManager.add( "macroplaceholder", u.a.tinymce.plugins.MacroPlaceHolderPlugin )
        }, function () {
          Object( pt.a )( u.a.document, "initContextToolbars.Toolbar", e => {
            Ln().initContextToolbars( e ),
              function ( e ) {
                const t = {},
                  n = {},
                  o = function ( e, n ) {
                    let o, a;
                    for ( a in t )
                      if ( t.hasOwnProperty( a ) && t[ a ].isEnabled )
                        for ( let r = 0, i = t[ a ].events.length; r < i; r++ ) o = t[ a ].events[ r ], o.type.toLowerCase().indexOf( n.type ) > -1 && ( o.shouldTrigger( e, n ) ? o.callback.apply( this, [ n.target ] ) : o.missed && o.missed() )
                  };
                return {
                  addEventsForComponent( a, r ) {
                    a in t || ( t[ a ] = {}, t[ a ].events = [], t[ a ].isEnabled = !0 );
                    for ( let i = 0, c = r.length; i < c; i++ ) !( r[ i ].type in n ) && ( n[ r[ i ].type ] = !0, e[ r[ i ].type ].add( o ) ), "function" != typeof r[ i ].shouldTrigger && function ( e ) {
                      r[ i ].shouldTrigger = function ( t, n ) {
                        return n.target.tagName.toLowerCase() == e
                      }
                    }( r[ i ].shouldTrigger ), t[ a ].events.push( r[ i ] )
                  },
                  disableEventsForComponent( e ) {
                    for ( let n = 0, o = t.length; n < o; n++ )
                      if ( e in t ) return t[ e ].isEnabled = !1, !0;
                    return !1
                  },
                  enableEventsForComponent( e ) {
                    for ( let n = 0, o = t.length; n < o; n++ )
                      if ( e in t ) return t[ e ].isEnabled = !0, !0;
                    return !1
                  }
                }
              }( u.a.tinymce ).addEventsForComponent( "TableToolbar", qt )
          } )
        }, function () {
          const e = Object( k.E )( k.a ) ? Zt : en;
          Vt(), u.a.AJS.Rte = Object( f.b )() || {}, u.a.AJS.Rte.TablePicker = Ut(), u.a.tinymce.create( "tinymce.plugins.customtoolbar", e() ), u.a.tinymce.PluginManager.add( "customtoolbar", u.a.tinymce.plugins.customtoolbar )
        }, function () {
          u.a.tinymce.create( "tinymce.plugins.InsertWikiMarkupPlugin", gn ), u.a.tinymce.PluginManager.add( "insertwikimarkup", u.a.tinymce.plugins.InsertWikiMarkupPlugin )
        }, () => {
          u.a.tinymce.create( "tinymce.plugins.PropertyPanel", H() ), u.a.tinymce.PluginManager.add( "propertypanel", u.a.tinymce.plugins.PropertyPanel )
        }, function () {}, function () {
          u.a.tinymce.create( "tinymce.plugins.ConfMonospacePlugin", {
            init: e => {
              e.addCommand( "confMonospace", () => {
                e.formatter.toggle( "monospace", void 0 )
              } ), u.a.tinymce.activeEditor.on( "Init", () => {
                const e = u.a.tinymce.activeEditor;
                e.formatter.register( {
                  monospace: {
                    inline: "code"
                  }
                } ), e.editorCommands.addCommands( {
                  confMonospace: () => e.formatter.match( "monospace" )
                }, "state" )
              } ), e.addButton( "monospace", {
                title: "monospace",
                cmd: "confMonospace"
              } )
            },
            getInfo: () => ( {
              longname: "Monospace Formatting",
              author: "Atlassian",
              authorurl: "http://www.atlassian.com",
              version: `${u.a.tinymce.majorVersion}.${u.a.tinymce.minorVersion}`
            } )
          } ), u.a.tinymce.PluginManager.add( "confmonospace", u.a.tinymce.plugins.ConfMonospacePlugin )
        }, function () {
          u.a.tinymce.create( "tinymce.plugins.KeyboardShortcutsPlugin", {
            init: e => {
              for ( let o = 1; o < 7; o++ ) e.addCommand( "FormatBlock-h" + o, _n( e, "h" + o ) );
              e.addCommand( "FormatBlock-p", _n( e, "p" ) ), e.addCommand( "FormatBlock-pre", _n( e, "pre" ) ), e.addCommand( "FormatBlock-blockquote", _n( e, "blockquote" ) ), e.addCommand( "mceConfShortcutDialog", u.a.Confluence.KeyboardShortcuts.openDialog ), e.addCommand( "preventDefaultSave", () => {} ), e.addCommand( "publish", Nn ), e.addCommand( "preview", Rn ), e.addCommand( "confDefaultTable", Bn ), e.addButton( "help", {
                title: "confluence.conf_shortcuts_help_desc",
                cmd: "mceConfShortcutDialog"
              } );
              const t = u.a.document.createElement( "meta" ),
                n = u.a.document.querySelector( "head" );
              t.setAttribute( "name", "ajs-use-keyboard-shortcuts" ), t.setAttribute( "content", "true" ), n.appendChild( t ), x( "editor.spa.uxenhancements" ) && Object( a.a )( "rte-ready", () => {
                Mn( e ), In( e, Sn )
              } )
            },
            getInfo: () => ( {
              longname: "Atlassian Editor Keyboard Shortcuts Plugin",
              author: "Atlassian",
              authorurl: "http://www.atlassian.com",
              version: `${u.a.tinymce.majorVersion}.${u.a.tinymce.minorVersion}`
            } )
          } ), u.a.tinymce.PluginManager.add( "keyboardshortcuts", u.a.tinymce.plugins.KeyboardShortcutsPlugin )
        }, function () {
          u.a.tinymce.create( "tinymce.plugins.ConfCharmapPlugin", {
            init: e => {
              e.addCommand( "confCharmap", () => {
                e.windowManager.open( {
                  id: "insert-char-dialog",
                  url: u.a.tinymce.settings.editor_plugin_action_base_path + "/charmap.action",
                  width: 600 + parseInt( e.getLang( "advanced.charmap_delta_width", 0 ) ),
                  height: 290 + parseInt( e.getLang( "advanced.charmap_delta_height", 0 ) ),
                  inline: !0,
                  name: "advanced.charmap_desc"
                } )
              } )
            },
            getInfo: () => ( {
              longname: "Confluence Charmap Plugin",
              author: "Atlassian",
              authorurl: "http://www.atlassian.com",
              version: `${u.a.tinymce.majorVersion}.${u.a.tinymce.minorVersion}`
            } )
          } ), u.a.tinymce.PluginManager.add( "confcharmap", u.a.tinymce.plugins.ConfCharmapPlugin )
        }, function () {
          let e = ".wysiwyg-macro,.placeholder,table";
          u.a.tinymce.create( "tinymce.plugins.CursorTargetPlugin", ( () => ( {
            cursorTarget: {
              addFixSelector: t => {
                e += "," + t
              }
            },
            cursorTargetPlugin: {
              init: t => {
                const n = s.default.ui.keyCode;

                function o( t, n ) {
                  Object( s.default )( e, t ).each( ( t, o ) => {
                    ! function ( t, n ) {
                      const o = Object( s.default )( t );

                      function a( e ) {
                        if ( 0 === e.length ) throw new Error( "no paragraph element specified" );
                        r() && e.addClass( "auto-cursor-target" );
                        const t = e[ 0 ];
                        return 0 === t.childNodes.length && ( t.innerHTML = "<br />" ), t
                      }

                      function i( e ) {
                        return !Object( s.default )( e ).is( "ol, ul, p, pre, table, blockquote, div, h1, h2, h3, h4, h5, h6" )
                      }

                      function l( e, t ) {
                        const n = Object( s.default )( "<p/>" );
                        if ( Object( s.default )( e.parentNode ).is( "li, td, th" ) )
                          for ( ; e[ t ] && i( e[ t ] ); ) n[ "previousSibling" == t ? "prepend" : "append" ]( e[ t ] );
                        return a( n )
                      }( !o.prev().length || o.prev( e ).length || Object( s.default )( t.parentNode ).is( "li, td, th" ) && i( t.previousSibling ) ) && o.before( l( t, "previousSibling" ) );
                      ( !o.next().length || o.next( ".synchrony-container" ).length || Object( s.default )( t.parentNode ).is( "li, td, th" ) && i( t.nextSibling ) ) && o.after( l( t, "nextSibling" ) );
                      r() && o.next().length && !o.next().next().length && c( o.next()[ 0 ] ) && o.next().addClass( "auto-cursor-target" );
                      n && function ( t ) {
                        function n( e ) {
                          ( "BR" === e[ 0 ].nodeName || c( e[ 0 ] ) ) && e.replaceWith( a( Object( s.default )( "<p/>" ) ) )
                        }
                        const o = t.prev();
                        o.length && function ( t ) {
                          let n = t.prev();
                          for ( ; n.length && !n.is( e ); ) {
                            const e = n[ 0 ];
                            if ( "BR" !== e.nodeName && "P" !== e.nodeName ) return !1;
                            n = n.prev()
                          }
                          return !0
                        }( o ) && n( o );
                        const r = t.next();
                        r.length && function ( t ) {
                          let n = t.next();
                          for ( ; n.length && !n.is( e ); ) {
                            const e = n[ 0 ];
                            if ( "BR" !== e.nodeName && "P" !== e.nodeName ) return !1;
                            n = n.next()
                          }
                          return !0
                        }( r ) && n( r )
                      }( o )
                    }( o, n )
                  } )
                }

                function r() {
                  return "page" === p.a.get( "content-type" ) || "blogpost" === p.a.get( "content-type" )
                }

                function i( e ) {
                  return Object( s.default )( "p", e ).each( ( e, t ) => {
                    c( t ) && l( t ) && Object( s.default )( t ).attr( "data-tag", "marked-for-deletion" )
                  } ), Object( s.default )( "p[data-tag=marked-for-deletion]", e ).remove(), e
                }

                function c( e ) {
                  return 1 === e.nodeType && 0 === e.childNodes.length || function ( e ) {
                    let t = 0,
                      n = 0;
                    for ( let o = 0, a = e.childNodes.length; o < a; o++ ) {
                      const a = e.childNodes[ o ];
                      if ( "BR" === a.nodeName ) {
                        if ( ++t > 1 ) return !1
                      } else if ( /^[\s|\u00A0]$/.test( a.nodeValue ) ) {
                        if ( ++n > 1 ) return !1
                      } else if ( "" !== a.nodeValue ) return !1
                    }
                    return !0
                  }( e )
                }

                function l( t ) {
                  if ( !t || 1 !== t.nodeType ) return !1;
                  const n = m( t, !1 ),
                    o = m( t, !0 ),
                    a = d( n ) || Object( s.default )( n ).is( e ),
                    r = d( o ) || Object( s.default )( o ).is( e ),
                    i = d( n ) && d( o );
                  return a && r && !i
                }

                function d( e ) {
                  return !e || e.className && /cell|header|footer/.test( e.className )
                }

                function m( e, t ) {
                  let n = Object( s.default )( e );
                  do {
                    const e = t ? n[ 0 ].nextSibling : n[ 0 ].previousSibling;
                    if ( e ) return e;
                    n = n.parent()
                  } while ( n.length > 0 && !n.is( ".cell, .mceContentBody, td, li" ) );
                  return null
                }

                function g( e ) {
                  const t = e.startContainer;
                  if ( 3 === t.nodeType ) {
                    return !( t.previousSibling && ( 3 === t.previousSibling.nodeType || Object( s.default )( t.previousSibling ).is( "br" ) ) ) && 0 === e.startOffset
                  }
                  return 1 === t.nodeType && 0 === e.startOffset
                }

                function h( e, t ) {
                  return t.startContainer == t.endContainer && 1 === t.startContainer.nodeType && function ( e, t ) {
                    let n = t.startOffset;
                    return e || n--, n >= 0 && n < t.startContainer.childNodes.length && "TABLE" === t.startContainer.childNodes[ n ].nodeName
                  }( e, t )
                }

                function b( e ) {
                  if ( !e.collapsed ) return !1;
                  const t = e.startContainer;
                  let n;
                  if ( 3 === t.nodeType ) return n = m( t, !0 ), e.startOffset == t.nodeValue.length && ( null == n || Object( s.default )( n ).is( "br" ) );
                  if ( 1 === t.nodeType ) {
                    if ( Object( s.default )( t ).is( "td, th" ) && 0 === e.startOffset && t.childNodes.length > 0 ) return Object( s.default )( t.childNodes[ 0 ] ).is( "br" ); {
                      const o = 0 === e.startOffset ? 0 : e.startOffset - 1;
                      return n = m( t.parentNode.childNodes[ o ], !0 ), null == n || Object( s.default )( n ).is( "br" )
                    }
                  }
                  return !1
                }

                function y( e ) {
                  return e && 1 === e.childNodes.length && Object( s.default )( e.childNodes[ 0 ] ).is( "br" )
                }

                function C( e, t ) {
                  return !( !u.a.tinymce.isWebKit || !h( !1, t ) ) || !( !u.a.tinymce.isGecko || !( b( t ) || l( e ) && 0 === t.startOffset && y( e ) ) )
                }

                function w( e, n ) {
                  return !( !u.a.tinymce.isWebKit || !( h( !0, n ) || g( n ) && l( e ) || function ( e ) {
                    const n = t.getBody();
                    return !!n.childNodes.length && ( e.collapsed && 0 === e.startOffset && n.childNodes[ 0 ] == e.startContainer )
                  }( n ) ) ) || !!( u.a.tinymce.isGecko && g( n ) && l( e ) && y( e ) )
                }

                function v( e ) {
                  const t = u.a.tinymce.activeEditor,
                    a = e.keyCode;
                  return a !== n.BACKSPACE && a !== n.DELETE || ( t.selection.isCollapsed() ? ( a === n.BACKSPACE && w( t.selection.getNode(), t.selection.getRng( !0 ) ) || a === n.DELETE && C( t.selection.getNode(), t.selection.getRng( !0 ) ) ) && u.a.tinymce.dom.Event.cancel( e ) : o( t.getBody() ) ), !0
                }
                const O = function () {
                    o( t.getBody(), !0 )
                  },
                  x = e => {
                    o( e, !1 ), u.a.tinymce.isIE10 && function ( e ) {
                      Object( s.default )( "p, td.confluenceTd, th.confluenceTh", e ).each( ( e, t ) => {
                        ( function ( e ) {
                          return e && "" === e.innerHTML
                        } )( t ) && Object( s.default )( t ).html( "<br />" )
                      } )
                    }( e )
                  };
                if ( r() ) {
                  function k() {
                    x( t.getBody() )
                  }
                  Object( a.a )( "cursor-target-refresh", k ), t.on( "Remove", () => {
                    Object( a.c )( "cursor-target-refresh", k )
                  } )
                } else t.on( "SetContent", () => {
                  const e = u.a.tinymce.activeEditor;
                  o( e.getBody() ),
                    function ( e ) {
                      const t = u.a.tinymce.isIE ? "&nbsp;" : "<br/>";
                      Object( s.default )( "p, td.confluenceTd, th.confluenceTh", e ).each( ( e, n ) => {
                        ( function ( e ) {
                          return e && e.childNodes && 1 === e.childNodes.length && 3 === e.childNodes[ 0 ].nodeType && e.childNodes[ 0 ].nodeValue && 1 === e.childNodes[ 0 ].nodeValue.length && 160 === e.childNodes[ 0 ].nodeValue.charCodeAt( 0 )
                        } )( n ) && Object( s.default )( n ).html( t )
                      } )
                    }( e.getBody() )
                } ), t.on( "GetContent", e => {
                  const n = "<div class='root-node'>" + e.content + "</div>",
                    o = i( Object( s.default )( n ) ),
                    a = s.default.extend( {}, e, {
                      getInner: !1
                    } ),
                    r = t.serializer.serialize( o[ 0 ], a );
                  e.content = r.substring( "<div class='root-node'>".length, r.length - "</div>".length )
                } ), t.on( "init", () => {
                  const e = u.a.tinymce.activeEditor;
                  e.dom.events.bind( e.selection, "SetContent", O ), e.dom.events.bind( e.getBody(), "cut", O ), Object( a.a )( "cursor-target-refresh", O )
                } ), t.on( "Remove", () => {
                  Object( a.c )( "cursor-target-refresh", O )
                } ), u.a.tinymce.isGecko && t.on( "KeyDown", e => {
                  e.keyCode !== n.ENTER && e.keyCode !== n.BACKSPACE && e.keyCode !== n.DELETE || t.selection.normalize()
                } ), t.on( "KeyDown", v ), t.on( "KeyUp", v ), u.a.tinymce.isGecko && t.on( "KeyPress", v ), t.on( "Paste", O );
                s.default.extend( this, {
                  isCursorBeforeAfterTable: h,
                  isCursorTarget: l,
                  _isTextContainerEmpty: c,
                  _removeCollaborativeEditorCursorTargets: function ( e ) {
                    const t = Object( s.default )( "<div>" );
                    return t.html( e ), t.find( "p.auto-cursor-target" ).each( ( e, t ) => {
                      t.remove()
                    } ), t.html()
                  },
                  _processCursorTargets: i,
                  _isCursorAtStartOfContainer: g,
                  _isCursorAtEndOfContainer: function ( e ) {
                    const t = e.startContainer;
                    if ( 3 === t.nodeType ) {
                      return !( t.nextSibling && ( 3 === t.nextSibling.nodeType || Object( s.default )( t.nextSibling ).is( "br" ) ) ) && e.endOffset == t.nodeValue.length
                    }
                    if ( 1 === t.nodeType ) {
                      const n = t.childNodes[ e.startOffset ];
                      return !( !Object( s.default )( n ).is( "br" ) || null != n.nextSibling ) || e.endOffset == t.childNodes.length
                    }
                    return !1
                  },
                  _getSiblingWithinBlockDisregardingNesting: m,
                  _doesContainerHaveNestedContent: function e( t ) {
                    const n = Object( s.default )( t ).children();
                    let o;
                    for ( o = 0; o < n.length; o++ )
                      if ( !c( n[ o ] ) && ( Object( s.default )( n[ o ] ).contents().filter( ( function () {
                          return 3 === this.nodeType
                        } ) ).length || e( n[ o ] ) ) ) return !0;
                    return !1
                  },
                  _addCursorTargetParagraphsToContent: o,
                  _isCursorAtEndOfBottomRightCellInTable: b,
                  _shouldCancelDelete: C,
                  _shouldCancelBackspace: w,
                  _collabEditingCursorTargetRefresh: x
                } ), u.a.AJS.Rte.Cursor = Object( f.b )().Cursor || {}, s.default.extend( u.a.AJS.Rte.Cursor, {
                  isTextContainerEmpty: c,
                  fixCursorTargets: o
                } )
              },
              getInfo: () => ( {
                longname: "Cursor Target plugin",
                author: "Atlassian",
                authorurl: "http://www.atlassian.com",
                version: "1.0"
              } )
            }
          } ) )().cursorTargetPlugin ), u.a.tinymce.PluginManager.add( "cursorTarget", u.a.tinymce.plugins.CursorTargetPlugin )
        }, function () {
          u.a.tinymce.create( "tinymce.plugins.iOSEditing", {
            init( e ) {
              u.a.tinymce.Env.iOS && setTimeout( () => {
                Object( s.default )( e.getBody() ).addClass( "ios" )
              }, 0 )
            },
            getInfo: () => ( {
              longname: "iOS Comments Plugin",
              author: "Atlassian",
              authorurl: "http://www.atlassian.com",
              version: `${u.a.tinymce.majorVersion}.${u.a.tinymce.minorVersion}`
            } )
          } ), u.a.tinymce.PluginManager.add( "iosediting", u.a.tinymce.plugins.iOSEditing )
        }, () => {
          u.a.tinymce.create( "tinymce.plugins.aeTable", we() ), u.a.tinymce.PluginManager.add( "aeTable", u.a.tinymce.plugins.aeTable )
        }, function () {
          const e = function () {
            const e = function ( e ) {
              const t = this;
              e.on( "Undo", n => {
                t.cleanLinks( e, n )
              } ), this.editor = e, this.weightedHandlers = [], this.handlers = [], Object( s.default )( u.a.document ).on( "prePaste", t.sanitizePaste )
            };

            function t( e ) {
              const n = t.options,
                o = n.parser[ n.strictMode ? "strict" : "loose" ].exec( e ),
                a = {};
              let r = 14;
              for ( ; r--; ) a[ n.key[ r ] ] = o[ r ] || "";
              return a[ n.q.name ] = {}, a[ n.key[ 12 ] ].replace( n.q.parser, ( e, t, o ) => {
                t && ( a[ n.q.name ][ t ] = o )
              } ), a
            }
            e.prototype = {
              addHandler( e, t ) {
                this.weightedHandlers.push( {
                  handler: e,
                  weight: t || 0
                } ), this.weightedHandlers.sort( ( e, t ) => e.weight - t.weight ), this.handlers = [];
                const n = this.weightedHandlers.length;
                for ( let o = 0; o < n; o++ ) this.handlers.push( this.weightedHandlers[ o ].handler )
              },
              cleanLinks: e => ( Object( s.default )( "a.atlassian-autoconvert", e.getDoc() ).removeClass( "atlassian-autoconvert" ), !0 ),
              sanitizePaste( e, t, n ) {
                n && n.content && ( n.content = n.content.replace( He, e => " unsafe-" + e.trim() ) )
              },
              callHandlers( e ) {
                let o = 0;
                const a = this,
                  r = Object( s.default )( e );
                let i = Object( s.default )( e ).clone();
                const c = i.attr( "href" );
                let l = t( n( c ) );

                function d( e ) {
                  if ( e && ( 1 !== e.length || !e.attr( "href" ) ) ) return m( e );
                  if ( e ) i = e, o = 0, l = t( i.attr( "href" ) ), f( a.handlers[ o ], l, i );
                  else {
                    if ( o++, !( o < a.handlers.length ) ) return m( i );
                    f( a.handlers[ o ], l, i )
                  }
                }

                function f( e, t, n ) {
                  let o, r = d;
                  o = setTimeout( () => {
                    r = function () {
                      0
                    }, d()
                  }, u.a.tinymce.plugins.Autoconvert.callbackTimeout ), e( t, n, ( function () {
                    clearTimeout( o ), r.apply( a, arguments ), r = function () {
                      0
                    }
                  } ) )
                }

                function m( e ) {
                  a.editor.undoManager.beforeChange();
                  const t = a.editor.selection,
                    n = a.editor.selection.getBookmark();
                  r.replaceWith( e ), t.moveToBookmark( n ), a.editor.undoManager.add()
                }
                0 !== this.handlers.length && f( this.handlers[ 0 ], l, i )
              }
            }, e.callbackTimeout = 5e3, e.convertMacroToDom = function ( e, t, n ) {
              const o = {
                macro: e,
                contentId: p.a.get( "content-id" )
              };
              s.default.ajax( {
                type: "POST",
                contentType: "application/json; charset=utf-8",
                url: b.a + "/rest/tinymce/1/macro/placeholder",
                data: s.default.toJSON( o ),
                dataType: "text",
                success: t,
                error: n,
                timeout: 45e3
              } )
            }, e.convertMacroToDomViaWikiText = function ( t, n, o ) {
              const a = [ "{", t.name ];
              let r = !0;
              t.defaultParameterValue && ( a.push( ":", t.defaultParameterValue ), r = !1 );
              for ( const e in t.params ) r ? ( a.push( ":" ), r = !1 ) : a.push( "|" ), a.push( e, "=", t.params[ e ] );
              a.push( "}" ), e.getHtmlFromWikiMarkup( a.join( "" ), e => {
                n( Object( s.default )( e )[ 0 ] )
              }, () => {
                o()
              } )
            }, e.getHtmlFromWikiMarkup = function ( e, t, n ) {
              const o = {
                wiki: e,
                entityId: p.a.get( "content-id" ),
                spaceKey: p.a.get( "space-key" )
              };
              s.default.ajax( {
                type: "POST",
                contentType: "application/json; charset=utf-8",
                url: b.a + "/rest/tinymce/1/wikixhtmlconverter",
                data: s.default.toJSON( o ),
                dataType: "text",
                success: t,
                error: n,
                timeout: 45e3
              } )
            }, t.options = {
              strictMode: !1,
              key: [ "source", "protocol", "authority", "userInfo", "user", "password", "host", "port", "relative", "path", "directory", "file", "query", "anchor" ],
              q: {
                name: "queryKey",
                parser: /(?:^|&)([^&=]*)=?([^&]*)/g
              },
              parser: {
                strict: /^(?:([^:\/?#]+):)?(?:\/\/((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:\/?#]*)(?::(\d*))?))?((((?:[^?#\/]*\/)*)([^?#]*))(?:\?([^#]*))?(?:#(.*))?)/,
                loose: /^(?:(?![^:@]+:[^:@\/]*@)([^:\/?#.]+):)?(?:\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/
              }
            };
            const n = function ( e ) {
                return e.replace( /^(.*?\/\/[^/]*?\/.*?)(@)/, "$1%40" )
              },
              o = {
                init( t ) {
                  const n = new e( t );

                  function o( e, o, a ) {
                    const r = Object( s.default )( a.node ).children( "a" );
                    1 === r.length && "A" === r[ 0 ].tagName && r.text() === r.attr( "href" ) && ( r.attr( "class", "atlassian-autoconvert" ), setTimeout( () => {
                      const e = Object( s.default )( "a.atlassian-autoconvert", Object( s.default )( t.selection.getNode().ownerDocument ) ).removeClass( "atlassian-autoconvert" );
                      n.callHandlers( e )
                    }, 0 ) )
                  }
                  u.a.tinymce.plugins.Autoconvert.autoConvert = n, t.on( "init", () => {
                    Object( s.default )( document ).on( "postPaste", o ), t.addCommand( "addAutoconverter", ( e, t ) => {
                      n.addHandler( t )
                    } )
                  } ), t.on( "remove", () => {
                    Object( s.default )( document ).off( "postPaste", o )
                  } )
                },
                getInfo: () => ( {
                  longname: "Atlassian Autoconvert",
                  author: "Atlassian",
                  authorurl: "http://www.atlassian.com",
                  infourl: "http://www.atlassian.com",
                  version: "1.0"
                } )
              };
            return {
              autoConverter: e,
              plugin: o
            }
          }();
          u.a.tinymce.plugins.Autoconvert = e.autoConverter, u.a.tinymce.create( "tinymce.plugins.AutoconvertPlugin", e.plugin ), u.a.tinymce.PluginManager.add( "autoconvert", u.a.tinymce.plugins.AutoconvertPlugin ), De()
        }, function () {
          Object( a.a )( "rte-ready", Le.initializeEditor )
        }, function () {
          u.a.tinymce.create( "tinymce.plugins.draggable", Fe() ), u.a.tinymce.PluginManager.add( "draggable", u.a.tinymce.plugins.draggable )
        }, function () {
          u.a.tinymce.create( "tinymce.plugins.InsertFiles", {
            init( e ) {
              e.addButton( "confluence-insert-files", {
                title: e.translate( "tinymce.confluence.files" ),
                tooltip: `${e.translate("tinymce.confluence.conf_file_desc")} (${e.translate("tinymce.confluence.conf_file_shortcut")})`,
                cmd: "mceConfimage",
                className: "insert-files",
                icon: "aui-icon aui-icon-small aui-iconfont-editor-files",
                locationGroup: "rte-toolbar-group-files",
                weight: 0
              } )
            },
            getInfo: () => ( {
              longname: "Insert Files",
              author: "Atlassian",
              authorurl: "http://www.atlassian.com",
              infourl: "http://www.atlassian.com/",
              version: "1.0"
            } )
          } ), u.a.tinymce.PluginManager.add( "insertfiles", u.a.tinymce.plugins.InsertFiles )
        }, function () {
          u.a.tinymce.create( "tinymce.plugins.flextofullsizeplugin", function () {
            let e, t;
            const n = function () {
              const e = Object( s.default )( "#wysiwyg" ).is( ":hidden" ) ? Object( s.default )( "#preview" ) : Object( s.default )( "#wysiwyg" );
              t = e.find( "iframe" );
              const n = Object( s.default )( "#header-precursor" ),
                o = Object( s.default )( u.a ).height();
              let a = n.offset().top + n.height() + Object( s.default )( "#header" ).height();
              Object( s.default )( "#content.edit" ).height( o - a ), setTimeout( () => {
                if ( Object( s.default )( "#preview" ).is( ":hidden" ) ) t.height( 0 ).height( e.height() );
                else {
                  Object( s.default )( "#content.edit" ).height( "auto" );
                  const e = Object( s.default )( "#savebar-container" ).height();
                  a += Object( s.default )( "#editor-precursor" ).height();
                  const n = 4;
                  t.height( o - a - e - n )
                }
              }, 1 )
            };
            return {
              init( t ) {
                t.on( "Init", () => {
                  let o, a;
                  Object( s.default )( t.getBody() ).addClass( "fullsize" );
                  const r = u.a.tinymce.Env;
                  ( r.ie || r.opera ) && ( o = t.getWin(), e = Object( s.default )( o.parent ), a = Object( s.default )( o.parent.document ), Object( s.default )( "body" ).css( {
                    overflow: "hidden"
                  } ), e.bind( "resize.resizeplugin", () => {
                    n()
                  } ), a.bind( "messageClose", () => {
                    setTimeout( n, 0 )
                  } ), a.bind( "resize.resizeplugin", ( e, t ) => {
                    n( t && t.height )
                  } ), a.bind( "mode-changed", () => {
                    n()
                  } ), t.on( "Change", () => {
                    n()
                  } ), n() )
                } )
              },
              getInfo: () => ( {
                longname: "flex editor to full size plugin",
                description: "adjusts height of editor so it always occupies the right space in between the toolbars",
                author: "Atlassian",
                authorurl: "http://www.atlassian.com",
                version: "1.0"
              } )
            }
          }() ), u.a.tinymce.PluginManager.add( "flextofullsize", u.a.tinymce.plugins.flextofullsizeplugin )
        }, function () {
          u.a.tinymce.create( "tinymce.plugins.Referrer", {
            init( e ) {
              e.on( "Init", () => {
                const e = Object( s.default )( "#createpageform" ),
                  t = e.find( "#originalReferrer" );
                e.length && !t.val() && document.referrer && t.val( document.referrer )
              } )
            },
            getInfo: () => ( {
              longname: "Confluence Cancel Return Url",
              author: "Atlassian",
              authorurl: "http://www.atlassian.com",
              version: `${u.a.tinymce.majorVersion}.${u.a.tinymce.minorVersion}`
            } )
          } ), u.a.tinymce.PluginManager.add( "referrer", u.a.tinymce.plugins.Referrer )
        }, () => {
          x( "confluence.table.resizable" ) && ( u.a.tinymce.create( "tinymce.plugins.TableContentWrapperPlugin", function () {
            const e = [ "img:not(.editor-inline-macro, .emoticon)" ].concat( [ "time.non-editable", ".editor-inline-macro", "a.confluence-link[data-linked-resource-type='userinfo']" ] ).concat( [ ".wysiwyg-macro" ] ).join( "," ),
              t = "<div class='content-wrapper'>";
            return {
              init( n ) {
                function o() {
                  Object( s.default )( n.dom.select( "table.confluenceTable:not(.wrapped)" ) ).each( ( n, o ) => {
                    Object( s.default )( o ).addClass( "wrapped" ).find( "> tbody > tr > th, > tbody > tr > td, > thead > tr > th" ).each( ( n, o ) => {
                      const a = Object( s.default )( o );
                      !a.find( "> .content-wrapper" ).length && a.find( e ).length && a.wrapInner( t )
                    } )
                  } )
                }
                Object( a.a )( "rte-ready", o ), n.on( "Remove", () => {
                  Object( a.c )( "rte-ready", o )
                } ), n.on( "Change", () => {
                  const o = n.selection;

                  function a() {
                    return o.getBookmark()
                  }

                  function r( e ) {
                    o.moveToBookmark( e ), Object( f.b )().BookmarkManager.storeBookmark()
                  }
                  const i = o.getNode(),
                    c = Object( s.default )( i );
                  if ( i && c.closest( "table.confluenceTable" ).not( "table.confluenceTable table.confluenceTable" ).length ) {
                    ! function ( e ) {
                      const t = o.getRng();
                      if ( e.is( "tr" ) && Object( s.default )( t.startContainer ).is( "tr" ) && t.collapsed ) {
                        const n = e.find( ">td, >th" ).first(),
                          a = n.find( ":first-child:not(.content-wrapper)" )[ 0 ] || n[ 0 ].firstChild;
                        t.setStart( a, 0 ), t.setEnd( a, 0 ), o.setRng( t )
                      }
                    }( c );
                    const n = c.closest( "table.confluenceTable > tbody > tr > th, table.confluenceTable > tbody > tr > td, table.confluenceTable > thead > tr > th" );
                    let i;
                    if ( n.find( e ).length ) {
                      const e = n.find( "> .content-wrapper" );
                      e.length ? ( i = a(), function ( e ) {
                        for ( let t = 0; t < e.length; t++ ) e.eq( t ).find( "> p, > table, > ul, > ol" ).length || e.eq( t ).wrapInner( "<p/>" ), t > 0 && ( e.eq( 0 ).append( e.eq( t ).children() ), e.eq( t ).remove() )
                      }( e ), r( i ) ) : n.find( "> p" ).length ? ( i = a(), n.wrapInner( t ), r( i ) ) : ( i = a(), n.wrapInner( "<p/>" ).wrapInner( t ), r( i ) )
                    }
                  }
                  Object( s.default )( n.getWin().document ).find( ".content-wrapper:empty" ).remove()
                } )
              },
              getInfo: () => ( {
                longname: "Table Content Wrapper Plugin",
                author: "Atlassian",
                authorurl: "http://www.atlassian.com",
                version: "1.0"
              } )
            }
          }() ), u.a.tinymce.PluginManager.add( "tableContentWrapper", u.a.tinymce.plugins.TableContentWrapperPlugin ) )
        }, function () {
          u.a.tinymce.create( "tinymce.plugins.LinkBrowser", ( () => {
            const e = Object( zt.a )().Editor.LinkBrowser;
            return {
              init: t => {
                t.addButton( "linkbrowserButton", {
                  title: "confluence.conflink_desc",
                  cmd: "mceConflink",
                  class: "mce_conflink"
                } ), t.addCommand( "mceConflink", () => {
                  e.open( {
                    bookmarkManager: W
                  } )
                } ), t.addCommand( "mceConfAttachments", () => {
                  e.open( {
                    panelKey: e.ATTACHMENTS_PANEL,
                    bookmarkManager: W
                  } )
                } )
              },
              getInfo: () => ( {
                longname: "Confluence Link Browser",
                author: "Atlassian",
                authorurl: "http://www.atlassian.com",
                version: `${u.a.tinymce.majorVersion}.${u.a.tinymce.minorVersion}`
              } )
            }
          } )() ), u.a.tinymce.PluginManager.add( "linkbrowser", u.a.tinymce.plugins.LinkBrowser )
        }, function () {
          u.a.tinymce.create( "tinymce.plugins.ConfluenceVersionComment", {
            init( e ) {
              e.on( "Init", () => {
                const t = p.a.get( "version-comment" );
                Object( s.default )( "#rte-savebar-tinymce-plugin-point" ).append( ( ( e, t ) => `\n<span class="rte-toolbar-comment toolbar-item">\n    <input id="versionComment" name="versionComment" ${t?`value="${t}"`:""}\n           placeholder="${e("editor.change.comment")}"\n           class="text" type="text" size="35">\n    <label for="versionComment" class="assistive">${e("editor.change.comment")}</label>\n</span>\n` )( t => e.translate( t ), t ) )
              } )
            },
            getInfo: () => ( {
              longname: "Confluence Version Comment",
              author: "Atlassian",
              authorurl: "http://www.atlassian.com",
              version: `${u.a.tinymce.majorVersion}.${u.a.tinymce.minorVersion}`
            } )
          } ), u.a.tinymce.PluginManager.add( "confluenceversioncomment", u.a.tinymce.plugins.ConfluenceVersionComment )
        }, function () {}, function () {
          console.log( "Finished loading Autocomplete base, Macro browser, JIM, Jira chart plugin" ), u.a.tinymce.create( "tinymce.plugins.AutoCompleteMacro", {
            init( e ) {
              Hn( e )
            },
            getInfo: () => ( {
              longname: "Auto Complete Macro",
              author: "Atlassian",
              authorurl: "http://www.atlassian.com",
              version: `${u.a.tinymce.majorVersion}.${u.a.tinymce.minorVersion}`
            } )
          } ), u.a.tinymce.PluginManager.add( "autocompletemacro", u.a.tinymce.plugins.AutoCompleteMacro )
        }, function () {
          x( "confluence-table-enhancements.sticky-headers.disabled" ) || Object( s.default )( document ).ready( et ), x( "confluence-table-enhancements.sticky-headers-editor" ) && ( Object( a.a )( "rte-ready", nt ), Object( a.a )( "rte-quick-edit-push-state", nt ), Object( a.a )( "rte-quick-edit-push-hash", nt ) )
        }, function () {
          u.a.tinymce.create( "tinymce.plugins.ConfluenceLeaveComment", ot ), u.a.tinymce.PluginManager.add( "confluenceleavecomment", u.a.tinymce.plugins.ConfluenceLeaveComment )
        }, function () {
          u.a.tinymce.create( "tinymce.plugins.ConfluenceLeaveTemplate", at ), u.a.tinymce.PluginManager.add( "confluenceleavetemplate", u.a.tinymce.plugins.ConfluenceLeaveTemplate )
        }, function () {
          const e = Object( k.E )( k.a ) ? ht : bt;
          u.a.Confluence.Editor.SearchManager = mt(), gt(), u.a.tinymce.create( "tinymce.plugins.AtlassianSearchReplacePlugin", e() ), u.a.tinymce.PluginManager.add( "searchreplace", u.a.tinymce.plugins.AtlassianSearchReplacePlugin )
        }, function () {
          u.a.tinymce.create( "tinymce.plugins.ConfluenceDrafts", it() ), u.a.tinymce.PluginManager.add( "confluencedrafts", u.a.tinymce.plugins.ConfluenceDrafts )
        }, function () {}, function () {}, function () {
          u.a.tinymce.create( "tinymce.plugins.ConfluenceMacroBrowser", ct ), u.a.tinymce.PluginManager.add( "confluencemacrobrowser", u.a.tinymce.plugins.ConfluenceMacroBrowser )
        }, function () {
          zn.a._insertCss(), u.a.AJS.Confluence.PropertyPanel.Macro.registerInitHandler( ( e, t, n ) => {
            var o, a;
            Un = e,
              function ( e ) {
                const t = function ( e ) {
                    for ( let t = 0; t < e.length; t++ )
                      if ( e[ t ].className.indexOf( "macro-placeholder-property-panel-edit-button" ) > -1 ) return e[ t ];
                    return null
                  }( e ),
                  n = function ( e ) {
                    R.editMacro( Object( s.default )( e ) )
                  };
                t.click = function () {
                  u.a.AJS.Confluence.PropertyPanel.destroy(), Jn() ? Vn.always( n ) : n( Un )
                }
              }( t ), qn = u.a.Confluence.MacroParameterSerializer.deserialize( Object( s.default )( Un ).attr( "data-macro-parameters" ) ), Gn = null, t.splice( 1, 0, ( o = ( a = qn ).title || Yn( a ), {
                className: "status-macro-title first last editable",
                text: ve( o ),
                click: eo
              } ) )
          }, "status" ), s.default.each( Wn, ( e, t ) => {
            u.a.AJS.Confluence.PropertyPanel.Macro.registerButtonHandler( t, ( function ( e, n ) {
              qn.colour = t, u.a.AJS.Confluence.PropertyPanel.destroy()
            } ), "status" )
          } ), Object( a.a )( "destroyed.property-panel", () => {
            Jn() && Qn()
          } )
        }, function () {}, function () {}, function () {}, function () {
          u.a.AJS.MacroBrowser.Macros.code = hn
        }, function () {}, function () {}, () => {
          u.a.tinymce.create( "tinymce.plugins.ConfluenceWatch", lt ), u.a.tinymce.PluginManager.add( "confluencewatch", u.a.tinymce.plugins.ConfluenceWatch )
        }, () => {
          u.a.tinymce.create( "tinymce.plugins.ConfluenceSortableTablesPlugin", st ), u.a.tinymce.PluginManager.add( "confluencesortabletablesplugin", u.a.tinymce.plugins.ConfluenceSortableTablesPlugin )
        }, function () {
          u.a.tinymce.create( "tinymce.plugins.AutoResizePlugin", dt ), u.a.tinymce.PluginManager.add( "autoresize", u.a.tinymce.plugins.AutoResizePlugin )
        }, function () {}, function () {}, () => {
          u.a.tinymce.create( "tinymce.plugins.ConfluenceNotifyWatchers", vt ), u.a.tinymce.PluginManager.add( "confluencenotifywatchers", u.a.tinymce.plugins.ConfluenceNotifyWatchers )
        }, function () {}, function () {
          u.a.AJS.Confluence.PropertyPanel.Macro.registerButtonHandler( "office-connector-download-file-button", ( e, t ) => {
            const n = ( t = t.nodeType ? t : t[ 0 ] ).getAttribute( "data-macro-parameters" ).split( "|" ),
              o = {};
            for ( let s = 0; s < n.length; s++ ) {
              const e = n[ s ].split( "=" );
              e.length > 1 && ( o[ e[ 0 ] ] = e[ 1 ] )
            }
            const a = u.a.AJS.Meta.get( "page-id" ),
              r = u.a.AJS.Meta.get( "content-type" );

            function i( e, t, n ) {
              return e && t && ( "?" != n.charAt( n.length - 1 ) && ( n += "&" ), n = `${n}${e}=${encodeURI(t)}` ), n
            }
            o.space || ( o.space = u.a.AJS.Meta.get( "space-key" ) );
            let c = u.a.AJS.Meta.get( "context-path" ) + "/plugins/servlet/oc/getattachment?";
            c = i( "title", o.page, c ), c = i( "date", o.date, c ), c = i( "space", o.space, c ), c = i( "filename", o.name, c ), c = i( "contextid", a, c ), c = i( "contexttype", r, c );
            const l = u.a.AJS.$.browser && u.a.AJS.$.browser.msie ? "_blank" : "download-office-attachment";
            u.a.open( c, l )
          } )
        }, function () {}, J.a, function () {
          u.a.tinymce.create( "tinymce.plugins.TableAnalytics", Et ), u.a.tinymce.PluginManager.add( "tableAnalytics", u.a.tinymce.plugins.TableAnalytics )
        }, function () {
          Object( a.a )( "init.rte", Pn )
        }, function () {
          Object( a.a )( "init.rte", () => {
            Object( pt.c )( document, "postPaste", At ), Object( pt.a )( document, "postPaste", At ), u.a.tinymce.activeEditor && u.a.tinymce.activeEditor.on( "Remove", () => {
              Object( pt.c )( document, "postPaste", At )
            } )
          } )
        }, function () {
          u.a.tinymce.create( "tinymce.plugins.ConfIndentation", It ), u.a.tinymce.PluginManager.add( "confindentation", u.a.tinymce.plugins.ConfIndentation )
        }, function () {}, function () {
          u.a.tinymce.create( "tinymce.plugins.TextPatternPlugin", Nt ), u.a.tinymce.PluginManager.add( "aetextpattern", u.a.tinymce.plugins.TextPatternPlugin )
        }, function () {
          u.a.require( "confluence-request-access-plugin/grant-access" ).initWhenEditorReady()
        }, function () {}, l.b, function () {
          Object( f.b )().BookmarkManager = z
        }, function () {
          u.a.tinymce.Env.gecko && Object( a.a )( "rte-ready", Ft )
        }, function () {
          12 === u.a.tinymce.Env.ie && Object( a.a )( "rte-ready", Ft )
        }, () => {
          u.a.tinymce.create( "tinymce.plugins.PersistScrollPosition", Dt ), u.a.tinymce.PluginManager.add( "persit_scroll_position", u.a.tinymce.plugins.PersistScrollPosition )
        }, () => {
          ro(), co.a._insertCss(), void 0 === u.a.Confluence.TeamCalendars && ( u.a.Confluence.TeamCalendars = {} ), u.a.Confluence.TeamCalendars.HelpTip = ho, u.a.Confluence.TeamCalendars.HelpTip.Manager = go, go.fetch()
        } ],
        vo = () => ( wo.forEach( ( e, t ) => {
          try {
            e()
          } catch ( n ) {
            c( "initError", {
              fnName: e.name || t,
              message: n.message || "",
              exceptionName: n.name || ""
            } )
          }
        } ), !0 );
      let Oo = !1;
      t.default = () => {
        if ( Oo ) return;
        const e = window.tinymce;
        return e.VK = e.util.VK, e.confluence = e.confluence || {}, u.a.tinymce.confluence = u.a.tinymce.confluence || {}, u.a.tinymce.confluence.macrobrowser = N, Object( Lt.a )(), u.a.tinymce.confluence = u.a.tinymce.confluence || {}, u.a.tinymce.confluence.NodeUtils = C, u.a.tinymce.confluence = u.a.tinymce.confluence || {}, u.a.tinymce.confluence.MacroUtils = M, Oo = !0, o.a.require( Co ).then( vo, () => {
          c( "wrmLoadError", {} )
        } )
      }
    },
    VRGO: function ( e, t, n ) {
      var o = n( "ZjlD" );
      "string" == typeof o && ( o = [
        [ e.i, o, "" ]
      ] );
      var a = {
        hmr: !0,
        transform: void 0,
        insertInto: void 0
      };
      n( "cuK8" )( o, a );
      o.locals && ( e.exports = o.locals )
    },
    "WM+X": function ( e, t, n ) {
      "use strict";
      n.d( t, "a", ( function () {
        return m
      } ) );
      var o = n( "bfgX" ),
        a = n( "Q2fH" ),
        r = n( "Jygk" ),
        i = n.n( r ),
        c = n( "bQlP" ),
        l = n( "ieax" ),
        s = n.n( l ),
        d = n( "dHP6" );
      const u = () => i.a.document.querySelector( "#rte-toolbar .toolbar-primary" ),
        f = () => {
          const e = i.a.document.querySelector( ".toolbar-trigger[data-control-id=help]" );
          Object( a.a )( e, "click", ( function () {
            this.parentElement.classList.contains( "disabled" ) && i.a.Confluence.KeyboardShortcuts.openDialog()
          } ) )
        },
        m = () => {
          const e = i.a.document.querySelector( "#content.edit" );
          ( e || i.a.document.querySelector( ".editor-container" ) ).classList.add( "adg3-editor" ), e && i.a.document.body.classList.add( "adg3-editor" )
        },
        p = () => {
          const e = i.a.tinymce.activeEditor;
          ( e => {
            const t = `<style id="adg3-styles" type="text/css">${s.a._getCss()}</style>`,
              n = e.getDoc().head;
            e.getBody().classList.add( "adg3-editor" ), n.insertAdjacentHTML( "beforeend", t )
          } )( e ), ( () => {
            const e = i.a.document.querySelector( "div.aui-toolbar2-secondary" ),
              t = i.a.document.querySelector( "ul#avatar-list" ),
              n = i.a.document.querySelector( "#synchrony-presence-overlay" );
            e && t && n && ( e.appendChild( t ), e.appendChild( n ) )
          } )(), u().insertAdjacentHTML( "afterbegin", '\n        <ul class="aui-buttons">\n            ## ADG3 editor logo\n            <li id="adg3-charlie-icon">\n                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="40px" height="40px" viewBox="10 9 20 21" version="1.1">\n                    <defs>\n                        <linearGradient x1="87.3894879%" y1="99.2165215%" x2="35.1317389%" y2="39.2162895%" id="linearGradient-1">\n                            <stop stop-color="#A5ADBA" offset="0%"/>\n                            <stop stop-color="#C1C7D0" offset="100%"/>\n                        </linearGradient>\n                        <linearGradient x1="14.1838118%" y1="5.80047897%" x2="61.141783%" y2="70.9663868%" id="linearGradient-2">\n                            <stop stop-color="#A5ADBA" offset="0%"/>\n                            <stop stop-color="#C1C7D0" offset="100%"/>\n                        </linearGradient>\n                    </defs>\n                    <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">\n                        <g id="confluence-light" fill-rule="nonzero">\n                            <path d="M10.0679208,24.8931748 C9.85301417,25.243638 9.61165744,25.6503075 9.40666954,25.9743206 C9.22318946,26.2843791 9.32168891,26.6842575 9.62818873,26.8736224 L13.9263221,29.5186276 C14.0771954,29.6117793 14.2591589,29.6404355 14.4313594,29.5981625 C14.6035598,29.5558895 14.7515684,29.4462293 14.8421552,29.2938021 C15.0140805,29.0061578 15.2355997,28.6325508 15.4769564,28.2324938 C17.1796785,25.4221758 18.8923193,25.7660265 21.9803628,27.2406169 L26.2421274,29.2673521 C26.4035355,29.3441777 26.5891716,29.3523812 26.7567273,29.2900928 C26.924283,29.2278045 27.0594818,29.1003316 27.1315104,28.9367264 L29.1780831,24.3079674 C29.3226768,23.9773763 29.1755503,23.5919046 28.8474575,23.4417282 C27.9481557,23.0185274 26.159471,22.175432 24.5493241,21.3984617 C18.7567628,18.5881437 13.8337469,18.7732941 10.0679208,24.8931748 Z" id="Shape" fill="url(#linearGradient-1)"/><path d="M29.3400897,14.0618786 C29.5549964,13.7114154 29.7963531,13.3047459 30.001341,12.9807328 C30.1848211,12.6706743 30.0863216,12.2707959 29.7798218,12.081431 L25.4816884,9.43642585 C25.3287553,9.33452192 25.1403124,9.30085833 24.961556,9.343509 C24.7827995,9.38615966 24.6298552,9.50127703 24.5394053,9.66125129 C24.36748,9.9488956 24.1459608,10.3225026 23.9046041,10.7225596 C22.201882,13.5328776 20.4892412,13.1890269 17.4011977,11.7144365 L13.1526581,9.6910076 C12.99125,9.61418193 12.805614,9.60597847 12.6380582,9.66826684 C12.4705025,9.73055522 12.3353038,9.85802811 12.2632751,10.0216332 L10.2167024,14.6503923 C10.0721087,14.9809834 10.2192353,15.366455 10.547328,15.5166315 C11.4466298,15.9398323 13.2353145,16.7829277 14.8454614,17.559898 C20.6512477,20.3669097 25.5742636,20.1817593 29.3400897,14.0618786 Z" id="Shape" fill="url(#linearGradient-2)"/>\n                        </g>\n                    </g>\n                </svg>\n            </li>\n        </ul>\n    ' ), i.a.document.querySelector( "#adg3-charlie-icon" ).addEventListener( "click", () => {
            Object( d.b )( "ADG3-Editor-Atlas-Logo-Clicked" )
          } ), ( e => {
            const t = i.a.document.querySelector( "#rte-button-pagelayout-2" ),
              n = i.a.document.querySelector( "#rte-button-searchreplace" ),
              o = () => {
                t.classList.remove( "active" ), Object( a.b )( i.a.document, "disableContextToolbarRow.Toolbar", {
                  id: "pl2-toolbar"
                } )
              },
              r = () => {
                Object( a.b )( i.a.document, "disableContextToolbarRow.Toolbar", {
                  id: "default"
                } )
              },
              c = () => {
                l( n ) && e.execCommand( "mceSearchReplaceToolbar" )
              },
              l = e => e.classList.contains( "active" );
            t.addEventListener( "click", () => {
              r(), c()
            } ), n.addEventListener( "click", () => {
              o(), r()
            } ), Object( a.a )( i.a.document, "enableContextToolbarRow.Toolbar", ( e, t ) => {
              t && t.id && "default" === t.id && ( o(), c() )
            } )
          } )( e ), f(), ( () => {
            const e = i.a.document.querySelector( "div.aui-toolbar2-secondary" );
            if ( e ) {
              const t = i.a.document.createElement( "div" );
              t.classList.add( "adg3InviteToEdit" ), e.appendChild( t )
            }
          } )(), [ "#rte-toolbar #macro-insert-list .dropdown-item.macro-gallery" ].forEach( e => {
            const t = i.a.document.querySelector( e );
            var n;
            ( n = t ) && ( n.remove ? n.remove() : n.removeNode( !0 ) )
          } )
        };
      t.b = () => {
        i.a.tinymce.create( "tinymce.plugins.Adg3Editor", {
          init() {
            Object( o.c )( "rte-ready", p ), Object( c.E )( c.a ) && Object( o.a )( "rte-ready", p )
          },
          getInfo: () => ( {
            longname: "Adg3 Themed Editor",
            author: "Atlassian",
            authorurl: "http://www.atlassian.com",
            infourl: "http://www.atlassian.com",
            version: `${i.a.tinymce.majorVersion}.${i.a.tinymce.minorVersion}`
          } )
        } ), i.a.tinymce.PluginManager.add( "Adg3Editor", i.a.tinymce.plugins.Adg3Editor )
      }
    },
    ZjlD: function ( e, t, n ) {
      ( e.exports = n( "PBB4" )( !1 ) ).push( [ e.i, "/*COPIED FROM CONFLUENCE*/\n\n#charmap-picker {\n    border: 0;\n    font-size: 16px;\n    font-family: Arial,Helvetica,FreeSans,sans-serif;\n    padding: 2px;\n    text-align: center;\n}\n\n#charmap-view {\n    padding-right: 1em;\n    text-align: left;\n    vertical-align: top;\n}\n\n#charmap-info {\n    text-align: center;\n    vertical-align: top;\n    width: 100%;\n}\n\n#charmap-info > table {\n    border: 0;\n    height: 100px;\n    padding: 0;\n    width: 100%;\n}\n\n#code-value {\n    font-size: 3em;\n}\n\n#code-name {\n    font-size: 13px;\n}\n\n#code-value, #code-name {\n    color: #666;\n    text-align: center;\n}\n\n.charmap a:link,\n.charmap a:visited,\n.charmap a:active,\n.charmap a:hover {\n    color: #326CA6;\n    text-decoration: none;\n}\n", "" ] )
    },
    cczi: function ( e, t, n ) {
      "use strict";
      n.d( t, "a", ( function () {
        return i
      } ) );
      var o = n( "Jygk" ),
        a = n.n( o ),
        r = n( "bS8p" );
      const i = () => {
        void 0 !== a.a.AJS.Rte && void 0 === a.a.AJS.Rte.Content && ( a.a.AJS.Rte.Content = r.a )
      }
    },
    dHP6: function ( e, t, n ) {
      "use strict";
      n.d( t, "b", ( function () {
        return g
      } ) ), n.d( t, "a", ( function () {
        return h
      } ) );
      var o = n( "Jygk" ),
        a = n.n( o ),
        r = n( "pa2z" ),
        i = n( "cGYM" ),
        c = n( "JGxT" ),
        l = n( "bfgX" );
      let s, d = {},
        u = 0;
      const f = function ( e, t ) {
          if ( e && ( d[ e ] ? d[ e ]++ : d[ e ] = 1, t ) ) {
            const n = e + "Size";
            d[ n ] ? d[ n ] += t : d[ n ] = t
          }
        },
        m = function e() {
          d.contentID = c.a.get( "content-id" ), d.currentVersion = c.a.get( "page-version" ) || "null", d.tinymceVersion = Object( i.a )( `${a.a.tinymce.majorVersion}.${a.a.tinymce.minorVersion}` ), d.frontEndVersion = Object( i.a )( Object( r.a )().FRONTEND_VERSION ), Object( l.b )( "analytics", {
            name: "confluence.editor.action",
            data: d
          } ), d = {}, clearTimeout( s ), s = setTimeout( e, 6e4 )
        },
        p = {
          Bold: "bold",
          confCharmap: "insert.symbol",
          confMonospace: "monospace",
          confTableRowToggleHeading: "table.row.toggle.heading",
          confTableColumnToggleHeading: "table.column.toggle.heading",
          confTableSelectionToggleHighlight: "table.selection.toggle.highlight",
          ForeColor: "foreground.color",
          FormatBlock: "format.block",
          Indent: "indent",
          InsertHorizontalRule: "insert.horizontal.rule",
          InsertOrderedList: "insert.ordered.list",
          InsertUnorderedList: "insert.unordered.list",
          InsertWikiMarkup: "insert.wiki.markup",
          Italic: "italic",
          JustifyCenter: "justify.center",
          JustifyLeft: "justify.left",
          JustifyRight: "justify.right",
          mceConfimage: "insert.files.images",
          mceConflink: "insert.link",
          mceConfMacroBrowser: "open.other.macros.browser",
          mceEmotion: "insert.emoticon",
          mceTableCopyRow: "table.copy.row",
          mceTableCutRow: "table.cut.row",
          mceTableDelete: "table.delete",
          mceTableDeleteCol: "table.delete.column",
          mceTableDeleteRow: "table.delete.row",
          mceTableInsertColAfter: "table.insert.column.after",
          mceTableInsertColBefore: "table.insert.column.before",
          mceTableInsertRowAfter: "table.insert.row.after",
          mceTableInsertRowBefore: "table.insert.row.before",
          mceTableMergeCells: "table.merge.cells",
          mceTablePasteRowBefore: "table.paste.row.before",
          mceTableSplitCells: "table.split.cells",
          mcePageLayoutsToolbar: "page.layouts.toolbar.toggle",
          mcePageLayoutAddSection: "page.layouts.toolbar.add.section",
          mcePageLayoutRemoveSection: "page.layouts.toolbar.remove.section",
          mcePageLayoutMoveSectionDown: "page.layouts.toolbar.movedown.section",
          mcePageLayoutMoveSectionUp: "page.layouts.toolbar.moveup.section",
          mcePageLayoutChangeSection: "page.layouts.toolbar.change.section",
          mceConfShortcutDialog: "open.help.dialog",
          mceSearchReplaceToolbar: "search.replace.toolbar.toggle",
          mceConfSearchClose: "search.replace.toolbar.close",
          mceConfSearch: "search",
          mceConfReplace: "replace",
          mceConfReplaceAll: "replace.all",
          Outdent: "outdent",
          Redo: "redo",
          Strikethrough: "strikethrough",
          subscript: "subscript",
          superscript: "superscript",
          Underline: "underline",
          Undo: "undo",
          InsertInlineTaskList: "insert.inline.tasklist",
          InsertInlineTaskListNoToggle: "insert.inline.tasklist.no.toggle"
        },
        g = f;

      function h() {
        Object( l.a )( "rte-ready", () => {
          ! function () {
            clearTimeout( s ), s = setTimeout( m, 6e4 );
            a.a.tinymce.activeEditor.on( "ExecCommand", e => {
              const t = "mceToggleFormat" === e.command ? ( n = e.value ).charAt( 0 ).toUpperCase() + n.slice( 1 ) : e.command;
              var n;
              f( p[ t ] )
            } ), a.a.tinymce.activeEditor.on( "KeyPress", () => {
              f( "keys" )
            } ), a.a.tinymce.activeEditor.on( "KeyUp", e => {
              46 === e.keyCode ? f( "delete", u ) : 8 === e.keyCode && f( "backspace", u ), u = a.a.tinymce.activeEditor.selection.getContent().length
            } ), a.a.tinymce.activeEditor.on( "MouseUp", () => {
              u = a.a.tinymce.activeEditor.selection.getContent().length
            } ), a.a.tinymce.activeEditor.on( "Paste", e => {
              f( "paste", e.clipboardData.getData( "text/plain" ).length )
            } ), a.a.tinymce.activeEditor.on( "Remove", () => {
              m(), clearTimeout( s )
            } )
          }(), a.a.addEventListener( "beforeunload", () => {
            m()
          } )
        } )
      }
    },
    e2U2: function ( e, t, n ) {
      var o = n( "4DxN" );
      "string" == typeof o && ( o = [
        [ e.i, o, "" ]
      ] );
      var a = {
        hmr: !0,
        transform: void 0,
        insertInto: void 0
      };
      n( "cuK8" )( o, a );
      o.locals && ( e.exports = o.locals )
    },
    gV2d: function ( e, t, n ) {
      var o = n( "5wKT" );
      "string" == typeof o && ( o = [
        [ e.i, o, "" ]
      ] );
      var a = {
        hmr: !0,
        transform: void 0,
        insertInto: void 0
      };
      n( "cuK8" )( o, a );
      o.locals && ( e.exports = o.locals )
    },
    iH7h: function ( e, t, n ) {
      ( e.exports = n( "PBB4" )( !1 ) ).push( [ e.i, "#property-panel a.macro-property-panel-Grey span.icon,.wiki-content .aui-lozenge{color:#333;background-color:#ccc;border-color:#ccc}#property-panel a.macro-property-panel-Grey span.icon.aui-lozenge-subtle,.wiki-content .aui-lozenge.aui-lozenge-subtle{color:#333;background-color:#fff;border-color:#ccc}#property-panel a.macro-property-panel-Green span.icon,.wiki-content .aui-lozenge-success{color:#fff;background-color:#14892c;border-color:#14892c}#property-panel a.macro-property-panel-Green span.icon.aui-lozenge-subtle,.wiki-content .aui-lozenge-success.aui-lozenge-subtle{color:#14892c;background-color:#fff;border-color:#b2d8b9}#property-panel a.macro-property-panel-Red span.icon,.wiki-content .aui-lozenge-error{color:#fff;background-color:#d04437;border-color:#d04437}#property-panel a.macro-property-panel-Red span.icon.aui-lozenge-subtle,.wiki-content .aui-lozenge-error.aui-lozenge-subtle{color:#d04437;background-color:#fff;border-color:#f8d3d1}#property-panel a.macro-property-panel-Yellow span.icon,.wiki-content .aui-lozenge-current{color:#594300;background-color:#ffd351;border-color:#ffd351}#property-panel a.macro-property-panel-Yellow span.icon.aui-lozenge-subtle,.wiki-content .aui-lozenge-current.aui-lozenge-subtle{color:#594300;background-color:#fff;border-color:#ffe28c}#property-panel a.macro-property-panel-Blue span.icon,.wiki-content .aui-lozenge-complete{color:#fff;background-color:#4a6785;border-color:#4a6785}#property-panel a.macro-property-panel-Blue span.icon.aui-lozenge-subtle,.wiki-content .aui-lozenge-complete.aui-lozenge-subtle{color:#4a6785;background-color:#fff;border-color:#e4e8ed}#property-panel a.macro-property-panel-Blue,#property-panel a.macro-property-panel-Brown,#property-panel a.macro-property-panel-Green,#property-panel a.macro-property-panel-Grey,#property-panel a.macro-property-panel-Red,#property-panel a.macro-property-panel-Yellow{padding:6px;padding-top:6px!important;display:inline-block}#property-panel a.macro-property-panel-Blue span.icon,#property-panel a.macro-property-panel-Brown span.icon,#property-panel a.macro-property-panel-Green span.icon,#property-panel a.macro-property-panel-Grey span.icon,#property-panel a.macro-property-panel-Red span.icon,#property-panel a.macro-property-panel-Yellow span.icon{display:inline-block;background-image:none;margin:0;border:0;min-width:auto;border-radius:3px;width:16px;height:16px}#insert-menu .macro-status .icon{background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAAXNSR0IArs4c6QAAAAZiS0dEAP8A/wD/oL2nkwAAAAlwSFlzAAALEwAACxMBAJqcGAAAAAd0SU1FB90DBgUQHra5bYQAAADGSURBVDjL7dMxSkNREIXhb967JqAWRgXBQoRgJRa6AhejnY07sHEFbsFF2Ip21hYWNtaSQjBRfMm1SWUG3EAODFMc5py/GZYKlPnONHO1u6lqU7fWScEe1lCT8HfcYoDZn+OeiLv4l/F8uCO0aUGNcTwMXGC40EDTjb2e3qsmNhK/4LlENcJ6FhCMBEKXELT4CMeXW+iniGX1++Tput+Fkvm1+iy+3s5wsEhQG7X3cnRof8p2QriCx4KbOU6mKZr5ZPpZfgK/SqI2J6AKSn8AAAAASUVORK5CYII=) no-repeat 50%}.editor-inline-macro[data-macro-name=status]{background:transparent;border:0;min-height:16px;margin:0;vertical-align:-4px}#property-panel .editable.status-macro-title{margin-right:10px;float:none;text-transform:uppercase;text-decoration:none;width:88px;overflow:hidden;white-space:nowrap;text-overflow:ellipsis;font-size:11px;padding:0 5px}#property-panel input.editable.status-macro-title{outline:none;height:30px;line-height:20px;vertical-align:bottom;padding-top:2px}", "" ] )
    },
    ieax: function ( e, t, n ) {
      var o = n( "kJzH" ),
        a = n( "7l8p" );
      "string" == typeof o && ( o = [
        [ e.i, o, "" ]
      ] ), e.exports = o.locals || {}, e.exports._getContent = function () {
        return o
      }, e.exports._getCss = function () {
        return o.toString()
      }, e.exports._insertCss = function ( e ) {
        return a( o, e )
      }
    },
    kJzH: function ( e, t, n ) {
      ( e.exports = n( "PBB4" )( !1 ) ).push( [ e.i, ".adg3-editor .synchrony-tpi-0{background-color:#172b4d}.adg3-editor .synchrony-tpi-1{background-color:#0049b0}.adg3-editor .synchrony-tpi-2{background-color:#00875a}.adg3-editor .synchrony-tpi-3{background-color:#ff8b00}.adg3-editor .synchrony-tpi-4{background-color:#de350b}.adg3-editor .synchrony-tpi-5{background-color:#5243aa}.adg3-editor .synchrony-tpi-6{background-color:#a5adba}.adg3-editor .synchrony-tpi-7{background-color:#2684ff}.adg3-editor .synchrony-tpi-8{background-color:#57d9a3}.adg3-editor .synchrony-tpi-9{background-color:#5e6c84}.adg3-editor .synchrony-tpi-10{background-color:#ff8f73}.adg3-editor .synchrony-tpi-11{background-color:#998dd9}.adg3-editor .synchrony-tpi-0.synchrony-tps:before{border-left-color:#172b4d}.adg3-editor .synchrony-tpi-0.synchrony-tpe:before{border-right-color:#172b4d}.adg3-editor .synchrony-tpi-1.synchrony-tps:before{border-left-color:#0049b0}.adg3-editor .synchrony-tpi-1.synchrony-tpe:before{border-right-color:#0049b0}.adg3-editor .synchrony-tpi-2.synchrony-tps:before{border-left-color:#00875a}.adg3-editor .synchrony-tpi-2.synchrony-tpe:before{border-right-color:#00875a}.adg3-editor .synchrony-tpi-3.synchrony-tps:before{border-left-color:#ff8b00}.adg3-editor .synchrony-tpi-3.synchrony-tpe:before{border-right-color:#ff8b00}.adg3-editor .synchrony-tpi-4.synchrony-tps:before{border-left-color:#de350b}.adg3-editor .synchrony-tpi-4.synchrony-tpe:before{border-right-color:#de350b}.adg3-editor .synchrony-tpi-5.synchrony-tps:before{border-left-color:#5243aa}.adg3-editor .synchrony-tpi-5.synchrony-tpe:before{border-right-color:#5243aa}.adg3-editor .synchrony-tpi-6.synchrony-tps:before{border-left-color:#a5adba}.adg3-editor .synchrony-tpi-6.synchrony-tpe:before{border-right-color:#a5adba}.adg3-editor .synchrony-tpi-7.synchrony-tps:before{border-left-color:#2684ff}.adg3-editor .synchrony-tpi-7.synchrony-tpe:before{border-right-color:#2684ff}.adg3-editor .synchrony-tpi-8.synchrony-tps:before{border-left-color:#57d9a3}.adg3-editor .synchrony-tpi-8.synchrony-tpe:before{border-right-color:#57d9a3}.adg3-editor .synchrony-tpi-9.synchrony-tps:before{border-left-color:#5e6c84}.adg3-editor .synchrony-tpi-9.synchrony-tpe:before{border-right-color:#5e6c84}.adg3-editor .synchrony-tpi-10.synchrony-tps:before{border-left-color:#ff8f73}.adg3-editor .synchrony-tpi-10.synchrony-tpe:before{border-right-color:#ff8f73}.adg3-editor .synchrony-tpi-11.synchrony-tps:before{border-left-color:#998dd9}.adg3-editor .synchrony-tpi-11.synchrony-tpe:before{border-right-color:#998dd9}", "" ] )
    },
    lB22: function ( e, t, n ) {
      ( e.exports = n( "PBB4" )( !1 ) ).push( [ e.i, "/*COPIED FROM CONFLUENCE*/\n\n#property-panel a.macro-placeholder-property-panel-display-newline-button span.icon {\n    background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAvklEQVR42rVTPQuFIBT1p1t7e2EFDrXnVmNb4Ca4BS5BW9AfOA+F+wjfAwfpwuHcDzn3olcGIAv5An3fo+u6L55x27bE5P+cZdkWqVJH6pDMsWxTSsFjmqbAMZIC4zjivm9c14XjOLDvO4wx2LYNwzCkBZqmwXmecM7BWgutNdZ1xTzP8LWkQFVVWJYFUspwQUII1HUd2NeSApxzeJRlCfKLovBxYPa6xe9KsedHLc7TXryzidQpnurvZNm/8QMbqb4yyqv4rAAAAABJRU5ErkJggg==);\n    width: 16px;\n    height: 16px;\n    display: inline-block;\n}\n\n#property-panel a.macro-placeholder-property-panel-display-inline-button span.icon {\n    background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAw0lEQVR42q1TMQqAMBDr0/UBroJiBUEf0E51dRMcxUlwFBcHPxA5IUuLONSDcDmupO01VQCiEC+gtYagrusH5FVVCfdz0FfRQVVR5CmoLtzfnWBf/R7WWhhjIFnAmvlToOs6XNeF8zyx7zvWdcU8zxjHEW3bhgK8NydaFAWO48C2bViWBdM0YRgGOOcgPc7t9RWyLEPf92ia5hEuyxJ5nj+Lpae+IkkSpGkKZnLW6u/gDHzX+c6kP4j/nfjmNJ8HiP6NN81gzxU6QYojAAAAAElFTkSuQmCC);\n    width: 16px;\n    height: 16px;\n    display: inline-block;\n}\n\n#property-panel a.macro-placeholder-property-panel-display-newline-button,\n#property-panel a.macro-placeholder-property-panel-display-inline-button {\n    padding: 0 6px;\n}\n", "" ] )
    },
    "m+2k": function ( e, t, n ) {
      "use strict";
      ( function ( e ) {
        n.d( t, "a", ( function () {
          return o
        } ) );
        class o {
          constructor( t ) {
            t ? this.userAgent = t : e.window && ( this.userAgent = e.window.navigator.userAgent )
          }
          isFirefox() {
            return -1 !== this.userAgent.indexOf( "Firefox/" )
          }
          notFirefox() {
            return !this.isFirefox()
          }
          isMSEdge() {
            return -1 !== this.userAgent.indexOf( "Edge/" )
          }
          notMSEdge() {
            return !this.isMSEdge()
          }
          isIE() {
            return -1 !== this.userAgent.indexOf( "MSIE" ) || -1 !== this.userAgent.indexOf( "Trident/" ) || this.isMSEdge()
          }
          notIE() {
            return !this.isIE()
          }
          isChrome() {
            return -1 !== this.userAgent.indexOf( "Chrome/" )
          }
          notChrome() {
            return !this.isChrome()
          }
          isSafari() {
            return -1 !== this.userAgent.indexOf( "Safari/" ) && -1 === this.userAgent.indexOf( "Chrome/" )
          }
          notSafari() {
            return !this.isSafari()
          }
          isPhantom() {
            return -1 !== this.userAgent.indexOf( "PhantomJS" )
          }
          notPhantom() {
            return !this.isPhantom()
          }
          version() {
            if ( this.isIE() ) {
              const e = this.userAgent.match( /MSIE\s([\d.]+)/ ) || this.userAgent.match( /rv:([\d.]+)/ ) || this.userAgent.match( /Edge\/([\d.]+)/ );
              return parseInt( e[ 1 ] )
            }
            return this.isChrome() ? parseInt( this.userAgent.match( /Chrome\/([\d.]+)/ )[ 1 ] ) : this.isSafari() ? parseInt( this.userAgent.match( /Version\/([\d.]+)/ )[ 1 ] ) : this.isFirefox() ? parseInt( this.userAgent.match( /Firefox\/([\d.]+)/ )[ 1 ] ) : void 0
          }
          friendlyName() {
            return this.isMSEdge() ? "MSEdge" : this.isIE() ? "IE" : this.isChrome() ? "Chrome" : this.isSafari() ? "Safari" : this.isFirefox() ? "Firefox" : void 0
          }
        }
      } ).call( this, n( "fRV1" ) )
    },
    mCf2: function ( e, t, n ) {
      ( e.exports = n( "PBB4" )( !1 ) ).push( [ e.i, "body.ios {\n    min-height: 150px;\n}", "" ] )
    },
    owi1: function ( e, t, n ) {
      "use strict";
      ( function ( e ) {
        n.d( t, "a", ( function () {
          return o
        } ) );
        const o = () => e.Confluence
      } ).call( this, n( "fRV1" ) )
    },
    qNQp: function ( e, t, n ) {
      ( e.exports = n( "PBB4" )( !1 ) ).push( [ e.i, "/*CONFDEV-25367: Insert files*/\n/* always hide title of this button in comment */\n\n.quick-comment-form #rte-toolbar .insert-files.toolbar-item {\n    padding: 0 6px;\n}\n\n.quick-comment-form #rte-toolbar .insert-files .toolbar-trigger {\n    margin: 0 -6px;\n}\n\n#rte-toolbar .insert-files.toolbar-item {\n    padding: 0;\n}\n\n#rte-toolbar .insert-files .trigger-text {\n    display: none;\n}\n\n#rte-toolbar .insert-files .aui-button {\n    padding: 0 6px;\n}\n\n", "" ] )
    },
    xODI: function ( e, t, n ) {
      var o = n( "iH7h" ),
        a = n( "7l8p" );
      "string" == typeof o && ( o = [
        [ e.i, o, "" ]
      ] ), e.exports = o.locals || {}, e.exports._getContent = function () {
        return o
      }, e.exports._getCss = function () {
        return o.toString()
      }, e.exports._insertCss = function ( e ) {
        return a( o, e )
      }
    },
    zFIa: function ( e, t, n ) {
      var o = n( "mCf2" );
      "string" == typeof o && ( o = [
        [ e.i, o, "" ]
      ] );
      var a = {
        hmr: !0,
        transform: void 0,
        insertInto: void 0
      };
      n( "cuK8" )( o, a );
      o.locals && ( e.exports = o.locals )
    }
  }
] );
//# sourceMappingURL=atlassian-editor-plugins~9f9b18d1.5fmdiY1Ecj.js.map
