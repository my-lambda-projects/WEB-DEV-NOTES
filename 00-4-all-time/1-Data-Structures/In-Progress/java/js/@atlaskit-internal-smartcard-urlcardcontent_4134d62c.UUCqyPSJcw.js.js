( window.webpackJsonp = window.webpackJsonp || [] ).push( [
  [ "@atlaskit-internal-smartcard-urlcardcontent~4134d62c" ],
  {
    J1GM: function ( e, t, n ) {
      "use strict";
      Object.defineProperty( t, "__esModule", {
        value: !0
      } );
      var i = ( function () {
        function e( e, t ) {
          for ( var n = 0; n < t.length; n++ ) {
            var i = t[ n ];
            ( i.enumerable = i.enumerable || !1 ),
            ( i.configurable = !0 ),
            "value" in i && ( i.writable = !0 ),
              Object.defineProperty( e, i.key, i );
          }
        }
        return function ( t, n, i ) {
          return n && e( t.prototype, n ), i && e( t, i ), t;
        };
      } )();

      function o( e, t ) {
        if ( !( e instanceof t ) )
          throw new TypeError( "Cannot call a class as a function" );
      }

      function a( e, t ) {
        if ( !e )
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return !t || ( "object" != typeof t && "function" != typeof t ) ? e : t;
      }

      function r( e ) {
        return {
          image: e,
          isLoaded: !1,
          isErrored: !1
        };
      }

      function c( e, t ) {
        return e.src !== t.src;
      }
      var s = ( function ( e ) {
        function t() {
          var e, n, i;
          o( this, t );
          for ( var r = arguments.length, c = Array( r ), s = 0; s < r; s++ )
            c[ s ] = arguments[ s ];
          return (
            ( n = i = a(
              this,
              ( e = t.__proto__ || Object.getPrototypeOf( t ) ).call.apply(
                e,
                [ this ].concat( c )
              )
            ) ),
            ( i.state = {
              isLoaded: !1,
              isErrored: !1
            } ),
            ( i.handleLoad = function () {
              var e = i.props.onLoad;
              i.unload(),
                i.setState( {
                  isLoaded: !0
                }, function () {
                  e && e();
                } );
            } ),
            ( i.handleError = function () {
              var e = i.props.onError;
              i.unload(),
                i.setState( {
                  isErrored: !0
                }, function () {
                  e && e();
                } );
            } ),
            a( i, n )
          );
        }
        return (
          ( function ( e, t ) {
            if ( "function" != typeof t && null !== t )
              throw new TypeError(
                "Super expression must either be null or a function, not " +
                typeof t
              );
            ( e.prototype = Object.create( t && t.prototype, {
              constructor: {
                value: e,
                enumerable: !1,
                writable: !0,
                configurable: !0,
              },
            } ) ),
            t &&
              ( Object.setPrototypeOf ?
                Object.setPrototypeOf( e, t ) :
                ( e.__proto__ = t ) );
          } )( t, e ),
          i( t, [ {
              key: "load",
              value: function () {
                var e = this.props.src,
                  t = this.state.image;
                t &&
                  ( ( t.onload = this.handleLoad ),
                    ( t.onerror = this.handleError ),
                    ( t.src = e ) );
              },
            },
            {
              key: "unload",
              value: function () {
                var e = this.state.image;
                e && ( ( e.onload = void 0 ), ( e.onerror = void 0 ) );
              },
            },
            {
              key: "componentWillMount",
              value: function () {
                "undefined" != typeof window && this.setState( r( new Image() ) );
              },
            },
            {
              key: "componentDidMount",
              value: function () {
                this.load();
              },
            },
            {
              key: "componentWillReceiveProps",
              value: function ( e ) {
                c( this.props, e ) && this.setState( r( new Image() ) );
              },
            },
            {
              key: "componentDidUpdate",
              value: function ( e ) {
                c( e, this.props ) && ( this.unload(), this.load() );
              },
            },
            {
              key: "componentWillUnmount",
              value: function () {
                this.unload();
              },
            },
            {
              key: "render",
              value: function () {
                var e = this.props,
                  t = e.loading,
                  n = e.loaded,
                  i = e.errored,
                  o = e.children,
                  a = this.state,
                  r = a.image,
                  c = a.isLoaded,
                  s = a.isErrored;
                return c && n ?
                  n :
                  s && i ?
                  i :
                  c || s || !t ?
                  o ?
                  o( {
                    image: c ? r : void 0,
                    loaded: c,
                    errored: s
                  } ) :
                  null :
                  t;
              },
            },
          ] ),
          t
        );
      } )(
        ( function ( e ) {
          if ( e && e.__esModule ) return e;
          var t = {};
          if ( null != e )
            for ( var n in e )
              Object.prototype.hasOwnProperty.call( e, n ) && ( t[ n ] = e[ n ] );
          return ( t.default = e ), t;
        } )( n( "ERkP" ) ).Component
      );
      t.default = s;
    },
    KBhP: function ( e, t, n ) {
      var i, o, a;
      ( o = [] ),
      void 0 ===
        ( a =
          "function" ==
          typeof ( i = function () {
            var e = /(auto|scroll)/,
              t = function ( e, n ) {
                return null === e.parentNode ?
                  n :
                  t( e.parentNode, n.concat( [ e ] ) );
              },
              n = function ( e, t ) {
                return getComputedStyle( e, null ).getPropertyValue( t );
              },
              i = function ( t ) {
                return e.test(
                  ( function ( e ) {
                    return (
                      n( e, "overflow" ) +
                      n( e, "overflow-y" ) +
                      n( e, "overflow-x" )
                    );
                  } )( t )
                );
              };
            return function ( e ) {
              if ( e instanceof HTMLElement || e instanceof SVGElement ) {
                for ( var n = t( e.parentNode, [] ), o = 0; o < n.length; o += 1 )
                  if ( i( n[ o ] ) ) return n[ o ];
                return document.scrollingElement || document.documentElement;
              }
            };
          } ) ?
          i.apply( t, o ) :
          i ) || ( e.exports = a );
    },
    "NK/E": function ( e, t, n ) {
      "use strict";
      Object.defineProperty( t, "__esModule", {
          value: !0
        } ),
        ( t.default = void 0 );
      var i = a( n( "ERkP" ) ),
        o = a( n( "4KTy" ) );

      function a( e ) {
        return e && e.__esModule ? e : {
          default: e
        };
      }

      function r() {
        return ( r =
          Object.assign ||
          function ( e ) {
            for ( var t = 1; t < arguments.length; t++ ) {
              var n = arguments[ t ];
              for ( var i in n )
                Object.prototype.hasOwnProperty.call( n, i ) && ( e[ i ] = n[ i ] );
            }
            return e;
          } ).apply( this, arguments );
      }
      var c = function ( e ) {
        return i.default.createElement(
          o.default,
          r( {
              dangerouslySetGlyph: '<svg width="24" height="24" viewBox="0 0 24 24" focusable="false" role="presentation"><path fill="currentColor" fill-rule="evenodd" d="M8 10V8.002A4.004 4.004 0 0 1 12 4a4 4 0 0 1 4 4.002V10a2 2 0 0 1 2 2v6c0 1.105-.902 2-2.009 2H8.01A2 2 0 0 1 6 18v-6c0-1.102.897-1.995 2-2zm2 0h4V8.002A2.001 2.001 0 0 0 12 6c-1.102 0-2 .898-2 2.002V10zm2 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"/></svg>',
            },
            e
          )
        );
      };
      c.displayName = "LockFilledIcon";
      var s = c;
      t.default = s;
    },
    mMFN: function ( e, t, n ) {
      "use strict";
      n.r( t );
      var i = n( "ERkP" ),
        o = n.n( i );
      var a = n( "tejg" ),
        r = n( "7BAE" ),
        c = n( "GoRf" ),
        s = n( "/J5f" ),
        l = n( "qkXo" ),
        d = n( "l1C2" ),
        u = n( "kjku" ),
        f = n.n( u ),
        b = n( "3IV/" ),
        p = n( "BMbf" ),
        m = n( "m0/A" ),
        h = n( "u61K" ),
        g = n( "L21V" ),
        v = n( "QxUR" );
      const O = ( {
          isSelected: e = !1,
          testId: t = "block-card-resolving-view",
          inheritDimensions: n,
        } ) =>
        Object( d.f )(
          m.a, {
            inheritDimensions: n,
            compact: !0,
            isSelected: e,
            testId: t
          },
          Object( d.f )( f.a, {
            size: "small",
            primaryColor: b.N50,
            label: "document-icon",
          } ),
          Object( d.f )(
            "span", {
              css: {
                fontSize: Object( p.f )() + "px",
                color: b.N90,
                marginLeft: Object( h.b )( 0.5 ),
              },
            },
            Object( d.f )( g.b, Object.assign( {}, v.a.loading ) )
          )
        );
      var j = n( "V0Kj" ),
        k = n( "Czhu" ),
        w = n( "e8dR" ),
        y = n( "qSoS" ),
        x = n( "XHqw" ),
        E = n( "7VV3" ),
        C = n( "PFaC" ),
        S = n( "/weW" ),
        I = n( "c426" );
      const _ = ( {
          url: e,
          testId: t = "block-card"
        } ) =>
        Object( d.f )(
          "span", {
            "data-testid": t + "-link",
            css: {
              color: b.B400,
              wordBreak: "break-all"
            },
          },
          e
        ),
        $ = Object( k.a )( {}, v.a.connect_link_account_card_description ),
        A = ( {
          context: e = {
            text: ""
          },
          isSelected: t = !1,
          actions: n = [],
          testId: i = "block-card-unauthorized-view",
          showActions: o = !0,
          link: a = "",
          onClick: r = () => {},
        } ) =>
        Object( d.f )(
          m.a, {
            isSelected: t,
            testId: i,
            isFluidHeight: !0
          },
          Object( d.f )(
            E.a, {
              isCompact: !0
            },
            Object( d.f )(
              "div",
              null,
              Object( d.f )(
                C.a, {
                  onClick: ( e ) => Object( I.a )( e, r ),
                  link: a
                },
                Object( d.f )( _, {
                  url: a,
                  testId: i
                } )
              ),
              Object( d.f )( y.a, {
                testId: i ? i + "-byline" : void 0,
                text: Object( d.f )(
                  g.b,
                  Object.assign( {}, $, {
                    values: {
                      context: e.text
                    }
                  } )
                ),
              } )
            ),
            Object( d.f )(
              S.a,
              null,
              Object( d.f )( w.a, {
                name: e.text,
                icon: e.icon
              } ),
              o && Object( d.f )( x.a, {
                items: n
              } )
            )
          )
        );
      var z = n( "NK/E" ),
        R = n.n( z );
      const P = ( {
          icon: e,
          text: t
        } ) =>
        Object( d.f )(
          "span", {
            css: {
              display: "flex",
              alignItems: "center"
            }
          },
          e,
          t
        ),
        F = Object( k.a )( {}, v.a.invalid_permissions_description ),
        D = ( {
          context: e = {
            text: ""
          },
          isSelected: t = !1,
          actions: n = [],
          testId: i = "block-card-forbidden-view",
          showActions: o = !0,
          link: a = "",
          onClick: r = () => {},
        } ) =>
        Object( d.f )(
          m.a, {
            isSelected: t,
            testId: i,
            isFluidHeight: !0
          },
          Object( d.f )(
            E.a, {
              isCompact: !0
            },
            Object( d.f )(
              "div",
              null,
              Object( d.f )(
                C.a, {
                  onClick: ( e ) => Object( I.a )( e, r ),
                  link: a
                },
                Object( d.f )( _, {
                  url: a,
                  testId: i
                } )
              ),
              Object( d.f )(
                y.a,
                null,
                Object( d.f )( P, {
                  icon: Object( d.f )( R.a, {
                    label: "forbidden-lock-icon",
                    size: "small",
                    primaryColor: b.R300,
                    testId: i + "-lock-icon",
                  } ),
                  text: Object( d.f )( g.b, Object.assign( {}, F ) ),
                } )
              )
            ),
            Object( d.f )(
              S.a,
              null,
              Object( d.f )( w.a, {
                name: e.text,
                icon: e.icon
              } ),
              o && Object( d.f )( x.a, {
                items: n
              } )
            )
          )
        ),
        V = ( e ) => ( {
          id: "connect-other-account",
          text: o.a.createElement(
            g.b,
            Object.assign( {}, v.a.try_another_account )
          ),
          promise: () => new Promise( ( t ) => t( e() ) ),
          buttonAppearance: "default",
        } );
      var N = n( "OOEx" ),
        B = n.n( N );
      const L = Object( k.a )( {}, v.a.not_found_description ),
        M = ( {
          context: e = {
            text: ""
          },
          isSelected: t = !1,
          testId: n = "block-card-not-found-view",
          link: i = "",
          onClick: o = () => {},
        } ) =>
        Object( d.f )(
          m.a, {
            isSelected: t,
            testId: n,
            isFluidHeight: !0
          },
          Object( d.f )(
            E.a, {
              isCompact: !0
            },
            Object( d.f )(
              "div",
              null,
              Object( d.f )(
                C.a, {
                  onClick: ( e ) => Object( I.a )( e, o ),
                  link: i
                },
                Object( d.f )( _, {
                  url: i,
                  testId: n
                } )
              ),
              Object( d.f )(
                y.a,
                null,
                Object( d.f )( P, {
                  icon: Object( d.f )( B.a, {
                    label: "not-found-warning-icon",
                    size: "small",
                    primaryColor: b.R300,
                    testId: n + "-warning-icon",
                  } ),
                  text: Object( d.f )( g.b, Object.assign( {}, L ) ),
                } )
              )
            ),
            Object( d.f )(
              S.a,
              null,
              Object( d.f )( w.a, {
                name: e.text,
                icon: e.icon
              } )
            )
          )
        );
      var W = n( "ghNS" );
      const H = Object( k.a )( {}, v.a.could_not_load_link ),
        T = ( {
          isSelected: e = !1,
          testId: t = "block-card-errored-view",
          link: n = "",
          onClick: a = () => {},
          onRetry: r,
          inheritDimensions: c = !1,
        } ) => {
          const s = Object( i.useMemo )( () => {
            return r ? [
              ( ( e = r ), {
                id: "try-again",
                promise: async () => e(),
                text: o.a.createElement(
                  g.b,
                  Object.assign( {}, v.a.try_again )
                ),
              } ),
            ] : [];
            var e;
          }, [ r ] );
          return Object( d.f )(
            m.a, {
              isSelected: e,
              testId: t,
              isFluidHeight: !0,
              inheritDimensions: c,
            },
            Object( d.f )(
              E.a, {
                isCompact: !0
              },
              Object( d.f )(
                "div",
                null,
                Object( d.f )(
                  C.a, {
                    onClick: ( e ) => Object( I.a )( e, a ),
                    link: n
                  },
                  Object( d.f )( _, {
                    url: n,
                    testId: t
                  } )
                ),
                Object( d.f )(
                  y.a,
                  null,
                  Object( d.f )( P, {
                    icon: Object( d.f )( B.a, {
                      label: "errored-warning-icon",
                      size: "small",
                      primaryColor: b.R300,
                      testId: t + "-warning-icon",
                    } ),
                    text: Object( d.f )( g.b, Object.assign( {}, H ) ),
                  } )
                )
              ),
              Object( d.f )( S.a, null, Object( d.f )( x.a, {
                items: s
              } ) )
            )
          );
        };
      var J = n( "Xr87" ),
        K = n( "6p1r" );
      const X = ( {
        url: e,
        cardState: {
          status: t,
          details: n
        },
        authFlow: i,
        handleAuthorize: a,
        handleErrorRetry: r,
        handleFrameClick: c,
        handlePreviewAnalytics: l,
        handleInvoke: d,
        isSelected: u,
        onResolve: f,
        testId: b,
        showActions: p,
      } ) => {
        const m = ( n && n.data ) || Object( K.a )(),
          h = {
            handleAnalytics: l,
            handleInvoke: d,
            definitionId: Object( s.c )( n ),
          };
        switch ( t ) {
          case "pending":
          case "resolving":
            return o.a.createElement( O, {
              testId: b,
              isSelected: u
            } );
          case "resolved":
            const n = Object( J.a )( m, h );
            return (
              f && f( {
                title: n.title,
                url: e
              } ),
              o.a.createElement(
                j.a,
                Object.assign( {}, n, {
                  isSelected: u,
                  testId: b,
                  showActions: p,
                  onClick: c,
                } )
              )
            );
          case "unauthorized":
            const s = Object( J.a )( m, h );
            return o.a.createElement(
              A,
              Object.assign( {}, s, {
                isSelected: u,
                testId: b,
                showActions: p,
                actions: a ? [
                  ( ( k = a ), {
                    id: "connect-account",
                    text: o.a.createElement(
                      g.b,
                      Object.assign( {}, v.a.connect_link_account_card )
                    ),
                    promise: () => new Promise( ( e ) => e( k() ) ),
                    buttonAppearance: "default",
                  } ),
                ] : [],
                onClick: c,
              } )
            );
          case "forbidden":
            const l = Object( J.a )( m, h );
            return o.a.createElement(
              D,
              Object.assign( {}, l, {
                isSelected: u,
                showActions: p,
                actions: a ? [ V( a ) ] : [],
                onClick: c,
              } )
            );
          case "not_found":
            const d = Object( J.a )( m, h );
            return o.a.createElement(
              M,
              Object.assign( {}, d, {
                isSelected: u,
                testId: b,
                onClick: c
              } )
            );
          case "fallback":
          case "errored":
            return i && "disabled" === i ?
              o.a.createElement( W.a, {
                link: e,
                isSelected: u,
                onClick: c,
                testId: `${b}-${t}`,
              } ) :
              o.a.createElement( T, {
                link: e,
                isSelected: u,
                onRetry: r,
                onClick: c,
                testId: b,
              } );
        }
        var k;
      };
      var U = n( "e2D/" ),
        Y = n( "lRcl" ),
        G = n( "+T0P" ),
        q = n( "KsTJ" ),
        Q = n( "BMQb" );
      const Z = Object( q.default )( Q.c )
      `
  vertical-align: text-top;
  margin-left: 2px;
`;
      class ee extends o.a.Component {
        render() {
          const {
            url: e,
            onClick: t,
            isSelected: n,
            testId: i = "inline-card-resolving-view",
          } = this.props;
          return o.a.createElement(
            U.a, {
              testId: i,
              onClick: t,
              isSelected: n
            },
            o.a.createElement(
              G.a, {
                title: e
              },
              o.a.createElement(
                Z, {
                  className: "inline-resolving-spinner"
                },
                o.a.createElement( Y.a, {
                  size: 14
                } )
              )
            )
          );
        }
      }
      var te = n( "gyJX" ),
        ne = n( "zJ/j" ),
        ie = n( "l+ev" ),
        oe = n( "w301" );
      const ae = q.default.span `
  text-align: initial !important;
  display: inline !important;

  &:hover {
    /* Remove the text-decoration to match other inline card hover states*/
    text-decoration: none !important;
  }

  > span {
    display: inline;
    > span {
      overflow: initial;
      text-overflow: initial;
      white-space: initial;
    }
  }
`,
        re = q.default.span `
  color: ${Object(oe.a)({ light: b.N200, dark: "#4794FF" })};
`,
        ce = q.default.span `
  text-transform: lowercase;
`,
        se = q.default.span `
  color: ${Object(oe.a)({ light: b.B400, dark: "#4794FF" })};
`,
        le = o.a.createElement(
          ie.a,
          null,
          o.a.createElement( R.a, {
            label: "error",
            size: "small",
            primaryColor: b.R400,
          } )
        );
      class de extends o.a.Component {
        constructor() {
          super( ...arguments ),
            ( this.handleConnectAccount = ( e ) => {
              const {
                onAuthorise: t
              } = this.props;
              return e.preventDefault(), e.stopPropagation(), t();
            } ),
            ( this.renderMessage = () => {
              const {
                onAuthorise: e,
                url: t
              } = this.props,
                n = o.a.createElement( se, null, t );
              return e ?
                o.a.createElement(
                  o.a.Fragment,
                  null,
                  n,
                  " - ",
                  o.a.createElement(
                    ne.a, {
                      spacing: "none",
                      appearance: "subtle-link",
                      component: ae,
                      onClick: this.handleConnectAccount,
                      testId: "button-connect-account",
                    },
                    o.a.createElement(
                      g.b,
                      Object.assign( {}, v.a.connect_link_account )
                    )
                  )
                ) :
                n;
            } );
        }
        render() {
          const {
            url: e,
            icon: t,
            onClick: n,
            isSelected: i,
            testId: a = "inline-card-unauthorized-view",
          } = this.props;
          return o.a.createElement(
            U.a, {
              testId: a,
              link: e,
              onClick: n,
              isSelected: i
            },
            o.a.createElement( G.a, {
              icon: t || le,
              title: this.renderMessage(),
              titleColor: b.N500,
            } )
          );
        }
      }
      const ue = o.a.createElement(
        ie.a,
        null,
        o.a.createElement( R.a, {
          label: "error",
          size: "small",
          primaryColor: b.R400,
        } )
      );
      class fe extends o.a.Component {
        constructor() {
          super( ...arguments ),
            ( this.handleRetry = ( e ) => {
              const {
                onAuthorise: t
              } = this.props;
              e.preventDefault(), e.stopPropagation(), t();
            } ),
            ( this.renderMessage = () => {
              const {
                onAuthorise: e,
                url: t
              } = this.props,
                n = o.a.createElement( se, null, t );
              return e ?
                o.a.createElement(
                  o.a.Fragment,
                  null,
                  n,
                  " - ",
                  o.a.createElement(
                    ne.a, {
                      spacing: "none",
                      appearance: "subtle-link",
                      onClick: this.handleRetry,
                      component: ae,
                      testId: "button-connect-other-account",
                    },
                    o.a.createElement(
                      g.b,
                      Object.assign( {}, v.a.invalid_permissions ),
                      ( e ) => o.a.createElement( o.a.Fragment, null, e, ", " )
                    ),
                    o.a.createElement(
                      g.b,
                      Object.assign( {}, v.a.try_another_account ),
                      ( e ) => o.a.createElement( ce, null, e )
                    )
                  )
                ) :
                n;
            } );
        }
        render() {
          const {
            url: e,
            icon: t,
            onClick: n,
            isSelected: i,
            testId: a = "inline-card-forbidden-view",
          } = this.props;
          return o.a.createElement(
            U.a, {
              testId: a,
              link: e,
              onClick: n,
              isSelected: i
            },
            o.a.createElement( G.a, {
              icon: t || ue,
              title: this.renderMessage(),
              titleColor: b.N500,
            } )
          );
        }
      }
      var be = n( "1whV" ),
        pe = n.n( be );
      class me extends o.a.Component {
        constructor() {
          super( ...arguments ),
            ( this.handleRetry = ( e ) => {
              const {
                onRetry: t
              } = this.props;
              t && ( e.preventDefault(), e.stopPropagation(), t() );
            } ),
            ( this.renderMessage = () => {
              const {
                onRetry: e,
                url: t,
                message: n
              } = this.props,
                i = o.a.createElement( se, null, t ),
                a = o.a.createElement( re, null, n );
              return e ?
                o.a.createElement(
                  o.a.Fragment,
                  null,
                  i,
                  " - ",
                  a,
                  ", ",
                  o.a.createElement(
                    ne.a, {
                      spacing: "none",
                      appearance: "subtle-link",
                      component: ae,
                      onClick: this.handleRetry,
                    },
                    o.a.createElement(
                      g.b,
                      Object.assign( {}, v.a.try_again ),
                      ( e ) => o.a.createElement( ce, null, e )
                    )
                  )
                ) :
                o.a.createElement( o.a.Fragment, null, i, " - ", a );
            } );
        }
        render() {
          const {
            url: e,
            onClick: t,
            isSelected: n,
            testId: i = "inline-card-errored-view",
            icon: a,
          } = this.props;
          return o.a.createElement(
            U.a, {
              testId: i,
              link: e,
              onClick: t,
              isSelected: n
            },
            o.a.createElement( G.a, {
              icon: a ||
                o.a.createElement(
                  ie.a,
                  null,
                  o.a.createElement( pe.a, {
                    label: "error",
                    size: "small",
                    primaryColor: b.R300,
                  } )
                ),
              title: this.renderMessage(),
            } )
          );
        }
      }
      var he = n( "+EW9" ),
        ge = n( "WVY3" );
      const ve = ( {
        url: e,
        cardState: t,
        handleAuthorize: n,
        handleFrameClick: i,
        isSelected: a,
        onResolve: r,
        testId: c,
      } ) => {
        const {
          status: s,
          details: l
        } = t,
        d = ( l && l.data ) || Object( K.a )(),
          u = c ? `${c}-${s}-view` : void 0;
        switch ( s ) {
          case "pending":
          case "resolving":
            return o.a.createElement( ee, {
              url: e,
              isSelected: a,
              onClick: i,
              testId: u,
            } );
          case "resolved":
            const t = Object( he.a )( d );
            return (
              r && r( {
                url: e,
                title: t.title
              } ),
              o.a.createElement(
                te.a,
                Object.assign( {}, t, {
                  link: e,
                  isSelected: a,
                  onClick: i,
                  testId: u,
                } )
              )
            );
          case "unauthorized":
            const c = Object( ge.b )( d );
            return o.a.createElement( de, {
              icon: c && c.icon,
              url: e,
              isSelected: a,
              onClick: i,
              onAuthorise: n,
              testId: u,
            } );
          case "forbidden":
            const s = Object( ge.b )( d );
            return o.a.createElement( fe, {
              url: e,
              icon: s && s.icon,
              isSelected: a,
              onClick: i,
              onAuthorise: n,
              testId: u,
            } );
          case "not_found":
            const l = Object( ge.b )( d );
            return o.a.createElement( me, {
              url: e,
              icon: l && l.icon,
              isSelected: a,
              message: "Can't find link",
              onClick: i,
              testId: u || "inline-card-not-found-view",
            } );
          case "fallback":
          case "errored":
            return o.a.createElement( W.a, {
              link: e,
              isSelected: a,
              onClick: i,
              testId: u || "inline-card-errored-view",
            } );
        }
      };
      var Oe = n( "hegZ" ),
        je = n.n( Oe ),
        ke = n( "Ag3T" );
      const we = q.css `
  ${ke.b}
  ${function ({ minWidth: e }) {
    return e ? `
      min - width: $ {
        e
      }
      px;
      ` : "";
  }}
  ${function ({ maxWidth: e }) {
    return e ? `
      max - width: $ {
        e
      }
      px;
      margin: 0 auto;
      ` : "margin: 0 auto;";
  }}
  ${function ({ isInteractive: e, isFrameVisible: t }) {
    return `
      $ {
        t ? ye : ""
      }
      $ {
        e
          ?
          `\n  &:hover {\n    ${ye}\n  }\n  &:active {\n    background-color: ${b.B50};\n  }\n` :
          ""
      }
      `;
  }}
  ${function ({ isVisible: e }) {
    return e ? ye : "";
  }}
  display: inline-flex;
  flex-direction: column;
  box-sizing: border-box;
  font-family: ${Object(p.e)()};
  width: 100%;
  user-select: none;
  line-height: initial;
  transition: background 0.3s;
  position: relative;
  height: 100%;
  ${({ inheritDimensions: e }) =>
    e ? "\n      height: 100%;\n    " : "height: " + Object(h.b)(54)}
  ${function ({ isSelected: e }) {
    return e
      ? `\
      n $ {
        ye
      }\
      n & ::after {
        \
        n cursor: pointer;\
        n box - shadow: 0 0 0 3 px $ {
          b.B100
        };\
        n content: '';\
        n outline: none;\
        n position: absolute;\
        n height: 100 % ;\
        n width: 100 % ;\
        n left: 0;\
        n $ {
          ke.b
        }\
        n
      }\
      n `
      : "";
  }}

  &:after {
    content: '';
    background: transparent;
    transition: background 0.3s, box-shadow 0.3s;
    position: absolute;
    width: calc(100% + ${Object(h.b)(2)});
    height: calc(100% + ${Object(h.b)(1)});
    left: -${Object(h.b)(1)};
    ${ke.b}
  }
`,
        ye = `\n  background-color: ${b.N30};\n\n  &:after {\n    background: ${b.N30} !important;\n  }\n  .embed-header {\n    opacity: 1;\n  }`;
      const xe = q.default.div `
  ${we} &:hover {
    text-decoration: none;
  }
`,
        Ee = q.default.div `
  ${we};
  margin-top: 10px;
`,
        Ce = q.default.div `
  height: 32px;
  position: absolute;
  z-index: 1;
  width: 100%;
  display: flex;
  align-items: center;
  color: ${b.N300};
  opacity: 0;
  transition: 300ms opacity cubic-bezier(0.15, 1, 0.3, 1);
`,
        Se = q.default.div `
  ${ke.b}
  ${Object(ke.f)(16)}
  ${({ isPlaceholder: e }) =>
    e ? `\
      n background - color: $ {
        b.N30
      };\
      n ` : ""} margin-right: 4px;
`,
        Ie = q.default.div `
  ${({ isPlaceholder: e }) =>
    e
      ? `\
      n $ {
        ke.b
      }\
      n width: 125 px;\
      n height: 12 px;\
      n background - color: $ {
        b.N30
      };\
      n `
      : ""} color: ${b.N300};
  font-size: 12px;
  line-height: 16px;
  ${Object(ke.d)("none")};
`,
        _e = q.default.div `
  position: relative;

  ${ke.b}
  ${""}
  background-color: white;
  position: absolute;
  z-index: 1;
  width: 100%;
  top: ${Object(h.b)(4)};
  overflow: hidden;
  height: calc(100% - ${Object(h.b)(4)});
  transition: box-shadow 0.3s;

  > .calc-height > div > div {
    left: unset !important;
    width: unset !important;
    height: unset !important;
    position: initial !important;
    padding-bottom: unset !important;
  }
  > .embed-preview > div {
    margin: 0 auto;
  }

  ${({ isInteractive: e }) =>
    e
      ? "\n          .media-card-frame:hover & {\n            box-shadow: 0 4px 8px -2px rgba(23, 43, 77, 0.32),\n              0 0 1px rgba(23, 43, 77, 0.25);\n          }\n        "
      : ""};
`,
        $e = q.default.img `
  ${({ size: e }) => Object(ke.f)(e)}
  ${ke.b}

  /* hide the alt text when the image cannot be found */
  overflow: hidden;
`,
        Ae =
        ( q.default.div `
  display: flex;
  flex-direction: row;
  box-sizing: border-box;
  padding: 8px 12px 12px 12px;
`,
          q.default.div `
  color: ${b.N900};
  font-size: 16px;
  font-weight: 500;
  line-height: ${1.25};
  max-height: ${80}px;
  overflow: hidden;
`,
          q.default.div `
  margin-top: 4px;
  color: ${b.N300};
  font-size: 12px;
  font-weight: normal;
  line-height: ${16 / 12};
  ${Object(ke.d)("100%")};
`,
          q.default.div `
  margin-top: 7px;
  color: ${b.N800};
  font-size: 12px;
  font-weight: normal;
  line-height: ${1.5};
  max-height: ${54}px;
  overflow: hidden;
`,
          q.default.div `
  margin-top: 4px;
`,
          q.default.div `
  ${ke.b}
  ${Object(ke.f)(48)}
  float: right;
  margin: 4px 0 12px 12px;
  background-color: ${b.N30};
  background-image: url(${({ src: e }) => e});
  background-size: cover;
`,
          q.default.div `
  margin-top: 8px;
`,
          q.default.div `
  margin-top: 8px;
  text-align: right;

  > * {
    margin-top: 4px;
  }

  > * + * {
    margin-left: 4px;
  }
`,
          q.default.div `
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  overflow: hidden;
  pointer-events: none;
  /* z-index has to be 1 higher than the number of avatars in the avatar stack */
  z-index: ${7};
`,
          ( {
            isPlaceholder: e = !1,
            children: t,
            onClick: n,
            icon: i,
            text: a,
            isSelected: r,
            isFrameVisible: c,
            isVisible: s,
            href: l,
            minWidth: d,
            maxWidth: u,
            testId: f,
            inheritDimensions: b,
          } ) => {
            const p = () => !e && ( Boolean( l ) || Boolean( n ) ),
              m = ( e ) => Object( I.a )( e, n ),
              h = () =>
              o.a.createElement(
                Ce, {
                  className: "embed-header"
                },
                o.a.createElement( Se, {
                  isPlaceholder: e
                }, !e && i ),
                o.a.createElement(
                  Ie, {
                    isPlaceholder: e
                  },
                  !e && o.a.createElement( "a", {
                    href: l,
                    onClick: m
                  }, a )
                )
              ),
              g = () => o.a.createElement( _e, {
                isInteractive: p()
              }, t );
            return !e && l ?
              o.a.createElement(
                xe, {
                  className: "media-card-frame",
                  isInteractive: p(),
                  isSelected: r,
                  isFrameVisible: c,
                  minWidth: d,
                  maxWidth: u,
                  isVisible: s,
                  "data-testid": f,
                  inheritDimensions: b,
                },
                h(),
                g()
              ) :
              o.a.createElement(
                Ee, {
                  className: "media-card-frame",
                  isInteractive: p(),
                  isSelected: r,
                  minWidth: d,
                  maxWidth: u,
                  isVisible: s,
                  "data-testid": f,
                },
                h(),
                g()
              );
          } );
      var ze = n( "J1GM" ),
        Re = n.n( ze );
      const Pe = ( {
          alt: e = "",
          src: t,
          size: n = 16,
          title: i,
          default: a,
        } ) =>
        t ?
        o.a.createElement( Re.a, {
          src: t,
          loading: a,
          loaded: o.a.createElement( $e, {
            className: "smart-link-icon",
            src: t,
            alt: e,
            size: n,
            title: i,
          } ),
          errored: a,
        } ) :
        a || null,
        Fe = ( {
          url: e,
          testId: t
        } ) =>
        e ?
        Object( d.f )( "iframe", {
          src: e,
          "data-testid": t + "-frame",
          css: {
            border: 0,
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            position: "relative",
            overflow: "hidden",
            borderRadius: "3px",
          },
          allowFullScreen: !0,
          scrolling: "yes",
          allow: "autoplay; encrypted-media",
        } ) :
        null,
        De = ( {
          link: e,
          context: t,
          onClick: n,
          isSelected: i,
          isFrameVisible: o,
          preview: a,
          title: r,
          testId: c = "embed-card-resolved-view",
          inheritDimensions: s,
        } ) => {
          const l = t && t.icon && "string" == typeof t.icon ? t.icon : void 0,
            u = r || ( t && t.text );
          return Object( d.f )(
            Ae, {
              isSelected: i,
              isFrameVisible: o,
              href: e,
              testId: c,
              icon: Object( d.f )( Pe, {
                src: l,
                default: Object( d.f )( je.a, {
                  label: "icon",
                  size: "small"
                } ),
              } ),
              text: u,
              onClick: n,
              inheritDimensions: s,
            },
            Object( d.f )( Fe, {
              url: a,
              testId: c
            } )
          );
        },
        Ve = ( {
          image: e,
          title: t,
          description: n,
          button: i,
          context: o,
          onClick: a,
          testId: r,
        } ) =>
        Object( d.f )(
          "div", {
            css: {
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              paddingTop: Object( h.b )( 4.5 ),
              paddingBottom: Object( h.b )( 6 ),
            },
            "data-testid": r + "-unresolved-container",
          },
          Object( d.f )( "img", {
            src: e,
            css: {
              height: Object( h.b )( 14 ),
              marginBottom: Object( h.b )( 4 )
            },
          } ),
          Object( d.f )(
            "span", {
              css: {
                fontSize: Object( h.b )( 2.5 ),
                marginBottom: Object( h.b )( 1.5 ),
                width: Object( h.b )( 50 ),
                textAlign: "center",
              },
            },
            Object( d.f )(
              g.b,
              Object.assign( {}, v.a[ t ], {
                values: {
                  context: o
                }
              } )
            )
          ),
          Object( d.f )(
            "span", {
              css: {
                fontSize: Object( p.f )(),
                marginBottom: Object( h.b )( 2.5 ),
                textAlign: "center",
                width: Object( h.b )( 50 ),
                lineHeight: Object( h.b )( 3 ),
              },
            },
            Object( d.f )(
              g.b,
              Object.assign( {}, v.a[ n ], {
                values: {
                  context: o
                }
              } )
            )
          ),
          i &&
          Object( d.f )(
            ne.a, {
              testId: "button-" + ( i.testId || r ),
              appearance: i.appearance,
              onClick: a,
            },
            Object( d.f )( g.b, Object.assign( {}, v.a[ i.text ] ) )
          )
        ),
        Ne = ( {
          link: e,
          context: t,
          isSelected: n,
          testId: i = "embed-card-unauthorized-view",
          onAuthorise: a,
          inheritDimensions: r,
          onClick: c,
        } ) => {
          const s =
            t &&
            t.icon &&
            o.a.createElement( Pe, {
              src: "string" == typeof t.icon ? t.icon : void 0,
            } );
          return o.a.createElement(
            Ae, {
              href: e,
              icon: s,
              text: t && t.text,
              isVisible: !0,
              isSelected: n,
              inheritDimensions: r,
              onClick: c,
              testId: i,
            },
            o.a.createElement( Ve, {
              image: "https://smart-links-cdn.us-east-1.prod.public.atl-paas.net/celebration.svg",
              title: "connect_link_account_card_name",
              description: "connect_link_account_card_description",
              context: t && t.text,
              button: {
                appearance: "primary",
                text: "connect_link_account_card",
                testId: "connect-account",
              },
              onClick: a,
              testId: i,
            } )
          );
        },
        Be = ( {
          link: e,
          context: t,
          isSelected: n,
          testId: i = "embed-card-forbidden-view",
          onAuthorise: a,
          inheritDimensions: r,
          onClick: c,
        } ) => {
          const s =
            t &&
            t.icon &&
            o.a.createElement( Pe, {
              src: "string" == typeof t.icon ? t.icon : void 0,
            } );
          return o.a.createElement(
            Ae, {
              href: e,
              icon: s,
              text: t && t.text,
              isVisible: !0,
              isSelected: n,
              inheritDimensions: r,
              onClick: c,
              testId: i,
            },
            o.a.createElement( Ve, {
              image: "https://smart-links-cdn.us-east-1.prod.public.atl-paas.net/lock.svg",
              title: "invalid_permissions",
              description: "invalid_permissions_description",
              context: t && t.text,
              button: {
                appearance: "default",
                text: "try_another_account",
                testId: "connect-other-account",
              },
              onClick: a,
              testId: i,
            } )
          );
        },
        Le = ( {
          link: e,
          context: t,
          isSelected: n,
          inheritDimensions: i,
          testId: a = "embed-card-not-found-view",
          onClick: r,
        } ) => {
          const c =
            t &&
            t.icon &&
            o.a.createElement( Pe, {
              src: "string" == typeof t.icon ? t.icon : void 0,
            } );
          return o.a.createElement(
            Ae, {
              href: e,
              icon: c,
              text: t && t.text,
              isVisible: !0,
              isSelected: n,
              inheritDimensions: i,
              onClick: r,
              testId: a,
            },
            o.a.createElement( Ve, {
              image: "https://smart-links-cdn.us-east-1.prod.public.atl-paas.net/not_found.svg",
              title: "not_found_title",
              description: "not_found_description",
              context: t && t.text,
              testId: a,
            } )
          );
        },
        Me = ( {
          onRetry: e,
          isSelected: t = !1,
          testId: n = "embed-card-errored-view",
          inheritDimensions: i,
        } ) =>
        Object( d.f )(
          m.a, {
            inheritDimensions: i,
            compact: !0,
            isSelected: t,
            testId: n
          },
          Object( d.f )( pe.a, {
            size: "small",
            primaryColor: b.R300,
            label: "error-icon",
          } ),
          Object( d.f )(
            "span", {
              css: {
                fontSize: Object( p.f )() + "px",
                marginLeft: Object( h.b )( 0.5 ),
                marginRight: Object( h.b )( 0.5 ),
                display: "-webkit-box",
                overflow: "hidden",
                textOverflow: "ellipsis",
                WebkitLineClamp: 1,
                WebkitBoxOrient: "vertical",
                maxHeight: Object( h.b )( 3 ),
              },
            },
            Object( d.f )( g.b, Object.assign( {}, v.a.could_not_load_link ) )
          ),
          Object( d.f )(
            ne.a, {
              testId: "err-view-retry",
              appearance: "link",
              spacing: "none",
              onClick: e,
            },
            Object( d.f )( g.b, Object.assign( {}, v.a.try_again ) )
          )
        );
      var We = n( "YM1I" ),
        He = n( "cc+5" );
      const Te = ( e, t ) => {
          const n = Object( He.a )( e, t );
          if ( n && n.src ) return n.src;
        },
        Je = ( e, t ) => ( {
          link: Object( We.a )( e ) || "",
          title: Object( We.c )( e ),
          context: Object( ge.b )( e ),
          preview: Te( e, t ),
        } ),
        Ke = ( {
          url: e,
          cardState: {
            status: t,
            details: n
          },
          handleAuthorize: i,
          handleErrorRetry: a,
          handleFrameClick: r,
          handleAnalytics: c,
          handleInvoke: l,
          showActions: d,
          isSelected: u,
          isFrameVisible: f,
          platform: b,
          onResolve: p,
          testId: m,
          inheritDimensions: h,
        } ) => {
          const g = ( n && n.data ) || Object( K.a )();
          switch ( t ) {
            case "pending":
            case "resolving":
              return o.a.createElement( O, {
                testId: "embed-card-resolving-view",
                inheritDimensions: h,
                isSelected: u,
              } );
            case "resolved":
              const t = Je( g, b );
              if ( ( p && p( {
                  title: t.title,
                  url: e
                } ), t.preview ) )
                return o.a.createElement(
                  De,
                  Object.assign( {}, t, {
                    isSelected: u,
                    isFrameVisible: f,
                    inheritDimensions: h,
                    onClick: r,
                  } )
                ); {
                if ( "mobile" === b ) {
                  const e = Object( he.a )( g );
                  return o.a.createElement(
                    te.a,
                    Object.assign( {}, e, {
                      isSelected: u,
                      testId: m,
                      onClick: r,
                    } )
                  );
                }
                const e = Object( J.a )( g, {
                  handleAnalytics: c,
                  handleInvoke: l,
                  definitionId: Object( s.c )( n ),
                } );
                return o.a.createElement(
                  j.a,
                  Object.assign( {}, e, {
                    isSelected: u,
                    testId: m,
                    showActions: d,
                    onClick: r,
                  } )
                );
              }
              case "unauthorized":
                const v = Je( g, b );
                return o.a.createElement(
                  Ne,
                  Object.assign( {}, v, {
                    isSelected: u,
                    onAuthorise: i,
                    inheritDimensions: h,
                    onClick: r,
                  } )
                );
              case "forbidden":
                const k = Je( g, b );
                return o.a.createElement(
                  Be,
                  Object.assign( {}, k, {
                    isSelected: u,
                    onAuthorise: i,
                    inheritDimensions: h,
                    onClick: r,
                  } )
                );
              case "not_found":
                const w = Je( g, b );
                return o.a.createElement(
                  Le,
                  Object.assign( {}, w, {
                    isSelected: u,
                    inheritDimensions: h,
                    onClick: r,
                  } )
                );
              case "fallback":
              case "errored":
                return o.a.createElement( Me, {
                  onRetry: a,
                  inheritDimensions: h,
                  isSelected: u,
                } );
          }
        };

      function Xe( {
        id: e,
        url: t,
        isSelected: n,
        isFrameVisible: a,
        platform: d,
        onClick: u,
        appearance: f,
        dispatchAnalytics: b,
        onResolve: p,
        testId: m,
        showActions: h,
        inheritDimensions: g,
      } ) {
        const {
          state: v,
          actions: O,
          config: j,
          analytics: k
        } = Object( l.c )(
            e,
            t,
            b
          ),
          w = Object( s.c )( v.details ),
          y = Object( s.d )( v.details ),
          x = Object( s.e )( v.details ),
          E = Object( s.f )( v.details ),
          C = Object( i.useCallback )(
            ( e ) => {
              const n = Object( s.b )( t, v.details );
              Object( r.c )( e ) ?
                window.open( n, "_blank" ) :
                window.open( n, "_self" );
            },
            [ v.details, t ]
          ),
          S = Object( i.useCallback )(
            ( e ) => {
              "resolved" === v.status && k.ui.cardClickedEvent( f, w, y ),
                u ? u( e ) : C( e );
            },
            [ v.status, k.ui, f, w, y, u, C ]
          ),
          I = Object( i.useCallback )( () => O.authorize( f ), [ O, f ] ),
          _ = Object( i.useCallback )( () => {
            O.reload();
          }, [ O ] ),
          $ = Object( i.useCallback )( ( e ) => O.invoke( e, f ), [ O, f ] );
        switch (
          ( Object( i.useEffect )( () => {
              c.e( e, v.status ),
                "pending" !== v.status &&
                ( c.c( e, v.status ),
                  k.operational.instrument( e, v.status, w, y, x, v.error ) );
            }, [ e, f, v.status, v.error, w, y, x, k.operational ] ),
            Object( i.useEffect )( () => {
              Object( s.i )( v.status ) && k.ui.renderSuccessEvent( f, w, y );
            }, [ f, v.details, v.status, t, w, y, k.ui ] ),
            f )
        ) {
          case "inline":
            return o.a.createElement( ve, {
              url: t,
              cardState: v,
              handleAuthorize: ( E.length && I ) || void 0,
              handleFrameClick: S,
              isSelected: n,
              onResolve: p,
              testId: m,
            } );
          case "block":
            return o.a.createElement( X, {
              url: t,
              authFlow: j && j.authFlow,
              cardState: v,
              handleAuthorize: ( E.length && I ) || void 0,
              handleErrorRetry: _,
              handleInvoke: $,
              handleFrameClick: S,
              handlePreviewAnalytics: b,
              isSelected: n,
              onResolve: p,
              testId: m,
              showActions: h,
            } );
          case "embed":
            return o.a.createElement( Ke, {
              url: t,
              cardState: v,
              handleAuthorize: ( E.length && I ) || void 0,
              handleErrorRetry: _,
              handleFrameClick: S,
              handleInvoke: $,
              handleAnalytics: b,
              isSelected: n,
              isFrameVisible: a,
              platform: d,
              onResolve: p,
              testId: m,
              inheritDimensions: g,
              showActions: h,
            } );
        }
      }
      const Ue = ( {
          isSelected: e,
          url: t
        } ) =>
        o.a.createElement( W.a, {
          key: "lazy-render-key",
          testId: "lazy-render-placeholder",
          isSelected: e,
          link: t,
        } );

      function Ye( e ) {
        const {
          appearance: t,
          container: n,
          showActions: i
        } = e,
        r = Math.ceil( window.innerHeight / 4 );
        return o.a.createElement( a.a, {
          offset: r,
          component: "inline" === t ? "span" : "div",
          className: "loader-wrapper",
          placeholder: o.a.createElement( Ue, Object.assign( {}, e ) ),
          scrollContainer: n,
          content: o.a.createElement(
            Xe,
            Object.assign( {}, e, {
              showActions: i
            } )
          ),
        } );
      }

      function Ge( e ) {
        const [ t, n ] = Object( i.useState )( !1 ), {
            showActions: a,
            appearance: r,
            url: c
          } = e,
          s = Object( l.b )( c ),
          d = "inline" === r ? "span" : "div",
          u = d,
          f = Object( i.useCallback )(
            ( e, t ) => {
              e.some( ( e ) => e.isIntersecting ) ? ( n( !0 ), t.disconnect() ) : s();
            },
            [ s ]
          ),
          b = Object( i.useCallback )(
            ( e ) => {
              if ( !e ) return;
              const t = new IntersectionObserver( f, {
                rootMargin: "360px 0px 360px 0px",
              } );
              return t.observe( e ), () => t.disconnect();
            },
            [ f ]
          ),
          p = t ?
          o.a.createElement( Xe, Object.assign( {}, e, {
            showActions: a
          } ) ) :
          o.a.createElement(
            u, {
              ref: b
            },
            o.a.createElement( Ue, Object.assign( {}, e ) )
          );
        return o.a.createElement( d, {
          className: "loader-wrapper"
        }, p );
      }

      function qe( e ) {
        return "undefined" != typeof IntersectionObserver ?
          o.a.createElement( Ge, Object.assign( {}, e ) ) :
          o.a.createElement( Ye, Object.assign( {}, e ) );
      }
      n.d( t, "LazyCardWithUrlContent", function () {
        return qe;
      } );
    },
    tejg: function ( e, t, n ) {
      "use strict";
      var i = n( "ERkP" ),
        o = n( "KBhP" ),
        a = n.n( o );

      function r( e ) {
        if ( e ) {
          var t = e.getBoundingClientRect();
          return {
            left: window.pageXOffset + t.left,
            right: window.pageXOffset + t.left + t.width,
            top: window.pageYOffset + t.top,
            bottom: window.pageYOffset + t.top + t.height,
          };
        }
      }

      function c( e, t, n ) {
        return (
          t in e ?
          Object.defineProperty( e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0,
          } ) :
          ( e[ t ] = n ),
          e
        );
      }
      var s = function ( e ) {
        if ( e ) {
          if ( e === window )
            return {
              top: window.pageYOffset,
              left: window.pageXOffset,
              bottom: window.pageYOffset + window.innerHeight,
              right: window.pageXOffset + window.innerWidth,
            };
          var t = r( e );
          return t ?
            ( function ( e ) {
              for ( var t = 1; t < arguments.length; t++ ) {
                var n = null != arguments[ t ] ? arguments[ t ] : {},
                  i = Object.keys( n );
                "function" == typeof Object.getOwnPropertySymbols &&
                  ( i = i.concat(
                    Object.getOwnPropertySymbols( n ).filter( function ( e ) {
                      return Object.getOwnPropertyDescriptor( n, e ).enumerable;
                    } )
                  ) ),
                  i.forEach( function ( t ) {
                    c( e, t, n[ t ] );
                  } );
              }
              return e;
            } )( {}, t, {
              bottom: t.top + e.offsetHeight,
              right: t.left + e.offsetWidth,
            } ) :
            void 0;
        }
      };

      function l( e ) {
        return ( l =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ?
          function ( e ) {
            return typeof e;
          } :
          function ( e ) {
            return e &&
              "function" == typeof Symbol &&
              e.constructor === Symbol &&
              e !== Symbol.prototype ?
              "symbol" :
              typeof e;
          } )( e );
      }
      var d = function ( e, t, n ) {
          var i = ( n && n.top ) || 0,
            o = ( n && n.right ) || 0,
            a = ( n && n.bottom ) || 0,
            r = ( n && n.left ) || 0;
          return (
            e.bottom + a >= t.top &&
            e.top - i <= t.bottom &&
            e.right + o >= t.left &&
            e.left - r <= t.right
          );
        },
        u = ( function () {
          var e = !1;
          try {
            var t = Object.defineProperty( {}, "passive", {
              get: function () {
                e = !0;
              },
            } );
            window.addEventListener( "test", null, t ),
              window.removeEventListener( "test", null, t );
          } catch ( n ) {}
          return e;
        } )() ? {
          passive: !0
        } :
        void 0;

      function f( e ) {
        return ( f =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ?
          function ( e ) {
            return typeof e;
          } :
          function ( e ) {
            return e &&
              "function" == typeof Symbol &&
              e.constructor === Symbol &&
              e !== Symbol.prototype ?
              "symbol" :
              typeof e;
          } )( e );
      }

      function b( e, t ) {
        if ( !( e instanceof t ) )
          throw new TypeError( "Cannot call a class as a function" );
      }

      function p( e, t ) {
        for ( var n = 0; n < t.length; n++ ) {
          var i = t[ n ];
          ( i.enumerable = i.enumerable || !1 ),
          ( i.configurable = !0 ),
          "value" in i && ( i.writable = !0 ),
            Object.defineProperty( e, i.key, i );
        }
      }

      function m( e, t ) {
        return !t || ( "object" !== f( t ) && "function" != typeof t ) ? g( e ) : t;
      }

      function h( e ) {
        return ( h = Object.setPrototypeOf ?
          Object.getPrototypeOf :
          function ( e ) {
            return e.__proto__ || Object.getPrototypeOf( e );
          } )( e );
      }

      function g( e ) {
        if ( void 0 === e )
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return e;
      }

      function v( e, t ) {
        return ( v =
          Object.setPrototypeOf ||
          function ( e, t ) {
            return ( e.__proto__ = t ), e;
          } )( e, t );
      }

      function O( e, t, n ) {
        return (
          t in e ?
          Object.defineProperty( e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0,
          } ) :
          ( e[ t ] = n ),
          e
        );
      }
      n.d( t, "a", function () {
        return j;
      } );
      var j = ( function ( e ) {
        function t() {
          var e, n;
          b( this, t );
          for ( var i = arguments.length, o = new Array( i ), a = 0; a < i; a++ )
            o[ a ] = arguments[ a ];
          return (
            O(
              g( ( n = m( this, ( e = h( t ) ).call.apply( e, [ this ].concat( o ) ) ) ) ),
              "raf",
              void 0
            ),
            O( g( n ), "element", void 0 ),
            O( g( n ), "container", void 0 ),
            O( g( n ), "state", {
              hasBeenScrolledIntoView: !1
            } ),
            O( g( n ), "update", function () {
              cancelAnimationFrame( n.raf ),
                ( n.raf = requestAnimationFrame( function () {
                  var e = n.getElementBounds(),
                    t = n.getViewportBounds(),
                    i = n.getOffsetBounds();
                  e &&
                    t &&
                    d( e, t, i ) &&
                    ( n.stopListening( n.container ),
                      n.setState( {
                        hasBeenScrolledIntoView: !0
                      }, function () {
                        var e = n.props.onRender;
                        e && e();
                      } ) );
                } ) );
            } ),
            O( g( n ), "handleMount", function ( e ) {
              var t = n.props.scrollContainer;
              ( n.element = e ), ( n.container = n.getContainer( t ) );
            } ),
            n
          );
        }
        var n, o, c;
        return (
          ( function ( e, t ) {
            if ( "function" != typeof t && null !== t )
              throw new TypeError(
                "Super expression must either be null or a function"
              );
            ( e.prototype = Object.create( t && t.prototype, {
              constructor: {
                value: e,
                writable: !0,
                configurable: !0
              },
            } ) ),
            t && v( e, t );
          } )( t, e ),
          ( n = t ),
          ( o = [ {
              key: "getContainer",
              value: function ( e ) {
                if ( e ) return e;
                if ( this.element ) {
                  var t = a()( this.element );
                  return t === document.scrollingElement ||
                    t === document.documentElement ||
                    ( "BackCompat" !== document.compatMode && t == document.body ) ?
                    window :
                    t;
                }
              },
            },
            {
              key: "getViewportBounds",
              value: function () {
                return s( this.container );
              },
            },
            {
              key: "getElementBounds",
              value: function () {
                return r( this.element );
              },
            },
            {
              key: "getOffsetBounds",
              value: function () {
                return ( function ( e ) {
                  var t, n, i, o;
                  if ( e )
                    return (
                      "object" === l( e ) ?
                      ( ( t = e.top || 0 ),
                        ( n = e.right || 0 ),
                        ( i = e.bottom || 0 ),
                        ( o = e.left || 0 ) ) :
                      ( ( t = e || 0 ),
                        ( n = e || 0 ),
                        ( i = e || 0 ),
                        ( o = e || 0 ) ), {
                        top: t,
                        right: n,
                        bottom: i,
                        left: o
                      }
                    );
                } )( this.props.offset );
              },
            },
            {
              key: "componentDidUpdate",
              value: function ( e, t ) {
                var n = this,
                  i = e.scrollContainer,
                  o = this.props.scrollContainer;
                i !== o &&
                  ( t.hasBeenScrolledIntoView || this.stopListening( i ),
                    ( this.container = this.getContainer( o ) ),
                    this.startListening( this.container ),
                    this.setState( {
                      hasBeenScrolledIntoView: !1
                    }, function () {
                      n.update();
                    } ) );
              },
            },
            {
              key: "startListening",
              value: function ( e ) {
                e && e.addEventListener( "scroll", this.update, u ),
                  window.addEventListener( "resize", this.update );
              },
            },
            {
              key: "stopListening",
              value: function ( e ) {
                e && e.removeEventListener( "scroll", this.update, u ),
                  window.removeEventListener( "resize", this.update );
              },
            },
            {
              key: "componentDidMount",
              value: function () {
                this.update(), this.startListening( this.container );
              },
            },
            {
              key: "componentWillUnmount",
              value: function () {
                this.stopListening( this.container );
              },
            },
            {
              key: "renderChildren",
              value: function () {
                var e = this.props,
                  t = e.placeholder,
                  n = e.content,
                  i = e.children,
                  o = this.state.hasBeenScrolledIntoView;
                return !o && t ? t : o && n ? n : i ? i( o ) : null;
              },
            },
            {
              key: "render",
              value: function () {
                var e = this.props,
                  t = e.className,
                  n = e.component;
                return i.createElement( n || "div", {
                  ref: this.handleMount,
                  className: t,
                  children: this.renderChildren(),
                } );
              },
            },
          ] ) && p( n.prototype, o ),
          c && p( n, c ),
          t
        );
      } )( i.Component );
    },
  },
] );
//# sourceMappingURL=@atlaskit-internal-smartcard-urlcardcontent~4134d62c.UUCqyPSJcw.js.map
