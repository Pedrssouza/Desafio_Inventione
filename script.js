class Page{
  constructor(){
    this.render();
  };
  
  render = () => {
  
    let CheckBox = document.getElementById("checkbox")
    let SegundoPainel = document.getElementById("SegundoPainel");
    let divBotao = document.getElementById("divBotao")
    let Resultado = document.getElementById("Resultado")
  
    
      CheckBox.addEventListener("change", () => {
          if (CheckBox.checked) {
            SegundoPainel.innerHTML = "<div class=form-group><textarea class=form-control  rows=5 id=segundoT type=text name=texto maxlength=20000 required=required></textarea ></div>"
            divBotao.innerHTML = "<input id=Botao type=submit name=botao value=Apresentar> "
            let Botao = document.getElementById("Botao")
  
            Botao.addEventListener("click", () =>{
              let segundoT = document.getElementById("segundoT")   
              var aux = this.contarpalavra(segundoT.value);
              this.listar(aux); 
            });
          } else {
            SegundoPainel.innerHTML = ""
            Botao.innerHTML = ""
            Resultado.innerHTML=""
            divBotao.innerHTML=""
          }
      });
    };
  
    listar = (palavras) => {
      Resultado.innerHTML = "";
      let genero ="";
      let nome = document.getElementById("formname");
      let idade = document.getElementById("formage");
      let male = document.getElementById("formmale")
      let female = document.getElementById("formfemale")
      let data = document.getElementById("date");
      let textaux = "";
      let nomeValidation = false;
      let idadeValidation = false;
      let dataValidation = false;
      let segundoTextoValidatio = false;
        
        nomeValidation = nome.validity.valid;
        idadeValidation = idade.validity.valid;
        segundoTextoValidatio = segundoT.validity.valid;
        dataValidation = data.validity.valid
        nome = nome.value;
        idade = idade.value;
        male = male.checked;
        female = female.checked;
        data = data.value;
  
        if (male == true){
          genero = " Masculino";
        } else if( female == true ){
          genero = " Feminino"
        }
        if (palavras == 0){
          textaux = "Nenhuma Palavra"  
        }else if(palavras == 1){
          textaux = "Palavra"
        }
        else{textaux = "Palavras"}
  
        var Lista = ["Nome: "+nome+" \nIdade: "+idade+" anos \nGenero:"+genero+" \nData: "+ data+" \n"+palavras+" "+textaux];
        
        if ( nomeValidation == false || idadeValidation == false || dataValidation == false || segundoTextoValidatio == false){
          Resultado.innerHTML = ""
          window.alert("Preencha os dados obrigatorios")
        }else{
          Resultado.innerHTML = "<textarea id=resultado name=result readonly ></textarea>"
          let boxResultado = document.getElementById("resultado")
    
          boxResultado.value = Lista
  
        }
  
  
    };
    contarpalavra = (caixa) => {
      var str = caixa;
      var lista = str.split(" ");
      var palavrasTeste = lista
      var invalidas = 0
      var palavraOk = 0
      var vogais = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']
      var v = "";
  
      for (var t = 0; t < palavrasTeste.length; t++) {
        v = palavrasTeste[t]
        for (var l = 0; l < vogais.length; l++) {
          if (v.includes(vogais[l]) == true) {
            palavraOk = 1
          }
        }
        if (palavraOk == 0) {
          invalidas = invalidas + 1
        }
        palavraOk = 0;
      }
      invalidas = palavrasTeste.length - invalidas;
      return invalidas;
    }
  };
  let app = new Page();