const btnAdd = document.getElementById("btnAdd");
const inputTarefa = document.getElementById("inputTarefa");
const inputEtiqueta = document.getElementById("inputEtiqueta");
const tarefasAdicionadas = document.getElementById("tarefasAdicionadas");
const erro = document.getElementById("erro");
const btnConcluirLimpar = document.getElementById("btnConcluirLimpar");
const btnConcluir = document.getElementById("btnConcluir");
const btnLimpar = document.getElementById("btnLimpar");
const btnRemoverConcluidas = document.getElementById("btnRemoverConcluidas");

btnAdd.addEventListener("click", function(evento){
    evento.preventDefault();
    const valorInput = inputTarefa.value;
    const valorEtiqueta = inputEtiqueta.value;
    if (valorInput.trim() === "" || valorEtiqueta.trim() === ""){
        erro.textContent = "Preencha o campo!";
    } else {
        erro.textContent = "";

        btnConcluirLimpar.classList.remove("btnConcluirLimparOff");
        btnConcluirLimpar.classList.add("btnConcluirLimparOn");

        const novoItem = document.createElement("div");
        tarefasAdicionadas.appendChild(novoItem);
        novoItem.classList.add("novoItem");
        novoItem.setAttribute("draggable", "true")

        const novaTarefa = document.createElement("p");
        novaTarefa.textContent = valorInput;

        novoItem.appendChild(novaTarefa);
        novaTarefa.classList.add("adicionada");

        novaTarefa.addEventListener("click", function(){
            novaTarefa.classList.remove("realizada");
            novaTarefa.setAttribute("contentEditable", true);
        });

        const novaEtiqueta = document.createElement("p");
        novaEtiqueta.textContent = valorEtiqueta;
        novoItem.appendChild(novaEtiqueta);
        novaEtiqueta.classList.add("etiqueta");
        
        novaEtiqueta.addEventListener("dblclick", function(){
            novaEtiqueta.setAttribute("contentEditable", true);
        });

        const btnEditar = document.createElement("span");
        btnEditar.textContent = "✔";
        novoItem.appendChild(btnEditar);

        const btnExcluir = document.createElement("span");
        btnExcluir.textContent = "✖";
        novoItem.appendChild(btnExcluir);

        btnEditar.addEventListener("click", function(){
            if (novaTarefa.classList.contains("realizada")){
                novaTarefa.classList.remove("realizada");
            } else {
                novaTarefa.classList.add("realizada");
            }
        });

        btnExcluir.addEventListener("click", function(){
            tarefasAdicionadas.removeChild(novoItem);
        });
        
        btnConcluir.addEventListener("click", function(evento){
            evento.preventDefault();
            novaTarefa.classList.add("realizada");
        });

        btnLimpar.addEventListener("click", function(evento){
            evento.preventDefault();
            tarefasAdicionadas.removeChild(novoItem);
            btnConcluirLimpar.classList.add("btnConcluirLimparOff");
            btnConcluirLimpar.classList.remove("btnConcluirLimparOn");
        });
        
        btnRemoverConcluidas.addEventListener("click", function(evento){
            evento.preventDefault();
            if (novaTarefa.classList.contains("realizada")){
                tarefasAdicionadas.removeChild(novoItem);
            }
        })

    }
    inputTarefa.value = "";;
    inputEtiqueta.value = "";
});

tarefasAdicionadas.addEventListener("dragstart", function(evento){ 
    dragging = evento.target.closest(".novoItem");
})

tarefasAdicionadas.addEventListener("dragover", function(evento){
    evento.preventDefault();
    const node = evento.target.closest(".novoItem");
    this.insertBefore(dragging, node);
})

tarefasAdicionadas.addEventListener("dragend", function(evento){ 
    dragging = null;
})
