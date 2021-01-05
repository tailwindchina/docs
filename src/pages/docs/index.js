import { DocumentationLayout } from '@/layouts/DocumentationLayout'
import { gradients } from '@/utils/gradients'
import { ReactComponent as ScreencastsImage } from '@/img/screencasts.svg'
import { ReactComponent as GuidesImage } from '@/img/guides.svg'
import { ReactComponent as PlayImage } from '@/img/play.svg'
import { ReactComponent as TuiLogo } from '@/img/tailwind-ui-logo-on-dark.svg'
import Link from 'next/link'
import clsx from 'clsx'
import tinytime from 'tinytime'
import { Community } from '@/components/Community'
import styles from './index.module.css'
import { Widont } from '@/components/Widont'
import { ReactComponent as TuiBundleLogo } from '@/img/tailwind-ui-bundle-logo.svg'
import { ReactComponent as RefactoringUiCompleteLogo } from '@/img/refactoring-ui-complete-logo.svg'

const whatsNew = [
  {
    // title: 'Focus Ring Utilities',
    title: 'Focus 轮廓环功能类',
    version: '2.0+',
    image: require('@/img/docs/focus-ring.svg').ReactComponent,
    href: '/docs/ring-width',
  },
  {
    // title: 'Dark Mode',
    title: '深色模式',
    version: '2.0+',
    image: require('@/img/docs/dark-mode.svg').ReactComponent,
    href: '/docs/dark-mode',
  },
  {
    // title: 'Extended Color Palette',
    title: '可扩展调色板',
    version: '2.0+',
    image: require('@/img/docs/color-palette.svg').ReactComponent,
    href: '/docs/customizing-colors#color-palette-reference',
  },
  {
    // title: 'Extend Variants',
    title: '可扩展变量',
    version: '2.0+',
    image: require('@/img/docs/extend-variants.svg').ReactComponent,
    href: '/docs/configuring-variants#enabling-extra-variants',
  },
  {
    // title: 'Extra Wide Breakpoint',
    title: '更多的宽度断点检查',
    version: '2.0+',
    image: require('@/img/docs/breakpoint.svg').ReactComponent,
    href: '/docs/breakpoints',
  },
  {
    // title: 'Shareable Presets',
    title: '可共享的 Presets ',
    image: require('@/img/docs/shareable-presets.svg').ReactComponent,
    href: '/docs/presets',
  },
  {
    // title: 'Gradients',
    title: '渐变',
    image: require('@/img/docs/gradients.svg').ReactComponent,
    href: '/docs/gradient-color-stops',
  },
  {
    // title: 'Animations',
    title: '动画',
    image: require('@/img/docs/animations.svg').ReactComponent,
    href: '/docs/animation',
  },
]

const latestUpdates = [
  {
    title: 'Tailwind CSS v2.0',
    date: '2020-11-18T17:45:00.000Z',
    url: 'https://blog.tailwindcss.com/tailwindcss-v2',
    description:
      // "Today we're finally releasing Tailwind CSS v2.0, including an all-new color palette, dark mode support, and tons more!",
    "今天我们终于发布了 Tailwind CSS v2.0，包含一个全新的调色板，深色模式支持等等很多更新！",
  },
  {
    title: 'Tailwind CSS v1.9.0',
    date: '2020-10-13T18:30:00.000Z',
    url: 'https://blog.tailwindcss.com/tailwindcss-1-9',
    description:
      // 'We just released Tailwind CSS v1.9 which adds support for configuration presets, useful new CSS grid utilities, extended border radius, rotate, and skew scales, helpful accessibility improvements, and more!',
      "我们发布了 Tailwind CSS v1.9：增加presets配置项，新的 CSS 网格类，可扩展边框圆角，旋转，倾斜拉伸以及有用的可访问性改进等等！"
  },
  {
    // title: 'Introducing Tailwind Play',
    title: '介绍 Tailwind Play ',
    date: '2020-10-07T13:00:00.000Z',
    url: 'https://blog.tailwindcss.com/introducing-tailwind-play',
    description:
      // "Today we're excited to release the first version of Tailwind Play, an advanced online playground for Tailwind CSS that lets you use all of Tailwind's build-time features directly in the browser.",
      "今天我们很高兴发布第一个版本的 Tailwind Play，一个高级的在线 Tailwind CSS Playground，可直接在浏览器中使用 Tailwind 的所有功能。"
  },
  {
    // title: 'Headless UI: Unstyled, Accessible UI Components',
    title: '无头 UI：无样式，可访问的 UI 组件',
    date: '2020-10-06T18:30:00.000Z',
    url: 'https://blog.tailwindcss.com/headless-ui-unstyled-accessible-ui-components',
    description:
      // 'Headless UI is a set of completely unstyled, fully accessible UI components for React, Vue, and Alpine.js that make it easy to build fully accessible custom UI components, without sacrificing the ability to style them from scratch with simple utility classes.',
      "无头 UI 是一组针对 React，Vue 和 Alpine.js 的完全无样式，完全可访问的 UI 组件，可轻松构建完全可访问的自定义 UI 组件，而不会牺牲使用简单实用的类从头开始对其进行样式设置的能力。"
  },
]

