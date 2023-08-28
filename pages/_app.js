import Navbar from "../components/UI/Navbar";
import Layout from "@/components/Layout";
import LeftPannel from "@/components/UI/LeftPannel";
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousels from "../components/UI/Carousels" 


function MyApp({ Component, pageProps}){
  return (
    <Layout>
    <Component{...pageProps} />
  </Layout>
  )
}

export default MyApp
