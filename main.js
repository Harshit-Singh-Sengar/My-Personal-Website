import  express  from "express";
import bodyParser from "body-parser";
import _ from "lodash";

const app = express();
const port = 3000;


app.use(express.static("public"));

app.get("/", (req, res) => {
    res.render("home.ejs");
  });

  app.get("/portfilo", (req, res) => {
    res.render("portfilo.ejs");
  });

  app.get("/about", (req, res) => {
    res.render("about.ejs");
  });

  app.get("/contact", (req, res) => {
    res.render("contact.ejs");
  });

  app.get("/servies", (req, res) => {
    res.render("services.ejs");
  });

  app.get("/clients", (req, res) => {
    res.render("clients.ejs");
  })

  app.get("/web", (req, res) => {
    res.render("webS1.ejs");
  });

  app.get("/web2", (req, res) => {
    res.render("webS2.ejs");
  });

  app.get("/web3", (req, res) => {
    res.render("webS3.ejs");
  });

  app.get("/web4", (req, res) => {
    res.render("webS4.ejs");
  });

  app.get("/web5", (req, res) => {
    res.render("webS5.ejs");
  });

  app.get("/web6", (req, res) => {
    res.render("webS6.ejs");
  });




  
    app.get("/:topics", (req, res) => {
    console.log(req.params.topics);

    });

  
app.listen(port, () => {
    console.log(`Severs is running on port ${port}`);
});