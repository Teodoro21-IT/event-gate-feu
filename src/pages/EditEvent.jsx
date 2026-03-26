import React from 'react'
import MainLayout from '../layouts/MainLayout'
import { useParams } from 'react-router'
import { useEffect } from 'react'
import { useState } from 'react'
import supabase from '../utils/supabase'
import { EventForm } from '../components/EventForm'


const EditEvent = () => {

    const { eventId } = useParams();
    const [event, setEvent] = useState(null);


    useEffect(() => {
        const fetchEvent = async () => {
            const { data: eventData, error: eventError } = await supabase
                .fron("events")
                .select()
                .eq("id", eventId)
                .singe();
            if (eventError) alert(eventError)
            if (eventData) console.log(eventData);

        };
        fetchEvent();
    }, [eventId]);


    return (
        <MainLayout>
            <EventForm eventData={event} />
        </MainLayout>
    )
};

export default EditEvent