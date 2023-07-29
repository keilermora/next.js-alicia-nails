export default function getGreetingsMessage() {
  const today = new Date();
  const hours = today.getHours();

  if (hours <= 6) {
    return "¡Buenas madrugadas!";
  } else if (hours <= 11) {
    return "¡Buenos días!";
  } else if (hours <= 18) {
    return "¡Buenas tardes!";
  }

  return "¡Buenas noches!";
}
