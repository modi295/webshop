
import { React } from 'react';
import Footer from './Footer';
import Filter from './Container/Filter';

function Home() {

    return (
        <div>
            <Filter />
            <hr></hr>
            <div>
                <Footer/>
            </div>

        </div>
       

    )
}
export default Home;