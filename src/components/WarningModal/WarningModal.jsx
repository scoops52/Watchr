import React from 'react';
import { useDispatch } from 'react-redux';
import { closeWarningModal } from '../../features/warningModalSlice';
import Button from '../Button/Button';
import WarningModalStyles from './WarningModal.module.scss';

const WarningModal = () => {
    const dispatch = useDispatch();
    const handleReturn = () => dispatch(closeWarningModal())
  return (
    <aside className={WarningModalStyles.container}>
        <div className={WarningModalStyles.modal}>
            <div className={WarningModalStyles.header}>
                <h1>No Liked Movies</h1>
                <p> Please like some movies before proceeding</p>
                <p>Or start over from the beginning using the button in the bottom right corner</p>
            </div>
            <div className={WarningModalStyles.buttons}>
                <Button btnText='Return to Movies' onClick={handleReturn} />
            </div>
        </div>
    </aside>
  )
}

export default WarningModal