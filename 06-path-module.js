const path = require('node:path')
// console.log(path)
const createdPath = path.join('content', 'subfolder', 'text.txt')

// console.log(path.basename(createdPath))
const resolvedPath = path.resolve(__dirname,createdPath )
const baseFile = path.basename(resolvedPath)
console.log(baseFile)