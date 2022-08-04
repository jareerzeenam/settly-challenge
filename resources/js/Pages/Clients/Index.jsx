import { Link } from '@inertiajs/inertia-react'
import React from 'react'
import { usePage } from '@inertiajs/inertia-react'
import Layout from '../../Shared/Layout';

export default function index({clients}) {
  const { flash } = usePage().props;
  return (
    <Layout>
        <div>Clients</div>
        {flash.message && (
          <div className="alert">{flash.message}</div>
        )}
        <ul>
            {clients.map(client => (
                <li key={client.id}><Link href={`/clients/${client.id}`}>{client.name}</Link></li>
            ))}
        </ul>
    </Layout>
  )
}
