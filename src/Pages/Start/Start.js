import React from 'react';
import HowTo from '../../components/HowTo/HowTo';
import SetParams from '../../components/SetParams/SetParams';
import StartStyles from './Start.module.scss';

const Start = () => {
  return (
    <div className={StartStyles.container}>
        <div className={StartStyles.howTo}>
        <HowTo />
        </div>
        <div className={StartStyles.setParams}>
        <SetParams />
        </div>
    </div>
  )
}

export default Start