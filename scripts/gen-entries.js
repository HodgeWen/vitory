// 更新入口文件
// 读取components文件夹下的每个组件文件夹下的index.ts文件, 根据里面的导出内容来生成
const { resolve } = require('path')
const { sync } = require('glob')
const { writeFileSync, readFileSync, existsSync } = require('fs')
const { cwd } = require('process')

// 组件入口文件内容
let componentEntryContent = '// 执行gen-entry命令来生成此文件\n\n'
// 样式入口文件内容
let themeEntryContent = ''

let reg = /\/([A-z\d]+)\/$/
let exportReg = /export\s/
sync('victory-ui/components/*/').forEach(component => {
  reg.test(component)
  const componentName = RegExp.$1

  // 组件对应的样式文件路径
  const themePath = resolve(cwd(), `victory-ui/styles/theme/${componentName}.scss`)

  !existsSync(themePath) && writeFileSync(themePath, '')

  themeEntryContent += `@import '${componentName}';\n\n`

  const entryContent = readFileSync(resolve(cwd(), component, 'index.ts')).toString()
  if (exportReg.test(entryContent)) {
    console.log('导出: ' + componentName + ' 组件')
    componentEntryContent += `export * from './components/${componentName}'\n\n`
  }
})

// 主题文件入口生成
writeFileSync(resolve(cwd(), `victory-ui/styles/theme/index.scss`), themeEntryContent)
// 组件文件入口生成
writeFileSync(resolve(__dirname, '../victory-ui/index.ts'), componentEntryContent)
