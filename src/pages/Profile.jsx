import React, { useEffect, useContext, useState } from 'react'
import MainLayout from '../layouts/MainLayout'
import supabase from '../utils/supabase'
import { SessionContext } from '../contexts/SessionContext'
import { Link } from 'react-router';
import EditIcon from '../components/icons/EditIcon';

const Profile = () => {
    const session = useContext(SessionContext);
    const [profile, setProfile] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchProfile = async () => {
            const { data, error } = await supabase
                .from('profiles')
                .select()
                .eq("id", session.user.id)
                .single();

            if (error) console.error(error);
            if (data) setProfile(data);
            setLoading(false);
        }

        if (session?.user?.id) {
            fetchProfile();
        }
    }, [session]);

    return (
        <MainLayout>
            {/* Background Wrapper for Depth */}
            <div className="min-h-screen bg-[#F8FAFC] flex flex-col items-center justify-center py-12 px-4 relative overflow-hidden">

                {/* Abstract Aesthetic Background Shapes */}
                <div className="absolute top-0 left-0 w-96 h-96 bg-indigo-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
                <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse delay-700"></div>

                {/* Profile Card */}
                <div className="relative w-full max-w-md bg-white/80 backdrop-blur-xl rounded-[2.5rem] shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-white overflow-hidden transition-all hover:shadow-[0_20px_60px_rgba(0,0,0,0.08)]">

                    {/* Decorative Header with refined gradient */}
                    <div className="h-40 bg-gradient-to-br from-slate-900 via-slate-800 to-indigo-950 flex items-center justify-center relative">
                        <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>

                        {/* Avatar with Glass Effect */}
                        <div className="relative z-10 w-24 h-24 bg-white/10 backdrop-blur-lg rounded-full border border-white/20 flex items-center justify-center text-white text-4xl font-light tracking-tighter shadow-2xl">
                            {profile?.firstname?.[0]}{profile?.lastname?.[0]}
                        </div>
                    </div>

                    <div className="p-10 pt-12 relative">
                        {/* Profile Info Section */}
                        <div className="text-center mb-10">
                            <h2 className="text-3xl font-bold text-slate-800 tracking-tight leading-tight">
                                {loading ? (
                                    <span className="inline-block w-32 h-8 bg-slate-100 animate-pulse rounded-lg"></span>
                                ) : (
                                    `${profile?.firstname} ${profile?.lastname}`
                                )}
                            </h2>
                            <p className="text-slate-400 font-medium mt-2 tracking-wide text-sm">{profile?.email}</p>
                        </div>

                        <div className="space-y-8">
                            {/* Data Rows with cleaner typography */}
                            <div className="flex items-center justify-between group border-b border-slate-50 pb-4">
                                <div className="space-y-1">
                                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em]">First Name</p>
                                    <p className="text-slate-700 font-semibold text-lg">{profile?.firstname || "—"}</p>
                                </div>
                                <div className="h-8 w-8 rounded-full bg-slate-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                                    <span className="text-slate-300 text-xs italic">view</span>
                                </div>
                            </div>

                            <div className="flex items-center justify-between group border-b border-slate-50 pb-4">
                                <div className="space-y-1">
                                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em]">Last Name</p>
                                    <p className="text-slate-700 font-semibold text-lg">{profile?.lastname || "—"}</p>
                                </div>
                            </div>

                            <div className="flex items-center justify-between p-4 bg-slate-50/50 rounded-2xl border border-slate-100">
                                <div className="space-y-1">
                                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em]">Account Status</p>
                                    <div className="flex items-center gap-2.5">
                                        <span className="relative flex h-2 w-2">
                                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                                            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                                        </span>
                                        <span className="text-emerald-700 font-bold text-xs uppercase tracking-wider">Verified Member</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Edit Button - High Contrast Premium Look */}
                        <div className="mt-12">
                            <Link
                                to="/edit-profile"
                                className="relative group block w-full overflow-hidden rounded-2xl bg-slate-900 px-6 py-4 text-center transition-all duration-300 hover:bg-black hover:shadow-[0_10px_30px_rgba(0,0,0,0.2)] active:scale-[0.97]"
                            >
                                <span className="relative z-10 flex items-center justify-center gap-2 text-white font-bold text-sm tracking-wide">
                                    <EditIcon /> Update Profile
                                </span>
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Optional Footer Breadcrumb */}
                <p className="mt-8 text-[11px] font-bold text-slate-300 uppercase tracking-[0.3em]">
                    Settings &bull; Security &bull; Privacy
                </p>
            </div>
        </MainLayout>
    )
}

export default Profile;