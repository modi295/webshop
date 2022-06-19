
import React, { useState } from 'react';
import './filter.css';
import Products from './Products';
import { connect } from 'react-redux';
import { setfilter, resetfilter } from '../Action';

function Filter({ filter_name, setfilter, resetfilter }) {
    const category = ["All", "Electronics", "Home Appliances", "Fashion", "Groceries"];
    const [filter, setFilter] = useState('All')
    return (
        <div>
            <center className="center">
                <span className='h4'>Filter:</span>
                <select name='filter' className='select' onChange={(e) => setfilter(e.target.value)}>
                    {
                        category.map((item, index) => (
                            <option value={item} key={index}>{item}</option>
                        ))
                    }

                </select>
            </center>
            <div>
                <Products />
            </div>
        </div>
    )
}

const mapStateToProps = state => ({
    filter_name: state.FilterReducer.filter_name
})
export default connect(mapStateToProps, { setfilter, resetfilter })(Filter);