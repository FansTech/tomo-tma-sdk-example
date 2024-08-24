export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        bg: '#0A090C',
        primary: '#FF5C00',
        card: '#1A1A1A',
        btn: '#dc5103',
        text: '#000000'
      },
      maxWidth: {
        xxl: '2560px'
      },
      screens: {
        sm: '100px'
      }
    }
  },
  plugins: []
}
