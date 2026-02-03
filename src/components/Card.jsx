import React from 'react'
import {Link} from 'react-router-dom'
export const Card = () => {
  return (
    <div>
        <div className="bg-neutral-primary-soft block max-w-sm p-6 border border-default rounded-base shadow-xs dark:text-gray-400 dark:bg-gray-800 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 mt-10 m-5">
          <Link to="#">
            <img className="rounded-base" src="/docs/images/blog/image-1.jpg" alt="" />
          </Link>
          <Link to="#">
            <h5 className="mt-6 mb-2 text-2xl font-semibold tracking-tight text-heading">Streamlining your design process today.</h5>
          </Link>
          <p className="mb-6 text-body">In today’s fast-paced digital landscape, fostering seamless collaboration among Developers and IT Operations.</p>
          <Link to="#" className="inline-flex items-center text-body bg-neutral-secondary-medium box-border border border-default-medium hover:bg-neutral-tertiary-medium hover:text-heading focus:ring-4 focus:ring-neutral-tertiary shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none">
            Read more
            <svg className="w-4 h-4 ms-1.5 rtl:rotate-180 -me-0.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 12H5m14 0-4 4m4-4-4-4" /></svg>
          </Link>
        </div>
    </div>
  )
}
