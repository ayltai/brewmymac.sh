import useMediaQuery from '@mui/material/useMediaQuery';
import { TypedUseSelectorHook, useDispatch, useSelector, } from 'react-redux';

import { AppDispatch, AppState, } from '../states';

export const useAppDispatch : () => AppDispatch = useDispatch;

export const useAppSelector : TypedUseSelectorHook<AppState> = useSelector;

export const useDesktopMode = () => useMediaQuery('(min-width: 900px)');
