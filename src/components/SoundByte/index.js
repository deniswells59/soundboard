import React from 'react'

const SoundByte = ({ title, file, play }) => (
  <div className="col-xs-12 col-sm-6 col-lg-4">
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
        color: 'rgba(0,0,0,.87)',
      }}
    >{title}</button>
  </div>
)

export default SoundByte
