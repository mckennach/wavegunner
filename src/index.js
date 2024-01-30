import React from 'react';
const WaveGunner=(props)=> {
  const {label} = props;
  return (
    <div>
      <button>{label}</button>
    </div>
  );
}
export { WaveGunner };