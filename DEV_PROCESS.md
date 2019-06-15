# Processo de Desenvolvimento

## Tarefas
1. Vá até o board do Trello, escolha a tarefa mais prioritária destinada à você e a mova pra **Doing** 
2. Abra uma nova branch a partir da branch master com o nome da tarefa
3. Ao finalizar o desenvolvimento abra um novo Pull Request apontando para a branch dev
4. Vá até o board do Trello e mova a tarefa **Doing** -> **Code Review**
5. Vá até o GitHub e (revise seus Pull requests) `&&` (revise e aprove os Pull requests dos outros) 
    - Se você aprovar algum Pull requests consulte a seção [Aprovando Pull Requests](#Aprovando-Pull-Requests) abaixo
6. Repita o passo 1

## Branches

### Dev branch
- Todas as branches relacionadas ao sprint atual devem sair dessa branch
- Todos os Pull Requests do sprint atual devem ter essa branch como target
- Iremos usar essa branch pra agrupar todos os PRs antes de enviar para a `master`
- Ao final do sprint, essa branch será mergeada na `master`

### Padrões de nomenclatura
- Todas as branches abertas devem seguir os seguintes padrões:
  - dash-case
    - Exemplo bom: `my-branch`
    - Exemplo ruim: `my_branch`
  - Branches cujo objetivo principal é adicionar funcionalidades devem começar com `ft-*`
    - Exemplo bom: `ft-sms-message-poro`
    - Exemplo ruim: `feat/sms-message-poro`
  - Branches com conteúdo puramente técnico/auxiliar devem começar com `ch-*` (abreviação de chore)
    - Exemplo bom: `ch-create-setup-script`
    - Exemplo ruim: `chore/create-setup-script`
  - Branches cujo objetivo principal é corrigir algum problema devem começar com `fix-*` (abreviação de chore)
    - Exemplo bom: `fix-rake-tasks`
    - Exemplo ruim: `fix/rake-tasks`


## GitHub

### Abrindo um Pull Request
- Pull Requests em português
- Os Pull Requests nunca devem apontar diretamente para a `master`, mas sim para a branch dev
- O Pull Request deve ter um título descritivo e facilmente discernível
- Colocar Lucas como Assignee
  - Se 24hs se passarem desda abertura do Pull Request e eu não o tiver revisado, mude o Assignee para o seu colega e espere a aprovação dele
- Assim que abrir o Pull Request, vá na aba de `Changes` e revise as mudanças

### Revisando um Pull Request
- Revise os Pull Requests dos quais você é o Assignee (prioridade) ou Pull Requests sem Assignees
- Siga as diretivas da seção [Code Review](#Code-Review) abaixo

### Aprovando Pull Requests
Caso você tenha revisado e aprovado um Pull Request:
  - Aceite o Pull Request (apertar botão de merge)
  - Vá até o board do Trello e mova a tarefa **Code Review** -> **Done**

## Code Review
### Objetivos e pilares do code review

Antes de nos aprofundarmos na metodologia que envolve a realização de um bom Code Review é importante definirmos os objetivos do processo. Ou seja, precisamos saber o que queremos alcançar quando dispensamos tempo analisando o código produzido por uma outra pessoa.

Acreditamos em quatro pilares pricipais que justificam a realização do code review:

#### Aprendizado

*Por que é um pilar?*

Um de nossos valores é a evolução constante de todos da equipe e acreditamos que aprender é uma ação importante a ser tomada para se evoluir e crescer.
Desta maneira é necessário um processo que torne o aprendizado uma prática diária e constante.

*Como code review sustenta este pilar?*

Acreditamos que um bom code review viabiliza um aprendizado bidirecional.
O revisor, ao analisar o trabalho de outra pessoa, entra em contato com uma forma diferente da sua própria de abordar um problema, transfere seu próprio conhecimento na forma de feedback e amplia seu conhecimento do projeto. Enquanto que, quem recebe o feedback, se beneficia de todo o conhecimento novo mostrado.

#### Propostas de diferentes soluções e decisões técnicas

*Por que é um pilar?*

Acreditamos que para inovar é necessário imaginar diversos cenários e soluções para um mesmo problema pois , somente desta maneira, será possível tomar a melhor decisão considerando a situação atual do projeto.

*Como code review sustenta este pilar?*

Code review naturalmente cria discussões sobre alternativas técnicas ajudando até a evidenciar os pontos positivos e negativos da solução adotada.
A partir dai, ações são tomadas e novos rumos técnicos são definidos para o projeto.

#### Padronização e qualidade do projeto

*Por que é um pilar?*

Um bom software é construído para durar. Todos os projetos que fazemos acreditamos nisso e precisamos garantir uma boa padronização e qualidade de código para que no futuro a manutenção do projeto continue viável e ela fique mais fácil e não mais difícil conforme o tempo passa.

*Como code review sustenta este pilar?*

A prática de code review ajuda a equipe a certificar-se de que o código submetido segue os padrões (estilo, framework, nomenclaturas...) definidos previamente para o projeto.

Uma boa padronização encurta a curva de aprendizado de novos membros bem como melhora a manutenibilidade do código, removendo necessidade de pensar em tópicos anteriormente já discutidos e resolvidos a respeito do código, sua formatação e arquitetura.

### Dando e Recebendo Feedback

#### Antes de começar o review

Antes de começar o review, tenha em mente os [**PILARES** anteriormente definidos](#Objetivos-e-pilares-do-code-review), assim você será capaz de ter discussões produtivas e interessantes, aprender ao longo do caminho e contribuir ativamente para a melhoria da qualidade do código.

#### Quando estiver tendo seu código revisado

- Em poucos casos as mudanças sugeridas são obrigatórias. É completamente OK não acatar à alguma mudança 'estilística', mas tente sempre responder aos comentários deixando claras suas motivações.
- Não leve para o lado pessoal. Assuma que o *reviewer* tem a melhor das intenções e tente esclarecer qualquer mal-entendido.
- Se você se desviar de algum padrão conhecido, deixe previamente esclarecido quais foram suas motivações.
- Adicione mudanças geradas a partir de sugestões do Code Review em *commits* separados. Responda ao comentário da sugestão apontando o link do *commit* que realizou tal mudança, para que o *reviewer* consiga ver isoladamente a nova solução.

#### Quando estiver revisando código

Entenda as motivações e objetivos do Pull Request, e então:

- Faça sugestões, não exigências ("Será que renomear para `:read_from_cache` não deixaria mais claro?").
- Caso você identifique alguma alteração crítica, comunique-a, explicando o problema.
- Se gostou da abordagem utilizada, deixe um comentário positivo.
- Se não gostou da abordagem utilizada, ofereça alternativas.
- Ao oferecer alternativas, tenha em mente que o autor já as pode ter considerado.
- Tente identificar maneiras de simplificar a solução.
- Se a discussão sobre um ponto se extender demais, mova-a para uma discussão *offline*. Enquanto isso deixe a implementação final a critério do autor.
- Se não existem alterações críticas a serem aplicadas, deixe um 👍 no Pull Request.

#### Para ambos os casos

- Muitas vezes, existem diferentes maneiras de resolver o problema. Discussões sobre *tradeoffs* e preferências são encorajadas, mas se a discussão se prolongar muito é melhor levar a conversa *offline*, para não impactar o processo de desenvolvimento.
- Se alguma coisa não ficou clara, peça pra elaborarem.
- Seja explícito. Lembre-se que suas intenções podem não ser claras *online*.
- Não use hipérboles ('sempre', 'nunca', 'nada').
- As vezes é mais fácil tirar uma dúvida pessoalmente. Se esse for o caso, lembre-se de deixar um comentário no código com o resumo da discussão.
- Transforme as mudanças/refatorações mais extensas em tickets/issues.
- Memes e emojis são permitidos e facultativos, mas evite sarcasmo e qualquer coisa que possa ser incorretamente interpretada.