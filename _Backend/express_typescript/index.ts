import express, { Request, Response, Application } from "express";

const PORT = 8000;

const app: Application = express();

app.get("/", (req: Request, res: Response) => {
  return res.send({
    hello: "world",
  });
});

app.post("/", (req: Request, res: Response) => {
  return res.send({
    hello: "INI METHOD POST",
  });
});

app.put("/", (req: Request, res: Response) => {
  return res.send({
    hello: "INI METHOD PUT",
  });
});

app.patch("/", (req: Request, res: Response) => {
  return res.send({
    hello: "INI METHOD PATCH",
  });
});

app.delete("/", (req: Request, res: Response) => {
  return res.send({
    hello: "INI METHOD DELETE",
  });
});

app.listen(PORT, () => {
  console.log("application run on port => ", PORT);
});
