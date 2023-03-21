import React from 'react';
import { useSelector } from 'react-redux';
import UserTwo from '../../components/UserTwo/UserTwo';
import RoundTwoStyles from './RoundTwo.module.scss';

const RoundTwo = () => {
    const {nameTwo } = useSelector((state) => state.params)
  return (
    <div className={RoundTwoStyles.container}>
            <div className={RoundTwoStyles.card}>
                <div className={RoundTwoStyles.heading}>
                    <h1 className={RoundTwoStyles.name}>
                        {nameTwo}'s turn
                    </h1>
                </div>
                <div className={RoundTwoStyles.movieCardContianer}>
                    <UserTwo />
                </div>
            </div>
        </div>
  )
}

export default RoundTwo