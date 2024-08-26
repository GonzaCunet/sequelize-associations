import * as express from "express";
import { sequelize } from "./db";
import { User, Product } from "./db/models";
import * as crypto from "crypto";
import * as jwt from "jsonwebtoken";

sequelize.sync({ force: true }).then((res) => {
  console.log(res);
});

const SECRET = "mipalabrasecretaesbastantedificil";

const app = express();
const port = 3000;
app.use(express.json());

app.get("/test", async (req, res) => {
  res.json({ ok: "todo ok" });
});

// function getSHA256ofJSON(text: string) {
//   return crypto.createHash("sha256").update(JSON.stringify(text)).digest("hex");
// }

//signup
// app.post("/auth", async (req, res) => {
//   const { email, name, birthdate, password } = req.body;
//   let user = await User.findOne({ where: { email } });
//   if (!user) {
//     user = await User.create({
//       email,
//       name,
//       birthdate,
//       password,
//     });
//   }
// // const [user, created] = await User.findOrCreate({
// //   where: { email: req.body.email },
// //   defaults: {
// //     email: req.body.email,
// //     name: req.body.name,
// //     birthdate: req.body.birthdate,
// //   },
// });
// console.log({ created, user });
//   let auth = await Auth.findOne({ where: { user_id: user.get("id") } });
//   if (!auth) {
//     auth = await Auth.create({
//       email,
//       password: getSHA256ofJSON(req.body.password),
//       user_id: user.get("id"),
//     });
//   }
//   console.log({ user, auth });
//   res.json(auth);
// });

// app.post("/auth/token", async (req, res) => {
//   const { email, password } = req.body;
//   const passwordHasheado = getSHA256ofJSON(password);
//   const auth = await Auth.findOne({
//     where: { email, password: passwordHasheado },
//   });
//   const token = jwt.sign({ id: auth.get("user_id") }, SECRET);
//   if (auth) {
//     res.json({ token });
//   } else {
//     res.status(400).json({ error: "user or pass invalid" });
//   }
// });

// function authMiddleware(req, res, next) {
//   const token = req.headers.authorization.split(" ")[1];
//   try {
//     const data = jwt.verify(token, SECRET);
//     req._user = data;
//     next();
//   } catch (e) {
//     res.status(401).json({ error: true });
//   }
// }

// app.get("/me", authMiddleware, async (req, res) => {
//   const user = await User.findByPk(req._user.id);
//   res.json(user);
// });

// app.post("/test", async (req, res) => {
//   User.create(req.body).then(() => {
//     res.json("creado");
//   });
// });
// app.get("/test", async (req, res) => {
//   User.findAll().then((snap) => {
//     res.json(snap);
//   });
// });
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
