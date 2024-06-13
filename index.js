import { setOutput } from '@actions/core';

function verifyRelease(_pluginConfig, { nextRelease }) {
  setOutput("tag", nextRelease.gitTag);
  setOutput("version", nextRelease.version);
}

export default {
  verifyRelease,
};
