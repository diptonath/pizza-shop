import React, { useState } from 'react'
import {Modal} from 'react-bootstrap'

export default function Pizza({ pizza }) {
    const [quantity, setquantity] = useState(1)
    const [varient, setvariant] = useState('small')

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div style={{ margin: '70px' }} className='shadow p-3 mb-5 bg-white rounded'>

            <div  onClick={handleShow}>
                <h1>{Pizza.name}</h1>
                <img src={pizza.image} className="img-fluid" style={{ height: '200px', width: '200px' }} />
            </div>

            <div className="flex-container">

                <div className="w-100 m-1">
                    <p>Varients</p>
                    <select className="form-control" value={varient} onChange={(e) => { setvariant(e.target.value) }}>
                        {pizza.varients.map(varient => {
                            return <option value={varient}>{varient}</option>
                        })}
                    </select>
                </div>

                <div className="w-100 m-1">
                    <p>Quantity</p>
                    <select className="form-control" >
                        {[...Array(10).keys()].map((x, i) => {

                            return <option value={i + 1}>{i + 1}</option>

                        })}
                    </select>
                </div>

            </div>

            <div className="flex-container">

                <div className='m-1 w-100'>
                    <h1>Price: {pizza.prices[0][varient] * quantity}</h1>
                </div>

                <div className='m-1 w-100'>
                    <button className="btn">Add to cart</button>
                </div>

            </div>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title><h1>{Pizza.name}</h1></Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <img src={pizza.image} className="img-fluid" style={{ height: 'auto', width: '100%' }} />
                    <p className='p-3'>{pizza.description}</p>
                </Modal.Body>
            </Modal>


        </div>
    )
}