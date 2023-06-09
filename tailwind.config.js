/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx}",
    "./src/components/**/*.{html,js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        discord_blue: "#295DE7",
        discord_blurple: "#7289da",
        discord_purple: "#5865f2",
        discord_green: "#3ba55c",
        discord_serverBg: "#36393f",
        discord_channelsBg: "#2f3136",
        discord_serverNameHoverBg: "#34373c",
      },
      height: {
        "83vh": "83vh",
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ],
};
