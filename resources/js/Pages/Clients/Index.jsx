import { Link } from '@inertiajs/inertia-react'
import React from 'react'
import { usePage, Head } from '@inertiajs/inertia-react'
import Layout from '../../Shared/Layout';

export default function index({clients}) {
  const { flash } = usePage().props;
  return (
    <div>
      <Head title='App - Clients'/>
      <Layout>
          {flash.message && (
            <div className="alert">{flash.message}</div>
          )}
              <div className="flex justify-between mb-6">
                <div className="flex items-center">
                    <h1 className="text-3xl font-bold">Clients</h1>
                </div>
              </div>

            <div className="flex flex-col">
              <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                  <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                    <table className="min-w-full divide-y divide-gray-200">
                      <tbody className="bg-white divide-y divide-gray-200">
                        {clients.data.map(client => (
                          <tr>
                              <td className="px-6 py-4 whitespace-nowrap">
                                <div className="flex items-center">
                                  <div>
                                      <div key={client.id} className="text-sm font-medium text-gray-900">
                                          <Link href={`/clients/${client.id}`}>{client.name}</Link>
                                      </div>
                                  </div>
                                </div>
                              </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                    <div className='mt-6'>
                      {clients.links.map((link) =>
                        { return link.url ?
                          <Link href={link.url} className='p-1'>{link.label}</Link>
                          :
                          <span></span>
                        }
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
      </Layout>
    </div>
  )
}
