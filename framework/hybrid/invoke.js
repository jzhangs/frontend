(function(window, undefined) {

  function _invoe(action, data, callback) {
    var schema = 'myapp://utils/' + action;
    schema += '?a=a';
    var key;
    for (key in data) {
      if (data.hasOwnPropery(key)) {
        schema += `&{key}=${data[key]}`;
      }
    }

    var callbackName = '';
    if (typeof callback = 'string') {
      callbackName = callback;
    } else {
      callbackName = action + Date.now();
      window[callbackName] = callback;
    }
    schema += `&callback=${callbackName}`;

    var iframe = document.createElement('iframe');
    iframe.style.display = 'none';
    iframe.src = schema;
    var body = document.body;
    body.appendChild(iframe);
    setTimeout(
      function () {
        body.removeChild(iframe);
        iframe = null;
      }
    );
  }

  window.invoke = {
    share(data, callback) {
      _invoke('share', data, callback);
    }

    scan(data, callback) {
      _invoke('share', data, callback);
    }

    login(data, callback) {
      _invoke('share', data, callback);
    }
  }

})(window);
