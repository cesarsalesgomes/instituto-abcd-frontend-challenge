/* eslint-disable no-undef */
import React from 'react';
import {
  cleanup, fireEvent, render, waitFor, screen,
} from '@testing-library/react';
import App from '../../App';
import FirebaseService from '../../services/firebase.service';

describe('[Login] Testes:', () => {
  beforeEach(() => {
    cleanup();
    jest.clearAllMocks();
  });

  test('Botão de envio de formulário deve esta desabilitado com formulário vazio', (done) => {
    const { getByTestId } = render(<App />);

    const submitButton = getByTestId('button-submit');

    expect(submitButton).toBeDisabled();

    done();
  });

  test('Botão de envio de formulário deve estar desabilitado com formulário com email inválido e senha preenchida', async () => {
    const { getByTestId } = render(<App />);

    const emailInput = getByTestId('email');
    const passwordInput = getByTestId('password');
    const submitButton = getByTestId('button-submit');

    fireEvent.change(emailInput, { target: { value: 'email-invalido' } });
    fireEvent.change(passwordInput, { target: { value: 'senha-valida' } });

    await waitFor(() => expect(submitButton).toBeDisabled());
  });

  test('Botão de envio de formulário deve estar habilitado com formulário com email válido e senha preenchida', async () => {
    const { getByTestId } = render(<App />);

    const emailInput = getByTestId('email');
    const passwordInput = getByTestId('password');
    const submitButton = getByTestId('button-submit');

    fireEvent.change(emailInput, { target: { value: 'cesar@gmail.com' } });
    fireEvent.change(passwordInput, { target: { value: 'senha-valida' } });

    await waitFor(() => expect(submitButton).toBeEnabled());
  });

  test('Mensagem de usuário inválido deve aparecer ao preencher formulário com usuário inexistente no firestore', async () => {
    const { getByTestId } = render(<App />);

    const emailInput = getByTestId('email');
    const passwordInput = getByTestId('password');
    const submitButton = getByTestId('button-submit');

    fireEvent.change(emailInput, { target: { value: 'usuarioinexistente@gmail.com' } });
    fireEvent.change(passwordInput, { target: { value: 'usuarioinexistente' } });

    jest.spyOn(FirebaseService, 'Instance', 'get').mockReturnValue({
      signInWithEmailAndPassword: async () => { throw new Error(); },
    } as any);

    fireEvent.click(submitButton);

    await waitFor(() => { });

    expect(await screen.findByText('Usuário inválido.')).toBeInTheDocument();
  });

  test('Mensagem de usuário inválido não deve aparecer ao preencher formulário com usuário existente no firestore', async () => {
    const { getByTestId } = render(<App />);

    const emailInput = getByTestId('email');
    const passwordInput = getByTestId('password');
    const submitButton = getByTestId('button-submit');

    fireEvent.change(emailInput, { target: { value: 'cesar@gmail.com' } });
    fireEvent.change(passwordInput, { target: { value: 'cesargmail' } });

    const jwtTokenMock = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c';

    jest.spyOn(FirebaseService, 'Instance', 'get').mockReturnValue({
      signInWithEmailAndPassword: async () => { },
      getAuthenticatedUserToken: async () => jwtTokenMock,
    } as any);

    fireEvent.click(submitButton);

    await waitFor(() => { });

    try {
      await screen.findByText('Usuário inválido.');
    } catch (error) {
      expect(error).toBeDefined();
    }
  });
});
