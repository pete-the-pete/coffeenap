import { Html, Head, Main, NextScript } from 'next/document'
export default function Document() {
  return (
    <Html lang="en" style={{
      background: `url(bg/background.jpg) no-repeat center fixed`
    }}>
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
