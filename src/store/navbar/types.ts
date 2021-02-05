/* eslint-disable no-shadow */
/* eslint-disable no-unused-vars */

/**
 * Action types
 */
export enum NavbarTypes {
  OPEN = '@navbar/OPEN',
  CLOSE = '@navbar/CLOSE',
}

/**
 * Data types
 */
export interface Navbar {
  open: boolean;
}

/**
 * State type
 */
export interface NavbarState {
  readonly data: Navbar | null;
}
