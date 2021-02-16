( window.webpackJsonp = window.webpackJsonp || [] ).push( [
  [ "app~493df0b3" ], {
    "+3AB": function ( e, t, n ) {
      "use strict";
      n.d( t, "a", ( function () {
        return r
      } ) );
      var a = n( "RfuI" );
      const r = Object( a.a )( {
        id: "3IT+6",
        name: "CreateBlankFabricPageListener",
        loader: async () => ( await Promise.all( [ n.e( "atlaskit~66e23772" ), n.e( 155 ) ] ).then( n.bind( null, "Xmxh" ) ) ).CreateBlankFabricPageListener
      } )
    },
    "+6Tk": function ( e, t, n ) {
      "use strict";
      n.d( t, "b", ( function () {
        return r
      } ) ), n.d( t, "a", ( function () {
        return o
      } ) ), n.d( t, "c", ( function () {
        return s
      } ) );
      var a = n( "a0gl" );
      const r = e => {
          const t = Object( a.a )();
          return t && t.featureFlags[ e ]
        },
        o = e => {
          const t = Object( a.a )();
          return Boolean( null == t ? void 0 : t.featureFlags[ e ] )
        },
        s = e => {
          const t = Object( a.a )(),
            n = null == t ? void 0 : t.featureFlags[ e ];
          return null != n ? String( n ) : void 0
        }
    },
    "+FBq": function ( e, t, n ) {
      "use strict";
      n.d( t, "a", ( function () {
        return r
      } ) ), n.d( t, "j", ( function () {
        return o
      } ) ), n.d( t, "f", ( function () {
        return s
      } ) ), n.d( t, "e", ( function () {
        return c
      } ) ), n.d( t, "i", ( function () {
        return i
      } ) ), n.d( t, "g", ( function () {
        return u
      } ) ), n.d( t, "h", ( function () {
        return l
      } ) ), n.d( t, "k", ( function () {
        return d
      } ) ), n.d( t, "c", ( function () {
        return E
      } ) ), n.d( t, "b", ( function () {
        return p
      } ) ), n.d( t, "d", ( function () {
        return f
      } ) );
      var a = n( "ewfN" );
      const r = "confluence.frontend.app-navigation",
        o = "off",
        s = "control",
        c = "banner",
        i = "home-opt-out",
        u = "default-opted-out",
        l = "home",
        d = "unknown",
        E = 56,
        p = ( a.ALL_UPDATES, a.POPULAR, a.MY_WORK_DRAFTS, a.MY_WORK_RECENT, a.MY_RECENTLY_VISITED, a.MY_SAVED_FOR_LATER, "confluence.frontend.app-navigation.new-layout" ),
        f = "confluence.frontend.app-navigation.use-user-preferences"
    },
    "+OYW": function ( e, t, n ) {
      "use strict";
      n.d( t, "c", ( function () {
        return i
      } ) ), n.d( t, "a", ( function () {
        return u
      } ) ), n.d( t, "b", ( function () {
        return l
      } ) ), n.d( t, "d", ( function () {
        return d
      } ) ), n.d( t, "e", ( function () {
        return E
      } ) );
      var a = n( "Czhu" ),
        r = n( "EfWO" ),
        o = n.n( r ),
        s = n( "fYnN" ),
        c = n.n( s );
      const i = "confluence.frontend.branch.deployment",
        u = "useFrontendBranch",
        l = "useFrontendBuildVersion",
        d = () => {
          const e = o.a.parse( window.location.href, !0 );
          window.location.assign( o.a.format( {
            path: e.path,
            query: Object( a.a )( Object( a.a )( {}, e.query ), {}, {
              [ u ]: "off",
              [ l ]: "off"
            } ),
            hash: e.hash
          } ) )
        },
        E = e => {
          const t = window.__SSR_RENDER_PARAMS__ ? window.__SSR_RENDER_PARAMS__.useFrontendBranch : c.a.get( u ),
            n = e[ i ];
          return !!( t && "off" !== t || n && "off" !== n )
        }
    },
    "+frj": function ( e, t ) {
      e.exports = _
    },
    "+l6p": function ( e, t, n ) {
      "use strict";
      n.d( t, "a", ( function () {
        return r
      } ) );
      var a = n( "RfuI" );
      const r = Object( a.a )( {
        id: "4rGK/",
        name: "NavigationLoader",
        loader: () => Promise.all( [ n.e( "atlaskit~66e23772" ), n.e( "afp~af75c846" ), n.e( "vendors~4134d62c" ), n.e( 0 ), n.e( 4 ), n.e( 5 ), n.e( 6 ), n.e( 13 ), n.e( 24 ), n.e( 55 ), n.e( 56 ), n.e( 78 ), n.e( 95 ), n.e( 107 ), n.e( 108 ), n.e( 134 ), n.e( "navigation-v2~b59ad437" ) ] ).then( n.bind( null, "HXWU" ) ).then( ( {
          NavigationLoader: e
        } ) => e )
      } )
    },
    "+lf2": function ( e, t, n ) {
      "use strict";
      n.d( t, "a", ( function () {
        return s
      } ) );
      var a = n( "ERkP" ),
        r = n.n( a ),
        o = n( "7OEs" );

      function s( {
        html: e
      } ) {
        const t = Object( a.useRef )( null );
        return Object( a.useLayoutEffect )( () => {
          Object( o.a )( t.current )
        }, [ e ] ), r.a.createElement( "div", {
          ref: t,
          dangerouslySetInnerHTML: {
            __html: e
          }
        } )
      }
    },
    "+mzV": function ( e, t, n ) {
      "use strict";
      n.d( t, "a", ( function () {
        return c
      } ) );
      var a = n( "ERkP" ),
        r = n.n( a ),
        o = n( "aWzz" ),
        s = n.n( o );
      const c = r.a.createContext( {
        contentId: null,
        contentIdLoading: !1,
        contentSlug: null,
        embeddedContentRender: null,
        queryHash: null,
        routeName: null,
        spaceKey: null,
        versionOverride: null,
        searchSessionId: void 0
      } );
      c.displayName = "PageContext";
      const i = s.a.shape( {
        contentId: s.a.oneOfType( [ s.a.string, s.a.symbol ] ),
        contentIdLoading: s.a.bool,
        contentSlug: s.a.string,
        embeddedContentRender: s.a.string,
        queryHash: s.a.string,
        routeName: s.a.string,
        spaceKey: s.a.string,
        versionOverride: s.a.number,
        searchSessionId: s.a.string
      } );
      c.Provider.propTypes = {
        value: i
      }, c.Provider.defaultProps = {
        value: {
          contentId: null,
          contentIdLoading: !1,
          contentSlug: null,
          embeddedContentRender: null,
          queryHash: null,
          routeName: null,
          spaceKey: null,
          versionOverride: null,
          searchSessionId: void 0
        }
      }
    },
    "+tQq": function ( e, t, n ) {
      "use strict";
      n.d( t, "a", ( function () {
        return a
      } ) ), n.d( t, "b", ( function () {
        return r
      } ) ), n.d( t, "c", ( function () {
        return o
      } ) ), n.d( t, "d", ( function () {
        return s
      } ) );
      const a = {
          transitionId: 0,
          startedTask: null,
          previousTask: null,
          stoppedTasks: []
        },
        r = () => !!( a.startedTask && a.startedTask.tasks && a.stoppedTasks.length < a.startedTask.tasks.length ),
        o = () => 0 === a.transitionId,
        s = e => {
          Object.assign( a, e )
        }
    },
    "+y+C": function ( e, t, n ) {
      "use strict";
      var a = n( "Czhu" ),
        r = n( "d9aE" ),
        o = n( "yuV4" );
      async function s( e = {} ) {
        if ( "undefined" != typeof jest || window.USE_MOCKED_SESSION_DATA ) return new Promise( e => {
          window.MOCK_SESSION_DATA_RESOLVE = e
        } );
        if ( window.__SESSION_DATA__ ) return window.__SESSION_DATA__;
        const t = window.GLOBAL_APOLLO_CLIENT_URI || "/cgraphql";
        return window.__SESSION_DATA__ = o.a.run( "fetch:SessionDataQuery", () => fetch( t + "?q=SessionDataQuery", Object( r.a )( {
          method: "POST",
          credentials: "include",
          referrerPolicy: "same-origin",
          headers: Object( a.a )( {
            "X-APOLLO-OPERATION-NAME": "SessionDataQuery",
            "Content-Type": "application/json"
          }, e.headers ),
          body: JSON.stringify( {
            query: "\nquery SessionDataQuery @SLA {\n  tenant {\n    shard\n    cloudId\n    environment\n  }\n  userForAnalytics: user {\n    id\n  }\n  user(current: true) {\n    id\n    displayName\n    confluence {\n      accountId\n      locale\n      userKey\n    }\n  }\n  featureFlags(extraTargeting: true) {\n    nodes {\n      id\n      value\n      explanation {\n        ruleIndex\n        ruleId\n        kind\n      }\n    }\n  }\n}\n"
          } )
        } ) ).then( async e => {
          if ( !e.ok ) throw new Error( "Cannot load session data: " + e.statusText );
          return window.__SESSION_DATA__ = ( await e.json() ).data
        } ) )
      }
      n.d( t, "a", ( function () {
        return s
      } ) )
    },
    "/CY5": function ( e, t, n ) {
      "use strict";
      t.a = {
        isDashboard: e => "/spa.action" === e,
        getSpaceKey: e => {
          if ( "string" != typeof e ) return null;
          const t = e.match( /\/*spaces\/(.*?)\/overview/ );
          return t ? decodeURIComponent( t[ 1 ] ) : null
        },
        SITE_HOME_QUERY_KEY: "mode",
        SITE_HOME_QUERY_VALUE: "global"
      }
    },
    "/D+w": function ( e, t, n ) {
      "use strict";
      n.d( t, "b", ( function () {
        return u
      } ) ), n.d( t, "a", ( function () {
        return E
      } ) );
      var a = n( "Iy7w" ),
        r = n( "ERkP" ),
        o = n.n( r ),
        s = n( "NT0K" ),
        c = n( "Aqh1" );
      const i = Object( a.a )( "div", {
          target: "ey842mh0"
        } )( "position:relative;overflow:visible;z-index:", ( {
          isNewLayout: e
        } ) => e ? 14 : 201, ";" ),
        u = "highlight-actions-portal-container";
      let l;

      function d( e ) {
        e !== l && ( l = e, window.dispatchEvent( new CustomEvent( "highlight-actions.container.resized" ) ) )
      }
      const E = Object( c.c )( () => {
        const {
          isNewLayout: e
        } = Object( r.useContext )( c.a );
        return o.a.createElement( i, {
          id: u,
          isNewLayout: e
        }, o.a.createElement( s.a, {
          onResize: d
        }, () => null ) )
      } )
    },
    0: function ( e, t ) {},
    "0+uK": function ( e, t, n ) {
      "use strict";
      n.d( t, "a", ( function () {
        return r
      } ) );
      var a = n( "H5qd" );
      const r = n.n( a ).a `query WebItemLocationQuery($location:String$locations:[String]$contentId:ID$spaceKey:String$version:Int){webItemSections(location:$location locations:$locations contentId:$contentId key:$spaceKey version:$version){id label styleClass items{accessKey completeKey hasCondition id icon{path}params{key value}label moduleKey section styleClass tooltip url urlWithoutContextPath weight}}}`
    },
    "0Dc1": function ( e, t, n ) {
      "use strict";
      n.d( t, "a", ( function () {
        return s
      } ) );
      var a = n( "zjfJ" ),
        r = ( n( "aWzz" ), n( "ERkP" ) ),
        o = n( "liLY" );
      class s extends r.Component {
        componentDidMount() {
          Object( o.d )( this.props )
        }
        render() {
          return null
        }
      }
      Object( a.a )( s, "defaultProps", {
        subjectId: "",
        includeFeatureFlags: !1
      } )
    },
    "0K0H": function ( e, t, n ) {
      "use strict";
      n.d( t, "a", ( function () {
        return s
      } ) ), n.d( t, "b", ( function () {
        return i
      } ) );
      var a = n( "ERkP" ),
        r = n( "ewfN" ),
        o = n( "Ua4J" );

      function s() {
        return d( "click", l, !1 ), d( "mousedown", u, !0 ), null
      }

      function c( e ) {
        return e instanceof HTMLElement && e.isContentEditable
      }

      function i( e, t ) {
        const {
          target: n
        } = e;
        if ( !n || !( n instanceof Element ) || "hash" in n && n.hash ) return;
        if ( !( "button" in e ) || 0 !== e.button ) return;
        if ( e.ctrlKey || e.shiftKey || e.altKey || e.metaKey ) return;
        const a = n.closest( "a" );
        if ( !a ) return;
        const o = a.closest( "[contenteditable]" ),
          s = n.closest( "[contenteditable]" );
        if ( c( o ) || c( s ) ) return;
        if ( a.target && "_self" !== a.target ) return;
        const {
          href: i
        } = a;
        if ( !i ) return;
        if ( !t || "function" != typeof t.matchRoute ) return;
        const u = t.matchRoute( i );
        return !u || u.name !== r.COPY_PAGE_LEGACY.name && u.name !== r.CREATE_PAGE_ACTION_LEGACY.name ? i : void 0
      }

      function u( e, {
        preloadRoute: t
      }, n ) {
        t( n )
      }

      function l( e, {
        push: t
      }, n ) {
        e.preventDefault(), t( n, Boolean( r.EXTERNAL_SHARE.match( window.location.pathname ) ) )
      }

      function d( e, t, n ) {
        const r = Object( a.useContext )( o.a ),
          s = Object( a.useMemo )( () => function ( e, t ) {
            return n => {
              if ( n.defaultPrevented ) return;
              const a = i( n, t );
              a && e( n, t, a )
            }
          }( t, r ), [ t, r ] );
        Object( a.useEffect )( () => ( s && window.addEventListener( e, s, n ), () => {
          s && window.removeEventListener( e, s, n )
        } ), [ s, e, n ] )
      }
    },
    "0nUU": function ( e, t, n ) {
      "use strict";
      n.d( t, "a", ( function () {
        return c
      } ) ), n.d( t, "d", ( function () {
        return p
      } ) ), n.d( t, "c", ( function () {
        return f
      } ) ), n.d( t, "b", ( function () {
        return m
      } ) );
      var a = n( "Czhu" ),
        r = n( "8Z9e" ),
        o = n( "y9AH" ),
        s = n( "hb7u" );
      let c;
      ! function ( e ) {
        e.EDIT_BUTTON = "EDIT_BUTTON", e.BYLINE = "BYLINE", e.BREADCRUMBS = "BREADCRUMBS", e.CONTENT_TITLE = "CONTENT_TITLE", e.INLINE_COMMENTS = "INLINE_COMMENTS", e.MORE_ACTIONS_DROPDOWN = "MORE_ACTIONS_DROPDOWN", e.SSR_NAV_SEARCH = "SSR_NAV_SEARCH"
      }( c || ( c = {} ) );
      const i = r.a.pageLoad( {
          key: "view-page",
          timings: [ {
            key: "html",
            endMark: "html"
          }, {
            key: "appLoad",
            startMark: "html",
            endMark: "app"
          }, {
            key: "appRootRender",
            startMark: "app",
            endMark: "root-component-render"
          }, {
            key: "routerMatched",
            startMark: "root-component-render",
            endMark: "route-manager-initialized"
          }, {
            key: "rendererRendered",
            endMark: "rendererRendered"
          } ],
          ssr: Boolean( window.__SSR_RENDERED__ ) ? {
            doneAsFmp: !0
          } : void 0
        } ),
        u = r.a.pageLoad( {
          key: "edit-page"
        } ),
        l = {
          [ o.a.CREATE_BLOG.name ]: u,
          [ o.a.CREATE_BLOG_ACTION_LEGACY.name ]: u,
          [ o.a.CREATE_PAGE.name ]: u,
          [ o.a.CREATE_PAGE_ACTION_LEGACY.name ]: u,
          [ o.a.EDIT_BLOG.name ]: u,
          [ o.a.EDIT_BLOG_V2.name ]: u,
          [ o.a.EDIT_PAGE.name ]: u,
          [ o.a.EDIT_PAGE_V2.name ]: u,
          [ o.a.EDIT_PAGE_EMBED.name ]: u,
          [ o.a.VIEW_PAGE.name ]: i,
          [ o.a.VIEW_BLOG.name ]: i,
          [ o.a.VIEW_BLOG_DATE_LEGACY.name ]: i,
          [ o.a.SPACE_OVERVIEW.name ]: r.a.pageLoad( {
            key: "space-overview"
          } ),
          [ o.a.TEMPLATE_GALLERY.name ]: r.a.pageLoad( {
            key: "template-gallery"
          } ),
          [ o.a.CONTENT_HISTORY.name ]: r.a.pageLoad( {
            key: "content-history"
          } ),
          [ o.a.ADVANCED_SEARCH.name ]: r.a.pageLoad( {
            key: "advanced-search"
          } ),
          [ o.a.HOME.name ]: r.a.pageLoad( {
            key: "confluence-home"
          } ),
          [ o.a.SPACE_DIRECTORY.name ]: r.a.pageLoad( {
            key: "space-directory"
          } ),
          [ o.a.SPACE_PAGES.name ]: r.a.pageLoad( {
            key: "space-pages"
          } )
        },
        d = {
          [ c.EDIT_BUTTON ]: r.a.custom( {
            key: "edit-button"
          } ),
          [ c.BYLINE ]: r.a.custom( {
            key: "byline"
          } ),
          [ c.BREADCRUMBS ]: r.a.custom( {
            key: "breadcrumbs"
          } ),
          [ c.CONTENT_TITLE ]: r.a.custom( {
            key: "content-title"
          } ),
          [ c.INLINE_COMMENTS ]: r.a.custom( {
            key: "inline-comments"
          } )
        },
        E = {
          [ c.MORE_ACTIONS_DROPDOWN ]: r.a.interaction( {
            key: "more-actions-dropdown"
          } ),
          [ c.SSR_NAV_SEARCH ]: r.a.interaction( {
            key: "ssr-nav-search"
          } )
        },
        p = Object( a.a )( Object( a.a )( Object( a.a )( {}, l ), d ), E ),
        f = e => !!e && e.name in l,
        m = e => !!e && e.name === s.a.routeName
    },
    "0wgO": function ( e, t, n ) {
      "use strict";
      n.d( t, "a", ( function () {
        return r
      } ) ), n.d( t, "b", ( function () {
        return o
      } ) );
      var a = n( "U+B7" );
      const r = e => {
          const t = new Set( e );
          return ( e, n ) => {
            n.stopOn( e.find( e => t.has( e.name ) && ( "taskFail" === e.action || "taskAbort" === e.action ) ) ), e.forEach( e => {
              Object( a.b )( e ) && t.delete( e.name )
            } ), 0 === t.size && n.succeed()
          }
        },
        o = e => ( t, n ) => n.stopOn( t.find( t => Object( a.b )( t ) && Object( a.a )( t, ...e ) ) )
    },
    1: function ( e, t ) {},
    "1LWu": function ( e, t, n ) {
      "use strict";
      n.d( t, "a", ( function () {
        return a
      } ) );
      const a = 4
    },
    "1N1n": function ( e, t, n ) {
      "use strict";
      n.d( t, "a", ( function () {
        return s
      } ) ), n.d( t, "e", ( function () {
        return c
      } ) ), n.d( t, "d", ( function () {
        return i
      } ) ), n.d( t, "b", ( function () {
        return l
      } ) ), n.d( t, "c", ( function () {
        return d
      } ) );
      var a = n( "Czhu" ),
        r = n( "ERkP" ),
        o = n.n( r );
      const s = "confluence.frontend.quick.reload.spa";
      let c, i;
      ! function ( e ) {
        e.content = "content", e.comment = "comment"
      }( c || ( c = {} ) ),
      function ( e ) {
        e[ e.immediate = 0 ] = "immediate", e[ e.normal = 1 ] = "normal", e[ e.background = 2 ] = "background"
      }( i || ( i = {} ) );
      const u = async ( e, t ) => {
        const n = Object.keys( e ).reduce( ( t, n ) => {
          const a = e[ n ],
            r = Number( a.priority || i.immediate );
          return t[ r ] ? t[ r ].push( a ) : t[ r ] = [ a ], t
        }, [] );
        for ( const a of n )
          if ( a ) {
            const e = a.map( e => e.reload( t ) );
            await Promise.all( e )
          }
      }, l = o.a.createContext( {
        registerReloader: () => {},
        reloaders: {
          [ c.content ]: async () => {},
          [ c.comment ]: async () => {}
        }
      } ), d = Object( r.memo )( ( {
        contentId: e,
        children: t
      } ) => {
        const [ n, s ] = Object( r.useState )( {} ), [ i, d ] = Object( r.useState )( {} );
        Object( r.useLayoutEffect )( () => () => {
          s( {} ), d( {} )
        }, [ e ] );
        const E = Object( r.useCallback )( e => {
            e.types.forEach( t => {
              ( t === c.comment ? d : s )( t => Object( a.a )( Object( a.a )( {}, t ), {}, {
                [ e.name ]: e
              } ) )
            } )
          }, [ s, d ] ),
          p = Object( r.useMemo )( () => ( {
            contentId: e,
            registerReloader: E,
            reloaders: {
              [ c.content ]: e => u( n, e ),
              [ c.comment ]: e => u( i, e )
            }
          } ), [ e, E, n, i ] );
        return o.a.createElement( l.Provider, {
          value: p
        }, t )
      } )
    },
    2: function ( e, t ) {},
    "2M9l": function ( e, t, n ) {
      "use strict";
      n.d( t, "H", ( function () {
        return a
      } ) ), n.d( t, "D", ( function () {
        return r
      } ) ), n.d( t, "b", ( function () {
        return o
      } ) ), n.d( t, "c", ( function () {
        return s
      } ) ), n.d( t, "I", ( function () {
        return c
      } ) ), n.d( t, "q", ( function () {
        return i
      } ) ), n.d( t, "u", ( function () {
        return u
      } ) ), n.d( t, "t", ( function () {
        return l
      } ) ), n.d( t, "E", ( function () {
        return d
      } ) ), n.d( t, "e", ( function () {
        return E
      } ) ), n.d( t, "h", ( function () {
        return p
      } ) ), n.d( t, "f", ( function () {
        return f
      } ) ), n.d( t, "g", ( function () {
        return m
      } ) ), n.d( t, "a", ( function () {
        return b
      } ) ), n.d( t, "J", ( function () {
        return O
      } ) ), n.d( t, "k", ( function () {
        return h
      } ) ), n.d( t, "G", ( function () {
        return g
      } ) ), n.d( t, "i", ( function () {
        return _
      } ) ), n.d( t, "r", ( function () {
        return T
      } ) ), n.d( t, "s", ( function () {
        return I
      } ) ), n.d( t, "p", ( function () {
        return S
      } ) ), n.d( t, "d", ( function () {
        return C
      } ) ), n.d( t, "C", ( function () {
        return A
      } ) ), n.d( t, "w", ( function () {
        return y
      } ) ), n.d( t, "y", ( function () {
        return R
      } ) ), n.d( t, "x", ( function () {
        return v
      } ) ), n.d( t, "n", ( function () {
        return P
      } ) ), n.d( t, "j", ( function () {
        return N
      } ) ), n.d( t, "l", ( function () {
        return j
      } ) ), n.d( t, "m", ( function () {
        return D
      } ) ), n.d( t, "v", ( function () {
        return L
      } ) ), n.d( t, "z", ( function () {
        return w
      } ) ), n.d( t, "o", ( function () {
        return k
      } ) ), n.d( t, "F", ( function () {
        return U
      } ) ), n.d( t, "B", ( function () {
        return M
      } ) ), n.d( t, "A", ( function () {
        return F
      } ) ), n.d( t, "K", ( function () {
        return G
      } ) );
      const a = "SHOW_EDITOR",
        r = "HIDE_EDITOR",
        o = "CHANGE_EDITOR_TITLE",
        s = "CLOSE_EDITOR_ERROR",
        c = "SHOW_EDITOR_ERROR",
        i = "EDITOR_LOAD_COMPLETE",
        u = "EDITOR_PRELOAD_START",
        l = "EDITOR_PRELOAD_FINISH",
        d = "RESET_EDITOR_STATE",
        E = "EDITOR_CONTENT",
        p = "EDITOR_CONTENT_PUBLISH",
        f = "EDITOR_CONTENT_FROM_TEMPLATE_PUBLISH",
        m = "EDITOR_CONTENT_PREVIEW",
        b = "CHANGE_EDITOR_MODE",
        O = "TOGGLE_BUTTON_INVITE_TO_EDIT",
        h = "EDITOR_DRAFT_SAVE",
        g = "SET_SAVE_DRAFT",
        _ = "EDITOR_CREATE_PAGE",
        T = "EDITOR_LOAD_DRAFT",
        I = "EDITOR_LOAD_DRAFTMETADATA",
        S = "EDITOR_IS_DIRTY",
        C = "EDITOR_BREADCRUMBS",
        A = "EDITOR_UPDATE_PARENT_PAGE",
        y = "EDITOR_SHOW_REVERT_DIALOG",
        R = "EDITOR_SHOW_REVERT_DIALOG_DIFF",
        v = "EDITOR_SHOW_REVERT_DIALOG_CONTRIBUTORS",
        P = "EDITOR_HIDE_REVERT_DIALOG",
        N = "EDITOR_DELETE_CONTENT",
        j = "EDITOR_FETCH_COLLABORATOR_RELATIONS",
        D = "EDITOR_FETCH_TOUCHED_RELATIONS",
        L = "EDITOR_REVERT_CONTENT",
        w = "EDITOR_SHOW_VIEW_CHANGES_DIALOG",
        k = "EDITOR_HIDE_VIEW_CHANGES_DIALOG",
        U = "SET_IS_PUBLISHING_CONTENT",
        M = "EDITOR_UPDATE_INLINE_TASK",
        F = "EDITOR_UPDATE_CONTENT_APPEARANCE_PROPERTY",
        G = "UPDATE_CONTENT_SPACE_KEY"
    },
    "2wFc": function ( e, t, n ) {
      "use strict";
      n.d( t, "a", ( function () {
        return c
      } ) ), n.d( t, "s", ( function () {
        return l
      } ) ), n.d( t, "b", ( function () {
        return d
      } ) ), n.d( t, "d", ( function () {
        return E
      } ) ), n.d( t, "e", ( function () {
        return f
      } ) ), n.d( t, "l", ( function () {
        return m
      } ) ), n.d( t, "i", ( function () {
        return b
      } ) ), n.d( t, "j", ( function () {
        return O
      } ) ), n.d( t, "k", ( function () {
        return h
      } ) ), n.d( t, "p", ( function () {
        return g
      } ) ), n.d( t, "n", ( function () {
        return _
      } ) ), n.d( t, "m", ( function () {
        return T
      } ) ), n.d( t, "c", ( function () {
        return I
      } ) ), n.d( t, "g", ( function () {
        return S
      } ) ), n.d( t, "f", ( function () {
        return C
      } ) ), n.d( t, "o", ( function () {
        return A
      } ) ), n.d( t, "h", ( function () {
        return y
      } ) ), n.d( t, "q", ( function () {
        return v
      } ) ), n.d( t, "r", ( function () {
        return N
      } ) );
      var a = n( "Czhu" ),
        r = n( "EfWO" ),
        o = n.n( r ),
        s = ( n( "Jygk" ), n( "7LQG" ) );
      const c = /^(http(s)?:)?\/\//,
        i = new RegExp( s.a + "/spaces/([^/]+)/pages/([0-9]+)/([^?/]+)" ),
        u = new RegExp( s.a + "/spaces/([^/]+)/blog/(\\d{4})/(\\d{2})/(\\d{2})/([0-9]+)/([^?/]+)" ),
        l = e => e ? i.test( e ) ? e.replace( i, "/spaces/$1/pages/$2/:contentSlug" ) : u.test( e ) ? e.replace( u, "/spaces/$1/blog/$2/$3/$4/$5/:contentSlug" ) : e.replace( s.a, "" ) || "/" : "",
        d = ( e, t ) => {
          const n = o.a.parse( t, !0 );
          return delete n.search, n.query = Object( a.a )( Object( a.a )( {}, n.query ), e ), o.a.format( n )
        },
        E = e => {
          const t = ( e || "" ).replace( /[^A-Za-z0-9+\-.]/g, " " ).trim().replace( /\s+/g, "+" ).replace( /\++/g, "+" );
          return "+" === t ? "" : t
        },
        p = e => _( e, "pages" ),
        f = ( e, t, n, a, r, o ) => _( e, `blog/${t}/${n}/${a}/${r}${o?"/"+o:""}` ),
        m = e => _( e, "overview" ),
        b = ( e, t, n ) => _( e, `${"blogpost"===t?"blog":"pages"}/edit/${n}` ),
        O = ( e, t, n ) => _( e, `${"blogpost"===t?"blog":"pages"}/edit-v2/${n}` ),
        h = ( e, t ) => t ? _( t, "templates/edit/" + e ) : `${s.a}/templates/edit/${e}`,
        g = ( e, t ) => `${p(e)}/${t}`,
        _ = ( e, t = "" ) => {
          e = encodeURIComponent( e );
          let n = ( "string" == typeof t ? t : t.pathname ) || "";
          n.startsWith( s.a ) && ( n = n.substring( s.a.length ) ), n.startsWith( "/" ) && ( n = n.substring( 1 ) );
          const r = `${s.a}/${s.f}/${e}${n?"/"+n:""}`;
          return "string" == typeof t ? r : Object( a.a )( Object( a.a )( {}, t ), {}, {
            pathname: r
          } )
        },
        T = () => `${s.a}/${s.d}/recent-work`,
        I = ( e, t, n, a, r ) => {
          const o = r ? "/" + r : "";
          switch ( n ) {
            case "blogpost":
              const [ r, s, c ] = a.slice( 0, 10 ).split( "-" );
              return `${(e=>_(e,"blog"))(e)}/${r}/${s}/${c}/${t}${o}`;
            case "page":
              return `${p(e)}/${t}${o}`;
            default:
              throw new Error( `Expected content type 'blogpost' or 'page', but received '${n}'` )
          }
        },
        S = ( e, t ) => t && 0 !== e.toString().indexOf( s.a ) ? s.a : "",
        C = ( e, t ) => c.test( e ) ? e : `${S(e,t)}${e}`,
        A = e => e ? `${s.a}/pages/templates2/listpagetemplates.action?key=${e}` : s.a + "/pages/templates2/listglobaltemplates.action",
        y = () => s.a + "/admin/viewgeneralconfig.action",
        R = ( new RegExp( `${s.a}/${s.d}` ), new RegExp( `${s.a}/${s.b}` ), new RegExp( s.a + "/spaces/[^/]+/pages/[0-9]+" ), new RegExp( s.a + "/pages/viewpage.action" ) ),
        v = e => R.test( e.pathname ),
        P = ( new RegExp( s.a + "/spaces/[^/]+/blog/[0-9]+" ), new RegExp( s.a + "/spaces/viewspace.action" ), new RegExp( s.a + "/spaces/[^/]+/overview" ) ),
        N = e => P.test( e.pathname );
      new RegExp( s.a + "/spaces/[^/]+/shortcuts" ), new RegExp( s.a + "/spaces/[^/]+/blog" ), new RegExp( s.a + "/spaces/[^/]+/questions" ), new RegExp( `${s.a}/${s.c}/[^/]+/calendar` ), new RegExp( `${s.a}/${s.f}/viewspacesummary.action` ), new RegExp( `${s.a}/${s.c}/[^/]+/customcontent/list/ac%3Acom.atlassian.confluence.plugins.confluence-questions%3Aquestion` ), new RegExp( s.a + "/spaces/[^/]+/calendars" ), new RegExp( s.a + "/spaces/[^/]+/addon" ), new RegExp( s.a + "/spaces/[^/]+/(pages|blog)/edit-v2/" )
    },
    "33EX": function ( e, t, n ) {
      "use strict";
      n.d( t, "a", ( function () {
        return r
      } ) );
      var a = n( "H5qd" );
      const r = n.n( a ).a `query ContentHeaderQuery($contentId:ID!){content(id:$contentId){nodes{id type title}}}`
    },
    "37T6": function ( e, t, n ) {
      "use strict";
      n.d( t, "a", ( function () {
        return l
      } ) );
      var a = n( "Svze" ),
        r = n.n( a ),
        o = n( "2wFc" );
      const s = Object( a.Record )( {
          isFavourite: null,
          favouritedDate: null,
          lastSeen: null,
          lastModified: null,
          contentStatus: null
        } ),
        c = Object( a.Record )( {
          editui: null,
          webui: null,
          webuiIsSpa: null,
          viewChangesLink: null
        } ),
        i = Object( a.Record )( {
          cssClass: null,
          iconType: null,
          count: 0
        } ),
        u = Object( a.Record )( {
          html: null,
          editorHtml: null,
          cssTags: "",
          jsUris: Object( a.List )( [] )
        } );
      class l extends( Object( a.Record )( {
        id: null,
        type: null,
        iconType: null,
        kind: null,
        title: null,
        slug: null,
        links: null,
        version: null,
        summary: null,
        iconCssClass: null,
        iconPath: null,
        createdBy: null,
        createdDate: null,
        friendlyDate: null,
        contentCssClass: null,
        userContext: null,
        numberOfLikes: null,
        numberOfComments: null,
        willbedeleted: null,
        cardCounts: Object( a.fromJS )( [] ),
        contributors: Object( a.List )( [] ),
        hasChildren: null,
        childNodes: Object( a.List )( [] ),
        body: null,
        isContentSPAFriendly: null,
        areCommentsSPAFriendly: null,
        position: null,
        webItems: Object( a.Set )( [] ),
        ancestors: Object( a.OrderedSet )( [] ),
        currentUserPermissions: Object( a.Set )( [] ),
        labels: Object( a.Set )( [] ),
        spaceKey: null,
        isUnauthorized: null,
        hasInheritedRestrictions: null,
        lastFetchTime: null,
        viewers: Object( a.List )( [] ),
        editorVersion: null
      } ) ) {
        constructor( e ) {
          return super( e ), this.withMutations( t => ( e.links && t.set( "links", new c( e.links ) ), e.userContext && t.set( "userContext", new s( e.userContext ) ), e.cardCounts && t.set( "cardCounts", Object( a.fromJS )( e.cardCounts, ( e, t ) => r.a.Iterable.isIndexed( t ) ? t.toList() : new i( t ) ) ), e.viewers && t.set( "viewers", Object( a.List )( e.viewers ) ), e.childNodes && t.set( "childNodes", Object( a.List )( e.childNodes ) ), e.contributors && t.set( "contributors", Object( a.List )( e.contributors ) ), e.body && t.set( "body", new u( e.body ) ), e.ancestors && t.set( "ancestors", Object( a.OrderedSet )( e.ancestors ) ), e.currentUserPermissions && t.set( "currentUserPermissions", Object( a.Set )( e.currentUserPermissions ) ), e.title && t.set( "slug", Object( o.d )( e.title ) ), e.labels && t.set( "labels", Object( a.Set )( e.labels ) ), e.space && t.set( "spaceKey", e.space ), t ) )
        }
      }
    },
    "3HyH": function ( e, t, n ) {
      "use strict";
      let a;
      n.d( t, "a", ( function () {
          return a
        } ) ),
        function ( e ) {
          e.BYLINE = "confluence:contentBylineItem", e.CONTEXT_MENU = "confluence:contextMenu", e.CONTENT_ACTION = "confluence:contentAction", e.GLOBAL_SETTINGS = "confluence:globalSettings", e.HOMEPAGE_FEED = "confluence:homepageFeed", e.SPACE_PAGE = "confluence:spacePage", e.SPACE_SETTINGS = "confluence:spaceSettings"
        }( a || ( a = {} ) )
    },
    "3VMZ": function ( e, t, n ) {
      "use strict";
      let a;
      n.d( t, "a", ( function () {
          return a
        } ) ),
        function ( e ) {
          e.FOLLOW_DEEP_LINK = "follow-deep-link", e.VIEW_MACRO_RENDERER = "view-macro-renderer", e.VIEW_MACRO_EDITOR = "view-macro-editor", e.VIEW_ALL_MACRO = "view-all-macro", e.VIEW_JIRA_MACRO = "view-jira-macro", e.MIGRATE_PAGE = "migrate-page", e.MIGRATE_PAGE_PUBLISH = "migrate-page/publish", e.MIGRATE_TEMPLATE = "migrate-template", e.ADD_PAGE_COMMENT = "add-page-comment", e.ADD_PAGE_COMMENT_LOAD = "add-page-comment/load", e.ADD_PAGE_COMMENT_PUBLISH = "add-page-comment/publish", e.DELETE_PAGE_COMMENT = "delete-page-comment", e.ADD_INLINE_COMMENT = "add-inline-comment", e.ADD_INLINE_COMMENT_LOAD = "add-inline-comment/load", e.ADD_INLINE_COMMENT_PUBLISH = "add-inline-comment/publish", e.EDIT_INLINE_COMMENT = "edit-inline-comment", e.EDIT_INLINE_COMMENT_LOAD = "edit-inline-comment/load", e.EDIT_INLINE_COMMENT_PUBLISH = "edit-inline-comment/publish", e.VIEW_INLINE_COMMENT = "view-inline-comment", e.VIEW_INLINE_COMMENT_TOP_LEVEL = "view-inline-comment/toplevel", e.VIEW_INLINE_COMMENT_REPLY = "view-inline-comment/reply", e.REPLY_TO_INLINE_COMMENT = "reply-to-inline-comment", e.REPLY_TO_INLINE_COMMENT_LOAD = "reply-to-inline-comment/load", e.REPLY_TO_INLINE_COMMENT_PUBLISH = "reply-to-inline-comment/publish", e.DELETE_INLINE_COMMENT = "delete-inline-comment", e.RESOLVE_INLINE_COMMENT = "resolve-inline-comment", e.UNRESOLVE_INLINE_COMMENT = "unresolve-inline-comment", e.COPY_SPACE_PERMISSIONS = "copy-space-permissions", e.CREATE_PAGE = "create-page", e.CREATE_PAGE_LOAD_DIALOG = "create-page/load-dialog", e.CREATE_PAGE_TEMPLATE_VARIABLES = "create-page/template-variable-input", e.EDIT_PAGE = "edit-page", e.EDIT_PAGE_LOAD = "edit-page/load", e.EDIT_PAGE_PUBLISH = "edit-page/publish", e.EDIT_PAGE_CLOSE = "edit-page/close", e.CREATE_AND_EDIT_PAGE = "create-and-edit-page", e.TEMPLATE_EDIT_PAGE = "template-edit-page", e.TEMPLATE_EDIT_PAGE_LOAD = "template-edit-page/load", e.TEMPLATE_EDIT_PAGE_PUBLISH = "template-edit-page/publish", e.TEMPLATE_EDIT_PAGE_CLOSE = "template-edit-page/close", e.IN_EDITOR_TEMPLATES_LOAD_PANEL = "in-editor-templates-load-panel", e.IN_EDITOR_TEMPLATES_LOAD_PANEL_TEMPLATE_LIST = "in-editor-templates-load-panel/template-list", e.IN_EDITOR_TEMPLATES_LOAD_PANEL_CATEGORIES = "in-editor-templates-load-panel/categories", e.IN_EDITOR_TEMPLATES_LOAD_PANEL_SPACE_SELECTOR = "in-editor-templates-load-panel/space-selector", e.IN_EDITOR_TEMPLATES_UPDATE_CONTENT = "in-editor-templates-update-content", e.TEMPLATE_GALLERY = "template-gallery", e.TEMPLATE_GALLERY_SPACE_SELECTOR = "template-gallery/space-selector", e.TEMPLATE_GALLERY_CATEGORIES = "template-gallery/categories", e.TEMPLATE_GALLERY_CARDS = "template-gallery/cards", e.TEMPLATE_GALLERY_TEMPLATE_DETAIL = "template-gallery/template-detail", e.REFRESH_EDITOR_CONTENT = "refresh-editor-content", e.CREATE_CONTENT_FROM_TEMPLATE = "create-content-from-template", e.BLUEPRINT_WIZARD_LOAD_DIALOG = "blueprint-wizard-load-dialog", e.CONNECT_ADDON = "connect-addon", e.QUICK_RELOAD = "quick-reload", e.RESTRICTED_PAGE = "restricted-page", e.RESTRICTED_SPACE = "restricted-space", e.RESTRICTIONS_DIALOG = "restrictions-dialog", e.RESTRICTIONS_DIALOG_LOAD = "restrictions-dialog/load", e.RESTRICTIONS_DIALOG_APPLY = "restrictions-dialog/apply", e.INSPECT_PERMISSIONS = "inspect-permissions", e.UPSELL_EDITION = "upsell-edition", e.ARCHIVE_PAGES = "archiving/archive-pages", e.RESTORE_PAGES = "archiving/restore-pages", e.SPACE_ARCHIVED_PAGES = "archiving/view-space-archived-pages", e.DELETE_PAGE = "delete-page", e.NOT_FOUND = "not-found", e.VIEW_CONTENT = "view-content", e.VIEW_PAGE = "view-page", e.SPACE_OVERVIEW = "space-overview", e.VIEW_PAGE_TITLE = "view-page/title", e.VIEW_PAGE_LIKES = "view-page/likes", e.VIEW_PAGE_LABELS = "view-page/labels", e.VIEW_PAGE_BYLINE = "view-page/byline", e.VIEW_PAGE_BYLINE_FORGE = "view-page/byline/forge", e.VIEW_PAGE_COMMENTS = "view-page/comments", e.VIEW_PAGE_RENDERER = "view-page/renderer", e.VIEW_PAGE_EDIT_BUTTON = "view-page/edit", e.VIEW_PAGE_CONTENT_TOOLS = "view-page/content-tools", e.VIEW_PAGE_CONTENT_TOOLS_FORGE = "view-page/content-tools/forge", e.VIEW_PAGE_CONTEXT_MENU = "view-page/context-menu", e.VIEW_PAGE_CONTEXT_MENU_FORGE = "view-page/context-menu/forge", e.VIEW_PAGE_CONTENT_HEADER = "view-page/content-header", e.VIEW_PAGE_FAVORITE_BUTTON = "view-page/favorite", e.VIEW_PAGE_COMPLETE = "view-page:complete", e.VIEW_PAGE_SHARE_BUTTON = "view-page/share-button", e.VIEW_PAGE_RESTRICTIONS_BUTTON = "view-page/restrictions-button", e.VIEW_PAGE_COMMENT_BUTTON = "view-page/comment-button", e.VIEW_PAGE_DISCOVER_INLINE_COMMENTS_FEATURE = "view-page/discover-inline-comments-feature", e.HEADER_ITEMS_GROUP_LOAD = "header-items/group-load", e.HOME = "home", e.HOME_SPACES = "home/spaces", e.HOME_RECENT_PAGES = "home/recent-pages", e.HOME_RIGHT_PANEL = "home/right-panel", e.HOME_RIGHT_PANEL_ACTIVITY = "home/right-panel/activity", e.HOME_RIGHT_PANEL_WELCOME_MESSAGE = "home/right-panel/welcome-message", e.HOME_RIGHT_PANEL_APPS = "home/right-panel/apps", e.HOME_RIGHT_PANEL_FORGE = "home/right-panel/forge", e.HOME_FEED = "home/feed", e.ADVANCED_SEARCH = "advanced-search", e.ADVANCED_SEARCH_SPACE_FILTER = "advanced-search/space-filter", e.ADVANCED_SEARCH_CONTRIBUTOR_FILTER = "advanced-search/contributor-filter", e.ADVANCED_SEARCH_SMART_CONTRIBUTOR_FILTER = "advanced-search/smart-contributor-filter", e.RECENT_DRAWER_VISITED = "recent-drawer/visited", e.RECENT_DRAWER_VISITED_LOAD_MORE = "recent-drawer/visited-load-more", e.RECENT_DRAWER_WORKED_ON = "recent-drawer/worked-on", e.RECENT_DRAWER_WORKED_ON_LOAD_MORE = "recent-drawer/worked-on-load-more", e.RECENT_DRAWER_DRAFTS = "recent-drawer/drafts", e.RECENT_DRAWER_DRAFTS_LOAD_MORE = "recent-drawer/drafts-load-more", e.RECENT_DRAWER_STARRED = "recent-drawer/starred", e.RECENT_DRAWER_STARRED_LOAD_MORE = "recent-drawer/starred-load-more", e.RECENT_DROPDOWN_VISITED = "recent-dropdown/visited", e.RECENT_DROPDOWN_VISITED_LOAD_MORE = "recent-dropdown/visited-load-more", e.RECENT_DROPDOWN_WORKED_ON = "recent-dropdown/worked-on", e.RECENT_DROPDOWN_WORKED_ON_LOAD_MORE = "recent-dropdown/worked-on-load-more", e.RECENT_DROPDOWN_DRAFTS = "recent-dropdown/drafts", e.RECENT_DROPDOWN_DRAFTS_LOAD_MORE = "recent-dropdown/drafts-load-more", e.RECENT_DROPDOWN_STARRED = "recent-dropdown/starred", e.RECENT_DROPDOWN_STARRED_LOAD_MORE = "recent-dropdown/starred-load-more", e.RECENT_HOME_VISITED = "recent-home/visited", e.RECENT_HOME_VISITED_LOAD_MORE = "recent-home/visited-load-more", e.RECENT_HOME_WORKED_ON = "recent-home/worked-on", e.RECENT_HOME_WORKED_ON_LOAD_MORE = "recent-home/worked-on-load-more", e.RECENT_HOME_DRAFTS = "recent-home/drafts", e.RECENT_HOME_DRAFTS_LOAD_MORE = "recent-home/drafts-load-more", e.RECENT_HOME_STARRED = "recent-home/starred", e.RECENT_HOME_STARRED_LOAD_MORE = "recent-home/starred-load-more", e.PAGE_TREE = "page-tree", e.PAGE_TREE_DND = "page-tree/dnd", e.ACTIVITY_TAILORED = "activity/tailored", e.ACTIVITY_CREATE_SPACE_BUTTON = "activity/create-space-button", e.ACTIVITY_RIGHT_SIDEBAR = "activity/right-sidebar", e.FEED_MIGRATION_ACTIVITY_POPULAR = "feed-migration/activity/popular", e.FEED_MIGRATION_ACTIVITY_ALL_UPDATES = "feed-migration/activity/all-updates", e.NAV2_GLOBAL = "navigation/nav-2-global-navigation", e.NAV2_PRODUCT = "navigation/nav-2-product-navigation", e.NAV2_CONTAINER = "navigation/nav-2-container-navigation", e.NAV2_ADMIN = "navigation/nav-2-admin-navigation", e.NAV2_ADMIN_FORGE = "navigation/nav-2-admin-navigation/forge", e.NAV2_RECENT_DRAWER = "navigation/nav-2-recent-drawer", e.NAV2_SEARCH_DRAWER = "navigation/nav-2-search-drawer", e.NAV2_APPS_SECTION = "navigation/nav-2-apps-section", e.APP_NAV_GLOBAL = "navigation/app-nav-global-navigation", e.APP_NAV_CONTAINER = "navigation/app-nav-container-navigation", e.APP_NAV_ADMIN = "navigation/app-nav-admin-navigation", e.APP_NAV_SPACES_DROPDOWN = "navigation/app-nav-spaces-dropdown", e.APP_NAV_PAGES_DROPDOWN = "navigation/app-nav-pages-dropdown", e.APP_NAV_APPS_DROPDOWN = "navigation/app-nav-apps-dropdown", e.APP_NAV_NOTIFICATIONS_DROPDOWN = "navigation/app-nav-notifications-dropdown", e.APP_NAV_HELP_DROPDOWN = "navigation/app-nav-help-dropdown", e.APP_NAV_PROFILE_DROPDOWN = "navigation/app-nav-profile-dropdown", e.SPACE_DIRECTORY = "space-directory", e.SPACE_DIRECTORY_YOUR_SPACES = "space-directory/your-spaces", e.SPACE_DIRECTORY_FILTER = "space-directory/filter", e.SPACE_DIRECTORY_PAGINATE = "space-directory/paginate", e.ONBOARDING_START = "onboarding/start", e.ONBOARDING_INVITE_USERS = "onboarding/invite-users", e.ONBOARDING_REMOVE_INVITE_USERS = "onboarding/remove-invite-users", e.ONBOARDING_CREATE_A_SPACE = "onboarding/create-a-space", e.ONBOARDING_CHOOSE_A_SPACE = "onboarding/choose-a-space", e.ONBOARDING_END = "onboarding/end", e.ONBOARDING_CHOOSE_A_SPACE_CARD = "onboarding/choose-a-space-card", e.ONBOARDING_SHARED_LINK_SPOTLIGHT = "onboarding/shared-link-spotlight", e.ONBOARDING_NUDGE = "onboarding/nudge", e.ONBOARDING_ACCOUNT_SETUP = "onboarding-account-setup", e.ONBOARDING_QUICKSTART = "onboarding-quickstart", e.ONBOARDING_NTH_USER_QUICKSTART_HOME_TOUR = "onboarding-nth-user-quick-start/home-tour", e.SPACE_PAGE_APPS_FORGE = "space-page-apps/forge", e.SPACE_SETTINGS_INTEGRATIONS_FORGE = "space-settings/integrations/forge", e.SITE_PERMISSION_SPACE_ACCESS = "site-permission/space-access", e.SPACE_PAGES = "space-pages", e.SPACE_PAGES_FILTER = "space-pages/filter", e.SPACE_PAGES_PAGINATE = "space-pages/paginate", e.SITE_PERMISSION_REMOVE_SPACE_ACCESS = "site-permissions/space-access/remove", e.SITE_PERMISSION_ADD_SPACE_ACCESS = "site-permissions/space-access/add"
        }( a || ( a = {} ) )
    },
    "3ebY": function ( e, t, n ) {
      "use strict";
      var a = n( "Svze" );
      t.a = Object( a.Record )( {
        id: null,
        webItemKey: null,
        webItemCompleteKey: null,
        title: null,
        url: null,
        position: null,
        icon: null,
        iconClass: null,
        styleClass: null,
        hidden: null,
        canHide: null,
        tooltip: null,
        urlWithoutContextPath: null
      } )
    },
    "3kaz": function ( e, t, n ) {
      "use strict";
      n.d( t, "a", ( function () {
        return u
      } ) ), n.d( t, "b", ( function () {
        return l
      } ) ), n.d( t, "d", ( function () {
        return E
      } ) ), n.d( t, "c", ( function () {
        return f
      } ) );
      var a = n( "5Y5w" ),
        r = n.n( a ),
        o = n( "nnRT" ),
        s = n.n( o ),
        c = n( "hqKg" ),
        i = n( "Svze" );
      const u = () => Object( c.createSelectorCreator )( c.defaultMemoize, s.a, c.defaultEqualityCheck )( e => e, ( e, t ) => t.entities.get( "spaces" ), ( e, t ) => e && e.size ? e.map( e => e ? t.get( "" + e ) : null ) : Object( i.Set )( [] ) ),
        l = Object( c.createSelector )( e => e, ( e, t ) => t.entities.get( "spaces" ), ( e, t ) => t.getIn( [ e, "homepageId" ], null ) ),
        d = Object( c.createSelector )( e => e.entities.get( "spaces" ), e => e && e.size ? e.filter( e => e.get( "isFavourite" ) ) : Object( i.Map )( {} ) ),
        E = Object( c.createSelector )( e => e, ( e, t ) => d( t ), ( e, t ) => t.has( e ) ),
        p = Object( c.createSelector )( e => e.entities.get( "spaces" ), e => e && e.size ? e.filter( e => e.get( "isWatched" ) ) : Object( i.Map )( {} ) ),
        f = ( Object( c.createSelector )( e => e, ( e, t ) => p( t ), ( e, t ) => t.has( e ) ), Object( c.createSelector )( [ e => e, ( e, t ) => t.entities.get( "spaces" ) ], ( e, t ) => {
          let n = t.getIn( [ e, "shortcutLinks" ], null );
          return n && ( n = n.toJS ? n.toJS() : n, n = r()( n, [ "position" ], [ "desc" ] ) ), n
        } ), Object( c.createSelector )( [ e => e.entities.get( "spaces" ), ( e, t ) => t ], ( e, t ) => e.get( t, null ) ) );
      Object( c.createSelector )( [ e => e.views.space.links, ( e, t ) => t, ( e, t, n ) => n ], ( e, t, n ) => e.getIn( [ t, n ], Object( i.List )( [] ) ) )
    },
    "40XH": function ( e, t, n ) {
      "use strict";
      n.d( t, "a", ( function () {
        return E
      } ) );
      var a = n( "H5qd" ),
        r = n.n( a ),
        o = n( "j+hl" );
      const s = r.a `fragment operations on Content{operations{operation targetType}}`,
        c = r.a `fragment userFragment on Person{type ...on KnownUser{accountId}profilePicture{path width height isDefault}displayName}`,
        i = r.a `fragment baseContentDetailsFragment on Content{id type status title}`,
        u = r.a `fragment baseSpaceDetailsFragment on Space{id key name type status}`,
        l = r.a `fragment linksFragment on Content{links{editui}}`,
        d = r.a `fragment metadataFragment on ContentMetadata{labels{id name}}`,
        E = r.a `query editorContent($contentId:ID$draftShareId:String$status:[String])@SLA{content(id:$contentId draftShareId:$draftShareId status:$status){nodes{...baseContentDetailsFragment ...operations ...linksFragment ...contentAppearancePublishedFragment ...contentAppearanceDraftFragment space{...baseSpaceDetailsFragment}history{latest createdBy{...userFragment}createdDate}ancestors{...baseContentDetailsFragment}metadata{...metadataFragment}body{atlas_doc_format{value}}version{number syncRev confRev}}}}${i}${s}${l}${u}${c}${d}${o.b}${o.a}`
    },
    "4BMa": function ( e, t, n ) {
      "use strict";
      n.d( t, "a", ( function () {
        return r
      } ) ), n.d( t, "b", ( function () {
        return o
      } ) );
      var a = n( "7yUP" );
      const r = async () => {
        Object( a.c )( "confluence.fabric.editor.download.start" );
        const e = await Promise.all( [ n.e( "atlaskit~66e23772" ), n.e( "vendors~4134d62c" ), n.e( 0 ), n.e( 4 ), n.e( 5 ), n.e( 7 ), n.e( 8 ), n.e( 9 ), n.e( 10 ), n.e( 12 ), n.e( 16 ), n.e( 18 ), n.e( 17 ), n.e( 20 ), n.e( 21 ), n.e( 31 ), n.e( 35 ), n.e( 30 ), n.e( 36 ), n.e( "@atlaskit_editor-core~b59ad437" ) ] ).then( n.bind( null, "6Qoh" ) );
        return Object( a.c )( "confluence.fabric.editor.download.end" ), e
      }, o = () => Promise.all( [ n.e( "graphql.prosemirror-synchrony-plugin.content-reconciler~4134d62c" ), n.e( "synchrony-plugin~4134d62c" ) ] ).then( n.bind( null, "/VC6" ) )
    },
    "4nIp": function ( e, t, n ) {
      "use strict";
      var a = n( "RfuI" ),
        r = n( "7yUP" );
      t.a = Object( a.a )( {
        id: "/zgcB",
        name: "ContentRenderer",
        loader: async () => {
          Object( r.c )( "confluence.fabric.content.renderer.download.start" );
          const e = await Promise.all( [ n.e( 50 ), n.e( "content-renderer~dc51bad7" ) ] ).then( n.bind( null, "YVdS" ) );
          return Object( r.c )( "confluence.fabric.content.renderer.download.end" ), e
        }
      } )
    },
    "5MdE": function ( e, t, n ) {
      "use strict";
      ( function ( e ) {
        var a = n( "Svze" ),
          r = n( "qYhz" ),
          o = n.n( r ),
          s = n( "aKlp" ),
          c = n.n( s ),
          i = n( "HbzK" ),
          u = n( "bjlv" );
        const l = [ "i18n", "watches", "totals", "pagination", "session", "views", "hover", "meta", "isServerRenderedPage" ],
          d = [ "discovered-plugin-features" ];
        t.a = function ( t = e, n = {} ) {
          const r = Object.assign( t.__INITIAL_STATE__ || {}, n );
          return r.meta = c()( r.meta || {}, Object( u.a )( i.a.getAllAsMap(), d ) ), Object( u.b )( r, ( e, t ) => ( o()( l, t ) || console.error( `Unsupported key "${t}" was found in the __INITIAL_STATE__.\nCheck if it works and add it to the whitelist of the initialStateFactory.` ), Object( a.fromJS )( e ) ) )
        }
      } ).call( this, n( "fRV1" ) )
    },
    "5Yvp": function ( e, t, n ) {
      "use strict";
      var a = n( "Czhu" ),
        r = n( "ERkP" ),
        o = n.n( r ),
        s = ( n( "aWzz" ), n( "lSUb" ) ),
        c = n( "nnRT" ),
        i = n.n( c ),
        u = n( "1N1n" ),
        l = n( "+mzV" ),
        d = n( "W71K" ),
        E = n( "88kn" ),
        p = n( "RfuI" );
      const f = Object( p.a )( {
        id: "0U6kB",
        name: "PremiumOnboarding",
        loader: () => Promise.all( [ n.e( "atlaskit~66e23772" ), n.e( "afp~af75c846" ), n.e( "vendors~4134d62c" ), n.e( "premium-onboarding~b59ad437" ) ] ).then( n.bind( null, "UJUc" ) ).then( ( {
          PremiumOnboarding: e
        } ) => e )
      } );
      var m = n( "+3AB" ),
        b = n( "ewfN" ),
        O = n( "U63R" );
      const h = Object( p.a )( {
        id: "8TcpJ",
        name: "LazyUpgradeAdminModal",
        loader: async () => ( await Promise.all( [ n.e( "afp~af75c846" ), n.e( "vendors~4134d62c" ), n.e( "growth.upgrade.admin.modal~0ae2caf4" ) ] ).then( n.bind( null, "+UOj" ) ) ).UpgradeAdminModal
      } );
      var g = n( "FdGg" ),
        _ = n( "X2PC" ),
        T = n( "8TdO" ),
        I = n( "o15q" ),
        S = n( "H5qd" );
      const C = n.n( S ).a `query ScreenQuery($spaceKey:String!){space(key:$spaceKey){id homepage{id}}}`;
      var A = n( "Ua4J" ),
        y = n( "+6Tk" );
      n.d( t, "a", ( function () {
        return P
      } ) );
      const R = {},
        v = Object( s.default )( e => Object( a.a )( {}, e ), i.a );

      function P( {
        screenEvent: e,
        pageContext: t = {},
        showPremiumOnboarding: n = !0,
        showUpgradeModal: s = !1,
        children: c
      } ) {
        const [ , i ] = Object( r.useState )( null ), p = Object( a.a )( {}, t );
        p.contentId && ( p.contentIdLoading = !1 ), !p.spaceKey || p.contentId && p.contentId !== I.a || ( p.spaceKey in R ? ( p.contentId = R[ p.spaceKey ], p.contentIdLoading = !1 ) : ( delete p.contentId, p.contentIdLoading = !0 ) ), Object( r.useEffect )( () => {
          var e;
          p.spaceKey && p.contentIdLoading && ( e = p.spaceKey, Object( T.b )().query( {
            query: C,
            variables: {
              spaceKey: e
            }
          } ).then( e => {
            var t;
            return null != ( t = e ) && null != ( t = t.data ) && null != ( t = t.space ) && null != ( t = t.homepage ) ? t.id : t
          } ) ).then( e => {
            R[ p.spaceKey ] = e, i( Math.random() )
          } )
        }, [ p.spaceKey, p.contentIdLoading ] ), p.searchSessionId = ( e => {
          const t = Object( y.a )( "confluence.frontend.page-context.search-id" ),
            n = Object( r.useRef )( null ),
            {
              getQueryParams: o,
              setQueryParams: s
            } = Object( r.useContext )( A.a ),
            c = o().search_id || null,
            i = null == n.current || n.current.spaceKey != e.spaceKey || n.current.contentId != e.contentId || n.current.searchSessionId != c && null != c;
          if ( Object( r.useEffect )( () => {
              t && i && ( n.current = {
                spaceKey: e.spaceKey,
                contentId: e.contentId,
                searchSessionId: Array.isArray( c ) ? null : c
              } )
            }, [ t, i, e.spaceKey, e.contentId, c ] ), Object( r.useEffect )( () => {
              if ( !t ) return;
              const e = o();
              e.search_id && s( Object( a.a )( Object( a.a )( {}, e ), {}, {
                search_id: null
              } ), !0 )
            } ), t ) return c || i || null == n.current ? c : n.current.searchSessionId
        } )( p );
        const S = [ e && o.a.createElement( d.a, {
          name: e.name,
          id: e.id || "none",
          attributes: e.attributes,
          key: "screen"
        } ), ...p.routeName === b.EXTERNAL_SHARE.name ? [] : [ o.a.createElement( g.a, {
          key: "premiumAdminErrorBoundary",
          attribution: _.a.MISSION_CONTROL
        }, o.a.createElement( E.b, {
          key: "premiumAdmin",
          priority: O.a.BACKGROUND
        } ) ), n && o.a.createElement( g.a, {
          key: "premiumOnboardingErrorBoundary",
          attribution: _.a.MISSION_CONTROL
        }, o.a.createElement( f, {
          key: "premiumOnboarding",
          priority: O.a.BACKGROUND
        } ) ), o.a.createElement( m.a, {
          key: "createBlankFabricPageListener"
        } ), s && o.a.createElement( g.a, {
          key: "upgradeForAdminsErrorBoundary",
          attribution: _.a.MISSION_CONTROL
        }, o.a.createElement( h, {
          key: "upgradeForAdmins",
          touchpointId: "EngagedAdminsConfluence-" + e.name,
          priority: O.a.BACKGROUND
        } ) ) ] ];
        return o.a.createElement( l.a.Provider, {
          value: v( p )
        }, o.a.createElement( u.c, {
          contentId: p.contentId
        }, S.concat( c ) ) )
      }
    },
    "5frb": function ( e, t, n ) {
      "use strict";
      n.d( t, "a", ( function () {
        return s
      } ) );
      var a = n( "H5qd" ),
        r = n.n( a );
      const o = r.a `fragment PageCardSearchResult on ConfluenceSearchResult{...on ConfluenceContentSearchResult{id title url excerpt lastModified{value}node{id links{editui}history{createdBy{profilePicture{path}displayName}}metadata{currentuser{favourited{isFavourite}}likes{count}comments{commentsCount}}}}}`,
        s = r.a `query SpacePagesQuery($searchText:String!$filters:ConfluenceSearchFilters!$first:Int!$token:String$sortBy:ConfluenceContentSortField!){confluenceContentSearch(query:$searchText scopes:[PAGE]filters:$filters first:$first token:$token sort:[$sortBy]sessionAttributes:{experience:"confluence.spacePages"}){nodes{...PageCardSearchResult}pageInfo{hasNextPage nextPageToken}}}${o}`
    },
    "6GZM": function ( e, t, n ) {
      "use strict";
      n.d( t, "c", ( function () {
        return r
      } ) ), n.d( t, "a", ( function () {
        return o
      } ) ), n.d( t, "b", ( function () {
        return s
      } ) );
      var a = n( "ne5j" );

      function r( e ) {
        return "true" === e || "false" !== e && ( "object" == typeof e ? JSON.stringify( e ) : e )
      }

      function o( e, t ) {
        return e.reduce( ( e, n ) => ( e[ n.id ] = t( n ), e ), {} )
      }
      const s = e => {
        const t = o( e, e => r( e.value ) );
        return {
          original: t,
          withOverrides: Object( a.applyOverrides )( t, ( e, t, n ) => t.hasOwnProperty( e ) ? t[ e ] : n[ e ] )
        }
      }
    },
    "6lZA": function ( e, t, n ) {
      "use strict";
      var a = n( "Czhu" ),
        r = n( "lSUb" ),
        o = n( "nnRT" ),
        s = n.n( o ),
        c = n( "Z1kL" ),
        i = n( "cld1" );
      const u = e => Object( i.getAnalyticsWebClient )().then( t => {
          t.sendTrackEvent( e )
        } ),
        l = Object( r.default )( ( e = {} ) => new c.a( {
          flags: e,
          analyticsHandler: u
        } ), s.a );
      var d = n( "ne5j" ),
        E = n( "6GZM" );
      n.d( t, "a", ( function () {
        return m
      } ) );
      const p = ( e, t, n ) => t.hasOwnProperty( e ) ? Object( a.a )( Object( a.a )( {}, n[ e ] ), {}, {
        value: t[ e ]
      } ) : n[ e ];

      function f( e ) {
        return "object" == typeof e && "value" in e ? Object( a.a )( Object( a.a )( {}, e.explanation ? {
          explanation: Object( a.a )( {}, e.explanation )
        } : {} ), {}, {
          value: Object( E.c )( e.value )
        } ) : {
          value: Object( E.c )( e ),
          explanation: void 0
        }
      }
      const m = Object( r.default )( e => {
        const t = e ? Object( E.a )( e, f ) : {},
          n = Object( d.applyOverrides )( t, p ),
          a = l();
        a.setFlags( n );
        const {
          original: r,
          withOverrides: o
        } = Object( E.b )( e );
        return {
          originalFeatureFlags: r,
          featureFlagsWithOverrides: o,
          featureFlagClient: a
        }
      } )
    },
    "6n9r": function ( e, t, n ) {
      "use strict";
      n.d( t, "a", ( function () {
        return a
      } ) );
      const a = e => {
        var t;
        return e && ( ( null != ( t = e ) && null != ( t = t.tenant ) && null != ( t = t.editions ) ? t.edition : t ) || void 0 )
      }
    },
    "6z9Z": function ( e, t, n ) {
      "use strict";
      n.d( t, "a", ( function () {
        return s
      } ) ), n.d( t, "b", ( function () {
        return c
      } ) );
      var a = n( "Czhu" ),
        r = n( "ERkP" ),
        o = n.n( r );
      const s = Object( r.createContext )( {
        start() {},
        succeed() {},
        fail() {},
        abort() {},
        stopOnError() {},
        subscribe: () => () => {},
        getExperienceState: () => null
      } );

      function c( e ) {
        const t = t => o.a.createElement( s.Consumer, null, n => o.a.createElement( e, Object( a.a )( Object( a.a )( {}, t ), {}, {
          experienceTracker: n
        } ) ) );
        return t.displayName = `withExperienceTracker(${e.displayName||e.name})`, t
      }
    },
    "7+Q0": function ( e, t, n ) {
      "use strict";
      let a, r;
      n.d( t, "a", ( function () {
          return a
        } ) ), n.d( t, "b", ( function () {
          return r
        } ) ),
        function ( e ) {
          e.PUBLISHED = "content-appearance-published", e.DRAFT = "content-appearance-draft"
        }( a || ( a = {} ) ),
        function ( e ) {
          e.DEFAULT = "default", e.FULL_WIDTH = "full-width"
        }( r || ( r = {} ) )
    },
    "7LQG": function ( e, t, n ) {
      "use strict";
      n.d( t, "a", ( function () {
        return s
      } ) ), n.d( t, "f", ( function () {
        return c
      } ) ), n.d( t, "c", ( function () {
        return i
      } ) ), n.d( t, "b", ( function () {
        return u
      } ) ), n.d( t, "d", ( function () {
        return l
      } ) ), n.d( t, "e", ( function () {
        return d
      } ) );
      var a = n( "Jygk" ),
        r = n.n( a );
      const o = r.a.location && r.a.location.pathname.split( "/" )[ 1 ],
        s = o ? "/" + o : "/wiki",
        c = "spaces",
        i = "display",
        u = "discover",
        l = "my",
        d = "recent"
    },
    "7OEs": function ( module, __webpack_exports__, __webpack_require__ ) {
      "use strict";
      __webpack_require__.d( __webpack_exports__, "a", ( function () {
        return evalLegacyConnectInlineScripts
      } ) );
      var _confluence_wrm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( "S2j0" );

      function evalLegacyConnectInlineScripts( container ) {
        return container ? new Promise( resolve => {
          const connectScripts = Array.from( container.querySelectorAll( "script.ap-iframe-body-script" ) );
          connectScripts.length > 0 ? Object( _confluence_wrm__WEBPACK_IMPORTED_MODULE_0__.a )( [ "wr!confluence.web.resources:querystring", "wr!confluence.web.resources:navigator-context", "wr!com.atlassian.plugins.atlassian-connect-plugin:confluence-atlassian-connect-resources-v5" ], () => {
            connectScripts.forEach( connectScript => {
              eval( connectScript.innerHTML )
            } ), resolve()
          }, () => {
            0
          } ) : resolve()
        } ) : Promise.reject( new Error( "evalLegacyConnectInlineScripts missing container argument" ) )
      }
    },
    "7a7X": function ( e, t, n ) {
      "use strict";
      n.d( t, "a", ( function () {
        return g
      } ) );
      var a, r, o = n( "zjfJ" ),
        s = n( "Czhu" ),
        c = n( "EfWO" ),
        i = n.n( c ),
        u = n( "ERkP" ),
        l = n.n( u ),
        d = n( "6pnX" ),
        E = n( "nnRT" ),
        p = n.n( E ),
        f = n( "0K0H" ),
        m = n( "WBjB" ),
        b = n( "Ua4J" );
      const O = () => {};

      function h( e, t ) {
        const n = Object.values( e );
        for ( const a of n ) {
          if ( !( a instanceof m.a ) ) continue;
          const e = a.match( t );
          if ( e ) return Object( s.a )( Object( s.a )( {}, a ), e )
        }
        return null
      }
      const g = Object( d.a )( ( r = a = class e extends u.Component {
        constructor( t ) {
          super( t ), Object( o.a )( this, "memoizedRouteComponents", new WeakMap ), Object( o.a )( this, "transitionId", 0 ), Object( o.a )( this, "pendingQueryParams", {} ), Object( o.a )( this, "routes", this.mapRoutes( this.props.routeComponents ) ), Object( o.a )( this, "toUrl", ( e, t = {} ) => {
            const n = t.href;
            if ( n ) return n;
            if ( !e ) return "";
            const a = t.query || {},
              r = t.hash || "";
            return this.getRoute( e ).toUrl( t, {
              query: a,
              hash: r
            } )
          } ), Object( o.a )( this, "matchRoute", e => {
            const {
              namedRoutes: t
            } = this.props;
            return h( t, e )
          } ), Object( o.a )( this, "matchSupportedRoute", e => {
            const t = i.a.parse( e );
            return t.host && t.host !== window.location.host ? null : h( this.routes, e )
          } ), Object( o.a )( this, "replace", ( t, n = !1 ) => {
            const {
              history: a,
              onPageReload: r = e.defaultProps.onPageReload
            } = this.props;
            let o;
            !n && ( o = this.matchSupportedRoute( t ) ) ? a.replace( i.a.format( {
              pathname: o.pathname,
              search: o.search,
              hash: o.hash
            } ) ) : ( r( t, !0 ), window.location.replace( t ) )
          } ), Object( o.a )( this, "open", ( e, t, n ) => window.open( e, t, n ) ), Object( o.a )( this, "push", ( t, n = !1 ) => {
            const {
              history: a,
              onPageReload: r = e.defaultProps.onPageReload,
              routePolicy: o
            } = this.props;
            if ( o ) return o.push( this.getRoutesContextValue(), t );
            let s;
            !n && ( s = this.matchSupportedRoute( t ) ) ? a.push( i.a.format( {
              pathname: s.pathname,
              search: s.search,
              hash: s.hash
            } ) ) : ( r( t, !1 ), window.location.assign( t ) )
          } ), Object( o.a )( this, "getQueryParams", () => {
            const {
              location: e
            } = this.props;
            return i.a.parse( e.search, !0 ).query
          } ), Object( o.a )( this, "setQueryParams", ( e, t = !1 ) => {
            if ( e && "object" == typeof e ) {
              const {
                history: n
              } = this.props, a = Object( s.a )( Object( s.a )( Object( s.a )( {}, this.getQueryParams() ), this.pendingQueryParams ), e );
              Object.keys( a ).forEach( e => {
                null !== a[ e ] && void 0 !== a[ e ] || delete a[ e ]
              } );
              const r = this.buildQueryString( a );
              ( t ? n.replace : n.push )( {
                search: r
              } ), Object.assign( this.pendingQueryParams, e ), setTimeout( () => this.pendingQueryParams = {} )
            }
          } ), Object( o.a )( this, "buildQueryString", e => {
            const t = Object.entries( e );
            return t.length ? t.reduce( ( e, n, a ) => `${e+n[0]}=${encodeURIComponent(n[1])}${a<t.length-1?"&":""}`, "?" ) : ""
          } ), Object( o.a )( this, "getHash", () => {
            const {
              location: e
            } = this.props;
            return e.hash ? e.hash.substring( 1 ) : ""
          } ), Object( o.a )( this, "setHash", e => {
            const {
              history: t,
              location: n
            } = this.props;
            t.replace( Object( s.a )( Object( s.a )( {}, n ), {}, {
              hash: e
            } ) )
          } ), Object( o.a )( this, "preloadRoute", e => {
            const t = "string" == typeof e ? this.matchSupportedRoute( e ) : e;
            if ( t ) {
              const {
                onPreload: e
              } = this.props;
              e && e( t )
            }
          } ), Object( o.a )( this, "getRoutesContextValue", () => {
            const {
              history: e,
              location: t,
              onPageReload: n
            } = this.props;
            return {
              getHref: this.getHref,
              history: e,
              location: t,
              match: this.matchSupportedRoute( `${t.pathname}${t.search}${t.hash}` ),
              transitionId: this.transitionId,
              toUrl: this.toUrl,
              matchRoute: this.matchRoute,
              matchSupportedRoute: this.matchSupportedRoute,
              getQueryParams: this.getQueryParams,
              setQueryParams: this.setQueryParams,
              getHash: this.getHash,
              setHash: this.setHash,
              replace: this.replace,
              routes: this.routes,
              push: this.push,
              open: this.open,
              onPageReload: n || O,
              preloadRoute: this.preloadRoute
            }
          } );
          const {
            location: n,
            onInitialize: a,
            routeComponents: r
          } = this.props;
          for ( const e in r ) {
            const t = r[ e ];
            this.memoizedRouteComponents.has( t ) || this.memoizedRouteComponents.set( t, Object( u.memo )( t, p.a ) )
          }
          const c = this.matchSupportedRoute( `${n.pathname}${n.search}${n.hash}` );
          a && a( c, this.transitionId )
        }
        componentDidMount() {
          const {
            history: e,
            location: t
          } = this.props;
          let n = this.matchSupportedRoute( `${t.pathname}${t.search}${t.hash}` );
          this.unlistenToHistory = e.block( ( e, t ) => {
            const {
              onTransition: a
            } = this.props, r = this.matchSupportedRoute( `${e.pathname}${e.search}${e.hash}` );
            a && r && r.isTransition( n, r ) && ( "PUSH" !== t && "POP" !== t || this.transitionId++, a( r, this.transitionId, t ) ), n = r
          } )
        }
        componentWillUnmount() {
          this.unlistenToHistory && this.unlistenToHistory()
        }
        mapRoutes( e ) {
          return Object.keys( e ).map( t => {
            const n = this.getRoute( t ),
              a = new m.a( {
                name: n.name,
                pattern: n.pattern,
                condition: n.condition,
                isTransition: n.isTransition
              } );
            return a.component = e[ t ], a
          } )
        }
        getRoute( e ) {
          const {
            namedRoutes: t
          } = this.props, n = t[ e ];
          if ( !n ) throw new Error( "Unknown route name: " + e );
          return n
        }
        matchAndRenderComponent( e ) {
          const {
            notFound: t,
            routeComponents: n
          } = this.props;
          if ( null === e ) return t ? l.a.createElement( t ) : null; {
            window.performance.mark( "CFP-63.route-component-render" );
            const t = this.memoizedRouteComponents.get( n[ e.name ] );
            return t ? l.a.createElement( t, e ) : null
          }
        }
        getHref() {
          return location.pathname + location.search
        }
        render() {
          const {
            children: e
          } = this.props, t = this.getRoutesContextValue();
          return l.a.createElement( b.a.Provider, {
            value: t
          }, this.matchAndRenderComponent( t.match ), l.a.createElement( u.Fragment, null, e ), l.a.createElement( f.a, null ) )
        }
      }, Object( o.a )( a, "defaultProps", {
        routeComponents: {},
        namedRoutes: {},
        onPageReload: O
      } ), r ) )
    },
    "7beP": function ( e, t, n ) {
      "use strict";
      n.d( t, "a", ( function () {
        return c
      } ) );
      var a = n( "ERkP" ),
        r = n( "Ua4J" ),
        o = n( "DlIL" ),
        s = n( "+6Tk" );

      function c() {
        const {
          getQueryParams: e
        } = Object( a.useContext )( r.a ), t = Object( s.a )( "confluence.frontend.enable.embedded.experience" ), n = "true" === Object( o.a )( e(), "embedded" );
        return !!t && n
      }
    },
    "7fQR": function ( e ) {
      e.exports = JSON.parse( '[{"possibleTypes":[{"name":"ActivitiesTransitionedEvent"},{"name":"ActivitiesCommentedEvent"}],"kind":"UNION","name":"ActivitiesEventExtension"},{"possibleTypes":[{"name":"UnknownUser"},{"name":"KnownUser"},{"name":"Anonymous"},{"name":"User"}],"kind":"INTERFACE","name":"Person"},{"possibleTypes":[{"name":"AtlassianAccountUser"},{"name":"AppUser"},{"name":"CustomerUser"}],"kind":"INTERFACE","name":"GatewayUser"},{"possibleTypes":[{"name":"CreateUpdate"},{"name":"EditUpdate"},{"name":"CommentUpdate"}],"kind":"INTERFACE","name":"AllUpdatesFeedEvent"},{"possibleTypes":[{"name":"ActivitiesJiraIssue"}],"kind":"UNION","name":"ActivitiesObjectExtension"},{"possibleTypes":[{"name":"ActivityItem"},{"name":"ActivitiesObject"},{"name":"ActivitiesItem"},{"name":"ActivityObject"},{"name":"ActivitiesEvent"}],"kind":"INTERFACE","name":"Node"},{"possibleTypes":[{"name":"MediaAttachment"},{"name":"MediaAttachmentError"}],"kind":"UNION","name":"MediaAttachmentOrError"},{"possibleTypes":[{"name":"InlineComment"},{"name":"FooterComment"}],"kind":"INTERFACE","name":"CommentLocation"},{"possibleTypes":[{"name":"AppInstallationResponse"},{"name":"GenericMutationResponse"},{"name":"CreateAppDeploymentResponse"},{"name":"CreateContainerTokenResponse"},{"name":"CreateAppResponse"},{"name":"AppUninstallationResponse"},{"name":"InvokeExtensionResponse"},{"name":"CreateAppDeploymentUrlResponse"},{"name":"InvokeAuxEffectsResponse"}],"kind":"INTERFACE","name":"MutationResponse"},{"possibleTypes":[{"name":"AppDeploymentLogEvent"},{"name":"AppDeploymentTransitionEvent"}],"kind":"INTERFACE","name":"AppDeploymentEvent"},{"possibleTypes":[{"name":"FeedEventCreate"},{"name":"FeedEventEdit"},{"name":"FeedEventComment"}],"kind":"INTERFACE","name":"FeedEvent"},{"possibleTypes":[{"name":"AtlassianAccountUser"},{"name":"CustomerUser"}],"kind":"INTERFACE","name":"LocalizationContext"},{"possibleTypes":[{"name":"ConfluenceContentSearchResult"},{"name":"ConfluenceSpaceSearchResult"}],"kind":"INTERFACE","name":"ConfluenceSearchResult"}]' )
    },
    "7jXy": function ( e, t, n ) {
      "use strict";

      function a( e ) {
        if ( "undefined" != typeof window && void 0 !== window.WebSocket ) try {
          return new window.WebSocket( e, "graphql-ws" ).close(), !0
        } catch ( t ) {}
        return !1
      }
      n.d( t, "a", ( function () {
        return a
      } ) )
    },
    "7kiZ": function ( e, t, n ) {
      "use strict";
      n.d( t, "a", ( function () {
        return c
      } ) );
      var a = n( "Czhu" ),
        r = n( "d9aE" ),
        o = n( "cH76" ),
        s = n( "syT9" );

      function c( {
        query: e,
        variables: t,
        fetchPolicy: n = "cache-first",
        context: c
      } ) {
        const i = Object( s.b )( e ),
          u = window.GLOBAL_APOLLO_CLIENT;
        let l;
        if ( "string" == typeof e ) {
          if ( !i ) return Promise.resolve( s.a )
        } else {
          if ( !u ) return Promise.resolve( s.a );
          if ( l = {
              query: e,
              variables: t,
              errorPolicy: "all",
              fetchPolicy: n,
              context: Object( a.a )( {
                single: !0
              }, c )
            }, !i ) return u.query( l )
        }
        return Object( o.a )().load( {
          name: i,
          variables: t
        }, () => l ? u.query( l ) : fetch( "/cgraphql?q=QueryPreloader_" + i, Object( r.a )( {
          method: "POST",
          credentials: "include",
          referrerPolicy: "same-origin",
          headers: Object( a.a )( {
            "X-APOLLO-OPERATION-NAME": i,
            "Content-Type": "application/json"
          }, c && c.headers ),
          body: JSON.stringify( {
            query: e,
            variables: t
          } )
        } ) ).then( e => e.ok ? e.json() : s.a ).catch( () => s.a ) )
      }
    },
    "7tVi": function ( e, t, n ) {
      "use strict";
      n.r( t );
      var a = n( "daKX" );
      n.d( t, "getLogger", ( function () {
        return a.a
      } ) )
    },
    "7yUP": function ( e, t, n ) {
      "use strict";
      n.d( t, "a", ( function () {
        return u
      } ) ), n.d( t, "b", ( function () {
        return l
      } ) ), n.d( t, "c", ( function () {
        return d
      } ) );
      n( "veKZ" );
      var a = n( "aGtI" ),
        r = n.n( a ),
        o = n( "BlJA" ),
        s = n.n( o ),
        c = n( "Jygk" ),
        i = n.n( c );
      const u = ( e, t, n = [] ) => {
          if ( e === t ) return !0;
          const a = r()( s()( e ), s()( t ) );
          for ( const r of a )
            if ( !( n.indexOf( r ) >= 0 ) && e[ r ] !== t[ r ] ) return !1;
          return !0
        },
        l = e => {
          0
        },
        d = e => {
          i.a.performance && i.a.performance.mark( e )
        }
    },
    "88kn": function ( e, t, n ) {
      "use strict";
      n.d( t, "c", ( function () {
        return r
      } ) ), n.d( t, "d", ( function () {
        return o
      } ) ), n.d( t, "a", ( function () {
        return s
      } ) ), n.d( t, "b", ( function () {
        return c
      } ) );
      var a = n( "RfuI" );
      const r = Object( a.a )( {
          id: "2+kSX",
          name: "SuperAdminBanner",
          loader: () => Promise.all( [ n.e( "atlaskit~66e23772" ), n.e( "vendors~4134d62c" ), n.e( "super-admin-banner~b59ad437" ) ] ).then( n.bind( null, "OC/i" ) ).then( ( {
            SuperAdminBanner: e
          } ) => e )
        } ),
        o = ( Object( a.a )( {
          id: "aY9oF",
          name: "SuperAdminExpiration",
          loader: () => n.e( "super-admin-expiration~dade3008" ).then( n.bind( null, "IkOR" ) ).then( ( {
            SuperAdminExpiration: e
          } ) => e )
        } ), Object( a.a )( {
          id: "lesUv",
          name: "SuperAdminEntryPoint",
          loader: () => Promise.all( [ n.e( "atlaskit~66e23772" ), n.e( "vendors~4134d62c" ), n.e( "super-admin-entry-point~b59ad437" ) ] ).then( n.bind( null, "0ipR" ) ).then( ( {
            SuperAdminEntryPoint: e
          } ) => e )
        } ) ),
        s = Object( a.a )( {
          id: "NTOBL",
          name: "AdminKeyUpSell",
          loader: () => Promise.all( [ n.e( "atlaskit~66e23772" ), n.e( "afp~af75c846" ), n.e( "vendors~4134d62c" ), n.e( 26 ), n.e( "admin-key-up-sell~b59ad437" ) ] ).then( n.bind( null, "vDbt" ) ).then( ( {
            AdminKeyUpSell: e
          } ) => e )
        } ),
        c = ( Object( a.a )( {
          id: "AYGhs",
          name: "SuperAdminSatisfactionSurvey",
          loader: () => n.e( "super-admin-satisfaction-survey~0a2efa80" ).then( n.bind( null, "yJma" ) ).then( ( {
            SuperAdminSatisfactionSurvey: e
          } ) => e )
        } ), Object( a.a )( {
          id: "e/0t3",
          name: "PremiumAdminEvent",
          loader: () => n.e( "premium-admin-event~0ae2caf4" ).then( n.bind( null, "Q+Jq" ) ).then( ( {
            PremiumAdminEvent: e
          } ) => e )
        } ) )
    },
    "8Gb+": function ( e, t, n ) {
      "use strict";
      n.d( t, "a", ( function () {
        return r
      } ) );
      var a = n( "H5qd" );
      const r = n.n( a ).a `query ThemeQuery{lookAndFeel{custom{horizontalHeader{backgroundColor primaryNavigation{highlightColor}}}}}`
    },
    "8TdO": function ( e, t, n ) {
      "use strict";
      var a = n( "qrFu" ),
        r = n( "3U3H" ),
        o = n( "W1KW" ),
        s = n( "P1TJ" ),
        c = n( "HC8e" ),
        i = n( "Jygk" ),
        u = n.n( i ),
        l = n( "+1Gz" ),
        d = n( "kC4U" ),
        E = n( "p0L4" ),
        p = n( "qjoD" ),
        f = n( "yuV4" );
      const m = new r.ApolloLink( ( e, t ) => ( delete e.extensions, t( e ) ) );
      var b = n( "dGuD" ),
        O = n( "lTsX" ),
        h = n( "NMWM" );
      const g = new r.ApolloLink( ( e, t ) => {
        const {
          allowOnExternalPage: n = !1
        } = e.getContext();
        return n || !Object( h.a )() ? t( e ) : new O.a( e => {
          e.complete()
        } )
      } );
      var _ = n( "wKA4" );
      const T = new r.ApolloLink( ( e, t ) => {
        const {
          asSuperAdmin: n = !0
        } = e.getContext();
        return n && Object( _.a )() && e.query.definitions.forEach( e => {
          if ( !( "operation" in e ) ) return;
          const {
            operation: t,
            directives: n
          } = e;
          if ( "query" === t || "mutation" === t ) {
            if ( !( null == n ? void 0 : n.some( e => "asSuperAdmin" === e.name.value ) ) ) {
              const e = {
                arguments: [],
                kind: "Directive",
                name: {
                  kind: "Name",
                  value: "asSuperAdmin"
                }
              };
              null == n || n.push( e )
            }
          }
        } ), t( e )
      } );
      var I = n( "fvis" );
      let S = !1;
      const C = new I.a( {
        delay: {
          initial: 500,
          max: 5e3,
          jitter: !0
        },
        attempts: {
          max: 2,
          retryIf: ( e, t ) => !!S && ( !t.query.definitions.some( e => "operation" in e && "mutation" === e.operation ) && ( e instanceof E.a && ( ( ( e, t ) => {
            Promise.resolve().then( n.bind( null, "cld1" ) ).then( ( {
              getAnalyticsWebClient: n
            } ) => {
              n().then( n => {
                n.sendOperationalEvent( {
                  source: "ui",
                  actionSubject: "graphql",
                  action: "errored",
                  attributes: {
                    eventName: "network.error.retry",
                    queryName: t.operationName,
                    priorRetries: t.getContext().networkRetries || 0,
                    message: e.message
                  }
                } )
              } )
            } )
          } )( e, t ), t.setContext( e => ( {
            networkRetries: ( e.networkRetries || 0 ) + 1
          } ) ), !0 ) ) )
        }
      } );
      var A = n( "erDC" ),
        y = n( "GBQy" ),
        R = n( "ZcCF" ),
        v = n( "F4Ur" );
      var P = n( "94Z3" );
      let N = !1;
      const j = new I.a( {
        delay: {
          initial: 500,
          max: 5e3,
          jitter: !0
        },
        attempts: {
          max: 2,
          retryIf: ( e, t ) => !!N && ( e instanceof P.a && t.query.definitions.some( e => "operation" in e && "mutation" === e.operation ), !1 )
        }
      } );
      n( "zjfJ" ), n( "TqoN" ), n( "daKX" );
      const D = () => new r.ApolloLink( ( e, t ) => t( e ) );
      var L = n( "n3bg" ),
        w = n( "7fQR" );
      const k = new c.b( {
          introspectionQueryResultData: {
            __schema: {
              types: w
            }
          }
        } ),
        U = e => "WebItem" === e.__typename ? e.completeKey || e.id : null !== e.id ? Object( c.c )( e ) : void 0;
      var M = n( "x5mk" ),
        F = n( "aykN" ),
        G = n( "H5qd" );
      const x = n.n( G ).a `directive@client on FIELD extend type Query{network:ClientNetwork}type ClientNetwork{status:ClientNetworkStatus}enum ClientNetworkStatus{ONLINE OFFLINE RATE_LIMITED SESSION_EXPIRED}`,
        H = Object( F.a )(),
        V = () => new c.a( {
          fragmentMatcher: k,
          dataIdFromObject: U
        } ),
        B = ( e, t ) => {
          e = u.a.GLOBAL_APOLLO_CLIENT_URI || e;
          const n = [].concat( "string" == typeof t.body ? JSON.parse( t.body ) : [] ),
            a = n.map( ( {
              operationName: e,
              variables: t
            } ) => "WebItemLocationQuery" === e ? `${e}:${(null==t?void 0:t.location)||((null==t?void 0:t.locations)||[]).join(",")||""}` : e ),
            r = a.join( "," );
          return t.headers || ( t.headers = {} ), Object( M.a )( t.headers, "X-APOLLO-OPERATION-NAME", r ), t.referrerPolicy = t.referrerPolicy || "same-origin", f.a.run( "fetch:" + a, () => ( n.some( e => e.query.includes( "@SLA" ) ) ? H : d.a )( `${e}?q=${r}`, t ) )
        },
        K = ( {
          experimentalSchemaLinkOverride: e,
          ccGraphqlSchemaLinkOverride: t
        } ) => {
          const a = Object( r.split )( e => e.getContext().single, new o.a( {
              uri: "/cgraphql",
              credentials: "same-origin",
              fetch: B
            } ), new s.a( {
              uri: "/cgraphql",
              credentials: "same-origin",
              fetch: B
            } ) ),
            c = [ Object( p.a )(), m, T, Object( b.b )(), j, C, g ];
          let i;
          return i = Object( r.from )( c ).split( M.e, Object( L.c )(), a ), Object( r.from )( [ Object( A.a )( ( {
            operation: e,
            graphQLErrors: t,
            networkError: n
          } ) => {
            const {
              response: a
            } = e.getContext(), r = Object( R.a )( a );
            t && t.length > 0 && t.forEach( t => {
              Object( y.f )( t, {
                operationName: e.operationName,
                traceId: r
              } ), Object( v.b )( t )
            } ), n && ( Object( y.f )( n, {
              operationName: e.operationName,
              traceId: r
            } ), Object( v.b )( n ) )
          } ), D() ] ).split( e => Object( M.c )( e ), e || new r.ApolloLink( e => new O.a( t => {
            Promise.all( [ n.e( "vendors~4134d62c" ), n.e( 106 ), n.e( "experimental-schema~b59ad437" ) ] ).then( n.bind( null, "6kor" ) ).then( ( {
              getSchemaLink: n
            } ) => {
              Object( r.execute )( n(), e ).subscribe( {
                next: t.next.bind( t ),
                error: t.error.bind( t ),
                complete: t.complete.bind( t )
              } )
            } )
          } ) ), t || i )
        },
        W = V();
      n.d( t, "b", ( function () {
        return $
      } ) ), n.d( t, "a", ( function () {
        return Y
      } ) );
      let q = null;

      function $() {
        return window.GLOBAL_APOLLO_CLIENT ? window.GLOBAL_APOLLO_CLIENT : ( q || ( q = ( ( e = {} ) => {
          const t = u.a.__APOLLO_STATE__,
            n = e.initializeNewCache ? V() : W;
          t && n.restore( JSON.parse( l.a.decode( t ) ) );
          const r = new a.a( {
            ssrMode: Boolean( !1 ),
            link: K( e ),
            typeDefs: x,
            cache: n
          } );
          return e.ccGraphqlSchemaLinkOverride || Object( b.c )( r.cache, b.a.ONLINE ), d.a.subscribe( ( e, t ) => {
            e ? Object( b.c )( r.cache, b.a.ONLINE ) : t instanceof E.a && !t.ignore && Object( b.c )( r.cache, b.a.OFFLINE )
          } ), r
        } )() ), window.GLOBAL_APOLLO_CLIENT = q, q )
      }

      function Y() {
        S = !0, N = !0
      }
    },
    "8f+1": function ( e, t, n ) {
      "use strict";
      n.d( t, "a", ( function () {
        return r
      } ) );
      n( "ERkP" );
      var a = n( "RfuI" );
      const r = Object( a.a )( {
          id: "sGa1n",
          name: "LegacyCreateDialogCssOverridesLoader",
          loader: () => n.e( "legacy-components~21833f8f" ).then( n.bind( null, "rtka" ) )
        } ),
        o = Object( a.a )( {
          id: "6MCnT",
          name: "LegacyCssOverridesLoader",
          loader: () => n.e( "legacy-components~21833f8f" ).then( n.bind( null, "5re4" ) )
        } );
      t.b = o
    },
    "8q0p": function ( e, t, n ) {
      "use strict";
      n.d( t, "a", ( function () {
        return r
      } ) );
      var a = n( "H5qd" );
      const r = n.n( a ).a `query featureDiscovery{featureDiscovery{pluginKey featureKey userKey date}}`
    },
    "9+ZM": function ( e, t, n ) {
      "use strict";
      n.d( t, "a", ( function () {
        return r
      } ) );
      var a = n( "RfuI" );
      const r = Object( a.a )( {
        id: "StDkG",
        name: "TemplateGallery",
        loader: async () => ( await Promise.all( [ n.e( "atlaskit~66e23772" ), n.e( "vendors~4134d62c" ), n.e( 0 ), n.e( 2 ), n.e( 3 ), n.e( 13 ), n.e( 33 ), n.e( 51 ), n.e( 121 ), n.e( 128 ), n.e( "confluence-template-gallery~b59ad437" ) ] ).then( n.bind( null, "nlTe" ) ) ).GoToTemplateGalleryIfEnabled
      } )
    },
    "94Z3": function ( e, t, n ) {
      "use strict";
      n.d( t, "a", ( function () {
        return s
      } ) );
      var a = n( "zjfJ" ),
        r = n( "ZcCF" ),
        o = n( "NnCn" );
      class s extends o.a {
        constructor( e, t ) {
          super( e ), Object( a.a )( this, "response", void 0 ), Object( a.a )( this, "name", "BadStatusError" ), this.response = t
        }
        get traceId() {
          return Object( r.a )( this.response )
        }
        static isBadStatusError( e ) {
          return e instanceof s
        }
      }
    },
    "97bS": function ( e, t, n ) {
      "use strict";
      n.d( t, "a", ( function () {
        return r
      } ) ), n.d( t, "c", ( function () {
        return o
      } ) ), n.d( t, "b", ( function () {
        return s
      } ) ), n.d( t, "h", ( function () {
        return c
      } ) ), n.d( t, "g", ( function () {
        return i
      } ) ), n.d( t, "f", ( function () {
        return u
      } ) ), n.d( t, "e", ( function () {
        return l
      } ) ), n.d( t, "d", ( function () {
        return d
      } ) );
      var a = n( "yS9+" );
      const r = "INTEND_TO_UNFAVOURITE",
        o = Object( a.b )( r ),
        s = "UNDO_UNFAVOURITE",
        c = Object( a.b )( s ),
        i = ( Object( a.b )( "RESET_RECENTLY_UPDATED_CONTENT" ), Object( a.b )( "RESET_POPULAR_CONTENT" ), Object( a.b )( "RESET_RECENTLY_VISITED_CONTENT" ) ),
        u = Object( a.b )( "RESET_RECENT_WORK_CONTENT" ),
        l = Object( a.b )( "RESET_FAVOURITED_CONTENT" ),
        d = Object( a.b )( "RESET_DRAFT_CONTENT" )
    },
    "9IcS": function ( e, t, n ) {
      "use strict";
      n.d( t, "e", ( function () {
        return a
      } ) ), n.d( t, "d", ( function () {
        return r
      } ) ), n.d( t, "c", ( function () {
        return o
      } ) ), n.d( t, "b", ( function () {
        return s
      } ) ), n.d( t, "a", ( function () {
        return c
      } ) );
      const a = "product/home",
        r = "product/addons",
        o = "container/home",
        s = "container/blog",
        c = "admin/home"
    },
    "9btq": function ( e, t, n ) {
      "use strict";
      n.d( t, "a", ( function () {
        return a
      } ) );
      class a extends Error {
        constructor( e ) {
          super( e ), this.name = "ExperienceTimeoutError"
        }
      }
    },
    "9m+Y": function ( e, t, n ) {
      "use strict";
      var a = n( "ERkP" ),
        r = n.n( a ),
        o = n( "L21V" ),
        s = n( "O0Ao" );
      async function c( e ) {
        const t = Boolean( e.then ) ? e : Promise.resolve( e );
        const n = await t;
        return function ( e ) {
          return e && e.default
        }( n ) ? n.default : n
      }
      const i = [ "zh-TW", "zh-HK", "zh-MO", "zh-Hant" ];

      function u( e ) {
        if ( i.includes( e ) ) return c( n.e( "react-intl.en~3b69ac18" ).then( n.t.bind( null, "onLz", 7 ) ) ).then( o.e );
        switch ( e.split( "-" )[ 0 ] ) {
          case "fr":
            return c( n.e( "react-intl.fr~19b5e90b" ).then( n.t.bind( null, "v/vH", 7 ) ) ).then( o.e );
          case "de":
            return c( n.e( "react-intl.de~e4d713b6" ).then( n.t.bind( null, "79AS", 7 ) ) ).then( o.e );
          case "ja":
            return c( n.e( "react-intl.ja~0d7c3c67" ).then( n.t.bind( null, "dBXE", 7 ) ) ).then( o.e );
          case "es":
            return c( n.e( "react-intl.es~1b66b7c6" ).then( n.t.bind( null, "31eB", 7 ) ) ).then( o.e );
          case "ko":
            return c( n.e( "react-intl.ko~afc97be5" ).then( n.t.bind( null, "Afbm", 7 ) ) ).then( o.e );
          case "pt":
            return c( n.e( "react-intl.pt~4d04c5cd" ).then( n.t.bind( null, "Q8JX", 7 ) ) ).then( o.e );
          case "ru":
            return c( n.e( "react-intl.ru~6b5a9147" ).then( n.t.bind( null, "QWpw", 7 ) ) ).then( o.e );
          case "cs":
            return c( n.e( "react-intl.cs~580e113d" ).then( n.t.bind( null, "u3Ob", 7 ) ) ).then( o.e );
          case "da":
            return c( n.e( "react-intl.da~34f0c743" ).then( n.t.bind( null, "QbN0", 7 ) ) ).then( o.e );
          case "et":
            return c( n.e( "react-intl.et~34ce99cc" ).then( n.t.bind( null, "RekC", 7 ) ) ).then( o.e );
          case "fi":
            return c( n.e( "react-intl.fi~9d5fea8e" ).then( n.t.bind( null, "nj56", 7 ) ) ).then( o.e );
          case "hu":
            return c( n.e( "react-intl.hu~42eba41a" ).then( n.t.bind( null, "Ca3h", 7 ) ) ).then( o.e );
          case "is":
            return c( n.e( "react-intl.is~ccfeec73" ).then( n.t.bind( null, "Jqg4", 7 ) ) ).then( o.e );
          case "it":
            return c( n.e( "react-intl.it~6eeb1eca" ).then( n.t.bind( null, "NmCo", 7 ) ) ).then( o.e );
          case "nl":
            return c( n.e( "react-intl.nl~103c2880" ).then( n.t.bind( null, "E+g9", 7 ) ) ).then( o.e );
          case "no":
            return c( n.e( "react-intl.no~e337a318" ).then( n.t.bind( null, "6RGm", 7 ) ) ).then( o.e );
          case "pl":
            return c( n.e( "react-intl.pl~38e60475" ).then( n.t.bind( null, "hxZM", 7 ) ) ).then( o.e );
          case "ro":
            return c( n.e( "react-intl.ro~2e542525" ).then( n.t.bind( null, "jFdM", 7 ) ) ).then( o.e );
          case "sk":
            return c( n.e( "react-intl.sk~d574fe41" ).then( n.t.bind( null, "otr4", 7 ) ) ).then( o.e );
          case "sv":
            return c( n.e( "react-intl.sv~646891ad" ).then( n.t.bind( null, "n5Bu", 7 ) ) ).then( o.e );
          case "zh":
            return c( n.e( "react-intl.zh~42571c3f" ).then( n.t.bind( null, "+bh6", 7 ) ) ).then( o.e );
          default:
            return c( n.e( "react-intl.en~3b69ac18" ).then( n.t.bind( null, "onLz", 7 ) ) ).then( o.e )
        }
      }
      const l = e => Object( s.a )( [ e ] ) ? Promise.resolve() : n.e( "intl-polyfill~493df0b3" ).then( n.t.bind( null, "vmlO", 7 ) ).then( () => ( e => {
          switch ( e ) {
            case "en-GB":
              return c( n.e( "intl-polyfill.en-GB~8d142399" ).then( n.t.bind( null, "f9Qi", 7 ) ) );
            case "fr-FR":
              return c( n.e( "intl-polyfill.fr-FR~620decec" ).then( n.t.bind( null, "ESB7", 7 ) ) );
            case "de-DE":
              return c( n.e( "intl-polyfill.de-DE~e479a0bf" ).then( n.t.bind( null, "cmlg", 7 ) ) );
            case "ja-JP":
              return c( n.e( "intl-polyfill.ja-JP~90b1b4d2" ).then( n.t.bind( null, "O4k6", 7 ) ) );
            case "es-ES":
              return c( n.e( "intl-polyfill.es-ES~3e8a56e3" ).then( n.t.bind( null, "J/bq", 7 ) ) );
            case "ko-KR":
              return c( n.e( "intl-polyfill.ko-KR~0907e49f" ).then( n.t.bind( null, "EIC5", 7 ) ) );
            case "pt-BR":
              return c( n.e( "intl-polyfill.pt-BR~2215c419" ).then( n.t.bind( null, "vTxU", 7 ) ) );
            case "pt-PT":
              return c( n.e( "intl-polyfill.pt-PT~496967f8" ).then( n.t.bind( null, "xnSb", 7 ) ) );
            case "ru-RU":
              return c( n.e( "intl-polyfill.ru-RU~4aa2ca73" ).then( n.t.bind( null, "kllB", 7 ) ) );
            case "cs-CZ":
              return c( n.e( "intl-polyfill.cs-CZ~f9447e05" ).then( n.t.bind( null, "Rt68", 7 ) ) );
            case "da-DK":
              return c( n.e( "intl-polyfill.da-DK~60948571" ).then( n.t.bind( null, "1RQn", 7 ) ) );
            case "et-EE":
              return c( n.e( "intl-polyfill.et-EE~e4e18732" ).then( n.t.bind( null, "/eam", 7 ) ) );
            case "fi-FI":
              return c( n.e( "intl-polyfill.fi-FI~c77a2d75" ).then( n.t.bind( null, "Qvet", 7 ) ) );
            case "hu-HU":
              return c( n.e( "intl-polyfill.hu-HU~109a22d9" ).then( n.t.bind( null, "xBEe", 7 ) ) );
            case "is-IS":
              return c( n.e( "intl-polyfill.is-IS~22d6cf35" ).then( n.t.bind( null, "3bx+", 7 ) ) );
            case "it-IT":
              return c( n.e( "intl-polyfill.it-IT~5a1fc150" ).then( n.t.bind( null, "I7Ja", 7 ) ) );
            case "nl-NL":
              return c( n.e( "intl-polyfill.nl-NL~83b8507a" ).then( n.t.bind( null, "8aZ9", 7 ) ) );
            case "no-NO":
              return c( n.e( "intl-polyfill.no-NO~797a257e" ).then( n.t.bind( null, "s549", 7 ) ) );
            case "pl-PL":
              return c( n.e( "intl-polyfill.pl-PL~64abec0d" ).then( n.t.bind( null, "y+Y0", 7 ) ) );
            case "ro-RO":
              return c( n.e( "intl-polyfill.ro-RO~683104ad" ).then( n.t.bind( null, "YEVk", 7 ) ) );
            case "sk-SK":
              return c( n.e( "intl-polyfill.sk-SK~f00830ce" ).then( n.t.bind( null, "nKCc", 7 ) ) );
            case "sv-SE":
              return c( n.e( "intl-polyfill.sv-SE~d0e3b79c" ).then( n.t.bind( null, "LTJW", 7 ) ) );
            case "zh-CN":
              return c( n.e( "intl-polyfill.zh-CN~25b3c628" ).then( n.t.bind( null, "kBQQ", 7 ) ) );
            default:
              return c( n.e( "intl-polyfill.en-US~7827a939" ).then( n.t.bind( null, "Lk7s", 7 ) ) )
          }
        } )( e ) ),
        d = e => Promise.all( [ l( e ), u( e ) ] ),
        E = e => {
          switch ( e ) {
            case "fr-FR":
              return c( n.e( "translations.fr-FR~493df0b3" ).then( n.t.bind( null, "Loll", 3 ) ) );
            case "de-DE":
              return c( n.e( "translations.de-DE~493df0b3" ).then( n.t.bind( null, "DwSM", 3 ) ) );
            case "ja-JP":
              return c( n.e( "translations.ja-JP~493df0b3" ).then( n.t.bind( null, "6cdu", 3 ) ) );
            case "es-ES":
              return c( n.e( "translations.es-ES~493df0b3" ).then( n.t.bind( null, "2q89", 3 ) ) );
            case "ko-KR":
              return c( n.e( "translations.ko-KR~493df0b3" ).then( n.t.bind( null, "YC7C", 3 ) ) );
            case "pt-BR":
              return c( n.e( "translations.pt-BR~493df0b3" ).then( n.t.bind( null, "jvce", 3 ) ) );
            case "pt-PT":
              return c( n.e( "translations.pt-PT~47867d3f" ).then( n.t.bind( null, "WQE5", 3 ) ) );
            case "ru-RU":
              return c( n.e( "translations.ru-RU~493df0b3" ).then( n.t.bind( null, "dcVo", 3 ) ) );
            case "da-DK":
              return c( n.e( "translations.da-DK~493df0b3" ).then( n.t.bind( null, "zO8t", 3 ) ) );
            case "et-EE":
              return c( n.e( "translations.et-EE~493df0b3" ).then( n.t.bind( null, "6iFw", 3 ) ) );
            case "fi-FI":
              return c( n.e( "translations.fi-FI~493df0b3" ).then( n.t.bind( null, "dtV6", 3 ) ) );
            case "hu-HU":
              return c( n.e( "translations.hu-HU~493df0b3" ).then( n.t.bind( null, "yCIb", 3 ) ) );
            case "is-IS":
              return c( n.e( "translations.is-IS~493df0b3" ).then( n.t.bind( null, "tsNR", 3 ) ) );
            case "it-IT":
              return c( n.e( "translations.it-IT~493df0b3" ).then( n.t.bind( null, "PxQZ", 3 ) ) );
            case "nl-NL":
              return c( n.e( "translations.nl-NL~493df0b3" ).then( n.t.bind( null, "d6fC", 3 ) ) );
            case "no-NO":
              return c( n.e( "translations.no-NO~493df0b3" ).then( n.t.bind( null, "7Owp", 3 ) ) );
            case "pl-PL":
              return c( n.e( "translations.pl-PL~493df0b3" ).then( n.t.bind( null, "tvuu", 3 ) ) );
            case "ro-RO":
              return c( n.e( "translations.ro-RO~493df0b3" ).then( n.t.bind( null, "grkN", 3 ) ) );
            case "sk-SK":
              return c( n.e( "translations.sk-SK~493df0b3" ).then( n.t.bind( null, "qPkk", 3 ) ) );
            case "cs-CZ":
              return c( n.e( "translations.cs-CZ~493df0b3" ).then( n.t.bind( null, "/6at", 3 ) ) );
            case "sv-SE":
              return c( n.e( "translations.sv-SE~493df0b3" ).then( n.t.bind( null, "f7cY", 3 ) ) );
            case "zh-CN":
              return c( n.e( "translations.zh-CN~493df0b3" ).then( n.t.bind( null, "V5OS", 3 ) ) );
            case "en-GB":
              return c( n.e( "translations.en-GB~493df0b3" ).then( n.t.bind( null, "k493", 3 ) ) );
            case "en-ZZ":
              return c( Promise.all( [ n.e( "atlaskit~66e23772" ), n.e( "translations.en-ZZ~493df0b3" ) ] ).then( n.t.bind( null, "c3Ed", 3 ) ) );
            default:
              return Promise.resolve( {} )
          }
        };
      const p = {};

      function f() {
        if ( e = p, !Boolean( e.locale && e.messages ) ) throw new Error( "loadTranslation needs to be called before getTranslation" );
        var e;
        return p
      }

      function m( e = ( () => [] ) ) {
        var t, n, a, r, o, s;
        let c = null !== ( t = null !== ( n = null === ( a = window ) || void 0 === a ? void 0 : a.__SSR_LOCALE__ ) && void 0 !== n ? n : null === ( r = window ) || void 0 === r || null === ( o = r.__INITIAL_STATE__ ) || void 0 === o || null === ( s = o.i18n ) || void 0 === s ? void 0 : s.locale ) && void 0 !== t ? t : "en-US";
        return c.includes( "_" ) && ( c = c.replace( "_", "-" ) ), Promise.all( [ d( c ), Promise.all( [ E( c ), ...e( c ) ] ) ] ).then( ( [ e, t ] ) => {
          p.locale = c, p.messages = t.reduce( ( e, t ) => {
            var n;
            t = ( n = t ).default && "string" != typeof n.default ? n.default : n;
            for ( const a in t ) "string" == typeof t[ a ] && ( e[ a ] = t[ a ] );
            return e
          }, {} )
        } )
      }
      const b = ( {
        children: e
      } ) => {
        const {
          locale: t,
          messages: n
        } = f();
        return r.a.createElement( o.d, {
          key: t,
          "data-test-language": t,
          locale: t,
          defaultLocale: "en-US",
          messages: n
        }, e )
      };
      n.d( t, "a", ( function () {
        return b
      } ) ), n.d( t, "c", ( function () {
        return m
      } ) ), n.d( t, "b", ( function () {
        return f
      } ) )
    },
    A79P: function ( e, t, n ) {
      "use strict";
      let a;
      n.d( t, "a", ( function () {
          return a
        } ) ),
        function ( e ) {
          e[ e.DEFAULT = 6e4 ] = "DEFAULT", e[ e.CREATE_DIALOG_LOAD = 6e4 ] = "CREATE_DIALOG_LOAD", e[ e.MACRO_LOAD = 6e4 ] = "MACRO_LOAD", e[ e.EDITOR_LOAD = 9e4 ] = "EDITOR_LOAD", e[ e.EDITOR_PUBLISH = 6e4 ] = "EDITOR_PUBLISH", e[ e.TEMPLATE_EDITOR_LOAD = 9e4 ] = "TEMPLATE_EDITOR_LOAD", e[ e.TEMPLATE_EDITOR_PUBLISH = 6e4 ] = "TEMPLATE_EDITOR_PUBLISH", e[ e.IN_EDITOR_TEMPLATE_PANEL_LOAD = 2e4 ] = "IN_EDITOR_TEMPLATE_PANEL_LOAD", e[ e.NAVIGATION_LOAD = 3e4 ] = "NAVIGATION_LOAD", e[ e.PAGE_LOAD = 6e4 ] = "PAGE_LOAD", e[ e.SPACE_DIRECTORY = 6e4 ] = "SPACE_DIRECTORY"
        }( a || ( a = {} ) )
    },
    "AeT/": function ( e, t, n ) {
      "use strict";
      ( function ( e ) {
        n.d( t, "a", ( function () {
          return m
        } ) );
        var a = n( "OsfY" ),
          r = n( "kD2R" ),
          o = n( "Q1J/" ),
          s = n.n( o ),
          c = n( "bfgX" ),
          i = n( "FuAq" ),
          u = n( "kOun" ),
          l = n( "vbsf" ),
          d = n( "bFAF" ),
          E = n( "TbBM" ),
          p = n( "cokx" ),
          f = n( "5MdE" );

        function m( t = {} ) {
          "function" == typeof e.__REDUX_DEVTOOLS_EXTENSION__ && e.__REDUX_DEVTOOLS_EXTENSION__();
          const n = Object( i.a )();
          return Object( a.compose )( Object( a.applyMiddleware )( s.a, u.a, d.a, E.a ), Object( a.applyMiddleware )( Object( r.routerMiddleware )( n ) ), Object( a.applyMiddleware )( Object( l.a )( ( {
            scope: e,
            name: t,
            data: n
          } ) => {
            const a = e ? `${e}.${t}` : t;
            Object( c.b )( "analytics", {
              name: a,
              data: n
            } )
          } ) ) )( a.createStore )( Object( p.a )( {}, n ), Object( f.a )( e, t ) )
        }
      } ).call( this, n( "fRV1" ) )
    },
    Al9w: function ( e, t, n ) {
      "use strict";
      var a = n( "RNvQ" ),
        r = n.n( a ),
        o = n( "hqKg" ),
        s = n( "Svze" ),
        c = n( "ROYt" );
      const i = Object( o.createSelector )( e => e.views.dashboard.viewModel.get( "tenantId", null ), e => e.meta.get( "atl-token", null ), ( e, t ) => Object( s.Map )( {
        tenantId: e,
        atlToken: t
      } ) );
      let u = Object( s.Map )( {} );
      var l = r()( ( function ( e ) {
        const t = i( e.getState() );
        u !== t && ( u = t, c.a.configure( t.toJS() ) )
      } ), 500 );

      function d( e ) {
        e.subscribe( () => {
          l( e )
        } ), l( e )
      }
      n.d( t, "a", ( function () {
        return d
      } ) )
    },
    Aqh1: function ( e, t, n ) {
      "use strict";
      var a = n( "Czhu" ),
        r = n( "ERkP" ),
        o = n.n( r ),
        s = n( "1U1M" ),
        c = n( "z9P0" ),
        i = n( "a0gl" ),
        u = n( "+6Tk" ),
        l = n( "oayO" ),
        d = n( "SRtI" ),
        E = n( "+FBq" );
      const p = ( e, t, n ) => {
        const r = ( e => ( t, n, r = {} ) => {
            var o;
            const s = null != ( o = t ) && null != ( o = o.data ) && null != ( o = o.updateUserPreferences ) ? o.topNavigationOptedOut : o;
            e && e( {
              type: "sendOperationalEvent",
              data: {
                source: n,
                action: "succeeded",
                actionSubject: "updateUserPreferences",
                attributes: Object( a.a )( Object( a.a )( {}, r ), {}, {
                  backendValue: s
                } )
              }
            } ).fire()
          } )( n ),
          o = ( e => ( t, n, r = {} ) => {
            e && e( {
              type: "sendOperationalEvent",
              data: {
                source: n,
                action: "failed",
                actionSubject: "updateUserPreferences",
                attributes: Object( a.a )( Object( a.a )( {}, r ), {}, {
                  error: t.message
                } )
              }
            } ).fire()
          } )( n ),
          s = t.getBooleanValue( E.b, {
            default: !1,
            shouldTrackExposureEvent: !0
          } );
        let c, i = t.getVariantValue( E.a, {
            default: E.k,
            shouldTrackExposureEvent: !0,
            oneOf: [ E.j, E.e, E.i, E.g, E.f, E.h, E.k ]
          } ),
          u = !1;
        i === E.k && ( i = ( ( e, t ) => {
          let n = !1,
            a = E.j;
          if ( null !== e ) n = !0, a = e ? E.j : E.h;
          else {
            const e = l.a.doesContain;
            e( d.b.NAVIGATION_DEFAULT_OPTED_OUT ) ? ( n = !0, a = E.g ) : e( d.b.NAVIGATION_HOME_OPT_OUT ) && ( n = !0, a = E.i )
          }
          return n && t && t( {
            type: "sendOperationalEvent",
            data: {
              source: "navigationContext",
              action: "fellThrough",
              actionSubject: "appNavigation",
              attributes: {
                correctedExperience: a
              }
            }
          } ).fire(), a
        } )( e, n ) );
        let p = !1;
        i === E.h && !1 !== e && ( !0 === e && ( p = !0 ), e = !1, u = !0, c = !1 );
        const f = i === E.i || i === E.g;
        if ( f && null === e ) {
          const t = i === E.i ? d.b.NAVIGATION_HOME_OPT_OUT : d.b.NAVIGATION_DEFAULT_OPTED_OUT;
          u = !0, c = e = l.a.doesContain( t ) ? l.a.getItemAsBoolean( t ) : t === d.b.NAVIGATION_DEFAULT_OPTED_OUT
        }
        const m = !i || i === E.j || i === E.f || i === E.e || e;
        return {
          isNav2: m,
          isNewLayout: s,
          useUserPreferences: !0,
          optOutEnabled: f,
          optedOut: e,
          navigationVariant: i,
          effectiveVariant: m ? E.j : E.h,
          updateUserPreferencesSucceeded: r,
          updateUserPreferencesFailed: o,
          forcedOptIn: p,
          shouldUpdateUserPreferences: u,
          updateUserPreferencesValue: c
        }
      };
      var f = n( "L5Tm" ),
        m = n( "IOUA" );
      const b = () => {
        const e = Object( r.useContext )( h ),
          {
            shouldUpdateUserPreferences: t,
            updateUserPreferencesValue: n,
            updateUserPreferencesSucceeded: o,
            updateUserPreferencesFailed: c,
            navigationVariant: i
          } = e,
          [ u ] = Object( s.c )( m.a, {
            update( e, {
              data: t
            } ) {
              const n = t && t.updateUserPreferences || {},
                r = e.readQuery( {
                  query: f.a
                } ),
                o = r && r.userPreferences || {};
              e.writeQuery( {
                query: f.a,
                data: {
                  userPreferences: Object( a.a )( Object( a.a )( {}, o ), n )
                }
              } )
            }
          } );
        return Object( r.useEffect )( () => {
          t && void 0 !== n && u( {
            variables: {
              optedOut: n
            }
          } ).then( e => o( e, "navigationContext", {
            localStorageValue: n,
            navigationVariant: i
          } ) ).catch( e => c( e, "navigationContext", {
            localStorageValue: n,
            navigationVariant: i
          } ) )
        }, [] ), null
      };
      n.d( t, "a", ( function () {
        return h
      } ) ), n.d( t, "b", ( function () {
        return _
      } ) ), n.d( t, "c", ( function () {
        return T
      } ) );
      const O = {
          isNav2: !0,
          isNewLayout: !1,
          useUserPreferences: !1,
          optOutEnabled: !1,
          optedOut: !1,
          navigationVariant: E.j,
          effectiveVariant: E.j,
          updateUserPreferencesSucceeded: () => {},
          updateUserPreferencesFailed: () => {},
          forcedOptIn: !1
        },
        h = Object( r.createContext )( O );
      h.displayName = "NavigationContext";
      const g = ( e, t ) => {
          let n, a = !1,
            r = !1;
          e.getVariantValue( "confluence.frontend.app-nav-confluence-jira-evaluators", {
            default: "not-enrolled",
            shouldTrackExposureEvent: !0,
            oneOf: [ "control", "not-enrolled", "variation" ]
          } );
          const o = e.getBooleanValue( E.b, {
            default: !1,
            shouldTrackExposureEvent: !0
          } );
          let s = e.getVariantValue( E.a, {
            default: E.k,
            shouldTrackExposureEvent: !0,
            oneOf: [ E.j, E.e, E.i, E.g, E.f, E.h, E.k ]
          } );
          ( () => {
            const e = d.b.NAVIGATION_HOME_OPT_OUT,
              t = l.a.doesContain;
            e && !t( e ) && l.a.setItem( e, !1 )
          } )(), s === E.k && ( s = ( e => {
            let t = !1,
              n = E.j;
            const a = l.a.doesContain;
            return a( d.b.NAVIGATION_DEFAULT_OPTED_OUT ) ? ( t = !0, n = E.g ) : a( d.b.NAVIGATION_HOME_OPT_OUT ) && ( t = !0, n = E.i ), t && e && e( {
              type: "sendOperationalEvent",
              data: {
                source: "navigationContext",
                action: "fellThrough",
                actionSubject: "appNavigation",
                attributes: {
                  correctedExperience: n
                }
              }
            } ).fire(), n
          } )( t ) );
          const c = s === E.i || s === E.g;
          if ( s ) {
            n = s === E.i ? d.b.NAVIGATION_HOME_OPT_OUT : d.b.NAVIGATION_DEFAULT_OPTED_OUT;
            try {
              l.a.doesContain( n ) && ( a = l.a.getItemAsBoolean( n ), r = !0 )
            } catch ( u ) {
              return {
                isNav2: !0,
                isNewLayout: o,
                useUserPreferences: !1,
                optOutEnabled: !1,
                optedOut: !1,
                optOutKey: n,
                navigationVariant: s,
                effectiveVariant: E.j,
                updateUserPreferencesSucceeded: () => {},
                updateUserPreferencesFailed: () => {},
                forcedOptIn: !1
              }
            }
          }
          const i = !s || s === E.j || s === E.f || s === E.e || a || !r && s === E.g;
          return {
            isNav2: i,
            isNewLayout: o,
            useUserPreferences: !1,
            optOutEnabled: c,
            optedOut: a,
            optOutKey: n,
            navigationVariant: s,
            effectiveVariant: i ? E.j : E.h,
            updateUserPreferencesSucceeded: () => {},
            updateUserPreferencesFailed: () => {},
            forcedOptIn: !1
          }
        },
        _ = ( {
          renderWriteToUserPrefs: e,
          children: t
        } ) => {
          const {
            featureFlagClient: n,
            userId: a
          } = Object( i.a )(), {
            createAnalyticsEvent: r
          } = Object( c.a )(), l = !Boolean( a ), d = n.getBooleanValue( E.d, {
            default: !1,
            shouldTrackExposureEvent: !1
          } ), m = Object( u.c )( E.a ), {
            data: _,
            loading: T
          } = Object( s.d )( f.a, {
            skip: !d || l || [ E.j, E.e, E.f ].includes( m || E.j )
          } ), I = _ && _.userPreferences ? _.userPreferences.topNavigationOptedOut : void 0;
          let S = O;
          return T || ( S = l ? ( ( e, t ) => {
            const n = t.getBooleanValue( E.b, {
                default: !1,
                shouldTrackExposureEvent: !0
              } ),
              a = t.getVariantValue( E.a, {
                default: E.k,
                shouldTrackExposureEvent: !0,
                oneOf: [ E.j, E.e, E.i, E.g, E.f, E.h, E.k ]
              } ),
              r = a === E.j || a === E.f || a === E.e,
              o = r ? E.j : E.h;
            return {
              isNav2: r,
              isNewLayout: n,
              useUserPreferences: !0,
              optOutEnabled: !1,
              optedOut: Boolean( e ),
              navigationVariant: a,
              effectiveVariant: o,
              updateUserPreferencesSucceeded: () => {},
              updateUserPreferencesFailed: () => {},
              forcedOptIn: !1
            }
          } )( I, n ) : d ? p( I, n, r ) : g( n, r ) ), T ? null : o.a.createElement( h.Provider, {
            value: S
          }, e && o.a.createElement( b, null ), t( S ) )
        },
        T = e => t => o.a.createElement( _, null, () => o.a.createElement( e, Object( a.a )( {}, t ) ) )
    },
    AvyD: function ( e, t, n ) {
      "use strict";
      n.d( t, "g", ( function () {
        return p
      } ) ), n.d( t, "e", ( function () {
        return f
      } ) ), n.d( t, "i", ( function () {
        return m
      } ) ), n.d( t, "c", ( function () {
        return h
      } ) ), n.d( t, "b", ( function () {
        return g
      } ) ), n.d( t, "f", ( function () {
        return _
      } ) ), n.d( t, "d", ( function () {
        return T
      } ) ), n.d( t, "h", ( function () {
        return C
      } ) ), n.d( t, "j", ( function () {
        return A
      } ) ), n.d( t, "a", ( function () {
        return y
      } ) );
      var a = n( "hqKg" ),
        r = n( "OzZX" ),
        o = n( "kR5U" ),
        s = n( "f6W2" ),
        c = n( "bQlP" );
      const i = new Date( Date.now() - 1e3 ),
        u = new Date( Date.now() + 3154e7 ),
        l = e => e.spotlightId,
        d = e => e.get( "index" ),
        E = e => e.get( "spotlights" ),
        p = Object( a.createSelector )( [ E, ( e, t ) => l( t ) ], ( e, t ) => {
          for ( let n = 0; n < e.size; n++ )
            for ( let a = 0; a < e.get( n ).size; a++ )
              if ( e.getIn( [ n, a, "id" ] ) === t ) return e.getIn( [ n, a, "requested" ] );
          return !1
        } ),
        f = e => e + ".viewed",
        m = "com.atlassian.confluence.plugins.confluence-frontend-support",
        b = Object( a.createSelector )( [ E, e => e.get( "flow" ) ], ( e, t ) => e.get( t ) ),
        O = Object( a.createSelector )( [ b, d ], ( e, t ) => e.get( t ) ),
        h = Object( a.createSelector )( [ O ], e => e ? e.get( "attributes" ).toJSON() : {} ),
        g = Object( a.createSelector )( [ b ], e => e ? e.map( e => e.get( "id" ) ).toArray() : [] ),
        _ = Object( a.createSelector )( [ e => e.get( "loaded" ) ], e => e ),
        T = Object( a.createSelector )( [ O ], e => e ? e.get( "id" ) : null ),
        I = Object( a.createSelector )( [ e => e.startDate || i, e => e.endDate || u ], ( e, t ) => {
          const n = Date.now();
          return e.getTime() <= n && t.getTime() >= n
        } ),
        S = Object( a.createSelector )( [ ( e, t ) => {
          const n = t.darkFeatureEnabled;
          return !n || Object( o.b )( e, n )
        }, ( e, t ) => {
          const n = t.darkFeatureDisabled;
          return !n || !Object( o.b )( e, n )
        }, e => !Object( o.b )( e, c.b ) ], ( e, t, n ) => e && t && n ),
        C = e => {
          const {
            query: t = {},
            hash: n = ""
          } = ( {} = Object( s.a )( e ) );
          return "" !== n || t.preview
        },
        A = Object( a.createSelector )( [ r.c, ( e, t ) => {
          const n = f( l( t ) );
          return Object( r.b )( e, {
            pluginKey: m,
            featureKey: n
          } )
        }, S, ( e, t ) => I( t ) ], ( e, t, n, a ) => e && !t && n && a ),
        y = Object( a.createSelector )( [ _, d ], ( e, t ) => {
          const n = t + 1 < e;
          return {
            prev: t > 0,
            next: n,
            done: !n
          }
        } )
    },
    BX6b: function ( e, t, n ) {
      "use strict";
      var a = n( "Czhu" ),
        r = n( "zjfJ" ),
        o = n( "daKX" ),
        s = n( "cld1" ),
        c = n( "pa2z" ),
        i = n( "Wagq" ),
        u = n( "lSUb" ),
        l = n( "GBQy" );
      const d = /(https?):\/\/[a-z0-9]+\.cloudfront\.net\//g,
        E = /(https?):\/\/[a-z0-9]+\.cloudfront\.net\/download\//g,
        p = /s\/[^_]+_\/download\//g;
      const f = function ( e, t ) {
        let n = !1,
          a = !1;
        return e.exception && e.exception.values && ( e.exception.values = e.exception.values.map( e => ( e.stacktrace && e.stacktrace.frames && ( e.stacktrace.frames = e.stacktrace.frames.map( e => {
          var t;
          return e.filename && ( n = Boolean( e.filename.match( p ) ), a = Boolean( e.filename.match( E ) ), e.filename = ( t = e.filename ).match( p ) ? t.replace( p, "download/" ).replace( d, "$1://" ) : t ), e
        } ) ), e ) ) ), "object" == typeof ( null == t ? void 0 : t.originalException ) && null !== ( null == t ? void 0 : t.originalException ) && ( e.fingerprint = function ( e ) {
          if ( e.message.startsWith( "Quota exceeded on key" ) || e.message.startsWith( "QuotaExceededError" ) ) return [ "storage-quota-error" ];
          const t = Object( l.a )( e );
          if ( t ) return [ "{{ default }}", t.operationName ];
          const n = Object( l.d )( e );
          return n ? [ "{{ default }}", n.failedSlaExperience ] : void 0
        }( t.originalException ) ), e.logger = n ? "wrm" : a ? "react" : "javascript", e.request && delete e.request.url, delete e.breadcrumbs, e.transaction = "", e
      };

      function m( e ) {
        const t = {};
        return Object( a.a )( {
          release: Object( c.a )().FRONTEND_VERSION,
          dsn: e,
          environment: "CONFLUENCE",
          beforeSend: ( e, t ) => f( e, t ),
          ignoreErrors: [ "Transport destroyed", "Worker was destroyed", "Failed to connect on any of the ADC ports", "Cannot read property 'postMessage' of undefined", "Cannot read property 'postMessage' of null", "d.hide is not a function", /^network error/i, /^network failure/i, "TypeError: Failed to fetch", "ResizeObserver loop limit exceeded", /ResizeObserver loop completed with undelivered notifications/, /Loading chunk (.+?) failed/ ]
        }, t )
      }
      const b = Object( u.default )( async () => {
        return Object( i.c )( Promise.all( [ n.e( "ptc_sentry~2cbb810a" ), n.e( "sentry-browser~87f07f89" ) ] ).then( n.bind( null, "w5RV" ) ).then( ( {
          BrowserClient: e,
          Hub: t
        } ) => new t( new e( m( "https://2d329ea4a8a04cf0b19117b4675b336f@sentry.prod.atl-paas.net/1179" ) ) ) ).catch( () => null ) )
      } );
      class O {
        constructor( e, t ) {
          this.flushIntervalMs = e, this.batchMaxSize = t, Object( r.a )( this, "flushIntervalId", void 0 ), Object( r.a )( this, "onFlushCallbacks", new Set ), Object( r.a )( this, "currentBatch", [] ), Object( r.a )( this, "flush", () => {
            const e = this.renewBatch();
            this.unscheduleFlush(), 0 !== e.length && this.onFlushCallbacks.forEach( t => {
              try {
                t( e )
              } catch ( n ) {
                setTimeout( () => {
                  throw console.error( '"onFlush" callback threw the below error. Please make sure your callbacks have proper error handling' ), n
                }, 0 )
              }
            } )
          } )
        }
        add( e ) {
          this.scheduleFlush(), this.currentBatch.push( e ), this.currentBatch.length >= this.batchMaxSize && this.flush()
        }
        onFlush( e ) {
          if ( !( e instanceof Function ) ) throw new Error( `"onFlush" callback is supposed to be a function; saw ${typeof e} instead` );
          return this.onFlushCallbacks.add( e ), {
            unsubscribe: () => {
              this.onFlushCallbacks.delete( e )
            }
          }
        }
        forceFlush() {
          this.flush()
        }
        renewBatch() {
          const e = this.currentBatch;
          return this.currentBatch = [], e
        }
        scheduleFlush() {
          this.flushIntervalId || ( this.flushIntervalId = window.setInterval( this.flush, this.flushIntervalMs ) )
        }
        unscheduleFlush() {
          this.flushIntervalId && ( window.clearInterval( this.flushIntervalId ), this.flushIntervalId = void 0 )
        }
      }
      const h = Object( o.a )( "CustomMonitoringClient" );
      class g {
        constructor() {
          Object( r.a )( this, "batcher", void 0 ), Object( r.a )( this, "isWindowUnloading", !1 ), Object( r.a )( this, "context", {} ), Object( r.a )( this, "firstErrorInSession", !0 ), Object( r.a )( this, "newSentryEnabled", !1 ), Object( r.a )( this, "standaloneSentryForSLAEnabled", !1 );
          this.batcher = new O( 1e4, 50 ), this.batcher.onFlush( e => {
            this.onBatch( e )
          } );
          window.addEventListener( "pagehide", () => {
            this.isWindowUnloading = !0, this.batcher.forceFlush()
          } )
        }
        enableNewSentry() {
          this.newSentryEnabled = !0
        }
        enableStandaloneSentryForSLAFailures() {
          this.standaloneSentryForSLAEnabled = !0
        }
        submitError( e, t ) {
          const n = Object( l.c )( e ),
            r = Object( l.a )( e ),
            o = Object( l.d )( e ),
            {
              attribution: s
            } = t;
          this.incrementCounter( "jsErrors", [ "attribution:" + s, "firstInSession:" + this.firstErrorInSession, ...r ? [ "queryName:" + r.operationName ] : [] ] ), this.firstErrorInSession = !1;
          const c = e && e.stack && e.message ? e : new Error( e && e.message || String( e ) ),
            i = {
              attribution: s
            };
          this.context.slaExperience && ( i.slaExperience = this.context.slaExperience ), this.context.pageName && ( i.pageName = this.context.pageName ), ( null == o ? void 0 : o.failedSlaExperience ) && ( i.failedSlaExperience = null == o ? void 0 : o.failedSlaExperience ), ( null == r ? void 0 : r.operationName ) && ( i.operationName = null == r ? void 0 : r.operationName ), ( null == o ? void 0 : o.failedSlaExperience ) ? ( this.newSentryEnabled || this.standaloneSentryForSLAEnabled ) && this.logSlaErrorToSentry( c, i ).catch( e => {
            this.logError( e, {
              attribution: "backbone"
            } )
          } ) : this.newSentryEnabled && this.logErrorToSentry( c, i ), this.logError( c, Object( a.a )( Object( a.a )( Object( a.a )( Object( a.a )( {}, t ), n ), r ), o ) )
        }
        submitPerformanceMetric( e, t, n = [] ) {
          this.batcher.add( this.createMetric( {
            type: "timing",
            value: Math.floor( t ),
            name: e + ".performance",
            tags: n
          } ) )
        }
        updateContext( e ) {
          void 0 === e.transitionId || 0 !== e.transitionId && this.context.transitionId === e.transitionId || ( this.incrementCounter( "session", [ "type:" + ( 0 === e.transitionId ? "initial" : "transition" ) ] ), this.firstErrorInSession = !0 ), e.pageName && this.context.pageName !== e.pageName && void 0 !== this.context.pageName && this.batcher.forceFlush(), Object.assign( this.context, e )
        }
        incrementCounter( e, t ) {
          this.batcher.add( this.createMetric( {
            type: "increment",
            name: e,
            value: 1,
            tags: t
          } ) )
        }
        logErrorToSentry( e, t ) {
          Promise.all( [ n.e( "ptc_sentry~2cbb810a" ), n.e( "sentry-browser~87f07f89" ) ] ).then( n.bind( null, "w5RV" ) ).then( ( {
            withScope: n,
            captureException: a
          } ) => {
            n( n => {
              n.setTags( t ), a( e )
            } )
          } ).catch( e => {
            this.logError( e, {
              attribution: "backbone"
            } )
          } )
        }
        async logSlaErrorToSentry( e, t ) {
          let n = null;
          const a = b();
          n = Object( i.b )( a ) ? Object( i.a )( a ) : await a, n && n.withScope( a => {
            a.setTags( t ), n.captureException( e )
          } )
        }
        logError( e, t ) {
          Object( s.getAnalyticsWebClient )().then( n => {
            n.sendOperationalEvent( {
              source: "ui",
              action: "unhandledError",
              actionSubject: "ui",
              attributes: Object( a.a )( {
                error: e.message || String( e ),
                stack: e.stack,
                browserInfo: window.navigator.userAgent,
                releaseId: this.context.releaseId,
                pageName: this.context.pageName
              }, t )
            } )
          } )
        }
        formatContextAsTags() {
          const e = [];
          this.context.pageName && e.push( "page:" + this.context.pageName ), this.context.environment && e.push( "environment:" + this.context.environment ), this.context.tenantId && e.push( "cloudId:" + this.context.tenantId ), this.context.shard && e.push( "shard:" + this.context.shard );
          const t = Object( c.a )().PUBLIC_PATH;
          if ( t ) try {
            const n = new URL( t );
            e.push( "frontendHostname:" + n.hostname )
          } catch ( n ) {
            e.push( "frontendHostname:unknown" )
          }
          return e
        }
        onBatch( e ) {
          const t = {
            type: "metric",
            meta: {
              globalTags: this.formatContextAsTags()
            },
            data: e
          };
          this.send( t )
        }
        send( e ) {
          try {
            h.info `Sending monitoring events: ${e}`;
            const t = "/gateway/api/telemetry",
              n = JSON.stringify( e );
            let a = !1;
            if ( navigator.sendBeacon && ( a = navigator.sendBeacon( t, n ) ), !a ) {
              const e = new XMLHttpRequest,
                a = this.isWindowUnloading;
              e.open( "POST", t, !a ), e.setRequestHeader( "Content-Type", "text/plain;charset=UTF-8" ), e.send( n )
            }
          } catch ( t ) {
            h.error `Sending monitoring data failed: ${t}`
          }
        }
        createMetric( {
          type: e,
          name: t,
          value: n,
          tags: a = []
        } ) {
          return {
            type: e,
            name: t,
            value: n,
            sampleRate: 1,
            tags: a,
            timestamp: ( new Date ).toISOString()
          }
        }
      }
      class _ {
        submitError() {}
        submitPerformanceMetric() {}
        updateContext() {}
        incrementCounter() {}
      }
      let T;
      n.d( t, "c", ( function () {
        return I
      } ) ), n.d( t, "a", ( function () {
        return S
      } ) ), n.d( t, "b", ( function () {
        return C
      } ) );
      const I = () => ( T || ( T = /bot/i.test( window.navigator.userAgent ) ? new _ : new g ), T ),
        S = () => {
          Promise.all( [ n.e( "ptc_sentry~2cbb810a" ), n.e( "sentry-browser~87f07f89" ) ] ).then( n.bind( null, "w5RV" ) ).then( ( {
            init: e
          } ) => {
            e( m( "https://1f56d81aaaae4b1ea5ca08bca6633223@jira-sentry.services.atlassian.com/10" ) )
          } ).catch( () => {} ), T instanceof g && T.enableNewSentry()
        },
        C = () => {
          T instanceof g && T.enableStandaloneSentryForSLAFailures()
        }
    },
    Bijv: function ( e, t, n ) {
      "use strict";
      n.d( t, "a", ( function () {
        return r
      } ) );
      var a = n( "H5qd" );
      const r = n.n( a ).a `fragment byLineUserFragment on Person{type displayName ...on KnownUser{accountId}...on User{accountId}profilePicture{path}}`
    },
    CqAv: function ( e, t, n ) {
      "use strict";
      n.d( t, "c", ( function () {
        return s
      } ) ), n.d( t, "d", ( function () {
        return c
      } ) ), n.d( t, "a", ( function () {
        return i
      } ) ), n.d( t, "b", ( function () {
        return u
      } ) );
      var a = n( "H5qd" ),
        r = n.n( a );
      const o = r.a `fragment PageContentFragment on Content{id type title status metadata{currentuser{favourited{isFavourite}}}space{id key name}}`,
        s = r.a `query RecentlyViewedQuery($cloudId:ID!$first:Int$after:String){activities{myActivities{viewed(filters:[{type:AND arguments:{products:[CONFLUENCE]objectTypes:[PAGE BLOGPOST]cloudIds:[$cloudId]}}]first:$first after:$after){edges{node{id timestamp object{id url content{...PageContentFragment}}}cursor}pageInfo{hasNextPage}}}}}${o}`,
        c = r.a `query RecentlyWorkedOnQuery($cloudId:ID!$first:Int$after:String){activities{myActivities{workedOn(filters:[{type:AND arguments:{products:[CONFLUENCE]objectTypes:[PAGE BLOGPOST]cloudIds:[$cloudId]}}]first:$first after:$after){edges{node{id timestamp object{id url content{...PageContentFragment}}}cursor}pageInfo{hasNextPage}}}}}${o}`,
        i = r.a `query RecentlyDraftedQuery($first:Int$after:String$context:String){search(cql:"type in (page,blogpost) order by lastModified desc" cqlcontext:$context first:$first after:$after){nodes{entityType url content{...PageContentFragment metadata{currentuser{lastcontributed{status when}}}}}pageInfo{hasNextPage endCursor}}}${o}`,
        u = r.a `query RecentlyStarredQuery($limit:Int$start:Int){favoriteContent(limit:$limit start:$start){nodes{...PageContentFragment}pageInfo{hasNextPage}}}${o}`
    },
    D9eQ: function ( e, t, n ) {
      "use strict";
      n.d( t, "a", ( function () {
        return s
      } ) ), n.d( t, "b", ( function () {
        return c
      } ) );
      var a = n( "SRtI" ),
        r = n( "YeD4" );
      const o = /[^A-Za-z0-9\-._\/]/g,
        s = e => {
          const t = [];
          let n = `${r.a}/${r.d}.${e}.${r.c}`;
          return n = n.replace( o, "_" ), Object.keys( a.a ).forEach( e => t.push( `${n}.${a.a[e]}` ) ), t
        },
        c = ( e, t ) => ( Object.values( a.a ).indexOf( e ) > -1 && ( t = t.replace( o, "_" ) ), t )
    },
    DIZP: function ( e, t, n ) {
      "use strict";
      n.d( t, "a", ( function () {
        return s
      } ) );
      var a = n( "H5qd" ),
        r = n.n( a );
      const o = r.a `fragment iconDetails on Icon{path width height isDefault}`,
        s = r.a `query spaceForBaseSpaceQuery($spaceKey:String){spaces(spaceKey:$spaceKey){nodes{id key name homepage{id}icon{...iconDetails}type settings{routeOverrideEnabled}theme{themeKey}lookAndFeel{headings{key value}menus{hoverOrFocus{key value}color}header{backgroundColor button{backgroundColor color}primaryNavigation{color hoverOrFocus{key value}}secondaryNavigation{color hoverOrFocus{key value}}search{backgroundColor color}}content{screen{background backgroundColor backgroundImage backgroundPosition backgroundSize backgroundRepeat backgroundOrigin backgroundClip backgroundAttachment backgroundBlendMode layer{background backgroundColor backgroundImage backgroundPosition backgroundSize backgroundRepeat backgroundOrigin backgroundClip backgroundAttachment backgroundBlendMode width height}gutterTop gutterRight gutterBottom gutterLeft}container{background backgroundColor backgroundImage backgroundPosition backgroundSize backgroundRepeat backgroundOrigin backgroundClip backgroundAttachment backgroundBlendMode padding borderRadius}header{background backgroundColor backgroundImage backgroundPosition backgroundSize backgroundRepeat backgroundOrigin backgroundClip backgroundAttachment backgroundBlendMode padding borderRadius}body{background backgroundColor backgroundImage backgroundPosition backgroundSize backgroundRepeat backgroundOrigin backgroundClip backgroundAttachment backgroundBlendMode padding borderRadius}}}metadata{labels{nodes{prefix name id}}}operations{operation targetType}}}}${o}`
    },
    DQZQ: function ( e, t, n ) {
      "use strict";
      var a = n( "Czhu" ),
        r = n( "ERkP" ),
        o = n.n( r ),
        s = n( "IC1n" ),
        c = n.n( s ),
        i = n( "3Xso" );
      let u;
      ! function ( e ) {
        e.START = "navigationSessionStart", e.START_TOUCH = "navigationSessionStartTouch", e.TOUCH = "navigationSessionTouch", e.END = "navigationSessionEnd"
      }( u || ( u = {} ) );
      const l = {
          [ u.START_TOUCH ]: [ {
            action: "clicked",
            actionSubject: "navigationItem",
            actionSubjectId: "productLogo"
          }, {
            action: "clicked",
            actionSubject: "navigationItem",
            actionSubjectId: "recentIcon"
          }, {
            action: "clicked",
            actionSubject: "navigationItem",
            actionSubjectId: "quickSearch"
          }, {
            action: "clicked",
            actionSubject: "navigationItem",
            actionSubjectId: "notifications"
          }, {
            action: "clicked",
            actionSubject: "smartLink"
          }, {
            action: "dismissed",
            actionSubject: "drawer"
          }, {
            action: "selected",
            actionSubject: "navigationItem",
            actionSubjectId: "searchResult"
          }, {
            action: "selected",
            actionSubject: "navigationItem",
            actionSubjectId: "advanced_search_confluence"
          } ]
        },
        d = ( {
          children: e
        } ) => o.a.createElement( i.a, {
          onEvent: e => {
            for ( const t in l ) l[ t ].some( t => Object.keys( t ).every( n => t[ n ] === e.payload[ n ] ) ) && e.update( e => Object( a.a )( Object( a.a )( {}, e ), {}, {
              attributes: Object( a.a )( Object( a.a )( {}, e.attributes ), {}, {
                navdexPointType: t
              } )
            } ) )
          },
          channel: "*"
        }, e ),
        E = () => {
          const e = localStorage.getItem( "navigationSession" );
          if ( !e ) return null;
          const t = JSON.parse( e );
          return t.updated = new Date( t.updated ), t
        },
        p = ( {
          children: e
        } ) => {
          const t = Object( r.useRef )( E() ),
            n = e => {
              if ( t.current = e, t.current ) {
                if ( t.current.updateStorage ) try {
                  localStorage.setItem( "navigationSession", JSON.stringify( t.current ) )
                } catch ( n ) {
                  localStorage.removeItem( "navigationSession" )
                }
              } else localStorage.removeItem( "navigationSession" )
            };
          Object( r.useEffect )( () => {
            const e = e => {
              if ( "navigationSession" === e.key ) {
                const e = E();
                e ? l( e.id, !1 ) : n( null )
              }
            };
            return window.addEventListener( "storage", e ), () => {
              window.removeEventListener( "storage", e )
            }
          }, [] );
          const s = ( e, t, n ) => {
              e.payload.data ? e.update( e => Object( a.a )( Object( a.a )( {}, e ), {}, {
                data: Object( a.a )( Object( a.a )( {}, e.data ), {}, {
                  attributes: Object( a.a )( Object( a.a )( {}, e.data.attributes ), {}, {
                    navigationSessionId: t,
                    navdexPointType: n || e.data.attributes.navdexPointType
                  } )
                } )
              } ) ) : e.update( e => Object( a.a )( Object( a.a )( {}, e ), {}, {
                attributes: Object( a.a )( Object( a.a )( {}, e.attributes ), {}, {
                  navigationSessionId: t,
                  navdexPointType: n || e.attributes.navdexPointType
                } )
              } ) )
            },
            l = ( e, t = !0 ) => {
              n( {
                id: e,
                updated: new Date,
                updateStorage: t
              } )
            };
          return o.a.createElement( i.a, {
            onEvent: e => {
              var a, r;
              const o = ( null != ( r = e ) && null != ( r = r.payload ) && null != ( r = r.data ) && null != ( r = r.attributes ) ? r.navdexPointType : r ) || ( null != ( a = e ) && null != ( a = a.payload ) && null != ( a = a.attributes ) ? a.navdexPointType : a );
              let i = t.current && t.current.id;
              switch ( t.current && Date.now() - t.current.updated.getTime() > 6e5 && ( n( null ), i = null ), o ) {
                case u.START:
                  const t = c()();
                  s( e, t ), l( t );
                  break;
                case u.START_TOUCH:
                  const a = i ? u.TOUCH : u.START;
                  i = i || c()(), s( e, i, a ), l( i );
                  break;
                case u.TOUCH:
                  i && ( s( e, i ), l( i ) );
                  break;
                case u.END:
                  i && ( s( e, i ), n( null ) )
              }
            },
            channel: "*"
          }, o.a.createElement( d, null, e ) )
        };
      n.d( t, "a", ( function () {
        return p
      } ) ), n.d( t, "b", ( function () {
        return u
      } ) )
    },
    DX8K: function ( e, t, n ) {
      "use strict";
      n.d( t, "a", ( function () {
        return r
      } ) );
      var a = n( "Iy7w" );
      const r = Object( a.a )( "div", {
        target: "eso51q10"
      } )( {
        name: "1qfu3h8",
        styles: 'display:flex;width:100%;height:56px;background-color:#fff;&:after{content:"";position:absolute;left:0;right:0;top:100%;height:4px;background:linear-gradient( 180deg,rgba(9,30,66,0.13) 0,rgba(9,30,66,0.13) 1px,rgba(9,30,66,0.08) 1px,rgba(9,30,66,0) 4px );}'
      } )
    },
    DlIL: function ( e, t, n ) {
      "use strict";

      function a( e, t ) {
        if ( !e ) return;
        const n = e[ t ];
        return Array.isArray( n ) ? n[ 0 ] : n
      }

      function r( e, t, n ) {
        const r = a( e, t ),
          o = parseInt( r || "", 10 );
        return isNaN( o ) ? n : o
      }
      n.d( t, "a", ( function () {
        return a
      } ) ), n.d( t, "b", ( function () {
        return r
      } ) )
    },
    E2Aa: function ( e, t, n ) {
      "use strict";
      n.d( t, "a", ( function () {
        return p
      } ) );
      var a = n( "Czhu" ),
        r = n( "ERkP" ),
        o = n.n( r ),
        s = n( "gQ5V" ),
        c = n( "Ua4J" ),
        i = n( "DlIL" ),
        u = n( "+mzV" ),
        l = n( "+lf2" ),
        d = n( "pclH" );
      const E = ( {
          spaceKey: e,
          contentId: t,
          location: n,
          style: a = {},
          renderWhenLoading: u,
          fetchPolicy: E = "cache-and-network",
          children: p,
          onCompleted: f
        } ) => {
          const {
            getQueryParams: m
          } = Object( r.useContext )( c.a ), b = m(), O = e || Object( i.a )( b, "spaceKey" ) || Object( i.a )( b, "key" ), h = t || Object( i.a )( b, "pageId" );
          if ( "byDraft" === O ) return null;
          const g = h ? {
            contentId: h,
            location: n
          } : {
            spaceKey: O,
            location: n
          };
          return o.a.createElement( s.b, {
            query: d.a,
            variables: g,
            fetchPolicy: E,
            onCompleted: f
          }, ( {
            data: e,
            loading: t,
            error: n
          } ) => {
            if ( t && e ) return null;
            if ( !u && ( t || n || !e ) ) return null;
            const r = ( ( null == e ? void 0 : e.webPanels ) || [] ).filter( e => e );
            return u || r.length ? o.a.createElement( "div", {
              style: a
            }, p ? p( {
              panels: r
            } ) : r.map( e => o.a.createElement( l.a, {
              key: e.completeKey,
              html: e.html
            } ) ) ) : null
          } )
        },
        p = e => o.a.createElement( u.a.Consumer, null, ( {
          spaceKey: t,
          contentId: n
        } ) => o.a.createElement( E, Object( a.a )( Object( a.a )( {}, e ), {}, {
          spaceKey: t,
          contentId: n
        } ) ) )
    },
    Eoya: function ( e, t, n ) {
      "use strict";
      n.d( t, "a", ( function () {
        return c
      } ) );
      var a = n( "zjfJ" ),
        r = n( "ERkP" ),
        o = n.n( r ),
        s = n( "kmyq" );
      class c extends r.Component {
        constructor( ...e ) {
          super( ...e ), Object( a.a )( this, "willParentCatch", void 0 ), Object( a.a )( this, "state", {
            error: null
          } ), Object( a.a )( this, "willCatch", e => !!this.props.isKnownError( e ) || !( !this.willParentCatch || !this.willParentCatch( e ) ) )
        }
        componentDidCatch( e ) {
          if ( !this.props.isKnownError( e ) ) throw e; {
            const {
              onError: t
            } = this.props;
            t && t( e ), this.setState( {
              error: e
            } )
          }
        }
        render() {
          const {
            error: e
          } = this.state;
          return o.a.createElement( s.a.Consumer, null, t => ( this.willParentCatch = t, o.a.createElement( s.a.Provider, {
            value: this.willCatch
          }, e ? this.props.renderOnError( e ) : this.props.children ) ) )
        }
      }
    },
    F4Ur: function ( e, t, n ) {
      "use strict";
      n.d( t, "a", ( function () {
        return c
      } ) ), n.d( t, "b", ( function () {
        return i
      } ) );
      var a = n( "zjfJ" ),
        r = n( "qrFu" ),
        o = n( "BX6b" );
      const s = new class {
          constructor( e, t ) {
            this.gracefulHandlingPeriodMs = e, this.errorHandler = t, Object( a.a )( this, "errorsToHandle", new Map ), Object( a.a )( this, "processError", e => {
              e && this.scheduleErrorReporting( e )
            } ), Object( a.a )( this, "markErrorAsHandled", e => {
              if ( !e ) return;
              Object( r.d )( e ) && ( ( e.graphQLErrors || [] ).forEach( e => this.markErrorAsHandled( e ) ), this.markErrorAsHandled( e.networkError ) );
              const t = this.errorsToHandle.get( e );
              window.clearTimeout( t ), this.errorsToHandle.delete( e )
            } )
          }
          scheduleErrorReporting( e ) {
            const t = window.setTimeout( () => {
              this.errorHandler( e ), c( e )
            }, this.gracefulHandlingPeriodMs );
            this.errorsToHandle.set( e, t )
          }
        }( 100, ( function ( e ) {
          Object( o.c )().submitError( e, {
            attribution: "graphql"
          } )
        } ) ),
        c = s.markErrorAsHandled,
        i = s.processError
    },
    FLmY: function ( e, t, n ) {
      "use strict";
      n.d( t, "i", ( function () {
        return r
      } ) ), n.d( t, "j", ( function () {
        return o
      } ) ), n.d( t, "a", ( function () {
        return s
      } ) ), n.d( t, "e", ( function () {
        return c
      } ) ), n.d( t, "d", ( function () {
        return i
      } ) ), n.d( t, "b", ( function () {
        return u
      } ) ), n.d( t, "c", ( function () {
        return l
      } ) ), n.d( t, "f", ( function () {
        return d
      } ) ), n.d( t, "g", ( function () {
        return E
      } ) ), n.d( t, "h", ( function () {
        return p
      } ) ), n.d( t, "l", ( function () {
        return f
      } ) ), n.d( t, "k", ( function () {
        return m
      } ) );
      var a = n( "XVWa" );
      const r = "visited",
        o = "workedOn",
        s = "drafts",
        c = "starred",
        i = "announcer-wrapper",
        u = [ r, o, s, c ],
        l = 25,
        d = "DRAWER",
        E = "DROPDOWN",
        p = "HOME",
        f = {
          [ d ]: a.b.recentDrawer,
          [ E ]: a.b.recentDropdown,
          [ p ]: a.b.recentHome
        },
        m = {
          [ d ]: "recentDrawer",
          [ E ]: "recentDropdown",
          PAGE: "recentPage",
          [ p ]: "recentHome"
        }
    },
    FMV0: function ( e, t, n ) {
      "use strict";
      n.d( t, "a", ( function () {
        return s
      } ) ), n.d( t, "b", ( function () {
        return c
      } ) );
      var a = n( "ERkP" ),
        r = n.n( a ),
        o = n( "U63R" );
      const s = r.a.createContext( {
          waitForExtensions: !1,
          areExtensionsReady: !1
        } ),
        c = ( {
          children: e,
          extensionProvidersLoader: t
        } ) => {
          const [ n, c ] = Object( a.useState )( {
            waitForExtensions: !0,
            areExtensionsReady: !1
          } );
          return r.a.createElement( s.Provider, {
            value: n
          }, e, r.a.createElement( t, {
            priority: o.a.IMMEDIATE,
            setProviders: c
          } ) )
        }
    },
    FdGg: function ( e, t, n ) {
      "use strict";
      n.d( t, "a", ( function () {
        return d
      } ) );
      var a = n( "Czhu" ),
        r = n( "ERkP" ),
        o = n.n( r ),
        s = n( "hpu0" ),
        c = n( "wEff" ),
        i = n( "RfuI" ),
        u = n( "ZVoB" );
      const l = Object( i.a )( {
          id: "IzFuP",
          name: "ErrorComponent",
          loader: async () => ( await Promise.all( [ n.e( "atlaskit~66e23772" ), n.e( "vendors~4134d62c" ), n.e( "error-boundary~b59ad437" ) ] ).then( n.bind( null, "GF4D" ) ) ).ErrorComponent
        } ),
        d = ( {
          attribution: e,
          children: t,
          modal: n
        } ) => {
          const i = Object( r.useCallback )( e => o.a.createElement( l, Object( a.a )( Object( a.a )( {}, e ), {}, {
              modal: n
            } ) ), [ n ] ),
            d = Object( r.useCallback )( e => {
              Object( c.b )( e ) || Object( s.b )().fail( {
                error: e
              } )
            }, [] );
          return o.a.createElement( u.a, {
            attribution: e,
            renderOnError: i,
            onError: d
          }, t )
        }
    },
    Fexb: function ( e, t, n ) {
      "use strict";
      var a = n( "Czhu" ),
        r = n( "prCu" ),
        o = n.n( r ),
        s = n( "EfWO" ),
        c = n.n( s ),
        i = n( "94Z3" ),
        u = n( "p0L4" ),
        l = n( "kC4U" ),
        d = n( "cH76" );

      function E( {
        message: e,
        method: t,
        url: n,
        "status-code": a
      } ) {
        this.message = e.length ? e : `Failed to ${t} ${n}`, this.url = n, this.method = t, this.statusCode = a, this.stack = ( new Error ).stack
      }
      E.prototype = new Error;
      var p = E;
      n.d( t, "b", ( function () {
        return O
      } ) );
      const f = ( e, t ) => e.replace( /:([a-zA-Z]+)\?*/g, ( function ( e, n ) {
        let a = t[ n ];
        return ":contentId?" === e && ( a += "?" ), "string" == typeof a && -1 === a.indexOf( "=" ) && ":contentId?" !== e ? encodeURIComponent( decodeURIComponent( a ) ) : a
      } ) );

      function m( e, t = {}, n = "", a = "" ) {
        return r => {
          if ( r instanceof i.a ) {
            const {
              response: o
            } = r;
            return o.text().then( r => m( e, t, n, a )( new p( {
              message: r,
              "status-code": o.status,
              method: n,
              url: a
            } ) ) )
          }
          if ( r instanceof p ) {
            const n = t[ r.statusCode ];
            return n && n( r ), console.log( "HELLOOO", r ), e( r )
          }
          if ( r instanceof TypeError || r instanceof u.a ) return e( r );
          throw r
        }
      }

      function b( e, {
        body: t,
        callback: n,
        headers: r,
        method: s,
        extraConfig: i = {},
        responseTransformer: u,
        httpCodeHandlers: E
      }, f ) {
        let b = t;
        const O = r[ "Content-Type" ];
        O || delete r[ "Content-Type" ], O && -1 !== O.indexOf( "application/x-www-form-urlencoded" ) ? b = o.a.stringify( t ) : "application/json" === O && ( b = JSON.stringify( t ) );
        const h = c.a.parse( e ).path;
        return ( async ( e, {
          headers: t,
          method: n
        }, r ) => n && "GET" === n.toUpperCase() ? Object( d.a )().claim( {
          name: e,
          variables: Object( a.a )( {
            method: n
          }, t )
        }, e => e ).then( e => e || r() ) : r() )( h, {
          method: s,
          headers: r,
          body: t
        }, () => Object( l.a )( e, {
          headers: r,
          method: s,
          body: b
        } ) ).then( ( function ( e ) {
          return i.ignoreResponseJson ? null : 204 !== e.status ? e.json() : e
        } ) ).then( ( function ( a ) {
          if ( a && a[ "status-code" ] ) throw new p( a );
          return n( null, u ? u( a, e, f.contextPath, t ) : a )
        } ) ).catch( m( n, E, s, h ) )
      }

      function O() {
        let e = {
          endpoint: null,
          contextPath: null,
          extraHeaders: {},
          atlToken: null,
          tenantId: null
        };
        return {
          configure( t = {} ) {
            e = Object( a.a )( Object( a.a )( {}, e ), t )
          },
          getConfig: () => e,
          getAtlToken() {
            if ( !e.atlToken ) throw new Error( "Tried to use atlToken before it was available" );
            return e.atlToken
          },
          withTenantId: () => new Promise( ( t, n ) => {
            ! function ( {
              condition: e,
              maxTries: t = 10,
              interval: n = 250,
              callback: a
            } ) {
              if ( "function" != typeof e ) throw new Error( "waitFor requires a condition wrapped in a function as first argument" );
              if ( "function" != typeof a ) throw new Error( "waitFor requires a function as callback" );
              if ( e() ) return a();
              let r = 0;
              const o = () => setTimeout( () => {
                if ( e() ) return a();
                r += 1, t && t > 0 && r >= t || o()
              }, n );
              o()
            }( {
              condition: () => null !== e.tenantId,
              callback: () => t( e.tenantId )
            } )
          } ),
          getFullPath( t, n ) {
            const a = e.endpoint ? `${e.endpoint}${e.contextPath}${t}` : `${e.contextPath}${t}`;
            return n ? f( a, n ) : a
          },
          getExternalServicePath( e, t ) {
            if ( "function" != typeof e ) throw new Error( "getExternalServicePath expects path to be a function so it can be lazy evaluated" );
            const n = e();
            return f( n, t )
          },
          get: ( t, {
            callback: n,
            headers: r,
            responseTransformer: o,
            httpCodeHandlers: s,
            extraConfig: c = {}
          } ) => b( t, {
            callback: n,
            headers: Object( a.a )( Object( a.a )( {
              Accept: "application/json",
              "Content-Type": "application/json"
            }, e.extraHeaders ), r ),
            method: "GET",
            responseTransformer: o,
            httpCodeHandlers: s,
            extraConfig: c
          }, e ),
          post: ( t, {
            body: n,
            callback: r,
            headers: o,
            extraConfig: s,
            responseTransformer: c,
            httpCodeHandlers: i
          } ) => b( t, {
            body: n,
            callback: r,
            headers: Object( a.a )( Object( a.a )( {
              "Content-Type": "application/x-www-form-urlencoded"
            }, e.extraHeaders ), o ),
            method: "POST",
            extraConfig: s,
            responseTransformer: c,
            httpCodeHandlers: i
          }, e ),
          put: ( t, {
            body: n,
            callback: r,
            headers: o,
            extraConfig: s,
            responseTransformer: c,
            httpCodeHandlers: i
          } ) => b( t, {
            body: n,
            callback: r,
            headers: Object( a.a )( Object( a.a )( {
              Accept: "application/json",
              "Content-Type": "application/json"
            }, e.extraHeaders ), o ),
            method: "PUT",
            extraConfig: s,
            responseTransformer: c,
            httpCodeHandlers: i
          }, e ),
          delete: ( t, {
            callback: n,
            headers: r,
            extraConfig: o,
            responseTransformer: s,
            httpCodeHandlers: c
          } ) => b( t, {
            callback: n,
            headers: Object( a.a )( Object( a.a )( {
              Accept: "application/json",
              "Content-Type": "application/json"
            }, e.extraHeaders ), r ),
            method: "DELETE",
            extraConfig: o,
            responseTransformer: s,
            httpCodeHandlers: c
          }, e ),
          postLegacyResource: ( t, {
            body: n,
            callback: r,
            headers: s,
            method: c,
            responseTransformer: u,
            httpCodeHandlers: d
          } ) => Object( l.a )( t, {
            headers: Object( a.a )( Object( a.a )( {
              "Content-Type": "application/x-www-form-urlencoded"
            }, e.extraHeaders ), s ),
            method: "POST",
            body: "string" == typeof n ? n : o.a.stringify( n )
          } ).then( e => {
            const t = e.headers.get( "content-type" );
            return t && -1 === t.indexOf( "text/html" ) && -1 === t.indexOf( "text/plain" ) ? e.json() : e.text()
          }, e => {
            if ( e instanceof i.a ) return new Error( "Request failed with " + e.response.status );
            throw e
          } ).then( a => a instanceof Error ? r( a ) : r( null, u ? u( a, t, e.contextPath, n ) : a ) ).catch( m( r, d, c, t ) ),
          fetch: ( e, t ) => fetch( e, t )
        }
      }
      const h = O();
      t.a = h
    },
    FuAq: function ( e, t, n ) {
      "use strict";
      n.d( t, "a", ( function () {
        return s
      } ) );
      var a = n( "ZKzP" ),
        r = n.n( a ),
        o = n( "lSUb" );
      const s = Object( o.default )( () => r()() )
    },
    FyaM: function ( e, t, n ) {
      "use strict";
      var a = n( "cH76" ),
        r = n( "syT9" );
      n.d( t, "a", ( function () {
        return o
      } ) );
      const o = ( e, t, n ) => t ? function ( {
        rawQueryString: e,
        variables: t = {}
      } ) {
        const n = Object( r.b )( e );
        return n ? Object( a.a )().load( {
          name: n,
          variables: t
        }, () => fetch( "/gateway/api/graphql", {
          method: "POST",
          credentials: "include",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify( {
            query: e,
            variables: t
          } )
        } ).then( e => e.ok ? e.json() : r.a ).catch( () => r.a ) ) : Promise.resolve( r.a )
      }( {
        rawQueryString: "\n      query extensionList($contextIds: [ID!]!, $type: String!) {\n        extensionContexts(contextIds: $contextIds) {\n          id\n          extensionsByType(type: $type) {\n            id\n            environmentId\n            environmentType\n            properties\n            type\n            appVersion\n            installationId\n            __typename\n          }\n          __typename\n        }\n      }\n    ",
        variables: {
          contextIds: [ "ari:cloud:confluence::site/" + e ],
          type: n
        }
      } ) : Promise.resolve( {
        data: null
      } )
    },
    G2mK: function ( e, t, n ) {
      "use strict";
      n.d( t, "a", ( function () {
        return b
      } ) );
      var a = n( "Iy7w" ),
        r = n( "ERkP" ),
        o = n.n( r ),
        s = n( "3IV/" );
      const c = Object( a.a )( "div", {
          target: "ev07o2r0"
        } )( {
          name: "1w9pyw3",
          styles: 'display:flex;flex-wrap:"wrap";'
        } ),
        i = Object( a.a )( "div", {
          target: "ev07o2r1"
        } )( {
          name: "1xrrkys",
          styles: "display:flex;flex-basis:100%;margin-bottom:7px;"
        } ),
        u = Object( a.a )( "div", {
          target: "ev07o2r2"
        } )( "background-color:", s.N20A, ";width:32px;height:32px;border-radius:50%;margin-top:3px;margin-right 13px;" ),
        l = Object( a.a )( "div", {
          target: "ev07o2r3"
        } )( 'content:" ";display:block;margin-bottom:16px;padding-top:10px;border-bottom:1px solid ', s.N30, ";width:100%;" ),
        d = Object( a.a )( "div", {
          target: "ev07o2r4"
        } )( {
          name: "1wm4age",
          styles: "margin-top:-4px;"
        } ),
        E = Object( a.a )( "div", {
          target: "ev07o2r5"
        } )( 'width:100%;border:none;border-radius:3px;height:"40px";color:#999;padding-top:inherit;display:inline-block;vertical-align:top;margin-left:7px;flex-grow:1;background-color:', s.N20A, ";" ),
        p = Object( a.a )( "div", {
          target: "ev07o2r6"
        } )( {
          name: "188ln27",
          styles: "display:grid;grid-template-columns:auto auto auto auto;grid-gap:10px;background-color:transparent;width:500px;margin-left:7px;margin-bottom:7px;"
        } ),
        f = Object( a.a )( "div", {
          target: "ev07o2r7"
        } )( "grid-area:1 / 1 / span 1 / span 4;background-color:", s.N20A, ";text-align:center;padding:12px 0;border:none;border-radius:3px;" ),
        m = Object( a.a )( "div", {
          target: "ev07o2r8"
        } )( "grid-area:2 / 1 / span 1 / span 10;background-color:", s.N20A, ";text-align:center;padding:6px 0;border:none;border-radius:3px;" ),
        b = () => window.__SSR_RENDERED__ ? o.a.createElement( d, null, o.a.createElement( i, null, o.a.createElement( u, null ), o.a.createElement( p, null, o.a.createElement( f, null ), o.a.createElement( m, null ) ) ), o.a.createElement( l, null ), o.a.createElement( c, {
          "data-testid": "comment-container"
        }, o.a.createElement( i, null, o.a.createElement( u, null ), o.a.createElement( E, null ) ) ) ) : null
    },
    GBQy: function ( e, t, n ) {
      "use strict";
      n.d( t, "g", ( function () {
        return r
      } ) ), n.d( t, "c", ( function () {
        return o
      } ) ), n.d( t, "f", ( function () {
        return c
      } ) ), n.d( t, "a", ( function () {
        return i
      } ) ), n.d( t, "b", ( function () {
        return u
      } ) ), n.d( t, "e", ( function () {
        return l
      } ) ), n.d( t, "d", ( function () {
        return p
      } ) ), n.d( t, "h", ( function () {
        return f
      } ) );
      const a = Symbol( "React error context" );

      function r( e, t ) {
        "object" == typeof e && null !== e && ( e[ a ] = t )
      }

      function o( e ) {
        if ( "object" == typeof e && null !== e ) return e[ a ]
      }
      const s = Symbol( "Graphql error context" );

      function c( e, t ) {
        "object" == typeof e && null !== e && ( e[ s ] = t )
      }

      function i( e ) {
        if ( "object" == typeof e && null !== e ) return e[ s ]
      }

      function u( e ) {
        if ( "object" != typeof e || null === e ) return;
        if ( e[ s ] ) return e[ s ].traceId;
        const t = d( e );
        return t ? t.traceId : void 0
      }

      function l( e ) {
        if ( "object" != typeof e || null === e ) return;
        if ( e[ s ] ) return;
        const t = d( e );
        t && c( e, t )
      }

      function d( e ) {
        const t = e.graphQLErrors;
        if ( t && t.length > 0 && t[ 0 ][ s ] ) return t[ 0 ][ s ]
      }
      const E = Symbol( "SLA error context" );

      function p( e ) {
        if ( "object" == typeof e && null !== e ) return e[ E ]
      }

      function f( e, t ) {
        "object" == typeof e && null !== e && ( e[ E ] = t )
      }
    },
    GzV3: function ( e, t, n ) {
      "use strict";
      n.d( t, "a", ( function () {
        return r
      } ) );
      var a = n( "H5qd" );
      const r = n.n( a ).a `query ProductHomeQuery{siteConfiguration{customSiteLogo siteLogoUrl siteTitle showSiteTitle}}`
    },
    HDhw: function ( e, t, n ) {
      "use strict";
      n.d( t, "a", ( function () {
        return m
      } ) );
      var a = n( "ERkP" ),
        r = n( "z9P0" ),
        o = n( "+6Tk" ),
        s = n( "+FBq" ),
        c = n( "Aqh1" ),
        i = n( "tnlP" ),
        u = n( "WbUv" );
      const l = {
          actionSubject: "homeTestCohort",
          description: "Home test cohort (home, nav 2)"
        },
        d = {
          actionSubject: "homeControlCohort",
          description: "Home control cohort (no home, nav 2)"
        },
        E = {
          actionSubject: "navHomeTestCohort",
          description: "Nav test cohort with home (with home, Nav 3)"
        },
        p = {
          actionSubject: "navControlCohort",
          description: "Nav control cohort (no home, Nav 2)"
        },
        f = {
          actionSubject: "generalPopulationCohort",
          description: "General population outside of control and test cohort (no home, Nav 2)"
        },
        m = () => {
          const {
            createAnalyticsEvent: e
          } = Object( r.a )(), t = Object( o.c )( u.d ), {
            navigationVariant: n,
            effectiveVariant: m
          } = Object( a.useContext )( c.a );
          return Object( a.useEffect )( () => {
            if ( Object( i.d )() ) return;
            const a = ( ( e, t, n ) => {
              switch ( t ) {
                case s.h:
                  return E;
                case s.j:
                  if ( n === s.f ) return p;
                  if ( e === u.f || e == u.h ) return l;
                  if ( e === u.b ) return d
              }
              return f
            } )( t, m, n );
            e( {
              type: "sendOperationalEvent",
              data: {
                action: "identified",
                source: "confluence-frontend",
                actionSubject: a.actionSubject,
                attributes: {
                  description: a.description,
                  homeFF: t,
                  appNavigationFF: n
                }
              }
            } ).fire()
          }, [ m, t, e, n ] ), null
        }
    },
    "HEM+": function ( e, t, n ) {
      "use strict";
      var a = n( "ERkP" ),
        r = n.n( a ),
        o = ( n( "aWzz" ), n( "r9hL" ) ),
        s = n( "ZVoB" ),
        c = n( "X2PC" ),
        i = n( "a0gl" ),
        u = n( "Czhu" ),
        l = n( "fYnN" ),
        d = n.n( l ),
        E = n( "Xa/E" ),
        p = n( "cld1" );

      function f( e ) {
        Object( p.getAnalyticsWebClient )().then( t => {
          t.sendTrackEvent( e.payload )
        } )
      }

      function m( e ) {
        const {
          cloudId: t,
          locale: n,
          userId: a,
          featureFlags: o
        } = Object( i.a )(), s = Boolean( d.a.get( "confluence.disable-engagement-for-tests" ) );
        if ( !o[ "confluence.frontend.engage-platform.engagekit" ] || s ) return e.children;
        const c = {
          cloudId: t,
          aaid: a,
          locale: n,
          product: "confluence",
          stargateUrl: "/gateway/api"
        };
        return r.a.createElement( E.a, Object( u.a )( Object( u.a )( {}, e ), {}, {
          config: c,
          analyticsEventHandler: f
        } ) )
      }
      const b = Object( o.a )()( ( function ( {
        children: e,
        triggerAnalytics: t
      } ) {
        const {
          isLicensed: n
        } = Object( i.a )(), o = Object( a.useCallback )( e => {
          t( "engagement.inproduct.provider.error", {
            product: "confluence",
            error: e.message
          } )
        }, [ t ] ), u = Object( a.useCallback )( () => e, [ e ] );
        return n ? r.a.createElement( s.a, {
          attribution: c.a.INHERIT,
          renderOnError: u,
          onError: o
        }, r.a.createElement( m, null, e ) ) : e
      } ) );
      n.d( t, "a", ( function () {
        return b
      } ) )
    },
    HXI4: function ( e, t, n ) {
      "use strict";
      n.d( t, "b", ( function () {
        return u
      } ) ), n.d( t, "a", ( function () {
        return d
      } ) );
      var a = n( "Czhu" ),
        r = n( "Svze" ),
        o = n( "hqKg" ),
        s = n( "2M9l" );
      const c = 200,
        i = Object( r.fromJS )( {
          draftId: null,
          isRequesting: !1,
          hasFetched: !1,
          result: null,
          errorData: null,
          statusCode: null,
          silent: null
        } );

      function u( e = i, t ) {
        switch ( t.type ) {
          case s.i + "_REQUEST":
            return e.merge( {
              draftId: null,
              isRequesting: !0,
              hasFetched: !1,
              result: null,
              errorData: null,
              statusCode: null,
              silent: !!t.silent
            } );
          case s.i + "_SUCCESS":
            return e.merge( {
              draftId: t.response.id,
              isRequesting: !1,
              hasFetched: !0,
              result: Object( a.a )( {
                title: "",
                editorContent: ""
              }, t.response ),
              statusCode: c,
              errorData: null
            } );
          case s.i + "_FAILURE":
            return e.get( "draftId" ) !== t.options.contentId ? e : e.merge( {
              isRequesting: !1,
              hasFetched: !0,
              statusCode: t.error && t.error.statusCode,
              errorData: t.message
            } );
          case s.r + "_REQUEST":
            return e.merge( {
              draftId: t.contentId,
              isRequesting: !0,
              hasFetched: !1,
              result: null,
              errorData: null,
              statusCode: null,
              silent: !!t.silent
            } );
          case s.r + "_SUCCESS":
            return e.mergeDeep( {
              draftId: t.response.id.toString(),
              isRequesting: !1,
              hasFetched: !0,
              result: Object( a.a )( Object( a.a )( Object( a.a )( {}, ( n = t.response, r = [ "ancestors", "confRev", "editorContent", "spaceKey", "syncRev", "syncRevSource", "type", "publishedId" ], n && n._originalResponse ? Object.keys( n._originalResponse ).filter( e => r.indexOf( e ) > -1 ).reduce( ( e, t ) => ( e[ t ] = n._originalResponse[ t ], e ), {} ) : {} ) ), t.response ), {}, {
                title: t.response && t.response.title ? t.response.title : ""
              } ),
              statusCode: c,
              errorData: null
            } );
          case s.r + "_FAILURE":
            return e.get( "draftId" ) !== t.options.contentId ? e : e.merge( {
              isRequesting: !1,
              hasFetched: !0,
              statusCode: t.error && t.error.statusCode,
              errorData: t.message
            } );
          case s.s + "_REQUEST":
            return e.merge( {} );
          case s.s + "_SUCCESS":
            return e.mergeDeep( {
              result: Object( a.a )( {}, t.response )
            } );
          case s.s + "_FAILURE":
            return e.get( "draftId" ) !== t.options.contentId ? e : e.merge( {
              hasFetched: !0,
              statusCode: t.error && t.error.statusCode,
              errorData: t.message
            } );
          default:
            return e
        }
        var n, r
      }
      const l = e => e.editor,
        d = () => Object( o.createSelector )( l, e => {
          const t = e.get( "isRequesting", !1 ),
            n = e.get( "hasFetched", !1 ),
            a = e.get( "draftId" ),
            r = e.get( "silent", !1 ),
            o = e.get( "statusCode" ),
            s = e.get( "errorData", null ),
            i = e.get( "result", null );
          return {
            draftId: a,
            isRequesting: t,
            hasFetched: n,
            result: i && "function" == typeof i.toJS ? i.toJS() : i,
            statusCode: o,
            errorData: s && "function" == typeof s.toJS ? s.toJS() : s,
            shouldNavigateToEditPage: !r && n && o === c
          }
        } )
    },
    HbzK: function ( e, t, n ) {
      "use strict";
      var a = n( "Xzcx" );
      const r = {},
        o = {
          set( e, t ) {
            r[ e ] = t
          },
          get( e ) {
            if ( "undefined" != typeof document ) {
              const t = document.querySelector( `meta[name='ajs-${e}']` );
              if ( t ) {
                return function ( e ) {
                  const t = "string" == typeof e ? e.toLowerCase() : "";
                  return "true" === t || "false" !== t && e
                }( t.content )
              }
              return r[ e ]
            }
          },
          getBoolean( e ) {
            return !0 === this.get( e )
          },
          getNumber( e ) {
            return +this.get( e )
          },
          getAllAsMap() {
            const e = {};
            if ( !a.g.length ) return e;
            const t = Object( a.g )( "meta[name^=ajs-]" );
            if ( t )
              for ( let n = 0; n < t.length; n++ ) e[ t[ n ].name.substring( 4 ) ] = t[ n ].content;
            return Object.assign( e, r )
          }
        };
      t.a = o
    },
    HvGa: function ( e, t ) {
      e.exports = AJS
    },
    I6oN: function ( e, t, n ) {
      "use strict";
      n.d( t, "a", ( function () {
        return r
      } ) ), n.d( t, "b", ( function () {
        return o
      } ) );
      var a = n( "Czhu" );
      const r = () => ( {
          contentId: "",
          spaceKey: "",
          parentPageId: "",
          templateId: "",
          title: "",
          blueprint: {
            contentBlueprintId: "",
            itemModuleCompleteKey: ""
          },
          showTemplateVariableInputDrawer: !1,
          showBlueprintVariableWizard: !1,
          onContentUpdated: () => {},
          onError: () => {}
        } ),
        o = () => Object( a.a )( Object( a.a )( {}, r() ), {}, {
          onClose: () => {},
          openTemplateVariables: ( {} ) => {},
          openBlueprintWizard: ( {} ) => {}
        } )
    },
    IGfl: function ( e, t, n ) {
      "use strict";
      n.d( t, "a", ( function () {
        return c
      } ) );
      var a = n( "zjfJ" ),
        r = n( "lSUb" ),
        o = n( "daKX" );
      class s {
        constructor( {
          maxIntervalsToStore: e
        } = {} ) {
          Object( a.a )( this, "inactivityIntervals", [] ), Object( a.a )( this, "logger", Object( o.a )( "TabInactivityTracker" ) ), Object( a.a )( this, "maxIntervalsToStore", void 0 ), Object( a.a )( this, "onVisibilityChange", () => {
            document.hidden ? ( this.inactivityIntervals.length >= this.maxIntervalsToStore && this.inactivityIntervals.splice( this.maxIntervalsToStore - 1 ), this.inactivityIntervals.unshift( [ window.performance.now(), null ] ) ) : 0 === this.inactivityIntervals.length || null != this.inactivityIntervals[ 0 ][ 1 ] ? this.logger.error `Invariant violation: tab is currently active, but inactivity intervals are in inconsistent state` : this.inactivityIntervals[ 0 ][ 1 ] = window.performance.now()
          } );
          this.maxIntervalsToStore = "number" == typeof e ? e : 100
        }
        initialize() {
          return document.hidden && this.onVisibilityChange(), document.addEventListener( "visibilitychange", this.onVisibilityChange ), {
            teardown: () => {
              document.removeEventListener( "visibilitychange", this.onVisibilityChange )
            }
          }
        }
        getInactiveMillisecondsSince( e ) {
          let t = 0;
          for ( const [ n, a ] of this.inactivityIntervals ) {
            const r = a || window.performance.now();
            if ( e > r ) break;
            t += r - Math.max( n, e )
          }
          return t
        }
      }
      const c = Object( r.default )( () => {
        const e = new s;
        return e.initialize(), e
      } )
    },
    IOUA: function ( e, t, n ) {
      "use strict";
      n.d( t, "a", ( function () {
        return r
      } ) );
      var a = n( "H5qd" );
      const r = n.n( a ).a `mutation UserPreferencesMutation($optedOut:Boolean!){updateUserPreferences(userPreferences:{topNavigationOptedOut:$optedOut}){topNavigationOptedOut}}`
    },
    Ixx4: function ( e, t, n ) {
      "use strict";
      n.d( t, "a", ( function () {
        return l
      } ) );
      var a = n( "zjfJ" ),
        r = ( n( "aWzz" ), n( "ERkP" ) ),
        o = n( "oayO" ),
        s = n( "SRtI" ),
        c = n( "/CY5" );
      const i = [ {
          stale: [ "custom", "tailored", "relevant" ],
          correct: "all-updates"
        }, {
          stale: [ "home" ],
          correct: "discover"
        } ],
        u = e => {
          for ( let t = 0; t < i.length; t++ )
            if ( i[ t ].stale.includes( e ) ) return i[ t ].correct;
          return e
        };
      class l extends r.Component {
        constructor( ...e ) {
          super( ...e ), Object( a.a )( this, "state", {
            indexRouteOverride: null
          } )
        }
        static getDerivedStateFromProps( e ) {
          const {
            indexRoute: t
          } = e;
          return {
            indexRouteOverride: u( t )
          }
        }
        componentDidMount() {
          this._redirectToIndex()
        }
        componentDidUpdate() {
          this._redirectToIndex()
        }
        _formatRoute( e ) {
          const {
            pathname: t = "",
            search: n
          } = this.props, a = "/" === t.substr( -1 );
          return 0 === e.indexOf( "/" ) && ( e = e.substr( 1 ) ), t.indexOf( e ) > -1 ? `${t}${a?"":"/"}` : `${t}${a?"":"/"}${e}${n}`
        }
        _redirectToIndex() {
          const {
            indexRoute: e,
            siteHomeOverrideUri: t,
            shouldWait: n
          } = this.props;
          if ( n ) return;
          const a = c.a.getSpaceKey( e );
          a && a !== c.a.getSpaceKey( t ) ? o.a.removeItem( s.b.DASHBOARD_ROUTE ) : this.props.replace( this._formatRoute( this.state.indexRouteOverride ) )
        }
        render() {
          return null
        }
      }
      l.displayName = "IndexRedirect", l.defaultProps = {
        shoulWait: !1,
        search: ""
      }
    },
    J4Kw: function ( e, t, n ) {
      "use strict";
      n.d( t, "a", ( function () {
        return a
      } ) ), n.d( t, "c", ( function () {
        return r
      } ) ), n.d( t, "b", ( function () {
        return o
      } ) ), n.d( t, "d", ( function () {
        return s
      } ) ), n.d( t, "e", ( function () {
        return c
      } ) );
      const a = "example.spotlight",
        r = "internal.feedback.plugin",
        o = "editor.help.center.spotlight.on.help.menu",
        s = [
          []
        ],
        c = {}
    },
    J7sl: function ( e, t, n ) {
      "use strict";
      var a = n( "Czhu" ),
        r = n( "uZih" ),
        o = n.n( r ),
        s = n( "Z9L/" ),
        c = n( "ewfN" ),
        i = n( "U+B7" ),
        u = n( "3VMZ" ),
        l = n( "A79P" ),
        d = n( "hpu0" ),
        E = n( "0wgO" );
      const p = ( e, t ) => {
          t.stopOn( f( e, "taskSuccess" ) ), t.stopOn( f( e, "taskFail" ) )
        },
        f = ( e, t ) => e.find( e => e.action === t && Object( i.a )( e, u.a.EDIT_PAGE ) );

      function m( e ) {
        const t = new Set( [ u.a.HOME_SPACES, u.a.HOME_RIGHT_PANEL, ...e ? [ u.a.HOME_RECENT_PAGES ] : [] ] ),
          n = new Set( [ u.a.HOME_FEED, u.a.HOME_RIGHT_PANEL ] );
        return ( e, a ) => {
          a.stopOn( e.find( e => ( t.has( e.name ) || n.has( e.name ) ) && ( "taskFail" === e.action || "taskAbort" === e.action ) ) ), e.forEach( e => {
            Object( i.b )( e ) && ( t.delete( e.name ), n.delete( e.name ) )
          } ), 0 !== t.size && 0 !== n.size || a.succeed()
        }
      }
      n.d( t, "a", ( function () {
        return g
      } ) ), n.d( t, "c", ( function () {
        return _
      } ) ), n.d( t, "b", ( function () {
        return T
      } ) );
      const b = Object( E.b )( [ u.a.RESTRICTED_PAGE, u.a.RESTRICTED_SPACE, u.a.NOT_FOUND ] ),
        O = Object( E.b )( [ u.a.CONNECT_ADDON ] ),
        h = [],
        g = {
          [ c.SPACE_OVERVIEW.name ]: "space",
          [ c.EDIT_PAGE_V2.name ]: "page",
          [ c.EDIT_BLOG_V2.name ]: "blog",
          [ c.VIEW_PAGE.name ]: "page",
          [ c.VIEW_BLOG.name ]: "blog",
          [ c.VIEW_BLOG_DATE_LEGACY.name ]: "blog"
        };

      function _( e, t, n ) {
        if ( !e ) return;
        const a = Object( d.b )();
        h.forEach( e => a.abort( {
          name: e,
          reason: "Aborted due to SPA started a new experience"
        } ) ), h.length = 0;
        const r = a.subscribe( e => {
          "taskStart" === e.action && h.push( e.name )
        } );
        switch ( e.name ) {
          case c.EDIT_PAGE_V2.name:
          case c.EDIT_BLOG_V2.name:
            ! function ( e, t, n ) {
              T( {
                name: u.a.EDIT_PAGE,
                id: e,
                startTime: 0 === t ? 0 : void 0,
                attributes: {
                  editor: "FABRIC",
                  contentType: n
                },
                collect: ( e, t ) => {
                  b( e, t ), t.stopOn( e.find( e => Object( i.b )( e ) && e.name === u.a.EDIT_PAGE_CLOSE ) )
                }
              }, {
                name: u.a.EDIT_PAGE_LOAD
              }, {
                name: u.a.EDIT_PAGE_PUBLISH
              } )
            }( e.params.contentId, t, g[ e.name ] );
            break;
          case c.VIEW_PAGE.name:
          case c.VIEW_BLOG.name:
          case c.VIEW_BLOG_DATE_LEGACY.name:
            I( e.params.contentId, t, g[ e.name ] );
            break;
          case c.SPACE_OVERVIEW.name:
            I( e.params.spaceKey, t, g[ e.name ] );
            break;
          case c.HOME.name:
            ! function ( e ) {
              const {
                isLoggedIn: t
              } = e;
              Object( d.b )().start( {
                name: u.a.HOME,
                collect: m( t )
              } )
            }( n );
            break;
          case c.EDIT_TEMPLATE_SPACE.name:
          case c.EDIT_TEMPLATE.name:
            S( e.params.contentId, t );
            break;
          case c.CREATE_TEMPLATE_SPACE.name:
          case c.CREATE_TEMPLATE.name:
            S( void 0, t );
            break;
          case c.ADVANCED_SEARCH.name:
            ! function ( e ) {
              Object( d.b )().start( {
                name: u.a.ADVANCED_SEARCH,
                id: Object( s.a )( o()( e.query, [ "search_id" ] ) )
              } )
            }( e );
            break;
          case c.SPACE_ARCHIVED_PAGES.name:
            Object( d.b )().start( {
              name: u.a.SPACE_ARCHIVED_PAGES
            } );
            break;
          case c.SPACE_DIRECTORY.name:
            ! function ( e ) {
              e.featureFlags[ "confluence.frontend.space.directory" ] && Object( d.b )().start( {
                name: u.a.SPACE_DIRECTORY,
                timeout: l.a.SPACE_DIRECTORY
              } )
            }( n );
            break;
          case c.TEMPLATE_GALLERY.name:
            ! function () {
              const e = [ u.a.TEMPLATE_GALLERY_CATEGORIES, u.a.TEMPLATE_GALLERY_SPACE_SELECTOR, u.a.TEMPLATE_GALLERY_CARDS, u.a.TEMPLATE_GALLERY_TEMPLATE_DETAIL ];
              Object( d.b )().start( {
                name: u.a.TEMPLATE_GALLERY,
                timeout: l.a.DEFAULT,
                collect: ( t, n ) => {
                  Object( E.a )( e )( t, n )
                }
              } )
            }();
            break;
          case c.SPACE_PAGES.name:
            Object( d.b )().start( {
              name: u.a.SPACE_PAGES
            } )
        }
        r(), e.query.createDialog && ( ! function ( e, t ) {
          const n = Object( d.b )();
          n.start( {
            name: u.a.CREATE_PAGE,
            id: e,
            startTime: 0 === t ? 0 : void 0,
            collect( e, t ) {
              t.stopOn( e.find( e => "taskFail" === e.action && Object( i.a )( e, u.a.CREATE_PAGE_LOAD_DIALOG, u.a.CREATE_PAGE_TEMPLATE_VARIABLES ) ) ), t.stopOn( e.find( e => "taskSuccess" === e.action && Object( i.a )( e, u.a.CREATE_PAGE_TEMPLATE_VARIABLES ) ) ), t.stopOn( e.find( e => "taskAbort" === e.action && Object( i.a )( e, u.a.CREATE_PAGE_TEMPLATE_VARIABLES ) ) )
            }
          } ), n.start( {
            name: u.a.CREATE_PAGE_LOAD_DIALOG,
            id: e,
            timeout: l.a.CREATE_DIALOG_LOAD
          } )
        }( String( t ), t ), Object( d.b )().start( {
          name: u.a.CREATE_AND_EDIT_PAGE,
          collect: p
        } ) )
      }

      function T( e, t, n ) {
        const r = Object( d.b )();
        r.start( Object( a.a )( Object( a.a )( {}, e ), {}, {
          collect: ( a, r ) => {
            r.stopOn( a.find( ( {
              action: e,
              name: n
            } ) => "taskFail" === e && n === t.name ) ), r.stopOn( a.find( ( {
              action: e,
              name: t
            } ) => ( "taskSuccess" === e || "taskFail" === e ) && t === n.name ) ), e.collect && e.collect( a, r )
          }
        } ) ), r.start( Object( a.a )( Object( a.a )( {}, t ), {}, {
          id: t.id || e.id,
          timeout: t.timeout || l.a.EDITOR_LOAD,
          attributes: e.attributes
        } ) )
      }

      function I( e, t, n ) {
        Object( d.b )().start( {
          name: u.a.VIEW_CONTENT,
          id: e,
          startTime: 0 === t ? 0 : void 0,
          timeout: l.a.PAGE_LOAD,
          attributes: {
            contentType: n
          },
          collect: ( e, t ) => {
            b( e, t ), O( e, t )
          }
        } );
        const a = Object( E.a )( [ u.a.VIEW_PAGE_TITLE, u.a.VIEW_PAGE_LIKES, u.a.VIEW_PAGE_LABELS, u.a.VIEW_PAGE_BYLINE, u.a.VIEW_PAGE_COMMENTS, u.a.VIEW_PAGE_RENDERER, u.a.VIEW_PAGE_EDIT_BUTTON, u.a.VIEW_PAGE_CONTENT_TOOLS, u.a.VIEW_PAGE_CONTENT_HEADER, u.a.VIEW_PAGE_FAVORITE_BUTTON ] );
        Object( d.b )().start( {
          name: u.a.VIEW_PAGE_COMPLETE,
          id: e,
          startTime: 0 === t ? 0 : void 0,
          timeout: l.a.PAGE_LOAD,
          collect: ( e, t ) => {
            b( e, t ), a( e, t ), O( e, t )
          }
        } )
      }

      function S( e, t ) {
        T( {
          name: u.a.TEMPLATE_EDIT_PAGE,
          id: e,
          startTime: 0 === t ? 0 : void 0,
          collect: ( e, t ) => {
            t.stopOn( e.find( e => Object( i.b )( e ) && e.name === u.a.TEMPLATE_EDIT_PAGE_CLOSE ) )
          }
        }, {
          name: u.a.TEMPLATE_EDIT_PAGE_LOAD,
          timeout: l.a.TEMPLATE_EDITOR_LOAD
        }, {
          name: u.a.TEMPLATE_EDIT_PAGE_PUBLISH
        } )
      }
    },
    JVJu: function ( e, t, n ) {
      "use strict";
      var a = n( "Czhu" ),
        r = n( "ilPL" ),
        o = n( "Ci1e" ),
        s = n( "yLtY" ),
        c = n( "rZXo" );
      var i = n( "H5qd" ),
        u = n.n( i );
      const l = u.a `fragment pageNode on Content{id title space{id key}ancestors{id title}}`,
        d = u.a `query pagesQuery($contentId:ID$spaceKey:String$first:Int$skipSelectedItem:Boolean!){selectedPage:content(id:$contentId spaceKey:$spaceKey){nodes@skip(if:$skipSelectedItem){...pageNode}}allPages:content(spaceKey:$spaceKey first:$first){nodes{...pageNode}}}${l}`,
        E = u.a `fragment pageNode on Content{id title space{id key}ancestors{id title}}`,
        p = u.a `query filterPagesQuery($cql:String!){filteredPages:search(cql:$cql){nodes{content{...pageNode}}}}${E}`;
      n.d( t, "b", ( function () {
        return f
      } ) ), n.d( t, "a", ( function () {
        return m
      } ) ), n.d( t, "c", ( function () {
        return b
      } ) ), n.d( t, "d", ( function () {
        return O
      } ) );
      const f = "GET_PAGES",
        m = "FILTER_PAGES",
        b = e => {
          const t = Object( a.a )( Object( a.a )( {}, e ), {}, {
            skipSelectedItem: !e.contentId
          } );
          return t.contentId || delete t.contentId, Object( c.f )( {
            query: d,
            variables: t,
            operationName: "pagesQuery",
            actionName: f,
            transformer: e => ( {
              selectedPage: r.a.transformers.listOfcontentWithBodyResponseTransformer( e.selectedPage ),
              allPages: r.a.transformers.listOfcontentWithBodyResponseTransformer( e.allPages )
            } ),
            normalizrSchema: {
              selectedPage: s.a.content,
              allPages: new o.schema.Array( s.a.content )
            }
          } )
        },
        O = e => {
          const t = ( ( e, t = "AND" ) => {
            const n = [];
            return e.spaceKey && n.push( `space="${e.spaceKey}"` ), e.type && n.push( `type="${e.type}"` ), e.searchString && n.push( `title ~ "${e.searchString}*"` ), n.join( ` ${t} ` )
          } )( Object( a.a )( Object( a.a )( {}, e ), {}, {
            type: "page"
          } ) );
          return Object( c.f )( {
            query: p,
            variables: {
              cql: t
            },
            operationName: "filterPagesQuery",
            actionName: m,
            transformer: e => ( {
              filteredPages: r.a.transformers.listOfcontentWithBodyResponseTransformer( e.filteredPages )
            } ),
            normalizrSchema: {
              filteredPages: new o.schema.Array( s.a.content )
            }
          } )
        }
    },
    JpXc: function ( e, t, n ) {
      "use strict";
      n.d( t, "a", ( function () {
        return r
      } ) );
      var a = n( "RfuI" );
      const r = Object( a.a )( {
          id: "t6EpE",
          name: "RendererExtensionsProviderLoader",
          loader: () => Promise.all( [ n.e( "atlaskit~66e23772" ), n.e( "afp~af75c846" ), n.e( "vendors~4134d62c" ), n.e( 0 ), n.e( 2 ), n.e( 4 ), n.e( 5 ), n.e( 1 ), n.e( 6 ), n.e( 7 ), n.e( 8 ), n.e( 9 ), n.e( 11 ), n.e( 10 ), n.e( 12 ), n.e( 14 ), n.e( 17 ), n.e( 19 ), n.e( 20 ), n.e( 21 ), n.e( 25 ), n.e( 29 ), n.e( 31 ), n.e( 40 ), n.e( 46 ), n.e( 67 ), n.e( "extensions-provider~dc51bad7" ) ] ).then( n.bind( null, "P4ZV" ) )
        } ),
        o = Object( a.a )( {
          id: "LMuem",
          name: "RendererQueryLoader",
          loader: () => Promise.all( [ n.e( "atlaskit~66e23772" ), n.e( "afp~af75c846" ), n.e( "vendors~4134d62c" ), n.e( 0 ), n.e( 2 ), n.e( 4 ), n.e( 5 ), n.e( 1 ), n.e( 6 ), n.e( 7 ), n.e( 8 ), n.e( 9 ), n.e( 11 ), n.e( 10 ), n.e( 12 ), n.e( 14 ), n.e( 17 ), n.e( 19 ), n.e( 20 ), n.e( 21 ), n.e( 25 ), n.e( 29 ), n.e( 31 ), n.e( 40 ), n.e( 46 ), n.e( 67 ), n.e( "fabric-renderer~dc51bad7" ) ] ).then( n.bind( null, "2YF+" ) )
        } );
      t.b = o
    },
    JxFu: function ( e, t, n ) {
      "use strict";
      n.d( t, "a", ( function () {
        return i
      } ) );
      var a = n( "ERkP" ),
        r = n.n( a ),
        o = ( n( "aWzz" ), n( "3Xso" ) ),
        s = n( "cld1" );
      const c = [ "sendOperationalEvent", "sendPageEvent", "sendTrackEvent", "sendUIEvent", "sendScreenEvent" ];
      class i extends a.Component {
        sendAnalyticEvents( e ) {
          if ( !e || !e.payload ) throw new Error( "Analytics Web Client Payload is required" );
          if ( !c.includes( e.payload.type ) ) throw new Error( "Recieved Unknown Type for Analytics Web Client: " + e.payload.type );
          Object( s.getAnalyticsWebClient )().then( t => {
            t[ e.payload.type ]( e.payload.data )
          } )
        }
        render() {
          return r.a.createElement( o.a, {
            onEvent: this.sendAnalyticEvents
          }, this.props.children )
        }
      }
    },
    KIs4: function ( e, t, n ) {
      "use strict";
      var a = n( "zjfJ" ),
        r = n( "ERkP" ),
        o = n( "Wagq" ),
        s = n( "6lZA" ),
        c = n( "ne5j" );

      function i( e ) {
        return null !== e
      }
      const u = e => {
        var t, n, a, r, o, u, l, d, E, p, f, m;
        const {
          originalFeatureFlags: b,
          featureFlagsWithOverrides: O,
          featureFlagClient: h
        } = Object( s.a )( ( null == e || null === ( t = e.featureFlags ) || void 0 === t || null === ( n = t.nodes ) || void 0 === n ? void 0 : n.filter( i ) ) || [] );
        return {
          shard: null === ( a = e.tenant ) || void 0 === a ? void 0 : a.shard,
          cloudId: null === ( r = e.tenant ) || void 0 === r ? void 0 : r.cloudId,
          environment: null === ( o = e.tenant ) || void 0 === o ? void 0 : o.environment,
          userId: ( null === ( u = e.user ) || void 0 === u ? void 0 : u.id ) || null,
          displayName: ( null === ( l = e.user ) || void 0 === l ? void 0 : l.displayName ) || null,
          isLoggedIn: Boolean( null === ( d = e.user ) || void 0 === d ? void 0 : d.id ),
          isLicensed: Boolean( ( null === ( E = e.user ) || void 0 === E ? void 0 : E.confluence ) && e.user.confluence.accountId && e.user.confluence.userKey ),
          userIdForAnalytics: ( null === ( p = e.userForAnalytics ) || void 0 === p ? void 0 : p.id ) || null,
          featureFlags: O,
          featureFlagClient: h,
          _originalFeatureFlags: Object( c.hasOverrides )() ? b : void 0,
          locale: ( null == e || null === ( f = e.user ) || void 0 === f || null === ( m = f.confluence ) || void 0 === m ? void 0 : m.locale ) || "en-US"
        }
      };
      var l = n( "+y+C" );
      n.d( t, "b", ( function () {
        return d
      } ) ), n.d( t, "a", ( function () {
        return E
      } ) );
      const d = () => window.__SESSION_DATA_PROMISE__ ? window.__SESSION_DATA_PROMISE__ : window.__SESSION_DATA_PROMISE__ = Object( o.c )( Object( l.a )().then( u ) );
      class E extends r.Component {
        constructor( e ) {
          super( e ), Object( a.a )( this, "_mount", void 0 ), Object( a.a )( this, "state", {} );
          const t = d();
          this._mount = !0, Object( o.b )( t ) ? this.state = {
            sessionData: Object( o.a )( t )
          } : t.then( e => {
            this._mount && this.setState( {
              sessionData: e
            } )
          } )
        }
        componentWillUnmount() {
          this._mount = !1
        }
        render() {
          const {
            sessionData: e
          } = this.state;
          return e ? this.props.children( e ) : !0 === this.props.renderChildrenWhenLoading ? this.props.children( {
            loading: !0
          } ) : null
        }
      }
    },
    Kn4r: function ( e, t, n ) {
      "use strict";
      n.d( t, "a", ( function () {
        return r
      } ) );
      var a = n( "H5qd" );
      const r = n.n( a ).a `query PopularFeedQuery($first:Int$after:String){popularFeed(first:$first after:$after){nodes{content{id title type history{createdDate createdBy{displayName profilePicture{path}...on KnownUser{accountId}}}metadata{likes{count}comments{commentsCount}}links{webui}}}pageInfo{endCursor hasNextPage}}}`
    },
    L5Tm: function ( e, t, n ) {
      "use strict";
      n.d( t, "a", ( function () {
        return r
      } ) );
      var a = n( "H5qd" );
      const r = n.n( a ).a `query UserPreferencesQuery{userPreferences{topNavigationOptedOut}}`
    },
    L7OL: function ( e, t, n ) {
      "use strict";

      function a() {
        const e = ( new Date ).getTimezoneOffset();
        let t = Math.abs( Math.floor( e / 60 ) );
        t = t <= 9 ? "0" + t : t;
        let n = Math.abs( e % 60 );
        return n = n <= 9 ? "0" + n : n, `${e<0?"+":"-"}${t}:${n}`
      }
      n.d( t, "a", ( function () {
        return a
      } ) ), n.d( t, "b", ( function () {
        return r
      } ) );
      const r = ( e, t = 2 ) => {
        let n = "" + e;
        for ( ; n.length < t; ) n = "0" + n;
        return n
      }
    },
    LEcB: function ( e, t, n ) {
      "use strict";
      n.d( t, "a", ( function () {
        return o
      } ) );
      var a = n( "ERkP" ),
        r = n( "a0gl" );
      const o = ( e, t, n, o = !1 ) => {
        const {
          featureFlagClient: s
        } = Object( r.a )(), c = Object( a.useCallback )( a => s.getVariantValue( e, {
          default: n,
          oneOf: t,
          shouldTrackExposureEvent: a
        } ), [ e, t, n, s ] );
        return Object( a.useMemo )( () => ( {
          cohort: c( o ),
          fireExposureEvent: () => c( !0 )
        } ), [ c, o ] )
      }
    },
    M5Dj: function ( e, t, n ) {
      "use strict";
      n.d( t, "a", ( function () {
        return r
      } ) );
      var a = n( "RfuI" );
      const r = Object( a.a )( {
        id: "KthWG",
        name: "Dialogs",
        loader: () => Promise.all( [ n.e( "atlaskit~66e23772" ), n.e( "dialogs~c0538e35" ) ] ).then( n.bind( null, "NZlH" ) ).then( ( {
          Dialogs: e
        } ) => e )
      } )
    },
    MswP: function ( e, t, n ) {
      "use strict";
      var a = n( "Svze" );
      const r = Object( a.Record )( {
        operation: null,
        targetType: null
      } );
      t.a = r
    },
    NGEh: function ( e, t, n ) {
      "use strict";
      n.d( t, "c", ( function () {
        return p
      } ) ), n.d( t, "b", ( function () {
        return f
      } ) ), n.d( t, "a", ( function () {
        return m
      } ) );
      var a = n( "Jygk" ),
        r = n.n( a ),
        o = n( "daKX" ),
        s = n( "kHPA" );
      const c = r.a,
        i = Object( o.a )( "Loadable" );
      let u = [],
        l = {},
        d = new Set;

      function E() {
        if ( 0 === u.length )
          for ( const e of c.__LOADABLE__ || [] ) {
            const {
              resolve: t,
              promise: n
            } = Object( s.a )( 2500 );
            u.push( n ), l[ e ] = t
          }
      }

      function p() {
        return E(), Promise.all( u )
      }

      function f( e, t ) {
        if ( e && ( E(), e in l ) ) {
          const n = () => {
            l[ e ]()
          };
          t().then( n, e => {
            i.error( e ), n()
          } )
        }
      }

      function m() {
        return Array.from( d )
      }
    },
    NJGo: function ( e, t, n ) {
      "use strict";
      n.d( t, "a", ( function () {
        return a
      } ) );
      const a = () => {
        const e = performance.getEntriesByType( "mark" ).filter( e => e.name.startsWith( "CFP-63." ) ).sort( ( e, t ) => e.startTime - t.startTime ),
          t = {};
        for ( const {
            name: n,
            startTime: a
          } of e ) {
          const e = n.replace( /\.start|\.end$/, "" );
          n.endsWith( ".start" ) ? t[ e ] || ( t[ e ] = -( a >> 0 ) ) : n.endsWith( ".end" ) ? t[ e ] < 0 && ( t[ e ] += a >> 0 ) : t[ e ] || ( t[ e ] = a >> 0 )
        }
        return t
      }
    },
    NMWM: function ( e, t, n ) {
      "use strict";
      n.d( t, "a", ( function () {
        return r
      } ) );
      var a = n( "ewfN" );
      const r = () => !!a.EXTERNAL_SHARE.match( window.location.pathname )
    },
    NnCn: function ( e, t, n ) {
      "use strict";
      n.d( t, "a", ( function () {
        return a
      } ) );
      class a extends Error {}
    },
    O65l: function ( e, t, n ) {
      n( "ERkP" );
      const a = n( "x+QU" ),
        {
          defer: r
        } = n( "rzmQ" ),
        {
          getLogger: o
        } = n( "7tVi" ),
        s = o( "WrappedReactLoadable" ),
        c = [],
        i = {},
        u = new Set;

      function l() {
        if ( 0 === c.length )
          for ( const e of window.__REACT_LOADABLE__ || [] ) {
            const {
              resolve: t,
              promise: n
            } = r( 2500 );
            c.push( n ), i[ e ] = t
          }
      }

      function d( e ) {
        if ( window.__SSR_RENDERED__ && e.id ) {
          l();
          const t = () => {
            e.id in i && i[ e.id ]()
          };
          e.loader().then( t, e => {
            s.error( e ), t()
          } )
        }
        return a( e )
      }
      d.preloadReactLoadable = () => ( l(), Promise.all( c ) ), d.getRenderedOnServerSide = () => Array.from( u ), e.exports = d
    },
    OAym: function ( e, t, n ) {
      "use strict";
      n( "ERkP" );
      var a = n( "RfuI" );
      const r = Object( a.a )( {
        id: "DsTZh",
        name: "EditorLoaderLoader",
        loader: () => Promise.all( [ n.e( 72 ), n.e( "page.editor-loader~04e538d5" ) ] ).then( n.bind( null, "Cy2Q" ) )
      } );
      t.a = r
    },
    "OC+J": function ( e, t, n ) {
      "use strict";
      n.d( t, "a", ( function () {
        return a
      } ) );
      const a = ( {
        type: e,
        accountId: t,
        displayName: n,
        profilePicture: {
          path: a
        } = {}
      } = {} ) => a ? "anonymous" === e ? {
        isAnonymous: !0,
        avatarUrl: a
      } : {
        isAnonymous: !1,
        displayName: n,
        avatarUrl: a,
        accountId: t
      } : {}
    },
    OzZX: function ( e, t, n ) {
      "use strict";
      n.d( t, "a", ( function () {
        return r
      } ) ), n.d( t, "c", ( function () {
        return o
      } ) ), n.d( t, "b", ( function () {
        return c
      } ) );
      var a = n( "hqKg" );
      const r = e => e.discoveredFeatures,
        o = Object( a.createSelector )( r, e => e.get( "hasLoaded" ) ),
        s = ( e, t ) => t,
        c = Object( a.createSelector )( r, o, s, ( e, t, n ) => {
          if ( !t ) return !0;
          return void 0 !== e.get( "list" ).find( e => e.pluginKey === n.pluginKey && e.featureKey === n.featureKey )
        } );
      Object( a.createSelector )( r, s, ( e, t ) => e.get( "list" ).filter( e => e.pluginKey === t ).map( e => e.featureKey ) )
    },
    PCoL: function ( e, t, n ) {
      "use strict";
      var a = n( "ERkP" ),
        r = n.n( a ),
        o = n( "uDfI" ),
        s = n( "Czhu" );
      n( "aWzz" );
      class c extends a.PureComponent {
        render() {
          const e = this.props.modalComponent;
          return e ? r.a.createElement( e, Object( s.a )( Object( s.a )( {}, this.props.modalProps ), {}, {
            closeModal: this.props.closeModal
          } ) ) : null
        }
      }
      c.defaultProps = {
        modalProps: {}
      };
      var i = n( "TTTN" );
      t.a = Object( o.connect )( e => ( {
        modalComponent: e.modal.modalComponent,
        modalProps: e.modal.modalProps
      } ), e => ( {
        closeModal: () => e( Object( i.a )() )
      } ) )( c )
    },
    PTD4: function ( e, t, n ) {
      "use strict";
      n.d( t, "a", ( function () {
        return r
      } ) );
      var a = n( "RfuI" );
      const r = Object( a.a )( {
        id: "TbiXU",
        name: "CreateDialogBlueprintWizardRenderer",
        loader: () => Promise.all( [ n.e( "vendors~4134d62c" ), n.e( "pseudo-wizard-create-dialog~493df0b3" ) ] ).then( n.bind( null, "681K" ) ).then( ( {
          CreateDialogBlueprintWizardRenderer: e
        } ) => e )
      } )
    },
    QTRv: function ( e, t, n ) {
      "use strict";
      var a = n( "QYv2" ),
        r = n( "Fexb" );
      const o = Object( r.b )();
      t.a = {
        configure( e ) {
          o.configure( e )
        },
        getPluginCodeLanguages( e ) {
          const t = o.getFullPath( "/plugins/newcode/getlanguages.action" );
          o.get( t, {
            callback: e,
            httpCodeHandlers: {
              401: () => Object( a.a )()
            }
          } )
        },
        getWikiConfluenceToXhtml( e, t ) {
          const n = o.getFullPath( "/rest/tinymce/1/wikixhtmlconverter" );
          o.postLegacyResource( n, {
            body: e,
            callback: t,
            httpCodeHandlers: {
              401: () => Object( a.a )()
            },
            headers: {
              Accept: "text/plain, */*",
              "Content-Type": "application/json; charset=utf-8"
            }
          } )
        },
        getWikiMarkdownToXhtml( e, t ) {
          const n = o.getFullPath( "/rest/tinymce/1/markdownxhtmlconverter" );
          o.postLegacyResource( n, {
            body: e,
            callback: t,
            httpCodeHandlers: {
              401: () => Object( a.a )()
            },
            headers: {
              Accept: "text/plain, */*",
              "Content-Type": "application/json; charset=utf-8"
            }
          } )
        }
      }
    },
    QYv2: function ( e, t, n ) {
      "use strict";
      var a = n( "Jygk" ),
        r = n.n( a ),
        o = n( "7LQG" );

      function s() {
        r.a.location = `${o.a}/login.action?os_destination=${r.a.location.pathname.replace(o.a,"")}`
      }
      n.d( t, "a", ( function () {
        return s
      } ) )
    },
    Qgdh: function ( e, t, n ) {
      "use strict";
      n.d( t, "a", ( function () {
        return o
      } ) );
      var a = n( "Svze" );
      const r = Object( a.Map )( {
        dialogId: null
      } );

      function o( e = r, t ) {
        switch ( t.type ) {
          case "OPEN_DIALOG":
            return e.set( "dialogId", t.dialogId );
          case "CLOSE_DIALOG":
            return e.set( "dialogId", null )
        }
        return e
      }
    },
    QmUA: function ( e, t, n ) {
      "use strict";
      n.d( t, "b", ( function () {
        return r
      } ) ), n.d( t, "d", ( function () {
        return o
      } ) ), n.d( t, "a", ( function () {
        return s
      } ) ), n.d( t, "c", ( function () {
        return c
      } ) );
      var a = n( "yS9+" );
      const r = "OPEN_PREVIEWER",
        o = Object( a.b )( r ),
        s = "CLOSE_PREVIEWER",
        c = Object( a.b )( s )
    },
    QqfF: function ( e, t, n ) {
      "use strict";
      n.d( t, "a", ( function () {
        return o
      } ) ), n.d( t, "b", ( function () {
        return s
      } ) );
      var a = n( "ERkP" ),
        r = n.n( a );
      const o = Object( a.createContext )( {
        hasContentChanged: !1,
        onChange: () => {},
        resetContentChanged: () => {}
      } );
      o.displayName = "CommentContentContext";
      const s = ( {
        children: e
      } ) => {
        const [ t, n ] = Object( a.useState )( !1 );
        return r.a.createElement( o.Provider, {
          value: {
            hasContentChanged: t,
            onChange: () => n( !0 ),
            resetContentChanged: () => n( !1 )
          }
        }, e )
      }
    },
    ROYt: function ( e, t, n ) {
      "use strict";
      var a = n( "ilPL" ),
        r = n( "Jygk" ),
        o = n.n( r ),
        s = n( "7LQG" );
      a.a.configure( {
        endpoint: o.a.location ? `${o.a.location.protocol}//${o.a.location.host}` : "",
        contextPath: s.a,
        extraHeaders: {
          "X-Requested-With": "XMLHttpRequest"
        }
      } );
      t.a = a.a
    },
    RRDH: function ( e, t, n ) {
      "use strict";
      n.d( t, "a", ( function () {
        return o
      } ) ), n.d( t, "b", ( function () {
        return s
      } ) );
      var a = n( "RfuI" ),
        r = n( "DX8K" );
      const o = Object( a.a )( {
          id: "YQClN",
          name: "AppNavigationLoader",
          loader: async () => ( await Promise.all( [ n.e( "atlaskit~66e23772" ), n.e( "afp~af75c846" ), n.e( "vendors~4134d62c" ), n.e( 0 ), n.e( 2 ), n.e( 4 ), n.e( 3 ), n.e( 1 ), n.e( 13 ), n.e( 39 ), n.e( 57 ), n.e( 55 ), n.e( 56 ), n.e( 78 ), n.e( 75 ), n.e( 80 ), n.e( 87 ), n.e( 94 ), n.e( 107 ), n.e( 104 ), n.e( "app-navigation~b59ad437" ) ] ).then( n.bind( null, "1gSM" ) ) ).AppNavigationLoader
        } ),
        s = Object( a.a )( {
          id: "b8l54",
          name: "AppNavigation",
          loader: async () => ( await Promise.all( [ n.e( "atlaskit~66e23772" ), n.e( "afp~af75c846" ), n.e( "vendors~4134d62c" ), n.e( 0 ), n.e( 2 ), n.e( 4 ), n.e( 3 ), n.e( 1 ), n.e( 13 ), n.e( 39 ), n.e( 57 ), n.e( 55 ), n.e( 56 ), n.e( 75 ), n.e( 80 ), n.e( 87 ), n.e( 94 ), n.e( 104 ), n.e( "app-navigation-base~b59ad437" ) ] ).then( n.bind( null, "FfWo" ) ) ).AppNavigation,
          loading: r.a
        } )
    },
    RZKf: function ( e, t, n ) {
      "use strict";
      var a = n( "RfuI" );
      t.a = Object( a.a )( {
        id: "HcbRZ",
        name: "packages/confluence-fabric-editor/src/components/ContentEditorBindings/ContentEditorBindingsLoader.ts",
        loader: () => Promise.all( [ n.e( "atlaskit~66e23772" ), n.e( "vendors~4134d62c" ), n.e( 8 ), n.e( "graphql.prosemirror-synchrony-plugin.content-reconciler~4134d62c" ), n.e( 131 ), n.e( "collab.editor.container~dc51bad7" ) ] ).then( n.bind( null, "ktcL" ) )
      } )
    },
    RfuI: function ( e, t, n ) {
      "use strict";
      n.d( t, "a", ( function () {
        return d
      } ) );
      var a = n( "HbGN" ),
        r = n( "Czhu" ),
        o = n( "ERkP" ),
        s = n.n( o ),
        c = n( "U63R" ),
        i = n( "axEa" ),
        u = n( "NGEh" );
      const l = Object( i.a )();

      function d( {
        id: e,
        name: t,
        loader: n,
        loading: i = ( () => null )
      } ) {
        let d;
        const E = `Loadable(${t=t||e})`,
          p = ( e, t ) => l.push( {
            name: e,
            task: () => ( d || ( d = n() ), d ),
            priority: t
          } );
        let f = null;
        const m = () => p( E, c.a.IMMEDIATE ).then( e => f = e );
        "undefined" != typeof window && window.__SSR_RENDERED__ && Object( u.b )( e, m );
        const b = e => {
          let {
            priority: t = c.a.NORMAL,
            delayRender: n,
            defer: u
          } = e, l = Object( a.a )( e, [ "priority", "delayRender", "defer" ] );
          const d = "number" != typeof n || window.__SSR_RENDERED__ ? 0 : n,
            [ m, b ] = Object( o.useState )( () => f );
          return Object( o.useLayoutEffect )( () => {
            if ( m || u ) return;
            let e = !0;
            const n = performance.now();
            return p( E, d ? c.a.IMMEDIATE : t ).then( t => {
              if ( e ) {
                f = t;
                const e = d - ( performance.now() - n );
                e > 0 ? setTimeout( () => {
                  b( () => t )
                }, e ) : b( () => t )
              }
            } ), () => {
              e = !1
            }
          }, [ u, m ] ), m ? function ( e, t ) {
            const n = "default" in e ? e.default : e;
            return s.a.createElement( n, Object( r.a )( {}, t ) )
          }( m, l ) : s.a.createElement( i, l )
        };
        return b.displayName = E, b.preload = ( e = c.a.BACKGROUND ) => f ? Promise.resolve( f ) : p( E + ".preload()", e ).then( e => f = e ), b
      }
    },
    Ru86: function ( e, t, n ) {
      "use strict";
      n.d( t, "q", ( function () {
        return s
      } ) ), n.d( t, "e", ( function () {
        return c
      } ) ), n.d( t, "b", ( function () {
        return i
      } ) ), n.d( t, "k", ( function () {
        return u
      } ) ), n.d( t, "j", ( function () {
        return l
      } ) ), n.d( t, "f", ( function () {
        return d
      } ) ), n.d( t, "l", ( function () {
        return E
      } ) ), n.d( t, "m", ( function () {
        return p
      } ) ), n.d( t, "o", ( function () {
        return f
      } ) ), n.d( t, "p", ( function () {
        return m
      } ) ), n.d( t, "u", ( function () {
        return b
      } ) ), n.d( t, "v", ( function () {
        return O
      } ) ), n.d( t, "r", ( function () {
        return h
      } ) ), n.d( t, "w", ( function () {
        return g
      } ) ), n.d( t, "t", ( function () {
        return _
      } ) ), n.d( t, "s", ( function () {
        return T
      } ) ), n.d( t, "n", ( function () {
        return I
      } ) ), n.d( t, "a", ( function () {
        return S
      } ) ), n.d( t, "i", ( function () {
        return C
      } ) ), n.d( t, "h", ( function () {
        return A
      } ) ), n.d( t, "g", ( function () {
        return y
      } ) ), n.d( t, "c", ( function () {
        return R
      } ) ), n.d( t, "d", ( function () {
        return v
      } ) );
      var a = n( "Jygk" ),
        r = n.n( a ),
        o = n( "RfuI" );
      const s = Object( o.a )( {
          id: "WBpuA",
          name: "LazySpaceBlogRedirect",
          loader: () => new Promise( e => {
            Promise.all( [ n.e( "atlaskit~66e23772" ), n.e( "vendors~4134d62c" ), n.e( "adg3.space.blog~493df0b3" ) ] ).then( n.bind( null, "sPDP" ) ).then( t => {
              e( t.SpaceBlogRedirect )
            } )
          } )
        } ),
        c = Object( o.a )( {
          id: "qezjx",
          name: "LazyDashboardPage",
          loader: () => Promise.all( [ n.e( "atlaskit~66e23772" ), n.e( "vendors~4134d62c" ), n.e( 0 ), n.e( "dashboard.container~493df0b3" ) ] ).then( n.bind( null, "Nt+K" ) )
        } ),
        i = Object( o.a )( {
          id: "bTGfJ",
          name: "LazyAllUpdatesPageContainer",
          loader: () => Promise.all( [ n.e( "atlaskit~66e23772" ), n.e( "vendors~4134d62c" ), n.e( 0 ), n.e( 14 ), n.e( 42 ), n.e( 83 ), n.e( "dashboard.all-updates~493df0b3" ) ] ).then( n.bind( null, "3bVn" ) )
        } ),
        u = Object( o.a )( {
          id: "gdEW8",
          name: "LazyPopularPageContainer",
          loader: () => Promise.all( [ n.e( "atlaskit~66e23772" ), n.e( "vendors~4134d62c" ), n.e( 0 ), n.e( 6 ), n.e( 14 ), n.e( 42 ), n.e( 83 ), n.e( "dashboard.popular~493df0b3" ) ] ).then( n.bind( null, "k5+Y" ) )
        } ),
        l = Object( o.a )( {
          id: "fm5Sf",
          name: "LazyMyWorkPage",
          loader: () => n.e( "dashboard.my-work~21833f8f" ).then( n.bind( null, "B3av" ) )
        } ),
        d = Object( o.a )( {
          id: "SYHHm",
          name: "LazyDraftsPage",
          loader: () => Promise.all( [ n.e( "atlaskit~66e23772" ), n.e( "vendors~4134d62c" ), n.e( 0 ), n.e( 38 ), n.e( 42 ), n.e( 77 ), n.e( "dashboard.drafts~493df0b3" ) ] ).then( n.bind( null, "Njeu" ) )
        } ),
        E = Object( o.a )( {
          id: "VcQcv",
          name: "LazyRecentWorkPageContainer",
          loader: () => Promise.all( [ n.e( "atlaskit~66e23772" ), n.e( "vendors~4134d62c" ), n.e( 0 ), n.e( 38 ), n.e( 42 ), n.e( 77 ), n.e( "dashboard.recent-work~493df0b3" ) ] ).then( n.bind( null, "bits" ) )
        } ),
        p = Object( o.a )( {
          id: "yksRz",
          name: "LazyRecentlyVisitedPageContainer",
          loader: () => Promise.all( [ n.e( "atlaskit~66e23772" ), n.e( "vendors~4134d62c" ), n.e( 0 ), n.e( 38 ), n.e( 42 ), n.e( 77 ), n.e( "dashboard.recently-visited~069f6afa" ) ] ).then( n.bind( null, "4M2f" ) )
        } ),
        f = Object( o.a )( {
          id: "i3b96",
          name: "LazySavedForLaterPageContainer",
          loader: () => Promise.all( [ n.e( "atlaskit~66e23772" ), n.e( "vendors~4134d62c" ), n.e( 0 ), n.e( 38 ), n.e( 42 ), n.e( 77 ), n.e( "dashboard.saved-for-later~493df0b3" ) ] ).then( n.bind( null, "HdNr" ) )
        } ),
        m = Object( o.a )( {
          id: "tg4pq",
          name: "LazySpaceBase",
          loader: () => Promise.all( [ n.e( "vendors~4134d62c" ), n.e( "space.base~493df0b3" ) ] ).then( n.bind( null, "VC+X" ) )
        } ),
        b = Object( o.a )( {
          id: "+8Y6z",
          name: "LazySpaceIndexRedirect",
          loader: () => n.e( "space.index-redirect~21833f8f" ).then( n.bind( null, "4cn3" ) )
        } ),
        O = Object( o.a )( {
          id: "PXdwI",
          name: "LazySpaceOverview",
          loader: () => Promise.all( [ n.e( "atlaskit~66e23772" ), n.e( "afp~af75c846" ), n.e( "vendors~4134d62c" ), n.e( 0 ), n.e( 4 ), n.e( 5 ), n.e( 6 ), n.e( 13 ), n.e( 14 ), n.e( 26 ), n.e( 32 ), n.e( 38 ), n.e( 44 ), n.e( 50 ), n.e( 53 ), n.e( 56 ), n.e( 72 ), n.e( 71 ), n.e( 85 ), n.e( 90 ), n.e( 92 ), n.e( 119 ), n.e( "space.overview~493df0b3" ) ] ).then( n.bind( null, "p5LB" ) )
        } ),
        h = Object( o.a )( {
          id: "Hpg+6",
          name: "LazySpaceCalendarContainer",
          loader: () => Promise.all( [ n.e( "atlaskit~66e23772" ), n.e( "vendors~4134d62c" ), n.e( "space.calendar~493df0b3" ) ] ).then( n.bind( null, "vCzq" ) )
        } ),
        g = Object( o.a )( {
          id: "OOi2u",
          name: "LazySpaceViewPage",
          loader: () => ( r.a.performance.mark( "CFP-63.view-page.classic.lazyspace.load" ), Promise.all( [ n.e( "atlaskit~66e23772" ), n.e( "vendors~4134d62c" ), n.e( 0 ), n.e( 6 ), n.e( 13 ), n.e( 14 ), n.e( 32 ), n.e( 38 ), n.e( 41 ), n.e( 50 ), n.e( 53 ), n.e( 85 ), n.e( "space.viewpage~493df0b3" ) ] ).then( n.bind( null, "5MFG" ) ) )
        } ),
        _ = Object( o.a )( {
          id: "Htev3",
          name: "LazySpaceEditPage",
          loader: () => Promise.all( [ n.e( "atlaskit~66e23772" ), n.e( "afp~af75c846" ), n.e( "vendors~4134d62c" ), n.e( 0 ), n.e( 2 ), n.e( 3 ), n.e( 13 ), n.e( 26 ), n.e( 44 ), n.e( 72 ), n.e( "EditLabelDialog~b59ad437" ), n.e( 89 ), n.e( 105 ), n.e( "space.editpage~f71cff67" ) ] ).then( n.bind( null, "dNhJ" ) )
        } ),
        T = Object( o.a )( {
          id: "nYMT5",
          name: "LazySpaceCreatePage",
          loader: () => Promise.all( [ n.e( "atlaskit~66e23772" ), n.e( "afp~af75c846" ), n.e( "vendors~4134d62c" ), n.e( 0 ), n.e( 2 ), n.e( 3 ), n.e( 13 ), n.e( 26 ), n.e( 44 ), n.e( 72 ), n.e( "EditLabelDialog~b59ad437" ), n.e( 89 ), n.e( 105 ), n.e( "space.createpage~069f6afa" ) ] ).then( n.bind( null, "eUxt" ) )
        } ),
        I = Object( o.a )( {
          id: "BG/9+",
          name: "LazyRouteToRightEditor",
          loader: () => n.e( "redirect.to.fabric~02b072bc" ).then( n.bind( null, "4TsB" ) )
        } ),
        S = Object( o.a )( {
          id: "8CW2H",
          name: "LazyAdvancedSearchPage",
          loader: () => n.e( "search.advanced.next~493df0b3" ).then( n.bind( null, "o0P/" ) )
        } ),
        C = Object( o.a )( {
          id: "jtXIW",
          name: "LazyMobileWebContainer",
          loader: () => Promise.all( [ n.e( "atlaskit~66e23772" ), n.e( "vendors~4134d62c" ), n.e( 0 ), n.e( 4 ), n.e( 5 ), n.e( 6 ), n.e( 7 ), n.e( 8 ), n.e( 9 ), n.e( 11 ), n.e( 10 ), n.e( 12 ), n.e( 14 ), n.e( 17 ), n.e( 19 ), n.e( 20 ), n.e( 21 ), n.e( 25 ), n.e( 29 ), n.e( 32 ), n.e( 38 ), n.e( 50 ), n.e( 53 ), n.e( 85 ), n.e( 126 ), n.e( "mobile-web~493df0b3" ) ] ).then( n.bind( null, "9AZ9" ) )
        } ),
        A = ( Object( o.a )( {
          id: "WFUoS",
          name: "LazyRelevantActivityPage",
          loader: () => Promise.all( [ n.e( "atlaskit~66e23772" ), n.e( "dashboard.relevant~493df0b3" ) ] ).then( n.bind( null, "UTfd" ) )
        } ), Object( o.a )( {
          id: "23fyG",
          name: "LazyGoToHome",
          loader: () => Promise.all( [ n.e( "atlaskit~66e23772" ), n.e( "vendors~4134d62c" ), n.e( 0 ), n.e( 6 ), n.e( 14 ), n.e( 42 ), n.e( 83 ), n.e( "dashboard.popular~493df0b3" ), n.e( "home.go-to-home~493df0b3" ) ] ).then( n.bind( null, "1JVZ" ) )
        } ) ),
        y = Object( o.a )( {
          id: "07gZ2",
          name: "LazyDwellTime",
          loader: () => n.e( "dwell-time~493df0b3" ).then( n.bind( null, "093b" ) )
        } ),
        R = Object( o.a )( {
          id: "TK9oj",
          name: "LazyConfluenceNotFound",
          loader: () => Promise.all( [ n.e( "atlaskit~66e23772" ), n.e( "afp~af75c846" ), n.e( "vendors~4134d62c" ), n.e( 91 ), n.e( "not-found~493df0b3" ) ] ).then( n.bind( null, "UrEW" ) )
        } ),
        v = Object( o.a )( {
          id: "HjzWw",
          name: "LazyCreateSpaceQueryRenderer",
          loader: () => n.e( "create-space-query-renderer~493df0b3" ).then( n.bind( null, "RdOx" ) ).then( ( {
            CreateSpaceQueryRenderer: e
          } ) => e )
        } )
    },
    S1Bf: function ( e, t, n ) {
      "use strict";
      n.d( t, "a", ( function () {
        return o
      } ) ), n.d( t, "c", ( function () {
        return s
      } ) ), n.d( t, "b", ( function () {
        return c
      } ) ), n.d( t, "d", ( function () {
        return i
      } ) ), n.d( t, "e", ( function () {
        return u
      } ) ), n.d( t, "m", ( function () {
        return l
      } ) ), n.d( t, "j", ( function () {
        return d
      } ) ), n.d( t, "f", ( function () {
        return E
      } ) ), n.d( t, "k", ( function () {
        return p
      } ) ), n.d( t, "n", ( function () {
        return f
      } ) ), n.d( t, "i", ( function () {
        return m
      } ) ), n.d( t, "l", ( function () {
        return b
      } ) ), n.d( t, "h", ( function () {
        return O
      } ) ), n.d( t, "g", ( function () {
        return h
      } ) ), n.d( t, "o", ( function () {
        return g
      } ) );
      var a = n( "yS9+" ),
        r = n( "ROYt" );
      const o = "ADD_TEMPLATE_LABELS",
        s = "GET_TEMPLATE_LABELS",
        c = "DELETE_TEMPLATE_LABEL",
        i = "GET_TEMPLATE_LABELS_FROM_STORE",
        u = Object( a.c )( o, r.a.template.addLabels ),
        l = Object( a.c )( s, r.a.template.allLabels ),
        d = Object( a.c )( c, r.a.template.deleteLabel ),
        E = Object( a.b )( o ),
        p = Object( a.b )( c + "_SUCCESS" ),
        f = Object( a.b )( i ),
        m = Object( a.b )( "CLOSE_EDIT_LABEL_DIALOG" ),
        b = Object( a.c )( "SUGGEST_LABELS", r.a.labels.suggest ),
        O = Object( a.b )( "CLEAR_SUGGESTIONS" ),
        h = Object( a.b )( "CLEAR_ERROR_MESSAGES" ),
        g = Object( a.b )( "SHOW_EDIT_LABEL_DIALOG" )
    },
    S2j0: function ( e, t, n ) {
      "use strict";
      var a = n( "daKX" ),
        r = n( "aoYE" );
      let o = null;
      n.d( t, "a", ( function () {
        return c
      } ) );
      Object( a.a )( "wrm" );
      let s = !0;

      function c( e, t, n ) {
        t && n && s ? Promise.all( [ Object( r.a )(), o || ( o = new Promise( e => {
          const t = window.setInterval( () => {
            window.WRM && "function" == typeof window.WRM.require && ( window.clearInterval( t ), e( window.WRM.require ) )
          }, 50 )
        } ), o ) ] ).then( ( [ n, a ] ) => a( Array.isArray( e ) ? e : [ e ], t ) ) : n && setTimeout( n )
      }
    },
    SRtI: function ( e, t, n ) {
      "use strict";
      n.d( t, "b", ( function () {
        return a
      } ) ), n.d( t, "a", ( function () {
        return r
      } ) );
      const a = {
          DASHBOARD_ROUTE: "dashboard.route.last.v2",
          DISCOVER_ROUTE: "discover.route.last",
          MY_WORK_ROUTE: "my-work.route.last",
          SPACE_ROUTE: "space.route.last",
          GLOBAL_SIDEBAR_PANEL: "sidebar.global.panel",
          TINYMCE_PAGE_JUST_PUBLISHED: "editor.tinyMCE.just.published",
          EDITOR_SURVEY_LAST_SUBMITTED: "editor.survey.last.submitted",
          SUPERADMIN_SURVEY_REQUESTED: "superadmin.survey.requested",
          SUPERADMIN_SURVEY_SUBMITTED: "superadmin.survey.submitted",
          SUPERADMIN_SESSION_EXPIRED: "superadmin.session.expired",
          RESTRICTED_PAGE_CONFIRMED: "restricted.page.confirmed",
          HOME_ONBOARDING: "home.onboarding",
          PAGE_JUST_CONVERTED: "migration.page.just.converted",
          NAVIGATION_CLASSIC_OPT_OUT: "navigation.classic.opt.out",
          NAVIGATION_HOME_OPT_OUT: "navigation.home.opt.out",
          NAVIGATION_DEFAULT_OPTED_OUT: "navigation.default.opted.out",
          NAVIGATION_OPT_IN_SEEN_SPOTLIGHT: "navigation.opt.in.seen.spotlight",
          NAVIGATION_CLICKED_LOUD_OPT_IN_OR_VIEWED_FLAG: "navigation.clicked.loud.opt.in.or.viewed.flag",
          HOME_SECTION_COLLAPSED: "home.section.collapsed",
          RECENTLY_WATCHED_SPACE: "recentlyWatchedSpace",
          GROWTH_EXPERIMENT_REQUEST_UPGRADE_SENT: "growth.experiment.request.upgrade.sent",
          GROWTH_EXPERIMENT_UPGRADE_DISMISSED_COUNT: "growth.experiment.engagedUpgrade.dismissed.count",
          GROWTH_EXPERIMENT_UPGRADE_LAST_DISMISSED_DATE: "growth.experiment.engagedUpgrade.last.dismissed.date",
          LOCAL_STORAGE_DISPLAYS_NEXT_AT_KEY: "growth.experiment.engagedBilling.displays.next.at",
          LOCAL_STORAGE_HAS_BILLING_DETAILS: "growth.experiment.engagedBilling.has.billing.details",
          LOCAL_STORAGE_BILLING_API_NEXT_CALLED_AT_KEY: "growth.experiment.engagedBilling.billing.api.next.called.at",
          GROWTH_EXPERIMENT_PERSISTENT_UPGRADE_PRETRIAL_BANNER: "growth.experiment.persistent.upgrade.preTrial.banner",
          GROWTH_EXPERIMENT_PERSISTENT_UPGRADE_TRIAL_BANNER: "growth.experiment.persistent.upgrade.trial.banner",
          GROWTH_EXPERIMENT_PERSISTENT_UPGRADE_POSTTRIAL_BANNER: "growth.experiment.persistent.upgrade.postTrial.banner",
          HOME_SIDEBAR_WIDTH: "home.sidebar.width",
          STARRED_FEATURE_FLAGS: "confluence-frontend-next.starredFeatureFlags",
          COPIED_SPACE_PERMISSIONS: "copied.space.permissions",
          PERSIST_SCROLL_POSITION_IN_VIEW_PAGE: "editor-persit-scroll-position",
          ID_START_CONTENT_IN_VIEW_PAGE: "main-content",
          FABRIC_PAGE_OPTIN_MIGRATION_BANNER: "fabric.page.optin.migration.banner.discovery.feature",
          FABRIC_TEMPLATE_MIGRATION_SUCCESS_FLAG: "fabric-template-migration.success.flag",
          FABRIC_TEMPLATE_MIGRATION_ERROR_FLAG: "fabric-template-migration.error.flag",
          ONBOARDING_PAGE_REDIRECT: "onboardingPageRedirect",
          OVERRIDES_STORAGE_KEY: "confluence-frontend-next.featureFlagLocalOverrides",
          PERSONAL_SPACE_NUDGE_KEY: "personal.space.nudge",
          BYLINE_APPS_SHOW_ALL: "byline.apps.show-all",
          SPACENAV_APPS_SHOW_ALL: "spacenav.apps.show-all",
          HIDE_BULK_CONFIRMATION_DIALOG_LOCAL_STORAGE_KEY: "archive-pages.bulk-archive.confirmation-dialog.opt-out",
          ONBOARDING_STEP_INDEX: "onboarding.account.setup.step.index",
          ONBOARDING_FORM_VALUES: "onboarding.account.setup.form.values"
        },
        r = {
          PERSISTED_LEFT_SIDEBAR_WIDTH: "persisted.left.sidebar.width",
          PERSISTED_LEFT_SIDEBAR_COLLAPSED: "persisted.left.sidebar.collapsed"
        }
    },
    Su1A: function ( e, t, n ) {
      "use strict";
      n.d( t, "a", ( function () {
        return o
      } ) );
      var a = n( "7kiZ" ),
        r = n( "hOo4" );
      const o = ( {
        isLicensed: e,
        selectedSpaceKey: t
      } ) => {
        const n = [];
        return e ? n.push( Object( a.a )( {
          query: r.d
        } ), Object( a.a )( {
          query: r.b,
          variables: {
            selectedSpaceKey: t
          }
        } ) ) : n.push( Object( a.a )( {
          query: r.a
        } ) ), Promise.all( n )
      }
    },
    T4MV: function ( e, t, n ) {
      "use strict";
      n.d( t, "a", ( function () {
        return a
      } ) );
      const a = e => !/^[0-9]+$/.test( e )
    },
    TFtl: function ( e, t, n ) {
      "use strict";
      n.d( t, "a", ( function () {
        return r
      } ) ), n.d( t, "b", ( function () {
        return o
      } ) );
      var a = n( "RfuI" );
      const r = Object( a.a )( {
        id: "tK0es",
        name: "LazyForgeAdminApp",
        loader: async () => ( await n.e( "lazy-global-settings-forge-apps~dade3008" ).then( n.bind( null, "U1EV" ) ) ).AdminForgeApp
      } );
      r.displayName = "LazyAdminForgeApp";
      const o = Object( a.a )( {
        id: "uTJKT",
        name: "LazyAdminForgeApps",
        loader: async () => ( await n.e( "lazy-global-settings-forge-apps~dade3008" ).then( n.bind( null, "4GnX" ) ) ).AdminForgeApps
      } );
      o.displayName = "LazyAdminForgeApps"
    },
    TOvH: function ( e, t, n ) {
      "use strict";
      var a = n( "RfuI" );
      t.a = Object( a.a )( {
        id: "wso4J",
        name: "packages/confluence-fabric-editor/src/components/FullPageEditorWrapper/FullPageEditorWrapperLoader.js",
        loader: () => Promise.all( [ n.e( "vendors~4134d62c" ), n.e( 13 ), n.e( "fullpage.editor.wrapper~493df0b3" ) ] ).then( n.bind( null, "XDCa" ) )
      } )
    },
    TPRh: function ( e, t, n ) {
      "use strict";
      n.d( t, "a", ( function () {
        return s
      } ) );
      var a = n( "H5qd" ),
        r = n.n( a ),
        o = n( "j+hl" );
      const s = r.a `query ContentQuery($contentId:ID$versionOverride:Int$embeddedContentRender:String)@SLA{content(id:$contentId version:$versionOverride embeddedContentRender:$embeddedContentRender){nodes{id type space{id key}version{confRev}metadata{lastModifiedDate frontend{spaFriendly}}body{dynamic{representation value webresource{tags{css}uris{js css}}}}...contentAppearancePublishedFragment}}}${o.b}`
    },
    TTTN: function ( e, t, n ) {
      "use strict";
      n.d( t, "a", ( function () {
        return r
      } ) ), n.d( t, "b", ( function () {
        return o
      } ) );
      var a = n( "yS9+" );
      const r = Object( a.b )( "CLOSE_ACTIVE_MODAL" ),
        o = Object( a.b )( "SET_ACTIVE_MODAL" )
    },
    TU9K: function ( e, t, n ) {
      "use strict";
      n.d( t, "a", ( function () {
        return r
      } ) );
      var a = n( "ERkP" );
      const r = Object( a.createContext )( {
        isExternalShareRequest: !1
      } )
    },
    TbBM: function ( e, t, n ) {
      "use strict";
      var a = n( "Czhu" ),
        r = n( "3kaz" ),
        o = n( "cld1" ),
        s = n( "hpu0" ),
        c = n( "3VMZ" );
      const i = ( e, t ) => {
        let n;
        const {
          id: a,
          type: s,
          version: c
        } = e.response;
        try {
          const e = t.router.params.spaceKey;
          n = Object( r.c )( t, e ).id
        } catch ( l ) {}
        const i = {
          containerType: "space",
          containerId: n,
          source: "editPageScreen",
          objectType: "page",
          objectId: a,
          action: 1 === c.number ? "created" : "updated",
          actionSubject: "page",
          actionSubjectId: a,
          attributes: {
            pageType: s,
            versionNum: c.number,
            createExperience: null
          }
        };
        var u;
        i.attributes.createExperience = "createPageModal", u = i, Object( o.getAnalyticsWebClient )().then( e => {
          e.sendTrackEvent( u )
        } )
      };
      t.a = e => t => n => {
        var r;
        const o = e.getState(),
          {
            error: u,
            synchronyConnectionStatus: l,
            isKnownError: d,
            nextTryIn: E
          } = n;
        switch ( n.type ) {
          case "EDITOR_CONTENT_PUBLISH_SUCCESS":
          case "EDITOR_CONTENT_FROM_TEMPLATE_PUBLISH_SUCCESS":
            i( n, o ), Object( s.b )().succeed( {
              name: c.a.EDIT_PAGE_PUBLISH
            } );
            break;
          case "EDITOR_CONTENT_PUBLISH_FAILURE":
          case "EDITOR_CONTENT_FROM_TEMPLATE_PUBLISH_FAILURE":
            const e = ( null != ( r = u ) ? r.statusCode : r ) || 0;
            if ( 0 === e || e >= 500 && e <= 599 ) Object( s.c )( c.a.EDIT_PAGE_PUBLISH, u );
            else if ( e >= 400 && e <= 499 ) {
              var p, f;
              Object( s.b )().abort( {
                name: c.a.EDIT_PAGE_PUBLISH,
                reason: ( null != ( f = u ) ? f.message : f ) || ( null != ( p = n ) && null != ( p = p.message ) ? p.message : p ),
                checkForTimeout: !1
              } )
            }
            break;
          case "FETCH_RECONCILED_EDITOR_CONTENT_FAILURE":
            const t = Object( a.a )( Object( a.a )( {}, u.attributes ), {}, {
              synchronyConnectionStatus: String( l ),
              stack: u.stack,
              statusCode: u.statusCode
            } );
            E || [ c.a.EDIT_PAGE_LOAD, c.a.EDIT_PAGE ].forEach( e => {
              d || !window.navigator.onLine ? Object( s.b )().abort( {
                name: e,
                reason: u.message,
                attributes: t,
                checkForTimeout: !1
              } ) : Object( s.c )( e, u, t )
            } )
        }
        return t( n )
      }
    },
    "U+B7": function ( e, t, n ) {
      "use strict";
      n.d( t, "b", ( function () {
        return a
      } ) ), n.d( t, "a", ( function () {
        return r
      } ) );
      const a = e => "taskSuccess" === e.action || "taskAbort" === e.action || "taskFail" === e.action,
        r = ( e, ...t ) => t.includes( e.name )
    },
    U63R: function ( e, t, n ) {
      "use strict";
      n.d( t, "a", ( function () {
        return a
      } ) );
      const a = {
        IMMEDIATE: 0,
        NORMAL: 1,
        BACKGROUND: 2
      }
    },
    UIW9: function ( e, t, n ) {
      "use strict";
      n.d( t, "a", ( function () {
        return s
      } ) );
      var a = n( "zjfJ" ),
        r = n( "ERkP" ),
        o = ( n( "aWzz" ), n( "liLY" ) );
      class s extends r.Component {
        constructor( e ) {
          if ( super( e ), e.markBeforeMount ) {
            const {
              subject: e,
              subjectId: t
            } = this.props;
            Object( o.e )( {
              subject: e,
              subjectId: t
            } )
          }
        }
        componentDidMount() {
          const {
            markBeforeMount: e,
            subject: t,
            subjectId: n
          } = this.props;
          e || Object( o.e )( {
            subject: t,
            subjectId: n
          } )
        }
        render() {
          return null
        }
      }
      Object( a.a )( s, "defaultProps", {
        subjectId: "",
        markBeforeMount: !1
      } )
    },
    UTko: function ( e, t, n ) {
      "use strict";
      n.d( t, "a", ( function () {
        return r
      } ) );
      var a = n( "94Z3" );
      class r extends a.a {
        constructor( e, t ) {
          super( e + " rate limit exceeded", t )
        }
      }
    },
    UYEP: function ( e, t ) {
      e.exports = Backbone
    },
    Ua4J: function ( e, t, n ) {
      "use strict";
      n.d( t, "a", ( function () {
        return c
      } ) );
      var a = n( "ERkP" );
      const r = () => null,
        o = () => "",
        s = () => {},
        c = n.n( a ).a.createContext( {
          getHref: o,
          history: null,
          location: null,
          match: null,
          transitionId: null,
          toUrl: o,
          matchRoute: r,
          matchSupportedRoute: r,
          getQueryParams: () => ( {} ),
          setQueryParams: s,
          getHash: o,
          setHash: s,
          replace: s,
          routes: [],
          push: s,
          open: r,
          onPageReload: s,
          preloadRoute: s
        } );
      c.displayName = "RoutesContext"
    },
    "V+xG": function ( e, t, n ) {
      "use strict";
      n.d( t, "a", ( function () {
        return d
      } ) );
      var a = n( "Czhu" ),
        r = n( "cxan" ),
        o = n( "ERkP" ),
        s = n.n( o ),
        c = ( n( "aWzz" ), n( "RfuI" ) ),
        i = n( "LEcB" ),
        u = n( "G2mK" );
      const l = Object( c.a )( {
          id: "pL7en",
          name: "CommentsSectionFabric",
          loading: () => s.a.createElement( u.a, null ),
          loader: () => Promise.all( [ n.e( "atlaskit~66e23772" ), n.e( "vendors~4134d62c" ), n.e( 0 ), n.e( 4 ), n.e( 5 ), n.e( 6 ), n.e( 7 ), n.e( 8 ), n.e( 9 ), n.e( 11 ), n.e( 10 ), n.e( 12 ), n.e( 13 ), n.e( 14 ), n.e( 16 ), n.e( 18 ), n.e( 17 ), n.e( 19 ), n.e( 20 ), n.e( 21 ), n.e( 25 ), n.e( 29 ), n.e( 31 ), n.e( 35 ), n.e( 30 ), n.e( 36 ), n.e( 40 ), n.e( 41 ), n.e( 47 ), n.e( 129 ), n.e( "page.fabriccomments~493df0b3" ) ] ).then( n.bind( null, "+Wce" ) )
        } ),
        d = e => {
          let t = Object( r.a )( {}, e );
          const {
            fireExposureEvent: n,
            cohort: c
          } = Object( i.a )( "confluence.frontend.page.comments.sticky.editor", [ "default-editor", "not-enrolled", "sticky-editor" ], "not-enrolled", !0 );
          Object( o.useEffect )( () => {
            n()
          }, [ t.contentId, n ] );
          const u = "sticky-editor" === c;
          return s.a.createElement( l, Object( a.a )( Object( a.a )( {}, t ), {}, {
            isStickyEditorEnabled: u
          } ) )
        }
    },
    VKZT: function ( e, t, n ) {
      "use strict";
      var a = n( "hqKg" ),
        r = n( "Svze" );
      class o {
        constructor( e ) {
          this.map = new WeakMap, this.func = e
        }
        memoize( ...e ) {
          return this._memoizeImpl( this.map, e, 0 )
        }
        _memoizeImpl( e, t, n ) {
          let a = e.get( t[ n ] );
          return n === t.length - 1 ? ( a || ( a = this.func( ...t ), e.set( t[ n ], a ) ), a ) : ( a || ( a = new WeakMap, e.set( t[ n ], a ) ), this._memoizeImpl( a, t, n + 1 ) )
        }
      }
      var s = Object( a.createSelectorCreator )( e => {
        const t = new o( e );
        return t.memoize.bind( t )
      } );
      n.d( t, "b", ( function () {
        return l
      } ) ), n.d( t, "c", ( function () {
        return d
      } ) ), n.d( t, "d", ( function () {
        return E
      } ) ), n.d( t, "e", ( function () {
        return p
      } ) ), n.d( t, "a", ( function () {
        return f
      } ) );
      const c = {
        "meeting-notes": !0,
        decisions: !0,
        "kb-how-to-article": !0,
        "file-list": !0,
        retrospective: !0,
        requirements: !0,
        "shared-links": !0,
        "kb-troubleshooting-article": !0,
        "task-report": !0,
        jirareport: !0
      };

      function i( e ) {
        return !e || ! function ( e ) {
          if ( !e ) return 0;
          return e.hasOwnProperty( "size" ) ? e.size : e.length
        }( e )
      }
      const u = s( e => e, ( e, t ) => t, ( e, t, n ) => n, ( e, t, n, a ) => a, ( e, t, n, a ) => {
          let r = a.get( "" + e.version );
          r && ( r = r.set( "by", t.get( r.by ) ) );
          const o = e.container ? n.get( "" + e.container ) : null;
          let s = e.set( "createdBy", t.get( e.createdBy ) ).set( "version", r );
          if ( e.contributors && ( s = s.set( "contributors", e.contributors.map( e => t.get( e ) ) ) ), e.viewers && ( s = s.set( "viewers", e.viewers.map( e => t.get( e ) ) ) ), o ) {
            s = s.set( "container", o );
            const e = o.get( "version" );
            e && ( s = s.setIn( [ "container", "version" ], a.get( "" + e ) ) )
          }
          return s
        } ),
        l = ( e, t ) => {
          const n = t.entities,
            a = n.get( "contents" ).get( "" + e );
          return a && ( a.createdBy || a.version ) ? u( a, n.get( "users" ), n.get( "contents" ), n.get( "versions" ) ) : a
        },
        d = ( e, t ) => ( ( e, t, n ) => e.entities.getIn( [ "contents", t ] ).currentUserPermissions.contains( n ) )( e, t, "update" ),
        E = ( s( e => e, ( e, t ) => t, ( e, t ) => e.set( "createdBy", t.get( e.createdBy ) ) ), () => Object( a.createSelector )( e => e, ( e, t, n ) => n || t.entities.get( "contents" ), ( e, t ) => t.entities.get( "contents" ), ( e, t ) => t.entities.get( "versions" ), ( e, t ) => t.entities.get( "users" ), ( e, t, n, a, o ) => e ? ( "number" != typeof e && "string" != typeof e || ( e = Object( r.List )( [ "" + e ] ) ), e.length && !r.List.isList( e ) && ( e = Object( r.List )( e ) ), e.size ? ( e = e.filter( e => !!t.get( "" + e ) ) ).map( e => {
          const r = t.get( "" + e );
          return r.createdBy || r.version ? u( r, o, n, a ) : r
        } ) : Object( r.List )( [] ) ) : null ) ),
        p = () => Object( a.createSelector )( e => e, ( e, t ) => t.entities.get( "contents" ), ( e, t ) => i( e ) ? Object( r.List )( [] ) : e.map( e => t.get( "" + e ) ) ),
        f = Object( a.createSelector )( ( e, t ) => t.entities.getIn( [ "contents", e ] ), ( e, t ) => t.entities.get( "labels" ), ( e, t ) => {
          if ( !e || !t ) return "";
          const n = e.get( "labels" );
          if ( !n || 0 === n.size ) return "";
          const a = n.find( e => {
            const n = t.get( e );
            return !!n && c[ n.get( "name" ) ]
          } );
          return a ? t.get( a ).get( "name" ) : ""
        } )
    },
    "Vgb+": function ( e, t, n ) {
      "use strict";
      n.d( t, "a", ( function () {
        return r
      } ) );
      var a = n( "ERkP" );
      const r = n.n( a ).a.createContext( void 0 );
      r.displayName = "SessionDataContext"
    },
    W71K: function ( e, t, n ) {
      "use strict";
      n.d( t, "a", ( function () {
        return o
      } ) );
      var a = n( "ERkP" ),
        r = ( n( "aWzz" ), n( "lbXe" ) );
      const o = Object( r.a )()( class extends a.Component {
        componentDidMount() {
          this.sendScreenEvent()
        }
        shouldComponentUpdate( e ) {
          return e.name !== this.props.name || e.id !== this.props.id
        }
        componentDidUpdate() {
          this.sendScreenEvent()
        }
        sendScreenEvent() {
          const {
            createAnalyticsEvent: e,
            name: t,
            attributes: n
          } = this.props;
          e( {
            type: "sendScreenEvent",
            data: {
              name: t,
              attributes: n
            }
          } ).fire()
        }
        render() {
          return null
        }
      } )
    },
    WBjB: function ( e, t, n ) {
      "use strict";
      var a = n( "Czhu" ),
        r = n( "zjfJ" ),
        o = n( "EfWO" ),
        s = n.n( o ),
        c = n( "IR/N" );
      var i = n( "2DAM" ),
        u = n.n( i );
      n.d( t, "a", ( function () {
        return l
      } ) );
      class l {
        static matchFirst( e, t ) {
          for ( const n of e ) {
            if ( !( n instanceof l ) ) continue;
            const e = n.match( t );
            if ( e ) return e
          }
          return null
        }
        constructor( e ) {
          Object( r.a )( this, "name", void 0 ), Object( r.a )( this, "pattern", void 0 ), Object( r.a )( this, "condition", void 0 ), Object( r.a )( this, "isTransition", void 0 ), this.name = e.name, this.pattern = e.pattern, this.condition = e.condition ? e.condition : () => !0, this.isTransition = ( t, n ) => !t || ( e.isTransition ? t.name !== n.name || e.isTransition( t, n ) : t.pathname !== n.pathname )
        }
        match( e ) {
          const t = function ( e, t ) {
            const n = s.a.parse( t, !0 ),
              a = n.pathname || "";
            let r = Object( c.a )( a, {
              path: e,
              exact: !0
            } );
            if ( r || ( r = Object( c.a )( `${a}${n.search}`, {
                path: e,
                exact: !0
              } ) ), !r ) return null;
            const o = {};
            if ( r.params )
              for ( const [ s, c ] of Object.entries( r.params ) ) o[ s ] = decodeURIComponent( c );
            return {
              url: t,
              pathname: a,
              search: n.search || "",
              hash: n.hash || "",
              pattern: e,
              params: o,
              query: n.query
            }
          }( this.pattern, e );
          return t ? this.condition && !this.condition( t ) ? null : Object( a.a )( Object( a.a )( {}, t ), {}, {
            name: this.name
          } ) : null
        }
        toUrl( e, t ) {
          return ( ( e, t = {}, n = {} ) => {
            const r = u.a.compile( e )( t ),
              o = s.a.parse( r, !0 );
            return s.a.format( {
              pathname: o.pathname,
              query: Object( a.a )( Object( a.a )( {}, o.query ), n.query || {} ),
              hash: n.hash
            } )
          } )( this.pattern, e, t )
        }
      }
    },
    WGCh: function ( e, t, n ) {
      "use strict";
      n.d( t, "a", ( function () {
        return i
      } ) );
      var a = n( "Czhu" ),
        r = n( "EfWO" ),
        o = n.n( r ),
        s = n( "ERkP" ),
        c = n( "gScn" );
      const i = Object( c.a )( class extends s.Component {
        componentDidMount() {
          const {
            name: e,
            params: t,
            href: n = null,
            to: r = null,
            usePush: s = !1,
            toUrl: c,
            push: i,
            replace: u,
            forceReload: l = !1,
            getQueryParams: d,
            getHash: E
          } = this.props, p = n || r;
          let f = {};
          p && ( f = o.a.parse( p, !0 ) ), ( s ? i : u )( c( e, Object( a.a )( Object( a.a )( {
            hash: E(),
            query: d()
          }, t ), f ) ), l )
        }
        render() {
          return null
        }
      } )
    },
    WSZS: function ( e, t, n ) {
      "use strict";
      n.d( t, "a", ( function () {
        return o
      } ) );
      var a = n( "ERkP" );
      const r = Object( a.createContext )( [] );
      r.displayName = "LoadableAncestors";
      const o = e => {
        const t = Object( a.useContext )( r ),
          [ n ] = Object( a.useState )( () => e ? [ e ].concat( t ) : t );
        return n
      }
    },
    WWAs: function ( e, t, n ) {
      "use strict";
      n.d( t, "b", ( function () {
        return c
      } ) ), n.d( t, "a", ( function () {
        return i
      } ) );
      var a = n( "Czhu" ),
        r = n( "zjfJ" ),
        o = n( "lZoD" ),
        s = n( "+FBq" );
      const c = ( e, t ) => t.indexOf( t.filter( t => t.name === e )[ 0 ] );
      class i extends o.a {
        constructor( ...e ) {
          super( ...e ), Object( r.a )( this, "state", {
            banners: [],
            isTopNavEnabled: !1
          } ), Object( r.a )( this, "_updateServerRenderedBanners", e => {
            0 === e ? this.hide( "ServerRenderedBanners" ) : this.show( "ServerRenderedBanners", e )
          } ), Object( r.a )( this, "setTopNavEnabled", e => {
            this.state.isTopNavEnabled !== e && this.setState( t => Object( a.a )( Object( a.a )( {}, t ), {}, {
              isTopNavEnabled: e
            } ) )
          } ), Object( r.a )( this, "show", ( e, t ) => {
            const n = c( e, this.state.banners ); - 1 === n ? this.setState( n => {
              const r = [ ...n.banners ];
              return r.push( {
                name: e,
                height: t
              } ), Object( a.a )( Object( a.a )( {}, n ), {}, {
                banners: r
              } )
            } ) : this.state.banners[ n ].height !== t && this.setState( e => {
              const r = [ ...e.banners ];
              return r[ n ].height = t, Object( a.a )( Object( a.a )( {}, e ), {}, {
                banners: r
              } )
            } )
          } ), Object( r.a )( this, "hide", e => {
            const t = c( e, this.state.banners );
            t > -1 && this.setState( e => {
              const n = [ ...e.banners ];
              return n.splice( t, 1 ), Object( a.a )( Object( a.a )( {}, e ), {}, {
                banners: n
              } )
            } )
          } ), Object( r.a )( this, "getTotalHeight", e => {
            const t = this.state.isTopNavEnabled && !1 !== ( e && e.includeTopNav );
            return this.state.banners.reduce( ( e, t ) => e + t.height, t ? s.c : 0 )
          } )
        }
      }
    },
    Wagq: function ( e, t, n ) {
      "use strict";
      n.d( t, "c", ( function () {
        return o
      } ) ), n.d( t, "b", ( function () {
        return s
      } ) ), n.d( t, "a", ( function () {
        return c
      } ) );
      const a = Symbol( "PromiseStatus" ),
        r = Symbol( "PromiseValue" ),
        o = e => {
          const t = e.then( e => ( t[ a ] = "resolved", t[ r ] = e, e ), e => {
            throw t[ a ] = "rejected", t[ r ] = e, e
          } );
          return t[ a ] = "pending", t
        },
        s = e => "resolved" === e[ a ],
        c = e => e[ r ]
    },
    WbUv: function ( e, t, n ) {
      "use strict";
      n.d( t, "d", ( function () {
        return a
      } ) ), n.d( t, "f", ( function () {
        return r
      } ) ), n.d( t, "b", ( function () {
        return o
      } ) ), n.d( t, "e", ( function () {
        return s
      } ) ), n.d( t, "c", ( function () {
        return c
      } ) ), n.d( t, "a", ( function () {
        return i
      } ) ), n.d( t, "h", ( function () {
        return u
      } ) ), n.d( t, "g", ( function () {
        return l
      } ) );
      const a = "confluence.frontend.home",
        r = "cohort-on",
        o = "cohort-control",
        s = "cohort-off",
        c = "aa-dummy",
        i = "banner",
        u = "home-v1.3",
        l = "confluence.frontend.home-preloader"
    },
    X2PC: function ( e, t, n ) {
      "use strict";
      let a;
      n.d( t, "a", ( function () {
          return a
        } ) ),
        function ( e ) {
          e.INHERIT = "inherit", e.BACKBONE = "backbone", e.COLLABORATION = "collaboration", e.CONTENT_EXPERIENCE = "content-experience", e.DISCO = "disco", e.ECOSYSTEM = "ecosystem", e.GROWTH = "growth", e.GROWTH_UPFLOW = "growth-upflow", e.MISSION_CONTROL = "mission-control", e.CC_ONBOARDING = "cc-onboarding", e.TAILORED_EXPERIENCES = "tailored-experiences", e.SMARTS = "smarts"
        }( a || ( a = {} ) )
    },
    XVWa: function ( e, t, n ) {
      "use strict";
      n.d( t, "b", ( function () {
        return a
      } ) ), n.d( t, "a", ( function () {
        return r
      } ) );
      const a = {
          comments: "comments",
          commentsFabric: "comments_fabric",
          contentByline: "content-byline",
          contentHeader: "content-header",
          contentTitle: "content-title",
          contentTools: "content-tools",
          editButton: "edit-button",
          fabricRenderer: "fabric-renderer",
          favouriteButton: "favourite-button",
          labels: "labels",
          likes: "likes",
          linkToPage: "link-to-page",
          mainLayout: "main-layout",
          manageWatcherDialog: "manage-watcher-dialog",
          appNavigation: "app-navigation",
          navigation: "Navigation",
          navigationFMP: "navigation-fmp",
          sideNavigationFMP: "side-navigation-fmp",
          navigationView: "NavigationView",
          recentDropdown: "recent-dropdown",
          recentDrawer: "recent-drawer",
          recentHome: "recent-home",
          resolvedInlineCommentsDialog: "resolved-inline-comments-dialog",
          copyPageTree: "copy-page-tree",
          spaceDirectory: "space-directory"
        },
        r = "confluence.frontend.disable.readyforuser"
    },
    Xzcx: function ( e, t, n ) {
      "use strict";

      function a() {
        return "undefined" != typeof document ? document : {}
      }

      function r() {
        return "undefined" != typeof document && document.body ? document.body : {}
      }

      function o() {
        return "undefined" != typeof document && document.scrollingElement ? document.scrollingElement : r()
      }

      function s( e ) {
        return "undefined" != typeof document && document.querySelector ? document.querySelector( e ) : null
      }

      function c( e ) {
        return "undefined" != typeof document && document.querySelectorAll ? document.querySelectorAll( e ) : null
      }

      function i( e ) {
        return "undefined" != typeof document && document.getElementById ? document.getElementById( e ) : null
      }

      function u( e, t ) {
        return "undefined" != typeof document && document.addEventListener ? document.addEventListener( e, t ) : null
      }

      function l() {
        return "undefined" != typeof document && document.head ? document.head : {}
      }

      function d() {
        return "undefined" != typeof document && document.activeElement
      }
      n.d( t, "c", ( function () {
        return a
      } ) ), n.d( t, "h", ( function () {
        return o
      } ) ), n.d( t, "f", ( function () {
        return s
      } ) ), n.d( t, "g", ( function () {
        return c
      } ) ), n.d( t, "d", ( function () {
        return i
      } ) ), n.d( t, "a", ( function () {
        return u
      } ) ), n.d( t, "e", ( function () {
        return l
      } ) ), n.d( t, "b", ( function () {
        return d
      } ) )
    },
    "YNn/": function ( e, t, n ) {
      "use strict";
      n.d( t, "a", ( function () {
        return r
      } ) );
      var a = n( "H5qd" );
      const r = n.n( a ).a `query SPAViewContextQuery{spaViewContext{userCanCreateContent welcomeMessageEditUrl welcomeMessageHtml resourceKeys resourceContexts showWelcomeMessageEditHint showEditButton isAnonymous homepageUri homepageTitle}siteConfiguration{tenantId siteLogoUrl siteTitle showSiteTitle}isNewUser isSiteAdmin abTestCohorts experimentFeatures}`
    },
    YXey: function ( e, t, n ) {
      "use strict";
      n.d( t, "a", ( function () {
        return r
      } ) );
      var a = n( "RfuI" );
      const r = Object( a.a )( {
        id: "aiVSO",
        name: "LazyCreateDialogQueryRenderer",
        loader: () => Promise.all( [ n.e( "atlaskit~66e23772" ), n.e( "vendors~4134d62c" ), n.e( 1 ), n.e( 95 ), n.e( 148 ) ] ).then( n.bind( null, "NOdG" ) ).then( e => e.CreateDialogQueryRenderer )
      } )
    },
    YeD4: function ( e, t, n ) {
      "use strict";
      n.d( t, "d", ( function () {
        return a
      } ) ), n.d( t, "c", ( function () {
        return r
      } ) ), n.d( t, "a", ( function () {
        return o
      } ) ), n.d( t, "b", ( function () {
        return s
      } ) );
      const a = "atlassian",
        r = "frontend",
        o = "localStorage",
        s = "sessionStorage"
    },
    "Z9L/": function ( e, t, n ) {
      "use strict";
      n.d( t, "a", ( function () {
        return i
      } ) );
      var a = n( "Kttv" ),
        r = n.n( a ),
        o = n( "fN3Q" );
      let s;
      s = n.n( o )()();
      const c = e => null === e ? "null" : Array.isArray( e ) ? `[${e.map(e=>c(e)).join(",")}]` : "object" == typeof e ? i( e ) : "string" == typeof e ? `"${e}"` : "" + e.toString(),
        i = e => {
          const t = `${Object.entries(e).filter(([e,t])=>void 0!==t).sort((e,t)=>e[0].localeCompare(t[0])).map(([e,t])=>`${e}:${c(t)}`).join()},${s}`;
          return r()( t )
        }
    },
    ZRy3: function ( e, t, n ) {
      "use strict";
      var a = n( "y9AH" );
      const r = {
        [ a.a.VIEW_PAGE.name ]: {
          tasks: [ "confluence.page.view" ],
          taskId: "page"
        },
        [ a.a.VIEW_BLOG.name ]: {
          tasks: [ "confluence.page.view" ],
          taskId: "blog"
        },
        [ a.a.VIEW_BLOG_DATE_LEGACY.name ]: {
          tasks: [ "confluence.page.view" ],
          taskId: "blog"
        },
        [ a.a.MY_WORK_DRAFTS.name ]: {
          tasks: [ "confluence.dashboard.view" ],
          taskId: "drafts"
        },
        [ a.a.MY_WORK_RECENT.name ]: {
          tasks: [ "confluence.dashboard.view" ],
          taskId: "recent-work"
        },
        [ a.a.MY_RECENTLY_VISITED.name ]: {
          tasks: [ "confluence.dashboard.view" ],
          taskId: "recently-visited"
        },
        [ a.a.MY_SAVED_FOR_LATER.name ]: {
          tasks: [ "confluence.dashboard.view" ],
          taskId: "saved-for-later"
        },
        [ a.a.ALL_UPDATES.name ]: {
          tasks: [ "confluence.dashboard.view" ],
          taskId: "all-updates"
        },
        [ a.a.POPULAR.name ]: {
          tasks: [ "confluence.dashboard.view" ],
          taskId: "popular"
        },
        [ a.a.SPACE_OVERVIEW.name ]: {
          tasks: [ "confluence.space.overview.view" ]
        },
        [ a.a.CREATE_PAGE.name ]: {
          tasks: [ "confluence.page.create" ],
          taskId: "page"
        },
        [ a.a.CREATE_BLOG.name ]: {
          tasks: [ "confluence.page.create" ],
          taskId: "blog"
        },
        [ a.a.CREATE_PAGE_ACTION_LEGACY.name ]: {
          tasks: [ "confluence.page.create" ],
          taskId: "page"
        },
        [ a.a.CREATE_BLOG_ACTION_LEGACY.name ]: {
          tasks: [ "confluence.page.create" ],
          taskId: "blog"
        },
        [ a.a.EDIT_PAGE.name ]: {
          tasks: [ "confluence.page.edit" ],
          taskId: "page"
        },
        [ a.a.EDIT_BLOG.name ]: {
          tasks: [ "confluence.page.edit" ],
          taskId: "blog"
        },
        [ a.a.EDIT_PAGE_V2.name ]: {
          tasks: [ "confluence.page.fabric.edit", "confluence.page.fabric.edit.ready" ],
          taskId: "page"
        },
        [ a.a.EDIT_BLOG_V2.name ]: {
          tasks: [ "confluence.page.fabric.edit", "confluence.page.fabric.edit.ready" ],
          taskId: "blog"
        },
        [ a.a.CONTENT_HISTORY.name ]: {
          tasks: [ "confluence.page.history.view" ]
        },
        [ a.a.ADVANCED_SEARCH.name ]: {
          tasks: [ "confluence.advanced.search" ]
        },
        [ a.a.HOME.name ]: {
          tasks: [ "confluence.home" ]
        },
        [ a.a.SPACE_DIRECTORY.name ]: {
          tasks: [ "confluence.space.directory" ]
        }
      };
      n.d( t, "a", ( function () {
        return o
      } ) );
      const o = e => {
        if ( !e ) return null;
        const t = r[ e.name ];
        return t ? {
          tasks: t.tasks,
          taskId: t.taskId
        } : null
      }
    },
    ZVoB: function ( e, t, n ) {
      "use strict";
      var a = n( "Czhu" ),
        r = n( "Kttv" ),
        o = n.n( r ),
        s = n( "ERkP" ),
        c = n.n( s ),
        i = n( "F4Ur" ),
        u = n( "GBQy" ),
        l = n( "BX6b" ),
        d = n( "X2PC" );
      const E = c.a.createContext( "unknown" );
      E.displayName = "AttributionContext";
      var p = n( "kmyq" );
      n.d( t, "a", ( function () {
        return m
      } ) );
      class f extends s.Component {
        componentDidMount() {
          0
        }
        componentDidUpdate() {
          0
        }
        componentDidCatch( e, t ) {
          this.props.onError( e, t ), this.setState( {
            error: e,
            errorInfo: t
          } )
        }
        render() {
          const {
            attribution: e,
            children: t,
            renderOnError: n
          } = this.props;
          return this.state && this.state.error && this.state.errorInfo ? c.a.createElement( n, {
            attribution: e,
            error: this.state.error,
            errorInfo: this.state.errorInfo
          } ) : t
        }
      }

      function m( e ) {
        const {
          children: t,
          onError: n,
          renderOnError: r
        } = e, o = function ( e ) {
          const t = Object( s.useContext )( E );
          return e === d.a.INHERIT ? t : e
        }( e.attribution ), m = Object( s.useContext )( p.a ), O = Object( s.useCallback )( ( e, t ) => {
          if ( m && m( e ) ) throw e;
          Object( u.g )( e, {
            componentStack: t.componentStack,
            errorHashCode: b( e, t )
          } ), Object( u.e )( e ), Object( l.c )().submitError( e, {
            attribution: o
          } ), Object( i.a )( e ), n && n( e, t )
        }, [ o, m, n ] ), h = Object( s.useCallback )( e => c.a.createElement( r, Object( a.a )( {}, e ) ), [ r ] );
        return c.a.createElement( E.Provider, {
          value: o
        }, c.a.createElement( f, {
          attribution: o,
          onError: O,
          renderOnError: h
        }, t ) )
      }

      function b( e, t ) {
        const n = o()( `${e.message||String(e)}${t.componentStack}`, {
          asBytes: !0
        } );
        return ( 1073741823 & ( 255 & n[ 0 ] | ( 255 & n[ 1 ] ) << 8 | ( 255 & n[ 2 ] ) << 16 | ( 255 & n[ 3 ] ) << 24 ) ).toString( 32 )
      }
    },
    ZcCF: function ( e, t, n ) {
      "use strict";
      n.d( t, "a", ( function () {
        return a
      } ) );
      const a = e => {
        var t, n;
        return ( null == e || null === ( t = e.headers ) || void 0 === t ? void 0 : t.get( "x-b3-traceid" ) ) || ( null == e || null === ( n = e.headers ) || void 0 === n ? void 0 : n.get( "atl-traceid" ) ) || null
      }
    },
    ZsZh: function ( e, t, n ) {
      "use strict";
      n.d( t, "a", ( function () {
        return o
      } ) ), n.d( t, "b", ( function () {
        return s
      } ) );
      var a = n( "ERkP" ),
        r = n.n( a );
      const o = Object( a.createContext )( {
        isViewAllInlineCommentsVisible: !1,
        viewAllInlineComments: () => {},
        markCommentAsActive: () => {},
        activeComment: "",
        activeQueryParamCommentId: "",
        activateQueryParamComment: () => {},
        clearQueryParamCommentId: () => {}
      } );
      o.displayName = "ViewAllInlineCommentsContext";
      const s = ( {
        children: e
      } ) => {
        const [ t, n ] = Object( a.useState )( !1 ), [ s, c ] = Object( a.useState )( "" ), [ i, u ] = Object( a.useState )( "" );
        return r.a.createElement( o.Provider, {
          value: {
            isViewAllInlineCommentsVisible: t,
            viewAllInlineComments: e => n( e ),
            activeComment: s,
            markCommentAsActive: e => {
              c( e ), u( "" )
            },
            activeQueryParamCommentId: i,
            activateQueryParamComment: e => {
              u( e )
            },
            clearQueryParamCommentId: () => u( "" )
          }
        }, e )
      }
    },
    a0gl: function ( e, t, n ) {
      "use strict";
      n.d( t, "a", ( function () {
        return o
      } ) );
      var a = n( "ERkP" ),
        r = n( "Vgb+" );
      const o = () => Object( a.useContext )( r.a )
    },
    adTp: function ( e, t, n ) {
      "use strict";
      var a = n( "Czhu" ),
        r = n( "ERkP" ),
        o = n( "H5qd" ),
        s = n.n( o ),
        c = n( "j+hl" );
      const i = s.a `query getDraftContentAppearanceProperty($contentId:ID$status:[String]){content(id:$contentId status:$status){nodes{id ...contentAppearanceDraftFragment}}}${c.a}`,
        u = s.a `query getPublishedContentAppearanceProperty($contentId:ID$status:[String])@SLA{content(id:$contentId status:$status){nodes{id ...contentAppearancePublishedFragment}}}${c.b}`;
      var l = n( "7+Q0" );
      n.d( t, "d", ( function () {
        return d
      } ) ), n.d( t, "e", ( function () {
        return E
      } ) ), n.d( t, "f", ( function () {
        return p
      } ) ), n.d( t, "c", ( function () {
        return m
      } ) ), n.d( t, "b", ( function () {
        return O
      } ) ), n.d( t, "a", ( function () {
        return g
      } ) );
      const d = ( e, t ) => {
          const n = e.find( e => e.key === t && e.version );
          let a = l.b.DEFAULT,
            r = 0;
          return n && ( a = JSON.parse( n.value ), r = n.version.number ), {
            appearance: a,
            version: r
          }
        },
        E = e => d( e.appearancePublished.nodes, l.a.PUBLISHED ),
        p = async ( e, t, n, a ) => {
          try {
            return await e( t ), h( a, t ), t
          } catch ( r ) {
            if ( 409 === ( null == r ? void 0 : r.statusCode ) ) {
              const r = await m( t.contentId, t.propertyKey, n );
              if ( r.version ) return t = f( t, r ), await e( t ), h( a, t ), t
            }
            throw r
          }
        }, f = ( e, t ) => ( e.versionNumber = t.version + 1, e.propertyValue !== t.appearance && ( e.propertyValue = t.appearance === l.b.DEFAULT ? l.b.FULL_WIDTH : l.b.DEFAULT ), e ), m = async ( e, t, n ) => {
          var a, r;
          const o = t === l.a.PUBLISHED ? u : i,
            s = null === ( a = ( await n.query( {
              query: o,
              variables: {
                contentId: e,
                status: [ "current", "draft" ]
              },
              fetchPolicy: "network-only",
              context: {
                single: "true"
              }
            } ) ).data ) || void 0 === a || null === ( r = a.content ) || void 0 === r ? void 0 : r.nodes[ 0 ];
          return s ? t === l.a.PUBLISHED ? E( s ) : ( e => d( e.appearanceDraft.nodes, l.a.DRAFT ) )( s ) : b()
        }, b = () => ( {
          appearance: l.b.DEFAULT,
          version: 0
        } ), O = "editorAppearance", h = ( e, t ) => {
          e && e.sendMessage( {
            type: O,
            appearance: t.propertyValue,
            version: t.versionNumber
          } )
        }, g = ( {
          children: e,
          userOffline: t,
          params: n,
          apolloClient: o,
          updateContentAppearanceProperty: s,
          collabEditProvider: c
        } ) => {
          const [ i, u ] = Object( r.useState )( !1 ), l = async () => {
            const e = await m( n.contentId, n.propertyKey, o );
            await ( async ( e, t, n, r ) => {
              const o = Object( a.a )( Object( a.a )( {}, t ), {}, {
                propertyValue: e.appearance,
                versionNumber: e.version + 1
              } );
              e.version && ( await n( o ), h( r, o ) )
            } )( e, n, s, c )
          };
          return Object( r.useEffect )( () => {
            u( !!t )
          }, [ t ] ), !t && i && l(), e
        }
    },
    aoYE: function ( e, t, n ) {
      "use strict";
      var a = n( "Czhu" ),
        r = n( "lSUb" ),
        o = n( "Wagq" ),
        s = n( "94Z3" ),
        c = n( "8TdO" );

      function i( e ) {
        return Object( o.c )( Promise.all( e.map( e => new Promise( t => {
          e.onload = () => {
            t(), e.setAttribute( "data-loaded", "true" )
          }
        } ) ) ).then( () => {} ) )
      }

      function u() {
        if ( void 0 !== window.AJS && void 0 !== window.AJS.Meta && void 0 !== window.AJS.Meta.set ) {
          const e = window.AJS.Meta,
            t = window.AJS.Meta.set;
          window.AJS.Meta.set = function ( ...n ) {
            return function ( e, t ) {
              let n = window.document.querySelector( `[name="ajs-${e}"]` );
              void 0 !== t ? ( n || ( n = window.document.createElement( "meta" ), n.name = "ajs-" + e, window.document.head.appendChild( n ) ), n.content = t ) : n && window.document.head.removeChild( n )
            }( n[ 0 ], n[ 1 ] ), t.apply( e, n )
          }
        }
      }
      var l = n( "H5qd" );
      const d = n.n( l ).a `query FrontendResourceRenderQuery{internalFrontendResource{resourceList{type url attributes{key value}}}}`;
      n.d( t, "a", ( function () {
        return O
      } ) );
      const E = Object( r.default )( async e => e.query( {
        query: d,
        variables: {},
        context: {
          allowOnExternalPage: !0
        }
      } ).then( e => {
        var t, n;
        return ( ( null == e || null === ( t = e.data ) || void 0 === t || null === ( n = t.internalFrontendResource ) || void 0 === n ? void 0 : n.resourceList ) || [] ).map( e => ( e.attributes = e.attributes || [], e.attributes = e.attributes.reduce( ( e, t ) => ( e[ t.key ] = t.value, e ), {} ), e ) ) || []
      }, e => {
        if ( e instanceof s.a ) return [];
        throw e
      } ) );

      function p( e, t ) {
        const n = document.createElement( e );
        return Object.keys( t ).forEach( e => n.setAttribute( e, t[ e ] ) ), n
      }

      function f( e ) {
        return e.reduce( ( e, {
          type: t,
          attributes: n,
          url: a
        } ) => ( e[ t ] || ( e[ t ] = [] ), e[ t ].push( {
          attributes: n,
          url: a
        } ), e ), {
          js: [],
          css: []
        } )
      }

      function m( e ) {
        return e.replace( /externals=[^&]+&/, "externals=__local-default__&" )
      }
      async function b() {
        const e = f( await E( Object( c.b )() ) );
        let t = !1;
        const r = window.document.createDocumentFragment(),
          o = [];
        return e.js.forEach( ( {
          url: e,
          attributes: n
        } ) => {
          if ( "com.atlassian.plugins.jquery:jquery" !== n[ "data-wrm-key" ] ) {
            if ( !window.document.querySelector( `script[data-wrm-key='${n["data-wrm-key"]}']` ) ) {
              const t = function ( e ) {
                e.crossorigin = "anonymous";
                const t = p( "script", e );
                return t.async = !1, t
              }( Object( a.a )( {
                src: m( e )
              }, n ) );
              o.push( t ), r.appendChild( t )
            }
          } else t = !0
        } ), e.css.forEach( ( {
          url: e,
          attributes: t
        } ) => {
          if ( !window.document.querySelector( `link[data-wrm-key='${t["data-wrm-key"]}']` ) ) {
            const n = function ( e ) {
              return p( "link", Object( a.a )( {
                rel: "stylesheet"
              }, e ) )
            }( Object( a.a )( {
              href: m( e )
            }, t ) );
            o.push( n ), r.appendChild( n )
          }
        } ), o.length ? t ? Promise.resolve().then( n.bind( null, "jUyC" ) ).then( () => ( window.document.head.appendChild( r ), i( o ) ) ) : ( window.document.head.appendChild( r ), i( o ) ) : Promise.resolve()
      }
      const O = Object( r.default )( () => Object( o.c )( b().then( () => {
        u()
      } ) ) );
      Object( r.default )( async e => f( await E( e ) ).css.map( ( {
        url: e,
        attributes: t
      } ) => {
        const n = Object.entries( t ).map( ( [ e, t ] ) => t ? `${e}="${t}"` : e ).join( " " );
        return `<link rel="stylesheet" href="${m(e)}"${n?" "+n:""}>`
      } ) )
    },
    au0e: function ( e, t, n ) {
      "use strict";

      function a( e ) {
        ( navigator && navigator.serviceWorker ? navigator.serviceWorker.controller ? Promise.resolve( navigator.serviceWorker.controller ) : navigator.serviceWorker.getRegistrations().then( e => {
          const t = e.find( e => e.active );
          return t ? t.active : null
        } ) : Promise.resolve( null ) ).then( t => {
          t && t.postMessage( e )
        } )
      }

      function r( e ) {
        Object.entries( e ).forEach( ( [ e, t ] ) => a( {
          type: "workerFlagChange",
          key: e,
          value: t
        } ) )
      }

      function o( e = "route" ) {
        r( {
          bypassServiceWorkerOnce: e
        } )
      }

      function s() {
        r( {
          invalidateServiceWorkerCache: !0
        } )
      }

      function c( e, t ) {
        e.invalidateServiceWorkerCache = null, t.setItem( "invalidateServiceWorkerCache", null ).catch( () => {} )
      }

      function i( e, t ) {
        e.bypassServiceWorkerOnce = null, t.setItem( "bypassServiceWorkerOnce", null ).catch( () => {} )
      }
      n.d( t, "c", ( function () {
        return a
      } ) ), n.d( t, "f", ( function () {
        return r
      } ) ), n.d( t, "a", ( function () {
        return o
      } ) ), n.d( t, "b", ( function () {
        return s
      } ) ), n.d( t, "e", ( function () {
        return c
      } ) ), n.d( t, "d", ( function () {
        return i
      } ) )
    },
    axEa: function ( e, t, n ) {
      "use strict";
      n.d( t, "a", ( function () {
        return o
      } ) );
      var a = n( "nPRB" );
      let r;
      const o = () => ( r || ( r = new a.a( {
        disabled: !1
      } ) ), r )
    },
    aykN: function ( e, t, n ) {
      "use strict";
      n.d( t, "a", ( function () {
        return s
      } ) );
      var a = n( "hpu0" ),
        r = n( "kC4U" ),
        o = n( "x5mk" );

      function s() {
        return ( e, t = {} ) => {
          const n = Object( a.a )();
          return n && ( t.headers = t.headers || {}, Object( o.a )( t.headers, "X-Atl-Experience", Object( o.b )( t.headers, "X-Atl-Experience" ) || n ) ), Object( r.a )( e, t )
        }
      }
    },
    "b/OQ": function ( e, t, n ) {
      "use strict";
      n.d( t, "a", ( function () {
        return r
      } ) );
      var a = n( "H5qd" );
      const r = n.n( a ).a `query GlobalOperationsQuery{globalOperations{operation targetType}}`
    },
    bFAF: function ( e, t, n ) {
      "use strict";
      var a = n( "Czhu" ),
        r = n( "qrFu" ),
        o = n( "Ci1e" ),
        s = n( "Jygk" ),
        c = n.n( s ),
        i = n( "8TdO" );
      const u = ( e, t ) => {
        const n = typeof e;
        if ( "object" !== n || null == e ) return e;
        if ( Array.isArray( e ) ) return e.map( e => u( e, t ) );
        if ( "object" === n ) return Object.keys( e ).reduce( ( n, a ) => ( a !== t && ( n[ a ] = u( e[ a ], t ) ), n ), {} );
        throw new Error( `Unsupported type "${n}" confronted in omitDeep function` )
      };
      var l = u;
      const d = ( e, t, n, r ) => {
        const s = n ? n( e, t ) : e;
        if ( !s ) return null;
        if ( !r ) return s;
        const c = Object( o.normalize )( s, r );
        return Object( a.a )( Object( a.a )( {}, s ), c )
      };
      t.a = e => t => n => {
        if ( "APOLLO_QUERY" === n.type ) {
          if ( n.errorFilter && n.batch ) throw new Error( "errorFilter is only supported when batch=false" );
          const o = n.actionName instanceof Array ? n.actionName : n.actionName ? [ n.actionName ] : [];
          for ( const t of o ) e.dispatch( Object( a.a )( {
            type: t + "_REQUEST"
          }, n.variables ) );
          const s = {
            query: n.query,
            variables: n.variables,
            context: {
              single: !n.batch
            }
          };
          n.fetchPolicy && ( s.fetchPolicy = n.fetchPolicy );
          const c = Object( i.b )().query( s );
          return c.then( e => {
            if ( e instanceof Array ) {
              let t = e[ 0 ].errors;
              if ( t && n.errorsFilter && ( t = n.errorsFilter( t ) ), t ) throw new r.b( {
                graphQLErrors: e[ 0 ].errors
              } );
              return e[ 0 ]
            }
            return e
          } ).then( t => e.dispatch( {
            type: "APOLLO_QUERY_SUCCESS",
            response: t,
            actionName: n.actionName,
            transformer: n.transformer,
            schema: n.schema,
            variables: n.variables
          } ) ).catch( t => {
            e.dispatch( {
              type: "APOLLO_QUERY_FAILURE",
              error: t,
              actionName: n.actionName,
              variables: n.variables
            } )
          } ), t( n ), c
        }
        if ( "APOLLO_QUERY_SUCCESS" === n.type ) {
          if ( n.response.data && n.response.data.content && n.response.data.content.nodes && !n.response.data.content.nodes.length ) return "EDITOR_CONTENT_V2" === n.actionName ? e.dispatch( {
            type: n.actionName + "_FAILURE",
            error: {
              statusCode: 404
            },
            options: n.variables
          } ) : e.dispatch( {
            type: "CONTENT_FAILURE",
            error: {
              statusCode: 404
            }
          } );
          ( ( e, t, n, r, o, s ) => {
            const i = r instanceof Array ? r : [ r ];
            for ( const E of i ) try {
              const r = t.data && d( t.data, n, o, s );
              if ( !r ) return;
              e.dispatch( Object( a.a )( {
                type: E + "_SUCCESS",
                response: l( r, "__typename" )
              }, n ) )
            } catch ( u ) {
              c.a.console.error( u ), e.dispatch( {
                type: E + "_FAILED",
                error: u
              } )
            }
          } )( e, n.response, n.variables, n.actionName, n.transformer, n.schema )
        } else if ( "APOLLO_QUERY_FAILURE" === n.type ) {
          let t = n.error.graphQLErrors && n.error.graphQLErrors.length ? n.error.graphQLErrors[ 0 ] : n.error;
          t.response && t.response.status && ( t = Object( a.a )( Object( a.a )( {}, t ), {}, {
            statusCode: t.response.status
          } ) );
          const r = t ? t.message : n.error.message,
            o = n.actionName instanceof Array ? n.actionName : [ n.actionName ];
          for ( const a of o ) e.dispatch( {
            type: a + "_FAILURE",
            error: t,
            message: r,
            options: n.variables
          } )
        }
        return t( n )
      }
    },
    bQlP: function ( e, t, n ) {
      "use strict";
      var a = n( "Jygk" ),
        r = n.n( a );
      const o = e => {
        if ( !r.a.document ) return !1;
        const t = r.a.document.querySelector( "meta[name=ajs-enabled-dark-features]" );
        if ( t ) {
          const n = t.content.split( "," );
          return n.indexOf( e ) > -1 && -1 === n.indexOf( e + ".disable" )
        }
      };
      n.d( t, "x", ( function () {
        return s
      } ) ), n.d( t, "e", ( function () {
        return c
      } ) ), n.d( t, "h", ( function () {
        return i
      } ) ), n.d( t, "i", ( function () {
        return u
      } ) ), n.d( t, "k", ( function () {
        return l
      } ) ), n.d( t, "l", ( function () {
        return d
      } ) ), n.d( t, "m", ( function () {
        return E
      } ) ), n.d( t, "n", ( function () {
        return p
      } ) ), n.d( t, "j", ( function () {
        return f
      } ) ), n.d( t, "o", ( function () {
        return m
      } ) ), n.d( t, "u", ( function () {
        return b
      } ) ), n.d( t, "t", ( function () {
        return O
      } ) ), n.d( t, "v", ( function () {
        return h
      } ) ), n.d( t, "f", ( function () {
        return g
      } ) ), n.d( t, "B", ( function () {
        return _
      } ) ), n.d( t, "b", ( function () {
        return T
      } ) ), n.d( t, "a", ( function () {
        return I
      } ) ), n.d( t, "d", ( function () {
        return S
      } ) ), n.d( t, "c", ( function () {
        return C
      } ) ), n.d( t, "z", ( function () {
        return A
      } ) ), n.d( t, "s", ( function () {
        return y
      } ) ), n.d( t, "r", ( function () {
        return R
      } ) ), n.d( t, "q", ( function () {
        return v
      } ) ), n.d( t, "p", ( function () {
        return P
      } ) ), n.d( t, "y", ( function () {
        return N
      } ) ), n.d( t, "D", ( function () {
        return j
      } ) ), n.d( t, "C", ( function () {
        return D
      } ) ), n.d( t, "A", ( function () {
        return L
      } ) ), n.d( t, "g", ( function () {
        return w
      } ) ), n.d( t, "w", ( function () {
        return k
      } ) ), n.d( t, "E", ( function () {
        return o
      } ) );
      const s = "react.ui.force.spa",
        c = "fd-87.editor.spa",
        i = "fabric.editor.blank.blogpost",
        u = "confluence.frontend.fabric.editor.dropbox.extension",
        l = "confluence.frontend.extension.api-v2.macros",
        d = "confluence.frontend.extension.config-panel",
        E = "confluence.frontend.extension.element-browser",
        p = "confluence.frontend.extension.plus-menu",
        f = "confluence.frontend.fabric.editor.dropbox.extension.iframe",
        m = "fabric.editor.blueprint.com.atlassian.confluence.plugins.confluence-business-blueprints_meeting-notes-blueprint",
        b = "fabric.presence.integration",
        O = "confluence.frontend.fabric.mentions.collab.hydration",
        h = "confluence.frontend.fabric.editor.team.mention.spotlight",
        g = "emcee-discover",
        _ = "search.attribution.instrumentation",
        T = "changeboarding.kill.switch",
        I = "editor.spa.uxenhancements",
        S = "foxy.disable.nested.table",
        C = "foxy.disable.indent",
        A = "ng-media-viewer.enabled",
        y = "confluence.frontend.fabric.editor.rollout.message",
        R = "confluence.frontend.fabric.editor.rollout.featurekey",
        v = "confluence.frontend.fabric.editor.rollout.date",
        P = "confluence.frontend.fabric.editor.rollback.message",
        N = "frontend.people.directory",
        j = "confluence.frontend.fabric.editor.xen",
        D = "confluence.frontend.fabric.editor.template.variables",
        L = "portfolio.for.jira.macro",
        w = "confluence.frontend.fabric.editor.more-colors-experiment",
        k = "confluence.frontend.fabric.editor.userteam.mention"
    },
    bfgX: function ( e, t, n ) {
      "use strict";
      var a = n( "Jygk" ),
        r = n.n( a ),
        o = n( "jUyC" );

      function s( e, t, n ) {
        return "function" == typeof n ? Object( o.default )( r.a ).bind( e, t, n ) : Object( o.default )( r.a ).bind( e, t )
      }

      function c( e, t ) {
        return Object( o.default )( r.a ).unbind( e, t )
      }

      function i( e, t ) {
        return Object( o.default )( r.a ).trigger( e, t )
      }
      n.d( t, "b", ( function () {
        return i
      } ) ), n.d( t, "a", ( function () {
        return s
      } ) ), n.d( t, "c", ( function () {
        return c
      } ) )
    },
    bhtZ: function ( e, t, n ) {
      "use strict";
      n.d( t, "a", ( function () {
        return s
      } ) );
      var a = n( "H5qd" ),
        r = n.n( a ),
        o = n( "j+hl" );
      const s = r.a `query ContentTitleQuery($contentId:ID$spaceKey:String!){content(id:$contentId){nodes{id title ...contentAppearancePublishedFragment properties(key:"editor"){nodes{id key value}}}}space(key:$spaceKey){id lookAndFeel{headings{key value}content{header{background backgroundAttachment backgroundBlendMode backgroundClip backgroundColor backgroundImage backgroundOrigin backgroundPosition backgroundRepeat backgroundSize borderRadius padding}}}}}${o.b}`
    },
    bjlv: function ( e, t, n ) {
      "use strict";

      function a( e, t ) {
        return Object.keys( e ).reduce( ( n, a ) => ( t.includes( a ) || ( n[ a ] = e[ a ] ), n ), {} )
      }

      function r( e, t ) {
        const n = {};
        return Object.keys( e || {} ).forEach( a => {
          n[ a ] = t( e[ a ], a, e )
        } ), n
      }
      n.d( t, "a", ( function () {
        return a
      } ) ), n.d( t, "b", ( function () {
        return r
      } ) )
    },
    blf0: function ( e, t, n ) {
      "use strict";
      n.d( t, "a", ( function () {
        return o
      } ) );
      var a = n( "Svze" );
      const r = Object( a.Record )( {
        id: null,
        name: null,
        prefix: null
      } );
      t.b = r;
      const o = Object( a.Record )( {
        message: "",
        messageKey: "",
        args: []
      } )
    },
    bpT7: function ( e, t, n ) {
      "use strict";
      n.d( t, "b", ( function () {
        return s
      } ) ), n.d( t, "a", ( function () {
        return c
      } ) ), n.d( t, "c", ( function () {
        return i
      } ) );
      var a = n( "ERkP" ),
        r = n.n( a ),
        o = n( "RfuI" );
      const s = Object( o.a )( {
          id: "lxa0b",
          name: "EditPageLoader",
          loader: () => Promise.all( [ n.e( "atlaskit~66e23772" ), n.e( "vendors~4134d62c" ), n.e( "fabric.editpage~493df0b3" ) ] ).then( n.bind( null, "wv4k" ) )
        } ),
        c = Object( o.a )( {
          id: "BcQNz",
          name: "EditPageDataLoaderLoader",
          loader: () => Promise.all( [ n.e( "graphql.prosemirror-synchrony-plugin.content-reconciler~4134d62c" ), n.e( 131 ), n.e( "fabric.editpage.dataloader~549ee3d0" ) ] ).then( n.bind( null, "yRof" ) )
        } ),
        i = ( e, t ) => () => r.a.createElement( c, {
          contentId: e,
          spaceKey: t
        } )
    },
    "bw/P": function ( e, t, n ) {
      "use strict";
      var a = n( "zjfJ" ),
        r = n( "IC1n" ),
        o = n.n( r ),
        s = n( "TqoN" ),
        c = n( "qrFu" ),
        i = n( "daKX" ),
        u = n( "p0L4" ),
        l = n( "wEff" ),
        d = n( "Czhu" ),
        E = n( "9btq" ),
        p = n( "IGfl" ),
        f = n( "lSUb" );
      class m {
        constructor() {
          Object( a.a )( this, "callbacks", new Map )
        }
        start() {
          let e;
          document.addEventListener( "freeze", () => {
            e = performance.now()
          } ), document.addEventListener( "resume", () => {
            if ( "number" != typeof e ) return;
            const t = performance.now();
            for ( const n of this.callbacks.values() ) n( t - e )
          } )
        }
        subscribe( e, t ) {
          this.callbacks.set( e, t )
        }
        unsubscribe( e ) {
          this.callbacks.delete( e )
        }
      }
      const b = Object( f.default )( () => new m );
      class O {
        constructor( {
          name: e,
          id: t,
          timeout: n,
          startTime: r = window.performance.now(),
          attributes: o,
          onStart: s,
          onSuccess: c,
          onFailure: i,
          onAbort: u
        } ) {
          Object( a.a )( this, "name", void 0 ), Object( a.a )( this, "id", void 0 ), Object( a.a )( this, "timeout", void 0 ), Object( a.a )( this, "freezeTime", 0 ), Object( a.a )( this, "stopState", null ), Object( a.a )( this, "startTime", void 0 ), Object( a.a )( this, "attributes", void 0 ), Object( a.a )( this, "onStop", void 0 ), Object( a.a )( this, "onSuccess", void 0 ), Object( a.a )( this, "onFailure", void 0 ), Object( a.a )( this, "onAbort", void 0 ), this.name = e, this.id = t, this.timeout = n, this.startTime = r, this.attributes = o, this.onSuccess = c, this.onFailure = i, this.onAbort = u;
          const l = {
            action: "taskStart",
            name: e,
            id: t,
            startTime: r,
            timeout: n,
            attributes: o
          };
          s && ( this.onStop = s( l ) ), b().subscribe( e, e => {
            this.freezeTime += e
          } )
        }
        succeed( e ) {
          this.hasStopped || ( this.onSuccess && this.onSuccess(), this.stop( {
            action: "taskSuccess",
            name: this.name,
            id: this.id,
            startTime: this.startTime,
            duration: this.getAbsoluteDuration(),
            activeDuration: this.getDurationAdjustedForActive(),
            adjustedDuration: this.getDurationAdjustedForTabActivity(),
            attributes: Object( d.a )( Object( d.a )( {}, this.attributes ), e )
          } ) )
        }
        fail( {
          error: e,
          attributes: t
        } ) {
          this.hasStopped || ( this.onFailure && this.onFailure(), this.stop( {
            action: "taskFail",
            name: this.name,
            id: this.id,
            startTime: this.startTime,
            duration: this.getAbsoluteDuration(),
            activeDuration: this.getDurationAdjustedForActive(),
            adjustedDuration: this.getDurationAdjustedForTabActivity(),
            error: e,
            attributes: Object( d.a )( Object( d.a )( {}, this.attributes ), t )
          } ) )
        }
        abort( {
          reason: e,
          attributes: t,
          checkForTimeout: n = !0
        } ) {
          if ( this.hasStopped ) return;
          const a = this.getDurationAdjustedForTabActivity();
          n && null != this.timeout && a >= this.timeout ? this.fail( {
            attributes: t,
            error: new E.a( `${this.name} failed to complete in ${this.timeout}ms` )
          } ) : ( this.onAbort && this.onAbort(), this.stop( {
            action: "taskAbort",
            name: this.name,
            id: this.id,
            startTime: this.startTime,
            duration: this.getAbsoluteDuration(),
            activeDuration: this.getDurationAdjustedForActive(),
            adjustedDuration: a,
            reason: e,
            checkForTimeout: n,
            attributes: Object( d.a )( Object( d.a )( {}, this.attributes ), t )
          } ) )
        }
        stopOn( e ) {
          e && ( "taskSuccess" === e.action ? this.succeed( {} ) : "taskAbort" === e.action ? this.abort( {
            reason: e.reason,
            checkForTimeout: e.checkForTimeout
          } ) : "taskFail" === e.action && this.fail( {
            error: e.error
          } ) )
        }
        getState() {
          return {
            timeout: this.timeout,
            hasStopped: this.hasStopped,
            stopState: this.stopState,
            startTime: this.startTime,
            name: this.name
          }
        }
        get hasStopped() {
          return null !== this.stopState
        }
        stop( e ) {
          this.stopState = e.action, this.onStop && this.onStop( e ), b().unsubscribe( this.name )
        }
        getAbsoluteDuration() {
          return Math.round( window.performance.now() - this.startTime )
        }
        getDurationAdjustedForTabActivity() {
          return this.getAbsoluteDuration() - Object( p.a )().getInactiveMillisecondsSince( this.startTime )
        }
        getDurationAdjustedForActive() {
          return this.getAbsoluteDuration() - this.freezeTime
        }
      }

      function h( e ) {
        if ( e instanceof u.a ) return !0;
        if ( Object( c.d )( e ) ) {
          const {
            graphQLErrors: t,
            networkError: n
          } = e;
          return !!n || t.some( h )
        }
        if ( e instanceof s.a ) {
          const {
            originalError: t
          } = e;
          if ( t ) return h( t )
        }
        return !1
      }
      n.d( t, "b", ( function () {
        return h
      } ) ), n.d( t, "a", ( function () {
        return g
      } ) );
      class g {
        constructor() {
          Object( a.a )( this, "experiences", {} ), Object( a.a )( this, "subscribers", [] ), Object( a.a )( this, "logger", Object( i.a )( "ExperienceTracker" ) ), Object( a.a )( this, "useImprovedAbortOrder", !1 ), b().start(), window.addEventListener( "pagehide", () => {
            this.abort( {
              reason: "Window unloading"
            } )
          } )
        }
        enableImprovedAborting() {
          this.useImprovedAbortOrder = !0
        }
        start( {
          name: e,
          id: t = o()(),
          timeout: n,
          startTime: a,
          attributes: r,
          onSuccess: s,
          onFailure: c,
          onAbort: i,
          collect: u
        } ) {
          const l = this.experiences[ e ];
          if ( l && l.id === t ) return;
          l && l.abort( {
            reason: "Aborted because the same experience was started with a new id"
          } );
          const d = new O( {
            name: e,
            id: t,
            timeout: n,
            startTime: a,
            attributes: r,
            onSuccess: s,
            onFailure: c,
            onAbort: i,
            onStart: e => {
              this.emit( e );
              let t = () => {};
              if ( u ) {
                const e = [];
                t = this.subscribe( t => {
                  ( "taskStart" === t.action || e.some( e => e.name === t.name && "taskStart" === e.action ) ) && ( e.push( t ), u( e, d ) )
                } )
              }
              return e => {
                t(), this.emit( e )
              }
            }
          } );
          this.experiences[ e ] = d
        }
        succeed( {
          name: e,
          attributes: t
        } ) {
          const n = this.experiences[ e ];
          n && n.succeed( t )
        }
        fail( {
          name: e,
          error: t,
          attributes: n
        } ) {
          Object.values( this.experiences ).forEach( a => {
            null != e && a.name !== e || a.fail( {
              error: t,
              attributes: n
            } )
          } )
        }
        abort( {
          name: e,
          reason: t,
          attributes: n,
          checkForTimeout: a
        } ) {
          function r( r ) {
            null != e && r.name !== e || r.abort( {
              reason: t,
              checkForTimeout: a,
              attributes: n
            } )
          }
          if ( this.useImprovedAbortOrder ) {
            const e = Object.values( this.experiences ).filter( e => e.timeout ),
              t = Object.values( this.experiences ).filter( e => !e.timeout );
            e.forEach( r ), t.forEach( r )
          } else Object.values( this.experiences ).forEach( r )
        }
        stopOnError( {
          error: e,
          name: t,
          attributes: n
        } ) {
          const a = function ( e ) {
            return Object( l.b )( e ) ? "Aborted because of session expiration error: " + e.toString() : h( e ) ? "Aborted because of network error: " + e.toString() : void 0
          }( e );
          a ? this.abort( {
            name: t,
            reason: a,
            checkForTimeout: !1,
            attributes: n
          } ) : this.fail( {
            name: t,
            error: e,
            attributes: n
          } )
        }
        subscribe( e ) {
          if ( "function" != typeof e ) throw new Error( "Subscriber must be a function" );
          return this.subscribers.push( e ), () => {
            this.subscribers = this.subscribers.filter( t => t !== e )
          }
        }
        getExperienceState( e ) {
          return this.experiences[ e ] ? this.experiences[ e ].getState() : null
        }
        emit( e ) {
          this.logger.debug `${e.action} ${e}`, this.subscribers.forEach( t => {
            try {
              t( e )
            } catch ( n ) {
              this.logger.error `Error occurred in ExperienceTracker subscriber ${n} when handling event ${e}`
            }
          } )
        }
      }
    },
    cEAo: function ( e, t, n ) {
      "use strict";
      n.d( t, "a", ( function () {
        return r
      } ) );
      var a = n( "H5qd" );
      const r = n.n( a ).a `query ProfileQuery{user(current:true){id displayName photos{value isPrimary}}}`
    },
    cGYM: function ( e, t, n ) {
      "use strict";
      n.d( t, "a", ( function () {
        return r
      } ) ), n.d( t, "b", ( function () {
        return o
      } ) ), n.d( t, "c", ( function () {
        return s
      } ) );
      class a {
        constructor( e ) {
          this.value = e, this.valueOf = this.toString = this.toJSON = () => this.value
        }
      }
      const r = e => new a( e ),
        o = e => e instanceof a,
        s = ( ...e ) => t => e.includes( t ) ? Object.freeze( new a( t ) ) : t
    },
    cH76: function ( e, t, n ) {
      "use strict";
      n.d( t, "a", ( function () {
        return c
      } ) );
      var a = n( "zjfJ" ),
        r = n( "Wagq" );
      class o {
        constructor( e = {} ) {
          Object( a.a )( this, "store", void 0 ), this.store = e
        }
        toHashKey( {
          name: e,
          variables: t
        } ) {
          return `${e}:${Object.entries(null!=t?t:{}).filter(e=>void 0!==e[1]).sort((e,t)=>e[0]<t[0]?-1:e[0]>t[0]?1:0).map(([e,t])=>`
          $ {
            e
          }: $ {
            t
          }
          `).join("-")}`
        }
        load( e, t ) {
          const n = this.toHashKey( e );
          return this.store[ n ] && !Object( r.b )( this.store[ n ] ) || ( this.store[ n ] = Object( r.c )( t() ) ), this.store[ n ]
        }
        claim( e, t ) {
          const n = this.toHashKey( e ),
            a = this.store[ n ];
          return a ? a.catch( () => ( delete this.store[ n ], null ) ).then( e => ( delete this.store[ n ], t ? t( e ) : e && e.data ? e : null ) ) : Promise.resolve( null )
        }
      }
      let s = null;

      function c() {
        return null === s && ( window.QUERY_PRELOADER_RESULTS || ( window.QUERY_PRELOADER_RESULTS = {} ), s = new o( window.QUERY_PRELOADER_RESULTS ) ), s
      }
    },
    "ckp/": function ( e, t, n ) {
      "use strict";
      n.d( t, "b", ( function () {
        return i
      } ) ), n.d( t, "a", ( function () {
        return u
      } ) );
      var a = n( "Czhu" ),
        r = n( "ERkP" ),
        o = n.n( r ),
        s = ( n( "aWzz" ), n( "a0gl" ) );
      const c = () => null,
        i = o.a.createContext( c );
      i.displayName = "EditContentButtonPreloaderContext";
      const u = ( {
        children: e
      } ) => {
        const t = Object( r.useContext )( i ),
          [ n, u ] = Object( r.useState )( !1 ),
          l = Object( r.useCallback )( () => u( !0 ), [] ),
          {
            featureFlags: d
          } = Object( s.a )(),
          E = d[ "confluence.frontend.fabric.editor.preload.method" ],
          p = "click" === E || "hover" === E,
          f = {
            onMouseDown: "click" === E ? l : c,
            onMouseEnter: "hover" === E ? l : c
          };
        return o.a.createElement( r.Fragment, null, o.a.createElement( "div", Object( a.a )( {}, f ), e ), p && n && t ? t() : null )
      }
    },
    cld1: function ( e, t, n ) {
      "use strict";
      n.r( t );
      var a = n( "Czhu" ),
        r = n( "RuT1" ),
        o = n( "Wagq" ),
        s = n( "pa2z" ),
        c = n( "zjfJ" );
      const i = ( e, t ) => "string" != typeof t || t === e,
        u = ( e, t ) => {
          if ( "object" != typeof e || !e ) return !1;
          const {
            action: n,
            actionSubject: a,
            source: r
          } = e;
          for ( const o of t ) {
            const {
              action: e,
              actionSubject: t,
              source: s
            } = o;
            if ( i( n, e ) && ( i( a, t ) && i( r, s ) ) ) return !0
          }
          return !1
        },
        l = ( e, t, n ) => {
          const a = e.default;
          return new class extends a {
            constructor( e, t ) {
              super( e, t ), Object( c.a )( this, "sendOperationalEvent", ( e, t ) => {
                if ( u( e, [ {
                    action: "measured",
                    actionSubject: "performance",
                    source: "performance"
                  }, {
                    action: "rendered",
                    actionSubject: "viewContent",
                    source: "viewContent"
                  } ] ) ) return super.sendOperationalEvent( e, t );
                t && t( null )
              } ), Object( c.a )( this, "sendScreenEvent", ( e, t ) => {
                if ( u( e, [] ) ) return super.sendScreenEvent( e, t );
                t && t( null )
              } ), Object( c.a )( this, "sendTrackEvent", ( e, t ) => {
                if ( u( e, [] ) ) return super.sendTrackEvent( e, t );
                t && t( null )
              } ), Object( c.a )( this, "sendUIEvent", ( e, t ) => {
                if ( u( e, [] ) ) return super.sendUIEvent( e, t );
                t && t( null )
              } )
            }
          }( t, n )
        };
      var d = n( "tnlP" ),
        E = n( "FuAq" ),
        p = n( "kC4U" );
      let f;
      n.d( t, "createConfig", ( function () {
        return h
      } ) ), n.d( t, "initializeAnalyticsClient", ( function () {
        return g
      } ) ), n.d( t, "getAnalyticsWebClient", ( function () {
        return _
      } ) ), n.d( t, "getDwellTimeHelper", ( function () {
        return T
      } ) );
      const m = Object( o.c )( new Promise( e => {
        f = e
      } ) );
      let b;
      const O = Object( o.c )( new Promise( e => {
          b = e
        } ) ),
        h = ( {
          envType: e,
          originType: t,
          environment: n,
          platformType: a,
          locale: r
        } ) => ( {
          env: "localhost" === window.location.hostname ? e.DEV : "STAGING" === n ? e.STAGING : "PRODUCTION" === n ? e.PROD : e.DEV,
          product: "confluence",
          version: Object( s.a )().FRONTEND_VERSION,
          origin: t.WEB,
          platform: Object( d.e )() ? a.MOBILE_WEB : a.WEB,
          locale: r
        } ),
        g = ( {
          cloudId: e,
          userId: t,
          environment: o,
          locale: s,
          shouldFilterEvents: c
        } ) => {
          let i;
          Promise.all( [ Promise.all( [ n.e( "vendors~4134d62c" ), n.e( 102 ), n.e( "analytics-web-client~4134d62c" ) ] ).then( n.bind( null, "DZv3" ) ), "undefined" == typeof URLSearchParams ? n.e( "url-search-params-polyfill~ee2a63fe" ).then( n.t.bind( null, "5Zow", 7 ) ) : Promise.resolve() ] ).then( ( [ n ] ) => {
            const {
              default: a,
              originType: u,
              tenantType: d,
              userType: m,
              envType: O,
              platformType: g,
              DwellTimeHelper: _
            } = n;
            i = h( {
              envType: O,
              originType: u,
              environment: o,
              platformType: g,
              locale: s
            } ), b( _ );
            const T = Object( E.a )(),
              I = {
                useBatchQueue: !0,
                historyReplaceFn: e => {
                  const {
                    pathname: t,
                    search: n,
                    hash: a
                  } = new URL( e );
                  T.replace( {
                    pathname: t,
                    search: n,
                    hash: a
                  } )
                }
              };
            let S;
            S = c ? l( n, i, I ) : new a( i, I ), S.setTenantInfo( d.CLOUD_ID, e ), t && S.setUserInfo( m.ATLASSIAN_ACCOUNT, t ), S.setOriginTracingHandlers( {
              atlOrigin: e => {
                const t = r.a.fromEncoded( e ),
                  n = t.toAnalyticsAttributes();
                return ( e => {
                  const t = window.GLOBAL_APOLLO_CLIENT_URI || "/cgraphql";
                  Object( p.a )( t + "?q=isNewUserQuery", {
                    method: "POST",
                    credentials: "include",
                    headers: {
                      "X-APOLLO-OPERATION-NAME": "isNewUserQuery",
                      "Content-Type": "application/json"
                    },
                    body: JSON.stringify( {
                      query: "\n  query isNewUserQuery {\n    isNewUser\n  }\n"
                    } )
                  } ).then( async t => {
                    if ( t.ok ) {
                      var n;
                      const a = await t.json();
                      ( ( null == a || null === ( n = a.data ) || void 0 === n ? void 0 : n.isNewUser ) || !1 ) && Object( p.a )( "/wiki/rest/onboarding/1/store", {
                        method: "PUT",
                        body: JSON.stringify( {
                          key: "onboarding-origin-state:attributes",
                          value: JSON.stringify( e )
                        } ),
                        headers: {
                          "Content-Type": "application/json"
                        }
                      } )
                    }
                  } )
                } )( n ), {
                  originTracingAttributes: {
                    id: n.originId,
                    product: n.originProduct,
                    library: n.originLibrary
                  },
                  taskSessionId: t.id
                }
              }
            } ), S.startUIViewedEvent(), f( S )
          } ).catch( e => {
            throw new Error( `Analytics Web Client ${e}, ${JSON.stringify(Object(a.a)({},i))}` )
          } )
        },
        _ = () => m,
        T = () => O
    },
    cokx: function ( e, t, n ) {
      "use strict";
      var a = n( "Czhu" ),
        r = n( "OsfY" ),
        o = n( "uIYj" ),
        s = n( "qgmE" );
      let c;
      ! function ( e ) {
        e.RESET_EDITOR_STATE = "RESET_EDITOR_STATE"
      }( c || ( c = {} ) );
      const i = {
        status: null,
        synchronyConfigMap: {},
        contentReconciliationStatus: {
          isRequesting: !1
        }
      };

      function u( e, t ) {
        return null === e || null === t ? null : `/${e}/confluence-adf-${t}`
      }
      var l = n( "7+Q0" ),
        d = n( "adTp" ),
        E = n( "hpu0" ),
        p = n( "3VMZ" ),
        f = n( "xQ7x" );
      var m = n( "T4MV" );
      const b = {
        errorData: O( null ),
        statusCode: null
      };

      function O( e ) {
        if ( null === e ) return {};
        const t = {};
        return e.data && e.data.errors && e.data.errors.forEach( e => {
          t[ e.message.key ] = e.details || !0
        } ), Object( a.a )( {
          [ e.message ]: e.details || !0
        }, t )
      }
      const h = Object( a.a )( {
        hasRequestedEditorContent: !1,
        contentId: void 0,
        editorContent: null,
        title: null,
        hasRefreshedPage: !1,
        contentType: null,
        editorMode: o.c.NONE,
        isEditorDirty: !1,
        isUnpublishedDraft: null,
        shouldShowRevertDialog: !1,
        shouldShowRevertDialogDiff: !1,
        hasDeletedDraft: !1,
        hasRevertedDraft: !1,
        collaboratorRelations: [],
        touchedRelations: [],
        fetchingCollaboratorRelations: !1,
        fetchingTouchedRelations: !1,
        isPublishingContent: !1,
        syncRev: null,
        confRev: null,
        lastPublisher: null,
        publishedEditorContent: null,
        isADFContentInvalid: !1,
        publishedTitle: "",
        contentSpaceKey: "",
        fetchReconciledEditorContentFinished: !1,
        fetchReconciledEditorContentFailure: !1,
        nextTryIn: null,
        contentAppearanceDraft: {
          appearance: l.b.DEFAULT,
          version: -1
        },
        contentAppearancePublished: {
          appearance: l.b.DEFAULT,
          version: -1
        },
        contentAppearanceLoading: !1,
        showErrorOnUpdateContentAppearanceDraftConflict: !1,
        showErrorOnUpdateContentAppearancePublishedConflict: !1,
        parentPageId: null
      }, b );
      var g = n( "Svze" ),
        _ = n.n( g );
      const T = Object( g.fromJS )( {
        isSaving: !1,
        hasError: !1,
        contentId: null
      } );
      var I = n( "QmUA" );
      const S = Object( g.Map )( {
        currentMediaItem: null,
        isOpen: !1
      } );
      var C = Object( r.combineReducers )( {
          previewer: ( e = S, t ) => {
            switch ( t.type ) {
              case I.b:
                return e.merge( {
                  currentMediaItem: t.item.id,
                  isOpen: !0
                } );
              case I.a:
                return S
            }
            return e
          }
        } ),
        A = n( "S1Bf" );
      const y = [],
        R = {
          content: null,
          space: null,
          labels: y,
          isAddingLabel: !1,
          isFetchingContent: !1
        };
      var v = n( "vqZc" );
      const P = {
        isOnboardingOpen: !1,
        isOpen: !1
      };
      let N;
      ! function ( e ) {
        e.EDITOR_SHOW_VIEW_CHANGES_DIALOG = "EDITOR_SHOW_VIEW_CHANGES_DIALOG", e.EDITOR_HIDE_VIEW_CHANGES_DIALOG = "EDITOR_HIDE_VIEW_CHANGES_DIALOG"
      }( N || ( N = {} ) );
      const j = {
        isOpen: !1
      };
      let D;
      ! function ( e ) {
        e.TOGGLE_BUTTON_INVITE_TO_EDIT = "TOGGLE_BUTTON_INVITE_TO_EDIT"
      }( D || ( D = {} ) );
      const L = {
        isSelected: !1
      };
      let w;
      ! function ( e ) {
        e.EDITOR_BREADCRUMBS_SUCCESS = "EDITOR_BREADCRUMBS_SUCCESS", e.EDITOR_BREADCRUMBS_FAILURE = "EDITOR_BREADCRUMBS_FAILURE"
      }( w || ( w = {} ) );
      let k;
      ! function ( e ) {
        e.EDITOR_DRAFT_SAVE_REQUEST = "EDITOR_DRAFT_SAVE_REQUEST", e.EDITOR_DRAFT_SAVE_SUCCESS = "EDITOR_DRAFT_SAVE_SUCCESS", e.EDITOR_DRAFT_SAVE_FAILURE = "EDITOR_DRAFT_SAVE_FAILURE", e.SET_SAVE_DRAFT = "SET_SAVE_DRAFT"
      }( k || ( k = {} ) );
      const U = {
        isSaving: !1,
        isError: !1,
        errorCode: null
      };
      var M = Object( r.combineReducers )( {
          editorContentV2: function ( e = h, t ) {
            var n, r, o, s;
            switch ( t.type ) {
              case f.a.EDITOR_UPDATE_CONTENT_APPEARANCE_PROPERTY_REQUEST:
                if ( e.contentId !== t.contentId ) return e;
                let u = Object( a.a )( Object( a.a )( {}, e ), {}, {
                  contentAppearanceLoading: !0
                } );
                return t.propertyKey === l.a.PUBLISHED ? u.contentAppearancePublished = Object( a.a )( Object( a.a )( {}, u.contentAppearancePublished ), {}, {
                  appearance: t.propertyValue
                } ) : u.contentAppearanceDraft = Object( a.a )( Object( a.a )( {}, u.contentAppearanceDraft ), {}, {
                  appearance: t.propertyValue
                } ), u;
              case f.a.EDITOR_UPDATE_CONTENT_APPEARANCE_PROPERTY_SUCCESS:
                if ( e.contentId !== t.contentId ) return e;
                const g = {
                  appearance: t.response.value,
                  version: t.response.version.number
                };
                let _ = Object( a.a )( Object( a.a )( {}, e ), {}, {
                  contentAppearanceLoading: !1
                } );
                return t.response.key === l.a.PUBLISHED ? ( _.contentAppearancePublished = g, _.showErrorOnUpdateContentAppearancePublishedConflict = !1 ) : ( _.contentAppearanceDraft = g, _.showErrorOnUpdateContentAppearanceDraftConflict = !1 ), _;
              case f.a.EDITOR_UPDATE_CONTENT_APPEARANCE_PROPERTY_FAILURE:
                if ( e.contentId !== t.options.contentId ) return e;
                if ( 409 === ( null === ( r = t.error ) || void 0 === r ? void 0 : r.statusCode ) )
                  if ( t.options.propertyKey === l.a.DRAFT ) {
                    if ( !e.showErrorOnUpdateContentAppearanceDraftConflict ) return Object( a.a )( Object( a.a )( {}, e ), {}, {
                      contentAppearanceLoading: !1,
                      showErrorOnUpdateContentAppearanceDraftConflict: !0
                    } )
                  } else if ( !e.showErrorOnUpdateContentAppearancePublishedConflict ) return Object( a.a )( Object( a.a )( {}, e ), {}, {
                  contentAppearanceLoading: !1,
                  showErrorOnUpdateContentAppearancePublishedConflict: !0
                } );
                return Object( a.a )( Object( a.a )( {}, e ), {}, {
                  contentAppearanceLoading: !1,
                  statusCode: t.error && t.error.statusCode,
                  errorData: O( t.message )
                } );
              case f.a.CONTENT_SUCCESS:
                return !0 === e.hasRevertedDraft || !0 === e.hasDeletedDraft ? Object( a.a )( Object( a.a )( {}, e ), {}, {
                  hasRefreshedPage: !0
                } ) : e;
              case f.a.CHANGE_EDITOR_MODE:
                return Object( a.a )( Object( a.a )( {}, e ), {}, {
                  editorMode: t.mode
                } );
              case f.a.CHANGE_EDITOR_TITLE:
                return Object( a.a )( Object( a.a )( {}, e ), {}, {
                  title: t.title
                } );
              case f.a.EDITOR_CONTENT_V2_REQUEST:
                return e.contentId !== t.contentId ? Object( a.a )( Object( a.a )( {}, e ), {}, {
                  contentId: t.contentId,
                  editorContent: null,
                  publishedEditorContent: null,
                  isADFContentInvalid: !1,
                  hasRequestedEditorContent: !1
                }, b ) : Object( a.a )( Object( a.a )( {}, e ), {}, {
                  hasRequestedEditorContent: !1
                } );
              case f.a.EDITOR_CONTENT_V2_SUCCESS:
                if ( e.contentId !== t.contentId ) return e;
                const T = t.response.editorContent[ t.docFormat ],
                  {
                    isADFContentInvalid: I = !1,
                    value: S
                  } = T,
                  C = t.response.title || "",
                  A = Object( d.d )( t.response.appearanceDraft, l.a.DRAFT ),
                  y = Object( d.d )( t.response.appearancePublished, l.a.PUBLISHED );
                let R = null;
                if ( t.response.ancestors ) {
                  const e = t.response.ancestors.slice( -1 )[ 0 ];
                  e && ( R = e.id )
                }
                return Object( a.a )( Object( a.a )( {}, e ), {}, {
                  parentPageId: R,
                  publishedEditorContent: S,
                  publishedTitle: C,
                  contentSpaceKey: ( null == t || null === ( o = t.response ) || void 0 === o || null === ( s = o.space ) || void 0 === s ? void 0 : s.key ) || "",
                  statusCode: 200,
                  hasRequestedEditorContent: !0,
                  errorData: O( null ),
                  contentType: t.response.type,
                  isUnpublishedDraft: t.response.isUnpublishedDraft,
                  isADFContentInvalid: I,
                  contentAppearanceDraft: A,
                  contentAppearancePublished: y
                } );
              case f.a.EDITOR_CONTENT_V2_FAILURE:
                return e.contentId !== t.options.contentId ? e : Object( a.a )( Object( a.a )( {}, e ), {}, {
                  statusCode: t.error && t.error.statusCode,
                  errorData: O( t.message || null ),
                  hasRequestedEditorContent: !0,
                  fetchReconciledEditorContentFinished: !0,
                  fetchReconciledEditorContentFailure: !0
                } );
              case f.a.UPDATE_CONTENT_SPACE_KEY:
                return Object( a.a )( Object( a.a )( {}, e ), {}, {
                  contentSpaceKey: t.spaceKey
                } );
              case f.a.SET_IS_PUBLISHING_CONTENT:
                return Object( a.a )( Object( a.a )( {}, e ), {}, {
                  isPublishingContent: t.isPublishingContent
                } );
              case f.a.CREATE_TEMPLATE_REQUEST:
              case f.a.UPDATE_TEMPLATE_REQUEST:
              case f.a.EDITOR_CONTENT_PUBLISH_REQUEST:
                return Object( a.a )( Object( a.a )( {}, e ), {}, {
                  isPublishingContent: !0
                } );
              case f.a.CREATE_TEMPLATE_FAILURE:
              case f.a.UPDATE_TEMPLATE_FAILURE:
              case f.a.EDITOR_CONTENT_PUBLISH_FAILURE:
              case f.a.EDITOR_CONTENT_FROM_TEMPLATE_PUBLISH_FAILURE:
                const v = null != ( n = t ) && null != ( n = n.options ) && null != ( n = n.content ) ? n.id : n;
                return v && v.toString() !== e.contentId ? e : ( t.options.migratedRecently && Object( E.b )().fail( {
                  name: p.a.MIGRATE_PAGE_PUBLISH,
                  error: new Error( JSON.stringify( O( t.message || null ) ) )
                } ), t.options && t.options.retryOnConflict && t.error && 409 === t.error.statusCode ? e : Object( a.a )( Object( a.a )( {}, e ), {}, {
                  isPublishingContent: !1,
                  statusCode: t.error && t.error.statusCode,
                  errorData: O( t.message )
                } ) );
              case f.a.CREATE_TEMPLATE_SUCCESS:
              case f.a.UPDATE_TEMPLATE_SUCCESS:
              case f.a.EDITOR_CONTENT_PUBLISH_SUCCESS:
              case f.a.EDITOR_CONTENT_FROM_TEMPLATE_PUBLISH_SUCCESS:
                return t.migratedRecently && Object( E.b )().succeed( {
                  name: p.a.MIGRATE_PAGE_PUBLISH
                } ), Object( a.a )( Object( a.a )( {}, e ), {}, {
                  isUnpublishedDraft: !1,
                  isPublishingContent: !1,
                  editorMode: t.editorMode
                } );
              case f.a.CLOSE_EDITOR_ERROR:
                return Object( a.a )( Object( a.a )( {}, e ), b );
              case f.a.SHOW_EDITOR_ERROR:
                return Object( a.a )( Object( a.a )( {}, e ), {}, {
                  statusCode: t.statusCode || null,
                  errorData: t.errorData
                } );
              case f.a.EDITOR_IS_DIRTY:
                return Object( a.a )( Object( a.a )( {}, e ), {}, {
                  isEditorDirty: !0
                } );
              case f.a.EDITOR_SHOW_REVERT_DIALOG:
                return Object( a.a )( Object( a.a )( {}, e ), {}, {
                  shouldShowRevertDialog: !0,
                  shouldShowRevertDialogDiff: !1
                } );
              case f.a.EDITOR_SHOW_REVERT_DIALOG_DIFF:
                return Object( a.a )( Object( a.a )( {}, e ), {}, {
                  shouldShowRevertDialogDiff: !0
                } );
              case f.a.EDITOR_SHOW_REVERT_DIALOG_CONTRIBUTORS:
                return Object( a.a )( Object( a.a )( {}, e ), {}, {
                  shouldShowRevertDialogDiff: !1
                } );
              case f.a.EDITOR_HIDE_REVERT_DIALOG:
                return Object( a.a )( Object( a.a )( {}, e ), {}, {
                  shouldShowRevertDialog: !1
                } );
              case f.a.EDITOR_DELETE_CONTENT_SUCCESS:
                return Object( a.a )( Object( a.a )( {}, e ), {}, {
                  shouldShowRevertDialog: !1,
                  hasDeletedDraft: !0
                } );
              case f.a.EDITOR_FETCH_COLLABORATOR_RELATIONS_REQUEST:
                return Object( a.a )( Object( a.a )( {}, e ), {}, {
                  fetchingCollaboratorRelations: !0
                } );
              case f.a.EDITOR_FETCH_COLLABORATOR_RELATIONS_SUCCESS:
                return Object( a.a )( Object( a.a )( {}, e ), {}, {
                  fetchingCollaboratorRelations: !1,
                  collaboratorRelations: t.response
                } );
              case f.a.EDITOR_FETCH_COLLABORATOR_RELATIONS_FAILURE:
                return Object( a.a )( Object( a.a )( {}, e ), {}, {
                  fetchingCollaboratorRelations: !1
                } );
              case f.a.EDITOR_FETCH_TOUCHED_RELATIONS_REQUEST:
                return Object( a.a )( Object( a.a )( {}, e ), {}, {
                  fetchingTouchedRelations: !0
                } );
              case f.a.EDITOR_FETCH_TOUCHED_RELATIONS_SUCCESS:
                return Object( a.a )( Object( a.a )( {}, e ), {}, {
                  fetchingTouchedRelations: !1,
                  touchedRelations: t.response
                } );
              case f.a.EDITOR_FETCH_TOUCHED_RELATIONS_FAILURE:
                return Object( a.a )( Object( a.a )( {}, e ), {}, {
                  fetchingTouchedRelations: !1
                } );
              case f.a.EDITOR_REVERT_CONTENT_SUCCESS:
                return Object( a.a )( Object( a.a )( {}, e ), {}, {
                  shouldShowRevertDialog: !1,
                  hasRevertedDraft: !0
                } );
              case f.a.EDITOR_CONTENT_PREVIEW_FAILURE:
                return Object( a.a )( Object( a.a )( {}, e ), {}, {
                  statusCode: t.error && t.error.statusCode,
                  errorData: O( t.message )
                } );
              case f.a.HANDLE_SYNCHRONY_PUBLISH:
                return e.contentId !== t.contentId ? e : Object( a.a )( Object( a.a )( {}, e ), {}, {
                  statusCode: null,
                  errorData: O( {
                    message: "other-publish"
                  } ),
                  isUnpublishedDraft: !1,
                  lastPublisher: t.lastPublisher
                } );
              case f.a.FETCH_RECONCILED_EDITOR_CONTENT_SUCCESS:
                return t.contentId !== e.contentId ? e : Object( a.a )( Object( a.a )( {}, e ), {}, {
                  fetchReconciledEditorContentFinished: !0,
                  fetchReconciledEditorContentFailure: !1
                } );
              case f.a.FETCH_RECONCILED_EDITOR_CONTENT_FAILURE:
                return t.contentId !== e.contentId ? e : Object( a.a )( Object( a.a )( {}, e ), {}, {
                  statusCode: null,
                  errorData: O( {
                    message: "content-reconciliation",
                    details: t.error.message || String( t.error )
                  } ),
                  fetchReconciledEditorContentFinished: null === t.nextTryIn,
                  fetchReconciledEditorContentFailure: !0,
                  nextTryIn: t.nextTryIn
                } );
              case f.a.EDITOR_DRAFT_SAVE_SUCCESS:
                return e.contentId !== "" + t.content.id ? e : Object( a.a )( Object( a.a )( {}, e ), {}, {
                  isEditorDirty: !1
                } );
              case f.a.GET_TEMPLATE_EDITOR_CONTENT_REQUEST:
                return Object( a.a )( Object( a.a )( {}, e ), {}, {
                  contentId: t.contentId,
                  editorContent: null,
                  title: ""
                } );
              case f.a.GET_TEMPLATE_EDITOR_CONTENT_SUCCESS:
                const P = t.response;
                if ( t.contentId !== P.templateId && !Object( m.a )( t.contentId ) ) return e;
                try {
                  return Object( a.a )( Object( a.a )( {}, e ), {}, {
                    editorContent: JSON.parse( P.body.atlas_doc_format.value ),
                    title: P.name
                  } )
                } catch ( i ) {
                  return Object( a.a )( Object( a.a )( {}, e ), {}, {
                    errorData: {
                      "template-content-parsing-failure": !0
                    }
                  } )
                }
                case c.RESET_EDITOR_STATE:
                  return h;
                default:
                  return e
            }
          },
          editorContentPreviewer: function ( e = Object( g.Map )( {} ), t ) {
            const n = {
              hasFetchedPreviewContent: !1,
              renderedPreviewContent: null
            };
            switch ( t.type ) {
              case f.d + "_REQUEST":
                return e.mergeIn( [ t.contentId ], n );
              case f.d + "_FAILURE":
                return e.mergeIn( [ t.contentId ], {
                  hasFetchedPreviewContent: !0,
                  renderedPreviewContent: ""
                } );
              case f.d + "_SUCCESS":
                return e.mergeIn( [ t.contentId ], {
                  hasFetchedPreviewContent: !0,
                  renderedPreviewContent: t.response.renderedPreviewContent
                } );
              case f.b:
                if ( t.contentId && t.mode !== o.c.PREVIEW ) return e.delete( t.contentId );
              default:
                return e
            }
          },
          movePage: function ( e = T, t ) {
            switch ( t.type ) {
              case f.e + "_REQUEST":
                return e.merge( {
                  isSaving: !0,
                  hasError: !1,
                  contentId: t.contentId
                } );
              case f.e + "_FAILED":
                return e.get( "contentId" ) !== t.contentId ? e : e.merge( {
                  isSaving: !1,
                  hasError: !0
                } );
              case f.e + "_SUCCESS":
                return e.get( "contentId" ) !== t.contentId ? e : e.merge( {
                  isSaving: !1
                } );
              case c.RESET_EDITOR_STATE:
                return T
            }
            return e
          },
          media: C,
          template: function ( e = R, t ) {
            switch ( t.type ) {
              case f.a.GET_TEMPLATE_EDITOR_CONTENT_REQUEST:
                return Object( a.a )( Object( a.a )( {}, e ), {}, {
                  space: null,
                  content: null,
                  isFetchingContent: !0
                } );
              case f.a.GET_TEMPLATE_EDITOR_CONTENT_SUCCESS:
                const n = t.response;
                return t.contentId === n.templateId || Object( m.a )( t.contentId ) ? Object( a.a )( Object( a.a )( {}, e ), {}, {
                  content: {
                    description: n.description,
                    id: t.contentId
                  },
                  labels: n.labels,
                  space: n.space,
                  isFetchingContent: !1
                } ) : e;
              case f.a.GET_TEMPLATE_EDITOR_CONTENT_FAILURE:
                return Object( a.a )( Object( a.a )( {}, e ), {}, {
                  isFetchingContent: !1
                } );
              case A.c + "_REQUEST":
                return Object( a.a )( Object( a.a )( {}, e ), {}, {
                  labels: y
                } );
              case A.c + "_SUCCESS":
                return e.content && e.content.id !== t.contentId ? e : Object( a.a )( Object( a.a )( {}, e ), {}, {
                  labels: t.response.labels
                } );
              case A.b + "_SUCCESS":
                return Object( a.a )( Object( a.a )( {}, e ), {}, {
                  labels: e.labels.filter( e => e.id !== t.labelId )
                } );
              case A.a:
                return Object( a.a )( Object( a.a )( {}, e ), {}, {
                  labels: e.labels.concat( t.labels ),
                  isAddingLabel: !1
                } );
              case A.d:
                return Object( a.a )( Object( a.a )( {}, e ), {}, {
                  labels: e.labels
                } );
              case A.a + "_REQUEST":
                return Object( a.a )( Object( a.a )( {}, e ), {}, {
                  isAddingLabel: !0
                } );
              case A.a + "_SUCCESS":
                return Object( a.a )( Object( a.a )( {}, e ), {}, {
                  labels: t.response.labels,
                  isAddingLabel: !1
                } );
              case c.RESET_EDITOR_STATE:
                return R;
              default:
                return e
            }
          },
          helpMenu: function ( e = P, t ) {
            switch ( t.type ) {
              case f.a.OPEN_HELP_MENU_ONBOARDING:
                return Object( a.a )( Object( a.a )( {}, e ), {}, {
                  isOnboardingOpen: !0
                } );
              case f.a.OPEN_HELP_MENU:
                return Object( a.a )( Object( a.a )( {}, e ), {}, {
                  isOpen: !0
                } );
              case f.a.CLOSE_HELP_MENU:
                return Object( a.a )( Object( a.a )( {}, e ), {}, {
                  isOpen: !1
                } );
              case f.a.FEATURE_DISCOVERED_MARK_SUCCESS:
                return t.pluginKey === v.b && t.featureKey === v.a.FABRIC_EDITOR_HELP_MENU_SPOTLIGHT ? Object( a.a )( Object( a.a )( {}, e ), {}, {
                  isOnboardingOpen: !1
                } ) : e;
              default:
                return e
            }
          },
          changesDialog: function ( e = j, t ) {
            switch ( t.type ) {
              case N.EDITOR_SHOW_VIEW_CHANGES_DIALOG:
                return Object( a.a )( Object( a.a )( {}, e ), {}, {
                  isOpen: !0
                } );
              case N.EDITOR_HIDE_VIEW_CHANGES_DIALOG:
                return Object( a.a )( Object( a.a )( {}, e ), {}, {
                  isOpen: !1
                } );
              case c.RESET_EDITOR_STATE:
                return j;
              default:
                return e
            }
          },
          inviteToEdit: function ( e = L, t ) {
            switch ( t.type ) {
              case D.TOGGLE_BUTTON_INVITE_TO_EDIT:
                return Object( a.a )( Object( a.a )( {}, e ), {}, {
                  isSelected: !e.isSelected
                } );
              case c.RESET_EDITOR_STATE:
                return L;
              default:
                return e
            }
          },
          breadcrumbs: function ( e = null, t ) {
            switch ( t.type ) {
              case w.EDITOR_BREADCRUMBS_FAILURE:
                return e;
              case w.EDITOR_BREADCRUMBS_SUCCESS:
                return t.response.breadcrumbs;
              case c.RESET_EDITOR_STATE:
                return null;
              default:
                return e
            }
          },
          draft: function ( e = U, t ) {
            switch ( t.type ) {
              case k.EDITOR_DRAFT_SAVE_REQUEST:
                return {
                  isSaving: !0, isError: !1, errorCode: null
                };
              case k.EDITOR_DRAFT_SAVE_FAILURE:
                return {
                  isSaving: !1, isError: !0, errorCode: t.message && t.message.statusCode
                };
              case k.EDITOR_DRAFT_SAVE_SUCCESS:
                return {
                  isSaving: !1, isError: !1, errorCode: null
                };
              case k.SET_SAVE_DRAFT:
                return {
                  isSaving: void 0 !== t.isSaving && t.isSaving, isError: !1, errorCode: null
                };
              case c.RESET_EDITOR_STATE:
                return U;
              default:
                return e
            }
          }
        } ),
        F = Object( r.combineReducers )( {
          synchrony: function ( e = i, t ) {
            switch ( t.type ) {
              case s.a.CONNECTION_OFFLINE:
                return Object( a.a )( Object( a.a )( {}, e ), {}, {
                  status: "disconnected"
                } );
              case s.a.CONNECTION_ONLINE:
                return Object( a.a )( Object( a.a )( {}, e ), {}, {
                  status: "connected"
                } );
              case s.a.SYNCHRONY_UPDATE_STATUS:
                return Object( a.a )( Object( a.a )( {}, e ), {}, {
                  status: t.status
                } );
              case s.a.EDITOR_GET_SYNCHRONY_TOKEN_SUCCESS:
                const {
                  contentId: n
                } = t;
                return Object( a.a )( Object( a.a )( {}, e ), {}, {
                  synchronyConfigMap: Object( a.a )( Object( a.a )( {}, e.synchronyConfigMap ), {}, {
                    [ n ]: {
                      jwt: t.response.synchronyToken,
                      url: t.response.configuredUrl,
                      appId: t.response.applicationId,
                      entityId: u( t.response.applicationId, n ),
                      synchronyExpiry: t.response.synchronyExpiry
                    }
                  } )
                } );
              case s.a.EDITOR_GET_SYNCHRONY_TOKEN_FAILURE:
                const r = t.error && t.error.statusCode,
                  l = 403 === r || 404 === r ? o.h.PERMISSION_CHANGED : e.status;
                return Object( a.a )( Object( a.a )( {}, e ), {}, {
                  synchronyConfigMap: Object( a.a )( Object( a.a )( {}, e.synchronyConfigMap ), {}, {
                    [ t.options.contentId ]: !1
                  } ),
                  status: l
                } );
              case s.a.EDITOR_RECONCILE_CONTENT_REQUEST:
                return Object( a.a )( Object( a.a )( {}, e ), {}, {
                  contentReconciliationStatus: {
                    isRequesting: !0
                  }
                } );
              case s.a.EDITOR_RECONCILE_CONTENT_SUCCESS:
                return Object( a.a )( Object( a.a )( {}, e ), {}, {
                  contentReconciliationStatus: Object( a.a )( Object( a.a )( {}, t.response ), {}, {
                    isRequesting: !1,
                    hasRequested: !0
                  } )
                } );
              case s.a.EDITOR_SYNCHRONY_RECOVER_REQUEST:
                return Object( a.a )( Object( a.a )( {}, e ), {}, {
                  contentReconciliationStatus: Object( a.a )( Object( a.a )( {}, e.contentReconciliationStatus ), {}, {
                    isRecovering: !0
                  } )
                } );
              case s.a.EDITOR_SYNCHRONY_RECOVER_SUCCESS:
                return Object( a.a )( Object( a.a )( {}, e ), {}, {
                  contentReconciliationStatus: Object( a.a )( Object( a.a )( {}, e.contentReconciliationStatus ), {}, {
                    isRecovered: !0,
                    isRecovering: !1
                  } )
                } );
              case c.RESET_EDITOR_STATE:
                return Object( a.a )( Object( a.a )( {}, i ), {}, {
                  synchronyConfigMap: e.synchronyConfigMap
                } );
              default:
                return e
            }
          },
          views: M
        } ),
        G = n( "HXI4" ),
        x = n( "pnCd" ),
        H = n( "Qgdh" ),
        V = n( "EfWO" ),
        B = n.n( V ),
        K = n( "kD2R" ),
        W = n( "yIkG" ),
        q = e => {
          const t = e ? Object( K.connectRouter )( e ) : ( e = null ) => e;
          return ( e, n ) => {
            const r = t( e, n );
            if ( n && n.type === K.LOCATION_CHANGE ) {
              const {
                match: e,
                routeName: t,
                screenName: o
              } = Object( W.a )( n.payload.location.pathname ), s = r.location.search ? B.a.parse( r.location.search, !0 ).query : {};
              return {
                action: r.action,
                location: Object( a.a )( Object( a.a )( {}, r.location ), {}, {
                  query: s,
                  routeName: t,
                  screenName: o
                } ),
                params: e ? e.params : {}
              }
            }
            return r
          }
        };

      function $( e = _.a.fromJS( {
        locale: "en",
        messages: {}
      } ), t ) {
        switch ( t.type ) {
          case "I18N_KEYS_SUCCESS":
            if ( t.response ) return e.mergeIn( [ "messages" ], t.response );
          case "I18N_KEYS_FAILURE":
          default:
            return e
        }
      }
      var Y = n( "2wFc" ),
        z = n( "p0L4" ),
        Q = n( "zUx9" );
      const J = Object( g.Record )( {
        error: !1,
        type: void 0,
        title: void 0,
        body: void 0,
        bodyKey: void 0,
        close: void 0,
        isNetworkConnected: !0
      } );
      const X = {
        history: _.a.List( [] ),
        analytics: _.a.fromJS( {
          currentSection: "",
          previousSection: "",
          searchSessionId: ""
        } )
      };
      var Z = Object( r.combineReducers )( {
          errors: function ( e = new J, t ) {
            if ( t.error && /_FAILURE$/.test( t.type ) )
              if ( t.error instanceof TypeError || t.error instanceof z.a ) {
                if ( !e.isNetworkConnected ) return new J( {
                  error: !0,
                  type: "error",
                  title: "error.connection.lost.title",
                  bodyKey: "error.connection.lost.body",
                  close: "manual",
                  isNetworkConnected: !1
                } )
              } else if ( t.error.statusCode === Q.a || t.error.statusCode === Q.e ) return new J( {
              error: !0,
              type: "error",
              title: "error.server-error.title",
              bodyKey: "error.server-error.body",
              close: "auto"
            } );
            switch ( t.type ) {
              case "CONNECTION_OFFLINE":
                return new J( {
                  error: !1,
                  isNetworkConnected: !1
                } );
              case "CONNECTION_ONLINE":
                return e.error ? new J( {
                  error: !0,
                  type: "success",
                  title: "error.connection.recovered.title",
                  body: '<button onclick="window.location.reload()" class="aui-button aui-button-link btn-reload-content">i18nPlaceholder</button>',
                  bodyKey: "error.connection.recovered.action",
                  close: "manual",
                  isNetworkConnected: !0
                } ) : new J( {
                  isNetworkConnected: !0
                } );
              case "REMOVE_ERROR":
                return new J( {
                  error: !1
                } ).set( "isNetworkConnected", e.isNetworkConnected );
              case "UPLOAD_ATTACHMENT_FAILURE":
                return !t.error || 404 === t.error.statusCode || t.error instanceof TypeError ? new J( {
                  error: !0,
                  type: "error",
                  title: "error.server-error.title",
                  body: !t.error instanceof TypeError ? t.message : "The file may exceed its maximum permitted size.",
                  bodyKey: t.bodyKey,
                  close: "auto"
                } ) : e
            }
            return e
          },
          history: function ( e = X.history, t ) {
            switch ( t.type ) {
              case K.LOCATION_CHANGE:
                return e.push( t.payload.location.pathname ).takeLast( 10 );
              default:
                return e
            }
          },
          analytics: function ( e = X.analytics, t ) {
            switch ( t.type ) {
              case K.LOCATION_CHANGE:
                const n = e.get( "currentSection" ),
                  a = Object( Y.s )( t.payload.location.pathname ),
                  r = B.a.parse( t.payload.location.search, !0 ).query.search_id || e.get( "searchSessionId" );
                return e.merge( {
                  currentSection: a,
                  previousSection: n,
                  searchSessionId: r
                } );
              default:
                return e
            }
          }
        } ),
        ee = n( "J4Kw" );
      const te = Object( g.fromJS )( {
          id: -1,
          ready: !1,
          requested: !1,
          dismissed: !1,
          attributes: {
            heading: "",
            footer: "",
            dialogPlacement: "right top",
            targetBgColor: "white",
            targetRadius: 4
          }
        } ),
        ne = ee.d.map( e => e.map( e => te.merge( {
          id: e
        } ) ) ),
        ae = Object( g.fromJS )( {
          index: -1,
          flow: -1,
          loaded: 0,
          spotlights: ne
        } );
      const re = Object( g.fromJS )( {
        pages: [],
        spaces: [],
        pagesOfSpace: [],
        isRequesting: !1,
        hasFetched: !1
      } );
      var oe = Object( r.combineReducers )( {
        lookAndFeelId: function ( e = "", t ) {
          switch ( t.type ) {
            case "LOOK_AND_FEEL_SETTINGS_SUCCESS":
              return t.spaceKey ? e : t.response.lookAndFeelId;
            default:
              return e
          }
        },
        recentlyViewed: function ( e = re, t ) {
          switch ( t.type ) {
            case "RECENTLY_VIEWED_REQUEST":
            case "RECENTLY_VIEWED_SPACES_REQUEST":
            case "RECENTLY_VIEWED_PAGES_OF_SPACE_REQUEST":
              return e.merge( {
                isRequesting: !0,
                hasFetched: !1
              } );
            case "RECENTLY_VIEWED_FAILED":
            case "RECENTLY_VIEWED_SPACES_FAILED":
            case "RECENTLY_VIEWED_PAGES_OF_SPACE_FAILED":
              return e.merge( {
                isRequesting: !1,
                hasFetched: !1
              } );
            case "RECENTLY_VIEWED_SUCCESS":
              return e.merge( {
                pages: t.response,
                isRequesting: !1,
                hasFetched: !0
              } );
            case "RECENTLY_VIEWED_SPACES_SUCCESS":
              return e.merge( {
                spaces: t.response.result && t.response.result.results,
                isRequesting: !1,
                hasFetched: !0
              } );
            case "RECENTLY_VIEWED_PAGES_OF_SPACE_SUCCESS":
              return e.merge( {
                pagesOfSpace: t.response.results,
                isRequesting: !1,
                hasFetched: !0
              } )
          }
          return e
        }
      } );
      const se = Object( g.fromJS )( {
        data: [],
        isRequesting: !1,
        hasFetched: !1,
        hasError: !1,
        errorDetails: null
      } );
      var ce = Object( r.combineReducers )( {
          links: function ( e = se, t ) {
            switch ( t.type ) {
              case "GET_APP_SWITCHER_LINKS_REQUEST":
                return e.set( "isRequesting", !0 );
              case "GET_APP_SWITCHER_LINKS_FAILURE":
                return e.merge( {
                  isRequesting: !1,
                  hasFetched: !1,
                  hasError: !0,
                  errorDetails: t.message
                } );
              case "GET_APP_SWITCHER_LINKS_SUCCESS":
                return e.merge( {
                  isRequesting: !1,
                  hasFetched: !0,
                  hasError: !1,
                  data: Object( g.List )( t.response )
                } )
            }
            return e
          },
          recentContainers: function ( e = se, t ) {
            switch ( t.type ) {
              case "GET_RECENT_CONTAINERS_REQUEST":
                return e.set( "isRequesting", !0 );
              case "GET_RECENT_CONTAINERS_FAILURE":
                return e.merge( {
                  isRequesting: !1,
                  hasFetched: !1,
                  hasError: !0,
                  errorDetails: t.message
                } );
              case "GET_RECENT_CONTAINERS_SUCCESS":
                return e.merge( {
                  isRequesting: !1,
                  hasFetched: !0,
                  hasError: !1,
                  data: Object( g.List )( t.response.data )
                } )
            }
            return e
          }
        } ),
        ie = n( "oL8P" ),
        ue = n( "ryzd" ),
        le = n( "wujS" ),
        de = n( "ho2p" );
      const Ee = {
          isRequesting: !1,
          hasMore: !1,
          hasFetched: !0
        },
        pe = new ie.a( {
          results: _.a.List( [] ),
          page: 0,
          hasMore: !0,
          hasFetched: !1,
          willbedeleted: _.a.List( [] ),
          isFiltered: !1,
          filterText: void 0
        } ),
        fe = new ue.a( {
          results: _.a.List( [] ),
          page: 0,
          hasMore: !0,
          hasFetched: !1,
          isFiltered: !1
        } ),
        me = Object( g.fromJS )( {
          results: [],
          hasFetched: !1,
          isRequesting: !1,
          isFiltered: !1
        } ),
        be = new le.a( {} );

      function Oe( e, t ) {
        return e.merge( {
          isRequesting: !0,
          hasFetched: !1,
          hasMore: !0,
          isFiltered: !!t.filter
        } )
      }

      function he( e, t, n = "results", a ) {
        const r = t.response && t.response.result && t.response.result[ n ];
        if ( r ) {
          a = a || r.length;
          const n = e.results.size,
            o = ( e = e.isFiltered ? e.merge( {
              results: r,
              filterText: t.filter
            } ) : e.update( "results", e => e.toOrderedSet().union( r ).toList() ) ).results.size,
            s = 0 !== a && !e.isFiltered;
          if ( s && n === o ) throw new Error( "Entities were downloaded from the server, but no new entities were available for display to the user which was unexpected" );
          return e.merge( {
            page: t.page || 1,
            hasMore: s,
            isRequesting: !1,
            hasFetched: !0
          } )
        }
        return e.merge( {
          isRequesting: !1,
          hasFetched: !0
        } )
      }
      const ge = _.a.Map( {} );
      var _e = Object( r.combineReducers )( {
          favouritedSpaces: function ( e = be, t ) {
            switch ( t.type ) {
              case "FAVOURITED_SPACES_SUCCESS":
              case "ANONYMOUS_SPACES_SUCCESS":
                return e.withMutations( e => {
                  if ( e.hasFetched = !0, t.response && t.response.result && t.response.result.results && t.response.entities && t.response.entities.spaces ) {
                    const n = t.response.result.results.filter( e => "project" !== t.response.entities.spaces[ e ].type ),
                      a = new g.OrderedSet( n );
                    e.results = a.concat( e.results ), e.updateIn( [ "results" ], e => e.concat( n ) )
                  }
                } );
              case "SPACE_UNFAVOURITE_SUCCESS":
                return e.updateIn( [ "results" ], e => e.delete( t.key ) );
              case "SPACE_FAVOURITE_SUCCESS":
                return e.updateIn( [ "results" ], e => e.concat( [ t.key ] ) );
              case "SPACE_INFO_SUCCESS":
                if ( t.response && t.response.entities && t.response.entities.spaces ) {
                  const n = t.response.entities.spaces && t.response.entities.spaces[ t.spaceKey ],
                    a = n && n.isFavourite && !e.results.has( t.spaceKey ),
                    r = t.response.entities.spaces[ t.spaceKey ] && "project" !== t.response.entities.spaces[ t.spaceKey ].type;
                  if ( a && r ) return e.updateIn( [ "results" ], e => e.concat( [ t.spaceKey ] ) )
                }
                return e;
              case "UPDATE_SPACE_TYPE_SUCCESS":
                return e.withMutations( e => {
                  "global" === t.response.type && t.isFavourite ? e.updateIn( [ "results" ], e => e.concat( [ t.response.key ] ) ) : "project" === t.response.type && e.updateIn( [ "results" ], e => e.delete( t.response.key ) )
                } );
              default:
                return e
            }
          },
          recentWorkContent: function ( e = pe, t ) {
            switch ( t.type ) {
              case "RECENT_WORK_CONTENT_REQUEST":
                return Oe( e, t );
              case "RECENT_WORK_CONTENT_SUCCESS":
                return he( e, t );
              case "RESET_RECENT_WORK_CONTENT":
                return pe;
              case "RECENT_WORK_CONTENT_FAILURE":
                return e.merge( Ee );
              default:
                return e
            }
          },
          draftContent: function ( e = pe, t ) {
            switch ( t.type ) {
              case "DRAFTS_CONTENT_REQUEST":
                return Oe( e, t );
              case "DRAFTS_CONTENT_SUCCESS":
                return he( e, t );
              case "RESET_DRAFTS_CONTENT":
                return pe;
              case "DRAFTS_CONTENT_FAILURE":
                return e.merge( Ee );
              default:
                return e
            }
          },
          recentlyVisitedContent: function ( e = pe, t ) {
            switch ( t.type ) {
              case "RECENTLY_VISITED_CONTENT_REQUEST":
                return Oe( e, t );
              case "RECENTLY_VISITED_CONTENT_SUCCESS":
                return he( e, t );
              case "RESET_RECENTLY_VISITED_CONTENT":
                return pe;
              case "RECENTLY_VISITED_CONTENT_FAILURE":
                return e.merge( Ee );
              default:
                return e
            }
          },
          popularContent: function ( e = fe, t ) {
            switch ( t.type ) {
              case "POPULAR_CONTENT_REQUEST":
                return Oe( e, t );
              case "POPULAR_CONTENT_SUCCESS":
                e = function ( e, t ) {
                  return t.response && t.response.result && t.response.result.resultList ? e.merge( {
                    result: e.get( "result" ).update( e => e.concat( t.response.result.resultList ) ),
                    page: t.page || 1,
                    isRequesting: !1,
                    hasFetched: !0
                  } ) : e.merge( {
                    isRequesting: !1,
                    hasFetched: !0
                  } )
                }( e, t );
                const n = !!( t.response && t.response.result.resultList.length > 0 ),
                  a = n ? t.response.nextPageOffset || e.nextPageOffset + de.a : void 0;
                return e.merge( {
                  nextPageOffset: a,
                  hasMore: n
                } );
              case "RESET_POPULAR_CONTENT":
                return fe;
              case "POPULAR_CONTENT_FAILURE":
                return e.merge( Ee );
              default:
                return e
            }
          },
          recentlyUpdatedContent: function ( e = me, t ) {
            switch ( t.type ) {
              case "RECENTLY_UPDATED_CONTENT_REQUEST":
                return e.merge( {
                  hasFetched: !1,
                  isRequesting: !0
                } );
              case "RECENTLY_UPDATED_CONTENT_SUCCESS":
                return t.response && t.response.result.changeSets ? e.merge( {
                  hasFetched: !0,
                  isRequesting: !1,
                  results: t.response.result.changeSets
                } ) : e;
              case "RESET_RECENTLY_UPDATED_CONTENT":
                return me;
              case "RECENTLY_UPDATED_CONTENT_FAILURE":
                return new ie.a( Ee );
              default:
                return e
            }
          },
          favouritedContent: function ( e = pe, t ) {
            switch ( t.type ) {
              case "FAVOURITED_CONTENT_REQUEST":
                return Oe( e, t );
              case "FAVOURITED_CONTENT_SUCCESS":
                return he( e, t );
              case "FAVOURITED_CONTENT_FAILURE":
                return e.merge( Ee );
              case "INTEND_TO_UNFAVOURITE":
                return e.results.includes( t.key ) ? e.update( "willbedeleted", e => e.concat( t.key ) ) : e;
              case "UNDO_UNFAVOURITE":
              case "UNFAVOURITE_CONTENT_REQUEST":
                return e.update( "willbedeleted", e => e.filter( e => e !== t.key ) );
              case "UNFAVOURITE_CONTENT_SUCCESS":
                return e.set( "isRequesting", !1 ).update( "willbedeleted", e => e.filter( e => e !== t.key ) ).update( "results", e => e.filter( e => e !== t.key ) );
              case "RESET_FAVOURITED_CONTENT":
                return pe;
              default:
                return e
            }
          },
          viewModel: function ( e = ge, t ) {
            switch ( t.type ) {
              case "DASHBOARD_VIEW_MODEL_REQUEST":
                return e.merge( {
                  isRequesting: !0,
                  hasFetched: !1
                } );
              case "DASHBOARD_VIEW_MODEL_SUCCESS":
                return e.merge( Object( a.a )( Object( a.a )( {}, t.response ), {}, {
                  isRequesting: !1,
                  hasFetched: !0
                } ) );
              case "GET_EXPERIMENT_FEATURES_SUCCESS":
                return e.merge( Object( a.a )( {}, t.response ) );
              default:
                return e
            }
          },
          filter: function ( e = Object( g.fromJS )( {} ), t ) {
            switch ( t.type ) {
              case "RECENTLY_VISITED_CONTENT_REQUEST":
                return e.merge( {
                  RECENTLY_VISITED_CONTENT: t.filter
                } );
              case "RESET_RECENTLY_VISITED_CONTENT":
                return e.merge( {
                  RECENTLY_VISITED_CONTENT: void 0
                } );
              case "RECENT_WORK_CONTENT_REQUEST":
                return e.merge( {
                  RECENT_WORK_CONTENT: t.filter
                } );
              case "RESET_RECENT_WORK_CONTENT":
                return e.merge( {
                  RECENT_WORK_CONTENT: void 0
                } );
              case "FAVOURITED_CONTENT_REQUEST":
                return e.merge( {
                  FAVOURITED_CONTENT: t.filter
                } );
              case "RESET_FAVOURITED_CONTENT":
                return e.merge( {
                  FAVOURITED_CONTENT: void 0
                } );
              case "DRAFTS_CONTENT_REQUEST":
                return e.merge( {
                  DRAFTS_CONTENT: t.filter
                } );
              case "RESET_DRAFT_CONTENT":
                return e.merge( {
                  DRAFTS_CONTENT: void 0
                } );
              default:
                return e
            }
          },
          isReadyForUser: function ( e = !1, t ) {
            switch ( t.type ) {
              case "RECENTLY_UPDATED_CONTENT_SUCCESS":
              case "RECENTLY_UPDATED_CONTENT_FAILURE":
              case "POPULAR_CONTENT_SUCCESS":
              case "POPULAR_CONTENT_FAILURE":
              case "RECENTLY_VISITED_CONTENT_SUCCESS":
              case "RECENTLY_VISITED_CONTENT_FAILURE":
              case "RECENT_WORK_CONTENT_SUCCESS":
              case "RECENT_WORK_CONTENT_FAILURE":
              case "FAVOURITED_CONTENT_SUCCESS":
              case "FAVOURITED_CONTENT_FAILURE":
              case "DRAFTS_CONTENT_SUCCESS":
              case "DRAFTS_CONTENT_FAILURE":
                return !0;
              default:
                return e
            }
          }
        } ),
        Te = n( "eBha" ),
        Ie = n( "6R5o" ),
        Se = n.n( Ie );
      const Ce = Object( g.fromJS )( {} );
      const Ae = Object( g.fromJS )( {
        results: [],
        isRequesting: null,
        hasFetched: !1
      } );
      const ye = Object( g.fromJS )( {
        spaceLookAndFeelMap: {},
        isRequesting: !1
      } );
      var Re = Object( r.combineReducers )( {
        currentSpace: function ( e = Ae, t ) {
          switch ( t.type ) {
            case "SPACE_INFO_SUCCESS":
              const n = t.response.results.length > 0;
              return e.merge( {
                isRequesting: !1,
                hasFetched: !0,
                spaceKey: t.spaceKey,
                isFound: n
              } );
            case "SPACE_INFO_REQUEST":
              return e.merge( {
                hasFetched: !1,
                isRequesting: !0,
                spaceKey: t.spaceKey
              } );
            case "SPACE_INFO_FAILURE":
              return e.merge( {
                hasFetched: !1,
                isRequesting: !1,
                spaceKey: t.spaceKey
              } );
            default:
              return e
          }
        },
        homePage: function ( e = Ce, t ) {
          switch ( t.type ) {
            case "SPACE_HOME_CONTENT_SUCCESS":
              const n = t.response && void 0 !== t.response.result,
                a = !!Se()( t.response.operations, {
                  operation: "update",
                  targetType: "page"
                } );
              return e.mergeIn( [ t.spaceKey ], {
                isRequesting: !1,
                hasFetched: !0,
                isSpaceFound: n,
                canEditSpaceOverview: a,
                contentIsVisible: !1
              } );
            case "SPACE_HOME_CONTENT_FAILURE":
              return e.mergeIn( [ t.spaceKey ], {
                isRequesting: !1,
                hasFetched: !0
              } );
            case "SPACE_HOME_CONTENT_REQUEST":
              return e.mergeIn( [ t.spaceKey ], {
                isRequesting: !0,
                contentIsVisible: !1
              } );
            case Te.c:
              return e.mergeIn( [ t.spaceKey ], {
                contentIsVisible: !0
              } );
            case Te.b:
              return e.mergeIn( [ t.spaceKey ], {
                contentIsVisible: !1
              } );
            default:
              return e
          }
        },
        spaceLogo: function ( e = Object( g.fromJS )( {
          hasUpdated: !1,
          wasError: !1
        } ), t ) {
          switch ( t.type ) {
            case "UPDATE_SPACE_LOGO_REQUEST":
              return e.merge( {
                hasUpdated: !1,
                wasError: !1
              } );
            case "UPDATE_SPACE_LOGO_SUCCESS":
              return e.set( "hasUpdated", !0 );
            case "UPDATE_SPACE_LOGO_FAILURE":
              return e.merge( {
                hasUpdated: !0,
                wasError: !0
              } );
            case "RESET_SPACE_LOGO":
              return e.merge( {
                hasUpdated: !1,
                wasError: !1
              } );
            default:
              return e
          }
        },
        theme: function ( e = Object( g.fromJS )( {
          isRequesting: !1,
          hasFetched: !1,
          hasSpaceHomeOverride: !1,
          spaceHomeOverrideDescriptor: {
            isRequesting: !1
          }
        } ), t ) {
          switch ( t.type ) {
            case "SPACE_THEME_REQUEST":
              return e.merge( {
                isRequesting: !0,
                hasFetched: !1
              } );
            case "SPACE_THEME_SUCCESS":
              return e.merge( {
                isRequesting: !1,
                hasFetched: !0,
                hasSpaceHomeOverride: !0,
                themeAddonKey: t.response.addonKey,
                themeModuleKey: t.response.moduleKey,
                themeSpaceKey: t.spaceKey
              } );
            case "SPACE_THEME_FAILURE":
              return e.merge( {
                isRequesting: !1,
                hasSpaceHomeOverride: !1,
                hasFetched: !0
              } );
            case "SPACE_HOME_OVERRIDE_CONTENT_REQUEST":
              return e.setIn( [ "spaceHomeOverrideDescriptor", "isRequesting" ], !0 );
            case "SPACE_HOME_OVERRIDE_CONTENT_SUCCESS":
              return e.setIn( [ "spaceHomeOverrideDescriptor", "isRequesting" ], !1 );
            case "SPACE_HOME_OVERRIDE_CONTENT_FAILURE":
              return t.error && 404 === t.error.statusCode && ( e = e.merge( {
                hasSpaceHomeOverride: !1
              } ) ), e.setIn( [ "spaceHomeOverrideDescriptor", "isRequesting" ], !1 );
            default:
              return e
          }
        },
        lookAndFeel: function ( e = ye, t ) {
          if ( !t.spaceKey ) return e;
          switch ( t.type ) {
            case "LOOK_AND_FEEL_SETTINGS_REQUEST":
              return e.set( "isRequesting", !0 );
            case "LOOK_AND_FEEL_SETTINGS_SUCCESS":
              return e.withMutations( e => e.set( "isRequesting", !1 ).setIn( [ "spaceLookAndFeelMap", t.spaceKey ], t.response.lookAndFeelId ) );
            default:
              return e
          }
        },
        spaceHeader: function ( e = Object( g.fromJS )( {
          isSpaceHeaderVisible: !0
        } ), t ) {
          switch ( t.type ) {
            case Te.a:
              return e.setIn( [ "isSpaceHeaderVisible" ], t.isSpaceHeaderVisible );
            default:
              return e
          }
        }
      } );
      const ve = Object( g.fromJS )( {
        data: {}
      } );
      var Pe = Object( r.combineReducers )( {
          spaceCalendars: function ( e = ve, t ) {
            switch ( t.type ) {
              case "SPACE_CALENDAR_SUCCESS":
                return t.response ? e.setIn( [ "data", t.response.spaceKey ], t.response ) : e;
              default:
                return e
            }
          }
        } ),
        Ne = n( "2M9l" ),
        je = n( "kVkH" ),
        De = n.n( je ),
        Le = n( "blf0" );
      const we = {
          viewPage: {
            labels: Object( g.fromJS )( {
              isShowingDialog: !1,
              isFetching: !1,
              canUpdate: !1,
              results: []
            } ),
            labelDialog: Object( g.fromJS )( {
              error: "",
              isAdding: !1,
              suggestions: []
            } )
          }
        },
        ke = e => {
          let t = "",
            n = "";
          const a = [];
          if ( "object" == typeof e && e.message && ( t = e.message ), "string" == typeof t && t.indexOf( "messageKey" ) >= 0 ) {
            const e = /\[messageKey=((?:\w|\.)+){1},\s*args=\[((?:.)+)?\]\]\]/;
            if ( e.test( t ) ) {
              const r = e.exec( t );
              n = r[ 1 ];
              const o = r[ 2 ] ? r[ 2 ].split( "," ) : "";
              o && ( a[ 0 ] = De()( o ), a[ 1 ] = ( o || [] ).slice( 1 ).join( ", " ) )
            }
          }
          return new Le.a( {
            message: t,
            messageKey: n,
            args: a
          } )
        },
        Ue = Object( g.fromJS )( {
          results: Object( g.List )( [] ),
          isRequesting: !1,
          hasFetched: !1,
          loadedCount: 0,
          addedCommentId: null,
          addedCommentShowAfter: null,
          isRequestingCommentData: !1,
          updatedCommentIds: Object( g.List )( [] ),
          canAddComments: !1
        } ),
        Me = new( Object( g.Record )( {
          contentId: null,
          mode: null,
          errorMessage: "",
          errorType: null,
          updateTime: 0,
          isEditorLoaded: !1
        } ) ),
        Fe = {
          contentId: null,
          mode: null
        },
        Ge = {
          errorMessage: "",
          updateTime: 0
        };
      var xe = n( "kWGc" );
      const He = {
        viewPage: {
          quickReload: Object( g.fromJS )( {
            blackListedError: null,
            newPageUpdatedUsers: [],
            editUpdatesCount: 0,
            newCommentUsers: [],
            commentUpdatesCount: 0
          } )
        }
      };
      const Ve = Object( g.fromJS )( {
        contentId: null,
        hasFetched: null,
        result: null,
        errorData: null,
        statusCode: null,
        silent: null,
        spaceKey: null
      } );
      const Be = Object( g.fromJS )( {
          isFetchingContent: !1,
          contentIsVisible: !1,
          hasFetched: !1,
          contentId: null,
          shouldResetContent: !1,
          shouldRefreshContent: !1,
          canEdit: !1
        } ),
        Ke = Object( g.fromJS )( {
          contentId: null,
          hasLoaded: !1
        } );
      var We = Object( r.combineReducers )( {
          content: function ( e = Be, t ) {
            switch ( t.type ) {
              case "CONTENT_REQUEST":
                return e.merge( {
                  isFetchingContent: !0,
                  contentIsVisible: !1,
                  hasFetched: !1,
                  shouldResetContent: !1
                } );
              case "CONTENT_FAILURE":
                return e.merge( {
                  isFetchingContent: !1,
                  hasFetched: !0
                } );
              case "CONTENT_SUCCESS":
                return e.merge( {
                  isFetchingContent: !1,
                  hasFetched: !0,
                  canEdit: !( !t.response.operations || !t.response.operations.find( e => "update" === e.operation && e.targetType === t.response.type ) )
                } );
              case "EDITOR_CONTENT_PUBLISH_SUCCESS":
              case "EDITOR_CONTENT_FROM_TEMPLATE_PUBLISH_SUCCESS":
                return e.merge( {
                  shouldResetContent: !0,
                  shouldRefreshContent: !0
                } );
              case xe.f:
                return e.merge( {
                  contentId: t.contentId,
                  contentIsVisible: !0
                } );
              case xe.b:
                return e.merge( {
                  isFetchingContent: !1,
                  contentIsVisible: !1,
                  hasFetched: !1,
                  shouldResetContent: !0,
                  shouldRefreshContent: !0
                } );
              case xe.e:
                return e.merge( {
                  shouldRefreshContent: t.state
                } );
              default:
                return e
            }
          },
          editorContent: function ( e = Ve, t ) {
            switch ( t.type ) {
              case Ne.e + "_REQUEST":
                return e.merge( {
                  contentId: t.contentId,
                  silent: !!t.silent,
                  hasFetched: !1,
                  result: null,
                  errorData: null,
                  statusCode: null,
                  spaceKey: null
                } );
              case Ne.e + "_SUCCESS":
                return e.get( "contentId" ) !== t.contentId ? e : e.merge( {
                  hasFetched: !0,
                  result: t.response && t.response._originalResponse,
                  statusCode: Q.d,
                  errorData: null,
                  spaceKey: t.response.spaceKey
                } );
              case Ne.e + "_FAILURE":
                return e.get( "contentId" ) !== t.options.contentId ? e : e.merge( {
                  hasFetched: !0,
                  statusCode: t.error && t.error.statusCode,
                  errorData: t.message
                } );
              case Ne.E:
                return Ve;
              default:
                return e
            }
          },
          labels: ( e = we.viewPage.labels, t ) => {
            switch ( t.type ) {
              case "SHOW_EDIT_LABEL_DIALOG":
                return e.merge( {
                  isShowingDialog: !0
                } );
              case "CLOSE_EDIT_LABEL_DIALOG":
                return e.merge( {
                  isShowingDialog: !1
                } );
              case "GET_LABELS_REQUEST":
                return e.merge( {
                  isFetching: !0
                } );
              case "GET_LABELS_FAILURE":
                return e.merge( {
                  isFetching: !1
                } );
              case "GET_LABELS_SUCCESS":
                return e.merge( {
                  isFetching: !1,
                  results: t.response.result.results
                } );
              case "CONTENT_SUCCESS":
                const n = !!Se()( t.response.operations, {
                  targetType: t.response.type,
                  operation: "update"
                } );
                return e.merge( {
                  canUpdate: n
                } );
              case "DELETE_LABELS_SUCCESS":
                const a = e.get( "results" ).indexOf( t.labelId );
                return e.deleteIn( [ "results", a ] );
              case "ADD_LABELS_SUCCESS":
                return e.merge( {
                  results: t.response.result.results
                } );
              default:
                return e
            }
          },
          labelDialog: ( e = we.viewPage.labelDialog, t ) => {
            switch ( t.type ) {
              case "ADD_LABELS_REQUEST":
                return e.merge( {
                  error: "",
                  isAdding: !0
                } );
              case "ADD_LABELS_FAILURE":
                return e.merge( {
                  error: ke( t.message ),
                  isAdding: !1
                } );
              case "ADD_LABELS_SUCCESS":
                return e.merge( {
                  error: "",
                  isAdding: !1,
                  results: t.response.result.results
                } );
              case "DELETE_LABELS_FAILURE":
                return e.merge( {
                  error: ke( t.message )
                } );
              case "SUGGEST_LABELS_SUCCESS":
                return e.set( "suggestions", t.response.results );
              case "CLEAR_SUGGESTIONS":
                return e.merge( {
                  suggestions: []
                } );
              case "CLEAR_ERROR_MESSAGES":
                return e.merge( {
                  error: null
                } );
              default:
                return e
            }
          },
          comments: ( e = Ue, t ) => {
            switch ( t.type ) {
              case "CONTENT_SUCCESS":
              case "SPACE_HOME_CONTENT_SUCCESS":
                const n = !!Se()( t.response.operations, {
                  operation: "create",
                  targetType: "comment"
                } );
                return e.merge( {
                  canAddComments: n
                } );
              case "DELETE_COMMENT_SUCCESS":
                const a = e.get( "results" );
                return e = ( e = e.setIn( [ "results" ], a.remove( a.indexOf( t.contentId ) ) ) ).setIn( [ "loadedCount" ], e.get( "loadedCount" ) - 1 );
              case "SAVE_COMMENT_SUCCESS":
                return e.merge( {
                  addedCommentId: t.response.id.toString(),
                  addedCommentShowAfter: t.showCommentAfter
                } );
              default:
                return e
            }
          },
          editor: ( e = Me, t ) => {
            switch ( t.type ) {
              case Ne.H:
                return e.merge( {
                  contentId: t.contentId,
                  mode: t.mode
                } );
              case Ne.D:
                return e.merge( Fe );
              case Ne.q:
                return e.set( "isEditorLoaded", !0 );
              case Ne.I:
              case "SAVE_COMMENT_FAILURE":
                return t.message || t.errorMessage ? e.merge( {
                  errorMessage: t.errorMessage || t.message,
                  errorType: t.errorType || "error",
                  updateTime: Date.now()
                } ) : e;
              case "SAVE_COMMENT_SUCCESS":
              case Ne.c:
                return e.merge( Ge );
              default:
                return e
            }
          },
          quickReload: ( e = He.viewPage.quickReload, t ) => {
            switch ( t.type ) {
              case xe.a + "_FAILURE":
                const n = {
                  404: "not found - the plugin has been probably been removed or disabled from Confluence",
                  500: "generic server error",
                  503: "service unavailable",
                  504: "gateway timeout"
                } [ t.error && t.error.statusCode ];
                return e.merge( {
                  blackListedError: n
                } );
              case xe.a + "_SUCCESS":
                return e.withMutations( e => {
                  const n = t.response.lastPersonUpdatePage;
                  if ( n ) {
                    -1 === e.get( "newPageUpdatedUsers" ).findIndex( e => e.accountId === n.accountId ) && e.update( "newPageUpdatedUsers", e => e.push( n ) ), e.set( "editUpdatesCount", e.get( "editUpdatesCount" ) + 1 )
                  }
                  t.response.comments && ( t.response.comments.forEach( t => {
                    -1 === e.get( "newCommentUsers" ).findIndex( e => e.accountId === t.user.accountId ) && e.update( "newCommentUsers", e => e.push( t.user ) )
                  } ), e.set( "commentUpdatesCount", e.get( "commentUpdatesCount" ) + t.response.comments.length ) )
                } );
              case xe.d:
              case xe.b:
                return e.merge( {
                  newPageUpdatedUsers: [],
                  editUpdatesCount: 0
                } );
              case xe.c:
                return e.merge( {
                  newCommentUsers: [],
                  commentUpdatesCount: 0
                } );
              default:
                return e
            }
          },
          quickEditPreload: function ( e = Ke, t ) {
            switch ( t.type ) {
              case Ne.u:
                return e.get( "contentId" ) === t.contentId ? e : e.merge( {
                  hasLoaded: !1,
                  contentId: t.contentId
                } );
              case Ne.t:
                return e.get( "contentId" ) !== t.contentId ? e : e.merge( {
                  hasLoaded: !0
                } );
              default:
                return e
            }
          }
        } ),
        qe = n( "3ebY" ),
        $e = n( "r+LL" ),
        Ye = n( "oAGf" );
      const ze = [ $e.b.SPACE_TAB_PAGES, $e.b.SPACE_SETTINGS ],
        Qe = [ "spacebar-profile" ];
      const Je = Object( g.Map )( {
        searchString: "",
        filteredItems: Object( g.List )( [] )
      } );
      var Xe = Object( r.combineReducers )( {
          links: function ( e = Object( g.Map )( {} ), t ) {
            switch ( t.type ) {
              case "GET_SPACE_LINKS_SUCCESS":
                const n = t.spaceKey;
                return Object.keys( t.response ).forEach( r => {
                  const o = t.response[ r ].filter( e => !e.webItemKey || -1 === Qe.indexOf( e.webItemKey ) ).map( e => {
                    const t = Object( a.a )( {}, e );
                    return "quick" === r && ( t.canHide = !0 ), -1 !== ze.indexOf( t.webItemCompleteKey ) && ( t.hidden = !1, t.canHide = !1 ), Object( qe.a )( t )
                  } );
                  e = e.setIn( [ n, r ], Object( g.List )( o ) )
                } ), e;
              case "MOVE_SPACE_LINK_REQUEST":
                const {
                  group: r
                } = t;
                return e.updateIn( [ t.spaceKey, r ], e => {
                  const n = e.findIndex( e => e.id === t.id );
                  if ( -1 !== n ) {
                    const a = e.get( n ),
                      r = e.delete( n );
                    let o = -1;
                    if ( t.position && "First" === t.position ? o = 0 : t.after && ( o = r.findIndex( e => e.id === t.after ) + 1 ), -1 !== o ) return r.insert( o, a )
                  }
                  return e
                } );
              case "TOGGLE_SPACE_LINK_REQUEST":
                const o = [ t.spaceKey, t.group ],
                  s = e.getIn( o ).findIndex( e => e.id === t.id );
                return e.updateIn( o.concat( s ), e => e.set( "hidden", !e.hidden ) );
              case "REMOVE_SPACE_SHORTCUT_LINK_REQUEST":
                const {
                  linkId: c
                } = t;
                return e.updateIn( [ t.spaceKey, "quick" ], e => {
                  const t = e.findIndex( e => e.id === c );
                  return e.delete( t )
                } );
              default:
                return e
            }
          },
          filter: function ( e = Je, t ) {
            switch ( t.type ) {
              case "SEARCH_SPACE_REQUEST":
                return e.set( "searchString", t.searchString );
              case "SEARCH_SPACE_FAILURE":
                return e.set( "filteredItems", Object( g.OrderedSet )( [] ) );
              case "SEARCH_SPACE_SUCCESS":
                return e.get( "searchString" ) === t.searchString ? e.set( "filteredItems", Object( g.OrderedSet )( t.response.result.results ) ) : e;
              default:
                return e
            }
          },
          allSpaces: function ( e = Object( g.OrderedSet )(), t ) {
            switch ( t.type ) {
              case Ye.a + "_SUCCESS":
                return t.response.result.allSpaces && t.response.result.allSpaces.results.length ? Object( g.OrderedSet )( t.response.result.allSpaces.results ) : e
            }
            return e
          }
        } ),
        Ze = n( "JVJu" );
      const et = Object( g.Map )( {
        searchString: "",
        filteredItems: Object( g.OrderedSet )( [] )
      } );
      var tt = Object( r.combineReducers )( {
          filter: function ( e = et, t ) {
            switch ( t.type ) {
              case Ze.a + "_REQUEST":
                return e.set( "searchString", t.searchString );
              case Ze.a + "_FAILURE":
                return e.set( "filteredItems", Object( g.OrderedSet )( [] ) );
              case Ze.a + "_SUCCESS":
                return e.get( "searchString" ) === t.searchString ? e.set( "filteredItems", Object( g.OrderedSet )( t.response.result.filteredPages ) ) : e;
              default:
                return e
            }
          },
          allPages: function ( e = Object( g.OrderedSet )(), t ) {
            switch ( t.type ) {
              case Ze.b + "_SUCCESS":
                return t.response.result.allPages ? Object( g.OrderedSet )( t.response.result.allPages ) : e
            }
            return e
          }
        } ),
        nt = Object( r.combineReducers )( {
          app: oe,
          appSwitcher: ce,
          dashboard: _e,
          spaceHome: Re,
          calendars: Pe,
          viewPage: We,
          space: Xe,
          pages: tt,
          changeboarding: function ( e = ae, t = {} ) {
            const {
              spotlightId: n
            } = t, a = e.get( "spotlights" ), r = e.get( "index" );
            switch ( t.type ) {
              case "CHANGEBOARDING_NEXT":
                return e.merge( {
                  index: r + 1
                } );
              case "CHANGEBOARDING_PREV":
                return e.merge( {
                  index: r - 1
                } );
              case "CHANGEBOARDING_TARGET_READY":
                for ( let r = 0; r < a.size; r++ ) {
                  let o = !!a.get( r ).size;
                  for ( let s = 0; s < a.get( r ).size; s++ ) {
                    if ( a.getIn( [ r, s, "id" ] ) === n ) {
                      e = e.setIn( [ "spotlights", r, s, "loaded" ], !0 );
                      const {
                        spotlightAttributes: n
                      } = t, a = e.getIn( [ "spotlights", r, s, "attributes" ] ), o = Object( g.fromJS )( n );
                      e = e.setIn( [ "spotlights", r, s, "attributes" ], a.merge( o ) )
                    }
                    o = o && e.getIn( [ "spotlights", r, s, "loaded" ] )
                  }
                  if ( o ) return e.merge( {
                    flow: r,
                    index: 0,
                    loaded: a.get( r ).size
                  } )
                }
                break;
              case "CHANGEBOARDING_DISMISS":
                const o = e.get( "flow" ),
                  s = a.size - 1;
                return o === s ? e.setIn( [ "spotlights", s ], Object( g.List )( [] ) ) : e.deleteIn( [ "spotlights", o ] );
              case "CHANGEBOARDING_INVOKE":
                for ( let r = 0; r < a.size; r++ )
                  for ( let o = 0; o < a.get( r ).size; o++ )
                    if ( a.getIn( [ r, o, "id" ] ) === n ) {
                      let n = e.setIn( [ "spotlights", r, o, "requested" ], !0 );
                      const {
                        spotlightAttributes: a
                      } = t, s = n.getIn( [ "spotlights", r, o, "attributes" ] ), c = Object( g.fromJS )( a );
                      return n = n.setIn( [ "spotlights", r, o, "attributes" ], s.merge( c ) ), n
                    } return e.setIn( [ "spotlights", a.size - 1, a.get( a.size - 1 ).size ], te.merge( {
                  id: n
                } ) );
              case "CHANGEBOARDING_SET_SPOTLIGHT_ATTRIBUTES":
                const {
                  spotlightAttributes: c
                } = t;
                for ( let t = 0; t < a.size; t++ )
                  for ( let r = 0; r < a.get( t ).size; r++ )
                    if ( a.getIn( [ t, r, "id" ] ) === n ) return e.setIn( [ "spotlights", t, r, "attributes" ], c )
            }
            return e
          }
        } );

      function at( e = Object( g.Map )().set( "id", -1 ), t ) {
        switch ( t.type ) {
          case "SEARCH_EVERYWHERE_SUCCESS":
            if ( e.get( "id" ) < t.searchID ) {
              e = Object( g.Map )( t.response );
              const n = [];
              return t.response.contentNameMatches && t.response.contentNameMatches.forEach( e => n.push( ...e ) ), e.set( "results", Object( g.List )( n ) ).set( "id", t.searchID )
            }
            return e
        }
        return e
      }

      function rt( e = _.a.fromJS( {
        spaces: 0,
        watches: 0
      } ), t ) {
        return t.response && t.response.totals ? e.mergeDeep( _.a.fromJS( t.response.totals ) ) : e
      }

      function ot( e = Object( g.Map )(), t ) {
        switch ( t.type ) {
          case "ABOUT_CONFLUENCE_SUCCESS":
            return e.set( "about-confluence", t.response )
        }
        return e
      }

      function st( e = {}, t ) {
        switch ( t.type ) {
          case "SET_ACTIVE_MODAL":
            return {
              modalComponent: t.component, modalProps: t.props
            };
          case "CLOSE_ACTIVE_MODAL":
            return {}
        }
        return e
      }

      function ct( e = {
        directory: null
      }, t ) {
        switch ( t.type ) {
          case "GADGET_DIRECTORY_SUCCESS":
            return {
              directory: t.response.directoryList
            }
        }
        return e
      }
      const it = new g.List;

      function ut( e = it, t ) {
        switch ( t.type ) {
          case "SHOW_FLAG":
            const {
              type: n, flag: a
            } = t;
            return e.find( e => e.id === a.id ) ? e : e.unshift( a );
          case "HIDE_FLAG":
            const r = e.findIndex( e => e.id === t.id );
            return "number" == typeof r && r >= 0 ? e.delete( r ) : e
        }
        return e
      }
      const lt = e => ( -1 !== e.pluginKey.indexOf( "confluence-dashboard" ) && ( e.pluginKey = e.pluginKey.replace( "confluence-dashboard", "confluence-frontend-support" ) ), e ),
        dt = Object( g.fromJS )( {
          hasLoaded: !1,
          list: Object( g.List )( [] )
        } ),
        Et = ( e, t ) => !!e.find( e => e.pluginKey === t.pluginKey && e.featureKey === t.featureKey );

      function pt( e = dt, t ) {
        switch ( t.type ) {
          case "DISCOVERED_FEATURES_SUCCESS":
            const n = Object( g.List )( t.response && t.response.map( lt ) );
            return e.withMutations( e => {
              e.set( "hasLoaded", !0 );
              const t = e.get( "list" ),
                a = t.concat( n.filter( e => !Et( t, e ) ) );
              return e.set( "list", a ), e
            } );
          case "FEATURE_DISCOVERED_MARK_REQUEST":
          case "FEATURE_DISCOVERED_MARK_SUCCESS":
            if ( Et( e.get( "list" ), t ) ) return e; {
              const n = {
                pluginKey: t.pluginKey,
                featureKey: t.featureKey
              };
              return e.set( "list", e.get( "list" ).push( n ) )
            }
            default:
              return e
        }
      }
      const ft = ( e = null ) => e;
      t.a = function ( e, t ) {
        return Object( r.combineReducers )( Object( a.a )( {
          router: q( t ),
          i18n: $,
          session: Z,
          views: nt,
          totals: rt,
          entities: x.a,
          dialog: H.a,
          meta: ot,
          search: at,
          modal: st,
          gadgets: ct,
          flags: ut,
          discoveredFeatures: pt,
          editor: G.b,
          fabricEditor: F,
          isServerRenderedPage: ft
        }, e ) )
      }
    },
    cptV: function ( e, t, n ) {
      "use strict";
      n.d( t, "a", ( function () {
        return r
      } ) );
      var a = n( "RfuI" );
      const r = Object( a.a )( {
        id: "e5ZyY",
        name: "Flags",
        loader: async () => ( await Promise.all( [ n.e( "atlaskit~66e23772" ), n.e( "vendors~4134d62c" ), n.e( "flags~b59ad437" ) ] ).then( n.bind( null, "qMw2" ) ) ).Flags
      } );
      Object( a.a )( {
        id: "VSP7I",
        name: "FlagsComponent",
        loader: async () => ( await Promise.all( [ n.e( "atlaskit~66e23772" ), n.e( "vendors~4134d62c" ), n.e( "flags~b59ad437" ) ] ).then( n.bind( null, "FZMo" ) ) ).FlagsComponent
      } )
    },
    d3tz: function ( e, t, n ) {
      "use strict";
      n.d( t, "a", ( function () {
        return a
      } ) );
      const a = {
        ADG3: "confluence.spa.adg3",
        CUSTOM_SIDEBAR: "confluence.spa.adg3.custom-sidebar",
        DASHBOARD: "confluence.spa",
        SPACENAV: "confluence.spa.spacenav",
        PROJECTS: "confluence.projects",
        VIEW_PAGE: "confluence.spa.viewpage",
        VIEW_PAGE_SECONDARY_SIDEBAR: "confluence.spa.viewpage.secondary-sidebar",
        ONBOARDING: "confluence.newuser.onboarding",
        CHANGEBOARDING: "confluence.spa.changeboarding",
        EDITOR: "confluence.spa.editor",
        CONNECT: "confluence.spa.connect",
        SHORTCUTS: "confluence.spa.space.shortcuts",
        LINKS: "confluence.spa.space.links"
      }
    },
    d9aE: function ( e, t, n ) {
      "use strict";
      n.d( t, "a", ( function () {
        return r
      } ) );
      var a = n( "HbGN" );

      function r( e ) {
        if ( e && "referrerPolicy" in e ) {
          const {
            referrerPolicy: t
          } = e, n = Object( a.a )( e, [ "referrerPolicy" ] );
          try {
            new Request( "/", {
              referrerPolicy: t
            } )
          } catch ( _ ) {
            e = n
          }
        }
        return e
      }
    },
    dGuD: function ( e, t, n ) {
      "use strict";
      n.d( t, "c", ( function () {
        return E
      } ) ), n.d( t, "a", ( function () {
        return p
      } ) ), n.d( t, "b", ( function () {
        return f
      } ) );
      var a = n( "H5qd" ),
        r = n.n( a ),
        o = n( "3U3H" ),
        s = n( "lTsX" ),
        c = n( "daKX" ),
        i = n( "wEff" ),
        u = n( "UTko" ),
        l = n( "p0L4" );
      const d = r.a `query networkStatusQuery{network@client{status}}`,
        E = ( e, t ) => {
          const n = ( e => {
            try {
              var t;
              const n = e.readQuery( {
                query: d
              } );
              return null == n || null === ( t = n.network ) || void 0 === t ? void 0 : t.status
            } catch ( n ) {
              return
            }
          } )( e );
          n !== p.SESSION_EXPIRED && n !== t && e.writeQuery( {
            query: d,
            data: {
              network: {
                __typename: "ClientNetwork",
                status: t
              }
            }
          } )
        },
        p = {
          ONLINE: "ONLINE",
          OFFLINE: "OFFLINE",
          RATE_LIMITED: "RATE_LIMITED",
          SESSION_EXPIRED: "SESSION_EXPIRED"
        },
        f = () => {
          const e = Object( c.a )( f );
          return new o.ApolloLink( ( t, n ) => new s.a( a => {
            n( t ).subscribe( {
              next( e ) {
                if ( e.errors && e.errors.some( i.c ) ) {
                  E( t.getContext().cache, p.SESSION_EXPIRED );
                  const e = new i.a( t.operationName, t.getContext().response );
                  a.error( e )
                } else E( t.getContext().cache, p.ONLINE ), a.next( e )
              },
              error( n ) {
                n instanceof u.a ? ( e.log `Rate limit was reached for ${t}`, E( t.getContext().cache, p.RATE_LIMITED ), a.error( n ) ) : n instanceof l.a && !n.ignore ? ( e.log `Network is offline for ${t}`, E( t.getContext().cache, p.OFFLINE ) ) : a.error( n )
              },
              complete() {
                a.complete()
              }
            } )
          } ) )
        }
    },
    dIe6: function ( e, t, n ) {
      "use strict";
      n.d( t, "a", ( function () {
        return c
      } ) );
      var a = n( "ERkP" ),
        r = n.n( a ),
        o = n( "X2PC" ),
        s = n( "ZVoB" );

      function c( {
        children: e,
        error: t
      } ) {
        const [ n, c ] = Object( a.useState )( !1 );
        Object( a.useEffect )( () => {
          const e = e => {
            e.error === t && e.preventDefault()
          };
          return window.addEventListener( "error", e ), c( !0 ), () => {
            window.removeEventListener( "error", e ), c( !1 )
          }
        }, [ t, c ] );
        const u = Object( a.useCallback )( t => r.a.createElement( a.Fragment, null, e ), [ e ] );
        return r.a.createElement( s.a, {
          attribution: o.a.INHERIT,
          renderOnError: u
        }, n ? r.a.createElement( i, {
          error: t
        } ) : null )
      }

      function i( {
        error: e
      } ) {
        throw e
      }
    },
    daKX: function ( e, t, n ) {
      "use strict";
      n.d( t, "a", ( function () {
        return o
      } ) );
      var a = n( "zjfJ" );
      class r {
        constructor( e ) {
          Object( a.a )( this, "name", void 0 ), this.name = function ( e ) {
            return "string" == typeof e ? e : e.displayName || e.name || "Unknown"
          }( e )
        }
        log( e, ...t ) {
          this.logAnyLevel( 1, console.log, "#009966", e, t )
        }
        debug( e, ...t ) {
          this.logAnyLevel( 2, console.debug, "#999", e, t )
        }
        info( e, ...t ) {
          this.logAnyLevel( 3, console.info, "#4488dd", e, t )
        }
        warn( e, ...t ) {
          this.logAnyLevel( 4, console.warn, "black", e, t )
        }
        error( e, ...t ) {
          this.logAnyLevel( 5, console.error, "black", e, t )
        }
        logAnyLevel( e, t, n, a, r ) {
          try {
            if ( "undefined" == typeof sessionStorage || "true" === sessionStorage.getItem( "confluence.enable-logging" ) ) {
              const o = "undefined" != typeof sessionStorage && sessionStorage.getItem( "confluence.log-level" );
              if ( ( parseInt( o || "", 10 ) || 1 ) > e ) return;
              const s = [ `%c[@${Math.round(performance.now())} ${this.name}]`, "color: " + n ];
              t( ...a.reduce( ( e, t, n ) => {
                const o = r[ n ],
                  s = t.trim().replace( /\n\s+/g, "\n" );
                return e.concat( n === a.length - 1 ? [ s ] : [ s, "string" == typeof o ? JSON.stringify( o ) : o ] )
              }, s ) )
            }
          } catch ( o ) {
            console.error( o )
          }
        }
      }
      const o = e => new r( e )
    },
    djVO: function ( e, t, n ) {
      "use strict";
      n.d( t, "a", ( function () {
        return r
      } ) );
      var a = n( "H5qd" );
      const r = n.n( a ).a `query LocalStorageQuery($stringKeys:[String]!$booleanKeys:[String]!){localStorage{stringValues(keys:$stringKeys){key value}booleanValues(keys:$booleanKeys){key value}}}`
    },
    eBha: function ( e, t, n ) {
      "use strict";
      n.d( t, "c", ( function () {
        return r
      } ) ), n.d( t, "e", ( function () {
        return o
      } ) ), n.d( t, "b", ( function () {
        return s
      } ) ), n.d( t, "d", ( function () {
        return c
      } ) ), n.d( t, "a", ( function () {
        return i
      } ) );
      var a = n( "yS9+" );
      Object( a.b )( "SPACE_BLOGPOSTS_RESET" );
      const r = "SPACE_HOME_CONTENT_SHOWN",
        o = Object( a.b )( r ),
        s = "SPACE_HOME_CONTENT_NOT_SHOWN",
        c = Object( a.b )( s ),
        i = ( Object( a.b )( "RESET_SPACE_LOGO" ), "SET_SPACE_HEADER_VISIBILITY" );
      Object( a.b )( i )
    },
    emJd: function ( e, t, n ) {
      "use strict";
      n.d( t, "a", ( function () {
        return c
      } ) );
      n( "aWzz" );
      var a, r = n( "ERkP" ),
        o = n( "uDfI" ),
        s = n( "tpvt" );
      let c = Object( o.connect )( e => ( {
        dialog: e.dialog.get( "dialogId" ) && s.a.dialog[ e.dialog.get( "dialogId" ) ] || null
      } ) )( a = class extends r.Component {
        render() {
          return this.props.dialog
        }
      } ) || a;
      c.displayName = "LegacyDialogContainer"
    },
    ewfN: function ( e, t, n ) {
      "use strict";
      n.r( t ), n.d( t, "BASE", ( function () {
        return c
      } ) ), n.d( t, "WIKI", ( function () {
        return i
      } ) ), n.d( t, "HOME", ( function () {
        return u
      } ) ), n.d( t, "TEMPLATE_GALLERY", ( function () {
        return l
      } ) ), n.d( t, "CALENDAR", ( function () {
        return d
      } ) ), n.d( t, "QUESTIONS", ( function () {
        return E
      } ) ), n.d( t, "CONTENT_HISTORY", ( function () {
        return p
      } ) ), n.d( t, "CONTENT_HISTORY_LEGACY", ( function () {
        return f
      } ) ), n.d( t, "EDIT_PAGE", ( function () {
        return m
      } ) ), n.d( t, "EDIT_BLOG", ( function () {
        return b
      } ) ), n.d( t, "EDIT_PAGE_V2", ( function () {
        return O
      } ) ), n.d( t, "EDIT_BLOG_V2", ( function () {
        return h
      } ) ), n.d( t, "EDIT_PAGE_EMBED", ( function () {
        return g
      } ) ), n.d( t, "CREATE_PAGE", ( function () {
        return _
      } ) ), n.d( t, "CREATE_BLOG", ( function () {
        return T
      } ) ), n.d( t, "DELETE_PAGE", ( function () {
        return I
      } ) ), n.d( t, "ONBOARDING", ( function () {
        return S
      } ) ), n.d( t, "SPACE_DIRECTORY", ( function () {
        return C
      } ) ), n.d( t, "SPACE_SETTINGS", ( function () {
        return A
      } ) ), n.d( t, "SPACE_SETTINGS_REORDERPAGES", ( function () {
        return y
      } ) ), n.d( t, "SPACE_PERMISSION", ( function () {
        return R
      } ) ), n.d( t, "SPACE_OVERVIEW_REDIRECT_LEGACY", ( function () {
        return v
      } ) ), n.d( t, "DELETE_SPACE_LEGACY", ( function () {
        return P
      } ) ), n.d( t, "SPACE_INDEX", ( function () {
        return N
      } ) ), n.d( t, "SPACE_OVERVIEW", ( function () {
        return j
      } ) ), n.d( t, "VIEW_PAGE", ( function () {
        return D
      } ) ), n.d( t, "NEXT_VIEW_PAGE", ( function () {
        return L
      } ) ), n.d( t, "BLOG_HOME", ( function () {
        return w
      } ) ), n.d( t, "VIEW_BLOG", ( function () {
        return k
      } ) ), n.d( t, "ADMIN_SETTINGS", ( function () {
        return U
      } ) ), n.d( t, "ADMIN_EDIT_EXTERNAL_SHARING", ( function () {
        return M
      } ) ), n.d( t, "ADMIN_FORGE_APPS", ( function () {
        return F
      } ) ), n.d( t, "ADMIN_NEW_GLOBAL_PERMISSIONS", ( function () {
        return G
      } ) ), n.d( t, "ADMIN_NEW_GLOBAL_PERMISSIONS_USER_DETAILS", ( function () {
        return x
      } ) ), n.d( t, "ADMIN_NEW_GLOBAL_PERMISSIONS_GROUP_DETAILS", ( function () {
        return H
      } ) ), n.d( t, "ADMIN_GLOBAL_PERMISSIONS", ( function () {
        return V
      } ) ), n.d( t, "ADMIN_EDIT_GLOBAL_PERMISSIONS", ( function () {
        return B
      } ) ), n.d( t, "ADMIN_SPACE_PERMISSIONS", ( function () {
        return K
      } ) ), n.d( t, "ADMIN_EDIT_SPACE_PERMISSIONS", ( function () {
        return W
      } ) ), n.d( t, "ADMIN_AUDIT_LOG", ( function () {
        return q
      } ) ), n.d( t, "SPACE_CALENDAR", ( function () {
        return $
      } ) ), n.d( t, "SPACE_CALENDARS", ( function () {
        return Y
      } ) ), n.d( t, "DISCOVER", ( function () {
        return z
      } ) ), n.d( t, "ALL_UPDATES", ( function () {
        return Q
      } ) ), n.d( t, "POPULAR", ( function () {
        return J
      } ) ), n.d( t, "CUSTOM", ( function () {
        return X
      } ) ), n.d( t, "TAILORED", ( function () {
        return Z
      } ) ), n.d( t, "RELEVANT", ( function () {
        return ee
      } ) ), n.d( t, "MY_WORK_HOME", ( function () {
        return te
      } ) ), n.d( t, "MY_WORK_DRAFTS", ( function () {
        return ne
      } ) ), n.d( t, "MY_WORK_RECENT", ( function () {
        return ae
      } ) ), n.d( t, "MY_RECENTLY_VISITED", ( function () {
        return re
      } ) ), n.d( t, "MY_SAVED_FOR_LATER", ( function () {
        return oe
      } ) ), n.d( t, "RECENT_PAGES", ( function () {
        return se
      } ) ), n.d( t, "RECENT_VISITED", ( function () {
        return ce
      } ) ), n.d( t, "RECENT_DRAFTS", ( function () {
        return ie
      } ) ), n.d( t, "RECENT_SAVED", ( function () {
        return ue
      } ) ), n.d( t, "TEMPLATE_MIGRATION_PREVIEW", ( function () {
        return le
      } ) ), n.d( t, "EDIT_TEMPLATE", ( function () {
        return de
      } ) ), n.d( t, "EDIT_TEMPLATE_BLUEPRINT", ( function () {
        return Ee
      } ) ), n.d( t, "EDIT_TEMPLATE_SPACE", ( function () {
        return pe
      } ) ), n.d( t, "CREATE_TEMPLATE", ( function () {
        return fe
      } ) ), n.d( t, "CREATE_TEMPLATE_SPACE", ( function () {
        return me
      } ) ), n.d( t, "HELLO_WORLD", ( function () {
        return be
      } ) ), n.d( t, "DASHBOARD_ACTION_LEGACY", ( function () {
        return Oe
      } ) ), n.d( t, "SPA_ACTION_LEGACY", ( function () {
        return he
      } ) ), n.d( t, "INDEX_ACTION_LEGACY", ( function () {
        return ge
      } ) ), n.d( t, "CREATE_PAGE_ACTION_LEGACY", ( function () {
        return _e
      } ) ), n.d( t, "CREATE_BLOG_ACTION_LEGACY", ( function () {
        return Te
      } ) ), n.d( t, "CREATE_PAGE_VARIABLES_ACTION_LEGACY", ( function () {
        return Ie
      } ) ), n.d( t, "RESUME_DRAFT_LEGACY", ( function () {
        return Se
      } ) ), n.d( t, "COPY_PAGE_LEGACY", ( function () {
        return Ce
      } ) ), n.d( t, "VIEW_PAGE_ACTION_LEGACY", ( function () {
        return Ae
      } ) ), n.d( t, "SPACE_OVERVIEW_INDEX_ACTION_LEGACY", ( function () {
        return ye
      } ) ), n.d( t, "SPACE_INDEX_ACTION_LEGACY", ( function () {
        return Re
      } ) ), n.d( t, "SPACE_PAGES", ( function () {
        return ve
      } ) ), n.d( t, "VIEW_BLOG_DATE_LEGACY", ( function () {
        return Pe
      } ) ), n.d( t, "ACTION_REDIRECT_LEGACY", ( function () {
        return Ne
      } ) ), n.d( t, "ADVANCED_SEARCH_LEGACY", ( function () {
        return je
      } ) ), n.d( t, "ADVANCED_SEARCH", ( function () {
        return De
      } ) ), n.d( t, "EXTERNAL_SHARE", ( function () {
        return Le
      } ) ), n.d( t, "VIEW_PAGE_MOBILE", ( function () {
        return we
      } ) ), n.d( t, "VIEW_BLOG_MOBILE", ( function () {
        return ke
      } ) ), n.d( t, "PEOPLE_DIRECTORY_SEARCH", ( function () {
        return Ue
      } ) ), n.d( t, "CONFLUENCE_PEOPLE_DIRECTORY_SEARCH", ( function () {
        return Me
      } ) ), n.d( t, "PEOPLE_DIRECTORY", ( function () {
        return Fe
      } ) ), n.d( t, "SPACE_RESTRICTED_PAGES", ( function () {
        return Ge
      } ) ), n.d( t, "SPACE_ARCHIVED_PAGES", ( function () {
        return xe
      } ) ), n.d( t, "PAGE_DIFF_BY_VERSION", ( function () {
        return He
      } ) ), n.d( t, "SPACE_ANALYTICS", ( function () {
        return Ve
      } ) ), n.d( t, "SPACE_QUESTIONS", ( function () {
        return Be
      } ) ), n.d( t, "SPACE_BULK_TOOLS", ( function () {
        return Ke
      } ) ), n.d( t, "SPACE_FORGE_APPS", ( function () {
        return We
      } ) );
      var a = n( "WBjB" ),
        r = n( "frZf" );
      const o = ( e, t ) => e.params.contentId !== t.params.contentId,
        s = ( e, t ) => e.params.spaceKey !== t.params.spaceKey,
        c = new a.a( {
          name: "BASE",
          pattern: "/"
        } ),
        i = new a.a( {
          name: "WIKI",
          pattern: "" + r.a
        } ),
        u = new a.a( {
          name: "HOME",
          pattern: r.a + "/home"
        } ),
        l = new a.a( {
          name: "TEMPLATE_GALLERY",
          pattern: r.a + "/templates"
        } ),
        d = new a.a( {
          name: "CALENDAR",
          pattern: r.a + "/calendar/mycalendar.action"
        } ),
        E = new a.a( {
          name: "QUESTIONS",
          pattern: r.a + "/plugins/servlet/ac/com.atlassian.confluence.plugins.confluence-questions/globalQuestionsViewer?ac.com.atlassian.confluence.plugins.confluence-questions.pattern=/questions/ask"
        } ),
        p = new a.a( {
          name: "CONTENT_HISTORY",
          pattern: r.a + "/spaces/:spaceKey/history/:contentId(\\d+)/:contentSlug?"
        } ),
        f = new a.a( {
          name: "CONTENT_HISTORY_LEGACY",
          pattern: r.a + "/pages/viewpreviousversions.action"
        } ),
        m = new a.a( {
          name: "EDIT_PAGE",
          pattern: r.a + "/spaces/:spaceKey/:contentType(pages)/edit/:contentId(\\d+)"
        } ),
        b = new a.a( {
          name: "EDIT_BLOG",
          pattern: r.a + "/spaces/:spaceKey/:contentType(blog)/edit/:contentId(\\d+)"
        } ),
        O = new a.a( {
          name: "EDIT_PAGE_V2",
          pattern: r.a + "/spaces/:spaceKey/:contentType(pages)/edit-v2/:contentId(\\d+)"
        } ),
        h = new a.a( {
          name: "EDIT_BLOG_V2",
          pattern: r.a + "/spaces/:spaceKey/:contentType(blog)/edit-v2/:contentId(\\d+)"
        } ),
        g = new a.a( {
          name: "EDIT_PAGE_EMBED",
          pattern: r.a + "/spaces/:spaceKey/:contentType(pages)/edit-embed/:contentId(\\d+)"
        } ),
        _ = new a.a( {
          name: "CREATE_PAGE",
          pattern: r.a + "/spaces/:spaceKey/:contentType(pages)/create"
        } ),
        T = new a.a( {
          name: "CREATE_BLOG",
          pattern: r.a + "/spaces/:spaceKey/:contentType(blog)/create"
        } ),
        I = new a.a( {
          name: "DELETE_PAGE",
          pattern: r.a + "/pages/removepage.action?pageId=:contentId(\\d+)"
        } ),
        S = new a.a( {
          name: "ONBOARDING",
          pattern: r.a + "/welcome"
        } ),
        C = new a.a( {
          name: "SPACE_DIRECTORY",
          pattern: r.a + "/spaces"
        } ),
        A = new a.a( {
          name: "SPACE_SETTINGS",
          pattern: r.a + "/spaces/viewspacesummary.action?key=:spaceKey([^&]+)"
        } ),
        y = new a.a( {
          name: "SPACE_SETTINGS_REORDERPAGES",
          pattern: r.a + "/pages/reorderpages.action?key=:spaceKey([^&]+)"
        } ),
        R = new a.a( {
          name: "SPACE_PERMISSION",
          pattern: r.a + "/spaces/spacepermissions.action?key=:spaceKey([^&]+)"
        } ),
        v = new a.a( {
          name: "SPACE_OVERVIEW_REDIRECT_LEGACY",
          pattern: r.a + "/spaces/viewspace.action"
        } ),
        P = new a.a( {
          name: "DELETE_SPACE_LEGACY",
          pattern: r.a + "/spaces/doremovespace.action?key=:spaceKey([^&]+)"
        } ),
        N = new a.a( {
          name: "SPACE_INDEX",
          pattern: r.a + "/spaces/:spaceKey",
          condition: ( {
            params: e
          } ) => Boolean( e.spaceKey && !e.spaceKey.endsWith( ".action" ) ),
          isTransition: s
        } ),
        j = Object.assign( new a.a( {
          name: "SPACE_OVERVIEW",
          pattern: r.a + "/spaces/:spaceKey/overview",
          isTransition: s
        } ), {
          HOMEPAGE_ID_QUERY_FF: "confluence.frontend.add-homepage-id-to-space-overview-url",
          HOMEPAGE_ID_QUERY_KEY: "homepageId"
        } ),
        D = new a.a( {
          name: "VIEW_PAGE",
          pattern: r.a + "/spaces/:spaceKey/pages/:contentId(\\d+)/:contentSlug?",
          isTransition: o
        } ),
        L = new a.a( {
          name: "NEXT_VIEW_PAGE",
          pattern: r.a + "/spaces/:spaceKey/next-pages/:contentId(\\d+)/:contentSlug?",
          isTransition: o
        } ),
        w = new a.a( {
          name: "BLOG_HOME",
          pattern: r.a + "/spaces/:spaceKey/blog"
        } ),
        k = new a.a( {
          name: "VIEW_BLOG",
          pattern: r.a + "/spaces/:spaceKey/blog/:contentId(\\d+)/:contentSlug?",
          isTransition: o
        } ),
        U = new a.a( {
          name: "ADMIN_SETTINGS",
          pattern: r.a + "/admin"
        } ),
        M = new a.a( {
          name: "ADMIN_EDIT_EXTERNAL_SHARING",
          pattern: r.a + "/admin/public-links"
        } ),
        F = new a.a( {
          name: "ADMIN_FORGE_APPS",
          pattern: r.a + "/admin/forge?id=:id(.+)"
        } ),
        G = new a.a( {
          name: "ADMIN_NEW_GLOBAL_PERMISSIONS",
          pattern: r.a + "/admin/permissions/global"
        } ),
        x = new a.a( {
          name: "ADMIN_NEW_GLOBAL_PERMISSIONS_USER_DETAILS",
          pattern: r.a + "/admin/permissions/global/user/:accountId"
        } ),
        H = new a.a( {
          name: "ADMIN_NEW_GLOBAL_PERMISSIONS_GROUP_DETAILS",
          pattern: r.a + "/admin/permissions/global/group/:groupName"
        } ),
        V = new a.a( {
          name: "ADMIN_GLOBAL_PERMISSIONS",
          pattern: r.a + "/admin/permissions/globalpermissions.action"
        } ),
        B = new a.a( {
          name: "ADMIN_EDIT_GLOBAL_PERMISSIONS",
          pattern: r.a + "/admin/permissions/editglobalpermissions.action"
        } ),
        K = new a.a( {
          name: "ADMIN_SPACE_PERMISSIONS",
          pattern: r.a + "/admin/permissions/viewdefaultspacepermissions.action"
        } ),
        W = new a.a( {
          name: "ADMIN_EDIT_SPACE_PERMISSIONS",
          pattern: r.a + "/admin/permissions/editdefaultspacepermissions.action"
        } ),
        q = new a.a( {
          name: "ADMIN_AUDIT_LOG",
          pattern: r.a + "/admin/auditlogging.action"
        } ),
        $ = new a.a( {
          name: "SPACE_CALENDAR",
          pattern: r.a + "/spaces/:spaceKey/calendars?src=sidebar&openAddCalDialog=true"
        } ),
        Y = new a.a( {
          name: "SPACE_CALENDARS",
          pattern: r.a + "/spaces/:spaceKey/calendars"
        } ),
        z = new a.a( {
          name: "DISCOVER",
          pattern: r.a + "/discover"
        } ),
        Q = new a.a( {
          name: "ALL_UPDATES",
          pattern: r.a + "/discover/all-updates"
        } ),
        J = new a.a( {
          name: "POPULAR",
          pattern: r.a + "/discover/popular"
        } ),
        X = new a.a( {
          name: "CUSTOM",
          pattern: r.a + "/discover/custom"
        } ),
        Z = new a.a( {
          name: "TAILORED",
          pattern: r.a + "/discover/tailored"
        } ),
        ee = new a.a( {
          name: "RELEVANT",
          pattern: r.a + "/discover/relevant"
        } ),
        te = new a.a( {
          name: "MY_WORK_HOME",
          pattern: r.a + "/my"
        } ),
        ne = new a.a( {
          name: "MY_WORK_DRAFTS",
          pattern: r.a + "/my/drafts"
        } ),
        ae = new a.a( {
          name: "MY_WORK_RECENT",
          pattern: r.a + "/my/recent-work"
        } ),
        re = new a.a( {
          name: "MY_RECENTLY_VISITED",
          pattern: r.a + "/my/recently-visited"
        } ),
        oe = new a.a( {
          name: "MY_SAVED_FOR_LATER",
          pattern: r.a + "/my/saved-for-later"
        } ),
        se = new a.a( {
          name: "RECENT_PAGES",
          pattern: r.a + "/recent"
        } ),
        ce = new a.a( {
          name: "RECENT_VISITED",
          pattern: r.a + "/recent/visited"
        } ),
        ie = new a.a( {
          name: "RECENT_DRAFTS",
          pattern: r.a + "/recent/draft"
        } ),
        ue = new a.a( {
          name: "RECENT_SAVED",
          pattern: r.a + "/recent/saved"
        } ),
        le = new a.a( {
          name: "TEMPLATE_MIGRATION_PREVIEW",
          pattern: r.a + "/template/migration/preview?templateId=:contentId([0-9a-z-]+)"
        } ),
        de = new a.a( {
          name: "EDIT_TEMPLATE",
          pattern: r.a + "/templates/edit/:contentId([0-9a-z-]+)"
        } ),
        Ee = new a.a( {
          name: "EDIT_TEMPLATE_BLUEPRINT",
          pattern: r.a + "/templates/edit/:pluginKey/:moduleKey"
        } ),
        pe = new a.a( {
          name: "EDIT_TEMPLATE_SPACE",
          pattern: r.a + "/spaces/:spaceKey/templates/edit/:contentId([0-9a-z-]+)"
        } ),
        fe = new a.a( {
          name: "CREATE_TEMPLATE",
          pattern: r.a + "/templates/create"
        } ),
        me = new a.a( {
          name: "CREATE_TEMPLATE_SPACE",
          pattern: r.a + "/spaces/:spaceKey/templates/create"
        } ),
        be = new a.a( {
          name: "HELLO_WORLD",
          pattern: r.a + "/hello-world"
        } ),
        Oe = new a.a( {
          name: "DASHBOARD_ACTION_LEGACY",
          pattern: r.a + "/dashboard.action"
        } ),
        he = new a.a( {
          name: "SPA_ACTION_LEGACY",
          pattern: r.a + "/spa.action"
        } ),
        ge = new a.a( {
          name: "INDEX_ACTION_LEGACY",
          pattern: r.a + "/index.action"
        } ),
        _e = new a.a( {
          name: "CREATE_PAGE_ACTION_LEGACY",
          pattern: r.a + "/pages/createpage.action"
        } ),
        Te = new a.a( {
          name: "CREATE_BLOG_ACTION_LEGACY",
          pattern: r.a + "/pages/createblogpost.action"
        } ),
        Ie = new a.a( {
          name: "CREATE_PAGE_VARIABLES_ACTION_LEGACY",
          pattern: r.a + "/pages/createpage-entervariables.action"
        } ),
        Se = new a.a( {
          name: "RESUME_DRAFT_LEGACY",
          pattern: r.a + "/pages/resumedraft.action"
        } ),
        Ce = new a.a( {
          name: "COPY_PAGE_LEGACY",
          pattern: r.a + "/pages/copypage.action"
        } ),
        Ae = new a.a( {
          name: "VIEW_PAGE_ACTION_LEGACY",
          pattern: r.a + "/pages/viewpage.action",
          condition: ( {
            query: e
          } ) => Boolean( e.pageId && 1 === Object.keys( e ).length )
        } ),
        ye = new a.a( {
          name: "SPACE_OVERVIEW_INDEX_ACTION_LEGACY",
          pattern: r.a + "/spaces/:spaceKey/overview/index.action"
        } ),
        Re = new a.a( {
          name: "SPACE_INDEX_ACTION_LEGACY",
          pattern: r.a + "/spaces/:spaceKey/index.action"
        } ),
        ve = new a.a( {
          name: "SPACE_PAGES",
          pattern: r.a + "/spaces/:spaceKey/pages"
        } ),
        Pe = new a.a( {
          name: "VIEW_BLOG_DATE_LEGACY",
          pattern: r.a + "/spaces/:spaceKey/blog/:year(\\d+)/:month(\\d+)/:day(\\d+)/:contentId(\\d+)/:contentSlug?",
          isTransition: o
        } ),
        Ne = new a.a( {
          name: "ACTION_REDIRECT_LEGACY",
          pattern: r.a + "/spaces/(.*).action",
          condition: ( {
            query: e
          } ) => null == e.key
        } ),
        je = new a.a( {
          name: "ADVANCED_SEARCH_LEGACY",
          pattern: r.a + "/dosearchsite.action"
        } ),
        De = new a.a( {
          name: "ADVANCED_SEARCH",
          pattern: r.a + "/search"
        } ),
        Le = new a.a( {
          name: "EXTERNAL_SHARE",
          pattern: r.a + "/external/:contentId/:externalToken"
        } ),
        we = new a.a( {
          name: "VIEW_PAGE_MOBILE",
          pattern: r.a + "/mobile/spaces/:spaceKey/pages/:contentId(\\d+)/:contentSlug?"
        } ),
        ke = new a.a( {
          name: "VIEW_BLOG_MOBILE",
          pattern: r.a + "/mobile/spaces/:spaceKey/blog/:year(\\d+)/:month(\\d+)/:day(\\d+)/:contentId(\\d+)/:contentSlug?"
        } ),
        Ue = new a.a( {
          name: "PEOPLE_DIRECTORY_SEARCH",
          pattern: "/people/search"
        } ),
        Me = new a.a( {
          name: "CONFLUENCE_PEOPLE_DIRECTORY_SEARCH",
          pattern: r.a + "/people/search"
        } ),
        Fe = new a.a( {
          name: "PEOPLE_DIRECTORY",
          pattern: r.a + "/people(/[\\w-:]+)*"
        } ),
        Ge = new a.a( {
          name: "SPACE_RESTRICTED_PAGES",
          pattern: r.a + "/pages/listpermissionpages.action"
        } ),
        xe = new a.a( {
          name: "SPACE_ARCHIVED_PAGES",
          pattern: r.a + "/spaces/:spaceKey/archivedpages"
        } ),
        He = new a.a( {
          name: "PAGE_DIFF_BY_VERSION",
          pattern: r.a + "/pages/diffpagesbyversion.action"
        } ),
        Ve = new a.a( {
          name: "SPACE_ANALYTICS",
          pattern: r.a + "/display/:spaceKey/customcontent/list/ac%3Acom.addonengine.analytics%3Aspace-analytics"
        } ),
        Be = new a.a( {
          name: "SPACE_QUESTIONS",
          pattern: r.a + "/display/:spaceKey/customcontent/list/ac%3Acom.atlassian.confluence.plugins.confluence-questions%3Aquestion"
        } ),
        Ke = new a.a( {
          name: "SPACE_BULK_TOOLS",
          pattern: r.a + "/spaces/:spaceKey/bulktools"
        } ),
        We = new a.a( {
          name: "SPACE_FORGE_APPS",
          pattern: r.a + "/spaces/:spaceKey/apps/:appId([0-9a-z-]+)/:envId([0-9a-z-]+)/:forgeManifestRoute([0-9a-z-]+)"
        } )
    },
    f6W2: function ( e, t, n ) {
      "use strict";
      n.d( t, "c", ( function () {
        return a
      } ) ), n.d( t, "a", ( function () {
        return r
      } ) ), n.d( t, "b", ( function () {
        return o
      } ) );
      const a = e => !e.isServerRenderedPage && Boolean( e.router ),
        r = e => !e.isServerRenderedPage && e.router ? e.router.location : {},
        o = e => !e.isServerRenderedPage && e.router && e.router.params || {}
    },
    fDrt: function ( e, t, n ) {
      "use strict";
      n.d( t, "a", ( function () {
        return c
      } ) );
      var a = n( "ERkP" ),
        r = n.n( a ),
        o = n( "ZVoB" );
      const s = () => null,
        c = ( {
          attribution: e,
          children: t,
          onError: n
        } ) => r.a.createElement( o.a, {
          attribution: e,
          renderOnError: s,
          onError: n
        }, t )
    },
    fE4j: function ( e, t, n ) {
      "use strict";
      n.d( t, "a", ( function () {
        return s
      } ) );
      var a = n( "ERkP" ),
        r = n.n( a ),
        o = n( "7+Q0" );
      const s = r.a.createContext( {
        appearance: o.b.DEFAULT,
        version: 0
      } );
      s.displayName = "PrefetchContentAppearanceContext"
    },
    frZf: function ( e, t, n ) {
      "use strict";
      n.d( t, "a", ( function () {
        return a
      } ) );
      const a = "/wiki"
    },
    fyDV: function ( e, t, n ) {
      "use strict";
      n.d( t, "a", ( function () {
        return r
      } ) );
      var a = n( "H5qd" );
      const r = n.n( a ).a `query BreadcrumbsQuery($spaceKey:String!$contentId:ID$skipContent:Boolean!){spaces(spaceKey:$spaceKey first:10){nodes{id name homepage{id}}}content(id:$contentId)@skip(if:$skipContent){nodes{id type status ancestors{id type title status}}}}`
    },
    gEna: function ( e, t, n ) {
      "use strict";
      n.d( t, "a", ( function () {
        return r
      } ) ), n.d( t, "b", ( function () {
        return o
      } ) );
      var a = n( "RfuI" );
      const r = Object( a.a )( {
          id: "ssGrI",
          loader: async () => ( await Promise.all( [ n.e( "atlaskit~66e23772" ), n.e( "afp~af75c846" ), n.e( "vendors~4134d62c" ), n.e( 0 ), n.e( 2 ), n.e( 3 ), n.e( 26 ), n.e( 33 ), n.e( 51 ), n.e( "copy-space-permissions~b59ad437" ) ] ).then( n.bind( null, "54Mv" ) ) ).CopySpacePermissionsForExistingSpacePortal,
          name: "CopySpacePermissionsForExistingSpacePortal"
        } ),
        o = Object( a.a )( {
          id: "RO67X",
          loader: async () => ( await Promise.all( [ n.e( "atlaskit~66e23772" ), n.e( "afp~af75c846" ), n.e( "vendors~4134d62c" ), n.e( 0 ), n.e( 2 ), n.e( 3 ), n.e( 26 ), n.e( 33 ), n.e( 51 ), n.e( "copy-space-permissions~b59ad437" ) ] ).then( n.bind( null, "W98l" ) ) ).CopySpacePermissionsForNewSpace,
          name: "CopySpacePermissionsForNewSpace"
        } )
    },
    gScn: function ( e, t, n ) {
      "use strict";
      n.d( t, "a", ( function () {
        return i
      } ) );
      var a = n( "Czhu" ),
        r = n( "zjfJ" ),
        o = n( "ERkP" ),
        s = n.n( o ),
        c = n( "Ua4J" );

      function i( e ) {
        var t, n;
        return n = t = class extends o.Component {
          render() {
            return s.a.createElement( c.a.Consumer, null, t => s.a.createElement( e, Object( a.a )( Object( a.a )( {}, t ), this.props ) ) )
          }
        }, Object( r.a )( t, "displayName", `withRoutesContext(${e.displayName||e.name})` ), n
      }
    },
    hFeu: function ( e, t, n ) {
      "use strict";
      var a = n( "Czhu" ),
        r = n( "uDfI" ),
        o = n( "Svze" ),
        s = n( "VKZT" ),
        c = n( "f6W2" ),
        i = n( "zUx9" ),
        u = n( "zjfJ" ),
        l = ( n( "aWzz" ), n( "ERkP" ) ),
        d = n( "nnRT" ),
        E = n.n( d ),
        p = n( "Jygk" ),
        f = n.n( p ),
        m = n( "k8+f" );
      class b extends l.Component {
        constructor( ...e ) {
          super( ...e ), Object( u.a )( this, "_waitForGlobalInProgress", null ), Object( u.a )( this, "_setLegacyProps", e => {
            this._cancelWaitForGlobalInProgress(), this._waitForGlobalInProgress = Object( m.a )( {
              listener: "LegacyBridge.js",
              globalProperty: "AJS.params"
            }, () => this._setAJSValues( e ) )
          } ), Object( u.a )( this, "_cancelWaitForGlobalInProgress", () => {
            this._waitForGlobalInProgress && this._waitForGlobalInProgress.cancel()
          } ), Object( u.a )( this, "_setAJSValues", e => {
            if ( !f.a.AJS || !f.a.AJS.params ) return;
            const {
              spaceKey: t,
              spaceName: n,
              spaceType: a,
              contentId: r,
              contentType: o,
              pageTitle: s,
              pageVersion: c,
              parentPageId: i,
              parentPageTitle: u,
              canRemovePage: l,
              experimentFeatures: d
            } = e, E = 0 === c, p = E ? "0" : r;
            f.a.AJS.params.pageId = p, f.a.AJS.params.spaceKey = t;
            const m = {
              "content-id": r,
              "content-type": o,
              "page-id": p,
              "page-title": s,
              "page-version": c,
              "parent-page-id": i,
              "parent-page-title": u,
              "latest-page-id": r,
              "can-remove-page": l,
              "new-page": E,
              "space-key": t,
              "space-name": n,
              "space-type": a,
              "experiment-features": d
            };
            f.a.AJS.Meta && !f.a.AJS.Meta.get( "has-next-legacy-bridge" ) && Object.keys( m ).forEach( e => {
              f.a.AJS.Meta.set( e, m[ e ] )
            } )
          } )
        }
        componentDidMount() {
          this._setLegacyProps( this.props )
        }
        UNSAFE_componentWillReceiveProps( e ) {
          this._setLegacyProps( e )
        }
        shouldComponentUpdate( e ) {
          return !E()( this.props, e )
        }
        componentWillUnmount() {
          this._setAJSValues( {} ), this._cancelWaitForGlobalInProgress()
        }
        render() {
          return null
        }
      }
      const O = Object( s.d )();
      t.a = Object( r.connect )( e => {
        let t, n, r, s = {};
        if ( e.editor.get( "draftId" ) && e.editor.get( "statusCode" ) === i.d ) {
          n = e.editor.get( "draftId" );
          const t = e.editor.get( "result" );
          r = t.get( "type", null );
          const a = t && t.get( "ancestors" ) && t.get( "ancestors" ).size ? t.get( "ancestors" ).last() : null;
          s = {
            parentPageId: "" + ( a ? "function" == typeof a.get ? a.get( "id" ) : a.id : 0 ),
            pageVersion: 0
          }
        }
        const u = Object( c.b )( e ),
          l = Object( c.a )( e );
        t || ( t = u.spaceKey ), n || ( n = u.contentId || ( l.query || {} ).pageId ), !n && t && ( n = "" + e.entities.getIn( [ "spaces", t, "homepageId" ] ) );
        const d = e.entities.getIn( [ "contents", "" + n ] );
        n && d && ( r = d.type );
        e.views.viewPage.editor.get( "contentId" ) && ( r = "comment" ), [ "CREATE_TEMPLATE_SPACE", "EDIT_TEMPLATE_SPACE", "EDIT_TEMPLATE", "CREATE_TEMPLATE" ].includes( l.routeName ) && ( r = "template" );
        let E = {};
        const p = e.entities.getIn( [ "versions", "" + n ], {} );
        if ( d ) {
          const t = d.ancestors && d.ancestors.size ? O( Object( o.fromJS )( [ d.ancestors.last() ] ), e ).first() : null;
          E = {
            pageTitle: d.title,
            pageVersion: p.number,
            parentPageTitle: t ? t.title : "",
            parentPageId: t ? t.id : "0",
            canRemovePage: d.currentUserPermissions && d.currentUserPermissions.includes( "delete" )
          }
        }
        const f = {
          experimentFeatures: e.views.dashboard.viewModel.get( "experimentFeatures" )
        };
        return Object( a.a )( Object( a.a )( Object( a.a )( {
          spaceKey: t,
          contentId: n,
          contentType: r,
          spaceName: e.entities.getIn( [ "spaces", t, "name" ] ),
          spaceType: e.entities.getIn( [ "spaces", t, "type" ] )
        }, E ), s ), f )
      } )( b )
    },
    hOo4: function ( e, t, n ) {
      "use strict";
      n.d( t, "d", ( function () {
        return s
      } ) ), n.d( t, "b", ( function () {
        return c
      } ) ), n.d( t, "c", ( function () {
        return i
      } ) ), n.d( t, "a", ( function () {
        return u
      } ) );
      var a = n( "H5qd" ),
        r = n.n( a );
      const o = r.a `fragment SpaceDropdownSpaceFragment on Space{id name key icon{path}}`,
        s = r.a `query StarredSpacesQuery{spaces(favourite:true first:99){nodes{...SpaceDropdownSpaceFragment}}}${o}`,
        c = r.a `query RecentSpacesQuery{recentSpaces{...SpaceDropdownSpaceFragment}}${o}`,
        i = r.a `query RecentSpacesWithCurrentSpaceQuery($selectedSpaceKey:String){space(key:$selectedSpaceKey){...SpaceDropdownSpaceFragment}recentSpaces{...SpaceDropdownSpaceFragment}}${o}`,
        u = r.a `query AnonymousSpacesQuery{spaces(first:10){nodes{...SpaceDropdownSpaceFragment}}}${o}`
    },
    hb7u: function ( e, t, n ) {
      "use strict";
      n.d( t, "a", ( function () {
        return a
      } ) ), n.d( t, "b", ( function () {
        return r
      } ) );
      const a = {
          transitionId: 0,
          pageLoadStartTimestamp: 0,
          routeName: null,
          previousRoute: null
        },
        r = () => 0 === a.transitionId
    },
    ho2p: function ( e, t, n ) {
      "use strict";
      n.d( t, "a", ( function () {
        return a
      } ) ), n.d( t, "b", ( function () {
        return r
      } ) );
      const a = 20,
        r = 200
    },
    hpu0: function ( e, t, n ) {
      "use strict";
      n.d( t, "a", ( function () {
        return m
      } ) ), n.d( t, "b", ( function () {
        return O
      } ) ), n.d( t, "c", ( function () {
        return h
      } ) );
      var a = n( "Czhu" ),
        r = n( "HbGN" ),
        o = n( "lSUb" ),
        s = n( "cld1" ),
        c = n( "BX6b" ),
        i = n( "GBQy" ),
        u = n( "94Z3" ),
        l = n( "bw/P" ),
        d = n( "3VMZ" ),
        E = n( "9btq" );
      const p = new Set( [ d.a.ADD_PAGE_COMMENT, d.a.CREATE_PAGE, d.a.EDIT_PAGE, d.a.VIEW_PAGE ] ),
        f = new Set;

      function m() {
        return Array.from( f ).pop()
      }

      function b( e ) {
        const {
          action: t,
          name: n,
          id: o,
          attributes: s
        } = e, c = Object( r.a )( e, [ "action", "name", "id", "attributes" ] ), i = Object( a.a )( Object( a.a )( Object( a.a )( {}, s ), c ), {}, {
          task: n,
          taskId: o
        } );
        if ( i.error ) {
          let e;
          e = "string" == typeof i.error ? new Error( i.error ) : i.error, delete i.error, i.errorName = e.name, u.a.isBadStatusError( e ) && e.traceId && ( i.traceId = e.traceId ), i.errorMessage = e.message
        }
        return i.browserInfo = window.navigator.userAgent, i.isActiveTab = "visible" === document.visibilityState, i
      }
      const O = Object( o.default )( () => {
        const e = new l.a;
        return /bot/i.test( window.navigator.userAgent ) || e.subscribe( t => {
          ! function ( {
            action: e,
            name: t
          } ) {
            p.has( t ) && ( "taskStart" === e ? f.add( t ) : f.delete( t ), Object( c.c )().updateContext( {
              slaExperience: m()
            } ) )
          }( t ), Object( s.getAnalyticsWebClient )().then( e => {
            e.sendOperationalEvent( {
              source: "ui",
              actionSubject: "ui",
              action: t.action,
              attributes: b( t )
            } )
          } );
          const n = [ "action:" + t.action, "isActiveTab:" + ( "visible" === document.visibilityState ) ];
          if ( t.attributes )
            for ( const e in t.attributes ) n.push( `${e}:${t.attributes[e]}` );
          Object( c.c )().incrementCounter( "experience-tracker:" + t.name, n ), "taskSuccess" === t.action && Object( c.c )().submitPerformanceMetric( "experience-tracker:" + t.name, t.duration, n ), "taskFail" === t.action && p.has( t.name ) && ( t.error instanceof E.a || ( Object( i.h )( t.error, {
            failedSlaExperience: t.name
          } ), Object( c.c )().submitError( t.error, {
            attribution: "sla"
          } ) ) ), t.name === d.a.VIEW_CONTENT && g( e, t )
        } ), e
      } );

      function h( e, t, n ) {
        O().stopOnError( {
          name: e,
          error: t,
          attributes: n
        } )
      }
      const g = ( e, t ) => {
        const n = t.attributes && "space" === t.attributes.contentType ? d.a.SPACE_OVERVIEW : d.a.VIEW_PAGE;
        switch ( t.action ) {
          case "taskStart":
            e.start( Object( a.a )( Object( a.a )( {}, t ), {}, {
              name: n
            } ) );
            break;
          case "taskSuccess":
            e.succeed( Object( a.a )( Object( a.a )( {}, t ), {}, {
              name: n
            } ) );
            break;
          case "taskFail":
            e.fail( Object( a.a )( Object( a.a )( {}, t ), {}, {
              name: n
            } ) );
            break;
          case "taskAbort":
            e.abort( Object( a.a )( Object( a.a )( {}, t ), {}, {
              name: n
            } ) )
        }
      }
    },
    iHk4: function ( e, t, n ) {
      "use strict";
      n.d( t, "a", ( function () {
        return r
      } ) );
      var a = n( "H5qd" );
      const r = n.n( a ).a `query SpaceOverviewQuery($spaceKey:String!){space(key:$spaceKey){id homepage{id}}}`
    },
    iOqi: function ( e, t, n ) {
      "use strict";
      n.d( t, "b", ( function () {
        return r
      } ) ), n.d( t, "a", ( function () {
        return o
      } ) );
      var a = n( "RfuI" );
      const r = Object( a.a )( {
          id: "zwYkr",
          name: "ManagePagesLoader",
          loader: async () => ( await Promise.all( [ n.e( "atlaskit~66e23772" ), n.e( "vendors~4134d62c" ), n.e( 0 ), n.e( 4 ), n.e( 5 ), n.e( "manage-pages~b59ad437" ) ] ).then( n.bind( null, "us2K" ) ) ).ManagePages
        } ),
        o = Object( a.a )( {
          id: "XewfS",
          name: "BulkIcon",
          loader: async () => ( await Promise.all( [ n.e( "atlaskit~66e23772" ), n.e( "vendors~4134d62c" ), n.e( 0 ), n.e( 4 ), n.e( 5 ), n.e( "manage-pages~b59ad437" ) ] ).then( n.bind( null, "y/cb" ) ) ).BulkIcon
        } )
    },
    ie3L: function ( e, t, n ) {
      "use strict";
      n.d( t, "a", ( function () {
        return r
      } ) );
      var a = n( "RfuI" );
      const r = Object( a.a )( {
        id: "3yocI",
        name: "PeopleDirectory",
        loader: () => Promise.all( [ n.e( "atlaskit~66e23772" ), n.e( "vendors~4134d62c" ), n.e( 0 ), n.e( 4 ), n.e( 3 ), n.e( 5 ), n.e( 1 ), n.e( 11 ), n.e( 23 ), n.e( 103 ), n.e( 102 ), n.e( 106 ), n.e( 132 ), n.e( 120 ), n.e( "confluence-people-directory~b59ad437" ) ] ).then( n.bind( null, "G+Mq" ) ).then( ( {
          PeopleDirectory: e
        } ) => e )
      } )
    },
    ilPL: function ( e, t, n ) {
      "use strict";
      var a = n( "Czhu" ),
        r = n( "slcR" ),
        o = n( "QYv2" );
      const s = "/rest/api/content/:contentId/?status=draft&action=publish",
        c = "/rest/api/content/:contentId/label",
        i = "/rest/api/space?spaceKey=:spaceKey&expand=:expand",
        u = "/rest/experimental/relation/:sourceType/:sourceKey/:relationName/to:targetType/:targetKey",
        l = "/rest/tinymce/1/content/:contentId/draft/diff/json",
        d = () => "https://activity.atlassian.io/api/client/recent/containers?cloudId=:cloudId";
      var E = n( "Fexb" ),
        p = {
          configure( e ) {
            E.a.configure( e )
          },
          dashboard( e, t ) {
            const n = E.a.getFullPath( "/rest/confluence-dashboard/latest/dashboard-view-model" );
            E.a.get( n, {
              callback: t,
              httpCodeHandlers: {
                401: () => Object( o.a )()
              }
            } )
          },
          spaceCalendar( e, t ) {
            const n = {
                spaceKey: e.spaceKey
              },
              a = E.a.getFullPath( "/rest/calendar-services/1.0/calendar/render/space?spaceKey=:spaceKey", n );
            E.a.get( a, {
              callback: t,
              httpCodeHandlers: {
                401: () => Object( o.a )()
              }
            } )
          }
        };
      const f = ( e, t ) => {
        const n = {
            sourceType: "user",
            sourceKey: "current",
            relationName: e.relation,
            targetType: "Space",
            targetKey: e.key
          },
          a = E.a.getFullPath( u, n );
        "add" === e.action ? E.a.put( a, {
          callback: t,
          httpCodeHandlers: {
            401: () => Object( o.a )()
          }
        } ) : "delete" === e.action && E.a.delete( a, {
          callback: t,
          httpCodeHandlers: {
            401: () => Object( o.a )()
          }
        } )
      };
      var m = {
          configure( e ) {
            E.a.configure( e )
          },
          anonymous( e, t ) {
            const n = E.a.getFullPath( "/rest/experimental/search?cql=type = space&expand=space.icon" );
            E.a.get( n, {
              callback: t,
              httpCodeHandlers: {
                401: () => Object( o.a )()
              },
              responseTransformer: r.spacePaginationResponseTransformer
            } )
          },
          recentlyVisited( e, t ) {
            const n = E.a.getFullPath( "/rest/ia/1.0/spacesmenu/recent.json" );
            E.a.get( n, {
              callback: t,
              httpCodeHandlers: {
                401: () => Object( o.a )()
              },
              responseTransformer: r.recentSpacesResponseTransformer
            } )
          },
          favourited( e, t ) {
            const n = E.a.getFullPath( "/rest/experimental/search?cql=type=space and (space.type=project or space.type=favourite) order by favourite&expand=space.icon,space.metadata.labels&limit=100" );
            E.a.get( n, {
              callback: t,
              httpCodeHandlers: {
                401: () => Object( o.a )()
              },
              responseTransformer: r.favouriteSpacesResponseTransformer
            } )
          },
          labels( e, t ) {
            const n = E.a.getFullPath( "/rest/spacedirectory/1/labels.json" );
            E.a.get( n, {
              callback: t,
              httpCodeHandlers: {
                401: () => Object( o.a )()
              },
              responseTransformer: r.spaceLabelResponseTransformer
            } )
          },
          favourite( e, t ) {
            e.relation = "favourite", e.action = "add", f( e, t )
          },
          unfavourite( e, t ) {
            e.relation = "favourite", e.action = "delete", f( e, t )
          },
          space( e, t ) {
            const n = E.a.getFullPath( i, {
              spaceKey: e.spaceKey,
              expand: e.expand ? e.expand : "icon,metadata.labels,operations,lookAndFeel,settings,theme"
            } );
            E.a.get( n, {
              callback: t,
              httpCodeHandlers: {
                401: () => Object( o.a )()
              },
              responseTransformer: r.spaceResponseTransformer
            } )
          },
          theme( e, t ) {
            const n = E.a.getFullPath( "/rest/api/space/:spaceKey/theme", {
              spaceKey: e.spaceKey
            } );
            E.a.get( n, {
              callback: t,
              httpCodeHandlers: {
                401: () => Object( o.a )()
              },
              responseTransformer: r.spaceThemeResponseTransformer
            } )
          },
          spaceHomeContent( e, t ) {
            const n = E.a.getFullPath( i, {
              spaceKey: e.spaceKey,
              expand: "homepage.body.view.webresource.tags.css,homepage.body.view.webresource.uris.js,homepage.operations,homepage.metadata.frontend.spaFriendly,homepage.metadata.frontend.commentsSpaFriendly"
            } );
            E.a.get( n, {
              callback: t,
              httpCodeHandlers: {
                401: () => Object( o.a )()
              },
              responseTransformer: r.spaceHomeResponseTransformer
            } )
          },
          logo( e, t ) {
            const n = E.a.getFullPath( "/rest/ia/1.0/space/setLogo" );
            E.a.post( n, {
              body: e,
              callback: t,
              httpCodeHandlers: {
                401: () => Object( o.a )()
              },
              headers: {
                "Content-Type": "application/json"
              },
              responseTransformer: r.spaceLogoResponseTransformer
            } )
          },
          shortcutLinks( e, t ) {
            const n = E.a.getFullPath( "/rest/ia/1.0/link/quick?spaceKey=:spaceKey", e );
            E.a.get( n, {
              callback: t,
              httpCodeHandlers: {
                401: () => Object( o.a )()
              },
              headers: {
                "Cache-Control": "no-cache",
                "If-Modified-Since": "0"
              }
            } )
          },
          removeShortcutLink( e, t ) {
            const n = E.a.getFullPath( "/rest/ia/1.0/link/:linkId/?spaceKey=:spaceKey", e );
            E.a.delete( n, {
              callback: t,
              extraConfig: {
                ignoreResponseJson: !0
              },
              httpCodeHandlers: {
                401: () => Object( o.a )()
              }
            } )
          },
          moveSpaceLink( e, t ) {
            const n = E.a.getFullPath( "/rest/ia/1.0/link/:id/move", {
                id: e.id
              } ),
              a = {
                spaceKey: e.spaceKey
              };
            e.position ? a.position = e.position : a.after = E.a.getFullPath( "/rest/ia/1.0/link/:id", {
              id: e.after
            } );
            E.a.post( n, {
              body: a,
              headers: {
                "Content-Type": "application/json"
              },
              callback: t,
              extraConfig: {
                ignoreResponseJson: !0
              },
              httpCodeHandlers: {
                401: () => Object( o.a )()
              }
            } )
          },
          toggleLink( e, t ) {
            const n = e.hide ? "hide" : "show",
              a = E.a.getFullPath( "/rest/ia/1.0/link/:id/" + n, {
                id: e.id
              } ),
              r = {
                spaceKey: e.spaceKey
              };
            E.a.post( a, {
              body: r,
              headers: {
                "Content-Type": "application/json"
              },
              callback: t,
              extraConfig: {
                ignoreResponseJson: !0
              },
              httpCodeHandlers: {
                401: () => Object( o.a )()
              }
            } )
          },
          createDemo( e, t ) {
            const n = E.a.getFullPath( "/rest/onboarding/1/space" ),
              a = {
                key: e.spaceKey,
                name: e.spaceName
              };
            E.a.post( n, {
              body: a,
              callback: t,
              headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
              }
            } )
          }
        },
        b = {
          configure( e ) {
            E.a.configure( e )
          },
          add( e, t ) {
            const n = E.a.getFullPath( "/users/addspacenotificationajax.action" );
            E.a.postLegacyResource( n, {
              body: e,
              callback: t,
              httpCodeHandlers: {
                401: () => Object( o.a )()
              }
            } )
          },
          delete( e, t ) {
            const n = E.a.getFullPath( "/users/removespacenotificationajax.action" );
            E.a.postLegacyResource( n, {
              body: e,
              callback: t,
              httpCodeHandlers: {
                401: () => Object( o.a )()
              }
            } )
          }
        },
        O = n( "kC4U" ),
        h = n( "94Z3" ),
        g = n( "OC+J" );

      function _( e ) {
        return Object( a.a )( Object( a.a )( {}, e ), {}, {
          version: Object( a.a )( Object( a.a )( {}, e.version ), {}, {
            id: e.id,
            by: Object( a.a )( {}, e.version.by )
          } ),
          contributors: e.history && e.history.contributors && e.history.contributors.publishers && e.history.contributors.publishers.users && e.history.contributors.publishers.users.map( g.a ),
          labels: ( t = e, n = [], "object" == typeof t && t && "object" == typeof t.metadata && t.metadata && "object" == typeof t.metadata.labels && t.metadata.labels && void 0 !== t.metadata.labels.results ? t.metadata.labels.results : n )
        } );
        var t, n
      }
      const T = {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        I = ( e, t ) => {
          const n = {
              sourceType: "user",
              sourceKey: "current",
              relationName: e.relation,
              targetType: "Content",
              targetKey: e.key
            },
            a = E.a.getFullPath( u, n );
          "add" === e.action ? E.a.put( a, {
            callback: t,
            httpCodeHandlers: {
              401: () => Object( o.a )()
            },
            responseTransformer: r.favouriteResponseTransformer
          } ) : "delete" === e.action && E.a.delete( a, {
            callback: t,
            httpCodeHandlers: {
              401: () => Object( o.a )()
            },
            responseTransformer: r.unFavouriteResponseTransformer
          } )
        },
        S = e => {
          const t = e.pageSize;
          return {
            user: "currentUser()",
            offset: e.page ? ( e.page - 1 ) * t : 0,
            pageSize: t,
            filter: e.filter ? ` and title ~ '${e.filter}*'` : "",
            nextPageOffset: e.nextPageOffset ? e.nextPageOffset : -1
          }
        };
      var C = {
          configure( e ) {
            E.a.configure( e )
          },
          recentlyUpdated( e, t ) {
            const n = {
                maxResults: e.maxResults
              },
              a = E.a.getFullPath( "/rest/dashboardmacros/1.0/updates.json?maxResults=:maxResults&tab=all&showProfilePic=true&labels=&spaces=&users=&types=&category=&spaceKey=", n );
            E.a.get( a, {
              callback: t,
              httpCodeHandlers: {
                401: () => Object( o.a )()
              },
              responseTransformer: r.recentlyUpdatedResponseTransformer,
              headers: {
                "Cache-Control": "no-cache",
                "If-Modified-Since": "0"
              }
            } )
          },
          recentlyUpdatedByCurrentUser( e, t ) {
            const n = E.a.getFullPath( "/rest/api/content/search?expand=version,container,metadata.currentuser.favourited,space,metadata.currentuser.lastmodified&cql=type%20in%20(page,blogpost)%20and%20id%20in%20recentlyModifiedPagesAndBlogPostsByUser(:user,%20:offset,%20:pageSize):filter?", S( e ) );
            E.a.get( n, {
              callback: t,
              httpCodeHandlers: {
                401: () => Object( o.a )()
              },
              responseTransformer: r.recentWorkResponseTransformer
            } )
          },
          drafts( e, t ) {
            const n = E.a.getFullPath( "/rest/api/content/search?cqlcontext=%7B%22contentStatuses%22:%5B%22draft%22%5D%7D&cql=type%20in%20(page,blogpost):filter?%20order%20by%20created%20desc&expand=space,container,metadata.currentuser.lastcontributed&limit=:pageSize&start=:offset", S( e ) );
            E.a.get( n, {
              callback: t,
              httpCodeHandlers: {
                401: () => Object( o.a )()
              },
              responseTransformer: r.recentWorkResponseTransformer
            } )
          },
          recentlyUpdatedByCurrentUserWithDrafts( e, t ) {
            const n = E.a.getFullPath( "/rest/api/content/search?expand=version,container,metadata.currentuser.favourited,space,metadata.currentuser.lastcontributed&cqlcontext=%7B%22contentStatuses%22:%5B%22current%22,%22draft%22%5D%7D&cql=type%20in%20(page,blogpost)%20and%20id%20in%20recentlyModifiedPagesAndBlogPostsByUser(:user,%20:offset,%20:pageSize):filter?", S( e ) );
            E.a.get( n, {
              callback: t,
              httpCodeHandlers: {
                401: () => Object( o.a )()
              },
              responseTransformer: r.recentWorkResponseTransformer
            } )
          },
          recentlyVisitedByCurrentUser( e, t ) {
            const n = E.a.getFullPath( "/rest/api/content/search?expand=version,container,metadata.currentuser.favourited,space,metadata.currentuser.viewed&cql=type%20in%20(page,blogpost)%20and%20id%20in%20recentlyViewedContent(%20:pageSize,%20:offset):filter?", S( e ) );
            E.a.get( n, {
              callback: t,
              httpCodeHandlers: {
                401: () => Object( o.a )()
              },
              responseTransformer: r.recentlyVisitedContentResponseTransformer
            } )
          },
          favouritedByCurrentUser( e, t ) {
            const n = E.a.getFullPath( "/rest/api/content/search?expand=version,metadata.currentuser.favourited,space,container&cql=favourite=:user:filter?%20order%20by%20favourite%20desc&limit=:pageSize&start=:offset", S( e ) );
            E.a.get( n, {
              callback: t,
              httpCodeHandlers: {
                401: () => Object( o.a )()
              },
              responseTransformer: r.favouritedContentResponseTransformer
            } )
          },
          popular( e, t ) {
            const n = E.a.getFullPath( "/rest/popular/1/stream/content.json?days=7&pageSize=:pageSize&nextPageOffset=:nextPageOffset", S( e ) );
            E.a.get( n, {
              callback: t,
              httpCodeHandlers: {
                401: () => Object( o.a )()
              },
              responseTransformer: r.streamResponseTransformer,
              headers: {
                "Cache-Control": "no-cache",
                "If-Modified-Since": "0"
              }
            } )
          },
          favourite( e, t ) {
            e.relation = "favourite", e.action = "add", I( e, t )
          },
          unfavourite( e, t ) {
            e.relation = "favourite", e.action = "delete", I( e, t )
          },
          content( e, t ) {
            const n = {
                contentId: e.contentId
              },
              a = E.a.getFullPath( "/rest/api/content/:contentId/?expand=childTypes.page,history.contributors.publishers.users,history.lastUpdated,version", n );
            E.a.get( a, {
              callback: t,
              httpCodeHandlers: {
                401: () => Object( o.a )()
              },
              responseTransformer: _
            } )
          },
          saveComment( e, t ) {
            const {
              watch: n,
              html: a,
              uuid: r,
              contentId: s,
              commentId: c,
              requestType: i,
              captcha: u = {}
            } = e;
            let l;
            const d = {
              contentId: s
            };
            switch ( i ) {
              case "addComment":
                l = E.a.getFullPath( "/rest/tinymce/1/content/:contentId/comment", d );
                break;
              case "editComment":
                d.commentId = c, l = E.a.getFullPath( "/rest/tinymce/1/content/:contentId/comments/:commentId", d );
                break;
              case "replyComment":
                d.commentId = c, l = E.a.getFullPath( "/rest/tinymce/1/content/:contentId/comments/:commentId/comment", d )
            }
            const p = {
              Accept: "application/json",
              "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
              "X-Atlassian-Token": "no-check"
            };
            u.id && ( p[ "X-Atlassian-Captcha-Id" ] = u.id, p[ "X-Atlassian-Captcha-Response" ] = u.response ), E.a.post( l, {
              body: {
                watch: n,
                html: a,
                uuid: r
              },
              httpCodeHandlers: {
                401: () => Object( o.a )()
              },
              callback: t,
              headers: p
            } )
          },
          commentDataGraphQL( e, t ) {
            const n = E.a.getFullPath( "/rest/api/content/:contentId/?expand=container.history,version,body.view,body.editor,operations,ancestors,history", {
              contentId: e.contentId
            } );
            E.a.get( n, {
              callback: t,
              httpCodeHandlers: {
                401: () => Object( o.a )()
              }
            } )
          },
          deleteContent( e, t ) {
            const n = {
                contentId: e.contentId,
                status: e.status ? e.status : "current"
              },
              a = E.a.getFullPath( "/rest/api/content/:contentId/?status=:status", n );
            E.a.delete( a, {
              callback: ( e, n ) => {
                e && 404 === e.statusCode ? t( null, null ) : t( e, n )
              },
              httpCodeHandlers: {
                401: () => Object( o.a )()
              }
            } )
          },
          editPageMetadata( e, t ) {
            const n = {
                contentId: e.contentId
              },
              a = E.a.getFullPath( "/rest/api/content/:contentId/?expand=ancestors,version", n );
            E.a.get( a, {
              callback: t,
              httpCodeHandlers: {
                401: () => Object( o.a )()
              },
              responseTransformer: r.contentWithBodyResponseTransformer
            } )
          },
          updateInlineTask( e, t ) {
            const n = {
                contentId: e.contentId,
                taskId: e.taskId
              },
              a = E.a.getFullPath( "/rest/inlinetasks/1/task/:contentId/:taskId/", n );
            E.a.post( a, {
              body: {
                status: e.status,
                trigger: e.trigger
              },
              extraConfig: {
                ignoreResponseJson: !0
              },
              callback: t,
              httpCodeHandlers: {
                401: () => Object( o.a )()
              },
              headers: T
            } )
          },
          page( e, t ) {
            const n = {
                contentId: e.contentId,
                trigger: e.trigger,
                version: e.version || "",
                embeddedContentRender: e.embeddedContentRender || ""
              },
              a = E.a.getFullPath( "/rest/api/content/:contentId/?version=:version&embeddedContentRender=:embeddedContentRender&trigger=:trigger&expand=body.view.webresource.tags.css,body.view.webresource.uris.js,metadata.frontend.spaFriendly,metadata.frontend.commentsSpaFriendly,ancestors,operations,history,version,space", n );
            E.a.get( a, {
              callback: t,
              httpCodeHandlers: {
                401: () => Object( o.a )()
              },
              responseTransformer: r.contentWithBodyResponseTransformer
            } )
          },
          pageAncestors( e, t ) {
            const n = {
                contentId: e.contentId
              },
              a = E.a.getFullPath( "/rest/api/content/:contentId/?expand=ancestors", n );
            return E.a.get( a, {
              callback: t,
              httpCodeHandlers: {
                401: () => Object( o.a )()
              },
              responseTransformer: r.expandedAncestors
            } )
          },
          editorPage( e, t ) {
            const n = {
                contentId: e.contentId,
                timestamp: Date.now(),
                draftShareId: e.draftShareId
              },
              a = E.a.getFullPath( "/rest/tinymce/1/content/:contentId.json?draftShareId=:draftShareId&_=:timestamp", n );
            E.a.get( a, {
              callback: t,
              httpCodeHandlers: {
                401: () => Object( o.a )()
              },
              responseTransformer: r.editorContentWithBodyResponseTransformer
            } )
          },
          renderContent( e, t ) {
            const n = {
                contentId: e.contentId,
                contentType: e.contentType,
                contentStatus: e.contentStatus,
                spaceKey: e.spaceKey,
                xHtml: e.xHtml,
                outputType: e.outputType,
                atl_token: e.atlToken
              },
              a = E.a.getFullPath( "/pages/rendercontent.action" );
            E.a.postLegacyResource( a, {
              body: n,
              callback: t,
              httpCodeHandlers: {
                401: () => Object( o.a )()
              },
              responseTransformer: r.renderContentResponseTransformer
            } )
          },
          publishEditorPage( e, t ) {
            const n = {
                contentId: e.content.id
              },
              a = E.a.getFullPath( s, n );
            E.a.put( a, {
              body: e.content,
              callback: t,
              httpCodeHandlers: {
                401: () => Object( o.a )()
              },
              headers: T,
              responseTransformer: r.publishContentTransformer
            } )
          },
          syncEditorDraft( e, t ) {
            const n = {
                contentId: e.content.id
              },
              a = E.a.getFullPath( "/rest/api/content/:contentId/?status=draft&action=sync", n );
            E.a.put( a, {
              body: e.content,
              callback: t,
              httpCodeHandlers: {
                401: () => Object( o.a )()
              },
              headers: T,
              responseTransformer: r.publishContentTransformer
            } )
          },
          publishEditorPageFromTemplate( e, t ) {
            const n = {
                contentId: e.content.id
              },
              a = E.a.getFullPath( "/rest/api/content/blueprint/instance/:contentId?status=draft", n );
            E.a.put( a, {
              body: e.content,
              callback: t,
              httpCodeHandlers: {
                401: () => Object( o.a )()
              },
              headers: T,
              responseTransformer: r.publishContentTransformer
            } )
          },
          quickReload( e, t ) {
            const n = E.a.getFullPath( "/rest/quickreload/latest/:contentId/?since=:lastFetchTime&source=classic2", e );
            E.a.get( n, {
              callback: t,
              httpCodeHandlers: {
                401: () => Object( o.a )()
              },
              responseTransformer: r.quickReloadResponseTransformer
            } )
          },
          createPage( e, t ) {
            const n = {
              type: e.contentType || "page",
              status: "draft",
              space: {
                key: e.spaceKey
              }
            };
            e.fromPageId && ( n.ancestors = [ {
              id: e.fromPageId
            } ] ), e.title && ( n.title = e.title );
            const a = E.a.getFullPath( "/rest/api/content" );
            E.a.post( a, {
              body: n,
              callback: t,
              httpCodeHandlers: {
                401: () => Object( o.a )()
              },
              headers: T,
              responseTransformer: _
            } )
          },
          draftMetadata( e, t ) {
            const n = {
                contentId: e.contentId
              },
              a = E.a.getFullPath( "/rest/api/content/:contentId/?status=draft&expand=ancestors,space", n );
            E.a.get( a, {
              callback: t,
              httpCodeHandlers: {
                401: () => Object( o.a )()
              },
              responseTransformer: r.contentWithBodyResponseTransformer
            } )
          },
          getAboutConfluence( e, t ) {
            const n = E.a.getFullPath( "/aboutconfluence.action" ),
              a = r.htmlTransformer;
            Object( O.a )( n, {
              method: "GET"
            } ).then( a, e => {
              if ( e instanceof h.a ) return a( e.response );
              throw e
            } ).then( e => t( null, e ) )
          },
          getBreadcrumbs( e, t ) {
            const n = {
                contentId: e.contentId
              },
              a = E.a.getFullPath( "/pages/breadcrumb.action?pageId=:contentId", n );
            E.a.post( a, {
              callback: t,
              headers: T,
              httpCodeHandlers: {
                401: () => Object( o.a )()
              }
            } )
          },
          updateParentPage( e, t ) {
            const n = {
                contentId: e.contentId
              },
              a = E.a.getFullPath( s, n ),
              c = {
                ancestors: [ {
                  id: e.parentPageId
                } ],
                space: {
                  key: e.parentSpaceKey
                },
                title: e.title,
                type: "page",
                status: "draft",
                version: {
                  number: 1
                }
              };
            E.a.put( a, {
              body: c,
              callback: t,
              httpCodeHandlers: {
                401: () => Object( o.a )()
              },
              headers: T,
              responseTransformer: r.contentWithBodyResponseTransformer
            } )
          },
          relationSourcesForTarget( e, t ) {
            const n = {
                relationName: e.relationName,
                targetType: e.targetType,
                targetKey: e.targetKey,
                sourceType: e.sourceType,
                targetStatus: e.targetStatus
              },
              a = E.a.getFullPath( "/rest/api/relation/:relationName/to/:targetType/:targetKey/from/:sourceType/?targetStatus=:targetStatus&expand=source,relationData", n );
            E.a.get( a, {
              callback: t,
              httpCodeHandlers: {
                401: () => Object( o.a )()
              },
              responseTransformer: r.relationSourcesTransformer
            } )
          },
          revertContent( e, t ) {
            const n = {
                contentId: e.contentId
              },
              a = E.a.getFullPath( "/rest/synchrony/1.0/content/:contentId/changes/unpublished", n );
            E.a.delete( a, {
              callback: t,
              httpCodeHandlers: {
                401: () => Object( o.a )()
              }
            } )
          },
          draftDiff( e, t ) {
            const n = {
                contentId: e.contentId
              },
              a = E.a.getFullPath( l, n );
            E.a.get( a, {
              callback: t,
              httpCodeHandlers: {
                401: () => Object( o.a )()
              }
            } )
          },
          saveDraftAndGetDiff( e, t ) {
            const n = {
                contentId: e.contentId
              },
              a = E.a.getFullPath( l, n );
            E.a.put( a, {
              body: e.content,
              callback: t,
              httpCodeHandlers: {
                401: () => Object( o.a )()
              }
            } )
          },
          getMacroPlaceholderADF( e, t, n ) {
            const a = E.a.getFullPath( "/rest/internal/1.0/macro/placeholder" ),
              r = e => e.json();
            return Object( O.a )( a, {
              callback: n,
              body: JSON.stringify( {
                macro: e,
                contentId: t
              } ),
              method: "POST",
              headers: T
            } ).then( r, e => {
              if ( e instanceof h.a ) return r( e.response );
              throw e
            } )
          }
        },
        A = n( "Kttv" ),
        y = n.n( A ),
        R = {
          configure( e ) {
            E.a.configure( e )
          },
          fetchKeys( e, t ) {
            const n = y()( e.i18nKeys.join( "," ) ),
              a = E.a.getFullPath( "/rest/confluence-dashboard/1/i18n/cache?hash=:hash&_browserCacheLocale=:locale", {
                hash: n,
                locale: e.locale
              } );
            E.a.get( a, {
              callback: ( n, a ) => {
                if ( !n || 303 !== n.statusCode && 404 !== n.statusCode ) return void t( n, a );
                const r = E.a.getFullPath( "/rest/confluence-dashboard/1/i18n/" );
                E.a.post( r, {
                  body: JSON.stringify( e.i18nKeys ),
                  callback: t,
                  httpCodeHandlers: {
                    401: () => Object( o.a )()
                  },
                  headers: {
                    "Content-Type": "application/json"
                  }
                } )
              },
              httpCodeHandlers: {
                401: () => Object( o.a )()
              }
            } )
          }
        },
        v = {
          configure( e ) {
            E.a.configure( e )
          },
          follow( e, t ) {
            const n = {
                mode: "blank",
                accountId: e.accountId
              },
              a = E.a.getFullPath( "/followuser.action?accountId=:accountId&mode=blank", n );
            E.a.postLegacyResource( a, {
              body: {
                atl_token: E.a.getAtlToken()
              },
              callback: t,
              httpCodeHandlers: {
                401: () => Object( o.a )()
              },
              responseTransformer: r.followUnfollowResponseTransformer
            } )
          },
          unfollow( e, t ) {
            const n = {
                mode: "blank",
                accountId: e.accountId
              },
              a = E.a.getFullPath( "/unfollowuser.action?accountId=:accountId&mode=blank", n );
            E.a.postLegacyResource( a, {
              body: {
                atl_token: E.a.getAtlToken()
              },
              callback: t,
              httpCodeHandlers: {
                401: () => Object( o.a )()
              },
              responseTransformer: r.followUnfollowResponseTransformer
            } )
          }
        },
        P = {
          configure( e ) {
            E.a.configure( e )
          },
          getAppSwitcherLinks( e, t ) {
            const n = E.a.getFullPath( "/rest/menu/latest/appswitcher" );
            return E.a.get( n, {
              callback: t,
              httpCodeHandlers: {
                401: () => Object( o.a )()
              }
            } )
          }
        },
        N = {
          configure( e ) {
            E.a.configure( e )
          },
          markDiscovered( e, t ) {
            const n = {
                pluginKey: e.pluginKey,
                featureKey: e.featureKey
              },
              a = E.a.getFullPath( "/rest/feature-discovery/1.0/discovered/:pluginKey/:featureKey", n );
            E.a.postLegacyResource( a, {
              body: {
                atl_token: E.a.getAtlToken()
              },
              httpCodeHandlers: {
                401: () => Object( o.a )()
              },
              callback: t
            } )
          }
        };

      function j( e, t ) {
        return {
          results: e.contentNameMatches
        }
      }
      var D = {
          configure( e ) {
            E.a.configure( e )
          },
          all( e, t ) {
            const n = E.a.getFullPath( c, e );
            E.a.get( n, {
              callback: t,
              httpCodeHandlers: {
                401: () => Object( o.a )()
              }
            } )
          },
          add( e, t ) {
            const n = E.a.getFullPath( c, {
              contentId: e.contentId
            } );
            E.a.post( n, {
              body: e.labels,
              callback: t,
              httpCodeHandlers: {
                401: () => Object( o.a )()
              },
              headers: {
                "Content-Type": "application/json"
              }
            } )
          },
          delete( e, t ) {
            const n = E.a.getFullPath( "/rest/ui/1.0/content/:contentId/label/:labelId", e );
            E.a.delete( n, {
              callback: t,
              httpCodeHandlers: {
                401: () => Object( o.a )()
              }
            } )
          },
          suggest( e, t ) {
            e.contentId = e.contentId || "";
            const n = E.a.getFullPath( "/labels/autocompletelabel.action?maxResults=3&query=:query&contentId=:contentId", e );
            E.a.get( n, {
              callback: t,
              httpCodeHandlers: {
                401: () => Object( o.a )()
              },
              responseTransformer: j
            } )
          }
        },
        L = {
          getUploadToken( e, t ) {
            const n = {
                contentId: e.contentId
              },
              a = E.a.getFullPath( "/rest/internals/1.0/media/uploadTokenData?contentId=:contentId", n );
            E.a.get( a, {
              callback: t,
              httpCodeHandlers: {
                401: () => Object( o.a )()
              },
              headers: {
                "Content-Type": "application/json"
              }
            } )
          },
          getMediaConfig( e, t ) {
            const n = E.a.getFullPath( "/rest/internals/1.0/media/config" );
            E.a.get( n, {
              callback: t,
              httpCodeHandlers: {
                401: () => Object( o.a )()
              },
              headers: {
                "Content-Type": "application/json"
              }
            } )
          },
          setAttachment( e, t ) {
            const n = E.a.getFullPath( "/rest/drag-and-drop/1/filestore/upload" );
            E.a.post( n, {
              callback: t,
              body: e,
              httpCodeHandlers: {
                401: () => Object( o.a )()
              },
              headers: {
                "Content-Type": "application/json"
              }
            } )
          }
        };
      var w = {
        configure( e ) {
          E.a.configure( e )
        },
        getConnectModuleDescriptor( e = {}, t ) {
          var n;
          e.classifier = e.classifier || "json", e.extraQueryParameters && Object.keys( e.extraQueryParameters ).length ? e.extraQueryParameters = ( n = e.extraQueryParameters, Object.keys( n ).map( e => `${e}=${n[e]}` ).join( "&" ) ) : e.extraQueryParameters = "";
          const s = E.a.getFullPath( "/plugins/servlet/ac/:addonKey/:moduleKey/?classifier=:classifier&:extraQueryParameters", Object( a.a )( {}, e ) );
          E.a.get( s, {
            callback: t,
            httpCodeHandlers: {
              401: () => Object( o.a )()
            },
            responseTransformer: r.connectModuleTransformer
          } )
        }
      };
      var k = {
          configure: function ( e ) {
            E.a.configure( e )
          },
          recentContainers: function ( e, t ) {
            return E.a.withTenantId().then( e => function ( e, t ) {
              const n = e => e.json();
              return Object( O.a )( e, {
                callback: t,
                method: "GET",
                headers: {
                  Accept: "application/json",
                  "Content-Type": "application/json"
                }
              } ).then( n, e => {
                if ( e instanceof h.a ) return n( e.response );
                throw e
              } ).then( e => t( null, e ) ).catch( e => {
                console.log( "Activity service error:", e ), t( e, null )
              } )
            }( E.a.getExternalServicePath( d, {
              cloudId: e
            } ), t ) )
          }
        },
        U = {
          configure( e ) {
            E.a.configure( e )
          },
          getTheme( e ) {
            const t = E.a.getFullPath( "/rest/api/settings/theme" );
            E.a.get( t, {
              callback: e,
              httpCodeHandlers: {
                401: () => Object( o.a )()
              }
            } )
          },
          getLookAndFeel( e = {}, t ) {
            let n = E.a.getFullPath( "/rest/api/settings/lookandfeel" );
            e.spaceKey && ( n = E.a.getFullPath( "/rest/api/settings/lookandfeel?spaceKey=:spaceKey", Object( a.a )( {}, e ) ) ), E.a.get( n, {
              callback: t,
              httpCodeHandlers: {
                401: () => Object( o.a )()
              },
              responseTransformer: r.lookAndFeelTransformer
            } )
          },
          addUserDarkFeature( e = {} ) {
            const t = E.a.getFullPath( "/rest/feature/1/user/:featureKey", e );
            return Object( O.a )( t, {
              headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
              },
              method: "PUT"
            } ).catch( M )
          },
          sendAnalytics( e = {} ) {
            const t = E.a.getFullPath( "/rest/analytics/1.0/publish/bulk", e ),
              n = {
                headers: {
                  atl_token: E.a.getAtlToken(),
                  "content-type": "application/json"
                },
                method: "POST",
                body: JSON.stringify( [ e.analyticsEvent ] )
              };
            return Object( O.a )( t, n ).catch( M )
          }
        };

      function M( e ) {
        if ( e instanceof h.a ) return e.response;
        throw e
      }
      var F = {
          configure( e ) {
            E.a.configure( e )
          },
          directory( e, t ) {
            const n = E.a.getFullPath( "/rest/gadget/1.0/published/gadgetsdirectory" );
            E.a.get( n, {
              callback: t,
              httpCodeHandlers: {
                401: () => Object( o.a )()
              }
            } )
          }
        },
        G = n( "QTRv" ),
        x = {
          configure( e ) {
            E.a.configure( e )
          },
          getUnreadCount( e, t ) {
            const n = E.a.getFullPath( "/rest/mywork/latest/status/notification/count" );
            E.a.get( n, {
              callback: t,
              httpCodeHandlers: {
                401: () => Object( o.a )()
              }
            } )
          }
        },
        H = {
          getJWTToken( {
            contentId: e,
            draftShareId: t
          }, n ) {
            const a = {
                contentId: e,
                draftShareId: t
              },
              r = E.a.getFullPath( "/rest/synchrony/1.0/token/:contentId/generate?draftShareId=:draftShareId", a );
            E.a.get( r, {
              callback: n,
              headers: {
                "Content-Type": "application/json"
              },
              httpCodeHandlers: {
                401: () => Object( o.a )()
              }
            } )
          },
          synchronyRecover( {
            contentId: e,
            behind: t,
            conflictingRev: n
          }, a ) {
            const r = {
                contentId: e,
                behind: t,
                conflictingRev: n
              },
              s = E.a.getFullPath( "/rest/synchrony/1.0/content/:contentId/recovery?behind=:behind&conflictingRev=:conflictingRev", r );
            E.a.put( s, {
              callback: a,
              headers: {
                "Content-Type": "application/json"
              },
              extraConfig: {
                ignoreResponseJson: !0
              },
              httpCodeHandlers: {
                401: () => Object( o.a )()
              }
            } )
          }
        },
        V = {
          allLabels( e, t ) {
            const n = E.a.getFullPath( "/rest/ui/1.0/template/:contentId/labels", e );
            E.a.get( n, {
              callback: t,
              httpCodeHandlers: {
                401: () => Object( o.a )()
              }
            } )
          },
          addLabels( e, t ) {
            const n = E.a.getFullPath( "/rest/ui/1.0/template/:contentId/labels", e );
            E.a.post( n, {
              body: e.labels,
              callback: t,
              httpCodeHandlers: {
                401: () => Object( o.a )()
              },
              headers: {
                "Content-Type": "application/json"
              }
            } )
          },
          deleteLabel( e, t ) {
            const n = E.a.getFullPath( "/rest/ui/1.0/template/:contentId/label/:labelId", e );
            E.a.delete( n, {
              callback: t,
              httpCodeHandlers: {
                401: () => Object( o.a )()
              }
            } )
          },
          createTemplate( e, t ) {
            const n = E.a.getFullPath( "/rest/api/template", e );
            E.a.post( n, {
              body: e.content,
              callback: t,
              httpCodeHandlers: {
                401: () => Object( o.a )()
              },
              headers: {
                "Content-Type": "application/json"
              }
            } )
          },
          updateTemplate( e, t ) {
            const n = E.a.getFullPath( "/rest/api/template", e );
            E.a.put( n, {
              body: e.content,
              callback: t,
              httpCodeHandlers: {
                401: () => Object( o.a )()
              },
              headers: {
                "Content-Type": "application/json"
              }
            } )
          }
        },
        B = {
          updateContentProperty( e, t ) {
            const n = {
                contentId: e.contentId,
                propertyKey: e.propertyKey
              },
              a = {
                value: e.propertyValue,
                version: {
                  number: e.versionNumber,
                  minorEdit: !0
                }
              },
              r = E.a.getFullPath( "/rest/api/content/:contentId/property/:propertyKey", n );
            E.a.put( r, {
              body: a,
              callback: t,
              httpCodeHandlers: {
                401: () => Object( o.a )()
              },
              headers: {
                "Content-Type": "application/json"
              }
            } )
          }
        };
      t.a = {
        configure( e ) {
          E.a.configure( e ), Object( r.configure )( e )
        },
        views: p,
        spaces: m,
        watches: b,
        content: C,
        i18n: R,
        users: v,
        appSwitcher: P,
        featureDiscovery: N,
        labels: D,
        media: L,
        atlassianConnect: w,
        settings: U,
        gadgets: F,
        editor: G.a,
        notification: x,
        activityService: k,
        synchrony: H,
        transformers: Object( a.a )( {}, r ),
        template: V,
        contentProperties: B,
        fetch: E.a.fetch
      }
    },
    "j+hl": function ( e, t, n ) {
      "use strict";
      n.d( t, "b", ( function () {
        return s
      } ) ), n.d( t, "a", ( function () {
        return c
      } ) );
      var a = n( "H5qd" ),
        r = n.n( a );
      const o = r.a `fragment contentAppearanceInnerFragment on PaginatedJsonContentPropertyList{nodes{id key value version{number}}}`,
        s = r.a `fragment contentAppearancePublishedFragment on Content{appearancePublished:properties(key:"content-appearance-published"){...contentAppearanceInnerFragment}}${o}`,
        c = r.a `fragment contentAppearanceDraftFragment on Content{appearanceDraft:properties(key:"content-appearance-draft"){...contentAppearanceInnerFragment}}${o}`
    },
    jGPY: function ( e, t, n ) {
      "use strict";

      function a( e ) {
        return e.split( "." ).reduce( ( e, t ) => e && e[ t ] ? e[ t ] : null, window )
      }
      n.d( t, "a", ( function () {
        return o
      } ) );

      function r( e ) {
        0
      }

      function o( {
        listener: e,
        globalProperty: t,
        interval: n = 250
      }, o ) {
        if ( a( t ) ) return r(), o(), null;
        const s = setInterval( () => {
          r(), a( t ) && ( r(), clearInterval( s ), o() )
        }, n )
      }
    },
    jh8q: function ( e, t, n ) {
      "use strict";
      n.d( t, "a", ( function () {
        return r
      } ) );
      var a = n( "RfuI" );
      const r = Object( a.a )( {
        id: "3e58r",
        name: "BannerContainer",
        loader: () => n.e( "banner-container~27096fa6" ).then( n.bind( null, "DhFH" ) ).then( ( {
          BannerContainer: e
        } ) => e )
      } )
    },
    "k8+f": function ( e, t, n ) {
      "use strict";

      function a( e ) {
        const t = e.split( "." );
        let n = window[ t.shift() ];
        for ( ; void 0 !== n && t.length; ) n = n[ t.shift() ];
        return n
      }
      n.d( t, "a", ( function () {
        return o
      } ) );

      function r( e ) {
        0
      }

      function o( {
        listener: e,
        globalProperty: t,
        interval: n = 250
      }, o ) {
        if ( a( t ) ) return r(), o(), null;
        const s = setInterval( () => {
          r(), a( t ) && ( r(), clearInterval( s ), o() )
        }, n );
        return {
          cancel() {
            s && clearInterval( s )
          }
        }
      }
    },
    kC4U: function ( e, t, n ) {
      "use strict";
      n.d( t, "a", ( function () {
        return l
      } ) );
      var a = n( "HbGN" ),
        r = n( "Czhu" ),
        o = n( "daKX" ),
        s = n( "d9aE" ),
        c = n( "94Z3" ),
        i = n( "p0L4" ),
        u = n( "UTko" );
      const l = async ( e, t ) => {
        let n, {
          ignoreNoNetworkError: o,
          requestInit: l
        } = function ( e = {} ) {
          const {
            ignoreNoNetworkError: t
          } = e, n = Object( a.a )( e, [ "ignoreNoNetworkError" ] );
          return {
            ignoreNoNetworkError: t,
            requestInit: Object.getOwnPropertyNames( n ).length ? Object( s.a )( n ) : void 0
          }
        }( t );
        e && "string" != typeof e && e.credentials || ( l = Object( r.a )( {
          credentials: "include"
        }, l ) );
        try {
          n = await fetch( e, l )
        } catch ( d ) {
          0;
          const e = new i.a( "Network failure: " + d );
          throw e.ignore = o, e.ignore || p( void 0, e ), e
        }
        if ( !n.ok ) {
          let t;
          throw t = 429 === n.status ? new u.a( e.toString(), n ) : new c.a( "Received status " + n.status, n ), p( n, t ), t
        }
        return p( n, void 0 ), n
      };
      const d = Object( o.a )( l );
      let E = [];

      function p( e, t ) {
        E.forEach( n => {
          try {
            n( e, t )
          } catch ( a ) {
            d.error `Error occurred in a cfetch subscriber: ${a}`
          }
        } )
      }
      l.subscribe = e => {
        if ( "function" != typeof e ) throw new Error( "Subscriber must be a function" );
        return E.push( e ), () => {
          E = E.filter( t => t !== e )
        }
      }
    },
    kHPA: function ( e, t, n ) {
      "use strict";

      function a( e ) {
        let t, n;
        const a = new Promise( a => {
          n = setTimeout( a, e ), t = a
        } );
        return a.finally( () => {
          clearTimeout( n )
        } ), {
          promise: a,
          resolve: t
        }
      }
      n.d( t, "a", ( function () {
        return a
      } ) )
    },
    kHy1: function ( e, t, n ) {
      "use strict";
      n.d( t, "a", ( function () {
        return o
      } ) );
      var a = n( "7kiZ" ),
        r = n( "0+uK" );

      function o( {
        location: e = null,
        contentId: t = null,
        spaceKey: n = null,
        version: o = null
      } = {} ) {
        const s = {
          location: Array.isArray( e ) ? null : e,
          locations: Array.isArray( e ) ? e : [],
          contentId: t,
          spaceKey: n,
          version: o
        };
        return Object( a.a )( {
          query: r.a,
          variables: s
        } )
      }
    },
    kOun: function ( e, t, n ) {
      "use strict";
      var a = n( "Czhu" ),
        r = n( "yS9+" ),
        o = n( "Ci1e" );
      const s = {};
      t.a = () => e => t => {
        const n = t[ r.a ];
        if ( void 0 === n ) return e( t );
        const {
          apiMethod: c,
          types: i,
          options: u,
          actionOptions: l
        } = n, d = JSON.stringify( {
          types: i,
          options: u
        } );

        function E( e ) {
          const n = Object.assign( {}, t, e );
          return delete n[ r.a ], n
        }
        const [ p, f, m ] = i;
        if ( d in s ) return s[ d ];
        let b, O;
        e( E( Object( a.a )( {
          type: p
        }, u ) ) );
        const h = new Promise( ( e, t ) => {
          b = e, O = t
        } );
        return s[ d ] = h, c( u, ( t, n ) => {
          if ( delete s[ d ], t ) {
            const a = l && l.errorHandler && l.errorHandler( t, n, u );
            if ( !a ) {
              let a;
              try {
                a = JSON.parse( t.message )
              } catch ( r ) {
                t.message && t.message.indexOf( "<!DOCTYPE html>" ) > -1 ? console.error( "A rest call returned a HTML document that could not be parsed by the rest API middleware.", {
                  failureType: m,
                  options: u,
                  err: t,
                  response: n
                } ) : console.error( "Could not parse response from rest API: " + t.message, {
                  failureType: m,
                  options: u,
                  err: t,
                  response: n
                } ), a = t.message
              }
              return O( t ), e( E( {
                type: m,
                message: a,
                error: t,
                options: u
              } ) )
            }
            n = a
          }
          if ( l && l.schema ) {
            const e = Object( o.normalize )( n, l.schema );
            n = Object( a.a )( Object( a.a )( {}, n ), e )
          }
          return b(), e( E( Object( a.a )( {
            type: f,
            response: n
          }, u ) ) )
        } ), h
      }
    },
    kR5U: function ( e, t, n ) {
      "use strict";
      n.d( t, "c", ( function () {
        return o
      } ) ), n.d( t, "b", ( function () {
        return s
      } ) ), n.d( t, "a", ( function () {
        return c
      } ) );
      var a = n( "hqKg" ),
        r = n( "pPdq" );
      const o = Object( a.createSelector )( e => e.meta, e => !e || !e.get( "atlassian-account-id" ) ),
        s = Object( a.createSelector )( e => e.meta ? e.meta.get( "enabled-dark-features", "" ).split( "," ) : [], ( e, t ) => t, ( e, t ) => e.indexOf( t ) > -1 && -1 === e.indexOf( t + ".disable" ) ),
        c = Object( a.createSelector )( e => e, ( e, t ) => t.meta.get( "content-type", "" ), ( e, t ) => t.toLowerCase() === e.toLowerCase() ),
        i = ( e, t, n ) => {
          const a = s( e, t ) === n,
            o = Object( r.a )( e, t ) === n;
          return !1 === n ? a && o : a || o
        },
        u = e => void 0 === e.find( e => !e );
      Object( a.createSelector )( e => e, ( e, t ) => t, ( e, t ) => {
        const n = t.map( t => {
          if ( "string" == typeof t ) return i( e, t, !0 );
          const n = Object.keys( t ).map( n => {
            const a = t[ n ];
            return Array.isArray( a ) ? !!a.find( t => i( e, n, t ) ) : i( e, n, a )
          } );
          return u( n )
        } );
        return u( n )
      } )
    },
    kWGc: function ( e, t, n ) {
      "use strict";
      n.d( t, "f", ( function () {
        return a
      } ) ), n.d( t, "b", ( function () {
        return r
      } ) ), n.d( t, "e", ( function () {
        return o
      } ) ), n.d( t, "a", ( function () {
        return s
      } ) ), n.d( t, "d", ( function () {
        return c
      } ) ), n.d( t, "c", ( function () {
        return i
      } ) );
      const a = "VIEW_PAGE_CONTENT_SHOWN",
        r = "RESET_CONTENT",
        o = "SET_REFRESH_CONTENT_STATE",
        s = "QUICK_RELOAD",
        c = "RESET_QUICK_RELOAD_EDITS",
        i = "RESET_QUICK_RELOAD_COMMENTS"
    },
    kmyq: function ( e, t, n ) {
      "use strict";
      n.d( t, "a", ( function () {
        return r
      } ) );
      var a = n( "ERkP" );
      const r = n.n( a ).a.createContext( () => !1 );
      r.displayName = "KnownErrorBoundaryContext"
    },
    lbB3: function ( e, t, n ) {
      "use strict";
      n.d( t, "a", ( function () {
        return s
      } ) );
      var a = n( "7kiZ" ),
        r = n( "FLmY" ),
        o = n( "CqAv" );

      function s( {
        cloudId: e,
        recentTab: t = 0
      } ) {
        const n = [ {
          query: o.c,
          variables: {
            cloudId: e,
            first: r.c,
            after: ""
          }
        }, {
          query: o.d,
          variables: {
            cloudId: e,
            first: r.c,
            after: ""
          }
        }, {
          query: o.a,
          variables: {
            first: r.c,
            context: '{"contentStatuses":["draft"]}'
          }
        }, {
          query: o.b,
          variables: {
            limit: r.c
          }
        } ];
        return t < 0 || t >= n.length ? Object( a.a )( n[ 0 ] ) : Object( a.a )( n[ t ] )
      }
    },
    liLY: function ( e, t, n ) {
      "use strict";
      n.d( t, "a", ( function () {
        return c
      } ) ), n.d( t, "c", ( function () {
        return u
      } ) ), n.d( t, "b", ( function () {
        return l
      } ) ), n.d( t, "e", ( function () {
        return d
      } ) ), n.d( t, "d", ( function () {
        return p
      } ) );
      var a = n( "Czhu" ),
        r = n( "KIs4" ),
        o = n( "cld1" ),
        s = n( "BX6b" );
      const c = e => {
          window.performance && window.performance.clearMarks && e.forEach( e => window.performance.clearMarks( e ) )
        },
        i = e => {
          if ( window.performance && window.performance.getEntriesByName ) {
            const t = window.performance.getEntriesByName( e );
            return t && t[ 0 ]
          }
        },
        u = ( e, t ) => {
          const n = i( e ),
            a = i( t );
          if ( n && a ) return Math.abs( n.startTime - a.startTime )
        },
        l = e => {
          const t = i( e );
          if ( t ) return t.startTime
        },
        d = ( {
          subject: e,
          subjectId: t = ""
        } ) => {
          const n = `${e}.${t}.start`;
          c( [ n, `${e}.${t}.end` ] ), window.performance.mark( n )
        },
        E = async ( {
          details: e,
          subject: t,
          subjectId: n,
          includeFeatureFlags: c
        } ) => {
          const i = `${t}.${n}.end`;
          window.performance.mark( i );
          const l = u( `${t}.${n}.start`, i );
          if ( void 0 !== l ) try {
            const i = Object( o.getAnalyticsWebClient )(),
              u = c ? Object( r.b )() : Promise.resolve( {} ),
              [ d, {
                featureFlags: E
              } ] = await Promise.all( [ i, u ] ),
              p = ( ( e = {} ) => Object.keys( e ).filter( t => e[ t ] ).reduce( ( t, n ) => ( t[ n ] = e[ n ], t ), {} ) )( E );
            d.sendOperationalEvent( {
              tags: [ "performance" ],
              source: "confluence-frontend",
              action: "done",
              actionSubject: t,
              actionSubjectId: n,
              attributes: Object( a.a )( {
                featureFlags: p,
                duration: l
              }, e )
            } ), Object( s.c )().submitPerformanceMetric( `${t}${n?"."+n:""}`, l )
          } catch ( d ) {
            Object( s.c )().submitError( d, {
              attribution: "unknown"
            } )
          }
        }, p = ( {
          subject: e,
          subjectId: t = "",
          details: n = {},
          includeFeatureFlags: a = !1
        } ) => {
          i( `${e}.${t}.end` ) || E( {
            details: n,
            includeFeatureFlags: a,
            subject: e,
            subjectId: t
          } )
        }
    },
    mWX1: function ( e, t, n ) {
      "use strict";
      n.r( t ), n.d( t, "user", ( function () {
        return r
      } ) ), n.d( t, "version", ( function () {
        return o
      } ) ), n.d( t, "space", ( function () {
        return s
      } ) ), n.d( t, "spaces", ( function () {
        return c
      } ) ), n.d( t, "comment", ( function () {
        return i
      } ) ), n.d( t, "comments", ( function () {
        return u
      } ) ), n.d( t, "label", ( function () {
        return l
      } ) ), n.d( t, "labels", ( function () {
        return d
      } ) ), n.d( t, "currentUser", ( function () {
        return E
      } ) ), n.d( t, "content", ( function () {
        return p
      } ) ), n.d( t, "file", ( function () {
        return f
      } ) ), n.d( t, "files", ( function () {
        return m
      } ) ), n.d( t, "connectModule", ( function () {
        return b
      } ) ), n.d( t, "lookAndFeelSettings", ( function () {
        return O
      } ) );
      var a = n( "Ci1e" );
      const r = new a.schema.Entity( "users", {}, {
          idAttribute: e => e.isAnonymous ? "anonymous" : e.accountId ? e.accountId : e.unknownUser ? e.displayName : "FIX-ME:not-a-real-user"
        } ),
        o = new a.schema.Entity( "versions" );
      o.define( {
        by: r
      } );
      const s = new a.schema.Entity( "spaces", {}, {
          idAttribute: e => e.spaceKey || e.key
        } ),
        c = {
          results: new a.schema.Array( s ),
          nodes: new a.schema.Array( s )
        },
        i = new a.schema.Entity( "comments" );
      i.define( {
        version: o,
        createdBy: r
      } );
      const u = {
          results: new a.schema.Array( i ),
          nodes: new a.schema.Array( i )
        },
        l = new a.schema.Entity( "labels" ),
        d = {
          results: new a.schema.Array( l )
        },
        E = {
          result: r
        },
        p = new a.schema.Entity( "contents" );
      p.define( {
        space: s,
        version: o,
        createdBy: r,
        contributors: new a.schema.Array( r ),
        childNodes: new a.schema.Array( p ),
        ancestors: new a.schema.Array( p ),
        labels: new a.schema.Array( l ),
        viewers: new a.schema.Array( r )
      } );
      const f = new a.schema.Entity( "files" );
      f.define( {
        createdBy: r,
        version: o,
        container: p
      } );
      const m = {
          results: new a.schema.Array( f )
        },
        b = new a.schema.Entity( "connectModules", {}, {
          idAttribute: e => `${e.uniqueKey}__${e.productContext["space.key"]}`
        } ),
        O = new a.schema.Entity( "lookAndFeelSettings", {}, {
          idAttribute: e => e.lookAndFeelId
        } )
    },
    n3bg: function ( e, t, n ) {
      "use strict";
      n.d( t, "a", ( function () {
        return u
      } ) ), n.d( t, "c", ( function () {
        return l
      } ) ), n.d( t, "b", ( function () {
        return d
      } ) );
      var a = n( "BTwn" ),
        r = n( "WjTK" ),
        o = n( "7jXy" );
      let s, c, i;

      function u() {
        return i || ( i = new r.SubscriptionClient( s, {
          reconnect: !1,
          lazy: !0
        } ) ), i
      }
      s = `wss://${window.location.host}/subscriptions/subscriptions`;
      const l = () => new a.a( u() ),
        d = () => ( void 0 === c && ( c = Object( o.a )( s ) ), c )
    },
    nPRB: function ( e, t, n ) {
      "use strict";
      var a = n( "zjfJ" ),
        r = n( "RNvQ" ),
        o = n.n( r ),
        s = n( "daKX" ),
        c = n( "U63R" );
      const i = e => {
        let t, n, a = !1;
        return {
          get started() {
            return a
          },
          result: new Promise( ( e, a ) => {
            t = e, n = a
          } ),
          run() {
            a || ( a = !0, new Promise( t => {
              t( e() )
            } ).then( t, n ) )
          }
        }
      };
      n.d( t, "a", ( function () {
        return u
      } ) );
      class u {
        constructor( e = {} ) {
          Object( a.a )( this, "maxQueueTimeMs", void 0 ), Object( a.a )( this, "debounceTimeMs", void 0 ), Object( a.a )( this, "disabled", void 0 ), Object( a.a )( this, "queue", [] ), Object( a.a )( this, "logger", Object( s.a )( "TaskQueue" ) ), Object( a.a )( this, "runPriorityTasks", void 0 ), this.maxQueueTimeMs = e.maxQueueTimeMs || 1e4, this.debounceTimeMs = e.debounceTimeMs || 100, this.disabled = e.disabled || !1, this.runPriorityTasks = o()( () => {
            this.getPriorityItems().filter( e => !e.futureTask.started ).forEach( e => {
              this.logger.debug `${e.name} ${e.priority}`, e.futureTask.run(), e.timer && ( window.clearTimeout( e.timer ), delete e.timer )
            } )
          }, this.debounceTimeMs )
        }
        push( {
          name: e,
          task: t,
          priority: n = c.a.NORMAL
        } ) {
          const a = {
            name: e,
            futureTask: i( t ),
            priority: this.disabled ? c.a.IMMEDIATE : n
          };
          this.insert( a ), a.priority === c.a.IMMEDIATE ? ( this.logger.debug `${a.name} ${a.priority}`, a.futureTask.run() ) : a.timer = window.setTimeout( () => {
            a.futureTask.run()
          }, this.maxQueueTimeMs );
          const r = () => {
            this.remove( a )
          };
          return a.futureTask.result.then( r, r ), a.futureTask.result
        }
        insert( e ) {
          const t = this.queue.findIndex( t => t.priority > e.priority );
          this.queue.splice( -1 === t ? this.queue.length : t, 0, e ), this.runPriorityTasks()
        }
        remove( e ) {
          this.queue = this.queue.filter( t => t !== e ), this.runPriorityTasks()
        }
        getPriorityItems() {
          const e = this.queue[ 0 ];
          if ( !e ) return [];
          const t = this.queue.findIndex( t => t.priority !== e.priority );
          return -1 === t ? this.queue : this.queue.slice( 0, t )
        }
      }
    },
    nR8X: function ( e, t, n ) {
      "use strict";
      n.d( t, "a", ( function () {
        return c
      } ) );
      var a = n( "oayO" );
      const r = {
          script: !0,
          other: !0,
          link: !0
        },
        o = {
          "query-preloader": !0,
          "translations.en-US": !0,
          runtime: !0,
          atlaskit: !0,
          afp: !0,
          static: !0,
          vendors: !0,
          app: !0
        },
        s = () => {
          try {
            const e = JSON.parse( a.a.getItem( "confluence.cachedAssets" ) ) || {};
            return ( e => {
              if ( "object" != typeof e || !e ) return !1;
              for ( const t of Object.values( e ) )
                if ( "string" != typeof t ) return !1;
              return !0
            } )( e ) ? e : {}
          } catch ( e ) {
            return {}
          }
        },
        c = e => {
          const t = s(),
            n = {},
            c = {};
          let i = 0;
          return performance.getEntriesByType( "resource" ).forEach( a => {
            const {
              initiatorType: s,
              responseEnd: u,
              duration: l,
              name: d
            } = a;
            if ( !r[ s ] || u > e ) return;
            const E = d.split( "/" ).pop();
            if ( !E ) return;
            const p = E.split( "~" ).shift();
            p && ( o[ p ] && ( n[ p ] = E, c[ p ] = {
              cached: t[ p ] === E,
              duration: l
            } ), i++ )
          } ), ( e => {
            try {
              a.a.setItem( "confluence.cachedAssets", JSON.stringify( e ) )
            } catch ( t ) {}
          } )( n ), {
            criticalChunks: c,
            totalChunkCount: i
          }
        }
    },
    nWyW: function ( e, t, n ) {
      "use strict";
      n.d( t, "a", ( function () {
        return r
      } ) );
      var a = n( "RfuI" );
      const r = Object( a.a )( {
        id: "9MTwU",
        name: "ConnectSupport",
        loader: () => Promise.all( [ n.e( "vendors~4134d62c" ), n.e( 136 ), n.e( "confluence-connect-support~dc51bad7" ) ] ).then( n.bind( null, "Ugv5" ) )
      } )
    },
    ne5j: function ( e, t, n ) {
      "use strict";
      n.r( t ), n.d( t, "OVERRIDES_STORAGE_KEY", ( function () {
        return o
      } ) ), n.d( t, "getOverrides", ( function () {
        return c
      } ) ), n.d( t, "hasOverrides", ( function () {
        return i
      } ) ), n.d( t, "setOverride", ( function () {
        return l
      } ) ), n.d( t, "removeOverride", ( function () {
        return d
      } ) ), n.d( t, "removeAllOverrides", ( function () {
        return E
      } ) ), n.d( t, "applyOverrides", ( function () {
        return p
      } ) );
      var a = n( "daKX" );
      const r = Object( a.a )( "session-data" ),
        o = "confluence-frontend-next.featureFlagLocalOverrides",
        s = ( () => {
          try {
            const e = "__random__local__storage__test__key__";
            return window.localStorage.setItem( e, e ), window.localStorage.removeItem( e ), !0
          } catch ( e ) {
            return !1
          }
        } )(),
        c = () => {
          let e;
          return e = s ? window.localStorage.getItem( o ) : window.sessionStorage.getItem( o ), e ? JSON.parse( e ) : {}
        },
        i = () => s ? null != window.localStorage.getItem( o ) : null != window.sessionStorage.getItem( o ),
        u = e => {
          const t = e( c() );
          if ( Object.keys( t ).length )
            if ( s ) try {
              window.localStorage.setItem( o, JSON.stringify( t ) )
            } catch ( _ ) {
              r.error `Unable to set local storage. key = "${o}", value = "${JSON.stringify(t)}"`
            } else window.sessionStorage.setItem( o, JSON.stringify( t ) );
            else s ? window.localStorage.removeItem( o ) : window.sessionStorage.removeItem( o );
          return t
        },
        l = ( e, t ) => u( n => ( n[ e ] = t, n ) ),
        d = e => u( t => ( delete t[ e ], t ) ),
        E = () => u( () => ( {} ) ),
        p = ( e, t ) => {
          if ( !i() ) return e;
          const n = c();
          return Object.keys( e ).reduce( ( a, r ) => ( a[ r ] = t( r, n, e ), a ), {} )
        }
    },
    nk8F: function ( e, t, n ) {
      "use strict";
      n.d( t, "e", ( function () {
        return r
      } ) ), n.d( t, "d", ( function () {
        return o
      } ) ), n.d( t, "b", ( function () {
        return s
      } ) ), n.d( t, "a", ( function () {
        return c
      } ) ), n.d( t, "c", ( function () {
        return i
      } ) );
      var a = n( "RfuI" );
      Object( a.a )( {
        id: "wog7i",
        name: "Home",
        loader: async () => ( await Promise.all( [ n.e( "atlaskit~66e23772" ), n.e( "afp~af75c846" ), n.e( "vendors~4134d62c" ), n.e( 0 ), n.e( 24 ), n.e( 43 ), n.e( "confluence-home~b59ad437" ) ] ).then( n.bind( null, "8tz4" ) ) ).Home
      } );
      const r = Object( a.a )( {
          id: "wNPbM",
          name: "HomeRedirect",
          loader: async () => ( await Promise.all( [ n.e( "atlaskit~66e23772" ), n.e( "afp~af75c846" ), n.e( "vendors~4134d62c" ), n.e( 0 ), n.e( 24 ), n.e( 43 ), n.e( "confluence-home~b59ad437" ), n.e( "confluence-home-redirect~2f74cfb9" ) ] ).then( n.bind( null, "sSc+" ) ) ).HomeRedirect
        } ),
        o = Object( a.a )( {
          id: "G347q",
          name: "HomeDualRedirect",
          loader: async () => ( await Promise.all( [ n.e( "atlaskit~66e23772" ), n.e( "afp~af75c846" ), n.e( "vendors~4134d62c" ), n.e( 0 ), n.e( 24 ), n.e( 43 ), n.e( "confluence-home~b59ad437" ), n.e( "confluence-home-redirect~2f74cfb9" ) ] ).then( n.bind( null, "sSc+" ) ) ).HomeDualRedirect
        } ),
        s = Object( a.a )( {
          id: "Yu4ik",
          name: "GoToCorrectHome",
          loader: async () => ( await Promise.all( [ n.e( "atlaskit~66e23772" ), n.e( "afp~af75c846" ), n.e( "vendors~4134d62c" ), n.e( 0 ), n.e( 24 ), n.e( 43 ), n.e( "confluence-home~b59ad437" ), n.e( "confluence-home-redirect~2f74cfb9" ) ] ).then( n.bind( null, "sSc+" ) ) ).GoToCorrectHome
        } ),
        c = Object( a.a )( {
          id: "uff5c",
          name: "GoToConfluenceHomeIfEnabled",
          loader: async () => ( await Promise.all( [ n.e( "atlaskit~66e23772" ), n.e( "afp~af75c846" ), n.e( "vendors~4134d62c" ), n.e( 0 ), n.e( 24 ), n.e( 43 ), n.e( "confluence-home~b59ad437" ), n.e( "confluence-home-redirect~2f74cfb9" ) ] ).then( n.bind( null, "sSc+" ) ) ).GoToConfluenceHomeIfEnabled
        } ),
        i = Object( a.a )( {
          id: "ti8v6",
          name: "HomeBanner",
          loader: async () => ( await Promise.all( [ n.e( "atlaskit~66e23772" ), n.e( "afp~af75c846" ), n.e( "vendors~4134d62c" ), n.e( "confluence-home-changeboard~b59ad437" ) ] ).then( n.bind( null, "Sb+G" ) ) ).HomeBanner
        } )
    },
    o15q: function ( e, t, n ) {
      "use strict";
      n.d( t, "a", ( function () {
        return a
      } ) );
      const a = Symbol( "overview" )
    },
    o3ZS: function ( e, t, n ) {
      "use strict";
      n.d( t, "a", ( function () {
        return r
      } ) ), n.d( t, "b", ( function () {
        return o
      } ) );
      var a = n( "RfuI" );
      const r = Object( a.a )( {
          id: "IOdhW",
          name: "ExternalShareOnboardingLoader",
          loader: async () => {
            const {
              ExternalShareOnboarding: e
            } = await Promise.all( [ n.e( "atlaskit~66e23772" ), n.e( "afp~af75c846" ), n.e( "vendors~4134d62c" ), n.e( 0 ), n.e( 4 ), n.e( 5 ), n.e( "external-share-onboarding~b59ad437" ) ] ).then( n.bind( null, "Qpq/" ) );
            return e
          }
        } ),
        o = Object( a.a )( {
          id: "m8ufX",
          name: "PageShownPublicLinksEventLoader",
          loader: async () => {
            const {
              PageShownPublicLinksEvent: e
            } = await n.e( "external-share-page-shown-event~64bfb652" ).then( n.bind( null, "JGxU" ) );
            return e
          }
        } )
    },
    oAGf: function ( e, t, n ) {
      "use strict";
      var a = n( "ilPL" ),
        r = n( "yLtY" ),
        o = n( "rZXo" ),
        s = n( "H5qd" ),
        c = n.n( s );
      const i = c.a `fragment iconDetails on Icon{path width height isDefault}`,
        u = c.a `fragment spaceNodes on PaginatedSpaceList{nodes{id key name homepage{id title}icon{...iconDetails}type operations{operation targetType}}}${i}`,
        l = c.a `query spacesQuery($spaceKey:String$first:Int){selectedSpace:spaces(spaceKey:$spaceKey first:1){...spaceNodes}allSpaces:spaces(first:$first){...spaceNodes}}${u}`;
      n.d( t, "a", ( function () {
        return d
      } ) ), n.d( t, "b", ( function () {
        return E
      } ) );
      const d = "GET_SPACES",
        E = e => Object( o.f )( {
          query: l,
          variables: e,
          operationName: "spacesQuery",
          actionName: d,
          transformer: e => ( {
            selectedSpace: a.a.transformers.spaceResponseTransformer( e.selectedSpace ),
            allSpaces: a.a.transformers.spaceResponseTransformer( e.allSpaces )
          } ),
          normalizrSchema: {
            selectedSpace: r.a.spaces,
            allSpaces: r.a.spaces
          }
        } )
    },
    oL8P: function ( e, t, n ) {
      "use strict";
      var a = n( "Svze" );
      const r = {
          results: null,
          isRequesting: !1,
          hasFetched: !1,
          hasMore: !0,
          page: 0,
          willbedeleted: null,
          isFiltered: !1,
          filterText: void 0
        },
        o = Object( a.Record )( r );
      t.a = o
    },
    oZiO: function ( e, t, n ) {
      "use strict";
      var a = n( "Svze" ),
        r = n( "MswP" );
      var o = Object( a.Record )( {
        headings: null,
        header: null,
        content: null
      } );
      var s = new a.Record( {
        addonKey: null,
        moduleKey: null
      } );
      n.d( t, "a", ( function () {
        return i
      } ) );
      const c = Object( a.Record )( {
        routeOverrideEnabled: null
      } );
      class i extends( Object( a.Record )( {
        id: null,
        key: null,
        name: null,
        type: null,
        description: null,
        iconPath: null,
        isFavourite: null,
        isWatched: null,
        labels: [],
        homepageId: null,
        currentUserPermissions: null,
        operations: Object( a.List )( [] ),
        shortcutLinks: null,
        settings: new c( {} ),
        lookAndFeel: new o( {} ),
        theme: new s( {} )
      } ) ) {
        constructor( e ) {
          return super( e ), this.withMutations( t => ( e.currentUserPermissions && t.set( "currentUserPermissions", Object( a.List )( e.currentUserPermissions ) ), e.settings && t.set( "settings", new c( e.settings ) ), e.operations && t.set( "operations", Object( a.fromJS )( e.operations, ( e, t ) => a.Iterable.isIndexed( t ) ? t.toList() : new r.a( t ) ) ), e.lookAndFeel && t.set( "lookAndFeel", new o( e.lookAndFeel ) ), e.theme && t.set( "theme", new s( e.theme ) ), t ) )
        }
      }
    },
    oayO: function ( e, t, n ) {
      "use strict";
      var a = n( "zjfJ" ),
        r = n( "daKX" ),
        o = n( "BX6b" ),
        s = n( "H5qd" );
      const c = n.n( s ).a `mutation UpdateLocalStorageMutation($storageinput:LocalStorageInput!$stringKeys:[String]!$booleanKeys:[String]!){updateLocalStorage(localStorage:$storageinput){stringValues(keys:$stringKeys){key value}booleanValues(keys:$booleanKeys){key value}}}`;
      var i = n( "SRtI" ),
        u = n( "D9eQ" );
      const l = Object( r.a )( "storage-manager" );

      function d( e ) {
        if ( e && "code" in e ) switch ( e.code ) {
          case 22:
            return !0;
          case 1014:
            if ( "NS_ERROR_DOM_QUOTA_REACHED" === e.name ) return !0;
            break;
          default:
            return !1
        }
        return !1
      }

      function E( e ) {
        if ( !e ) return e;
        try {
          return JSON.parse( e )
        } catch ( _ ) {
          return e
        }
      }
      class p {
        constructor( e, t, n, r, {
          userId: s,
          isLicensed: p
        } ) {
          Object( a.a )( this, "_storageManager", void 0 ), Object( a.a )( this, "_delimiter", "#" ), Object( a.a )( this, "_namespace", void 0 ), Object( a.a )( this, "_userId", void 0 ), Object( a.a )( this, "_isLicensedUser", void 0 ), Object( a.a )( this, "getItem", e => {
            if ( !this._storageManager ) return l.warn `Local/session storage not supported on browser`, null;
            try {
              const t = Object( u.b )( e, `${this._namespace}.${e}` );
              let n = this._storageManager.getItem( t );
              if ( n || ( n = this._storageManager.getItem( e ), n && ( this._incrementLocalStorageMigrationEntries(), this.setItem( e, n ), this._storageManager.removeItem( "" + e ) ) ), n ) {
                let t;
                n = E( n );
                const a = /(\d+)#/;
                if ( "string" == typeof n && ( t = a.exec( n ) ) ) {
                  const a = n.replace( t[ 0 ], "" ),
                    r = parseInt( t[ 1 ], 10 );
                  return !isNaN( r ) && Date.now() > r ? ( this.removeItem( e ), null ) : a
                }
                return n
              }
              return null
            } catch ( t ) {
              return this._submitError( t, `Error getting value from storage manager for key:${e} : ${t}` ), null
            }
          } ), Object( a.a )( this, "getAndRemoveItem", e => {
            if ( !this._storageManager ) return l.warn `Local/session storage not supported on browser`, null;
            try {
              const t = this.getItem( e );
              return t ? ( this.removeItem( e ), t ) : null
            } catch ( t ) {
              return this._submitError( t, `Error getting and removing value from storage manager for key:${e} : ${t}` ), null
            }
          } ), Object( a.a )( this, "getAllItems", () => {
            const e = {};
            if ( !this._storageManager ) return l.warn `Local/session storage not supported on browser`, e;
            const t = this._storageManager.length;
            try {
              for ( let n = 0; n < t; n++ ) {
                const t = this._storageManager.key( n );
                if ( t && t.includes( this._namespace + "." ) ) {
                  const n = t.split( this._namespace + "." )[ 1 ],
                    a = this._storageManager.getItem( t );
                  e[ n ] = E( a )
                }
              }
              return e
            } catch ( n ) {
              return this._submitError( n, "Error getting all items from storage manager : " + n ), e
            }
          } ), Object( a.a )( this, "doesContain", e => {
            if ( !this._storageManager ) return l.warn `Local/session storage not supported on browser`, !1;
            try {
              const t = this.getItem( e );
              return "boolean" == typeof t ? !t : !!t
            } catch ( t ) {
              return this._submitError( t, `Error getting value from storage manager for key ${e}: ${t}` ), !1
            }
          } ), Object( a.a )( this, "getItemAsBoolean", e => {
            if ( !this._storageManager ) return l.warn `Local/session storage not supported on browser`, !1;
            try {
              const t = this.getItem( e );
              return !( t && "string" == typeof t && t.indexOf( "false" ) >= 0 ) && ( !!( t && "string" == typeof t && t.indexOf( "true" ) >= 0 ) || !!t )
            } catch ( t ) {
              return this._submitError( t, `Error getting value as boolean from storage manager for key ${e}: ${t}` ), !1
            }
          } ), Object( a.a )( this, "setItem", ( e, t, n ) => {
            if ( !this._storageManager ) return l.warn `Local/session storage not supported on browser`, null;
            try {
              const a = Object( u.b )( e, `${this._namespace}.${e}` );
              if ( "object" != typeof t && ( t = `${this._getPrefix(n)}${t}` ), t = JSON.stringify( t ), this._storageManager.setItem( a, t ), Object.values( i.a ).indexOf( e ) > -1 && window.GLOBAL_APOLLO_CLIENT && this._userId && this._isLicensedUser ) {
                const n = {
                  storageinput: {
                    stringValues: [ {
                      key: a,
                      value: t
                    } ]
                  },
                  stringKeys: [ a ],
                  booleanKeys: []
                };
                window.GLOBAL_APOLLO_CLIENT.mutate( {
                  mutation: c,
                  variables: n
                } ).catch( n => {
                  this._submitError( n, `Error updating user preferences with key ${e} and value ${t}: ${n}` )
                } )
              }
              return JSON.parse( t )
            } catch ( a ) {
              return d( a ) ? ( this._submitError( new Error( `Quota exceeded on key "${e}"` ) ), l.error `Storage quota exceeded when for key ${e} and value ${t}; original error: ${a}` ) : this._submitError( a, `Error setting value from storage manager with key ${e} and value ${t}: ${a}` ), null
            }
          } ), Object( a.a )( this, "removeItem", e => {
            if ( this._storageManager ) try {
              const t = Object( u.b )( e, `${this._namespace}.${e}` );
              return void this._storageManager.removeItem( "" + t )
            } catch ( t ) {
              return void this._submitError( t, `Error removing value from storage manager for key ${e}: ${t}` )
            } else l.warn `Local/session storage not supported on browser`
          } ), Object( a.a )( this, "initializeFromServer", e => {
            try {
              e.forEach( e => this._storageManager && this._storageManager.setItem( e.key, e.value ) )
            } catch ( t ) {
              d( t ) ? this._submitError( new Error( "Quota exceeded on intializing persisted values from server" ) ) : this._submitError( t, "Error setting value from storage manager while initializing persisted values from server: " + t )
            }
          } ), Object( a.a )( this, "_submitError", ( e, t ) => {
            t && l.error `${t}`, Object( o.c )().submitError( e, {
              attribution: "unknown"
            } )
          } ), Object( a.a )( this, "_incrementLocalStorageMigrationEntries", () => {
            Object( o.c )().incrementCounter( "localstorage-migration-entries" )
          } ), this._storageManager = e, this._namespace = s ? `${r}/${t}.${s}.${n}` : r + "/null", this._userId = s, this._isLicensedUser = null != p && p
        }
        _getPrefix( e ) {
          const t = 1e3 * ( e || 0 );
          return t ? Date.now() + t + this._delimiter : ""
        }
      }
      var f = n( "YeD4" ),
        m = n( "djVO" );
      n.d( t, "c", ( function () {
        return C
      } ) ), n.d( t, "a", ( function () {
        return I
      } ) ), n.d( t, "b", ( function () {
        return S
      } ) );
      const b = "object" == typeof window ? window.localStorage : {},
        O = "object" == typeof window ? window.sessionStorage : {},
        h = ( e, t ) => ( e => {
          try {
            return void 0 !== e && "setItem" in e && !!e.setItem
          } catch ( t ) {
            return !1
          }
        } )( e ) ? e : null,
        g = h( O ),
        T = h( b );
      let I, S;
      const C = async ( {
        userId: e,
        isLicensed: t
      } ) => {
        I = new p( T, f.d, f.c, f.a, {
          userId: e,
          isLicensed: t
        } ), S = new p( g, f.d, f.c, f.b, {
          userId: e,
          isLicensed: t
        } );
        let n = null;
        window.__USER_PREFERENCES__ ? n = window.__USER_PREFERENCES__ : window.GLOBAL_APOLLO_CLIENT && ( n = await ( async ( e, t, n ) => {
          if ( !n ) return null;
          try {
            const n = {
                stringKeys: t ? Object( u.a )( t ) : [],
                booleanKeys: []
              },
              {
                data: a,
                errors: r
              } = await e.query( {
                query: m.a,
                context: {
                  allowOnExternalPage: !0
                },
                variables: n
              } );
            if ( r ) return null;
            if ( a && a.localStorage ) return a.localStorage.stringValues
          } catch ( a ) {
            return null
          }
        } )( window.GLOBAL_APOLLO_CLIENT, e, t ) ), n && I.initializeFromServer( n )
      }
    },
    p0L4: function ( e, t, n ) {
      "use strict";
      n.d( t, "a", ( function () {
        return o
      } ) );
      var a = n( "zjfJ" ),
        r = n( "NnCn" );
      class o extends r.a {
        constructor( ...e ) {
          super( ...e ), Object( a.a )( this, "ignore", void 0 )
        }
      }
    },
    pPdq: function ( e, t, n ) {
      "use strict";
      n.d( t, "b", ( function () {
        return o
      } ) ), n.d( t, "a", ( function () {
        return i
      } ) ), n.d( t, "c", ( function () {
        return u
      } ) );
      var a = n( "hqKg" );
      const r = e => e.views.dashboard.viewModel,
        o = Object( a.createSelector )( r, e => e.get( "experimentFeatures" ) ),
        s = Object( a.createSelector )( r, e => {
          const t = e.get( "experimentFeatures" );
          try {
            return JSON.parse( t )
          } catch ( n ) {
            return {}
          }
        } ),
        c = ( e, t ) => t,
        i = Object( a.createSelector )( s, c, ( e, t ) => e[ t ] || null ),
        u = Object( a.createSelector )( r, e => e.get( "abTestCohorts" ) ),
        l = Object( a.createSelector )( r, e => {
          const t = e.get( "abTestCohorts" );
          try {
            return JSON.parse( t )
          } catch ( n ) {
            return {}
          }
        } );
      Object( a.createSelector )( l, c, ( e, t ) => e[ t ] || null )
    },
    pa2z: function ( e, t, n ) {
      "use strict";

      function a() {
        const e = window.__buildInfo || {};
        let {
          FRONTEND_VERSION: t
        } = e;
        t || ( t = "" );
        const n = /^([^-]+)-(.+)-(\d+)$/.exec( t );
        return {
          FRONTEND_VERSION: n ? t : "UNKNOWN-unknown-0",
          BRANCH_NAME: n ? n[ 2 ] : "unknown",
          BUILD_NUMBER: n ? parseInt( n[ 3 ], 10 ) : 0,
          BUILD_DATE: e.BUILD_DATE || 0,
          PUBLIC_PATH: e.PUBLIC_PATH || "unknown"
        }
      }
      n.d( t, "a", ( function () {
        return a
      } ) )
    },
    pclH: function ( e, t, n ) {
      "use strict";
      n.d( t, "a", ( function () {
        return r
      } ) );
      var a = n( "H5qd" );
      const r = n.n( a ).a `query WebPanelLocationQuery($location:String$contentId:ID$spaceKey:String){webPanels(location:$location contentId:$contentId key:$spaceKey){moduleKey completeKey html location label weight name}}`
    },
    pjHL: function ( e, t, n ) {
      "use strict";
      var a = n( "Czhu" ),
        r = n( "HbGN" ),
        o = n( "ERkP" ),
        s = n.n( o ),
        c = n( "1U1M" ),
        i = n( "cld1" ),
        u = n( "Ua4J" ),
        l = n( "ewfN" ),
        d = n( "UIW9" ),
        E = n( "XVWa" ),
        p = n( "7beP" ),
        f = n( "zjfJ" ),
        m = n( "lZoD" ),
        b = n( "5kGD" ),
        O = n( "WWAs" ),
        h = n( "FdGg" ),
        g = n( "X2PC" ),
        _ = n( "rTf/" ),
        T = n( "+FBq" );
      var I = n( "E2Aa" ),
        S = n( "KIs4" ),
        C = n( "Iy7w" ),
        A = n( "L21V" ),
        y = n( "fYnN" ),
        R = n.n( y ),
        v = n( "lbXe" ),
        P = n( "3IV/" ),
        N = n( "tnlP" ),
        j = n( "frZf" );
      const D = Object( C.a )( "div", {
          target: "e13oss2w0"
        } )( "padding:15px;background:", P.N30, ";text-align:center;" ),
        L = Object( v.a )()( class extends o.PureComponent {
          constructor( ...e ) {
            super( ...e ), Object( f.a )( this, "state", {
              isSupportedUserAgent: Object( N.d )(),
              isDesktopOverride: this.isDesktopSwitchRequired() || Object( N.c )() && this.props.isMobileReactViewPageEnabled
            } ), Object( f.a )( this, "onSwitchClick", () => {
              const {
                isMobileReactViewPageEnabled: e,
                getQueryParams: t,
                setQueryParams: n
              } = this.props;
              !this.isDesktopSwitchRequired() && e ? Object( N.b )() : R.a.remove( "confluence.mobile.desktop.switch", {
                path: j.a
              } );
              const a = t();
              "true" === a.desktop ? ( a.desktop = null, n( a, !0 ) ) : window.location.reload()
            } )
          }
          componentDidMount() {
            const {
              isMobileWebViewModalEnabled: e,
              createAnalyticsEvent: t
            } = this.props, {
              isSupportedUserAgent: n
            } = this.state;
            if ( n && e && t ) {
              t( {
                type: "sendOperationalEvent",
                data: {
                  source: "mobileWebView",
                  action: "visited",
                  actionSubject: "page"
                }
              } ).fire()
            }
          }
          isDesktopSwitchRequired() {
            const {
              getQueryParams: e
            } = this.props, {
              desktop: t
            } = e();
            return "true" === R.a.get( "confluence.mobile.desktop.switch" ) || "true" === t
          }
          render() {
            const {
              isSupportedUserAgent: e,
              isDesktopOverride: t
            } = this.state;
            return e && t ? s.a.createElement( D, null, s.a.createElement( A.b, {
              id: "return-to-mobile.nav.switch.to.mobile.text",
              defaultMessage: "You are viewing the desktop version of Confluence on a mobile supported device.",
              description: "Banner message displayed at top of screen when user is in desktop mode on a mobile device."
            } ), " ", s.a.createElement( "a", {
              href: "#",
              onClick: this.onSwitchClick
            }, s.a.createElement( A.b, {
              id: "return-to-mobile.nav.switch.to.mobile.action",
              defaultMessage: "Switch to Confluence Mobile",
              description: "Link text to switch back to mobile web mode, title cased"
            } ) ) ) : null
          }
        } );
      class w extends o.Component {
        render() {
          return s.a.createElement( S.a, null, ( {
            featureFlags: e
          } ) => {
            const t = e[ "confluence.frontend.mobile.web.modal" ],
              n = !0 === e[ "confluence.frontend.mobile.react.viewpage" ];
            return s.a.createElement( u.a.Consumer, null, ( {
              getQueryParams: e,
              setQueryParams: r
            } ) => s.a.createElement( L, Object( a.a )( {
              isMobileWebViewModalEnabled: t,
              isMobileReactViewPageEnabled: n,
              getQueryParams: e,
              setQueryParams: r
            }, this.props ) ) )
          } )
        }
      }
      var k = n( "U63R" ),
        U = n( "0Dc1" ),
        M = n( "Xnff" );
      const F = {},
        G = e => s.a.createElement( M.a, Object( a.a )( {
          experimentEnrollmentConfig: F
        }, e ) );
      var x = n( "l1C2" );
      const H = Object( C.a )( "div", {
        target: "e1xiljc50"
      } )( "width:100%;flex-flow:row wrap;", ( {
        disableMinWidth: e
      } ) => e ? "" : "min-width: 700px;", " @media print{width:100% !important;}" );
      H.displayName = "MainContentContainer";
      const V = Object( C.a )( "div", {
          target: "e1xiljc51"
        } )( {
          name: "1nc30jc",
          styles: "flex:1 100%;"
        } ),
        B = Object( C.a )( "div", {
          target: "e1xiljc52"
        } )( {
          name: "xbyf3i",
          styles: "margin-top:0;min-height:600px;box-sizing:border-box;clear:both;position:relative;width:100%;display:flex;flex:0 1 auto;"
        } ),
        K = Object( C.a )( "div", {
          target: "e1xiljc53"
        } )( e => Object( a.a )( Object( a.a )( Object( a.a )( {}, {
          background: "#fff",
          boxSizing: "border-box",
          verticalAlign: "top",
          width: "100%",
          minHeight: e.isPageLayout ? "initial" : "100vh"
        } ), e.topElementStyle ), {}, {
          padding: 0,
          width: e.shouldShowAside ? "65%" : "100%"
        }, e.bannerHeight > 0 && !e.isPageLayout ? {
          minHeight: `calc(100vh - ${e.bannerHeight}px)`
        } : {} ) ),
        W = Object( C.a )( "div", {
          target: "e1xiljc54"
        } )( e => Object( a.a )( Object( a.a )( {}, e.topElementStyle ), {}, {
          boxSizing: "border-box",
          padding: "20px",
          width: "35%",
          verticalAlign: "top"
        } ) );
      var q = {
        name: "1yuv4yh",
        styles: '.cp-container[role="dialog"]{z-index:350;}'
      };
      const $ = () => s.a.createElement( x.c, {
        styles: q
      } );
      var Y, z;
      const Q = "atl.general",
        J = "atl.footer",
        X = ( z = Y = class extends o.PureComponent {
          renderContent( {
            isPageLayout: e
          } ) {
            const {
              enableNavigation: t,
              disableMinWidth: n,
              screen: a,
              children: r,
              shouldShowAside: o,
              RightSidebarComponent: c,
              RolloutAnnouncementBanner: i
            } = this.props, u = {};
            if ( a )
              for ( const s in a ) a.hasOwnProperty( s ) && s.startsWith( "background" ) && ( u[ s ] = a[ s ] );
            return s.a.createElement( H, {
              disableMinWidth: n || !t,
              "data-test-id": "confluence-main-content"
            }, s.a.createElement( V, null, s.a.createElement( I.a, {
              location: Q
            } ) ), s.a.createElement( w, null ), s.a.createElement( b.a, {
              mode: "light"
            }, i && s.a.createElement( i, {
              priority: k.a.NORMAL
            } ), s.a.createElement( m.c, {
              to: [ O.a ]
            }, t => s.a.createElement( B, null, s.a.createElement( K, {
              id: "content-body",
              topElementStyle: u,
              shouldShowAside: o,
              bannerHeight: t.getTotalHeight(),
              isPageLayout: e
            }, r ), o && c ? s.a.createElement( W, {
              id: "content-sidebar",
              topElementStyle: u
            }, s.a.createElement( c, null ) ) : null ) ), s.a.createElement( V, null, s.a.createElement( I.a, {
              location: J
            } ) ) ) )
          }
          render() {
            const {
              navView: e,
              children: t,
              enableNavigation: n
            } = this.props;
            return s.a.createElement( o.Fragment, null, s.a.createElement( G, null, s.a.createElement( S.a, null, ( {
              featureFlags: a
            } ) => {
              const r = a[ T.b ],
                c = t ? s.a.createElement( h.a, {
                  attribution: g.a.BACKBONE
                }, this.renderContent( {
                  isPageLayout: r
                } ) ) : null;
              return s.a.createElement( o.Fragment, null, n ? s.a.createElement( _.a, {
                view: e
              }, c ) : c )
            } ) ), s.a.createElement( $, null ), s.a.createElement( U.a, {
              subject: E.b.mainLayout
            } ) )
          }
        }, Object( f.a )( Y, "displayName", "MainLayoutComponent" ), Object( f.a )( Y, "defaultProps", {
          enableNavigation: !0
        } ), z );
      var Z = n( "H5qd" );
      const ee = n.n( Z ).a `query MainLayoutQuery($spaceKey:String!){space(key:$spaceKey){id theme{name}lookAndFeel{content{screen{background backgroundColor backgroundImage backgroundPosition backgroundSize backgroundRepeat backgroundOrigin backgroundClip backgroundAttachment backgroundBlendMode}}}}}`;
      n.d( t, "a", ( function () {
        return ne
      } ) );
      const te = [ l.DISCOVER, l.ALL_UPDATES, l.POPULAR, l.RELEVANT ].map( e => e.name ),
        ne = Object( o.memo )( e => {
          var t, n, l, f;
          let {
            spaceKey: m,
            enableNavigation: b
          } = e, O = Object( r.a )( e, [ "spaceKey", "enableNavigation" ] );
          const {
            location: h,
            matchRoute: g
          } = Object( o.useContext )( u.a ), _ = h && g( h.pathname ), T = _ && te.includes( _.name ), I = Object( p.a )(), {
            data: S,
            error: C
          } = Object( c.d )( ee, {
            variables: {
              spaceKey: m
            },
            skip: !m
          } );
          return Object( o.useEffect )( () => {
            C && Object( i.getAnalyticsWebClient )().then( e => {
              e.sendOperationalEvent( {
                source: "ui",
                action: "apolloErrored",
                actionSubject: "mainLayout",
                attributes: Object( a.a )( {}, C )
              } )
            } )
          }, [ C ] ), s.a.createElement( o.Fragment, null, s.a.createElement( d.a, {
            subject: E.b.mainLayout
          } ), s.a.createElement( X, Object( a.a )( Object( a.a )( {}, O ), {}, {
            enableNavigation: !I && b,
            screen: null !== ( t = null == S || null === ( n = S.space ) || void 0 === n || null === ( l = n.lookAndFeel ) || void 0 === l || null === ( f = l.content ) || void 0 === f ? void 0 : f.screen ) && void 0 !== t ? t : void 0,
            shouldShowAside: T
          } ) ) )
        } )
    },
    pnCd: function ( e, t, n ) {
      "use strict";
      var a = n( "Svze" ),
        r = n( "37T6" );
      var o = Object( a.Record )( {
        id: null,
        by: null,
        when: null,
        message: null,
        friendlyWhen: null,
        number: null,
        syncRev: null,
        confRev: null
      } );
      var s = Object( a.Record )( {
          isAnonymous: !1,
          displayName: null,
          fullName: null,
          email: null,
          avatarUrl: null,
          isCurrentUser: null,
          currentUserCanFollow: null,
          currentUserIsFollowing: null,
          currentUserCanViewProfile: null,
          detailsPosition: null,
          detailsDepartment: null,
          detailsLocation: null,
          hasPersonalSpace: null,
          hasBlog: null,
          accountId: null,
          unknownUser: null
        } ),
        c = n( "oZiO" );
      const i = Object( a.Record )( {
        webui: null,
        webuiIsSpa: null
      } );
      class u extends( Object( a.Record )( {
        id: null,
        title: null,
        status: null,
        links: null,
        version: null,
        container: null,
        downloadUrl: null,
        mediaType: null,
        mediaTypeDescription: null,
        createdBy: null
      } ) ) {
        constructor( e ) {
          return super( e ), this.withMutations( t => ( e.links && t.set( "links", new i( e.links ) ), t ) )
        }
      }
      const l = Object( a.Record )( {
        operation: null,
        targetType: null
      } );
      class d extends( Object( a.Record )( {
        id: null,
        version: null,
        createdBy: null,
        createdDate: null,
        createdFriendly: null,
        createdByAuthor: null,
        numberOfLikes: null,
        numberOfComments: null,
        parentId: null,
        bodyView: null,
        bodyExportView: null,
        bodyEditorView: null,
        depthLevel: null,
        linkWebui: null,
        operations: Object( a.List )( [] ),
        webResourceKeys: [],
        likedBy: Object( a.List )( [] ),
        isLikedByCurrentUser: null
      } ) ) {
        constructor( e ) {
          return super( e ), this.withMutations( t => ( e.operations && t.set( "operations", Object( a.List )( e.operations.map( e => new l( e ) ) ) ), e.webResourceKeys && t.set( "webResourceKeys", e.webResourceKeys ), t ) )
        }
      }
      var E = n( "blf0" );
      n.d( t, "a", ( function () {
        return _
      } ) );
      const p = "FABRIC",
        f = "TINY_MCE",
        m = Object( a.fromJS )( {
          spaces: {},
          connectModules: {},
          lookAndFeelSettings: {},
          contents: {},
          comments: {},
          versions: {},
          users: {},
          spaceLabels: {},
          recentSpaces: {},
          files: {},
          labels: {}
        } ),
        b = ( e, t ) => {
          e = e.setIn( [ t.id, "depthLevel" ], t.depthLevel - 1 );
          for ( const n of e ) {
            const a = n[ 1 ];
            a.parentId && a.parentId === t.id && ( e = b( e, a ) )
          }
          return e
        },
        O = ( e, t, n, r = a.fromJS ) => {
          if ( !t.response || !t.response.entities || !t.response.entities.hasOwnProperty( n ) ) return e;
          const o = t.response.entities[ n ];
          for ( const a of Object.keys( o ) ) {
            const t = e.get( a );
            let n = r( o[ a ] );
            t && ( n = t.mergeDeepWith( ( e, t ) => null === t ? e : t, n ) ), e = e.set( a, n )
          }
          return e
        };
      const h = {
          contents: ( e, t ) => {
            switch ( e = O( e, t, "contents", e => new r.a( e ) ), t.type ) {
              case "CONTENT_FAILURE":
              case "EDITOR_CONTENT_V2_FAILURE":
                if ( t.error && 403 === t.error.statusCode ) {
                  let n = !1,
                    a = t.error && t.error.data;
                  if ( t.message && t.message.data && ( a = t.message && t.message.data ), a ) {
                    if ( ( a.errors || [] ).some( e => "confluence.space.restricted" === e.message.key ) ) return e;
                    n = ( a.errors || [] ).some( e => "confluence.content.restricted.inherited" === e.message.key )
                  }
                  e = e.set( t.options.contentId, new r.a( {
                    id: t.options.contentId,
                    isUnauthorized: !0,
                    hasInheritedRestrictions: n
                  } ) )
                }
                return e;
              case "QUICK_RELOAD_SUCCESS":
              case "CONTENT_SUCCESS":
                if ( "CONTENT_SUCCESS" === t.type ) {
                  var n;
                  const a = "v2" === ( null != ( n = t ) && null != ( n = n.response ) && null != ( n = n.properties ) && null != ( n = n.editor ) ? n.value : n ) ? p : f;
                  e = e.setIn( [ t.contentId, "editorVersion" ], a )
                }
                const a = t.response && t.response.lastFetchTime ? t.response.lastFetchTime : ( new Date ).getTime();
                return e.setIn( [ t.contentId, "lastFetchTime" ], a )
            }
            return e
          },
          files: ( e, t ) => O( e, t, "files", e => new u( e ) ),
          versions: ( e, t ) => ( e = O( e, t, "versions", e => new o( e ) ), "HANDLE_SYNCHRONY_VERSION_UPDATE" === t.type && ( e = e.setIn( [ t.contentId, "number" ], t.version ) ), e ),
          users: ( e, t ) => O( e, t, "users", e => new s( e ) ),
          spaces: ( e, t ) => {
            const n = e;
            switch ( ( e = O( e, t, "spaces", e => new c.a( e ) ) ) !== n && ( e = function ( e, t ) {
              const n = t.key || t.spaceKey;
              if ( !( n && t.response && t.response.entities && t.response.entities.spaces ) ) return e;
              const a = Object.keys( t.response.entities.spaces );
              if ( a.length ) {
                const t = a[ 0 ];
                n !== t && n.toLowerCase() === t.toLowerCase() && ( e = e.withMutations( e => {
                  e.set( n, e.get( t ) ).delete( t )
                } ) )
              }
              return e
            }( e, t ) ), t.type ) {
              case "SPACE_WATCH_ADD_SUCCESS":
                return e.mergeDeep( {
                  [ t.spaceKey ]: {
                    isWatched: !0
                  }
                } );
              case "SPACE_WATCH_DELETE_SUCCESS":
                return e.mergeDeep( {
                  [ t.spaceKey ]: {
                    isWatched: !1
                  }
                } );
              case "UPDATE_SPACE_TYPE_SUCCESS":
                return e.get( t.spaceKey ) ? e.mergeDeep( {
                  [ t.spaceKey ]: {
                    type: t.spaceType,
                    homepageId: void 0
                  }
                } ) : e;
              case "SPACE_HOME_CONTENT_SUCCESS":
                return e.get( t.spaceKey ) ? e.mergeDeep( {
                  [ t.spaceKey ]: {
                    homepageId: t.response.id
                  }
                } ) : e;
              case "SPACE_SHORTCUT_LINKS_SUCCESS":
                const n = t.response;
                return e.setIn( [ t.spaceKey, "shortcutLinks" ], n );
              case "REMOVE_SPACE_SHORTCUT_LINK_SUCCESS":
                return e.updateIn( [ t.spaceKey, "shortcutLinks" ], e => ( e = e || [] ).filter( e => e.id !== t.linkId ) );
              case "SPACE_UNFAVOURITE_SUCCESS":
                return e.get( t.key ) ? e.setIn( [ t.key, "isFavourite" ], !1 ) : e;
              case "SPACE_FAVOURITE_SUCCESS":
                return e.get( t.key ) ? e.setIn( [ t.key, "isFavourite" ], !0 ) : e;
              default:
                return e
            }
          },
          comments: ( e, t ) => ( e = O( e, t, "comments", e => new d( e ) ), "DELETE_COMMENT_SUCCESS" === t.type && ( e = ( ( e, t ) => {
            const n = e.get( t );
            for ( const a of e ) {
              let t = a[ 1 ];
              t.parentId === n.id && ( t = t.set( "parentId", n.parentId ), e = e.set( t.id, t ), e = b( e, t ) )
            }
            return e = e.delete( t )
          } )( e, t.contentId ) ), e ),
          connectModules: ( e, t ) => O( e, t, "connectModules", e => Object( a.fromJS )( e ) ),
          lookAndFeelSettings: ( e, t ) => O( e, t, "lookAndFeelSettings", e => Object( a.fromJS )( e ) ),
          labels: ( e, t ) => O( e, t, "labels", e => new E.b( e ) ),
          spaceLabels: ( e, t ) => O( e, t, "spaceLabels" ),
          recentSpaces: ( e, t ) => O( e, t, "recentSpaces" )
        },
        g = ( e, t, n ) => {
          const a = h[ n ];
          let r = e.get( n );
          return r = a( r, t ), e.set( n, r )
        };

      function _( e = m, t ) {
        return e.withMutations( e => {
          for ( const n of Object.keys( h ) ) e = g( e, t, n );
          return e
        } )
      }
    },
    pqYV: function ( e, t, n ) {
      "use strict";
      n.d( t, "b", ( function () {
        return r
      } ) ), n.d( t, "a", ( function () {
        return o
      } ) );
      const a = [ "/display", "/pages/viewpage.action", "/pages/resumedraft.action", "/plugins" ];

      function r( e ) {
        for ( const t of a )
          if ( e.startsWith( t ) ) return !1;
        return !0
      }

      function o( e, t, n, a, r, o ) {
        if ( "custom" === n || -1 !== r.indexOf( "/plugins/servlet/ac" ) || "comment" === n && -1 !== r.indexOf( "/customcontent" ) ) return null;
        if ( o && o.currentuser && o.currentuser.lastcontributed && "draft" === o.currentuser.lastcontributed.status ) return null;
        if ( "spacedesc" === n ) return 0 === r.indexOf( "/spaces" ) ? r : "/spaces/" + a;
        const s = r.split( "/" );
        if ( s.length >= 2 && "spaces" === s[ 1 ] ) return r;
        if ( 0 === n.indexOf( "com.atlassian.confluence.plugins.confluence-questions:" ) && "display" === s[ 1 ] ) return s[ 1 ] = "spaces", s.join( "/" );
        if ( !r || !a || "page" !== n && "blogpost" !== n && "comment" !== n ) return null;
        let c = e;
        return "comment" === n && ( c = function ( e ) {
            const t = e.match( /\?preview=%2F(.*?)%2F/ );
            return t ? t[ 1 ] : null
          }( r ) || t || function ( e ) {
            const t = e.match( /\?pageId=(.*?)&/ );
            return t ? t[ 1 ] : null
          }( r ) ),
          function ( e, t, n, a ) {
            const r = a.split( "/" ),
              o = "blogpost" === n || "comment" === n && 7 === r.length ? "blog" : "pages";
            let s = `/spaces/${t}/${o}`;
            if ( "display" === r[ 1 ] && r.length >= 4 ) {
              const t = e || "bySlug";
              "blog" === o && r.length >= 6 ? s += "/" + r.splice( 3, 3 ).join( "/" ) + "/" + t + "/" + r[ 3 ] : s += "/" + t + "/" + r.splice( 3 ).join( "/" )
            } else {
              !e && "spaces" === r[ 1 ] && r.length >= 5 && ( e = r[ 4 ] ), s += "/" + e || !1;
              const t = function ( e ) {
                let t = e.indexOf( "?pageId=" );
                return t = e.indexOf( -1 !== t ? "&" : "?" ), -1 !== t ? e.substring( t + 1 ) : ""
              }( a );
              t && ( s += "?" + t )
            }
            return s
          }( c, a, n, r )
      }
    },
    "q+Dn": function ( e, t, n ) {
      "use strict";
      n.d( t, "a", ( function () {
        return r
      } ) );
      var a = n( "H5qd" );
      const r = n.n( a ).a `query AllUpdatesQuery($first:Int$after:String){allUpdatesFeed(first:$first after:$after groupBy:[EDIT]){nodes{content{id type title links{webui}space{id homepage{id}}}lastUpdate{datetime type ...on CreateUpdate{user{...UserFragment}}...on EditUpdate{user{...UserFragment}version}...on CommentUpdate{user{...UserFragment}comment{id excerpt links{webui}}}}}pageInfo{hasNextPage endCursor}}}fragment UserFragment on Person{type displayName profilePicture{path}...on KnownUser{accountId}...on User{accountId}...on UnknownUser{accountId}}`
    },
    qY6u: function ( e, t, n ) {
      "use strict";
      n.d( t, "a", ( function () {
        return u
      } ) );
      var a = n( "Czhu" ),
        r = n( "7kiZ" ),
        o = n( "5frb" );
      const s = [ "LAST_MODIFIED_DATE", "TITLE" ],
        c = [ "ASC", "DESC" ],
        i = ( e, t ) => {
          if ( !e ) return;
          const n = e[ t ];
          return Array.isArray( n ) ? n[ 0 ] : n
        },
        u = ( {
          spaceKey: e,
          queryParams: t,
          userId: n,
          isLicensed: u
        } ) => {
          const l = i( t, "sortField" ) || "",
            d = i( t, "sortOrder" ) || "",
            E = {
              first: 24,
              searchText: i( t, "text" ) || "",
              filters: Object( a.a )( {
                spaces: {
                  spaceKeys: [ e ]
                }
              }, "worked-on" === i( t, "pageFilter" ) && n && u && {
                contributors: {
                  accountIds: [ n ]
                }
              } ),
              sortBy: {
                field: s.includes( l ) ? l : "LAST_MODIFIED_DATE",
                order: c.includes( d ) ? d : "DESC"
              }
            };
          return Promise.all( [ Object( r.a )( {
            query: o.a,
            variables: E
          } ) ] )
        }
    },
    qgmE: function ( e, t, n ) {
      "use strict";
      let a;
      n.d( t, "a", ( function () {
          return a
        } ) ),
        function ( e ) {
          e.HANDLE_SYNCHRONY_PUBLISH = "HANDLE_SYNCHRONY_PUBLISH", e.HANDLE_SYNCHRONY_VERSION_UPDATE = "HANDLE_SYNCHRONY_VERSION_UPDATE", e.SYNCHRONY_UPDATE_STATUS = "SYNCHRONY_UPDATE_STATUS", e.EDITOR_SYNCHRONY_RECOVER = "EDITOR_SYNCHRONY_RECOVER", e.EDITOR_SYNCHRONY_RECOVER_FAILURE = "EDITOR_SYNCHRONY_RECOVER_FAILURE", e.EDITOR_SYNCHRONY_RECOVER_SUCCESS = "EDITOR_SYNCHRONY_RECOVER_SUCCESS", e.EDITOR_SYNCHRONY_RECOVER_REQUEST = "EDITOR_SYNCHRONY_RECOVER_REQUEST", e.EDITOR_RECONCILE_CONTENT = "RECONCILE_CONTENT", e.EDITOR_RECONCILE_CONTENT_FAILURE = "RECONCILE_CONTENT_FAILURE", e.EDITOR_RECONCILE_CONTENT_SUCCESS = "RECONCILE_CONTENT_SUCCESS", e.EDITOR_RECONCILE_CONTENT_REQUEST = "RECONCILE_CONTENT_REQUEST", e.EDITOR_GET_SYNCHRONY_TOKEN = "EDITOR_GET_SYNCHRONY_TOKEN", e.EDITOR_GET_SYNCHRONY_TOKEN_FAILURE = "EDITOR_GET_SYNCHRONY_TOKEN_FAILURE", e.EDITOR_GET_SYNCHRONY_TOKEN_SUCCESS = "EDITOR_GET_SYNCHRONY_TOKEN_SUCCESS", e.EDITOR_GET_SYNCHRONY_TOKEN_REQUEST = "EDITOR_GET_SYNCHRONY_TOKEN_REQUEST", e.FETCH_RECONCILED_EDITOR_CONTENT_SUCCESS = "FETCH_RECONCILED_EDITOR_CONTENT_SUCCESS", e.FETCH_RECONCILED_EDITOR_CONTENT_FAILURE = "FETCH_RECONCILED_EDITOR_CONTENT_FAILURE", e.CONNECTION_OFFLINE = "CONNECTION_OFFLINE", e.CONNECTION_ONLINE = "CONNECTION_ONLINE"
        }( a || ( a = {} ) )
    },
    qhEF: function ( e, t, n ) {
      "use strict";
      n.d( t, "a", ( function () {
        return s
      } ) );
      var a = n( "Czhu" ),
        r = n( "zjfJ" ),
        o = n( "lZoD" );
      class s extends o.a {
        constructor( e ) {
          super(), Object( r.a )( this, "showMultipleFlags", e => {
            let t = this.state.nextFlagId;
            const n = e.map( e => Object( a.a )( Object( a.a )( {}, e ), {}, {
              id: t++
            } ) );
            return this.setState( {
              flags: n,
              nextFlagId: t
            } )
          } ), Object( r.a )( this, "showFlag", e => {
            let t;
            return this.setState( ( {
              flags: n,
              nextFlagId: r
            } ) => {
              const o = t => t.id === e.id;
              if ( n.some( o ) ) {
                return {
                  flags: n.map( t => o( t ) ? e : t ),
                  nextFlagId: r
                }
              }
              return t = Object( a.a )( Object( a.a )( {}, e ), {}, {
                id: e.id || r
              } ), {
                flags: [ t, ...n ],
                nextFlagId: r + 1
              }
            } ).then( () => t )
          } ), Object( r.a )( this, "updateFlag", ( e, t ) => this.setState( n => {
            const r = [ ...n.flags ];
            for ( let o = 0; o < r.length; o++ ) {
              const n = r[ o ];
              n.id === e && ( r[ o ] = Object( a.a )( Object( a.a )( {}, n ), t ) )
            }
            return {
              flags: r
            }
          } ) ), Object( r.a )( this, "hideFlag", e => this.setState( t => ( {
            flags: t.flags.filter( t => t.id !== e )
          } ) ) ), Object( r.a )( this, "hideAllFlags", () => this.setState( {
            flags: []
          } ) ), Object( r.a )( this, "showFlagOfType", ( e, t ) => ( {
            id: n,
            title: a,
            description: r,
            actions: o,
            onClose: s
          } ) => this.showFlag( {
            id: n,
            type: e,
            title: a,
            description: r,
            close: t,
            actions: o,
            onClose: s
          } ) ), Object( r.a )( this, "showSuccessFlag", this.showFlagOfType( "success", "auto" ) ), Object( r.a )( this, "showInfoFlag", this.showFlagOfType( "info" ) ), Object( r.a )( this, "showWarningFlag", this.showFlagOfType( "warning" ) ), Object( r.a )( this, "showErrorFlag", this.showFlagOfType( "error" ) ), this.state = {
            flags: e || [],
            nextFlagId: e ? e.length : 0
          }
        }
      }
    },
    qjoD: function ( e, t, n ) {
      "use strict";
      n.d( t, "a", ( function () {
        return i
      } ) );
      var a = n( "3U3H" ),
        r = n( "lTsX" ),
        o = n( "daKX" ),
        s = n( "cH76" );
      const c = Object( o.a )( "PreloadedQueryLink" ),
        i = () => new a.ApolloLink( ( e, t ) => {
          const {
            operationName: n,
            variables: a
          } = e;
          return n ? new r.a( r => {
            let o = null;
            return Object( s.a )().claim( {
              name: n,
              variables: a
            } ).then( a => {
              a ? ( c.debug `Query matched: ${n} ${a}`, r.next( a ), r.complete() ) : o = t( e ).subscribe( {
                next: r.next.bind( r ),
                error: r.error.bind( r ),
                complete: r.complete.bind( r )
              } )
            } ), () => {
              o && o.unsubscribe()
            }
          } ) : t( e )
        } )
    },
    "r+LL": function ( e, t, n ) {
      "use strict";
      n.d( t, "a", ( function () {
        return a
      } ) ), n.d( t, "b", ( function () {
        return r
      } ) );
      const a = {
          CONTENT_METADATA_JIRA: "content-metadata-jira",
          CONTENT_METADATA_ATTACHMENTS: "content-metadata-attachments",
          CONTENT_METADATA_PAGE_RESTRICTIONS: "content-metadata-page-restrictions",
          DRAFT_STATUS_LOZENGE: "draft-status-lozenge",
          EDIT_PAGE_METADATA_RESTRICTIONS: "rte-button-restrictions",
          INVITE_TO_EDIT: "inviteToEdit",
          ACTION_MENU_RESOLVED_INLINE_COMMENTS: "view-resolved-comments",
          ACTION_MENU_PAGE_RESTRICTIONS: "action-page-permissions-link",
          PAGE_FAVOURITE: "page-favourite",
          LINK_TO_THIS_PAGE: "link-to-page-link",
          VIEW_ATTACHMENTS_LINK: "view-attachments-link",
          ANALYTICS_ADDON_BYLINE: "com.addonengine.analytics__analytics-content-byline-item",
          ANALYTICS_ADDON_ACTIONS_MENU: "com.addonengine.analytics__analytics-content-menu-item"
        },
        r = {
          PAGE_FAVOURITE: "confluence.sections.page.temp:pagefavourite",
          EDIT_BUTTON_PAGE: "confluence.sections.page.temp:edit-page",
          EDIT_BUTTON_BLOGPOST: "confluence.sections.page.temp:edit-blogpost",
          WATCH_BUTTON: "com.atlassian.confluence.plugins.watch-button:watch",
          SHARE_BUTTON: "com.atlassian.confluence.plugins.share-page:share",
          INVITE_TO_EDIT: "com.atlassian.confluence.plugins.confluence-invite-to-edit:share",
          PAGE_UNFAVOURITE: "confluence.sections.page.temp:pageunfavourite",
          ADMIN_THEME: "confluence.sections.admin:theme",
          ADMIN_COLOUR_SCHEME: "confluence.sections.admin:colourscheme",
          ADMIN_CUSTOM_PAGE_CONTENT: "confluence.sections.admin:custompagecontent",
          CREATE_PAGE: "com.atlassian.confluence.plugins.confluence-create-content-plugin:header-create-dialog",
          CREATE_NEW_PAGE: "com.atlassian.confluence.plugins.confluence-create-content-plugin:create-blank-page",
          CREATE_NEW_BLOGPOST: "com.atlassian.confluence.plugins.confluence-create-content-plugin:create-blog-post",
          SPACE_TAB_OVERVIEW: "com.atlassian.confluence.plugins.confluence-frontend-support:overview-link",
          SPACE_TAB_PAGES: "com.atlassian.confluence.plugins.confluence-space-ia:spacebar-pages",
          SPACE_TAB_BLOG: "com.atlassian.confluence.plugins.confluence-space-ia:spacebar-blogs",
          SPACE_TAB_QUESTIONS: "com.atlassian.confluence.plugins.confluence-questions:cq.space.sidebar.link",
          SPACE_TAB_CALENDARS: "com.atlassian.confluence.extra.team-calendars:space-calendar-sidebar-link",
          SPACE_TAB_CONNECT_ADDON: "com.atlassian.plugins.atlassian-connect-plugin",
          SPACE_SETTINGS: "com.atlassian.confluence.plugins.confluence-frontend-support:space-tools-link"
        }
    },
    r3UE: function ( e, t, n ) {
      "use strict";
      n.d( t, "a", ( function () {
        return r
      } ) );
      var a = n( "H5qd" );
      const r = n.n( a ).a `query ContentScreenQuery($spaceKey:String!){space(key:$spaceKey){id theme{name}lookAndFeel{content{screen{background backgroundColor backgroundImage backgroundPosition backgroundSize backgroundRepeat backgroundOrigin backgroundClip backgroundAttachment backgroundBlendMode layer{background backgroundColor backgroundImage backgroundPosition backgroundSize backgroundRepeat backgroundOrigin backgroundClip backgroundAttachment backgroundBlendMode width height}gutterTop gutterRight gutterBottom gutterLeft}}}}}`
    },
    r9hL: function ( e, t, n ) {
      "use strict";
      var a = n( "Czhu" ),
        r = n( "ERkP" ),
        o = n.n( r ),
        s = n( "jCA7" ),
        c = n( "cGYM" );

      function i( e ) {
        const t = "string" == typeof e ? e + "." : "";
        return e => {
          class n extends r.Component {
            constructor() {
              super(), this.triggerAnalytics = this.triggerAnalytics.bind( this )
            }
            triggerAnalytics( e, n ) {
              if ( "string" != typeof e || !e ) return;
              const r = this.context.store.getState().session.analytics.get( "searchSessionId" ),
                o = r ? Object( a.a )( Object( a.a )( {}, {
                  searchReferrerId: Object( c.a )( r )
                } ), n ) : n;
              this.context.store.dispatch( ( ( e, t ) => ( {
                type: "ANALYTICS_TRIGGER",
                meta: {
                  analytics: {
                    name: e,
                    data: t
                  }
                }
              } ) )( t + e, o ) )
            }
            render() {
              return o.a.createElement( e, Object( a.a )( {
                triggerAnalytics: this.triggerAnalytics
              }, this.props ) )
            }
          }
          return n.displayName = `WithAnalytics(${e.displayName||e.name||""})`, n.WrappedComponent = e, n.contextTypes = {
            store: s.storeShape.isRequired
          }, n
        }
      }
      n.d( t, "a", ( function () {
        return i
      } ) )
    },
    "rTf/": function ( e, t, n ) {
      "use strict";
      var a = n( "Czhu" ),
        r = n( "HbGN" ),
        o = n( "ERkP" ),
        s = n.n( o ),
        c = n( "FdGg" ),
        i = n( "X2PC" ),
        u = n( "U63R" ),
        l = n( "+l6p" ),
        d = n( "RRDH" ),
        E = n( "RfuI" );
      const p = Object( E.a )( {
        id: "7Kpz1",
        name: "PageLayoutLoader",
        loader: async () => ( await Promise.all( [ n.e( "atlaskit~66e23772" ), n.e( "afp~af75c846" ), n.e( "vendors~4134d62c" ), n.e( 0 ), n.e( 13 ), n.e( 55 ), n.e( "page-layout-navigation~b59ad437" ) ] ).then( n.bind( null, "al/+" ) ) ).PageLayout
      } );
      var f = n( "Aqh1" ),
        m = n( "UIW9" ),
        b = n( "XVWa" ),
        O = n( "HDhw" ),
        h = n( "9IcS" ),
        g = n( "6z9Z" ),
        _ = n( "A79P" ),
        T = n( "3VMZ" );
      const I = ( {
        isNav2: e,
        view: t,
        children: n
      } ) => {
        const a = Object( o.useContext )( g.a ),
          r = Object( o.useCallback )( e => a.abort( {
            name: e,
            reason: "navigation container view changed"
          } ), [ a ] ),
          c = Object( o.useCallback )( e => a.start( {
            name: e,
            timeout: _.a.NAVIGATION_LOAD
          } ), [ a ] ),
          i = ( e => e === h.b ? h.c : e )( t );
        return Object( o.useLayoutEffect )( () => {
          const t = e && T.a.NAV2_PRODUCT,
            n = e ? T.a.NAV2_CONTAINER : T.a.APP_NAV_CONTAINER,
            a = e ? T.a.NAV2_ADMIN : T.a.APP_NAV_ADMIN;
          switch ( i ) {
            case h.c:
              c( n ), t && r( t ), r( a );
              break;
            case h.e:
            case h.d:
              t && c( t ), r( n ), r( a );
              break;
            case h.a:
              c( a ), t && r( t ), r( n )
          }
        }, [ e, i, c, r ] ), Object( o.useLayoutEffect )( () => {
          const t = e ? T.a.NAV2_GLOBAL : T.a.APP_NAV_GLOBAL;
          c( t )
        }, [ e, c ] ), s.a.createElement( o.Fragment, null, n )
      };
      n.d( t, "a", ( function () {
        return C
      } ) );
      const S = ( {
          view: e,
          standalone: t,
          children: n
        } ) => {
          const {
            isNav2: a,
            isNewLayout: r
          } = Object( o.useContext )( f.a ), E = a ? l.a : r ? p : d.a;
          return s.a.createElement( I, {
            view: e,
            isNav2: a
          }, s.a.createElement( m.a, {
            subject: b.b.navigation,
            subjectId: "NavigationLoading"
          } ), s.a.createElement( E, {
            view: e,
            standalone: t,
            priority: u.a.IMMEDIATE
          }, n && !t ? s.a.createElement( c.a, {
            attribution: i.a.DISCO
          }, n ) : null, s.a.createElement( O.a, null ) ) )
        },
        C = Object( o.memo )( e => {
          let {
            standalone: t
          } = e, n = Object( r.a )( e, [ "standalone" ] );
          return t ? s.a.createElement( S, Object( a.a )( Object( a.a )( {}, n ), {}, {
            standalone: !0
          } ) ) : s.a.createElement( f.b, {
            renderWriteToUserPrefs: !0
          }, () => s.a.createElement( S, Object( a.a )( {}, n ) ) )
        } );
      C.displayName = "NavigationIntegration"
    },
    rZXo: function ( e, t, n ) {
      "use strict";
      var a = n( "ilPL" ),
        r = n( "yLtY" ),
        o = n( "DIZP" ),
        s = n( "40XH" ),
        c = n( "8q0p" ),
        i = n( "H5qd" ),
        u = n.n( i );
      const l = u.a `fragment viewPageContentDetailsFragment on Content{id type status title}`,
        d = u.a `query ViewPageQuery($contentId:ID$versionOverride:Int$embeddedContentRender:String){content(id:$contentId version:$versionOverride embeddedContentRender:$embeddedContentRender){nodes{id type status title metadata{frontend{spaFriendly commentsSpaFriendly}}properties(key:"editor"){nodes{id key value}}operations{operation targetType}space{id key name}history{createdDate}ancestors{...viewPageContentDetailsFragment}}}}${l}`,
        E = u.a `query templateEditorContent($contentId:String!){template(contentTemplateId:$contentId){templateId name description labels{id name prefix}space{id key name}body{atlas_doc_format{value representation}}}}`;
      n.d( t, "f", ( function () {
        return p
      } ) ), n.d( t, "a", ( function () {
        return m
      } ) ), n.d( t, "d", ( function () {
        return b
      } ) ), n.d( t, "c", ( function () {
        return O
      } ) ), n.d( t, "e", ( function () {
        return h
      } ) ), n.d( t, "b", ( function () {
        return g
      } ) );
      const p = ( {
        query: e,
        operationName: t,
        variables: n,
        actionName: a,
        transformer: r,
        normalizrSchema: o,
        errorsFilter: s,
        batch: c = !0,
        fetchPolicy: i
      } ) => {
        const u = {
          type: "APOLLO_QUERY",
          query: e,
          operationName: t,
          variables: n,
          actionName: a,
          transformer: r,
          schema: o,
          errorsFilter: s,
          batch: c
        };
        return i && ( u.fetchPolicy = i ), u
      };

      function f( e ) {
        return e.every( e => e.path && -1 !== e.path.indexOf( "likes" ) || e.message && -1 !== e.message.indexOf( "likes" ) ) ? null : e
      }
      const m = e => p( {
          query: d,
          variables: e,
          operationName: "content",
          actionName: [ "CONTENT" ],
          transformer: e => a.a.transformers.contentsWithBodyResponseTransformer( e.content ),
          normalizrSchema: r.a.content,
          batch: !1,
          errorsFilter: f
        } ),
        b = e => p( {
          query: o.a,
          variables: e,
          operationName: "spaceForBaseSpaceQuery",
          actionName: "SPACE_INFO",
          transformer: e => a.a.transformers.spaceResponseTransformer( e.spaces ),
          normalizrSchema: r.a.spaces
        } ),
        O = e => p( {
          query: s.a,
          variables: e,
          operationName: "editorContent",
          actionName: "EDITOR_CONTENT_V2",
          transformer: e => a.a.transformers.editorContentsWithBodyResponseTransformerV2( e.content ),
          normalizrSchema: r.a.content,
          batch: !1,
          fetchPolicy: "no-cache"
        } ),
        h = e => p( {
          query: E,
          variables: e,
          operationName: "templateEditorContent",
          actionName: "GET_TEMPLATE_EDITOR_CONTENT",
          transformer: e => e.template,
          batch: !1,
          fetchPolicy: "network-only"
        } ),
        g = () => p( {
          query: c.a,
          operationName: "featureDiscovery",
          actionName: "DISCOVERED_FEATURES",
          batch: !0,
          transformer: e => e.featureDiscovery
        } )
    },
    "rc7/": function ( e, t, n ) {
      "use strict";
      n.d( t, "a", ( function () {
        return c
      } ) ), n.d( t, "b", ( function () {
        return i
      } ) );
      var a = n( "Czhu" ),
        r = n( "ERkP" ),
        o = n.n( r ),
        s = n( "Eoya" );

      function c( e ) {
        return o.a.createElement( s.a, Object( a.a )( {
          isKnownError: i
        }, e ) )
      }

      function i( e ) {
        if ( e ) {
          const {
            graphQLErrors: n
          } = e;
          if ( n && n.length > 0 )
            for ( const {
                extensions: e
              } of n )
              if ( e ) {
                var t;
                const n = null != ( t = e ) && null != ( t = t.data ) ? t.authorized : t;
                if ( !1 === n ) return !0;
                if ( null == n && "403" === String( e.statusCode ) ) return !0
              }
        }
        return !1
      }
    },
    ryzd: function ( e, t, n ) {
      "use strict";
      var a = n( "Svze" );
      const r = Object( a.Record )( {
        result: Object( a.List )( [] ),
        nextPageOffset: null,
        isRequesting: !1,
        hasFetched: !1,
        hasMore: !0,
        page: 0,
        isFiltered: !1
      } );
      t.a = r
    },
    rzmQ: function ( e, t, n ) {
      "use strict";
      n.r( t );
      var a = n( "U63R" );
      n.d( t, "Priority", ( function () {
        return a.a
      } ) );
      var r = n( "axEa" );
      n.d( t, "getTaskQueue", ( function () {
        return r.a
      } ) );
      var o = n( "nPRB" );
      n.d( t, "TaskQueue", ( function () {
        return o.a
      } ) );
      var s = n( "RfuI" );
      n.d( t, "Loadable", ( function () {
        return s.a
      } ) );
      var c = n( "WSZS" );
      n.d( t, "useLoadableAncestors", ( function () {
        return c.a
      } ) );
      var i = n( "NGEh" );
      n.d( t, "preloadLoadable", ( function () {
        return i.c
      } ) ), n.d( t, "getRenderedOnServerSide", ( function () {
        return i.a
      } ) );
      var u = n( "kHPA" );
      n.d( t, "defer", ( function () {
        return u.a
      } ) )
    },
    slcR: function ( e, t, n ) {
      "use strict";
      n.r( t );
      var a = n( "Czhu" ),
        r = n( "pqYV" ),
        o = n( "OC+J" ),
        s = n( "Kttv" ),
        c = n.n( s );
      const i = [ {
          typeMatches: [ /^content-type-attachment-(.*)$/, /icon-file-multimedia/, /icon-file-image/, /icon-file-(unknown)/, /icon-file-[.?]*/ ],
          subTypeMatches: {
            audio: /\.(wma|wmv|ram|mp3)$/i,
            code: /\.(xml|html|js|css|java|jar|war|ear)$/i,
            document: /\.(docx|dotx|doc|dot)$/i,
            image: /\.(gif|jpeg|jpg|png)$/i,
            pdf: /\.(pdf)$/i,
            presentation: /\.(pptx|ppsx|potx|pot|ppt|pptm)$/i,
            spreadsheet: /\.(xlt|xls|xlsm|xlsx|xlst)$/i,
            video: /\.(mov|mpeg|mpg|mp4|avi)$/i,
            zip: /\.(zip)$/i
          },
          getType: e => e ? "attachment-" + e : "attachment"
        }, {
          typeMatches: [ /^content-type-spacedesc$/, /aui-iconfont-space-default/, /aui-iconfont-homepage/ ],
          type: "space"
        }, {
          typeMatches: [ /^content-type-(.*)$/, /aui-iconfont-(page|blogpost)-default/, /aui-iconfont-page-(blogpost)/, /aui-iconfont-(comment)/ ],
          getType: e => e
        }, {
          typeMatches: /aui-iconfont-comment/,
          type: "comment"
        }, {
          typeMatches: /aui-iconfont-like/,
          type: "like"
        }, {
          typeMatches: [ /aui-iconfont-space-personal/, /aui-iconfont-user/ ],
          type: "user"
        }, {
          typeMatches: /^admin-item$/,
          type: "admin"
        }, {
          typeMatches: /^quick-search-content-type-(.*)$/,
          type: "custom"
        }, {
          typeMatches: [ /^question-item$/, /icon-question/ ],
          type: "question"
        }, {
          typeMatches: /^calendar-item$/,
          type: "calendar"
        } ],
        u = ( e, t ) => {
          if ( !t || !e ) return null;
          for ( const n in t ) {
            if ( t[ n ].exec( e ) ) return n
          }
        },
        l = ( e, t ) => {
          for ( const n of i ) {
            let a;
            if ( Array.isArray( n.typeMatches ) ? n.typeMatches.find( t => {
                const n = t.exec( e );
                return n && ( a = n ), n
              } ) : a = n.typeMatches.exec( e ), a ) {
              const e = n.type || n.getType( ...Array.from( a ).slice( 1 ) ),
                r = u( t, n.subTypeMatches );
              return r ? `${e}-${r}` : e
            }
          }
          return null
        },
        d = [ "like", "comment" ],
        E = e => {
          const t = l( e );
          return t && d.includes( t ) ? "activity-" + t : null
        };
      n.d( t, "recentlyUpdatedResponseTransformer", ( function () {
        return h
      } ) ), n.d( t, "recentlyVisitedContentResponseTransformer", ( function () {
        return T
      } ) ), n.d( t, "recentWorkResponseTransformer", ( function () {
        return I
      } ) ), n.d( t, "favouritedContentResponseTransformer", ( function () {
        return S
      } ) ), n.d( t, "allSpacesResponseTransformer", ( function () {
        return A
      } ) ), n.d( t, "searchSpaceResponseTransformer", ( function () {
        return y
      } ) ), n.d( t, "spaceResponseTransformer", ( function () {
        return R
      } ) ), n.d( t, "spaceThemeResponseTransformer", ( function () {
        return P
      } ) ), n.d( t, "favouriteSpacesResponseTransformer", ( function () {
        return N
      } ) ), n.d( t, "spacePaginationResponseTransformer", ( function () {
        return j
      } ) ), n.d( t, "recentSpacesResponseTransformer", ( function () {
        return D
      } ) ), n.d( t, "spaceLabelResponseTransformer", ( function () {
        return L
      } ) ), n.d( t, "spaceHomeResponseTransformer", ( function () {
        return w
      } ) ), n.d( t, "contentMetadataResponseTransformer", ( function () {
        return U
      } ) ), n.d( t, "contentWithBodyResponseTransformer", ( function () {
        return x
      } ) ), n.d( t, "expandedAncestors", ( function () {
        return H
      } ) ), n.d( t, "contentsWithBodyResponseTransformer", ( function () {
        return V
      } ) ), n.d( t, "listOfcontentWithBodyResponseTransformer", ( function () {
        return B
      } ) ), n.d( t, "editorContentWithBodyResponseTransformer", ( function () {
        return K
      } ) ), n.d( t, "publishContentTransformer", ( function () {
        return W
      } ) ), n.d( t, "editorContentsWithBodyResponseTransformerV2", ( function () {
        return q
      } ) ), n.d( t, "editorContentWithBodyResponseTransformerV2", ( function () {
        return Y
      } ) ), n.d( t, "renderContentResponseTransformer", ( function () {
        return z
      } ) ), n.d( t, "favouriteResponseTransformer", ( function () {
        return Q
      } ) ), n.d( t, "unFavouriteResponseTransformer", ( function () {
        return J
      } ) ), n.d( t, "relationSourcesTransformer", ( function () {
        return X
      } ) ), n.d( t, "watchedSpacesTransformer", ( function () {
        return Z
      } ) ), n.d( t, "streamResponseTransformer", ( function () {
        return ee
      } ) ), n.d( t, "followUnfollowResponseTransformer", ( function () {
        return te
      } ) ), n.d( t, "spaceLogoResponseTransformer", ( function () {
        return ne
      } ) ), n.d( t, "connectModuleTransformer", ( function () {
        return ae
      } ) ), n.d( t, "lookAndFeelTransformer", ( function () {
        return re
      } ) ), n.d( t, "quickReloadResponseTransformer", ( function () {
        return oe
      } ) ), n.d( t, "configure", ( function () {
        return se
      } ) ), n.d( t, "htmlTransformer", ( function () {
        return ce
      } ) ), n.d( t, "searchSpaceTransformer", ( function () {
        return ie
      } ) ), n.d( t, "searchPageTransformer", ( function () {
        return ue
      } ) );
      let p = {};
      const f = e => null == e ? e : String( e ),
        m = ( e, t ) => 0 === e.indexOf( t ) ? e.slice( t.length ) : e,
        b = e => {
          const t = {};
          if ( !e ) return t;
          if ( e instanceof Array )
            for ( const n of e ) t[ n.key ] = {
              key: n.key,
              value: JSON.parse( n.value )
            };
          else Object.keys( e ).filter( e => !e.startsWith( "_" ) ).forEach( n => {
            const a = e[ n ].value;
            t[ n ] = {
              key: n,
              value: a
            }
          } );
          return t
        },
        O = ( e, t ) => {
          const n = ( e => {
              const t = f( e.id );
              if ( "page" === e.contentType ) {
                const n = e.entity && e.entity.latestVersionId;
                if ( n && n !== t ) return f( n )
              }
              return t
            } )( e ),
            a = m( e.urlPath, t ),
            o = Object( r.a )( n, null, e.contentType, e.entity.spaceKey, a ) || a;
          return {
            id: n,
            type: e.contentType,
            iconType: l( e.iconCss || "", e.title ) || e.contentType,
            title: e.title,
            links: {
              webui: o,
              webuiIsSpa: Object( r.b )( o ),
              viewChangesLink: e.viewChangesLink
            },
            version: {
              id: "" + n,
              by: {
                isAnonymous: !e.entity.lastModifier
              },
              when: e.lastModificationDate,
              message: e.updateDescription
            },
            summary: e.summary,
            iconCssClass: e.iconCss,
            iconPath: e.iconPath
          }
        };
      const h = ( e, t, n ) => ( {
          changeSets: e.changeSets.map( e => ( ( e, t ) => {
            const n = e.profilePictureInfo.downloadPath,
              r = "http" === ( o = n ).substring( 0, 4 ) || "//" === o.substring( 0, 2 ) ? n : `${p.contextPath}${n}`;
            var o;
            const {
              modifier: s,
              currentUser: c,
              canViewProfile: i
            } = e;
            let u = {
              isAnonymous: !0,
              avatarUrl: r
            };
            return s && ( u = Object( a.a )( Object( a.a )( {}, u ), {}, {
              isAnonymous: !1,
              displayName: s.fullName,
              email: s.email,
              isCurrentUser: c,
              currentUserCanViewProfile: i,
              accountId: s.accountId,
              unknownUser: s.unknownUser
            } ) ), {
              user: u,
              recentUpdates: e.recentUpdates.map( e => O( e, t ) )
            }
          } )( e, n ) )
        } ),
        g = e => {
          const t = e.links || e._links,
            {
              space: n
            } = e;
          return {
            id: f( e.id ),
            type: e.type,
            iconType: l( e.iconCssClass || e.iconCss || "", e.title ) || e.type,
            title: e.title,
            links: {
              webui: t.webui,
              webuiIsSpa: Object( r.b )( t.webui )
            },
            space: n
          }
        },
        _ = ( e = {} ) => {
          const {
            metadata: {
              currentuser: {
                favourited: t
              } = {}
            } = {}
          } = ( {} = e );
          let n, a;
          return t && ( n = t && t.isFavourite, a = t && t.favouritedDate ), {
            isFavourite: n,
            favouritedDate: a
          }
        },
        T = e => ( {
          results: ( e.results || e.nodes ).map( e => Object( a.a )( Object( a.a )( {}, g( e ) ), {}, {
            userContext: Object( a.a )( {
              lastSeen: e.metadata.currentuser.viewed.lastSeen
            }, _( e ) )
          } ) )
        } ),
        I = e => ( {
          results: ( e.results || e.nodes ).map( e => {
            const t = e.metadata.currentuser;
            return Object( a.a )( Object( a.a )( {}, g( e ) ), {}, {
              userContext: Object( a.a )( {
                lastModified: t.lastcontributed ? t.lastcontributed.when : t.lastmodified ? t.lastmodified.version.when : null,
                contentStatus: t.lastcontributed ? t.lastcontributed.status : null
              }, _( e ) )
            } )
          } )
        } ),
        S = e => ( {
          results: ( e.results || e.nodes ).map( e => Object( a.a )( Object( a.a )( {}, g( e ) ), {}, {
            userContext: Object( a.a )( {}, _( e ) )
          } ) )
        } ),
        C = e => {
          const t = e._expandable && e._expandable.homepage ? e._expandable.homepage.substring( "/rest/api/content/".length ) : e.homepage && e.homepage.id,
            n = {
              id: e.id ? "" + e.id : e.id,
              key: e.key,
              name: e.name,
              type: e.type
            };
          return t && ( n.homepageId = "" + t ), e.icon && e.icon.path && ( n.iconPath = e.icon.path ), e.isFavourite && ( n.isFavourite = e.isFavourite ), e.isWatched && ( n.isWatched = e.isWatched ), e.operations && ( n.operations = e.operations, n.currentUserPermissions = e.operations.filter( e => "space" === e.targetType ).map( e => e.operation ) ), e.lookAndFeel && ( n.lookAndFeel = e.lookAndFeel ), e.settings && ( n.settings = e.settings ), e.theme && ( n.theme = P( e.theme ) ), n
        },
        A = e => {
          const t = [];
          return e.spaces.map( e => {
            t.push( C( e ) )
          } ), {
            results: t
          }
        },
        y = e => ( {
          results: ( e.results || e.nodes ).map( e => C( e.space ) )
        } ),
        R = e => {
          const t = [];
          return ( e.results || e.nodes ).map( e => {
            const n = e.metadata && e.metadata.labels && ( e.metadata.labels.results || e.metadata.labels.nodes );
            t.push( C( Object( a.a )( Object( a.a )( {}, e ), {}, {
              isFavourite: n && n.some( e => "my" === e.prefix && ( "favourite" === e.name || "favorite" === e.name ) )
            } ) ) )
          } ), {
            results: t
          }
        },
        v = /^ac:(.*)__(.*)-remote-theme$/,
        P = e => {
          const t = v.exec( e.themeKey );
          return {
            addonKey: t[ 1 ],
            moduleKey: t[ 2 ]
          }
        },
        N = e => ( {
          results: ( e.results || e.nodes ).map( e => {
            const t = e.space && e.space.metadata && e.space.metadata.labels && ( e.space.metadata.labels.results || e.space.metadata.labels.nodes );
            return C( Object( a.a )( Object( a.a )( {}, e.space ), {}, {
              isFavourite: t && t.some( e => "my" === e.prefix && ( "favourite" === e.name || "favorite" === e.name ) )
            } ) )
          } )
        } ),
        j = ( e, t = {} ) => {
          const n = [];
          return ( e.results || e.nodes ).map( e => {
            const r = Object( a.a )( Object( a.a )( {}, e.space ), t );
            n.push( C( r ) )
          } ), {
            results: n
          }
        },
        D = e => ( {
          results: e.map( e => {
            return {
              key: e.key,
              name: e.name,
              iconPath: e.logo || ( t = e.icon, 0 === t.indexOf( "/wiki" ) ? t.replace( "/wiki", "" ) : t )
            };
            var t
          } )
        } ),
        L = e => {
          const t = {},
            n = [];
          return e.map( e => {
            t[ e ] = {
              name: e
            }, n.push( e )
          } ), {
            result: n,
            entities: {
              spaceLabels: t
            }
          }
        },
        w = e => {
          const t = e.results || e.nodes;
          if ( t ) {
            const e = t[ 0 ];
            let n = e && e.homepage ? e.homepage : null;
            const r = !n && e && e._expandable && e._expandable.homepage;
            if ( "string" == typeof r ) {
              const e = r.match( /\/(\d+)$/ );
              e && ( n = {
                id: f( e[ 1 ] )
              } )
            }
            return Object( a.a )( Object( a.a )( {}, U( n ) ), M( n ) )
          }
          return {}
        },
        k = e => void 0 === e ? null : e,
        U = e => {
          if ( !e ) return {};
          const {
            metadata: t = {}
          } = e, n = e ? f( e.id ) : null, a = e.properties && e.properties.nodes || t.properties, r = {
            id: n,
            isContentSPAFriendly: k( t.frontend && t.frontend.spaFriendly ),
            areCommentsSPAFriendly: k( t.frontend && t.frontend.commentsSpaFriendly ),
            properties: b( a ),
            title: e.title,
            type: e.type,
            operations: e.operations,
            currentUserPermissions: e.operations ? e.operations.map( e => e.operation ) : null
          };
          return e.version && ( r.version = F( e ).version ), r
        },
        M = e => {
          if ( !e ) return {};
          const {
            body: t
          } = e;
          return {
            body: {
              id: e ? f( e.id ) : null,
              html: t && t.view && t.view.value,
              cssTags: t && t.view && t.view.webresource.tags.css,
              jsUris: t && t.view && t.view.webresource.uris.js
            }
          }
        },
        F = ( e, t ) => e ? {
          version: {
            id: "" + ( t = f( t || e.id ) ),
            by: e.version && e.version.by && Object( o.a )( e.version.by ),
            when: e.version && e.version.when,
            friendlyWhen: e.version && e.version.friendlyWhen,
            number: e.version && e.version.number,
            syncRev: e.version && e.version.syncRev,
            confRev: e.version && e.version.confRev
          }
        } : {},
        G = e => {
          const t = {
            createdDate: void 0,
            createdBy: void 0
          };
          if ( !e || !e.history ) return t;
          const {
            createdDate: n,
            createdBy: a
          } = e.history;
          if ( n && ( t.createdDate = n ), a ) {
            const e = Object( o.a )( a );
            void 0 !== e.isAnonymous && ( t.createdBy = e )
          }
          return t
        },
        x = e => {
          if ( !e ) return {};
          const t = e.content || e;
          return Object( a.a )( Object( a.a )( Object( a.a )( Object( a.a )( Object( a.a )( {}, U( t ) ), M( t ) ), {}, {
            ancestors: t.ancestors
          }, G( t ) ), F( t ) ), {}, {
            space: t.space
          } )
        },
        H = e => e ? {
          results: e.ancestors
        } : {},
        V = e => {
          const t = e && ( e.results || e.nodes );
          return t && t.length ? x( t[ 0 ] ) : null
        },
        B = e => {
          const t = e && ( e.results || e.nodes );
          return t && t.length ? t.map( x ) : null
        },
        K = ( e, t ) => {
          if ( !e ) return {};
          let n = f( t.substring( t.lastIndexOf( "/" ) + 1 ).split( "." )[ 0 ] );
          return e && e.id && ( n = e.id ), {
            _originalResponse: e,
            id: n,
            title: e.title,
            version: {
              id: "" + n,
              number: parseInt( e.pageVersion, 10 )
            },
            spaceKey: e.spaceKey
          }
        },
        W = ( e, t ) => e ? Object( a.a )( Object( a.a )( {
          id: e.id,
          createdDate: e.history && e.history.createdDate,
          createdBy: e.history && e.history.createdBy && Object( o.a )( e.history.createdBy )
        }, F( e ) ), {}, {
          type: e.type,
          title: e.title
        } ) : {},
        q = e => {
          const t = e && ( e.results || e.nodes );
          return t && t.length ? Y( t[ 0 ] ) : null
        },
        $ = {
          value: {
            content: [ {
              type: "paragraph",
              content: []
            } ],
            type: "doc",
            version: 1
          }
        };
      const Y = ( e, t ) => {
          if ( !e ) return {};
          let n;
          e.id ? n = e.id : t && ( n = f( t.substring( t.lastIndexOf( "/" ) + 1 ).split( "." )[ 0 ] ) );
          const r = {};
          r.atlas_doc_format = function ( e ) {
            if ( !e.value || 0 === e.value.length ) return $;
            try {
              return {
                value: JSON.parse( e.value )
              }
            } catch ( t ) {
              return {
                value: e.value,
                isADFContentInvalid: !0
              }
            }
          }( e.body.atlas_doc_format );
          return Object( a.a )( Object( a.a )( Object( a.a )( {
            id: n,
            title: e.title,
            editorContent: Object( a.a )( Object( a.a )( {}, e.body ), r ),
            type: e.type,
            isUnpublishedDraft: !e.history.createdBy,
            ancestors: e.ancestors,
            space: e.space,
            links: e.links,
            currentUserPermissions: e.operations && e.operations.map( e => e.operation )
          }, G( e ) ), F( e ) ), {}, {
            appearancePublished: e.appearancePublished.nodes,
            appearanceDraft: e.appearanceDraft.nodes,
            labels: e.metadata.labels
          } )
        },
        z = ( e, t ) => {
          if ( !e ) return {};
          return {
            id: f( t.substring( t.lastIndexOf( "/" ) + 1 ).split( "." )[ 0 ] ),
            renderedPreviewContent: e
          }
        },
        Q = ( e, t ) => {
          if ( t ) {
            return {
              entities: {
                spaces: {
                  [ t.substr( t.lastIndexOf( "/" ) + 1 ) ]: {
                    isFavourite: !0
                  }
                }
              }
            }
          }
          return {
            entities: {
              spaces: {}
            }
          }
        },
        J = ( e, t ) => {
          if ( t ) {
            return {
              entities: {
                spaces: {
                  [ t.substr( t.lastIndexOf( "/" ) + 1 ) ]: {
                    isFavourite: !1
                  }
                }
              }
            }
          }
          return {
            entities: {
              spaces: {}
            }
          }
        },
        X = e => e.results.map( ( {
          source: {
            displayName: e,
            accountId: t,
            profilePicture: {
              path: n
            } = {}
          },
          relationData: {
            createdDate: a,
            friendlyCreatedDate: r
          }
        } ) => ( {
          avatarUrl: n,
          displayName: e,
          accountId: t,
          createdDate: a,
          friendlyCreatedDate: r
        } ) ),
        Z = e => ( {
          results: ( e.results || e.nodes ).map( e => C( Object( a.a )( Object( a.a )( {}, e.space ), {}, {
            isWatched: !0
          } ) ) )
        } ),
        ee = ( e, t, n ) => {
          if ( e.streamItems ) {
            const t = e.streamItems.map( e => {
              const {
                id: t,
                containerId: o,
                type: s,
                title: c,
                url: i,
                author: u,
                friendlyDate: d,
                iconCssClass: p = "icon aui-icon aui-icon-small aui-iconfont-page-blogpost",
                iconPath: f,
                contentCssClass: b = "content-type-page",
                counts: O,
                numberOfLikes: h,
                numberOfComments: g,
                viewers: _ = []
              } = e, {
                displayName: T,
                fullName: I,
                avatarUrl: S,
                anonymous: C,
                accountId: A,
                unknownUser: y
              } = u, R = m( i, n );
              return {
                id: t,
                title: c,
                type: s,
                iconType: l( p || "", c ) || s,
                links: {
                  webui: R,
                  webuiIsSpa: Object( r.b )( R )
                },
                createdBy: {
                  isAnonymous: C,
                  displayName: T || I,
                  avatarUrl: S,
                  accountId: A,
                  unknownUser: y
                },
                friendlyDate: d,
                numberOfLikes: h,
                numberOfComments: g,
                cardCounts: O.map( e => Object( a.a )( Object( a.a )( {}, e ), {}, {
                  iconType: E( e.cssClass )
                } ) ),
                iconCssClass: p,
                iconPath: f,
                contentCssClass: b,
                userContext: {},
                viewers: _
              }
            } );
            e.resultList = t
          }
          return e
        },
        te = ( e, t ) => {
          const n = t.match( /(follow|unfollow)user.action\?accountId=(.*?)&/ );
          if ( n && 3 === n.length ) {
            const e = "follow" === n[ 1 ];
            return {
              accountId: n[ 2 ],
              currentUserIsFollowing: e
            }
          }
          return {}
        },
        ne = ( e, t, n, a ) => ( {
          key: a.spaceKey,
          iconPath: e.logoDownloadPath,
          name: e.name
        } ),
        ae = ( e, t, n, a ) => ( e.productContext = JSON.parse( e.productCtx ), e.uniqueKey || ( e.uniqueKey = e.ns ), e ),
        re = e => {
          let t = e[ e.selected ];
          return t || ( t = e.global ), t.lookAndFeelId = c()( JSON.stringify( e ) ), t
        },
        oe = e => {
          let t = null;
          const n = [],
            a = [];
          if ( e.page && e.page.editor ) {
            const a = e.page.editor;
            t = {
              accountId: a.accountId,
              displayName: a.displayName,
              avatarUrl: a.profilePicture.path
            }, n.push( t )
          }
          return e.comments && e.comments.forEach( e => {
            const t = e.commenter,
              r = {
                accountId: t.accountId,
                displayName: t.displayName,
                avatarUrl: t.profilePicture.path
              };
            n.push( r ), a.push( {
              user: r,
              comment: e.comment
            } )
          } ), {
            users: n,
            lastPersonUpdatePage: t,
            comments: a,
            lastFetchTime: e.time
          }
        },
        se = e => {
          p = Object( a.a )( Object( a.a )( {}, p ), e )
        },
        ce = e => e.text().then( e => e ),
        ie = e => e.results.map( e => ( {
          key: e.space.key,
          name: e.space.name
        } ) ),
        ue = e => e.results.map( e => ( {
          title: e.title,
          id: e.id
        } ) )
    },
    syT9: function ( e, t, n ) {
      "use strict";
      n.d( t, "a", ( function () {
        return r
      } ) ), n.d( t, "b", ( function () {
        return s
      } ) );
      const a = /query\s+(\w+).*?\{/,
        r = {
          data: null
        };

      function o( e ) {
        return "OperationDefinition" === e.kind
      }

      function s( e ) {
        var t;
        if ( "string" != typeof e ) return null === ( t = ( e.definitions || [] ).filter( o ).map( e => e.name ).filter( e => null != e )[ 0 ] ) || void 0 === t ? void 0 : t.value; {
          const t = e.match( a );
          if ( t ) return t[ 1 ]
        }
      }
    },
    t0Ff: function ( e, t, n ) {
      "use strict";
      n.d( t, "a", ( function () {
        return s
      } ) );
      var a = n( "H5qd" ),
        r = n.n( a ),
        o = n( "uMk2" );
      const s = r.a `query EditionQuery{...EditionFragment}${o.a}`
    },
    tZF8: function ( e, t, n ) {
      "use strict";
      n.d( t, "a", ( function () {
        return s
      } ) );
      var a = n( "H5qd" ),
        r = n.n( a ),
        o = n( "Bijv" );
      const s = r.a `query ByLineQuery($contentId:ID$versionOverride:Int$embeddedContentRender:String){content(id:$contentId version:$versionOverride embeddedContentRender:$embeddedContentRender){nodes{id history{createdBy{...byLineUserFragment}contributors{publishers{users{...byLineUserFragment}}}}version{message by{...byLineUserFragment}friendlyWhen number confRev syncRev}}}}${o.a}`
    },
    tjUo: function ( e, t, n ) {
      "use strict";
      n.r( t );
      n( "j7xK" );
      var a = n( "ERkP" ),
        r = n.n( a ),
        o = n( "7nmT" ),
        s = n.n( o ),
        c = n( "O65l" ),
        i = n.n( c ),
        u = n( "1dcs" ),
        l = n( "cld1" ),
        d = n( "pa2z" ),
        E = n( "liLY" ),
        p = n( "zjfJ" ),
        f = n( "daKX" );
      class m {
        constructor( e ) {
          Object( p.a )( this, "hasMatched", !1 ), Object( p.a )( this, "name", void 0 ), Object( p.a )( this, "onMatch", void 0 ), Object( p.a )( this, "pattern", void 0 ), this.name = e.name, this.onMatch = e.onMatch, this.pattern = e.pattern
        }
        getHasMatched() {
          return this.hasMatched
        }
        getName() {
          return this.name
        }
        process( e ) {
          const t = e.match( this.pattern );
          if ( t ) {
            this.hasMatched = !0;
            const n = this.onMatch( e, t );
            return m.logger.debug `Processed ${e} => ${n}`, n
          }
          return this.hasMatched = !1, e
        }
      }
      Object( p.a )( m, "logger", Object( f.a )( m ) );
      const b = ( e, t ) => {
          for ( const n of t ) {
            const t = n.process( e );
            if ( n.getHasMatched() ) return [ t, !0 ]
          }
          return [ e, !1 ]
        },
        O = ( e, t ) => {
          const [ , , n, a ] = t;
          return `${n}${a}`
        },
        h = [ new m( {
          name: "chunkHashProcessor",
          pattern: /(^.*)\/([\d\w\-\.]+)\.(?:[a-zA-Z0-9]{8})\-[\d\w]+(\.map\.js|\.js)/,
          onMatch: O
        } ), new m( {
          name: "preloaderChunkHashProcessor",
          onMatch: O,
          pattern: /(^.*)\/([\d\w\-\.]+)\~(?:[a-zA-Z0-9]{8})\-[\d\w]+(\.map\.js|\.js)/
        } ), new m( {
          name: "runtimeChunkProcessor",
          onMatch: O,
          pattern: /(^.*)\/(runtime~[\d\w\-\.]+)\.[\d\w]+\-[\d\w]+(\.map\.js|\.js)/
        } ), new m( {
          name: "splitChunkProcessor",
          onMatch: O,
          pattern: /(^.*)\/([\d\w\-\.]+)\~(?:[a-zA-Z0-9]{8}).(?:[a-zA-Z0-9]{8})\-[\d\w]+(\.map\.js|\.js)/
        } ) ],
        g = e => {
          const [ t, n ] = b( e, h );
          if ( n ) return t;
          try {
            if ( e.includes( "~" ) ) return [ ...e.split( "~" )[ 0 ].split( "/" ).slice( -1 ), ...e.split( "~" )[ 1 ].split( "." ).slice( 2 ) ].join( "." );
            if ( e.includes( "query-preloader" ) ) return [ "query-preloader", ...e.split( "query-preloader." )[ 1 ].split( "." ).slice( 1 ) ].join( "." )
          } catch ( _ ) {}
          return "unknown"
        },
        T = Object( f.a )( "sanitise-endpoints" ),
        I = [ new m( {
          name: "forceUpdateJsonProcessor",
          onMatch: e => "force-update.json",
          pattern: /(^.*)\/force-update.json/
        } ), new m( {
          name: "cgraphqlQueryProcessor",
          onMatch: e => "cgraphql",
          pattern: /(^.*)\/cgraphql\?q=(.*)/
        } ), new m( {
          name: "inProductMessageEventProcessor",
          onMatch: e => "in-product-messages",
          pattern: /(^.*)\/gateway\/api\/engage-targeting\/api\/v2\/user\/[a-zA-Z0-9/-]+\/in-product-messages/
        } ), new m( {
          name: "enagementProviderEventProcessor",
          onMatch: e => "v1/event",
          pattern: /https\:\/\/mgas\.prod\.public\.atl\-paas\.net\/v1\/event/
        } ) ],
        S = e => {
          const [ t, n ] = b( e, I );
          return n ? t : ( T.warn `Unsanitised URL: ${t}`, "unknown" )
        };
      var C = n( "GKWs" ),
        A = n( "nR8X" ),
        y = n( "NJGo" ),
        R = n( "hb7u" );
      const v = e => {
          if ( "object" != typeof e || !e ) return {};
          const t = e => {
            const n = {};
            return Object.entries( e ).forEach( ( [ e, a ] ) => {
              if ( Array.isArray( a ) ) n[ e ] = a.map( e => JSON.stringify( e ) ).join( "," );
              else if ( "object" == typeof a && a ) {
                const r = t( a );
                Object.entries( r ).forEach( ( [ t, a ] ) => {
                  n[ `${e}:${t}` ] = a
                } )
              } else n[ e ] = a
            } ), n
          };
          return t( e )
        },
        P = ( {
          stop: e
        } ) => {
          const t = {};
          if ( Object.entries( Object( y.a )() ).forEach( ( [ e, n ] ) => {
              t[ "cfp63Durations:" + e ] = n
            } ), t.isActiveTab = "visible" === document.visibilityState, 0 === R.a.transitionId ) {
            var n;
            const a = window.performance.getEntriesByType( "navigation" );
            if ( a.length ) {
              const e = a[ 0 ];
              null != e.transferSize && ( t.pageLoadedFromCache = 0 === e.transferSize )
            }
            t.sw = window.APDEX_ATTRIBUTES_FROM_SW || {}, t.ssr = Boolean( window.__SSR_RENDERED__ ), t.ssrTraceId = window.__SSR_TRACE_ID__ || null, t.ssrDurations = window.__SSR_MEASURES__ || {}, t.ssrInteractions = ( null === ( n = window ) || void 0 === n ? void 0 : n.__SSR_INTERACTIONS__ ) || {};
            const r = v( {
                cacheStatus: Object( A.a )( e )
              } ),
              {
                scripts: o,
                totalSize: s,
                cachedCount: c
              } = ( e => {
                const t = {
                  scripts: new Array,
                  totalSize: 0,
                  cachedCount: 0
                };
                return window.performance.getEntriesByType( "resource" ).forEach( n => {
                  const a = n;
                  "script" !== a.initiatorType || a.responseEnd > e || ( t.cachedCount += a.transferSize > 0 ? 0 : 1, t.totalSize += a.encodedBodySize, t.scripts.push( {
                    name: a.name.split( "/" ).pop() || "",
                    start: a.startTime,
                    end: a.responseEnd,
                    size: a.encodedBodySize
                  } ) )
                } ), t
              } )( e );
            t.criticalAssets = {
              cachedRate: c / o.length * 100,
              count: o.length,
              size: s
            };
            for ( const [ e, n ] of Object.entries( r ) ) t[ e ] = n
          }
          return t
        },
        N = () => ( {
          initial: Object( R.b )()
        } ),
        j = e => {
          const {
            cloudId: t,
            environment: n,
            featureFlags: a,
            shard: r
          } = e, o = {
            custom: v( {
              buildInfo: Object( d.a )(),
              cloudId: t,
              environment: n,
              shard: r,
              ssr: Boolean( window.__SSR_RENDERED__ )
            } )
          }, s = {
            plugins: [ P ],
            featureFlags: Object.keys( a ).filter( e => a[ e ] )
          }, c = {
            plugins: [ N ]
          };
          return {
            all: o,
            [ C.BMEventsType.PAGE_LOAD ]: s,
            [ C.BMEventsType.CUSTOM ]: c
          }
        };
      let D = !1;
      var L = n( "KIs4" ),
        w = n( "8TdO" ),
        k = n( "oayO" ),
        U = n( "9m+Y" ),
        M = n( "NGEh" ),
        F = n( "AeT/" ),
        G = n( "Al9w" ),
        x = n( "aWzz" ),
        H = n.n( x ),
        V = n( "gwLK" ),
        B = n( "uDfI" ),
        K = n( "lZoD" ),
        W = n( "rClA" ),
        q = n( "DQZQ" ),
        $ = n( "6z9Z" ),
        Y = n( "hpu0" ),
        z = n( "Vgb+" ),
        Q = n( "ke97" ),
        J = n( "a0gl" ),
        X = n( "xFWH" );
      let Z;
      ! function ( e ) {
        e.CONTROL = "control", e.NOT_ENROLLED = "not-enrolled", e.VARIATION = "variation"
      }( Z || ( Z = {} ) );
      var ee = n( "dW02" ),
        te = n( "kC4U" );
      const ne = Object( ee.d )( async e => {
        const t = `/gateway/api/xflow/${e}/fetch-instance-users`;
        try {
          const e = await Object( te.a )( t, {
            credentials: "same-origin"
          } );
          if ( e.ok ) {
            return ( await e.json() ).map( e => ( {
              idType: ee.b.ATLASSIAN_ACCOUNT_ID,
              id: e.id,
              displayName: e.displayName
            } ) )
          }
          throw new Error( `Unexpected response from ${t} ${e.status} ${e.statusText}` )
        } catch ( n ) {
          throw new Error( `Unable to fetch ${t} ${n.message}` )
        }
      } );
      var ae = n( "7kiZ" ),
        re = n( "YNn/" );

      function oe() {
        return Object( ae.a )( {
          query: re.a
        } )
      }
      const se = Object( ee.c )( async () => {
          const {
            data: e
          } = await oe(), t = [];
          if ( function ( e ) {
              return e && "object" == typeof e && e.siteConfiguration
            }( e ) ) {
            const {
              tenantId: n,
              siteTitle: a
            } = e.siteConfiguration;
            t.push( {
              id: n,
              displayName: a,
              type: ee.a.ATLASSIAN_CLOUD_ID
            } )
          }
          return {
            type: ee.a.ATLASSIAN_CLOUD_ID,
            containers: t
          }
        } ),
        ce = ( {
          children: e
        } ) => {
          var t;
          const {
            cloudId: n,
            locale: o,
            featureFlagClient: s
          } = Object( J.a )(), c = Object( a.useMemo )( () => Object( l.getAnalyticsWebClient )(), [] ), i = ( e => e.getVariantValue( "confluence.frontend.cross-flow-frontend.enable.all.products", {
            default: Z.NOT_ENROLLED,
            oneOf: Object.values( Z ),
            shouldTrackExposureEvent: !0
          } ) === Z.VARIATION )( s ), u = Object( a.useCallback )( ( {
            targetProduct: e
          } ) => i || e === X.b.JIRA_SERVICE_DESK, [ i ] );
          return "true" === ( null === ( t = document.querySelector( "meta[name='ajs-marketing-opt-out']" ) ) || void 0 === t ? void 0 : t.getAttribute( "content" ) ) ? e : r.a.createElement( Q.a, {
            cloudId: n,
            analyticsClient: c,
            locale: o,
            plugins: [ ne, se ],
            shouldUseCFFEOverride: u
          }, e )
        };
      var ie = n( "zfsr" ),
        ue = n( "JxFu" ),
        le = n( "w7pu" ),
        de = n( "HEM+" ),
        Ee = n( "EfWO" ),
        pe = n.n( Ee ),
        fe = n( "Jygk" ),
        me = n.n( fe ),
        be = n( "kD2R" ),
        Oe = n( "nWyW" ),
        he = n( "y9AH" ),
        ge = n( "FdGg" ),
        _e = n( "X2PC" ),
        Te = n( "jh8q" ),
        Ie = n( "0nUU" );
      var Se = n( "gEna" ),
        Ce = n( "cptV" ),
        Ae = n( "U63R" ),
        ye = n( "7a7X" ),
        Re = n( "uHdW" ),
        ve = n( "M5Dj" ),
        Pe = n( "gQ5V" ),
        Ne = n( "qhEF" ),
        je = n( "dGuD" ),
        De = n( "L21V" );
      const Le = Object( De.f )( {
          offlineTitle: {
            id: "network-status-listener.offline.title",
            defaultMessage: "We couldn't load this page"
          },
          offlineDescription: {
            id: "network-status-listener.offline.description",
            defaultMessage: "Check your internet connection, refresh the page, and try again."
          }
        } ),
        we = Object( De.g )( ( {
          flags: e,
          intl: t
        } ) => ( Object( a.useEffect )( () => {
          e.showErrorFlag( {
            title: t.formatMessage( Le.offlineTitle ),
            description: t.formatMessage( Le.offlineDescription )
          } )
        }, [ e, t ] ), null ) ),
        ke = Object( De.f )( {
          ratelimitedTitle: {
            id: "network-status-listener.limit-reached.title",
            defaultMessage: "Content failed to load",
            description: "Title of a message box, explaining that rate limiting has happened"
          },
          ratelimitedDescription: {
            id: "network-status-listener.limit-reached.description",
            defaultMessage: "Rate limit reached. Wait a minute or so while the system resets, then",
            description: "Contents of message box prompting user to reload the page in one minute"
          },
          ratelimitedRefreshLinkText: {
            id: "network-status-listener.limit-reached.refresh-link",
            defaultMessage: "refresh",
            description: "Text of a link that user can click on, concatenated with ratelimitedDescription"
          },
          ratelimitedDescriptionEnding: {
            id: "network-status-listener.limit-reached.description-ending",
            defaultMessage: "the page",
            description: "End of prompt, concatenated with ratelimitedRefreshLinkText"
          }
        } );

      function Ue() {
        window.location.reload()
      }
      const Me = Object( De.g )( ( {
          flags: e,
          intl: t
        } ) => ( Object( a.useEffect )( () => {
          e.showErrorFlag( {
            id: "ratelimited",
            title: t.formatMessage( ke.ratelimitedTitle ),
            description: r.a.createElement( a.Fragment, null, t.formatHTMLMessage( ke.ratelimitedDescription ), " ", r.a.createElement( "a", {
              onClick: Ue
            }, t.formatMessage( ke.ratelimitedRefreshLinkText ) ), " ", t.formatMessage( ke.ratelimitedDescriptionEnding ) )
          } )
        }, [ e, t ] ), null ) ),
        Fe = Object( De.f )( {
          sessionExpiredTitle: {
            id: "network-status-listener.session-expired.title",
            defaultMessage: "Session expired.",
            description: "Title of a message box, explaining that session has expired"
          },
          sessionExpiredDescription: {
            id: "network-status-listener.session-expired.description",
            defaultMessage: "Session expired. Please reload the page",
            description: "Contents of message box prompting user to reload the page"
          }
        } ),
        Ge = Object( De.g )( ( {
          flags: e,
          intl: t
        } ) => ( Object( a.useEffect )( () => {
          e.showErrorFlag( {
            id: "sessionExpired",
            title: t.formatMessage( Fe.sessionExpiredTitle ),
            description: t.formatMessage( Fe.sessionExpiredDescription )
          } )
        }, [ e, t ] ), null ) );
      var xe = n( "H5qd" ),
        He = n.n( xe );
      const Ve = He.a `query NetworkStatusListenerQuery{network@client{status}}`,
        Be = () => r.a.createElement( L.a, null, ( {
          featureFlags: e
        } ) => r.a.createElement( K.c, {
          to: [ Ne.a ]
        }, t => r.a.createElement( Pe.b, {
          query: Ve
        }, ( {
          data: n
        } ) => {
          var a;
          const o = null != ( a = n ) && null != ( a = a.network ) ? a.status : a;
          return o === je.a.SESSION_EXPIRED ? ( e[ "confluence.frontend.network-session-expired.abort" ] && Object( Y.b )().abort( {
            reason: "Session expired",
            checkForTimeout: !1
          } ), e[ "confluence.frontend.network-session-expired.show-flag" ] ? r.a.createElement( Ge, {
            flags: t
          } ) : null ) : o === je.a.RATE_LIMITED ? r.a.createElement( Me, {
            flags: t
          } ) : o === je.a.OFFLINE && ( Object( Y.b )().abort( {
            reason: "Network unavailable",
            checkForTimeout: !1
          } ), e[ "confluence.frontend.network-status-listener.with-ui" ] ) ? r.a.createElement( we, {
            flags: t
          } ) : null
        } ) ) );
      var Ke = n( "/D+w" ),
        We = n( "FuAq" ),
        qe = n( "J7sl" ),
        $e = n( "BX6b" ),
        Ye = n( "XVWa" ),
        ze = n( "nnRT" ),
        Qe = n.n( ze ),
        Je = n( "Wagq" );
      var Xe = n( "ZRy3" ),
        Ze = n( "+tQq" );
      var et = n( "+OYW" );

      function tt( e, t ) {
        Object( l.getAnalyticsWebClient )().then( n => {
          n.sendOperationalEvent( {
            source: "confluence-frontend",
            actionSubject: "forceUpdateSPA",
            action: e,
            attributes: t
          } )
        }, () => {} )
      }
      async function nt() {
        const e = Object( d.a )().PUBLIC_PATH + "force-update.json",
          t = Object( d.a )().BUILD_DATE,
          n = window.performance.timing.navigationStart;
        if ( "number" != typeof t || 0 === t || "number" != typeof n || 0 === n ) return !1;
        const a = await ( r = Object( te.a )( e, {
          mode: "cors",
          credentials: "omit"
        } ).then( e => e.json() ), o = 1e3, new Promise( ( e, t ) => {
          const n = window.Cypress ? null : setTimeout( t, o );
          r.then( e, t ).finally( () => {
            n && clearTimeout( n )
          } )
        } ) ).catch( () => ( {
          forceUpdateTimestamp: null
        } ) );
        var r, o;
        const s = Number( a.forceUpdateTimestamp );
        return !isNaN( s ) && ( s > t || s > n ? ( tt( "triggered", {
          navigationStart: n,
          buildDate: t,
          forceUpdateTimestamp: s
        } ), !0 ) : ( tt( "checked", {
          navigationStart: n,
          buildDate: t,
          forceUpdateTimestamp: s
        } ), !1 ) )
      }
      async function at() {
        try {
          const {
            featureFlags: e
          } = await Object( L.b )();
          return !( Object( et.e )( e ) && ! function () {
            try {
              return Boolean( window.sessionStorage.getItem( "branch-deploy.force-update.override" ) )
            } catch ( _ ) {}
            return !1
          }() ) && await nt()
        } catch ( e ) {
          return Object( $e.c )().submitError( e, {
            attribution: "backbone"
          } ), !1
        }
      }
      var rt = n( "Czhu" ),
        ot = n( "ewfN" ),
        st = n( "wKA4" ),
        ct = n( "+y+C" );
      async function it( e ) {
        return Object( ct.a )( e )
      }
      var ut = n( "kHy1" ),
        lt = n( "L5Tm" );
      var dt = n( "GzV3" ),
        Et = n( "cEAo" ),
        pt = n( "8Gb+" );
      var ft = n( "lbB3" ),
        mt = n( "Su1A" ),
        bt = n( "Kn4r" );
      var Ot = n( "q+Dn" );
      var ht = n( "FyaM" ),
        gt = n( "3HyH" ),
        _t = n( "pclH" );
      const Tt = e => `localStorage/atlassian.${e}.frontend`,
        It = ( {
          userId: e,
          cloudId: t,
          isForgeAppEnabled: n
        } ) => {
          let a = "",
            r = !0;
          if ( window.localStorage && e ) try {
            a = ( localStorage.getItem( ( e => Tt( e ) + ".discover.route.last" )( e ) ) || "" ).replace( /\"/g, "" ), r = "collapsed" !== ( localStorage.getItem( ( e => Tt( e ) + ".home.section.collapsed.feed" )( e ) ) || "" ).replace( /\"/g, "" )
          } catch ( c ) {
            console.error( "Error reading from local storage", c )
          }
          const o = [ ( s = {
            location: "atl.dashboard.secondary",
            spaceKey: void 0
          }, Object( ae.a )( {
            query: _t.a,
            variables: s
          } ) ) ];
          var s;
          return n && o.push( Object( ht.a )( t, e, gt.a.HOMEPAGE_FEED ) ), r && ( "popular" === a ? o.push( Object( ae.a )( {
            query: bt.a,
            variables: {
              first: 25
            }
          } ) ) : o.push( Object( ae.a )( {
            query: Ot.a,
            variables: {
              first: 25
            }
          } ) ) ), Promise.all( o )
        };
      var St = n( "r3UE" );

      function Ct( e ) {
        return Object( ae.a )( {
          query: St.a,
          variables: {
            spaceKey: e
          }
        } )
      }
      var At = n( "TPRh" );

      function yt( e, t ) {
        return window.performance.mark( "CFP-63.preloadContent.start" ), Object( ae.a )( {
          query: At.a,
          variables: {
            contentId: e,
            versionOverride: null,
            embeddedContentRender: null
          },
          context: t
        } ).then( () => {
          window.performance.mark( "CFP-63.preloadContent.end" ), window.performance.mark( "CFP-63.preloadContentEnd" )
        } )
      }
      var Rt = n( "fyDV" );

      function vt( e, t ) {
        return Object( ae.a )( {
          query: Rt.a,
          variables: {
            spaceKey: e,
            contentId: t,
            skipContent: !1
          }
        } )
      }
      var Pt = n( "33EX" );
      var Nt = n( "bhtZ" );
      var jt = n( "1LWu" ),
        Dt = n( "tZF8" );
      var Lt = n( "40XH" ),
        wt = n( "DIZP" ),
        kt = n( "8q0p" );

      function Ut( e, t ) {
        return Object( ae.a )( {
          query: Lt.a,
          variables: {
            contentId: e,
            docFormat: "atlas_doc_format",
            status: [ "current", "draft" ]
          },
          context: t
        } )
      }

      function Mt( e ) {
        return Object( ae.a )( {
          query: wt.a,
          variables: {
            spaceKey: e
          }
        } )
      }
      var Ft = n( "iHk4" );
      var Gt = n( "b/OQ" );
      var xt = n( "D9eQ" ),
        Ht = n( "djVO" );
      var Vt = n( "qY6u" );
      const Bt = e => ot.HOME.match( e ),
        Kt = e => ot.VIEW_PAGE.match( e ) || ot.VIEW_BLOG.match( e ) || ot.VIEW_BLOG_DATE_LEGACY.match( e ),
        Wt = e => ot.SPACE_OVERVIEW.match( e ) || ot.SPACE_INDEX.match( e ),
        qt = e => ot.EDIT_PAGE_V2.match( e ) || ot.EDIT_BLOG_V2.match( e );
      var $t, Yt = n( "6GZM" );

      function zt( e ) {
        return null !== e
      }
      async function Qt() {
        var e, t, n, a;
        const r = await it();
        return {
          isLicensed: Boolean( null == r || null === ( e = r.user ) || void 0 === e ? void 0 : e.confluence ),
          userId: ( null == r || null === ( t = r.user ) || void 0 === t ? void 0 : t.id ) || null,
          cloudId: ( null == r || null === ( n = r.tenant ) || void 0 === n ? void 0 : n.cloudId ) || null,
          featureFlags: Object( Yt.b )( ( ( null == r || null === ( a = r.featureFlags ) || void 0 === a ? void 0 : a.nodes ) || [] ).filter( zt ) ).withOverrides
        }
      }

      function Jt( e, t = !1, n = Qt ) {
        if ( Object( st.a )() ) return Promise.resolve();
        const a = [],
          r = function ( e ) {
            let t, n;
            ( t = Kt( e ) ) ? n = $t.VIEW_PAGE: ( t = Wt( e ) ) ? n = $t.SPACE_OVERVIEW : ( t = Bt( e ) ) ? n = $t.HOME : ( t = qt( e ) ) ? n = $t.EDIT_PAGE : ( t = ( e => ot.EXTERNAL_SHARE.match( e ) )( e ) ) ? n = $t.EXTERNAL_SHARE : ( t = ( e => ot.SPACE_PAGES.match( e ) )( e ) ) && ( n = $t.SPACE_PAGES );
            return t && Object( rt.a )( Object( rt.a )( {}, t ), {}, {
              experience: n
            } )
          }( e ),
          o = ( null == r ? void 0 : r.experience ) ? {
            headers: {
              "X-Atl-Experience": r.experience
            }
          } : void 0;
        if ( t || ( a.push( it( o ) ), a.push( oe() ), ( null == r ? void 0 : r.experience ) !== $t.EXTERNAL_SHARE && ( a.push( Promise.all( [ Object( ut.a )( {
            location: "system.header/left"
          } ), Object( ae.a )( {
            query: pt.a
          } ), Object( ae.a )( {
            query: dt.a
          } ), Object( ae.a )( {
            query: Et.a
          } ), Object( ae.a )( {
            query: lt.a
          } ) ] ) ), a.push( Object( ae.a )( {
            query: Gt.a
          } ) ), a.push( n().then( ( {
            userId: e
          } ) => async function ( e ) {
            if ( !e ) return;
            const t = {
              stringKeys: Object( xt.a )( e ),
              booleanKeys: []
            };
            return Object( ae.a )( {
              query: Ht.a,
              variables: t
            } )
          }( e ) ) ) ) ), !r ) return Promise.resolve();
        if ( r.experience === $t.VIEW_PAGE ) {
          const {
            spaceKey: e,
            contentId: n
          } = r.params;
          a.push( Ct( e ) ), a.push( yt( n, o ) ), t || ( a.push( function ( e, t ) {
            const n = [ vt( e, t ), Object( ae.a )( {
              query: Pt.a,
              variables: {
                contentId: t
              }
            } ) ];
            return Promise.all( n )
          }( e, n ) ), a.push( Ct( e ) ), a.push( function ( e, t, n ) {
            return Object( ae.a )( {
              query: Nt.a,
              variables: {
                spaceKey: e,
                contentId: t,
                isThemed: n
              }
            } )
          }( e, n, !0 ) ), a.push( function ( e ) {
            return Object( ae.a )( {
              query: Dt.a,
              variables: {
                contentId: e,
                externalToken: void 0,
                versionOverride: null,
                embeddedContentRender: null,
                limit: jt.a
              }
            } )
          }( n ) ) )
        } else if ( r.experience === $t.SPACE_OVERVIEW ) {
          const {
            spaceKey: e
          } = r.params;
          let n;
          if ( r.query ) {
            const e = r.query[ ot.SPACE_OVERVIEW.HOMEPAGE_ID_QUERY_KEY ];
            Array.isArray( e ) && ( n = e[ 0 ] )
          }
          a.push( function ( e, t, n ) {
            const a = [ Object( ae.a )( {
              query: Ft.a,
              variables: {
                spaceKey: e
              }
            } ).then( e => {
              var a;
              const r = null != ( a = e ) && null != ( a = a.data ) && null != ( a = a.space ) && null != ( a = a.homepage ) ? a.id : a;
              if ( r && r !== t ) return yt( r, n )
            } ), Mt( e ) ];
            return t && a.push( yt( t, n ) ), Promise.all( a )
          }( e, n, o ) ), t || a.push( Ct( e ) )
        } else r.experience === $t.EDIT_PAGE ? t || a.push( function ( {
          contentId: e,
          spaceKey: t
        }, n ) {
          return Promise.all( [ Ut( e, n ), Mt( t ), Object( ae.a )( {
            query: kt.a
          } ) ] )
        }( r.params, o ) ) : r.experience === $t.HOME ? a.push( n().then( ( {
          featureFlags: t,
          userId: n,
          cloudId: a,
          isLicensed: r
        } ) => {
          if ( t[ "confluence.frontend.home-preloader" ] ) {
            const o = e.match( /recentTab=(\d+)/ );
            return ( ( {
              userId: e,
              isLicensed: t,
              cloudId: n,
              isForgeAppEnabled: a,
              recentTab: r
            } ) => {
              const o = [ It( {
                userId: e,
                cloudId: n,
                isForgeAppEnabled: a
              } ), Object( mt.a )( {
                isLicensed: t
              } ) ];
              return n && o.push( Object( ft.a )( {
                cloudId: n,
                recentTab: r
              } ) ), Promise.all( o )
            } )( {
              userId: n,
              isLicensed: r,
              cloudId: a,
              isForgeAppEnabled: Boolean( t[ "confluence.frontend.forge.extension-point.homepage-feed" ] ),
              recentTab: o ? parseInt( o[ 1 ] ) : 0
            } )
          }
        } ) ) : r.experience === $t.SPACE_PAGES && a.push( n().then( ( {
          userId: e,
          isLicensed: t
        } ) => Object( Vt.a )( {
          spaceKey: r.params.spaceKey,
          queryParams: r.query,
          userId: e,
          isLicensed: t
        } ) ) );
        return Promise.all( a ).catch( e => {
          0
        } )
      }! function ( e ) {
        e.EDIT_PAGE = "edit-page", e.HOME = "home", e.SPACE_OVERVIEW = "space-overview", e.VIEW_PAGE = "view-page", e.EXTERNAL_SHARE = "external-share", e.SPACE_PAGES = "space-pages"
      }( $t || ( $t = {} ) );
      var Xt = n( "ZsZh" ),
        Zt = n( "zCQI" ),
        en = n( "QqfF" ),
        tn = n( "au0e" ),
        nn = n( "TU9K" );
      const an = ( {
          children: e,
          path: t
        } ) => r.a.createElement( nn.a.Provider, {
          value: {
            isExternalShareRequest: !!ot.EXTERNAL_SHARE.match( t )
          }
        }, e ),
        rn = {
          push: ( {
            matchSupportedRoute: e,
            match: t,
            open: n,
            history: a
          }, r ) => {
            const o = e( r ),
              s = null == t ? void 0 : t.params.spaceKey,
              c = null == t ? void 0 : t.params.contentId;
            o && s === o.params.spaceKey && c === o.params.contentId ? null == a || a.push( pe.a.format( {
              pathname: o.pathname,
              search: o.search,
              hash: o.hash,
              query: Object( rt.a )( Object( rt.a )( {}, o.query ), {}, {
                embedded: !0
              } )
            } ) ) : n( r, "_blank" )
          }
        };
      var on = n( "RfuI" ),
        sn = Object( on.a )( {
          id: "DJcZ7",
          name: "packages/confluence-fabric-editor/src/components/TemplateEditor/index.ts",
          loader: () => Promise.all( [ n.e( "atlaskit~66e23772" ), n.e( "afp~af75c846" ), n.e( "vendors~4134d62c" ), n.e( 0 ), n.e( 2 ), n.e( 4 ), n.e( 5 ), n.e( 1 ), n.e( 6 ), n.e( 7 ), n.e( 8 ), n.e( 9 ), n.e( 11 ), n.e( 10 ), n.e( 12 ), n.e( 13 ), n.e( 14 ), n.e( 16 ), n.e( 18 ), n.e( 17 ), n.e( 19 ), n.e( 20 ), n.e( 21 ), n.e( 25 ), n.e( 24 ), n.e( 29 ), n.e( 31 ), n.e( 35 ), n.e( 30 ), n.e( 32 ), n.e( 36 ), n.e( 40 ), n.e( 41 ), n.e( 46 ), n.e( 47 ), n.e( 67 ), n.e( 73 ), n.e( 113 ), n.e( "fabric.template.editor~dc51bad7" ) ] ).then( n.bind( null, "3G/3" ) )
        } ),
        cn = n( "adTp" ),
        un = n( "7+Q0" ),
        ln = n( "F4Ur" ),
        dn = n( "dIe6" ),
        En = n( "rc7/" ),
        pn = n( "fE4j" ),
        fn = n( "bpT7" );
      class mn extends a.PureComponent {
        constructor( ...e ) {
          super( ...e ), Object( p.a )( this, "state", {
            contentAppearance: null,
            error: null
          } ), Object( p.a )( this, "_getErrorDisplayOnError", e => e ? r.a.createElement( dn.a, {
            error: e
          } ) : null )
        }
        async componentDidMount() {
          const {
            contentId: e
          } = this.props;
          try {
            const t = await Object( cn.c )( e, un.a.DRAFT, Object( w.b )() );
            this.setState( {
              contentAppearance: t
            } )
          } catch ( t ) {
            Object( En.b )( t ) ? Object( ln.a )( t ) : this.setState( {
              error: t
            } )
          }
        }
        render() {
          const {
            contentId: e,
            spaceKey: t,
            draftShareId: n,
            priority: o
          } = this.props, {
            contentAppearance: s,
            error: c
          } = this.state;
          return r.a.createElement( a.Fragment, null, r.a.createElement( fn.a, {
            priority: o,
            contentId: e,
            spaceKey: t,
            draftShareId: n
          } ), this._getErrorDisplayOnError( c ), r.a.createElement( pn.a.Provider, {
            value: s
          }, r.a.createElement( fn.b, {
            priority: o,
            contentId: e,
            spaceKey: t,
            draftShareId: n
          } ) ) )
        }
      }
      var bn = mn;
      const On = Object( on.a )( {
          id: "/gxzP",
          name: "EmbeddableViewPageLoader",
          loader: async () => ( await Promise.all( [ n.e( "atlaskit~66e23772" ), n.e( "vendors~4134d62c" ), n.e( 0 ), n.e( 4 ), n.e( 5 ), n.e( 7 ), n.e( 8 ), n.e( 9 ), n.e( 11 ), n.e( 10 ), n.e( 12 ), n.e( 14 ), n.e( 17 ), n.e( 19 ), n.e( 20 ), n.e( 21 ), n.e( 25 ), n.e( 29 ), n.e( 32 ), n.e( 50 ), n.e( 53 ), n.e( 81 ), n.e( 116 ), n.e( "embeddable-view-page.next~b1ba7b00" ) ] ).then( n.bind( null, "MWj+" ) ) ).EmbeddableViewPage
        } ),
        hn = Object( on.a )( {
          id: "OH6Ka",
          name: "EmbeddedEditPageLoader",
          loader: async () => ( await Promise.all( [ n.e( "atlaskit~66e23772" ), n.e( "vendors~4134d62c" ), n.e( 0 ), n.e( 4 ), n.e( 5 ), n.e( 7 ), n.e( 8 ), n.e( 9 ), n.e( 10 ), n.e( 12 ), n.e( 16 ), n.e( 18 ), n.e( 17 ), n.e( 21 ), n.e( 31 ), n.e( 35 ), n.e( 30 ), n.e( 36 ), n.e( "embedded-edit-page.next~b59ad437" ) ] ).then( n.bind( null, "dqOD" ) ) ).EmbeddedEditPage
        } );
      var gn = n( "frZf" ),
        _n = n( "WGCh" ),
        Tn = n( "9IcS" ),
        In = n( "nk8F" ),
        Sn = n( "9+ZM" );
      const Cn = Object( on.a )( {
          id: "A/Fyq",
          name: "Onboarding",
          loader: () => Promise.all( [ n.e( "atlaskit~66e23772" ), n.e( "vendors~4134d62c" ), n.e( 2 ), n.e( 3 ), n.e( 1 ), n.e( 68 ), n.e( 87 ), n.e( "onboarding~b59ad437" ) ] ).then( n.bind( null, "1CdL" ) ).then( ( {
            Onboarding: e
          } ) => e )
        } ),
        An = Object( on.a )( {
          id: "IlT9K",
          name: "SitePermissions",
          loader: async () => ( await Promise.all( [ n.e( "atlaskit~66e23772" ), n.e( "afp~af75c846" ), n.e( "vendors~4134d62c" ), n.e( 0 ), n.e( 2 ), n.e( 4 ), n.e( 3 ), n.e( 5 ), n.e( 1 ), n.e( 22 ), n.e( 23 ), n.e( 27 ), n.e( 26 ), n.e( 34 ), n.e( 37 ), n.e( 61 ), n.e( 69 ), n.e( "site-permissions~b59ad437" ) ] ).then( n.bind( null, "gY0n" ) ) ).SitePermissions
        } ),
        yn = Object( on.a )( {
          id: "64y5E",
          name: "SitePermissionsUserDetails",
          loader: async () => ( await Promise.all( [ n.e( "atlaskit~66e23772" ), n.e( "vendors~4134d62c" ), n.e( 0 ), n.e( 2 ), n.e( 3 ), n.e( 22 ), n.e( 23 ), n.e( 27 ), n.e( 34 ), n.e( 69 ), n.e( "site-permissions-user-details~b59ad437" ) ] ).then( n.bind( null, "J/51" ) ) ).UserDetails
        } ),
        Rn = Object( on.a )( {
          id: "T9ikA",
          name: "SitePermissionsGroupDetails",
          loader: async () => ( await Promise.all( [ n.e( "atlaskit~66e23772" ), n.e( "vendors~4134d62c" ), n.e( 0 ), n.e( 2 ), n.e( 3 ), n.e( 22 ), n.e( 23 ), n.e( 27 ), n.e( 34 ), n.e( 69 ), n.e( "site-permissions-user-details~b59ad437" ), n.e( "site-permissions-group-details~b59ad437" ) ] ).then( n.bind( null, "UV+8" ) ) ).GroupDetails
        } );
      var vn = n( "5Yvp" ),
        Pn = n( "ie3L" ),
        Nn = n( "pjHL" ),
        jn = n( "QYv2" );
      const Dn = Object( on.a )( {
        id: "TmXk+",
        name: "ContentHistory",
        loader: async () => ( await Promise.all( [ n.e( "atlaskit~66e23772" ), n.e( "vendors~4134d62c" ), n.e( 0 ), n.e( 14 ), n.e( 16 ), n.e( 22 ), n.e( 23 ), n.e( 27 ), n.e( 34 ), n.e( 81 ), n.e( "content-history~b59ad437" ) ] ).then( n.bind( null, "1rfZ" ) ) ).ContentHistory
      } );
      var Ln = n( "wvYd" );
      const wn = Object( on.a )( {
          id: "LlSmv",
          name: "RedirectLegacyViewPageLoader",
          loader: async () => ( await n.e( "redirect-legacy-view-page~17df9246" ).then( n.bind( null, "Udmv" ) ) ).RedirectLegacyViewPage
        } ),
        kn = Object( on.a )( {
          id: "2VJVi",
          name: "RedirectLegacyCopyPageLoader",
          loader: async () => ( await n.e( "redirect-legacy-copy-page~00ac02ca" ).then( n.bind( null, "vzF6" ) ) ).RedirectLegacyCopyPage
        } ),
        Un = Object( on.a )( {
          id: "O793H",
          name: "TemplateMigrationPreview",
          loader: async () => ( await Promise.all( [ n.e( "atlaskit~66e23772" ), n.e( "vendors~4134d62c" ), n.e( 0 ), n.e( 4 ), n.e( 5 ), n.e( 7 ), n.e( 8 ), n.e( 9 ), n.e( 11 ), n.e( 10 ), n.e( 12 ), n.e( 19 ), n.e( 20 ), n.e( 21 ), n.e( 82 ), n.e( "template-migration-preview~b59ad437" ) ] ).then( n.bind( null, "4GGD" ) ) ).GoToTemplateMigrationPreviewIfEnabled
        } ),
        Mn = Object( on.a )( {
          id: "3TrXi",
          name: "LazySpaceDirectory",
          loader: async () => ( await Promise.all( [ n.e( "atlaskit~66e23772" ), n.e( "vendors~4134d62c" ), n.e( 0 ), n.e( 2 ), n.e( 3 ), n.e( 112 ), n.e( "space-directory~b59ad437" ) ] ).then( n.bind( null, "F0L2" ) ) ).SpaceDirectory,
          loading: () => null
        } );
      var Fn = n( "TFtl" ),
        Gn = n( "o3ZS" );
      const xn = Object( on.a )( {
        id: "jux2z",
        name: "SpacePage",
        loader: async () => ( await Promise.all( [ n.e( "atlaskit~66e23772" ), n.e( "vendors~4134d62c" ), n.e( 0 ), n.e( 4 ), n.e( 5 ), n.e( 8 ), n.e( 9 ), n.e( 11 ), n.e( 10 ), n.e( 12 ), n.e( 17 ), n.e( 19 ), n.e( 25 ), n.e( 46 ), n.e( 123 ), n.e( "forge-ui-extension-points~dade3008" ) ] ).then( n.bind( null, "YbHS" ) ) ).SpacePage
      } );
      var Hn = n( "7LQG" ),
        Vn = n( "f6W2" );
      class Bn extends a.Component {
        componentDidMount() {
          const {
            query: e,
            pathname: t
          } = this.props.location;
          let n, a;
          if ( -1 !== t.indexOf( "/createpage.action" ) || -1 !== t.indexOf( "/createpage-entervariables.action" ) ) n = "pages";
          else {
            if ( -1 === t.indexOf( "/createblogpost.action" ) ) return void this.props.replace( {
              pathname: Hn.a
            } );
            n = "blog"
          }
          if ( void 0 !== e.spaceKey && e.spaceKey ) a = e.spaceKey;
          else {
            if ( void 0 === e.draftId || !/^[0-9]+$/.test( e.draftId ) ) return void this.props.replace( {
              pathname: Hn.a
            } );
            a = "byDraft"
          }
          const r = {};
          Object.keys( e ).filter( e => "spaceKey" !== e ).forEach( t => r[ t ] = e[ t ] );
          const o = Object( rt.a )( Object( rt.a )( {}, this.props.location ), {}, {
            pathname: `${Hn.a}/spaces/${a}/${n}/create`,
            query: r,
            search: pe.a.format( {
              query: r
            } )
          } );
          this.props.replace( o )
        }
        render() {
          return null
        }
      }
      var Kn = Object( B.connect )( e => ( {
          location: Object( Vn.a )( e )
        } ), e => ( {
          replace: t => e( Object( be.replace )( t ) )
        } ) )( Bn ),
        Wn = n( "SRtI" ),
        qn = n( "Ixx4" ),
        $n = n( "/CY5" );
      var Yn = Object( B.connect )( ( e, t ) => {
        let n = t.siteHomeOverrideUri;
        $n.a.isDashboard( n ) ? n = null : null !== $n.a.getSpaceKey( n ) && ( n += `?${$n.a.SITE_HOME_QUERY_KEY}=${$n.a.SITE_HOME_QUERY_VALUE}` );
        const a = n || k.a.getItem( Wn.b.DASHBOARD_ROUTE ) || Hn.b;
        return {
          pathname: Object( Vn.a )( e ).pathname,
          indexRoute: a,
          siteHomeOverrideUri: n,
          shouldWait: t.loading
        }
      }, e => ( {
        replace: t => e( Object( be.replace )( t ) )
      } ) )( qn.a );
      class zn extends a.Component {
        render() {
          return r.a.createElement( le.a.Consumer, null, ( {
            homepageUri: e,
            loading: t,
            error: n
          } ) => r.a.createElement( Yn, {
            loading: t || n,
            siteHomeOverrideUri: e
          } ) )
        }
      }
      var Qn = Object( B.connect )( e => {
          const t = k.a.getItem( Wn.b.DISCOVER_ROUTE ) || "all-updates";
          return {
            pathname: Object( Vn.a )( e ).pathname,
            indexRoute: t
          }
        }, e => ( {
          replace: t => e( Object( be.replace )( t ) )
        } ) )( qn.a ),
        Jn = n( "4nIp" );
      const Xn = Object( on.a )( {
        id: "OeAX9",
        name: "RolloutAnnouncementComponent",
        loader: () => Promise.all( [ n.e( "atlaskit~66e23772" ), n.e( "vendors~4134d62c" ), n.e( "page.rollout-banner~493df0b3" ) ] ).then( n.bind( null, "QJbY" ) ).then( ( {
          RolloutAnnouncementComponent: e
        } ) => e )
      } );
      var Zn = Object( on.a )( {
          id: "AG/Kt",
          name: "RightSidebar",
          loader: () => Promise.all( [ n.e( "atlaskit~66e23772" ), n.e( "afp~af75c846" ), n.e( "vendors~4134d62c" ), n.e( 0 ), n.e( 6 ), n.e( 26 ), n.e( 38 ), n.e( 44 ), n.e( 71 ), n.e( "right-sidebar~493df0b3" ) ] ).then( n.bind( null, "bkSV" ) )
        } ),
        ea = n( "JpXc" ),
        ta = n( "7beP" ),
        na = n( "FMV0" ),
        aa = n( "ckp/" ),
        ra = n( "tnlP" );
      const oa = Object( on.a )( {
        id: "zNcs2",
        name: "ViewPageLoader",
        loader: async () => ( await Promise.all( [ n.e( "atlaskit~66e23772" ), n.e( "vendors~4134d62c" ), n.e( 0 ), n.e( 4 ), n.e( 5 ), n.e( 7 ), n.e( 8 ), n.e( 9 ), n.e( 11 ), n.e( 10 ), n.e( 12 ), n.e( 14 ), n.e( 17 ), n.e( 19 ), n.e( 20 ), n.e( 21 ), n.e( 25 ), n.e( 29 ), n.e( 32 ), n.e( 50 ), n.e( 53 ), n.e( 81 ), n.e( 116 ), n.e( "view-page.next~b59ad437" ) ] ).then( n.bind( null, "lvmO" ) ) ).ViewPage
      } );
      var sa = n( "o15q" );
      const ca = Object( on.a )( {
        id: "s64X8",
        name: "LazySpacePages",
        loader: async () => ( await Promise.all( [ n.e( "atlaskit~66e23772" ), n.e( "vendors~4134d62c" ), n.e( 0 ), n.e( 2 ), n.e( 3 ), n.e( 6 ), n.e( 13 ), n.e( 18 ), n.e( 90 ), n.e( 112 ), n.e( "space-pages~b59ad437" ) ] ).then( n.bind( null, "GR/W" ) ) ).SpacePages,
        loading: () => null
      } );
      var ia = n( "iOqi" );
      const ua = Object( on.a )( {
          id: "cdPlL",
          name: "ArchivedPagesListContainerLoader",
          loader: async () => ( await Promise.all( [ n.e( "atlaskit~66e23772" ), n.e( "afp~af75c846" ), n.e( "vendors~4134d62c" ), n.e( 0 ), n.e( 4 ), n.e( 5 ), n.e( 26 ), n.e( 49 ), n.e( 92 ), n.e( 117 ), n.e( "archived-pages-list-container~b59ad437" ) ] ).then( n.bind( null, "OqbZ" ) ) ).ArchivedPagesListContainer
        } ),
        la = Object( on.a )( {
          id: "SH8QQ",
          name: "BulkArchivedPagesListLoader",
          loader: async () => ( await Promise.all( [ n.e( "atlaskit~66e23772" ), n.e( "vendors~4134d62c" ), n.e( 0 ), n.e( 4 ), n.e( 5 ), n.e( 117 ), n.e( "archived-pages-list-bulk~b59ad437" ) ] ).then( n.bind( null, "NOD/" ) ) ).BulkArchivedPagesList
        } ),
        da = Object( on.a )( {
          id: "09wDS",
          name: "LazySpaceCalendar",
          loader: async () => ( await Promise.all( [ n.e( "atlaskit~66e23772" ), n.e( "vendors~4134d62c" ), n.e( 0 ), n.e( 2 ), n.e( 3 ), n.e( 1 ), n.e( 6 ), n.e( 23 ), n.e( 33 ), n.e( 37 ), n.e( 51 ), n.e( 61 ), n.e( 59 ), n.e( 66 ), n.e( 103 ), n.e( 127 ), n.e( "team-calendar~b59ad437" ) ] ).then( n.bind( null, "h2Zc" ) ) ).SpaceCalendar
        } );
      var Ea = n( "+mzV" ),
        pa = n( "lbXe" );
      const fa = e => {
        const {
          createAnalyticsEvent: t
        } = e;
        t( {
          type: "sendTrackEvent",
          data: {
            action: e.action,
            actionSubject: e.actionSubject,
            attributes: e.attributes,
            containerId: e.containerId,
            containerType: e.containerType,
            objectId: e.objectId,
            objectType: e.objectType,
            source: e.source
          }
        } ).fire()
      };
      class ma extends a.Component {
        componentDidMount() {
          fa( this.props )
        }
        shouldComponentUpdate( e ) {
          return this.props.action !== e.action || ( this.props.actionSubject !== e.actionSubject || ( !Qe()( this.props.attributes, e.attributes ) || ( this.props.containerId !== e.containerId || ( this.props.containerType !== e.containerType || ( this.props.objectId !== e.objectId || ( this.props.objectType !== e.objectType || this.props.source !== e.source ) ) ) ) ) )
        }
        componentDidUpdate() {
          fa( this.props )
        }
        render() {
          return null
        }
      }
      Object( p.a )( ma, "defaultProps", {
        attributes: {}
      } );
      var ba = Object( pa.a )()( ma );
      const Oa = He.a `query SendTrackViewPageEventQuery($contentId:ID){content(id:$contentId){nodes{id history{createdDate lastUpdated{when}}space{id}}}}`;
      class ha extends a.PureComponent {
        constructor( ...e ) {
          super( ...e ), Object( p.a )( this, "_getDaysSincePastDate", e => {
            const t = new Date,
              n = new Date( e );
            return Math.round( ( t.getTime() - n.getTime() ) / 864e5 )
          } ), Object( p.a )( this, "_getDaysSinceCreated", e => {
            var t;
            const n = null != ( t = e ) && null != ( t = t.history ) ? t.createdDate : t;
            return n ? this._getDaysSincePastDate( n ) : -1
          } ), Object( p.a )( this, "_getDaysSinceUpdated", e => {
            var t;
            const n = null != ( t = e ) && null != ( t = t.history ) && null != ( t = t.lastUpdated ) ? t.when : t;
            return n ? this._getDaysSincePastDate( n ) : -1
          } )
        }
        render() {
          const {
            pageType: e
          } = this.props;
          return r.a.createElement( Ea.a.Consumer, null, ( {
            contentId: t,
            searchSessionId: n
          } ) => r.a.createElement( Pe.b, {
            query: Oa,
            variables: {
              contentId: t
            }
          }, ( {
            data: a,
            loading: o,
            error: s
          } ) => {
            var c;
            if ( s || o ) return null;
            const i = null != ( c = a ) && null != ( c = c.content ) && null != ( c = c.nodes ) && null != ( c = c[ 0 ] ) ? c.space : c;
            return i ? r.a.createElement( ba, {
              action: "viewed",
              actionSubject: "page",
              source: "viewPageScreen",
              containerType: "space",
              containerId: i.id,
              objectType: "page",
              objectId: t,
              attributes: {
                pageType: e,
                daysSinceCreated: this._getDaysSinceCreated( a.content.nodes[ 0 ] ),
                daysSinceModified: this._getDaysSinceUpdated( a.content.nodes[ 0 ] ),
                searchReferrer: n
              }
            } ) : null
          } ) )
        }
      }
      var ga = ha,
        _a = n( "2wFc" ),
        Ta = n( "L7OL" );
      class Ia extends a.Component {
        componentDidMount() {
          const {
            month: e,
            day: t
          } = this.props.params;
          if ( 2 === e.toString().length && 2 === t.toString().length ) return;
          const {
            spaceKey: n,
            year: a,
            contentSlug: r,
            contentId: o
          } = this.props.params, s = Object( Ta.b )( e ), c = Object( Ta.b )( t ), i = Object( _a.e )( n, a, s, c, o, r );
          i && this.props.replace( Object( rt.a )( Object( rt.a )( {}, this.props.location ), {}, {
            pathname: i
          } ) )
        }
        render() {
          return r.a.createElement( a.Fragment, null, this.props.children )
        }
      }
      var Sa = Object( B.connect )( e => ( {
          params: Object( Vn.b )( e ),
          location: Object( Vn.a )( e )
        } ), e => ( {
          replace: t => e( Object( be.replace )( t ) )
        } ) )( Ia ),
        Ca = n( "V+xG" );
      const Aa = Object( on.a )( {
          id: "H6zI6",
          name: "InlineComments",
          loader: () => Promise.all( [ n.e( 13 ), n.e( "page.inline-comments~493df0b3" ) ] ).then( n.bind( null, "vIkQ" ) )
        } ),
        ya = Object( on.a )( {
          id: "JxARG",
          name: "InlineJiraTasks",
          loader: () => n.e( "page.inline-jira-tasks~493df0b3" ).then( n.bind( null, "HUx1" ) )
        } );
      var Ra = n( "OAym" ),
        va = n( "Ru86" );
      const Pa = {
        EditorLoaderLoader: Ra.a,
        InlineCommentsLoader: Aa,
        InlineJiraTasksLoader: ya
      };

      function Na( {
        name: e,
        params: {
          contentId: t,
          spaceKey: n,
          contentSlug: o
        },
        query: {
          versionOverride: s,
          embeddedContentRender: c
        },
        hash: i
      } ) {
        const {
          featureFlags: u
        } = Object( J.a )(), l = Object( ra.e )(), d = Object( ta.a )(), {
          navView: E,
          pageType: p
        } = function ( {
          routeName: e
        } ) {
          switch ( e ) {
            case ot.SPACE_OVERVIEW.name:
            case ot.SPACE_PAGES.name:
            case ot.VIEW_PAGE.name:
            case ot.SPACE_ARCHIVED_PAGES.name:
            case ot.SPACE_INDEX.name:
            case ot.SPACE_CALENDARS.name:
            case ot.SPACE_BULK_TOOLS.name:
              return {
                navView: Tn.c, pageType: "page"
              };
            case ot.VIEW_BLOG_DATE_LEGACY.name:
            case ot.VIEW_BLOG.name:
            case ot.BLOG_HOME.name:
              return {
                navView: Tn.b, pageType: "blogpost"
              }
          }
        }( {
          routeName: e
        } );
        let f = null,
          m = null;
        switch ( e ) {
          case ot.SPACE_OVERVIEW.name:
            f = r.a.createElement( a.Fragment, null, r.a.createElement( Gn.a, {
              priority: Ae.a.BACKGROUND
            } ), r.a.createElement( va.g, null ) ), m = r.a.createElement( va.p, {
              priority: Ae.a.IMMEDIATE
            }, r.a.createElement( va.v, {
              priority: Ae.a.IMMEDIATE,
              spaceKey: n,
              versionOverride: Number( s ) || null,
              embeddedContentRender: c || null,
              queryHash: i || ""
            } ) );
            break;
          case ot.SPACE_PAGES.name:
            m = u[ "confluence.frontend.space.pages" ] ? r.a.createElement( ca, {
              priority: Ae.a.IMMEDIATE
            } ) : r.a.createElement( _n.a, {
              name: ot.SPACE_OVERVIEW.name,
              params: {
                spaceKey: n
              }
            } );
            break;
          case ot.VIEW_PAGE.name:
          case ot.VIEW_BLOG_DATE_LEGACY.name:
          case ot.VIEW_BLOG.name:
            f = r.a.createElement( a.Fragment, null, r.a.createElement( Gn.a, {
              priority: Ae.a.BACKGROUND
            } ), r.a.createElement( va.g, null ), r.a.createElement( Gn.b, {
              priority: Ae.a.BACKGROUND,
              contentId: t,
              pageType: p
            } ) ), l ? m = r.a.createElement( va.i, null ) : d ? m = r.a.createElement( na.b, {
              extensionProvidersLoader: ea.a
            }, r.a.createElement( On, {
              priority: Ae.a.IMMEDIATE,
              contentId: t,
              spaceKey: n,
              classicComments: Ca.a
            } ) ) : u[ "confluence.frontend.view-page.next.v3" ] ? m = r.a.createElement( va.p, {
              priority: Ae.a.IMMEDIATE
            }, r.a.createElement( aa.b.Provider, {
              value: Object( fn.c )( t, n )
            }, r.a.createElement( na.b, {
              extensionProvidersLoader: ea.a
            }, r.a.createElement( oa, {
              priority: Ae.a.IMMEDIATE,
              spaceKey: n,
              contentId: t,
              contentSlug: "page" === p ? o : void 0,
              classicComments: Ca.a,
              inlineActionsBootstrap: Pa
            }, r.a.createElement( ge.a, {
              attribution: _e.a.BACKBONE
            }, r.a.createElement( ga, {
              pageType: p
            } ) ) ) ) ) ) : ( f = r.a.createElement( va.g, null ), m = r.a.createElement( va.p, {
              priority: Ae.a.IMMEDIATE
            }, r.a.createElement( aa.b.Provider, {
              value: Object( fn.c )( t, n )
            }, r.a.createElement( va.w, {
              priority: Ae.a.IMMEDIATE,
              contentId: t,
              versionOverride: Number( s ) || null,
              embeddedContentRender: c || null,
              queryHash: i || ""
            }, r.a.createElement( ge.a, {
              attribution: _e.a.BACKBONE
            }, r.a.createElement( ga, {
              pageType: p
            } ), e === ot.VIEW_BLOG_DATE_LEGACY.name ? r.a.createElement( Sa, null ) : null ) ) ) ) );
            break;
          case ot.SPACE_ARCHIVED_PAGES.name:
            m = u[ "confluence.frontend.archive.pages.allow.bulk.ui" ] && u[ "confluence.frontend.archive.pages.allow.bulk-restore" ] ? r.a.createElement( la, {
              spaceKey: n
            } ) : r.a.createElement( ua, {
              spaceKey: n
            } );
            break;
          case ot.SPACE_INDEX.name:
            m = r.a.createElement( va.p, {
              priority: Ae.a.IMMEDIATE
            }, r.a.createElement( va.u, null ) );
            break;
          case ot.BLOG_HOME.name:
            m = r.a.createElement( va.p, {
              priority: Ae.a.IMMEDIATE
            }, r.a.createElement( va.q, null ) );
            break;
          case ot.SPACE_CALENDARS.name:
            m = r.a.createElement( va.p, {
              priority: Ae.a.IMMEDIATE
            }, u[ "confluence.frontend.modern-team-calendar" ] ? r.a.createElement( da, null ) : r.a.createElement( va.r, null ) );
            break;
          case ot.SPACE_BULK_TOOLS.name:
            m = r.a.createElement( ia.b, {
              spaceKey: n
            } )
        }
        return r.a.createElement( vn.a, Object( rt.a )( Object( rt.a )( {}, function ( {
          routeName: e,
          spaceKey: t,
          contentId: n,
          contentSlug: a
        } ) {
          switch ( e ) {
            case ot.SPACE_OVERVIEW.name:
              return {
                screenEvent: {
                  name: "spaceOverviewScreen",
                  id: t
                }, pageContext: {
                  spaceKey: t,
                  contentId: sa.a,
                  routeName: ot.SPACE_OVERVIEW.name
                }
              };
            case ot.SPACE_PAGES.name:
              return {
                screenEvent: {
                  name: "spacePagesScreen",
                  id: t
                }, pageContext: {
                  spaceKey: t
                }
              };
            case ot.VIEW_PAGE.name:
            case ot.VIEW_BLOG_DATE_LEGACY.name:
            case ot.VIEW_BLOG.name:
              return {
                screenEvent: {
                  name: "viewPageScreen",
                  id: n,
                  attributes: {
                    isPublicView: !1
                  }
                }, pageContext: {
                  contentId: n,
                  spaceKey: t,
                  routeName: e,
                  contentSlug: a
                }
              };
            case ot.SPACE_ARCHIVED_PAGES.name:
              return {
                screenEvent: {
                  name: "spaceArchivedPages",
                  id: t
                }, pageContext: {
                  spaceKey: t,
                  routeName: e
                }
              };
            case ot.SPACE_INDEX.name:
              return {
                screenEvent: {
                  name: "spaceIndexScreen"
                }, pageContext: {
                  spaceKey: t
                }
              };
            case ot.BLOG_HOME.name:
              return {
                screenEvent: {
                  name: "blogHomeScreen"
                }, pageContext: {
                  spaceKey: t,
                  contentId: n
                }
              };
            case ot.SPACE_CALENDARS.name:
              return {
                screenEvent: {
                  name: "spaceCalendarsScreen",
                  id: t
                }, pageContext: {
                  spaceKey: t
                }
              };
            case ot.SPACE_BULK_TOOLS.name:
              return {
                screenEvent: {
                  name: "spaceBulkTools",
                  id: t
                }, pageContext: {
                  spaceKey: t,
                  routeName: e
                }
              }
          }
        }( {
          routeName: e,
          contentId: t,
          spaceKey: n,
          contentSlug: o
        } ) ), {}, {
          showUpgradeModal: !0
        } ), r.a.createElement( Nn.a, {
          enableNavigation: !l,
          navView: E,
          spaceKey: n,
          RolloutAnnouncementBanner: Xn
        }, m ), f )
      }
      const ja = {
          attributes: {
            navdexPointType: q.b.START_TOUCH
          }
        },
        Da = {
          attributes: {
            navdexPointType: q.b.END
          }
        },
        La = ( {
          params: {
            contentId: e,
            spaceKey: t,
            pluginKey: n,
            moduleKey: a
          },
          query: {
            draftShareId: o
          }
        } ) => {
          const s = !e && a ? `${n}:${a}` : e;
          return r.a.createElement( vn.a, {
            screenEvent: {
              name: "editTemplatePageScreen",
              id: s || ""
            },
            pageContext: {
              contentId: s,
              spaceKey: t
            }
          }, r.a.createElement( sn, {
            contentId: s,
            spaceKey: t,
            draftShareId: o,
            notFoundComponent: va.c
          } ) )
        };
      class wa extends a.Component {
        render() {
          return r.a.createElement( vn.a, {
            screenEvent: {
              name: "notFoundScreen"
            }
          }, r.a.createElement( Nn.a, {
            navView: Tn.e,
            RolloutAnnouncementBanner: Xn
          }, r.a.createElement( va.c, null ) ) )
        }
      }
      const ka = () => r.a.createElement( va.e, {
          priority: Ae.a.IMMEDIATE
        }, r.a.createElement( zn, null ) ),
        Ua = {
          [ he.a.BASE.name ]: () => r.a.createElement( _n.a, {
            name: he.a.WIKI.name
          } ),
          [ he.a.WIKI.name ]: () => r.a.createElement( vn.a, {
            screenEvent: {
              name: "wikiScreen"
            }
          }, r.a.createElement( Nn.a, null, r.a.createElement( In.b, {
            priority: Ae.a.IMMEDIATE,
            LegacyHome: ka
          } ) ) ),
          [ he.a.TEMPLATE_GALLERY.name ]: () => r.a.createElement( vn.a, {
            screenEvent: {
              name: "templateGalleryScreen"
            },
            pageContext: {
              routeName: he.a.TEMPLATE_GALLERY.name
            }
          }, r.a.createElement( Nn.a, {
            navView: Tn.e,
            RolloutAnnouncementBanner: Xn,
            disableMinWidth: !0
          }, r.a.createElement( Sn.a, {
            priority: Ae.a.IMMEDIATE
          } ) ) ),
          [ he.a.HOME.name ]: () => r.a.createElement( vn.a, {
            screenEvent: Object( rt.a )( {
              name: "homeScreen"
            }, ja ),
            pageContext: {
              routeName: he.a.HOME.name
            },
            showUpgradeModal: !0
          }, r.a.createElement( Nn.a, {
            navView: Tn.e,
            RolloutAnnouncementBanner: Xn
          }, r.a.createElement( va.h, {
            priority: Ae.a.IMMEDIATE
          } ) ), r.a.createElement( Gn.a, {
            priority: Ae.a.BACKGROUND
          } ) ),
          [ he.a.EDIT_PAGE.name ]: ( {
            params: {
              contentId: e,
              spaceKey: t
            }
          } ) => r.a.createElement( vn.a, {
            showPremiumOnboarding: !1,
            screenEvent: Object( rt.a )( {
              name: "editPageScreen",
              id: e
            }, Da ),
            pageContext: {
              contentId: e,
              spaceKey: t
            }
          }, r.a.createElement( va.n, {
            contentType: "pages",
            contentId: e,
            spaceKey: t
          } ) ),
          [ he.a.EDIT_BLOG.name ]: ( {
            params: {
              contentId: e,
              spaceKey: t
            }
          } ) => r.a.createElement( vn.a, {
            showPremiumOnboarding: !1,
            screenEvent: {
              name: "editPageScreen",
              id: e
            },
            pageContext: {
              contentId: e,
              spaceKey: t
            }
          }, r.a.createElement( va.n, {
            contentType: "blog",
            contentId: e,
            spaceKey: t
          } ) ),
          [ he.a.EDIT_PAGE_V2.name ]: ( {
            params: {
              contentId: e,
              spaceKey: t
            },
            query: {
              draftShareId: n
            }
          } ) => r.a.createElement( vn.a, {
            showPremiumOnboarding: !1,
            screenEvent: Object( rt.a )( {
              name: "editPageScreen",
              id: e
            }, Da ),
            pageContext: {
              contentId: e,
              spaceKey: t
            }
          }, r.a.createElement( bn, {
            priority: Ae.a.IMMEDIATE,
            contentId: e,
            spaceKey: t,
            draftShareId: n
          } ), r.a.createElement( Gn.b, {
            priority: Ae.a.BACKGROUND,
            contentId: e,
            pageType: "page",
            isEditPage: !0
          } ) ),
          [ he.a.EDIT_BLOG_V2.name ]: ( {
            params: {
              contentId: e,
              spaceKey: t
            },
            query: {
              draftShareId: n
            }
          } ) => r.a.createElement( vn.a, {
            showPremiumOnboarding: !1,
            screenEvent: Object( rt.a )( {
              name: "editPageScreen",
              id: e
            }, Da ),
            pageContext: {
              contentId: e,
              spaceKey: t
            }
          }, r.a.createElement( bn, {
            priority: Ae.a.IMMEDIATE,
            contentId: e,
            spaceKey: t,
            draftShareId: n
          } ) ),
          [ he.a.EDIT_PAGE_EMBED.name ]: ( {
            params: {
              contentId: e,
              spaceKey: t
            },
            query: {
              draftShareId: n
            }
          } ) => r.a.createElement( vn.a, {
            showPremiumOnboarding: !1,
            screenEvent: Object( rt.a )( {
              name: "editPageEmbedScreen",
              id: e
            }, Da ),
            pageContext: {
              contentId: e,
              spaceKey: t
            }
          }, r.a.createElement( hn, {
            priority: Ae.a.IMMEDIATE,
            contentId: e,
            spaceKey: t,
            draftShareId: n
          } ) ),
          [ he.a.CREATE_PAGE.name ]: ( {
            params: {
              spaceKey: e
            }
          } ) => r.a.createElement( vn.a, {
            showPremiumOnboarding: !1,
            screenEvent: Object( rt.a )( {
              name: "editPageScreen"
            }, Da ),
            pageContext: {
              spaceKey: e
            }
          }, r.a.createElement( va.s, {
            priority: Ae.a.IMMEDIATE,
            contentType: "page"
          } ) ),
          [ he.a.CREATE_BLOG.name ]: ( {
            params: {
              spaceKey: e
            }
          } ) => r.a.createElement( vn.a, {
            showPremiumOnboarding: !1,
            screenEvent: Object( rt.a )( {
              name: "editPageScreen"
            }, Da ),
            pageContext: {
              spaceKey: e
            }
          }, r.a.createElement( va.s, {
            priority: Ae.a.IMMEDIATE,
            contentType: "blogpost"
          } ) ),
          [ he.a.CREATE_PAGE_ACTION_LEGACY.name ]: () => r.a.createElement( Kn, null ),
          [ he.a.CREATE_BLOG_ACTION_LEGACY.name ]: () => r.a.createElement( Kn, null ),
          [ he.a.CREATE_PAGE_VARIABLES_ACTION_LEGACY.name ]: () => r.a.createElement( Kn, null ),
          [ he.a.RESUME_DRAFT_LEGACY.name ]: ( {
            pathname: e,
            search: t,
            query: n
          } ) => {
            const {
              draftId: a
            } = n;
            return a && /^[0-9]+$/.test( a ) ? r.a.createElement( _n.a, {
              href: `${e}${t}`,
              forceReload: !0
            } ) : r.a.createElement( _n.a, {
              name: he.a.WIKI.name
            } )
          },
          [ he.a.COPY_PAGE_LEGACY.name ]: e => r.a.createElement( kn, {
            match: e
          } ),
          [ he.a.DASHBOARD_ACTION_LEGACY.name ]: () => r.a.createElement( _n.a, {
            name: he.a.HOME.name
          } ),
          [ he.a.SPA_ACTION_LEGACY.name ]: () => r.a.createElement( _n.a, {
            name: he.a.HOME.name
          } ),
          [ he.a.INDEX_ACTION_LEGACY.name ]: () => r.a.createElement( _n.a, {
            name: he.a.HOME.name
          } ),
          [ he.a.VIEW_PAGE_ACTION_LEGACY.name ]: ( {
            query: e
          } ) => r.a.createElement( wn, {
            contentId: e.pageId
          } ),
          [ he.a.SPACE_OVERVIEW_INDEX_ACTION_LEGACY.name ]: ( {
            params: {
              spaceKey: e
            }
          } ) => r.a.createElement( _n.a, {
            name: he.a.SPACE_OVERVIEW.name,
            params: {
              spaceKey: e
            }
          } ),
          [ he.a.SPACE_INDEX_ACTION_LEGACY.name ]: ( {
            params: {
              spaceKey: e
            }
          } ) => r.a.createElement( _n.a, {
            name: he.a.SPACE_OVERVIEW.name,
            params: {
              spaceKey: e
            }
          } ),
          [ he.a.ACTION_REDIRECT_LEGACY.name ]: ( {
            pathname: e,
            search: t,
            query: n
          } ) => n[ "unmatched-route" ] ? r.a.createElement( wa, null ) : ( t = t.startsWith( "?" ) ? t + "&unmatched-route=true" : "?unmatched-route=true", r.a.createElement( _n.a, {
            href: `${e}${t}`,
            forceReload: !0
          } ) ),
          [ he.a.SPACE_DIRECTORY.name ]: () => {
            const {
              featureFlags: e
            } = Object( J.a )();
            return r.a.createElement( vn.a, {
              screenEvent: {
                name: "spaceDirectoryScreen"
              }
            }, r.a.createElement( Nn.a, {
              navView: Tn.e,
              RolloutAnnouncementBanner: Xn,
              disableMinWidth: !0
            }, r.a.createElement( va.d, null ), e[ "confluence.frontend.space.directory" ] ? r.a.createElement( Mn, {
              priority: Ae.a.IMMEDIATE
            } ) : r.a.createElement( _n.a, {
              href: gn.a + "/spacedirectory/view.action"
            } ) ) )
          },
          [ he.a.SPACE_OVERVIEW_REDIRECT_LEGACY.name ]: ( {
            query: {
              key: e
            }
          } ) => r.a.createElement( _n.a, {
            name: he.a.SPACE_OVERVIEW.name,
            params: {
              spaceKey: e
            }
          } ),
          [ he.a.SPACE_INDEX.name ]: Na,
          [ he.a.SPACE_OVERVIEW.name ]: Na,
          [ he.a.SPACE_PAGES.name ]: Na,
          [ he.a.VIEW_PAGE.name ]: Na,
          [ he.a.BLOG_HOME.name ]: Na,
          [ he.a.VIEW_BLOG_DATE_LEGACY.name ]: Na,
          [ he.a.VIEW_BLOG.name ]: Na,
          [ he.a.SPACE_CALENDARS.name ]: Na,
          [ he.a.DISCOVER.name ]: () => r.a.createElement( vn.a, {
            screenEvent: {
              name: "discoverScreen"
            }
          }, r.a.createElement( Nn.a, {
            navView: Tn.e,
            RightSidebarComponent: Zn,
            RolloutAnnouncementBanner: Xn
          }, r.a.createElement( In.e, {
            redirectIfEnabled: !0,
            route: he.a.HOME,
            params: {
              feed: ""
            },
            priority: Ae.a.IMMEDIATE
          }, r.a.createElement( va.e, {
            priority: Ae.a.IMMEDIATE
          }, r.a.createElement( Qn, null ) ) ) ) ),
          [ he.a.ALL_UPDATES.name ]: () => r.a.createElement( vn.a, {
            screenEvent: Object( rt.a )( {
              name: "allUpdatesScreen"
            }, ja ),
            showUpgradeModal: !0
          }, r.a.createElement( Nn.a, {
            navView: Tn.e,
            RightSidebarComponent: Zn,
            RolloutAnnouncementBanner: Xn
          }, r.a.createElement( In.e, {
            redirectIfEnabled: !0,
            route: he.a.HOME,
            params: {
              feed: 0
            },
            priority: Ae.a.IMMEDIATE
          }, r.a.createElement( va.e, {
            priority: Ae.a.IMMEDIATE
          }, r.a.createElement( va.b, {
            priority: Ae.a.IMMEDIATE
          } ) ) ) ) ),
          [ he.a.POPULAR.name ]: () => r.a.createElement( vn.a, {
            screenEvent: Object( rt.a )( {
              name: "popularScreen"
            }, ja )
          }, r.a.createElement( Nn.a, {
            navView: Tn.e,
            RightSidebarComponent: Zn,
            RolloutAnnouncementBanner: Xn
          }, r.a.createElement( In.e, {
            redirectIfEnabled: !0,
            route: he.a.HOME,
            params: {
              feed: 1
            },
            priority: Ae.a.IMMEDIATE
          }, r.a.createElement( va.e, {
            priority: Ae.a.IMMEDIATE
          }, r.a.createElement( va.k, {
            priority: Ae.a.IMMEDIATE
          } ) ) ) ) ),
          [ he.a.MY_WORK_HOME.name ]: () => r.a.createElement( vn.a, {
            screenEvent: Object( rt.a )( {
              name: "myWorkScreen"
            }, ja )
          }, r.a.createElement( Nn.a, {
            navView: Tn.e,
            RolloutAnnouncementBanner: Xn
          }, r.a.createElement( In.d, {
            homeEnabledRedirection: {
              route: he.a.HOME,
              params: {
                recentTab: 1
              }
            },
            homeDisabledRedirection: {
              route: he.a.RECENT_PAGES
            },
            priority: Ae.a.IMMEDIATE
          } ) ) ),
          [ he.a.MY_WORK_DRAFTS.name ]: () => r.a.createElement( vn.a, {
            screenEvent: Object( rt.a )( {
              name: "draftsScreen"
            }, ja )
          }, r.a.createElement( Nn.a, {
            navView: Tn.e,
            RolloutAnnouncementBanner: Xn
          }, r.a.createElement( In.d, {
            homeEnabledRedirection: {
              route: he.a.HOME,
              params: {
                recentTab: 2
              }
            },
            homeDisabledRedirection: {
              route: he.a.RECENT_DRAFTS
            },
            priority: Ae.a.IMMEDIATE
          } ) ) ),
          [ he.a.RECENT_DRAFTS.name ]: () => r.a.createElement( vn.a, {
            screenEvent: Object( rt.a )( {
              name: "recentDraftsScreen"
            }, ja )
          }, r.a.createElement( Nn.a, {
            navView: Tn.e,
            RolloutAnnouncementBanner: Xn
          }, r.a.createElement( In.e, {
            redirectIfEnabled: !0,
            route: he.a.HOME,
            params: {
              recentTab: 2
            },
            priority: Ae.a.IMMEDIATE
          }, r.a.createElement( va.e, {
            priority: Ae.a.IMMEDIATE
          }, r.a.createElement( va.j, {
            priority: Ae.a.IMMEDIATE
          }, r.a.createElement( va.f, {
            priority: Ae.a.IMMEDIATE
          } ) ) ) ) ) ),
          [ he.a.MY_WORK_RECENT.name ]: () => r.a.createElement( vn.a, {
            screenEvent: Object( rt.a )( {
              name: "recentlyWorkedOnScreen"
            }, ja )
          }, r.a.createElement( Nn.a, {
            navView: Tn.e,
            RolloutAnnouncementBanner: Xn
          }, r.a.createElement( In.d, {
            homeEnabledRedirection: {
              route: he.a.HOME,
              params: {
                recentTab: 1
              }
            },
            homeDisabledRedirection: {
              route: he.a.RECENT_PAGES
            },
            priority: Ae.a.IMMEDIATE
          } ) ) ),
          [ he.a.RECENT_PAGES.name ]: () => r.a.createElement( vn.a, {
            screenEvent: {
              name: "recentPagesScreen"
            }
          }, r.a.createElement( Nn.a, {
            navView: Tn.e,
            RolloutAnnouncementBanner: Xn
          }, r.a.createElement( In.e, {
            redirectIfEnabled: !0,
            route: he.a.HOME,
            params: {
              recentTab: 1
            },
            priority: Ae.a.IMMEDIATE
          }, r.a.createElement( va.e, {
            priority: Ae.a.IMMEDIATE
          }, r.a.createElement( va.j, {
            priority: Ae.a.IMMEDIATE
          }, r.a.createElement( va.l, {
            priority: Ae.a.IMMEDIATE
          } ) ) ) ) ) ),
          [ he.a.MY_RECENTLY_VISITED.name ]: () => r.a.createElement( vn.a, {
            screenEvent: Object( rt.a )( {
              name: "recentlyVisitedScreen"
            }, ja )
          }, r.a.createElement( In.d, {
            homeEnabledRedirection: {
              route: he.a.HOME,
              params: {
                recentTab: 0
              }
            },
            homeDisabledRedirection: {
              route: he.a.RECENT_VISITED
            },
            priority: Ae.a.IMMEDIATE
          } ) ),
          [ he.a.RECENT_VISITED.name ]: () => r.a.createElement( vn.a, {
            screenEvent: Object( rt.a )( {
              name: "recentVisitedScreen"
            }, ja )
          }, r.a.createElement( Nn.a, {
            navView: Tn.e,
            RolloutAnnouncementBanner: Xn
          }, r.a.createElement( In.e, {
            redirectIfEnabled: !0,
            route: he.a.HOME,
            params: {
              recentTab: 0
            },
            priority: Ae.a.IMMEDIATE
          }, r.a.createElement( va.e, {
            priority: Ae.a.IMMEDIATE
          }, r.a.createElement( va.j, {
            priority: Ae.a.IMMEDIATE
          }, r.a.createElement( va.m, {
            priority: Ae.a.IMMEDIATE
          } ) ) ) ) ) ),
          [ he.a.MY_SAVED_FOR_LATER.name ]: () => r.a.createElement( vn.a, {
            screenEvent: Object( rt.a )( {
              name: "savedScreen"
            }, ja )
          }, r.a.createElement( Nn.a, {
            navView: Tn.e,
            RolloutAnnouncementBanner: Xn
          }, r.a.createElement( In.d, {
            homeEnabledRedirection: {
              route: he.a.HOME,
              params: {
                recentTab: 3
              }
            },
            homeDisabledRedirection: {
              route: he.a.RECENT_SAVED
            },
            priority: Ae.a.IMMEDIATE
          } ) ) ),
          [ he.a.RECENT_SAVED.name ]: () => r.a.createElement( vn.a, {
            screenEvent: Object( rt.a )( {
              name: "recentSavedScreen"
            }, ja )
          }, r.a.createElement( Nn.a, {
            navView: Tn.e,
            RolloutAnnouncementBanner: Xn
          }, r.a.createElement( In.e, {
            redirectIfEnabled: !0,
            route: he.a.HOME,
            params: {
              recentTab: 3
            },
            priority: Ae.a.IMMEDIATE
          }, r.a.createElement( va.e, {
            priority: Ae.a.IMMEDIATE
          }, r.a.createElement( va.j, {
            priority: Ae.a.IMMEDIATE
          }, r.a.createElement( va.o, {
            priority: Ae.a.IMMEDIATE
          } ) ) ) ) ) ),
          [ he.a.TEMPLATE_MIGRATION_PREVIEW.name ]: ( {
            params: {
              contentId: e
            }
          } ) => r.a.createElement( vn.a, {
            screenEvent: {
              name: "templateMigrationPreviewScreen"
            },
            pageContext: {
              routeName: he.a.TEMPLATE_MIGRATION_PREVIEW.name,
              contentId: e
            }
          }, r.a.createElement( Un, {
            templateId: e
          } ) ),
          [ he.a.EDIT_TEMPLATE.name ]: La,
          [ he.a.EDIT_TEMPLATE_BLUEPRINT.name ]: La,
          [ he.a.EDIT_TEMPLATE_SPACE.name ]: La,
          [ he.a.CREATE_TEMPLATE.name ]: La,
          [ he.a.CREATE_TEMPLATE_SPACE.name ]: La,
          [ he.a.ADVANCED_SEARCH.name ]: () => r.a.createElement( vn.a, {
            screenEvent: {
              name: "advancedSearchScreen"
            }
          }, r.a.createElement( Nn.a, {
            navView: Tn.e,
            RolloutAnnouncementBanner: Xn
          }, r.a.createElement( va.a, {
            priority: Ae.a.IMMEDIATE
          } ) ) ),
          [ he.a.EXTERNAL_SHARE.name ]: ( {
            name: e,
            params: {
              contentId: t,
              externalToken: n
            },
            hash: a
          } ) => r.a.createElement( vn.a, {
            pageContext: {
              routeName: e,
              contentId: t
            },
            queryHash: a
          }, r.a.createElement( Ln.b, {
            siteUrl: window.location.hostname,
            contentId: t,
            ContentRenderer: Jn.a,
            externalToken: n,
            queryHash: a
          } ) ),
          [ he.a.PEOPLE_DIRECTORY.name ]: ( {
            pathname: e,
            search: t = "",
            hash: n = ""
          } ) => {
            const {
              featureFlags: a
            } = Object( J.a )();
            let o = r.a.createElement( Pn.a, {
              statusCodeHandlers: {
                401: jn.a
              }
            } );
            if ( !0 !== a[ "confluence.frontend.people.directory" ] ) {
              const a = `${e}${t}${n}`.slice( gn.a.length );
              o = r.a.createElement( _n.a, {
                href: a,
                forceReload: !0
              } )
            }
            return r.a.createElement( vn.a, {
              screenEvent: Object( rt.a )( {
                name: "inProdPeopleDirectory"
              }, ja )
            }, r.a.createElement( Nn.a, {
              navView: Tn.e,
              RolloutAnnouncementBanner: Xn
            }, o ) )
          },
          [ he.a.CONTENT_HISTORY.name ]: ( {
            params: {
              spaceKey: e,
              contentId: t,
              contentSlug: n
            }
          } ) => r.a.createElement( vn.a, {
            screenEvent: {
              name: "pageHistoryScreen",
              id: t
            },
            pageContext: {
              spaceKey: e,
              contentId: t,
              contentSlug: n
            }
          }, r.a.createElement( Nn.a, {
            spaceKey: e,
            navView: Tn.c
          }, r.a.createElement( Dn, {
            priority: Ae.a.IMMEDIATE,
            spaceKey: e,
            contentId: t,
            stack: "classic"
          } ) ) ),
          [ he.a.ONBOARDING.name ]: () => r.a.createElement( vn.a, {
            screenEvent: {
              name: "onboardingContainerScreen"
            }
          }, r.a.createElement( Cn, null ) ),
          [ he.a.ADMIN_NEW_GLOBAL_PERMISSIONS.name ]: () => {
            const {
              featureFlags: e
            } = Object( J.a )();
            return e[ "confluence.frontend.newSitePerms" ] ? r.a.createElement( vn.a, {
              screenEvent: {
                name: "sitePermissionsScreen"
              }
            }, r.a.createElement( Nn.a, {
              navView: Tn.a
            }, r.a.createElement( An, null ) ) ) : r.a.createElement( _n.a, {
              name: he.a.ADMIN_GLOBAL_PERMISSIONS.name,
              forceReload: !0
            } )
          },
          [ he.a.ADMIN_NEW_GLOBAL_PERMISSIONS_GROUP_DETAILS.name ]: ( {
            params: {
              groupName: e
            }
          } ) => {
            const {
              featureFlags: t
            } = Object( J.a )();
            return t[ "confluence.frontend.newSitePerms" ] ? r.a.createElement( vn.a, {
              screenEvent: {
                name: "sitePermissionsGroupDetailsScreen"
              }
            }, r.a.createElement( Nn.a, {
              navView: Tn.a
            }, r.a.createElement( Rn, {
              groupName: e
            } ) ) ) : r.a.createElement( _n.a, {
              name: he.a.ADMIN_GLOBAL_PERMISSIONS.name,
              forceReload: !0
            } )
          },
          [ he.a.ADMIN_NEW_GLOBAL_PERMISSIONS_USER_DETAILS.name ]: ( {
            params: {
              accountId: e
            }
          } ) => {
            const {
              featureFlags: t
            } = Object( J.a )();
            return t[ "confluence.frontend.newSitePerms" ] ? r.a.createElement( vn.a, {
              screenEvent: {
                name: "sitePermissionsUserDetailsScreen"
              }
            }, r.a.createElement( Nn.a, {
              navView: Tn.a
            }, r.a.createElement( yn, {
              accountId: e
            } ) ) ) : r.a.createElement( _n.a, {
              name: he.a.ADMIN_GLOBAL_PERMISSIONS.name,
              forceReload: !0
            } )
          },
          [ he.a.ADMIN_EDIT_EXTERNAL_SHARING.name ]: () => r.a.createElement( Ln.a, null, e => e.isLoading ? null : e.isVariation ? r.a.createElement( vn.a, {
            screenEvent: {
              name: "publicLinksSettingsScreen"
            }
          }, r.a.createElement( Nn.a, {
            navView: Tn.a
          }, r.a.createElement( Ln.c, null ) ) ) : r.a.createElement( wa, null ) ),
          [ he.a.ADMIN_FORGE_APPS.name ]: ( {
            params: {
              id: e
            }
          } ) => r.a.createElement( vn.a, {
            screenEvent: {
              name: "adminForgeApps"
            }
          }, r.a.createElement( Nn.a, {
            navView: Tn.a
          }, r.a.createElement( Fn.a, {
            key: e
          } ) ) ),
          [ he.a.SPACE_ARCHIVED_PAGES.name ]: Na,
          [ he.a.SPACE_BULK_TOOLS.name ]: Na,
          [ he.a.SPACE_FORGE_APPS.name ]: ( {
            params: {
              spaceKey: e,
              appId: t,
              envId: n,
              forgeManifestRoute: a
            }
          } ) => r.a.createElement( vn.a, {
            screenEvent: {
              name: "spaceForgeApps",
              id: e,
              attributes: {
                appId: t,
                envId: n,
                forgeManifestRoute: a
              }
            },
            pageContext: {
              spaceKey: e,
              routeName: he.a.SPACE_FORGE_APPS.name
            }
          }, r.a.createElement( Nn.a, {
            spaceKey: e,
            navView: Tn.c
          }, r.a.createElement( xn, {
            key: t + n,
            spaceKey: e,
            appId: t,
            envId: n,
            forgeManifestRoute: a
          } ) ) )
        };
      var Ma = n( "YXey" ),
        Fa = n( "PTD4" ),
        Ga = n( "hFeu" ),
        xa = n( "PCoL" ),
        Ha = n( "8f+1" ),
        Va = n( "emJd" );
      var Ba = Object( on.a )( {
          id: "wywYN",
          name: "ShortcutsProvider",
          loader: () => n.e( "legacy-components~21833f8f" ).then( n.bind( null, "DDEM" ) )
        } ),
        Ka = n( "unwS" ),
        Wa = Object( on.a )( {
          id: "xIHtK",
          name: "EngagementMessages",
          loader: () => Promise.all( [ n.e( "atlaskit~66e23772" ), n.e( "vendors~4134d62c" ), n.e( 4 ), n.e( 3 ), n.e( 1 ), n.e( 57 ), n.e( 94 ), n.e( 110 ), n.e( 132 ), n.e( "async-engagement-messages~4134d62c" ) ] ).then( n.bind( null, "VWKa" ) )
        } ),
        qa = n( "RZKf" ),
        $a = n( "TOvH" ),
        Ya = n( "4BMa" );
      const za = Ae.a.IMMEDIATE,
        Qa = e => {
          Bt( e ) ? va.h.preload( za ) : Kt( e ) ? ( va.p.preload( za ), va.w.preload( za ), Jn.a.preload( za ), ea.b.preload( za ), oa.preload( za ) ) : Wt( e ) ? ( va.p.preload( za ), va.v.preload( za ), Jn.a.preload( za ), ea.b.preload( za ) ) : qt( e ) && ( $a.a.preload( za ), fn.b.preload( za ), fn.a.preload( za ), qa.a.preload( za ), Object( Ya.a )(), Object( Ya.b )() )
        };
      var Ja = Object( on.a )( {
        id: "cMHTp",
        name: "LegacyReduxErrorContainer",
        loader: () => n.e( "legacy-components~21833f8f" ).then( n.bind( null, "kt8/" ) )
      } );
      const Xa = Object( We.a )();

      function Za( {
        sessionData: e
      } ) {
        me.a.performance.mark( "CFP-63.app-component-render" );
        const [ t, n ] = Object( a.useState )( !1 ), o = Boolean( e.featureFlags[ "confluence.frontend.enable.embedded.experience" ] ) && "true" === pe.a.parse( Xa.location.search, !0 ).query.embedded, s = Object( a.useCallback )( ( a, r ) => {
          if ( t && a ) return Object( tn.a )(), Object( tn.b )(), void me.a.location.assign( a.url );
          r ? ( me.a.__SSR_RENDERED__ = !1, a && er( a ) ) : me.a.performance.mark( "CFP-63.route-manager-initialized" ), e.featureFlags[ Ye.a ] || ( async ( e, t ) => {
            const n = Object( f.a )( "APDEX" ),
              a = Ze.a.startedTask;
            t > Ze.a.transitionId && ( Object( Ze.d )( {
              transitionId: t,
              startedTask: null,
              stoppedTasks: []
            } ), Object( E.a )( [ "spa.transition.start" ] ), window.performance.mark( "spa.transition.start" ) );
            const r = Object( Xe.a )( e );
            if ( r )
              if ( Ze.a.startedTask ) Qe()( Ze.a.startedTask, r ) || Object( Ze.d )( {
                startedTask: r,
                stoppedTasks: []
              } );
              else if ( performance.mark( "readyForUser.start" ), Object( Ze.d )( {
                startedTask: r,
                previousTask: a
              } ), t > 0 ) {
              const {
                tasks: e,
                taskId: t
              } = r;
              e.forEach( async e => {
                n.log `Start task ${e} with id ${t}`;
                const a = Object( l.getAnalyticsWebClient )();
                if ( Object( Je.b )( a ) ) {
                  Object( Je.a )( a ).startApdexEvent( {
                    task: e,
                    taskId: t
                  } )
                } else {
                  n.error `analytics-web-client is not ready at the start of an SPA transition. Apdex for task ${e} with id ${t} will not be accurate.`;
                  ( await a ).startApdexEvent( {
                    task: e,
                    taskId: t
                  } )
                }
              } )
            }
          } )( a, r ), Object( qe.c )( a, r, e ), ( ( e, t ) => {
            if ( R.a.transitionId = t, R.a.pageLoadStartTimestamp = window.performance.now(), R.a.previousRoute = R.a.routeName, R.a.routeName = e, e ) {
              u.a.setRoute( e );
              Boolean( Ie.d[ e ] ) && ( performance.mark( "browser-metric.start" ), u.a.startPageLoad( {
                isInitial: 0 === t
              } ) )
            }
          } )( a && a.name, r ), Object( $e.c )().updateContext( {
            pageName: a ? a.name : "unknown",
            transitionId: r
          } ), at().then( e => {
            e && n( !0 )
          } )
        }, [ e, t, n ] );
        return r.a.createElement( ge.a, {
          attribution: _e.a.BACKBONE
        }, r.a.createElement( Ka.a, null, r.a.createElement( Te.a, {
          priority: Ae.a.BACKGROUND
        } ), r.a.createElement( be.ConnectedRouter, {
          history: Xa
        }, r.a.createElement( a.Fragment, null, r.a.createElement( Ga.a, null ), r.a.createElement( an, {
          path: Xa.location.pathname
        }, r.a.createElement( Xt.b, null, r.a.createElement( Zt.b, null, r.a.createElement( en.b, null, r.a.createElement( Re.a, null, r.a.createElement( ye.a, {
          routeComponents: Ua,
          namedRoutes: he.a,
          notFound: wa,
          onInitialize: s,
          onTransition: s,
          onPreload: er,
          routePolicy: o ? rn : void 0
        }, r.a.createElement( Ma.a, null ), r.a.createElement( Fa.a, null ), r.a.createElement( ve.a, {
          priority: Ae.a.BACKGROUND
        } ), r.a.createElement( Ha.b, {
          priority: Ae.a.BACKGROUND
        } ) ) ) ) ) ) ), r.a.createElement( Ke.a, null ), r.a.createElement( xa.a, null ), r.a.createElement( Be, null ) ) ), r.a.createElement( Va.a, null ), r.a.createElement( Ba, {
          priority: Ae.a.BACKGROUND
        } ), r.a.createElement( Se.b, {
          priority: Ae.a.BACKGROUND
        } ), r.a.createElement( Ja, {
          priority: Ae.a.BACKGROUND
        } ), r.a.createElement( Wa, {
          priority: Ae.a.BACKGROUND
        } ), r.a.createElement( Oe.a, {
          priority: Ae.a.BACKGROUND
        } ), r.a.createElement( Ce.a, {
          priority: Ae.a.BACKGROUND
        } ) ) )
      }

      function er( {
        url: e
      } ) {
        Qa( e ), Jt( e, !0 )
      }
      class tr extends a.Component {
        getChildContext() {
          const {
            context: e
          } = this.props;
          return {
            insertCss: e.insertCss || ( () => {} )
          }
        }
        render() {
          window.performance.mark( "CFP-63.root-component-render" );
          const {
            store: e,
            apolloClient: t,
            sessionData: n
          } = this.props;
          return r.a.createElement( K.b, null, r.a.createElement( V.b, {
            client: t
          }, r.a.createElement( B.Provider, {
            store: e
          }, r.a.createElement( z.a.Provider, {
            value: n
          }, r.a.createElement( le.b, null, r.a.createElement( $.a.Provider, {
            value: Object( Y.b )()
          }, r.a.createElement( ce, null, r.a.createElement( U.a, null, r.a.createElement( W.b, {
            client: Object( l.getAnalyticsWebClient )()
          }, r.a.createElement( q.a, null, r.a.createElement( de.a, null, r.a.createElement( ue.a, null, r.a.createElement( ie.b, null, r.a.createElement( Za, {
            sessionData: n
          } ) ) ) ) ) ) ) ) ) ) ) ) ) )
        }
      }
      tr.displayName = "Root", tr.childContextTypes = {
        insertCss: H.a.func.isRequired
      };
      var nr = n( "vplL" );
      window.performance.mark( "CFP-63.app" ), window.performance.mark( "navigation-fmp.NavigationFMP.start" ), window.performance.mark( "side-navigation-fmp.SideNavigationFMP.start" );
      const ar = Object( L.b )().catch( () => ( {
          featureFlags: {}
        } ) ).then( async e => {
          const {
            userId: t,
            featureFlags: n,
            isLicensed: a
          } = e;
          return await Object( k.c )( {
            userId: t,
            featureFlags: n,
            isLicensed: a
          } ), e
        } ),
        rr = Object( U.c )( nr.a ).then( e => ( window.performance.mark( "CFP-63.translations-ready" ), e ) ),
        or = Object( M.c )(),
        sr = i.a.preloadReactLoadable ? i.a.preloadReactLoadable() : Promise.resolve();
      Qa( window.location.toString() ), Promise.all( [ ar, rr, or, sr ] ).then( ( [ e ] ) => {
        window.performance.mark( "CFP-63.session-data-ready" );
        const {
          featureFlags: t
        } = e;
        ( e => {
          if ( !D ) {
            const {
              featureFlags: t,
              shard: n
            } = e;
            u.a.init( {
              info: {
                app: {
                  framework: {
                    name: "react",
                    version: a.version
                  },
                  version: {
                    web: Object( d.a )().FRONTEND_VERSION
                  }
                },
                hostname: window.location.hostname,
                product: "confluence",
                region: n
              },
              plugins: {
                featureFlags: {
                  client: Promise.resolve( {
                    getValue: e => t[ e ]
                  } )
                },
                resourceTimings: {
                  mapResources: g,
                  sanitiseEndpoints: S
                }
              },
              endpoints: {
                eventPipelineClient: Object( l.getAnalyticsWebClient )()
              },
              events: j( e ),
              ssr: {
                getDoneMark: () => Object( E.b )( "CFP-63.ssr-ttr" ),
                getTimings: () => window.__SSR_MEASURES__ || {}
              }
            } ), D = !0
          }
        } )( e ), t[ "confluence.frontend.omit-cleaning-up-renderer-rendered-end-mark" ] && function () {
          const e = window.performance.clearMarks;
          window.performance.clearMarks = function () {
            if ( !arguments[ 0 ].includes( "Renderer Render" ) || !0 === arguments[ 1 ] ) return e.apply( this, arguments )
          }
        }();
        const o = Object( F.a )();
        Object( G.a )( o );
        const c = Object( w.b )();
        window.__APOLLO_STATE__ && ( c.disableNetworkFetches = !0 ), s.a.render( r.a.createElement( tr, {
          store: o,
          context: {
            insertCss: e => e._insertCss()
          },
          apolloClient: c,
          sessionData: e
        } ), document.getElementById( "confluence-ui" ), () => {
          window.__APOLLO_STATE__ && ( c.disableNetworkFetches = !1 ), n.e( "initialization~493df0b3" ).then( n.bind( null, "ogbR" ) ).then( ( {
            initialization: t
          } ) => t( e ) )
        } )
      } )
    },
    tnlP: function ( e, t, n ) {
      "use strict";
      n.d( t, "d", ( function () {
        return i
      } ) ), n.d( t, "c", ( function () {
        return u
      } ) ), n.d( t, "a", ( function () {
        return l
      } ) ), n.d( t, "b", ( function () {
        return d
      } ) ), n.d( t, "e", ( function () {
        return E
      } ) );
      var a = n( "daKX" );
      const r = Object( a.a )( "mobile-detection" ),
        o = /(iPhone;|iPad;|iPhone Simulator;|iPod;|iPod touch;|Linux; U; Android)/i,
        s = /Chrome\/[.\d]* Mobile/i,
        c = /Linux; U; Android (?:[23]\.\d|4\.0\.[12])/i,
        i = () => {
          const e = window.navigator.userAgent;
          return !!e && !c.test( e ) && ( o.test( e ) || s.test( e ) )
        },
        u = () => "true" === window.localStorage.getItem( "mobile.web.desktop.override.active" ),
        l = () => {
          try {
            window.localStorage.setItem( "mobile.web.desktop.override.active", "true" )
          } catch ( e ) {
            r.error `Unable to set local storage. key = "${"mobile.web.desktop.override.active"}", value = "true"`
          }
        },
        d = () => window.localStorage.removeItem( "mobile.web.desktop.override.active" );

      function E() {
        return !!window.location.search.includes( "mobileWebTestingMode=testing" ) || i() && !u()
      }
    },
    tpvt: function ( e, t, n ) {
      "use strict";
      t.a = {
        dialog: {}
      }
    },
    uHdW: function ( e, t, n ) {
      "use strict";
      n.d( t, "a", ( function () {
        return d
      } ) );
      var a = n( "Czhu" ),
        r = n( "zjfJ" ),
        o = n( "ERkP" ),
        s = n.n( o ),
        c = n( "lSUb" ),
        i = n( "jGPY" ),
        u = n( "wuLf" ),
        l = n( "I6oN" );
      class d extends o.Component {
        constructor( e ) {
          super( e ), Object( r.a )( this, "openTemplateVariables", ( {
            templateId: e,
            parentPageId: t,
            spaceKey: n,
            title: a,
            contentId: r,
            onContentUpdated: o,
            onError: s
          } ) => {
            this.setState( {
              templateId: e,
              parentPageId: t,
              spaceKey: n,
              title: a,
              contentId: r,
              onContentUpdated: o,
              onError: s,
              showTemplateVariableInputDrawer: !0
            } )
          } ), Object( r.a )( this, "openBlueprintWizard", ( {
            blueprint: e,
            parentPageId: t,
            spaceKey: n,
            title: a,
            contentId: r,
            onContentUpdated: o,
            onError: s
          } ) => {
            this.setState( {
              contentId: r,
              blueprint: e,
              parentPageId: t,
              spaceKey: n,
              onContentUpdated: o,
              onError: s,
              showBlueprintVariableWizard: !0,
              title: a || ""
            } )
          } ), Object( r.a )( this, "onClose", () => {
            this.setState( Object( l.a )() )
          } ), Object( r.a )( this, "getProviderValue", Object( c.default )( e => Object( a.a )( Object( a.a )( {}, e ), {}, {
            openTemplateVariables: this.openTemplateVariables,
            openBlueprintWizard: this.openBlueprintWizard,
            onClose: this.onClose
          } ) ) ), this.state = Object( l.a )()
        }
        componentDidMount() {
          Object( i.a )( {
            listener: "CreateDialogContextProvider.tsx",
            globalProperty: "legacyMessageQueue.push"
          }, () => {
            window.legacyMessageQueue && "function" == typeof window.legacyMessageQueue.push && window.legacyMessageQueue.push( {
              type: "ATLASSIAN_CONFLUENCE_VARIABLEINPUT_REGISTER_CALLBACK",
              payload: this.openTemplateVariables
            } )
          } )
        }
        render() {
          return s.a.createElement( u.a.Provider, {
            value: this.getProviderValue( this.state )
          }, this.props.children )
        }
      }
    },
    uIYj: function ( e, t, n ) {
      "use strict";
      let a;
      n.d( t, "c", ( function () {
          return a
        } ) ), n.d( t, "d", ( function () {
          return r
        } ) ), n.d( t, "a", ( function () {
          return o
        } ) ), n.d( t, "b", ( function () {
          return s
        } ) ), n.d( t, "h", ( function () {
          return c
        } ) ), n.d( t, "i", ( function () {
          return i
        } ) ), n.d( t, "f", ( function () {
          return u
        } ) ), n.d( t, "g", ( function () {
          return l
        } ) ), n.d( t, "j", ( function () {
          return d
        } ) ), n.d( t, "e", ( function () {
          return E
        } ) ),
        function ( e ) {
          e.NONE = "none", e.PREVIEW = "preview", e.VIEWPAGE = "viewpage", e.HOMEPAGE = "homepage"
        }( a || ( a = {} ) );
      const r = {
          FABRIC: "FABRIC",
          TINY_MCE: "TINY_MCE"
        },
        o = {
          EDITING_IMPROVEMENTS: "https://confluence.atlassian.com/display/ConfCloud/Confluence+Editing+Improvements",
          MEETING_NOTES: "https://confluence.atlassian.com/display/ConfCloud/Meeting+Notes+blueprint",
          BLOGS_UPDATE: "https://confluence.atlassian.com/display/ConfCloud/Confluence+Editing+Improvements#ConfluenceEditingImprovements-blogposts",
          MEETING_NOTES_UPDATE: "https://confluence.atlassian.com/display/ConfCloud/Confluence+Editing+Improvements#ConfluenceEditingImprovements-meetingnotes"
        },
        s = {
          "meeting-notes": [ {
            href: o.MEETING_NOTES,
            title: "editor.help.how.to.use.blueprint"
          } ]
        };
      let c;
      ! function ( e ) {
        e.CONNECTED = "connected", e.DISCONNECTED = "disconnected", e.ERROR = "error", e.COLLAB_LIMIT = "collab-limit", e.PERMISSION_CHANGED = "permission-changed"
      }( c || ( c = {} ) );
      const i = {
          [ c.CONNECTED ]: {
            text: "collab.status.connected",
            tooltip: "collab.status.tooltip.success",
            shouldAutoHide: !0,
            type: "success"
          },
          [ c.ERROR ]: {
            text: "collab.status.error",
            tooltip: "collab.status.tooltip.error",
            shouldAutoHide: !1,
            type: "error"
          },
          [ c.COLLAB_LIMIT ]: {
            text: "editor.collab.user.limit.title",
            tooltip: "editor.collab.user.limit.body",
            shouldAutoHide: !1,
            type: "error"
          },
          [ c.PERMISSION_CHANGED ]: {
            text: "fabric.editor.permission.removed.title",
            tooltip: "fabric.editor.permission.removed.description",
            shouldAutoHide: !1,
            type: "error"
          }
        },
        u = 12,
        l = "editor.content.placeholder",
        d = {
          high: 7,
          medium: 6,
          low: 2
        },
        E = {
          EXISTING_CUSTOMER: "connie-existing-customer",
          EVALUATOR: "connie-evaluator-customer",
          TEMPLATE: "connie-template",
          BLOG_POST: "connie-blogpost",
          PAGE: "connie-page",
          NEW_CONTENT: "connie-new-content",
          EXISTING_CONTENT: "connie-existing-content",
          EXISTING_MIGRATING_CONTENT: "connie-existing-migrating-content"
        }
    },
    uMk2: function ( e, t, n ) {
      "use strict";
      n.d( t, "a", ( function () {
        return r
      } ) );
      var a = n( "H5qd" );
      const r = n.n( a ).a `fragment EditionFragment on Query{tenant{editions{edition}}}`
    },
    unwS: function ( e, t, n ) {
      "use strict";
      var a = n( "uDfI" ),
        r = n( "ERkP" ),
        o = n.n( r ),
        s = ( n( "aWzz" ), n( "baYQ" ) ),
        c = n( "vbGE" );
      class i extends r.Component {
        render() {
          const {
            spotlightId: e,
            children: t
          } = this.props;
          return o.a.createElement( s.d, null, t, e ? o.a.createElement( c.a, null ) : null )
        }
      }
      var u = n( "AvyD" );
      const l = Object( a.connect )( e => ( {
        spotlightId: Object( u.d )( e.views.changeboarding )
      } ) )( i );
      t.a = l
    },
    vbGE: function ( e, t, n ) {
      "use strict";
      n.d( t, "b", ( function () {
        return r
      } ) ), n.d( t, "a", ( function () {
        return o
      } ) );
      var a = n( "RfuI" );
      const r = Object( a.a )( {
          id: "w84Kl",
          name: "ChangeboardingTargetLazyLoader",
          loader: () => n.e( "changeboarding.target~493df0b3" ).then( n.bind( null, "vO+m" ) )
        } ),
        o = Object( a.a )( {
          id: "SnXDP",
          name: "ChangeboardingSpotlightLazyLoader",
          loader: () => Promise.all( [ n.e( "atlaskit~66e23772" ), n.e( "vendors~4134d62c" ), n.e( 0 ), n.e( 24 ), n.e( "changeboarding.spotlight~493df0b3" ) ] ).then( n.bind( null, "HQ+o" ) )
        } )
    },
    vbsf: function ( e, t, n ) {
      "use strict";
      var a = {};
      n.r( a ), n.d( a, "OPEN_PREVIEWER", ( function () {
        return l.b
      } ) ), n.d( a, "CLOSE_PREVIEWER", ( function () {
        return l.a
      } ) );
      var r = n( "Czhu" ),
        o = n( "pPdq" ),
        s = n( "cGYM" );
      const c = e => null === e,
        i = e => c( e ) || ( e => !0 === e || !1 === e )( e ) || ( e => !isNaN( e ) )( e ) || Object( s.b )( e );
      var u = n( "kD2R" ),
        l = n( "QmUA" ),
        d = n( "d3tz" ),
        E = n( "97bS" );
      const {
        OPEN_PREVIEWER: p,
        CLOSE_PREVIEWER: f
      } = a;
      var m = {
        [ u.LOCATION_CHANGE ]: {
          scope: d.a.DASHBOARD,
          name: "navigate",
          data: ( e, t ) => {
            const {
              currentSection: n,
              previousSection: a
            } = t.session.analytics.toJS();
            return {
              currentSection: n,
              previousSection: a
            }
          }
        },
        [ E.a ]: {
          scope: d.a.DASHBOARD,
          name: "favourites.remove-favourite.clicked"
        },
        [ E.b ]: {
          scope: d.a.DASHBOARD,
          name: "favourites.remove-favourite.undo"
        },
        [ p ]: {
          scope: d.a.VIEW_PAGE,
          name: "open.previewer",
          data: e => ( {
            contentId: e.parentId
          } )
        },
        [ f ]: {
          scope: d.a.VIEW_PAGE,
          name: "close.previewer",
          data: e => ( {
            contentId: e.parentId
          } )
        }
      };
      const b = ( e = {} ) => ( e.meta || {} ).analytics,
        O = ( {
          session: e
        } ) => e && e.analytics ? e.analytics.toJS().currentSection : void 0,
        h = e => ( {
          experiments: Object( o.b )( e ),
          cohorts: Object( o.c )( e )
        } );
      t.a = ( e, t = b ) => n => a => o => {
        const s = a( o );
        return ( ( e, t, n, a ) => {
          const o = a( e );
          if ( o ) {
            var s, u, l, d;
            n( {
              data: Object( r.a )( Object( r.a )( {}, ( d = t.getState(), Object( r.a )( {
                currentSection: O( d )
              }, h( d ) ) ) ), ( u = o.scope, l = o.name, 0 === ( u ? `${u}.${l}` : l ).indexOf( "confluence.spa." ) ? ( s = o.data, c( s ) || void 0 === s ? s : "object" != typeof s ? {} : Object.keys( s ).reduce( ( e, t ) => {
                const n = s[ t ];
                return ( ( e => "spaceKey" === e )( t ) || i( n ) ) && ( e[ t ] = n ), e
              }, {} ) ) : o.data ) ),
              scope: o.scope,
              name: o.name
            } )
          } else {
            const a = m[ e.type ];
            if ( a ) {
              const {
                data: o
              } = a, s = t.getState(), c = "function" == typeof o ? o( e, s ) : o;
              n( Object( r.a )( Object( r.a )( {}, a ), {}, {
                data: Object( r.a )( Object( r.a )( {}, h( s ) ), c )
              } ) )
            }
          }
        } )( o, n, e, t ), s
      }
    },
    vplL: function ( e, t, n ) {
      "use strict";

      function a( e ) {
        switch ( e ) {
          case "fr-FR":
            return [ n.e( "translations.fr-FR~493df0b3" ).then( n.bind( null, "YiQg" ) ), n.e( "translations.fr-FR~493df0b3" ).then( n.bind( null, "eKJT" ) ), n.e( "translations.fr-FR~493df0b3" ).then( n.t.bind( null, "nW+U", 3 ) ) ];
          case "de-DE":
            return [ n.e( "translations.de-DE~493df0b3" ).then( n.bind( null, "W/zB" ) ), n.e( "translations.de-DE~493df0b3" ).then( n.bind( null, "ZLVf" ) ), n.e( "translations.de-DE~493df0b3" ).then( n.t.bind( null, "h2Ki", 3 ) ) ];
          case "ja-JP":
            return [ n.e( "translations.ja-JP~493df0b3" ).then( n.bind( null, "y7oy" ) ), n.e( "translations.ja-JP~493df0b3" ).then( n.bind( null, "zMe9" ) ), n.e( "translations.ja-JP~493df0b3" ).then( n.t.bind( null, "zF0K", 3 ) ) ];
          case "es-ES":
            return [ n.e( "translations.es-ES~493df0b3" ).then( n.bind( null, "X3FC" ) ), n.e( "translations.es-ES~493df0b3" ).then( n.bind( null, "YKZX" ) ), n.e( "translations.es-ES~493df0b3" ).then( n.t.bind( null, "gTfF", 3 ) ) ];
          case "ko-KR":
            return [ n.e( "translations.ko-KR~493df0b3" ).then( n.bind( null, "zJh4" ) ), n.e( "translations.ko-KR~493df0b3" ).then( n.bind( null, "+ZaQ" ) ), n.e( "translations.ko-KR~493df0b3" ).then( n.t.bind( null, "vWd0", 3 ) ) ];
          case "pt-BR":
            return [ n.e( "editor-translations.pt_BR~9d452f99" ).then( n.bind( null, "eWLI" ) ), n.e( "ak-mention.pt_BR~31fc9977" ).then( n.bind( null, "KfaD" ) ), n.e( "translations.pt-BR~493df0b3" ).then( n.t.bind( null, "HrrP", 3 ) ) ];
          case "ru-RU":
            return [ n.e( "translations.ru-RU~493df0b3" ).then( n.bind( null, "nmHy" ) ), n.e( "translations.ru-RU~493df0b3" ).then( n.bind( null, "MEma" ) ), n.e( "translations.ru-RU~493df0b3" ).then( n.t.bind( null, "DnEO", 3 ) ) ];
          case "en-GB":
            return [ n.e( "translations.en-GB~493df0b3" ).then( n.bind( null, "h6/N" ) ), n.e( "translations.en-GB~493df0b3" ).then( n.bind( null, "cr1k" ) ), n.e( "translations.en-GB~493df0b3" ).then( n.t.bind( null, "2U9a", 3 ) ) ];
          case "en-ZZ":
            return [ Promise.all( [ n.e( "atlaskit~66e23772" ), n.e( "translations.en-ZZ~493df0b3" ) ] ).then( n.bind( null, "CX8t" ) ), Promise.all( [ n.e( "atlaskit~66e23772" ), n.e( "translations.en-ZZ~493df0b3" ) ] ).then( n.t.bind( null, "JqsI", 3 ) ) ];
          case "da-DK":
            return [ n.e( "translations.da-DK~493df0b3" ).then( n.bind( null, "Nlqx" ) ), n.e( "translations.da-DK~493df0b3" ).then( n.bind( null, "Limc" ) ), n.e( "translations.da-DK~493df0b3" ).then( n.t.bind( null, "PCyS", 3 ) ) ];
          case "et-EE":
            return [ n.e( "translations.et-EE~493df0b3" ).then( n.bind( null, "ptZN" ) ), n.e( "translations.et-EE~493df0b3" ).then( n.bind( null, "kkY1" ) ), n.e( "translations.et-EE~493df0b3" ).then( n.t.bind( null, "ssRo", 3 ) ) ];
          case "fi-FI":
            return [ n.e( "translations.fi-FI~493df0b3" ).then( n.bind( null, "G9aE" ) ), n.e( "translations.fi-FI~493df0b3" ).then( n.bind( null, "beCB" ) ), n.e( "translations.fi-FI~493df0b3" ).then( n.t.bind( null, "s1TN", 3 ) ) ];
          case "hu-HU":
            return [ n.e( "translations.hu-HU~493df0b3" ).then( n.bind( null, "fsQ6" ) ), n.e( "translations.hu-HU~493df0b3" ).then( n.bind( null, "OTGG" ) ), n.e( "translations.hu-HU~493df0b3" ).then( n.t.bind( null, "Qb8H", 3 ) ) ];
          case "is-IS":
            return [ n.e( "translations.is-IS~493df0b3" ).then( n.bind( null, "21Ow" ) ), n.e( "translations.is-IS~493df0b3" ).then( n.bind( null, "N7Cv" ) ), n.e( "translations.is-IS~493df0b3" ).then( n.t.bind( null, "Vt7O", 3 ) ) ];
          case "it-IT":
            return [ n.e( "translations.it-IT~493df0b3" ).then( n.bind( null, "LMJx" ) ), n.e( "translations.it-IT~493df0b3" ).then( n.bind( null, "ix7K" ) ), n.e( "translations.it-IT~493df0b3" ).then( n.t.bind( null, "Y6+j", 3 ) ) ];
          case "nl-NL":
            return [ n.e( "translations.nl-NL~493df0b3" ).then( n.bind( null, "LG/L" ) ), n.e( "translations.nl-NL~493df0b3" ).then( n.bind( null, "L2Jn" ) ), n.e( "translations.nl-NL~493df0b3" ).then( n.t.bind( null, "3911", 3 ) ) ];
          case "no-NO":
            return [ n.e( "translations.no-NO~493df0b3" ).then( n.bind( null, "N/BF" ) ), n.e( "translations.no-NO~493df0b3" ).then( n.bind( null, "34Vj" ) ), n.e( "translations.no-NO~493df0b3" ).then( n.t.bind( null, "KAHD", 3 ) ) ];
          case "pl-PL":
            return [ n.e( "translations.pl-PL~493df0b3" ).then( n.bind( null, "qh+/" ) ), n.e( "translations.pl-PL~493df0b3" ).then( n.bind( null, "x/7V" ) ), n.e( "translations.pl-PL~493df0b3" ).then( n.t.bind( null, "JvG/", 3 ) ) ];
          case "ro-RO":
            return [ n.e( "translations.ro-RO~493df0b3" ).then( n.bind( null, "lwWl" ) ), n.e( "translations.ro-RO~493df0b3" ).then( n.bind( null, "JeQl" ) ), n.e( "translations.ro-RO~493df0b3" ).then( n.t.bind( null, "82He", 3 ) ) ];
          case "sk-SK":
            return [ n.e( "translations.sk-SK~493df0b3" ).then( n.bind( null, "ta36" ) ), n.e( "translations.sk-SK~493df0b3" ).then( n.bind( null, "CZjC" ) ), n.e( "translations.sk-SK~493df0b3" ).then( n.t.bind( null, "gGje", 3 ) ) ];
          case "cs-CZ":
            return [ n.e( "translations.cs-CZ~493df0b3" ).then( n.bind( null, "dUWk" ) ), n.e( "translations.cs-CZ~493df0b3" ).then( n.bind( null, "EH5y" ) ), n.e( "translations.cs-CZ~493df0b3" ).then( n.t.bind( null, "pZ5X", 3 ) ) ];
          case "sv-SE":
            return [ n.e( "translations.sv-SE~493df0b3" ).then( n.bind( null, "CvKW" ) ), n.e( "translations.sv-SE~493df0b3" ).then( n.bind( null, "RR20" ) ), n.e( "translations.sv-SE~493df0b3" ).then( n.t.bind( null, "EzXN", 3 ) ) ];
          case "zh-CN":
            return [ n.e( "translations.zh-CN~493df0b3" ).then( n.bind( null, "Y9ON" ) ), n.e( "translations.zh-CN~493df0b3" ).then( n.bind( null, "SsRn" ) ), n.e( "translations.zh-CN~493df0b3" ).then( n.t.bind( null, "Ph41", 3 ) ) ]
        }
        return []
      }

      function r( e ) {
        return [ Promise.all( [ n.e( "atlaskit~66e23772" ), n.e( "translations.en-US~9d121199" ) ] ).then( n.bind( null, "CX8t" ) ), Promise.all( [ n.e( "atlaskit~66e23772" ), n.e( "translations.en-US~9d121199" ) ] ).then( n.bind( null, "j0ck" ) ), Promise.all( [ n.e( "atlaskit~66e23772" ), n.e( "translations.en-US~9d121199" ) ] ).then( n.t.bind( null, "/fyH", 3 ) ), ...a( e ) ]
      }
      n.d( t, "a", ( function () {
        return r
      } ) )
    },
    vqZc: function ( e, t, n ) {
      "use strict";
      n.d( t, "b", ( function () {
        return a
      } ) ), n.d( t, "a", ( function () {
        return r
      } ) );
      const a = "com.atlassian.confluence.plugins.confluence-frontend-support",
        r = {
          FABRIC_EDITOR_ONBOARDING_DIALOG: "fabric-editor-onboarding-dialog",
          FABRIC_EDITOR_HELP_MENU_SPOTLIGHT: "fabric-editor-onboarding-spotlight"
        }
    },
    w7pu: function ( e, t, n ) {
      "use strict";
      n.d( t, "a", ( function () {
        return E
      } ) ), n.d( t, "b", ( function () {
        return p
      } ) );
      var a = n( "Czhu" ),
        r = n( "ERkP" ),
        o = n.n( r ),
        s = n( "1U1M" ),
        c = n( "F4Ur" ),
        i = n( "BX6b" ),
        u = n( "rc7/" ),
        l = n( "YNn/" );
      const d = {
          tenantId: "",
          isNewUser: !1,
          userCanCreateContent: !1,
          welcomeMessageEditUrl: "",
          welcomeMessageHtml: "",
          showWelcomeMessageEditHint: !1,
          showEditButton: !1,
          resourceKeys: [ "" ],
          resourceContexts: [ "" ],
          isAnonymous: !1,
          siteLogoUrl: "",
          siteTitle: "",
          showSiteTitle: !1,
          homepageUri: "",
          homepageTitle: "",
          experimentFeatures: "",
          abTestCohorts: "",
          isSiteAdmin: !1,
          loading: !0
        },
        E = Object( r.createContext )( d ),
        p = Object( r.memo )( ( {
          children: e
        } ) => {
          const {
            data: t,
            loading: n,
            error: r
          } = Object( s.d )( l.a );
          r && ( Object( u.b )( r ) || Object( i.c )().submitError( r, {
            attribution: "backbone"
          } ), Object( c.a )( r ) );
          const p = Object( a.a )( Object( a.a )( {}, t ? m( t ) : d ), {}, {
            loading: n,
            error: r
          } );
          return o.a.createElement( E.Provider, {
            value: p
          }, e )
        } );

      function f( e ) {
        return null != e
      }
      const m = e => {
        const {
          isNewUser: t,
          isSiteAdmin: n,
          abTestCohorts: a,
          experimentFeatures: r
        } = e, {
          userCanCreateContent: o,
          welcomeMessageEditUrl: s,
          welcomeMessageHtml: c,
          resourceKeys: i,
          resourceContexts: u,
          showWelcomeMessageEditHint: l,
          showEditButton: E,
          isAnonymous: p,
          homepageUri: m,
          homepageTitle: b
        } = e.spaViewContext || {}, {
          tenantId: O,
          siteLogoUrl: h,
          siteTitle: g,
          showSiteTitle: _
        } = e.siteConfiguration, T = {
          tenantId: O,
          isNewUser: t,
          userCanCreateContent: o,
          welcomeMessageEditUrl: s,
          welcomeMessageHtml: c,
          showWelcomeMessageEditHint: l,
          showEditButton: E,
          resourceKeys: null == i ? void 0 : i.filter( f ),
          resourceContexts: null == u ? void 0 : u.filter( f ),
          isAnonymous: p,
          siteLogoUrl: h,
          siteTitle: g,
          showSiteTitle: _,
          homepageUri: m,
          homepageTitle: b,
          experimentFeatures: r,
          abTestCohorts: a,
          isSiteAdmin: n,
          loading: !1
        };
        for ( const [ f, I ] of Object.entries( T ) ) null == I && ( T[ f ] = d[ f ] );
        return T
      }
    },
    wEff: function ( e, t, n ) {
      "use strict";
      n.d( t, "a", ( function () {
        return o
      } ) ), n.d( t, "c", ( function () {
        return s
      } ) ), n.d( t, "b", ( function () {
        return c
      } ) );
      var a = n( "qrFu" ),
        r = n( "94Z3" );
      class o extends r.a {
        constructor( e, t ) {
          super( e + " Session expired", t )
        }
      }

      function s( e ) {
        var t, n;
        if ( !e ) return !1;
        if ( e instanceof o ) return !0;
        if ( -1 != ( ( null != ( n = e ) ? n.message : n ) || "" ).indexOf( "Session expired" ) ) return !0;
        return 401 == ( null != ( t = e ) && null != ( t = t.extensions ) ? t.statusCode : t )
      }

      function c( e ) {
        if ( !e ) return !1;
        if ( s( e ) ) return !0;
        if ( Object( a.d )( e ) ) {
          const {
            graphQLErrors: t,
            networkError: n
          } = e;
          if ( s( n ) ) return !0;
          if ( ( t || [] ).some( s ) ) return !0
        }
        return !1
      }
    },
    wKA4: function ( e, t, n ) {
      "use strict";
      n.d( t, "a", ( function () {
        return o
      } ) ), n.d( t, "b", ( function () {
        return s
      } ) ), n.d( t, "c", ( function () {
        return c
      } ) );
      var a = n( "fYnN" ),
        r = n.n( a );

      function o() {
        return Boolean( r.a.get( "confluence.asSuperAdmin" ) )
      }

      function s() {
        r.a.remove( "confluence.asSuperAdmin" )
      }

      function c() {
        r.a.set( "confluence.asSuperAdmin", "true" )
      }
    },
    wuLf: function ( e, t, n ) {
      "use strict";
      n.d( t, "a", ( function () {
        return s
      } ) );
      var a = n( "ERkP" ),
        r = n.n( a ),
        o = n( "I6oN" );
      const s = r.a.createContext( Object( o.b )() );
      s.displayName = "CreateDialogContext"
    },
    wujS: function ( e, t, n ) {
      "use strict";
      n.d( t, "a", ( function () {
        return r
      } ) );
      var a = n( "Svze" );
      class r extends( Object( a.Record )( {
        hasFetched: !1,
        results: Object( a.OrderedSet )( [] )
      } ) ) {
        constructor( e ) {
          return super( e ), this.withMutations( t => {
            t.set( "results", Object( a.OrderedSet )( e.results || [] ) )
          } )
        }
      }
    },
    wvYd: function ( e, t, n ) {
      "use strict";
      n.d( t, "b", ( function () {
        return r
      } ) ), n.d( t, "c", ( function () {
        return o
      } ) ), n.d( t, "a", ( function () {
        return s
      } ) );
      var a = n( "RfuI" );
      const r = Object( a.a )( {
          id: "aivzA",
          name: "ExternalSharePageLoader",
          loader: async () => {
            const {
              ExternalSharePage: e
            } = await Promise.all( [ n.e( "atlaskit~66e23772" ), n.e( "vendors~4134d62c" ), n.e( 0 ), n.e( "external-share-page~b59ad437" ) ] ).then( n.bind( null, "f0XR" ) );
            return e
          }
        } ),
        o = Object( a.a )( {
          id: "H9jCI",
          name: "ExternalShareSettingsPageLoader",
          loader: async () => {
            const {
              ExternalShareSettingsPage: e
            } = await Promise.all( [ n.e( "atlaskit~66e23772" ), n.e( "vendors~4134d62c" ), n.e( 0 ), n.e( "external-share-settings-page~b59ad437" ) ] ).then( n.bind( null, "jsyu" ) );
            return e
          }
        } ),
        s = Object( a.a )( {
          id: "3E2nK",
          name: "ExternalShareCohortLoader",
          loader: async () => {
            const {
              ExternalShareCohort: e
            } = await n.e( "external-share-cohort~338dec28" ).then( n.bind( null, "dhwI" ) );
            return e
          }
        } )
    },
    x5mk: function ( e, t, n ) {
      "use strict";

      function a( e ) {
        return "operation" in e
      }

      function r( e ) {
        return t => {
          if ( !t.query.definitions ) return !1;
          for ( const {
              operation: n,
              directives: r
            } of t.query.definitions.filter( a ) )
            if ( "query" === n || "mutation" === n ) return ( null != r ? r : [] ).some( t => t.name.value === e );
          return !1
        }
      }
      n.d( t, "c", ( function () {
        return o
      } ) ), n.d( t, "d", ( function () {
        return s
      } ) ), n.d( t, "e", ( function () {
        return c
      } ) ), n.d( t, "b", ( function () {
        return i
      } ) ), n.d( t, "a", ( function () {
        return u
      } ) );
      const o = r( "experimental" ),
        s = r( "SLA" ),
        c = e => {
          if ( !e.query.definitions ) return !1;
          for ( const {
              operation: t
            } of e.query.definitions.filter( a ) )
            if ( "subscription" === t ) return !0;
          return !1
        };

      function i( e, t ) {
        var n;
        if ( Array.isArray( e ) ) {
          const n = e.find( ( [ e ] ) => e === t );
          return n ? n[ 1 ] : null
        }
        return e instanceof Headers ? e.get( t ) : null !== ( n = e[ t ] ) && void 0 !== n ? n : null
      }

      function u( e, t, n ) {
        Array.isArray( e ) ? e.push( [ t, n ] ) : e instanceof Headers ? e.append( t, n ) : e[ t ] = n
      }
    },
    xQ7x: function ( e, t, n ) {
      "use strict";
      n.d( t, "e", ( function () {
        return a
      } ) ), n.d( t, "d", ( function () {
        return r
      } ) ), n.d( t, "b", ( function () {
        return o
      } ) ), n.d( t, "a", ( function () {
        return s
      } ) ), n.d( t, "c", ( function () {
        return c
      } ) );
      const a = "EDITOR_UPDATE_PARENT_PAGE",
        r = "EDITOR_CONTENT_PREVIEW",
        o = "CHANGE_EDITOR_MODE";
      let s, c;
      ! function ( e ) {
        e.CHANGE_EDITOR_TITLE = "CHANGE_EDITOR_TITLE", e.CLOSE_EDITOR_ERROR = "CLOSE_EDITOR_ERROR", e.SHOW_EDITOR_ERROR = "SHOW_EDITOR_ERROR", e.EDITOR_CONTENT_V2_REQUEST = "EDITOR_CONTENT_V2_REQUEST", e.EDITOR_CONTENT_V2_SUCCESS = "EDITOR_CONTENT_V2_SUCCESS", e.EDITOR_CONTENT_V2_FAILURE = "EDITOR_CONTENT_V2_FAILURE", e.EDITOR_CONTENT_PUBLISH_REQUEST = "EDITOR_CONTENT_PUBLISH_REQUEST", e.EDITOR_CONTENT_PUBLISH_SUCCESS = "EDITOR_CONTENT_PUBLISH_SUCCESS", e.EDITOR_CONTENT_PUBLISH_FAILURE = "EDITOR_CONTENT_PUBLISH_FAILURE", e.EDITOR_CONTENT_FROM_TEMPLATE_PUBLISH_SUCCESS = "EDITOR_CONTENT_FROM_TEMPLATE_PUBLISH_SUCCESS", e.EDITOR_CONTENT_FROM_TEMPLATE_PUBLISH_FAILURE = "EDITOR_CONTENT_FROM_TEMPLATE_PUBLISH_FAILURE", e.EDITOR_UPDATE_CONTENT_APPEARANCE_PROPERTY_REQUEST = "EDITOR_UPDATE_CONTENT_APPEARANCE_PROPERTY_REQUEST", e.EDITOR_UPDATE_CONTENT_APPEARANCE_PROPERTY_SUCCESS = "EDITOR_UPDATE_CONTENT_APPEARANCE_PROPERTY_SUCCESS", e.EDITOR_UPDATE_CONTENT_APPEARANCE_PROPERTY_FAILURE = "EDITOR_UPDATE_CONTENT_APPEARANCE_PROPERTY_FAILURE", e.EDITOR_CONTENT_PREVIEW = "EDITOR_CONTENT_PREVIEW", e.EDITOR_IS_DIRTY = "EDITOR_IS_DIRTY", e.EDITOR_SHOW_REVERT_DIALOG = "EDITOR_SHOW_REVERT_DIALOG", e.EDITOR_SHOW_REVERT_DIALOG_DIFF = "EDITOR_SHOW_REVERT_DIALOG_DIFF", e.EDITOR_SHOW_REVERT_DIALOG_CONTRIBUTORS = "EDITOR_SHOW_REVERT_DIALOG_CONTRIBUTORS", e.EDITOR_HIDE_REVERT_DIALOG = "EDITOR_HIDE_REVERT_DIALOG", e.EDITOR_DELETE_CONTENT = "EDITOR_DELETE_CONTENT", e.EDITOR_DELETE_CONTENT_REQUEST = "EDITOR_DELETE_CONTENT_REQUEST", e.EDITOR_DELETE_CONTENT_SUCCESS = "EDITOR_DELETE_CONTENT_SUCCESS", e.EDITOR_DELETE_CONTENT_FAILURE = "EDITOR_DELETE_CONTENT_FAILURE", e.EDITOR_FETCH_COLLABORATOR_RELATIONS_REQUEST = "EDITOR_FETCH_COLLABORATOR_RELATIONS_REQUEST", e.EDITOR_FETCH_COLLABORATOR_RELATIONS_SUCCESS = "EDITOR_FETCH_COLLABORATOR_RELATIONS_SUCCESS", e.EDITOR_FETCH_COLLABORATOR_RELATIONS_FAILURE = "EDITOR_FETCH_COLLABORATOR_RELATIONS_FAILURE", e.EDITOR_FETCH_TOUCHED_RELATIONS_REQUEST = "EDITOR_FETCH_TOUCHED_RELATIONS_REQUEST", e.EDITOR_FETCH_TOUCHED_RELATIONS_SUCCESS = "EDITOR_FETCH_TOUCHED_RELATIONS_SUCCESS", e.EDITOR_FETCH_TOUCHED_RELATIONS_FAILURE = "EDITOR_FETCH_TOUCHED_RELATIONS_FAILURE", e.EDITOR_REVERT_CONTENT_REQUEST = "EDITOR_REVERT_CONTENT_REQUEST", e.EDITOR_REVERT_CONTENT_SUCCESS = "EDITOR_REVERT_CONTENT_SUCCESS", e.EDITOR_REVERT_CONTENT_FAILURE = "EDITOR_REVERT_CONTENT_FAILURE", e.EDITOR_CONTENT_PREVIEW_REQUEST = "EDITOR_CONTENT_PREVIEW_REQUEST", e.EDITOR_CONTENT_PREVIEW_SUCCESS = "EDITOR_CONTENT_PREVIEW_SUCCESS", e.EDITOR_CONTENT_PREVIEW_FAILURE = "EDITOR_CONTENT_PREVIEW_FAILURE", e.EDITOR_DRAFT_SAVE_SUCCESS = "EDITOR_DRAFT_SAVE_SUCCESS", e.SET_IS_PUBLISHING_CONTENT = "SET_IS_PUBLISHING_CONTENT", e.UPDATE_CONTENT_SPACE_KEY = "UPDATE_CONTENT_SPACE_KEY", e.CHANGE_EDITOR_MODE = "CHANGE_EDITOR_MODE", e.CONTENT_SUCCESS = "CONTENT_SUCCESS", e.HANDLE_SYNCHRONY_PUBLISH = "HANDLE_SYNCHRONY_PUBLISH", e.FETCH_RECONCILED_EDITOR_CONTENT_SUCCESS = "FETCH_RECONCILED_EDITOR_CONTENT_SUCCESS", e.FETCH_RECONCILED_EDITOR_CONTENT_FAILURE = "FETCH_RECONCILED_EDITOR_CONTENT_FAILURE", e.OPEN_HELP_MENU = "OPEN_HELP_MENU", e.CLOSE_HELP_MENU = "CLOSE_HELP_MENU", e.OPEN_HELP_MENU_ONBOARDING = "OPEN_HELP_MENU_ONBOARDING", e.OPEN_HELP_MENU_UPDATES_PANEL = "OPEN_HELP_MENU_UPDATES_PANEL", e.CLOSE_HELP_MENU_UPDATES_PANEL = "CLOSE_HELP_MENU_UPDATES_PANEL", e.FEATURE_DISCOVERED_MARK_SUCCESS = "FEATURE_DISCOVERED_MARK_SUCCESS", e.GET_TEMPLATE_EDITOR_CONTENT_REQUEST = "GET_TEMPLATE_EDITOR_CONTENT_REQUEST", e.GET_TEMPLATE_EDITOR_CONTENT_SUCCESS = "GET_TEMPLATE_EDITOR_CONTENT_SUCCESS", e.GET_TEMPLATE_EDITOR_CONTENT_FAILURE = "GET_TEMPLATE_EDITOR_CONTENT_FAILURE", e.UPDATE_TEMPLATE_REQUEST = "UPDATE_TEMPLATE_REQUEST", e.UPDATE_TEMPLATE_SUCCESS = "UPDATE_TEMPLATE_SUCCESS", e.UPDATE_TEMPLATE_FAILURE = "UPDATE_TEMPLATE_FAILURE", e.CREATE_TEMPLATE_REQUEST = "CREATE_TEMPLATE_REQUEST", e.CREATE_TEMPLATE_SUCCESS = "CREATE_TEMPLATE_SUCCESS", e.CREATE_TEMPLATE_FAILURE = "CREATE_TEMPLATE_FAILURE"
      }( s || ( s = {} ) ),
      function ( e ) {
        e.PAGE = "page", e.BLOGPOST = "blogpost"
      }( c || ( c = {} ) )
    },
    y9AH: function ( e, t, n ) {
      "use strict";
      n.d( t, "a", ( function () {
        return a
      } ) );
      const a = n( "ewfN" )
    },
    yIkG: function ( e, t, n ) {
      "use strict";
      var a = n( "2wFc" ),
        r = n( "y9AH" ),
        o = n( "WBjB" );
      const s = {
        EDIT_PAGE: "editPageScreen",
        EDIT_BLOG: "editPageScreen",
        EDIT_PAGE_V2: "editPageScreen",
        EDIT_BLOG_V2: "editPageScreen",
        EDIT_PAGE_EMBED: "editPageEmbedScreen",
        CREATE_PAGE: "editPageScreen",
        CREATE_BLOG: "editPageScreen",
        SPACE_OVERVIEW: "spaceOverviewScreen",
        VIEW_PAGE: "viewPageScreen",
        VIEW_BLOG_DATE_LEGACY: "viewPageScreen",
        VIEW_BLOG: "viewPageScreen",
        SPACE_CALENDARS: "spaceCalendarsScreen",
        ALL_UPDATES: "allUpdatesScreen",
        POPULAR: "popularScreen",
        MY_WORK_DRAFTS: "draftsScreen",
        RECENT_DRAFTS: "recentDraftsScreen",
        MY_WORK_RECENT: "recentlyWorkedOnScreen",
        RECENT_PAGES: "recentPagesScreen",
        MY_RECENTLY_VISITED: "recentlyVisitedScreen",
        RECENT_VISITED: "recentVisitedScreen",
        MY_SAVED_FOR_LATER: "savedScreen",
        RECENT_SAVED_FOR_LATER: "recentSavedScreen",
        HOME: "homeScreen"
      };
      var c = ( e, t = s ) => {
        for ( const n in e ) "object" == typeof e[ n ] && ( e[ n ].screenName = t[ n ] );
        return e
      };
      const i = Object.values( c( r.a ) );

      function u( e ) {
        return e.replace( /^:\w+/g, "" ).replace( /\(.+?\)/g, "" )
      }

      function l( e, t ) {
        const n = e.definition.pattern.split( "/" ),
          a = t.definition.pattern.split( "/" );
        for ( let r = 0; r < n.length || r < a.length; r++ ) {
          if ( !( r < n.length && r < a.length ) ) return r < n.length ? -1 : 1; {
            const e = u( n[ r ] ).length,
              t = u( a[ r ] ).length;
            if ( e < t ) return 1;
            if ( e > t ) return -1
          }
        }
        return 0
      }
      t.a = e => {
        if ( "string" != typeof e ) return {
          match: null,
          routeName: ""
        };
        const t = [];
        for ( const n of i ) {
          if ( !( n instanceof o.a ) ) continue;
          const r = n.match( Object( a.f )( e, !0 ) );
          r && t.push( {
            definition: n,
            match: r
          } )
        }
        if ( t.length >= 1 ) {
          let e = t[ 0 ];
          return t.length > 1 && ( t.sort( l ), e = t[ 0 ] ), {
            match: e.match,
            routeName: e.definition.name,
            screenName: e.definition.screenName || ""
          }
        }
        return {
          match: null,
          routeName: "",
          screenName: ""
        }
      }
    },
    yLtY: function ( e, t, n ) {
      "use strict";
      var a = n( "mWX1" );
      n.d( t, "a", ( function () {
        return a
      } ) )
    },
    "yS9+": function ( e, t, n ) {
      "use strict";
      n.d( t, "a", ( function () {
        return r
      } ) ), n.d( t, "c", ( function () {
        return o
      } ) ), n.d( t, "b", ( function () {
        return s
      } ) );
      var a = n( "Czhu" );
      const r = Symbol( "Call API" );

      function o( e, t, n ) {
        return a => ( {
          [ r ]: {
            types: [ e + "_REQUEST", e + "_SUCCESS", e + "_FAILURE" ],
            apiMethod: t,
            options: a,
            actionOptions: n
          }
        } )
      }

      function s( e ) {
        return t => Object( a.a )( {
          type: e
        }, t )
      }
    },
    yuV4: function ( e, t, n ) {
      "use strict";
      n.d( t, "a", ( function () {
        return r
      } ) );
      var a = n( "zjfJ" );
      const r = new class {
        constructor() {
          Object( a.a )( this, "measures", void 0 ), Object( a.a )( this, "startTime", void 0 ), this.measures = {}, this.startTime = 0
        }
        setStartTime() {
          this.startTime = performance.now() >> 0
        }
        run( e, t ) {
          return t()
        }
        getMeasures() {
          return Object.entries( this.measures ).sort( ( e, t ) => e[ 1 ].startTime - t[ 1 ].startTime ).reduce( ( e, [ t, n ] ) => ( e[ t ] = n, e ), {} )
        }
      }
    },
    zCQI: function ( e, t, n ) {
      "use strict";
      n.d( t, "a", ( function () {
        return o
      } ) ), n.d( t, "b", ( function () {
        return s
      } ) );
      var a = n( "ERkP" ),
        r = n.n( a );
      const o = Object( a.createContext )( {
        newCommentHighlight: void 0,
        createComment: () => {},
        clearCreateHighlight: () => {}
      } );
      o.displayName = "InlineCommentsContext";
      const s = ( {
        children: e
      } ) => {
        const [ t, n ] = Object( a.useState )();
        return r.a.createElement( o.Provider, {
          value: {
            newCommentHighlight: t,
            createComment: e => n( e ),
            clearCreateHighlight: () => n( void 0 )
          }
        }, e )
      }
    },
    zUx9: function ( e, t, n ) {
      "use strict";
      n.d( t, "d", ( function () {
        return a
      } ) ), n.d( t, "c", ( function () {
        return r
      } ) ), n.d( t, "b", ( function () {
        return o
      } ) ), n.d( t, "a", ( function () {
        return s
      } ) ), n.d( t, "e", ( function () {
        return c
      } ) );
      const a = 200,
        r = 404,
        o = 412,
        s = 500,
        c = 503
    },
    zfsr: function ( e, t, n ) {
      "use strict";
      var a = n( "ERkP" ),
        r = n.n( a ),
        o = n( "1U1M" ),
        s = n( "U63R" ),
        c = n( "w7pu" ),
        i = n( "fDrt" ),
        u = n( "X2PC" ),
        l = n( "6n9r" ),
        d = n( "t0Ff" ),
        E = n( "RfuI" );
      const p = Object( E.a )( {
        id: "J1ypV",
        name: "UpFlowLoadable",
        loader: async () => ( await Promise.all( [ n.e( "afp~af75c846" ), n.e( "vendors~4134d62c" ), n.e( "upflow~0ae2caf4" ) ] ).then( n.bind( null, "FdbS" ) ) ).UpFlowComponent
      } );
      n.d( t, "a", ( function () {
        return f
      } ) ), n.d( t, "b", ( function () {
        return m
      } ) );
      const f = Object( a.createContext )( {
          shouldShow: !1,
          isSiteAdmin: !1,
          cloudId: "",
          currentEdition: void 0,
          showUpFlow: () => {},
          hideUpFlow: () => {}
        } ),
        m = ( {
          children: e
        } ) => {
          const [ t, n ] = Object( a.useState )( !1 ), [ E, m ] = Object( a.useState )( "" ), [ b, O ] = Object( a.useState )(), [ h, g ] = Object( a.useState )(), [ _, T ] = Object( a.useState )( "" ), [ I, S ] = Object( a.useState )( "" ), {
            isSiteAdmin: C,
            tenantId: A
          } = Object( a.useContext )( c.a ), {
            data: y
          } = Object( o.d )( d.a, {} ), R = () => {
            m( "" ), T( "" ), S( "" ), n( !1 )
          };
          Object( a.useEffect )( () => {
            O( Object( l.a )( y ) )
          }, [ y ] );
          const v = {
            shouldShow: t,
            isSiteAdmin: C,
            cloudId: A,
            currentEdition: b,
            showUpFlow: ( {
              touchpointId: e,
              targetEdition: t,
              flow: a,
              epMessageId: r
            } ) => {
              m( e ), g( t ), T( a ), S( r ), n( !0 )
            },
            hideUpFlow: R
          };
          return r.a.createElement( f.Provider, {
            value: v
          }, e, t && h && _ ? r.a.createElement( i.a, {
            attribution: u.a.GROWTH_UPFLOW
          }, r.a.createElement( p, {
            priority: s.a.BACKGROUND,
            canChangeEdition: C,
            cloudId: A,
            currentEdition: b,
            flow: _,
            product: "confluence",
            targetEdition: h,
            touchpointId: E,
            onClose: R,
            onOpen: () => {},
            epMessageId: I
          } ) ) : null )
        },
        {
          Consumer: b
        } = f
    }
  },
  [
    [ "tjUo", "runtime~app", "atlaskit~66e23772", "afp~af75c846", "static~696a3ae4", "vendors~4134d62c" ]
  ],
  [ "atlaskit~66e23772", "vendors~4134d62c", 95, "atlassiansox-cross-flow-support-deferred~4134d62c" ]
] );
//# sourceMappingURL=app~493df0b3.HhuxEq2DHU.js.map
