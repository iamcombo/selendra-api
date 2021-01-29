import React from 'react'
import { Form, Input, Button } from 'antd'
import { Transfer } from 'selendra-api'

function Transaction() {

  const handleTransfer = async(val) => {
    const res = await Transfer({
      senderAddress: val.sender,
      receiverAddress: val.receiver, 
      senderPassword: val.password, 
      amount: val.amount
    })
    console.log(res);
  }

  return (
    <div>
      <Form onFinish={handleTransfer}>
        <Form.Item name='sender'>
          <Input placeholder='Sender Address'/>
        </Form.Item>
        <Form.Item name='password'>
          <Input placeholder='Password'/>
        </Form.Item>
        <Form.Item name='receiver'>
          <Input placeholder='Receiver Address'/>
        </Form.Item>
        <Form.Item name='amount'>
          <Input placeholder='Amount'/>
        </Form.Item>
        <Form.Item>
          <Button htmlType='submit'>Transfer</Button>
        </Form.Item>
      </Form>
    </div>
  )
}

export default Transaction
