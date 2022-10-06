import { Component, OnInit } from '@angular/core';
import palavrasData from '../Files/palavras.json'

interface Palavra{
  palavra:[string,string,string,string,string];
}
@Component({
  selector: 'app-jogo',
  templateUrl: './jogo.component.html',
  styleUrls: ['./jogo.component.css']
})
export class JogoComponent implements OnInit {
  nomes = ['haaaaaa','bbbbbbbbb','ccccccc'];
  tabela: [any][any];
  
  colunaAtual: number;
  linhaAtual: number;
  palavraChave:string[];
  //palavrasPossiveis: Palavra[].palavra = palavrasData;
  
  
  constructor(){
    this.tabela = [ 
      [{nome:'',classe:''},{nome:'',classe:''},{nome:'',classe:''},{nome:'',classe:''},{nome:'',classe:''}],
      [{nome:'',classe:''},{nome:'',classe:''},{nome:'',classe:''},{nome:'',classe:''},{nome:'',classe:''}], 
      [{nome:'',classe:''},{nome:'',classe:''},{nome:'',classe:''},{nome:'',classe:''},{nome:'',classe:''}],
      [{nome:'',classe:''},{nome:'',classe:''},{nome:'',classe:''},{nome:'',classe:''},{nome:'',classe:''}], 
      [{nome:'',classe:''},{nome:'',classe:''},{nome:'',classe:''},{nome:'',classe:''},{nome:'',classe:''}],
      [{nome:'',classe:''},{nome:'',classe:''},{nome:'',classe:''},{nome:'',classe:''},{nome:'',classe:''}], 
      [{nome:'',classe:''},{nome:'',classe:''},{nome:'',classe:''},{nome:'',classe:''},{nome:'',classe:''}]
      
    ];
    this.linhaAtual=0;
    this.colunaAtual=0;
    
    
    this.palavraChave = palavrasData[Math.floor(Math.random() * 7)].palavra;
  }
  public Digitar(a:string){

    if(this.colunaAtual < 5){
      this.tabela[this.linhaAtual][this.colunaAtual] = {nome:a,classe:''};
      this.colunaAtual ++;
    }
  }
  public Verificar(){
    let copiaPChave = [];

     for (let i = 0; i < 5; i++) {
      
        copiaPChave.push(this.palavraChave[i]);
      
      
    }
    if(this.colunaAtual >=5)
    {
       for (let i = 0; i < 5; i++) {

        if(this.tabela[this.linhaAtual][i]['nome'] == copiaPChave[i]){

          this.tabela[this.linhaAtual][i]['classe'] = "passou";
          copiaPChave[i] = '*';

        }
      
       }
       for (let i = 0; i < 5; i++) {

          for (let a = 0; a < 5; a++) {
            
            if(this.tabela[this.linhaAtual][i]['nome'] == copiaPChave[a] && this.tabela[this.linhaAtual][i]['classe'] != 'passou'){

              this.tabela[this.linhaAtual][i]['classe'] = "quase";
              copiaPChave[a] = '*';

            }
            
            
          }

        }
        for (let i = 0; i < 5; i++) {

          if(this.tabela[this.linhaAtual][i]['classe'] != 'quase' &&this.tabela[this.linhaAtual][i]['classe'] != 'passou'){
              this.tabela[this.linhaAtual][i]['classe'] = "reprovou";
            }
        }
      
      this.linhaAtual++;
      this.colunaAtual = 0;
    
    }
    else{
      alert("Preencha Todos os campos da linha");
    }
   
  }
  

 
  ngOnInit(): void {
  }

}
