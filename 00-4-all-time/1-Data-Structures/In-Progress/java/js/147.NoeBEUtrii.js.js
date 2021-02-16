( window.webpackJsonp = window.webpackJsonp || [] ).push( [
  [ 147 ], {
    "2G5l": function ( e, r, t ) {
      "use strict";
      t.d( r, "a", ( function () {
        return a
      } ) );
      var a = "___BUILD_VERSION___"
    },
    "2wjc": function ( e, r, t ) {
      "use strict";
      t.d( r, "a", ( function () {
        return i
      } ) );
      var a = t( "ERkP" ),
        n = t.n( a ),
        o = t( "H/VM" ),
        c = t( "kC3+" ),
        i = function () {
          var e = Object( o.a )().createAnalyticsEvent;
          return {
            fireAnalyticsEvent: n.a.useCallback( ( function ( r ) {
              return e( r ).fire( c.b )
            } ), [ e ] )
          }
        }
    },
    "3zvG": function ( e, r, t ) {
      "use strict";
      t.d( r, "a", ( function () {
        return h
      } ) );
      var a = t( "ERkP" ),
        n = t.n( a ),
        o = t( "sVJx" ),
        c = t( "kC3+" );

      function i( e ) {
        return ( i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function ( e ) {
          return typeof e
        } : function ( e ) {
          return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        } )( e )
      }

      function s( e, r ) {
        if ( !( e instanceof r ) ) throw new TypeError( "Cannot call a class as a function" )
      }

      function l( e, r ) {
        for ( var t = 0; t < r.length; t++ ) {
          var a = r[ t ];
          a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && ( a.writable = !0 ), Object.defineProperty( e, a.key, a )
        }
      }

      function d( e, r ) {
        return ( d = Object.setPrototypeOf || function ( e, r ) {
          return e.__proto__ = r, e
        } )( e, r )
      }

      function u( e ) {
        var r = function () {
          if ( "undefined" == typeof Reflect || !Reflect.construct ) return !1;
          if ( Reflect.construct.sham ) return !1;
          if ( "function" == typeof Proxy ) return !0;
          try {
            return Date.prototype.toString.call( Reflect.construct( Date, [], ( function () {} ) ) ), !0
          } catch ( e ) {
            return !1
          }
        }();
        return function () {
          var t, a = f( e );
          if ( r ) {
            var n = f( this ).constructor;
            t = Reflect.construct( a, arguments, n )
          } else t = a.apply( this, arguments );
          return _( this, t )
        }
      }

      function _( e, r ) {
        return !r || "object" !== i( r ) && "function" != typeof r ? function ( e ) {
          if ( void 0 === e ) throw new ReferenceError( "this hasn't been initialised - super() hasn't been called" );
          return e
        }( e ) : r
      }

      function f( e ) {
        return ( f = Object.setPrototypeOf ? Object.getPrototypeOf : function ( e ) {
          return e.__proto__ || Object.getPrototypeOf( e )
        } )( e )
      }
      var p = function ( e ) {
          ! function ( e, r ) {
            if ( "function" != typeof r && null !== r ) throw new TypeError( "Super expression must either be null or a function" );
            e.prototype = Object.create( r && r.prototype, {
              constructor: {
                value: e,
                writable: !0,
                configurable: !0
              }
            } ), r && d( e, r )
          }( o, e );
          var r, t, a, n = u( o );

          function o() {
            return s( this, o ), n.apply( this, arguments )
          }
          return r = o, ( t = [ {
            key: "componentDidUpdate",
            value: function ( e ) {
              var r = this.props,
                t = r.onDialogClosed,
                a = r.isExpanded;
              e.isExpanded && !a && t()
            }
          }, {
            key: "render",
            value: function () {
              return null
            }
          } ] ) && l( r.prototype, t ), a && l( r, a ), o
        }( n.a.Component ),
        h = Object( o.a )( {
          onDialogClosed: c.f
        } )( p )
    },
    "4yjS": function ( e, r, t ) {
      "use strict";
      t.d( r, "a", ( function () {
        return i
      } ) );
      var a = t( "KsTJ" ),
        n = t( "lSUb" );

      function o( e ) {
        return function ( e ) {
          if ( Array.isArray( e ) ) return c( e )
        }( e ) || function ( e ) {
          if ( "undefined" != typeof Symbol && Symbol.iterator in Object( e ) ) return Array.from( e )
        }( e ) || function ( e, r ) {
          if ( !e ) return;
          if ( "string" == typeof e ) return c( e, r );
          var t = Object.prototype.toString.call( e ).slice( 8, -1 );
          "Object" === t && e.constructor && ( t = e.constructor.name );
          if ( "Map" === t || "Set" === t ) return Array.from( e );
          if ( "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test( t ) ) return c( e, r )
        }( e ) || function () {
          throw new TypeError( "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method." )
        }()
      }

      function c( e, r ) {
        ( null == r || r > e.length ) && ( r = e.length );
        for ( var t = 0, a = new Array( r ); t < r; t++ ) a[ t ] = e[ t ];
        return a
      }
      var i = function ( e ) {
        for ( var r = arguments.length, t = new Array( r > 1 ? r - 1 : 0 ), c = 1; c < r; c++ ) t[ c - 1 ] = arguments[ c ];
        return Object( n.default )( ( function ( r ) {
          return r ? Object( a.default )( r ).apply( void 0, [ e ].concat( o( t ) ) ) : a.default.a.apply( a.default, [ e ].concat( t ) )
        } ) )
      }
    },
    "6EW1": function ( e, r, t ) {
      "use strict";
      var a = t( "TOeK" ),
        n = t.n( a ),
        o = t( "ERkP" ),
        c = t( "L21V" ),
        i = t( "7MY3" ),
        s = t( "fShB" ),
        l = t( "BmjO" ),
        d = t( "ViL1" ),
        u = t( "Wqlf" ),
        _ = t( "2wjc" ),
        f = t( "kC3+" ),
        p = t( "8PXy" ),
        h = t( "OnRS" ),
        g = t( "IAJa" ),
        b = t( "KsTJ" ),
        v = t( "l1C2" );

      function y( e, r ) {
        return function ( e ) {
          if ( Array.isArray( e ) ) return e
        }( e ) || function ( e, r ) {
          if ( "undefined" == typeof Symbol || !( Symbol.iterator in Object( e ) ) ) return;
          var t = [],
            a = !0,
            n = !1,
            o = void 0;
          try {
            for ( var c, i = e[ Symbol.iterator ](); !( a = ( c = i.next() ).done ) && ( t.push( c.value ), !r || t.length !== r ); a = !0 );
          } catch ( s ) {
            n = !0, o = s
          } finally {
            try {
              a || null == i.return || i.return()
            } finally {
              if ( n ) throw o
            }
          }
          return t
        }( e, r ) || function ( e, r ) {
          if ( !e ) return;
          if ( "string" == typeof e ) return j( e, r );
          var t = Object.prototype.toString.call( e ).slice( 8, -1 );
          "Object" === t && e.constructor && ( t = e.constructor.name );
          if ( "Map" === t || "Set" === t ) return Array.from( e );
          if ( "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test( t ) ) return j( e, r )
        }( e, r ) || function () {
          throw new TypeError( "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method." )
        }()
      }

      function j( e, r ) {
        ( null == r || r > e.length ) && ( r = e.length );
        for ( var t = 0, a = new Array( r ); t < r; t++ ) a[ t ] = e[ t ];
        return a
      }

      function m() {
        var e = function ( e, r ) {
          r || ( r = e.slice( 0 ) );
          return Object.freeze( Object.defineProperties( e, {
            raw: {
              value: Object.freeze( r )
            }
          } ) )
        }( [ "\n  display: flex;\n  height: 100%;\n" ] );
        return m = function () {
          return e
        }, e
      }
      var O = function ( e, r ) {
          var t, a;
          "Enter" !== e.key || e.shiftKey || ( e.preventDefault(), null === ( t = r.firstElementChild ) || void 0 === t || null === ( a = t.click ) || void 0 === a || a.call( t ) )
        },
        w = b.default.div( m() );
      r.a = Object( c.g )( ( function ( e ) {
        var r = e.query,
          t = e.linkComponent,
          a = e.isLoading,
          b = e.intl,
          j = Object( _.a )().fireAnalyticsEvent,
          m = Object( g.a )()( r ),
          k = Object( o.useCallback )( ( function ( e ) {
            j( Object( f.e )( {
              trigger: Object( p.a )( e ),
              actionSubjectId: f.a.CONFLUENCE,
              isLoading: a,
              newTab: Object( p.c )( e )
            } ) )
          } ), [ j, a ] ),
          S = y( Object( d.b )( {
            onKeydownCallback: O
          } ), 2 ),
          P = S[ 0 ],
          x = S[ 1 ],
          C = Object( l.e )().length > 1 ? h.a.confluence_advanced_search_with_product_prefix : h.a.confluence_advanced_search;
        return Object( v.f )( "span", {
          ref: x,
          onClick: k,
          role: "none",
          style: {
            display: "flex",
            height: "100%"
          }
        }, Object( v.f )( i.a, {
          href: m,
          isKeyboardHighlighted: P,
          linkComponent: t
        }, Object( v.f )( w, null, Object( v.f )( s.b, null, Object( v.f )( n.a, {
          size: "small",
          label: b.formatMessage( C )
        } ), Object( v.f )( s.a, null, Object( v.f )( c.b, C ) ) ) ), Object( v.f )( u.a, {
          inverted: P
        } ) ) )
      } ) )
    },
    "6qVS": function ( e, r, t ) {
      "use strict";
      Object.defineProperty( r, "__esModule", {
        value: !0
      } ), r.default = void 0;
      var a = o( t( "ERkP" ) ),
        n = o( t( "4KTy" ) );

      function o( e ) {
        return e && e.__esModule ? e : {
          default: e
        }
      }

      function c() {
        return ( c = Object.assign || function ( e ) {
          for ( var r = 1; r < arguments.length; r++ ) {
            var t = arguments[ r ];
            for ( var a in t ) Object.prototype.hasOwnProperty.call( t, a ) && ( e[ a ] = t[ a ] )
          }
          return e
        } ).apply( this, arguments )
      }
      var i = function ( e ) {
        return a.default.createElement( n.default, c( {
          dangerouslySetGlyph: '<svg width="24" height="24" viewBox="0 0 24 24" focusable="false" role="presentation"><g fill-rule="evenodd"><path d="M2 12c0 5.523 4.477 10 10 10s10-4.477 10-10S17.523 2 12 2 2 6.477 2 12z" fill="currentColor"/><rect fill="inherit" x="11" y="10" width="2" height="7" rx="1"/><circle fill="inherit" cx="12" cy="8" r="1"/></g></svg>'
        }, e ) )
      };
      i.displayName = "InfoIcon";
      var s = i;
      r.default = s
    },
    "7MY3": function ( e, r, t ) {
      "use strict";
      t.d( r, "a", ( function () {
        return i
      } ) );
      t( "ERkP" );
      var a = t( "fShB" ),
        n = t( "l1C2" );

      function o() {
        return ( o = Object.assign || function ( e ) {
          for ( var r = 1; r < arguments.length; r++ ) {
            var t = arguments[ r ];
            for ( var a in t ) Object.prototype.hasOwnProperty.call( t, a ) && ( e[ a ] = t[ a ] )
          }
          return e
        } ).apply( this, arguments )
      }

      function c( e, r ) {
        if ( null == e ) return {};
        var t, a, n = function ( e, r ) {
          if ( null == e ) return {};
          var t, a, n = {},
            o = Object.keys( e );
          for ( a = 0; a < o.length; a++ ) t = o[ a ], r.indexOf( t ) >= 0 || ( n[ t ] = e[ t ] );
          return n
        }( e, r );
        if ( Object.getOwnPropertySymbols ) {
          var o = Object.getOwnPropertySymbols( e );
          for ( a = 0; a < o.length; a++ ) t = o[ a ], r.indexOf( t ) >= 0 || Object.prototype.propertyIsEnumerable.call( e, t ) && ( n[ t ] = e[ t ] )
        }
        return n
      }
      var i = function ( e ) {
        var r = e.href,
          t = e.linkComponent,
          i = c( e, [ "href", "linkComponent" ] ),
          s = Object( a.c )( t );
        return Object( n.f )( s, o( {
          "data-test-id": "search-dialog-advanced-search-link",
          href: r
        }, i ) )
      }
    },
    "8PXy": function ( e, r, t ) {
      "use strict";
      t.d( r, "d", ( function () {
        return o
      } ) ), t.d( r, "a", ( function () {
        return c
      } ) ), t.d( r, "c", ( function () {
        return i
      } ) ), t.d( r, "b", ( function () {
        return s
      } ) );
      var a = t( "VsfX" ),
        n = t( "kC3+" ),
        o = function ( e ) {
          return Object( a.createHash )().update( e ).digest( "hex" )
        },
        c = function ( e ) {
          return 0 === e.screenX ? n.d.RETURN : n.d.CLICK
        },
        i = function ( e ) {
          return !( !e || !( e.metaKey || e.ctrlKey || e.shiftKey ) )
        },
        s = function ( e ) {
          return e.length > 0 ? e.split( /\s+/ ).length : 0
        }
    },
    F9AR: function ( e, r, t ) {
      "use strict";
      t.d( r, "f", ( function () {
        return p
      } ) ), t.d( r, "e", ( function () {
        return h
      } ) ), t.d( r, "d", ( function () {
        return g
      } ) ), t.d( r, "a", ( function () {
        return b
      } ) ), t.d( r, "c", ( function () {
        return v
      } ) ), t.d( r, "b", ( function () {
        return y
      } ) );
      var a = t( "KsTJ" ),
        n = t( "3IV/" ),
        o = t( "w301" ),
        c = t( "BMbf" ),
        i = t( "ZgvQ" );

      function s( e ) {
        const r = {
          light: n.B400,
          dark: n.B100
        };
        return Object( o.a )( "status", {
          normal: e,
          selected: r
        } )
      }
      const l = s( {
          light: n.N500,
          dark: n.DN400
        } ),
        d = s( {
          light: n.B500,
          dark: n.B200
        } ),
        u = s( {
          light: n.B100,
          dark: n.B100
        } ),
        _ = s( {
          light: n.B400,
          dark: n.B75
        } ),
        f = s( {
          light: n.N30,
          dark: n.DN0
        } ),
        p = a.default.div `
  display: flex;
  flex-basis: 100%;
  flex-direction: column;
  flex-grow: 1;
  max-width: 100%;
  min-height: 0%; /* See min-height note */
`,
        h = a.default.div `
  flex-grow: 1;
  min-height: 0%; /* See min-height note */
  padding-left: ${c.h}px;
  padding-right: ${c.h}px;
  ${({isSelected:e})=>e?"display:flex":"display:none"};
`,
        g = a.default.div `
  position: relative;
`,
        b = a.default.div `
  display: flex;
  font-weight: 500;
  list-style-type: none;
  margin: 0;
  padding: 0;
`,
        v = a.default.span `
  background-color: ${f};
  border-radius: ${"2px"};
  bottom: 0;
  content: '';
  height: ${"2px"};
  left: ${c.h}px;
  margin: 0;
  position: absolute;
  right: ${c.h}px;
  width: inherit;
`,
        y = a.default.div `
  color: ${l};
  cursor: pointer;
  line-height: 1.8;
  margin: 0;
  padding: ${Object(i.divide)(c.h,2)}px ${c.h}px;
  position: relative;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  &:hover {
    color: ${_};
  }
  &:active,
  &:active::before {
    color: ${d};
  }

  &:focus {
    border-radius: ${c.c}px;
    box-shadow: 0 0 0 2px ${u} inset;
    outline: none;
  }
`
    },
    Hh67: function ( e, r, t ) {
      "use strict";
      t.d( r, "a", ( function () {
        return i
      } ) ), t.d( r, "b", ( function () {
        return s
      } ) );
      var a = t( "ERkP" ),
        n = t.n( a ),
        o = t( "l1C2" ),
        c = n.a.createContext( {
          id: void 0,
          name: void 0,
          email: void 0,
          avatarUrl: void 0,
          hasSoftwareAccess: void 0
        } ),
        i = function ( e ) {
          var r = e.id,
            t = e.name,
            a = e.email,
            n = e.children,
            i = e.avatarUrl,
            s = e.hasSoftwareAccess;
          return Object( o.f )( c.Provider, {
            value: {
              id: r,
              name: t,
              email: a,
              avatarUrl: i,
              hasSoftwareAccess: s
            }
          }, n )
        };

      function s() {
        return Object( a.useContext )( c )
      }
    },
    Hjnd: function ( e, r, t ) {
      "use strict";
      t.d( r, "c", ( function () {
        return h
      } ) ), t.d( r, "a", ( function () {
        return g
      } ) ), t.d( r, "b", ( function () {
        return b
      } ) );
      var a = t( "ERkP" ),
        n = t.n( a ),
        o = t( "tbcT" ),
        c = t( "5kY4" ),
        i = t( "l1C2" );

      function s( e ) {
        return function ( e ) {
          if ( Array.isArray( e ) ) return l( e )
        }( e ) || function ( e ) {
          if ( "undefined" != typeof Symbol && Symbol.iterator in Object( e ) ) return Array.from( e )
        }( e ) || function ( e, r ) {
          if ( !e ) return;
          if ( "string" == typeof e ) return l( e, r );
          var t = Object.prototype.toString.call( e ).slice( 8, -1 );
          "Object" === t && e.constructor && ( t = e.constructor.name );
          if ( "Map" === t || "Set" === t ) return Array.from( e );
          if ( "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test( t ) ) return l( e, r )
        }( e ) || function () {
          throw new TypeError( "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method." )
        }()
      }

      function l( e, r ) {
        ( null == r || r > e.length ) && ( r = e.length );
        for ( var t = 0, a = new Array( r ); t < r; t++ ) a[ t ] = e[ t ];
        return a
      }

      function d( e, r ) {
        var t = Object.keys( e );
        if ( Object.getOwnPropertySymbols ) {
          var a = Object.getOwnPropertySymbols( e );
          r && ( a = a.filter( ( function ( r ) {
            return Object.getOwnPropertyDescriptor( e, r ).enumerable
          } ) ) ), t.push.apply( t, a )
        }
        return t
      }

      function u( e ) {
        for ( var r = 1; r < arguments.length; r++ ) {
          var t = null != arguments[ r ] ? arguments[ r ] : {};
          r % 2 ? d( Object( t ), !0 ).forEach( ( function ( r ) {
            _( e, r, t[ r ] )
          } ) ) : Object.getOwnPropertyDescriptors ? Object.defineProperties( e, Object.getOwnPropertyDescriptors( t ) ) : d( Object( t ) ).forEach( ( function ( r ) {
            Object.defineProperty( e, r, Object.getOwnPropertyDescriptor( t, r ) )
          } ) )
        }
        return e
      }

      function _( e, r, t ) {
        return r in e ? Object.defineProperty( e, r, {
          value: t,
          enumerable: !0,
          configurable: !0,
          writable: !0
        } ) : e[ r ] = t, e
      }
      var f = Object.freeze( {
          hasSoftwareAccess: !1,
          hasAdvancedRoadmapsAccess: !1,
          isPlansOn: !1
        } ),
        p = n.a.createContext( f ),
        h = function ( e ) {
          return function ( r ) {
            return Object( i.f )( p.Consumer, null, ( function ( t ) {
              var a = u( u( {}, r ), {}, {
                features: t
              } );
              return Object( i.f )( e, a )
            } ) )
          }
        },
        g = function ( e ) {
          var r = e.features,
            t = e.children,
            a = Object( o.b )(),
            l = Object( c.b )( !0 ).hasSoftwareAccess,
            d = u( u( u( {}, f ), r ), {}, {
              hasSoftwareAccess: ( null == r ? void 0 : r.hasSoftwareAccess ) || l || !1,
              isPlansOn: ( "plans-experiment" === a.experimentId || !!( null == r ? void 0 : r.isPlansOn ) ) && ( null == r ? void 0 : r.hasAdvancedRoadmapsAccess )
            } ),
            _ = n.a.useMemo( ( function () {
              return d
            } ), s( Object.values( d ) ) );
          return Object( i.f )( p.Provider, {
            value: _
          }, t )
        },
        b = function () {
          return Object( a.useContext )( p )
        }
    },
    Hkmd: function ( e, r, t ) {
      "use strict";
      t.d( r, "b", ( function () {
        return a
      } ) ), t.d( r, "a", ( function () {
        return y
      } ) ), t.d( r, "c", ( function () {
        return j
      } ) );
      var a, n = t( "ERkP" ),
        o = t.n( n ),
        c = t( "zB3U" ),
        i = t( "O4tY" ),
        s = t( "l1C2" );

      function l( e, r ) {
        var t = Object.keys( e );
        if ( Object.getOwnPropertySymbols ) {
          var a = Object.getOwnPropertySymbols( e );
          r && ( a = a.filter( ( function ( r ) {
            return Object.getOwnPropertyDescriptor( e, r ).enumerable
          } ) ) ), t.push.apply( t, a )
        }
        return t
      }

      function d( e ) {
        for ( var r = 1; r < arguments.length; r++ ) {
          var t = null != arguments[ r ] ? arguments[ r ] : {};
          r % 2 ? l( Object( t ), !0 ).forEach( ( function ( r ) {
            u( e, r, t[ r ] )
          } ) ) : Object.getOwnPropertyDescriptors ? Object.defineProperties( e, Object.getOwnPropertyDescriptors( t ) ) : l( Object( t ) ).forEach( ( function ( r ) {
            Object.defineProperty( e, r, Object.getOwnPropertyDescriptor( t, r ) )
          } ) )
        }
        return e
      }

      function u( e, r, t ) {
        return r in e ? Object.defineProperty( e, r, {
          value: t,
          enumerable: !0,
          configurable: !0,
          writable: !0
        } ) : e[ r ] = t, e
      }

      function _( e ) {
        return function ( e ) {
          if ( Array.isArray( e ) ) return h( e )
        }( e ) || function ( e ) {
          if ( "undefined" != typeof Symbol && Symbol.iterator in Object( e ) ) return Array.from( e )
        }( e ) || p( e ) || function () {
          throw new TypeError( "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method." )
        }()
      }

      function f( e, r ) {
        return function ( e ) {
          if ( Array.isArray( e ) ) return e
        }( e ) || function ( e, r ) {
          if ( "undefined" == typeof Symbol || !( Symbol.iterator in Object( e ) ) ) return;
          var t = [],
            a = !0,
            n = !1,
            o = void 0;
          try {
            for ( var c, i = e[ Symbol.iterator ](); !( a = ( c = i.next() ).done ) && ( t.push( c.value ), !r || t.length !== r ); a = !0 );
          } catch ( s ) {
            n = !0, o = s
          } finally {
            try {
              a || null == i.return || i.return()
            } finally {
              if ( n ) throw o
            }
          }
          return t
        }( e, r ) || p( e, r ) || function () {
          throw new TypeError( "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method." )
        }()
      }

      function p( e, r ) {
        if ( e ) {
          if ( "string" == typeof e ) return h( e, r );
          var t = Object.prototype.toString.call( e ).slice( 8, -1 );
          return "Object" === t && e.constructor && ( t = e.constructor.name ), "Map" === t || "Set" === t ? Array.from( e ) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test( t ) ? h( e, r ) : void 0
        }
      }

      function h( e, r ) {
        ( null == r || r > e.length ) && ( r = e.length );
        for ( var t = 0, a = new Array( r ); t < r; t++ ) a[ t ] = e[ t ];
        return a
      }! function ( e ) {
        e.COLLABORATION_GRAPH = "COLLABORATION_GRAPH", e.RECENT = "RECENT", e.SEARCH = "SEARCH", e.CURRENT_USER = "CURRENT_USER"
      }( a || ( a = {} ) );
      var g = function () {
          var e = arguments.length > 0 && void 0 !== arguments[ 0 ] ? arguments[ 0 ] : [],
            r = Object( n.useState )( e ),
            t = f( r, 2 ),
            a = t[ 0 ],
            o = t[ 1 ],
            c = Object( n.useCallback )( ( function ( e ) {
              0 !== e.length && ( e.forEach( ( function ( e ) {
                var r = a.findIndex( ( function ( r ) {
                  return r.id === e.id
                } ) ); - 1 !== r ? a[ r ] = e : a.push( e )
              } ) ), o( _( a ) ) )
            } ), [ o, a ] ),
            i = Object( n.useCallback )( ( function ( e, r ) {
              var t = a.find( ( function ( r ) {
                return r.id === e
              } ) );
              t && c( [ d( d( {}, t ), {}, {
                isChecked: r
              } ) ] )
            } ), [ a, c ] ),
            s = Object( n.useCallback )( ( function () {
              o( a.map( ( function ( e ) {
                return d( d( {}, e ), {}, {
                  isChecked: !1
                } )
              } ) ) )
            } ), [ a, o ] ),
            l = Object( n.useCallback )( ( function () {
              o( e )
            } ), [ o, e ] );
          return {
            availableFilters: a,
            addFilters: c,
            updateFilter: i,
            clearFilter: s,
            reset: l
          }
        },
        b = Object( n.createContext )( {
          spaceFilters: {
            availableFilters: [],
            addFilters: function () {},
            updateFilter: function () {},
            clearFilter: function () {},
            reset: function () {}
          },
          peopleFilters: {
            availableFilters: [],
            addFilters: function () {},
            updateFilter: function () {},
            clearFilter: function () {},
            reset: function () {}
          }
        } );

      function v( e ) {
        return {
          applied: e.map( ( function ( e, r ) {
            return d( d( {}, e ), {}, {
              index: r
            } )
          } ) ).filter( ( function ( e ) {
            return e.isChecked
          } ) ).map( ( function ( e ) {
            return {
              id: e.id,
              source: e.filterSource,
              index: e.index
            }
          } ) ),
          recommendedIds: e.map( ( function ( e ) {
            return {
              id: e.id,
              source: e.filterSource
            }
          } ) )
        }
      }
      var y = function ( e ) {
          var r = e.isEnabled,
            t = void 0 === r || r,
            a = e.defaultSpaceFilters,
            n = e.defaultPeopleFilters,
            l = e.children,
            d = o.a.useRef( t ),
            u = g( a ),
            _ = g( n ),
            f = Object( c.c )(),
            p = 0 === u.availableFilters.length && 0 === _.availableFilters.length ? {} : {
              container: v( u.availableFilters ),
              contributor: v( _.availableFilters )
            };
          return d.current && !t && ( u.reset(), _.reset() ), d.current = t, Object( s.f )( b.Provider, {
            value: {
              spaceFilters: u,
              peopleFilters: _
            }
          }, Object( s.f )( i.a, {
            analyticContext: {
              searchSessionId: f
            },
            nonPrivacySafeAnalyticContext: {},
            filterAnalyticsContext: p
          }, l ) )
        },
        j = function () {
          return o.a.useContext( b )
        }
    },
    HpHT: function ( e, r, t ) {
      "use strict";
      t.d( r, "a", ( function () {
        return o
      } ) );
      var a = t( "Iy7w" ),
        n = t( "L48P" ),
        o = Object( a.a )( "div", {
          target: "e1jzvw2y0",
          label: "SearchFooter"
        } )( "width:100%;border-top:1px solid ", n.N40A, ";" )
    },
    IAJa: function ( e, r, t ) {
      "use strict";
      t.d( r, "a", ( function () {
        return o
      } ) );
      var a = t( "ERkP" ),
        n = t( "Hkmd" ),
        o = function () {
          var e = Object( n.c )(),
            r = e.spaceFilters.availableFilters,
            t = e.peopleFilters.availableFilters;
          return Object( a.useCallback )( ( function ( e ) {
            return function ( e, r, t ) {
              var a = e.trim();
              if ( !a ) return "/wiki/search";
              var n = r.length > 0 ? "&spaces=".concat( encodeURIComponent( r.join( "," ) ) ) : "",
                o = t.length > 0 ? "&contributors=".concat( encodeURIComponent( t.join( "," ) ) ) : "";
              return "".concat( "/wiki/search", "?text=" ).concat( encodeURIComponent( a ) ).concat( n ).concat( o )
            }( e, r.filter( ( function ( e ) {
              return e.isChecked
            } ) ).map( ( function ( e ) {
              return e.id
            } ) ), t.filter( ( function ( e ) {
              return e.isChecked
            } ) ).map( ( function ( e ) {
              return e.id
            } ) ) )
          } ), [ r, t ] )
        }
    },
    KjIc: function ( e, r, t ) {
      "use strict";
      var a = t( "ERkP" ),
        n = t.n( a ),
        o = t( "L21V" ),
        c = t( "OnRS" ),
        i = t( "KsTJ" ),
        s = t( "4yjS" ),
        l = t( "HIRw" ),
        d = t( "L48P" );

      function u() {
        var e = p( [ "\n  margin-right: ", "px;\n" ] );
        return u = function () {
          return e
        }, e
      }

      function _() {
        var e = p( [ "\n  margin-right: ", "px;\n  color: ", ";\n\n  &:hover {\n    color: ", ";\n  }\n\n  :visited {\n    color: ", ";\n  }\n" ] );
        return _ = function () {
          return e
        }, e
      }

      function f() {
        var e = p( [ "\n  padding: ", "px ", "px;\n" ] );
        return f = function () {
          return e
        }, e
      }

      function p( e, r ) {
        return r || ( r = e.slice( 0 ) ), Object.freeze( Object.defineProperties( e, {
          raw: {
            value: Object.freeze( r )
          }
        } ) )
      }
      var h = i.default.div( f(), 1.5 * Object( l.g )(), 2 * Object( l.g )() ),
        g = i.default.span( _(), Object( l.g )(), d.N900, d.N900, d.N900 ),
        b = Object( s.a )( u(), .5 * Object( l.g )() ),
        v = t( "Hjnd" ),
        y = t( "osBk" ),
        j = t( "l1C2" ),
        m = b( y.a ),
        O = function ( e ) {
          var r = e.href,
            t = e.onClick,
            a = e.children,
            n = e.dataTestId;
          return Object( j.f )( m, {
            "data-test-id": n,
            spacing: "compact",
            href: r,
            onClick: function ( e ) {
              e.preventDefault(), t( r, e )
            }
          }, a )
        },
        w = t( "kC3+" ),
        k = t( "8PXy" ),
        S = t( "sVJx" ),
        P = t( "a9u0" );

      function x( e ) {
        return ( x = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function ( e ) {
          return typeof e
        } : function ( e ) {
          return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        } )( e )
      }

      function C() {
        return ( C = Object.assign || function ( e ) {
          for ( var r = 1; r < arguments.length; r++ ) {
            var t = arguments[ r ];
            for ( var a in t ) Object.prototype.hasOwnProperty.call( t, a ) && ( e[ a ] = t[ a ] )
          }
          return e
        } ).apply( this, arguments )
      }

      function E( e, r ) {
        if ( !( e instanceof r ) ) throw new TypeError( "Cannot call a class as a function" )
      }

      function R( e, r ) {
        for ( var t = 0; t < r.length; t++ ) {
          var a = r[ t ];
          a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && ( a.writable = !0 ), Object.defineProperty( e, a.key, a )
        }
      }

      function A( e, r ) {
        return ( A = Object.setPrototypeOf || function ( e, r ) {
          return e.__proto__ = r, e
        } )( e, r )
      }

      function I( e ) {
        var r = function () {
          if ( "undefined" == typeof Reflect || !Reflect.construct ) return !1;
          if ( Reflect.construct.sham ) return !1;
          if ( "function" == typeof Proxy ) return !0;
          try {
            return Date.prototype.toString.call( Reflect.construct( Date, [], ( function () {} ) ) ), !0
          } catch ( e ) {
            return !1
          }
        }();
        return function () {
          var t, a = F( e );
          if ( r ) {
            var n = F( this ).constructor;
            t = Reflect.construct( a, arguments, n )
          } else t = a.apply( this, arguments );
          return z( this, t )
        }
      }

      function z( e, r ) {
        return !r || "object" !== x( r ) && "function" != typeof r ? T( e ) : r
      }

      function T( e ) {
        if ( void 0 === e ) throw new ReferenceError( "this hasn't been initialised - super() hasn't been called" );
        return e
      }

      function F( e ) {
        return ( F = Object.setPrototypeOf ? Object.getPrototypeOf : function ( e ) {
          return e.__proto__ || Object.getPrototypeOf( e )
        } )( e )
      }

      function N( e, r, t ) {
        return r in e ? Object.defineProperty( e, r, {
          value: t,
          enumerable: !0,
          configurable: !0,
          writable: !0
        } ) : e[ r ] = t, e
      }
      t.d( r, "b", ( function () {
        return D
      } ) ), t.d( r, "c", ( function () {
        return M
      } ) );
      var D = function ( e ) {
          var r = e.query,
            t = void 0 === r ? "" : r,
            a = e.jql,
            n = void 0 === a ? "" : a;
          return "" === n ? "/secure/QuickSearch.jspa?searchString=".concat( encodeURIComponent( t ) ) : "/issues/?jql=".concat( n )
        },
        M = function () {
          var e = Object( P.c )(),
            r = e.projectFilters.availableFilters,
            t = e.assigneeFilters.availableFilters;
          return Object( a.useCallback )( ( function ( e ) {
            var a = r.filter( ( function ( e ) {
                return e.isChecked
              } ) ).map( ( function ( e ) {
                return e.id
              } ) ),
              n = t.filter( ( function ( e ) {
                return e.isChecked
              } ) ).map( ( function ( e ) {
                return e.id
              } ) );
            return a.length > 0 || n.length > 0 ? function ( e, r, t ) {
              var a = e.trim();
              if ( !a ) return "";
              var n = r.length > 0 ? " AND project IN (".concat( encodeURIComponent( r.join( "," ) ), ")" ) : "",
                o = t.length > 0 ? " AND assignee IN (".concat( encodeURIComponent( t.join( "," ) ), ")" ) : "";
              return 'text ~ "'.concat( encodeURIComponent( a ), '"' ).concat( n ).concat( o )
            }( e, a, n ) : ""
          } ), [ r, t ] )
        },
        J = function ( e ) {
          ! function ( e, r ) {
            if ( "function" != typeof r && null !== r ) throw new TypeError( "Super expression must either be null or a function" );
            e.prototype = Object.create( r && r.prototype, {
              constructor: {
                value: e,
                writable: !0,
                configurable: !0
              }
            } ), r && A( e, r )
          }( i, e );
          var r, t, a, n = I( i );

          function i() {
            var e;
            E( this, i );
            for ( var r = arguments.length, t = new Array( r ), a = 0; a < r; a++ ) t[ a ] = arguments[ a ];
            return N( T( e = n.call.apply( n, [ this ].concat( t ) ) ), "onClick", ( function ( r, t, a ) {
              var n = e.props,
                o = n.onClick,
                c = n.isLoading;
              ( 0, n.advancedSearchSelected )( {
                actionSubjectId: t,
                trigger: Object( k.a )( r ),
                isLoading: c,
                newTab: Object( k.c )( r )
              } ), o( a, r )
            } ) ), e
          }
          return r = i, ( t = [ {
            key: "render",
            value: function () {
              var e = this,
                r = this.props,
                t = function ( e, r ) {
                  var t = arguments.length > 2 && void 0 !== arguments[ 2 ] ? arguments[ 2 ] : "",
                    a = encodeURIComponent( e ),
                    n = {
                      issues: {
                        href: D( {
                          query: e,
                          jql: t
                        } ),
                        message: c.a.jira_advanced_search_issues,
                        actionSubjectId: w.a.JIRA_ISSUES,
                        dataTestId: "search-dialog-jira-advanced-search-issues"
                      },
                      board: {
                        href: "/secure/ManageRapidViews.jspa?contains=".concat( a ),
                        message: c.a.jira_advanced_search_boards,
                        actionSubjectId: w.a.JIRA_BOARDS,
                        dataTestId: "search-dialog-jira-advanced-search-boards"
                      },
                      project: {
                        href: "/projects?contains=".concat( a ),
                        message: c.a.jira_advanced_search_projects,
                        actionSubjectId: w.a.JIRA_PROJECTS,
                        dataTestId: "search-dialog-jira-advanced-search-projects"
                      },
                      filters: {
                        href: "/secure/ManageFilters.jspa?Search=Search&filterView=search&name=".concat( a ),
                        message: c.a.jira_advanced_search_filters,
                        actionSubjectId: w.a.JIRA_FILTERS,
                        dataTestId: "search-dialog-jira-advanced-search-filters"
                      },
                      plans: {
                        href: "/secure/PortfolioPlanManage.jspa",
                        message: c.a.jira_advanced_search_plans,
                        actionSubjectId: w.a.JIRA_PLANS,
                        dataTestId: "search-dialog-jira-advanced-search-plans"
                      },
                      people: {
                        href: "/jira/people/search?q=".concat( a ),
                        message: c.a.jira_advanced_search_people,
                        actionSubjectId: w.a.JIRA_PEOPLE,
                        dataTestId: "search-dialog-jira-advanced-search-people"
                      }
                    };
                  return r.hasSoftwareAccess || delete n.board, r.isPlansOn || delete n.plans, n
                }( r.query, r.features, r.jql );
              return Object( j.f )( h, null, Object( j.f )( g, null, Object( j.f )( o.b, c.a.jira_advanced_search_label ) ), Object.keys( t ).map( ( function ( r ) {
                var a = t[ r ],
                  n = a.href,
                  c = a.message,
                  i = a.actionSubjectId,
                  s = a.dataTestId;
                return Object( j.f )( O, {
                  dataTestId: s,
                  key: r,
                  href: n,
                  onClick: function ( r, t ) {
                    return e.onClick( t, i, r )
                  }
                }, Object( j.f )( o.b, c ) )
              } ) ) )
            }
          } ] ) && R( r.prototype, t ), a && R( r, a ), i
        }( n.a.Component ),
        L = Object( o.g )( J ),
        V = Object( S.a )( {
          advancedSearchSelected: w.e
        } )( Object( v.c )( ( function ( e ) {
          var r = e.query,
            t = M()( r );
          return Object( j.f )( L, C( {}, e, {
            jql: t
          } ) )
        } ) ) );
      r.a = Object( o.g )( V )
    },
    O4tY: function ( e, r, t ) {
      "use strict";
      t.d( r, "a", ( function () {
        return l
      } ) );
      t( "ERkP" );
      var a = t( "kC3+" ),
        n = t( "tfj5" ),
        o = t( "l1C2" );

      function c( e, r ) {
        var t = Object.keys( e );
        if ( Object.getOwnPropertySymbols ) {
          var a = Object.getOwnPropertySymbols( e );
          r && ( a = a.filter( ( function ( r ) {
            return Object.getOwnPropertyDescriptor( e, r ).enumerable
          } ) ) ), t.push.apply( t, a )
        }
        return t
      }

      function i( e ) {
        for ( var r = 1; r < arguments.length; r++ ) {
          var t = null != arguments[ r ] ? arguments[ r ] : {};
          r % 2 ? c( Object( t ), !0 ).forEach( ( function ( r ) {
            s( e, r, t[ r ] )
          } ) ) : Object.getOwnPropertyDescriptors ? Object.defineProperties( e, Object.getOwnPropertyDescriptors( t ) ) : c( Object( t ) ).forEach( ( function ( r ) {
            Object.defineProperty( e, r, Object.getOwnPropertyDescriptor( t, r ) )
          } ) )
        }
        return e
      }

      function s( e, r, t ) {
        return r in e ? Object.defineProperty( e, r, {
          value: t,
          enumerable: !0,
          configurable: !0,
          writable: !0
        } ) : e[ r ] = t, e
      }
      var l = function ( e ) {
        var r = e.analyticContext,
          t = e.nonPrivacySafeAnalyticContext,
          c = void 0 === t ? {} : t,
          s = e.filterAnalyticsContext,
          l = void 0 === s ? {} : s,
          d = e.nonPrivacySafeAnalyticContextGenerator,
          u = e.children;
        return Object( o.f )( n.a, {
          channel: a.b,
          onEvent: function ( e ) {
            var t = "function" == typeof r ? r() : r,
              a = void 0 !== d ? d() : c;
            e.update( ( function ( e ) {
              var r, n = i( i( {}, null === ( r = e.attributes ) || void 0 === r ? void 0 : r.filters ), l );
              return i( i( {}, e ), {}, {
                attributes: i( i( i( {}, e.attributes ), t ), {}, {
                  filters: Object.keys( n ).length > 0 ? n : void 0
                } ),
                nonPrivacySafeAttributes: i( i( {}, null == e ? void 0 : e.nonPrivacySafeAttributes ), a )
              } )
            } ) )
          }
        }, u )
      }
    },
    OnRS: function ( e, r, t ) {
      "use strict";
      t.d( r, "a", ( function () {
        return n
      } ) );
      var a = t( "L21V" ),
        n = Object( a.f )( {
          common_recently_viewed_section_heading: {
            id: "product_search_dialog.recently_viewed_section_heading",
            defaultMessage: "Recently viewed",
            description: ""
          },
          common_recently_spaces_section_heading: {
            id: "product_search_dialog.recent_spaces_section_heading",
            defaultMessage: "Recent spaces",
            description: ""
          },
          common_recently_worked_with_section_heading: {
            id: "product_search_dialog.recently_worked_with_section_heading",
            defaultMessage: "Recently worked with",
            description: ""
          },
          common_error_state_failed_search_heading: {
            id: "product_search_dialog.error.failed_search_heading",
            defaultMessage: "We're having trouble searching",
            description: ""
          },
          common_error_state_failed_search_body: {
            id: "product_search_dialog.error.failed_search_body",
            defaultMessage: "It might just be a hiccup. The best thing to do is to <a>try again.</a>",
            description: ""
          },
          common_empty_state_heading: {
            id: "product_search_dialog.empty.no_results_heading",
            defaultMessage: "We couldn't find anything matching your search.",
            description: ""
          },
          common_empty_state_prequery_heading: {
            id: "product_search_dialog.empty_prequery.no_results_heading",
            defaultMessage: "Search for what you need",
            description: ""
          },
          common_show_more_results_link: {
            id: "product_search_dialog.show_more_results_link",
            defaultMessage: "Show more",
            description: ""
          },
          common_show_all_results_link: {
            id: "product_search_dialog.show_all_results_link",
            defaultMessage: "View all results",
            description: ""
          },
          common_search_people_link: {
            id: "product_search_dialog.search_people_link",
            defaultMessage: "Search people",
            description: ""
          },
          common_search_input_collapsed_placeholder: {
            id: "product_search_dialog.search_input_collapsed_placeholder",
            defaultMessage: "Search",
            description: ""
          },
          common_empty_state_body: {
            id: "product_search_dialog.empty.no_results_body",
            defaultMessage: "Try again with a different term, or refine your results with <a>Advanced Search</a>",
            description: ""
          },
          common_give_feedback: {
            id: "product_search_dialog.give_feedback",
            defaultMessage: "Give feedback",
            description: "Button that looks like a link that the user clicks to open a dialog to give feedback about search"
          },
          common_inline_onboarding_title: {
            id: "product_search_dialog.inline_onboarding_title",
            defaultMessage: "Search across Jira and Confluence",
            description: "Heading of the inline section message which educates first time users about cross product search tabs"
          },
          common_inline_onboarding_body: {
            id: "product_search_dialog.inline_onboarding_body",
            defaultMessage: "Use the Jira and Confluence tabs to search and see recent items in either location.",
            description: "Description of the inline section message which educates first time users about cross product search tabs"
          },
          common_inline_onboarding_action: {
            id: "product_search_dialog.inline_onboarding_action",
            defaultMessage: "Ok",
            description: "A button that looks like a link which suspends the section message."
          },
          confluence_search_input_expanded_placeholder: {
            id: "product_search_dialog.confluence.search_input_expanded_placeholder",
            defaultMessage: "Search Confluence",
            description: ""
          },
          confluence_pages_blogs_attachments_section_heading: {
            id: "product_search_dialog.confluence.pages_blogs_attachments_section_heading",
            defaultMessage: "Pages, blogs and attachments",
            description: ""
          },
          confluence_spaces_section_heading: {
            id: "product_search_dialog.confluence.spaces_section_heading",
            defaultMessage: "Spaces",
            description: ""
          },
          confluence_people_section_heading: {
            id: "product_search_dialog.confluence.people_section_heading",
            defaultMessage: "People",
            description: ""
          },
          confluence_advanced_search: {
            id: "product_search_dialog.recently_viewed_heading",
            defaultMessage: "Advanced search",
            description: "advanced search link text when there is only Confluence search available"
          },
          confluence_advanced_search_with_product_prefix: {
            id: "product_search_dialog.confluence.advanced_search_with_product_prefix",
            defaultMessage: "Confluence advanced search",
            description: "Confluence advanced search link text when there are multiple products available"
          },
          jira_advanced_search_label: {
            id: "global_search.jira.advanced_search_label",
            defaultMessage: "Go to all:",
            description: ""
          },
          jira_advanced_issue_search_label: {
            id: "global_search.jira.advanced_issue_search_label",
            defaultMessage: "Advanced issue search",
            description: ""
          },
          jira_advanced_issue_search_label_with_product_prefix: {
            id: "product_search_dialog.jira.advanced_search_with_product_prefix",
            defaultMessage: "Jira advanced issue search",
            description: "Jira advanced search link text when there are multiple products available"
          },
          jira_search_placeholder: {
            id: "global_search.jira.search_placeholder",
            defaultMessage: "Search Jira",
            description: ""
          },
          jira_advanced_search_issues: {
            id: "global_search.jira.advanced_search_issues",
            defaultMessage: "Issues",
            description: "Plural of issue"
          },
          jira_advanced_search_projects: {
            id: "global_search.jira.advanced_search_projects",
            defaultMessage: "Projects",
            description: "Plural of project"
          },
          jira_advanced_search_boards: {
            id: "global_search.jira.advanced_search_boards",
            defaultMessage: "Boards",
            description: "Plural of board"
          },
          jira_advanced_search_filters: {
            id: "global_search.jira.advanced_search_filters",
            defaultMessage: "Filters",
            description: "Plural of filter"
          },
          jira_advanced_search_plans: {
            id: "global_search.jira.advanced_search_plans",
            defaultMessage: "Plans",
            description: "Plural of plan"
          },
          jira_advanced_search_people: {
            id: "global_search.jira.advanced_search_people",
            defaultMessage: "People",
            description: ""
          },
          jira_recently_viewed_issues_section_heading: {
            id: "product_search_dialog.jira.recently_viewed_issues_section_heading",
            defaultMessage: "Recently viewed issues",
            description: ""
          },
          jira_recent_boards_projects_filters_section_heading: {
            id: "product_search_dialog.jira.recent_boards_projects_filters_section_heading",
            defaultMessage: "Recent Boards, Projects and Filters",
            description: ""
          },
          jira_recent_projects_filters_section_heading: {
            id: "product_search_dialog.jira.recent_boards_projects_filters_section_heading",
            defaultMessage: "Recent Projects and Filters",
            description: ""
          },
          jira_recent_boards_projects_filters_plans_section_heading: {
            id: "product_search_dialog.jira.recent_boards_projects_filters_plans_section_heading",
            defaultMessage: "Recent Boards, Projects, Filters and Plans",
            description: "Title for recently accessed Jira entities (Boards, Projects, Filters, and Plans)"
          },
          jira_issues_section_heading: {
            id: "product_search_dialog.jira.issues_section_heading",
            defaultMessage: "Issues",
            description: ""
          },
          jira_boards_projects_filters_section_heading: {
            id: "product_search_dialog.jira.boards_projects_filters_section_heading",
            defaultMessage: "Boards, Projects and Filters",
            description: ""
          },
          jira_projects_filters_section_heading: {
            id: "product_search_dialog.jira.projects_filters_section_heading",
            defaultMessage: "Projects and Filters",
            description: ""
          },
          jira_boards_projects_filters_plans_section_heading: {
            id: "product_search_dialog.jira.boards_projects_filters_plans_section_heading",
            defaultMessage: "Boards, Projects, Filters and Plans",
            description: "Title for search results of Jira entities (Boards, Projects, Filters, and Plans)"
          },
          jira_boards_icon_accessibility_text: {
            id: "product_search_dialog.jira.boards_icon_accessibility_text",
            defaultMessage: "Board icon",
            description: "The alternative accessibility text for a Jira Software board icon."
          },
          jira_view_all_issues: {
            id: "product_search_dialog.jira.view_all_issues",
            defaultMessage: "Advanced issue search",
            description: "Text for link that takes users to advanced search for issues"
          },
          space_filters_title: {
            id: "product_search_dialog.confluence.space_filters",
            defaultMessage: "Filter by space",
            description: "Section title for space filters in Confluence"
          },
          project_filters_title: {
            id: "product_search_dialog.jira.project_filters",
            defaultMessage: "Filter by project",
            description: "Section title for project filters in Jira"
          },
          contributor_filters_title: {
            id: "product_search_dialog.confluence.contributor_filters",
            defaultMessage: "Filter by contributor",
            description: "Section title for contributor filters in Confluence"
          },
          assignee_filters_title: {
            id: "product_search_dialog.jira.assignee_filters",
            defaultMessage: "Filter by assignee",
            description: "Section title for assignee filters in Jira"
          },
          space_filters_find_more: {
            id: "product_search_dialog.confluence.space_filters_find_more",
            defaultMessage: "Find a space",
            description: "Placeholder text for select menu when finding a space to filter results by"
          },
          project_filters_find_more: {
            id: "product_search_dialog.jira.project_filters_find_more",
            defaultMessage: "Find a project",
            description: "Placeholder text for select menu when finding a project to filter results by"
          },
          contributor_filters_find_more: {
            id: "product_search_dialog.confluence.contributor_filters_find_more",
            defaultMessage: "Find a contributor",
            description: "Placeholder text for select menu when finding a contributor to filter results by"
          },
          assignee_filters_find_more: {
            id: "product_search_dialog.confluence.assignee_filters_find_more",
            defaultMessage: "Find an assignee",
            description: "Placeholder text for select menu when finding a assignee to filter results by"
          },
          filters_applied: {
            id: "product_search_dialog.confluence.filters_applied",
            defaultMessage: "Looks like you have some filters applied",
            description: "Message to show when there are no search results due to filters being applied"
          },
          clear_filters: {
            id: "product_search_dialog.confluence.clear_filters",
            defaultMessage: "Clear filters",
            description: "Message to be displayed on button to clear the filters applied"
          },
          show_more_filters: {
            id: "search_dialog.filters.group.show-more",
            defaultMessage: "Show more",
            description: "Text display on button to select more items to filter by"
          },
          more_filters: {
            id: "product_search_dialog.more_filters",
            defaultMessage: "View all filters",
            description: "Clicking on this link takes a user to a page with more filters and options."
          },
          jira_tab_label: {
            id: "cross_product_search_dialog.jira.tab_label",
            defaultMessage: "Jira",
            description: ""
          },
          confluence_tab_label: {
            id: "cross_product_search_dialog.confluence.tab_label",
            defaultMessage: "Confluence",
            description: ""
          }
        } )
    },
    RPtG: function ( e, r, t ) {
      "use strict";
      t.r( r );
      var a = t( "ERkP" ),
        n = t.n( a ),
        o = t( "ZWld" ),
        c = t( "4oFo" ),
        i = t( "l1C2" ),
        s = function ( e ) {
          var r = e.children,
            t = e.onBlur,
            a = e.onFocus,
            n = e.onKeyDown,
            o = e.isExpanded;
          return Object( i.f )( c.b, null, Object( i.f )( c.a, {
            isExpanded: o
          }, Object( i.f )( c.c, {
            onBlur: t,
            onFocus: a,
            onKeyDown: n,
            isExpanded: o
          }, r ) ) )
        },
        l = t( "ViL1" ),
        d = t( "L21V" ),
        u = {
          "global_search.confluence.no_results_in_space": "No results in '{spaceTitle}'",
          "global_search.confluence.remove_space_filter": "Remove space filter",
          "global_search.confluence.space_filter": "Filter results by space",
          "global_search.confluence.more_filters": "More filter options",
          "global_search.confluence.recent_pages_heading": "Recent pages and blogs",
          "global_search.confluence.recent_spaces_heading": "Recent spaces",
          "global_search.confluence.search_placeholder": "Search Confluence",
          "global_search.confluence.spaces_heading": "Spaces",
          "global_search.confluence.confluence_objects_heading": "Pages, blogs and attachments",
          "global_search.confluence.advanced_search": "Advanced search",
          "global_search.confluence.advanced_search_filters": "Advanced search with filters",
          "global_search.confluence.advanced_search_for": 'Advanced search for "{query}"',
          "global_search.no_recent_activity_title": "Search for what you need",
          "global_search.no_recent_activity_body": "Or use <a href={url}>advanced search</a> (`shift + enter`) to focus your results.",
          "global_search.no_results_title": "We couldn't find anything matching your search",
          "global_search.no_results_body": "Try again with a different term, or refine your results with our advanced search.",
          "global_search.people.recent_people_heading": "Recently worked with",
          "global_search.people.people_heading": "People",
          "global_search.people.advanced_search": "Search people",
          "global_search.search_error_title": "We're having trouble searching.",
          "global_search.search_error_body": "It might just be hiccup. Best thing is to {link}.",
          "global_search.search_error_body.link": "try again",
          "global_search.jira.search_placeholder": "Search Jira",
          "global_search.jira.recent_issues_heading": "Recent issues",
          "global_search.jira.recent_people_heading": "Recently worked with",
          "global_search.jira.recent_containers": "Recent boards, projects and filters",
          "global_search.jira.recent_core_containers": "Recent projects and filters",
          "global_search.jira.search_result_issues_heading": "Issues",
          "global_search.jira.search_result_containers_heading": "Boards, projects and filters",
          "global_search.jira.search_result_core_containers_heading": "Projects and filters",
          "global_search.jira.search_result_people_heading": "People",
          "global_search.jira.advanced_search": "View all:",
          "global_search.jira.advanced_search_issues": "Issues",
          "global_search.jira.advanced_search_projects": "Projects",
          "global_search.jira.advanced_search_boards": "Boards",
          "global_search.jira.advanced_search_filters": "Filters",
          "global_search.jira.advanced_search_people": "People",
          "global_search.jira.advanced_issue_search": "Advanced issue search",
          "global_search.jira.view_all_issues": "View all issues",
          "global_search.jira.no_results_title": "We couldn't find anything matching your search",
          "global_search.jira.no_results_body": "Try again with a different term.",
          "global_search.jira.no_recent_activity_body": "Or refine your results with our advanced search.",
          "global_search.jira.project_type.business_project": "Business Project",
          "global_search.jira.project_type.software_project": "Software Project",
          "global_search.jira.project_type.service_desk_project": "Service Desk Project",
          "global_search.jira.project_type.ops_project": "Ops Project",
          "global_search.jira.result_type.board": "Board",
          "global_search.jira.result_type.filter": "Filter",
          "global_search.give_feedback": "Give feedback",
          "global_search.show_more_button_text": "Show {itemsPerPage} more results",
          "global_search.show_more_button_advanced_search": "Refine results with advanced search",
          "global_search.confluence.subtext_with_modified_date": "{containerName}  ·  Updated {friendlyLastModified}"
        },
        _ = {
          "cross_product_search_dialog.confluence.tab_label": "Confluence",
          "cross_product_search_dialog.jira.tab_label": "Jira",
          "global_search.jira.advanced_issue_search_label": "Pesquisa avançada de itens",
          "global_search.jira.advanced_search_boards": "Painéis",
          "global_search.jira.advanced_search_filters": "Filtros",
          "global_search.jira.advanced_search_issues": "Itens",
          "global_search.jira.advanced_search_label": "Acessar todos:",
          "global_search.jira.advanced_search_people": "Pessoas",
          "global_search.jira.advanced_search_projects": "Projetos",
          "global_search.jira.search_placeholder": "Pesquisar no Jira",
          "product_search_dialog.confluence.advanced_search_with_product_prefix": "Pesquisa avançada do Confluence",
          "product_search_dialog.confluence.assignee_filters_find_more": "Encontrar um responsável",
          "product_search_dialog.confluence.clear_filters": "Limpar filtros",
          "product_search_dialog.confluence.contributor_filters": "Filtrar por colaborador",
          "product_search_dialog.confluence.contributor_filters_find_more": "Encontrar um colaborador",
          "product_search_dialog.confluence.filters_applied": "Parece que alguns filtros foram aplicados",
          "product_search_dialog.confluence.pages_blogs_attachments_section_heading": "Páginas, blogs e anexos",
          "product_search_dialog.confluence.people_section_heading": "Pessoas",
          "product_search_dialog.confluence.search_input_expanded_placeholder": "Pesquisar no Confluence",
          "product_search_dialog.confluence.space_filters": "Filtrar por espaço",
          "product_search_dialog.confluence.space_filters_find_more": "Encontrar um espaço",
          "product_search_dialog.confluence.spaces_section_heading": "Espaços",
          "product_search_dialog.empty.no_results_body": "Tente outra vez com um termo diferente ou refine os resultados com a <a>Busca avançada</a>",
          "product_search_dialog.empty.no_results_heading": "Puxa vida... A gente não achou nada.",
          "product_search_dialog.error.failed_search_body": "Pode ser apenas um contratempo. O melhor a fazer é <a>tentar outra vez.</a>",
          "product_search_dialog.error.failed_search_heading": "Estamos com dificuldades para pesquisar",
          "product_search_dialog.give_feedback": "Dar feedback",
          "product_search_dialog.jira.advanced_search_with_product_prefix": "Pesquisa avançada de itens do Jira",
          "product_search_dialog.jira.assignee_filters": "Filtrar por responsável",
          "product_search_dialog.jira.boards_icon_accessibility_text": "Ícone do painel",
          "product_search_dialog.jira.boards_projects_filters_section_heading": "Painéis, projetos e filtros",
          "product_search_dialog.jira.issues_section_heading": "Itens",
          "product_search_dialog.jira.project_filters": "Filtrar por projeto",
          "product_search_dialog.jira.project_filters_find_more": "Encontrar um projeto",
          "product_search_dialog.jira.recent_boards_projects_filters_section_heading": "Painéis, projetos e filtros recentes",
          "product_search_dialog.jira.recently_viewed_issues_section_heading": "Itens recém vistos",
          "product_search_dialog.jira.view_all_issues": "Pesquisa avançada por itens",
          "product_search_dialog.more_filters": "Ver todos os filtros",
          "product_search_dialog.recent_spaces_section_heading": "Espaços recentes",
          "product_search_dialog.recently_viewed_heading": "Pesquisa avançada",
          "product_search_dialog.recently_viewed_section_heading": "Visto por último",
          "product_search_dialog.recently_worked_with_section_heading": "Trabalhou recentemente com",
          "product_search_dialog.search_input_collapsed_placeholder": "Pesquisar",
          "product_search_dialog.search_people_link": "Procurar pessoas",
          "product_search_dialog.show_all_results_link": "Visualizar todos os resultados",
          "product_search_dialog.show_more_results_link": "Mostrar mais",
          "search_dialog.filters.group.show-more": "Mostrar mais"
        },
        f = {
          "cross_product_search_dialog.confluence.tab_label": "Confluence",
          "cross_product_search_dialog.jira.tab_label": "Jira",
          "global_search.jira.advanced_issue_search_label": "Pesquisa avançada de problemas",
          "global_search.jira.advanced_search_boards": "Quadros",
          "global_search.jira.advanced_search_filters": "Filtros",
          "global_search.jira.advanced_search_issues": "Problemas",
          "global_search.jira.advanced_search_label": "Aceder a tudo:",
          "global_search.jira.advanced_search_people": "Pessoas",
          "global_search.jira.advanced_search_projects": "Projetos",
          "global_search.jira.search_placeholder": "Pesquisar no Jira",
          "product_search_dialog.confluence.advanced_search_with_product_prefix": "Pesquisa avançada no Confluence",
          "product_search_dialog.confluence.assignee_filters_find_more": "Encontrar um responsável",
          "product_search_dialog.confluence.clear_filters": "Limpar os filtros",
          "product_search_dialog.confluence.contributor_filters": "Filtrar por contribuidor",
          "product_search_dialog.confluence.contributor_filters_find_more": "Encontrar um colaborador",
          "product_search_dialog.confluence.filters_applied": "Parece que tem alguns filtros aplicados",
          "product_search_dialog.confluence.pages_blogs_attachments_section_heading": "Páginas, blogues e anexos",
          "product_search_dialog.confluence.people_section_heading": "Pessoas",
          "product_search_dialog.confluence.search_input_expanded_placeholder": "Pesquisar no Confluence",
          "product_search_dialog.confluence.space_filters": "Filtrar por espaço",
          "product_search_dialog.confluence.space_filters_find_more": "Encontrar um espaço",
          "product_search_dialog.confluence.spaces_section_heading": "Espaços",
          "product_search_dialog.empty.no_results_body": "Tente novamente com um termo diferente ou aperfeiçoe os seus resultados com a <a>Pesquisa avançada</a>",
          "product_search_dialog.empty.no_results_heading": "Não encontramos nada que corresponda à sua pesquisa.",
          "product_search_dialog.error.failed_search_body": "Pode ser apenas um contratempo. O melhor a fazer é <a>tentar novamente</a>.",
          "product_search_dialog.error.failed_search_heading": "Estamos com dificuldades ao pesquisar",
          "product_search_dialog.give_feedback": "Enviar comentários",
          "product_search_dialog.jira.advanced_search_with_product_prefix": "Pesquisa avançada de problemas no Jira",
          "product_search_dialog.jira.assignee_filters": "Filtrar por responsável",
          "product_search_dialog.jira.boards_icon_accessibility_text": "Ícone do Quadro",
          "product_search_dialog.jira.boards_projects_filters_section_heading": "Quadros, Projetos e Filtros",
          "product_search_dialog.jira.issues_section_heading": "Problemas",
          "product_search_dialog.jira.project_filters": "Filtrar por projeto",
          "product_search_dialog.jira.project_filters_find_more": "Encontrar um projeto",
          "product_search_dialog.jira.recent_boards_projects_filters_section_heading": "Quadros, Projetos e Filtros recentes",
          "product_search_dialog.jira.recently_viewed_issues_section_heading": "Problemas visualizados recentemente",
          "product_search_dialog.jira.view_all_issues": "Pesquisa avançada de problemas",
          "product_search_dialog.more_filters": "Ver todos os filtros",
          "product_search_dialog.recent_spaces_section_heading": "Espaços recentes",
          "product_search_dialog.recently_viewed_heading": "Pesquisa avançada",
          "product_search_dialog.recently_viewed_section_heading": "Visto recentemente",
          "product_search_dialog.recently_worked_with_section_heading": "Trabalhou recentemente com",
          "product_search_dialog.search_input_collapsed_placeholder": "Pesquisar",
          "product_search_dialog.search_people_link": "Pesquisar pessoas",
          "product_search_dialog.show_all_results_link": "Ver todos os resultados",
          "product_search_dialog.show_more_results_link": "Mostrar mais",
          "search_dialog.filters.group.show-more": "Mostrar mais"
        },
        p = {
          cs: {
            "cross_product_search_dialog.confluence.tab_label": "Confluence",
            "cross_product_search_dialog.jira.tab_label": "Jira",
            "global_search.jira.advanced_issue_search_label": "Pokročilé vyhledávání požadavků",
            "global_search.jira.advanced_search_boards": "Boardy",
            "global_search.jira.advanced_search_filters": "Filtry",
            "global_search.jira.advanced_search_issues": "Požadavky",
            "global_search.jira.advanced_search_label": "Přejít na všechny:",
            "global_search.jira.advanced_search_people": "Lidi",
            "global_search.jira.advanced_search_projects": "Projekty",
            "global_search.jira.search_placeholder": "Vyhledat v Jira",
            "product_search_dialog.confluence.advanced_search_with_product_prefix": "Pokročilé vyhledávání v Confluence",
            "product_search_dialog.confluence.assignee_filters_find_more": "Vyhledejte pověřenou osobu",
            "product_search_dialog.confluence.clear_filters": "Vymazat filtry",
            "product_search_dialog.confluence.contributor_filters": "Filtrovat podle přispěvatele",
            "product_search_dialog.confluence.contributor_filters_find_more": "Vyhledejte přispěvatele",
            "product_search_dialog.confluence.filters_applied": "Vypadá to, že jste použili nějaké filtry",
            "product_search_dialog.confluence.pages_blogs_attachments_section_heading": "Stránky, blogy a přílohy",
            "product_search_dialog.confluence.people_section_heading": "Lidé",
            "product_search_dialog.confluence.search_input_expanded_placeholder": "Hledat v Confluence",
            "product_search_dialog.confluence.space_filters": "Filtrovat podle prostoru",
            "product_search_dialog.confluence.space_filters_find_more": "Vyhledejte prostor",
            "product_search_dialog.confluence.spaces_section_heading": "Prostory",
            "product_search_dialog.empty.no_results_body": "Zkuste to znovu s jiným termínem nebo zpřesněte výsledky pomocí <a>pokročilého vyhledávání</a>.",
            "product_search_dialog.empty.no_results_heading": "Nepodařilo se nám najít nic, co by odpovídalo vašemu vyhledávání.",
            "product_search_dialog.error.failed_search_body": "Možná šlo jen o náhodnou chybku. Nejlepší bude <a>zkusit to znovu</a>.",
            "product_search_dialog.error.failed_search_heading": "Máme problém s vyhledáváním",
            "product_search_dialog.give_feedback": "Poskytnout zpětnou vazbu",
            "product_search_dialog.jira.advanced_search_with_product_prefix": "Pokročilé vyhledávání požadavků v Jira",
            "product_search_dialog.jira.assignee_filters": "Filtrovat podle pověřené osoby",
            "product_search_dialog.jira.boards_icon_accessibility_text": "Ikona boardu",
            "product_search_dialog.jira.boards_projects_filters_section_heading": "Boardy, projekty a filtry",
            "product_search_dialog.jira.issues_section_heading": "Požadavky",
            "product_search_dialog.jira.project_filters": "Filtrovat podle projektu",
            "product_search_dialog.jira.project_filters_find_more": "Vyhledejte projekt",
            "product_search_dialog.jira.recent_boards_projects_filters_section_heading": "Nedávné boardy, projekty a filtry",
            "product_search_dialog.jira.recently_viewed_issues_section_heading": "Nedávno zobrazené požadavky",
            "product_search_dialog.jira.view_all_issues": "Pokročilé vyhledávání požadavků",
            "product_search_dialog.more_filters": "Zobrazit všechny filtry",
            "product_search_dialog.recent_spaces_section_heading": "Nedávné prostory",
            "product_search_dialog.recently_viewed_heading": "Rozšířené vyhledávání",
            "product_search_dialog.recently_viewed_section_heading": "Nedávno zobrazené",
            "product_search_dialog.recently_worked_with_section_heading": "Nedávná spolupráce s",
            "product_search_dialog.search_input_collapsed_placeholder": "Vyhledat",
            "product_search_dialog.search_people_link": "Vyhledat lidi",
            "product_search_dialog.show_all_results_link": "Zobrazit všechny výsledky",
            "product_search_dialog.show_more_results_link": "Zobrazit více",
            "search_dialog.filters.group.show-more": "Zobrazit více"
          },
          da: {
            "cross_product_search_dialog.confluence.tab_label": "Confluence",
            "cross_product_search_dialog.jira.tab_label": "Jira",
            "global_search.jira.advanced_issue_search_label": "Avanceret sagssøgning",
            "global_search.jira.advanced_search_boards": "Tavler",
            "global_search.jira.advanced_search_filters": "Filtre",
            "global_search.jira.advanced_search_issues": "Sager",
            "global_search.jira.advanced_search_label": "Gå til alle:",
            "global_search.jira.advanced_search_people": "Personer",
            "global_search.jira.advanced_search_projects": "Projekter",
            "global_search.jira.search_placeholder": "Søg på Jira",
            "product_search_dialog.confluence.advanced_search_with_product_prefix": "Avanceret Confluence-søgning",
            "product_search_dialog.confluence.assignee_filters_find_more": "Find en modtager",
            "product_search_dialog.confluence.clear_filters": "Ryd filtre",
            "product_search_dialog.confluence.contributor_filters": "Filtrér efter bidragyder",
            "product_search_dialog.confluence.contributor_filters_find_more": "Find en bidragsyder",
            "product_search_dialog.confluence.filters_applied": "Det lader til, at du anvender filtre",
            "product_search_dialog.confluence.pages_blogs_attachments_section_heading": "Sider, blogs og bilag",
            "product_search_dialog.confluence.people_section_heading": "Personer",
            "product_search_dialog.confluence.search_input_expanded_placeholder": "Søg i Confluence",
            "product_search_dialog.confluence.space_filters": "Filtrér efter område",
            "product_search_dialog.confluence.space_filters_find_more": "Find et område",
            "product_search_dialog.confluence.spaces_section_heading": "Områder",
            "product_search_dialog.empty.no_results_body": "Prøv igen med et andet ord, eller indsnævr resultaterne via <a>Avanceret søgning</a>",
            "product_search_dialog.empty.no_results_heading": "Vi kunne ikke finde noget, der matchede din søgning.",
            "product_search_dialog.error.failed_search_body": "Det kan være et midlertidigt problem. Det bedste, du kan gøre, er at <a>prøve igen.</a>",
            "product_search_dialog.error.failed_search_heading": "Vi har problemer med at søge",
            "product_search_dialog.give_feedback": "Giv feedback",
            "product_search_dialog.jira.advanced_search_with_product_prefix": "Avanceret Jira-sagssøgning",
            "product_search_dialog.jira.assignee_filters": "Filtrer efter modtager",
            "product_search_dialog.jira.boards_icon_accessibility_text": "Tavleikon",
            "product_search_dialog.jira.boards_projects_filters_section_heading": "Tavler, projekter og filtre",
            "product_search_dialog.jira.issues_section_heading": "Sager",
            "product_search_dialog.jira.project_filters": "Filtrer efter projekt",
            "product_search_dialog.jira.project_filters_find_more": "Find et projekt",
            "product_search_dialog.jira.recent_boards_projects_filters_section_heading": "Seneste tavler, projekter og filtre",
            "product_search_dialog.jira.recently_viewed_issues_section_heading": "Senest viste sager",
            "product_search_dialog.jira.view_all_issues": "Avanceret søgning efter sager",
            "product_search_dialog.more_filters": "Vis alle filtre",
            "product_search_dialog.recent_spaces_section_heading": "Seneste områder",
            "product_search_dialog.recently_viewed_heading": "Avanceret søgning",
            "product_search_dialog.recently_viewed_section_heading": "Set for nylig",
            "product_search_dialog.recently_worked_with_section_heading": "Arbejdet med for nylig",
            "product_search_dialog.search_input_collapsed_placeholder": "Søg",
            "product_search_dialog.search_people_link": "Søg efter personer",
            "product_search_dialog.show_all_results_link": "Se alle resultater",
            "product_search_dialog.show_more_results_link": "Vis mere",
            "search_dialog.filters.group.show-more": "Vis flere"
          },
          de: {
            "cross_product_search_dialog.confluence.tab_label": "Confluence",
            "cross_product_search_dialog.jira.tab_label": "Jira",
            "global_search.jira.advanced_issue_search_label": "Erweiterte Vorgangssuche",
            "global_search.jira.advanced_search_boards": "Boards",
            "global_search.jira.advanced_search_filters": "Filter",
            "global_search.jira.advanced_search_issues": "Vorgänge",
            "global_search.jira.advanced_search_label": "Gehe zu allen:",
            "global_search.jira.advanced_search_people": "Personen",
            "global_search.jira.advanced_search_projects": "Projekte",
            "global_search.jira.search_placeholder": "Jira durchsuchen",
            "product_search_dialog.confluence.advanced_search_with_product_prefix": "Erweiterte Confluence-Suche",
            "product_search_dialog.confluence.assignee_filters_find_more": "Zugewiesene Person suchen",
            "product_search_dialog.confluence.clear_filters": "Filter löschen",
            "product_search_dialog.confluence.contributor_filters": "Nach Beitragendem filtern",
            "product_search_dialog.confluence.contributor_filters_find_more": "Einen Beitragenden suchen",
            "product_search_dialog.confluence.filters_applied": "Sie haben einige Filter angewendet",
            "product_search_dialog.confluence.pages_blogs_attachments_section_heading": "Seiten, Blogs und Anhänge",
            "product_search_dialog.confluence.people_section_heading": "Personen",
            "product_search_dialog.confluence.search_input_expanded_placeholder": "Confluence durchsuchen",
            "product_search_dialog.confluence.space_filters": "Nach Bereich filtern",
            "product_search_dialog.confluence.space_filters_find_more": "Bereich suchen",
            "product_search_dialog.confluence.spaces_section_heading": "Bereiche",
            "product_search_dialog.empty.no_results_body": "Versuchen Sie es mit einem anderen Begriff erneut oder verfeinern Sie Ihre Suchergebnisse mit der <a>erweiterten Suche</a>.",
            "product_search_dialog.empty.no_results_heading": "Leider konnten wir für Ihre Suche keine übereinstimmenden Ergebnisse finden.",
            "product_search_dialog.error.failed_search_body": "Das war vielleicht nur eine kurze Störung. <a>Versuchen Sie es am besten erneut.</a>",
            "product_search_dialog.error.failed_search_heading": "Wir haben Schwierigkeiten bei der Suche.",
            "product_search_dialog.give_feedback": "Feedback geben",
            "product_search_dialog.jira.advanced_search_with_product_prefix": "Erweiterte Jira-Vorgangssuche",
            "product_search_dialog.jira.assignee_filters": "Nach zugewiesener Person filtern",
            "product_search_dialog.jira.boards_icon_accessibility_text": "Board-Symbol",
            "product_search_dialog.jira.boards_projects_filters_section_heading": "Boards, Projekte und Filter",
            "product_search_dialog.jira.issues_section_heading": "Vorgänge",
            "product_search_dialog.jira.project_filters": "Nach Projekt filtern",
            "product_search_dialog.jira.project_filters_find_more": "Projekt suchen",
            "product_search_dialog.jira.recent_boards_projects_filters_section_heading": "Zuletzt angesehene Boards, Projekte und Filter",
            "product_search_dialog.jira.recently_viewed_issues_section_heading": "Zuletzt angesehene Vorgänge",
            "product_search_dialog.jira.view_all_issues": "Erweiterte Suche nach Vorgängen",
            "product_search_dialog.more_filters": "Alle Filter anzeigen",
            "product_search_dialog.recent_spaces_section_heading": "Kürzlich genutzte Bereiche",
            "product_search_dialog.recently_viewed_heading": "Erweiterte Suche",
            "product_search_dialog.recently_viewed_section_heading": "Kürzlich angesehen",
            "product_search_dialog.recently_worked_with_section_heading": "Kürzlich gearbeitet mit",
            "product_search_dialog.search_input_collapsed_placeholder": "Suchen",
            "product_search_dialog.search_people_link": "Personen suchen",
            "product_search_dialog.show_all_results_link": "Alle Ergebnisse anzeigen",
            "product_search_dialog.show_more_results_link": "Mehr anzeigen",
            "search_dialog.filters.group.show-more": "Mehr anzeigen"
          },
          en: u,
          en_GB: {
            "global_search.confluence.no_results_in_space": "No results in '{spaceTitle}'",
            "global_search.confluence.remove_space_filter": "Remove space filter",
            "global_search.confluence.space_filter": "Filter results by space",
            "global_search.confluence.more_filters": "More filter options",
            "global_search.confluence.recent_pages_heading": "Recent pages and blogs",
            "global_search.confluence.recent_spaces_heading": "Recent spaces",
            "global_search.confluence.search_placeholder": "Search Confluence",
            "global_search.confluence.spaces_heading": "Spaces",
            "global_search.confluence.confluence_objects_heading": "Pages, blogs and attachments",
            "global_search.confluence.advanced_search": "Advanced search",
            "global_search.confluence.advanced_search_filters": "Advanced search with filters",
            "global_search.confluence.advanced_search_for": 'Advanced search for "{query}"',
            "global_search.no_recent_activity_title": "Search for what you need",
            "global_search.no_recent_activity_body": "Or use <a href={url}>advanced search</a> (`shift + enter`) to focus your results.",
            "global_search.no_results_title": "We couldn't find anything matching your search",
            "global_search.no_results_body": "Try again with a different term, or refine your results with our advanced search.",
            "global_search.people.recent_people_heading": "Recently worked with",
            "global_search.people.people_heading": "People",
            "global_search.people.advanced_search": "Search people",
            "global_search.search_error_title": "We're having trouble searching.",
            "global_search.search_error_body": "It might just be hiccup. Best thing is to {link}.",
            "global_search.search_error_body.link": "try again",
            "global_search.jira.search_placeholder": "Search Jira",
            "global_search.jira.recent_issues_heading": "Recent issues",
            "global_search.jira.recent_people_heading": "Recently worked with",
            "global_search.jira.recent_containers": "Recent boards, projects and filters",
            "global_search.jira.recent_core_containers": "Recent projects and filters",
            "global_search.jira.search_result_issues_heading": "Issues",
            "global_search.jira.search_result_containers_heading": "Boards, projects and filters",
            "global_search.jira.search_result_core_containers_heading": "Projects and filters",
            "global_search.jira.search_result_people_heading": "People",
            "global_search.jira.advanced_search": "View all:",
            "global_search.jira.advanced_search_issues": "Issues",
            "global_search.jira.advanced_search_projects": "Projects",
            "global_search.jira.advanced_search_boards": "Boards",
            "global_search.jira.advanced_search_filters": "Filters",
            "global_search.jira.advanced_search_people": "People",
            "global_search.jira.advanced_issue_search": "Advanced issue search",
            "global_search.jira.view_all_issues": "View all issues",
            "global_search.jira.no_results_title": "We couldn't find anything matching your search",
            "global_search.jira.no_results_body": "Try again with a different term.",
            "global_search.jira.no_recent_activity_body": "Or refine your results with our advanced search.",
            "global_search.jira.project_type.business_project": "Business Project",
            "global_search.jira.project_type.software_project": "Software Project",
            "global_search.jira.project_type.service_desk_project": "Service Desk Project",
            "global_search.jira.project_type.ops_project": "Ops Project",
            "global_search.jira.result_type.board": "Board",
            "global_search.jira.result_type.filter": "Filter",
            "global_search.give_feedback": "Give feedback",
            "global_search.show_more_button_text": "Show {itemsPerPage} more results",
            "global_search.show_more_button_advanced_search": "Refine results with advanced search",
            "global_search.confluence.subtext_with_modified_date": "{containerName}  ·  Updated {friendlyLastModified}"
          },
          es: {
            "cross_product_search_dialog.confluence.tab_label": "Confluence",
            "cross_product_search_dialog.jira.tab_label": "Jira",
            "global_search.jira.advanced_issue_search_label": "Búsqueda avanzada de incidencias",
            "global_search.jira.advanced_search_boards": "Tableros",
            "global_search.jira.advanced_search_filters": "Filtros",
            "global_search.jira.advanced_search_issues": "Incidencias",
            "global_search.jira.advanced_search_label": "Ir a todos:",
            "global_search.jira.advanced_search_people": "Personas",
            "global_search.jira.advanced_search_projects": "Proyectos",
            "global_search.jira.search_placeholder": "Buscar en Jira",
            "product_search_dialog.confluence.advanced_search_with_product_prefix": "Búsqueda avanzada de Confluence",
            "product_search_dialog.confluence.assignee_filters_find_more": "Buscar a una persona asignada",
            "product_search_dialog.confluence.clear_filters": "Borrar filtros",
            "product_search_dialog.confluence.contributor_filters": "Filtrar por colaborador",
            "product_search_dialog.confluence.contributor_filters_find_more": "Buscar un colaborador",
            "product_search_dialog.confluence.filters_applied": "Parece que tienes algún filtro aplicado",
            "product_search_dialog.confluence.pages_blogs_attachments_section_heading": "Páginas, blogs y archivos adjuntos",
            "product_search_dialog.confluence.people_section_heading": "Personal",
            "product_search_dialog.confluence.search_input_expanded_placeholder": "Buscar en Confluence",
            "product_search_dialog.confluence.space_filters": "Filtrar por espacio",
            "product_search_dialog.confluence.space_filters_find_more": "Buscar un espacio",
            "product_search_dialog.confluence.spaces_section_heading": "Espacios",
            "product_search_dialog.empty.no_results_body": "Inténtalo de nuevo con un término diferente o ajusta los resultados con la <a>búsqueda avanzada</a>",
            "product_search_dialog.empty.no_results_heading": "No hemos encontrado ningún resultado que coincida con tu búsqueda.",
            "product_search_dialog.error.failed_search_body": "Puede que solo sea un contratiempo. Lo mejor es <a>intentarlo de nuevo</a>.",
            "product_search_dialog.error.failed_search_heading": "Estamos teniendo problemas para realizar la búsqueda",
            "product_search_dialog.give_feedback": "Enviar comentarios",
            "product_search_dialog.jira.advanced_search_with_product_prefix": "Búsqueda avanzada de incidencias de Jira",
            "product_search_dialog.jira.assignee_filters": "Filtrar por persona asignada",
            "product_search_dialog.jira.boards_icon_accessibility_text": "Icono de tablero",
            "product_search_dialog.jira.boards_projects_filters_section_heading": "Tableros, proyectos y filtros",
            "product_search_dialog.jira.issues_section_heading": "Incidencias",
            "product_search_dialog.jira.project_filters": "Filtrar por proyecto",
            "product_search_dialog.jira.project_filters_find_more": "Buscar un proyecto",
            "product_search_dialog.jira.recent_boards_projects_filters_section_heading": "Tableros, proyectos y filtros recientes",
            "product_search_dialog.jira.recently_viewed_issues_section_heading": "Incidencias revisadas recientemente",
            "product_search_dialog.jira.view_all_issues": "Búsqueda avanzada de incidencias",
            "product_search_dialog.more_filters": "Ver todos los filtros",
            "product_search_dialog.recent_spaces_section_heading": "Espacios recientes",
            "product_search_dialog.recently_viewed_heading": "Búsqueda avanzada",
            "product_search_dialog.recently_viewed_section_heading": "Vistos recientemente",
            "product_search_dialog.recently_worked_with_section_heading": "Trabajó recientemente con",
            "product_search_dialog.search_input_collapsed_placeholder": "Buscar",
            "product_search_dialog.search_people_link": "Buscar personas",
            "product_search_dialog.show_all_results_link": "Ver todos los resultados",
            "product_search_dialog.show_more_results_link": "Mostrar más",
            "search_dialog.filters.group.show-more": "Mostrar más"
          },
          et: {
            "cross_product_search_dialog.confluence.tab_label": "Confluence",
            "cross_product_search_dialog.jira.tab_label": "Jira",
            "global_search.jira.advanced_issue_search_label": "Täpsem probleemiotsing",
            "global_search.jira.advanced_search_boards": "Töölauad",
            "global_search.jira.advanced_search_filters": "Filtrid",
            "global_search.jira.advanced_search_issues": "Probleemid",
            "global_search.jira.advanced_search_label": "Ava kõik:",
            "global_search.jira.advanced_search_people": "Inimesed",
            "global_search.jira.advanced_search_projects": "Projektid",
            "global_search.jira.search_placeholder": "Otsi Jirast",
            "product_search_dialog.confluence.advanced_search_with_product_prefix": "Confluence’i täpsem otsing",
            "product_search_dialog.confluence.assignee_filters_find_more": "Leidke ülesande täitja",
            "product_search_dialog.confluence.clear_filters": "Tühjenda filtrid",
            "product_search_dialog.confluence.contributor_filters": "Filtreerige kaastöötaja järgi",
            "product_search_dialog.confluence.contributor_filters_find_more": "Leidke kaasautor",
            "product_search_dialog.confluence.filters_applied": "Paistab, et teil on rakendatud mõned filtrid",
            "product_search_dialog.confluence.pages_blogs_attachments_section_heading": "Lehed, blogid ja manused",
            "product_search_dialog.confluence.people_section_heading": "Inimesed",
            "product_search_dialog.confluence.search_input_expanded_placeholder": "Otsi Confluence’ist",
            "product_search_dialog.confluence.space_filters": "Filtreerige ruumi järgi",
            "product_search_dialog.confluence.space_filters_find_more": "Leidke ruum",
            "product_search_dialog.confluence.spaces_section_heading": "Ruumid",
            "product_search_dialog.empty.no_results_body": "Proovige uuesti mõne muu tingimusega või täiustage tulemusi <a>täpsema otsingu</a> abil",
            "product_search_dialog.empty.no_results_heading": "Me ei leidnud midagi teie otsingule vastavat.",
            "product_search_dialog.error.failed_search_body": "See võib olla kõigest pisike tagasilöök. Parim lahendus praegu on <a>uuesti proovida.</a>",
            "product_search_dialog.error.failed_search_heading": "Meil on otsimisega probleeme",
            "product_search_dialog.give_feedback": "Anna tagasisidet",
            "product_search_dialog.jira.advanced_search_with_product_prefix": "Jira täpsem probleemiotsing",
            "product_search_dialog.jira.assignee_filters": "Ülesande täitja järgi filtreerimine",
            "product_search_dialog.jira.boards_icon_accessibility_text": "Töölaua ikoon",
            "product_search_dialog.jira.boards_projects_filters_section_heading": "Töölauad, projektid ja filtrid",
            "product_search_dialog.jira.issues_section_heading": "Probleemid",
            "product_search_dialog.jira.project_filters": "Projekti järgi filtreerimine",
            "product_search_dialog.jira.project_filters_find_more": "Leidke projekt",
            "product_search_dialog.jira.recent_boards_projects_filters_section_heading": "Hiljutised töölauad, projektid ja filtrid",
            "product_search_dialog.jira.recently_viewed_issues_section_heading": "Hiljuti kuvatud probleemid",
            "product_search_dialog.jira.view_all_issues": "Probleemide täpsem otsing",
            "product_search_dialog.more_filters": "Kõigi filtrite kuvamine",
            "product_search_dialog.recent_spaces_section_heading": "Hiljutised ruumid",
            "product_search_dialog.recently_viewed_heading": "Täpsem otsing",
            "product_search_dialog.recently_viewed_section_heading": "Viimati vaadatud",
            "product_search_dialog.recently_worked_with_section_heading": "Tegite hiljuti koostööd kasutaja(te)ga",
            "product_search_dialog.search_input_collapsed_placeholder": "Otsing",
            "product_search_dialog.search_people_link": "Otsi inimesi",
            "product_search_dialog.show_all_results_link": "Kuva kõik tulemused",
            "product_search_dialog.show_more_results_link": "Kuva rohkem",
            "search_dialog.filters.group.show-more": "Kuva rohkem"
          },
          fi: {
            "cross_product_search_dialog.confluence.tab_label": "Confluence",
            "cross_product_search_dialog.jira.tab_label": "Jira",
            "global_search.jira.advanced_issue_search_label": "Tarkennettu asiahaku",
            "global_search.jira.advanced_search_boards": "Taulut",
            "global_search.jira.advanced_search_filters": "Suodattimet",
            "global_search.jira.advanced_search_issues": "Asiat",
            "global_search.jira.advanced_search_label": "Siirry kaikkiin:",
            "global_search.jira.advanced_search_people": "Henkilöt",
            "global_search.jira.advanced_search_projects": "Projektit",
            "global_search.jira.search_placeholder": "Hae Jirasta",
            "product_search_dialog.confluence.advanced_search_with_product_prefix": "Confluencen tarkennettu haku",
            "product_search_dialog.confluence.assignee_filters_find_more": "Etsi käsittelijä",
            "product_search_dialog.confluence.clear_filters": "Tyhjennä suodattimet",
            "product_search_dialog.confluence.contributor_filters": "Suodata osallistujan perusteella",
            "product_search_dialog.confluence.contributor_filters_find_more": "Hae tekijää",
            "product_search_dialog.confluence.filters_applied": "Jotkin suodattimet näyttävät olevan käytössä",
            "product_search_dialog.confluence.pages_blogs_attachments_section_heading": "Sivut, blogit ja liitteet",
            "product_search_dialog.confluence.people_section_heading": "Henkilöt",
            "product_search_dialog.confluence.search_input_expanded_placeholder": "Hae Confluencesta",
            "product_search_dialog.confluence.space_filters": "Suodata työtilan perusteella",
            "product_search_dialog.confluence.space_filters_find_more": "Hae työtilaa",
            "product_search_dialog.confluence.spaces_section_heading": "Työtilat",
            "product_search_dialog.empty.no_results_body": "Yritä uudelleen eri sanalla tai tarkenna tuloksia <a>tarkennetulla haulla</a>",
            "product_search_dialog.empty.no_results_heading": "Emme löytäneet hakuasi vastaavia osumia.",
            "product_search_dialog.error.failed_search_body": "Kyseessä voi olla vain ohimenevä vika. Kokeile, ratkeaako ongelma <a>yrittämällä uudelleen.</a>",
            "product_search_dialog.error.failed_search_heading": "Haussa tapahtui virhe",
            "product_search_dialog.give_feedback": "Anna palautetta",
            "product_search_dialog.jira.advanced_search_with_product_prefix": "Jiran tarkennettu asiahaku",
            "product_search_dialog.jira.assignee_filters": "Suodata käsittelijän mukaan",
            "product_search_dialog.jira.boards_icon_accessibility_text": "Taulun kuvake",
            "product_search_dialog.jira.boards_projects_filters_section_heading": "Taulut, projektit ja suodattimet",
            "product_search_dialog.jira.issues_section_heading": "Asiat",
            "product_search_dialog.jira.project_filters": "Suodata projektin mukaan",
            "product_search_dialog.jira.project_filters_find_more": "Etsi projekti",
            "product_search_dialog.jira.recent_boards_projects_filters_section_heading": "Viimeisimmät taulut, projektit ja suodattimet",
            "product_search_dialog.jira.recently_viewed_issues_section_heading": "Viimeksi näytetyt asiat",
            "product_search_dialog.jira.view_all_issues": "Asioiden tarkennettu haku",
            "product_search_dialog.more_filters": "Näytä kaikki suodattimet",
            "product_search_dialog.recent_spaces_section_heading": "Viimeksi käytetyt työtilat",
            "product_search_dialog.recently_viewed_heading": "Tarkennettu haku",
            "product_search_dialog.recently_viewed_section_heading": "Viimeksi katsotut",
            "product_search_dialog.recently_worked_with_section_heading": "Viimeksi tehty",
            "product_search_dialog.search_input_collapsed_placeholder": "Haku",
            "product_search_dialog.search_people_link": "Etsi ihmisiä",
            "product_search_dialog.show_all_results_link": "Näytä kaikki tulokset",
            "product_search_dialog.show_more_results_link": "Näytä lisää",
            "search_dialog.filters.group.show-more": "Näytä lisää"
          },
          fr: {
            "cross_product_search_dialog.confluence.tab_label": "Confluence",
            "cross_product_search_dialog.jira.tab_label": "Jira",
            "global_search.jira.advanced_issue_search_label": "Recherche avancée de tickets",
            "global_search.jira.advanced_search_boards": "Tableaux",
            "global_search.jira.advanced_search_filters": "Filtres",
            "global_search.jira.advanced_search_issues": "Tickets",
            "global_search.jira.advanced_search_label": "Accédez à tous les :",
            "global_search.jira.advanced_search_people": "Personnes",
            "global_search.jira.advanced_search_projects": "Projets",
            "global_search.jira.search_placeholder": "Rechercher dans Jira",
            "product_search_dialog.confluence.advanced_search_with_product_prefix": "Recherche avancée Confluence",
            "product_search_dialog.confluence.assignee_filters_find_more": "Recherchez un responsable",
            "product_search_dialog.confluence.clear_filters": "Effacer les filtres",
            "product_search_dialog.confluence.contributor_filters": "Filtrer par contributeur",
            "product_search_dialog.confluence.contributor_filters_find_more": "Recherchez un contributeur",
            "product_search_dialog.confluence.filters_applied": "Il semble que vous avez appliqué certains filtres",
            "product_search_dialog.confluence.pages_blogs_attachments_section_heading": "Pages, blogs et pièces jointes",
            "product_search_dialog.confluence.people_section_heading": "Personnes",
            "product_search_dialog.confluence.search_input_expanded_placeholder": "Rechercher sur Confluence",
            "product_search_dialog.confluence.space_filters": "Filtrer par espace",
            "product_search_dialog.confluence.space_filters_find_more": "Recherchez un espace",
            "product_search_dialog.confluence.spaces_section_heading": "Espaces",
            "product_search_dialog.empty.no_results_body": "Réessayez avec un autre terme ou affinez vos résultats grâce à la <a>recherche avancée</a>",
            "product_search_dialog.empty.no_results_heading": "Aucun résultat pour votre recherche.",
            "product_search_dialog.error.failed_search_body": "Ce n'est peut-être que temporaire. La meilleure chose à faire est de <a>réessayer</a>.",
            "product_search_dialog.error.failed_search_heading": "La recherche n'a pas pu aboutir",
            "product_search_dialog.give_feedback": "Envoyer des commentaires",
            "product_search_dialog.jira.advanced_search_with_product_prefix": "Recherche avancée de tickets Jira",
            "product_search_dialog.jira.assignee_filters": "Filtrez par responsable",
            "product_search_dialog.jira.boards_icon_accessibility_text": "Icône de tableau",
            "product_search_dialog.jira.boards_projects_filters_section_heading": "Tableaux, projets et filtres",
            "product_search_dialog.jira.issues_section_heading": "Tickets",
            "product_search_dialog.jira.project_filters": "Filtrez par projet",
            "product_search_dialog.jira.project_filters_find_more": "Recherchez un projet",
            "product_search_dialog.jira.recent_boards_projects_filters_section_heading": "Tableaux, projets et filtres récents",
            "product_search_dialog.jira.recently_viewed_issues_section_heading": "Tickets récemment consultés",
            "product_search_dialog.jira.view_all_issues": "Recherche de tickets avancée",
            "product_search_dialog.more_filters": "Afficher tous les filtres",
            "product_search_dialog.recent_spaces_section_heading": "Espaces récents",
            "product_search_dialog.recently_viewed_heading": "Recherche avancée",
            "product_search_dialog.recently_viewed_section_heading": "Récemment consulté(s)",
            "product_search_dialog.recently_worked_with_section_heading": "Collaborateurs récents",
            "product_search_dialog.search_input_collapsed_placeholder": "Rechercher",
            "product_search_dialog.search_people_link": "Rechercher des personnes",
            "product_search_dialog.show_all_results_link": "Afficher tous les résultats",
            "product_search_dialog.show_more_results_link": "Afficher plus",
            "search_dialog.filters.group.show-more": "Afficher plus"
          },
          hu: {
            "cross_product_search_dialog.confluence.tab_label": "Confluence",
            "cross_product_search_dialog.jira.tab_label": "Jira",
            "global_search.jira.advanced_issue_search_label": "Speciális ügykeresés",
            "global_search.jira.advanced_search_boards": "Táblák",
            "global_search.jira.advanced_search_filters": "Szűrők",
            "global_search.jira.advanced_search_issues": "Ügyek",
            "global_search.jira.advanced_search_label": "Az összes megtekintése:",
            "global_search.jira.advanced_search_people": "Személyek",
            "global_search.jira.advanced_search_projects": "Projektek",
            "global_search.jira.search_placeholder": "Keresés a Jirában",
            "product_search_dialog.confluence.advanced_search_with_product_prefix": "Confluence speciális keresés",
            "product_search_dialog.confluence.assignee_filters_find_more": "Hozzárendelt személy keresése",
            "product_search_dialog.confluence.clear_filters": "Szűrők törlése",
            "product_search_dialog.confluence.contributor_filters": "Szűrés közreműködő alapján",
            "product_search_dialog.confluence.contributor_filters_find_more": "Közreműködő keresése",
            "product_search_dialog.confluence.filters_applied": "Úgy tűnik, néhány szűrő aktív",
            "product_search_dialog.confluence.pages_blogs_attachments_section_heading": "Oldalak, blogok és csatolmányok",
            "product_search_dialog.confluence.people_section_heading": "Személyek",
            "product_search_dialog.confluence.search_input_expanded_placeholder": "Keresés Confluence-ben",
            "product_search_dialog.confluence.space_filters": "Szűrés munkatér alapján",
            "product_search_dialog.confluence.space_filters_find_more": "Munkatér keresése",
            "product_search_dialog.confluence.spaces_section_heading": "Munkaterek",
            "product_search_dialog.empty.no_results_body": "Próbálkozz másik kifejezéssel, vagy finomíts a találatokon a <a>Speciális keresés</a> használatával",
            "product_search_dialog.empty.no_results_heading": "A keresés nem hozott eredményt.",
            "product_search_dialog.error.failed_search_body": "Lehet, hogy csak átmeneti a probléma. A legjobb, ha <a>újrapróbálkozol.</a>",
            "product_search_dialog.error.failed_search_heading": "Hiba történt a keresés közben.",
            "product_search_dialog.give_feedback": "Visszajelzés küldése",
            "product_search_dialog.jira.advanced_search_with_product_prefix": "Jira speciális ügykeresés",
            "product_search_dialog.jira.assignee_filters": "Szűrés hozzárendelt személy szerint",
            "product_search_dialog.jira.boards_icon_accessibility_text": "Tábla ikonja",
            "product_search_dialog.jira.boards_projects_filters_section_heading": "Táblák, Projektek és Szűrők",
            "product_search_dialog.jira.issues_section_heading": "Ügyek",
            "product_search_dialog.jira.project_filters": "Szűrés projekt szerint",
            "product_search_dialog.jira.project_filters_find_more": "Projekt keresése",
            "product_search_dialog.jira.recent_boards_projects_filters_section_heading": "Legutóbbi Táblák, Projektek és Szűrők",
            "product_search_dialog.jira.recently_viewed_issues_section_heading": "Legutóbb megtekintett ügyek",
            "product_search_dialog.jira.view_all_issues": "Speciális keresés az ügyekben",
            "product_search_dialog.more_filters": "Összes szűrő megtekintése",
            "product_search_dialog.recent_spaces_section_heading": "Legutóbbi munkaterek",
            "product_search_dialog.recently_viewed_heading": "Speciális keresés",
            "product_search_dialog.recently_viewed_section_heading": "Legutóbb megtekintett",
            "product_search_dialog.recently_worked_with_section_heading": "Nemrég együtt dolgoztál vele:",
            "product_search_dialog.search_input_collapsed_placeholder": "Keresés",
            "product_search_dialog.search_people_link": "Személyek keresése",
            "product_search_dialog.show_all_results_link": "Az összes találat megtekintése",
            "product_search_dialog.show_more_results_link": "Több megjelenítése",
            "search_dialog.filters.group.show-more": "Több megjelenítése"
          },
          is: {
            "global_search.confluence.no_results_in_space": "Engar niðurstöður í ‚{spaceTitle}‘",
            "global_search.confluence.remove_space_filter": "Fjarlægja svæðissíu",
            "global_search.confluence.space_filter": "Sía niðurstöður eftir svæði",
            "global_search.confluence.more_filters": "Fleiri síuvalkostir",
            "global_search.confluence.recent_pages_heading": "Nýlegar síður og blogg",
            "global_search.confluence.recent_spaces_heading": "Nýleg svæði",
            "global_search.confluence.search_placeholder": "Leita í Confluence",
            "global_search.confluence.spaces_heading": "Svæði",
            "global_search.confluence.confluence_objects_heading": "Síður, blogg og viðhengi",
            "global_search.confluence.advanced_search": "Ítarleg leit",
            "global_search.confluence.advanced_search_filters": "Ítarleg leit með síum",
            "global_search.confluence.advanced_search_for": 'Ítarleg leit að "{query}"',
            "global_search.no_recent_activity_title": "Leitaðu þess sem þú þarft",
            "global_search.no_recent_activity_body": "Eða notaðu<a href={url}>ítarleg leit</a> (`shift + enter`) til að þrengja niðurstöðurnar.",
            "global_search.no_results_title": "Okkur tókst ekki að finna neitt sem samræmdust leit þinni",
            "global_search.no_results_body": "Reyndu aftur með öðru leitarorði, eða fínstillt niðurstöðurnar þínar með ítarlegu leitinni okkar.",
            "global_search.people.recent_people_heading": "Nýlega unnið með",
            "global_search.people.people_heading": "Fólk",
            "global_search.people.advanced_search": "Leita að fólki",
            "global_search.search_error_title": "Við eigum í vandræðum með að leita.",
            "global_search.search_error_body": "Þetta gæti bara verið smá hnökri. Best er að {link}.",
            "global_search.search_error_body.link": "reyna aftur",
            "global_search.jira.search_placeholder": "Leita í Jira",
            "global_search.jira.recent_issues_heading": "Nýleg málefni",
            "global_search.jira.recent_people_heading": "Nýlega unnið með",
            "global_search.jira.recent_containers": "Nýlegar töflur, verkefni og síur",
            "global_search.jira.recent_core_containers": "Nýlegar verkefni og síur",
            "global_search.jira.search_result_issues_heading": "Málefni",
            "global_search.jira.search_result_containers_heading": "Töflur, verkefni og síur",
            "global_search.jira.search_result_core_containers_heading": "Verkefni og síur",
            "global_search.jira.search_result_people_heading": "Fólk",
            "global_search.jira.advanced_search": "Skoða allt:",
            "global_search.jira.advanced_search_issues": "Vandamál",
            "global_search.jira.advanced_search_projects": "Verkefni",
            "global_search.jira.advanced_search_boards": "Borð",
            "global_search.jira.advanced_search_filters": "Síur",
            "global_search.jira.advanced_search_people": "Fólk",
            "global_search.jira.advanced_issue_search": "Ítarleg leit fyrir málefni",
            "global_search.jira.view_all_issues": "Skoða öll vandamál",
            "global_search.jira.no_results_title": "Okkur tókst ekki að finna neitt sem samræmdust leit þinni",
            "global_search.jira.no_results_body": "Reyna aftur með öðru orðasambandi.",
            "global_search.jira.no_recent_activity_body": "Eða fínstillt niðurstöðurnar þínar með ítarlegu leitinni okkar.",
            "global_search.jira.project_type.business_project": "Viðskiptaverkefni",
            "global_search.jira.project_type.software_project": "Verkefni hugbúnaðar",
            "global_search.jira.project_type.service_desk_project": "Verkefni þjónustuborðs",
            "global_search.jira.project_type.ops_project": "Aðgerðaverkefni",
            "global_search.jira.result_type.board": "Tafla",
            "global_search.jira.result_type.filter": "Sía",
            "global_search.give_feedback": "Senda athugasemdir",
            "global_search.show_more_button_text": "Sýna {itemsPerPage} fleiri niðurstöður",
            "global_search.show_more_button_advanced_search": "Fínstillt niðurstöðurnar með ítarlegu leitinni",
            "global_search.confluence.subtext_with_modified_date": "{containerName}.  Uppfært {friendlyLastModified}"
          },
          it: {
            "cross_product_search_dialog.confluence.tab_label": "Confluence",
            "cross_product_search_dialog.jira.tab_label": "Jira",
            "global_search.jira.advanced_issue_search_label": "Ricerca avanzata dei ticket",
            "global_search.jira.advanced_search_boards": "Board",
            "global_search.jira.advanced_search_filters": "Filtri",
            "global_search.jira.advanced_search_issues": "Ticket",
            "global_search.jira.advanced_search_label": "Vai a tutti i:",
            "global_search.jira.advanced_search_people": "Persone",
            "global_search.jira.advanced_search_projects": "Progetti",
            "global_search.jira.search_placeholder": "Cerca su Jira",
            "product_search_dialog.confluence.advanced_search_with_product_prefix": "Ricerca avanzata di Confluence",
            "product_search_dialog.confluence.assignee_filters_find_more": "Trova un assegnatario",
            "product_search_dialog.confluence.clear_filters": "Cancella filtri",
            "product_search_dialog.confluence.contributor_filters": "Filtra per collaboratore",
            "product_search_dialog.confluence.contributor_filters_find_more": "Trova un collaboratore",
            "product_search_dialog.confluence.filters_applied": "Sembra che tu abbia applicato alcuni filtri",
            "product_search_dialog.confluence.pages_blogs_attachments_section_heading": "Pagine, blog e allegati",
            "product_search_dialog.confluence.people_section_heading": "Persone",
            "product_search_dialog.confluence.search_input_expanded_placeholder": "Cerca in Confluence",
            "product_search_dialog.confluence.space_filters": "Filtra per spazio",
            "product_search_dialog.confluence.space_filters_find_more": "Trova uno spazio",
            "product_search_dialog.confluence.spaces_section_heading": "Spazi",
            "product_search_dialog.empty.no_results_body": "Riprova con un termine diverso o circoscrivi i risultati con la <a>Ricerca avanzata</a>",
            "product_search_dialog.empty.no_results_heading": "Impossibile trovare elementi corrispondenti alla ricerca.",
            "product_search_dialog.error.failed_search_body": "Potrebbe essersi verificato un problema. La migliore soluzione è <a>riprovare</a>.",
            "product_search_dialog.error.failed_search_heading": "Si sono verificati problemi nella ricerca",
            "product_search_dialog.give_feedback": "Lascia un feedback",
            "product_search_dialog.jira.advanced_search_with_product_prefix": "Ricerca avanzata dei ticket Jira",
            "product_search_dialog.jira.assignee_filters": "Filtra per assegnatario",
            "product_search_dialog.jira.boards_icon_accessibility_text": "Icona board",
            "product_search_dialog.jira.boards_projects_filters_section_heading": "Board, progetti e filtri",
            "product_search_dialog.jira.issues_section_heading": "Ticket",
            "product_search_dialog.jira.project_filters": "Filtra per progetto",
            "product_search_dialog.jira.project_filters_find_more": "Trova un progetto",
            "product_search_dialog.jira.recent_boards_projects_filters_section_heading": "Board, progetti e filtri recenti",
            "product_search_dialog.jira.recently_viewed_issues_section_heading": "Ticket visualizzati di recente",
            "product_search_dialog.jira.view_all_issues": "Ricerca avanzata per i ticket",
            "product_search_dialog.more_filters": "Visualizza tutti i filtri",
            "product_search_dialog.recent_spaces_section_heading": "Spazi recenti",
            "product_search_dialog.recently_viewed_heading": "Ricerca avanzata",
            "product_search_dialog.recently_viewed_section_heading": "Visualizzati di recente",
            "product_search_dialog.recently_worked_with_section_heading": "Collaborazioni recenti con",
            "product_search_dialog.search_input_collapsed_placeholder": "Cerca",
            "product_search_dialog.search_people_link": "Cerca persone",
            "product_search_dialog.show_all_results_link": "Visualizza tutti i risultati",
            "product_search_dialog.show_more_results_link": "Mostra di più",
            "search_dialog.filters.group.show-more": "Mostra altro"
          },
          ja: {
            "cross_product_search_dialog.confluence.tab_label": "Confluence",
            "cross_product_search_dialog.jira.tab_label": "Jira",
            "global_search.jira.advanced_issue_search_label": "課題の高度な検索",
            "global_search.jira.advanced_search_boards": "ボード",
            "global_search.jira.advanced_search_filters": "フィルター",
            "global_search.jira.advanced_search_issues": "課題",
            "global_search.jira.advanced_search_label": "すべて表示:",
            "global_search.jira.advanced_search_people": "ユーザー",
            "global_search.jira.advanced_search_projects": "プロジェクト",
            "global_search.jira.search_placeholder": "Jira を検索",
            "product_search_dialog.confluence.advanced_search_with_product_prefix": "Confluence の高度な検索",
            "product_search_dialog.confluence.assignee_filters_find_more": "担当者を検索",
            "product_search_dialog.confluence.clear_filters": "フィルターを解除",
            "product_search_dialog.confluence.contributor_filters": "投稿者でフィルタリング",
            "product_search_dialog.confluence.contributor_filters_find_more": "貢献者を検索",
            "product_search_dialog.confluence.filters_applied": "フィルターが適用されているようです。",
            "product_search_dialog.confluence.pages_blogs_attachments_section_heading": "ページ、ブログ、添付書類",
            "product_search_dialog.confluence.people_section_heading": "ユーザー",
            "product_search_dialog.confluence.search_input_expanded_placeholder": "Confluence を検索",
            "product_search_dialog.confluence.space_filters": "スペースでフィルタリング",
            "product_search_dialog.confluence.space_filters_find_more": "スペースを検索",
            "product_search_dialog.confluence.spaces_section_heading": "スペース",
            "product_search_dialog.empty.no_results_body": "別の用語でもう一度試すか、結果を [<a>高度な検索</a>] で絞り込みます。",
            "product_search_dialog.empty.no_results_heading": "検索に一致するものが見つかりませんでした。",
            "product_search_dialog.error.failed_search_body": "一時的に中断されたようです。<a>再試行</a>してください。",
            "product_search_dialog.error.failed_search_heading": "検索中に問題が発生しました",
            "product_search_dialog.give_feedback": "フィードバックを送信する",
            "product_search_dialog.jira.advanced_search_with_product_prefix": "Jira の課題の高度な検索",
            "product_search_dialog.jira.assignee_filters": "担当者で絞り込み",
            "product_search_dialog.jira.boards_icon_accessibility_text": "ボードのアイコン",
            "product_search_dialog.jira.boards_projects_filters_section_heading": "ボード、プロジェクト、フィルター",
            "product_search_dialog.jira.issues_section_heading": "課題",
            "product_search_dialog.jira.project_filters": "プロジェクトで絞り込み",
            "product_search_dialog.jira.project_filters_find_more": "プロジェクトを検索",
            "product_search_dialog.jira.recent_boards_projects_filters_section_heading": "最新のボード、プロジェクト、フィルター",
            "product_search_dialog.jira.recently_viewed_issues_section_heading": "最近表示した課題",
            "product_search_dialog.jira.view_all_issues": "課題についての高度な検索",
            "product_search_dialog.more_filters": "すべてのフィルターを表示",
            "product_search_dialog.recent_spaces_section_heading": "最近使用したスペース",
            "product_search_dialog.recently_viewed_heading": "高度な検索",
            "product_search_dialog.recently_viewed_section_heading": "最近表示したアイテム",
            "product_search_dialog.recently_worked_with_section_heading": "最近のコラボレーション",
            "product_search_dialog.search_input_collapsed_placeholder": "検索",
            "product_search_dialog.search_people_link": "ユーザーを検索",
            "product_search_dialog.show_all_results_link": "すべての結果を表示",
            "product_search_dialog.show_more_results_link": "詳細を表示する",
            "search_dialog.filters.group.show-more": "さらに表示"
          },
          ko: {
            "cross_product_search_dialog.confluence.tab_label": "Confluence",
            "cross_product_search_dialog.jira.tab_label": "Jira",
            "global_search.jira.advanced_issue_search_label": "고급 이슈 검색",
            "global_search.jira.advanced_search_boards": "보드",
            "global_search.jira.advanced_search_filters": "필터",
            "global_search.jira.advanced_search_issues": "이슈",
            "global_search.jira.advanced_search_label": "모든 항목으로 이동:",
            "global_search.jira.advanced_search_people": "사용자",
            "global_search.jira.advanced_search_projects": "프로젝트",
            "global_search.jira.search_placeholder": "Jira 검색",
            "product_search_dialog.confluence.advanced_search_with_product_prefix": "Confluence 고급 검색",
            "product_search_dialog.confluence.assignee_filters_find_more": "담당자 찾기",
            "product_search_dialog.confluence.clear_filters": "필터 지우기",
            "product_search_dialog.confluence.contributor_filters": "기여자별로 필터링",
            "product_search_dialog.confluence.contributor_filters_find_more": "기여자 찾기",
            "product_search_dialog.confluence.filters_applied": "몇 가지 필터가 적용된 것 같습니다.",
            "product_search_dialog.confluence.pages_blogs_attachments_section_heading": "페이지, 블로그 및 첨부 파일",
            "product_search_dialog.confluence.people_section_heading": "사용자",
            "product_search_dialog.confluence.search_input_expanded_placeholder": "Confluence 검색",
            "product_search_dialog.confluence.space_filters": "스페이스별로 필터링",
            "product_search_dialog.confluence.space_filters_find_more": "스페이스 찾기",
            "product_search_dialog.confluence.spaces_section_heading": "스페이스",
            "product_search_dialog.empty.no_results_body": "다른 용어로 다시 시도하거나, <a>고급 검색</a>으로 상세한 결과를 얻으세요.",
            "product_search_dialog.empty.no_results_heading": "검색어와 일치하는 결과를 찾을 수 없습니다.",
            "product_search_dialog.error.failed_search_body": "일시적인 문제일 수 있습니다. 가장 좋은 방법은 <a>다시 시도</a>해 보는 것입니다.",
            "product_search_dialog.error.failed_search_heading": "검색 중 문제 발생",
            "product_search_dialog.give_feedback": "피드백 보내기",
            "product_search_dialog.jira.advanced_search_with_product_prefix": "Jira 고급 이슈 검색",
            "product_search_dialog.jira.assignee_filters": "담당자로 필터링",
            "product_search_dialog.jira.boards_icon_accessibility_text": "보드 아이콘",
            "product_search_dialog.jira.boards_projects_filters_section_heading": "보드, 프로젝트 및 필터",
            "product_search_dialog.jira.issues_section_heading": "이슈",
            "product_search_dialog.jira.project_filters": "프로젝트로 필터링",
            "product_search_dialog.jira.project_filters_find_more": "프로젝트 찾기",
            "product_search_dialog.jira.recent_boards_projects_filters_section_heading": "최근에 사용한 보드, 프로젝트 및 필터",
            "product_search_dialog.jira.recently_viewed_issues_section_heading": "최근에 본 이슈",
            "product_search_dialog.jira.view_all_issues": "이슈에 대한 고급 검색",
            "product_search_dialog.more_filters": "모든 필터 보기",
            "product_search_dialog.recent_spaces_section_heading": "최근에 사용한 스페이스",
            "product_search_dialog.recently_viewed_heading": "고급 검색",
            "product_search_dialog.recently_viewed_section_heading": "최근에 본 항목",
            "product_search_dialog.recently_worked_with_section_heading": "최근에 함께한 작업자",
            "product_search_dialog.search_input_collapsed_placeholder": "검색",
            "product_search_dialog.search_people_link": "사용자 검색",
            "product_search_dialog.show_all_results_link": "모든 결과 보기",
            "product_search_dialog.show_more_results_link": "더 보기",
            "search_dialog.filters.group.show-more": "더 보기"
          },
          nb: {
            "cross_product_search_dialog.confluence.tab_label": "Confluence",
            "cross_product_search_dialog.jira.tab_label": "Jira",
            "global_search.jira.advanced_issue_search_label": "Avansert sakssøk",
            "global_search.jira.advanced_search_boards": "Tavler",
            "global_search.jira.advanced_search_filters": "Filtre",
            "global_search.jira.advanced_search_issues": "Saker",
            "global_search.jira.advanced_search_label": "Gå til alle:",
            "global_search.jira.advanced_search_people": "Folk",
            "global_search.jira.advanced_search_projects": "Prosjekter",
            "global_search.jira.search_placeholder": "Søk i Jira",
            "product_search_dialog.confluence.advanced_search_with_product_prefix": "Avansert Confluence-søk",
            "product_search_dialog.confluence.assignee_filters_find_more": "Finn en tilordnet person",
            "product_search_dialog.confluence.clear_filters": "Tøm filtre",
            "product_search_dialog.confluence.contributor_filters": "Filtrer etter bidragsyter",
            "product_search_dialog.confluence.contributor_filters_find_more": "Finn en bidragsyter",
            "product_search_dialog.confluence.filters_applied": "Ser ut som du har noen filtre aktivert",
            "product_search_dialog.confluence.pages_blogs_attachments_section_heading": "Sider, blogger og vedlegg",
            "product_search_dialog.confluence.people_section_heading": "Personer",
            "product_search_dialog.confluence.search_input_expanded_placeholder": "Søk i Confluence",
            "product_search_dialog.confluence.space_filters": "Filtrer etter område",
            "product_search_dialog.confluence.space_filters_find_more": "Finn et område",
            "product_search_dialog.confluence.spaces_section_heading": "Områder",
            "product_search_dialog.empty.no_results_body": "Prøv på nytt med et annet team, eller avgrens resultatene med <a>Avansert søk</a>",
            "product_search_dialog.empty.no_results_heading": "Vi finner ingenting som samsvarer med søket ditt.",
            "product_search_dialog.error.failed_search_body": "Det kan være et midlertidig problem. Det beste er å <a>prøve på nytt.</a>",
            "product_search_dialog.error.failed_search_heading": "Vi har problemer med å søke",
            "product_search_dialog.give_feedback": "Gi tilbakemelding",
            "product_search_dialog.jira.advanced_search_with_product_prefix": "Avansert Jira-sakssøk",
            "product_search_dialog.jira.assignee_filters": "Filtrer etter tilordnet person",
            "product_search_dialog.jira.boards_icon_accessibility_text": "Tavleikon",
            "product_search_dialog.jira.boards_projects_filters_section_heading": "Tavler, prosjekter og filtre",
            "product_search_dialog.jira.issues_section_heading": "Saker",
            "product_search_dialog.jira.project_filters": "Filtrer etter prosjekt",
            "product_search_dialog.jira.project_filters_find_more": "Finn et prosjekt",
            "product_search_dialog.jira.recent_boards_projects_filters_section_heading": "Nylige tavler, prosjekter og filtre",
            "product_search_dialog.jira.recently_viewed_issues_section_heading": "Nylig viste saker",
            "product_search_dialog.jira.view_all_issues": "Avansert søk etter saker",
            "product_search_dialog.more_filters": "Vis alle filtre",
            "product_search_dialog.recent_spaces_section_heading": "Nylige områder",
            "product_search_dialog.recently_viewed_heading": "Avansert søk",
            "product_search_dialog.recently_viewed_section_heading": "Nylig sett",
            "product_search_dialog.recently_worked_with_section_heading": "Nylig arbeidet med",
            "product_search_dialog.search_input_collapsed_placeholder": "Søk",
            "product_search_dialog.search_people_link": "Søk etter personer",
            "product_search_dialog.show_all_results_link": "Vis alle resultater",
            "product_search_dialog.show_more_results_link": "Vis mer",
            "search_dialog.filters.group.show-more": "Vis mer"
          },
          nl: {
            "cross_product_search_dialog.confluence.tab_label": "Confluence",
            "cross_product_search_dialog.jira.tab_label": "Jira",
            "global_search.jira.advanced_issue_search_label": "Geavanceerd issues zoeken",
            "global_search.jira.advanced_search_boards": "Borden",
            "global_search.jira.advanced_search_filters": "Filters",
            "global_search.jira.advanced_search_issues": "Issues",
            "global_search.jira.advanced_search_label": "Ga naar alle:",
            "global_search.jira.advanced_search_people": "Mensen",
            "global_search.jira.advanced_search_projects": "Projecten",
            "global_search.jira.search_placeholder": "In Jira zoeken",
            "product_search_dialog.confluence.advanced_search_with_product_prefix": "Confluence geavanceerd zoeken",
            "product_search_dialog.confluence.assignee_filters_find_more": "Een uitvoerder vinden",
            "product_search_dialog.confluence.clear_filters": "Wis filters",
            "product_search_dialog.confluence.contributor_filters": "Op bijdrager filteren",
            "product_search_dialog.confluence.contributor_filters_find_more": "Vind een bijdrager",
            "product_search_dialog.confluence.filters_applied": "Het lijkt erop dat je een aantal filters hebt toegepast",
            "product_search_dialog.confluence.pages_blogs_attachments_section_heading": "Pagina's, blogs en bijlagen",
            "product_search_dialog.confluence.people_section_heading": "Gebruikers",
            "product_search_dialog.confluence.search_input_expanded_placeholder": "Zoeken in Confluence",
            "product_search_dialog.confluence.space_filters": "Op space filteren",
            "product_search_dialog.confluence.space_filters_find_more": "Vind een space",
            "product_search_dialog.confluence.spaces_section_heading": "Spaces",
            "product_search_dialog.empty.no_results_body": "Probeer het opnieuw met een andere term, of verfijn je resultaten met <a>Geavanceerd zoeken</a>",
            "product_search_dialog.empty.no_results_heading": "We hebben geen resultaten gevonden.",
            "product_search_dialog.error.failed_search_body": "Dit is mogelijk gewoon een foutje. Het beste kun je het <a>nogmaals proberen.</a>",
            "product_search_dialog.error.failed_search_heading": "Er was een kink in de kabel tijdens het zoeken",
            "product_search_dialog.give_feedback": "Geef feedback",
            "product_search_dialog.jira.advanced_search_with_product_prefix": "Jira geavanceerd issues zoeken",
            "product_search_dialog.jira.assignee_filters": "Op uitvoerder filteren",
            "product_search_dialog.jira.boards_icon_accessibility_text": "Pictogram Bord",
            "product_search_dialog.jira.boards_projects_filters_section_heading": "Borden, projecten en filters",
            "product_search_dialog.jira.issues_section_heading": "Issues",
            "product_search_dialog.jira.project_filters": "Op project filteren",
            "product_search_dialog.jira.project_filters_find_more": "Een project vinden",
            "product_search_dialog.jira.recent_boards_projects_filters_section_heading": "Recente borden, projecten en filters",
            "product_search_dialog.jira.recently_viewed_issues_section_heading": "Onlangs bekeken issues",
            "product_search_dialog.jira.view_all_issues": "Geavanceerd zoeken naar issues",
            "product_search_dialog.more_filters": "Alle filters bekijken",
            "product_search_dialog.recent_spaces_section_heading": "Recente spaces",
            "product_search_dialog.recently_viewed_heading": "Geavanceerd zoeken",
            "product_search_dialog.recently_viewed_section_heading": "Onlangs bekeken",
            "product_search_dialog.recently_worked_with_section_heading": "Recent gewerkt met",
            "product_search_dialog.search_input_collapsed_placeholder": "Zoeken",
            "product_search_dialog.search_people_link": "Gebruikers zoeken",
            "product_search_dialog.show_all_results_link": "Bekijk alle resultaten",
            "product_search_dialog.show_more_results_link": "Meer weergeven",
            "search_dialog.filters.group.show-more": "Meer tonen"
          },
          pl: {
            "cross_product_search_dialog.confluence.tab_label": "Confluence",
            "cross_product_search_dialog.jira.tab_label": "Jira",
            "global_search.jira.advanced_issue_search_label": "Zaawansowane wyszukiwanie zgłoszeń",
            "global_search.jira.advanced_search_boards": "Tablice",
            "global_search.jira.advanced_search_filters": "Filtry",
            "global_search.jira.advanced_search_issues": "Zgłoszenia",
            "global_search.jira.advanced_search_label": "Zobacz wszystkie:",
            "global_search.jira.advanced_search_people": "Osoby",
            "global_search.jira.advanced_search_projects": "Projekty",
            "global_search.jira.search_placeholder": "Szukaj w Jira",
            "product_search_dialog.confluence.advanced_search_with_product_prefix": "Wyszukiwanie zaawansowane Confluence",
            "product_search_dialog.confluence.assignee_filters_find_more": "Znajdź osobę przypisaną",
            "product_search_dialog.confluence.clear_filters": "Usuń filtry",
            "product_search_dialog.confluence.contributor_filters": "Filtruj według uczestnika",
            "product_search_dialog.confluence.contributor_filters_find_more": "Znajdź autora",
            "product_search_dialog.confluence.filters_applied": "Wygląda na to, że zastosowano kilka filtrów",
            "product_search_dialog.confluence.pages_blogs_attachments_section_heading": "Strony, blogi i załączniki",
            "product_search_dialog.confluence.people_section_heading": "Osoby",
            "product_search_dialog.confluence.search_input_expanded_placeholder": "Wyszukaj w Confluence",
            "product_search_dialog.confluence.space_filters": "Filtruj według przestrzeni",
            "product_search_dialog.confluence.space_filters_find_more": "Znajdź przestrzeń",
            "product_search_dialog.confluence.spaces_section_heading": "Przestrzenie",
            "product_search_dialog.empty.no_results_body": "Spróbuj ponownie, wpisując inny termin, lub zawęź wyniki wyszukiwania za pomocą <a>Wyszukiwania zaawansowanego</a>",
            "product_search_dialog.empty.no_results_heading": "Nie znaleźliśmy niczego, co pasowałoby do Twojego wyszukiwania.",
            "product_search_dialog.error.failed_search_body": "To może być tylko drobny błąd. Najlepiej będzie <a>spróbować ponownie.</a>",
            "product_search_dialog.error.failed_search_heading": "Mamy problem z wyszukiwaniem",
            "product_search_dialog.give_feedback": "Przekaż opinię",
            "product_search_dialog.jira.advanced_search_with_product_prefix": "Zaawansowane wyszukiwanie zgłoszeń Jira",
            "product_search_dialog.jira.assignee_filters": "Filtruj według osób przypisanych",
            "product_search_dialog.jira.boards_icon_accessibility_text": "Ikona tablicy",
            "product_search_dialog.jira.boards_projects_filters_section_heading": "Tablice, projekty i filtry",
            "product_search_dialog.jira.issues_section_heading": "Zgłoszenia",
            "product_search_dialog.jira.project_filters": "Filtruj według projektów",
            "product_search_dialog.jira.project_filters_find_more": "Znajdź projekt",
            "product_search_dialog.jira.recent_boards_projects_filters_section_heading": "Ostatnie tablice, projekty i filtry",
            "product_search_dialog.jira.recently_viewed_issues_section_heading": "Ostatnio przeglądane zgłoszenia",
            "product_search_dialog.jira.view_all_issues": "Zaawansowane wyszukiwanie zgłoszeń",
            "product_search_dialog.more_filters": "Wyświetl wszystkie filtry",
            "product_search_dialog.recent_spaces_section_heading": "Ostatnie przestrzenie",
            "product_search_dialog.recently_viewed_heading": "Wyszukiwanie zaawansowane",
            "product_search_dialog.recently_viewed_section_heading": "Ostatnio wyświetlane",
            "product_search_dialog.recently_worked_with_section_heading": "Ostatnio pracowano z",
            "product_search_dialog.search_input_collapsed_placeholder": "Wyszukaj",
            "product_search_dialog.search_people_link": "Wyszukaj osoby",
            "product_search_dialog.show_all_results_link": "Wyświetl wszystkie wyniki",
            "product_search_dialog.show_more_results_link": "Pokaż więcej",
            "search_dialog.filters.group.show-more": "Pokaż więcej"
          },
          pt_BR: _,
          "pt-BR": _,
          pt_PT: f,
          "pt-PT": f,
          ro: {
            "global_search.confluence.no_results_in_space": "Niciun rezultat în '{spaceTitle}'",
            "global_search.confluence.remove_space_filter": "Eliminați filtrul de spațiu",
            "global_search.confluence.space_filter": "Filtrare rezultate după spațiu",
            "global_search.confluence.more_filters": "Mai multe opțiuni de filtrare",
            "global_search.confluence.recent_pages_heading": "Pagini și blog-uri recente",
            "global_search.confluence.recent_spaces_heading": "Spații recente",
            "global_search.confluence.search_placeholder": "Căutare în Confluence",
            "global_search.confluence.spaces_heading": "Spații",
            "global_search.confluence.confluence_objects_heading": "Pagini, blog-uri și atașamente",
            "global_search.confluence.advanced_search": "Căutare avansată",
            "global_search.confluence.advanced_search_filters": "Căutare avansată cu filtre",
            "global_search.confluence.advanced_search_for": "Căutare avansată „{query}”",
            "global_search.no_recent_activity_title": "Caută elementele de care ai nevoie",
            "global_search.no_recent_activity_body": "Sau utilizează <a href={url}>căutare avansată</a> (`shift + enter`) pentru a restrânge rezultatele.",
            "global_search.no_results_title": "Nu am găsit nimic care să se potrivească cu căutarea dvs.",
            "global_search.no_results_body": "Încercați din nou cu un termen diferit sau rafinați rezultatele cu căutarea avansată.",
            "global_search.people.recent_people_heading": "Elemente cu care s-a lucrat recent",
            "global_search.people.people_heading": "Persoane",
            "global_search.people.advanced_search": "Caută persoane",
            "global_search.search_error_title": "Întâmpinăm probleme la căutare.",
            "global_search.search_error_body": "S-ar putea să fie ceva temporar. Cel mai bine este să {link}.",
            "global_search.search_error_body.link": "încearcă din nou",
            "global_search.jira.search_placeholder": "Căutare Jira",
            "global_search.jira.recent_issues_heading": "Probleme recente",
            "global_search.jira.recent_people_heading": "Elemente cu care s-a lucrat recent",
            "global_search.jira.recent_containers": "Panouri, proiecte și filtre recente",
            "global_search.jira.recent_core_containers": "Proiecte și filtre recente",
            "global_search.jira.search_result_issues_heading": "Probleme",
            "global_search.jira.search_result_containers_heading": "Panouri, proiecte și filtre",
            "global_search.jira.search_result_core_containers_heading": "Proiecte și filtre",
            "global_search.jira.search_result_people_heading": "Persoane",
            "global_search.jira.advanced_search": "Vizualizare toate:",
            "global_search.jira.advanced_search_issues": "Probleme",
            "global_search.jira.advanced_search_projects": "Proiecte",
            "global_search.jira.advanced_search_boards": "Panouri",
            "global_search.jira.advanced_search_filters": "Filtre",
            "global_search.jira.advanced_search_people": "Persoane",
            "global_search.jira.advanced_issue_search": "Căutare avansată pentru probleme",
            "global_search.jira.view_all_issues": "Vizualizați toate problemele",
            "global_search.jira.no_results_title": "Nu am găsit rezultate care să corespundă căutării",
            "global_search.jira.no_results_body": "Încercați cu un termen diferit.",
            "global_search.jira.no_recent_activity_body": "Sau rafinați-vă rezultatele cu căutarea noastră avansată.",
            "global_search.jira.project_type.business_project": "Proiect de afaceri",
            "global_search.jira.project_type.software_project": "Proiect software",
            "global_search.jira.project_type.service_desk_project": "Proiect birou de asistență",
            "global_search.jira.project_type.ops_project": "Proiect operațiuni",
            "global_search.jira.result_type.board": "Panou",
            "global_search.jira.result_type.filter": "Filtru",
            "global_search.give_feedback": "Trimiteţi-ne feedback",
            "global_search.show_more_button_text": "Afișați încă {itemsPerPage}  rezultate",
            "global_search.show_more_button_advanced_search": "Rafinați rezultatele cu căutarea avansată",
            "global_search.confluence.subtext_with_modified_date": "{containerName}  ·  A actualizat {friendlyLastModified}"
          },
          ru: {
            "cross_product_search_dialog.confluence.tab_label": "Confluence",
            "cross_product_search_dialog.jira.tab_label": "Jira",
            "global_search.jira.advanced_issue_search_label": "Расширенный поиск задач",
            "global_search.jira.advanced_search_boards": "Доски",
            "global_search.jira.advanced_search_filters": "Фильтры",
            "global_search.jira.advanced_search_issues": "Задачи",
            "global_search.jira.advanced_search_label": "Перейти ко всем результатам:",
            "global_search.jira.advanced_search_people": "Люди",
            "global_search.jira.advanced_search_projects": "Проекты",
            "global_search.jira.search_placeholder": "Поиск в Jira",
            "product_search_dialog.confluence.advanced_search_with_product_prefix": "Расширенный поиск в Confluence",
            "product_search_dialog.confluence.assignee_filters_find_more": "Найти исполнителя",
            "product_search_dialog.confluence.clear_filters": "Очистить фильтры",
            "product_search_dialog.confluence.contributor_filters": "Фильтровать по автору",
            "product_search_dialog.confluence.contributor_filters_find_more": "Найти участника",
            "product_search_dialog.confluence.filters_applied": "Похоже, вы применили некоторые фильтры",
            "product_search_dialog.confluence.pages_blogs_attachments_section_heading": "Страницы, блоги и прикрепленные материалы",
            "product_search_dialog.confluence.people_section_heading": "Люди",
            "product_search_dialog.confluence.search_input_expanded_placeholder": "Искать в Confluence",
            "product_search_dialog.confluence.space_filters": "Фильтровать по разделу",
            "product_search_dialog.confluence.space_filters_find_more": "Найти раздел",
            "product_search_dialog.confluence.spaces_section_heading": "Разделы",
            "product_search_dialog.empty.no_results_body": "Повторите попытку, указав другое условие, или уточните результаты с помощью <a>расширенного поиска</a>",
            "product_search_dialog.empty.no_results_heading": "Ваш поисковый запрос не дал результатов.",
            "product_search_dialog.error.failed_search_body": "Возможно, это случайный сбой. Рекомендуем <a>повторить попытку</a>.",
            "product_search_dialog.error.failed_search_heading": "Не удалось выполнить поиск",
            "product_search_dialog.give_feedback": "Отправить отзыв",
            "product_search_dialog.jira.advanced_search_with_product_prefix": "Расширенный поиск задач Jira",
            "product_search_dialog.jira.assignee_filters": "Фильтровать по исполнителю",
            "product_search_dialog.jira.boards_icon_accessibility_text": "Значок доски",
            "product_search_dialog.jira.boards_projects_filters_section_heading": "Доски, проекты и фильтры",
            "product_search_dialog.jira.issues_section_heading": "Задачи",
            "product_search_dialog.jira.project_filters": "Фильтровать по проекту",
            "product_search_dialog.jira.project_filters_find_more": "Найти проект",
            "product_search_dialog.jira.recent_boards_projects_filters_section_heading": "Недавние доски, проекты и фильтры",
            "product_search_dialog.jira.recently_viewed_issues_section_heading": "Недавно просмотренные задачи",
            "product_search_dialog.jira.view_all_issues": "Расширенный поиск задач",
            "product_search_dialog.more_filters": "Просмотреть все фильтры",
            "product_search_dialog.recent_spaces_section_heading": "Недавно использованные разделы",
            "product_search_dialog.recently_viewed_heading": "Расширенный поиск",
            "product_search_dialog.recently_viewed_section_heading": "Недавно просмотрено",
            "product_search_dialog.recently_worked_with_section_heading": "Совместно работали в последнее время",
            "product_search_dialog.search_input_collapsed_placeholder": "Поиск",
            "product_search_dialog.search_people_link": "Поиск людей",
            "product_search_dialog.show_all_results_link": "Просмотреть все результаты",
            "product_search_dialog.show_more_results_link": "Показать еще",
            "search_dialog.filters.group.show-more": "Показать"
          },
          sk: {
            "cross_product_search_dialog.confluence.tab_label": "Confluence",
            "cross_product_search_dialog.jira.tab_label": "Jira",
            "global_search.jira.advanced_issue_search_label": "Rozšírené vyhľadávanie problémov",
            "global_search.jira.advanced_search_boards": "Nástenky",
            "global_search.jira.advanced_search_filters": "Filtre",
            "global_search.jira.advanced_search_issues": "Problémy",
            "global_search.jira.advanced_search_label": "Prejsť na všetky:",
            "global_search.jira.advanced_search_people": "Ľudia",
            "global_search.jira.advanced_search_projects": "Projekty",
            "global_search.jira.search_placeholder": "Prehľadávať Jira",
            "product_search_dialog.confluence.advanced_search_with_product_prefix": "Rozšírené vyhľadávanie v Confluence",
            "product_search_dialog.confluence.assignee_filters_find_more": "Vyhľadajte poverenú osobu",
            "product_search_dialog.confluence.clear_filters": "Vymazať filtre",
            "product_search_dialog.confluence.contributor_filters": "Filtrovať podľa prispievateľov",
            "product_search_dialog.confluence.contributor_filters_find_more": "Vyhľadať prispievateľa",
            "product_search_dialog.confluence.filters_applied": "Zdá sa, že ste použili nejaké filtre",
            "product_search_dialog.confluence.pages_blogs_attachments_section_heading": "Stránky, blogy a prílohy",
            "product_search_dialog.confluence.people_section_heading": "Ľudia",
            "product_search_dialog.confluence.search_input_expanded_placeholder": "Hľadať v Confluence",
            "product_search_dialog.confluence.space_filters": "Filtrovať podľa priestorov",
            "product_search_dialog.confluence.space_filters_find_more": "Vyhľadať priestor",
            "product_search_dialog.confluence.spaces_section_heading": "Priestory",
            "product_search_dialog.empty.no_results_body": "Skúste zadať iný výraz alebo výberom možnosti <a>Rozšírené vyhľadávanie</a> výsledky spresnite.",
            "product_search_dialog.empty.no_results_heading": "Nepodarilo sa nám nájsť nič, čo by zodpovedalo vášmu vyhľadávaniu.",
            "product_search_dialog.error.failed_search_body": "Môže to byť iba drobný problém. Najlepšie je <a>skúsiť to znova.</a>",
            "product_search_dialog.error.failed_search_heading": "Vyskytol sa problém s vyhľadávaním",
            "product_search_dialog.give_feedback": "Poskytnúť spätnú väzbu",
            "product_search_dialog.jira.advanced_search_with_product_prefix": "Rozšírené vyhľadávanie problémov v Jira",
            "product_search_dialog.jira.assignee_filters": "Filtrovať podľa poverenej osoby",
            "product_search_dialog.jira.boards_icon_accessibility_text": "Ikona nástenky",
            "product_search_dialog.jira.boards_projects_filters_section_heading": "Nástenky, projekty a filtre",
            "product_search_dialog.jira.issues_section_heading": "Problémy",
            "product_search_dialog.jira.project_filters": "Filtrovať podľa projektu",
            "product_search_dialog.jira.project_filters_find_more": "Vyhľadajte projekt",
            "product_search_dialog.jira.recent_boards_projects_filters_section_heading": "Nedávne nástenky, projekty a filtre",
            "product_search_dialog.jira.recently_viewed_issues_section_heading": "Nedávno zobrazené problémy",
            "product_search_dialog.jira.view_all_issues": "Rozšírené hľadanie problémov",
            "product_search_dialog.more_filters": "Zobraziť všetky filtre",
            "product_search_dialog.recent_spaces_section_heading": "Naposledy použité priestory",
            "product_search_dialog.recently_viewed_heading": "Rozšírené vyhľadávanie",
            "product_search_dialog.recently_viewed_section_heading": "Naposledy zobrazené",
            "product_search_dialog.recently_worked_with_section_heading": "Posledná spolupráca:",
            "product_search_dialog.search_input_collapsed_placeholder": "Vyhľadať",
            "product_search_dialog.search_people_link": "Vyhľadať ľudí",
            "product_search_dialog.show_all_results_link": "Zobraziť všetky výsledky",
            "product_search_dialog.show_more_results_link": "Zobraziť viac",
            "search_dialog.filters.group.show-more": "Zobraziť viac"
          },
          sv: {
            "cross_product_search_dialog.confluence.tab_label": "Confluence",
            "cross_product_search_dialog.jira.tab_label": "Jira",
            "global_search.jira.advanced_issue_search_label": "Avancerad ärendesökning",
            "global_search.jira.advanced_search_boards": "Tavlor",
            "global_search.jira.advanced_search_filters": "Filter",
            "global_search.jira.advanced_search_issues": "Ärenden",
            "global_search.jira.advanced_search_label": "Gå till alla:",
            "global_search.jira.advanced_search_people": "Personer",
            "global_search.jira.advanced_search_projects": "Projekt",
            "global_search.jira.search_placeholder": "Sök i Jira",
            "product_search_dialog.confluence.advanced_search_with_product_prefix": "Avancerad Confluence-sökning",
            "product_search_dialog.confluence.assignee_filters_find_more": "Hitta en tilldelad person",
            "product_search_dialog.confluence.clear_filters": "Rensa filter",
            "product_search_dialog.confluence.contributor_filters": "Filtrera efter bidragsgivare",
            "product_search_dialog.confluence.contributor_filters_find_more": "Hitta en deltagare",
            "product_search_dialog.confluence.filters_applied": "Det verkar som om du redan använder filter",
            "product_search_dialog.confluence.pages_blogs_attachments_section_heading": "Sidor, bloggar och bilagor",
            "product_search_dialog.confluence.people_section_heading": "Personer",
            "product_search_dialog.confluence.search_input_expanded_placeholder": "Sök i Confluence",
            "product_search_dialog.confluence.space_filters": "Filtrera efter utrymme",
            "product_search_dialog.confluence.space_filters_find_more": "Hitta ett utrymme",
            "product_search_dialog.confluence.spaces_section_heading": "Utrymmen",
            "product_search_dialog.empty.no_results_body": "Försök igen med ett annat begrepp, eller förfina sökresultatet med <a>Avancerad sökning</a>",
            "product_search_dialog.empty.no_results_heading": "Vi hittade inget som matchade din sökning.",
            "product_search_dialog.error.failed_search_body": "Det var nog inget allvarligt. Det bästa du kan göra är att <a>försöka igen.</a>",
            "product_search_dialog.error.failed_search_heading": "Vi har problem med att söka",
            "product_search_dialog.give_feedback": "Lämna feedback",
            "product_search_dialog.jira.advanced_search_with_product_prefix": "Avancerad Jira-ärendesökning",
            "product_search_dialog.jira.assignee_filters": "Filtrera efter tilldelad person",
            "product_search_dialog.jira.boards_icon_accessibility_text": "Tavelikon",
            "product_search_dialog.jira.boards_projects_filters_section_heading": "Tavlor, projekt och filter",
            "product_search_dialog.jira.issues_section_heading": "Ärenden",
            "product_search_dialog.jira.project_filters": "Filtrera efter projekt",
            "product_search_dialog.jira.project_filters_find_more": "Hitta ett projekt",
            "product_search_dialog.jira.recent_boards_projects_filters_section_heading": "Senaste tavlor, projekt och filter",
            "product_search_dialog.jira.recently_viewed_issues_section_heading": "Nyligen visade ärenden",
            "product_search_dialog.jira.view_all_issues": "Avancerad sökning efter ärenden",
            "product_search_dialog.more_filters": "Visa alla filter",
            "product_search_dialog.recent_spaces_section_heading": "Senaste utrymmen",
            "product_search_dialog.recently_viewed_heading": "Avancerad sökning",
            "product_search_dialog.recently_viewed_section_heading": "Senast visade",
            "product_search_dialog.recently_worked_with_section_heading": "Arbetade senast med",
            "product_search_dialog.search_input_collapsed_placeholder": "Sök",
            "product_search_dialog.search_people_link": "Sök efter personer",
            "product_search_dialog.show_all_results_link": "Visa alla resultat",
            "product_search_dialog.show_more_results_link": "Visa mer",
            "search_dialog.filters.group.show-more": "Visa fler"
          },
          zh: {
            "cross_product_search_dialog.confluence.tab_label": "Confluence",
            "cross_product_search_dialog.jira.tab_label": "Jira",
            "global_search.jira.advanced_issue_search_label": "高级事务搜索",
            "global_search.jira.advanced_search_boards": "面板",
            "global_search.jira.advanced_search_filters": "筛选器",
            "global_search.jira.advanced_search_issues": "事务",
            "global_search.jira.advanced_search_label": "转至全部：",
            "global_search.jira.advanced_search_people": "人员",
            "global_search.jira.advanced_search_projects": "项目",
            "global_search.jira.search_placeholder": "搜索 Jira",
            "product_search_dialog.confluence.advanced_search_with_product_prefix": "Confluence 高级搜索",
            "product_search_dialog.confluence.assignee_filters_find_more": "查找经办人",
            "product_search_dialog.confluence.clear_filters": "清除筛选器",
            "product_search_dialog.confluence.contributor_filters": "按贡献者筛选",
            "product_search_dialog.confluence.contributor_filters_find_more": "查找贡献者",
            "product_search_dialog.confluence.filters_applied": "您似乎已经应用了一些筛选器",
            "product_search_dialog.confluence.pages_blogs_attachments_section_heading": "页面、博客和附件",
            "product_search_dialog.confluence.people_section_heading": "人员",
            "product_search_dialog.confluence.search_input_expanded_placeholder": "搜索 Confluence",
            "product_search_dialog.confluence.space_filters": "按空间筛选",
            "product_search_dialog.confluence.space_filters_find_more": "查找空间",
            "product_search_dialog.confluence.spaces_section_heading": "空间",
            "product_search_dialog.empty.no_results_body": "使用其他词语重试，或者使用<a>高级搜索</a>优化结果",
            "product_search_dialog.empty.no_results_heading": "我们找不到符合您的搜索条件的内容。",
            "product_search_dialog.error.failed_search_body": "可能出了一点小问题。最好<a>重试。</a>",
            "product_search_dialog.error.failed_search_heading": "搜索时出现问题",
            "product_search_dialog.give_feedback": "提供反馈",
            "product_search_dialog.jira.advanced_search_with_product_prefix": "Jira 高级事务搜索",
            "product_search_dialog.jira.assignee_filters": "按经办人筛选",
            "product_search_dialog.jira.boards_icon_accessibility_text": "面板图标",
            "product_search_dialog.jira.boards_projects_filters_section_heading": "面板、项目和筛选器",
            "product_search_dialog.jira.issues_section_heading": "事务",
            "product_search_dialog.jira.project_filters": "按项目筛选",
            "product_search_dialog.jira.project_filters_find_more": "查找项目",
            "product_search_dialog.jira.recent_boards_projects_filters_section_heading": "最近的面板、项目和筛选器",
            "product_search_dialog.jira.recently_viewed_issues_section_heading": "最近查看的事务",
            "product_search_dialog.jira.view_all_issues": "高级事务搜索",
            "product_search_dialog.more_filters": "查看所有筛选条件",
            "product_search_dialog.recent_spaces_section_heading": "最近的空间",
            "product_search_dialog.recently_viewed_heading": "高级搜索",
            "product_search_dialog.recently_viewed_section_heading": "最近查看的",
            "product_search_dialog.recently_worked_with_section_heading": "最近的合作人",
            "product_search_dialog.search_input_collapsed_placeholder": "搜索",
            "product_search_dialog.search_people_link": "搜索人员",
            "product_search_dialog.show_all_results_link": "查看所有结果",
            "product_search_dialog.show_more_results_link": "显示更多",
            "search_dialog.filters.group.show-more": "显示更多"
          }
        },
        h = function ( e ) {
          var r = p[ e ];
          if ( !r ) {
            var t = e.split( /[-_]/ )[ 0 ];
            r = p[ t ]
          }
          return r || ( r = u ), r
        };

      function g( e ) {
        return ( g = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function ( e ) {
          return typeof e
        } : function ( e ) {
          return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        } )( e )
      }

      function b( e, r ) {
        if ( !( e instanceof r ) ) throw new TypeError( "Cannot call a class as a function" )
      }

      function v( e, r ) {
        for ( var t = 0; t < r.length; t++ ) {
          var a = r[ t ];
          a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && ( a.writable = !0 ), Object.defineProperty( e, a.key, a )
        }
      }

      function y( e, r ) {
        return ( y = Object.setPrototypeOf || function ( e, r ) {
          return e.__proto__ = r, e
        } )( e, r )
      }

      function j( e ) {
        var r = function () {
          if ( "undefined" == typeof Reflect || !Reflect.construct ) return !1;
          if ( Reflect.construct.sham ) return !1;
          if ( "function" == typeof Proxy ) return !0;
          try {
            return Date.prototype.toString.call( Reflect.construct( Date, [], ( function () {} ) ) ), !0
          } catch ( e ) {
            return !1
          }
        }();
        return function () {
          var t, a = O( e );
          if ( r ) {
            var n = O( this ).constructor;
            t = Reflect.construct( a, arguments, n )
          } else t = a.apply( this, arguments );
          return m( this, t )
        }
      }

      function m( e, r ) {
        return !r || "object" !== g( r ) && "function" != typeof r ? function ( e ) {
          if ( void 0 === e ) throw new ReferenceError( "this hasn't been initialised - super() hasn't been called" );
          return e
        }( e ) : r
      }

      function O( e ) {
        return ( O = Object.setPrototypeOf ? Object.getPrototypeOf : function ( e ) {
          return e.__proto__ || Object.getPrototypeOf( e )
        } )( e )
      }
      var w = function ( e ) {
          ! function ( e, r ) {
            if ( "function" != typeof r && null !== r ) throw new TypeError( "Super expression must either be null or a function" );
            e.prototype = Object.create( r && r.prototype, {
              constructor: {
                value: e,
                writable: !0,
                configurable: !0
              }
            } ), r && y( e, r )
          }( o, e );
          var r, t, a, n = j( o );

          function o() {
            return b( this, o ), n.apply( this, arguments )
          }
          return r = o, ( t = [ {
            key: "render",
            value: function () {
              var e = this.props,
                r = e.intl,
                t = e.children;
              return Object( i.f )( d.d, {
                messages: h( r.locale )
              }, t )
            }
          } ] ) && v( r.prototype, t ), a && v( r, a ), o
        }( n.a.Component ),
        k = Object( d.g )( w ),
        S = t( "2wjc" ),
        P = t( "zB3U" ),
        x = function () {
          var e = Object( P.c )(),
            r = Object( S.a )().fireAnalyticsEvent;
          return Object( a.useEffect )( ( function () {
            r( {
              eventType: "operational",
              action: "exposed",
              actionSubject: "quickSearchExperiment",
              source: "searchDialog"
            } )
          } ), [ r, e ] ), null
        },
        C = t( "O4tY" ),
        E = t( "2G5l" ),
        R = function ( e ) {
          var r = e.children;
          return Object( i.f )( C.a, {
            analyticContext: {
              frontend: E.a
            },
            nonPrivacySafeAnalyticContext: {}
          }, r )
        },
        A = t( "BmjO" );

      function I( e ) {
        return function ( e ) {
          if ( Array.isArray( e ) ) return z( e )
        }( e ) || function ( e ) {
          if ( "undefined" != typeof Symbol && Symbol.iterator in Object( e ) ) return Array.from( e )
        }( e ) || function ( e, r ) {
          if ( !e ) return;
          if ( "string" == typeof e ) return z( e, r );
          var t = Object.prototype.toString.call( e ).slice( 8, -1 );
          "Object" === t && e.constructor && ( t = e.constructor.name );
          if ( "Map" === t || "Set" === t ) return Array.from( e );
          if ( "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test( t ) ) return z( e, r )
        }( e ) || function () {
          throw new TypeError( "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method." )
        }()
      }

      function z( e, r ) {
        ( null == r || r > e.length ) && ( r = e.length );
        for ( var t = 0, a = new Array( r ); t < r; t++ ) a[ t ] = e[ t ];
        return a
      }
      var T = t( "tbcT" ),
        F = t( "ZJnE" );

      function N( e ) {
        return ( N = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function ( e ) {
          return typeof e
        } : function ( e ) {
          return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        } )( e )
      }

      function D() {
        return ( D = Object.assign || function ( e ) {
          for ( var r = 1; r < arguments.length; r++ ) {
            var t = arguments[ r ];
            for ( var a in t ) Object.prototype.hasOwnProperty.call( t, a ) && ( e[ a ] = t[ a ] )
          }
          return e
        } ).apply( this, arguments )
      }

      function M( e, r ) {
        return function ( e ) {
          if ( Array.isArray( e ) ) return e
        }( e ) || function ( e, r ) {
          if ( "undefined" == typeof Symbol || !( Symbol.iterator in Object( e ) ) ) return;
          var t = [],
            a = !0,
            n = !1,
            o = void 0;
          try {
            for ( var c, i = e[ Symbol.iterator ](); !( a = ( c = i.next() ).done ) && ( t.push( c.value ), !r || t.length !== r ); a = !0 );
          } catch ( s ) {
            n = !0, o = s
          } finally {
            try {
              a || null == i.return || i.return()
            } finally {
              if ( n ) throw o
            }
          }
          return t
        }( e, r ) || function ( e, r ) {
          if ( !e ) return;
          if ( "string" == typeof e ) return J( e, r );
          var t = Object.prototype.toString.call( e ).slice( 8, -1 );
          "Object" === t && e.constructor && ( t = e.constructor.name );
          if ( "Map" === t || "Set" === t ) return Array.from( e );
          if ( "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test( t ) ) return J( e, r )
        }( e, r ) || function () {
          throw new TypeError( "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method." )
        }()
      }

      function J( e, r ) {
        ( null == r || r > e.length ) && ( r = e.length );
        for ( var t = 0, a = new Array( r ); t < r; t++ ) a[ t ] = e[ t ];
        return a
      }

      function L( e, r ) {
        if ( !( e instanceof r ) ) throw new TypeError( "Cannot call a class as a function" )
      }

      function V( e, r ) {
        for ( var t = 0; t < r.length; t++ ) {
          var a = r[ t ];
          a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && ( a.writable = !0 ), Object.defineProperty( e, a.key, a )
        }
      }

      function B( e, r ) {
        return ( B = Object.setPrototypeOf || function ( e, r ) {
          return e.__proto__ = r, e
        } )( e, r )
      }

      function H( e ) {
        var r = function () {
          if ( "undefined" == typeof Reflect || !Reflect.construct ) return !1;
          if ( Reflect.construct.sham ) return !1;
          if ( "function" == typeof Proxy ) return !0;
          try {
            return Date.prototype.toString.call( Reflect.construct( Date, [], ( function () {} ) ) ), !0
          } catch ( e ) {
            return !1
          }
        }();
        return function () {
          var t, a = U( e );
          if ( r ) {
            var n = U( this ).constructor;
            t = Reflect.construct( a, arguments, n )
          } else t = a.apply( this, arguments );
          return q( this, t )
        }
      }

      function q( e, r ) {
        return !r || "object" !== N( r ) && "function" != typeof r ? K( e ) : r
      }

      function K( e ) {
        if ( void 0 === e ) throw new ReferenceError( "this hasn't been initialised - super() hasn't been called" );
        return e
      }

      function U( e ) {
        return ( U = Object.setPrototypeOf ? Object.getPrototypeOf : function ( e ) {
          return e.__proto__ || Object.getPrototypeOf( e )
        } )( e )
      }

      function W( e, r, t ) {
        return r in e ? Object.defineProperty( e, r, {
          value: t,
          enumerable: !0,
          configurable: !0,
          writable: !0
        } ) : e[ r ] = t, e
      }
      var G = function ( e ) {
          ! function ( e, r ) {
            if ( "function" != typeof r && null !== r ) throw new TypeError( "Super expression must either be null or a function" );
            e.prototype = Object.create( r && r.prototype, {
              constructor: {
                value: e,
                writable: !0,
                configurable: !0
              }
            } ), r && B( e, r )
          }( c, e );
          var r, t, a, n = H( c );

          function c() {
            var e;
            L( this, c );
            for ( var r = arguments.length, t = new Array( r ), a = 0; a < r; a++ ) t[ a ] = arguments[ a ];
            return W( K( e = n.call.apply( n, [ this ].concat( t ) ) ), "state", {
              ref: null
            } ), W( K( e ), "timeout", void 0 ), W( K( e ), "handleKeyDown", ( function ( r ) {
              "Escape" === r.key && !r.defaultPrevented && e.props.isExpanded && ( r.preventDefault(), e.close() )
            } ) ), W( K( e ), "onBlurHandler", ( function () {
              e.timeout = setTimeout( ( function () {
                e.close()
              } ) )
            } ) ), W( K( e ), "onFocusHandler", ( function () {
              clearTimeout( e.timeout )
            } ) ), W( K( e ), "setRef", ( function ( r ) {
              e.state.ref !== r && e.setState( {
                ref: r
              } )
            } ) ), W( K( e ), "close", ( function () {
              var r = e.state.ref;
              r && r.blur(), e.props.onClose()
            } ) ), e
          }
          return r = c, ( t = [ {
            key: "render",
            value: function () {
              var e = this.props,
                r = e.isExpanded,
                t = e.theme,
                a = e.children,
                n = e.sharedClient,
                c = e.selectedTabIndex,
                d = e.products;
              return 0 === d.length ? Object( i.f )( F.a, null ) : Object( i.f )( A.a, {
                products: d,
                activeIndex: c
              }, Object( i.f )( k, null, Object( i.f )( R, null, Object( i.f )( o.a, {
                partialSearchCSS: t
              }, Object( i.f )( s, {
                onBlur: this.onBlurHandler,
                onFocus: this.onFocusHandler,
                onKeyDown: this.handleKeyDown,
                isExpanded: r
              }, Object( i.f )( l.a, {
                listenerNode: this.state.ref
              }, Object( i.f )( T.a, {
                searchClient: n,
                isMultiProduct: d.length > 1
              }, Object( i.f )( P.a, {
                sessionKey: "ssid_provider_".concat( r )
              }, r ? Object( i.f )( x, null ) : null, a ? a( this.setRef ) : null ) ) ) ) ) ) ) )
            }
          } ] ) && V( r.prototype, t ), a && V( r, a ), c
        }( n.a.Component ),
        $ = function ( e ) {
          var r = M( Object( a.useState )( 1 === e.products.length ? e.products : [] ), 2 ),
            t = r[ 0 ],
            n = r[ 1 ];
          return Object( a.useEffect )( ( function () {
            var r, t, a = !1;
            return 1 !== e.products.length && ( r = e.sharedClient, t = e.products, 0 === t.length || 1 === t.length ? Promise.resolve( t ) : r.getProductPermissions( t.slice( 1, t.length ) ).then( ( function ( e ) {
                return [ t[ 0 ] ].concat( I( e ) )
              } ) ).catch( ( function () {
                return t.slice( 0, 1 )
              } ) ) ).then( ( function ( e ) {
                !a && n( e )
              } ) ),
              function () {
                a = !0
              }
          } ), [ e.products, e.sharedClient ] ), Object( i.f )( G, D( {}, e, {
            products: t
          } ) )
        },
        Z = t( "Iy7w" ),
        Q = t( "L48P" ),
        X = t( "I50I" ),
        Y = Object( Z.a )( "div", {
          target: "ee3sr7s0",
          label: "SearchDialogWrapper"
        } )( "position:relative;width:", X.e, ";box-shadow:0 ", X.f.multiple( .5 ).px, " ", X.f.px, " ", Q.N50A, ",0 0 1px ", Q.N60A, ";border-radius:3px;background-color:#fff;overflow:hidden;margin-top:", X.f.px, ";:focus{outline:none;}@media screen and (max-width:", X.d, "px){display:flex;flex-direction:column;max-width:100%;border-radius:0;margin-top:0;flex:1;overflow:auto;}" ),
        ee = function ( e ) {
          var r = e.children;
          return Object( i.f )( Y, {
            "data-test-id": "search-dialog-dialog-wrapper",
            tabIndex: -1
          }, r )
        },
        re = t( "fDDX" ),
        te = t( "5kY4" ),
        ae = t( "Icb0" ),
        ne = t( "8PXy" );

      function oe( e, r ) {
        return function ( e ) {
          if ( Array.isArray( e ) ) return e
        }( e ) || function ( e, r ) {
          if ( "undefined" == typeof Symbol || !( Symbol.iterator in Object( e ) ) ) return;
          var t = [],
            a = !0,
            n = !1,
            o = void 0;
          try {
            for ( var c, i = e[ Symbol.iterator ](); !( a = ( c = i.next() ).done ) && ( t.push( c.value ), !r || t.length !== r ); a = !0 );
          } catch ( s ) {
            n = !0, o = s
          } finally {
            try {
              a || null == i.return || i.return()
            } finally {
              if ( n ) throw o
            }
          }
          return t
        }( e, r ) || function ( e, r ) {
          if ( !e ) return;
          if ( "string" == typeof e ) return ce( e, r );
          var t = Object.prototype.toString.call( e ).slice( 8, -1 );
          "Object" === t && e.constructor && ( t = e.constructor.name );
          if ( "Map" === t || "Set" === t ) return Array.from( e );
          if ( "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test( t ) ) return ce( e, r )
        }( e, r ) || function () {
          throw new TypeError( "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method." )
        }()
      }

      function ce( e, r ) {
        ( null == r || r > e.length ) && ( r = e.length );
        for ( var t = 0, a = new Array( r ); t < r; t++ ) a[ t ] = e[ t ];
        return a
      }

      function ie( e, r ) {
        var t = Object.keys( e );
        if ( Object.getOwnPropertySymbols ) {
          var a = Object.getOwnPropertySymbols( e );
          r && ( a = a.filter( ( function ( r ) {
            return Object.getOwnPropertyDescriptor( e, r ).enumerable
          } ) ) ), t.push.apply( t, a )
        }
        return t
      }

      function se( e ) {
        for ( var r = 1; r < arguments.length; r++ ) {
          var t = null != arguments[ r ] ? arguments[ r ] : {};
          r % 2 ? ie( Object( t ), !0 ).forEach( ( function ( r ) {
            le( e, r, t[ r ] )
          } ) ) : Object.getOwnPropertyDescriptors ? Object.defineProperties( e, Object.getOwnPropertyDescriptors( t ) ) : ie( Object( t ) ).forEach( ( function ( r ) {
            Object.defineProperty( e, r, Object.getOwnPropertyDescriptor( t, r ) )
          } ) )
        }
        return e
      }

      function le( e, r, t ) {
        return r in e ? Object.defineProperty( e, r, {
          value: t,
          enumerable: !0,
          configurable: !0,
          writable: !0
        } ) : e[ r ] = t, e
      }
      var de = {
          queryVersion: 0,
          isLoading: !1
        },
        ue = function ( e, r ) {
          switch ( r.type ) {
            case "queryVersion":
              return se( se( {}, e ), {}, {
                queryVersion: r.value
              } );
            case "isLoading":
              return se( se( {}, e ), {}, {
                isLoading: r.value
              } );
            case "reset":
              return de;
            default:
              throw new Error
          }
        },
        _e = t( "3zvG" );

      function fe( e ) {
        return ( fe = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function ( e ) {
          return typeof e
        } : function ( e ) {
          return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        } )( e )
      }
      var pe = function ( e, r ) {
          if ( e )
            if ( "function" == typeof e ) e( r );
            else {
              if ( "object" !== fe( e ) || !Object.prototype.hasOwnProperty.call( e, "current" ) ) throw new Error( "unsupported ref format, currently only callback and forward refs are supported" );
              e.current = r
            }
        },
        he = function () {
          for ( var e = arguments.length, r = new Array( e ), t = 0; t < e; t++ ) r[ t ] = arguments[ t ];
          return function ( e ) {
            r.forEach( ( function ( r ) {
              return pe( r, e )
            } ) )
          }
        };

      function ge( e ) {
        return function ( e ) {
          if ( Array.isArray( e ) ) return be( e )
        }( e ) || function ( e ) {
          if ( "undefined" != typeof Symbol && Symbol.iterator in Object( e ) ) return Array.from( e )
        }( e ) || function ( e, r ) {
          if ( !e ) return;
          if ( "string" == typeof e ) return be( e, r );
          var t = Object.prototype.toString.call( e ).slice( 8, -1 );
          "Object" === t && e.constructor && ( t = e.constructor.name );
          if ( "Map" === t || "Set" === t ) return Array.from( e );
          if ( "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test( t ) ) return be( e, r )
        }( e ) || function () {
          throw new TypeError( "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method." )
        }()
      }

      function be( e, r ) {
        ( null == r || r > e.length ) && ( r = e.length );
        for ( var t = 0, a = new Array( r ); t < r; t++ ) a[ t ] = e[ t ];
        return a
      }

      function ve( e, r ) {
        var t = Object.keys( e );
        if ( Object.getOwnPropertySymbols ) {
          var a = Object.getOwnPropertySymbols( e );
          r && ( a = a.filter( ( function ( r ) {
            return Object.getOwnPropertyDescriptor( e, r ).enumerable
          } ) ) ), t.push.apply( t, a )
        }
        return t
      }

      function ye( e ) {
        for ( var r = 1; r < arguments.length; r++ ) {
          var t = null != arguments[ r ] ? arguments[ r ] : {};
          r % 2 ? ve( Object( t ), !0 ).forEach( ( function ( r ) {
            je( e, r, t[ r ] )
          } ) ) : Object.getOwnPropertyDescriptors ? Object.defineProperties( e, Object.getOwnPropertyDescriptors( t ) ) : ve( Object( t ) ).forEach( ( function ( r ) {
            Object.defineProperty( e, r, Object.getOwnPropertyDescriptor( t, r ) )
          } ) )
        }
        return e
      }

      function je( e, r, t ) {
        return r in e ? Object.defineProperty( e, r, {
          value: t,
          enumerable: !0,
          configurable: !0,
          writable: !0
        } ) : e[ r ] = t, e
      }
      var me = Object.freeze( {} ),
        Oe = n.a.createContext( me ),
        we = function ( e ) {
          var r = e.children,
            t = e.features,
            a = ye( ye( {}, me ), t ),
            o = n.a.useMemo( ( function () {
              return a
            } ), ge( Object.values( a ) ) );
          return Object( i.f )( Oe.Provider, {
            value: o
          }, r )
        },
        ke = t( "Hjnd" ),
        Se = t( "Hh67" ),
        Pe = t( "a9u0" ),
        xe = t( "a8dO" ),
        Ce = t( "sOY4" ),
        Ee = t( "jRDN" ),
        Re = t.n( Ee ),
        Ae = t( "7Wyx" ),
        Ie = t( "6jaW" );

      function ze() {
        return ( ze = Object.assign || function ( e ) {
          for ( var r = 1; r < arguments.length; r++ ) {
            var t = arguments[ r ];
            for ( var a in t ) Object.prototype.hasOwnProperty.call( t, a ) && ( e[ a ] = t[ a ] )
          }
          return e
        } ).apply( this, arguments )
      }
      var Te = function ( e ) {
          var r = e.onInput,
            t = e.onClick,
            a = e.onEnter,
            n = e.isExpanded,
            o = e.placeholder,
            c = e.forwardRef,
            s = e.value,
            l = e.theme,
            d = e.tooltipContent,
            u = e.onBack,
            _ = function ( e ) {
              r && r( e.currentTarget.value )
            },
            f = function ( e ) {
              t && t( e )
            },
            p = d && !n ? void 0 : Ie.c;
          return Object( i.f )( xe.a, {
            content: d,
            component: p,
            position: "bottom"
          }, Object( i.f )( Ie.e, ze( {}, l, {
            isExpanded: n
          } ), Object( i.f )( Ie.d, {
            isExpanded: n
          }, Object( i.f )( Ce.a, {
            onClick: f,
            tooltip: null,
            icon: Object( i.f )( Ae.a, null )
          } ) ), Object( i.f )( Ie.b, ze( {}, l, {
            isExpanded: n,
            onClick: f,
            onKeyPress: function ( e ) {
              "Enter" === e.key && t && t()
            },
            tabIndex: 0
          } ), Object( i.f )( Ae.b, null ) ), n && Object( i.f )( Ie.a, ze( {}, l, {
            onClick: u
          } ), Object( i.f )( Re.a, {
            label: "Exit Search",
            size: "large",
            primaryColor: l.default.color
          } ) ), Object( i.f )( Ie.f, ze( {
            "data-test-id": "search-dialog-input",
            onInput: _,
            onChange: _,
            onKeyDown: function ( e ) {
              var r;
              ( null === ( r = e.nativeEvent ) || void 0 === r ? void 0 : r.isComposing ) || 229 === e.keyCode || e.defaultPrevented || "Enter" !== e.key || ( e.preventDefault(), a && a( e ) )
            },
            onClick: f,
            isExpanded: n,
            placeholder: o,
            ref: c || void 0,
            value: s,
            maxLength: 500
          }, l ) ) ) )
        },
        Fe = n.a.forwardRef( ( function ( e, r ) {
          var t = Object( o.b )();
          return Object( i.f )( Te, ze( {}, e, {
            theme: t,
            forwardRef: r
          } ) )
        } ) ),
        Ne = t( "KsTJ" );

      function De() {
        var e = Je( [ "\n  background-color: ", ";\n  border-radius: 2px;\n  margin-left: 4px;\n  padding: 1px 8px;\n  line-height: 16px;\n" ] );
        return De = function () {
          return e
        }, e
      }

      function Me() {
        var e = Je( [ "\n  display: flex;\n  line-height: 16px;\n  align-items: center;\n  padding-bottom: 1px;\n  padding-top: 1px;\n" ] );
        return Me = function () {
          return e
        }, e
      }

      function Je( e, r ) {
        return r || ( r = e.slice( 0 ) ), Object.freeze( Object.defineProperties( e, {
          raw: {
            value: Object.freeze( r )
          }
        } ) )
      }
      var Le = Ne.default.div( Me() ),
        Ve = Ne.default.div( De(), Q.N400 ),
        Be = t( "OnRS" ),
        He = t( "kC3+" ),
        qe = t( "sVJx" ),
        Ke = t( "RNvQ" ),
        Ue = t.n( Ke );

      function We( e ) {
        return ( We = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function ( e ) {
          return typeof e
        } : function ( e ) {
          return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        } )( e )
      }

      function Ge( e, r ) {
        if ( !( e instanceof r ) ) throw new TypeError( "Cannot call a class as a function" )
      }

      function $e( e, r ) {
        for ( var t = 0; t < r.length; t++ ) {
          var a = r[ t ];
          a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && ( a.writable = !0 ), Object.defineProperty( e, a.key, a )
        }
      }

      function Ze( e, r ) {
        return ( Ze = Object.setPrototypeOf || function ( e, r ) {
          return e.__proto__ = r, e
        } )( e, r )
      }

      function Qe( e ) {
        var r = function () {
          if ( "undefined" == typeof Reflect || !Reflect.construct ) return !1;
          if ( Reflect.construct.sham ) return !1;
          if ( "function" == typeof Proxy ) return !0;
          try {
            return Date.prototype.toString.call( Reflect.construct( Date, [], ( function () {} ) ) ), !0
          } catch ( e ) {
            return !1
          }
        }();
        return function () {
          var t, a = er( e );
          if ( r ) {
            var n = er( this ).constructor;
            t = Reflect.construct( a, arguments, n )
          } else t = a.apply( this, arguments );
          return Xe( this, t )
        }
      }

      function Xe( e, r ) {
        return !r || "object" !== We( r ) && "function" != typeof r ? Ye( e ) : r
      }

      function Ye( e ) {
        if ( void 0 === e ) throw new ReferenceError( "this hasn't been initialised - super() hasn't been called" );
        return e
      }

      function er( e ) {
        return ( er = Object.setPrototypeOf ? Object.getPrototypeOf : function ( e ) {
          return e.__proto__ || Object.getPrototypeOf( e )
        } )( e )
      }

      function rr( e, r, t ) {
        return r in e ? Object.defineProperty( e, r, {
          value: t,
          enumerable: !0,
          configurable: !0,
          writable: !0
        } ) : e[ r ] = t, e
      }
      var tr = function ( e ) {
          ! function ( e, r ) {
            if ( "function" != typeof r && null !== r ) throw new TypeError( "Super expression must either be null or a function" );
            e.prototype = Object.create( r && r.prototype, {
              constructor: {
                value: e,
                writable: !0,
                configurable: !0
              }
            } ), r && Ze( e, r )
          }( o, e );
          var r, t, a, n = Qe( o );

          function o() {
            var e;
            Ge( this, o );
            for ( var r = arguments.length, t = new Array( r ), a = 0; a < r; a++ ) t[ a ] = arguments[ a ];
            return rr( Ye( e = n.call.apply( n, [ this ].concat( t ) ) ), "textEntered", Ue()( ( function () {
              ( 0, e.props.textEntered )()
            } ), e.props.debounceTime || 0 ) ), e
          }
          return r = o, ( t = [ {
            key: "componentDidUpdate",
            value: function ( e ) {
              var r = this,
                t = this.props.query;
              e.query !== t && setTimeout( ( function () {
                return r.textEntered()
              } ), 0 )
            }
          }, {
            key: "componentWillUnmount",
            value: function () {
              this.textEntered.cancel()
            }
          }, {
            key: "render",
            value: function () {
              return null
            }
          } ] ) && $e( r.prototype, t ), a && $e( r, a ), o
        }( n.a.Component ),
        ar = Object( qe.a )( {
          textEntered: He.v
        } )( tr );

      function nr( e ) {
        return ( nr = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function ( e ) {
          return typeof e
        } : function ( e ) {
          return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        } )( e )
      }

      function or() {
        return ( or = Object.assign || function ( e ) {
          for ( var r = 1; r < arguments.length; r++ ) {
            var t = arguments[ r ];
            for ( var a in t ) Object.prototype.hasOwnProperty.call( t, a ) && ( e[ a ] = t[ a ] )
          }
          return e
        } ).apply( this, arguments )
      }

      function cr( e, r ) {
        if ( null == e ) return {};
        var t, a, n = function ( e, r ) {
          if ( null == e ) return {};
          var t, a, n = {},
            o = Object.keys( e );
          for ( a = 0; a < o.length; a++ ) t = o[ a ], r.indexOf( t ) >= 0 || ( n[ t ] = e[ t ] );
          return n
        }( e, r );
        if ( Object.getOwnPropertySymbols ) {
          var o = Object.getOwnPropertySymbols( e );
          for ( a = 0; a < o.length; a++ ) t = o[ a ], r.indexOf( t ) >= 0 || Object.prototype.propertyIsEnumerable.call( e, t ) && ( n[ t ] = e[ t ] )
        }
        return n
      }

      function ir( e, r ) {
        if ( !( e instanceof r ) ) throw new TypeError( "Cannot call a class as a function" )
      }

      function sr( e, r ) {
        for ( var t = 0; t < r.length; t++ ) {
          var a = r[ t ];
          a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && ( a.writable = !0 ), Object.defineProperty( e, a.key, a )
        }
      }

      function lr( e, r ) {
        return ( lr = Object.setPrototypeOf || function ( e, r ) {
          return e.__proto__ = r, e
        } )( e, r )
      }

      function dr( e ) {
        var r = function () {
          if ( "undefined" == typeof Reflect || !Reflect.construct ) return !1;
          if ( Reflect.construct.sham ) return !1;
          if ( "function" == typeof Proxy ) return !0;
          try {
            return Date.prototype.toString.call( Reflect.construct( Date, [], ( function () {} ) ) ), !0
          } catch ( e ) {
            return !1
          }
        }();
        return function () {
          var t, a = fr( e );
          if ( r ) {
            var n = fr( this ).constructor;
            t = Reflect.construct( a, arguments, n )
          } else t = a.apply( this, arguments );
          return ur( this, t )
        }
      }

      function ur( e, r ) {
        return !r || "object" !== nr( r ) && "function" != typeof r ? _r( e ) : r
      }

      function _r( e ) {
        if ( void 0 === e ) throw new ReferenceError( "this hasn't been initialised - super() hasn't been called" );
        return e
      }

      function fr( e ) {
        return ( fr = Object.setPrototypeOf ? Object.getPrototypeOf : function ( e ) {
          return e.__proto__ || Object.getPrototypeOf( e )
        } )( e )
      }

      function pr( e, r, t ) {
        return r in e ? Object.defineProperty( e, r, {
          value: t,
          enumerable: !0,
          configurable: !0,
          writable: !0
        } ) : e[ r ] = t, e
      }
      var hr = function ( e ) {
          ! function ( e, r ) {
            if ( "function" != typeof r && null !== r ) throw new TypeError( "Super expression must either be null or a function" );
            e.prototype = Object.create( r && r.prototype, {
              constructor: {
                value: e,
                writable: !0,
                configurable: !0
              }
            } ), r && lr( e, r )
          }( c, e );
          var r, t, a, o = dr( c );

          function c() {
            var e;
            ir( this, c );
            for ( var r = arguments.length, t = new Array( r ), a = 0; a < r; a++ ) t[ a ] = arguments[ a ];
            return pr( _r( e = o.call.apply( o, [ this ].concat( t ) ) ), "ref", null ), pr( _r( e ), "onInput", ( function ( r ) {
              var t, a;
              r !== e.props.value && ( e.expand( He.d.TEXT_ENTERED ), null === ( t = ( a = e.props ).onInput ) || void 0 === t || t.call( a, r ) )
            } ) ), pr( _r( e ), "expand", ( function ( r ) {
              var t = e.props,
                a = t.isExpanded,
                n = t.onOpen,
                o = t.preQueryScreenViewed,
                c = t.searchSessionId;
              a || ( n(), o( {
                searchSessionId: c,
                trigger: r
              } ) )
            } ) ), pr( _r( e ), "close", ( function ( r ) {
              var t = e.props,
                a = t.isExpanded,
                n = t.onBack;
              a && ( null == n || n( r ) )
            } ) ), pr( _r( e ), "onInputClick", ( function () {
              setTimeout( ( function () {
                var r;
                return null === ( r = e.ref ) || void 0 === r ? void 0 : r.focus()
              } ) ), e.expand( He.d.CLICK )
            } ) ), pr( _r( e ), "onEnter", ( function ( r ) {
              var t = e.props,
                a = t.isExpanded,
                n = t.onEnter;
              a && ( null == n || n( r ) )
            } ) ), pr( _r( e ), "onRef", he( e.props.forwardRef, ( function ( r ) {
              e.ref = r
            } ) ) ), e
          }
          return r = c, ( t = [ {
            key: "render",
            value: function () {
              var e, r = this.props,
                t = r.value,
                a = r.isExpanded,
                o = r.expandedPlaceholder,
                c = r.collapsedPlaceholder,
                s = r.debounceTime,
                l = r.intl,
                d = cr( r, [ "value", "isExpanded", "expandedPlaceholder", "collapsedPlaceholder", "debounceTime", "intl" ] ),
                u = a ? o : c,
                _ = ( e = l.formatMessage( Be.a.common_search_input_collapsed_placeholder ), Object( i.f )( Le, null, e, Object( i.f )( Ve, null, "/" ) ) );
              return Object( i.f )( n.a.Fragment, null, a ? Object( i.f )( ar, {
                query: t,
                debounceTime: s
              } ) : null, Object( i.f )( Fe, or( {}, d, {
                onClick: this.onInputClick,
                onInput: this.onInput,
                ref: this.onRef,
                isExpanded: a,
                placeholder: u,
                value: t,
                onEnter: this.onEnter,
                tooltipContent: _
              } ) ) )
            }
          } ] ) && sr( r.prototype, t ), a && sr( r, a ), c
        }( n.a.Component ),
        gr = Object( d.g )( hr ),
        br = Object( qe.a )( {
          preQueryScreenViewed: He.n
        } )( Object( P.b )( gr ) ),
        vr = t( "IAJa" );

      function yr() {
        return ( yr = Object.assign || function ( e ) {
          for ( var r = 1; r < arguments.length; r++ ) {
            var t = arguments[ r ];
            for ( var a in t ) Object.prototype.hasOwnProperty.call( t, a ) && ( e[ a ] = t[ a ] )
          }
          return e
        } ).apply( this, arguments )
      }

      function jr( e, r ) {
        if ( null == e ) return {};
        var t, a, n = function ( e, r ) {
          if ( null == e ) return {};
          var t, a, n = {},
            o = Object.keys( e );
          for ( a = 0; a < o.length; a++ ) t = o[ a ], r.indexOf( t ) >= 0 || ( n[ t ] = e[ t ] );
          return n
        }( e, r );
        if ( Object.getOwnPropertySymbols ) {
          var o = Object.getOwnPropertySymbols( e );
          for ( a = 0; a < o.length; a++ ) t = o[ a ], r.indexOf( t ) >= 0 || Object.prototype.propertyIsEnumerable.call( e, t ) && ( n[ t ] = e[ t ] )
        }
        return n
      }
      var mr = Object( d.g )( ( function ( e ) {
          var r = e.intl,
            t = e.advancedSearchSelected,
            n = e.isLoading,
            o = e.onNavigate,
            c = jr( e, [ "intl", "advancedSearchSelected", "isLoading", "onNavigate" ] ),
            s = Object( vr.a )(),
            l = Object( a.useCallback )( ( function ( e ) {
              t( {
                trigger: He.d.SHORTCUT,
                actionSubjectId: He.a.CONFLUENCE,
                isLoading: n,
                newTab: !1
              } );
              var r = s( c.value );
              o( r, e )
            } ), [ t, n, s, c.value, o ] );
          return Object( i.f )( br, yr( {}, c, {
            onEnter: l,
            expandedPlaceholder: r.formatMessage( Be.a.confluence_search_input_expanded_placeholder ),
            collapsedPlaceholder: r.formatMessage( Be.a.common_search_input_collapsed_placeholder )
          } ) )
        } ) ),
        Or = Object( qe.a )( {
          advancedSearchSelected: He.e
        } )( mr ),
        wr = t( "KjIc" );

      function kr() {
        return ( kr = Object.assign || function ( e ) {
          for ( var r = 1; r < arguments.length; r++ ) {
            var t = arguments[ r ];
            for ( var a in t ) Object.prototype.hasOwnProperty.call( t, a ) && ( e[ a ] = t[ a ] )
          }
          return e
        } ).apply( this, arguments )
      }

      function Sr( e, r ) {
        if ( null == e ) return {};
        var t, a, n = function ( e, r ) {
          if ( null == e ) return {};
          var t, a, n = {},
            o = Object.keys( e );
          for ( a = 0; a < o.length; a++ ) t = o[ a ], r.indexOf( t ) >= 0 || ( n[ t ] = e[ t ] );
          return n
        }( e, r );
        if ( Object.getOwnPropertySymbols ) {
          var o = Object.getOwnPropertySymbols( e );
          for ( a = 0; a < o.length; a++ ) t = o[ a ], r.indexOf( t ) >= 0 || Object.prototype.propertyIsEnumerable.call( e, t ) && ( n[ t ] = e[ t ] )
        }
        return n
      }
      var Pr = Object( d.g )( ( function ( e ) {
        var r = e.intl,
          t = e.forwardRef,
          n = e.onNavigate,
          o = e.isLoading,
          c = Sr( e, [ "intl", "forwardRef", "onNavigate", "isLoading" ] ),
          s = Object( wr.c )(),
          l = Object( S.a )().fireAnalyticsEvent,
          d = Object( a.useCallback )( ( function ( e ) {
            var r = s( c.value ),
              t = r ? "/issues/?jql=".concat( r ) : "/secure/QuickSearch.jspa?searchString=".concat( encodeURIComponent( c.value ) );
            l( Object( He.e )( {
              trigger: He.d.RETURN,
              actionSubjectId: He.a.JIRA_ISSUES,
              isLoading: o,
              newTab: !1
            } ) ), n( t, e )
          } ), [ s, c.value, l, o, n ] );
        return Object( i.f )( br, kr( {}, c, {
          onEnter: d,
          expandedPlaceholder: r.formatMessage( Be.a.jira_search_placeholder ),
          collapsedPlaceholder: r.formatMessage( Be.a.common_search_input_collapsed_placeholder ),
          forwardRef: t
        } ) )
      } ) );

      function xr() {
        return ( xr = Object.assign || function ( e ) {
          for ( var r = 1; r < arguments.length; r++ ) {
            var t = arguments[ r ];
            for ( var a in t ) Object.prototype.hasOwnProperty.call( t, a ) && ( e[ a ] = t[ a ] )
          }
          return e
        } ).apply( this, arguments )
      }

      function Cr( e, r ) {
        if ( null == e ) return {};
        var t, a, n = function ( e, r ) {
          if ( null == e ) return {};
          var t, a, n = {},
            o = Object.keys( e );
          for ( a = 0; a < o.length; a++ ) t = o[ a ], r.indexOf( t ) >= 0 || ( n[ t ] = e[ t ] );
          return n
        }( e, r );
        if ( Object.getOwnPropertySymbols ) {
          var o = Object.getOwnPropertySymbols( e );
          for ( a = 0; a < o.length; a++ ) t = o[ a ], r.indexOf( t ) >= 0 || Object.prototype.propertyIsEnumerable.call( e, t ) && ( n[ t ] = e[ t ] )
        }
        return n
      }
      var Er = function ( e ) {
          window.location.assign( e )
        },
        Rr = function ( e ) {
          var r = e.onNavigate,
            t = e.forwardRef,
            n = e.value,
            o = Cr( e, [ "onNavigate", "forwardRef", "value" ] ),
            c = Object( A.d )(),
            s = Object( A.c )(),
            l = Object( a.useRef )( null ),
            d = o.isExpanded;
          Object( a.useEffect )( ( function () {
            var e;
            d && ( null == l || null === ( e = l.current ) || void 0 === e || e.focus() )
          } ), [ s, d ] );
          var u = s === c ? r : Er,
            _ = he( t, l );
          switch ( s ) {
            case A.b.confluence:
              return Object( i.f )( Or, xr( {}, o, {
                onNavigate: u,
                forwardRef: _,
                value: n
              } ) );
            case A.b.jira:
              return Object( i.f )( Pr, xr( {}, o, {
                onNavigate: u,
                forwardRef: _,
                value: n
              } ) );
            default:
              throw new Error( "Product is not supported ".concat( s ) )
          }
        },
        Ar = t( "h74R" ),
        Ir = t( "Hkmd" ),
        zr = t( "eq5D" ),
        Tr = t( "ReCX" ),
        Fr = t( "HIRw" ),
        Nr = t( "aCEW" ),
        Dr = t( "6EW1" ),
        Mr = function ( e ) {
          var r = e.children,
            t = e.product,
            o = Object( S.a )().fireAnalyticsEvent;
          return Object( a.useEffect )( ( function () {
            var e = Date.now();
            return function () {
              o( Object( He.l )( t, Date.now() - e ) )
            }
          } ), [ o, t ] ), Object( i.f )( n.a.Fragment, null, r )
        },
        Jr = t( "uJnn" );

      function Lr() {
        var e = Br( [ "\n  display: flex;\n  flex-direction: column;\n  min-height: ", ";\n" ] );
        return Lr = function () {
          return e
        }, e
      }

      function Vr() {
        var e = Br( [ "\n  padding: ", "px 0;\n  flex: 1;\n" ] );
        return Vr = function () {
          return e
        }, e
      }

      function Br( e, r ) {
        return r || ( r = e.slice( 0 ) ), Object.freeze( Object.defineProperties( e, {
          raw: {
            value: Object.freeze( r )
          }
        } ) )
      }
      var Hr = n.a.lazy( ( function () {
          return Promise.all( [ t.e( 118 ), t.e( 149 ) ] ).then( t.bind( null, "im4u" ) ).then( ( function ( e ) {
            return {
              default: e.ConfluenceSearchDialogContent
            }
          } ) )
        } ) ),
        qr = Ne.default.div( Vr(), Object( Fr.g )() ),
        Kr = Ne.default.div( Lr(), ( function ( e ) {
          return e.minHeight ? "".concat( e.minHeight, "px" ) : "auto"
        } ) ),
        Ur = function ( e ) {
          return Object( i.f )( a.Suspense, {
            fallback: Object( i.f )( Mr, {
              product: "confluence"
            }, Object( i.f )( Kr, {
              minHeight: e.dialogHeight
            }, Object( i.f )( qr, null, Object( i.f )( Jr.a, null ) ), Object( i.f )( Nr.c, null, Object( i.f )( Dr.a, {
              linkComponent: e.linkComponent,
              query: e.query,
              isLoading: !0
            } ) ) ) )
          }, Object( i.f )( Hr, e ) )
        },
        Wr = t( "Zkfy" );

      function Gr() {
        var e = Zr( [ "\n  display: flex;\n  flex-direction: column;\n  min-height: ", ";\n" ] );
        return Gr = function () {
          return e
        }, e
      }

      function $r() {
        var e = Zr( [ "\n  padding: ", "px 0;\n  flex: 1;\n" ] );
        return $r = function () {
          return e
        }, e
      }

      function Zr( e, r ) {
        return r || ( r = e.slice( 0 ) ), Object.freeze( Object.defineProperties( e, {
          raw: {
            value: Object.freeze( r )
          }
        } ) )
      }
      var Qr = n.a.lazy( ( function () {
          return Promise.all( [ t.e( 118 ), t.e( 161 ) ] ).then( t.bind( null, "JMXB" ) ).then( ( function ( e ) {
            return {
              default: e.JiraSearchDialogContent
            }
          } ) )
        } ) ),
        Xr = Ne.default.div( $r(), Object( Fr.g )() ),
        Yr = Ne.default.div( Gr(), ( function ( e ) {
          return e.minHeight ? "".concat( e.minHeight, "px" ) : "auto"
        } ) ),
        et = function ( e ) {
          return Object( i.f )( a.Suspense, {
            fallback: Object( i.f )( Mr, {
              product: "jira"
            }, Object( i.f )( Yr, {
              minHeight: e.dialogHeight
            }, Object( i.f )( Xr, null, Object( i.f )( Jr.a, null ) ), Object( i.f )( Wr.b, null, Object( i.f )( wr.a, {
              query: e.query,
              onClick: e.onNavigate,
              isLoading: !0
            } ) ) ) )
          }, Object( i.f )( Qr, e ) )
        };

      function rt() {
        return ( rt = Object.assign || function ( e ) {
          for ( var r = 1; r < arguments.length; r++ ) {
            var t = arguments[ r ];
            for ( var a in t ) Object.prototype.hasOwnProperty.call( t, a ) && ( e[ a ] = t[ a ] )
          }
          return e
        } ).apply( this, arguments )
      }
      var tt = function ( e, r ) {
          window.location.assign( e )
        },
        at = function ( e ) {
          var r = e.data,
            t = r.extra,
            a = t.isExpanded,
            o = t.linkComponent,
            c = {
              isExpanded: a,
              query: t.query,
              onRetry: t.onRetry,
              setAdditionalAnalyticsContext: t.setAdditionalAnalyticsContext,
              queryVersion: t.queryVersion,
              debounceTime: t.debounceTime,
              formatDate: t.formatDate,
              setDialogHeight: t.setDialogHeight,
              dialogHeight: t.dialogHeight
            },
            s = Object( A.d )();
          switch ( r.id ) {
            case A.b.confluence:
              var l = s === r.id ? {
                linkComponent: o
              } : {};
              return Object( i.f )( Ur, rt( {}, c, l ) );
            case A.b.jira:
              var d = r.extra.onNavigate,
                u = s === r.id ? {
                  onNavigate: d,
                  linkComponent: o
                } : {
                  onNavigate: tt
                };
              return Object( i.f )( et, rt( {}, c, u ) );
            default:
              return Object( i.f )( n.a.Fragment, null )
          }
        },
        nt = t( "C+A9" ),
        ot = t( "xsIe" ),
        ct = t( "TOeK" ),
        it = t.n( ct ),
        st = Object( d.g )( ( function ( e ) {
          var r = e.intl,
            t = e.onClose;
          return Object( i.f )( ot.a, {
            appearance: "change",
            title: r.formatMessage( Be.a.common_inline_onboarding_title ),
            actions: [ {
              key: "got-it",
              onClick: t,
              text: r.formatMessage( Be.a.common_inline_onboarding_action )
            } ],
            icon: it.a
          }, Object( i.f )( "p", {
            style: {
              color: Q.N200
            }
          }, r.formatMessage( Be.a.common_inline_onboarding_body ) ) )
        } ) );

      function lt( e, r ) {
        return function ( e ) {
          if ( Array.isArray( e ) ) return e
        }( e ) || function ( e, r ) {
          if ( "undefined" == typeof Symbol || !( Symbol.iterator in Object( e ) ) ) return;
          var t = [],
            a = !0,
            n = !1,
            o = void 0;
          try {
            for ( var c, i = e[ Symbol.iterator ](); !( a = ( c = i.next() ).done ) && ( t.push( c.value ), !r || t.length !== r ); a = !0 );
          } catch ( s ) {
            n = !0, o = s
          } finally {
            try {
              a || null == i.return || i.return()
            } finally {
              if ( n ) throw o
            }
          }
          return t
        }( e, r ) || function ( e, r ) {
          if ( !e ) return;
          if ( "string" == typeof e ) return dt( e, r );
          var t = Object.prototype.toString.call( e ).slice( 8, -1 );
          "Object" === t && e.constructor && ( t = e.constructor.name );
          if ( "Map" === t || "Set" === t ) return Array.from( e );
          if ( "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test( t ) ) return dt( e, r )
        }( e, r ) || function () {
          throw new TypeError( "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method." )
        }()
      }

      function dt( e, r ) {
        ( null == r || r > e.length ) && ( r = e.length );
        for ( var t = 0, a = new Array( r ); t < r; t++ ) a[ t ] = e[ t ];
        return a
      }

      function ut() {
        var e = function ( e, r ) {
          r || ( r = e.slice( 0 ) );
          return Object.freeze( Object.defineProperties( e, {
            raw: {
              value: Object.freeze( r )
            }
          } ) )
        }( [ "\n  padding: ", ";\n" ] );
        return ut = function () {
          return e
        }, e
      }
      var _t = Ne.default.div( ut(), "".concat( 2 * Object( Fr.g )(), "px" ) ),
        ft = n.a.memo( ( function ( e ) {
          var r = e.primaryProduct,
            t = e.activeProduct,
            n = Object( re.b )().cloudId,
            o = Object( ae.b )().cloudId,
            c = function ( e ) {
              switch ( e ) {
                case A.b.confluence:
                  return "confluence-cross-prod-inline";
                case A.b.jira:
                  return "jira-cross-prod-inline";
                default:
                  return ""
              }
            }( r ),
            s = function ( e, r ) {
              var t = lt( Object( a.useState )( !1 ), 2 ),
                n = t[ 0 ],
                o = t[ 1 ];
              return Object( a.useEffect )( ( function () {
                e.start( r ).then( o )
              } ), [ e, r ] ), [ n, Object( a.useCallback )( ( function () {
                e.stop( r ), o( !1 )
              } ), [ e, o, r ] ) ]
            }( Object( a.useMemo )( ( function () {
              return new nt.a( o || n, "/gateway/api" )
            } ), [ o, n, "/gateway/api" ] ), c ),
            l = lt( s, 2 ),
            d = l[ 0 ],
            u = l[ 1 ];
          return d && t !== r ? ( u(), null ) : d ? Object( i.f )( _t, null, Object( i.f )( st, {
            onClose: u
          } ), " " ) : null
        } ) );

      function pt( e, r ) {
        if ( null == e ) return {};
        var t, a, n = function ( e, r ) {
          if ( null == e ) return {};
          var t, a, n = {},
            o = Object.keys( e );
          for ( a = 0; a < o.length; a++ ) t = o[ a ], r.indexOf( t ) >= 0 || ( n[ t ] = e[ t ] );
          return n
        }( e, r );
        if ( Object.getOwnPropertySymbols ) {
          var o = Object.getOwnPropertySymbols( e );
          for ( a = 0; a < o.length; a++ ) t = o[ a ], r.indexOf( t ) >= 0 || Object.prototype.propertyIsEnumerable.call( e, t ) && ( n[ t ] = e[ t ] )
        }
        return n
      }

      function ht() {
        var e = function ( e, r ) {
          r || ( r = e.slice( 0 ) );
          return Object.freeze( Object.defineProperties( e, {
            raw: {
              value: Object.freeze( r )
            }
          } ) )
        }( [ "\n  margin-top: ", "px;\n  ", "\n" ] );
        return ht = function () {
          return e
        }, e
      }

      function gt( e, r, t ) {
        return r in e ? Object.defineProperty( e, r, {
          value: t,
          enumerable: !0,
          configurable: !0,
          writable: !0
        } ) : e[ r ] = t, e
      }
      var bt = function ( e, r ) {
          var t;
          return ( t = {}, gt( t, A.b.confluence, r.formatMessage( Be.a.confluence_tab_label ) ), gt( t, A.b.jira, r.formatMessage( Be.a.jira_tab_label ) ), t )[ e ]
        },
        vt = Ne.default.div( ht(), Object( Fr.g )() / 2, ( function ( e ) {
          return e.isFirstItem && "margin-left: ".concat( Object( Fr.g )(), "px;" )
        } ) ),
        yt = function ( e ) {
          return Object( i.f )( vt, {
            isFirstItem: 0 === e.elementProps.tabIndex
          }, Object( i.f )( zr.a, e ) )
        },
        jt = Object( d.g )( ( function ( e ) {
          var r = e.intl,
            t = e.setSelectedTabIndex,
            a = e.addAnalyticContext,
            o = e.nonPrivacySafeContext,
            c = ( e.children, pt( e, [ "intl", "setSelectedTabIndex", "addAnalyticContext", "nonPrivacySafeContext", "children" ] ) ),
            s = Object( A.e )(),
            l = Object( A.c )(),
            d = Object( S.a )().fireAnalyticsEvent;
          if ( 1 === s.length ) return Object( i.f )( at, {
            data: {
              id: s[ 0 ],
              extra: c
            }
          } );
          var u = s.map( ( function ( e ) {
            return {
              label: bt( e, r ),
              id: e,
              extra: c
            }
          } ) );
          return Object( i.f )( n.a.Fragment, null, s.length > 1 ? Object( i.f )( ft, {
            primaryProduct: s[ 0 ],
            activeProduct: l
          } ) : null, Object( i.f )( Tr.a, {
            components: {
              Item: yt,
              Content: at
            },
            onSelect: function ( e, r ) {
              t( r );
              var n = u[ r ].id;
              d( Object( He.u )( {
                tabName: n
              }, a(), o() ) )
            },
            tabs: u,
            selected: s.indexOf( l )
          } ) )
        } ) );

      function mt() {
        return ( mt = Object.assign || function ( e ) {
          for ( var r = 1; r < arguments.length; r++ ) {
            var t = arguments[ r ];
            for ( var a in t ) Object.prototype.hasOwnProperty.call( t, a ) && ( e[ a ] = t[ a ] )
          }
          return e
        } ).apply( this, arguments )
      }

      function Ot( e, r ) {
        if ( null == e ) return {};
        var t, a, n = function ( e, r ) {
          if ( null == e ) return {};
          var t, a, n = {},
            o = Object.keys( e );
          for ( a = 0; a < o.length; a++ ) t = o[ a ], r.indexOf( t ) >= 0 || ( n[ t ] = e[ t ] );
          return n
        }( e, r );
        if ( Object.getOwnPropertySymbols ) {
          var o = Object.getOwnPropertySymbols( e );
          for ( a = 0; a < o.length; a++ ) t = o[ a ], r.indexOf( t ) >= 0 || Object.prototype.propertyIsEnumerable.call( e, t ) && ( n[ t ] = e[ t ] )
        }
        return n
      }

      function wt( e, r ) {
        return function ( e ) {
          if ( Array.isArray( e ) ) return e
        }( e ) || function ( e, r ) {
          if ( "undefined" == typeof Symbol || !( Symbol.iterator in Object( e ) ) ) return;
          var t = [],
            a = !0,
            n = !1,
            o = void 0;
          try {
            for ( var c, i = e[ Symbol.iterator ](); !( a = ( c = i.next() ).done ) && ( t.push( c.value ), !r || t.length !== r ); a = !0 );
          } catch ( s ) {
            n = !0, o = s
          } finally {
            try {
              a || null == i.return || i.return()
            } finally {
              if ( n ) throw o
            }
          }
          return t
        }( e, r ) || function ( e, r ) {
          if ( !e ) return;
          if ( "string" == typeof e ) return kt( e, r );
          var t = Object.prototype.toString.call( e ).slice( 8, -1 );
          "Object" === t && e.constructor && ( t = e.constructor.name );
          if ( "Map" === t || "Set" === t ) return Array.from( e );
          if ( "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test( t ) ) return kt( e, r )
        }( e, r ) || function () {
          throw new TypeError( "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method." )
        }()
      }

      function kt( e, r ) {
        ( null == r || r > e.length ) && ( r = e.length );
        for ( var t = 0, a = new Array( r ); t < r; t++ ) a[ t ] = e[ t ];
        return a
      }
      t.d( r, "DialogWithInput", ( function () {
        return St
      } ) ), t.d( r, "CrossProductSearchDialog", ( function () {
        return xt
      } ) );
      var St = function ( e ) {
          var r = e.forwardRef,
            t = e.isExpanded,
            n = e.onClose,
            o = e.onOpen,
            c = e.onNavigate,
            s = e.jiraFeatures,
            l = e.confluenceFeatures,
            d = e.isPreQueryEmpty,
            u = e.user,
            _ = e.linkComponent,
            f = e.formatDate,
            p = e.theme,
            h = e.setSelectedTabIndex,
            g = wt( Object( a.useState )( "" ), 2 ),
            b = g[ 0 ],
            v = g[ 1 ],
            y = Object( te.b )( t, u ),
            j = wt( function ( e ) {
              var r = oe( Object( a.useReducer )( ue, de ), 2 ),
                t = r[ 0 ],
                n = t.queryVersion;
              return [ t.isLoading, r[ 1 ], Object( a.useCallback )( ( function () {
                return {
                  wordCount: Object( ne.b )( e ),
                  queryLength: e.length,
                  queryHash: Object( ne.d )( e ),
                  queryVersion: n
                }
              } ), [ e, n ] ), Object( a.useCallback )( ( function () {
                return {
                  query: e
                }
              } ), [ e ] ), n ]
            }( b ), 5 ),
            m = j[ 0 ],
            O = j[ 1 ],
            w = j[ 2 ],
            k = j[ 3 ],
            S = j[ 4 ];
          Object( a.useEffect )( ( function () {
            t || ( v( "" ), h( 0 ), O( {
              type: "reset"
            } ) )
          } ), [ t, O, h ] );
          var P = Object( a.useRef )( null ),
            x = Object( a.useRef )( void 0 ),
            E = Object( a.useCallback )( ( function ( e ) {
              x.current = e
            } ), [] ),
            R = Object( a.useCallback )( ( function ( e, r ) {
              null == c || c( e, r ), n()
            } ), [ n, c ] );
          return Object( i.f )( C.a, {
            analyticContext: w,
            nonPrivacySafeAnalyticContextGenerator: k
          }, Object( i.f )( Se.a, y, Object( i.f )( ke.a, {
            features: s
          }, Object( i.f )( Pe.a, {
            isEnabled: t
          }, Object( i.f )( we, {
            features: l
          }, Object( i.f )( Ir.a, {
            isEnabled: t
          }, Object( i.f )( _e.a, {
            isExpanded: t
          } ), Object( i.f )( Rr, {
            isExpanded: t,
            onInput: v,
            value: b,
            onNavigate: R,
            onOpen: o,
            onBack: n,
            isLoading: m,
            debounceTime: 250,
            forwardRef: he( P, r )
          } ), Object( i.f )( ee, null, t && ( !d || b ) && Object( i.f )( jt, {
            query: b,
            setSelectedTabIndex: h,
            onRetry: function () {
              var e, r;
              null == P || null === ( e = P.current ) || void 0 === e || null === ( r = e.focus ) || void 0 === r || r.call( e )
            },
            queryVersion: S,
            debounceTime: 250,
            isExpanded: t,
            isAnyResultsLoading: m,
            onNavigate: R,
            setAdditionalAnalyticsContext: O,
            addAnalyticContext: w,
            nonPrivacySafeContext: k,
            linkComponent: _,
            formatDate: f,
            theme: p,
            setDialogHeight: E,
            dialogHeight: x.current
          } ) ) ) ) ) ) ) )
        },
        Pt = function ( e ) {
          var r = e.confluenceRecentClient,
            t = e.jiraSearchClient,
            a = e.primaryProduct,
            n = e.setIsPreQueryEmpty,
            o = Object( P.c )(),
            c = [];
          return c = a === A.b.confluence ? [ r.getRecentSpaces(), r.getRecentItems() ].map( ( function ( e ) {
            return e.promise()
          } ) ) : [ t.getRecentIssues( {
            sessionId: o,
            referrerId: null
          } ), t.getRecentBoardsProjectsFilters( {
            sessionId: o,
            referrerId: null
          } ) ].map( ( function ( e ) {
            return e.promise()
          } ) ), Promise.all( c ).then( ( function ( e ) {
            var r = e.reduce( ( function ( e, r ) {
              return e + r.items.length
            } ), 0 );
            n( 0 === r )
          } ) ).catch( ( function () {
            n( !0 )
          } ) ), null
        },
        xt = function ( e ) {
          var r = e.theme,
            t = e.forwardRef,
            o = Ot( e, [ "theme", "forwardRef" ] ),
            c = Object( re.b )(),
            s = c.searchClient,
            l = c.recentClient,
            d = Object( ae.b )().searchClient,
            u = wt( Object( a.useState )( 0 ), 2 ),
            _ = u[ 0 ],
            f = u[ 1 ],
            p = o.isExpanded,
            h = o.onClose,
            g = o.products,
            b = wt( Object( a.useState )( !1 ), 2 ),
            v = b[ 0 ],
            y = b[ 1 ];
          if ( 0 === g.length ) return null;
          var j = g[ 0 ] === A.b.confluence ? s : d;
          return Object( i.f )( $, {
            onClose: h,
            isExpanded: p,
            theme: r,
            isMultiProduct: !0,
            sharedClient: j,
            products: g,
            selectedTabIndex: _
          }, ( function ( e ) {
            var a = he( e, t );
            return Object( i.f )( n.a.Fragment, null, Object( i.f )( St, mt( {}, o, {
              isPreQueryEmpty: v,
              forwardRef: a,
              theme: r,
              setSelectedTabIndex: f
            } ) ), p ? null : Object( i.f )( Pt, {
              primaryProduct: g[ 0 ],
              setIsPreQueryEmpty: y,
              confluenceRecentClient: l,
              jiraSearchClient: d
            } ) )
          } ) )
        };
      r.default = Object( Ar.a )( xt )
    },
    ReCX: function ( e, r, t ) {
      "use strict";
      var a = t( "Czhu" ),
        n = t( "ERkP" ),
        o = t.n( n ),
        c = t( "Cmaw" ),
        i = t( "ORIB" ),
        s = t( "lbXe" ),
        l = t( "F9AR" ),
        d = t( "r9WN" );
      class u extends n.Component {
        render() {
          const {
            data: e,
            elementProps: r,
            isSelected: t
          } = this.props;
          return o.a.createElement( l.e, Object.assign( {}, r, {
            isSelected: t
          } ), e.content )
        }
      }
      u.defaultProps = {
        data: {},
        elementProps: {},
        isSelected: !1
      };
      var _ = t( "eq5D" );
      class f extends n.Component {
        constructor() {
          super( ...arguments ), this.elementRefs = [], this.tabKeyDownHandler = e => {
            if ( ![ "ArrowRight", "ArrowLeft" ].includes( e.key ) ) return;
            const {
              selected: r,
              tabs: t
            } = this.props, a = "ArrowRight" === e.key ? 1 : -1, n = t.indexOf( r ) + a;
            n < 0 || n >= t.length || ( this.onSelect( t[ n ], n ), this.elementRefs[ n ].focus() )
          }, this.onSelect = ( e, r ) => {
            this.props.onSelect( e, r )
          }, this.tabMouseDownHandler = e => e.preventDefault()
        }
        UNSAFE_componentWillReceiveProps( e ) {
          e.tabs !== this.props.tabs && ( this.elementRefs = [] )
        }
        render() {
          const {
            selected: e,
            component: r,
            tabs: t
          } = this.props;
          return o.a.createElement( l.d, null, o.a.createElement( l.c, {
            status: "normal"
          } ), o.a.createElement( l.a, {
            role: "tablist"
          }, t.map( ( a, n ) => {
            const c = a === e,
              i = {
                elementProps: {
                  "aria-posinset": n + 1,
                  "aria-selected": c,
                  "aria-setsize": t.length,
                  "data-testid": a.testId,
                  onClick: () => this.onSelect( a, n ),
                  onKeyDown: this.tabKeyDownHandler,
                  onMouseDown: this.tabMouseDownHandler,
                  role: "tab",
                  tabIndex: c ? 0 : -1
                },
                innerRef: e => {
                  this.elementRefs[ n ] = e
                },
                data: a,
                isSelected: c
              };
            return o.a.createElement( r, Object.assign( {
              key: n
            }, i ) )
          } ) ) )
        }
      }
      const p = ( e, r, t ) => e === t,
        h = ( e, r ) => e === r,
        g = {
          Content: u,
          Item: _.a
        };
      class b extends n.Component {
        constructor( e ) {
          super( e ), this.resolveSelected = ( e, r ) => {
            const {
              tabs: t,
              isSelectedTest: a
            } = r || this.props, n = a || ( "number" == typeof e ? p : h );
            return t.find( ( r, t ) => n( e, r, t ) ) || t[ 0 ]
          }, this.onSelect = ( e, r ) => {
            const {
              onSelect: t,
              selected: a
            } = this.props;
            "function" == typeof t && t( e, r ), void 0 === a && this.setState( {
              selected: e
            } )
          };
          const r = this.props.selected || this.props.defaultSelected || this.props.tabs[ 0 ],
            t = this.resolveSelected( r );
          this.state = {
            selected: t
          }
        }
        UNSAFE_componentWillReceiveProps( e ) {
          if ( void 0 !== e.selected && e.selected !== this.state.selected ) {
            const r = this.resolveSelected( e.selected, e );
            this.setState( {
              selected: r
            } )
          } else if ( e.tabs !== this.props.tabs ) {
            const r = this.resolveSelected( this.state.selected, e );
            this.setState( {
              selected: r
            } )
          }
        }
        render() {
          const {
            components: e,
            tabs: r,
            testId: t,
            isContentPersisted: n
          } = this.props, {
            selected: c
          } = this.state, {
            Content: i,
            Item: s
          } = Object( a.a )( Object( a.a )( {}, g ), e ), d = {
            data: c,
            elementProps: {
              role: "tabpanel"
            },
            isSelected: !0
          };
          return o.a.createElement( l.f, {
            "data-testid": t
          }, o.a.createElement( f, {
            component: s,
            onSelect: this.onSelect,
            selected: c,
            tabs: r
          } ), n ? r.map( ( e, r ) => {
            const t = {
              data: e,
              elementProps: {
                role: "tabpanel"
              },
              isSelected: e === c
            };
            return o.a.createElement( i, Object.assign( {
              key: r
            }, t ) )
          } ) : o.a.createElement( i, Object.assign( {}, d ) ) )
        }
      }
      b.defaultProps = {
        components: {},
        isContentPersisted: !1
      };
      const v = Object( c.a )( "atlaskit" );
      r.a = Object( i.a )( {
        componentName: "tabs",
        packageName: d.a,
        packageVersion: d.b
      } )( Object( s.a )( {
        onSelect: v( {
          action: "clicked",
          actionSubject: "tab",
          attributes: {
            componentName: "tabs",
            packageName: d.a,
            packageVersion: d.b
          }
        } )
      } )( b ) )
    },
    TOeK: function ( e, r, t ) {
      "use strict";
      Object.defineProperty( r, "__esModule", {
        value: !0
      } ), r.default = void 0;
      var a = o( t( "ERkP" ) ),
        n = o( t( "4KTy" ) );

      function o( e ) {
        return e && e.__esModule ? e : {
          default: e
        }
      }

      function c() {
        return ( c = Object.assign || function ( e ) {
          for ( var r = 1; r < arguments.length; r++ ) {
            var t = arguments[ r ];
            for ( var a in t ) Object.prototype.hasOwnProperty.call( t, a ) && ( e[ a ] = t[ a ] )
          }
          return e
        } ).apply( this, arguments )
      }
      var i = function ( e ) {
        return a.default.createElement( n.default, c( {
          dangerouslySetGlyph: '<svg width="24" height="24" viewBox="0 0 24 24" focusable="false" role="presentation"><path d="M16.436 15.085l3.94 4.01a1 1 0 0 1-1.425 1.402l-3.938-4.006a7.5 7.5 0 1 1 1.423-1.406zM10.5 16a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11z" fill="currentColor" fill-rule="evenodd"/></svg>'
        }, e ) )
      };
      i.displayName = "SearchIcon";
      var s = i;
      r.default = s
    },
    ViL1: function ( e, r, t ) {
      "use strict";
      t.d( r, "b", ( function () {
        return j
      } ) ), t.d( r, "a", ( function () {
        return m
      } ) );
      var a = t( "ERkP" ),
        n = t.n( a ),
        o = t( "l1C2" );

      function c( e ) {
        return ( c = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function ( e ) {
          return typeof e
        } : function ( e ) {
          return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        } )( e )
      }

      function i( e ) {
        return function ( e ) {
          if ( Array.isArray( e ) ) return v( e )
        }( e ) || function ( e ) {
          if ( "undefined" != typeof Symbol && Symbol.iterator in Object( e ) ) return Array.from( e )
        }( e ) || b( e ) || function () {
          throw new TypeError( "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method." )
        }()
      }

      function s( e, r ) {
        if ( !( e instanceof r ) ) throw new TypeError( "Cannot call a class as a function" )
      }

      function l( e, r ) {
        for ( var t = 0; t < r.length; t++ ) {
          var a = r[ t ];
          a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && ( a.writable = !0 ), Object.defineProperty( e, a.key, a )
        }
      }

      function d( e, r ) {
        return ( d = Object.setPrototypeOf || function ( e, r ) {
          return e.__proto__ = r, e
        } )( e, r )
      }

      function u( e ) {
        var r = function () {
          if ( "undefined" == typeof Reflect || !Reflect.construct ) return !1;
          if ( Reflect.construct.sham ) return !1;
          if ( "function" == typeof Proxy ) return !0;
          try {
            return Date.prototype.toString.call( Reflect.construct( Date, [], ( function () {} ) ) ), !0
          } catch ( e ) {
            return !1
          }
        }();
        return function () {
          var t, a = p( e );
          if ( r ) {
            var n = p( this ).constructor;
            t = Reflect.construct( a, arguments, n )
          } else t = a.apply( this, arguments );
          return _( this, t )
        }
      }

      function _( e, r ) {
        return !r || "object" !== c( r ) && "function" != typeof r ? f( e ) : r
      }

      function f( e ) {
        if ( void 0 === e ) throw new ReferenceError( "this hasn't been initialised - super() hasn't been called" );
        return e
      }

      function p( e ) {
        return ( p = Object.setPrototypeOf ? Object.getPrototypeOf : function ( e ) {
          return e.__proto__ || Object.getPrototypeOf( e )
        } )( e )
      }

      function h( e, r, t ) {
        return r in e ? Object.defineProperty( e, r, {
          value: t,
          enumerable: !0,
          configurable: !0,
          writable: !0
        } ) : e[ r ] = t, e
      }

      function g( e, r ) {
        return function ( e ) {
          if ( Array.isArray( e ) ) return e
        }( e ) || function ( e, r ) {
          if ( "undefined" == typeof Symbol || !( Symbol.iterator in Object( e ) ) ) return;
          var t = [],
            a = !0,
            n = !1,
            o = void 0;
          try {
            for ( var c, i = e[ Symbol.iterator ](); !( a = ( c = i.next() ).done ) && ( t.push( c.value ), !r || t.length !== r ); a = !0 );
          } catch ( s ) {
            n = !0, o = s
          } finally {
            try {
              a || null == i.return || i.return()
            } finally {
              if ( n ) throw o
            }
          }
          return t
        }( e, r ) || b( e, r ) || function () {
          throw new TypeError( "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method." )
        }()
      }

      function b( e, r ) {
        if ( e ) {
          if ( "string" == typeof e ) return v( e, r );
          var t = Object.prototype.toString.call( e ).slice( 8, -1 );
          return "Object" === t && e.constructor && ( t = e.constructor.name ), "Map" === t || "Set" === t ? Array.from( e ) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test( t ) ? v( e, r ) : void 0
        }
      }

      function v( e, r ) {
        ( null == r || r > e.length ) && ( r = e.length );
        for ( var t = 0, a = new Array( r ); t < r; t++ ) a[ t ] = e[ t ];
        return a
      }
      var y = n.a.createContext( {
          registerKeyboardEnabled: void 0,
          unregisterKeyboardEnabled: void 0
        } ),
        j = function ( e ) {
          var r = g( n.a.useState( null ), 2 ),
            t = r[ 0 ],
            o = r[ 1 ],
            c = n.a.useRef( null ),
            i = Object( a.useContext )( y ),
            s = i.registerKeyboardEnabled,
            l = i.unregisterKeyboardEnabled,
            d = g( n.a.useState( !1 ), 2 ),
            u = d[ 0 ],
            _ = d[ 1 ],
            f = null == e ? void 0 : e.onKeydownCallback,
            p = Object( a.useCallback )( ( function () {
              c.current && l && l( c.current )
            } ), [ l ] );
          return Object( a.useEffect )( ( function () {
            return function () {
              return p()
            }
          } ), [ p ] ), Object( a.useEffect )( ( function () {
            !t && p()
          } ), [ t, p ] ), Object( a.useEffect )( ( function () {
            if ( s && l && t && t ) {
              if ( !t.compareDocumentPosition || !t.addEventListener || !t.removeEventListener ) return void console.error( "It is expected that any keyboard highlighting enabled component also passes the ref all the way to the DOM node.", "It appears that the `ref` is not fowarded all the way to the DOM node, please use `React.forwardRef to ensure this is so`", "Falling back to using ReactDOM.findDOMNode, this is not recommended and this fallback may be removed in the future" );
              c.current = s( c.current, t, _, f )
            }
          } ), [ t, _, f, s, l ] ), [ u, o ]
        },
        m = function ( e ) {
          ! function ( e, r ) {
            if ( "function" != typeof r && null !== r ) throw new TypeError( "Super expression must either be null or a function" );
            e.prototype = Object.create( r && r.prototype, {
              constructor: {
                value: e,
                writable: !0,
                configurable: !0
              }
            } ), r && d( e, r )
          }( c, e );
          var r, t, a, n = u( c );

          function c() {
            var e;
            s( this, c );
            for ( var r = arguments.length, t = new Array( r ), a = 0; a < r; a++ ) t[ a ] = arguments[ a ];
            return h( f( e = n.call.apply( n, [ this ].concat( t ) ) ), "currentlySelected", void 0 ), h( f( e ), "keyboardNavComponents", [] ), h( f( e ), "registerKeyboardEnabled", ( function ( r, t, a, n ) {
              var o = e.keyboardNavComponents.findIndex( ( function ( e ) {
                  return e.id === r
                } ) ),
                c = null == r || -1 === o,
                s = c ? Math.max.apply( Math, i( e.keyboardNavComponents.map( ( function ( e ) {
                  return e.id
                } ) ) ).concat( [ 0 ] ) ) + 1 : e.keyboardNavComponents[ o ].id;
              return c ? e.keyboardNavComponents.push( {
                id: s,
                domRef: t,
                onHighlightChanged: a,
                onKeyDownWhenHighlighted: n
              } ) : e.keyboardNavComponents[ o ] = {
                id: s,
                domRef: t,
                onHighlightChanged: a,
                onKeyDownWhenHighlighted: n
              }, e.keyboardNavComponents = e.keyboardNavComponents.sort( ( function ( e, r ) {
                var t = e.domRef.compareDocumentPosition( r.domRef );
                return t & Node.DOCUMENT_POSITION_FOLLOWING || t & Node.DOCUMENT_POSITION_CONTAINED_BY ? -1 : t & Node.DOCUMENT_POSITION_PRECEDING || t & Node.DOCUMENT_POSITION_CONTAINS ? 1 : 0
              } ) ), s
            } ) ), h( f( e ), "unregisterKeyboardEnabled", ( function ( r ) {
              e.currentlySelected === r && ( e.currentlySelected = void 0 ), e.keyboardNavComponents = e.keyboardNavComponents.filter( ( function ( e ) {
                return e.id !== r
              } ) )
            } ) ), h( f( e ), "onKeyDownCallbackAt", ( function ( r, t ) {
              if ( void 0 !== r && r >= 0 && r < e.keyboardNavComponents.length ) {
                var a = e.keyboardNavComponents[ r ].onKeyDownWhenHighlighted;
                a && a( t, e.keyboardNavComponents[ r ].domRef )
              }
            } ) ), h( f( e ), "unhighlightComponentAt", ( function ( r ) {
              void 0 !== r && r >= 0 && r < e.keyboardNavComponents.length && e.keyboardNavComponents[ r ].onHighlightChanged( !1 )
            } ) ), h( f( e ), "highlightComponentAt", ( function ( r ) {
              r >= 0 && r < e.keyboardNavComponents.length && ( e.currentlySelected = e.keyboardNavComponents[ r ].id, e.keyboardNavComponents[ r ].onHighlightChanged( !0 ) )
            } ) ), h( f( e ), "getSelectedIndex", ( function () {
              if ( e.currentlySelected ) return e.keyboardNavComponents.findIndex( ( function ( r ) {
                return r.id === e.currentlySelected
              } ) )
            } ) ), h( f( e ), "onKeyDown", ( function ( r ) {
              if ( 0 !== e.keyboardNavComponents.length && !r.isComposing && 229 !== r.keyCode ) {
                var t = e.getSelectedIndex(),
                  a = t;
                if ( "ArrowDown" === r.code || 40 === r.keyCode ) t = void 0 === t ? 0 : ( t + 1 ) % e.keyboardNavComponents.length, r.preventDefault();
                else {
                  if ( "ArrowUp" !== r.code && 38 !== r.keyCode ) return void( void 0 !== t && e.onKeyDownCallbackAt( t, r ) );
                  void 0 === t ? t = e.keyboardNavComponents.length - 1 : ( t -= 1 ) < 0 && ( t = e.keyboardNavComponents.length - Math.abs( t ) ), r.preventDefault()
                }
                a !== t && ( e.unhighlightComponentAt( a ), e.highlightComponentAt( t ) )
              }
            } ) ), h( f( e ), "attach", ( function ( r ) {
              r && r.addEventListener( "keydown", e.onKeyDown )
            } ) ), h( f( e ), "detach", ( function ( r ) {
              r && r.removeEventListener( "keydown", e.onKeyDown )
            } ) ), e
          }
          return r = c, ( t = [ {
            key: "componentDidMount",
            value: function () {
              this.attach( this.props.listenerNode )
            }
          }, {
            key: "componentDidUpdate",
            value: function ( e ) {
              e.listenerNode !== this.props.listenerNode && ( this.detach( e.listenerNode ), this.attach( this.props.listenerNode ) )
            }
          }, {
            key: "componentWillUnmount",
            value: function () {
              this.detach( this.props.listenerNode )
            }
          }, {
            key: "render",
            value: function () {
              return Object( o.f )( y.Provider, {
                value: {
                  registerKeyboardEnabled: this.registerKeyboardEnabled,
                  unregisterKeyboardEnabled: this.unregisterKeyboardEnabled
                }
              }, this.props.children )
            }
          } ] ) && l( r.prototype, t ), a && l( r, a ), c
        }( n.a.Component )
    },
    Wqlf: function ( e, r, t ) {
      "use strict";
      t.d( r, "a", ( function () {
        return o
      } ) );
      t( "ERkP" );
      var a = t( "L48P" ),
        n = t( "l1C2" ),
        o = function ( e ) {
          var r = e.inverted,
            t = void 0 !== r && r;
          return Object( n.f )( "svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "16",
            viewBox: "0 0 24 16"
          }, Object( n.f )( "g", {
            fill: "none",
            fillRule: "evenodd"
          }, Object( n.f )( "rect", {
            width: "24",
            height: "16",
            fill: t ? a.N80 : a.N30,
            rx: "3"
          } ), Object( n.f )( "path", {
            fill: t ? a.N30 : a.N80,
            fillRule: "nonzero",
            d: "M8.12809107,9.16933636 C8.10113378,9.12943488 8.07791542,9.08679981 8.05893872,9.04193385 C8,8.89679975 7.98627063,8.74857828 8.01372937,8.60675456 C8.04118811,8.46493084 8.10983496,8.32950487 8.21966991,8.21966991 L9.96966991,6.46966991 C10.2625631,6.1767767 10.7374369,6.1767767 11.0303301,6.46966991 C11.3232233,6.76256313 11.3232233,7.23743687 11.0303301,7.53033009 L10.5606602,8 L12.75,8 C13.4403559,8 14,7.44035594 14,6.75 L14,5.75 C14,5.33578644 14.3357864,5 14.75,5 C15.1642136,5 15.5,5.33578644 15.5,5.75 L15.5,6.75 C15.5,8.26878306 14.2687831,9.5 12.75,9.5 L10.5606602,9.5 L11.0303301,9.96966991 C11.3232233,10.2625631 11.3232233,10.7374369 11.0303301,11.0303301 C10.7374369,11.3232233 10.2625631,11.3232233 9.96966991,11.0303301 L8.21966991,9.28033009 C8.18436185,9.24502202 8.15331014,9.20706939 8.1265148,9.16710979 Z"
          } ) ) )
        }
    },
    Zkfy: function ( e, r, t ) {
      "use strict";
      t.d( r, "a", ( function () {
        return g
      } ) ), t.d( r, "b", ( function () {
        return b
      } ) );
      var a = t( "HIRw" ),
        n = t( "tKeX" ),
        o = t( "I50I" ),
        c = t( "HpHT" ),
        i = t( "KsTJ" );

      function s() {
        var e = u( [ "\n  display: flex;\n  flex-direction: column;\n  border: 1px solid purple;\n" ] );
        return s = function () {
          return e
        }, e
      }

      function l() {
        var e = u( [ "\n  height: ", "px;\n" ] );
        return l = function () {
          return e
        }, e
      }

      function d() {
        var e = u( [ "\n  max-height: calc(100vh - ", "px);\n  box-sizing: border-box;\n  flex: 1;\n  min-height: ", ";\n\n  @media screen and (min-height: ", "px) {\n    max-height: ", ";\n  }\n\n  @media screen and (max-width: ", "px) {\n    max-height: initial;\n    overflow: auto;\n  }\n" ] );
        return d = function () {
          return e
        }, e
      }

      function u( e, r ) {
        return r || ( r = e.slice( 0 ) ), Object.freeze( Object.defineProperties( e, {
          raw: {
            value: Object.freeze( r )
          }
        } ) )
      }
      var _ = 720 + 2 * n.e,
        f = 6 * Object( a.g )(),
        p = "".concat( _ - f, "px" ),
        h = 20 * Object( a.g )(),
        g = i.default.div( d(), h, ( function ( e ) {
          return e.minHeight ? "".concat( e.minHeight, "px" ) : "auto"
        } ), _ + h, p, o.d ),
        b = Object( i.default )( c.a )( l(), f );
      i.default.div( s() )
    },
    a9u0: function ( e, r, t ) {
      "use strict";
      t.d( r, "b", ( function () {
        return a
      } ) ), t.d( r, "a", ( function () {
        return y
      } ) ), t.d( r, "c", ( function () {
        return j
      } ) );
      var a, n = t( "ERkP" ),
        o = t.n( n ),
        c = t( "zB3U" ),
        i = t( "O4tY" ),
        s = t( "l1C2" );

      function l( e, r ) {
        var t = Object.keys( e );
        if ( Object.getOwnPropertySymbols ) {
          var a = Object.getOwnPropertySymbols( e );
          r && ( a = a.filter( ( function ( r ) {
            return Object.getOwnPropertyDescriptor( e, r ).enumerable
          } ) ) ), t.push.apply( t, a )
        }
        return t
      }

      function d( e ) {
        for ( var r = 1; r < arguments.length; r++ ) {
          var t = null != arguments[ r ] ? arguments[ r ] : {};
          r % 2 ? l( Object( t ), !0 ).forEach( ( function ( r ) {
            u( e, r, t[ r ] )
          } ) ) : Object.getOwnPropertyDescriptors ? Object.defineProperties( e, Object.getOwnPropertyDescriptors( t ) ) : l( Object( t ) ).forEach( ( function ( r ) {
            Object.defineProperty( e, r, Object.getOwnPropertyDescriptor( t, r ) )
          } ) )
        }
        return e
      }

      function u( e, r, t ) {
        return r in e ? Object.defineProperty( e, r, {
          value: t,
          enumerable: !0,
          configurable: !0,
          writable: !0
        } ) : e[ r ] = t, e
      }

      function _( e ) {
        return function ( e ) {
          if ( Array.isArray( e ) ) return h( e )
        }( e ) || function ( e ) {
          if ( "undefined" != typeof Symbol && Symbol.iterator in Object( e ) ) return Array.from( e )
        }( e ) || p( e ) || function () {
          throw new TypeError( "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method." )
        }()
      }

      function f( e, r ) {
        return function ( e ) {
          if ( Array.isArray( e ) ) return e
        }( e ) || function ( e, r ) {
          if ( "undefined" == typeof Symbol || !( Symbol.iterator in Object( e ) ) ) return;
          var t = [],
            a = !0,
            n = !1,
            o = void 0;
          try {
            for ( var c, i = e[ Symbol.iterator ](); !( a = ( c = i.next() ).done ) && ( t.push( c.value ), !r || t.length !== r ); a = !0 );
          } catch ( s ) {
            n = !0, o = s
          } finally {
            try {
              a || null == i.return || i.return()
            } finally {
              if ( n ) throw o
            }
          }
          return t
        }( e, r ) || p( e, r ) || function () {
          throw new TypeError( "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method." )
        }()
      }

      function p( e, r ) {
        if ( e ) {
          if ( "string" == typeof e ) return h( e, r );
          var t = Object.prototype.toString.call( e ).slice( 8, -1 );
          return "Object" === t && e.constructor && ( t = e.constructor.name ), "Map" === t || "Set" === t ? Array.from( e ) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test( t ) ? h( e, r ) : void 0
        }
      }

      function h( e, r ) {
        ( null == r || r > e.length ) && ( r = e.length );
        for ( var t = 0, a = new Array( r ); t < r; t++ ) a[ t ] = e[ t ];
        return a
      }! function ( e ) {
        e.COLLABORATION_GRAPH = "COLLABORATION_GRAPH", e.RECENT = "RECENT", e.SEARCH = "SEARCH", e.CURRENT_USER = "CURRENT_USER"
      }( a || ( a = {} ) );
      var g = function () {
          var e = arguments.length > 0 && void 0 !== arguments[ 0 ] ? arguments[ 0 ] : [],
            r = Object( n.useState )( e ),
            t = f( r, 2 ),
            o = t[ 0 ],
            c = t[ 1 ],
            i = Object( n.useCallback )( ( function ( e ) {
              0 !== e.length && ( e.forEach( ( function ( e ) {
                var r = o.findIndex( ( function ( r ) {
                  return r.id === e.id
                } ) ); - 1 !== r ? o[ r ] = e : o.push( e )
              } ) ), o.sort( ( function ( e, r ) {
                return e.filterSource === a.CURRENT_USER && r.filterSource !== a.CURRENT_USER ? -1 : e.filterSource !== a.CURRENT_USER && r.filterSource === a.CURRENT_USER ? 1 : 0
              } ) ), c( _( o ) ) )
            } ), [ c, o ] ),
            s = Object( n.useCallback )( ( function ( e, r ) {
              var t = o.find( ( function ( r ) {
                return r.id === e
              } ) );
              t && i( [ d( d( {}, t ), {}, {
                isChecked: r
              } ) ] )
            } ), [ o, i ] ),
            l = Object( n.useCallback )( ( function () {
              c( o.map( ( function ( e ) {
                return d( d( {}, e ), {}, {
                  isChecked: !1
                } )
              } ) ) )
            } ), [ o, c ] ),
            u = Object( n.useCallback )( ( function () {
              c( e )
            } ), [ c, e ] );
          return {
            availableFilters: o,
            addFilters: i,
            updateFilter: s,
            clearFilter: l,
            reset: u
          }
        },
        b = Object( n.createContext )( {
          projectFilters: {
            availableFilters: [],
            addFilters: function () {},
            updateFilter: function () {},
            clearFilter: function () {},
            reset: function () {}
          },
          assigneeFilters: {
            availableFilters: [],
            addFilters: function () {},
            updateFilter: function () {},
            clearFilter: function () {},
            reset: function () {}
          }
        } );

      function v( e ) {
        return {
          applied: e.map( ( function ( e, r ) {
            return d( d( {}, e ), {}, {
              index: r
            } )
          } ) ).filter( ( function ( e ) {
            return e.isChecked
          } ) ).map( ( function ( e ) {
            return {
              id: e.id,
              source: e.filterSource,
              index: e.index
            }
          } ) ),
          recommendedIds: e.map( ( function ( e ) {
            return {
              id: e.id,
              source: e.filterSource
            }
          } ) )
        }
      }
      var y = function ( e ) {
          var r = e.isEnabled,
            t = void 0 === r || r,
            a = e.defaultProjectFilters,
            n = e.defaultAssigneeFilters,
            l = e.children,
            d = o.a.useRef( t ),
            u = g( a ),
            _ = g( n ),
            f = Object( c.c )(),
            p = 0 === u.availableFilters.length && 0 === u.availableFilters.length ? {} : {
              projects: v( u.availableFilters ),
              assignees: v( _.availableFilters )
            };
          return d.current && !t && ( u.reset(), _.reset() ), d.current = t, Object( s.f )( b.Provider, {
            value: {
              projectFilters: u,
              assigneeFilters: _
            }
          }, Object( s.f )( i.a, {
            analyticContext: {
              searchSessionId: f
            },
            nonPrivacySafeAnalyticContext: {},
            filterAnalyticsContext: p
          }, l ) )
        },
        j = function () {
          return o.a.useContext( b )
        }
    },
    aCEW: function ( e, r, t ) {
      "use strict";
      t.d( r, "b", ( function () {
        return g
      } ) ), t.d( r, "c", ( function () {
        return b
      } ) ), t.d( r, "a", ( function () {
        return v
      } ) );
      var a = t( "HIRw" ),
        n = t( "I50I" ),
        o = t( "HpHT" ),
        c = t( "tKeX" ),
        i = t( "KsTJ" );

      function s() {
        var e = u( [ "\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n" ] );
        return s = function () {
          return e
        }, e
      }

      function l() {
        var e = u( [ "\n  height: ", "px;\n" ] );
        return l = function () {
          return e
        }, e
      }

      function d() {
        var e = u( [ "\n  max-height: calc(100vh - ", "px);\n  box-sizing: border-box;\n  flex: 1;\n  min-height: ", ";\n\n  @media screen and (min-height: ", "px) {\n    max-height: ", ";\n  }\n\n  @media screen and (max-width: ", "px) {\n    max-height: initial;\n    overflow: auto;\n  }\n" ] );
        return d = function () {
          return e
        }, e
      }

      function u( e, r ) {
        return r || ( r = e.slice( 0 ) ), Object.freeze( Object.defineProperties( e, {
          raw: {
            value: Object.freeze( r )
          }
        } ) )
      }
      var _ = 720 + 2 * c.e,
        f = 6 * Object( a.g )(),
        p = "".concat( _ - f, "px" ),
        h = 20 * Object( a.g )(),
        g = i.default.div( d(), h, ( function ( e ) {
          return e.minHeight ? "".concat( e.minHeight, "px" ) : "auto"
        } ), _ + h, p, n.d ),
        b = Object( i.default )( o.a )( l(), f ),
        v = i.default.div( s() )
    },
    aipD: function ( e, r, t ) {
      "use strict";
      var a = t( "zPs3" ),
        n = t( "ERkP" ),
        o = t.n( n ),
        c = t( "OMM/" ),
        i = t( "Vj7D" ),
        s = t( "/0t7" );
      r.a = function ( e ) {
        var r = e.children,
          t = e.channel,
          l = e.onEvent,
          d = Object( i.a )(),
          u = Object( s.a )( l ),
          _ = Object( s.a )( t ),
          f = Object( n.useCallback )( ( function () {
            return Object( a.d )( d.getAtlaskitAnalyticsEventHandlers(), [ function ( e, r ) {
              "*" !== _.current && _.current !== r || u.current( e, r )
            } ] )
          } ), [ d, _, u ] ),
          p = Object( n.useMemo )( ( function () {
            return {
              getAtlaskitAnalyticsEventHandlers: f,
              getAtlaskitAnalyticsContext: d.getAtlaskitAnalyticsContext
            }
          } ), [ d, f ] );
        return o.a.createElement( c.a.Provider, {
          value: p
        }, r )
      }
    },
    eq5D: function ( e, r, t ) {
      "use strict";
      t.d( r, "a", ( function () {
        return c
      } ) );
      var a = t( "ERkP" ),
        n = t.n( a ),
        o = t( "F9AR" );
      class c extends a.Component {
        render() {
          const {
            data: e,
            elementProps: r,
            innerRef: t,
            isSelected: a
          } = this.props;
          return n.a.createElement( o.b, Object.assign( {}, r, {
            innerRef: t,
            status: a ? "selected" : "normal"
          } ), e.label, a && n.a.createElement( o.c, {
            status: "selected"
          } ) )
        }
      }
      c.defaultProps = {
        data: {},
        elementProps: {},
        innerRef: () => {},
        isSelected: !1
      }
    },
    fShB: function ( e, r, t ) {
      "use strict";
      t.d( r, "b", ( function () {
        return f
      } ) ), t.d( r, "c", ( function () {
        return p
      } ) ), t.d( r, "a", ( function () {
        return h
      } ) );
      var a = t( "KsTJ" ),
        n = t( "HIRw" ),
        o = t( "L48P" ),
        c = t( "4yjS" ),
        i = t( "YKgJ" );

      function s() {
        var e = u( [ "\n  font-size: 14px;\n  line-height: ", "px;\n  padding-left: ", "px;\n" ] );
        return s = function () {
          return e
        }, e
      }

      function l() {
        var e = u( [ "\n  align-items: center;\n  color: ", ";\n  cursor: pointer;\n  display: flex;\n  width: 100%;\n  justify-content: space-between;\n  padding: ", "px ", "px;\n\n  border: ", "px solid transparent;\n\n  &:hover {\n    color: ", ";\n    background-color: ", ";\n    text-decoration: none;\n  }\n\n  :visited {\n    color: ", ";\n  }\n\n  :focus {\n    outline: none;\n    border: ", "px solid ", ";\n  }\n\n  background-color: ", ";\n" ] );
        return l = function () {
          return e
        }, e
      }

      function d() {
        var e = u( [ "\n  display: flex;\n  align-items: center;\n" ] );
        return d = function () {
          return e
        }, e
      }

      function u( e, r ) {
        return r || ( r = e.slice( 0 ) ), Object.freeze( Object.defineProperties( e, {
          raw: {
            value: Object.freeze( r )
          }
        } ) )
      }
      var _ = Object( i.a )( {
          light: o.B100,
          dark: o.B75
        } ),
        f = a.default.div( d() ),
        p = Object( c.a )( l(), o.N900, Object( n.g )() - 1, 2 * Object( n.g )() - 1, 2, o.N900, o.N20, o.N900, 2, _, ( function ( e ) {
          return e.isKeyboardHighlighted ? o.N20 : o.N0
        } ) ),
        h = a.default.span( s(), 2 * Object( n.g )(), 2 * Object( n.g )() )
    },
    iUwv: function ( e, r, t ) {
      "use strict";
      var a = t( "zPs3" ),
        n = t( "ERkP" ),
        o = t.n( n ),
        c = t( "aWzz" ),
        i = t.n( c ),
        s = t( "OMM/" ),
        l = {
          getAtlaskitAnalyticsEventHandlers: i.a.func,
          getAtlaskitAnalyticsContext: i.a.func
        },
        d = function () {
          return []
        },
        u = function ( e ) {
          function r( r ) {
            var t = e.call( this, r ) || this;
            return t.getChildContext = function () {
              return {
                getAtlaskitAnalyticsEventHandlers: t.getAnalyticsEventHandlers,
                getAtlaskitAnalyticsContext: t.getAtlaskitAnalyticsContext
              }
            }, t.getAnalyticsEventHandlers = function () {
              var e = t.props,
                r = e.channel,
                n = e.onEvent,
                o = t.context.getAtlaskitAnalyticsEventHandlers,
                c = void 0 === o ? d : o;
              return Object( a.d )( [ function ( e, t ) {
                "*" !== r && r !== t || n( e, t )
              } ], c() )
            }, t.getAtlaskitAnalyticsContext = function () {
              var e = t.context.getAtlaskitAnalyticsContext;
              return ( void 0 === e ? d : e )()
            }, t.contextValue = {
              getAtlaskitAnalyticsContext: t.getAtlaskitAnalyticsContext,
              getAtlaskitAnalyticsEventHandlers: t.getAnalyticsEventHandlers
            }, t
          }
          return Object( a.b )( r, e ), r.prototype.render = function () {
            var e = this.props.children;
            return o.a.createElement( s.a.Provider, {
              value: this.contextValue
            }, e )
          }, r.contextTypes = l, r.childContextTypes = l, r
        }( n.Component );
      r.a = u
    },
    jRDN: function ( e, r, t ) {
      "use strict";
      Object.defineProperty( r, "__esModule", {
        value: !0
      } ), r.default = void 0;
      var a = o( t( "ERkP" ) ),
        n = o( t( "4KTy" ) );

      function o( e ) {
        return e && e.__esModule ? e : {
          default: e
        }
      }

      function c() {
        return ( c = Object.assign || function ( e ) {
          for ( var r = 1; r < arguments.length; r++ ) {
            var t = arguments[ r ];
            for ( var a in t ) Object.prototype.hasOwnProperty.call( t, a ) && ( e[ a ] = t[ a ] )
          }
          return e
        } ).apply( this, arguments )
      }
      var i = function ( e ) {
        return a.default.createElement( n.default, c( {
          dangerouslySetGlyph: '<svg width="24" height="24" viewBox="0 0 24 24" focusable="false" role="presentation"><path d="M8.414 11.5H18a1 1 0 0 1 0 2H8.414l3.793 3.793a1 1 0 0 1-1.414 1.414l-5.5-5.5a1 1 0 0 1 0-1.414l5.5-5.5a1 1 0 0 1 1.414 1.414L8.414 11.5z" fill="currentColor" fill-rule="evenodd"/></svg>'
        }, e ) )
      };
      i.displayName = "ArrowLeftIcon";
      var s = i;
      r.default = s
    },
    "kC3+": function ( e, r, t ) {
      "use strict";

      function a( e, r ) {
        var t = Object.keys( e );
        if ( Object.getOwnPropertySymbols ) {
          var a = Object.getOwnPropertySymbols( e );
          r && ( a = a.filter( ( function ( r ) {
            return Object.getOwnPropertyDescriptor( e, r ).enumerable
          } ) ) ), t.push.apply( t, a )
        }
        return t
      }

      function n( e ) {
        for ( var r = 1; r < arguments.length; r++ ) {
          var t = null != arguments[ r ] ? arguments[ r ] : {};
          r % 2 ? a( Object( t ), !0 ).forEach( ( function ( r ) {
            o( e, r, t[ r ] )
          } ) ) : Object.getOwnPropertyDescriptors ? Object.defineProperties( e, Object.getOwnPropertyDescriptors( t ) ) : a( Object( t ) ).forEach( ( function ( r ) {
            Object.defineProperty( e, r, Object.getOwnPropertyDescriptor( t, r ) )
          } ) )
        }
        return e
      }

      function o( e, r, t ) {
        return r in e ? Object.defineProperty( e, r, {
          value: t,
          enumerable: !0,
          configurable: !0,
          writable: !0
        } ) : e[ r ] = t, e
      }
      t.d( r, "b", ( function () {
        return s
      } ) ), t.d( r, "d", ( function () {
        return c
      } ) ), t.d( r, "a", ( function () {
        return i
      } ) ), t.d( r, "e", ( function () {
        return d
      } ) ), t.d( r, "k", ( function () {
        return u
      } ) ), t.d( r, "q", ( function () {
        return _
      } ) ), t.d( r, "p", ( function () {
        return f
      } ) ), t.d( r, "c", ( function () {
        return l
      } ) ), t.d( r, "r", ( function () {
        return p
      } ) ), t.d( r, "v", ( function () {
        return h
      } ) ), t.d( r, "t", ( function () {
        return g
      } ) ), t.d( r, "s", ( function () {
        return b
      } ) ), t.d( r, "n", ( function () {
        return v
      } ) ), t.d( r, "o", ( function () {
        return y
      } ) ), t.d( r, "m", ( function () {
        return j
      } ) ), t.d( r, "f", ( function () {
        return m
      } ) ), t.d( r, "h", ( function () {
        return O
      } ) ), t.d( r, "i", ( function () {
        return w
      } ) ), t.d( r, "j", ( function () {
        return k
      } ) ), t.d( r, "l", ( function () {
        return S
      } ) ), t.d( r, "g", ( function () {
        return P
      } ) ), t.d( r, "u", ( function () {
        return x
      } ) );
      var c, i, s = "fabric-elements";
      ! function ( e ) {
        e.SHORTCUT = "shortcut", e.RETURN = "return", e.CLICK = "click", e.TEXT_ENTERED = "textEntered"
      }( c || ( c = {} ) ),
      function ( e ) {
        e.CONFLUENCE = "confluenceAdvancedSearchLink", e.CONFLUENCE_PEOPLE = "confluencePeopleSearchLink", e.JIRA_ISSUES = "jiraIssuesSearchLink", e.JIRA_BOARDS = "jiraBoardsSearchLink", e.JIRA_FILTERS = "jiraFiltersSearchLink", e.JIRA_PROJECTS = "jiraProjectsSearchLink", e.JIRA_PLANS = "jiraPlansSearchLink", e.JIRA_PEOPLE = "jiraPeopleSearchLink", e.NO_RESULTS = "noResultsAdvancedSearchLink"
      }( i || ( i = {} ) );
      var l, d = function ( e ) {
          var r = e.trigger;
          return {
            action: "selected",
            actionSubject: "advancedSearchLink",
            actionSubjectId: e.actionSubjectId,
            source: "searchDialog",
            eventType: "track",
            attributes: {
              trigger: r,
              isLoading: e.isLoading,
              newTab: e.newTab
            }
          }
        },
        u = function ( e ) {
          return {
            action: "selected",
            actionSubject: "moreFilterLink",
            source: "searchDialog",
            eventType: "ui",
            attributes: {
              trigger: e.trigger,
              selectedFiltersCount: e.selectedFiltersCount
            }
          }
        },
        _ = function ( e ) {
          return {
            action: "selected",
            actionSubject: "searchResult",
            actionSubjectId: e.screen,
            source: "searchDialog",
            eventType: "track",
            attributes: {}
          }
        },
        f = function ( e ) {
          return {
            action: "highlighted",
            actionSubject: "searchResult",
            actionSubjectId: e.screen,
            source: "searchDialog",
            eventType: "ui",
            attributes: {}
          }
        };
      ! function ( e ) {
        e.PREQUERY = "preQuerySearchResults", e.POSTQUERY = "postQuerySearchResults", e.CACHED = "cachedResults"
      }( l || ( l = {} ) );
      var p = function ( e ) {
          var r = e.actionSubjectId,
            t = e.resultCount,
            a = e.sectionCount,
            n = e.results;
          return {
            action: "shown",
            actionSubject: "searchResults",
            actionSubjectId: r,
            source: "searchDialog",
            eventType: "ui",
            attributes: {
              resultCount: t,
              sectionCount: a,
              timeToQueryMs: e.timeToQueryMs,
              results: n,
              activeProduct: e.activeProduct,
              isMultiProduct: e.isMultiProduct
            }
          }
        },
        h = function () {
          return {
            action: "entered",
            actionSubject: "text",
            actionSubjectId: "searchDialogTextField",
            source: "searchDialog",
            eventType: "track",
            attributes: {}
          }
        },
        g = function ( e ) {
          return {
            action: "clicked",
            actionSubject: "button",
            actionSubjectId: "showMoreButton",
            source: "searchDialog",
            eventType: "ui",
            attributes: {
              total: e.total,
              currentSize: e.currentSize,
              pageSize: e.pageSize
            }
          }
        },
        b = function ( e ) {
          return {
            action: "clicked",
            actionSubject: "button",
            actionSubjectId: "showAllLink",
            source: "searchDialog",
            eventType: "ui",
            attributes: {
              total: e.total,
              currentSize: e.currentSize,
              pageSize: e.pageSize
            }
          }
        },
        v = function ( e ) {
          return {
            name: "searchDialogPreQueryScreen",
            eventType: "screen",
            attributes: {
              searchSessionId: e.searchSessionId,
              trigger: e.trigger
            }
          }
        },
        y = function ( e ) {
          var r = e.actionSubjectId,
            t = e.timings,
            a = arguments.length > 1 && void 0 !== arguments[ 1 ] ? arguments[ 1 ] : {},
            o = arguments.length > 2 && void 0 !== arguments[ 2 ] ? arguments[ 2 ] : {
              query: ""
            };
          return {
            action: "completed",
            actionSubject: "searchRequest",
            actionSubjectId: r,
            source: "searchDialog",
            eventType: "track",
            attributes: n( n( {}, t ), a ),
            nonPrivacySafeAttributes: o
          }
        },
        j = function () {
          return {
            action: "shown",
            eventType: "ui",
            actionSubject: "searchResults",
            actionSubjectId: "preQuerySearchResults",
            attributes: {
              resultCount: 0,
              results: []
            },
            source: "searchDialog"
          }
        },
        m = function () {
          return {
            action: "dismissed",
            actionSubject: "searchDialog",
            source: "searchDialog",
            eventType: "ui"
          }
        },
        O = function ( e ) {
          return {
            action: "selected",
            actionSubject: "filter",
            actionSubjectId: "searchDialogFilter",
            source: "searchDialog",
            eventType: "ui",
            attributes: {
              filterId: e.filterId,
              filterType: e.filterType,
              filterSource: e.filterSource
            }
          }
        },
        w = function ( e ) {
          return {
            action: "unselected",
            actionSubject: "filter",
            actionSubjectId: "searchDialogFilter",
            source: "searchDialog",
            eventType: "ui",
            attributes: {
              filterId: e.filterId,
              filterType: e.filterType,
              filterSource: e.filterSource
            }
          }
        },
        k = function () {
          return {
            action: "clicked",
            actionSubject: "button",
            actionSubjectId: "searchDialogClearFilters",
            source: "searchDialog",
            eventType: "ui",
            attributes: {}
          }
        },
        S = function ( e, r ) {
          return {
            action: "loadComplete",
            actionSubject: "searchDialogPane",
            actionSubjectId: e,
            source: "searchDialog",
            eventType: "track",
            attributes: {
              durationMs: r
            }
          }
        },
        P = function ( e, r, t ) {
          return {
            action: "loaded",
            actionSubject: "experiment",
            source: "searchDialog",
            eventType: "operational",
            attributes: {
              abTest: e,
              experimentRequestDuration: r,
              isMultiProduct: t
            }
          }
        },
        x = function ( e ) {
          var r = e.tabName,
            t = arguments.length > 1 && void 0 !== arguments[ 1 ] ? arguments[ 1 ] : {},
            a = arguments.length > 2 && void 0 !== arguments[ 2 ] ? arguments[ 2 ] : {
              query: ""
            };
          return {
            action: "clicked",
            actionSubject: "tab",
            actionSubjectId: "crossProductSearchTab",
            source: "searchDialog",
            eventType: "ui",
            attributes: n( {
              tabName: r
            }, t ),
            nonPrivacySafeAttributes: a
          }
        }
    },
    r9WN: function ( e ) {
      e.exports = JSON.parse( '{"a":"@atlaskit/tabs","b":"12.1.0"}' )
    },
    sVJx: function ( e, r, t ) {
      "use strict";
      t.d( r, "a", ( function () {
        return m
      } ) );
      var a = t( "ERkP" ),
        n = t.n( a ),
        o = t( "0ygh" ),
        c = t( "kC3+" ),
        i = t( "l1C2" );

      function s( e ) {
        return ( s = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function ( e ) {
          return typeof e
        } : function ( e ) {
          return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        } )( e )
      }

      function l() {
        return ( l = Object.assign || function ( e ) {
          for ( var r = 1; r < arguments.length; r++ ) {
            var t = arguments[ r ];
            for ( var a in t ) Object.prototype.hasOwnProperty.call( t, a ) && ( e[ a ] = t[ a ] )
          }
          return e
        } ).apply( this, arguments )
      }

      function d( e, r ) {
        if ( null == e ) return {};
        var t, a, n = function ( e, r ) {
          if ( null == e ) return {};
          var t, a, n = {},
            o = Object.keys( e );
          for ( a = 0; a < o.length; a++ ) t = o[ a ], r.indexOf( t ) >= 0 || ( n[ t ] = e[ t ] );
          return n
        }( e, r );
        if ( Object.getOwnPropertySymbols ) {
          var o = Object.getOwnPropertySymbols( e );
          for ( a = 0; a < o.length; a++ ) t = o[ a ], r.indexOf( t ) >= 0 || Object.prototype.propertyIsEnumerable.call( e, t ) && ( n[ t ] = e[ t ] )
        }
        return n
      }

      function u( e, r ) {
        var t = Object.keys( e );
        if ( Object.getOwnPropertySymbols ) {
          var a = Object.getOwnPropertySymbols( e );
          r && ( a = a.filter( ( function ( r ) {
            return Object.getOwnPropertyDescriptor( e, r ).enumerable
          } ) ) ), t.push.apply( t, a )
        }
        return t
      }

      function _( e ) {
        for ( var r = 1; r < arguments.length; r++ ) {
          var t = null != arguments[ r ] ? arguments[ r ] : {};
          r % 2 ? u( Object( t ), !0 ).forEach( ( function ( r ) {
            j( e, r, t[ r ] )
          } ) ) : Object.getOwnPropertyDescriptors ? Object.defineProperties( e, Object.getOwnPropertyDescriptors( t ) ) : u( Object( t ) ).forEach( ( function ( r ) {
            Object.defineProperty( e, r, Object.getOwnPropertyDescriptor( t, r ) )
          } ) )
        }
        return e
      }

      function f( e, r ) {
        if ( !( e instanceof r ) ) throw new TypeError( "Cannot call a class as a function" )
      }

      function p( e, r ) {
        for ( var t = 0; t < r.length; t++ ) {
          var a = r[ t ];
          a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && ( a.writable = !0 ), Object.defineProperty( e, a.key, a )
        }
      }

      function h( e, r ) {
        return ( h = Object.setPrototypeOf || function ( e, r ) {
          return e.__proto__ = r, e
        } )( e, r )
      }

      function g( e ) {
        var r = function () {
          if ( "undefined" == typeof Reflect || !Reflect.construct ) return !1;
          if ( Reflect.construct.sham ) return !1;
          if ( "function" == typeof Proxy ) return !0;
          try {
            return Date.prototype.toString.call( Reflect.construct( Date, [], ( function () {} ) ) ), !0
          } catch ( e ) {
            return !1
          }
        }();
        return function () {
          var t, a = y( e );
          if ( r ) {
            var n = y( this ).constructor;
            t = Reflect.construct( a, arguments, n )
          } else t = a.apply( this, arguments );
          return b( this, t )
        }
      }

      function b( e, r ) {
        return !r || "object" !== s( r ) && "function" != typeof r ? v( e ) : r
      }

      function v( e ) {
        if ( void 0 === e ) throw new ReferenceError( "this hasn't been initialised - super() hasn't been called" );
        return e
      }

      function y( e ) {
        return ( y = Object.setPrototypeOf ? Object.getPrototypeOf : function ( e ) {
          return e.__proto__ || Object.getPrototypeOf( e )
        } )( e )
      }

      function j( e, r, t ) {
        return r in e ? Object.defineProperty( e, r, {
          value: t,
          enumerable: !0,
          configurable: !0,
          writable: !0
        } ) : e[ r ] = t, e
      }

      function m( e ) {
        return function ( r ) {
          var t = function ( t ) {
            ! function ( e, r ) {
              if ( "function" != typeof r && null !== r ) throw new TypeError( "Super expression must either be null or a function" );
              e.prototype = Object.create( r && r.prototype, {
                constructor: {
                  value: e,
                  writable: !0,
                  configurable: !0
                }
              } ), r && h( e, r )
            }( u, t );
            var a, n, o, s = g( u );

            function u() {
              var r;
              f( this, u );
              for ( var t = arguments.length, a = new Array( t ), n = 0; n < t; n++ ) a[ n ] = arguments[ n ];
              return j( v( r = s.call.apply( s, [ this ].concat( a ) ) ), "wrappedAnalyticsCallback", Object.keys( e ).reduce( ( function ( t, a ) {
                return _( _( {}, t ), {}, j( {}, a, ( function () {
                  r.props.createAnalyticsEvent && r.props.createAnalyticsEvent( e[ a ].apply( e, arguments ) ).fire( c.b )
                } ) ) )
              } ), {} ) ), r
            }
            return a = u, ( n = [ {
              key: "render",
              value: function () {
                var e = this.props,
                  t = ( e.createAnalyticsEvent, d( e, [ "createAnalyticsEvent" ] ) );
                return Object( i.f )( r, l( {}, t, this.wrappedAnalyticsCallback ) )
              }
            } ] ) && p( a.prototype, n ), o && p( a, o ), u
          }( n.a.Component );
          return Object( o.a )()( t )
        }
      }
    },
    tKeX: function ( e, r, t ) {
      "use strict";
      t.d( r, "e", ( function () {
        return f
      } ) ), t.d( r, "a", ( function () {
        return p
      } ) ), t.d( r, "c", ( function () {
        return h
      } ) ), t.d( r, "d", ( function () {
        return g
      } ) ), t.d( r, "b", ( function () {
        return b
      } ) );
      var a = t( "KsTJ" ),
        n = t( "HIRw" ),
        o = t( "L48P" );

      function c() {
        var e = d( [ "\n  display: flex;\n  height: 100%;\n  min-height: inherit;\n  max-height: inherit;\n" ] );
        return c = function () {
          return e
        }, e
      }

      function i() {
        var e = d( [ "\n  padding: 0 ", "px;\n  border-left: 1px solid ", ";\n  height: 100%;\n" ] );
        return i = function () {
          return e
        }, e
      }

      function s() {
        var e = d( [ "\n  overflow-x: hidden;\n  overflow-y: auto;\n  flex: 0 0 auto;\n  width: ", "px;\n  box-sizing: border-box;\n  padding: ", "px 0;\n" ] );
        return s = function () {
          return e
        }, e
      }

      function l() {
        var e = d( [ "\n  overflow-x: hidden;\n  overflow-y: auto;\n  flex: 1;\n  max-width: 100%;\n  padding: ", "px 0;\n  box-sizing: border-box;\n" ] );
        return l = function () {
          return e
        }, e
      }

      function d( e, r ) {
        return r || ( r = e.slice( 0 ) ), Object.freeze( Object.defineProperties( e, {
          raw: {
            value: Object.freeze( r )
          }
        } ) )
      }
      var u = 34 * Object( n.g )(),
        _ = 2 * Object( n.g )(),
        f = Object( n.g )(),
        p = a.default.div( l(), f ),
        h = a.default.div( s(), u, _ ),
        g = a.default.div( i(), 2 * Object( n.g )(), o.N30 ),
        b = a.default.div( c() )
    },
    tbcT: function ( e, r, t ) {
      "use strict";
      t.d( r, "a", ( function () {
        return h
      } ) ), t.d( r, "b", ( function () {
        return g
      } ) );
      var a = t( "ERkP" ),
        n = t.n( a ),
        o = t( "2wjc" ),
        c = t( "kC3+" ),
        i = t( "O4tY" ),
        s = t( "ZJnE" ),
        l = t( "l1C2" );

      function d( e, r ) {
        return function ( e ) {
          if ( Array.isArray( e ) ) return e
        }( e ) || function ( e, r ) {
          if ( "undefined" == typeof Symbol || !( Symbol.iterator in Object( e ) ) ) return;
          var t = [],
            a = !0,
            n = !1,
            o = void 0;
          try {
            for ( var c, i = e[ Symbol.iterator ](); !( a = ( c = i.next() ).done ) && ( t.push( c.value ), !r || t.length !== r ); a = !0 );
          } catch ( s ) {
            n = !0, o = s
          } finally {
            try {
              a || null == i.return || i.return()
            } finally {
              if ( n ) throw o
            }
          }
          return t
        }( e, r ) || function ( e, r ) {
          if ( !e ) return;
          if ( "string" == typeof e ) return u( e, r );
          var t = Object.prototype.toString.call( e ).slice( 8, -1 );
          "Object" === t && e.constructor && ( t = e.constructor.name );
          if ( "Map" === t || "Set" === t ) return Array.from( e );
          if ( "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test( t ) ) return u( e, r )
        }( e, r ) || function () {
          throw new TypeError( "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method." )
        }()
      }

      function u( e, r ) {
        ( null == r || r > e.length ) && ( r = e.length );
        for ( var t = 0, a = new Array( r ); t < r; t++ ) a[ t ] = e[ t ];
        return a
      }
      var _ = {
          abTestId: "default",
          controlId: "default",
          experimentId: "nav-v3"
        },
        f = new Error( "Experimentation data has not been initialised, please ensure that there is an ABTestContext.Provider available" ),
        p = n.a.createContext( {
          abTest: null
        } ),
        h = function ( e ) {
          var r = e.searchClient,
            t = e.isMultiProduct,
            n = e.children,
            u = d( Object( a.useState )( null ), 2 ),
            f = u[ 0 ],
            h = u[ 1 ],
            g = Object( o.a )().fireAnalyticsEvent;
          return Object( a.useEffect )( ( function () {
            var e = Date.now();
            r.getAbTestData().then( ( function ( r ) {
              var a = Date.now() - e,
                n = r || _;
              h( n ), g( Object( c.g )( n, a, !!t ) )
            } ) ).catch( ( function ( e ) {
              h( _ )
            } ) )
          } ), [ r, g, t ] ), f ? Object( l.f )( p.Provider, {
            value: {
              abTest: f
            }
          }, Object( l.f )( i.a, {
            analyticContext: {
              abTest: f
            },
            nonPrivacySafeAnalyticContext: {}
          }, n ) ) : Object( l.f )( s.a, null )
        },
        g = function () {
          var e = Object( a.useContext )( p ).abTest;
          if ( !e ) throw f;
          return e
        }
    },
    tfj5: function ( e, r, t ) {
      "use strict";
      ( function ( e ) {
        var a, n = t( "iUwv" ),
          o = t( "aipD" );
        a = e.env.ANALYTICS_NEXT_MODERN_CONTEXT ? o.a : n.a, r.a = a
      } ).call( this, t( "F63i" ) )
    },
    uJnn: function ( e, r, t ) {
      "use strict";
      t( "ERkP" );
      var a = t( "KsTJ" ),
        n = t( "HIRw" );

      function o() {
        var e = i( [ "\n  height: ", "px;\n  width: 100%;\n  display: flex;\n  align-items: center;\n" ] );
        return o = function () {
          return e
        }, e
      }

      function c() {
        var e = i( [ "\n  margin: 0 auto;\n" ] );
        return c = function () {
          return e
        }, e
      }

      function i( e, r ) {
        return r || ( r = e.slice( 0 ) ), Object.freeze( Object.defineProperties( e, {
          raw: {
            value: Object.freeze( r )
          }
        } ) )
      }
      var s = a.default.div( c() ),
        l = a.default.div( o(), 12 * Object( n.g )() ),
        d = t( "lRcl" ),
        u = t( "l1C2" );
      t.d( r, "a", ( function () {
        return _
      } ) );
      var _ = function () {
        return Object( u.f )( l, null, Object( u.f )( s, null, Object( u.f )( d.a, null ) ) )
      }
    },
    xsIe: function ( e, r, t ) {
      "use strict";
      var a = t( "ERkP" ),
        n = t.n( a ),
        o = t( "zJ/j" ),
        c = t( "XFpn" ),
        i = t.n( c ),
        s = t( "1whV" ),
        l = t.n( s ),
        d = t( "6qVS" ),
        u = t.n( d ),
        _ = t( "o0fs" ),
        f = t.n( _ ),
        p = t( "OOEx" ),
        h = t.n( p ),
        g = t( "3IV/" );
      const b = {
        info: {
          backgroundColor: g.B50,
          Icon: u.a,
          primaryIconColor: g.B500
        },
        warning: {
          backgroundColor: g.Y50,
          Icon: h.a,
          primaryIconColor: g.Y500
        },
        error: {
          backgroundColor: g.R50,
          Icon: l.a,
          primaryIconColor: g.R500
        },
        confirmation: {
          backgroundColor: g.G50,
          Icon: i.a,
          primaryIconColor: g.G500
        },
        change: {
          backgroundColor: g.P50,
          Icon: f.a,
          primaryIconColor: g.P500
        }
      };
      var v = t( "KsTJ" ),
        y = t( "BMbf" ),
        j = t( "WEdt" );
      const m = v.default.section `
  display: flex;
  border-radius: ${y.c}px;
  background-color: ${({backgroundColor:e})=>e};
  padding: ${2*Object(y.h)()}px;
`,
        O = v.default.div `
  flex-grow: 1;
`,
        w = v.default.h1 `
  margin: 0;
  ${j.h500};
`,
        k = v.default.div `
  * + & {
    margin-top: 8px;
  }
`,
        S = v.default.ul `
  display: flex;
  list-style: none;
  padding-left: 0;
  * + & {
    margin-top: 8px;
  }
`,
        P = v.default.li `
  align-items: center;
  display: flex;
  margin: 0;
  & + &::before {
    color: ${g.N500};
    content: '·';
    display: inline-block;
    text-align: center;
    vertical-align: middle;
    width: ${2*Object(y.h)()}px;
  }
`,
        x = v.default.div `
  flex: 0 0 auto;
  width: ${5*Object(y.h)()}px;
  > span {
    margin: -2px 0;
    vertical-align: top;
  }
`;
      t.d( r, "a", ( function () {
        return C
      } ) );
      class C extends n.a.Component {
        constructor() {
          super( ...arguments ), this.renderAction = ( e, r ) => {
            const {
              href: t,
              key: a,
              onClick: c,
              text: i,
              testId: s
            } = e;
            return n.a.createElement( P, {
              key: a,
              "data-testid": s
            }, c || t ? n.a.createElement( o.a, {
              appearance: "link",
              spacing: "none",
              onClick: c,
              href: t,
              component: r
            }, i ) : i )
          }
        }
        render() {
          const {
            children: e,
            title: r,
            actions: t,
            appearance: a,
            icon: o,
            linkComponent: c,
            testId: i
          } = this.props, s = b[ a ] || b.info, l = o || s.Icon;
          return n.a.createElement( m, {
            backgroundColor: s.backgroundColor,
            "data-testid": i
          }, n.a.createElement( x, null, n.a.createElement( l, {
            primaryColor: s.primaryIconColor,
            secondaryColor: s.backgroundColor
          } ) ), n.a.createElement( O, null, r ? n.a.createElement( w, null, r ) : null, e ? n.a.createElement( k, null, e ) : null, t && t.length ? n.a.createElement( S, null, t.map( e => this.renderAction( e, c ) ) ) : null ) )
        }
      }
      C.defaultProps = {
        appearance: "info"
      }
    },
    zB3U: function ( e, r, t ) {
      "use strict";
      t.d( r, "b", ( function () {
        return S
      } ) ), t.d( r, "a", ( function () {
        return P
      } ) ), t.d( r, "c", ( function () {
        return x
      } ) );
      var a = t( "ERkP" ),
        n = t.n( a ),
        o = t( "IC1n" ),
        c = t.n( o ),
        i = t( "O4tY" ),
        s = t( "l1C2" );

      function l( e, r ) {
        for ( var t = 0; t < r.length; t++ ) {
          var a = r[ t ];
          a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && ( a.writable = !0 ), Object.defineProperty( e, a.key, a )
        }
      }

      function d( e, r, t ) {
        return r in e ? Object.defineProperty( e, r, {
          value: t,
          enumerable: !0,
          configurable: !0,
          writable: !0
        } ) : e[ r ] = t, e
      }

      function u() {
        return ( u = Object.assign || function ( e ) {
          for ( var r = 1; r < arguments.length; r++ ) {
            var t = arguments[ r ];
            for ( var a in t ) Object.prototype.hasOwnProperty.call( t, a ) && ( e[ a ] = t[ a ] )
          }
          return e
        } ).apply( this, arguments )
      }

      function _( e ) {
        return ( _ = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function ( e ) {
          return typeof e
        } : function ( e ) {
          return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        } )( e )
      }

      function f( e, r ) {
        if ( !( e instanceof r ) ) throw new TypeError( "Cannot call a class as a function" )
      }

      function p( e, r ) {
        if ( "function" != typeof r && null !== r ) throw new TypeError( "Super expression must either be null or a function" );
        e.prototype = Object.create( r && r.prototype, {
          constructor: {
            value: e,
            writable: !0,
            configurable: !0
          }
        } ), r && m( e, r )
      }

      function h( e ) {
        var r = j();
        return function () {
          var t, a = O( e );
          if ( r ) {
            var n = O( this ).constructor;
            t = Reflect.construct( a, arguments, n )
          } else t = a.apply( this, arguments );
          return g( this, t )
        }
      }

      function g( e, r ) {
        return !r || "object" !== _( r ) && "function" != typeof r ? b( e ) : r
      }

      function b( e ) {
        if ( void 0 === e ) throw new ReferenceError( "this hasn't been initialised - super() hasn't been called" );
        return e
      }

      function v( e ) {
        var r = "function" == typeof Map ? new Map : void 0;
        return ( v = function ( e ) {
          if ( null === e || ( t = e, -1 === Function.toString.call( t ).indexOf( "[native code]" ) ) ) return e;
          var t;
          if ( "function" != typeof e ) throw new TypeError( "Super expression must either be null or a function" );
          if ( void 0 !== r ) {
            if ( r.has( e ) ) return r.get( e );
            r.set( e, a )
          }

          function a() {
            return y( e, arguments, O( this ).constructor )
          }
          return a.prototype = Object.create( e.prototype, {
            constructor: {
              value: a,
              enumerable: !1,
              writable: !0,
              configurable: !0
            }
          } ), m( a, e )
        } )( e )
      }

      function y( e, r, t ) {
        return ( y = j() ? Reflect.construct : function ( e, r, t ) {
          var a = [ null ];
          a.push.apply( a, r );
          var n = new( Function.bind.apply( e, a ) );
          return t && m( n, t.prototype ), n
        } ).apply( null, arguments )
      }

      function j() {
        if ( "undefined" == typeof Reflect || !Reflect.construct ) return !1;
        if ( Reflect.construct.sham ) return !1;
        if ( "function" == typeof Proxy ) return !0;
        try {
          return Date.prototype.toString.call( Reflect.construct( Date, [], ( function () {} ) ) ), !0
        } catch ( e ) {
          return !1
        }
      }

      function m( e, r ) {
        return ( m = Object.setPrototypeOf || function ( e, r ) {
          return e.__proto__ = r, e
        } )( e, r )
      }

      function O( e ) {
        return ( O = Object.setPrototypeOf ? Object.getPrototypeOf : function ( e ) {
          return e.__proto__ || Object.getPrototypeOf( e )
        } )( e )
      }
      var w = n.a.createContext( {
          searchSessionId: void 0
        } ),
        k = function ( e ) {
          p( t, e );
          var r = h( t );

          function t() {
            return f( this, t ), r.call( this, "Could not find any SearchSessionProvider, make sure there is a SearchSessionProvider further up the tree" )
          }
          return t
        }( v( Error ) );

      function S( e ) {
        return function ( r ) {
          return Object( s.f )( w.Consumer, null, ( function ( t ) {
            var a = t.searchSessionId;
            if ( !a ) throw new k;
            return Object( s.f )( e, u( {}, r, {
              searchSessionId: a
            } ) )
          } ) )
        }
      }
      var P = function ( e ) {
        p( o, e );
        var r, t, a, n = h( o );

        function o() {
          var e;
          f( this, o );
          for ( var r = arguments.length, t = new Array( r ), a = 0; a < r; a++ ) t[ a ] = arguments[ a ];
          return d( b( e = n.call.apply( n, [ this ].concat( t ) ) ), "state", {
            sessionKey: e.props.sessionKey,
            searchSessionId: c()()
          } ), e
        }
        return r = o, a = [ {
          key: "getDerivedStateFromProps",
          value: function ( e, r ) {
            return {
              sessionKey: e.sessionKey,
              searchSessionId: e.sessionKey !== r.sessionKey ? c()() : r.searchSessionId
            }
          }
        } ], ( t = [ {
          key: "render",
          value: function () {
            var e = this.props.children,
              r = this.state.searchSessionId;
            return Object( s.f )( w.Provider, {
              value: {
                searchSessionId: r
              }
            }, Object( s.f )( i.a, {
              analyticContext: {
                searchSessionId: r
              },
              nonPrivacySafeAnalyticContext: {}
            }, e ) )
          }
        } ] ) && l( r.prototype, t ), a && l( r, a ), o
      }( n.a.Component );

      function x() {
        var e = Object( a.useContext )( w ).searchSessionId;
        if ( e ) return e;
        throw new k
      }
    }
  }
] );
//# sourceMappingURL=147.NoeBEUtrii.js.map
