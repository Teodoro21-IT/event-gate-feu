import React from 'react'
import { Link } from 'react-router'
import MainLayout from '../layouts/MainLayout'
import supabase from '../utils/supabase'
import { useEffect, useState, useContext } from 'react'
import { SessionContext } from '../contexts/SessionContext'


const ManageEvents = () => {
    const [events, setEvents] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchEvents = async () => {
            const { data, error } = await supabase
                .from('events')
                .select('*');

            if (error) {
            } else {
                setEvents(data || []);
            }
            setLoading(false);
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

                {loading ? (
                    <p>Loading events...</p>
                ) : (
                    <div className="grid gap-4">
                        {events.length > 0 ? (
                            events.map((item) => (
                                <div key={item.id} className="border p-4 rounded-lg shadow-sm bg-gray-800 text-white">
                                    <h2 className="font-bold text-lg text-blue-400">{item.title}</h2>
                                    <p className="text-sm text-gray-300 italic mb-2">{item.location}</p>

                                    {/* Date and Time Section */}
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm bg-gray-700 p-3 rounded">
                                        <div>
                                            <span className="font-semibold text-green-400">Starts:</span> {item.start_date} @ {item.start_time}
                                        </div>
                                        <div>
                                            <span className="font-semibold text-red-400">Ends:</span> {item.end_date} @ {item.end_time}
                                        </div>
                                    </div>

                                    <p className="mt-3 text-gray-200">{item.description}</p>
                                </div>
                            ))
                        ) : (
                            <p className="text-gray-500">No events found.</p>
                        )}
                    </div>
                )}
            </div>
        </MainLayout>
    )
}

export default ManageEvents;