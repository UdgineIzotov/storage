import { Main } from '../App'
import { CutoutText } from '../tricks/cutout-text';

export const routes = [
  { path: '/', component: Main, exact: true },
  { path: '/cutout-text', component: CutoutText, exact: false },
];
