( window.webpackJsonp = window.webpackJsonp || [] ).push( [
  [ 222 ], {
    F1TZ: function ( n, e, t ) {
      "use strict";
      t.r( e ), t.d( e, "getSLOFromMetric", ( function () {
        return i
      } ) ), t.d( e, "getPropertiesFromTags", ( function () {
        return p
      } ) ), t.d( e, "default", ( function () {
        return u
      } ) );
      var r = t( "Czhu" ),
        o = t( "KEM+" ),
        a = t.n( o ),
        c = t( "BOb/" );
      const s = {
          [ c.a.performance.COMPONENT_READY ]: c.a.performance.COMPONENT_READY_SLO,
          [ c.a.performance.REQUEST_TIMING ]: c.a.performance.REQUEST_TIMING_SLO,
          [ c.a.performance.TIME_TO_INTERACTIVE ]: c.a.performance.TIME_TO_INTERACTIVE_SLO
        },
        i = n => s[ n ],
        p = n => n ? n.reduce( ( n, e ) => {
          const t = e.indexOf( ":" ),
            o = t > 0 ? {
              [ e.substring( 0, t ) ]: e.substring( t + 1 )
            } : {};
          return Object( r.a )( Object( r.a )( {}, n ), o )
        }, {} ) : {};
      class u {
        constructor( n ) {
          a()( this, "options", {} ), this.options = n
        }
        install( n ) {
          this.client = n, n.addEventHook( "metric", e => {
            if ( e && e.name in this.options && e.name in s ) {
              const t = this.options[ e.name ],
                o = i( e.name ),
                a = p( e.tags ),
                c = Array.isArray( t ) ? ( ( n, e ) => {
                  const t = e.find( e => {
                    const {
                      page: t,
                      component: r
                    } = n;
                    return !( e.page && e.page !== t || e.component && e.component !== r )
                  } );
                  if ( t ) return t.target
                } )( a, t ) : t;
              c && n.metric.submit( Object( r.a )( Object( r.a )( {}, a ), {}, {
                name: o,
                success: e.value < c
              } ) )
            }
          } )
        }
      }
    }
  }
] );
//# sourceMappingURL=222.43St9WKzjd.js.map
