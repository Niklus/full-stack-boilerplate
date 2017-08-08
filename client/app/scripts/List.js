
class List extends HTMLElement {
  
  constructor() {
    super();
  }

  connectedCallback(){
    this.getByName();
  }

  getJson(url){
    return fetch(url).then(res => this.readAsJson(res));
  }

  getByName(){
    this.getJson('/api/todos/test')
    .then(res => this.renderItems(res));
  }

  readAsJson(response) { 
    if (!response.ok) {
      throw Error(response.statusText);
    }
    return response.json();
  }

  renderItems(items){

    console.log(items);  

    this.innerHTML = "<h1>Hello App</h1>";

    /*this.innerHTML = items.reduce((a, item) => a + `<div></div>`, '');*/
  }
}

export default List;