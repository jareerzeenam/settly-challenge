import React from 'react'
import { useForm, Head, Link } from '@inertiajs/inertia-react'

export default function Login(props) {

    const { data, setData, post, processing, errors } = useForm({
        email: '',
        password: '',        
      }) 

    function login(e){
        e.preventDefault();

        post('/login');
    }

  return (
    <div className='bg-blue-300'>
      <Head title='App - Login'/>
        <main class="grid place-items-center min-h-screen">
          <section class="bg-white p-8 rounded-xl max-w-md mx-auto border">
            <h1 className="text-3xl">Login</h1>
              <form onSubmit={login} method="POST" className="max-w-md mx-auto mt-8">
                  <div className="mb-6">
                      <label htmlFor="email" className="block mb-2 uppercase font-bold text-xs test-gray-700">Email</label>
                      <input type="email" className="border rounded border-gray-400 p-2 ml-1" name='email' id='email' value={data.email} onChange={e => setData('email', e.target.value)} />
                      {errors.email && <div>{errors.email}</div>}
                  </div>

                  <div className="mb-6">
                      <label htmlFor="password" className="block mb-2 uppercase font-bold text-xs test-gray-700">Password</label>
                      <input type="password" className="border rounded border-gray-400 p-2 ml-1" name='password' id='password' value={data.password} onChange={e => setData('password', e.target.value)} />
                      {errors.password &&  <div className="text-red-500 text-xm mt-1">{errors.password}</div>}
                  </div>

                  <div className="mb-6">
                      <button className="w-full bg-blue-400 text-white rounded py-2 px-4 hover:bg-blue-500 btn-lg" >Log In</button>
                  </div>
              </form>
              <p>No account yet? <Link className='text-blue-600' href='/sign-up'>Create one here.</Link></p>  
          </section>
        </main>
    </div>
  )
  }

