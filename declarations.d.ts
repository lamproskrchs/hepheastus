declare module "*.js?worker" {
    const WorkerFactory: new () => Worker;
    export default WorkerFactory;
  }