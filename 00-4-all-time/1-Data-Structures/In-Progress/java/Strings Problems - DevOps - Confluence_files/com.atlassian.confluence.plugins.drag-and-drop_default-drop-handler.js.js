WRMCB = function ( e ) {
  var c = console;
  if ( c && c.log && c.error ) {
    c.log( 'Error running batched script.' );
    c.error( e );
  }
};
try {
  /* module-key = 'com.atlassian.confluence.plugins.drag-and-drop:default-drop-handler', location = 'js/default-drop-handler.js' */
  define( "confluence-drag-and-drop/default-drop-handler", "ajs document confluence/meta jquery confluence/legacy underscore plupload window confluence-drag-and-drop/files-uploader-factory confluence-drag-and-drop/upload-progress-dialog confluence/legacy-editor-global-AVOID-IF-POSSIBLE confluence-drag-and-drop/upload-utils confluence-drag-and-drop/drag-and-drop-utils".split( " " ), function ( g, h, v, k, d, t, p, A, u, B, l, w, C ) {
    var f = {},
      q = u.get(),
      e;
    f.destroy = function () {
      e && e.destroy();
      k( h ).unbind( "dragenter", f._initFunction )
    };
    f.initialise = function () {
      function f() {
        var b = k( ".aui-blanket:visible" );
        return b.length && "hidden" !== b.css( "visibility" ) && !k( "#drag-and-drop-progress-dialog:visible" ).length
      }

      function n() {
        for ( ; e.files.length; ) e.removeFile( e.files[ 0 ] )
      }
      var c, x = function ( b, a, e ) {
          if ( !a ) return !1;
          if ( a.generalError ) return t.each( a.generalError.fileIds, function ( r ) {
            c.renderError( r, a.generalError.message );
            ( r = b.getFile( r ) ) && b.removeFile( r )
          } ), !0;
          if ( a.fileErrors ) return t.each( a.fileErrors, function ( a ) {
            c.renderError( a.id, a.message );
            ( a =
              b.getFile( a.id ) ) && b.removeFile( a )
          } ), a.fileErrors.length === e.length
        },
        u = function ( b ) {
          !b.total.queued && c && ( c.showCloseButton(), c.hasErrors() || setTimeout( function () {
            c.hide();
            c.clearRenderOutput();
            A.location.reload()
          }, 1E3 ) )
        },
        m = h.getElementById( "fileuploadShim" );
      m || ( m = h.createElement( "div" ), m.setAttribute( "id", "fileuploadShim" ), h.body.appendChild( m ) );
      e = new p.Uploader( {
        runtimes: "html5",
        dragdrop: !0,
        drop_element: k( "body" )[ 0 ],
        browse_button: m.getAttribute( "id" ),
        multipart: !1,
        stop_propagation: !0,
        max_file_size: +v.get( "global-settings-attachment-max-size" )
      } );
      var y = function () {
        c = l && l.isVisible() && d.EditorUploadProgressDialog ? d.EditorUploadProgressDialog : new B
      };
      c = null;
      e.init();
      var z = {};
      "undefined" === typeof g.DragAndDrop && ( g.DragAndDrop = {} );
      g.DragAndDrop.defaultDropHandler = null;
      e.bind( "FilesAdded", function ( b, a ) {
        f() ? n() : l && l.isVisible() ? ( b = t.reject( a, function ( a ) {
          return a.status === p.FAILED
        } ), d.Uploader && d.Uploader.trigger( "FilesAdded", b ) ) : w.filterFiles( b, a, function ( a, b ) {
          !c && y();
          for ( var f = 0; f < b.length; f++ ) {
            var d = b[ f ];
            d.status !== p.FAILED ? c.render( {
              workId: d.id,
              status: d.status,
              file: d
            } ) : a.removeFile( d )
          }
          q.filesAdded( a, b, z ).then( function ( d ) {
            d = x( a, d, b );
            c.show();
            d ? c.showCloseButton() : ( c.cancelListeners.push( function ( b, d ) {
              ( b = a.getFile( d.workId ) ) && a.removeFile( b );
              c.renderInfo( d.workId, "File was manually removed from the queue." )
            } ), e.start() )
          } )
        } )
      } );
      e.bind( "BeforeUpload", function ( b, a ) {
        q.beforeUpload( b, a, z )
      } );
      e.bind( "UploadProgress", function ( b, a ) {
        c.renderUpdateToBytesUploaded( a.id, a.loaded, a.size );
        c.hideCloseButton()
      } );
      e.bind( "FileUploaded", function ( b, a,
        d ) {
        q.fileUploaded( b, a, d ).done( function ( b ) {
          c.renderComplete( a.id )
        } ).fail( function ( c ) {
          x( b, c, [ a ] )
        } ).always( function () {
          u( e )
        } )
      } );
      e.bind( "Error", function ( b, a ) {
        f() ? n() : l && l.isVisible() ? d.Uploader && d.Uploader.trigger( "Error", a ) : a.response ? ( b = q.serverError( a.response ) || a.message, c.renderError( a.file.id, b ), c.showCloseButton(), g.trigger( "analyticsEvent", {
          name: "confluence.default-drop.upload.error.server-unknown"
        } ) ) : ( b = a.message, a.code === p.FILE_SIZE_ERROR ? ( b = g.format( "is too big to upload. Files must be less than {0}.", C.niceSize( v.get( "global-settings-attachment-max-size" ) ) ),
          g.trigger( "analyticsEvent", {
            name: "confluence.default-drop.upload.error.file-size"
          } ) ) : a.code === w.ErrorCode.FILE_IS_A_FOLDER_ERROR && ( b = "might be a folder or an unsupported file type.", g.trigger( "analyticsEvent", {
          name: "confluence.default-drop.upload.error.file-type"
        } ) ), !c && y(), c.render( {
          workId: a.file.id,
          status: a.file.status,
          file: a.file,
          errorMessage: b
        } ), c.isVisible() || ( c.show(), c.showCloseButton() ) )
      } )
    };
    var n = function () {
      k( h ).unbind( "dragenter", n );
      f.initialise()
    };
    f.bind = function () {
      k( h ).bind( "dragenter",
        n )
    };
    return d.DragAndDrop = f
  } );
} catch ( e ) {
  WRMCB( e )
};
