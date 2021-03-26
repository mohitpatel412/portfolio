import React, { Component } from 'react';

class Skill extends Component {
    render() {
        return(

            <section className="text-gray-200 bg-black" style={{
              background: '#091c29'
              }}>
                <h1 className="text-xxl font-bold justify-center">Skills</h1>
                <div className="flex mt-6 justify-center">
              <div className="w-16 h-1 rounded-full bg-indigo-500 inline-flex mb-4"></div>
            </div>
              <div className="flex flex-wrap justify-center">
                <div className="p-10 md:w-1/3 md:mb-0 mb-6 flex flex-col text-center items-center shadow-md">
                  
                    <div className="rounded bg-black p-4 transform -translate-y-6  "  >
                      <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-green-100 text-green-500 mb-5 flex-shrink-0 p-2">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"></path></svg>                </div>
                      <div className="flex-grow ">
                        <h2 className=" text-xl title-font font-medium mb-3">Webdesign</h2>
                        <p className="leading-relaxed text-sm text-justify">
                            Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book.
                        </p>
                      </div>
                    </div>
                  
                </div>
                <div className="p-10 md:w-1/3 md:mb-0 mb-6 flex flex-col text-center items-center shadow-md">
                  
                    <div className="rounded bg-black p-4 transform -translate-y-6 ">
                      <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-blue-100 text-blue-500 mb-5 flex-shrink-0">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path></svg>
                      </div>
                      <div className="flex-grow">
                        <h2 className=" text-xl title-font font-medium mb-3">Integration web</h2>
                        <p className="leading-relaxed text-sm text-justify">
                        Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book.
                        </p>
                      </div>
                    </div>
                  
                </div>
                <div className="p-10 md:w-1/3 md:mb-0 mb-6 flex flex-col text-center items-center shadow-md">
                  
                    <div className="rounded bg-black p-4 transform -translate-y-6 ">
                      <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-yellow-100 text-yellow-500 mb-5 flex-shrink-0">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4"></path></svg>
                      </div>
                      <div className="flex-grow">
                        <h2 className=" text-xl title-font font-medium mb-3">Development Back-end</h2>
                        <p className="leading-relaxed text-sm text-justify">
                        Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book.
                        </p>
                      </div>
                    </div>
                
                </div>
            </div>
        </section>
        )
    }
}

export default Skill;