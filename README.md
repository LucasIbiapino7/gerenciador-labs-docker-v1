# Como rodar localmente

1. **Clone o repositório:**

   ```bash
   git clone git@github.com:LucasIbiapino7/gerenciador-labs-docker-v1.git
   cd gerenciador-labs-docker-v1
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
