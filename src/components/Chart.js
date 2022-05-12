import React,{useEffect} from 'react'
import { Table } from 'react-bootstrap';
import './chart.css'


export default function Chart(props) {
    const bitAddress = props.bitAddress;
    const bitcoinList = props.bitcoinList;
    const setObjectInfo = props.setObjectInfo;
  
    const handleBitClick=(e)=>{setObjectInfo(e)}
    useEffect(()=>{console.log(bitcoinList)}, [bitcoinList])



  return (
      <div className='bitcoinNodeContainer'>
      <Table striped bordered hover>
  <thead>
    <tr>
   
      <th>Address</th>
    </tr>
  </thead>
  <tbody>
   {bitcoinList.map((bitcoin, i)=>{
       if ( bitcoin.bitAddress){

   return  (
        <tr onClick={()=>handleBitClick(bitcoin)}>
        
        <td>{bitcoin.bitAddress}</td>
      </tr>
       )
    }

   })}
  
  </tbody>
</Table>
  
      </div>
  )
}