const formatDate = tinytime('{MM} {DD}, {YYYY}').render

export default function DocsLandingPage() {
  return (
    <div className="px-4 sm:px-6 xl:px-8 pt-10 pb-16">
      <h1 className="text-5xl leading-none font-extrabold text-gray-900 tracking-tight mb-4">
        {/* Getting started with Tailwind CSS */}
        开始 Tailwind CSS 之旅
      </h1>
      <p className="text-2xl tracking-tight mb-10">
        {/* Learn Tailwind the way that best matches your learning style. */}
        用最适合您的方式学习 Tailwind
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 xl:gap-8">
        <section className="flex">
          <div className="w-full relative text-white overflow-hidden rounded-3xl flex shadow-lg">
            <div className={`w-full flex md:flex-col bg-gradient-to-br ${gradients.violet[0]}`}>
              <div className="sm:max-w-sm sm:flex-none md:w-auto md:flex-auto flex flex-col items-start relative z-10 p-6 xl:p-8">
                <h2 className="text-xl font-semibold mb-2 text-shadow">阅读文档</h2>
                <p className="font-medium text-violet-100 text-shadow mb-4">
                  {/* Learn how to get Tailwind set up in your project. */}
                  学习如何在您的工程中加入 Tailwind
                </p>
                <Link href="/docs/installation">
                  <a className="mt-auto bg-violet-800 bg-opacity-50 hover:bg-opacity-75 transition-colors duration-200 rounded-xl font-semibold py-2 px-4 inline-flex">
                    {/* Start learning */}
                    开始学习
                  </a>
                </Link>
              </div>
              <div className={`${styles.image} relative md:pl-6 xl:pl-8 hidden sm:block`}>
                <GuidesImage className="absolute top-6 left-6 md:static overflow-visible" />
              </div>
            </div>
            <div
              className="absolute bottom-0 left-0 right-0 h-20 hidden sm:block"
              style={{
                background: 'linear-gradient(to top, rgb(135, 94, 245), rgba(135, 94, 245, 0))',
              }}
            />
          </div>
        </section>
        <section className="flex">
          <div className="w-full relative text-white overflow-hidden rounded-3xl flex shadow-lg">
            <div className={`w-full flex md:flex-col bg-gradient-to-br ${gradients.pink[0]}`}>
              <div className="sm:max-w-sm sm:flex-none md:w-auto md:flex-auto flex flex-col items-start relative z-10 p-6 xl:p-8">
                <h2 className="text-xl font-semibold mb-2 text-shadow">
                  {/* Try it in the browser */}
                  浏览器中尝试
                </h2>
                <p className="font-medium text-rose-100 text-shadow mb-4">
                  {/* Build something with Tailwind in our online playground. */}
                  在 Playground 中使用 Tailwind 创作
                </p>
                <a
                  href="https://play.tailwindcss.com/"
                  className="mt-auto bg-rose-900 bg-opacity-50 hover:bg-opacity-75 transition-colors duration-200 rounded-xl font-semibold py-2 px-4 inline-flex"
                >
                  {/* Start building */}
                  开始创作
                </a>
              </div>
              <div className={`${styles.image} relative md:pl-6 xl:pl-8 hidden sm:block`}>
                <PlayImage className="absolute top-6 left-6 md:static overflow-visible" />
              </div>
            </div>
            <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-rose-500 hidden sm:block" />
          </div>
        </section>
        <section className="flex">
          <div className="w-full relative text-white overflow-hidden rounded-3xl flex shadow-lg">
            <div className={`w-full flex md:flex-col bg-gradient-to-br ${gradients.amber[0]}`}>
              <div className="sm:max-w-sm sm:flex-none md:w-auto md:flex-auto flex flex-col items-start relative z-10 p-6 xl:p-8">
                <h2 className="text-xl font-semibold mb-2 text-shadow">
                  {/* Watch the screencasts */}
                  观看视频
                </h2>
                <p className="font-medium text-amber-100 text-shadow mb-4">
                  {/* Learn more about Tailwind directly from the team on our channel. */}
                  直接在 Youtube 频道中学习
                </p>
                <Link href="https://www.youtube.com/tailwindlabs">
                  <a className="mt-auto bg-amber-900 bg-opacity-50 hover:bg-opacity-75 transition-colors duration-200 rounded-xl font-semibold py-2 px-4 inline-flex">
                    {/* Start watching */}
                    开始观看
                  </a>
                </Link>
              </div>
              <div className={`${styles.image} relative hidden sm:block`}>
                <div className="absolute left-2 bottom-3 xl:bottom-5">
                  <ScreencastsImage className="overflow-visible" />
                </div>
              </div>
            </div>
            <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-orange-500 hidden sm:block" />
          </div>
        </section>
        <section className="md:col-span-3 flex flex-wrap md:flex-nowrap items-center bg-gray-800 shadow-lg rounded-2xl py-6 md:py-4 px-6 md:pr-5 space-y-4 md:space-y-0 md:space-x-8">
          <h2 className="flex-none">
            <span className="sr-only">Tailwind UI</span>
            <TuiLogo className="w-40 h-auto" />
          </h2>
          <p className="flex-auto text-white text-lg font-medium">
            <Widont>
              {/* Beautiful UI components, crafted by the creators of Tailwind CSS */}
              由 Tailwind CSS 的创造者们用心打造的精美 UI 组件库
            </Widont>
          </p>
          <a
            href="https://tailwindui.com/components"
            className="flex-none bg-white hover:bg-gray-100 transition-colors duration-200 text-gray-900 font-semibold rounded-lg py-3 px-4"
          >
            {/* Browse components */}
            浏览组件
          </a>
        </section>
      </div>
      <section>
        <h2 className="text-3xl tracking-tight font-extrabold text-gray-900 mt-16 mb-8">
          {/* What’s new in Tailwind */}
          Tailwind 的新变化
        </h2>
        <ul className="grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 xl:gap-8 font-semibold text-gray-900 text-center">
          {whatsNew.map((item) => (
            <li key={item.title} className="flex">
              <Link href={item.href}>
                <a className="relative rounded-xl ring-1 ring-black ring-opacity-5 shadow-sm w-full pt-8 pb-6 px-6">
                  {item.image && <item.image className="h-auto max-w-full mx-auto mb-3" />}
                  {item.title}
                  {item.version && (
                    <span className="absolute top-2 right-2 bg-fuchsia-100 text-fuchsia-600 rounded-full text-xs py-0.5 px-2">
                      {item.version}
                    </span>
                  )}
                </a>
              </Link>
            </li>
          ))}
        </ul>
      </section>
      <section>
        <header className="flex items-center justify-between mt-16 mb-8">
          <h2 className="text-3xl tracking-tight font-extrabold text-gray-900">最近的更新</h2>
          <a href="https://blog.tailwindcss.com" className="font-medium text-gray-900">
            {/* View all the latest updates */}
            查看所有最近的更新
          </a>
        </header>
        <ul className="bg-gray-50 rounded-3xl p-2 sm:p-5 xl:p-6">
          {latestUpdates.map((item, i) => (
            <li key={item.title}>
              <article>
                <a
                  href={item.url}
                  className="grid md:grid-cols-8 xl:grid-cols-9 items-start relative rounded-xl p-3 sm:p-5 xl:p-6 overflow-hidden hover:bg-white"
                >
                  <h3 className="font-semibold text-gray-900 md:col-start-3 md:col-span-6 xl:col-start-3 xl:col-span-7 mb-1 ml-9 md:ml-0">
                    {item.title}
                  </h3>
                  <time
                    dateTime={item.date}
                    className="md:col-start-1 md:col-span-2 row-start-1 md:row-end-3 flex items-center font-medium mb-1 md:mb-0"
                  >
                    <svg
                      viewBox="0 0 12 12"
                      className={clsx('w-3 h-3 mr-6 overflow-visible', {
                        'text-gray-300': i !== 0,
                        'text-cyan-400': i === 0,
                      })}
                    >
                      <circle cx="6" cy="6" r="6" fill="currentColor" />
                      {i === 0 && (
                        <circle
                          cx="6"
                          cy="6"
                          r="11"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                        />
                      )}
                      {i !== 0 && (
                        <path
                          d="M 6 -6 V -30"
                          fill="none"
                          strokeWidth="2"
                          stroke="currentColor"
                          className="text-gray-200"
                        />
                      )}
                      {i !== latestUpdates.length - 1 && (
                        <path
                          d="M 6 18 V 500"
                          fill="none"
                          strokeWidth="2"
                          stroke="currentColor"
                          className="text-gray-200"
                        />
                      )}
                    </svg>
                    {formatDate(new Date(item.date))}
                  </time>
                  <p className="md:col-start-3 md:col-span-6 xl:col-span-7 ml-9 md:ml-0">
                    {item.description}
                  </p>
                </a>
              </article>
            </li>
          ))}
        </ul>
      </section>
      <section>
        <h2 className="text-3xl tracking-tight font-extrabold text-gray-900 mt-16 mb-8">
          {/* Get involved */}
          参与社区
        </h2>
        <Community />
      </section>
    </div>
  )
}

DocsLandingPage.layoutProps = {
  meta: {
    // title: 'Documentation',
    title: '文档',
  },
  Layout: DocumentationLayout,
}
