import React from 'react'
import Layout from '../Shared/Layout'
import { Head } from '@inertiajs/inertia-react'

export default function index(props) {
  return (
    <div>
      <Head title='App - Home'/>

      <Layout>
        <div>index {props.foo}</div>
      </Layout>
    </div>
  )
}
