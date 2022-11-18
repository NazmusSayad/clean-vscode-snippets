console.clear()
import fs from 'fs'
import path from 'path'
import ls from 'node-ls-files'

const vscodePath = path.join(
  process.env.ProgramFiles,
  './Microsoft VS Code/resources/app/extensions'
)

const foundFiles = ls.sync(vscodePath, {
  filter: (path) => {
    return path.ext === '.code-snippets'
  },
})

foundFiles.forEach((file) => {
  fs.writeFileSync(file, '{}')
})
