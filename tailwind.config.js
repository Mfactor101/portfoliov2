module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  daisyui: {
    themes: [
      {
        mytheme: {       
          "primary": "#53B7FF",        
          "secondary": "#CF8ACF",      
          "accent": "#C4C4C4",     
          "neutral": "#575757",     
          "base-100": "#2d2d2d",      
          "info": "#3ABFF8",      
          "success": "#36D399",      
          "warning": "#FBBD23",      
          "error": "#F87272",
        },
      },
    ],
  },
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
}
