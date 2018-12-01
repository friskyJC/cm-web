/**
 * https://github.com/marcuswestin/WebViewJavascriptBridge
 * https://github.com/wendux/WebViewJavascriptBridge
 */

class JSBridge {
  // eslint-disable-next-line
  setupWebViewJavascriptBridge(callback) {
    const bridge =
      window.WebViewJavascriptBridge || window.WKWebViewJavascriptBridge;

    if (bridge) {
      return callback(bridge);
    }
    const callbacks = window.WVJBCallbacks || window.WKWVJBCallbacks;
    if (callbacks) {
      return callbacks.push(callback);
    }
    // eslint-disable-next-line
    window.WVJBCallbacks = window.WKWVJBCallbacks = [callback];
    if (window.WKWebViewJavascriptBridge) {
      // for https://github.com/Lision/WKWebViewJavascriptBridge
      window.webkit.messageHandlers.iOS_Native_InjectJavascript.postMessage(
        null,
      );
    } else {
      // for https://github.com/marcuswestin/WebViewJavascriptBridge
      const WVJBIframe = document.createElement('iframe');
      WVJBIframe.style.display = 'none';
      WVJBIframe.src = 'https://__bridge_loaded__';
      document.documentElement.appendChild(WVJBIframe);
      setTimeout(() => {
        document.documentElement.removeChild(WVJBIframe);
      }, 0);
    }
  }
}

export default new JSBridge();
