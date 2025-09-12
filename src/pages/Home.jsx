import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div style={{
      minHeight: '100vh',
      background: '#f4f6f5',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 16,
      border: '4px solid #dbe6e4',
      maxWidth: 360,
      margin: '24px auto',
      boxShadow: '0 2px 12px #0001',
      padding: 24
    }}>
      <div style={{ marginBottom: 32, marginTop: 32 }}>
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 24 }}>
          <svg width="64" height="64" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M32 12v28m0 0l-8-8m8 8l8-8" stroke="#6C4EEA" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
        <h1 style={{ textAlign: 'center', fontWeight: 700, fontSize: 28, margin: 0, color: '#23272f' }}>GaragemFácil</h1>
        <p style={{ textAlign: 'center', color: '#6c6c6c', fontSize: 16, margin: '12px 0 0 0' }}>
          Alugue ou anuncie sua garagem com facilidade.
        </p>
      </div>
      <Link to="/register" style={{
        display: 'block',
        width: '100%',
        background: '#6C4EEA',
        color: '#fff',
        fontWeight: 600,
        fontSize: 18,
        border: 'none',
        borderRadius: 8,
        padding: '14px 0',
        marginBottom: 16,
        textAlign: 'center',
        textDecoration: 'none',
        boxShadow: '0 1px 4px #0001'
      }}>
        <span style={{ marginRight: 8, fontSize: 20 }}>＋</span> Cadastrar minha garagem
      </Link>
      <Link to="/login" style={{
        display: 'block',
        width: '100%',
        background: '#fff',
        color: '#6C4EEA',
        fontWeight: 600,
        fontSize: 18,
        border: '2px solid #6C4EEA',
        borderRadius: 8,
        padding: '14px 0',
        marginBottom: 32,
        textAlign: 'center',
        textDecoration: 'none',
        boxShadow: '0 1px 4px #0001'
      }}>
        <span style={{ marginRight: 8, fontSize: 20 }}>🔍</span> Procurar garagem
      </Link>
      <div style={{ textAlign: 'center', color: '#888', fontSize: 16, marginTop: 24 }}>
        <Link to="/login" style={{ color: '#888', textDecoration: 'none', marginRight: 8 }}>Login</Link>
        /
        <Link to="/register" style={{ color: '#888', textDecoration: 'none', marginLeft: 8 }}>Registrar</Link>
      </div>
    </div>
  );
}
