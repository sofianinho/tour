# Go Tour

A Tour of Go is an introduction to the Go programming language. Visit
https://tour.golang.org to start the tour.

## Download/Install

### Official version

To install the tour from source, first
[set up a workspace](https://golang.org/doc/code.html) and then run:

	$ go get golang.org/x/tour

This will place a `tour` binary in your workspace's `bin` directory, which
can be run offline.

### This version

Installation procedure still under work. For now, git clone and go build.
There is an additional flag in the binary to specify the location of the static content.

Use `--help` for the binary help.

## Add a new section to the tour

- Write the `.article` in the `content` folder
- See if this a new section. Then add an entry in `static/js/values.js` in the `tableOfContents`
- In the same file, edit the `mapping` variable accordingly

## Major security related change from original repo

This tour version can accept code in the playground without origin checks. This is obviously to be used very carefully

It is intended to be used in a trusted environment, preferably on a dummy machine/chroot/jail just in case.

It might be very useful for a training session with beginers for example. 

By default, this is not enabled. You have the choice of enable this mode if you want by setting the `disableOriginCheck` flag.

```
tour --help
Usage of tour:
  -contentlocation string
    	content location for tour (default "github.com/sofianinho/tour")
  -disableOriginCheck
    	Disables Origin checks from playground. Use with Caution.
  -http string
    	host:port to listen on (default "127.0.0.1:3999")
  -openbrowser
    	open browser automatically (default true)

```

## Run with docker

Runs the tour with origin check disabled (see warning above), to answer requests from anywhere

```
docker run -d -p 80:3999 sofianinho/tour:latest tour -disableOriginCheck -http "0.0.0.0:3999"
```

## Report Issues / Send Patches

The main issue tracker for the tour is located at
https://github.com/sofianinho/tour/issues. Prefix your issue with "tour:" in the
subject line, so it is easy to find.

## License

Unless otherwise noted, the go-tour source files are distributed
under the BSD-style license found in the LICENSE file.
