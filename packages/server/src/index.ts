import express from "express";
import cors from "cors";
import { User, ApiResponse } from "shared";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// Sample data
const users: User[] = [
  { id: "1", name: "John Doe", email: "john@example.com" },
  { id: "2", name: "Jane Smith", email: "jane@example.com" },
];

app.get("/api/users", (req, res) => {
  const response: ApiResponse<User[]> = {
    data: users,
    status: 200,
    message: "Users fetched successfully",
  };

  res.json(response);
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
