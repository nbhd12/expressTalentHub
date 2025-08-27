import { Controller } from "../libs/controller";

const jobs = [
  { id: 1, title: "1984" },
  { id: 2, title: "Le Meilleur des mondes" },
  { id: 3, title: "Fahrenheit 451" },
];

const bookComments = [
  { id: 1, bookId: 2, message: "Super j'ai trop aimé" },
  { id: 2, bookId: 2, message: "WTF j'ai rien compris" },
  { id: 3, bookId: 2, message: "Je préfère Express.js" },
  { id: 4, bookId: 1, message: "Super pour l'été" },
];

export class JobController extends Controller {
  public browseJobs() {
    const success = this.request.query.success;
    let flash = null;

    if (success === "true") {
      flash = {
        type: "success",
        message: "Le livre a bien été créé.",
      };
    } else if (success === "false") {
      flash = {
        type: "error",
        message: "Une erreur est survenue lors de la création du livre.",
      };
    }

    this.response.render("pages/jobs.ejs", {
      jobs,
      flash,
    });
  }

  public readJob() {
    // Je récupère l'ID du livre réclamé (dans l'URL)
    const requestedId = this.request.params.id;

    // J'exploite l'ID réclamé pour récupérer le livre dans "la base de données"
    const job = jobs.find((job) => {
      return job.id == parseInt(requestedId);
    });

    // Si je n'ai pas trouvé le livre
    if (!job) {
      this.response.send(`The job posting does not exist`);
    }

    // Puisque j'ai trouvé le livre, j'utilise son ID pour identifier les commentaires correspondants au livre
    //const comments = bookComments.filter((bookComment) => {
    //  return bookComment.bookId == book?.id;
    //});

    // Si j'ai trouvé le livre
    this.response.render("pages/JobDetailPage.ejs", {
      job,
    });
  }

  public editJob() {
    this.response.send("You can edit the job listing here");
  }

  // Afficher le formulaire pour créer un livre (ditribue une vue)
  public createJob() {
    this.response.render("pages/JobCreatePage.ejs");
  }

  // Affiche rien, on traîte la soumission du formulaire d'ajout d'un livre
  public addJob() {
    const newJob = {
      id: jobs.length + 1,
      title: this.request.body.title,
    };

    jobs.push(newJob);

    this.response.redirect("/books?success=true"); // did not understand this NUPUR
  }

  public deleteJob() {
    this.response.send("Bienvenue sur la suppression d'un livre");
  }
}
