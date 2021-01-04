import { ConfigSample } from '@/components/ConfigSample'
import { castArray } from '@/utils/castArray'
import { joinWithAnd } from '@/utils/joinWithAnd'

export function Disabling({ plugin, name }) {
  const plugins = castArray(plugin)
  name = name || plugin.replace(/([a-z])([A-Z])/g, (m, p1, p2) => `${p1} ${p2.toLowerCase()}`)

  // return (
  //   <div className="prose">
  //     <p>
  //       If you don't plan to use the {name} utilities in your project, you can disable them entirely
  //       by setting the{' '}
  //       <span
  //         dangerouslySetInnerHTML={{
  //           __html: joinWithAnd(plugins.map((p) => `<code>${p}</code>`)),
  //         }}
  //       />{' '}
  //       {plugins.length > 1 ? 'properties' : 'property'} to <code>false</code> in the{' '}
  //       <code>corePlugins</code> section of your config file:
  //     </p>
  //
  //     <ConfigSample
  //       path="corePlugins"
  //       before="..."
  //       add={plugins.reduce((acc, cur) => ({ ...acc, [cur]: false }), {})}
  //     />
  //   </div>
  // )

  return (
    <div className="prose">
      <p>
          如果您不打算在您的项目中使用 {name} 功能，您可以通过在配置文件的{' '}<code>corePlugins</code> 部分将{' '}
          <span
              dangerouslySetInnerHTML={{
                  __html: joinWithAnd(plugins.map((p) => `<code>${p}</code>`)),
              }}
          />{' '} 属性设置为 <code>false</code> 来完全禁用它们：
      </p>

      <ConfigSample
        path="corePlugins"
        before="..."
        add={plugins.reduce((acc, cur) => ({ ...acc, [cur]: false }), {})}
      />
    </div>
  )
}
