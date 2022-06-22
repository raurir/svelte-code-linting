# ❤️ Svelte

Some issues with Svelte regarding Autoformatting with Sublime + Testing with Jest Coverage

## Autoformatting

Saving in sublime causes the prettier autoformat to exponentially take longer depending on the file size. I have experienced more than a minute for some files!

### Lint settings

Sublime is using `prettier-plugin-svelte`.

Contents of `JsPrettier.sublime-settings`:
```js
{
	"auto_format_on_save": true,
	"custom_file_extensions": ["svelte"],
	"additional_cli_args": {
		"--config-precedence": "file-override",
		"--plugin-search-dir": "/working-folder/app"
	}
}
```

#### Video capture of lag
https://user-images.githubusercontent.com/383190/174916858-ebb89ab4-ac0e-4d51-961d-0ab2a7684af0.mov

Whereas, running prettier via the command line is fast:

```bash
$ prettier --plugin-search-dir=. './src/**/*.{svelte,ts}' --write
src/AllCode.complete.test.ts 180ms
src/AllCode.poor.test.ts 4ms
src/AllCode.svelte 68ms
src/App.svelte 2ms
src/Large.svelte 22ms
src/main.ts 3ms
src/ManyStyles.svelte 15ms
src/Small.svelte 8ms
✨  Done in 0.52s.
```

## Testing

running `yarn test` works:

```bash
$ jest src
 PASS  src/AllCode.poor.test.ts
 PASS  src/AllCode.complete.test.ts

Test Suites: 2 passed, 2 total
Tests:       2 passed, 2 total
Snapshots:   0 total
Time:        1.47 s, estimated 2 s
Ran all test suites matching /src/i.
✨  Done in 2.13s.
```

### Errors running test:coverage for untested files

running `yarn test:coverage` kind of works but mostly not:

```bash
$ jest --coverage --verbose
 PASS  src/AllCode.complete.test.ts
  AllCode complete
    ✓ runs tests with full coverage (13 ms)

 PASS  src/AllCode.poor.test.ts
  AllCode poor
    ✓ runs tests with poor coverage (2 ms)

Running coverage on untested files...Failed to collect coverage from /working-folder/src/App.svelte
ERROR: Cannot find module 'file:///working-folder/svelte.config.js'
Require stack:
- /working-folder/node_modules/svelte-jester/dist/transformer.cjs
- /working-folder/node_modules/jest-util/build/requireOrImportModule.js
- /working-folder/node_modules/jest-util/build/index.js
- /working-folder/node_modules/@jest/transform/build/shouldInstrument.js
- /working-folder/node_modules/@jest/transform/build/ScriptTransformer.js
- /working-folder/node_modules/@jest/transform/build/index.js
- /working-folder/node_modules/@jest/reporters/build/generateEmptyCoverage.js
- /working-folder/node_modules/@jest/reporters/build/CoverageWorker.js
- /working-folder/node_modules/jest-worker/build/workers/processChild.js
STACK: Error: Cannot find module 'file:///working-folder/svelte.config.js'
Require stack:
- /working-folder/node_modules/svelte-jester/dist/transformer.cjs
- /working-folder/node_modules/jest-util/build/requireOrImportModule.js
- /working-folder/node_modules/jest-util/build/index.js
- /working-folder/node_modules/@jest/transform/build/shouldInstrument.js
- /working-folder/node_modules/@jest/transform/build/ScriptTransformer.js
- /working-folder/node_modules/@jest/transform/build/index.js
- /working-folder/node_modules/@jest/reporters/build/generateEmptyCoverage.js
- /working-folder/node_modules/@jest/reporters/build/CoverageWorker.js
- /working-folder/node_modules/jest-worker/build/workers/processChild.js
    at Function.Module._resolveFilename (internal/modules/cjs/loader.js:889:15)
    at Function.Module._load (internal/modules/cjs/loader.js:745:27)
    at Module.require (internal/modules/cjs/loader.js:961:19)
    at require (internal/modules/cjs/helpers.js:92:18)
    at /working-folder/node_modules/svelte-jester/dist/transformer.cjs:77:141
    at processTicksAndRejections (internal/process/task_queues.js:95:5)
Failed to collect coverage from /working-folder/src/Small.svelte
ERROR: Cannot find module 'file:///working-folder/svelte.config.js'
Require stack:
- /working-folder/node_modules/svelte-jester/dist/transformer.cjs
- /working-folder/node_modules/jest-util/build/requireOrImportModule.js
- /working-folder/node_modules/jest-util/build/index.js
- /working-folder/node_modules/@jest/transform/build/shouldInstrument.js
- /working-folder/node_modules/@jest/transform/build/ScriptTransformer.js
- /working-folder/node_modules/@jest/transform/build/index.js
- /working-folder/node_modules/@jest/reporters/build/generateEmptyCoverage.js
- /working-folder/node_modules/@jest/reporters/build/CoverageWorker.js
- /working-folder/node_modules/jest-worker/build/workers/processChild.js
STACK: Error: Cannot find module 'file:///working-folder/svelte.config.js'
Require stack:
- /working-folder/node_modules/svelte-jester/dist/transformer.cjs
- /working-folder/node_modules/jest-util/build/requireOrImportModule.js
- /working-folder/node_modules/jest-util/build/index.js
- /working-folder/node_modules/@jest/transform/build/shouldInstrument.js
- /working-folder/node_modules/@jest/transform/build/ScriptTransformer.js
- /working-folder/node_modules/@jest/transform/build/index.js
- /working-folder/node_modules/@jest/reporters/build/generateEmptyCoverage.js
- /working-folder/node_modules/@jest/reporters/build/CoverageWorker.js
- /working-folder/node_modules/jest-worker/build/workers/processChild.js
    at Function.Module._resolveFilename (internal/modules/cjs/loader.js:889:15)
    at Function.Module._load (internal/modules/cjs/loader.js:745:27)
    at Module.require (internal/modules/cjs/loader.js:961:19)
    at require (internal/modules/cjs/helpers.js:92:18)
    at /working-folder/node_modules/svelte-jester/dist/transformer.cjs:77:141
    at processTicksAndRejections (internal/process/task_queues.js:95:5)
Failed to collect coverage from /working-folder/src/ManyStyles.svelte
```
`COMPLETE ERROR STACK REMOVED`
```bash
----------------|---------|----------|---------|---------|-------------------
File            | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s
----------------|---------|----------|---------|---------|-------------------
All files       |     100 |    33.33 |     100 |     100 |
 AllCode.svelte |     100 |    33.33 |     100 |     100 | 20-29
----------------|---------|----------|---------|---------|-------------------
Test Suites: 2 passed, 2 total
Tests:       2 passed, 2 total
Snapshots:   0 total
Time:        1.235 s
Ran all test suites.
✨  Done in 1.62s.
```

