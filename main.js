'use script';

{
  class Player { //親クラス
    constructor(name, score) { //メソッド
      this.name = name;
      this.score = score;
    }
    showInfo() {
      console.log(`name: ${this.name} score: ${this.score}`);
    }
  }

  class SoccerPlayer extends Player { //子クラスタ
    constructor(name, score, number) {
     super(name,score);
     this.number = number;
  }
  kick() {
    console.log('Goooaaal!');
  }
}

  const tsubasa = new SoccerPlayer('tsubasa', 99, 10);

  tsubasa.kick();
  console.log(tsubasa.number);
  tsubasa.showInfo();
}
