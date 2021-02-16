( window.webpackJsonp = window.webpackJsonp || [] ).push( [
  [ 27 ], {
    sKpK: function ( e, t, r ) {
      "use strict";
      r.d( t, "a", ( function () {
        return xn
      } ) ), r.d( t, "b", ( function () {
        return li
      } ) ), r.d( t, "c", ( function () {
        return pi
      } ) );
      var n = r( "ERkP" ),
        i = r.n( n ),
        a = r( "3AlC" ),
        o = r( "JCzS" ),
        l = r( "pneb" ),
        c = r( "cwAB" ),
        u = r( "6yyN" ),
        d = r( "PgQS" ),
        s = r( "lSUb" ),
        p = r( "z0N8" ),
        f = r.n( p ),
        g = r( "TPw6" ),
        b = r.n( g ),
        v = r( "QXP/" ),
        m = r( "hc8B" ),
        h = r.n( m ),
        y = r( "OCF2" ),
        I = r.n( y ),
        O = r( "7nmT" ),
        D = r.n( O );
      r( "jG6G" );

      function x( e, t ) {}
      x.bind( null, "warn" ), x.bind( null, "error" );

      function E() {}

      function w( e, t, r ) {
        var n = t.map( ( function ( t ) {
          var n = function ( e, t ) {
            return Object( l.a )( {}, e, t )
          }( r, t.options );
          return e.addEventListener( t.eventName, t.fn, n ),
            function () {
              e.removeEventListener( t.eventName, t.fn, n )
            }
        } ) );
        return function () {
          n.forEach( ( function ( e ) {
            e()
          } ) )
        }
      }

      function C( e ) {
        this.message = e
      }

      function A( e, t ) {
        if ( !e ) throw new C( "Invariant failed" )
      }
      C.prototype.toString = function () {
        return this.message
      };
      var j = function ( e ) {
          function t() {
            for ( var t, r = arguments.length, n = new Array( r ), i = 0; i < r; i++ ) n[ i ] = arguments[ i ];
            return ( t = e.call.apply( e, [ this ].concat( n ) ) || this ).callbacks = null, t.unbind = E, t.onWindowError = function ( e ) {
              var r = t.getCallbacks();
              r.isDragging() && r.tryAbort(), e.error instanceof C && e.preventDefault()
            }, t.getCallbacks = function () {
              if ( !t.callbacks ) throw new Error( "Unable to find AppCallbacks in <ErrorBoundary/>" );
              return t.callbacks
            }, t.setCallbacks = function ( e ) {
              t.callbacks = e
            }, t
          }
          Object( o.a )( t, e );
          var r = t.prototype;
          return r.componentDidMount = function () {
            this.unbind = w( window, [ {
              eventName: "error",
              fn: this.onWindowError
            } ] )
          }, r.componentWillUnmount = function () {
            this.unbind()
          }, r.componentDidCatch = function ( e ) {
            if ( !( e instanceof C ) ) throw e;
            this.setState( {} )
          }, r.render = function () {
            return this.props.children( this.setCallbacks )
          }, t
        }( i.a.Component ),
        B = function ( e ) {
          return e + 1
        },
        R = function ( e, t ) {
          var r = e.droppableId === t.droppableId,
            n = B( e.index ),
            i = B( t.index );
          return r ? "\n      You have moved the item from position " + n + "\n      to position " + i + "\n    " : "\n    You have moved the item from position " + n + "\n    in list " + e.droppableId + "\n    to list " + t.droppableId + "\n    in position " + i + "\n  "
        },
        N = function ( e, t, r ) {
          return t.droppableId === r.droppableId ? "\n      The item " + e + "\n      has been combined with " + r.draggableId : "\n      The item " + e + "\n      in list " + t.droppableId + "\n      has been combined with " + r.draggableId + "\n      in list " + r.droppableId + "\n    "
        },
        S = function ( e ) {
          return "\n  The item has returned to its starting position\n  of " + B( e.index ) + "\n"
        },
        P = "Draggable item. Ensure your screen reader is not in browse mode and then press space bar to lift.",
        L = function ( e ) {
          return "\n  You have lifted an item in position " + B( e.source.index ) + ".\n  Use the arrow keys to move, space bar to drop, and escape to cancel.\n"
        },
        T = function ( e ) {
          var t = e.destination;
          if ( t ) return R( e.source, t );
          var r = e.combine;
          return r ? N( e.draggableId, e.source, r ) : "You are over an area that cannot be dropped on"
        },
        G = function ( e ) {
          if ( "CANCEL" === e.reason ) return "\n      Movement cancelled.\n      " + S( e.source ) + "\n    ";
          var t = e.destination,
            r = e.combine;
          return t ? "\n      You have dropped the item.\n      " + R( e.source, t ) + "\n    " : r ? "\n      You have dropped the item.\n      " + N( e.draggableId, e.source, r ) + "\n    " : "\n    The item has been dropped while not over a drop area.\n    " + S( e.source ) + "\n  "
        },
        M = {
          x: 0,
          y: 0
        },
        _ = function ( e, t ) {
          return {
            x: e.x + t.x,
            y: e.y + t.y
          }
        },
        F = function ( e, t ) {
          return {
            x: e.x - t.x,
            y: e.y - t.y
          }
        },
        k = function ( e, t ) {
          return e.x === t.x && e.y === t.y
        },
        W = function ( e ) {
          return {
            x: 0 !== e.x ? -e.x : 0,
            y: 0 !== e.y ? -e.y : 0
          }
        },
        U = function ( e, t, r ) {
          var n;
          return void 0 === r && ( r = 0 ), ( n = {} )[ e ] = t, n[ "x" === e ? "y" : "x" ] = r, n
        },
        H = function ( e, t ) {
          return Math.sqrt( Math.pow( t.x - e.x, 2 ) + Math.pow( t.y - e.y, 2 ) )
        },
        V = function ( e, t ) {
          return Math.min.apply( Math, t.map( ( function ( t ) {
            return H( e, t )
          } ) ) )
        },
        z = function ( e ) {
          return function ( t ) {
            return {
              x: e( t.x ),
              y: e( t.y )
            }
          }
        },
        q = function ( e, t ) {
          return {
            top: e.top + t.y,
            left: e.left + t.x,
            bottom: e.bottom + t.y,
            right: e.right + t.x
          }
        },
        Y = function ( e ) {
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
        J = function ( e, t ) {
          return t && t.shouldClipSubject ? function ( e, t ) {
            var r = Object( d.e )( {
              top: Math.max( t.top, e.top ),
              right: Math.min( t.right, e.right ),
              bottom: Math.min( t.bottom, e.bottom ),
              left: Math.max( t.left, e.left )
            } );
            return r.width <= 0 || r.height <= 0 ? null : r
          }( t.pageMarginBox, e ) : Object( d.e )( e )
        },
        X = function ( e ) {
          var t = e.page,
            r = e.withPlaceholder,
            n = e.axis,
            i = e.frame,
            a = function ( e, t, r ) {
              var n;
              return r && r.increasedBy ? Object( l.a )( {}, e, ( ( n = {} )[ t.end ] = e[ t.end ] + r.increasedBy[ t.line ], n ) ) : e
            }( function ( e, t ) {
              return t ? q( e, t.scroll.diff.displacement ) : e
            }( t.marginBox, i ), n, r );
          return {
            page: t,
            withPlaceholder: r,
            active: J( a, i )
          }
        },
        K = function ( e, t ) {
          e.frame || A( !1 );
          var r = e.frame,
            n = F( t, r.scroll.initial ),
            i = W( n ),
            a = Object( l.a )( {}, r, {
              scroll: {
                initial: r.scroll.initial,
                current: t,
                diff: {
                  value: n,
                  displacement: i
                },
                max: r.scroll.max
              }
            } ),
            o = X( {
              page: e.subject.page,
              withPlaceholder: e.subject.withPlaceholder,
              axis: e.axis,
              frame: a
            } );
          return Object( l.a )( {}, e, {
            frame: a,
            subject: o
          } )
        };

      function Q( e ) {
        return f()( e )
      }

      function Z( e, t ) {
        if ( e.findIndex ) return e.findIndex( t );
        for ( var r = 0; r < e.length; r++ )
          if ( t( e[ r ] ) ) return r;
        return -1
      }

      function $( e, t ) {
        if ( e.find ) return e.find( t );
        var r = Z( e, t );
        return -1 !== r ? e[ r ] : void 0
      }

      function ee( e ) {
        return Array.prototype.slice.call( e )
      }
      var te = Object( s.default )( ( function ( e ) {
          return e.reduce( ( function ( e, t ) {
            return e[ t.descriptor.id ] = t, e
          } ), {} )
        } ) ),
        re = Object( s.default )( ( function ( e ) {
          return e.reduce( ( function ( e, t ) {
            return e[ t.descriptor.id ] = t, e
          } ), {} )
        } ) ),
        ne = Object( s.default )( ( function ( e ) {
          return Q( e )
        } ) ),
        ie = Object( s.default )( ( function ( e ) {
          return Q( e )
        } ) ),
        ae = Object( s.default )( ( function ( e, t ) {
          return ie( t ).filter( ( function ( t ) {
            return e === t.descriptor.droppableId
          } ) ).sort( ( function ( e, t ) {
            return e.descriptor.index - t.descriptor.index
          } ) )
        } ) );

      function oe( e ) {
        return e.at && "REORDER" === e.at.type ? e.at.destination : null
      }

      function le( e ) {
        return e.at && "COMBINE" === e.at.type ? e.at.combine : null
      }
      var ce = Object( s.default )( ( function ( e, t ) {
          return t.filter( ( function ( t ) {
            return t.descriptor.id !== e.descriptor.id
          } ) )
        } ) ),
        ue = function ( e, t ) {
          return e.descriptor.droppableId === t.descriptor.id
        },
        de = {
          point: M,
          value: 0
        },
        se = {
          invisible: {},
          visible: {},
          all: []
        },
        pe = {
          displaced: se,
          displacedBy: de,
          at: null
        },
        fe = function ( e, t ) {
          return function ( r ) {
            return e <= r && r <= t
          }
        },
        ge = function ( e ) {
          var t = fe( e.top, e.bottom ),
            r = fe( e.left, e.right );
          return function ( n ) {
            if ( t( n.top ) && t( n.bottom ) && r( n.left ) && r( n.right ) ) return !0;
            var i = t( n.top ) || t( n.bottom ),
              a = r( n.left ) || r( n.right );
            if ( i && a ) return !0;
            var o = n.top < e.top && n.bottom > e.bottom,
              l = n.left < e.left && n.right > e.right;
            return !( !o || !l ) || ( o && a || l && i )
          }
        },
        be = function ( e ) {
          var t = fe( e.top, e.bottom ),
            r = fe( e.left, e.right );
          return function ( e ) {
            return t( e.top ) && t( e.bottom ) && r( e.left ) && r( e.right )
          }
        },
        ve = {
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
        me = {
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
        he = function ( e ) {
          var t = e.target,
            r = e.destination,
            n = e.viewport,
            i = e.withDroppableDisplacement,
            a = e.isVisibleThroughFrameFn,
            o = i ? function ( e, t ) {
              var r = t.frame ? t.frame.scroll.diff.displacement : M;
              return q( e, r )
            }( t, r ) : t;
          return function ( e, t, r ) {
            return !!t.subject.active && r( t.subject.active )( e )
          }( o, r, a ) && function ( e, t, r ) {
            return r( t )( e )
          }( o, n, a )
        },
        ye = function ( e ) {
          return he( Object( l.a )( {}, e, {
            isVisibleThroughFrameFn: ge
          } ) )
        },
        Ie = function ( e ) {
          return he( Object( l.a )( {}, e, {
            isVisibleThroughFrameFn: be
          } ) )
        };

      function Oe( e ) {
        var t = e.afterDragging,
          r = e.destination,
          n = e.displacedBy,
          i = e.viewport,
          a = e.forceShouldAnimate,
          o = e.last;
        return t.reduce( ( function ( e, t ) {
          var l = function ( e, t ) {
              var r = e.page.marginBox,
                n = {
                  top: t.point.y,
                  right: 0,
                  bottom: 0,
                  left: t.point.x
                };
              return Object( d.e )( Object( d.c )( r, n ) )
            }( t, n ),
            c = t.descriptor.id;
          if ( e.all.push( c ), !ye( {
              target: l,
              destination: r,
              viewport: i,
              withDroppableDisplacement: !0
            } ) ) return e.invisible[ t.descriptor.id ] = !0, e;
          var u = {
            draggableId: c,
            shouldAnimate: function ( e, t, r ) {
              if ( "boolean" == typeof r ) return r;
              if ( !t ) return !0;
              var n = t.invisible,
                i = t.visible;
              if ( n[ e ] ) return !1;
              var a = i[ e ];
              return !a || a.shouldAnimate
            }( c, o, a )
          };
          return e.visible[ c ] = u, e
        } ), {
          all: [],
          visible: {},
          invisible: {}
        } )
      }

      function De( e ) {
        var t = e.insideDestination,
          r = e.inHomeList,
          n = e.displacedBy,
          i = e.destination,
          a = function ( e, t ) {
            if ( !e.length ) return 0;
            var r = e[ e.length - 1 ].descriptor.index;
            return t.inHomeList ? r : r + 1
          }( t, {
            inHomeList: r
          } );
        return {
          displaced: se,
          displacedBy: n,
          at: {
            type: "REORDER",
            destination: {
              droppableId: i.descriptor.id,
              index: a
            }
          }
        }
      }

      function xe( e ) {
        var t = e.draggable,
          r = e.insideDestination,
          n = e.destination,
          i = e.viewport,
          a = e.displacedBy,
          o = e.last,
          l = e.index,
          c = e.forceShouldAnimate,
          u = ue( t, n );
        if ( null == l ) return De( {
          insideDestination: r,
          inHomeList: u,
          displacedBy: a,
          destination: n
        } );
        var d = $( r, ( function ( e ) {
          return e.descriptor.index === l
        } ) );
        if ( !d ) return De( {
          insideDestination: r,
          inHomeList: u,
          displacedBy: a,
          destination: n
        } );
        var s = ce( t, r ),
          p = r.indexOf( d );
        return {
          displaced: Oe( {
            afterDragging: s.slice( p ),
            destination: n,
            displacedBy: a,
            last: o,
            viewport: i.frame,
            forceShouldAnimate: c
          } ),
          displacedBy: a,
          at: {
            type: "REORDER",
            destination: {
              droppableId: n.descriptor.id,
              index: l
            }
          }
        }
      }

      function Ee( e, t ) {
        return Boolean( t.effected[ e ] )
      }
      var we = function ( e ) {
          var t = e.isMovingForward,
            r = e.isInHomeList,
            n = e.draggable,
            i = e.draggables,
            a = e.destination,
            o = e.insideDestination,
            l = e.previousImpact,
            c = e.viewport,
            u = e.afterCritical,
            d = l.at;
          if ( d || A( !1 ), "REORDER" === d.type ) {
            var s = function ( e ) {
              var t = e.isMovingForward,
                r = e.isInHomeList,
                n = e.insideDestination,
                i = e.location;
              if ( !n.length ) return null;
              var a = i.index,
                o = t ? a + 1 : a - 1,
                l = n[ 0 ].descriptor.index,
                c = n[ n.length - 1 ].descriptor.index;
              return o < l || o > ( r ? c : c + 1 ) ? null : o
            }( {
              isMovingForward: t,
              isInHomeList: r,
              location: d.destination,
              insideDestination: o
            } );
            return null == s ? null : xe( {
              draggable: n,
              insideDestination: o,
              destination: a,
              viewport: c,
              last: l.displaced,
              displacedBy: l.displacedBy,
              index: s
            } )
          }
          var p = function ( e ) {
            var t = e.isMovingForward,
              r = e.destination,
              n = e.draggables,
              i = e.combine,
              a = e.afterCritical;
            if ( !r.isCombineEnabled ) return null;
            var o = i.draggableId,
              l = n[ o ].descriptor.index;
            return Ee( o, a ) ? t ? l : l - 1 : t ? l + 1 : l
          }( {
            isMovingForward: t,
            destination: a,
            displaced: l.displaced,
            draggables: i,
            combine: d.combine,
            afterCritical: u
          } );
          return null == p ? null : xe( {
            draggable: n,
            insideDestination: o,
            destination: a,
            viewport: c,
            last: l.displaced,
            displacedBy: l.displacedBy,
            index: p
          } )
        },
        Ce = function ( e ) {
          var t = e.afterCritical,
            r = e.impact,
            n = e.draggables,
            i = le( r );
          i || A( !1 );
          var a = i.draggableId,
            o = n[ a ].page.borderBox.center,
            l = function ( e ) {
              var t = e.displaced,
                r = e.afterCritical,
                n = e.combineWith,
                i = e.displacedBy,
                a = Boolean( t.visible[ n ] || t.invisible[ n ] );
              return Ee( n, r ) ? a ? M : W( i.point ) : a ? i.point : M
            }( {
              displaced: r.displaced,
              afterCritical: t,
              combineWith: a,
              displacedBy: r.displacedBy
            } );
          return _( o, l )
        },
        Ae = function ( e, t ) {
          return t.margin[ e.start ] + t.borderBox[ e.size ] / 2
        },
        je = function ( e, t, r ) {
          return t[ e.crossAxisStart ] + r.margin[ e.crossAxisStart ] + r.borderBox[ e.crossAxisSize ] / 2
        },
        Be = function ( e ) {
          var t = e.axis,
            r = e.moveRelativeTo,
            n = e.isMoving;
          return U( t.line, r.marginBox[ t.end ] + Ae( t, n ), je( t, r.marginBox, n ) )
        },
        Re = function ( e ) {
          var t = e.axis,
            r = e.moveRelativeTo,
            n = e.isMoving;
          return U( t.line, r.marginBox[ t.start ] - function ( e, t ) {
            return t.margin[ e.end ] + t.borderBox[ e.size ] / 2
          }( t, n ), je( t, r.marginBox, n ) )
        },
        Ne = function ( e ) {
          var t = e.impact,
            r = e.draggable,
            n = e.draggables,
            i = e.droppable,
            a = e.afterCritical,
            o = ae( i.descriptor.id, n ),
            l = r.page,
            c = i.axis;
          if ( !o.length ) return function ( e ) {
            var t = e.axis,
              r = e.moveInto,
              n = e.isMoving;
            return U( t.line, r.contentBox[ t.start ] + Ae( t, n ), je( t, r.contentBox, n ) )
          }( {
            axis: c,
            moveInto: i.page,
            isMoving: l
          } );
          var u = t.displaced,
            s = t.displacedBy,
            p = u.all[ 0 ];
          if ( p ) {
            var f = n[ p ];
            if ( Ee( p, a ) ) return Re( {
              axis: c,
              moveRelativeTo: f.page,
              isMoving: l
            } );
            var g = Object( d.f )( f.page, s.point );
            return Re( {
              axis: c,
              moveRelativeTo: g,
              isMoving: l
            } )
          }
          var b = o[ o.length - 1 ];
          if ( b.descriptor.id === r.descriptor.id ) return l.borderBox.center;
          if ( Ee( b.descriptor.id, a ) ) {
            var v = Object( d.f )( b.page, W( a.displacedBy.point ) );
            return Be( {
              axis: c,
              moveRelativeTo: v,
              isMoving: l
            } )
          }
          return Be( {
            axis: c,
            moveRelativeTo: b.page,
            isMoving: l
          } )
        },
        Se = function ( e, t ) {
          var r = e.frame;
          return r ? _( t, r.scroll.diff.displacement ) : t
        },
        Pe = function ( e ) {
          var t = function ( e ) {
              var t = e.impact,
                r = e.draggable,
                n = e.droppable,
                i = e.draggables,
                a = e.afterCritical,
                o = r.page.borderBox.center,
                l = t.at;
              return n && l ? "REORDER" === l.type ? Ne( {
                impact: t,
                draggable: r,
                draggables: i,
                droppable: n,
                afterCritical: a
              } ) : Ce( {
                impact: t,
                draggables: i,
                afterCritical: a
              } ) : o
            }( e ),
            r = e.droppable;
          return r ? Se( r, t ) : t
        },
        Le = function ( e, t ) {
          var r = F( t, e.scroll.initial ),
            n = W( r );
          return {
            frame: Object( d.e )( {
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
                value: r,
                displacement: n
              }
            }
          }
        };

      function Te( e, t ) {
        return e.map( ( function ( e ) {
          return t[ e ]
        } ) )
      }
      var Ge = function ( e ) {
          var t = e.pageBorderBoxCenter,
            r = e.draggable,
            n = function ( e, t ) {
              return _( e.scroll.diff.displacement, t )
            }( e.viewport, t ),
            i = F( n, r.page.borderBox.center );
          return _( r.client.borderBox.center, i )
        },
        Me = function ( e ) {
          var t = e.draggable,
            r = e.destination,
            n = e.newPageBorderBoxCenter,
            i = e.viewport,
            a = e.withDroppableDisplacement,
            o = e.onlyOnMainAxis,
            c = void 0 !== o && o,
            u = F( n, t.page.borderBox.center ),
            d = {
              target: q( t.page.borderBox, u ),
              destination: r,
              withDroppableDisplacement: a,
              viewport: i
            };
          return c ? function ( e ) {
            return he( Object( l.a )( {}, e, {
              isVisibleThroughFrameFn: ( t = e.destination.axis, function ( e ) {
                var r = fe( e.top, e.bottom ),
                  n = fe( e.left, e.right );
                return function ( e ) {
                  return t === ve ? r( e.top ) && r( e.bottom ) : n( e.left ) && n( e.right )
                }
              } )
            } ) );
            var t
          }( d ) : Ie( d )
        },
        _e = function ( e ) {
          var t = e.isMovingForward,
            r = e.draggable,
            n = e.destination,
            i = e.draggables,
            a = e.previousImpact,
            o = e.viewport,
            c = e.previousPageBorderBoxCenter,
            u = e.previousClientSelection,
            d = e.afterCritical;
          if ( !n.isEnabled ) return null;
          var s = ae( n.descriptor.id, i ),
            p = ue( r, n ),
            f = function ( e ) {
              var t = e.isMovingForward,
                r = e.draggable,
                n = e.destination,
                i = e.insideDestination,
                a = e.previousImpact;
              if ( !n.isCombineEnabled ) return null;
              if ( !oe( a ) ) return null;

              function o( e ) {
                var t = {
                  type: "COMBINE",
                  combine: {
                    draggableId: e,
                    droppableId: n.descriptor.id
                  }
                };
                return Object( l.a )( {}, a, {
                  at: t
                } )
              }
              var c = a.displaced.all,
                u = c.length ? c[ 0 ] : null;
              if ( t ) return u ? o( u ) : null;
              var d = ce( r, i );
              if ( !u ) return d.length ? o( d[ d.length - 1 ].descriptor.id ) : null;
              var s = Z( d, ( function ( e ) {
                return e.descriptor.id === u
              } ) ); - 1 === s && A( !1 );
              var p = s - 1;
              return p < 0 ? null : o( d[ p ].descriptor.id )
            }( {
              isMovingForward: t,
              draggable: r,
              destination: n,
              insideDestination: s,
              previousImpact: a
            } ) || we( {
              isMovingForward: t,
              isInHomeList: p,
              draggable: r,
              draggables: i,
              destination: n,
              insideDestination: s,
              previousImpact: a,
              viewport: o,
              afterCritical: d
            } );
          if ( !f ) return null;
          var g = Pe( {
            impact: f,
            draggable: r,
            droppable: n,
            draggables: i,
            afterCritical: d
          } );
          if ( Me( {
              draggable: r,
              destination: n,
              newPageBorderBoxCenter: g,
              viewport: o.frame,
              withDroppableDisplacement: !1,
              onlyOnMainAxis: !0
            } ) ) return {
            clientSelection: Ge( {
              pageBorderBoxCenter: g,
              draggable: r,
              viewport: o
            } ),
            impact: f,
            scrollJumpRequest: null
          };
          var b = F( g, c );
          return {
            clientSelection: u,
            impact: function ( e ) {
              var t = e.impact,
                r = e.viewport,
                n = e.destination,
                i = e.draggables,
                a = e.maxScrollChange,
                o = Le( r, _( r.scroll.current, a ) ),
                c = n.frame ? K( n, _( n.frame.scroll.current, a ) ) : n,
                u = t.displaced,
                d = Oe( {
                  afterDragging: Te( u.all, i ),
                  destination: n,
                  displacedBy: t.displacedBy,
                  viewport: o.frame,
                  last: u,
                  forceShouldAnimate: !1
                } ),
                s = Oe( {
                  afterDragging: Te( u.all, i ),
                  destination: c,
                  displacedBy: t.displacedBy,
                  viewport: r.frame,
                  last: u,
                  forceShouldAnimate: !1
                } ),
                p = {},
                f = {},
                g = [ u, d, s ];
              return u.all.forEach( ( function ( e ) {
                var t = function ( e, t ) {
                  for ( var r = 0; r < t.length; r++ ) {
                    var n = t[ r ].visible[ e ];
                    if ( n ) return n
                  }
                  return null
                }( e, g );
                t ? f[ e ] = t : p[ e ] = !0
              } ) ), Object( l.a )( {}, t, {
                displaced: {
                  all: u.all,
                  invisible: p,
                  visible: f
                }
              } )
            }( {
              impact: f,
              viewport: o,
              destination: n,
              draggables: i,
              maxScrollChange: b
            } ),
            scrollJumpRequest: b
          }
        },
        Fe = function ( e ) {
          var t = e.subject.active;
          return t || A( !1 ), t
        },
        ke = function ( e, t ) {
          var r = e.page.borderBox.center;
          return Ee( e.descriptor.id, t ) ? F( r, t.displacedBy.point ) : r
        },
        We = function ( e, t ) {
          var r = e.page.borderBox;
          return Ee( e.descriptor.id, t ) ? q( r, W( t.displacedBy.point ) ) : r
        },
        Ue = Object( s.default )( ( function ( e, t ) {
          var r = t[ e.line ];
          return {
            value: r,
            point: U( e.line, r )
          }
        } ) ),
        He = function ( e, t ) {
          return Object( l.a )( {}, e, {
            scroll: Object( l.a )( {}, e.scroll, {
              max: t
            } )
          } )
        },
        Ve = function ( e, t, r ) {
          var n = e.frame;
          ue( t, e ) && A( !1 ), e.subject.withPlaceholder && A( !1 );
          var i = Ue( e.axis, t.displaceBy ).point,
            a = function ( e, t, r ) {
              var n = e.axis;
              if ( "virtual" === e.descriptor.mode ) return U( n.line, t[ n.line ] );
              var i = e.subject.page.contentBox[ n.size ],
                a = ae( e.descriptor.id, r ).reduce( ( function ( e, t ) {
                  return e + t.client.marginBox[ n.size ]
                } ), 0 ) + t[ n.line ] - i;
              return a <= 0 ? null : U( n.line, a )
            }( e, i, r ),
            o = {
              placeholderSize: i,
              increasedBy: a,
              oldFrameMaxScroll: e.frame ? e.frame.scroll.max : null
            };
          if ( !n ) {
            var c = X( {
              page: e.subject.page,
              withPlaceholder: o,
              axis: e.axis,
              frame: e.frame
            } );
            return Object( l.a )( {}, e, {
              subject: c
            } )
          }
          var u = a ? _( n.scroll.max, a ) : n.scroll.max,
            d = He( n, u ),
            s = X( {
              page: e.subject.page,
              withPlaceholder: o,
              axis: e.axis,
              frame: d
            } );
          return Object( l.a )( {}, e, {
            subject: s,
            frame: d
          } )
        },
        ze = function ( e ) {
          var t = e.isMovingForward,
            r = e.previousPageBorderBoxCenter,
            n = e.draggable,
            i = e.isOver,
            a = e.draggables,
            o = e.droppables,
            l = e.viewport,
            c = e.afterCritical,
            u = function ( e ) {
              var t = e.isMovingForward,
                r = e.pageBorderBoxCenter,
                n = e.source,
                i = e.droppables,
                a = e.viewport,
                o = n.subject.active;
              if ( !o ) return null;
              var l = n.axis,
                c = fe( o[ l.start ], o[ l.end ] ),
                u = ne( i ).filter( ( function ( e ) {
                  return e !== n
                } ) ).filter( ( function ( e ) {
                  return e.isEnabled
                } ) ).filter( ( function ( e ) {
                  return Boolean( e.subject.active )
                } ) ).filter( ( function ( e ) {
                  return ge( a.frame )( Fe( e ) )
                } ) ).filter( ( function ( e ) {
                  var r = Fe( e );
                  return t ? o[ l.crossAxisEnd ] < r[ l.crossAxisEnd ] : r[ l.crossAxisStart ] < o[ l.crossAxisStart ]
                } ) ).filter( ( function ( e ) {
                  var t = Fe( e ),
                    r = fe( t[ l.start ], t[ l.end ] );
                  return c( t[ l.start ] ) || c( t[ l.end ] ) || r( o[ l.start ] ) || r( o[ l.end ] )
                } ) ).sort( ( function ( e, r ) {
                  var n = Fe( e )[ l.crossAxisStart ],
                    i = Fe( r )[ l.crossAxisStart ];
                  return t ? n - i : i - n
                } ) ).filter( ( function ( e, t, r ) {
                  return Fe( e )[ l.crossAxisStart ] === Fe( r[ 0 ] )[ l.crossAxisStart ]
                } ) );
              if ( !u.length ) return null;
              if ( 1 === u.length ) return u[ 0 ];
              var d = u.filter( ( function ( e ) {
                return fe( Fe( e )[ l.start ], Fe( e )[ l.end ] )( r[ l.line ] )
              } ) );
              return 1 === d.length ? d[ 0 ] : d.length > 1 ? d.sort( ( function ( e, t ) {
                return Fe( e )[ l.start ] - Fe( t )[ l.start ]
              } ) )[ 0 ] : u.sort( ( function ( e, t ) {
                var n = V( r, Y( Fe( e ) ) ),
                  i = V( r, Y( Fe( t ) ) );
                return n !== i ? n - i : Fe( e )[ l.start ] - Fe( t )[ l.start ]
              } ) )[ 0 ]
            }( {
              isMovingForward: t,
              pageBorderBoxCenter: r,
              source: i,
              droppables: o,
              viewport: l
            } );
          if ( !u ) return null;
          var d = ae( u.descriptor.id, a ),
            s = function ( e ) {
              var t = e.previousPageBorderBoxCenter,
                r = e.moveRelativeTo,
                n = e.insideDestination,
                i = e.draggable,
                a = e.draggables,
                o = e.destination,
                l = e.viewport,
                c = e.afterCritical;
              if ( !r ) {
                if ( n.length ) return null;
                var u = {
                    displaced: se,
                    displacedBy: de,
                    at: {
                      type: "REORDER",
                      destination: {
                        droppableId: o.descriptor.id,
                        index: 0
                      }
                    }
                  },
                  d = Pe( {
                    impact: u,
                    draggable: i,
                    droppable: o,
                    draggables: a,
                    afterCritical: c
                  } ),
                  s = ue( i, o ) ? o : Ve( o, i, a );
                return Me( {
                  draggable: i,
                  destination: s,
                  newPageBorderBoxCenter: d,
                  viewport: l.frame,
                  withDroppableDisplacement: !1,
                  onlyOnMainAxis: !0
                } ) ? u : null
              }
              var p, f = Boolean( t[ o.axis.line ] <= r.page.borderBox.center[ o.axis.line ] ),
                g = ( p = r.descriptor.index, r.descriptor.id === i.descriptor.id || f ? p : p + 1 ),
                b = Ue( o.axis, i.displaceBy );
              return xe( {
                draggable: i,
                insideDestination: n,
                destination: o,
                viewport: l,
                displacedBy: b,
                last: se,
                index: g
              } )
            }( {
              previousPageBorderBoxCenter: r,
              destination: u,
              draggable: n,
              draggables: a,
              moveRelativeTo: function ( e ) {
                var t = e.pageBorderBoxCenter,
                  r = e.viewport,
                  n = e.destination,
                  i = e.insideDestination,
                  a = e.afterCritical;
                return i.filter( ( function ( e ) {
                  return Ie( {
                    target: We( e, a ),
                    destination: n,
                    viewport: r.frame,
                    withDroppableDisplacement: !0
                  } )
                } ) ).sort( ( function ( e, r ) {
                  var i = H( t, Se( n, ke( e, a ) ) ),
                    o = H( t, Se( n, ke( r, a ) ) );
                  return i < o ? -1 : o < i ? 1 : e.descriptor.index - r.descriptor.index
                } ) )[ 0 ] || null
              }( {
                pageBorderBoxCenter: r,
                viewport: l,
                destination: u,
                insideDestination: d,
                afterCritical: c
              } ),
              insideDestination: d,
              viewport: l,
              afterCritical: c
            } );
          if ( !s ) return null;
          var p = Pe( {
            impact: s,
            draggable: n,
            droppable: u,
            draggables: a,
            afterCritical: c
          } );
          return {
            clientSelection: Ge( {
              pageBorderBoxCenter: p,
              draggable: n,
              viewport: l
            } ),
            impact: s,
            scrollJumpRequest: null
          }
        },
        qe = function ( e ) {
          var t = e.at;
          return t ? "REORDER" === t.type ? t.destination.droppableId : t.combine.droppableId : null
        },
        Ye = function ( e ) {
          var t = e.state,
            r = e.type,
            n = function ( e, t ) {
              var r = qe( e );
              return r ? t[ r ] : null
            }( t.impact, t.dimensions.droppables ),
            i = Boolean( n ),
            a = t.dimensions.droppables[ t.critical.droppable.id ],
            o = n || a,
            l = o.axis.direction,
            c = "vertical" === l && ( "MOVE_UP" === r || "MOVE_DOWN" === r ) || "horizontal" === l && ( "MOVE_LEFT" === r || "MOVE_RIGHT" === r );
          if ( c && !i ) return null;
          var u = "MOVE_DOWN" === r || "MOVE_RIGHT" === r,
            d = t.dimensions.draggables[ t.critical.draggable.id ],
            s = t.current.page.borderBoxCenter,
            p = t.dimensions,
            f = p.draggables,
            g = p.droppables;
          return c ? _e( {
            isMovingForward: u,
            previousPageBorderBoxCenter: s,
            draggable: d,
            destination: o,
            draggables: f,
            viewport: t.viewport,
            previousClientSelection: t.current.client.selection,
            previousImpact: t.impact,
            afterCritical: t.afterCritical
          } ) : ze( {
            isMovingForward: u,
            previousPageBorderBoxCenter: s,
            draggable: d,
            isOver: o,
            draggables: f,
            droppables: g,
            viewport: t.viewport,
            afterCritical: t.afterCritical
          } )
        };

      function Je( e ) {
        return "DRAGGING" === e.phase || "COLLECTING" === e.phase
      }

      function Xe( e ) {
        var t = fe( e.top, e.bottom ),
          r = fe( e.left, e.right );
        return function ( e ) {
          return t( e.y ) && r( e.x )
        }
      }

      function Ke( e ) {
        var t = e.pageBorderBox,
          r = e.draggable,
          n = e.droppables,
          i = ne( n ).filter( ( function ( e ) {
            if ( !e.isEnabled ) return !1;
            var r, n, i = e.subject.active;
            if ( !i ) return !1;
            if ( n = i, !( ( r = t ).left < n.right && r.right > n.left && r.top < n.bottom && r.bottom > n.top ) ) return !1;
            if ( Xe( i )( t.center ) ) return !0;
            var a = e.axis,
              o = i.center[ a.crossAxisLine ],
              l = t[ a.crossAxisStart ],
              c = t[ a.crossAxisEnd ],
              u = fe( i[ a.crossAxisStart ], i[ a.crossAxisEnd ] ),
              d = u( l ),
              s = u( c );
            return !d && !s || ( d ? l < o : c > o )
          } ) );
        return i.length ? 1 === i.length ? i[ 0 ].descriptor.id : function ( e ) {
          var t = e.pageBorderBox,
            r = e.draggable,
            n = e.candidates,
            i = r.page.borderBox.center,
            a = n.map( ( function ( e ) {
              var r = e.axis,
                n = U( e.axis.line, t.center[ r.line ], e.page.borderBox.center[ r.crossAxisLine ] );
              return {
                id: e.descriptor.id,
                distance: H( i, n )
              }
            } ) ).sort( ( function ( e, t ) {
              return t.distance - e.distance
            } ) );
          return a[ 0 ] ? a[ 0 ].id : null
        }( {
          pageBorderBox: t,
          draggable: r,
          candidates: i
        } ) : null
      }
      var Qe = function ( e, t ) {
        return Object( d.e )( q( e, t ) )
      };

      function Ze( e ) {
        var t = e.displaced,
          r = e.id;
        return Boolean( t.visible[ r ] || t.invisible[ r ] )
      }
      var $e = function ( e ) {
          var t = e.pageOffset,
            r = e.draggable,
            n = e.draggables,
            i = e.droppables,
            a = e.previousImpact,
            o = e.viewport,
            l = e.afterCritical,
            c = Qe( r.page.borderBox, t ),
            u = Ke( {
              pageBorderBox: c,
              draggable: r,
              droppables: i
            } );
          if ( !u ) return pe;
          var d = i[ u ],
            s = ae( d.descriptor.id, n ),
            p = function ( e, t ) {
              var r = e.frame;
              return r ? Qe( t, r.scroll.diff.value ) : t
            }( d, c );
          return function ( e ) {
            var t = e.draggable,
              r = e.pageBorderBoxWithDroppableScroll,
              n = e.previousImpact,
              i = e.destination,
              a = e.insideDestination,
              o = e.afterCritical;
            if ( !i.isCombineEnabled ) return null;
            var l = i.axis,
              c = Ue( i.axis, t.displaceBy ),
              u = c.value,
              d = r[ l.start ],
              s = r[ l.end ],
              p = $( ce( t, a ), ( function ( e ) {
                var t = e.descriptor.id,
                  r = e.page.borderBox,
                  i = r[ l.size ] / 4,
                  a = Ee( t, o ),
                  c = Ze( {
                    displaced: n.displaced,
                    id: t
                  } );
                return a ? c ? s > r[ l.start ] + i && s < r[ l.end ] - i : d > r[ l.start ] - u + i && d < r[ l.end ] - u - i : c ? s > r[ l.start ] + u + i && s < r[ l.end ] + u - i : d > r[ l.start ] + i && d < r[ l.end ] - i
              } ) );
            return p ? {
              displacedBy: c,
              displaced: n.displaced,
              at: {
                type: "COMBINE",
                combine: {
                  draggableId: p.descriptor.id,
                  droppableId: i.descriptor.id
                }
              }
            } : null
          }( {
            pageBorderBoxWithDroppableScroll: p,
            draggable: r,
            previousImpact: a,
            destination: d,
            insideDestination: s,
            afterCritical: l
          } ) || function ( e ) {
            var t = e.pageBorderBoxWithDroppableScroll,
              r = e.draggable,
              n = e.destination,
              i = e.insideDestination,
              a = e.last,
              o = e.viewport,
              l = e.afterCritical,
              c = n.axis,
              u = Ue( n.axis, r.displaceBy ),
              d = u.value,
              s = t[ c.start ],
              p = t[ c.end ],
              f = function ( e ) {
                var t = e.draggable,
                  r = e.closest,
                  n = e.inHomeList;
                return r ? n && r.descriptor.index > t.descriptor.index ? r.descriptor.index - 1 : r.descriptor.index : null
              }( {
                draggable: r,
                closest: $( ce( r, i ), ( function ( e ) {
                  var t = e.descriptor.id,
                    r = e.page.borderBox.center[ c.line ],
                    n = Ee( t, l ),
                    i = Ze( {
                      displaced: a,
                      id: t
                    } );
                  return n ? i ? p <= r : s < r - d : i ? p <= r + d : s < r
                } ) ),
                inHomeList: ue( r, n )
              } );
            return xe( {
              draggable: r,
              insideDestination: i,
              destination: n,
              viewport: o,
              last: a,
              displacedBy: u,
              index: f
            } )
          }( {
            pageBorderBoxWithDroppableScroll: p,
            draggable: r,
            destination: d,
            insideDestination: s,
            last: a.displaced,
            viewport: o,
            afterCritical: l
          } )
        },
        et = function ( e, t ) {
          var r;
          return Object( l.a )( {}, e, ( ( r = {} )[ t.descriptor.id ] = t, r ) )
        },
        tt = function ( e ) {
          var t = e.previousImpact,
            r = e.impact,
            n = e.droppables,
            i = qe( t ),
            a = qe( r );
          if ( !i ) return n;
          if ( i === a ) return n;
          var o = n[ i ];
          if ( !o.subject.withPlaceholder ) return n;
          var c = function ( e ) {
            var t = e.subject.withPlaceholder;
            t || A( !1 );
            var r = e.frame;
            if ( !r ) {
              var n = X( {
                page: e.subject.page,
                axis: e.axis,
                frame: null,
                withPlaceholder: null
              } );
              return Object( l.a )( {}, e, {
                subject: n
              } )
            }
            var i = t.oldFrameMaxScroll;
            i || A( !1 );
            var a = He( r, i ),
              o = X( {
                page: e.subject.page,
                axis: e.axis,
                frame: a,
                withPlaceholder: null
              } );
            return Object( l.a )( {}, e, {
              subject: o,
              frame: a
            } )
          }( o );
          return et( n, c )
        },
        rt = function ( e ) {
          var t = e.state,
            r = e.clientSelection,
            n = e.dimensions,
            i = e.viewport,
            a = e.impact,
            o = e.scrollJumpRequest,
            c = i || t.viewport,
            u = n || t.dimensions,
            d = r || t.current.client.selection,
            s = F( d, t.initial.client.selection ),
            p = {
              offset: s,
              selection: d,
              borderBoxCenter: _( t.initial.client.borderBoxCenter, s )
            },
            f = {
              selection: _( p.selection, c.scroll.current ),
              borderBoxCenter: _( p.borderBoxCenter, c.scroll.current ),
              offset: _( p.offset, c.scroll.diff.value )
            },
            g = {
              client: p,
              page: f
            };
          if ( "COLLECTING" === t.phase ) return Object( l.a )( {
            phase: "COLLECTING"
          }, t, {
            dimensions: u,
            viewport: c,
            current: g
          } );
          var b = u.draggables[ t.critical.draggable.id ],
            v = a || $e( {
              pageOffset: f.offset,
              draggable: b,
              draggables: u.draggables,
              droppables: u.droppables,
              previousImpact: t.impact,
              viewport: c,
              afterCritical: t.afterCritical
            } ),
            m = function ( e ) {
              var t = e.draggable,
                r = e.draggables,
                n = e.droppables,
                i = e.previousImpact,
                a = e.impact,
                o = tt( {
                  previousImpact: i,
                  impact: a,
                  droppables: n
                } ),
                l = qe( a );
              if ( !l ) return o;
              var c = n[ l ];
              if ( ue( t, c ) ) return o;
              if ( c.subject.withPlaceholder ) return o;
              var u = Ve( c, t, r );
              return et( o, u )
            }( {
              draggable: b,
              impact: v,
              previousImpact: t.impact,
              draggables: u.draggables,
              droppables: u.droppables
            } );
          return Object( l.a )( {}, t, {
            current: g,
            dimensions: {
              draggables: u.draggables,
              droppables: m
            },
            impact: v,
            viewport: c,
            scrollJumpRequest: o || null,
            forceShouldAnimate: !o && null
          } )
        };
      var nt = function ( e ) {
          var t = e.impact,
            r = e.viewport,
            n = e.draggables,
            i = e.destination,
            a = e.forceShouldAnimate,
            o = t.displaced,
            c = Oe( {
              afterDragging: function ( e, t ) {
                return e.map( ( function ( e ) {
                  return t[ e ]
                } ) )
              }( o.all, n ),
              destination: i,
              displacedBy: t.displacedBy,
              viewport: r.frame,
              forceShouldAnimate: a,
              last: o
            } );
          return Object( l.a )( {}, t, {
            displaced: c
          } )
        },
        it = function ( e ) {
          var t = e.impact,
            r = e.draggable,
            n = e.droppable,
            i = e.draggables,
            a = e.viewport,
            o = e.afterCritical,
            l = Pe( {
              impact: t,
              draggable: r,
              draggables: i,
              droppable: n,
              afterCritical: o
            } );
          return Ge( {
            pageBorderBoxCenter: l,
            draggable: r,
            viewport: a
          } )
        },
        at = function ( e ) {
          var t = e.state,
            r = e.dimensions,
            n = e.viewport;
          "SNAP" !== t.movementMode && A( !1 );
          var i = t.impact,
            a = n || t.viewport,
            o = r || t.dimensions,
            l = o.draggables,
            c = o.droppables,
            u = l[ t.critical.draggable.id ],
            d = qe( i );
          d || A( !1 );
          var s = c[ d ],
            p = nt( {
              impact: i,
              viewport: a,
              destination: s,
              draggables: l
            } ),
            f = it( {
              impact: p,
              draggable: u,
              droppable: s,
              draggables: l,
              viewport: a,
              afterCritical: t.afterCritical
            } );
          return rt( {
            impact: p,
            clientSelection: f,
            state: t,
            dimensions: o,
            viewport: a
          } )
        },
        ot = function ( e ) {
          var t = e.draggable,
            r = e.home,
            n = e.draggables,
            i = e.viewport,
            a = Ue( r.axis, t.displaceBy ),
            o = ae( r.descriptor.id, n ),
            l = o.indexOf( t ); - 1 === l && A( !1 );
          var c, u = o.slice( l + 1 ),
            d = u.reduce( ( function ( e, t ) {
              return e[ t.descriptor.id ] = !0, e
            } ), {} ),
            s = {
              inVirtualList: "virtual" === r.descriptor.mode,
              displacedBy: a,
              effected: d
            };
          return {
            impact: {
              displaced: Oe( {
                afterDragging: u,
                destination: r,
                displacedBy: a,
                last: null,
                viewport: i.frame,
                forceShouldAnimate: !1
              } ),
              displacedBy: a,
              at: {
                type: "REORDER",
                destination: ( c = t.descriptor, {
                  index: c.index,
                  droppableId: c.droppableId
                } )
              }
            },
            afterCritical: s
          }
        },
        lt = function ( e ) {
          var t = e.additions,
            r = e.updatedDroppables,
            n = e.viewport,
            i = n.scroll.diff.value;
          return t.map( ( function ( e ) {
            var t = e.descriptor.droppableId,
              a = function ( e ) {
                var t = e.frame;
                return t || A( !1 ), t
              }( r[ t ] ).scroll.diff.value;
            return function ( e ) {
              var t = e.draggable,
                r = e.offset,
                n = e.initialWindowScroll,
                i = Object( d.f )( t.client, r ),
                a = Object( d.g )( i, n );
              return Object( l.a )( {}, t, {
                placeholder: Object( l.a )( {}, t.placeholder, {
                  client: i
                } ),
                client: i,
                page: a
              } )
            }( {
              draggable: e,
              offset: _( i, a ),
              initialWindowScroll: n.scroll.initial
            } )
          } ) )
        },
        ct = function ( e ) {
          return "SNAP" === e.movementMode
        },
        ut = function ( e, t, r ) {
          var n = function ( e, t ) {
            return {
              draggables: e.draggables,
              droppables: et( e.droppables, t )
            }
          }( e.dimensions, t );
          return !ct( e ) || r ? rt( {
            state: e,
            dimensions: n
          } ) : at( {
            state: e,
            dimensions: n
          } )
        };

      function dt( e ) {
        return e.isDragging && "SNAP" === e.movementMode ? Object( l.a )( {
          phase: "DRAGGING"
        }, e, {
          scrollJumpRequest: null
        } ) : e
      }
      var st = {
          phase: "IDLE",
          completed: null,
          shouldFlush: !1
        },
        pt = function ( e, t ) {
          if ( void 0 === e && ( e = st ), "FLUSH" === t.type ) return Object( l.a )( {}, st, {
            shouldFlush: !0
          } );
          if ( "INITIAL_PUBLISH" === t.type ) {
            "IDLE" !== e.phase && A( !1 );
            var r = t.payload,
              n = r.critical,
              i = r.clientSelection,
              a = r.viewport,
              o = r.dimensions,
              c = r.movementMode,
              u = o.draggables[ n.draggable.id ],
              d = o.droppables[ n.droppable.id ],
              s = {
                selection: i,
                borderBoxCenter: u.client.borderBox.center,
                offset: M
              },
              p = {
                client: s,
                page: {
                  selection: _( s.selection, a.scroll.initial ),
                  borderBoxCenter: _( s.selection, a.scroll.initial ),
                  offset: _( s.selection, a.scroll.diff.value )
                }
              },
              f = ne( o.droppables ).every( ( function ( e ) {
                return !e.isFixedOnPage
              } ) ),
              g = ot( {
                draggable: u,
                home: d,
                draggables: o.draggables,
                viewport: a
              } ),
              b = g.impact;
            return {
              phase: "DRAGGING",
              isDragging: !0,
              critical: n,
              movementMode: c,
              dimensions: o,
              initial: p,
              current: p,
              isWindowScrollAllowed: f,
              impact: b,
              afterCritical: g.afterCritical,
              onLiftImpact: b,
              viewport: a,
              scrollJumpRequest: null,
              forceShouldAnimate: null
            }
          }
          var v;
          if ( "COLLECTION_STARTING" === t.type ) return "COLLECTING" === e.phase || "DROP_PENDING" === e.phase ? e : ( "DRAGGING" !== e.phase && A( !1 ), Object( l.a )( {
            phase: "COLLECTING"
          }, e, ( ( v = {} ).phase = "COLLECTING", v ) ) );
          if ( "PUBLISH_WHILE_DRAGGING" === t.type ) return "COLLECTING" !== e.phase && "DROP_PENDING" !== e.phase && A( !1 ),
            function ( e ) {
              var t, r, n = e.state,
                i = e.published,
                a = i.modified.map( ( function ( e ) {
                  var t = n.dimensions.droppables[ e.droppableId ];
                  return K( t, e.scroll )
                } ) ),
                o = Object( l.a )( {}, n.dimensions.droppables, te( a ) ),
                c = re( lt( {
                  additions: i.additions,
                  updatedDroppables: o,
                  viewport: n.viewport
                } ) ),
                u = Object( l.a )( {}, n.dimensions.draggables, c );
              i.removals.forEach( ( function ( e ) {
                delete u[ e ]
              } ) );
              var d = {
                  droppables: o,
                  draggables: u
                },
                s = qe( n.impact ),
                p = s ? d.droppables[ s ] : null,
                f = d.draggables[ n.critical.draggable.id ],
                g = d.droppables[ n.critical.droppable.id ],
                b = ot( {
                  draggable: f,
                  home: g,
                  draggables: u,
                  viewport: n.viewport
                } ),
                v = b.impact,
                m = b.afterCritical,
                h = p && p.isCombineEnabled ? n.impact : v,
                y = $e( {
                  pageOffset: n.current.page.offset,
                  draggable: d.draggables[ n.critical.draggable.id ],
                  draggables: d.draggables,
                  droppables: d.droppables,
                  previousImpact: h,
                  viewport: n.viewport,
                  afterCritical: m
                } ),
                I = Object( l.a )( {
                  phase: "DRAGGING"
                }, n, ( ( t = {} ).phase = "DRAGGING", t.impact = y, t.onLiftImpact = v, t.dimensions = d, t.afterCritical = m, t.forceShouldAnimate = !1, t ) );
              return "COLLECTING" === n.phase ? I : Object( l.a )( {
                phase: "DROP_PENDING"
              }, I, ( ( r = {} ).phase = "DROP_PENDING", r.reason = n.reason, r.isWaiting = !1, r ) )
            }( {
              state: e,
              published: t.payload
            } );
          if ( "MOVE" === t.type ) {
            if ( "DROP_PENDING" === e.phase ) return e;
            Je( e ) || A( !1 );
            var m = t.payload.client;
            return k( m, e.current.client.selection ) ? e : rt( {
              state: e,
              clientSelection: m,
              impact: ct( e ) ? e.impact : null
            } )
          }
          if ( "UPDATE_DROPPABLE_SCROLL" === t.type ) {
            if ( "DROP_PENDING" === e.phase ) return dt( e );
            if ( "COLLECTING" === e.phase ) return dt( e );
            Je( e ) || A( !1 );
            var h = t.payload,
              y = h.id,
              I = h.newScroll,
              O = e.dimensions.droppables[ y ];
            if ( !O ) return e;
            var D = K( O, I );
            return ut( e, D, !1 )
          }
          if ( "UPDATE_DROPPABLE_IS_ENABLED" === t.type ) {
            if ( "DROP_PENDING" === e.phase ) return e;
            Je( e ) || A( !1 );
            var x = t.payload,
              E = x.id,
              w = x.isEnabled,
              C = e.dimensions.droppables[ E ];
            C || A( !1 ), C.isEnabled === w && A( !1 );
            var j = Object( l.a )( {}, C, {
              isEnabled: w
            } );
            return ut( e, j, !0 )
          }
          if ( "UPDATE_DROPPABLE_IS_COMBINE_ENABLED" === t.type ) {
            if ( "DROP_PENDING" === e.phase ) return e;
            Je( e ) || A( !1 );
            var B = t.payload,
              R = B.id,
              N = B.isCombineEnabled,
              S = e.dimensions.droppables[ R ];
            S || A( !1 ), S.isCombineEnabled === N && A( !1 );
            var P = Object( l.a )( {}, S, {
              isCombineEnabled: N
            } );
            return ut( e, P, !0 )
          }
          if ( "MOVE_BY_WINDOW_SCROLL" === t.type ) {
            if ( "DROP_PENDING" === e.phase || "DROP_ANIMATING" === e.phase ) return e;
            Je( e ) || A( !1 ), e.isWindowScrollAllowed || A( !1 );
            var L = t.payload.newScroll;
            if ( k( e.viewport.scroll.current, L ) ) return dt( e );
            var T = Le( e.viewport, L );
            return ct( e ) ? at( {
              state: e,
              viewport: T
            } ) : rt( {
              state: e,
              viewport: T
            } )
          }
          if ( "UPDATE_VIEWPORT_MAX_SCROLL" === t.type ) {
            if ( !Je( e ) ) return e;
            var G = t.payload.maxScroll;
            if ( k( G, e.viewport.scroll.max ) ) return e;
            var F = Object( l.a )( {}, e.viewport, {
              scroll: Object( l.a )( {}, e.viewport.scroll, {
                max: G
              } )
            } );
            return Object( l.a )( {
              phase: "DRAGGING"
            }, e, {
              viewport: F
            } )
          }
          if ( "MOVE_UP" === t.type || "MOVE_DOWN" === t.type || "MOVE_LEFT" === t.type || "MOVE_RIGHT" === t.type ) {
            if ( "COLLECTING" === e.phase || "DROP_PENDING" === e.phase ) return e;
            "DRAGGING" !== e.phase && A( !1 );
            var W = Ye( {
              state: e,
              type: t.type
            } );
            return W ? rt( {
              state: e,
              impact: W.impact,
              clientSelection: W.clientSelection,
              scrollJumpRequest: W.scrollJumpRequest
            } ) : e
          }
          if ( "DROP_PENDING" === t.type ) {
            var U, H = t.payload.reason;
            return "COLLECTING" !== e.phase && A( !1 ), Object( l.a )( {
              phase: "DROP_PENDING"
            }, e, ( ( U = {} ).phase = "DROP_PENDING", U.isWaiting = !0, U.reason = H, U ) )
          }
          if ( "DROP_ANIMATE" === t.type ) {
            var V = t.payload,
              z = V.completed,
              q = V.dropDuration,
              Y = V.newHomeClientOffset;
            return "DRAGGING" !== e.phase && "DROP_PENDING" !== e.phase && A( !1 ), {
              phase: "DROP_ANIMATING",
              completed: z,
              dropDuration: q,
              newHomeClientOffset: Y,
              dimensions: e.dimensions
            }
          }
          return "DROP_COMPLETE" === t.type ? {
            phase: "IDLE",
            completed: t.payload.completed,
            shouldFlush: !1
          } : e
        },
        ft = function ( e ) {
          return {
            type: "PUBLISH_WHILE_DRAGGING",
            payload: e
          }
        },
        gt = function () {
          return {
            type: "COLLECTION_STARTING",
            payload: null
          }
        },
        bt = function ( e ) {
          return {
            type: "UPDATE_DROPPABLE_SCROLL",
            payload: e
          }
        },
        vt = function ( e ) {
          return {
            type: "UPDATE_DROPPABLE_IS_ENABLED",
            payload: e
          }
        },
        mt = function ( e ) {
          return {
            type: "UPDATE_DROPPABLE_IS_COMBINE_ENABLED",
            payload: e
          }
        },
        ht = function ( e ) {
          return {
            type: "MOVE",
            payload: e
          }
        },
        yt = function () {
          return {
            type: "MOVE_UP",
            payload: null
          }
        },
        It = function () {
          return {
            type: "MOVE_DOWN",
            payload: null
          }
        },
        Ot = function () {
          return {
            type: "MOVE_RIGHT",
            payload: null
          }
        },
        Dt = function () {
          return {
            type: "MOVE_LEFT",
            payload: null
          }
        },
        xt = function ( e ) {
          return {
            type: "DROP_COMPLETE",
            payload: e
          }
        },
        Et = function ( e ) {
          return {
            type: "DROP",
            payload: e
          }
        },
        wt = function () {
          return {
            type: "DROP_ANIMATION_FINISHED",
            payload: null
          }
        };
      var Ct = "cubic-bezier(.2,1,.1,1)",
        At = {
          drop: 0,
          combining: .7
        },
        jt = {
          drop: .75
        },
        Bt = .2 + "s " + "cubic-bezier(0.2, 0, 0, 1)",
        Rt = {
          fluid: "opacity " + Bt,
          snap: "transform " + Bt + ", opacity " + Bt,
          drop: function ( e ) {
            var t = e + "s " + Ct;
            return "transform " + t + ", opacity " + t
          },
          outOfTheWay: "transform " + Bt,
          placeholder: "height " + Bt + ", width " + Bt + ", margin " + Bt
        },
        Nt = function ( e ) {
          return k( e, M ) ? null : "translate(" + e.x + "px, " + e.y + "px)"
        },
        St = Nt,
        Pt = function ( e, t ) {
          var r = Nt( e );
          return r ? t ? r + " scale(" + jt.drop + ")" : r : null
        },
        Lt = .33,
        Tt = .55,
        Gt = Tt - Lt,
        Mt = function ( e ) {
          var t = e.getState,
            r = e.dispatch;
          return function ( e ) {
            return function ( n ) {
              if ( "DROP" === n.type ) {
                var i = t(),
                  a = n.payload.reason;
                if ( "COLLECTING" !== i.phase ) {
                  if ( "IDLE" !== i.phase ) {
                    "DROP_PENDING" === i.phase && i.isWaiting && A( !1 ), "DRAGGING" !== i.phase && "DROP_PENDING" !== i.phase && A( !1 );
                    var o = i.critical,
                      c = i.dimensions,
                      u = c.draggables[ i.critical.draggable.id ],
                      d = function ( e ) {
                        var t = e.draggables,
                          r = e.reason,
                          n = e.lastImpact,
                          i = e.home,
                          a = e.viewport,
                          o = e.onLiftImpact;
                        return n.at && "DROP" === r ? "REORDER" === n.at.type ? {
                          impact: n,
                          didDropInsideDroppable: !0
                        } : {
                          impact: Object( l.a )( {}, n, {
                            displaced: se
                          } ),
                          didDropInsideDroppable: !0
                        } : {
                          impact: nt( {
                            draggables: t,
                            impact: o,
                            destination: i,
                            viewport: a,
                            forceShouldAnimate: !0
                          } ),
                          didDropInsideDroppable: !1
                        }
                      }( {
                        reason: a,
                        lastImpact: i.impact,
                        afterCritical: i.afterCritical,
                        onLiftImpact: i.onLiftImpact,
                        home: i.dimensions.droppables[ i.critical.droppable.id ],
                        viewport: i.viewport,
                        draggables: i.dimensions.draggables
                      } ),
                      s = d.impact,
                      p = d.didDropInsideDroppable,
                      f = p ? oe( s ) : null,
                      g = p ? le( s ) : null,
                      b = {
                        index: o.draggable.index,
                        droppableId: o.droppable.id
                      },
                      v = {
                        draggableId: u.descriptor.id,
                        type: u.descriptor.type,
                        source: b,
                        reason: a,
                        mode: i.movementMode,
                        destination: f,
                        combine: g
                      },
                      m = function ( e ) {
                        var t = e.impact,
                          r = e.draggable,
                          n = e.dimensions,
                          i = e.viewport,
                          a = e.afterCritical,
                          o = n.draggables,
                          l = n.droppables,
                          c = qe( t ),
                          u = c ? l[ c ] : null,
                          d = l[ r.descriptor.droppableId ],
                          s = it( {
                            impact: t,
                            draggable: r,
                            draggables: o,
                            afterCritical: a,
                            droppable: u || d,
                            viewport: i
                          } );
                        return F( s, r.client.borderBox.center )
                      }( {
                        impact: s,
                        draggable: u,
                        dimensions: c,
                        viewport: i.viewport,
                        afterCritical: i.afterCritical
                      } ),
                      h = {
                        critical: i.critical,
                        afterCritical: i.afterCritical,
                        result: v,
                        impact: s
                      };
                    if ( !k( i.current.client.offset, m ) || Boolean( v.combine ) ) {
                      var y = function ( e ) {
                        var t = e.current,
                          r = e.destination,
                          n = e.reason,
                          i = H( t, r );
                        if ( i <= 0 ) return Lt;
                        if ( i >= 1500 ) return Tt;
                        var a = Lt + Gt * ( i / 1500 );
                        return Number( ( "CANCEL" === n ? .6 * a : a ).toFixed( 2 ) )
                      }( {
                        current: i.current.client.offset,
                        destination: m,
                        reason: a
                      } );
                      r( function ( e ) {
                        return {
                          type: "DROP_ANIMATE",
                          payload: e
                        }
                      }( {
                        newHomeClientOffset: m,
                        dropDuration: y,
                        completed: h
                      } ) )
                    } else r( xt( {
                      completed: h
                    } ) )
                  }
                } else r( function ( e ) {
                  return {
                    type: "DROP_PENDING",
                    payload: e
                  }
                }( {
                  reason: a
                } ) )
              } else e( n )
            }
          }
        },
        _t = function () {
          return {
            x: window.pageXOffset,
            y: window.pageYOffset
          }
        };

      function Ft( e ) {
        var t = e.onWindowScroll;
        var r = Object( v.a )( ( function () {
            t( _t() )
          } ) ),
          n = function ( e ) {
            return {
              eventName: "scroll",
              options: {
                passive: !0,
                capture: !1
              },
              fn: function ( t ) {
                t.target !== window && t.target !== window.document || e()
              }
            }
          }( r ),
          i = E;

        function a() {
          return i !== E
        }
        return {
          start: function () {
            a() && A( !1 ), i = w( window, [ n ] )
          },
          stop: function () {
            a() || A( !1 ), r.cancel(), i(), i = E
          },
          isActive: a
        }
      }
      var kt = function ( e ) {
          var t = Ft( {
            onWindowScroll: function ( t ) {
              e.dispatch( {
                type: "MOVE_BY_WINDOW_SCROLL",
                payload: {
                  newScroll: t
                }
              } )
            }
          } );
          return function ( e ) {
            return function ( r ) {
              t.isActive() || "INITIAL_PUBLISH" !== r.type || t.start(), t.isActive() && function ( e ) {
                return "DROP_COMPLETE" === e.type || "DROP_ANIMATE" === e.type || "FLUSH" === e.type
              }( r ) && t.stop(), e( r )
            }
          }
        },
        Wt = function () {
          var e = [];
          return {
            add: function ( t ) {
              var r = setTimeout( ( function () {
                  return function ( t ) {
                    var r = Z( e, ( function ( e ) {
                      return e.timerId === t
                    } ) ); - 1 === r && A( !1 ), e.splice( r, 1 )[ 0 ].callback()
                  }( r )
                } ) ),
                n = {
                  timerId: r,
                  callback: t
                };
              e.push( n )
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
        Ut = function ( e, t ) {
          t()
        },
        Ht = function ( e, t ) {
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
        Vt = function ( e, t, r, n ) {
          if ( e ) {
            var i = function ( e ) {
              var t = !1,
                r = !1,
                n = setTimeout( ( function () {
                  r = !0
                } ) ),
                i = function ( i ) {
                  t || r || ( t = !0, e( i ), clearTimeout( n ) )
                };
              return i.wasCalled = function () {
                return t
              }, i
            }( r );
            e( t, {
              announce: i
            } ), i.wasCalled() || r( n( t ) )
          } else r( n( t ) )
        },
        zt = function ( e, t ) {
          var r = function ( e, t ) {
            var r = Wt(),
              n = null,
              i = function ( r ) {
                n || A( !1 ), n = null, Ut( 0, ( function () {
                  return Vt( e().onDragEnd, r, t, G )
                } ) )
              };
            return {
              beforeCapture: function ( t, r ) {
                n && A( !1 ), Ut( 0, ( function () {
                  var n = e().onBeforeCapture;
                  n && n( {
                    draggableId: t,
                    mode: r
                  } )
                } ) )
              },
              beforeStart: function ( t, r ) {
                n && A( !1 ), Ut( 0, ( function () {
                  var n = e().onBeforeDragStart;
                  n && n( Ht( t, r ) )
                } ) )
              },
              start: function ( i, a ) {
                n && A( !1 );
                var o = Ht( i, a );
                n = {
                  mode: a,
                  lastCritical: i,
                  lastLocation: o.source,
                  lastCombine: null
                }, r.add( ( function () {
                  Ut( 0, ( function () {
                    return Vt( e().onDragStart, o, t, L )
                  } ) )
                } ) )
              },
              update: function ( i, a ) {
                var o = oe( a ),
                  c = le( a );
                n || A( !1 );
                var u = ! function ( e, t ) {
                  if ( e === t ) return !0;
                  var r = e.draggable.id === t.draggable.id && e.draggable.droppableId === t.draggable.droppableId && e.draggable.type === t.draggable.type && e.draggable.index === t.draggable.index,
                    n = e.droppable.id === t.droppable.id && e.droppable.type === t.droppable.type;
                  return r && n
                }( i, n.lastCritical );
                u && ( n.lastCritical = i );
                var d, s, p = ( d = n.lastLocation, s = o, !( null == d && null == s || null != d && null != s && d.droppableId === s.droppableId && d.index === s.index ) );
                p && ( n.lastLocation = o );
                var f = ! function ( e, t ) {
                  return null == e && null == t || null != e && null != t && ( e.draggableId === t.draggableId && e.droppableId === t.droppableId )
                }( n.lastCombine, c );
                if ( f && ( n.lastCombine = c ), u || p || f ) {
                  var g = Object( l.a )( {}, Ht( i, n.mode ), {
                    combine: c,
                    destination: o
                  } );
                  r.add( ( function () {
                    Ut( 0, ( function () {
                      return Vt( e().onDragUpdate, g, t, T )
                    } ) )
                  } ) )
                }
              },
              flush: function () {
                n || A( !1 ), r.flush()
              },
              drop: i,
              abort: function () {
                if ( n ) {
                  var e = Object( l.a )( {}, Ht( n.lastCritical, n.mode ), {
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
              return function ( n ) {
                if ( "BEFORE_INITIAL_CAPTURE" !== n.type ) {
                  if ( "INITIAL_PUBLISH" === n.type ) {
                    var i = n.payload.critical;
                    return r.beforeStart( i, n.payload.movementMode ), t( n ), void r.start( i, n.payload.movementMode )
                  }
                  if ( "DROP_COMPLETE" === n.type ) {
                    var a = n.payload.completed.result;
                    return r.flush(), t( n ), void r.drop( a )
                  }
                  if ( t( n ), "FLUSH" !== n.type ) {
                    var o = e.getState();
                    "DRAGGING" === o.phase && r.update( o.critical, o.impact )
                  } else r.abort()
                } else r.beforeCapture( n.payload.draggableId, n.payload.movementMode )
              }
            }
          }
        },
        qt = function ( e ) {
          return function ( t ) {
            return function ( r ) {
              if ( "DROP_ANIMATION_FINISHED" === r.type ) {
                var n = e.getState();
                "DROP_ANIMATING" !== n.phase && A( !1 ), e.dispatch( xt( {
                  completed: n.completed
                } ) )
              } else t( r )
            }
          }
        },
        Yt = function ( e ) {
          var t = null,
            r = null;
          return function ( n ) {
            return function ( i ) {
              if ( "FLUSH" !== i.type && "DROP_COMPLETE" !== i.type && "DROP_ANIMATION_FINISHED" !== i.type || ( r && ( cancelAnimationFrame( r ), r = null ), t && ( t(), t = null ) ), n( i ), "DROP_ANIMATE" === i.type ) {
                var a = {
                  eventName: "scroll",
                  options: {
                    capture: !0,
                    passive: !1,
                    once: !0
                  },
                  fn: function () {
                    "DROP_ANIMATING" === e.getState().phase && e.dispatch( {
                      type: "DROP_ANIMATION_FINISHED",
                      payload: null
                    } )
                  }
                };
                r = requestAnimationFrame( ( function () {
                  r = null, t = w( window, [ a ] )
                } ) )
              }
            }
          }
        },
        Jt = function ( e ) {
          return function ( t ) {
            return function ( r ) {
              if ( t( r ), "PUBLISH_WHILE_DRAGGING" === r.type ) {
                var n = e.getState();
                "DROP_PENDING" === n.phase && ( n.isWaiting || e.dispatch( Et( {
                  reason: n.reason
                } ) ) )
              }
            }
          }
        },
        Xt = c.c,
        Kt = function ( e ) {
          var t, r = e.dimensionMarshal,
            n = e.focusMarshal,
            i = e.styleMarshal,
            a = e.getResponders,
            o = e.announce,
            l = e.autoScroller;
          return Object( c.d )( pt, Xt( Object( c.a )( ( t = i, function () {
            return function ( e ) {
              return function ( r ) {
                "INITIAL_PUBLISH" === r.type && t.dragging(), "DROP_ANIMATE" === r.type && t.dropping( r.payload.completed.result.reason ), "FLUSH" !== r.type && "DROP_COMPLETE" !== r.type || t.resting(), e( r )
              }
            }
          } ), function ( e ) {
            return function () {
              return function ( t ) {
                return function ( r ) {
                  "DROP_COMPLETE" !== r.type && "FLUSH" !== r.type && "DROP_ANIMATE" !== r.type || e.stopPublishing(), t( r )
                }
              }
            }
          }( r ), function ( e ) {
            return function ( t ) {
              var r = t.getState,
                n = t.dispatch;
              return function ( t ) {
                return function ( i ) {
                  if ( "LIFT" === i.type ) {
                    var a = i.payload,
                      o = a.id,
                      l = a.clientSelection,
                      c = a.movementMode,
                      u = r();
                    "DROP_ANIMATING" === u.phase && n( xt( {
                      completed: u.completed
                    } ) ), "IDLE" !== r().phase && A( !1 ), n( {
                      type: "FLUSH",
                      payload: null
                    } ), n( {
                      type: "BEFORE_INITIAL_CAPTURE",
                      payload: {
                        draggableId: o,
                        movementMode: c
                      }
                    } );
                    var d = {
                        draggableId: o,
                        scrollOptions: {
                          shouldPublishImmediately: "SNAP" === c
                        }
                      },
                      s = e.startPublishing( d ),
                      p = s.critical,
                      f = s.dimensions,
                      g = s.viewport;
                    n( function ( e ) {
                      return {
                        type: "INITIAL_PUBLISH",
                        payload: e
                      }
                    }( {
                      critical: p,
                      dimensions: f,
                      clientSelection: l,
                      movementMode: c,
                      viewport: g
                    } ) )
                  } else t( i )
                }
              }
            }
          }( r ), Mt, qt, Yt, Jt, function ( e ) {
            return function ( t ) {
              return function ( r ) {
                return function ( n ) {
                  if ( function ( e ) {
                      return "DROP_COMPLETE" === e.type || "DROP_ANIMATE" === e.type || "FLUSH" === e.type
                    }( n ) ) return e.stop(), void r( n );
                  if ( "INITIAL_PUBLISH" === n.type ) {
                    r( n );
                    var i = t.getState();
                    return "DRAGGING" !== i.phase && A( !1 ), void e.start( i )
                  }
                  r( n ), e.scroll( t.getState() )
                }
              }
            }
          }( l ), kt, function ( e ) {
            var t = !1;
            return function () {
              return function ( r ) {
                return function ( n ) {
                  if ( "INITIAL_PUBLISH" === n.type ) return t = !0, e.tryRecordFocus( n.payload.critical.draggable.id ), r( n ), void e.tryRestoreFocusRecorded();
                  if ( r( n ), t ) {
                    if ( "FLUSH" === n.type ) return t = !1, void e.tryRestoreFocusRecorded();
                    if ( "DROP_COMPLETE" === n.type ) {
                      t = !1;
                      var i = n.payload.completed.result;
                      i.combine && e.tryShiftRecord( i.draggableId, i.combine.draggableId ), e.tryRestoreFocusRecorded()
                    }
                  }
                }
              }
            }
          }( n ), zt( a, o ) ) ) )
        };
      var Qt = function ( e ) {
          var t = e.scrollHeight,
            r = e.scrollWidth,
            n = e.height,
            i = e.width,
            a = F( {
              x: r,
              y: t
            }, {
              x: i,
              y: n
            } );
          return {
            x: Math.max( 0, a.x ),
            y: Math.max( 0, a.y )
          }
        },
        Zt = function () {
          var e = document.documentElement;
          return e || A( !1 ), e
        },
        $t = function () {
          var e = Zt();
          return Qt( {
            scrollHeight: e.scrollHeight,
            scrollWidth: e.scrollWidth,
            width: e.clientWidth,
            height: e.clientHeight
          } )
        },
        er = function ( e ) {
          var t = e.critical,
            r = e.scrollOptions,
            n = e.registry,
            i = function () {
              var e = _t(),
                t = $t(),
                r = e.y,
                n = e.x,
                i = Zt(),
                a = n + i.clientWidth,
                o = r + i.clientHeight;
              return {
                frame: Object( d.e )( {
                  top: r,
                  left: n,
                  right: a,
                  bottom: o
                } ),
                scroll: {
                  initial: e,
                  current: e,
                  max: t,
                  diff: {
                    value: M,
                    displacement: M
                  }
                }
              }
            }(),
            a = i.scroll.current,
            o = t.droppable,
            l = n.droppable.getAllByType( o.type ).map( ( function ( e ) {
              return e.callbacks.getDimensionAndWatchScroll( a, r )
            } ) ),
            c = n.draggable.getAllByType( t.draggable.type ).map( ( function ( e ) {
              return e.getDimension( a )
            } ) );
          return {
            dimensions: {
              draggables: re( c ),
              droppables: te( l )
            },
            critical: t,
            viewport: i
          }
        };

      function tr( e, t, r ) {
        return r.descriptor.id !== t.id && ( r.descriptor.type === t.type && "virtual" === e.droppable.getById( r.descriptor.droppableId ).descriptor.mode )
      }
      var rr, nr, ir = function ( e, t ) {
          var r = null,
            n = function ( e ) {
              var t = e.registry,
                r = e.callbacks,
                n = {
                  additions: {},
                  removals: {},
                  modified: {}
                },
                i = null,
                a = function () {
                  i || ( r.collectionStarting(), i = requestAnimationFrame( ( function () {
                    i = null;
                    var e = n,
                      a = e.additions,
                      o = e.removals,
                      l = e.modified,
                      c = b()( a ).map( ( function ( e ) {
                        return t.draggable.getById( e ).getDimension( M )
                      } ) ).sort( ( function ( e, t ) {
                        return e.descriptor.index - t.descriptor.index
                      } ) ),
                      u = b()( l ).map( ( function ( e ) {
                        return {
                          droppableId: e,
                          scroll: t.droppable.getById( e ).callbacks.getScrollWhileDragging()
                        }
                      } ) ),
                      d = {
                        additions: c,
                        removals: b()( o ),
                        modified: u
                      };
                    n = {
                      additions: {},
                      removals: {},
                      modified: {}
                    }, r.publish( d )
                  } ) ) )
                };
              return {
                add: function ( e ) {
                  var t = e.descriptor.id;
                  n.additions[ t ] = e, n.modified[ e.descriptor.droppableId ] = !0, n.removals[ t ] && delete n.removals[ t ], a()
                },
                remove: function ( e ) {
                  var t = e.descriptor;
                  n.removals[ t.id ] = !0, n.modified[ t.droppableId ] = !0, n.additions[ t.id ] && delete n.additions[ t.id ], a()
                },
                stop: function () {
                  i && ( cancelAnimationFrame( i ), i = null, n = {
                    additions: {},
                    removals: {},
                    modified: {}
                  } )
                }
              }
            }( {
              callbacks: {
                publish: t.publishWhileDragging,
                collectionStarting: t.collectionStarting
              },
              registry: e
            } ),
            i = function ( t ) {
              r || A( !1 );
              var i = r.critical.draggable;
              "ADDITION" === t.type && tr( e, i, t.value ) && n.add( t.value ), "REMOVAL" === t.type && tr( e, i, t.value ) && n.remove( t.value )
            };
          return {
            updateDroppableIsEnabled: function ( n, i ) {
              e.droppable.exists( n ) || A( !1 ), r && t.updateDroppableIsEnabled( {
                id: n,
                isEnabled: i
              } )
            },
            updateDroppableIsCombineEnabled: function ( n, i ) {
              r && ( e.droppable.exists( n ) || A( !1 ), t.updateDroppableIsCombineEnabled( {
                id: n,
                isCombineEnabled: i
              } ) )
            },
            scrollDroppable: function ( t, n ) {
              r && e.droppable.getById( t ).callbacks.scroll( n )
            },
            updateDroppableScroll: function ( n, i ) {
              r && ( e.droppable.exists( n ) || A( !1 ), t.updateDroppableScroll( {
                id: n,
                newScroll: i
              } ) )
            },
            startPublishing: function ( t ) {
              r && A( !1 );
              var n = e.draggable.getById( t.draggableId ),
                a = e.droppable.getById( n.descriptor.droppableId ),
                o = {
                  draggable: n.descriptor,
                  droppable: a.descriptor
                },
                l = e.subscribe( i );
              return r = {
                critical: o,
                unsubscribe: l
              }, er( {
                critical: o,
                registry: e,
                scrollOptions: t.scrollOptions
              } )
            },
            stopPublishing: function () {
              if ( r ) {
                n.stop();
                var t = r.critical.droppable;
                e.droppable.getAllByType( t.type ).forEach( ( function ( e ) {
                  return e.callbacks.dragStopped()
                } ) ), r.unsubscribe(), r = null
              }
            }
          }
        },
        ar = function ( e, t ) {
          return "IDLE" === e.phase || "DROP_ANIMATING" === e.phase && ( e.completed.result.draggableId !== t && "DROP" === e.completed.result.reason )
        },
        or = function ( e ) {
          window.scrollBy( e.x, e.y )
        },
        lr = Object( s.default )( ( function ( e ) {
          return ne( e ).filter( ( function ( e ) {
            return !!e.isEnabled && !!e.frame
          } ) )
        } ) ),
        cr = function ( e ) {
          var t = e.center,
            r = e.destination,
            n = e.droppables;
          if ( r ) {
            var i = n[ r ];
            return i.frame ? i : null
          }
          return function ( e, t ) {
            return $( lr( t ), ( function ( t ) {
              return t.frame || A( !1 ), Xe( t.frame.pageMarginBox )( e )
            } ) )
          }( t, n )
        },
        ur = .25,
        dr = .05,
        sr = 28,
        pr = function ( e ) {
          return Math.pow( e, 2 )
        },
        fr = {
          stopDampeningAt: 1200,
          accelerateAt: 360
        },
        gr = function ( e ) {
          var t = e.startOfRange,
            r = e.endOfRange,
            n = e.current,
            i = r - t;
          return 0 === i ? 0 : ( n - t ) / i
        },
        br = fr.accelerateAt,
        vr = fr.stopDampeningAt,
        mr = function ( e ) {
          var t = e.distanceToEdge,
            r = e.thresholds,
            n = e.dragStartTime,
            i = e.shouldUseTimeDampening,
            a = function ( e, t ) {
              if ( e > t.startScrollingFrom ) return 0;
              if ( e <= t.maxScrollValueAt ) return sr;
              if ( e === t.startScrollingFrom ) return 1;
              var r = gr( {
                  startOfRange: t.maxScrollValueAt,
                  endOfRange: t.startScrollingFrom,
                  current: e
                } ),
                n = sr * pr( 1 - r );
              return Math.ceil( n )
            }( t, r );
          return 0 === a ? 0 : i ? Math.max( function ( e, t ) {
            var r = t,
              n = vr,
              i = h()() - r;
            if ( i >= vr ) return e;
            if ( i < br ) return 1;
            var a = gr( {
                startOfRange: br,
                endOfRange: n,
                current: i
              } ),
              o = e * pr( a );
            return Math.ceil( o )
          }( a, n ), 1 ) : a
        },
        hr = function ( e ) {
          var t = e.container,
            r = e.distanceToEdges,
            n = e.dragStartTime,
            i = e.axis,
            a = e.shouldUseTimeDampening,
            o = function ( e, t ) {
              return {
                startScrollingFrom: e[ t.size ] * ur,
                maxScrollValueAt: e[ t.size ] * dr
              }
            }( t, i );
          return r[ i.end ] < r[ i.start ] ? mr( {
            distanceToEdge: r[ i.end ],
            thresholds: o,
            dragStartTime: n,
            shouldUseTimeDampening: a
          } ) : -1 * mr( {
            distanceToEdge: r[ i.start ],
            thresholds: o,
            dragStartTime: n,
            shouldUseTimeDampening: a
          } )
        },
        yr = z( ( function ( e ) {
          return 0 === e ? 0 : e
        } ) ),
        Ir = function ( e ) {
          var t = e.dragStartTime,
            r = e.container,
            n = e.subject,
            i = e.center,
            a = e.shouldUseTimeDampening,
            o = {
              top: i.y - r.top,
              right: r.right - i.x,
              bottom: r.bottom - i.y,
              left: i.x - r.left
            },
            l = hr( {
              container: r,
              distanceToEdges: o,
              dragStartTime: t,
              axis: ve,
              shouldUseTimeDampening: a
            } ),
            c = hr( {
              container: r,
              distanceToEdges: o,
              dragStartTime: t,
              axis: me,
              shouldUseTimeDampening: a
            } ),
            u = yr( {
              x: c,
              y: l
            } );
          if ( k( u, M ) ) return null;
          var d = function ( e ) {
            var t = e.container,
              r = e.subject,
              n = e.proposedScroll,
              i = r.height > t.height,
              a = r.width > t.width;
            return a || i ? a && i ? null : {
              x: a ? 0 : n.x,
              y: i ? 0 : n.y
            } : n
          }( {
            container: r,
            subject: n,
            proposedScroll: u
          } );
          return d ? k( d, M ) ? null : d : null
        },
        Or = z( ( function ( e ) {
          return 0 === e ? 0 : e > 0 ? 1 : -1
        } ) ),
        Dr = ( rr = function ( e, t ) {
          return e < 0 ? e : e > t ? e - t : 0
        }, function ( e ) {
          var t = e.current,
            r = e.max,
            n = e.change,
            i = _( t, n ),
            a = {
              x: rr( i.x, r.x ),
              y: rr( i.y, r.y )
            };
          return k( a, M ) ? null : a
        } ),
        xr = function ( e ) {
          var t = e.max,
            r = e.current,
            n = e.change,
            i = {
              x: Math.max( r.x, t.x ),
              y: Math.max( r.y, t.y )
            },
            a = Or( n ),
            o = Dr( {
              max: i,
              current: r,
              change: a
            } );
          return !o || ( 0 !== a.x && 0 === o.x || 0 !== a.y && 0 === o.y )
        },
        Er = function ( e, t ) {
          return xr( {
            current: e.scroll.current,
            max: e.scroll.max,
            change: t
          } )
        },
        wr = function ( e, t ) {
          var r = e.frame;
          return !!r && xr( {
            current: r.scroll.current,
            max: r.scroll.max,
            change: t
          } )
        },
        Cr = function ( e ) {
          var t = e.state,
            r = e.dragStartTime,
            n = e.shouldUseTimeDampening,
            i = e.scrollWindow,
            a = e.scrollDroppable,
            o = t.current.page.borderBoxCenter,
            l = t.dimensions.draggables[ t.critical.draggable.id ].page.marginBox;
          if ( t.isWindowScrollAllowed ) {
            var c = function ( e ) {
              var t = e.viewport,
                r = e.subject,
                n = e.center,
                i = e.dragStartTime,
                a = e.shouldUseTimeDampening,
                o = Ir( {
                  dragStartTime: i,
                  container: t.frame,
                  subject: r,
                  center: n,
                  shouldUseTimeDampening: a
                } );
              return o && Er( t, o ) ? o : null
            }( {
              dragStartTime: r,
              viewport: t.viewport,
              subject: l,
              center: o,
              shouldUseTimeDampening: n
            } );
            if ( c ) return void i( c )
          }
          var u = cr( {
            center: o,
            destination: qe( t.impact ),
            droppables: t.dimensions.droppables
          } );
          if ( u ) {
            var d = function ( e ) {
              var t = e.droppable,
                r = e.subject,
                n = e.center,
                i = e.dragStartTime,
                a = e.shouldUseTimeDampening,
                o = t.frame;
              if ( !o ) return null;
              var l = Ir( {
                dragStartTime: i,
                container: o.pageMarginBox,
                subject: r,
                center: n,
                shouldUseTimeDampening: a
              } );
              return l && wr( t, l ) ? l : null
            }( {
              dragStartTime: r,
              droppable: u,
              subject: l,
              center: o,
              shouldUseTimeDampening: n
            } );
            d && a( u.descriptor.id, d )
          }
        },
        Ar = function ( e ) {
          var t = e.move,
            r = e.scrollDroppable,
            n = e.scrollWindow,
            i = function ( e, t ) {
              if ( !wr( e, t ) ) return t;
              var n = function ( e, t ) {
                var r = e.frame;
                return r && wr( e, t ) ? Dr( {
                  current: r.scroll.current,
                  max: r.scroll.max,
                  change: t
                } ) : null
              }( e, t );
              if ( !n ) return r( e.descriptor.id, t ), null;
              var i = F( t, n );
              return r( e.descriptor.id, i ), F( t, i )
            },
            a = function ( e, t, r ) {
              if ( !e ) return r;
              if ( !Er( t, r ) ) return r;
              var i = function ( e, t ) {
                if ( !Er( e, t ) ) return null;
                var r = e.scroll.max,
                  n = e.scroll.current;
                return Dr( {
                  current: n,
                  max: r,
                  change: t
                } )
              }( t, r );
              if ( !i ) return n( r ), null;
              var a = F( r, i );
              return n( a ), F( r, a )
            };
          return function ( e ) {
            var r = e.scrollJumpRequest;
            if ( r ) {
              var n = qe( e.impact );
              n || A( !1 );
              var o = i( e.dimensions.droppables[ n ], r );
              if ( o ) {
                var l = e.viewport,
                  c = a( e.isWindowScrollAllowed, l, o );
                c && function ( e, r ) {
                  var n = _( e.current.client.selection, r );
                  t( {
                    client: n
                  } )
                }( e, c )
              }
            }
          }
        },
        jr = function ( e ) {
          var t = e.scrollDroppable,
            r = e.scrollWindow,
            n = e.move,
            i = function ( e ) {
              var t = e.scrollWindow,
                r = e.scrollDroppable,
                n = Object( v.a )( t ),
                i = Object( v.a )( r ),
                a = null,
                o = function ( e ) {
                  a || A( !1 );
                  var t = a,
                    r = t.shouldUseTimeDampening,
                    o = t.dragStartTime;
                  Cr( {
                    state: e,
                    scrollWindow: n,
                    scrollDroppable: i,
                    dragStartTime: o,
                    shouldUseTimeDampening: r
                  } )
                };
              return {
                start: function ( e ) {
                  a && A( !1 );
                  var t = h()(),
                    r = !1,
                    n = function () {
                      r = !0
                    };
                  Cr( {
                    state: e,
                    dragStartTime: 0,
                    shouldUseTimeDampening: !1,
                    scrollWindow: n,
                    scrollDroppable: n
                  } ), a = {
                    dragStartTime: t,
                    shouldUseTimeDampening: r
                  }, r && o( e )
                },
                stop: function () {
                  a && ( n.cancel(), i.cancel(), a = null )
                },
                scroll: o
              }
            }( {
              scrollWindow: r,
              scrollDroppable: t
            } ),
            a = Ar( {
              move: n,
              scrollWindow: r,
              scrollDroppable: t
            } );
          return {
            scroll: function ( e ) {
              "DRAGGING" === e.phase && ( "FLUID" !== e.movementMode ? e.scrollJumpRequest && a( e ) : i.scroll( e ) )
            },
            start: i.start,
            stop: i.stop
          }
        },
        Br = {
          base: nr = "data-rbd-drag-handle",
          draggableId: nr + "-draggable-id",
          contextId: nr + "-context-id"
        },
        Rr = function () {
          var e = "data-rbd-draggable";
          return {
            base: e,
            contextId: e + "-context-id",
            id: e + "-id"
          }
        }(),
        Nr = function () {
          var e = "data-rbd-droppable";
          return {
            base: e,
            contextId: e + "-context-id",
            id: e + "-id"
          }
        }(),
        Sr = {
          contextId: "data-rbd-scroll-container-context-id"
        },
        Pr = function ( e, t ) {
          return e.map( ( function ( e ) {
            var r = e.styles[ t ];
            return r ? e.selector + " { " + r + " }" : ""
          } ) ).join( " " )
        },
        Lr = "undefined" != typeof window && void 0 !== window.document && void 0 !== window.document.createElement ? n.useLayoutEffect : n.useEffect,
        Tr = function () {
          var e = document.querySelector( "head" );
          return e || A( !1 ), e
        },
        Gr = function ( e ) {
          var t = document.createElement( "style" );
          return e && t.setAttribute( "nonce", e ), t.type = "text/css", t
        };

      function Mr( e, t ) {
        var r = Object( a.c )( ( function () {
            return function ( e ) {
              var t, r, n, i = ( t = e, function ( e ) {
                  return "[" + e + '="' + t + '"]'
                } ),
                a = ( r = "\n      cursor: -webkit-grab;\n      cursor: grab;\n    ", {
                  selector: i( Br.contextId ),
                  styles: {
                    always: "\n          -webkit-touch-callout: none;\n          -webkit-tap-highlight-color: rgba(0,0,0,0);\n          touch-action: manipulation;\n        ",
                    resting: r,
                    dragging: "pointer-events: none;",
                    dropAnimating: r
                  }
                } ),
                o = [ ( n = "\n      transition: " + Rt.outOfTheWay + ";\n    ", {
                  selector: i( Rr.contextId ),
                  styles: {
                    dragging: n,
                    dropAnimating: n,
                    userCancel: n
                  }
                } ), a, {
                  selector: i( Nr.contextId ),
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
                always: Pr( o, "always" ),
                resting: Pr( o, "resting" ),
                dragging: Pr( o, "dragging" ),
                dropAnimating: Pr( o, "dropAnimating" ),
                userCancel: Pr( o, "userCancel" )
              }
            }( e )
          } ), [ e ] ),
          i = Object( n.useRef )( null ),
          o = Object( n.useRef )( null ),
          l = Object( a.a )( Object( s.default )( ( function ( e ) {
            var t = o.current;
            t || A( !1 ), t.textContent = e
          } ) ), [] ),
          c = Object( a.a )( ( function ( e ) {
            var t = i.current;
            t || A( !1 ), t.textContent = e
          } ), [] );
        Lr( ( function () {
          ( i.current || o.current ) && A( !1 );
          var n = Gr( t ),
            a = Gr( t );
          return i.current = n, o.current = a, n.setAttribute( "data-rbd-always", e ), a.setAttribute( "data-rbd-dynamic", e ), Tr().appendChild( n ), Tr().appendChild( a ), c( r.always ), l( r.resting ),
            function () {
              var e = function ( e ) {
                var t = e.current;
                t || A( !1 ), Tr().removeChild( t ), e.current = null
              };
              e( i ), e( o )
            }
        } ), [ t, c, l, r.always, r.resting, e ] );
        var u = Object( a.a )( ( function () {
            return l( r.dragging )
          } ), [ l, r.dragging ] ),
          d = Object( a.a )( ( function ( e ) {
            l( "DROP" !== e ? r.userCancel : r.dropAnimating )
          } ), [ l, r.dropAnimating, r.userCancel ] ),
          p = Object( a.a )( ( function () {
            o.current && l( r.resting )
          } ), [ l, r.resting ] );
        return Object( a.c )( ( function () {
          return {
            dragging: u,
            dropping: d,
            resting: p
          }
        } ), [ u, d, p ] )
      }
      var _r = function ( e ) {
        return e && e.ownerDocument ? e.ownerDocument.defaultView : window
      };

      function Fr( e ) {
        return e instanceof _r( e ).HTMLElement
      }

      function kr( e, t ) {
        var r = "[" + Br.contextId + '="' + e + '"]',
          n = ee( document.querySelectorAll( r ) );
        if ( !n.length ) return null;
        var i = $( n, ( function ( e ) {
          return e.getAttribute( Br.draggableId ) === t
        } ) );
        return i && Fr( i ) ? i : null
      }

      function Wr() {
        var e = {
            draggables: {},
            droppables: {}
          },
          t = [];

        function r( e ) {
          t.length && t.forEach( ( function ( t ) {
            return t( e )
          } ) )
        }

        function n( t ) {
          return e.draggables[ t ] || null
        }

        function i( t ) {
          return e.droppables[ t ] || null
        }
        return {
          draggable: {
            register: function ( t ) {
              e.draggables[ t.descriptor.id ] = t, r( {
                type: "ADDITION",
                value: t
              } )
            },
            update: function ( t, r ) {
              var n = e.draggables[ r.descriptor.id ];
              n && n.uniqueId === t.uniqueId && ( delete e.draggables[ r.descriptor.id ], e.draggables[ t.descriptor.id ] = t )
            },
            unregister: function ( t ) {
              var i = t.descriptor.id,
                a = n( i );
              a && t.uniqueId === a.uniqueId && ( delete e.draggables[ i ], r( {
                type: "REMOVAL",
                value: t
              } ) )
            },
            getById: function ( e ) {
              var t = n( e );
              return t || A( !1 ), t
            },
            findById: n,
            exists: function ( e ) {
              return Boolean( n( e ) )
            },
            getAllByType: function ( t ) {
              return Q( e.draggables ).filter( ( function ( e ) {
                return e.descriptor.type === t
              } ) )
            }
          },
          droppable: {
            register: function ( t ) {
              e.droppables[ t.descriptor.id ] = t
            },
            unregister: function ( t ) {
              var r = i( t.descriptor.id );
              r && t.uniqueId === r.uniqueId && delete e.droppables[ t.descriptor.id ]
            },
            getById: function ( e ) {
              var t = i( e );
              return t || A( !1 ), t
            },
            findById: i,
            exists: function ( e ) {
              return Boolean( i( e ) )
            },
            getAllByType: function ( t ) {
              return Q( e.droppables ).filter( ( function ( e ) {
                return e.descriptor.type === t
              } ) )
            }
          },
          subscribe: function ( e ) {
            return t.push( e ),
              function () {
                var r = t.indexOf( e ); - 1 !== r && t.splice( r, 1 )
              }
          },
          clean: function () {
            e.draggables = {}, e.droppables = {}, t.length = 0
          }
        }
      }
      var Ur = i.a.createContext( null ),
        Hr = function () {
          var e = document.body;
          return e || A( !1 ), e
        },
        Vr = {
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
      var zr = i.a.createContext( null );

      function qr( e ) {
        0
      }

      function Yr( e, t ) {
        qr()
      }

      function Jr() {
        Yr()
      }

      function Xr( e ) {
        var t = Object( n.useRef )( e );
        return Object( n.useEffect )( ( function () {
          t.current = e
        } ) ), t
      }
      var Kr, Qr = ( ( Kr = {} )[ 13 ] = !0, Kr[ 9 ] = !0, Kr ),
        Zr = function ( e ) {
          Qr[ e.keyCode ] && e.preventDefault()
        },
        $r = function () {
          var e = "visibilitychange";
          return "undefined" == typeof document ? e : $( [ e, "ms" + e, "webkit" + e, "moz" + e, "o" + e ], ( function ( e ) {
            return "on" + e in document
          } ) ) || e
        }();
      var en, tn = {
        type: "IDLE"
      };

      function rn( e ) {
        var t = e.cancel,
          r = e.completed,
          n = e.getPhase,
          i = e.setPhase;
        return [ {
          eventName: "mousemove",
          fn: function ( e ) {
            var t = e.button,
              r = e.clientX,
              a = e.clientY;
            if ( 0 === t ) {
              var o = {
                  x: r,
                  y: a
                },
                l = n();
              if ( "DRAGGING" === l.type ) return e.preventDefault(), void l.actions.move( o );
              "PENDING" !== l.type && A( !1 );
              var c = l.point;
              if ( u = c, d = o, Math.abs( d.x - u.x ) >= 5 || Math.abs( d.y - u.y ) >= 5 ) {
                var u, d;
                e.preventDefault();
                var s = l.actions.fluidLift( o );
                i( {
                  type: "DRAGGING",
                  actions: s
                } )
              }
            }
          }
        }, {
          eventName: "mouseup",
          fn: function ( e ) {
            var i = n();
            "DRAGGING" === i.type ? ( e.preventDefault(), i.actions.drop( {
              shouldBlockNextClick: !0
            } ), r() ) : t()
          }
        }, {
          eventName: "mousedown",
          fn: function ( e ) {
            "DRAGGING" === n().type && e.preventDefault(), t()
          }
        }, {
          eventName: "keydown",
          fn: function ( e ) {
            if ( "PENDING" !== n().type ) return 27 === e.keyCode ? ( e.preventDefault(), void t() ) : void Zr( e );
            t()
          }
        }, {
          eventName: "resize",
          fn: t
        }, {
          eventName: "scroll",
          options: {
            passive: !0,
            capture: !1
          },
          fn: function () {
            "PENDING" === n().type && t()
          }
        }, {
          eventName: "webkitmouseforcedown",
          fn: function ( e ) {
            var r = n();
            "IDLE" === r.type && A( !1 ), r.actions.shouldRespectForcePress() ? t() : e.preventDefault()
          }
        }, {
          eventName: $r,
          fn: t
        } ]
      }

      function nn() {}
      var an = ( ( en = {} )[ 34 ] = !0, en[ 33 ] = !0, en[ 36 ] = !0, en[ 35 ] = !0, en );

      function on( e, t ) {
        function r() {
          t(), e.cancel()
        }
        return [ {
          eventName: "keydown",
          fn: function ( n ) {
            return 27 === n.keyCode ? ( n.preventDefault(), void r() ) : 32 === n.keyCode ? ( n.preventDefault(), t(), void e.drop() ) : 40 === n.keyCode ? ( n.preventDefault(), void e.moveDown() ) : 38 === n.keyCode ? ( n.preventDefault(), void e.moveUp() ) : 39 === n.keyCode ? ( n.preventDefault(), void e.moveRight() ) : 37 === n.keyCode ? ( n.preventDefault(), void e.moveLeft() ) : void( an[ n.keyCode ] ? n.preventDefault() : Zr( n ) )
          }
        }, {
          eventName: "mousedown",
          fn: r
        }, {
          eventName: "mouseup",
          fn: r
        }, {
          eventName: "click",
          fn: r
        }, {
          eventName: "touchstart",
          fn: r
        }, {
          eventName: "resize",
          fn: r
        }, {
          eventName: "wheel",
          fn: r,
          options: {
            passive: !0
          }
        }, {
          eventName: $r,
          fn: r
        } ]
      }
      var ln = {
        type: "IDLE"
      };
      var cn = {
        input: !0,
        button: !0,
        textarea: !0,
        select: !0,
        option: !0,
        optgroup: !0,
        video: !0,
        audio: !0
      };

      function un( e, t ) {
        var r = t.target;
        return !!Fr( r ) && function e( t, r ) {
          if ( null == r ) return !1;
          if ( Boolean( cn[ r.tagName.toLowerCase() ] ) ) return !0;
          var n = r.getAttribute( "contenteditable" );
          return "true" === n || "" === n || r !== t && e( t, r.parentElement )
        }( e, r )
      }
      var dn = function ( e ) {
        return Object( d.e )( e.getBoundingClientRect() ).center
      };
      var sn = "undefined" == typeof document ? "matches" : $( [ "matches", "msMatchesSelector", "webkitMatchesSelector" ], ( function ( e ) {
        return e in Element.prototype
      } ) ) || "matches";

      function pn( e, t ) {
        return e.closest ? e.closest( t ) : function e( t, r ) {
          return null == t ? null : t[ sn ]( r ) ? t : e( t.parentElement, r )
        }( e, t )
      }

      function fn( e, t ) {
        var r, n = t.target;
        if ( !( ( r = n ) instanceof _r( r ).Element ) ) return null;
        var i = pn( n, function ( e ) {
          return "[" + Br.contextId + '="' + e + '"]'
        }( e ) );
        return i && Fr( i ) ? i : null
      }

      function gn( e ) {
        e.preventDefault()
      }

      function bn( e ) {
        var t = e.expected,
          r = e.phase,
          n = e.isLockActive;
        e.shouldWarn;
        return !!n() && t === r
      }

      function vn( e ) {
        var t = e.lockAPI,
          r = e.store,
          n = e.registry,
          i = e.draggableId;
        if ( t.isClaimed() ) return !1;
        var a = n.draggable.findById( i );
        return !!a && ( !!a.options.isEnabled && !!ar( r.getState(), i ) )
      }

      function mn( e ) {
        var t = e.lockAPI,
          r = e.contextId,
          n = e.store,
          i = e.registry,
          a = e.draggableId,
          o = e.forceSensorStop,
          c = e.sourceEvent;
        if ( !vn( {
            lockAPI: t,
            store: n,
            registry: i,
            draggableId: a
          } ) ) return null;
        var u = i.draggable.getById( a ),
          d = function ( e, t ) {
            var r = "[" + Rr.contextId + '="' + e + '"]',
              n = $( ee( document.querySelectorAll( r ) ), ( function ( e ) {
                return e.getAttribute( Rr.id ) === t
              } ) );
            return n && Fr( n ) ? n : null
          }( r, u.descriptor.id );
        if ( !d ) return null;
        if ( c && !u.options.canDragInteractiveElements && un( d, c ) ) return null;
        var s = t.claim( o || E ),
          p = "PRE_DRAG";

        function f() {
          return u.options.shouldRespectForcePress
        }

        function g() {
          return t.isActive( s )
        }
        var b = function ( e, t ) {
          bn( {
            expected: e,
            phase: p,
            isLockActive: g,
            shouldWarn: !0
          } ) && n.dispatch( t() )
        }.bind( this, "DRAGGING" );

        function m( e ) {
          function r() {
            t.release(), p = "COMPLETED"
          }

          function i( t, i ) {
            if ( void 0 === i && ( i = {
                shouldBlockNextClick: !1
              } ), e.cleanup(), i.shouldBlockNextClick ) {
              var a = w( window, [ {
                eventName: "click",
                fn: gn,
                options: {
                  once: !0,
                  passive: !1,
                  capture: !0
                }
              } ] );
              setTimeout( a )
            }
            r(), n.dispatch( Et( {
              reason: t
            } ) )
          }
          return "PRE_DRAG" !== p && ( r(), "PRE_DRAG" !== p && A( !1 ) ), n.dispatch( function ( e ) {
            return {
              type: "LIFT",
              payload: e
            }
          }( e.liftActionArgs ) ), p = "DRAGGING", Object( l.a )( {
            isActive: function () {
              return bn( {
                expected: "DRAGGING",
                phase: p,
                isLockActive: g,
                shouldWarn: !1
              } )
            },
            shouldRespectForcePress: f,
            drop: function ( e ) {
              return i( "DROP", e )
            },
            cancel: function ( e ) {
              return i( "CANCEL", e )
            }
          }, e.actions )
        }
        return {
          isActive: function () {
            return bn( {
              expected: "PRE_DRAG",
              phase: p,
              isLockActive: g,
              shouldWarn: !1
            } )
          },
          shouldRespectForcePress: f,
          fluidLift: function ( e ) {
            var t = Object( v.a )( ( function ( e ) {
                b( ( function () {
                  return ht( {
                    client: e
                  } )
                } ) )
              } ) ),
              r = m( {
                liftActionArgs: {
                  id: a,
                  clientSelection: e,
                  movementMode: "FLUID"
                },
                cleanup: function () {
                  return t.cancel()
                },
                actions: {
                  move: t
                }
              } );
            return Object( l.a )( {}, r, {
              move: t
            } )
          },
          snapLift: function () {
            var e = {
              moveUp: function () {
                return b( yt )
              },
              moveRight: function () {
                return b( Ot )
              },
              moveDown: function () {
                return b( It )
              },
              moveLeft: function () {
                return b( Dt )
              }
            };
            return m( {
              liftActionArgs: {
                id: a,
                clientSelection: dn( d ),
                movementMode: "SNAP"
              },
              cleanup: E,
              actions: e
            } )
          },
          abort: function () {
            bn( {
              expected: "PRE_DRAG",
              phase: p,
              isLockActive: g,
              shouldWarn: !0
            } ) && t.release()
          }
        }
      }
      var hn = [ function ( e ) {
        var t = Object( n.useRef )( tn ),
          r = Object( n.useRef )( E ),
          i = Object( a.c )( ( function () {
            return {
              eventName: "mousedown",
              fn: function ( t ) {
                if ( !t.defaultPrevented && 0 === t.button && !( t.ctrlKey || t.metaKey || t.shiftKey || t.altKey ) ) {
                  var n = e.findClosestDraggableId( t );
                  if ( n ) {
                    var i = e.tryGetLock( n, c, {
                      sourceEvent: t
                    } );
                    if ( i ) {
                      t.preventDefault();
                      var a = {
                        x: t.clientX,
                        y: t.clientY
                      };
                      r.current(), s( i, a )
                    }
                  }
                }
              }
            }
          } ), [ e ] ),
          o = Object( a.c )( ( function () {
            return {
              eventName: "webkitmouseforcewillbegin",
              fn: function ( t ) {
                if ( !t.defaultPrevented ) {
                  var r = e.findClosestDraggableId( t );
                  if ( r ) {
                    var n = e.findOptionsForDraggable( r );
                    n && ( n.shouldRespectForcePress || e.canGetLock( r ) && t.preventDefault() )
                  }
                }
              }
            }
          } ), [ e ] ),
          l = Object( a.a )( ( function () {
            r.current = w( window, [ o, i ], {
              passive: !1,
              capture: !0
            } )
          } ), [ o, i ] ),
          c = Object( a.a )( ( function () {
            "IDLE" !== t.current.type && ( t.current = tn, r.current(), l() )
          } ), [ l ] ),
          u = Object( a.a )( ( function () {
            var e = t.current;
            c(), "DRAGGING" === e.type && e.actions.cancel( {
              shouldBlockNextClick: !0
            } ), "PENDING" === e.type && e.actions.abort()
          } ), [ c ] ),
          d = Object( a.a )( ( function () {
            var e = rn( {
              cancel: u,
              completed: c,
              getPhase: function () {
                return t.current
              },
              setPhase: function ( e ) {
                t.current = e
              }
            } );
            r.current = w( window, e, {
              capture: !0,
              passive: !1
            } )
          } ), [ u, c ] ),
          s = Object( a.a )( ( function ( e, r ) {
            "IDLE" !== t.current.type && A( !1 ), t.current = {
              type: "PENDING",
              point: r,
              actions: e
            }, d()
          } ), [ d ] );
        Lr( ( function () {
          return l(),
            function () {
              r.current()
            }
        } ), [ l ] )
      }, function ( e ) {
        var t = Object( n.useRef )( nn ),
          r = Object( a.c )( ( function () {
            return {
              eventName: "keydown",
              fn: function ( r ) {
                if ( !r.defaultPrevented && 32 === r.keyCode ) {
                  var n = e.findClosestDraggableId( r );
                  if ( n ) {
                    var a = e.tryGetLock( n, c, {
                      sourceEvent: r
                    } );
                    if ( a ) {
                      r.preventDefault();
                      var o = !0,
                        l = a.snapLift();
                      t.current(), t.current = w( window, on( l, c ), {
                        capture: !0,
                        passive: !1
                      } )
                    }
                  }
                }

                function c() {
                  o || A( !1 ), o = !1, t.current(), i()
                }
              }
            }
          } ), [ e ] ),
          i = Object( a.a )( ( function () {
            t.current = w( window, [ r ], {
              passive: !1,
              capture: !0
            } )
          } ), [ r ] );
        Lr( ( function () {
          return i(),
            function () {
              t.current()
            }
        } ), [ i ] )
      }, function ( e ) {
        var t = Object( n.useRef )( ln ),
          r = Object( n.useRef )( E ),
          i = Object( a.a )( ( function () {
            return t.current
          } ), [] ),
          o = Object( a.a )( ( function ( e ) {
            t.current = e
          } ), [] ),
          l = Object( a.c )( ( function () {
            return {
              eventName: "touchstart",
              fn: function ( t ) {
                if ( !t.defaultPrevented ) {
                  var n = e.findClosestDraggableId( t );
                  if ( n ) {
                    var i = e.tryGetLock( n, u, {
                      sourceEvent: t
                    } );
                    if ( i ) {
                      var a = t.touches[ 0 ],
                        o = {
                          x: a.clientX,
                          y: a.clientY
                        };
                      r.current(), f( i, o )
                    }
                  }
                }
              }
            }
          } ), [ e ] ),
          c = Object( a.a )( ( function () {
            r.current = w( window, [ l ], {
              capture: !0,
              passive: !1
            } )
          } ), [ l ] ),
          u = Object( a.a )( ( function () {
            var e = t.current;
            "IDLE" !== e.type && ( "PENDING" === e.type && clearTimeout( e.longPressTimerId ), o( ln ), r.current(), c() )
          } ), [ c, o ] ),
          d = Object( a.a )( ( function () {
            var e = t.current;
            u(), "DRAGGING" === e.type && e.actions.cancel( {
              shouldBlockNextClick: !0
            } ), "PENDING" === e.type && e.actions.abort()
          } ), [ u ] ),
          s = Object( a.a )( ( function () {
            var e = {
                capture: !0,
                passive: !1
              },
              t = {
                cancel: d,
                completed: u,
                getPhase: i
              },
              n = w( window, function ( e ) {
                var t = e.cancel,
                  r = e.completed,
                  n = e.getPhase;
                return [ {
                  eventName: "touchmove",
                  options: {
                    capture: !1
                  },
                  fn: function ( e ) {
                    var r = n();
                    if ( "DRAGGING" === r.type ) {
                      r.hasMoved = !0;
                      var i = e.touches[ 0 ],
                        a = {
                          x: i.clientX,
                          y: i.clientY
                        };
                      e.preventDefault(), r.actions.move( a )
                    } else t()
                  }
                }, {
                  eventName: "touchend",
                  fn: function ( e ) {
                    var i = n();
                    "DRAGGING" === i.type ? ( e.preventDefault(), i.actions.drop( {
                      shouldBlockNextClick: !0
                    } ), r() ) : t()
                  }
                }, {
                  eventName: "touchcancel",
                  fn: function ( e ) {
                    "DRAGGING" === n().type ? ( e.preventDefault(), t() ) : t()
                  }
                }, {
                  eventName: "touchforcechange",
                  fn: function ( e ) {
                    var r = n();
                    "IDLE" === r.type && A( !1 );
                    var i = e.touches[ 0 ];
                    if ( i && i.force >= .15 ) {
                      var a = r.actions.shouldRespectForcePress();
                      if ( "PENDING" !== r.type ) return a ? r.hasMoved ? void e.preventDefault() : void t() : void e.preventDefault();
                      a && t()
                    }
                  }
                }, {
                  eventName: $r,
                  fn: t
                } ]
              }( t ), e ),
              a = w( window, function ( e ) {
                var t = e.cancel,
                  r = e.getPhase;
                return [ {
                  eventName: "orientationchange",
                  fn: t
                }, {
                  eventName: "resize",
                  fn: t
                }, {
                  eventName: "contextmenu",
                  fn: function ( e ) {
                    e.preventDefault()
                  }
                }, {
                  eventName: "keydown",
                  fn: function ( e ) {
                    "DRAGGING" === r().type ? ( 27 === e.keyCode && e.preventDefault(), t() ) : t()
                  }
                }, {
                  eventName: $r,
                  fn: t
                } ]
              }( t ), e );
            r.current = function () {
              n(), a()
            }
          } ), [ d, i, u ] ),
          p = Object( a.a )( ( function () {
            var e = i();
            "PENDING" !== e.type && A( !1 );
            var t = e.actions.fluidLift( e.point );
            o( {
              type: "DRAGGING",
              actions: t,
              hasMoved: !1
            } )
          } ), [ i, o ] ),
          f = Object( a.a )( ( function ( e, t ) {
            "IDLE" !== i().type && A( !1 );
            var r = setTimeout( p, 120 );
            o( {
              type: "PENDING",
              point: t,
              actions: e,
              longPressTimerId: r
            } ), s()
          } ), [ s, i, o, p ] );
        Lr( ( function () {
          return c(),
            function () {
              r.current();
              var e = i();
              "PENDING" === e.type && ( clearTimeout( e.longPressTimerId ), o( ln ) )
            }
        } ), [ i, c, o ] ), Lr( ( function () {
          return w( window, [ {
            eventName: "touchmove",
            fn: function () {},
            options: {
              capture: !1,
              passive: !1
            }
          } ] )
        } ), [] )
      } ];

      function yn( e ) {
        var t = e.contextId,
          r = e.store,
          i = e.registry,
          o = e.customSensors,
          l = e.enableDefaultSensors,
          c = [].concat( l ? hn : [], o || [] ),
          u = Object( n.useState )( ( function () {
            return function () {
              var e = null;

              function t() {
                e || A( !1 ), e = null
              }
              return {
                isClaimed: function () {
                  return Boolean( e )
                },
                isActive: function ( t ) {
                  return t === e
                },
                claim: function ( t ) {
                  e && A( !1 );
                  var r = {
                    abandon: t
                  };
                  return e = r, r
                },
                release: t,
                tryAbandon: function () {
                  e && ( e.abandon(), t() )
                }
              }
            }()
          } ) )[ 0 ],
          d = Object( a.a )( ( function ( e, t ) {
            e.isDragging && !t.isDragging && u.tryAbandon()
          } ), [ u ] );
        Lr( ( function () {
          var e = r.getState();
          return r.subscribe( ( function () {
            var t = r.getState();
            d( e, t ), e = t
          } ) )
        } ), [ u, r, d ] ), Lr( ( function () {
          return u.tryAbandon
        } ), [ u.tryAbandon ] );
        var s = Object( a.a )( ( function ( e ) {
            return vn( {
              lockAPI: u,
              registry: i,
              store: r,
              draggableId: e
            } )
          } ), [ u, i, r ] ),
          p = Object( a.a )( ( function ( e, n, a ) {
            return mn( {
              lockAPI: u,
              registry: i,
              contextId: t,
              store: r,
              draggableId: e,
              forceSensorStop: n,
              sourceEvent: a && a.sourceEvent ? a.sourceEvent : null
            } )
          } ), [ t, u, i, r ] ),
          f = Object( a.a )( ( function ( e ) {
            return function ( e, t ) {
              var r = fn( e, t );
              return r ? r.getAttribute( Br.draggableId ) : null
            }( t, e )
          } ), [ t ] ),
          g = Object( a.a )( ( function ( e ) {
            var t = i.draggable.findById( e );
            return t ? t.options : null
          } ), [ i.draggable ] ),
          b = Object( a.a )( u.tryAbandon, [ u ] ),
          v = Object( a.a )( u.isClaimed, [ u ] ),
          m = Object( a.c )( ( function () {
            return {
              canGetLock: s,
              tryGetLock: p,
              findClosestDraggableId: f,
              findOptionsForDraggable: g,
              tryReleaseLock: b,
              isLockClaimed: v
            }
          } ), [ s, p, f, g, b, v ] );
        qr();
        for ( var h = 0; h < c.length; h++ ) c[ h ]( m )
      }

      function In( e ) {
        return e.current || A( !1 ), e.current
      }

      function On( e ) {
        var t = e.contextId,
          r = e.setCallbacks,
          o = e.sensors,
          d = e.nonce,
          s = e.liftInstruction,
          p = Object( n.useRef )( null );
        Jr();
        var f = Xr( e ),
          g = Object( a.a )( ( function () {
            return function ( e ) {
              return {
                onBeforeCapture: e.onBeforeCapture,
                onBeforeDragStart: e.onBeforeDragStart,
                onDragStart: e.onDragStart,
                onDragEnd: e.onDragEnd,
                onDragUpdate: e.onDragUpdate
              }
            }( f.current )
          } ), [ f ] ),
          b = function ( e ) {
            var t = Object( a.c )( ( function () {
                return function ( e ) {
                  return "rbd-announcement-" + e
                }( e )
              } ), [ e ] ),
              r = Object( n.useRef )( null );
            return Object( n.useEffect )( ( function () {
              var e = document.createElement( "div" );
              return r.current = e, e.id = t, e.setAttribute( "aria-live", "assertive" ), e.setAttribute( "role", "log" ), e.setAttribute( "aria-atomic", "true" ), I()( e.style, Vr ), Hr().appendChild( e ),
                function () {
                  setTimeout( ( function () {
                    Hr().removeChild( e ), e === r.current && ( r.current = null )
                  } ) )
                }
            } ), [ t ] ), Object( a.a )( ( function ( e ) {
              var t = r.current;
              t && ( t.textContent = e )
            } ), [] )
          }( t ),
          v = function ( e, t ) {
            var r = Object( a.c )( ( function () {
              return function ( e ) {
                return "rbd-lift-instruction-" + e
              }( e )
            } ), [ e ] );
            return Object( n.useEffect )( ( function () {
              var e = document.createElement( "div" );
              return e.id = r, e.textContent = t, I()( e.style, {
                  display: "none"
                } ), Hr().appendChild( e ),
                function () {
                  Hr().removeChild( e )
                }
            } ), [ r, t ] ), r
          }( t, s ),
          m = Mr( t, d ),
          h = Object( a.a )( ( function ( e ) {
            In( p ).dispatch( e )
          } ), [] ),
          y = Object( a.c )( ( function () {
            return Object( c.b )( {
              publishWhileDragging: ft,
              updateDroppableScroll: bt,
              updateDroppableIsEnabled: vt,
              updateDroppableIsCombineEnabled: mt,
              collectionStarting: gt
            }, h )
          } ), [ h ] ),
          O = function () {
            var e = Object( a.c )( Wr, [] );
            return Object( n.useEffect )( ( function () {
              return function () {
                requestAnimationFrame( e.clean )
              }
            } ), [ e ] ), e
          }(),
          D = Object( a.c )( ( function () {
            return ir( O, y )
          } ), [ O, y ] ),
          x = Object( a.c )( ( function () {
            return jr( Object( l.a )( {
              scrollWindow: or,
              scrollDroppable: D.scrollDroppable
            }, Object( c.b )( {
              move: ht
            }, h ) ) )
          } ), [ D.scrollDroppable, h ] ),
          E = function ( e ) {
            var t = Object( n.useRef )( {} ),
              r = Object( n.useRef )( null ),
              i = Object( n.useRef )( null ),
              o = Object( n.useRef )( !1 ),
              l = Object( a.a )( ( function ( e, r ) {
                var n = {
                  id: e,
                  focus: r
                };
                return t.current[ e ] = n,
                  function () {
                    var r = t.current;
                    r[ e ] !== n && delete r[ e ]
                  }
              } ), [] ),
              c = Object( a.a )( ( function ( t ) {
                var r = kr( e, t );
                r && r !== document.activeElement && r.focus()
              } ), [ e ] ),
              u = Object( a.a )( ( function ( e, t ) {
                r.current === e && ( r.current = t )
              } ), [] ),
              d = Object( a.a )( ( function () {
                i.current || o.current && ( i.current = requestAnimationFrame( ( function () {
                  i.current = null;
                  var e = r.current;
                  e && c( e )
                } ) ) )
              } ), [ c ] ),
              s = Object( a.a )( ( function ( e ) {
                r.current = null;
                var t = document.activeElement;
                t && t.getAttribute( Br.draggableId ) === e && ( r.current = e )
              } ), [] );
            return Lr( ( function () {
              return o.current = !0,
                function () {
                  o.current = !1;
                  var e = i.current;
                  e && cancelAnimationFrame( e )
                }
            } ), [] ), Object( a.c )( ( function () {
              return {
                register: l,
                tryRecordFocus: s,
                tryRestoreFocusRecorded: d,
                tryShiftRecord: u
              }
            } ), [ l, s, d, u ] )
          }( t ),
          w = Object( a.c )( ( function () {
            return Kt( {
              announce: b,
              autoScroller: x,
              dimensionMarshal: D,
              focusMarshal: E,
              getResponders: g,
              styleMarshal: m
            } )
          } ), [ b, x, D, E, g, m ] );
        p.current = w;
        var C = Object( a.a )( ( function () {
            var e = In( p );
            "IDLE" !== e.getState().phase && e.dispatch( {
              type: "FLUSH",
              payload: null
            } )
          } ), [] ),
          A = Object( a.a )( ( function () {
            var e = In( p ).getState();
            return e.isDragging || "DROP_ANIMATING" === e.phase
          } ), [] );
        r( Object( a.c )( ( function () {
          return {
            isDragging: A,
            tryAbort: C
          }
        } ), [ A, C ] ) );
        var j = Object( a.a )( ( function ( e ) {
            return ar( In( p ).getState(), e )
          } ), [] ),
          B = Object( a.a )( ( function () {
            return Je( In( p ).getState() )
          } ), [] ),
          R = Object( a.c )( ( function () {
            return {
              marshal: D,
              focus: E,
              contextId: t,
              canLift: j,
              isMovementAllowed: B,
              liftInstructionId: v,
              registry: O
            }
          } ), [ t, D, E, j, B, v, O ] );
        return yn( {
          contextId: t,
          store: w,
          registry: O,
          customSensors: o,
          enableDefaultSensors: !1 !== e.enableDefaultSensors
        } ), Object( n.useEffect )( ( function () {
          return C
        } ), [ C ] ), i.a.createElement( zr.Provider, {
          value: R
        }, i.a.createElement( u.a, {
          context: Ur,
          store: w
        }, e.children ) )
      }
      var Dn = 0;

      function xn( e ) {
        var t = Object( a.c )( ( function () {
            return "" + Dn++
          } ), [] ),
          r = e.liftInstruction || P;
        return i.a.createElement( j, null, ( function ( n ) {
          return i.a.createElement( On, {
            nonce: e.nonce,
            contextId: t,
            setCallbacks: n,
            liftInstruction: r,
            enableDefaultSensors: e.enableDefaultSensors,
            sensors: e.sensors,
            onBeforeCapture: e.onBeforeCapture,
            onBeforeDragStart: e.onBeforeDragStart,
            onDragStart: e.onDragStart,
            onDragUpdate: e.onDragUpdate,
            onDragEnd: e.onDragEnd
          }, e.children )
        } ) )
      }
      var En = function ( e ) {
          return function ( t ) {
            return e === t
          }
        },
        wn = En( "scroll" ),
        Cn = En( "auto" ),
        An = ( En( "visible" ), function ( e, t ) {
          return t( e.overflowX ) || t( e.overflowY )
        } ),
        jn = function ( e ) {
          var t = window.getComputedStyle( e ),
            r = {
              overflowX: t.overflowX,
              overflowY: t.overflowY
            };
          return An( r, wn ) || An( r, Cn )
        },
        Bn = function e( t ) {
          return null == t || t === document.body || t === document.documentElement ? null : jn( t ) ? t : e( t.parentElement )
        },
        Rn = function ( e ) {
          return {
            x: e.scrollLeft,
            y: e.scrollTop
          }
        },
        Nn = function ( e ) {
          return {
            closestScrollable: Bn( e ),
            isFixedOnPage: function e( t ) {
              return !!t && ( "fixed" === window.getComputedStyle( t ).position || e( t.parentElement ) )
            }( e )
          }
        },
        Sn = function ( e ) {
          var t = e.ref,
            r = e.descriptor,
            n = e.env,
            i = e.windowScroll,
            a = e.direction,
            o = e.isDropDisabled,
            l = e.isCombineEnabled,
            c = e.shouldClipSubject,
            u = n.closestScrollable,
            s = function ( e, t ) {
              var r = Object( d.d )( e );
              if ( !t ) return r;
              if ( e !== t ) return r;
              var n = r.paddingBox.top - t.scrollTop,
                i = r.paddingBox.left - t.scrollLeft,
                a = n + t.scrollHeight,
                o = {
                  top: n,
                  right: i + t.scrollWidth,
                  bottom: a,
                  left: i
                },
                l = Object( d.c )( o, r.border );
              return Object( d.b )( {
                borderBox: l,
                margin: r.margin,
                border: r.border,
                padding: r.padding
              } )
            }( t, u ),
            p = Object( d.g )( s, i ),
            f = function () {
              if ( !u ) return null;
              var e = Object( d.d )( u ),
                t = {
                  scrollHeight: u.scrollHeight,
                  scrollWidth: u.scrollWidth
                };
              return {
                client: e,
                page: Object( d.g )( e, i ),
                scroll: Rn( u ),
                scrollSize: t,
                shouldClipSubject: c
              }
            }();
          return function ( e ) {
            var t = e.descriptor,
              r = e.isEnabled,
              n = e.isCombineEnabled,
              i = e.isFixedOnPage,
              a = e.direction,
              o = e.client,
              l = e.page,
              c = e.closest,
              u = function () {
                if ( !c ) return null;
                var e = c.scrollSize,
                  t = c.client,
                  r = Qt( {
                    scrollHeight: e.scrollHeight,
                    scrollWidth: e.scrollWidth,
                    height: t.paddingBox.height,
                    width: t.paddingBox.width
                  } );
                return {
                  pageMarginBox: c.page.marginBox,
                  frameClient: t,
                  scrollSize: e,
                  shouldClipSubject: c.shouldClipSubject,
                  scroll: {
                    initial: c.scroll,
                    current: c.scroll,
                    max: r,
                    diff: {
                      value: M,
                      displacement: M
                    }
                  }
                }
              }(),
              d = "vertical" === a ? ve : me;
            return {
              descriptor: t,
              isCombineEnabled: n,
              isFixedOnPage: i,
              axis: d,
              isEnabled: r,
              client: o,
              page: l,
              frame: u,
              subject: X( {
                page: l,
                withPlaceholder: null,
                axis: d,
                frame: u
              } )
            }
          }( {
            descriptor: r,
            isEnabled: !o,
            isCombineEnabled: l,
            isFixedOnPage: n.isFixedOnPage,
            direction: a,
            client: s,
            page: p,
            closest: f
          } )
        },
        Pn = {
          passive: !1
        },
        Ln = {
          passive: !0
        },
        Tn = function ( e ) {
          return e.shouldPublishImmediately ? Pn : Ln
        };

      function Gn( e ) {
        var t = Object( n.useContext )( e );
        return t || A( !1 ), t
      }
      var Mn = 0;

      function _n( e ) {
        return e + "::" + Object( n.useRef )( Mn++ ).current
      }
      var Fn = function ( e ) {
        return e && e.env.closestScrollable || null
      };

      function kn() {}
      var Wn = {
          width: 0,
          height: 0,
          margin: {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0
          }
        },
        Un = function ( e ) {
          var t = e.isAnimatingOpenOnMount,
            r = e.placeholder,
            n = e.animate,
            i = function ( e ) {
              var t = e.isAnimatingOpenOnMount,
                r = e.placeholder,
                n = e.animate;
              return t || "close" === n ? Wn : {
                height: r.client.borderBox.height,
                width: r.client.borderBox.width,
                margin: r.client.margin
              }
            }( {
              isAnimatingOpenOnMount: t,
              placeholder: r,
              animate: n
            } );
          return {
            display: r.display,
            boxSizing: "border-box",
            width: i.width,
            height: i.height,
            marginTop: i.margin.top,
            marginRight: i.margin.right,
            marginBottom: i.margin.bottom,
            marginLeft: i.margin.left,
            flexShrink: "0",
            flexGrow: "0",
            pointerEvents: "none",
            transition: "none" !== n ? Rt.placeholder : null
          }
        };

      function Hn( e ) {
        var t = Object( n.useRef )( null ),
          r = Object( a.a )( ( function () {
            t.current && ( clearTimeout( t.current ), t.current = null )
          } ), [] ),
          o = e.animate,
          l = e.onTransitionEnd,
          c = e.onClose,
          u = e.contextId,
          d = Object( n.useState )( "open" === e.animate ),
          s = d[ 0 ],
          p = d[ 1 ];
        Object( n.useEffect )( ( function () {
          return s ? "open" !== o ? ( r(), p( !1 ), kn ) : t.current ? kn : ( t.current = setTimeout( ( function () {
            t.current = null, p( !1 )
          } ) ), r ) : kn
        } ), [ o, s, r ] );
        var f = Object( a.a )( ( function ( e ) {
            "height" === e.propertyName && ( l(), "close" === o && c() )
          } ), [ o, c, l ] ),
          g = Un( {
            isAnimatingOpenOnMount: s,
            animate: e.animate,
            placeholder: e.placeholder
          } );
        return i.a.createElement( e.placeholder.tagName, {
          style: g,
          "data-rbd-placeholder-context-id": u,
          onTransitionEnd: f,
          ref: e.innerRef
        } )
      }
      var Vn = i.a.memo( Hn ),
        zn = i.a.createContext( null );
      var qn = function ( e ) {
          function t() {
            for ( var t, r = arguments.length, n = new Array( r ), i = 0; i < r; i++ ) n[ i ] = arguments[ i ];
            return ( t = e.call.apply( e, [ this ].concat( n ) ) || this ).state = {
              isVisible: Boolean( t.props.on ),
              data: t.props.on,
              animate: t.props.shouldAnimate && t.props.on ? "open" : "none"
            }, t.onClose = function () {
              "close" === t.state.animate && t.setState( {
                isVisible: !1
              } )
            }, t
          }
          return Object( o.a )( t, e ), t.getDerivedStateFromProps = function ( e, t ) {
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
        }( i.a.PureComponent ),
        Yn = 5e3,
        Jn = 4500,
        Xn = function ( e, t ) {
          return t ? Rt.drop( t.duration ) : e ? Rt.snap : Rt.fluid
        },
        Kn = function ( e, t ) {
          return e ? t ? At.drop : At.combining : null
        };

      function Qn( e ) {
        return "DRAGGING" === e.type ? ( n = ( r = e ).dimension.client, i = r.offset, a = r.combineWith, o = r.dropping, l = Boolean( a ), c = function ( e ) {
          return null != e.forceShouldAnimate ? e.forceShouldAnimate : "SNAP" === e.mode
        }( r ), u = Boolean( o ), d = u ? Pt( i, l ) : St( i ), {
          position: "fixed",
          top: n.marginBox.top,
          left: n.marginBox.left,
          boxSizing: "border-box",
          width: n.borderBox.width,
          height: n.borderBox.height,
          transition: Xn( c, o ),
          transform: d,
          opacity: Kn( l, u ),
          zIndex: u ? Jn : Yn,
          pointerEvents: "none"
        } ) : {
          transform: St( ( t = e ).offset ),
          transition: t.shouldAnimateDisplacement ? null : "none"
        };
        var t, r, n, i, a, o, l, c, u, d
      }

      function Zn( e ) {
        var t = _n( "draggable" ),
          r = e.descriptor,
          i = e.registry,
          o = e.getDraggableRef,
          l = e.canDragInteractiveElements,
          c = e.shouldRespectForcePress,
          u = e.isEnabled,
          s = Object( a.c )( ( function () {
            return {
              canDragInteractiveElements: l,
              shouldRespectForcePress: c,
              isEnabled: u
            }
          } ), [ l, u, c ] ),
          p = Object( a.a )( ( function ( e ) {
            var t = o();
            return t || A( !1 ),
              function ( e, t, r ) {
                void 0 === r && ( r = M );
                var n = window.getComputedStyle( t ),
                  i = t.getBoundingClientRect(),
                  a = Object( d.a )( i, n ),
                  o = Object( d.g )( a, r );
                return {
                  descriptor: e,
                  placeholder: {
                    client: a,
                    tagName: t.tagName.toLowerCase(),
                    display: n.display
                  },
                  displaceBy: {
                    x: a.marginBox.width,
                    y: a.marginBox.height
                  },
                  client: a,
                  page: o
                }
              }( r, t, e )
          } ), [ r, o ] ),
          f = Object( a.c )( ( function () {
            return {
              uniqueId: t,
              descriptor: r,
              options: s,
              getDimension: p
            }
          } ), [ r, p, s, t ] ),
          g = Object( n.useRef )( f ),
          b = Object( n.useRef )( !0 );
        Lr( ( function () {
          return i.draggable.register( g.current ),
            function () {
              return i.draggable.unregister( g.current )
            }
        } ), [ i.draggable ] ), Lr( ( function () {
          if ( b.current ) b.current = !1;
          else {
            var e = g.current;
            g.current = f, i.draggable.update( f, e )
          }
        } ), [ f, i.draggable ] )
      }

      function $n( e ) {
        e.preventDefault()
      }
      var ei = function ( e, t ) {
          return e === t
        },
        ti = function ( e ) {
          var t = e.combine,
            r = e.destination;
          return r ? r.droppableId : t ? t.droppableId : null
        };

      function ri( e ) {
        return {
          isDragging: !1,
          isDropAnimating: !1,
          isClone: !1,
          dropAnimation: null,
          mode: null,
          draggingOver: null,
          combineTargetFor: e,
          combineWith: null
        }
      }
      var ni = {
        mapped: {
          type: "SECONDARY",
          offset: M,
          combineTargetFor: null,
          shouldAnimateDisplacement: !0,
          snapshot: ri( null )
        }
      };
      var ii = {
          dropAnimationFinished: wt
        },
        ai = Object( u.b )( ( function () {
          var e, t, r, n = ( e = Object( s.default )( ( function ( e, t ) {
              return {
                x: e,
                y: t
              }
            } ) ), t = Object( s.default )( ( function ( e, t, r, n, i ) {
              return {
                isDragging: !0,
                isClone: t,
                isDropAnimating: Boolean( i ),
                dropAnimation: i,
                mode: e,
                draggingOver: r,
                combineWith: n,
                combineTargetFor: null
              }
            } ) ), r = Object( s.default )( ( function ( e, r, n, i, a, o, l ) {
              return {
                mapped: {
                  type: "DRAGGING",
                  dropping: null,
                  draggingOver: a,
                  combineWith: o,
                  mode: r,
                  offset: e,
                  dimension: n,
                  forceShouldAnimate: l,
                  snapshot: t( r, i, a, o, null )
                }
              }
            } ) ), function ( n, i ) {
              if ( n.isDragging ) {
                if ( n.critical.draggable.id !== i.draggableId ) return null;
                var a = n.current.client.offset,
                  o = n.dimensions.draggables[ i.draggableId ],
                  l = qe( n.impact ),
                  c = ( d = n.impact ).at && "COMBINE" === d.at.type ? d.at.combine.draggableId : null,
                  u = n.forceShouldAnimate;
                return r( e( a.x, a.y ), n.movementMode, o, i.isClone, l, c, u )
              }
              var d;
              if ( "DROP_ANIMATING" === n.phase ) {
                var s = n.completed;
                if ( s.result.draggableId !== i.draggableId ) return null;
                var p = i.isClone,
                  f = n.dimensions.draggables[ i.draggableId ],
                  g = s.result,
                  b = g.mode,
                  v = ti( g ),
                  m = function ( e ) {
                    return e.combine ? e.combine.draggableId : null
                  }( g ),
                  h = {
                    duration: n.dropDuration,
                    curve: Ct,
                    moveTo: n.newHomeClientOffset,
                    opacity: m ? At.drop : null,
                    scale: m ? jt.drop : null
                  };
                return {
                  mapped: {
                    type: "DRAGGING",
                    offset: n.newHomeClientOffset,
                    dimension: f,
                    dropping: h,
                    draggingOver: v,
                    combineWith: m,
                    mode: b,
                    forceShouldAnimate: null,
                    snapshot: t( b, p, v, m, h )
                  }
                }
              }
              return null
            } ),
            i = function () {
              var e = Object( s.default )( ( function ( e, t ) {
                  return {
                    x: e,
                    y: t
                  }
                } ) ),
                t = Object( s.default )( ri ),
                r = Object( s.default )( ( function ( e, r, n ) {
                  return void 0 === r && ( r = null ), {
                    mapped: {
                      type: "SECONDARY",
                      offset: e,
                      combineTargetFor: r,
                      shouldAnimateDisplacement: n,
                      snapshot: t( r )
                    }
                  }
                } ) ),
                n = function ( e ) {
                  return e ? r( M, e, !0 ) : null
                },
                i = function ( t, i, a, o ) {
                  var l = a.displaced.visible[ t ],
                    c = Boolean( o.inVirtualList && o.effected[ t ] ),
                    u = le( a ),
                    d = u && u.draggableId === t ? i : null;
                  if ( !l ) {
                    if ( !c ) return n( d );
                    if ( a.displaced.invisible[ t ] ) return null;
                    var s = W( o.displacedBy.point ),
                      p = e( s.x, s.y );
                    return r( p, d, !0 )
                  }
                  if ( c ) return n( d );
                  var f = a.displacedBy.point,
                    g = e( f.x, f.y );
                  return r( g, d, l.shouldAnimate )
                };
              return function ( e, t ) {
                if ( e.isDragging ) return e.critical.draggable.id === t.draggableId ? null : i( t.draggableId, e.critical.draggable.id, e.impact, e.afterCritical );
                if ( "DROP_ANIMATING" === e.phase ) {
                  var r = e.completed;
                  return r.result.draggableId === t.draggableId ? null : i( t.draggableId, r.result.draggableId, r.impact, r.afterCritical )
                }
                return null
              }
            }();
          return function ( e, t ) {
            return n( e, t ) || i( e, t ) || ni
          }
        } ), ii, null, {
          context: Ur,
          pure: !0,
          areStatePropsEqual: ei
        } )( ( function ( e ) {
          var t = Object( n.useRef )( null ),
            r = Object( a.a )( ( function ( e ) {
              t.current = e
            } ), [] ),
            i = Object( a.a )( ( function () {
              return t.current
            } ), [] ),
            o = Gn( zr ),
            l = o.contextId,
            c = o.liftInstructionId,
            u = o.registry,
            d = Gn( zn ),
            s = d.type,
            p = d.droppableId,
            f = Object( a.c )( ( function () {
              return {
                id: e.draggableId,
                index: e.index,
                type: s,
                droppableId: p
              }
            } ), [ e.draggableId, e.index, s, p ] ),
            g = e.children,
            b = e.draggableId,
            v = e.isEnabled,
            m = e.shouldRespectForcePress,
            h = e.canDragInteractiveElements,
            y = e.isClone,
            I = e.mapped,
            O = e.dropAnimationFinished;
          Yr(), qr(), y || Zn( Object( a.c )( ( function () {
            return {
              descriptor: f,
              registry: u,
              getDraggableRef: i,
              canDragInteractiveElements: h,
              shouldRespectForcePress: m,
              isEnabled: v
            }
          } ), [ f, u, i, h, m, v ] ) );
          var D = Object( a.c )( ( function () {
              return v ? {
                tabIndex: 0,
                "data-rbd-drag-handle-draggable-id": b,
                "data-rbd-drag-handle-context-id": l,
                "aria-labelledby": c,
                draggable: !1,
                onDragStart: $n
              } : null
            } ), [ l, b, v, c ] ),
            x = Object( a.a )( ( function ( e ) {
              "DRAGGING" === I.type && I.dropping && "transform" === e.propertyName && O()
            } ), [ O, I ] ),
            E = Object( a.c )( ( function () {
              var e = Qn( I ),
                t = "DRAGGING" === I.type && I.dropping ? x : null;
              return {
                innerRef: r,
                draggableProps: {
                  "data-rbd-draggable-context-id": l,
                  "data-rbd-draggable-id": b,
                  style: e,
                  onTransitionEnd: t
                },
                dragHandleProps: D
              }
            } ), [ l, D, b, I, x, r ] ),
            w = Object( a.c )( ( function () {
              return {
                draggableId: f.id,
                type: f.type,
                source: {
                  index: f.index,
                  droppableId: f.droppableId
                }
              }
            } ), [ f.droppableId, f.id, f.index, f.type ] );
          return g( E, I.snapshot, w )
        } ) );

      function oi( e ) {
        return Gn( zn ).isUsingCloneFor !== e.draggableId || e.isClone ? i.a.createElement( ai, e ) : null
      }

      function li( e ) {
        var t = "boolean" != typeof e.isDragDisabled || !e.isDragDisabled,
          r = Boolean( e.disableInteractiveElementBlocking ),
          n = Boolean( e.shouldRespectForcePress );
        return i.a.createElement( oi, Object( l.a )( {}, e, {
          isClone: !1,
          isEnabled: t,
          canDragInteractiveElements: r,
          shouldRespectForcePress: n
        } ) )
      }
      var ci = function ( e, t ) {
          return e === t.droppable.type
        },
        ui = function ( e, t ) {
          return t.draggables[ e.draggable.id ]
        },
        di = {
          updateViewportMaxScroll: function ( e ) {
            return {
              type: "UPDATE_VIEWPORT_MAX_SCROLL",
              payload: e
            }
          }
        };
      var si = {
          mode: "standard",
          type: "DEFAULT",
          direction: "vertical",
          isDropDisabled: !1,
          isCombineEnabled: !1,
          ignoreContainerClipping: !1,
          renderClone: null,
          getContainerForClone: function () {
            return document.body || A( !1 ), document.body
          }
        },
        pi = Object( u.b )( ( function () {
          var e = {
              placeholder: null,
              shouldAnimatePlaceholder: !0,
              snapshot: {
                isDraggingOver: !1,
                draggingOverWith: null,
                draggingFromThisWith: null,
                isUsingPlaceholder: !1
              },
              useClone: null
            },
            t = Object( l.a )( {}, e, {
              shouldAnimatePlaceholder: !1
            } ),
            r = Object( s.default )( ( function ( e ) {
              return {
                draggableId: e.id,
                type: e.type,
                source: {
                  index: e.index,
                  droppableId: e.droppableId
                }
              }
            } ) ),
            n = Object( s.default )( ( function ( n, i, a, o, l, c ) {
              var u = l.descriptor.id;
              if ( l.descriptor.droppableId === n ) {
                var d = c ? {
                    render: c,
                    dragging: r( l.descriptor )
                  } : null,
                  s = {
                    isDraggingOver: a,
                    draggingOverWith: a ? u : null,
                    draggingFromThisWith: u,
                    isUsingPlaceholder: !0
                  };
                return {
                  placeholder: l.placeholder,
                  shouldAnimatePlaceholder: !1,
                  snapshot: s,
                  useClone: d
                }
              }
              if ( !i ) return t;
              if ( !o ) return e;
              var p = {
                isDraggingOver: a,
                draggingOverWith: u,
                draggingFromThisWith: null,
                isUsingPlaceholder: !0
              };
              return {
                placeholder: l.placeholder,
                shouldAnimatePlaceholder: !0,
                snapshot: p,
                useClone: null
              }
            } ) );
          return function ( r, i ) {
            var a = i.droppableId,
              o = i.type,
              l = !i.isDropDisabled,
              c = i.renderClone;
            if ( r.isDragging ) {
              var u = r.critical;
              if ( !ci( o, u ) ) return t;
              var d = ui( u, r.dimensions ),
                s = qe( r.impact ) === a;
              return n( a, l, s, s, d, c )
            }
            if ( "DROP_ANIMATING" === r.phase ) {
              var p = r.completed;
              if ( !ci( o, p.critical ) ) return t;
              var f = ui( p.critical, r.dimensions );
              return n( a, l, ti( p.result ) === a, qe( p.impact ) === a, f, c )
            }
            if ( "IDLE" === r.phase && r.completed && !r.shouldFlush ) {
              var g = r.completed;
              if ( !ci( o, g.critical ) ) return t;
              var b = qe( g.impact ) === a,
                v = Boolean( g.impact.at && "COMBINE" === g.impact.at.type ),
                m = g.critical.droppable.id === a;
              return b ? v ? e : t : m ? e : t
            }
            return t
          }
        } ), di, null, {
          context: Ur,
          pure: !0,
          areStatePropsEqual: ei
        } )( ( function ( e ) {
          var t = Object( n.useContext )( zr );
          t || A( !1 );
          var r = t.contextId,
            o = t.isMovementAllowed,
            l = Object( n.useRef )( null ),
            c = Object( n.useRef )( null ),
            u = e.children,
            d = e.droppableId,
            p = e.type,
            f = e.mode,
            g = e.direction,
            b = e.ignoreContainerClipping,
            m = e.isDropDisabled,
            h = e.isCombineEnabled,
            y = e.snapshot,
            I = e.useClone,
            O = e.updateViewportMaxScroll,
            x = e.getContainerForClone,
            E = Object( a.a )( ( function () {
              return l.current
            } ), [] ),
            w = Object( a.a )( ( function ( e ) {
              l.current = e
            } ), [] ),
            C = ( Object( a.a )( ( function () {
              return c.current
            } ), [] ), Object( a.a )( ( function ( e ) {
              c.current = e
            } ), [] ) );
          Yr();
          var j = Object( a.a )( ( function () {
            o() && O( {
              maxScroll: $t()
            } )
          } ), [ o, O ] );
          ! function ( e ) {
            var t = Object( n.useRef )( null ),
              r = Gn( zr ),
              i = _n( "droppable" ),
              o = r.registry,
              l = r.marshal,
              c = Xr( e ),
              u = Object( a.c )( ( function () {
                return {
                  id: e.droppableId,
                  type: e.type,
                  mode: e.mode
                }
              } ), [ e.droppableId, e.mode, e.type ] ),
              d = Object( n.useRef )( u ),
              p = Object( a.c )( ( function () {
                return Object( s.default )( ( function ( e, r ) {
                  t.current || A( !1 );
                  var n = {
                    x: e,
                    y: r
                  };
                  l.updateDroppableScroll( u.id, n )
                } ) )
              } ), [ u.id, l ] ),
              f = Object( a.a )( ( function () {
                var e = t.current;
                return e && e.env.closestScrollable ? Rn( e.env.closestScrollable ) : M
              } ), [] ),
              g = Object( a.a )( ( function () {
                var e = f();
                p( e.x, e.y )
              } ), [ f, p ] ),
              b = Object( a.c )( ( function () {
                return Object( v.a )( g )
              } ), [ g ] ),
              m = Object( a.a )( ( function () {
                var e = t.current,
                  r = Fn( e );
                e && r || A( !1 ), e.scrollOptions.shouldPublishImmediately ? g() : b()
              } ), [ b, g ] ),
              h = Object( a.a )( ( function ( e, n ) {
                t.current && A( !1 );
                var i = c.current,
                  a = i.getDroppableRef();
                a || A( !1 );
                var o = Nn( a ),
                  l = {
                    ref: a,
                    descriptor: u,
                    env: o,
                    scrollOptions: n
                  };
                t.current = l;
                var d = Sn( {
                    ref: a,
                    descriptor: u,
                    env: o,
                    windowScroll: e,
                    direction: i.direction,
                    isDropDisabled: i.isDropDisabled,
                    isCombineEnabled: i.isCombineEnabled,
                    shouldClipSubject: !i.ignoreContainerClipping
                  } ),
                  s = o.closestScrollable;
                return s && ( s.setAttribute( Sr.contextId, r.contextId ), s.addEventListener( "scroll", m, Tn( l.scrollOptions ) ) ), d
              } ), [ r.contextId, u, m, c ] ),
              y = Object( a.a )( ( function () {
                var e = t.current,
                  r = Fn( e );
                return e && r || A( !1 ), Rn( r )
              } ), [] ),
              I = Object( a.a )( ( function () {
                var e = t.current;
                e || A( !1 );
                var r = Fn( e );
                t.current = null, r && ( b.cancel(), r.removeAttribute( Sr.contextId ), r.removeEventListener( "scroll", m, Tn( e.scrollOptions ) ) )
              } ), [ m, b ] ),
              O = Object( a.a )( ( function ( e ) {
                var r = t.current;
                r || A( !1 );
                var n = Fn( r );
                n || A( !1 ), n.scrollTop += e.y, n.scrollLeft += e.x
              } ), [] ),
              D = Object( a.c )( ( function () {
                return {
                  getDimensionAndWatchScroll: h,
                  getScrollWhileDragging: y,
                  dragStopped: I,
                  scroll: O
                }
              } ), [ I, h, y, O ] ),
              x = Object( a.c )( ( function () {
                return {
                  uniqueId: i,
                  descriptor: u,
                  callbacks: D
                }
              } ), [ D, u, i ] );
            Lr( ( function () {
              return d.current = x.descriptor, o.droppable.register( x ),
                function () {
                  t.current && I(), o.droppable.unregister( x )
                }
            } ), [ D, u, I, x, l, o.droppable ] ), Lr( ( function () {
              t.current && l.updateDroppableIsEnabled( d.current.id, !e.isDropDisabled )
            } ), [ e.isDropDisabled, l ] ), Lr( ( function () {
              t.current && l.updateDroppableIsCombineEnabled( d.current.id, e.isCombineEnabled )
            } ), [ e.isCombineEnabled, l ] )
          }( {
            droppableId: d,
            type: p,
            mode: f,
            direction: g,
            isDropDisabled: m,
            isCombineEnabled: h,
            ignoreContainerClipping: b,
            getDroppableRef: E
          } );
          var B = i.a.createElement( qn, {
              on: e.placeholder,
              shouldAnimate: e.shouldAnimatePlaceholder
            }, ( function ( e ) {
              var t = e.onClose,
                n = e.data,
                a = e.animate;
              return i.a.createElement( Vn, {
                placeholder: n,
                onClose: t,
                innerRef: C,
                animate: a,
                contextId: r,
                onTransitionEnd: j
              } )
            } ) ),
            R = Object( a.c )( ( function () {
              return {
                innerRef: w,
                placeholder: B,
                droppableProps: {
                  "data-rbd-droppable-id": d,
                  "data-rbd-droppable-context-id": r
                }
              }
            } ), [ r, d, B, w ] ),
            N = I ? I.dragging.draggableId : null,
            S = Object( a.c )( ( function () {
              return {
                droppableId: d,
                type: p,
                isUsingCloneFor: N
              }
            } ), [ d, N, p ] );
          return i.a.createElement( zn.Provider, {
            value: S
          }, u( R, y ), function () {
            if ( !I ) return null;
            var e = I.dragging,
              t = I.render,
              r = i.a.createElement( oi, {
                draggableId: e.draggableId,
                index: e.source.index,
                isClone: !0,
                isEnabled: !0,
                shouldRespectForcePress: !1,
                canDragInteractiveElements: !0
              }, ( function ( r, n ) {
                return t( r, n, e )
              } ) );
            return D.a.createPortal( r, x() )
          }() )
        } ) );
      pi.defaultProps = si
    }
  }
] );
//# sourceMappingURL=27.526A75ThMD.js.map
