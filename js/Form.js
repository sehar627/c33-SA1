class Form{
  constructor(){
  this.input= createInput('Enter your name')
  this.playButton=createButton('Play')
  this.greeting=createElement('h2')
  this.titleimg=createImg("assets/title.png");
  
  }
  hideallitems(){
      this.input.hide()
      this.playButton.hide()
      this.greeting.hide()
      this.titleimg.hide()
  
  }
  
  display(){
  
  this.titleimg.position(100,100)
  this.input.position(200,200)
  this.playButton.position(200,300)
  this.greeting.position(200,200)
  
  this.playButton.mousePressed(()=>{
      this.titleimg.hide()
  this.input.hide();
  this.playButton.hide();
  var name=this.input.value();
  this.greeting.html("HELLO"+name+"Please wait for other players to join")
  
  })
  
  
  }
  
  
  
  
  }