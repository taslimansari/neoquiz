export const paths = {
  home: '/',
  auth: { signIn: '/auth/sign-in', signUp: '/auth/sign-up', resetPassword: '/auth/reset-password' },
  dashboard: {
    overview: '/dashboard',
    quiz: '/dashboard/quiz',
    students: '/dashboard/students',
    results: '/dashboard/results',
    account: '/dashboard/account',
    // settings: '/dashboard/settings',
  },
  errors: { notFound: '/errors/not-found' },
} as const;
