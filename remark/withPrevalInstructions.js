const fs = require('fs')
const fm = require('front-matter')
const redent = require('redent')
const visit = require('unist-util-visit')

const unified = require('unified')
const markdown = unified().use(require('remark-parse'))

const stubs = {
  tailwind: fs.readFileSync(require.resolve('tailwindcss/stubs/simpleConfig.stub'), 'utf8'),
  postcss: fs.readFileSync(require.resolve('tailwindcss/stubs/defaultPostCssConfig.stub'), 'utf8'),
}

// Abusing the front-matter plugin to parse the Yaml, so that we don't have to
// load another yaml tool. Shush, don't tell anyone!
function yaml(input) {
  return fm(['---', input, '---'].join('\n')).attributes
}

function md(input) {
  // The regex replace will deduce two or more \n to a single \n
  return markdown.parse(redent(input).replace(/^\n+/gm, '\n')).children
}

function joinAsSpeech(words, separator = ' 和 ') {
  let all = words.slice()
  let last = all.pop()

  return [all.join(', '), last].filter(Boolean).join(separator)
}

function escapeRegex(input) {
  return input.replace(/[-/\\^$*+?.()|[\]{}]/g, '\\$&')
}

function diff(blob, changes) {
  // Re-indent with 2 spaces, so that we have breathing room for the - and + signs.
  let next = blob
    .split('\n')
    .map((line) => `  ${line}`)
    .join('\n')

  for (let [needle, replacement] of changes) {
    next = next
      .replace(
        new RegExp(`([  ]*)${escapeRegex(needle)}`),
        [
          needle
            .split('\n')
            .map((line) => `- $1${line}`)
            .join('\n'),
          replacement
            .split('\n')
            .map((line) => `+ $1${line}`)
            .join('\n'),
        ].join('\n')
      )
      // $1 contained 2 spaces to many
      .replace(/^([-+])\s{3}/gm, '$1 ')
  }

  return next
}

function quote(char = "'") {
  return (line) => char + line + char
}

function indent(amount = 2) {
  return (line) => ' '.repeat(amount) + line
}

function error(input) {
  return `<div class="fixed top-0 left-0 right-0 p-4 z-50 bg-red-500 text-white text-2xl">Pages contains issues!</div><span class="font-bold bg-red-100 bg-opacity-50 ring-4 ring-red-600 ring-opacity-75 rounded-2xl px-2">${input}</span>`
}

function code(language, contents, { file = null, indent = 8 } = {}) {
  let diffIndentation = language.includes('diff-') ? '  ' : ''
  let comment = {
    js: (data) => `// ${data}`,
    css: (data) => `/* ${data} */`,
    html: (data) => `<!-- ${data} -->`,
    php: (data) => (file && file.endsWith('.blade.php') ? `{{-- ${data} --}}` : `// ${data}`),
  }

  return [
    '```' + language,
    file && diffIndentation + comment[language.replace('diff-', '')](file),
    contents.trimEnd(),
    '```',
  ]
    .filter(Boolean)
    .join('\n')
    .split('\n')
    .map((line, idx) => (idx === 0 ? line : `${' '.repeat(indent)}${line}`))
    .join('\n')
}

