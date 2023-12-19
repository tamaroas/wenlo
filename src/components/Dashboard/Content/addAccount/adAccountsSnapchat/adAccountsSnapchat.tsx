import React, { useState } from 'react';
import style from './style.scss';
import AdAccountsNav from '../nav';
import Emitter from '../../../../../utils/EventEmitter/EventEmitter';
import {
  Advertising,
  MyRequest,
} from '../adAccountsFacebook/adAccountsFacebook';

export const adAccountSnapchatEmitter = new Emitter();

export const adAccountSnapchatEmitterEvents = {
  SET_ACTUAL: 'SET_ACTUAL',
};

function AdAccountsSnap() {
  const [actual, setActual] = useState(0);
  adAccountSnapchatEmitter.on(
    adAccountSnapchatEmitterEvents.SET_ACTUAL,
    (index: number) => {
      setActual(prev => index);
    }
  );
  return (
    <div>
      <AdAccountsNav
        actual={actual}
        emitter={adAccountSnapchatEmitter}
        eventName={adAccountSnapchatEmitterEvents.SET_ACTUAL}
      />
      <div className={style.main}>
        {actual === 0 ? <MyRequest comp="Snapchat" /> : <Advertising comp="Snapchat" />}
      </div>
    </div>
  );
}

export default AdAccountsSnap;
