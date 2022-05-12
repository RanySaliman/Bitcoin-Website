import React  from 'react'

export default function ObjectInfo(props) {
    
    const objectInfo = props.objectInfo;
  

        return ( <div>

       {objectInfo.bitAddress && <> <p>Address: {objectInfo.bitAddress} </p>
        <p>Balance: {objectInfo.balance} </p>
        <p>incomingTx: {objectInfo.incomingTx} </p></>}



        </div>)
        
  
}
