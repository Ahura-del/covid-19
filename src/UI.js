class Ui {
  constructor() {
    this.countryName = document.querySelector("#country");
    this.case = document.querySelector("#case");
    this.newCase = document.querySelector("#new-case");
    this.active = document.querySelector("#active-case");
    this.dead = document.querySelector("#dead-case");
    this.recover = document.querySelector("#recover-case");
    this.newDead = document.querySelector("#new-dead");
    this.critical = document.querySelector("#citical-case");

    this.worldCase = document.querySelector("#world-case");
    this.worldDead = document.querySelector("#world-dead");
    this.worldRecover = document.querySelector("#world-recover");
    this.worldCritical = document.querySelector("#world-critical");
  }

  changToPersian() {
    this.countryName.textContent = "کشور";
    this.case.textContent = "همه موارد";
    this.newCase.textContent = "افراد جدید";
    this.active.textContent = "افراد فعال";
    this.dead.textContent = " همه فوت شده ها";
    this.recover.textContent = "افراد بهبود یافته";
    this.newDead.textContent = "فوتی های جدید";
    this.critical.textContent = "موارد بحرانی";
    this.worldCase.textContent = "کل افراد مبتلا در دنیا";
    this.worldDead.textContent = "کل فوتی های دنیا";
    this.worldRecover.textContent = "کل افراد بهبود یافته";
    this.worldCritical.textContent = "افراد با شرایط بحرانی در دنیا";
  }

  changToEnglish() {
    this.countryName.textContent = "Country";
    this.case.textContent = "Cases";
    this.newCase.textContent = "New Case";
    this.active.textContent = "Active Cases";
    this.dead.textContent = "Deaths";
    this.recover.textContent = "Recovered";
    this.newDead.textContent = "New Deaths";
    this.critical.textContent = "Critical";
    this.worldCase.textContent = "World Cases";
    this.worldDead.textContent = "World Deaths";
    this.worldRecover.textContent = "World Recovered";
    this.worldCritical.textContent = "World Critical";
  }
}

export default Ui;
