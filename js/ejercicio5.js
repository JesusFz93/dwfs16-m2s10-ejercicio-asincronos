function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function uppercaseString(s) {
  await sleep(2000);
  return s.toUpperCase();
}

uppercaseString("otra cosa").then(console.log);
