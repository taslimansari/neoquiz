import type { NavItemConfig } from '@/types/nav';
import { paths } from '@/paths';

export const navItems = [
  { key: 'overview', title: 'Dashboard', href: paths.dashboard.overview, icon: 'chalkboard-teacher' },
  { key: 'quiz', title: 'Quizzes', href: paths.dashboard.quiz, icon: 'clock-user' },
  { key: 'students', title: 'Students', href: paths.dashboard.students, icon: 'users' },
  { key: 'results', title: 'Results', href: paths.dashboard.results, icon: 'presentation-chart'},
  // { key: 'settings', title: 'Settings', href: paths.dashboard.settings, icon: 'gear-six' },
  { key: 'account', title: 'Account', href: paths.dashboard.account, icon: 'user' },
  // { key: 'error', title: 'Error', href: paths.errors.notFound, icon: 'x-square' },
] satisfies NavItemConfig[];
