( window.webpackJsonp = window.webpackJsonp || [] ).push( [
  [ 41 ], {
    yLoQ: function ( e, t, n ) {
      "use strict";
      var o = n( "ERkP" ),
        r = n.n( o ),
        a = ( n( "aWzz" ), n( "gQ5V" ) ),
        s = n( "KIs4" ),
        i = n( "Dsoe" ),
        l = n( "3VMZ" ),
        c = n( "FdGg" ),
        u = n( "X2PC" ),
        d = n( "zjfJ" ),
        m = n( "KsTJ" ),
        p = n( "MV18" ),
        k = n( "lbXe" ),
        h = n( "H5qd" ),
        g = n.n( h );
      const f = g.a `query LikeSummaryQuery($contentId:ID!$contentType:String!){user(current:true){id}tenant{cloudId}content(id:$contentId type:$contentType){nodes{id likes{nodes{user{accountId displayName profilePicture{path}}currentUserIsFollowing}}}}}`,
        y = g.a `query PaginatedLikeSummaryQuery($contentId:ID!$contentType:String!$first:Long=2$offset:Int=0$status:[String]){user(current:true){id}tenant{cloudId}content(id:$contentId type:$contentType status:$status){nodes{id likes(first:$first offset:$offset){count currentUserLikes followees{displayName accountId}nodes{user{accountId displayName profilePicture{path}}currentUserIsFollowing}}}}}`;
      var I = n( "PuX/" ),
        C = n( "Czhu" ),
        b = n( "B7n+" ),
        E = n( "+ypV" ),
        w = n.n( E ),
        L = n( "3IV/" ),
        F = n( "81Ml" );
      const v = m.default.button `
  background: 0;
  border: 0;
  cursor: pointer;
  color: ${e=>e.isComment?"#707070":L.B400};
  font-size: inherit;
  ${e=>e.isComment?"":"line-height: 20px;"} /* legacy styling */
  
  padding: 0;

  &:hover {
    cursor: pointer;
    color: ${e=>e.isComment?"#707070":L.B400};
    text-decoration: underline;
  }

  &:focus {
    outline: 2px solid ${L.B100};
    outline-offset: 2px;
  }

  & > span {
    vertical-align: bottom;
  }
`;
      class U extends o.PureComponent {
        constructor( ...e ) {
          super( ...e ), Object( d.a )( this, "state", {
            isLikedByCurrentUser: this.props.isLikedByCurrentUser
          } ), Object( d.a )( this, "onLikeClick", () => {
            const {
              likeContent: e,
              unlikeContent: t,
              onClick: n
            } = this.props, {
              isLikedByCurrentUser: o
            } = this.state;
            n && n(), o ? ( t(), this.setState( {
              isLikedByCurrentUser: !1
            } ) ) : ( e(), this.setState( {
              isLikedByCurrentUser: !0
            } ) )
          } ), Object( d.a )( this, "onLikeMouseDown", e => {
            e.preventDefault()
          } ), Object( d.a )( this, "renderLikeIcon", e => !e && r.a.createElement( w.a, {
            size: b.size.medium,
            primaryColor: L.N500
          } ) )
        }
        renderLikeAction() {
          const {
            disableButtonAction: e
          } = this.props, {
            isLikedByCurrentUser: t
          } = this.state, n = {
            disableButtonAction: e,
            isLikedByCurrentUser: t
          };
          return r.a.createElement( F.a, Object( C.a )( {}, n ) )
        }
        render() {
          const {
            isForComment: e,
            isForInlineComment: t,
            disableButtonAction: n
          } = this.props, o = e || t;
          return r.a.createElement( v, {
            isComment: o,
            onMouseDown: this.onLikeMouseDown,
            onClick: n ? null : this.onLikeClick
          }, this.renderLikeIcon( o ), this.renderLikeAction() )
        }
      }
      const $ = g.a `query LikeButtonQuery($contentId:ID!$contentType:String$status:[String]){content(id:$contentId type:$contentType status:$status){nodes{id likes{currentUserLikes}}}}`,
        S = g.a `mutation LikeButtonLikeMutation($contentId:ID!){likeContent(input:{contentId:$contentId}){content{id likes{count currentUserLikes}}}}`,
        M = g.a `mutation LikeButtonUnlikeMutation($contentId:ID!){unlikeContent(input:{contentId:$contentId}){content{id likes{count currentUserLikes}}}}`;
      const j = Object( k.a )()( class extends o.PureComponent {
        constructor( ...e ) {
          super( ...e ), Object( d.a )( this, "fireLikeAnalyticsEvent", () => {
            this.fireAnalyticsEvent( "created" )
          } ), Object( d.a )( this, "fireUnlikeAnalyticsEvent", () => {
            this.fireAnalyticsEvent( "deleted" )
          } ), Object( d.a )( this, "generateMutation", e => {
            const {
              contentId: t
            } = this.props;
            return () => {
              e( {
                variables: {
                  contentId: t
                }
              } )
            }
          } )
        }
        getAnalyticsData( e ) {
          const {
            contentId: t,
            contentType: n,
            containerId: o,
            containerType: r,
            isForComment: a,
            isForInlineComment: s
          } = this.props;
          return {
            action: e,
            actionSubject: "like",
            containerType: a || s ? "page" : r,
            containerId: o,
            objectType: s ? "inlineComment" : a ? "comment" : "page",
            objectId: t,
            source: "likeButton",
            attributes: {
              componentVersion: "v2",
              pageType: "blogpost" === n || "blogpost" === r ? "blogpost" : "page"
            }
          }
        }
        fireAnalyticsEvent( e ) {
          this.props.createAnalyticsEvent( {
            type: "sendTrackEvent",
            data: this.getAnalyticsData( e )
          } ).fire()
        }
        render() {
          const {
            contentId: e,
            contentType: t,
            isForComment: n,
            isForInlineComment: o,
            disableButtonAction: i,
            onClick: l
          } = this.props, c = {
            contentId: e,
            contentType: t,
            status: o ? [ "current", "draft" ] : [ "current" ]
          };
          return r.a.createElement( s.a, null, ( {
            featureFlags: e
          } ) => {
            const t = e[ "confluence.frontend.paginated.likes" ];
            return r.a.createElement( a.b, {
              query: $,
              variables: c
            }, ( {
              data: e,
              loading: s,
              error: u
            } ) => {
              var d;
              if ( s || u ) return n || o ? null : r.a.createElement( I.a, null );
              const m = null != ( d = e ) && null != ( d = d.content ) && null != ( d = d.nodes ) && null != ( d = d[ 0 ] ) && null != ( d = d.likes ) ? d.currentUserLikes : d;
              return r.a.createElement( a.a, {
                mutation: S,
                onCompleted: this.fireLikeAnalyticsEvent,
                refetchQueries: [ {
                  query: t ? y : f,
                  variables: c
                } ]
              }, e => r.a.createElement( a.a, {
                mutation: M,
                onCompleted: this.fireUnlikeAnalyticsEvent,
                refetchQueries: [ {
                  query: t ? y : f,
                  variables: c
                } ]
              }, t => r.a.createElement( U, {
                likeContent: this.generateMutation( e ),
                unlikeContent: this.generateMutation( t ),
                isLikedByCurrentUser: m,
                isForComment: n,
                isForInlineComment: o,
                disableButtonAction: i,
                onClick: l
              } ) ) )
            } )
          } )
        }
      } );
      var P = n( "L21V" ),
        O = n( "Cvqa" ),
        D = n( "a8dO" ),
        B = n( "uvkf" ),
        T = n( "WA38" ),
        x = n( "bR0+" ),
        N = n( "daKX" );
      const A = new O.b( {
          url: "/gateway/api/directory/graphql",
          cacheSize: 100,
          cacheMaxAge: 3e5
        } ),
        q = Object( P.f )( {
          people: {
            id: "likes.summary.count.people",
            defaultMessage: "{numLikers} people",
            description: "number of people who like content"
          },
          others: {
            id: "likes.summary.count.others",
            defaultMessage: "{numLikers} others",
            description: "number of other people who like content"
          }
        } ),
        z = Object( m.default )( T.a )
      `
  ${e=>e.isForComment&&"color: #707070;"} &:hover {
    ${e=>e.isForComment&&"color: #707070;"};
  }
`, Q = m.default.a `
  cursor: pointer;
`;
      Q.displayName = "PointerLink";
      const V = r.a.createElement( o.Fragment, null, " ", r.a.createElement( P.b, {
          id: "likes.summary.separator.and",
          defaultMessage: "and",
          description: "Word and used in listing things"
        } ), " " ),
        H = r.a.createElement( o.Fragment, null, r.a.createElement( P.b, {
          id: "likes.summary.separator.comma",
          defaultMessage: ",",
          description: "comma punctuation used in listing things"
        } ), " " ),
        K = Object( N.a )( "paginated-likes" );
      class R extends o.PureComponent {
        getUserLinkTemplate( {
          accountId: e,
          displayName: t
        } ) {
          const {
            cloudId: n,
            isForComment: o
          } = this.props, a = r.a.createElement( O.c, {
            cloudId: n,
            userId: e,
            resourceClient: A
          } );
          return r.a.createElement( z, {
            isForComment: o,
            href: Object( x.a )( e, "profileCard" )
          }, r.a.createElement( D.a, {
            tag: "span",
            component: B.a,
            content: a
          }, r.a.createElement( "span", null, t ) ) )
        }
        generateYou() {
          return r.a.createElement( P.b, {
            id: "likes.summary.word.you",
            defaultMessage: "You",
            description: "You are the user"
          } )
        }
        generatePromoted( e, t, n ) {
          const a = e.length - 1;
          let s = t;
          return e.map( ( e, t ) => {
            let i;
            s && ( i = t === a && 0 === n ? V : H ), s = !0;
            try {
              return r.a.createElement( o.Fragment, {
                key: e.accountId
              }, i, this.getUserLinkTemplate( e ) )
            } catch ( l ) {
              return K.error `Error generating promoted user ${e} : ${l}`, null
            }
          } )
        }
        generateNonPromoted( e, t, n ) {
          try {
            let a = this.getUserLinkTemplate( n[ 0 ] );
            if ( e > 1 ) {
              const {
                handleDialogLinkClick: n
              } = this.props;
              a = function ( e, t, n ) {
                const o = t ? q.people : q.others;
                return r.a.createElement( Q, {
                  onClick: n
                }, r.a.createElement( P.b, Object( C.a )( Object( C.a )( {}, o ), {}, {
                  values: {
                    numLikers: e
                  }
                } ) ) )
              }( e, t, n )
            }
            return r.a.createElement( o.Fragment, null, !t && V, a )
          } catch ( a ) {
            return K.error `Error generating non-promoted user ${n[0]} : ${a}`, null
          }
        }
        generateMessage() {
          const {
            likedBy: e,
            currentUserId: t,
            likesCount: n,
            currentUserLikes: o,
            isPaginated: a,
            followees: s
          } = this.props, i = [];
          let l = [],
            c = 0,
            u = !1,
            d = !0,
            m = 0,
            p = 0;
          return a ? ( c = o ? n - 1 : n, l = s.slice( 0, 3 ), m = l.length, p = c - m, d = !o && 0 === m, u = o, e.forEach( e => {
            e.accountId === t || l.find( t => t.accountId === e.accountId ) || i.push( e )
          } ) ) : ( e.forEach( e => {
            e.accountId === t ? ( u = !0, d = !1 ) : l.length < 3 && e.currentUserIsFollowing ? ( l.push( e ), d = !1 ) : i.push( e )
          } ), m = l.length, p = i.length, c = u ? 2 : m + p ), r.a.createElement( "span", null, u && this.generateYou(), m ? this.generatePromoted( l, u, p ) : null, p ? this.generateNonPromoted( p, d, i ) : null, " ", r.a.createElement( P.b, {
            id: "likes.summary.phrase.likeThis",
            defaultMessage: "{numLikers, plural, one {likes this} other {like this}}",
            description: "suffix for number of users who like this piece of content",
            values: {
              numLikers: c
            }
          } ) )
        }
        render() {
          const {
            currentUserId: e,
            likedBy: t,
            likesCount: n,
            isForComment: o,
            isPaginated: a
          } = this.props;
          return 0 === ( a ? n : t.length ) ? !o && e ? r.a.createElement( P.b, {
            id: "likes.phrase.bethefirst",
            defaultMessage: "Be the first to like this",
            description: "Message for content without any likes"
          } ) : null : this.generateMessage()
        }
      }
      const J = m.default.span `
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;
      J.displayName = "SummaryLink";
      const W = m.default.span `
  ${e=>e.showSeparator&&'::after {\n    content: "•";\n    color: $dark-gray;\n    padding: 0 0 0 3px;\n    font-size: 12px;\n  }'}
`;
      class Y extends o.PureComponent {
        renderForNotInlineComment() {
          const {
            cloudId: e,
            contentStatus: t,
            likesCount: n,
            currentUserLikes: o,
            followees: a,
            isPaginated: s,
            likedBy: i,
            isHidingLikesEnabled: l,
            currentUserId: c,
            isForComment: u,
            onClick: d
          } = this.props, m = s ? n : i.length, p = u && m > 0, k = !l || ( "archived" !== t || m > 0 );
          return r.a.createElement( "span", {
            "data-test-id": "likes-summary-span"
          }, p && r.a.createElement( w.a, {
            size: b.size.small,
            primaryColor: "#707070"
          } ), k && r.a.createElement( R, {
            likesCount: n,
            currentUserLikes: o,
            followees: a,
            isPaginated: s,
            likedBy: i,
            currentUserId: c,
            cloudId: e,
            isForComment: u,
            handleDialogLinkClick: d
          } ) )
        }
        renderForInlineComment() {
          const {
            likedBy: e,
            onClick: t,
            likesCount: n,
            isPaginated: o,
            showSeparator: a
          } = this.props, s = o ? n : e.length;
          return s ? r.a.createElement( W, {
            showSeparator: a
          }, r.a.createElement( w.a, {
            size: b.size.small,
            primaryColor: "#707070"
          } ), r.a.createElement( J, {
            onClick: t,
            "data-test-id": "likes-summary-link"
          }, s ) ) : null
        }
        render() {
          return this.props.isForInlineComment ? this.renderForInlineComment() : this.renderForNotInlineComment()
        }
      }
      class _ extends o.PureComponent {
        render() {
          const {
            contentId: e,
            contentType: t,
            onClick: n,
            isHidingLikesEnabled: o,
            isForComment: i,
            isForInlineComment: l,
            showSeparator: c,
            contentStatus: u
          } = this.props, d = {
            contentId: e,
            contentType: t,
            status: l ? [ "current", "draft" ] : [ "current" ]
          };
          return r.a.createElement( s.a, null, ( {
            featureFlags: e
          } ) => {
            const t = e[ "confluence.frontend.paginated.likes" ];
            return r.a.createElement( a.b, {
              query: t ? y : f,
              variables: d
            }, ( {
              data: e,
              loading: a,
              error: s
            } ) => {
              var d, m, p;
              if ( a || s ) return null;
              const k = null != ( p = e ) && null != ( p = p.user ) ? p.id : p,
                h = null != ( m = e ) && null != ( m = m.tenant ) ? m.cloudId : m;
              let g = 0,
                f = !1,
                y = [];
              var I, C, b;
              t && ( g = ( null != ( b = e ) && null != ( b = b.content ) && null != ( b = b.nodes ) && null != ( b = b[ 0 ] ) && null != ( b = b.likes ) ? b.count : b ) || 0, f = ( null != ( C = e ) && null != ( C = C.content ) && null != ( C = C.nodes ) && null != ( C = C[ 0 ] ) && null != ( C = C.likes ) ? C.currentUserLikes : C ) || !1, y = ( null != ( I = e ) && null != ( I = I.content ) && null != ( I = I.nodes ) && null != ( I = I[ 0 ] ) && null != ( I = I.likes ) ? I.followees : I ) || [], y = y.filter( e => e.accountId != k ) );
              const E = ( ( null != ( d = e ) && null != ( d = d.content ) && null != ( d = d.nodes ) && null != ( d = d[ 0 ] ) && null != ( d = d.likes ) ? d.nodes : d ) || [] ).map( ( {
                currentUserIsFollowing: e,
                user: {
                  displayName: t,
                  accountId: n,
                  profilePicture: {
                    path: o
                  } = {}
                } = {}
              } ) => ( {
                displayName: t,
                accountId: n,
                avatarUrl: o,
                currentUserIsFollowing: e
              } ) );
              return r.a.createElement( Y, {
                likesCount: g,
                currentUserLikes: f,
                followees: y,
                isPaginated: t,
                likedBy: E,
                cloudId: h,
                contentStatus: u,
                isHidingLikesEnabled: o,
                currentUserId: k,
                onClick: n,
                isForComment: i,
                isForInlineComment: l,
                showSeparator: c
              } )
            } )
          } )
        }
      }
      var G = n( "liLY" ),
        X = n( "kbI0" ),
        Z = n( "MqVv" ),
        ee = n( "zJ/j" ),
        te = n( "Oqsm" ),
        ne = n( "0Dc1" );
      const oe = Object( P.f )( {
          followUser: {
            id: "likes.dialog.action.follow",
            defaultMessage: "Follow",
            description: "Verb for following/subscribing to a user"
          },
          dialogHeading: {
            id: "likes.dialog.phrase.likers",
            defaultMessage: "People who like this",
            description: "People who like the piece of content"
          },
          following: {
            id: "likes.dialog.noun.following",
            defaultMessage: "Following",
            description: "Gerund for a user you already follow"
          },
          close: {
            id: "likes.dialog.action.close",
            defaultMessage: "Close",
            description: "Button for closing dialog"
          }
        } ),
        re = m.default.div `
  border-bottom: 1px solid ${L.N50};
  display: flex;
  align-items: center;
  padding: 10px;
  overflow: auto;
`;
      re.displayName = "LikeUserRow";
      const ae = m.default.div `
  line-height: 0;
`;
      ae.displayName = "AvatarContainer";
      const se = m.default.div `
  flex-grow: 1;
  padding: 0 10px;
  a,
  a:hover,
  a:active,
  a:visited,
  a:link {
    color: ${L.N800};
  }
`,
        ie = m.default.div `
  display: flex;
  margin: 4px 0;
  justify-content: center;
`;
      se.displayName = "UserNameContainer";
      const le = Object( P.g )( Object( k.a )()( class extends o.PureComponent {
          constructor( ...e ) {
            super( ...e ), Object( d.a )( this, "loadMoreClicked", () => {
              const {
                onLoadMore: e,
                createAnalyticsEvent: t
              } = this.props;
              e(), t( {
                type: "sendTrackEvent",
                data: {
                  action: "clicked",
                  actionSubject: "button",
                  actionSubjectId: "LikeDialogLoadMore",
                  source: "LikeDialog"
                }
              } ).fire()
            } )
          }
          renderLikeRow( {
            displayName: e,
            accountId: t,
            avatarUrl: n,
            currentUserIsFollowing: o
          } ) {
            if ( !e ) return null;
            const {
              followUser: a
            } = this.props;
            return r.a.createElement( re, {
              key: t,
              "data-test-id": "like-row"
            }, r.a.createElement( ae, null, r.a.createElement( te.a, {
              src: n,
              size: "medium"
            } ) ), r.a.createElement( se, null, r.a.createElement( T.a, {
              target: "_blank",
              href: Object( x.a )( t, null )
            }, e ) ), r.a.createElement( "div", null, o ? r.a.createElement( P.b, Object( C.a )( {}, oe.following ) ) : r.a.createElement( ee.a, {
              onClick: () => {
                a( t )
              },
              "data-test-id": "follow-user-button"
            }, r.a.createElement( P.b, Object( C.a )( {}, oe.followUser ) ) ) ) )
          }
          render() {
            const {
              onClose: e,
              likedBy: t,
              hasNextPage: n,
              isDisabled: o,
              isPaginated: a
            } = this.props, s = [ {
              text: r.a.createElement( P.b, Object( C.a )( {}, oe.close ) ),
              onClick: e
            } ];
            return r.a.createElement( X.b, null, r.a.createElement( Z.a, {
              actions: s,
              onClose: e,
              width: "small",
              heading: r.a.createElement( P.b, Object( C.a )( {}, oe.dialogHeading ) )
            }, t.map( e => this.renderLikeRow( e ) ), a && n ? r.a.createElement( ie, null, r.a.createElement( ee.a, {
              "data-test-id": "like-dialog-load-more-button",
              appearance: "default",
              isDisabled: o,
              onClick: this.loadMoreClicked
            }, r.a.createElement( P.b, {
              id: "likes.dialog.load.more.button",
              defaultMessage: "Load more",
              description: "Like dialog, load more button"
            } ) ) ) : null, r.a.createElement( ne.a, {
              subject: "load-likes-dialog"
            } ) ) )
          }
        } ) ),
        ce = g.a `query LikesDialogQuery($contentId:ID!$contentType:String!){content(id:$contentId type:$contentType){nodes{id likes{nodes{user{accountId displayName profilePicture{path}}currentUserIsFollowing}}}}}`,
        ue = g.a `query PaginatedLikesQuery($contentId:ID!$first:Long=20$offset:Int){content(id:$contentId){nodes{id type likes(first:$first offset:$offset){count currentUserLikes nodes{user{accountId displayName profilePicture{path}}currentUserIsFollowing}pageInfo{hasNextPage endCursor}}}}}`,
        de = g.a `mutation LikeDialogFollowMutation($accountId:String!){followUser(followUserInput:{accountId:$accountId}){currentUserFollowing}}`;
      class me extends o.PureComponent {
        constructor( ...e ) {
          super( ...e ), Object( d.a )( this, "state", {
            followerAccountId: "",
            loadMoreDisabled: !1
          } ), Object( d.a )( this, "updateLikesCache", ( e, {
            data: t
          } ) => {
            const {
              contentId: n
            } = this.props, o = e.readQuery( {
              query: ue,
              variables: {
                contentId: n
              }
            } );
            o.content.nodes[ 0 ].likes.nodes.find( e => e.user.accountId === this.state.followerAccountId ).currentUserIsFollowing = t.followUser.currentUserFollowing, e.writeQuery( {
              query: ue,
              data: Object( C.a )( {}, o ),
              variables: {
                contentId: n
              }
            } )
          } ), Object( d.a )( this, "generateLoadMoreHandler", ( {
            fetchMore: e,
            contentId: t,
            likes: n
          } ) => () => {
            this.setState( {
              loadMoreDisabled: !0
            } ), e( {
              query: ue,
              updateQuery: ( e, {
                fetchMoreResult: t
              } ) => t ? ( t.content.nodes[ 0 ].likes.nodes = [ ...e.content.nodes[ 0 ].likes.nodes, ...t.content.nodes[ 0 ].likes.nodes ], this.setState( {
                loadMoreDisabled: !1
              } ), Object( C.a )( {}, t ) ) : e,
              variables: {
                offset: n.length,
                contentId: t
              }
            } )
          } )
        }
        getFollowUserMutation( e ) {
          return t => {
            this.setState( {
              followerAccountId: t
            } ), e( {
              variables: {
                accountId: t
              }
            } )
          }
        }
        render() {
          const {
            contentId: e,
            contentType: t,
            onClose: n
          } = this.props, o = {
            contentId: e,
            contentType: t
          };
          return Object( G.e )( {
            subject: "load-likes-dialog"
          } ), r.a.createElement( s.a, null, ( {
            featureFlags: t
          } ) => {
            const s = t[ "confluence.frontend.paginated.likes" ];
            return r.a.createElement( a.b, {
              query: s ? ue : ce,
              variables: o,
              fetchPolicy: "cache-first"
            }, ( {
              data: t,
              loading: i,
              error: l,
              fetchMore: c
            } ) => {
              var u, d;
              if ( i || l || !t ) return null;
              const m = ( null != ( d = t ) && null != ( d = d.content ) && null != ( d = d.nodes ) && null != ( d = d[ 0 ] ) && null != ( d = d.likes ) ? d.nodes : d ) || [],
                p = m.map( e => {
                  var t;
                  return {
                    accountId: e.user && e.user.accountId,
                    displayName: e.user && e.user.displayName,
                    avatarUrl: null != ( t = e ) && null != ( t = t.user ) && null != ( t = t.profilePicture ) ? t.path : t,
                    currentUserIsFollowing: e.currentUserIsFollowing
                  }
                } ),
                k = s && ( null != ( u = t ) && null != ( u = u.content ) && null != ( u = u.nodes ) && null != ( u = u[ 0 ] ) && null != ( u = u.likes ) && null != ( u = u.pageInfo ) ? u.hasNextPage : u ) || !1;
              return r.a.createElement( a.a, Object( C.a )( {
                mutation: de
              }, s ? {
                update: this.updateLikesCache
              } : {
                refetchQueries: [ {
                  query: ce,
                  variables: o
                } ]
              } ), t => r.a.createElement( le, {
                likedBy: p,
                onClose: n,
                isDisabled: this.state.loadMoreDisabled,
                followUser: this.getFollowUserMutation( t ),
                isPaginated: s,
                onLoadMore: this.generateLoadMoreHandler( {
                  fetchMore: c,
                  contentId: e,
                  likes: m
                } ),
                hasNextPage: k
              } ) )
            } )
          } )
        }
      }
      const pe = m.default.span `
  color: #707070;
  padding: ${e=>e.isForInlineComment?"0 0 0 4px;":"0 4px;"};
`;
      pe.displayName = "SeparatorDot";
      const ke = m.default.span `
  margin-left: 20px;
`;
      ke.displayName = "SeparatorSpan";
      const he = m.default.span `
  ${e=>e.isComment&&"font-size: 12px;\n    color: #707070;"} /* include this for inline comments because HoverContainer renders empty div */
  + div {
    display: inline;
  }
`;
      he.displayName = "LikesContainer";
      class ge extends o.PureComponent {
        constructor( ...e ) {
          super( ...e ), Object( d.a )( this, "state", {
            isShowingDialog: !1
          } ), Object( d.a )( this, "onSummaryClick", () => {
            this.setState( {
              isShowingDialog: !0
            } )
          } ), Object( d.a )( this, "onCloseDialog", () => {
            this.setState( {
              isShowingDialog: !1
            } )
          } )
        }
        renderSummarySeparator() {
          const {
            isForComment: e,
            isForInlineComment: t,
            hasLikes: n,
            showSeparator: o
          } = this.props;
          return t ? n || !o ? null : r.a.createElement( pe, {
            isForInlineComment: !0
          }, "•" ) : e ? n ? r.a.createElement( pe, null, "•" ) : null : r.a.createElement( ke, null )
        }
        render() {
          const {
            contentId: e,
            contentType: t,
            contentStatus: n,
            containerId: o,
            containerType: a,
            isAnonymous: i,
            hasLikes: c,
            isForComment: u,
            isForInlineComment: d,
            showSeparator: m,
            onClick: k
          } = this.props;
          return r.a.createElement( s.a, null, ( {
            featureFlags: s
          } ) => {
            const h = "archived" === n,
              g = s[ "confluence.frontend.hide.like.archived.pages" ],
              f = g ? !i && ( !h || c ) : !i,
              y = g ? u && ( !i || c ) && !h : u && ( !i || c ),
              I = g && h,
              C = !g || !h,
              b = g ? m && !h : m;
            return r.a.createElement( he, {
              isComment: u || d
            }, y && r.a.createElement( pe, null, "•" ), f && r.a.createElement( "span", null, r.a.createElement( j, {
              contentId: e,
              contentType: t,
              containerId: o,
              containerType: a,
              isForComment: u,
              isForInlineComment: d,
              disableButtonAction: I,
              onClick: k
            } ), C && this.renderSummarySeparator() ), r.a.createElement( _, {
              contentId: e,
              contentType: t,
              contentStatus: n,
              onClick: this.onSummaryClick,
              isHidingLikesEnabled: g,
              isForComment: u,
              isForInlineComment: d,
              showSeparator: b
            } ), !u && !d && r.a.createElement( p.a, {
              name: l.a.VIEW_PAGE_LIKES,
              attributes: {
                isForComment: u,
                isForInlineComment: d
              }
            } ), this.state.isShowingDialog && r.a.createElement( me, {
              contentId: e,
              contentType: t,
              onClose: this.onCloseDialog
            } ) )
          } )
        }
      }
      const fe = g.a `query LikesQuery($contentId:ID!$status:[String]){content(id:$contentId status:$status){nodes{id status type likes{count}}}}`;
      n.d( t, "a", ( function () {
        return ye
      } ) );
      class ye extends o.PureComponent {
        render() {
          const {
            contentId: e,
            containerId: t,
            containerType: n,
            isForComment: o,
            isForInlineComment: d,
            showSeparator: m,
            onClick: p
          } = this.props, k = {
            contentId: e,
            status: d ? [ "current", "draft" ] : [ "current" ]
          };
          return r.a.createElement( c.a, {
            attribution: u.a.BACKBONE
          }, !o && !d && r.a.createElement( i.a, {
            id: e,
            name: l.a.VIEW_PAGE_LIKES
          } ), r.a.createElement( s.a, null, ( {
            userId: s
          } ) => r.a.createElement( a.b, {
            query: fe,
            variables: k
          }, ( {
            data: a,
            loading: i,
            error: l
          } ) => {
            var c, u, k;
            if ( i || l ) return o || d ? null : r.a.createElement( I.a, null );
            const h = ( null != ( k = a ) && null != ( k = k.content ) && null != ( k = k.nodes ) && null != ( k = k[ 0 ] ) ? k.likes : k ) || {},
              g = ( null != ( u = a ) && null != ( u = u.content ) && null != ( u = u.nodes ) && null != ( u = u[ 0 ] ) ? u.status : u ) || "draft",
              f = ( null != ( c = a ) && null != ( c = c.content ) ? c.type : c ) || "",
              y = h.count > 0;
            return r.a.createElement( ge, {
              contentId: e,
              contentStatus: g,
              contentType: f,
              containerId: t,
              containerType: n,
              hasLikes: y,
              isAnonymous: Boolean( !s ),
              isForComment: o,
              isForInlineComment: d,
              showSeparator: m,
              onClick: p
            } )
          } ) ) )
        }
      }
    }
  }
] );
//# sourceMappingURL=41.CHbe6CdfnL.js.map
