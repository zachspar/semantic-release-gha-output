import { setOutput } from '@actions/core';

function verifyConditions() {
  setOutput("published", "false");
}

function verifyRelease(_pluginConfig, { lastRelease, nextRelease }) {
  setOutput("lastHead", lastRelease.gitHead?);
  setOutput("lastTag", lastRelease.gitTag?);
  setOutput("lastVersion", lastRelease.version?);
  setOutput("head", nextRelease.gitHead);
  setOutput("tag", nextRelease.gitTag);
  setOutput("type", nextRelease.type);
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
