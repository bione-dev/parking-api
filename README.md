```markdown
# Estacionamento em Tempo Real

Este projeto é uma aplicação web para gerenciar vagas de um estacionamento. Ele consiste em um **backend** desenvolvido com **Quarkus** e um **frontend** construído com **React**.

---

## Tecnologias Utilizadas

### Backend
- **Quarkus** (versão 2.13.3.Final)
- **H2 Database** (em memória)
- **Hibernate ORM com Panache**
- **Swagger UI** para visualização e teste da API.

### Frontend
- **React** com **Vite** para rápido desenvolvimento.
- **Axios** para realizar chamadas à API.
- Estilização simples com **CSS inline**.

---

## Funcionalidades

- Exibir as vagas do estacionamento em tempo real.
- Alterar o status de uma vaga (ocupada/disponível) ao clicar nela.
- API RESTful para criar, listar e atualizar vagas.
- Interface visual responsiva que organiza as vagas em um grid.

---

## Estrutura do Projeto

### Backend (Quarkus)
- **Diretório:** `src/main/java/com/example/parking`
  - **`ParkingSlot`**: Entidade que representa uma vaga.
  - **`ParkingSlotResource`**: Endpoints REST para gerenciar vagas.
- **Configurações**: Arquivo `application.properties` com as configurações de banco de dados e CORS.

### Frontend (React)
- **Diretório:** `frontend/src`
  - **`App.jsx`**: Componente principal que exibe e gerencia as vagas.
  - **`axios`**: Usado para realizar chamadas HTTP à API backend.

---

## Como Executar

### Backend
1. Certifique-se de que o **Java 17** está instalado.
2. Navegue até o diretório do backend.
3. Execute o comando:
   ```bash
   ./mvnw compile quarkus:dev
   ```
4. Acesse o Swagger UI em: [http://localhost:8080/swagger-ui](http://localhost:8080/swagger-ui).

### Frontend
1. Certifique-se de que o **Node.js** e o **npm** estão instalados.
2. Navegue até o diretório `frontend`.
3. Instale as dependências:
   ```bash
   npm install
   ```
4. Execute o servidor de desenvolvimento:
   ```bash
   npm run dev
   ```
5. Acesse a aplicação em: [http://localhost:5173](http://localhost:5173).

---

## Endpoints da API

| Método | Endpoint               | Descrição                          |
|--------|------------------------|------------------------------------|
| GET    | `/parking-slots`       | Lista todas as vagas.             |
| POST   | `/parking-slots`       | Cria uma nova vaga.               |
| PUT    | `/parking-slots/{id}`  | Altera o status de uma vaga.      |

---

## Exemplos de Uso da API

### Criar uma Vaga
```bash
curl -X POST http://localhost:8080/parking-slots \
-H "Content-Type: application/json" \
-d '{"slotNumber": "1", "isOccupied": false}'
```

### Listar Vagas
```bash
curl -X GET http://localhost:8080/parking-slots
```

### Alterar Status de uma Vaga
```bash
curl -X PUT http://localhost:8080/parking-slots/1/toggle
```

---

## Captura de Tela

![Estacionamento em Tempo Real](estacionamento.gif)

---

## Melhorias Futuras

- Implementar autenticação para gerenciar acessos.
- Adicionar notificações visuais para mudanças de estado.
- Atualização em tempo real com arduino de processamento de imagens ou algum sensor.


