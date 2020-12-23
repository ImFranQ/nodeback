import { Router as expressRouter } from 'express'

export const route = expressRouter();

const getControllerFile = (path) => {
  const divider = path.split(':')
  const controller = require(`../app/contollers/${divider[0]}`)
  return controller[divider[1]]
}

class Router {

  constructor() {
    this.route = route
  }

  get(route, controller) {
    this.route.get(route, getControllerFile(controller))
  }

  post() {
    this.route.post(route, getControllerFile(controller))
  }

  put() {
    this.route.put(route, getControllerFile(controller))
  }

  delete() {
    this.route.delete(route, getControllerFile(controller))
  }
};

export default new Router()