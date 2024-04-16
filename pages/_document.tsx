import { Html, Head, Main, NextScript } from 'next/document'

// 공통적으로 적용되어야 할 html 코드를 작성하는 컴포넌트
export default function Document() {
  return (
    <Html>
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}