import Navbar from './UI/Navbar';
import Head from 'next/head';
import Footer from './UI/Footer';
const layout=({children}) => {
    return (
        <>
        <Head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css"/>
        </Head>
            <Navbar />
            {children}
            <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js"></script>
            <Footer />
        </>
    );
};

export default layout

