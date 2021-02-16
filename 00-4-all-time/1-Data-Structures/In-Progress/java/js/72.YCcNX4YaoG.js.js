( window.webpackJsonp = window.webpackJsonp || [] ).push( [
  [ 72 ], {
    "+DnP": function ( e, t, n ) {
      var o = n( "W0vE" ),
        r = n( "sjzV" ),
        i = n( "S3pA" ),
        a = n( "wxYD" );
      e.exports = function ( e, t ) {
        return ( a( e ) ? o : r )( e, i( t, 3 ) )
      }
    },
    "5PxA": function ( e, t, n ) {
      "use strict";
      var o = n( "Czhu" ),
        r = n( "Jygk" ),
        i = n.n( r ),
        a = n( "jUyC" ),
        c = n( "Zf7T" ),
        s = n( "zWu7" );

      function l( e ) {
        return !!( e = e && e.jquery ? e[ 0 ] : e ) && ( "BR" !== e.tagName && 3 !== e.nodeType || ( e = e.parentNode ), e && 9 === e.nodeType && ( e = null ), e )
      }
      const d = {};
      d.Rte = {
        HIDDEN_CHAR: "\ufeff",
        ZERO_WIDTH_WHITESPACE: "&#x200b;",
        editorId: "wysiwygTextArea",
        isQuickEdit: !1,
        getEditor: () => i.a.tinymce.activeEditor,
        getCurrentBaseUrl() {
          if ( !this.currentBaseUrl ) {
            const e = i.a.document.location;
            this.currentBaseUrl = `${e.protocol}//${e.hostname}${e.port?":"+e.port:""}`
          }
          return this.currentBaseUrl
        },
        showSelection: e => {
          Object( c.b )().showElement( i.a.tinymce.activeEditor.selection.getStart(), e )
        },
        isAnyPartShown: e => {
          if ( !( e = l( e ) ) ) return !1;
          const t = Object( a.default )( e ),
            n = t.offset().top,
            o = n + t.outerHeight(),
            r = Object( a.default )( Object( c.b )().getEditor().getDoc() ).scrollTop(),
            i = r + Object( a.default )( Object( c.b )().getEditorFrame() ).height();
          return o > r && n < i
        },
        showElement: ( e, t ) => {
          const n = l( e );
          if ( !n ) return !1;
          const o = Object( a.default )( n ),
            r = Object( c.b )().getEditor(),
            i = Object( a.default )( r.getDoc() ),
            s = o.offset().top,
            d = s + o.outerHeight(),
            u = i.scrollTop(),
            p = u + Object( a.default )( Object( c.b )().getEditorFrame() ).height(),
            m = () => {
              Object( c.b )().bindScroll( "AJS.Rte.showElement", () => {
                Object( c.b )().unbindScroll( "AJS.Rte.showElement" ), setTimeout( t, 1 )
              } )
            };
          s < u ? ( Object( c.b )().scrollTo( s ), t && m() ) : d > p ? ( Object( c.b )().scrollTo( Math.min( s, u + d - p ) ), t && m() ) : t && t()
        },
        scrollTo: e => {
          const t = Object( c.b )().getEditor();
          e = Math.ceil( e ), Object( a.default )( t.getDoc() ).scrollTop( e )
        },
        bindScroll: ( e, t ) => {
          const n = Object( c.b )().getEditor();
          Object( a.default )( document ).add( n.getDoc() ).add( n.getWin() ).bind( "scroll." + e, t )
        },
        unbindScroll: e => {
          const t = Object( c.b )().getEditor();
          Object( a.default )( document ).add( t.getDoc() ).add( t.getWin() ).unbind( "scroll." + e )
        },
        getMainEditor: () => {
          const e = i.a.tinymce.EditorManager.editors[ Object( c.b )().editorId ];
          if ( !e ) throw new Error( "Main editor has not been initialised yet and is therefore not accessible via window.tinymce.EditorManager.editors" );
          return e
        },
        getEditorContainer: () => document.getElementById( "wysiwyg" ),
        getEditorFrame: () => document.getElementById( Object( c.b )().getEditor().id + "_ifr" ),
        getEditorTable: () => document.getElementById( Object( c.b )().getEditor().id + "_tbl" ),
        webResourcePath: "/download/resources/com.atlassian.confluence.tinymceplugin%3Atinymceeditor/",
        getResourceUrlPrefix() {
          return this.resourceUrlPrefix || ( this.resourceUrlPrefix = this.getCurrentBaseUrl() + s.a.get( "editor-plugin-resource-prefix" ) ), this.resourceUrlPrefix
        },
        getTinyMceBaseUrl() {
          return this.absoluteUrl || ( this.absoluteUrl = this.getResourceUrlPrefix() + this.webResourcePath + "tinymcesource/" ), this.absoluteUrl
        },
        getMinEditorHeight: () => +s.a.get( "min-editor-height" ),
        getTinyMceEditorMinHeight: e => {
          e = e || 0;
          const t = Object( c.b )().getMinEditorHeight();
          let n = 0;
          return t || ( Array.prototype.forEach.call( document.querySelectorAll( "#editor-precursor,#header-precursor,#header" ), e => {
            n += Object( a.default )( e ).outerHeight( !0 )
          } ), Object( a.default )( i.a ).height() - n - e )
        },
        fixEditorFocus: () => {
          0
        },
        editorFocus: e => {
          if ( !e || e.destroyed ) return;
          const t = function () {
            let t = e.dom.getRoot();
            return i.a.tinymce.isWebKit && !Object( a.default )( t ).parents( "body" ).length && ( t = Object( a.default )( e.getBody() ).find( "p:first-child" )[ 0 ] ), t
          }();
          t && ( e.selection.select( t, 1 ), e.selection.collapse( 1 ), t.focus() ), e.getBody().focus(), e.getWin().focus()
        }
      }, d.KEYS = {
        BACKSPACE: 8,
        TAB: 9,
        ENTER: 13,
        SHIFT: 16,
        CTRL: 17,
        ALT: 18,
        ESCAPE: 27,
        LEFT: 37,
        UP: 38,
        RIGHT: 39,
        DOWN: 40,
        DELETE: 46,
        META: 91
      };
      var u = d;
      n.d( t, "a", ( function () {
        return p
      } ) );
      const p = () => {
        void 0 === i.a.AJS.Rte && ( i.a.AJS.Rte = Object( o.a )( {}, u.Rte ) ), void 0 === i.a.AJS.Rte.getEditor && ( i.a.AJS.Rte = Object( o.a )( Object( o.a )( {}, i.a.AJS.Rte ), u.Rte ) )
      }
    },
    "9SCj": function ( e, t, n ) {
      var o = n( "LmOH" ),
        r = n( "Q4oW" ),
        i = n( "D49j" ),
        a = n( "wxYD" );
      e.exports = function ( e, t ) {
        return ( a( e ) ? o : r )( e, i( t ) )
      }
    },
    Bud6: function ( e, t, n ) {
      "use strict";
      n.d( t, "l", ( function () {
        return c
      } ) ), n.d( t, "a", ( function () {
        return s
      } ) ), n.d( t, "b", ( function () {
        return l
      } ) ), n.d( t, "c", ( function () {
        return d
      } ) ), n.d( t, "z", ( function () {
        return u
      } ) ), n.d( t, "o", ( function () {
        return p
      } ) ), n.d( t, "q", ( function () {
        return m
      } ) ), n.d( t, "p", ( function () {
        return b
      } ) ), n.d( t, "t", ( function () {
        return g
      } ) ), n.d( t, "w", ( function () {
        return f
      } ) ), n.d( t, "A", ( function () {
        return h
      } ) ), n.d( t, "m", ( function () {
        return y
      } ) ), n.d( t, "E", ( function () {
        return _
      } ) ), n.d( t, "D", ( function () {
        return j
      } ) ), n.d( t, "n", ( function () {
        return O
      } ) ), n.d( t, "C", ( function () {
        return k
      } ) ), n.d( t, "B", ( function () {
        return E
      } ) ), n.d( t, "G", ( function () {
        return v
      } ) ), n.d( t, "F", ( function () {
        return w
      } ) ), n.d( t, "k", ( function () {
        return C
      } ) ), n.d( t, "r", ( function () {
        return A
      } ) ), n.d( t, "s", ( function () {
        return I
      } ) ), n.d( t, "v", ( function () {
        return S
      } ) ), n.d( t, "y", ( function () {
        return x
      } ) ), n.d( t, "h", ( function () {
        return T
      } ) ), n.d( t, "I", ( function () {
        return P
      } ) ), n.d( t, "J", ( function () {
        return R
      } ) ), n.d( t, "e", ( function () {
        return B
      } ) ), n.d( t, "f", ( function () {
        return H
      } ) ), n.d( t, "g", ( function () {
        return L
      } ) ), n.d( t, "u", ( function () {
        return D
      } ) ), n.d( t, "x", ( function () {
        return M
      } ) ), n.d( t, "d", ( function () {
        return U
      } ) ), n.d( t, "i", ( function () {
        return F
      } ) ), n.d( t, "j", ( function () {
        return J
      } ) ), n.d( t, "H", ( function () {
        return q
      } ) );
      var o = n( "ROYt" ),
        r = n( "yS9+" ),
        i = n( "yLtY" ),
        a = n( "2M9l" );
      Object( r.b )( a.H );
      const c = Object( r.b )( a.D ),
        s = Object( r.b )( a.a ),
        l = Object( r.b )( a.b ),
        d = Object( r.b )( a.c ),
        u = Object( r.b )( a.I ),
        p = Object( r.b )( a.q ),
        m = Object( r.b )( a.u ),
        b = Object( r.b )( a.t ),
        g = Object( r.b )( a.E ),
        f = Object( r.b )( a.p ),
        h = Object( r.b )( a.w ),
        y = Object( r.b )( a.n ),
        _ = Object( r.b )( a.J ),
        j = Object( r.b )( a.z ),
        O = Object( r.b )( a.o ),
        k = Object( r.b )( a.y ),
        E = Object( r.b )( a.x ),
        v = Object( r.b )( a.A + "_SUCCESS" ),
        w = Object( r.c )( a.A, o.a.contentProperties.updateContentProperty ),
        C = Object( r.c )( a.e, o.a.content.editorPage, {
          schema: i.a.content
        } ),
        A = Object( r.c )( a.h, o.a.content.publishEditorPage, {
          schema: i.a.content
        } ),
        I = Object( r.c )( a.f, o.a.content.publishEditorPageFromTemplate, {
          schema: i.a.content
        } ),
        S = ( Object( r.c )( a.g, o.a.content.renderContent ), Object( r.c )( a.k, o.a.content.syncEditorDraft ) ),
        x = Object( r.b )( a.G ),
        T = Object( r.c )( a.d, o.a.content.getBreadcrumbs ),
        P = Object( r.c )( a.B, o.a.content.updateInlineTask ),
        R = Object( r.c )( a.C, o.a.content.updateParentPage, {
          schema: i.a.content
        } ),
        B = Object( r.c )( a.j, o.a.content.deleteContent ),
        H = Object( r.c )( a.l, o.a.content.relationSourcesForTarget ),
        L = Object( r.c )( a.m, o.a.content.relationSourcesForTarget ),
        D = Object( r.c )( a.v, o.a.content.revertContent ),
        M = Object( r.b )( a.F ),
        U = Object( r.c )( a.i, o.a.content.createPage, {
          schema: i.a.content
        } ),
        F = Object( r.c )( a.r, o.a.content.editorPage, {
          schema: i.a.content
        } ),
        J = Object( r.c )( a.s, o.a.content.draftMetadata, {
          schema: i.a.content
        } ),
        q = Object( r.b )( a.K )
    },
    Cy2Q: function ( e, t, n ) {
      "use strict";
      n.r( t );
      var o = n( "Czhu" ),
        r = n( "ERkP" ),
        i = n.n( r ),
        a = n( "uDfI" ),
        c = n( "Bud6" ),
        s = n( "kR5U" ),
        l = n( "zjfJ" ),
        d = ( n( "aWzz" ), n( "nnRT" ) ),
        u = n.n( d ),
        p = n( "Jygk" ),
        m = n.n( p ),
        b = n( "L21V" ),
        g = n( "M2LZ" ),
        f = n( "5PxA" ),
        h = n( "WHVE" ),
        y = n( "bfgX" ),
        _ = n( "bQlP" ),
        j = n( "Zf7T" ),
        O = n( "JGxT" ),
        k = n( "7LQG" ),
        E = n( "w19e" ),
        v = n( "mbB6" ),
        w = n.n( v ),
        C = n( "mGvo" ),
        A = n.n( C ),
        I = n( "h4um" ),
        S = n.n( I ),
        x = n( "+DnP" ),
        T = n.n( x ),
        P = n( "u6DZ" ),
        R = n.n( P ),
        B = n( "jUyC" );
      class H {
        constructor( e ) {
          this.scope = null, this.listeners = null, this.inDispatch = !1, this.scope = e || this, this.listeners = []
        }
        add( e, t ) {
          return this.listeners.push( {
            cb: e,
            scope: t || this.scope
          } ), e
        }
        addToTop( e, t ) {
          const n = this,
            o = {
              cb: e,
              scope: t || n.scope
            };
          return n.inDispatch ? n.listeners = [ o ].concat( n.listeners ) : n.listeners.unshift( o ), e
        }
        remove( e ) {
          const t = this.listeners;
          let n = null;
          return m.a.tinymce.each( t, ( o, r ) => {
            if ( e == o.cb ) return n = o, t.splice( r, 1 ), !1
          } ), n
        }
        dispatch() {
          const e = arguments,
            t = this.listeners;
          let n, o, r;
          for ( this.inDispatch = !0, o = 0; o < t.length && ( n = t[ o ], r = n.cb.apply( n.scope, e.length > 0 ? e : [ n.scope ] ), !1 !== r ); o++ );
          return this.inDispatch = !1, r
        }
      }

      function L( e ) {
        return "object" == typeof e && e.name
      }

      function D( e, t ) {
        return "string" == typeof t ? e.queryCommandState( t ) : !!L( t ) && e.queryCommandState( t.name )
      }

      function M( e, t, n, o ) {
        return e.execCommand( t, n, o )
      }
      var U = n( "jGny" );
      const F = "//" + m.a.location.host;

      function J( e ) {
        const t = function () {
          function e( e ) {
            this.init = this.init( e )
          }
          e.INCOMPATIBLE_PLUGINS = [ "dfe" ], e.shouldInit = () => {
            const e = Object( B.default )( "body" );
            return e.hasClass( "edit" ) || e.hasClass( "create" ) || e.hasClass( "copy-page" )
          }, e.suppressIncompatiblePlugins = () => {
            const t = () => {};
            for ( let n = 0, o = e.INCOMPATIBLE_PLUGINS.length; n < o; n++ ) m.a.tinymce.PluginManager.lookup[ e.INCOMPATIBLE_PLUGINS[ n ] ] = t
          }, e.prototype.init = e => {
            const t = B.default.ui.keyCode,
              n = Object( B.default )( "#content-title" ),
              o = Object( B.default )( "form.editor" ),
              r = Object( B.default )( e.getBody() ),
              i = Object( B.default )( e.getDoc() ),
              a = Object( B.default )( "#editor-precursor" ),
              c = Object( B.default )( e.getWin() ),
              s = Object( B.default )( "#toolbar" ),
              l = Object( B.default )( "#toolbar .toolbar-primary" ),
              d = i.scrollTop(),
              u = parseInt( r.css( "padding-top" ), 10 ) + parseInt( r.css( "margin-top" ), 10 ),
              p = parseInt( a.css( "padding-top" ), 10 ),
              b = m.a.requestAnimationFrame || m.a.webkitRequestAnimationFrame,
              g = Object( B.default )( '<ol id="breadcrumbs"></ol>' );

            function f( t ) {
              e.plugins.customtoolbar.toggleToolbarButtons( t, t, t, () => !Object( B.default )( this ).parent().hasClass( "close" ) )
            }
            Object( B.default )( ".cell", a ).prepend( g );
            const h = Object( _.E )( _.a ) ? function () {
              const e = d - i.scrollTop(),
                t = s.offset().top - o.offset().top,
                n = l.outerHeight(),
                c = parseInt( a.css( "margin-top" ), 10 ),
                u = a.outerHeight();
              r.css( "padding-top", c + u + "px" ), a.css( "top", t + n + e + p + "px" )
            } : function () {
              const e = d - i.scrollTop(),
                t = s.offset().top - o.offset().top,
                n = a.outerHeight(),
                c = s.outerHeight();
              a.css( "top", t + c + e + p + "px" ), r.css( "padding-top", n + u + "px" )
            };
            return n.on( "keydown", n => {
                const o = n.keyCode || n.which;
                o !== t.ENTER && o !== t.DOWN || ( n.preventDefault(), n.stopPropagation(), e.focus() )
              } ).on( "focus click", () => {
                f( !0 )
              } ), c.on( "focus", () => {
                f( !1 )
              } ),
              function ( e ) {
                ! function t() {
                  e( t ), h()
                }(), r.on( "scroll mousewheel", () => {
                  setTimeout( h, 0 )
                } )
              }( b ), !0
          };
          const t = {
            controlHandlers: {},
            controls: {
              bold: "Bold",
              italic: "Italic",
              underline: "Underline",
              strikethrough: "Strikethrough",
              justifyleft: "JustifyLeft",
              justifycenter: "JustifyCenter",
              justifyright: "JustifyRight",
              bullist: "InsertUnorderedList",
              numlist: "InsertOrderedList",
              tasklist: "InsertInlineTaskList",
              outdent: "Outdent",
              indent: "Indent",
              cut: "Cut",
              copy: "Copy",
              paste: "Paste",
              undo: "Undo",
              redo: "Redo",
              removeformat: "RemoveFormat",
              sub: "subscript",
              sup: "superscript",
              forecolor: "ForeColor",
              forecolorpicker: "mceForeColor",
              backcolor: "HiliteColor",
              backcolorpicker: "mceBackColor",
              charmap: "mceCharMap",
              visualaid: "mceToggleVisualAid",
              anchor: "mceInsertAnchor",
              newdocument: "mceNewDocument",
              blockquote: "mceBlockQuote"
            },
            stateControls: [ "bold", "italic", "underline", "bullist", "numlist", "tasklist", "justifyleft", "justifycenter", "justifyright", "strikethrough", "sub", "sup", "monospace" ],
            init( t, n ) {
              const o = e.shouldInit(),
                r = this;
              o && e.suppressIncompatiblePlugins(), r.editor = t, r.url = n, r.settings = m.a.tinymce.extend( {
                theme_advanced_toolbar_location: "bottom",
                theme_advanced_buttons1: "formatselect,bold,italic,underline,strikethrough,forecolor,separator,table,row_before,row_after,delete_row,col_before,col_after,delete_col,delete_table,separator,bullist,numlist,tasklist,outdent,indent,blockquote,justifyleft,justifycenter,justifyright,justifyfull,separator,sup,sub,separator,undo,redo,separator,conflink,oldlinkbrowserButton,confimage,conf_macro_browser,separator,search,code,customtoolbar, monospacep,h1,h2,h3,h4,h5,h6,pre,blockquote",
                readonly: t.settings.readonly
              }, t.settings ), t.on( "init", () => {
                t.settings.readonly || ( t.on( "NodeChange", e => {
                  r.nodeChanged( t, null, e.element, !1, {
                    parents: e.parents
                  } )
                } ), t.on( "keyup", () => {
                  r._updateUndoStatus( t )
                } ), t.on( "MouseUp", () => {
                  r._updateUndoStatus( t )
                } ), t.dom.bind( t.dom.getRoot(), "dragend", () => {
                  r._updateUndoStatus( t )
                } ), o && new e( t ) )
              } )
            },
            execCommand( e, t, n ) {
              const o = this[ "_" + e ];
              return !!o && ( o.call( this, t, n ), !0 )
            },
            renderUI( e ) {
              return this.bindControls(), {
                iframeContainer: m.a.tinymce.DOM.get( "rte" ),
                editorContainer: "wysiwyg",
                sizeContainer: void 0,
                deltaHeight: e.deltaHeight
              }
            },
            getInfo: () => ( {
              longname: "Confluence theme",
              author: "Atlassian",
              authorurl: "http://tinymce.moxiecode.com",
              version: `${m.a.tinymce.majorVersion}.${m.a.tinymce.minorVersion}`
            } ),
            bindControls() {
              const e = this,
                t = e.settings;
              m.a.tinymce.each( m.a.tinymce.explode( t.theme_advanced_buttons1 ), t => {
                if ( !e.createEditorButtons( t ) ) switch ( t ) {
                  case "formatselect":
                    e.createBlockFormats()
                }
              } ), e.bindControlHandlers(), e.renderToolbarButtons()
            },
            renderToolbarButtons() {
              const e = this;
              const t = {
                toolbar: "toolbar-primary",
                title: "",
                tooltip: "",
                cmd: "",
                className: "",
                locationGroup: null,
                weight: 1 / 0,
                onclick: null
              };
              let n = w()( this.editor.buttons, ( e, n ) => ( ( e = Object.assign( {}, t, e ) ).id = n, e.weight = A()( e.weight ) ? e.weight : 1 / 0, e ) );
              n = T()( n, e => !!e.locationGroup ), S()( [ "toolbar-primary" ], t => {
                const o = Object( B.default )( "." + t );
                let r = T()( n, {
                  toolbar: t
                } );
                r = R()( r, "weight" ), S()( r, t => {
                  e.createEditorButtons( t.id );
                  const n = o.find( "." + t.locationGroup ),
                    r = Object( B.default )( `<li id="${(i=t).id}" class="toolbar-item ${i.className}" data-tooltip="${i.tooltip}" data-weight="${i.weight}">\n                            <a class="toolbar-trigger aui-button" href="#" data-control-id="${i.id}">\n                                <span class="icon ${i.icon}"></span>\n                                <span class="trigger-text">${i.title}</span>\n                            </a>\n                        </li>` );
                  var i;
                  n.append( r ).removeClass( "hidden" )
                } )
              } )
            },
            createEditorButtons( e ) {
              const t = this.editor.buttons[ e ];
              if ( !t ) return !1;
              t.cmd ? this.controls[ e ] = t.cmd : this.controls[ e ] = {
                func: t.onclick,
                name: e
              }
            },
            bindControlHandlers() {
              const e = this;
              e.controlHandlers.buttons = {}, e.controlHandlers.buttons.state = new H, e.controlHandlers.buttons.click = new H, e.controlHandlers.buttons.click.add( t => {
                const n = e.controls[ t ];
                "string" === typeof n ? M( Object( j.b )().getEditor(), e.controls[ t ] ) : L( n ) && n.func()
              } )
            },
            createBlockFormats() {
              const e = this;
              e.controlHandlers.formatselect = {}, e.controlHandlers.formatselect.state = new H, e.controlHandlers.formatselect.click = new H, e.controlHandlers.formatselect.click.add( e => {
                M( Object( j.b )().getEditor(), "FormatBlock", !1, e )
              } )
            },
            createForeColorMenu: () => !0,
            _updateUndoStatus( e ) {
              const t = e.undoManager;
              this.controlHandlers.buttons.state.dispatch( "undo", "disabled", !t.hasUndo() && !t.typing ), this.controlHandlers.buttons.state.dispatch( "redo", "disabled", !t.hasRedo() )
            },
            nodeChanged( e, t, n, o, r ) {
              const i = this;
              m.a.tinymce.each( i.stateControls, t => {
                i.controlHandlers.buttons.state.dispatch( t, "active", !!D( e, i.controls[ t ] ) )
              } ), i._updateUndoStatus( e ), i.controlHandlers.buttons.state.dispatch( "outdent", "disabled", !D( e, "Outdent" ) );
              const a = function ( e ) {
                const t = r.parents;
                for ( let n = 0; n < t.length; n++ )
                  if ( e( t[ n ] ) ) return t[ n ]
              }( e.dom.isBlock );
              a && i.controlHandlers.formatselect.state.dispatch( a.nodeName.toLowerCase() )
            }
          };
          return {
            Editor: e,
            ThemeOptions: t
          }
        }();
        m.a.tinymce.create( "tinymce.themes.ConfluenceTheme", t.ThemeOptions ), m.a.tinymce.ThemeManager.add( "atlassian", m.a.tinymce.themes.ConfluenceTheme ), m.a.requestAnimFrame = m.a.requestAnimationFrame || m.a.webkitRequestAnimationFrame;
        const n = function () {
          const e = k.a,
            t = [ "compat3x", "auiwindowmanager", "table", "emotions", "confluence", "macroplaceholder", "customtoolbar", "insertwikimarkup", "propertypanel", "keyboardshortcuts", "confmonospace", "confcharmap", "lists", "conflist", "tasklist", "paste", "aePaste", "cursorTarget", "confluencecleanupplugin", "aeTable", "confluencepastetableplugin", "confluencepastemacroplugin", "pagelayoutplugin", "iosediting", "autoconvert", "confluencelist", "deletecommand", "draggable", "confluencesortabletablesplugin", "textplaceholders", "linkbrowser", "insertfiles", "tableAnalytics", "aetextpattern", "persit_scroll_position", "confindentation" ];
          return Object( _.E )( "confluence.table.resizable" ) && t.push( "tableContentWrapper" ), {
            autoresize_min_height: "100%",
            width: "100%",
            height: "100%",
            document_base_url: `${F}${k.a}/`,
            plugins: t.join( "," ),
            theme: "atlassian",
            theme_advanced_buttons1: "formatselect,bold,italic,underline,strikethrough,forecolor,separator,table,row_before,row_after,delete_row,col_before,col_after,delete_col,delete_table,separator,bullist,numlist,tasklist,outdent,indent,blockquote,justifyleft,justifycenter,justifyright,justifyfull,separator,sup,sub,separator,undo,redo,separator,confimage,conf_macro_browser,separator,code,customtoolbar,help,monospace,separator,searchreplace,linkbrowserButton",
            theme_advanced_toolbar_location: "top",
            theme_advanced_toolbar_align: "left",
            theme_advanced_resizing: !1,
            theme_advanced_resize_horizontal: !1,
            theme_advanced_statusbar_location: "none",
            theme_advanced_path: !1,
            theme_advanced_blockformats: "p,h1,h2,h3,h4,h5,h6,pre,blockquote",
            mode: "specific_textareas",
            editor_selector: "tinymce-editor",
            body_class: "aui-theme-default mceContentBody wiki-content",
            popup_css: !1,
            content_css: !1,
            editor_css: !1,
            custom_undo_redo: !0,
            custom_undo_redo_levels: 20,
            context_path: e,
            plugin_action_base_path: e + "/plugins/tinymce",
            editor_plugin_action_base_path: e + "/plugins/editor/tinymce",
            page_id: O.a.get( "page-id" ),
            draft_type: null,
            form_name: O.a.get( "form-name" ),
            space_key: encodeURI( O.a.get( "space-key" ) ),
            confluence_popup_width: 620,
            confluence_popup_height: 550,
            editor_id: "wysiwygTextarea",
            indent: !1,
            table_tab_navigation: !1,
            inline_boundaries: !1,
            indent_use_margin: !0,
            end_container_on_empty_block: !0
          }
        }();
        0 == n.page_id && ( n.page_id = null, n.draft_type = O.a.get( "draft-type" ) ), Object( j.a )().addBeforeInitCallback( e => {
          e.contentCssTags = m.a.document.querySelector( 'script[title="editor-css"]' ).innerHTML, e.language = O.a.get( "action-locale" ).replace( "_", "-" );
          const t = O.a.get( "min-editor-height" );
          t && ( e.autoresize_min_height = t )
        } );
        const o = !( O.a.get( "atlassian-account-id" ) && O.a.get( "confluence.prefs.editor.disable.autocomplete" ) );
        o && ( n.plugins += ",autocomplete,autocompletelink,autocompletemedia" ), n.locale = "object" == typeof e && void 0 !== e.locale ? e.locale : "", n.messages = "object" == typeof e && "object" == typeof e.messages ? e.messages : void 0;
        if ( !!O.a.get( "auto-start" ) ) {
          0,
          Object( y.b )( "rte-loaded", {
            editPermission: !0
          } );
          const e = m.a.document.getElementById( n.editor_id );Object( y.b )( "rte-initial-raw-content-ready", {
            title: O.a.get( "page-title" ) || O.a.get( "original-content-title" ) || "",
            editorContent: e.value,
            confRev: O.a.get( "conf-revision" ),
            syncRev: m.a.document.getElementById( "syncRev" ).value,
            syncRevSource: O.a.get( "sync-revision-source" )
          } ),
          Object( E.a )( "confluence.editor" ),
          o && ( n.plugins += ",autocompletemacro" );
          const t = "" + O.a.get( "page-id" ) == "0",
            r = function ( e, t ) {
              if ( "template" === e ) return U.a.createProfileForTemplateEditor();
              if ( "comment" === e ) return U.a.createProfileForCommentEditor(); {
                const e = {
                  versionComment: !t,
                  notifyWatchers: !t
                };
                return U.a.createProfileForPageEditor( e )
              }
            }( O.a.get( "content-type" ), t ).plugins.join( "," );r && ( n.plugins += "," + r ),
          Object( j.a )().preInitialise( n ),
          Object( j.a )().initialise(),
          Object( E.b )( "confluence.editor" )
        }
        else Object( j.a )().preInitialise( n )
      }
      var q = n( "IGvV" ),
        z = n( "k8+f" ),
        N = n( "DnRC" ),
        W = n( "lZ+S" );
      var $;
      let G = Object( q.b )( Object( _.E )( _.a ) ? () => Promise.all( [ n.e( "vendors~4134d62c" ), n.e( "editor-styles-adg3~dc51bad7" ) ] ).then( n.t.bind( null, "GA/f", 7 ) ) : () => Promise.all( [ n.e( "vendors~4134d62c" ), n.e( "editor-styles-legacy~dc51bad7" ) ] ).then( n.t.bind( null, "ZdR3", 7 ) ) )( $ = class extends r.Component {
        constructor( ...e ) {
          super( ...e ), Object( l.a )( this, "state", {
            loaded: !1
          } ), Object( l.a )( this, "_loadAtlassianTinymce", () => n.e( "atlassian-editor~dc51bad7" ).then( n.bind( null, "qrpA" ) ) ), Object( l.a )( this, "_loadAtlassianEditorPlugins", () => Promise.all( [ n.e( "vendors~4134d62c" ), n.e( "atlassian-editor-plugins~9f9b18d1" ) ] ).then( n.bind( null, "QEi/" ) ) ), Object( l.a )( this, "_loadMacroBrowserOverrides", () => n.e( "macro-browser-overrides~d16a5355" ).then( n.bind( null, "9S8K" ) ) ), Object( l.a )( this, "_loadOtherEditorFiles", () => {
            const {
              canEdit: e,
              onError: t
            } = this.props;
            g.a.require( W.a.EDITOR_LOADER, () => {
              Object( z.a )( {
                listener: "EditorLoader.js",
                globalProperty: "AJS.Confluence.EditorLoader"
              }, () => {
                m.a.AJS.Confluence.EditorLoader.load( this._successCallback, t, {
                  editPermission: e
                } ), Object( N.a )(), this._mount && this.setState( {
                  loaded: !0
                } )
              } )
            } )
          } ), Object( l.a )( this, "_loadEditor", e => {
            const {
              contentId: t,
              onStartPreloadEditor: n,
              isEditorNextEnabled: o
            } = e;
            n( t ), o ? Object( z.a )( {
              listener: "EditorLoader.js",
              globalProperty: "AJS"
            }, () => {
              this._loadAtlassianTinymce().then( () => this._loadAtlassianEditorPlugins().then( e => {
                e.default()
              } ) ).then( () => this._loadMacroBrowserOverrides().then( e => {
                e.default()
              } ) ).then( () => {
                this._loadOtherEditorFiles()
              } )
            } ) : this._loadOtherEditorFiles()
          } ), Object( l.a )( this, "_successCallback", () => {
            const {
              intl: e,
              onPreloadEditorFinish: t,
              onSuccess: n,
              contentId: o
            } = this.props;
            t( o ), "function" == typeof n && n(), Object( _.E )( _.e ) && ( Object( f.a )(), Object( h.a )(), J( {
              locale: e.locale,
              messages: e.messages
            } ) )
          } )
        }
        componentDidMount() {
          this._mount = !0, this._loadEditor( this.props )
        }
        shouldComponentUpdate( e, t ) {
          return !u()( e, this.props ) || !u()( t, this.state )
        }
        componentDidUpdate( e ) {
          const {
            contentId: t
          } = this.props;
          t !== e.contentId && this._loadEditor( this.props )
        }
        componentWillUnmount() {
          this._mount = !1
        }
        render() {
          return i.a.createElement( "div", {
            "data-test-id": this.state.loaded ? "tinymce-editor-loaded" : void 0
          } )
        }
      } ) || $;
      var Q = Object( b.g )( G );
      t.default = Object( a.connect )( e => ( {
        isEditorNextEnabled: Object( s.b )( e, "fd-87.editor.spa" )
      } ), e => ( {
        onStartPreloadEditor: t => e( Object( c.q )( {
          contentId: t
        } ) ),
        onPreloadEditorFinish: t => e( Object( c.p )( {
          contentId: t
        } ) )
      } ) )( e => i.a.createElement( Q, Object( o.a )( {}, e ) ) )
    },
    D49j: function ( e, t, n ) {
      var o = n( "zWgn" );
      e.exports = function ( e ) {
        return "function" == typeof e ? e : o
      }
    },
    DnRC: function ( e, t, n ) {
      "use strict";

      function o() {
        return Promise.all( [ n.e( "atlaskit~66e23772" ), n.e( "vendors~4134d62c" ), n.e( 0 ), n.e( 17 ), n.e( "initialize-editor-plugins~493df0b3" ) ] ).then( n.bind( null, "2kJU" ) ).then( ( {
          triggerEditorPluginsLoaded: e
        } ) => e() )
      }
      n.d( t, "a", ( function () {
        return o
      } ) )
    },
    JGxT: function ( e, t, n ) {
      "use strict";
      var o = n( "zWu7" );
      t.a = o.a
    },
    M2LZ: function ( e, t, n ) {
      "use strict";
      var o = n( "S2j0" );
      var r = {
          require: ( e, t ) => new Promise( n => {
            Object( o.a )( e, e => {
              n( e ), t && t( e )
            }, () => {
              0
            } )
          } )
        },
        i = n( "zjfJ" ),
        a = n( "Czhu" ),
        c = n( "ERkP" ),
        s = n.n( c );
      var l = function ( e, t ) {
        const n = Object( a.a )( {
          isBlocking: !0
        }, t );
        return t => {
          class r extends c.Component {
            constructor( ...e ) {
              super( ...e ), Object( i.a )( this, "state", {
                dependenciesLoaded: !1
              } ), Object( i.a )( this, "markAsLoaded", () => {
                this.mounted && this.setState( {
                  dependenciesLoaded: !0
                } )
              } )
            }
            componentDidMount() {
              this.mounted = !0, e && e.length > 0 ? Object( o.a )( e, this.markAsLoaded, () => {
                0
              } ) : this.markAsLoaded()
            }
            componentWillUnmount() {
              this.mounted = !1
            }
            render() {
              const {
                dependenciesLoaded: e
              } = this.state;
              return e || !n.isBlocking ? s.a.createElement( t, Object( a.a )( Object( a.a )( {}, this.props ), {}, {
                wrmDependenciesLoaded: e
              } ) ) : null
            }
          }
          return r.displayName = `WRMComponent(${t.displayName||t.name})`, r
        }
      };
      n.d( t, "a", ( function () {
        return r
      } ) ), n.d( t, "b", ( function () {
        return l
      } ) )
    },
    WHVE: function ( e, t, n ) {
      "use strict";
      var o = n( "Jygk" ),
        r = n.n( o ),
        i = n( "bfgX" ),
        a = n( "zWu7" ),
        c = n( "w19e" );
      const s = {
          Formatting: ".rte-toolbar-group-formatting",
          Style: ".rte-toolbar-group-style",
          Indentation: ".rte-toolbar-group-indentation",
          Lists: ".rte-toolbar-group-lists",
          Tasks: ".rte-toolbar-group-task-lists",
          Justification: ".rte-toolbar-group-justification",
          Links: ".rte-toolbar-group-link",
          Table: ".rte-toolbar-group-table",
          Insert: ".rte-toolbar-group-insert",
          Undo: ".rte-toolbar-group-undo",
          PageLayouts: "#page-layout-2-group",
          SearchReplace: ".rte-toolbar-group-searchreplace",
          Help: ".rte-toolbar-group-help"
        },
        l = ( e, t, n ) => {
          !1 === t && ( ( e, t ) => {
            Array.prototype.forEach.call( document.getElementById( e ).querySelectorAll( t ), e => {
              e.style.display = "none"
            } )
          } )( e, n )
        };
      var d = n( "bS8p" ),
        u = n( "5PxA" );
      const p = {
        atlassian: !0,
        keep_values: !0,
        convert_urls: !0,
        relative_urls: !1,
        remove_script_host: !1,
        button_tile_map: !0,
        gecko_spellcheck: !0,
        apply_source_formatting: !1,
        list_outdent_on_enter: !0,
        visual: !1,
        confluence_table_style: "confluenceTable",
        confluence_table_cell_style: "confluenceTd",
        confluence_table_heading_style: "confluenceTh",
        confluence_table_default_rows: 4,
        confluence_table_default_cols: 3,
        confluence_table_default_heading: !0,
        cleanup: !0,
        cleanup_on_startup: !0,
        fix_list_elements: !1,
        fix_table_elements: !0,
        valid_elements: "@[id|class|style|title|wysiwyg|dir<ltr?rtl|lang|xml::lang|onclick|ondblclick|onmousedown|onmouseup|onmouseover|onmousemove|onmouseout|onkeypress|onkeydown|onkeyup],a[*],strong/b,em/i,s,u,#p[align|user],-ol[type|compact],-ul[type|compact],li,br,img[imagetext|longdesc|usemap|src|border|alt=|title|hspace|vspace|width|height|align],-sub,-sup,-blockquote[cite|markup],-table[*],-tr[rowspan|width|height|align|valign|bgcolor|background|bordercolor],tbody,thead,tfoot,#td[colspan|rowspan|width|height|align|valign|bgcolor|background|bordercolor|scope],#th[colspan|rowspan|width|height|align|valign|scope],caption,div[*],span[*],-code,#pre[*],address,-h1,-h2,-h3,-h4,-h5,-h6,hr[size|noshade],-font[face|size|color],dd,dl,dt,cite,abbr,acronym,del[datetime|cite],ins[datetime|cite],object[classid|width|height|codebase|*],param[name|value],embed[type|width|height|src|*],map[name],area[shape|coords|href|alt|target],bdo,button,col[align|char|charoff|span|valign|width],colgroup[align|char|charoff|span|valign|width],dfn,fieldset,form[action|accept|accept-charset|enctype|method],input[accept|alt|checked|disabled|maxlength|name|readonly|size|src|type|value],kbd,label[for],legend,noscript,optgroup[label|disabled],option[disabled|label|selected|value],q[cite],samp,select[disabled|multiple|name|size],small,textarea[cols|rows|disabled|name|readonly],tt,var,big",
        extended_valid_elements: "img[*],time[class|datetime|contenteditable|onselectstart|unselectable|oncontrolselect]",
        formats: {
          alignleft: [ {
            selector: "p,h1,h2,h3,h4,h5,h6,td,th,div,ul,ol,li",
            styles: {
              textAlign: "left"
            }
          }, {
            selector: "img.confluence-embedded-image",
            classes: "image-left"
          }, {
            selector: "img,table",
            collapsed: !1,
            styles: {
              float: "left"
            }
          } ],
          aligncenter: [ {
            selector: "p,h1,h2,h3,h4,h5,h6,td,th,div,ul,ol,li",
            styles: {
              textAlign: "center"
            }
          }, {
            selector: "img.confluence-embedded-image",
            classes: "image-center"
          }, {
            selector: "table",
            collapsed: !1,
            styles: {
              marginLeft: "auto",
              marginRight: "auto"
            }
          } ],
          alignright: [ {
            selector: "p,h1,h2,h3,h4,h5,h6,td,th,div,ul,ol,li",
            styles: {
              textAlign: "right"
            }
          }, {
            selector: "img.confluence-embedded-image",
            classes: "image-right"
          }, {
            selector: "img,table",
            collapsed: !1,
            styles: {
              float: "right"
            }
          } ],
          underline: [ {
            inline: "u",
            remove: "all"
          }, {
            inline: "span",
            styles: {
              textDecoration: "underline"
            },
            exact: !0
          } ],
          strikethrough: [ {
            inline: "s",
            remove: "all"
          } ],
          removeformat: [ {
            selector: "h1,h2,h3,h4,h5,h6,pre",
            remove: "all",
            split: !0,
            expand: !1,
            block_expand: !0,
            deep: !0,
            block: "*"
          }, {
            selector: "address,article,b,big,blockquote,center,cite,code,date,dd,del,dfn,dl,dt,em,embed,font,footer,header,hgroup,i,ins,kbd,link,menu,nav,object,param,q,s,samp,script,section,small,strike,strong,style,sub,sup,time,tt,u,var",
            remove: "all",
            split: !0,
            expand: !1,
            block_expand: !0,
            deep: !0
          }, {
            selector: "span",
            attributes: [ "style", "class" ],
            remove: "empty",
            split: !0,
            expand: !1,
            deep: !0
          }, {
            selector: "table",
            attributes: [ "cellpadding", "cellspacing", "border" ],
            split: !1,
            expand: !1,
            deep: !0
          }, {
            selector: "*",
            attributes: [ "style", "color", "bgcolor", "title", "lang" ],
            split: !1,
            expand: !1,
            deep: !0
          } ]
        },
        forced_root_block: "p",
        force_p_newlines: !0,
        force_br_newlines: !1,
        padd_empty_with_br: !0,
        allow_unsafe_link_target: !0,
        paste_remove_styles_if_webkit: !1,
        object_resizing: !1
      };
      const m = {
        _tinyMceHasInit: !1,
        _beforeInitCallbacks: [],
        _tinymcePluginInits: [],
        _settings: null,
        isInitComplete: () => m._tinyMceHasInit,
        isEditorActive: () => !!( m.isInitComplete() && r.a.tinymce && r.a.tinymce.activeEditor ),
        onInit: () => {
          m._tinyMceHasInit = !0;
          const e = r.a.AJS.Rte.getEditor();
          e.getBody().classList.add( "notranslate" ), Object( i.b )( "init.rte", {
            editor: e
          } );
          if ( !1 !== a.a.get( "editor-auto-focus" ) ) {
            const t = r.a.document.getElementById( "content-title" );
            t && "" === t.value ? t.focus() : r.a.AJS.Rte.editorFocus( e )
          } else 0
        },
        addOnInitCallback: e => {
          if ( "function" != typeof e ) throw new Error( "Attempt made to register an oninit callback that is not a function. Received: " + e );
          m._tinyMceHasInit ? e() : Object( i.a )( "init.rte", e )
        },
        addBeforeInitCallback: e => {
          m._beforeInitCallbacks.push( e )
        },
        addTinyMcePluginInit: e => {
          m._tinymcePluginInits.push( e )
        },
        preInitialise: e => {
          m._settings = Object.assign( {}, p, e )
        },
        initialise: e => {
          if ( Object( c.a )( "confluence.editor.tinymce" ), !m._settings ) return void 0;
          e = Object.assign( {}, e );
          const t = Object.assign( {}, m._settings );
          r.a.AJS.Rte.isQuickEdit = e.isQuickEdit || !1, m._beforeInitCallbacks.forEach( e => {
            e( t )
          } ), Object( i.b )( "rte-pre-resolveplugins" );
          for ( let o = 0, r = m._tinymcePluginInits.length; o < r; o++ ) "function" == typeof m._tinymcePluginInits[ o ] && m._tinymcePluginInits[ o ]( t );
          ( ( e, t ) => {
            if ( !e ) return void 0;
            if ( void 0 === t ) return void r.a.tinymce.ScriptLoader.markDone( `${r.a.tinymce.baseURL}/langs/${e}.js` );
            const n = new RegExp( t[ "keyboard.shortcut.ctrl" ] + "+", "g" ),
              o = new RegExp( t[ "keyboard.shortcut.shift" ] + "+", "g" ),
              i = new RegExp( t[ "keyboard.shortcut.alt" ] + "+", "g" ),
              a = e => e.replace( n, "⌘" ).replace( o, "⇧" ).replace( i, t[ "keyboard.shortcut.option" ] ),
              c = {};
            Object.entries( t ).forEach( ( [ e, t ] ) => {
              r.a.tinymce.Env.mac && ( t = a( t ) ), c[ e ] = t
            } ), r.a.tinymce.EditorManager.addI18n( e, c );
            const s = {
              "propertypanel.links_goto": "tinymce.propertypanel.links.goto",
              "propertypanel.links_edit": "tinymce.propertypanel.links.edit",
              "propertypanel.links_unlink": "tinymce.propertypanel.links.unlink",
              "propertypanel.links_goto_disabled_tooltip": "tinymce.propertypanel.links.goto.disabled.tooltip",
              "propertypanel.links_edit_tooltip": "tinymce.propertypanel.links.edit.tooltip",
              "propertypanel.links_unlink_tooltip": "tinymce.propertypanel.links.unlink.tooltip",
              "propertypanel.images_small": "tinymce.propertypanel.images.small",
              "propertypanel.images_medium": "tinymce.propertypanel.images.medium",
              "propertypanel.images_large": "tinymce.propertypanel.images.large",
              "propertypanel.images_original": "tinymce.propertypanel.images.original",
              "propertypanel.images_border": "tinymce.propertypanel.images.border",
              "propertypanel.images_link_create": "tinymce.propertypanel.images.link.create",
              "propertypanel.images_link_edit": "tinymce.propertypanel.images.link.edit",
              "propertypanel.images_link_remove": "tinymce.propertypanel.images.link.remove",
              "propertypanel.images_link_create_tooltip": "tinymce.propertypanel.images.link.create.tooltip",
              "propertypanel.images_link_edit_tooltip": "tinymce.propertypanel.images.link.edit.tooltip",
              "propertypanel.images_link_remove_tooltip": "tinymce.propertypanel.images.link.remove.tooltip",
              "propertypanel.images_sizing_tooltip": "tinymce.propertypanel.images.sizing.tooltip",
              "propertypanel.images_small_tooltip": "tinymce.propertypanel.images.small.tooltip",
              "propertypanel.images_medium_tooltip": "tinymce.propertypanel.images.medium.tooltip",
              "propertypanel.images_large_tooltip": "tinymce.propertypanel.images.large.tooltip",
              "propertypanel.images_original_tooltip": "tinymce.propertypanel.images.original.tooltip",
              "propertypanel.images_thumbnail_tooltip": "tinymce.propertypanel.images.thumbnail.tooltip",
              "propertypanel.images_border_tooltip": "tinymce.propertypanel.images.border.tooltip"
            };
            let l;
            for ( l in s ) r.a.tinymce.EditorManager.i18n.data[ `${e}.${l}` ] = r.a.tinymce.translate( s[ l ] );
            r.a.tinymce.ScriptLoader.markDone( `${r.a.tinymce.baseURL}/langs/${e}.js` ), r.a.tinymce.Env.mac && Array.prototype.forEach.call( r.a.document.querySelectorAll( "#rte-toolbar .toolbar-item, #rte-toolbar .dropdown-item, #rte-savebar .aui-button" ), e => {
              const t = e.getAttribute( "title" ),
                n = e.dataset.tooltip;
              t && e.setAttribute( "title", a( t ) ), n && ( e.dataset.tooltip = a( n ) )
            } )
          } )( t.locale, t.messages ), ( ( e, t ) => {
            if ( !1 === t ) return void( document.getElementById( e ).style.display = "none" );
            let n;
            for ( n in t = t || {} ) t.hasOwnProperty( n ) && s[ n ] && l( e, t[ n ], s[ n ] )
          } )( "toolbar", e.toolbar );
          const n = [ "confluencecleanupplugin", "confluencepastetableplugin", "confluencepastemacroplugin", "confluencelist" ];
          e.excludePlugins = e.excludePlugins instanceof Array ? n.concat( e.excludePlugins ) : n, t.plugins = function ( e, t, n ) {
            let o = e.split( "," );
            return t.forEach( e => {
              o.indexOf( e ) < 0 && o.push( e )
            } ), o = o.filter( e => n.indexOf( e ) < 0 ), o.join( "," )
          }( t.plugins, e.plugins || [], e.excludePlugins ), t.setup = e.onInitialise, "page" !== a.a.get( "content-type" ) && "blogpost" !== a.a.get( "content-type" ) || ( t.iframe_attrs = {
            "data-gramm": !1
          } ), t.init_instance_callback = function ( e ) {
            Object( u.a )(), r.a.tinymce.FocusManager.isEditorUIElement = function ( e ) {
              let t = e,
                n = !1;
              for ( ; t; ) {
                if ( "rte-toolbar" === t.id ) {
                  n = !0;
                  break
                }
                t = t.parentElement
              }
              return n
            };
            try {
              const n = t.contentCssTags,
                o = e.getDoc().querySelectorAll( "head" );
              if ( void 0 === o[ 0 ] ) throw new Error( "No editor <head>" );
              o[ 0 ].innerHTML = n + o[ 0 ].innerHTML
            } catch ( n ) {}
            r.a.AJS.Rte.BootstrapManager.onInit( e ), d.a.editorResetContentChanged(), r.a.AJS.Rte.getEditorFrame().setAttribute( "tabindex", 100 ), r.a.tinymce.isIE && r.a.AJS.Rte.getEditorFrame().setAttribute( "hidefocus", "hidefocus" ), Object( c.b )( "confluence.editor.tinymce" ), Object( i.b )( "rte-ready" )
          }, r.a.tinymce.init( t )
        }
      };
      var b = m;
      n.d( t, "a", ( function () {
        return g
      } ) );
      const g = () => {
        void 0 !== r.a.AJS.Rte && void 0 === r.a.AJS.Rte.BootstrapManager && ( r.a.AJS.Rte.BootstrapManager = b )
      }
    },
    Zf7T: function ( e, t, n ) {
      "use strict";
      n.d( t, "a", ( function () {
        return i
      } ) ), n.d( t, "b", ( function () {
        return a
      } ) );
      var o = n( "Jygk" ),
        r = n.n( o );

      function i() {
        return r.a.AJS.Rte.BootstrapManager
      }

      function a() {
        return r.a.AJS.Rte
      }
    },
    bS8p: function ( e, t, n ) {
      "use strict";
      var o = n( "Jygk" ),
        r = n.n( o ),
        i = n( "jUyC" );
      t.a = {
        offset( e ) {
          const t = Object( i.default )( e ).offset(),
            n = Object( i.default )( r.a.tinymce.activeEditor.iframeElement ),
            o = n.offset(),
            a = n[ 0 ].contentWindow.document,
            c = Object( i.default )( r.a.tinymce.activeEditor.getBody() ),
            s = i.default.support.boxModel && a.documentElement.scrollTop || c.scrollTop(),
            l = i.default.support.boxModel && a.documentElement.scrollLeft || c.scrollLeft();
          return {
            top: t.top - s + o.top,
            left: t.left - l + o.left
          }
        },
        getSelectedText() {
          const e = r.a.tinymce.activeEditor.selection;
          return e.getRng().text || e.getSel() && e.getSel().toString && e.getSel().toString() || ""
        },
        setHtml( e ) {
          e && r.a.tinymce.activeEditor.setContent( e )
        },
        getHtml: () => "" + r.a.tinymce.activeEditor.getContent(),
        isEmpty() {
          const e = r.a.tinymce.activeEditor.getContent().replace( "&nbsp;", "" ).replace( "<br />", "" ).trim();
          return "<p></p>" === e || "" === e
        },
        editorHasContentChanged: () => r.a.tinymce.activeEditor.isDirty(),
        editorResetContentChanged() {
          r.a.tinymce.activeEditor.setDirty( !1 )
        },
        getChildIndex( e, t ) {
          const n = e.childNodes;
          for ( let o = 0, r = n.length; o < r; o++ )
            if ( n[ o ] == t ) return o;
          return -1
        }
      }
    },
    h4um: function ( e, t, n ) {
      e.exports = n( "9SCj" )
    },
    jGny: function ( e, t, n ) {
      "use strict";
      t.a = {
        createProfileForCommentEditor: function () {
          return {
            plugins: [ "searchreplace", "confluenceimagedialog", "autocompletemacro", "confluencemacrobrowser", "confluenceleavecomment", "confluencewatch", "autoresize", "Adg3Editor" ]
          }
        },
        createProfileForPageEditor: function ( e ) {
          const t = [ "searchreplace", "confluencedrafts", "confluenceimagedialog", "autocompletemacro", "confluencemacrobrowser", "flextofullsize", "referrer", "Adg3Editor", "fabric_migration" ];
          return e && e.versionComment && t.push( "confluenceversioncomment" ), e && e.notifyWatchers && t.push( "confluencenotifywatchers" ), {
            plugins: t
          }
        },
        createProfileForTemplateEditor: function () {
          return {
            plugins: [ "searchreplace", "confluenceimagedialog", "autocompletemacro", "confluencemacrobrowser", "confluenceleavetemplate", "flextofullsize", "confluencetemplateeditor", "Adg3Editor" ]
          }
        }
      }
    },
    "lZ+S": function ( e, t, n ) {
      "use strict";
      const o = [ "wr!confluence.web.resources:querystring", "wr!confluence.web.resources:navigator-context", "wr!com.atlassian.plugins.atlassian-connect-plugin:confluence-atlassian-connect-resources-v5" ];
      t.a = {
        CONNECT: o,
        EDITOR_LOADER: [ ...o, "wr!confluence.web.resources:breadcrumbs", "wr!com.atlassian.confluence.plugins.editor-loader:background-loading-editor", "wr!com.atlassian.confluence.plugins.quickedit:quick-edit-general", "wr!com.atlassian.confluence.plugins.quickedit:quick-comment-initial" ],
        CONFLUENCE_PREVIEWER: [ "wr!com.atlassian.confluence.plugins.confluence-previews:fallback-mode", "wrc!media-viewer" ],
        CONFLUENCE_SPACE_IA: [ "wr!com.atlassian.confluence.plugins.confluence-space-ia:link-dialog", "wr!com.atlassian.confluence.plugins.confluence-link-browser:link-browser", "wr!com.atlassian.confluence.plugins.confluence-link-browser:linkbrowser-css-resources" ]
      }
    },
    mGvo: function ( e, t, n ) {
      var o = n( "Dhk8" ),
        r = n( "tLQN" );
      e.exports = function ( e ) {
        return "number" == typeof e || r( e ) && "[object Number]" == o( e )
      }
    },
    mbB6: function ( e, t, n ) {
      var o = n( "H87J" ),
        r = n( "S3pA" ),
        i = n( "bFjY" ),
        a = n( "wxYD" );
      e.exports = function ( e, t ) {
        return ( a( e ) ? o : i )( e, r( t, 3 ) )
      }
    },
    sjzV: function ( e, t, n ) {
      var o = n( "Q4oW" );
      e.exports = function ( e, t ) {
        var n = [];
        return o( e, ( function ( e, o, r ) {
          t( e, o, r ) && n.push( e )
        } ) ), n
      }
    },
    u6DZ: function ( e, t, n ) {
      var o = n( "YpBQ" ),
        r = n( "eHpp" ),
        i = n( "R3TX" ),
        a = n( "R5u7" ),
        c = i( ( function ( e, t ) {
          if ( null == e ) return [];
          var n = t.length;
          return n > 1 && a( e, t[ 0 ], t[ 1 ] ) ? t = [] : n > 2 && a( t[ 0 ], t[ 1 ], t[ 2 ] ) && ( t = [ t[ 0 ] ] ), r( e, o( t, 1 ), [] )
        } ) );
      e.exports = c
    },
    w19e: function ( e, t, n ) {
      "use strict";
      n.d( t, "a", ( function () {
        return m
      } ) ), n.d( t, "b", ( function () {
        return b
      } ) );
      var o = n( "Jygk" ),
        r = n.n( o ),
        i = n( "bfgX" );
      let a = !1,
        c = "",
        s = {},
        l = {};
      const d = () => {
        if ( !a ) return;
        const e = ( () => {
          const e = {},
            t = {
              name: c,
              data: e
            },
            n = u.getEntriesByType( "measure" );
          for ( let o = 0; o < n.length; o++ ) {
            const t = n[ o ],
              r = t.name;
            s[ r ] && ( e[ r + ".startTime" ] = t.startTime, e[ r + ".duration" ] = t.duration )
          }
          return t
        } )();
        Object( i.b )( "analytics", e ), a = !1
      };
      let u = r.a.performance;
      const p = e => e + ".start";

      function m( e ) {
        ( e => {
          if ( !u || !u.mark || !s[ e ] ) return;
          a || ( a = !0 );
          const t = p( e );
          u.mark( t )
        } )( e )
      }

      function b( e ) {
        ( e => {
          if ( !u || !u.mark || !s[ e ] ) return;
          const t = p( e );
          if ( 0 === u.getEntriesByName( t, "mark" ).length ) return void r.a.console.warn( `Calling debugTimeEnd for ${e} before debugTime` );
          const n = ( e => e + ".end" )( e );
          u.mark( n ), u.measure( e, t, n ), l[ e ] && d()
        } )( e )
      }
    },
    zWu7: function ( e, t, n ) {
      "use strict";
      const o = {},
        r = {
          set( e, t ) {
            o[ e ] = t
          },
          get( e ) {
            if ( "undefined" != typeof document ) {
              const t = document.querySelector( `meta[name='ajs-${e}']` );
              if ( t ) {
                return function ( e ) {
                  const t = "string" == typeof e ? e.toLowerCase() : "";
                  return "true" === t || "false" !== t && e
                }( t.content )
              }
              return o[ e ]
            }
          },
          getBoolean( e ) {
            return !0 === this.get( e )
          },
          getNumber( e ) {
            return +this.get( e )
          },
          getAllAsMap() {
            const e = {};
            if ( !document.querySelectorAll.length ) return e;
            const t = document.querySelectorAll( "meta[name^=ajs-]" );
            if ( t )
              for ( let n = 0; n < t.length; n++ ) e[ t[ n ].name.substring( 4 ) ] = t[ n ].content;
            return Object.assign( e, o )
          }
        };
      t.a = r
    }
  }
] );
//# sourceMappingURL=72.YCcNX4YaoG.js.map
