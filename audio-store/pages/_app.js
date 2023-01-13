import '../styles/globals.css';
import { Layout } from '../Components';
import { ContextProvider } from '../context/Context';



export default function App({ Component, pageProps }) {
  return (
    <ContextProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ContextProvider>
  )
}
