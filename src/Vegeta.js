import React, { Component } from 'react';
import vegeta from './vegeta.jpg';
import Counthits from './Counthits';

class Vegeta extends Component {
  
    
  
    render() {
        const {name, addOneHit, hocState, life}= this.props;
        const lifeValue = life > 0 ? (<td>{life} %</td>) : (<td><span className="badge badge-danger">Mort</span></td>);
        const button = life > 0 ? ( <button className='btn btn-success m-3' onClick={addOneHit}>{name} Frappe</button>) :
         ( <button className='btn btn-danger m-3 disabled' >Mort</button>);
        return (
            <div className='col'>
                <img src={vegeta} alt='mon image' /> <br />
                {button}
                <table className='table table-striped'>
                    <thead>
                        <tr>
                            <th scope='col'>Coups </th>
                            <th scope='col'>Vie </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{hocState.hits}</td>
                            {lifeValue}
                        </tr>
                    </tbody>
                </table>
                
            </div>
        );
    }
}

export default Counthits(Vegeta, 10);