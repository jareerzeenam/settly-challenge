import { useForm, Head } from '@inertiajs/inertia-react';
import React from 'react';
import Layout from '../../Shared/Layout';


export default function Create() {
    const { data, setData, post, processing, errors } = useForm({
        name: '',
        email: '',
      })

    function createClient(e){
        e.preventDefault();

        post('/clients');
    }
  return (
    <div>
        <Head title='App - Create Client'/>
        <Layout>
            <h3 className='text-3xl font-bold'>Create Client</h3>
            <form action="#" onSubmit={createClient}>
                    <div>
                        <label htmlFor="name">Name</label>
                        <input type="text" className="border border-gray-400 p-2 ml-6" name='name' id='name' value={data.name} onChange={e => setData('name', e.target.value)} />
                        {errors.name && <div>{errors.name}</div>}
                    </div>
                    <div>
                        <label htmlFor="email">Email</label>
                        <input type="email" className="border border-gray-400 p-2 ml-6" name='email' id='email' value={data.email} onChange={e => setData('email', e.target.value)} />
                        {errors.email && <div>{errors.email}</div>}
                    </div>
                    <div>
                        <button className="bg-blue-400 text-white rounded py-2 px-4 hover:bg-blue-500" >Create Client</button>
                    </div>
            </form>
        </Layout>
    </div>
  )
}
