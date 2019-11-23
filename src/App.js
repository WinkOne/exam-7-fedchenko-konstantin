import React, {Component} from 'react';
import './App.css'
import Menu, {menu} from './Components/Menu/Menu'
import Order from "./Components/Order/Order";


class App extends Component {
    state = {
        menuFood: [],
    };

    addFoot = (name, price) =>{
        const menuFoot = this.state.menuFood;
        const index = menuFoot.findIndex(names=> names.name === name);
        if (index === -1){
            menuFoot.push({name: name, count: 1});
        } else  {
            menuFoot[index].count++
        }
        let total = this.state.total;
        total += price;
        this.setState({menuFoot, total});
    };

    removeOrderFoot(index){
        const menuFood = this.state.menuFood;
        if (menuFood[index].count > 1){
            menuFood[index].count--;
        } else {
            menuFood.splice(index, 1)
        }
        let removePrise = this.state.total;
        removePrise -= menu[index].price;
        this.setState({removePrise, menuFood});
    }
    render() {
        let total = 0;
        return (
            <div className='App'>
                <div className='header'/>
                <div className='container'>
                    <div className='addFoot'>
                        <p className='order'>Order Details:</p>
                        {this.state.menuFood.map((oneElem, index)=> {
                            total += menu[index].price * oneElem.count;
                            return <Order
                            key={index}
                            nameFoot={oneElem.name}
                            countFoot={oneElem.count}
                            removeBtn={()=>this.removeOrderFoot(index)}
                            footGian={oneElem.count}
                            menuOrder={menu[index]}
                            />
                        })}
                        {total === 0 && <p className='orderIsEmpty'>Order is empty!</p>}
                        <hr/>
                        {total > 1 && <span className='total'>Total: {total}</span>}
                    </div>
                    <div className='block'>
                        <p className='addItem'>Add items:</p>
                        {menu.map((foot, index) => (
                            <Menu
                                getFoot={()=>this.addFoot(foot.name, foot.price)}
                                key={index}
                                index={index}
                                nameFoot={foot.name}
                                countFoot={foot.count}/>
                        ))}
                    </div>
                </div>
                <div className='footer'/>
            </div>
        );
    }
}

export default App;