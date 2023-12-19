import React, { useState } from 'react';
import style from './style.scss';
import AdAccountsNav from '../nav';
import Emitter from '../../../../../utils/EventEmitter/EventEmitter';
import {
  Advertising,
  MyRequest,
} from '../adAccountsFacebook/adAccountsFacebook';

export const adAccountGoogleEmitter = new Emitter();

export const adAccountGoogleEmitterEvents = {
  SET_ACTUAL: 'SET_ACTUAL',
};

function AdAccountsGoogle() {
  const [actual, setActual] = useState(0);
  adAccountGoogleEmitter.on(
    adAccountGoogleEmitterEvents.SET_ACTUAL,
    (index: number) => {
      setActual(prev => index);
    }
  );
  return (
    <div>
      <AdAccountsNav
        actual={actual}
        emitter={adAccountGoogleEmitter}
        eventName={adAccountGoogleEmitterEvents.SET_ACTUAL}
      />
      <div className={style.main}>
        {actual === 0 ? <MyRequest comp="Google" /> : <Advertising comp="Google" />}
      </div>
    </div>
  );
}

export default AdAccountsGoogle;
