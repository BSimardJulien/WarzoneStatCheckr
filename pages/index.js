import Navbar from '../components/NavBar';
import Layout from '../components/Layout'
import WarzoneStats from '../components/WarzoneStats'
import BattleNetUsername from '../components/BattleNetUsername'

const Index = (props) => (
    <Layout>
        <div>
            <h1 className="text-center">Warzone Stat Checker </h1>
            <BattleNetUsername/>
        </div>
    </Layout>
);




export default Index;