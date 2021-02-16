( window.webpackJsonp = window.webpackJsonp || [] ).push( [
  [ 56 ], {
    "+CY+": function ( e, t, n ) {
      "use strict";
      n.d( t, "a", ( function () {
        return f
      } ) );
      var i = n( "zjfJ" ),
        r = n( "ERkP" ),
        o = ( n( "aWzz" ), n( "+Aie" ) ),
        c = n.n( o ),
        a = n( "+xfv" ),
        s = n( "5Asb" );
      const l = {},
        u = c.a.prototype.stopCallback;
      c.a.prototype.stopCallback = function ( e, t, n ) {
        return !!!s.d.map( e => t.classList.contains( e ) ).find( e => e ) && u.call( this, e, t, n )
      };
      class f extends r.PureComponent {
        constructor( ...e ) {
          super( ...e ), Object( i.a )( this, "listeners", {} ), Object( i.a )( this, "lastFired", 0 ), Object( i.a )( this, "_call", e => {
            const t = +new Date;
            t - this.lastFired >= 150 && !Object( a.a )() && ( this.lastFired = t, this.props.listener( e ) )
          } )
        }
        componentDidMount() {
          const {
            accelerator: e
          } = this.props;
          l[ e ], l[ e ] = !0, c.a.bind( e, this._call )
        }
        componentWillUnmount() {
          const {
            accelerator: e
          } = this.props;
          delete l[ e ], c.a.unbind( e )
        }
        render() {
          return null
        }
      }
    },
    "+xfv": function ( e, t, n ) {
      "use strict";
      n.d( t, "a", ( function () {
        return i
      } ) );
      const i = () => {
        const e = [ ...document.getElementsByClassName( "atlaskit-portal" ) ].filter( e => e.firstChild );
        return Boolean( e.filter( e => e.querySelectorAll( '[role="dialog"]' ).length ).length )
      }
    },
    "4r5F": function ( e, t, n ) {
      "use strict";
      var i = n( "HbGN" ),
        r = n( "l1C2" ),
        o = n( "aLY5" );
      t.a = e => {
        let {
          children: t,
          testId: n,
          id: c,
          cssFn: a = ( e => e )
        } = e, s = Object( i.a )( e, [ "children", "testId", "id", "cssFn" ] );
        return Object( r.f )( "div", Object.assign( {
          css: a( o.h, void 0 ),
          "data-testid": n,
          "data-ds--menu--heading-item": !0,
          id: c
        }, s ), t )
      }
    },
    "5Asb": function ( e, t, n ) {
      "use strict";
      n.d( t, "c", ( function () {
        return i
      } ) ), n.d( t, "b", ( function () {
        return r
      } ) ), n.d( t, "a", ( function () {
        return o
      } ) ), n.d( t, "d", ( function () {
        return c
      } ) );
      const i = {
          PUBLISH: "mod+enter",
          PUBLISH_WITH_COMMENT: "mod+shift+enter",
          EDIT: "e",
          PREVIEW: "mod+shift+e"
        },
        r = "mod+s",
        o = "shortcuts-are-allowed",
        c = [ "ProseMirror-focused", o ]
    },
    "5ypJ": function ( e, t, n ) {
      "use strict";
      Object.defineProperty( t, "__esModule", {
        value: !0
      } ), t.default = void 0;
      var i = o( n( "ERkP" ) ),
        r = o( n( "4KTy" ) );

      function o( e ) {
        return e && e.__esModule ? e : {
          default: e
        }
      }

      function c() {
        return ( c = Object.assign || function ( e ) {
          for ( var t = 1; t < arguments.length; t++ ) {
            var n = arguments[ t ];
            for ( var i in n ) Object.prototype.hasOwnProperty.call( n, i ) && ( e[ i ] = n[ i ] )
          }
          return e
        } ).apply( this, arguments )
      }
      var a = function ( e ) {
        return i.default.createElement( r.default, c( {
          dangerouslySetGlyph: '<svg width="24" height="24" viewBox="0 0 24 24" focusable="false" role="presentation"><path d="M10.294 9.698a.988.988 0 0 1 0-1.407 1.01 1.01 0 0 1 1.419 0l2.965 2.94a1.09 1.09 0 0 1 0 1.548l-2.955 2.93a1.01 1.01 0 0 1-1.42 0 .988.988 0 0 1 0-1.407l2.318-2.297-2.327-2.307z" fill="currentColor" fill-rule="evenodd"/></svg>'
        }, e ) )
      };
      a.displayName = "ChevronRightIcon";
      var s = a;
      t.default = s
    },
    "8PwJ": function ( e, t, n ) {
      "use strict";
      n.d( t, "a", ( function () {
        return r
      } ) );
      var i = n( "ERkP" );
      const r = e => Object( i.useCallback )( t => {
        const n = t.currentTarget,
          i = n === document.activeElement;
        e && e( t ), requestAnimationFrame( () => {
          i && n !== document.activeElement && document.body.contains( n ) ? n.focus() : !i && document.activeElement && document.activeElement instanceof HTMLElement && document.activeElement.blur()
        } )
      }, [ e ] )
    },
    "93WT": function ( e, t, n ) {
      "use strict";
      var i = n( "HbGN" ),
        r = n( "ERkP" ),
        o = n( "l1C2" ),
        c = n( "4r5F" ),
        a = n( "fhcw" );
      const s = Object( r.forwardRef )( ( e, t ) => {
          let {
            children: n,
            overrides: r,
            title: a,
            testId: s
          } = e, u = Object( i.a )( e, [ "children", "overrides", "title", "testId" ] );
          return void 0 !== a ? Object( o.f )( l, Object.assign( {}, u, {
            testId: s,
            ref: t,
            "aria-label": a
          } ), Object( o.f )( c.a, {
            cssFn: r && r.HeadingItem && r.HeadingItem.cssFn,
            testId: s && s + "--heading",
            "aria-hidden": !0
          }, a ), n ) : Object( o.f )( l, Object.assign( {}, u, {
            ref: t
          } ), n )
        } ),
        l = Object( r.forwardRef )( ( e, t ) => {
          let {
            isScrollable: n,
            hasSeparator: r,
            testId: c
          } = e, s = Object( i.a )( e, [ "isScrollable", "hasSeparator", "testId" ] );
          return Object( o.f )( "div", Object.assign( {
            css: Object( a.b )( n, r ),
            "data-testid": c,
            role: "group",
            "data-section": !0
          }, s, {
            ref: t
          } ) )
        } );
      t.a = s
    },
    PLaw: function ( e, t, n ) {
      "use strict";
      Object.defineProperty( t, "__esModule", {
        value: !0
      } ), t.default = void 0;
      var i = o( n( "ERkP" ) ),
        r = o( n( "4KTy" ) );

      function o( e ) {
        return e && e.__esModule ? e : {
          default: e
        }
      }

      function c() {
        return ( c = Object.assign || function ( e ) {
          for ( var t = 1; t < arguments.length; t++ ) {
            var n = arguments[ t ];
            for ( var i in n ) Object.prototype.hasOwnProperty.call( n, i ) && ( e[ i ] = n[ i ] )
          }
          return e
        } ).apply( this, arguments )
      }
      var a = function ( e ) {
        return i.default.createElement( r.default, c( {
          dangerouslySetGlyph: '<svg width="24" height="24" viewBox="0 0 24 24" focusable="false" role="presentation"><path d="M8.292 10.293a1.009 1.009 0 0 0 0 1.419l2.939 2.965c.218.215.5.322.779.322s.556-.107.769-.322l2.93-2.955a1.01 1.01 0 0 0 0-1.419.987.987 0 0 0-1.406 0l-2.298 2.317-2.307-2.327a.99.99 0 0 0-1.406 0z" fill="currentColor" fill-rule="evenodd"/></svg>'
        }, e ) )
      };
      a.displayName = "ChevronDownIcon";
      var s = a;
      t.default = s
    },
    Qdol: function ( e, t, n ) {
      "use strict";
      n.d( t, "h", ( function () {
        return r
      } ) ), n.d( t, "c", ( function () {
        return o
      } ) ), n.d( t, "d", ( function () {
        return c
      } ) ), n.d( t, "j", ( function () {
        return a
      } ) ), n.d( t, "e", ( function () {
        return s
      } ) ), n.d( t, "a", ( function () {
        return l
      } ) ), n.d( t, "k", ( function () {
        return u
      } ) ), n.d( t, "g", ( function () {
        return f
      } ) ), n.d( t, "b", ( function () {
        return h
      } ) ), n.d( t, "i", ( function () {
        return g
      } ) ), n.d( t, "l", ( function () {
        return x
      } ) ), n.d( t, "f", ( function () {
        return w
      } ) );
      var i = n( "TSpG" );
      const r = "onboarding-state:",
        o = "createNudge",
        c = "createNudgeQS",
        a = "peopleNudge",
        s = "editNudge",
        l = "commentNudge",
        u = "personalSpaceNudge",
        f = {
          OVERALL_STATE: r + "introWorkflow",
          EDIT_NUDGE: `${r}${s}`,
          CREATE_NUDGE: `${r}${o}`,
          COMMENT_NUDGE: `${r}${l}`,
          LEGACY_ONBOARDING_STATE: r + "legacy",
          SPOTLIGHT_TOUR_STATE: r + "spotlightTour",
          PERSONAL_SPACE_NUDGE: `${r}${u}`
        },
        {
          ONBOARDING_NUDGE: d
        } = i.a,
        h = "__complete__",
        {
          OVERALL_STATE: g,
          EDIT_NUDGE: p,
          CREATE_NUDGE: b,
          COMMENT_NUDGE: m,
          LEGACY_ONBOARDING_STATE: O,
          SPOTLIGHT_TOUR_STATE: j,
          PERSONAL_SPACE_NUDGE: v
        } = f,
        x = [ O, j, v ],
        w = {
          [ d ]: [ p, m, b ]
        }
    },
    RHiN: function ( e, t, n ) {
      "use strict";
      n.r( t ), n.d( t, "headingSizes", ( function () {
        return m
      } ) ), n.d( t, "h900", ( function () {
        return O
      } ) ), n.d( t, "h800", ( function () {
        return j
      } ) ), n.d( t, "h700", ( function () {
        return v
      } ) ), n.d( t, "h600", ( function () {
        return x
      } ) ), n.d( t, "h500", ( function () {
        return w
      } ) ), n.d( t, "h400", ( function () {
        return y
      } ) ), n.d( t, "h300", ( function () {
        return E
      } ) ), n.d( t, "h200", ( function () {
        return _
      } ) ), n.d( t, "h100", ( function () {
        return H
      } ) );
      var i, r, o, c, a, s, l, u, f, d = n( "4uKn" ),
        h = n( "KsTJ" ),
        g = n( "L48P" ),
        p = n( "HIRw" ),
        b = function ( e, t ) {
          return "\n  font-size: " + e / Object( p.f )() + "em;\n  font-style: inherit;\n  line-height: " + t / e + ";\n"
        },
        m = {
          h900: {
            size: 35,
            lineHeight: 40
          },
          h800: {
            size: 29,
            lineHeight: 32
          },
          h700: {
            size: 24,
            lineHeight: 28
          },
          h600: {
            size: 20,
            lineHeight: 24
          },
          h500: {
            size: 16,
            lineHeight: 20
          },
          h400: {
            size: 14,
            lineHeight: 16
          },
          h300: {
            size: 12,
            lineHeight: 16
          },
          h200: {
            size: 12,
            lineHeight: 16
          },
          h100: {
            size: 11,
            lineHeight: 16
          }
        },
        O = function () {
          return Object( h.css )( i || ( i = Object( d.c )( [ "\n  ", "\n  color: ", ";\n  font-weight: 500;\n  letter-spacing: -0.01em;\n  margin-top: ", "px;\n" ], [ "\n  ", "\n  color: ", ";\n  font-weight: 500;\n  letter-spacing: -0.01em;\n  margin-top: ", "px;\n" ] ) ), b( m.h900.size, m.h900.lineHeight ), g.heading, 6.5 * Object( p.g )() )
        },
        j = function () {
          return Object( h.css )( r || ( r = Object( d.c )( [ "\n  ", "\n  color: ", ";\n  font-weight: 600;\n  letter-spacing: -0.01em;\n  margin-top: ", "px;\n" ], [ "\n  ", "\n  color: ", ";\n  font-weight: 600;\n  letter-spacing: -0.01em;\n  margin-top: ", "px;\n" ] ) ), b( m.h800.size, m.h800.lineHeight ), g.heading, 5 * Object( p.g )() )
        },
        v = function () {
          return Object( h.css )( o || ( o = Object( d.c )( [ "\n  ", "\n  color: ", ";\n  font-weight: 500;\n  letter-spacing: -0.01em;\n  margin-top: ", "px;\n" ], [ "\n  ", "\n  color: ", ";\n  font-weight: 500;\n  letter-spacing: -0.01em;\n  margin-top: ", "px;\n" ] ) ), b( m.h700.size, m.h700.lineHeight ), g.heading, 5 * Object( p.g )() )
        },
        x = function () {
          return Object( h.css )( c || ( c = Object( d.c )( [ "\n  ", "\n  color: ", ";\n  font-weight: 500;\n  letter-spacing: -0.008em;\n  margin-top: ", "px;\n" ], [ "\n  ", "\n  color: ", ";\n  font-weight: 500;\n  letter-spacing: -0.008em;\n  margin-top: ", "px;\n" ] ) ), b( m.h600.size, m.h600.lineHeight ), g.heading, 3.5 * Object( p.g )() )
        },
        w = function () {
          return Object( h.css )( a || ( a = Object( d.c )( [ "\n  ", "\n  color: ", ";\n  font-weight: 600;\n  letter-spacing: -0.006em;\n  margin-top: ", "px;\n" ], [ "\n  ", "\n  color: ", ";\n  font-weight: 600;\n  letter-spacing: -0.006em;\n  margin-top: ", "px;\n" ] ) ), b( m.h500.size, m.h500.lineHeight ), g.heading, 3 * Object( p.g )() )
        },
        y = function () {
          return Object( h.css )( s || ( s = Object( d.c )( [ "\n  ", "\n  color: ", ";\n  font-weight: 600;\n  letter-spacing: -0.003em;\n  margin-top: ", "px;\n" ], [ "\n  ", "\n  color: ", ";\n  font-weight: 600;\n  letter-spacing: -0.003em;\n  margin-top: ", "px;\n" ] ) ), b( m.h400.size, m.h400.lineHeight ), g.heading, 2 * Object( p.g )() )
        },
        E = function () {
          return Object( h.css )( l || ( l = Object( d.c )( [ "\n  ", "\n  color: ", ";\n  font-weight: 600;\n  margin-top: ", "px;\n  text-transform: uppercase;\n" ], [ "\n  ", "\n  color: ", ";\n  font-weight: 600;\n  margin-top: ", "px;\n  text-transform: uppercase;\n" ] ) ), b( m.h300.size, m.h300.lineHeight ), g.heading, 2.5 * Object( p.g )() )
        },
        _ = function () {
          return Object( h.css )( u || ( u = Object( d.c )( [ "\n  ", "\n  color: ", ";\n  font-weight: 600;\n  margin-top: ", "px;\n" ], [ "\n  ", "\n  color: ", ";\n  font-weight: 600;\n  margin-top: ", "px;\n" ] ) ), b( m.h200.size, m.h200.lineHeight ), g.subtleHeading, 2 * Object( p.g )() )
        },
        H = function () {
          return Object( h.css )( f || ( f = Object( d.c )( [ "\n  ", "\n  color: ", ";\n  font-weight: 700;\n  margin-top: ", "px;\n" ], [ "\n  ", "\n  color: ", ";\n  font-weight: 700;\n  margin-top: ", "px;\n" ] ) ), b( m.h100.size, m.h100.lineHeight ), g.subtleHeading, 2 * Object( p.g )() )
        }
    },
    U0wZ: function ( e, t, n ) {
      "use strict";
      var i = n( "l1C2" ),
        r = n( "aLY5" );
      const o = ( e, t ) => Object( i.f )( e, Object.assign( {}, t ) );
      t.a = ( {
        children: e,
        description: t,
        iconAfter: n,
        iconBefore: c,
        overrides: a
      } ) => {
        const s = a && a.Title && a.Title.render || o;
        return Object( i.f )( "div", {
          css: r.c
        }, c && Object( i.f )( "span", {
          "data-item-elem-before": !0,
          css: r.g
        }, c ), e && Object( i.f )( "span", {
          css: r.b
        }, Object( i.f )( i.b, null, ( {
          css: t
        } ) => s( "span", {
          children: e,
          className: t( r.l ),
          "data-item-title": !0
        } ) ), t && Object( i.f )( "span", {
          "data-item-description": !0,
          css: r.e
        }, t ) ), n && Object( i.f )( "span", {
          "data-item-elem-after": !0,
          css: r.f
        }, n ) )
      }
    },
    aLY5: function ( e, t, n ) {
      "use strict";
      n.d( t, "a", ( function () {
        return S
      } ) ), n.d( t, "b", ( function () {
        return z
      } ) ), n.d( t, "l", ( function () {
        return C
      } ) ), n.d( t, "g", ( function () {
        return R
      } ) ), n.d( t, "f", ( function () {
        return P
      } ) ), n.d( t, "e", ( function () {
        return I
      } ) ), n.d( t, "c", ( function () {
        return A
      } ) ), n.d( t, "j", ( function () {
        return D
      } ) ), n.d( t, "d", ( function () {
        return G
      } ) ), n.d( t, "h", ( function () {
        return L
      } ) ), n.d( t, "k", ( function () {
        return M
      } ) ), n.d( t, "i", ( function () {
        return B
      } ) );
      var i = n( "Czhu" ),
        r = n( "l1C2" ),
        o = n( "L48P" ),
        c = n( "HIRw" ),
        a = n( "RHiN" );
      const s = Object( c.g )(),
        l = 1.5 * s,
        u = 3 * s,
        f = s,
        d = 2.5 * s,
        h = .375 * s,
        g = 5 * s,
        p = g - 2 * f,
        b = a.headingSizes.h100.lineHeight,
        m = a.headingSizes.h100.size,
        O = 2.5 * s,
        j = ( u - O ) / 2,
        v = s,
        x = {
          backgroundColor: "transparent",
          border: 0,
          outline: 0,
          margin: 0,
          width: "100%"
        },
        w = {},
        y = {
          color: "currentColor"
        },
        E = {
          cursor: "not-allowed",
          "&, &:hover, &:focus, &:active": {
            backgroundColor: "transparent",
            color: o.N200
          }
        },
        _ = {
          backgroundColor: o.N20,
          textDecoration: "none"
        },
        H = Object( c.i )(),
        T = Object( r.g )( H.keyframes ),
        N = ( e, t ) => Object( i.a )( Object( i.a )( {
          padding: `${f}px ${d}px`,
          cursor: "pointer",
          fontSize: Object( c.f )(),
          display: "flex",
          boxSizing: "border-box",
          color: o.N800,
          userSelect: "none",
          "&:visited": {
            color: o.N800
          },
          "&:hover": {
            color: o.N800,
            backgroundColor: o.N20,
            textDecoration: "none"
          },
          "&:focus": {
            outline: "none",
            boxShadow: e ? "none" : o.B100 + " 0 0 0 2px inset"
          },
          "&:active": {
            boxShadow: "none",
            color: o.N800,
            backgroundColor: o.N30
          },
          "::-moz-focus-inner": {
            border: 0
          }
        }, t && _ ), e && E ),
        S = ( e, t ) => Object( i.a )( Object( i.a )( {}, x ), N( e, t ) ),
        k = N,
        z = {
          flexGrow: 1,
          textAlign: "left",
          overflow: "hidden",
          outline: "none",
          display: "flex",
          flexDirection: "column",
          lineHeight: 1.22
        },
        C = {
          display: "block",
          overflow: "hidden",
          textOverflow: "ellipsis",
          whiteSpace: "nowrap"
        },
        R = {
          display: "flex",
          flexShrink: 0,
          marginRight: l
        },
        P = {
          display: "flex",
          flexShrink: 0,
          marginLeft: l
        },
        I = Object( i.a )( Object( i.a )( {}, C ), {}, {
          color: Object( o.subtleText )(),
          marginTop: h,
          fontSize: a.headingSizes.h200.size
        } ),
        A = {
          display: "flex",
          minHeight: p,
          alignItems: "center",
          width: "100%"
        },
        D = ( e, t ) => Object( i.a )( Object( i.a )( {}, w ), N( e, t ) ),
        G = ( e, t ) => Object( i.a )( Object( i.a )( {}, y ), N( e, t ) ),
        L = {
          textTransform: "uppercase",
          fontSize: m,
          lineHeight: b / m,
          fontWeight: 700,
          color: Object( o.subtleHeading )(),
          padding: `0 ${d}px`
        },
        M = ( e, t ) => Object( i.a )( Object( i.a )( {}, L ), {}, {
          "&::after": Object( i.a )( Object( i.a )( {
            backgroundColor: Object( o.skeleton )()
          }, t && Object( i.a )( Object( i.a )( {}, H.css ), {}, {
            animationName: "" + T
          } ) ), {}, {
            height: v,
            width: e || "30%",
            borderRadius: 100,
            display: "block",
            content: '""'
          } )
        } ),
        B = ( e, t, n, r ) => Object( i.a )( Object( i.a )( Object( i.a )( Object( i.a )( {}, k( !1, !1 ) ), {}, {
          pointerEvents: "none",
          display: "flex",
          alignItems: "center",
          minHeight: g
        }, !n && {
          "&:nth-child(1n)::after": {
            flexBasis: "70%"
          },
          "&:nth-child(2n)::after": {
            flexBasis: "50%"
          },
          "&:nth-child(3n)::after": {
            flexBasis: "60%"
          },
          "&:nth-child(4n)::after": {
            flexBasis: "90%"
          },
          "&:nth-child(5n)::after": {
            flexBasis: "35%"
          },
          "&:nth-child(6n)::after": {
            flexBasis: "77%"
          }
        } ), ( e || t ) && {
          "&::before": Object( i.a )( Object( i.a )( {
            content: '""',
            backgroundColor: Object( o.skeleton )()
          }, r && Object( i.a )( Object( i.a )( {}, H.css ), {}, {
            animationName: "" + T
          } ) ), {}, {
            marginRight: l + j,
            width: O,
            height: O,
            marginLeft: j,
            borderRadius: e ? "100%" : Object( c.c )(),
            flexShrink: 0
          } )
        } ), {}, {
          "&::after": Object( i.a )( Object( i.a )( {
            content: '""',
            backgroundColor: Object( o.skeleton )()
          }, r && Object( i.a )( Object( i.a )( {}, H.css ), {}, {
            animationName: "" + T
          } ) ), {}, {
            marginTop: 1,
            height: 9,
            borderRadius: 100,
            flexBasis: n || "100%"
          } )
        } )
    },
    e00J: function ( e, t, n ) {
      "use strict";
      Object.defineProperty( t, "__esModule", {
        value: !0
      } );
      var i = function () {
          function e( e, t ) {
            for ( var n = 0; n < t.length; n++ ) {
              var i = t[ n ];
              i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && ( i.writable = !0 ), Object.defineProperty( e, i.key, i )
            }
          }
          return function ( t, n, i ) {
            return n && e( t.prototype, n ), i && e( t, i ), t
          }
        }(),
        r = n( "ERkP" ),
        o = n( "7nmT" );

      function c( e, t ) {
        if ( !( e instanceof t ) ) throw new TypeError( "Cannot call a class as a function" )
      }

      function a( e, t ) {
        if ( !e ) throw new ReferenceError( "this hasn't been initialised - super() hasn't been called" );
        return !t || "object" != typeof t && "function" != typeof t ? e : t
      }
      var s = function ( e ) {
        function t() {
          return c( this, t ), a( this, ( t.__proto__ || Object.getPrototypeOf( t ) ).apply( this, arguments ) )
        }
        return function ( e, t ) {
          if ( "function" != typeof t && null !== t ) throw new TypeError( "Super expression must either be null or a function, not " + typeof t );
          e.prototype = Object.create( t && t.prototype, {
            constructor: {
              value: e,
              enumerable: !1,
              writable: !0,
              configurable: !0
            }
          } ), t && ( Object.setPrototypeOf ? Object.setPrototypeOf( e, t ) : e.__proto__ = t )
        }( t, e ), i( t, [ {
          key: "componentDidMount",
          value: function () {
            this.props.innerRef( ( 0, o.findDOMNode )( this ) )
          }
        }, {
          key: "componentWillUnmount",
          value: function () {
            this.props.innerRef( null )
          }
        }, {
          key: "render",
          value: function () {
            return this.props.children
          }
        } ] ), t
      }( r.Component );
      t.default = s
    },
    fhcw: function ( e, t, n ) {
      "use strict";
      n.d( t, "a", ( function () {
        return g
      } ) ), n.d( t, "b", ( function () {
        return p
      } ) );
      var i = n( "Czhu" ),
        r = n( "L48P" ),
        o = n( "HIRw" ),
        c = n( "RHiN" );
      const a = Object( o.g )(),
        s = 2.5 * a,
        l = .75 * a,
        u = c.headingSizes.h100.lineHeight,
        f = s + ( u - a ) - 3,
        d = l + 3,
        h = .75 * a,
        g = ( {
          minWidth: e,
          maxWidth: t,
          minHeight: n,
          maxHeight: i
        } ) => ( {
          display: "flex",
          flexDirection: "column",
          overflow: "auto",
          maxWidth: t,
          minWidth: e,
          maxHeight: i,
          minHeight: n
        } ),
        p = ( e, t ) => Object( i.a )( Object( i.a )( Object( i.a )( {
          "&:before, &:after": {
            content: '" "',
            display: "block",
            height: h
          },
          "& [data-ds--menu--heading-item]": {
            "&:first-of-type": {
              marginTop: s - h
            },
            marginTop: s,
            marginBottom: l
          },
          "& [data-ds--menu--skeleton-heading-item]": {
            "&:first-of-type": {
              marginTop: f - h
            },
            marginTop: f,
            marginBottom: d
          }
        }, e ? {
          flexShrink: 1,
          overflow: "auto"
        } : {
          flexShrink: 0
        } ), t ? {
          borderTop: "2px solid " + r.N30A
        } : {
          "[data-section] + &": {
            marginTop: -6
          }
        } ), {}, {
          "&:focus": {
            outlineOffset: -1
          }
        } )
    },
    iJcn: function ( e, t, n ) {
      "use strict";
      Object.defineProperty( t, "__esModule", {
        value: !0
      } );
      var i = n( "e00J" );
      Object.defineProperty( t, "default", {
        enumerable: !0,
        get: function () {
          return ( e = i, e && e.__esModule ? e : {
            default: e
          } ).default;
          var e
        }
      } )
    },
    mzIm: function ( e, t, n ) {
      "use strict";
      var i = n( "HbGN" ),
        r = n( "l1C2" ),
        o = n( "fhcw" );
      t.a = e => {
        let {
          maxWidth: t,
          minWidth: n,
          minHeight: c,
          maxHeight: a,
          testId: s
        } = e, l = Object( i.a )( e, [ "maxWidth", "minWidth", "minHeight", "maxHeight", "testId" ] );
        return Object( r.f )( "div", Object.assign( {
          css: Object( o.a )( {
            maxHeight: a,
            maxWidth: t,
            minHeight: c,
            minWidth: n
          } ),
          "data-testid": s
        }, l ) )
      }
    },
    wORz: function ( e, t, n ) {
      "use strict";
      var i = n( "ERkP" ),
        r = n.n( i ),
        o = n( "iJcn" ),
        c = n.n( o ),
        a = n( "baYQ" );
      class s extends i.Component {
        render() {
          return r.a.createElement( a.c, null, e => e ? r.a.createElement( c.a, {
            innerRef: e( this.props.name )
          }, this.props.children ) : this.props.children )
        }
      }
      t.a = s
    },
    xQ8g: function ( e, t, n ) {
      "use strict";
      Object.defineProperty( t, "__esModule", {
        value: !0
      } ), t.default = void 0;
      var i = o( n( "ERkP" ) ),
        r = o( n( "4KTy" ) );

      function o( e ) {
        return e && e.__esModule ? e : {
          default: e
        }
      }

      function c() {
        return ( c = Object.assign || function ( e ) {
          for ( var t = 1; t < arguments.length; t++ ) {
            var n = arguments[ t ];
            for ( var i in n ) Object.prototype.hasOwnProperty.call( n, i ) && ( e[ i ] = n[ i ] )
          }
          return e
        } ).apply( this, arguments )
      }
      var a = function ( e ) {
        return i.default.createElement( r.default, c( {
          dangerouslySetGlyph: '<svg width="24" height="24" viewBox="0 0 24 24" focusable="false" role="presentation"><g fill-rule="evenodd"><rect fill="currentColor" x="6" y="6" width="12" height="12" rx="2"/><path d="M9.707 11.293a1 1 0 1 0-1.414 1.414l2 2a1 1 0 0 0 1.414 0l4-4a1 1 0 1 0-1.414-1.414L11 12.586l-1.293-1.293z" fill="inherit"/></g></svg>'
        }, e ) )
      };
      a.displayName = "CheckboxIcon";
      var s = a;
      t.default = s
    }
  }
] );
//# sourceMappingURL=56.Gnb3WzvgFt.js.map
