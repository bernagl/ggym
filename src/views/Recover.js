import React, { Component } from 'react'
import Form from '../components/Form/Form'
import Input from '../components/F/Input'
import InputNumber from '../components/F/Step'
import Datepicker from '../components/F/Datepicker'
import { Select, Option } from '../components/F/Select'

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
        <Datepicker
          name="dpprueba"
          placeholder="prueba"
          label="esto es una prueba"
          // validationError="Ingresa una fecha bien"
          required
        />
        <InputNumber
          name="inputnumber"
          placeholder="input number de prueba"
          label="input number de prueba"
          // min={5}
          // defaultValue={7}
          // max={10}
        />
        <Select
          name="selecthoc"
          label="selecthoc"
          placeholder="Selecciona una opción"
          validationError="Debes de seleccionar una opción"
          // defaultValue="2"
          required
        >
          <Option disabled selected value="undefined">
            Selecciona una opción
          </Option>
          <Option key="1">Hola 1</Option>
          <Option key="2">Hola 2</Option>
          <Option key="3">Hola 3</Option>
        </Select>
      </Form>
    )
  }
}

export default Recover
