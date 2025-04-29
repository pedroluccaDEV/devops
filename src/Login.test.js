import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Login from './pages/LoginForm';

describe('Formulário de Login', () => {
  test('deve mostrar "Acessado com sucesso!" para login correto', () => {
    render(<Login />);
    fireEvent.change(screen.getByPlaceholderText(/email/i), { target: { value: 'pedro.lucca@pucpr.edu.br' } });
    fireEvent.change(screen.getByPlaceholderText(/senha/i), { target: { value: '123456' } });
    fireEvent.click(screen.getByText(/entrar/i));
    expect(screen.getByText(/Login bem-sucedido!/i)).toBeInTheDocument();
  });

  test('deve mostrar "Usuário ou senha incorretos!" para login incorreto', () => {
    render(<Login />);
    fireEvent.change(screen.getByPlaceholderText(/email/i), { target: { value: 'errado@teste.com' } });
    fireEvent.change(screen.getByPlaceholderText(/senha/i), { target: { value: 'errada' } });
    fireEvent.click(screen.getByText(/entrar/i));
    expect(screen.getByText(/Email ou senha inválidos!/i)).toBeInTheDocument();
  });
});
