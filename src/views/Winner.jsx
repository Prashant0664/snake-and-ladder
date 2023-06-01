import React from 'react'
import Modal from 'react-modal';
import source from "../Assets/source.gif"
import { useEffect } from 'react';

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        background: "black",

    },
};


const Winner = ({ opene, winn, cresult }) => {
    let subtitle;
    const [modalIsOpen, setIsOpen] = React.useState(false);

    React.useEffect(() => {
        setIsOpen(opene)

    }, [opene]);


    function afterOpenModal() {
        subtitle.style.color = '#f00';
    }

    function closeModal() {
        setIsOpen(false);
        cresult(false);
    }
    return (
        <>
            <div className='z-[101]  bg-black p-auto m-auto flex relative'>
                {/* <button onClick={openModal}>Open Modal</button> */}
                <Modal
                    ariaHideApp={false}
                    isOpen={modalIsOpen}
                    onAfterOpen={afterOpenModal}
                    onRequestClose={closeModal}
                    style={customStyles}

                    contentLabel="Winner"
                >
                    <button onClick={closeModal} className='mx-auto text-center flex text-xl text-red-500 font-bold '>Player {winn} Won</button>
                    <div className={``}>
                        <img src={source} />
                    </div>
                </Modal>
            </div>
        </>
    )
}

export default Winner;