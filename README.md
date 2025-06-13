# Como rodar localmente

1. **Clone o repositório:**

   ```bash
   git clone https://github.com/usuario/portal-labs-compose.git
   cd portal-labs-compose
   ```

2. **Crie o arquivo `.env`:**

   ```bash
   cp .env.example .env
   ```

3. **Edite o `.env`** com seus valores (senha do banco, client secret do Google etc.).

4. **Suba os containers:**

   ```bash
   docker compose up --build
   ```

Acesse:

* Frontend: [http://localhost:5173](http://localhost:5173)
* Auth Server: [http://localhost:9000](http://localhost:9000)
