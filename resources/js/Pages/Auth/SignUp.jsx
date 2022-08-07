import React from 'react'
import { useForm, Head, Link } from '@inertiajs/inertia-react'
import Layout from '../../Shared/Layout'

export default function SignUp(props) {

    const { data, setData, post, processing, errors } = useForm({
        email: '',
        password: '',        
      }) 

    function signUp(e){
        e.preventDefault();

        post('/sign-up');
    }

  return (
    <div>
      <Head title='App - Sign Up'/>

      <Layout>
        <main className='grid place-item-center '>
          <section className='bg-white p-8 rounded-xl max-w-md mx-auto border'>
            <h1 className="text-3xl">Sign Up</h1>
            
              <form onSubmit={signUp} method="POST" className="max-w-md mx-auto mt-8">
                  <div className="mb-6">
                      <label htmlFor="name" className="block mb-2 uppercase font-bold text-xs test-gray-700">Name</label>
                      <input type="text" className="border rounded border-gray-400 p-2 ml-1" name='name' id='name' value={data.name} onChange={e => setData('name', e.target.value)} />
                      {errors.name &&  <div className="text-red-500 text-xm mt-1">{errors.name}</div>}
                  </div>

                  <div className="mb-6">
                      <label htmlFor="surname" className="block mb-2 uppercase font-bold text-xs test-gray-700">Surname</label>
                      <input type="text" className="border rounded border-gray-400 p-2 ml-1" name='surname' id='surname' value={data.surname} onChange={e => setData('surname', e.target.value)} />
                      {errors.surname &&  <div className="text-red-500 text-xm mt-1">{errors.surname}</div>}
                  </div>

                  <div className="mb-6">
                      <label htmlFor="email" className="block mb-2 uppercase font-bold text-xs test-gray-700">Email</label>
                      <input type="email" className="border rounded border-gray-400 p-2 ml-1" name='email' id='email' value={data.email} onChange={e => setData('email', e.target.value)} />
                      {errors.email &&  <div className="text-red-500 text-xm mt-1">{errors.email}</div>}
                  </div>

                  <div className="mb-6">
                      <label htmlFor="email_confirmation" className="block mb-2 uppercase font-bold text-xs test-gray-700">Email Confirm</label>
                      <input type="email" className="border rounded border-gray-400 p-2 ml-1" name='email_confirmation' id='email_confirmation' value={data.email_confirmation} onChange={e => setData('email_confirmation', e.target.value)} />
                      {errors.email_confirmation &&  <div className="text-red-500 text-xm mt-1">{errors.email_confirmation}</div>}
                  </div>

                  <div className="mb-6">
                      <label htmlFor="password" className="block mb-2 uppercase font-bold text-xs test-gray-700">Password</label>
                      <input type="password" className="border rounded border-gray-400 p-2 ml-1" name='password' id='password' value={data.password} onChange={e => setData('password', e.target.value)} />
                      {errors.password &&  <div className="text-red-500 text-xm mt-1">{errors.password}</div>}
                  </div>

                  <div className="mb-6">
                      <label htmlFor="password_confirmation" className="block mb-2 uppercase font-bold text-xs test-gray-700">Password</label>
                      <input type="password" className="border rounded border-gray-400 p-2 ml-1" name='password_confirmation' id='password_confirmation' value={data.password_confirmation} onChange={e => setData('password_confirmation', e.target.value)} />
                      {errors.password_confirmation &&  <div className="text-red-600 text-xm mt-1">{errors.password_confirmation}</div>}
                  </div>

                  {props.recaptchaKey ? 
                    <div className="g-recaptcha p-2 "
                      data-sitekey={ props.recaptchaKey }>
                  </div>
                  : null}

                  <div className="mb-6">
                      <button className="bg-blue-400 text-white rounded py-2 px-4 hover:bg-blue-500" >Log In</button>
                  </div>
              </form>
              <p>Already have an account? <Link className='text-blue-600' href='/login'>Login here.</Link></p>  
          </section>
        </main>
      </Layout>
    </div>
  )
  }

