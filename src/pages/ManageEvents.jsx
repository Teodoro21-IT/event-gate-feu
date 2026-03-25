import React from 'react'
import { Link } from 'react-router'
import MainLayout from '../layouts/MainLayout'

const ManageEvents = () => {
    return (
        <MainLayout>
            <div>
                <div>

                </div>
                <div className='pt-5 flex justify-between items-center'>
                    <h1 className='text-xl font-bold'>Manage Events</h1>

                    <Link
                        to="/add-event"
                        className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-200"
                    >
                        + Add Event
                    </Link>
                </div>
            </div>
        </MainLayout>
    )
}

export default ManageEvents