
* ### Na PRIMEIRA vez que utilizar o git na pasta, precisa iniciá-lo com:<br>
    git init
* ### Para configurar o git para seu nome:<br>
    git config --global user.name "nome"
* ### Para configurar o git para seu email:<br>
    git config --global user.email "email"
* ### Para sair do user:<br>
    git config --global --unset-all user.name
* ### Para sair do email:<br>
    git config --global --unset-all user.email
* ### Para verificar atualizaçoes nos arquivos da pasta:<br>
    git status
* ### Para adicionar um (1) arquivo para o git monitorar:<br>
    git add nome_do_arquivo_sem_aspas
* ### Para adicionar todos os arquivos de uma vez para o git monitorar:<br>
    git add .
* ### Para comitar:<br>
    git commit -m "Alguma descrição entre aspas"
* ### Para visualizar o histórico de commit no git:
    git log
* ### Trocar o nome de uma ramificação. Ex: De Master para Main<br>
    git branch -M main
* ### Criar uma nova brench:<br>
    git checkout -b "nome da branch entre aspas e com as regras de uma variavel"
* ### Mudar para outra branch:<br>
    git checkout nome_da_branch
* ### Para mesclar (merge) os arquivos de uma branch na branch atual><br>
    git merge nome_da_branch
* ### Para excluir uma branch:<br>
    git branch -d nome_da_branch
* ### Para atualizar os arquivos no Github:<br>
    git push -u origin main
* ### Para mostrar a linha do tempo da árvore:<br>
    git log --pretty=format:"%h %s" --graph
* ### Para puxar alterações no projeto do repositório remoto para o local:<br>
     git pull  
* ### Para clonar ("baixar") um repositório GIT existente para uma pasta local:<br>
    git clone link_do_repositorio_git
