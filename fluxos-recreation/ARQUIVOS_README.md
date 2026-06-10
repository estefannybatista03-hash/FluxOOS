# FluxOS - Gestão de Ordens de Serviço

## 📋 Arquivos Fornecidos

Este pacote contém todos os arquivos necessários para executar o sistema FluxOS com banco de dados.

### Estrutura de Arquivos

```
fluxos-recreation/
├── dist/
│   ├── index.html          # Página HTML principal do dashboard
│   └── styles.css          # Estilos CSS do dashboard
├── database_schema.sql     # Schema completo do banco de dados
├── drizzle/
│   └── schema.ts           # Schema Drizzle ORM (TypeScript)
├── client/
│   └── src/
│       ├── components/     # Componentes React
│       ├── pages/          # Páginas da aplicação
│       └── index.css       # Estilos globais
├── server/
│   ├── db.ts               # Funções de banco de dados
│   └── routers.ts          # Rotas tRPC
└── package.json            # Dependências do projeto
```

## 🗄️ Banco de Dados

### Tabelas Criadas

1. **users** - Usuários do sistema
2. **clientes** - Cadastro de clientes
3. **tecnicos** - Cadastro de técnicos
4. **ordensServico** - Ordens de serviço
5. **agendas** - Agenda de atendimentos
6. **estoque** - Controle de estoque
7. **financeiro** - Controle financeiro
8. **notificacoes** - Sistema de notificações

### Executar Schema SQL

Para criar as tabelas no banco de dados:

```bash
mysql -u usuario -p nome_banco < database_schema.sql
```

## 🎨 Frontend

### Arquivos HTML/CSS

- **dist/index.html** - Dashboard principal com:
  - Sidebar com navegação
  - Cards de métricas (Ordens Abertas, Em Andamento, Concluídas, Atrasadas)
  - Gráficos e estatísticas
  - Agenda do dia
  - Últimas ordens
  - Notificações
  - Atalhos rápidos

- **dist/styles.css** - Estilos completos com:
  - Tema roxo/magenta
  - Design responsivo
  - Componentes estilizados
  - Animações suaves
  - Suporte a mobile

## 🚀 Como Usar

### 1. Instalar Dependências

```bash
cd fluxos-recreation
pnpm install
```

### 2. Configurar Banco de Dados

```bash
# Criar as tabelas
mysql -u usuario -p banco < database_schema.sql

# Ou usar Drizzle
pnpm db:push
```

### 3. Executar Desenvolvimento

```bash
pnpm dev
```

### 4. Build para Produção

```bash
pnpm build
pnpm start
```

## 📊 Funcionalidades

### Dashboard
- Visualização de métricas em tempo real
- Gráficos de desempenho
- Agenda integrada
- Notificações do sistema

### Gestão de Ordens
- Criar, editar e acompanhar ordens de serviço
- Atribuir técnicos
- Rastrear status (Aberta, Em Andamento, Concluída, Atrasada)
- Histórico completo

### Clientes e Técnicos
- Cadastro de clientes com contato
- Gestão de técnicos e especialidades
- Rastreamento de performance

### Financeiro
- Controle de receitas e despesas
- Acompanhamento de pagamentos
- Relatórios financeiros

### Estoque
- Controle de produtos e materiais
- Categorização
- Preços e quantidades

## 🔐 Autenticação

O sistema utiliza OAuth do Manus para autenticação segura. Configure as variáveis de ambiente:

```env
VITE_OAUTH_PORTAL_URL=https://seu-oauth-url
OAUTH_SERVER_URL=https://seu-oauth-server
JWT_SECRET=sua-chave-secreta
```

## 📱 Responsividade

O design é totalmente responsivo:
- Desktop (1024px+)
- Tablet (768px - 1023px)
- Mobile (< 768px)

## 🎯 Próximos Passos

1. Personalizar cores e branding
2. Adicionar mais funcionalidades
3. Integrar com APIs externas
4. Configurar notificações por email
5. Implementar relatórios avançados

## 📞 Suporte

Para dúvidas ou problemas, consulte a documentação do Manus ou entre em contato com o suporte.

---

**FluxOS v1.0** - Desenvolvido com Manus
