import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'ExercicioTabela';
  nomes = ['haaaaaa','bbbbbbbbb','ccccccc'];
  tabela: [any][any];
  
  
  colunaAtual: number;
  linhaAtual: number;
  
  constructor(){

    

    this.tabela = [ 
      [{nome:'',classe:''},{nome:'',classe:''},{nome:'',classe:''},{nome:'',classe:''}],
      [{nome:'',classe:''},{nome:'',classe:''},{nome:'',classe:''},{nome:'',classe:''}], 
      [{nome:'',classe:''},{nome:'',classe:''},{nome:'',classe:''},{nome:'',classe:''}],
      
    ];
    this.linhaAtual=0;
    this.colunaAtual=0;
  }
  public Digitar(a:string){

    if (this.tabela.fo[this.linhaAtual][this.colunaAtual].nome === ''){
    this.tabela[this.linhaAtual][this.colunaAtual] = a;
    }
    
    else{
      
      this.colunaAtual++;

      if ( this.colunaAtual > 3) {
      
        this.linhaAtual++;
      
        if (this.linhaAtual < 2) {
      
          this.tabela[this.linhaAtual][this.colunaAtual].nome = a;
      
        }
      }
    }
  }
  
  ngOnInit(){

  }
}
 
