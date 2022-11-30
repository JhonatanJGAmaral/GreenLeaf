export default class ServiceBase{
    private APIURL = 'https://localhost:5001';
    private controller = "";
    private headers = {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      }

    constructor(controller: string) {
        this.controller = controller;
    }

    public async get(endpoint: string): Promise<any>{
        const response = await fetch(`${this.APIURL}${this.controller}${endpoint}`)
        return await response.json()
    }

    public async post(endpoint: string, body: any): Promise<any>{
        const result = await fetch(`${this.APIURL}${this.controller}${endpoint}`, {
        method: 'POST',
        headers: this.headers,
        body: JSON.stringify(body) 
      })
      var response = await result.json()
      return response
    }

    public async delete(endpoint: string, id: number): Promise<void>{
        const result = await fetch(`${this.APIURL}${this.controller}${endpoint}`, {
        method: 'Delete',
        headers: this.headers,
        body: JSON.stringify(id) 
      })
    } 
}