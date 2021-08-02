class Form {
    constructor(){



    }
    display(){
    var title=createElement("h2") ;
    title.position(130,0);
    title.html("CAR RACING GAME ")

    var input=createInput("USERNAME");
    input.position(130,160);

    var button=createButton("play");
    button.position(250,200);

    button.mousePressed(function(){
        input.hide();
        button.hide();
        playerCount+=1;
        var name=input.value();
        player.update(name);
        player.updateCount(playerCount);
        var greeting=createElement("h3");
        greeting.html("Hello "+ name )
        greeting.position(130,160);

    })
   

    }
}































