import React from 'react';
import HalftimeStyles from './Halftime.module.scss';
import { useSelector, useDispatch } from 'react-redux';
import { renderUserTwo } from '../../features/userTwoSlice';
import Button from '../../components/Button/Button';
import ResetButton from '../../components/ResetButton/ResetButton';

const Halftime = () => {
    const { nameTwo, nameOne } = useSelector((state) => state.params);
    const dispatch = useDispatch();

    const handleUserTwoStart = () => {
        dispatch(renderUserTwo())
    };

    return (

        <div className={HalftimeStyles.container}>
            <div className={HalftimeStyles.card}>
                <h2>No Movies Left</h2>
                <h3>{nameTwo}'s turn.</h3>
                <p>{nameTwo} will now go through {nameOne}'s liked movies and see which ones she also wants to watch!</p>
                <Button onClick={handleUserTwoStart} btnText='Get Movies' />
            </div>
        </div>
    )
}

export default Halftime