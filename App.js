
import React, { Component } from 'react';
import Counters from './components/counters'
import NavBar from './components/navigation'

class App extends Component {
  state = { 
    repeat: [
        {id:1,value:0},{id:2,value:0},{id:3,value:0},{id:4,value:0}  ]
 }

 handleDelete=(counterid)=>{
    
        this.setState(state => ({
            repeat: state.repeat.filter(C => C.id !== counterid )
        }));
    }

    handleReset=()=>{
       const counters= this.state.repeat.map(c=> {c.value=0
       return c })
       this.setState({ counters})
}

handleIncrement=(counter)=>{
    const repeat= [...this.state.repeat]
    const index= repeat.indexOf(counter);
    repeat[index]={...counter};
    repeat[index].value++;
    this.setState({repeat})

}
  render() { 
    return <React.Fragment>
      <NavBar totalCounters={this.state.repeat.filter(c=>c.value > 0).length} />
      <main className='container'></main>

       <Counters repeat={this.state.repeat} onReset={this.handleReset} onIncrement={this.handleIncrement} onDelete={this.handleDelete}/>
       
    </React.Fragment>;
  }
}
 

export default App;
