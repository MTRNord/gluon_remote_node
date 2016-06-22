# Gluon Remote

An Tool to easily manage Freifunk Gluon Routers. (WIP)

Discussion Thread: https://forum.freifunk.net/t/gluon-remote-tool/

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisities

What things you need to install the software and how to install them

```
1. Install the Linux Package 'ssh-keygen'
2. clone the repository to anywhere you want
3. Edit the config/config.json file as your needs
```

### Running

A step by step series of how to run the App

Web:

```
Web isn't implemented yet.
```

Commandline:

```
Usage: npm start [options] [command]

SSH Key has to be an private one. It is used to connect to the Router which means that you have to have an private key for the Tool and the public one must be registered in the Router

Commands:

  changeName <ip> <ssh> [token] <newname>                       Change the Hostname of the router (no Formular support yet!)
  changeContact <ip> <ssh> [token] [ccode] <name> <email>       Change the Contact of the router (no Formular support yet!)
  changeGeo <ip> <ssh> [token] [ccode] <lat> <long> <altitude>  Change the Router Position (no Formular support yet!)
  MOL <ip> <ssh> <on/off>                                       Activate or deactivate Mesh on Lan
  MOW <ip> <ssh> <on/off>                                       Activate or deactivate Mesh on Wan
  help [cmd]                                                    display help for [cmd]

Options:

  -h, --help  output usage information

```

## Running the tests

Test's not implemented yet

## Built With

* Commander - Commandline commands
* Expressjs - Web Server
* ssh-keygen - Genearating SSH-keys if needed
* sshclient - Libary for connecting Router over SSH

[//]: # (## Contributing)

[//]: # (Please read [CONTRIBUTING.md](CONTRIBUTING.md) for details on our code of conduct, and the process for submitting pull requests to us.)

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/your/project/tags).

## Authors

* **MTRNord** - *Initial work* - [MTRNord](https://github.com/MTRNord)

See also the list of [contributors](https://github.com/MTRNord/gluon_web_remote_node/contributors) who participated in this project.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
