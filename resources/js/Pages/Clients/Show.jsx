import React from 'react'
import Layout from '../../Shared/Layout'

export default function Show({client}) {
  return (
    <Layout>
        <div>
            <h3>{client.name}</h3>
            <p>{client.email}</p>
        </div>
    </Layout>
  )
}
