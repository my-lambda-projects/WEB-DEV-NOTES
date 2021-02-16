( window.webpackJsonp = window.webpackJsonp || [] ).push( [
  [ 119 ], {
    "0t80": function ( e, t, n ) {
      "use strict";
      n.d( t, "a", ( function () {
        return d
      } ) );
      var a = n( "zjfJ" ),
        o = n( "ERkP" ),
        i = n.n( o ),
        r = ( n( "aWzz" ), n( "lZoD" ) ),
        c = n( "cEjM" ),
        s = n( "EvV7" ),
        l = n( "wifC" );
      class d extends o.PureComponent {
        constructor( ...e ) {
          super( ...e ), Object( a.a )( this, "isItemMarked", !1 ), Object( a.a )( this, "markItem", null ), Object( a.a )( this, "buttonRendered", () => {
            this.isItemMarked || ( this.isItemMarked = !0, this.markItem( c.a.WATCH_PAGE ) )
          } )
        }
        render() {
          const {
            contentId: e,
            defaultTab: t,
            headerSticky: n
          } = this.props, a = n ? "auto" : void 0;
          return i.a.createElement( r.c, {
            to: [ s.a ]
          }, ( {
            addItem: n,
            markItem: o
          } ) => ( n( c.a.WATCH_PAGE ), this.markItem = o, i.a.createElement( l.a, {
            contentId: e,
            defaultTab: t,
            customPlacement: a,
            onRender: this.buttonRendered,
            isAnimated: !1
          } ) ) )
        }
      }
    },
    "1OT/": function ( e, t, n ) {
      "use strict";
      n.d( t, "a", ( function () {
        return d
      } ) );
      var a = n( "zjfJ" ),
        o = n( "ERkP" ),
        i = n.n( o ),
        r = ( n( "aWzz" ), n( "lZoD" ) ),
        c = n( "cEjM" ),
        s = n( "EvV7" ),
        l = n( "VzPM" );
      class d extends o.PureComponent {
        constructor( ...e ) {
          super( ...e ), Object( a.a )( this, "isItemMarked", !1 ), Object( a.a )( this, "markItem", null ), Object( a.a )( this, "buttonRendered", () => {
            this.isItemMarked || ( this.isItemMarked = !0, this.markItem( c.a.EDIT_PAGE ) )
          } )
        }
        render() {
          const {
            contentId: e
          } = this.props;
          return i.a.createElement( r.c, {
            to: [ s.a ]
          }, ( {
            addItem: t,
            markItem: n,
            state: a
          } ) => ( t( c.a.EDIT_PAGE ), this.markItem = n, i.a.createElement( l.a, {
            contentId: e,
            onRender: this.buttonRendered,
            isAnimated: !1,
            itemsLoaded: a.itemsLoaded
          } ) ) )
        }
      }
    },
    "29b4": function ( e, t, n ) {
      "use strict";
      var a = n( "HbGN" ),
        o = n( "ERkP" ),
        i = n( "l1C2" ),
        r = n( "8PwJ" ),
        c = n( "U0wZ" ),
        s = n( "aLY5" );
      const l = Object( o.forwardRef )( ( e, t ) => {
        const {
          children: n,
          cssFn: o = ( e => e ),
          description: l,
          iconAfter: d,
          iconBefore: u,
          isDisabled: m = !1,
          isSelected: p = !1,
          onClick: b,
          testId: h,
          overrides: g,
          onMouseDown: f
        } = e, O = Object( a.a )( e, [ "children", "cssFn", "description", "iconAfter", "iconBefore", "isDisabled", "isSelected", "onClick", "testId", "overrides", "onMouseDown" ] ), E = Object( r.a )( f );
        if ( !n ) return null;
        const v = m ? "span" : "button";
        return Object( i.f )( v, Object.assign( {
          type: m ? void 0 : "button",
          css: o( Object( s.a )( m, p ), {
            isSelected: p,
            isDisabled: m
          } ),
          "data-testid": h,
          onClick: m ? void 0 : b,
          onMouseDown: E,
          ref: t
        }, O ), Object( i.f )( c.a, {
          overrides: g,
          iconBefore: u,
          iconAfter: d,
          description: l
        }, n ) )
      } );
      t.a = l
    },
    "66dv": function ( e, t, n ) {
      "use strict";
      n.d( t, "a", ( function () {
        return d
      } ) );
      n( "aWzz" );
      var a = n( "ERkP" ),
        o = n.n( a ),
        i = n( "O94r" ),
        r = n.n( i ),
        c = n( "S2j0" ),
        s = n( "QBI0" );
      const l = [ "wr!confluence.web.resources:querystring", "wr!confluence.web.resources:navigator-context", "wr!com.atlassian.plugins.atlassian-connect-plugin:confluence-atlassian-connect-resources-v5" ],
        d = e => {
          const {
            id: t,
            webItems: n,
            actions: i,
            modifications: d,
            buttonType: u,
            className: m,
            disableIcons: p
          } = e, b = n.some( e => e.completeKey.startsWith( "com.atlassian.plugins.atlassian-connect-plugin" ) );
          return Object( a.useEffect )( () => {
            b && Object( c.a )( l, () => {}, () => {
              0
            } )
          }, [ b ] ), o.a.createElement( s.a, {
            id: t,
            actions: i,
            modifications: d,
            webItems: n,
            className: r()( "aui-buttons", m ),
            webItemClassName: r()( u, "aui-button" ),
            disableIcons: p
          } )
        };
      d.displayName = "WebItemButtonList"
    },
    "7wq/": function ( e, t ) {
      e.exports = function ( e, t ) {
        return t || ( t = e.slice( 0 ) ), Object.freeze( Object.defineProperties( e, {
          raw: {
            value: Object.freeze( t )
          }
        } ) )
      }
    },
    "8oD3": function ( e, t, n ) {
      "use strict";
      var a = n( "ERkP" ),
        o = n.n( a ),
        i = n( "EFzz" ),
        r = n( "cdeE" ),
        c = n( "tk7i" ),
        s = n( "Wk7V" );
      t.a = ( {
        theme: e,
        appearance: t = "default",
        children: n = 0,
        max: a = 99,
        testId: l
      } ) => o.a.createElement( r.a.Provider, {
        value: e
      }, o.a.createElement( i.a.Consumer, null, ( {
        mode: e
      } ) => o.a.createElement( r.a.Consumer, {
        appearance: t,
        mode: e
      }, e => o.a.createElement( c.a, Object.assign( {}, e, {
        "data-testid": l
      } ), "string" == typeof n ? n : o.a.createElement( s.a, {
        max: a
      }, n ) ) ) ) )
    },
    "8uyH": function ( e, t, n ) {
      var a = n( "dpio" ),
        o = n( "OekA" ),
        i = n( "S3pA" ),
        r = n( "wxYD" );
      e.exports = function ( e, t ) {
        return function ( n, c ) {
          var s = r( n ) ? a : o,
            l = t ? t() : {};
          return s( n, e, i( c, 2 ), l )
        }
      }
    },
    "C33+": function ( e, t, n ) {
      "use strict";
      n.d( t, "c", ( function () {
        return o
      } ) ), n.d( t, "a", ( function () {
        return i
      } ) ), n.d( t, "b", ( function () {
        return r
      } ) );
      var a = n( "RfuI" );
      const o = Object( a.a )( {
          id: "L6iwn",
          name: "OnboardingSpotlight",
          loader: () => Promise.all( [ n.e( "afp~af75c846" ), n.e( "vendors~4134d62c" ), n.e( 24 ), n.e( 68 ), n.e( "onboarding-spotlight-coordinator~b59ad437" ) ] ).then( n.bind( null, "YVOQ" ) ).then( ( {
            OnboardingSpotlightCoordinator: e
          } ) => e )
        } ),
        i = Object( a.a )( {
          id: "vEojO",
          name: "HomeOnboardingSpotlight",
          loader: () => Promise.all( [ n.e( "afp~af75c846" ), n.e( "vendors~4134d62c" ), n.e( 24 ), n.e( 68 ), n.e( "onboarding-spotlight-coordinator~b59ad437" ) ] ).then( n.bind( null, "HDvt" ) ).then( ( {
            HomeOnboardingSpotlightCoordinator: e
          } ) => e )
        } ),
        r = Object( a.a )( {
          id: "EH0a3",
          name: "NthUserHomeSpotlightCoordinator",
          loader: async () => ( await Promise.all( [ n.e( "afp~af75c846" ), n.e( "vendors~4134d62c" ), n.e( 24 ), n.e( 68 ), n.e( "onboarding-spotlight-coordinator~b59ad437" ) ] ).then( n.bind( null, "EHFt" ) ) ).NthUserHomeSpotlightCoordinator
        } )
    },
    EvIQ: function ( e, t, n ) {
      "use strict";
      n.d( t, "a", ( function () {
        return o
      } ) );
      var a = n( "RfuI" );
      n( "tMo9" );
      const o = Object( a.a )( {
        id: "kxuGX",
        name: "OnboardingNudge",
        loader: async () => ( await Promise.all( [ n.e( 0 ), n.e( 55 ), n.e( "nudge-tooltip~b59ad437" ) ] ).then( n.bind( null, "la5E" ) ) ).OnboardingNudge,
        loading: ( {
          children: e,
          renderChildrenWhileLoading: t
        } ) => t ? e( !1 ) : null
      } )
    },
    He39: function ( e, t, n ) {
      "use strict";
      var a = n( "HbGN" ),
        o = n( "l1C2" ),
        i = n( "mzIm" );
      t.a = e => {
        let {
          maxWidth: t = 800,
          minWidth: n = 320
        } = e, r = Object( a.a )( e, [ "maxWidth", "minWidth" ] );
        return Object( o.f )( i.a, Object.assign( {
          maxWidth: t,
          minWidth: n
        }, r ) )
      }
    },
    LVSP: function ( e, t, n ) {
      "use strict";
      var a = n( "zjfJ" ),
        o = n( "ERkP" ),
        i = n.n( o ),
        r = n( "aWzz" ),
        c = n.n( r ),
        s = n( "lZoD" ),
        l = n( "cEjM" ),
        d = n( "EvV7" ),
        u = n( "Czhu" ),
        m = n( "Iy7w" ),
        p = n( "Rj53" ),
        b = n.n( p ),
        h = n( "L21V" ),
        g = n( "gQ5V" ),
        f = n( "aiWh" ),
        O = n( "+CY+" ),
        E = n( "v9KL" ),
        v = n( "Tr0A" ),
        k = n( "1X17" ),
        y = n( "W90J" ),
        j = n( "mvtW" ),
        I = n( "6n9r" ),
        C = n( "RUJR" ),
        P = n( "2DyF" ),
        T = n( "FdGg" ),
        x = n( "X2PC" ),
        D = n( "dIe6" ),
        S = n( "5ypJ" ),
        w = n.n( S ),
        R = n( "3VMZ" ),
        M = n( "Dsoe" ),
        N = n( "6z9Z" ),
        A = n( "RfuI" );
      const L = Object( A.a )( {
          id: "z3Hdj",
          name: "LinkToThisPageDialog",
          loader: () => Promise.all( [ n.e( 1 ), n.e( "link-to-this-page-dialog~b59ad437" ) ] ).then( n.bind( null, "qavQ" ) ).then( ( {
            LinkToThisPageDialog: e
          } ) => e )
        } ),
        K = Object( A.a )( {
          id: "vahgb",
          name: "CopyPageTreeDialog",
          loader: async () => ( await Promise.all( [ n.e( 2 ), n.e( 3 ), n.e( 1 ), n.e( 22 ), n.e( 33 ), n.e( 51 ), n.e( 97 ), n.e( "copy-page-tree-dialog~b59ad437" ) ] ).then( n.bind( null, "mWA6" ) ) ).CopyPageTreeContainer
        } ),
        _ = Object( A.a )( {
          id: "kgu/j",
          name: "MovePageDialog",
          loader: async () => ( await Promise.all( [ n.e( 2 ), n.e( 3 ), n.e( 33 ), n.e( 51 ), n.e( "move-page-dialog~b59ad437" ) ] ).then( n.bind( null, "HMnw" ) ) ).MovePageDialog
        } );
      var B = n( "V6qs" ),
        W = n( "PktU" ),
        V = n( "z9P0" ),
        H = n( "ANgl" ),
        F = n( "CMz1" ),
        z = n( "EufE" );
      const G = i.a.createElement( h.b, {
        id: "restrictions.dialog.link.text",
        defaultMessage: "Restrictions",
        description: "Text on the link in actions menu that opens page restrictions dialog"
      } );

      function U( {
        children: e
      } ) {
        const {
          createAnalyticsEvent: t
        } = Object( V.a )();
        return e ? i.a.createElement( s.c, {
          to: [ F.a ]
        }, n => i.a.createElement( H.a, null, ( {
          loading: a,
          error: o,
          edition: r
        } ) => a ? null : o ? i.a.createElement( D.a, {
          error: o
        } ) : r ? e( {
          id: "bm-restrictions-link",
          label: G,
          onClick() {
            Object( z.b )( {
              actionSubjectId: "restrictionsDialogLink",
              createAnalyticsEvent: t,
              dialogStateContainer: n,
              triggeredFrom: "actionsMenu",
              edition: r
            } )
          }
        } ) : null ) ) : null
      }
      var q = n( "M/rd" ),
        J = n( "Ua4J" ),
        Q = n( "+6Tk" ),
        Y = n( "KIs4" ),
        $ = n( "3Z2R" ),
        Z = n( "r+LL" ),
        X = n( "fuv9" ),
        ee = n( "dpHv" ),
        te = n( "lbXe" ),
        ne = n( "He39" ),
        ae = n( "93WT" ),
        oe = n( "29b4" ),
        ie = n( "Iops" ),
        re = n( "ewfN" ),
        ce = n( "HYLC" ),
        se = n( "0nUU" ),
        le = n( "keNr" ),
        de = n( "3IV/" ),
        ue = n( "a8dO" ),
        me = n( "MV18" );

      function pe( e ) {
        const t = "#" === e[ 0 ] ? e : "#" + e;
        ! function e( t, n, a ) {
          !t() && n && setTimeout( () => e( t, n - 1, a ), a )
        }( () => {
          const e = document.querySelector( t );
          if ( e ) return e.click(), !0
        }, 100, 5 )
      }
      class be extends o.PureComponent {
        createListener( e ) {
          return () => {
            this.props.setActiveKeyboardShortcutHandler( () => {
                pe( e )
              } ),
              function () {
                const e = document.querySelector( "#tools-menu-trigger" );
                "true" === e.getAttribute( "aria-expanded" ) || e.click()
              }()
          }
        }
        render() {
          const {
            keyboardShortcuts: e
          } = this.props;
          return e.length > 0 ? i.a.createElement( o.Fragment, null, e.map( ( {
            accelerator: e,
            itemId: t
          } ) => i.a.createElement( O.a, {
            key: e,
            accelerator: e,
            listener: this.createListener( t )
          } ) ) ) : null
        }
      }
      var he = n( "lyMi" ),
        ge = n.n( he ),
        fe = n( "745k" );
      const Oe = () => {},
        Ee = Object( m.a )( "div", {
          target: "e1o9ekcq0"
        } )( {
          name: "1y6ic72",
          styles: "margin-left:10px;"
        } ),
        ve = Object( o.memo )( ( {
          isDisabled: e,
          isOpen: t = !1,
          onOpenChange: n = Oe,
          onPositioned: a = Oe,
          children: o
        } ) => i.a.createElement( Ee, {
          "data-test-id": "content-tools-dropdown-menu-container"
        }, i.a.createElement( fe.a, {
          testId: "content-tools-dropdown-menu",
          appearance: "tall",
          triggerType: "button",
          triggerButtonProps: {
            id: "tools-menu-trigger",
            appearance: "subtle",
            iconBefore: i.a.createElement( ge.a, null ),
            isDisabled: e
          },
          position: "bottom right",
          isOpen: t,
          onOpenChange: n,
          shouldFlip: !1,
          isDisabled: e,
          onPositioned: a
        }, o || null ) ) );
      ve.propTypes = {
        isDisabled: c.a.bool,
        isOpen: c.a.bool,
        onOpenChange: c.a.func,
        onPositioned: c.a.func,
        children: c.a.node
      };
      const ke = Object( m.a )( "div", {
        target: "e1femjy00"
      } )( "border-bottom:2px solid ", de.N40A, ";padding-bottom:3px;margin-bottom:3px;&:last-of-type{border-bottom:0;padding-bottom:0;margin-bottom:0;}" );
      class ye extends o.PureComponent {
        constructor( ...e ) {
          super( ...e ), Object( a.a )( this, "state", {
            isMenuOpen: !1
          } ), Object( a.a )( this, "bmDropdownInteractionMetric", Object( ce.a )( se.a.MORE_ACTIONS_DROPDOWN ) ), Object( a.a )( this, "isInteractionEnabled", this.props.featureFlags && !this.props.featureFlags[ le.a ] ), Object( a.a )( this, "activeKeyboardShortcutHandler", null ), Object( a.a )( this, "setActiveKeyboardShortcutHandler", e => {
            this.activeKeyboardShortcutHandler = e
          } ), Object( a.a )( this, "onPositioned", () => {
            this.isInteractionEnabled && this.bmDropdownInteractionMetric && this.bmDropdownInteractionMetric.stop()
          } ), Object( a.a )( this, "handleOpenChange", ( {
            isOpen: e
          }, t ) => {
            e && this.isInteractionEnabled && this.bmDropdownInteractionMetric && this.bmDropdownInteractionMetric.start(), this.setState( {
              isMenuOpen: e
            } ), this.props.onOpenChange && this.props.onOpenChange( e ), this.activeKeyboardShortcutHandler && ( this.activeKeyboardShortcutHandler(), this.activeKeyboardShortcutHandler = null ), this.fireToggleAnalyticsEvent( t )
          } ), Object( a.a )( this, "closeDialog", () => {
            this.setState( {
              isMenuOpen: !1
            } )
          } ), Object( a.a )( this, "fireToggleAnalyticsEvent", e => {
            e.update( {
              data: {
                action: "clicked",
                actionSubject: "moreIcon",
                source: "moreActions",
                attributes: {
                  componentVersion: "v2"
                }
              },
              type: "sendTrackEvent"
            } ).fire()
          } )
        }
        render() {
          const {
            itemSections: e,
            keyboardShortcuts: t
          } = this.props, {
            isMenuOpen: n
          } = this.state;
          return i.a.createElement( o.Fragment, null, i.a.createElement( be, {
            keyboardShortcuts: t,
            setActiveKeyboardShortcutHandler: this.setActiveKeyboardShortcutHandler
          } ), i.a.createElement( ue.a, {
            content: i.a.createElement( h.b, {
              id: "content-tools.button.tooltip",
              defaultMessage: "More actions",
              description: "Tooltip for button that opens a menu providing additional actions for a page"
            } ),
            hideTooltipOnClick: !0,
            position: "bottom"
          }, i.a.createElement( ve, {
            isDisabled: !1,
            isOpen: n,
            onOpenChange: this.handleOpenChange,
            onPositioned: this.onPositioned
          }, e.map( ( e, t ) => i.a.createElement( ke, {
            key: t
          }, e ) ) ) ), i.a.createElement( me.a, {
            name: R.a.VIEW_PAGE_CONTENT_TOOLS
          } ) )
        }
      }
      Object( a.a )( ye, "defaultProps", {
        keyboardShortcuts: []
      } );
      var je = n( "Fqgi" ),
        Ie = n( "8oD3" );
      const Ce = Object( m.a )( "div", {
          target: "eub7cti0"
        } )( {
          name: "k008qs",
          styles: "display:flex;"
        } ),
        Pe = Object( m.a )( "div", {
          target: "eub7cti1"
        } )( {
          name: "kzfr2u",
          styles: "flex:2;"
        } ),
        Te = Object( m.a )( "div", {
          target: "eub7cti2"
        } )( {
          name: "xydsc",
          styles: "padding-left:6px;"
        } );
      class xe extends o.PureComponent {
        render() {
          const {
            label: e,
            onClick: t,
            url: n,
            id: a,
            className: o,
            isDisabled: r,
            innerRef: c,
            linkComponent: s,
            testId: l,
            onMouseEnter: d
          } = this.props;
          return i.a.createElement( "div", {
            onMouseEnter: d,
            "data-test-id": a
          }, i.a.createElement( je.a, {
            className: o,
            id: a,
            href: n,
            testId: l || a,
            onClick: t,
            isDisabled: r,
            linkComponent: s
          }, "string" == typeof e ? i.a.createElement( Ce, null, i.a.createElement( Pe, null, i.a.createElement( "span", {
            ref: c,
            "data-test-id": "content-item-label",
            dangerouslySetInnerHTML: {
              __html: e.replace( /[0-9]/g, "" ).replace( /[{()}]/g, "" )
            }
          } ) ), e.replace( /\D/g, "" ).length > 0 ? i.a.createElement( Te, null, i.a.createElement( Ie.a, null, e.replace( /\D/g, "" ) ) ) : null ) : e ) )
        }
      }
      Object( a.a )( xe, "defaultProps", {
        onMouseEnter: () => {}
      } );
      const De = i.a.forwardRef( ( e, t ) => i.a.createElement( xe, Object( u.a )( {
        innerRef: t
      }, e ) ) );
      De.displayName = "ContentToolsItem";
      var Se = n( "L3Ew" ),
        we = n( "3HyH" ),
        Re = n( "i8f0" ),
        Me = n( "a0gl" ),
        Ne = n( "lRcl" ),
        Ae = n( "JIsJ" );
      const Le = Object( m.a )( "div", {
          target: "e1hm6v4c0"
        } )( "position:relative;color:", ( {
          isLoading: e
        } ) => e ? de.N50 : "inherit", ";" ),
        Ke = Object( m.a )( "div", {
          target: "e1hm6v4c1"
        } )( {
          name: "awnvjf",
          styles: "position:absolute;left:50%;margin-left:-8px;top:50%;margin-top:-8px;"
        } );

      function _e( {
        extension: e,
        onClick: t,
        isLoading: n
      } ) {
        const a = Object( o.useCallback )( () => {
          t( e )
        }, [ e, t ] );
        return i.a.createElement( De, {
          id: e.id,
          url: "#",
          isDisabled: n,
          label: i.a.createElement( Le, {
            isLoading: n
          }, Object( Ae.a )( e ), n && i.a.createElement( Ke, {
            "data-test-id": "forge-ui-extension-loading-spinner"
          }, i.a.createElement( Ne.a, {
            size: "small"
          } ) ) ),
          onClick: a
        } )
      }
      const Be = R.a.VIEW_PAGE_CONTENT_TOOLS_FORGE;

      function We( {
        contentId: e,
        spaceKey: t,
        children: n,
        onLoadComplete: a,
        isDropdownMenuOpen: r
      } ) {
        const c = Object( o.useContext )( N.a ),
          [ s, l ] = Object( o.useState )( null ),
          [ d, u ] = Object( o.useState )( !1 ),
          m = s && !( d && !r );
        Object( o.useEffect )( () => {
          m || ( c.abort( {
            name: Be,
            reason: "Canceled by user"
          } ), u( !1 ), l( null ) )
        }, [ m, c ] );
        const p = Object( o.useCallback )( () => {
            a(), u( !1 )
          }, [ a, u ] ),
          b = Object( o.useCallback )( () => {
            l( null )
          }, [ l ] ),
          h = Object( o.useCallback )( e => {
            c.start( {
              name: Be,
              id: e.id,
              timeout: 1e4
            } ), l( e ), u( !0 )
          }, [ l, u, c ] );
        return i.a.createElement( o.Fragment, null, m && i.a.createElement( He, {
          extension: s,
          contentId: e,
          spaceKey: t,
          onLoadComplete: p,
          onClose: b
        } ), i.a.createElement( Se.b, {
          moduleType: we.a.CONTENT_ACTION,
          render: e => {
            const t = e.map( e => i.a.createElement( _e, {
              key: e.id,
              extension: e,
              onClick: h,
              isLoading: s === e
            } ) );
            return n( t )
          }
        } ) )
      }
      const Ve = Object( m.a )( "div", {
        target: "e7h4ygv0"
      } )( {
        name: "1hyfx7x",
        styles: "display:none;"
      } );

      function He( {
        extension: e,
        contentId: t,
        spaceKey: n,
        onLoadComplete: a,
        onClose: r
      } ) {
        const {
          featureFlags: c
        } = Object( Me.a )(), s = Object( o.useContext )( N.a ), l = Boolean( c[ "confluence.frontend.forge.render-next" ] ), d = Object( o.useCallback )( () => {
          s.succeed( {
            name: Be
          } ), a()
        }, [ a, s ] );
        return i.a.createElement( Ve, null, l ? i.a.createElement( Re.b, {
          key: e.id,
          app: e,
          extensionData: {
            contentId: t,
            spaceKey: n
          },
          onInitialRender: d,
          onTearDown: r
        } ) : i.a.createElement( Se.a, {
          key: e.id,
          extension: e,
          forgeContext: {
            contentId: t,
            spaceKey: n
          },
          onInitialRender: d,
          tearDown: r
        } ) )
      }
      const Fe = "action-export-pdf-link",
        ze = "action-export-word-link",
        Ge = "link-to-page-link",
        Ue = "action-view-source-link",
        qe = "view-in-hierarchy-link",
        Je = "action-view-storage-link",
        Qe = "content-api",
        Ye = "import-word-doc",
        $e = "export",
        Ze = "view-page-info-link",
        Xe = "confluence.frontend.overflow.menu.cleanup.reordering",
        et = Object( m.a )( "div", {
          target: "egsn0hr0"
        } )( {
          name: "k008qs",
          styles: "display:flex;"
        } ),
        tt = Object( m.a )( "div", {
          target: "egsn0hr1"
        } )( {
          name: "gtq76n",
          styles: "flex:2;margin-right:6px;"
        } );
      class nt extends o.PureComponent {
        constructor( ...e ) {
          super( ...e ), Object( a.a )( this, "state", {
            isDropdownMenuOpen: !1,
            nestedPopup: {
              [ $e ]: !1,
              advanced: !1
            }
          } ), Object( a.a )( this, "resolvedInlineCommentsItemRef", i.a.createRef() ), Object( a.a )( this, "contentToolsComponentRef", i.a.createRef() ), Object( a.a )( this, "toggleExportNestedPopup", e => {
            let t;
            t = void 0 !== e ? e : !this.state.nestedPopup[ $e ], this.setState( e => ( {
              nestedPopup: Object( u.a )( Object( u.a )( {}, e.nestedPopup ), {}, {
                [ $e ]: t
              } )
            } ) )
          } ), Object( a.a )( this, "toggleAdvancedNestedPopup", e => {
            let t;
            t = void 0 !== e ? e : !this.state.nestedPopup.advanced, this.setState( e => ( {
              nestedPopup: Object( u.a )( Object( u.a )( {}, e.nestedPopup ), {}, {
                advanced: t
              } )
            } ) )
          } ), Object( a.a )( this, "makeDeletePageDialogOpener", ( e, t ) => () => {
            this.props.createAnalyticsEvent( {
              type: "sendUIEvent",
              data: {
                action: "clicked",
                actionSubject: "button",
                actionSubjectId: "deletePage",
                source: "contentToolsItem"
              }
            } ).fire(), this.props.experienceTracker.start( {
              name: R.a.DELETE_PAGE
            } ), e.showDialog( C.a, {
              contentId: t,
              shouldRedirectOnSuccess: !0
            } )
          } ), Object( a.a )( this, "makeArchivePageDialogOpener", ( e, t, n, a ) => () => {
            this.props.createAnalyticsEvent( {
              type: "sendUIEvent",
              data: {
                action: "clicked",
                actionSubject: e ? "archiveButton" : "restoreButton",
                actionSubjectId: a === j.a.FREE ? "archivePageUpsell" : null,
                source: "contentToolsItem",
                attributes: {
                  confluenceEdition: a
                }
              }
            } ).fire(), a !== j.a.FREE ? ( this.props.experienceTracker.start( {
              name: e ? R.a.ARCHIVE_PAGES : R.a.RESTORE_PAGES
            } ), t.showDialog( e ? E.a : E.g, {
              contentId: n,
              source: "contentToolsItem"
            } ) ) : t.showDialog( E.c )
          } ), Object( a.a )( this, "makeLinkToThisPageDialogOpener", ( e, t ) => () => {
            e.showDialog( L, {
              contentId: t
            } )
          } ), Object( a.a )( this, "makeCopyPageTreeDialogOpener", ( e, t, n ) => () => {
            e.showDialog( K, {
              contentId: n,
              spaceKey: t
            } )
          } ), Object( a.a )( this, "makeInlineCommentsDialogOpener", ( e, t, n ) => () => {
            e.showDialog( W.b, {
              spaceKey: t,
              contentId: n,
              context: "renderer"
            } )
          } ), Object( a.a )( this, "makeModernizedMovePageDialogOpener", ( e, t, n ) => () => {
            e.showDialog( _, {
              spaceKey: t,
              contentId: n
            } )
          } ), Object( a.a )( this, "getRestrictionsMenuComponent", ( e, t = {} ) => i.a.createElement( T.a, {
            attribution: x.a.MISSION_CONTROL,
            key: e.completeKey
          }, i.a.createElement( U, null, e => i.a.createElement( De, Object( u.a )( Object( u.a )( {}, e ), t ) ) ) ) ), Object( a.a )( this, "getSectionComponent", ( e, t, n, a ) => i.a.createElement( ie.a, {
            key: t + "-popup",
            autoFocus: !0,
            isOpen: this.state.nestedPopup[ t ],
            placement: "auto-start",
            onClose: () => {
              this.setState( {
                nestedPopup: {
                  advanced: !1,
                  [ $e ]: !1
                }
              } )
            },
            content: () => i.a.createElement( ne.a, {
              minWidth: 220,
              onClick: e => e.stopPropagation()
            }, i.a.createElement( ae.a, null, e.filter( e => !!e ).map( e => e.id === Ge ? ( e.url = "", e.urlWithoutContextPath = "", i.a.createElement( f.a, {
              key: e.completeKey,
              analyticsData: {
                type: "sendUIEvent",
                data: {
                  action: "clicked",
                  actionSubject: "LinkToThisPageButton",
                  source: "viewPageScreen",
                  attributes: {
                    triggeredFrom: "actionsMenu"
                  }
                }
              }
            }, i.a.createElement( De, Object( u.a )( Object( u.a )( {
              key: e.completeKey
            }, e ), {}, {
              onClick: this.makeLinkToThisPageDialogOpener( n, a )
            } ) ) ) ) : t.id === qe ? i.a.createElement( f.a, {
              key: e.completeKey,
              analyticsData: {
                type: "sendUIEvent",
                data: {
                  action: "clicked",
                  actionSubject: "ViewInHierarchyButton",
                  source: "viewPageScreen",
                  attributes: {
                    triggeredFrom: "actionsMenu"
                  }
                }
              }
            }, i.a.createElement( De, Object( u.a )( {
              key: e.completeKey
            }, e ) ) ) : i.a.createElement( De, Object( u.a )( {
              key: e.completeKey
            }, e ) ) ) ) ),
            trigger: e => i.a.createElement( oe.a, Object( u.a )( Object( u.a )( {}, e ), {}, {
              onMouseEnter: () => {
                t === $e ? this.toggleExportNestedPopup( !0 ) : this.toggleAdvancedNestedPopup( !0 )
              },
              isSelected: this.state.nestedPopup[ t ],
              onClick: () => {
                t === $e ? this.toggleExportNestedPopup() : this.toggleAdvancedNestedPopup()
              },
              iconAfter: i.a.createElement( w.a, {
                label: ""
              } ),
              cssFn: e => Object( u.a )( Object( u.a )( {}, e ), {}, {
                padding: "8px 6px 8px 12px"
              } )
            } ), t === $e ? i.a.createElement( h.b, {
              defaultMessage: "Export",
              id: "content-tools.export.nested.section.heading",
              description: "The text that display in the menu dropdown that group Export to PDF and Export to Word"
            } ) : i.a.createElement( h.b, {
              defaultMessage: "Advanced details",
              id: "content-tools.advanced.nested.section.heading",
              description: "The text that display in the menu dropdown that group Page Information, Page Information, View Source and View Content API"
            } ) )
          } ) ), Object( a.a )( this, "groupWebItemsBySubSection", e => {
            e.forEach( e => {
              -1 !== [ ze, Fe ].indexOf( e.id ) ? e.subSection = $e : -1 !== [ Ge, Ze, Ue, qe, Je, Qe, Ye ].indexOf( e.id ) ? e.subSection = "advanced" : -1 !== e.completeKey.indexOf( "com.atlassian.plugins.atlassian-connect-plugin" ) && "com.addonengine.analytics__analytics-content-menu-item" !== e.id ? e.subSection = "third-party" : e.subSection = "others"
            } )
          } )
        }
        splitInSections( e ) {
          return e ? b()( e, "section" ) : {}
        }
        createMenuItems( e, t, n, a, r = !1 ) {
          const {
            spaceKey: c,
            contentId: s
          } = this.props, l = this.splitInSections( e ), d = [], m = [], p = [], b = [], h = [], O = {
            onMouseEnter: e => {
              e.stopPropagation(), this.setState( {
                nestedPopup: {
                  advanced: !1,
                  [ $e ]: !1
                }
              } )
            }
          };
          if ( ( t || Object.keys( l ) ).forEach( e => {
              const t = l[ e ].map( e => {
                if ( "com.addonengine.analytics__analytics-content-menu-item" === e.id && "v2" === n[ "confluence.frontend.overflow.menu.cleanup.analytics.removal" ] && !r ) return null;
                if ( "v2" === n[ Xe ] ) {
                  if ( e.subSection === $e ) return p.push( e ), null;
                  if ( "advanced" === e.subSection ) return b.push( e ), null;
                  if ( "third-party" === e.subSection ) return e.className = e.styleClass, h.push( e ), null
                }
                if ( "action-view-history-link" === e.id ) return i.a.createElement( De, Object( u.a )( Object( u.a )( {}, O ), {}, {
                  id: e.id,
                  label: e.label,
                  linkComponent: q.a,
                  url: e.url,
                  key: e.completeKey
                } ) );
                if ( e.id === Z.a.ANALYTICS_ADDON_ACTIONS_MENU ) return i.a.createElement( B.a, {
                  webItemId: e.id,
                  key: e.completeKey
                }, i.a.createElement( De, Object( u.a )( Object( u.a )( {}, e ), O ) ) );
                if ( "view-resolved-comments" === e.id ) return i.a.createElement( De, Object( u.a )( Object( u.a )( {}, O ), {}, {
                  id: "bm-resolved-inline-comments",
                  key: e.completeKey,
                  label: i.a.createElement( et, null, i.a.createElement( tt, null, i.a.createElement( "span", null, e.label, " " ) ), i.a.createElement( W.a, {
                    contentId: s
                  } ) ),
                  ref: this.resolvedInlineCommentsItemRef,
                  onClick: this.makeInlineCommentsDialogOpener( a, c, s )
                } ) );
                if ( "action-page-permissions-link" === e.id ) return r ? this.getRestrictionsMenuComponent( e, O ) : null;
                if ( e.id === Ge ) return e.url = "", e.urlWithoutContextPath = "", m.push( {
                  accelerator: "k",
                  itemId: e.id
                } ), i.a.createElement( De, Object( u.a )( Object( u.a )( Object( u.a )( {
                  key: e.completeKey
                }, e ), O ), {}, {
                  onClick: this.makeLinkToThisPageDialogOpener( a, s )
                } ) );
                if ( "action-copy-page-link" === e.id && n[ "confluence.frontend.copy-page-dialog" ] ) return e.url = "", e.urlWithoutContextPath = "", i.a.createElement( De, Object( u.a )( Object( u.a )( Object( u.a )( {
                  key: e.completeKey
                }, e ), O ), {}, {
                  onClick: this.makeCopyPageTreeDialogOpener( a, c, s )
                } ) );
                if ( "view-attachments-link" === e.id ) return m.push( {
                  accelerator: "t",
                  itemId: e.id
                } ), i.a.createElement( f.a, {
                  key: e.completeKey,
                  analyticsData: ee.a
                }, i.a.createElement( De, Object( u.a )( Object( u.a )( {}, e ), O ) ) );
                if ( e.className = e.styleClass, "action-remove-content-link" === e.id && n[ "confluence.frontend.delete-page-dialog" ] ) return i.a.createElement( De, Object( u.a )( Object( u.a )( Object( u.a )( {}, e ), O ), {}, {
                  url: void 0,
                  onClick: this.makeDeletePageDialogOpener( a, s )
                } ) );
                if ( "action-archive-link" === e.id || "action-restore-link" === e.id ) {
                  const t = "action-archive-link" === e.id;
                  return n[ "confluence.frontend.archive.pages" ] ? i.a.createElement( T.a, {
                    attribution: x.a.MISSION_CONTROL,
                    key: e.completeKey
                  }, i.a.createElement( g.b, {
                    query: v.a,
                    variables: {
                      contentId: s
                    }
                  }, ( {
                    loading: n,
                    error: o,
                    data: r
                  } ) => {
                    var c, l, d;
                    const m = Object( I.a )( r ),
                      p = null == r || null === ( c = r.content ) || void 0 === c || null === ( l = c.nodes ) || void 0 === l || null === ( d = l[ 0 ] ) || void 0 === d ? void 0 : d.operations;
                    return n ? null : o ? i.a.createElement( D.a, {
                      error: o
                    } ) : m === j.a.FREE && "action-restore-link" !== e.id || null !== p && Object( k.b )( p, Object( Q.a )( y.e ) ) ? i.a.createElement( De, Object( u.a )( Object( u.a )( Object( u.a )( {}, e ), O ), {}, {
                      label: e.label,
                      url: void 0,
                      onClick: this.makeArchivePageDialogOpener( t, a, s, m )
                    } ) ) : null
                  } ) ) : null
                }
                return "action-move-page-dialog-link" === e.id ? n[ "confluence.frontend.modernized-move-page" ] ? ( e.url = "", e.urlWithoutContextPath = "", e.id = e.id + "-modernized", i.a.createElement( De, Object( u.a )( Object( u.a )( Object( u.a )( {}, e ), O ), {}, {
                  onClick: this.makeModernizedMovePageDialogOpener( a, c, s )
                } ) ) ) : i.a.createElement( X.a, {
                  key: e.completeKey,
                  wrm: "wr!confluence.web.resources:deferred-dialog-loader"
                }, () => i.a.createElement( o.Fragment, null, i.a.createElement( De, Object( u.a )( Object( u.a )( {}, e ), O ) ) ) ) : i.a.createElement( De, Object( u.a )( {
                  key: e.completeKey
                }, e ) )
              } ).filter( e => !!e );
              if ( "v2" === n[ Xe ] )
                if ( "system.content.action/modify" === e ) {
                  const e = this.getSectionComponent( p, $e, a, s );
                  t.splice( 2, 0, e )
                } else if ( "system.content.action/primary" === e ) {
                const e = t.findIndex( e => "com.atlassian.confluence.plugins.confluence-inline-comments:view-resolved-comments-new" === e.key ),
                  n = this.getSectionComponent( b, "advanced", a, s );
                t.splice( e + 1, 0, n )
              }
              t.length > 0 && d.push( t )
            } ), "v2" === n[ Xe ] ) {
            const e = h.findIndex( e => "confluence-chats-integration__page-config-dialog-trigger" === e.id ),
              t = h.splice( e, 1 )[ 0 ];
            h.splice( 0, 0, t );
            const n = h.filter( e => !!e ).map( e => i.a.createElement( De, Object( u.a )( Object( u.a )( {
              key: e.completeKey
            }, e ), O ) ) );
            d.push( n )
          }
          return [ d, m ]
        }
        renderResolvedInlineCommentsQueryRendererLoader( e, t ) {
          return i.a.createElement( W.c, {
            spaceKey: e,
            contentId: t,
            resolvedInlineCommentsItemRef: this.resolvedInlineCommentsItemRef
          } )
        }
        renderMenuItems( e, t, n ) {
          const {
            isDropdownMenuOpen: a
          } = this.state;
          return i.a.createElement( s.c, {
            to: [ P.a ]
          }, o => i.a.createElement( Y.a, null, ( {
            featureFlags: r
          } ) => i.a.createElement( J.a.Consumer, null, ( {
            match: c
          } ) => i.a.createElement( $.a, {
            tagName: "span",
            location: "system.content.action",
            hasMultipleSections: !0,
            contentId: t,
            version: n,
            renderWhenLoading: !0
          }, ( {
            loading: n,
            webItems: s,
            webSections: l
          } ) => {
            var d;
            if ( n ) return i.a.createElement( ve, {
              isDisabled: !0
            } );
            let u = s;
            r[ "confluence.frontend.remove.page-information" ] && ( u = s.filter( e => e.id !== Ze ) ), "v2" === r[ Xe ] && this.groupWebItemsBySubSection( u );
            const m = ( null != ( d = c ) ? d.name : d ) === re.SPACE_OVERVIEW.name,
              [ p, b ] = this.createMenuItems( u, l, r, o, m );
            return r[ "confluence.frontend.forge.extension-point.content-action" ] ? i.a.createElement( We, {
              spaceKey: e,
              contentId: t,
              onLoadComplete: () => {
                this.contentToolsComponentRef.current.closeDialog()
              },
              isDropdownMenuOpen: a
            }, e => {
              let t = p;
              return e.length && ( t = [ ...p, e ] ), i.a.createElement( ye, {
                key: "content-tools-component",
                itemSections: t,
                keyboardShortcuts: b,
                ref: this.contentToolsComponentRef,
                onOpenChange: e => this.setState( {
                  isDropdownMenuOpen: e
                } ),
                featureFlags: r
              } )
            } ) : i.a.createElement( ye, {
              key: "content-tools-component",
              itemSections: p,
              keyboardShortcuts: b,
              featureFlags: r
            } )
          } ) ) ) )
        }
        render() {
          const {
            spaceKey: e,
            contentId: t,
            version: n,
            onRender: a
          } = this.props;
          return a(), i.a.createElement( T.a, {
            attribution: x.a.BACKBONE
          }, i.a.createElement( M.a, {
            id: t,
            name: R.a.VIEW_PAGE_CONTENT_TOOLS
          } ), i.a.createElement( o.Fragment, null, this.renderMenuItems( e, t, n ), this.renderResolvedInlineCommentsQueryRendererLoader( e, t ), i.a.createElement( Y.a, null, ( {
            featureFlags: e
          } ) => "v2" === e[ Xe ] ? i.a.createElement( s.c, {
            to: [ P.a ]
          }, e => i.a.createElement( O.a, {
            accelerator: "k",
            listener: this.makeLinkToThisPageDialogOpener( e, t )
          } ) ) : null ) ) )
        }
      }
      Object( a.a )( nt, "defaultProps", {
        onRender: () => {},
        version: null
      } );
      const at = Object( N.b )( Object( te.a )()( nt ) );
      n.d( t, "a", ( function () {
        return ot
      } ) );
      class ot extends o.PureComponent {
        constructor( ...e ) {
          super( ...e ), Object( a.a )( this, "isItemMarked", !1 ), Object( a.a )( this, "markItem", null ), Object( a.a )( this, "buttonRendered", () => {
            this.isItemMarked || ( this.isItemMarked = !0, this.markItem( l.a.CONTENT_TOOLS ) )
          } )
        }
        render() {
          const {
            contentId: e,
            spaceKey: t,
            version: n
          } = this.props;
          return i.a.createElement( s.c, {
            to: [ d.a ]
          }, ( {
            addItem: a,
            markItem: o
          } ) => ( a( l.a.CONTENT_TOOLS ), this.markItem = o, i.a.createElement( at, {
            spaceKey: t,
            contentId: e,
            version: n,
            onRender: this.buttonRendered
          } ) ) )
        }
      }
    },
    OekA: function ( e, t, n ) {
      var a = n( "Q4oW" );
      e.exports = function ( e, t, n, o ) {
        return a( e, ( function ( e, a, i ) {
          t( o, e, n( e ), i )
        } ) ), o
      }
    },
    PktU: function ( e, t, n ) {
      "use strict";
      n.d( t, "b", ( function () {
        return o
      } ) ), n.d( t, "c", ( function () {
        return i
      } ) ), n.d( t, "a", ( function () {
        return r
      } ) );
      var a = n( "RfuI" );
      const o = Object( a.a )( {
          id: "4H+Ub",
          name: "ResolvedInlineCommentsDialogLoader",
          loader: async () => ( await Promise.all( [ n.e( 7 ), n.e( 8 ), n.e( 9 ), n.e( 11 ), n.e( 10 ), n.e( 12 ), n.e( 17 ), n.e( 19 ), n.e( 20 ), n.e( 21 ), n.e( 25 ), n.e( 29 ), n.e( 40 ), n.e( "resolved-inline-comments-dialog~b59ad437" ) ] ).then( n.bind( null, "9oDW" ) ) ).ResolvedInlineCommentsDialog
        } ),
        i = Object( a.a )( {
          id: "06nBM",
          name: "ResolvedInlineCommentsQueryRendererLoader",
          loader: async () => ( await Promise.all( [ n.e( 7 ), n.e( 8 ), n.e( 9 ), n.e( 11 ), n.e( 10 ), n.e( 12 ), n.e( 17 ), n.e( 19 ), n.e( 20 ), n.e( 21 ), n.e( 25 ), n.e( 29 ), n.e( 40 ), n.e( "resolved-inline-comments-dialog~b59ad437" ), n.e( "resolved-inline-comments-dialog-query-renderer~f25fd0af" ) ] ).then( n.bind( null, "Oa7q" ) ) ).ResolvedInlineCommentsQueryRenderer
        } ),
        r = Object( a.a )( {
          id: "nWOvd",
          name: "ResolvedInlineCommentsCounterLoader",
          loader: async () => ( await n.e( "resolved-inline-comments-dialog-counter~b59ad437" ).then( n.bind( null, "9nge" ) ) ).ResolvedInlineCommentsCounter
        } )
    },
    PoOp: function ( e, t, n ) {
      "use strict";
      n.d( t, "a", ( function () {
        return s
      } ) );
      var a = n( "ERkP" ),
        o = n( "+6Tk" ),
        i = n( "HYLC" ),
        r = n( "keNr" ),
        c = n( "hb7u" );
      const s = Object( a.memo )( ( {
        metricName: e,
        usePageLoadStartTime: t = !1,
        startTime: n
      } ) => {
        const s = Object( i.a )( e ),
          l = Object( o.a )( r.a );
        return Object( a.useEffect )( () => {
          !l && s && s.start( {
            startTime: t ? c.a.pageLoadStartTimestamp : n
          } )
        }, [ s, l, n, t ] ), null
      } )
    },
    Rj53: function ( e, t, n ) {
      var a = n( "wC3K" ),
        o = n( "8uyH" ),
        i = Object.prototype.hasOwnProperty,
        r = o( ( function ( e, t, n ) {
          i.call( e, n ) ? e[ n ].push( t ) : a( e, n, [ t ] )
        } ) );
      e.exports = r
    },
    Tr0A: function ( e, t, n ) {
      "use strict";
      n.d( t, "a", ( function () {
        return r
      } ) );
      var a = n( "H5qd" ),
        o = n.n( a ),
        i = n( "uMk2" );
      const r = o.a `query ShowArchiveCTAQuery($contentId:ID!){...EditionFragment content(id:$contentId){nodes{id operations{operation targetType}}}}${i.a}`
    },
    UEVo: function ( e, t, n ) {
      "use strict";
      n.d( t, "a", ( function () {
        return c
      } ) );
      var a = n( "ERkP" ),
        o = n( "+6Tk" ),
        i = n( "HYLC" ),
        r = n( "keNr" );
      const c = Object( a.memo )( ( {
        metricName: e,
        stopTime: t,
        customData: n
      } ) => {
        const c = Object( i.a )( e ),
          s = Object( o.a )( r.a );
        return Object( a.useEffect )( () => {
          !s && c && c.stop( {
            customData: n,
            stopTime: t
          } )
        }, [ c, s ] ), null
      } )
    },
    VzPM: function ( e, t, n ) {
      "use strict";
      var a, o, i = n( "zjfJ" ),
        r = n( "ERkP" ),
        c = n.n( r ),
        s = ( n( "aWzz" ), n( "gQ5V" ) ),
        l = n( "zJ/j" ),
        d = n( "Dsoe" ),
        u = n( "3VMZ" ),
        m = n( "FdGg" ),
        p = n( "X2PC" ),
        b = n( "Iy7w" ),
        h = n( "7nmT" ),
        g = n.n( h ),
        f = n( "L21V" ),
        O = n( "JGo4" ),
        E = n.n( O ),
        v = n( "a8dO" ),
        k = n( "3IV/" ),
        y = n( "MV18" ),
        j = n( "M/rd" ),
        I = n( "Qdol" ),
        C = n( "ewfN" ),
        P = n( "+CY+" ),
        T = n( "Ua+b" ),
        x = n( "uQoP" ),
        D = n( "DQZQ" ),
        S = n( "EvIQ" ),
        w = n( "PoOp" ),
        R = n( "0nUU" ),
        M = n( "UEVo" ),
        N = n( "ckp/" );
      const A = Object( b.a )( l.a, {
          target: "e11s6ub80"
        } )( {
          name: "1g98hqh",
          styles: "min-width:30px;"
        } ),
        L = Object( x.a )( A ),
        K = Object( f.f )( {
          editIconLabel: {
            id: "edit-button.icon.edit.label",
            defaultMessage: "Edit Icon",
            description: "aria-label for the edit button content"
          }
        } ),
        _ = Object( b.a )( "div", {
          target: "e11s6ub81"
        } )( {
          name: "10s7pxs",
          styles: "& span > a{display:block;}"
        } ),
        B = Object( b.a )( "div", {
          target: "e11s6ub82"
        } )( "> button:hover{cursor:pointer;background:", k.N30, ";}" ),
        W = Object( f.g )( ( o = a = class extends r.PureComponent {
          constructor( ...e ) {
            super( ...e ), Object( i.a )( this, "editButton", null ), Object( i.a )( this, "handleButtonClick", ( e, t ) => {
              const {
                isFabricSupported: n,
                contentType: a
              } = this.props;
              t.update( {
                data: {
                  action: "clicked",
                  actionSubject: "editButton",
                  attributes: {
                    componentVersion: "v2",
                    contentType: a,
                    isFabricSupported: n,
                    navdexPointType: D.b.END
                  },
                  source: "editContentButton"
                },
                type: "sendTrackEvent"
              } ).fire()
            } ), Object( i.a )( this, "setEditButtonRef", e => {
              this.editButton = e
            } ), Object( i.a )( this, "clickButton", () => {
              this.editButton && g.a.findDOMNode( this.editButton ).click()
            } )
          }
          render() {
            const {
              contentId: e,
              contentType: t,
              intl: n,
              isFabricSupported: a,
              spaceKey: o,
              onRender: i,
              isAnimated: r,
              itemsLoaded: s
            } = this.props, l = "blogpost" === t, d = {
              contentId: e,
              spaceKey: o,
              contentType: l ? "blog" : "pages"
            };
            let m, p;
            a ? ( m = l ? C.EDIT_BLOG_V2 : C.EDIT_PAGE_V2, p = "fabric-edit-button" ) : m = l ? C.EDIT_BLOG : C.EDIT_PAGE;
            const b = () => r ? c.a.createElement( L, {
              appearance: "subtle",
              iconBefore: c.a.createElement( E.a, {
                label: n.formatMessage( K.editIconLabel )
              } ),
              ref: this.setEditButtonRef,
              onClick: this.handleButtonClick,
              "data-test-id": p,
              id: "editPageLink"
            } ) : c.a.createElement( A, {
              appearance: "subtle",
              iconBefore: c.a.createElement( E.a, {
                label: n.formatMessage( K.editIconLabel )
              } ),
              ref: this.setEditButtonRef,
              onClick: this.handleButtonClick,
              "data-test-id": p,
              id: "editPageLink"
            } );
            return c.a.createElement( N.a, null, c.a.createElement( P.a, {
              accelerator: "e",
              listener: this.clickButton
            } ), c.a.createElement( S.a, {
              target: "editPageLink",
              tooltip: c.a.createElement( f.b, {
                id: "edit-button.edit-button-nudge-tooltip",
                defaultMessage: "Click this icon to edit. Multiple users can edit at the same time.",
                description: "nudge tooltip for edit button"
              } ),
              isLoading: !s,
              source: I.e,
              wrapper: _,
              renderChildrenWhileLoading: !0
            }, e => ( i(), c.a.createElement( j.a, {
              name: m.name,
              params: d
            }, c.a.createElement( w.a, {
              metricName: R.a.EDIT_BUTTON,
              usePageLoadStartTime: !0
            } ), e ? b() : c.a.createElement( v.a, {
              tag: "span",
              content: c.a.createElement( T.a, {
                shortcut: "e",
                contentBefore: c.a.createElement( f.b, {
                  id: "edit-button.tooltip",
                  defaultMessage: "Edit",
                  description: "tooltip for button to edit"
                } )
              } )
            }, c.a.createElement( B, null, b() ) ), c.a.createElement( M.a, {
              metricName: R.a.EDIT_BUTTON
            } ) ) ) ), c.a.createElement( y.a, {
              name: u.a.VIEW_PAGE_EDIT_BUTTON
            } ) )
          }
        }, Object( i.a )( a, "defaultProps", {
          onRender: () => {},
          isAnimated: !0,
          itemsLoaded: !0
        } ), o ) );
      var V = n( "H5qd" );
      const H = n.n( V ).a `query EditButtonQuery($contentId:ID!){content(id:$contentId){nodes{id type metadata{frontend{fabricEditorSupported}}operations{operation targetType}space{id key}}}}`;
      n.d( t, "a", ( function () {
        return F
      } ) );
      class F extends r.PureComponent {
        render() {
          const {
            contentId: e,
            onRender: t,
            isAnimated: n,
            itemsLoaded: a
          } = this.props;
          return c.a.createElement( m.a, {
            attribution: p.a.BACKBONE
          }, c.a.createElement( d.a, {
            id: e,
            name: u.a.VIEW_PAGE_EDIT_BUTTON
          } ), c.a.createElement( s.b, {
            query: H,
            variables: {
              contentId: e
            },
            fetchPolicy: "cache-and-network"
          }, ( {
            data: o,
            loading: i,
            error: r
          } ) => {
            var s, d, u, m;
            if ( r ) return null;
            if ( !o && i ) return c.a.createElement( l.a, {
              appearance: "subtle"
            } );
            const p = ( null != ( m = o ) && null != ( m = m.content ) && null != ( m = m.nodes ) && null != ( m = m[ 0 ] ) ? m.operations : m ) || [],
              b = null != ( u = o ) && null != ( u = u.content ) && null != ( u = u.nodes ) && null != ( u = u[ 0 ] ) ? u.type : u;
            if ( !( p.filter( ( {
                operation: e,
                targetType: t
              } ) => "update" === e && t === b ).length > 0 ) ) return null;
            const h = null != ( d = o ) && null != ( d = d.content ) && null != ( d = d.nodes ) && null != ( d = d[ 0 ] ) && null != ( d = d.space ) ? d.key : d,
              g = null != ( s = o ) && null != ( s = s.content ) && null != ( s = s.nodes ) && null != ( s = s[ 0 ] ) && null != ( s = s.metadata ) && null != ( s = s.frontend ) ? s.fabricEditorSupported : s;
            return c.a.createElement( W, {
              contentId: e,
              contentType: b,
              spaceKey: h,
              isFabricSupported: g,
              isAnimated: n,
              onRender: t,
              itemsLoaded: a
            } )
          } ) )
        }
      }
      Object( i.a )( F, "defaultProps", {
        isFabricSupported: !1
      } )
    },
    W90J: function ( e, t, n ) {
      "use strict";
      n.d( t, "c", ( function () {
        return a
      } ) ), n.d( t, "b", ( function () {
        return o
      } ) ), n.d( t, "e", ( function () {
        return i
      } ) ), n.d( t, "f", ( function () {
        return r
      } ) ), n.d( t, "a", ( function () {
        return c
      } ) ), n.d( t, "g", ( function () {
        return s
      } ) ), n.d( t, "d", ( function () {
        return l
      } ) );
      const a = "confluence.frontend.archive.pages",
        o = "confluence.frontend.archive.nested.pages",
        i = "confluence.frontend.enable.archive.permission",
        r = "archived",
        c = "ARCHIVE_",
        s = "UNARCHIVE_",
        l = "confluence.frontend.archive.pages.selection-limit"
    },
    Wk7V: function ( e, t, n ) {
      "use strict";
      var a = n( "ERkP" ),
        o = n.n( a );
      const {
        Fragment: i
      } = o.a;
      t.a = e => {
        let t = "",
          {
            children: n = 0,
            max: a = 0
          } = e;
        return n < 0 && ( n = 0 ), a < 0 && ( a = 0 ), t = a && a < n ? a + "+" : n === 1 / 0 ? "∞" : n, o.a.createElement( i, null, t )
      }
    },
    YsBd: function ( e, t, n ) {
      "use strict";
      n.d( t, "a", ( function () {
        return d
      } ) );
      var a = n( "ERkP" ),
        o = n.n( a ),
        i = n( "KsTJ" ),
        r = n( "3IV/" );
      const c = i.default.div `
  display: flex;
  flex-direction: row;
  align-items: center;
`,
        s = i.default.div `
  background-color: ${r.N20A};
  border-radius: 3px;
  margin-left: 7px;
  margin-right: 7px;
  width: 24px;
  height: 24px;
`,
        l = i.default.div `
  background-color: ${r.N20A};
  border-radius: 3px;
  margin-left: 7px;
  margin-right: 7px;
  width: 61px;
  height: 32px;
`,
        d = () => o.a.createElement( c, null, o.a.createElement( s, null ), o.a.createElement( s, null ), o.a.createElement( s, null ), o.a.createElement( l, null ), o.a.createElement( s, null ) )
    },
    cdeE: function ( e, t, n ) {
      "use strict";
      n.d( t, "b", ( function () {
        return r
      } ) ), n.d( t, "c", ( function () {
        return c
      } ) ), n.d( t, "a", ( function () {
        return s
      } ) );
      var a = n( "Czhu" ),
        o = n( "3IV/" ),
        i = n( "8pvK" );
      const r = {
          added: {
            light: o.G50,
            dark: o.G50
          },
          default: {
            light: o.N40,
            dark: o.DN70
          },
          important: {
            light: o.R400,
            dark: o.R400
          },
          primary: {
            light: o.B400,
            dark: o.B100
          },
          primaryInverted: {
            light: o.N0,
            dark: o.DN400
          },
          removed: {
            light: o.R50,
            dark: o.R50
          }
        },
        c = {
          added: {
            light: o.G500,
            dark: o.G500
          },
          default: {
            light: o.N800,
            dark: o.DN900
          },
          important: {
            light: o.N0,
            dark: o.N0
          },
          primary: {
            light: o.N0,
            dark: o.DN0
          },
          primaryInverted: {
            light: o.B500,
            dark: o.DN0
          },
          removed: {
            light: o.R500,
            dark: o.R500
          }
        },
        s = Object( i.a )( ( {
          appearance: e,
          mode: t
        } ) => "object" == typeof e ? Object( a.a )( {
          backgroundColor: r.default.light,
          textColor: c.default.light
        }, e ) : {
          backgroundColor: r[ e ][ t ],
          textColor: c[ e ][ t ]
        } )
    },
    dpio: function ( e, t ) {
      e.exports = function ( e, t, n, a ) {
        for ( var o = -1, i = null == e ? 0 : e.length; ++o < i; ) {
          var r = e[ o ];
          t( a, r, n( r ), e )
        }
        return a
      }
    },
    fuv9: function ( e, t, n ) {
      "use strict";
      n.d( t, "a", ( function () {
        return i
      } ) );
      var a = n( "ERkP" ),
        o = n( "S2j0" );
      const i = ( {
        wrm: e,
        children: t
      } ) => {
        const [ n, i ] = Object( a.useState )( {
          loaded: !1,
          modules: []
        } );
        return Object( a.useEffect )( () => {
          Object( o.a )( e, e => {
            i( {
              loaded: !0,
              modules: e
            } )
          }, () => {} )
        }, [ e ] ), n.loaded && t ? t( n.modules ) : null
      }
    },
    keNr: function ( e, t, n ) {
      "use strict";
      n.d( t, "a", ( function () {
        return a
      } ) );
      const a = "confluence.frontend.bm.disable-non-page-load-metrics"
    },
    tMo9: function ( e, t, n ) {
      "use strict";
      n.d( t, "a", ( function () {
        return g
      } ) );
      var a = n( "7wq/" ),
        o = n.n( a ),
        i = n( "KsTJ" ),
        r = n( "DfCg" ),
        c = n( "BMbf" );

      function s() {
        var e = o()( [ "\n  display: block;\n  > * {\n    position: relative;\n\n    &::before {\n      ", "\n      border-radius: ", "px;\n      box-shadow: ", ";\n      opacity: ", ";\n      transition: opacity 0.1s ease-in-out;\n      pointer-events: none;\n    }\n\n    &::after {\n      ", "\n      border-radius: ", "px;\n      box-shadow: ", ";\n      opacity: 0;\n      pointer-events: none;\n      ", "\n    }\n  }\n" ] );
        return s = function () {
          return e
        }, e
      }

      function l() {
        var e = o()( [ "\n  content: '';\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n" ] );
        return l = function () {
          return e
        }, e
      }

      function d() {
        var e = o()( [ "\n  animation: ", " 3000ms ", " infinite;\n" ] );
        return d = function () {
          return e
        }, e
      }

      function u() {
        var e = o()( [ "\n   0% {\n    opacity: 0;\n  }\n\n  50% {\n    opacity: 1;\n  }\n\n  100% {\n    opacity: 0;\n  }\n" ] );
        return u = function () {
          return e
        }, e
      }
      var m = r.a.P75,
        p = Object( i.keyframes )( u() ),
        b = Object( i.css )( d(), p, "cubic-bezier(0.55, 0.055, 0.675, 0.19)" ),
        h = Object( i.css )( l() ),
        g = i.default.span( s(), h, ( function ( e ) {
          var t = e.pulseBorderRadius;
          return void 0 === t ? c.c : t
        } ), ( function ( e ) {
          var t = e.pulseColor,
            n = void 0 === t ? m : t;
          return "".concat( "0 0 0 3px", " " ).concat( n )
        } ), ( function ( e ) {
          return e.hasPulse ? 1 : 0
        } ), h, ( function ( e ) {
          var t = e.pulseBorderRadius;
          return void 0 === t ? c.c : t
        } ), ( function ( e ) {
          var t = e.pulseColor,
            n = void 0 === t ? m : t,
            a = e.pulseShadowColor,
            o = void 0 === a ? "rgba(101, 84, 192, 1)" : a;
          return "".concat( "0 0 0 3px", " " ).concat( n, " , 0 0 11px " ).concat( o )
        } ), ( function ( e ) {
          return e.hasPulse && b
        } ) )
    },
    tk7i: function ( e, t, n ) {
      "use strict";
      const a = n( "KsTJ" ).default.span `
  ${e=>`\n    background-color: ${e.backgroundColor};\n    color: ${e.textColor};\n  `};
  border-radius: 2em;
  display: inline-block;
  font-size: 12px;
  font-weight: normal;
  line-height: 1;
  min-width: 1px;
  padding: 0.16666666666667em 0.5em;
  text-align: center;
`;
      t.a = a
    }
  }
] );
//# sourceMappingURL=119.86ZaftRTws.js.map
