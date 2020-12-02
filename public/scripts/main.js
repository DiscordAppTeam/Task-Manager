// Inicializações: 
setDateDay();

/* Faça a tabela de edição de tarefa retornar o objeto */

/*  Funções:

Todas as funções desta area estão limpas pois o script 'functions.js' faz a mior parte do trabalho, deixando
mais limpo e mais facil para o back-end trabalhar/enviar sem se confundir...

OBS: 
1- O BackEnd pode pesquisar pelos documentos comentarios(ctrl+f) que começem com "A Fazer:" 
para ter noção de onde colocar, ou modificar uma função, porem deixarei as funções prontas aqui.
2- Se Tudo estiver claro, delete os comentários, se não, veja oque o console.log retorna após concluir uma ação.
*/

function sendTaskEdited(task){
    /* Recebe um objeto {title: str, desc: str, data: str, hora: str, index: num} editado pelo front-end, para ser atualizado no back */
    /* A Fazer: Editar a tarefa selecionada (Definir como setar no front)*/ 
    console.log(task);

    //ExitEdit();   //Quando enviar, retire o popup, ou atualize a pagina...
}

function toogleFinishedTask(selected){
    /* Recebe um objeto {estado: bool, index: num} Para modificar o estado no banco de dados para concluido/pendente*/
    /* A Fazer: Trocar o estado da tarefa (concluida/pendente) no banco de dados */
    console.log(selected);
}




