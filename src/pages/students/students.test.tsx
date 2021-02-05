/* eslint-disable no-undef */
import React from 'react';
import {
  cleanup, fireEvent, render, screen,
} from '@testing-library/react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import store, { persistor } from '../../store';
import FirebaseService from '../../services/firebase.service';
import StudentsNavbar from '../../components/students/navbar/students-navbar.component';
import StudentsList from '../../components/students/list/students-list.component';
import SchoolYear from '../../enums/school-grade.enum';

describe('[Lista de estudantes] Testes', () => {
  beforeEach(() => {
    cleanup();
    jest.clearAllMocks();
  });

  test('Nenhum estudante cadastrado', async () => {
    jest.spyOn(FirebaseService, 'Instance', 'get').mockReturnValue({
      getStudents: async () => [],
    } as any);

    render(
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <StudentsNavbar />
          <StudentsList />
        </PersistGate>
      </Provider>,
    );

    expect(await screen.findByText('Nenhum estudante cadastrado')).toBeInTheDocument();
  });

  test('Estudante Pré cadastrado apresentado na lista', async () => {
    jest.spyOn(FirebaseService, 'Instance', 'get').mockReturnValue({
      getStudents: async () => [{ name: 'César', schoolYear: SchoolYear.PRE, imageUrl: '' }],
    } as any);

    render(
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <StudentsNavbar />
          <StudentsList />
        </PersistGate>
      </Provider>,
    );

    expect(await screen.findByText('César')).toBeInTheDocument();
  });

  test('Estudante 1° ano cadastrado apresentando na lista', async () => {
    jest.spyOn(FirebaseService, 'Instance', 'get').mockReturnValue({
      getStudents: async () => [{ name: 'César', schoolYear: SchoolYear.FIRST, imageUrl: '' }],
    } as any);

    render(
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <StudentsNavbar />
          <StudentsList />
        </PersistGate>
      </Provider>,
    );

    expect(await screen.findByText('César')).toBeInTheDocument();
  });

  test('Estudante 2° ano cadastrado apresentado na lista', async () => {
    jest.spyOn(FirebaseService, 'Instance', 'get').mockReturnValue({
      getStudents: async () => [{ name: 'César', schoolYear: SchoolYear.SECOND, imageUrl: '' }],
    } as any);

    render(
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <StudentsNavbar />
          <StudentsList />
        </PersistGate>
      </Provider>,
    );

    expect(await screen.findByText('César')).toBeInTheDocument();
  });

  test('Estudante 3° ano cadastrado apresentado na lista', async () => {
    jest.spyOn(FirebaseService, 'Instance', 'get').mockReturnValue({
      getStudents: async () => [{ name: 'César', schoolYear: SchoolYear.THIRD, imageUrl: '' }],
    } as any);

    render(
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <StudentsNavbar />
          <StudentsList />
        </PersistGate>
      </Provider>,
    );

    expect(await screen.findByText('César')).toBeInTheDocument();
  });

  test('Filtro por nome aplicado retornando estudantes', async () => {
    jest.spyOn(FirebaseService, 'Instance', 'get').mockReturnValue({
      getStudentsWithFilterName: async () => [{ name: 'César', schoolYear: SchoolYear.THIRD, imageUrl: '' }],
    } as any);

    const { getByTestId } = render(
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <StudentsNavbar />
          <StudentsList />
        </PersistGate>
      </Provider>,
    );

    const searchInput = getByTestId('search');

    fireEvent.change(searchInput, { target: { value: 'Cesar' } });

    expect(await screen.findByText('César')).toBeInTheDocument();
  });

  test('Filtro por nome aplicado não retornando estudantes', async () => {
    jest.spyOn(FirebaseService, 'Instance', 'get').mockReturnValue({
      getStudentsWithFilterName: async () => [],
    } as any);

    const { getByTestId } = render(
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <StudentsNavbar />
          <StudentsList />
        </PersistGate>
      </Provider>,
    );

    const searchInput = getByTestId('search');

    fireEvent.change(searchInput, { target: { value: 'Cesar' } });

    expect(await screen.findByText('Nenhum estudante cadastrado')).toBeInTheDocument();
  });
});
