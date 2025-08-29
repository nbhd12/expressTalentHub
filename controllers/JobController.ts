import { Controller } from "../libs/controller";
import { descriptions } from "./data";

export class JobController extends Controller {
  public browseJobs() {
    const success = this.request.query.success;
    let flash = null;

    if (success === "true") {
      flash = { type: "success", message: "Le job a bien été créé." };
    } 
    
    else if (success === "false") {
      flash = { type: "error", message: "Une erreur est survenue lors de la création du job.",
      };
    }

    this.response.render("pages/jobs.ejs", {
      jobs: descriptions,
      flash,
    });
  }


  public readJob() {
  
  const requestedId = this.request.params.id;
  const job = descriptions.find((description) => {
      return description.id == parseInt(requestedId);
    });

  if (!job) {
    this.response.send("The job posting does not exist");
  } 
  
  

  else {
    this.response.render("pages/job.ejs", { job });
  }
}


  public editJob() {
    this.response.send("You can edit the job listing here");
  }

  // Afficher le formulaire pour créer un livre (ditribue une vue)
  public createJob() {
    this.response.render("pages/JobCreatePage.ejs");
  }

  // Affiche rien, on traîte la soumission du formulaire d'ajout d'un livre
  // public addJob() {
  //   const newJob = {
  //     id: jobs.length + 1,
  //     title: this.request.body.title,
  //   };

  //   jobs.push(newJob);

  //   this.response.redirect("/books?success=true"); // did not understand this NUPUR
  // }

  public deleteJob() {
    this.response.send("Bienvenue sur la suppression d'un livre");
  }
}
