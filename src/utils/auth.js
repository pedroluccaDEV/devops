import users from '../data/users';

export function validarLogin(email, senha) {
  return users.some(user => user.email === email && user.senha === senha);
}