( window.webpackJsonp = window.webpackJsonp || [] ).push( [
  [ 10 ], {
    "/kGK": function ( e, a, t ) {
      "use strict";
      t.d( a, "a", ( function () {
        return i
      } ) );
      const i = ( e = {
        width: "100%",
        height: "100%"
      } ) => ( {
        height: "number" == typeof e.height ? e.height + "px" : e.height,
        width: "number" == typeof e.width ? e.width + "px" : e.width
      } )
    },
    "2uSk": function ( e, a, t ) {
      "use strict";
      t.d( a, "c", ( function () {
        return i
      } ) ), t.d( a, "b", ( function () {
        return n
      } ) ), t.d( a, "a", ( function () {
        return o
      } ) ), t.d( a, "e", ( function () {
        return r
      } ) ), t.d( a, "d", ( function () {
        return s
      } ) );
      const i = e => [ "image/apng", "image/bmp", "image/gif", "image/x-icon", "image/jpeg", "image/png", "image/webp" ].indexOf( e.toLowerCase() ) > -1,
        n = e => "application/pdf" === e.toLowerCase(),
        o = e => [ "audio/aac", "audio/flac", "audio/mp4", "audio/mpeg", "audio/ogg", "audio/x-ogg", "audio/wav", "audio/x-wav" ].indexOf( e.toLowerCase() ) > -1,
        r = e => [ "video/mp4", "video/quicktime" ].indexOf( e.toLowerCase() ) > -1,
        s = e => n( e ) || i( e ) || o( e ) || r( e )
    },
    "3i3M": function ( e, a, t ) {
      "use strict";
      t.d( a, "a", ( function () {
        return d
      } ) );
      var i = t( "KsTJ" ),
        n = t( "Ag3T" ),
        o = t( "w301" ),
        r = t( "3IV/" );
      const s = i.keyframes `
  0%{
    opacity: 1;
  }

  50%{
    opacity: 0.6;
  }

  100%{
    opacity: 1;
  }
`,
        d = i.default.div `
  ${n.c} background: ${Object(o.a)({light:r.N20,dark:r.DN50})};
  color: ${Object(o.a)({light:r.N50,dark:r.DN100})};
  ${n.b}
  max-height: 100%;
  max-width: 100%;

  ${e=>`\n      width: ${e.dimensions.width};\n      height: ${e.dimensions.height};\n    `}
  > span {
    animation: ${s} 0.8s infinite;
  }
`
    },
    Ag3T: function ( e, a, t ) {
      "use strict";
      t.d( a, "d", ( function () {
        return o
      } ) ), t.d( a, "f", ( function () {
        return r
      } ) ), t.d( a, "c", ( function () {
        return s
      } ) ), t.d( a, "a", ( function () {
        return d
      } ) ), t.d( a, "b", ( function () {
        return c
      } ) ), t.d( a, "e", ( function () {
        return l
      } ) );
      var i = t( "KsTJ" ),
        n = t( "BMbf" );
      const o = ( e = "100%" ) => `\n    max-width: ${e}${"number"==typeof e?"px":""};\n    overflow: hidden;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n  `,
        r = ( e = "100%" ) => {
          const a = "number" == typeof e ? "px" : "";
          return `\n    width: ${e}${a};\n    height: ${e}${a};\n  `
        },
        s = "\n  display: flex;\n  align-items: center;\n  justify-content: center;\n",
        d = ( e = 0, a = 0 ) => `\n  position: absolute;\n  top: ${e}px;\n  left: ${a}px;\n`,
        c = `\n  border-radius: ${Object(n.c)()}px;\n`,
        l = ( Object( n.c )(), Object( n.c )(), `\n  animation: ${i.keyframes`
  0%{
    opacity: 0;
  }

  100%{
    opacity: 1;
  }
`} .3s cubic-bezier(0.645, 0.045, 0.355, 1);\n` )
    },
    B0Ro: function ( e, a, t ) {
      ( function ( a, t ) {
        var i, n = function () {
            function e( a, t ) {
              if ( function ( e, a ) {
                  if ( !( e instanceof a ) ) throw new TypeError( "Cannot call a class as a function" )
                }( this, e ), "function" != typeof a ) throw new TypeError( "DataLoader must be constructed with a function which accepts Array<key> and returns Promise<Array<value>>, but got: " + a + "." );
              this._batchLoadFn = a, this._options = t, this._promiseCache = function ( e ) {
                var a = e && e.cacheMap;
                if ( !a ) return new Map;
                var t = [ "get", "set", "delete", "clear" ].filter( ( function ( e ) {
                  return a && "function" != typeof a[ e ]
                } ) );
                if ( 0 !== t.length ) throw new TypeError( "Custom cacheMap missing methods: " + t.join( ", " ) );
                return a
              }( t ), this._queue = []
            }
            return e.prototype.load = function ( e ) {
              var a = this;
              if ( null == e ) throw new TypeError( "The loader.load() function must be called with a value,but got: " + String( e ) + "." );
              var t = this._options,
                i = !t || !1 !== t.batch,
                n = !t || !1 !== t.cache,
                s = t && t.cacheKeyFn,
                d = s ? s( e ) : e;
              if ( n ) {
                var c = this._promiseCache.get( d );
                if ( c ) return c
              }
              var l = new Promise( ( function ( t, n ) {
                a._queue.push( {
                  key: e,
                  resolve: t,
                  reject: n
                } ), 1 === a._queue.length && ( i ? o( ( function () {
                  return r( a )
                } ) ) : r( a ) )
              } ) );
              return n && this._promiseCache.set( d, l ), l
            }, e.prototype.loadMany = function ( e ) {
              var a = this;
              if ( !Array.isArray( e ) ) throw new TypeError( "The loader.loadMany() function must be called with Array<key> but got: " + e + "." );
              return Promise.all( e.map( ( function ( e ) {
                return a.load( e )
              } ) ) )
            }, e.prototype.clear = function ( e ) {
              var a = this._options && this._options.cacheKeyFn,
                t = a ? a( e ) : e;
              return this._promiseCache.delete( t ), this
            }, e.prototype.clearAll = function () {
              return this._promiseCache.clear(), this
            }, e.prototype.prime = function ( e, a ) {
              var t = this._options && this._options.cacheKeyFn,
                i = t ? t( e ) : e;
              if ( void 0 === this._promiseCache.get( i ) ) {
                var n = a instanceof Error ? Promise.reject( a ) : Promise.resolve( a );
                this._promiseCache.set( i, n )
              }
              return this
            }, e
          }(),
          o = "object" == typeof a && "function" == typeof a.nextTick ? function ( e ) {
            i || ( i = Promise.resolve() ), i.then( ( function () {
              return a.nextTick( e )
            } ) )
          } : t || setTimeout;

        function r( e ) {
          var a = e._queue;
          e._queue = [];
          var t = e._options && e._options.maxBatchSize;
          if ( t && t > 0 && t < a.length )
            for ( var i = 0; i < a.length / t; i++ ) s( e, a.slice( i * t, ( i + 1 ) * t ) );
          else s( e, a )
        }

        function s( e, a ) {
          var t = a.map( ( function ( e ) {
              return e.key
            } ) ),
            i = ( 0, e._batchLoadFn )( t );
          if ( !i || "function" != typeof i.then ) return d( e, a, new TypeError( "DataLoader must be constructed with a function which accepts Array<key> and returns Promise<Array<value>>, but the function did not return a Promise: " + String( i ) + "." ) );
          i.then( ( function ( e ) {
            if ( !Array.isArray( e ) ) throw new TypeError( "DataLoader must be constructed with a function which accepts Array<key> and returns Promise<Array<value>>, but the function did not return a Promise of an Array: " + String( e ) + "." );
            if ( e.length !== t.length ) throw new TypeError( "DataLoader must be constructed with a function which accepts Array<key> and returns Promise<Array<value>>, but the function did not return a Promise of an Array of the same length as the Array of keys.\n\nKeys:\n" + String( t ) + "\n\nValues:\n" + String( e ) );
            a.forEach( ( function ( a, t ) {
              var i = a.resolve,
                n = a.reject,
                o = e[ t ];
              o instanceof Error ? n( o ) : i( o )
            } ) )
          } ) ).catch( ( function ( t ) {
            return d( e, a, t )
          } ) )
        }

        function d( e, a, t ) {
          a.forEach( ( function ( a ) {
            var i = a.key,
              n = a.reject;
            e.clear( i ), n( t )
          } ) )
        }
        e.exports = n
      } ).call( this, t( "F63i" ), t( "/Qos" ).setImmediate )
    },
    COIo: function ( e, a, t ) {
      "use strict";
      t.d( a, "b", ( function () {
        return n
      } ) ), t.d( a, "a", ( function () {
        return o
      } ) );
      const i = {
          1: "none",
          2: "rotateY(180deg)",
          3: "rotate(180deg)",
          4: "rotate(180deg) rotateY(180deg)",
          5: "rotate(270deg) rotateY(180deg)",
          6: "rotate(90deg)",
          7: "rotate(90deg) rotateY(180deg)",
          8: "rotate(270deg)"
        },
        n = e => e >= 5,
        o = e => i[ e ]
    },
    CRB6: function ( e, a, t ) {
      "use strict";
      Object.defineProperty( a, "__esModule", {
        value: !0
      } ), a.default = void 0;
      var i = o( t( "ERkP" ) ),
        n = o( t( "4KTy" ) );

      function o( e ) {
        return e && e.__esModule ? e : {
          default: e
        }
      }

      function r() {
        return ( r = Object.assign || function ( e ) {
          for ( var a = 1; a < arguments.length; a++ ) {
            var t = arguments[ a ];
            for ( var i in t ) Object.prototype.hasOwnProperty.call( t, i ) && ( e[ i ] = t[ i ] )
          }
          return e
        } ).apply( this, arguments )
      }
      var s = function ( e ) {
        return i.default.createElement( n.default, r( {
          dangerouslySetGlyph: '<svg width="24" height="24" viewBox="0 0 24 24" focusable="false" role="presentation"><path d="M3 4.995C3 3.893 3.893 3 4.995 3h14.01C20.107 3 21 3.893 21 4.995v14.01A1.995 1.995 0 0 1 19.005 21H4.995A1.995 1.995 0 0 1 3 19.005V4.995zM10.5 16.5L9 15l-3 3h12v-2.7L15 12l-4.5 4.5zM8 10a2 2 0 1 0 0-4 2 2 0 0 0 0 4z" fill="currentColor" fill-rule="evenodd"/></svg>'
        }, e ) )
      };
      s.displayName = "ImageIcon";
      var d = s;
      a.default = d
    },
    NhJz: function ( e, a, t ) {
      "use strict";
      Object.defineProperty( a, "__esModule", {
        value: !0
      } ), a.default = void 0;
      var i = o( t( "ERkP" ) ),
        n = o( t( "4KTy" ) );

      function o( e ) {
        return e && e.__esModule ? e : {
          default: e
        }
      }

      function r() {
        return ( r = Object.assign || function ( e ) {
          for ( var a = 1; a < arguments.length; a++ ) {
            var t = arguments[ a ];
            for ( var i in t ) Object.prototype.hasOwnProperty.call( t, i ) && ( e[ i ] = t[ i ] )
          }
          return e
        } ).apply( this, arguments )
      }
      var s = function ( e ) {
        return i.default.createElement( n.default, r( {
          dangerouslySetGlyph: '<svg width="24" height="24" viewBox="0 0 24 24" focusable="false" role="presentation"><g fill-rule="evenodd"><rect fill="currentColor" x="4" y="4" width="16" height="16" rx="2"/><path d="M9 6.999C9 6.447 9.443 6 9.999 6H12v3H9.999A.996.996 0 0 1 9 8.001V6.999zM12 9h2.001c.552 0 .999.443.999.999v1.002a.996.996 0 0 1-.999.999H12V9zm-3 3.999c0-.552.443-.999.999-.999H12v3H9.999A.996.996 0 0 1 9 14.001v-1.002zM12 15h2.001c.552 0 .999.443.999.999v1.002a.996.996 0 0 1-.999.999H12v-3z" fill="inherit"/></g></svg>'
        }, e ) )
      };
      s.displayName = "MediaServicesZipIcon";
      var d = s;
      a.default = d
    },
    QxUR: function ( e, a, t ) {
      "use strict";
      t.d( a, "a", ( function () {
        return n
      } ) );
      var i = t( "L21V" );
      const n = Object( i.f )( {
        retry: {
          id: "fabric.media.retry",
          defaultMessage: "Retry",
          description: "Allows user to perform an action again"
        },
        failed_to_load: {
          id: "fabric.media.failed_to_load",
          defaultMessage: "Failed to load",
          description: "We show this message when we have an error loading a file"
        },
        recent_uploads: {
          id: "fabric.media.recent_uploads",
          defaultMessage: "Recent uploads",
          description: "Title of a section where we show the user recent uploaded files"
        },
        upload_file: {
          id: "fabric.media.upload_file",
          defaultMessage: "Upload a file",
          description: "Call to action that initiates the upload of a file"
        },
        drag_and_drop_your_files: {
          id: "fabric.media.drag_and_drop_your_files",
          defaultMessage: "Drag and drop your files anywhere or",
          description: "Used to describe the area where the user can drag and drop files to upload"
        },
        drag_and_drop_your_files_and_folders: {
          id: "fabric.media.drag_and_drop_your_files_and_folders",
          defaultMessage: "Drag and drop your files and folders anywhere or",
          description: "Used to describe the area where the user can drag and drop files AND folders to upload"
        },
        drop_your_files: {
          id: "fabric.media.drop_your_files",
          defaultMessage: "Drop your files to upload",
          description: "Indicates that the files will be uploaded when the user drops them in the drag and drop area"
        },
        upload: {
          id: "fabric.media.upload",
          defaultMessage: "Upload",
          description: "upload"
        },
        cancel: {
          id: "fabric.media.cancel",
          defaultMessage: "Cancel",
          description: "cancel"
        },
        search_all_gifs: {
          id: "fabric.media.search_all_gifs",
          defaultMessage: "Search all the GIFs!",
          description: "Used as input placeholder to let the user know that they can search for GIF image files"
        },
        cant_retrieve_gifs: {
          id: "fabric.media.cant_retrieve_gifs",
          defaultMessage: "Ouch! We could not retrieve any GIFs",
          description: "Error message when we can not find any GIF images for that text"
        },
        cant_retrieve_files: {
          id: "fabric.media.cant_retrieve_files",
          defaultMessage: "Ouch! We could not retrieve any files",
          description: "Error message when we can not find any files in dropbox/google drive"
        },
        check_your_network: {
          id: "fabric.media.check_your_network",
          defaultMessage: "Check your network connection",
          description: "Error message when network does not work"
        },
        try_again: {
          id: "fabric.media.try_again",
          defaultMessage: "Try again",
          description: "Allow the user to try an action again"
        },
        try_another_account: {
          id: "fabric.media.try_another_account",
          defaultMessage: "Try another account",
          description: "Allows the user to try an action again with a different account"
        },
        no_gifs_found: {
          id: "fabric.media.no_gifs_found",
          defaultMessage: "Hello? Was it me you're looking for?",
          description: "Not expected error that happens when searching for GIF images"
        },
        no_gifs_found_suggestion: {
          id: "fabric.media.no_gifs_found_suggestion",
          defaultMessage: 'We couldn\'t find anything for "{query}"',
          description: "There are no results for GIFs matching that query"
        },
        load_more_gifs: {
          id: "fabric.media.load_more_gifs",
          defaultMessage: "Load more GIFs",
          description: "Used to load next page of GIF images"
        },
        add_account: {
          id: "fabric.media.add_account",
          defaultMessage: "Add account",
          description: "Allows to add a new account"
        },
        unlink_account: {
          id: "fabric.media.unlink_account",
          defaultMessage: "Unlink Account",
          description: "Allows to remove a connected account from the user"
        },
        upload_file_from: {
          id: "fabric.media.upload_file_from",
          defaultMessage: "Upload a file from {name}",
          description: "Allows to upload a file from different sources"
        },
        connect_to: {
          id: "fabric.media.connect_to",
          defaultMessage: "Connect to {name}",
          description: "Allows the user to connect with different types of external services"
        },
        connect_account_description: {
          id: "fabric.media.connect_account_description",
          defaultMessage: "We'll open a new page to help you connect your {name} account",
          description: "Explains what will happen when the users connects to a new account"
        },
        connect_link_account: {
          id: "fabric.media.connect_link_account",
          defaultMessage: "Connect to preview",
          description: "Shown when a user does not have access to a link, but can connect their external account to view the link."
        },
        connect_link_account_card: {
          id: "fabric.media.connect_link_account_card_view",
          defaultMessage: "Connect",
          description: "Shown when a user does not have access to a link, but can connect their external account to view the link on card view."
        },
        connect_link_account_card_name: {
          id: "fabric.media.connect_link_account_card_view_name",
          defaultMessage: "Connect your {context} account",
          description: "Shown when a user does not have access to a link, but can connect their external account to view the link on card view. Displayed in title."
        },
        connect_link_account_card_description: {
          id: "fabric.media.connect_link_account_card_view_description",
          defaultMessage: "To show a preview of this link, connect your {context} account.",
          description: "Shown when a user does not have access to a link, but can connect their external account to view the link on card view. Displayed in byline."
        },
        invalid_permissions: {
          id: "fabric.media.invalid_permissions",
          defaultMessage: "Restricted link",
          description: "Message shown when a user does not have permissions to view an item"
        },
        invalid_permissions_description: {
          id: "fabric.media.invalid_permissions_description",
          defaultMessage: "You'll need to request access or try a different account to view this preview.",
          description: "Message shown when a user does not have permissions to view an item. Displayed as description."
        },
        upload_an_avatar: {
          id: "fabric.media.upload_an_avatar",
          defaultMessage: "Upload an avatar",
          description: "Indicates that the user can upload a new avatar"
        },
        loading: {
          id: "fabric.media.loading",
          defaultMessage: "Loading...",
          description: "Indicates an element on a page is loading."
        },
        save: {
          id: "fabric.media.save",
          defaultMessage: "Save",
          description: 'Just the "save" word'
        },
        or: {
          id: "fabric.media.or",
          defaultMessage: "or",
          description: 'Just the "or" word'
        },
        upload_photo: {
          id: "fabric.media.upload_photo",
          defaultMessage: "Upload a photo",
          description: "Call to action for the user to upload a new photo"
        },
        default_avatars: {
          id: "fabric.media.default_avatars",
          defaultMessage: "Default avatars",
          description: "Showed above the default avatar list"
        },
        drag_and_drop_images_here: {
          id: "fabric.media.drag_and_drop_images_here",
          defaultMessage: "Drag and drop your images here",
          description: "Indicates that the user can drag and drop images in that area"
        },
        upload_image: {
          id: "fabric.media.upload_image",
          defaultMessage: "Upload image",
          description: "Call to action for the user to upload a new image"
        },
        image_url_invalid_error: {
          id: "fabric.media.image_url_invalid_error",
          defaultMessage: "Could not load image, the url is invalid.",
          description: "There was an error parsing the image url"
        },
        image_format_invalid_error: {
          id: "fabric.media.image_format_invalid_error",
          defaultMessage: "Could not load image, the format is invalid.",
          description: "The provided image format is not valid"
        },
        image_size_too_large_error: {
          id: "fabric.media.image_size_too_large_error",
          defaultMessage: "Image is too large, must be no larger than {MAX_SIZE_MB}Mb",
          description: "The provided image size is too big"
        },
        something_went_wrong: {
          id: "fabric.media.something_went_wrong",
          defaultMessage: "Something went wrong.",
          description: "Showed when an error happen but we dont have more info about it"
        },
        might_be_a_hiccup: {
          id: "fabric.media.might_be_a_hiccup",
          defaultMessage: "It might just be a hiccup.",
          description: "Used when an unknow error happens, just in a funny way of saying that we dont have more info about it"
        },
        couldnt_generate_preview: {
          id: "fabric.media.couldnt_generate_preview",
          defaultMessage: "We couldn't generate a preview for this file.",
          description: "Error case for when the backend cant generate a preview for that file"
        },
        couldnt_generate_encrypted_entry_preview: {
          id: "fabric.media.couldnt_generate_encrypted_entry_preview",
          defaultMessage: "We can't preview encrypted or password protected files.",
          description: "Error case for when an entry selected is encrypted"
        },
        cant_preview_file_type: {
          id: "fabric.media.cant_preview_file_type",
          defaultMessage: "We can't preview this file type.",
          description: "Error case for when we have no available preview for that file"
        },
        item_not_found_in_list: {
          id: "fabric.media.item_not_found_in_list",
          defaultMessage: "The selected item was not found on the list.",
          description: "Error case for when a provided item is not found within the list of items"
        },
        not_found_title: {
          id: "fabric.media.not_found_title",
          defaultMessage: "Uh oh. We can't find this link!",
          description: "Error case for when a provided link is not found"
        },
        not_found_description: {
          id: "fabric.media.not_found_description",
          defaultMessage: "We couldn't find the link. Check the url and try editing or paste again.",
          description: "Error case for when a provided item is not found within the list of items"
        },
        no_pdf_artifacts: {
          id: "fabric.media.no_pdf_artifacts",
          defaultMessage: "No PDF artifacts found for this file.",
          description: "Error case for when we cant preview a PDF file"
        },
        give_feedback: {
          id: "fabric.media.give_feedback",
          defaultMessage: "Give feedback",
          description: "Call to action that opens a popup to get feedback from the users"
        },
        try_downloading_file: {
          id: "fabric.media.try_downloading_file",
          defaultMessage: "Try downloading the file to view it.",
          description: "We show this message to allow users to download a file"
        },
        webgl_warning_description: {
          id: "fabric.media.webgl_warning_description",
          defaultMessage: "Your browser does not support WebGL. Use a WebGL enabled browser to annotate images.",
          description: "We show this error message when the browser doesnt support this feature"
        },
        unable_to_annotate_image: {
          id: "fabric.media.unable_to_annotate_image",
          defaultMessage: "You're unable to annotate this image",
          description: "If there is an error trying to annotate an image we show this"
        },
        learn_more: {
          id: "fabric.media.learn_more",
          defaultMessage: "Learn More",
          description: ""
        },
        accounts: {
          id: "fabric.media.accounts",
          defaultMessage: "Accounts",
          description: ""
        },
        actions: {
          id: "fabric.media.actions",
          defaultMessage: "Actions",
          description: ""
        },
        error_hint_retry: {
          id: "fabric.media.error_hint_retry",
          defaultMessage: "Try again and we'll give it another shot.",
          description: "Generic message that we show if an action failed"
        },
        error_hint_critical: {
          id: "fabric.media.error_hint_critical",
          defaultMessage: "If the problem keeps happening contact support.",
          description: "We show this error message if we cant recover from the action"
        },
        close: {
          id: "fabric.media.close",
          defaultMessage: "Close",
          description: ""
        },
        could_not_load_editor: {
          id: "fabric.media.could_not_load_editor",
          defaultMessage: "Ouch! We could not load the editor",
          description: "Error message to communicate that we cant load the editor"
        },
        could_not_save_image: {
          id: "fabric.media.could_not_save_image",
          defaultMessage: "Ouch! We could not save the image",
          description: "Error message to communicate that we cant save an image"
        },
        could_not_load_link: {
          id: "fabric.media.couldnt_load_link",
          defaultMessage: "We couldn't load this link for an unknown reason.",
          description: "Error case for card view - link could not be loaded."
        },
        annotate: {
          id: "fabric.media.annotate",
          defaultMessage: "Annotate",
          description: ""
        },
        annotate_tool_arrow: {
          id: "fabric.media.annotate.tool.arrow",
          defaultMessage: "Arrow",
          description: ""
        },
        annotate_tool_text: {
          id: "fabric.media.annotate.tool.text",
          defaultMessage: "Text",
          description: ""
        },
        annotate_tool_shape: {
          id: "fabric.media.annotate.tool.shape",
          defaultMessage: "Shape",
          description: ""
        },
        annotate_tool_brush: {
          id: "fabric.media.annotate.tool.brush",
          defaultMessage: "Brush",
          description: ""
        },
        annotate_tool_blur: {
          id: "fabric.media.annotate.tool.blur",
          defaultMessage: "Blur",
          description: ""
        },
        annotate_tool_line_thickness: {
          id: "fabric.media.annotate.tool.line.thickness",
          defaultMessage: "Line thickness",
          description: ""
        },
        annotate_tool_color: {
          id: "fabric.media.annotate.tool.color",
          defaultMessage: "Color",
          description: ""
        },
        annotate_confirmation_close_anyway: {
          id: "fabric.media.annotate.confirmation.close.anyway",
          defaultMessage: "Close anyway",
          description: ""
        },
        annotate_confirmation_heading: {
          id: "fabric.media.annotate.confirmation.heading",
          defaultMessage: "Unsaved changes",
          description: ""
        },
        annotate_confirmation_content: {
          id: "fabric.media.annotate.confirmation.content",
          defaultMessage: "You have some unsaved changes. Are you sure you want to leave?",
          description: ""
        },
        drop_your_files_here: {
          id: "fabric.media.drop_your_files_here",
          defaultMessage: "Drop your files here",
          description: "Info message that we show to indicate that the user can drag and drop files"
        },
        share_files_instantly: {
          id: "fabric.media.share_files_instantly",
          defaultMessage: "We'll share them instantly",
          description: "It means that we will upload the files you drag and drop automatically"
        },
        insert_files: {
          id: "fabric.media.insert_files",
          defaultMessage: "Insert {0, plural, one {a file} other {{0} files}}",
          description: "Showed when the user selects 1 or more files to insert"
        },
        zoom_out: {
          id: "fabric.media.zoom_out",
          defaultMessage: "zoom out",
          description: "Indicates the user can zoom out a file"
        },
        zoom_in: {
          id: "fabric.media.zoom_in",
          defaultMessage: "zoom in",
          description: "Indicates the user can zoom in a file"
        },
        remove_image: {
          id: "fabric.media.remove_image",
          defaultMessage: "Remove image",
          description: "Allows the user to remove a file"
        },
        play: {
          id: "fabric.media.play",
          defaultMessage: "play",
          description: ""
        },
        pause: {
          id: "fabric.media.pause",
          defaultMessage: "pause",
          description: ""
        },
        disable_fullscreen: {
          id: "fabric.media.disable_fullscreen",
          defaultMessage: "disable fullscreen",
          description: "Hint to let the user know they can disable the fullscreen mode"
        },
        enable_fullscreen: {
          id: "fabric.media.enable_fullscreen",
          defaultMessage: "enable fullscreen",
          description: "Hint to let the user know they can enable the fullscreen mode"
        },
        error_loading_file: {
          id: "fabric.media.error_loading_file",
          defaultMessage: "Error loading file",
          description: "Message showed when we had an error trying to load the file"
        },
        error_generating_preview: {
          id: "fabric.media.error_generating_preview",
          defaultMessage: "Error generating preview",
          description: "Message showed when we had an error trying generate a preview for a file"
        },
        download: {
          id: "fabric.media.download",
          defaultMessage: "Download",
          description: ""
        },
        unknown: {
          id: "fabric.media.unknown",
          defaultMessage: "unknown",
          description: ""
        },
        document: {
          id: "fabric.media.document",
          defaultMessage: "document",
          description: ""
        },
        audio: {
          id: "fabric.media.audio",
          defaultMessage: "audio",
          description: ""
        },
        video: {
          id: "fabric.media.video",
          defaultMessage: "video",
          description: ""
        },
        image: {
          id: "fabric.media.image",
          defaultMessage: "image",
          description: ""
        },
        archive: {
          id: "fabric.media.archive",
          defaultMessage: "archive",
          description: ""
        },
        email: {
          id: "fabric.media.email",
          defaultMessage: "email",
          description: ""
        },
        text: {
          id: "fabric.media.text",
          defaultMessage: "text",
          description: ""
        },
        search: {
          id: "fabric.media.search",
          defaultMessage: "search",
          description: ""
        },
        view: {
          id: "fabric.media.view",
          defaultMessage: "View",
          description: "Go through to a piece of content to view it in its original context."
        },
        viewIn: {
          id: "fabric.media.srclink",
          defaultMessage: "View in",
          description: "We have a link in our preview modals to the original document. This text goes before the provider name"
        },
        viewOriginal: {
          id: "fabric.media.srclinkunknown",
          defaultMessage: "View Original",
          description: "We have a link in our preview modals to the original document. This is for when we don't know the provider name"
        },
        playbackSpeed: {
          id: "fabric.media.playback_speed",
          defaultMessage: "Playback speed",
          description: "In the context of a video player, it allows user to switch the speed of the video"
        },
        playbackDefaultSpeed: {
          id: "fabric.media.playback_default_speed",
          defaultMessage: "Default",
          description: "In the context of a video player, it is a value of a default playback speed"
        },
        preview: {
          id: "fabric.media.preview",
          defaultMessage: "Preview",
          description: "Click to view a richer view of your content, without needing to navigate to it."
        },
        creating_preview: {
          id: "fabric.media.creating_preview",
          defaultMessage: "Creating preview...",
          description: "Preview is being created for a media card"
        },
        preview_unavailable: {
          id: "fabric.media.preview_unavailable",
          defaultMessage: "Preview unavailable",
          description: "Preview is unavailable for a media card"
        }
      } )
    },
    Rqxe: function ( e, a, t ) {
      "use strict";
      class i extends Error {
        constructor( e, a ) {
          super( e ), this.message = e, this.type = a, this.name = "AuthError", this.type = a, this.message = e
        }
      }

      function n( e, a ) {
        return new Promise( ( t, n ) => {
          let o, r = null;
          const s = e => {
              if ( e.source !== r ) return;
              const {
                data: a
              } = e;
              if ( "object" == typeof a ) switch ( a.type ) {
                case "outbound-auth:success":
                  c(), t();
                  break;
                case "outbound-auth:failure":
                  c();
                  const e = a.errorType.toLowerCase();
                  [ "auth_window_closed", "invalid_request", "unauthorized_client", "access_denied", "unsupported_response_type", "invalid_scope", "server_error", "temporarily_unavailable" ].includes( e ) ? n( new i( a.message, e ) ) : n( new i( a.message ) )
              }
            },
            d = () => {
              r && r.closed && ( c(), n( new i( "The auth window was closed", "auth_window_closed" ) ) )
            },
            c = () => {
              clearInterval( o ), window.removeEventListener( "message", s ), r && ( r.close(), r = null )
            };
          window.addEventListener( "message", s ), r = window.open( e, e, a ), o = window.setInterval( d, 500 )
        } )
      }
      t.d( a, "a", ( function () {
        return n
      } ) )
    },
    YqJL: function ( e, a, t ) {
      "use strict";
      var i = t( "Czhu" ),
        n = t( "ERkP" ),
        o = t.n( n ),
        r = t( "lbXe" ),
        s = t( "bQsU" );
      class d extends n.Component {
        constructor() {
          super( ...arguments ), this.fireAnalytics = e => {
            const {
              createAnalyticsEvent: a,
              channel: t,
              data: n
            } = this.props;
            a( {
              action: "UnhandledError",
              eventType: "ui",
              attributes: Object( i.a )( Object( i.a )( {
                browserInfo: window && window.navigator && window.navigator.userAgent ? window.navigator.userAgent : "unknown"
              }, n ), e )
            } ).fire( t )
          }
        }
        componentDidCatch( e, a ) {
          const t = {
            error: e,
            info: a
          };
          this.fireAnalytics( t )
        }
        render() {
          const {
            data: e,
            children: a
          } = this.props;
          return o.a.createElement( s.a, {
            data: e
          }, a )
        }
      }
      const c = Object( r.a )()( d );
      a.a = c
    },
    c1da: function ( e, a, t ) {
      "use strict";
      Object.defineProperty( a, "__esModule", {
        value: !0
      } ), a.default = void 0;
      var i = o( t( "ERkP" ) ),
        n = o( t( "4KTy" ) );

      function o( e ) {
        return e && e.__esModule ? e : {
          default: e
        }
      }

      function r() {
        return ( r = Object.assign || function ( e ) {
          for ( var a = 1; a < arguments.length; a++ ) {
            var t = arguments[ a ];
            for ( var i in t ) Object.prototype.hasOwnProperty.call( t, i ) && ( e[ i ] = t[ i ] )
          }
          return e
        } ).apply( this, arguments )
      }
      var s = function ( e ) {
        return i.default.createElement( n.default, r( {
          dangerouslySetGlyph: '<svg width="24" height="24" viewBox="0 0 24 24" focusable="false" role="presentation"><g fill-rule="evenodd"><rect fill="currentColor" x="4" y="4" width="16" height="16" rx="2"/><path d="M16.37 14.954L14 13.807v-3.613l2.37-1.148c.285-.138.63.05.63.343v5.222c0 .293-.345.481-.63.343" fill="inherit"/><rect fill="inherit" x="7" y="9" width="6" height="6" rx="1"/></g></svg>'
        }, e ) )
      };
      s.displayName = "MediaServicesVideoIcon";
      var d = s;
      a.default = d
    },
    dG6O: function ( e, a, t ) {
      "use strict";
      Object.defineProperty( a, "__esModule", {
        value: !0
      } ), a.default = void 0;
      var i = o( t( "ERkP" ) ),
        n = o( t( "4KTy" ) );

      function o( e ) {
        return e && e.__esModule ? e : {
          default: e
        }
      }

      function r() {
        return ( r = Object.assign || function ( e ) {
          for ( var a = 1; a < arguments.length; a++ ) {
            var t = arguments[ a ];
            for ( var i in t ) Object.prototype.hasOwnProperty.call( t, i ) && ( e[ i ] = t[ i ] )
          }
          return e
        } ).apply( this, arguments )
      }
      var s = function ( e ) {
        return i.default.createElement( n.default, r( {
          dangerouslySetGlyph: '<svg width="24" height="24" viewBox="0 0 24 24" focusable="false" role="presentation"><g fill="currentColor" fill-rule="evenodd"><path d="M17 10.005V19H7V5h5.99v2.49a1.5 1.5 0 0 0 1.5 1.5h4.5v-.522c0-.297-.132-.578-.359-.768l-5.074-4.236c-.36-.3-.813-.464-1.282-.464H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-8.995h-2z"/><rect x="8" y="12" width="8" height="2" rx="1"/><rect x="8" y="15" width="4" height="2" rx="1"/></g></svg>'
        }, e ) )
      };
      s.displayName = "FileIcon";
      var d = s;
      a.default = d
    },
    lb6e: function ( e, a, t ) {
      "use strict";
      t.d( a, "a", ( function () {
        return c
      } ) );
      var i = t( "ERkP" ),
        n = t.n( i ),
        o = t( "dG6O" ),
        r = t.n( o ),
        s = t( "/kGK" ),
        d = t( "3i3M" );
      class c extends i.Component {
        render() {
          const {
            dimensions: e,
            testId: a
          } = this.props, t = Object( s.a )( e );
          return n.a.createElement( d.a, {
            "data-testid": a || "media-card-loading",
            "data-test-loading": !0,
            dimensions: t
          }, this.icon )
        }
        get icon() {
          return n.a.createElement( r.a, {
            label: "loading",
            size: "medium"
          } )
        }
      }
    }
  }
] );
//# sourceMappingURL=10.UCMkUGMQH9.js.map
