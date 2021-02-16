"use strict";

(function () {
  function getFilePath() {
    const elem = document.getElementById('analytic-signal.preview-pdf')
    if (elem) {
      return elem.getAttribute('content')
    }
    throw new Error('Could not load file.')
  }

  window.addEventListener('load', function () {
    const filePath = getFilePath()
    PDFViewerApplication.open(filePath)
    PDFViewerApplication.initializedPromise.then(() => {})
    window.addEventListener('message', function () {
      window.PDFViewerApplication.open(filePath)
    });
  }, { once: true });

  window.onerror = function () {
    const msg = document.createElement('body')
    msg.innerText = 'An error occurred while loading the file. Please open it again.'
    document.body = msg
  }
}());