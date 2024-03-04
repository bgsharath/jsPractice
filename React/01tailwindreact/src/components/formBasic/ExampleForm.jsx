import React from 'react'

export const ExampleForm = () => {

  const handleSubmit = (event) => {
    event.preventDefault()
    const e = event.target  
    const request = {
        name: e.name.value,
        email: e.email.value,
        agree: e.agree.checked,
        gender: e.gender.value
    }
    console.log(request)
  }

  return (
    <>
        <form onSubmit={handleSubmit}>
            <div className="grid m-10 gap-6 mb-6 md:grid-cols-1">
                <div>
                    <label htmlFor="first_name" className="block mb-2 float-start text-sm font-medium text-gray-900 dark:text-white">First name</label>
                    <input name="name" type="text" id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="John" required />
                </div>       
                <div>
                    <label htmlFor="email" className="block mb-2 float-start text-sm font-medium text-gray-900 dark:text-white">Email address</label>
                    <input name="email" type="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="john.doe@company.com" required />
                </div>
                <div className='float-start'>
                    <input name="agree" id="agree" type='checkbox'/>
                    <label htmlFor="agree" className="m-2 text-sm font-medium text-gray-900 dark:text-white">Agree</label>                    
                </div>
                <div className='float-start'>
                    <input id="default-radio-1" type="radio" value="male" name="gender" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                    <label htmlFor="default-radio-1" className="ms-2 mr-10 text-sm font-medium text-gray-900 dark:text-gray-300">Male</label>
                    <input checked id="default-radio-2" type="radio" value="female" name="gender" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                    <label htmlFor="default-radio-2" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Female</label>
                </div>               
            </div>
            <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
        </form>
    </>
  )
}
