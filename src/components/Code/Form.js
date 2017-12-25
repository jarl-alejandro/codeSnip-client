import React, { Component } from 'react'
import { graphql } from 'react-apollo'
import queries from '../../utils/queries'

class Form extends Component {
  constructor (props) {
    super(props)

    this.saveCode = this.saveCode.bind(this)
  }

  async saveCode (e) {
    e.preventDefault()
    console.log(this.props)

    const object = {
      username: this.refs.username.value,
      language: this.refs.language.value,
      code: this.refs.code.value,
    }
    const response = await this.props.mutate({
      variables: object
    })
    alert('Guardado...')
    console.log('Graphql response:', response)
  }

  render () {
    return (
      <form onSubmit={this.saveCode}>
        <input placeholder='Ingresa tu username' ref='username' />
        <input placeholder='Ingresa el lenguaje' ref='language' />
        <textarea placeholder='Ingresa el lenguaje' ref='code'></textarea>
        <button>Guardar</button>
      </form>
    )
  }
}

export default graphql(queries.mutation.createCode)(Form)