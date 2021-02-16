( window.webpackJsonp = window.webpackJsonp || [] ).push( [
  [ 90 ], {
    "/2pk": function ( e, t, a ) {
      "use strict";
      Object.defineProperty( t, "__esModule", {
        value: !0
      } ), t.default = void 0;
      var n = s( a( "ERkP" ) ),
        i = s( a( "4KTy" ) );

      function s( e ) {
        return e && e.__esModule ? e : {
          default: e
        }
      }

      function c() {
        return ( c = Object.assign || function ( e ) {
          for ( var t = 1; t < arguments.length; t++ ) {
            var a = arguments[ t ];
            for ( var n in a ) Object.prototype.hasOwnProperty.call( a, n ) && ( e[ n ] = a[ n ] )
          }
          return e
        } ).apply( this, arguments )
      }
      var o = function ( e ) {
        return n.default.createElement( i.default, c( {
          dangerouslySetGlyph: '<svg width="24" height="24" viewBox="0 0 24 24" focusable="false" role="presentation"><g fill="currentColor" fill-rule="evenodd"><path d="M11.983 15.984a4.005 4.005 0 0 1-4.002-4c0-2.206 1.795-4 4.002-4a4.005 4.005 0 0 1 4.002 4c0 2.206-1.795 4-4.002 4M12 4C6.48 4 2 8.84 2 12c0 3.086 4.577 8 10 8s10-4.914 10-8c0-3.16-4.481-8-10-8"/><circle cx="12" cy="12" r="2"/></g></svg>'
        }, e ) )
      };
      o.displayName = "WatchFilledIcon";
      var r = o;
      t.default = r
    },
    "6OoW": function ( e, t, a ) {
      "use strict";
      a.d( t, "a", ( function () {
        return c
      } ) );
      var n = a( "zjfJ" ),
        i = a( "lZoD" ),
        s = a( "UhQU" );
      class c extends i.a {
        constructor( ...e ) {
          super( ...e ), Object( n.a )( this, "state", {
            selectedTab: s.a.PAGE
          } )
        }
        getSelectedTab() {
          return this.state.selectedTab
        }
        getSelectedTabIndex() {
          return this.state.selectedTab === s.a.PAGE ? 0 : 1
        }
        setSelectedTab( e ) {
          this.setState( {
            selectedTab: e
          } )
        }
      }
    },
    CLO0: function ( e, t, a ) {
      "use strict";
      Object.defineProperty( t, "__esModule", {
        value: !0
      } ), t.default = void 0;
      var n = s( a( "ERkP" ) ),
        i = s( a( "4KTy" ) );

      function s( e ) {
        return e && e.__esModule ? e : {
          default: e
        }
      }

      function c() {
        return ( c = Object.assign || function ( e ) {
          for ( var t = 1; t < arguments.length; t++ ) {
            var a = arguments[ t ];
            for ( var n in a ) Object.prototype.hasOwnProperty.call( a, n ) && ( e[ n ] = a[ n ] )
          }
          return e
        } ).apply( this, arguments )
      }
      var o = function ( e ) {
        return n.default.createElement( i.default, c( {
          dangerouslySetGlyph: '<svg width="24" height="24" viewBox="0 0 24 24" focusable="false" role="presentation"><g fill="currentColor" fill-rule="evenodd"><path d="M12 18c-4.536 0-7.999-4.26-7.999-6 0-2.001 3.459-6 8-6 4.376 0 7.998 3.973 7.998 6 0 1.74-3.462 6-7.998 6m0-14C6.48 4 2 8.841 2 12c0 3.086 4.576 8 10 8 5.423 0 10-4.914 10-8 0-3.159-4.48-8-10-8"/><path d="M11.977 13.984c-1.103 0-2-.897-2-2s.897-2 2-2c1.104 0 2 .897 2 2s-.896 2-2 2m0-6c-2.206 0-4 1.794-4 4s1.794 4 4 4c2.207 0 4-1.794 4-4s-1.793-4-4-4"/></g></svg>'
        }, e ) )
      };
      o.displayName = "WatchIcon";
      var r = o;
      t.default = r
    },
    ESpw: function ( e, t, a ) {
      "use strict";
      a.d( t, "b", ( function () {
        return n
      } ) ), a.d( t, "a", ( function () {
        return i
      } ) );
      const n = e => ( {} ),
        i = function ( e, t = Object.create( Object.prototype ) ) {
          if ( !e ) throw new Error( "a default set of overrides *must* be passed in as the first argument" );
          return function ( a ) {
            const {
              cssFn: n,
              attributesFn: i,
              component: s
            } = e[ a ];
            if ( !t[ a ] ) return {
              cssFn: n,
              attributesFn: i,
              component: s
            };
            const {
              cssFn: c,
              attributesFn: o,
              component: r
            } = t[ a ];
            return {
              cssFn: c ? e => c( n( e ), e ) : n,
              attributesFn: o || i,
              component: r || s
            }
          }
        }
    },
    "GNK+": function ( e ) {
      e.exports = JSON.parse( '{"a":"@atlaskit/checkbox","b":"11.0.7"}' )
    },
    JGo4: function ( e, t, a ) {
      "use strict";
      Object.defineProperty( t, "__esModule", {
        value: !0
      } ), t.default = void 0;
      var n = s( a( "ERkP" ) ),
        i = s( a( "4KTy" ) );

      function s( e ) {
        return e && e.__esModule ? e : {
          default: e
        }
      }

      function c() {
        return ( c = Object.assign || function ( e ) {
          for ( var t = 1; t < arguments.length; t++ ) {
            var a = arguments[ t ];
            for ( var n in a ) Object.prototype.hasOwnProperty.call( a, n ) && ( e[ n ] = a[ n ] )
          }
          return e
        } ).apply( this, arguments )
      }
      var o = function ( e ) {
        return n.default.createElement( i.default, c( {
          dangerouslySetGlyph: '<svg width="24" height="24" viewBox="0 0 24 24" focusable="false" role="presentation"><path d="M4.02 19.23a1 1 0 0 0 1.18 1.18l3.81-.78-4.21-4.21-.78 3.81zm5.921-2.62l-2.12-2.12L16.306 6h.002l2.121 2.121-8.489 8.49zm9.903-9.903l-2.12-2.122A1.997 1.997 0 0 0 16.308 4c-.512 0-1.024.195-1.415.585l-9.757 9.758 4.95 4.95 9.757-9.758a2 2 0 0 0 0-2.828z" fill="currentColor" fill-rule="evenodd"/></svg>'
        }, e ) )
      };
      o.displayName = "EditIcon";
      var r = o;
      t.default = r
    },
    N4KI: function ( e, t, a ) {
      "use strict";
      Object.defineProperty( t, "__esModule", {
        value: !0
      } ), t.default = void 0;
      var n = s( a( "ERkP" ) ),
        i = s( a( "4KTy" ) );

      function s( e ) {
        return e && e.__esModule ? e : {
          default: e
        }
      }

      function c() {
        return ( c = Object.assign || function ( e ) {
          for ( var t = 1; t < arguments.length; t++ ) {
            var a = arguments[ t ];
            for ( var n in a ) Object.prototype.hasOwnProperty.call( a, n ) && ( e[ n ] = a[ n ] )
          }
          return e
        } ).apply( this, arguments )
      }
      var o = function ( e ) {
        return n.default.createElement( i.default, c( {
          dangerouslySetGlyph: '<svg width="24" height="24" viewBox="0 0 24 24" focusable="false" role="presentation"><g fill-rule="evenodd"><rect fill="currentColor" x="6" y="6" width="12" height="12" rx="2"/><rect fill="inherit" x="8" y="11" width="8" height="2" rx="1"/></g></svg>'
        }, e ) )
      };
      o.displayName = "CheckboxIndeterminateIcon";
      var r = o;
      t.default = r
    },
    "Ua+b": function ( e, t, a ) {
      "use strict";
      a.d( t, "a", ( function () {
        return l
      } ) );
      var n = a( "ERkP" ),
        i = a.n( n ),
        s = ( a( "aWzz" ), a( "KsTJ" ) ),
        c = a( "3IV/" );
      const o = s.default.div `
  display: flex;
  line-height: 1.3;
  padding-bottom: 1px;
  padding-top: 1px;
`,
        r = s.default.div `
  background-color: ${c.N400};
  border-radius: 2px;
  margin-left: ${e=>e.hasContentBefore?4:2}px;
  margin-right: ${e=>e.hasContentBefore?0:2}px;
  padding: 1px 8px;
  line-height: 1.2;
`,
        l = ( {
          shortcut: e,
          contentBefore: t
        } ) => i.a.createElement( o, null, t, e.split( " " ).map( e => i.a.createElement( r, {
          key: e,
          hasContentBefore: !!t
        }, e ) ) )
    },
    UhQU: function ( e, t, a ) {
      "use strict";
      a.d( t, "a", ( function () {
        return n
      } ) );
      const n = {
        PAGE: "PAGE",
        SPACE: "SPACE"
      }
    },
    bXhU: function ( e, t, a ) {
      "use strict";
      var n = a( "HbGN" ),
        i = a( "ERkP" ),
        s = a.n( i ),
        c = a( "lSUb" ),
        o = a( "xQ8g" ),
        r = a.n( o ),
        l = a( "N4KI" ),
        h = a.n( l ),
        d = a( "EFzz" ),
        p = a( "Czhu" ),
        u = a( "l1C2" ),
        g = a( "ESpw" );
      const b = e => {
          let {
            tokens: t
          } = e, a = Object( n.a )( e, [ "tokens" ] );
          return a.isDisabled ? {
            stroke: ( i = t.icon ).borderColor.disabled,
            strokeWidth: i.borderWidth
          } : a.isActive ? ( e => ( {
            stroke: e.borderColor.active,
            strokeWidth: e.borderWidth
          } ) )( t.icon ) : a.isFocused ? ( e => ( {
            stroke: e.borderColor.focused,
            strokeWidth: e.borderWidth
          } ) )( t.icon ) : a.isInvalid ? a.isChecked ? ( e => ( {
            stroke: e.borderColor.invalidAndChecked,
            strokeWidth: e.borderWidth
          } ) )( t.icon ) : ( e => ( {
            stroke: e.borderColor.invalid,
            strokeWidth: e.borderWidth
          } ) )( t.icon ) : a.isHovered ? a.isChecked ? ( e => ( {
            stroke: e.borderColor.hoveredAndChecked,
            strokeWidth: e.borderWidth
          } ) )( t.icon ) : ( e => ( {
            stroke: e.borderColor.hovered,
            strokeWidth: e.borderWidth
          } ) )( t.icon ) : a.isChecked ? ( e => ( {
            stroke: e.borderColor.checked,
            strokeWidth: e.borderWidth
          } ) )( t.icon ) : {
            stroke: t.icon.borderColor.rest,
            strokeWidth: t.icon.borderWidth
          };
          var i
        },
        w = e => {
          const {
            isChecked: t,
            isDisabled: a,
            isActive: n,
            tokens: {
              icon: i
            }
          } = e;
          let s = i.tickColor.checked;
          return a && t ? s = i.tickColor.disabledAndChecked : n && t && !a ? s = i.tickColor.activeAndChecked : t || ( s = i.tickColor.rest ), s
        },
        m = e => {
          const {
            isChecked: t,
            isDisabled: a,
            isActive: n,
            isHovered: i,
            tokens: {
              icon: s
            }
          } = e;
          let c = s.boxColor.rest;
          return a ? c = s.boxColor.disabled : n ? c = s.boxColor.active : i && t ? c = s.boxColor.hoveredAndChecked : i ? c = s.boxColor.hovered : t && ( c = s.boxColor.checked ), c
        };
      var f = {
          component: function ( e ) {
            let {
              attributesFn: t,
              cssFn: a,
              children: i
            } = e, s = Object( n.a )( e, [ "attributesFn", "cssFn", "children" ] );
            return Object( u.f )( "span", Object.assign( {
              css: a( s )
            }, t( s ), {
              children: i
            } ) )
          },
          cssFn: e => ( {
            lineHeight: 0,
            flexShrink: 0,
            color: m( e ),
            fill: w( e ),
            transition: "all 0.2s ease-in-out;",
            "& rect:first-of-type": Object( p.a )( {
              transition: "stroke 0.2s ease-in-out;"
            }, b( e ) ),
            "> span": {
              display: "flex"
            }
          } ),
          attributesFn: g.b
        },
        v = a( "oXDD" );
      a.d( t, "a", ( function () {
        return k
      } ) );
      const C = {
        IconWrapper: f,
        IconIndeterminate: {
          component: h.a
        },
        Icon: {
          component: r.a
        }
      };
      class k extends i.Component {
        constructor( e ) {
          super( e ), this.createExtender = Object( c.default )( g.a ).bind( this )
        }
        render() {
          const {
            isChecked: e,
            isDisabled: t,
            isInvalid: a,
            isActive: i,
            isFocused: c,
            isHovered: o,
            isIndeterminate: r,
            overrides: l,
            primaryColor: h,
            secondaryColor: p,
            theme: u
          } = this.props, g = this.createExtender( C, l ), b = g( "IconWrapper" ), {
            component: w
          } = b, m = Object( n.a )( b, [ "component" ] ), {
            component: f
          } = g( "IconIndeterminate" ), {
            component: k
          } = g( "Icon" );
          return s.a.createElement( v.b.Provider, {
            value: u
          }, s.a.createElement( d.a.Consumer, null, ( {
            mode: n
          } ) => s.a.createElement( v.b.Consumer, {
            mode: n,
            tokens: v.a
          }, n => s.a.createElement( w, Object.assign( {}, m, {
            tokens: n,
            isChecked: e,
            isDisabled: t,
            isFocused: c,
            isActive: i,
            isHovered: o,
            isInvalid: a
          } ), r ? s.a.createElement( f, {
            primaryColor: h,
            secondaryColor: p,
            size: n.icon.size,
            label: ""
          } ) : s.a.createElement( k, {
            primaryColor: h,
            secondaryColor: p,
            size: n.icon.size,
            label: ""
          } ) ) ) ) )
        }
      }
      k.defaultProps = {
        primaryColor: "inherit",
        secondaryColor: "inherit",
        isIndeterminate: !1,
        theme: ( e, t ) => e( t )
      }
    },
    kgsK: function ( e, t, a ) {
      "use strict";
      var n = a( "HbGN" ),
        i = a( "ERkP" ),
        s = a.n( i ),
        c = a( "lSUb" ),
        o = a( "Cmaw" ),
        r = a( "ORIB" ),
        l = a( "lbXe" ),
        h = a( "EFzz" ),
        d = a( "bXhU" ),
        p = a( "Czhu" ),
        u = a( "l1C2" ),
        g = a( "BMbf" ),
        b = a( "ESpw" );
      var w = {
        component: function ( {
          attributesFn: e,
          children: t,
          isDisabled: a,
          onMouseUp: n,
          onMouseDown: i,
          onMouseLeave: s,
          onMouseEnter: c,
          tokens: o,
          cssFn: r,
          testId: l
        } ) {
          return Object( u.f )( "label", Object.assign( {}, e( {
            isDisabled: a
          } ), {
            onMouseUp: n,
            onMouseDown: i,
            onMouseLeave: s,
            onMouseEnter: c,
            css: r( {
              isDisabled: a,
              tokens: o
            } ),
            "data-testid": l
          } ), t )
        },
        cssFn: ( {
          isDisabled: e,
          tokens: t
        } ) => Object( p.a )( {
          fontFamily: Object( g.e )(),
          alignItems: "flex-start",
          display: "flex",
          color: e ? t.label.textColor.disabled : t.label.textColor.rest
        }, e && {
          cursor: "not-allowed"
        } ),
        attributesFn: b.b
      };
      var m = {
          component: function ( {
            attributesFn: e,
            tokens: t,
            children: a,
            cssFn: n
          } ) {
            return Object( u.f )( "span", Object.assign( {}, e(), {
              css: n( {
                tokens: t
              } )
            } ), a )
          },
          cssFn: ( {
            tokens: e
          } ) => ( {
            paddingTop: e.label.spacing.top,
            paddingRight: e.label.spacing.right,
            paddingBottom: e.label.spacing.bottom,
            paddingLeft: e.label.spacing.left
          } ),
          attributesFn: b.b
        },
        f = ( {
          children: e
        } ) => Object( u.f )( "span", {
          css: {
            display: "flex;",
            flexShrink: 0,
            position: "relative"
          }
        }, e ),
        v = Object( i.forwardRef )( ( e, t ) => {
          let {
            createAnalyticsEvent: a,
            attributesFn: i,
            testId: s
          } = e, c = Object( n.a )( e, [ "createAnalyticsEvent", "attributesFn", "testId" ] );
          return Object( u.f )( "input", Object.assign( {
            type: "checkbox"
          }, i( {
            disabled: c.disabled,
            checked: c.checked,
            required: c.required
          } ), c, {
            ref: t,
            css: {
              left: "50%",
              margin: 0,
              opacity: 0,
              padding: 0,
              position: "absolute",
              transform: "translate(-50%, -50%)",
              top: "50%",
              pointerEvents: "none"
            },
            "data-testid": s
          } ) )
        } ),
        C = a( "ZgvQ" ),
        k = e => {
          let {
            tokens: t
          } = e, a = Object( n.a )( e, [ "tokens" ] );
          return Object( u.f )( "span", Object.assign( {
            css: {
              color: t.requiredIndicator.textColor.rest,
              paddingLeft: Object( C.multiply )( g.h, .25 ) + "px;"
            }
          }, a ) )
        },
        y = a( "oXDD" ),
        W = a( "GNK+" );
      const I = {
        Label: w,
        LabelText: m,
        HiddenCheckbox: {
          attributesFn: () => ( {} )
        }
      };
      class S extends i.Component {
        constructor( e ) {
          super( e ), this.state = {
            isActive: !1,
            isFocused: !1,
            isHovered: !1,
            isMouseDown: !1,
            isChecked: void 0 !== this.props.isChecked ? this.props.isChecked : this.props.defaultChecked
          }, this.checkbox = void 0, this.actionKeys = [ " " ], this.onChange = e => this.props.isDisabled ? null : ( e.persist(), void 0 !== e.target.checked && this.setState( {
            isChecked: e.target.checked
          } ), this.props.onChange && this.props.onChange( e ), !0 ), this.blur = () => {
            this.checkbox && this.checkbox.blur && this.checkbox.blur()
          }, this.focus = () => {
            this.checkbox && this.checkbox.focus && this.checkbox.focus()
          }, this.onBlur = () => this.setState( {
            isActive: this.state.isMouseDown && this.state.isActive,
            isFocused: !1
          } ), this.onFocus = () => this.setState( {
            isFocused: !0
          } ), this.onMouseLeave = () => this.setState( {
            isActive: !1,
            isHovered: !1
          } ), this.onMouseEnter = () => this.setState( {
            isHovered: !0
          } ), this.onMouseUp = () => this.setState( {
            isActive: !1,
            isMouseDown: !1
          } ), this.onMouseDown = () => this.setState( {
            isActive: !0,
            isMouseDown: !0
          } ), this.onKeyDown = e => {
            e.key in this.actionKeys && this.setState( {
              isActive: !0
            } )
          }, this.onKeyUp = e => {
            e.key in this.actionKeys && this.setState( {
              isActive: !1
            } )
          }, this.createExtender = Object( c.default )( b.a )
        }
        componentDidMount() {
          const {
            isIndeterminate: e
          } = this.props;
          this.checkbox && ( this.checkbox.indeterminate = !!e, this.props.inputRef && this.props.inputRef( this.checkbox ) )
        }
        componentDidUpdate( e ) {
          const {
            isIndeterminate: t
          } = this.props;
          e.isIndeterminate !== t && this.checkbox && ( this.checkbox.indeterminate = !!t )
        }
        render() {
          const {
            isDisabled: e,
            isInvalid: t,
            isIndeterminate: a,
            label: i,
            name: c,
            overrides: o,
            value: r,
            isRequired: l,
            isChecked: p,
            theme: u,
            testId: g
          } = this.props, w = void 0 === this.props.isChecked ? this.state.isChecked : p, {
            isFocused: m,
            isActive: C,
            isHovered: W
          } = this.state, S = Object( b.a )( I, o ), O = S( "Label" ), {
            component: E
          } = O, B = Object( n.a )( O, [ "component" ] ), j = S( "LabelText" ), {
            component: D
          } = j, M = Object( n.a )( j, [ "component" ] ), {
            attributesFn: x
          } = S( "HiddenCheckbox" );
          return s.a.createElement( y.b.Provider, {
            value: u
          }, s.a.createElement( h.a.Consumer, null, ( {
            mode: n
          } ) => s.a.createElement( y.b.Consumer, {
            mode: n,
            tokens: y.a
          }, n => s.a.createElement( E, Object.assign( {}, B, {
            isDisabled: e,
            onMouseDown: this.onMouseDown,
            onMouseEnter: this.onMouseEnter,
            onMouseLeave: this.onMouseLeave,
            onMouseUp: this.onMouseUp,
            tokens: n,
            testId: g && g + "--checkbox-label"
          } ), s.a.createElement( f, null, s.a.createElement( v, {
            disabled: e,
            checked: w,
            onChange: this.onChange,
            onBlur: this.onBlur,
            onFocus: this.onFocus,
            onKeyUp: this.onKeyUp,
            onKeyDown: this.onKeyDown,
            value: r,
            name: c,
            ref: e => this.checkbox = e,
            required: l,
            attributesFn: x,
            testId: g && g + "--hidden-checkbox"
          } ), s.a.createElement( d.a, {
            theme: u,
            overrides: {
              IconWrapper: o && o.IconWrapper,
              Icon: o && o.Icon,
              IconIndeterminate: o && o.IconIndeterminate
            },
            isChecked: w,
            isDisabled: e,
            isFocused: m,
            isActive: C,
            isHovered: W,
            isInvalid: t,
            isIndeterminate: a,
            primaryColor: "inherit",
            secondaryColor: "inherit",
            label: ""
          } ) ), s.a.createElement( D, Object.assign( {}, M, {
            tokens: n
          } ), i, l && s.a.createElement( k, {
            tokens: n,
            "aria-hidden": "true"
          }, "*" ) ) ) ) ) )
        }
      }
      S.defaultProps = {
        isDisabled: !1,
        isInvalid: !1,
        defaultChecked: !1,
        isIndeterminate: !1,
        theme: ( e, t ) => e( t )
      };
      const O = Object( o.a )( "atlaskit" );
      t.a = Object( r.a )( {
        componentName: "checkbox",
        packageName: W.a,
        packageVersion: W.b
      } )( Object( l.a )( {
        onChange: O( {
          action: "changed",
          actionSubject: "checkbox",
          attributes: {
            componentName: "checkbox",
            packageName: W.a,
            packageVersion: W.b
          }
        } )
      } )( S ) )
    },
    oXDD: function ( e, t, a ) {
      "use strict";
      a.d( t, "a", ( function () {
        return s
      } ) );
      var n = a( "3IV/" ),
        i = a( "8pvK" );
      const s = {
        label: {
          textColor: {
            rest: {
              light: n.N900,
              dark: n.DN600
            },
            disabled: {
              light: n.N80,
              dark: n.N80
            }
          },
          spacing: {
            top: "2px",
            right: "4px",
            bottom: "2px",
            left: "4px"
          }
        },
        icon: {
          borderWidth: "2px",
          borderColor: {
            rest: {
              light: n.N40,
              dark: n.DN80
            },
            disabled: {
              light: "",
              dark: ""
            },
            checked: {
              light: "currentColor",
              dark: "currentColor"
            },
            active: {
              light: "currentColor",
              dark: "currentColor"
            },
            invalid: {
              light: n.R300,
              dark: n.R300
            },
            invalidAndChecked: {
              light: n.R300,
              dark: n.R300
            },
            focused: {
              light: n.B100,
              dark: n.B75
            },
            hovered: {
              light: n.N40,
              dark: n.DN200
            },
            hoveredAndChecked: {
              light: "currentColor",
              dark: "currentColor"
            }
          },
          boxColor: {
            rest: {
              light: n.N10,
              dark: n.DN10
            },
            disabled: {
              light: n.N20,
              dark: n.DN10
            },
            active: {
              light: n.B50,
              dark: n.B200
            },
            hoveredAndChecked: {
              light: n.B300,
              dark: n.B75
            },
            hovered: {
              light: n.N30,
              dark: n.DN30
            },
            checked: {
              light: n.B400,
              dark: n.B400
            }
          },
          tickColor: {
            rest: {
              light: "transparent",
              dark: "transparent"
            },
            disabledAndChecked: {
              light: n.N70,
              dark: n.DN90
            },
            activeAndChecked: {
              light: n.B400,
              dark: n.DN10
            },
            checked: {
              light: n.N10,
              dark: n.DN10
            }
          },
          size: "medium"
        },
        requiredIndicator: {
          textColor: {
            rest: n.R500
          }
        }
      };
      t.b = Object( i.a )( ( {
        tokens: e,
        mode: t
      } ) => function ( e, t ) {
        return function e( a ) {
          return Object.keys( a ).reduce( ( n, i ) => {
            const s = a[ i ];
            return "object" != typeof s || null == typeof s || Array.isArray( s ) ? n[ i ] = s : Object.keys( s ).includes( t ) ? n[ i ] = s[ t ] : n[ i ] = e( a[ i ] ), n
          }, {} )
        }( e )
      }( e, t ) )
    },
    uQoP: function ( e, t, a ) {
      "use strict";
      a.d( t, "a", ( function () {
        return i
      } ) );
      var n = a( "Iy7w" );
      const i = e => Object( n.a )( e, {
        target: "eoul0ti0"
      } )( {
        name: "ktb2h4",
        styles: "@keyframes show{0%{opacity:0;}100%{opacity:1;}}animation:show 0.25s ease-in-out;"
      } )
    },
    wifC: function ( e, t, a ) {
      "use strict";
      var n, i, s = a( "zjfJ" ),
        c = a( "ERkP" ),
        o = a.n( c ),
        r = a( "gQ5V" ),
        l = ( a( "aWzz" ), a( "lZoD" ) ),
        h = a( "lbXe" ),
        d = a( "F4Ur" ),
        p = a( "KIs4" ),
        u = a( "qhEF" ),
        g = a( "FdGg" ),
        b = a( "X2PC" ),
        w = a( "rc7/" ),
        m = a( "L21V" ),
        f = a( "RKN0" ),
        v = a( "+CY+" ),
        C = a( "Czhu" ),
        k = a( "Iy7w" ),
        y = a( "zJ/j" ),
        W = a( "/2pk" ),
        I = a.n( W ),
        S = a( "CLO0" ),
        O = a.n( S ),
        E = a( "a8dO" ),
        B = a( "wORz" ),
        j = a( "Ua+b" ),
        D = a( "uQoP" );
      const M = Object( m.f )( {
          watchStopTooltip: {
            id: "watch-dialog.stop.button.tooltip",
            defaultMessage: "Stop watching",
            description: "Stop watching tooltip"
          },
          watchStartTooltip: {
            id: "watch-dialog.start.button.tooltip",
            defaultMessage: "Watch",
            description: "Start Watching tooltip"
          }
        } ),
        x = Object( k.a )( y.a, {
          target: "e6egkzf0"
        } )( {
          name: "1g98hqh",
          styles: "min-width:30px;"
        } ),
        P = Object( D.a )( x );

      function A( e ) {
        const t = Object( C.a )( {}, e ),
          a = t.isAnimated;
        return delete t.isAnimated, a ? o.a.createElement( P, Object( C.a )( {}, t ) ) : o.a.createElement( x, Object( C.a )( {}, t ) )
      }
      const U = Object( h.a )()( Object( m.g )( ( i = n = class extends c.PureComponent {
        constructor( ...e ) {
          super( ...e ), Object( s.a )( this, "handleClick", () => {
            this.clickAnalyticsEvent(), this.props.onClick()
          } )
        }
        clickAnalyticsEvent() {
          const {
            createAnalyticsEvent: e,
            isWatching: t
          } = this.props;
          e( {
            type: "sendUIEvent",
            data: {
              action: t ? "unwatched" : "watched",
              actionSubject: "page-watch-button",
              source: "viewPageScreen"
            }
          } ).fire()
        }
        render() {
          const {
            isSelected: e,
            intl: t,
            isAnimated: a,
            isDisabled: n,
            isWatching: i
          } = this.props;
          return o.a.createElement( B.a, {
            name: "page-watch-spotlight"
          }, o.a.createElement( E.a, {
            tag: "span",
            content: o.a.createElement( j.a, {
              shortcut: "w",
              contentBefore: i ? t.formatMessage( M.watchStopTooltip ) : t.formatMessage( M.watchStartTooltip )
            } )
          }, o.a.createElement( A, {
            "data-test-id": "page-watch-button",
            appearance: "subtle",
            isDisabled: n,
            isSelected: e,
            onClick: this.handleClick,
            iconBefore: i ? o.a.createElement( I.a, {
              label: "WatchIcon"
            } ) : o.a.createElement( O.a, {
              label: "WatchIcon"
            } ),
            isAnimated: a
          } ) ) )
        }
      }, Object( s.a )( n, "defaultProps", {
        isAnimated: !0
      } ), i ) ) );
      var T = a( "kgsK" ),
        _ = a( "2DyF" ),
        N = a( "+mzV" ),
        F = a( "RfuI" );
      const R = Object( F.a )( {
        id: "eZPik",
        name: "ManageWatcherDialogLoader",
        loader: async () => ( await Promise.all( [ a.e( "atlaskit~66e23772" ), a.e( "vendors~4134d62c" ), a.e( 2 ), a.e( 3 ), a.e( 37 ), a.e( 61 ), a.e( "manage-watcher-dialog~b59ad437" ) ] ).then( a.bind( null, "Ay2Y" ) ) ).ManageWatcherDialog
      } );
      var K = a( "UhQU" ),
        z = a( "6OoW" );
      class q extends c.PureComponent {
        constructor( ...e ) {
          super( ...e ), Object( s.a )( this, "makeClickHandler", ( {
            dialogs: e,
            contentId: t,
            spaceKey: a,
            tabSwitcher: n
          } ) => () => {
            n.setSelectedTab( this.props.defaultTab ), e.showDialog( R, {
              contentId: t,
              spaceKey: a
            } ), this.props.onClick()
          } )
        }
        render() {
          const {
            contentId: e
          } = this.props;
          return o.a.createElement( g.a, {
            attribution: b.a.BACKBONE
          }, o.a.createElement( N.a.Consumer, null, ( {
            spaceKey: t
          } ) => o.a.createElement( l.c, {
            to: [ _.a, z.a ]
          }, ( a, n ) => o.a.createElement( y.a, {
            "data-test-id": "manage-watcher-button",
            spacing: "none",
            onClick: this.makeClickHandler( {
              dialogs: a,
              contentId: e,
              spaceKey: t,
              tabSwitcher: n
            } ),
            appearance: "link"
          }, o.a.createElement( m.b, {
            id: "manage-watcher-dialog.watcher.button",
            defaultMessage: "Manage watchers",
            description: "The button to open manage watchers dialog."
          } ) ) ) ) )
        }
      }
      Object( s.a )( q, "defaultProps", {
        defaultTab: K.a.PAGE,
        onClick: () => null
      } );
      const Q = Object( m.f )( {
          watchingSpaceTitle: {
            id: "watch-dialog.title.watching.space",
            defaultMessage: "You are watching this space",
            description: "Title for Watch dialog when watching space"
          },
          watchingSpaceDescription: {
            id: "watch-dialog.title.watching.space.description",
            defaultMessage: "Receiving email updates for all content in this space.",
            description: "Description for Watch dialog when watching space"
          },
          watchingBlogAndBlogsTitle: {
            id: "watch-dialog.title.watching.blog.and.blogs",
            defaultMessage: "You are watching this blog post",
            description: "Title for Watch dialog when watching blog and blog space"
          },
          watchingBlogAndBlogsDescription: {
            id: "watch-dialog.title.watching.blog.and.blogs.description",
            defaultMessage: "Receiving email updates about changes to this blog post and all new blog posts in this space.",
            description: "Description for Watch dialog when watching blog and blog space"
          },
          watchingBlogTitle: {
            id: "watch-dialog.title.watching.blog",
            defaultMessage: "You are watching this blog post",
            description: "Title for Watch dialog when watching blog"
          },
          watchingBlogDescription: {
            id: "watch-dialog.title.watching.blog.description",
            defaultMessage: "Receiving email updates about changes to this blog post.",
            description: "Description for Watch dialog when watching blog"
          },
          watchingPageTitle: {
            id: "watch-dialog.title.watching.page",
            defaultMessage: "You are watching this page",
            description: "Title for Watch dialog when watching page"
          },
          watchingPageDescription: {
            id: "watch-dialog.title.watching.page.description",
            defaultMessage: "Receiving email updates about changes to this page.",
            description: "Description for Watch dialog when watching page"
          },
          watchingBlogsTitle: {
            id: "watch-dialog.title.watching.blogs",
            defaultMessage: "You are watching for new blog posts",
            description: "Title for Watch dialog when watching blog space"
          },
          watchingBlogsDescription: {
            id: "watch-dialog.title.watching.blogs.description",
            defaultMessage: "Receiving email updates for new blog posts in this space.",
            description: "Description for Watch dialog when watching blog space"
          },
          watchingNothingBlogTitle: {
            id: "watch-dialog.title.watching.nothing.blog",
            defaultMessage: "You are not watching this blog",
            description: "Title for Watch dialog when not watching blog"
          },
          watchingNothingBlogDescription: {
            id: "watch-dialog.title.watching.nothing.blogs.description",
            defaultMessage: "Start watching to receive email updates about changes to this blog.",
            description: "Description for Watch dialog when not watching blog"
          },
          watchingNothingPageTitle: {
            id: "watch-dialog.title.watching.nothing.page",
            defaultMessage: "You are not watching this page",
            description: "Title for Watch dialog when not watching page"
          },
          watchingNothingPageDescription: {
            id: "watch-dialog.title.nothing.watching.page.description",
            defaultMessage: "Start watching to receive email updates about changes to this page.",
            description: "Description for Watch dialog when not watching page"
          },
          watchPage: {
            id: "watch-dialog.page",
            defaultMessage: "Watch page",
            description: "Watch page - checkbox label"
          },
          watchBlog: {
            id: "watch-dialog.blog",
            defaultMessage: "Watch blog post",
            description: "Watch blog post - checkbox label"
          },
          watchBlogs: {
            id: "watch-dialog.blogs",
            defaultMessage: "Watch for new blog posts in this space",
            description: "Watch for blog posts - checkbox label"
          },
          watchSpace: {
            id: "watch-dialog.space",
            defaultMessage: "Watch all content in this space",
            description: "Watch space -  checkbox label"
          },
          watchDisabledPageToolTip: {
            id: "watch-dialog.disabledpage.tooltip",
            defaultMessage: "You will receive updates for this page because you are watching this space",
            description: "Watching space tooltip for page"
          },
          watchDisabledBlogsToolTip: {
            id: "watch-dialog.disabledblogs.tooltip",
            defaultMessage: "You are subscribed to all blog posts because you are watching this space",
            description: "Watching space tooltip for blogs"
          },
          manageWatchers: {
            id: "watch-dialog.manage",
            defaultMessage: "Manage watchers",
            description: "Manage watchers link"
          }
        } ),
        L = Object( k.a )( "div", {
          target: "e16a910o0"
        } )( {
          name: "b983i2",
          styles: "margin:16px 0 0 0;"
        } ),
        H = Object( k.a )( "div", {
          target: "e16a910o1"
        } )( {
          name: "a952hd",
          styles: "width:325px;"
        } ),
        $ = Object( m.g )( Object( h.a )()( class extends c.PureComponent {
          constructor( ...e ) {
            super( ...e ), Object( s.a )( this, "state", {
              isCurrentUserWatchingSpace: this.props.params.isWatchingSpace,
              isCurrentUserWatchingPage: this.props.params.isWatchingPage,
              isCurrentUserWatchingBlogs: this.props.params.isWatchingBlogs
            } ), Object( s.a )( this, "watchPageChanged", () => {
              const {
                contentId: e,
                watchContent: t,
                unwatchContent: a
              } = this.props, {
                isCurrentUserWatchingPage: n
              } = this.state;
              n ? ( a( {
                variables: {
                  id: e
                },
                optimisticResponse: {
                  __typename: "Mutation",
                  unwatchContent: {
                    __typename: "WatchContentPayload",
                    content: {
                      __typename: "Content",
                      id: e,
                      currentUserIsWatching: !1
                    }
                  }
                }
              } ), this.setState( {
                isCurrentUserWatchingPage: !1
              } ) ) : ( t( {
                variables: {
                  id: e
                },
                optimisticResponse: {
                  __typename: "Mutation",
                  watchContent: {
                    __typename: "WatchContentPayload",
                    content: {
                      __typename: "Content",
                      id: e,
                      currentUserIsWatching: !0
                    }
                  }
                }
              } ), this.setState( {
                isCurrentUserWatchingPage: !0
              } ) )
            } ), Object( s.a )( this, "watchSpaceChanged", () => {
              const {
                spaceId: e,
                watchSpace: t,
                unwatchSpace: a
              } = this.props, {
                isCurrentUserWatchingSpace: n
              } = this.state;
              n ? ( a( {
                variables: {
                  spaceId: e
                },
                optimisticResponse: {
                  __typename: "Mutation",
                  unwatchSpace: {
                    __typename: "WatchSpacePayload",
                    space: {
                      __typename: "Space",
                      id: e,
                      currentUser: {
                        __typename: "SpaceUserMetadata",
                        isWatched: !1
                      }
                    }
                  }
                }
              } ), this.setState( {
                isCurrentUserWatchingSpace: !1
              } ) ) : ( t( {
                variables: {
                  spaceId: e
                },
                optimisticResponse: {
                  __typename: "Mutation",
                  watchSpace: {
                    __typename: "WatchSpacePayload",
                    space: {
                      __typename: "Space",
                      id: e,
                      currentUser: {
                        __typename: "SpaceUserMetadata",
                        isWatched: !0
                      }
                    }
                  }
                }
              } ), this.setState( {
                isCurrentUserWatchingSpace: !0
              } ) )
            } ), Object( s.a )( this, "watchBlogsChanged", () => {
              const {
                spaceId: e,
                watchBlogs: t,
                unwatchBlogs: a
              } = this.props, {
                isCurrentUserWatchingBlogs: n
              } = this.state;
              n ? ( a( {
                variables: {
                  spaceId: e
                },
                optimisticResponse: {
                  __typename: "Mutation",
                  unwatchBlogs: {
                    __typename: "WatchSpacePayload",
                    space: {
                      __typename: "Space",
                      id: e,
                      currentUser: {
                        __typename: "SpaceUserMetadata",
                        isWatchingBlogs: !1
                      }
                    }
                  }
                }
              } ), this.setState( {
                isCurrentUserWatchingBlogs: !1
              } ) ) : ( t( {
                variables: {
                  spaceId: e
                },
                optimisticResponse: {
                  __typename: "Mutation",
                  watchBlogs: {
                    __typename: "WatchSpacePayload",
                    space: {
                      __typename: "Space",
                      id: e,
                      currentUser: {
                        __typename: "SpaceUserMetadata",
                        isWatchingBlogs: !0
                      }
                    }
                  }
                }
              } ), this.setState( {
                isCurrentUserWatchingBlogs: !0
              } ) )
            } ), Object( s.a )( this, "populateTitleAndDescription", () => {
              const {
                params: e
              } = this.props;
              let t = {};
              return t = e.isWatchingSpace ? {
                title: Q.watchingSpaceTitle,
                description: Q.watchingSpaceDescription
              } : e.isBlogPost ? e.isWatchingBlogs && e.isWatchingPage ? {
                title: Q.watchingBlogAndBlogsTitle,
                description: Q.watchingBlogAndBlogsDescription
              } : e.isWatchingPage ? {
                title: Q.watchingBlogTitle,
                description: Q.watchingBlogDescription
              } : e.isWatchingBlogs ? {
                title: Q.watchingBlogsTitle,
                description: Q.watchingBlogsDescription
              } : {
                title: Q.watchingNothingBlogTitle,
                description: Q.watchingNothingBlogDescription
              } : e.isWatchingPage ? {
                title: Q.watchingPageTitle,
                description: Q.watchingPageDescription
              } : {
                title: Q.watchingNothingPageTitle,
                description: Q.watchingNothingPageDescription
              }, o.a.createElement( "div", null, o.a.createElement( m.b, Object( C.a )( Object( C.a )( {}, t.title ), {}, {
                tagName: "h2"
              } ) ), o.a.createElement( L, null, o.a.createElement( m.b, Object( C.a )( {}, t.description ) ) ) )
            } ), Object( s.a )( this, "fireAnalyticsEvent", e => () => {
              this.props.createAnalyticsEvent( {
                type: "sendUIEvent",
                data: {
                  action: "clicked",
                  actionSubject: "button",
                  actionSubjectId: "ManageWatcherDialogButton",
                  source: "WatchDialogContent",
                  attributes: {
                    source: e
                  }
                }
              } ).fire()
            } )
          }
          render() {
            const {
              contentId: e,
              defaultTab: t,
              params: a,
              intl: n
            } = this.props;
            return o.a.createElement( H, null, this.populateTitleAndDescription(), o.a.createElement( L, null, o.a.createElement( E.a, {
              content: a.isWatchingSpace ? n.formatMessage( Q.watchDisabledPageToolTip ) : ""
            }, o.a.createElement( T.a, {
              testId: "watch-page-checkbox",
              label: a.isBlogPost ? n.formatMessage( Q.watchBlog ) : n.formatMessage( Q.watchPage ),
              value: "val1",
              onChange: this.watchPageChanged,
              isChecked: a.isWatchingPage || a.isWatchingSpace,
              isDisabled: a.isWatchingSpace,
              name: "watch-page"
            } ) ), a.isBlogPost ? o.a.createElement( E.a, {
              content: a.isWatchingSpace ? n.formatMessage( Q.watchDisabledBlogsToolTip ) : ""
            }, o.a.createElement( T.a, {
              testId: "watch-blogs-checkbox",
              label: n.formatMessage( Q.watchBlogs ),
              value: "val",
              onChange: this.watchBlogsChanged,
              isChecked: a.isWatchingBlogs || a.isWatchingSpace,
              isDisabled: a.isWatchingSpace,
              name: "watch-blogs"
            } ) ) : "", o.a.createElement( T.a, {
              testId: "watch-space-checkbox",
              label: n.formatMessage( Q.watchSpace ),
              value: "val2",
              onChange: this.watchSpaceChanged,
              isChecked: a.isWatchingSpace,
              name: "watch-space"
            } ) ), a.isAdmin ? o.a.createElement( L, null, o.a.createElement( q, {
              contentId: e,
              defaultTab: t,
              onClick: this.fireAnalyticsEvent( "v2" )
            } ) ) : "" )
          }
        } ) );
      const G = Object( m.f )( {
          watchPageNotification: {
            id: "watch-dialog.notification.start.watching.page",
            defaultMessage: "You started watching this page.",
            description: "start watching page notification"
          },
          unwatchPageNotification: {
            id: "watch-dialog.notification.stop.watching.page",
            defaultMessage: "You stopped watching this page.",
            description: "stop watching page notification"
          },
          watchBlogNotification: {
            id: "watch-dialog.notification.start.watching.blog",
            defaultMessage: "You started watching this blog.",
            description: "start watching blog notification"
          },
          unwatchBlogNotification: {
            id: "watch-dialog.notification.stop.watching.blog",
            defaultMessage: "You stopped watching this blog.",
            description: "stop watching blog notification"
          }
        } ),
        Y = Object( m.g )( class extends c.PureComponent {
          constructor( ...e ) {
            super( ...e ), Object( s.a )( this, "state", {
              dialogOpen: !1
            } ), Object( s.a )( this, "toggleDialog", () => {
              this.props.isDisabled || this.setState( e => ( {
                dialogOpen: !e.dialogOpen
              } ) )
            } ), Object( s.a )( this, "handleShortcutClick", () => {
              const {
                contentId: e,
                params: t,
                watchContent: a,
                unwatchContent: n,
                flagsContainer: i,
                intl: s
              } = this.props;
              t.isWatchingSpace ? this.setState( {
                dialogOpen: !0
              } ) : t.isWatchingPage ? n( {
                variables: {
                  id: e
                }
              } ).then( () => {
                i.showSuccessFlag( {
                  title: s.formatMessage( t.isBlogPost ? G.unwatchBlogNotification : G.unwatchPageNotification ),
                  close: "auto"
                } )
              } ) : a( {
                variables: {
                  id: e
                }
              } ).then( () => {
                i.showSuccessFlag( {
                  title: s.formatMessage( t.isBlogPost ? G.watchBlogNotification : G.watchPageNotification ),
                  close: "auto"
                } )
              } )
            } ), Object( s.a )( this, "closeDialog", () => {
              this.setState( {
                dialogOpen: !1
              } )
            } )
          }
          isWatching() {
            const {
              isDisabled: e,
              params: t
            } = this.props;
            return !e && ( t.isWatchingPage || t.isBlogPost && t.isWatchingBlogs || t.isWatchingSpace )
          }
          render() {
            const {
              contentId: e,
              spaceId: t,
              params: a,
              watchContent: n,
              defaultTab: i,
              unwatchContent: s,
              watchSpace: r,
              unwatchSpace: l,
              watchBlogs: h,
              unwatchBlogs: d,
              customPlacement: p,
              isAnimated: u,
              isDisabled: g,
              customTrigger: b,
              useShortcut: w
            } = this.props, m = b || U;
            return o.a.createElement( c.Fragment, null, w && !g ? o.a.createElement( v.a, {
              accelerator: "w",
              listener: this.handleShortcutClick
            } ) : null, o.a.createElement( f.a, {
              onClose: this.closeDialog,
              content: o.a.createElement( $, {
                contentId: e,
                spaceId: t,
                defaultTab: i,
                params: a,
                watchContent: n,
                unwatchContent: s,
                watchSpace: r,
                unwatchSpace: l,
                watchBlogs: h,
                unwatchBlogs: d
              } ),
              isOpen: this.state.dialogOpen,
              placement: p
            }, o.a.createElement( m, {
              isDisabled: g,
              isWatching: this.isWatching(),
              isSelected: this.state.dialogOpen,
              onClick: this.toggleDialog,
              isAnimated: u
            } ) ) )
          }
        } );
      var X = a( "amtX" );
      const J = Object( k.a )( X.a, {
          target: "e6wl6fc0"
        } )( {
          name: "yrqdi7",
          styles: "min-width:30px;padding-left:2px;padding-right:2px;"
        } ),
        V = () => o.a.createElement( J, {
          testId: "watch-button-placeholder",
          appearance: "subtle",
          iconBefore: o.a.createElement( O.a, {
            label: "WatchIcon"
          } ),
          isDisabled: !0
        } );
      var Z = a( "H5qd" ),
        ee = a.n( Z );
      const te = ee.a `query WatchDialogQuery($contentId:ID!){content(id:$contentId){nodes{id currentUserIsWatching type space{id key currentUser{isWatched isWatchingBlogs}operations{operation targetType}}}}}`,
        ae = ee.a `mutation WatchDialogWatchContentMutation($id:ID!){watchContent(watchContentInput:{contentId:$id currentUser:true}){content{id currentUserIsWatching}}}`,
        ne = ee.a `mutation WatchDialogUnwatchContentMutation($id:ID!){unwatchContent(watchContentInput:{contentId:$id currentUser:true}){content{id currentUserIsWatching}}}`,
        ie = ee.a `mutation WatchDialogWatchSpaceMutation($spaceId:ID!){watchSpace(watchSpaceInput:{spaceId:$spaceId currentUser:true}){space{id currentUser{isWatched}}}}`,
        se = ee.a `mutation WatchDialogUnwatchSpaceMutation($spaceId:ID!){unwatchSpace(watchSpaceInput:{spaceId:$spaceId currentUser:true}){space{id currentUser{isWatched}}}}`,
        ce = ee.a `mutation WatchDialogWatchBlogsMutation($spaceId:ID!){watchBlogs(watchSpaceInput:{spaceId:$spaceId currentUser:true}){space{id currentUser{isWatchingBlogs}}}}`,
        oe = ee.a `mutation WatchDialogUnwatchBlogsMutation($spaceId:ID!){unwatchBlogs(watchSpaceInput:{spaceId:$spaceId currentUser:true}){space{id currentUser{isWatchingBlogs}}}}`;
      var re, le;
      a.d( t, "a", ( function () {
        return he
      } ) );
      const he = Object( h.a )()( ( le = re = class extends c.PureComponent {
        constructor( ...e ) {
          super( ...e ), Object( s.a )( this, "updateUnwatchBlogs", ( e, {
            data: {
              unwatchBlogs: t
            }
          } ) => {
            const {
              contentId: a
            } = this.props, n = e.readQuery( {
              query: te,
              variables: {
                contentId: a
              }
            } );
            n.content.nodes[ 0 ].space.currentUser.isWatchingBlogs = t.space.currentUser.isWatchingBlogs, e.writeQuery( {
              query: te,
              data: n
            } )
          } ), Object( s.a )( this, "updateWatchBlogs", ( e, {
            data: {
              watchBlogs: t
            }
          } ) => {
            const {
              contentId: a
            } = this.props, n = e.readQuery( {
              query: te,
              variables: {
                contentId: a
              }
            } );
            n.content.nodes[ 0 ].space.currentUser.isWatchingBlogs = t.space.currentUser.isWatchingBlogs, e.writeQuery( {
              query: te,
              data: n
            } )
          } ), Object( s.a )( this, "updateWatchSpace", ( e, {
            data: {
              watchSpace: t
            }
          } ) => {
            const {
              contentId: a
            } = this.props, n = e.readQuery( {
              query: te,
              variables: {
                contentId: a
              }
            } );
            n.content.nodes[ 0 ].space.currentUser.isWatched = t.space.currentUser.isWatched, e.writeQuery( {
              query: te,
              data: n
            } )
          } ), Object( s.a )( this, "updateUnwatchSpace", ( e, {
            data: {
              unwatchSpace: t
            }
          } ) => {
            const {
              contentId: a
            } = this.props, n = e.readQuery( {
              query: te,
              variables: {
                contentId: a
              }
            } );
            n.content.nodes[ 0 ].space.currentUser.isWatched = t.space.currentUser.isWatched, e.writeQuery( {
              query: te,
              data: n
            } )
          } ), Object( s.a )( this, "updateWatchContent", ( e, {
            data: {
              watchContent: t
            }
          } ) => {
            const {
              contentId: a
            } = this.props, n = e.readQuery( {
              query: te,
              variables: {
                contentId: a
              }
            } );
            n.content.nodes[ 0 ].currentUserIsWatching = t.content.currentUserIsWatching, e.writeQuery( {
              query: te,
              data: n
            } )
          } ), Object( s.a )( this, "updateUnwatchContent", ( e, {
            data: {
              unwatchContent: t
            }
          } ) => {
            const {
              contentId: a
            } = this.props, n = e.readQuery( {
              query: te,
              variables: {
                contentId: a
              }
            } );
            n.content.nodes[ 0 ].currentUserIsWatching = t.content.currentUserIsWatching, e.writeQuery( {
              query: te,
              data: n
            } )
          } ), Object( s.a )( this, "unwatchBlogAnalytics", () => {
            this.fireAnalyticsEvent( "unwatch", "blogs" )
          } ), Object( s.a )( this, "watchBlogAnalytics", () => {
            this.fireAnalyticsEvent( "watch", "blogs" )
          } ), Object( s.a )( this, "unwatchSpaceAnalytics", () => {
            this.fireAnalyticsEvent( "unwatch", "space" )
          } ), Object( s.a )( this, "watchSpaceAnalytics", () => {
            this.fireAnalyticsEvent( "watch", "space" )
          } ), Object( s.a )( this, "unwatchContentAnalytics", () => {
            this.fireAnalyticsEvent( "unwatch", "content" )
          } ), Object( s.a )( this, "watchContentAnalytics", () => {
            this.fireAnalyticsEvent( "watch", "content" )
          } )
        }
        fireAnalyticsEvent( e, t ) {
          const {
            contentId: a,
            createAnalyticsEvent: n
          } = this.props;
          n( {
            type: "sendTrackEvent",
            data: {
              action: e,
              actionSubject: t,
              actionSubjectId: a,
              source: "WatchDialog",
              attributes: {
                componentVersion: "v2"
              }
            }
          } ).fire()
        }
        render() {
          const {
            contentId: e,
            defaultTab: t,
            customPlacement: a,
            onRender: n,
            isAnimated: i,
            customTrigger: s,
            useShortcut: c
          } = this.props;
          return e ? o.a.createElement( g.a, {
            attribution: b.a.COLLABORATION
          }, o.a.createElement( p.a, null, ( {
            isLicensed: h,
            userId: p
          } ) => p ? o.a.createElement( l.c, {
            to: [ u.a ]
          }, l => o.a.createElement( r.b, {
            query: te,
            variables: {
              contentId: e
            },
            skip: !h
          }, ( {
            data: p,
            loading: u,
            error: g
          } ) => {
            var b, m, f, v, C, k;
            if ( g ) return Object( w.b )( g ) && Object( d.a )( g ), null;
            if ( u ) return o.a.createElement( V, null );
            const y = null != ( k = p ) && null != ( k = k.content ) && null != ( k = k.nodes ) && null != ( k = k[ 0 ] ) && null != ( k = k.space ) ? k.id : k,
              W = {
                isWatchingPage: null != ( C = p ) && null != ( C = C.content ) && null != ( C = C.nodes ) && null != ( C = C[ 0 ] ) ? C.currentUserIsWatching : C,
                isWatchingSpace: null != ( v = p ) && null != ( v = v.content ) && null != ( v = v.nodes ) && null != ( v = v[ 0 ] ) && null != ( v = v.space ) && null != ( v = v.currentUser ) ? v.isWatched : v,
                isBlogPost: "blogpost" === ( null != ( f = p ) && null != ( f = f.content ) && null != ( f = f.nodes ) && null != ( f = f[ 0 ] ) ? f.type : f ),
                isWatchingBlogs: null != ( m = p ) && null != ( m = m.content ) && null != ( m = m.nodes ) && null != ( m = m[ 0 ] ) && null != ( m = m.space ) && null != ( m = m.currentUser ) ? m.isWatchingBlogs : m,
                isAdmin: ( I = ( null != ( b = p ) && null != ( b = b.content ) && null != ( b = b.nodes ) && null != ( b = b[ 0 ] ) && null != ( b = b.space ) ? b.operations : b ) || [], Boolean( I.find( e => "space" === e.targetType && "administer" === e.operation ) ) )
              };
            var I;
            return o.a.createElement( r.a, {
              mutation: oe,
              onCompleted: this.unwatchBlogAnalytics,
              update: this.updateUnwatchBlogs
            }, d => o.a.createElement( r.a, {
              mutation: ce,
              onCompleted: this.watchBlogAnalytics,
              update: this.updateWatchBlogs
            }, p => o.a.createElement( r.a, {
              mutation: se,
              onCompleted: this.unwatchSpaceAnalytics,
              update: this.updateUnwatchSpace
            }, u => o.a.createElement( r.a, {
              mutation: ie,
              onCompleted: this.watchSpaceAnalytics,
              update: this.updateWatchSpace
            }, g => o.a.createElement( r.a, {
              mutation: ne,
              onCompleted: this.unwatchContentAnalytics,
              update: this.updateUnwatchContent
            }, b => o.a.createElement( r.a, {
              mutation: ae,
              onCompleted: this.watchContentAnalytics,
              update: this.updateWatchContent
            }, r => ( n(), o.a.createElement( Y, {
              contentId: e,
              spaceId: y,
              params: W,
              defaultTab: t,
              watchContent: r,
              unwatchContent: b,
              watchSpace: g,
              unwatchSpace: u,
              watchBlogs: p,
              unwatchBlogs: d,
              flagsContainer: l,
              customPlacement: a,
              isAnimated: i,
              isDisabled: !h,
              customTrigger: s,
              useShortcut: c
            } ) ) ) ) ) ) ) )
          } ) ) : null ) ) : null
        }
      }, Object( s.a )( re, "defaultProps", {
        onRender: () => {},
        useShortcut: !0
      } ), le ) )
    }
  }
] );
//# sourceMappingURL=90.5mj1DJMi9k.js.map
