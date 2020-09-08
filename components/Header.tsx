import React from 'react';
import { config } from '../globals';

export const Header: React.FC = () => (
  <div
    style={{
      top: 0,
      width: '100%',
      height: '50px',
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      backgroundColor: config.accentColor,
      padding: '30px',
      fontSize: '12pt',
    }}
  >
    <a href="/" style={{ textDecoration: 'none' }}>
      <p style={{ color: 'white' , fontSize: "24px" }}>{config.siteName}</p>
    </a>
    <div style={{ flex: 1 }} />
    <a href="https://github.com/IKKO-Ohta" style={{ textDecoration: 'none' }}>
    <img
        src="/GitHub-Mark-32px.png"
        alt="github icon"
        height="32"
        width="32"
      />
    </a>
  </div>
);
