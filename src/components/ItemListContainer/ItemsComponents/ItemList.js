import React from 'react';
import './ItemList.scss';
import Item from './Item';


function ItemList(props) {
    const {data}=props;
    return (
        <div className="container mb-5 mt-5">
            <div className="row">
                {data.map((item, id) =>
                    <Item key={id} {...item}
                    />
                )}
            </div>
        </div>

    )
}

export default ItemList
