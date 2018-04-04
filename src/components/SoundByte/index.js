import React from 'react'

const SoundByte = ({ title, file, play }) => (
  <div>
    <button
      onClick={() => play(file)}
      >{title}</button>
  </div>
)

export default SoundByte
