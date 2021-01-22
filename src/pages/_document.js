import NextDocument, { Html, Head, Main, NextScript } from 'next/document'
import { GA_TRACKING_ID } from '../utils/gtag'

export default class Document extends NextDocument {
  static async getInitialProps(ctx) {
    const initialProps = await NextDocument.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html
        lang="en"
        className={`text-gray-500 antialiased ${
          this.props.dangerousAsPath.startsWith('/examples/') ? '' : 'bg-white'
        }`}
      >
        <Head>
          {/* Global Site Tag (gtag.js) - Google Analytics */}
          <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_TRACKING_ID}', {
              page_path: window.location.pathname,
            });
          `,
            }}
          />
          <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
          <link rel="manifest" href="/manifest.json" />
          <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#00b4b6" />
          <meta name="theme-color" content="#ffffff" />
          <meta name="description" content="Tailwind CSS 是一个功能类优先的 CSS 框架，它由 Adam Wathan 创建。本站提供 Tailwind CSS 官方文档中文翻译致力于为广大国内开发者提供准确的中文文档，助力开发者掌握并使用这一框架。" />
          <meta name="keywords" content="Tailwind CSS, CSS 框架, CSS framework, Tailwind CSS 中国, Tailwind CSS 中文文档, Tailwind CSS 代码,Tailwind CSS 入门" />
          <meta name="author" content="TailwindCSS中文网"></meta>
          <meta name="google-site-verification" content="K6lmDHP95YNtBrmzbE8A5HivIoXC9kPq47XvdBM3jVY" />
        </Head>
        <body>
          <Main />
          <NextScript />
          <script> </script>
        </body>
      </Html>
    )
  }
}
