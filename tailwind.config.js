/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "bg-image": "url('/public/assets/Frame 73.png')",
        testimonial: "url('/public/assets/Testimonial 1.png')",
        outcome: "url('/public/assets/Gallay 1.png')",
        treatment: "url('/public/assets/Frame 68 1.png')",
        banner: "url('/public/assets/Frame 20.png')",
        doctor: "url('/public/assets/doctor.png')",
        form: "url('/public/assets/laboratory-563423_1920.jpg')",
      },
      fontFamily: {
        rubik: ['"Rubik"', "sans-serif"],
      },
      screens: {
        xssm: "390px",
        ssm: "440px",
      },
    },
  },
  plugins: ["@tailwindcss/line-clamp"],
};
