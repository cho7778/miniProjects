import '@/styles/globals.css'

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default function Square() {
  return <button className="square"></button>;
}
