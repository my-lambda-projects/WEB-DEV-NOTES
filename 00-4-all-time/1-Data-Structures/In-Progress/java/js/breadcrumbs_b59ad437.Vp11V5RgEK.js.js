( window.webpackJsonp = window.webpackJsonp || [] ).push( [
  [ "breadcrumbs~b59ad437" ], {
    "2Lg3": function ( e, t ) {
      e.exports = function ( e ) {
        return null == e
      }
    },
    "2TOW": function ( e, t, n ) {
      "use strict";
      var r = n( "ERkP" ),
        a = n.n( r ),
        c = n( "Cmaw" ),
        o = n( "ORIB" ),
        s = n( "lbXe" ),
        i = n( "KsTJ" ),
        u = n( "3IV/" ),
        l = n( "w301" );
      const d = Object( l.a )( {
          light: u.N300,
          dark: u.N300
        } ),
        p = i.default.div `
  color: ${d};
  display: flex;
  flex-wrap: wrap;
`;
      p.displayName = "BreadcrumbsContainer";
      var f = p,
        m = n( "W4fZ" ),
        h = n( "kuhW" ),
        b = n( "VgG6" ),
        E = n( "fOWp" );
      class v extends a.a.Component {
        render() {
          const {
            testId: e
          } = this.props;
          return a.a.createElement( h.a, null, a.a.createElement( b.a, {
            appearance: "subtle-link",
            spacing: "none",
            testId: e,
            onClick: this.props.onClick
          }, "…" ), this.props.hasSeparator ? a.a.createElement( E.a, null, "/" ) : null )
        }
      }
      v.defaultProps = {
        hasSeparator: !1,
        onClick: () => {}
      };
      const {
        toArray: O
      } = a.a.Children;
      class g extends a.a.Component {
        renderAllItems() {
          const e = O( this.props.children );
          return e.map( ( t, n ) => a.a.cloneElement( t, {
            hasSeparator: n < e.length - 1
          } ) )
        }
        renderItemsBeforeAndAfter() {
          const {
            itemsBeforeCollapse: e,
            itemsAfterCollapse: t,
            testId: n
          } = this.props;
          if ( void 0 === e || void 0 === t ) return;
          const r = this.renderAllItems();
          if ( e + t >= r.length ) return r;
          const c = r.slice( 0, e ),
            o = r.slice( r.length - t, r.length );
          return [ ...c, a.a.createElement( v, {
            hasSeparator: t > 0,
            key: "ellipsis",
            testId: n && n + "--breadcrumb-ellipsis",
            onClick: this.props.onExpand
          } ), ...o ]
        }
        render() {
          const {
            children: e,
            isExpanded: t,
            maxItems: n,
            testId: r
          } = this.props;
          return e ? a.a.createElement( f, {
            "data-testid": r
          }, t || n && O( e ).length <= n ? this.renderAllItems() : this.renderItemsBeforeAndAfter() ) : a.a.createElement( f, null )
        }
      }
      g.defaultProps = {
        isExpanded: !1,
        maxItems: 8,
        itemsBeforeCollapse: 1,
        itemsAfterCollapse: 1
      };
      const k = Object( c.a )( "atlaskit" );
      t.a = Object( o.a )( {
        componentName: "breadcrumbs",
        packageName: m.a,
        packageVersion: m.b
      } )( Object( s.a )( {
        onExpand: k( {
          action: "expanded",
          actionSubject: "breadcrumbs",
          attributes: {
            componentName: "breadcrumbs",
            packageName: m.a,
            packageVersion: m.b
          }
        } )
      } )( g ) )
    },
    HCrY: function ( e, t, n ) {
      "use strict";
      n.d( t, "a", ( function () {
        return o
      } ) );
      var r = n( "ERkP" ),
        a = n.n( r ),
        c = n( "2TOW" );
      class o extends a.a.Component {
        constructor() {
          super( ...arguments ), this.state = {
            isExpanded: !1
          }, this.expand = () => this.setState( {
            isExpanded: !0
          } )
        }
        render() {
          return a.a.createElement( c.a, Object.assign( {}, this.props, {
            isExpanded: this.state.isExpanded,
            onExpand: this.expand
          } ) )
        }
      }
    },
    HYLC: function ( e, t, n ) {
      "use strict";
      n.d( t, "a", ( function () {
        return o
      } ) );
      var r = n( "daKX" ),
        a = n( "0nUU" );
      const c = Object( r.a )( "browser-metrics" ),
        o = e => {
          if ( !e ) return c.error `metricKey is falsy.`, null;
          const t = a.d[ e ];
          return t || ( c.error `${e} has not been configured`, null )
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
    NEUp: function ( e, t, n ) {
      "use strict";
      n.r( t );
      var r = n( "Iy7w" ),
        a = n( "aWzz" ),
        c = n.n( a ),
        o = n( "ERkP" ),
        s = n.n( o ),
        i = n( "gQ5V" ),
        u = n( "L21V" ),
        l = n( "FdGg" ),
        d = n( "X2PC" ),
        p = n( "ewfN" ),
        f = n( "Ua4J" ),
        m = n( "ePrB" ),
        h = n( "+6Tk" ),
        b = n( "PoOp" ),
        E = n( "0nUU" ),
        v = n( "UEVo" ),
        O = n( "HCrY" ),
        g = n( "Czhu" ),
        k = n( "uZih" ),
        C = n.n( k ),
        x = n( "YIqz" ),
        y = n( "Aqh1" ),
        j = n( "Ru/k" );
      const w = Object( o.memo )( e => {
        const {
          href: t,
          onClick: n
        } = e, {
          isNav2: r
        } = Object( o.useContext )( y.a ), a = Object( x.a )( () => {}, {
          type: "sendUIEvent",
          data: {
            action: "clicked",
            actionSubject: "breadcrumb",
            source: "containerNavigation",
            attributes: {
              navVersion: r ? 2 : 3
            }
          }
        } ), c = C()( e, [ "onClick", "createAnalyticsEvent" ] );
        return s.a.createElement( j.a, Object( g.a )( Object( g.a )( {}, c ), {}, {
          onClick: e => {
            a(), n && ( e => !e.metaKey && !e.ctrlKey && 0 === e.button )( e ) && ( e.preventDefault(), n( t ) )
          }
        } ) )
      } );

      function I( {
        ancestors: e,
        contentTitle: t,
        onClick: n,
        spaceName: r,
        spaceOverviewPath: a
      } ) {
        return s.a.createElement( O.a, {
          maxItems: 3
        }, s.a.createElement( w, {
          text: r,
          href: a,
          onClick: n
        } ), e.map( ( {
          href: e,
          id: t,
          title: r
        } ) => s.a.createElement( w, {
          key: t,
          text: r,
          href: e,
          onClick: n
        } ) ), t ? s.a.createElement( w, {
          text: t,
          href: ""
        } ) : null )
      }
      var S = n( "fyDV" );
      n.d( t, "CONTENT_STATUS_ARCHIVED", ( function () {
        return A
      } ) ), n.d( t, "Breadcrumbs", ( function () {
        return P
      } ) );
      const A = "archived",
        T = Object( u.f )( {
          archivedPagesBreadcrumbsTitle: {
            id: "breadcrumbs.archived-pages-list-link",
            defaultMessage: "Archived pages",
            description: "The text for the link to the list of archived pages, appearing in the breadcrumbs trail on an archived page"
          }
        } ),
        N = Object( r.a )( "div", {
          target: "e1xi8jfi0"
        } )( {
          name: "15ro776",
          styles: "margin-right:4px;"
        } );
      const P = Object( u.g )( ( function ( {
        contentId: e,
        contentTitle: t,
        spaceKey: n,
        intl: r
      } ) {
        const {
          match: a,
          push: c,
          toUrl: u
        } = Object( o.useContext )( f.a ), O = Object( o.useCallback )( ( {
          contentId: e,
          contentSlug: t,
          contentType: r,
          query: a
        } ) => {
          let c;
          switch ( r ) {
            case "overview":
              c = p.SPACE_OVERVIEW.name;
              break;
            case "blogpost":
              c = p.VIEW_BLOG.name;
              break;
            case "page":
              c = p.VIEW_PAGE.name;
              break;
            default:
              throw new Error( `Expected content type 'blogpost', 'page' or 'overview' , but received '${r}'` )
          }
          return u( c, {
            contentId: e,
            contentSlug: t,
            query: a,
            spaceKey: n
          } )
        }, [ n, u ] ), g = Object( h.a )( p.SPACE_OVERVIEW.HOMEPAGE_ID_QUERY_FF );
        if ( !n ) return null;
        const k = Boolean( a && a.name === p.SPACE_ARCHIVED_PAGES.name ),
          C = Boolean( a && a.name === p.SPACE_PAGES.name ),
          x = k || C;
        return e || x ? s.a.createElement( l.a, {
          attribution: d.a.CONTENT_EXPERIENCE
        }, s.a.createElement( b.a, {
          metricName: E.a.BREADCRUMBS,
          usePageLoadStartTime: !0
        } ), s.a.createElement( i.b, {
          query: S.a,
          context: {
            single: !0
          },
          variables: {
            spaceKey: n,
            contentId: e,
            skipContent: x
          }
        }, ( {
          data: e,
          error: a
        } ) => {
          var o, i, u;
          if ( !e || a ) return null;
          const l = null != ( u = e ) && null != ( u = u.spaces ) && null != ( u = u.nodes ) ? u[ 0 ] : u,
            d = null != ( i = e ) && null != ( i = i.content ) && null != ( i = i.nodes ) ? i[ 0 ] : i;
          if ( !l || !d && !x ) return null;
          const f = null != ( o = l ) && null != ( o = o.homepage ) ? o.id : o,
            h = O( {
              contentType: "overview",
              query: f && g ? {
                [ p.SPACE_OVERVIEW.HOMEPAGE_ID_QUERY_KEY ]: f
              } : void 0
            } ),
            b = d ? function ( {
              ancestors: e,
              status: t
            }, n ) {
              return e ? ( e = t === A ? e.filter( e => e && e.status === A ) : e.filter( e => e ) ).length ? e[ 0 ].id !== n && e[ e.length - 1 ].id === n ? e.reverse().slice( 1 ) : e[ 0 ].id === n ? e.slice( 1 ) : e : e : []
            }( d, f ).map( ( {
              id: e,
              title: t,
              type: n
            } ) => ( {
              href: O( {
                contentId: e,
                contentSlug: Object( m.b )( t || void 0 ),
                contentType: n
              } ),
              id: e || "",
              title: t || ""
            } ) ) : [];
          if ( k || d && d.status === A ) {
            const e = {
              href: p.SPACE_ARCHIVED_PAGES.toUrl( {
                spaceKey: n
              } ),
              title: r.formatMessage( T.archivedPagesBreadcrumbsTitle ),
              id: "archived_pages_list"
            };
            b.unshift( e )
          }
          return s.a.createElement( N, null, s.a.createElement( I, {
            ancestors: b,
            contentTitle: t,
            onClick: c,
            spaceName: l.name || n,
            spaceOverviewPath: h
          } ), s.a.createElement( v.a, {
            metricName: E.a.BREADCRUMBS
          } ) )
        } ) ) : null
      } ) );
      P.propTypes = {
        contentId: c.a.string,
        contentTitle: c.a.string,
        spaceKey: c.a.string.isRequired
      }
    },
    O1Sc: function ( e, t, n ) {
      var r = n( "w2Tz" ),
        a = n( "y4bl" ),
        c = n( "xoyU" );
      e.exports = function ( e, t, n ) {
        for ( var o = -1, s = t.length, i = {}; ++o < s; ) {
          var u = t[ o ],
            l = r( e, u );
          n( l, u ) && a( i, c( u, e ), l )
        }
        return i
      }
    },
    PoOp: function ( e, t, n ) {
      "use strict";
      n.d( t, "a", ( function () {
        return i
      } ) );
      var r = n( "ERkP" ),
        a = n( "+6Tk" ),
        c = n( "HYLC" ),
        o = n( "keNr" ),
        s = n( "hb7u" );
      const i = Object( r.memo )( ( {
        metricName: e,
        usePageLoadStartTime: t = !1,
        startTime: n
      } ) => {
        const i = Object( c.a )( e ),
          u = Object( a.a )( o.a );
        return Object( r.useEffect )( () => {
          !u && i && i.start( {
            startTime: t ? s.a.pageLoadStartTimestamp : n
          } )
        }, [ i, u, n, t ] ), null
      } )
    },
    "Ru/k": function ( e, t, n ) {
      "use strict";
      var r = n( "ERkP" ),
        a = n.n( r ),
        c = n( "7nmT" ),
        o = n.n( c ),
        s = n( "Cmaw" ),
        i = n( "lbXe" ),
        u = n( "a8dO" ),
        l = n( "kuhW" ),
        d = n( "VgG6" ),
        p = n( "fOWp" ),
        f = n( "W4fZ" );
      class m extends a.a.Component {
        constructor() {
          super( ...arguments ), this.button = null, this.state = {
            hasOverflow: !1
          }, this.renderButton = () => {
            const {
              href: e,
              iconAfter: t,
              iconBefore: n,
              onClick: r,
              target: c,
              text: o,
              truncationWidth: s,
              component: i,
              testId: u
            } = this.props, {
              hasOverflow: l
            } = this.state;
            return a.a.createElement( d.a, {
              truncationWidth: s,
              appearance: "subtle-link",
              iconAfter: s && l ? void 0 : t,
              iconBefore: s && l ? void 0 : n,
              onClick: r,
              spacing: "none",
              href: e,
              target: c,
              ref: e => {
                this.button = e
              },
              component: i,
              analyticsContext: {
                componentName: "breadcrumbsItem",
                packageName: f.a,
                packageVersion: f.b
              },
              testId: u
            }, o )
          }, this.renderButtonWithTooltip = () => a.a.createElement( u.a, {
            content: this.props.text,
            position: "bottom"
          }, this.renderButton() )
        }
        componentDidMount() {
          this.updateOverflow()
        }
        UNSAFE_componentWillReceiveProps() {
          this.setState( {
            hasOverflow: !1
          } )
        }
        componentDidUpdate() {
          this.updateOverflow()
        }
        updateOverflow() {
          const {
            truncationWidth: e
          } = this.props, {
            button: t
          } = this;
          if ( e && t ) {
            const n = o.a.findDOMNode( t );
            if ( !( n && n instanceof HTMLElement ) ) return console.warn( "Could not find button included in breadcrumb when calculating overflow" ), !1;
            const r = n.clientWidth >= e;
            return r !== this.state.hasOverflow && this.setState( {
              hasOverflow: r
            } ), r
          }
          return !1
        }
        render() {
          const {
            hasSeparator: e,
            truncationWidth: t
          } = this.props, {
            hasOverflow: n
          } = this.state;
          return a.a.createElement( l.a, null, n && t ? this.renderButtonWithTooltip() : this.renderButton(), e ? a.a.createElement( p.a, null, "/" ) : null )
        }
      }
      m.defaultProps = {
        hasSeparator: !1,
        href: "#",
        truncationWidth: 0,
        onClick: () => {}
      };
      const h = Object( s.a )( "atlaskit" );
      t.a = Object( i.a )( {
        onClick: h( {
          action: "clicked",
          actionSubject: "breadcrumbsItem",
          attributes: {
            componentName: "breadcrumbsItem",
            packageName: f.a,
            packageVersion: f.b
          }
        } )
      } )( m )
    },
    UEVo: function ( e, t, n ) {
      "use strict";
      n.d( t, "a", ( function () {
        return s
      } ) );
      var r = n( "ERkP" ),
        a = n( "+6Tk" ),
        c = n( "HYLC" ),
        o = n( "keNr" );
      const s = Object( r.memo )( ( {
        metricName: e,
        stopTime: t,
        customData: n
      } ) => {
        const s = Object( c.a )( e ),
          i = Object( a.a )( o.a );
        return Object( r.useEffect )( () => {
          !i && s && s.stop( {
            customData: n,
            stopTime: t
          } )
        }, [ s, i ] ), null
      } )
    },
    VgG6: function ( e, t, n ) {
      "use strict";
      var r = n( "Czhu" ),
        a = n( "HbGN" ),
        c = n( "ERkP" ),
        o = n.n( c ),
        s = n( "zJ/j" );
      t.a = o.a.forwardRef( ( e, t ) => {
        let {
          truncationWidth: n
        } = e, c = Object( a.a )( e, [ "truncationWidth" ] );
        return o.a.createElement( s.a, Object.assign( {}, c, {
          ref: t,
          theme: ( e, t ) => {
            const c = e( t ),
              {
                buttonStyles: o
              } = c,
              s = Object( a.a )( c, [ "buttonStyles" ] );
            return Object( r.a )( {
              buttonStyles: Object( r.a )( Object( r.a )( {}, o ), {}, {
                fontWeight: 400
              }, n ? {
                maxWidth: n + "px !important"
              } : {
                flexShrink: 1,
                minWidth: 0
              } )
            }, s )
          }
        } ) )
      } )
    },
    W4fZ: function ( e ) {
      e.exports = JSON.parse( '{"a":"@atlaskit/breadcrumbs","b":"10.0.9"}' )
    },
    YIqz: function ( e, t, n ) {
      "use strict";
      n.d( t, "a", ( function () {
        return o
      } ) );
      var r = n( "ERkP" ),
        a = n( "z9P0" ),
        c = n( "NnKS" );
      const o = ( e, t, n ) => {
        const {
          createAnalyticsEvent: o
        } = Object( a.a )(), s = Object( c.a )( e ), i = Object( c.a )( t );
        return Object( r.useCallback )( ( ...e ) => {
          const t = "function" == typeof i.current ? i.current( ...e ) : i.current;
          o( t ).fire( n ), s.current( ...e )
        }, [ o, s, i, n ] )
      }
    },
    ePrB: function ( e, t, n ) {
      "use strict";
      n.d( t, "b", ( function () {
        return l
      } ) ), n.d( t, "a", ( function () {
        return d
      } ) ), n.d( t, "c", ( function () {
        return p
      } ) );
      var r = n( "Czhu" ),
        a = n( "EfWO" ),
        c = n.n( a ),
        o = n( "jq/l" ),
        s = n.n( o ),
        i = n( "2Lg3" ),
        u = n.n( i );
      const l = e => {
          if ( !e ) return;
          const t = e.trim().replace( /[^A-Za-z0-9\-.]+/g, "+" ).replace( /^\++|\++$/g, "" );
          return t || void 0
        },
        d = ( e, t ) => {
          const n = c.a.parse( e, !0 );
          return delete n.search, n.query = Object( r.a )( Object( r.a )( {}, n.query ), t ), n.query = s()( n.query, u.a ), c.a.format( n )
        },
        p = ( e, t ) => {
          const n = c.a.parse( t, !0 );
          return delete n.search, e.forEach( e => delete n.query[ e ] ), c.a.format( n )
        }
    },
    f9bD: function ( e, t, n ) {
      var r = n( "H87J" ),
        a = n( "S3pA" ),
        c = n( "O1Sc" ),
        o = n( "zF5n" );
      e.exports = function ( e, t ) {
        if ( null == e ) return {};
        var n = r( o( e ), ( function ( e ) {
          return [ e ]
        } ) );
        return t = a( t ), c( e, n, ( function ( e, n ) {
          return t( e, n[ 0 ] )
        } ) )
      }
    },
    fOWp: function ( e, t, n ) {
      "use strict";
      var r = n( "KsTJ" ),
        a = n( "3IV/" ),
        c = n( "BMbf" );
      const o = a.N100,
        s = r.default.div `
  color: ${o};
  flex-shrink: 0;
  padding: 0 ${c.h}px;
  text-align: center;
  width: ${c.h}px;
`;
      s.displayName = "Separator", t.a = s
    },
    "jq/l": function ( e, t, n ) {
      var r = n( "S3pA" ),
        a = n( "J4/4" ),
        c = n( "f9bD" );
      e.exports = function ( e, t ) {
        return c( e, a( r( t ) ) )
      }
    },
    keNr: function ( e, t, n ) {
      "use strict";
      n.d( t, "a", ( function () {
        return r
      } ) );
      const r = "confluence.frontend.bm.disable-non-page-load-metrics"
    },
    kuhW: function ( e, t, n ) {
      "use strict";
      var r = n( "KsTJ" ),
        a = n( "BMbf" );
      const c = 3 * Object( a.h )() / Object( a.f )(),
        o = r.default.div `
  display: flex;
  flex-direction: row;
  height: ${c}em;
  line-height: ${c}em;
  padding: 0;
  box-sizing: border-box;
  max-width: 100%;
`;
      o.displayName = "BreadcrumbsItemElement", t.a = o
    },
    y4bl: function ( e, t, n ) {
      var r = n( "c72w" ),
        a = n( "xoyU" ),
        c = n( "pnw1" ),
        o = n( "tQYX" ),
        s = n( "Ypsa" );
      e.exports = function ( e, t, n, i ) {
        if ( !o( e ) ) return e;
        for ( var u = -1, l = ( t = a( t, e ) ).length, d = l - 1, p = e; null != p && ++u < l; ) {
          var f = s( t[ u ] ),
            m = n;
          if ( "__proto__" === f || "constructor" === f || "prototype" === f ) return e;
          if ( u != d ) {
            var h = p[ f ];
            void 0 === ( m = i ? i( h, f, p ) : void 0 ) && ( m = o( h ) ? h : c( t[ u + 1 ] ) ? [] : {} )
          }
          r( p, f, m ), p = p[ f ]
        }
        return e
      }
    }
  }
] );
//# sourceMappingURL=breadcrumbs~b59ad437.Vp11V5RgEK.js.map
