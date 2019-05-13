import { connect } from 'react-redux';
import React from 'react';
import Dashboard from './Dashboard';
import searchAction from './Actions';
import Header from '../Header';
import Logout from '../Login/Logout';
import Loaders from '../Loaders';


import './dashboard.css';
class DashboardContainer extends React.Component{ 

    // state={
    //     isLoading: false
    // }

    onSearchHandle=(e)=> {
        // console.log('on search ', e.target.value);
        let search = e.target.value;
        this.props.onSearch(search);
    }

    componentDidMount() {
        // const {isLoading} = this.state;
        // let isLoading = this.props.onLoading;

        console.log('isLoading from Redux is ', this.props.search.isLoading)
        this.props.onLoading(this.props.search.isLoading);
        this.props.onPageLoad(this.props.search.isLoading);
        
    }

    render() {
        // console.log(this.props.search);
        const {search} = this.props;
        // console.log('search in dashboardContainer ', this.props.search);
        return (
            <div className='dashboard'>   
                <Header/>
                <Loaders isLoading={this.props.search.isLoading} />
                <Logout/>
                
                
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
    onLoading: searchAction.onLoading,
}
export default connect(mapStateToProps, mapDispatchToProps) (DashboardContainer);