import React from 'react';
const WaveGunner=(props)=> {
  const {label} = props;
  return (
    <div>
      <button class="test">{label}</button>
    </div>
  );
}
export { WaveGunner };