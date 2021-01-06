import { Community } from '@/components/Community'
import { DocumentationLayout } from '@/layouts/DocumentationLayout'
import Link from 'next/link'
import { ReactComponent as RefactoringUi } from '@/img/resources/refactoring-ui.svg'
import { ReactComponent as TailwindUi } from '@/img/resources/tailwind-ui.svg'
import { ReactComponent as HeadlessUi } from '@/img/resources/headless-ui.svg'
import { ReactComponent as Heroicons } from '@/img/resources/heroicons.svg'
import { ReactComponent as Heropatterns } from '@/img/resources/heropatterns.svg'

function Logo({ title, component: Component }) {
  return (
    <div className="w-60 max-w-full">
      <div className="relative" style={{ paddingTop: `${(60 / 240) * 100}%` }}>
        <span className="sr-only">{title}</span>
        <Component className="absolute inset-0 w-full h-full" />
      </div>
    </div>
  )
}

export default function Resources() {
  return (
    <div className="px-4 sm:px-6 md:px-8 pt-10 pb-16">
      <h1 className="text-3xl text-gray-900 font-extrabold mb-4">资源</h1>
      <div className="max-w-3xl">
        <div className="text-lg mb-5 space-y-5">
          {/*<p>*/}
          {/*  We think Tailwind is an amazing CSS framework, but you need more than just a CSS*/}
          {/*  framework to produce visually awesome work.*/}
          {/*</p>*/}
          <p>
            我们认为 Tailwind 是一个了不起的 CSS 框架，但您需要的不仅仅是一个生产优秀的视觉产品的 CSS 框架。
          </p>
          <p>
            {/*Here are some resources that can help you take your Tailwind projects to the next level.*/}
            这里有一些资源，可以帮助您把您的 Tailwind 项目提升到一个新的水平。
          </p>
        </div>
        {/*<p>*/}
        {/*  For Tailwind CSS brand assets and usage guidelines, please visit our{' '}*/}
        {/*  <Link href="/brand">*/}
        {/*    <a className="text-cyan-700 font-medium shadow-link">Brand page</a>*/}
        {/*  </Link>*/}
        {/*  .*/}
        {/*</p>*/}
        <p>
          关于 Tailwind CSS 品牌资产和使用指南，请访问{' '}
          <Link href="/brand">
            <a className="text-cyan-700 font-medium shadow-link">品牌页面</a>
          </Link>
          .
        </p>
      </div>
      <div className="grid md:grid-cols-2 gap-8 md:gap-6 xl:gap-8 my-8 sm:my-12">
        <section>
          {/*<h2 className="text-xl text-gray-900 font-bold mb-4">Learn UI Design</h2>*/}
          <h2 className="text-xl text-gray-900 font-bold mb-4">学习 UI 设计</h2>
          <a
            href="https://refactoringui.com/book"
            className="h-40 sm:h-56 xl:h-64 bg-gray-900 bg-cover rounded-3xl mb-6 flex items-center justify-center"
            style={{
              backgroundImage: `url(${require('@/img/resources/refactoring-ui-bg.png').default})`,
            }}
          >
            <Logo title="Refactoring UI" component={RefactoringUi} />
          </a>
          <div className="space-y-5">
            <p>
              {/*Refactoring UI is a design-for-developers book + video series put together by Adam*/}
              {/*Wathan and Steve Schoger. It covers literally everything we know about making things*/}
              {/*look awesome.*/}
              Refactoring UI 是由 Adam Wathan 和 Steve Schoger 共同编写的《面向开发者的设计》一书+视频系列。它几乎涵盖了我们所知道的关于设计优秀作品一切。
            </p>
            <p>
              {/*Almost 10,000 people have picked it up so far and have all sorts of awesome things to*/}
              {/*say about how it helped them improve their work.*/}
              到目前为止，已经有近一万人选择了它，并对它如何帮助他们改进工作大加赞美。
            </p>
          </div>
        </section>
        <section>
          {/*<h2 className="text-xl text-gray-900 font-bold mb-4">Official Tailwind CSS Components</h2>*/}
          <h2 className="text-xl text-gray-900 font-bold mb-4">Tailwind CSS 官方组件</h2>
          <a
            href="https://tailwindui.com/"
            className="h-40 sm:h-56 xl:h-64 bg-gray-300 rounded-3xl mb-6 overflow-hidden flex"
          >
            <div className="relative flex-none flex items-center justify-center px-6 xl:px-10">
              <div className="bg-gray-900 absolute inset-0 -left-64 transform -skew-x-20" />
              <Logo title="Tailwind UI" component={TailwindUi} />
            </div>
            <div
              className="flex-auto bg-cover -ml-12"
              style={{
                backgroundImage: `url(${require('@/img/resources/tailwind-ui.jpg').default})`,
              }}
            />
          </a>
          <div className="space-y-5">
            <p>
              {/*Tailwind UI is a collection of professionally designed, pre-built, fully responsive*/}
              {/*HTML snippets you can drop into your Tailwind projects.*/}
              Tailwind UI 是一个专业设计的、预建的、完全响应的HTML片段的精选，您可以把它应用到您的 Tailwind 项目中。
            </p>
            <p>
              {/*There are currently over 350 components available in two different categories*/}
              {/*(Marketing and Application UI) and we’re always adding more.*/}
              目前在两个不同的类别（营销和应用 UI）有超过 350 个组件可以使用，并且我们一直在增加更多的组件。
            </p>
          </div>
        </section>
      </div>
      <div className="grid sm:grid-cols-3 gap-8 sm:gap-6 xl:gap-8 pb-10 border-b border-gray-200">
        <section>
          <h2 className="text-xl text-gray-900 font-bold mb-4">
            JavaScript<span className="sr-only">: Headless UI</span>
          </h2>
          <a
            href="https://headlessui.dev/"
            className="h-40 xl:h-48 rounded-3xl bg-gray-900 mb-6 flex items-center justify-center p-6"
          >
            <Logo title="Headless UI" component={HeadlessUi} />
          </a>
          <p>
            {/*Completely unstyled, fully accessible UI components, designed to integrate beautifully*/}
            {/*with Tailwind CSS.*/}
            完全非风格化的，完全可访问的UI组件，为与 Tailwind CSS 的完美整合而设计。
          </p>
        </section>
        <section>
          <h2 className="text-xl text-gray-900 font-bold mb-4">
            Icons<span className="sr-only">: Heroicons</span>
          </h2>
          <a
            href="https://heroicons.com/"
            className="relative flex h-40 xl:h-48 rounded-3xl bg-gradient-to-br from-violet-600 to-purple-500 mb-6"
          >
            <div
              className="absolute inset-0 flex items-center justify-center p-6 bg-contain"
              style={{
                backgroundImage: `url(${require('@/img/resources/heroicons-bg.svg').default})`,
              }}
            >
              <Logo title="Heroicons" component={Heroicons} />
            </div>
          </a>
          <p>
            {/*A set of free MIT-licensed high-quality SVG icons for you to use in your web projects.*/}
            一组免费的 MIT 授权的高质量 SVG 图标，供您在您的网页项目中使用。
          </p>
        </section>
        <section>
          <h2 className="text-xl text-gray-900 font-bold mb-4">
            Patterns<span className="sr-only">: Heropatterns</span>
          </h2>
          <a
            href="https://www.heropatterns.com/"
            className="relative flex h-40 xl:h-48 rounded-3xl bg-gradient-to-br from-cyan-600 to-teal-500 mb-6"
          >
            <div
              className="absolute inset-0 flex items-center justify-center p-6 bg-cover"
              style={{
                backgroundImage: `url(${require('@/img/resources/heropatterns-bg.svg').default})`,
              }}
            >
              <Logo title="Heropatterns" component={Heropatterns} />
            </div>
          </a>
          <p>
            {/*A set of free MIT-licensed high-quality SVG patterns for you to use in your web*/}
            {/*projects.*/}
            一套免费的 MIT 授权的高质量 SVG 图案，供你在你的网页项目中使用。
          </p>
        </section>
      </div>
      <section>
        <h2 className="text-2xl tracking-tight font-extrabold text-gray-900 mt-10 mb-8">
          参与讨论
        </h2>
        <Community />
      </section>
    </div>
  )
}

Resources.layoutProps = {
  meta: {
    title: '资源',
  },
  Layout: DocumentationLayout,
}
