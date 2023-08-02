export default {
  components: {
    header: {
      navItems: {
        about: "About",
        availableColors: "Available colors",
        chosenColors: "Chosen colors",
        home: "Home",
      },
    },
  },
  misc: {
    greetingsMessage: {
      earlyMorning: "Good early morning",
      morning: "Good morning",
      afternoon: "Good afternoon",
      evening: "Good evening",
      night: "Good night",
    },
  },
  pages: {
    about: {
      title: "About",
    },
    availableColors: {
      title: "Choose your favorite colors",
      description:
        "Explore our wide range of nail polish colors and select those that reflect your style.",
      suggestion:
        "To ensure that you see the colors as faithfully as possible, turn up the brightness of your device to enjoy an exceptional color choosing experience.",
      welcomeModal: {
        closeButton: "Got it!",
      },
    },
    chosenColors: {
      title: "Chosen colors",
      description: "{greetingsMessage}! Here you have the chosen colors.",
    },
    error: {
      title: "Something went wrong...",
      reason:
        "We are not sure what could have happened. Maybe if we try it again...",
      resetButton: "Try again",
    },
    home: {
      title: "Alicia Nails",
    },
  },
} as const;
