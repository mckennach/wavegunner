import React from 'react';
import { WaveGunnerProps } from '../types';

const WaveGunner=({ label }: WaveGunnerProps)=> {
  
  return (
    <div>
      <button className="test">{label}</button>
    </div>
  );
}
export default WaveGunner;