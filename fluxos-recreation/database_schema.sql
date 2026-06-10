-- Tabela de Usuários
CREATE TABLE IF NOT EXISTS users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  openId VARCHAR(64) NOT NULL UNIQUE,
  name TEXT,
  email VARCHAR(320),
  loginMethod VARCHAR(64),
  role ENUM('user', 'admin') DEFAULT 'user' NOT NULL,
  createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL,
  updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP NOT NULL,
  lastSignedIn TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL
);

-- Tabela de Clientes
CREATE TABLE IF NOT EXISTS clientes (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nome VARCHAR(255) NOT NULL,
  email VARCHAR(320),
  telefone VARCHAR(20),
  endereco TEXT,
  cidade VARCHAR(100),
  estado VARCHAR(2),
  cep VARCHAR(10),
  createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL,
  updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP NOT NULL
);

-- Tabela de Técnicos
CREATE TABLE IF NOT EXISTS tecnicos (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nome VARCHAR(255) NOT NULL,
  email VARCHAR(320),
  telefone VARCHAR(20),
  especialidade VARCHAR(100),
  ativo BOOLEAN DEFAULT TRUE NOT NULL,
  createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL,
  updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP NOT NULL
);

-- Tabela de Ordens de Serviço
CREATE TABLE IF NOT EXISTS ordensServico (
  id INT AUTO_INCREMENT PRIMARY KEY,
  numero VARCHAR(50) NOT NULL UNIQUE,
  clienteId INT NOT NULL,
  tecnicoId INT,
  status ENUM('aberta', 'andamento', 'concluida', 'atrasada') DEFAULT 'aberta' NOT NULL,
  descricao TEXT,
  valor DECIMAL(10, 2),
  dataAgendada TIMESTAMP,
  dataInicio TIMESTAMP,
  dataConclusao TIMESTAMP,
  createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL,
  updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP NOT NULL,
  FOREIGN KEY (clienteId) REFERENCES clientes(id),
  FOREIGN KEY (tecnicoId) REFERENCES tecnicos(id)
);

-- Tabela de Agenda
CREATE TABLE IF NOT EXISTS agendas (
  id INT AUTO_INCREMENT PRIMARY KEY,
  ordemServicoId INT NOT NULL,
  tecnicoId INT NOT NULL,
  dataHora TIMESTAMP NOT NULL,
  titulo VARCHAR(255) NOT NULL,
  descricao TEXT,
  createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL,
  updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP NOT NULL,
  FOREIGN KEY (ordemServicoId) REFERENCES ordensServico(id),
  FOREIGN KEY (tecnicoId) REFERENCES tecnicos(id)
);

-- Tabela de Estoque
CREATE TABLE IF NOT EXISTS estoque (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nome VARCHAR(255) NOT NULL,
  descricao TEXT,
  quantidade INT DEFAULT 0 NOT NULL,
  preco DECIMAL(10, 2),
  categoria VARCHAR(100),
  createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL,
  updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP NOT NULL
);

-- Tabela de Financeiro
CREATE TABLE IF NOT EXISTS financeiro (
  id INT AUTO_INCREMENT PRIMARY KEY,
  ordemServicoId INT NOT NULL,
  tipo ENUM('receita', 'despesa') NOT NULL,
  descricao VARCHAR(255) NOT NULL,
  valor DECIMAL(10, 2) NOT NULL,
  dataPagamento TIMESTAMP,
  status ENUM('pendente', 'pago', 'cancelado') DEFAULT 'pendente' NOT NULL,
  createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL,
  updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP NOT NULL,
  FOREIGN KEY (ordemServicoId) REFERENCES ordensServico(id)
);

-- Tabela de Notificações
CREATE TABLE IF NOT EXISTS notificacoes (
  id INT AUTO_INCREMENT PRIMARY KEY,
  usuarioId INT NOT NULL,
  titulo VARCHAR(255) NOT NULL,
  descricao TEXT,
  tipo VARCHAR(50),
  lida BOOLEAN DEFAULT FALSE NOT NULL,
  createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL,
  FOREIGN KEY (usuarioId) REFERENCES users(id)
);

-- Índices para melhor performance
CREATE INDEX idx_clientes_email ON clientes(email);
CREATE INDEX idx_tecnicos_email ON tecnicos(email);
CREATE INDEX idx_ordensServico_numero ON ordensServico(numero);
CREATE INDEX idx_ordensServico_status ON ordensServico(status);
CREATE INDEX idx_ordensServico_clienteId ON ordensServico(clienteId);
CREATE INDEX idx_ordensServico_tecnicoId ON ordensServico(tecnicoId);
CREATE INDEX idx_agendas_dataHora ON agendas(dataHora);
CREATE INDEX idx_financeiro_status ON financeiro(status);
CREATE INDEX idx_notificacoes_usuarioId ON notificacoes(usuarioId);
