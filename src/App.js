import { useState, useEffect } from 'react';
import Chart from './components/Chart';
import Upload from './components/Upload';
import SearchBar from './components/SearchBar';
import ObjectInfo from './components/ObjectInfo';
import ForceGraph2D from 'react-force-graph-2d';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';


function App() {
  const [bitAddress, setBitAddress] = useState('');
  const [bitcoinList, setBitcoinList] = useState([{"bitAddress":"bitAddress", "balance":"balance"}]);
  const [balance, setBalance] = useState("");
  const [incomingTx, setIncomingTx] = useState("");
  const [outgoingTx, setOutgoingTx] = useState("");
  const [dateFirstIncTx, setDateFirstIncTx] = useState("");
  const [dateFirstOutTx, setDateFirstOutTx] = useState("");
  const [dateLastIncTx, setDateLastIncTx] = useState("");
  const [dateLastOutTx, setDateLastOutTx] = useState("");

  const [objectInfo, setObjectInfo] = useState({});

  useEffect(()=>{
    const bitcoinObj = {bitAddress, balance, incomingTx}
    setBitcoinList([...bitcoinList,bitcoinObj])
  },[bitAddress])

  return (
    <div className="app">
      <SearchBar/>
      <div className='compclass'>
      <Upload setBitAddress={setBitAddress} parentSetBalance={setBalance} setIncomingTx={setIncomingTx}
      setOutgoingTx={setOutgoingTx} setDateFirstIncTx={setDateFirstIncTx} setDateFirstOutTx={setDateFirstOutTx}
      setDateLastIncTx={setDateLastIncTx} setDateLastOutTx={setDateLastOutTx}/>  
      <Chart bitAddress={bitAddress} bitcoinList={bitcoinList} setObjectInfo={setObjectInfo}/>
      <ObjectInfo objectInfo={objectInfo}/>
      </div>
    </div>
  );
}

export default App;
