# semantic-release-gha-output

[![npm](https://img.shields.io/npm/v/semantic-release-gha-output.svg)](https://www.npmjs.com/package/semantic-release-gha-output)

A semantic-release plugin to output values from a GitHub Action.

| Step               | Description                                                                                  |
| ------------------ | -------------------------------------------------------------------------------------------- |
| `verifyConditions` | Sets GitHub Action output variables `published` to false                                     |
| `verifyRelease`    | Sets GitHub Action output variables `tag` & `version`                                        |
| `success`          | Sets GitHub Action output variables `published` to true                                      |

## Install

```bash
$ npm install semantic-release-gha-output
```


## Outputs
| Output             | Description                                                                                  |
| ------------------ | -------------------------------------------------------------------------------------------- |
| `tag`              | Next release git tag.                                                                        |
| `version`          | Next release version.                                                                        |
| `published`        | Boolean to indicate whether a new release was published.                                     |


## Usage

The plugin can be configured in the [**semantic-release** configuration file](https://github.com/semantic-release/semantic-release/blob/master/docs/usage/configuration.md#configuration) or via CLI:

```json
{
  "plugins": [
    "@semantic-release/commit-analyzer",
    "@semantic-release/release-notes-generator",
    "@semantic-release/github",
    "semantic-release-gha-output"
  ]
}
```
