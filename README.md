# Triple-Triad

A woefully incomplete implementation of the card game [Triple Triad](http://finalfantasy.wikia.com/wiki/Triple_Triad) from [Final Fantasy VIII](http://en.wikipedia.org/wiki/Final_Fantasy_VIII)

This is an example project for [Om/React](https://github.com/swannodette/om) and I won't guarantee a complete game anytime soon.

Images and information from http://finalfantasy.wikia.com/wiki/List_of_Triple_Triad_Cards

## Usage

Compile all `cljs` and `scss` files

    lein cljsbuild once && scss --update src/scss:resources/public/css

Run your web server in the `resources/public` directory

    python -m SimpleHTTPServer

## License

Copyright (C) 2014 Sidhant Godiwala (grinnbearit)
