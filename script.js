// if, else. nested if

console.log("contoh if");
let harga = 2000000;
if (harga >= 500000) {
  console.log("Mahal");
}

console.log("contoh else");
harga = 50000;
if (harga >= 500000) {
  console.log("Mahal");
} else {
  console.log("Murah");
}

console.log("contoh nested if");
const password = "rahasia";
if (password) {
  if (password !== "rahasia") {
    console.log("Username atau password salah");
  } else {
    console.log("selamat datang");
  }
} else {
  console.log("Masukan password!");
}

// switch case
const rank = "immortal";
switch (rank.toLowerCase()) {
  case "herald":
    console.log("pemula");
    break;
  case "guardian":
    console.log("masih pemula");
    break;
  case "crusader":
    console.log("sudah mulai mengenal game");
    break;
  case "archon":
    console.log("mulai bisa main");
    break;
  case "legend":
    console.log("mulai jago");
    break;
  case "ancient":
    console.log("jago");
    break;
  case "divine":
    console.log("jago banget");
    break;
  case "immortal":
    console.log("sepuh");
    break;
  default:
    console.log("mohon masukan rank game DOTA 2");
    break;
}

// for statement
for (let i = 1; i < 50; i++) {
  console.log(`saya aslinya ${i} orang`);
}

// while, do while
let iteration = 1;
while (iteration <= 20) {
  console.log(`while ke ${iteration}`);
  iteration++;
}

let condition = false;
do {
  console.log("Hello from do while");
} while (condition);

// function
const introduce = (name) => {
  console.log(`hello ${name}, my name is Nayandra`);
};
introduce("Agus");
