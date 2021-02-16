( window.webpackJsonp = window.webpackJsonp || [] ).push( [
  [ 132 ], {
    "1DYG": function ( n, t, e ) {
      "use strict";
      e.d( t, "a", ( function () {
        return o
      } ) );
      var r = {
        mode: e( "INcg" ).b
      };

      function o( n ) {
        return n && n.theme && n.theme.__ATLASKIT_THEME__ ? n.theme.__ATLASKIT_THEME__ : n && n.theme && n.theme.mode ? n.theme : r
      }
    },
    "7wq/": function ( n, t ) {
      n.exports = function ( n, t ) {
        return t || ( t = n.slice( 0 ) ), Object.freeze( Object.defineProperties( n, {
          raw: {
            value: Object.freeze( t )
          }
        } ) )
      }
    },
    "9t/8": function ( n, t, e ) {
      "use strict";
      var r = e( "kvVz" ),
        o = {
          childContextTypes: !0,
          contextType: !0,
          contextTypes: !0,
          defaultProps: !0,
          displayName: !0,
          getDefaultProps: !0,
          getDerivedStateFromError: !0,
          getDerivedStateFromProps: !0,
          mixins: !0,
          propTypes: !0,
          type: !0
        },
        i = {
          name: !0,
          length: !0,
          prototype: !0,
          caller: !0,
          callee: !0,
          arguments: !0,
          arity: !0
        },
        u = {
          $$typeof: !0,
          compare: !0,
          defaultProps: !0,
          displayName: !0,
          propTypes: !0,
          type: !0
        },
        c = {};

      function a( n ) {
        return r.isMemo( n ) ? u : c[ n.$$typeof ] || o
      }
      c[ r.ForwardRef ] = {
        $$typeof: !0,
        render: !0,
        defaultProps: !0,
        displayName: !0,
        propTypes: !0
      }, c[ r.Memo ] = u;
      var d = Object.defineProperty,
        l = Object.getOwnPropertyNames,
        f = Object.getOwnPropertySymbols,
        s = Object.getOwnPropertyDescriptor,
        p = Object.getPrototypeOf,
        h = Object.prototype;
      n.exports = function n( t, e, r ) {
        if ( "string" != typeof e ) {
          if ( h ) {
            var o = p( e );
            o && o !== h && n( t, o, r )
          }
          var u = l( e );
          f && ( u = u.concat( f( e ) ) );
          for ( var c = a( t ), g = a( e ), m = 0; m < u.length; ++m ) {
            var b = u[ m ];
            if ( !( i[ b ] || r && r[ b ] || g && g[ b ] || c && c[ b ] ) ) {
              var x = s( e, b );
              try {
                d( t, b, x )
              } catch ( v ) {}
            }
          }
        }
        return t
      }
    },
    INcg: function ( n, t, e ) {
      "use strict";
      e.d( t, "a", ( function () {
        return r
      } ) ), e.d( t, "b", ( function () {
        return o
      } ) );
      var r = "__ATLASKIT_THEME__",
        o = "light"
    },
    PxFP: function ( n, t, e ) {
      "use strict";
      e.d( t, "a", ( function () {
        return o
      } ) );
      var r = e( "1DYG" );

      function o( n, t ) {
        if ( "string" == typeof n ) return e = n, o = t,
          function ( n ) {
            var t = Object( r.a )( n );
            if ( n && n[ e ] && o ) {
              var i = o[ n[ e ] ];
              if ( i ) return i[ t.mode ]
            }
            return ""
          };
        var e, o, i = n;
        return function ( n ) {
          var t = Object( r.a )( n );
          return i[ t.mode ]
        }
      }
    },
    XWrv: function ( n, t, e ) {
      "use strict";
      var r = e( "VrFO" ),
        o = e.n( r ),
        i = e( "Y9Ll" ),
        u = e.n( i ),
        c = e( "N+ot" ),
        a = e.n( c ),
        d = e( "AuHH" ),
        l = e.n( d ),
        f = e( "5Yy7" ),
        s = e.n( f ),
        p = e( "1Pcy" ),
        h = e.n( p ),
        g = e( "KEM+" ),
        m = e.n( g ),
        b = e( "ERkP" ),
        x = e.n( b ),
        v = e( "a1+U" ),
        y = e( "KsTJ" ),
        k = {
          xsmall: 8,
          small: 16,
          medium: 24,
          large: 48,
          xlarge: 96
        },
        N = k.small,
        O = {
          noop: Object( y.keyframes )( [ "\n    from { opacity: 0; }\n    to { opacity: 0; }\n  " ] ),
          enterRotate: Object( y.keyframes )( [ "\n    from { transform: rotate(50deg); }\n    to { transform: rotate(230deg); }\n  " ] ),
          leaveRotate: Object( y.keyframes )( [ "\n    from { transform: rotate(230deg); }\n    to { transform: rotate(510deg); }\n  " ] ),
          leaveOpacity: Object( y.keyframes )( [ "\n    from { opacity: 1; }\n    to { opacity: 0; }\n  " ] )
        },
        E = function ( n ) {
          var t = n.size;
          return "".concat( t, "px" )
        },
        F = y.default.div.withConfig( {
          displayName: "styledContainer__Container",
          componentId: "sc-1qs8wxp-0"
        } )( [ "\n  ", " display: flex;\n  height: ", ";\n  width: ", ";\n\n  /* Rapidly creating and removing spinners will result in multiple spinners being visible while\n   * they complete their exit animations. This rules hides the spinner if another one has been\n   * added. */\n  div + & {\n    display: none;\n  }\n" ], ( function ( n ) {
          var t = n.delay,
            e = n.phase;
          return "DELAY" === e ? "animation: ".concat( t, "s " ).concat( O.noop, ";" ) : "ENTER" === e || "IDLE" === e ? "animation: 1s ease-in-out forwards ".concat( O.enterRotate, ";" ) : "LEAVE" === e ? "animation: 0.53s ease-in-out forwards ".concat( O.leaveRotate, ",\n      0.2s ease-in-out 0.33s " ).concat( O.leaveOpacity, ";" ) : ""
        } ), E, E );
      F.displayName = "SpinnerContainer";
      var A = F,
        D = e( "m3Bd" ),
        j = e.n( D ),
        C = e( "PxFP" ),
        w = e( "fr6a" ),
        P = function ( n ) {
          return Math.round( n / 10 )
        },
        T = function ( n ) {
          var t = n / 2 - P( n ) / 2;
          return Math.PI * t * 2
        },
        B = {
          noop: Object( y.keyframes )( [ "\n    from { opacity: 0; }\n    to { opacity: 0; }\n  " ] ),
          rotate: Object( y.keyframes )( [ "\n    to { transform: rotate(360deg); }\n  " ] ),
          enterOpacity: Object( y.keyframes )( [ "\n    from { opacity: 0; }\n    to { opacity: 1; }\n  " ] ),
          smallEnterStroke: Object( y.keyframes )( [ "\n    from { stroke-dashoffset: ", "px; }\n    to { stroke-dashoffset: ", "px; }\n  " ], T( k.small ), .8 * T( k.small ) ),
          mediumEnterStroke: Object( y.keyframes )( [ "\n    from { stroke-dashoffset: ", "px; }\n    to { stroke-dashoffset: ", "px; }\n  " ], T( k.medium ), .8 * T( k.medium ) ),
          largeEnterStroke: Object( y.keyframes )( [ "\n    from { stroke-dashoffset: ", "px; }\n    to { stroke-dashoffset: ", "px; }\n  " ], T( k.large ), .8 * T( k.large ) ),
          xlargeEnterStroke: Object( y.keyframes )( [ "\n    from { stroke-dashoffset: ", "px; }\n    to { stroke-dashoffset: ", "px; }\n  " ], T( k.xlarge ), .8 * T( k.xlarge ) )
        },
        _ = Object( C.a )( {
          light: w.c.N500,
          dark: w.c.N0
        } ),
        S = Object( C.a )( {
          light: w.c.N0,
          dark: w.c.N0
        } ),
        M = function ( n ) {
          var t = n.invertColor,
            e = j()( n, [ "invertColor" ] );
          return t ? S( e ) : _( e )
        },
        z = Object( y.css )( [ "\n  ", ";\n" ], ( function ( n ) {
          var t = T( n.size ),
            e = "0.86s cubic-bezier(0.4, 0.15, 0.6, 0.85) infinite ".concat( B.rotate ),
            r = "0.8s ease-in-out ".concat( function ( n ) {
              var t = Object.keys( k ).find( ( function ( t ) {
                return n === k[ t ]
              } ) );
              if ( t ) return B[ "".concat( t, "EnterStroke" ) ];
              var e = T( n );
              return Object( y.keyframes )( [ "\n    from { stroke-dashoffset: ", "px; }\n    to { stroke-dashoffset: ", "px; }\n  " ], e, .8 * e )
            }( n.size ) ),
            o = "0.2s ease-in-out ".concat( B.enterOpacity ),
            i = [ e ];
          return "ENTER" === n.phase && i.push( r, o ), Object( y.css )( [ "\n      animation: ", ";\n      fill: none;\n      stroke: ", ";\n      stroke-dasharray: ", "px;\n      stroke-dashoffset: ", "px;\n      stroke-linecap: round;\n      stroke-width: ", "px;\n      transform-origin: center;\n    " ], i.join( ", " ), M, t, .8 * t, P( n.size ) )
        } ) ),
        L = y.default.svg.withConfig( {
          displayName: "styledSvg__Svg",
          componentId: "y2l69q-0"
        } )( [ "\n  ", ";\n" ], z );
      L.displayName = "SpinnerSvg";
      var R = L;
      e.d( t, "a", ( function () {
        return Y
      } ) );
      var I = y.default.div.withConfig( {
        displayName: "Spinner__Outer",
        componentId: "sc-1ejgacn-0"
      } )( [ "\n  display: inline-block;\n  vertical-align: middle;\n" ] );
      I.displayName = "Outer";
      var Y = function ( n ) {
        function t( n ) {
          var e;
          return o()( this, t ), e = a()( this, l()( t ).call( this, n ) ), m()( h()( h()( e ) ), "transitionNode", void 0 ), m()( h()( h()( e ) ), "enter", ( function () {
            e.props.delay ? e.setState( {
              phase: "DELAY"
            } ) : e.setState( {
              phase: "ENTER"
            } )
          } ) ), m()( h()( h()( e ) ), "idle", ( function () {
            e.setState( {
              phase: "IDLE"
            } )
          } ) ), m()( h()( h()( e ) ), "exit", ( function () {
            e.setState( {
              phase: "LEAVE"
            } )
          } ) ), m()( h()( h()( e ) ), "endListener", ( function ( n, t ) {
            return n && n.addEventListener( "animationend", ( function r( o ) {
              return "svg" !== o.target.tagName && ( "DELAY" === e.state.phase ? ( e.setState( {
                phase: "ENTER"
              } ), e.endListener( n, t ) ) : t(), n && n.removeEventListener( "animationend", r ) )
            } ) )
          } ) ), m()( h()( h()( e ) ), "validateSize", ( function () {
            var n = e.props.size,
              t = k[ n ] || n;
            return "number" == typeof t ? t : N
          } ) ), e.state = {
            phase: ""
          }, e
        }
        return s()( t, n ), u()( t, [ {
          key: "render",
          value: function () {
            var n = this,
              t = this.state.phase,
              e = this.props,
              r = e.delay,
              o = e.invertColor,
              i = e.isCompleting,
              u = this.validateSize(),
              c = u / 2 - Math.round( u / 10 ) / 2;
            return x.a.createElement( I, null, x.a.createElement( v.Transition, {
              addEndListener: this.endListener,
              appear: !0,
              in: !i,
              mountOnEnter: !0,
              unmountOnExit: !0,
              onEnter: this.enter,
              onEntered: this.idle,
              onExit: this.exit,
              onExited: function () {
                return n.props.onComplete()
              },
              ref: function ( t ) {
                n.transitionNode = t
              }
            }, x.a.createElement( A, {
              delay: r / 1e3,
              phase: t,
              size: u
            }, x.a.createElement( R, {
              focusable: "false",
              height: u,
              invertColor: o,
              phase: t,
              size: u,
              viewBox: "0 0 ".concat( u, " " ).concat( u ),
              width: u,
              xmlns: "http://www.w3.org/2000/svg"
            }, x.a.createElement( "circle", {
              cx: u / 2,
              cy: u / 2,
              r: c
            } ) ) ) ) )
          }
        } ] ), t
      }( b.Component );
      m()( Y, "defaultProps", {
        delay: 100,
        isCompleting: !1,
        invertColor: !1,
        onComplete: function () {},
        size: "medium"
      } )
    },
    ejW0: function ( n, t, e ) {
      "use strict";
      Object.defineProperty( t, "__esModule", {
        value: !0
      } ), t.sizes = {
        small: "16px",
        medium: "24px",
        large: "32px",
        xlarge: "48px"
      }, t.sizeMap = {
        small: "small",
        medium: "medium",
        large: "large",
        xlarge: "xlarge"
      }
    },
    fr6a: function ( n, t, e ) {
      "use strict";
      var r = {};
      e.r( r ), e.d( r, "R50", ( function () {
        return f
      } ) ), e.d( r, "R75", ( function () {
        return s
      } ) ), e.d( r, "R100", ( function () {
        return p
      } ) ), e.d( r, "R200", ( function () {
        return h
      } ) ), e.d( r, "R300", ( function () {
        return g
      } ) ), e.d( r, "R400", ( function () {
        return m
      } ) ), e.d( r, "R500", ( function () {
        return b
      } ) ), e.d( r, "Y50", ( function () {
        return x
      } ) ), e.d( r, "Y75", ( function () {
        return v
      } ) ), e.d( r, "Y100", ( function () {
        return y
      } ) ), e.d( r, "Y200", ( function () {
        return k
      } ) ), e.d( r, "Y300", ( function () {
        return N
      } ) ), e.d( r, "Y400", ( function () {
        return O
      } ) ), e.d( r, "Y500", ( function () {
        return E
      } ) ), e.d( r, "G50", ( function () {
        return F
      } ) ), e.d( r, "G75", ( function () {
        return A
      } ) ), e.d( r, "G100", ( function () {
        return D
      } ) ), e.d( r, "G200", ( function () {
        return j
      } ) ), e.d( r, "G300", ( function () {
        return C
      } ) ), e.d( r, "G400", ( function () {
        return w
      } ) ), e.d( r, "G500", ( function () {
        return P
      } ) ), e.d( r, "B50", ( function () {
        return T
      } ) ), e.d( r, "B75", ( function () {
        return B
      } ) ), e.d( r, "B100", ( function () {
        return _
      } ) ), e.d( r, "B200", ( function () {
        return S
      } ) ), e.d( r, "B300", ( function () {
        return M
      } ) ), e.d( r, "B400", ( function () {
        return z
      } ) ), e.d( r, "B500", ( function () {
        return L
      } ) ), e.d( r, "P50", ( function () {
        return R
      } ) ), e.d( r, "P75", ( function () {
        return I
      } ) ), e.d( r, "P100", ( function () {
        return Y
      } ) ), e.d( r, "P200", ( function () {
        return H
      } ) ), e.d( r, "P300", ( function () {
        return G
      } ) ), e.d( r, "P400", ( function () {
        return W
      } ) ), e.d( r, "P500", ( function () {
        return K
      } ) ), e.d( r, "T50", ( function () {
        return $
      } ) ), e.d( r, "T75", ( function () {
        return J
      } ) ), e.d( r, "T100", ( function () {
        return U
      } ) ), e.d( r, "T200", ( function () {
        return V
      } ) ), e.d( r, "T300", ( function () {
        return q
      } ) ), e.d( r, "T400", ( function () {
        return Z
      } ) ), e.d( r, "T500", ( function () {
        return Q
      } ) ), e.d( r, "N0", ( function () {
        return X
      } ) ), e.d( r, "N10", ( function () {
        return nn
      } ) ), e.d( r, "N20", ( function () {
        return tn
      } ) ), e.d( r, "N30", ( function () {
        return en
      } ) ), e.d( r, "N40", ( function () {
        return rn
      } ) ), e.d( r, "N50", ( function () {
        return on
      } ) ), e.d( r, "N60", ( function () {
        return un
      } ) ), e.d( r, "N70", ( function () {
        return cn
      } ) ), e.d( r, "N80", ( function () {
        return an
      } ) ), e.d( r, "N90", ( function () {
        return dn
      } ) ), e.d( r, "N100", ( function () {
        return ln
      } ) ), e.d( r, "N200", ( function () {
        return fn
      } ) ), e.d( r, "N300", ( function () {
        return sn
      } ) ), e.d( r, "N400", ( function () {
        return pn
      } ) ), e.d( r, "N500", ( function () {
        return hn
      } ) ), e.d( r, "N600", ( function () {
        return gn
      } ) ), e.d( r, "N700", ( function () {
        return mn
      } ) ), e.d( r, "N800", ( function () {
        return bn
      } ) ), e.d( r, "N900", ( function () {
        return xn
      } ) ), e.d( r, "N10A", ( function () {
        return vn
      } ) ), e.d( r, "N20A", ( function () {
        return yn
      } ) ), e.d( r, "N30A", ( function () {
        return kn
      } ) ), e.d( r, "N40A", ( function () {
        return Nn
      } ) ), e.d( r, "N50A", ( function () {
        return On
      } ) ), e.d( r, "N60A", ( function () {
        return En
      } ) ), e.d( r, "N70A", ( function () {
        return Fn
      } ) ), e.d( r, "N80A", ( function () {
        return An
      } ) ), e.d( r, "N90A", ( function () {
        return Dn
      } ) ), e.d( r, "N100A", ( function () {
        return jn
      } ) ), e.d( r, "N200A", ( function () {
        return Cn
      } ) ), e.d( r, "N300A", ( function () {
        return wn
      } ) ), e.d( r, "N400A", ( function () {
        return Pn
      } ) ), e.d( r, "N500A", ( function () {
        return Tn
      } ) ), e.d( r, "N600A", ( function () {
        return Bn
      } ) ), e.d( r, "N700A", ( function () {
        return _n
      } ) ), e.d( r, "N800A", ( function () {
        return Sn
      } ) ), e.d( r, "DN900", ( function () {
        return Mn
      } ) ), e.d( r, "DN800", ( function () {
        return zn
      } ) ), e.d( r, "DN700", ( function () {
        return Ln
      } ) ), e.d( r, "DN600", ( function () {
        return Rn
      } ) ), e.d( r, "DN500", ( function () {
        return In
      } ) ), e.d( r, "DN400", ( function () {
        return Yn
      } ) ), e.d( r, "DN300", ( function () {
        return Hn
      } ) ), e.d( r, "DN200", ( function () {
        return Gn
      } ) ), e.d( r, "DN100", ( function () {
        return Wn
      } ) ), e.d( r, "DN90", ( function () {
        return Kn
      } ) ), e.d( r, "DN80", ( function () {
        return $n
      } ) ), e.d( r, "DN70", ( function () {
        return Jn
      } ) ), e.d( r, "DN60", ( function () {
        return Un
      } ) ), e.d( r, "DN50", ( function () {
        return Vn
      } ) ), e.d( r, "DN40", ( function () {
        return qn
      } ) ), e.d( r, "DN30", ( function () {
        return Zn
      } ) ), e.d( r, "DN20", ( function () {
        return Qn
      } ) ), e.d( r, "DN10", ( function () {
        return Xn
      } ) ), e.d( r, "DN0", ( function () {
        return nt
      } ) ), e.d( r, "DN800A", ( function () {
        return tt
      } ) ), e.d( r, "DN700A", ( function () {
        return et
      } ) ), e.d( r, "DN600A", ( function () {
        return rt
      } ) ), e.d( r, "DN500A", ( function () {
        return ot
      } ) ), e.d( r, "DN400A", ( function () {
        return it
      } ) ), e.d( r, "DN300A", ( function () {
        return ut
      } ) ), e.d( r, "DN200A", ( function () {
        return ct
      } ) ), e.d( r, "DN100A", ( function () {
        return at
      } ) ), e.d( r, "DN90A", ( function () {
        return dt
      } ) ), e.d( r, "DN80A", ( function () {
        return lt
      } ) ), e.d( r, "DN70A", ( function () {
        return ft
      } ) ), e.d( r, "DN60A", ( function () {
        return st
      } ) ), e.d( r, "DN50A", ( function () {
        return pt
      } ) ), e.d( r, "DN40A", ( function () {
        return ht
      } ) ), e.d( r, "DN30A", ( function () {
        return gt
      } ) ), e.d( r, "DN20A", ( function () {
        return mt
      } ) ), e.d( r, "DN10A", ( function () {
        return bt
      } ) ), e.d( r, "background", ( function () {
        return xt
      } ) ), e.d( r, "backgroundActive", ( function () {
        return vt
      } ) ), e.d( r, "backgroundHover", ( function () {
        return yt
      } ) ), e.d( r, "backgroundOnLayer", ( function () {
        return kt
      } ) ), e.d( r, "text", ( function () {
        return Nt
      } ) ), e.d( r, "textHover", ( function () {
        return Ot
      } ) ), e.d( r, "textActive", ( function () {
        return Et
      } ) ), e.d( r, "subtleText", ( function () {
        return Ft
      } ) ), e.d( r, "placeholderText", ( function () {
        return At
      } ) ), e.d( r, "heading", ( function () {
        return Dt
      } ) ), e.d( r, "subtleHeading", ( function () {
        return jt
      } ) ), e.d( r, "codeBlock", ( function () {
        return Ct
      } ) ), e.d( r, "link", ( function () {
        return wt
      } ) ), e.d( r, "linkHover", ( function () {
        return Pt
      } ) ), e.d( r, "linkActive", ( function () {
        return Tt
      } ) ), e.d( r, "linkOutline", ( function () {
        return Bt
      } ) ), e.d( r, "primary", ( function () {
        return _t
      } ) ), e.d( r, "blue", ( function () {
        return St
      } ) ), e.d( r, "teal", ( function () {
        return Mt
      } ) ), e.d( r, "purple", ( function () {
        return zt
      } ) ), e.d( r, "red", ( function () {
        return Lt
      } ) ), e.d( r, "yellow", ( function () {
        return Rt
      } ) ), e.d( r, "green", ( function () {
        return It
      } ) ), e.d( r, "colorPalette8", ( function () {
        return Yt
      } ) ), e.d( r, "colorPalette16", ( function () {
        return Ht
      } ) ), e.d( r, "colorPalette24", ( function () {
        return Gt
      } ) ), e.d( r, "colorPalette", ( function () {
        return Wt
      } ) );
      var o = {};
      e.r( o ), e.d( o, "e100", ( function () {
        return Kt
      } ) ), e.d( o, "e200", ( function () {
        return $t
      } ) ), e.d( o, "e300", ( function () {
        return Jt
      } ) ), e.d( o, "e400", ( function () {
        return Ut
      } ) ), e.d( o, "e500", ( function () {
        return Vt
      } ) );
      var i = {};
      e.r( i ), e.d( i, "h900", ( function () {
        return Zt
      } ) ), e.d( i, "h800", ( function () {
        return Qt
      } ) ), e.d( i, "h700", ( function () {
        return Xt
      } ) ), e.d( i, "h600", ( function () {
        return ne
      } ) ), e.d( i, "h500", ( function () {
        return te
      } ) ), e.d( i, "h400", ( function () {
        return ee
      } ) ), e.d( i, "h300", ( function () {
        return re
      } ) ), e.d( i, "h200", ( function () {
        return oe
      } ) ), e.d( i, "h100", ( function () {
        return ie
      } ) );
      var u = {};
      e.r( u ), e.d( u, "add", ( function () {
        return ue
      } ) ), e.d( u, "subtract", ( function () {
        return ce
      } ) ), e.d( u, "multiply", ( function () {
        return ae
      } ) ), e.d( u, "divide", ( function () {
        return de
      } ) );
      var c = e( "KsTJ" ),
        a = e( "RhWx" ),
        d = e.n( a ),
        l = e( "PxFP" ),
        f = "#FFEBE6",
        s = "#FFBDAD",
        p = "#FF8F73",
        h = "#FF7452",
        g = "#FF5630",
        m = "#DE350B",
        b = "#BF2600",
        x = "#FFFAE6",
        v = "#FFF0B3",
        y = "#FFE380",
        k = "#FFC400",
        N = "#FFAB00",
        O = "#FF991F",
        E = "#FF8B00",
        F = "#E3FCEF",
        A = "#ABF5D1",
        D = "#79F2C0",
        j = "#57D9A3",
        C = "#36B37E",
        w = "#00875A",
        P = "#006644",
        T = "#DEEBFF",
        B = "#B3D4FF",
        _ = "#4C9AFF",
        S = "#2684FF",
        M = "#0065FF",
        z = "#0052CC",
        L = "#0747A6",
        R = "#EAE6FF",
        I = "#C0B6F2",
        Y = "#998DD9",
        H = "#8777D9",
        G = "#6554C0",
        W = "#5243AA",
        K = "#403294",
        $ = "#E6FCFF",
        J = "#B3F5FF",
        U = "#79E2F2",
        V = "#00C7E6",
        q = "#00B8D9",
        Z = "#00A3BF",
        Q = "#008DA6",
        X = "#FFFFFF",
        nn = "#FAFBFC",
        tn = "#F4F5F7",
        en = "#EBECF0",
        rn = "#DFE1E6",
        on = "#C1C7D0",
        un = "#B3BAC5",
        cn = "#A5ADBA",
        an = "#97A0AF",
        dn = "#8993A4",
        ln = "#7A869A",
        fn = "#6B778C",
        sn = "#5E6C84",
        pn = "#505F79",
        hn = "#42526E",
        gn = "#344563",
        mn = "#253858",
        bn = "#172B4D",
        xn = "#091E42",
        vn = "rgba(9, 30, 66, 0.02)",
        yn = "rgba(9, 30, 66, 0.04)",
        kn = "rgba(9, 30, 66, 0.08)",
        Nn = "rgba(9, 30, 66, 0.13)",
        On = "rgba(9, 30, 66, 0.25)",
        En = "rgba(9, 30, 66, 0.31)",
        Fn = "rgba(9, 30, 66, 0.36)",
        An = "rgba(9, 30, 66, 0.42)",
        Dn = "rgba(9, 30, 66, 0.48)",
        jn = "rgba(9, 30, 66, 0.54)",
        Cn = "rgba(9, 30, 66, 0.60)",
        wn = "rgba(9, 30, 66, 0.66)",
        Pn = "rgba(9, 30, 66, 0.71)",
        Tn = "rgba(9, 30, 66, 0.77)",
        Bn = "rgba(9, 30, 66, 0.82)",
        _n = "rgba(9, 30, 66, 0.89)",
        Sn = "rgba(9, 30, 66, 0.95)",
        Mn = "#E6EDFA",
        zn = "#DCE5F5",
        Ln = "#CED9EB",
        Rn = "#B8C7E0",
        In = "#ABBBD6",
        Yn = "#9FB0CC",
        Hn = "#8C9CB8",
        Gn = "#7988A3",
        Wn = "#67758F",
        Kn = "#56637A",
        $n = "#455166",
        Jn = "#3B475C",
        Un = "#313D52",
        Vn = "#283447",
        qn = "#202B3D",
        Zn = "#1B2638",
        Qn = "#121A29",
        Xn = "#0E1624",
        nt = "#0D1424",
        tt = "rgba(13, 20, 36, 0.06)",
        et = "rgba(13, 20, 36, 0.14)",
        rt = "rgba(13, 20, 36, 0.18)",
        ot = "rgba(13, 20, 36, 0.29)",
        it = "rgba(13, 20, 36, 0.36)",
        ut = "rgba(13, 20, 36, 0.40)",
        ct = "rgba(13, 20, 36, 0.47)",
        at = "rgba(13, 20, 36, 0.53)",
        dt = "rgba(13, 20, 36, 0.63)",
        lt = "rgba(13, 20, 36, 0.73)",
        ft = "rgba(13, 20, 36, 0.78)",
        st = "rgba(13, 20, 36, 0.81)",
        pt = "rgba(13, 20, 36, 0.85)",
        ht = "rgba(13, 20, 36, 0.89)",
        gt = "rgba(13, 20, 36, 0.92)",
        mt = "rgba(13, 20, 36, 0.95)",
        bt = "rgba(13, 20, 36, 0.97)",
        xt = Object( l.a )( {
          light: X,
          dark: Zn
        } ),
        vt = Object( l.a )( {
          light: T,
          dark: B
        } ),
        yt = Object( l.a )( {
          light: en,
          dark: Jn
        } ),
        kt = Object( l.a )( {
          light: X,
          dark: Vn
        } ),
        Nt = Object( l.a )( {
          light: xn,
          dark: Rn
        } ),
        Ot = Object( l.a )( {
          light: bn,
          dark: Rn
        } ),
        Et = Object( l.a )( {
          light: z,
          dark: z
        } ),
        Ft = Object( l.a )( {
          light: fn,
          dark: Hn
        } ),
        At = Object( l.a )( {
          light: ln,
          dark: Gn
        } ),
        Dt = Object( l.a )( {
          light: bn,
          dark: Rn
        } ),
        jt = Object( l.a )( {
          light: fn,
          dark: Hn
        } ),
        Ct = Object( l.a )( {
          light: tn,
          dark: Vn
        } ),
        wt = Object( l.a )( {
          light: z,
          dark: _
        } ),
        Pt = Object( l.a )( {
          light: M,
          dark: S
        } ),
        Tt = Object( l.a )( {
          light: L,
          dark: _
        } ),
        Bt = Object( l.a )( {
          light: _,
          dark: S
        } ),
        _t = Object( l.a )( {
          light: z,
          dark: _
        } ),
        St = Object( l.a )( {
          light: z,
          dark: _
        } ),
        Mt = Object( l.a )( {
          light: q,
          dark: V
        } ),
        zt = Object( l.a )( {
          light: G,
          dark: Y
        } ),
        Lt = Object( l.a )( {
          light: g,
          dark: g
        } ),
        Rt = Object( l.a )( {
          light: N,
          dark: N
        } ),
        It = Object( l.a )( {
          light: C,
          dark: C
        } ),
        Yt = [ {
          background: bn,
          text: X
        }, {
          background: m,
          text: X
        }, {
          background: W,
          text: R
        }, {
          background: z,
          text: B
        }, {
          background: q,
          text: bn
        }, {
          background: w,
          text: X
        }, {
          background: O,
          text: bn
        }, {
          background: cn,
          text: bn
        } ],
        Ht = Yt.concat( [ {
          background: hn,
          text: X
        }, {
          background: p,
          text: bn
        }, {
          background: I,
          text: bn
        }, {
          background: _,
          text: bn
        }, {
          background: U,
          text: bn
        }, {
          background: D,
          text: P
        }, {
          background: k,
          text: bn
        }, {
          background: X,
          text: bn
        } ] ),
        Gt = d()( Ht ).concat( [ {
          background: ln,
          text: X
        }, {
          background: rn,
          text: bn
        }, {
          background: on,
          text: b
        }, {
          background: R,
          text: K
        }, {
          background: T,
          text: L
        }, {
          background: J,
          text: bn
        }, {
          background: F,
          text: P
        }, {
          background: v,
          text: bn
        } ] ),
        Wt = function () {
          var n = arguments.length > 0 && void 0 !== arguments[ 0 ] ? arguments[ 0 ] : "8";
          switch ( n ) {
            case "8":
              return Yt;
            case "16":
              return Ht;
            case "24":
              return Gt;
            default:
              throw new Error( "The only available color palette is 8, 16, 24" )
          }
        },
        Kt = Object( l.a )( {
          light: "box-shadow: 0 1px 1px ".concat( On, ", 0 0 1px 0 " ).concat( En, ";" ),
          dark: "box-shadow: 0 1px 1px ".concat( pt, ", 0 0 1px " ).concat( st, ";" )
        } ),
        $t = Object( l.a )( {
          light: "box-shadow: 0 4px 8px -2px ".concat( On, ", 0 0 1px " ).concat( En, ";" ),
          dark: "box-shadow: 0 4px 8px -2px ".concat( pt, ", 0 0 1px " ).concat( st, ";" )
        } ),
        Jt = Object( l.a )( {
          light: "box-shadow: 0 8px 16px -4px ".concat( On, ", 0 0 1px " ).concat( En, ";" ),
          dark: "box-shadow: 0 8px 16px -4px ".concat( pt, ", 0 0 1px " ).concat( st, ";" )
        } ),
        Ut = Object( l.a )( {
          light: "box-shadow: 0 12px 24px -6px ".concat( On, ", 0 0 1px " ).concat( En, ";" ),
          dark: "box-shadow: 0 12px 24px -6px ".concat( pt, ", 0 0 1px " ).concat( st, ";" )
        } ),
        Vt = Object( l.a )( {
          light: "box-shadow: 0 20px 32px -8px ".concat( On, ", 0 0 1px " ).concat( En, ";" ),
          dark: "box-shadow: 0 20px 32px -8px ".concat( pt, ", 0 0 1px " ).concat( st, ";" )
        } ),
        qt = function ( n, t ) {
          return "\n  font-size: ".concat( n / Ge(), "em;\n  font-style: inherit;\n  line-height: " ).concat( t / n, ";\n" )
        },
        Zt = function () {
          return Object( c.css )( [ "\n  ", " color: ", ";\n  font-weight: 500;\n  letter-spacing: -0.01em;\n  margin-top: ", "px;\n" ], qt( 35, 40 ), Dt, 6.5 * He() )
        },
        Qt = function () {
          return Object( c.css )( [ "\n  ", " color: ", ";\n  font-weight: 600;\n  letter-spacing: -0.01em;\n  margin-top: ", "px;\n" ], qt( 29, 32 ), Dt, 5 * He() )
        },
        Xt = function () {
          return Object( c.css )( [ "\n  ", " color: ", ";\n  font-weight: 500;\n  letter-spacing: -0.01em;\n  margin-top: ", "px;\n" ], qt( 24, 28 ), Dt, 5 * He() )
        },
        ne = function () {
          return Object( c.css )( [ "\n  ", " color: ", ";\n  font-weight: 500;\n  letter-spacing: -0.008em;\n  margin-top: ", "px;\n" ], qt( 20, 24 ), Dt, 3.5 * He() )
        },
        te = function () {
          return Object( c.css )( [ "\n  ", " color: ", ";\n  font-weight: 600;\n  letter-spacing: -0.006em;\n  margin-top: ", "px;\n" ], qt( 16, 20 ), Dt, 3 * He() )
        },
        ee = function () {
          return Object( c.css )( [ "\n  ", " color: ", ";\n  font-weight: 600;\n  letter-spacing: -0.003em;\n  margin-top: ", "px;\n" ], qt( 14, 16 ), Dt, 2 * He() )
        },
        re = function () {
          return Object( c.css )( [ "\n  ", " color: ", ";\n  font-weight: 600;\n  margin-top: ", "px;\n  text-transform: uppercase;\n" ], qt( 12, 16 ), Dt, 2.5 * He() )
        },
        oe = function () {
          return Object( c.css )( [ "\n  ", " color: ", ";\n  font-weight: 600;\n  margin-top: ", "px;\n" ], qt( 12, 16 ), jt, 2 * He() )
        },
        ie = function () {
          return Object( c.css )( [ "\n  ", " color: ", ";\n  font-weight: 700;\n  margin-top: ", "px;\n" ], qt( 11, 16 ), jt, 2 * He() )
        };

      function ue( n, t ) {
        return function ( e ) {
          return n( e ) + t
        }
      }

      function ce( n, t ) {
        return function ( e ) {
          return n( e ) - t
        }
      }

      function ae( n, t ) {
        return function ( e ) {
          return n( e ) * t
        }
      }

      function de( n, t ) {
        return function ( e ) {
          return n( e ) / t
        }
      }
      var le = e( "VrFO" ),
        fe = e.n( le ),
        se = e( "Y9Ll" ),
        pe = e.n( se ),
        he = e( "N+ot" ),
        ge = e.n( he ),
        me = e( "AuHH" ),
        be = e.n( me ),
        xe = e( "5Yy7" ),
        ve = e.n( xe ),
        ye = e( "1Pcy" ),
        ke = e.n( ye ),
        Ne = e( "KEM+" ),
        Oe = e.n( Ne ),
        Ee = e( "ERkP" ),
        Fe = e.n( Ee ),
        Ae = e( "aWzz" ),
        De = e.n( Ae ),
        je = e( "uPah" ),
        Ce = e.n( je ),
        we = e( "INcg" ),
        Pe = e( "m3Bd" ),
        Te = e.n( Pe );
      var Be, _e, Se, Me = ( Be = function () {
        return {
          mode: "light"
        }
      }, _e = function ( n, t ) {
        return n( t )
      }, Se = Object( Ee.createContext )( Be ), {
        Consumer: function ( n ) {
          n.children;
          var t = Te()( n, [ "children" ] );
          return Fe.a.createElement( Se.Consumer, null, ( function ( e ) {
            var r = e || _e;
            return n.children( r( t ) )
          } ) )
        },
        Provider: function ( n ) {
          return Fe.a.createElement( Se.Consumer, null, ( function ( t ) {
            var e = n.value || _e;
            return Fe.a.createElement( Se.Provider, {
              value: function ( n ) {
                return e( t, n )
              }
            }, n.children )
          } ) )
        }
      } );

      function ze( n ) {
        var t = xt( n );
        return "\n    body { background: ".concat( t, "; }\n  " )
      }

      function Le( n ) {
        return {
          theme: Oe()( {}, we.a, {
            mode: n
          } )
        }
      }
      var Re = c.default.div.withConfig( {
          displayName: "AtlaskitThemeProvider__LegacyReset",
          componentId: "sc-431dkp-0"
        } )( [ "\n  background-color: ", ";\n  color: ", ";\n\n  a {\n    color: ", ";\n  }\n  a:hover {\n    color: ", ";\n  }\n  a:active {\n    color: ", ";\n  }\n  a:focus {\n    outline-color: ", ";\n  }\n  h1 {\n    color: ", ";\n  }\n  h2 {\n    color: ", ";\n  }\n  h3 {\n    color: ", ";\n  }\n  h4 {\n    color: ", ";\n  }\n  h5 {\n    color: ", ";\n  }\n  h6 {\n    color: ", ";\n  }\n  small {\n    color: ", ";\n  }\n" ], xt, Nt, wt, Pt, Tt, Bt, Dt, Dt, Dt, Dt, Dt, jt, Ft ),
        Ie = function ( n ) {
          function t( n ) {
            var e;
            return fe()( this, t ), e = ge()( this, be()( t ).call( this, n ) ), Oe()( ke()( ke()( e ) ), "stylesheet", void 0 ), e.state = Le( n.mode ), e
          }
          return ve()( t, n ), pe()( t, [ {
            key: "getChildContext",
            value: function () {
              return {
                hasAtlaskitThemeProvider: !0
              }
            }
          }, {
            key: "componentWillMount",
            value: function () {
              if ( !this.context.hasAtlaskitThemeProvider && Ce.a.canUseDOM ) {
                var n = ze( this.state );
                this.stylesheet = document.createElement( "style" ), this.stylesheet.type = "text/css", this.stylesheet.innerHTML = n, document && document.head && document.head.appendChild( this.stylesheet )
              }
            }
          }, {
            key: "componentWillReceiveProps",
            value: function ( n ) {
              if ( n.mode !== this.props.mode ) {
                var t = Le( n.mode );
                if ( this.stylesheet ) {
                  var e = ze( t );
                  this.stylesheet.innerHTML = e
                }
                this.setState( t )
              }
            }
          }, {
            key: "componentWillUnmount",
            value: function () {
              this.stylesheet && document && document.head && ( document.head.removeChild( this.stylesheet ), delete this.stylesheet )
            }
          }, {
            key: "render",
            value: function () {
              var n = this.props.children,
                t = this.state.theme;
              return Fe.a.createElement( Me.Provider, {
                value: function () {
                  return {
                    mode: t[ we.a ].mode
                  }
                }
              }, Fe.a.createElement( c.ThemeProvider, {
                theme: t
              }, Fe.a.createElement( Re, null, n ) ) )
            }
          } ] ), t
        }( Ee.Component );
      Oe()( Ie, "defaultProps", {
        mode: we.b
      } ), Oe()( Ie, "childContextTypes", {
        hasAtlaskitThemeProvider: De.a.bool
      } ), Oe()( Ie, "contextTypes", {
        hasAtlaskitThemeProvider: De.a.bool
      } ), e.d( t, "a", ( function () {
        return Ye
      } ) ), e.d( t, "f", ( function () {
        return He
      } ) ), e.d( t, "e", ( function () {
        return Ge
      } ) ), e.d( t, "b", ( function () {
        return We
      } ) ), e.d( t, "g", ( function () {
        return Ke
      } ) ), e.d( t, "c", ( function () {
        return r
      } ) ), e.d( t, "d", ( function () {
        return o
      } ) ), e.d( t, "i", ( function () {
        return i
      } ) ), e.d( t, "h", ( function () {
        return u
      } ) );
      var Ye = function () {
          return 3
        },
        He = function () {
          return 8
        },
        Ge = function () {
          return 14
        },
        We = function () {
          return '"SFMono-Medium", "SF Mono", "Segoe UI Mono", "Roboto Mono", "Ubuntu Mono", Menlo, Consolas, Courier, monospace'
        },
        Ke = {
          card: function () {
            return 100
          },
          dialog: function () {
            return 200
          },
          navigation: function () {
            return 300
          },
          layer: function () {
            return 400
          },
          blanket: function () {
            return 500
          },
          modal: function () {
            return 510
          },
          flag: function () {
            return 600
          },
          spotlight: function () {
            return 700
          },
          tooltip: function () {
            return 800
          }
        }
    },
    nKmF: function ( n, t, e ) {
      "use strict";
      Object.defineProperty( t, "__esModule", {
        value: !0
      } );
      var r = e( "p5va" ),
        o = r.__importStar( e( "ERkP" ) ),
        i = r.__importDefault( e( "KsTJ" ) ),
        u = r.__importDefault( e( "fN3Q" ) ),
        c = e( "OZZf" ),
        a = e( "ejW0" ),
        d = function ( n ) {
          var t = n.size;
          return t ? "height: " + a.sizes[ t ] + "; width: " + a.sizes[ t ] + ";" : null
        };
      t.IconWrapper = i.default.span( l || ( l = r.__makeTemplateObject( [ "\n  ", " color: ", ";\n  display: inline-block;\n  fill: ", ";\n  flex-shrink: 0;\n  line-height: 1;\n\n  > svg {\n    ", " max-height: 100%;\n    max-width: 100%;\n    overflow: hidden;\n    pointer-events: none;\n    vertical-align: bottom;\n  }\n  /* Stop-color doesn't properly apply in chrome when the inherited/current color changes.\n   * We have to initially set stop-color to inherit (either via DOM attribute or an initial CSS\n   * rule) and then override it with currentColor for the color changes to be picked up.\n   */\n  stop {\n    stop-color: currentColor;\n  }\n" ], [ "\n  ", " color: ", ";\n  display: inline-block;\n  fill: ", ";\n  flex-shrink: 0;\n  line-height: 1;\n\n  > svg {\n    ", " max-height: 100%;\n    max-width: 100%;\n    overflow: hidden;\n    pointer-events: none;\n    vertical-align: bottom;\n  }\n  /* Stop-color doesn't properly apply in chrome when the inherited/current color changes.\n   * We have to initially set stop-color to inherit (either via DOM attribute or an initial CSS\n   * rule) and then override it with currentColor for the color changes to be picked up.\n   */\n  stop {\n    stop-color: currentColor;\n  }\n" ] ) ), d, ( function ( n ) {
        return n.primaryColor || "currentColor"
      } ), ( function ( n ) {
        return n.secondaryColor || c.background
      } ), d );
      var l, f = function ( n ) {
        function e() {
          return null !== n && n.apply( this, arguments ) || this
        }
        return r.__extends( e, n ), e.insertDynamicGradientID = function ( n ) {
          var t = u.default();
          return n.replace( /id="([^"]+)-idPlaceholder"/g, "id=$1-" + t ).replace( /fill="url\(#([^"]+)-idPlaceholder\)"/g, 'fill="url(#$1-' + t + ')"' )
        }, e.prototype.render = function () {
          var n = this.props,
            r = n.glyph,
            i = n.dangerouslySetGlyph,
            u = n.primaryColor,
            c = n.secondaryColor,
            a = n.size;
          return i ? o.default.createElement( t.IconWrapper, {
            primaryColor: u,
            secondaryColor: c,
            size: a,
            "aria-label": this.props.label,
            dangerouslySetInnerHTML: {
              __html: e.insertDynamicGradientID( i )
            }
          } ) : o.default.createElement( t.IconWrapper, {
            primaryColor: u,
            secondaryColor: c,
            size: a,
            "aria-label": this.props.label
          }, r ? o.default.createElement( r, {
            role: "presentation"
          } ) : null )
        }, e
      }( o.Component );
      t.default = f
    },
    yLxY: function ( n, t, e ) {
      "use strict";
      Object.defineProperty( t, "__esModule", {
        value: !0
      } ), t.default = void 0;
      var r = i( e( "ERkP" ) ),
        o = i( e( "nKmF" ) );

      function i( n ) {
        return n && n.__esModule ? n : {
          default: n
        }
      }

      function u() {
        return ( u = Object.assign || function ( n ) {
          for ( var t = 1; t < arguments.length; t++ ) {
            var e = arguments[ t ];
            for ( var r in e ) Object.prototype.hasOwnProperty.call( e, r ) && ( n[ r ] = e[ r ] )
          }
          return n
        } ).apply( this, arguments )
      }
      var c = function ( n ) {
        return r.default.createElement( o.default, u( {
          dangerouslySetGlyph: '<svg width="24" height="24" viewBox="0 0 24 24" focusable="false" role="presentation"><g fill-rule="evenodd"><circle fill="currentColor" cx="12" cy="12" r="10"/><path d="M9.707 11.293a1 1 0 1 0-1.414 1.414l2 2a1 1 0 0 0 1.414 0l4-4a1 1 0 1 0-1.414-1.414L11 12.586l-1.293-1.293z" fill="inherit"/></g></svg>'
        }, n ) )
      };
      c.displayName = "CheckCircleIcon";
      var a = c;
      t.default = a
    }
  }
] );
//# sourceMappingURL=132.yG18PeGSYk.js.map
