/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    backgroundColor: (theme) => ({
      ...theme('colors'),
      'light-green-bg-1': 'rgba(157, 210, 184, 0.46)',
      'light-yellow-bg-1': 'rgba(255, 225, 122, 0.23)',
      'gray-bg-1': '#F5F5F5',
      'white-bg-1': 'rgba(255, 255, 255, 0.80)',
      'light-green-bg-1': '#58C08E',
      'light-green-bg-2': 'rgba(88, 192, 142, 0.42)',
      'darkened-background':
        'linear-gradient(0deg, rgba(0, 0, 0, 0.20) 0%, rgba(0, 0, 0, 0.20) 100%), url(<path-to-image>), lightgray 0px -791.444px / 100% 241.342% no-repeat',
      'transparent-bg-1': 'rgba(255, 255, 255, 0.80)',
    }),
    extend: {},
  },
  plugins: [],
};
