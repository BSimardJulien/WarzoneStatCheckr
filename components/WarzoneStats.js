import React from "react"

class WarzoneStats extends React.Component {

    constructor(props) {
        super(props);
    
        this.state = {
          userName: 'AsianWifey',
          battleTag : '1109'
        }
    }

    render(){
        return (
            <div>
                <h2>WarzoneStats</h2>
                <ul className="list-group">
                    <li className="list-group-item">
                        Number of wins : {this.props.data.br.wins}
                    </li>
                    <li className="list-group-item">
                        K/D Ratio : {this.props.data.br.kdRatio}
                        
                    </li>
                </ul>
            </div>

        );
    }

}

export default WarzoneStats