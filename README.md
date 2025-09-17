<!doctype html>
<html lang="es">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width,initial-scale=1" />
  <title>🛒 Swagger-CRUD-SUPERMERCADO — Documentación</title>
  <style>
    :root{
      --bg:#0f1724;
      --card:#0b1220;
      --muted:#9aa4b2;
      --accent:#06b6d4;
      --glass: rgba(255,255,255,0.03);
      --max: 1000px;
      --radius:12px;
      color-scheme: dark;
    }
    html,body{height:100%; margin:0; font-family: Inter, ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial; background: linear-gradient(180deg,#071023 0%, #0b1724 100%); color:#e6eef6;}
    .container{max-width:var(--max); margin:36px auto; padding:24px; background:linear-gradient(180deg, rgba(255,255,255,0.02), rgba(255,255,255,0.01)); border-radius:16px; box-shadow: 0 6px 24px rgba(2,6,23,0.6);}
    header{display:flex; gap:16px; align-items:center; margin-bottom:18px;}
    header h1{font-size:22px; margin:0; display:flex; gap:10px; align-items:center;}
    .badge{background:linear-gradient(90deg,var(--accent),#7c3aed); padding:6px 10px; border-radius:10px; font-weight:600; color:#021024;}
    p.lead{color:var(--muted); margin-top:6px;}
    nav{display:flex; gap:10px; flex-wrap:wrap; margin:18px 0;}
    nav a{color:var(--accent); text-decoration:none; padding:8px 12px; background:var(--glass); border-radius:10px; font-size:14px;}
    section{margin-top:18px; padding:18px; background:rgba(255,255,255,0.01); border-radius:12px;}
    h2{margin:0 0 10px 0; font-size:18px;}
    h3{margin:12px 0 8px 0; font-size:15px;}
    pre{background:#021025; padding:14px; border-radius:10px; overflow:auto; color:#dbeafe; font-size:13px;}
    code{background:rgba(255,255,255,0.02); padding:2px 6px; border-radius:6px;}
    ul{color:var(--muted); margin:8px 0 12px 20px;}
    .columns{display:grid; grid-template-columns:1fr 1fr; gap:12px;}
    .pill{display:inline-block; padding:6px 10px; background:rgba(255,255,255,0.02); border-radius:999px; font-weight:600; color:var(--muted); margin-right:6px;}
    footer{margin-top:20px; color:var(--muted); font-size:13px; text-align:center;}
    @media (max-width:820px){ .columns{grid-template-columns:1fr;} header{flex-direction:column; align-items:flex-start;} nav{gap:8px;} }
  </style>
</head>
<body>
  <div class="container" role="main">
    <header>
      <div>
        <h1>🛒 <span>Swagger-CRUD-SUPERMERCADO</span> <span class="badge">API REST</span></h1>
        <p class="lead">Proyecto para gestionar productos, clientes y proveedores — <strong>Node.js</strong>, <strong>Express</strong>, <strong>Sequelize</strong>, <strong>MySQL</strong> y documentación con <strong>Swagger UI</strong>.</p>
      </div>
    </header>

    <nav aria-label="Navegación">
      <a href="#tecnologias">Tecnologías</a>
      <a href="#estructura">Estructura</a>
      <a href="#instalacion">Instalación</a>
      <a href="#endpoints">Endpoints</a>
      <a href="#swagger">Swagger</a>
      <a href="#autor">Autor</a>
    </nav>

    <section id="tecnologias">
      <h2>🚀 Tecnologías utilizadas</h2>
      <ul>
        <li><strong>Node.js</strong> — entorno de ejecución de JavaScript.</li>
        <li><strong>Express</strong> — framework web para APIs.</li>
        <li><strong>Sequelize</strong> — ORM para MySQL.</li>
        <li><strong>MySQL</strong> — base de datos relacional.</li>
        <li><strong>Swagger UI</strong> — documentación interactiva de la API.</li>
      </ul>
    </section>

    <section id="estructura">
      <h2>📂 Estructura del proyecto</h2>
      <pre><code>Swagger-CRUD-SUPERMERCADO/
│
├── src/
│   ├── config/        # Configuración de base de datos
│   ├── models/        # Modelos Sequelize (Producto, Cliente, Proveedor)
│   ├── controllers/   # Lógica de negocio (CRUDs)
│   ├── routes/        # Rutas de la API
│   ├── app.js         # Configuración principal de Express
│   └── swagger.js     # Configuración de Swagger
│
├── package.json       # Dependencias y scripts
└── README.md          # Documentación del proyecto
</code></pre>
    </section>

    <section id="instalacion">
      <h2>⚙️ Instalación y ejecución</h2>

      <h3>Paso a paso</h3>
      <div class="columns">
        <div>
          <h3 class="pill">1️⃣ Clonar</h3>
          <pre><code>git clone https://github.com/SrAlucart/Swagger-CRUD-SUPERMERCADO.git
cd Swagger-CRUD-SUPERMERCADO</code></pre>
        </div>
        <div>
          <h3 class="pill">2️⃣ Instalar</h3>
          <pre><code>npm install</code></pre>
        </div>
      </div>

      <h3 class="pill">3️⃣ Configurar DB</h3>
      <p>Edita el archivo <code>src/config/db.js</code> con tus credenciales MySQL (host, usuario, contraseña, base de datos).</p>

      <h3 class="pill">4️⃣ Levantar servidor</h3>
      <pre><code>node src/app.js
# en desarrollo (opcional)
npx nodemon src/app.js</code></pre>

      <h3 class="pill">5️⃣ Acceder</h3>
      <ul>
        <li><strong>API:</strong> <code>http://localhost:3000</code></li>
        <li><strong>Swagger UI:</strong> <code>http://localhost:3000/api-docs</code></li>
      </ul>
    </section>

    <section id="endpoints">
      <h2>📌 Endpoints principales</h2>

      <h3>📦 Productos</h3>
      <ul>
        <li><code>GET /productos</code> → Listar productos</li>
        <li><code>POST /productos</code> → Crear producto</li>
        <li><code>GET /productos/{id}</code> → Obtener producto por ID</li>
        <li><code>PUT /productos/{id}</code> → Actualizar producto</li>
        <li><code>DELETE /productos/{id}</code> → Eliminar producto</li>
      </ul>

      <h3>👥 Clientes</h3>
      <ul>
        <li><code>GET /clientes</code> → Listar clientes</li>
        <li><code>POST /clientes</code> → Crear cliente</li>
        <li><code>GET /clientes/{id}</code> → Obtener cliente por ID</li>
        <li><code>PUT /clientes/{id}</code> → Actualizar cliente</li>
        <li><code>DELETE /clientes/{id}</code> → Eliminar cliente</li>
      </ul>

      <h3>🚚 Proveedores</h3>
      <ul>
        <li><code>GET /proveedores</code> → Listar proveedores</li>
        <li><code>POST /proveedores</code> → Crear proveedor</li>
        <li><code>GET /proveedores/{id}</code> → Obtener proveedor por ID</li>
        <li><code>PUT /proveedores/{id}</code> → Actualizar proveedor</li>
        <li><code>DELETE /proveedores/{id}</code> → Eliminar proveedor</li>
      </ul>
    </section>

    <section id="swagger">
      <h2>📖 Documentación con Swagger</h2>
      <p>Una vez corriendo el servidor, abre:</p>
      <pre><code>http://localhost:3000/api-docs</code></pre>
      <p>Ahí podrás <strong>probar los endpoints</strong> de forma interactiva y ver los <code>schemas</code> para <code>Producto</code>, <code>Cliente</code> y <code>Proveedor</code>.</p>
    </section>

    <section id="modelos">
      <h2>🗄️ Modelos (SQL)</h2>
      <h3>Producto</h3>
      <pre><code>CREATE TABLE productos (
  id_producto INT AUTO_INCREMENT PRIMARY KEY,
  nombre VARCHAR(100) NOT NULL,
  descripcion TEXT,
  precio DECIMAL(10,2) NOT NULL,
  stock INT NOT NULL
);</code></pre>

      <h3>Cliente</h3>
      <pre><code>CREATE TABLE clientes (
  id_cliente INT AUTO_INCREMENT PRIMARY KEY,
  nombre VARCHAR(100) NOT NULL,
  email VARCHAR(100) UNIQUE NOT NULL,
  telefono VARCHAR(15),
  direccion TEXT,
  fecha_registro TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);</code></pre>

      <h3>Proveedor</h3>
      <pre><code>CREATE TABLE proveedores (
  id_proveedor INT AUTO_INCREMENT PRIMARY KEY,
  nombre VARCHAR(100) NOT NULL,
  telefono VARCHAR(15),
  email VARCHAR(100) UNIQUE NOT NULL,
  direccion TEXT
);</code></pre>
    </section>

    <section id="autor">
      <h2>👨‍💻 Autor</h2>
      <p>Proyecto desarrollado por <strong>Emanuel Buriticá Guababe</strong>.</p>
    </section>

    <footer>
      <p>© <span id="year"></span> Swagger-CRUD-SUPERMERCADO — Documentación generada</p>
    </footer>
  </div>

  <script>
    document.getElementById('year').textContent = new Date().getFullYear();
  </script>
</body>
</html>
