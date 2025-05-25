/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      colors: {
        // Tema CLARO: Elegância Profissional
        claro: {
          fundo: "#f9f9f9",
          primario: "#1e293b",       // Azul petróleo
          secundario: "#475569",     // Cinza azulado
          destaque: "#d97706",       // Laranja queimado
          contraste: "#ffffff",
          titulo: "#0f172a",
          texto: "#334155",
        },

        // Tema ESCURO: Sofisticação Noturna
        escuro: {
          fundo: "#0b0c10",
          primario: "#1f2833",       // Azul escuro acinzentado
          secundario: "#45a29e",     // Verde petróleo suave
          destaque: "#66fcf1",       // Azul piscina
          contraste: "#ffffff",
          titulo: "#c5c6c7",
          texto: "#c5c6c7",
        },

        // Tema NEUTRO: Clássico Dourado
        neutro: {
          fundo: "#2c2c2c",
          primario: "#8b6a00",       // Dourado escuro
          secundario: "#f5deb3",     // Bege claro
          destaque: "#ffd700",       // Ouro
          contraste: "#ffffff",
          titulo: "#ffffff",
          texto: "#e4e4e4",
        },
      },
    },
  },
  plugins: [],
}
