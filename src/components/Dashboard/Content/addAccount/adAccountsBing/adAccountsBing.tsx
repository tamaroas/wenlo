import React, { useState } from 'react';
import style from './style.scss';
import AdAccountsNav from '../nav';
import Emitter from '../../../../../utils/EventEmitter/EventEmitter';
import {
  Advertising,
  MyRequest,
} from '../adAccountsFacebook/adAccountsFacebook';

export const adAccountBingEmitter = new Emitter();

export const adAccountBingEmitterEvents = {
  SET_ACTUAL: 'SET_ACTUAL',
};

function AdAccountsBing() {
  const [actual, setActual] = useState(0);
  adAccountBingEmitter.on(
    adAccountBingEmitterEvents.SET_ACTUAL,
    (index: number) => {
      setActual(prev => index);
    }
  );
  return (
    <div>
      <AdAccountsNav
        actual={actual}
        emitter={adAccountBingEmitter}
        eventName={adAccountBingEmitterEvents.SET_ACTUAL}
      />
      <div className={style.main}>
        {actual === 0 ? <MyRequest comp="Bing" /> : <Advertising comp="Bing" />}
      </div>
    </div>
  );
}

export default AdAccountsBing;
