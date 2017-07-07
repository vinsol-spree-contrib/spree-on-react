import * as fs from 'fs';
import {sync as globSync} from 'glob';
import {sync as mkdirpSync} from 'mkdirp';
import deepMerge from 'deepmerge';

// This is where we keep the locale files.
const LOCALE_FILES_PATTERN  = './locales/**/*.json';
// This is the directory where consolidated JSON is stored.
const TRANSLATION_FILE_DIR  = './translations/';
const TRANSLATION_FILE_NAME = 'app-translations.json';
var   appTranslations       = {};

// Deep Merging all locale files to build one consolidated JSON.
globSync(LOCALE_FILES_PATTERN)
  .map((filename) => fs.readFileSync(filename, 'utf8'))
  .forEach((file) => {
      appTranslations = deepMerge(appTranslations, JSON.parse(file));
  });

mkdirpSync(TRANSLATION_FILE_DIR);

fs.writeFileSync(TRANSLATION_FILE_DIR + TRANSLATION_FILE_NAME, JSON.stringify(appTranslations, null, 2) );
