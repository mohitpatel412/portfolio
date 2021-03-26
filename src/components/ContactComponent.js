import React from 'react';

function Contact() {
    return (
<section className="text-gray-400 body-font relative" style={{
              background: '#091c29'}}>
                  <h1 className="text-xxl font-bold justify-center pt-3 text-white">Contact</h1>
<div className="flex mt-6 justify-center">
  <div className="w-16 h-1 rounded-full bg-indigo-500 inline-flex mb-2"></div>
</div>
  <div className="container px-5 py-2 mx-auto">
    <div className="flex flex-col text-center w-full mb-12">
      <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Contact Us</h1>
      <p className="lg:w-2/3 mx-auto leading-relaxed text-lg">You can contact me for any Queries and Advices here -</p>
    </div>
    <div className="lg:w-1/2 md:w-2/3 mx-auto">
      <div className="flex flex-wrap -m-2">
        <div className="p-2 md:w-1/2 w-full">
          <div className="relative">
            <label for="name" className="leading-7 text-sm text-gray-400">Name</label>
            <input type="text" id="name" name="name" className="w-full bg-white bg-opacity-50 rounded border border-gray-300 focus:border-indigo-400 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
          </div>
        </div>
        <div className="p-2 md:w-1/2 w-full">
          <div className="relative">
            <label for="email" className="leading-7 text-sm text-gray-400">Email</label>
            <input type="email" id="email" name="email" className="w-full bg-white bg-opacity-50 rounded border border-gray-300 focus:border-indigo-400 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
          </div>
        </div>
        <div className="p-2 w-full">
          <div className="relative">
            <label for="message" className="leading-7 text-sm text-gray-400">Message</label>
            <textarea id="message" name="message" className="w-full bg-white bg-opacity-50 rounded border border-gray-300 focus:border-indigo-400 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
          </div>
        </div>
        <div className="p-2 w-full">
          <button className="flex mx-auto text-white bg-indigo-400 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-400 rounded text-lg">Send</button>
        </div>
        <div className="p-2 w-full pt-8 mt-8 border-t border-gray-200 text-center">
          <a className="text-indigo-400" href="mailto:mohitpatel040102@gmail.com">mohitpatel040102@gmail.com</a>
          </div>
        </div>
      </div>
    </div>
</section>
    )
}

export default Contact;