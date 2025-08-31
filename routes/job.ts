import { Router } from "express";
import { JobController } from "../controllers/JobController";

// Initialiastion du bookRouter Express
const jobRouter = Router();

// Browse
jobRouter.get("/", (request, response) => {
  const controller = new JobController(request, response);
  controller.browseJobs();
});

// Add GET - afficher le formulaire
jobRouter.get("/add", (request, response) => {
  const controller = new JobController(request, response);
  controller.createJob();
});

//Add POST - traiter le formulaire
jobRouter.post("/", (request, response) => {
  const controller = new JobController(request, response);
  controller.addJob();
});

// Read
jobRouter.get("/:id", (request, response) => {
  const controller = new JobController(request, response);
  controller.readJob();
});

// Edit
jobRouter.put("/:id", (request, response) => {
  const controller = new JobController(request, response);
  controller.editJob();
});


// Delete
jobRouter.post("delete/:id", (request,response) =>{
  const controller = new JobController(request, response);
  controller.deleteJob();
});


// // Delete
// jobRouter.delete("/:id", (request, response) => {
//   const controller = new JobController(request, response);
//   controller.deleteJob();
// });

export default jobRouter;
