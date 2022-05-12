import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";

export default function Upload(props) {
    //parent functions
  const setBitAddress = props.setBitAddress;
  const parentSetBalance = props.parentSetBalance;
  const setIncomingTx = props.setIncomingTx;
  const setOutgoingTx = props.setOutgoingTx;
  const setDateFirstIncTx = props.setDateFirstIncTx;
  const setDateFirstOutTx = props.setDateFirstOutTx;
  const setDateLastIncTx = props.setDateLastIncTx;
  const setDateLastOutTx = props.setDateLastOutTx;

// input
  const [addressInput, setAddressInput] = useState("");
  const [balanceInput, setBalanceInput] = useState();
  const [incomingTxInput, setIncomingTxInput] = useState();
  const [outgoingTxInput, setOutgoingTxInput] = useState();
  const [dateFirstIncTxInput, setDateFirstIncTxInput] = useState();
  const [dateFirstOutTxInput, setDateFirstOutTxInput] = useState();
  const [dateLastIncTxInput, setDateLastIncTxInput] = useState();
  const [dateLastOutTxInput, setDateLastOutTxInput] = useState();



  const handleUpload = (e) => {

    e.preventDefault();
    // update the parent values
    setBitAddress(addressInput);
    parentSetBalance(balanceInput);
    setIncomingTx(incomingTxInput)
    // clear the input
    setAddressInput("");
    setBalanceInput("");
    setIncomingTxInput("");
    
  };
  // balance , incoming tranx, output tranx, hash of last incoming&output tranx with sum, date of first income first output
  // last income date & last output date
  return (
    <div style={{width:'250px', marginleft:"15px"}}>

      <Form onSubmit={e=>handleUpload(e)}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Bitcoin Address</Form.Label>
          <Form.Control type="text" onChange={(e) => setAddressInput(e.target.value)} placeholder="Enter Address" 
            value={addressInput}/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Balance</Form.Label>
          <Form.Control type="text" onChange={(e) => setBalanceInput(e.target.value)} placeholder="Enter Balance"
          value={balanceInput} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>incoming tx</Form.Label>
          <Form.Control type="text" onChange={(e) => setIncomingTxInput(e.target.value)} placeholder="Enter incoming tx"
          value={incomingTxInput} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>outgoing tx</Form.Label>
          <Form.Control type="text" onChange={(e) => setOutgoingTxInput(e.target.value)} placeholder="Enter outgoing tx"
          value={outgoingTxInput} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Date of First Incoming Tx</Form.Label>
          <Form.Control type="text" onChange={(e) => setDateFirstIncTxInput(e.target.value)} placeholder="Enter Date of first inc tx"
          value={dateFirstIncTxInput} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Date of First Outgoing Tx</Form.Label>
          <Form.Control type="text" onChange={(e) => setDateFirstOutTxInput(e.target.value)} placeholder="Enter Date of first out tx"
          value={dateFirstOutTxInput} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Date of Last Incoming Tx</Form.Label>
          <Form.Control type="text" onChange={(e) => setDateLastIncTxInput(e.target.value)} placeholder="Enter Date of Last inc tx"
          value={dateLastIncTxInput} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Date of Last Outgoing Tx</Form.Label>
          <Form.Control type="text" onChange={(e) => setDateLastOutTxInput(e.target.value)} placeholder="Enter Date of Last Out tx"
          value={dateLastOutTxInput} />
        </Form.Group>

       
        <Button variant="primary" type="submit" disabled={!addressInput||!balanceInput}>
          Submit
        </Button>
      </Form>
    </div>
  );
}
