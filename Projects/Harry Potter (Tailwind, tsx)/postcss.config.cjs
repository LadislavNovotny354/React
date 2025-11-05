// postcss.config.cjs
module.exports = {
  plugins: {
    // Toto řekne PostCSS, že má načíst Tailwind CSS plugin
    '@tailwindcss/postcss': {}, 
    // Toto je volitelné, ale doporučené pro prefixy
    autoprefixer: {},
  }
}