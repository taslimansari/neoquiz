import React from 'react'
import { Link } from 'react-router-dom'

const DashboardLayout = ({ children }) => {
    return (
        <section className=''>
            <div className='flex py-2  gap-5 border-y my-3 border-slate-700 text-lg'>
                <Link to={"/dashboard"}>
                    Profile
                </Link>
                <Link to={"/dashboard/create-quiz"}>
                    Create
                </Link>
                <Link to={"/dashboard/quizes"}>
                    Quizes
                </Link>
                <Link to={"/dashboard/results"}>
                    Results
                </Link>
            </div>
            {children}
        </section>
    )
}

export default DashboardLayout