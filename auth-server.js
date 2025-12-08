// auth-server.js
import express from "express";
import ImageKit from "imagekit";
import cors from "cors";

const app = express();
app.use(cors());

const imagekit = new ImageKit({
  publicKey: "public_AEWBXm8iaDupxR8ePsqVAC+I3vI=",
  urlEndpoint: "https://ik.imagekit.io/l9b3wes8n",
  privateKey: "private_27j7bgJsV0WsG5VFI16Gg1CuaMA=", // MERE SE SHARE MAT KARNA
});

app.get("/imagekit-auth", (req, res) => {
  const token = imagekit.getAuthenticationParameters();
  res.json(token);
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log("ImageKit auth server running on http://localhost:" + PORT);
});