function createPrevals({ tool: pageTool = error('UNKNOWN') } = {}) {
  return {
    installation({
      tool = pageTool,
      reference = null,
      script,
      npmInstall = false,
      disclaimer = null,
    }) {
      return md(`
        ## 创建您的工程

        如果您还没有建立一个新的 ${tool} 项目，请先创建一个新的项目。${
          reference !== null
            ? `最常见的方法是使用 [${reference.name}](${reference.link})：`
            : ''
        }


        ${disclaimer !== null ? code('shell', `${script} my-project`) : ''}
        ${disclaimer !== null ? disclaimer : ''}

        ${disclaimer !== null ? '下一步，将目录改为新项目：' : ''}
        ${disclaimer !== null ? code('shell', 'cd my-project') : ''}

        ${
          disclaimer === null
            ? code('shell', [`${script} my-project`, 'cd my-project'].join('\n'))
            : ''
        }

        ${npmInstall ? `接下来，使用 \`npm\` 安装 ${tool} 的前端依赖关系。` : ''}
        ${npmInstall ? code('shell', 'npm install') : ''}
      `)
    },
    configuration({ purge = [], types = ['pages', 'components'], postcss = true }) {
      let files = ['tailwind.config.js', postcss && 'postcss.config.js']
        .filter(Boolean)
        .map(quote('`'))
      let multipleFiles = files.length > 1

      return md(`
        ### 创建您的配置${multipleFiles ? '文件' : '文件'}

        接下来，生成您的 ${joinAsSpeech(files)} ${multipleFiles ? '文件' : '文件'}：

        ${code('shell', `npx tailwindcss init ${postcss ? '-p' : ''}`)}

        这将会在您的项目根目录创建一个最小化的 \`tailwind.config.js\` 文件：

        ${code('js', stubs.tailwind, { file: 'tailwind.config.js' })}

        阅读[配置文档](/docs/configuration)了解更多。

        ${
          postcss
            ? '这也将会创建一个包含已配置好的 `tailwindcss` 和 `autoprefixer` 的 `postcss.config.js` 配置文件：'
            : ''
        }
        ${postcss ? code('js', stubs.postcss, { file: 'postcss.config.js' }) : ''}
        ${
          postcss
            ? "如果您计划使用其它的 PostCSS 插件，请阅读我们的[将 PostCSS 作为您的 preprocessor 的文档](/docs/using-with-preprocessors)。"            
            : ''
        }

        ### 配置 Tailwind 来移除生产环境下没有使用到的样式声明

        在您的 \`tailwind.config.js\` 文件中，配置 \`purge\` 选项指定所有的 ${joinAsSpeech(
          types
        )} 文件，使得 Tailwind 可以在生产构建中对未使用的样式进行摇树优化。

        
        ${code(
          'diff-js',
          diff(stubs.tailwind, [
            [
              'purge: [],',
              `purge: [${
                purge.length > 2
                  ? // Use multiple lines once we hit 3 lines of purging
                    '\n' + purge.map(quote("'")).map(indent(2)).join(',\n') + ',\n'
                  : // Keep it all inline
                    purge.map(quote("'")).join(', ')
              }],`,
            ],
          ]),
          { file: 'tailwind.config.js' }
        )}

        请阅读我们单独的[优化生产指南](/docs/optimizing-for-production)，以了解更多关于摇树优化未使用的样式来获得最佳性能的信息。
      `)
    },
    setup({
      dependencies = [],
      uninstall = [],
      dev = false,
      soon = false,
      tool = pageTool,
      version = 'latest',
    }) {
      let knownDependencies = {
        latest: ['tailwindcss@latest', 'postcss@latest', 'autoprefixer@latest'],
        'compat-7': [
          'tailwindcss@npm:@tailwindcss/postcss7-compat',
          '@tailwindcss/postcss7-compat',
          'postcss@^7',
          'autoprefixer@^9',
        ],
      }

      if (typeof version === 'string') {
        version = { [tool]: version }
      }

      let hasMultipleVersion = Object.keys(version).length > 1
      let installCode = Object.entries(version)
        .map(([name, mode]) => {
          if (knownDependencies[mode] === undefined) {
            throw new Error(
              `Unknown version "${mode}". Only valid versions are: ${joinAsSpeech(
                Object.values(knownDependencies).map(quote('`'))
              )}`
            )
          }

          return [
            hasMultipleVersion && `# If you're on ${name}`,
            `npm install ${dev ? '-D ' : ''}${[...dependencies, ...knownDependencies[mode]].join(
              ' '
            )}`,
          ]
            .filter(Boolean)
            .join('\n')
        })
        .join('\n\n')

      let outdatedVersions = Object.keys(version)
        .filter((name) => version[name] === 'compat-7')
        .flatMap((version) => version.split(/\s(?:and|or)\s/)) // "Next.js or older" -> ["Next.js", "older"]
        .filter(Boolean)
      let information =
        outdatedVersions.length > 0
          ? `${joinAsSpeech(outdatedVersions)} ${
              outdatedVersions.length === 1 ? "已经不" : "已经不"
            }支持 PostCSS 8${
              soon ? " _(但它很快就会支持)_" : ''
            }，所以您需要安装[ Tailwind CSS v2.0 PostCSS 7 兼容性版本](/docs/installation#post-css-7)。`
          : ''

      return md(`
        ## 初始化 Tailwind CSS

        ### 通过 npm 安装 Tailwind

        ${
          uninstall.length > 0
            ? `如果您已经安装了 ${joinAsSpeech(uninstall.map(quote('`')))} ${
                uninstall.length === 1 ? '模块' : '模块'
              } ，您必须在安装 Tailwind 本身之前卸载它。`
            : ''
        }
        ${uninstall.length > 0 ? code('shell', `npm uninstall ${uninstall.join(' ')}`) : ''}

        ${uninstall.length > 0 ? '接下来，使用  \`npm\` 安装' : '安装'} ${joinAsSpeech(
        [...dependencies.map(quote('`')), 'Tailwind'],
      )} 以及其它依赖项\:

        ${code('shell', installCode)}

        ${information}
      `)
    },
    include({ file, create = false, tool = pageTool, withChromiumBug = false, level = 3 }) {
      return md(`
        ${'#'.repeat(level)} 在您的 CSS 中引入 Tailwind

        ${
          create
            ? `创建 \`${file}\` 文件`
            : `打开 ${tool} 默认为您生成的 ${file} 文件`
        }
        并使用 \`@tailwind\` 指令来包含 Tailwind的 \`base\`、 \`components\` 和 \`utilities\` 样式，来替换掉原来的文件内容。

        ${code(
          'css',
          [
            ...(withChromiumBug ? ['', '/*! @import */'] : []),
            '@tailwind base;',
            '@tailwind components;',
            '@tailwind utilities;',
          ].join('\n'),
          { file }
        )}

        ${
          withChromiumBug
            ? "_由于[ Chromium 中的 bug ](https://bugs.chromium.org/p/chromium/issues/detail?id=1131113)，请确保包含 `/*！@import */` 注释，以避免开发时在 Chrome DevTools 中出现的性能问题。此问题已在 Canary 中修复，但尚未发布。_"
            : ''
        }

        Tailwind 会在构建时将这些指令转换成所有基于您配置的设计系统生成的样式文件。

        阅读我们的文档[添加基础样式](/docs/adding-base-styles)，[提取组件](/docs/extracting-components)，和[添加新的功能类](/docs/adding-new-utilities)，以获得用您自己的自定义 CSS 扩展 Tailwind 的最佳实践。
      `)
    },
    finish({ scripts = [], tool = pageTool }) {
      return md(`
        您已经完成了所有步骤！现在，当您运行 ${joinAsSpeech(
          scripts.map(quote('`')),
          ' 或 '
        )}, Tailwind CSS 就可以在您的 ${tool} 项目中使用了。

        [接下来了解一下功能类优先的工作流程 &rarr;](/docs/utility-first)
      `)
    },
  }
}

module.exports.withPrevalInstructions = () => {
  return (tree, VFile) => {
    let context = VFile.contents.match(/export const meta = ([{[])(.*)/)
    if (context !== null) {
      try {
        context = JSON.parse(context[1] + context[2])
      } catch (err) {
        context = {}
      }
    } else {
      context = {}
    }

    let prevals = createPrevals(context)

    visit(tree, 'code', (node, index, parent) => {
      if (node.lang !== 'preval') return
      if (prevals[node.meta] === undefined)
        throw new Error(
          `Preval instruction "${node.meta}" is not handled properly!\n\n\tSee: ./remark/withPrevalInstructions.js`
        )

      parent.children.splice(index, 1, ...[].concat(prevals[node.meta](yaml(node.value), node)))
    })
  }
}
