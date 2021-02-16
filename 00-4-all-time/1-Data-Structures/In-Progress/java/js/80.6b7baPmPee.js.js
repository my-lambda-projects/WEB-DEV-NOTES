/*! License: FQ7fG5UvNu.LICENSE.txt */
( window.webpackJsonp = window.webpackJsonp || [] ).push( [
  [ 80 ], {
    "/mAS": function ( e, t, a ) {
      "use strict";
      a.d( t, "a", ( function () {
        return p
      } ) );
      var n = a( "ERkP" ),
        o = a.n( n ),
        i = a( "cYO7" ),
        l = a( "L3DF" ),
        s = a( "kEG5" );
      const r = ( e, t ) => {
        const a = Object( i.b )( {
          iconGradientStart: t
        } );
        return `<canvas height="32" width="32" aria-hidden="true"></canvas>\n  <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" focusable="false" aria-hidden="true">\n    <defs>\n      <linearGradient x1="94.092%" x2="56.535%" y1="6.033%" y2="43.087%" id="${a}">\n        <stop stop-color="${e}" ${"inherit"===e?'stop-opacity="0.4"':""} offset="18%"></stop>\n        <stop stop-color="${t}" offset="100%"></stop>\n      </linearGradient>\n    </defs>\n    <g stroke="none" stroke-width="1" fill-rule="nonzero">\n      <path d="M26.0406546,5 L14.9983562,5 C14.9983562,6.32163748 15.5233746,7.58914413 16.4579134,8.52368295 C17.3924523,9.45822178 18.6599589,9.98324022 19.9815964,9.98324022 L22.0151159,9.98324022 L22.0151159,11.9465283 C22.0168782,14.6974491 24.2474348,16.9265768 26.9983562,16.9265762 L26.9983562,5.95770152 C26.9983562,5.42877757 26.5695786,5 26.0406546,5 Z" fill="currentColor"></path>\n      <path d="M20.0420436,11 L9,11 C9.00176139,13.7504065 11.2309666,15.9796117 13.9813731,15.9813731 L16.0154337,15.9813731 L16.0154337,17.9451836 C16.0154337,19.2671728 16.5405919,20.5350167 17.4753794,21.4698042 C18.4101669,22.4045917 19.6780108,22.9297499 21,22.9297499 L21,11.9579564 C21,11.4288917 20.5711083,11 20.0420436,11 Z" fill="url(#${a})"></path>\n      <path d="M14.0420436,17 L3,17 C3.00176275,19.7516528 5.23291286,21.9813736 7.98456626,21.9813731 L10.0250133,21.9813731 L10.0250133,23.9451836 C10.0250082,26.6943468 12.2508419,28.9244664 15,28.9297499 L15,17.9579564 C15,17.4288917 14.5711083,17 14.0420436,17 Z" fill="url(#${a})"></path>\n    </g>\n  </svg>`
      };
      class p extends n.Component {
        render() {
          return o.a.createElement( s.a, Object.assign( {}, this.props, {
            svg: r
          } ) )
        }
      }
      p.defaultProps = l.a
    },
    "3gG5": function ( e, t, a ) {
      "use strict";
      var n = a( "l1C2" ),
        o = a( "J1k2" );
      t.a = ( {
        elemBefore: e,
        isRounded: t
      } ) => e ? Object( n.f )( "span", {
        css: [ o.a, t ? o.g : void 0 ]
      }, e ) : null
    },
    "4CAG": function ( e, t, a ) {
      "use strict";
      ( function ( t ) {
        function a( e ) {
          var t, a, o, i, l, s, r = Object.create( null );
          if ( this[ p ] = r, e )
            if ( "string" == typeof e )
              for ( "?" === e.charAt( 0 ) && ( e = e.slice( 1 ) ), l = 0, s = ( i = e.split( "&" ) ).length; l < s; l++ ) - 1 < ( t = ( o = i[ l ] ).indexOf( "=" ) ) ? c( r, d( o.slice( 0, t ) ), d( o.slice( t + 1 ) ) ) : o.length && c( r, d( o ), "" );
            else if ( n( e ) )
            for ( l = 0, s = e.length; l < s; l++ ) c( r, ( o = e[ l ] )[ 0 ], o[ 1 ] );
          else
            for ( a in e ) c( r, a, e[ a ] )
        }
        var n = Array.isArray,
          o = a.prototype,
          i = /[!'\(\)~]|%20|%00/g,
          l = /\+/g,
          s = {
            "!": "%21",
            "'": "%27",
            "(": "%28",
            ")": "%29",
            "~": "%7E",
            "%20": "+",
            "%00": "\0"
          },
          r = function ( e ) {
            return s[ e ]
          },
          p = "__URLSearchParams__:" + Math.random();

        function c( e, t, a ) {
          t in e ? e[ t ].push( "" + a ) : e[ t ] = n( a ) ? a : [ "" + a ]
        }

        function d( e ) {
          return decodeURIComponent( e.replace( l, " " ) )
        }

        function u( e ) {
          return encodeURIComponent( e ).replace( i, r )
        }
        o.append = function ( e, t ) {
            c( this[ p ], e, t )
          }, o.delete = function ( e ) {
            delete this[ p ][ e ]
          }, o.get = function ( e ) {
            var t = this[ p ];
            return e in t ? t[ e ][ 0 ] : null
          }, o.getAll = function ( e ) {
            var t = this[ p ];
            return e in t ? t[ e ].slice( 0 ) : []
          }, o.has = function ( e ) {
            return e in this[ p ]
          }, o.set = function ( e, t ) {
            this[ p ][ e ] = [ "" + t ]
          }, o.forEach = function ( e, t ) {
            var a = this[ p ];
            Object.getOwnPropertyNames( a ).forEach( ( function ( n ) {
              a[ n ].forEach( ( function ( a ) {
                e.call( t, a, n, this )
              } ), this )
            } ), this )
          }, o.toJSON = function () {
            return {}
          }, o.toString = function () {
            var e, t, a, n, o = this[ p ],
              i = [];
            for ( t in o )
              for ( a = u( t ), e = 0, n = o[ t ]; e < n.length; e++ ) i.push( a + "=" + u( n[ e ] ) );
            return i.join( "&" )
          },
          function ( e ) {
            var t = function () {
              try {
                return !!Symbol.iterator
              } catch ( e ) {
                return !1
              }
            }();
            "forEach" in e || ( e.forEach = function ( e, t ) {
              var a = Object.create( null );
              this.toString().replace( /=[\s\S]*?(?:&|$)/g, "=" ).split( "=" ).forEach( ( function ( n ) {
                n.length && !( n in a ) && ( a[ n ] = this.getAll( n ) ).forEach( ( function ( a ) {
                  e.call( t, a, n, this )
                } ), this )
              } ), this )
            } ), "keys" in e || ( e.keys = function () {
              var e = [];
              this.forEach( ( function ( t, a ) {
                e.push( a )
              } ) );
              var a = {
                next: function () {
                  var t = e.shift();
                  return {
                    done: void 0 === t,
                    value: t
                  }
                }
              };
              return t && ( a[ Symbol.iterator ] = function () {
                return a
              } ), a
            } ), "values" in e || ( e.values = function () {
              var e = [];
              this.forEach( ( function ( t ) {
                e.push( t )
              } ) );
              var a = {
                next: function () {
                  var t = e.shift();
                  return {
                    done: void 0 === t,
                    value: t
                  }
                }
              };
              return t && ( a[ Symbol.iterator ] = function () {
                return a
              } ), a
            } ), "entries" in e || ( e.entries = function () {
              var e = [];
              this.forEach( ( function ( t, a ) {
                e.push( [ a, t ] )
              } ) );
              var a = {
                next: function () {
                  var t = e.shift();
                  return {
                    done: void 0 === t,
                    value: t
                  }
                }
              };
              return t && ( a[ Symbol.iterator ] = function () {
                return a
              } ), a
            } ), t && !( Symbol.iterator in e ) && ( e[ Symbol.iterator ] = e.entries ), "sort" in e || ( e.sort = function () {
              for ( var e, t, a, n = this.entries(), o = n.next(), i = o.done, l = [], s = Object.create( null ); !i; ) t = ( a = o.value )[ 0 ], l.push( t ), t in s || ( s[ t ] = [] ), s[ t ].push( a[ 1 ] ), i = ( o = n.next() ).done;
              for ( l.sort(), e = 0; e < l.length; e++ ) this.delete( l[ e ] );
              for ( e = 0; e < l.length; e++ ) t = l[ e ], this.append( t, s[ t ].shift() )
            } )
          }( ( a = e.exports = t.URLSearchParams || a ).prototype )
      } ).call( this, a( "fRV1" ) )
    },
    "4isj": function ( e, t, a ) {
      "use strict";
      Object.defineProperty( t, "__esModule", {
        value: !0
      } ), t.default = void 0;
      var n = i( a( "ERkP" ) ),
        o = i( a( "4KTy" ) );

      function i( e ) {
        return e && e.__esModule ? e : {
          default: e
        }
      }

      function l() {
        return ( l = Object.assign || function ( e ) {
          for ( var t = 1; t < arguments.length; t++ ) {
            var a = arguments[ t ];
            for ( var n in a ) Object.prototype.hasOwnProperty.call( a, n ) && ( e[ n ] = a[ n ] )
          }
          return e
        } ).apply( this, arguments )
      }
      var s = function ( e ) {
        return n.default.createElement( o.default, l( {
          dangerouslySetGlyph: '<svg width="24" height="24" viewBox="0 0 24 24" focusable="false" role="presentation"><g fill="currentColor" fill-rule="evenodd"><rect x="18" y="5" width="2" height="6" rx="1"/><rect x="16" y="7" width="6" height="2" rx="1"/><path d="M5 14c0-1.105.902-2 2.009-2h7.982c1.11 0 2.009.894 2.009 2.006v4.44c0 3.405-12 3.405-12 0V14z"/><circle cx="11" cy="7" r="4"/></g></svg>'
        }, e ) )
      };
      s.displayName = "InviteTeamIcon";
      var r = s;
      t.default = r
    },
    "9QC+": function ( e, t, a ) {
      "use strict";
      Object.defineProperty( t, "__esModule", {
        value: !0
      } ), t.default = void 0;
      var n = i( a( "ERkP" ) ),
        o = i( a( "4KTy" ) );

      function i( e ) {
        return e && e.__esModule ? e : {
          default: e
        }
      }

      function l() {
        return ( l = Object.assign || function ( e ) {
          for ( var t = 1; t < arguments.length; t++ ) {
            var a = arguments[ t ];
            for ( var n in a ) Object.prototype.hasOwnProperty.call( a, n ) && ( e[ n ] = a[ n ] )
          }
          return e
        } ).apply( this, arguments )
      }
      var s = function ( e ) {
        return n.default.createElement( o.default, l( {
          dangerouslySetGlyph: '<svg width="24" height="24" viewBox="0 0 24 24" focusable="false" role="presentation"><path d="M11.701 16.7a5.002 5.002 0 1 1 0-10.003 5.002 5.002 0 0 1 0 10.004m8.368-3.117a1.995 1.995 0 0 1-1.346-1.885c0-.876.563-1.613 1.345-1.885a.48.48 0 0 0 .315-.574 8.947 8.947 0 0 0-.836-1.993.477.477 0 0 0-.598-.195 2.04 2.04 0 0 1-1.29.08 1.988 1.988 0 0 1-1.404-1.395 2.04 2.04 0 0 1 .076-1.297.478.478 0 0 0-.196-.597 8.98 8.98 0 0 0-1.975-.826.479.479 0 0 0-.574.314 1.995 1.995 0 0 1-1.885 1.346 1.994 1.994 0 0 1-1.884-1.345.482.482 0 0 0-.575-.315c-.708.2-1.379.485-2.004.842a.47.47 0 0 0-.198.582A2.002 2.002 0 0 1 4.445 7.06a.478.478 0 0 0-.595.196 8.946 8.946 0 0 0-.833 1.994.48.48 0 0 0 .308.572 1.995 1.995 0 0 1 1.323 1.877c0 .867-.552 1.599-1.324 1.877a.479.479 0 0 0-.308.57 8.99 8.99 0 0 0 .723 1.79.477.477 0 0 0 .624.194c.595-.273 1.343-.264 2.104.238.117.077.225.185.302.3.527.8.512 1.58.198 2.188a.473.473 0 0 0 .168.628 8.946 8.946 0 0 0 2.11.897.474.474 0 0 0 .57-.313 1.995 1.995 0 0 1 1.886-1.353c.878 0 1.618.567 1.887 1.353a.475.475 0 0 0 .57.313 8.964 8.964 0 0 0 2.084-.883.473.473 0 0 0 .167-.631c-.318-.608-.337-1.393.191-2.195.077-.116.185-.225.302-.302.772-.511 1.527-.513 2.125-.23a.477.477 0 0 0 .628-.19 8.925 8.925 0 0 0 .728-1.793.478.478 0 0 0-.314-.573" fill="currentColor" fill-rule="evenodd"/></svg>'
        }, e ) )
      };
      s.displayName = "SettingsIcon";
      var r = s;
      t.default = r
    },
    "B/5b": function ( e, t, a ) {
      "use strict";
      a.d( t, "b", ( function () {
        return h
      } ) ), a.d( t, "a", ( function () {
        return k
      } ) ), a.d( t, "c", ( function () {
        return b
      } ) );
      var n = a( "ERkP" ),
        o = a.n( n ),
        i = a( "KsTJ" ),
        l = a( "przm" ),
        s = a.n( l ),
        r = a( "1whV" ),
        p = a.n( r ),
        c = a( "3IV/" ),
        d = a( "BMbf" ),
        u = a( "ZgvQ" ),
        m = a( "WEdt" ),
        g = a( "FyK+" );
      const f = i.default.div `
  ${m.h200} font-weight: normal;
  font-family: ${Object(d.e)()};
  color: ${e=>e.error?c.R400:e.valid?c.G400:c.N200};
  margin-top: ${Object(u.multiply)(d.h,.5)}px;
  display: flex;
  justify-content: baseline;
`,
        v = i.default.span `
  display: flex;
`,
        h = ( {
          children: e,
          testId: t
        } ) => o.a.createElement( g.FieldId.Consumer, null, a => o.a.createElement( f, {
          id: a ? a + "-helper" : void 0,
          "data-testid": t
        }, e ) ),
        k = ( {
          children: e,
          testId: t
        } ) => o.a.createElement( g.FieldId.Consumer, null, a => o.a.createElement( f, {
          error: !0,
          id: a ? a + "-error" : void 0,
          "data-testid": t
        }, o.a.createElement( v, null, o.a.createElement( p.a, {
          size: "small",
          label: "error"
        } ) ), e ) ),
        b = ( {
          children: e,
          testId: t
        } ) => o.a.createElement( g.FieldId.Consumer, null, a => o.a.createElement( f, {
          valid: !0,
          id: a ? a + "-valid" : void 0,
          "data-testid": t
        }, o.a.createElement( v, null, o.a.createElement( s.a, {
          size: "small",
          label: "success"
        } ) ), e ) )
    },
    C9uy: function ( e, t, a ) {
      "use strict";
      a.d( t, "a", ( function () {
        return p
      } ) );
      var n = a( "ERkP" ),
        o = a.n( n ),
        i = a( "cYO7" ),
        l = a( "L3DF" ),
        s = a( "kEG5" );
      const r = ( e, t ) => {
        const a = Object( i.b )( {
          iconGradientStart: t
        } );
        return `<canvas height="32" width="32" aria-hidden="true"></canvas>\n  <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" focusable="false" aria-hidden="true">\n    <defs>\n      <linearGradient id="${a}" x1="14.8402" y1="15.8324" x2="8.6599" y2="26.5369" gradientUnits="userSpaceOnUse">\n        <stop stop-color="${e}" ${"inherit"===e?'stop-opacity="0.4"':""} offset="0%"></stop>\n        <stop stop-color="${t}" offset="0.9228"></stop>\n      </linearGradient>\n    </defs>\n    <path fill="url(#${a})" d="M11.6397 14.0398C11.2789 13.643 10.7378 13.679 10.4852 14.148L4.64091 25.8728C4.42446 26.3418 4.74912 26.8829 5.25419 26.8829H13.4074C13.6599 26.8829 13.9125 26.7386 14.0207 26.4861C15.7885 22.8424 14.7061 17.3227 11.6397 14.0398Z" />\n    <path fill="inherit" d="M15.9343 3.36124C12.6513 8.55622 12.8678 14.2923 15.0324 18.6215C17.1969 22.9506 18.8565 26.2336 18.9647 26.4861C19.0729 26.7386 19.3254 26.8829 19.578 26.8829H27.7312C28.2363 26.8829 28.597 26.3418 28.3445 25.8728C28.3445 25.8728 17.3774 3.93846 17.0887 3.39732C16.8723 2.89225 16.259 2.85618 15.9343 3.36124Z" />\n  </svg>`
      };
      class p extends n.Component {
        render() {
          return o.a.createElement( s.a, Object.assign( {}, this.props, {
            svg: r
          } ) )
        }
      }
      p.defaultProps = l.a
    },
    CShn: function ( e, t, a ) {
      "use strict";
      a.d( t, "a", ( function () {
        return p
      } ) );
      var n = a( "ERkP" ),
        o = a.n( n ),
        i = a( "cYO7" ),
        l = a( "L3DF" ),
        s = a( "kEG5" );
      const r = ( e, t ) => {
        const a = Object( i.b )( {
          iconGradientStart: t
        } );
        return `<canvas height="32" width="32" aria-hidden="true"></canvas>\n  <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" focusable="false" aria-hidden="true">\n    <defs>\n      <linearGradient id="${a}-1" x1="50%" x2="50%" y1="0%" y2="100%">\n        <stop\n          offset="0%"\n          stop-color="${t}"\n        />\n        <stop\n          offset="82%"\n          stop-color="${e}"\n          ${"inherit"===e?'stop-opacity="0.4"':""}\n        />\n      </linearGradient>\n      <linearGradient id="${a}-2" x1="7.133%" x2="50%" y1="13.352%" y2="58.228%">\n        <stop\n          offset="0%"\n          stop-color="${t}"\n        />\n        <stop\n          offset="100%"\n          stop-color="${e}"\n          ${"inherit"===e?'stop-opacity="0.4"':""}\n        />\n      </linearGradient>\n    </defs>\n    <g fill="none" fill-rule="evenodd">\n      <circle cx="16" cy="10" r="6" fill="url(#${a}-1)" fill-rule="nonzero"/>\n      <path fill="url(#${a}-2)" fill-rule="nonzero" d="M15.4917902,27.8535048 C11.5895108,25.3649677 8.34369777,21.9735337 6.02870456,17.9658651 C5.84991535,17.6419027 5.96743197,17.2343451 6.2912577,17.0553085 L6.31918889,17.0553085 L10.8440409,14.8208136 C11.1613558,14.6649408 11.5451782,14.7822878 11.7210802,15.088953 C14.0054511,18.9171632 17.3801037,21.9767185 21.4132015,23.876104 C19.9238268,25.3786979 18.2733698,26.7125519 16.4917267,27.8535048 C16.1850328,28.0418894 15.7984841,28.0418894 15.4917902,27.8535048 Z"/>\n      <path fill="currentColor" fill-rule="nonzero" d="M16.5084854,27.8535048 C20.4118869,25.3663345 23.6579925,21.9745949 25.971571,17.9658651 C26.1485439,17.6413306 26.0345395,17.23488 25.7146041,17.0497222 L25.6810867,17.0497222 L21.1506484,14.8152274 C20.834975,14.6599316 20.4529644,14.7774733 20.2791954,15.0833668 C17.9924232,18.9191667 14.6087636,21.9817774 10.5647291,23.876104 C12.0560656,25.3787865 13.7083825,26.7126296 15.4917902,27.8535048 C15.802544,28.0488317 16.1977316,28.0488317 16.5084854,27.8535048 Z"/>\n    </g>\n  </svg>`
      };
      class p extends n.Component {
        render() {
          return o.a.createElement( s.a, Object.assign( {}, this.props, {
            svg: r
          } ) )
        }
      }
      p.defaultProps = l.a
    },
    DfCg: function ( e, t, a ) {
      "use strict";
      var n = a( "3IV/" );
      a.d( t, "a", ( function () {
        return n
      } ) );
      var o = a( "bg0W" );
      a.d( t, "b", ( function () {
        return o
      } ) );
      var i = a( "WEdt" );
      a.d( t, "d", ( function () {
        return i
      } ) );
      var l = a( "ZgvQ" );
      a.d( t, "c", ( function () {
        return l
      } ) );
      a( "5kGD" ).a
    },
    EVY7: function ( e ) {
      e.exports = JSON.parse( '{"a":"@atlaskit/tag","b":"11.0.4"}' )
    },
    GLjB: function ( e, t, a ) {
      "use strict";
      a.d( t, "a", ( function () {
        return p
      } ) );
      var n = a( "ERkP" ),
        o = a.n( n ),
        i = a( "cYO7" ),
        l = a( "L3DF" ),
        s = a( "kEG5" );
      const r = ( e, t ) => {
        const a = Object( i.b )( {
          iconGradientStart: t
        } );
        return `<canvas height="32" width="32" aria-hidden="true"></canvas>\n  <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" focusable="false" aria-hidden="true">\n    <defs>\n      <linearGradient x1="60.6779047%" y1="137.626433%" x2="14.341981%" y2="112.08042%" id="${a}-1">\n        <stop stop-color="${e}" ${"inherit"===e?'stop-opacity="0.4"':""} offset="0%"></stop>\n        <stop stop-color="${t}" offset="100%"></stop>\n      </linearGradient>\n      <linearGradient x1="12.3282701%" y1="-53.9760846%" x2="74.1300776%" y2="-33.2553066%" id="${a}-2">\n        <stop stop-color="${e}" ${"inherit"===e?'stop-opacity="0.4"':""} offset="0%"></stop>\n        <stop stop-color="${t}" offset="100%"></stop>\n      </linearGradient>\n    </defs>\n    <g stroke="none" stroke-width="1" fill-rule="nonzero">\n      <path d="M5.21454927,22.0245336 C4.97082816,22.4219865 4.69711061,22.8831818 4.46463817,23.2506383 C4.25655728,23.602269 4.36826343,24.0557627 4.71585838,24.2705174 L9.59028054,27.2701618 C9.76138278,27.3758032 9.96774369,27.4083016 10.1630326,27.3603607 C10.3583215,27.3124197 10.5261749,27.1880564 10.6289074,27.015192 C10.8238843,26.6889807 11.0751045,26.2652809 11.3488221,25.8115847 C13.2798432,22.6244625 15.2221129,23.0144163 18.7241978,24.686718 L23.5573748,26.9851956 C23.7404243,27.0723219 23.9509502,27.0816253 24.1409716,27.0109854 C24.3309931,26.9403455 24.4843191,26.7957811 24.5660052,26.61024 L26.8869801,21.3608623 C27.0509607,20.9859459 26.8841076,20.5487907 26.5120245,20.3784788 C25.4921454,19.8985357 23.4636359,18.942399 21.6376024,18.0612535 C15.0683811,14.8741313 9.48529299,15.0841064 5.21454927,22.0245336 Z" fill="url(#${a}-1)"></path>\n      <path d="M27.0752616,9.74267061 C27.3190367,9.34512979 27.5928148,8.88383241 27.8253387,8.51629467 C28.0334656,8.1645861 27.9217347,7.71099215 27.5740629,7.4961899 L22.6985622,4.49588177 C22.5250856,4.3802891 22.3113292,4.3421035 22.1085604,4.39048341 C21.9057917,4.43886333 21.7323024,4.56944439 21.6297024,4.75090796 C21.4346824,5.07719147 21.1834066,5.50098499 20.9096284,5.9547816 C18.9781801,9.14260899 17.0354806,8.75256893 13.5326208,7.07989715 L8.71337588,4.78466143 C8.53028584,4.69751579 8.31971336,4.68821035 8.1296499,4.75886591 C7.93958645,4.82952147 7.78622651,4.97411777 7.70452227,5.15969994 L5.38303386,10.4102392 C5.21901692,10.7852385 5.38590698,11.2224905 5.75807237,11.3928401 C6.77817714,11.8728894 8.80713551,12.8292376 10.6335731,13.7105781 C17.2192494,16.8946551 22.8035729,16.6846336 27.0752616,9.74267061 Z" fill="url(#${a}-2)"></path>\n    </g>\n  </svg>`
      };
      class p extends n.Component {
        render() {
          return o.a.createElement( s.a, Object.assign( {}, this.props, {
            svg: r
          } ) )
        }
      }
      p.defaultProps = l.a
    },
    HbpH: function ( e, t, a ) {
      "use strict";
      a.r( t );
      var n = {};
      a.r( n ), a.d( n, "zh", ( function () {
        return He
      } ) ), a.d( n, "cs", ( function () {
        return Ze
      } ) ), a.d( n, "da", ( function () {
        return Ye
      } ) ), a.d( n, "nl", ( function () {
        return Xe
      } ) ), a.d( n, "et", ( function () {
        return Qe
      } ) ), a.d( n, "fi", ( function () {
        return et
      } ) ), a.d( n, "fr", ( function () {
        return tt
      } ) ), a.d( n, "de", ( function () {
        return at
      } ) ), a.d( n, "hu", ( function () {
        return nt
      } ) ), a.d( n, "it", ( function () {
        return ot
      } ) ), a.d( n, "ja", ( function () {
        return it
      } ) ), a.d( n, "ko", ( function () {
        return lt
      } ) ), a.d( n, "nb", ( function () {
        return st
      } ) ), a.d( n, "pl", ( function () {
        return rt
      } ) ), a.d( n, "pt_BR", ( function () {
        return pt
      } ) ), a.d( n, "pt_PT", ( function () {
        return ct
      } ) ), a.d( n, "ru", ( function () {
        return dt
      } ) ), a.d( n, "sk", ( function () {
        return ut
      } ) ), a.d( n, "es", ( function () {
        return mt
      } ) ), a.d( n, "sv", ( function () {
        return gt
      } ) ), a.d( n, "th", ( function () {
        return ft
      } ) ), a.d( n, "tr", ( function () {
        return vt
      } ) ), a.d( n, "uk", ( function () {
        return ht
      } ) ), a.d( n, "vi", ( function () {
        return kt
      } ) ), a.d( n, "is", ( function () {
        return bt
      } ) ), a.d( n, "ro", ( function () {
        return yt
      } ) );
      var o = a( "ERkP" ),
        i = a.n( o ),
        l = a( "L21V" ),
        s = a( "z9P0" ),
        r = a( "ORIB" ),
        p = a( "Czhu" ),
        c = a( "IC1n" ),
        d = a.n( c );
      var u = a( "o9O3" );
      const m = {
        confluence: "c",
        jira: "j",
        stride: "s",
        bitbucket: "b",
        trello: "t"
      };

      function g( e ) {
        const t = JSON.stringify( function ( {
          id: e,
          product: t
        } ) {
          return {
            i: e,
            p: t && t in m ? m[ t ] : t
          }
        }( e ) );
        return function ( e ) {
          return null == e ? "" : String( e ).replace( /\+/g, "-" ).replace( /\//g, "_" ).replace( /=/g, "" )
        }( Object( u.a )().btoa( t ) )
      }

      function f( e ) {
        const t = function ( e ) {
            if ( null == e ) return "";
            const t = String( e ).replace( /-/g, "+" ).replace( /_/g, "/" ),
              a = ( 4 - e.length % 4 ) % 4;
            return t + "===".slice( 0, a )
          }( e ),
          a = Object( u.a )().atob( t );
        return function ( e ) {
          const t = {};
          e.i && ( t.id = e.i );
          e.p && ( t.product = function ( e ) {
            const t = Object.keys( m );
            for ( let a = 0; a < t.length; a++ ) {
              const n = t[ a ];
              if ( e === m[ n ] ) return n
            }
            return e
          }( e.p ) );
          return t
        }( JSON.parse( a ) )
      }
      var v = a( "P/pT" );
      const h = {
        originLibrary: "origin-tracing.js@" + v.a
      };
      class k {
        constructor( {
          id: e = k.generateId(),
          product: t,
          dangerouslySkipValidation: a = !1
        } ) {
          this.id = e, this.product = t, a || this.validate()
        }
        static isValidId( e ) {
          return "string" == typeof e && /^[-_a-zA-Z0-9]{1,36}$/.test( e )
        }
        static isValidProduct( e ) {
          return "string" == typeof e && /^[-_a-zA-Z0-9]{1,20}$/.test( e )
        }
        static generateId() {
          return d()().replace( /-/g, "" )
        }
        static createEmpty() {
          return new b
        }
        static createMalformed() {
          return new y
        }
        static fromUrl( e ) {
          let t = new( Object( u.a )().URLSearchParams );
          return C( e, e => {
            t = new( Object( u.a )().URLSearchParams )( e )
          } ), k.fromEncoded( t.get( "atlOrigin" ) )
        }
        static fromEncoded( e ) {
          if ( !e ) return k.createEmpty();
          try {
            return k.decode( e )
          } catch ( t ) {
            return k.createMalformed()
          }
        }
        static removeFromUrl( e ) {
          return C( e, e => {
            const t = new( Object( u.a )().URLSearchParams )( e );
            return t.delete( "atlOrigin" ), t.toString()
          } )
        }
        static decode( e ) {
          const t = f( e );
          return new k( t )
        }
        encode() {
          return g( {
            id: this.id,
            product: this.product
          } )
        }
        addToUrl( e ) {
          return C( e, e => {
            const t = new( Object( u.a )().URLSearchParams )( e );
            return t.set( "atlOrigin", this.encode() ), t.toString()
          } )
        }
        isEmpty() {
          return !1
        }
        isMalformed() {
          return !this.isEmpty() && !this.isValid()
        }
        isValid() {
          return !0
        }
        toAnalyticsAttributes( {
          transformValue: e = ( e => null === e ? void 0 : e ),
          hasGeneratedId: t = !1
        } = {} ) {
          const a = t ? "originIdGenerated" : "originId";
          return Object( p.a )( {
            [ a ]: e( this.id ),
            originProduct: e( this.product )
          }, h )
        }
        validate() {
          if ( !k.isValidId( this.id ) ) throw new TypeError( "Invalid Origin id" );
          if ( !k.isValidProduct( this.product ) ) throw new TypeError( "Missing/invalid Origin product" )
        }
      }
      class b extends k {
        constructor() {
          super( {
            id: null,
            product: null,
            dangerouslySkipValidation: !0
          } )
        }
        isValid() {
          return !1
        }
        isEmpty() {
          return !0
        }
        toAnalyticsAttributes() {
          return Object( p.a )( {}, h )
        }
      }
      class y extends k {
        constructor() {
          super( {
            id: null,
            product: null,
            dangerouslySkipValidation: !0
          } )
        }
        isValid() {
          return !1
        }
        isEmpty() {
          return !1
        }
        toAnalyticsAttributes() {
          return Object( p.a )( {
            originMalformed: !0
          }, h )
        }
      }

      function C( e, t ) {
        return String( e ).replace( /(^[^?]*)(?:\?)?([^#]*?)(#.*|$)$/, ( e, a, n, o ) => {
          let i = t( n );
          return i && ( i = "?" + i ), `${a}${i}${o}`
        } )
      }
      var w = a( "KsTJ" ),
        j = a( "WEdt" ),
        S = a( "3IV/" ),
        E = a( "zJ/j" ),
        I = a( "BMbf" );
      const z = e => e * Object( I.h )(),
        A = w.default.div `
  margin-top: ${z(2)}px;
`,
        x = w.default.div `
  position: relative;
  max-width: ${z(44.25)}px;
  margin: 0 auto;
`,
        O = w.default.h3 `
  padding: ${z(3)}px 0 0;
  ${Object(j.h600)()}
`,
        M = w.default.p `
  margin-top: ${z(1)}px;
`,
        P = w.default.form `
  margin-top: 0;
`;

      function T( e ) {
        return i.a.createElement( E.a, e )
      }
      const L = Object( w.default )( T )
      `
  /* increase specificity to override default Button styles */
  && {
    margin-top: ${z(2.25)}px;
    padding-left: 0 !important;
    height: auto !important;
    line-height: 1.5 !important;
  }
`, N = w.default.div `
  display: flex;
  flex-flow: ${e=>"right"===e.align?"row-reverse":"row"};
  margin: ${z(3)}px 0;

  button {
    margin-left: ${e=>"right"===e.align?z(1.25):"0"}px;
    margin-right: ${e=>"right"===e.align?"0":z(1.25)}px;
  }
`, B = ( w.default.div `
  position: absolute;
  top: ${z(2.5)}px;
  right: 0;
  cursor: pointer;
`, w.default.div `
  display: flex;
  justify-content: center;
  align-content: center;
  margin: ${z(10)}px;
  min-height: 302px;
  overflow-y: auto;
` ), D = w.default.label `
  ${j.h200}
`, R = w.default.span `
  font-size: 11px;
  color: ${S.N300};
`, q = w.default.hr `
  border: none;
  position: relative;
  text-align: center;
  font-size: 16px;
  font-weight: 400;
  margin: 0 100px;
  line-height: 1em;
  height: 1.5em;
  ::before {
    content: '';
    position: absolute;
    left: 0;
    top: 50%;
    width: 100%;
    background-color: ${S.N200};
    height: 1px;
  }
  ::after {
    content: attr(data-content);
    display: inline-block;
    position: relative;
    padding: 0 10px;
    color: ${S.N200};
    background-color: #fff;
    line-height: 1.5em;
  }
`, F = Object( w.default )( T )
      `
  height: 40px !important;
  width: 100% !important;
  display: flex;
  justify-content: center !important;
  align-items: center !important;
  color: ${S.N500};
  font-weight: 500;
  box-shadow: rgba(0, 0, 0, 0.2) 1px 1px 5px 0 !important;
  background-color: #fff;
  vertical-align: baseline;
  margin: 20px 0;
`, G = w.default.img `
  height: 18px;
  width: 18px;
  margin-right: 8px;
  margin-bottom: -4px;
`;
      let $, _, V, U;
      ! function ( e ) {
        e.USER = "user", e.PRODUCT_ACCESS = "productAccess", e.INVITE = "invite", e.INVITE_REQUEST = "inviteRequest", e.LINK = "link", e.BUTTON = "button", e.PERMS = "permissions", e.INVITE_CAPABILITIES = "inviteCapabilities", e.INVITE_PEOPLE_FEATURE = "feature", e.DROPDOWN_ITEM = "dropdownItem", e.DROPDOWN = "dropdown", e.GSYNC_CONFIGURABLE = "gsyncConfigurable", e.INVITEE_LIST = "inviteeList", e.THIRD_PARTY_INVITES = "thirdPartyInvites", e.THIRD_PARTY_INTEGRATIION = "thirdPartyIntegration", e.EMAIL_INPUT = "emailInput"
      }( $ || ( $ = {} ) ),
      function ( e ) {
        e.CLICKED = "clicked", e.INVITED = "invited", e.REQUESTED = "requested", e.FAILED = "failed", e.SUCCEEDED = "succeeded", e.EXPOSED = "exposed", e.OPENED = "opened", e.SKIPPED = "skipped", e.CONNECTED = "connected", e.CHANGED = "changed"
      }( _ || ( _ = {} ) ),
      function ( e ) {
        e.ADD_PEOPLE = "addPeople", e.SLACK_CONNECT_MODAL = "slackConnectModal"
      }( V || ( V = {} ) ),
      function ( e ) {
        e.EXPERIMENT = "experiment", e.CONTROL = "control", e.NOT_ENROLLED = "not-enrolled"
      }( U || ( U = {} ) );
      const W = "/growth/invite-from-any-integration";
      var J = a( "GLjB" ),
        K = a( "gSNA" ),
        H = a( "cYO7" ),
        Z = a( "L3DF" ),
        Y = a( "kEG5" );
      const X = ( e, t ) => {
        const a = Object( H.b )( {
          iconGradientStart: t
        } );
        return `<canvas height="32" width="32" aria-hidden="true"></canvas>\n  <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" focusable="false" aria-hidden="true">\n    <defs>\n      <linearGradient x1="40.063%" x2="69.955%" y1="0%" y2="50%" id="${a}">\n        <stop stop-color="${e}" ${"inherit"===e?'stop-opacity="0.4"':""} offset="0%"></stop>\n        <stop stop-color="${t}" offset="100%"></stop>\n      </linearGradient>\n    </defs>\n    <g stroke="none" stroke-width="1" fill-rule="nonzero">\n      <path d="M18.4838727,13.07 L26.3504842,13.1005351 C26.8138769,13.102696 27.2364009,13.3661074 27.4423455,13.781227 C27.64829,14.1963467 27.6024124,14.6921363 27.3237913,15.0624169 L15.7128101,30.5666265 C13.9597489,29.2574035 12.7986975,27.3052951 12.485161,25.1398891 C12.1716246,22.974483 12.731296,20.7732253 14.041012,19.0205325 L18.4838727,13.07 Z" fill="url(#${a})"></path>\n      <path d="M14.0396053,19.0156579 L6.22105263,18.9660526 C5.75779361,18.9638923 5.33539149,18.700557 5.12950634,18.2855571 C4.92362119,17.8705572 4.96948557,17.3749106 5.24802632,17.0047368 L16.7411842,1.65 C18.4937397,2.9588453 19.6544561,4.91039056 19.9679021,7.0751719 C20.2813481,9.23995324 19.7218382,11.4405759 18.4125,13.1927632 L14.0396053,19.0156579 Z" fill="currentColor"></path>\n    </g>\n  </svg>`
      };
      class Q extends o.Component {
        render() {
          return i.a.createElement( Y.a, Object.assign( {}, this.props, {
            svg: X
          } ) )
        }
      }
      Q.defaultProps = Z.a;
      var ee = a( "S4tU" ),
        te = a( "/mAS" ),
        ae = a( "Uxiq" ),
        ne = a( "fcPp" ),
        oe = a( "scnH" ),
        ie = a( "CShn" ),
        le = a( "C9uy" );
      const se = () => !window.location.host.includes( "-dev.com" ),
        re = se() ? "https://admin.atlassian.com" : "http://admin.stg.atlassian.com",
        pe = /^[\w]{1,}[\w.+-]{0,}@[\w-]{1,}([.][\w-]{2,})*[.][a-zA-Z]{2,}$/,
        ce = e => pe.test( e ),
        de = e => {
          const t = e.split( ":" ),
            a = t[ 2 ],
            n = t[ 4 ],
            [ o, ...i ] = n.split( "/" );
          return {
            resourceOwner: a,
            resourceType: o,
            resourceId: i.join( "/" )
          }
        },
        ue = e => {
          try {
            const {
              resourceOwner: t
            } = de( e );
            return t
          } catch ( t ) {
            return
          }
        },
        me = e => {
          switch ( e ) {
            case "confluence":
              return "Confluence";
            case "jira-incident-manager":
              return "Jira Incident Manager";
            case "jira-core":
              return "Jira Core";
            case "jira-servicedesk":
              return "Jira Service Management";
            case "jira-software":
              return "Jira Software";
            case "jira":
              return "Jira";
            case "opsgenie":
              return "Opsgenie";
            case "statuspage":
              return "Statuspage";
            case "trello":
              return "Trello";
            case "bitbucket":
              return "Bitbucket";
            case "compass":
              return "Compass";
            default:
              return e || "Atlassian"
          }
        },
        ge = e => {
          const t = ue( e );
          return me( t || "" )
        },
        fe = e => ( e || "" ).toLowerCase().startsWith( "en" ),
        ve = ( e = 0 ) => {
          const t = [];
          for ( let a = 0; a < e; a++ ) t.push( "" );
          return t
        };
      var he = a( "eWMb" );
      class ke {
        isPermissionPermitted( e ) {
          try {
            const {
              permissionId: t,
              cloudId: a
            } = e, n = {
              path: "permissions/permitted",
              requestInit: {
                method: "post",
                headers: {
                  "Content-Type": "application/json; charset=UTF-8"
                },
                body: JSON.stringify( {
                  permissionId: t,
                  resourceId: "ari:cloud:platform::site/" + a
                } )
              }
            };
            return he.utils.requestService( {
              url: "/gateway/api"
            }, n )
          } catch ( t ) {
            throw t.message = `Error while checking permitted permission for resource: ${t.message}!`, t
          }
        }
        async getUserRole( e ) {
          try {
            const [ {
              permitted: t
            }, {
              permitted: a
            } ] = await Promise.all( [ this.isPermissionPermitted( {
              permissionId: "invite-users",
              cloudId: e
            } ), this.isPermissionPermitted( {
              permissionId: "manage",
              cloudId: e
            } ) ] );
            let n;
            return n = t && a ? "admin" : t && !a ? "trusted" : "basic", {
              role: n,
              isInviteUsersPermitted: t,
              isManagePermitted: a
            }
          } catch ( t ) {
            return {
              role: "basic",
              errorMessage: `Error while getting user role: ${t.message}!`
            }
          }
        }
      }
      new ke;
      const be = new class {
          async inviteUsers( e ) {
            try {
              const t = await fetch( "/gateway/api/invitations/invite", {
                  method: "POST",
                  headers: {
                    "Content-Type": "application/json"
                  },
                  body: JSON.stringify( e )
                } ),
                a = await t.json();
              return t.ok ? this.handleInviteUsersSuccessResponse( a ) : this.handleInviteUsersFailureResponse( a )
            } catch ( t ) {
              throw t.message = `Error while inviting users: ${t.message}!`, t
            }
          }
          async inviteCapabilities( e ) {
            const t = "/gateway/api/invitations/capabilities?resource=" + ( "ari:cloud:platform::site/" + e );
            try {
              const e = await fetch( t ),
                a = await e.json();
              return e.ok ? this.handleCapabilitiesResponse( a ) : []
            } catch ( a ) {
              throw a.message = `Error while getting product list: ${a.message}!`, a
            }
          }
          handleCapabilitiesResponse( e ) {
            let t = [];
            return e.directInvite.permittedResources && t.push( ...e.directInvite.permittedResources ), e.invitePendingApproval.permittedResources && t.push( ...e.invitePendingApproval.permittedResources ), Array.from( new Set( t ) ).map( e => ( {
              name: ge( e ),
              id: ue( e ) || "",
              ari: e
            } ) )
          }
          handleInviteUsersFailureResponse( e ) {
            return {
              failure: e
            }
          }
          hasUser( e, t ) {
            return e.some( e => e.email === t.email )
          }
          handleInviteUsersSuccessResponse( e ) {
            return e.reduce( ( e, t ) => {
              const a = {
                id: t.id,
                email: t.email
              };
              return Object.keys( t.results ).forEach( n => {
                switch ( t.results[ n ] ) {
                  case "INVITED":
                  case "USER_EXISTS":
                    this.hasUser( e.invited, a ) || e.invited.push( a );
                    break;
                  case "INVITED_PENDING_APPROVAL":
                  case "PENDING_INVITE_EXISTS":
                    this.hasUser( e.accessRequested, a ) || e.accessRequested.push( a );
                    break;
                  case "NOT_INVITED":
                  case "ERROR":
                    e.error.push( Object( p.a )( Object( p.a )( {}, a ), {}, {
                      error: t.errorReasons[ n ]
                    } ) )
                }
              } ), e
            }, {
              invited: [],
              accessRequested: [],
              error: []
            } )
          }
        },
        ye = new ke,
        Ce = new class {
          async isScimConfigured( e ) {
            const t = "/gateway/api/adminhub/external-directory/manage-directory?orgId=" + e,
              a = await fetch( t );
            if ( !a.ok ) return Promise.reject( "Unable to get SCIM configuration" );
            return 0 !== ( await a.json() ).length
          }
          async isSingleSiteOrg( e ) {
            const t = "/gateway/api/adminhub/organization/" + e,
              a = await fetch( t );
            if ( !a.ok ) return Promise.reject( "Unable to determine number of sites" );
            const {
              sites: n
            } = await a.json();
            return 1 === n.length
          }
          async getOrgId( e ) {
            const t = `/gateway/api/adminhub/sites/${e}/linked-org`,
              a = await fetch( t );
            if ( !a.ok ) return Promise.reject( "Error fetching linked OrgID" );
            const {
              id: n
            } = await a.json();
            return n
          }
          async siteMeetsGsyncPreconditions( e, t ) {
            try {
              t || ( t = await this.getOrgId( e ) );
              const [ a, n ] = await Promise.all( [ this.isSingleSiteOrg( t ), this.isScimConfigured( t ) ] );
              return a && !n
            } catch ( a ) {
              return !1
            }
          }
        },
        we = new class {
          async getExistingIntegrations() {
            const e = `/gateway/api${W}/integrations`,
              t = await fetch( e );
            return t.ok ? t.json() : Promise.reject( new Error( "Unable to fetch existing integrations" ) )
          }
          async search( e ) {
            const t = `/gateway/api${W}/search?query=${e}`,
              a = await fetch( t );
            if ( !a.ok ) return Promise.reject( new Error( "Unable to fetch users query response" ) );
            return ( await a.json() ).map( e => ( {
              id: e.email,
              email: e.email,
              name: e.displayName,
              publicName: e.displayName,
              avatarUrl: e.avatarUrl,
              type: "user",
              isExternal: !0,
              sources: e.sources
            } ) )
          }
          async fetchSlackWorkspaces( e, t ) {
            const a = `/gateway/api${W}/slack-workspaces?cloudId=${e}&product=${t}`,
              n = await fetch( a );
            if ( !n.ok ) return Promise.reject( new Error( "Unable to fetch slack workspaces query response" ) );
            return ( await n.json() ).teams
          }
          async fetchSlackUsers( e, t, a ) {
            const n = `/gateway/api${W}/slack-conversations?cloudId=${e}&teamId=${a}&product=${t}`,
              o = await fetch( n );
            if ( !o.ok ) return Promise.reject( new Error( "Unable to fetch slack users query response" ) );
            return ( await o.json() ).dms.map( e => ( {
              id: e.email,
              email: e.email,
              name: e.name,
              publicName: e.displayName,
              avatarUrl: e.avatarUrl,
              type: "user",
              isExternal: !0,
              sources: [ "slack" ]
            } ) )
          }
        },
        je = new class {
          async getAccountInfo() {
            const e = await fetch( "/gateway/api/me" );
            return e.ok ? e.json() : Promise.reject( new Error( "Unable to fetch account info" ) )
          }
        };
      var Se = a( "97Jx" ),
        Ee = a.n( Se ),
        Ie = a( "lbXe" ),
        ze = a( "1whV" ),
        Ae = a.n( ze ),
        xe = a( "XFpn" ),
        Oe = a.n( xe ),
        Me = a( "q4aH" ),
        Pe = a.n( Me ),
        Te = a( "XE07" ),
        Le = a.n( Te ),
        Ne = a( "DfCg" );
      const Be = [ "jira", "confluence" ],
        De = "slack-invites",
        Re = {
          keys: [ "displayName", "name", "email" ],
          threshold: .2
        },
        qe = [ "jira", "confluence" ],
        Fe = Object( l.f )( {
          formTitle: {
            id: "people-and-teams.invite-people.form.title",
            defaultMessage: "Invite your teammates",
            description: "A title for the invite users form"
          },
          usersFormTitle: {
            id: "people-and-teams.invite-people.users.form.title",
            defaultMessage: "Add your teammates",
            description: "A title for the invite users form"
          },
          formTitleProduct: {
            id: "people-and-teams.invite-people.form.title.product",
            defaultMessage: "Invite your teammates to {product}",
            description: "A title for the invite users form stating to which product users should be invited"
          },
          usersFormTitleProduct: {
            id: "people-and-teams.invite-people.users.form.title.product",
            defaultMessage: "Add your teammates to {product}",
            description: "A title for the invite users form stating to which product users should be added"
          },
          formDescription: {
            id: "people-and-teams.invite-people.users.form.description.new",
            defaultMessage: "People you add will receive an invite automatically or after your site admin has approved the request.",
            description: "Description for the invite people form for basic user with no invite permission"
          },
          addMoreButton: {
            id: "people-and-teams.invite-people.form.addMoreButton",
            defaultMessage: "+ Add more",
            description: "Text for Add more invite fields button"
          },
          sendInviteButton: {
            id: "people-and-teams.invite-people.form.sendButton",
            defaultMessage: "Invite teammates",
            description: "Text for Send invite button"
          },
          usersSendInviteButton: {
            id: "people-and-teams.invite-people.users.form.sendButton",
            defaultMessage: "Add teammates",
            description: "Text for Send invite button"
          },
          cancelButton: {
            id: "people-and-teams.invite-people.form.cancelButton",
            defaultMessage: "Cancel",
            description: "Text for cancel invite button"
          },
          invalidEmailMessage: {
            id: "people-and-teams.invite-people.form.invalid-email-message",
            defaultMessage: "Please enter a valid email address",
            description: "Error message to be shown when the users adds an invalid email address"
          },
          emptyEmailMessage: {
            id: "people-and-teams.invite-people.form.empty-email-message",
            defaultMessage: "Please add at least one email address",
            description: "Error message to be shown when the user tries to submit the invite form without add any email"
          },
          noProductSelectedMessage: {
            id: "people-and-teams.invite-people.form.no-product-selected-message",
            defaultMessage: "Please select a product",
            description: "Error message to be shown when the user tries to submit the invite form with no product selected"
          },
          selectProducts: {
            id: "people-and-teams.invite-people.form.select-products.label",
            defaultMessage: "Select products",
            description: "Label for product select field"
          },
          jiraCoreMessage: {
            id: "people-and-teams.invite-people.form.jira-core-message",
            defaultMessage: "Jira Core is included with other Jira products.",
            description: "Warning message to be shown when the user select any of the Jira products"
          },
          emailInputLabel: {
            id: "people-and-teams.invite-people.form.email-input-label",
            defaultMessage: "Email address",
            description: "Label to the field where the user will add the email"
          },
          genericSuccessFlagTitle: {
            id: "people-and-teams.invite-people.flag.generic-success-flag-title",
            defaultMessage: "Success"
          },
          inviteSuccessFlagDescription: {
            id: "people-and-teams.invite-people.flag.invite-success-flag-description",
            defaultMessage: "You've invited {inviteCount, plural, one {{emailInvited}} few {{inviteCount} people} many {{inviteCount} people} other {{inviteCount} people}} {productCount, plural, one { to {product}.} few {} many {} other {}}"
          },
          requestAccessSuccessFlagDescription: {
            id: "people-and-teams.invite-people.flag.request-access-success-flag-description",
            defaultMessage: "You've requested access for {requestAccessCount, plural, =0 {no one} one {{emailRequestedAccess}} other {{requestAccessCount} people}}."
          },
          hybridSuccessFlagDescription: {
            id: "people-and-teams.invite-people.flag.hybrid-success-flag-description",
            defaultMessage: "You've invited {inviteCount, plural, one {{emailInvited}} other {{inviteCount} people}} and requested access for {requestAccessCount, plural, one {{emailRequestedAccess}} other {{requestAccessCount} others}}."
          },
          genericFailedFlagTitle: {
            id: "people-and-teams.invite-people.flag.generic-failed-flag-title",
            defaultMessage: "Something went wrong"
          },
          genericFailedFlagDescription: {
            id: "people-and-teams.invite-people.flag.generic-failed-flag-description",
            defaultMessage: "We couldn't send any access requests or invitations. {isAdmin, select, true {Contact your admin for help.} false {}}"
          },
          inviteFailedFlagTitle: {
            id: "people-and-teams.invite-people.flag.invite-failed-flag-title",
            defaultMessage: "{failedInviteCount, plural, one {Invite} other {Invites}} {isAdmin, select, true {not sent} false {failed}}"
          },
          inviteFailedFlagDescription: {
            id: "people-and-teams.invite-people.flag.invite-failed-flag-description",
            defaultMessage: "{failedInviteCount, plural, one {We couldn't invite {emailFailedToInvite}.} other {We couldn't send any invitations.}} {isAdmin, select, false {Contact your admin for help.} true {}}"
          },
          licenceExceededFlagTitle: {
            id: "people-and-teams.invite-people.flag.licence-exceeded-flag-title",
            defaultMessage: "Invites not sent"
          },
          licenceExceededFlagDescription: {
            id: "people-and-teams.invite-people.flag.licence-exceeded-flag-description",
            defaultMessage: "{userRole, select, admin {We couldn't invite anyone because you've reached your user limit.} trusted {We couldn't invite anyone because you've reached your user limit. Contact your admin for help.} other {You can't invite anyone. Ask your admin to upgrade your plan.}}"
          },
          contactSupportActionLabel: {
            id: "people-and-teams.invite-people.flag.contact-support-action-label",
            defaultMessage: "Contact support"
          },
          viewUsersActionLabel: {
            id: "people-and-teams.invite-people.flag.view-users-action-label",
            defaultMessage: "View users"
          },
          upgradePlanActionLabel: {
            id: "people-and-teams.invite-people.flag.upgrade-plan-action-label",
            defaultMessage: "Upgrade plan"
          },
          jiraCoreOptionSubText: {
            id: "people-and-teams.invite-people.jira.core.option.subtext",
            defaultMessage: "Included with other Jira products"
          },
          selectPlaceholder: {
            id: "people-and-teams.invite-people.product.select.placeholder",
            defaultMessage: "What product are you inviting people to?"
          },
          selectAllOption: {
            id: "people-and-teams.invite-people.product.select.alloption",
            defaultMessage: "Select all"
          },
          googleSyncButton: {
            id: "people-and-teams.invite-people.google.sync.button",
            defaultMessage: "Sync users from Google",
            description: "Redirects the user to the Admin Hub Google Workspace configuration, so they can sync their Google Workspace users with their Atlassian site."
          },
          gsyncButtonSeparator: {
            id: "people-and-teams.invite-people.google.sync.button.separator",
            defaultMessage: "OR",
            description: "Separator message indicating an alternative between using the Sync with Google button vs. filling out the rest of the form."
          },
          inviteeListUserPickerPlaceholder: {
            id: "people-and-teams.invite-people.form.invitee-list.user-picker.placeholder",
            defaultMessage: "Enter user's name or email address",
            description: "Placeholder to show in user picker in invitee list"
          },
          inviteeListUserPickerEmailPlaceholder: {
            id: "people-and-teams.invite-people.form.invitee-list.user-picker.email.placeholder",
            defaultMessage: "Enter email address",
            description: "Placeholder to show in user picker in invitee list when no integrations are connected"
          },
          inviteeListLabel: {
            id: "people-and-teams.invite-people.form.invitee-list.label",
            defaultMessage: "Add with email",
            description: "Label to be shown above the invitee list text field."
          },
          inviteeListLabelThirdParty: {
            id: "people-and-teams.invite-people.form.invitee-list-third-party.label",
            defaultMessage: "Find teammates",
            description: "Label to be shown above the invitee list user picker field."
          },
          inviteeListLabelThirdPartyNoIntegrations: {
            id: "people-and-teams.invite-people.form.invitee-list-third-party.no-integrations.label",
            defaultMessage: "Add with email",
            description: "Label to be shown above the invitee list user picker field when no integrations are connected."
          },
          invalidMultipleEmailMessage: {
            id: "people-and-teams.invite-people.form.invalid-multiple-email-message",
            defaultMessage: "To send your invites, please correct any invalid addresses.",
            description: "Error message to be shown when the users adds an invalid email address to the multiple email input"
          },
          tooManyEmailAddresses: {
            id: "people-and-teams.invite-people.form.too-many-email-addresses",
            defaultMessage: "You can only send up to 10 email invites at once.",
            description: "Error message to be shown when the users adds an invalid email address to the multiple email input"
          },
          inviteeListNote: {
            id: "people-and-teams.invite-people.form.invitee-list.note",
            defaultMessage: "Enter up to 10 email addresses, separated by a comma.",
            description: "Note to be shown below the invitee list text field."
          },
          googleThirdPartyConnectedTooltip: {
            id: "people-and-teams.invite-people.thirdparty.google.connected.tooltip",
            defaultMessage: "Disconnect Google",
            description: "Tooltip to show over unlink icon for google integration"
          },
          googleThirdPartyButton: {
            id: "people-and-teams.invite-people.thirdparty.google.button",
            defaultMessage: "Google",
            description: "Starts a connection flow between the users atlassian account to his google account in order to invite google users to atlassian"
          },
          microsoftThirdPartyConnectedTooltip: {
            id: "people-and-teams.invite-people.thirdparty.microsoft.connected.tooltip",
            defaultMessage: "Disconnect Microsoft",
            description: "Tooltip to show over unlink icon for microsoft integration"
          },
          microsoftThirdPartyButton: {
            id: "people-and-teams.invite-people.thirdparty.microsoft.button",
            defaultMessage: "Microsoft",
            description: "Starts a connection flow between the users atlassian account to his microsoft account in order to invite microsoft users to atlassian"
          },
          slackThirdPartyConnectedTooltip: {
            id: "people-and-teams.invite-people.thirdparty.slack.connected.tooltip",
            defaultMessage: "Manage this connection",
            description: "Tooltip to show over cog icon for slack integration"
          },
          slackThirdPartyButton: {
            id: "people-and-teams.invite-people.thirdparty.slack.button",
            defaultMessage: "Slack",
            description: "Opens a modal allowing the user to connect third party invites to one of his conneted slack workspaces"
          },
          thirdPartyConnect: {
            id: "people-and-teams.invite-people.thirdparty-footer.connect.label",
            defaultMessage: "Connect more teammates from",
            description: "Label telling to user to connect more teammates from listed integrations"
          },
          thirdPartyConnectTeammates: {
            id: "people-and-teams.invite-people.thirdparty-connect.connect.label",
            defaultMessage: "Connect teammates from",
            description: "Label telling to user to connect teammates from listed integrations"
          },
          thirdPartyConnectedTo: {
            id: "people-and-teams.invite-people.thirdparty.connect-to.label",
            defaultMessage: "Connected to",
            description: "Label on list of connected third party sources for user invitess"
          },
          thirdPartyOr: {
            id: "people-and-teams.invite-people.thirdparty.connect.or.label",
            defaultMessage: "OR",
            description: "Label on that lets user select between connecting integrations or just inviting"
          },
          slackWorkspacesConnectDialogHeading: {
            id: "people-and-teams.invite-people.slack.workspaces.connect.dialog.heading",
            defaultMessage: "Connect Slack workspace",
            description: "Heading for the Connect Slack workspaces dialog"
          },
          slackWorkspacesManageDialogHeading: {
            id: "people-and-teams.invite-people.slack.workspaces.manage.dialog.heading",
            defaultMessage: "Manage Slack connection",
            description: "Heading for the Manage Slack workspaces dialog"
          },
          slackWorkspacesDialogBody: {
            id: "people-and-teams.invite-people.slack.workspaces.dialog.body",
            defaultMessage: "Select one workspace that you’d like to invite users from.",
            description: "Body for the Slack workspaces dialog"
          },
          slackWorkspacesDialogDisconnectSlack: {
            id: "people-and-teams.invite-people.slack.workspaces.dialog.disconnect.slack",
            defaultMessage: "Disconnect Slack",
            description: "Text for the Disconnect Slack link on the Slack workspaces dialog"
          },
          slackWorkspacesDoneButton: {
            id: "people-and-teams.invite-people.slack.workspaces.dialog.connet-workspace",
            defaultMessage: "Connect workspace",
            description: "Text for connectioon button in slack workspace selection dialog"
          },
          slackWorkspacesDisconnectDialogHeading: {
            id: "people-and-teams.invite-people.slack.workspaces.disconnect.dialog.heading",
            defaultMessage: "Disconnect Slack",
            description: "Title for the Disconnect Slack workspaces dialog"
          },
          slackWorkspacesDisconnectDialogBody: {
            id: "people-and-teams.invite-people.slack.workspaces.disconnect.dialog.body",
            defaultMessage: "You're about to disconnect this Slack workspace and limit your ability to search through its contacts.",
            description: "text too shoow in the body of the Disconnect Slack workspaces dialog"
          },
          disconnectButton: {
            id: "people-and-teams.invite-people.slack.disconnect.dialog.disconnect.button",
            defaultMessage: "Disconnect",
            description: "Text for Disconnect slack button"
          },
          slackConnectSuccessFlagTitle: {
            id: "people-and-teams.invite-people.flag.slack-connect-success-flag-title",
            defaultMessage: "‘{workspace}’ from Slack connected",
            description: "Flag header for slack connection"
          },
          slackConnectSuccessFlagDescription: {
            id: "people-and-teams.invite-people.flag.slack-connect-success-flag-description",
            defaultMessage: "You can now search through this workspace’s list of contacts.",
            description: "Flag description for slack connection"
          },
          slackDisconnectSuccessFlagTitle: {
            id: "people-and-teams.invite-people.flag.slack-disconnect-success-flag-title",
            defaultMessage: "Slack disconnected",
            description: "Flag header for slack disconnection"
          },
          slackDiscnnectSuccessFlagDescription: {
            id: "people-and-teams.invite-people.flag.slack-disconnect-success-flag-description",
            defaultMessage: "You can no longer search through this workspace’s list of contacts.",
            description: "Flag description for slack disconnection"
          },
          microsoftConnectSuccessFlagTitle: {
            id: "people-and-teams.invite-people.flag.microsoft-connect-success-flag-title",
            defaultMessage: "Microsoft connected",
            description: "Flag header for successful microsoft connection"
          },
          microsoftConnectSuccessFlagDescription: {
            id: "people-and-teams.invite-people.flag.microsoft-connect-success-flag-description",
            defaultMessage: "You can now search through its list of contacts.",
            description: "Flag description for successful microsoft connection"
          },
          googleConnectSuccessFlagTitle: {
            id: "people-and-teams.invite-people.flag.google-connect-success-flag-title",
            defaultMessage: "Google Workspace connected",
            description: "Flag header for successful google workspace connection"
          },
          googleConnectSuccessFlagDescription: {
            id: "people-and-teams.invite-people.flag.google-connect-success-flag-description",
            defaultMessage: "You can now search through its list of contacts.",
            description: "Flag description for successful google workspace connection"
          },
          googleGsyncTooltipContent: {
            id: "people-and-teams.invite-people.tooltip.google-connect-gsync",
            defaultMessage: "Sync from Google Workspace",
            description: "Tooltip content shown on third party google button for admins that can set up gsync"
          },
          googleUserTooltipContent: {
            id: "people-and-teams.invite-people.tooltip.google-connect-user",
            defaultMessage: "Connect from Google Workspace",
            description: "Tooltip content shown on thirdd party google button for users"
          },
          jiraProjectSettingsLabel: {
            id: "people-and-teams.invite-people.flag.jira-project-settings-action-label",
            defaultMessage: "{jiraProjectName} settings"
          },
          inviteToJiraProjectSuccessFlagTitle: {
            id: "people-and-teams.invite-people.flag.invite-to-jira-project-success-flag-title",
            defaultMessage: "{inviteCount, plural, one {Invite} other {Invites}} sent"
          },
          inviteToJiraProjectSuccessFlagDescription: {
            id: "people-and-teams.invite-people.flag.invite-to-jira-project-success-flag-description",
            defaultMessage: "You've invited {inviteCount, plural, one {{emailInvited}} few {{inviteCount} people} many {{inviteCount} people} other {{inviteCount} people}}. {isAdmin, select, true {Add them to project {jiraProjectName}} false {Ask an admin to add them to this project}} to start collaborating."
          },
          requestAccessToJiraProjectSuccessFlagTitle: {
            id: "people-and-teams.invite-people.flag.request-access-to-jira-project-success-flag-title",
            defaultMessage: "You've requested access for {requestAccessCount} {requestAccessCount, plural, one {user} other {users}}"
          },
          requestAccessToJiraProjectSuccessFlagDescription: {
            id: "people-and-teams.invite-people.flag.request-access-to-jira-project-success-flag-description",
            defaultMessage: "They'll be able to start collaborating when your admin approves their access request and adds them to the project."
          },
          hybridToJiraProjectSuccessFlagTitle: {
            id: "people-and-teams.invite-people.flag.hybrid-to-jira-project-success-flag-title",
            defaultMessage: "{inviteCount, plural, one {Invite and request} other {Invites and requests}} sent"
          },
          hybridToJiraProjectSuccessFlagDescription: {
            id: "people-and-teams.invite-people.flag.hybrid-to-jira-project-success-flag-description",
            defaultMessage: "{combination, select, singleHybrid {You've sent one invite and one request} multipleHybrid {You've invited {inviteCount} {inviteCount, plural, one {} other {people}} and requested access for {requestAccessCount} {requestAccessCount, plural, one {other} other {others}}} other {}}. Ask an admin to add them to this project to start collaborating."
          },
          licenceExceededInJiraProjectFlagTitle: {
            id: "people-and-teams.invite-people.flag.licence-exceeded-in-jira-project-flag-title",
            defaultMessage: "{failedInviteCount} {failedInviteCount, plural, one {invite} other {invites}} not sent"
          },
          licenceExceededInJiraProjectFlagDescription: {
            id: "people-and-teams.invite-people.flag.licence-exceeded-in-jira-project-flag-description",
            defaultMessage: "{userRole, select, admin {We couldn't {failedInviteCount, plural, one {invite {emailFailedToInvite}} other {send {failedInviteCount} of your invites}} because you've reached your user limit.} trusted {We couldn't invite {failedInviteCount} {failedInviteCount, plural, one {person} other {people}} because you've reached your user limit. Contact your admin for help.} other {Your team has reached its user limit for the Jira Software Free plan. To unblock user limits, ask your admin to upgrade your plan.}}"
          }
        } ),
        Ge = e => {
          const t = "admin" === e;
          return {
            appearance: "error",
            icon: i.a.createElement( Ae.a, {
              label: "error",
              primaryColor: Ne.a.R400,
              secondaryColor: Ne.a.N0
            } ),
            title: i.a.createElement( l.b, Fe.genericFailedFlagTitle ),
            description: i.a.createElement( l.b, Ee()( {}, Fe.genericFailedFlagDescription, {
              values: {
                isAdmin: t
              }
            } ) ),
            actions: t ? [ {
              content: i.a.createElement( l.b, Fe.contactSupportActionLabel ),
              href: "https://support.atlassian.com/contact/",
              target: "_blank"
            } ] : []
          }
        },
        $e = ( e, t ) => {
          let a, n;
          switch ( e ) {
            case De:
              a = i.a.createElement( l.b, Ee()( {}, Fe.slackConnectSuccessFlagTitle, {
                values: {
                  workspace: t
                }
              } ) ), n = i.a.createElement( l.b, Fe.slackConnectSuccessFlagDescription );
              break;
            case "microsoft-invites":
              a = i.a.createElement( l.b, Fe.microsoftConnectSuccessFlagTitle ), n = i.a.createElement( l.b, Fe.microsoftConnectSuccessFlagDescription );
              break;
            case "google-invites":
              a = i.a.createElement( l.b, Fe.googleConnectSuccessFlagTitle ), n = i.a.createElement( l.b, Fe.googleConnectSuccessFlagDescription )
          }
          return {
            appearance: "success",
            icon: i.a.createElement( Oe.a, {
              label: "success",
              primaryColor: Ne.a.G400,
              secondaryColor: Ne.a.N0
            } ),
            title: a,
            description: n
          }
        };
      var _e = a( "hu6Q" ),
        Ve = a( "Cmaw" );
      const Ue = Object( Ve.a )( "peopleTeams" ),
        We = ( e, t, a, n, o ) => {
          const i = Ue( {
            eventType: _e.b,
            actionSubject: $.INVITE_REQUEST,
            action: _.FAILED,
            attributes: {
              code: n,
              message: o,
              permissionLevel: a,
              products: t
            }
          } );
          e && i( e )
        },
        Je = ( e, t ) => {
          const a = Ue( {
            eventType: _e.b,
            actionSubject: $.INVITE_CAPABILITIES,
            actionSubjectId: t,
            action: _.FAILED
          } );
          e && a( e )
        },
        Ke = ( e, t, a ) => {
          const n = Ue( {
            eventType: _e.b,
            actionSubject: $.THIRD_PARTY_INTEGRATIION,
            action: _.CONNECTED,
            attributes: {
              integration: e,
              teamId: t
            }
          } );
          a && n( a )
        };
      var He = {
          "people-and-teams.invite-people.flag.contact-support-action-label": "联系支持团队",
          "people-and-teams.invite-people.flag.generic-failed-flag-description": "{isAdmin, select, true {无法发送任何访问申请或邀请。请联系您的管理员寻求帮助。} false {无法发送任何访问申请或邀请。 }}",
          "people-and-teams.invite-people.flag.generic-failed-flag-title": "出错了",
          "people-and-teams.invite-people.flag.generic-success-flag-title": "成功",
          "people-and-teams.invite-people.flag.google-connect-success-flag-description": "现在，您可以搜索其联系人列表。",
          "people-and-teams.invite-people.flag.google-connect-success-flag-title": "Google Workspace 已连接",
          "people-and-teams.invite-people.flag.invite-failed-flag-description": "{isAdmin, select, false {{failedInviteCount, plural, other {无法发送任何邀请。请联系您的管理员寻求帮助。 }}} true {{failedInviteCount, plural, other {无法发送任何邀请。 }}}}",
          "people-and-teams.invite-people.flag.invite-failed-flag-title": "{isAdmin, select, true {{failedInviteCount, plural, other {邀请未发送}}} false {{failedInviteCount, plural, other {邀请失败}}}}",
          "people-and-teams.invite-people.flag.licence-exceeded-flag-description": "{userRole, select, admin {无法向任何人发送邀请，因为您已达到用户上限。} trusted {无法向任何人发送邀请，因为您已达到用户上限。请联系您的管理员寻求帮助。} other {您无法邀请任何人。请询问管理员以便升级计划。}}",
          "people-and-teams.invite-people.flag.licence-exceeded-flag-title": "邀请未发送",
          "people-and-teams.invite-people.flag.microsoft-connect-success-flag-description": "现在，您可以搜索其联系人列表。",
          "people-and-teams.invite-people.flag.microsoft-connect-success-flag-title": "Microsoft 已连接",
          "people-and-teams.invite-people.flag.request-access-success-flag-description": "{requestAccessCount, plural, =0 {您尚未为任何人申请访问权限。} other {您已为 {requestAccessCount} 人申请访问权限。}}",
          "people-and-teams.invite-people.flag.slack-connect-success-flag-description": "现在，您可以搜索该工作区的联系人列表。",
          "people-and-teams.invite-people.flag.slack-connect-success-flag-title": "已连接 Slack 中的“{workspace}”",
          "people-and-teams.invite-people.flag.slack-disconnect-success-flag-description": "您无法再搜索该工作区的联系人列表。",
          "people-and-teams.invite-people.flag.slack-disconnect-success-flag-title": "Slack 已断开连接",
          "people-and-teams.invite-people.flag.upgrade-plan-action-label": "升级计划",
          "people-and-teams.invite-people.flag.view-users-action-label": "查看用户",
          "people-and-teams.invite-people.form.addMoreButton": "+ 添加更多",
          "people-and-teams.invite-people.form.cancelButton": "取消",
          "people-and-teams.invite-people.form.email-input-label": "电子邮件地址",
          "people-and-teams.invite-people.form.empty-email-message": "请至少添加一个电子邮件地址",
          "people-and-teams.invite-people.form.invalid-email-message": "请输入有效的电子邮件地址",
          "people-and-teams.invite-people.form.invalid-multiple-email-message": "要发送邀请，请更正所有无效地址。",
          "people-and-teams.invite-people.form.invitee-list-third-party.label": "查找团队成员",
          "people-and-teams.invite-people.form.invitee-list-third-party.no-integrations.label": "通过电子邮件地址添加",
          "people-and-teams.invite-people.form.invitee-list.label": "通过电子邮件地址添加",
          "people-and-teams.invite-people.form.invitee-list.note": "输入最多 10 个电子邮件地址，并以逗号分隔。",
          "people-and-teams.invite-people.form.invitee-list.user-picker.email.placeholder": "输入电子邮件地址",
          "people-and-teams.invite-people.form.invitee-list.user-picker.placeholder": "输入用户名称或电子邮件地址",
          "people-and-teams.invite-people.form.jira-core-message": "Jira Core 已包含在其他 Jira 产品中。",
          "people-and-teams.invite-people.form.no-product-selected-message": "请选择一个产品",
          "people-and-teams.invite-people.form.select-products.label": "选择产品",
          "people-and-teams.invite-people.form.sendButton": "邀请团队成员",
          "people-and-teams.invite-people.form.title": "邀请团队成员",
          "people-and-teams.invite-people.form.title.product": "邀请您的团队成员访问 {product}",
          "people-and-teams.invite-people.form.too-many-email-addresses": "您一次最多只能发送 10 份电子邮件邀请。",
          "people-and-teams.invite-people.google.sync.button": "从 Google 同步用户",
          "people-and-teams.invite-people.google.sync.button.separator": "或者",
          "people-and-teams.invite-people.jira.core.option.subtext": "包含在其他 Jira 产品中",
          "people-and-teams.invite-people.product.select.alloption": "全选",
          "people-and-teams.invite-people.product.select.placeholder": "您邀请用户使用哪一产品？",
          "people-and-teams.invite-people.slack.disconnect.dialog.disconnect.button": "断开连接",
          "people-and-teams.invite-people.slack.workspaces.connect.dialog.heading": "连接 Slack 工作区",
          "people-and-teams.invite-people.slack.workspaces.dialog.body": "选择一个要通过其邀请用户的工作区。",
          "people-and-teams.invite-people.slack.workspaces.dialog.connet-workspace": "连接工作区",
          "people-and-teams.invite-people.slack.workspaces.dialog.disconnect.slack": "断开与 Slack 的连接",
          "people-and-teams.invite-people.slack.workspaces.disconnect.dialog.body": "您即将断开该 Slack 工作区的连接，并限制通过其联系人进行搜索的功能。",
          "people-and-teams.invite-people.slack.workspaces.disconnect.dialog.heading": "断开与 Slack 的连接",
          "people-and-teams.invite-people.slack.workspaces.manage.dialog.heading": "管理 Slack 连接",
          "people-and-teams.invite-people.thirdparty-connect.connect.label": "从以下位置连接团队成员",
          "people-and-teams.invite-people.thirdparty-footer.connect.label": "从以下位置连接更多团队成员",
          "people-and-teams.invite-people.thirdparty.connect-to.label": "已连接到",
          "people-and-teams.invite-people.thirdparty.connect.or.label": "或者",
          "people-and-teams.invite-people.thirdparty.microsoft.button": "Microsoft",
          "people-and-teams.invite-people.thirdparty.microsoft.connected.tooltip": "断开与 Microsoft 的连接",
          "people-and-teams.invite-people.thirdparty.slack.button": "Slack",
          "people-and-teams.invite-people.thirdparty.slack.connected.tooltip": "管理该连接",
          "people-and-teams.invite-people.users.form.description.new": "您添加的人员会自动或在站点管理员批准请求后收到邀请。",
          "people-and-teams.invite-people.users.form.sendButton": "添加团队成员",
          "people-and-teams.invite-people.users.form.title": "添加您的团队成员",
          "people-and-teams.invite-people.users.form.title.product": "将您的团队成员添加到 {product}"
        },
        Ze = {
          "people-and-teams.invite-people.flag.contact-support-action-label": "Kontaktovat podporu",
          "people-and-teams.invite-people.flag.generic-failed-flag-description": "{isAdmin, select, true {Nepodařilo se odeslat žádné žádosti o přístup ani pozvánky. Požádejte o pomoc administrátora.} false {Nepodařilo se odeslat žádné žádosti o přístup ani pozvánky. }}",
          "people-and-teams.invite-people.flag.generic-failed-flag-title": "Něco se pokazilo",
          "people-and-teams.invite-people.flag.generic-success-flag-title": "Úspěch",
          "people-and-teams.invite-people.flag.google-connect-success-flag-description": "Nyní můžete vyhledávat v jejím seznamu kontaktů.",
          "people-and-teams.invite-people.flag.google-connect-success-flag-title": "Služba Google Workspace byla připojena",
          "people-and-teams.invite-people.flag.invite-failed-flag-description": "{isAdmin, select, false {{failedInviteCount, plural, one {Pozvánku na e-mail {emailFailedToInvite} se nepodařilo odeslat. Požádejte o pomoc administrátora. } few {Nepodařilo se odeslat žádné pozvánky. Požádejte o pomoc administrátora. } many {Nepodařilo se odeslat žádné pozvánky. Požádejte o pomoc administrátora. } other {Nepodařilo se odeslat žádné pozvánky. Požádejte o pomoc administrátora. }}} true {{failedInviteCount, plural, one {Pozvánku na e-mail {emailFailedToInvite} se nepodařilo odeslat. } few {Nepodařilo se odeslat žádné pozvánky. } many {Nepodařilo se odeslat žádné pozvánky. } other {Nepodařilo se odeslat žádné pozvánky. }}}}",
          "people-and-teams.invite-people.flag.invite-failed-flag-title": "{isAdmin, select, true {{failedInviteCount, plural, one {Pozvánku se nepodařilo odeslat} few {Pozvánky se nepodařilo odeslat} many {Pozvánky se nepodařilo odeslat} other {Pozvánky se nepodařilo odeslat}}} false {{failedInviteCount, plural, one {Pozvání se nezdařilo} few {Pozvání se nezdařila} many {Pozvání se nezdařila} other {Pozvání se nezdařila}}}}",
          "people-and-teams.invite-people.flag.licence-exceeded-flag-description": "{userRole, select, admin {Nemůžete nikoho pozvat, protože jste dosáhli limitu počtu uživatelů.} trusted {Nemůžete nikoho pozvat, protože jste dosáhli limitu počtu uživatelů. Požádejte o pomoc administrátora.} other {Nemůžete nikoho pozvat. Požádejte administrátora, aby vám upgradoval plán.}}",
          "people-and-teams.invite-people.flag.licence-exceeded-flag-title": "Pozvánky se nepodařilo odeslat",
          "people-and-teams.invite-people.flag.microsoft-connect-success-flag-description": "Nyní můžete vyhledávat v jejím seznamu kontaktů.",
          "people-and-teams.invite-people.flag.microsoft-connect-success-flag-title": "Služba Microsoft byla připojena",
          "people-and-teams.invite-people.flag.request-access-success-flag-description": "{requestAccessCount, plural, =0 {Nepožádali jste o přístup pro nikoho.} one {Požádali jste o přístup pro {requestAccessCount} člověka.} few {Požádali jste o přístup pro {requestAccessCount} lidi.} many {Požádali jste o přístup pro {requestAccessCount} člověka.} other {Požádali jste o přístup pro {requestAccessCount} lidí.}}",
          "people-and-teams.invite-people.flag.slack-connect-success-flag-description": "Nyní můžete vyhledávat v seznamu kontaktů tohoto pracovního prostoru.",
          "people-and-teams.invite-people.flag.slack-connect-success-flag-title": "Pracovní prostor {workspace} ze služby Slack byl připojen",
          "people-and-teams.invite-people.flag.slack-disconnect-success-flag-description": "Nyní již nemůžete vyhledávat v seznamu kontaktů tohoto pracovního prostoru.",
          "people-and-teams.invite-people.flag.slack-disconnect-success-flag-title": "Služba Slack byla odpojena",
          "people-and-teams.invite-people.flag.upgrade-plan-action-label": "Upgradovat plán",
          "people-and-teams.invite-people.flag.view-users-action-label": "Zobrazit uživatele",
          "people-and-teams.invite-people.form.addMoreButton": "+ Přidat více",
          "people-and-teams.invite-people.form.cancelButton": "Zrušit",
          "people-and-teams.invite-people.form.email-input-label": "E-mailová adresa",
          "people-and-teams.invite-people.form.empty-email-message": "Přidejte alespoň jednu e-mailovou adresu",
          "people-and-teams.invite-people.form.invalid-email-message": "Zadejte platnou e-mailovou adresu.",
          "people-and-teams.invite-people.form.invalid-multiple-email-message": "K odeslání pozvánek je potřeba, abyste opravili všechny neplatné adresy.",
          "people-and-teams.invite-people.form.invitee-list-third-party.label": "Najít týmové kolegy",
          "people-and-teams.invite-people.form.invitee-list-third-party.no-integrations.label": "Přidat pomocí e-mailu",
          "people-and-teams.invite-people.form.invitee-list.label": "Přidat pomocí e-mailu",
          "people-and-teams.invite-people.form.invitee-list.note": "Zadejte až 10 e-mailových adres oddělených čárkami.",
          "people-and-teams.invite-people.form.invitee-list.user-picker.email.placeholder": "Zadejte e-mailovou adresu",
          "people-and-teams.invite-people.form.invitee-list.user-picker.placeholder": "Zadejte jméno nebo e-mailovou adresu uživatele",
          "people-and-teams.invite-people.form.jira-core-message": "Řešení Jira Core je zahrnuto v ostatních produktech Jira.",
          "people-and-teams.invite-people.form.no-product-selected-message": "Vyberte produkt",
          "people-and-teams.invite-people.form.select-products.label": "Vybrat produkty",
          "people-and-teams.invite-people.form.sendButton": "Pozvat členy týmu",
          "people-and-teams.invite-people.form.title": "Pozvěte své kolegy",
          "people-and-teams.invite-people.form.title.product": "Pozvěte své kolegy do produktu {product}",
          "people-and-teams.invite-people.form.too-many-email-addresses": "Najednou můžete odeslat maximálně 10 e-mailových pozvánek.",
          "people-and-teams.invite-people.google.sync.button": "Synchronizovat uživatele z Googlu",
          "people-and-teams.invite-people.google.sync.button.separator": "NEBO",
          "people-and-teams.invite-people.jira.core.option.subtext": "Zahrnuto v ostatních produktech Jira",
          "people-and-teams.invite-people.product.select.alloption": "Vybrat vše",
          "people-and-teams.invite-people.product.select.placeholder": "Do jakého produktu zvete lidi?",
          "people-and-teams.invite-people.slack.disconnect.dialog.disconnect.button": "Odpojit",
          "people-and-teams.invite-people.slack.workspaces.connect.dialog.heading": "Připojit pracovní prostor Slack",
          "people-and-teams.invite-people.slack.workspaces.dialog.body": "Vyberte jeden pracovní prostor, ze kterého chcete pozvat uživatele.",
          "people-and-teams.invite-people.slack.workspaces.dialog.connet-workspace": "Připojit pracovní prostor",
          "people-and-teams.invite-people.slack.workspaces.dialog.disconnect.slack": "Odpojit službu Slack",
          "people-and-teams.invite-people.slack.workspaces.disconnect.dialog.body": "Chystáte se odpojit tento pracovní prostor Slack a omezit své možnosti vyhledávání v jeho kontaktech.",
          "people-and-teams.invite-people.slack.workspaces.disconnect.dialog.heading": "Odpojit službu Slack",
          "people-and-teams.invite-people.slack.workspaces.manage.dialog.heading": "Spravovat připojení služby Slack",
          "people-and-teams.invite-people.thirdparty-connect.connect.label": "Připojit týmové kolegy z:",
          "people-and-teams.invite-people.thirdparty-footer.connect.label": "Připojit další týmové kolegy z:",
          "people-and-teams.invite-people.thirdparty.connect-to.label": "Připojeno k:",
          "people-and-teams.invite-people.thirdparty.connect.or.label": "NEBO",
          "people-and-teams.invite-people.thirdparty.microsoft.button": "Microsoft",
          "people-and-teams.invite-people.thirdparty.microsoft.connected.tooltip": "Odpojit službu Microsoft",
          "people-and-teams.invite-people.thirdparty.slack.button": "Slack",
          "people-and-teams.invite-people.thirdparty.slack.connected.tooltip": "Spravovat toto připojení",
          "people-and-teams.invite-people.users.form.description.new": "Lidé, které přidáte, dostanou pozvánku automaticky nebo poté, co administrátor vašeho webu schválí žádost.",
          "people-and-teams.invite-people.users.form.sendButton": "Přidat týmové kolegy",
          "people-and-teams.invite-people.users.form.title": "Přidejte své týmové kolegy",
          "people-and-teams.invite-people.users.form.title.product": "Přidejte své týmové kolegy do {product}"
        },
        Ye = {
          "people-and-teams.invite-people.flag.generic-failed-flag-description": "{isAdmin, select, true {Vi kunne ikke sende nogen adgangsanmodninger eller invitationer. Kontakt din administrator for at få hjælp.} false {Vi kunne ikke sende nogen adgangsanmodninger eller invitationer. }}",
          "people-and-teams.invite-people.flag.generic-failed-flag-title": "Noget gik galt",
          "people-and-teams.invite-people.flag.generic-success-flag-title": "Succes",
          "people-and-teams.invite-people.flag.google-connect-success-flag-description": "Du kan nu søge gennem dets kontaktliste.",
          "people-and-teams.invite-people.flag.google-connect-success-flag-title": "Google Workspace er tilsluttet",
          "people-and-teams.invite-people.flag.invite-failed-flag-title": "{isAdmin, select, true {{failedInviteCount, plural, one {Invitationen blev ikke sendt} other {Invitationerne blev ikke sendt}}} false {{failedInviteCount, plural, one {Invitationen mislykkedes} other {Invitationerne mislykkedes}}}}",
          "people-and-teams.invite-people.flag.microsoft-connect-success-flag-description": "Du kan nu søge gennem dets kontaktliste.",
          "people-and-teams.invite-people.flag.microsoft-connect-success-flag-title": "Microsoft er tilsluttet",
          "people-and-teams.invite-people.flag.request-access-success-flag-description": "{requestAccessCount, plural, =0 {Du har ikke anmodet om adgang for nogen.} one {Du har anmodet om adgang for {requestAccessCount} person.} other {Du har anmodet om adgang for {requestAccessCount} personer.}}",
          "people-and-teams.invite-people.flag.slack-connect-success-flag-description": "Du kan nu søge gennem dette arbejdsområdes kontaktliste.",
          "people-and-teams.invite-people.flag.slack-connect-success-flag-title": '"{workspace}" fra Slack er tilsluttet',
          "people-and-teams.invite-people.flag.slack-disconnect-success-flag-description": "Du kan ikke længere søge gennem dette arbejdsområdes kontaktliste.",
          "people-and-teams.invite-people.flag.slack-disconnect-success-flag-title": "Forbindelsen til Slack er afbrudt",
          "people-and-teams.invite-people.flag.upgrade-plan-action-label": "Opgrader abonnement",
          "people-and-teams.invite-people.flag.view-users-action-label": "Vis brugere",
          "people-and-teams.invite-people.form.addMoreButton": "+ Tilføj flere",
          "people-and-teams.invite-people.form.cancelButton": "Annuller",
          "people-and-teams.invite-people.form.email-input-label": "E-mailadresse",
          "people-and-teams.invite-people.form.empty-email-message": "Tilføj mindst én e-mailadresse",
          "people-and-teams.invite-people.form.invalid-email-message": "Indtast en gyldig e-mailadresse",
          "people-and-teams.invite-people.form.invitee-list-third-party.label": "Find teammedlemmer",
          "people-and-teams.invite-people.form.invitee-list-third-party.no-integrations.label": "Tilføj med e-mail",
          "people-and-teams.invite-people.form.invitee-list.user-picker.email.placeholder": "Indtast e-mailadresse",
          "people-and-teams.invite-people.form.invitee-list.user-picker.placeholder": "Indtast brugerens navn eller e-mailadresse",
          "people-and-teams.invite-people.form.select-products.label": "Vælg produkter",
          "people-and-teams.invite-people.form.sendButton": "Inviter teammedlemmer",
          "people-and-teams.invite-people.form.title": "Inviter dine teammedlemmer",
          "people-and-teams.invite-people.form.title.product": "Inviter dine teammedlemmer til {product}",
          "people-and-teams.invite-people.slack.disconnect.dialog.disconnect.button": "Afbryd forbindelse",
          "people-and-teams.invite-people.slack.workspaces.connect.dialog.heading": "Tilslut Slack-arbejdsområde",
          "people-and-teams.invite-people.slack.workspaces.dialog.body": "Vælg ét arbejdsområde, som du vil invitere brugere fra.",
          "people-and-teams.invite-people.slack.workspaces.dialog.connet-workspace": "Tilslut arbejdsområde",
          "people-and-teams.invite-people.slack.workspaces.dialog.disconnect.slack": "Afbryd forbindelse til Slack",
          "people-and-teams.invite-people.slack.workspaces.disconnect.dialog.body": "Du er ved at afbryde forbindelsen til dette Slack-arbejdsområde og dermed begrænse din evne til at søge gennem dets kontakter.",
          "people-and-teams.invite-people.slack.workspaces.disconnect.dialog.heading": "Afbryd forbindelse til Slack",
          "people-and-teams.invite-people.slack.workspaces.manage.dialog.heading": "Administrer Slack-forbindelse",
          "people-and-teams.invite-people.thirdparty-connect.connect.label": "Tilslut teammedlemmer fra",
          "people-and-teams.invite-people.thirdparty-footer.connect.label": "Tilslut flere teammedlemmer fra",
          "people-and-teams.invite-people.thirdparty.connect-to.label": "Sluttet til",
          "people-and-teams.invite-people.thirdparty.connect.or.label": "eller",
          "people-and-teams.invite-people.thirdparty.microsoft.button": "Microsoft",
          "people-and-teams.invite-people.thirdparty.microsoft.connected.tooltip": "Afbryd forbindelse til Microsoft",
          "people-and-teams.invite-people.thirdparty.slack.button": "Slack",
          "people-and-teams.invite-people.thirdparty.slack.connected.tooltip": "Administrer denne forbindelse",
          "people-and-teams.invite-people.users.form.description.new": "Personer, som du tilføjer, modtager en invitation automatisk eller efter, at din webstedsadministrator har godkendt anmodningen.",
          "people-and-teams.invite-people.users.form.sendButton": "Tilføj teammedlemmer",
          "people-and-teams.invite-people.users.form.title": "Tilføj dine teammedlemmer",
          "people-and-teams.invite-people.users.form.title.product": "Tilføj dine teammedlemmer til {product}"
        },
        Xe = {
          "people-and-teams.invite-people.flag.contact-support-action-label": "Neem contact op met support",
          "people-and-teams.invite-people.flag.generic-failed-flag-description": "{isAdmin, select, true {We konden geen toegangsaanvragen of uitnodigingen verzenden. Neem contact op met je beheerder voor ondersteuning.} false {We konden geen toegangsaanvragen of uitnodigingen verzenden. }}",
          "people-and-teams.invite-people.flag.generic-failed-flag-title": "Er is iets misgegaan",
          "people-and-teams.invite-people.flag.generic-success-flag-title": "Gelukt",
          "people-and-teams.invite-people.flag.invite-failed-flag-description": "{isAdmin, select, false {{failedInviteCount, plural, one {We konden {emailFailedToInvite} niet uitnodigen. Neem contact op met je beheerder voor ondersteuning. } other {We konden geen uitnodigingen verzenden. Neem contact op met je beheerder voor ondersteuning. }}} true {{failedInviteCount, plural, one {We konden {emailFailedToInvite} niet uitnodigen. } other {We konden geen uitnodigingen verzenden. }}}}",
          "people-and-teams.invite-people.flag.invite-failed-flag-title": "{isAdmin, select, true {{failedInviteCount, plural, one {Uitnodigingen niet verzonden} other {Uitnodigingen niet verzonden}}} false {{failedInviteCount, plural, one {Uitnodigingen niet gelukt} other {Uitnodigingen niet gelukt}}}}",
          "people-and-teams.invite-people.flag.licence-exceeded-flag-description": "{userRole, select, admin {We konden niemand uitnodigen omdat je je gebruikerslimiet hebt bereikt.} trusted {We konden niemand uitnodigen omdat je je gebruikerslimiet hebt bereikt. Neem contact op met je beheerder voor ondersteuning.} other {Je kunt niemand uitnodigen. Vraag je beheerder om je abonnement te upgraden.}}",
          "people-and-teams.invite-people.flag.licence-exceeded-flag-title": "Uitnodigingen niet verzonden",
          "people-and-teams.invite-people.flag.request-access-success-flag-description": "{requestAccessCount, plural, =0 {Je hebt voor niemand toegang aangevraagd.} one {Je hebt toegang aangevraagd voor {requestAccessCount} mensen.} other {Je hebt toegang aangevraagd voor {requestAccessCount} mensen.}}",
          "people-and-teams.invite-people.flag.upgrade-plan-action-label": "Abonnement upgraden",
          "people-and-teams.invite-people.flag.view-users-action-label": "Gebruikers bekijken",
          "people-and-teams.invite-people.form.addMoreButton": "+ Meer toevoegen",
          "people-and-teams.invite-people.form.cancelButton": "Annuleren",
          "people-and-teams.invite-people.form.email-input-label": "E-mailadres",
          "people-and-teams.invite-people.form.empty-email-message": "Voeg minstens een e-mailadres toe",
          "people-and-teams.invite-people.form.invalid-email-message": "Vul een geldig e-mailadres in",
          "people-and-teams.invite-people.form.invalid-multiple-email-message": "Corrigeer de ongeldige e-mailadressen om je uitnodigingen te versturen.",
          "people-and-teams.invite-people.form.invitee-list.label": "Toevoegen met e-mailadres",
          "people-and-teams.invite-people.form.invitee-list.note": "Voeg tot 10 e-mailadressen toe, gescheiden met komma's.",
          "people-and-teams.invite-people.form.jira-core-message": "Jira Core is inbegrepen bij andere Jira-producten.",
          "people-and-teams.invite-people.form.no-product-selected-message": "Kies een product",
          "people-and-teams.invite-people.form.too-many-email-addresses": "Je kunt maximaal 10 e-mailuitnodigingen tegelijk versturen.",
          "people-and-teams.invite-people.google.sync.button": "Gebruikers synchroniseren met Google",
          "people-and-teams.invite-people.google.sync.button.separator": "of",
          "people-and-teams.invite-people.jira.core.option.subtext": "Inbegrepen bij andere Jira-producten",
          "people-and-teams.invite-people.product.select.alloption": "Alles selecteren",
          "people-and-teams.invite-people.product.select.placeholder": "Voor welke producten nodig je mensen uit?"
        },
        Qe = {
          "people-and-teams.invite-people.flag.generic-failed-flag-description": "{isAdmin, select, true {Me ei saanud saata ühtegi ligipääsutaotlust ega kutset. Abi saamiseks võtke ühendust administraatoriga.} false {Me ei saanud saata ühtegi ligipääsutaotlust ega kutset. }}",
          "people-and-teams.invite-people.flag.generic-failed-flag-title": "Midagi läks nässu",
          "people-and-teams.invite-people.flag.generic-success-flag-title": "Õnnestus",
          "people-and-teams.invite-people.flag.invite-failed-flag-title": "{isAdmin, select, true {{failedInviteCount, plural, one {Kutset ei saadetud} other {Kutseid ei saadetud}}} false {{failedInviteCount, plural, one {Kutse saatmine nurjus} other {Kutsete saatmine nurjus}}}}",
          "people-and-teams.invite-people.flag.request-access-success-flag-description": "{requestAccessCount, plural, =0 {Te pole kellelegi ligipääsu taotlenud.} one {Olete ligipääsu taotlenud {requestAccessCount} inimesele.} other {Olete ligipääsu taotlenud {requestAccessCount} inimesele.}}",
          "people-and-teams.invite-people.flag.upgrade-plan-action-label": "Uuendage paketti",
          "people-and-teams.invite-people.flag.view-users-action-label": "Näita kasutajaid",
          "people-and-teams.invite-people.form.addMoreButton": "+ Lisa veel",
          "people-and-teams.invite-people.form.cancelButton": "Tühista",
          "people-and-teams.invite-people.form.email-input-label": "Meiliaadress",
          "people-and-teams.invite-people.form.empty-email-message": "Lisage vähemalt üks meiliaadress",
          "people-and-teams.invite-people.form.invalid-email-message": "Sisestage kehtiv meiliaadress"
        },
        et = {
          "people-and-teams.invite-people.flag.contact-support-action-label": "Ota yhteyttä tukeen",
          "people-and-teams.invite-people.flag.generic-failed-flag-description": "{isAdmin, select, true {Emme voineet lähettää käyttöoikeuspyyntöjä tai kutsuja. Ota yhteyttä pääkäyttäjään, jos tarvitset apua.} false {Emme voineet lähettää käyttöoikeuspyyntöjä tai kutsuja. }}",
          "people-and-teams.invite-people.flag.generic-failed-flag-title": "Jotain meni pieleen",
          "people-and-teams.invite-people.flag.generic-success-flag-title": "Onnistui",
          "people-and-teams.invite-people.flag.google-connect-success-flag-description": "Voit nyt hakea sen yhteystietoluettelosta",
          "people-and-teams.invite-people.flag.google-connect-success-flag-title": "Google Workspace yhdistetty",
          "people-and-teams.invite-people.flag.invite-failed-flag-description": "{isAdmin, select, false {{failedInviteCount, plural, one {Emme voineet kutsua kohdetta {emailFailedToInvite}. Ota yhteyttä pääkäyttäjään, jos tarvitset apua. } other {Emme voineet lähettää kutsuja. Ota yhteyttä pääkäyttäjään, jos tarvitset apua. }}} true {{failedInviteCount, plural, one {Emme voineet kutsua kohdetta {emailFailedToInvite}. } other {Emme voineet lähettää kutsuja. }}}}",
          "people-and-teams.invite-people.flag.invite-failed-flag-title": "{isAdmin, select, true {{failedInviteCount, plural, one {Kutsua ei lähetetty} other {Kutsuja ei lähetetty}}} false {{failedInviteCount, plural, one {Kutsu epäonnistui} other {Kutsut epäonnistuivat}}}}",
          "people-and-teams.invite-people.flag.licence-exceeded-flag-description": "{userRole, select, admin {Emme voineet lähettää kutsuja, koska käyttäjärajasi on saavutettu.} trusted {Emme voineet lähettää kutsuja, koska käyttäjärajasi on saavutettu. Ota yhteyttä pääkäyttäjään, jos tarvitset apua.} other {Et voi lähettää kutsuja. Pyydä pääkäyttäjää päivittämään palvelupakettisi.}}",
          "people-and-teams.invite-people.flag.licence-exceeded-flag-title": "Kutsuja ei lähetetty",
          "people-and-teams.invite-people.flag.microsoft-connect-success-flag-description": "Voit nyt hakea sen yhteystietoluettelosta",
          "people-and-teams.invite-people.flag.microsoft-connect-success-flag-title": "Microsoft yhdistetty",
          "people-and-teams.invite-people.flag.request-access-success-flag-description": "{requestAccessCount, plural, =0 {Et ole pyytänyt käyttöoikeutta kenellekään.} one {Olet pyytänyt käyttöoikeutta {requestAccessCount} ihmiselle.} other {Olet pyytänyt käyttöoikeutta {requestAccessCount} ihmiselle.}}",
          "people-and-teams.invite-people.flag.slack-connect-success-flag-description": "Voit nyt hakea tämän työtilan yhteystietoluettelosta",
          "people-and-teams.invite-people.flag.slack-connect-success-flag-title": "”{workspace}” yhdistetty Slackista",
          "people-and-teams.invite-people.flag.slack-disconnect-success-flag-description": "Et voi enää hakea tämän työtilan yhteystietoluettelosta.",
          "people-and-teams.invite-people.flag.slack-disconnect-success-flag-title": "Slackin yhteys katkaistu",
          "people-and-teams.invite-people.flag.upgrade-plan-action-label": "Päivitä tilaus",
          "people-and-teams.invite-people.flag.view-users-action-label": "Näytä käyttäjät",
          "people-and-teams.invite-people.form.addMoreButton": "+ Lisää",
          "people-and-teams.invite-people.form.cancelButton": "Peruuta",
          "people-and-teams.invite-people.form.email-input-label": "Sähköpostiosoite",
          "people-and-teams.invite-people.form.empty-email-message": "Lisää vähintään yksi sähköpostiosoite",
          "people-and-teams.invite-people.form.invalid-email-message": "Anna kelvollinen sähköpostiosoite",
          "people-and-teams.invite-people.form.invalid-multiple-email-message": "Lähetä kutsut korjaamalla virheelliset sähköpostiosoitteet.",
          "people-and-teams.invite-people.form.invitee-list-third-party.label": "Etsi tiimikavereita",
          "people-and-teams.invite-people.form.invitee-list-third-party.no-integrations.label": "Lisää sähköpostilla",
          "people-and-teams.invite-people.form.invitee-list.label": "Lisää sähköpostilla",
          "people-and-teams.invite-people.form.invitee-list.note": "Kirjoita enintään 10 sähköpostiosoitetta pilkuilla eroteltuina.",
          "people-and-teams.invite-people.form.invitee-list.user-picker.email.placeholder": "Anna sähköpostiosoite",
          "people-and-teams.invite-people.form.invitee-list.user-picker.placeholder": "Anna käyttäjän nimi tai sähköpostiosoite",
          "people-and-teams.invite-people.form.jira-core-message": "Jira Core sisältyy muihin Jira-tuotteisiin.",
          "people-and-teams.invite-people.form.no-product-selected-message": "Valitse tuote",
          "people-and-teams.invite-people.form.select-products.label": "Valitse tuotteet",
          "people-and-teams.invite-people.form.sendButton": "Kutsu tiimikavereita",
          "people-and-teams.invite-people.form.title": "Kutsu tiimikavereita",
          "people-and-teams.invite-people.form.title.product": "Kutsu tiimikavereita tuotteeseen {product}",
          "people-and-teams.invite-people.form.too-many-email-addresses": "Voit lähettää kerrallaan enintään 10 sähköpostikutsua.",
          "people-and-teams.invite-people.google.sync.button": "Synkronoi käyttäjät Googlesta",
          "people-and-teams.invite-people.google.sync.button.separator": "tai",
          "people-and-teams.invite-people.jira.core.option.subtext": "Sisältyy muihin Jira-tuotteisiin",
          "people-and-teams.invite-people.product.select.alloption": "Valitse kaikki",
          "people-and-teams.invite-people.product.select.placeholder": "Mihin tuotteeseen olet kutsumassa henkilöitä?",
          "people-and-teams.invite-people.slack.disconnect.dialog.disconnect.button": "Katkaise yhteys",
          "people-and-teams.invite-people.slack.workspaces.connect.dialog.heading": "Yhdistä Slack-työtila",
          "people-and-teams.invite-people.slack.workspaces.dialog.body": "Valitse yksi työtila, josta haluat kutsua käyttäjiä.",
          "people-and-teams.invite-people.slack.workspaces.dialog.connet-workspace": "Yhdistä työtila",
          "people-and-teams.invite-people.slack.workspaces.dialog.disconnect.slack": "Katkaise Slackin yhteys",
          "people-and-teams.invite-people.slack.workspaces.disconnect.dialog.body": "Olet katkaisemassa tämän Slack-työtilan yhteyttä ja rajoittamassa mahdollisuuttasi hakea sen yhteystiedoista.",
          "people-and-teams.invite-people.slack.workspaces.disconnect.dialog.heading": "Katkaise Slackin yhteys",
          "people-and-teams.invite-people.slack.workspaces.manage.dialog.heading": "Hallitse Slack-yhteyttä",
          "people-and-teams.invite-people.thirdparty-connect.connect.label": "Yhdistä tiimikaverit kohteesta",
          "people-and-teams.invite-people.thirdparty-footer.connect.label": "Yhdistä enemmän tiimikavereita kohteesta",
          "people-and-teams.invite-people.thirdparty.connect-to.label": "Yhdistetty kohteeseen",
          "people-and-teams.invite-people.thirdparty.connect.or.label": "tai",
          "people-and-teams.invite-people.thirdparty.microsoft.button": "Microsoft",
          "people-and-teams.invite-people.thirdparty.microsoft.connected.tooltip": "Katkaise Microsoft-yhteys",
          "people-and-teams.invite-people.thirdparty.slack.button": "Slack",
          "people-and-teams.invite-people.thirdparty.slack.connected.tooltip": "Hallitse tätä yhteyttä",
          "people-and-teams.invite-people.users.form.description.new": "Lisäämäsi henkilöt saavat kutsun automaattisesti tai sen jälkeen, kun sivustosi ylläpitäjä on hyväksynyt pyynnön.",
          "people-and-teams.invite-people.users.form.sendButton": "Lisää tiimikavereita",
          "people-and-teams.invite-people.users.form.title": "Lisää tiimikaverisi",
          "people-and-teams.invite-people.users.form.title.product": "Lisää tiimikaverisi tuotteeseen {product}"
        },
        tt = {
          "people-and-teams.invite-people.flag.contact-support-action-label": "Contacter le support",
          "people-and-teams.invite-people.flag.generic-failed-flag-description": "{isAdmin, select, true {Impossible d'envoyer des demandes ou des invitations. Contactez votre administrateur pour obtenir de l'aide.} false {Impossible d'envoyer des demandes ou des invitations. }}",
          "people-and-teams.invite-people.flag.generic-failed-flag-title": "Une erreur est survenue",
          "people-and-teams.invite-people.flag.generic-success-flag-title": "Opération réussie",
          "people-and-teams.invite-people.flag.google-connect-success-flag-description": "Vous pouvez désormais effectuer une recherche dans sa liste de contacts.",
          "people-and-teams.invite-people.flag.google-connect-success-flag-title": "Google Workspace connecté",
          "people-and-teams.invite-people.flag.invite-failed-flag-description": "{isAdmin, select, false {{failedInviteCount, plural, one {Impossible d'inviter {emailFailedToInvite}. Contactez votre administrateur pour obtenir de l'aide. } other {Impossible d'envoyer des invitations. Contactez votre administrateur pour obtenir de l'aide. }}} true {{failedInviteCount, plural, one {Impossible d'inviter {emailFailedToInvite}. } other {Impossible d'envoyer des invitations. }}}}",
          "people-and-teams.invite-people.flag.invite-failed-flag-title": "{isAdmin, select, true {{failedInviteCount, plural, one {Invitation non envoyée} other {Invitations non envoyées}}} false {{failedInviteCount, plural, one {Échec de l'invitation} other {Échec des invitations}}}}",
          "people-and-teams.invite-people.flag.licence-exceeded-flag-description": "{userRole, select, admin {Impossible d'envoyer des invitations, car vous avez dépassé votre limite d'utilisateurs.} trusted {Impossible d'envoyer des invitations, car vous avez dépassé votre limite d'utilisateurs. Contactez votre administrateur pour obtenir de l'aide.} other {Vous ne pouvez inviter personne. Demandez à votre administrateur de passer à l'offre supérieure.}}",
          "people-and-teams.invite-people.flag.licence-exceeded-flag-title": "Invitations non envoyées",
          "people-and-teams.invite-people.flag.microsoft-connect-success-flag-description": "Vous pouvez désormais effectuer une recherche dans sa liste de contacts.",
          "people-and-teams.invite-people.flag.microsoft-connect-success-flag-title": "Microsoft connecté",
          "people-and-teams.invite-people.flag.request-access-success-flag-description": "{requestAccessCount, plural, =0 {Vous n'avez demandé d'accès pour personne.} one {Vous avez demandé un accès pour {requestAccessCount} personne.} other {Vous avez demandé un accès pour {requestAccessCount} personnes.}}",
          "people-and-teams.invite-people.flag.slack-connect-success-flag-description": "Vous pouvez désormais effectuer une recherche dans la liste de contacts de cet espace de travail.",
          "people-and-teams.invite-people.flag.slack-connect-success-flag-title": "L'espace Slack « {workspace} » est connecté",
          "people-and-teams.invite-people.flag.slack-disconnect-success-flag-description": "Vous ne pouvez désormais plus effectuer de recherche dans la liste de contacts de cet espace de travail.",
          "people-and-teams.invite-people.flag.slack-disconnect-success-flag-title": "Slack déconnecté",
          "people-and-teams.invite-people.flag.upgrade-plan-action-label": "Passer à l'offre supérieure",
          "people-and-teams.invite-people.flag.view-users-action-label": "Afficher les utilisateurs",
          "people-and-teams.invite-people.form.addMoreButton": "+ Ajouter d'autres",
          "people-and-teams.invite-people.form.cancelButton": "Annuler",
          "people-and-teams.invite-people.form.email-input-label": "Adresse e-mail",
          "people-and-teams.invite-people.form.empty-email-message": "Veuillez saisir au moins une adresse e-mail.",
          "people-and-teams.invite-people.form.invalid-email-message": "Veuillez saisir une adresse e-mail valide",
          "people-and-teams.invite-people.form.invalid-multiple-email-message": "Pour envoyer vos invitations, veuillez corriger les adresses non valides.",
          "people-and-teams.invite-people.form.invitee-list-third-party.label": "Rechercher des coéquipiers",
          "people-and-teams.invite-people.form.invitee-list-third-party.no-integrations.label": "Ajouter avec un e-mail",
          "people-and-teams.invite-people.form.invitee-list.label": "Ajouter avec un e-mail",
          "people-and-teams.invite-people.form.invitee-list.note": "Saisissez jusqu'à 10 adresses e-mail, séparées par des virgules.",
          "people-and-teams.invite-people.form.invitee-list.user-picker.email.placeholder": "Saisissez l'adresse e-mail",
          "people-and-teams.invite-people.form.invitee-list.user-picker.placeholder": "Saisissez le nom d'utilisateur ou l'adresse e-mail",
          "people-and-teams.invite-people.form.jira-core-message": "Jira Core est inclus avec les autres produits Jira.",
          "people-and-teams.invite-people.form.no-product-selected-message": "Veuillez sélectionner un produit",
          "people-and-teams.invite-people.form.select-products.label": "Sélectionnez des produits",
          "people-and-teams.invite-people.form.sendButton": "Inviter des coéquipiers",
          "people-and-teams.invite-people.form.title": "Inviter les membres de votre équipe",
          "people-and-teams.invite-people.form.title.product": "Invitez les membres de votre équipe dans {product}",
          "people-and-teams.invite-people.form.too-many-email-addresses": "Vous pouvez envoyer un maximum de 10 invitations à la fois.",
          "people-and-teams.invite-people.google.sync.button": "Synchroniser les utilisateurs depuis Google",
          "people-and-teams.invite-people.google.sync.button.separator": "ou",
          "people-and-teams.invite-people.jira.core.option.subtext": "Inclus avec les autres produits Jira",
          "people-and-teams.invite-people.product.select.alloption": "Sélectionner tout",
          "people-and-teams.invite-people.product.select.placeholder": "Pour quel produit invitez-vous des personnes ?",
          "people-and-teams.invite-people.slack.disconnect.dialog.disconnect.button": "Déconnecter",
          "people-and-teams.invite-people.slack.workspaces.connect.dialog.heading": "Connecter un espace de travail Slack",
          "people-and-teams.invite-people.slack.workspaces.dialog.body": "Sélectionnez un espace de travail à partir duquel vous souhaitez inviter des utilisateurs.",
          "people-and-teams.invite-people.slack.workspaces.dialog.connet-workspace": "Connecter un espace de travail",
          "people-and-teams.invite-people.slack.workspaces.dialog.disconnect.slack": "Déconnecter Slack",
          "people-and-teams.invite-people.slack.workspaces.disconnect.dialog.body": "Vous êtes sur le point de déconnecter cet espace de travail Slack et de limiter vos possibilités de recherche parmi ses contacts.",
          "people-and-teams.invite-people.slack.workspaces.disconnect.dialog.heading": "Déconnecter Slack",
          "people-and-teams.invite-people.slack.workspaces.manage.dialog.heading": "Gérer une connexion Slack",
          "people-and-teams.invite-people.thirdparty-connect.connect.label": "Connecter des coéquipiers à partir de",
          "people-and-teams.invite-people.thirdparty-footer.connect.label": "Connecter plus de coéquipiers à partir de",
          "people-and-teams.invite-people.thirdparty.connect-to.label": "Connecté à",
          "people-and-teams.invite-people.thirdparty.connect.or.label": "ou",
          "people-and-teams.invite-people.thirdparty.microsoft.button": "Microsoft",
          "people-and-teams.invite-people.thirdparty.microsoft.connected.tooltip": "Déconnecter Microsoft",
          "people-and-teams.invite-people.thirdparty.slack.button": "Slack",
          "people-and-teams.invite-people.thirdparty.slack.connected.tooltip": "Gérer cette connexion",
          "people-and-teams.invite-people.users.form.description.new": "Les personnes que vous ajoutez recevront une invitation automatiquement ou après que l'administrateur de votre site aura approuvé la demande.",
          "people-and-teams.invite-people.users.form.sendButton": "Ajouter des coéquipiers",
          "people-and-teams.invite-people.users.form.title": "Ajoutez vos coéquipiers",
          "people-and-teams.invite-people.users.form.title.product": "Ajoutez vos coéquipiers à {product}"
        },
        at = {
          "people-and-teams.invite-people.flag.contact-support-action-label": "Support kontaktieren",
          "people-and-teams.invite-people.flag.generic-failed-flag-description": "{isAdmin, select, true {Wie konnten keine Zugangsanfragen oder Einladungen senden. Wenden Sie sich für Unterstützung an Ihren Administrator.} false {Wie konnten keine Zugangsanfragen oder Einladungen senden. }}",
          "people-and-teams.invite-people.flag.generic-failed-flag-title": "Irgendetwas ist schiefgelaufen",
          "people-and-teams.invite-people.flag.generic-success-flag-title": "Erfolgreich",
          "people-and-teams.invite-people.flag.google-connect-success-flag-description": "Sie können nun die Liste der Kontakte durchsuchen.",
          "people-and-teams.invite-people.flag.google-connect-success-flag-title": "Google Workspace wurde verbunden",
          "people-and-teams.invite-people.flag.invite-failed-flag-description": "{isAdmin, select, false {{failedInviteCount, plural, one {Wir konnten {emailFailedToInvite} nicht einladen. Wenden Sie sich für Unterstützung an Ihren Administrator. } other {Wir konnten keine Einladungen senden. Wenden Sie sich für Unterstützung an Ihren Administrator. }}} true {{failedInviteCount, plural, one {Wir konnten keine Einladung an {emailFailedToInvite} senden. } other {Wir konnten keine Einladungen senden. }}}}",
          "people-and-teams.invite-people.flag.invite-failed-flag-title": "{isAdmin, select, true {{failedInviteCount, plural, one {Einladung nicht gesendet} other {Einladungen nicht gesendet}}} false {{failedInviteCount, plural, one {Einladung fehlgeschlagen} other {Einladungen fehlgeschlagen}}}}",
          "people-and-teams.invite-people.flag.licence-exceeded-flag-description": "{userRole, select, admin {Wir konnten niemanden einladen, da Sie Ihr Benutzerlimit erreicht haben.} trusted {Wir konnten niemanden einladen, da Sie Ihr Benutzerlimit erreicht haben. Wenden Sie sich für Unterstützung an Ihren Administrator.} other {Sie können niemanden einladen. Bitten Sie Ihren Administrator, ein Tarif-Upgrade durchzuführen.}}",
          "people-and-teams.invite-people.flag.licence-exceeded-flag-title": "Einladungen nicht gesendet",
          "people-and-teams.invite-people.flag.microsoft-connect-success-flag-description": "Sie können nun die Liste der Kontakte durchsuchen.",
          "people-and-teams.invite-people.flag.microsoft-connect-success-flag-title": "Microsoft wurde verbunden",
          "people-and-teams.invite-people.flag.request-access-success-flag-description": "{requestAccessCount, plural, =0 {Sie haben für niemanden Zugriff beantragt.} one {Sie haben Zugriff für {requestAccessCount} Person beantragt.} other {Sie haben Zugriff für {requestAccessCount} Personen beantragt.}}",
          "people-and-teams.invite-people.flag.slack-connect-success-flag-description": "Sie können nun die Liste der Kontakte dieses Arbeitsbereichs durchsuchen.",
          "people-and-teams.invite-people.flag.slack-connect-success-flag-title": '"{workspace}" von Slack wurde verbunden',
          "people-and-teams.invite-people.flag.slack-disconnect-success-flag-description": "Sie können die Liste der Kontakte dieses Arbeitsbereichs nicht länger durchsuchen.",
          "people-and-teams.invite-people.flag.slack-disconnect-success-flag-title": "Verbindung zu Slack wurde getrennt",
          "people-and-teams.invite-people.flag.upgrade-plan-action-label": "Tarif upgraden",
          "people-and-teams.invite-people.flag.view-users-action-label": "Benutzer anzeigen",
          "people-and-teams.invite-people.form.addMoreButton": "+ Weitere hinzufügen",
          "people-and-teams.invite-people.form.cancelButton": "Abbrechen",
          "people-and-teams.invite-people.form.email-input-label": "E-Mail-Adresse",
          "people-and-teams.invite-people.form.empty-email-message": "Fügen Sie mindestens eine E-Mail-Adresse hinzu.",
          "people-and-teams.invite-people.form.invalid-email-message": "Geben Sie bitte eine gültige E-Mail Adresse an.",
          "people-and-teams.invite-people.form.invalid-multiple-email-message": "Bitte korrigieren Sie alle ungültigen E-Mail-Adressen, damit Ihre Einladungen gesendet werden können.",
          "people-and-teams.invite-people.form.invitee-list-third-party.label": "Teammitglieder suchen",
          "people-and-teams.invite-people.form.invitee-list-third-party.no-integrations.label": "Mit E-Mail-Adresse hinzufügen",
          "people-and-teams.invite-people.form.invitee-list.label": "Mit E-Mail-Adresse hinzufügen",
          "people-and-teams.invite-people.form.invitee-list.note": "Geben Sie bis zu 10 durch Kommas getrennte E-Mail-Adressen ein.",
          "people-and-teams.invite-people.form.invitee-list.user-picker.email.placeholder": "E-Mail-Adresse eingeben",
          "people-and-teams.invite-people.form.invitee-list.user-picker.placeholder": "Benutzernamen oder E-Mail-Adresse eingeben",
          "people-and-teams.invite-people.form.jira-core-message": "Jira Core ist in anderen Jira-Produkten enthalten.",
          "people-and-teams.invite-people.form.no-product-selected-message": "Bitte wählen Sie ein Produkt aus.",
          "people-and-teams.invite-people.form.select-products.label": "Produkte auswählen",
          "people-and-teams.invite-people.form.sendButton": "Teammitglieder einladen",
          "people-and-teams.invite-people.form.title": "Teammitglieder einladen",
          "people-and-teams.invite-people.form.title.product": "Laden Sie Ihre Teammitglieder zu {product} ein",
          "people-and-teams.invite-people.form.too-many-email-addresses": "Sie können maximal 10 E-Mail-Einladungen gleichzeitig versenden.",
          "people-and-teams.invite-people.google.sync.button": "Benutzer von Google synchronisieren",
          "people-and-teams.invite-people.google.sync.button.separator": "oder",
          "people-and-teams.invite-people.jira.core.option.subtext": "In anderen Jira-Produkten enthalten",
          "people-and-teams.invite-people.product.select.alloption": "Alle auswählen",
          "people-and-teams.invite-people.product.select.placeholder": "Zu welchem Produkt laden Sie Personen ein?",
          "people-and-teams.invite-people.slack.disconnect.dialog.disconnect.button": "Trennen",
          "people-and-teams.invite-people.slack.workspaces.connect.dialog.heading": "Slack-Arbeitsbereich verbinden",
          "people-and-teams.invite-people.slack.workspaces.dialog.body": "Wählen Sie einen Arbeitsbereich aus, aus dem Sie Benutzer einladen möchten.",
          "people-and-teams.invite-people.slack.workspaces.dialog.connet-workspace": "Arbeitsbereich verbinden",
          "people-and-teams.invite-people.slack.workspaces.dialog.disconnect.slack": "Verbindung zu Slack trennen",
          "people-and-teams.invite-people.slack.workspaces.disconnect.dialog.body": "Sie sind dabei, diesen Slack-Arbeitsbereich zu trennen und Ihre Möglichkeit, seine Kontakte zu durchsuchen, einzuschränken.",
          "people-and-teams.invite-people.slack.workspaces.disconnect.dialog.heading": "Verbindung zu Slack trennen",
          "people-and-teams.invite-people.slack.workspaces.manage.dialog.heading": "Slack-Verbindung verwalten",
          "people-and-teams.invite-people.thirdparty-connect.connect.label": "Teammitglieder verbinden von",
          "people-and-teams.invite-people.thirdparty-footer.connect.label": "Mehr Teammitglieder verbinden von",
          "people-and-teams.invite-people.thirdparty.connect-to.label": "Verbunden mit",
          "people-and-teams.invite-people.thirdparty.connect.or.label": "oder",
          "people-and-teams.invite-people.thirdparty.microsoft.button": "Microsoft",
          "people-and-teams.invite-people.thirdparty.microsoft.connected.tooltip": "Verbindung zu Microsoft trennen",
          "people-and-teams.invite-people.thirdparty.slack.button": "Slack",
          "people-and-teams.invite-people.thirdparty.slack.connected.tooltip": "Diese Verbindung verwalten",
          "people-and-teams.invite-people.users.form.description.new": "Personen, die Sie hinzufügen, erhalten automatisch oder nach der Genehmigung der Anfrage durch Ihren Site-Admin eine Einladung.",
          "people-and-teams.invite-people.users.form.sendButton": "Teammitglieder hinzufügen",
          "people-and-teams.invite-people.users.form.title": "Ihre Teammitglieder hinzufügen",
          "people-and-teams.invite-people.users.form.title.product": "Fügen Sie Ihre Teammitglieder zu {product} hinzu"
        },
        nt = {
          "people-and-teams.invite-people.flag.generic-failed-flag-description": "{isAdmin, select, true {Nem sikerült hozzáférési kérést vagy meghívót küldenünk. Segítségért fordulj az adminisztrátorodhoz.} false {Nem sikerült hozzáférési kérést vagy meghívót küldenünk. }}",
          "people-and-teams.invite-people.flag.generic-failed-flag-title": "Valami hiba történt",
          "people-and-teams.invite-people.flag.generic-success-flag-title": "Sikerült",
          "people-and-teams.invite-people.flag.google-connect-success-flag-description": "Mostantól kereshetsz a névjegyek listájában.",
          "people-and-teams.invite-people.flag.google-connect-success-flag-title": "Google Workspace csatlakoztatva",
          "people-and-teams.invite-people.flag.invite-failed-flag-title": "{isAdmin, select, true {{failedInviteCount, plural, one {A meghívó nincs elküldve} other {A meghívók nincsenek elküldve}}} false {{failedInviteCount, plural, one {A meghívás sikertelen} other {A meghívások sikertelenek}}}}",
          "people-and-teams.invite-people.flag.microsoft-connect-success-flag-description": "Mostantól kereshetsz a névjegyek listájában.",
          "people-and-teams.invite-people.flag.microsoft-connect-success-flag-title": "Microsoft csatlakoztatva",
          "people-and-teams.invite-people.flag.request-access-success-flag-description": "{requestAccessCount, plural, =0 {Senki számára sem kértél hozzáférést.} one {{requestAccessCount} személy számára kértél hozzáférést.} other {{requestAccessCount} személy számára kértél hozzáférést.}}",
          "people-and-teams.invite-people.flag.slack-connect-success-flag-description": "Mostantól kereshetsz a munkatérhez tartozó névjegyek listájában.",
          "people-and-teams.invite-people.flag.slack-connect-success-flag-title": "„{workspace}” csatlakoztatva a Slackből",
          "people-and-teams.invite-people.flag.slack-disconnect-success-flag-description": "A továbbiakban nem kereshetsz a munkatérhez tartozó névjegyek listájában.",
          "people-and-teams.invite-people.flag.slack-disconnect-success-flag-title": "Slack leválasztva",
          "people-and-teams.invite-people.flag.upgrade-plan-action-label": "Váltás magasabb csomagra",
          "people-and-teams.invite-people.flag.view-users-action-label": "Felhasználók megtekintése",
          "people-and-teams.invite-people.form.addMoreButton": "+ Továbbiak hozzáadása",
          "people-and-teams.invite-people.form.cancelButton": "Mégse",
          "people-and-teams.invite-people.form.email-input-label": "E-mail-cím",
          "people-and-teams.invite-people.form.empty-email-message": "Adj meg legalább egy e-mail-címet",
          "people-and-teams.invite-people.form.invalid-email-message": "Érvényes e-mail-címet adj meg",
          "people-and-teams.invite-people.form.invitee-list-third-party.label": "Csapattagok keresése",
          "people-and-teams.invite-people.form.invitee-list-third-party.no-integrations.label": "Hozzáadás e-mail-cím alapján",
          "people-and-teams.invite-people.form.invitee-list.user-picker.email.placeholder": "Add meg az e-mail-címet!",
          "people-and-teams.invite-people.form.invitee-list.user-picker.placeholder": "Add meg a felhasználó nevét vagy e-mail-címét!",
          "people-and-teams.invite-people.form.select-products.label": "Termékek kiválasztása",
          "people-and-teams.invite-people.form.sendButton": "Hívj meg csapattagokat!",
          "people-and-teams.invite-people.form.title": "Hívd meg a csapattagjaidat!",
          "people-and-teams.invite-people.form.title.product": "Csapattársak meghívása a(z) {product} termékbe",
          "people-and-teams.invite-people.slack.disconnect.dialog.disconnect.button": "Leválasztás",
          "people-and-teams.invite-people.slack.workspaces.connect.dialog.heading": "Slack-munkatér csatlakoztatása",
          "people-and-teams.invite-people.slack.workspaces.dialog.body": "Válassz ki egy munkateret, amelyből szeretnél felhasználókat meghívni.",
          "people-and-teams.invite-people.slack.workspaces.dialog.connet-workspace": "Munkatér csatlakoztatása",
          "people-and-teams.invite-people.slack.workspaces.dialog.disconnect.slack": "Slack leválasztása",
          "people-and-teams.invite-people.slack.workspaces.disconnect.dialog.body": "Ezzel a művelettel leválasztod a Slack-munkateret, így nem fogsz tudni keresni a hozzá tartozó névjegyekben.",
          "people-and-teams.invite-people.slack.workspaces.disconnect.dialog.heading": "Slack leválasztása",
          "people-and-teams.invite-people.slack.workspaces.manage.dialog.heading": "Slack-kapcsolat kezelése",
          "people-and-teams.invite-people.thirdparty-connect.connect.label": "Csapattagok csatlakoztatása innen:",
          "people-and-teams.invite-people.thirdparty-footer.connect.label": "További csapattagok csatlakoztatása innen:",
          "people-and-teams.invite-people.thirdparty.connect-to.label": "Csatlakozva a következőkhöz:",
          "people-and-teams.invite-people.thirdparty.connect.or.label": "vagy",
          "people-and-teams.invite-people.thirdparty.microsoft.button": "Microsoft",
          "people-and-teams.invite-people.thirdparty.microsoft.connected.tooltip": "Microsoft leválasztása",
          "people-and-teams.invite-people.thirdparty.slack.button": "Slack",
          "people-and-teams.invite-people.thirdparty.slack.connected.tooltip": "Kapcsolat kezelése",
          "people-and-teams.invite-people.users.form.description.new": "A hozzáadott személyek automatikusan megkapják a meghívót, vagy azután, hogy a webhely adminja jóváhagyja a kérelmet.",
          "people-and-teams.invite-people.users.form.sendButton": "Csapattagok felvétele",
          "people-and-teams.invite-people.users.form.title": "Csapattagok felvétele",
          "people-and-teams.invite-people.users.form.title.product": "Csapattagok felvétele ide: {product}"
        },
        ot = {
          "people-and-teams.invite-people.flag.contact-support-action-label": "Contatta l'assistenza",
          "people-and-teams.invite-people.flag.generic-failed-flag-description": "{isAdmin, select, true {Non è stato possibile inviare richieste di accesso o inviti. Contatta il tuo amministratore per ricevere assistenza.} false {Non è stato possibile inviare richieste di accesso o inviti. }}",
          "people-and-teams.invite-people.flag.generic-failed-flag-title": "Si è verificato un errore",
          "people-and-teams.invite-people.flag.generic-success-flag-title": "Operazione riuscita",
          "people-and-teams.invite-people.flag.google-connect-success-flag-description": "Ora puoi cercare nel relativo elenco di contatti.",
          "people-and-teams.invite-people.flag.google-connect-success-flag-title": "Spazio di lavoro Google connesso",
          "people-and-teams.invite-people.flag.invite-failed-flag-description": "{isAdmin, select, false {{failedInviteCount, plural, one {Non è stato possibile invitare {emailFailedToInvite}. Contatta il tuo amministratore per ricevere assistenza. } other {Non è stato possibile spedire gli inviti. Contatta il tuo amministratore per ricevere assistenza. }}} true {{failedInviteCount, plural, one {Non è stato possibile invitare {emailFailedToInvite}. } other {Non è stato possibile spedire gli inviti. }}}}",
          "people-and-teams.invite-people.flag.invite-failed-flag-title": "{isAdmin, select, true {{failedInviteCount, plural, one {Invito non spedito} other {Inviti non spediti}}} false {{failedInviteCount, plural, one {Invito non riuscito} other {Inviti non riusciti}}}}",
          "people-and-teams.invite-people.flag.licence-exceeded-flag-description": "{userRole, select, admin {Non è stato possibile invitare altri utenti in quanto hai raggiunto il limite di utenti.} trusted {Non è stato possibile invitare altri utenti in quanto hai raggiunto il limite di utenti. Contatta il tuo amministratore per ricevere assistenza.} other {Non puoi invitare nessuno. Chiedi al tuo amministratore di effettuare l'upgrade del tuo piano.}}",
          "people-and-teams.invite-people.flag.licence-exceeded-flag-title": "Inviti non spediti",
          "people-and-teams.invite-people.flag.microsoft-connect-success-flag-description": "Ora puoi cercare nel relativo elenco di contatti.",
          "people-and-teams.invite-people.flag.microsoft-connect-success-flag-title": "Microsoft connesso",
          "people-and-teams.invite-people.flag.request-access-success-flag-description": "{requestAccessCount, plural, =0 {Non hai richiesto l'accesso per nessuno.} one {Hai richiesto l'accesso per {requestAccessCount} persona.} other {Hai richiesto l'accesso per {requestAccessCount} persone.}}",
          "people-and-teams.invite-people.flag.slack-connect-success-flag-description": "Ora puoi cercare nell'elenco di contatti di questo spazio di lavoro.",
          "people-and-teams.invite-people.flag.slack-connect-success-flag-title": "''{workspace}' da Slack connesso",
          "people-and-teams.invite-people.flag.slack-disconnect-success-flag-description": "Non puoi più cercare nell'elenco di contatti di questo spazio di lavoro.",
          "people-and-teams.invite-people.flag.slack-disconnect-success-flag-title": "Slack disconnesso",
          "people-and-teams.invite-people.flag.upgrade-plan-action-label": "Effettua l'upgrade del piano",
          "people-and-teams.invite-people.flag.view-users-action-label": "Visualizza utenti",
          "people-and-teams.invite-people.form.addMoreButton": "+ Aggiungi altri",
          "people-and-teams.invite-people.form.cancelButton": "Annulla",
          "people-and-teams.invite-people.form.email-input-label": "Indirizzo e-mail",
          "people-and-teams.invite-people.form.empty-email-message": "Aggiungi almeno un indirizzo e-mail",
          "people-and-teams.invite-people.form.invalid-email-message": "Inserisci un indirizzo e-mail valido",
          "people-and-teams.invite-people.form.invalid-multiple-email-message": "Per spedire gli inviti, correggi eventuali indirizzi non validi.",
          "people-and-teams.invite-people.form.invitee-list-third-party.label": "Trova membri del team",
          "people-and-teams.invite-people.form.invitee-list-third-party.no-integrations.label": "Aggiungi con l'indirizzo e-mail",
          "people-and-teams.invite-people.form.invitee-list.label": "Aggiungi con l'indirizzo e-mail",
          "people-and-teams.invite-people.form.invitee-list.note": "Inserisci fino a 10 indirizzi e-mail, separandoli con una virgola.",
          "people-and-teams.invite-people.form.invitee-list.user-picker.email.placeholder": "Inserisci l'indirizzo e-mail",
          "people-and-teams.invite-people.form.invitee-list.user-picker.placeholder": "Inserisci il nome o l'indirizzo e-mail di un utente",
          "people-and-teams.invite-people.form.jira-core-message": "Jira Core è incluso con gli altri prodotti Jira.",
          "people-and-teams.invite-people.form.no-product-selected-message": "Seleziona un prodotto",
          "people-and-teams.invite-people.form.select-products.label": "Seleziona prodotti",
          "people-and-teams.invite-people.form.sendButton": "Invita i membri del team",
          "people-and-teams.invite-people.form.title": "Invita i tuoi colleghi",
          "people-and-teams.invite-people.form.title.product": "Invita i tuoi colleghi a {product}",
          "people-and-teams.invite-people.form.too-many-email-addresses": "Puoi inviare fino a 10 inviti e-mail contemporaneamente.",
          "people-and-teams.invite-people.google.sync.button": "Sincronizza gli utenti da Google",
          "people-and-teams.invite-people.google.sync.button.separator": "O",
          "people-and-teams.invite-people.jira.core.option.subtext": "Incluso con altri prodotti Jira",
          "people-and-teams.invite-people.product.select.alloption": "Seleziona tutto",
          "people-and-teams.invite-people.product.select.placeholder": "Quale prodotto vuoi sia utilizzato dalle persone che stai invitando?",
          "people-and-teams.invite-people.slack.disconnect.dialog.disconnect.button": "Scollega",
          "people-and-teams.invite-people.slack.workspaces.connect.dialog.heading": "Connetti spazio di lavoro Slack",
          "people-and-teams.invite-people.slack.workspaces.dialog.body": "Seleziona uno spazio di lavoro da cui invitare utenti.",
          "people-and-teams.invite-people.slack.workspaces.dialog.connet-workspace": "Connetti spazio di lavoro",
          "people-and-teams.invite-people.slack.workspaces.dialog.disconnect.slack": "Disconnetti Slack",
          "people-and-teams.invite-people.slack.workspaces.disconnect.dialog.body": "Stai per disconnettere questo spazio di lavoro Slack, limitando la tua capacità di cercare nei relativi contatti.",
          "people-and-teams.invite-people.slack.workspaces.disconnect.dialog.heading": "Disconnetti Slack",
          "people-and-teams.invite-people.slack.workspaces.manage.dialog.heading": "Gestisci connessione Slack",
          "people-and-teams.invite-people.thirdparty-connect.connect.label": "Connetti membri del team da",
          "people-and-teams.invite-people.thirdparty-footer.connect.label": "Connetti altri membri del team da",
          "people-and-teams.invite-people.thirdparty.connect-to.label": "Connesso a",
          "people-and-teams.invite-people.thirdparty.connect.or.label": "O",
          "people-and-teams.invite-people.thirdparty.microsoft.button": "Microsoft",
          "people-and-teams.invite-people.thirdparty.microsoft.connected.tooltip": "Disconnetti Microsoft",
          "people-and-teams.invite-people.thirdparty.slack.button": "Slack",
          "people-and-teams.invite-people.thirdparty.slack.connected.tooltip": "Gestisci questa connessione",
          "people-and-teams.invite-people.users.form.description.new": "Le persone aggiunte riceveranno un invito, automaticamente o quando l'amministratore del sito avrà approvato la richiesta.",
          "people-and-teams.invite-people.users.form.sendButton": "Aggiungi membri del team",
          "people-and-teams.invite-people.users.form.title": "Aggiungi i membri del tuo team",
          "people-and-teams.invite-people.users.form.title.product": "Aggiungi i membri del tuo team a {product}"
        },
        it = {
          "people-and-teams.invite-people.flag.contact-support-action-label": "サポートに問い合わせ",
          "people-and-teams.invite-people.flag.generic-failed-flag-description": "{isAdmin, select, true {アクセス リクエストまたは招待メールを送信できませんでした。管理者にお問い合わせください。} false {アクセス リクエストまたは招待メールを送信できませんでした。 }}",
          "people-and-teams.invite-people.flag.generic-failed-flag-title": "エラーが発生しました",
          "people-and-teams.invite-people.flag.generic-success-flag-title": "成功",
          "people-and-teams.invite-people.flag.google-connect-success-flag-description": "Google Workspace の連絡先リストを検索できるようになりました。",
          "people-and-teams.invite-people.flag.google-connect-success-flag-title": "Google Workspace に接続しました",
          "people-and-teams.invite-people.flag.invite-failed-flag-description": "{isAdmin, select, false {{failedInviteCount, plural, other {招待メールを送信できませんでした。管理者にお問い合わせください。 }}} true {{failedInviteCount, plural, other {招待メールを送信できませんでした。 }}}}",
          "people-and-teams.invite-people.flag.invite-failed-flag-title": "{isAdmin, select, true {{failedInviteCount, plural, other {招待メールが送信されませんでした。}}} false {{failedInviteCount, plural, other {招待できませんでした}}}}",
          "people-and-teams.invite-people.flag.licence-exceeded-flag-description": "{userRole, select, admin {ユーザー数の上限に達しているため、招待できませんでした。} trusted {ユーザー数の上限に達しているため、招待できませんでした。管理者にお問い合わせください。} other {ユーザーを招待できません。管理者にプランのアップグレードを依頼してください。}}",
          "people-and-teams.invite-people.flag.licence-exceeded-flag-title": "招待メールが送信されませんでした。",
          "people-and-teams.invite-people.flag.microsoft-connect-success-flag-description": "Microsoft の連絡先リストを検索できるようになりました。",
          "people-and-teams.invite-people.flag.microsoft-connect-success-flag-title": "Microsoft に接続しました",
          "people-and-teams.invite-people.flag.request-access-success-flag-description": "{requestAccessCount, plural, =0 {誰のアクセスもリクエストしていません。} other {{requestAccessCount} 人のアクセスをリクエストしました。}}",
          "people-and-teams.invite-people.flag.slack-connect-success-flag-description": "このワークスペースの連絡先リストを検索できるようになりました。",
          "people-and-teams.invite-people.flag.slack-connect-success-flag-title": "Slack の「{workspace}」を接続しました",
          "people-and-teams.invite-people.flag.slack-disconnect-success-flag-description": "このワークスペースの連絡先リストを検索できなくなりました。",
          "people-and-teams.invite-people.flag.slack-disconnect-success-flag-title": "Slack との接続が切断されました",
          "people-and-teams.invite-people.flag.upgrade-plan-action-label": "プランをアップグレード",
          "people-and-teams.invite-people.flag.view-users-action-label": "ユーザーを表示",
          "people-and-teams.invite-people.form.addMoreButton": "+ さらに追加",
          "people-and-teams.invite-people.form.cancelButton": "キャンセル",
          "people-and-teams.invite-people.form.email-input-label": "メール アドレス",
          "people-and-teams.invite-people.form.empty-email-message": "メール アドレスを少なくとも 1 つ追加してください。",
          "people-and-teams.invite-people.form.invalid-email-message": "有効なメール アドレスを入力してください",
          "people-and-teams.invite-people.form.invalid-multiple-email-message": "無効なアドレスを修正して、招待を送信してください。",
          "people-and-teams.invite-people.form.invitee-list-third-party.label": "チームメイトを検索",
          "people-and-teams.invite-people.form.invitee-list-third-party.no-integrations.label": "メールで追加",
          "people-and-teams.invite-people.form.invitee-list.label": "メールで追加",
          "people-and-teams.invite-people.form.invitee-list.note": "10 件までのメール アドレスをコンマ区切りで入力してください。",
          "people-and-teams.invite-people.form.invitee-list.user-picker.email.placeholder": "メール アドレスを入力",
          "people-and-teams.invite-people.form.invitee-list.user-picker.placeholder": "ユーザー名またはメール アドレスを入力",
          "people-and-teams.invite-people.form.jira-core-message": "Jira Core は他の Jira 製品に含まれています。",
          "people-and-teams.invite-people.form.no-product-selected-message": "製品を選択してください",
          "people-and-teams.invite-people.form.select-products.label": "製品を選択",
          "people-and-teams.invite-people.form.sendButton": "チームメイトを招待",
          "people-and-teams.invite-people.form.title": "チームメイトを招待",
          "people-and-teams.invite-people.form.title.product": "チームメイトを {product} に招待",
          "people-and-teams.invite-people.form.too-many-email-addresses": "一度に送信できる招待メールは 10 件までです。",
          "people-and-teams.invite-people.google.sync.button": "Google からユーザーを同期",
          "people-and-teams.invite-people.google.sync.button.separator": "または",
          "people-and-teams.invite-people.jira.core.option.subtext": "他の Jira 製品に含まれる",
          "people-and-teams.invite-people.product.select.alloption": "すべて選択",
          "people-and-teams.invite-people.product.select.placeholder": "ユーザーをどの製品に招待しますか?",
          "people-and-teams.invite-people.slack.disconnect.dialog.disconnect.button": "接続を切断",
          "people-and-teams.invite-people.slack.workspaces.connect.dialog.heading": "Slack のワークスペースを接続",
          "people-and-teams.invite-people.slack.workspaces.dialog.body": "招待するユーザーがいるワークスペースを 1 つ選択してください。",
          "people-and-teams.invite-people.slack.workspaces.dialog.connet-workspace": "ワークスペースを接続",
          "people-and-teams.invite-people.slack.workspaces.dialog.disconnect.slack": "Slack の接続を切断",
          "people-and-teams.invite-people.slack.workspaces.disconnect.dialog.body": "この Slack ワークスペースの接続を切断すると、連絡先の検索が制限されます。",
          "people-and-teams.invite-people.slack.workspaces.disconnect.dialog.heading": "Slack の接続を切断",
          "people-and-teams.invite-people.slack.workspaces.manage.dialog.heading": "Slack の接続を管理",
          "people-and-teams.invite-people.thirdparty-connect.connect.label": "次のチームメイトを接続",
          "people-and-teams.invite-people.thirdparty-footer.connect.label": "次のチームメイトを接続",
          "people-and-teams.invite-people.thirdparty.connect-to.label": "接続先",
          "people-and-teams.invite-people.thirdparty.connect.or.label": "または",
          "people-and-teams.invite-people.thirdparty.microsoft.button": "Microsoft",
          "people-and-teams.invite-people.thirdparty.microsoft.connected.tooltip": "Microsoft の接続を切断",
          "people-and-teams.invite-people.thirdparty.slack.button": "Slack",
          "people-and-teams.invite-people.thirdparty.slack.connected.tooltip": "この接続を管理",
          "people-and-teams.invite-people.users.form.description.new": "追加されたユーザーは、自動的に、またはサイト管理者がリクエストを承認した後に招待されます。",
          "people-and-teams.invite-people.users.form.sendButton": "チームメイトを追加",
          "people-and-teams.invite-people.users.form.title": "チームメイトを追加",
          "people-and-teams.invite-people.users.form.title.product": "チームメイトを {product} に追加"
        },
        lt = {
          "people-and-teams.invite-people.flag.contact-support-action-label": "지원팀에 문의",
          "people-and-teams.invite-people.flag.generic-failed-flag-description": "{isAdmin, select, true {액세스 요청 또는 초대를 보내지 못했습니다. 관리자에게 문의하여 도움을 받으세요.} false {액세스 요청 또는 초대를 보내지 못했습니다. }}",
          "people-and-teams.invite-people.flag.generic-failed-flag-title": "문제가 발생했습니다",
          "people-and-teams.invite-people.flag.generic-success-flag-title": "성공",
          "people-and-teams.invite-people.flag.google-connect-success-flag-description": "이제 연락처 목록을 검색할 수 있습니다.",
          "people-and-teams.invite-people.flag.google-connect-success-flag-title": "Google Workspace 연결됨",
          "people-and-teams.invite-people.flag.invite-failed-flag-description": "{isAdmin, select, false {{failedInviteCount, plural, other {초대를 보내지 못했습니다. 관리자에게 문의하여 도움을 받으세요. }}} true {{failedInviteCount, plural, other {초대를 보내지 못했습니다. }}}}",
          "people-and-teams.invite-people.flag.invite-failed-flag-title": "{isAdmin, select, true {{failedInviteCount, plural, other {초대를 보내지 못했습니다}}} false {{failedInviteCount, plural, other {초대 실패}}}}",
          "people-and-teams.invite-people.flag.licence-exceeded-flag-description": "{userRole, select, admin {사용자 제한에 도달하여 아무도 초대하지 못했습니다.} trusted {사용자 제한에 도달하여 아무도 초대하지 못했습니다. 관리자에게 문의하여 도움을 받으세요.} other {아무도 초대할 수 없습니다. 관리자에게 문의하여 플랜을 업그레이드하세요.}}",
          "people-and-teams.invite-people.flag.licence-exceeded-flag-title": "초대를 보내지 못함",
          "people-and-teams.invite-people.flag.microsoft-connect-success-flag-description": "이제 연락처 목록을 검색할 수 있습니다.",
          "people-and-teams.invite-people.flag.microsoft-connect-success-flag-title": "Microsoft 연결됨",
          "people-and-teams.invite-people.flag.request-access-success-flag-description": "{requestAccessCount, plural, =0 {액세스를 요청하지 않았습니다.} other {{requestAccessCount}명에 대한 액세스 권한을 요청했습니다.}}",
          "people-and-teams.invite-people.flag.slack-connect-success-flag-description": "이제 이 워크스페이스의 연락처 목록을 검색할 수 있습니다.",
          "people-and-teams.invite-people.flag.slack-connect-success-flag-title": "Slack의 ''{workspace}' 연결됨",
          "people-and-teams.invite-people.flag.slack-disconnect-success-flag-description": "더 이상 이 워크스페이스의 연락처 목록을 검색할 수 없습니다.",
          "people-and-teams.invite-people.flag.slack-disconnect-success-flag-title": "Slack 연결 해제됨",
          "people-and-teams.invite-people.flag.upgrade-plan-action-label": "플랜 업그레이드",
          "people-and-teams.invite-people.flag.view-users-action-label": "사용자 보기",
          "people-and-teams.invite-people.form.addMoreButton": "+ 더 추가",
          "people-and-teams.invite-people.form.cancelButton": "취소",
          "people-and-teams.invite-people.form.email-input-label": "이메일 주소",
          "people-and-teams.invite-people.form.empty-email-message": "이메일 주소를 한 개 이상 추가하세요",
          "people-and-teams.invite-people.form.invalid-email-message": "유효한 이메일 주소를 입력하세요",
          "people-and-teams.invite-people.form.invalid-multiple-email-message": "초대를 보내려면 잘못된 이메일 주소를 수정하세요.",
          "people-and-teams.invite-people.form.invitee-list-third-party.label": "팀원 찾기",
          "people-and-teams.invite-people.form.invitee-list-third-party.no-integrations.label": "이메일로 추가",
          "people-and-teams.invite-people.form.invitee-list.label": "이메일로 추가",
          "people-and-teams.invite-people.form.invitee-list.note": "최대 10개의 이메일 주소를 쉼표로 구분하여 입력하세요.",
          "people-and-teams.invite-people.form.invitee-list.user-picker.email.placeholder": "이메일 주소 입력",
          "people-and-teams.invite-people.form.invitee-list.user-picker.placeholder": "사용자 이름 또는 이메일 주소 입력",
          "people-and-teams.invite-people.form.jira-core-message": "Jira Core는 다른 Jira 제품에 포함되어 있습니다.",
          "people-and-teams.invite-people.form.no-product-selected-message": "제품을 선택하세요",
          "people-and-teams.invite-people.form.select-products.label": "제품 선택",
          "people-and-teams.invite-people.form.sendButton": "팀원 초대",
          "people-and-teams.invite-people.form.title": "팀원 초대",
          "people-and-teams.invite-people.form.title.product": "팀원을 {product}에 초대",
          "people-and-teams.invite-people.form.too-many-email-addresses": "이메일 초대는 한 번에 최대 10개까지만 보낼 수 있습니다.",
          "people-and-teams.invite-people.google.sync.button": "Google에서 사용자 동기화",
          "people-and-teams.invite-people.google.sync.button.separator": "또는",
          "people-and-teams.invite-people.jira.core.option.subtext": "다른 Jira 제품에 포함되어 있음",
          "people-and-teams.invite-people.product.select.alloption": "모두 선택",
          "people-and-teams.invite-people.product.select.placeholder": "어느 제품에 사용자를 초대하시나요?",
          "people-and-teams.invite-people.slack.disconnect.dialog.disconnect.button": "연결 해제",
          "people-and-teams.invite-people.slack.workspaces.connect.dialog.heading": "Slack 워크스페이스 연결",
          "people-and-teams.invite-people.slack.workspaces.dialog.body": "사용자를 초대할 하나의 워크스페이스를 선택하세요.",
          "people-and-teams.invite-people.slack.workspaces.dialog.connet-workspace": "워크스페이스 연결",
          "people-and-teams.invite-people.slack.workspaces.dialog.disconnect.slack": "Slack 연결 해제",
          "people-and-teams.invite-people.slack.workspaces.disconnect.dialog.body": "이 Slack 워크스페이스를 연결 해제하고 연락처를 검색하는 기능을 제한하려고 합니다.",
          "people-and-teams.invite-people.slack.workspaces.disconnect.dialog.heading": "Slack 연결 해제",
          "people-and-teams.invite-people.slack.workspaces.manage.dialog.heading": "Slack 연결 관리",
          "people-and-teams.invite-people.thirdparty-connect.connect.label": "팀원을 연결할 통합",
          "people-and-teams.invite-people.thirdparty-footer.connect.label": "더 많은 팀원을 연결할 통합",
          "people-and-teams.invite-people.thirdparty.connect-to.label": "다음에 연결",
          "people-and-teams.invite-people.thirdparty.connect.or.label": "또는",
          "people-and-teams.invite-people.thirdparty.microsoft.button": "Microsoft",
          "people-and-teams.invite-people.thirdparty.microsoft.connected.tooltip": "Microsoft 연결 해제",
          "people-and-teams.invite-people.thirdparty.slack.button": "Slack",
          "people-and-teams.invite-people.thirdparty.slack.connected.tooltip": "이 연결 관리",
          "people-and-teams.invite-people.users.form.description.new": "추가하는 사용자는 자동으로 또는 사이트 관리자가 요청을 승인한 후에 초대를 받게 됩니다.",
          "people-and-teams.invite-people.users.form.sendButton": "팀원 추가",
          "people-and-teams.invite-people.users.form.title": "팀원 추가",
          "people-and-teams.invite-people.users.form.title.product": "팀원을 {product}에 추가"
        },
        st = {
          "people-and-teams.invite-people.flag.generic-failed-flag-description": "{isAdmin, select, true {Vi kunne ikke sende tilgangsforespørsler eller invitasjoner. Ta kontakt med administrator for hjelp.} false {Vi kunne ikke sende tilgangsforespørsler eller invitasjoner. }}",
          "people-and-teams.invite-people.flag.generic-failed-flag-title": "Det oppstod en feil",
          "people-and-teams.invite-people.flag.generic-success-flag-title": "Vellykket",
          "people-and-teams.invite-people.flag.google-connect-success-flag-description": "Du kan nå søke gjennom kontaktlisten.",
          "people-and-teams.invite-people.flag.google-connect-success-flag-title": "Google Workspace er tilkoblet",
          "people-and-teams.invite-people.flag.invite-failed-flag-title": "{isAdmin, select, true {{failedInviteCount, plural, one {Invitasjon ikke sendt} other {Invitasjoner ikke sendt}}} false {{failedInviteCount, plural, one {Invitasjon mislyktes} other {Invitasjoner mislyktes}}}}",
          "people-and-teams.invite-people.flag.microsoft-connect-success-flag-description": "Du kan nå søke gjennom kontaktlisten.",
          "people-and-teams.invite-people.flag.microsoft-connect-success-flag-title": "Microsoft er tilkoblet",
          "people-and-teams.invite-people.flag.request-access-success-flag-description": "{requestAccessCount, plural, =0 {Du ba om tilgang for ingen.} one {Du ba om tilgang for {requestAccessCount} person.} other {Du ba om tilgang for {requestAccessCount} personer.}}",
          "people-and-teams.invite-people.flag.slack-connect-success-flag-description": "Du kan nå søke gjennom dette arbeidsområdets kontaktliste.",
          "people-and-teams.invite-people.flag.slack-connect-success-flag-title": "«{workspace}» fra Slack koblet til",
          "people-and-teams.invite-people.flag.slack-disconnect-success-flag-description": "Du kan ikke lenger søke gjennom dette arbeidsområdets kontaktliste.",
          "people-and-teams.invite-people.flag.slack-disconnect-success-flag-title": "Slack er frakoblet",
          "people-and-teams.invite-people.flag.upgrade-plan-action-label": "Oppgrader abonnement",
          "people-and-teams.invite-people.flag.view-users-action-label": "Se brukere",
          "people-and-teams.invite-people.form.addMoreButton": "+ Legg til flere",
          "people-and-teams.invite-people.form.cancelButton": "Avbryt",
          "people-and-teams.invite-people.form.email-input-label": "E-postadresse",
          "people-and-teams.invite-people.form.empty-email-message": "Legg til minst én e-postadresse",
          "people-and-teams.invite-people.form.invalid-email-message": "Oppgi en gyldig e-postadresse",
          "people-and-teams.invite-people.form.invitee-list-third-party.label": "Finn teammedlemmer",
          "people-and-teams.invite-people.form.invitee-list-third-party.no-integrations.label": "Legg til med e-post",
          "people-and-teams.invite-people.form.invitee-list.user-picker.email.placeholder": "Oppgi e-postadresse",
          "people-and-teams.invite-people.form.invitee-list.user-picker.placeholder": "Skriv inn brukerens navn eller e-postadresse",
          "people-and-teams.invite-people.form.select-products.label": "Velg produkter",
          "people-and-teams.invite-people.form.sendButton": "Inviter teammedlemmer",
          "people-and-teams.invite-people.form.title": "Inviter teammedlemmene dine",
          "people-and-teams.invite-people.form.title.product": "Inviter teammedlemmene dine til {product}",
          "people-and-teams.invite-people.slack.disconnect.dialog.disconnect.button": "Koble fra",
          "people-and-teams.invite-people.slack.workspaces.connect.dialog.heading": "Koble til Slack-arbeidsområde",
          "people-and-teams.invite-people.slack.workspaces.dialog.body": "Velg ett arbeidsområde som du ønsker å invitere brukere fra.",
          "people-and-teams.invite-people.slack.workspaces.dialog.connet-workspace": "Koble til arbeidsområde",
          "people-and-teams.invite-people.slack.workspaces.dialog.disconnect.slack": "Koble fra Slack",
          "people-and-teams.invite-people.slack.workspaces.disconnect.dialog.body": "Du er i ferd med å koble fra dette Slack-arbeidsområdet og begrense muligheten til å søke gjennom dets kontakter.",
          "people-and-teams.invite-people.slack.workspaces.disconnect.dialog.heading": "Koble fra Slack",
          "people-and-teams.invite-people.slack.workspaces.manage.dialog.heading": "Administrer Slack-tilkobling",
          "people-and-teams.invite-people.thirdparty-connect.connect.label": "Koble til teammedlemmer fra",
          "people-and-teams.invite-people.thirdparty-footer.connect.label": "Koble til flere teammedlemmer fra",
          "people-and-teams.invite-people.thirdparty.connect-to.label": "Koblet til",
          "people-and-teams.invite-people.thirdparty.connect.or.label": "eller",
          "people-and-teams.invite-people.thirdparty.microsoft.button": "Microsoft",
          "people-and-teams.invite-people.thirdparty.microsoft.connected.tooltip": "Koble fra Microsoft",
          "people-and-teams.invite-people.thirdparty.slack.button": "Slack",
          "people-and-teams.invite-people.thirdparty.slack.connected.tooltip": "Administrer denne tilkoblingen",
          "people-and-teams.invite-people.users.form.description.new": "Personer du legger til, vil motta en invitasjon automatisk eller etter at nettstedsadministratoren din har godkjent forespørselen.",
          "people-and-teams.invite-people.users.form.sendButton": "Legg til teammedlemmer",
          "people-and-teams.invite-people.users.form.title": "Legg til teammedlemmene dine",
          "people-and-teams.invite-people.users.form.title.product": "Legg til teammedlemmene dine i {product}"
        },
        rt = {
          "people-and-teams.invite-people.flag.contact-support-action-label": "Skontaktuj się z zespołem wsparcia",
          "people-and-teams.invite-people.flag.generic-failed-flag-description": "{isAdmin, select, true {Nie można wysyłać żadnych wniosków o dostęp ani zaproszeń. Skontaktuj się z administratorem w celu uzyskania pomocy.} false {Nie można wysyłać żadnych wniosków o dostęp ani zaproszeń. }}",
          "people-and-teams.invite-people.flag.generic-failed-flag-title": "Coś poszło nie tak",
          "people-and-teams.invite-people.flag.generic-success-flag-title": "Sukces",
          "people-and-teams.invite-people.flag.google-connect-success-flag-description": "Teraz możesz przeszukiwać dostępną w niej listę kontaktów.",
          "people-and-teams.invite-people.flag.google-connect-success-flag-title": "Usługa Google Workspace połączona",
          "people-and-teams.invite-people.flag.invite-failed-flag-description": "{isAdmin, select, false {{failedInviteCount, plural, one {Nie można zaprosić użytkownika {emailFailedToInvite}. Skontaktuj się z administratorem w celu uzyskania pomocy. } few {Nie można wysłać żadnych zaproszeń. Skontaktuj się z administratorem w celu uzyskania pomocy. } many {Nie można wysłać żadnych zaproszeń. Skontaktuj się z administratorem w celu uzyskania pomocy. } other {Nie można wysłać żadnych zaproszeń. Skontaktuj się z administratorem w celu uzyskania pomocy. }}} true {{failedInviteCount, plural, one {Nie można zaprosić użytkownika {emailFailedToInvite}. } few {Nie można wysłać żadnych zaproszeń. } many {Nie można wysłać żadnych zaproszeń. } other {Nie można wysłać żadnych zaproszeń. }}}}",
          "people-and-teams.invite-people.flag.invite-failed-flag-title": "{isAdmin, select, true {{failedInviteCount, plural, one {Nie wysłano zaproszenia} few {Nie wysłano zaproszeń} many {Nie wysłano zaproszeń} other {Nie wysłano zaproszeń}}} false {{failedInviteCount, plural, one {Wysłanie zaproszenia nie powiodło się} few {Wysłanie zaproszeń nie powiodło się} many {Wysłanie zaproszeń nie powiodło się} other {Wysłanie zaproszeń nie powiodło się}}}}",
          "people-and-teams.invite-people.flag.licence-exceeded-flag-description": "{userRole, select, admin {Nie można nikogo zaprosić, ponieważ osiągnięto limit użytkowników.} trusted {Nie można nikogo zaprosić, ponieważ osiągnięto limit użytkowników. Skontaktuj się z administratorem w celu uzyskania pomocy.} other {Nie możesz nikogo zaprosić. Poproś administratora o uaktualnienie do wyższego planu.}}",
          "people-and-teams.invite-people.flag.licence-exceeded-flag-title": "Nie wysłano zaproszeń",
          "people-and-teams.invite-people.flag.microsoft-connect-success-flag-description": "Teraz możesz przeszukiwać dostępną w niej listę kontaktów.",
          "people-and-teams.invite-people.flag.microsoft-connect-success-flag-title": "Usługa Microsoft połączona",
          "people-and-teams.invite-people.flag.request-access-success-flag-description": "{requestAccessCount, plural, =0 {Nie wysłano żadnych wniosków o dostęp.} one {Wysłano wniosek o dostęp dla {requestAccessCount} użytkownika.} few {Wysłano wniosek o dostęp dla {requestAccessCount} użytkowników.} many {Wysłano wniosek o dostęp dla {requestAccessCount} użytkowników.} other {Wysłano wniosek o dostęp dla {requestAccessCount} użytkownika.}}",
          "people-and-teams.invite-people.flag.slack-connect-success-flag-description": "Teraz możesz przeszukiwać listę kontaktów dostępną w tej przestrzeni roboczej.",
          "people-and-teams.invite-people.flag.slack-connect-success-flag-title": "Przestrzeń robocza „{workspace}” w usłudze Slack połączona",
          "people-and-teams.invite-people.flag.slack-disconnect-success-flag-description": "Nie możesz już przeszukiwać listy kontaktów dostępnej w tej przestrzeni roboczej.",
          "people-and-teams.invite-people.flag.slack-disconnect-success-flag-title": "Usługa Slack odłączona",
          "people-and-teams.invite-people.flag.upgrade-plan-action-label": "Uaktualnij plan",
          "people-and-teams.invite-people.flag.view-users-action-label": "Wyświetl użytkowników",
          "people-and-teams.invite-people.form.addMoreButton": "+ Dodaj więcej",
          "people-and-teams.invite-people.form.cancelButton": "Anuluj",
          "people-and-teams.invite-people.form.email-input-label": "Adres e-mail",
          "people-and-teams.invite-people.form.empty-email-message": "Dodaj co najmniej jeden adres e-mail",
          "people-and-teams.invite-people.form.invalid-email-message": "Wprowadź poprawny adres e-mail",
          "people-and-teams.invite-people.form.invalid-multiple-email-message": "Aby wysłać zaproszenia, popraw wszystkie nieprawidłowe adresy.",
          "people-and-teams.invite-people.form.invitee-list-third-party.label": "Znajdź członków zespołu",
          "people-and-teams.invite-people.form.invitee-list-third-party.no-integrations.label": "Dodaj przez wiadomość e-mail",
          "people-and-teams.invite-people.form.invitee-list.label": "Dodaj przez wiadomość e-mail",
          "people-and-teams.invite-people.form.invitee-list.note": "Wpisz do 10 adresów e-mail oddzielonych przecinkami.",
          "people-and-teams.invite-people.form.invitee-list.user-picker.email.placeholder": "Wprowadź adres e-mail",
          "people-and-teams.invite-people.form.invitee-list.user-picker.placeholder": "Wprowadź nazwę użytkownika lub adres e-mail",
          "people-and-teams.invite-people.form.jira-core-message": "Aplikacja Jira Core jest uwzględniona w innych produktach Jira.",
          "people-and-teams.invite-people.form.no-product-selected-message": "Wybierz produkt",
          "people-and-teams.invite-people.form.select-products.label": "Wybierz produkty",
          "people-and-teams.invite-people.form.sendButton": "Zaproś do zespołu",
          "people-and-teams.invite-people.form.title": "Zaproś członków zespołu",
          "people-and-teams.invite-people.form.title.product": "Zaproś członków zespołu do {product}",
          "people-and-teams.invite-people.form.too-many-email-addresses": "Na raz można wysłać do 10 zaproszeń e-mail.",
          "people-and-teams.invite-people.google.sync.button": "Synchronizuj użytkowników z Google",
          "people-and-teams.invite-people.google.sync.button.separator": "LUB",
          "people-and-teams.invite-people.jira.core.option.subtext": "Uwzględniono w innych produktach Jira",
          "people-and-teams.invite-people.product.select.alloption": "Zaznacz wszystko",
          "people-and-teams.invite-people.product.select.placeholder": "Do którego produktu zapraszasz użytkowników?",
          "people-and-teams.invite-people.slack.disconnect.dialog.disconnect.button": "Odłącz",
          "people-and-teams.invite-people.slack.workspaces.connect.dialog.heading": "Połącz przestrzeń roboczą Slack",
          "people-and-teams.invite-people.slack.workspaces.dialog.body": "Wybierz jedną przestrzeń roboczą, z której chcesz zaprosić użytkowników.",
          "people-and-teams.invite-people.slack.workspaces.dialog.connet-workspace": "Połącz przestrzeń roboczą",
          "people-and-teams.invite-people.slack.workspaces.dialog.disconnect.slack": "Odłącz usługę Slack",
          "people-and-teams.invite-people.slack.workspaces.disconnect.dialog.body": "Zamierzasz odłączyć tę przestrzeń roboczą w usłudze Slack i ograniczyć możliwość przeszukiwania dostępnych w niej kontaktów.",
          "people-and-teams.invite-people.slack.workspaces.disconnect.dialog.heading": "Odłącz usługę Slack",
          "people-and-teams.invite-people.slack.workspaces.manage.dialog.heading": "Zarządzaj połączeniem z usługą Slack",
          "people-and-teams.invite-people.thirdparty-connect.connect.label": "Połącz członków zespołu z usług",
          "people-and-teams.invite-people.thirdparty-footer.connect.label": "Połącz więcej członków zespołu z usług",
          "people-and-teams.invite-people.thirdparty.connect-to.label": "Połączone usługi:",
          "people-and-teams.invite-people.thirdparty.connect.or.label": "LUB",
          "people-and-teams.invite-people.thirdparty.microsoft.button": "Microsoft",
          "people-and-teams.invite-people.thirdparty.microsoft.connected.tooltip": "Odłącz usługę Microsoft",
          "people-and-teams.invite-people.thirdparty.slack.button": "Slack",
          "people-and-teams.invite-people.thirdparty.slack.connected.tooltip": "Zarządzaj tym połączeniem",
          "people-and-teams.invite-people.users.form.description.new": "Osoby, które dodasz, otrzymają zaproszenie automatycznie lub po zatwierdzeniu wniosku przez administratora witryny.",
          "people-and-teams.invite-people.users.form.sendButton": "Dodaj członków zespołu",
          "people-and-teams.invite-people.users.form.title": "Dodaj członków zespołu",
          "people-and-teams.invite-people.users.form.title.product": "Dodaj członków zespołu do produktu {product}"
        },
        pt = {
          "people-and-teams.invite-people.flag.contact-support-action-label": "Entre em contato com o suporte",
          "people-and-teams.invite-people.flag.generic-failed-flag-description": "{isAdmin, select, true {Não foi possível enviar solicitações ou convites de acesso. Entre em contato com seu administrador para obter ajuda.} false {Não foi possível enviar solicitações ou convites de acesso. }}",
          "people-and-teams.invite-people.flag.generic-failed-flag-title": "Algo deu errado",
          "people-and-teams.invite-people.flag.generic-success-flag-title": "Sucesso",
          "people-and-teams.invite-people.flag.google-connect-success-flag-description": "Agora é possível pesquisar na lista de contatos.",
          "people-and-teams.invite-people.flag.google-connect-success-flag-title": "A área de trabalho do Google está conectada",
          "people-and-teams.invite-people.flag.invite-failed-flag-description": "{isAdmin, select, false {{failedInviteCount, plural, one {Não foi possível convidar {emailFailedToInvite}. Entre em contato com seu administrador para obter ajuda. } other {Não foi possível enviar os convites. Entre em contato com seu administrador para obter ajuda. }}} true {{failedInviteCount, plural, one {Não foi possível convidar {emailFailedToInvite}. } other {Não foi possível enviar os convites. }}}}",
          "people-and-teams.invite-people.flag.invite-failed-flag-title": "{isAdmin, select, true {{failedInviteCount, plural, one {Convites não enviados} other {Convites não enviados}}} false {{failedInviteCount, plural, one {Falha nos convites} other {Falha nos convites}}}}",
          "people-and-teams.invite-people.flag.licence-exceeded-flag-description": "{userRole, select, admin {Não foi possível convidar ninguém porque você atingiu o limite de usuário.} trusted {Não foi possível convidar ninguém porque você atingiu o limite de usuário. Entre em contato com o administrador para obter ajuda.} other {Você não pode convidar ninguém. Peça ao administrador para fazer o upgrade do seu plano.}}",
          "people-and-teams.invite-people.flag.licence-exceeded-flag-title": "Convites não enviados",
          "people-and-teams.invite-people.flag.microsoft-connect-success-flag-description": "Agora é possível pesquisar na lista de contatos.",
          "people-and-teams.invite-people.flag.microsoft-connect-success-flag-title": "Microsoft conectado",
          "people-and-teams.invite-people.flag.request-access-success-flag-description": "{requestAccessCount, plural, =0 {Você não solicitou acesso para ninguém.} one {Você solicitou acesso para {requestAccessCount} pessoa.} other {Você solicitou acesso para {requestAccessCount} pessoas.}}",
          "people-and-teams.invite-people.flag.slack-connect-success-flag-description": "Agora é possível pesquisar na lista de contatos desta área de trabalho.",
          "people-and-teams.invite-people.flag.slack-connect-success-flag-title": "{workspace} do Slack conectado",
          "people-and-teams.invite-people.flag.slack-disconnect-success-flag-description": "Não é mais possível pesquisar na lista de contatos desta área de trabalho.",
          "people-and-teams.invite-people.flag.slack-disconnect-success-flag-title": "O Slack foi desconectado",
          "people-and-teams.invite-people.flag.upgrade-plan-action-label": "Fazer upgrade do plano",
          "people-and-teams.invite-people.flag.view-users-action-label": "Exibir usuários",
          "people-and-teams.invite-people.form.addMoreButton": "+ Adicionar mais",
          "people-and-teams.invite-people.form.cancelButton": "Cancelar",
          "people-and-teams.invite-people.form.email-input-label": "Endereço de e-mail",
          "people-and-teams.invite-people.form.empty-email-message": "Adicione ao menos um endereço de e-mail",
          "people-and-teams.invite-people.form.invalid-email-message": "Insira um endereço de e-mail válido",
          "people-and-teams.invite-people.form.invalid-multiple-email-message": "Para enviar convites, corrija os endereços inválidos.",
          "people-and-teams.invite-people.form.invitee-list-third-party.label": "Localizar colegas de equipe",
          "people-and-teams.invite-people.form.invitee-list-third-party.no-integrations.label": "Adicionar com e-mail",
          "people-and-teams.invite-people.form.invitee-list.label": "Adicionar com e-mail",
          "people-and-teams.invite-people.form.invitee-list.note": "Insira até 10 endereços de e-mail, separados por vírgulas.",
          "people-and-teams.invite-people.form.invitee-list.user-picker.email.placeholder": "Digitar endereço de e-mail",
          "people-and-teams.invite-people.form.invitee-list.user-picker.placeholder": "Insira o nome ou endereço de e-mail do usuário",
          "people-and-teams.invite-people.form.jira-core-message": "O Jira Core está incluído com outros produtos do Jira.",
          "people-and-teams.invite-people.form.no-product-selected-message": "Selecione um produto",
          "people-and-teams.invite-people.form.select-products.label": "Selecionar produtos",
          "people-and-teams.invite-people.form.sendButton": "Convidar colegas de equipe",
          "people-and-teams.invite-people.form.title": "Convidar colegas de equipe",
          "people-and-teams.invite-people.form.title.product": "Convide seus colegas de equipe para o {product}",
          "people-and-teams.invite-people.form.too-many-email-addresses": "Você só pode enviar até 10 convites por e-mail por vez.",
          "people-and-teams.invite-people.google.sync.button": "Sincronizar usuários do Google",
          "people-and-teams.invite-people.google.sync.button.separator": "OU",
          "people-and-teams.invite-people.jira.core.option.subtext": "Incluído com outros produtos do Jira",
          "people-and-teams.invite-people.product.select.alloption": "Selecionar tudo",
          "people-and-teams.invite-people.product.select.placeholder": "Para qual produto você está convidando pessoas?",
          "people-and-teams.invite-people.slack.disconnect.dialog.disconnect.button": "Desconectar",
          "people-and-teams.invite-people.slack.workspaces.connect.dialog.heading": "Conecte o Slack à área de trabalho",
          "people-and-teams.invite-people.slack.workspaces.dialog.body": "Selecione uma área de trabalho onde estão os usuários que você quer convidar.",
          "people-and-teams.invite-people.slack.workspaces.dialog.connet-workspace": "Conectar à área de trabalho",
          "people-and-teams.invite-people.slack.workspaces.dialog.disconnect.slack": "Desconectar do Slack",
          "people-and-teams.invite-people.slack.workspaces.disconnect.dialog.body": "Você está prestes a se desconectar da área de trabalho do Slack e limitar a capacidade de pesquisa nos contatos.",
          "people-and-teams.invite-people.slack.workspaces.disconnect.dialog.heading": "Desconectar do Slack",
          "people-and-teams.invite-people.slack.workspaces.manage.dialog.heading": "Gerenciar conexão do Slack",
          "people-and-teams.invite-people.thirdparty-connect.connect.label": "Conecte colegas de equipe do",
          "people-and-teams.invite-people.thirdparty-footer.connect.label": "Conecte mais colegas de equipe do",
          "people-and-teams.invite-people.thirdparty.connect-to.label": "Conectado a",
          "people-and-teams.invite-people.thirdparty.connect.or.label": "OU",
          "people-and-teams.invite-people.thirdparty.microsoft.button": "Microsoft",
          "people-and-teams.invite-people.thirdparty.microsoft.connected.tooltip": "Desconectar da Microsoft",
          "people-and-teams.invite-people.thirdparty.slack.button": "Slack",
          "people-and-teams.invite-people.thirdparty.slack.connected.tooltip": "Gerenciar essa conexão",
          "people-and-teams.invite-people.users.form.description.new": "As pessoas que você adicionar vão receber o convite na hora ou depois que o administrador do site tiver aprovado a solicitação.",
          "people-and-teams.invite-people.users.form.sendButton": "Adicione colegas de equipe",
          "people-and-teams.invite-people.users.form.title": "Adicione seus colegas de equipe",
          "people-and-teams.invite-people.users.form.title.product": "Adicione colegas de equipe ao {product}"
        },
        ct = {
          "people-and-teams.invite-people.flag.generic-failed-flag-description": "{isAdmin, select, true {Não foi possível enviar os pedidos de acesso nem os convites. Contacte o seu administrador para obter ajuda.} false {Não foi possível enviar os pedidos de acesso nem os convites. }}",
          "people-and-teams.invite-people.flag.generic-failed-flag-title": "Ocorreu um erro",
          "people-and-teams.invite-people.flag.generic-success-flag-title": "Sucesso",
          "people-and-teams.invite-people.flag.invite-failed-flag-title": "{isAdmin, select, true {{failedInviteCount, plural, one {Convite não enviado} other {Convites não enviados}}} false {{failedInviteCount, plural, one {O convite falhou} other {Os convites falharam}}}}",
          "people-and-teams.invite-people.flag.request-access-success-flag-description": "{requestAccessCount, plural, =0 {Não solicitou acesso para ninguém.} one {Solicitou acesso para {requestAccessCount} pessoa.} other {Solicitou acesso para {requestAccessCount} pessoas.}}",
          "people-and-teams.invite-people.flag.upgrade-plan-action-label": "Atualizar plano",
          "people-and-teams.invite-people.flag.view-users-action-label": "Ver os utilizadores",
          "people-and-teams.invite-people.form.addMoreButton": "+ Adicionar mais",
          "people-and-teams.invite-people.form.cancelButton": "Cancelar",
          "people-and-teams.invite-people.form.email-input-label": "Endereço de e-mail",
          "people-and-teams.invite-people.form.empty-email-message": "Introduza pelo menos um endereço de e-mail",
          "people-and-teams.invite-people.form.invalid-email-message": "Introduza um endereço de e-mail válido"
        },
        dt = {
          "people-and-teams.invite-people.flag.contact-support-action-label": "Обратитесь в службу поддержки",
          "people-and-teams.invite-people.flag.generic-failed-flag-description": "{isAdmin, select, true {Не удалось отправить запросы на доступ или приглашения. Обратитесь за помощью к администратору.} false {Не удалось отправить запросы на доступ или приглашения. }}",
          "people-and-teams.invite-people.flag.generic-failed-flag-title": "Произошла ошибка",
          "people-and-teams.invite-people.flag.generic-success-flag-title": "Готово",
          "people-and-teams.invite-people.flag.google-connect-success-flag-description": "Теперь вы можете выполнять поиск в списке контактов этого рабочего пространства.",
          "people-and-teams.invite-people.flag.google-connect-success-flag-title": "Подключение Google Workspace выполнено",
          "people-and-teams.invite-people.flag.invite-failed-flag-description": "{isAdmin, select, false {{failedInviteCount, plural, one {Не удалось отправить приглашение {emailFailedToInvite}. Обратитесь за помощью к администратору. } few {Не удалось отправить приглашения. Обратитесь за помощью к администратору. } many {Не удалось отправить приглашения. Обратитесь за помощью к администратору. } other {Не удалось отправить приглашения. Обратитесь за помощью к администратору. }}} true {{failedInviteCount, plural, one {Не удалось отправить приглашение {emailFailedToInvite}. } few {Не удалось отправить приглашения. } many {Не удалось отправить приглашения. } other {Не удалось отправить приглашения. }}}}",
          "people-and-teams.invite-people.flag.invite-failed-flag-title": "{isAdmin, select, true {{failedInviteCount, plural, one {приглашение не отправлено} few {приглашения не отправлено} many {приглашений не отправлено} other {приглашения не отправлено}}} false {{failedInviteCount, plural, one {ошибка в процессе приглашения} few {ошибки в процессе приглашения} many {ошибок в процессе приглашения} other {ошибки в процессе приглашения}}}}",
          "people-and-teams.invite-people.flag.licence-exceeded-flag-description": "{userRole, select, admin {Не удалось никого пригласить, потому что превышен лимит пользователей.} trusted {Не удалось никого пригласить, потому что превышен лимит пользователей. Обратитесь за помощью к администратору.} other {Вы не можете никого приглашать. Обратитесь к администратору, чтобы обновить план.}}",
          "people-and-teams.invite-people.flag.licence-exceeded-flag-title": "Приглашения не отправлены",
          "people-and-teams.invite-people.flag.microsoft-connect-success-flag-description": "Теперь вы можете выполнять поиск в списке контактов этого рабочего пространства.",
          "people-and-teams.invite-people.flag.microsoft-connect-success-flag-title": "Подключение Microsoft выполнено",
          "people-and-teams.invite-people.flag.request-access-success-flag-description": "{requestAccessCount, plural, =0 {Вы не запросили доступ для пользователей.} one {Вы запросили доступ для {requestAccessCount} пользователя.} few {Вы запросили доступ для {requestAccessCount} пользователей.} many {Вы запросили доступ для {requestAccessCount} пользователей.} other {Вы запросили доступ для {requestAccessCount} пользователя.}}",
          "people-and-teams.invite-people.flag.slack-connect-success-flag-description": "Теперь вы можете выполнять поиск в списке контактов этого рабочего пространства.",
          "people-and-teams.invite-people.flag.slack-connect-success-flag-title": "Рабочее пространство «{workspace}» из Slack подключено",
          "people-and-teams.invite-people.flag.slack-disconnect-success-flag-description": "Вы больше не можете выполнять поиск в списке контактов этого рабочего пространства.",
          "people-and-teams.invite-people.flag.slack-disconnect-success-flag-title": "Отключение Slack выполнено",
          "people-and-teams.invite-people.flag.upgrade-plan-action-label": "Перейти на другой тарифный план",
          "people-and-teams.invite-people.flag.view-users-action-label": "Просмотреть пользователей",
          "people-and-teams.invite-people.form.addMoreButton": "+ Добавить еще",
          "people-and-teams.invite-people.form.cancelButton": "Отмена",
          "people-and-teams.invite-people.form.email-input-label": "Адрес электронной почты",
          "people-and-teams.invite-people.form.empty-email-message": "Добавьте хотя бы один адрес электронной почты",
          "people-and-teams.invite-people.form.invalid-email-message": "Введите действительный адрес электронной почты",
          "people-and-teams.invite-people.form.invalid-multiple-email-message": "Чтобы отправить приглашения, исправьте недействительные адреса.",
          "people-and-teams.invite-people.form.invitee-list-third-party.label": "Найти коллег",
          "people-and-teams.invite-people.form.invitee-list-third-party.no-integrations.label": "Добавление по адресу электронной почты",
          "people-and-teams.invite-people.form.invitee-list.label": "Добавление по адресу электронной почты",
          "people-and-teams.invite-people.form.invitee-list.note": "Введите до 10 адресов, разделенных запятыми.",
          "people-and-teams.invite-people.form.invitee-list.user-picker.email.placeholder": "Введите адрес электронной почты",
          "people-and-teams.invite-people.form.invitee-list.user-picker.placeholder": "Введите имя или адрес электронной почты пользователя",
          "people-and-teams.invite-people.form.jira-core-message": "Jira Core входит в состав других продуктов Jira.",
          "people-and-teams.invite-people.form.no-product-selected-message": "Выберите продукт",
          "people-and-teams.invite-people.form.select-products.label": "Выберите продукты",
          "people-and-teams.invite-people.form.sendButton": "Пригласить коллег",
          "people-and-teams.invite-people.form.title": "Пригласить коллег",
          "people-and-teams.invite-people.form.title.product": "Пригласите коллег начать работу с {product}",
          "people-and-teams.invite-people.form.too-many-email-addresses": "За один раз можно отправить приглашение не более чем на 10 адресов.",
          "people-and-teams.invite-people.google.sync.button": "Синхронизировать пользователей из Google",
          "people-and-teams.invite-people.google.sync.button.separator": "или",
          "people-and-teams.invite-people.jira.core.option.subtext": "Входит в состав других продуктов Jira",
          "people-and-teams.invite-people.product.select.alloption": "Выбрать все",
          "people-and-teams.invite-people.product.select.placeholder": "В какой продукт вы приглашаете пользователей?",
          "people-and-teams.invite-people.slack.disconnect.dialog.disconnect.button": "Отключить",
          "people-and-teams.invite-people.slack.workspaces.connect.dialog.heading": "Подключить рабочее пространство Slack",
          "people-and-teams.invite-people.slack.workspaces.dialog.body": "Выберите рабочее пространство, из которого вы хотите пригласить пользователей.",
          "people-and-teams.invite-people.slack.workspaces.dialog.connet-workspace": "Подключить рабочее пространство",
          "people-and-teams.invite-people.slack.workspaces.dialog.disconnect.slack": "Отключить Slack",
          "people-and-teams.invite-people.slack.workspaces.disconnect.dialog.body": "Вы собираетесь отключить это рабочее пространство Slack и ограничить возможность поиска в списке его контактов.",
          "people-and-teams.invite-people.slack.workspaces.disconnect.dialog.heading": "Отключить Slack",
          "people-and-teams.invite-people.slack.workspaces.manage.dialog.heading": "Управление подключением Slack",
          "people-and-teams.invite-people.thirdparty-connect.connect.label": "Подключить коллег из",
          "people-and-teams.invite-people.thirdparty-footer.connect.label": "Подключить других коллег из",
          "people-and-teams.invite-people.thirdparty.connect-to.label": "Подключено к",
          "people-and-teams.invite-people.thirdparty.connect.or.label": "или",
          "people-and-teams.invite-people.thirdparty.microsoft.button": "Microsoft",
          "people-and-teams.invite-people.thirdparty.microsoft.connected.tooltip": "Отключить Microsoft",
          "people-and-teams.invite-people.thirdparty.slack.button": "Slack",
          "people-and-teams.invite-people.thirdparty.slack.connected.tooltip": "Управление этим подключением",
          "people-and-teams.invite-people.users.form.description.new": "Добавленные пользователи получат приглашение автоматически или после подтверждения запроса администратором сайта.",
          "people-and-teams.invite-people.users.form.sendButton": "Добавить коллег",
          "people-and-teams.invite-people.users.form.title": "Добавьте своих коллег",
          "people-and-teams.invite-people.users.form.title.product": "Добавьте коллег для работы с {product}"
        },
        ut = {
          "people-and-teams.invite-people.flag.generic-failed-flag-description": "{isAdmin, select, true {Nepodarilo sa odoslať žiadne žiadosti o prístup ani pozvánky. Požiadajte o pomoc správcu.} false {Nepodarilo sa odoslať žiadne žiadosti o prístup ani pozvánky. }}",
          "people-and-teams.invite-people.flag.generic-failed-flag-title": "Niečo sa nepodarilo",
          "people-and-teams.invite-people.flag.generic-success-flag-title": "Úspech",
          "people-and-teams.invite-people.flag.invite-failed-flag-title": "{isAdmin, select, true {{failedInviteCount, plural, one {Pozvánku sa nepodarilo odoslať} few {Pozvánky sa nepodarilo odoslať} many {Pozvánky sa nepodarilo odoslať} other {Pozvánky sa nepodarilo odoslať}}} false {{failedInviteCount, plural, one {Pozvanie sa nepodarilo} few {Pozvania sa nepodarili} many {Pozvania sa nepodarili} other {Pozvania sa nepodarili}}}}",
          "people-and-teams.invite-people.flag.request-access-success-flag-description": "{requestAccessCount, plural, =0 {Nepožiadali ste o prístup pre nikoho.} one {Požiadali ste o prístup pre {requestAccessCount} človeka.} few {Požiadali ste o prístup pre {requestAccessCount} ľudí.} many {Požiadali ste o prístup pre {requestAccessCount} človeka.} other {Požiadali ste o prístup pre {requestAccessCount} ľudí.}}",
          "people-and-teams.invite-people.flag.upgrade-plan-action-label": "Inovovať plán",
          "people-and-teams.invite-people.flag.view-users-action-label": "Zobraziť používateľov",
          "people-and-teams.invite-people.form.addMoreButton": "+ Pridať viac",
          "people-and-teams.invite-people.form.cancelButton": "Zrušiť",
          "people-and-teams.invite-people.form.email-input-label": "E-mailová adresa",
          "people-and-teams.invite-people.form.empty-email-message": "Pridajte aspoň jednu e-mailovú adresu",
          "people-and-teams.invite-people.form.invalid-email-message": "Zadajte platnú e-mailovú adresu"
        },
        mt = {
          "people-and-teams.invite-people.flag.contact-support-action-label": "Contacta con el servicio de soporte",
          "people-and-teams.invite-people.flag.generic-failed-flag-description": "{isAdmin, select, true {No hemos podido enviar ninguna solicitud de acceso o invitación. Para obtener ayuda, ponte en contacto con tu administrador.} false {No hemos podido enviar ninguna solicitud de acceso o invitación. }}",
          "people-and-teams.invite-people.flag.generic-failed-flag-title": "Algo ha fallado",
          "people-and-teams.invite-people.flag.generic-success-flag-title": "Correcto",
          "people-and-teams.invite-people.flag.invite-failed-flag-description": "{isAdmin, select, false {{failedInviteCount, plural, one {No hemos podido enviar ninguna invitación a {emailFailedToInvite}. Para obtener ayuda, ponte en contacto con tu administrador. } other {No hemos podido enviar ninguna invitación. Para obtener ayuda, ponte en contacto con tu administrador. }}} true {{failedInviteCount, plural, one {No hemos podido enviar ninguna invitación a {emailFailedToInvite}. } other {No hemos podido enviar ninguna invitación. }}}}",
          "people-and-teams.invite-people.flag.invite-failed-flag-title": "{isAdmin, select, true {{failedInviteCount, plural, one {Invitación no enviada} other {Invitaciones no enviadas}}} false {{failedInviteCount, plural, one {Error en la invitación} other {Error en las invitaciones}}}}",
          "people-and-teams.invite-people.flag.licence-exceeded-flag-description": "{userRole, select, admin {No hemos podido invitar a nadie porque has llegado al límite de usuarios.} trusted {No hemos podido enviar ninguna invitación porque has llegado al límite de usuarios. Para obtener ayuda, ponte en contacto con tu administrador.} other {No puedes invitar a nadie. Pídele al administrador que te mejore el plan.}}",
          "people-and-teams.invite-people.flag.licence-exceeded-flag-title": "Invitaciones no enviadas",
          "people-and-teams.invite-people.flag.request-access-success-flag-description": "{requestAccessCount, plural, =0 {No has solicitado acceso para nadie.} one {Has solicitado acceso para {requestAccessCount} persona.} other {Has solicitado acceso para {requestAccessCount} personas.}}",
          "people-and-teams.invite-people.flag.upgrade-plan-action-label": "Actualizar plan",
          "people-and-teams.invite-people.flag.view-users-action-label": "Ver usuarios",
          "people-and-teams.invite-people.form.addMoreButton": "+ Añadir más",
          "people-and-teams.invite-people.form.cancelButton": "Cancelar",
          "people-and-teams.invite-people.form.email-input-label": "Dirección de correo electrónico",
          "people-and-teams.invite-people.form.empty-email-message": "Añade al menos una dirección de correo electrónico.",
          "people-and-teams.invite-people.form.invalid-email-message": "Introduce una dirección de correo electrónico válida",
          "people-and-teams.invite-people.form.invalid-multiple-email-message": "Para enviar tus invitaciones, corrige las direcciones no válidas.",
          "people-and-teams.invite-people.form.invitee-list.label": "Añadir con correo electrónico",
          "people-and-teams.invite-people.form.invitee-list.note": "Introduce un máximo de 10 direcciones de correo electrónico, separadas por comas.",
          "people-and-teams.invite-people.form.jira-core-message": "Jira Core viene incluido en otros productos de Jira.",
          "people-and-teams.invite-people.form.no-product-selected-message": "Selecciona un producto",
          "people-and-teams.invite-people.form.too-many-email-addresses": "Solo puedes enviar 10 invitaciones por correo electrónico a la vez.",
          "people-and-teams.invite-people.google.sync.button": "Sincronizar usuarios de Google",
          "people-and-teams.invite-people.google.sync.button.separator": "o",
          "people-and-teams.invite-people.jira.core.option.subtext": "Se incluye con otros productos de Jira.",
          "people-and-teams.invite-people.product.select.alloption": "Seleccionar todo",
          "people-and-teams.invite-people.product.select.placeholder": "¿A qué producto vas a invitar a la gente?"
        },
        gt = {
          "people-and-teams.invite-people.flag.contact-support-action-label": "Kontakta supporten",
          "people-and-teams.invite-people.flag.generic-failed-flag-description": "{isAdmin, select, true {Vi kunde inte skicka några åtkomstförfrågningar eller inbjudningar. Kontakta din administratör för att få hjälp.} false {Vi kunde inte skicka några åtkomstförfrågningar eller inbjudningar. }}",
          "people-and-teams.invite-people.flag.generic-failed-flag-title": "Något gick fel",
          "people-and-teams.invite-people.flag.generic-success-flag-title": "Klart!",
          "people-and-teams.invite-people.flag.google-connect-success-flag-description": "Nu kan du söka i dess kontaktlista.",
          "people-and-teams.invite-people.flag.google-connect-success-flag-title": "Google Workspace har anslutits",
          "people-and-teams.invite-people.flag.invite-failed-flag-description": "{isAdmin, select, false {{failedInviteCount, plural, one {Vi kunde inte bjuda in {emailFailedToInvite}. Kontakta din administratör för att få hjälp. } other {Vi kunde inte skicka några inbjudningar. Kontakta din administratör för att få hjälp. }}} true {{failedInviteCount, plural, one {Vi kunde inte bjuda in {emailFailedToInvite}. } other {Vi kunde inte skicka några inbjudningar. }}}}",
          "people-and-teams.invite-people.flag.invite-failed-flag-title": "{isAdmin, select, true {{failedInviteCount, plural, one {Inbjudan har inte skickats} other {Inbjudningar har inte skickats}}} false {{failedInviteCount, plural, one {Inbjudan misslyckades} other {Inbjudningar misslyckades}}}}",
          "people-and-teams.invite-people.flag.licence-exceeded-flag-description": "{userRole, select, admin {Vi kunde inte bjuda in någon eftersom du har nått din användargräns.} trusted {Vi kunde inte bjuda in någon eftersom du har nått din användargräns. Kontakta din administratör för att få hjälp.} other {Du kan inte bjuda in någon. Be din administratör uppgradera din plan.}}",
          "people-and-teams.invite-people.flag.licence-exceeded-flag-title": "Inbjudningar har inte skickats",
          "people-and-teams.invite-people.flag.microsoft-connect-success-flag-description": "Nu kan du söka i dess kontaktlista.",
          "people-and-teams.invite-people.flag.microsoft-connect-success-flag-title": "Microsoft har anslutits",
          "people-and-teams.invite-people.flag.request-access-success-flag-description": "{requestAccessCount, plural, =0 {Du har inte begärt åtkomst för någon.} one {Du har begärt åtkomst för {requestAccessCount} person.} other {Du har begärt åtkomst för {requestAccessCount} personer.}}",
          "people-and-teams.invite-people.flag.slack-connect-success-flag-description": "Nu kan du söka i det här arbetsutrymmets kontaktlista.",
          "people-and-teams.invite-people.flag.slack-connect-success-flag-title": "{workspace} från Slack har anslutits",
          "people-and-teams.invite-people.flag.slack-disconnect-success-flag-description": "Du kan inte söka i det här arbetsutrymmets kontaktlista längre.",
          "people-and-teams.invite-people.flag.slack-disconnect-success-flag-title": "Slack har kopplats från",
          "people-and-teams.invite-people.flag.upgrade-plan-action-label": "Uppgradera plan",
          "people-and-teams.invite-people.flag.view-users-action-label": "Visa användare",
          "people-and-teams.invite-people.form.addMoreButton": "+ Lägg till fler",
          "people-and-teams.invite-people.form.cancelButton": "Avbryt",
          "people-and-teams.invite-people.form.email-input-label": "E-postadress",
          "people-and-teams.invite-people.form.empty-email-message": "Lägg till minst en e-postadress",
          "people-and-teams.invite-people.form.invalid-email-message": "Ange en giltig e-postadress",
          "people-and-teams.invite-people.form.invalid-multiple-email-message": "Korrigera eventuella ogiltiga adresser för att kunna skicka dina inbjudningar.",
          "people-and-teams.invite-people.form.invitee-list-third-party.label": "Hitta teammedlemmar",
          "people-and-teams.invite-people.form.invitee-list-third-party.no-integrations.label": "Lägg till med e-post",
          "people-and-teams.invite-people.form.invitee-list.label": "Lägg till med e-post",
          "people-and-teams.invite-people.form.invitee-list.note": "Ange upp till tio e-postadresser, åtskilda med kommatecken.",
          "people-and-teams.invite-people.form.invitee-list.user-picker.email.placeholder": "Ange e-postadress",
          "people-and-teams.invite-people.form.invitee-list.user-picker.placeholder": "Ange användarens namn eller e-postadress",
          "people-and-teams.invite-people.form.jira-core-message": "Jira Core inkluderas med andra Jira-produkter.",
          "people-and-teams.invite-people.form.no-product-selected-message": "Välj en produkt",
          "people-and-teams.invite-people.form.select-products.label": "Välj produkter",
          "people-and-teams.invite-people.form.sendButton": "Bjud in teammedlemmar",
          "people-and-teams.invite-people.form.title": "Bjud in teammedlemmar",
          "people-and-teams.invite-people.form.title.product": "Bjud in dina teammedlemmar till {product}",
          "people-and-teams.invite-people.form.too-many-email-addresses": "Du kan bara skicka upp till tio e-postinbjudningar åt gången.",
          "people-and-teams.invite-people.google.sync.button": "Synkronisera användare från Google",
          "people-and-teams.invite-people.google.sync.button.separator": "eller",
          "people-and-teams.invite-people.jira.core.option.subtext": "Inkluderas med andra Jira-produkter",
          "people-and-teams.invite-people.product.select.alloption": "Markera alla",
          "people-and-teams.invite-people.product.select.placeholder": "Vilken produkt bjuder du in personer till?",
          "people-and-teams.invite-people.slack.disconnect.dialog.disconnect.button": "Koppla från",
          "people-and-teams.invite-people.slack.workspaces.connect.dialog.heading": "Anslut Slack-arbetsutrymme",
          "people-and-teams.invite-people.slack.workspaces.dialog.body": "Välj ett arbetsutrymme som du vill bjuda in användare från.",
          "people-and-teams.invite-people.slack.workspaces.dialog.connet-workspace": "Anslut arbetsutrymmet",
          "people-and-teams.invite-people.slack.workspaces.dialog.disconnect.slack": "Koppla från Slack",
          "people-and-teams.invite-people.slack.workspaces.disconnect.dialog.body": "Du är på väg att koppla från det här Slack-arbetsutrymmet, vilket begränsar möjligheten att söka bland dess kontakter.",
          "people-and-teams.invite-people.slack.workspaces.disconnect.dialog.heading": "Koppla från Slack",
          "people-and-teams.invite-people.slack.workspaces.manage.dialog.heading": "Hantera Slack-anslutning",
          "people-and-teams.invite-people.thirdparty-connect.connect.label": "Anslut teammedlemmar från",
          "people-and-teams.invite-people.thirdparty-footer.connect.label": "Anslut fler teammedlemmar från",
          "people-and-teams.invite-people.thirdparty.connect-to.label": "Ansluten till",
          "people-and-teams.invite-people.thirdparty.connect.or.label": "eller",
          "people-and-teams.invite-people.thirdparty.microsoft.button": "Microsoft",
          "people-and-teams.invite-people.thirdparty.microsoft.connected.tooltip": "Koppla från Microsoft",
          "people-and-teams.invite-people.thirdparty.slack.button": "Slack",
          "people-and-teams.invite-people.thirdparty.slack.connected.tooltip": "Hantera anslutningen",
          "people-and-teams.invite-people.users.form.description.new": "Personer som du lägger till får en inbjudan automatiskt, eller när webbplatsadministratören har godkänt förfrågan.",
          "people-and-teams.invite-people.users.form.sendButton": "Lägg till teammedlemmar",
          "people-and-teams.invite-people.users.form.title": "Lägg till teammedlemmarna",
          "people-and-teams.invite-people.users.form.title.product": "Lägg till teammedlemmarna i {product}"
        },
        ft = {
          "people-and-teams.invite-people.flag.contact-support-action-label": "ติดต่อฝ่ายสนับสนุน",
          "people-and-teams.invite-people.flag.generic-failed-flag-description": "{isAdmin, select, true {เราไม่สามารถส่งคำขอการเข้าถึงหรือคำเชิญใด ๆ ได้ โปรดติดต่อผู้ดูแลระบบของคุณเพื่อรับความช่วยเหลือ} false {เราไม่สามารถส่งคำขอการเข้าถึงหรือคำเชิญใด ๆ ได้ }}",
          "people-and-teams.invite-people.flag.generic-failed-flag-title": "มีข้อผิดพลาดบางอย่างเกิดขึ้น",
          "people-and-teams.invite-people.flag.generic-success-flag-title": "สำเร็จ",
          "people-and-teams.invite-people.flag.google-connect-success-flag-description": "ตอนนี้คุณสามารถค้นหารายชื่อผู้ติดต่อได้แล้ว",
          "people-and-teams.invite-people.flag.google-connect-success-flag-title": "เชื่อมต่อพื้นที่ทำงานของ Google แล้ว",
          "people-and-teams.invite-people.flag.invite-failed-flag-description": "{isAdmin, select, false {{failedInviteCount, plural, other {เราไม่สามารถส่งคำเชิญใด ๆ ได้ โปรดติดต่อผู้ดูแลระบบของคุณเพื่อรับความช่วยเหลือ }}} true {{failedInviteCount, plural, other {เราไม่สามารถส่งคำเชิญใด ๆ ได้ }}}}",
          "people-and-teams.invite-people.flag.invite-failed-flag-title": "{isAdmin, select, true {{failedInviteCount, plural, other {ไม่ได้ส่งคำเชิญ}}} false {{failedInviteCount, plural, other {คำเชิญล้มเหลว}}}}",
          "people-and-teams.invite-people.flag.licence-exceeded-flag-description": "{userRole, select, admin {เราไม่สามารถเชิญผู้ใดได้เนื่องจากคุณได้ทำการเชิญผู้ใช้ของคุณเกินขีดจำกัดแล้ว} trusted {เราไม่สามารถเชิญผู้ใดได้เนื่องจากคุณได้ทำการเชิญผู้ใช้ของคุณเกินขีดจำกัดแล้ว โปรดติดต่อผู้ดูแลระบบของคุณเพื่อรับความช่วยเหลือ} other {คุณไม่สามารถเชิญผู้ใดได้ ขอให้ผู้ดูแลระบบของคุณอัปเกรดแผนของคุณ}}",
          "people-and-teams.invite-people.flag.licence-exceeded-flag-title": "ไม่ได้ส่งคำเชิญ",
          "people-and-teams.invite-people.flag.microsoft-connect-success-flag-description": "ตอนนี้คุณสามารถค้นหารายชื่อผู้ติดต่อได้แล้ว",
          "people-and-teams.invite-people.flag.microsoft-connect-success-flag-title": "เชื่อมต่อกับ Microsoft แล้ว",
          "people-and-teams.invite-people.flag.request-access-success-flag-description": "{requestAccessCount, plural, =0 {คุณไม่ได้ส่งคำขอการเข้าถึงสำหรับผู้ใด} other {คุณได้ส่งคำขอการเข้าถึงสำหรับผู้ใช้ {requestAccessCount} คน}}",
          "people-and-teams.invite-people.flag.slack-connect-success-flag-description": "ตอนนี้คุณสามารถค้นหาผ่านรายชื่อผู้ติดต่อของพื้นที่ทำงานได้แล้ว",
          "people-and-teams.invite-people.flag.slack-connect-success-flag-title": "เชื่อมต่อ ‘{workspace}’ จาก Slack แล้ว",
          "people-and-teams.invite-people.flag.slack-disconnect-success-flag-description": "คุณไม่สามารถค้นหาผ่านรายชื่อผู้ติดต่อของพื้นที่ทำงานได้อีกต่อไป",
          "people-and-teams.invite-people.flag.slack-disconnect-success-flag-title": "ยกเลิกการเชื่อมต่อ Slack แล้ว",
          "people-and-teams.invite-people.flag.upgrade-plan-action-label": "อัปเกรดแผน",
          "people-and-teams.invite-people.flag.view-users-action-label": "ดูผู้ใช้",
          "people-and-teams.invite-people.form.addMoreButton": "+ เพิ่มอีก",
          "people-and-teams.invite-people.form.cancelButton": "ยกเลิก",
          "people-and-teams.invite-people.form.email-input-label": "ที่อยู่อีเมล",
          "people-and-teams.invite-people.form.empty-email-message": "โปรดเพิ่มที่อยู่อีเมลอย่างน้อยหนึ่งรายการ",
          "people-and-teams.invite-people.form.invalid-email-message": "โปรดป้อนที่อยู่อีเมลที่ถูกต้อง",
          "people-and-teams.invite-people.form.invalid-multiple-email-message": "โปรดแก้ไขที่อยู่ที่ไม่ถูกต้องเพื่อส่งคำเชิญของคุณ",
          "people-and-teams.invite-people.form.invitee-list-third-party.label": "ค้นหาเพื่อนร่วมทีม",
          "people-and-teams.invite-people.form.invitee-list-third-party.no-integrations.label": "เพิ่มด้วยอีเมล",
          "people-and-teams.invite-people.form.invitee-list.label": "เพิ่มด้วยอีเมล",
          "people-and-teams.invite-people.form.invitee-list.note": "ป้อนอีเมลสูงสุดถึง 10 รายการ โดยคั่นด้วยเครื่องหมายจุลภาค",
          "people-and-teams.invite-people.form.invitee-list.user-picker.email.placeholder": "ป้อนที่อยู่อีเมล",
          "people-and-teams.invite-people.form.invitee-list.user-picker.placeholder": "ป้อนชื่อผู้ใช้หรือที่อยู่อีเมล",
          "people-and-teams.invite-people.form.jira-core-message": "Jira Core ถูกรวมอยู่กับผลิตภัณฑ์อื่นของ Jira",
          "people-and-teams.invite-people.form.no-product-selected-message": "โปรดเลือกผลิตภัณฑ์",
          "people-and-teams.invite-people.form.select-products.label": "เลือกผลิตภัณฑ์",
          "people-and-teams.invite-people.form.sendButton": "เชิญเพื่อนร่วมทีม",
          "people-and-teams.invite-people.form.title": "เชิญเพื่อนร่วมทีมของคุณ",
          "people-and-teams.invite-people.form.title.product": "เชิญเพื่อนร่วมทีมของคุณไปยัง {product}",
          "people-and-teams.invite-people.form.too-many-email-addresses": "คุณสามารถส่งอีเมลคำเชิญได้สูงสุดถึง 10 รายการเท่านั้นในแต่ละครั้ง",
          "people-and-teams.invite-people.google.sync.button": "ซิงค์ผู้ใช้จาก Google",
          "people-and-teams.invite-people.google.sync.button.separator": "หรือ",
          "people-and-teams.invite-people.jira.core.option.subtext": "รวมอยู่กับผลิตภัณฑ์อื่นของ Jira",
          "people-and-teams.invite-people.product.select.alloption": "เลือกทั้งหมด",
          "people-and-teams.invite-people.product.select.placeholder": "ผลิตภัณฑ์ใดที่คุณกำลังเชิญผู้คนให้เข้าร่วม",
          "people-and-teams.invite-people.slack.disconnect.dialog.disconnect.button": "ยกเลิกการเชื่อมต่อ",
          "people-and-teams.invite-people.slack.workspaces.connect.dialog.heading": "เชื่อมต่อพื้นที่ทำงาน Slack",
          "people-and-teams.invite-people.slack.workspaces.dialog.body": "เลือกหนึ่งพื้นที่ทำงานที่คุณต้องการเชิญผู้ใช้",
          "people-and-teams.invite-people.slack.workspaces.dialog.connet-workspace": "เชื่อมต่อพื้นที่ทำงาน",
          "people-and-teams.invite-people.slack.workspaces.dialog.disconnect.slack": "ยกเลิกการเชื่อมต่อ Slack",
          "people-and-teams.invite-people.slack.workspaces.disconnect.dialog.body": "คุณกำลังจะยกเลิกการเชื่อมต่อพื้นที่ทำงาน Slack นี้และจำกัดความสามารถในการค้นหาผ่านรายชื่อติดต่อ",
          "people-and-teams.invite-people.slack.workspaces.disconnect.dialog.heading": "ยกเลิกการเชื่อมต่อ Slack",
          "people-and-teams.invite-people.slack.workspaces.manage.dialog.heading": "จัดการการเชื่อมต่อ Slack",
          "people-and-teams.invite-people.thirdparty-connect.connect.label": "เชื่อมต่อเพื่อนร่วมทีมจาก",
          "people-and-teams.invite-people.thirdparty-footer.connect.label": "เชื่อมต่อเพื่อนร่วมทีมอื่น ๆ จาก",
          "people-and-teams.invite-people.thirdparty.connect-to.label": "เชื่อมต่อกับ",
          "people-and-teams.invite-people.thirdparty.connect.or.label": "หรือ",
          "people-and-teams.invite-people.thirdparty.microsoft.button": "Microsoft",
          "people-and-teams.invite-people.thirdparty.microsoft.connected.tooltip": "ยกเลิกการเชื่อมต่อกับ Microsoft",
          "people-and-teams.invite-people.thirdparty.slack.button": "Slack",
          "people-and-teams.invite-people.thirdparty.slack.connected.tooltip": "จัดการการเชื่อมต่อนี้",
          "people-and-teams.invite-people.users.form.description.new": "บุคคลที่คุณเพิ่มเข้ามาจะได้รับคำเชิญโดยอัตโนมัติหรือหลังจากผู้ดูแลเว็บไซต์ของคุณได้อนุมัติคำขอแล้ว",
          "people-and-teams.invite-people.users.form.sendButton": "เพิ่มเพื่อนร่วมทีม",
          "people-and-teams.invite-people.users.form.title": "เพิ่มเพื่อนร่วมทีมของคุณ",
          "people-and-teams.invite-people.users.form.title.product": "เพิ่มเพื่อนร่วมทีมของคุณไปยัง {product}"
        },
        vt = {
          "people-and-teams.invite-people.flag.contact-support-action-label": "Destek ekibiyle iletişime geçin",
          "people-and-teams.invite-people.flag.generic-failed-flag-description": "{isAdmin, select, true {Hiçbir erişim talebi veya davet gönderilemedi. Yardım almak için yöneticinizle iletişime geçin.} false {Hiçbir erişim talebi veya davet gönderilemedi. }}",
          "people-and-teams.invite-people.flag.generic-failed-flag-title": "Bir hata oluştu",
          "people-and-teams.invite-people.flag.generic-success-flag-title": "Başarılı",
          "people-and-teams.invite-people.flag.google-connect-success-flag-description": "Artık kişiler listesinde arama yapabilirsiniz.",
          "people-and-teams.invite-people.flag.google-connect-success-flag-title": "Google Workspace bağlandı",
          "people-and-teams.invite-people.flag.invite-failed-flag-description": "{isAdmin, select, false {{failedInviteCount, plural, one {{emailFailedToInvite} adresine davet gönderilemedi. Yardım almak için yöneticinizle iletişime geçin. } other {Hiçbir davet gönderilemedi. Yardım almak için yöneticinizle iletişime geçin. }}} true {{failedInviteCount, plural, one {{emailFailedToInvite} adresine davet gönderilemedi. } other {Hiçbir davet gönderilemedi. }}}}",
          "people-and-teams.invite-people.flag.invite-failed-flag-title": "{isAdmin, select, true {{failedInviteCount, plural, one {Davet gönderilemedi} other {Davetler gönderilemedi}}} false {{failedInviteCount, plural, one {Davet başarısız oldu} other {Davetler başarısız oldu}}}}",
          "people-and-teams.invite-people.flag.licence-exceeded-flag-description": "{userRole, select, admin {Kullanıcı sınırınıza ulaştığınız için kimseyi davet edemedik.} trusted {Kullanıcı sınırınıza ulaştığınız için kimseyi davet edemedik. Yardım almak için yöneticinizle iletişime geçin.} other {Kimseyi davet edemezsiniz. Yöneticinizden planınızı yükseltmesini isteyin.}}",
          "people-and-teams.invite-people.flag.licence-exceeded-flag-title": "Davetler gönderilemedi",
          "people-and-teams.invite-people.flag.microsoft-connect-success-flag-description": "Artık kişiler listesinde arama yapabilirsiniz.",
          "people-and-teams.invite-people.flag.microsoft-connect-success-flag-title": "Microsoft bağlandı",
          "people-and-teams.invite-people.flag.request-access-success-flag-description": "{requestAccessCount, plural, =0 {Kimse için erişim talep etmediniz.} one {{requestAccessCount} kişi için erişim talep ettiniz.} other {{requestAccessCount} kişi için erişim talep ettiniz.}}",
          "people-and-teams.invite-people.flag.slack-connect-success-flag-description": "Artık bu çalışma alanının kişiler listesinde arama yapabilirsiniz.",
          "people-and-teams.invite-people.flag.slack-connect-success-flag-title": "Slack'ten ‘{workspace}’ çalışma alanı bağlandı",
          "people-and-teams.invite-people.flag.slack-disconnect-success-flag-description": "Artık bu çalışma alanının kişiler listesinde arama yapamazsınız.",
          "people-and-teams.invite-people.flag.slack-disconnect-success-flag-title": "Slack bağlantısı kesildi",
          "people-and-teams.invite-people.flag.upgrade-plan-action-label": "Planı yükselt",
          "people-and-teams.invite-people.flag.view-users-action-label": "Kullanıcılara göz at",
          "people-and-teams.invite-people.form.addMoreButton": "+ Daha fazla ekle",
          "people-and-teams.invite-people.form.cancelButton": "İptal",
          "people-and-teams.invite-people.form.email-input-label": "E-posta adresi",
          "people-and-teams.invite-people.form.empty-email-message": "Lütfen en az bir e-posta adresi ekleyin",
          "people-and-teams.invite-people.form.invalid-email-message": "Lütfen geçerli bir e-posta adresi girin",
          "people-and-teams.invite-people.form.invalid-multiple-email-message": "Davet göndermek için lütfen geçersiz adresleri düzeltin.",
          "people-and-teams.invite-people.form.invitee-list-third-party.label": "Takım arkadaşları bulun",
          "people-and-teams.invite-people.form.invitee-list-third-party.no-integrations.label": "E-posta ile ekleyin",
          "people-and-teams.invite-people.form.invitee-list.label": "E-posta ile ekleyin",
          "people-and-teams.invite-people.form.invitee-list.note": "Virgülle ayırarak en fazla 10 e-posta adresi girin.",
          "people-and-teams.invite-people.form.invitee-list.user-picker.email.placeholder": "E-posta adresi girin",
          "people-and-teams.invite-people.form.invitee-list.user-picker.placeholder": "Kullanıcının adını veya e-posta adresini girin",
          "people-and-teams.invite-people.form.jira-core-message": "Jira Core diğer Jira ürünlerine dahildir.",
          "people-and-teams.invite-people.form.no-product-selected-message": "Lütfen bir ürün seçin",
          "people-and-teams.invite-people.form.select-products.label": "Ürün seçin",
          "people-and-teams.invite-people.form.sendButton": "Takım arkadaşları davet et",
          "people-and-teams.invite-people.form.title": "Takım arkadaşlarınızı davet edin",
          "people-and-teams.invite-people.form.title.product": "Takım arkadaşlarınızı {product} ürününe davet edin",
          "people-and-teams.invite-people.form.too-many-email-addresses": "Aynı anda en fazla 10 davet e-postası gönderebilirsiniz.",
          "people-and-teams.invite-people.google.sync.button": "Kullanıcıları Google'dan senkronize edin",
          "people-and-teams.invite-people.google.sync.button.separator": "VEYA",
          "people-and-teams.invite-people.jira.core.option.subtext": "Diğer Jira ürünlerine dahildir",
          "people-and-teams.invite-people.product.select.alloption": "Tümünü seç",
          "people-and-teams.invite-people.product.select.placeholder": "Kişileri davet ettiğiniz ürün hangisi?",
          "people-and-teams.invite-people.slack.disconnect.dialog.disconnect.button": "Bağlantıyı kes",
          "people-and-teams.invite-people.slack.workspaces.connect.dialog.heading": "Slack çalışma alanı bağlayın",
          "people-and-teams.invite-people.slack.workspaces.dialog.body": "Kullanıcılarını davet etmek istediğiniz bir çalışma alanı seçin.",
          "people-and-teams.invite-people.slack.workspaces.dialog.connet-workspace": "Çalışma alanını bağla",
          "people-and-teams.invite-people.slack.workspaces.dialog.disconnect.slack": "Slack bağlantısını kesin",
          "people-and-teams.invite-people.slack.workspaces.disconnect.dialog.body": "Bu Slack çalışma alanının bağlantısını kesmek ve çalışma alanının kişilerinde arama yapma olanağınızı kaybetmek üzeresiniz.",
          "people-and-teams.invite-people.slack.workspaces.disconnect.dialog.heading": "Slack bağlantısını kesin",
          "people-and-teams.invite-people.slack.workspaces.manage.dialog.heading": "Slack bağlantısını yönetin",
          "people-and-teams.invite-people.thirdparty-connect.connect.label": "Şuradan takım arkadaşları bağlayın:",
          "people-and-teams.invite-people.thirdparty-footer.connect.label": "Şuradan daha fazla takım arkadaşı bağlayın:",
          "people-and-teams.invite-people.thirdparty.connect-to.label": "Şunlara bağlandı:",
          "people-and-teams.invite-people.thirdparty.connect.or.label": "VEYA",
          "people-and-teams.invite-people.thirdparty.microsoft.button": "Microsoft",
          "people-and-teams.invite-people.thirdparty.microsoft.connected.tooltip": "Microsoft Bağlantısını Kesin",
          "people-and-teams.invite-people.thirdparty.slack.button": "Slack",
          "people-and-teams.invite-people.thirdparty.slack.connected.tooltip": "Bu bağlantıyı yönetin",
          "people-and-teams.invite-people.users.form.description.new": "Eklediğiniz herkese otomatik olarak veya site yöneticiniz talebi onayladığında davet gönderilir.",
          "people-and-teams.invite-people.users.form.sendButton": "Takım arkadaşları ekle",
          "people-and-teams.invite-people.users.form.title": "Takım arkadaşlarınızı ekleyin",
          "people-and-teams.invite-people.users.form.title.product": "Takım arkadaşlarınızı {product} ürününe ekleyin"
        },
        ht = {
          "people-and-teams.invite-people.flag.contact-support-action-label": "зверніться у службу підтримки",
          "people-and-teams.invite-people.flag.generic-failed-flag-description": "{isAdmin, select, true {Не вдалося надіслати запити на доступ або запрошення. Зверніться по допомогу до свого адміністратора.} false {Не вдалося надіслати запити на доступ або запрошення. }}",
          "people-and-teams.invite-people.flag.generic-failed-flag-title": "Щось пішло не так",
          "people-and-teams.invite-people.flag.generic-success-flag-title": "Готово",
          "people-and-teams.invite-people.flag.google-connect-success-flag-description": "Відтепер ви можете шукати користувачів за допомогою списку контактів Google.",
          "people-and-teams.invite-people.flag.google-connect-success-flag-title": "Робочу область Google підключено",
          "people-and-teams.invite-people.flag.invite-failed-flag-description": "{isAdmin, select, false {{failedInviteCount, plural, one {Не вдалося надіслати запрошення на адресу {emailFailedToInvite}. Зверніться по допомогу до свого адміністратора. } few {Не вдалося надіслати запрошення. Зверніться по допомогу до свого адміністратора. } many {Не вдалося надіслати запрошення. Зверніться по допомогу до свого адміністратора. } other {Не вдалося надіслати запрошення. Зверніться по допомогу до свого адміністратора. }}} true {{failedInviteCount, plural, one {Не вдалося надіслати запрошення на адресу {emailFailedToInvite}. } few {Не вдалося надіслати запрошення. } many {Не вдалося надіслати запрошення. } other {Не вдалося надіслати запрошення. }}}}",
          "people-and-teams.invite-people.flag.invite-failed-flag-title": "{isAdmin, select, true {{failedInviteCount, plural, one {Запрошення не надіслано} few {Запрошення не надіслано} many {Запрошення не надіслано} other {Запрошення не надіслано}}} false {{failedInviteCount, plural, one {Помилка запрошення} few {Помилки запрошення} many {Помилки запрошення} other {Помилки запрошення}}}}",
          "people-and-teams.invite-people.flag.licence-exceeded-flag-description": "{userRole, select, admin {Не вдалося нікого запросити, оскільки ви досягли обмеження кількості користувачів.} trusted {Не вдалося нікого запросити, оскільки ви досягли обмеження кількості користувачів. Зверніться по допомогу до свого адміністратора.} other {Ви не можете нікого запросити. Попросіть адміністратора підвищити рівень вашого плану.}}",
          "people-and-teams.invite-people.flag.licence-exceeded-flag-title": "Запрошення не надіслано",
          "people-and-teams.invite-people.flag.microsoft-connect-success-flag-description": "Відтепер ви можете шукати користувачів за допомогою списку контактів Microsoft.",
          "people-and-teams.invite-people.flag.microsoft-connect-success-flag-title": "Microsoft підключено",
          "people-and-teams.invite-people.flag.request-access-success-flag-description": "{requestAccessCount, plural, =0 {Запит на доступ не надіслано для жодного користувача.} one {Надіслано запит на доступ для {requestAccessCount} користувача.} few {Надіслано запит на доступ для {requestAccessCount} користувачів.} many {Надіслано запит на доступ для {requestAccessCount} користувачів.} other {Надіслано запит на доступ для {requestAccessCount} користувачів.}}",
          "people-and-teams.invite-people.flag.slack-connect-success-flag-description": "Відтепер ви можете шукати користувачів за допомогою списку контактів робочої області.",
          "people-and-teams.invite-people.flag.slack-connect-success-flag-title": "Підключено роботу область «{workspace}» зі Slack",
          "people-and-teams.invite-people.flag.slack-disconnect-success-flag-description": "Ви більше не можете шукати користувачів за допомогою списку контактів цієї робочої області.",
          "people-and-teams.invite-people.flag.slack-disconnect-success-flag-title": "Slack відключено",
          "people-and-teams.invite-people.flag.upgrade-plan-action-label": "Підвищити тарифний план",
          "people-and-teams.invite-people.flag.view-users-action-label": "Переглянути користувачів",
          "people-and-teams.invite-people.form.addMoreButton": "Додати",
          "people-and-teams.invite-people.form.cancelButton": "Скасувати",
          "people-and-teams.invite-people.form.email-input-label": "Адреса електронної пошти",
          "people-and-teams.invite-people.form.empty-email-message": "Введіть принаймні одну адресу електронної пошти.",
          "people-and-teams.invite-people.form.invalid-email-message": "Введіть дійсну адресу електронної пошти.",
          "people-and-teams.invite-people.form.invalid-multiple-email-message": "Щоб надіслати запрошення, виправте неправильні адреси.",
          "people-and-teams.invite-people.form.invitee-list-third-party.label": "Знайдіть учасників команди",
          "people-and-teams.invite-people.form.invitee-list-third-party.no-integrations.label": "Додати за допомогою адреси електронної пошти",
          "people-and-teams.invite-people.form.invitee-list.label": "Додати за допомогою адреси електронної пошти",
          "people-and-teams.invite-people.form.invitee-list.note": "Введіть через кому до 10 адрес.",
          "people-and-teams.invite-people.form.invitee-list.user-picker.email.placeholder": "Введіть адресу електронної пошти",
          "people-and-teams.invite-people.form.invitee-list.user-picker.placeholder": "Введіть ім’я користувача або адресу електронної пошти",
          "people-and-teams.invite-people.form.jira-core-message": "Включено Jira Core та інші продукти Jira.",
          "people-and-teams.invite-people.form.no-product-selected-message": "Виберіть продукт",
          "people-and-teams.invite-people.form.select-products.label": "Виберіть продукти",
          "people-and-teams.invite-people.form.sendButton": "Запросити учасників",
          "people-and-teams.invite-people.form.title": "Запрошення учасників команди",
          "people-and-teams.invite-people.form.title.product": "Запросіть учасників команди до {product}",
          "people-and-teams.invite-people.form.too-many-email-addresses": "За один раз можна надіслати до 10 запрошень електронною поштою.",
          "people-and-teams.invite-people.google.sync.button": "Синхронізувати користувачів із Google",
          "people-and-teams.invite-people.google.sync.button.separator": "або",
          "people-and-teams.invite-people.jira.core.option.subtext": "Включено разом з іншими продуктами Jira",
          "people-and-teams.invite-people.product.select.alloption": "Вибрати всі",
          "people-and-teams.invite-people.product.select.placeholder": "Для якого продукту ви надсилаєте запрошення?",
          "people-and-teams.invite-people.slack.disconnect.dialog.disconnect.button": "Відключити",
          "people-and-teams.invite-people.slack.workspaces.connect.dialog.heading": "Підключіть робочу область Slack",
          "people-and-teams.invite-people.slack.workspaces.dialog.body": "Виберіть одну робочу область, з якої ви хочете запросити користувачів.",
          "people-and-teams.invite-people.slack.workspaces.dialog.connet-workspace": "Підключити робочу область",
          "people-and-teams.invite-people.slack.workspaces.dialog.disconnect.slack": "Відключити Slack",
          "people-and-teams.invite-people.slack.workspaces.disconnect.dialog.body": "Ви збираєтеся відключити цю робочу область Slack і обмежити можливість пошуку за її контактами.",
          "people-and-teams.invite-people.slack.workspaces.disconnect.dialog.heading": "Відключення Slack",
          "people-and-teams.invite-people.slack.workspaces.manage.dialog.heading": "Керування підключенням Slack",
          "people-and-teams.invite-people.thirdparty-connect.connect.label": "Підключіть учасників:",
          "people-and-teams.invite-people.thirdparty-footer.connect.label": "Підключіть більше учасників:",
          "people-and-teams.invite-people.thirdparty.connect-to.label": "Підключені ресурси",
          "people-and-teams.invite-people.thirdparty.connect.or.label": "або",
          "people-and-teams.invite-people.thirdparty.microsoft.button": "Microsoft",
          "people-and-teams.invite-people.thirdparty.microsoft.connected.tooltip": "Відключити Microsoft",
          "people-and-teams.invite-people.thirdparty.slack.button": "Slack",
          "people-and-teams.invite-people.thirdparty.slack.connected.tooltip": "Керування підключенням",
          "people-and-teams.invite-people.users.form.description.new": "Додані користувачі отримають запрошення автоматично чи після того, як адміністратор сайту схвалить запит.",
          "people-and-teams.invite-people.users.form.sendButton": "Додати учасників команди",
          "people-and-teams.invite-people.users.form.title": "Додайте учасників команди",
          "people-and-teams.invite-people.users.form.title.product": "Підключіть учасників команди до {product}"
        },
        kt = {
          "people-and-teams.invite-people.flag.contact-support-action-label": "Liên hệ với bộ phận hỗ trợ",
          "people-and-teams.invite-people.flag.generic-failed-flag-description": "{isAdmin, select, true {Chúng tôi không thể gửi yêu cầu cấp quyền truy cập hoặc thư mời. Liên hệ với quản trị viên của bạn để được trợ giúp.} false {Chúng tôi không thể gửi yêu cầu cấp quyền truy cập hoặc thư mời. }}",
          "people-and-teams.invite-people.flag.generic-failed-flag-title": "Đã xảy ra lỗi",
          "people-and-teams.invite-people.flag.generic-success-flag-title": "Thành công",
          "people-and-teams.invite-people.flag.invite-failed-flag-description": "{isAdmin, select, false {{failedInviteCount, plural, other {Chúng tôi không thể gửi thư mời. Hãy liên hệ với quản trị viên của bạn để được trợ giúp. }}} true {{failedInviteCount, plural, other {Chúng tôi không thể gửi thư mời. }}}}",
          "people-and-teams.invite-people.flag.invite-failed-flag-title": "{isAdmin, select, true {{failedInviteCount, plural, other {Chưa gửi được thư mời}}} false {{failedInviteCount, plural, other {Không gửi được thư mời}}}}",
          "people-and-teams.invite-people.flag.licence-exceeded-flag-description": "{userRole, select, admin {Chúng tôi không thể mời thêm bất kỳ ai vì bạn đã đạt đến giới hạn người dùng của mình.} trusted {Chúng tôi không thể mời thêm bất kỳ ai vì bạn đã đạt đến giới hạn người dùng của mình. Hãy liên hệ với quản trị viên của bạn để được trợ giúp.} other {Bạn không thể mời bất kỳ ai. Hãy đề nghị quản trị viên nâng cấp gói của bạn.}}",
          "people-and-teams.invite-people.flag.licence-exceeded-flag-title": "Chưa gửi được thư mời",
          "people-and-teams.invite-people.flag.request-access-success-flag-description": "{requestAccessCount, plural, =0 {Bạn đã chưa yêu cầu quyền truy cập cho bất kỳ ai.} other {Bạn đã yêu cầu quyền truy cập cho {requestAccessCount} người.}}",
          "people-and-teams.invite-people.flag.upgrade-plan-action-label": "Nâng cấp gói",
          "people-and-teams.invite-people.flag.view-users-action-label": "Xem người dùng",
          "people-and-teams.invite-people.form.addMoreButton": "+ Thêm các trường khác",
          "people-and-teams.invite-people.form.cancelButton": "Hủy",
          "people-and-teams.invite-people.form.email-input-label": "Địa chỉ email",
          "people-and-teams.invite-people.form.empty-email-message": "Vui lòng thêm vào ít nhất một địa chỉ email",
          "people-and-teams.invite-people.form.invalid-email-message": "Vui lòng nhập địa chỉ email hợp lệ",
          "people-and-teams.invite-people.form.invalid-multiple-email-message": "Vui lòng sửa mọi địa chỉ không hợp lệ để gửi lời mời.",
          "people-and-teams.invite-people.form.invitee-list.label": "Thêm bằng email",
          "people-and-teams.invite-people.form.invitee-list.note": "Nhập tối đa 10 địa chỉ email được phân tách bằng dấu phẩy.",
          "people-and-teams.invite-people.form.jira-core-message": "Jira Core được bao gồm trong các sản phẩm Jira khác.",
          "people-and-teams.invite-people.form.no-product-selected-message": "Vui lòng chọn một sản phẩm",
          "people-and-teams.invite-people.form.too-many-email-addresses": "Bạn chỉ có thể gửi tối đa 10 lời mời qua email cùng một lúc.",
          "people-and-teams.invite-people.google.sync.button": "Đồng bộ hóa người dùng từ Google",
          "people-and-teams.invite-people.google.sync.button.separator": "HOẶC",
          "people-and-teams.invite-people.jira.core.option.subtext": "Được bao gồm trong các sản phẩm Jira khác",
          "people-and-teams.invite-people.product.select.alloption": "Chọn tất cả",
          "people-and-teams.invite-people.product.select.placeholder": "Bạn đang mời mọi người sử dụng sản phẩm nào?"
        },
        bt = {},
        yt = {};
      const Ct = n;
      var wt = Object( l.g )( ( {
          children: e,
          intl: t
        } ) => {
          const {
            language: a,
            country: n
          } = ( e => {
            const t = /([a-z]*)[_-]?([A-Z]*)/i.exec( e || "" );
            if ( !t ) throw Error( "Unable to get language and country from invalid Locale" );
            const [ , a, n ] = t;
            return {
              language: a.toLowerCase(),
              country: n.toUpperCase()
            }
          } )( t.locale.toString() ), o = Ct[ `${a}_${n}` ] || Ct[ a ] || Ct.en;
          return i.a.createElement( l.d, {
            messages: o
          }, e )
        } ),
        jt = a( "RNvQ" ),
        St = a.n( jt ),
        Et = a( "giew" ),
        It = a( "B/5b" );
      var zt = Object( l.g )( ( {
          index: e,
          intl: {
            formatMessage: t
          },
          isReadOnly: a,
          onInputChange: n,
          errorMessage: o,
          isInvalid: s,
          value: r
        } ) => i.a.useCallback( () => {
          const p = St()( ( e, t ) => {
            n( e, t )
          }, 100 );
          return i.a.createElement( A, null, i.a.createElement( D, {
            htmlFor: "email-field-" + e
          }, t( Fe.emailInputLabel ) ), i.a.createElement( Et.a, {
            name: "email-field-" + e,
            id: "email-field-" + e,
            autoComplete: "on",
            isReadOnly: a,
            onFocus: t => {
              0 !== e || r || n( t, e )
            },
            onChange: t => {
              t.persist(), p( t, e )
            },
            placeholder: "",
            type: "email",
            isInvalid: s
          } ), s && i.a.createElement( It.a, null, i.a.createElement( l.b, o ) ) )
        }, [ e, t, a, s, o, n, r ] )() ),
        At = a( "6+Wb" ),
        xt = a( "t5wf" ),
        Ot = a( "amtX" );
      const Mt = w.default.div `
  display: flex;
  align-items: center;
  overflow: hidden;
`,
        Pt = w.default.div `
  background-color: ${S.N20};
  width: 24px;
  height: 24px;
  border-radius: 3px;
  margin-left: 4px;
  margin-right: 8px;
  padding: 3px;
  box-sizing: content-box;
`,
        Tt = w.default.span `
  margin-right: 0;
`,
        Lt = w.default.div `
  padding: 8px 12px 8px 48px;
`,
        Nt = ( {
          onSelectAll: e = ( e => {} )
        } ) => t => i.a.createElement( At.z.MenuList, t, i.a.createElement( Lt, null, i.a.createElement( Ot.a, {
          onMouseDown: () => {
            t.setValue( t.options, "set-value" ), e( t.options )
          },
          appearance: "link",
          spacing: "none",
          style: {
            fontWeight: "normal"
          }
        }, i.a.createElement( l.b, Fe.selectAllOption ) ) ), t.children ),
        Bt = e => ( null == e ? void 0 : e.some( e => ( e => String( e.value ).startsWith( "jira" ) )( e ) && !( e => "jira-core" === e.value )( e ) ) ) || !1,
        Dt = ( e, {
          context: t
        } ) => {
          const a = ( e => {
            switch ( e ) {
              case "confluence":
                return J.a;
              case "jira-core":
                return K.a;
              case "jira-servicedesk":
                return Q;
              case "jira-software":
                return ee.a;
              case "jira":
                return te.a;
              case "trello":
                return ae.a;
              case "bitbucket":
                return ne.a;
              case "statuspage":
                return oe.a;
              case "opsgenie":
                return ie.a;
              case "compass":
              default:
                return le.a
            }
          } )( e.value );
          return "menu" === t ? i.a.createElement( Mt, null, i.a.createElement( Pt, null, i.a.createElement( a, {
            size: "small",
            iconGradientStart: S.B400,
            iconGradientStop: S.B200,
            iconColor: S.B200
          } ) ), i.a.createElement( Tt, null, e.label ) ) : e.label
        };
      var Rt = ( {
          onSelectProduct: e,
          onMenuOpen: t,
          defaultProductOptions: a,
          productOptions: n,
          formInvalid: o,
          product: s,
          userRole: r,
          createAnalyticsEvent: p,
          source: c
        } ) => {
          const [ d, u ] = i.a.useState( a ), [ m, g ] = i.a.useState( !1 ), [ f, v ] = i.a.useState( !1 );
          i.a.useEffect( () => {
            !o || d && d.length || g( o )
          }, [ o, d ] );
          const h = i.a.useCallback( t => {
              u( t ), e( t ), g( !( t && t.length ) )
            }, [ e ] ),
            k = i.a.useCallback( () => {
              v( !0 ), t && t()
            }, [ t ] ),
            b = i.a.useMemo( () => ( {
              MenuList: Nt( {
                onSelectAll: e => {
                  ( async ( e, t, a, n, o ) => {
                    const i = Ue( {
                      eventType: _e.e,
                      actionSubject: $.DROPDOWN_ITEM,
                      action: _.CLICKED,
                      actionSubjectId: "selectAll",
                      attributes: {
                        integration: o,
                        source: o,
                        product: t,
                        productsSelected: a,
                        permissionLevel: n
                      }
                    } );
                    e && i( e )
                  } )( p, s.toLowerCase(), e.map( e => String( e.value ) ), r, c ), v( !1 )
                }
              } )
            } ), [ p, s, c, r ] );
          return i.a.createElement( A, {
            "data-testid": "testId-invite-people-select-product"
          }, i.a.createElement( D, {
            htmlFor: "product-select"
          }, i.a.createElement( l.b, Fe.selectProducts ) ), i.a.createElement( xt.a, {
            name: "product-select",
            placeholder: i.a.createElement( l.b, Fe.selectPlaceholder ),
            className: "checkbox-select",
            classNamePrefix: "select",
            closeMenuOnSelect: !1,
            components: b,
            hideSelectedOptions: !1,
            options: n,
            defaultValue: a,
            formatOptionLabel: Dt,
            onChange: h,
            onMenuOpen: k,
            onMenuClose: () => v( !1 ),
            menuIsOpen: f,
            validationState: m ? "error" : "default"
          } ), Bt( d ) ? i.a.createElement( R, null, i.a.createElement( l.b, Fe.jiraCoreMessage ) ) : null, m ? i.a.createElement( It.a, null, i.a.createElement( l.b, Fe.noProductSelectedMessage ) ) : null )
        },
        qt = a( "RLta" ),
        Ft = a( "QVDE" ),
        Gt = a( "spVW" ),
        $t = a( "lSUb" ),
        _t = a( "a8dO" ),
        Vt = a( "bDkE" ),
        Ut = a.n( Vt ),
        Wt = a( "9QC+" ),
        Jt = a.n( Wt ),
        Kt = a( "Rqxe" );

      function Ht( e, t ) {
        const a = function ( e ) {
            return `/gateway/api${W}/connect?serviceKey=${e}`
          }( e ),
          n = window.screen.width / 2 - 240,
          o = "menubar, width=480, height=640, top=" + ( window.screen.height / 2 - 320 ) + ", left=" + n;
        Object( Kt.a )( a, o ).then( () => {
          t && t( !0 )
        } ).catch( () => {
          t && t( !1 )
        } )
      }

      function Zt( e ) {
        return Object.keys( e ).filter( t => !e[ t ] ).forEach( t => delete e[ t ] ), e
      }
      const Yt = ( e, t, a, n, o, i ) => {
        0 === t.length ? "jira" === i ? window.open( "https://marketplace.atlassian.com/apps/1216863/jira-cloud-for-slack-official" ) : "confluence" === i && window.open( "https://marketplace.atlassian.com/apps/1219518/confluence-cloud-for-slack-official" ) : e || 1 !== t.length ? a || n() : o( t[ 0 ] )
      };

      function Xt( e ) {
        return i.a.createElement( "svg", Ee()( {
          width: "24",
          height: "24",
          viewBox: "0 0 24 24",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg"
        }, e ), i.a.createElement( "path", {
          fillRule: "evenodd",
          clipRule: "evenodd",
          d: "M16.6412 6.42664L20.0279 3.11999C17.9479 1.18666 15.2413 0 12.0012 0C7.30792 0 3.25458 2.69332 1.28125 6.6133L5.16125 9.62662C6.13458 6.7333 8.82792 4.63998 12.0012 4.63998C14.2546 4.63998 15.7746 5.61331 16.6412 6.42664Z",
          fill: "#EB4335"
        } ), i.a.createElement( "path", {
          fillRule: "evenodd",
          clipRule: "evenodd",
          d: "M23.52 12.2666C23.52 11.2799 23.44 10.5599 23.2667 9.81323H12V14.2665H18.6133C18.48 15.3732 17.76 17.0399 16.16 18.1599L19.9467 21.0932C22.2133 18.9999 23.52 15.9199 23.52 12.2666V12.2666V12.2666Z",
          fill: "#4285F4"
        } ), i.a.createElement( "path", {
          fillRule: "evenodd",
          clipRule: "evenodd",
          d: "M5.17333 14.3732C4.92 13.6266 4.77333 12.8266 4.77333 11.9999C4.77333 11.1733 4.92 10.3733 5.16 9.6266L1.28 6.61328C0.466667 8.23994 0 10.0666 0 11.9999C0 13.9332 0.466667 15.7599 1.28 17.3866L5.17333 14.3732V14.3732Z",
          fill: "#FBBC05"
        } ), i.a.createElement( "path", {
          fillRule: "evenodd",
          clipRule: "evenodd",
          d: "M12.0006 24C15.2406 24 17.9606 22.9334 19.9473 21.0934L16.1606 18.1601C15.1473 18.8667 13.7873 19.3601 12.0006 19.3601C8.82728 19.3601 6.13394 17.2667 5.17394 14.3734L1.29395 17.3867C3.26728 21.3067 7.30728 24 12.0006 24V24V24Z",
          fill: "#34A853"
        } ) )
      }

      function Qt( e ) {
        return i.a.createElement( "svg", Ee()( {
          width: "25",
          height: "24",
          viewBox: "0 0 25 24",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg"
        }, e ), i.a.createElement( "g", {
          clipPath: "url(#clip0)"
        }, i.a.createElement( "path", {
          d: "M0.5 0H11.9047V11.4047H0.5V0Z",
          fill: "#F25022"
        } ), i.a.createElement( "path", {
          d: "M13.0952 0H24.4999V11.4047H13.0952V0Z",
          fill: "#7FBA00"
        } ), i.a.createElement( "path", {
          d: "M0.5 12.5955H11.9047V24.0001H0.5V12.5955Z",
          fill: "#00A4EF"
        } ), i.a.createElement( "path", {
          d: "M13.0952 12.5955H24.4999V24.0001H13.0952V12.5955Z",
          fill: "#FFB900"
        } ) ), i.a.createElement( "defs", null, i.a.createElement( "clipPath", {
          id: "clip0"
        }, i.a.createElement( "rect", {
          width: "24",
          height: "23.9999",
          fill: "white",
          transform: "translate(0.5)"
        } ) ) ) )
      }

      function ea( e ) {
        return i.a.createElement( "svg", Ee()( {
          width: "25",
          height: "24",
          viewBox: "0 0 25 24",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg"
        }, e ), i.a.createElement( "g", {
          clipPath: "url(#clip0)"
        }, i.a.createElement( "path", {
          d: "M5.53305 15.1364C5.53305 16.5215 4.40159 17.6529 3.01653 17.6529C1.63146 17.6529 0.5 16.5215 0.5 15.1364C0.5 13.7513 1.63146 12.6199 3.01653 12.6199H5.53305V15.1364Z",
          fill: "#E01E5A"
        } ), i.a.createElement( "path", {
          d: "M6.7998 15.1373C6.7998 13.7522 7.93127 12.6207 9.31633 12.6207C10.7014 12.6207 11.8329 13.7522 11.8329 15.1373V21.4383C11.8329 22.8234 10.7014 23.9548 9.31633 23.9548C7.93127 23.9548 6.7998 22.8234 6.7998 21.4383V15.1373Z",
          fill: "#E01E5A"
        } ), i.a.createElement( "path", {
          d: "M9.31633 5.03305C7.93127 5.03305 6.7998 3.90159 6.7998 2.51653C6.7998 1.13146 7.93127 0 9.31633 0C10.7014 0 11.8329 1.13146 11.8329 2.51653V5.03305H9.31633Z",
          fill: "#36C5F0"
        } ), i.a.createElement( "path", {
          d: "M9.3176 6.30078C10.7027 6.30078 11.8341 7.43224 11.8341 8.81731C11.8341 10.2024 10.7027 11.3338 9.3176 11.3338H3.01653C1.63146 11.3338 0.5 10.2024 0.5 8.81731C0.5 7.43224 1.63146 6.30078 3.01653 6.30078H9.3176Z",
          fill: "#36C5F0"
        } ), i.a.createElement( "path", {
          d: "M19.4219 8.81731C19.4219 7.43224 20.5533 6.30078 21.9384 6.30078C23.3235 6.30078 24.4549 7.43224 24.4549 8.81731C24.4549 10.2024 23.3235 11.3338 21.9384 11.3338H19.4219V8.81731Z",
          fill: "#2EB67D"
        } ), i.a.createElement( "path", {
          d: "M18.1517 8.8176C18.1517 10.2027 17.0202 11.3341 15.6352 11.3341C14.2501 11.3341 13.1187 10.2027 13.1187 8.8176V2.51653C13.1187 1.13146 14.2501 0 15.6352 0C17.0202 0 18.1517 1.13146 18.1517 2.51653V8.8176Z",
          fill: "#2EB67D"
        } ), i.a.createElement( "path", {
          d: "M15.6371 18.9215C17.0222 18.9215 18.1537 20.053 18.1537 21.438C18.1537 22.8231 17.0222 23.9546 15.6371 23.9546C14.2521 23.9546 13.1206 22.8231 13.1206 21.438V18.9215H15.6371Z",
          fill: "#ECB22E"
        } ), i.a.createElement( "path", {
          d: "M15.6366 17.6529C14.2516 17.6529 13.1201 16.5215 13.1201 15.1364C13.1201 13.7513 14.2516 12.6199 15.6366 12.6199H21.9377C23.3228 12.6199 24.4542 13.7513 24.4542 15.1364C24.4542 16.5215 23.3228 17.6529 21.9377 17.6529H15.6366Z",
          fill: "#ECB22E"
        } ) ), i.a.createElement( "defs", null, i.a.createElement( "clipPath", {
          id: "clip0"
        }, i.a.createElement( "rect", {
          width: "24",
          height: "23.9999",
          fill: "white",
          transform: "translate(0.5)"
        } ) ) ) )
      }
      const ta = w.default.div `
  margin-top: 10px;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  color: ${S.N200};
  font-size: 12px;
`,
        aa = w.default.span `
  margin: 0px 6px;
`,
        na = w.default.span `
  border-radius: 2px;
  margin: 0px 6px;
  height: 16px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  cursor: pointer;
  :hover {
    ${({integration:e})=>`
      background - color: $ {
        e === De ? S.N20 : S.R50
      };
      `}
  }
`, oa = w.default.span `
  color: ${S.N700};
  margin: 0px 4px;
`, ia = ( {
        integration: e,
        onSlackSettingsClick: t,
        intl: a,
        createAnalyticsEvent: n
      } ) => {
        const [ o, l ] = i.a.useState( !1 );
        let s = null,
          r = null,
          p = null;
        switch ( e ) {
          case De:
            s = i.a.createElement( ea, {
              height: 16,
              width: 16,
              key: e
            } ), r = a.formatMessage( Fe.slackThirdPartyButton ), p = a.formatMessage( Fe.slackThirdPartyConnectedTooltip );
            break;
          case "google-invites":
            s = i.a.createElement( Xt, {
              height: 16,
              width: 16,
              key: e
            } ), r = a.formatMessage( Fe.googleThirdPartyButton ), p = a.formatMessage( Fe.googleThirdPartyConnectedTooltip );
            break;
          case "microsoft-invites":
            s = i.a.createElement( Qt, {
              height: 16,
              width: 16,
              key: e
            } ), r = a.formatMessage( Fe.microsoftThirdPartyButton ), p = a.formatMessage( Fe.microsoftThirdPartyConnectedTooltip )
        }
        o && ( s = e === De ? i.a.createElement( Jt.a, {
          primaryColor: S.N700,
          size: "small",
          label: "settings",
          key: e
        } ) : i.a.createElement( Ut.a, {
          primaryColor: S.N700,
          size: "small",
          label: "unlink",
          key: e
        } ) );
        const c = i.a.useCallback( () => {
            l( !0 )
          }, [] ),
          d = i.a.useCallback( () => {
            l( !1 )
          }, [] ),
          u = i.a.useCallback( () => {
            if ( ( ( e, t ) => {
                const a = Ue( {
                  eventType: _e.e,
                  actionSubject: $.BUTTON,
                  actionSubjectId: "integrationSettings",
                  action: _.CLICKED,
                  attributes: {
                    integration: e
                  }
                } );
                t && a( t )
              } )( e, n ), e === De ) t();
            else {
              const e = se() ? "https://id.atlassian.com/manage-profile/apps" : "https://id.stg.internal.atlassian.com/manage-profile/apps";
              window.open( e )
            }
          }, [ e, n, t ] );
        return i.a.createElement( na, {
          integration: e,
          onMouseOver: c,
          onMouseOut: d,
          onClick: u
        }, i.a.createElement( _t.a, {
          position: "bottom",
          content: p
        }, i.a.createElement( "span", null, s ) ), i.a.createElement( oa, null, r ) )
      };
      var la = Object( l.g )( ( {
        integrations: e,
        onSlackSettingsClick: t,
        intl: a,
        createAnalyticsEvent: n
      } ) => i.a.createElement( ta, null, i.a.createElement( aa, null, i.a.createElement( l.b, Fe.thirdPartyConnectedTo ) ), e.map( e => i.a.createElement( ia, {
        createAnalyticsEvent: n,
        intl: a,
        integration: e,
        key: e,
        onSlackSettingsClick: t
      } ) ) ) );
      const sa = {
          validationState: "error",
          reason: "overflow",
          errorMessage: Fe.tooManyEmailAddresses
        },
        ra = {
          validationState: "error",
          reason: "invalid-email",
          errorMessage: Fe.invalidMultipleEmailMessage
        },
        pa = {
          validationState: "default"
        },
        ca = Object( $t.default )( ce );
      var da = ( {
          maxEmails: e = 10,
          onInviteeListChange: t = ( () => {} ),
          enableThirdPartyInvites: a,
          thirdPartyIntegrations: n,
          thirdPartyLoadOptions: o,
          onSlackSettingsClick: s,
          createAnalyticsEvent: r,
          loggedInEmailDomain: c
        } ) => {
          const [ d, u ] = i.a.useState( [] ), [ m, g ] = i.a.useState( pa ), f = i.a.useCallback( e => {
            if ( !e ) return;
            const {
              label: t
            } = e, a = d.filter( e => e.label !== t );
            u( a )
          }, [ d ] ), v = i.a.useCallback( ( e, t ) => {
            switch ( t.action ) {
              case "remove-value":
              case "pop-value":
                return f( t.removedValue );
              case "clear":
                return u( [] );
              default:
                return u( [ ...d, e ] )
            }
          }, [ d, f ] ), h = i.a.useCallback( e => {
            let t = [];
            for ( const a of e.trim().split( /\s*[,; ]\s*/ ) ) {
              const e = !a.length;
              if ( d.some( e => e.label === a ) || t.some( e => e.label === a ) || e ) continue;
              const n = {
                label: a,
                value: a
              };
              t.push( n )
            }
            u( [ ...d, ...t ] )
          }, [ d ] ), k = i.a.useCallback( e => {
            const t = e.target.value;
            h( t )
          }, [ h ] ), b = i.a.useCallback( e => {
            let t = [];
            Array.isArray( e ) ? t = e : e && null != e && ( t = [ e ] );
            const a = t.map( e => Object( Ft.o )( e ) ? e.email : Object( Ft.h )( e ) ? e.name : void 0 ).filter( e => e );
            u( a.map( e => ( {
              label: e,
              value: e
            } ) ) )
          }, [] );
          return i.a.useEffect( () => {
            g( ( ( e, t ) => {
              const a = e.length > t,
                n = e.some( e => !ca( e.label ) );
              return a ? sa : n ? ra : pa
            } )( d, e ) ), t( d.map( e => e.label ) )
          }, [ d, e, t ] ), i.a.createElement( A, {
            "data-testid": "testId-invite-people-invitee-list"
          }, i.a.createElement( D, {
            htmlFor: "email-select"
          }, i.a.createElement( l.b, a ? n && n.length > 0 ? Fe.inviteeListLabelThirdParty : Fe.inviteeListLabelThirdPartyNoIntegrations : Fe.inviteeListLabel ) ), !a && i.a.createElement( qt.a, {
            onChange: v,
            onCreateOption: h,
            className: "invitee-select",
            classNamePrefix: "inviteeselect",
            onBlur: k,
            options: d,
            value: d,
            styles: {
              menu: e => Object( p.a )( Object( p.a )( {}, e ), {}, {
                display: "none"
              } ),
              dropdownIndicator: e => Object( p.a )( Object( p.a )( {}, e ), {}, {
                display: "none"
              } ),
              multiValue: ( e, {
                data: t
              } ) => {
                const a = ca( t.label );
                return Object( p.a )( Object( p.a )( {}, e ), {}, {
                  backgroundColor: a ? e.backgroundColor : S.R50
                } )
              },
              multiValueLabel: ( e, {
                data: t
              } ) => {
                const a = ca( t.label );
                return Object( p.a )( Object( p.a )( {}, e ), {}, {
                  color: a ? e.color : S.R500,
                  backgroundColor: a ? e.backgroundColor : S.R50
                } )
              },
              multiValueRemove: ( e, {
                data: t
              } ) => {
                const a = ca( t.label );
                return Object( p.a )( Object( p.a )( {}, e ), {}, {
                  backgroundColor: a ? e.backgroundColor : S.R50
                } )
              }
            },
            validationState: m.validationState,
            isMulti: !0,
            isClearable: !0,
            backspaceRemovesValue: !0
          } ), a && i.a.createElement( i.a.Fragment, null, i.a.createElement( Gt.a, {
            fieldId: "invite-user-picker",
            onChange: b,
            loadOptions: o,
            noOptionsMessage: () => null,
            placeholder: n && n.length > 0 ? i.a.createElement( l.b, Fe.inviteeListUserPickerPlaceholder ) : i.a.createElement( l.b, Fe.inviteeListUserPickerEmailPlaceholder ),
            width: "100%",
            isClearable: !0,
            isMulti: !0,
            allowEmail: !0,
            suggestEmailsForDomain: c
          } ), a && "error" === m.validationState && m.errorMessage && i.a.createElement( It.a, null, i.a.createElement( l.b, m.errorMessage ) ), n && n.length > 0 && i.a.createElement( la, {
            integrations: n,
            onSlackSettingsClick: s,
            createAnalyticsEvent: r
          } ) ), !a && ( "error" === m.validationState && m.errorMessage ? i.a.createElement( It.a, null, i.a.createElement( l.b, m.errorMessage ) ) : i.a.createElement( R, null, i.a.createElement( l.b, Fe.inviteeListNote ) ) ) )
        },
        ua = a( "bg0W" );
      const ma = w.default.div `
  margin: 4px 0px;
`,
        ga = w.default.div `
  display: flex;
  background-color: ${S.N20A};
  color: ${S.N200};
  font-size: 12px;
  height: 100px;
  align-items: center;
  justify-content: center;
`,
        fa = w.default.div `
  display: flex;
  flex: 1;
  max-width: ${44.25*Object(I.h)()}px;
  flex-direction: column;
  justify-content: center;
`,
        va = w.default.div `
  display: flex;
  flex-direction: row;
  button:not(:last-child) {
    margin-right: 8px;
  }
`,
        ha = w.default.div `
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  svg {
    margin: 8px;
  }
`;
      const ka = Object( w.default )( ( function ( e ) {
        return i.a.createElement( E.a, e )
      } ) )
      `
  && {
    height: 40px !important;
    ${ua.e100}
    display: flex;
    align-items: center;
    justify-content: 'center';
    color: ${S.N200} !important;
    background-color: ${S.N10} !important;
    &:hover,
    :active,
    :focus {
      align-items: center;
      ${ua.e200}
    }
  }
`;
      var ba = Object( l.g )( ( {
        enableGSyncButton: e,
        integrations: t,
        enabledIntegrations: a,
        onConnectProvider: n,
        intl: o
      } ) => i.a.createElement( ga, null, i.a.createElement( fa, null, i.a.createElement( ma, null, i.a.createElement( l.b, Fe.thirdPartyConnect ) ), i.a.createElement( va, null, ( e || a.includes( "google-invites" ) && !t.includes( "google-invites" ) ) && i.a.createElement( ka, {
        shouldFitContainer: !0,
        onClick: () => {
          n && n( "google-invites" )
        }
      }, i.a.createElement( _t.a, {
        tag: "span",
        position: "bottom",
        content: e ? o.formatMessage( Fe.googleGsyncTooltipContent ) : o.formatMessage( Fe.googleUserTooltipContent )
      }, i.a.createElement( ha, null, i.a.createElement( Xt, null ), o.formatMessage( Fe.googleThirdPartyButton ) ) ) ), a.includes( De ) && !t.includes( De ) && i.a.createElement( ka, {
        shouldFitContainer: !0,
        onClick: () => {
          n && n( De )
        }
      }, i.a.createElement( ha, null, i.a.createElement( ea, null ), o.formatMessage( Fe.slackThirdPartyButton ) ) ), a.includes( De ) && !t.includes( "microsoft-invites" ) && i.a.createElement( ka, {
        shouldFitContainer: !0,
        onClick: () => {
          n && n( "microsoft-invites" )
        }
      }, i.a.createElement( ha, null, i.a.createElement( Qt, null ), o.formatMessage( Fe.microsoftThirdPartyButton ) ) ) ) ) ) );
      const ya = w.default.div `
  display: flex;
  flex-direction: row;
  button:not(:last-child) {
    margin-right: 8px;
  }
`,
        Ca = w.default.div `
  font-weight: 600;
  margin-bottom: 4px;
`,
        wa = w.default.div `
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: ${S.N200};
  font-size: 12px;
  margin-top: 24px;
`,
        ja = w.default.div `
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  svg {
    margin: 8px;
  }
`,
        Sa = w.default.div `
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  color: ${S.N200};
  font-size: 12px;
  line-height: ${2*Object(I.h)()}px;
  margin-top: 24px;
`,
        Ea = w.default.span `
  margin: 0px ${Object(I.h)()}px;
  width: 41px;
  height: 0px;
  border: 1px solid ${S.N40};
`;
      const Ia = Object( w.default )( ( function ( e ) {
        return i.a.createElement( E.a, e )
      } ) )
      `
  && {
    padding: 0px !important;
    height: 40px !important;
    ${ua.e100}
    display: flex;
    align-items: center;
    color: ${S.N200} !important;
    background-color: ${S.N0};
    &:hover,
    :active,
    :focus {
      align-items: center;
      background-color: ${S.N0};
      ${ua.e200}
    }
  }
`;
      var za = Object( l.g )( ( {
          onConnectProvider: e,
          enabledIntegrations: t,
          intl: a,
          enableGSyncButton: n
        } ) => i.a.createElement( i.a.Fragment, null, i.a.createElement( wa, null, i.a.createElement( Ca, null, i.a.createElement( l.b, Fe.thirdPartyConnectTeammates ) ), i.a.createElement( ya, null, ( n || t.includes( "google-invites" ) ) && i.a.createElement( Ia, {
          shouldFitContainer: !0,
          onClick: () => {
            e && e( "google-invites" )
          }
        }, i.a.createElement( _t.a, {
          tag: "span",
          position: "bottom",
          content: n ? a.formatMessage( Fe.googleGsyncTooltipContent ) : a.formatMessage( Fe.googleUserTooltipContent )
        }, i.a.createElement( ja, null, i.a.createElement( Xt, null ), a.formatMessage( Fe.googleThirdPartyButton ) ) ) ), t.includes( De ) && i.a.createElement( Ia, {
          shouldFitContainer: !0,
          onClick: () => {
            e && e( De )
          }
        }, i.a.createElement( ja, null, i.a.createElement( ea, null ), a.formatMessage( Fe.slackThirdPartyButton ) ) ), t.includes( "microsoft-invites" ) && i.a.createElement( Ia, {
          shouldFitContainer: !0,
          onClick: () => {
            e && e( "microsoft-invites" )
          }
        }, i.a.createElement( ja, null, i.a.createElement( Qt, null ), a.formatMessage( Fe.microsoftThirdPartyButton ) ) ) ) ), i.a.createElement( Sa, null, i.a.createElement( Ea, null ), a.formatMessage( Fe.thirdPartyOr ), i.a.createElement( Ea, null ) ) ) ),
        Aa = a( "cJDk" ),
        xa = a( "kbI0" ),
        Oa = a( "MqVv" );
      const Ma = e => ( e => {
          try {
            return localStorage.getItem( e )
          } catch ( t ) {
            console.error( t )
          }
          return null
        } )( "infi-slack-workspace-" + e ),
        Pa = ( e, t ) => ( ( e, t ) => {
          try {
            localStorage.setItem( e, t )
          } catch ( a ) {
            console.error( a )
          }
        } )( "infi-slack-workspace-" + e, t ),
        Ta = e => ( e => {
          try {
            localStorage.removeItem( e )
          } catch ( t ) {
            console.error( t )
          }
        } )( "infi-slack-workspace-" + e );
      var La = a( "rx1S" );
      const Na = w.default.div `
  display: flex;
  align-items: center;
  overflow: hidden;
`,
        Ba = w.default.img `
  height: 20px;
  width: 20px;
  padding-right: 8px;
`;
      var Da = ( {
          slackWorkspaces: e,
          selectedOption: t,
          onSelect: a
        } ) => {
          const n = e => i.a.createElement( Na, null, i.a.createElement( Ba, {
            alt: e.avatar,
            src: e.avatar
          } ), e.name );
          return i.a.createElement( La.a, {
            name: "slack-workspace-select",
            isSearchable: !1,
            value: t,
            className: "single-select",
            classNamePrefix: "react-select",
            getOptionValue: e => e.id,
            options: e,
            formatOptionLabel: n,
            placeholder: n( e[ 0 ] ),
            isDisabled: 1 === e.length,
            onChange: e => a( e )
          } )
        },
        Ra = a( "wn7R" ),
        qa = a( "gHio" ),
        Fa = a.n( qa );
      const Ga = w.default.a `
  color: ${S.R400};
`,
        $a = w.default.div `
  width: 100%;
  display: flex;
  justify-content: flex-end;
`,
        _a = {
          source: V.SLACK_CONNECT_MODAL,
          componentName: "slackConnectModal"
        };
      var Va = Object( r.a )( _a )( Object( Ie.a )()( ( {
        productId: e,
        slackWorkspaces: t,
        openSlackConnectDialog: a,
        closeSlackConnectDialog: n,
        isSlackConnectDialogOpen: s,
        onSelectedSlackWorkspaceChange: r,
        onDisconnectSlackWorkspaceClick: p,
        createAnalyticsEvent: c
      } ) => {
        const [ d, u ] = Object( o.useState )( !1 ), m = Ma( e ), [ g, f ] = Object( o.useState )( () => t.find( e => e.id === m ) || t[ 0 ] ), v = () => {
          ( ( e, t ) => {
            const a = Ue( {
              eventType: _e.e,
              actionSubject: $.BUTTON,
              actionSubjectId: "disconnectCancel",
              action: _.CLICKED,
              attributes: {
                selectedTeamId: e
              }
            } );
            t && a( t )
          } )( m, c ), u( !1 ), a()
        }, h = () => {
          ( ( e, t ) => {
            const a = Ue( {
              eventType: _e.e,
              actionSubject: $.BUTTON,
              actionSubjectId: "disconnect",
              action: _.CLICKED,
              attributes: {
                selectedTeamId: e
              }
            } );
            t && a( t )
          } )( m, c ), n(), u( !0 )
        }, k = () => {
          ( ( e, t ) => {
            const a = Ue( {
              eventType: _e.e,
              actionSubject: $.BUTTON,
              actionSubjectId: "disconnectConfirm",
              action: _.CLICKED,
              attributes: {
                selectedTeamId: e
              }
            } );
            t && a( t )
          } )( m, c ), p(), u( !1 )
        }, b = () => {
          ( ( e, t ) => {
            const a = Ue( {
              eventType: _e.e,
              actionSubject: $.BUTTON,
              actionSubjectId: "done",
              action: _.CLICKED,
              attributes: {
                selectedTeamId: e
              }
            } );
            t && a( t )
          } )( g.id, c ), g.id !== m && r( g ), n()
        }, y = () => {
          ( ( e, t ) => {
            const a = Ue( {
              eventType: _e.e,
              actionSubject: $.BUTTON,
              actionSubjectId: "close",
              action: _.CLICKED,
              attributes: {
                selectedTeamId: e
              }
            } );
            t && a( t )
          } )( m, c ), n()
        };
        Object( o.useEffect )( () => {
          s && ( e => {
            const t = Ue( {
              eventType: _e.c,
              name: "slackConnectModal"
            } );
            e && t( e )
          } )( c )
        }, [ s, c ] );
        return i.a.createElement( i.a.Fragment, null, t && i.a.createElement( xa.b, null, s && i.a.createElement( Oa.a, {
          width: "small",
          autoFocus: !1,
          scrollBehavior: "outside",
          onClose: n,
          components: {
            Header: () => i.a.createElement( Aa.e, null, i.a.createElement( Aa.f, null, i.a.createElement( l.b, m ? Fe.slackWorkspacesManageDialogHeading : Fe.slackWorkspacesConnectDialogHeading ) ), i.a.createElement( Ot.a, {
              spacing: "none",
              appearance: "subtle-link",
              onClick: y
            }, i.a.createElement( Fa.a, {
              label: ""
            } ) ) ),
            Footer: () => i.a.createElement( Aa.d, null, m && i.a.createElement( Ga, {
              href: "#",
              onClick: h
            }, i.a.createElement( l.b, Fe.slackWorkspacesDialogDisconnectSlack ) ), i.a.createElement( Ot.a, {
              type: "submit",
              appearance: "primary",
              style: {
                marginLeft: "auto"
              },
              onClick: b
            }, i.a.createElement( l.b, Fe.slackWorkspacesDoneButton ) ) )
          }
        }, i.a.createElement( l.b, Ee()( {
          tagName: "p"
        }, Fe.slackWorkspacesDialogBody ) ), i.a.createElement( "br", null ), i.a.createElement( Da, {
          slackWorkspaces: t,
          selectedOption: g,
          onSelect: f
        } ) ) ), m && i.a.createElement( xa.b, null, d && i.a.createElement( Oa.a, {
          width: "small",
          autoFocus: !1,
          appearance: "danger",
          components: {
            Footer: () => i.a.createElement( Aa.d, null, i.a.createElement( $a, null, i.a.createElement( Ra.a, null, i.a.createElement( Ot.a, {
              type: "submit",
              onClick: v
            }, i.a.createElement( l.b, Fe.cancelButton ) ), i.a.createElement( Ot.a, {
              appearance: "danger",
              type: "submit",
              onClick: k
            }, i.a.createElement( l.b, Fe.disconnectButton ) ) ) ) )
          },
          heading: i.a.createElement( l.b, Fe.slackWorkspacesDisconnectDialogHeading )
        }, i.a.createElement( l.b, Fe.slackWorkspacesDisconnectDialogBody ) ) ) )
      } ) );
      var Ua = Object( Ie.a )()( Object( l.g )( ( {
          addMoreButtonLabel: e,
          allowAddMoreFields: t,
          cancelButtonLabel: a,
          hideCancelButton: n,
          formTitle: s,
          formDescription: r,
          inputValues: p,
          isSendingInvitation: c,
          maxNumberOfInputs: d,
          numberOfInputs: u,
          onAddMoreInvitationsButtonClick: m,
          onCancelButtonClick: g,
          onInviteButtonClick: f,
          onInputChange: v,
          product: h,
          productId: k,
          sendButtonLabel: b,
          alignButtons: y,
          userRole: C,
          createAnalyticsEvent: w,
          enableProductSelect: j,
          subProduct: S,
          productOptions: I,
          defaultProductOptions: z,
          enableInviteeList: A,
          enableGSyncButton: T,
          onInviteeListChange: B,
          organizationId: D,
          enableThirdPartyInvites: R,
          thirdPartyLoadOptions: V,
          slackWorkspaces: U,
          thirdPartyIntegrations: W,
          enabledThirdPartyIntegrations: J,
          onThirdPartyIntegrationsChange: K,
          onSelectedSlackWorkspaceChange: H,
          onDisconnectSlackWorkspaceClick: Z,
          intl: Y,
          showFlag: X,
          loggedInEmailDomain: Q,
          source: ee
        } ) => {
          const [ te, ae ] = Object( o.useState )( !1 ), ne = () => ae( !0 ), oe = "Compass" === h;
          oe && ( h = "Jira", k = "jira" );
          const [ ie, le ] = i.a.useState( !1 ), [ se, pe ] = i.a.useState( () => S ? [ S ] : ( null == I ? void 0 : I.length ) ? I.filter( e => e.value.includes( k ) ).map( e => e.value ) : [ k ] );
          i.a.useEffect( () => {
            ( null == z ? void 0 : z.length ) && pe( z.map( e => e.value ) )
          }, [ z ] );
          const de = () => !p.filter( e => e.length ).length ? ( le( !0 ), !1 ) : !( ge && !se ) && ( !( p.filter( e => e.length ).length > d ) && p.filter( e => e.length ).every( e => ce( e ) ) ),
            ue = "basic" === C,
            ge = j && I && I.length > 1 && ( !ue || "jira" === k && !S || "platform" === k ),
            fe = i.a.useCallback( () => oe ? "Compass" : S ? me( S ) : 1 === ( null == I ? void 0 : I.length ) ? I[ 0 ].label : "Jira" !== h ? h : null, [ oe, S, I, h ] ),
            ve = i.a.useCallback( () => {
              ( e => {
                const t = Ue( {
                  eventType: _e.e,
                  actionSubject: $.BUTTON,
                  actionSubjectId: "gsyncButton",
                  action: _.CLICKED
                } );
                e && t( e )
              } )( w );
              const e = `${re}/o/${D}/gsuite`;
              window.open( e ), g()
            }, [ w, g, D ] ),
            he = i.a.useCallback( () => [ ...p.filter( e => ce( e ) ) ], [ p ] ),
            ke = ( e, t ) => {
              ie && le( !( e.target.value.length > 0 ) ), v( e, t )
            },
            be = e => {
              pe( null == e ? void 0 : e.map( e => e.value ) )
            },
            ye = () => {
              ( ( e, t ) => {
                const {
                  productOptions: a,
                  selectedProducts: n,
                  userRole: o,
                  source: i
                } = e, l = Ue( {
                  eventType: _e.e,
                  actionSubject: $.DROPDOWN,
                  actionSubjectId: "productSelect",
                  action: _.OPENED,
                  attributes: {
                    integration: i,
                    source: i,
                    userRole: o,
                    productOptions: a,
                    selectedProducts: n
                  }
                } );
                t && l( t )
              } )( {
                productOptions: null == I ? void 0 : I.map( e => e.value ),
                selectedProducts: se,
                userRole: C,
                source: ee
              }, w )
            },
            Ce = i.a.useCallback( () => {
              Yt( !0, U, te, ne, H, k )
            }, [ te, H, U, k ] ),
            we = i.a.useCallback( e => {
              "google-invites" === e && T ? ve() : ( ( ( e, t ) => {
                const a = Ue( {
                  eventType: _e.e,
                  actionSubject: $.BUTTON,
                  actionSubjectId: "connect",
                  action: _.CLICKED,
                  attributes: {
                    integration: e
                  }
                } );
                t && a( t )
              } )( e, w ), e !== De ? Ht( e, t => {
                K && K(), t ? ( Ke( e, void 0, w ), X && X( $e( e ) ) ) : ( ( e, t ) => {
                  const a = Ue( {
                    eventType: _e.b,
                    actionSubject: $.THIRD_PARTY_INTEGRATIION,
                    action: _.FAILED,
                    attributes: {
                      integration: e
                    }
                  } );
                  t && a( t )
                } )( e, w )
              } ) : Yt( !1, U, te, ne, H, k ) )
            }, [ T, ve, te, H, K, U, w, X, k ] );
          return i.a.createElement( wt, null, i.a.createElement( "div", {
            "data-testid": "testId-invite-people-form"
          }, i.a.createElement( x, null, R && i.a.createElement( Va, {
            productId: k,
            slackWorkspaces: U,
            openSlackConnectDialog: ne,
            closeSlackConnectDialog: () => ae( !1 ),
            isSlackConnectDialogOpen: te,
            onSelectedSlackWorkspaceChange: H,
            onDisconnectSlackWorkspaceClick: Z
          } ), i.a.createElement( O, null, s || ( ue ? !ge && Boolean( fe() ) ? i.a.createElement( l.b, Ee()( {}, Fe.usersFormTitleProduct, {
            values: {
              product: fe()
            }
          } ) ) : i.a.createElement( l.b, Fe.usersFormTitle ) : !ge && Boolean( fe() ) ? i.a.createElement( l.b, Ee()( {}, Fe.formTitleProduct, {
            values: {
              product: fe()
            }
          } ) ) : i.a.createElement( l.b, Fe.formTitle ) ) ), i.a.createElement( M, null, r || ( ue ? i.a.createElement( l.b, Fe.formDescription ) : void 0 ) ), i.a.createElement( P, {
            onSubmit: e => {
              e.preventDefault()
            }
          }, T && !R ? i.a.createElement( o.Fragment, null, i.a.createElement( F, {
            appearance: "subtle",
            onClick: ve
          }, i.a.createElement( G, {
            src: "https://aid-frontend.prod.atl-paas.net/atlassian-id/front-end/5.0.51/static/media/google-logo.c21ca9d1.svg",
            "data-testid": "testId-invite-people-gsync-button"
          } ), i.a.createElement( l.b, Fe.googleSyncButton ) ), i.a.createElement( q, {
            "data-content": Y.formatMessage( Fe.gsyncButtonSeparator )
          } ) ) : null, ge && R ? i.a.createElement( Rt, {
            productOptions: I,
            onSelectProduct: be,
            onMenuOpen: ye,
            defaultProductOptions: z,
            formInvalid: ie,
            product: h,
            userRole: C,
            createAnalyticsEvent: w,
            source: ee
          } ) : null, R && W && 0 === W.length && i.a.createElement( za, {
            enableGSyncButton: T,
            enabledIntegrations: J,
            onConnectProvider: we
          } ), A || R ? i.a.createElement( da, {
            enableThirdPartyInvites: R,
            thirdPartyLoadOptions: V,
            thirdPartyIntegrations: W,
            maxEmails: d,
            onInviteeListChange: B,
            onSlackSettingsClick: Ce,
            createAnalyticsEvent: w,
            loggedInEmailDomain: Q
          } ) : null, ge && !R ? i.a.createElement( Rt, {
            productOptions: I,
            onSelectProduct: be,
            onMenuOpen: ye,
            defaultProductOptions: z,
            formInvalid: ie,
            product: h,
            userRole: C,
            createAnalyticsEvent: w
          } ) : null, A || R ? null : p.map( ( e, t ) => {
            const a = ie && 0 === e.length && 0 === t;
            return i.a.createElement( zt, {
              key: t,
              index: t,
              onInputChange: ke,
              errorMessage: a ? Fe.emptyEmailMessage : Fe.invalidEmailMessage,
              isInvalid: a || !!e && !ce( e ),
              value: e
            } )
          } ), !A && !R && t && u < d && i.a.createElement( L, {
            appearance: "link",
            onClick: e => {
              ( ( e, t, a ) => {
                const n = Ue( {
                  eventType: _e.e,
                  actionSubject: $.BUTTON,
                  actionSubjectId: "addMoreEmailsButton",
                  action: _.CLICKED,
                  attributes: {
                    integration: a,
                    source: a,
                    product: t
                  }
                } );
                e && n( e )
              } )( w, k, ee ), m( e )
            }
          }, e || i.a.createElement( i.a.Fragment, null, i.a.createElement( l.b, Fe.addMoreButton ) ) ) ), i.a.createElement( N, {
            align: y
          }, i.a.createElement( E.a, {
            appearance: "primary",
            form: "invitePeopleForm",
            isLoading: c,
            onClick: () => {
              let e;
              e = de() ? void 0 : se ? p.filter( e => e.length ).length ? Fe.invalidEmailMessage.defaultMessage : Fe.emptyEmailMessage.defaultMessage : Fe.noProductSelectedMessage.defaultMessage, ( ( e, t ) => {
                const {
                  product: a,
                  numberOfEmails: n,
                  numberOfUniqueEmails: o,
                  formError: i,
                  invitedProducts: l,
                  source: s
                } = t, r = Ue( {
                  eventType: _e.e,
                  actionSubject: $.BUTTON,
                  actionSubjectId: "inviteButton",
                  action: _.CLICKED,
                  attributes: {
                    integration: s,
                    source: s,
                    product: a,
                    numberOfEmails: n,
                    numberOfUniqueEmails: o,
                    formError: i,
                    invitedProducts: l
                  }
                } );
                e && r( e )
              } )( w, {
                product: k,
                numberOfEmails: he().length,
                numberOfUniqueEmails: [ ...new Set( he() ) ].length,
                formError: e,
                invitedProducts: se,
                source: ee
              } ), de() && f( se )
            },
            type: "submit"
          }, b || ( ue ? i.a.createElement( l.b, Fe.usersSendInviteButton ) : i.a.createElement( l.b, Fe.sendInviteButton ) ) ), !n && i.a.createElement( E.a, {
            appearance: "subtle",
            isDisabled: c,
            onClick: () => {
              ( ( e, t, a ) => {
                const n = Ue( {
                  eventType: _e.e,
                  actionSubject: $.BUTTON,
                  actionSubjectId: "cancelButton",
                  action: _.CLICKED,
                  attributes: {
                    integration: a,
                    source: a,
                    product: t
                  }
                } );
                e && n( e )
              } )( w, k, ee ), g()
            }
          }, a || i.a.createElement( l.b, Fe.cancelButton ) ) ) ), R && W && W.length > 0 && ( W.filter( e => J.includes( e ) ).length < J.length || T ) && i.a.createElement( ba, {
            enableGSyncButton: T,
            enabledIntegrations: J,
            integrations: W,
            onConnectProvider: we
          } ) ) )
        } ) ),
        Wa = a( "lRcl" ),
        Ja = a( "oxCZ" ),
        Ka = a.n( Ja );
      const Ha = {
        source: V.ADD_PEOPLE,
        componentName: "addPeople"
      };
      var Za = Object( r.a )( Ha )( Object( l.g )( ( {
        addMoreButtonLabel: e,
        alignButtons: t = "right",
        allowAddMoreFields: a = !0,
        cancelButtonLabel: n,
        continueUrl: o,
        defaultNumberOfInputs: r = 3,
        hideCancelButton: c,
        formTitle: d,
        formDescription: u,
        maxNumberOfInputs: m = 10,
        onSendHandler: g,
        onCancelHandler: f,
        experimental_onInviteCompletedHandler: v,
        resourceAri: h,
        sendButtonLabel: b,
        showFlag: y,
        userRole: C,
        subProduct: w,
        enableProductSelect: j,
        enableGSyncButton: S,
        organizationId: E,
        enableInviteeList: I,
        thirdPartyInvitesCohort: z,
        intl: A,
        source: x = "peopleMenu",
        jiraProjectName: O,
        jiraProjectKey: M
      } ) => {
        const P = ( e => {
          try {
            const {
              resourceId: t
            } = de( e );
            return t
          } catch ( t ) {
            return
          }
        } )( h );
        let T = ge( h ),
          L = ue( h ) || "";
        const N = i.a.useRef( null ),
          D = "Compass" === T;
        D && ( T = "Jira", L = "jira" );
        const R = I && fe( A.locale ),
          q = "jira" === L && w ? ( e => "jira-" + e.toLowerCase() )( w ) : w,
          [ F, G ] = i.a.useState( r ),
          [ V, W ] = i.a.useState( ve( r ) ),
          [ J, K ] = i.a.useState( !1 ),
          [ H, Z ] = i.a.useState( !1 ),
          [ Y, X ] = i.a.useState( !1 ),
          [ Q, ee ] = i.a.useState( !1 ),
          [ te, ae ] = i.a.useState( C || "basic" ),
          [ ne, oe ] = i.a.useState( !1 ),
          [ ie, le ] = i.a.useState( E || "" ),
          [ se, pe ] = i.a.useState( !1 ),
          [ ce, he ] = i.a.useState( [] ),
          [ ke, Se ] = i.a.useState( [] ),
          [ Ie, ze ] = i.a.useState( null ),
          [ xe, Me ] = i.a.useState( [] ),
          [ Te, Ve ] = i.a.useState( null ),
          [ He, Ze ] = i.a.useState( void 0 ),
          {
            createAnalyticsEvent: Ye
          } = Object( s.a )();
        i.a.useEffect( () => {
          R || W( ve( r ) )
        }, [ R, r ] ), i.a.useEffect( () => {
          "jira" !== L && ( ( e, t ) => {
            const a = Ue( {
              eventType: _e.d,
              actionSubject: $.INVITE_PEOPLE_FEATURE,
              action: _.EXPOSED,
              attributes: {
                flagKey: "confluence.frontend.enable.product.select.invite.people.nav.3",
                value: t,
                reason: t ? "RULE_MATCH" : "FALLTHROUGH",
                ruleId: t ? "3fddbf78-f2c1-4995-86be-e5ab28208d20" : "9a72dc9e-d77b-4b53-860e-822f98beeb52"
              }
            } );
            e && a( e )
          } )( Ye, !!j )
        }, [ Ye, j, L ] ), i.a.useEffect( () => {
          async function e() {
            if ( Z( !0 ), C ) ae( C );
            else {
              const e = await ye.getUserRole( P );
              e.errorMessage ? ( ( e, t, a ) => {
                const n = Ue( {
                  eventType: _e.b,
                  actionSubject: $.PERMS,
                  actionSubjectId: t,
                  action: _.FAILED,
                  attributes: {
                    message: a
                  }
                } );
                e && n( e )
              } )( Ye, "ari:cloud:platform::site/" + P, e.errorMessage ) : ( ( e, t, a, n ) => {
                const o = Ue( {
                  eventType: _e.b,
                  actionSubject: $.PERMS,
                  actionSubjectId: t,
                  action: _.SUCCEEDED,
                  attributes: {
                    isInviteUsersPermitted: a,
                    isManagePermitted: n
                  }
                } );
                e && o( e )
              } )( Ye, "ari:cloud:platform::site/" + P, e.isInviteUsersPermitted, e.isManagePermitted ), ae( e.role )
            }
          }
          async function t() {
            Z( !0 );
            try {
              const e = await be.inviteCapabilities( P );
              if ( e && e.length ) {
                1 === e.filter( ( {
                  id: e
                } ) => e.includes( "jira" ) ).length ? he( e.map( ( {
                  name: e,
                  id: t
                } ) => ( {
                  label: e,
                  value: t
                } ) ) ) : he( e.filter( ( {
                  id: e
                } ) => "jira-core" !== e ).map( ( {
                  name: e,
                  id: t
                } ) => ( {
                  label: e,
                  value: t
                } ) ) ), ( ( e, t, a ) => {
                  const n = Ue( {
                    eventType: _e.b,
                    actionSubject: $.INVITE_CAPABILITIES,
                    actionSubjectId: t,
                    action: _.SUCCEEDED,
                    attributes: {
                      availableResourcesAri: a
                    }
                  } );
                  e && n( e )
                } )( Ye, h, e.map( ( {
                  id: e
                } ) => `ari:cloud:${e}::site/${P}` ) )
              } else Je( Ye, h )
            } catch ( e ) {
              Je( Ye, h )
            }
          }( async () => {
            await Promise.all( [ t(), e() ] ), Z( !1 )
          } )()
        }, [ P, Ye, j, h, C ] ), i.a.useEffect( () => {
          async function e() {
            if ( ee( !0 ), S && R )
              if ( "admin" === te && fe( A.locale ) ) try {
                if ( !ie ) {
                  const e = await Ce.getOrgId( P );
                  le( e )
                }
                const e = await Ce.siteMeetsGsyncPreconditions( P, ie );
                ( ( e, t, a ) => {
                  const n = Ue( {
                    eventType: _e.b,
                    actionSubject: $.GSYNC_CONFIGURABLE,
                    actionSubjectId: t,
                    action: a ? _.SUCCEEDED : _.FAILED,
                    attributes: {
                      result: a,
                      errors: !1
                    }
                  } );
                  e && n( e )
                } )( Ye, P, e ), oe( e ), ee( !1 )
              } catch ( e ) {
                ( ( e, t ) => {
                  const a = Ue( {
                    eventType: _e.b,
                    actionSubject: $.GSYNC_CONFIGURABLE,
                    actionSubjectId: t,
                    action: _.FAILED,
                    attributes: {
                      errors: !0
                    }
                  } );
                  e && a( e )
                } )( Ye, P ), oe( !0 ), ee( !1 )
              } else( ( e, t, a, n ) => {
                const o = Ue( {
                  eventType: _e.b,
                  actionSubject: $.GSYNC_CONFIGURABLE,
                  actionSubjectId: t,
                  action: _.SKIPPED,
                  attributes: {
                    role: a,
                    locale: n
                  }
                } );
                e && o( e )
              } )( Ye, P, te, A.locale ), oe( !1 ), ee( !1 );
              else oe( !1 ), ee( !1 )
          }( async () => {
            await e()
          } )()
        }, [ P, Ye, S, R, A.locale, ie, te ] ), i.a.useEffect( () => {
          ne && ( ( e, t ) => {
            const a = Ue( {
              eventType: _e.d,
              actionSubject: $.GSYNC_CONFIGURABLE,
              action: _.EXPOSED,
              attributes: {
                enabled: t
              }
            } );
            e && a( e )
          } )( Ye, ne ), R && ( ( e, t ) => {
            const a = Ue( {
              eventType: _e.d,
              actionSubject: $.INVITEE_LIST,
              action: _.EXPOSED,
              attributes: {
                enabled: t
              }
            } );
            e && a( e )
          } )( Ye, R )
        }, [ Ye, ne, R ] );
        const Xe = i.a.useCallback( () => {
            F < 10 && ( G( Math.min( F + 1, 10 ) ), W( [ ...V, "" ] ) )
          }, [ F, V ] ),
          Qe = i.a.useCallback( ( e, t ) => {
            W( a => a.map( ( a, n ) => ( n === t && e.target.value && ( ( e, t, a ) => {
              const n = Ue( {
                eventType: _e.e,
                actionSubject: $.EMAIL_INPUT,
                action: _.CHANGED,
                attributes: {
                  source: t,
                  inputIndex: e
                }
              } );
              a && n( a )
            } )( t, x, Ye ), n === t ? e.target.value : a ) ) )
          }, [ x, Ye ] ),
          et = i.a.useCallback( e => {
            W( e )
          }, [] ),
          tt = i.a.useCallback( () => [ ...new Set( [ ...V.filter( e => !!e ) ] ) ], [ V ] ),
          at = i.a.useCallback( async e => {
            K( !0 );
            const t = e.some( e => e.startsWith( "jira" ) ),
              a = !!x && "peopleMenu" !== x && !!O && "jira" === L && t,
              n = new URL( o ).origin,
              s = a || 1 !== e.length ? o : `${n}${(e=>{switch(e){case"confluence":return"/wiki";case"compass":return"/compass";default:return""}})(e[0])}`;
            let r = [];
            const c = e.map( e => `ari:cloud:${e}::site/${P}` );
            try {
              const t = new k( {
                  product: L
                } ),
                n = t.addToUrl( s ),
                d = t.toAnalyticsAttributes( {
                  hasGeneratedId: !0
                } ),
                u = tt(),
                m = await be.inviteUsers( {
                  users: u.map( e => ( {
                    email: e
                  } ) ),
                  continueUrl: n,
                  resources: c,
                  suppressInviteEmail: !1
                } );
              if ( m.failure ) {
                const {
                  message: t,
                  code: n
                } = m.failure;
                We( Ye, e, te, n, t );
                const o = ( ( e, t, a, n, o ) => {
                  const {
                    failure: s
                  } = e;
                  return s ? "licence-exceeded" !== s.code ? Ge( a ) : o ? {
                    appearance: "warning",
                    icon: i.a.createElement( Pe.a, {
                      label: s.code,
                      primaryColor: Ne.a.Y300,
                      secondaryColor: Ne.a.N0
                    } ),
                    title: i.a.createElement( l.b, Ee()( {}, Fe.licenceExceededInJiraProjectFlagTitle, {
                      values: {
                        failedInviteCount: n.length
                      }
                    } ) ),
                    description: i.a.createElement( l.b, Ee()( {}, Fe.licenceExceededInJiraProjectFlagDescription, {
                      values: {
                        emailFailedToInvite: n[ 0 ],
                        failedInviteCount: n.length,
                        userRole: a
                      }
                    } ) ),
                    actions: "admin" === a ? [ {
                      content: i.a.createElement( l.b, Fe.upgradePlanActionLabel ),
                      href: `${re}/s/${t}/billing/applications`,
                      target: "_blank"
                    }, {
                      content: i.a.createElement( l.b, Fe.viewUsersActionLabel ),
                      href: `${re}/s/${t}/users`,
                      target: "_blank"
                    } ] : []
                  } : {
                    appearance: "warning",
                    icon: i.a.createElement( Pe.a, {
                      label: s.code,
                      primaryColor: Ne.a.Y300,
                      secondaryColor: Ne.a.N0
                    } ),
                    title: i.a.createElement( l.b, Fe.licenceExceededFlagTitle ),
                    description: i.a.createElement( l.b, Ee()( {}, Fe.licenceExceededFlagDescription, {
                      values: {
                        failedInviteCount: n.length,
                        userRole: a
                      }
                    } ) ),
                    actions: "admin" === a ? [ {
                      content: i.a.createElement( l.b, Fe.upgradePlanActionLabel ),
                      href: `${re}/s/${t}/billing/applications`,
                      target: "_blank"
                    }, {
                      content: i.a.createElement( l.b, Fe.viewUsersActionLabel ),
                      href: `${re}/s/${t}/users`,
                      target: "_blank"
                    } ] : []
                  } : null
                } )( m, P, te, u, a );
                v && v( m ), r.push( o )
              } else {
                const {
                  invited: t,
                  accessRequested: n,
                  error: s
                } = m;
                v && v( m ), ( ( e, t, a, n ) => {
                  const o = Ue( {
                    eventType: _e.b,
                    actionSubject: $.INVITE_REQUEST,
                    action: _.SUCCEEDED,
                    attributes: {
                      permissionLevel: a,
                      products: t,
                      invited: n.invited,
                      accessRequested: n.accessRequested,
                      error: n.error
                    }
                  } );
                  e && o( e )
                } )( Ye, e, te, {
                  invited: t.map( e => e.id ),
                  accessRequested: n.map( e => e.id ),
                  error: s.map( ( {
                    error: e
                  } ) => e )
                } ), t.forEach( t => {
                  ( ( e, t, a, n, o ) => {
                    const i = Ue( {
                      eventType: _e.d,
                      actionSubject: $.USER,
                      actionSubjectId: a,
                      action: _.INVITED,
                      attributes: Object( p.a )( Object( p.a )( {}, t ), {}, {
                        permissionLevel: o,
                        products: n
                      } )
                    } );
                    e && i( e )
                  } )( Ye, d, t.id, e, te )
                } ), n.forEach( t => {
                  ( ( e, t, a, n, o ) => {
                    const i = Ue( {
                      eventType: _e.d,
                      actionSubject: $.PRODUCT_ACCESS,
                      actionSubjectId: a,
                      action: _.REQUESTED,
                      attributes: Object( p.a )( Object( p.a )( {}, t ), {}, {
                        permissionLevel: o,
                        products: n,
                        requestedForUserId: a
                      } )
                    } );
                    e && i( e )
                  } )( Ye, d, t.id, e, te )
                } );
                const c = a ? ( ( e, t, a, n, o, {
                  continueUrl: s,
                  jiraProjectName: r,
                  jiraProjectKey: p
                } ) => {
                  const {
                    invited: c = [],
                    accessRequested: d = []
                  } = e;
                  if ( c.length || d.length ) {
                    let e = Fe.hybridToJiraProjectSuccessFlagTitle,
                      t = Fe.hybridToJiraProjectSuccessFlagDescription;
                    const o = c.length && !d.length,
                      u = !c.length && d.length;
                    return o ? ( e = Fe.inviteToJiraProjectSuccessFlagTitle, t = Fe.inviteToJiraProjectSuccessFlagDescription ) : u && ( e = Fe.requestAccessToJiraProjectSuccessFlagTitle, t = Fe.requestAccessToJiraProjectSuccessFlagDescription ), {
                      appearance: "success",
                      icon: u ? i.a.createElement( Le.a, {
                        label: "success",
                        primaryColor: Ne.a.Y400,
                        secondaryColor: Ne.a.N0
                      } ) : i.a.createElement( Oe.a, {
                        label: "success",
                        primaryColor: Ne.a.G400,
                        secondaryColor: Ne.a.N0
                      } ),
                      title: i.a.createElement( l.b, Ee()( {}, e, {
                        values: {
                          inviteCount: c.length,
                          requestAccessCount: d.length
                        }
                      } ) ),
                      description: i.a.createElement( l.b, Ee()( {}, t, {
                        values: {
                          inviteCount: c.length,
                          requestAccessCount: d.length,
                          emailInvited: c.length ? c[ 0 ].email : "",
                          emailRequestedAccess: d.length ? d[ 0 ].email : "",
                          product: a.length > 1 ? null : me( a[ 0 ] ),
                          productCount: a.length,
                          jiraProjectName: r,
                          isAdmin: "admin" === n,
                          combination: c.length > 0 && d.length > 0 ? 1 === c.length && 1 === d.length ? "singleHybrid" : "multipleHybrid" : void 0
                        }
                      } ) ),
                      actions: o && "admin" === n ? [ {
                        content: i.a.createElement( l.b, Ee()( {}, Fe.jiraProjectSettingsLabel, {
                          values: {
                            jiraProjectName: r
                          }
                        } ) ),
                        href: `${new URL(s).origin}/jira/software/projects/${p}/settings/access`,
                        target: "_blank"
                      } ] : []
                    }
                  }
                  return null
                } )( m, 0, e, te, 0, {
                  continueUrl: o,
                  jiraProjectName: O,
                  jiraProjectKey: M
                } ) : ( ( e, t, a, n ) => {
                  const {
                    invited: o = [],
                    accessRequested: s = []
                  } = e;
                  if ( o.length || s.length ) {
                    let e = Fe.hybridSuccessFlagDescription;
                    const r = o.length && !s.length,
                      p = !o.length && s.length;
                    return r ? e = Fe.inviteSuccessFlagDescription : p && ( e = Fe.requestAccessSuccessFlagDescription ), {
                      appearance: "success",
                      icon: i.a.createElement( Oe.a, {
                        label: "success",
                        primaryColor: Ne.a.G400,
                        secondaryColor: Ne.a.N0
                      } ),
                      title: i.a.createElement( l.b, Fe.genericSuccessFlagTitle ),
                      description: i.a.createElement( l.b, Ee()( {}, e, {
                        values: {
                          inviteCount: o.length,
                          requestAccessCount: s.length,
                          emailInvited: o.length ? o[ 0 ].email : "",
                          emailRequestedAccess: s.length ? s[ 0 ].email : "",
                          product: a.length > 1 ? null : me( a[ 0 ] ),
                          productCount: a.length
                        }
                      } ) ),
                      actions: r && "admin" === n ? [ {
                        content: i.a.createElement( l.b, Fe.viewUsersActionLabel ),
                        href: `${re}/s/${t}/users`,
                        target: "_blank"
                      } ] : []
                    }
                  }
                  return null
                } )( m, P, e, te );
                c && r.push( c );
                const u = ( ( e, t ) => {
                  const {
                    error: a
                  } = e, n = "admin" === t;
                  return a && a.length ? {
                    appearance: "error",
                    icon: i.a.createElement( Ae.a, {
                      label: "error",
                      primaryColor: Ne.a.R400,
                      secondaryColor: Ne.a.N0
                    } ),
                    title: i.a.createElement( l.b, Ee()( {}, Fe.inviteFailedFlagTitle, {
                      values: {
                        isAdmin: n,
                        failedInviteCount: a.length
                      }
                    } ) ),
                    description: i.a.createElement( l.b, Ee()( {}, Fe.inviteFailedFlagDescription, {
                      values: {
                        isAdmin: n,
                        emailFailedToInvite: a[ 0 ] && a[ 0 ].email,
                        failedInviteCount: a.length
                      }
                    } ) ),
                    actions: n ? [ {
                      content: i.a.createElement( l.b, Fe.contactSupportActionLabel ),
                      href: "https://support.atlassian.com/contact/",
                      target: "_blank"
                    } ] : []
                  } : null
                } )( m, te );
                u && r.push( u )
              }
            } catch ( d ) {
              We( Ye, e, te, d.message ), r.push( Ge( te ) )
            }
            K( !1 ), r.length && y && r.forEach( y ), g && g()
          }, [ o, y, g, P, L, tt, Ye, te, v, x, M, O ] ),
          nt = i.a.useCallback( () => {
            f && f()
          }, [ f ] ),
          ot = i.a.useMemo( () => "jira-core" === q ? ce.filter( e => e.value.includes( "jira" ) ) : q ? ce.filter( e => e.value === q ) : 1 === ce.length ? ce : ce.filter( e => e.value.includes( L ) ), [ L, ce, q ] );
        i.a.useEffect( () => {
          !async function () {
            if ( P && L && ( N.current = null, Ie ) ) {
              const e = await we.fetchSlackUsers( P, L, Ie.id );
              N.current = new Ka.a( e, Re )
            }
          }()
        }, [ Ie, P, L ] );
        const it = i.a.useMemo( () => xe.filter( e => ( e !== De || Be.includes( L ) ) && ( "google-invites" !== e || "admin" !== te ) ), [ L, te, xe ] );
        i.a.useEffect( () => {
          !async function () {
            if ( !P || !L || !qe.includes( L ) ) return;
            const e = Be.includes( L ),
              t = z || U.NOT_ENROLLED,
              a = [];
            let n = [],
              o = [],
              i = t;
            fe( A.locale ) || ( a.push( "notEnglish" ), i = U.NOT_ENROLLED ), /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test( navigator.userAgent ) && ( a.push( "notDesktop" ), i = U.NOT_ENROLLED );
            try {
              if ( i === U.EXPERIMENT ) {
                X( !0 );
                const t = we.getExistingIntegrations(),
                  a = e ? we.fetchSlackWorkspaces( P, L ) : Promise.resolve( [] ),
                  [ i, l, s ] = await Promise.all( [ je.getAccountInfo(), t, a ] );
                Ve( l.connectedIntegrations ), Me( l.enabledIntegrations ), Se( s ), n = l.enabledIntegrations, o = s.map( e => e.id );
                const [ , r ] = i.email.split( "@" );
                if ( Ze( r ), e ) {
                  const e = Ma( L );
                  if ( s.length > 0 && e ) {
                    const t = s.find( t => t.id === e );
                    t && ze( t )
                  }
                }
                pe( !0 )
              }
            } catch ( l ) {
              i = U.NOT_ENROLLED, a.push( "error" ), pe( !1 )
            } finally {
              X( !1 ), ( ( e, t, a, n, o, i, l ) => {
                const s = Ue( {
                  eventType: _e.d,
                  actionSubject: $.INVITE_PEOPLE_FEATURE,
                  action: _.EXPOSED,
                  attributes: {
                    flagKey: "jira" === e ? "jira.frontend.growth.experiments.infi.enabled" : "confluence.frontend.invite.from.integrations",
                    value: a,
                    cohort: t,
                    growthInitiative: "virality",
                    experimentName: "Invite From Any Integration",
                    ineligibilityReasons: i,
                    enabledIntegrations: n,
                    slackTeams: o
                  }
                } );
                l && s( l )
              } )( L, t, i, n, o, a, Ye )
            }
          }()
        }, [ z, P, L, Ye, A.locale ] );
        const lt = i.a.useMemo( () => Te ? Ie ? [ ...Te, De ] : Te : null, [ Te, Ie ] ),
          st = i.a.useCallback( async e => {
            if ( !e || null === lt || 0 === lt.length ) return [];
            let t = lt.find( e => "google-invites" === e || "microsoft-invites" === e ) ? await we.search( e ) : [];
            if ( N.current ) {
              const a = N.current.search( e );
              t = function ( e, t ) {
                const a = [ ...e, ...t ].reduce( ( e, t ) => ( ( e[ t.email ] = e[ t.email ] || [] ).push( t ), e ), {} );
                return Object.keys( a ).map( e => a[ e ].reduce( ( e, t ) => {
                  const a = [ ...new Set( [ ...e.sources, ...t.sources ] ) ],
                    n = Object( p.a )( Object( p.a )( {}, Zt( e ) ), Zt( t ) );
                  return n.sources = a, n
                } ) )
              }( t, a.slice( 0, Math.min( a.length, 10 ) ) )
            }
            const a = new Ka.a( t, Re ).search( e );
            return a.slice( 0, Math.min( a.length, 10 ) )
          }, [ lt ] ),
          rt = i.a.useCallback( async () => {
            const e = await we.getExistingIntegrations();
            Ve( e.connectedIntegrations )
          }, [] ),
          pt = i.a.useCallback( e => {
            ze( e ), Pa( L, e.id ), Ke( De, e.id, Ye ), y && y( $e( De, e.name ) )
          }, [ L, y, Ye ] ),
          ct = i.a.useCallback( () => {
            y && y( {
              appearance: "success",
              icon: i.a.createElement( Oe.a, {
                label: "success",
                primaryColor: Ne.a.G400,
                secondaryColor: Ne.a.N0
              } ),
              title: i.a.createElement( l.b, Fe.slackDisconnectSuccessFlagTitle ),
              description: i.a.createElement( l.b, Fe.slackDiscnnectSuccessFlagDescription )
            } ), ze( null ), Ta( L )
          }, [ L, y ] );
        return H || Y || Q ? i.a.createElement( B, {
          "data-testid": "testId-invite-people-spinner"
        }, i.a.createElement( Wa.a, null ) ) : i.a.createElement( Ua, {
          addMoreButtonLabel: e,
          alignButtons: t,
          allowAddMoreFields: a,
          cancelButtonLabel: n,
          hideCancelButton: c,
          formTitle: d,
          formDescription: u,
          inputValues: V,
          isSendingInvitation: J,
          maxNumberOfInputs: m,
          numberOfInputs: F,
          onAddMoreInvitationsButtonClick: Xe,
          onInputChange: Qe,
          onInviteButtonClick: at,
          product: D ? "Compass" : T,
          productId: D ? "compass" : L,
          onCancelButtonClick: nt,
          sendButtonLabel: b,
          userRole: te,
          enableProductSelect: j,
          subProduct: q,
          productOptions: ce,
          defaultProductOptions: ot,
          enableGSyncButton: ne,
          organizationId: ie,
          enableInviteeList: R,
          enableThirdPartyInvites: se,
          thirdPartyLoadOptions: st,
          slackWorkspaces: ke,
          onSelectedSlackWorkspaceChange: pt,
          onDisconnectSlackWorkspaceClick: ct,
          thirdPartyIntegrations: lt,
          enabledThirdPartyIntegrations: it,
          onThirdPartyIntegrationsChange: rt,
          onInviteeListChange: et,
          showFlag: y,
          loggedInEmailDomain: He,
          source: x
        } )
      } ) );
      a.d( t, "default", ( function () {
        return Za
      } ) )
    },
    J1k2: function ( e, t, a ) {
      "use strict";
      a.d( t, "g", ( function () {
        return i
      } ) ), a.d( t, "a", ( function () {
        return l
      } ) ), a.d( t, "c", ( function () {
        return s
      } ) ), a.d( t, "b", ( function () {
        return r
      } ) ), a.d( t, "d", ( function () {
        return p
      } ) ), a.d( t, "e", ( function () {
        return c
      } ) ), a.d( t, "h", ( function () {
        return d
      } ) ), a.d( t, "f", ( function () {
        return u
      } ) );
      var n = a( "Czhu" ),
        o = a( "Tj69" );
      const i = {
          borderRadius: "" + o.d
        },
        l = {
          position: "absolute",
          left: 0,
          borderRadius: "" + o.b,
          alignItems: "center",
          display: "flex",
          justifyContent: "center"
        },
        s = ( {
          backgroundColor: e,
          backgroundColorHover: t,
          textColor: a,
          textColorHover: n
        } ) => ( {
          backgroundColor: e,
          color: a,
          "&:hover": {
            backgroundColor: t,
            color: n
          },
          "& button:hover": {
            backgroundColor: e,
            color: a
          },
          "&>span:hover": {
            backgroundColor: e,
            color: a
          },
          borderRadius: "" + o.b,
          cursor: "default",
          display: "inline-flex",
          position: "relative",
          height: "" + o.h,
          lineHeight: 1,
          margin: "" + o.c,
          padding: 0,
          overflow: "hidden"
        } ),
        r = ( {
          hoverBackgroundColor: e,
          hoverTextColor: t,
          hoverBackgroundColorRemoval: a,
          hoverTextColorRemoval: n,
          focusRingColor: o
        } ) => ( {
          "&>a:hover": {
            backgroundColor: e,
            color: t
          },
          '&[data-removable="true"]:hover': {
            backgroundColor: a,
            color: n
          },
          "&:focus-within": {
            boxShadow: "0 0 0 2px " + o,
            outline: "none"
          },
          '&[data-removing="true"]:focus-within': {
            boxShadow: "0 0 0 2px transparent",
            outline: "none"
          }
        } ),
        p = {
          paddingRight: "" + o.k,
          maxWidth: o.g - o.a + "px"
        },
        c = {
          paddingLeft: "" + o.j
        },
        d = {
          fontSize: o.i,
          fontWeight: "normal",
          lineHeight: 1,
          paddingLeft: o.e,
          paddingRight: o.e,
          paddingTop: "2px",
          paddingBottom: "2px",
          borderRadius: o.b,
          maxWidth: o.f,
          overflow: "hidden",
          textOverflow: "ellipsis",
          whiteSpace: "nowrap"
        },
        u = e => Object( n.a )( Object( n.a )( {}, d ), {}, {
          ':not([data-color="standard"])': {
            color: "inherit",
            textDecoration: "underline"
          },
          textDecoration: "none",
          "&:hover": {
            color: e
          },
          "&:focus": {
            outline: "none"
          }
        } )
    },
    L3DF: function ( e, t, a ) {
      "use strict";
      a.d( t, "a", ( function () {
        return n
      } ) ), a.d( t, "b", ( function () {
        return o
      } ) );
      const n = {
          iconColor: "inherit",
          textColor: "currentColor",
          iconGradientStart: "inherit",
          iconGradientStop: "inherit",
          size: "medium",
          label: ""
        },
        o = {
          xsmall: 16,
          small: 24,
          medium: 32,
          large: 40,
          xlarge: 48
        }
    },
    L4FL: function ( e, t, a ) {
      "use strict";
      var n = a( "VrFO" ),
        o = a.n( n ),
        i = a( "Y9Ll" ),
        l = a.n( i ),
        s = a( "N+ot" ),
        r = a.n( s ),
        p = a( "AuHH" ),
        c = a.n( p ),
        d = a( "5Yy7" ),
        u = a.n( d ),
        m = a( "KEM+" ),
        g = a.n( m ),
        f = a( "ERkP" ),
        v = a.n( f ),
        h = a( "KsTJ" ),
        k = a( "YKgJ" ),
        b = a( "HIRw" ),
        y = a( "L48P" ),
        C = Object( b.g )(),
        w = 2 * C / 12,
        j = h.default.label.withConfig( {
          displayName: "Label__LabelWrapper",
          componentId: "sc-17towfw-0"
        } )( [ "\n  display: block;\n" ] ),
        S = Object( k.a )( {
          light: y.N200,
          dark: y.DN90
        } ),
        E = Object( k.a )( {
          light: y.N60,
          dark: y.DN300
        } ),
        I = h.default.div.withConfig( {
          displayName: "Label__LabelInner",
          componentId: "sc-17towfw-1"
        } )( [ "\n  color: ", ";\n  font-size: ", "px;\n  font-weight: 600;\n  line-height: ", ";\n  ", ";\n\n  ", ";\n" ], ( function ( e ) {
          return e.isDisabled ? E( e ) : S( e )
        } ), 12, w, ( function ( e ) {
          var t = e.firstChild,
            a = e.inlineEdit,
            n = C / 2,
            o = 0,
            i = 2.5 * C;
          return a && ( n = 0, o = C, i = C ), t && ( i = C / 2 ), Object( h.css )( [ "\n    padding: ", "px ", "px ", "px ", "px;\n  " ], i, 0, n, o )
        } ), ( function ( e ) {
          return e.isHidden && "display: none;"
        } ) ),
        z = h.default.span.withConfig( {
          displayName: "Label__RequiredIndicator",
          componentId: "sc-17towfw-2"
        } )( [ "\n  color: ", ";\n  padding-left: 2px;\n" ], y.red );
      a.d( t, "a", ( function () {
        return A
      } ) );
      var A = function ( e ) {
        function t() {
          return o()( this, t ), r()( this, c()( t ).apply( this, arguments ) )
        }
        return u()( t, e ), l()( t, [ {
          key: "render",
          value: function () {
            var e = this.props,
              t = e.appearance,
              a = e.children,
              n = e.htmlFor,
              o = e.isFirstChild,
              i = e.isLabelHidden,
              l = e.isDisabled,
              s = e.isRequired,
              r = e.label,
              p = e.onClick;
            return v.a.createElement( j, {
              htmlFor: n
            }, v.a.createElement( I, {
              isHidden: i,
              inlineEdit: "inline-edit" === t,
              firstChild: o,
              isDisabled: l
            }, v.a.createElement( "span", {
              onClick: p
            }, r ), s ? v.a.createElement( z, {
              role: "presentation"
            }, "*" ) : null ), a )
          }
        } ] ), t
      }( f.Component );
      g()( A, "defaultProps", {
        appearance: "default"
      } )
    },
    "P/pT": function ( e ) {
      e.exports = JSON.parse( '{"a":"6.0.0"}' )
    },
    Rqxe: function ( e, t, a ) {
      "use strict";
      class n extends Error {
        constructor( e, t ) {
          super( e ), this.message = e, this.type = t, this.name = "AuthError", this.type = t, this.message = e
        }
      }

      function o( e, t ) {
        return new Promise( ( a, o ) => {
          let i, l = null;
          const s = e => {
              if ( e.source !== l ) return;
              const {
                data: t
              } = e;
              if ( "object" == typeof t ) switch ( t.type ) {
                case "outbound-auth:success":
                  p(), a();
                  break;
                case "outbound-auth:failure":
                  p();
                  const e = t.errorType.toLowerCase();
                  [ "auth_window_closed", "invalid_request", "unauthorized_client", "access_denied", "unsupported_response_type", "invalid_scope", "server_error", "temporarily_unavailable" ].includes( e ) ? o( new n( t.message, e ) ) : o( new n( t.message ) )
              }
            },
            r = () => {
              l && l.closed && ( p(), o( new n( "The auth window was closed", "auth_window_closed" ) ) )
            },
            p = () => {
              clearInterval( i ), window.removeEventListener( "message", s ), l && ( l.close(), l = null )
            };
          window.addEventListener( "message", s ), l = window.open( e, e, t ), i = window.setInterval( r, 500 )
        } )
      }
      a.d( t, "a", ( function () {
        return o
      } ) )
    },
    S4tU: function ( e, t, a ) {
      "use strict";
      a.d( t, "a", ( function () {
        return p
      } ) );
      var n = a( "ERkP" ),
        o = a.n( n ),
        i = a( "cYO7" ),
        l = a( "L3DF" ),
        s = a( "kEG5" );
      const r = ( e, t ) => {
        const a = Object( i.b )( {
          iconGradientStart: t
        } );
        return `<canvas height="32" width="32" aria-hidden="true"></canvas>\n  <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" focusable="false" aria-hidden="true">\n    <defs>\n      <linearGradient x1="108.695%" x2="12.439%" y1="-14.936%" y2="45.215%" id="${a}-1">\n        <stop stop-color="${e}" ${"inherit"===e?'stop-opacity="0.4"':""} offset="0%"></stop>\n        <stop stop-color="${t}" offset="100%"></stop>\n      </linearGradient>\n      <linearGradient x1="0%" x2="91.029%" y1="118.55%" y2="63.971%" id="${a}-2">\n        <stop stop-color="${e}" ${"inherit"===e?'stop-opacity="0.4"':""} offset="0%"></stop>\n        <stop stop-color="${t}" offset="100%"></stop>\n      </linearGradient>\n    </defs>\n    <g stroke="none" stroke-width="1" fill-rule="nonzero">\n      <path d="M15.9669691 29.3616152C17.2195568 28.1097726 17.9233158 26.4114623 17.9233158 24.6405626 17.9233158 22.8696629 17.2195568 21.1713527 15.9669691 19.91951L7.26805808 11.2489111 3.31143376 15.2055354C2.89743442 15.6200502 2.89743442 16.291565 3.31143376 16.7060799L15.9669691 29.3616152zM28.6225045 15.2055354L15.9669691 2.55 15.9280399 2.58892922C13.3485687 5.19994003 13.3612164 9.40374108 15.9563521 11.9991833L24.6623412 20.6662432 28.6225045 16.7060799C29.0365039 16.291565 29.0365039 15.6200502 28.6225045 15.2055354z" fill="currentColor"/>\n      <path d="M15.9669691,11.9921053 C13.3718335,9.39666304 13.3591857,5.19286199 15.938657,2.58185118 L6.91061706,11.6063521 L11.6316697,16.3274047 L15.9669691,11.9921053 Z" fill="url(#${a}-1"/>\n      <path d="M20.2951906,15.5912886 L15.9669691,19.91951 C17.2195568,21.1713527 17.9233158,22.8696629 17.9233158,24.6405626 C17.9233158,26.4114623 17.2195568,28.1097726 15.9669691,29.3616152 L25.0162432,20.3123412 L20.2951906,15.5912886 Z" fill="url(#${a}-2"/>\n    </g>\n  </svg>`
      };
      class p extends n.Component {
        render() {
          return o.a.createElement( s.a, Object.assign( {}, this.props, {
            svg: r
          } ) )
        }
      }
      p.defaultProps = l.a
    },
    Tj69: function ( e, t, a ) {
      "use strict";
      a.d( t, "h", ( function () {
        return r
      } ) ), a.d( t, "a", ( function () {
        return p
      } ) ), a.d( t, "g", ( function () {
        return d
      } ) ), a.d( t, "f", ( function () {
        return u
      } ) ), a.d( t, "b", ( function () {
        return m
      } ) ), a.d( t, "d", ( function () {
        return g
      } ) ), a.d( t, "c", ( function () {
        return f
      } ) ), a.d( t, "e", ( function () {
        return v
      } ) ), a.d( t, "k", ( function () {
        return h
      } ) ), a.d( t, "j", ( function () {
        return k
      } ) ), a.d( t, "i", ( function () {
        return b
      } ) );
      var n = a( "BMbf" );
      const o = Object( n.h )(),
        i = Object( n.c )(),
        l = Object( n.f )(),
        s = 2.5 * o,
        r = s + "px",
        p = s,
        c = 25 * o,
        d = c - s,
        u = d + "px",
        m = i + "px",
        g = s / 2 + "px",
        f = o / 2 + "px",
        v = o / 2 + "px",
        h = 2 * o + "px",
        k = s + "px",
        b = l + "px"
    },
    Uxiq: function ( e, t, a ) {
      "use strict";
      a.d( t, "a", ( function () {
        return p
      } ) );
      var n = a( "ERkP" ),
        o = a.n( n ),
        i = a( "cYO7" ),
        l = a( "L3DF" ),
        s = a( "kEG5" );
      const r = ( e, t ) => {
        const a = Object( i.b )( {
          iconGradientStart: t
        } );
        return `<canvas height="32" width="32" aria-hidden="true"></canvas>\n<svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" focusable="false" aria-hidden="true">\n    <defs>\n      <linearGradient x1="50%" y1="100%" x2="50%" y2="58.85%" id="${a}">\n          <stop stop-color="${e} "${"inherit"===e?'stop-opacity="0.4"':""} offset="0%"></stop>\n          <stop stop-color="${t}" offset="100%"></stop>\n      </linearGradient>\n    </defs>\n    <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">\n        <path d="M24.9965006,4 L6.99950008,4 C5.34292193,4 4,5.34314812 4,7 L4,25 C4,26.6568519 5.34292193,28 6.99950008,28 L24.9965006,28 C25.7927102,28.0010591 26.5566726,27.6854575 27.1200533,27.1227333 C27.6834339,26.5600092 28,25.7963408 28,25 L28,7 C28,6.20365918 27.6834339,5.4399908 27.1200533,4.87726666 C26.5566726,4.31454253 25.7927102,3.99894088 24.9965006,4 Z M15,21.6181465 C14.988052,22.384452 14.2853671,23 13.4227198,23 L8.57291098,23 C7.70421623,23 7,22.3743717 7,21.6026201 L7,21.6026201 L7,8.39737991 C7,8.02677172 7.16571693,7.67134267 7.46069496,7.4092831 C7.75567299,7.14722353 8.15574905,7 8.57291098,7 L13.4227198,7 C14.2921242,7 14.9975917,7.62500084 15,8.39737991 L15,21.6181465 Z M25,16.492003 C25,16.8919487 24.8341925,17.2755136 24.5390533,17.5583179 C24.2439141,17.8411222 23.8436194,18 23.4262295,18 L18.5737705,18 C17.704601,18 17,17.3248468 17,16.492003 L17,8.50799695 C17,8.10805129 17.1658075,7.72448637 17.4609467,7.44168208 C17.7560859,7.15887779 18.1563806,7 18.5737705,7 L23.4262295,7 C23.8436194,7 24.2439141,7.15887779 24.5390533,7.44168208 C24.8341925,7.72448637 25,8.10805129 25,8.50799695 L25,8.50799695 L25,16.492003 Z" fill="url(#${a})" fill-rule="nonzero"></path>\n    </g>\n</svg>`
      };
      class p extends n.Component {
        render() {
          return o.a.createElement( s.a, Object.assign( {}, this.props, {
            svg: r
          } ) )
        }
      }
      p.defaultProps = l.a
    },
    WCbN: function ( e, t, a ) {
      "use strict";
      Object.defineProperty( t, "__esModule", {
        value: !0
      } ), t.default = void 0;
      var n = i( a( "ERkP" ) ),
        o = i( a( "4KTy" ) );

      function i( e ) {
        return e && e.__esModule ? e : {
          default: e
        }
      }

      function l() {
        return ( l = Object.assign || function ( e ) {
          for ( var t = 1; t < arguments.length; t++ ) {
            var a = arguments[ t ];
            for ( var n in a ) Object.prototype.hasOwnProperty.call( a, n ) && ( e[ n ] = a[ n ] )
          }
          return e
        } ).apply( this, arguments )
      }
      var s = function ( e ) {
        return n.default.createElement( o.default, l( {
          dangerouslySetGlyph: '<svg width="24" height="24" viewBox="0 0 24 24" focusable="false" role="presentation"><path d="M15.185 7.4l-3.184 3.185-3.186-3.186a.507.507 0 0 0-.712.003l-.7.701a.496.496 0 0 0-.004.712l3.185 3.184L7.4 15.185a.507.507 0 0 0 .004.712l.7.7c.206.207.516.2.712.004l3.186-3.185 3.184 3.185a.507.507 0 0 0 .712-.004l.701-.7a.496.496 0 0 0 .003-.712l-3.186-3.186 3.186-3.184a.507.507 0 0 0-.003-.712l-.7-.7a.508.508 0 0 0-.36-.153.5.5 0 0 0-.353.15z" fill="currentColor" fill-rule="evenodd"/></svg>'
        }, e ) )
      };
      s.displayName = "EditorCloseIcon";
      var r = s;
      t.default = r
    },
    XE07: function ( e, t, a ) {
      "use strict";
      Object.defineProperty( t, "__esModule", {
        value: !0
      } ), t.default = void 0;
      var n = i( a( "ERkP" ) ),
        o = i( a( "4KTy" ) );

      function i( e ) {
        return e && e.__esModule ? e : {
          default: e
        }
      }

      function l() {
        return ( l = Object.assign || function ( e ) {
          for ( var t = 1; t < arguments.length; t++ ) {
            var a = arguments[ t ];
            for ( var n in a ) Object.prototype.hasOwnProperty.call( a, n ) && ( e[ n ] = a[ n ] )
          }
          return e
        } ).apply( this, arguments )
      }
      var s = function ( e ) {
        return n.default.createElement( o.default, l( {
          dangerouslySetGlyph: '<svg width="24" height="24" viewBox="0 0 24 24" focusable="false" role="presentation"><path d="M12 4c-4.412 0-8 3.588-8 8s3.588 8 8 8 8-3.588 8-8-3.588-8-8-8zm0 14.222A6.23 6.23 0 0 1 5.778 12 6.23 6.23 0 0 1 12 5.778 6.23 6.23 0 0 1 18.222 12 6.23 6.23 0 0 1 12 18.222zm.889-6.59V8.448c0-.489-.4-.889-.889-.889s-.889.4-.889.89v3.555c0 .248.103.471.268.633l2.195 2.194a.891.891 0 0 0 1.257 0 .891.891 0 0 0 0-1.256l-1.942-1.943z" fill="currentColor" fill-rule="evenodd"/></svg>'
        }, e ) )
      };
      s.displayName = "EmojiFrequentIcon";
      var r = s;
      t.default = r
    },
    XFpn: function ( e, t, a ) {
      "use strict";
      Object.defineProperty( t, "__esModule", {
        value: !0
      } ), t.default = void 0;
      var n = i( a( "ERkP" ) ),
        o = i( a( "4KTy" ) );

      function i( e ) {
        return e && e.__esModule ? e : {
          default: e
        }
      }

      function l() {
        return ( l = Object.assign || function ( e ) {
          for ( var t = 1; t < arguments.length; t++ ) {
            var a = arguments[ t ];
            for ( var n in a ) Object.prototype.hasOwnProperty.call( a, n ) && ( e[ n ] = a[ n ] )
          }
          return e
        } ).apply( this, arguments )
      }
      var s = function ( e ) {
        return n.default.createElement( o.default, l( {
          dangerouslySetGlyph: '<svg width="24" height="24" viewBox="0 0 24 24" focusable="false" role="presentation"><g fill-rule="evenodd"><circle fill="currentColor" cx="12" cy="12" r="10"/><path d="M9.707 11.293a1 1 0 1 0-1.414 1.414l2 2a1 1 0 0 0 1.414 0l4-4a1 1 0 1 0-1.414-1.414L11 12.586l-1.293-1.293z" fill="inherit"/></g></svg>'
        }, e ) )
      };
      s.displayName = "CheckCircleIcon";
      var r = s;
      t.default = r
    },
    YIqz: function ( e, t, a ) {
      "use strict";
      a.d( t, "a", ( function () {
        return l
      } ) );
      var n = a( "ERkP" ),
        o = a( "z9P0" ),
        i = a( "NnKS" );
      const l = ( e, t, a ) => {
        const {
          createAnalyticsEvent: l
        } = Object( o.a )(), s = Object( i.a )( e ), r = Object( i.a )( t );
        return Object( n.useCallback )( ( ...e ) => {
          const t = "function" == typeof r.current ? r.current( ...e ) : r.current;
          l( t ).fire( a ), s.current( ...e )
        }, [ l, s, r, a ] )
      }
    },
    "a1+z": function ( e, t, a ) {
      "use strict";
      var n = a( "Czhu" ),
        o = a( "ERkP" ),
        i = a( "l1C2" ),
        l = a( "3IV/" ),
        s = a( "BMbf" ),
        r = a( "SPNC" );
      var p = ( {
          secondary: e,
          children: t,
          truncate: a
        } ) => Object( i.f )( "span", {
          css: Object( i.e )( "display:block;margin:0;color:", l.N900, ";", a && "\n        overflow-x: hidden;\n        text-overflow: ellipsis;\n        white-space: nowrap;\n      ", " ", e && `\n          color: ${l.N200};\n          font-size: 0.85em;\n      ` )
        }, t ),
        c = a( "MNPa" );
      const d = ( e, {
          backgroundColor: t,
          isInteractive: a,
          isDisabled: n
        } ) => e `
  align-items: center;
  background-color: ${t};
  border-radius: ${Object(s.c)()}px;
  border: ${r.c}px solid transparent;
  box-sizing: border-box;
  color: inherit;
  display: flex;
  font-size: inherit;
  font-style: normal;
  font-weight: normal;
  line-height: 1;
  outline: none;
  margin: 0;
  padding: ${Object(s.h)()/2}px;
  text-align: left;
  text-decoration: none;
  width: 100%;
  cursor: pointer;

  ${a&&`\n        :hover {\n          background-color: ${Object(l.backgroundHover)()};\n          text-decoration: none;\n        }\n\n        :focus {\n          outline: none;\n          border-color: ${l.B200};\n        }\n\n        :active {\n          background-color: ${Object(l.backgroundActive)()};\n        }\n      `}

  ${n&&"\n        cursor: not-allowed;\n        opacity: 0.75;\n        pointer-events: none;\n      "}
`,
        u = Object( o.forwardRef )( ( {
          avatar: e,
          backgroundColor: t = "transparent",
          children: a,
          isTruncationDisabled: l,
          href: r,
          isDisabled: u,
          onClick: m,
          primaryText: g,
          secondaryText: f,
          target: v,
          testId: h
        }, k ) => {
          const b = e => {
            u || "function" != typeof m || m( e )
          };
          return Object( i.f )( i.b, null, ( {
            css: y
          } ) => {
            const C = Object( n.a )( Object( n.a )( Object( n.a )( Object( n.a )( {
              ref: k,
              className: d( y, {
                backgroundColor: t,
                isInteractive: Boolean( m || r )
              } )
            }, r && Object( c.c )( r, v ) ), m && Object( c.a )( b, u ) ), h && ( ( e, t ) => t ? {
              testId: e + "--itemInner"
            } : {
              "data-testid": e + "--itemInner"
            } )( h, a ) ), {}, {
              children: Object( i.f )( o.Fragment, null, e, Object( i.f )( "div", {
                css: {
                  maxWidth: "100%",
                  minWidth: 0,
                  flex: "1 1 100%",
                  lineHeight: "1.4",
                  paddingLeft: Object( s.h )() + "px"
                }
              }, Object( i.f )( p, {
                truncate: !l
              }, g ), Object( i.f )( p, {
                secondary: !0,
                truncate: !l
              }, f ) ) )
            } );
            return a ? a( C ) : Object( o.createElement )( Object( c.b )( r, m ), C )
          } )
        } );
      u.displayName = "AvatarItem";
      t.a = u
    },
    amtX: function ( e, t, a ) {
      "use strict";
      var n = a( "HbGN" ),
        o = a( "ERkP" ),
        i = a.n( o ),
        l = a( "EFzz" ),
        s = a( "mAAO" ),
        r = a( "I17z" ),
        p = a( "g52X" );

      function c() {}
      const d = "undefined" != typeof navigator && navigator.userAgent.toLowerCase().indexOf( "firefox" ) > -1,
        u = i.a.forwardRef( ( function ( e, t ) {
          let {
            mode: a,
            onMouseDown: l = c,
            onMouseUp: u = c
          } = e, m = Object( n.a )( e, [ "mode", "onMouseDown", "onMouseUp" ] );
          const g = m.appearance || "default",
            f = m.spacing || "default",
            v = Boolean( m.shouldFitContainer ),
            h = Boolean( m.isSelected ),
            k = Object( p.a )( m ),
            [ b, y ] = Object( o.useState )( !1 ),
            C = Object( o.useCallback )( e => {
              l( e ), d && y( !0 )
            }, [ l, y ] ),
            w = Object( o.useCallback )( e => {
              u( e ), d && y( !1 )
            }, [ u, y ] ),
            j = Object( o.useMemo )( () => Object( r.b )( {
              appearance: g,
              spacing: f,
              mode: a,
              isSelected: h,
              shouldFitContainer: v,
              isOnlySingleIcon: k
            } ), [ g, f, a, h, v, k ] );
          return i.a.createElement( s.a, Object.assign( {}, m, {
            ref: t,
            buttonCss: j,
            "data-firefox-is-active": !!b || void 0,
            onMouseDown: C,
            onMouseUp: w
          } ) )
        } ) ),
        m = i.a.memo( i.a.forwardRef( ( function ( e, t ) {
          return i.a.createElement( l.a.Consumer, null, ( {
            mode: a
          } ) => i.a.createElement( u, Object.assign( {}, e, {
            ref: t,
            mode: a
          } ) ) )
        } ) ) );
      m.displayName = "Button", t.a = m
    },
    bDkE: function ( e, t, a ) {
      "use strict";
      Object.defineProperty( t, "__esModule", {
        value: !0
      } ), t.default = void 0;
      var n = i( a( "ERkP" ) ),
        o = i( a( "4KTy" ) );

      function i( e ) {
        return e && e.__esModule ? e : {
          default: e
        }
      }

      function l() {
        return ( l = Object.assign || function ( e ) {
          for ( var t = 1; t < arguments.length; t++ ) {
            var a = arguments[ t ];
            for ( var n in a ) Object.prototype.hasOwnProperty.call( a, n ) && ( e[ n ] = a[ n ] )
          }
          return e
        } ).apply( this, arguments )
      }
      var s = function ( e ) {
        return n.default.createElement( o.default, l( {
          dangerouslySetGlyph: '<svg width="24" height="24" viewBox="0 0 24 24" focusable="false" role="presentation"><path d="M13.721 14.43a.972.972 0 0 0-1.37-.004l-2.088 2.059a1.928 1.928 0 0 1-1.37.568c-.588 0-1.135-.26-1.525-.738-.634-.777-.505-1.933.203-2.643l1.321-1.322.002.001.688-.686a.974.974 0 0 0 0-1.377l-.002-.003a.972.972 0 0 0-1.375 0l-2.068 2.07a3.892 3.892 0 0 0 0 5.497l.009.01A3.87 3.87 0 0 0 8.892 19a3.87 3.87 0 0 0 2.746-1.139l2.083-2.085a.951.951 0 0 0 0-1.345zm-3.442-4.86a.972.972 0 0 0 1.37.004l2.088-2.058c.366-.367.853-.57 1.37-.57.588 0 1.135.26 1.525.739.634.777.505 1.933-.203 2.643l-1.321 1.322-.002-.001-.688.686a.974.974 0 0 0 0 1.377l.002.003c.38.38.995.38 1.375 0l2.068-2.07a3.892 3.892 0 0 0 0-5.497l-.009-.01A3.87 3.87 0 0 0 15.108 5a3.87 3.87 0 0 0-2.746 1.139l-2.083 2.085a.951.951 0 0 0 0 1.345zM8.924 4.618l.401.968a1 1 0 1 1-1.848.765l-.4-.968a1 1 0 1 1 1.848-.765M5.383 7.076l.968.401a1.001 1.001 0 0 1-.766 1.848l-.968-.4a1.001 1.001 0 0 1 .766-1.848m9.932 10.413a1.003 1.003 0 0 0-.542 1.307l.402.968A1 1 0 1 0 17.023 19l-.401-.967a1 1 0 0 0-1.307-.542zm2.176-2.174a1 1 0 0 0 .54 1.306l.969.401a1.001 1.001 0 0 0 .766-1.848l-.969-.4a1 1 0 0 0-1.306.542z" fill="currentColor" fill-rule="evenodd"/></svg>'
        }, e ) )
      };
      s.displayName = "UnlinkIcon";
      var r = s;
      t.default = r
    },
    cBlm: function ( e, t, a ) {
      "use strict";
      var n = a( "Czhu" ),
        o = a( "ERkP" ),
        i = a( "l1C2" ),
        l = a( "YIqz" ),
        s = a( "WCbN" ),
        r = a.n( s ),
        p = a( "pwfR" ),
        c = a( "A46D" ),
        d = a( "/yy9" ),
        u = a( "ZIFe" );
      var m = a( "1jzs" );
      var g = ( {
          children: e,
          duration: t = d.c,
          onFinish: a
        } ) => {
          const [ n, i ] = ( () => {
            const e = Object( o.useRef )( null ),
              t = Object( o.useCallback )( t => {
                e.current = t
              }, [] );
            return [ e.current, t ]
          } )(), l = Object( p.b )(), s = Object( u.a )(), r = Object( u.b )(), g = l.isExiting ? "exiting" : "entering";
          return Object( m.a )( () => {
            if ( l.isExiting && n ) {
              const e = {
                width: n.offsetWidth + "px",
                height: n.offsetHeight + "px",
                boxSizing: "border-box",
                willChange: "width,margin"
              };
              Object.assign( n.style, e ), s( () => {
                s( () => {
                  const e = {
                    width: "0px",
                    margin: "0px",
                    transitionTimingFunction: c.a,
                    transitionDuration: t + "ms",
                    transitionProperty: "width,margin"
                  };
                  Object.assign( n.style, e ), r( () => {
                    l.onFinish && l.onFinish(), a && a( "exiting" )
                  }, t )
                } )
              } )
            }
          } ), e( {
            ref: i
          }, g )
        },
        f = a( "EFzz" ),
        v = a( "kjOP" ),
        h = a( "EVY7" ),
        k = a( "jc0p" ),
        b = a( "3gG5" ),
        y = a( "zrGf" ),
        C = a( "J1k2" );

      function w( ...e ) {
        return t => {
          e.forEach( e => {
            e && ( "function" == typeof e ? e( t ) : e.current = t )
          } )
        }
      }
      var j = a( "3IV/" ),
        S = a( "Tj69" );
      const E = ( {
          backgroundColor: e,
          backgroundColorHover: t,
          focusBoxShadowColor: a,
          hoverBoxShadowColor: n
        } ) => ( {
          position: "absolute",
          right: 0,
          backgroundColor: e,
          alignItems: "center",
          alignSelf: "center",
          appearance: "none",
          border: "none",
          borderRadius: S.b,
          color: j.N500,
          display: "flex",
          justifyContent: "center",
          height: "16px",
          margin: 0,
          padding: 0,
          cursor: "pointer",
          "&::-moz-focus-inner": {
            border: 0,
            margin: 0,
            padding: 0
          },
          "&:focus": {
            boxShadow: `0 0 0 2px ${a} inset`,
            outline: "none"
          },
          "&:hover": {
            backgroundColor: t + " !important",
            color: j.R500
          }
        } ),
        I = () => !0,
        z = () => {};
      var A;
      ! function ( e ) {
        e.Showing = "showing", e.Removing = "removing", e.Removed = "removed"
      }( A || ( A = {} ) );
      const x = Object( o.forwardRef )( ( e, t ) => {
          const [ a, s ] = Object( o.useState )( A.Showing ), {
            appearance: c = "default",
            elemBefore: d = null,
            isRemovable: u = !0,
            text: m = "",
            color: f = "standard",
            mode: j = "light",
            href: S,
            removeButtonLabel: x,
            testId: O,
            onBeforeRemoveAction: M = I,
            onAfterRemoveAction: P = z
          } = e, T = "rounded" === c, L = Boolean( S ), N = Object( l.a )( P, {
            action: "removed",
            actionSubject: "tag",
            attributes: {
              componentName: "tag",
              packageName: h.a,
              packageVersion: h.b
            }
          }, "atlaskit" ), B = Object( o.useCallback )( () => {
            N( m ), s( A.Removed )
          }, [ N, m ] ), D = Object( o.useCallback )( () => {
            M && M() && B()
          }, [ B, M ] ), R = Object( o.useCallback )( e => {
            ( " " === e.key || "Enter" === e.key ) && ( e.stopPropagation(), D() )
          }, [ D ] ), q = Object( o.useCallback )( () => s( A.Removing ), [] ), F = Object( o.useCallback )( () => s( A.Showing ), [] ), {
            chromeColors: G,
            chromeLinkColors: $,
            buttonColors: _,
            linkHoverColor: V
          } = Object( o.useMemo )( () => Object( v.a )( f, j ), [ f, j ] ), U = [ Object( C.b )( $ ), T ? C.g : void 0 ], W = [ Object( C.c )( Object( n.a )( {}, G ) ), T ? C.g : void 0 ], J = u ? Object( i.f )( "button", {
            css: [ E( Object( n.a )( {}, _ ) ), T ? C.g : void 0 ],
            tabIndex: 0,
            "aria-label": x,
            onClick: D,
            onFocus: q,
            onBlur: F,
            onKeyPress: R,
            type: "button",
            "data-testid": "close-button-" + O
          }, Object( i.f )( r.a, {
            label: "close tag",
            size: "small"
          } ) ) : void 0, K = [ ...W, L ? U : void 0 ], H = Object( i.f )( y.a, Object.assign( {}, e, {
            isRemovable: u,
            isLink: L,
            isRounded: T,
            linkHoverColor: V
          } ) );
          return Object( i.f )( p.a, null, !( a === A.Removed ) && Object( i.f )( g, null, e => Object( i.f )( k.a, {
            ref: w( e.ref, t ),
            testId: O,
            tagCss: K,
            "data-removable": !0,
            "data-removing": a === A.Removing,
            role: L ? "link" : void 0,
            before: Object( i.f )( b.a, {
              isRounded: T,
              elemBefore: d
            } ),
            contentElement: H,
            after: J
          } ) ) )
        } ),
        O = Object( o.memo )( Object( o.forwardRef )( ( e, t ) => Object( i.f )( f.a.Consumer, null, a => Object( i.f )( x, Object.assign( {}, e, {
          mode: a.mode,
          ref: t
        } ) ) ) ) );
      t.a = O
    },
    eWMb: function ( e, t, a ) {
      "use strict";
      a.r( t );
      var n = {};
      a.r( n ), a.d( n, "requestService", ( function () {
        return f
      } ) );
      const o = e => e && e.omitCredentials ? "omit" : "include";
      var i = a( "KEM+" ),
        l = a.n( i );
      class s {
        constructor() {
          l()( this, "listeners", new Set )
        }
        subscribe( e ) {
          this.listeners.add( e ), this.lastResult && e.result( this.lastResult )
        }
        unsubscribe( e ) {
          this.listeners.delete( e )
        }
        notifyResult( e ) {
          this.listeners.forEach( t => {
            t.result( e )
          } )
        }
        notifyError( e ) {
          this.listeners.forEach( t => {
            t.error && t.error( e )
          } )
        }
        notifyInfo( e ) {
          this.listeners.forEach( t => {
            t.info && t.info( e )
          } )
        }
        notifyNotReady() {
          this.listeners.forEach( e => {
            e.notReady && e.notReady()
          } )
        }
      }
      var r = a( "Czhu" ),
        p = a( "EfWO" ),
        c = a( "4CAG" ),
        d = a.n( c );
      const u = d.a.default || d.a,
        m = {},
        g = ( e, t ) => {
          if ( t )
            for ( const a in t )
              if ( {}.hasOwnProperty.call( t, a ) ) {
                const n = t[ a ];
                if ( Array.isArray( n ) )
                  for ( let t = 0; t < n.length; t++ ) e[ a ] = n[ t ];
                else e[ a ] = n
              }
        },
        f = ( e, t ) => {
          const {
            url: a,
            securityProvider: n,
            refreshedSecurityProvider: i
          } = e, {
            path: l,
            queryParams: s,
            requestInit: c
          } = t || m, d = n && n(), v = ( ( e, t = "", a, n ) => {
            const o = new u( p.parse( e ).search || void 0 );
            if ( e = e.split( "?" )[ 0 ], a )
              for ( const s in a )( {} ).hasOwnProperty.call( a, s ) && o.append( s, a[ s ] );
            if ( n && n.params )
              for ( const s in n.params )
                if ( {}.hasOwnProperty.call( n.params, s ) ) {
                  const e = n.params[ s ];
                  if ( Array.isArray( e ) )
                    for ( let t = 0; t < e.length; t++ ) o.append( s, e[ t ] );
                  else o.append( s, e )
                } let i = "";
            t && "/" !== e.substr( -1 ) && ( i = "/" );
            let l = o.toString();
            return l && ( l = "?" + l ), `${e}${i}${t}${l}`
          } )( a, l, s, d ), h = ( ( e, t ) => {
            const a = {};
            return g( a, t ), e && g( a, e.headers ), a
          } )( d, c && c.headers ), k = o( d ), b = Object( r.a )( Object( r.a )( {}, c ), {}, {
            headers: h,
            credentials: k
          } );
          return fetch( v, b ).then( e => 204 === e.status ? Promise.resolve() : e.ok ? e.json() : 401 === e.status && i ? i().then( e => f( {
            url: a,
            securityProvider: () => e
          }, t ) ) : Promise.reject( {
            code: e.status,
            reason: e.statusText
          } ) )
        };
      a.d( t, "utils", ( function () {
        return v
      } ) ), a.d( t, "buildCredentials", ( function () {
        return o
      } ) ), a.d( t, "AbstractResource", ( function () {
        return s
      } ) );
      const v = n
    },
    fcPp: function ( e, t, a ) {
      "use strict";
      a.d( t, "a", ( function () {
        return p
      } ) );
      var n = a( "ERkP" ),
        o = a.n( n ),
        i = a( "cYO7" ),
        l = a( "L3DF" ),
        s = a( "kEG5" );
      const r = ( e, t ) => {
        const a = Object( i.b )( {
          iconGradientStart: t
        } );
        return `<canvas height="32" width="32" aria-hidden="true"></canvas>\n  <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" focusable="false" aria-hidden="true">\n    <defs>\n      <linearGradient x1="100%" x2="45.339%" y1="29.23%" y2="75.038%" id="${a}">\n        <stop stop-color="${e}" ${"inherit"===e?'stop-opacity="0.4"':""} offset="0%"></stop>\n        <stop stop-color="${t}" offset="100%"></stop>\n      </linearGradient>\n    </defs>\n    <g stroke="none" stroke-width="1" fill-rule="nonzero">\n      <path d="M4.78580435,5 C4.55423538,4.99701333 4.33319771,5.09657765 4.18198458,5.27198488 C4.03077145,5.44739211 3.96486141,5.68068714 4.00193478,5.9092887 L7.32946109,26.1096074 C7.3703589,26.355373 7.49665951,26.578828 7.68612174,26.7406224 C7.87680866,26.9055104 8.11992598,26.9972003 8.37200761,26.9992993 L14.5488998,19.5995707 L13.6827239,19.5995707 L12.3227102,12.3958093 L27.3886833,12.3958093 L28.4469072,5.91712739 C28.4862006,5.68935393 28.4229655,5.45584955 28.2741046,5.27903 C28.1252437,5.10221045 27.9059335,5.00010264 27.6747957,5 L4.78580435,5 Z" fill="currentColor"/>\n      <path fill="url(#${a})" d="M27.3886833,12.3958093 L20.0320674,12.3958093 L18.7974728,19.5995707 L13.7023207,19.5995707 L7.68612174,26.7445417 C7.87680866,26.9094297 8.11992598,27.0011197 8.37200761,27.0032187 L24.3394307,27.0032187 C24.727754,27.0082167 25.0611955,26.7281258 25.1233002,26.3447683 L27.3886833,12.3958093 Z"/>\n    </g>\n  </svg>`
      };
      class p extends n.Component {
        render() {
          return o.a.createElement( s.a, Object.assign( {}, this.props, {
            svg: r
          } ) )
        }
      }
      p.defaultProps = l.a
    },
    gSNA: function ( e, t, a ) {
      "use strict";
      a.d( t, "a", ( function () {
        return p
      } ) );
      var n = a( "ERkP" ),
        o = a.n( n ),
        i = a( "cYO7" ),
        l = a( "L3DF" ),
        s = a( "kEG5" );
      const r = ( e, t ) => {
        const a = Object( i.b )( {
          iconGradientStart: t
        } );
        return `<canvas height="32" width="32" aria-hidden="true"></canvas>\n  <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" focusable="false" aria-hidden="true">\n    <defs>\n      <linearGradient x1="26.51%" y1="20.831%" y2="63.912%" id="${a}">\n        <stop stop-color="${e}" ${"inherit"===e?'stop-opacity="0.4"':""} offset="17%"></stop>\n        <stop stop-color="${t}" offset="100%"></stop>\n      </linearGradient>\n    </defs>\n    <g stroke="none" stroke-width="1" fill-rule="nonzero">\n      <path d="M15.52,20.5269517 C15.52,25.2103264 19.3166253,29.0069517 24,29.0069517 L24,12.11 L15.52,17.9183271 L15.52,20.5269517 Z" fill="url(#${a})"></path>\n      <path d="M23.9969697,12.1078788 L23.9969697,4.26454545 C23.9961315,3.79791901 23.7375983,3.36992522 23.3249582,3.15205124 C22.912318,2.93417725 22.4130783,2.9620669 22.0272727,3.22454545 L2.35,16.6578788 C4.98320643,20.5274016 10.2540962,21.5307928 14.1248485,18.8993939 L23.9969697,12.1078788 Z" fill="currentColor"></path>\n    </g>\n  </svg>`
      };
      class p extends n.Component {
        render() {
          return o.a.createElement( s.a, Object.assign( {}, this.props, {
            svg: r
          } ) )
        }
      }
      p.defaultProps = l.a
    },
    jc0p: function ( e, t, a ) {
      "use strict";
      var n = a( "HbGN" ),
        o = a( "ERkP" ),
        i = a.n( o ),
        l = a( "l1C2" );
      const s = i.a.forwardRef( ( function ( e, t ) {
        let {
          before: a,
          contentElement: o,
          after: i,
          testId: s,
          role: r,
          tagCss: p
        } = e, c = Object( n.a )( e, [ "before", "contentElement", "after", "testId", "role", "tagCss" ] );
        return Object( l.f )( "span", Object.assign( {}, c, {
          role: r,
          ref: t,
          css: p,
          "data-testid": s
        } ), a, o, i )
      } ) );
      t.a = s
    },
    kEG5: function ( e, t, a ) {
      "use strict";
      var n = a( "HbGN" ),
        o = a( "ERkP" ),
        i = a.n( o ),
        l = a( "KsTJ" ),
        s = a( "L3DF" );
      const r = l.default.span `
  color: ${e=>e.iconColor};
  display: inline-block;
  fill: ${e=>e.textColor};
  height: ${e=>e.size&&s.b[e.size]}px;
  position: relative;
  user-select: none;

  > svg {
    fill: inherit;
    height: 100%;
    left: 0;
    position: absolute;
    top: 0;
    width: 100%;
  }
  > canvas {
    display: block;
    height: 100%;
    visibility: hidden;
  }
  ${e=>"inherit"===e.iconGradientStart&&"inherit"===e.iconGradientStop&&l.css`
      /* Stop-color doesn't properly apply in chrome when the inherited/current color changes.
      * We have to initially set stop-color to inherit (either via DOM attribute or an initial CSS
      * rule) and then override it with currentColor for the color changes to be picked up.
      */
      stop {
        stop-color: currentColor;
      }
    `};
`;
      t.a = e => {
        let {
          label: t,
          svg: a
        } = e, o = Object( n.a )( e, [ "label", "svg" ] );
        return i.a.createElement( r, Object.assign( {
          "aria-label": t || void 0,
          role: t ? "img" : "presentation",
          dangerouslySetInnerHTML: {
            __html: "function" == typeof a ? a( String( o.iconGradientStart ), String( o.iconGradientStop ) ) : a
          }
        }, o ) )
      }
    },
    kjOP: function ( e, t, a ) {
      "use strict";
      a.d( t, "a", ( function () {
        return v
      } ) );
      var n = a( "3IV/" );
      const o = {
          standard: {
            light: n.N700,
            dark: n.DN600
          },
          green: {
            light: n.N800,
            dark: n.N800
          },
          purple: {
            light: n.N800,
            dark: n.N800
          },
          red: {
            light: n.N800,
            dark: n.N800
          },
          yellow: {
            light: n.N800,
            dark: n.N800
          },
          grey: {
            light: n.N0,
            dark: n.N0
          },
          teal: {
            light: n.N800,
            dark: n.N800
          },
          blue: {
            light: n.N800,
            dark: n.N800
          },
          tealLight: {
            light: n.N500,
            dark: n.N500
          },
          blueLight: {
            light: n.B500,
            dark: n.B500
          },
          greenLight: {
            light: n.G500,
            dark: n.G500
          },
          purpleLight: {
            light: n.P500,
            dark: n.P500
          },
          redLight: {
            light: n.N500,
            dark: n.N500
          },
          yellowLight: {
            light: n.N500,
            dark: n.N500
          },
          greyLight: {
            light: n.N500,
            dark: n.N500
          }
        },
        i = {
          standard: {
            light: n.N20,
            dark: n.DN100A
          },
          green: {
            light: n.G200,
            dark: n.G200
          },
          purple: {
            light: n.P100,
            dark: n.P100
          },
          red: {
            light: n.R100,
            dark: n.R100
          },
          yellow: {
            light: n.Y200,
            dark: n.Y200
          },
          grey: {
            light: n.N500,
            dark: n.N500
          },
          teal: {
            light: n.T200,
            dark: n.T200
          },
          blue: {
            light: n.B100,
            dark: n.B100
          },
          tealLight: {
            light: n.T100,
            dark: n.T100
          },
          blueLight: {
            light: n.B75,
            dark: n.B75
          },
          greenLight: {
            light: n.G100,
            dark: n.G100
          },
          purpleLight: {
            light: n.P75,
            dark: n.P75
          },
          redLight: {
            light: n.R75,
            dark: n.R75
          },
          yellowLight: {
            light: n.Y100,
            dark: n.Y100
          },
          greyLight: {
            light: n.N30,
            dark: n.N30
          }
        },
        l = {
          standard: {
            light: n.N30,
            dark: n.DN60
          },
          green: {
            light: n.G100,
            dark: n.DN60
          },
          purple: {
            light: n.P75,
            dark: n.DN60
          },
          red: {
            light: n.R75,
            dark: n.DN60
          },
          yellow: {
            light: n.Y100,
            dark: n.DN60
          },
          grey: {
            light: n.N50,
            dark: n.DN60
          },
          teal: {
            light: n.T100,
            dark: n.DN60
          },
          blue: {
            light: n.B75,
            dark: n.DN60
          },
          tealLight: {
            light: n.T75,
            dark: n.DN60
          },
          blueLight: {
            light: n.B50,
            dark: n.DN60
          },
          greenLight: {
            light: n.G75,
            dark: n.DN60
          },
          purpleLight: {
            light: n.P50,
            dark: n.DN60
          },
          redLight: {
            light: n.R50,
            dark: n.DN60
          },
          yellowLight: {
            light: n.Y75,
            dark: n.DN60
          },
          greyLight: {
            light: n.N30,
            dark: n.DN60
          }
        },
        s = {
          light: n.B100,
          dark: n.B75
        },
        r = {
          light: n.R300,
          dark: n.R200
        },
        p = {
          light: n.B100,
          dark: n.B75
        },
        c = {
          light: n.B300,
          dark: n.B200
        },
        d = ( e, t ) => i[ e || "standard" ][ t ],
        u = ( e, t ) => ( {
          light: n.R500,
          dark: n.DN30
        } [ t ] ),
        m = ( e, t ) => ( {
          light: n.R50,
          dark: n.R100
        } [ t ] ),
        g = ( e, t ) => ( {
          backgroundColor: d( e, t ),
          backgroundColorHover: m( 0, t ),
          textColor: ( ( e, t ) => o[ e || "standard" ][ t ] )( e, t ),
          textColorHover: u( 0, t )
        } ),
        f = ( e, t ) => {
          const a = m( 0, t ),
            n = u( 0, t );
          return {
            hoverBackgroundColor: ( ( e, t ) => l[ e || "standard" ][ t ] )( e, t ),
            hoverTextColor: c[ t ],
            hoverBackgroundColorRemoval: a,
            hoverTextColorRemoval: n,
            focusRingColor: s[ t ]
          }
        },
        v = ( e, t ) => ( {
          chromeColors: g( e, t ),
          chromeLinkColors: f( e, t ),
          buttonColors: ( ( e, t ) => ( {
            backgroundColor: d( e, t ),
            backgroundColorHover: m( 0, t ),
            focusBoxShadowColor: p[ t ],
            hoverBoxShadowColor: r[ t ]
          } ) )( e, t ),
          linkHoverColor: c[ t ]
        } )
    },
    o9O3: function ( e, t, a ) {
      "use strict";
      ( function ( e ) {
        a.d( t, "a", ( function () {
          return o
        } ) );
        let n;
        const o = () => n || ( n = i( {
            atob: "function" == typeof atob && atob.bind( void 0 ) || void 0 !== e && ( t => e.from( t, "base64" ).toString() ),
            btoa: "function" == typeof btoa && btoa.bind( void 0 ) || void 0 !== e && ( t => e.from( t ).toString( "base64" ) ),
            URLSearchParams: "function" == typeof URLSearchParams && URLSearchParams || a( "EfWO" ).URLSearchParams
          } ) ),
          i = e => {
            if ( !( e.atob && e.btoa && e.URLSearchParams ) ) throw new TypeError( "Origin-Tracing: missing environment APIs. Required: btoa(), atob(), URLSearchParams() (or in Node: Buffer, require('url').URLSearchParams)." );
            return e
          }
      } ).call( this, a( "1b0R" ).Buffer )
    },
    oxCZ: function ( e, t, a ) {
      e.exports = function ( e ) {
        var t = {};

        function a( n ) {
          if ( t[ n ] ) return t[ n ].exports;
          var o = t[ n ] = {
            i: n,
            l: !1,
            exports: {}
          };
          return e[ n ].call( o.exports, o, o.exports, a ), o.l = !0, o.exports
        }
        return a.m = e, a.c = t, a.d = function ( e, t, n ) {
          a.o( e, t ) || Object.defineProperty( e, t, {
            enumerable: !0,
            get: n
          } )
        }, a.r = function ( e ) {
          "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty( e, Symbol.toStringTag, {
            value: "Module"
          } ), Object.defineProperty( e, "__esModule", {
            value: !0
          } )
        }, a.t = function ( e, t ) {
          if ( 1 & t && ( e = a( e ) ), 8 & t ) return e;
          if ( 4 & t && "object" == typeof e && e && e.__esModule ) return e;
          var n = Object.create( null );
          if ( a.r( n ), Object.defineProperty( n, "default", {
              enumerable: !0,
              value: e
            } ), 2 & t && "string" != typeof e )
            for ( var o in e ) a.d( n, o, function ( t ) {
              return e[ t ]
            }.bind( null, o ) );
          return n
        }, a.n = function ( e ) {
          var t = e && e.__esModule ? function () {
            return e.default
          } : function () {
            return e
          };
          return a.d( t, "a", t ), t
        }, a.o = function ( e, t ) {
          return Object.prototype.hasOwnProperty.call( e, t )
        }, a.p = "", a( a.s = 0 )
      }( [ function ( e, t, a ) {
        function n( e ) {
          return ( n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function ( e ) {
            return typeof e
          } : function ( e ) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
          } )( e )
        }

        function o( e, t ) {
          for ( var a = 0; a < t.length; a++ ) {
            var n = t[ a ];
            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && ( n.writable = !0 ), Object.defineProperty( e, n.key, n )
          }
        }
        var i = a( 1 ),
          l = a( 7 ),
          s = l.get,
          r = ( l.deepValue, l.isArray ),
          p = function () {
            function e( t, a ) {
              var n = a.location,
                o = void 0 === n ? 0 : n,
                i = a.distance,
                l = void 0 === i ? 100 : i,
                r = a.threshold,
                p = void 0 === r ? .6 : r,
                c = a.maxPatternLength,
                d = void 0 === c ? 32 : c,
                u = a.caseSensitive,
                m = void 0 !== u && u,
                g = a.tokenSeparator,
                f = void 0 === g ? / +/g : g,
                v = a.findAllMatches,
                h = void 0 !== v && v,
                k = a.minMatchCharLength,
                b = void 0 === k ? 1 : k,
                y = a.id,
                C = void 0 === y ? null : y,
                w = a.keys,
                j = void 0 === w ? [] : w,
                S = a.shouldSort,
                E = void 0 === S || S,
                I = a.getFn,
                z = void 0 === I ? s : I,
                A = a.sortFn,
                x = void 0 === A ? function ( e, t ) {
                  return e.score - t.score
                } : A,
                O = a.tokenize,
                M = void 0 !== O && O,
                P = a.matchAllTokens,
                T = void 0 !== P && P,
                L = a.includeMatches,
                N = void 0 !== L && L,
                B = a.includeScore,
                D = void 0 !== B && B,
                R = a.verbose,
                q = void 0 !== R && R;
              ! function ( e, t ) {
                if ( !( e instanceof t ) ) throw new TypeError( "Cannot call a class as a function" )
              }( this, e ), this.options = {
                location: o,
                distance: l,
                threshold: p,
                maxPatternLength: d,
                isCaseSensitive: m,
                tokenSeparator: f,
                findAllMatches: h,
                minMatchCharLength: b,
                id: C,
                keys: j,
                includeMatches: N,
                includeScore: D,
                shouldSort: E,
                getFn: z,
                sortFn: x,
                verbose: q,
                tokenize: M,
                matchAllTokens: T
              }, this.setCollection( t ), this._processKeys( j )
            }
            var t, a;
            return t = e, ( a = [ {
              key: "setCollection",
              value: function ( e ) {
                return this.list = e, e
              }
            }, {
              key: "_processKeys",
              value: function ( e ) {
                if ( this._keyWeights = {}, this._keyNames = [], e.length && "string" == typeof e[ 0 ] )
                  for ( var t = 0, a = e.length; t < a; t += 1 ) {
                    var n = e[ t ];
                    this._keyWeights[ n ] = 1, this._keyNames.push( n )
                  } else {
                    for ( var o = null, i = null, l = 0, s = 0, r = e.length; s < r; s += 1 ) {
                      var p = e[ s ];
                      if ( !p.hasOwnProperty( "name" ) ) throw new Error( 'Missing "name" property in key object' );
                      var c = p.name;
                      if ( this._keyNames.push( c ), !p.hasOwnProperty( "weight" ) ) throw new Error( 'Missing "weight" property in key object' );
                      var d = p.weight;
                      if ( d < 0 || d > 1 ) throw new Error( '"weight" property in key must bein the range of [0, 1)' );
                      i = null == i ? d : Math.max( i, d ), o = null == o ? d : Math.min( o, d ), this._keyWeights[ c ] = d, l += d
                    }
                    if ( l > 1 ) throw new Error( "Total of weights cannot exceed 1" )
                  }
              }
            }, {
              key: "search",
              value: function ( e ) {
                var t = arguments.length > 1 && void 0 !== arguments[ 1 ] ? arguments[ 1 ] : {
                  limit: !1
                };
                this._log( '---------\nSearch pattern: "'.concat( e, '"' ) );
                var a = this._prepareSearchers( e ),
                  n = a.tokenSearchers,
                  o = a.fullSearcher,
                  i = this._search( n, o );
                return this._computeScore( i ), this.options.shouldSort && this._sort( i ), t.limit && "number" == typeof t.limit && ( i = i.slice( 0, t.limit ) ), this._format( i )
              }
            }, {
              key: "_prepareSearchers",
              value: function () {
                var e = arguments.length > 0 && void 0 !== arguments[ 0 ] ? arguments[ 0 ] : "",
                  t = [];
                if ( this.options.tokenize )
                  for ( var a = e.split( this.options.tokenSeparator ), n = 0, o = a.length; n < o; n += 1 ) t.push( new i( a[ n ], this.options ) );
                return {
                  tokenSearchers: t,
                  fullSearcher: new i( e, this.options )
                }
              }
            }, {
              key: "_search",
              value: function () {
                var e = arguments.length > 0 && void 0 !== arguments[ 0 ] ? arguments[ 0 ] : [],
                  t = arguments.length > 1 ? arguments[ 1 ] : void 0,
                  a = this.list,
                  n = {},
                  o = [];
                if ( "string" == typeof a[ 0 ] ) {
                  for ( var i = 0, l = a.length; i < l; i += 1 ) this._analyze( {
                    key: "",
                    value: a[ i ],
                    record: i,
                    index: i
                  }, {
                    resultMap: n,
                    results: o,
                    tokenSearchers: e,
                    fullSearcher: t
                  } );
                  return o
                }
                for ( var s = 0, r = a.length; s < r; s += 1 )
                  for ( var p = a[ s ], c = 0, d = this._keyNames.length; c < d; c += 1 ) {
                    var u = this._keyNames[ c ];
                    this._analyze( {
                      key: u,
                      value: this.options.getFn( p, u ),
                      record: p,
                      index: s
                    }, {
                      resultMap: n,
                      results: o,
                      tokenSearchers: e,
                      fullSearcher: t
                    } )
                  }
                return o
              }
            }, {
              key: "_analyze",
              value: function ( e, t ) {
                var a = this,
                  n = e.key,
                  o = e.arrayIndex,
                  i = void 0 === o ? -1 : o,
                  l = e.value,
                  s = e.record,
                  p = e.index,
                  c = t.tokenSearchers,
                  d = void 0 === c ? [] : c,
                  u = t.fullSearcher,
                  m = t.resultMap,
                  g = void 0 === m ? {} : m,
                  f = t.results,
                  v = void 0 === f ? [] : f;
                ! function e( t, o, i, l ) {
                  if ( null != o )
                    if ( "string" == typeof o ) {
                      var s = !1,
                        p = -1,
                        c = 0;
                      a._log( "\nKey: ".concat( "" === n ? "--" : n ) );
                      var m = u.search( o );
                      if ( a._log( 'Full text: "'.concat( o, '", score: ' ).concat( m.score ) ), a.options.tokenize ) {
                        for ( var f = o.split( a.options.tokenSeparator ), h = f.length, k = [], b = 0, y = d.length; b < y; b += 1 ) {
                          var C = d[ b ];
                          a._log( '\nPattern: "'.concat( C.pattern, '"' ) );
                          for ( var w = !1, j = 0; j < h; j += 1 ) {
                            var S = f[ j ],
                              E = C.search( S ),
                              I = {};
                            E.isMatch ? ( I[ S ] = E.score, s = !0, w = !0, k.push( E.score ) ) : ( I[ S ] = 1, a.options.matchAllTokens || k.push( 1 ) ), a._log( 'Token: "'.concat( S, '", score: ' ).concat( I[ S ] ) )
                          }
                          w && ( c += 1 )
                        }
                        p = k[ 0 ];
                        for ( var z = k.length, A = 1; A < z; A += 1 ) p += k[ A ];
                        p /= z, a._log( "Token score average:", p )
                      }
                      var x = m.score;
                      p > -1 && ( x = ( x + p ) / 2 ), a._log( "Score average:", x );
                      var O = !a.options.tokenize || !a.options.matchAllTokens || c >= d.length;
                      if ( a._log( "\nCheck Matches: ".concat( O ) ), ( s || m.isMatch ) && O ) {
                        var M = {
                          key: n,
                          arrayIndex: t,
                          value: o,
                          score: x
                        };
                        a.options.includeMatches && ( M.matchedIndices = m.matchedIndices );
                        var P = g[ l ];
                        P ? P.output.push( M ) : ( g[ l ] = {
                          item: i,
                          output: [ M ]
                        }, v.push( g[ l ] ) )
                      }
                    } else if ( r( o ) )
                    for ( var T = 0, L = o.length; T < L; T += 1 ) e( T, o[ T ], i, l )
                }( i, l, s, p )
              }
            }, {
              key: "_computeScore",
              value: function ( e ) {
                this._log( "\n\nComputing score:\n" );
                for ( var t = this._keyWeights, a = !!Object.keys( t ).length, n = 0, o = e.length; n < o; n += 1 ) {
                  for ( var i = e[ n ], l = i.output, s = l.length, r = 1, p = 0; p < s; p += 1 ) {
                    var c = l[ p ],
                      d = c.key,
                      u = a ? t[ d ] : 1,
                      m = 0 === c.score && t && t[ d ] > 0 ? Number.EPSILON : c.score;
                    r *= Math.pow( m, u )
                  }
                  i.score = r, this._log( i )
                }
              }
            }, {
              key: "_sort",
              value: function ( e ) {
                this._log( "\n\nSorting...." ), e.sort( this.options.sortFn )
              }
            }, {
              key: "_format",
              value: function ( e ) {
                var t = [];
                if ( this.options.verbose ) {
                  var a = [];
                  this._log( "\n\nOutput:\n\n", JSON.stringify( e, ( function ( e, t ) {
                    if ( "object" === n( t ) && null !== t ) {
                      if ( -1 !== a.indexOf( t ) ) return;
                      a.push( t )
                    }
                    return t
                  } ), 2 ) ), a = null
                }
                var o = [];
                this.options.includeMatches && o.push( ( function ( e, t ) {
                  var a = e.output;
                  t.matches = [];
                  for ( var n = 0, o = a.length; n < o; n += 1 ) {
                    var i = a[ n ];
                    if ( 0 !== i.matchedIndices.length ) {
                      var l = {
                        indices: i.matchedIndices,
                        value: i.value
                      };
                      i.key && ( l.key = i.key ), i.hasOwnProperty( "arrayIndex" ) && i.arrayIndex > -1 && ( l.arrayIndex = i.arrayIndex ), t.matches.push( l )
                    }
                  }
                } ) ), this.options.includeScore && o.push( ( function ( e, t ) {
                  t.score = e.score
                } ) );
                for ( var i = 0, l = e.length; i < l; i += 1 ) {
                  var s = e[ i ];
                  if ( this.options.id && ( s.item = this.options.getFn( s.item, this.options.id )[ 0 ] ), o.length ) {
                    for ( var r = {
                        item: s.item
                      }, p = 0, c = o.length; p < c; p += 1 ) o[ p ]( s, r );
                    t.push( r )
                  } else t.push( s.item )
                }
                return t
              }
            }, {
              key: "_log",
              value: function () {
                var e;
                this.options.verbose && ( e = console ).log.apply( e, arguments )
              }
            } ] ) && o( t.prototype, a ), e
          }();
        e.exports = p
      }, function ( e, t, a ) {
        function n( e, t ) {
          for ( var a = 0; a < t.length; a++ ) {
            var n = t[ a ];
            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && ( n.writable = !0 ), Object.defineProperty( e, n.key, n )
          }
        }
        var o = a( 2 ),
          i = a( 3 ),
          l = a( 6 ),
          s = function () {
            function e( t, a ) {
              var n = a.location,
                o = void 0 === n ? 0 : n,
                i = a.distance,
                s = void 0 === i ? 100 : i,
                r = a.threshold,
                p = void 0 === r ? .6 : r,
                c = a.maxPatternLength,
                d = void 0 === c ? 32 : c,
                u = a.isCaseSensitive,
                m = void 0 !== u && u,
                g = a.tokenSeparator,
                f = void 0 === g ? / +/g : g,
                v = a.findAllMatches,
                h = void 0 !== v && v,
                k = a.minMatchCharLength,
                b = void 0 === k ? 1 : k,
                y = a.includeMatches,
                C = void 0 !== y && y;
              ! function ( e, t ) {
                if ( !( e instanceof t ) ) throw new TypeError( "Cannot call a class as a function" )
              }( this, e ), this.options = {
                location: o,
                distance: s,
                threshold: p,
                maxPatternLength: d,
                isCaseSensitive: m,
                tokenSeparator: f,
                findAllMatches: h,
                includeMatches: C,
                minMatchCharLength: b
              }, this.pattern = m ? t : t.toLowerCase(), this.pattern.length <= d && ( this.patternAlphabet = l( this.pattern ) )
            }
            var t, a;
            return t = e, ( a = [ {
              key: "search",
              value: function ( e ) {
                var t = this.options,
                  a = t.isCaseSensitive,
                  n = t.includeMatches;
                if ( a || ( e = e.toLowerCase() ), this.pattern === e ) {
                  var l = {
                    isMatch: !0,
                    score: 0
                  };
                  return n && ( l.matchedIndices = [
                    [ 0, e.length - 1 ]
                  ] ), l
                }
                var s = this.options,
                  r = s.maxPatternLength,
                  p = s.tokenSeparator;
                if ( this.pattern.length > r ) return o( e, this.pattern, p );
                var c = this.options,
                  d = c.location,
                  u = c.distance,
                  m = c.threshold,
                  g = c.findAllMatches,
                  f = c.minMatchCharLength;
                return i( e, this.pattern, this.patternAlphabet, {
                  location: d,
                  distance: u,
                  threshold: m,
                  findAllMatches: g,
                  minMatchCharLength: f,
                  includeMatches: n
                } )
              }
            } ] ) && n( t.prototype, a ), e
          }();
        e.exports = s
      }, function ( e, t ) {
        var a = /[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g;
        e.exports = function ( e, t ) {
          var n = arguments.length > 2 && void 0 !== arguments[ 2 ] ? arguments[ 2 ] : / +/g,
            o = new RegExp( t.replace( a, "\\$&" ).replace( n, "|" ) ),
            i = e.match( o ),
            l = !!i,
            s = [];
          if ( l )
            for ( var r = 0, p = i.length; r < p; r += 1 ) {
              var c = i[ r ];
              s.push( [ e.indexOf( c ), c.length - 1 ] )
            }
          return {
            score: l ? .5 : 1,
            isMatch: l,
            matchedIndices: s
          }
        }
      }, function ( e, t, a ) {
        var n = a( 4 ),
          o = a( 5 );
        e.exports = function ( e, t, a, i ) {
          for ( var l = i.location, s = void 0 === l ? 0 : l, r = i.distance, p = void 0 === r ? 100 : r, c = i.threshold, d = void 0 === c ? .6 : c, u = i.findAllMatches, m = void 0 !== u && u, g = i.minMatchCharLength, f = void 0 === g ? 1 : g, v = i.includeMatches, h = void 0 !== v && v, k = s, b = e.length, y = d, C = e.indexOf( t, k ), w = t.length, j = [], S = 0; S < b; S += 1 ) j[ S ] = 0;
          if ( -1 !== C ) {
            var E = n( t, {
              errors: 0,
              currentLocation: C,
              expectedLocation: k,
              distance: p
            } );
            if ( y = Math.min( E, y ), -1 !== ( C = e.lastIndexOf( t, k + w ) ) ) {
              var I = n( t, {
                errors: 0,
                currentLocation: C,
                expectedLocation: k,
                distance: p
              } );
              y = Math.min( I, y )
            }
          }
          C = -1;
          for ( var z = [], A = 1, x = w + b, O = 1 << ( w <= 31 ? w - 1 : 30 ), M = 0; M < w; M += 1 ) {
            for ( var P = 0, T = x; P < T; ) n( t, {
              errors: M,
              currentLocation: k + T,
              expectedLocation: k,
              distance: p
            } ) <= y ? P = T : x = T, T = Math.floor( ( x - P ) / 2 + P );
            x = T;
            var L = Math.max( 1, k - T + 1 ),
              N = m ? b : Math.min( k + T, b ) + w,
              B = Array( N + 2 );
            B[ N + 1 ] = ( 1 << M ) - 1;
            for ( var D = N; D >= L; D -= 1 ) {
              var R = D - 1,
                q = a[ e.charAt( R ) ];
              if ( q && ( j[ R ] = 1 ), B[ D ] = ( B[ D + 1 ] << 1 | 1 ) & q, 0 !== M && ( B[ D ] |= ( z[ D + 1 ] | z[ D ] ) << 1 | 1 | z[ D + 1 ] ), B[ D ] & O && ( A = n( t, {
                  errors: M,
                  currentLocation: R,
                  expectedLocation: k,
                  distance: p
                } ) ) <= y ) {
                if ( y = A, ( C = R ) <= k ) break;
                L = Math.max( 1, 2 * k - C )
              }
            }
            if ( n( t, {
                errors: M + 1,
                currentLocation: k,
                expectedLocation: k,
                distance: p
              } ) > y ) break;
            z = B
          }
          var F = {
            isMatch: C >= 0,
            score: 0 === A ? .001 : A
          };
          return h && ( F.matchedIndices = o( j, f ) ), F
        }
      }, function ( e, t ) {
        e.exports = function ( e, t ) {
          var a = t.errors,
            n = void 0 === a ? 0 : a,
            o = t.currentLocation,
            i = void 0 === o ? 0 : o,
            l = t.expectedLocation,
            s = void 0 === l ? 0 : l,
            r = t.distance,
            p = void 0 === r ? 100 : r,
            c = n / e.length,
            d = Math.abs( s - i );
          return p ? c + d / p : d ? 1 : c
        }
      }, function ( e, t ) {
        e.exports = function () {
          for ( var e = arguments.length > 0 && void 0 !== arguments[ 0 ] ? arguments[ 0 ] : [], t = arguments.length > 1 && void 0 !== arguments[ 1 ] ? arguments[ 1 ] : 1, a = [], n = -1, o = -1, i = 0, l = e.length; i < l; i += 1 ) {
            var s = e[ i ];
            s && -1 === n ? n = i : s || -1 === n || ( ( o = i - 1 ) - n + 1 >= t && a.push( [ n, o ] ), n = -1 )
          }
          return e[ i - 1 ] && i - n >= t && a.push( [ n, i - 1 ] ), a
        }
      }, function ( e, t ) {
        e.exports = function ( e ) {
          for ( var t = {}, a = e.length, n = 0; n < a; n += 1 ) t[ e.charAt( n ) ] = 0;
          for ( var o = 0; o < a; o += 1 ) t[ e.charAt( o ) ] |= 1 << a - o - 1;
          return t
        }
      }, function ( e, t ) {
        var a = function ( e ) {
            return Array.isArray ? Array.isArray( e ) : "[object Array]" === Object.prototype.toString.call( e )
          },
          n = function ( e ) {
            return null == e ? "" : function ( e ) {
              if ( "string" == typeof e ) return e;
              var t = e + "";
              return "0" == t && 1 / e == -1 / 0 ? "-0" : t
            }( e )
          },
          o = function ( e ) {
            return "string" == typeof e
          },
          i = function ( e ) {
            return "number" == typeof e
          };
        e.exports = {
          get: function ( e, t ) {
            var l = [];
            return function e( t, s ) {
              if ( s ) {
                var r = s.indexOf( "." ),
                  p = s,
                  c = null; - 1 !== r && ( p = s.slice( 0, r ), c = s.slice( r + 1 ) );
                var d = t[ p ];
                if ( null != d )
                  if ( c || !o( d ) && !i( d ) )
                    if ( a( d ) )
                      for ( var u = 0, m = d.length; u < m; u += 1 ) e( d[ u ], c );
                    else c && e( d, c );
                else l.push( n( d ) )
              } else l.push( t )
            }( e, t ), l
          },
          isArray: a,
          isString: o,
          isNum: i,
          toString: n
        }
      } ] )
    },
    przm: function ( e, t, a ) {
      "use strict";
      Object.defineProperty( t, "__esModule", {
        value: !0
      } ), t.default = void 0;
      var n = i( a( "ERkP" ) ),
        o = i( a( "4KTy" ) );

      function i( e ) {
        return e && e.__esModule ? e : {
          default: e
        }
      }

      function l() {
        return ( l = Object.assign || function ( e ) {
          for ( var t = 1; t < arguments.length; t++ ) {
            var a = arguments[ t ];
            for ( var n in a ) Object.prototype.hasOwnProperty.call( a, n ) && ( e[ n ] = a[ n ] )
          }
          return e
        } ).apply( this, arguments )
      }
      var s = function ( e ) {
        return n.default.createElement( o.default, l( {
          dangerouslySetGlyph: '<svg width="24" height="24" viewBox="0 0 24 24" focusable="false" role="presentation"><path d="M12 20a8 8 0 1 1 0-16 8 8 0 0 1 0 16zm1.364-10.964l-2.152 4.11-1.543-1.39a1 1 0 1 0-1.338 1.487l2.5 2.25a1 1 0 0 0 1.555-.279l2.75-5.25a1 1 0 0 0-1.772-.928z" fill="currentColor" fill-rule="evenodd"/></svg>'
        }, e ) )
      };
      s.displayName = "EditorSuccessIcon";
      var r = s;
      t.default = r
    },
    q4aH: function ( e, t, a ) {
      "use strict";
      Object.defineProperty( t, "__esModule", {
        value: !0
      } ), t.default = void 0;
      var n = i( a( "ERkP" ) ),
        o = i( a( "4KTy" ) );

      function i( e ) {
        return e && e.__esModule ? e : {
          default: e
        }
      }

      function l() {
        return ( l = Object.assign || function ( e ) {
          for ( var t = 1; t < arguments.length; t++ ) {
            var a = arguments[ t ];
            for ( var n in a ) Object.prototype.hasOwnProperty.call( a, n ) && ( e[ n ] = a[ n ] )
          }
          return e
        } ).apply( this, arguments )
      }
      var s = function ( e ) {
        return n.default.createElement( o.default, l( {
          dangerouslySetGlyph: '<svg width="24" height="24" viewBox="0 0 24 24" focusable="false" role="presentation"><g fill="currentColor" fill-rule="evenodd"><circle cx="16" cy="9" r="3"/><circle cx="8" cy="6" r="3"/><path d="M11 15c0-1.105.887-2 2-2h6c1.105 0 2 .885 2 2v3.73c0 3.027-10 3.027-10 0V15z"/><path d="M13 12a1.997 1.997 0 0 0-2-2H5c-1.113 0-2 .897-2 2.003v3.826c0 1.921 4.054 2.518 7 1.984v-2.807A3.001 3.001 0 0 1 12.997 12H13z"/></g></svg>'
        }, e ) )
      };
      s.displayName = "PeopleIcon";
      var r = s;
      t.default = r
    },
    scnH: function ( e, t, a ) {
      "use strict";
      a.d( t, "a", ( function () {
        return p
      } ) );
      var n = a( "ERkP" ),
        o = a.n( n ),
        i = a( "cYO7" ),
        l = a( "L3DF" ),
        s = a( "kEG5" );
      const r = ( e, t ) => {
        const a = Object( i.b )( {
          iconGradientStart: t
        } );
        return `<canvas height="32" width="32" aria-hidden="true"></canvas>\n  <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" focusable="false" aria-hidden="true">\n    <defs>\n      <linearGradient id="${a}" x1="50%" x2="50%" y1="82.77%" y2="10.134%">\n        <stop offset="0%" stop-color="${t}" />\n        <stop offset="82%" stop-color="${e}" ${"inherit"===e?'stop-opacity="0.4"':""} />\n      </linearGradient>\n    </defs>\n    <g fill="none" fill-rule="evenodd">\n      <circle cx="16" cy="19.423" r="5.538" fill="url(#${a})" fill-rule="nonzero"/>\n      <path fill="currentColor" fill-rule="nonzero" d="M4.14318325,11.970217 L7.17443341,15.5164923 C7.40520779,15.7738906 7.80165918,15.8034375 8.06900618,15.5831636 C12.9601954,11.2622319 19.0323494,11.2622319 23.9235386,15.5831636 C24.1908857,15.8034375 24.5873371,15.7738906 24.8181114,15.5164923 L27.8525794,11.970217 C28.0663737,11.714892 28.04536,11.3403265 27.8043112,11.1098404 C20.6927794,4.96338652 11.2997654,4.96338652 4.20110522,11.1098404 C3.95712825,11.3377486 3.93190106,11.7124749 4.14318325,11.970217 Z"/>\n    </g>\n  </svg>`
      };
      class p extends n.Component {
        render() {
          return o.a.createElement( s.a, Object.assign( {}, this.props, {
            svg: r
          } ) )
        }
      }
      p.defaultProps = l.a
    },
    zrGf: function ( e, t, a ) {
      "use strict";
      var n = a( "l1C2" ),
        o = a( "J1k2" );
      t.a = e => {
        const {
          elemBefore: t = null,
          isRemovable: a = !0,
          text: i = "",
          color: l = "standard",
          href: s,
          isRounded: r,
          isLink: p,
          linkComponent: c = "a",
          linkHoverColor: d
        } = e;
        return p ? Object( n.f )( c, {
          href: s,
          "data-color": l,
          css: [ Object( o.f )( d ), r ? o.g : void 0, t ? o.e : void 0, a ? o.d : void 0 ]
        }, i ) : Object( n.f )( "span", {
          css: [ o.h, r ? o.g : void 0, t ? o.e : void 0, a ? o.d : void 0 ]
        }, i )
      }
    }
  }
] );
//# sourceMappingURL=80.6b7baPmPee.js.map
