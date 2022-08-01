import '@emotion/react';
import { AppTheme } from './types';

declare module '@emotion/react' {
    export interface DefaultTheme extends AppTheme {}
}

