( window.webpackJsonp = window.webpackJsonp || [] ).push( [
  [ 8 ], {
    "/0Vt": function ( t, e, n ) {
      "use strict";
      var r;
      n.d( e, "a", ( function () {
          return i
        } ) ), n.d( e, "b", ( function () {
          return o
        } ) ),
        function ( t ) {
          t.DEFAULT = "DEFAULT", t.SPECIAL = "SPECIAL", t.APP = "APP"
        }( r || ( r = {} ) );
      const i = {
          inline: !0,
          group: "inline",
          selectable: !0,
          attrs: {
            id: {
              default: ""
            },
            text: {
              default: ""
            },
            accessLevel: {
              default: ""
            },
            userType: {
              default: null
            }
          },
          parseDOM: [ {
            tag: "span[data-mention-id]",
            getAttrs: t => {
              const e = t,
                n = {
                  id: e.getAttribute( "data-mention-id" ) || i.attrs.id.default,
                  text: e.textContent || i.attrs.text.default,
                  accessLevel: e.getAttribute( "data-access-level" ) || i.attrs.accessLevel.default
                },
                o = e.getAttribute( "data-user-type" );
              return r[ o ] && ( n.userType = o ), n
            }
          } ],
          toDOM( t ) {
            const {
              id: e,
              accessLevel: n,
              text: r,
              userType: i
            } = t.attrs, o = {
              "data-mention-id": e,
              "data-access-level": n,
              contenteditable: "false"
            };
            return i && ( o[ "data-user-type" ] = i ), [ "span", o, r ]
          }
        },
        o = t => ( {
          attrs: Object.keys( t.attrs ).reduce( ( e, n ) => ( ( t => [ "userType" ].indexOf( t ) > -1 )( n ) && !t.attrs[ n ] || ( e[ n ] = t.attrs[ n ] ), e ), {} )
        } )
    },
    "/KhQ": function ( t, e, n ) {
      "use strict";
      n.d( e, "a", ( function () {
        return o
      } ) );
      var r = n( "ljyt" );
      const i = [ "strong" ],
        o = {
          inclusive: !0,
          group: r.c,
          parseDOM: [ {
            tag: "strong"
          }, {
            tag: "b",
            getAttrs: t => "normal" !== t.style.fontWeight && null
          }, {
            tag: "span",
            getAttrs( t ) {
              const e = t,
                {
                  fontWeight: n
                } = e.style;
              return "string" == typeof n && ( "bold" === n || "bolder" === n || /^(bold(er)?|[5-9]\d{2,})$/.test( n ) ) && null
            }
          } ],
          toDOM: () => i
        }
    },
    "25UG": function ( t, e, n ) {
      "use strict";
      var r;
      n.d( e, "a", ( function () {
          return r
        } ) ), n.d( e, "b", ( function () {
          return i
        } ) ), n.d( e, "c", ( function () {
          return o
        } ) ),
        function ( t ) {
          t.INFO = "info", t.NOTE = "note", t.TIP = "tip", t.WARNING = "warning", t.ERROR = "error", t.SUCCESS = "success", t.CUSTOM = "custom"
        }( r || ( r = {} ) );
      const i = {
          group: "block",
          content: "(paragraph | heading | bulletList | orderedList | blockCard)+",
          marks: "unsupportedMark unsupportedNodeAttribute",
          attrs: {
            panelType: {
              default: "info"
            },
            panelIcon: {
              default: null
            },
            panelColor: {
              default: null
            }
          },
          parseDOM: [ {
            tag: "div[data-panel-type]",
            getAttrs: t => ( {
              panelType: t.getAttribute( "data-panel-type" ),
              panelIcon: t.getAttribute( "data-panel-icon" ),
              panelColor: t.getAttribute( "data-panel-color" )
            } )
          } ],
          toDOM( t ) {
            const {
              panelType: e,
              panelIcon: n,
              panelColor: r
            } = t.attrs;
            return [ "div", {
                "data-panel-type": e,
                "data-panel-icon": n,
                "data-panel-color": r
              },
              [ "div", {}, 0 ]
            ]
          }
        },
        o = {
          group: "block",
          content: "(paragraph | heading | bulletList | orderedList | blockCard)+",
          marks: "unsupportedMark unsupportedNodeAttribute",
          attrs: {
            panelType: {
              default: "info"
            }
          },
          parseDOM: [ {
            tag: "div[data-panel-type]",
            getAttrs: t => ( {
              panelType: t.getAttribute( "data-panel-type" )
            } )
          } ],
          toDOM( t ) {
            const {
              panelType: e
            } = t.attrs;
            return [ "div", {
                "data-panel-type": e
              },
              [ "div", {}, 0 ]
            ]
          }
        }
    },
    "3Bi3": function ( t, e, n ) {
      "use strict";
      n.d( e, "a", ( function () {
        return i
      } ) );
      var r = n( "ljyt" );
      const i = {
        excludes: `${r.c} ${r.e} ${r.f} ${r.b}`,
        inclusive: !0,
        parseDOM: [ {
          tag: "span.code",
          preserveWhitespace: !0
        }, {
          tag: "code",
          preserveWhitespace: !0
        }, {
          tag: "tt",
          preserveWhitespace: !0
        }, {
          tag: "span",
          preserveWhitespace: !0,
          getAttrs: t => {
            let e = t;
            return ( "pre" === e.style.whiteSpace || !!( e.style.fontFamily && e.style.fontFamily.toLowerCase().indexOf( "monospace" ) >= 0 ) ) && {}
          }
        } ],
        toDOM: () => [ "span", {
          style: "white-space: pre-wrap;",
          class: "code",
          spellcheck: "false"
        } ]
      }
    },
    "41mA": function ( t, e, n ) {
      "use strict";
      n.d( e, "a", ( function () {
        return o
      } ) );
      var r = n( "ljyt" );
      const i = [ "em" ],
        o = {
          inclusive: !0,
          group: r.c,
          parseDOM: [ {
            tag: "i"
          }, {
            tag: "em"
          }, {
            style: "font-style=italic"
          } ],
          toDOM: () => i
        }
    },
    "49w7": function ( t, e, n ) {
      "use strict";
      n.d( e, "a", ( function () {
        return r
      } ) );
      const r = {
        inline: !0,
        group: "inline",
        selectable: !1,
        marks: "",
        attrs: {
          text: {
            default: ""
          }
        },
        parseDOM: [ {
          tag: "span[data-placeholder]",
          getAttrs: t => ( {
            text: t.getAttribute( "data-placeholder" ) || r.attrs.text.default
          } )
        } ],
        toDOM( t ) {
          const {
            text: e
          } = t.attrs;
          return [ "span", {
            "data-placeholder": e,
            contenteditable: "true"
          }, e ]
        }
      }
    },
    "5rvf": function ( t, e, n ) {
      "use strict";
      n.d( e, "a", ( function () {
        return s
      } ) ), n.d( e, "b", ( function () {
        return u
      } ) ), n.d( e, "c", ( function () {
        return c
      } ) );
      var r = n( "ljyt" ),
        i = n( "HCLf" );
      const o = [
          [ i.o, "Light gray" ],
          [ i.r, "Purple" ],
          [ i.B, "Teal" ],
          [ i.g, "Green" ],
          [ i.w, "Red" ],
          [ i.G, "Orange" ]
        ],
        a = [
          [ i.a, "Blue" ],
          [ i.B, "Teal" ],
          [ i.g, "Green" ],
          [ i.F, "Yellow" ],
          [ i.w, "Red" ],
          [ i.r, "Purple" ],
          [ i.o, "Light gray" ],
          [ i.d, "Dark blue" ],
          [ i.D, "Dark teal" ],
          [ i.i, "Dark green" ],
          [ i.G, "Orange" ],
          [ i.y, "Dark red" ],
          [ i.t, "Dark purple" ],
          [ i.k, "White" ],
          [ i.e, "Light blue" ],
          [ i.E, "Light teal" ],
          [ i.j, "Light green" ],
          [ i.I, "Light yellow" ],
          [ i.z, "Light red" ],
          [ i.s, "Light purple" ]
        ],
        s = new Map,
        u = new Map;
      o.forEach( ( [ t, e ] ) => s.set( t.toLowerCase(), e ) ), a.forEach( ( [ t, e ] ) => u.set( t.toLowerCase(), e ) );
      const c = {
        attrs: {
          color: {}
        },
        inclusive: !0,
        group: r.b,
        parseDOM: [ {
          style: "color",
          getAttrs: t => {
            const e = t;
            let n;
            return e.match( /^rgb/i ) ? n = Object( i.L )( e ) : "#" === e[ 0 ] && ( n = e.toLowerCase() ), !( !n || !s.has( n ) && !u.has( n ) ) && {
              color: n
            }
          }
        } ],
        toDOM: t => [ "span", {
          style: "color: " + t.attrs.color
        } ]
      }
    },
    "634R": function ( t, e, n ) {
      "use strict";

      function r( t ) {
        return {
          title: t.getAttribute( "data-title" ),
          __expanded: !0
        }
      }
      n.d( e, "a", ( function () {
        return i
      } ) ), n.d( e, "b", ( function () {
        return o
      } ) );
      const i = {
          inline: !1,
          group: "block",
          marks: "link unsupportedMark unsupportedNodeAttribute",
          content: "(paragraph | panel | blockquote | orderedList | bulletList | rule | heading | codeBlock | mediaGroup | mediaSingle | decisionList | taskList | table | blockCard | embedCard | extension | unsupportedBlock)+",
          isolating: !0,
          selectable: !0,
          attrs: {
            title: {
              default: ""
            },
            __expanded: {
              default: !0
            }
          },
          parseDOM: [ {
            context: "table//",
            tag: 'div[data-node-type="expand"]',
            getAttrs: r
          }, {
            context: "expand//",
            tag: '[data-node-type="expand"]',
            skip: !0
          }, {
            context: "nestedExpand//",
            tag: '[data-node-type="expand"]',
            skip: !0
          }, {
            tag: '[data-node-type="nestedExpand"] button',
            ignore: !0
          }, {
            tag: '[data-node-type="expand"] button',
            ignore: !0
          }, {
            tag: 'div[data-node-type="expand"]',
            getAttrs: r
          } ],
          toDOM: t => [ "div", {
            "data-node-type": "expand",
            "data-title": t.attrs.title,
            "data-expanded": t.attrs.__expanded
          }, 0 ]
        },
        o = t => ( {
          attrs: Object.keys( t.attrs ).filter( t => !t.startsWith( "__" ) ).reduce( ( e, n ) => ( e[ n ] = t.attrs[ n ], e ), {} )
        } )
    },
    "6Laz": function ( t, e, n ) {
      "use strict";
      n.d( e, "b", ( function () {
        return a
      } ) ), n.d( e, "a", ( function () {
        return s
      } ) );
      var r = n( "25UG" ),
        i = n( "y6Ns" );
      const o = {
          nodes: [ "doc", "paragraph", "text", "bulletList", "orderedList", "listItem", "heading", "blockquote", "codeBlock", "panel", "rule", "image", "mention", "caption", "media", "mediaGroup", "mediaSingle", "confluenceUnsupportedBlock", "confluenceUnsupportedInline", "confluenceJiraIssue", "expand", "nestedExpand", "extension", "inlineExtension", "bodiedExtension", "hardBreak", "emoji", "table", "tableCell", "tableHeader", "tableRow", "decisionList", "decisionItem", "taskList", "taskItem", "unknownBlock", "date", "status", "placeholder", "layoutSection", "layoutColumn", "inlineCard", "blockCard", "embedCard", "unsupportedBlock", "unsupportedInline" ],
          marks: [ "link", "em", "strong", "strike", "subsup", "underline", "code", "textColor", "confluenceInlineComment", "breakout", "alignment", "indentation", "annotation", "unsupportedMark", "unsupportedNodeAttribute", "typeAheadQuery" ]
        },
        a = ( t = "final" ) => ( "stage0" === t && ( o.customNodeSpecs = {
          panel: r.b
        } ), Object( i.a )( o ) ),
        s = a()
    },
    "7EA0": function ( t, e ) {
      t.exports = /[\0-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/
    },
    "9bXU": function ( t, e, n ) {
      "use strict";
      n.d( e, "a", ( function () {
        return r
      } ) );
      const r = {
        inclusive: !0,
        group: n( "ljyt" ).c,
        parseDOM: [ {
          tag: "strike"
        }, {
          tag: "s"
        }, {
          tag: "del"
        }, {
          style: "text-decoration",
          getAttrs: t => "line-through" === t && null
        } ],
        toDOM: () => [ "s" ]
      }
    },
    ArAF: function ( t, e, n ) {
      "use strict";
      n.d( e, "a", ( function () {
        return r
      } ) ), n.d( e, "b", ( function () {
        return o
      } ) );
      const r = () => "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace( /[xy]/g, t => {
        const e = 16 * Math.random() | 0;
        return ( "x" === t ? e : 3 & e | 8 ).toString( 16 )
      } );
      let i = !1;
      const o = {
        setStatic( t ) {
          i = t
        },
        generate: () => i || r()
      }
    },
    C3UR: function ( t, e, n ) {
      "use strict";
      n.d( e, "a", ( function () {
        return i
      } ) );
      const r = [ "wide", "full-width" ],
        i = {
          spanning: !1,
          inclusive: !1,
          parseDOM: [ {
            tag: "div.fabric-editor-breakout-mark",
            getAttrs( t ) {
              const e = t.getAttribute( "data-mode" );
              return {
                mode: -1 === r.indexOf( e || "" ) ? "wide" : e
              }
            }
          } ],
          attrs: {
            mode: {
              default: "wide"
            }
          },
          toDOM: t => [ "div", {
            class: "fabric-editor-breakout-mark",
            "data-mode": t.attrs.mode
          }, 0 ]
        }
    },
    Ckiu: function ( t, e ) {
      t.exports = /[ \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000]/
    },
    DGm0: function ( t, e, n ) {
      "use strict";
      n.d( e, "a", ( function () {
        return r
      } ) );
      const r = {
        inline: !0,
        group: "inline",
        selectable: !0,
        attrs: {
          timestamp: {
            default: ""
          }
        },
        parseDOM: [ {
          tag: 'span[data-node-type="date"]',
          getAttrs: t => ( {
            timestamp: t.getAttribute( "data-timestamp" )
          } )
        } ],
        toDOM: t => [ "span", {
          "data-node-type": "date",
          "data-timestamp": t.attrs.timestamp
        } ]
      }
    },
    DPgy: function ( t, e, n ) {
      "use strict";
      n.d( e, "b", ( function () {
        return i
      } ) ), n.d( e, "a", ( function () {
        return s
      } ) ), n.d( e, "c", ( function () {
        return l
      } ) );
      var r = n( "HCLf" );
      const i = {
        selectable: !0,
        attrs: o = {
          id: {
            default: ""
          },
          type: {
            default: "file"
          },
          collection: {
            default: ""
          },
          occurrenceKey: {
            default: null
          },
          alt: {
            default: null
          },
          width: {
            default: null
          },
          height: {
            default: null
          },
          url: {
            default: null
          },
          __fileName: {
            default: null
          },
          __fileSize: {
            default: null
          },
          __fileMimeType: {
            default: null
          },
          __displayType: {
            default: null
          },
          __contextId: {
            default: null
          },
          __external: {
            default: !1
          }
        },
        parseDOM: [ {
          tag: 'div[data-node-type="media"]',
          getAttrs: t => {
            const e = {};
            o && Object.keys( o ).forEach( n => {
              const r = a( n ).replace( /^__/, "" ),
                i = t.getAttribute( "data-" + r ) || "";
              i && ( e[ n ] = i )
            } ), e.__fileSize && ( e.__fileSize = +e.__fileSize );
            const n = Number( e.width );
            void 0 === n || isNaN( n ) || ( e.width = n );
            const r = Number( e.height );
            return void 0 === r || isNaN( r ) || ( e.height = r ), e
          }
        }, {
          tag: 'img[src^="data:image"]',
          ignore: !0
        }, {
          tag: "img:not(.smart-link-icon)",
          getAttrs: t => ( {
            type: "external",
            url: t.getAttribute( "src" ) || "",
            alt: t.getAttribute( "alt" ) || ""
          } )
        } ],
        toDOM( t ) {
          const e = {
            "data-id": t.attrs.id,
            "data-node-type": "media",
            "data-type": t.attrs.type,
            "data-collection": t.attrs.collection,
            "data-occurrence-key": t.attrs.occurrenceKey,
            "data-width": t.attrs.width,
            "data-height": t.attrs.height,
            "data-url": t.attrs.url,
            "data-alt": t.attrs.alt,
            title: "Attachment",
            style: `display: inline-block; border-radius: 3px; background: ${r.m}; box-shadow: 0 1px 1px rgba(9, 30, 66, 0.2), 0 0 1px 0 rgba(9, 30, 66, 0.24);`
          };
          return s( t.attrs, e, t => "data-" + a( t.slice( 2 ) ) ), [ "div", e ]
        }
      };
      var o;
      const a = t => t.replace( /([^A-Z]+)([A-Z])/g, ( t, e, n ) => `${e}-${n.toLowerCase()}` ),
        s = ( t, e, n ) => {
          i.attrs && Object.keys( i.attrs ).forEach( r => {
            "_" === r[ 0 ] && "_" === r[ 1 ] && t[ r ] && ( e[ n ? n( r ) : r ] = t[ r ] )
          } )
        },
        u = [ "occurrenceKey", "width", "height", "url", "alt" ],
        c = [ "type", "url", "width", "height", "alt" ],
        l = t => ( {
          attrs: Object.keys( t.attrs ).filter( t => !( "_" === t[ 0 ] && "_" === t[ 1 ] ) ).reduce( ( e, n ) => "external" === t.attrs.type && -1 === c.indexOf( n ) || u.indexOf( n ) > -1 && ( null === t.attrs[ n ] || "" === t.attrs[ n ] ) ? e : -1 !== [ "width", "height" ].indexOf( n ) ? ( e[ n ] = Number( t.attrs[ n ] ), e ) : ( e[ n ] = t.attrs[ n ], e ), {} )
        } )
    },
    DyvO: function ( t, e, n ) {
      "use strict";
      n.d( e, "a", ( function () {
        return r
      } ) );
      const r = {
        inline: !0,
        group: "inline",
        selectable: !0,
        draggable: !0,
        attrs: {
          url: {
            default: null
          },
          data: {
            default: null
          }
        },
        parseDOM: [ {
          tag: "a[data-inline-card], span[data-inline-card]",
          priority: 100,
          getAttrs: t => {
            const e = t,
              n = e.getAttribute( "data-card-data" );
            return {
              url: e.getAttribute( "href" ) || e.getAttribute( "data-card-url" ) || null,
              data: n ? JSON.parse( n ) : null
            }
          }
        }, {
          tag: "div[data-inline-card]",
          getAttrs: t => {
            const e = t,
              n = e.getAttribute( "data-card-data" );
            return {
              url: e.getAttribute( "data-card-url" ),
              data: n ? JSON.parse( n ) : null
            }
          }
        } ],
        toDOM( t ) {
          const e = {
            "data-inline-card": "",
            href: t.attrs.url || "",
            "data-card-data": t.attrs.data ? JSON.stringify( t.attrs.data ) : ""
          };
          return t.attrs.url ? [ "a", e, t.attrs.url ] : [ "a", e ]
        }
      }
    },
    ErTH: function ( t, e, n ) {
      "use strict";
      n.d( e, "a", ( function () {
        return r
      } ) );
      const r = {
        inline: !1,
        marks: "link unsupportedMark unsupportedNodeAttribute",
        content: "(paragraph | heading | mediaSingle | mediaGroup | unsupportedBlock)+",
        isolating: !0,
        selectable: !0,
        attrs: {
          title: {
            default: ""
          },
          __expanded: {
            default: !0
          }
        },
        parseDOM: [ {
          context: "nestedExpand//",
          tag: '[data-node-type="nestedExpand"]',
          skip: !0
        }, {
          tag: '[data-node-type="nestedExpand"] button',
          ignore: !0
        }, {
          tag: '[data-node-type="expand"] button',
          ignore: !0
        }, {
          tag: 'div[data-node-type="nestedExpand"]',
          getAttrs: t => ( {
            title: t.getAttribute( "data-title" ),
            __expanded: !0
          } )
        } ],
        toDOM: t => [ "div", {
          "data-node-type": "nestedExpand",
          "data-title": t.attrs.title,
          "data-expanded": t.attrs.__expanded
        }, 0 ]
      }
    },
    HCLf: function ( t, e, n ) {
      "use strict";
      n.d( e, "x", ( function () {
        return o
      } ) ), n.d( e, "z", ( function () {
        return a
      } ) ), n.d( e, "v", ( function () {
        return s
      } ) ), n.d( e, "w", ( function () {
        return u
      } ) ), n.d( e, "y", ( function () {
        return c
      } ) ), n.d( e, "H", ( function () {
        return l
      } ) ), n.d( e, "I", ( function () {
        return p
      } ) ), n.d( e, "F", ( function () {
        return d
      } ) ), n.d( e, "G", ( function () {
        return f
      } ) ), n.d( e, "h", ( function () {
        return h
      } ) ), n.d( e, "j", ( function () {
        return m
      } ) ), n.d( e, "f", ( function () {
        return g
      } ) ), n.d( e, "g", ( function () {
        return y
      } ) ), n.d( e, "i", ( function () {
        return v
      } ) ), n.d( e, "c", ( function () {
        return b
      } ) ), n.d( e, "e", ( function () {
        return x
      } ) ), n.d( e, "a", ( function () {
        return k
      } ) ), n.d( e, "b", ( function () {
        return _
      } ) ), n.d( e, "d", ( function () {
        return w
      } ) ), n.d( e, "k", ( function () {
        return A
      } ) ), n.d( e, "l", ( function () {
        return D
      } ) ), n.d( e, "m", ( function () {
        return O
      } ) ), n.d( e, "n", ( function () {
        return C
      } ) ), n.d( e, "o", ( function () {
        return M
      } ) ), n.d( e, "p", ( function () {
        return F
      } ) ), n.d( e, "s", ( function () {
        return S
      } ) ), n.d( e, "u", ( function () {
        return E
      } ) ), n.d( e, "q", ( function () {
        return z
      } ) ), n.d( e, "r", ( function () {
        return N
      } ) ), n.d( e, "t", ( function () {
        return T
      } ) ), n.d( e, "C", ( function () {
        return I
      } ) ), n.d( e, "E", ( function () {
        return j
      } ) ), n.d( e, "A", ( function () {
        return B
      } ) ), n.d( e, "B", ( function () {
        return R
      } ) ), n.d( e, "D", ( function () {
        return L
      } ) ), n.d( e, "J", ( function () {
        return P
      } ) ), n.d( e, "L", ( function () {
        return J
      } ) ), n.d( e, "K", ( function () {
        return $
      } ) );
      var r = n( "XE1N" ),
        i = n.t( "XE1N", 1 );
      const o = "#FFEBE6",
        a = "#FFBDAD",
        s = "#FF8F73",
        u = "#FF5630",
        c = "#BF2600",
        l = "#FFFAE6",
        p = "#FFF0B3",
        d = "#FFC400",
        f = "#FF991F",
        h = "#E3FCEF",
        m = "#ABF5D1",
        g = "#57D9A3",
        y = "#36B37E",
        v = "#006644",
        b = "#DEEBFF",
        x = "#B3D4FF",
        k = "#4C9AFF",
        _ = "#0052CC",
        w = "#0747A6",
        A = "#FFFFFF",
        D = "#F4F5F7",
        O = "#EBECF0",
        C = "#B3BAC5",
        M = "#97A0AF",
        F = "#172B4D",
        S = "#EAE6FF",
        E = "#C0B6F2",
        z = "#998DD9",
        N = "#6554C0",
        T = "#403294",
        I = "#E6FCFF",
        j = "#B3F5FF",
        B = "#79E2F2",
        R = "#00B8D9",
        L = "#008DA6";

      function P( t, e ) {
        let n = function ( t, e ) {
          if ( !t ) return null;
          if ( q( t = t.trim().toLowerCase() ) ) 4 === t.length && ( t = t.split( "" ).map( t => "#" === t ? "#" : `${t}${t}` ).join( "" ) );
          else {
            if ( $( t ) ) return J( t );
            if ( r && r[ t ] ) t = r[ t ];
            else {
              if ( !i || !i[ t ] ) return null;
              t = i[ t ]
            }
          }
          return t === e ? null : t
        }( t );
        if ( !n ) return null;
        return `rgba(${(t=>t.match(/[a-z0-9]{2}/gi).map(t=>parseInt(t,16)))(n).concat(e).join(",")})`
      }

      function J( t ) {
        const e = t.match( /(0?\.?\d{1,3})%?\b/g );
        if ( e && e.length >= 3 ) {
          const [ t, n, r ] = e.map( Number );
          return "#" + ( r | n << 8 | t << 16 | 1 << 24 ).toString( 16 ).slice( 1 )
        }
        return null
      }

      function $( t ) {
        return /rgba?\(/.test( t )
      }

      function q( t ) {
        return /^#([A-Fa-f0-9]{3}){1,2}$/.test( t )
      }
    },
    I9T1: function ( t, e, n ) {
      "use strict";

      function r( t ) {
        this.content = t
      }
      n.r( e ), r.prototype = {
        constructor: r,
        find: function ( t ) {
          for ( var e = 0; e < this.content.length; e += 2 )
            if ( this.content[ e ] === t ) return e;
          return -1
        },
        get: function ( t ) {
          var e = this.find( t );
          return -1 == e ? void 0 : this.content[ e + 1 ]
        },
        update: function ( t, e, n ) {
          var i = n && n != t ? this.remove( n ) : this,
            o = i.find( t ),
            a = i.content.slice();
          return -1 == o ? a.push( n || t, e ) : ( a[ o + 1 ] = e, n && ( a[ o ] = n ) ), new r( a )
        },
        remove: function ( t ) {
          var e = this.find( t );
          if ( -1 == e ) return this;
          var n = this.content.slice();
          return n.splice( e, 2 ), new r( n )
        },
        addToStart: function ( t, e ) {
          return new r( [ t, e ].concat( this.remove( t ).content ) )
        },
        addToEnd: function ( t, e ) {
          var n = this.remove( t ).content.slice();
          return n.push( t, e ), new r( n )
        },
        addBefore: function ( t, e, n ) {
          var i = this.remove( e ),
            o = i.content.slice(),
            a = i.find( t );
          return o.splice( -1 == a ? o.length : a, 0, e, n ), new r( o )
        },
        forEach: function ( t ) {
          for ( var e = 0; e < this.content.length; e += 2 ) t( this.content[ e ], this.content[ e + 1 ] )
        },
        prepend: function ( t ) {
          return ( t = r.from( t ) ).size ? new r( t.content.concat( this.subtract( t ).content ) ) : this
        },
        append: function ( t ) {
          return ( t = r.from( t ) ).size ? new r( this.subtract( t ).content.concat( t.content ) ) : this
        },
        subtract: function ( t ) {
          var e = this;
          t = r.from( t );
          for ( var n = 0; n < t.content.length; n += 2 ) e = e.remove( t.content[ n ] );
          return e
        },
        get size() {
          return this.content.length >> 1
        }
      }, r.from = function ( t ) {
        if ( t instanceof r ) return t;
        var e = [];
        if ( t )
          for ( var n in t ) e.push( n, t[ n ] );
        return new r( e )
      };
      var i = r;
      n.d( e, "ContentMatch", ( function () {
        return N
      } ) ), n.d( e, "DOMParser", ( function () {
        return tt
      } ) ), n.d( e, "DOMSerializer", ( function () {
        return pt
      } ) ), n.d( e, "Fragment", ( function () {
        return o
      } ) ), n.d( e, "Mark", ( function () {
        return l
      } ) ), n.d( e, "MarkType", ( function () {
        return Q
      } ) ), n.d( e, "Node", ( function () {
        return F
      } ) ), n.d( e, "NodeRange", ( function () {
        return O
      } ) ), n.d( e, "NodeType", ( function () {
        return V
      } ) ), n.d( e, "ReplaceError", ( function () {
        return p
      } ) ), n.d( e, "ResolvedPos", ( function () {
        return k
      } ) ), n.d( e, "Schema", ( function () {
        return X
      } ) ), n.d( e, "Slice", ( function () {
        return d
      } ) );
      var o = function ( t, e ) {
          if ( this.content = t, this.size = e || 0, null == e )
            for ( var n = 0; n < t.length; n++ ) this.size += t[ n ].nodeSize
        },
        a = {
          firstChild: {
            configurable: !0
          },
          lastChild: {
            configurable: !0
          },
          childCount: {
            configurable: !0
          }
        };
      o.prototype.nodesBetween = function ( t, e, n, r, i ) {
        void 0 === r && ( r = 0 );
        for ( var o = 0, a = 0; a < e; o++ ) {
          var s = this.content[ o ],
            u = a + s.nodeSize;
          if ( u > t && !1 !== n( s, r + a, i, o ) && s.content.size ) {
            var c = a + 1;
            s.nodesBetween( Math.max( 0, t - c ), Math.min( s.content.size, e - c ), n, r + c )
          }
          a = u
        }
      }, o.prototype.descendants = function ( t ) {
        this.nodesBetween( 0, this.size, t )
      }, o.prototype.textBetween = function ( t, e, n, r ) {
        var i = "",
          o = !0;
        return this.nodesBetween( t, e, ( function ( a, s ) {
          a.isText ? ( i += a.text.slice( Math.max( t, s ) - s, e - s ), o = !n ) : a.isLeaf && r ? ( i += r, o = !n ) : !o && a.isBlock && ( i += n, o = !0 )
        } ), 0 ), i
      }, o.prototype.append = function ( t ) {
        if ( !t.size ) return this;
        if ( !this.size ) return t;
        var e = this.lastChild,
          n = t.firstChild,
          r = this.content.slice(),
          i = 0;
        for ( e.isText && e.sameMarkup( n ) && ( r[ r.length - 1 ] = e.withText( e.text + n.text ), i = 1 ); i < t.content.length; i++ ) r.push( t.content[ i ] );
        return new o( r, this.size + t.size )
      }, o.prototype.cut = function ( t, e ) {
        if ( null == e && ( e = this.size ), 0 == t && e == this.size ) return this;
        var n = [],
          r = 0;
        if ( e > t )
          for ( var i = 0, a = 0; a < e; i++ ) {
            var s = this.content[ i ],
              u = a + s.nodeSize;
            u > t && ( ( a < t || u > e ) && ( s = s.isText ? s.cut( Math.max( 0, t - a ), Math.min( s.text.length, e - a ) ) : s.cut( Math.max( 0, t - a - 1 ), Math.min( s.content.size, e - a - 1 ) ) ), n.push( s ), r += s.nodeSize ), a = u
          }
        return new o( n, r )
      }, o.prototype.cutByIndex = function ( t, e ) {
        return t == e ? o.empty : 0 == t && e == this.content.length ? this : new o( this.content.slice( t, e ) )
      }, o.prototype.replaceChild = function ( t, e ) {
        var n = this.content[ t ];
        if ( n == e ) return this;
        var r = this.content.slice(),
          i = this.size + e.nodeSize - n.nodeSize;
        return r[ t ] = e, new o( r, i )
      }, o.prototype.addToStart = function ( t ) {
        return new o( [ t ].concat( this.content ), this.size + t.nodeSize )
      }, o.prototype.addToEnd = function ( t ) {
        return new o( this.content.concat( t ), this.size + t.nodeSize )
      }, o.prototype.eq = function ( t ) {
        if ( this.content.length != t.content.length ) return !1;
        for ( var e = 0; e < this.content.length; e++ )
          if ( !this.content[ e ].eq( t.content[ e ] ) ) return !1;
        return !0
      }, a.firstChild.get = function () {
        return this.content.length ? this.content[ 0 ] : null
      }, a.lastChild.get = function () {
        return this.content.length ? this.content[ this.content.length - 1 ] : null
      }, a.childCount.get = function () {
        return this.content.length
      }, o.prototype.child = function ( t ) {
        var e = this.content[ t ];
        if ( !e ) throw new RangeError( "Index " + t + " out of range for " + this );
        return e
      }, o.prototype.maybeChild = function ( t ) {
        return this.content[ t ]
      }, o.prototype.forEach = function ( t ) {
        for ( var e = 0, n = 0; e < this.content.length; e++ ) {
          var r = this.content[ e ];
          t( r, n, e ), n += r.nodeSize
        }
      }, o.prototype.findDiffStart = function ( t, e ) {
        return void 0 === e && ( e = 0 ),
          function t( e, n, r ) {
            for ( var i = 0;; i++ ) {
              if ( i == e.childCount || i == n.childCount ) return e.childCount == n.childCount ? null : r;
              var o = e.child( i ),
                a = n.child( i );
              if ( o != a ) {
                if ( !o.sameMarkup( a ) ) return r;
                if ( o.isText && o.text != a.text ) {
                  for ( var s = 0; o.text[ s ] == a.text[ s ]; s++ ) r++;
                  return r
                }
                if ( o.content.size || a.content.size ) {
                  var u = t( o.content, a.content, r + 1 );
                  if ( null != u ) return u
                }
                r += o.nodeSize
              } else r += o.nodeSize
            }
          }( this, t, e )
      }, o.prototype.findDiffEnd = function ( t, e, n ) {
        return void 0 === e && ( e = this.size ), void 0 === n && ( n = t.size ),
          function t( e, n, r, i ) {
            for ( var o = e.childCount, a = n.childCount;; ) {
              if ( 0 == o || 0 == a ) return o == a ? null : {
                a: r,
                b: i
              };
              var s = e.child( --o ),
                u = n.child( --a ),
                c = s.nodeSize;
              if ( s != u ) {
                if ( !s.sameMarkup( u ) ) return {
                  a: r,
                  b: i
                };
                if ( s.isText && s.text != u.text ) {
                  for ( var l = 0, p = Math.min( s.text.length, u.text.length ); l < p && s.text[ s.text.length - l - 1 ] == u.text[ u.text.length - l - 1 ]; ) l++, r--, i--;
                  return {
                    a: r,
                    b: i
                  }
                }
                if ( s.content.size || u.content.size ) {
                  var d = t( s.content, u.content, r - 1, i - 1 );
                  if ( d ) return d
                }
                r -= c, i -= c
              } else r -= c, i -= c
            }
          }( this, t, e, n )
      }, o.prototype.findIndex = function ( t, e ) {
        if ( void 0 === e && ( e = -1 ), 0 == t ) return u( 0, t );
        if ( t == this.size ) return u( this.content.length, t );
        if ( t > this.size || t < 0 ) throw new RangeError( "Position " + t + " outside of fragment (" + this + ")" );
        for ( var n = 0, r = 0;; n++ ) {
          var i = r + this.child( n ).nodeSize;
          if ( i >= t ) return i == t || e > 0 ? u( n + 1, i ) : u( n, r );
          r = i
        }
      }, o.prototype.toString = function () {
        return "<" + this.toStringInner() + ">"
      }, o.prototype.toStringInner = function () {
        return this.content.join( ", " )
      }, o.prototype.toJSON = function () {
        return this.content.length ? this.content.map( ( function ( t ) {
          return t.toJSON()
        } ) ) : null
      }, o.fromJSON = function ( t, e ) {
        if ( !e ) return o.empty;
        if ( !Array.isArray( e ) ) throw new RangeError( "Invalid input for Fragment.fromJSON" );
        return new o( e.map( t.nodeFromJSON ) )
      }, o.fromArray = function ( t ) {
        if ( !t.length ) return o.empty;
        for ( var e, n = 0, r = 0; r < t.length; r++ ) {
          var i = t[ r ];
          n += i.nodeSize, r && i.isText && t[ r - 1 ].sameMarkup( i ) ? ( e || ( e = t.slice( 0, r ) ), e[ e.length - 1 ] = i.withText( e[ e.length - 1 ].text + i.text ) ) : e && e.push( i )
        }
        return new o( e || t, n )
      }, o.from = function ( t ) {
        if ( !t ) return o.empty;
        if ( t instanceof o ) return t;
        if ( Array.isArray( t ) ) return this.fromArray( t );
        if ( t.attrs ) return new o( [ t ], t.nodeSize );
        throw new RangeError( "Can not convert " + t + " to a Fragment" + ( t.nodesBetween ? " (looks like multiple versions of prosemirror-model were loaded)" : "" ) )
      }, Object.defineProperties( o.prototype, a );
      var s = {
        index: 0,
        offset: 0
      };

      function u( t, e ) {
        return s.index = t, s.offset = e, s
      }

      function c( t, e ) {
        if ( t === e ) return !0;
        if ( !t || "object" != typeof t || !e || "object" != typeof e ) return !1;
        var n = Array.isArray( t );
        if ( Array.isArray( e ) != n ) return !1;
        if ( n ) {
          if ( t.length != e.length ) return !1;
          for ( var r = 0; r < t.length; r++ )
            if ( !c( t[ r ], e[ r ] ) ) return !1
        } else {
          for ( var i in t )
            if ( !( i in e ) || !c( t[ i ], e[ i ] ) ) return !1;
          for ( var o in e )
            if ( !( o in t ) ) return !1
        }
        return !0
      }
      o.empty = new o( [], 0 );
      var l = function ( t, e ) {
        this.type = t, this.attrs = e
      };

      function p( t ) {
        var e = Error.call( this, t );
        return e.__proto__ = p.prototype, e
      }
      l.prototype.addToSet = function ( t ) {
        for ( var e, n = !1, r = 0; r < t.length; r++ ) {
          var i = t[ r ];
          if ( this.eq( i ) ) return t;
          if ( this.type.excludes( i.type ) ) e || ( e = t.slice( 0, r ) );
          else {
            if ( i.type.excludes( this.type ) ) return t;
            !n && i.type.rank > this.type.rank && ( e || ( e = t.slice( 0, r ) ), e.push( this ), n = !0 ), e && e.push( i )
          }
        }
        return e || ( e = t.slice() ), n || e.push( this ), e
      }, l.prototype.removeFromSet = function ( t ) {
        for ( var e = 0; e < t.length; e++ )
          if ( this.eq( t[ e ] ) ) return t.slice( 0, e ).concat( t.slice( e + 1 ) );
        return t
      }, l.prototype.isInSet = function ( t ) {
        for ( var e = 0; e < t.length; e++ )
          if ( this.eq( t[ e ] ) ) return !0;
        return !1
      }, l.prototype.eq = function ( t ) {
        return this == t || this.type == t.type && c( this.attrs, t.attrs )
      }, l.prototype.toJSON = function () {
        var t = {
          type: this.type.name
        };
        for ( var e in this.attrs ) {
          t.attrs = this.attrs;
          break
        }
        return t
      }, l.fromJSON = function ( t, e ) {
        if ( !e ) throw new RangeError( "Invalid input for Mark.fromJSON" );
        var n = t.marks[ e.type ];
        if ( !n ) throw new RangeError( "There is no mark type " + e.type + " in this schema" );
        return n.create( e.attrs )
      }, l.sameSet = function ( t, e ) {
        if ( t == e ) return !0;
        if ( t.length != e.length ) return !1;
        for ( var n = 0; n < t.length; n++ )
          if ( !t[ n ].eq( e[ n ] ) ) return !1;
        return !0
      }, l.setFrom = function ( t ) {
        if ( !t || 0 == t.length ) return l.none;
        if ( t instanceof l ) return [ t ];
        var e = t.slice();
        return e.sort( ( function ( t, e ) {
          return t.type.rank - e.type.rank
        } ) ), e
      }, l.none = [], p.prototype = Object.create( Error.prototype ), p.prototype.constructor = p, p.prototype.name = "ReplaceError";
      var d = function ( t, e, n ) {
          this.content = t, this.openStart = e, this.openEnd = n
        },
        f = {
          size: {
            configurable: !0
          }
        };

      function h( t, e, n ) {
        if ( n.openStart > t.depth ) throw new p( "Inserted content deeper than insertion position" );
        if ( t.depth - n.openStart != e.depth - n.openEnd ) throw new p( "Inconsistent open depths" );
        return function t( e, n, r, i ) {
          var a = e.index( i ),
            s = e.node( i );
          if ( a == n.index( i ) && i < e.depth - r.openStart ) {
            var u = t( e, n, r, i + 1 );
            return s.copy( s.content.replaceChild( a, u ) )
          }
          if ( r.content.size ) {
            if ( r.openStart || r.openEnd || e.depth != i || n.depth != i ) {
              var c = function ( t, e ) {
                  for ( var n = e.depth - t.openStart, r = e.node( n ).copy( t.content ), i = n - 1; i >= 0; i-- ) r = e.node( i ).copy( o.from( r ) );
                  return {
                    start: r.resolveNoCache( t.openStart + n ),
                    end: r.resolveNoCache( r.content.size - t.openEnd - n )
                  }
                }( r, e ),
                l = c.start,
                p = c.end;
              return b( s, function t( e, n, r, i, a ) {
                var s = e.depth > a && g( e, n, a + 1 ),
                  u = i.depth > a && g( r, i, a + 1 ),
                  c = [];
                v( null, e, a, c ), s && u && n.index( a ) == r.index( a ) ? ( m( s, u ), y( b( s, t( e, n, r, i, a + 1 ) ), c ) ) : ( s && y( b( s, x( e, n, a + 1 ) ), c ), v( n, r, a, c ), u && y( b( u, x( r, i, a + 1 ) ), c ) );
                return v( i, null, a, c ), new o( c )
              }( e, l, p, n, i ) )
            }
            var d = e.parent,
              f = d.content;
            return b( d, f.cut( 0, e.parentOffset ).append( r.content ).append( f.cut( n.parentOffset ) ) )
          }
          return b( s, x( e, n, i ) )
        }( t, e, n, 0 )
      }

      function m( t, e ) {
        if ( !e.type.compatibleContent( t.type ) ) throw new p( "Cannot join " + e.type.name + " onto " + t.type.name )
      }

      function g( t, e, n ) {
        var r = t.node( n );
        return m( r, e.node( n ) ), r
      }

      function y( t, e ) {
        var n = e.length - 1;
        n >= 0 && t.isText && t.sameMarkup( e[ n ] ) ? e[ n ] = t.withText( e[ n ].text + t.text ) : e.push( t )
      }

      function v( t, e, n, r ) {
        var i = ( e || t ).node( n ),
          o = 0,
          a = e ? e.index( n ) : i.childCount;
        t && ( o = t.index( n ), t.depth > n ? o++ : t.textOffset && ( y( t.nodeAfter, r ), o++ ) );
        for ( var s = o; s < a; s++ ) y( i.child( s ), r );
        e && e.depth == n && e.textOffset && y( e.nodeBefore, r )
      }

      function b( t, e ) {
        if ( !t.type.validContent( e ) ) throw new p( "Invalid content for node " + t.type.name );
        return t.copy( e )
      }

      function x( t, e, n ) {
        var r = [];
        ( v( null, t, n, r ), t.depth > n ) && y( b( g( t, e, n + 1 ), x( t, e, n + 1 ) ), r );
        return v( e, null, n, r ), new o( r )
      }
      f.size.get = function () {
        return this.content.size - this.openStart - this.openEnd
      }, d.prototype.insertAt = function ( t, e ) {
        var n = function t( e, n, r, i ) {
          var o = e.findIndex( n ),
            a = o.index,
            s = o.offset,
            u = e.maybeChild( a );
          if ( s == n || u.isText ) return i && !i.canReplace( a, a, r ) ? null : e.cut( 0, n ).append( r ).append( e.cut( n ) );
          var c = t( u.content, n - s - 1, r );
          return c && e.replaceChild( a, u.copy( c ) )
        }( this.content, t + this.openStart, e, null );
        return n && new d( n, this.openStart, this.openEnd )
      }, d.prototype.removeBetween = function ( t, e ) {
        return new d( function t( e, n, r ) {
          var i = e.findIndex( n ),
            o = i.index,
            a = i.offset,
            s = e.maybeChild( o ),
            u = e.findIndex( r ),
            c = u.index,
            l = u.offset;
          if ( a == n || s.isText ) {
            if ( l != r && !e.child( c ).isText ) throw new RangeError( "Removing non-flat range" );
            return e.cut( 0, n ).append( e.cut( r ) )
          }
          if ( o != c ) throw new RangeError( "Removing non-flat range" );
          return e.replaceChild( o, s.copy( t( s.content, n - a - 1, r - a - 1 ) ) )
        }( this.content, t + this.openStart, e + this.openStart ), this.openStart, this.openEnd )
      }, d.prototype.eq = function ( t ) {
        return this.content.eq( t.content ) && this.openStart == t.openStart && this.openEnd == t.openEnd
      }, d.prototype.toString = function () {
        return this.content + "(" + this.openStart + "," + this.openEnd + ")"
      }, d.prototype.toJSON = function () {
        if ( !this.content.size ) return null;
        var t = {
          content: this.content.toJSON()
        };
        return this.openStart > 0 && ( t.openStart = this.openStart ), this.openEnd > 0 && ( t.openEnd = this.openEnd ), t
      }, d.fromJSON = function ( t, e ) {
        if ( !e ) return d.empty;
        var n = e.openStart || 0,
          r = e.openEnd || 0;
        if ( "number" != typeof n || "number" != typeof r ) throw new RangeError( "Invalid input for Slice.fromJSON" );
        return new d( o.fromJSON( t, e.content ), n, r )
      }, d.maxOpen = function ( t, e ) {
        void 0 === e && ( e = !0 );
        for ( var n = 0, r = 0, i = t.firstChild; i && !i.isLeaf && ( e || !i.type.spec.isolating ); i = i.firstChild ) n++;
        for ( var o = t.lastChild; o && !o.isLeaf && ( e || !o.type.spec.isolating ); o = o.lastChild ) r++;
        return new d( t, n, r )
      }, Object.defineProperties( d.prototype, f ), d.empty = new d( o.empty, 0, 0 );
      var k = function ( t, e, n ) {
          this.pos = t, this.path = e, this.depth = e.length / 3 - 1, this.parentOffset = n
        },
        _ = {
          parent: {
            configurable: !0
          },
          doc: {
            configurable: !0
          },
          textOffset: {
            configurable: !0
          },
          nodeAfter: {
            configurable: !0
          },
          nodeBefore: {
            configurable: !0
          }
        };
      k.prototype.resolveDepth = function ( t ) {
        return null == t ? this.depth : t < 0 ? this.depth + t : t
      }, _.parent.get = function () {
        return this.node( this.depth )
      }, _.doc.get = function () {
        return this.node( 0 )
      }, k.prototype.node = function ( t ) {
        return this.path[ 3 * this.resolveDepth( t ) ]
      }, k.prototype.index = function ( t ) {
        return this.path[ 3 * this.resolveDepth( t ) + 1 ]
      }, k.prototype.indexAfter = function ( t ) {
        return t = this.resolveDepth( t ), this.index( t ) + ( t != this.depth || this.textOffset ? 1 : 0 )
      }, k.prototype.start = function ( t ) {
        return 0 == ( t = this.resolveDepth( t ) ) ? 0 : this.path[ 3 * t - 1 ] + 1
      }, k.prototype.end = function ( t ) {
        return t = this.resolveDepth( t ), this.start( t ) + this.node( t ).content.size
      }, k.prototype.before = function ( t ) {
        if ( !( t = this.resolveDepth( t ) ) ) throw new RangeError( "There is no position before the top-level node" );
        return t == this.depth + 1 ? this.pos : this.path[ 3 * t - 1 ]
      }, k.prototype.after = function ( t ) {
        if ( !( t = this.resolveDepth( t ) ) ) throw new RangeError( "There is no position after the top-level node" );
        return t == this.depth + 1 ? this.pos : this.path[ 3 * t - 1 ] + this.path[ 3 * t ].nodeSize
      }, _.textOffset.get = function () {
        return this.pos - this.path[ this.path.length - 1 ]
      }, _.nodeAfter.get = function () {
        var t = this.parent,
          e = this.index( this.depth );
        if ( e == t.childCount ) return null;
        var n = this.pos - this.path[ this.path.length - 1 ],
          r = t.child( e );
        return n ? t.child( e ).cut( n ) : r
      }, _.nodeBefore.get = function () {
        var t = this.index( this.depth ),
          e = this.pos - this.path[ this.path.length - 1 ];
        return e ? this.parent.child( t ).cut( 0, e ) : 0 == t ? null : this.parent.child( t - 1 )
      }, k.prototype.posAtIndex = function ( t, e ) {
        e = this.resolveDepth( e );
        for ( var n = this.path[ 3 * e ], r = 0 == e ? 0 : this.path[ 3 * e - 1 ] + 1, i = 0; i < t; i++ ) r += n.child( i ).nodeSize;
        return r
      }, k.prototype.marks = function () {
        var t = this.parent,
          e = this.index();
        if ( 0 == t.content.size ) return l.none;
        if ( this.textOffset ) return t.child( e ).marks;
        var n = t.maybeChild( e - 1 ),
          r = t.maybeChild( e );
        if ( !n ) {
          var i = n;
          n = r, r = i
        }
        for ( var o = n.marks, a = 0; a < o.length; a++ ) !1 !== o[ a ].type.spec.inclusive || r && o[ a ].isInSet( r.marks ) || ( o = o[ a-- ].removeFromSet( o ) );
        return o
      }, k.prototype.marksAcross = function ( t ) {
        var e = this.parent.maybeChild( this.index() );
        if ( !e || !e.isInline ) return null;
        for ( var n = e.marks, r = t.parent.maybeChild( t.index() ), i = 0; i < n.length; i++ ) !1 !== n[ i ].type.spec.inclusive || r && n[ i ].isInSet( r.marks ) || ( n = n[ i-- ].removeFromSet( n ) );
        return n
      }, k.prototype.sharedDepth = function ( t ) {
        for ( var e = this.depth; e > 0; e-- )
          if ( this.start( e ) <= t && this.end( e ) >= t ) return e;
        return 0
      }, k.prototype.blockRange = function ( t, e ) {
        if ( void 0 === t && ( t = this ), t.pos < this.pos ) return t.blockRange( this );
        for ( var n = this.depth - ( this.parent.inlineContent || this.pos == t.pos ? 1 : 0 ); n >= 0; n-- )
          if ( t.pos <= this.end( n ) && ( !e || e( this.node( n ) ) ) ) return new O( this, t, n )
      }, k.prototype.sameParent = function ( t ) {
        return this.pos - this.parentOffset == t.pos - t.parentOffset
      }, k.prototype.max = function ( t ) {
        return t.pos > this.pos ? t : this
      }, k.prototype.min = function ( t ) {
        return t.pos < this.pos ? t : this
      }, k.prototype.toString = function () {
        for ( var t = "", e = 1; e <= this.depth; e++ ) t += ( t ? "/" : "" ) + this.node( e ).type.name + "_" + this.index( e - 1 );
        return t + ":" + this.parentOffset
      }, k.resolve = function ( t, e ) {
        if ( !( e >= 0 && e <= t.content.size ) ) throw new RangeError( "Position " + e + " out of range" );
        for ( var n = [], r = 0, i = e, o = t;; ) {
          var a = o.content.findIndex( i ),
            s = a.index,
            u = a.offset,
            c = i - u;
          if ( n.push( o, s, r + u ), !c ) break;
          if ( ( o = o.child( s ) ).isText ) break;
          i = c - 1, r += u + 1
        }
        return new k( e, n, i )
      }, k.resolveCached = function ( t, e ) {
        for ( var n = 0; n < w.length; n++ ) {
          var r = w[ n ];
          if ( r.pos == e && r.doc == t ) return r
        }
        var i = w[ A ] = k.resolve( t, e );
        return A = ( A + 1 ) % D, i
      }, Object.defineProperties( k.prototype, _ );
      var w = [],
        A = 0,
        D = 12,
        O = function ( t, e, n ) {
          this.$from = t, this.$to = e, this.depth = n
        },
        C = {
          start: {
            configurable: !0
          },
          end: {
            configurable: !0
          },
          parent: {
            configurable: !0
          },
          startIndex: {
            configurable: !0
          },
          endIndex: {
            configurable: !0
          }
        };
      C.start.get = function () {
        return this.$from.before( this.depth + 1 )
      }, C.end.get = function () {
        return this.$to.after( this.depth + 1 )
      }, C.parent.get = function () {
        return this.$from.node( this.depth )
      }, C.startIndex.get = function () {
        return this.$from.index( this.depth )
      }, C.endIndex.get = function () {
        return this.$to.indexAfter( this.depth )
      }, Object.defineProperties( O.prototype, C );
      var M = Object.create( null ),
        F = function ( t, e, n, r ) {
          this.type = t, this.attrs = e, this.content = n || o.empty, this.marks = r || l.none
        },
        S = {
          nodeSize: {
            configurable: !0
          },
          childCount: {
            configurable: !0
          },
          textContent: {
            configurable: !0
          },
          firstChild: {
            configurable: !0
          },
          lastChild: {
            configurable: !0
          },
          isBlock: {
            configurable: !0
          },
          isTextblock: {
            configurable: !0
          },
          inlineContent: {
            configurable: !0
          },
          isInline: {
            configurable: !0
          },
          isText: {
            configurable: !0
          },
          isLeaf: {
            configurable: !0
          },
          isAtom: {
            configurable: !0
          }
        };
      S.nodeSize.get = function () {
        return this.isLeaf ? 1 : 2 + this.content.size
      }, S.childCount.get = function () {
        return this.content.childCount
      }, F.prototype.child = function ( t ) {
        return this.content.child( t )
      }, F.prototype.maybeChild = function ( t ) {
        return this.content.maybeChild( t )
      }, F.prototype.forEach = function ( t ) {
        this.content.forEach( t )
      }, F.prototype.nodesBetween = function ( t, e, n, r ) {
        void 0 === r && ( r = 0 ), this.content.nodesBetween( t, e, n, r, this )
      }, F.prototype.descendants = function ( t ) {
        this.nodesBetween( 0, this.content.size, t )
      }, S.textContent.get = function () {
        return this.textBetween( 0, this.content.size, "" )
      }, F.prototype.textBetween = function ( t, e, n, r ) {
        return this.content.textBetween( t, e, n, r )
      }, S.firstChild.get = function () {
        return this.content.firstChild
      }, S.lastChild.get = function () {
        return this.content.lastChild
      }, F.prototype.eq = function ( t ) {
        return this == t || this.sameMarkup( t ) && this.content.eq( t.content )
      }, F.prototype.sameMarkup = function ( t ) {
        return this.hasMarkup( t.type, t.attrs, t.marks )
      }, F.prototype.hasMarkup = function ( t, e, n ) {
        return this.type == t && c( this.attrs, e || t.defaultAttrs || M ) && l.sameSet( this.marks, n || l.none )
      }, F.prototype.copy = function ( t ) {
        return void 0 === t && ( t = null ), t == this.content ? this : new this.constructor( this.type, this.attrs, t, this.marks )
      }, F.prototype.mark = function ( t ) {
        return t == this.marks ? this : new this.constructor( this.type, this.attrs, this.content, t )
      }, F.prototype.cut = function ( t, e ) {
        return 0 == t && e == this.content.size ? this : this.copy( this.content.cut( t, e ) )
      }, F.prototype.slice = function ( t, e, n ) {
        if ( void 0 === e && ( e = this.content.size ), void 0 === n && ( n = !1 ), t == e ) return d.empty;
        var r = this.resolve( t ),
          i = this.resolve( e ),
          o = n ? 0 : r.sharedDepth( e ),
          a = r.start( o ),
          s = r.node( o ).content.cut( r.pos - a, i.pos - a );
        return new d( s, r.depth - o, i.depth - o )
      }, F.prototype.replace = function ( t, e, n ) {
        return h( this.resolve( t ), this.resolve( e ), n )
      }, F.prototype.nodeAt = function ( t ) {
        for ( var e = this;; ) {
          var n = e.content.findIndex( t ),
            r = n.index,
            i = n.offset;
          if ( !( e = e.maybeChild( r ) ) ) return null;
          if ( i == t || e.isText ) return e;
          t -= i + 1
        }
      }, F.prototype.childAfter = function ( t ) {
        var e = this.content.findIndex( t ),
          n = e.index,
          r = e.offset;
        return {
          node: this.content.maybeChild( n ),
          index: n,
          offset: r
        }
      }, F.prototype.childBefore = function ( t ) {
        if ( 0 == t ) return {
          node: null,
          index: 0,
          offset: 0
        };
        var e = this.content.findIndex( t ),
          n = e.index,
          r = e.offset;
        if ( r < t ) return {
          node: this.content.child( n ),
          index: n,
          offset: r
        };
        var i = this.content.child( n - 1 );
        return {
          node: i,
          index: n - 1,
          offset: r - i.nodeSize
        }
      }, F.prototype.resolve = function ( t ) {
        return k.resolveCached( this, t )
      }, F.prototype.resolveNoCache = function ( t ) {
        return k.resolve( this, t )
      }, F.prototype.rangeHasMark = function ( t, e, n ) {
        var r = !1;
        return e > t && this.nodesBetween( t, e, ( function ( t ) {
          return n.isInSet( t.marks ) && ( r = !0 ), !r
        } ) ), r
      }, S.isBlock.get = function () {
        return this.type.isBlock
      }, S.isTextblock.get = function () {
        return this.type.isTextblock
      }, S.inlineContent.get = function () {
        return this.type.inlineContent
      }, S.isInline.get = function () {
        return this.type.isInline
      }, S.isText.get = function () {
        return this.type.isText
      }, S.isLeaf.get = function () {
        return this.type.isLeaf
      }, S.isAtom.get = function () {
        return this.type.isAtom
      }, F.prototype.toString = function () {
        if ( this.type.spec.toDebugString ) return this.type.spec.toDebugString( this );
        var t = this.type.name;
        return this.content.size && ( t += "(" + this.content.toStringInner() + ")" ), z( this.marks, t )
      }, F.prototype.contentMatchAt = function ( t ) {
        var e = this.type.contentMatch.matchFragment( this.content, 0, t );
        if ( !e ) throw new Error( "Called contentMatchAt on a node with invalid content" );
        return e
      }, F.prototype.canReplace = function ( t, e, n, r, i ) {
        void 0 === n && ( n = o.empty ), void 0 === r && ( r = 0 ), void 0 === i && ( i = n.childCount );
        var a = this.contentMatchAt( t ).matchFragment( n, r, i ),
          s = a && a.matchFragment( this.content, e );
        if ( !s || !s.validEnd ) return !1;
        for ( var u = r; u < i; u++ )
          if ( !this.type.allowsMarks( n.child( u ).marks ) ) return !1;
        return !0
      }, F.prototype.canReplaceWith = function ( t, e, n, r ) {
        if ( r && !this.type.allowsMarks( r ) ) return !1;
        var i = this.contentMatchAt( t ).matchType( n ),
          o = i && i.matchFragment( this.content, e );
        return !!o && o.validEnd
      }, F.prototype.canAppend = function ( t ) {
        return t.content.size ? this.canReplace( this.childCount, this.childCount, t.content ) : this.type.compatibleContent( t.type )
      }, F.prototype.check = function () {
        if ( !this.type.validContent( this.content ) ) throw new RangeError( "Invalid content for node " + this.type.name + ": " + this.content.toString().slice( 0, 50 ) );
        this.content.forEach( ( function ( t ) {
          return t.check()
        } ) )
      }, F.prototype.toJSON = function () {
        var t = {
          type: this.type.name
        };
        for ( var e in this.attrs ) {
          t.attrs = this.attrs;
          break
        }
        return this.content.size && ( t.content = this.content.toJSON() ), this.marks.length && ( t.marks = this.marks.map( ( function ( t ) {
          return t.toJSON()
        } ) ) ), t
      }, F.fromJSON = function ( t, e ) {
        if ( !e ) throw new RangeError( "Invalid input for Node.fromJSON" );
        var n = null;
        if ( e.marks ) {
          if ( !Array.isArray( e.marks ) ) throw new RangeError( "Invalid mark data for Node.fromJSON" );
          n = e.marks.map( t.markFromJSON )
        }
        if ( "text" == e.type ) {
          if ( "string" != typeof e.text ) throw new RangeError( "Invalid text node in JSON" );
          return t.text( e.text, n )
        }
        var r = o.fromJSON( t, e.content );
        return t.nodeType( e.type ).create( e.attrs, r, n )
      }, Object.defineProperties( F.prototype, S );
      var E = function ( t ) {
        function e( e, n, r, i ) {
          if ( t.call( this, e, n, null, i ), !r ) throw new RangeError( "Empty text nodes are not allowed" );
          this.text = r
        }
        t && ( e.__proto__ = t ), e.prototype = Object.create( t && t.prototype ), e.prototype.constructor = e;
        var n = {
          textContent: {
            configurable: !0
          },
          nodeSize: {
            configurable: !0
          }
        };
        return e.prototype.toString = function () {
          return this.type.spec.toDebugString ? this.type.spec.toDebugString( this ) : z( this.marks, JSON.stringify( this.text ) )
        }, n.textContent.get = function () {
          return this.text
        }, e.prototype.textBetween = function ( t, e ) {
          return this.text.slice( t, e )
        }, n.nodeSize.get = function () {
          return this.text.length
        }, e.prototype.mark = function ( t ) {
          return t == this.marks ? this : new e( this.type, this.attrs, this.text, t )
        }, e.prototype.withText = function ( t ) {
          return t == this.text ? this : new e( this.type, this.attrs, t, this.marks )
        }, e.prototype.cut = function ( t, e ) {
          return void 0 === t && ( t = 0 ), void 0 === e && ( e = this.text.length ), 0 == t && e == this.text.length ? this : this.withText( this.text.slice( t, e ) )
        }, e.prototype.eq = function ( t ) {
          return this.sameMarkup( t ) && this.text == t.text
        }, e.prototype.toJSON = function () {
          var e = t.prototype.toJSON.call( this );
          return e.text = this.text, e
        }, Object.defineProperties( e.prototype, n ), e
      }( F );

      function z( t, e ) {
        for ( var n = t.length - 1; n >= 0; n-- ) e = t[ n ].type.name + "(" + e + ")";
        return e
      }
      var N = function ( t ) {
          this.validEnd = t, this.next = [], this.wrapCache = []
        },
        T = {
          inlineContent: {
            configurable: !0
          },
          defaultType: {
            configurable: !0
          },
          edgeCount: {
            configurable: !0
          }
        };
      N.parse = function ( t, e ) {
        var n = new I( t, e );
        if ( null == n.next ) return N.empty;
        var r = B( n );
        n.next && n.err( "Unexpected trailing text" );
        var i = function ( t ) {
          var e = Object.create( null );
          return function n( r ) {
            var i = [];
            r.forEach( ( function ( e ) {
              t[ e ].forEach( ( function ( e ) {
                var n = e.term,
                  r = e.to;
                if ( n ) {
                  var o = i.indexOf( n ),
                    a = o > -1 && i[ o + 1 ];
                  q( t, r ).forEach( ( function ( t ) {
                    a || i.push( n, a = [] ), -1 == a.indexOf( t ) && a.push( t )
                  } ) )
                }
              } ) )
            } ) );
            for ( var o = e[ r.join( "," ) ] = new N( r.indexOf( t.length - 1 ) > -1 ), a = 0; a < i.length; a += 2 ) {
              var s = i[ a + 1 ].sort( $ );
              o.next.push( i[ a ], e[ s.join( "," ) ] || n( s ) )
            }
            return o
          }( q( t, 0 ) )
        }( function ( t ) {
          var e = [
            []
          ];
          return i( function t( e, o ) {
            if ( "choice" == e.type ) return e.exprs.reduce( ( function ( e, n ) {
              return e.concat( t( n, o ) )
            } ), [] );
            if ( "seq" == e.type )
              for ( var a = 0;; a++ ) {
                var s = t( e.exprs[ a ], o );
                if ( a == e.exprs.length - 1 ) return s;
                i( s, o = n() )
              } else {
                if ( "star" == e.type ) {
                  var u = n();
                  return r( o, u ), i( t( e.expr, u ), u ), [ r( u ) ]
                }
                if ( "plus" == e.type ) {
                  var c = n();
                  return i( t( e.expr, o ), c ), i( t( e.expr, c ), c ), [ r( c ) ]
                }
                if ( "opt" == e.type ) return [ r( o ) ].concat( t( e.expr, o ) );
                if ( "range" == e.type ) {
                  for ( var l = o, p = 0; p < e.min; p++ ) {
                    var d = n();
                    i( t( e.expr, l ), d ), l = d
                  }
                  if ( -1 == e.max ) i( t( e.expr, l ), l );
                  else
                    for ( var f = e.min; f < e.max; f++ ) {
                      var h = n();
                      r( l, h ), i( t( e.expr, l ), h ), l = h
                    }
                  return [ r( l ) ]
                }
                if ( "name" == e.type ) return [ r( o, null, e.value ) ]
              }
          }( t, 0 ), n() ), e;

          function n() {
            return e.push( [] ) - 1
          }

          function r( t, n, r ) {
            var i = {
              term: r,
              to: n
            };
            return e[ t ].push( i ), i
          }

          function i( t, e ) {
            t.forEach( ( function ( t ) {
              return t.to = e
            } ) )
          }
        }( r ) );
        return function ( t, e ) {
          for ( var n = 0, r = [ t ]; n < r.length; n++ ) {
            for ( var i = r[ n ], o = !i.validEnd, a = [], s = 0; s < i.next.length; s += 2 ) {
              var u = i.next[ s ],
                c = i.next[ s + 1 ];
              a.push( u.name ), !o || u.isText || u.hasRequiredAttrs() || ( o = !1 ), -1 == r.indexOf( c ) && r.push( c )
            }
            o && e.err( "Only non-generatable nodes (" + a.join( ", " ) + ") in a required position (see https://prosemirror.net/docs/guide/#generatable)" )
          }
        }( i, n ), i
      }, N.prototype.matchType = function ( t ) {
        for ( var e = 0; e < this.next.length; e += 2 )
          if ( this.next[ e ] == t ) return this.next[ e + 1 ];
        return null
      }, N.prototype.matchFragment = function ( t, e, n ) {
        void 0 === e && ( e = 0 ), void 0 === n && ( n = t.childCount );
        for ( var r = this, i = e; r && i < n; i++ ) r = r.matchType( t.child( i ).type );
        return r
      }, T.inlineContent.get = function () {
        var t = this.next[ 0 ];
        return !!t && t.isInline
      }, T.defaultType.get = function () {
        for ( var t = 0; t < this.next.length; t += 2 ) {
          var e = this.next[ t ];
          if ( !e.isText && !e.hasRequiredAttrs() ) return e
        }
      }, N.prototype.compatible = function ( t ) {
        for ( var e = 0; e < this.next.length; e += 2 )
          for ( var n = 0; n < t.next.length; n += 2 )
            if ( this.next[ e ] == t.next[ n ] ) return !0;
        return !1
      }, N.prototype.fillBefore = function ( t, e, n ) {
        void 0 === e && ( e = !1 ), void 0 === n && ( n = 0 );
        var r = [ this ];
        return function i( a, s ) {
          var u = a.matchFragment( t, n );
          if ( u && ( !e || u.validEnd ) ) return o.from( s.map( ( function ( t ) {
            return t.createAndFill()
          } ) ) );
          for ( var c = 0; c < a.next.length; c += 2 ) {
            var l = a.next[ c ],
              p = a.next[ c + 1 ];
            if ( !l.isText && !l.hasRequiredAttrs() && -1 == r.indexOf( p ) ) {
              r.push( p );
              var d = i( p, s.concat( l ) );
              if ( d ) return d
            }
          }
        }( this, [] )
      }, N.prototype.findWrapping = function ( t ) {
        for ( var e = 0; e < this.wrapCache.length; e += 2 )
          if ( this.wrapCache[ e ] == t ) return this.wrapCache[ e + 1 ];
        var n = this.computeWrapping( t );
        return this.wrapCache.push( t, n ), n
      }, N.prototype.computeWrapping = function ( t ) {
        for ( var e = Object.create( null ), n = [ {
            match: this,
            type: null,
            via: null
          } ]; n.length; ) {
          var r = n.shift(),
            i = r.match;
          if ( i.matchType( t ) ) {
            for ( var o = [], a = r; a.type; a = a.via ) o.push( a.type );
            return o.reverse()
          }
          for ( var s = 0; s < i.next.length; s += 2 ) {
            var u = i.next[ s ];
            u.isLeaf || u.hasRequiredAttrs() || u.name in e || r.type && !i.next[ s + 1 ].validEnd || ( n.push( {
              match: u.contentMatch,
              type: u,
              via: r
            } ), e[ u.name ] = !0 )
          }
        }
      }, T.edgeCount.get = function () {
        return this.next.length >> 1
      }, N.prototype.edge = function ( t ) {
        var e = t << 1;
        if ( e >= this.next.length ) throw new RangeError( "There's no " + t + "th edge in this content match" );
        return {
          type: this.next[ e ],
          next: this.next[ e + 1 ]
        }
      }, N.prototype.toString = function () {
        var t = [];
        return function e( n ) {
          t.push( n );
          for ( var r = 1; r < n.next.length; r += 2 ) - 1 == t.indexOf( n.next[ r ] ) && e( n.next[ r ] )
        }( this ), t.map( ( function ( e, n ) {
          for ( var r = n + ( e.validEnd ? "*" : " " ) + " ", i = 0; i < e.next.length; i += 2 ) r += ( i ? ", " : "" ) + e.next[ i ].name + "->" + t.indexOf( e.next[ i + 1 ] );
          return r
        } ) ).join( "\n" )
      }, Object.defineProperties( N.prototype, T ), N.empty = new N( !0 );
      var I = function ( t, e ) {
          this.string = t, this.nodeTypes = e, this.inline = null, this.pos = 0, this.tokens = t.split( /\s*(?=\b|\W|$)/ ), "" == this.tokens[ this.tokens.length - 1 ] && this.tokens.pop(), "" == this.tokens[ 0 ] && this.tokens.unshift()
        },
        j = {
          next: {
            configurable: !0
          }
        };

      function B( t ) {
        var e = [];
        do {
          e.push( R( t ) )
        } while ( t.eat( "|" ) );
        return 1 == e.length ? e[ 0 ] : {
          type: "choice",
          exprs: e
        }
      }

      function R( t ) {
        var e = [];
        do {
          e.push( L( t ) )
        } while ( t.next && ")" != t.next && "|" != t.next );
        return 1 == e.length ? e[ 0 ] : {
          type: "seq",
          exprs: e
        }
      }

      function L( t ) {
        for ( var e = function ( t ) {
            if ( t.eat( "(" ) ) {
              var e = B( t );
              return t.eat( ")" ) || t.err( "Missing closing paren" ), e
            }
            if ( !/\W/.test( t.next ) ) {
              var n = function ( t, e ) {
                var n = t.nodeTypes,
                  r = n[ e ];
                if ( r ) return [ r ];
                var i = [];
                for ( var o in n ) {
                  var a = n[ o ];
                  a.groups.indexOf( e ) > -1 && i.push( a )
                }
                0 == i.length && t.err( "No node type or group '" + e + "' found" );
                return i
              }( t, t.next ).map( ( function ( e ) {
                return null == t.inline ? t.inline = e.isInline : t.inline != e.isInline && t.err( "Mixing inline and block content" ), {
                  type: "name",
                  value: e
                }
              } ) );
              return t.pos++, 1 == n.length ? n[ 0 ] : {
                type: "choice",
                exprs: n
              }
            }
            t.err( "Unexpected token '" + t.next + "'" )
          }( t );; )
          if ( t.eat( "+" ) ) e = {
            type: "plus",
            expr: e
          };
          else if ( t.eat( "*" ) ) e = {
          type: "star",
          expr: e
        };
        else if ( t.eat( "?" ) ) e = {
          type: "opt",
          expr: e
        };
        else {
          if ( !t.eat( "{" ) ) break;
          e = J( t, e )
        }
        return e
      }

      function P( t ) {
        /\D/.test( t.next ) && t.err( "Expected number, got '" + t.next + "'" );
        var e = Number( t.next );
        return t.pos++, e
      }

      function J( t, e ) {
        var n = P( t ),
          r = n;
        return t.eat( "," ) && ( r = "}" != t.next ? P( t ) : -1 ), t.eat( "}" ) || t.err( "Unclosed braced range" ), {
          type: "range",
          min: n,
          max: r,
          expr: e
        }
      }

      function $( t, e ) {
        return e - t
      }

      function q( t, e ) {
        var n = [];
        return function e( r ) {
          var i = t[ r ];
          if ( 1 == i.length && !i[ 0 ].term ) return e( i[ 0 ].to );
          n.push( r );
          for ( var o = 0; o < i.length; o++ ) {
            var a = i[ o ],
              s = a.term,
              u = a.to;
            s || -1 != n.indexOf( u ) || e( u )
          }
        }( e ), n.sort( $ )
      }

      function W( t ) {
        var e = Object.create( null );
        for ( var n in t ) {
          var r = t[ n ];
          if ( !r.hasDefault ) return null;
          e[ n ] = r.default
        }
        return e
      }

      function U( t, e ) {
        var n = Object.create( null );
        for ( var r in t ) {
          var i = e && e[ r ];
          if ( void 0 === i ) {
            var o = t[ r ];
            if ( !o.hasDefault ) throw new RangeError( "No value supplied for attribute " + r );
            i = o.default
          }
          n[ r ] = i
        }
        return n
      }

      function Z( t ) {
        var e = Object.create( null );
        if ( t )
          for ( var n in t ) e[ n ] = new H( t[ n ] );
        return e
      }
      j.next.get = function () {
        return this.tokens[ this.pos ]
      }, I.prototype.eat = function ( t ) {
        return this.next == t && ( this.pos++ || !0 )
      }, I.prototype.err = function ( t ) {
        throw new SyntaxError( t + " (in content expression '" + this.string + "')" )
      }, Object.defineProperties( I.prototype, j );
      var V = function ( t, e, n ) {
          this.name = t, this.schema = e, this.spec = n, this.groups = n.group ? n.group.split( " " ) : [], this.attrs = Z( n.attrs ), this.defaultAttrs = W( this.attrs ), this.contentMatch = null, this.markSet = null, this.inlineContent = null, this.isBlock = !( n.inline || "text" == t ), this.isText = "text" == t
        },
        G = {
          isInline: {
            configurable: !0
          },
          isTextblock: {
            configurable: !0
          },
          isLeaf: {
            configurable: !0
          },
          isAtom: {
            configurable: !0
          }
        };
      G.isInline.get = function () {
        return !this.isBlock
      }, G.isTextblock.get = function () {
        return this.isBlock && this.inlineContent
      }, G.isLeaf.get = function () {
        return this.contentMatch == N.empty
      }, G.isAtom.get = function () {
        return this.isLeaf || this.spec.atom
      }, V.prototype.hasRequiredAttrs = function () {
        for ( var t in this.attrs )
          if ( this.attrs[ t ].isRequired ) return !0;
        return !1
      }, V.prototype.compatibleContent = function ( t ) {
        return this == t || this.contentMatch.compatible( t.contentMatch )
      }, V.prototype.computeAttrs = function ( t ) {
        return !t && this.defaultAttrs ? this.defaultAttrs : U( this.attrs, t )
      }, V.prototype.create = function ( t, e, n ) {
        if ( this.isText ) throw new Error( "NodeType.create can't construct text nodes" );
        return new F( this, this.computeAttrs( t ), o.from( e ), l.setFrom( n ) )
      }, V.prototype.createChecked = function ( t, e, n ) {
        if ( e = o.from( e ), !this.validContent( e ) ) throw new RangeError( "Invalid content for node " + this.name );
        return new F( this, this.computeAttrs( t ), e, l.setFrom( n ) )
      }, V.prototype.createAndFill = function ( t, e, n ) {
        if ( t = this.computeAttrs( t ), ( e = o.from( e ) ).size ) {
          var r = this.contentMatch.fillBefore( e );
          if ( !r ) return null;
          e = r.append( e )
        }
        var i = this.contentMatch.matchFragment( e ).fillBefore( o.empty, !0 );
        return i ? new F( this, t, e.append( i ), l.setFrom( n ) ) : null
      }, V.prototype.validContent = function ( t ) {
        var e = this.contentMatch.matchFragment( t );
        if ( !e || !e.validEnd ) return !1;
        for ( var n = 0; n < t.childCount; n++ )
          if ( !this.allowsMarks( t.child( n ).marks ) ) return !1;
        return !0
      }, V.prototype.allowsMarkType = function ( t ) {
        return null == this.markSet || this.markSet.indexOf( t ) > -1
      }, V.prototype.allowsMarks = function ( t ) {
        if ( null == this.markSet ) return !0;
        for ( var e = 0; e < t.length; e++ )
          if ( !this.allowsMarkType( t[ e ].type ) ) return !1;
        return !0
      }, V.prototype.allowedMarks = function ( t ) {
        if ( null == this.markSet ) return t;
        for ( var e, n = 0; n < t.length; n++ ) this.allowsMarkType( t[ n ].type ) ? e && e.push( t[ n ] ) : e || ( e = t.slice( 0, n ) );
        return e ? e.length ? e : l.empty : t
      }, V.compile = function ( t, e ) {
        var n = Object.create( null );
        t.forEach( ( function ( t, r ) {
          return n[ t ] = new V( t, e, r )
        } ) );
        var r = e.spec.topNode || "doc";
        if ( !n[ r ] ) throw new RangeError( "Schema is missing its top node type ('" + r + "')" );
        if ( !n.text ) throw new RangeError( "Every schema needs a 'text' type" );
        for ( var i in n.text.attrs ) throw new RangeError( "The text node type should not have attributes" );
        return n
      }, Object.defineProperties( V.prototype, G );
      var H = function ( t ) {
          this.hasDefault = Object.prototype.hasOwnProperty.call( t, "default" ), this.default = t.default
        },
        K = {
          isRequired: {
            configurable: !0
          }
        };
      K.isRequired.get = function () {
        return !this.hasDefault
      }, Object.defineProperties( H.prototype, K );
      var Q = function ( t, e, n, r ) {
        this.name = t, this.schema = n, this.spec = r, this.attrs = Z( r.attrs ), this.rank = e, this.excluded = null;
        var i = W( this.attrs );
        this.instance = i && new l( this, i )
      };
      Q.prototype.create = function ( t ) {
        return !t && this.instance ? this.instance : new l( this, U( this.attrs, t ) )
      }, Q.compile = function ( t, e ) {
        var n = Object.create( null ),
          r = 0;
        return t.forEach( ( function ( t, i ) {
          return n[ t ] = new Q( t, r++, e, i )
        } ) ), n
      }, Q.prototype.removeFromSet = function ( t ) {
        for ( var e = 0; e < t.length; e++ )
          if ( t[ e ].type == this ) return t.slice( 0, e ).concat( t.slice( e + 1 ) );
        return t
      }, Q.prototype.isInSet = function ( t ) {
        for ( var e = 0; e < t.length; e++ )
          if ( t[ e ].type == this ) return t[ e ]
      }, Q.prototype.excludes = function ( t ) {
        return this.excluded.indexOf( t ) > -1
      };
      var X = function ( t ) {
        for ( var e in this.spec = {}, t ) this.spec[ e ] = t[ e ];
        this.spec.nodes = i.from( t.nodes ), this.spec.marks = i.from( t.marks ), this.nodes = V.compile( this.spec.nodes, this ), this.marks = Q.compile( this.spec.marks, this );
        var n = Object.create( null );
        for ( var r in this.nodes ) {
          if ( r in this.marks ) throw new RangeError( r + " can not be both a node and a mark" );
          var o = this.nodes[ r ],
            a = o.spec.content || "",
            s = o.spec.marks;
          o.contentMatch = n[ a ] || ( n[ a ] = N.parse( a, this.nodes ) ), o.inlineContent = o.contentMatch.inlineContent, o.markSet = "_" == s ? null : s ? Y( this, s.split( " " ) ) : "" != s && o.inlineContent ? null : []
        }
        for ( var u in this.marks ) {
          var c = this.marks[ u ],
            l = c.spec.excludes;
          c.excluded = null == l ? [ c ] : "" == l ? [] : Y( this, l.split( " " ) )
        }
        this.nodeFromJSON = this.nodeFromJSON.bind( this ), this.markFromJSON = this.markFromJSON.bind( this ), this.topNodeType = this.nodes[ this.spec.topNode || "doc" ], this.cached = Object.create( null ), this.cached.wrappings = Object.create( null )
      };

      function Y( t, e ) {
        for ( var n = [], r = 0; r < e.length; r++ ) {
          var i = e[ r ],
            o = t.marks[ i ],
            a = o;
          if ( o ) n.push( o );
          else
            for ( var s in t.marks ) {
              var u = t.marks[ s ];
              ( "_" == i || u.spec.group && u.spec.group.split( " " ).indexOf( i ) > -1 ) && n.push( a = u )
            }
          if ( !a ) throw new SyntaxError( "Unknown mark type: '" + e[ r ] + "'" )
        }
        return n
      }
      X.prototype.node = function ( t, e, n, r ) {
        if ( "string" == typeof t ) t = this.nodeType( t );
        else {
          if ( !( t instanceof V ) ) throw new RangeError( "Invalid node type: " + t );
          if ( t.schema != this ) throw new RangeError( "Node type from different schema used (" + t.name + ")" )
        }
        return t.createChecked( e, n, r )
      }, X.prototype.text = function ( t, e ) {
        var n = this.nodes.text;
        return new E( n, n.defaultAttrs, t, l.setFrom( e ) )
      }, X.prototype.mark = function ( t, e ) {
        return "string" == typeof t && ( t = this.marks[ t ] ), t.create( e )
      }, X.prototype.nodeFromJSON = function ( t ) {
        return F.fromJSON( this, t )
      }, X.prototype.markFromJSON = function ( t ) {
        return l.fromJSON( this, t )
      }, X.prototype.nodeType = function ( t ) {
        var e = this.nodes[ t ];
        if ( !e ) throw new RangeError( "Unknown node type: " + t );
        return e
      };
      var tt = function ( t, e ) {
        var n = this;
        this.schema = t, this.rules = e, this.tags = [], this.styles = [], e.forEach( ( function ( t ) {
          t.tag ? n.tags.push( t ) : t.style && n.styles.push( t )
        } ) ), this.normalizeLists = !this.tags.some( ( function ( e ) {
          if ( !/^(ul|ol)\b/.test( e.tag ) || !e.node ) return !1;
          var n = t.nodes[ e.node ];
          return n.contentMatch.matchType( n )
        } ) )
      };
      tt.prototype.parse = function ( t, e ) {
        void 0 === e && ( e = {} );
        var n = new at( this, e, !1 );
        return n.addAll( t, null, e.from, e.to ), n.finish()
      }, tt.prototype.parseSlice = function ( t, e ) {
        void 0 === e && ( e = {} );
        var n = new at( this, e, !0 );
        return n.addAll( t, null, e.from, e.to ), d.maxOpen( n.finish() )
      }, tt.prototype.matchTag = function ( t, e ) {
        for ( var n = 0; n < this.tags.length; n++ ) {
          var r = this.tags[ n ];
          if ( ut( t, r.tag ) && ( void 0 === r.namespace || t.namespaceURI == r.namespace ) && ( !r.context || e.matchesContext( r.context ) ) ) {
            if ( r.getAttrs ) {
              var i = r.getAttrs( t );
              if ( !1 === i ) continue;
              r.attrs = i
            }
            return r
          }
        }
      }, tt.prototype.matchStyle = function ( t, e, n ) {
        for ( var r = 0; r < this.styles.length; r++ ) {
          var i = this.styles[ r ];
          if ( !( 0 != i.style.indexOf( t ) || i.context && !n.matchesContext( i.context ) || i.style.length > t.length && ( 61 != i.style.charCodeAt( t.length ) || i.style.slice( t.length + 1 ) != e ) ) ) {
            if ( i.getAttrs ) {
              var o = i.getAttrs( e );
              if ( !1 === o ) continue;
              i.attrs = o
            }
            return i
          }
        }
      }, tt.schemaRules = function ( t ) {
        var e = [];

        function n( t ) {
          for ( var n = null == t.priority ? 50 : t.priority, r = 0; r < e.length; r++ ) {
            var i = e[ r ];
            if ( ( null == i.priority ? 50 : i.priority ) < n ) break
          }
          e.splice( r, 0, t )
        }
        var r = function ( e ) {
          var r = t.marks[ e ].spec.parseDOM;
          r && r.forEach( ( function ( t ) {
            n( t = ct( t ) ), t.mark = e
          } ) )
        };
        for ( var i in t.marks ) r( i );
        var o;
        for ( var a in t.nodes ) o = void 0, ( o = t.nodes[ a ].spec.parseDOM ) && o.forEach( ( function ( t ) {
          n( t = ct( t ) ), t.node = a
        } ) );
        return e
      }, tt.fromSchema = function ( t ) {
        return t.cached.domParser || ( t.cached.domParser = new tt( t, tt.schemaRules( t ) ) )
      };
      var et = {
          address: !0,
          article: !0,
          aside: !0,
          blockquote: !0,
          canvas: !0,
          dd: !0,
          div: !0,
          dl: !0,
          fieldset: !0,
          figcaption: !0,
          figure: !0,
          footer: !0,
          form: !0,
          h1: !0,
          h2: !0,
          h3: !0,
          h4: !0,
          h5: !0,
          h6: !0,
          header: !0,
          hgroup: !0,
          hr: !0,
          li: !0,
          noscript: !0,
          ol: !0,
          output: !0,
          p: !0,
          pre: !0,
          section: !0,
          table: !0,
          tfoot: !0,
          ul: !0
        },
        nt = {
          head: !0,
          noscript: !0,
          object: !0,
          script: !0,
          style: !0,
          title: !0
        },
        rt = {
          ol: !0,
          ul: !0
        };

      function it( t ) {
        return ( t ? 1 : 0 ) | ( "full" === t ? 2 : 0 )
      }
      var ot = function ( t, e, n, r, i, o, a ) {
        this.type = t, this.attrs = e, this.solid = i, this.match = o || ( 4 & a ? null : t.contentMatch ), this.options = a, this.content = [], this.marks = n, this.activeMarks = l.none, this.pendingMarks = r
      };
      ot.prototype.findWrapping = function ( t ) {
        if ( !this.match ) {
          if ( !this.type ) return [];
          var e = this.type.contentMatch.fillBefore( o.from( t ) );
          if ( !e ) {
            var n, r = this.type.contentMatch;
            return ( n = r.findWrapping( t.type ) ) ? ( this.match = r, n ) : null
          }
          this.match = this.type.contentMatch.matchFragment( e )
        }
        return this.match.findWrapping( t.type )
      }, ot.prototype.finish = function ( t ) {
        if ( !( 1 & this.options ) ) {
          var e, n = this.content[ this.content.length - 1 ];
          n && n.isText && ( e = /[ \t\r\n\u000c]+$/.exec( n.text ) ) && ( n.text.length == e[ 0 ].length ? this.content.pop() : this.content[ this.content.length - 1 ] = n.withText( n.text.slice( 0, n.text.length - e[ 0 ].length ) ) )
        }
        var r = o.from( this.content );
        return !t && this.match && ( r = r.append( this.match.fillBefore( o.empty, !0 ) ) ), this.type ? this.type.create( this.attrs, r, this.marks ) : r
      }, ot.prototype.applyPending = function ( t ) {
        for ( var e = 0, n = this.pendingMarks; e < n.length; e++ ) {
          var r = n[ e ];
          ( this.type ? this.type.allowsMarkType( r.type ) : lt( r.type, t ) ) && !r.isInSet( this.activeMarks ) && ( this.activeMarks = r.addToSet( this.activeMarks ), this.pendingMarks = r.removeFromSet( this.pendingMarks ) )
        }
      };
      var at = function ( t, e, n ) {
          this.parser = t, this.options = e, this.isOpen = n;
          var r, i = e.topNode,
            o = it( e.preserveWhitespace ) | ( n ? 4 : 0 );
          r = i ? new ot( i.type, i.attrs, l.none, l.none, !0, e.topMatch || i.type.contentMatch, o ) : new ot( n ? null : t.schema.topNodeType, null, l.none, l.none, !0, null, o ), this.nodes = [ r ], this.open = 0, this.find = e.findPositions, this.needsBlock = !1
        },
        st = {
          top: {
            configurable: !0
          },
          currentPos: {
            configurable: !0
          }
        };

      function ut( t, e ) {
        return ( t.matches || t.msMatchesSelector || t.webkitMatchesSelector || t.mozMatchesSelector ).call( t, e )
      }

      function ct( t ) {
        var e = {};
        for ( var n in t ) e[ n ] = t[ n ];
        return e
      }

      function lt( t, e ) {
        var n = e.schema.nodes,
          r = function ( r ) {
            var i = n[ r ];
            if ( i.allowsMarkType( t ) ) {
              var o = [],
                a = function ( t ) {
                  o.push( t );
                  for ( var n = 0; n < t.edgeCount; n++ ) {
                    var r = t.edge( n ),
                      i = r.type,
                      s = r.next;
                    if ( i == e ) return !0;
                    if ( o.indexOf( s ) < 0 && a( s ) ) return !0
                  }
                };
              return a( i.contentMatch ) ? {
                v: !0
              } : void 0
            }
          };
        for ( var i in n ) {
          var o = r( i );
          if ( o ) return o.v
        }
      }
      st.top.get = function () {
        return this.nodes[ this.open ]
      }, at.prototype.addDOM = function ( t ) {
        if ( 3 == t.nodeType ) this.addTextNode( t );
        else if ( 1 == t.nodeType ) {
          var e = t.getAttribute( "style" ),
            n = e ? this.readStyles( function ( t ) {
              var e, n = /\s*([\w-]+)\s*:\s*([^;]+)/g,
                r = [];
              for ( ; e = n.exec( t ); ) r.push( e[ 1 ], e[ 2 ].trim() );
              return r
            }( e ) ) : null,
            r = this.top;
          if ( null != n )
            for ( var i = 0; i < n.length; i++ ) this.addPendingMark( n[ i ] );
          if ( this.addElement( t ), null != n )
            for ( var o = 0; o < n.length; o++ ) this.removePendingMark( n[ o ], r )
        }
      }, at.prototype.addTextNode = function ( t ) {
        var e = t.nodeValue,
          n = this.top;
        if ( ( n.type ? n.type.inlineContent : n.content.length && n.content[ 0 ].isInline ) || /[^ \t\r\n\u000c]/.test( e ) ) {
          if ( 1 & n.options ) 2 & n.options || ( e = e.replace( /\r?\n|\r/g, " " ) );
          else if ( e = e.replace( /[ \t\r\n\u000c]+/g, " " ), /^[ \t\r\n\u000c]/.test( e ) && this.open == this.nodes.length - 1 ) {
            var r = n.content[ n.content.length - 1 ],
              i = t.previousSibling;
            ( !r || i && "BR" == i.nodeName || r.isText && /[ \t\r\n\u000c]$/.test( r.text ) ) && ( e = e.slice( 1 ) )
          }
          e && this.insertNode( this.parser.schema.text( e ) ), this.findInText( t )
        } else this.findInside( t )
      }, at.prototype.addElement = function ( t ) {
        var e = t.nodeName.toLowerCase();
        rt.hasOwnProperty( e ) && this.parser.normalizeLists && function ( t ) {
          for ( var e = t.firstChild, n = null; e; e = e.nextSibling ) {
            var r = 1 == e.nodeType ? e.nodeName.toLowerCase() : null;
            r && rt.hasOwnProperty( r ) && n ? ( n.appendChild( e ), e = n ) : "li" == r ? n = e : r && ( n = null )
          }
        }( t );
        var n = this.options.ruleFromNode && this.options.ruleFromNode( t ) || this.parser.matchTag( t, this );
        if ( n ? n.ignore : nt.hasOwnProperty( e ) ) this.findInside( t );
        else if ( !n || n.skip || n.closeParent ) {
          n && n.closeParent ? this.open = Math.max( 0, this.open - 1 ) : n && n.skip.nodeType && ( t = n.skip );
          var r, i = this.top,
            o = this.needsBlock;
          if ( et.hasOwnProperty( e ) ) r = !0, i.type || ( this.needsBlock = !0 );
          else if ( !t.firstChild ) return void this.leafFallback( t );
          this.addAll( t ), r && this.sync( i ), this.needsBlock = o
        } else this.addElementByRule( t, n )
      }, at.prototype.leafFallback = function ( t ) {
        "BR" == t.nodeName && this.top.type && this.top.type.inlineContent && this.addTextNode( t.ownerDocument.createTextNode( "\n" ) )
      }, at.prototype.readStyles = function ( t ) {
        for ( var e = l.none, n = 0; n < t.length; n += 2 ) {
          var r = this.parser.matchStyle( t[ n ], t[ n + 1 ], this );
          if ( r ) {
            if ( r.ignore ) return null;
            e = this.parser.schema.marks[ r.mark ].create( r.attrs ).addToSet( e )
          }
        }
        return e
      }, at.prototype.addElementByRule = function ( t, e ) {
        var n, r, i, o = this;
        e.node ? ( r = this.parser.schema.nodes[ e.node ] ).isLeaf ? this.insertNode( r.create( e.attrs ) ) || this.leafFallback( t ) : n = this.enter( r, e.attrs, e.preserveWhitespace ) : ( i = this.parser.schema.marks[ e.mark ].create( e.attrs ), this.addPendingMark( i ) );
        var a = this.top;
        if ( r && r.isLeaf ) this.findInside( t );
        else if ( e.getContent ) this.findInside( t ), e.getContent( t, this.parser.schema ).forEach( ( function ( t ) {
          return o.insertNode( t )
        } ) );
        else {
          var s = e.contentElement;
          "string" == typeof s ? s = t.querySelector( s ) : "function" == typeof s && ( s = s( t ) ), s || ( s = t ), this.findAround( t, s, !0 ), this.addAll( s, n )
        }
        n && ( this.sync( a ), this.open-- ), i && this.removePendingMark( i, a )
      }, at.prototype.addAll = function ( t, e, n, r ) {
        for ( var i = n || 0, o = n ? t.childNodes[ n ] : t.firstChild, a = null == r ? null : t.childNodes[ r ]; o != a; o = o.nextSibling, ++i ) this.findAtPoint( t, i ), this.addDOM( o ), e && et.hasOwnProperty( o.nodeName.toLowerCase() ) && this.sync( e );
        this.findAtPoint( t, i )
      }, at.prototype.findPlace = function ( t ) {
        for ( var e, n, r = this.open; r >= 0; r-- ) {
          var i = this.nodes[ r ],
            o = i.findWrapping( t );
          if ( o && ( !e || e.length > o.length ) && ( e = o, n = i, !o.length ) ) break;
          if ( i.solid ) break
        }
        if ( !e ) return !1;
        this.sync( n );
        for ( var a = 0; a < e.length; a++ ) this.enterInner( e[ a ], null, !1 );
        return !0
      }, at.prototype.insertNode = function ( t ) {
        if ( t.isInline && this.needsBlock && !this.top.type ) {
          var e = this.textblockFromContext();
          e && this.enterInner( e )
        }
        if ( this.findPlace( t ) ) {
          this.closeExtra();
          var n = this.top;
          n.applyPending( t.type ), n.match && ( n.match = n.match.matchType( t.type ) );
          for ( var r = n.activeMarks, i = 0; i < t.marks.length; i++ ) n.type && !n.type.allowsMarkType( t.marks[ i ].type ) || ( r = t.marks[ i ].addToSet( r ) );
          return n.content.push( t.mark( r ) ), !0
        }
        return !1
      }, at.prototype.enter = function ( t, e, n ) {
        var r = this.findPlace( t.create( e ) );
        return r && this.enterInner( t, e, !0, n ), r
      }, at.prototype.enterInner = function ( t, e, n, r ) {
        this.closeExtra();
        var i = this.top;
        i.applyPending( t ), i.match = i.match && i.match.matchType( t, e );
        var o = null == r ? -5 & i.options : it( r );
        4 & i.options && 0 == i.content.length && ( o |= 4 ), this.nodes.push( new ot( t, e, i.activeMarks, i.pendingMarks, n, null, o ) ), this.open++
      }, at.prototype.closeExtra = function ( t ) {
        var e = this.nodes.length - 1;
        if ( e > this.open ) {
          for ( ; e > this.open; e-- ) this.nodes[ e - 1 ].content.push( this.nodes[ e ].finish( t ) );
          this.nodes.length = this.open + 1
        }
      }, at.prototype.finish = function () {
        return this.open = 0, this.closeExtra( this.isOpen ), this.nodes[ 0 ].finish( this.isOpen || this.options.topOpen )
      }, at.prototype.sync = function ( t ) {
        for ( var e = this.open; e >= 0; e-- )
          if ( this.nodes[ e ] == t ) return void( this.open = e )
      }, st.currentPos.get = function () {
        this.closeExtra();
        for ( var t = 0, e = this.open; e >= 0; e-- ) {
          for ( var n = this.nodes[ e ].content, r = n.length - 1; r >= 0; r-- ) t += n[ r ].nodeSize;
          e && t++
        }
        return t
      }, at.prototype.findAtPoint = function ( t, e ) {
        if ( this.find )
          for ( var n = 0; n < this.find.length; n++ ) this.find[ n ].node == t && this.find[ n ].offset == e && ( this.find[ n ].pos = this.currentPos )
      }, at.prototype.findInside = function ( t ) {
        if ( this.find )
          for ( var e = 0; e < this.find.length; e++ ) null == this.find[ e ].pos && 1 == t.nodeType && t.contains( this.find[ e ].node ) && ( this.find[ e ].pos = this.currentPos )
      }, at.prototype.findAround = function ( t, e, n ) {
        if ( t != e && this.find )
          for ( var r = 0; r < this.find.length; r++ ) {
            if ( null == this.find[ r ].pos && 1 == t.nodeType && t.contains( this.find[ r ].node ) ) e.compareDocumentPosition( this.find[ r ].node ) & ( n ? 2 : 4 ) && ( this.find[ r ].pos = this.currentPos )
          }
      }, at.prototype.findInText = function ( t ) {
        if ( this.find )
          for ( var e = 0; e < this.find.length; e++ ) this.find[ e ].node == t && ( this.find[ e ].pos = this.currentPos - ( t.nodeValue.length - this.find[ e ].offset ) )
      }, at.prototype.matchesContext = function ( t ) {
        var e = this;
        if ( t.indexOf( "|" ) > -1 ) return t.split( /\s*\|\s*/ ).some( this.matchesContext, this );
        var n = t.split( "/" ),
          r = this.options.context,
          i = !( this.isOpen || r && r.parent.type != this.nodes[ 0 ].type ),
          o = -( r ? r.depth + 1 : 0 ) + ( i ? 0 : 1 ),
          a = function ( t, s ) {
            for ( ; t >= 0; t-- ) {
              var u = n[ t ];
              if ( "" == u ) {
                if ( t == n.length - 1 || 0 == t ) continue;
                for ( ; s >= o; s-- )
                  if ( a( t - 1, s ) ) return !0;
                return !1
              }
              var c = s > 0 || 0 == s && i ? e.nodes[ s ].type : r && s >= o ? r.node( s - o ).type : null;
              if ( !c || c.name != u && -1 == c.groups.indexOf( u ) ) return !1;
              s--
            }
            return !0
          };
        return a( n.length - 1, this.open )
      }, at.prototype.textblockFromContext = function () {
        var t = this.options.context;
        if ( t )
          for ( var e = t.depth; e >= 0; e-- ) {
            var n = t.node( e ).contentMatchAt( t.indexAfter( e ) ).defaultType;
            if ( n && n.isTextblock && n.defaultAttrs ) return n
          }
        for ( var r in this.parser.schema.nodes ) {
          var i = this.parser.schema.nodes[ r ];
          if ( i.isTextblock && i.defaultAttrs ) return i
        }
      }, at.prototype.addPendingMark = function ( t ) {
        this.top.pendingMarks = t.addToSet( this.top.pendingMarks )
      }, at.prototype.removePendingMark = function ( t, e ) {
        for ( var n = this.open; n >= 0; n-- ) {
          var r = this.nodes[ n ];
          if ( r.pendingMarks.lastIndexOf( t ) > -1 ? r.pendingMarks = t.removeFromSet( r.pendingMarks ) : r.activeMarks = t.removeFromSet( r.activeMarks ), r == e ) break
        }
      }, Object.defineProperties( at.prototype, st );
      var pt = function ( t, e ) {
        this.nodes = t || {}, this.marks = e || {}
      };

      function dt( t ) {
        var e = {};
        for ( var n in t ) {
          var r = t[ n ].spec.toDOM;
          r && ( e[ n ] = r )
        }
        return e
      }

      function ft( t ) {
        return t.document || window.document
      }
      pt.prototype.serializeFragment = function ( t, e, n ) {
        var r = this;
        void 0 === e && ( e = {} ), n || ( n = ft( e ).createDocumentFragment() );
        var i = n,
          o = null;
        return t.forEach( ( function ( t ) {
          if ( o || t.marks.length ) {
            o || ( o = [] );
            for ( var n = 0, a = 0; n < o.length && a < t.marks.length; ) {
              var s = t.marks[ a ];
              if ( r.marks[ s.type.name ] ) {
                if ( !s.eq( o[ n ] ) || !1 === s.type.spec.spanning ) break;
                n += 2, a++
              } else a++
            }
            for ( ; n < o.length; ) i = o.pop(), o.pop();
            for ( ; a < t.marks.length; ) {
              var u = t.marks[ a++ ],
                c = r.serializeMark( u, t.isInline, e );
              c && ( o.push( u, i ), i.appendChild( c.dom ), i = c.contentDOM || c.dom )
            }
          }
          i.appendChild( r.serializeNode( t, e ) )
        } ) ), n
      }, pt.prototype.serializeNode = function ( t, e ) {
        void 0 === e && ( e = {} );
        var n = pt.renderSpec( ft( e ), this.nodes[ t.type.name ]( t ) ),
          r = n.dom,
          i = n.contentDOM;
        if ( i ) {
          if ( t.isLeaf ) throw new RangeError( "Content hole not allowed in a leaf node spec" );
          e.onContent ? e.onContent( t, i, e ) : this.serializeFragment( t.content, e, i )
        }
        return r
      }, pt.prototype.serializeNodeAndMarks = function ( t, e ) {
        void 0 === e && ( e = {} );
        for ( var n = this.serializeNode( t, e ), r = t.marks.length - 1; r >= 0; r-- ) {
          var i = this.serializeMark( t.marks[ r ], t.isInline, e );
          i && ( ( i.contentDOM || i.dom ).appendChild( n ), n = i.dom )
        }
        return n
      }, pt.prototype.serializeMark = function ( t, e, n ) {
        void 0 === n && ( n = {} );
        var r = this.marks[ t.type.name ];
        return r && pt.renderSpec( ft( n ), r( t, e ) )
      }, pt.renderSpec = function ( t, e, n ) {
        if ( void 0 === n && ( n = null ), "string" == typeof e ) return {
          dom: t.createTextNode( e )
        };
        if ( null != e.nodeType ) return {
          dom: e
        };
        var r = e[ 0 ],
          i = r.indexOf( " " );
        i > 0 && ( n = r.slice( 0, i ), r = r.slice( i + 1 ) );
        var o = null,
          a = n ? t.createElementNS( n, r ) : t.createElement( r ),
          s = e[ 1 ],
          u = 1;
        if ( s && "object" == typeof s && null == s.nodeType && !Array.isArray( s ) )
          for ( var c in u = 2, s )
            if ( null != s[ c ] ) {
              var l = c.indexOf( " " );
              l > 0 ? a.setAttributeNS( c.slice( 0, l ), c.slice( l + 1 ), s[ c ] ) : a.setAttribute( c, s[ c ] )
            } for ( var p = u; p < e.length; p++ ) {
          var d = e[ p ];
          if ( 0 === d ) {
            if ( p < e.length - 1 || p > u ) throw new RangeError( "Content hole must be the only child of its parent node" );
            return {
              dom: a,
              contentDOM: a
            }
          }
          var f = pt.renderSpec( t, d, n ),
            h = f.dom,
            m = f.contentDOM;
          if ( a.appendChild( h ), m ) {
            if ( o ) throw new RangeError( "Multiple content holes" );
            o = m
          }
        }
        return {
          dom: a,
          contentDOM: o
        }
      }, pt.fromSchema = function ( t ) {
        return t.cached.domSerializer || ( t.cached.domSerializer = new pt( this.nodesFromSchema( t ), this.marksFromSchema( t ) ) )
      }, pt.nodesFromSchema = function ( t ) {
        var e = dt( t.nodes );
        return e.text || ( e.text = function ( t ) {
          return t.text
        } ), e
      }, pt.marksFromSchema = function ( t ) {
        return dt( t.marks )
      }
    },
    Iqa1: function ( t, e, n ) {
      "use strict";
      n.d( e, "a", ( function () {
        return r
      } ) );
      const r = {
        content: "(paragraph | mediaSingle | codeBlock) (paragraph | bulletList | orderedList | mediaSingle | codeBlock)*",
        marks: "link unsupportedMark unsupportedNodeAttribute",
        defining: !0,
        selectable: !1,
        parseDOM: [ {
          tag: "li"
        } ],
        toDOM: () => [ "li", 0 ]
      }
    },
    JdPE: function ( t, e, n ) {
      "use strict";
      n.d( e, "a", ( function () {
        return i
      } ) );
      var r = n( "ArAF" );
      const i = {
        inline: !0,
        group: "inline",
        selectable: !0,
        attrs: {
          text: {
            default: ""
          },
          color: {
            default: ""
          },
          localId: {
            default: r.b.generate()
          },
          style: {
            default: ""
          }
        },
        parseDOM: [ {
          tag: 'span[data-node-type="status"]',
          getAttrs: t => {
            const e = t;
            return {
              text: e.textContent.replace( /\n/, "" ).trim(),
              color: e.getAttribute( "data-color" ),
              localId: r.b.generate(),
              style: e.getAttribute( "data-style" )
            }
          }
        } ],
        toDOM( t ) {
          const {
            text: e,
            color: n,
            localId: r,
            style: i
          } = t.attrs;
          return [ "span", {
            "data-node-type": "status",
            "data-color": n,
            "data-local-id": r,
            "data-style": i,
            contenteditable: "false"
          }, e ]
        }
      }
    },
    L15d: function ( t, e, n ) {
      "use strict";
      n.d( e, "a", ( function () {
        return i
      } ) );
      const r = "confluenceUnsupportedBlock",
        i = {
          group: "block",
          attrs: {
            cxhtml: {
              default: null
            }
          },
          toDOM: t => [ "div", {
            "data-node-type": r,
            "data-confluence-unsupported": "block",
            "data-confluence-unsupported-block-cxhtml": t.attrs.cxhtml
          }, "Unsupported content" ],
          parseDOM: [ {
            tag: `div[data-node-type="${r}"]`,
            getAttrs: t => ( {
              cxhtml: t.getAttribute( "data-confluence-unsupported-block-cxhtml" )
            } )
          } ]
        }
    },
    LZ3D: function ( t, e, n ) {
      "use strict";
      n.d( e, "a", ( function () {
        return i
      } ) );
      const r = [ "hr" ],
        i = {
          group: "block",
          parseDOM: [ {
            tag: "hr"
          } ],
          toDOM: () => r
        }
    },
    MhQf: function ( t, e, n ) {
      "use strict";
      n.d( e, "a", ( function () {
        return o
      } ) ), n.d( e, "b", ( function () {
        return a
      } ) );
      var r = n( "bZPM" );
      const i = ( t = !1 ) => {
          const e = {
            inline: !1,
            group: "block",
            atom: !0,
            selectable: !0,
            attrs: {
              extensionType: {
                default: ""
              },
              extensionKey: {
                default: ""
              },
              parameters: {
                default: null
              },
              text: {
                default: null
              },
              layout: {
                default: "default"
              }
            },
            parseDOM: [ {
              tag: '[data-node-type="extension"]',
              getAttrs: e => Object( r.a )( e, t )
            } ],
            toDOM: t => [ "div", {
              "data-node-type": "extension",
              "data-extension-type": t.attrs.extensionType,
              "data-extension-key": t.attrs.extensionKey,
              "data-text": t.attrs.text,
              "data-parameters": JSON.stringify( t.attrs.parameters ),
              "data-layout": t.attrs.layout
            } ]
          };
          return t && e.attrs && ( e.attrs.localId = {
            default: ""
          } ), e
        },
        o = i(),
        a = i( !0 )
    },
    NOiQ: function ( t, e, n ) {
      "use strict";
      n.d( e, "a", ( function () {
        return r
      } ) );
      const r = {
        content: "layoutColumn{2,3}",
        marks: "unsupportedMark unsupportedNodeAttribute",
        isolating: !0,
        parseDOM: [ {
          context: "layoutSection//|layoutColumn//",
          tag: "div[data-layout-section]",
          skip: !0
        }, {
          tag: "div[data-layout-section]"
        } ],
        toDOM: () => [ "div", {
          "data-layout-section": "true"
        }, 0 ]
      }
    },
    NXWE: function ( t, e, n ) {
      "use strict";
      n.d( e, "a", ( function () {
        return a
      } ) ), n.d( e, "b", ( function () {
        return s
      } ) );
      var r = n( "ArAF" ),
        i = n( "bZPM" );
      const o = ( t = !1 ) => {
          const e = {
            inline: !1,
            group: "block",
            marks: "link",
            content: "(paragraph | panel | blockquote | orderedList | bulletList | rule | heading | codeBlock | mediaGroup | mediaSingle | decisionList | taskList | table | blockCard | extension | unsupportedBlock)+",
            defining: !0,
            selectable: !0,
            isolating: !0,
            attrs: {
              extensionType: {
                default: ""
              },
              extensionKey: {
                default: ""
              },
              parameters: {
                default: null
              },
              text: {
                default: null
              },
              layout: {
                default: "default"
              }
            },
            parseDOM: [ {
              context: "bodiedExtension//",
              tag: '[data-node-type="bodied-extension"]',
              skip: !0
            }, {
              tag: '[data-node-type="bodied-extension"]',
              getAttrs: e => Object( i.a )( e, t )
            } ],
            toDOM: t => [ "div", {
              "data-node-type": "bodied-extension",
              "data-extension-type": t.attrs.extensionType,
              "data-extension-key": t.attrs.extensionKey,
              "data-text": t.attrs.text,
              "data-parameters": JSON.stringify( t.attrs.parameters ),
              "data-layout": t.attrs.layout
            }, 0 ]
          };
          return t && e.attrs && ( e.attrs.localId = {
            default: r.b.generate()
          } ), e
        },
        a = o(),
        s = o( !0 )
    },
    QhI2: function ( t, e, n ) {
      "use strict";
      n.d( e, "b", ( function () {
        return i
      } ) ), n.d( e, "a", ( function () {
        return o
      } ) );
      var r = n( "ArAF" );
      const i = '[data-node-type="actionList"]',
        o = {
          group: "block",
          defining: !0,
          selectable: !1,
          content: "taskItem+ (taskItem|taskList)*",
          marks: "unsupportedMark unsupportedNodeAttribute",
          attrs: {
            localId: {
              default: ""
            }
          },
          parseDOM: [ {
            tag: "div" + i,
            priority: 100,
            getAttrs: () => ( {
              localId: r.b.generate()
            } )
          } ],
          toDOM( t ) {
            const {
              localId: e
            } = t.attrs;
            return [ "div", {
              "data-node-type": "actionList",
              "data-task-list-local-id": e || "local-task-list",
              style: "list-style: none; padding-left: 0"
            }, 0 ]
          }
        }
    },
    R41B: function ( t, e, n ) {
      "use strict";

      function r( t ) {
        if ( t.style.verticalAlign ) {
          const e = t.style.verticalAlign.slice( 0, 3 );
          if ( "sub" === e || "sup" === e ) return {
            type: e
          }
        }
        return !1
      }
      n.d( e, "a", ( function () {
        return i
      } ) );
      const i = {
        inclusive: !0,
        group: n( "ljyt" ).c,
        attrs: {
          type: {
            default: "sub"
          }
        },
        parseDOM: [ {
          tag: "sub",
          attrs: {
            type: "sub"
          }
        }, {
          tag: "sup",
          attrs: {
            type: "sup"
          }
        }, {
          tag: "span",
          style: "vertical-align=super",
          getAttrs: t => r( t )
        }, {
          tag: "span",
          style: "vertical-align=sub",
          getAttrs: t => r( t )
        } ],
        toDOM: t => [ t.attrs.type ]
      }
    },
    ROrA: function ( t, e, n ) {
      "use strict";
      n.d( e, "a", ( function () {
        return r
      } ) );
      const r = {
        content: "paragraph+",
        group: "block",
        defining: !0,
        selectable: !1,
        parseDOM: [ {
          tag: "blockquote"
        } ],
        toDOM: () => [ "blockquote", 0 ]
      }
    },
    RYQf: function ( t, e ) {
      t.exports = /[\0-\x1F\x7F-\x9F]/
    },
    UdmJ: function ( t, e, n ) {
      "use strict";
      n.r( e ), n.d( e, "AddMarkStep", ( function () {
        return S
      } ) ), n.d( e, "MapResult", ( function () {
        return a
      } ) ), n.d( e, "Mapping", ( function () {
        return u
      } ) ), n.d( e, "RemoveMarkStep", ( function () {
        return E
      } ) ), n.d( e, "ReplaceAroundStep", ( function () {
        return y
      } ) ), n.d( e, "ReplaceStep", ( function () {
        return g
      } ) ), n.d( e, "Step", ( function () {
        return h
      } ) ), n.d( e, "StepMap", ( function () {
        return s
      } ) ), n.d( e, "StepResult", ( function () {
        return m
      } ) ), n.d( e, "Transform", ( function () {
        return l
      } ) ), n.d( e, "TransformError", ( function () {
        return c
      } ) ), n.d( e, "canJoin", ( function () {
        return A
      } ) ), n.d( e, "canSplit", ( function () {
        return w
      } ) ), n.d( e, "dropPoint", ( function () {
        return M
      } ) ), n.d( e, "findWrapping", ( function () {
        return k
      } ) ), n.d( e, "insertPoint", ( function () {
        return C
      } ) ), n.d( e, "joinPoint", ( function () {
        return O
      } ) ), n.d( e, "liftTarget", ( function () {
        return x
      } ) ), n.d( e, "replaceStep", ( function () {
        return z
      } ) );
      var r = n( "I9T1" ),
        i = Math.pow( 2, 16 );

      function o( t ) {
        return 65535 & t
      }
      var a = function ( t, e, n ) {
          void 0 === e && ( e = !1 ), void 0 === n && ( n = null ), this.pos = t, this.deleted = e, this.recover = n
        },
        s = function ( t, e ) {
          void 0 === e && ( e = !1 ), this.ranges = t, this.inverted = e
        };
      s.prototype.recover = function ( t ) {
        var e = 0,
          n = o( t );
        if ( !this.inverted )
          for ( var r = 0; r < n; r++ ) e += this.ranges[ 3 * r + 2 ] - this.ranges[ 3 * r + 1 ];
        return this.ranges[ 3 * n ] + e + function ( t ) {
          return ( t - ( 65535 & t ) ) / i
        }( t )
      }, s.prototype.mapResult = function ( t, e ) {
        return void 0 === e && ( e = 1 ), this._map( t, e, !1 )
      }, s.prototype.map = function ( t, e ) {
        return void 0 === e && ( e = 1 ), this._map( t, e, !0 )
      }, s.prototype._map = function ( t, e, n ) {
        for ( var r = 0, o = this.inverted ? 2 : 1, s = this.inverted ? 1 : 2, u = 0; u < this.ranges.length; u += 3 ) {
          var c = this.ranges[ u ] - ( this.inverted ? r : 0 );
          if ( c > t ) break;
          var l = this.ranges[ u + o ],
            p = this.ranges[ u + s ],
            d = c + l;
          if ( t <= d ) {
            var f = c + r + ( ( l ? t == c ? -1 : t == d ? 1 : e : e ) < 0 ? 0 : p );
            if ( n ) return f;
            var h = t == ( e < 0 ? c : d ) ? null : u / 3 + ( t - c ) * i;
            return new a( f, e < 0 ? t != c : t != d, h )
          }
          r += p - l
        }
        return n ? t + r : new a( t + r )
      }, s.prototype.touches = function ( t, e ) {
        for ( var n = 0, r = o( e ), i = this.inverted ? 2 : 1, a = this.inverted ? 1 : 2, s = 0; s < this.ranges.length; s += 3 ) {
          var u = this.ranges[ s ] - ( this.inverted ? n : 0 );
          if ( u > t ) break;
          var c = this.ranges[ s + i ];
          if ( t <= u + c && s == 3 * r ) return !0;
          n += this.ranges[ s + a ] - c
        }
        return !1
      }, s.prototype.forEach = function ( t ) {
        for ( var e = this.inverted ? 2 : 1, n = this.inverted ? 1 : 2, r = 0, i = 0; r < this.ranges.length; r += 3 ) {
          var o = this.ranges[ r ],
            a = o - ( this.inverted ? i : 0 ),
            s = o + ( this.inverted ? 0 : i ),
            u = this.ranges[ r + e ],
            c = this.ranges[ r + n ];
          t( a, a + u, s, s + c ), i += c - u
        }
      }, s.prototype.invert = function () {
        return new s( this.ranges, !this.inverted )
      }, s.prototype.toString = function () {
        return ( this.inverted ? "-" : "" ) + JSON.stringify( this.ranges )
      }, s.offset = function ( t ) {
        return 0 == t ? s.empty : new s( t < 0 ? [ 0, -t, 0 ] : [ 0, 0, t ] )
      }, s.empty = new s( [] );
      var u = function ( t, e, n, r ) {
        this.maps = t || [], this.from = n || 0, this.to = null == r ? this.maps.length : r, this.mirror = e
      };

      function c( t ) {
        var e = Error.call( this, t );
        return e.__proto__ = c.prototype, e
      }
      u.prototype.slice = function ( t, e ) {
        return void 0 === t && ( t = 0 ), void 0 === e && ( e = this.maps.length ), new u( this.maps, this.mirror, t, e )
      }, u.prototype.copy = function () {
        return new u( this.maps.slice(), this.mirror && this.mirror.slice(), this.from, this.to )
      }, u.prototype.appendMap = function ( t, e ) {
        this.to = this.maps.push( t ), null != e && this.setMirror( this.maps.length - 1, e )
      }, u.prototype.appendMapping = function ( t ) {
        for ( var e = 0, n = this.maps.length; e < t.maps.length; e++ ) {
          var r = t.getMirror( e );
          this.appendMap( t.maps[ e ], null != r && r < e ? n + r : null )
        }
      }, u.prototype.getMirror = function ( t ) {
        if ( this.mirror )
          for ( var e = 0; e < this.mirror.length; e++ )
            if ( this.mirror[ e ] == t ) return this.mirror[ e + ( e % 2 ? -1 : 1 ) ]
      }, u.prototype.setMirror = function ( t, e ) {
        this.mirror || ( this.mirror = [] ), this.mirror.push( t, e )
      }, u.prototype.appendMappingInverted = function ( t ) {
        for ( var e = t.maps.length - 1, n = this.maps.length + t.maps.length; e >= 0; e-- ) {
          var r = t.getMirror( e );
          this.appendMap( t.maps[ e ].invert(), null != r && r > e ? n - r - 1 : null )
        }
      }, u.prototype.invert = function () {
        var t = new u;
        return t.appendMappingInverted( this ), t
      }, u.prototype.map = function ( t, e ) {
        if ( void 0 === e && ( e = 1 ), this.mirror ) return this._map( t, e, !0 );
        for ( var n = this.from; n < this.to; n++ ) t = this.maps[ n ].map( t, e );
        return t
      }, u.prototype.mapResult = function ( t, e ) {
        return void 0 === e && ( e = 1 ), this._map( t, e, !1 )
      }, u.prototype._map = function ( t, e, n ) {
        for ( var r = !1, i = this.from; i < this.to; i++ ) {
          var o = this.maps[ i ].mapResult( t, e );
          if ( null != o.recover ) {
            var s = this.getMirror( i );
            if ( null != s && s > i && s < this.to ) {
              i = s, t = this.maps[ s ].recover( o.recover );
              continue
            }
          }
          o.deleted && ( r = !0 ), t = o.pos
        }
        return n ? t : new a( t, r )
      }, c.prototype = Object.create( Error.prototype ), c.prototype.constructor = c, c.prototype.name = "TransformError";
      var l = function ( t ) {
          this.doc = t, this.steps = [], this.docs = [], this.mapping = new u
        },
        p = {
          before: {
            configurable: !0
          },
          docChanged: {
            configurable: !0
          }
        };

      function d() {
        throw new Error( "Override me" )
      }
      p.before.get = function () {
        return this.docs.length ? this.docs[ 0 ] : this.doc
      }, l.prototype.step = function ( t ) {
        var e = this.maybeStep( t );
        if ( e.failed ) throw new c( e.failed );
        return this
      }, l.prototype.maybeStep = function ( t ) {
        var e = t.apply( this.doc );
        return e.failed || this.addStep( t, e.doc ), e
      }, p.docChanged.get = function () {
        return this.steps.length > 0
      }, l.prototype.addStep = function ( t, e ) {
        this.docs.push( this.doc ), this.steps.push( t ), this.mapping.appendMap( t.getMap() ), this.doc = e
      }, Object.defineProperties( l.prototype, p );
      var f = Object.create( null ),
        h = function () {};
      h.prototype.apply = function ( t ) {
        return d()
      }, h.prototype.getMap = function () {
        return s.empty
      }, h.prototype.invert = function ( t ) {
        return d()
      }, h.prototype.map = function ( t ) {
        return d()
      }, h.prototype.merge = function ( t ) {
        return null
      }, h.prototype.toJSON = function () {
        return d()
      }, h.fromJSON = function ( t, e ) {
        if ( !e || !e.stepType ) throw new RangeError( "Invalid input for Step.fromJSON" );
        var n = f[ e.stepType ];
        if ( !n ) throw new RangeError( "No step type " + e.stepType + " defined" );
        return n.fromJSON( t, e )
      }, h.jsonID = function ( t, e ) {
        if ( t in f ) throw new RangeError( "Duplicate use of step JSON ID " + t );
        return f[ t ] = e, e.prototype.jsonID = t, e
      };
      var m = function ( t, e ) {
        this.doc = t, this.failed = e
      };
      m.ok = function ( t ) {
        return new m( t, null )
      }, m.fail = function ( t ) {
        return new m( null, t )
      }, m.fromReplace = function ( t, e, n, i ) {
        try {
          return m.ok( t.replace( e, n, i ) )
        } catch ( o ) {
          if ( o instanceof r.ReplaceError ) return m.fail( o.message );
          throw o
        }
      };
      var g = function ( t ) {
        function e( e, n, r, i ) {
          t.call( this ), this.from = e, this.to = n, this.slice = r, this.structure = !!i
        }
        return t && ( e.__proto__ = t ), e.prototype = Object.create( t && t.prototype ), e.prototype.constructor = e, e.prototype.apply = function ( t ) {
          return this.structure && v( t, this.from, this.to ) ? m.fail( "Structure replace would overwrite content" ) : m.fromReplace( t, this.from, this.to, this.slice )
        }, e.prototype.getMap = function () {
          return new s( [ this.from, this.to - this.from, this.slice.size ] )
        }, e.prototype.invert = function ( t ) {
          return new e( this.from, this.from + this.slice.size, t.slice( this.from, this.to ) )
        }, e.prototype.map = function ( t ) {
          var n = t.mapResult( this.from, 1 ),
            r = t.mapResult( this.to, -1 );
          return n.deleted && r.deleted ? null : new e( n.pos, Math.max( n.pos, r.pos ), this.slice )
        }, e.prototype.merge = function ( t ) {
          if ( !( t instanceof e ) || t.structure != this.structure ) return null;
          if ( this.from + this.slice.size != t.from || this.slice.openEnd || t.slice.openStart ) {
            if ( t.to != this.from || this.slice.openStart || t.slice.openEnd ) return null;
            var n = this.slice.size + t.slice.size == 0 ? r.Slice.empty : new r.Slice( t.slice.content.append( this.slice.content ), t.slice.openStart, this.slice.openEnd );
            return new e( t.from, this.to, n, this.structure )
          }
          var i = this.slice.size + t.slice.size == 0 ? r.Slice.empty : new r.Slice( this.slice.content.append( t.slice.content ), this.slice.openStart, t.slice.openEnd );
          return new e( this.from, this.to + ( t.to - t.from ), i, this.structure )
        }, e.prototype.toJSON = function () {
          var t = {
            stepType: "replace",
            from: this.from,
            to: this.to
          };
          return this.slice.size && ( t.slice = this.slice.toJSON() ), this.structure && ( t.structure = !0 ), t
        }, e.fromJSON = function ( t, n ) {
          if ( "number" != typeof n.from || "number" != typeof n.to ) throw new RangeError( "Invalid input for ReplaceStep.fromJSON" );
          return new e( n.from, n.to, r.Slice.fromJSON( t, n.slice ), !!n.structure )
        }, e
      }( h );
      h.jsonID( "replace", g );
      var y = function ( t ) {
        function e( e, n, r, i, o, a, s ) {
          t.call( this ), this.from = e, this.to = n, this.gapFrom = r, this.gapTo = i, this.slice = o, this.insert = a, this.structure = !!s
        }
        return t && ( e.__proto__ = t ), e.prototype = Object.create( t && t.prototype ), e.prototype.constructor = e, e.prototype.apply = function ( t ) {
          if ( this.structure && ( v( t, this.from, this.gapFrom ) || v( t, this.gapTo, this.to ) ) ) return m.fail( "Structure gap-replace would overwrite content" );
          var e = t.slice( this.gapFrom, this.gapTo );
          if ( e.openStart || e.openEnd ) return m.fail( "Gap is not a flat range" );
          var n = this.slice.insertAt( this.insert, e.content );
          return n ? m.fromReplace( t, this.from, this.to, n ) : m.fail( "Content does not fit in gap" )
        }, e.prototype.getMap = function () {
          return new s( [ this.from, this.gapFrom - this.from, this.insert, this.gapTo, this.to - this.gapTo, this.slice.size - this.insert ] )
        }, e.prototype.invert = function ( t ) {
          var n = this.gapTo - this.gapFrom;
          return new e( this.from, this.from + this.slice.size + n, this.from + this.insert, this.from + this.insert + n, t.slice( this.from, this.to ).removeBetween( this.gapFrom - this.from, this.gapTo - this.from ), this.gapFrom - this.from, this.structure )
        }, e.prototype.map = function ( t ) {
          var n = t.mapResult( this.from, 1 ),
            r = t.mapResult( this.to, -1 ),
            i = t.map( this.gapFrom, -1 ),
            o = t.map( this.gapTo, 1 );
          return n.deleted && r.deleted || i < n.pos || o > r.pos ? null : new e( n.pos, r.pos, i, o, this.slice, this.insert, this.structure )
        }, e.prototype.toJSON = function () {
          var t = {
            stepType: "replaceAround",
            from: this.from,
            to: this.to,
            gapFrom: this.gapFrom,
            gapTo: this.gapTo,
            insert: this.insert
          };
          return this.slice.size && ( t.slice = this.slice.toJSON() ), this.structure && ( t.structure = !0 ), t
        }, e.fromJSON = function ( t, n ) {
          if ( "number" != typeof n.from || "number" != typeof n.to || "number" != typeof n.gapFrom || "number" != typeof n.gapTo || "number" != typeof n.insert ) throw new RangeError( "Invalid input for ReplaceAroundStep.fromJSON" );
          return new e( n.from, n.to, n.gapFrom, n.gapTo, r.Slice.fromJSON( t, n.slice ), n.insert, !!n.structure )
        }, e
      }( h );

      function v( t, e, n ) {
        for ( var r = t.resolve( e ), i = n - e, o = r.depth; i > 0 && o > 0 && r.indexAfter( o ) == r.node( o ).childCount; ) o--, i--;
        if ( i > 0 )
          for ( var a = r.node( o ).maybeChild( r.indexAfter( o ) ); i > 0; ) {
            if ( !a || a.isLeaf ) return !0;
            a = a.firstChild, i--
          }
        return !1
      }

      function b( t, e, n ) {
        return ( 0 == e || t.canReplace( e, t.childCount ) ) && ( n == t.childCount || t.canReplace( 0, n ) )
      }

      function x( t ) {
        for ( var e = t.parent.content.cutByIndex( t.startIndex, t.endIndex ), n = t.depth;; --n ) {
          var r = t.$from.node( n ),
            i = t.$from.index( n ),
            o = t.$to.indexAfter( n );
          if ( n < t.depth && r.canReplace( i, o, e ) ) return n;
          if ( 0 == n || r.type.spec.isolating || !b( r, i, o ) ) break
        }
      }

      function k( t, e, n, r ) {
        void 0 === r && ( r = t );
        var i = function ( t, e ) {
            var n = t.parent,
              r = t.startIndex,
              i = t.endIndex,
              o = n.contentMatchAt( r ).findWrapping( e );
            if ( !o ) return null;
            var a = o.length ? o[ 0 ] : e;
            return n.canReplaceWith( r, i, a ) ? o : null
          }( t, e ),
          o = i && function ( t, e ) {
            var n = t.parent,
              r = t.startIndex,
              i = t.endIndex,
              o = n.child( r ),
              a = e.contentMatch.findWrapping( o.type );
            if ( !a ) return null;
            for ( var s = ( a.length ? a[ a.length - 1 ] : e ).contentMatch, u = r; s && u < i; u++ ) s = s.matchType( n.child( u ).type );
            if ( !s || !s.validEnd ) return null;
            return a
          }( r, e );
        return o ? i.map( _ ).concat( {
          type: e,
          attrs: n
        } ).concat( o.map( _ ) ) : null
      }

      function _( t ) {
        return {
          type: t,
          attrs: null
        }
      }

      function w( t, e, n, r ) {
        void 0 === n && ( n = 1 );
        var i = t.resolve( e ),
          o = i.depth - n,
          a = r && r[ r.length - 1 ] || i.parent;
        if ( o < 0 || i.parent.type.spec.isolating || !i.parent.canReplace( i.index(), i.parent.childCount ) || !a.type.validContent( i.parent.content.cutByIndex( i.index(), i.parent.childCount ) ) ) return !1;
        for ( var s = i.depth - 1, u = n - 2; s > o; s--, u-- ) {
          var c = i.node( s ),
            l = i.index( s );
          if ( c.type.spec.isolating ) return !1;
          var p = c.content.cutByIndex( l, c.childCount ),
            d = r && r[ u ] || c;
          if ( d != c && ( p = p.replaceChild( 0, d.type.create( d.attrs ) ) ), !c.canReplace( l + 1, c.childCount ) || !d.type.validContent( p ) ) return !1
        }
        var f = i.indexAfter( o ),
          h = r && r[ 0 ];
        return i.node( o ).canReplaceWith( f, f, h ? h.type : i.node( o + 1 ).type )
      }

      function A( t, e ) {
        var n = t.resolve( e ),
          r = n.index();
        return D( n.nodeBefore, n.nodeAfter ) && n.parent.canReplace( r, r + 1 )
      }

      function D( t, e ) {
        return t && e && !t.isLeaf && t.canAppend( e )
      }

      function O( t, e, n ) {
        void 0 === n && ( n = -1 );
        for ( var r = t.resolve( e ), i = r.depth;; i-- ) {
          var o = void 0,
            a = void 0,
            s = r.index( i );
          if ( i == r.depth ? ( o = r.nodeBefore, a = r.nodeAfter ) : n > 0 ? ( o = r.node( i + 1 ), s++, a = r.node( i ).maybeChild( s ) ) : ( o = r.node( i ).maybeChild( s - 1 ), a = r.node( i + 1 ) ), o && !o.isTextblock && D( o, a ) && r.node( i ).canReplace( s, s + 1 ) ) return e;
          if ( 0 == i ) break;
          e = n < 0 ? r.before( i ) : r.after( i )
        }
      }

      function C( t, e, n ) {
        var r = t.resolve( e );
        if ( r.parent.canReplaceWith( r.index(), r.index(), n ) ) return e;
        if ( 0 == r.parentOffset )
          for ( var i = r.depth - 1; i >= 0; i-- ) {
            var o = r.index( i );
            if ( r.node( i ).canReplaceWith( o, o, n ) ) return r.before( i + 1 );
            if ( o > 0 ) return null
          }
        if ( r.parentOffset == r.parent.content.size )
          for ( var a = r.depth - 1; a >= 0; a-- ) {
            var s = r.indexAfter( a );
            if ( r.node( a ).canReplaceWith( s, s, n ) ) return r.after( a + 1 );
            if ( s < r.node( a ).childCount ) return null
          }
      }

      function M( t, e, n ) {
        var r = t.resolve( e );
        if ( !n.content.size ) return e;
        for ( var i = n.content, o = 0; o < n.openStart; o++ ) i = i.firstChild.content;
        for ( var a = 1; a <= ( 0 == n.openStart && n.size ? 2 : 1 ); a++ )
          for ( var s = r.depth; s >= 0; s-- ) {
            var u = s == r.depth ? 0 : r.pos <= ( r.start( s + 1 ) + r.end( s + 1 ) ) / 2 ? -1 : 1,
              c = r.index( s ) + ( u > 0 ? 1 : 0 );
            if ( 1 == a ? r.node( s ).canReplace( c, c, i ) : r.node( s ).contentMatchAt( c ).findWrapping( i.firstChild.type ) ) return 0 == u ? r.pos : u < 0 ? r.before( s + 1 ) : r.after( s + 1 )
          }
        return null
      }

      function F( t, e, n ) {
        for ( var i = [], o = 0; o < t.childCount; o++ ) {
          var a = t.child( o );
          a.content.size && ( a = a.copy( F( a.content, e, a ) ) ), a.isInline && ( a = e( a, n, o ) ), i.push( a )
        }
        return r.Fragment.fromArray( i )
      }
      h.jsonID( "replaceAround", y ), l.prototype.lift = function ( t, e ) {
        for ( var n = t.$from, i = t.$to, o = t.depth, a = n.before( o + 1 ), s = i.after( o + 1 ), u = a, c = s, l = r.Fragment.empty, p = 0, d = o, f = !1; d > e; d-- ) f || n.index( d ) > 0 ? ( f = !0, l = r.Fragment.from( n.node( d ).copy( l ) ), p++ ) : u--;
        for ( var h = r.Fragment.empty, m = 0, g = o, v = !1; g > e; g-- ) v || i.after( g + 1 ) < i.end( g ) ? ( v = !0, h = r.Fragment.from( i.node( g ).copy( h ) ), m++ ) : c++;
        return this.step( new y( u, c, a, s, new r.Slice( l.append( h ), p, m ), l.size - p, !0 ) )
      }, l.prototype.wrap = function ( t, e ) {
        for ( var n = r.Fragment.empty, i = e.length - 1; i >= 0; i-- ) n = r.Fragment.from( e[ i ].type.create( e[ i ].attrs, n ) );
        var o = t.start,
          a = t.end;
        return this.step( new y( o, a, o, a, new r.Slice( n, 0, 0 ), e.length, !0 ) )
      }, l.prototype.setBlockType = function ( t, e, n, i ) {
        var o = this;
        if ( void 0 === e && ( e = t ), !n.isTextblock ) throw new RangeError( "Type given to setBlockType should be a textblock" );
        var a = this.steps.length;
        return this.doc.nodesBetween( t, e, ( function ( t, e ) {
          if ( t.isTextblock && !t.hasMarkup( n, i ) && function ( t, e, n ) {
              var r = t.resolve( e ),
                i = r.index();
              return r.parent.canReplaceWith( i, i + 1, n )
            }( o.doc, o.mapping.slice( a ).map( e ), n ) ) {
            o.clearIncompatible( o.mapping.slice( a ).map( e, 1 ), n );
            var s = o.mapping.slice( a ),
              u = s.map( e, 1 ),
              c = s.map( e + t.nodeSize, 1 );
            return o.step( new y( u, c, u + 1, c - 1, new r.Slice( r.Fragment.from( n.create( i, null, t.marks ) ), 0, 0 ), 1, !0 ) ), !1
          }
        } ) ), this
      }, l.prototype.setNodeMarkup = function ( t, e, n, i ) {
        var o = this.doc.nodeAt( t );
        if ( !o ) throw new RangeError( "No node at given position" );
        e || ( e = o.type );
        var a = e.create( n, null, i || o.marks );
        if ( o.isLeaf ) return this.replaceWith( t, t + o.nodeSize, a );
        if ( !e.validContent( o.content ) ) throw new RangeError( "Invalid content for node type " + e.name );
        return this.step( new y( t, t + o.nodeSize, t + 1, t + o.nodeSize - 1, new r.Slice( r.Fragment.from( a ), 0, 0 ), 1, !0 ) )
      }, l.prototype.split = function ( t, e, n ) {
        void 0 === e && ( e = 1 );
        for ( var i = this.doc.resolve( t ), o = r.Fragment.empty, a = r.Fragment.empty, s = i.depth, u = i.depth - e, c = e - 1; s > u; s--, c-- ) {
          o = r.Fragment.from( i.node( s ).copy( o ) );
          var l = n && n[ c ];
          a = r.Fragment.from( l ? l.type.create( l.attrs, a ) : i.node( s ).copy( a ) )
        }
        return this.step( new g( t, t, new r.Slice( o.append( a ), e, e ), !0 ) )
      }, l.prototype.join = function ( t, e ) {
        void 0 === e && ( e = 1 );
        var n = new g( t - e, t + e, r.Slice.empty, !0 );
        return this.step( n )
      };
      var S = function ( t ) {
        function e( e, n, r ) {
          t.call( this ), this.from = e, this.to = n, this.mark = r
        }
        return t && ( e.__proto__ = t ), e.prototype = Object.create( t && t.prototype ), e.prototype.constructor = e, e.prototype.apply = function ( t ) {
          var e = this,
            n = t.slice( this.from, this.to ),
            i = t.resolve( this.from ),
            o = i.node( i.sharedDepth( this.to ) ),
            a = new r.Slice( F( n.content, ( function ( t, n ) {
              return n.type.allowsMarkType( e.mark.type ) ? t.mark( e.mark.addToSet( t.marks ) ) : t
            } ), o ), n.openStart, n.openEnd );
          return m.fromReplace( t, this.from, this.to, a )
        }, e.prototype.invert = function () {
          return new E( this.from, this.to, this.mark )
        }, e.prototype.map = function ( t ) {
          var n = t.mapResult( this.from, 1 ),
            r = t.mapResult( this.to, -1 );
          return n.deleted && r.deleted || n.pos >= r.pos ? null : new e( n.pos, r.pos, this.mark )
        }, e.prototype.merge = function ( t ) {
          if ( t instanceof e && t.mark.eq( this.mark ) && this.from <= t.to && this.to >= t.from ) return new e( Math.min( this.from, t.from ), Math.max( this.to, t.to ), this.mark )
        }, e.prototype.toJSON = function () {
          return {
            stepType: "addMark",
            mark: this.mark.toJSON(),
            from: this.from,
            to: this.to
          }
        }, e.fromJSON = function ( t, n ) {
          if ( "number" != typeof n.from || "number" != typeof n.to ) throw new RangeError( "Invalid input for AddMarkStep.fromJSON" );
          return new e( n.from, n.to, t.markFromJSON( n.mark ) )
        }, e
      }( h );
      h.jsonID( "addMark", S );
      var E = function ( t ) {
        function e( e, n, r ) {
          t.call( this ), this.from = e, this.to = n, this.mark = r
        }
        return t && ( e.__proto__ = t ), e.prototype = Object.create( t && t.prototype ), e.prototype.constructor = e, e.prototype.apply = function ( t ) {
          var e = this,
            n = t.slice( this.from, this.to ),
            i = new r.Slice( F( n.content, ( function ( t ) {
              return t.mark( e.mark.removeFromSet( t.marks ) )
            } ) ), n.openStart, n.openEnd );
          return m.fromReplace( t, this.from, this.to, i )
        }, e.prototype.invert = function () {
          return new S( this.from, this.to, this.mark )
        }, e.prototype.map = function ( t ) {
          var n = t.mapResult( this.from, 1 ),
            r = t.mapResult( this.to, -1 );
          return n.deleted && r.deleted || n.pos >= r.pos ? null : new e( n.pos, r.pos, this.mark )
        }, e.prototype.merge = function ( t ) {
          if ( t instanceof e && t.mark.eq( this.mark ) && this.from <= t.to && this.to >= t.from ) return new e( Math.min( this.from, t.from ), Math.max( this.to, t.to ), this.mark )
        }, e.prototype.toJSON = function () {
          return {
            stepType: "removeMark",
            mark: this.mark.toJSON(),
            from: this.from,
            to: this.to
          }
        }, e.fromJSON = function ( t, n ) {
          if ( "number" != typeof n.from || "number" != typeof n.to ) throw new RangeError( "Invalid input for RemoveMarkStep.fromJSON" );
          return new e( n.from, n.to, t.markFromJSON( n.mark ) )
        }, e
      }( h );

      function z( t, e, n, i ) {
        if ( void 0 === n && ( n = e ), void 0 === i && ( i = r.Slice.empty ), e == n && !i.size ) return null;
        var o = t.resolve( e ),
          a = t.resolve( n );
        return N( o, a, i ) ? new g( e, n, i ) : new T( o, a, i ).fit()
      }

      function N( t, e, n ) {
        return !n.openStart && !n.openEnd && t.start() == e.start() && t.parent.canReplace( t.index(), e.index(), n.content )
      }
      h.jsonID( "removeMark", E ), l.prototype.addMark = function ( t, e, n ) {
        var r = this,
          i = [],
          o = [],
          a = null,
          s = null;
        return this.doc.nodesBetween( t, e, ( function ( r, u, c ) {
          if ( r.isInline ) {
            var l = r.marks;
            if ( !n.isInSet( l ) && c.type.allowsMarkType( n.type ) ) {
              for ( var p = Math.max( u, t ), d = Math.min( u + r.nodeSize, e ), f = n.addToSet( l ), h = 0; h < l.length; h++ ) l[ h ].isInSet( f ) || ( a && a.to == p && a.mark.eq( l[ h ] ) ? a.to = d : i.push( a = new E( p, d, l[ h ] ) ) );
              s && s.to == p ? s.to = d : o.push( s = new S( p, d, n ) )
            }
          }
        } ) ), i.forEach( ( function ( t ) {
          return r.step( t )
        } ) ), o.forEach( ( function ( t ) {
          return r.step( t )
        } ) ), this
      }, l.prototype.removeMark = function ( t, e, n ) {
        var i = this;
        void 0 === n && ( n = null );
        var o = [],
          a = 0;
        return this.doc.nodesBetween( t, e, ( function ( i, s ) {
          if ( i.isInline ) {
            a++;
            var u = null;
            if ( n instanceof r.MarkType ) {
              var c = n.isInSet( i.marks );
              c && ( u = [ c ] )
            } else n ? n.isInSet( i.marks ) && ( u = [ n ] ) : u = i.marks;
            if ( u && u.length )
              for ( var l = Math.min( s + i.nodeSize, e ), p = 0; p < u.length; p++ ) {
                for ( var d = u[ p ], f = void 0, h = 0; h < o.length; h++ ) {
                  var m = o[ h ];
                  m.step == a - 1 && d.eq( o[ h ].style ) && ( f = m )
                }
                f ? ( f.to = l, f.step = a ) : o.push( {
                  style: d,
                  from: Math.max( s, t ),
                  to: l,
                  step: a
                } )
              }
          }
        } ) ), o.forEach( ( function ( t ) {
          return i.step( new E( t.from, t.to, t.style ) )
        } ) ), this
      }, l.prototype.clearIncompatible = function ( t, e, n ) {
        void 0 === n && ( n = e.contentMatch );
        for ( var i = this.doc.nodeAt( t ), o = [], a = t + 1, s = 0; s < i.childCount; s++ ) {
          var u = i.child( s ),
            c = a + u.nodeSize,
            l = n.matchType( u.type, u.attrs );
          if ( l ) {
            n = l;
            for ( var p = 0; p < u.marks.length; p++ ) e.allowsMarkType( u.marks[ p ].type ) || this.step( new E( a, c, u.marks[ p ] ) )
          } else o.push( new g( a, c, r.Slice.empty ) );
          a = c
        }
        if ( !n.validEnd ) {
          var d = n.fillBefore( r.Fragment.empty, !0 );
          this.replace( a, a, new r.Slice( d, 0, 0 ) )
        }
        for ( var f = o.length - 1; f >= 0; f-- ) this.step( o[ f ] );
        return this
      }, l.prototype.replace = function ( t, e, n ) {
        void 0 === e && ( e = t ), void 0 === n && ( n = r.Slice.empty );
        var i = z( this.doc, t, e, n );
        return i && this.step( i ), this
      }, l.prototype.replaceWith = function ( t, e, n ) {
        return this.replace( t, e, new r.Slice( r.Fragment.from( n ), 0, 0 ) )
      }, l.prototype.delete = function ( t, e ) {
        return this.replace( t, e, r.Slice.empty )
      }, l.prototype.insert = function ( t, e ) {
        return this.replaceWith( t, t, e )
      };
      var T = function ( t, e, n ) {
          this.$to = e, this.$from = t, this.unplaced = n, this.frontier = [];
          for ( var i = 0; i <= t.depth; i++ ) {
            var o = t.node( i );
            this.frontier.push( {
              type: o.type,
              match: o.contentMatchAt( t.indexAfter( i ) )
            } )
          }
          this.placed = r.Fragment.empty;
          for ( var a = t.depth; a > 0; a-- ) this.placed = r.Fragment.from( t.node( a ).copy( this.placed ) )
        },
        I = {
          depth: {
            configurable: !0
          }
        };

      function j( t, e, n ) {
        return 0 == e ? t.cutByIndex( n ) : t.replaceChild( 0, t.firstChild.copy( j( t.firstChild.content, e - 1, n ) ) )
      }

      function B( t, e, n ) {
        return 0 == e ? t.append( n ) : t.replaceChild( t.childCount - 1, t.lastChild.copy( B( t.lastChild.content, e - 1, n ) ) )
      }

      function R( t, e ) {
        for ( var n = 0; n < e; n++ ) t = t.firstChild.content;
        return t
      }

      function L( t, e, n ) {
        if ( e <= 0 ) return t;
        var i = t.content;
        return e > 1 && ( i = i.replaceChild( 0, L( i.firstChild, e - 1, 1 == i.childCount ? n - 1 : 0 ) ) ), e > 0 && ( i = t.type.contentMatch.fillBefore( i ).append( i ), n <= 0 && ( i = i.append( t.type.contentMatch.matchFragment( i ).fillBefore( r.Fragment.empty, !0 ) ) ) ), t.copy( i )
      }

      function P( t, e, n, r, i ) {
        var o = t.node( e ),
          a = i ? t.indexAfter( e ) : t.index( e );
        if ( a == o.childCount && !n.compatibleContent( o.type ) ) return null;
        var s = r.fillBefore( o.content, !0, a );
        return s && ! function ( t, e, n ) {
          for ( var r = n; r < e.childCount; r++ )
            if ( !t.allowsMarks( e.child( r ).marks ) ) return !0;
          return !1
        }( n, o.content, a ) ? s : null
      }

      function J( t, e, n, i, o ) {
        if ( e < n ) {
          var a = t.firstChild;
          t = t.replaceChild( 0, a.copy( J( a.content, e + 1, n, i, a ) ) )
        }
        if ( e > i ) {
          var s = o.contentMatchAt( 0 ),
            u = s.fillBefore( t ).append( t );
          t = u.append( s.matchFragment( u ).fillBefore( r.Fragment.empty, !0 ) )
        }
        return t
      }

      function $( t, e ) {
        for ( var n = [], r = Math.min( t.depth, e.depth ); r >= 0; r-- ) {
          var i = t.start( r );
          if ( i < t.pos - ( t.depth - r ) || e.end( r ) > e.pos + ( e.depth - r ) || t.node( r ).type.spec.isolating || e.node( r ).type.spec.isolating ) break;
          i == e.start( r ) && n.push( r )
        }
        return n
      }
      I.depth.get = function () {
        return this.frontier.length - 1
      }, T.prototype.fit = function () {
        for ( ; this.unplaced.size; ) {
          var t = this.findFittable();
          t ? this.placeNodes( t ) : this.openMore() || this.dropNode()
        }
        var e = this.mustMoveInline(),
          n = this.placed.size - this.depth - this.$from.depth,
          i = this.$from,
          o = this.close( e < 0 ? this.$to : i.doc.resolve( e ) );
        if ( !o ) return null;
        for ( var a = this.placed, s = i.depth, u = o.depth; s && u && 1 == a.childCount; ) a = a.firstChild.content, s--, u--;
        var c = new r.Slice( a, s, u );
        return e > -1 ? new y( i.pos, e, this.$to.pos, this.$to.end(), c, n ) : c.size || i.pos != this.$to.pos ? new g( i.pos, o.pos, c ) : void 0
      }, T.prototype.findFittable = function () {
        for ( var t = 1; t <= 2; t++ )
          for ( var e = this.unplaced.openStart; e >= 0; e-- )
            for ( var n = void 0, i = ( e ? ( n = R( this.unplaced.content, e - 1 ).firstChild ).content : this.unplaced.content ).firstChild, o = this.depth; o >= 0; o-- ) {
              var a = this.frontier[ o ],
                s = a.type,
                u = a.match,
                c = void 0,
                l = void 0;
              if ( 1 == t && ( i ? u.matchType( i.type ) || ( l = u.fillBefore( r.Fragment.from( i ), !1 ) ) : s.compatibleContent( n.type ) ) ) return {
                sliceDepth: e,
                frontierDepth: o,
                parent: n,
                inject: l
              };
              if ( 2 == t && i && ( c = u.findWrapping( i.type ) ) ) return {
                sliceDepth: e,
                frontierDepth: o,
                parent: n,
                wrap: c
              };
              if ( n && u.matchType( n.type ) ) break
            }
      }, T.prototype.openMore = function () {
        var t = this.unplaced,
          e = t.content,
          n = t.openStart,
          i = t.openEnd,
          o = R( e, n );
        return !( !o.childCount || o.firstChild.isLeaf ) && ( this.unplaced = new r.Slice( e, n + 1, Math.max( i, o.size + n >= e.size - i ? n + 1 : 0 ) ), !0 )
      }, T.prototype.dropNode = function () {
        var t = this.unplaced,
          e = t.content,
          n = t.openStart,
          i = t.openEnd,
          o = R( e, n );
        if ( o.childCount <= 1 && n > 0 ) {
          var a = e.size - n <= n + o.size;
          this.unplaced = new r.Slice( j( e, n - 1, 1 ), n - 1, a ? n - 1 : i )
        } else this.unplaced = new r.Slice( j( e, n, 1 ), n, i )
      }, T.prototype.placeNodes = function ( t ) {
        for ( var e = t.sliceDepth, n = t.frontierDepth, i = t.parent, o = t.inject, a = t.wrap; this.depth > n; ) this.closeFrontierNode();
        if ( a )
          for ( var s = 0; s < a.length; s++ ) this.openFrontierNode( a[ s ] );
        var u = this.unplaced,
          c = i ? i.content : u.content,
          l = u.openStart - e,
          p = 0,
          d = [],
          f = this.frontier[ n ],
          h = f.match,
          m = f.type;
        if ( o ) {
          for ( var g = 0; g < o.childCount; g++ ) d.push( o.child( g ) );
          h = h.matchFragment( o )
        }
        for ( var y = c.size + e - ( u.content.size - u.openEnd ); p < c.childCount; ) {
          var v = c.child( p ),
            b = h.matchType( v.type );
          if ( !b ) break;
          ( ++p > 1 || 0 == l || v.content.size ) && ( h = b, d.push( L( v.mark( m.allowedMarks( v.marks ) ), 1 == p ? l : 0, p == c.childCount ? y : -1 ) ) )
        }
        var x = p == c.childCount;
        x || ( y = -1 ), this.placed = B( this.placed, n, r.Fragment.from( d ) ), this.frontier[ n ].match = h, x && y < 0 && i && i.type == this.frontier[ this.depth ].type && this.frontier.length > 1 && this.closeFrontierNode();
        for ( var k = 0, _ = c; k < y; k++ ) {
          var w = _.lastChild;
          this.frontier.push( {
            type: w.type,
            match: w.contentMatchAt( w.childCount )
          } ), _ = w.content
        }
        this.unplaced = x ? 0 == e ? r.Slice.empty : new r.Slice( j( u.content, e - 1, 1 ), e - 1, y < 0 ? u.openEnd : e - 1 ) : new r.Slice( j( u.content, e, p ), u.openStart, u.openEnd )
      }, T.prototype.mustMoveInline = function () {
        if ( !this.$to.parent.isTextblock || this.$to.end() == this.$to.pos ) return -1;
        var t, e = this.frontier[ this.depth ];
        if ( !e.type.isTextblock || !P( this.$to, this.$to.depth, e.type, e.match, !1 ) || this.$to.depth == this.depth && ( t = this.findCloseLevel( this.$to ) ) && t.depth == this.depth ) return -1;
        for ( var n = this.$to.depth, r = this.$to.after( n ); n > 1 && r == this.$to.end( --n ); ) ++r;
        return r
      }, T.prototype.findCloseLevel = function ( t ) {
        t: for ( var e = Math.min( this.depth, t.depth ); e >= 0; e-- ) {
          var n = this.frontier[ e ],
            r = n.match,
            i = n.type,
            o = e < t.depth && t.end( e + 1 ) == t.pos + ( t.depth - ( e + 1 ) ),
            a = P( t, e, i, r, o );
          if ( a ) {
            for ( var s = e - 1; s >= 0; s-- ) {
              var u = this.frontier[ s ],
                c = u.match,
                l = P( t, s, u.type, c, !0 );
              if ( !l || l.childCount ) continue t
            }
            return {
              depth: e,
              fit: a,
              move: o ? t.doc.resolve( t.after( e + 1 ) ) : t
            }
          }
        }
      }, T.prototype.close = function ( t ) {
        var e = this.findCloseLevel( t );
        if ( !e ) return null;
        for ( ; this.depth > e.depth; ) this.closeFrontierNode();
        e.fit.childCount && ( this.placed = B( this.placed, e.depth, e.fit ) ), t = e.move;
        for ( var n = e.depth + 1; n <= t.depth; n++ ) {
          var r = t.node( n ),
            i = r.type.contentMatch.fillBefore( r.content, !0, t.index( n ) );
          this.openFrontierNode( r.type, r.attrs, i )
        }
        return t
      }, T.prototype.openFrontierNode = function ( t, e, n ) {
        var i = this.frontier[ this.depth ];
        i.match = i.match.matchType( t ), this.placed = B( this.placed, this.depth, r.Fragment.from( t.create( e, n ) ) ), this.frontier.push( {
          type: t,
          match: t.contentMatch
        } )
      }, T.prototype.closeFrontierNode = function () {
        var t = this.frontier.pop().match.fillBefore( r.Fragment.empty, !0 );
        t.childCount && ( this.placed = B( this.placed, this.frontier.length, t ) )
      }, Object.defineProperties( T.prototype, I ), l.prototype.replaceRange = function ( t, e, n ) {
        if ( !n.size ) return this.deleteRange( t, e );
        var i = this.doc.resolve( t ),
          o = this.doc.resolve( e );
        if ( N( i, o, n ) ) return this.step( new g( t, e, n ) );
        var a = $( i, this.doc.resolve( e ) );
        0 == a[ a.length - 1 ] && a.pop();
        var s = -( i.depth + 1 );
        a.unshift( s );
        for ( var u = i.depth, c = i.pos - 1; u > 0; u--, c-- ) {
          var l = i.node( u ).type.spec;
          if ( l.defining || l.isolating ) break;
          a.indexOf( u ) > -1 ? s = u : i.before( u ) == c && a.splice( 1, 0, -u )
        }
        for ( var p = a.indexOf( s ), d = [], f = n.openStart, h = n.content, m = 0;; m++ ) {
          var y = h.firstChild;
          if ( d.push( y ), m == n.openStart ) break;
          h = y.content
        }
        f > 0 && d[ f - 1 ].type.spec.defining && i.node( p ).type != d[ f - 1 ].type ? f -= 1 : f >= 2 && d[ f - 1 ].isTextblock && d[ f - 2 ].type.spec.defining && i.node( p ).type != d[ f - 2 ].type && ( f -= 2 );
        for ( var v = n.openStart; v >= 0; v-- ) {
          var b = ( v + f + 1 ) % ( n.openStart + 1 ),
            x = d[ b ];
          if ( x )
            for ( var k = 0; k < a.length; k++ ) {
              var _ = a[ ( k + p ) % a.length ],
                w = !0;
              _ < 0 && ( w = !1, _ = -_ );
              var A = i.node( _ - 1 ),
                D = i.index( _ - 1 );
              if ( A.canReplaceWith( D, D, x.type, x.marks ) ) return this.replace( i.before( _ ), w ? o.after( _ ) : e, new r.Slice( J( n.content, 0, n.openStart, b ), b, n.openEnd ) )
            }
        }
        for ( var O = this.steps.length, C = a.length - 1; C >= 0 && ( this.replace( t, e, n ), !( this.steps.length > O ) ); C-- ) {
          var M = a[ C ];
          C < 0 || ( t = i.before( M ), e = o.after( M ) )
        }
        return this
      }, l.prototype.replaceRangeWith = function ( t, e, n ) {
        if ( !n.isInline && t == e && this.doc.resolve( t ).parent.content.size ) {
          var i = C( this.doc, t, n.type );
          null != i && ( t = e = i )
        }
        return this.replaceRange( t, e, new r.Slice( r.Fragment.from( n ), 0, 0 ) )
      }, l.prototype.deleteRange = function ( t, e ) {
        for ( var n = this.doc.resolve( t ), r = this.doc.resolve( e ), i = $( n, r ), o = 0; o < i.length; o++ ) {
          var a = i[ o ],
            s = o == i.length - 1;
          if ( s && 0 == a || n.node( a ).type.contentMatch.validEnd ) return this.delete( n.start( a ), r.end( a ) );
          if ( a > 0 && ( s || n.node( a - 1 ).canReplace( n.index( a - 1 ), r.indexAfter( a - 1 ) ) ) ) return this.delete( n.before( a ), r.after( a ) )
        }
        for ( var u = 1; u <= n.depth && u <= r.depth; u++ )
          if ( t - n.start( u ) == n.depth - u && e > n.end( u ) && r.end( u ) - e != r.depth - u ) return this.delete( n.before( u ), e );
        return this.delete( t, e )
      }
    },
    UnAI: function ( t, e, n ) {
      "use strict";
      n.d( e, "a", ( function () {
        return r
      } ) );
      const r = {
        inline: !1,
        group: "block",
        draggable: !0,
        selectable: !0,
        attrs: {
          url: {
            default: null
          },
          data: {
            default: null
          }
        },
        parseDOM: [ {
          tag: "a[data-block-card]",
          priority: 100,
          getAttrs: t => {
            const e = t,
              n = e.getAttribute( "data-card-data" );
            return {
              url: e.getAttribute( "href" ) || null,
              data: n ? JSON.parse( n ) : null
            }
          }
        }, {
          tag: "div[data-block-card]",
          getAttrs: t => {
            const e = t,
              n = e.getAttribute( "data-card-data" );
            return {
              url: e.getAttribute( "data-card-url" ) || null,
              data: n ? JSON.parse( n ) : null
            }
          }
        } ],
        toDOM: t => [ "a", {
          "data-block-card": "",
          href: t.attrs.url || "",
          "data-card-data": t.attrs.data ? JSON.stringify( t.attrs.data ) : ""
        } ]
      }
    },
    V6qP: function ( t, e, n ) {
      "use strict";
      n.d( e, "a", ( function () {
        return r
      } ) );
      const r = {
        toDOM: () => [ "span" ],
        attrs: {
          type: {},
          unsupported: {}
        }
      }
    },
    Vhfh: function ( t, e, n ) {
      "use strict";
      n.d( e, "a", ( function () {
        return i
      } ) ), n.d( e, "b", ( function () {
        return o
      } ) ), n.d( e, "c", ( function () {
        return a
      } ) );
      var r = n( "Czhu" );
      const i = {
          inline: !1,
          group: "block",
          selectable: !0,
          atom: !0,
          content: "media",
          attrs: {
            width: {
              default: null
            },
            layout: {
              default: "center"
            }
          },
          marks: "unsupportedMark unsupportedNodeAttribute link",
          parseDOM: [ {
            tag: 'div[data-node-type="mediaSingle"]',
            getAttrs: t => ( {
              layout: t.getAttribute( "data-layout" ) || "center",
              width: Number( t.getAttribute( "data-width" ) ) || null
            } )
          } ],
          toDOM( t ) {
            const {
              layout: e,
              width: n
            } = t.attrs, r = {
              "data-node-type": "mediaSingle",
              "data-layout": e,
              "data-width": ""
            };
            return n && ( r[ "data-width" ] = isFinite( n ) && Math.floor( n ) === n ? n : n.toFixed( 2 ) ), [ "div", r, 0 ]
          }
        },
        o = Object( r.a )( Object( r.a )( {}, i ), {}, {
          content: "media caption?",
          atom: !1
        } ),
        a = t => ( {
          attrs: Object.keys( t.attrs ).reduce( ( e, n ) => ( null !== t.attrs[ n ] && ( e[ n ] = t.attrs[ n ] ), e ), {} )
        } )
    },
    W5QA: function ( t, e, n ) {
      "use strict";
      n.d( e, "a", ( function () {
        return o
      } ) );
      var r = n( "ljyt" ),
        i = n( "HCLf" );
      const o = {
        inclusive: !0,
        group: r.f,
        parseDOM: [ {
          tag: "span[data-type-ahead-query]"
        } ],
        toDOM: t => [ "span", {
          "data-type-ahead-query": "true",
          "data-trigger": t.attrs.trigger,
          style: "color: " + i.b
        } ],
        attrs: {
          trigger: {
            default: ""
          }
        }
      }
    },
    XE1N: function ( t ) {
      t.exports = JSON.parse( '{"aliceblue":"#f0f8ff","antiquewhite":"#faebd7","aqua":"#00ffff","aquamarine":"#7fffd4","azure":"#f0ffff","beige":"#f5f5dc","bisque":"#ffe4c4","black":"#000000","blanchedalmond":"#ffebcd","blue":"#0000ff","blueviolet":"#8a2be2","brown":"#a52a2a","burlywood":"#deb887","cadetblue":"#5f9ea0","chartreuse":"#7fff00","chocolate":"#d2691e","coral":"#ff7f50","cornflowerblue":"#6495ed","cornsilk":"#fff8dc","crimson":"#dc143c","cyan":"#00ffff","darkblue":"#00008b","darkcyan":"#008b8b","darkgoldenrod":"#b8860b","darkgray":"#a9a9a9","darkgreen":"#006400","darkgrey":"#a9a9a9","darkkhaki":"#bdb76b","darkmagenta":"#8b008b","darkolivegreen":"#556b2f","darkorange":"#ff8c00","darkorchid":"#9932cc","darkred":"#8b0000","darksalmon":"#e9967a","darkseagreen":"#8fbc8f","darkslateblue":"#483d8b","darkslategray":"#2f4f4f","darkslategrey":"#2f4f4f","darkturquoise":"#00ced1","darkviolet":"#9400d3","deeppink":"#ff1493","deepskyblue":"#00bfff","dimgray":"#696969","dimgrey":"#696969","dodgerblue":"#1e90ff","firebrick":"#b22222","floralwhite":"#fffaf0","forestgreen":"#228b22","fuchsia":"#ff00ff","gainsboro":"#dcdcdc","ghostwhite":"#f8f8ff","gold":"#ffd700","goldenrod":"#daa520","gray":"#808080","green":"#008000","greenyellow":"#adff2f","grey":"#808080","honeydew":"#f0fff0","hotpink":"#ff69b4","indianred":"#cd5c5c","indigo":"#4b0082","ivory":"#fffff0","khaki":"#f0e68c","lavender":"#e6e6fa","lavenderblush":"#fff0f5","lawngreen":"#7cfc00","lemonchiffon":"#fffacd","lightblue":"#add8e6","lightcoral":"#f08080","lightcyan":"#e0ffff","lightgoldenrodyellow":"#fafad2","lightgray":"#d3d3d3","lightgreen":"#90ee90","lightgrey":"#d3d3d3","lightpink":"#ffb6c1","lightsalmon":"#ffa07a","lightseagreen":"#20b2aa","lightskyblue":"#87cefa","lightslategray":"#778899","lightslategrey":"#778899","lightsteelblue":"#b0c4de","lightyellow":"#ffffe0","lime":"#00ff00","limegreen":"#32cd32","linen":"#faf0e6","magenta":"#ff00ff","maroon":"#800000","mediumaquamarine":"#66cdaa","mediumblue":"#0000cd","mediumorchid":"#ba55d3","mediumpurple":"#9370db","mediumseagreen":"#3cb371","mediumslateblue":"#7b68ee","mediumspringgreen":"#00fa9a","mediumturquoise":"#48d1cc","mediumvioletred":"#c71585","midnightblue":"#191970","mintcream":"#f5fffa","mistyrose":"#ffe4e1","moccasin":"#ffe4b5","navajowhite":"#ffdead","navy":"#000080","oldlace":"#fdf5e6","olive":"#808000","olivedrab":"#6b8e23","orange":"#ffa500","orangered":"#ff4500","orchid":"#da70d6","palegoldenrod":"#eee8aa","palegreen":"#98fb98","paleturquoise":"#afeeee","palevioletred":"#db7093","papayawhip":"#ffefd5","peachpuff":"#ffdab9","peru":"#cd853f","pink":"#ffc0cb","plum":"#dda0dd","powderblue":"#b0e0e6","purple":"#800080","rebeccapurple":"#663399","red":"#ff0000","rosybrown":"#bc8f8f","royalblue":"#4169e1","saddlebrown":"#8b4513","salmon":"#fa8072","sandybrown":"#f4a460","seagreen":"#2e8b57","seashell":"#fff5ee","sienna":"#a0522d","silver":"#c0c0c0","skyblue":"#87ceeb","slateblue":"#6a5acd","slategray":"#708090","slategrey":"#708090","snow":"#fffafa","springgreen":"#00ff7f","steelblue":"#4682b4","tan":"#d2b48c","teal":"#008080","thistle":"#d8bfd8","tomato":"#ff6347","turquoise":"#40e0d0","violet":"#ee82ee","wheat":"#f5deb3","white":"#ffffff","whitesmoke":"#f5f5f5","yellow":"#ffff00","yellowgreen":"#9acd32"}' )
    },
    XQko: function ( t, e, n ) {
      "use strict";
      n.d( e, "a", ( function () {
        return i
      } ) );
      const r = "confluenceJiraIssue",
        i = {
          group: "inline",
          inline: !0,
          atom: !0,
          attrs: {
            issueKey: {
              default: ""
            },
            macroId: {
              default: null
            },
            schemaVersion: {
              default: null
            },
            server: {
              default: null
            },
            serverId: {
              default: null
            }
          },
          parseDOM: [ {
            tag: `span[data-node-type="${r}"]`,
            getAttrs: t => {
              const e = t;
              return {
                issueKey: e.textContent,
                macroId: e.dataset && e.dataset.macroId,
                schemaVersion: e.dataset && e.dataset.schemaVersion,
                server: e.dataset && e.dataset.server,
                serverId: e.dataset && e.dataset.serverId
              }
            }
          } ],
          toDOM: t => [ "span", {
            "data-node-type": r,
            "data-macro-id": t.attrs.macroId,
            "data-schema-version": t.attrs.schemaVersion,
            "data-server": t.attrs.server,
            "data-server-id": t.attrs.serverId,
            "data-jira-issue": t.attrs.issueKey
          }, t.attrs.issueKey ]
        }
    },
    XayN: function ( t, e, n ) {
      "use strict";
      n.d( e, "b", ( function () {
        return r
      } ) ), n.d( e, "a", ( function () {
        return i
      } ) );
      const r = ".ak-ol",
        i = {
          group: "block",
          content: "listItem+",
          marks: "unsupportedMark unsupportedNodeAttribute",
          selectable: !1,
          parseDOM: [ {
            tag: "ol"
          } ],
          toDOM: () => [ "ol", {
            class: r.substr( 1 )
          }, 0 ]
        }
    },
    YR5y: function ( t, e, n ) {
      "use strict";
      n.d( e, "a", ( function () {
        return r
      } ) );
      const r = {
        group: "inline",
        toDebugString: () => "text_node"
      }
    },
    ZB1H: function ( t, e, n ) {
      "use strict";
      n.d( e, "a", ( function () {
        return u
      } ) ), n.d( e, "b", ( function () {
        return l
      } ) );
      var r = n( "Czhu" ),
        i = n( "I9T1" ),
        o = n( "ljyt" ),
        a = n( "iXHT" );
      const s = t => e => {
          const n = e,
            r = n.getAttribute( t ) || "",
            i = {
              __confluenceMetadata: n.hasAttribute( "__confluenceMetadata" ) ? JSON.parse( n.getAttribute( "__confluenceMetadata" ) || "" ) : void 0
            };
          return !!Object( a.a )( r ) && ( i.href = Object( a.b )( r ), i )
        },
        u = {
          excludes: `${o.e} ${o.b}`,
          group: o.e,
          attrs: {
            href: {},
            __confluenceMetadata: {
              default: null
            }
          },
          inclusive: !1,
          parseDOM: [ {
            tag: "[data-block-link]",
            getAttrs: s( "data-block-link" ),
            contentElement: t => {
              const e = t.cloneNode( !0 );
              e.removeAttribute( "data-block-link" );
              const n = document.createElement( "div" );
              return n.appendChild( e ), n
            }
          }, {
            tag: "a[href]",
            context: "paragraph/|heading/|mediaSingle/",
            getAttrs: s( "href" )
          }, {
            tag: "a[href]",
            getAttrs: s( "href" ),
            getContent: ( t, e ) => {
              if ( t instanceof HTMLAnchorElement ) {
                const n = t.getAttribute( "href" ),
                  r = t.innerText;
                return i.Fragment.from( e.nodes.paragraph.createChecked( void 0, e.text( r, [ e.marks.link.create( {
                  href: n
                } ) ] ) ) )
              }
              return i.Fragment.empty
            }
          } ],
          toDOM( t, e ) {
            const n = Object.keys( t.attrs ).reduce( ( e, n ) => ( "__confluenceMetadata" === n ? null !== t.attrs[ n ] && ( e[ n ] = JSON.stringify( t.attrs[ n ] ) ) : e[ n ] = "href" === n ? Object( a.a )( t.attrs[ n ] ) ? t.attrs[ n ] : void 0 : t.attrs[ n ], e ), {} );
            return e ? [ "a", n ] : [ "a", Object( r.a )( Object( r.a )( {}, n ), {}, {
              class: "blockLink"
            } ), 0 ]
          }
        },
        c = [ "title", "id", "collection", "occurrenceKey", "__confluenceMetadata" ],
        l = t => ( {
          type: t.type.name,
          attrs: Object.keys( t.attrs ).reduce( ( e, n ) => ( -1 !== c.indexOf( n ) && null === t.attrs[ n ] || ( e[ n ] = t.attrs[ n ] ), e ), {} )
        } )
    },
    aTr9: function ( t, e, n ) {
      "use strict";
      n.d( e, "b", ( function () {
        return r
      } ) ), n.d( e, "a", ( function () {
        return i
      } ) ), n.d( e, "d", ( function () {
        return a
      } ) ), n.d( e, "c", ( function () {
        return s
      } ) );
      var r, i, o = n( "Czhu" );

      function a( {
        id: t,
        annotationType: e,
        state: n
      } ) {
        const r = {
          "data-mark-type": "annotation",
          "data-mark-annotation-type": e,
          "data-id": t
        };
        return n ? Object( o.a )( Object( o.a )( {}, r ), {}, {
          "data-mark-annotation-state": n
        } ) : r
      }! function ( t ) {
        t.INLINE_COMMENT = "inlineComment"
      }( r || ( r = {} ) ),
      function ( t ) {
        t.RESOLVED = "resolved", t.ACTIVE = "active"
      }( i || ( i = {} ) );
      const s = {
        inclusive: !1,
        group: "annotation",
        excludes: "",
        attrs: {
          id: {
            default: ""
          },
          annotationType: {
            default: r.INLINE_COMMENT
          }
        },
        parseDOM: [ {
          tag: 'span[data-mark-type="annotation"]',
          mark: "annotation",
          getAttrs: t => {
            const e = t;
            return {
              id: e.getAttribute( "data-id" ),
              annotationType: e.getAttribute( "data-mark-annotation-type" )
            }
          }
        } ],
        toDOM: t => [ "span", Object( o.a )( {
          class: "fabric-editor-annotation"
        }, a( {
          id: t.attrs.id,
          annotationType: t.attrs.annotationType
        } ) ), 0 ]
      }
    },
    bZPM: function ( t, e, n ) {
      "use strict";
      n.d( e, "a", ( function () {
        return i
      } ) );
      var r = n( "ArAF" );
      const i = ( t, e, n = !1 ) => {
        const i = t.getAttribute( "data-extension-type" ),
          o = t.getAttribute( "data-extension-key" );
        if ( !i || !o ) return !1;
        const a = {
          extensionType: i,
          extensionKey: o,
          text: t.getAttribute( "data-text" ) || void 0,
          parameters: JSON.parse( t.getAttribute( "data-parameters" ) || "{}" )
        };
        if ( !n ) {
          const e = t.getAttribute( "data-layout" );
          a.layout = ( s = e ) && [ "default", "wide", "full-width" ].includes( s ) ? e : "default"
        }
        var s;
        return e && ( a.localId = r.b.generate() ), a
      }
    },
    cluY: function ( t, e, n ) {
      "use strict";
      n.d( e, "a", ( function () {
        return r
      } ) );
      const r = {
        group: "inline",
        inline: !0,
        attrs: {
          src: {
            default: ""
          },
          alt: {
            default: null
          },
          title: {
            default: null
          }
        },
        draggable: !0,
        parseDOM: [ {
          tag: 'img[src^="data:image/"]',
          ignore: !0
        }, {
          tag: "img[src]",
          getAttrs( t ) {
            const e = t;
            return {
              src: e.getAttribute( "src" ),
              alt: e.getAttribute( "alt" ),
              title: e.getAttribute( "title" )
            }
          }
        } ],
        toDOM: t => [ "img", t.attrs ]
      }
    },
    "dB+l": function ( t, e, n ) {
      "use strict";
      n.d( e, "b", ( function () {
        return i
      } ) ), n.d( e, "a", ( function () {
        return o
      } ) );
      var r = n( "ljyt" );
      const i = {
          end: "right",
          right: "end",
          center: "center"
        },
        o = {
          excludes: "alignment " + r.d,
          group: r.a,
          attrs: {
            align: {}
          },
          parseDOM: [ {
            tag: "div.fabric-editor-block-mark",
            getAttrs: t => {
              const e = t.getAttribute( "data-align" );
              return !!e && {
                align: e
              }
            }
          } ],
          toDOM: t => [ "div", {
            class: "fabric-editor-block-mark fabric-editor-align-" + t.attrs.align,
            "data-align": t.attrs.align
          }, 0 ]
        }
    },
    db9m: function ( t, e, n ) {
      "use strict";
      const r = {
        smile: [ "1f642", ":slight_smile:", "🙂" ],
        sad: [ "1f641", ":slight_frown:", "🙁" ],
        cheeky: [ "1f61b", ":stuck_out_tongue:", "😛" ],
        laugh: [ "1f600", ":grinning:", "😀" ],
        wink: [ "1f609", ":wink:", "😉" ],
        information: [ "2139", ":information_source:", "ℹ" ],
        tick: [ "2705", ":white_check_mark:", "✅" ],
        cross: [ "274c", ":x:", "❌" ],
        warning: [ "26a0", ":warning:", "⚠" ],
        plus: [ "2795", ":heavy_plus_sign:", "➕" ],
        minus: [ "2796", ":heavy_minus_sign:", "➖" ],
        question: [ "2753", ":question:", "?" ],
        "thumbs-up": [ "1f44d", ":thumbsup:", "👍" ],
        "thumbs-down": [ "1f44e", ":thumbsdown:", "👎" ],
        "light-on": [ "1f4a1", ":bulb:", "💡" ],
        "yellow-star": [ "2b50", ":star:", "💛" ],
        "light-off": [ "1f6ab", ":no_entry_sign:", "🚫" ],
        "red-star": [ "2764", ":heart:", "❤️" ],
        "green-star": [ "1f49a", ":green_heart:", "💚" ],
        "blue-star": [ "1f499", ":blue_heart:", "💙" ],
        heart: [ "2764", ":heart:", "❤️" ],
        "broken-heart": [ "1f494", ":broken_heart:", "💔" ]
      };
      n.d( e, "a", ( function () {
        return i
      } ) );
      const i = {
        inline: !0,
        group: "inline",
        selectable: !0,
        attrs: {
          shortName: {
            default: ""
          },
          id: {
            default: ""
          },
          text: {
            default: ""
          }
        },
        parseDOM: [ {
          tag: "span[data-emoji-short-name]",
          getAttrs: t => {
            const e = t;
            return {
              shortName: e.getAttribute( "data-emoji-short-name" ) || i.attrs.shortName.default,
              id: e.getAttribute( "data-emoji-id" ) || i.attrs.id.default,
              text: e.getAttribute( "data-emoji-text" ) || i.attrs.text.default
            }
          }
        }, {
          tag: "img[data-emoticon-name]",
          getAttrs: t => function ( t ) {
            const e = r[ t ];
            return e ? {
              id: e[ 0 ],
              shortName: e[ 1 ],
              text: e[ 2 ]
            } : {
              id: "2b50",
              shortName: `:${t}:`,
              text: ""
            }
          }( t.getAttribute( "data-emoticon-name" ) )
        }, {
          tag: "img[data-hipchat-emoticon]",
          getAttrs: t => {
            return {
              id: "atlassian-" + ( e = t.getAttribute( "data-hipchat-emoticon" ) ),
              shortName: `:${e}:`,
              text: ""
            };
            var e
          }
        }, {
          tag: "img.emoji[data-emoji-short-name]",
          getAttrs: t => {
            const e = t;
            return {
              shortName: e.getAttribute( "data-emoji-short-name" ) || i.attrs.shortName.default,
              id: e.getAttribute( "data-emoji-id" ) || i.attrs.id.default,
              text: e.getAttribute( "data-emoji-text" ) || i.attrs.text.default
            }
          }
        } ],
        toDOM( t ) {
          const {
            shortName: e,
            id: n,
            text: r
          } = t.attrs;
          return [ "span", {
            "data-emoji-short-name": e,
            "data-emoji-id": n,
            "data-emoji-text": r,
            contenteditable: "false"
          }, r ]
        }
      }
    },
    duTc: function ( t, e, n ) {
      "use strict";
      n.d( e, "a", ( function () {
        return r
      } ) );
      const r = {
        inline: !1,
        group: "block",
        atom: !0,
        selectable: !0,
        attrs: {
          originalValue: {
            default: {}
          }
        },
        parseDOM: [ {
          tag: '[data-node-type="unsupportedBlock"]',
          getAttrs: t => ( {
            originalValue: JSON.parse( t.getAttribute( "data-original-value" ) || "{}" )
          } )
        } ],
        toDOM: t => [ "div", {
          "data-node-type": "unsupportedBlock",
          "data-original-value": JSON.stringify( t.attrs.originalValue )
        }, "Unsupported content" ]
      }
    },
    eYib: function ( t, e, n ) {
      "use strict";
      n.d( e, "a", ( function () {
        return i
      } ) );
      var r = n( "ArAF" );
      const i = {
        content: "inline*",
        defining: !0,
        marks: "_",
        attrs: {
          localId: {
            default: ""
          },
          state: {
            default: "DECIDED"
          }
        },
        parseDOM: [ {
          tag: "li[data-decision-local-id]",
          priority: 100,
          getAttrs: t => ( {
            localId: r.b.generate(),
            state: t.getAttribute( "data-decision-state" )
          } )
        } ],
        toDOM( t ) {
          const {
            localId: e,
            state: n
          } = t.attrs;
          return [ "li", {
            "data-decision-local-id": e || "local-decision",
            "data-decision-state": n
          }, 0 ]
        }
      }
    },
    ezrE: function ( t, e, n ) {
      "use strict";
      n.d( e, "a", ( function () {
        return i
      } ) );
      var r = n( "ArAF" );
      const i = {
        content: "inline*",
        defining: !0,
        selectable: !1,
        marks: "_",
        attrs: {
          localId: {
            default: ""
          },
          state: {
            default: "TODO"
          }
        },
        parseDOM: [ {
          tag: "div[data-task-local-id]",
          priority: 100,
          getAttrs: t => ( {
            localId: r.b.generate(),
            state: t.getAttribute( "data-task-state" ) || "TODO"
          } )
        } ],
        toDOM( t ) {
          const {
            localId: e,
            state: n
          } = t.attrs;
          return [ "div", {
            "data-task-local-id": e || "local-task",
            "data-task-state": n || "TODO"
          }, 0 ]
        }
      }
    },
    g2hT: function ( t, e, n ) {
      "use strict";
      n.d( e, "a", ( function () {
        return i
      } ) );
      const r = "confluenceUnsupportedInline",
        i = {
          group: "inline",
          inline: !0,
          atom: !0,
          attrs: {
            cxhtml: {
              default: null
            }
          },
          toDOM: t => [ "div", {
            "data-node-type": r,
            "data-confluence-unsupported": "inline",
            "data-confluence-unsupported-inline-cxhtml": t.attrs.cxhtml
          }, "Unsupported content" ],
          parseDOM: [ {
            tag: `div[data-node-type="${r}"]`,
            getAttrs: t => ( {
              cxhtml: t.getAttribute( "data-confluence-unsupported-inline-cxhtml" )
            } )
          } ]
        }
    },
    gtbP: function ( t, e ) {
      t.exports = /[!-#%-\*,-\/:;\?@\[-\]_\{\}\xA1\xA7\xAB\xB6\xB7\xBB\xBF\u037E\u0387\u055A-\u055F\u0589\u058A\u05BE\u05C0\u05C3\u05C6\u05F3\u05F4\u0609\u060A\u060C\u060D\u061B\u061E\u061F\u066A-\u066D\u06D4\u0700-\u070D\u07F7-\u07F9\u0830-\u083E\u085E\u0964\u0965\u0970\u09FD\u0A76\u0AF0\u0C84\u0DF4\u0E4F\u0E5A\u0E5B\u0F04-\u0F12\u0F14\u0F3A-\u0F3D\u0F85\u0FD0-\u0FD4\u0FD9\u0FDA\u104A-\u104F\u10FB\u1360-\u1368\u1400\u166D\u166E\u169B\u169C\u16EB-\u16ED\u1735\u1736\u17D4-\u17D6\u17D8-\u17DA\u1800-\u180A\u1944\u1945\u1A1E\u1A1F\u1AA0-\u1AA6\u1AA8-\u1AAD\u1B5A-\u1B60\u1BFC-\u1BFF\u1C3B-\u1C3F\u1C7E\u1C7F\u1CC0-\u1CC7\u1CD3\u2010-\u2027\u2030-\u2043\u2045-\u2051\u2053-\u205E\u207D\u207E\u208D\u208E\u2308-\u230B\u2329\u232A\u2768-\u2775\u27C5\u27C6\u27E6-\u27EF\u2983-\u2998\u29D8-\u29DB\u29FC\u29FD\u2CF9-\u2CFC\u2CFE\u2CFF\u2D70\u2E00-\u2E2E\u2E30-\u2E4E\u3001-\u3003\u3008-\u3011\u3014-\u301F\u3030\u303D\u30A0\u30FB\uA4FE\uA4FF\uA60D-\uA60F\uA673\uA67E\uA6F2-\uA6F7\uA874-\uA877\uA8CE\uA8CF\uA8F8-\uA8FA\uA8FC\uA92E\uA92F\uA95F\uA9C1-\uA9CD\uA9DE\uA9DF\uAA5C-\uAA5F\uAADE\uAADF\uAAF0\uAAF1\uABEB\uFD3E\uFD3F\uFE10-\uFE19\uFE30-\uFE52\uFE54-\uFE61\uFE63\uFE68\uFE6A\uFE6B\uFF01-\uFF03\uFF05-\uFF0A\uFF0C-\uFF0F\uFF1A\uFF1B\uFF1F\uFF20\uFF3B-\uFF3D\uFF3F\uFF5B\uFF5D\uFF5F-\uFF65]|\uD800[\uDD00-\uDD02\uDF9F\uDFD0]|\uD801\uDD6F|\uD802[\uDC57\uDD1F\uDD3F\uDE50-\uDE58\uDE7F\uDEF0-\uDEF6\uDF39-\uDF3F\uDF99-\uDF9C]|\uD803[\uDF55-\uDF59]|\uD804[\uDC47-\uDC4D\uDCBB\uDCBC\uDCBE-\uDCC1\uDD40-\uDD43\uDD74\uDD75\uDDC5-\uDDC8\uDDCD\uDDDB\uDDDD-\uDDDF\uDE38-\uDE3D\uDEA9]|\uD805[\uDC4B-\uDC4F\uDC5B\uDC5D\uDCC6\uDDC1-\uDDD7\uDE41-\uDE43\uDE60-\uDE6C\uDF3C-\uDF3E]|\uD806[\uDC3B\uDE3F-\uDE46\uDE9A-\uDE9C\uDE9E-\uDEA2]|\uD807[\uDC41-\uDC45\uDC70\uDC71\uDEF7\uDEF8]|\uD809[\uDC70-\uDC74]|\uD81A[\uDE6E\uDE6F\uDEF5\uDF37-\uDF3B\uDF44]|\uD81B[\uDE97-\uDE9A]|\uD82F\uDC9F|\uD836[\uDE87-\uDE8B]|\uD83A[\uDD5E\uDD5F]/
    },
    h6y6: function ( t, e, n ) {
      "use strict";
      n.d( e, "a", ( function () {
        return r
      } ) );
      const r = {
        content: "block+",
        isolating: !0,
        marks: "link alignment unsupportedMark unsupportedNodeAttribute",
        selectable: !1,
        attrs: {
          width: {
            default: void 0
          }
        },
        parseDOM: [ {
          context: "layoutColumn//",
          tag: "div[data-layout-column]",
          skip: !0
        }, {
          tag: "div[data-layout-column]",
          getAttrs: t => ( {
            width: Number( t.getAttribute( "data-column-width" ) ) || void 0
          } )
        } ],
        toDOM( t ) {
          const e = {
              "data-layout-column": "true"
            },
            {
              width: n
            } = t.attrs;
          n && ( e.style = `flex-basis: ${n}%`, e[ "data-column-width" ] = n );
          return [ "div", e, [ "div", {
            "data-layout-content": "true"
          }, 0 ] ]
        }
      }
    },
    iWU4: function ( t, e, n ) {
      "use strict";
      n.d( e, "a", ( function () {
        return i
      } ) );
      const r = [ "p", 0 ],
        i = {
          selectable: !1,
          content: "inline*",
          group: "block",
          marks: "strong code em link strike subsup textColor typeAheadQuery underline confluenceInlineComment action annotation unsupportedMark unsupportedNodeAttribute",
          parseDOM: [ {
            tag: "p"
          } ],
          toDOM: () => r
        }
    },
    iXHT: function ( t, e, n ) {
      "use strict";
      n.d( e, "a", ( function () {
        return o
      } ) ), n.d( e, "b", ( function () {
        return s
      } ) );
      var r = n( "mpTe" );
      const i = [ /^https?:\/\//im, /^ftps?:\/\//im, /^\//im, /^mailto:/im, /^skype:/im, /^callto:/im, /^facetime:/im, /^git:/im, /^irc6?:/im, /^news:/im, /^nntp:/im, /^feed:/im, /^cvs:/im, /^svn:/im, /^mvn:/im, /^ssh:/im, /^scp:\/\//im, /^sftp:\/\//im, /^itms:/im, /^notes:/im, /^hipchat:\/\//im, /^sourcetree:/im, /^urn:/im, /^tel:/im, /^xmpp:/im, /^telnet:/im, /^vnc:/im, /^rdp:/im, /^whatsapp:/im, /^slack:/im, /^sips?:/im, /^magnet:/im ],
        o = t => i.some( e => !0 === e.test( t.trim() ) ),
        a = n.n( r )()();

      function s( t ) {
        const e = function ( t ) {
          const e = t && a.match( t );
          return e && e[ 0 ]
        }( t );
        return e && e.url || t
      }
      a.add( "sourcetree:", "http:" )
    },
    ibKD: function ( t, e, n ) {
      "use strict";
      e.a = {
        group: "block",
        content: "inline+",
        marks: "_",
        toDOM: () => [ "div", {
          "data-node-type": "unknownBlock"
        }, 0 ],
        parseDOM: [ {
          tag: 'div[data-node-type="unknownBlock"]'
        } ]
      }
    },
    jxt5: function ( t, e, n ) {
      "use strict";
      n.d( e, "a", ( function () {
        return r
      } ) );
      const r = {
        inline: !0,
        group: "inline",
        selectable: !0,
        attrs: {
          originalValue: {
            default: {}
          }
        },
        parseDOM: [ {
          tag: '[data-node-type="unsupportedInline"]',
          getAttrs: t => ( {
            originalValue: JSON.parse( t.getAttribute( "data-original-value" ) || "{}" )
          } )
        } ],
        toDOM: t => [ "span", {
          "data-node-type": "unsupportedInline",
          "data-original-value": JSON.stringify( t.attrs.originalValue )
        }, "Unsupported content" ]
      }
    },
    kLA4: function ( t, e, n ) {
      "use strict";
      n.d( e, "a", ( function () {
        return r
      } ) );
      const r = {
        content: "(block|layoutSection)+",
        marks: "alignment breakout indentation link unsupportedMark unsupportedNodeAttribute"
      }
    },
    kLLT: function ( t, e, n ) {
      "use strict";
      n.d( e, "a", ( function () {
        return r
      } ) );
      const r = {
        inline: !0,
        group: "inline",
        selectable: !1,
        parseDOM: [ {
          tag: "br"
        } ],
        toDOM: () => [ "br" ]
      }
    },
    kmHS: function ( t, e, n ) {
      "use strict";
      n.d( e, "a", ( function () {
        return r
      } ) );
      const r = {
        toDOM: () => [ "span" ],
        attrs: {
          originalValue: {}
        }
      }
    },
    ljyt: function ( t, e, n ) {
      "use strict";
      n.d( e, "c", ( function () {
        return r
      } ) ), n.d( e, "f", ( function () {
        return i
      } ) ), n.d( e, "e", ( function () {
        return o
      } ) ), n.d( e, "b", ( function () {
        return a
      } ) ), n.d( e, "a", ( function () {
        return s
      } ) ), n.d( e, "d", ( function () {
        return u
      } ) );
      const r = "fontStyle",
        i = "searchQuery",
        o = "link",
        a = "color",
        s = "alignment",
        u = "indentation"
    },
    lsRG: function ( t, e, n ) {
      "use strict";
      n.d( e, "a", ( function () {
        return i
      } ) );
      var r = n( "ljyt" );
      const i = {
        excludes: "indentation " + r.a,
        group: r.d,
        attrs: {
          level: {}
        },
        parseDOM: [ {
          tag: "div.fabric-editor-indentation-mark",
          getAttrs( t ) {
            const e = +( t.getAttribute( "data-level" ) || "0" );
            return {
              level: e > 6 ? 6 : !( e < 1 ) && e
            }
          }
        } ],
        toDOM: t => [ "div", {
          class: "fabric-editor-block-mark fabric-editor-indentation-mark",
          "data-level": t.attrs.level
        }, 0 ]
      }
    },
    "m/AV": function ( t, e, n ) {
      "use strict";
      n.d( e, "b", ( function () {
        return r
      } ) ), n.d( e, "a", ( function () {
        return i
      } ) );
      const r = ".ak-ul",
        i = {
          group: "block",
          content: "listItem+",
          selectable: !1,
          parseDOM: [ {
            tag: "ul"
          } ],
          marks: "unsupportedMark unsupportedNodeAttribute",
          toDOM: () => [ "ul", {
            class: r.substr( 1 )
          }, 0 ]
        }
    },
    mpTe: function ( t, e, n ) {
      "use strict";

      function r( t ) {
        var e = Array.prototype.slice.call( arguments, 1 );
        return e.forEach( ( function ( e ) {
          e && Object.keys( e ).forEach( ( function ( n ) {
            t[ n ] = e[ n ]
          } ) )
        } ) ), t
      }

      function i( t ) {
        return Object.prototype.toString.call( t )
      }

      function o( t ) {
        return "[object Function]" === i( t )
      }

      function a( t ) {
        return t.replace( /[.?*+^$[\]\\(){}|-]/g, "\\$&" )
      }
      var s = {
        fuzzyLink: !0,
        fuzzyEmail: !0,
        fuzzyIP: !1
      };
      var u = {
          "http:": {
            validate: function ( t, e, n ) {
              var r = t.slice( e );
              return n.re.http || ( n.re.http = new RegExp( "^\\/\\/" + n.re.src_auth + n.re.src_host_port_strict + n.re.src_path, "i" ) ), n.re.http.test( r ) ? r.match( n.re.http )[ 0 ].length : 0
            }
          },
          "https:": "http:",
          "ftp:": "http:",
          "//": {
            validate: function ( t, e, n ) {
              var r = t.slice( e );
              return n.re.no_http || ( n.re.no_http = new RegExp( "^" + n.re.src_auth + "(?:localhost|(?:(?:" + n.re.src_domain + ")\\.)+" + n.re.src_domain_root + ")" + n.re.src_port + n.re.src_host_terminator + n.re.src_path, "i" ) ), n.re.no_http.test( r ) ? e >= 3 && ":" === t[ e - 3 ] || e >= 3 && "/" === t[ e - 3 ] ? 0 : r.match( n.re.no_http )[ 0 ].length : 0
            }
          },
          "mailto:": {
            validate: function ( t, e, n ) {
              var r = t.slice( e );
              return n.re.mailto || ( n.re.mailto = new RegExp( "^" + n.re.src_email_name + "@" + n.re.src_host_strict, "i" ) ), n.re.mailto.test( r ) ? r.match( n.re.mailto )[ 0 ].length : 0
            }
          }
        },
        c = "biz|com|edu|gov|net|org|pro|web|xxx|aero|asia|coop|info|museum|name|shop|рф".split( "|" );

      function l( t ) {
        var e = t.re = n( "vn14" )( t.__opts__ ),
          r = t.__tlds__.slice();

        function s( t ) {
          return t.replace( "%TLDS%", e.src_tlds )
        }
        t.onCompile(), t.__tlds_replaced__ || r.push( "a[cdefgilmnoqrstuwxz]|b[abdefghijmnorstvwyz]|c[acdfghiklmnoruvwxyz]|d[ejkmoz]|e[cegrstu]|f[ijkmor]|g[abdefghilmnpqrstuwy]|h[kmnrtu]|i[delmnoqrst]|j[emop]|k[eghimnprwyz]|l[abcikrstuvy]|m[acdeghklmnopqrstuvwxyz]|n[acefgilopruz]|om|p[aefghklmnrstwy]|qa|r[eosuw]|s[abcdeghijklmnortuvxyz]|t[cdfghjklmnortvwz]|u[agksyz]|v[aceginu]|w[fs]|y[et]|z[amw]" ), r.push( e.src_xn ), e.src_tlds = r.join( "|" ), e.email_fuzzy = RegExp( s( e.tpl_email_fuzzy ), "i" ), e.link_fuzzy = RegExp( s( e.tpl_link_fuzzy ), "i" ), e.link_no_ip_fuzzy = RegExp( s( e.tpl_link_no_ip_fuzzy ), "i" ), e.host_fuzzy_test = RegExp( s( e.tpl_host_fuzzy_test ), "i" );
        var u = [];

        function c( t, e ) {
          throw new Error( '(LinkifyIt) Invalid schema "' + t + '": ' + e )
        }
        t.__compiled__ = {}, Object.keys( t.__schemas__ ).forEach( ( function ( e ) {
          var n = t.__schemas__[ e ];
          if ( null !== n ) {
            var r = {
              validate: null,
              link: null
            };
            if ( t.__compiled__[ e ] = r, "[object Object]" === i( n ) ) return ! function ( t ) {
              return "[object RegExp]" === i( t )
            }( n.validate ) ? o( n.validate ) ? r.validate = n.validate : c( e, n ) : r.validate = function ( t ) {
              return function ( e, n ) {
                var r = e.slice( n );
                return t.test( r ) ? r.match( t )[ 0 ].length : 0
              }
            }( n.validate ), void( o( n.normalize ) ? r.normalize = n.normalize : n.normalize ? c( e, n ) : r.normalize = function ( t, e ) {
              e.normalize( t )
            } );
            ! function ( t ) {
              return "[object String]" === i( t )
            }( n ) ? c( e, n ): u.push( e )
          }
        } ) ), u.forEach( ( function ( e ) {
          t.__compiled__[ t.__schemas__[ e ] ] && ( t.__compiled__[ e ].validate = t.__compiled__[ t.__schemas__[ e ] ].validate, t.__compiled__[ e ].normalize = t.__compiled__[ t.__schemas__[ e ] ].normalize )
        } ) ), t.__compiled__[ "" ] = {
          validate: null,
          normalize: function ( t, e ) {
            e.normalize( t )
          }
        };
        var l = Object.keys( t.__compiled__ ).filter( ( function ( e ) {
          return e.length > 0 && t.__compiled__[ e ]
        } ) ).map( a ).join( "|" );
        t.re.schema_test = RegExp( "(^|(?!_)(?:[><｜]|" + e.src_ZPCc + "))(" + l + ")", "i" ), t.re.schema_search = RegExp( "(^|(?!_)(?:[><｜]|" + e.src_ZPCc + "))(" + l + ")", "ig" ), t.re.pretest = RegExp( "(" + t.re.schema_test.source + ")|(" + t.re.host_fuzzy_test.source + ")|@", "i" ),
          function ( t ) {
            t.__index__ = -1, t.__text_cache__ = ""
          }( t )
      }

      function p( t, e ) {
        var n = t.__index__,
          r = t.__last_index__,
          i = t.__text_cache__.slice( n, r );
        this.schema = t.__schema__.toLowerCase(), this.index = n + e, this.lastIndex = r + e, this.raw = i, this.text = i, this.url = i
      }

      function d( t, e ) {
        var n = new p( t, e );
        return t.__compiled__[ n.schema ].normalize( n, t ), n
      }

      function f( t, e ) {
        if ( !( this instanceof f ) ) return new f( t, e );
        var n;
        e || ( n = t, Object.keys( n || {} ).reduce( ( function ( t, e ) {
          return t || s.hasOwnProperty( e )
        } ), !1 ) && ( e = t, t = {} ) ), this.__opts__ = r( {}, s, e ), this.__index__ = -1, this.__last_index__ = -1, this.__schema__ = "", this.__text_cache__ = "", this.__schemas__ = r( {}, u, t ), this.__compiled__ = {}, this.__tlds__ = c, this.__tlds_replaced__ = !1, this.re = {}, l( this )
      }
      f.prototype.add = function ( t, e ) {
        return this.__schemas__[ t ] = e, l( this ), this
      }, f.prototype.set = function ( t ) {
        return this.__opts__ = r( this.__opts__, t ), this
      }, f.prototype.test = function ( t ) {
        if ( this.__text_cache__ = t, this.__index__ = -1, !t.length ) return !1;
        var e, n, r, i, o, a, s, u;
        if ( this.re.schema_test.test( t ) )
          for ( ( s = this.re.schema_search ).lastIndex = 0; null !== ( e = s.exec( t ) ); )
            if ( i = this.testSchemaAt( t, e[ 2 ], s.lastIndex ) ) {
              this.__schema__ = e[ 2 ], this.__index__ = e.index + e[ 1 ].length, this.__last_index__ = e.index + e[ 0 ].length + i;
              break
            } return this.__opts__.fuzzyLink && this.__compiled__[ "http:" ] && ( u = t.search( this.re.host_fuzzy_test ) ) >= 0 && ( this.__index__ < 0 || u < this.__index__ ) && null !== ( n = t.match( this.__opts__.fuzzyIP ? this.re.link_fuzzy : this.re.link_no_ip_fuzzy ) ) && ( o = n.index + n[ 1 ].length, ( this.__index__ < 0 || o < this.__index__ ) && ( this.__schema__ = "", this.__index__ = o, this.__last_index__ = n.index + n[ 0 ].length ) ), this.__opts__.fuzzyEmail && this.__compiled__[ "mailto:" ] && t.indexOf( "@" ) >= 0 && null !== ( r = t.match( this.re.email_fuzzy ) ) && ( o = r.index + r[ 1 ].length, a = r.index + r[ 0 ].length, ( this.__index__ < 0 || o < this.__index__ || o === this.__index__ && a > this.__last_index__ ) && ( this.__schema__ = "mailto:", this.__index__ = o, this.__last_index__ = a ) ), this.__index__ >= 0
      }, f.prototype.pretest = function ( t ) {
        return this.re.pretest.test( t )
      }, f.prototype.testSchemaAt = function ( t, e, n ) {
        return this.__compiled__[ e.toLowerCase() ] ? this.__compiled__[ e.toLowerCase() ].validate( t, n, this ) : 0
      }, f.prototype.match = function ( t ) {
        var e = 0,
          n = [];
        this.__index__ >= 0 && this.__text_cache__ === t && ( n.push( d( this, e ) ), e = this.__last_index__ );
        for ( var r = e ? t.slice( e ) : t; this.test( r ); ) n.push( d( this, e ) ), r = r.slice( this.__last_index__ ), e += this.__last_index__;
        return n.length ? n : null
      }, f.prototype.tlds = function ( t, e ) {
        return t = Array.isArray( t ) ? t : [ t ], e ? ( this.__tlds__ = this.__tlds__.concat( t ).sort().filter( ( function ( t, e, n ) {
          return t !== n[ e - 1 ]
        } ) ).reverse(), l( this ), this ) : ( this.__tlds__ = t.slice(), this.__tlds_replaced__ = !0, l( this ), this )
      }, f.prototype.normalize = function ( t ) {
        t.schema || ( t.url = "http://" + t.url ), "mailto:" !== t.schema || /^mailto:/i.test( t.url ) || ( t.url = "mailto:" + t.url )
      }, f.prototype.onCompile = function () {}, t.exports = f
    },
    nKs5: function ( t, e, n ) {
      "use strict";
      n.d( e, "a", ( function () {
        return r
      } ) );
      const r = {
        inclusive: !0,
        group: n( "ljyt" ).c,
        parseDOM: [ {
          tag: "u"
        }, {
          style: "text-decoration",
          getAttrs: t => "underline" === t && null
        } ],
        toDOM: () => [ "u" ]
      }
    },
    nNC9: function ( t, e, n ) {
      "use strict";
      n.d( e, "a", ( function () {
        return a
      } ) ), n.d( e, "b", ( function () {
        return s
      } ) );
      var r = n( "ArAF" ),
        i = n( "bZPM" );
      const o = ( t = !1 ) => {
          const e = {
            inline: !0,
            group: "inline",
            selectable: !0,
            attrs: {
              extensionType: {
                default: ""
              },
              extensionKey: {
                default: ""
              },
              parameters: {
                default: null
              },
              text: {
                default: null
              }
            },
            parseDOM: [ {
              tag: "span[data-extension-type]",
              getAttrs: e => Object( i.a )( e, t, !0 )
            } ],
            toDOM: t => [ "span", {
              "data-extension-type": t.attrs.extensionType,
              "data-extension-key": t.attrs.extensionKey,
              "data-text": t.attrs.text,
              "data-parameters": JSON.stringify( t.attrs.parameters ),
              contenteditable: "false"
            } ]
          };
          return t && e.attrs && ( e.attrs.localId = {
            default: r.b.generate()
          } ), e
        },
        a = o(),
        s = o( !0 )
    },
    oW86: function ( t, e, n ) {
      "use strict";
      n.d( e, "a", ( function () {
        return r
      } ) );
      const r = {
        inline: !1,
        group: "block",
        content: "media+",
        attrs: {},
        marks: "unsupportedMark unsupportedNodeAttribute",
        selectable: !1,
        parseDOM: [ {
          tag: 'div[data-node-type="mediaGroup"]'
        }, {
          tag: 'div[class="MediaGroup"]'
        } ],
        toDOM: () => [ "div", {
          "data-node-type": "mediaGroup"
        }, 0 ]
      }
    },
    qFXU: function ( t, e, n ) {
      "use strict";
      n.d( e, "l", ( function () {
        return i
      } ) ), n.d( e, "i", ( function () {
        return o
      } ) ), n.d( e, "k", ( function () {
        return a
      } ) ), n.d( e, "h", ( function () {
        return s
      } ) ), n.d( e, "g", ( function () {
        return u
      } ) ), n.d( e, "a", ( function () {
        return p
      } ) ), n.d( e, "e", ( function () {
        return d
      } ) ), n.d( e, "c", ( function () {
        return f
      } ) ), n.d( e, "d", ( function () {
        return h
      } ) ), n.d( e, "b", ( function () {
        return m
      } ) ), n.d( e, "n", ( function () {
        return g
      } ) ), n.d( e, "m", ( function () {
        return y
      } ) ), n.d( e, "f", ( function () {
        return b
      } ) ), n.d( e, "o", ( function () {
        return x
      } ) ), n.d( e, "j", ( function () {
        return k
      } ) ), n.d( e, "p", ( function () {
        return _
      } ) );
      var r = n( "HCLf" );
      const i = "pm-table",
        o = i + "-cell-content-wrap",
        a = i + "-header-content-wrap",
        s = i + "-cell-nodeview-wrapper",
        u = i + "-cell-nodeview-content-dom",
        c = r.l.toLocaleLowerCase(),
        l = ( t, e = {} ) => {
          const n = t.getAttribute( "data-colwidth" ),
            i = n && /^\d+(,\d+)*$/.test( n ) ? n.split( "," ).map( t => Number( t ) ) : null,
            o = Number( t.getAttribute( "colspan" ) || 1 );
          let {
            backgroundColor: a
          } = t.style;
          if ( a && Object( r.K )( a ) ) {
            const t = Object( r.L )( a );
            null !== t && ( a = t )
          }
          return {
            colspan: o,
            rowspan: Number( t.getAttribute( "rowspan" ) || 1 ),
            colwidth: i && i.length === o ? i : null,
            background: a && a !== e.background ? a : null
          }
        },
        p = ( t, e ) => {
          const n = {},
            i = t.type.name,
            s = e ? parseInt( e.getAttribute( "colspan" ) || "1", 10 ) : 1,
            u = e ? parseInt( e.getAttribute( "rowspan" ) || "1", 10 ) : 1;
          if ( t.attrs.colspan !== s && ( n.colspan = t.attrs.colspan ), t.attrs.rowspan !== u && ( n.rowspan = t.attrs.rowspan ), t.attrs.colwidth && ( n[ "data-colwidth" ] = t.attrs.colwidth.join( "," ) ), t.attrs.background ) {
            const {
              background: e
            } = t.attrs;
            if ( "tableHeader" === i && e === h.get( "light gray" ) || "tableCell" === i && e === h.get( "white" ) ) n.style = "";
            else {
              const t = Object( r.K )( e ) ? Object( r.L )( e ) : e;
              n.style = `${n.style||""}background-color: ${t};`, n.colorname = d.get( t )
            }
          }
          return n.class = "tableHeader" === i ? a : o, n
        },
        d = new Map,
        f = Object( r.J )( r.p, .12 ) || r.k,
        h = new Map;
      [
        [ r.k, "White" ],
        [ r.c, "Light blue" ],
        [ r.C, "Light teal" ],
        [ r.h, "Light green" ],
        [ r.H, "Light yellow" ],
        [ r.x, "Light red" ],
        [ r.s, "Light purple" ],
        [ r.l, "Light gray" ],
        [ r.e, "Blue" ],
        [ r.E, "Teal" ],
        [ r.j, "Green" ],
        [ r.I, "Yellow" ],
        [ r.z, "Red" ],
        [ r.u, "Purple" ],
        [ r.n, "Gray" ],
        [ r.a, "Dark blue" ],
        [ r.A, "Dark teal" ],
        [ r.f, "Dark green" ],
        [ r.F, "Dark yellow" ],
        [ r.v, "Dark red" ],
        [ r.q, "Dark purple" ]
      ].forEach( ( [ t, e ] ) => {
        d.set( t.toLowerCase(), e ), h.set( e.toLowerCase(), t.toLowerCase() )
      } );
      const m = {
          content: "tableRow+",
          attrs: {
            isNumberColumnEnabled: {
              default: !1
            },
            layout: {
              default: "default"
            },
            __autoSize: {
              default: !1
            }
          },
          marks: "unsupportedMark unsupportedNodeAttribute",
          tableRole: "table",
          isolating: !0,
          selectable: !1,
          group: "block",
          parseDOM: [ {
            tag: "table",
            getAttrs: t => ( {
              isNumberColumnEnabled: "true" === t.getAttribute( "data-number-column" ),
              layout: t.getAttribute( "data-layout" ) || "default",
              __autoSize: "true" === t.getAttribute( "data-autosize" )
            } )
          } ],
          toDOM: t => [ "table", {
              "data-number-column": t.attrs.isNumberColumnEnabled,
              "data-layout": t.attrs.layout,
              "data-autosize": t.attrs.__autoSize
            },
            [ "tbody", 0 ]
          ]
        },
        g = t => ( {
          attrs: Object.keys( t.attrs ).filter( t => !t.startsWith( "__" ) ).reduce( ( e, n ) => ( e[ n ] = t.attrs[ n ], e ), {} )
        } ),
        y = {
          selectable: !1,
          content: "(tableCell | tableHeader)+",
          marks: "unsupportedMark unsupportedNodeAttribute",
          tableRole: "row",
          parseDOM: [ {
            tag: "tr"
          } ],
          toDOM: () => [ "tr", 0 ]
        },
        v = {
          colspan: {
            default: 1
          },
          rowspan: {
            default: 1
          },
          colwidth: {
            default: null
          },
          background: {
            default: null
          }
        },
        b = {
          selectable: !1,
          content: "(paragraph | panel | blockquote | orderedList | bulletList | rule | heading | codeBlock | mediaSingle |  mediaGroup | decisionList | taskList | blockCard | embedCard | extension | nestedExpand | unsupportedBlock)+",
          attrs: v,
          tableRole: "cell",
          marks: "link alignment unsupportedMark unsupportedNodeAttribute",
          isolating: !0,
          parseDOM: [ {
            tag: ".ak-renderer-table-number-column",
            ignore: !0
          }, {
            tag: "td",
            getAttrs: t => l( t )
          } ],
          toDOM: t => [ "td", p( t ), 0 ]
        },
        x = t => ( {
          attrs: Object.keys( t.attrs ).reduce( ( e, n ) => ( v[ n ].default !== t.attrs[ n ] && ( e[ n ] = t.attrs[ n ] ), e ), {} )
        } ),
        k = {
          selectable: !1,
          content: "(paragraph | panel | blockquote | orderedList | bulletList | rule | heading | codeBlock | mediaSingle |  mediaGroup | decisionList | taskList | blockCard | embedCard | extension | nestedExpand)+",
          attrs: v,
          tableRole: "header_cell",
          isolating: !0,
          marks: "link alignment unsupportedMark unsupportedNodeAttribute",
          parseDOM: [ {
            tag: "th",
            getAttrs: t => l( t, {
              background: c
            } )
          } ],
          toDOM: t => [ "th", p( t ), 0 ]
        },
        _ = x
    },
    qyVl: function ( t, e, n ) {
      "use strict";
      n.d( e, "a", ( function () {
        return r
      } ) );
      const r = {
        content: "(text|hardBreak|mention|emoji|date|placeholder|inlineCard|status)*",
        isolating: !0,
        marks: "_",
        parseDOM: [ {
          tag: "figcaption[data-caption]"
        } ],
        toDOM: t => [ "figcaption", {
          "data-caption": "true"
        }, 0 ]
      }
    },
    uxUX: function ( t, e, n ) {
      "use strict";
      n.d( e, "b", ( function () {
        return i
      } ) ), n.d( e, "a", ( function () {
        return o
      } ) );
      var r = n( "ArAF" );
      const i = '[data-node-type="decisionList"]',
        o = {
          group: "block",
          defining: !0,
          content: "decisionItem+",
          marks: "unsupportedMark unsupportedNodeAttribute",
          selectable: !1,
          attrs: {
            localId: {
              default: ""
            }
          },
          parseDOM: [ {
            tag: "ol" + i,
            priority: 100,
            getAttrs: () => ( {
              localId: r.b.generate()
            } )
          } ],
          toDOM( t ) {
            const {
              localId: e
            } = t.attrs;
            return [ "ol", {
              "data-node-type": "decisionList",
              "data-decision-list-local-id": e || "local-decision-list",
              style: "list-style: none; padding-left: 0"
            }, 0 ]
          }
        }
    },
    vRWe: function ( t, e, n ) {
      "use strict";
      n.d( e, "a", ( function () {
        return r
      } ) );
      const r = {
        inline: !1,
        group: "block",
        selectable: !0,
        attrs: {
          url: {
            default: ""
          },
          layout: {
            default: "center"
          },
          width: {
            default: null
          },
          originalWidth: {
            default: null
          },
          originalHeight: {
            default: null
          }
        },
        parseDOM: [ {
          tag: "div[data-embed-card]",
          getAttrs: t => ( {
            url: t.getAttribute( "data-card-url" ),
            layout: t.getAttribute( "data-layout" ) || "center",
            width: Number( t.getAttribute( "data-width" ) ) || null,
            originalWidth: Number( t.getAttribute( "data-card-original-width" ) ) || null,
            originalHeight: Number( t.getAttribute( "data-card-original-height" ) ) || null
          } )
        } ],
        toDOM( t ) {
          const {
            url: e,
            layout: n,
            width: r,
            originalWidth: i,
            originalHeight: o
          } = t.attrs;
          return [ "div", {
            "data-embed-card": "",
            "data-card-url": e,
            "data-layout": n,
            "data-width": r,
            "data-original-width": i,
            "data-original-height": o
          } ]
        }
      }
    },
    vn14: function ( t, e, n ) {
      "use strict";
      t.exports = function ( t ) {
        var e = {};
        e.src_Any = n( "7EA0" ).source, e.src_Cc = n( "RYQf" ).source, e.src_Z = n( "Ckiu" ).source, e.src_P = n( "gtbP" ).source, e.src_ZPCc = [ e.src_Z, e.src_P, e.src_Cc ].join( "|" ), e.src_ZCc = [ e.src_Z, e.src_Cc ].join( "|" );
        return e.src_pseudo_letter = "(?:(?![><｜]|" + e.src_ZPCc + ")" + e.src_Any + ")", e.src_ip4 = "(?:(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.){3}(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)", e.src_auth = "(?:(?:(?!" + e.src_ZCc + "|[@/\\[\\]()]).)+@)?", e.src_port = "(?::(?:6(?:[0-4]\\d{3}|5(?:[0-4]\\d{2}|5(?:[0-2]\\d|3[0-5])))|[1-5]?\\d{1,4}))?", e.src_host_terminator = "(?=$|[><｜]|" + e.src_ZPCc + ")(?!-|_|:\\d|\\.-|\\.(?!$|" + e.src_ZPCc + "))", e.src_path = "(?:[/?#](?:(?!" + e.src_ZCc + "|[><｜]|[()[\\]{}.,\"'?!\\-]).|\\[(?:(?!" + e.src_ZCc + "|\\]).)*\\]|\\((?:(?!" + e.src_ZCc + "|[)]).)*\\)|\\{(?:(?!" + e.src_ZCc + '|[}]).)*\\}|\\"(?:(?!' + e.src_ZCc + '|["]).)+\\"|\\\'(?:(?!' + e.src_ZCc + "|[']).)+\\'|\\'(?=" + e.src_pseudo_letter + "|[-]).|\\.{2,4}[a-zA-Z0-9%/]|\\.(?!" + e.src_ZCc + "|[.]).|" + ( t && t[ "---" ] ? "\\-(?!--(?:[^-]|$))(?:-*)|" : "\\-+|" ) + "\\,(?!" + e.src_ZCc + ").|\\!(?!" + e.src_ZCc + "|[!]).|\\?(?!" + e.src_ZCc + "|[?]).)+|\\/)?", e.src_email_name = '[\\-;:&=\\+\\$,\\.a-zA-Z0-9_][\\-;:&=\\+\\$,\\"\\.a-zA-Z0-9_]*', e.src_xn = "xn--[a-z0-9\\-]{1,59}", e.src_domain_root = "(?:" + e.src_xn + "|" + e.src_pseudo_letter + "{1,63})", e.src_domain = "(?:" + e.src_xn + "|(?:" + e.src_pseudo_letter + ")|(?:" + e.src_pseudo_letter + "(?:-|" + e.src_pseudo_letter + "){0,61}" + e.src_pseudo_letter + "))", e.src_host = "(?:(?:(?:(?:" + e.src_domain + ")\\.)*" + e.src_domain + "))", e.tpl_host_fuzzy = "(?:" + e.src_ip4 + "|(?:(?:(?:" + e.src_domain + ")\\.)+(?:%TLDS%)))", e.tpl_host_no_ip_fuzzy = "(?:(?:(?:" + e.src_domain + ")\\.)+(?:%TLDS%))", e.src_host_strict = e.src_host + e.src_host_terminator, e.tpl_host_fuzzy_strict = e.tpl_host_fuzzy + e.src_host_terminator, e.src_host_port_strict = e.src_host + e.src_port + e.src_host_terminator, e.tpl_host_port_fuzzy_strict = e.tpl_host_fuzzy + e.src_port + e.src_host_terminator, e.tpl_host_port_no_ip_fuzzy_strict = e.tpl_host_no_ip_fuzzy + e.src_port + e.src_host_terminator, e.tpl_host_fuzzy_test = "localhost|www\\.|\\.\\d{1,3}\\.|(?:\\.(?:%TLDS%)(?:" + e.src_ZPCc + "|>|$))", e.tpl_email_fuzzy = '(^|[><｜]|"|\\(|' + e.src_ZCc + ")(" + e.src_email_name + "@" + e.tpl_host_fuzzy_strict + ")", e.tpl_link_fuzzy = "(^|(?![.:/\\-_@])(?:[$+<=>^`|｜]|" + e.src_ZPCc + "))((?![$+<=>^`|｜])" + e.tpl_host_port_fuzzy_strict + e.src_path + ")", e.tpl_link_no_ip_fuzzy = "(^|(?![.:/\\-_@])(?:[$+<=>^`|｜]|" + e.src_ZPCc + "))((?![$+<=>^`|｜])" + e.tpl_host_port_no_ip_fuzzy_strict + e.src_path + ")", e
      }
    },
    wOaT: function ( t, e, n ) {
      "use strict";
      n.d( e, "a", ( function () {
        return r
      } ) );
      const r = {
        attrs: {
          level: {
            default: 1
          }
        },
        content: "inline*",
        group: "block",
        defining: !0,
        selectable: !1,
        parseDOM: [ {
          tag: "h1",
          attrs: {
            level: 1
          }
        }, {
          tag: "h2",
          attrs: {
            level: 2
          }
        }, {
          tag: "h3",
          attrs: {
            level: 3
          }
        }, {
          tag: "h4",
          attrs: {
            level: 4
          }
        }, {
          tag: "h5",
          attrs: {
            level: 5
          }
        }, {
          tag: "h6",
          attrs: {
            level: 6
          }
        } ],
        toDOM: t => [ "h" + t.attrs.level, 0 ]
      }
    },
    xxff: function ( t, e, n ) {
      "use strict";
      n.d( e, "a", ( function () {
        return o
      } ) ), n.d( e, "b", ( function () {
        return a
      } ) );
      var r = n( "I9T1" );
      const i = t => {
          const e = /(?:^|\s)language-([^\s]+)/.exec( t );
          if ( e && e[ 1 ] ) return e[ 1 ]
        },
        o = {
          attrs: {
            language: {
              default: null
            },
            uniqueId: {
              default: null
            }
          },
          content: "text*",
          marks: "unsupportedMark unsupportedNodeAttribute",
          group: "block",
          code: !0,
          defining: !0,
          parseDOM: [ {
            tag: "pre",
            preserveWhitespace: "full",
            getAttrs: t => {
              let e = t;
              const n = ( t => {
                if ( t && t.classList.contains( "codehilite" ) ) return i( t.className )
              } )( e.parentElement ) || ( t => t.getAttribute( "data-language" ) || void 0 )( e.parentElement ) || ( t => {
                const e = t.firstElementChild;
                if ( e && "CODE" === e.nodeName ) return e.getAttribute( "data-language" ) || void 0
              } )( e ) || e.getAttribute( "data-language" );
              return e = ( t => {
                const e = t && t.parentElement;
                return e && e.classList.contains( "codehilite" ) && ( t.textContent = t.textContent.replace( /\n$/, "" ) ), t
              } )( e ), {
                language: n
              }
            }
          }, {
            tag: "div[style]",
            preserveWhitespace: "full",
            getAttrs: t => {
              const e = t;
              return !!( "pre" === e.style.whiteSpace || e.style.fontFamily && e.style.fontFamily.toLowerCase().indexOf( "monospace" ) > -1 ) && {}
            },
            getContent: ( t, e ) => {
              const n = t,
                i = Array.from( n.children ).map( t => t.textContent ).filter( t => void 0 !== t ).join( "\n" );
              return i ? r.Fragment.from( e.text( i ) ) : r.Fragment.empty
            }
          }, {
            tag: "table[style]",
            preserveWhitespace: "full",
            getAttrs: t => !!t.querySelector( 'td[class*="blob-code"]' ) && {}
          }, {
            tag: "div.code-block",
            preserveWhitespace: "full",
            getAttrs: t => {
              const e = t.querySelector( "code" );
              return e && e.querySelector( ".react-syntax-highlighter-line-number" ) && e.remove(), {}
            }
          } ],
          toDOM: t => [ "pre", [ "code", {
            "data-language": t.attrs.language
          }, 0 ] ]
        },
        a = t => ( {
          attrs: Object.keys( t.attrs ).reduce( ( e, n ) => ( "uniqueId" === n || "language" === n && null === t.attrs.language || ( e[ n ] = t.attrs[ n ] ), e ), {} )
        } )
    },
    y6Ns: function ( t, e, n ) {
      "use strict";
      var r = n( "Czhu" ),
        i = n( "I9T1" ),
        o = n( "ljyt" ),
        a = n( "ZB1H" ),
        s = n( "41mA" ),
        u = n( "/KhQ" ),
        c = n( "5rvf" ),
        l = n( "9bXU" ),
        p = n( "R41B" ),
        d = n( "nKs5" ),
        f = n( "3Bi3" ),
        h = n( "W5QA" ),
        m = n( "dB+l" ),
        g = n( "aTr9" );
      const y = {
        inclusive: !1,
        excludes: "",
        attrs: {
          reference: {
            default: ""
          }
        },
        parseDOM: [ {
          tag: 'span[data-mark-type="confluenceInlineComment"]'
        } ],
        toDOM: t => [ "span", {
          "data-mark-type": "confluenceInlineComment",
          "data-reference": t.attrs.reference
        } ]
      };
      var v = n( "C3UR" ),
        b = n( "lsRG" ),
        x = n( "kmHS" ),
        k = n( "V6qP" ),
        _ = n( "kLA4" ),
        w = n( "iWU4" ),
        A = n( "YR5y" ),
        D = n( "m/AV" ),
        O = n( "XayN" ),
        C = n( "Iqa1" ),
        M = n( "wOaT" ),
        F = n( "ROrA" ),
        S = n( "xxff" ),
        E = n( "25UG" ),
        z = n( "LZ3D" ),
        N = n( "cluY" ),
        T = n( "/0Vt" ),
        I = n( "qyVl" ),
        j = n( "DPgy" ),
        B = n( "oW86" ),
        R = n( "Vhfh" ),
        L = n( "49w7" ),
        P = n( "NOiQ" ),
        J = n( "h6y6" ),
        $ = n( "kLLT" ),
        q = n( "db9m" ),
        W = n( "qFXU" ),
        U = n( "XQko" ),
        Z = n( "g2hT" ),
        V = n( "L15d" ),
        G = n( "uxUX" ),
        H = n( "eYib" ),
        K = n( "QhI2" ),
        Q = n( "ezrE" ),
        X = n( "DGm0" ),
        Y = n( "JdPE" ),
        tt = n( "634R" ),
        et = n( "ErTH" ),
        nt = n( "MhQf" ),
        rt = n( "nNC9" ),
        it = n( "NXWE" ),
        ot = n( "DyvO" ),
        at = n( "UnAI" ),
        st = n( "vRWe" ),
        ut = n( "ibKD" ),
        ct = n( "duTc" ),
        lt = n( "jxt5" );

      function pt( t, e, n = {} ) {
        if ( !e ) return {};
        const r = t.reduce( ( t, {
          name: r,
          spec: i
        } ) => ( -1 !== e.indexOf( r ) && ( t[ r ] = n[ r ] || i ), t ), {} );
        return Object.keys( n ).reduce( ( t, e ) => ( t[ e ] || ( t[ e ] = n[ e ] ), t ), r )
      }

      function dt( t ) {
        return {
          name: `__${t}GroupDeclaration`,
          spec: {
            group: t
          }
        }
      }
      n.d( e, "a", ( function () {
        return yt
      } ) ), n.d( e, "b", ( function () {
        return vt
      } ) );
      const ft = [ dt( o.b ), dt( o.c ), dt( o.f ), dt( o.e ) ],
        ht = ft.map( t => t.name ),
        mt = [ {
          name: "doc",
          spec: _.a
        }, {
          name: "paragraph",
          spec: w.a
        }, {
          name: "text",
          spec: A.a
        }, {
          name: "bulletList",
          spec: D.a
        }, {
          name: "orderedList",
          spec: O.a
        }, {
          name: "listItem",
          spec: C.a
        }, {
          name: "heading",
          spec: M.a
        }, {
          name: "blockquote",
          spec: F.a
        }, {
          name: "codeBlock",
          spec: S.a
        }, {
          name: "panel",
          spec: E.c
        }, {
          name: "rule",
          spec: z.a
        }, {
          name: "image",
          spec: N.a
        }, {
          name: "mention",
          spec: T.a
        }, {
          name: "caption",
          spec: I.a
        }, {
          name: "media",
          spec: j.b
        }, {
          name: "mediaGroup",
          spec: B.a
        }, {
          name: "mediaSingle",
          spec: R.a
        }, {
          name: "placeholder",
          spec: L.a
        }, {
          name: "layoutSection",
          spec: P.a
        }, {
          name: "layoutColumn",
          spec: J.a
        }, {
          name: "hardBreak",
          spec: $.a
        }, {
          name: "emoji",
          spec: q.a
        }, {
          name: "table",
          spec: W.b
        }, {
          name: "tableCell",
          spec: W.f
        }, {
          name: "tableRow",
          spec: W.m
        }, {
          name: "tableHeader",
          spec: W.j
        }, {
          name: "confluenceJiraIssue",
          spec: U.a
        }, {
          name: "confluenceUnsupportedInline",
          spec: Z.a
        }, {
          name: "confluenceUnsupportedBlock",
          spec: V.a
        }, {
          name: "decisionList",
          spec: G.a
        }, {
          name: "decisionItem",
          spec: H.a
        }, {
          name: "taskList",
          spec: K.a
        }, {
          name: "taskItem",
          spec: Q.a
        }, {
          name: "date",
          spec: X.a
        }, {
          name: "status",
          spec: Y.a
        }, {
          name: "expand",
          spec: tt.a
        }, {
          name: "nestedExpand",
          spec: et.a
        }, {
          name: "extension",
          spec: nt.a
        }, {
          name: "inlineExtension",
          spec: rt.a
        }, {
          name: "bodiedExtension",
          spec: it.a
        }, {
          name: "inlineCard",
          spec: ot.a
        }, {
          name: "blockCard",
          spec: at.a
        }, {
          name: "embedCard",
          spec: st.a
        }, {
          name: "unknownBlock",
          spec: ut.a
        }, {
          name: "unsupportedBlock",
          spec: ct.a
        }, {
          name: "unsupportedInline",
          spec: lt.a
        } ],
        gt = [ {
          name: "link",
          spec: a.a
        }, {
          name: "em",
          spec: s.a
        }, {
          name: "strong",
          spec: u.a
        }, {
          name: "textColor",
          spec: c.c
        }, {
          name: "strike",
          spec: l.a
        }, {
          name: "subsup",
          spec: p.a
        }, {
          name: "underline",
          spec: d.a
        }, {
          name: "code",
          spec: f.a
        }, {
          name: "typeAheadQuery",
          spec: h.a
        }, {
          name: "alignment",
          spec: m.a
        }, {
          name: "annotation",
          spec: g.c
        }, {
          name: "confluenceInlineComment",
          spec: y
        }, ...ft, {
          name: "breakout",
          spec: v.a
        }, {
          name: "indentation",
          spec: b.a
        }, {
          name: "unsupportedMark",
          spec: x.a
        }, {
          name: "unsupportedNodeAttribute",
          spec: k.a
        } ];

      function yt( t ) {
        const {
          customNodeSpecs: e,
          customMarkSpecs: n
        } = t, r = Object.keys( e || {} ).concat( t.nodes ), o = Object.keys( n || {} ).concat( t.marks || [] ).concat( ht );
        let a = pt( mt, r, e ),
          s = pt( gt, o, n );
        return a = vt( a, s ), new i.Schema( {
          nodes: a,
          marks: s
        } )
      }

      function vt( t, e ) {
        return Object.keys( t ).forEach( n => {
          const i = Object( r.a )( {}, t[ n ] );
          if ( i.marks && "_" !== i.marks && ( i.marks = i.marks.split( " " ).filter( t => !!e[ t ] ).join( " " ) ), i.content ) {
            const e = i.content.replace( /\W/g, " " ).split( " " ).filter( e => ! function ( t, e ) {
              if ( Object.keys( t ).indexOf( e ) > -1 ) return !0;
              for ( const n in t ) {
                const r = t[ n ];
                if ( r && r.group === e ) return !0
              }
              return !1
            }( t, e ) );
            i.content = e.reduce( ( t, e ) => function ( t, e ) {
              if ( !e.length ) return t || "";
              if ( !t || !t.match( /\w/ ) ) return "";
              return t.replace( new RegExp( `(${e}((\\s)*\\|)+)|((\\|(\\s)*)+${e})|(${e}$)`, "g" ), "" ).replace( "  ", " " ).trim()
            }( t, e ), i.content )
          }
          t[ n ] = i
        } ), t
      }
    },
    z3s2: function ( t, e, n ) {
      "use strict";
      var r = n( "Czhu" ),
        i = n( "nnRT" ),
        o = n.n( i ),
        a = n( "DPgy" ),
        s = n( "Vhfh" ),
        u = n( "/0Vt" ),
        c = n( "xxff" ),
        l = n( "qFXU" ),
        p = n( "634R" ),
        d = n( "ZB1H" ),
        f = n( "6Laz" );
      const h = {
          canOverrideUnsupportedMark: () => !0
        },
        m = {
          canOverrideUnsupportedMark: () => !1
        };
      n.d( e, "a", ( function () {
        return B
      } ) );
      const g = t => e => e.type.name === t,
        y = g( "codeBlock" ),
        v = g( "media" ),
        b = g( "mediaSingle" ),
        x = g( "mention" ),
        k = g( "paragraph" ),
        _ = g( "heading" ),
        w = g( "table" ),
        A = g( "tableCell" ),
        D = g( "tableHeader" ),
        O = g( "link" ),
        C = g( "unsupportedMark" ),
        M = g( "unsupportedNodeAttribute" ),
        F = g( "expand" ),
        S = g( "nestedExpand" ),
        E = t => Object.keys( t ).reduce( ( e, n ) => {
          let i = t[ n ];
          return null === i ? e : ( "object" != typeof i || Array.isArray( i ) || ( i = E( i ) ), Object( r.a )( Object( r.a )( {}, e ), {}, {
            [ n ]: i
          } ) )
        }, {} ),
        z = t => ( {
          version: 1,
          type: "doc",
          content: t || []
        } ),
        N = z( [ {
          type: "paragraph",
          content: []
        } ] ),
        T = t => {
          const e = {
            type: t.type.name
          };
          return ( t => g( "unsupportedBlock" )( t ) || g( "unsupportedInline" )( t ) )( t ) ? t.attrs.originalValue : ( v( t ) ? e.attrs = Object( a.c )( t ).attrs : b( t ) ? e.attrs = Object( s.c )( t ).attrs : x( t ) ? e.attrs = Object( u.b )( t ).attrs : y( t ) ? e.attrs = Object( c.b )( t ).attrs : w( t ) ? e.attrs = Object( l.n )( t ).attrs : A( t ) ? e.attrs = Object( l.o )( t ).attrs : D( t ) ? e.attrs = Object( l.p )( t ).attrs : F( t ) || S( t ) ? e.attrs = Object( p.b )( t ).attrs : Object.keys( t.attrs ).length && ( e.attrs = t.attrs ), e.attrs && ( e.attrs = E( e.attrs ) ), t.isText ? e.text = t.textContent : t.content.forEach( t => {
            e.content = e.content || [], e.content.push( T( t ) )
          } ), ( k( t ) || _( t ) ) && ( e.content = e.content || [] ), t.marks.length && ( e.marks = t.marks.reduce( ( n, i ) => {
            if ( C( i ) ) return I( i, t.marks ) || n.push( i.attrs.originalValue ), n;
            if ( M( i ) ) {
              if ( i.attrs.type.nodeType === e.type ) {
                const n = j( t, i, e );
                e.attrs = Object( r.a )( {}, n )
              }
              return 1 === t.marks.length ? void 0 : n
            }
            return O( i ) ? ( n.push( Object( d.b )( i ) ), n ) : ( n.push( i.toJSON() ), n )
          }, [] ) ), e )
        },
        I = ( t, e ) => !!e.some( e => t.attrs.originalValue.type === e.type.name ) && ( t => {
          switch ( t ) {
            case "link":
            case "em":
            case "strong":
            case "strike":
            case "subsup":
            case "underline":
            case "code":
            case "textColor":
            case "confluenceInlineComment":
            case "breakout":
            case "alignment":
            case "indentation":
              return h;
            default:
              return m
          }
        } )( t.attrs.originalValue.type ).canOverrideUnsupportedMark(),
        j = ( t, e, n ) => {
          const i = t.type.spec.attrs,
            o = Object( r.a )( Object( r.a )( {}, e.attrs.unsupported ), n.attrs );
          for ( var a in n.attrs )
            if ( n.attrs.hasOwnProperty( a ) ) {
              const n = i ? i[ a ] : null;
              if ( n && n.default === t.attrs[ a ] && e.attrs.unsupported[ a ] ) return Object( r.a )( Object( r.a )( {}, o ), {}, {
                [ a ]: e.attrs.unsupported[ a ]
              } )
            } return o
        };
      class B {
        encode( t ) {
          const e = [];
          return t.content.forEach( t => {
            e.push( T( t ) )
          } ), !e || o()( e, N.content ) ? z( [] ) : z( e )
        }
        internalParse( t ) {
          const e = f.a.nodeFromJSON( t );
          return e.check(), e
        }
        parse( t ) {
          if ( "doc" !== t.type ) throw new Error( "Expected content format to be ADF" );
          return t.content && 0 !== t.content.length ? this.internalParse( t ) : this.internalParse( N )
        }
        encodeNode( t ) {
          return T( t )
        }
      }
    }
  }
] );
//# sourceMappingURL=8.TPJnqbmfxF.js.map
