import React, { Component } from 'react'
import { graphql } from 'react-apollo'
import queries from '../../utils/queries'
import Item from './Item'

class List extends Component {
  render () {
    return (
      <section>
        <h2>Mis snippets de codigo</h2>
        <ul>
          {
            this.props.data.loading ? (
              <li>Cargando.....</li>
            ) : (
              this.props.data.allCode.map((item, index) => {
                return (
                  <Item key={index} {...item} />
                )
              })
            )
          }
        </ul>
      </section>
    )
  }
}

export default graphql(queries.query.allCode)(List)