import React from 'react';

const Search = ({ searchfield, searchchange }) => {



    return (

        <div className="search">
            <input type="text" placeholder="search for favourite Web series" onChange={searchchange} />
        </div>


    )



}


export default Search;