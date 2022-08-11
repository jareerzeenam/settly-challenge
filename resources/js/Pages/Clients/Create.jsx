import { useForm, Head, usePage } from '@inertiajs/inertia-react';
import React from 'react';
import Layout from '../../Shared/Layout';


export default function Create(props) {
    // const { files } = usePage().props

    const { data, setData, post, processing, errors } = useForm({
        name: '',
        email: '',
        avatar: null,
      })

    function createClient(e){
        e.preventDefault();

        post('/clients');
    }
  return (
    <div>
        <Head title='App - Create Client'/>
        <Layout>
        <main className="grid place-items-center min-h-screen">
          <section className="bg-white p-8 rounded-xl max-w-md mx-auto border">
            <h1 className="text-3xl py-5">Create Client</h1>
                <form action="#" onSubmit={createClient}>
                    <div className="mb-6">
                        <label htmlFor="name" className="block mb-2 uppercase font-bold text-xs test-gray-700">Name</label>
                        <input type="text" className="border rounded border-gray-400 p-2 ml-1" name='name' id='name' value={data.name} onChange={e => setData('name', e.target.value)} />
                        {errors.name && <div>{errors.name}</div>}
                    </div>
                    <div className="mb-6">
                        <label htmlFor="email" className="block mb-2 uppercase font-bold text-xs test-gray-700">Email</label>
                        <input type="email" className="border rounded border-gray-400 p-2 ml-1" name='email' id='email' value={data.email} onChange={e => setData('email', e.target.value)} />
                        {errors.email && <div>{errors.email}</div>}
                    </div>
                    <div className="mb-6">
                      <label htmlFor="avatar" className="block mb-2 uppercase font-bold text-xs test-gray-700">Profile Picture</label>
                      <input type="file" className="w-full px-4 py-2" name="avatar" onChange={(e) => setData("avatar", e.target.files[0])} />
                    </div>
                    <div className="mb-6">
                      <button className="w-full bg-blue-400 text-white rounded py-2 px-4 hover:bg-blue-500 btn-lg" >Create</button>
                    </div>
                </form>
          </section>
        </main>
        </Layout>
    </div>
  )
}
