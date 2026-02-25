class studentGrade{
    constructor(name){
        this.name = name;
        this.marks= [];
    }
    addMark(mark){
        if(mark >=0 && mark<=100){
            this.marks.push(mark);
            console.log(`Marks ${mark} added for ${this.name}`);
        }else{
            ("Invalid Marks");
        }
    }
    getAverage(){
        if (this.marks.length === 0) 
            return 0;
            let sum = this.marks.reduce((acc, val) => acc + val, 0);
            return sum / this.marks.length;
    }
    getGrade() {
        let avg = this.getAverage();
        if (avg >= 90) 
            return "A";
        else if (avg >= 75) 
            return "B";
        else if (avg >= 50) 
            return "C";
        else 
            return "Fail";
    }
}
let s1 = new studentGrade("Gayi");
s1.addMark(89);
s1.addMark(94);
s1.addMark(76);
s1.addMark(98);
console.log(`${s1.name}'s Average: ${s1.getAverage()}`); 
console.log(`${s1.name}'s Grade: ${s1.getGrade()}`);
