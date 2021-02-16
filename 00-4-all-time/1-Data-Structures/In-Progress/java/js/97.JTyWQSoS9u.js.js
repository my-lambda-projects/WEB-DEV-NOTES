( window.webpackJsonp = window.webpackJsonp || [] ).push( [
  [ 97 ], {
    "OHh+": function ( e, t, n ) {
      "use strict";
      n.d( t, "e", ( function () {
        return r
      } ) ), n.d( t, "d", ( function () {
        return i
      } ) ), n.d( t, "b", ( function () {
        return o
      } ) ), n.d( t, "f", ( function () {
        return a
      } ) ), n.d( t, "a", ( function () {
        return l
      } ) ), n.d( t, "c", ( function () {
        return d
      } ) ), n.d( t, "g", ( function () {
        return u
      } ) );
      const r = ( e, t ) => e === t || e.length === t.length && e.every( ( e, n ) => e === t[ n ] ),
        i = ( e, t ) => r( o( e ), o( t ) ),
        o = e => e.slice( 0, e.length - 1 ),
        a = ( e, t ) => !t || c( t, e ),
        c = ( e, t ) => r( e, o( t ) ),
        l = e => e[ e.length - 1 ],
        d = ( e, t ) => e.slice( 0, t ),
        u = ( e, t ) => {
          const n = [ ...e ];
          return s( n, t ) || ( n[ n.length - 1 ] += 1 ), n
        },
        s = ( e, t ) => i( e, t ) && l( e ) > l( t )
    },
    XcNc: function ( e, t, n ) {
      "use strict";
      n.d( t, "a", ( function () {
        return o
      } ) ), n.d( t, "d", ( function () {
        return l
      } ) ), n.d( t, "b", ( function () {
        return d
      } ) ), n.d( t, "c", ( function () {
        return u
      } ) );
      var r = n( "Czhu" ),
        i = n( "OHh+" );
      const o = ( e, t = [] ) => e.items[ e.rootId ] ? e.items[ e.rootId ].children.reduce( ( n, r, i ) => {
          const o = e.items[ r ],
            l = [ ...t, i ];
          return [ ...n, a( o, l ), ...c( e, o, l ) ]
        }, [] ) : [],
        a = ( e, t ) => ( {
          item: e,
          path: t
        } ),
        c = ( e, t, n ) => t.isExpanded ? o( {
          rootId: t.id,
          items: e.items
        }, n ) : [],
        l = ( e, t, n ) => {
          const i = e.items[ t ];
          return i ? {
            rootId: e.rootId,
            items: Object( r.a )( Object( r.a )( {}, e.items ), {}, {
              [ t ]: Object( r.a )( Object( r.a )( {}, i ), n )
            } )
          } : e
        },
        d = ( e, t ) => {
          const n = ( ( e, t ) => ( ( e, t ) => {
              let n = e.items[ e.rootId ];
              for ( const r of t ) n = e.items[ n.children[ r ] ];
              return n
            } )( e, Object( i.b )( t ) ) )( e, t ),
            r = Object( i.a )( t );
          return {
            parentId: n.id,
            index: r
          }
        },
        u = ( e, t, n ) => {
          const {
            tree: r,
            itemRemoved: i
          } = ( ( e, t ) => {
            const n = e.items[ t.parentId ],
              r = [ ...n.children ],
              i = r.splice( t.index, 1 )[ 0 ];
            return {
              tree: l( e, t.parentId, {
                children: r,
                hasChildren: r.length > 0,
                isExpanded: r.length > 0 && n.isExpanded
              } ),
              itemRemoved: i
            }
          } )( e, t );
          return ( ( e, t, n ) => {
            const r = e.items[ t.parentId ],
              i = [ ...r.children ];
            return void 0 === t.index ? ( ( e => !!e.hasChildren && e.children.length > 0 )( r ) || ( e => !e.hasChildren )( r ) ) && i.push( n ) : i.splice( t.index, 0, n ), l( e, t.parentId, {
              children: i,
              hasChildren: !0
            } )
          } )( r, n, i )
        }
    },
    "s/6t": function ( e, t, n ) {
      "use strict";
      var r = n( "Czhu" ),
        i = n( "97Jx" ),
        o = n.n( i ),
        a = n( "KEM+" ),
        c = n.n( a ),
        l = n( "ERkP" ),
        d = n.n( l ),
        u = n( "pneb" ),
        s = n( "3AlC" ),
        p = n( "JCzS" );
      var f = function ( e, t ) {
          if ( !e ) throw new Error( "Invariant failed" )
        },
        g = n( "cwAB" ),
        b = n( "6yyN" ),
        m = n( "PgQS" ),
        v = n( "lSUb" ),
        h = n( "z0N8" ),
        O = n.n( h ),
        x = n( "TPw6" ),
        D = n.n( x ),
        I = n( "hc8B" ),
        y = n.n( I ),
        w = n( "QXP/" ),
        E = n( "OCF2" ),
        j = n.n( E );
      n( "jG6G" );

      function C( e ) {
        return -1 !== e.message.indexOf( "Invariant failed" )
      }
      var S = function ( e ) {
          function t() {
            for ( var t, n = arguments.length, r = new Array( n ), i = 0; i < n; i++ ) r[ i ] = arguments[ i ];
            return ( t = e.call.apply( e, [ this ].concat( r ) ) || this ).onError = void 0, t.setOnError = function ( e ) {
              t.onError = e
            }, t.onFatalError = function ( e ) {
              t.onError && t.onError(), C( e ) && t.setState( {} )
            }, t
          }
          Object( p.a )( t, e );
          var n = t.prototype;
          return n.componentDidMount = function () {
            window.addEventListener( "error", this.onFatalError )
          }, n.componentWillUnmount = function () {
            window.removeEventListener( "error", this.onFatalError )
          }, n.componentDidCatch = function ( e ) {
            if ( this.onFatalError( e ), !C( e ) ) throw e
          }, n.render = function () {
            return this.props.children( this.setOnError )
          }, t
        }( d.a.Component ),
        B = {
          x: 0,
          y: 0
        },
        L = function ( e, t ) {
          return {
            x: e.x + t.x,
            y: e.y + t.y
          }
        },
        P = function ( e, t ) {
          return {
            x: e.x - t.x,
            y: e.y - t.y
          }
        },
        A = function ( e, t ) {
          return e.x === t.x && e.y === t.y
        },
        R = function ( e ) {
          return {
            x: 0 !== e.x ? -e.x : 0,
            y: 0 !== e.y ? -e.y : 0
          }
        },
        N = function ( e, t, n ) {
          var r;
          return void 0 === n && ( n = 0 ), ( r = {} )[ e ] = t, r[ "x" === e ? "y" : "x" ] = n, r
        },
        T = function ( e, t ) {
          return Math.sqrt( Math.pow( t.x - e.x, 2 ) + Math.pow( t.y - e.y, 2 ) )
        },
        M = function ( e, t ) {
          return Math.min.apply( Math, t.map( ( function ( t ) {
            return T( e, t )
          } ) ) )
        },
        G = function ( e ) {
          return function ( t ) {
            return {
              x: e( t.x ),
              y: e( t.y )
            }
          }
        },
        _ = function ( e, t ) {
          return {
            top: e.top + t.y,
            left: e.left + t.x,
            bottom: e.bottom + t.y,
            right: e.right + t.x
          }
        },
        F = function ( e ) {
          return [ {
            x: e.left,
            y: e.top
          }, {
            x: e.right,
            y: e.top
          }, {
            x: e.left,
            y: e.bottom
          }, {
            x: e.right,
            y: e.bottom
          } ]
        },
        W = function ( e, t ) {
          return t && t.shouldClipSubject ? function ( e, t ) {
            var n = Object( m.e )( {
              top: Math.max( t.top, e.top ),
              right: Math.min( t.right, e.right ),
              bottom: Math.min( t.bottom, e.bottom ),
              left: Math.max( t.left, e.left )
            } );
            return n.width <= 0 || n.height <= 0 ? null : n
          }( t.pageMarginBox, e ) : Object( m.e )( e )
        },
        U = function ( e ) {
          var t = e.page,
            n = e.withPlaceholder,
            r = e.axis,
            i = e.frame,
            o = function ( e, t, n ) {
              var r;
              return n && n.increasedBy ? Object( u.a )( {}, e, ( ( r = {} )[ t.end ] = e[ t.end ] + n.increasedBy[ t.line ], r ) ) : e
            }( function ( e, t ) {
              return t ? _( e, t.scroll.diff.displacement ) : e
            }( t.marginBox, i ), r, n );
          return {
            page: t,
            withPlaceholder: n,
            active: W( o, i )
          }
        },
        k = function ( e, t ) {
          e.frame || f( !1 );
          var n = e.frame,
            r = P( t, n.scroll.initial ),
            i = R( r ),
            o = Object( u.a )( {}, n, {
              scroll: {
                initial: n.scroll.initial,
                current: t,
                diff: {
                  value: r,
                  displacement: i
                },
                max: n.scroll.max
              }
            } ),
            a = U( {
              page: e.subject.page,
              withPlaceholder: e.subject.withPlaceholder,
              axis: e.axis,
              frame: o
            } );
          return Object( u.a )( {}, e, {
            frame: o,
            subject: a
          } )
        },
        H = function ( e ) {
          var t = e.merge,
            n = e.destination;
          return n ? n.droppableId : t ? t.combine.droppableId : null
        };

      function V( e ) {
        return O()( e )
      }

      function z( e, t ) {
        if ( e.findIndex ) return e.findIndex( t );
        for ( var n = 0; n < e.length; n++ )
          if ( t( e[ n ] ) ) return n;
        return -1
      }

      function q( e, t ) {
        if ( e.find ) return e.find( t );
        var n = z( e, t );
        return -1 !== n ? e[ n ] : void 0
      }
      var Y = Object( v.default )( ( function ( e ) {
          return e.reduce( ( function ( e, t ) {
            return e[ t.descriptor.id ] = t, e
          } ), {} )
        } ) ),
        J = Object( v.default )( ( function ( e ) {
          return e.reduce( ( function ( e, t ) {
            return e[ t.descriptor.id ] = t, e
          } ), {} )
        } ) ),
        X = Object( v.default )( ( function ( e ) {
          return V( e )
        } ) ),
        K = Object( v.default )( ( function ( e ) {
          return V( e )
        } ) ),
        Q = function ( e, t ) {
          return function ( n ) {
            return e <= n && n <= t
          }
        },
        $ = function ( e ) {
          var t = Q( e.top, e.bottom ),
            n = Q( e.left, e.right );
          return function ( e ) {
            return t( e.y ) && t( e.y ) && n( e.x ) && n( e.x )
          }
        },
        Z = Object( v.default )( ( function ( e, t ) {
          return K( t ).filter( ( function ( t ) {
            return e === t.descriptor.droppableId
          } ) ).sort( ( function ( e, t ) {
            return e.descriptor.index - t.descriptor.index
          } ) )
        } ) ),
        ee = {
          direction: "vertical",
          line: "y",
          crossAxisLine: "x",
          start: "top",
          end: "bottom",
          size: "height",
          crossAxisStart: "left",
          crossAxisEnd: "right",
          crossAxisSize: "width"
        },
        te = {
          direction: "horizontal",
          line: "x",
          crossAxisLine: "y",
          start: "left",
          end: "right",
          size: "width",
          crossAxisStart: "top",
          crossAxisEnd: "bottom",
          crossAxisSize: "height"
        },
        ne = function ( e, t ) {
          return e === ee ? "down" === t.vertical : "right" === t.horizontal
        },
        re = function ( e, t ) {
          return Boolean( t.wasDisplaced[ e ] )
        },
        ie = function ( e ) {
          var t = e.displaced,
            n = e.onLift,
            r = e.combineWith,
            i = e.displacedBy,
            o = Boolean( t[ r ] );
          return re( r, n ) ? o ? B : R( i.point ) : o ? i.point : B
        },
        oe = function ( e, t, n ) {
          return n ? e !== n.combine.draggableId ? t : n.whenEntered : t
        },
        ae = function ( e ) {
          var t = e.pageBorderBoxCenterWithDroppableScrollChange,
            n = e.previousImpact,
            r = e.destination,
            i = e.insideDestinationWithoutDraggable,
            o = e.userDirection,
            a = e.onLift;
          if ( !r.isCombineEnabled ) return null;
          var c = r.axis,
            l = n.movement.map,
            d = n.movement.displacedBy,
            s = n.merge,
            p = q( i, ( function ( e ) {
              var n = e.descriptor.id,
                r = ie( {
                  displaced: l,
                  onLift: a,
                  combineWith: n,
                  displacedBy: d
                } );
              return function ( e ) {
                var t = e.id,
                  n = e.currentCenter,
                  r = e.axis,
                  i = e.borderBox,
                  o = e.displaceBy,
                  a = e.currentUserDirection,
                  c = e.oldMerge,
                  l = i[ r.start ] + o[ r.line ],
                  d = i[ r.end ] + o[ r.line ],
                  u = .666 * i[ r.size ],
                  s = oe( t, a, c ),
                  p = ne( r, s ),
                  f = n[ r.line ];
                return p ? Q( l, l + u )( f ) : Q( d - u, d )( f )
              }( {
                id: n,
                currentCenter: t,
                axis: c,
                borderBox: e.page.borderBox,
                displaceBy: r,
                currentUserDirection: o,
                oldMerge: s
              } )
            } ) );
          if ( !p ) return null;
          var f = {
            whenEntered: oe( p.descriptor.id, o, s ),
            combine: {
              draggableId: p.descriptor.id,
              droppableId: r.descriptor.id
            }
          };
          return Object( u.a )( {}, n, {
            destination: null,
            merge: f
          } )
        },
        ce = function ( e ) {
          var t = Q( e.top, e.bottom ),
            n = Q( e.left, e.right );
          return function ( r ) {
            if ( t( r.top ) && t( r.bottom ) && n( r.left ) && n( r.right ) ) return !0;
            var i = t( r.top ) || t( r.bottom ),
              o = n( r.left ) || n( r.right );
            if ( i && o ) return !0;
            var a = r.top < e.top && r.bottom > e.bottom,
              c = r.left < e.left && r.right > e.right;
            return !( !a || !c ) || ( a && o || c && i )
          }
        },
        le = function ( e ) {
          var t = Q( e.top, e.bottom ),
            n = Q( e.left, e.right );
          return function ( e ) {
            return t( e.top ) && t( e.bottom ) && n( e.left ) && n( e.right )
          }
        },
        de = function ( e ) {
          var t = e.target,
            n = e.destination,
            r = e.viewport,
            i = e.withDroppableDisplacement,
            o = e.isVisibleThroughFrameFn,
            a = i ? function ( e, t ) {
              var n = t.frame ? t.frame.scroll.diff.displacement : B;
              return _( e, n )
            }( t, n ) : t;
          return function ( e, t, n ) {
            return !!t.subject.active && n( t.subject.active )( e )
          }( a, n, o ) && function ( e, t, n ) {
            return n( t )( e )
          }( a, r, o )
        },
        ue = function ( e ) {
          return de( Object( u.a )( {}, e, {
            isVisibleThroughFrameFn: ce
          } ) )
        },
        se = function ( e ) {
          return de( Object( u.a )( {}, e, {
            isVisibleThroughFrameFn: le
          } ) )
        },
        pe = function ( e ) {
          var t = e.draggable,
            n = e.destination,
            r = e.previousImpact,
            i = e.viewport,
            o = e.onLift,
            a = e.forceShouldAnimate,
            c = t.descriptor.id,
            l = r.movement.map,
            d = function ( e, t ) {
              var n = e.page.marginBox;
              if ( !re( e.descriptor.id, t ) ) return n;
              var r = {
                top: t.displacedBy.point.y,
                right: 0,
                bottom: 0,
                left: t.displacedBy.point.x
              };
              return Object( m.e )( Object( m.c )( n, r ) )
            }( t, o ),
            u = ue( {
              target: d,
              destination: n,
              viewport: i,
              withDroppableDisplacement: !0
            } );
          return {
            draggableId: c,
            isVisible: u,
            shouldAnimate: function ( e, t, n ) {
              return "boolean" == typeof e ? e : !!t && ( !n || n.shouldAnimate )
            }( a, u, l[ c ] )
          }
        },
        fe = Object( v.default )( ( function ( e ) {
          return e.reduce( ( function ( e, t ) {
            return e[ t.draggableId ] = t, e
          } ), {} )
        } ) ),
        ge = Object( v.default )( ( function ( e, t ) {
          var n = t[ e.line ];
          return {
            value: n,
            point: N( e.line, n )
          }
        } ) ),
        be = {
          displaced: [],
          map: {},
          displacedBy: {
            point: B,
            value: 0
          }
        },
        me = {
          movement: be,
          destination: null,
          merge: null
        },
        ve = Object( v.default )( ( function ( e, t ) {
          return t.filter( ( function ( t ) {
            return t.descriptor.id !== e.descriptor.id
          } ) )
        } ) ),
        he = function ( e ) {
          var t = e.pageBorderBoxCenter,
            n = e.draggable,
            r = e.draggables,
            i = e.droppables,
            o = e.previousImpact,
            a = e.viewport,
            c = e.userDirection,
            l = e.onLift,
            d = function ( e ) {
              var t = e.target,
                n = e.droppables,
                r = q( X( n ), ( function ( e ) {
                  if ( !e.isEnabled ) return !1;
                  var n = e.subject.active;
                  return !!n && $( n )( t )
                } ) );
              return r ? r.descriptor.id : null
            }( {
              target: t,
              droppables: i
            } );
          if ( !d ) return me;
          var u, s, p = i[ d ],
            f = Z( p.descriptor.id, r ),
            g = ve( n, f ),
            b = ( u = t, ( s = p.frame ) ? L( u, s.scroll.diff.value ) : u ),
            m = ae( {
              pageBorderBoxCenterWithDroppableScrollChange: b,
              previousImpact: o,
              destination: p,
              insideDestinationWithoutDraggable: g,
              userDirection: c,
              onLift: l
            } );
          return m || function ( e ) {
            var t = e.pageBorderBoxCenterWithDroppableScrollChange,
              n = e.draggable,
              r = e.destination,
              i = e.insideDestinationWithoutDraggable,
              o = e.previousImpact,
              a = e.viewport,
              c = e.userDirection,
              l = e.onLift,
              d = r.axis,
              u = ne( r.axis, c ),
              s = ge( r.axis, n.displaceBy ),
              p = t[ d.line ],
              f = s.value,
              g = i.filter( ( function ( e ) {
                var t = e.page.borderBox,
                  n = t[ d.start ],
                  r = t[ d.end ],
                  i = re( e.descriptor.id, l );
                return u ? i ? p < n : p < n + f : i ? p <= r - f : p <= r
              } ) ).map( ( function ( e ) {
                return pe( {
                  draggable: e,
                  destination: r,
                  previousImpact: o,
                  viewport: a.frame,
                  onLift: l
                } )
              } ) ),
              b = i.length - g.length;
            return {
              movement: {
                displacedBy: s,
                displaced: g,
                map: fe( g )
              },
              destination: {
                droppableId: r.descriptor.id,
                index: b
              },
              merge: null
            }
          }( {
            pageBorderBoxCenterWithDroppableScrollChange: b,
            destination: p,
            draggable: n,
            insideDestinationWithoutDraggable: g,
            previousImpact: o,
            viewport: a,
            userDirection: c,
            onLift: l
          } )
        },
        Oe = function ( e ) {
          var t, n = e.draggable,
            r = e.home,
            i = e.draggables,
            o = e.viewport,
            a = ge( r.axis, n.displaceBy ),
            c = Z( r.descriptor.id, i ).slice( n.descriptor.index + 1 ),
            l = {
              displacedBy: a,
              wasDisplaced: c.reduce( ( function ( e, t ) {
                return e[ t.descriptor.id ] = !0, e
              } ), {} )
            },
            d = c.map( ( function ( e ) {
              return pe( {
                draggable: e,
                destination: r,
                previousImpact: me,
                viewport: o.frame,
                forceShouldAnimate: !1,
                onLift: l
              } )
            } ) );
          return {
            impact: {
              movement: {
                displaced: d,
                map: fe( d ),
                displacedBy: a
              },
              destination: ( t = n.descriptor, {
                index: t.index,
                droppableId: t.droppableId
              } ),
              merge: null
            },
            onLift: l
          }
        },
        xe = function ( e ) {
          var t = e.draggable,
            n = e.offset,
            r = e.initialWindowScroll,
            i = Object( m.f )( t.client, n ),
            o = Object( m.g )( i, r );
          return Object( u.a )( {}, t, {
            placeholder: Object( u.a )( {}, t.placeholder, {
              client: i
            } ),
            client: i,
            page: o
          } )
        },
        De = function ( e ) {
          var t = e.updatedDroppables,
            n = e.criticalId,
            r = e.existing,
            i = e.additions,
            o = e.removals,
            a = e.viewport,
            c = function ( e ) {
              var t = e.existing,
                n = e.droppables,
                r = e.additions,
                i = e.removals,
                o = e.viewport,
                a = {};
              return X( n ).forEach( ( function ( e ) {
                var n = e.axis,
                  c = Z( e.descriptor.id, t ),
                  l = {},
                  d = function ( e, t ) {
                    var n = l[ e ];
                    l[ e ] = n ? {
                      indexChange: n.indexChange + t.indexChange,
                      offset: L( n.offset, t.offset )
                    } : t
                  },
                  s = J( i.map( ( function ( e ) {
                    var n = t[ e ];
                    return n || f( !1 ), n
                  } ) ).filter( ( function ( t ) {
                    return t.descriptor.droppableId === e.descriptor.id
                  } ) ) ),
                  p = c.filter( ( function ( e, t ) {
                    if ( !Boolean( s[ e.descriptor.id ] ) ) return !0;
                    var r = R( N( n.line, e.displaceBy[ n.line ] ) );
                    return c.slice( t ).forEach( ( function ( e ) {
                      s[ e.descriptor.id ] || d( e.descriptor.id, {
                        indexChange: -1,
                        offset: r
                      } )
                    } ) ), !1
                  } ) ),
                  g = r.filter( ( function ( t ) {
                    return t.descriptor.droppableId === e.descriptor.id
                  } ) ),
                  b = p.slice( 0 );
                g.forEach( ( function ( e ) {
                  b.splice( e.descriptor.index, 0, e )
                } ) );
                var m = J( g );
                b.forEach( ( function ( e, t ) {
                  if ( Boolean( m[ e.descriptor.id ] ) ) {
                    var r = N( n.line, e.client.marginBox[ n.size ] );
                    b.slice( t ).forEach( ( function ( e ) {
                      m[ e.descriptor.id ] || d( e.descriptor.id, {
                        indexChange: 1,
                        offset: r
                      } )
                    } ) )
                  }
                } ) ), b.forEach( ( function ( e ) {
                  if ( !m[ e.descriptor.id ] ) {
                    var t = l[ e.descriptor.id ];
                    if ( t ) {
                      var n = xe( {
                          draggable: e,
                          offset: t.offset,
                          initialWindowScroll: o.scroll.initial
                        } ),
                        r = e.descriptor.index + t.indexChange,
                        i = Object( u.a )( {}, n, {
                          descriptor: Object( u.a )( {}, e.descriptor, {
                            index: r
                          } )
                        } );
                      a[ n.descriptor.id ] = i
                    }
                  }
                } ) )
              } ) ), Object( u.a )( {}, t, a )
            }( {
              droppables: t,
              existing: r,
              additions: i,
              removals: o,
              viewport: a
            } ),
            l = c[ n ],
            d = t[ l.descriptor.droppableId ],
            s = function ( e ) {
              var t = e.additions,
                n = e.dragging,
                r = e.home,
                i = e.viewport,
                o = ge( r.axis, n.displaceBy );
              return t.map( ( function ( e ) {
                return e.descriptor.droppableId !== r.descriptor.id || e.descriptor.index < n.descriptor.index ? e : xe( {
                  draggable: e,
                  offset: o.point,
                  initialWindowScroll: i.scroll.initial
                } )
              } ) )
            }( {
              additions: function ( e ) {
                var t = e.additions,
                  n = e.updatedDroppables,
                  r = e.viewport,
                  i = r.scroll.diff.value;
                return t.map( ( function ( e ) {
                  var t = e.descriptor.droppableId,
                    o = n[ t ].frame;
                  o || f( !1 );
                  var a = o.scroll.diff.value,
                    c = L( i, a );
                  return xe( {
                    draggable: e,
                    offset: c,
                    initialWindowScroll: r.scroll.initial
                  } )
                } ) )
              }( {
                additions: i,
                updatedDroppables: t,
                viewport: a
              } ),
              dragging: l,
              home: d,
              viewport: a
            } ),
            p = Object( u.a )( {}, c, J( s ) );
          return o.forEach( ( function ( e ) {
            delete p[ e ]
          } ) ), p
        },
        Ie = function ( e ) {
          var t = e.scrollHeight,
            n = e.scrollWidth,
            r = e.height,
            i = e.width,
            o = P( {
              x: n,
              y: t
            }, {
              x: i,
              y: r
            } );
          return {
            x: Math.max( 0, o.x ),
            y: Math.max( 0, o.y )
          }
        },
        ye = function ( e ) {
          var t = e.descriptor,
            n = e.isEnabled,
            r = e.isCombineEnabled,
            i = e.isFixedOnPage,
            o = e.direction,
            a = e.client,
            c = e.page,
            l = e.closest,
            d = function () {
              if ( !l ) return null;
              var e = l.scrollSize,
                t = l.client,
                n = Ie( {
                  scrollHeight: e.scrollHeight,
                  scrollWidth: e.scrollWidth,
                  height: t.paddingBox.height,
                  width: t.paddingBox.width
                } );
              return {
                pageMarginBox: l.page.marginBox,
                frameClient: t,
                scrollSize: e,
                shouldClipSubject: l.shouldClipSubject,
                scroll: {
                  initial: l.scroll,
                  current: l.scroll,
                  max: n,
                  diff: {
                    value: B,
                    displacement: B
                  }
                }
              }
            }(),
            u = "vertical" === o ? ee : te;
          return {
            descriptor: t,
            isCombineEnabled: r,
            isFixedOnPage: i,
            axis: u,
            isEnabled: n,
            client: a,
            page: c,
            frame: d,
            subject: U( {
              page: c,
              withPlaceholder: null,
              axis: u,
              frame: d
            } )
          }
        },
        we = function ( e, t ) {
          return e.descriptor.droppableId === t.descriptor.id
        },
        Ee = function ( e, t ) {
          return Object( u.a )( {}, e, {
            scroll: Object( u.a )( {}, e.scroll, {
              max: t
            } )
          } )
        },
        je = function ( e, t, n ) {
          var r = e.frame;
          we( t, e ) && f( !1 ), e.subject.withPlaceholder && f( !1 );
          var i = ge( e.axis, t.displaceBy ).point,
            o = function ( e, t, n ) {
              var r = e.axis,
                i = e.subject.page.contentBox[ r.size ],
                o = Z( e.descriptor.id, n ).reduce( ( function ( e, t ) {
                  return e + t.client.marginBox[ r.size ]
                } ), 0 ) + t[ r.line ] - i;
              return o <= 0 ? null : N( r.line, o )
            }( e, i, n ),
            a = {
              placeholderSize: i,
              increasedBy: o,
              oldFrameMaxScroll: e.frame ? e.frame.scroll.max : null
            };
          if ( !r ) {
            var c = U( {
              page: e.subject.page,
              withPlaceholder: a,
              axis: e.axis,
              frame: e.frame
            } );
            return Object( u.a )( {}, e, {
              subject: c
            } )
          }
          var l = o ? L( r.scroll.max, o ) : r.scroll.max,
            d = Ee( r, l ),
            s = U( {
              page: e.subject.page,
              withPlaceholder: a,
              axis: e.axis,
              frame: d
            } );
          return Object( u.a )( {}, e, {
            subject: s,
            frame: d
          } )
        },
        Ce = function ( e ) {
          var t = e.subject.withPlaceholder;
          t || f( !1 );
          var n = e.frame;
          if ( !n ) {
            var r = U( {
              page: e.subject.page,
              axis: e.axis,
              frame: null,
              withPlaceholder: null
            } );
            return Object( u.a )( {}, e, {
              subject: r
            } )
          }
          var i = t.oldFrameMaxScroll;
          i || f( !1 );
          var o = Ee( n, i ),
            a = U( {
              page: e.subject.page,
              axis: e.axis,
              frame: o,
              withPlaceholder: null
            } );
          return Object( u.a )( {}, e, {
            subject: a,
            frame: o
          } )
        },
        Se = function ( e ) {
          var t = e.frame;
          return t || f( !1 ), t
        },
        Be = function ( e, t ) {
          var n;
          return Object( u.a )( {}, e, ( ( n = {} )[ t.descriptor.id ] = t, n ) )
        },
        Le = function ( e ) {
          var t = e.draggable,
            n = e.draggables,
            r = e.droppables,
            i = e.previousImpact,
            o = e.impact,
            a = function ( e ) {
              var t = e.previousImpact,
                n = e.impact,
                r = e.droppables,
                i = H( t ),
                o = H( n );
              if ( !i ) return r;
              if ( i === o ) return r;
              var a = r[ i ];
              if ( !a.subject.withPlaceholder ) return r;
              var c = Ce( a );
              return Be( r, c )
            }( {
              previousImpact: i,
              impact: o,
              droppables: r
            } ),
            c = H( o );
          if ( !c ) return a;
          var l = r[ c ];
          if ( we( t, l ) ) return a;
          if ( l.subject.withPlaceholder ) return a;
          var d = je( l, t, n );
          return Be( a, d )
        },
        Pe = function ( e ) {
          var t, n, r = e.state,
            i = e.published,
            o = function ( e ) {
              var t = e.modified,
                n = e.existing,
                r = e.viewport;
              if ( !t.length ) return n;
              var i = t.map( ( function ( e ) {
                var t = n[ e.descriptor.id ];
                t || f( !1 );
                var i, o, a = Boolean( t.subject.withPlaceholder ) ? Ce( t ) : t,
                  c = a.client,
                  l = e.client,
                  d = Se( a ),
                  u = Se( e ),
                  s = Object( m.b )( {
                    borderBox: ( a.axis, i = c.borderBox, o = l.borderBox, {
                      top: i.top,
                      left: i.left,
                      right: i.left + o.width,
                      bottom: i.top + o.height
                    } ),
                    margin: c.margin,
                    border: c.border,
                    padding: c.padding
                  } ),
                  p = {
                    client: d.frameClient,
                    page: Object( m.g )( d.frameClient, r.scroll.initial ),
                    shouldClipSubject: d.shouldClipSubject,
                    scrollSize: u.scrollSize,
                    scroll: d.scroll.initial
                  },
                  g = ye( {
                    descriptor: e.descriptor,
                    isEnabled: e.isEnabled,
                    isCombineEnabled: e.isCombineEnabled,
                    isFixedOnPage: e.isFixedOnPage,
                    direction: e.axis.direction,
                    client: s,
                    page: Object( m.g )( s, r.scroll.initial ),
                    closest: p
                  } );
                return k( g, u.scroll.current )
              } ) );
              return Object( u.a )( {}, n, Y( i ) )
            }( {
              modified: i.modified,
              existing: r.dimensions.droppables,
              viewport: r.viewport
            } ),
            a = De( {
              updatedDroppables: o,
              criticalId: r.critical.draggable.id,
              existing: r.dimensions.draggables,
              additions: i.additions,
              removals: i.removals,
              viewport: r.viewport
            } ),
            c = {
              draggable: a[ r.critical.draggable.id ].descriptor,
              droppable: o[ r.critical.droppable.id ].descriptor
            },
            l = r.dimensions.draggables[ c.draggable.id ],
            d = a[ c.draggable.id ],
            s = {
              draggables: a,
              droppables: Le( {
                draggable: d,
                draggables: a,
                droppables: o,
                previousImpact: r.impact,
                impact: r.impact
              } )
            },
            p = function ( e ) {
              var t, n = e.initial,
                r = e.current,
                i = e.oldClientBorderBoxCenter,
                o = e.newClientBorderBoxCenter,
                a = e.viewport,
                c = P( o, i ),
                l = {
                  client: t = {
                    selection: L( n.client.selection, c ),
                    borderBoxCenter: o,
                    offset: B
                  },
                  page: {
                    selection: L( t.selection, a.scroll.initial ),
                    borderBoxCenter: L( t.selection, a.scroll.initial )
                  }
                };
              return {
                current: function () {
                  var e = R( c ),
                    t = L( r.client.offset, e ),
                    n = {
                      selection: L( l.client.selection, t ),
                      borderBoxCenter: L( l.client.borderBoxCenter, t ),
                      offset: t
                    },
                    i = {
                      selection: L( n.selection, a.scroll.current ),
                      borderBoxCenter: L( n.borderBoxCenter, a.scroll.current )
                    };
                  return A( r.client.borderBoxCenter, n.borderBoxCenter ) || f( !1 ), {
                    client: n,
                    page: i
                  }
                }(),
                initial: l
              }
            }( {
              initial: r.initial,
              current: r.current,
              oldClientBorderBoxCenter: l.client.borderBox.center,
              newClientBorderBoxCenter: d.client.borderBox.center,
              viewport: r.viewport
            } ),
            g = p.initial,
            b = p.current,
            v = Oe( {
              draggable: d,
              home: s.droppables[ c.droppable.id ],
              draggables: s.draggables,
              viewport: r.viewport
            } ),
            h = v.impact,
            O = v.onLift,
            x = function ( e ) {
              var t = e.movement.displaced;
              if ( !t.length ) return e;
              var n = t.map( ( function ( e ) {
                return e.isVisible && e.shouldAnimate ? Object( u.a )( {}, e, {
                  shouldAnimate: !1
                } ) : e
              } ) );
              return Object( u.a )( {}, e, {
                movement: Object( u.a )( {}, e.movement, {
                  displaced: n,
                  map: fe( n )
                } )
              } )
            }( he( {
              pageBorderBoxCenter: b.page.borderBoxCenter,
              draggable: d,
              draggables: s.draggables,
              droppables: s.droppables,
              previousImpact: h,
              viewport: r.viewport,
              userDirection: r.userDirection,
              onLift: O
            } ) );
          Boolean( "SNAP" === r.movementMode && !H( x ) ) && f( !1 );
          var D = Object( u.a )( {
            phase: "DRAGGING"
          }, r, ( ( t = {} ).phase = "DRAGGING", t.critical = c, t.current = b, t.initial = g, t.impact = x, t.dimensions = s, t.onLift = O, t.onLiftImpact = h, t.forceShouldAnimate = !1, t ) );
          return "COLLECTING" === r.phase ? D : Object( u.a )( {
            phase: "DROP_PENDING"
          }, D, ( ( n = {} ).phase = "DROP_PENDING", n.reason = r.reason, n.isWaiting = !1, n ) )
        },
        Ae = {
          vertical: "down",
          horizontal: "right"
        },
        Re = {
          vertical: "up",
          horizontal: "left"
        },
        Ne = function ( e ) {
          var t = e.isMovingForward,
            n = e.isInHomeList,
            r = e.draggable,
            i = e.draggables,
            o = e.destination,
            a = e.insideDestination,
            c = e.previousImpact,
            l = e.onLift,
            d = c.destination ? function ( e ) {
              var t = e.isMovingForward,
                n = e.isInHomeList,
                r = e.draggable,
                i = e.insideDestination,
                o = e.location,
                a = i.slice(),
                c = o.index;
              !n && a.splice( o.index, 0, r );
              var l = t ? c + 1 : c - 1;
              return l < 0 || l > a.length - 1 ? null : {
                proposedIndex: l,
                modifyDisplacement: !0
              }
            }( {
              isMovingForward: t,
              isInHomeList: n,
              draggable: r,
              location: c.destination,
              insideDestination: a
            } ) : c.merge ? function ( e ) {
              var t = e.isMovingForward,
                n = e.destination,
                r = e.previousImpact,
                i = e.draggables,
                o = e.merge,
                a = e.onLift;
              if ( !n.isCombineEnabled ) return null;
              var c = r.movement,
                l = o.combine.draggableId,
                d = i[ l ].descriptor.index;
              return re( l, a ) ? c.map[ l ] ? t ? {
                proposedIndex: d,
                modifyDisplacement: !0
              } : {
                proposedIndex: d - 1,
                modifyDisplacement: !1
              } : t ? {
                proposedIndex: d,
                modifyDisplacement: !1
              } : {
                proposedIndex: d - 1,
                modifyDisplacement: !0
              } : Boolean( c.map[ l ] ) ? t ? {
                proposedIndex: d + 1,
                modifyDisplacement: !0
              } : {
                proposedIndex: d,
                modifyDisplacement: !1
              } : t ? {
                proposedIndex: d + 1,
                modifyDisplacement: !1
              } : {
                proposedIndex: d,
                modifyDisplacement: !0
              }
            }( {
              isMovingForward: t,
              destination: o,
              previousImpact: c,
              draggables: i,
              merge: c.merge,
              onLift: l
            } ) : null;
          if ( null == d ) return null;
          var u, s = d.proposedIndex,
            p = d.modifyDisplacement,
            f = ge( o.axis, r.displaceBy ),
            g = ( u = c.movement.displaced, p ? t ? function ( e ) {
              return e.slice( 1 )
            }( u ) : function ( e, t ) {
              return [ {
                draggableId: e.descriptor.id,
                isVisible: !0,
                shouldAnimate: !0
              } ].concat( t )
            }( ve( r, a )[ s ], u ) : u );
          return {
            movement: {
              displacedBy: f,
              displaced: g,
              map: fe( g )
            },
            destination: {
              droppableId: o.descriptor.id,
              index: s
            },
            merge: null
          }
        },
        Te = function ( e, t ) {
          return t.margin[ e.start ] + t.borderBox[ e.size ] / 2
        },
        Me = function ( e, t, n ) {
          return t[ e.crossAxisStart ] + n.margin[ e.crossAxisStart ] + n.borderBox[ e.crossAxisSize ] / 2
        },
        Ge = function ( e ) {
          var t = e.axis,
            n = e.moveRelativeTo,
            r = e.isMoving;
          return N( t.line, n.marginBox[ t.end ] + Te( t, r ), Me( t, n.marginBox, r ) )
        },
        _e = function ( e ) {
          var t = e.axis,
            n = e.moveRelativeTo,
            r = e.isMoving;
          return N( t.line, n.marginBox[ t.start ] - function ( e, t ) {
            return t.margin[ e.end ] + t.borderBox[ e.size ] / 2
          }( t, r ), Me( t, n.marginBox, r ) )
        },
        Fe = function ( e ) {
          var t = e.movement,
            n = e.draggable,
            r = e.draggables,
            i = e.droppable,
            o = e.onLift,
            a = Z( i.descriptor.id, r ),
            c = n.page,
            l = i.axis;
          if ( !a.length ) return function ( e ) {
            var t = e.axis,
              n = e.moveInto,
              r = e.isMoving;
            return N( t.line, n.contentBox[ t.start ] + Te( t, r ), Me( t, n.contentBox, r ) )
          }( {
            axis: l,
            moveInto: i.page,
            isMoving: c
          } );
          var d = t.displaced,
            u = t.displacedBy;
          if ( d.length ) {
            var s = r[ d[ 0 ].draggableId ];
            if ( re( s.descriptor.id, o ) ) return _e( {
              axis: l,
              moveRelativeTo: s.page,
              isMoving: c
            } );
            var p = Object( m.f )( s.page, u.point );
            return _e( {
              axis: l,
              moveRelativeTo: p,
              isMoving: c
            } )
          }
          var f = a[ a.length - 1 ];
          if ( f.descriptor.id === n.descriptor.id ) return c.borderBox.center;
          if ( re( f.descriptor.id, o ) ) {
            var g = Object( m.f )( f.page, R( o.displacedBy.point ) );
            return Ge( {
              axis: l,
              moveRelativeTo: g,
              isMoving: c
            } )
          }
          return Ge( {
            axis: l,
            moveRelativeTo: f.page,
            isMoving: c
          } )
        },
        We = function ( e, t ) {
          var n = e.frame;
          return n ? L( t, n.scroll.diff.displacement ) : t
        },
        Ue = function ( e ) {
          var t = e.impact,
            n = e.draggable,
            r = e.droppable,
            i = e.draggables,
            o = e.onLift,
            a = t.merge,
            c = t.destination,
            l = n.page.borderBox.center;
          return r ? c ? Fe( {
            movement: t.movement,
            draggable: n,
            draggables: i,
            droppable: r,
            onLift: o
          } ) : a ? function ( e ) {
            var t = e.combine,
              n = e.onLift,
              r = e.movement,
              i = e.draggables,
              o = t.draggableId,
              a = i[ o ].page.borderBox.center,
              c = ie( {
                displaced: r.map,
                onLift: n,
                combineWith: o,
                displacedBy: r.displacedBy
              } );
            return L( a, c )
          }( {
            movement: t.movement,
            combine: a.combine,
            draggables: i,
            onLift: o
          } ) : l : l
        },
        ke = function ( e ) {
          var t = Ue( e ),
            n = e.droppable;
          return n ? We( n, t ) : t
        },
        He = function ( e, t ) {
          var n = P( t, e.scroll.initial ),
            r = R( n );
          return {
            frame: Object( m.e )( {
              top: t.y,
              bottom: t.y + e.frame.height,
              left: t.x,
              right: t.x + e.frame.width
            } ),
            scroll: {
              initial: e.scroll.initial,
              max: e.scroll.max,
              current: t,
              diff: {
                value: n,
                displacement: r
              }
            }
          }
        },
        Ve = function ( e, t ) {
          return Object( u.a )( {}, e, {
            movement: Object( u.a )( {}, e.movement, {
              displaced: t,
              map: fe( t )
            } )
          } )
        },
        ze = function ( e ) {
          var t = e.pageBorderBoxCenter,
            n = e.draggable,
            r = function ( e, t ) {
              return L( e.scroll.diff.displacement, t )
            }( e.viewport, t ),
            i = P( r, n.page.borderBox.center );
          return L( n.client.borderBox.center, i )
        },
        qe = function ( e ) {
          var t = e.draggable,
            n = e.destination,
            r = e.newPageBorderBoxCenter,
            i = e.viewport,
            o = e.withDroppableDisplacement,
            a = e.onlyOnMainAxis,
            c = void 0 !== a && a,
            l = P( r, t.page.borderBox.center ),
            d = {
              target: _( t.page.borderBox, l ),
              destination: n,
              withDroppableDisplacement: o,
              viewport: i
            };
          return c ? function ( e ) {
            return de( Object( u.a )( {}, e, {
              isVisibleThroughFrameFn: ( t = e.destination.axis, function ( e ) {
                var n = Q( e.top, e.bottom ),
                  r = Q( e.left, e.right );
                return function ( e ) {
                  return t === ee ? n( e.top ) && n( e.bottom ) : r( e.left ) && r( e.right )
                }
              } )
            } ) );
            var t
          }( d ) : se( d )
        },
        Ye = function ( e ) {
          var t = e.isMovingForward,
            n = e.draggable,
            r = e.destination,
            i = e.draggables,
            o = e.previousImpact,
            a = e.viewport,
            c = e.previousPageBorderBoxCenter,
            l = e.previousClientSelection,
            d = e.onLift;
          if ( !r.isEnabled ) return null;
          var u = Z( r.descriptor.id, i ),
            s = we( n, r ),
            p = function ( e ) {
              var t = e.isMovingForward,
                n = e.isInHomeList,
                r = e.draggable,
                i = e.destination,
                o = e.insideDestination,
                a = e.previousImpact;
              if ( !i.isCombineEnabled ) return null;
              if ( a.merge ) return null;
              var c = a.destination;
              c || f( !1 );
              var l, d = c.index,
                u = ( l = o.slice(), n && l.splice( r.descriptor.index, 1 ), l.splice( c.index, 0, r ), l ),
                s = t ? d + 1 : d - 1;
              if ( s < 0 ) return null;
              if ( s > u.length - 1 ) return null;
              var p = u[ s ];
              p === r && f( !1 );
              var g = {
                whenEntered: t ? Ae : Re,
                combine: {
                  draggableId: p.descriptor.id,
                  droppableId: i.descriptor.id
                }
              };
              return {
                movement: a.movement,
                destination: null,
                merge: g
              }
            }( {
              isInHomeList: s,
              isMovingForward: t,
              draggable: n,
              destination: r,
              insideDestination: u,
              previousImpact: o
            } ) || Ne( {
              isMovingForward: t,
              isInHomeList: s,
              draggable: n,
              draggables: i,
              destination: r,
              insideDestination: u,
              previousImpact: o,
              onLift: d
            } );
          if ( !p ) return null;
          var g = ke( {
            impact: p,
            draggable: n,
            droppable: r,
            draggables: i,
            onLift: d
          } );
          if ( qe( {
              draggable: n,
              destination: r,
              newPageBorderBoxCenter: g,
              viewport: a.frame,
              withDroppableDisplacement: !1,
              onlyOnMainAxis: !0
            } ) ) return {
            clientSelection: ze( {
              pageBorderBoxCenter: g,
              draggable: n,
              viewport: a
            } ),
            impact: p,
            scrollJumpRequest: null
          };
          var b = P( g, c );
          return {
            clientSelection: l,
            impact: function ( e ) {
              var t = e.impact,
                n = e.viewport,
                r = e.destination,
                i = e.draggables,
                o = e.maxScrollChange,
                a = e.onLift,
                c = t.movement.displaced,
                l = He( n, L( n.scroll.current, o ) ),
                d = r.frame ? k( r, L( r.frame.scroll.current, o ) ) : r,
                u = c.map( ( function ( e ) {
                  if ( e.isVisible ) return e;
                  var o = i[ e.draggableId ],
                    c = pe( {
                      draggable: o,
                      destination: r,
                      previousImpact: t,
                      viewport: l.frame,
                      onLift: a,
                      forceShouldAnimate: !1
                    } );
                  if ( c.isVisible ) return c;
                  var u = pe( {
                    draggable: o,
                    destination: d,
                    previousImpact: t,
                    viewport: n.frame,
                    onLift: a,
                    forceShouldAnimate: !1
                  } );
                  return u.isVisible ? u : e
                } ) );
              return Ve( t, u )
            }( {
              impact: p,
              viewport: a,
              destination: r,
              draggables: i,
              maxScrollChange: b,
              onLift: d
            } ),
            scrollJumpRequest: b
          }
        },
        Je = function ( e ) {
          var t = e.subject.active;
          return t || f( !1 ), t
        },
        Xe = function ( e, t ) {
          var n = e.page.borderBox.center;
          return re( e.descriptor.id, t ) ? P( n, t.displacedBy.point ) : n
        },
        Ke = function ( e, t ) {
          var n = e.page.borderBox;
          return re( e.descriptor.id, t ) ? _( n, R( t.displacedBy.point ) ) : n
        },
        Qe = function ( e ) {
          var t = e.isMovingForward,
            n = e.previousPageBorderBoxCenter,
            r = e.draggable,
            i = e.isOver,
            o = e.draggables,
            a = e.droppables,
            c = e.previousImpact,
            l = e.viewport,
            d = e.onLift,
            u = function ( e ) {
              var t = e.isMovingForward,
                n = e.pageBorderBoxCenter,
                r = e.source,
                i = e.droppables,
                o = e.viewport,
                a = r.subject.active;
              if ( !a ) return null;
              var c = r.axis,
                l = Q( a[ c.start ], a[ c.end ] ),
                d = X( i ).filter( ( function ( e ) {
                  return e !== r
                } ) ).filter( ( function ( e ) {
                  return e.isEnabled
                } ) ).filter( ( function ( e ) {
                  return Boolean( e.subject.active )
                } ) ).filter( ( function ( e ) {
                  return ce( o.frame )( Je( e ) )
                } ) ).filter( ( function ( e ) {
                  var n = Je( e );
                  return t ? a[ c.crossAxisEnd ] < n[ c.crossAxisEnd ] : n[ c.crossAxisStart ] < a[ c.crossAxisStart ]
                } ) ).filter( ( function ( e ) {
                  var t = Je( e ),
                    n = Q( t[ c.start ], t[ c.end ] );
                  return l( t[ c.start ] ) || l( t[ c.end ] ) || n( a[ c.start ] ) || n( a[ c.end ] )
                } ) ).sort( ( function ( e, n ) {
                  var r = Je( e )[ c.crossAxisStart ],
                    i = Je( n )[ c.crossAxisStart ];
                  return t ? r - i : i - r
                } ) ).filter( ( function ( e, t, n ) {
                  return Je( e )[ c.crossAxisStart ] === Je( n[ 0 ] )[ c.crossAxisStart ]
                } ) );
              if ( !d.length ) return null;
              if ( 1 === d.length ) return d[ 0 ];
              var u = d.filter( ( function ( e ) {
                return Q( Je( e )[ c.start ], Je( e )[ c.end ] )( n[ c.line ] )
              } ) );
              return 1 === u.length ? u[ 0 ] : u.length > 1 ? u.sort( ( function ( e, t ) {
                return Je( e )[ c.start ] - Je( t )[ c.start ]
              } ) )[ 0 ] : d.sort( ( function ( e, t ) {
                var r = M( n, F( Je( e ) ) ),
                  i = M( n, F( Je( t ) ) );
                return r !== i ? r - i : Je( e )[ c.start ] - Je( t )[ c.start ]
              } ) )[ 0 ]
            }( {
              isMovingForward: t,
              pageBorderBoxCenter: n,
              source: i,
              droppables: a,
              viewport: l
            } );
          if ( !u ) return null;
          var s = Z( u.descriptor.id, o ),
            p = function ( e ) {
              var t = e.previousPageBorderBoxCenter,
                n = e.moveRelativeTo,
                r = e.insideDestination,
                i = e.draggable,
                o = e.draggables,
                a = e.destination,
                c = e.previousImpact,
                l = e.viewport,
                d = e.onLift;
              if ( !n ) {
                if ( r.length ) return null;
                var u = {
                    movement: be,
                    destination: {
                      droppableId: a.descriptor.id,
                      index: 0
                    },
                    merge: null
                  },
                  s = ke( {
                    impact: u,
                    draggable: i,
                    droppable: a,
                    draggables: o,
                    onLift: d
                  } ),
                  p = we( i, a ) ? a : je( a, i, o );
                return qe( {
                  draggable: i,
                  destination: p,
                  newPageBorderBoxCenter: s,
                  viewport: l.frame,
                  withDroppableDisplacement: !1,
                  onlyOnMainAxis: !0
                } ) ? u : null
              }
              var g = Boolean( t[ a.axis.line ] < n.page.borderBox.center[ a.axis.line ] ),
                b = r.indexOf( n ); - 1 === b && f( !1 );
              var m = n.descriptor.id === i.descriptor.id || g ? b : b + 1,
                v = ve( i, r ).slice( m ).map( ( function ( e ) {
                  return pe( {
                    draggable: e,
                    destination: a,
                    viewport: l.frame,
                    previousImpact: c,
                    onLift: d
                  } )
                } ) );
              return {
                movement: {
                  displacedBy: ge( a.axis, i.displaceBy ),
                  displaced: v,
                  map: fe( v )
                },
                destination: {
                  droppableId: a.descriptor.id,
                  index: m
                },
                merge: null
              }
            }( {
              previousPageBorderBoxCenter: n,
              destination: u,
              draggable: r,
              draggables: o,
              moveRelativeTo: function ( e ) {
                var t = e.pageBorderBoxCenter,
                  n = e.viewport,
                  r = e.destination,
                  i = e.insideDestination,
                  o = e.onLift;
                return i.filter( ( function ( e ) {
                  return se( {
                    target: Ke( e, o ),
                    destination: r,
                    viewport: n.frame,
                    withDroppableDisplacement: !0
                  } )
                } ) ).sort( ( function ( e, n ) {
                  var i = T( t, We( r, Xe( e, o ) ) ),
                    a = T( t, We( r, Xe( n, o ) ) );
                  return i < a ? -1 : a < i ? 1 : e.descriptor.index - n.descriptor.index
                } ) )[ 0 ] || null
              }( {
                pageBorderBoxCenter: n,
                viewport: l,
                destination: u,
                insideDestination: s,
                onLift: d
              } ),
              insideDestination: s,
              previousImpact: c,
              viewport: l,
              onLift: d
            } );
          if ( !p ) return null;
          var g = ke( {
            impact: p,
            draggable: r,
            droppable: u,
            draggables: o,
            onLift: d
          } );
          return {
            clientSelection: ze( {
              pageBorderBoxCenter: g,
              draggable: r,
              viewport: l
            } ),
            impact: p,
            scrollJumpRequest: null
          }
        },
        $e = function ( e ) {
          var t = e.state,
            n = e.type,
            r = function ( e, t ) {
              var n = H( e );
              return n ? t[ n ] : null
            }( t.impact, t.dimensions.droppables ),
            i = Boolean( r ),
            o = t.dimensions.droppables[ t.critical.droppable.id ],
            a = r || o,
            c = a.axis.direction,
            l = "vertical" === c && ( "MOVE_UP" === n || "MOVE_DOWN" === n ) || "horizontal" === c && ( "MOVE_LEFT" === n || "MOVE_RIGHT" === n );
          if ( l && !i ) return null;
          var d = "MOVE_DOWN" === n || "MOVE_RIGHT" === n,
            u = t.dimensions.draggables[ t.critical.draggable.id ],
            s = t.current.page.borderBoxCenter,
            p = t.dimensions,
            f = p.draggables,
            g = p.droppables;
          return l ? Ye( {
            isMovingForward: d,
            previousPageBorderBoxCenter: s,
            draggable: u,
            destination: a,
            draggables: f,
            viewport: t.viewport,
            previousClientSelection: t.current.client.selection,
            previousImpact: t.impact,
            onLift: t.onLift
          } ) : Qe( {
            isMovingForward: d,
            previousPageBorderBoxCenter: s,
            draggable: u,
            isOver: a,
            draggables: f,
            droppables: g,
            previousImpact: t.impact,
            viewport: t.viewport,
            onLift: t.onLift
          } )
        };

      function Ze( e ) {
        return "DRAGGING" === e.phase || "COLLECTING" === e.phase
      }
      var et, tt = function ( e, t ) {
          return 0 === t ? e : t > 0 ? "down" : "up"
        },
        nt = function ( e, t ) {
          return 0 === t ? e : t > 0 ? "right" : "left"
        },
        rt = function ( e ) {
          var t, n, r, i, o = e.state,
            a = e.clientSelection,
            c = e.dimensions,
            l = e.viewport,
            d = e.impact,
            s = e.scrollJumpRequest,
            p = l || o.viewport,
            f = p.scroll.current,
            g = c || o.dimensions,
            b = a || o.current.client.selection,
            m = P( b, o.initial.client.selection ),
            v = {
              offset: m,
              selection: b,
              borderBoxCenter: L( o.initial.client.borderBoxCenter, m )
            },
            h = {
              selection: L( v.selection, f ),
              borderBoxCenter: L( v.borderBoxCenter, f )
            },
            O = {
              client: v,
              page: h
            },
            x = ( t = o.userDirection, n = o.current.page.borderBoxCenter, r = O.page.borderBoxCenter, i = P( r, n ), {
              horizontal: nt( t.horizontal, i.x ),
              vertical: tt( t.vertical, i.y )
            } );
          if ( "COLLECTING" === o.phase ) return Object( u.a )( {
            phase: "COLLECTING"
          }, o, {
            dimensions: g,
            viewport: p,
            current: O,
            userDirection: x
          } );
          var D = g.draggables[ o.critical.draggable.id ],
            I = d || he( {
              pageBorderBoxCenter: h.borderBoxCenter,
              draggable: D,
              draggables: g.draggables,
              droppables: g.droppables,
              previousImpact: o.impact,
              viewport: p,
              userDirection: x,
              onLift: o.onLift
            } ),
            y = Le( {
              draggable: D,
              impact: I,
              previousImpact: o.impact,
              draggables: g.draggables,
              droppables: g.droppables
            } );
          return Object( u.a )( {}, o, {
            current: O,
            userDirection: x,
            dimensions: {
              draggables: g.draggables,
              droppables: y
            },
            impact: I,
            viewport: p,
            scrollJumpRequest: s || null,
            forceShouldAnimate: !s && null
          } )
        },
        it = function ( e ) {
          var t = e.impact,
            n = e.viewport,
            r = e.destination,
            i = e.draggables,
            o = e.onLift,
            a = e.forceShouldAnimate,
            c = t.movement.displaced.map( ( function ( e ) {
              return pe( {
                draggable: i[ e.draggableId ],
                destination: r,
                previousImpact: t,
                viewport: n.frame,
                onLift: o,
                forceShouldAnimate: a
              } )
            } ) );
          return Ve( t, c )
        },
        ot = function ( e ) {
          var t = e.impact,
            n = e.draggable,
            r = e.droppable,
            i = e.draggables,
            o = e.viewport,
            a = e.onLift,
            c = ke( {
              impact: t,
              draggable: n,
              draggables: i,
              droppable: r,
              onLift: a
            } );
          return ze( {
            pageBorderBoxCenter: c,
            draggable: n,
            viewport: o
          } )
        },
        at = function ( e ) {
          var t = e.state,
            n = e.dimensions,
            r = e.viewport;
          "SNAP" !== t.movementMode && f( !1 );
          var i = t.impact,
            o = r || t.viewport,
            a = n || t.dimensions,
            c = a.draggables,
            l = a.droppables,
            d = c[ t.critical.draggable.id ],
            u = H( i );
          u || f( !1 );
          var s = l[ u ],
            p = it( {
              impact: i,
              viewport: o,
              destination: s,
              draggables: c,
              onLift: t.onLift
            } ),
            g = ot( {
              impact: p,
              draggable: d,
              droppable: s,
              draggables: c,
              viewport: o,
              onLift: t.onLift
            } );
          return rt( {
            impact: p,
            clientSelection: g,
            state: t,
            dimensions: a,
            viewport: o
          } )
        },
        ct = function ( e ) {
          return "SNAP" === e.movementMode
        },
        lt = function ( e, t, n ) {
          var r = function ( e, t ) {
            return {
              draggables: e.draggables,
              droppables: Be( e.droppables, t )
            }
          }( e.dimensions, t );
          return !ct( e ) || n ? rt( {
            state: e,
            dimensions: r
          } ) : at( {
            state: e,
            dimensions: r
          } )
        },
        dt = {
          phase: "IDLE",
          completed: null,
          shouldFlush: !1
        },
        ut = function ( e, t ) {
          if ( void 0 === e && ( e = dt ), "CLEAN" === t.type ) return Object( u.a )( {}, dt, {
            shouldFlush: t.payload.shouldFlush
          } );
          if ( "INITIAL_PUBLISH" === t.type ) {
            "IDLE" !== e.phase && f( !1 );
            var n = t.payload,
              r = n.critical,
              i = n.clientSelection,
              o = n.viewport,
              a = n.dimensions,
              c = n.movementMode,
              l = a.draggables[ r.draggable.id ],
              d = a.droppables[ r.droppable.id ],
              s = {
                selection: i,
                borderBoxCenter: l.client.borderBox.center,
                offset: B
              },
              p = {
                client: s,
                page: {
                  selection: L( s.selection, o.scroll.initial ),
                  borderBoxCenter: L( s.selection, o.scroll.initial )
                }
              },
              g = X( a.droppables ).every( ( function ( e ) {
                return !e.isFixedOnPage
              } ) ),
              b = Oe( {
                draggable: l,
                home: d,
                draggables: a.draggables,
                viewport: o
              } ),
              m = b.impact;
            return {
              phase: "DRAGGING",
              isDragging: !0,
              critical: r,
              movementMode: c,
              dimensions: a,
              initial: p,
              current: p,
              isWindowScrollAllowed: g,
              impact: m,
              onLift: b.onLift,
              onLiftImpact: m,
              viewport: o,
              userDirection: Ae,
              scrollJumpRequest: null,
              forceShouldAnimate: null
            }
          }
          var v;
          if ( "COLLECTION_STARTING" === t.type ) return "COLLECTING" === e.phase || "DROP_PENDING" === e.phase ? e : ( "DRAGGING" !== e.phase && f( !1 ), Object( u.a )( {
            phase: "COLLECTING"
          }, e, ( ( v = {} ).phase = "COLLECTING", v ) ) );
          if ( "PUBLISH_WHILE_DRAGGING" === t.type ) return "COLLECTING" !== e.phase && "DROP_PENDING" !== e.phase && f( !1 ), Pe( {
            state: e,
            published: t.payload
          } );
          if ( "MOVE" === t.type ) {
            if ( "DROP_PENDING" === e.phase ) return e;
            Ze( e ) || f( !1 );
            var h = t.payload.client;
            return A( h, e.current.client.selection ) ? e : rt( {
              state: e,
              clientSelection: h,
              impact: ct( e ) ? e.impact : null
            } )
          }
          if ( "UPDATE_DROPPABLE_SCROLL" === t.type ) {
            if ( "DROP_PENDING" === e.phase ) return e;
            if ( "COLLECTING" === e.phase ) return e;
            Ze( e ) || f( !1 );
            var O = t.payload,
              x = O.id,
              D = O.offset,
              I = e.dimensions.droppables[ x ];
            if ( !I ) return e;
            var y = k( I, D );
            return lt( e, y, !1 )
          }
          if ( "UPDATE_DROPPABLE_IS_ENABLED" === t.type ) {
            if ( "DROP_PENDING" === e.phase ) return e;
            Ze( e ) || f( !1 );
            var w = t.payload,
              E = w.id,
              j = w.isEnabled,
              C = e.dimensions.droppables[ E ];
            C || f( !1 ), C.isEnabled === j && f( !1 );
            var S = Object( u.a )( {}, C, {
              isEnabled: j
            } );
            return lt( e, S, !0 )
          }
          if ( "UPDATE_DROPPABLE_IS_COMBINE_ENABLED" === t.type ) {
            if ( "DROP_PENDING" === e.phase ) return e;
            Ze( e ) || f( !1 );
            var P = t.payload,
              R = P.id,
              N = P.isCombineEnabled,
              T = e.dimensions.droppables[ R ];
            T || f( !1 ), T.isCombineEnabled === N && f( !1 );
            var M = Object( u.a )( {}, T, {
              isCombineEnabled: N
            } );
            return lt( e, M, !0 )
          }
          if ( "MOVE_BY_WINDOW_SCROLL" === t.type ) {
            if ( "DROP_PENDING" === e.phase || "DROP_ANIMATING" === e.phase ) return e;
            Ze( e ) || f( !1 ), e.isWindowScrollAllowed || f( !1 );
            var G = t.payload.newScroll;
            if ( A( e.viewport.scroll.current, G ) ) return e;
            var _ = He( e.viewport, G );
            return ct( e ) ? at( {
              state: e,
              viewport: _
            } ) : rt( {
              state: e,
              viewport: _
            } )
          }
          if ( "UPDATE_VIEWPORT_MAX_SCROLL" === t.type ) {
            if ( !Ze( e ) ) return e;
            var F = t.payload.maxScroll;
            if ( A( F, e.viewport.scroll.max ) ) return e;
            var W = Object( u.a )( {}, e.viewport, {
              scroll: Object( u.a )( {}, e.viewport.scroll, {
                max: F
              } )
            } );
            return Object( u.a )( {
              phase: "DRAGGING"
            }, e, {
              viewport: W
            } )
          }
          if ( "MOVE_UP" === t.type || "MOVE_DOWN" === t.type || "MOVE_LEFT" === t.type || "MOVE_RIGHT" === t.type ) {
            if ( "COLLECTING" === e.phase || "DROP_PENDING" === e.phase ) return e;
            "DRAGGING" !== e.phase && f( !1 );
            var U = $e( {
              state: e,
              type: t.type
            } );
            return U ? rt( {
              state: e,
              impact: U.impact,
              clientSelection: U.clientSelection,
              scrollJumpRequest: U.scrollJumpRequest
            } ) : e
          }
          if ( "DROP_PENDING" === t.type ) {
            var H, V = t.payload.reason;
            return "COLLECTING" !== e.phase && f( !1 ), Object( u.a )( {
              phase: "DROP_PENDING"
            }, e, ( ( H = {} ).phase = "DROP_PENDING", H.isWaiting = !0, H.reason = V, H ) )
          }
          if ( "DROP_ANIMATE" === t.type ) {
            var z = t.payload,
              q = z.completed,
              Y = z.dropDuration,
              J = z.newHomeClientOffset;
            return "DRAGGING" !== e.phase && "DROP_PENDING" !== e.phase && f( !1 ), {
              phase: "DROP_ANIMATING",
              dimensions: e.dimensions,
              completed: q,
              dropDuration: Y,
              newHomeClientOffset: J
            }
          }
          if ( "DROP_COMPLETE" === t.type ) {
            var K = t.payload;
            return {
              phase: "IDLE",
              completed: K.completed,
              shouldFlush: K.shouldFlush
            }
          }
          return e
        },
        st = function ( e ) {
          return {
            type: "PUBLISH_WHILE_DRAGGING",
            payload: e
          }
        },
        pt = function () {
          return {
            type: "COLLECTION_STARTING",
            payload: null
          }
        },
        ft = function ( e ) {
          return {
            type: "UPDATE_DROPPABLE_SCROLL",
            payload: e
          }
        },
        gt = function ( e ) {
          return {
            type: "UPDATE_DROPPABLE_IS_ENABLED",
            payload: e
          }
        },
        bt = function ( e ) {
          return {
            type: "UPDATE_DROPPABLE_IS_COMBINE_ENABLED",
            payload: e
          }
        },
        mt = function ( e ) {
          return {
            type: "MOVE",
            payload: e
          }
        },
        vt = function ( e ) {
          return {
            type: "DROP_COMPLETE",
            payload: e
          }
        },
        ht = function ( e ) {
          return {
            type: "DROP",
            payload: e
          }
        },
        Ot = "cubic-bezier(.2,1,.1,1)",
        xt = {
          drop: 0,
          combining: .7
        },
        Dt = {
          drop: .75
        },
        It = .2 + "s " + "cubic-bezier(0.2, 0, 0, 1)",
        yt = {
          fluid: "opacity " + It,
          snap: "transform " + It + ", opacity " + It,
          drop: function ( e ) {
            var t = e + "s " + Ot;
            return "transform " + t + ", opacity " + t
          },
          outOfTheWay: "transform " + It,
          placeholder: "height " + It + ", width " + It + ", margin " + It
        },
        wt = function ( e ) {
          return A( e, B ) ? null : "translate(" + e.x + "px, " + e.y + "px)"
        },
        Et = wt,
        jt = function ( e, t ) {
          var n = wt( e );
          return n ? t ? n + " scale(" + Dt.drop + ")" : n : null
        },
        Ct = .33,
        St = .55,
        Bt = St - Ct,
        Lt = function ( e ) {
          var t = e.getState,
            n = e.dispatch;
          return function ( e ) {
            return function ( r ) {
              if ( "DROP" === r.type ) {
                var i = t(),
                  o = r.payload.reason;
                if ( "COLLECTING" !== i.phase ) {
                  if ( "IDLE" !== i.phase ) {
                    "DROP_PENDING" === i.phase && i.isWaiting && f( !1 ), "DRAGGING" !== i.phase && "DROP_PENDING" !== i.phase && f( !1 );
                    var a = i.critical,
                      c = i.dimensions,
                      l = function ( e ) {
                        var t = e.reason,
                          n = e.lastImpact,
                          r = e.home,
                          i = e.viewport,
                          o = e.draggables,
                          a = e.onLiftImpact,
                          c = e.onLift,
                          l = "DROP" === t && Boolean( H( n ) );
                        return l ? n.destination ? {
                          impact: n,
                          didDropInsideDroppable: l
                        } : {
                          impact: Object( u.a )( {}, n, {
                            movement: be
                          } ),
                          didDropInsideDroppable: l
                        } : {
                          impact: it( {
                            impact: a,
                            destination: r,
                            viewport: i,
                            draggables: o,
                            onLift: c,
                            forceShouldAnimate: !0
                          } ),
                          didDropInsideDroppable: l
                        }
                      }( {
                        reason: o,
                        lastImpact: i.impact,
                        onLift: i.onLift,
                        onLiftImpact: i.onLiftImpact,
                        home: i.dimensions.droppables[ i.critical.droppable.id ],
                        viewport: i.viewport,
                        draggables: i.dimensions.draggables
                      } ),
                      d = l.impact,
                      s = l.didDropInsideDroppable,
                      p = c.draggables[ i.critical.draggable.id ],
                      g = s ? d.destination : null,
                      b = s && d.merge ? d.merge.combine : null,
                      m = {
                        index: a.draggable.index,
                        droppableId: a.droppable.id
                      },
                      v = {
                        draggableId: p.descriptor.id,
                        type: p.descriptor.type,
                        source: m,
                        reason: o,
                        mode: i.movementMode,
                        destination: g,
                        combine: b
                      },
                      h = function ( e ) {
                        var t = e.impact,
                          n = e.draggable,
                          r = e.dimensions,
                          i = e.viewport,
                          o = e.onLift,
                          a = r.draggables,
                          c = r.droppables,
                          l = H( t ),
                          d = l ? c[ l ] : null,
                          u = c[ n.descriptor.droppableId ],
                          s = ot( {
                            impact: t,
                            draggable: n,
                            draggables: a,
                            onLift: o,
                            droppable: d || u,
                            viewport: i
                          } ),
                          p = P( s, n.client.borderBox.center ),
                          f = t.merge;
                        return f && re( f.combine.draggableId, o ) ? P( p, o.displacedBy.point ) : p
                      }( {
                        impact: d,
                        draggable: p,
                        dimensions: c,
                        viewport: i.viewport,
                        onLift: i.onLift
                      } ),
                      O = {
                        critical: i.critical,
                        result: v,
                        impact: d
                      };
                    if ( !A( i.current.client.offset, h ) || Boolean( v.combine ) ) {
                      var x = function ( e ) {
                        var t = e.current,
                          n = e.destination,
                          r = e.reason,
                          i = T( t, n );
                        if ( i <= 0 ) return Ct;
                        if ( i >= 1500 ) return St;
                        var o = Ct + Bt * ( i / 1500 );
                        return Number( ( "CANCEL" === r ? .6 * o : o ).toFixed( 2 ) )
                      }( {
                        current: i.current.client.offset,
                        destination: h,
                        reason: o
                      } );
                      n( function ( e ) {
                        return {
                          type: "DROP_ANIMATE",
                          payload: e
                        }
                      }( {
                        newHomeClientOffset: h,
                        dropDuration: x,
                        completed: O
                      } ) )
                    } else n( vt( {
                      completed: O,
                      shouldFlush: !1
                    } ) )
                  }
                } else n( function ( e ) {
                  return {
                    type: "DROP_PENDING",
                    payload: e
                  }
                }( {
                  reason: o
                } ) )
              } else e( r )
            }
          }
        },
        Pt = function ( e ) {
          return e + 1
        },
        At = function ( e, t ) {
          var n = e.droppableId === t.droppableId,
            r = Pt( e.index ),
            i = Pt( t.index );
          return n ? "\n      You have moved the item from position " + r + "\n      to position " + i + "\n    " : "\n    You have moved the item from position " + r + "\n    in list " + e.droppableId + "\n    to list " + t.droppableId + "\n    in position " + i + "\n  "
        },
        Rt = function ( e, t, n ) {
          return t.droppableId === n.droppableId ? "\n      The item " + e + "\n      has been combined with " + n.draggableId : "\n      The item " + e + "\n      in list " + t.droppableId + "\n      has been combined with " + n.draggableId + "\n      in list " + n.droppableId + "\n    "
        },
        Nt = function ( e ) {
          return "\n  The item has returned to its starting position\n  of " + Pt( e.index ) + "\n"
        },
        Tt = function ( e ) {
          return "\n  You have lifted an item in position " + Pt( e.source.index ) + ".\n  Use the arrow keys to move, space bar to drop, and escape to cancel.\n"
        },
        Mt = function ( e ) {
          var t = e.destination;
          if ( t ) return At( e.source, t );
          var n = e.combine;
          return n ? Rt( e.draggableId, e.source, n ) : "You are over an area that cannot be dropped on"
        },
        Gt = function ( e ) {
          if ( "CANCEL" === e.reason ) return "\n      Movement cancelled.\n      " + Nt( e.source ) + "\n    ";
          var t = e.destination,
            n = e.combine;
          return t ? "\n      You have dropped the item.\n      " + At( e.source, t ) + "\n    " : n ? "\n      You have dropped the item.\n      " + Rt( e.draggableId, e.source, n ) + "\n    " : "\n    The item has been dropped while not over a drop area.\n    " + Nt( e.source ) + "\n  "
        },
        _t = function () {
          var e = [];
          return {
            add: function ( t ) {
              var n = setTimeout( ( function () {
                  return function ( t ) {
                    var n = z( e, ( function ( e ) {
                      return e.timerId === t
                    } ) ); - 1 === n && f( !1 ), e.splice( n, 1 )[ 0 ].callback()
                  }( n )
                } ) ),
                r = {
                  timerId: n,
                  callback: t
                };
              e.push( r )
            },
            flush: function () {
              if ( e.length ) {
                var t = [].concat( e );
                e.length = 0, t.forEach( ( function ( e ) {
                  clearTimeout( e.timerId ), e.callback()
                } ) )
              }
            }
          }
        },
        Ft = function ( e, t ) {
          t()
        },
        Wt = function ( e, t ) {
          return {
            draggableId: e.draggable.id,
            type: e.droppable.type,
            source: {
              droppableId: e.droppable.id,
              index: e.draggable.index
            },
            mode: t
          }
        },
        Ut = function ( e, t, n, r ) {
          if ( e ) {
            var i = function ( e ) {
              var t = !1,
                n = !1,
                r = setTimeout( ( function () {
                  n = !0
                } ) ),
                i = function ( i ) {
                  t || n || ( t = !0, e( i ), clearTimeout( r ) )
                };
              return i.wasCalled = function () {
                return t
              }, i
            }( n );
            e( t, {
              announce: i
            } ), i.wasCalled() || n( r( t ) )
          } else n( r( t ) )
        },
        kt = function ( e, t ) {
          var n = function ( e, t ) {
            var n = _t(),
              r = null,
              i = function ( n ) {
                r || f( !1 ), r = null, Ft( 0, ( function () {
                  return Ut( e().onDragEnd, n, t, Gt )
                } ) )
              };
            return {
              beforeStart: function ( t, n ) {
                r && f( !1 ), Ft( 0, ( function () {
                  var r = e().onBeforeDragStart;
                  r && r( Wt( t, n ) )
                } ) )
              },
              start: function ( i, o ) {
                r && f( !1 );
                var a = Wt( i, o );
                r = {
                  mode: o,
                  lastCritical: i,
                  lastLocation: a.source,
                  lastCombine: null
                }, n.add( ( function () {
                  Ft( 0, ( function () {
                    return Ut( e().onDragStart, a, t, Tt )
                  } ) )
                } ) )
              },
              update: function ( i, o ) {
                var a = o.destination,
                  c = o.merge ? o.merge.combine : null;
                r || f( !1 );
                var l = ! function ( e, t ) {
                  if ( e === t ) return !0;
                  var n = e.draggable.id === t.draggable.id && e.draggable.droppableId === t.draggable.droppableId && e.draggable.type === t.draggable.type && e.draggable.index === t.draggable.index,
                    r = e.droppable.id === t.droppable.id && e.droppable.type === t.droppable.type;
                  return n && r
                }( i, r.lastCritical );
                l && ( r.lastCritical = i );
                var d, s, p = ( d = r.lastLocation, s = a, !( null == d && null == s || null != d && null != s && d.droppableId === s.droppableId && d.index === s.index ) );
                p && ( r.lastLocation = a );
                var g = ! function ( e, t ) {
                  return null == e && null == t || null != e && null != t && ( e.draggableId === t.draggableId && e.droppableId === t.droppableId )
                }( r.lastCombine, c );
                if ( g && ( r.lastCombine = c ), l || p || g ) {
                  var b = Object( u.a )( {}, Wt( i, r.mode ), {
                    combine: c,
                    destination: a
                  } );
                  n.add( ( function () {
                    Ft( 0, ( function () {
                      return Ut( e().onDragUpdate, b, t, Mt )
                    } ) )
                  } ) )
                }
              },
              flush: function () {
                r || f( !1 ), n.flush()
              },
              drop: i,
              abort: function () {
                if ( r ) {
                  var e = Object( u.a )( {}, Wt( r.lastCritical, r.mode ), {
                    combine: null,
                    destination: null,
                    reason: "CANCEL"
                  } );
                  i( e )
                }
              }
            }
          }( e, t );
          return function ( e ) {
            return function ( t ) {
              return function ( r ) {
                if ( "INITIAL_PUBLISH" === r.type ) {
                  var i = r.payload.critical;
                  return n.beforeStart( i, r.payload.movementMode ), t( r ), void n.start( i, r.payload.movementMode )
                }
                if ( "DROP_COMPLETE" === r.type ) {
                  var o = r.payload.completed.result;
                  return n.flush(), t( r ), void n.drop( o )
                }
                if ( t( r ), "CLEAN" !== r.type ) {
                  var a = e.getState();
                  "DRAGGING" === a.phase && n.update( a.critical, a.impact )
                } else n.abort()
              }
            }
          }
        },
        Ht = function ( e ) {
          return function ( t ) {
            return function ( n ) {
              if ( "DROP_ANIMATION_FINISHED" === n.type ) {
                var r = e.getState();
                "DROP_ANIMATING" !== r.phase && f( !1 ), e.dispatch( vt( {
                  completed: r.completed,
                  shouldFlush: !1
                } ) )
              } else t( n )
            }
          }
        },
        Vt = function ( e ) {
          return function ( t ) {
            return function ( n ) {
              if ( t( n ), "PUBLISH_WHILE_DRAGGING" === n.type ) {
                var r = e.getState();
                "DROP_PENDING" === r.phase && ( r.isWaiting || e.dispatch( ht( {
                  reason: r.reason
                } ) ) )
              }
            }
          }
        },
        zt = g.c,
        qt = function ( e ) {
          var t, n = e.dimensionMarshal,
            r = e.styleMarshal,
            i = e.getResponders,
            o = e.announce,
            a = e.autoScroller;
          return Object( g.d )( ut, zt( Object( g.a )( ( t = r, function () {
            return function ( e ) {
              return function ( n ) {
                "INITIAL_PUBLISH" === n.type && t.dragging(), "DROP_ANIMATE" === n.type && t.dropping( n.payload.completed.result.reason ), "CLEAN" !== n.type && "DROP_COMPLETE" !== n.type || t.resting(), e( n )
              }
            }
          } ), function ( e ) {
            return function () {
              return function ( t ) {
                return function ( n ) {
                  "DROP_COMPLETE" !== n.type && "CLEAN" !== n.type && "DROP_ANIMATE" !== n.type || e.stopPublishing(), t( n )
                }
              }
            }
          }( n ), function ( e ) {
            return function ( t ) {
              var n = t.getState,
                r = t.dispatch;
              return function ( t ) {
                return function ( i ) {
                  if ( "LIFT" === i.type ) {
                    var o = i.payload,
                      a = o.id,
                      c = o.clientSelection,
                      l = o.movementMode,
                      d = n();
                    "DROP_ANIMATING" === d.phase && r( vt( {
                      completed: d.completed,
                      shouldFlush: !0
                    } ) ), "IDLE" !== n().phase && f( !1 );
                    var u = {
                        draggableId: a,
                        scrollOptions: {
                          shouldPublishImmediately: "SNAP" === l
                        }
                      },
                      s = e.startPublishing( u ),
                      p = s.critical,
                      g = s.dimensions,
                      b = s.viewport;
                    r( {
                      type: "INITIAL_PUBLISH",
                      payload: {
                        critical: p,
                        dimensions: g,
                        clientSelection: c,
                        movementMode: l,
                        viewport: b
                      }
                    } )
                  } else t( i )
                }
              }
            }
          }( n ), Lt, Ht, Vt, function ( e ) {
            return function ( t ) {
              return function ( n ) {
                return function ( r ) {
                  if ( function ( e ) {
                      return "DROP_COMPLETE" === e.type || "DROP_ANIMATE" === e.type || "CLEAN" === e.type
                    }( r ) ) return e.stop(), void n( r );
                  if ( function ( e ) {
                      return "COLLECTION_STARTING" === e.type
                    }( r ) ) return e.cancelPending(), void n( r );
                  if ( "INITIAL_PUBLISH" === r.type ) {
                    n( r );
                    var i = t.getState();
                    return "DRAGGING" !== i.phase && f( !1 ), void e.start( i )
                  }
                  n( r ), e.scroll( t.getState() )
                }
              }
            }
          }( a ), kt( i, o ) ) ) )
        },
        Yt = function () {
          return {
            x: window.pageXOffset,
            y: window.pageYOffset
          }
        },
        Jt = function () {
          var e = document.documentElement;
          return e || f( !1 ), e
        },
        Xt = function () {
          var e = Jt();
          return Ie( {
            scrollHeight: e.scrollHeight,
            scrollWidth: e.scrollWidth,
            width: e.clientWidth,
            height: e.clientHeight
          } )
        },
        Kt = function ( e ) {
          var t, n, r, i, o, a, c, l = e.critical,
            d = e.scrollOptions,
            u = e.entries,
            s = ( t = Yt(), n = Xt(), r = t.y, i = t.x, o = Jt(), a = i + o.clientWidth, c = r + o.clientHeight, {
              frame: Object( m.e )( {
                top: r,
                left: i,
                right: a,
                bottom: c
              } ),
              scroll: {
                initial: t,
                current: t,
                max: n,
                diff: {
                  value: B,
                  displacement: B
                }
              }
            } ),
            p = s.scroll.current,
            f = l.droppable,
            g = V( u.droppables ).filter( ( function ( e ) {
              return e.descriptor.type === f.type
            } ) ).map( ( function ( e ) {
              return e.callbacks.getDimensionAndWatchScroll( p, d )
            } ) ),
            b = V( u.draggables ).filter( ( function ( e ) {
              return e.descriptor.type === l.draggable.type
            } ) ).map( ( function ( e ) {
              return e.getDimension( p )
            } ) );
          return {
            dimensions: {
              draggables: J( b ),
              droppables: Y( g )
            },
            critical: l,
            viewport: s
          }
        },
        Qt = function ( e, t ) {
          e.critical.draggable.type !== t.type && f( !1 )
        },
        $t = function ( e ) {
          var t = {
              droppables: {},
              draggables: {}
            },
            n = null,
            r = function ( e ) {
              var t = e.getEntries,
                n = e.callbacks,
                r = function () {},
                i = {
                  additions: {},
                  removals: {},
                  modified: {}
                },
                o = null,
                a = function () {
                  r(), o || ( o = requestAnimationFrame( ( function () {
                    o = null, n.collectionStarting();
                    var e = n.getCritical(),
                      r = t(),
                      a = i,
                      c = a.additions,
                      l = a.removals,
                      d = a.modified,
                      u = D()( c ).map( ( function ( e ) {
                        return r.draggables[ e ].getDimension( B )
                      } ) ).sort( ( function ( e, t ) {
                        return e.descriptor.index - t.descriptor.index
                      } ) ),
                      s = D()( d ).map( ( function ( t ) {
                        var n = r.droppables[ t ];
                        n || f( !1 );
                        var i = {
                          withoutPlaceholder: !( n.descriptor.id === e.droppable.id )
                        };
                        return n.callbacks.recollect( i )
                      } ) ),
                      p = {
                        additions: u,
                        removals: D()( l ),
                        modified: s
                      };
                    i = {
                      additions: {},
                      removals: {},
                      modified: {}
                    }, n.publish( p )
                  } ) ) )
                };
              return {
                add: function ( e ) {
                  i.additions[ e.id ] = e, i.modified[ e.droppableId ] = !0, i.removals[ e.id ] && delete i.removals[ e.id ], a()
                },
                remove: function ( e ) {
                  i.removals[ e.id ] = e, i.modified[ e.droppableId ] = !0, i.additions[ e.id ] && delete i.additions[ e.id ], a()
                },
                stop: function () {
                  o && ( cancelAnimationFrame( o ), o = null, i = {
                    additions: {},
                    removals: {},
                    modified: {}
                  } )
                }
              }
            }( {
              callbacks: {
                publish: e.publishWhileDragging,
                collectionStarting: e.collectionStarting,
                getCritical: function () {
                  return n || f( !1 ), n.critical
                }
              },
              getEntries: function () {
                return t
              }
            } );
          return {
            registerDraggable: function ( e, i ) {
              var o = {
                descriptor: e,
                getDimension: i
              };
              t.draggables[ e.id ] = o, n && ( Qt( n, e ), r.add( e ) )
            },
            updateDraggable: function ( e, n, r ) {
              var i = t.draggables[ e.id ];
              i || f( !1 ), i.descriptor === e && delete t.draggables[ e.id ];
              var o = {
                descriptor: n,
                getDimension: r
              };
              t.draggables[ n.id ] = o
            },
            unregisterDraggable: function ( e ) {
              var i = t.draggables[ e.id ];
              i || f( !1 ), i.descriptor === e && ( delete t.draggables[ e.id ], n && ( n.critical.draggable.id === e.id && f( !1 ), Qt( n, e ), r.remove( e ) ) )
            },
            registerDroppable: function ( e, r ) {
              var i = e.id;
              t.droppables[ i ] = {
                descriptor: e,
                callbacks: r
              }, n && f( !1 )
            },
            unregisterDroppable: function ( e ) {
              var r = t.droppables[ e.id ];
              r || f( !1 ), r.descriptor === e && ( delete t.droppables[ e.id ], n && f( !1 ) )
            },
            updateDroppableIsEnabled: function ( r, i ) {
              t.droppables[ r ] || f( !1 ), n && e.updateDroppableIsEnabled( {
                id: r,
                isEnabled: i
              } )
            },
            updateDroppableIsCombineEnabled: function ( r, i ) {
              t.droppables[ r ] || f( !1 ), n && e.updateDroppableIsCombineEnabled( {
                id: r,
                isCombineEnabled: i
              } )
            },
            scrollDroppable: function ( e, r ) {
              var i = t.droppables[ e ];
              i || f( !1 ), n && i.callbacks.scroll( r )
            },
            updateDroppableScroll: function ( r, i ) {
              t.droppables[ r ] || f( !1 ), n && e.updateDroppableScroll( {
                id: r,
                offset: i
              } )
            },
            startPublishing: function ( e ) {
              n && f( !1 );
              var r = t.draggables[ e.draggableId ];
              r || f( !1 );
              var i = t.droppables[ r.descriptor.droppableId ];
              i || f( !1 );
              var o = {
                draggable: r.descriptor,
                droppable: i.descriptor
              };
              return n = {
                critical: o
              }, Kt( {
                critical: o,
                entries: t,
                scrollOptions: e.scrollOptions
              } )
            },
            stopPublishing: function () {
              if ( n ) {
                r.stop();
                var e = n.critical.droppable;
                V( t.droppables ).filter( ( function ( t ) {
                  return t.descriptor.type === e.type
                } ) ).forEach( ( function ( e ) {
                  return e.callbacks.dragStopped()
                } ) ), n = null
              }
            }
          }
        },
        Zt = function ( e ) {
          window.scrollBy( e.x, e.y )
        },
        en = Object( v.default )( ( function ( e ) {
          return X( e ).filter( ( function ( e ) {
            return !!e.isEnabled && !!e.frame
          } ) )
        } ) ),
        tn = function ( e ) {
          var t = e.center,
            n = e.destination,
            r = e.droppables;
          if ( n ) {
            var i = r[ n ];
            return i.frame ? i : null
          }
          return function ( e, t ) {
            return q( en( t ), ( function ( t ) {
              return t.frame || f( !1 ), $( t.frame.pageMarginBox )( e )
            } ) )
          }( t, r )
        },
        nn = .25,
        rn = .05,
        on = 28,
        an = function ( e ) {
          return Math.pow( e, 2 )
        },
        cn = {
          stopDampeningAt: 1200,
          accelerateAt: 360
        },
        ln = function ( e ) {
          var t = e.startOfRange,
            n = e.endOfRange,
            r = e.current,
            i = n - t;
          return 0 === i ? 0 : ( r - t ) / i
        },
        dn = cn.accelerateAt,
        un = cn.stopDampeningAt,
        sn = function ( e ) {
          var t = e.distanceToEdge,
            n = e.thresholds,
            r = e.dragStartTime,
            i = e.shouldUseTimeDampening,
            o = function ( e, t ) {
              if ( e > t.startScrollingFrom ) return 0;
              if ( e <= t.maxScrollValueAt ) return on;
              if ( e === t.startScrollingFrom ) return 1;
              var n = ln( {
                  startOfRange: t.maxScrollValueAt,
                  endOfRange: t.startScrollingFrom,
                  current: e
                } ),
                r = on * an( 1 - n );
              return Math.ceil( r )
            }( t, n );
          return 0 === o ? 0 : i ? Math.max( function ( e, t ) {
            var n = t,
              r = un,
              i = y()() - n;
            if ( i >= un ) return e;
            if ( i < dn ) return 1;
            var o = ln( {
                startOfRange: dn,
                endOfRange: r,
                current: i
              } ),
              a = e * an( o );
            return Math.ceil( a )
          }( o, r ), 1 ) : o
        },
        pn = function ( e ) {
          var t = e.container,
            n = e.distanceToEdges,
            r = e.dragStartTime,
            i = e.axis,
            o = e.shouldUseTimeDampening,
            a = function ( e, t ) {
              return {
                startScrollingFrom: e[ t.size ] * nn,
                maxScrollValueAt: e[ t.size ] * rn
              }
            }( t, i );
          return n[ i.end ] < n[ i.start ] ? sn( {
            distanceToEdge: n[ i.end ],
            thresholds: a,
            dragStartTime: r,
            shouldUseTimeDampening: o
          } ) : -1 * sn( {
            distanceToEdge: n[ i.start ],
            thresholds: a,
            dragStartTime: r,
            shouldUseTimeDampening: o
          } )
        },
        fn = G( ( function ( e ) {
          return 0 === e ? 0 : e
        } ) ),
        gn = function ( e ) {
          var t = e.dragStartTime,
            n = e.container,
            r = e.subject,
            i = e.center,
            o = e.shouldUseTimeDampening,
            a = {
              top: i.y - n.top,
              right: n.right - i.x,
              bottom: n.bottom - i.y,
              left: i.x - n.left
            },
            c = pn( {
              container: n,
              distanceToEdges: a,
              dragStartTime: t,
              axis: ee,
              shouldUseTimeDampening: o
            } ),
            l = pn( {
              container: n,
              distanceToEdges: a,
              dragStartTime: t,
              axis: te,
              shouldUseTimeDampening: o
            } ),
            d = fn( {
              x: l,
              y: c
            } );
          if ( A( d, B ) ) return null;
          var u = function ( e ) {
            var t = e.container,
              n = e.subject,
              r = e.proposedScroll,
              i = n.height > t.height,
              o = n.width > t.width;
            return o || i ? o && i ? null : {
              x: o ? 0 : r.x,
              y: i ? 0 : r.y
            } : r
          }( {
            container: n,
            subject: r,
            proposedScroll: d
          } );
          return u ? A( u, B ) ? null : u : null
        },
        bn = G( ( function ( e ) {
          return 0 === e ? 0 : e > 0 ? 1 : -1
        } ) ),
        mn = ( et = function ( e, t ) {
          return e < 0 ? e : e > t ? e - t : 0
        }, function ( e ) {
          var t = e.current,
            n = e.max,
            r = e.change,
            i = L( t, r ),
            o = {
              x: et( i.x, n.x ),
              y: et( i.y, n.y )
            };
          return A( o, B ) ? null : o
        } ),
        vn = function ( e ) {
          var t = e.max,
            n = e.current,
            r = e.change,
            i = {
              x: Math.max( n.x, t.x ),
              y: Math.max( n.y, t.y )
            },
            o = bn( r ),
            a = mn( {
              max: i,
              current: n,
              change: o
            } );
          return !a || ( 0 !== o.x && 0 === a.x || 0 !== o.y && 0 === a.y )
        },
        hn = function ( e, t ) {
          return vn( {
            current: e.scroll.current,
            max: e.scroll.max,
            change: t
          } )
        },
        On = function ( e, t ) {
          var n = e.frame;
          return !!n && vn( {
            current: n.scroll.current,
            max: n.scroll.max,
            change: t
          } )
        },
        xn = function ( e ) {
          var t = e.state,
            n = e.dragStartTime,
            r = e.shouldUseTimeDampening,
            i = e.scrollWindow,
            o = e.scrollDroppable,
            a = t.current.page.borderBoxCenter,
            c = t.dimensions.draggables[ t.critical.draggable.id ].page.marginBox;
          if ( t.isWindowScrollAllowed ) {
            var l = function ( e ) {
              var t = e.viewport,
                n = e.subject,
                r = e.center,
                i = e.dragStartTime,
                o = e.shouldUseTimeDampening,
                a = gn( {
                  dragStartTime: i,
                  container: t.frame,
                  subject: n,
                  center: r,
                  shouldUseTimeDampening: o
                } );
              return a && hn( t, a ) ? a : null
            }( {
              dragStartTime: n,
              viewport: t.viewport,
              subject: c,
              center: a,
              shouldUseTimeDampening: r
            } );
            if ( l ) return void i( l )
          }
          var d = tn( {
            center: a,
            destination: H( t.impact ),
            droppables: t.dimensions.droppables
          } );
          if ( d ) {
            var u = function ( e ) {
              var t = e.droppable,
                n = e.subject,
                r = e.center,
                i = e.dragStartTime,
                o = e.shouldUseTimeDampening,
                a = t.frame;
              if ( !a ) return null;
              var c = gn( {
                dragStartTime: i,
                container: a.pageMarginBox,
                subject: n,
                center: r,
                shouldUseTimeDampening: o
              } );
              return c && On( t, c ) ? c : null
            }( {
              dragStartTime: n,
              droppable: d,
              subject: c,
              center: a,
              shouldUseTimeDampening: r
            } );
            u && o( d.descriptor.id, u )
          }
        },
        Dn = function ( e ) {
          var t = e.move,
            n = e.scrollDroppable,
            r = e.scrollWindow,
            i = function ( e, t ) {
              if ( !On( e, t ) ) return t;
              var r = function ( e, t ) {
                var n = e.frame;
                return n && On( e, t ) ? mn( {
                  current: n.scroll.current,
                  max: n.scroll.max,
                  change: t
                } ) : null
              }( e, t );
              if ( !r ) return n( e.descriptor.id, t ), null;
              var i = P( t, r );
              return n( e.descriptor.id, i ), P( t, i )
            },
            o = function ( e, t, n ) {
              if ( !e ) return n;
              if ( !hn( t, n ) ) return n;
              var i = function ( e, t ) {
                if ( !hn( e, t ) ) return null;
                var n = e.scroll.max,
                  r = e.scroll.current;
                return mn( {
                  current: r,
                  max: n,
                  change: t
                } )
              }( t, n );
              if ( !i ) return r( n ), null;
              var o = P( n, i );
              return r( o ), P( n, o )
            };
          return function ( e ) {
            var n = e.scrollJumpRequest;
            if ( n ) {
              var r = H( e.impact );
              r || f( !1 );
              var a = i( e.dimensions.droppables[ r ], n );
              if ( a ) {
                var c = e.viewport,
                  l = o( e.isWindowScrollAllowed, c, a );
                l && function ( e, n ) {
                  var r = L( e.current.client.selection, n );
                  t( {
                    client: r
                  } )
                }( e, l )
              }
            }
          }
        },
        In = function ( e ) {
          var t = e.scrollDroppable,
            n = e.scrollWindow,
            r = e.move,
            i = function ( e ) {
              var t = e.scrollWindow,
                n = e.scrollDroppable,
                r = Object( w.a )( t ),
                i = Object( w.a )( n ),
                o = null,
                a = function ( e ) {
                  o || f( !1 );
                  var t = o,
                    n = t.shouldUseTimeDampening,
                    a = t.dragStartTime;
                  xn( {
                    state: e,
                    scrollWindow: r,
                    scrollDroppable: i,
                    dragStartTime: a,
                    shouldUseTimeDampening: n
                  } )
                },
                c = function () {
                  o || f( !1 ), r.cancel(), i.cancel()
                };
              return {
                start: function ( e ) {
                  o && f( !1 );
                  var t = y()(),
                    n = !1,
                    r = function () {
                      n = !0
                    };
                  xn( {
                    state: e,
                    dragStartTime: 0,
                    shouldUseTimeDampening: !1,
                    scrollWindow: r,
                    scrollDroppable: r
                  } ), o = {
                    dragStartTime: t,
                    shouldUseTimeDampening: n
                  }, n && a( e )
                },
                stop: function () {
                  o && ( c(), o = null )
                },
                cancelPending: c,
                scroll: a
              }
            }( {
              scrollWindow: n,
              scrollDroppable: t
            } ),
            o = Dn( {
              move: r,
              scrollWindow: n,
              scrollDroppable: t
            } );
          return {
            scroll: function ( e ) {
              "DRAGGING" === e.phase && ( "FLUID" !== e.movementMode ? e.scrollJumpRequest && o( e ) : i.scroll( e ) )
            },
            cancelPending: i.cancelPending,
            start: i.start,
            stop: i.stop
          }
        },
        yn = function ( e, t ) {
          return e.map( ( function ( e ) {
            var n = e.styles[ t ];
            return n ? e.selector + " { " + n + " }" : ""
          } ) ).join( " " )
        },
        wn = "undefined" != typeof window ? l.useLayoutEffect : l.useEffect,
        En = function () {
          var e = document.querySelector( "head" );
          return e || f( !1 ), e
        },
        jn = function () {
          var e = document.createElement( "style" );
          return e.type = "text/css", e
        };

      function Cn( e ) {
        var t = Object( s.c )( ( function () {
            return "" + e
          } ), [ e ] ),
          n = Object( s.c )( ( function () {
            return function ( e ) {
              var t, n, r, i = ( t = e, function ( e ) {
                  return "[" + e + '="' + t + '"]'
                } ),
                o = ( n = "\n      cursor: -webkit-grab;\n      cursor: grab;\n    ", {
                  selector: i( "data-react-beautiful-dnd-drag-handle" ),
                  styles: {
                    always: "\n          -webkit-touch-callout: none;\n          -webkit-tap-highlight-color: rgba(0,0,0,0);\n          touch-action: manipulation;\n        ",
                    resting: n,
                    dragging: "pointer-events: none;",
                    dropAnimating: n
                  }
                } ),
                a = [ ( r = "\n      transition: " + yt.outOfTheWay + ";\n    ", {
                  selector: i( "data-react-beautiful-dnd-draggable" ),
                  styles: {
                    dragging: r,
                    dropAnimating: r,
                    userCancel: r
                  }
                } ), o, {
                  selector: i( "data-react-beautiful-dnd-droppable" ),
                  styles: {
                    always: "overflow-anchor: none;"
                  }
                }, {
                  selector: "body",
                  styles: {
                    dragging: "\n        cursor: grabbing;\n        cursor: -webkit-grabbing;\n        user-select: none;\n        -webkit-user-select: none;\n        -moz-user-select: none;\n        -ms-user-select: none;\n        overflow-anchor: none;\n      "
                  }
                } ];
              return {
                always: yn( a, "always" ),
                resting: yn( a, "resting" ),
                dragging: yn( a, "dragging" ),
                dropAnimating: yn( a, "dropAnimating" ),
                userCancel: yn( a, "userCancel" )
              }
            }( t )
          } ), [ t ] ),
          r = Object( l.useRef )( null ),
          i = Object( l.useRef )( null ),
          o = Object( s.a )( Object( v.default )( ( function ( e ) {
            var t = i.current;
            t || f( !1 ), t.textContent = e
          } ) ), [] ),
          a = Object( s.a )( ( function ( e ) {
            var t = r.current;
            t || f( !1 ), t.textContent = e
          } ), [] );
        wn( ( function () {
          ( r.current || i.current ) && f( !1 );
          var e = jn(),
            c = jn();
          return r.current = e, i.current = c, e.setAttribute( "data-react-beautiful-dnd-always", t ), c.setAttribute( "data-react-beautiful-dnd-dynamic", t ), En().appendChild( e ), En().appendChild( c ), a( n.always ), o( n.resting ),
            function () {
              var e = function ( e ) {
                var t = e.current;
                t || f( !1 ), En().removeChild( t ), e.current = null
              };
              e( r ), e( i )
            }
        } ), [ a, o, n.always, n.resting, t ] );
        var c = Object( s.a )( ( function () {
            return o( n.dragging )
          } ), [ o, n.dragging ] ),
          d = Object( s.a )( ( function ( e ) {
            o( "DROP" !== e ? n.userCancel : n.dropAnimating )
          } ), [ o, n.dropAnimating, n.userCancel ] ),
          u = Object( s.a )( ( function () {
            i.current && o( n.resting )
          } ), [ o, n.resting ] );
        return Object( s.c )( ( function () {
          return {
            dragging: c,
            dropping: d,
            resting: u,
            styleContext: t
          }
        } ), [ c, d, u, t ] )
      }
      var Sn = d.a.createContext( null ),
        Bn = function () {
          var e = document.body;
          return e || f( !1 ), e
        },
        Ln = {
          position: "absolute",
          width: "1px",
          height: "1px",
          margin: "-1px",
          border: "0",
          padding: "0",
          overflow: "hidden",
          clip: "rect(0 0 0 0)",
          "clip-path": "inset(100%)"
        };
      var Pn = d.a.createContext( null );

      function An() {
        Object( l.useEffect )( ( function () {} ), [] )
      }

      function Rn( e ) {
        var t = Object( l.useRef )( e );
        return Object( l.useEffect )( ( function () {
          t.current = e
        } ) ), t
      }

      function Nn( e ) {
        return e.current || f( !1 ), e.current
      }

      function Tn( e ) {
        var t = e.uniqueId,
          n = e.setOnError,
          r = Object( l.useRef )( null );
        An();
        var i = Rn( e ),
          o = Object( s.a )( ( function () {
            return function ( e ) {
              return {
                onBeforeDragStart: e.onBeforeDragStart,
                onDragStart: e.onDragStart,
                onDragEnd: e.onDragEnd,
                onDragUpdate: e.onDragUpdate
              }
            }( i.current )
          } ), [ i ] ),
          a = function ( e ) {
            var t = Object( s.c )( ( function () {
                return function ( e ) {
                  return "react-beautiful-dnd-announcement-" + e
                }( e )
              } ), [ e ] ),
              n = Object( l.useRef )( null );
            return Object( l.useEffect )( ( function () {
              n.current && f( !1 );
              var e = document.createElement( "div" );
              return n.current = e, e.id = t, e.setAttribute( "aria-live", "assertive" ), e.setAttribute( "role", "log" ), e.setAttribute( "aria-atomic", "true" ), j()( e.style, Ln ), Bn().appendChild( e ),
                function () {
                  var e = n.current;
                  e || f( !1 ), Bn().removeChild( e ), n.current = null
                }
            } ), [ t ] ), Object( s.a )( ( function ( e ) {
              var t = n.current;
              t && ( t.textContent = e )
            } ), [] )
          }( t ),
          c = Cn( t ),
          p = Object( s.a )( ( function ( e ) {
            Nn( r ).dispatch( e )
          } ), [] ),
          m = Object( s.c )( ( function () {
            return Object( g.b )( {
              publishWhileDragging: st,
              updateDroppableScroll: ft,
              updateDroppableIsEnabled: gt,
              updateDroppableIsCombineEnabled: bt,
              collectionStarting: pt
            }, p )
          } ), [ p ] ),
          v = Object( s.c )( ( function () {
            return $t( m )
          } ), [ m ] ),
          h = Object( s.c )( ( function () {
            return In( Object( u.a )( {
              scrollWindow: Zt,
              scrollDroppable: v.scrollDroppable
            }, Object( g.b )( {
              move: mt
            }, p ) ) )
          } ), [ v.scrollDroppable, p ] ),
          O = Object( s.c )( ( function () {
            return qt( {
              dimensionMarshal: v,
              styleMarshal: c,
              announce: a,
              autoScroller: h,
              getResponders: o
            } )
          } ), [ a, h, v, o, c ] );
        r.current = O;
        var x = Object( s.a )( ( function () {
          var e, t = Nn( r );
          "IDLE" !== t.getState().phase && t.dispatch( ( void 0 === ( e = {
            shouldFlush: !0
          } ) && ( e = {
            shouldFlush: !1
          } ), {
            type: "CLEAN",
            payload: e
          } ) )
        } ), [] );
        n( x );
        var D = Object( s.a )( ( function ( e ) {
            return function ( e, t ) {
              return "IDLE" === e.phase || "DROP_ANIMATING" === e.phase && ( e.completed.result.draggableId !== t && "DROP" === e.completed.result.reason )
            }( Nn( r ).getState(), e )
          } ), [] ),
          I = Object( s.a )( ( function () {
            return Ze( Nn( r ).getState() )
          } ), [] ),
          y = Object( s.c )( ( function () {
            return {
              marshal: v,
              style: c.styleContext,
              canLift: D,
              isMovementAllowed: I
            }
          } ), [ v, D, I, c.styleContext ] );
        return Object( l.useEffect )( ( function () {
          return x
        } ), [ x ] ), d.a.createElement( Pn.Provider, {
          value: y
        }, d.a.createElement( b.a, {
          context: Sn,
          store: O
        }, e.children ) )
      }
      var Mn = 0;

      function Gn( e ) {
        var t = Object( s.c )( ( function () {
          return Mn++
        } ), [] );
        return d.a.createElement( S, null, ( function ( n ) {
          return d.a.createElement( Tn, Object( u.a )( {
            setOnError: n,
            uniqueId: t
          }, e ), e.children )
        } ) )
      }
      var _n = function ( e ) {
          return function ( t ) {
            return e === t
          }
        },
        Fn = _n( "scroll" ),
        Wn = _n( "auto" ),
        Un = ( _n( "visible" ), function ( e, t ) {
          return t( e.overflowX ) || t( e.overflowY )
        } ),
        kn = function ( e ) {
          var t = window.getComputedStyle( e ),
            n = {
              overflowX: t.overflowX,
              overflowY: t.overflowY
            };
          return Un( n, Fn ) || Un( n, Wn )
        },
        Hn = function e( t ) {
          return null == t || t === document.body || t === document.documentElement ? null : kn( t ) ? t : e( t.parentElement )
        },
        Vn = function ( e ) {
          return {
            x: e.scrollLeft,
            y: e.scrollTop
          }
        },
        zn = function ( e ) {
          return {
            closestScrollable: Hn( e ),
            isFixedOnPage: function e( t ) {
              return !!t && ( "fixed" === window.getComputedStyle( t ).position || e( t.parentElement ) )
            }( e )
          }
        },
        qn = function ( e ) {
          var t = e.ref,
            n = e.descriptor,
            r = e.env,
            i = e.windowScroll,
            o = e.direction,
            a = e.isDropDisabled,
            c = e.isCombineEnabled,
            l = e.shouldClipSubject,
            d = r.closestScrollable,
            u = function ( e, t ) {
              var n = Object( m.d )( e );
              if ( !t ) return n;
              if ( e !== t ) return n;
              var r = n.paddingBox.top - t.scrollTop,
                i = n.paddingBox.left - t.scrollLeft,
                o = r + t.scrollHeight,
                a = {
                  top: r,
                  right: i + t.scrollWidth,
                  bottom: o,
                  left: i
                },
                c = Object( m.c )( a, n.border );
              return Object( m.b )( {
                borderBox: c,
                margin: n.margin,
                border: n.border,
                padding: n.padding
              } )
            }( t, d ),
            s = Object( m.g )( u, i ),
            p = function () {
              if ( !d ) return null;
              var e = Object( m.d )( d ),
                t = {
                  scrollHeight: d.scrollHeight,
                  scrollWidth: d.scrollWidth
                };
              return {
                client: e,
                page: Object( m.g )( e, i ),
                scroll: Vn( d ),
                scrollSize: t,
                shouldClipSubject: l
              }
            }();
          return ye( {
            descriptor: n,
            isEnabled: !a,
            isCombineEnabled: c,
            isFixedOnPage: r.isFixedOnPage,
            direction: o,
            client: u,
            page: s,
            closest: p
          } )
        };
      var Yn = {
          passive: !1
        },
        Jn = {
          passive: !0
        },
        Xn = function ( e ) {
          return e.shouldPublishImmediately ? Yn : Jn
        };

      function Kn( e ) {
        var t = Object( l.useContext )( e );
        return t || f( !1 ), t
      }
      var Qn = function ( e ) {
        return e && e.env.closestScrollable || null
      };

      function $n() {}
      var Zn = {
          width: 0,
          height: 0,
          margin: {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0
          }
        },
        er = function ( e ) {
          var t = e.isAnimatingOpenOnMount,
            n = e.placeholder,
            r = function ( e ) {
              var t = e.isAnimatingOpenOnMount,
                n = e.placeholder,
                r = e.animate;
              return t || "close" === r ? Zn : {
                height: n.client.borderBox.height,
                width: n.client.borderBox.width,
                margin: n.client.margin
              }
            }( {
              isAnimatingOpenOnMount: t,
              placeholder: n,
              animate: e.animate
            } );
          return {
            display: n.display,
            boxSizing: "border-box",
            width: r.width,
            height: r.height,
            marginTop: r.margin.top,
            marginRight: r.margin.right,
            marginBottom: r.margin.bottom,
            marginLeft: r.margin.left,
            flexShrink: "0",
            flexGrow: "0",
            pointerEvents: "none",
            transition: yt.placeholder
          }
        };
      var tr = d.a.memo( ( function ( e ) {
          var t = Object( l.useRef )( null ),
            n = Object( s.a )( ( function () {
              t.current && ( clearTimeout( t.current ), t.current = null )
            } ), [] ),
            r = e.animate,
            i = e.onTransitionEnd,
            o = e.onClose,
            a = e.styleContext,
            c = Object( l.useState )( "open" === e.animate ),
            u = c[ 0 ],
            p = c[ 1 ];
          Object( l.useEffect )( ( function () {
            return u ? "open" !== r ? ( n(), p( !1 ), $n ) : t.current ? $n : ( t.current = setTimeout( ( function () {
              t.current = null, p( !1 )
            } ) ), n ) : $n
          } ), [ r, u, n ] );
          var f = Object( s.a )( ( function ( e ) {
              "height" === e.propertyName && ( i(), "close" === r && o() )
            } ), [ r, o, i ] ),
            g = er( {
              isAnimatingOpenOnMount: u,
              animate: e.animate,
              placeholder: e.placeholder
            } );
          return d.a.createElement( e.placeholder.tagName, {
            style: g,
            "data-react-beautiful-dnd-placeholder": a,
            onTransitionEnd: f,
            ref: e.innerRef
          } )
        } ) ),
        nr = d.a.createContext( null ),
        rr = function ( e ) {
          return e && e.ownerDocument ? e.ownerDocument.defaultView : window
        };

      function ir( e ) {
        return e instanceof rr( e ).HTMLElement
      }
      var or = function ( e ) {
        function t() {
          for ( var t, n = arguments.length, r = new Array( n ), i = 0; i < n; i++ ) r[ i ] = arguments[ i ];
          return ( t = e.call.apply( e, [ this ].concat( r ) ) || this ).state = {
            isVisible: Boolean( t.props.on ),
            data: t.props.on,
            animate: t.props.shouldAnimate && t.props.on ? "open" : "none"
          }, t.onClose = function () {
            "close" === t.state.animate && t.setState( {
              isVisible: !1
            } )
          }, t
        }
        return Object( p.a )( t, e ), t.getDerivedStateFromProps = function ( e, t ) {
          return e.shouldAnimate ? e.on ? {
            isVisible: !0,
            data: e.on,
            animate: "open"
          } : t.isVisible ? {
            isVisible: !0,
            data: t.data,
            animate: "close"
          } : {
            isVisible: !1,
            animate: "close",
            data: null
          } : {
            isVisible: Boolean( e.on ),
            data: e.on,
            animate: "none"
          }
        }, t.prototype.render = function () {
          if ( !this.state.isVisible ) return null;
          var e = {
            onClose: this.onClose,
            data: this.state.data,
            animate: this.state.animate
          };
          return this.props.children( e )
        }, t
      }( d.a.PureComponent );
      var ar = function ( e, t ) {
          return e === t
        },
        cr = function ( e ) {
          var t = e.combine,
            n = e.destination;
          return n ? n.droppableId : t ? t.droppableId : null
        },
        lr = function ( e, t ) {
          return e === t.droppable.type
        },
        dr = function ( e, t ) {
          return t.draggables[ e.draggable.id ]
        },
        ur = {
          updateViewportMaxScroll: function ( e ) {
            return {
              type: "UPDATE_VIEWPORT_MAX_SCROLL",
              payload: e
            }
          }
        },
        sr = Object( b.b )( ( function () {
          var e = {
              placeholder: null,
              shouldAnimatePlaceholder: !0,
              snapshot: {
                isDraggingOver: !1,
                draggingOverWith: null,
                draggingFromThisWith: null
              }
            },
            t = Object( u.a )( {}, e, {
              shouldAnimatePlaceholder: !1
            } ),
            n = Object( v.default )( ( function ( t, n, r, i ) {
              return r.descriptor.droppableId === t ? {
                placeholder: r.placeholder,
                shouldAnimatePlaceholder: !1,
                snapshot: i
              } : n ? {
                placeholder: r.placeholder,
                shouldAnimatePlaceholder: !0,
                snapshot: i
              } : e
            } ) ),
            r = Object( v.default )( ( function ( e, t, n ) {
              var r = n.descriptor.id;
              return {
                isDraggingOver: t,
                draggingOverWith: t ? r : null,
                draggingFromThisWith: n.descriptor.droppableId === e ? r : null
              }
            } ) );
          return function ( i, o ) {
            var a = o.droppableId,
              c = o.type;
            if ( i.isDragging ) {
              var l = i.critical;
              if ( !lr( c, l ) ) return e;
              var d = dr( l, i.dimensions ),
                u = H( i.impact ) === a,
                s = r( a, u, d );
              return n( a, u, d, s )
            }
            if ( "DROP_ANIMATING" === i.phase ) {
              var p = i.completed;
              if ( !lr( c, p.critical ) ) return e;
              var f = dr( p.critical, i.dimensions ),
                g = r( a, cr( p.result ) === a, f );
              return n( a, H( p.impact ) === a, f, g )
            }
            if ( "IDLE" === i.phase && !i.completed && i.shouldFlush ) return t;
            if ( "IDLE" === i.phase && i.completed ) {
              var b = i.completed;
              if ( !lr( c, b.critical ) ) return e;
              var m = H( b.impact ) === a,
                v = Boolean( b.impact.merge );
              return i.shouldFlush ? t : m ? v ? e : t : e
            }
            return e
          }
        } ), ur, null, {
          context: Sn,
          pure: !0,
          areStatePropsEqual: ar
        } )( ( function ( e ) {
          var t = Object( l.useContext )( Pn );
          t || f( !1 );
          var n, r, i, o, a, c, u, p, g, b, m, h, O, x, D, I, y = t.style,
            E = t.isMovementAllowed,
            j = Object( l.useRef )( null ),
            C = Object( l.useRef )( null ),
            S = e.children,
            L = e.droppableId,
            P = e.type,
            A = e.direction,
            R = e.ignoreContainerClipping,
            N = e.isDropDisabled,
            T = e.isCombineEnabled,
            M = e.snapshot,
            G = e.updateViewportMaxScroll,
            _ = Object( s.a )( ( function () {
              return j.current
            } ), [] ),
            F = Object( s.a )( ( function () {
              return C.current
            } ), [] ),
            W = Object( s.a )( ( function ( e ) {
              j.current = e
            } ), [] ),
            U = Object( s.a )( ( function ( e ) {
              C.current = e
            } ), [] ),
            k = Object( s.a )( ( function () {
              E() && G( {
                maxScroll: Xt()
              } )
            } ), [ E, G ] );
          n = {
            droppableId: L,
            type: P,
            direction: A,
            isDropDisabled: N,
            isCombineEnabled: T,
            ignoreContainerClipping: R,
            getDroppableRef: _,
            getPlaceholderRef: F
          }, r = Object( l.useRef )( null ), i = Kn( Pn ).marshal, o = Rn( n ), a = Object( s.c )( ( function () {
            return {
              id: n.droppableId,
              type: n.type
            }
          } ), [ n.droppableId, n.type ] ), c = Object( l.useRef )( a ), u = Object( s.c )( ( function () {
            return Object( v.default )( ( function ( e, t ) {
              r.current || f( !1 );
              var n = {
                x: e,
                y: t
              };
              i.updateDroppableScroll( a.id, n )
            } ) )
          } ), [ a.id, i ] ), p = Object( s.a )( ( function () {
            var e = r.current;
            return e && e.env.closestScrollable ? Vn( e.env.closestScrollable ) : B
          } ), [] ), g = Object( s.a )( ( function () {
            var e = p();
            u( e.x, e.y )
          } ), [ p, u ] ), b = Object( s.c )( ( function () {
            return Object( w.a )( g )
          } ), [ g ] ), m = Object( s.a )( ( function () {
            var e = r.current,
              t = Qn( e );
            e && t || f( !1 ), e.scrollOptions.shouldPublishImmediately ? g() : b()
          } ), [ b, g ] ), h = Object( s.a )( ( function ( e, t ) {
            r.current && f( !1 );
            var n = o.current,
              i = n.getDroppableRef();
            i || f( !1 );
            var c = zn( i ),
              l = {
                ref: i,
                descriptor: a,
                env: c,
                scrollOptions: t
              };
            r.current = l;
            var d = qn( {
              ref: i,
              descriptor: a,
              env: c,
              windowScroll: e,
              direction: n.direction,
              isDropDisabled: n.isDropDisabled,
              isCombineEnabled: n.isCombineEnabled,
              shouldClipSubject: !n.ignoreContainerClipping
            } );
            return c.closestScrollable && c.closestScrollable.addEventListener( "scroll", m, Xn( l.scrollOptions ) ), d
          } ), [ a, m, o ] ), O = Object( s.a )( ( function ( e ) {
            var t = r.current,
              n = Qn( t );
            t && n || f( !1 );
            var i = o.current,
              a = function () {
                return qn( {
                  ref: t.ref,
                  descriptor: t.descriptor,
                  env: t.env,
                  windowScroll: B,
                  direction: i.direction,
                  isDropDisabled: i.isDropDisabled,
                  isCombineEnabled: i.isCombineEnabled,
                  shouldClipSubject: !i.ignoreContainerClipping
                } )
              };
            return e.withoutPlaceholder ? function ( e, t ) {
              if ( !e ) return t();
              var n = e.style.display;
              e.style.display = "none";
              var r = t();
              return e.style.display = n, r
            }( i.getPlaceholderRef(), a ) : a()
          } ), [ o ] ), x = Object( s.a )( ( function () {
            var e = r.current;
            e || f( !1 );
            var t = Qn( e );
            r.current = null, t && ( b.cancel(), t.removeEventListener( "scroll", m, Xn( e.scrollOptions ) ) )
          } ), [ m, b ] ), D = Object( s.a )( ( function ( e ) {
            var t = r.current;
            t || f( !1 );
            var n = Qn( t );
            n || f( !1 ), n.scrollTop += e.y, n.scrollLeft += e.x
          } ), [] ), I = Object( s.c )( ( function () {
            return {
              getDimensionAndWatchScroll: h,
              recollect: O,
              dragStopped: x,
              scroll: D
            }
          } ), [ x, h, O, D ] ), wn( ( function () {
            return c.current = a, i.registerDroppable( a, I ),
              function () {
                r.current && x(), i.unregisterDroppable( a )
              }
          } ), [ I, a, x, i ] ), wn( ( function () {
            r.current && i.updateDroppableIsEnabled( c.current.id, !n.isDropDisabled )
          } ), [ n.isDropDisabled, i ] ), wn( ( function () {
            r.current && i.updateDroppableIsCombineEnabled( c.current.id, n.isCombineEnabled )
          } ), [ n.isCombineEnabled, i ] );
          var H, V = d.a.createElement( or, {
              on: e.placeholder,
              shouldAnimate: e.shouldAnimatePlaceholder
            }, ( function ( e ) {
              var t = e.onClose,
                n = e.data,
                r = e.animate;
              return d.a.createElement( tr, {
                placeholder: n,
                onClose: t,
                innerRef: U,
                animate: r,
                styleContext: y,
                onTransitionEnd: k
              } )
            } ) ),
            z = Object( s.c )( ( function () {
              return {
                innerRef: W,
                placeholder: V,
                droppableProps: {
                  "data-react-beautiful-dnd-droppable": y
                }
              }
            } ), [ V, W, y ] ),
            q = Object( s.c )( ( function () {
              return {
                droppableId: L,
                type: P
              }
            } ), [ L, P ] );
          return ( H = {
            props: e,
            getDroppableRef: function () {
              return j.current
            },
            getPlaceholderRef: function () {
              return C.current
            }
          } ).props, H.getDroppableRef, H.getPlaceholderRef, Object( l.useEffect )( ( function () {} ) ), d.a.createElement( nr.Provider, {
            value: q
          }, S( z, M ) )
        } ) );
      sr.defaultProps = {
        type: "DEFAULT",
        direction: "vertical",
        isDropDisabled: !1,
        isCombineEnabled: !1,
        ignoreContainerClipping: !1
      };
      var pr = 5e3,
        fr = 4500,
        gr = function ( e, t ) {
          return t ? yt.drop( t.duration ) : e ? yt.snap : yt.fluid
        },
        br = function ( e, t ) {
          return e ? t ? xt.drop : xt.combining : null
        };

      function mr( e ) {
        return "DRAGGING" === e.type ? ( r = ( n = e ).dimension.client, i = n.offset, o = n.combineWith, a = n.dropping, c = Boolean( o ), l = function ( e ) {
          return null != e.forceShouldAnimate ? e.forceShouldAnimate : "SNAP" === e.mode
        }( n ), d = Boolean( a ), u = d ? jt( i, c ) : Et( i ), {
          position: "fixed",
          top: r.marginBox.top,
          left: r.marginBox.left,
          boxSizing: "border-box",
          width: r.borderBox.width,
          height: r.borderBox.height,
          transition: gr( l, a ),
          transform: u,
          opacity: br( c, d ),
          zIndex: d ? fr : pr,
          pointerEvents: "none"
        } ) : {
          transform: Et( ( t = e ).offset ),
          transition: t.shouldAnimateDisplacement ? null : "none"
        };
        var t, n, r, i, o, a, c, l, d, u
      }
      var vr, hr, Or = function () {
          var e = !1;
          return {
            handle: function () {
              e && f( !1 ), e = !0
            },
            isHandled: function () {
              return e
            },
            reset: function () {
              e = !1
            }
          }
        },
        xr = function ( e, t ) {
          return Object( u.a )( {}, e, t )
        },
        Dr = function ( e, t, n ) {
          t.forEach( ( function ( t ) {
            var r = xr( n, t.options );
            e.addEventListener( t.eventName, t.fn, r )
          } ) )
        },
        Ir = function ( e, t, n ) {
          t.forEach( ( function ( t ) {
            var r = xr( n, t.options );
            e.removeEventListener( t.eventName, t.fn, r )
          } ) )
        },
        yr = function ( e ) {
          var t = Object( v.default )( ( function ( t, n ) {
              var r = {
                x: t,
                y: n
              };
              e.onMove( r )
            } ) ),
            n = Object( w.a )( ( function ( e ) {
              return t( e.x, e.y )
            } ) ),
            r = Object( w.a )( e.onMoveUp ),
            i = Object( w.a )( e.onMoveDown ),
            o = Object( w.a )( e.onMoveRight ),
            a = Object( w.a )( e.onMoveLeft ),
            c = Object( w.a )( e.onWindowScroll );
          return {
            move: n,
            moveUp: r,
            moveDown: i,
            moveRight: o,
            moveLeft: a,
            windowScrollMove: c,
            cancel: function () {
              n.cancel(), r.cancel(), i.cancel(), o.cancel(), a.cancel(), c.cancel()
            }
          }
        },
        wr = ( vr = "visibilitychange", "undefined" == typeof document ? vr : q( [ vr, "ms" + vr, "webkit" + vr, "moz" + vr, "o" + vr ], ( function ( e ) {
          return "on" + e in document
        } ) ) || vr ),
        Er = {
          capture: !0
        },
        jr = function ( e ) {
          var t = !1,
            n = function () {
              t && ( t = !1, Ir( e(), r, Er ) )
            },
            r = [ {
              eventName: "click",
              fn: function ( e ) {
                e.preventDefault(), n()
              }
            }, {
              eventName: "mousedown",
              fn: n
            }, {
              eventName: "touchstart",
              fn: n
            } ];
          return {
            preventNext: function () {
              t && n(), t || ( t = !0, Dr( e(), r, Er ) )
            },
            abort: n
          }
        },
        Cr = ( ( hr = {} )[ 13 ] = !0, hr[ 9 ] = !0, hr ),
        Sr = function ( e ) {
          Cr[ e.keyCode ] && e.preventDefault()
        },
        Br = function () {},
        Lr = Or();

      function Pr( e ) {
        var t = e.canStartCapturing,
          n = e.getWindow,
          r = e.callbacks,
          i = e.onCaptureStart,
          o = e.onCaptureEnd,
          a = Object( l.useRef )( null ),
          c = Object( l.useRef )( !1 ),
          d = Object( l.useRef )( Br ),
          u = Object( s.a )( ( function () {
            return Boolean( a.current || c.current )
          } ), [] ),
          p = Object( s.c )( ( function () {
            return u() && f( !1 ), yr( r )
          } ), [ r, u ] ),
          g = Object( s.c )( ( function () {
            return jr( n )
          } ), [ n ] ),
          b = Object( s.a )( ( function () {
            if ( u() ) {
              p.cancel(), d.current();
              var e = c.current;
              Lr.reset(), e && g.preventNext(), a.current = null, c.current = !1, o()
            }
          } ), [ u, o, g, p ] ),
          m = Object( s.a )( ( function () {
            var e = c.current;
            b(), e && r.onCancel()
          } ), [ r, b ] ),
          v = Object( s.a )( ( function () {
            c.current && f( !1 );
            var e = a.current;
            e || f( !1 ), a.current = null, c.current = !0, r.onLift( {
              clientSelection: e,
              movementMode: "FLUID"
            } )
          } ), [ r ] ),
          h = Object( s.c )( ( function () {
            return u() && f( !1 ), [ {
              eventName: "mousemove",
              fn: function ( e ) {
                var t = e.button,
                  n = e.clientX,
                  r = e.clientY;
                if ( 0 === t ) {
                  var i = {
                    x: n,
                    y: r
                  };
                  if ( c.current ) return e.preventDefault(), void p.move( i );
                  var o, l, d = a.current;
                  if ( d || ( b(), f( !1 ) ), o = d, l = i, Math.abs( l.x - o.x ) >= 5 || Math.abs( l.y - o.y ) >= 5 ) e.preventDefault(), v()
                }
              }
            }, {
              eventName: "mouseup",
              fn: function ( e ) {
                var t = c.current;
                b(), t && ( e.preventDefault(), r.onDrop() )
              }
            }, {
              eventName: "mousedown",
              fn: function ( e ) {
                c.current && e.preventDefault(), m()
              }
            }, {
              eventName: "keydown",
              fn: function ( e ) {
                if ( !a.current ) return 27 === e.keyCode ? ( e.preventDefault(), void m() ) : void Sr( e );
                b()
              }
            }, {
              eventName: "resize",
              fn: m
            }, {
              eventName: "scroll",
              options: {
                passive: !0,
                capture: !1
              },
              fn: function ( e ) {
                e.currentTarget === n() && ( a.current ? b() : p.windowScrollMove() )
              }
            }, {
              eventName: "webkitmouseforcedown",
              fn: function () {
                m()
              }
            }, {
              eventName: wr,
              fn: m
            } ]
          } ), [ u, m, v, p, b, r, n ] ),
          O = Object( s.a )( ( function () {
            var e = n(),
              t = {
                capture: !0
              };
            d.current = function () {
              return Ir( e, h, t )
            }, Dr( e, h, t )
          } ), [ n, h ] ),
          x = Object( s.a )( ( function ( e ) {
            a.current && f( !1 ), a.current = e, i( b ), O()
          } ), [ O, i, b ] );
        return Object( s.a )( ( function ( e ) {
          if ( !Lr.isHandled() && ( u() && f( !1 ), t( e ) && 0 === e.button && !( e.ctrlKey || e.metaKey || e.shiftKey || e.altKey ) ) ) {
            Lr.handle(), e.preventDefault();
            var n = {
              x: e.clientX,
              y: e.clientY
            };
            x( n )
          }
        } ), [ t, u, x ] )
      }

      function Ar( e ) {
        return e instanceof rr( e ).Element
      }
      var Rr, Nr = {
          input: !0,
          button: !0,
          textarea: !0,
          select: !0,
          option: !0,
          optgroup: !0,
          video: !0,
          audio: !0
        },
        Tr = function ( e, t ) {
          if ( t ) return !0;
          var n = e.target,
            r = e.currentTarget;
          return !Ar( n ) || !Ar( r ) || ! function e( t, n ) {
            if ( null == n ) return !1;
            if ( Boolean( Nr[ n.tagName.toLowerCase() ] ) ) return !0;
            var r = n.getAttribute( "contenteditable" );
            return "true" === r || "" === r || n !== t && e( t, n.parentElement )
          }( r, n )
        },
        Mr = ( ( Rr = {} )[ 34 ] = !0, Rr[ 33 ] = !0, Rr[ 36 ] = !0, Rr[ 35 ] = !0, Rr );

      function Gr() {}

      function _r( e ) {
        var t = e.canStartCapturing,
          n = e.getWindow,
          r = e.callbacks,
          i = e.onCaptureStart,
          o = e.onCaptureEnd,
          a = e.getDraggableRef,
          c = Object( l.useRef )( !1 ),
          d = Object( l.useRef )( Gr ),
          u = Object( s.a )( ( function () {
            return c.current
          } ), [] ),
          p = Object( s.c )( ( function () {
            return u() && f( !1 ), yr( r )
          } ), [ r, u ] ),
          g = Object( s.a )( ( function () {
            u() && ( p.cancel(), d.current(), c.current = !1, o() )
          } ), [ u, o, p ] ),
          b = Object( s.a )( ( function () {
            var e = c.current;
            g(), e && r.onCancel()
          } ), [ r, g ] ),
          v = Object( s.c )( ( function () {
            return u() && f( !1 ), [ {
              eventName: "mousedown",
              fn: b
            }, {
              eventName: "mouseup",
              fn: b
            }, {
              eventName: "click",
              fn: b
            }, {
              eventName: "touchstart",
              fn: b
            }, {
              eventName: "resize",
              fn: b
            }, {
              eventName: "wheel",
              fn: b,
              options: {
                passive: !0
              }
            }, {
              eventName: "scroll",
              options: {
                capture: !1
              },
              fn: function ( e ) {
                e.currentTarget === n() && r.onWindowScroll()
              }
            }, {
              eventName: wr,
              fn: b
            } ]
          } ), [ r, b, u, n ] ),
          h = Object( s.a )( ( function () {
            var e = n(),
              t = {
                capture: !0
              };
            d.current = function () {
              return Ir( e, v, t )
            }, Dr( e, v, t )
          } ), [ n, v ] ),
          O = Object( s.a )( ( function () {
            c.current && f( !1 );
            var e = a();
            e || f( !1 ), c.current = !0, i( g ), h();
            var t, n = ( t = e, Object( m.e )( t.getBoundingClientRect() ).center );
            r.onLift( {
              clientSelection: n,
              movementMode: "SNAP"
            } )
          } ), [ h, r, a, i, g ] );
        return Object( s.a )( ( function ( e ) {
          if ( !u() ) {
            if ( e.defaultPrevented ) return;
            if ( !t( e ) ) return;
            if ( 32 !== e.keyCode ) return;
            return e.preventDefault(), void O()
          }
          return 27 === e.keyCode ? ( e.preventDefault(), void b() ) : 32 === e.keyCode ? ( e.preventDefault(), g(), void r.onDrop() ) : 40 === e.keyCode ? ( e.preventDefault(), void p.moveDown() ) : 38 === e.keyCode ? ( e.preventDefault(), void p.moveUp() ) : 39 === e.keyCode ? ( e.preventDefault(), void p.moveRight() ) : 37 === e.keyCode ? ( e.preventDefault(), void p.moveLeft() ) : void( Mr[ e.keyCode ] ? e.preventDefault() : Sr( e ) )
        } ), [ r, t, b, u, p, O, g ] )
      }
      var Fr = Or(),
        Wr = function () {};
      var Ur = function ( e ) {
          ! function ( e ) {
            return Boolean( rr( e ).SVGElement ) && e instanceof rr( e ).SVGElement
          }( e ) || f( !1 )
        },
        kr = function ( e ) {
          if ( e.hasAttribute( "data-react-beautiful-dnd-drag-handle" ) ) return Ur( e ), e;
          var t = e.querySelector( "[data-react-beautiful-dnd-drag-handle]" );
          return Ur( e ), t || f( !1 ), ir( t ) || f( !1 ), t
        };
      var Hr, Vr, zr, qr, Yr = null,
        Jr = {
          capture: !0
        },
        Xr = ( Hr = !1, Vr = function () {
          Hr && ( Hr = !1, window.removeEventListener( "focus", zr, Jr ) )
        }, zr = function () {
          Vr(), Yr = null
        }, ( qr = function () {
          Hr || ( Hr = !0, window.addEventListener( "focus", zr, Jr ) )
        } ).cancel = function () {
          return Vr()
        }, qr ),
        Kr = function ( e ) {
          Yr = e, Xr()
        },
        Qr = function ( e, t ) {
          if ( Yr && e === Yr ) {
            Yr = null, Xr.cancel();
            var n = kr( t );
            n && n.focus()
          }
        };

      function $r() {}

      function Zr( e ) {
        e.preventDefault()
      }

      function ei( e ) {
        var t = Object( l.useRef )( null ),
          n = Object( s.a )( ( function ( e ) {
            t.current && f( !1 ), t.current = {
              abort: e
            }
          } ), [] ),
          r = Object( s.a )( ( function () {
            t.current || f( !1 ), t.current = null
          } ), [] ),
          i = Object( s.a )( ( function () {
            t.current || f( !1 ), t.current.abort()
          } ), [] ),
          o = Kn( Pn ),
          a = o.canLift,
          c = o.style,
          d = e.isDragging,
          u = e.isEnabled,
          p = e.draggableId,
          g = e.callbacks,
          b = e.getDraggableRef,
          m = e.getShouldRespectForcePress,
          v = e.canDragInteractiveElements,
          h = Rn( e );
        ! function ( e ) {
          var t = e.isEnabled,
            n = e.getDraggableRef;
          Object( l.useEffect )( ( function () {} ), [ n, t ] )
        }( {
          isEnabled: u,
          getDraggableRef: b
        } );
        var O = Object( s.a )( ( function () {
            return rr( b() )
          } ), [ b ] ),
          x = Object( s.a )( ( function ( e ) {
            return !!u && ( !t.current && ( !!a( p ) && Tr( e, v ) ) )
          } ), [ v, a, p, u ] ),
          D = function ( e ) {
            var t = Object( l.useRef )( !1 ),
              n = Rn( e ),
              r = e.getDraggableRef,
              i = Object( s.a )( ( function () {
                t.current = !0
              } ), [] ),
              o = Object( s.a )( ( function () {
                t.current = !1
              } ), [] );
            wn( ( function () {
              var e = n.current;
              if ( !e.isEnabled ) return $r;
              var i = r();
              i || f( !1 );
              var o = kr( i );
              return Qr( e.draggableId, o ),
                function () {
                  var e = n.current;
                  !!e.isEnabled && !!t.current && ( e.isDragging || e.isDropAnimating ) && Kr( e.draggableId )
                }
            } ), [ r, n ] );
            var a = Object( l.useRef )( null );
            return wn( ( function () {
              if ( a.current ) {
                var e = r();
                e && e !== a.current && t.current && n.current.isEnabled && kr( e ).focus()
              }
            } ) ), wn( ( function () {
              a.current = r()
            } ) ), {
              onBlur: o,
              onFocus: i
            }
          }( e ),
          I = D.onBlur,
          y = D.onFocus,
          w = Pr( Object( s.c )( ( function () {
            return {
              callbacks: g,
              getDraggableRef: b,
              getWindow: O,
              canStartCapturing: x,
              onCaptureStart: n,
              onCaptureEnd: r,
              getShouldRespectForcePress: m
            }
          } ), [ g, b, O, x, n, r, m ] ) ),
          E = _r( Object( s.c )( ( function () {
            return {
              callbacks: g,
              getDraggableRef: b,
              getWindow: O,
              canStartCapturing: x,
              onCaptureStart: n,
              onCaptureEnd: r
            }
          } ), [ g, x, b, O, r, n ] ) ),
          j = function ( e ) {
            var t = e.callbacks,
              n = e.getWindow,
              r = e.canStartCapturing,
              i = e.getShouldRespectForcePress,
              o = e.onCaptureStart,
              a = e.onCaptureEnd,
              c = Object( l.useRef )( null ),
              d = Object( l.useRef )( !1 ),
              u = Object( l.useRef )( !1 ),
              p = Object( l.useRef )( Wr ),
              g = Object( s.a )( ( function () {
                return Boolean( c.current || d.current )
              } ), [] ),
              b = Object( s.c )( ( function () {
                return jr( n )
              } ), [ n ] ),
              m = Object( s.c )( ( function () {
                return g() && f( !1 ), yr( t )
              } ), [ t, g ] ),
              v = Object( s.a )( ( function () {
                if ( g() ) {
                  if ( m.cancel(), p.current(), Fr.reset(), u.current = !1, a(), d.current ) return b.preventNext(), void( d.current = !1 );
                  var e = c.current;
                  e || f( !1 ), clearTimeout( e.longPressTimerId ), c.current = null
                }
              } ), [ g, a, b, m ] ),
              h = Object( s.a )( ( function () {
                var e = d.current;
                v(), e && t.onCancel()
              } ), [ t, v ] ),
              O = Object( s.c )( ( function () {
                return g() && f( !1 ), [ {
                  eventName: "touchmove",
                  options: {
                    passive: !1,
                    capture: !1
                  },
                  fn: function ( e ) {
                    if ( d.current ) {
                      u.current || ( u.current = !0 );
                      var t = e.touches[ 0 ];
                      if ( t ) {
                        var n = {
                          x: t.clientX,
                          y: t.clientY
                        };
                        e.preventDefault(), m.move( n )
                      }
                    } else v()
                  }
                }, {
                  eventName: "touchend",
                  fn: function ( e ) {
                    d.current ? ( e.preventDefault(), v(), t.onDrop() ) : v()
                  }
                }, {
                  eventName: "touchcancel",
                  fn: function ( e ) {
                    d.current ? ( e.preventDefault(), h() ) : v()
                  }
                }, {
                  eventName: "touchstart",
                  fn: h
                }, {
                  eventName: "orientationchange",
                  fn: h
                }, {
                  eventName: "resize",
                  fn: h
                }, {
                  eventName: "scroll",
                  options: {
                    passive: !0,
                    capture: !1
                  },
                  fn: function () {
                    c.current ? v() : m.windowScrollMove()
                  }
                }, {
                  eventName: "contextmenu",
                  fn: function ( e ) {
                    e.preventDefault()
                  }
                }, {
                  eventName: "keydown",
                  fn: function ( e ) {
                    d.current ? ( 27 === e.keyCode && e.preventDefault(), h() ) : h()
                  }
                }, {
                  eventName: "touchforcechange",
                  fn: function ( e ) {
                    if ( e.touches[ 0 ].force >= .15 ) {
                      var t = i();
                      if ( !c.current ) return t ? u.current ? void e.preventDefault() : void h() : void e.preventDefault();
                      t && h()
                    }
                  }
                }, {
                  eventName: wr,
                  fn: h
                } ]
              } ), [ t, h, g, i, m, v ] ),
              x = Object( s.a )( ( function () {
                var e = n(),
                  t = {
                    capture: !0
                  };
                p.current = function () {
                  return Ir( e, O, t )
                }, Dr( e, O, t )
              } ), [ n, O ] ),
              D = Object( s.a )( ( function () {
                var e = c.current;
                e || f( !1 ), d.current = !0, c.current = null, u.current = !1, t.onLift( {
                  clientSelection: e.point,
                  movementMode: "FLUID"
                } )
              } ), [ t ] ),
              I = Object( s.a )( ( function ( e ) {
                c.current && f( !1 );
                var t = e.touches[ 0 ],
                  n = {
                    point: {
                      x: t.clientX,
                      y: t.clientY
                    },
                    longPressTimerId: setTimeout( D, 120 )
                  };
                c.current = n, o( v ), x()
              } ), [ x, o, D, v ] );
            return wn( ( function () {
                return Dr( window, [ {
                  eventName: "touchmove",
                  fn: Wr,
                  options: {
                    capture: !1,
                    passive: !1
                  }
                } ] )
              } ), [] ),
              function ( e ) {
                Fr.isHandled() || ( g() && f( !1 ), r( e ) && ( Fr.handle(), I( e ) ) )
              }
          }( Object( s.c )( ( function () {
            return {
              callbacks: g,
              getDraggableRef: b,
              getWindow: O,
              canStartCapturing: x,
              getShouldRespectForcePress: m,
              onCaptureStart: n,
              onCaptureEnd: r
            }
          } ), [ g, b, O, x, m, n, r ] ) );
        return wn( ( function () {
          return function () {
            t.current && ( i(), h.current.isDragging && h.current.callbacks.onCancel() )
          }
        } ), [] ), !u && t.current && ( i(), h.current.isDragging && g.onCancel() ), wn( ( function () {
          !d && t.current && i()
        } ), [ i, d ] ), Object( s.c )( ( function () {
          return u ? {
            onMouseDown: w,
            onKeyDown: E,
            onTouchStart: j,
            onFocus: y,
            onBlur: I,
            tabIndex: 0,
            "data-react-beautiful-dnd-drag-handle": c,
            "aria-roledescription": "Draggable item. Press space bar to lift",
            draggable: !1,
            onDragStart: Zr
          } : null
        } ), [ u, I, y, E, w, j, c ] )
      }

      function ti( e ) {
        var t = e.draggableId,
          n = e.index,
          r = e.getDraggableRef,
          i = Kn( Pn ).marshal,
          o = Kn( nr ),
          a = o.droppableId,
          c = o.type,
          d = Object( s.c )( ( function () {
            return {
              id: t,
              droppableId: a,
              type: c,
              index: n
            }
          } ), [ t, a, n, c ] ),
          u = Object( l.useRef )( d ),
          p = Object( s.a )( ( function ( e ) {
            var t = u.current,
              n = r();
            return n || f( !1 ),
              function ( e, t, n ) {
                void 0 === n && ( n = B );
                var r = window.getComputedStyle( t ),
                  i = t.getBoundingClientRect(),
                  o = Object( m.a )( i, r ),
                  a = Object( m.g )( o, n );
                return {
                  descriptor: e,
                  placeholder: {
                    client: o,
                    tagName: t.tagName.toLowerCase(),
                    display: r.display
                  },
                  displaceBy: {
                    x: o.marginBox.width,
                    y: o.marginBox.height
                  },
                  client: o,
                  page: a
                }
              }( t, n, e )
          } ), [ r ] );
        wn( ( function () {
          return i.registerDraggable( u.current, p ),
            function () {
              return i.unregisterDraggable( u.current )
            }
        } ), [ p, i ] ), wn( ( function () {
          if ( u.current !== d ) {
            var e = u.current;
            u.current = d, i.updateDraggable( e, d, p )
          }
        } ), [ d, p, i ] )
      }
      var ni = {
          lift: function ( e ) {
            return {
              type: "LIFT",
              payload: e
            }
          },
          move: mt,
          moveUp: function () {
            return {
              type: "MOVE_UP",
              payload: null
            }
          },
          moveDown: function () {
            return {
              type: "MOVE_DOWN",
              payload: null
            }
          },
          moveLeft: function () {
            return {
              type: "MOVE_LEFT",
              payload: null
            }
          },
          moveRight: function () {
            return {
              type: "MOVE_RIGHT",
              payload: null
            }
          },
          moveByWindowScroll: function ( e ) {
            return {
              type: "MOVE_BY_WINDOW_SCROLL",
              payload: e
            }
          },
          drop: ht,
          dropAnimationFinished: function () {
            return {
              type: "DROP_ANIMATION_FINISHED",
              payload: null
            }
          }
        },
        ri = Object( b.b )( ( function () {
          var e = Object( v.default )( ( function ( e, t, n, r ) {
              return {
                isDragging: !0,
                isDropAnimating: Boolean( r ),
                dropAnimation: r,
                mode: e,
                draggingOver: t,
                combineWith: n,
                combineTargetFor: null
              }
            } ) ),
            t = Object( v.default )( ( function ( e ) {
              return {
                isDragging: !1,
                isDropAnimating: !1,
                dropAnimation: null,
                mode: null,
                draggingOver: null,
                combineTargetFor: e,
                combineWith: null
              }
            } ) ),
            n = {
              mapped: {
                type: "SECONDARY",
                offset: B,
                combineTargetFor: null,
                shouldAnimateDisplacement: !0,
                snapshot: t( null )
              }
            },
            r = Object( v.default )( ( function ( e, t ) {
              return {
                x: e,
                y: t
              }
            } ) ),
            i = Object( v.default )( ( function ( t, n, r, i, o, a ) {
              return {
                mapped: {
                  type: "DRAGGING",
                  dropping: null,
                  draggingOver: i,
                  combineWith: o,
                  mode: n,
                  offset: t,
                  dimension: r,
                  forceShouldAnimate: a,
                  snapshot: e( n, i, o, null )
                }
              }
            } ) ),
            o = Object( v.default )( ( function ( e, n, r ) {
              return void 0 === n && ( n = null ), {
                mapped: {
                  type: "SECONDARY",
                  offset: e,
                  combineTargetFor: n,
                  shouldAnimateDisplacement: r,
                  snapshot: t( n )
                }
              }
            } ) ),
            a = function ( e, t, n ) {
              var i = n.movement.map[ e ],
                a = n.movement,
                c = n.merge,
                l = Boolean( c && c.combine.draggableId === e ),
                d = a.displacedBy.point,
                u = r( d.x, d.y );
              return l ? o( i ? u : B, t, !i || i.shouldAnimate ) : i && i.isVisible ? o( u, null, i.shouldAnimate ) : null
            };
          return function ( t, o ) {
            return function ( t, n ) {
              if ( t.isDragging ) {
                if ( t.critical.draggable.id !== n.draggableId ) return null;
                var o = t.current.client.offset,
                  a = t.dimensions.draggables[ n.draggableId ],
                  c = t.movementMode,
                  l = H( t.impact ),
                  d = ( s = t.impact ).merge ? s.merge.combine.draggableId : null,
                  u = t.forceShouldAnimate;
                return i( r( o.x, o.y ), c, a, l, d, u )
              }
              var s;
              if ( "DROP_ANIMATING" === t.phase ) {
                var p = t.completed;
                if ( p.result.draggableId !== n.draggableId ) return null;
                var f = t.dimensions.draggables[ n.draggableId ],
                  g = p.result,
                  b = g.mode,
                  m = cr( g ),
                  v = function ( e ) {
                    return e.combine ? e.combine.draggableId : null
                  }( g ),
                  h = {
                    duration: t.dropDuration,
                    curve: Ot,
                    moveTo: t.newHomeClientOffset,
                    opacity: v ? xt.drop : null,
                    scale: v ? Dt.drop : null
                  };
                return {
                  mapped: {
                    type: "DRAGGING",
                    offset: t.newHomeClientOffset,
                    dimension: f,
                    dropping: h,
                    draggingOver: m,
                    combineWith: v,
                    mode: b,
                    forceShouldAnimate: null,
                    snapshot: e( b, m, v, h )
                  }
                }
              }
              return null
            }( t, o ) || function ( e, t ) {
              if ( e.isDragging ) return e.critical.draggable.id === t.draggableId ? null : a( t.draggableId, e.critical.draggable.id, e.impact );
              if ( "DROP_ANIMATING" === e.phase ) {
                var n = e.completed;
                return n.result.draggableId === t.draggableId ? null : a( t.draggableId, n.result.draggableId, n.impact )
              }
              return null
            }( t, o ) || n
          }
        } ), ni, null, {
          context: Sn,
          pure: !0,
          areStatePropsEqual: ar
        } )( ( function ( e ) {
          var t = Object( l.useRef )( null ),
            n = Object( s.a )( ( function ( e ) {
              t.current = e
            } ), [] ),
            r = Object( s.a )( ( function () {
              return t.current
            } ), [] ),
            i = Kn( Pn );
          Object( l.useEffect )( ( function () {} ) );
          var o = e.children,
            a = e.draggableId,
            c = e.isDragDisabled,
            d = e.shouldRespectForcePress,
            u = e.disableInteractiveElementBlocking,
            p = e.index,
            g = e.mapped,
            b = e.moveUp,
            m = e.move,
            v = e.drop,
            h = e.moveDown,
            O = e.moveRight,
            x = e.moveLeft,
            D = e.moveByWindowScroll,
            I = e.lift,
            y = e.dropAnimationFinished;
          ti( Object( s.c )( ( function () {
            return {
              draggableId: a,
              index: p,
              getDraggableRef: r
            }
          } ), [ a, r, p ] ) );
          var w = Object( s.a )( ( function ( e ) {
              t.current || f( !1 ), c && f( !1 );
              var n = e.clientSelection,
                r = e.movementMode;
              I( {
                id: a,
                clientSelection: n,
                movementMode: r
              } )
            } ), [ a, c, I ] ),
            E = Object( s.a )( ( function () {
              return d
            } ), [ d ] ),
            j = Object( s.c )( ( function () {
              return {
                onLift: w,
                onMove: function ( e ) {
                  return m( {
                    client: e
                  } )
                },
                onDrop: function () {
                  return v( {
                    reason: "DROP"
                  } )
                },
                onCancel: function () {
                  return v( {
                    reason: "CANCEL"
                  } )
                },
                onMoveUp: b,
                onMoveDown: h,
                onMoveRight: O,
                onMoveLeft: x,
                onWindowScroll: function () {
                  return D( {
                    newScroll: Yt()
                  } )
                }
              }
            } ), [ v, m, D, h, x, O, b, w ] ),
            C = "DRAGGING" === g.type,
            S = "DRAGGING" === g.type && Boolean( g.dropping ),
            B = ei( Object( s.c )( ( function () {
              return {
                draggableId: a,
                isDragging: C,
                isDropAnimating: S,
                isEnabled: !c,
                callbacks: j,
                getDraggableRef: r,
                canDragInteractiveElements: u,
                getShouldRespectForcePress: E
              }
            } ), [ j, u, a, r, E, c, C, S ] ) ),
            L = Object( s.a )( ( function ( e ) {
              "DRAGGING" === g.type && g.dropping && "transform" === e.propertyName && y()
            } ), [ y, g ] );
          return o( Object( s.c )( ( function () {
            var e = mr( g ),
              t = "DRAGGING" === g.type && g.dropping ? L : null;
            return {
              innerRef: n,
              draggableProps: {
                "data-react-beautiful-dnd-draggable": i.style,
                style: e,
                onTransitionEnd: t
              },
              dragHandleProps: B
            }
          } ), [ i.style, B, g, L, n ] ), g.snapshot )
        } ) );
      ri.defaultProps = {
        isDragDisabled: !1,
        disableInteractiveElementBlocking: !1,
        shouldRespectForcePress: !1
      };
      var ii = n( "XcNc" ),
        oi = n( "OHh+" );
      const ai = () => {},
        ci = ( e, t, n ) => Math.min( t, Math.max( e, n ) ),
        li = ( e, t ) => e[ t ].path,
        di = ( e, t, n, r ) => {
          const i = n > t,
            o = li( e, t ),
            a = n === t,
            c = i ? e[ n ].path : e[ n - 1 ] && e[ n - 1 ].path,
            l = i || a ? e[ n + 1 ] && e[ n + 1 ].path : e[ n ].path;
          if ( a ) {
            if ( "number" != typeof r ) return o;
            if ( !c ) return o;
            const e = l ? l.length : 1,
              t = Math.max( o.length, c.length ),
              n = ci( e, t, r );
            if ( n === o.length ) return o;
            const i = Object( oi.c )( c, n );
            return Object( oi.g )( i, o )
          }
          if ( l && Object( oi.f )( l, c ) ) return l;
          if ( c && l && Object( oi.d )( c, l ) ) return i && Object( oi.d )( c, o ) ? c : l;
          if ( c ) {
            const e = ui( o, c, l, r ),
              t = Object( oi.c )( c, e );
            return Object( oi.g )( t, o )
          }
          return o
        },
        ui = ( e, t, n, r ) => {
          const i = t.length,
            o = n ? n.length : 1,
            a = e.length;
          return "number" == typeof r ? ci( o, i, r ) : a <= o ? o : i
        };
      class si extends l.Component {
        constructor( ...e ) {
          super( ...e ), c()( this, "patchDraggableProps", ( e, t ) => {
            const {
              path: n,
              offsetPerLevel: i
            } = this.props, o = e.style && e.style.transition ? [ e.style.transition ] : [];
            t.dropAnimation && o.push( `padding-left ${t.dropAnimation.duration}s ${t.dropAnimation.curve}` );
            const a = o.join( ", " );
            return Object( r.a )( Object( r.a )( {}, e ), {}, {
              style: Object( r.a )( Object( r.a )( {}, e.style ), {}, {
                paddingLeft: ( n.length - 1 ) * i,
                transition: a
              } )
            } )
          } )
        }
        shouldComponentUpdate( e ) {
          return !( t = this.props, n = e, r = [ "item", "provided", "snapshot", "onCollapse", "onExpand" ], void 0 === r.find( e => t[ e ] !== n[ e ] ) && Object( oi.e )( this.props.path, e.path ) );
          var t, n, r
        }
        render() {
          const {
            item: e,
            path: t,
            onExpand: n,
            onCollapse: r,
            renderItem: i,
            provided: o,
            snapshot: a,
            itemRef: c
          } = this.props, l = {
            draggableProps: this.patchDraggableProps( o.draggableProps, a ),
            dragHandleProps: o.dragHandleProps,
            innerRef: t => {
              c( e.id, t ), o.innerRef( t )
            }
          };
          return i( {
            item: e,
            depth: t.length - 1,
            onExpand: e => n( e, t ),
            onCollapse: e => r( e, t ),
            provided: l,
            snapshot: a
          } )
        }
      }
      class pi {
        constructor( e ) {
          this.delay = e
        }
        start( e ) {
          this.stop(), this.timeoutId = window.setTimeout( e, this.delay )
        }
        stop() {
          this.timeoutId && ( clearTimeout( this.timeoutId ), this.timeoutId = void 0 )
        }
      }
      n.d( t, "a", ( function () {
        return fi
      } ) );
      class fi extends l.Component {
        constructor( ...e ) {
          super( ...e ), c()( this, "state", {
            flattenedTree: [],
            draggedItemId: void 0
          } ), c()( this, "itemsElement", {} ), c()( this, "expandTimer", new pi( 500 ) ), c()( this, "onDragStart", e => {
            const {
              onDragStart: t
            } = this.props;
            this.dragState = {
              source: e.source,
              destination: e.source,
              mode: e.mode
            }, this.setState( {
              draggedItemId: e.draggableId
            } ), t && t( e.draggableId )
          } ), c()( this, "onDragUpdate", e => {
            const {
              onExpand: t
            } = this.props, {
              flattenedTree: n
            } = this.state;
            if ( this.dragState ) {
              if ( this.expandTimer.stop(), e.combine ) {
                const {
                  draggableId: r
                } = e.combine, i = ( ( e, t ) => e.find( e => e.item.id === t ) )( n, r );
                i && this.isExpandable( i ) && this.expandTimer.start( () => t( r, i.path ) )
              }
              this.dragState = Object( r.a )( Object( r.a )( {}, this.dragState ), {}, {
                destination: e.destination,
                combine: e.combine
              } )
            }
          } ), c()( this, "onDropAnimating", () => {
            this.expandTimer.stop()
          } ), c()( this, "onDragEnd", e => {
            const {
              onDragEnd: t,
              tree: n
            } = this.props, {
              flattenedTree: i
            } = this.state;
            this.expandTimer.stop();
            const o = Object( r.a )( Object( r.a )( {}, this.dragState ), {}, {
              source: e.source,
              destination: e.destination,
              combine: e.combine
            } );
            this.setState( {
              draggedItemId: void 0
            } );
            const {
              sourcePosition: a,
              destinationPosition: c
            } = ( ( e, t, n ) => {
              const {
                source: i,
                destination: o,
                combine: a,
                horizontalLevel: c
              } = n, l = li( t, i.index ), d = Object( ii.b )( e, l );
              if ( a ) return {
                sourcePosition: d,
                destinationPosition: {
                  parentId: a.draggableId
                }
              };
              if ( !o ) return {
                sourcePosition: d,
                destinationPosition: void 0
              };
              const u = di( t, i.index, o.index, c );
              return {
                sourcePosition: d,
                destinationPosition: Object( r.a )( {}, Object( ii.b )( e, u ) )
              }
            } )( n, i, o );
            t( a, c ), this.dragState = void 0
          } ), c()( this, "onPointerMove", () => {
            this.dragState && ( this.dragState = Object( r.a )( Object( r.a )( {}, this.dragState ), {}, {
              horizontalLevel: this.getDroppedLevel()
            } ) )
          } ), c()( this, "calculateEffectivePath", ( e, t ) => {
            const {
              flattenedTree: n,
              draggedItemId: r
            } = this.state;
            if ( this.dragState && r === e.item.id && ( this.dragState.destination || this.dragState.combine ) ) {
              const {
                source: e,
                destination: r,
                combine: i,
                horizontalLevel: o,
                mode: a
              } = this.dragState;
              if ( "SNAP" === a || t.isDropAnimating ) {
                if ( r ) return di( n, e.index, r.index, o );
                if ( i ) return di( n, e.index, ( ( e, t ) => e.findIndex( e => e.item.id === t ) )( n, i.draggableId ), o )
              }
            }
            return e.path
          } ), c()( this, "isExpandable", e => !!e.item.hasChildren && !e.item.isExpanded ), c()( this, "getDroppedLevel", () => {
            const {
              offsetPerLevel: e
            } = this.props, {
              draggedItemId: t
            } = this.state;
            if ( !this.dragState || !this.containerElement ) return;
            const n = Object( m.d )( this.containerElement ).contentBox.left,
              r = this.itemsElement[ t ];
            if ( r ) {
              const t = Object( m.d )( r ).contentBox.left,
                i = Math.max( t - n, 0 );
              return Math.floor( ( i + e / 2 ) / e ) + 1
            }
          } ), c()( this, "patchDroppableProvided", e => Object( r.a )( Object( r.a )( {}, e ), {}, {
            innerRef: t => {
              this.containerElement = t, e.innerRef( t )
            }
          } ) ), c()( this, "setItemRef", ( e, t ) => {
            t && ( this.itemsElement[ e ] = t )
          } ), c()( this, "renderItems", () => {
            const {
              flattenedTree: e
            } = this.state;
            return e.map( this.renderItem )
          } ), c()( this, "renderItem", ( e, t ) => {
            const {
              isDragEnabled: n
            } = this.props, r = "function" == typeof n ? !n( e.item ) : !n;
            return d.a.createElement( ri, {
              key: e.item.id,
              draggableId: e.item.id.toString(),
              index: t,
              isDragDisabled: r
            }, this.renderDraggableItem( e ) )
          } ), c()( this, "renderDraggableItem", e => ( t, n ) => {
            const {
              renderItem: r,
              onExpand: i,
              onCollapse: o,
              offsetPerLevel: a
            } = this.props, c = this.calculateEffectivePath( e, n );
            return n.isDropAnimating && this.onDropAnimating(), d.a.createElement( si, {
              key: e.item.id,
              item: e.item,
              path: c,
              onExpand: i,
              onCollapse: o,
              renderItem: r,
              provided: t,
              snapshot: n,
              itemRef: this.setItemRef,
              offsetPerLevel: a
            } )
          } )
        }
        static getDerivedStateFromProps( e, t ) {
          const {
            draggedItemId: n
          } = t, {
            tree: i
          } = e, o = fi.closeParentIfNeeded( i, n ), a = Object( ii.a )( o );
          return Object( r.a )( Object( r.a )( {}, t ), {}, {
            flattenedTree: a
          } )
        }
        static closeParentIfNeeded( e, t ) {
          return t ? Object( ii.d )( e, t, {
            isExpanded: !1
          } ) : e
        }
        render() {
          const {
            isNestingEnabled: e
          } = this.props, t = this.renderItems();
          return d.a.createElement( Gn, {
            onDragStart: this.onDragStart,
            onDragEnd: this.onDragEnd,
            onDragUpdate: this.onDragUpdate
          }, d.a.createElement( sr, {
            droppableId: "tree",
            isCombineEnabled: e,
            ignoreContainerClipping: !0
          }, e => {
            const n = this.patchDroppableProvided( e );
            return d.a.createElement( "div", o()( {
              ref: n.innerRef,
              style: {
                pointerEvents: "auto"
              },
              onTouchMove: this.onPointerMove,
              onMouseMove: this.onPointerMove
            }, n.droppableProps ), t, e.placeholder )
          } ) )
        }
      }
      c()( fi, "defaultProps", {
        tree: {
          children: []
        },
        onExpand: ai,
        onCollapse: ai,
        onDragStart: ai,
        onDragEnd: ai,
        renderItem: ai,
        offsetPerLevel: 35,
        isDragEnabled: !1,
        isNestingEnabled: !1
      } )
    }
  }
] );
//# sourceMappingURL=97.JTyWQSoS9u.js.map
