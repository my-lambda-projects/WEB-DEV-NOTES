( window.webpackJsonp = window.webpackJsonp || [] ).push( [
  [ 55 ], {
    "/yy9": function ( e, t, n ) {
      "use strict";
      n.d( t, "c", ( function () {
        return r
      } ) ), n.d( t, "b", ( function () {
        return a
      } ) ), n.d( t, "a", ( function () {
        return i
      } ) );
      const r = 100,
        a = 350,
        i = 700
    },
    "0gjq": function ( e, t, n ) {
      "use strict";
      var r = this && this.__assign || function () {
        return ( r = Object.assign || function ( e ) {
          for ( var t, n = 1, r = arguments.length; n < r; n++ )
            for ( var a in t = arguments[ n ] ) Object.prototype.hasOwnProperty.call( t, a ) && ( e[ a ] = t[ a ] );
          return e
        } ).apply( this, arguments )
      };
      Object.defineProperty( t, "__esModule", {
        value: !0
      } ), t.bindAll = void 0;
      var a = n( "FzbR" );

      function i( e ) {
        if ( void 0 !== e ) return "boolean" == typeof e ? {
          capture: e
        } : e
      }
      t.bindAll = function ( e, t, n ) {
        var c = t.map( ( function ( t ) {
          var c = function ( e, t ) {
            return null == t ? e : r( r( {}, e ), {
              options: r( r( {}, i( t ) ), i( e.options ) )
            } )
          }( t, n );
          return a.bind( e, c )
        } ) );
        return function () {
          c.forEach( ( function ( e ) {
            return e()
          } ) )
        }
      }
    },
    "1ONf": function ( e, t, n ) {
      "use strict";
      var r = n( "Czhu" ),
        a = n( "ERkP" ),
        i = n.n( a ),
        c = n( "fDrt" ),
        o = n( "X2PC" ),
        s = n( "29F/" );
      var u = n( "33AU" ),
        l = n( "1U1M" ),
        d = n( "F4Ur" ),
        b = n( "PDFU" );
      var f = n( "YHG0" );
      const p = ( e, t ) => {
        let n = e;
        const {
          setQuickstartState: a,
          isNudgeTriggerEnabled: i
        } = e;
        switch ( t.type ) {
          case "loading":
            n = Object( r.a )( Object( r.a )( {}, e ), {}, {
              isLoading: !0
            } );
            break;
          case "error":
            n = Object( r.a )( Object( r.a )( {}, e ), {}, {
              isLoading: !1,
              isError: !0,
              error: t.error
            } );
            break;
          case "success":
            n = Object( r.a )( Object( r.a )( {}, e ), {}, {
              isLoading: !1
            }, t.state );
            break;
          case "togglePanel":
            n = Object( r.a )( Object( r.a )( {}, e ), {}, {
              isPanelOpen: t.isPanelOpen
            } ), a( "isPanelOpen", n.isPanelOpen );
            break;
          case "toggleDismiss":
            n = Object( r.a )( Object( r.a )( {}, e ), {}, {
              isDismissed: t.isDismissed
            } ), a( "isDismissed", n.isDismissed );
            break;
          case "openTask":
            n = Object( r.a )( Object( r.a )( {}, e ), {}, {
              openTaskId: t.openTaskId
            } ), a( "openTaskId", n.openTaskId || "none" );
            break;
          case "toggleComponent":
            n = Object( r.a )( Object( r.a )( {}, e ), {}, {
              openComponentId: t.openComponentId
            } ), a( "openComponentId", n.openTaskId || "none" );
            break;
          case "setHasSeenDismissedFlag":
            n = Object( r.a )( Object( r.a )( {}, e ), {}, {
              hasSeenDismissedFlag: t.hasSeenDismissedFlag
            } ), a( "hasSeenDismissedFlag", n.hasSeenDismissedFlag );
            break;
          case "completeTask":
            const c = t.taskId,
              o = s.m[ c ],
              u = s.l[ c ];
            i && u || s.f.has( c ) ? n = Object( r.a )( {}, e ) : ( n = Object( r.a )( Object( r.a )( {}, e ), {}, {
              [ o ]: !0
            } ), a( o, !0 ) );
            break;
          case "completeCurrentTask":
            const {
              task: l
            } = t;
            n = Object( r.a )( Object( r.a )( {}, e ), {}, {
              [ l ]: !0
            } ), e[ l ] || a( l, !0 )
        }
        return n
      };
      n.d( t, "b", ( function () {
        return g
      } ) ), n.d( t, "a", ( function () {
        return k
      } ) );
      const m = {
          state: {
            openTaskId: s.c,
            isPanelOpen: !0,
            isDismissed: !1,
            isLoading: !0,
            isError: !1,
            error: null,
            createSpaceCompleted: !0,
            createPageCompleted: !1,
            inviteTeammateCompleted: !1,
            sharePageCompleted: !1,
            integrationCompleted: !1,
            helpCompleted: !1,
            collaborateCompleted: !1,
            homeTourCompleted: !1,
            spaceTourCompleted: !1,
            isNudgeTriggerEnabled: !1,
            hasSeenDismissedFlag: !1,
            openComponentId: void 0,
            setQuickstartState: () => {}
          },
          openTask: () => {},
          togglePanel: () => {},
          completeTask: () => {},
          toggleDismiss: () => {},
          toggleComponent: () => {},
          completeCurrentTask: () => {},
          setHasSeenDismissedFlag: () => {}
        },
        O = i.a.createContext( m ),
        g = () => Object( a.useContext )( O ),
        k = ( j = c.a, E = {
          attribution: o.a.CC_ONBOARDING
        }, function ( e ) {
          return t => {
            const [ n, c ] = Object( a.useState )( !1 ), {
              children: o
            } = t;
            return n ? i.a.createElement( a.Fragment, null, o ) : i.a.createElement( j, Object( r.a )( Object( r.a )( {}, E ), {}, {
              onError: () => c( !0 )
            } ), i.a.createElement( e, Object( r.a )( {}, t ) ) )
          }
        } )( ( {
          children: e
        } ) => {
          const {
            isEligible: t,
            isNudgeTriggerEnabled: n
          } = Object( f.b )(), {
            fireQuickstartError: c
          } = Object( u.a )(), [ o ] = ( () => {
            const [ e ] = Object( l.c )( b.c, {
              onError: e => {
                "unauthorized" === e.graphQLErrors[ 0 ].message && Object( d.a )( e )
              }
            } );
            return [ ( t, n, r = "quickstart-state:" ) => {
              e( {
                variables: {
                  key: r + t,
                  value: "" + n
                }
              } )
            } ]
          } )(), g = Object( r.a )( Object( r.a )( {}, m.state ), {}, {
            isNudgeTriggerEnabled: n,
            setQuickstartState: o
          } );
          Object( a.useEffect )( () => {
            if ( t ) {
              const e = s.m[ s.c ];
              o( e, !0 )
            }
          }, [ t ] );
          const [ k, j ] = Object( a.useReducer )( p, g ), {
            loadState: E,
            state: h,
            error: C,
            loading: v
          } = ( () => {
            const [ e, {
              called: t,
              data: n,
              error: r,
              loading: i
            } ] = Object( l.b )( b.a, {
              fetchPolicy: "no-cache",
              variables: {
                key: Object.values( s.i )
              }
            } ), [ c, o ] = Object( a.useState )();
            return Object( a.useEffect )( () => {
              !t || i || r || o( ( e => {
                const t = {},
                  {
                    onboardingState: n
                  } = e;
                return void 0 !== n && n.forEach( ( {
                  key: e,
                  value: n
                } ) => {
                  const r = e.split( ":" )[ 1 ];
                  n && ( /(true|false)/g.test( n ) ? t[ r ] = "true" === n : t[ r ] = n )
                } ), t
              } )( n ) )
            }, [ t, n, r, i ] ), {
              loadState: e,
              state: c,
              error: r,
              loading: i
            }
          } )();
          Object( a.useMemo )( () => {
            t && E()
          }, [ t ] ), Object( a.useMemo )( () => {
            if ( !v ) return C ? ( j( {
              type: "error",
              error: C
            } ), void c( "QuickstartLoadStateError", "onboardingQuickstartLoadState" ) ) : void( h && j( {
              type: "success",
              state: h
            } ) );
            j( {
              type: "loading"
            } )
          }, [ h, C, v ] );
          const T = {
            state: k,
            openTask: e => {
              j( {
                type: "openTask",
                openTaskId: e
              } )
            },
            togglePanel: e => {
              j( {
                type: "togglePanel",
                isPanelOpen: e
              } )
            },
            completeTask: e => {
              j( {
                type: "completeTask",
                taskId: e
              } )
            },
            toggleDismiss: e => {
              j( {
                type: "toggleDismiss",
                isDismissed: e
              } )
            },
            completeCurrentTask: e => {
              j( {
                type: "completeCurrentTask",
                task: e
              } )
            },
            toggleComponent: e => {
              j( {
                type: "toggleComponent",
                openComponentId: e
              } )
            },
            setHasSeenDismissedFlag: e => {
              j( {
                type: "setHasSeenDismissedFlag",
                hasSeenDismissedFlag: e
              } )
            }
          };
          return i.a.createElement( O.Provider, {
            value: T
          }, e )
        } );
      var j, E
    },
    "1jzs": function ( e, t, n ) {
      "use strict";
      n.d( t, "a", ( function () {
        return a
      } ) );
      var r = n( "ERkP" );
      const a = "undefined" == typeof window ? r.useEffect : r.useLayoutEffect
    },
    "29F/": function ( e, t, n ) {
      "use strict";
      n.d( t, "i", ( function () {
        return a
      } ) ), n.d( t, "c", ( function () {
        return i
      } ) ), n.d( t, "b", ( function () {
        return c
      } ) ), n.d( t, "h", ( function () {
        return o
      } ) ), n.d( t, "j", ( function () {
        return s
      } ) ), n.d( t, "g", ( function () {
        return u
      } ) ), n.d( t, "d", ( function () {
        return l
      } ) ), n.d( t, "k", ( function () {
        return d
      } ) ), n.d( t, "e", ( function () {
        return b
      } ) ), n.d( t, "a", ( function () {
        return f
      } ) ), n.d( t, "l", ( function () {
        return p
      } ) ), n.d( t, "m", ( function () {
        return m
      } ) ), n.d( t, "f", ( function () {
        return O
      } ) );
      var r = n( "Qdol" );
      const a = {
          IS_PANEL_OPEN: "quickstart-state:isPanelOpen",
          IS_DISMISSED: "quickstart-state:isDismissed",
          OPEN_TASK_ID: "quickstart-state:openTaskId",
          OPEN_COMPONENT_ID: "quickstart-state:openComponentId",
          CREATE_SPACE_COMPLETED: "quickstart-state:createSpaceCompleted",
          CREATE_PAGE_COMPLETED: "quickstart-state:createPageCompleted",
          INVITE_TEAMMATE_COMPLETED: "quickstart-state:inviteTeammateCompleted",
          SHARE_PAGE_COMPLETED: "quickstart-state:sharePageCompleted",
          INTEGRATION_COMPLETED: "quickstart-state:integrationCompleted",
          HELP_COMPLETED: "quickstart-state:helpCompleted",
          SPACE_TOUR_COMPLETED: "quickstart-state:spaceTourCompleted",
          COLLABORATE_COMPLETED: "quickstart-state:collaborateCompleted",
          HOME_TOUR_COMPLETED: "quickstart-state:homeTourCompleted",
          HAS_SEEN_DISMISSED_FLAG: "quickstart-state:hasSeenDismissedFlag"
        },
        i = "quickstart-checklist.create-space",
        c = "quickstart-checklist.create-page",
        o = "quickstart-checklist.invite-teammate",
        s = "quickstart-checklist.share-page",
        u = "quickstart-checklist.integration",
        l = "quickstart-checklist.help",
        d = "quickstart-checklist.space-tour",
        b = "quickstart-checklist.find-home",
        f = "quickstart-checklist.collaborate",
        p = {
          [ c ]: r.d,
          [ o ]: r.j
        },
        m = {
          [ i ]: "createSpaceCompleted",
          [ c ]: "createPageCompleted",
          [ o ]: "inviteTeammateCompleted",
          [ s ]: "sharePageCompleted",
          [ u ]: "integrationCompleted",
          [ l ]: "helpCompleted",
          [ d ]: "spaceTourCompleted",
          [ b ]: "homeTourCompleted",
          [ f ]: "collaborateCompleted"
        },
        O = new Set( [ d, b, f ] )
    },
    "33AU": function ( e, t, n ) {
      "use strict";
      n.d( t, "b", ( function () {
        return o
      } ) ), n.d( t, "a", ( function () {
        return s
      } ) );
      var r = n( "ERkP" ),
        a = n( "z9P0" ),
        i = n( "6z9Z" ),
        c = n( "3VMZ" );
      const o = () => {
          const e = Object( r.useContext )( i.a );
          return {
            experienceTracker: e,
            startOnboardingQuickstart: () => {
              e.start( {
                name: c.a.ONBOARDING_QUICKSTART
              } )
            },
            failOnboardingQuickstart: t => {
              e.fail( {
                name: c.a.ONBOARDING_QUICKSTART,
                error: t || new Error( "Experience Tracker: Onboarding Quickstart Failed" )
              } )
            },
            finishOnboardingQuickstart: () => {
              e.succeed( {
                name: c.a.ONBOARDING_QUICKSTART
              } )
            }
          }
        },
        s = () => {
          const {
            createAnalyticsEvent: e
          } = Object( a.a )(), t = Object( r.useCallback )( ( t, n ) => {
            e( {
              data: {
                attributes: {
                  completedTasks: t,
                  totalTasks: n,
                  namespaces: "nuxOnboardingQuickstartDrawer"
                },
                name: "nuxOnboardingQuickstartDrawer"
              },
              type: "sendScreenEvent"
            } ).fire()
          }, [ e ] ), n = Object( r.useCallback )( t => {
            e( {
              type: "sendUIEvent",
              data: {
                source: "nuxOnboardingQuickstartDrawer",
                actionSubject: "button",
                action: t ? "opened" : "closed",
                actionSubjectId: "nuxOnboardingQuickstart",
                attributes: {
                  namespaces: "nuxOnboardingQuickstartDrawer"
                }
              }
            } ).fire()
          }, [ e ] ), i = Object( r.useCallback )( t => {
            e( {
              type: "sendScreenEvent",
              data: {
                attributes: {
                  products: t
                },
                name: "exploreIntegrationsQuickstartDrawer"
              }
            } ).fire()
          }, [ e ] ), c = Object( r.useCallback )( () => {
            e( {
              type: "sendScreenEvent",
              data: {
                name: "nuxOnboardingQuickstartButtonDrawer"
              }
            } ).fire()
          }, [ e ] ), o = Object( r.useCallback )( () => {
            e( {
              type: "sendUIEvent",
              data: {
                source: "nuxOnboardingQuickstartButtonDrawer",
                actionSubject: "button",
                action: "clicked",
                actionSubjectId: "nuxOnboardingQuickstartButton",
                attributes: {
                  namespaces: "navigationNextScreen.nuxOnboardingQuickstartButtonDrawer"
                }
              }
            } ).fire()
          }, [ e ] ), s = Object( r.useCallback )( ( t, n, r, a ) => {
            e( {
              type: "sendUIEvent",
              data: {
                source: "nuxOnboardingQuickstartDrawer",
                actionSubject: "checklistItem",
                action: t ? "opened" : "closed",
                actionSubjectId: a,
                attributes: {
                  taskPosition: n,
                  taskId: r,
                  namespaces: "nuxOnboardingQuickstartDrawer"
                }
              }
            } ).fire()
          }, [ e ] ), u = Object( r.useCallback )( ( t, n, r ) => {
            const a = {
              namespaces: "nuxOnboardingQuickstartDrawer"
            };
            t && ( a.completedTasks = n, a.totalTasks = r ), e( {
              type: "sendUIEvent",
              data: {
                source: "nuxOnboardingQuickstartDrawer",
                actionSubject: "button",
                action: t ? "dismissed" : "reactivated",
                actionSubjectId: "nuxOnboardingQuickstart",
                attributes: a
              }
            } ).fire()
          }, [ e ] );
          return {
            firePanelViewed: t,
            firePanelToggled: n,
            fireExploreIntegrationsExpanded: i,
            fireButtonViewed: c,
            fireButtonClicked: o,
            fireTaskToggled: s,
            fireQuickstartError: Object( r.useCallback )( ( t, n ) => {
              e( {
                type: "sendOperationalEvent",
                data: {
                  source: t,
                  action: "failed",
                  actionSubject: "onboardingQuickstart",
                  actionSubjectId: n
                }
              } ).fire()
            }, [ e ] ),
            fireDismissToggled: u,
            fireCtaClicked: Object( r.useCallback )( t => {
              e( {
                type: "sendUIEvent",
                data: {
                  source: t,
                  action: "clicked",
                  actionSubject: "button",
                  actionSubjectId: "nuxOnboardingQuickstartCta",
                  attributes: {
                    namespaces: "nuxOnboardingQuickstartDrawer"
                  }
                }
              } ).fire()
            }, [ e ] )
          }
        }
    },
    A46D: function ( e, t, n ) {
      "use strict";
      n.d( t, "b", ( function () {
        return r
      } ) ), n.d( t, "c", ( function () {
        return a
      } ) ), n.d( t, "a", ( function () {
        return i
      } ) );
      const r = "cubic-bezier(0.15,1,0.3,1)",
        a = "cubic-bezier(0.2,0,0,1)",
        i = "cubic-bezier(0.8,0,0,0.8)"
    },
    FzbR: function ( e, t, n ) {
      "use strict";
      Object.defineProperty( t, "__esModule", {
        value: !0
      } ), t.bind = void 0, t.bind = function ( e, t ) {
        var n = t.type,
          r = t.listener,
          a = t.options;
        return e.addEventListener( n, r, a ),
          function () {
            e.removeEventListener( n, r, a )
          }
      }
    },
    HKB3: function ( e, t, n ) {
      "use strict";
      n.d( t, "a", ( function () {
        return i
      } ) ), n.d( t, "c", ( function () {
        return c
      } ) ), n.d( t, "d", ( function () {
        return o
      } ) ), n.d( t, "b", ( function () {
        return s
      } ) );
      var r = n( "Kttv" ),
        a = n.n( r );
      let i;
      ! function ( e ) {
        e.ENROLLED = "enrolled", e.NOT_ENROLLED = "not-enrolled", e.CONTROL = "control", e.EXPERIMENT = "experiment"
      }( i || ( i = {} ) );
      const c = ( e, t, n ) => e.getVariantValue( t, {
          default: i.NOT_ENROLLED,
          oneOf: [ i.EXPERIMENT, i.NOT_ENROLLED, i.CONTROL, i.ENROLLED ],
          shouldTrackExposureEvent: n
        } ),
        o = e => parseInt( a()( e ).substring( 0, 7 ), 16 ) % 100 < 20,
        s = Object.keys( i ).map( e => i[ e ] )
    },
    PDFU: function ( e, t, n ) {
      "use strict";
      n.d( t, "a", ( function () {
        return i
      } ) ), n.d( t, "c", ( function () {
        return c
      } ) ), n.d( t, "b", ( function () {
        return o
      } ) );
      var r = n( "H5qd" ),
        a = n.n( r );
      const i = a.a `query GetQuickstartState($key:[String]){onboardingState(key:$key){key value}}`,
        c = a.a `mutation SetQuickstartState($key:String$value:String)@experimental{experimentalSetOnboardingState(key:$key value:$value){key value}}`,
        o = a.a `query isAdmin{isSiteAdmin}`
    },
    Xcdj: function ( e, t, n ) {
      "use strict";
      var r = n( "Czhu" ),
        a = n( "ERkP" ),
        i = n.n( a ),
        c = n( "l1C2" ),
        o = n( "bhMQ" ),
        s = n( "/yy9" ),
        u = n( "ZIFe" ),
        l = n( "pwfR" );
      n( "1jzs" );
      const d = Object( a.createContext )( () => ( {
          isReady: !0,
          delay: 0,
          ref: () => {}
        } ) ),
        b = () => {
          const e = function () {
            const e = Object( a.useRef )( "" );
            return e.current || ( e.current = "_" + ( Number( String( Math.random() ).slice( 2 ) ) + Date.now() + Math.round( performance.now() ) ).toString( 36 ) ), e.current
          }();
          return Object( a.useContext )( d )( e )
        };
      t.a = ( {
        children: e,
        animationTimingFunction: t,
        enteringAnimation: n,
        exitingAnimation: d,
        isPaused: f,
        onFinish: p,
        duration: m = s.a
      } ) => {
        const O = b(),
          {
            isExiting: g,
            onFinish: k,
            appear: j
          } = Object( l.b )(),
          E = Object( u.b )(),
          h = f || !O.isReady,
          C = g ? 0 : O.delay,
          v = g ? "exiting" : "entering",
          [ T, y ] = Object( a.useState )( j );
        return Object( a.useEffect )( () => {
          let e = !1;
          if ( !h ) {
            if ( j ) return y( !0 ), E( () => {
              "exiting" === v && k && k(), e || y( !1 ), p && p( v )
            }, g ? .5 * m : m + C ), () => {
              e = !0
            };
            p && p( v )
          }
        }, [ k, v, g, m, C, h, E ] ), i.a.createElement( c.b, null, ( {
          css: a
        } ) => e( {
          ref: O.ref,
          className: T ? a( Object( r.a )( {
            animationName: "" + Object( c.g )( g && d || n ),
            animationTimingFunction: t( v ),
            animationDelay: C + "ms",
            animationFillMode: g ? "forwards" : "backwards",
            animationDuration: ( g ? .5 * m : m ) + "ms",
            animationPlayState: h ? "paused" : "running"
          }, Object( o.b )() ) ) : ""
        }, v ) )
      }
    },
    YHG0: function ( e, t, n ) {
      "use strict";
      var r = n( "ERkP" ),
        a = n( "1U1M" ),
        i = n( "a0gl" ),
        c = n( "Ua4J" ),
        o = n( "TSpG" ),
        s = n( "bPAi" ),
        u = n( "RNvQ" ),
        l = n.n( u );
      var d = n( "PDFU" );
      n.d( t, "a", ( function () {
        return f
      } ) ), n.d( t, "b", ( function () {
        return p
      } ) );
      const b = [ "VIEW_BLOG_DATE_LEGACY" ],
        f = () => {
          var e;
          const {
            data: t,
            loading: n,
            error: r
          } = Object( a.d )( d.b );
          return {
            isAdmin: !n && !r && Boolean( null != ( e = t ) ? e.isSiteAdmin : e )
          }
        },
        p = () => {
          const {
            location: e,
            matchRoute: t
          } = Object( r.useContext )( c.a ), {
            featureFlagClient: n,
            locale: a,
            cloudId: u,
            userId: d
          } = Object( i.a )(), {
            isAdmin: p
          } = f(), {
            QUICKSTART: m
          } = o.a, {
            name: O
          } = e && e.pathname && t( e.pathname ) || {}, g = !( !O || /LEGACY|ADMIN|^CALENDAR$/.test( O ) && -1 === b.indexOf( O ) ), {
            width: k
          } = ( () => {
            const e = "object" == typeof window,
              t = () => ( {
                width: e ? window.innerWidth : void 0,
                height: e ? window.innerHeight : void 0
              } ),
              [ n, a ] = Object( r.useState )( t );
            return Object( r.useEffect )( () => {
              const e = l()( () => {
                a( t() )
              }, 200 );
              return window.addEventListener( "resize", e ), () => {
                window.removeEventListener( "resize", e ), e.cancel()
              }
            }, [] ), n
          } )(), j = k >= 1130, E = g && !!d && j, h = Object( s.a )( m, n, !1, a, u ) && p, C = Object( s.a )( "confluence.frontend.onboarding.quickstart.nudge", n, !1, a, u ) && j, v = Object( s.a )( o.a.NTH_USER_QUICKSTART, n, !1, a, u ) && !p;
          return {
            isEligible: E && ( h || v ),
            isTarget: E,
            isAdminFlagEnabled: h,
            isNudgeTriggerEnabled: C,
            isNthUserQSEligible: v
          }
        }
    },
    ZIFe: function ( e, t, n ) {
      "use strict";
      n.d( t, "a", ( function () {
        return i
      } ) ), n.d( t, "b", ( function () {
        return c
      } ) );
      var r = n( "ERkP" );
      const a = e => {
          switch ( e.cleanup ) {
            case "next-effect":
              return;
            case "unmount":
            default:
              return []
          }
        },
        i = ( e = {
          cleanup: "unmount"
        } ) => {
          const t = Object( r.useRef )( [] );
          return Object( r.useEffect )( () => () => {
            t.current.length && ( t.current.forEach( e => cancelAnimationFrame( e ) ), t.current = [] )
          }, a( e ) ), Object( r.useCallback )( e => {
            const n = requestAnimationFrame( r => {
              t.current = t.current.filter( e => e !== n ), e( r )
            } );
            t.current.push( n )
          }, [] )
        },
        c = ( e = {
          cleanup: "unmount"
        } ) => {
          const t = Object( r.useRef )( [] );
          return Object( r.useEffect )( () => () => {
            t.current.length && ( t.current.forEach( e => clearTimeout( e ) ), t.current = [] )
          }, a( e ) ), Object( r.useCallback )( ( e, n, ...r ) => {
            const a = setTimeout( () => {
              t.current = t.current.filter( e => e !== a ), e()
            }, n, ...r );
            t.current.push( a )
          }, [] )
        }
    },
    a8dO: function ( e, t, n ) {
      "use strict";
      var r = n( "Czhu" ),
        a = n( "ERkP" ),
        i = n.n( a ),
        c = n( "l1C2" ),
        o = n( "bES6" ),
        s = n( "z9P0" ),
        u = n( "NnKS" );

      function l( {
        fn: e,
        action: t,
        componentName: n,
        packageName: i,
        packageVersion: c,
        analyticsData: o
      } ) {
        const {
          createAnalyticsEvent: l
        } = Object( s.a )(), d = Object( u.a )( o ), b = Object( u.a )( e );
        return Object( a.useCallback )( () => {
          const e = l( {
              action: t,
              actionSubject: n,
              attributes: {
                componentName: n,
                packageName: i,
                packageVersion: c
              }
            } ),
            a = Object( r.a )( {
              componentName: n,
              packageName: i,
              packageVersion: c
            }, d.current );
          e.context.push( a );
          const o = e.clone();
          o && o.fire( "atlaskit" ), b.current( e )
        }, [ t, n, i, c, l, d, b ] )
      }
      var d = n( "pwfR" ),
        b = n( "b6XK" ),
        f = n( "bLpi" ),
        p = n( "PEqI" ),
        m = n( "BMbf" );
      let O = null;

      function g() {
        null != O && ( window.clearTimeout( O ), O = null )
      }

      function k( e, t ) {
        g(), O = window.setTimeout( () => {
          O = null, e()
        }, t )
      }
      let j = null;
      var E = n( "3IV/" ),
        h = n( "EFzz" ),
        C = n( "uvkf" );
      const v = Object( c.e )( "border-radius:", Object( m.c )(), "px;box-sizing:border-box;font-size:12px;left:0;line-height:1.3;max-width:240px;padding:2px 6px;top:0;word-wrap:break-word;overflow-wrap:break-word;" ),
        T = {
          name: "v0nulc",
          styles: "max-width:420px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;"
        },
        y = Object( a.forwardRef )( ( function ( {
          style: e,
          className: t,
          children: n,
          truncate: r,
          placement: a,
          testId: i
        }, o ) {
          return Object( c.f )( h.a.Consumer, null, ( {
            mode: s
          } ) => Object( c.f )( C.a, {
            ref: o,
            style: e,
            className: t,
            placement: a,
            testId: i,
            css: [ v, r ? T : null, Object( c.e )( "background-color:", "light" === s ? E.N800 : E.DN0, ";color:", "light" === s ? E.N0 : E.DN600, ";" ) ]
          }, n ) )
        } ) );
      y.displayName = "TooltipContainer";
      var w = y;

      function S( e ) {
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
      var I = n( "jYB6" );
      const D = m.i.tooltip(),
        N = {
          componentName: "tooltip",
          packageName: I.a,
          packageVersion: I.b
        };

      function P() {}

      function x( {
        children: e,
        position: t = "bottom",
        mousePosition: n = "bottom",
        content: s,
        truncate: u = !1,
        component: m = w,
        tag: O = "div",
        testId: E,
        delay: h = 300,
        onShow: C = P,
        onHide: v = P,
        hideTooltipOnClick: T = !1,
        hideTooltipOnMouseDown: y = !1,
        analyticsContext: I,
        strategy: x = "fixed"
      } ) {
        const R = "mouse" === t ? n : t,
          A = l( Object( r.a )( {
            fn: C,
            action: "displayed",
            analyticsData: I
          }, N ) ),
          Q = l( Object( r.a )( {
            fn: v,
            action: "hidden",
            analyticsData: I
          }, N ) ),
          _ = Object( a.useRef )( null ),
          [ L, M ] = Object( a.useState )( "hide" ),
          F = Object( a.useRef )( null ),
          H = Object( a.useRef )( null ),
          q = Object( a.useCallback )( e => {
            e && null !== e.firstChild && ( H.current = e, F.current = e.firstChild )
          }, [] ),
          U = Object( a.useRef )( L ),
          B = Object( a.useRef )( h ),
          z = Object( a.useRef )( {
            onShowHandler: A,
            onHideHandler: Q
          } ),
          G = Object( a.useRef )( !1 );
        Object( a.useEffect )( () => {
          U.current = L, B.current = h, z.current = {
            onShowHandler: A,
            onHideHandler: Q
          }
        }, [ h, Q, A, L ] );
        const V = Object( a.useCallback )( e => {
            _.current = e, G.current = !1
          }, [] ),
          K = Object( a.useCallback )( () => {
            _.current && ( G.current && z.current.onHideHandler(), _.current = null, G.current = !1, M( "hide" ) )
          }, [] ),
          X = Object( a.useCallback )( () => {
            _.current && ( _.current.abort(), G.current && z.current.onHideHandler(), _.current = null )
          }, [] );
        Object( a.useEffect )( ( function () {
          return function () {
            _.current && X()
          }
        } ), [ X ] );
        const Y = Object( a.useCallback )( e => {
          if ( _.current && !_.current.isActive() && X(), _.current && _.current.isActive() ) return void _.current.keep();
          const t = function ( e ) {
            let t = "waiting-to-show";

            function n() {
              return Boolean( j && j.entry === e )
            }

            function r() {
              n() && ( g(), j = null )
            }

            function a() {
              n() && e.done(), t = "done", r()
            }

            function i() {
              n() && e.hide( {
                isImmediate: !0
              } ), a()
            }

            function c() {
              return "shown" === t || "waiting-to-hide" === t || "hide-animating" === t
            }
            return function () {
              const n = Boolean( j && j.isVisible() );

              function r() {
                t = "shown", e.show( {
                  isImmediate: n
                } )
              }
              j && ( g(), j.entry.hide( {
                isImmediate: !0
              } ), j.entry.done(), j = null ), j = {
                entry: e,
                isVisible: c
              }, n ? r() : ( t = "waiting-to-show", k( r, e.delay ) )
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
                n() && ( "waiting-to-show" !== t ? "waiting-to-hide" !== t && ( r ? i() : ( t = "waiting-to-hide", k( () => {
                  t = "hide-animating", e.hide( {
                    isImmediate: !1
                  } )
                }, e.delay ) ) ) : i() )
              },
              finishHideAnimation: function () {
                n() && "hide-animating" === t && a()
              },
              getInitialMouse: function () {
                return "mouse" === e.source.type ? e.source.mouse : null
              }
            }
          }( {
            source: e,
            delay: B.current,
            show: ( {
              isImmediate: e
            } ) => {
              G.current || ( G.current = !0, z.current.onShowHandler() ), M( e ? "show-immediate" : "show-fade-in" )
            },
            hide: ( {
              isImmediate: e
            } ) => {
              M( t => "hide" !== t ? e ? "hide" : "fade-out" : t )
            },
            done: K
          } );
          V( t )
        }, [ X, K, V ] );
        Object( a.useEffect )( () => {
          if ( "hide" === L ) return P;
          return Object( o.bind )( window, {
            type: "scroll",
            listener: () => {
              _.current && _.current.requestHide( {
                isImmediate: !0
              } )
            },
            options: {
              capture: !0,
              passive: !0,
              once: !0
            }
          } )
        }, [ L ] );
        const $ = Object( a.useCallback )( () => {
            y && _.current && _.current.requestHide( {
              isImmediate: !0
            } )
          }, [ y ] ),
          J = Object( a.useCallback )( () => {
            T && _.current && _.current.requestHide( {
              isImmediate: !0
            } )
          }, [ T ] ),
          Z = Object( a.useCallback )( e => {
            if ( e.target === H.current ) return;
            if ( e.defaultPrevented ) return;
            e.preventDefault();
            const n = "mouse" === t ? {
              type: "mouse",
              mouse: S( {
                left: e.clientX,
                top: e.clientY
              } )
            } : {
              type: "keyboard"
            };
            Y( n )
          }, [ t, Y ] ),
          W = Object( a.useCallback )( e => {
            e.target !== H.current && ( e.defaultPrevented || ( e.preventDefault(), _.current && _.current.requestHide( {
              isImmediate: !1
            } ) ) )
          }, [] ),
          ee = Object( a.useCallback )( () => {
            Y( {
              type: "keyboard"
            } )
          }, [ Y ] ),
          te = Object( a.useCallback )( () => {
            _.current && _.current.requestHide( {
              isImmediate: !1
            } )
          }, [] ),
          ne = Object( a.useCallback )( e => {
            "exiting" === e && "fade-out" === U.current && _.current && _.current.finishHideAnimation()
          }, [] ),
          re = O,
          ae = "hide" !== L && Boolean( s ),
          ie = "show-immediate" === L || "show-fade-in" === L;
        return Object( c.f )( i.a.Fragment, null, Object( c.f )( re, {
          onMouseOver: Z,
          onMouseOut: W,
          onClick: J,
          onMouseDown: $,
          onFocus: ee,
          onBlur: te,
          ref: q,
          "data-testid": E ? E + "--container" : void 0
        }, e ), ae ? Object( c.f )( p.a, {
          zIndex: D
        }, Object( c.f )( f.a, {
          placement: R,
          referenceElement: ( () => {
            const e = _.current,
              n = e ? e.getInitialMouse() : null;
            return "mouse" === t && n ? n : F.current || void 0
          } )(),
          strategy: x
        }, ( {
          ref: e,
          style: t
        } ) => Object( c.f )( d.a, {
          appear: !0
        }, ie && Object( c.f )( b.a, {
          onFinish: ne,
          duration: "show-immediate" === L ? 0 : void 0
        }, ( {
          className: n
        } ) => Object( c.f )( m, {
          ref: e,
          className: "Tooltip " + n,
          style: t,
          truncate: u,
          placement: R,
          testId: E
        }, s ) ) ) ) ) : null )
      }
      x.displayName = "Tooltip";
      t.a = x
    },
    b6XK: function ( e, t, n ) {
      "use strict";
      var r = n( "HbGN" ),
        a = n( "Czhu" ),
        i = n( "ERkP" ),
        c = n.n( i ),
        o = n( "A46D" ),
        s = n( "/yy9" ),
        u = n( "Xcdj" );
      const l = {
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
        b = e => ( {
          from: {
            opacity: 1,
            transform: void 0 !== e ? "translate3d(0, 0, 0)" : void 0
          },
          to: Object( a.a )( {
            opacity: 0
          }, void 0 !== e && {
            transform: d[ e ]
          } )
        } );
      t.a = e => {
        let {
          children: t,
          duration: n = s.a,
          entranceDirection: i
        } = e, d = Object( r.a )( e, [ "children", "duration", "entranceDirection" ] );
        return c.a.createElement( u.a, Object.assign( {
          duration: n,
          enteringAnimation: ( f = i, {
            from: Object( a.a )( {
              opacity: 0
            }, void 0 !== f && {
              transform: l[ f ]
            } ),
            "50%": {
              opacity: 1
            },
            to: {
              transform: void 0 !== f ? "none" : void 0
            }
          } ),
          exitingAnimation: b( i ),
          animationTimingFunction: () => o.b
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
      var a = n( "0gjq" );
      Object.defineProperty( t, "bindAll", {
        enumerable: !0,
        get: function () {
          return a.bindAll
        }
      } )
    },
    bPAi: function ( e, t, n ) {
      "use strict";
      n.d( t, "a", ( function () {
        return a
      } ) );
      var r = n( "HKB3" );
      const a = ( e, t, n = !0, a, i ) => {
        const c = Object( r.c )( t, e, n );
        if ( c === r.a.ENROLLED ) return !0;
        if ( c === r.a.EXPERIMENT ) {
          if ( t.getBooleanValue( "confluence.frontend.onboarding.segment.holdout", {
              default: !1,
              shouldTrackExposureEvent: n
            } ) && Object( r.d )( i ) ) return !1;
          const e = t.getBooleanValue( "confluence.frontend.onboarding.segment.en-only", {
              default: !0,
              shouldTrackExposureEvent: n
            } ),
            c = /^en/i.test( a );
          if ( e && !c ) return !1;
          return Object( r.c )( t, "confluence.frontend.onboarding.segment", n ) === r.a.EXPERIMENT
        }
        return !1
      }
    },
    bhMQ: function ( e, t, n ) {
      "use strict";
      n.d( t, "a", ( function () {
        return r
      } ) ), n.d( t, "b", ( function () {
        return a
      } ) );
      const r = () => {
          if ( "undefined" == typeof window || !( "matchMedia" in window ) ) return !1;
          const {
            matches: e
          } = window.matchMedia( "(prefers-reduced-motion: reduce)" );
          return e
        },
        a = () => ( {
          "@media (prefers-reduced-motion: reduce)": {
            animation: "none",
            transition: "none"
          }
        } )
    },
    jYB6: function ( e ) {
      e.exports = JSON.parse( '{"a":"@atlaskit/tooltip","b":"17.1.1"}' )
    },
    "l/+N": function ( e, t, n ) {
      "use strict";
      n.d( t, "a", ( function () {
        return s
      } ) );
      var r = n( "a0gl" ),
        a = n( "TSpG" ),
        i = n( "bPAi" ),
        c = n( "1ONf" ),
        o = n( "YHG0" );
      const s = () => {
        const {
          state: e
        } = Object( c.b )(), {
          isEligible: t,
          isTarget: n,
          isNudgeTriggerEnabled: s,
          isNthUserQSEligible: u
        } = Object( o.b )(), {
          featureFlagClient: l,
          locale: d,
          cloudId: b
        } = Object( r.a )(), {
          QUICKSTART: f
        } = a.a, {
          isDismissed: p,
          isError: m,
          isLoading: O
        } = e, {
          isAdmin: g
        } = Object( o.a )(), k = !O && !m && n && !p;
        g ? Object( i.a )( f, l, k, d, b ) : Object( i.a )( a.a.NTH_USER_QUICKSTART, l, !0, d, b );
        return {
          isQuickstartReactivateEnabled: t && p,
          isQuickstartEnabled: t,
          isNudgeTriggerEnabled: s,
          isNthUserQSEligible: u
        }
      }
    },
    pwfR: function ( e, t, n ) {
      "use strict";
      var r = n( "ERkP" ),
        a = n.n( r ),
        i = n( "bhMQ" );
      n.d( t, "b", ( function () {
        return l
      } ) );
      const c = {
          appear: !0,
          isExiting: !1
        },
        o = Object( r.createContext )( c ),
        s = ( e, t = c ) => a.a.createElement( o.Provider, {
          key: e.key + "-provider",
          value: t
        }, e ),
        u = e => e.reduce( ( e, t ) => ( e[ t.key ] = t, e ), {} ),
        l = () => Object( r.useContext )( o );
      t.a = ( {
        appear: e = !1,
        children: t,
        exitThenEnter: n
      } ) => {
        const a = ( e => {
            const t = [];
            return r.Children.toArray( e ).forEach( e => {
              "boolean" != typeof e && t.push( e )
            } ), t
          } )( t ),
          c = u( a ),
          o = Object( r.useRef )( [] ),
          l = Object( r.useRef )( [] ),
          d = ( () => {
            const [ , e ] = Object( r.useState )( {} );
            return Object( r.useCallback )( () => e( {} ), [] )
          } )(),
          b = Object( r.useRef )( {} ),
          f = Object( r.useRef )( e ),
          p = Object( r.useMemo )( () => ( {
            appear: f.current,
            isExiting: !1
          } ), [ f.current ] );
        return Object( i.a )() ? a : ( f.current || ( f.current = !0 ), o.current.length && ( ( e, t ) => {
          for ( let n = 0; n < t.length; n++ ) {
            if ( !e[ t[ n ].key ] ) return !0
          }
          return !1
        } )( c, o.current ) ? ( ( 0 === l.current.length || ( ( e, t ) => {
          let n = !1;
          return t.forEach( t => {
            e.current[ t.key ] && ( n = !0, delete e.current[ t.key ] )
          } ), n
        } )( b, a ) ) && ( l.current = o.current ), o.current = a, ( n ? l.current : ( ( e, t ) => {
          const n = t.concat( [] ),
            r = u( t );
          for ( let a = 0; a < e.length; a++ ) {
            const t = e[ a ];
            !r[ t.key ] && n.splice( a + 1, 0, t )
          }
          return n
        } )( a, l.current ) ).map( e => {
          const t = c[ e.key ];
          return t ? s( t, p ) : ( b.current[ e.key ] = !0, s( e, {
            isExiting: !0,
            appear: !0,
            onFinish: () => {
              delete b.current[ e.key ], 0 === Object.keys( b.current ).length && ( o.current = [], l.current = [], d() )
            }
          } ) )
        } ) ) : ( o.current = a, a.map( e => s( e, p ) ) ) )
      }
    },
    uvkf: function ( e, t, n ) {
      "use strict";
      var r = n( "ERkP" ),
        a = n( "l1C2" ),
        i = n( "BMbf" );
      const c = Object( a.e )( "z-index:", i.i.tooltip(), ";pointer-events:none;" ),
        o = Object( r.forwardRef )( ( function ( {
          style: e,
          className: t,
          children: n,
          placement: r,
          testId: i
        }, o ) {
          return Object( a.f )( "div", {
            role: "tooltip",
            ref: o,
            style: e,
            className: t,
            css: c,
            "data-placement": r,
            "data-testid": i
          }, n )
        } ) );
      o.displayName = "TooltipPrimitive", t.a = o
    }
  }
] );
//# sourceMappingURL=55.MPi31dYNhQ.js.map
