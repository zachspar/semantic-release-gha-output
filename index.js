import { setOutput } from '@actions/core';

function verifyConditions() {
  setOutput("published", "false");
}

function verifyRelease(_pluginConfig, { nextRelease }) {
  setOutput("tag", nextRelease.gitTag);
  setOutput("version", nextRelease.version);
}

function success() {
  setOutput("published", "true");
}

export default {
  verifyConditions,
  verifyRelease,
  success,
};
