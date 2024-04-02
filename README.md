# ci-toolkit

A simple toolkit for CI/CD pipelines.

## Installation

```bash
yarn add @akrc/ci-toolkit
```

## Usage

### Skip in CI

```json
{
    "scripts": {
        "ci": "skip-in-ci electron-builder install-app-deps"
    }
}
```

So `electron-builder install-app-deps` will be skipped when running in CI.

Only have one ability for now.
