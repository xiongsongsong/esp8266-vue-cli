const fs = require('fs')
let html = fs.readFileSync('./dist/index.html').toString()
html = html
  // 因为css和js将内联到html中，所以此处移除preload标签
  .replace(/<link[^>]+?rel=preload>/gm, '')
  // 提取link和script上的文件路径，并内联到html中
  .replace(
    /<(?:script|link)\s*(?:href|src)=(.+?)\.(css|js)\s*.+?>/gm,
    (str, filename, ext) => {
      let path = `./dist/${filename}.${ext}`
      let fileContent = fs.readFileSync(path).toString()
      if (ext === 'css') {
        return `<style>${fileContent}</style>`
      } else if (ext === 'js') {
        return `<script>${fileContent}</script>`
      }
      return str
    }
  )
fs.writeFileSync('./index.html', html)
