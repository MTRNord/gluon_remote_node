var sshclient = require('sshclient');

export.modules[
  changeName: function (ip, newname) {
    var opts = {

      host: 'myhost',
      port: 22,
      username: 'ubuntu',
      privateKey: fs.readFileSync('./somekey.pem'),

      debug: true, // optional
      console: console // optional, allows logger overriding
    };

    sshclient.session(opts, _x(cb, true, function(err, ses) {
      _x(null, false, function(cb) {
        ses.exec("uci set system.@system[0].hostname='" + newname + "'", cb);
        ses.exec("uci commit system", cb);
        ses.exec("/etc/init.d/system reload", cb);
      })
    });
  }
]
