import dotenv from "dotenv";

dotenv.config();

import express from "express";
import cors from "cors";
import { createClient } from "./lib/supabase";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.get("/api/todos", async (req, res) => {
  const supabase = createClient({ req, res });

  const { data, error } = await supabase.from("todos").select();
  console.log(data, error);

  res.json(data);
});

app.listen(PORT, () => {
  console.log(process.env.SUPABASE_URL);
  console.log(`Server running on port ${PORT}`);
});
