import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Register() {
  const [role, setRole] = useState('Proprietário');
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
      <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 24 }}>
        <svg width="48" height="48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="8" y="8" width="32" height="32" rx="8" fill="#fff" stroke="#6C4EEA" strokeWidth="2"/>
          <path d="M16 24h16M16 28h16" stroke="#6C4EEA" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      </div>
      <h2 style={{ textAlign: 'center', fontWeight: 700, fontSize: 24, margin: 0, color: '#23272f' }}>Criar Conta</h2>
      <p style={{ textAlign: 'center', color: '#6c6c6c', fontSize: 15, margin: '10px 0 24px 0' }}>
        Preencha os dados para se cadastrar.
      </p>
      <form>
        <div style={{ marginBottom: 16 }}>
          <label htmlFor="name" style={{ fontWeight: 500, color: '#23272f' }}>Nome</label>
          <input id="name" type="text" placeholder="Seu nome completo" style={{ width: '100%', padding: 10, marginTop: 4, border: '1.5px solid #e0e0e0', borderRadius: 8, fontSize: 16 }} />
        </div>
        <div style={{ marginBottom: 16 }}>
          <label htmlFor="email" style={{ fontWeight: 500, color: '#23272f' }}>Email</label>
          <input id="email" type="email" placeholder="seuemail@exemplo.com" style={{ width: '100%', padding: 10, marginTop: 4, border: '1.5px solid #e0e0e0', borderRadius: 8, fontSize: 16 }} />
        </div>
        <div style={{ marginBottom: 8 }}>
          <label htmlFor="password" style={{ fontWeight: 500, color: '#23272f' }}>Senha</label>
          <input id="password" type="password" placeholder="Crie uma senha" style={{ width: '100%', padding: 10, marginTop: 4, border: '1.5px solid #e0e0e0', borderRadius: 8, fontSize: 16 }} />
        </div>
        <div style={{ display: 'flex', gap: 8, marginBottom: 16 }}>
          <button type="button" onClick={() => setRole('Proprietário')} style={{
            flex: 1,
            background: role === 'Proprietário' ? '#6C4EEA' : '#fff',
            color: role === 'Proprietário' ? '#fff' : '#23272f',
            border: '1.5px solid #6C4EEA',
            borderRadius: 8,
            padding: '10px 0',
            fontWeight: 600,
            fontSize: 16,
            cursor: 'pointer'
          }}>Proprietário</button>
          <button type="button" onClick={() => setRole('Inquilino')} style={{
            flex: 1,
            background: role === 'Inquilino' ? '#6C4EEA' : '#fff',
            color: role === 'Inquilino' ? '#fff' : '#23272f',
            border: '1.5px solid #6C4EEA',
            borderRadius: 8,
            padding: '10px 0',
            fontWeight: 600,
            fontSize: 16,
            cursor: 'pointer'
          }}>Inquilino</button>
        </div>
        <button type="submit" style={{ width: '100%', padding: 12, background: '#6C4EEA', color: '#fff', border: 'none', borderRadius: 8, fontWeight: 700, fontSize: 18, marginBottom: 8 }}>Registrar</button>
        <Link to="/login" style={{ width: '100%', display: 'block', padding: 12, background: '#f3f4f6', color: '#23272f', border: 'none', borderRadius: 8, fontWeight: 700, fontSize: 18, textAlign: 'center', textDecoration: 'none' }}>Já tenho conta</Link>
      </form>
      <p style={{ color: '#888', fontSize: 12, marginTop: 24, textAlign: 'center' }}>
        Ao continuar, você concorda com nossos <a href="#" style={{ color: '#6C4EEA', textDecoration: 'underline' }}>Termos de Serviço</a> e <a href="#" style={{ color: '#6C4EEA', textDecoration: 'underline' }}>Política de Privacidade</a>.
      </p>
    </div>
  );
}
