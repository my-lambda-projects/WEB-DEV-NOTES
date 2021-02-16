( window.webpackJsonp = window.webpackJsonp || [] ).push( [
  [ 123 ], {
    "+pSt": function ( e, n, t ) {
      "use strict";
      t.d( n, "a", ( function () {
        return r
      } ) );
      var o = t( "rGGD" );
      const r = ( e, n, t ) => Object( o.a )( e, t ).then( e => e.mentionResource ).catch( e => ( "PRODUCTION" !== n && console.error `Failed to initialise mention resource ${e}`, Promise.reject() ) )
    },
    "0LOj": function ( e, n, t ) {
      "use strict";
      n.a = function ( e ) {
        return e.displayName || e.name || "Component"
      }
    },
    "7Otk": function ( e, n, t ) {
      "use strict";
      var o = t( "97Jx" ),
        r = t.n( o ),
        i = t( "m3Bd" ),
        a = t.n( i ),
        c = t( "VrFO" ),
        s = t.n( c ),
        l = t( "Y9Ll" ),
        u = t.n( l ),
        d = t( "N+ot" ),
        p = t.n( d ),
        f = t( "AuHH" ),
        h = t.n( f ),
        m = t( "1Pcy" ),
        b = t.n( m ),
        O = t( "5Yy7" ),
        g = t.n( O ),
        v = t( "KEM+" ),
        x = t.n( v ),
        j = t( "ERkP" ),
        y = t.n( j ),
        C = t( "aWzz" ),
        w = t.n( C ),
        I = t( "0LOj" ),
        E = t( "xbH5" ),
        k = t( "S6DC" );
      n.a = function ( e ) {
        var n, t;
        return t = n = function ( n ) {
          function t() {
            var e, n;
            s()( this, t );
            for ( var o = arguments.length, r = new Array( o ), i = 0; i < o; i++ ) r[ i ] = arguments[ i ];
            return n = p()( this, ( e = h()( t ) ).call.apply( e, [ this ].concat( r ) ) ), x()( b()( n ), "callContextFn", Object( E.a )( b()( n ), k.a ) ), x()( b()( n ), "shouldCloseAfterClick", ( function () {
              return !n.props.isDisabled && !n.props.href
            } ) ), x()( b()( n ), "handleClick", ( function ( e ) {
              n.props.onClick( e ), n.shouldCloseAfterClick() && n.callContextFn( "itemClicked" )
            } ) ), x()( b()( n ), "handleKeyDown", ( function ( e ) {
              n.props.onKeyDown ? n.props.onKeyDown( e ) : "Space" !== e.key && "Enter" !== e.key || n.handleClick( e )
            } ) ), n
          }
          return g()( t, n ), u()( t, [ {
            key: "render",
            value: function () {
              var n = this.props,
                t = n.children,
                o = a()( n, [ "children" ] );
              return y.a.createElement( e, r()( {}, o, {
                onClick: this.handleClick,
                onKeyDown: this.handleKeyDown
              } ), t )
            }
          } ] ), t
        }( j.Component ), x()( n, "displayName", "WithItemClick(".concat( Object( I.a )( e ), ")" ) ), x()( n, "defaultProps", {
          onClick: function () {}
        } ), x()( n, "contextTypes", x()( {}, k.a, w.a.object ) ), t
      }
    },
    "7hB0": function ( e, n, t ) {
      "use strict";
      var o = t( "97Jx" ),
        r = t.n( o ),
        i = t( "m3Bd" ),
        a = t.n( i ),
        c = t( "VrFO" ),
        s = t.n( c ),
        l = t( "Y9Ll" ),
        u = t.n( l ),
        d = t( "N+ot" ),
        p = t.n( d ),
        f = t( "AuHH" ),
        h = t.n( f ),
        m = t( "1Pcy" ),
        b = t.n( m ),
        O = t( "5Yy7" ),
        g = t.n( O ),
        v = t( "KEM+" ),
        x = t.n( v ),
        j = t( "ERkP" ),
        y = t.n( j ),
        C = t( "aWzz" ),
        w = t.n( C ),
        I = t( "7nmT" ),
        E = t.n( I ),
        k = t( "fN3Q" ),
        D = t.n( k ),
        P = t( "0LOj" ),
        N = t( "xbH5" ),
        T = t( "S6DC" );
      n.a = function ( e ) {
        var n, t;
        return t = n = function ( n ) {
          function t() {
            var e, n;
            s()( this, t );
            for ( var o = arguments.length, r = new Array( o ), i = 0; i < o; i++ ) r[ i ] = arguments[ i ];
            return n = p()( this, ( e = h()( t ) ).call.apply( e, [ this ].concat( r ) ) ), x()( b()( n ), "contextId", void 0 ), x()( b()( n ), "callContextFn", Object( N.a )( b()( n ), T.b ) ), x()( b()( n ), "isFocusable", ( function () {
              return !n.props.isDisabled && !n.props.isHidden
            } ) ), x()( b()( n ), "handleFocus", ( function () {
              n.isFocusable() && n.callContextFn( "itemFocused", n.contextId )
            } ) ), n
          }
          return g()( t, n ), u()( t, [ {
            key: "componentDidMount",
            value: function () {
              this.isFocusable() && ( this.contextId = D()(), this.callContextFn( "registerItem", this.contextId, E.a.findDOMNode( this ) ) )
            }
          }, {
            key: "componentDidUpdate",
            value: function () {
              this.isFocusable() && this.callContextFn( "updateItem", this.contextId, E.a.findDOMNode( this ) )
            }
          }, {
            key: "componentWillUnmount",
            value: function () {
              this.isFocusable() && this.callContextFn( "deregisterItem", this.contextId )
            }
          }, {
            key: "render",
            value: function () {
              var n = this.props,
                t = n.children,
                o = a()( n, [ "children" ] );
              return y.a.createElement( e, r()( {
                onFocus: this.handleFocus,
                role: "menuitem"
              }, o ), t )
            }
          } ] ), t
        }( j.Component ), x()( n, "displayName", "WithItemFocus(".concat( Object( P.a )( e ), ")" ) ), x()( n, "contextTypes", x()( {}, T.b, w.a.object ) ), t
      }
    },
    Fqgi: function ( e, n, t ) {
      "use strict";
      var o = t( "7Otk" ),
        r = t( "7hB0" ),
        i = t( "mQlO" );
      n.a = Object( o.a )( Object( r.a )( i.a ) )
    },
    JKJ1: function ( e, n, t ) {
      "use strict";
      t.r( n ), t.d( n, "ForgeUIExtensionProviderWrapper", ( function () {
        return b
      } ) ), t.d( n, "ForgeUIExtensionPointWrapper", ( function () {
        return O
      } ) ), t.d( n, "ForgeUIExtensionsWrapper", ( function () {
        return g
      } ) ), t.d( n, "ForgeUIExtensionWrapper", ( function () {
        return v
      } ) );
      var o = t( "HbGN" ),
        r = t( "Czhu" ),
        i = t( "ERkP" ),
        a = t.n( i ),
        c = t( "IC1n" ),
        s = t.n( c ),
        l = t( "bM1y" ),
        u = t( "a0gl" ),
        d = t( "QcXP" ),
        p = t( "h0Jo" ),
        f = t( "spSL" ),
        h = t( "+pSt" ),
        m = t( "ZNSh" );
      const b = ( {
          children: e,
          forgeContext: n,
          moduleType: t,
          noAccessRenderFallback: o = ( () => null )
        } ) => {
          const {
            cloudId: i,
            environment: c,
            userId: f
          } = Object( u.a )();
          return !f ? o( [], !1 ) : a.a.createElement( l.m.ForgeUIExtensionProvider, {
            value: {
              contextIds: [ "ari:cloud:confluence::site/" + i ],
              client: Object( d.a )(),
              forgeContext: Object( r.a )( {}, n ),
              page: t || "",
              environment: Object( p.a )( c ),
              product: "confluence",
              productData: {
                mentionProvider: Object( h.a )( i, c, f )
              },
              id: `${t}__${s()()}`
            }
          }, e )
        },
        O = e => {
          let {
            forgeContext: n,
            moduleType: t
          } = e, i = Object( o.a )( e, [ "forgeContext", "moduleType" ] );
          return a.a.createElement( b, {
            forgeContext: n,
            moduleType: t
          }, a.a.createElement( l.n.ForgeUIExtensionPoint, Object( r.a )( Object( r.a )( {}, i ), {}, {
            moduleType: t
          } ) ) )
        },
        g = e => {
          const {
            featureFlags: n
          } = Object( u.a )(), t = Boolean( n[ "confluence.frontend.forge.hosted-resources" ] ), o = n[ "confluence.frontend.forge.hosted-resources-enabled-extension-points" ], r = Object( i.useMemo )( () => "string" == typeof o ? o.split( "," ) : [], [ o ] );
          return a.a.createElement( b, {
            forgeContext: e.forgeContext,
            moduleType: e.moduleType,
            noAccessRenderFallback: e.render
          }, a.a.createElement( l.n.ForgeUIExtensions, {
            moduleType: e.moduleType,
            render: ( n, ...o ) => {
              const i = Object( f.a )( n, t, r );
              return e.render( i, ...o )
            }
          } ) )
        },
        v = e => {
          let {
            forgeContext: n,
            extension: t
          } = e, i = Object( o.a )( e, [ "forgeContext", "extension" ] );
          return Object( f.c )( t ) ? a.a.createElement( m.a, {
            app: t,
            extensionData: Object( r.a )( Object( r.a )( {}, n ), i.extensionContext ),
            onInitialRender: i.onInitialRender
          } ) : a.a.createElement( b, {
            forgeContext: n,
            moduleType: t.type
          }, a.a.createElement( l.n.ForgeUIExtension, Object( r.a )( Object( r.a )( {}, i ), {}, {
            extension: t
          } ) ) )
        }
    },
    QcXP: function ( e, n, t ) {
      "use strict";
      t.d( n, "a", ( function () {
        return u
      } ) );
      var o = t( "qrFu" ),
        r = t( "3U3H" ),
        i = t( "W1KW" ),
        a = t( "HC8e" ),
        c = t( "kC4U" ),
        s = t( "qjoD" );
      let l;
      const u = () => window.MOCK_GATEWAY_APOLLO_CLIENT ? window.MOCK_GATEWAY_APOLLO_CLIENT : ( l || ( l = d() ), l ),
        d = () => new o.a( {
          connectToDevTools: !1,
          link: Object( r.from )( [ Object( s.a )(), new i.a( {
            credentials: "include",
            uri: "/gateway/api/graphql",
            fetch: c.a
          } ) ] ),
          cache: new a.a
        } )
    },
    "RLi/": function ( e, n, t ) {
      "use strict";
      t.r( n ), t.d( n, "SpacePageForgeApp", ( function () {
        return l
      } ) );
      var o = t( "Czhu" ),
        r = t( "HbGN" ),
        i = t( "ERkP" ),
        a = t.n( i ),
        c = t( "ZNSh" ),
        s = t( "vOjv" );
      const l = e => {
        let {
          app: n
        } = e, t = Object( r.a )( e, [ "app" ] );
        return a.a.createElement( c.b, Object( o.a )( Object( o.a )( {
          app: n
        }, t ), {}, {
          components: {
            SpacePage: Object( s.a )( t )
          }
        } ) )
      }
    },
    S6DC: function ( e, n, t ) {
      "use strict";
      t.d( n, "b", ( function () {
        return r
      } ) ), t.d( n, "a", ( function () {
        return i
      } ) );
      var o = function ( e ) {
          return "@atlaskit-private-do-not-use/dropdown-menu:".concat( e )
        },
        r = o( "focus-manager" ),
        i = ( o( "selection-cache" ), o( "selection-manager" ), o( "click-manager" ) )
    },
    ZNSh: function ( e, n, t ) {
      "use strict";
      var o = t( "HbGN" ),
        r = t( "Czhu" ),
        i = t( "ERkP" ),
        a = t.n( i ),
        c = t( "bM1y" ),
        s = t( "WodI" ),
        l = t( "a0gl" ),
        u = t( "QcXP" ),
        d = t( "spSL" ),
        p = t( "+pSt" );
      const f = e => e.replace( /[^a-zA-Z0-9-]/g, "-" );
      var h = t( "xkEZ" ),
        m = t( "X2PC" ),
        b = t( "Iy7w" );
      const O = Object( b.a )( "div", {
          target: "e1pc34xz0"
        } )( {
          name: "12lddnc",
          styles: "height:100%;width:100%;> iframe{border-style:none;}"
        } ),
        g = Object( h.a )( {
          attribution: m.a.ECOSYSTEM
        } )( ( {
          children: e,
          onInitialRender: n,
          environment: t
        } ) => ( Object( i.useEffect )( () => {
          n && n()
        }, [] ), a.a.createElement( c.m.ForgeUIEnvironmentProvider, {
          value: t
        }, a.a.createElement( O, null, e ) ) ) );
      var v = t( "3HyH" );
      const x = {
          small: {
            width: "288px",
            height: "52px"
          },
          medium: {
            width: "288px",
            height: "112px"
          },
          large: {
            width: "400px",
            height: "262px"
          },
          get default() {
            return this.medium
          }
        },
        j = {
          [ v.a.BYLINE ]: x,
          [ v.a.CONTEXT_MENU ]: x,
          [ v.a.GLOBAL_SETTINGS ]: {
            default: {
              width: "100%",
              height: "75vh"
            }
          },
          [ v.a.SPACE_SETTINGS ]: {
            default: {
              width: "100%",
              height: "65vh"
            }
          },
          [ v.a.SPACE_PAGE ]: {
            default: {
              width: "100%",
              height: "75vh"
            }
          }
        };
      var y = t( "h0Jo" );
      t.d( n, "a", ( function () {
        return I
      } ) ), t.d( n, "b", ( function () {
        return E
      } ) );
      const C = ( {
          app: e,
          entryPoint: n,
          extensionData: t,
          components: o,
          onInitialRender: s
        } ) => {
          const {
            cloudId: d,
            environment: h,
            userId: m
          } = Object( l.a )(), [ b, O ] = Object( i.useState )( !0 ), g = Object( u.a )(), v = f( e.id ), [ x, {
            forgeDoc: j,
            error: y,
            loading: C
          } ] = Object( c.o )( {
            apolloClient: g,
            contextIds: [ "ari:cloud:confluence::site/" + d ],
            extensionId: e.id,
            coreData: {
              localId: v,
              cloudId: d
            },
            entryPoint: n
          } );
          Object( i.useEffect )( () => {
            s && b && j && !C && ( s(), O( !1 ) )
          }, [ C, j, s, b, O ] ), Object( i.useEffect )( () => {
            x( {
              type: "render",
              extensionData: t || {}
            } )
          }, [ x, t ] );
          const w = Object( i.useCallback )( e => x( Object( r.a )( Object( r.a )( {}, e ), {}, {
              extensionData: Object( r.a )( Object( r.a )( {}, e.extensionData ), t || {} )
            } ) ), [ x, t ] ),
            I = Object( i.useMemo )( () => ( {
              Avatar: Object( c.f )( {
                client: g
              } ),
              AvatarStack: Object( c.g )( {
                client: g
              } ),
              UserPicker: Object( c.l )( {
                client: g,
                mentionProvider: Object( p.a )( d, h, m ),
                accountId: m,
                cloudId: d,
                productKey: "confluence"
              } )
            } ), [ g, m, d, h ] ),
            E = Object( i.useCallback )( e => Object( r.a )( Object( r.a )( Object( r.a )( {}, e ), I ), o || [] ), [ I, o ] );
          return a.a.createElement( c.a, {
            localId: v,
            extensionId: e.id
          }, a.a.createElement( c.c, {
            forgeDoc: j,
            loading: C,
            error: y,
            dispatch: w,
            components: E
          } ) )
        },
        w = e => {
          if ( e && Object.keys( e ).includes( "extensionContext" ) ) {
            const {
              extensionContext: n
            } = e, t = Object( o.a )( e, [ "extensionContext" ] );
            return Object( r.a )( Object( r.a )( {}, n ), t )
          }
          return e
        },
        I = ( {
          app: e,
          extensionData: n,
          components: t,
          onInitialRender: o
        } ) => {
          var c;
          const {
            cloudId: p,
            environment: h
          } = Object( l.a )(), m = f( e.id ), b = Object( i.useCallback )( n => {
            var o;
            return Object( r.a )( Object( r.a )( Object( r.a )( {}, n ), t || [] ), Object( d.b )( e.type, null === ( o = e.properties ) || void 0 === o ? void 0 : o.title ) || [] )
          }, [ t, e.type, null === ( c = e.properties ) || void 0 === c ? void 0 : c.title ] );
          return a.a.createElement( g, {
            onInitialRender: o,
            environment: Object( y.a )( h )
          }, a.a.createElement( s.a, Object( r.a )( {
            apolloClient: Object( u.a )(),
            components: b,
            contextIds: [ "ari:cloud:confluence::site/" + p ],
            extension: e,
            coreData: {
              cloudId: p,
              localId: m
            },
            extensionData: w( n )
          }, ( O = e.type, v = e.properties.viewportSize, j[ O ][ null != v ? v : "default" ] ) ) ) );
          var O, v
        },
        E = e => {
          let {
            app: n
          } = e, t = Object( o.a )( e, [ "app" ] );
          return Object( d.c )( n ) ? a.a.createElement( I, {
            app: n,
            extensionData: t.extensionData,
            onInitialRender: t.onInitialRender
          } ) : a.a.createElement( C, Object( r.a )( {
            app: n
          }, t ) )
        }
    },
    h0Jo: function ( e, n, t ) {
      "use strict";
      t.d( n, "a", ( function () {
        return r
      } ) );
      var o = t( "bM1y" );
      const r = e => "localhost" === window.location.hostname ? o.b.DEVELOPMENT : "STAGING" === e ? o.b.STAGING : "PRODUCTION" === e ? o.b.PRODUCTION : o.b.DEVELOPMENT
    },
    lyMi: function ( e, n, t ) {
      "use strict";
      Object.defineProperty( n, "__esModule", {
        value: !0
      } ), n.default = void 0;
      var o = i( t( "ERkP" ) ),
        r = i( t( "4KTy" ) );

      function i( e ) {
        return e && e.__esModule ? e : {
          default: e
        }
      }

      function a() {
        return ( a = Object.assign || function ( e ) {
          for ( var n = 1; n < arguments.length; n++ ) {
            var t = arguments[ n ];
            for ( var o in t ) Object.prototype.hasOwnProperty.call( t, o ) && ( e[ o ] = t[ o ] )
          }
          return e
        } ).apply( this, arguments )
      }
      var c = function ( e ) {
        return o.default.createElement( r.default, a( {
          dangerouslySetGlyph: '<svg width="24" height="24" viewBox="0 0 24 24" focusable="false" role="presentation"><g fill="currentColor" fill-rule="evenodd"><circle cx="5" cy="12" r="2"/><circle cx="12" cy="12" r="2"/><circle cx="19" cy="12" r="2"/></g></svg>'
        }, e ) )
      };
      c.displayName = "MoreIcon";
      var s = c;
      n.default = s
    },
    mQlO: function ( e, n, t ) {
      "use strict";
      var o = t( "97Jx" ),
        r = t.n( o ),
        i = t( "m3Bd" ),
        a = t.n( i ),
        c = t( "VrFO" ),
        s = t.n( c ),
        l = t( "Y9Ll" ),
        u = t.n( l ),
        d = t( "N+ot" ),
        p = t.n( d ),
        f = t( "AuHH" ),
        h = t.n( f ),
        m = t( "1Pcy" ),
        b = t.n( m ),
        O = t( "5Yy7" ),
        g = t.n( O ),
        v = t( "KEM+" ),
        x = t.n( v ),
        j = t( "ERkP" ),
        y = t.n( j ),
        C = t( "KsTJ" ),
        w = t( "3IV/" ),
        I = t( "3GHw" ),
        E = function ( e ) {
          return function ( n ) {
            var t = n.theme,
              o = Object( I.c )( t[ I.e ], e );
            return Object( C.css )( [ "\n    background-color: ", ";\n    color: ", ";\n    fill: ", ";\n    text-decoration: none;\n\n    &:focus {\n      color: ", ";\n    }\n  " ], o.background, o.text, o.background, o.text )
          }
        },
        k = function ( e ) {
          var n = e.isCompact,
            t = e.theme,
            o = e.description,
            r = n ? "compact" : "default",
            i = Object( I.c )( t[ I.e ], r, "padding" ),
            a = i.bottom,
            c = void 0 === a ? 0 : a,
            s = i.left,
            l = void 0 === s ? 0 : s,
            u = i.right,
            d = void 0 === u ? 0 : u,
            p = i.top,
            f = void 0 === p ? 0 : p,
            h = "function" == typeof f ? f() : f,
            m = "function" == typeof c ? c() : c;
          return h = Math.max( o ? h - 1 : h, 0 ), m = Math.max( m - 1, 0 ), Object( C.css )( [ "\n    padding: ", "px ", "px ", "px ", "px;\n  " ], h, d, m, l )
        },
        D = function ( e ) {
          var n = e.isCompact,
            t = e.theme,
            o = n ? "compact" : "default",
            r = Object( I.c )( t[ I.e ], o, "height" );
          return r ? Object( C.css )( [ "\n        height: ", "px;\n      " ], r ) : ""
        },
        P = function ( e ) {
          var n = e.isCompact,
            t = e.theme,
            o = n ? "compact" : "default",
            r = Object( I.c )( t[ I.e ], o, "width" );
          return r ? "number" == typeof r ? Object( C.css )( [ "\n        width: ", "px;\n      " ], r ) : Object( C.css )( [ "\n        width: ", ";\n      " ], r ) : ""
        },
        N = function ( e ) {
          var n = e.theme,
            t = e.isDisabled,
            o = e.isDragging,
            r = e.isSelected;
          if ( o ) return Object( C.css )( [ "\n      ", " box-shadow: 0 4px 8px -2px ", ",\n        0 0 1px ", ";\n    " ], E( "dragging" ), w.N60A, w.N60A );
          var i = Object( C.css )( [ "\n    &:focus {\n      box-shadow: 0 0 0 2px\n        ", " inset;\n      text-decoration: none;\n    }\n  " ], Object( I.c )( n[ I.e ], "outline", "focus" ) );
          return t ? Object( C.css )( [ "\n      cursor: not-allowed;\n      ", " ", ";\n    " ], E( "disabled" ), i ) : r ? Object( C.css )( [ "\n      ", " &:hover {\n        ", ";\n      }\n\n      &:active {\n        ", ";\n      }\n\n      ", ";\n    " ], E( "selected" ), E( "hover" ), E( "active" ), i ) : Object( C.css )( [ "\n    &:hover {\n      ", ";\n    }\n\n    &:active {\n      ", ";\n    }\n\n    ", ";\n  " ], E( "hover" ), E( "active" ), i )
        },
        T = function ( e ) {
          var n = e.theme;
          return Object( C.css )( [ "\n  && {\n    align-items: center;\n    border-radius: ", "px;\n    box-sizing: border-box;\n    cursor: pointer;\n    display: ", ";\n    flex: none;\n    ", " ", " ", " ", " ", " &:focus {\n      /* focus shadow drawn by getInteractiveStyles */\n\n      outline: none;\n      /* relative position prevents bgcolor of a hovered element from\n      obfuscating focus ring of a focused sibling element */\n      position: relative;\n    }\n  }\n" ], Object( I.c )( n[ I.e ], "borderRadius" ), ( function ( e ) {
            return e.isHidden ? "none" : "flex"
          } ), E( "default" ), k, N, D, P )
        },
        M = function ( e ) {
          var n = e.href,
            t = e.linkComponent;
          return t ? Object( C.default )( t ).withConfig( {
            displayName: "Item",
            componentId: "z6qfkt-0"
          } )( [ "\n      ", ";\n    " ], T ) : n ? C.default.a.withConfig( {
            displayName: "Item",
            componentId: "z6qfkt-1"
          } )( [ "\n      ", ";\n    " ], T ) : C.default.span.withConfig( {
            displayName: "Item",
            componentId: "z6qfkt-2"
          } )( [ "\n    ", ";\n  " ], T )
        },
        F = t( "BMbf" ),
        S = ( C.default.span.withConfig( {
          displayName: "ItemParts__InputWrapper",
          componentId: "sc-14xek3m-0"
        } )( [ "\n  display: flex;\n  margin: 0 2px;\n" ] ), C.default.span.withConfig( {
          displayName: "ItemParts__BeforeAfterBase",
          componentId: "sc-14xek3m-1"
        } )( [ "\n  align-items: center;\n  display: flex;\n  flex-shrink: 0;\n  /* Fix windows line-height issue */\n  padding-bottom: 1px;\n" ] ) ),
        _ = Object( C.default )( S ).withConfig( {
          displayName: "ItemParts__Before",
          componentId: "sc-14xek3m-2"
        } )( [ "\n  ", ";\n" ], ( function ( e ) {
          var n = e.isCompact,
            t = e.theme,
            o = n ? "compact" : "default",
            r = Object( I.c )( t[ I.e ], o, "beforeItemSpacing" );
          return Object( C.css )( [ "\n    margin-right: ", "px;\n  " ], r )
        } ) ),
        A = Object( C.default )( S ).withConfig( {
          displayName: "ItemParts__After",
          componentId: "sc-14xek3m-3"
        } )( [ "\n  ", ";\n" ], ( function ( e ) {
          var n = e.isCompact,
            t = e.theme,
            o = n ? "compact" : "default",
            r = Object( I.c )( t[ I.e ], o, "afterItemSpacing" );
          return Object( C.css )( [ "\n    margin-left: ", "px;\n  " ], r )
        } ) ),
        R = C.default.span.withConfig( {
          displayName: "ItemParts__ContentWrapper",
          componentId: "sc-14xek3m-4"
        } )( [ "\n  display: flex;\n  flex-direction: column;\n  flex-grow: 1;\n  margin: 0;\n  overflow: hidden;\n\n  &:first-child {\n    margin: 0;\n  }\n" ] ),
        H = C.default.span.withConfig( {
          displayName: "ItemParts__Content",
          componentId: "sc-14xek3m-5"
        } )( [ "\n  display: block;\n  flex: 1 1 auto;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: ", ";\n  line-height: ", ";\n  /* Fix windows line-height issue */\n  padding-bottom: 1px;\n" ], ( function ( e ) {
          return e.allowMultiline ? "normal" : "nowrap"
        } ), 16 / Object( F.f )() ),
        L = C.default.span.withConfig( {
          displayName: "ItemParts__Description",
          componentId: "sc-14xek3m-6"
        } )( [ "\n  flex: 1 1 auto;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  ", " ", ";\n" ], ( function ( e ) {
          var n = e.isDisabled,
            t = e.theme;
          return n ? Object( C.css )( [ "\n      color: ", ";\n    " ], Object( I.c )( t[ I.e ], "secondaryText", "disabled" ) ) : Object( C.css )( [ "\n    color: ", ";\n\n    /* This detects hover on the grandparent. Saves us having to maintain isHovered\n       state in the grandparent. */\n    *:hover > * > & {\n      color: ", ";\n    }\n\n    *:active > * > & {\n      color: ", ";\n    }\n  " ], Object( I.c )( t[ I.e ], "secondaryText", "default" ), ( function () {
            return Object( I.c )( t[ I.e ], "secondaryText", "hover" )
          } ), ( function () {
            return Object( I.c )( t[ I.e ], "secondaryText", "active" )
          } ) )
        } ), ( function ( e ) {
          var n = e.isCompact,
            t = n ? I.b : Object( F.g )(),
            o = n ? I.a : 14 / t;
          return Object( C.css )( [ "\n    font-size: ", "px;\n    line-height: ", ";\n    /* Fix windows line-height issue */\n    padding-bottom: 1px;\n  " ], t, o )
        } ) );
      t.d( n, "a", ( function () {
        return K
      } ) );
      var K = function ( e ) {
        function n( e ) {
          var t;
          return s()( this, n ), t = p()( this, h()( n ).call( this, e ) ), x()( b()( t ), "setRef", ( function ( e ) {
            t.ref = e
          } ) ), x()( b()( t ), "href", ( function () {
            return t.props.isDisabled ? null : t.props.href
          } ) ), t.rootComponent = M( {
            href: t.href(),
            linkComponent: e.linkComponent
          } ), t
        }
        return g()( n, e ), u()( n, [ {
          key: "componentDidMount",
          value: function () {
            this.ref && this.props.autoFocus && this.ref.focus()
          }
        }, {
          key: "render",
          value: function () {
            var e = this,
              n = this.props,
              t = n.onClick,
              o = n.onKeyDown,
              i = n.isCompact,
              c = n.isDisabled,
              s = n.isDragging,
              l = n.isHidden,
              u = n.isSelected,
              d = n.onMouseEnter,
              p = n.onMouseLeave,
              f = n.role,
              h = n.dnd,
              m = a()( n, [ "onClick", "onKeyDown", "isCompact", "isDisabled", "isDragging", "isHidden", "isSelected", "onMouseEnter", "onMouseLeave", "role", "dnd" ] ),
              b = this.rootComponent,
              O = h && h.dragHandleProps || null,
              g = {
                onClick: function ( e ) {
                  e.defaultPrevented || !c && t && t( e )
                },
                onMouseDown: function ( e ) {
                  O && O.onMouseDown && O.onMouseDown( e ), e.preventDefault()
                },
                onKeyDown: function ( e ) {
                  s || ( O && O.onKeyDown && O.onKeyDown( e ), e.defaultPrevented || c || o && o( e ) )
                }
              };
            return y.a.createElement( b, r()( {
              "aria-disabled": c,
              href: this.href(),
              isCompact: i,
              isDisabled: c,
              isDragging: s,
              isHidden: l,
              isSelected: u,
              onMouseEnter: d,
              onMouseLeave: p,
              role: f,
              tabIndex: c || l || this.props.href ? null : 0,
              target: this.props.target,
              title: this.props.title,
              innerRef: function ( n ) {
                e.setRef( n ), h && h.innerRef && h.innerRef( n )
              }
            }, h && h.draggableProps, O, g, m ), !!this.props.elemBefore && y.a.createElement( _, {
              isCompact: i
            }, this.props.elemBefore ), y.a.createElement( R, null, y.a.createElement( H, {
              allowMultiline: this.props.shouldAllowMultiline
            }, this.props.children ), !!this.props.description && y.a.createElement( L, {
              isCompact: this.props.isCompact,
              isDisabled: this.props.isDisabled
            }, this.props.description ) ), !!this.props.elemAfter && y.a.createElement( A, {
              isCompact: i
            }, this.props.elemAfter ) )
          }
        } ] ), n
      }( j.Component );
      x()( K, "defaultProps", {
        autoFocus: !1,
        description: "",
        isCompact: !1,
        isDisabled: !1,
        isHidden: !1,
        role: "button",
        shouldAllowMultiline: !1
      } )
    },
    spSL: function ( e, n, t ) {
      "use strict";
      t.d( n, "c", ( function () {
        return i
      } ) ), t.d( n, "a", ( function () {
        return a
      } ) ), t.d( n, "b", ( function () {
        return s
      } ) );
      var o = t( "bM1y" ),
        r = t( "3HyH" );
      const i = e => !!( e.properties.resource && e.installationId && e.environmentId && e.appVersion ),
        a = ( e, n, t ) => e.filter( e => !i( e ) || n && t.includes( e.type ) ),
        c = [ r.a.BYLINE, r.a.CONTEXT_MENU ],
        s = ( e, n = "" ) => c.includes( e ) ? {
          ThreeLOPrompt: Object( o.j )( {
            appName: n
          } )
        } : null
    },
    vOjv: function ( e, n, t ) {
      "use strict";
      t.d( n, "a", ( function () {
        return c
      } ) );
      var o = t( "Czhu" ),
        r = t( "ERkP" ),
        i = t.n( r );
      const a = ( {
          forgeDoc: e,
          render: n,
          onTearDown: t
        } ) => ( 0 === e.children.length && t && t(), e.children.map( n ) ),
        c = e => ( {
          forgeDoc: n,
          render: t
        } ) => i.a.createElement( a, Object( o.a )( Object( o.a )( {
          key: "top-level-component"
        }, e ), {}, {
          forgeDoc: n,
          render: t
        } ) )
    },
    xQ8g: function ( e, n, t ) {
      "use strict";
      Object.defineProperty( n, "__esModule", {
        value: !0
      } ), n.default = void 0;
      var o = i( t( "ERkP" ) ),
        r = i( t( "4KTy" ) );

      function i( e ) {
        return e && e.__esModule ? e : {
          default: e
        }
      }

      function a() {
        return ( a = Object.assign || function ( e ) {
          for ( var n = 1; n < arguments.length; n++ ) {
            var t = arguments[ n ];
            for ( var o in t ) Object.prototype.hasOwnProperty.call( t, o ) && ( e[ o ] = t[ o ] )
          }
          return e
        } ).apply( this, arguments )
      }
      var c = function ( e ) {
        return o.default.createElement( r.default, a( {
          dangerouslySetGlyph: '<svg width="24" height="24" viewBox="0 0 24 24" focusable="false" role="presentation"><g fill-rule="evenodd"><rect fill="currentColor" x="6" y="6" width="12" height="12" rx="2"/><path d="M9.707 11.293a1 1 0 1 0-1.414 1.414l2 2a1 1 0 0 0 1.414 0l4-4a1 1 0 1 0-1.414-1.414L11 12.586l-1.293-1.293z" fill="inherit"/></g></svg>'
        }, e ) )
      };
      c.displayName = "CheckboxIcon";
      var s = c;
      n.default = s
    },
    xbH5: function ( e, n, t ) {
      "use strict";
      n.a = function ( e, n ) {
        return function ( t ) {
          var o;
          if ( !e.context[ n ] ) return null;
          for ( var r = arguments.length, i = new Array( r > 1 ? r - 1 : 0 ), a = 1; a < r; a++ ) i[ a - 1 ] = arguments[ a ];
          return ( o = e.context[ n ] )[ t ].apply( o, i )
        }
      }
    }
  }
] );
//# sourceMappingURL=123.Y2mw9TmTgT.js.map
