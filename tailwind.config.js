/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{html,js,jsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend:{
      colors:{
        'slate':{
           50:"",
           100:"#f8fafc",
           200:"#e2e8f0",
           300:"#cbd5e1",
           400:"#94a3b8",
            500:"#64748B",
           600:"#475569",
           700:"#334155",
           800:"#1e293b",
           900:"#0f172a",
        },
        'rose':{
          500:'f43f5e',
          600:'e11d48'
        }
      },
      fontFamily:{
        'Nunito':['Nunito','Helvetica, Arial, sans-serif']
      }
    }
    
  },
  plugins: [],
}

