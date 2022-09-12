
class Security {

    constructor(){

        this.access1 = createInput("Code1")
        this.access1.position(100,90);
        this.access1.style('background', 'white');  

        this.button1 = createButton('Check');
        this.button1.position(100,120);
        this.button1.style('background', 'lightgrey');    

        this.access2 = createInput("Code2")
        this.access2.position(700,90);
        this.access2.style('background', 'white');  

        this.button2 = createButton('Check');
        this.button2.position(700,120);
        this.button2.style('background', 'lightgrey');

        this.access3 = createInput("Code3")
        this.access3.position(100,350);
        this.access3.style('background', 'white');  

        this.button3 = createButton('Check');
        this.button3.position(100,380);
        this.button3.style('background', 'lightgrey');

        this.access4 = createInput("Code4")
        this.access4.position(700,350);
        this.access4.style('background', 'white');  

        this.button4 = createButton('Check');
        this.button4.position(700,380);
        this.button4.style('background', 'lightgrey');

        this.button5 = createButton('Owls,Cats,Rats And Toads');
        this.button5.position(500,430);
        this.button5.style('background', 'lightgrey')

        this.button6 = createButton('Houses Of Hogwarts');
        this.button6.position(500,470);
        this.button6.style('background', 'lightgrey');
       
        this.button7 = createButton('Quidditch');
        this.button7.position(500,390);
        this.button7.style('background', 'lightgrey')

        this.button8 = createButton('Magical Subjects');
        this.button8.position(500,350);
        this.button8.style('background', 'lightgrey');

        this.button9 = createButton('Professors');
        this.button9.position(500,310);
        this.button9.style('background', 'lightgrey')

        this.button10 = createButton('Ministry Of Magic');
        this.button10.position(500,270);
        this.button10.style('background', 'lightgrey');

        this.button11 = createButton('Magical Creatures');
        this.button11.position(500,230);
        this.button11.style('background', 'lightgrey')

        this.button12 = createButton('Spells And Charms');
        this.button12.position(500,190);
        this.button12.style('background', 'lightgrey');

        this.button13 = createButton('Sorting Hat');
        this.button13.position(500,150);
        this.button13.style('background', 'lightgrey')

        this.button14 = createButton('Wands');
        this.button14.position(500,110);
        this.button14.style('background', 'lightgrey');

        this.button15 = createButton('Wizarding World');
        this.button15.position(500,70);
        this.button15.style('background', 'lightgrey')

        this.button16 = createButton('Hogwarts Express');
        this.button16.position(500,30);
        this.button16.style('background', 'lightgrey');
    }

    hide(){
        this.access1.hide()
        this.access2.hide()
        this.access3.hide()
        this.access4.hide()
        this.button1.hide()
        this.button2.hide()
        this.button3.hide();
        this.button4.hide();
        this.button5.hide();
        this.button5.hide();
    }

    display(){

        this.button1.mousePressed(() => {
            if(system.authenticate(accessCode1,this.access1.value())){
                this.button1.hide();
                this.access1.hide();
                sound.play();
                score++;
           }
        });

        this.button2.mousePressed(() => {
            if(system.authenticate(accessCode2,this.access2.value())){
                this.button2.hide();
                this.access2.hide();
                sound.play();
                score++;
            }
        });
        
this.button3.mousePressed(() => {
    if(system.authenticate(accessCode3,this.access3.value())){
        this.button3.hide();
        this.access3.hide();
        sound.play();
        score++;
    }
});

this.button4.mousePressed(() => {
    if(system.authenticate(accessCode4,this.access4.value())){
        this.button4.hide();
        this.access4.hide();
        sound.play();
        score++;
    }
});

this.button5.mousePressed(() => {
   harry.addImage(answer)
   harry.scale = 0.6
});

this.button5.mousePressed(() => {
    harry.addImage(harryImage)
    harry.scale = 0.45
 });

 if(score === 4){
    this.button5.hide();
    this.button6.hide();
    this.button7.hide();
    this.button8.hide();
    this.button9.hide();
    this.button10.hide();
    this.button11.hide();
    this.button12.hide();
    this.button13.hide();
    this.button14.hide();
    this.button15.hide();
    this.button16.hide();
      }
 
    }
}
