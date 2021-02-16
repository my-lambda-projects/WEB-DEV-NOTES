( window.webpackJsonp = window.webpackJsonp || [] ).push( [
  [ 51 ], {
    JOcB: function ( e, t, a ) {
      "use strict";
      a.d( t, "a", ( function () {
        return l
      } ) );
      var s = a( "Czhu" ),
        r = a( "HbGN" ),
        i = a( "zjfJ" ),
        n = a( "ERkP" ),
        o = a.n( n ),
        c = a( "gQ5V" );
      a( "aWzz" );
      class l extends n.Component {
        constructor( ...e ) {
          super( ...e ), Object( i.a )( this, "_queryResults", [] ), Object( i.a )( this, "_queryProperties", [] ), Object( i.a )( this, "_anyLoading", () => this._queryResults.some( e => !0 === e.loading ) ), Object( i.a )( this, "_renderQueryComponent", ( e, t, a ) => e.length ? o.a.createElement( c.b, Object( s.a )( {
            errorPolicy: "all"
          }, e[ a ] ), s => {
            let {
              data: i,
              loading: n,
              error: o
            } = s, c = Object( r.a )( s, [ "data", "loading", "error" ] );
            this._queryResults[ a ] = {
              data: i,
              loading: n,
              error: o
            }, this._queryProperties[ a ] = c;
            const l = a + 1;
            return e.length > l ? this._renderQueryComponent( e, t, l ) : t( {
              results: this._queryResults,
              loading: this._anyLoading(),
              properties: this._queryProperties
            } )
          } ) : t( {
            results: [],
            loading: !1
          } ) )
        }
        render() {
          const {
            queryProps: e,
            children: t
          } = this.props;
          return this._renderQueryComponent( e, t, 0 )
        }
      }
    },
    MwrP: function ( e, t, a ) {
      var s = a( "4uJK" ),
        r = a( "kkM+" ),
        i = a( "bvyN" ),
        n = a( "wxYD" ),
        o = a( "9y2L" ),
        c = a( "3ajY" ),
        l = a( "CbIe" ),
        p = a( "Qd2C" ),
        d = Object.prototype.hasOwnProperty;
      e.exports = function ( e ) {
        if ( null == e ) return !0;
        if ( o( e ) && ( n( e ) || "string" == typeof e || "function" == typeof e.splice || c( e ) || p( e ) || i( e ) ) ) return !e.length;
        var t = r( e );
        if ( "[object Map]" == t || "[object Set]" == t ) return !e.size;
        if ( l( e ) ) return !s( e ).length;
        for ( var a in e )
          if ( d.call( e, a ) ) return !1;
        return !0
      }
    },
    Pf68: function ( e, t, a ) {
      "use strict";
      a.d( t, "a", ( function () {
        return s
      } ) );
      const s = ( e, t = 0 ) => {
        let a = null,
          s = [];
        return ( ...r ) => ( clearTimeout( a ), a = setTimeout( () => {
          const t = e( ...r );
          s.forEach( e => e( t ) ), s = []
        }, t ), new Promise( e => s.push( e ) ) )
      }
    },
    XLlT: function ( e, t, a ) {
      "use strict";
      var s, r, i = a( "zjfJ" ),
        n = a( "ERkP" ),
        o = a.n( n ),
        c = a( "RNvQ" ),
        l = a.n( c ),
        p = a( "L21V" ),
        d = a( "lbXe" ),
        h = a( "Pf68" ),
        u = a( "JOcB" ),
        f = a( "KIs4" ),
        g = a( "Czhu" ),
        m = ( a( "aWzz" ), a( "KsTJ" ) ),
        y = a( "MwrP" ),
        b = a.n( y ),
        S = a( "nnRT" ),
        O = a.n( S ),
        v = a( "liuE" ),
        x = a( "3IV/" ),
        w = a( "WEdt" ),
        j = a( "kYi3" ),
        E = a( "frZf" ),
        T = a( "mWiq" ),
        P = a.n( T ),
        C = a( "a8dO" ),
        L = a( "MV18" ),
        D = a( "3VMZ" );
      const M = () => {},
        k = Object( p.f )( {
          noCreatePermission: {
            id: "space-selector.no.permission.to.create",
            defaultMessage: "You don't have create permissions in this space",
            description: "The tooltip message appearing next to lock icon in the space selector indicating that the space is restricted"
          },
          restrictedSpaceLabel: {
            id: "space-selector.restricted-space.icon",
            description: "aria-label for the restricted content icon appearing in the space selector",
            defaultMessage: "This space is restricted"
          }
        } ),
        R = m.default.div `
  display: inline-block;
  opacity: ${e=>e.isGreyedOut?.5:1};
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`,
        q = m.default.span `
  padding-left: 6px;
`,
        I = m.default.div `
  ${Object(w.h300)()};
  color: ${x.N200};
  min-width: 0;
  text-transform: ${e=>e.labelTextTransform};
  margin-bottom: 10px;
`,
        _ = m.default.div `
  align-items: center;
  justify-content: flex-start;
  display: flex;
  flex-direction: row;
  line-height: 1.2;
  padding: 2px;
`,
        K = m.default.div `
  display: flex;
  flex: 0 1 auto;
  margin-right: 9px;
  margin-left: 6px;
  opacity: ${e=>e.isGreyedOut?.5:1};
`,
        A = m.default.img `
  background-image: url(${e=>E.a+e.src});
  width: 18px;
  height: 18px;
`,
        V = m.default.div `
  display: flex;
`,
        N = {
          container: e => Object( g.a )( Object( g.a )( {}, e ), {}, {
            width: "100%"
          } ),
          dropdownIndicator: e => Object( g.a )( Object( g.a )( {}, e ), {}, {
            paddingLeft: 0
          } ),
          menu: e => Object( g.a )( Object( g.a )( {}, e ), {}, {
            width: "100%"
          } ),
          input: e => Object( g.a )( Object( g.a )( {}, e ), {}, {
            width: "100%",
            marginLeft: 0,
            paddingLeft: "7px"
          } ),
          option: ( e, {
            isFocused: t
          } ) => {
            const a = t ? x.N900 : null;
            let s;
            return t && ( s = x.N30 ), Object( g.a )( Object( g.a )( {}, e ), {}, {
              backgroundColor: s,
              color: a
            } )
          },
          placeholder: e => Object( g.a )( Object( g.a )( {}, e ), {}, {
            paddingLeft: "5px"
          } ),
          valueContainer: e => Object( g.a )( Object( g.a )( {}, e ), {}, {
            width: "100%",
            padding: "2px 8px 2px 0px"
          } ),
          singleValue: e => Object( g.a )( Object( g.a )( {}, e ), {}, {
            width: "100%",
            padding: "2px 8px 2px 0px"
          } )
        },
        F = {
          name: "",
          key: "default-key",
          iconPath: "/images/logo/default-space-logo-256.png",
          homepageId: ""
        };

      function z( {
        showSpaceLabel: e,
        labelTextTransform: t
      } ) {
        return !1 === e ? null : o.a.createElement( I, {
          labelTextTransform: t
        }, o.a.createElement( p.b, {
          id: "space-selector.create.drawer.header",
          defaultMessage: "Select space",
          description: "The header of Space Selector"
        } ) )
      }
      const $ = Object( p.g )( ( r = s = class extends n.PureComponent {
        static getDerivedStateFromProps( e, t ) {
          return ( e.spaceKey === t.spaceKey || e.isLoading ) && !O()( t.currentSpace, F ) || b()( e.defaultSpace ) ? Object( g.a )( Object( g.a )( {}, t ), {}, {
            isDisabled: e.isDisabled || e.spaceKey !== t.spaceKey && e.isLoading
          } ) : Object( g.a )( Object( g.a )( {}, t ), {}, {
            currentSpace: e.defaultSpace,
            spaceKey: e.spaceKey,
            isDisabled: !1
          } )
        }
        constructor( ...e ) {
          super( ...e ), Object( i.a )( this, "onSelect", e => {
            const {
              isRestricted: t,
              homepageId: a,
              homepageTitle: s,
              operations: r
            } = e, i = e.key || "";
            this.setState( {
              currentSpace: e
            } ), this.props.fireAnalyticsEvent( {
              type: "sendUIEvent",
              data: {
                source: this.props.analyticsSource,
                actionSubjectId: "spaceSelectorDropdownMenu",
                actionSubject: "spaceSelectorDropdownMenuItem",
                action: "clicked",
                attributes: {
                  spaceKey: i
                }
              }
            } ), this.props.onSelect( {
              spaceKey: i,
              spaceName: e.name || "",
              isRestricted: t,
              homepageId: a,
              homepageTitle: s,
              operations: r
            } )
          } ), Object( i.a )( this, "filterOption", this.props.filterOption ? e => {
            var t, a, s;
            return this.props.filterOption( {
              spaceKey: ( null != ( s = e ) && null != ( s = s.data ) ? s.key : s ) || "",
              spaceName: ( null != ( a = e ) && null != ( a = a.data ) ? a.name : a ) || "",
              homepageId: ( null != ( t = e ) && null != ( t = t.data ) && null != ( t = t.homepage ) ? t.id : t ) || "",
              isRestricted: e.isRestricted
            } )
          } : void 0 ), Object( i.a )( this, "getOption", ( {
            children: e,
            iconPath: t,
            name: a,
            isGreyedOut: s
          } ) => o.a.createElement( _, null, this.renderSpaceIcon( {
            iconPath: t,
            name: a,
            isGreyedOut: s
          } ), e ) ), Object( i.a )( this, "getOptionLabel", e => e.name ), Object( i.a )( this, "getOptionValue", e => e.key ), Object( i.a )( this, "getLockIcon", () => o.a.createElement( C.a, {
            content: this.props.intl.formatMessage( k.noCreatePermission )
          }, o.a.createElement( P.a, {
            primaryColor: x.N300,
            label: this.props.intl.formatMessage( k.restrictedSpaceLabel )
          } ) ) ), Object( i.a )( this, "getLabel", ( {
            name: e,
            iconPath: t,
            isRestricted: a,
            containsExternalCollaborators: s
          }, r ) => {
            const i = this.getOption,
              n = a && "value" !== r;
            return o.a.createElement( i, {
              iconPath: t,
              name: e,
              isGreyedOut: n
            }, o.a.createElement( R, {
              isGreyedOut: n,
              control: !0
            }, e ), o.a.createElement( V, null, a ? this.getLockIcon() : null ), s ? o.a.createElement( q, null, o.a.createElement( v.a, {
              appearance: "new"
            }, o.a.createElement( p.b, {
              id: "space-selector.external-lozenge",
              defaultMessage: "External",
              description: "Text for lozenge appearing in search space selector results next to name of spaces which are open to external collaborators"
            } ) ) ) : null )
          } ), Object( i.a )( this, "formatOptionLabel", ( e, {
            context: t
          } ) => this.getLabel( e, t ) ), Object( i.a )( this, "noOptionsMessage", () => o.a.createElement( p.b, {
            id: "space-selector.create.drawer.no.space.found",
            defaultMessage: "No space found",
            description: "The text inside the space selector drop down of create page drawer telling user that no space is found with the user query input"
          } ) ), Object( i.a )( this, "loadingMessage", () => o.a.createElement( p.b, {
            id: "space-selector.create.drawer.spaces.loading",
            defaultMessage: "Loading spaces",
            description: "The text inside the space selector drop down of create page drawer telling user it is searching for spaces"
          } ) );
          const [ t ] = e;
          this.state = {
            currentSpace: b()( t.defaultSpace ) ? t.showDefaultSpace ? F : null : t.defaultSpace,
            spaceKey: t.spaceKey
          }
        }
        renderSpaceIcon( {
          iconPath: e,
          name: t,
          isGreyedOut: a
        } ) {
          const s = e && 0 === e.indexOf( E.a ) ? e : `${E.a}${e}`;
          return o.a.createElement( K, {
            isGreyedOut: a
          }, o.a.createElement( A, {
            src: s,
            label: t
          } ) )
        }
        render() {
          const {
            id: e,
            onChangeFilter: t,
            loadOptions: a,
            defaultOptions: s,
            placeholder: r,
            showSpaceLabel: i,
            isLoading: c,
            validationState: l,
            labelTextTransform: p
          } = this.props, {
            currentSpace: d,
            isDisabled: h
          } = this.state;
          return o.a.createElement( n.Fragment, null, o.a.createElement( z, {
            showSpaceLabel: i,
            labelTextTransform: p
          } ), o.a.createElement( j.a, {
            "data-test-id": "space-select",
            placeholder: r,
            id: e,
            onChange: this.onSelect,
            value: d,
            isDisabled: h,
            isClearable: !1,
            noOptionsMessage: this.noOptionsMessage,
            loadingMessage: this.loadingMessage,
            loadOptions: a,
            defaultOptions: s,
            formatOptionLabel: this.formatOptionLabel,
            getOptionLabel: this.getOptionLabel,
            getOptionValue: this.getOptionValue,
            onInputChange: t,
            isMulti: !1,
            styles: N,
            validationState: l,
            filterOption: this.filterOption,
            classNamePrefix: "react-select"
          } ), !c && o.a.createElement( n.Fragment, null, o.a.createElement( L.a, {
            name: D.a.IN_EDITOR_TEMPLATES_LOAD_PANEL_SPACE_SELECTOR
          } ), o.a.createElement( L.a, {
            name: D.a.TEMPLATE_GALLERY_SPACE_SELECTOR
          } ) ) )
        }
      }, Object( i.a )( s, "defaultProps", {
        inputValue: "",
        fetchSpaces: M,
        onChangeFilter: M,
        onSelect: M,
        fireAnalyticsEvent: M,
        defaultOptions: [],
        loadOptions: Promise.resolve( [] ),
        defaultSpace: {},
        placeholder: o.a.createElement( p.b, {
          id: "space-selector.create.drawer.select.a.space",
          defaultMessage: "Select a space",
          description: "The placeholder of Space Selector"
        } ),
        showDefaultSpace: !0,
        showSpaceLabel: !0
      } ), r ) );
      var Q = a( "H5qd" ),
        G = a.n( Q );
      const J = G.a `query SpaceSelectorQuery($cql:String!$limit:Int){favoriteSpaces:spaces(offset:0 first:$limit favourite:true){nodes{id key name homepage{id title}operations{operation targetType}history{createdBy{displayName}}icon{path}containsExternalCollaborators}}searchedSpaces:search(cql:$cql first:$limit){count nodes{space{id homepage{id title}operations{operation targetType}key icon{path}name containsExternalCollaborators}}}user{id confluence{hasPersonalSpace space{id name key operations{operation targetType}homepage{id title}}}}recentlyVisitedSpaces:recentSpaces{key id name homepage{id title}icon{path}operations{operation targetType}containsExternalCollaborators}}`,
        H = G.a `query SpaceSelectorPromotedSpacesQuery@experimental{experimentalPromotedSpaces{nodes{id text}}}`,
        W = G.a `query SpaceSelectorDefaultSpaceQuery($spaceKey:String!){defaultSpaces:spaces(spaceKey:$spaceKey first:1){nodes{id key name operations{operation targetType}homepage{id title}icon{path width height isDefault}type operations{operation targetType}containsExternalCollaborators}}}`,
        Y = G.a `query SpaceSelectorRecentlyVisitedSpacesQuery{recentlyVisitedSpaces:recentSpaces{key id name icon{path}operations{operation targetType}containsExternalCollaborators}}`;
      var B, U;
      a.d( t, "a", ( function () {
        return Z
      } ) );
      const X = () => {},
        Z = Object( p.g )( Object( d.a )()( ( U = B = class extends n.Component {
          constructor( e ) {
            super( e ), Object( i.a )( this, "fireAnalyticsEvent", e => {
              "function" == typeof this.props.createAnalyticsEvent && this.props.createAnalyticsEvent( e ).fire()
            } ), Object( i.a )( this, "_handleFilterChange", e => {
              this.fireAnalyticsEvent( {
                type: "sendUIEvent",
                data: {
                  source: this.props.analyticsSource,
                  actionSubjectId: "spaceSelectorDropdown",
                  actionSubject: "spaceSelectorDropdownSearch",
                  action: "search",
                  attributes: {
                    query: e
                  }
                }
              } ), this.setState( {
                spaceQuery: e
              } )
            } ), Object( i.a )( this, "handleFilterChange", l()( this._handleFilterChange, 500 ) ), Object( i.a )( this, "onSelect", ( {
              spaceKey: e,
              spaceName: t,
              isRestricted: a,
              homepageId: s,
              homepageTitle: r,
              operations: i
            } ) => {
              const {
                onChange: n
              } = this.props;
              n( {
                spaceKey: e,
                spaceName: t,
                isRestricted: a,
                homepageId: s,
                homepageTitle: r,
                operations: i
              } )
            } ), Object( i.a )( this, "processData", ( e, t = !1 ) => ( e || [] ).map( e => {
              var t;
              return ( null != ( t = e ) ? t.space : t ) || e
            } ).filter( e => !!e ).reduce( ( e, a ) => {
              const {
                name: s,
                key: r,
                icon: i,
                iconPath: n,
                id: o,
                text: c,
                operations: l,
                homepage: p,
                containsExternalCollaborators: d
              } = a, h = ( null == i ? void 0 : i.path ) || n || "", u = ( null == p ? void 0 : p.id ) || "", f = ( null == p ? void 0 : p.title ) || "";
              let g = !1;
              return l && ( g = !l.some( e => !!this.props.operationsUsedToDetermineRestrictedStatus.find( t => t.targetType === e.targetType && t.operation === e.operation ) ) ), g && !this.props.showRestrictedSpaces || e.push( {
                name: s || c,
                key: r || o,
                iconPath: h,
                homepageId: u,
                homepageTitle: f,
                isRestricted: g,
                containsExternalCollaborators: !!t && d,
                operations: l
              } ), e
            }, [] ) ), Object( i.a )( this, "getItems", ( e, {
              favoriteSpaces: t,
              searchedSpaces: a,
              recentSpaces: s
            } ) => [ {
              label: this.props.intl.formatMessage( {
                id: "create.drawer.space.selector.starred.spaces",
                defaultMessage: "Starred Spaces",
                description: "The text header inside the space selector drop down that show the list of user favorite spaces"
              } ),
              options: e ? [] : t,
              dataTestID: "starred-spaces"
            }, {
              label: this.props.intl.formatMessage( {
                id: "create.drawer.space.selector.recent.spaces",
                defaultMessage: "Recent Spaces",
                description: "The text header inside the space selector drop down that show the list of user recent visited spaces"
              } ),
              options: e ? [] : s,
              dataTestID: "recent-spaces"
            }, {
              label: this.props.intl.formatMessage( {
                id: "create.drawer.space.selector.search.spaces",
                defaultMessage: "All Spaces",
                description: "The text header inside the space selector drop down that show the spaces result after user enter query"
              } ),
              options: e ? a : [],
              dataTestID: "search-spaces"
            } ] ), Object( i.a )( this, "loadOptions", ( e, t, a ) => ( this._handleFilterChange( t ), e( {
              cql: this.getSpacesSearchCql( t ),
              limit: 25
            } ).then( e => {
              var s, r, i, n;
              const {
                data: o
              } = e, c = null != ( n = o ) && null != ( n = n.favoriteSpaces ) ? n.nodes : n, l = null != ( i = o ) && null != ( i = i.searchedSpaces ) ? i.nodes : i, p = null != ( r = o ) ? r.recentlyVisitedSpaces : r, d = ( null != ( s = o ) && null != ( s = s.experimentalPromotedSpaces ) ? s.nodes : s ) || [], h = !0 === this.props.isAnonymous ? d : p;
              return this.getItems( t, {
                favoriteSpaces: this.processData( c, a ),
                searchedSpaces: this.processData( l, a ),
                recentSpaces: this.processData( h, a )
              } )
            } ) ) ), this.state = {
              spaceQuery: null,
              spaceKey: e.spaceKey
            }
          }
          getSpacesSearchCql( e ) {
            let t = "type = 'space'";
            return e && ( t += ` AND title ~ '${e.replace(/\'/g,"%27")}*'` ), t
          }
          render() {
            const {
              spaceQuery: e
            } = this.state, {
              spaceKey: t
            } = this.props, a = [ {
              query: J,
              errorPolicy: "all",
              fetchPolicy: "cache-first",
              variables: {
                cql: this.getSpacesSearchCql( e ),
                limit: 25
              },
              context: {
                single: !0
              }
            }, {
              query: H,
              errorPolicy: "all",
              fetchPolicy: "cache-first",
              context: {
                single: !0
              }
            }, {
              query: Y,
              fetchPolicy: "cache-first",
              context: {
                single: !0
              }
            } ];
            return t && a.push( {
              query: W,
              fetchPolicy: "cache-first",
              variables: {
                spaceKey: t
              },
              context: {
                single: !0
              }
            } ), o.a.createElement( f.a, null, ( {
              featureFlags: s
            } ) => {
              const r = s[ "confluence.frontend.enable.external.collab" ];
              return o.a.createElement( u.a, {
                queryProps: a
              }, ( {
                results: a,
                loading: s,
                properties: i
              } ) => {
                var n, c, l, p, d, u;
                const [ f, g, m, y ] = a, [ b ] = i, S = ( null != ( u = b ) ? u.refetch : u ) || X, O = ( null != ( d = f ) && null != ( d = d.data ) && null != ( d = d.favoriteSpaces ) ? d.nodes : d ) || [], v = ( null != ( p = f ) && null != ( p = p.data ) && null != ( p = p.searchedSpaces ) ? p.nodes : p ) || [], x = this.processData( ( null != ( l = m ) && null != ( l = l.data ) ? l.recentlyVisitedSpaces : l ) || [], r ), w = this.processData( ( null != ( c = y ) && null != ( c = c.data ) && null != ( c = c.defaultSpaces ) ? c.nodes : c ) || [], r ), j = this.processData( ( null != ( n = g ) && null != ( n = n.data ) && null != ( n = n.experimentalPromotedSpaces ) ? n.nodes : n ) || [], r ), E = !0 === this.props.isAnonymous ? j : x, T = w[ 0 ] || {};
                let P = this.processData( O, r );
                this.props.filterDefaultFromResults && ( P = P.filter( e => e.key !== T.key ) );
                let C = E;
                if ( this.props.filterStarredFromRecent ) {
                  const e = new Set( P.map( e => e.key ) );
                  C = C.filter( t => !e.has( t.key ) )
                }
                this.props.filterDefaultFromResults && ( C = C.filter( e => e.key !== T.key ) );
                const L = this.getItems( e, {
                  favoriteSpaces: P,
                  searchedSpaces: this.processData( v, r ),
                  recentSpaces: C
                } );
                return o.a.createElement( $, {
                  onSelect: this.onSelect,
                  fireAnalyticsEvent: this.fireAnalyticsEvent,
                  id: this.props.id,
                  isLoading: s,
                  searchKeyword: e,
                  onChangeFilter: this.handleFilterChange,
                  defaultSpace: T,
                  defaultOptions: L,
                  loadOptions: Object( h.a )( ( ...e ) => this.loadOptions( S, ...e, r ), 500 ),
                  placeholder: this.props.placeholder,
                  spaceKey: t,
                  showDefaultSpace: this.props.showDefaultSpace,
                  showSpaceLabel: this.props.showSpaceLabel,
                  validationState: this.props.validationState,
                  filterOption: this.props.filterOption,
                  isDisabled: this.props.isDisabled,
                  labelTextTransform: this.props.labelTextTransform,
                  analyticsSource: this.props.analyticsSource
                } )
              } )
            } )
          }
        }, Object( i.a )( B, "displayName", "SpaceSelector" ), Object( i.a )( B, "defaultProps", {
          onChange: X,
          createAnalyticsEvent: () => ( {
            fire: X
          } ),
          showDefaultSpace: !0,
          showRestrictedSpaces: !0,
          showSpaceLabel: !0,
          validationState: "default",
          isDisabled: !1,
          filterDefaultFromResults: !0,
          filterStarredFromRecent: !1,
          labelTextTransform: "uppercase",
          analyticsSource: "spaceSelector",
          operationsUsedToDetermineRestrictedStatus: [ {
            targetType: "space",
            operation: "update"
          }, {
            targetType: "page",
            operation: "create"
          } ]
        } ), U ) ) )
    },
    mWiq: function ( e, t, a ) {
      "use strict";
      Object.defineProperty( t, "__esModule", {
        value: !0
      } ), t.default = void 0;
      var s = i( a( "ERkP" ) ),
        r = i( a( "4KTy" ) );

      function i( e ) {
        return e && e.__esModule ? e : {
          default: e
        }
      }

      function n() {
        return ( n = Object.assign || function ( e ) {
          for ( var t = 1; t < arguments.length; t++ ) {
            var a = arguments[ t ];
            for ( var s in a ) Object.prototype.hasOwnProperty.call( a, s ) && ( e[ s ] = a[ s ] )
          }
          return e
        } ).apply( this, arguments )
      }
      var o = function ( e ) {
        return s.default.createElement( r.default, n( {
          dangerouslySetGlyph: '<svg width="24" height="24" viewBox="0 0 24 24" focusable="false" role="presentation"><g fill="currentColor"><path d="M16 11V9h-2V7.002A2.001 2.001 0 0 0 12 5c-1.102 0-2 .898-2 2.002V9H8v2H7v8h10v-8h-1zm-2 0h-4V9h4v2zM8 9V7.002A4.004 4.004 0 0 1 12 3a4 4 0 0 1 4 4.002V9h.994A2.01 2.01 0 0 1 19 11.009v7.982c0 1.11-.897 2.009-2.006 2.009H7.006A2.009 2.009 0 0 1 5 18.991V11.01C5 9.899 5.897 9 7.006 9H8zm0 0h2v2H8V9zm6 0h2v2h-2V9z"/><circle cx="12" cy="15" r="2"/></g></svg>'
        }, e ) )
      };
      o.displayName = "LockIcon";
      var c = o;
      t.default = c
    }
  }
] );
//# sourceMappingURL=51.QtmShJKTAQ.js.map
