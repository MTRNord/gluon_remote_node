var sshclient = require('sshclient');

export.modules[
  changeName: function (ip, key, newname) {
    var opts = {

      host: ip,
      port: 22,
      username: 'root',
      privateKey: key,

      debug: true, // optional
      console: console // optional, allows logger overriding
    };

    sshclient.session(opts, _x(cb, true, function(err, ses) {
      _x(null, false, function(cb) {
        sshclient.exec('uci set system.@system[0].hostname="'+ newname + '"', cb);
        sshclient.exec('uci commit system', cb);
        sshclient.exec('/etc/init.d/system reload', cb);
      })
    });
  },
  changeContact: function (ip, key, name, email) {
    var opts = {

      host: ip,
      port: 22,
      username: 'root',
      privateKey: key,

      debug: true, // optional
      console: console // optional, allows logger overriding
    };

    sshclient.session(opts, _x(cb, true, function(err, ses) {
      _x(null, false, function(cb) {
        sshclient.exec('uci get gluon-node-info.@owner[0] || uci add gluon-node-info owner', cb);
        sshclient.exec('uci set gluon-node-info.@owner[0].contact="' + name + ' <' + email + '>', cb);
        sshclient.exec('uci commit gluon-node-info', cb);
      })
    });
  }.
  activateMOL: function (ip, key) {
    var opts = {

      host: ip,
      port: 22,
      username: 'root',
      privateKey: key,

      debug: true, // optional
      console: console // optional, allows logger overriding
    };

    sshclient.session(opts, _x(cb, true, function(err, ses) {
      _x(null, false, function(cb) {
        sshclient.exec('for iface in $(cat /lib/gluon/core/sysconfig/lan_ifname); do uci del_list network.client.ifname=$iface; done', cb);
        sshclient.exec('uci set network.mesh_lan.auto=1', cb);
        sshclient.exec('uci commit network', cb);
        sshclient.exec('/etc/init.d/network restart', cb);
      })
    });
  }.
  deactivateMOL: function (ip, key) {
    var opts = {

      host: ip,
      port: 22,
      username: 'root',
      privateKey: key,

      debug: true, // optional
      console: console // optional, allows logger overriding
    };

    sshclient.session(opts, _x(cb, true, function(err, ses) {
      _x(null, false, function(cb) {
        sshclient.exec('for iface in $(cat /lib/gluon/core/sysconfig/lan_ifname); do uci add_list network.client.ifname=$iface; done', cb);
        sshclient.exec('uci set network.mesh_lan.auto=0', cb);
        sshclient.exec('uci commit network', cb);
        sshclient.exec('/etc/init.d/network restart', cb);
      })
    });
  }.
  activateMOW: function (ip, key) {
    var opts = {

      host: ip,
      port: 22,
      username: 'root',
      privateKey: key,

      debug: true, // optional
      console: console // optional, allows logger overriding
    };

    sshclient.session(opts, _x(cb, true, function(err, ses) {
      _x(null, false, function(cb) {
        sshclient.exec('uci set network.mesh_wan.auto=1', cb);
        sshclient.exec('uci commit network', cb);
        sshclient.exec('/etc/init.d/network restart', cb);
      })
    });
  }.
  deactivateMOW: function (ip, key) {
    var opts = {

      host: ip,
      port: 22,
      username: 'root',
      privateKey: key,

      debug: true, // optional
      console: console // optional, allows logger overriding
    };

    sshclient.session(opts, _x(cb, true, function(err, ses) {
      _x(null, false, function(cb) {
        sshclient.exec('uci set network.mesh_wan.auto=0', cb);
        sshclient.exec('uci commit network', cb);
        sshclient.exec('/etc/init.d/network restart', cb);
      })
    });
  }
]
