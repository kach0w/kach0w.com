// pages/_document.js
import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html>
      <Head>
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"/>
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css" integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf" crossorigin="anonymous"/>      </Head>
        <link href="https://fonts.googleapis.com/css2?family=Proxima+Nova:wght@400;600;700;900" rel="stylesheet" />
        <script src="https://kit.fontawesome.com/a191de05ec.js" crossorigin="anonymous"></script>
        
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Proxima+Nova:wght@400;600;700;900" />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}