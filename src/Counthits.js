import React, { Component } from 'react';

const Counthits = (Wrappedcomponent, power) =>{
    class CountHits extends Component{
        state = {
            hits: 0
        }
    
        addOne = () => {
            this.setState(prevState => {
                return {
                    hits: prevState.hits + 1
                }
            })
        }
        render(){
            return <Wrappedcomponent addOneHit={this.addOne} hocState={this.state}  {...this.props}/>
        }

        componentDidUpdate = (prevProps, prevState) => {
          if (this.state !== prevState) {
           const compName = Wrappedcomponent.name ;    
           this.props.reduceHandler(compName, power); 
          }
        }
        
        
    }
    return CountHits
}


export default Counthits;

