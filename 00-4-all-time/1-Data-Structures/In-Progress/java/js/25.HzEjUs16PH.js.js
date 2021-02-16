( window.webpackJsonp = window.webpackJsonp || [] ).push( [
  [ 25 ], {
    "/voU": function ( e, t, n ) {
      "use strict";
      n.d( t, "a", ( function () {
        return s
      } ) );
      var r = n( "MjPE" ),
        i = n( "pL3m" );
      class s {
        constructor( e, t = {} ) {
          this.nameCache = new Map, this.nameQueue = new Map, this.nameStartTime = new Map, this.processingQueue = new Map, this.debounce = 0, this.processQueue = () => {
            clearTimeout( this.debounce ), this.debounce = 0;
            const {
              queue: e,
              extraQueue: t
            } = this.splitQueueAtLimit();
            this.nameQueue = t, this.processingQueue = new Map( [ ...this.processingQueue, ...e ] ), this.client.lookupMentionNames( Array.from( e.keys() ) ).then( t => {
              t.forEach( t => {
                const {
                  id: n
                } = t;
                e.delete( n ), this.resolveQueueItem( t )
              } ), e.forEach( ( e, t ) => {
                this.resolveQueueItem( {
                  id: t,
                  status: r.a.UNKNOWN
                } )
              } )
            } ).catch( () => {
              e.forEach( ( e, t ) => {
                this.resolveQueueItem( {
                  id: t,
                  status: r.a.SERVICE_ERROR
                } )
              } )
            } ), this.nameQueue.size > 0 && this.scheduleProcessQueue()
          }, this.client = e, this.fireHydrationEvent = Object( i.g )( t )
        }
        lookupName( e ) {
          const t = this.nameCache.get( e );
          return t ? ( this.fireAnalytics( !0, t ), t ) : new Promise( t => {
            const n = this.processingQueue.get( e );
            n && this.processingQueue.set( e, [ ...n, t ] );
            const r = this.nameQueue.get( e ) || [];
            this.nameQueue.set( e, [ ...r, t ] ), 0 !== r.length || n || this.nameStartTime.set( e, Date.now() ), this.scheduleProcessQueue(), this.isQueueAtLimit() && this.processQueue()
          } )
        }
        cacheName( e, t ) {
          this.nameCache.set( e, {
            id: e,
            name: t,
            status: r.a.OK
          } )
        }
        scheduleProcessQueue() {
          this.debounce || ( this.debounce = window.setTimeout( this.processQueue, s.waitForBatch ) )
        }
        isQueueAtLimit() {
          return this.nameQueue.size >= this.client.getLookupLimit()
        }
        splitQueueAtLimit() {
          const e = Array.from( this.nameQueue.entries() ),
            t = this.client.getLookupLimit();
          return {
            queue: new Map( e.slice( 0, t ) ),
            extraQueue: new Map( e.slice( t ) )
          }
        }
        resolveQueueItem( e ) {
          const {
            id: t
          } = e, n = this.processingQueue.get( t );
          n && ( this.processingQueue.delete( t ), this.nameCache.set( t, e ), n.forEach( t => {
            try {
              t( e )
            } catch ( n ) {}
          } ), this.fireAnalytics( !1, e ) )
        }
        fireAnalytics( e, t ) {
          const {
            id: n
          } = t, i = t.status === r.a.OK ? "completed" : "failed", s = this.nameStartTime.get( n ), a = s ? Date.now() - s : 0;
          this.nameStartTime.delete( n ), this.fireHydrationEvent( i, n, e, a )
        }
      }
      s.waitForBatch = 100
    },
    "6qVS": function ( e, t, n ) {
      "use strict";
      Object.defineProperty( t, "__esModule", {
        value: !0
      } ), t.default = void 0;
      var r = s( n( "ERkP" ) ),
        i = s( n( "4KTy" ) );

      function s( e ) {
        return e && e.__esModule ? e : {
          default: e
        }
      }

      function a() {
        return ( a = Object.assign || function ( e ) {
          for ( var t = 1; t < arguments.length; t++ ) {
            var n = arguments[ t ];
            for ( var r in n ) Object.prototype.hasOwnProperty.call( n, r ) && ( e[ r ] = n[ r ] )
          }
          return e
        } ).apply( this, arguments )
      }
      var o = function ( e ) {
        return r.default.createElement( i.default, a( {
          dangerouslySetGlyph: '<svg width="24" height="24" viewBox="0 0 24 24" focusable="false" role="presentation"><g fill-rule="evenodd"><path d="M2 12c0 5.523 4.477 10 10 10s10-4.477 10-10S17.523 2 12 2 2 6.477 2 12z" fill="currentColor"/><rect fill="inherit" x="11" y="10" width="2" height="7" rx="1"/><circle fill="inherit" cx="12" cy="8" r="1"/></g></svg>'
        }, e ) )
      };
      o.displayName = "InfoIcon";
      var c = o;
      t.default = c
    },
    XFpn: function ( e, t, n ) {
      "use strict";
      Object.defineProperty( t, "__esModule", {
        value: !0
      } ), t.default = void 0;
      var r = s( n( "ERkP" ) ),
        i = s( n( "4KTy" ) );

      function s( e ) {
        return e && e.__esModule ? e : {
          default: e
        }
      }

      function a() {
        return ( a = Object.assign || function ( e ) {
          for ( var t = 1; t < arguments.length; t++ ) {
            var n = arguments[ t ];
            for ( var r in n ) Object.prototype.hasOwnProperty.call( n, r ) && ( e[ r ] = n[ r ] )
          }
          return e
        } ).apply( this, arguments )
      }
      var o = function ( e ) {
        return r.default.createElement( i.default, a( {
          dangerouslySetGlyph: '<svg width="24" height="24" viewBox="0 0 24 24" focusable="false" role="presentation"><g fill-rule="evenodd"><circle fill="currentColor" cx="12" cy="12" r="10"/><path d="M9.707 11.293a1 1 0 1 0-1.414 1.414l2 2a1 1 0 0 0 1.414 0l4-4a1 1 0 1 0-1.414-1.414L11 12.586l-1.293-1.293z" fill="inherit"/></g></svg>'
        }, e ) )
      };
      o.displayName = "CheckCircleIcon";
      var c = o;
      t.default = c
    },
    kQ1B: function ( e, t, n ) {
      "use strict";
      var r = n( "zDE1" ),
        i = n( "xV3C" );
      class s {
        constructor( e, t ) {
          this.presence = e, this.expiry = Date.now() + t
        }
        expired() {
          return Date.now() > this.expiry
        }
      }
      class a extends i.b {
        refreshPresence( e ) {
          throw new Error( "not yet implemented.\nParams: userIds=" + e )
        }
        notifyListeners( e ) {
          this.changeListeners.forEach( ( t, n ) => {
            try {
              t( e )
            } catch ( i ) {
              Object( r.a )( `error from listener '${n}', ignoring`, i )
            }
          } )
        }
      }
      class o extends a {
        constructor( e ) {
          if ( super(), !e.url ) throw new Error( "config.url is a required parameter" );
          if ( !e.cloudId ) throw new Error( "config.cloudId is a required parameter" );
          this.config = e, this.config.url = o.cleanUrl( e.url ), this.presenceCache = e.cache || new c( e.cacheExpiry ), this.presenceParser = e.parser || new u
        }
        refreshPresence( e ) {
          const t = this.presenceCache.getBulk( e );
          this.notifyListeners( t );
          const n = this.presenceCache.getMissingUserIds( e );
          n.length && this.retrievePresence( n )
        }
        retrievePresence( e ) {
          this.queryDirectoryForPresences( e ).then( e => this.presenceParser.parse( e ) ).then( e => {
            this.notifyListeners( e ), this.presenceCache.update( e )
          } )
        }
        queryDirectoryForPresences( e ) {
          const t = {
            query: "query getPresenceForMentions($organizationId: String!, $userIds: [String!], $productId: String) {\n                PresenceBulk(organizationId: $organizationId, product: $productId, userIds: $userIds) {\n                  userId\n                  state\n                  stateMetadata\n                }\n              }",
            variables: {
              organizationId: this.config.cloudId,
              userIds: e
            }
          };
          this.config.productId && ( t.variables.productId = this.config.productId );
          const n = {
            method: "POST",
            headers: {
              "Content-Type": "application/json"
            },
            credentials: "include",
            body: JSON.stringify( t )
          };
          return fetch( this.config.url, n ).then( e => e.json() )
        }
        static cleanUrl( e ) {
          return "/" !== e.substr( -1 ) && ( e += "/" ), e
        }
      }
      class c {
        constructor( e, t ) {
          this.expiryInMillis = e || c.defaultTimeout, this.flushTrigger = t || c.defaultFlushTrigger, this.cache = {}, this.size = 0
        }
        _delete( e ) {
          delete this.cache[ e ], this.size--
        }
        _deleteIfExpired( e ) {
          this.contains( e ) && this.cache[ e ].expired() && this._delete( e )
        }
        _removeExpired() {
          Object.keys( this.cache ).forEach( e => {
            this._deleteIfExpired( e )
          } )
        }
        contains( e ) {
          return this.cache.hasOwnProperty( e )
        }
        get( e ) {
          return this._deleteIfExpired( e ), this.contains( e ) ? this.cache[ e ].presence : {}
        }
        getBulk( e ) {
          const t = {};
          for ( const n of e ) this.contains( n ) && ( t[ n ] = this.get( n ) );
          return t
        }
        getMissingUserIds( e ) {
          return e.filter( e => !this.contains( e ) )
        }
        update( e ) {
          this.size >= this.flushTrigger && this._removeExpired(), Object.keys( e ).forEach( t => {
            this.cache[ t ] = new s( e[ t ], this.expiryInMillis ), this.size++
          } )
        }
      }
      c.defaultTimeout = 2e4, c.defaultFlushTrigger = 50;
      class u {
        mapState( e ) {
          return "unavailable" === e ? "offline" : "available" === e ? "online" : e
        }
        parse( e ) {
          const t = {};
          if ( e.hasOwnProperty( "data" ) && e.data.hasOwnProperty( "PresenceBulk" ) ) {
            const n = e.data.PresenceBulk;
            for ( const e of n )
              if ( e.userId && e.state ) {
                const n = u.extractState( e ) || e.state;
                t[ e.userId ] = {
                  status: this.mapState( n )
                }
              } else e.hasOwnProperty( "userId" ) && e.hasOwnProperty( "state" ) || console.error( "Unexpected response from presence service contains keys: " + Object.keys( e ) )
          }
          return t
        }
        static extractState( e ) {
          return u.isFocusState( e ) ? u.FOCUS_STATE : e.state
        }
        static isFocusState( e ) {
          if ( e.stateMetadata ) try {
            const t = JSON.parse( e.stateMetadata );
            return t && !!t.focus
          } catch ( t ) {
            console.error( `Failed to parse presence's stateMetadata for user with id ${e.userId}: ${e.stateMetadata}` ), console.error( t )
          }
          return !1
        }
      }
      u.FOCUS_STATE = "focus", t.a = o
    },
    kVVw: function ( e, t, n ) {
      "use strict";
      n.d( t, "a", ( function () {
        return u
      } ) );
      var r = n( "zjfJ" ),
        i = n( "xV3C" ),
        s = n( "pL3m" ),
        a = n( "MjPE" ),
        o = n( "kC4U" ),
        c = n( "KIs4" );
      class u extends i.c {
        constructor( e, t, n ) {
          super( t ), Object( r.a )( this, "userTeamEndpoint", void 0 ), Object( r.a )( this, "teamMentionConfig", void 0 ), this.teamMentionConfig = n, this.userTeamEndpoint = e
        }
        async remoteInitialState( e ) {
          try {
            const t = await this.doSearch( "", e );
            return this._notifyAnalyticsListeners( s.c, "initialState", "succeeded" ), t
          } catch ( t ) {
            throw this._notifyAnalyticsListeners( s.c, "initialState", "failed" ), t
          }
        }
        async remoteSearch( e, t ) {
          try {
            const n = await this.doSearch( e, t );
            return this._notifyAnalyticsListeners( s.c, "searchUser", "succeeded" ), n
          } catch ( n ) {
            throw this._notifyAnalyticsListeners( s.c, "searchUser", "failed" ), n
          }
        }
        mentionTypeaheadHighlightEnabled() {
          return this.teamMentionConfig.teamHighlightEnabled || !1
        }
        mentionTypeaheadCreateTeamPath() {
          return this.teamMentionConfig.createTeamPath
        }
        async doSearch( e, t ) {
          const n = await this.post( await this.cloudId(), e, t );
          if ( !n.ok ) {
            const e = await n.json();
            throw new Error( JSON.stringify( e ) )
          }
          return {
            query: e,
            mentions: ( await n.json() ).recommendedUsers.map( e => this.isUser( e ) ? this.convertToUserMention( e ) : ( this.isTeam( e ), this.convertToTeamMention( e ) ) )
          }
        }
        async cloudId() {
          const e = await Object( c.b )(),
            {
              cloudId: t
            } = e;
          return t
        }
        async post( e, t, n ) {
          return await Object( o.a )( this.userTeamEndpoint, {
            method: "POST",
            headers: {
              "content-type": "application/json"
            },
            credentials: "include",
            body: JSON.stringify( {
              context: {
                contextType: "Mentions",
                principalId: "context",
                productKey: n && n.product || "confluence",
                siteId: e,
                containerId: n && n.containerId,
                objectId: n && n.objectId,
                childObjectId: n && n.childObjectId,
                mentionsSessionId: n && n.sessionId
              },
              searchQuery: {
                queryString: t
              },
              maxNumberOfResults: 20,
              includeTeams: !0
            } )
          } )
        }
        isUser( e ) {
          return "USER" === e.entityType
        }
        convertToUserMention( e ) {
          return {
            id: e.id,
            name: e.name || e.nickname || "",
            mentionName: e.nickname || "",
            avatarUrl: e.avatarUrl,
            accessLevel: e.accessLevel,
            userType: e.userType
          }
        }
        isTeam( e ) {
          return "TEAM" === e.entityType
        }
        convertToTeamMention( e ) {
          const {
            teamLinkResolver: t
          } = this.teamMentionConfig;
          let n = "";
          const r = `${window.location.origin}/people/team/${e.id}`;
          return "function" == typeof t && ( n = t( e.id ) ), {
            id: e.id,
            name: e.displayName,
            mentionName: e.displayName,
            avatarUrl: e.smallAvatarImageUrl,
            accessLevel: a.c[ a.c.CONTAINER ],
            userType: a.d[ a.d.TEAM ],
            context: {
              members: e.members,
              includesYou: e.includesYou,
              memberCount: e.memberCount,
              teamLink: n || r
            }
          }
        }
      }
    },
    mn6t: function ( e, t, n ) {
      "use strict";
      n.d( t, "a", ( function () {
        return u
      } ) );
      var r = n( "Czhu" ),
        i = n( "pL3m" ),
        s = n( "eWMb" ),
        a = n( "MjPE" ),
        o = n( "xV3C" ),
        c = n( "zDE1" );
      class u extends o.c {
        constructor( e, t ) {
          super( e ), this.lastSearchQuery = "", this.mentionTypeaheadHighlightEnabled = () => this.teamMentionConfig.teamHighlightEnabled || !1, this.mentionTypeaheadCreateTeamPath = () => this.teamMentionConfig.createTeamPath, this.verifyMentionConfig( t ), this.teamMentionConfig = t, this.lastReturnedSearchTeam = 0
        }
        filter( e, t ) {
          if ( this.lastSearchQuery = e, e ) {
            this.updateActiveSearches( e );
            const n = this.remoteUserSearch( e, t ),
              r = this.remoteTeamSearch( e, t );
            return this.handleBothRequests( e, n, r )
          }
          return this.remoteInitialStateTeamAndUsers( t )
        }
        async remoteInitialStateTeamAndUsers( e ) {
          const t = super.remoteInitialState( e ),
            n = {
              path: "bootstrap",
              queryParams: this.getQueryParamsOfTeamMentionConfig( e )
            },
            r = s.utils.requestService( this.teamMentionConfig, n );
          this.handleBothRequests( "", t, r )
        }
        async handleBothRequests( e, t, n ) {
          const r = Date.now();
          let i = {
            mentions: [],
            query: e
          };
          const s = ( t, n ) => {
            e === this.lastSearchQuery && ( i = {
              mentions: [ ...i.mentions, ...t.mentions ],
              query: e
            }, n ? this.notify( r, i, e ) : super.notify( r, i, e ) )
          };
          let a, o = null,
            u = null;
          try {
            a = await t, s( a, !1 )
          } catch ( l ) {
            o = l
          }
          try {
            const t = await n;
            s( Array.isArray( t ) ? this.convertTeamResultToMentionResult( t, e ) : t, !0 )
          } catch ( l ) {
            u = l
          }
          o && u && ( this.notifyError( o, e ), Object( c.a )( "User mention request fails. ", o ), Object( c.a )( "Team mention request fails. ", u ) )
        }
        notify( e, t, n ) {
          if ( e > this.lastReturnedSearchTeam ) this.lastReturnedSearchTeam = e, this._notifyListeners( t, {
            teamMentionDuration: Date.now() - e
          } );
          else {
            const t = new Date( e ).toISOString().substr( 17, 6 );
            Object( c.a )( "Stale search result, skipping", t, n )
          }
          this._notifyAllResultsListeners( t )
        }
        getQueryParamsOfTeamMentionConfig( e ) {
          const t = {};
          return this.teamMentionConfig.containerId && ( t.containerId = this.teamMentionConfig.containerId ), this.teamMentionConfig.productId && ( t.productIdentifier = this.teamMentionConfig.productId ), Object( r.a )( Object( r.a )( {}, t ), e )
        }
        remoteUserSearch( e, t ) {
          return super.remoteSearch( e, t )
        }
        async remoteTeamSearch( e, t ) {
          const n = {
            path: "search",
            queryParams: Object( r.a )( {
              query: e,
              limit: 20
            }, this.getQueryParamsOfTeamMentionConfig( t ) )
          };
          try {
            const t = await s.utils.requestService( this.teamMentionConfig, n );
            return this._notifyAnalyticsListeners( i.c, i.d.SEARCH_TEAM, i.a.SUCCEEDED ), this.convertTeamResultToMentionResult( t, e )
          } catch ( a ) {
            throw this._notifyAnalyticsListeners( i.c, i.d.SEARCH_TEAM, i.a.FAILED ), a
          }
        }
        convertTeamResultToMentionResult( e, t ) {
          const {
            teamLinkResolver: n
          } = this.teamMentionConfig;
          return {
            mentions: e.map( e => {
              let t = "";
              const r = `${window.location.origin}/people/team/${e.id}`;
              return "function" == typeof n && ( t = n( e.id ) ), {
                id: this.trimTeamARI( e.id ),
                avatarUrl: e.smallAvatarImageUrl,
                name: e.displayName,
                accessLevel: a.c[ a.c.CONTAINER ],
                userType: a.d[ a.d.TEAM ],
                highlight: e.highlight,
                context: {
                  members: e.members,
                  includesYou: e.includesYou,
                  memberCount: e.memberCount,
                  teamLink: t || r
                }
              }
            } ),
            query: t
          }
        }
        trimTeamARI( e = "" ) {
          return e.replace( "ari:cloud:teams::team/", "" )
        }
      }
    },
    rGGD: function ( e, t, n ) {
      "use strict";
      var r = n( "KIs4" ),
        i = n( "/voU" ),
        s = n( "mn6t" ),
        a = n( "kQ1B" ),
        o = n( "frZf" ),
        c = n( "MjPE" ),
        u = n( "kC4U" );
      class l {
        getLookupLimit() {
          return 100
        }
        async lookupMentionNames( e ) {
          const t = e.reduce( ( e, t, n ) => `${e}${n>0?"&":""}accountId=${encodeURIComponent(t)}`, "" );
          return Object( u.a )( "/wiki/rest/api/user/bulk?" + t, {
            credentials: "same-origin"
          } ).then( e => e.json() ).then( e => e && e.results && e.results.length ? e.results.map( e => ( {
            id: e.accountId,
            name: e.displayName,
            status: c.a.OK
          } ) ) : [] )
        }
      }
      var h = n( "kVVw" );
      async function d( e, t, n, a ) {
        const c = {
            url: "/gateway/api/mentions/" + e,
            productId: "micros-group/confluence",
            containerId: t || void 0,
            shouldHighlightMention: e => e.id === n
          },
          {
            featureFlags: u
          } = await Object( r.b )(),
          d = u[ "confluence.frontend.people.directory" ] ? o.a : "",
          m = {
            url: "/gateway/api/teams/mentions",
            productId: "micros-group/confluence",
            shouldHighlightMention: e => e.id === n,
            teamHighlightEnabled: Boolean( u[ "confluence.frontend.fabric.editor.team.mention.spotlight" ] ),
            createTeamPath: d + "/people/search#createTeam"
          };
        return u[ "confluence.frontend.fabric.mentions.collab.hydration" ] && ( c.mentionNameResolver = new i.a( new l, a ) ), u[ "confluence.frontend.fabric.editor.userteam.mention" ] ? function ( e, t ) {
          return new h.a( "/gateway/api/v1/recommendations", e, t )
        }( c, m ) : new s.a( c, m )
      }

      function m( e, t, n, r ) {
        return async function ( e, t, n, r ) {
          var i, s, o;
          if ( !e ) throw new Error( "MentionResource cannot be configured without a cloud id" );
          const c = ( null != ( o = n ) ? o.spaceId : o ) || void 0;
          return {
            mentionResource: await d( e, c, t, r ),
            presenceResource: new a.a( {
              url: "/gateway/api/directory/graphql",
              cloudId: e,
              productId: "confluence"
            } ),
            mentionServiceUrl: "/gateway/api/mentions/" + e,
            contextIdentifier: {
              containerId: c || "",
              objectId: ( null != ( s = n ) ? s.contentId : s ) || "",
              childObjectId: ( null != ( i = n ) ? i.commentId : i ) || ""
            }
          }
        }( e, t, n, r )
      }
      n.d( t, "a", ( function () {
        return m
      } ) )
    },
    xsIe: function ( e, t, n ) {
      "use strict";
      var r = n( "ERkP" ),
        i = n.n( r ),
        s = n( "zJ/j" ),
        a = n( "XFpn" ),
        o = n.n( a ),
        c = n( "1whV" ),
        u = n.n( c ),
        l = n( "6qVS" ),
        h = n.n( l ),
        d = n( "o0fs" ),
        m = n.n( d ),
        p = n( "OOEx" ),
        f = n.n( p ),
        g = n( "3IV/" );
      const y = {
        info: {
          backgroundColor: g.B50,
          Icon: h.a,
          primaryIconColor: g.B500
        },
        warning: {
          backgroundColor: g.Y50,
          Icon: f.a,
          primaryIconColor: g.Y500
        },
        error: {
          backgroundColor: g.R50,
          Icon: u.a,
          primaryIconColor: g.R500
        },
        confirmation: {
          backgroundColor: g.G50,
          Icon: o.a,
          primaryIconColor: g.G500
        },
        change: {
          backgroundColor: g.P50,
          Icon: m.a,
          primaryIconColor: g.P500
        }
      };
      var I = n( "KsTJ" ),
        w = n( "BMbf" ),
        b = n( "WEdt" );
      const v = I.default.section `
  display: flex;
  border-radius: ${w.c}px;
  background-color: ${({backgroundColor:e})=>e};
  padding: ${2*Object(w.h)()}px;
`,
        T = I.default.div `
  flex-grow: 1;
`,
        C = I.default.h1 `
  margin: 0;
  ${b.h500};
`,
        E = I.default.div `
  * + & {
    margin-top: 8px;
  }
`,
        M = I.default.ul `
  display: flex;
  list-style: none;
  padding-left: 0;
  * + & {
    margin-top: 8px;
  }
`,
        S = I.default.li `
  align-items: center;
  display: flex;
  margin: 0;
  & + &::before {
    color: ${g.N500};
    content: '·';
    display: inline-block;
    text-align: center;
    vertical-align: middle;
    width: ${2*Object(w.h)()}px;
  }
`,
        O = I.default.div `
  flex: 0 0 auto;
  width: ${5*Object(w.h)()}px;
  > span {
    margin: -2px 0;
    vertical-align: top;
  }
`;
      n.d( t, "a", ( function () {
        return k
      } ) );
      class k extends i.a.Component {
        constructor() {
          super( ...arguments ), this.renderAction = ( e, t ) => {
            const {
              href: n,
              key: r,
              onClick: a,
              text: o,
              testId: c
            } = e;
            return i.a.createElement( S, {
              key: r,
              "data-testid": c
            }, a || n ? i.a.createElement( s.a, {
              appearance: "link",
              spacing: "none",
              onClick: a,
              href: n,
              component: t
            }, o ) : o )
          }
        }
        render() {
          const {
            children: e,
            title: t,
            actions: n,
            appearance: r,
            icon: s,
            linkComponent: a,
            testId: o
          } = this.props, c = y[ r ] || y.info, u = s || c.Icon;
          return i.a.createElement( v, {
            backgroundColor: c.backgroundColor,
            "data-testid": o
          }, i.a.createElement( O, null, i.a.createElement( u, {
            primaryColor: c.primaryIconColor,
            secondaryColor: c.backgroundColor
          } ) ), i.a.createElement( T, null, t ? i.a.createElement( C, null, t ) : null, e ? i.a.createElement( E, null, e ) : null, n && n.length ? i.a.createElement( M, null, n.map( e => this.renderAction( e, a ) ) ) : null ) )
        }
      }
      k.defaultProps = {
        appearance: "info"
      }
    }
  }
] );
//# sourceMappingURL=25.HzEjUs16PH.js.map
