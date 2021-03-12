// 更新入口文件
// 读取components文件夹下的每个组件文件夹下的index.ts文件, 根据里面的导出内容来生成
const { resolve } = require('path')
const { sync } = require('glob')
const { writeFileSync, readFileSync, existsSync } = require('fs')
const { cwd } = require('process')

let content = '// 执行gen-entry命令来生成此文件\n\n'
let reg = /\/([A-z\d]+)\/$/
let exportReg = /export\s/
sync('packages/victory-ui/components/*/').forEach(component => {
  reg.test(component)
  const componentName = RegExp.$1

  // 生成同样的样式文件
  const stylePath = resolve(cwd(), `packages/victory-ui/styles/${componentName}.scss`)
  if (!existsSync(stylePath)) {
    writeFileSync(stylePath, '')
  }

  const entryContent = readFileSync(resolve(cwd(), component, 'index.ts')).toString()
  if (exportReg.test(entryContent)) {
    console.log('导出: ' + componentName + ' 组件')
    content += `export * from './components/${componentName}'\n\n`
  }
})
writeFileSync(resolve(__dirname, '../packages/victory-ui/index.ts'), content)
