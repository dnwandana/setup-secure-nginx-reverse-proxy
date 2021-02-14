const express = require("express");
const cors = require("cors");
const { nanoid } = require("nanoid");
const dayjs = require("dayjs");

const app = express();
const PORT = 5000 || process.env.PORT;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    data: {
      requestId: nanoid(),
      requestDate: dayjs().format("DD/MMM/YYYY, HH:mm:ss."),
    },
  });
});

app.listen(PORT, () => {
  console.log(`Server up and running on port: ${PORT}`);
});
