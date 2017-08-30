
var ClozeCard = function(text, cloze) {
    if(this instanceof ClozeCard) {
        this.text = text;
        this.cloze = cloze;
        this.partial = text;
        this.fullText = text;
        this.checkQuestion = function() {            
            var containsCloze = text.includes(cloze);
    
            if(containsCloze) {
                this.partial = this.text.replace(cloze, "...");
    
                
            } else{
                throw "Sorry, your text does not contain your Cloze!";
    
            };
        
            }
            this.checkQuestion();
      } else {
        return new ClozeCard(text, cloze);
      } 




}



var firstPresidentCloze = new ClozeCard("George Washington was the first president of the United States.", "George Washington");

console.log(firstPresidentCloze.partial);





module.exports = ClozeCard;