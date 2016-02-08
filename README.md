# WeakMap Polyfill

* A minimal WeakMap polyfill written in TypeScript, unit tested using Jasmine and Karma.
* The polyfill is full featured when comparing to the native implementation of WeakMap. All native operations complete with an asymptotic time complexity of O(1).
* Built file size is 2 KB minified.

## Installation

Ensure that Node and npm are both installed.

Then, install gulp globally:

```
npm install -g gulp
```

Finally, install all development dependencies:

```
cd CLONED_REPO_DIR
npm install
```

Run the default gulp task to run the linter, run unit tests, build documentation, and build the required scripts.

Look at the [gulp](https://github.com/brendenpalmer/weakmap/tree/master/gulp) folder to view the available tasks to run.

## Usage

If you're interested in contributing, see the [Contributing](https://github.com/brendenpalmer/weakmap#contributing) section below. Otherwise, install this package via npm: [es6-weakmap](https://www.npmjs.com/package/es6-weakmap).

The [dist](https://github.com/brendenpalmer/weakmap/tree/master/dist) folder contains all you'll need to get up and running.

## Documentation

The built documentation will always be located here: [Documentation](https://github.com/brendenpalmer/weakmap/tree/master/docs).

## Contributing

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request.

## History

See the [CHANGELOG](https://github.com/brendenpalmer/weakmap/blob/master/CHANGELOG.md).

## License

Licensed under MIT. See the full license here:  [license](https://github.com/brendenpalmer/weakmap/blob/master/LICENSE).
