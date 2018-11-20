'use strict'

const Project = use('App/Models/Project');

class ProjectController {
  async index({ auth }){
    const user = await auth.getUser();
    return await user.projects().fetch();
  }

  async create({ auth, request }){
    const user = await auth.getUser();
    const {tittle} = request.all();
    const project = new Project();
    project.fill({
      tittle
    });
    await user.projects().save(project);
    return project;
  }

}

module.exports = ProjectController
