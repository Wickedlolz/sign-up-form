import { useState } from 'react';
import SignUp from './components/SignUp/SignUp';
import Modal from './components/Modal/Modal';

import './App.css';

function App() {
    const [modalState, setModalState] = useState({
        open: false,
        msg: '',
    });

    const notify = (message) => {
        setModalState((state) => ({
            ...state,
            open: !state.open,
            msg: message,
        }));

        setTimeout(() => {
            setModalState((state) => ({
                ...state,
                open: false,
                msg: '',
            }));
        }, 5000);
    };

    return (
        <div className="App">
            <section className="wrapper">
                <SignUp notify={notify} />
            </section>
            {modalState.open && <Modal msg={modalState.msg} />}
        </div>
    );
}

export default App;
