class Category{
    constructor(id, topic, questions){
        this.id = id;
        this.topic = topic;
        this.questions = questions.map(question => {
            const id = question.id;
            const body = question.body;
            const answer = question.answer;
            return new Question(id, body, answer)
        })

        this.renderCategory()
    }

    renderCategory(){
        
        const categoryContainer = document.getElementById('category-container')
        const categoryCard = document.createElement('div')
        // categoryCard.classList.add('category-card')
        categoryCard.id = this.id
        categoryCard.dataset.id = this.id
        // categoryCard.innerHTML += this.categoryHTML()
        categoryContainer.appendChild(categoryCard)
        // debugger
        document.getElementById(`${this.topic}`).addEventListener('click', e => {
            if (this.topic==="Addition") {this.renderAdd(e)}
            if (e.target.id==="sub") {this.renderSub(e)}
            if (e.target.id==="mult") {this.renderMult(e)}
            if (e.target.id==="divi") {this.renderDivi(e)}
        })
        // categoryContainer.addEventListener('click', e => {
        //     e.stopPropagation()
        //     if (e.target.id==="add") {this.renderAdd(e)}
        //     if (e.target.id==="sub") {this.renderSub(e)}
        //     if (e.target.id==="mult") {this.renderMult(e)}
        //     if (e.target.id==="divi") {this.renderDivi(e)}
        //     console.log(this)
        // })
      }

      renderAdd(e){

        const el  = document.getElementById('answerList');
        const additionContainer = document.getElementById('addition-container') 
        const addCard = document.createElement("div")
        el.innerHTML = ''
        debugger
        addCard.dataset.id = this.id
        addCard.id = this.id
        this.questions.forEach(element => { debugger
            element.renderQuestion()
        });
        // addCard.innerHTML += this.addHTML()
        // additionContainer.appendChild(addCard)

      }

      renderSub(e){
        // debugger
        const subtractionContainer = document.getElementById('subtraction-container') 
        const subCard = document.createElement("div")
        subCard.dataset.id = this.id
        subCard.id = this.id
        this.questions.forEach(element => {
            console.log(element)
        });
        // addCard.innerHTML += this.addHTML()
        // additionContainer.appendChild(addCard)
        const el  = document.getElementById('answerList');
        el.remove();
      }

      renderMult(e){
        const multiplicationContainer = document.getElementById('multiplication-container') 
        const multCard = document.createElement("div")
        multCard.dataset.id = this.id
        multCard.id = this.id
        this.questions.forEach(element => {
            console.log(element)
        });
        // addCard.innerHTML += this.addHTML()
        // additionContainer.appendChild(addCard)
        const el  = document.getElementById('answerList');
        el.remove();
      }

      renderDiv(e){
        const divisionContainer = document.getElementById('division-container') 
        const diviCard = document.createElement("div")
        diviCard.dataset.id = this.id
        diviCard.id = this.id
        this.questions.forEach(element => {
            console.log(element)
        });
        const el  = document.getElementById('answerList');
        el.remove();
      }

}
