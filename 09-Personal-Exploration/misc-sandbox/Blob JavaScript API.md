# Blob JavaScript API

> Interactive API reference for the JavaScript Blob Object. Blobs are immutable objects that represent raw data.    File is a derivation of Blob that represents data from the file system.  Use FileReade

constructor

Blobs are immutable objects that represent raw data. [File](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/File) is a derivation of Blob that represents data from the file system. Use [FileReader](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/FileReader) to read data from a Blob or File. Blobs allow you to construct file like objects on the client that you can pass to apis that expect urls instead of requiring the server provides the file. For example, you can construct a blob containing the data for an image, use [`URL.createObjectURL()`](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/URL#createObjectURL) to generate a url, and pass that url to [`HTMLImageElement.src`](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/HTMLImageElement#src) to display the image you created without talking to a server.

Constructors
------------

new Blob() : [Blob](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/Blob)

Creates a new `Blob` with [`size`](#size) set to `0`.

new Blob(blobParts : [Array](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/Array), \[blobPropertyBag : [Object](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/Object)\]) : [Blob](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/Blob)

blobPropertyBag : {

<table><tbody><tr><td><span>type</span></td><td><a href="chrome-extension://cjedbglnccaioiolemnfhjncicchinao/String">String</a></td><td>A valid mime type such as <code>'text/plain'</code></td></tr><tr><td><span>endings</span></td><td><a href="chrome-extension://cjedbglnccaioiolemnfhjncicchinao/String">String</a></td><td>Must be either <code>'transparent'</code> or <code>'native'</code></td></tr></tbody></table>

}

Creates a new `Blob`. The elements of `blobParts` must be of the types [`ArrayBuffer`](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/ArrayBuffer), [`ArrayBufferView`](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/ArrayBufferView), [`Blob`](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/Blob), or [`String`](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/String). If `ending` is set to `'native'`, the line endings in the blob will be converted to the system line endings, such as `'\r\n'` for Windows or `'\n'` for Mac.

#### Results:

size=6
type=
native of "foo\\nbar" => "foo\\r\\nbar"
native of "foo\\r\\nbar" => "foo\\r\\nbar"
transparent of "foo\\nbar" => "foo\\nbar"
transparent of "foo\\r\\nbar" => "foo\\r\\nbar"

Instance Properties
-------------------

The size of the blob in bytes.

Instance Methods
----------------

Returns a new blob that contains the bytes `start` to `end - 1` from `this`. If `start` or `end` is negative, the value is added to [`this.size`](#size) before performing the slice. If `end` is not specified, `this.size` is used. The returned blob's [`type`](#type) will be `contentType` if specified, otherwise it will be `''`.

#### Results:

blob size: 6
blob type: plain/text
copy size: 6
copy type: 
slice size: 3
slice type: foo-type

Returns a stream of the data in `this`. The values of the stream will be [`Uint8Array`](chrome-extension://cjedbglnccaioiolemnfhjncicchinao/Uint8Array)s.

Copyright © JavaScripture Contributors


[Source](https://www.javascripture.com/Blob)