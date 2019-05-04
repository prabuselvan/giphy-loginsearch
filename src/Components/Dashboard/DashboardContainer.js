import { connect } from 'react-redux';
import React from 'react';
import Dashboard from './Dashboard';
import searchAction from './Actions';
import Header from '../Header';

import './dashboard.css';
class DashboardContainer extends React.Component{ 

    onSearchHandle=(e)=> {
        console.log('on search ', e.target.value);
        let search = e.target.value;
        this.props.onSearch(search);
    }

    componentDidMount() {
        this.props.onPageLoad();
    }

    render() {
        // console.log(this.props.search);
        const {search} = this.props;
        console.log('search is ', search);
        return (
            <div className='dashboard'>   
            
                <Header/>
                <Dashboard onSearchHandle={this.onSearchHandle} search={search}/>
            </div>
        )
    }
}

const mapStateToProps = (state)=>{
    return state;
}

const mapDispatchToProps =  {
    onSearch: searchAction.onSearch,
    onPageLoad : searchAction.onPageLoad,
}
export default connect(mapStateToProps, mapDispatchToProps) (DashboardContainer);