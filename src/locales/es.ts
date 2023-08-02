export default {
  components: {
    header: {
      navItems: {
        about: "Acerca de",
        availableColors: "Colores disponibles",
        chosenColors: "Colores elegidos",
        home: "Inicio",
      },
    },
  },
  misc: {
    greetingsMessage: {
      earlyMorning: "Buenas madrugadas",
      morning: "Buenos días",
      afternoon: "Buenas tardes",
      evening: "Buenas noches",
      night: "Buenas noches",
    },
  },
  pages: {
    about: {
      title: "Acerca de",
    },
    availableColors: {
      title: "Elige tus tonos favoritos",
      description:
        "Explora nuestra amplia gama de colores de esmaltes de uñas y selecciona los tonos que reflejen tu estilo.",
      suggestion:
        "Para asegurarte de que veas los colores lo más fiel posible, te recomendamos subir el brillo de tu dispositivo para disfrutar de una experiencia de selección de colores excepcional.",
      welcomeModal: {
        closeButton: "¡Entendido!",
      },
    },
    chosenColors: {
      title: "Colores elegidos",
      description:
        "¡{greetingsMessage}! Aquí tienes los colores seleccionados.",
    },
    error: {
      title: "Algo salió mal...",
      reason:
        "No estamos seguros de lo que pudo haber pasado. Tal vez si lo intentáramos de nuevo...",
      resetButton: "Intentar de nuevo",
    },
    home: {
      title: "Alicia Nails",
    },
  },
} as const;
