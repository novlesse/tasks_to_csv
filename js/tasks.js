export default class Tasks {
  constructor() {
    this.tasks = [];
  }

  importCsv(csvString) {
    return (this.tasks = csvString.split(", "));
  }

  getCount() {
    return this.tasks.length;
  }

  getFirst() {
    return this.tasks[0];
  }

  getLast() {
    return this.tasks[this.tasks.length - 1];
  }

  getUnformattedTasks() {
    return this.tasks.join(", ").toLowerCase();
  }
}
