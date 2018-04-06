import React from 'react'

const SoundByte = ({ title, file, play }) => (
  <div>
    <button
      onClick={() => play(file)}
      style={{
        fontFamily: "'Reenie Beanie', cursive",
        width: '100%',
        border: '2px solid #fff',
        margin: '15px 0',
        fontSize: '2rem',
        textTransform: 'uppercase',
        minHeight: '48px',
        backgroundColor: '#ffffff96',
      }}
    >{title}</button>
  </div>
)

export default SoundByte
