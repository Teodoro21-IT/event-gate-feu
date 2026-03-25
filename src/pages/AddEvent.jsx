import React from "react";
import MainLayout from "../layouts/MainLayout";
import Input from "../components/form/Input";
import supabase from "../utils/supabase";

const AddEvent = () => {
    const handleSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        const formDataObject = Object.fromEntries(formData.entries());

        const { data: eventData, error: eventError } = await supabase
            .from("Events")
            .insert(formDataObject)
            .select()
            .single();
        if (eventError) alert(eventError);
        if (eventData) console.log(eventData);
    };

    return (
        <MainLayout>
            <div className="max-w-6xl mx-auto pt-10 px-4">
                <header className="mb-8">
                    <h1 className="text-2xl font-bold text-white">Create New Event</h1>
                    <p className="text-slate-400 text-sm">Fill in the details below to publish your event.</p>
                </header>


                <form className="bg-slate-900/40 border border-slate-800 p-8 rounded-2xl backdrop-blur-sm">
                    <div className="flex flex-col lg:flex-row gap-10">

                        <div className="w-full lg:w-1/3 flex flex-col gap-1">

                            {/* TITTLE */}
                            <Input type="text" label="Title" placeholder="Enter Title" name="title" />


                            <div className="grid grid-cols-2 gap-4">
                                <Input type="date" label="Start Date" name="start_date" />
                                <Input type="date" label="End Date" name="end_date" />
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                <Input type="time" label="Start Time" name="start_time" />
                                <Input type="time" label="End Time" name="end_time" />
                            </div>

                            <Input type="text" label="Location" placeholder="Enter Location" name="location" />
                        </div>


                        <div className="flex-1 flex flex-col">
                            <label className="text-sm font-medium text-slate-300 uppercase tracking-wider mb-2">
                                Description
                            </label>
                            <textarea
                                className="flex-1 bg-slate-800/50 border border-slate-700 text-white text-sm rounded-lg focus:ring-purple-500 focus:border-purple-500 p-4 transition-all outline-none min-h-[300px] resize-none"
                                placeholder="Describe your event..."
                                name="description"
                            ></textarea>

                            <div className="mt-8 flex justify-end gap-4">
                                <button
                                    type="submit"
                                    className="bg-purple-600 hover:bg-purple-500 text-white font-semibold px-8 py-2 rounded-lg transition-all shadow-lg shadow-purple-500/20"
                                >
                                    Create Event
                                </button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </MainLayout>
    );
};

export default AddEvent;