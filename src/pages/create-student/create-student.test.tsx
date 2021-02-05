/* eslint-disable no-undef */
import React from 'react';
import {
  cleanup, fireEvent, render, waitFor, screen,
} from '@testing-library/react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { ToastContainer } from 'react-toastify';
import CreateStudent from './create-student.component';
import store, { persistor } from '../../store';
import FileUtils from '../../utils/File.utils';
import FirebaseService from '../../services/firebase.service';

describe('[Novo estudante] Testes', () => {
  beforeEach(() => {
    cleanup();
    jest.clearAllMocks();
  });

  test('Botão de envio de formulário deve esta desabilitado com formulário vazio', (done) => {
    const { getByTestId } = render(
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <CreateStudent />
        </PersistGate>
      </Provider>,
    );

    const submitButton = getByTestId('button-submit');

    expect(submitButton).toBeDisabled();

    done();
  });

  test('Espera que botão de envio de estudante esteja habilitado', async () => {
    const { getByTestId } = render(
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <CreateStudent />
        </PersistGate>
      </Provider>,
    );

    const avatarInput = getByTestId('avatar');
    const nameInput = getByTestId('name');
    const schoolInput = getByTestId('school');
    const terms = getByTestId('terms');

    const submitButton = getByTestId('button-submit');

    jest.spyOn(FileUtils, 'createObjectUrl').mockReturnValueOnce('image_url');

    fireEvent.change(avatarInput, { target: { files: [new Blob(['file contents'], { type: 'text/plain' })] } });
    fireEvent.change(nameInput, { target: { value: 'Cesar' } });
    fireEvent.change(schoolInput, { target: { value: 'Objetivo' } });
    fireEvent.click(terms);

    await waitFor(() => expect(submitButton).toBeEnabled());
  });

  test('Cria estudante com sucesso', async () => {
    const { getByTestId } = render(
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <ToastContainer />
          <CreateStudent />
        </PersistGate>
      </Provider>,
    );

    const avatarInput = getByTestId('avatar');
    const nameInput = getByTestId('name');
    const schoolInput = getByTestId('school');
    const terms = getByTestId('terms');

    const submitButton = getByTestId('button-submit');

    jest.spyOn(FileUtils, 'createObjectUrl').mockReturnValueOnce('image_url');

    fireEvent.change(avatarInput, { target: { files: [new Blob(['file contents'], { type: 'text/plain' })] } });
    fireEvent.change(nameInput, { target: { value: 'Cesar' } });
    fireEvent.change(schoolInput, { target: { value: 'Objetivo' } });
    fireEvent.click(terms);

    jest.spyOn(FirebaseService, 'Instance', 'get').mockReturnValue({
      uploadImageOnFirestorage: async () => ({} as any),
      createStudent: async () => ({} as any),
    } as any);

    fireEvent.click(submitButton);

    await waitFor(() => { });

    expect(await screen.findByText('Estudante criado com sucesso.')).toBeInTheDocument();
  });
});
