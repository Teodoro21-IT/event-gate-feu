import Input from '../components/form/Input';
import MainLayout from '../layouts/MainLayout';

const SignUpPage = () => {
    return (
        <div className="flex flex-col min-h-screen">
            <MainLayout>

                <div className="flex flex-1 items-center justify-center p-4">
                    <div className="w-full max-w-md">
                        <Input
                            name="firstname"
                            placeholder="Enter your First Name"
                            label="First Name"
                            type="text"
                        />
                        <Input
                            name="lastname"
                            placeholder="Enter your Last Name"
                            label="Last Name"
                            type="text"
                        />
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

                    </div>
                </div>
            </MainLayout>
        </div>
    );
};

export default SignUpPage;