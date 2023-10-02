import ambilDataUser from "./ambilDataUser.js";
import helloWorld from "./helloworld.js";
import ambilDataUserAsync from "./ambilDataUserAsnyc.js";

async function messages() {
  const msg = await helloWorld();
  console.log(msg);
}

messages();
ambilDataUser();
ambilDataUserAsync();
