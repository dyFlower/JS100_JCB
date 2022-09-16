const Wizard = class Wiard {
    constructor(health, mana, armor) {
        this.health = health;
        this.mana = mana;
        this.armor = armor;
    }
    attack() {
        console.log('파이어볼');
    }
};
const x = new Wizard(545, 210, 10);
console.log(x.health, x.mana, x.armor);
x.attack();

//클래스 고자 클래스 공부하기 ....^^
