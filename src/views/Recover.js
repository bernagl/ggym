import React, { Component } from 'react'
import Form from '../components/Form/Form'
import Input from '../components/Form/InputWrapped'
import InputNumber from '../components/Form/InputNumber'

class Recover extends Component {
  submit = async model => {
    console.log(model)
    return true
  }
  render() {
    return (
      <Form submit={this.submit}>
        <Input
          name="prueba"
          placeholder="prueba"
          label="esto es una prueba"
          validations="minLength:10"
          defaultValue="1234567891"
          validationError="Ingresa un número bien"
          required
        />
        <InputNumber
          name="inputnumber"
          placeholder="input number de prueba"
          label="input number de prueba"
          min={5}
          defaultValue={7}
          formatter={value =>
            `$da ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')
          }
          max={10}
        />
      </Form>
    )
  }
}

export default Recover
