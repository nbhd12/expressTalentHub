import { Controller } from "../libs/controller";
import { descriptions } from "./data";
import { jobTypes, skills } from "../libs/constants";
import { JobSchema } from "../libs/JobSchema";

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


  public createJob() {
    this.response.render("pages/JobCreatePage.ejs", {
      skills, jobTypes
    });
    console.log("skills:", skills);
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
  public addJob() {
   const newJob = {
    id: descriptions.length + 1,  
    title: this.request.body.title,
    description: this.request.body.description,
    skills: this.request.body.competences,
    type: this.request.body.type_mission,
    start_date: this.request.body.date_onboarding,
    salary: this.request.body.salaire,
    salary_unit: this.request.body.unite_salaire,
    password: this.request.body.mot_de_passe
  };

  descriptions.push(newJob);  

  this.response.redirect("/jobs?success=true");
}
    // Create new job
  //   dataVariables.id++;
  //   const newJobOffer = { id: dataVariables.id, ...result.data };
  //   jobOffers.push(newJobOffer);

  //   // Redirect with success
  //   this.response.redirect("/jobs?success=true");
  // }

 




  public deleteJob() {
    this.response.send("Bienvenue sur la suppression d'un livre");
  }
}
