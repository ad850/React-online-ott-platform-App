import React from 'react';
import Header from './Header';
import Cardlist from './Cardlist';
import Search from './Search';
import List from './List';




class App extends React.Component {


    constructor() {
        super();
        this.state = {

            List: List,
            searchfield: ''

        }
    }
    onchnage = (event) => {

        this.setState({ searchfield: event.target.value })


    }



    render() {
        const filterlist = this.state.List.filter(list => {
            return list.title.toLowerCase().includes(this.state.searchfield.toLowerCase());

        })
        return (
            <>

                <Header />
                <Search searchchange={this.onchnage} />
                <Cardlist List={filterlist} />



            </>
        )


    }
}


export default App;