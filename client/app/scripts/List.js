
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
    
    const list = items.reduce((a, item) => a + `<li>${item.todo}</li>`,'');

    this.innerHTML = `
      <div>
        <h1>Todos</h1>
        <ul>${list}</ul>
      </div>
    `;
  }
}

export default List;