import { defaultConfig } from '@/utils/defaultConfig'
import { joinWithAnd } from '@/utils/joinWithAnd'
import { ConfigSample } from '@/components/ConfigSample'

export function Variants({ plugin, name }) {
  const variants = defaultConfig.variants[plugin] || ['responsive']
  name = name || plugin.replace(/([a-z])([A-Z])/g, (m, p1, p2) => `${p1} ${p2.toLowerCase()}`)
  const extraVariants = ['responsive', 'hover', 'focus', 'active', 'group-hover']
    .filter((x) => !variants.includes(x))
    .slice(0, 2)

  // const opening = `By default, ${
  //   variants.length
  //     ? `only ${joinWithAnd(variants).replace('dark', 'dark mode <em>(if enabled)</em>')}`
  //     : 'no'
  // } variants are generated for ${name} utilities.`

  const opening = `默认情况下， 针对 ${name} 功能类，${
    variants.length
      ? `只生成 ${joinWithAnd(variants).replace('dark', 'dark mode <em>(if enabled)</em>')}`
      : '不生成任何'
  } 变体。`

  // return (
  //   <div className="prose">
  //     <p dangerouslySetInnerHTML={{ __html: opening }} />
  //     <p>
  //       You can control which variants are generated for the {name} utilities by modifying the{' '}
  //       <code>{plugin}</code> property in the <code>variants</code> section of your{' '}
  //       <code>tailwind.config.js</code> file.
  //     </p>
  //     <p>
  //       For example, this config will {variants.length > 0 ? 'also ' : ''}generate{' '}
  //       {joinWithAnd(extraVariants)} variants:
  //     </p>
  //     <ConfigSample path="variants.extend" before="..." add={{ [plugin]: extraVariants }} />
  //   </div>
  // )

  return (
    <div className="prose">
      <p dangerouslySetInnerHTML={{ __html: opening }} />
      <p>
        您可以通过修改您的{' '}<code>tailwind.config.js</code> 文件中的 <code>variants</code> 部分中的{' '}<code>{plugin}</code> 属性来控制为 {name} 功能生成哪些变体。
      </p>
      <p>
          例如，这个配置{variants.length > 0 ? '也' : ''}将生成{' '}{joinWithAnd(extraVariants)} 变体:
      </p>
      <ConfigSample path="variants.extend" before="..." add={{ [plugin]: extraVariants }} />
    </div>
  )
}
