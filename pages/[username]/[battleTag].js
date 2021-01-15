import Navbar from '../../components/NavBar';
import Layout from '../../components/Layout'
import WarzoneStats from '../../components/WarzoneStats'

import Fetch from 'isomorphic-unfetch';
import { loadGetInitialProps } from 'next/dist/next-server/lib/utils';

const Index = (props) => (
    <Layout>
        <div>
            <WarzoneStats data= {props.data}/> 
        </div>
    </Layout>
);

export async function getServerSideProps(context) {
    const userName = context.params.username;
    const battleTag = context.params.battleTag;
    const request = "https://call-of-duty-modern-warfare.p.rapidapi.com/warzone/" + userName + "%2523" + battleTag + "/battle";

    const res = await fetch(request, {
        "method": "GET",
        "headers": {
            "x-rapidapi-key": "6975d28b48mshff8b2238c35e9cap1333fejsn47e88830d53f",
            "x-rapidapi-host": "call-of-duty-modern-warfare.p.rapidapi.com"
        }
    })

    const data = await res.json();
    console.log(data);

    return{
        props: {data}
    }
}



export default Index;