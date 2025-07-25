import * as React from 'react';
import Modal from '@mui/material/Modal';
import CreateNewShorten from './CreateNewShorten';

const ShortenPopUp = ({ open, setOpen, refetch, }) => {
    const handleClose = () => {
        setOpen(false)
    }
    return (
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="parent-modal-title"
            aria-describedby="parent-modal-description"
        >
            <div className='flex justify-center items-center h-full w-full'>
                <CreateNewShorten refetch={refetch} setOpen={setOpen} />
            </div>
        </Modal>
    )
}

export default ShortenPopUp




