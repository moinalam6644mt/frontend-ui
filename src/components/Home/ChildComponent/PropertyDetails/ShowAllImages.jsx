import React,{useContext} from 'react'


import AuthContext from '../../../Context/AuthContext'

const ShowAllImages = () => {
    const {totalImage,uniqueProperty} = useContext(AuthContext);
    console.log(totalImage)
    return (
        <div style={{display:'flex'}}>
            {totalImage.map((val,index)=>(
                <li style={{listStyle:'none', margin:'10px'}}>
                <img src={uniqueProperty.url+val.image} alt={index} style={{height:'200px', width:'200px'}}></img>
            </li>
            ))}
            
        </div>
    )
}

export default ShowAllImages
