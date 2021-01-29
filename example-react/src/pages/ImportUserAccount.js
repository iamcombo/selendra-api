import React, { useState } from 'react'
import { Button, Form, Input, Switch } from 'antd'
import { ImportAccount } from 'selendra-api'

function ImportUserAccount() {
  const [switchMnemo, setSwitchMnemo] = useState(true);

  const onChange = () => {
    setSwitchMnemo(!switchMnemo);
  }

  const handleImport = async(val) => {
    const res = await ImportAccount({
      mnemonic: val.mnemonic
    })
    console.log(res);
    console.log(res.pair.meta.name);
  }

  return (
    <>
      <Switch defaultChecked onChange={onChange} />
      <span style={{color: '#fff'}}>Mnemonic Seed</span>
      <div style={{marginBottom: '20px'}} />
      { switchMnemo && (
        <Form onFinish={handleImport}>
          <Form.Item name="mnemonic">
            <Input placeholder='Mnemonic Seed'/>
          </Form.Item>
          <Form.Item>
            <Button htmlType='submit'>Import Account</Button>
          </Form.Item>
        </Form>
      )}
      { !switchMnemo && (
        <Form>
          <Form.Item>
            <Input placeholder='Seed'/>
          </Form.Item>
          <Form.Item>
            <Button>Import Account</Button>
          </Form.Item>
        </Form>
      )}
    </>
  )
}

export default ImportUserAccount