### Incorrect code coverage

Running `yarn test:coverage poor` (only running a [poor test](https://github.com/raurir/svelte-code-linting/blob/master/src/AllCode.poor.test.ts)):

```bash
$ jest --coverage --verbose poor
 PASS  src/AllCode.poor.test.ts
  AllCode poor
    ✓ runs tests with poor coverage (10 ms)
```
`COMPLETE ERROR STACK REMOVED`
```bash
----------------|---------|----------|---------|---------|-------------------
File            | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s
----------------|---------|----------|---------|---------|-------------------
All files       |   33.33 |    33.33 |     100 |   42.85 |
 AllCode.svelte |   33.33 |    33.33 |     100 |   42.85 | 6-14,21,25,29
----------------|---------|----------|---------|---------|-------------------
Test Suites: 1 passed, 1 total
Tests:       1 passed, 1 total
Snapshots:   0 total
Time:        1.275 s
Ran all test suites matching /poor/i.
✨  Done in 1.81s.
```

#### screen capture of poor results
<img width="710" alt="test-coverage-poor" src="https://user-images.githubusercontent.com/383190/174917217-59e14c94-cd3a-4825-a370-d54b7e29e704.png">


Running `yarn test:coverage complete` (only running a [complete test](https://github.com/raurir/svelte-code-linting/blob/master/src/AllCode.complete.test.ts)):

```bash
$ jest --coverage --verbose complete
 PASS  src/AllCode.complete.test.ts
  AllCode complete
    ✓ runs tests with full coverage (12 ms)
```
`COMPLETE ERROR STACK REMOVED`
```bash
----------------|---------|----------|---------|---------|-------------------
File            | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s
----------------|---------|----------|---------|---------|-------------------
All files       |     100 |    33.33 |     100 |     100 |
 AllCode.svelte |     100 |    33.33 |     100 |     100 | 20-29
----------------|---------|----------|---------|---------|-------------------
Test Suites: 1 passed, 1 total
Tests:       1 passed, 1 total
Snapshots:   0 total
Time:        1.311 s
Ran all test suites matching /complete/i.
✨  Done in 2.18s.
```

#### screen capture of better but innacurate results
<img width="710" alt="test-coverage-complete" src="https://user-images.githubusercontent.com/383190/174917214-2c868d90-6c20-45e4-93c0-317312cc148a.png">

Note svelte html section shows incorrect coverage, all lines should be covered.

