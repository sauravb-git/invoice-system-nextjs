import Layout from '../components/layout/layout'
import '../styles/globals.css'
import { ToastContainer,  } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function MyApp({ Component, pageProps }) {
  return (
     <Layout>
       <ToastContainer
        position="top-right"
        autoClose={3000} 
        closeOnClick 
        theme='light'
        pauseOnHover={false}
        />  
      <Component {...pageProps} /> 
    </Layout> 
  )
}

export default MyApp
