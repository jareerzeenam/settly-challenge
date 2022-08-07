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
          {/* <div>Clients</div> */}
          {flash.message && (
            <div className="alert">{flash.message}</div>
          )}
          {/* <ul>
              {clients.map(client => (
                  <li key={client.id}><Link href={`/clients/${client.id}`}>{client.name}</Link></li>
              ))}
          </ul> */}





              <div className="flex justify-between mb-6">

                    <div className="flex items-center">
                        <h1 className="text-3xl font-bold">Clients</h1>

                        {/* <Link v-if="can.createUser" href="/users/create" class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white ml-5 px-2 border border-blue-500 hover:border-transparent rounded" >New User </Link> */}
                    </div>

                    {/* <input v-model="search" type="text" placeholder="Search..." class="border px-2 rounded-lg"> */}
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
                            {/* <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                              <Link href={`/clients/${client.id}/edit`} className="text-indigo-600 hover:text-indigo-900">Edit</Link>
                            </td> */}
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
