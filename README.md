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

## Report Issues / Send Patches

The main issue tracker for the tour is located at
https://github.com/sofianinho/tour/issues. Prefix your issue with "tour:" in the
subject line, so it is easy to find.

## License

Unless otherwise noted, the go-tour source files are distributed
under the BSD-style license found in the LICENSE file.
