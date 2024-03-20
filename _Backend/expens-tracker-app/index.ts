import express, { Request, Response } from "express";
import cors from "cors";
import fs from "fs";
import bodyParser from "body-parser";
import { v4 as uuidv4 } from "uuid";
import { format } from "date-fns";

const PORT = 8080;

const app = express();
app.use(cors());
app.use(bodyParser());

app.get("/api/expenss", (req: Request, res: Response) => {
  const expenss: any = fs.readFileSync("./data/expenss.json");

  res.status(200).send(expenss);
});

app.get("/api/expenss/:id", (req: Request, res: Response) => {
  const expenss: any = fs.readFileSync("./data/expenss.json");
  const datas = JSON.parse(expenss);
  const index = datas.findIndex((x: any) => x.id == req.params.id);

  res.status(200).send(JSON.stringify(datas[index]));
});

app.get("/api/expenss/category/:category", (req: Request, res: Response) => {
  const expenss: any = fs.readFileSync("./data/expenss.json");
  let datas = JSON.parse(expenss);
  console.log(datas);
  datas = datas.filter((x: any) => x.category == req.params.category);
  console.log(datas, req.params.category);

  res.status(200).send(JSON.stringify(datas));
});

app.get("/api/expenss/start/:start/end/:end", (req: Request, res: Response) => {
  const expenss: any = fs.readFileSync("./data/expenss.json");
  let datas = JSON.parse(expenss);
  datas = datas.filter(
    (x: any) =>
      Date.parse(x.date) >= Date.parse(req.params.start) &&
      Date.parse(req.params.end) >= Date.parse(x.date)
  );
  console.log(datas, req.params.start);

  res.status(200).send(JSON.stringify(datas));
});

app.post("/api/expenss", (req: Request, res: Response) => {
  const expenss: any = fs.readFileSync("./data/expenss.json");
  const datas = JSON.parse(expenss);
  const { name, nominal, category } = req.body;
  datas.push({
    id: uuidv4(),
    name,
    nominal,
    category,
    date: format(new Date(), "yyyy-MM-dd"),
  });

  fs.writeFileSync("./data/expenss.json", JSON.stringify(datas));
  res.status(201).send(fs.readFileSync("./data/expenss.json"));
});

app.patch("/api/expenss/:id", (req: Request, res: Response) => {
  const expenss: any = fs.readFileSync("./data/expenss.json");
  const datas = JSON.parse(expenss);
  const index = datas.findIndex((x: any) => x.id == req.params.id);

  for (const key in datas[index]) {
    for (const key2 in req.body) {
      if (key === key2) {
        datas[index][key] = req.body[key2];
      }
    }
  }

  fs.writeFileSync("./data/expenss.json", JSON.stringify(datas));
  res.status(200).send(fs.readFileSync("./data/expenss.json"));
});

app.delete("/api/expenss/:id", (req: Request, res: Response) => {
  const expenss: any = fs.readFileSync("./data/expenss.json");
  const datas = JSON.parse(expenss);
  const index = datas.findIndex((x: any) => x.id == req.params.id);

  datas.splice(index, 1);
  fs.writeFileSync("./data/expenss.json", JSON.stringify(datas));
  res.status(200).send(fs.readFileSync("./data/expenss.json"));
});

app.listen(PORT, () => {
  console.log("listening on port" + PORT);
});
