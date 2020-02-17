import React,{Component} from 'react';
// import {robots} from './robot';
import Cardlist from './Cardlist';
import Searchbox from './Searchbox';
import './Appp.css';
import Scroll from './Scroll';
import Errorboundry from './errorboundry';
class Appp extends Component{
    constructor(){
        super();
        this.state={
            robots:[],
            searchfield:''
        }
    
    }
    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res=>{
           return res.json();
        })
        .then(users=>{
            this.setState({robots:users});
        })
        
    }
    onSearchChange=(event)=>{
        this.setState({searchfield:event.target.value});

    }
    render(){
        const filterrobot=this.state.robots.filter(robots=>{
            return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
        })
        if(this.state.robots.length===0){
             return <h1>Loading</h1>
        }
        else
        {
            return (
                <div className='tc'>
                    <h1 className=' green hover-red f1'>RobotFriend</h1>
                    <Searchbox searchChange={this.onSearchChange}/>
                    <Scroll>
                        <Errorboundry>
                            <Cardlist robots={filterrobot}/>
                        </Errorboundry>
                    </Scroll>
                </div>
            );
        }
    }
}
export default Appp;