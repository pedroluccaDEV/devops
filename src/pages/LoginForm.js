import React, { useState } from 'react';
import { validarLogin } from '../utils/auth';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [mensagem, setMensagem] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validarLogin(email, senha)) {
      setMensagem('Login bem-sucedido!');
    } else {
      setMensagem('Email ou senha inválidos!');
    }
  };

  return (
    <section className="section">
      <div className="container">
        <h3 className="title">Formulário de Login</h3>
      </div>
      <div className="container">
        <form className="form" onSubmit={handleSubmit}>
          <div className="field">
            <label className="label">Email</label>
            <div className="control">
              <input
                className="input"
                type="email"
                placeholder="Digite seu email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>
          <div className="field">
            <label className="label">Senha</label>
            <div className="control">
              <input
                className="input"
                type="password"
                placeholder="Digite sua senha"
                value={senha}
                onChange={(e) => setSenha(e.target.value)}
              />
            </div>
          </div>
          <div className="field">
            <button type="submit" className="button is-link">
              Entrar
            </button>
          </div>
          {mensagem && (
            <div className="notification is-info">
              {mensagem}
            </div>
          )}
        </form>
      </div>
    </section>
  );
};

export default LoginForm;
