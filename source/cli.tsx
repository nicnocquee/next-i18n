#!/usr/bin/env node
import fs from 'node:fs'
import path from 'node:path'
import meow from 'meow'
import { generateLocale } from './generate-locale.js'

const cli = meow(
  `
  Usage
    $ simple-i18n-next [input]

  Options
    --input, -i <type> The path to the locales directory.  [Default: ./locales]
    --default-language, -l <type> The default language to use.  [Default: the first directory in the locales directory]
    
  Examples
    $ simple-i18n-next -i ./locales
`,
  {
    importMeta: import.meta,
    flags: {
      input: { type: 'string', shortFlag: 'i', default: './locales' },
      defaultLanguage: {
        aliases: ['default-language'],
        type: 'string',
        shortFlag: 'l',
      },
    },
  }
)
const localeDirPath = path.resolve(process.cwd(), cli.flags.input)
if (!fs.existsSync(localeDirPath)) {
  console.error(
    `The directory that contains the locale files are not found at at ${localeDirPath}. Please provide a valid path to the locale directory.`
  )
  process.exit(1)
}

generateLocale({ localesDir: localeDirPath, defaultLanguage: cli.flags.defaultLanguage })
