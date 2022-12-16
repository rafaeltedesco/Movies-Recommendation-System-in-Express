### Aplicação para estudo e aplicabilidade de algoritmos de recomendação

No momento é possível: 

Dado uma pessoa utilizadora, receber uma lista ordenada de pessoas mais parecidas (do mais parecido para o menos parecido), com indicação de probabilidade, baseado na forma de avaliar os mesmos filmes já assistidos.

--- 

### Endpoints

#### Movies

GET /movies

Lista todos os filmes

GET /movies&userId=1:number

Lista todos os filmes de uma pessoa utilizadora de id 1

GET /movies&userId=1&movieId=1
Mostra o filme com id 1 da pessoa com id 1

GET /movies/:id

Exibe filmes de acordo com o id

---

### Users

GET /users

Lista todas as pessoas utilizadoras

GET /users/:id

Mostra pessoa utilizadora por ID

--- 

### Recommendation

GET /recommendation/show-similar-users/2

Exibe as pessoas mais parecidas com a pessoa utilizadora com Id 2 no modo de avaliar filmes em comum assistidos.