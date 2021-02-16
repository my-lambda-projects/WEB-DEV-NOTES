( window.webpackJsonp = window.webpackJsonp || [] ).push( [
  [ "@atlaskit-internal-renderer-node_InlineCard~f54486f5" ],
  {
    bSun: function ( a, e, t ) {
      "use strict";
      t.r( e );
      var n = t( "ERkP" ),
        r = t.n( n ),
        c = t( "bU5Q" ),
        d = t( "T6cy" ),
        i = t( "jaca" ),
        l = t( "XRyI" ),
        s = t( "RlA1" );
      e.default = Object( s.b )( ( a ) => {
        const {
          url: e,
          data: t,
          eventHandlers: n,
          portal: s
        } = a,
        o = Object( i.c )( n, "smartCard" ),
          u = {
            url: e,
            data: t,
            onClick: e && o ? ( a ) => o( a, e ) : void 0,
            container: s,
          };
        return r.a.createElement(
          "span", {
            "data-inline-card": !0,
            "data-card-data": t ? JSON.stringify( t ) : void 0,
            "data-card-url": e,
          },
          r.a.createElement(
            l.a,
            Object.assign( {
              unsupportedComponent: d.a
            }, u ),
            r.a.createElement(
              c.a,
              Object.assign( {
                appearance: "inline"
              }, u, {
                onResolve: ( e ) => {
                  e.url && e.title && a.smartCardStorage.set( e.url, e.title );
                },
              } )
            )
          )
        );
      } );
    },
  },
] );
//# sourceMappingURL=@atlaskit-internal-renderer-node_InlineCard~f54486f5.F1hbWEiHVq.js.map
