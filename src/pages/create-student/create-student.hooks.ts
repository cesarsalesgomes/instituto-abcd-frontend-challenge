/* eslint-disable max-len */
import { useDispatch } from 'react-redux';
import { Dispatch, useCallback } from 'react';
import { useHistory } from 'react-router';
import { toast } from 'react-toastify';

import { loadRequest, loadSuccess, loadFailure } from '../../store/students/create/actions';
import FirebaseService from '../../services/firebase.service';
import RouteConstants from '../../constants/routes';
import MessagesConstants from '../../constants/messages';
import SchoolYear from '../../enums/school-grade.enum';

function dispatchSuccess(dispatch: Dispatch<any>, history: any) {
  dispatch(loadSuccess());
  history.push(RouteConstants.STUDENTS_ROUTE);
  toast.success(MessagesConstants.CREATE_STUDENT_SUCCESS, { position: toast.POSITION.BOTTOM_RIGHT });
}

function dispatchError(dispatch: Dispatch<any>) {
  dispatch(loadFailure());
  toast.error(MessagesConstants.CREATE_STUDENT_ERROR);
}

const useCreateStudent = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const createStudent = useCallback(async (name: string, schoolYear: SchoolYear, image: File) => {
    dispatch(loadRequest());

    try {
      const imageUrl = await FirebaseService.Instance.uploadImageOnFirestorage(image);

      await FirebaseService.Instance.createStudent({ name, schoolYear, imageUrl });

      dispatchSuccess(dispatch, history);
      history.push(RouteConstants.STUDENTS_ROUTE);
    } catch (error) {
      dispatchError(dispatch);
    }
  }, [dispatch, history]);

  return createStudent;
};

export default useCreateStudent;
