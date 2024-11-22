class WebDev {
  constructor(name, experienceYears) {
    this.name = name;
    this.experienceYears = experienceYears;
  }

  printLanguage() {
    console.log("This is generic WebDev language!");
  }
}

class FrontEnd extends WebDev {
  constructor(name, experienceYears, framework) {
    super(name, experienceYears);
    this.framework = framework;
  }

  printLanguage() {
    console.log("FrontEnd developer uses javaScripts!");
  }

  needMODIFY() {
    console.log(
      `${this.name} need to modify UI components with ${this.framework}!`
    );
  }
}

class BackEnd extends WebDev {
  constructor(name, experienceYears, database) {
    super(name, experienceYears);
    this.database = database;
  }

  printLanguage() {
    console.log("BackEnd developer uses Node js!");
  }

  needMODIFY() {
    console.log(
      `${this.name} need to modify UI components with ${this.database}!`
    );
  }
}

const frontEndDev = new FrontEnd("Alice", 12, "React");
const backEndDev = new BackEnd("Bob", 15, "MySql");

frontEndDev.printLanguage();
backEndDev.printLanguage();

frontEndDev.needMODIFY();
backEndDev.needMODIFY();
