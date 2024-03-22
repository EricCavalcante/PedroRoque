/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        Bg: '#1c1c1c',
        instagramRosa: '#dd2a7b',
        instagramAmarelo: '#feda77',
        whatsapp: '#25D366',
        Email:'',
        eric: '#294260'
      },
      fontFamily:{
        Titulo: ["Oswald", 'sans-serif'],
        Texto: ["Hind", 'sans-serif'],
      }

    },
  },
  plugins: [],
}

