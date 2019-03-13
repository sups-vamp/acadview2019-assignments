import React from 'react';
import './style2.css';
const Info=({infos})=> {
    const infoList=infos.length ? infos.map( i =>{
        return(
            <div className='information' key={i.id}>
            <span>NAME : {i.name}</span><br/><br/>
            <span>DOB :{i.bday}</span><br/><br/>
            <span>ABOUT :{i.about}</span>
            </div>
        )
    }):(
        <p></p>
    )
    return(
        <div>
        {infoList}
        </div>
    )
}
export default Info ;