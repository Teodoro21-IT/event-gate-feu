import Input from "../components/form/Input";
import MainLayout from "../layouts/MainLayout";
import Card from "../components/Card";
import supabase from "../utils/supabase";
import { CiLogin } from "react-icons/ci";
import { useContext, useEffect } from "react";
import { SessionContext } from "../contexts/SessionContext";
import { useNavigate } from "react-router";

const Login = () => {
    const { session, profile } = useContext(SessionContext);
    const navigate = useNavigate();

    useEffect(() => {
        if (profile?.role === "user") {
            navigate("/");
        }
        if (profile?.role === "admin") {
            navigate("/manage-events");
        }
    }, [profile, navigate]);



    const handleSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        const loginform = {
            email: formData.get("email"),
            password: formData.get("password"),
        };


        const { data, error } = await supabase.auth.signInWithPassword({
            email: loginform.email,
            password: loginform.password,
        });
        if (error) { alert(error) }
        if (data) { console.log(data) };
    };

    return (
        <MainLayout>
            <div className="min-h-screen flex flex-col">
                <div className="flex justify-center items-center flex-1">
                    <Card>
                        <h1 className="text-xl font-bold">Login</h1>
                        <form onSubmit={handleSubmit}>

                            <Input
                                name="email"
                                placeholder="Enter your Email"
                                label="Email"
                                type="email"
                            />
                            <Input
                                name="password"
                                placeholder="Enter your Password"
                                label="Password"
                                type="password"
                            />
                            <button className="btn btn-primary rounded-full mt-5">
                                <CiLogin /> Submit
                            </button>

                        </form>
                    </Card>
                </div>
            </div>
        </MainLayout>
    );
};

export default Login;
