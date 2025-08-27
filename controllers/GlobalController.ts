import { Controller } from "../libs/controller";

const jobshome = [
  { id: 1, 
    jobname: "Developpeur(se) junior TS React API", jobdesc: "Lorem ipsum vitae consequat quisque diam dui parturient sollicitudin convallis posuere molestie quisque nec venenatis faucibus fusce accumsan integer netus faucibus venenatis pharetra amet et rutrum vitae fusce etiam feugiat convallis suspendisse turpis velit duis dictum dignissim massa ipsum id dui quam malesuada pretium euismod turpis euismod sit tempor." },
  { id: 2, 
    jobname: "Developpeur(se) junior TS React API", jobdesc: "Lorem ipsum vitae consequat quisque diam dui parturient sollicitudin convallis posuere molestie quisque nec venenatis faucibus fusce accumsan integer netus faucibus venenatis pharetra amet et rutrum vitae fusce etiam feugiat convallis suspendisse turpis velit duis dictum dignissim massa ipsum id dui quam malesuada pretium euismod turpis euismod sit tempor."},
  { id: 3,
    jobname: "Developpeur(se) junior TS React API", jobdesc: "Lorem ipsum vitae consequat quisque diam dui parturient sollicitudin convallis posuere molestie quisque nec venenatis faucibus fusce accumsan integer netus faucibus venenatis pharetra amet et rutrum vitae fusce etiam feugiat convallis suspendisse turpis velit duis dictum dignissim massa ipsum id dui quam malesuada pretium euismod turpis euismod sit tempor." },
];



export class GlobalsController extends Controller {
  public homepage() {
    this.response.render("pages/home.ejs", {jobshome});
  }

  public contact() {
    this.response.send("Bienvenue sur la page de contact");
  }


  public about() {
    this.response.send("Bienvenue sur la page à propos");
  }


  public readjob() {
    const requestedId = this.request.params.id;

    const job = jobshome.find((j) => {
      return j.id === parseInt(requestedId);
    });

    if (!job) {
      this.response.send(`This posting does not exist`);
    }

    this.response.render("pages/job.ejs", {
      job
    });
  }
  }