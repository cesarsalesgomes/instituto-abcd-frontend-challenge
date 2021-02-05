import { action } from 'typesafe-actions';
import { NavbarTypes } from './types';

export const openNavbar = () => action(NavbarTypes.OPEN);

export const closeNavbar = () => action(NavbarTypes.CLOSE);
