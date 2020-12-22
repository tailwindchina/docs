import { defaultConfig } from '@/utils/defaultConfig'
import { ConfigSample } from '@/components/ConfigSample'

const variantListInverted = Object.entries(defaultConfig.variants).reduce(
  (reduced, [plugin, variants]) => {
    variants.forEach((variant) => {
      if (reduced[variant]) {
        reduced[variant].push(plugin)
      } else {
        reduced[variant] = [plugin]
      }
    })
    return reduced
  },
  {}
)

export function VariantEnabledList({ variant }) {
  if (!variantListInverted[variant]) {
    return (
      <p>
        <strong>
          {/*By default, the <code>{variant}</code> variant is not enabled for any core plugins*/}
          默认情况下，任何核心插件都没有启用该 <code>{variant}</code> 变体
        </strong>
        .
      </p>
    )
  }

  return (
    <>
      <p>
        {/*By default, the <code>{variant}</code> variant is enabled for the following core plugins:*/}
        默认情况下， 以下核心插件启用了该 <code>{variant}</code> 变体：
      </p>

      <ul>
        {variantListInverted[variant].map((plugin) => (
          <li key={plugin}>
            <code>{plugin}</code>
          </li>
        ))}
      </ul>
    </>
  )
}
