var sshclient = require('sshclient');
var laeh = require('laeh2').leanStacks(true);
var _x = laeh._x;
var changeName = function (ip, key, newname, token, cb) {
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
    }));
  }
var changeContact = function (ip, key, name, email, token, cb) {
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
    }));
  }
var activateMOL = function (ip, key, cb) {
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
    }));
  }
var deactivateMOL = function (ip, key, cb) {
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
    }));
  }
var activateMOW = function (ip, key, cb) {
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
    }));
  }
var deactivateMOW = function (ip, key, cb) {
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
    }));
  }
var changeGeo = function (ip, key, lat, long, alt, token, cb) {
    var ccode = "placeholder"
    if (ccode === "ffnord" || ccode === "ffhh" || ccode === "ffhl") {
      //TODÒ Add formAPI
    } else {
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
          sshclient.exec('uci set gluon-node-info.@location[0].latitude=' + lat, cb);
          sshclient.exec('uci set gluon-node-info.@location[0].longitude=' + long, cb);
          sshclient.exec('uci set gluon-node-info.@location[0].altitude=' + alt, cb);
          sshclient.exec('uci set gluon-node-info.@location[0].share_location=1', cb);
          sshclient.exec('uci commit gluon-node-info', cb);
        })
      }));
    }

  }

exports.changeName = changeName;
exports.changeContact = changeContact;
exports.activateMOL = activateMOL;
exports.deactivateMOL = deactivateMOL;
exports.activateMOW = activateMOW;
exports.deactivateMOW = deactivateMOW;
exports.changeGeo = changeGeo;
