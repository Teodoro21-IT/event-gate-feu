import React from 'react'
import { Link } from 'react-router'
import MainLayout from '../layouts/MainLayout'
import supabase from '../utils/supabase'
import { useEffect, useState } from 'react'



const ManageEvents = () => {
    const [events, setEvents] = useState([]);


    useEffect(() => {
        const fetchEvents = async () => {
            const { data, error } = await supabase
                .from('events')
                .select();

            if (error) {
            } else {
                setEvents(data || []);
            }
        };

        fetchEvents();
    }, []);

    return (
        <MainLayout>
            <div className=''>
                <div className='t-5 flex justify-between items-center mb-6'>
                    <h1 className='text-xl font-bold'>Manage Events</h1>
                    <Link to="/add-event" className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                        + Add Event
                    </Link>
                </div>


                <div className="grid gap-4">
                    {events.length > 0 ? (
                        events.map((event) => (
                            <div key={event.id} className="border p-4 rounded-lg shadow-sm bg-gray-800 text-white">
                                <h2 className="font-bold text-lg text-blue-400">{event.title}</h2>
                                <p className="text-sm text-gray-300 italic mb-2">{event.location}</p>

                                {/* Date and Time Section */}

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm bg-gray-700 p-3 rounded">
                                    <div>
                                        <p className="font-semibold text-green-400">Starts Date: {event.start_date} </p>
                                        <p className="font-semibold text-green-400">Starts Time: {event.start_time} </p>

                                    </div>
                                    <div>
                                        <p className="font-semibold text-red-400">Ends Date: {event.end_date} </p>
                                        <p className="font-semibold text-red-400">Ends Time: {event.end_time} </p>
                                    </div>
                                </div>

                                <p className="mt-3 text-gray-200">{event.description}</p>
                            </div>
                        ))
                    ) : (
                        <p className="text-gray-500">No events found.</p>
                    )}
                </div>

            </div>
        </MainLayout>
    )
}

export default ManageEvents;