import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import TextField from './TextField';
import { Link, useNavigate } from 'react-router-dom';
import api from '../api/api';
import toast from 'react-hot-toast';

const RegisterPage = () => {
    const navigate = useNavigate();
    const [loader, setLoader] = useState(false);
    const {
        register, handleSubmit, reset, formState: { errors }
    } = useForm({
        defaultValues: {
            username: "",
            email: "",
            password: ""
        },
        mode: "onTouched"
    });

    const registerHandler = async (data) => {
        setLoader(true);
        try {
            const { data: response } = await api.post("/api/auth/register", data);
            reset();
            navigate("/login");
            toast.success("User Registered Succesfully!")
        } catch (error) {
            console.log(error)
            toast.error("Registration failed!")
        } finally {
            setLoader(false);
        }
    };
    return (
        <div
            className='min-h-[calc(100ch-64px)] flex justify-center items-center'>
            <form onSubmit={handleSubmit(registerHandler)}
                className='sm:w-[450px] w-[360px] shadow-custom py-8 sm:px-8 px-4 rounded-md'
            >
                <h1 className='text-center font-serif text-btnColor font-bold lg:text-3xl text-2xl'>Register Here</h1> <hr className='mt-2 mb-5 text-black' />

                <div>
                    <TextField
                        label="Username"
                        required
                        id="username"
                        type="text"
                        message="*Username is required"
                        placeholder="Type your username"
                        register={register}
                        errors={errors}
                    />
                    <TextField
                        label="Email"
                        required
                        id="email"
                        type="email"
                        message="*Email is required"
                        placeholder="Type your Email"
                        register={register}
                        errors={errors}
                    />
                    <TextField
                        label="Password"
                        required
                        id="password"
                        type="password"
                        message="*Password is required"
                        placeholder="Type your password"
                        register={register}
                        errors={errors}
                        min={6}
                    />
                </div>

                <button
                    disabled={loader}
                    type='submit'
                    className='bg-customRed font-semibold text-white  bg-custom-gradient w-full py-2 hover:text-slate-400 transition-colors duration-100 rounded-sm my-3'>
                    {loader ? "Loading......" : "Register"}
                </button>

                <p className='text-center text-sm text-slate-700 mt-6'>
                    Already have an account?
                    <Link to="/login">
                        <span className='font-semibold underline text-btnColor hover:text-black'>
                            Login
                        </span>
                    </Link>
                </p>
            </form>
        </div>
    )
}

export default RegisterPage