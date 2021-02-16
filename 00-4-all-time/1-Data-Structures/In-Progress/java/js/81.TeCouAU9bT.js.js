( window.webpackJsonp = window.webpackJsonp || [] ).push( [
  [ 81 ], {
    "/yy9": function ( e, t, n ) {
      "use strict";
      n.d( t, "c", ( function () {
        return r
      } ) ), n.d( t, "b", ( function () {
        return o
      } ) ), n.d( t, "a", ( function () {
        return a
      } ) );
      const r = 100,
        o = 350,
        a = 700
    },
    "0gjq": function ( e, t, n ) {
      "use strict";
      var r = this && this.__assign || function () {
        return ( r = Object.assign || function ( e ) {
          for ( var t, n = 1, r = arguments.length; n < r; n++ )
            for ( var o in t = arguments[ n ] ) Object.prototype.hasOwnProperty.call( t, o ) && ( e[ o ] = t[ o ] );
          return e
        } ).apply( this, arguments )
      };
      Object.defineProperty( t, "__esModule", {
        value: !0
      } ), t.bindAll = void 0;
      var o = n( "FzbR" );

      function a( e ) {
        if ( void 0 !== e ) return "boolean" == typeof e ? {
          capture: e
        } : e
      }
      t.bindAll = function ( e, t, n ) {
        var i = t.map( ( function ( t ) {
          var i = function ( e, t ) {
            return null == t ? e : r( r( {}, e ), {
              options: r( r( {}, a( t ) ), a( e.options ) )
            } )
          }( t, n );
          return o.bind( e, i )
        } ) );
        return function () {
          i.forEach( ( function ( e ) {
            return e()
          } ) )
        }
      }
    },
    "1jzs": function ( e, t, n ) {
      "use strict";
      n.d( t, "a", ( function () {
        return o
      } ) );
      var r = n( "ERkP" );
      const o = "undefined" == typeof window ? r.useEffect : r.useLayoutEffect
    },
    "2Lg3": function ( e, t ) {
      e.exports = function ( e ) {
        return null == e
      }
    },
    "4O0c": function ( e, t, n ) {
      "use strict";
      n.d( t, "a", ( function () {
        return o
      } ) );
      var r = n( "Iy7w" );
      const o = Object( r.a )( "div", {
        target: "e137tx6n0"
      } )( {
        name: "19mpqc3",
        styles: "min-height:72px;"
      } )
    },
    A46D: function ( e, t, n ) {
      "use strict";
      n.d( t, "b", ( function () {
        return r
      } ) ), n.d( t, "c", ( function () {
        return o
      } ) ), n.d( t, "a", ( function () {
        return a
      } ) );
      const r = "cubic-bezier(0.15,1,0.3,1)",
        o = "cubic-bezier(0.2,0,0,1)",
        a = "cubic-bezier(0.8,0,0,0.8)"
    },
    FzbR: function ( e, t, n ) {
      "use strict";
      Object.defineProperty( t, "__esModule", {
        value: !0
      } ), t.bind = void 0, t.bind = function ( e, t ) {
        var n = t.type,
          r = t.listener,
          o = t.options;
        return e.addEventListener( n, r, o ),
          function () {
            e.removeEventListener( n, r, o )
          }
      }
    },
    "J4/4": function ( e, t ) {
      e.exports = function ( e ) {
        if ( "function" != typeof e ) throw new TypeError( "Expected a function" );
        return function () {
          var t = arguments;
          switch ( t.length ) {
            case 0:
              return !e.call( this );
            case 1:
              return !e.call( this, t[ 0 ] );
            case 2:
              return !e.call( this, t[ 0 ], t[ 1 ] );
            case 3:
              return !e.call( this, t[ 0 ], t[ 1 ], t[ 2 ] )
          }
          return !e.apply( this, t )
        }
      }
    },
    O1Sc: function ( e, t, n ) {
      var r = n( "w2Tz" ),
        o = n( "y4bl" ),
        a = n( "xoyU" );
      e.exports = function ( e, t, n ) {
        for ( var i = -1, c = t.length, u = {}; ++i < c; ) {
          var l = t[ i ],
            s = r( e, l );
          n( s, l ) && o( u, a( l, e ), s )
        }
        return u
      }
    },
    Pu0A: function ( e, t ) {
      e.exports = function ( e, t, n, r ) {
        var o = n ? n.call( r, e, t ) : void 0;
        if ( void 0 !== o ) return !!o;
        if ( e === t ) return !0;
        if ( "object" != typeof e || !e || "object" != typeof t || !t ) return !1;
        var a = Object.keys( e ),
          i = Object.keys( t );
        if ( a.length !== i.length ) return !1;
        for ( var c = Object.prototype.hasOwnProperty.bind( t ), u = 0; u < a.length; u++ ) {
          var l = a[ u ];
          if ( !c( l ) ) return !1;
          var s = e[ l ],
            d = t[ l ];
          if ( !1 === ( o = n ? n.call( r, s, d, l ) : void 0 ) || void 0 === o && s !== d ) return !1
        }
        return !0
      }
    },
    Qn63: function ( e, t, n ) {
      "use strict";
      n.d( t, "a", ( function () {
        return c
      } ) );
      var r = n( "Iy7w" ),
        o = n( "ERkP" ),
        a = n.n( o );
      const i = Object( r.a )( "div", {
          target: "etji3bh0"
        } )( {
          name: "qvvnqo",
          styles: "width:1px;height:120px;"
        } ),
        c = () => a.a.createElement( i, null )
    },
    Sqlr: function ( e, t, n ) {
      "use strict";
      var r = n( "zjfJ" ),
        o = n( "ERkP" ),
        a = n.n( o ),
        i = ( n( "aWzz" ), n( "d8BE" ) ),
        c = n.n( i ),
        u = n( "L21V" ),
        l = n( "gQ5V" ),
        s = n( "w7pu" ),
        d = n( "H5qd" );
      const p = n.n( d ).a `query DocumentContentTitleQuery($contentId:ID!){content(id:$contentId){nodes{id title space{id name}}}}`;
      var f, h;
      n.d( t, "a", ( function () {
        return b
      } ) );
      const m = Object( u.f )( {
          notFound: {
            id: "document-title.not.found",
            defaultMessage: "Page Not Found",
            description: "title of the 404 page not found page"
          }
        } ),
        b = Object( u.g )( ( h = f = class extends o.Component {
          render() {
            const {
              intl: e,
              contentId: t,
              titlePrefix: n,
              siteTitleOnly: r,
              notFound: o
            } = this.props;
            return a.a.createElement( s.a.Consumer, null, ( {
              siteTitle: i
            } ) => a.a.createElement( l.b, {
              query: p,
              variables: {
                contentId: t
              },
              skip: !t
            }, ( {
              data: u,
              loading: l
            } ) => {
              if ( l ) return null;
              let s, d;
              var p, f;
              r && t || ( s = ( null != ( f = u ) && null != ( f = f.content ) && null != ( f = f.nodes ) && null != ( f = f[ 0 ] ) ? f.title : f ) || "", d = ( null != ( p = u ) && null != ( p = p.content ) && null != ( p = p.nodes ) && null != ( p = p[ 0 ] ) && null != ( p = p.space ) ? p.name : p ) || "" );
              const h = [ n || ( o ? e.formatMessage( m.notFound ) : "" ), s, d, i ].filter( e => e ).join( " - " );
              return a.a.createElement( c.a, {
                title: h
              } )
            } ) )
          }
        }, Object( r.a )( f, "defaultProps", {
          siteTitleOnly: !1,
          notFound: !1,
          titlePrefix: ""
        } ), h ) )
    },
    Wwuj: function ( e, t, n ) {
      "use strict";
      n.d( t, "a", ( function () {
        return o
      } ) );
      var r = n( "RfuI" );
      const o = Object( r.a )( {
        id: "mbjrR",
        name: "NotFound",
        loader: async () => ( await Promise.all( [ n.e( "atlaskit~66e23772" ), n.e( "afp~af75c846" ), n.e( "vendors~4134d62c" ), n.e( 91 ), n.e( "not-found~493df0b3" ) ] ).then( n.bind( null, "rGjI" ) ) ).NotFound
      } )
    },
    Xcdj: function ( e, t, n ) {
      "use strict";
      var r = n( "Czhu" ),
        o = n( "ERkP" ),
        a = n.n( o ),
        i = n( "l1C2" ),
        c = n( "bhMQ" ),
        u = n( "/yy9" ),
        l = n( "ZIFe" ),
        s = n( "pwfR" );
      n( "1jzs" );
      const d = Object( o.createContext )( () => ( {
          isReady: !0,
          delay: 0,
          ref: () => {}
        } ) ),
        p = () => {
          const e = function () {
            const e = Object( o.useRef )( "" );
            return e.current || ( e.current = "_" + ( Number( String( Math.random() ).slice( 2 ) ) + Date.now() + Math.round( performance.now() ) ).toString( 36 ) ), e.current
          }();
          return Object( o.useContext )( d )( e )
        };
      t.a = ( {
        children: e,
        animationTimingFunction: t,
        enteringAnimation: n,
        exitingAnimation: d,
        isPaused: f,
        onFinish: h,
        duration: m = u.a
      } ) => {
        const b = p(),
          {
            isExiting: g,
            onFinish: y,
            appear: v
          } = Object( s.b )(),
          O = Object( l.b )(),
          k = f || !b.isReady,
          j = g ? 0 : b.delay,
          w = g ? "exiting" : "entering",
          [ E, x ] = Object( o.useState )( v );
        return Object( o.useEffect )( () => {
          let e = !1;
          if ( !k ) {
            if ( v ) return x( !0 ), O( () => {
              "exiting" === w && y && y(), e || x( !1 ), h && h( w )
            }, g ? .5 * m : m + j ), () => {
              e = !0
            };
            h && h( w )
          }
        }, [ y, w, g, m, j, k, O ] ), a.a.createElement( i.b, null, ( {
          css: o
        } ) => e( {
          ref: b.ref,
          className: E ? o( Object( r.a )( {
            animationName: "" + Object( i.g )( g && d || n ),
            animationTimingFunction: t( w ),
            animationDelay: j + "ms",
            animationFillMode: g ? "forwards" : "backwards",
            animationDuration: ( g ? .5 * m : m ) + "ms",
            animationPlayState: k ? "paused" : "running"
          }, Object( c.b )() ) ) : ""
        }, w ) )
      }
    },
    YBtN: function ( e, t, n ) {
      "use strict";
      n( "aWzz" );
      var r = n( "ERkP" ),
        o = n.n( r ),
        a = n( "gQ5V" ),
        i = n( "X2PC" ),
        c = n( "FdGg" ),
        u = n( "r3UE" ),
        l = n( "Czhu" ),
        s = n( "KsTJ" ),
        d = n( "lZoD" ),
        p = n( "WWAs" ),
        f = n( "ak4O" );
      const h = {
          position: "relative",
          background: "#fff",
          paddingTop: "0",
          paddingRight: "40px",
          paddingBottom: "20px",
          paddingLeft: "40px",
          minHeight: "100vh",
          boxSizing: "border-box"
        },
        m = {
          position: "fixed",
          width: "100%",
          height: "100%",
          top: "0",
          display: "none",
          bottom: "0",
          left: "0",
          right: "0",
          zIndex: "10",
          background: "rgba(0,0,0,0.5)"
        },
        b = s.default.div `
  overflow: hidden;
`,
        g = s.default.div `
  position: relative;
`;
      class y extends r.Component {
        static convertGutters( e ) {
          return "none" === e.gutterLeft && ( e.paddingLeft = "0" ), "none" === e.gutterRight && ( e.paddingRight = "0" ), "0px" === e.gutterTop && ( e.paddingTop = "0" ), "0px" === e.gutterBottom && ( e.paddingBottom = "0" ), e
        }
        static getCustomScreenStyles( e ) {
          if ( !e || !e.content ) return {};
          const t = y.convertGutters( Object( l.a )( {}, e.content.screen ) );
          return delete t.layer, t
        }
        getScreenStyles() {
          const {
            lookAndFeel: e
          } = this.props, t = y.getCustomScreenStyles( e ), n = h, r = this.getLoadingStyles();
          return Object( l.a )( Object( l.a )( Object( l.a )( {}, n ), t ), r )
        }
        getLoadingStyles() {
          const {
            isLoading: e
          } = this.props;
          return e ? m : {}
        }
        adjustMinHeight( e, t ) {
          const n = Object( l.a )( {}, e );
          return "100vh" === n.minHeight && t > 0 && ( n.minHeight = `calc(${n.minHeight} - ${t}px)` ), n
        }
        renderContentScreen( e ) {
          const {
            lookAndFeel: t,
            children: n,
            isThemed: a,
            isLoading: i
          } = this.props;
          return e ? o.a.createElement( r.Fragment, null, o.a.createElement( f.a, {
            lookAndFeel: t
          } ), o.a.createElement( g, null, o.a.createElement( b, null ), "function" == typeof n ? n( {
            isThemed: a,
            isLoading: i
          } ) : n ) ) : o.a.createElement( r.Fragment, null, "function" == typeof n ? n( {
            isThemed: a,
            isLoading: i
          } ) : n )
        }
        render() {
          const {
            isContentView: e,
            isThemed: t
          } = this.props, n = t || e, r = n ? this.getScreenStyles() : this.getLoadingStyles();
          return o.a.createElement( d.c, {
            to: [ p.a ]
          }, e => {
            const t = e.getTotalHeight(),
              a = this.adjustMinHeight( r, t );
            return o.a.createElement( "div", {
              style: a
            }, this.renderContentScreen( n ) )
          } )
        }
      }
      y.defaultProps = {
        lookAndFeel: {
          content: {
            screen: h
          }
        }
      }, n.d( t, "a", ( function () {
        return v
      } ) );
      const v = ( {
        spaceKey: e,
        children: t,
        isContentView: n,
        errorAttribution: r = i.a.BACKBONE,
        isThemed: l = !0
      } ) => o.a.createElement( c.a, {
        attribution: r
      }, o.a.createElement( a.b, {
        query: u.a,
        variables: {
          spaceKey: e
        },
        context: {
          single: !0
        },
        skip: !l
      }, ( {
        data: e,
        loading: r
      } ) => {
        var a, i;
        const c = Boolean( null != ( i = e ) && null != ( i = i.space ) ? i.theme : i ),
          u = ( null != ( a = e ) && null != ( a = a.space ) ? a.lookAndFeel : a ) || {};
        return o.a.createElement( y, {
          isThemed: c,
          isLoading: r,
          lookAndFeel: u,
          isContentView: n
        }, t )
      } ) )
    },
    YtiW: function ( e, t, n ) {
      "use strict";
      n( "aWzz" );
      var r = n( "ERkP" ),
        o = n.n( r ),
        a = n( "gQ5V" ),
        i = n( "X2PC" ),
        c = n( "FdGg" ),
        u = n( "H5qd" );
      const l = n.n( u ).a `query ContentContainerQuery($spaceKey:String!){space(key:$spaceKey){id theme{name}lookAndFeel{content{screen{background backgroundColor backgroundImage backgroundPosition backgroundSize backgroundRepeat backgroundOrigin backgroundClip backgroundAttachment backgroundBlendMode layer{background backgroundColor backgroundImage backgroundPosition backgroundSize backgroundRepeat backgroundOrigin backgroundClip backgroundAttachment backgroundBlendMode width height}gutterTop gutterRight gutterBottom gutterLeft}container{background backgroundColor backgroundImage backgroundPosition backgroundSize backgroundRepeat backgroundOrigin backgroundClip backgroundAttachment backgroundBlendMode padding borderRadius}}}}}`;
      var s = n( "Czhu" );
      const d = {
          backgroundColor: "#fff"
        },
        p = {
          position: "fixed",
          width: "100%",
          height: "100%",
          top: "0",
          display: "none",
          bottom: "0",
          left: "0",
          right: "0",
          zIndex: "10",
          background: "rgba(0,0,0,0.5)"
        },
        f = e => {
          switch ( e ) {
            case "small":
            case "medium":
            case "large":
            case "default":
              return null;
            default:
              return e
          }
        },
        h = e => {
          switch ( e ) {
            case "small":
              return 5;
            case "medium":
              return 10;
            case "large":
              return 15;
            case "default":
              return null;
            case "none":
            default:
              return 0
          }
        };
      class m extends r.Component {
        static _getContainerStyles( e ) {
          if ( !e.content ) return d;
          const {
            screen: t,
            container: n
          } = e.content, r = Object( s.a )( Object( s.a )( {}, d ), n ), {
            gutterTop: o,
            gutterBottom: a
          } = t;
          o && ( r.marginTop = f( t.gutterTop ) ), a && ( r.marginBottom = f( t.gutterBottom ) );
          const i = h( t.gutterRight ),
            c = h( t.gutterLeft );
          return null !== i && ( r.marginRight = i + "%" ), null !== c && ( r.marginLeft = c + "%" ), r.width = 100 - i - c + "%", r.boxSizing = "border-box", r
        }
        static _getInlineCommentStyles( e ) {
          if ( !e.content ) return null;
          const {
            screen: t = {}
          } = e.content;
          return 0 === h( t.gutterRight ) ? o.a.createElement( "style", null, ".ic-sidebar.ic-is-spa-view-page { margin-right: 0 !important; }" ) : null
        }
        getLoadingStyles() {
          const {
            isLoading: e
          } = this.props;
          return e ? p : {}
        }
        render() {
          const {
            lookAndFeel: e,
            isThemed: t,
            isContentView: n
          } = this.props, r = t || n, a = r ? m._getContainerStyles( e ) : this.getLoadingStyles(), i = r ? m._getInlineCommentStyles( e ) : null;
          return o.a.createElement( "div", {
            className: this.props.className,
            style: a
          }, i, this.props.children )
        }
      }
      m.defaultProps = {
        isContentView: !1,
        lookAndFeel: {
          content: {
            screen: d
          }
        }
      }, n.d( t, "a", ( function () {
        return b
      } ) );
      const b = ( {
        isThemed: e,
        children: t,
        isContentView: n,
        spaceKey: r,
        errorAttribution: u = i.a.BACKBONE
      } ) => {
        let s;
        return s = void 0 !== e && !e, o.a.createElement( c.a, {
          attribution: u
        }, o.a.createElement( a.b, {
          query: l,
          variables: {
            spaceKey: r
          },
          skip: s
        }, ( {
          data: e,
          loading: r,
          error: a
        } ) => {
          var i, c;
          if ( a ) throw a;
          const u = Boolean( null != ( c = e ) && null != ( c = c.space ) ? c.theme : c ),
            l = ( null != ( i = e ) && null != ( i = i.space ) ? i.lookAndFeel : i ) || {};
          return o.a.createElement( m, {
            isThemed: u,
            lookAndFeel: l,
            isContentView: n,
            isLoading: r
          }, t )
        } ) )
      }
    },
    ZIFe: function ( e, t, n ) {
      "use strict";
      n.d( t, "a", ( function () {
        return a
      } ) ), n.d( t, "b", ( function () {
        return i
      } ) );
      var r = n( "ERkP" );
      const o = e => {
          switch ( e.cleanup ) {
            case "next-effect":
              return;
            case "unmount":
            default:
              return []
          }
        },
        a = ( e = {
          cleanup: "unmount"
        } ) => {
          const t = Object( r.useRef )( [] );
          return Object( r.useEffect )( () => () => {
            t.current.length && ( t.current.forEach( e => cancelAnimationFrame( e ) ), t.current = [] )
          }, o( e ) ), Object( r.useCallback )( e => {
            const n = requestAnimationFrame( r => {
              t.current = t.current.filter( e => e !== n ), e( r )
            } );
            t.current.push( n )
          }, [] )
        },
        i = ( e = {
          cleanup: "unmount"
        } ) => {
          const t = Object( r.useRef )( [] );
          return Object( r.useEffect )( () => () => {
            t.current.length && ( t.current.forEach( e => clearTimeout( e ) ), t.current = [] )
          }, o( e ) ), Object( r.useCallback )( ( e, n, ...r ) => {
            const o = setTimeout( () => {
              t.current = t.current.filter( e => e !== o ), e()
            }, n, ...r );
            t.current.push( o )
          }, [] )
        }
    },
    a8dO: function ( e, t, n ) {
      "use strict";
      var r = n( "Czhu" ),
        o = n( "ERkP" ),
        a = n.n( o ),
        i = n( "l1C2" ),
        c = n( "bES6" ),
        u = n( "z9P0" ),
        l = n( "NnKS" );

      function s( {
        fn: e,
        action: t,
        componentName: n,
        packageName: a,
        packageVersion: i,
        analyticsData: c
      } ) {
        const {
          createAnalyticsEvent: s
        } = Object( u.a )(), d = Object( l.a )( c ), p = Object( l.a )( e );
        return Object( o.useCallback )( () => {
          const e = s( {
              action: t,
              actionSubject: n,
              attributes: {
                componentName: n,
                packageName: a,
                packageVersion: i
              }
            } ),
            o = Object( r.a )( {
              componentName: n,
              packageName: a,
              packageVersion: i
            }, d.current );
          e.context.push( o );
          const c = e.clone();
          c && c.fire( "atlaskit" ), p.current( e )
        }, [ t, n, a, i, s, d, p ] )
      }
      var d = n( "pwfR" ),
        p = n( "b6XK" ),
        f = n( "bLpi" ),
        h = n( "PEqI" ),
        m = n( "BMbf" );
      let b = null;

      function g() {
        null != b && ( window.clearTimeout( b ), b = null )
      }

      function y( e, t ) {
        g(), b = window.setTimeout( () => {
          b = null, e()
        }, t )
      }
      let v = null;
      var O = n( "3IV/" ),
        k = n( "EFzz" ),
        j = n( "uvkf" );
      const w = Object( i.e )( "border-radius:", Object( m.c )(), "px;box-sizing:border-box;font-size:12px;left:0;line-height:1.3;max-width:240px;padding:2px 6px;top:0;word-wrap:break-word;overflow-wrap:break-word;" ),
        E = {
          name: "v0nulc",
          styles: "max-width:420px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;"
        },
        x = Object( o.forwardRef )( ( function ( {
          style: e,
          className: t,
          children: n,
          truncate: r,
          placement: o,
          testId: a
        }, c ) {
          return Object( i.f )( k.a.Consumer, null, ( {
            mode: u
          } ) => Object( i.f )( j.a, {
            ref: c,
            style: e,
            className: t,
            placement: o,
            testId: a,
            css: [ w, r ? E : null, Object( i.e )( "background-color:", "light" === u ? O.N800 : O.DN0, ";color:", "light" === u ? O.N0 : O.DN600, ";" ) ]
          }, n ) )
        } ) );
      x.displayName = "TooltipContainer";
      var C = x;

      function I( e ) {
        const t = e || {
          top: 0,
          left: 0
        };
        return {
          getBoundingClientRect: () => ( {
            top: t.top,
            left: t.left,
            bottom: t.top,
            right: t.left,
            width: 0,
            height: 0
          } ),
          clientWidth: 0,
          clientHeight: 0
        }
      }
      var R = n( "jYB6" );
      const S = m.i.tooltip(),
        P = {
          componentName: "tooltip",
          packageName: R.a,
          packageVersion: R.b
        };

      function N() {}

      function z( {
        children: e,
        position: t = "bottom",
        mousePosition: n = "bottom",
        content: u,
        truncate: l = !1,
        component: m = C,
        tag: b = "div",
        testId: O,
        delay: k = 300,
        onShow: j = N,
        onHide: w = N,
        hideTooltipOnClick: E = !1,
        hideTooltipOnMouseDown: x = !1,
        analyticsContext: R,
        strategy: z = "fixed"
      } ) {
        const T = "mouse" === t ? n : t,
          A = s( Object( r.a )( {
            fn: j,
            action: "displayed",
            analyticsData: R
          }, P ) ),
          B = s( Object( r.a )( {
            fn: w,
            action: "hidden",
            analyticsData: R
          }, P ) ),
          F = Object( o.useRef )( null ),
          [ q, M ] = Object( o.useState )( "hide" ),
          H = Object( o.useRef )( null ),
          D = Object( o.useRef )( null ),
          K = Object( o.useCallback )( e => {
            e && null !== e.firstChild && ( D.current = e, H.current = e.firstChild )
          }, [] ),
          W = Object( o.useRef )( q ),
          L = Object( o.useRef )( k ),
          _ = Object( o.useRef )( {
            onShowHandler: A,
            onHideHandler: B
          } ),
          V = Object( o.useRef )( !1 );
        Object( o.useEffect )( () => {
          W.current = q, L.current = k, _.current = {
            onShowHandler: A,
            onHideHandler: B
          }
        }, [ k, B, A, q ] );
        const U = Object( o.useCallback )( e => {
            F.current = e, V.current = !1
          }, [] ),
          Q = Object( o.useCallback )( () => {
            F.current && ( V.current && _.current.onHideHandler(), F.current = null, V.current = !1, M( "hide" ) )
          }, [] ),
          G = Object( o.useCallback )( () => {
            F.current && ( F.current.abort(), V.current && _.current.onHideHandler(), F.current = null )
          }, [] );
        Object( o.useEffect )( ( function () {
          return function () {
            F.current && G()
          }
        } ), [ G ] );
        const $ = Object( o.useCallback )( e => {
          if ( F.current && !F.current.isActive() && G(), F.current && F.current.isActive() ) return void F.current.keep();
          const t = function ( e ) {
            let t = "waiting-to-show";

            function n() {
              return Boolean( v && v.entry === e )
            }

            function r() {
              n() && ( g(), v = null )
            }

            function o() {
              n() && e.done(), t = "done", r()
            }

            function a() {
              n() && e.hide( {
                isImmediate: !0
              } ), o()
            }

            function i() {
              return "shown" === t || "waiting-to-hide" === t || "hide-animating" === t
            }
            return function () {
              const n = Boolean( v && v.isVisible() );

              function r() {
                t = "shown", e.show( {
                  isImmediate: n
                } )
              }
              v && ( g(), v.entry.hide( {
                isImmediate: !0
              } ), v.entry.done(), v = null ), v = {
                entry: e,
                isVisible: i
              }, n ? r() : ( t = "waiting-to-show", y( r, e.delay ) )
            }(), {
              keep: function () {
                if ( n() ) return "waiting-to-hide" === t ? ( t = "shown", void g() ) : "hide-animating" === t ? ( t = "shown", g(), void e.show( {
                  isImmediate: !1
                } ) ) : void 0
              },
              abort: r,
              isActive: n,
              requestHide: function ( {
                isImmediate: r
              } ) {
                n() && ( "waiting-to-show" !== t ? "waiting-to-hide" !== t && ( r ? a() : ( t = "waiting-to-hide", y( () => {
                  t = "hide-animating", e.hide( {
                    isImmediate: !1
                  } )
                }, e.delay ) ) ) : a() )
              },
              finishHideAnimation: function () {
                n() && "hide-animating" === t && o()
              },
              getInitialMouse: function () {
                return "mouse" === e.source.type ? e.source.mouse : null
              }
            }
          }( {
            source: e,
            delay: L.current,
            show: ( {
              isImmediate: e
            } ) => {
              V.current || ( V.current = !0, _.current.onShowHandler() ), M( e ? "show-immediate" : "show-fade-in" )
            },
            hide: ( {
              isImmediate: e
            } ) => {
              M( t => "hide" !== t ? e ? "hide" : "fade-out" : t )
            },
            done: Q
          } );
          U( t )
        }, [ G, Q, U ] );
        Object( o.useEffect )( () => {
          if ( "hide" === q ) return N;
          return Object( c.bind )( window, {
            type: "scroll",
            listener: () => {
              F.current && F.current.requestHide( {
                isImmediate: !0
              } )
            },
            options: {
              capture: !0,
              passive: !0,
              once: !0
            }
          } )
        }, [ q ] );
        const J = Object( o.useCallback )( () => {
            x && F.current && F.current.requestHide( {
              isImmediate: !0
            } )
          }, [ x ] ),
          Y = Object( o.useCallback )( () => {
            E && F.current && F.current.requestHide( {
              isImmediate: !0
            } )
          }, [ E ] ),
          X = Object( o.useCallback )( e => {
            if ( e.target === D.current ) return;
            if ( e.defaultPrevented ) return;
            e.preventDefault();
            const n = "mouse" === t ? {
              type: "mouse",
              mouse: I( {
                left: e.clientX,
                top: e.clientY
              } )
            } : {
              type: "keyboard"
            };
            $( n )
          }, [ t, $ ] ),
          Z = Object( o.useCallback )( e => {
            e.target !== D.current && ( e.defaultPrevented || ( e.preventDefault(), F.current && F.current.requestHide( {
              isImmediate: !1
            } ) ) )
          }, [] ),
          ee = Object( o.useCallback )( () => {
            $( {
              type: "keyboard"
            } )
          }, [ $ ] ),
          te = Object( o.useCallback )( () => {
            F.current && F.current.requestHide( {
              isImmediate: !1
            } )
          }, [] ),
          ne = Object( o.useCallback )( e => {
            "exiting" === e && "fade-out" === W.current && F.current && F.current.finishHideAnimation()
          }, [] ),
          re = b,
          oe = "hide" !== q && Boolean( u ),
          ae = "show-immediate" === q || "show-fade-in" === q;
        return Object( i.f )( a.a.Fragment, null, Object( i.f )( re, {
          onMouseOver: X,
          onMouseOut: Z,
          onClick: Y,
          onMouseDown: J,
          onFocus: ee,
          onBlur: te,
          ref: K,
          "data-testid": O ? O + "--container" : void 0
        }, e ), oe ? Object( i.f )( h.a, {
          zIndex: S
        }, Object( i.f )( f.a, {
          placement: T,
          referenceElement: ( () => {
            const e = F.current,
              n = e ? e.getInitialMouse() : null;
            return "mouse" === t && n ? n : H.current || void 0
          } )(),
          strategy: z
        }, ( {
          ref: e,
          style: t
        } ) => Object( i.f )( d.a, {
          appear: !0
        }, ae && Object( i.f )( p.a, {
          onFinish: ne,
          duration: "show-immediate" === q ? 0 : void 0
        }, ( {
          className: n
        } ) => Object( i.f )( m, {
          ref: e,
          className: "Tooltip " + n,
          style: t,
          truncate: l,
          placement: T,
          testId: O
        }, u ) ) ) ) ) : null )
      }
      z.displayName = "Tooltip";
      t.a = z
    },
    ak4O: function ( e, t, n ) {
      "use strict";
      n.d( t, "a", ( function () {
        return c
      } ) );
      var r = n( "Czhu" ),
        o = ( n( "aWzz" ), n( "ERkP" ) ),
        a = n.n( o );
      const i = {
        display: "block",
        position: "absolute",
        width: "100%",
        top: 0,
        left: 0,
        height: 250
      };
      class c extends o.Component {
        render() {
          var e;
          const {
            lookAndFeel: t
          } = this.props;
          if ( !t || !t.content ) return null;
          const n = ( null != ( e = t ) && null != ( e = e.content ) && null != ( e = e.screen ) ? e.layer : e ) || {};
          return a.a.createElement( "div", {
            style: Object( r.a )( Object( r.a )( {}, i ), n )
          } )
        }
      }
    },
    b6XK: function ( e, t, n ) {
      "use strict";
      var r = n( "HbGN" ),
        o = n( "Czhu" ),
        a = n( "ERkP" ),
        i = n.n( a ),
        c = n( "A46D" ),
        u = n( "/yy9" ),
        l = n( "Xcdj" );
      const s = {
          bottom: "translate3d(0, calc(5% + 4px), 0)",
          left: "translate3d(calc(-5% - 4px), 0, 0)",
          right: "translate3d(calc(5% + 4px), 0, 0)",
          top: "translate3d(0, calc(-5% - 4px), 0)"
        },
        d = {
          bottom: "translate3d(0, calc(-5% - 4px), 0)",
          left: "translate3d(calc(5% + 4px), 0, 0)",
          right: "translate3d(calc(-5% - 4px), 0, 0)",
          top: "translate3d(0, calc(5% + 4px), 0)"
        },
        p = e => ( {
          from: {
            opacity: 1,
            transform: void 0 !== e ? "translate3d(0, 0, 0)" : void 0
          },
          to: Object( o.a )( {
            opacity: 0
          }, void 0 !== e && {
            transform: d[ e ]
          } )
        } );
      t.a = e => {
        let {
          children: t,
          duration: n = u.a,
          entranceDirection: a
        } = e, d = Object( r.a )( e, [ "children", "duration", "entranceDirection" ] );
        return i.a.createElement( l.a, Object.assign( {
          duration: n,
          enteringAnimation: ( f = a, {
            from: Object( o.a )( {
              opacity: 0
            }, void 0 !== f && {
              transform: s[ f ]
            } ),
            "50%": {
              opacity: 1
            },
            to: {
              transform: void 0 !== f ? "none" : void 0
            }
          } ),
          exitingAnimation: p( a ),
          animationTimingFunction: () => c.b
        }, d ), t );
        var f
      }
    },
    bES6: function ( e, t, n ) {
      "use strict";
      Object.defineProperty( t, "__esModule", {
        value: !0
      } );
      var r = n( "FzbR" );
      Object.defineProperty( t, "bind", {
        enumerable: !0,
        get: function () {
          return r.bind
        }
      } );
      var o = n( "0gjq" );
      Object.defineProperty( t, "bindAll", {
        enumerable: !0,
        get: function () {
          return o.bindAll
        }
      } )
    },
    bhMQ: function ( e, t, n ) {
      "use strict";
      n.d( t, "a", ( function () {
        return r
      } ) ), n.d( t, "b", ( function () {
        return o
      } ) );
      const r = () => {
          if ( "undefined" == typeof window || !( "matchMedia" in window ) ) return !1;
          const {
            matches: e
          } = window.matchMedia( "(prefers-reduced-motion: reduce)" );
          return e
        },
        o = () => ( {
          "@media (prefers-reduced-motion: reduce)": {
            animation: "none",
            transition: "none"
          }
        } )
    },
    d8BE: function ( e, t, n ) {
      "use strict";
      var r = n( "ERkP" ),
        o = n( "aWzz" ),
        a = n( "rqe8" );

      function i() {}
      i.prototype = Object.create( r.Component.prototype ), i.displayName = "DocumentTitle", i.propTypes = {
        title: o.string.isRequired
      }, i.prototype.render = function () {
        return this.props.children ? r.Children.only( this.props.children ) : null
      }, e.exports = a( ( function ( e ) {
        var t = e[ e.length - 1 ];
        if ( t ) return t.title
      } ), ( function ( e ) {
        var t = e || "";
        t !== document.title && ( document.title = t )
      } ) )( i )
    },
    ePrB: function ( e, t, n ) {
      "use strict";
      n.d( t, "b", ( function () {
        return s
      } ) ), n.d( t, "a", ( function () {
        return d
      } ) ), n.d( t, "c", ( function () {
        return p
      } ) );
      var r = n( "Czhu" ),
        o = n( "EfWO" ),
        a = n.n( o ),
        i = n( "jq/l" ),
        c = n.n( i ),
        u = n( "2Lg3" ),
        l = n.n( u );
      const s = e => {
          if ( !e ) return;
          const t = e.trim().replace( /[^A-Za-z0-9\-.]+/g, "+" ).replace( /^\++|\++$/g, "" );
          return t || void 0
        },
        d = ( e, t ) => {
          const n = a.a.parse( e, !0 );
          return delete n.search, n.query = Object( r.a )( Object( r.a )( {}, n.query ), t ), n.query = c()( n.query, l.a ), a.a.format( n )
        },
        p = ( e, t ) => {
          const n = a.a.parse( t, !0 );
          return delete n.search, e.forEach( e => delete n.query[ e ] ), a.a.format( n )
        }
    },
    f9bD: function ( e, t, n ) {
      var r = n( "H87J" ),
        o = n( "S3pA" ),
        a = n( "O1Sc" ),
        i = n( "zF5n" );
      e.exports = function ( e, t ) {
        if ( null == e ) return {};
        var n = r( i( e ), ( function ( e ) {
          return [ e ]
        } ) );
        return t = o( t ), a( e, n, ( function ( e, n ) {
          return t( e, n[ 0 ] )
        } ) )
      }
    },
    fuBS: function ( e, t, n ) {
      "use strict";
      n.d( t, "a", ( function () {
        return a
      } ) );
      var r = n( "RfuI" ),
        o = n( "Qn63" );
      const a = Object( r.a )( {
        id: "CIymO",
        name: "ContentTitle",
        loader: () => n.e( "content-title~b59ad437" ).then( n.bind( null, "fNih" ) ).then( ( {
          ContentTitle: e
        } ) => e ),
        loading: o.a
      } )
    },
    jYB6: function ( e ) {
      e.exports = JSON.parse( '{"a":"@atlaskit/tooltip","b":"17.1.1"}' )
    },
    "jq/l": function ( e, t, n ) {
      var r = n( "S3pA" ),
        o = n( "J4/4" ),
        a = n( "f9bD" );
      e.exports = function ( e, t ) {
        return a( e, o( r( t ) ) )
      }
    },
    liuE: function ( e, t, n ) {
      "use strict";
      var r = n( "ERkP" ),
        o = n.n( r ),
        a = n( "Czhu" ),
        i = n( "3IV/" ),
        c = n( "8pvK" );
      const u = {
          default: {
            light: i.N40,
            dark: i.N40
          },
          inprogress: {
            light: i.B50,
            dark: i.B50
          },
          moved: {
            light: i.Y75,
            dark: i.Y75
          },
          new: {
            light: i.P50,
            dark: i.P50
          },
          removed: {
            light: i.R50,
            dark: i.R50
          },
          success: {
            light: i.G50,
            dark: i.G50
          }
        },
        l = {
          default: {
            light: i.N500,
            dark: i.N500
          },
          inprogress: {
            light: i.B500,
            dark: i.B500
          },
          moved: {
            light: i.N800,
            dark: i.N800
          },
          new: {
            light: i.P500,
            dark: i.P500
          },
          removed: {
            light: i.R500,
            dark: i.R500
          },
          success: {
            light: i.G500,
            dark: i.G500
          }
        },
        s = {
          default: {
            light: i.N500,
            dark: i.N500
          },
          inprogress: {
            light: i.B400,
            dark: i.B400
          },
          moved: {
            light: i.Y500,
            dark: i.Y500
          },
          new: {
            light: i.P400,
            dark: i.P400
          },
          removed: {
            light: i.R400,
            dark: i.R400
          },
          success: {
            light: i.G400,
            dark: i.G400
          }
        },
        d = {
          default: {
            light: i.N0,
            dark: i.N0
          },
          inprogress: {
            light: i.N0,
            dark: i.N0
          },
          moved: {
            light: i.N800,
            dark: i.N800
          },
          new: {
            light: i.N0,
            dark: i.N0
          },
          removed: {
            light: i.N0,
            dark: i.N0
          },
          success: {
            light: i.N0,
            dark: i.N0
          }
        },
        p = Object( c.a )( ( {
          appearance: e,
          isBold: t,
          maxWidth: n
        } ) => Object( a.a )( Object( a.a )( {}, "object" == typeof e ? Object( a.a )( {
          backgroundColor: ( t ? s : u ).default.light,
          textColor: ( t ? d : l ).default.light
        }, e ) : {
          backgroundColor: ( t ? s[ e ] : u[ e ] ).light,
          textColor: ( t ? d[ e ] : l[ e ] ).light
        } ), {}, {
          maxWidth: n
        } ) );
      var f = n( "l1C2" ),
        h = n( "BMbf" );
      const m = Object( h.c )() + "px";
      var b = ( {
        backgroundColor: e,
        textColor: t,
        children: n,
        testId: r
      } ) => Object( f.f )( "span", {
        css: {
          backgroundColor: e,
          borderRadius: m,
          boxSizing: "border-box",
          color: t,
          display: "inline-block",
          fontSize: "11px",
          fontWeight: 700,
          lineHeight: 1,
          maxWidth: "100%",
          padding: "2px 0 3px 0",
          textTransform: "uppercase",
          verticalAlign: "baseline"
        },
        "data-testid": r
      }, n );
      const g = Object( h.h )() / 2 + "px";
      var y = ( {
        maxWidth: e,
        children: t
      } ) => Object( f.f )( "span", {
        css: {
          display: "inline-block",
          verticalAlign: "top",
          overflow: "hidden",
          textOverflow: "ellipsis",
          whiteSpace: "nowrap",
          boxSizing: "border-box",
          padding: "0 " + g,
          maxWidth: "number" == typeof e ? e + "px" : e,
          width: "100%"
        }
      }, t );
      n.d( t, "a", ( function () {
        return v
      } ) );
      class v extends r.PureComponent {
        render() {
          const {
            theme: e,
            children: t,
            testId: n
          } = this.props;
          return o.a.createElement( p.Provider, {
            value: e
          }, o.a.createElement( p.Consumer, Object.assign( {}, this.props ), e => o.a.createElement( b, Object.assign( {
            testId: n
          }, e ), o.a.createElement( y, Object.assign( {}, e ), t ) ) ) )
        }
      }
      v.defaultProps = {
        isBold: !1,
        appearance: "default",
        maxWidth: 200
      }
    },
    pwfR: function ( e, t, n ) {
      "use strict";
      var r = n( "ERkP" ),
        o = n.n( r ),
        a = n( "bhMQ" );
      n.d( t, "b", ( function () {
        return s
      } ) );
      const i = {
          appear: !0,
          isExiting: !1
        },
        c = Object( r.createContext )( i ),
        u = ( e, t = i ) => o.a.createElement( c.Provider, {
          key: e.key + "-provider",
          value: t
        }, e ),
        l = e => e.reduce( ( e, t ) => ( e[ t.key ] = t, e ), {} ),
        s = () => Object( r.useContext )( c );
      t.a = ( {
        appear: e = !1,
        children: t,
        exitThenEnter: n
      } ) => {
        const o = ( e => {
            const t = [];
            return r.Children.toArray( e ).forEach( e => {
              "boolean" != typeof e && t.push( e )
            } ), t
          } )( t ),
          i = l( o ),
          c = Object( r.useRef )( [] ),
          s = Object( r.useRef )( [] ),
          d = ( () => {
            const [ , e ] = Object( r.useState )( {} );
            return Object( r.useCallback )( () => e( {} ), [] )
          } )(),
          p = Object( r.useRef )( {} ),
          f = Object( r.useRef )( e ),
          h = Object( r.useMemo )( () => ( {
            appear: f.current,
            isExiting: !1
          } ), [ f.current ] );
        return Object( a.a )() ? o : ( f.current || ( f.current = !0 ), c.current.length && ( ( e, t ) => {
          for ( let n = 0; n < t.length; n++ ) {
            if ( !e[ t[ n ].key ] ) return !0
          }
          return !1
        } )( i, c.current ) ? ( ( 0 === s.current.length || ( ( e, t ) => {
          let n = !1;
          return t.forEach( t => {
            e.current[ t.key ] && ( n = !0, delete e.current[ t.key ] )
          } ), n
        } )( p, o ) ) && ( s.current = c.current ), c.current = o, ( n ? s.current : ( ( e, t ) => {
          const n = t.concat( [] ),
            r = l( t );
          for ( let o = 0; o < e.length; o++ ) {
            const t = e[ o ];
            !r[ t.key ] && n.splice( o + 1, 0, t )
          }
          return n
        } )( o, s.current ) ).map( e => {
          const t = i[ e.key ];
          return t ? u( t, h ) : ( p.current[ e.key ] = !0, u( e, {
            isExiting: !0,
            appear: !0,
            onFinish: () => {
              delete p.current[ e.key ], 0 === Object.keys( p.current ).length && ( c.current = [], s.current = [], d() )
            }
          } ) )
        } ) ) : ( c.current = o, o.map( e => u( e, h ) ) ) )
      }
    },
    qSVF: function ( e, t, n ) {
      "use strict";
      n.d( t, "a", ( function () {
        return a
      } ) ), n.d( t, "b", ( function () {
        return i
      } ) );
      var r = n( "RfuI" ),
        o = n( "4O0c" );
      const a = Object( r.a )( {
          id: "1ga+6",
          name: "ContentHeader",
          loader: () => Promise.all( [ n.e( "atlaskit~66e23772" ), n.e( "afp~af75c846" ), n.e( "vendors~4134d62c" ), n.e( 4 ), n.e( 5 ), n.e( 6 ), n.e( 13 ), n.e( 26 ), n.e( 44 ), n.e( 56 ), n.e( 71 ), n.e( 90 ), n.e( 92 ), n.e( 119 ), n.e( "page.header.v2~b59ad437" ) ] ).then( n.bind( null, "JIlu" ) ).then( ( {
            ContentHeader: e
          } ) => e ),
          loading: o.a
        } ),
        i = Object( r.a )( {
          id: "idBgk",
          name: "StickyBanner",
          loader: () => Promise.all( [ n.e( "atlaskit~66e23772" ), n.e( "afp~af75c846" ), n.e( "vendors~4134d62c" ), n.e( 4 ), n.e( 5 ), n.e( 6 ), n.e( 13 ), n.e( 26 ), n.e( 44 ), n.e( 56 ), n.e( 71 ), n.e( 90 ), n.e( 92 ), n.e( 119 ), n.e( "page.header.v2~b59ad437" ) ] ).then( n.bind( null, "x0zE" ) ).then( ( {
            StickyBanner: e
          } ) => e ),
          loading: o.a
        } )
    },
    qqpZ: function ( e, t, n ) {
      "use strict";
      var r = n( "ERkP" ),
        o = n.n( r ),
        a = n( "gQ5V" ),
        i = n( "L21V" ),
        c = n( "Sqlr" ),
        u = n( "rc7/" ),
        l = n( "+mzV" ),
        s = n( "WGCh" ),
        d = n( "ePrB" ),
        p = n( "Czhu" ),
        f = n( "zjfJ" ),
        h = ( n( "aWzz" ), n( "Ua4J" ) );
      class m extends r.PureComponent {
        shouldRedirectIncorrectSpaceKey() {
          const {
            spaceKeyInUrl: e,
            contentWithSlug: t
          } = this.props;
          return t && e !== t.spaceKey
        }
        shouldRedirectIncorrectSlug() {
          var e;
          const {
            contentWithSlug: t,
            contentSlugInUrl: n = ""
          } = this.props, r = ( null != ( e = t ) ? e.slug : e ) || "";
          return decodeURIComponent( r ) !== decodeURIComponent( n )
        }
        isRedirectNeeded() {
          return this.shouldRedirectIncorrectSlug() || this.shouldRedirectIncorrectSpaceKey()
        }
        render() {
          if ( !this.isRedirectNeeded() || !this.props.contentWithSlug ) return null;
          const {
            contentWithSlug: e
          } = this.props;
          return o.a.createElement( h.a.Consumer, null, ( {
            match: t
          } ) => o.a.createElement( s.a, {
            name: t.name,
            params: Object( p.a )( Object( p.a )( {}, t.params ), {}, {
              spaceKey: e.spaceKey,
              contentId: e.id,
              contentSlug: e.slug
            } )
          } ) )
        }
      }
      Object( f.a )( m, "defaultProps", {
        contentIdInUrl: "",
        contentSlugInUrl: "",
        contentWithSlug: null,
        isAnonymous: !1,
        space: null,
        spaceKeyInUrl: null
      } );
      var b = n( "H5qd" ),
        g = n.n( b );
      const y = g.a `query NextViewPageRedirectQuery($contentId:ID){content(id:$contentId){nodes{id type status title space{id homepageId key}history{createdDate}}}}`,
        v = () => o.a.createElement( l.a.Consumer, null, ( {
          contentId: e,
          contentSlug: t,
          spaceKey: n
        } ) => o.a.createElement( a.b, {
          errorPolicy: "all",
          query: y,
          variables: {
            contentId: e
          },
          context: {
            single: !0
          }
        }, ( {
          data: r,
          loading: a,
          error: i
        } ) => {
          var c, l, s, p, f;
          if ( a ) return null;
          const h = Object( u.b )( i ),
            b = null != ( f = r ) && null != ( f = f.content ) && null != ( f = f.nodes ) ? f[ 0 ] : f,
            g = null != ( p = r ) && null != ( p = p.content ) && null != ( p = p.nodes ) && null != ( p = p[ 0 ] ) ? p.space : p,
            y = null != ( s = r ) && null != ( s = s.content ) && null != ( s = s.nodes ) && null != ( s = s[ 0 ] ) ? s.title : s,
            v = b && Object.assign( {}, b, {
              slug: Object( d.b )( y ),
              spaceKey: null != ( l = g ) ? l.key : l,
              createdDate: null != ( c = b ) && null != ( c = c.history ) ? c.createdDate : c
            } );
          return o.a.createElement( m, {
            contentIdInUrl: e,
            contentSlugInUrl: t,
            contentWithSlug: v,
            isUnauthorized: h,
            space: g,
            spaceKeyInUrl: n
          } )
        } ) ),
        O = g.a `query ContentPrerequisitesQuery($contentId:ID!$missingSpaceKey:Boolean=false){content(id:$contentId){nodes{id type space@include(if:$missingSpaceKey){id key}}}}`;
      var k = n( "Wwuj" );
      const j = n( "KsTJ" ).default.div `
  width: 100%;
`,
        w = () => o.a.createElement( j, null, o.a.createElement( c.a, {
          notFound: !0
        } ), o.a.createElement( k.a, null ) );
      var E = n( "tlRP" ),
        x = n( "KIs4" );
      const C = () => o.a.createElement( x.a, null, ( {
        userId: e
      } ) => e ? null : o.a.createElement( s.a, {
        href: "https://id.atlassian.com/login?application=confluence&continue=" + encodeURIComponent( window.location.href )
      } ) );
      class I extends r.PureComponent {
        render() {
          const {
            contentId: e,
            accessType: t
          } = this.props;
          return o.a.createElement( r.Fragment, null, o.a.createElement( C, null ), o.a.createElement( j, null, o.a.createElement( c.a, {
            siteTitleOnly: !0
          } ), o.a.createElement( E.c, Object( p.a )( {}, {
            contentId: e,
            accessType: t
          } ) ) ) )
        }
      }
      n.d( t, "a", ( function () {
        return R
      } ) );
      const R = Object( i.g )( class e extends r.Component {
        static getAccessType( e ) {
          var t;
          return Boolean( "confluence.content.restricted.inherited" === ( null != ( t = e ) && null != ( t = t.graphQLErrors ) && null != ( t = t[ 0 ] ) && null != ( t = t.extensions ) && null != ( t = t.data ) && null != ( t = t.errors ) && null != ( t = t[ 0 ] ) && null != ( t = t.message ) ? t.key : t ) ) ? "inherited" : "view"
        }
        render() {
          return o.a.createElement( l.a.Consumer, null, ( {
            contentId: t,
            spaceKey: n
          } ) => {
            const {
              intl: i,
              children: l,
              route: d,
              pageTitle: p,
              contentQueryResult: f
            } = this.props;
            if ( !t ) return o.a.createElement( w, null );
            const h = !n;
            return o.a.createElement( r.Fragment, null, o.a.createElement( v, null ), o.a.createElement( a.b, {
              errorPolicy: "all",
              query: O,
              variables: {
                contentId: t,
                missingSpaceKey: h
              },
              skip: Boolean( f )
            }, r => {
              var a;
              const {
                data: m,
                error: b,
                loading: g
              } = f || r;
              if ( !m && g ) return null;
              const {
                getAccessType: y
              } = e;
              if ( b && Object( u.b )( b ) ) return o.a.createElement( I, {
                contentId: t,
                accessType: y( b )
              } );
              const v = ( null != ( a = m ) && null != ( a = a.content ) ? a.nodes : a ) || [];
              return b || 0 === v.length ? o.a.createElement( w, null ) : h ? ( n = null != ( O = m ) && null != ( O = O.content ) && null != ( O = O.nodes ) && null != ( O = O[ 0 ] ) && null != ( O = O.space ) ? O.key : O, o.a.createElement( s.a, {
                name: d.name,
                params: {
                  contentId: t,
                  spaceKey: n
                }
              } ) ) : o.a.createElement( j, null, o.a.createElement( c.a, {
                contentId: t,
                titlePrefix: p && i.formatMessage( p )
              } ), l );
              var O
            } ) )
          } )
        }
      } )
    },
    rqe8: function ( e, t, n ) {
      "use strict";

      function r( e ) {
        return e && "object" == typeof e && "default" in e ? e.default : e
      }
      var o = n( "ERkP" ),
        a = r( o ),
        i = r( n( "uPah" ) ),
        c = r( n( "Pu0A" ) );

      function u( e, t ) {
        if ( !( e instanceof t ) ) throw new TypeError( "Cannot call a class as a function" )
      }

      function l( e, t ) {
        if ( !e ) throw new ReferenceError( "this hasn't been initialised - super() hasn't been called" );
        return !t || "object" != typeof t && "function" != typeof t ? e : t
      }
      e.exports = function ( e, t, n ) {
        if ( "function" != typeof e ) throw new Error( "Expected reducePropsToState to be a function." );
        if ( "function" != typeof t ) throw new Error( "Expected handleStateChangeOnClient to be a function." );
        if ( void 0 !== n && "function" != typeof n ) throw new Error( "Expected mapStateOnServer to either be undefined or a function." );
        return function ( r ) {
          if ( "function" != typeof r ) throw new Error( "Expected WrappedComponent to be a React component." );
          var s = [],
            d = void 0;

          function p() {
            d = e( s.map( ( function ( e ) {
              return e.props
            } ) ) ), f.canUseDOM ? t( d ) : n && ( d = n( d ) )
          }
          var f = function ( e ) {
            function t() {
              return u( this, t ), l( this, e.apply( this, arguments ) )
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
            }( t, e ), t.peek = function () {
              return d
            }, t.rewind = function () {
              if ( t.canUseDOM ) throw new Error( "You may only call rewind() on the server. Call peek() to read the current state." );
              var e = d;
              return d = void 0, s = [], e
            }, t.prototype.shouldComponentUpdate = function ( e ) {
              return !c( e, this.props )
            }, t.prototype.componentWillMount = function () {
              s.push( this ), p()
            }, t.prototype.componentDidUpdate = function () {
              p()
            }, t.prototype.componentWillUnmount = function () {
              var e = s.indexOf( this );
              s.splice( e, 1 ), p()
            }, t.prototype.render = function () {
              return a.createElement( r, this.props )
            }, t
          }( o.Component );
          return f.displayName = "SideEffect(" + function ( e ) {
            return e.displayName || e.name || "Component"
          }( r ) + ")", f.canUseDOM = i.canUseDOM, f
        }
      }
    },
    uvkf: function ( e, t, n ) {
      "use strict";
      var r = n( "ERkP" ),
        o = n( "l1C2" ),
        a = n( "BMbf" );
      const i = Object( o.e )( "z-index:", a.i.tooltip(), ";pointer-events:none;" ),
        c = Object( r.forwardRef )( ( function ( {
          style: e,
          className: t,
          children: n,
          placement: r,
          testId: a
        }, c ) {
          return Object( o.f )( "div", {
            role: "tooltip",
            ref: c,
            style: e,
            className: t,
            css: i,
            "data-placement": r,
            "data-testid": a
          }, n )
        } ) );
      c.displayName = "TooltipPrimitive", t.a = c
    },
    xQ8g: function ( e, t, n ) {
      "use strict";
      Object.defineProperty( t, "__esModule", {
        value: !0
      } ), t.default = void 0;
      var r = a( n( "ERkP" ) ),
        o = a( n( "4KTy" ) );

      function a( e ) {
        return e && e.__esModule ? e : {
          default: e
        }
      }

      function i() {
        return ( i = Object.assign || function ( e ) {
          for ( var t = 1; t < arguments.length; t++ ) {
            var n = arguments[ t ];
            for ( var r in n ) Object.prototype.hasOwnProperty.call( n, r ) && ( e[ r ] = n[ r ] )
          }
          return e
        } ).apply( this, arguments )
      }
      var c = function ( e ) {
        return r.default.createElement( o.default, i( {
          dangerouslySetGlyph: '<svg width="24" height="24" viewBox="0 0 24 24" focusable="false" role="presentation"><g fill-rule="evenodd"><rect fill="currentColor" x="6" y="6" width="12" height="12" rx="2"/><path d="M9.707 11.293a1 1 0 1 0-1.414 1.414l2 2a1 1 0 0 0 1.414 0l4-4a1 1 0 1 0-1.414-1.414L11 12.586l-1.293-1.293z" fill="inherit"/></g></svg>'
        }, e ) )
      };
      c.displayName = "CheckboxIcon";
      var u = c;
      t.default = u
    },
    y4bl: function ( e, t, n ) {
      var r = n( "c72w" ),
        o = n( "xoyU" ),
        a = n( "pnw1" ),
        i = n( "tQYX" ),
        c = n( "Ypsa" );
      e.exports = function ( e, t, n, u ) {
        if ( !i( e ) ) return e;
        for ( var l = -1, s = ( t = o( t, e ) ).length, d = s - 1, p = e; null != p && ++l < s; ) {
          var f = c( t[ l ] ),
            h = n;
          if ( "__proto__" === f || "constructor" === f || "prototype" === f ) return e;
          if ( l != d ) {
            var m = p[ f ];
            void 0 === ( h = u ? u( m, f, p ) : void 0 ) && ( h = i( m ) ? m : a( t[ l + 1 ] ) ? [] : {} )
          }
          r( p, f, h ), p = p[ f ]
        }
        return e
      }
    }
  }
] );
//# sourceMappingURL=81.TeCouAU9bT.js.map
