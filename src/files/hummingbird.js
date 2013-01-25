HummingbirdTracker = {
  track: function(env) {
    if(typeof(env) == "undefined") { env = {}; }

    // send some miscellaneous info about the request
    env.u = document.location.href;
    env.bw = window.innerWidth;
    env.bh = window.innerHeight;

    // example of sending a cookie named 'guid'
    // env.guid = (document.cookie.match(/guid=([^\_]*)_([^;]*)/) || [])[2];

    if(document.referrer && document.referrer != "") {
      env.ref = document.referrer;
    }

    env.rnd = Math.floor(Math.random() * 10e12);

    var params = [];
    for(var key in env) {
      if(env.hasOwnProperty(key)) {
        params.push(encodeURIComponent(i) + "=" + encodeURIComponent(env[i]));
      }
    }

    // replace 'localhost:8080' with hummingbird's URL
    var img = new Image();
    img.src = 'http://docpad.evbogue.com:8087/tracking_pixel.gif?' + params.join('&');
  }
};
