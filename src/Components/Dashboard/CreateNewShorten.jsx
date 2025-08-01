import React, { useState } from 'react'
import { useStoreContext } from '../../contextApi/ContextApi'
import { useForm } from 'react-hook-form';
import TextField from '../TextField';
import Tooltip from '@mui/material/Tooltip';
import { RxCross2 } from 'react-icons/rx';
import api from '../../api/api';
import toast from 'react-hot-toast';

const CreateNewShorten = ({ setOpen, refetch }) => {
    const { token } = useStoreContext();
    const [loading, setLoading] = useState(false);

    const {
        register, handleSubmit, reset, formState: { errors }
    } = useForm({
        defaultValues: {
            originalUrl: "",
        },
        mode: 'onTouched'
    })

    const createShortUrlHandler = async (data) => {
        setLoading(true)
        try {
            const { data: res } = await api.post("/api/urls/shorten", data, {
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                    Authorization: "Bearer " + token
                }
            });

            const shortenUrl = `${import.meta.env.VITE_REACT_SUBDOMAIN}/${res.shortUrl}`

            navigator.clipboard.writeText(shortenUrl).then(() => {
                toast.success("Short URL Created Succesfully", {
                    position: "bottom-center",
                    className: "mb-5",
                    duration: 3000
                })
                // await refetch();
                reset();
                setOpen(false);

            })
        } catch (error) {
            let title = "Short URL Couldn't be Created";
            let reason = "";

            if (error.response && error.response.data) {
                const { message, debugMessage } = error.response.data;
                reason = `${message}${debugMessage ? ` (${debugMessage})` : ""}`;
            }

            toast.error(`${title}: ${reason}`, {
                position: "bottom-center",
                className: "mb-5",
                duration: 4000
            });
        }
        finally {
            setLoading(false);
        }
    }
    return (
        <div className='flex justify-center items-center bg-white rounded-md'>
            <form onSubmit={handleSubmit(createShortUrlHandler)}
                className='sm:w-[450px] w-[360px] relative shadow-custom pt-8 pb-5 sm:px-8 px-4 rounded-lg'
            >
                <h1 className='font-montserrat sm:mt-0 mt-3 text-center font-bold sm:text-2xl text-[22px] text-slate-800'>
                    Create New Shorten URL
                </h1>
                <hr className='mt-2 sm:mb-5 mb-3 text-slate-900'></hr>
                <div className="">
                    <TextField
                        label="Enter URL"
                        required
                        id='originalUrl'
                        placeholder='http://google.com'
                        type='url'
                        message="Url is required"
                        register={register}
                        errors={errors}
                    />
                    <TextField
                        label="Enter Backhalf"
                        required
                        id='backhalf'
                        placeholder='gcom'
                        type='text'
                        message="Backhalf is required"
                        register={register}
                        errors={errors}
                    />
                </div>

                <button className='
                bg-customRed font-semibold text-white w-32 bg-custom-gradient py-2 
                transition-colors rounded-md my-3 text-center'
                    type="text">
                    {loading ? "Loading...." : "Create"}
                </button>

                {!loading && (
                    <Tooltip title="Close">
                        <button
                            disabled={loading}
                            onClick={() => setOpen(false)}
                            className='absolute right-2 top-2'
                        >
                            <RxCross2 className="text-slate-800 text-3xl" />
                        </button>
                    </Tooltip>
                )}
            </form>
        </div>
    )
}

export default CreateNewShorten