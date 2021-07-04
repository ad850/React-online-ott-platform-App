import React from 'react';
import Card from './Card';



const Cardlist = ({ List }) => {

    return (


        List.map((value, i) => {


            return <Card key={value.id} sname={value.sname} image={value.image} title={value.title} />


        })

    )



}


export default Cardlist;