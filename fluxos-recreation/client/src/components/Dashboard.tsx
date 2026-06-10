import { BarChart, Bar, LineChart, Line, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { FileText, Clock, CheckCircle, AlertCircle, TrendingUp, Eye } from 'lucide-react';

const Dashboard = () => {
  // Data for charts
  const orderStatusData = [
    { name: 'Abertas', value: 128, color: '#6366f1' },
    { name: 'Em Andamento', value: 56, color: '#8b5cf6' },
    { name: 'Concluídas', value: 362, color: '#10b981' },
    { name: 'Atrasadas', value: 14, color: '#ec4899' },
  ];

  const performanceData = [
    { month: 'Jan', conclusoes: 85, atrasos: 12 },
    { month: 'Fev', conclusoes: 88, atrasos: 10 },
    { month: 'Mar', conclusoes: 92, atrasos: 8 },
    { month: 'Abr', conclusoes: 90, atrasos: 9 },
    { month: 'Mai', conclusoes: 95, atrasos: 5 },
  ];

  const revenueData = [
    { day: '01', revenue: 2400 },
    { day: '08', revenue: 1398 },
    { day: '15', revenue: 9800 },
    { day: '22', revenue: 3908 },
    { day: '29', revenue: 4800 },
    { day: '30', revenue: 3800 },
  ];

  const agendaItems = [
    { time: '10:30', title: 'Instalação de Ar Condicionado', technician: 'João da Silva' },
    { time: '09:15', title: 'Manutenção Preventiva', technician: 'Maria Santos' },
    { time: '14:00', title: 'Reunião com Cliente', technician: 'Empresa XYZ' },
  ];

  const recentOrders = [
    { id: '#1254', status: 'andamento', technician: 'João da Silva' },
    { id: '#1253', status: 'aberta', technician: 'Maria Santos' },
    { id: '#1252', status: 'concluida', technician: 'Carlos Lima' },
  ];

  const notifications = [
    { title: 'Nova Ordem de Serviço', description: 'Ordem #1254 atribuída a Pedro Alves' },
    { title: 'Ordem Concluída', description: 'Ordem #1252 foi concluída com sucesso' },
    { title: 'Ordem Atrasada', description: 'Ordem #1249 está atrasada em 4 dias' },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'andamento':
        return 'bg-purple-100 text-purple-700';
      case 'aberta':
        return 'bg-blue-100 text-blue-700';
      case 'concluida':
        return 'bg-green-100 text-green-700';
      case 'atrasada':
        return 'bg-red-100 text-red-700';
      default:
        return 'bg-gray-100 text-gray-700';
    }
  };

  const getStatusLabel = (status: string) => {
    switch (status) {
      case 'andamento':
        return 'Em Andamento';
      case 'aberta':
        return 'Aberta';
      case 'concluida':
        return 'Concluída';
      case 'atrasada':
        return 'Atrasada';
      default:
        return status;
    }
  };

  return (
    <div className="space-y-6">
      {/* Page Title */}
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold text-gray-900">Dashboard</h2>
      </div>

      {/* Metric Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Ordens Abertas */}
        <Card className="p-6">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-sm text-gray-600 mb-2">Ordens Abertas</p>
              <p className="text-3xl font-bold text-gray-900">128</p>
              <p className="text-sm text-green-600 mt-2">+18% vs mês anterior</p>
            </div>
            <div className="p-3 bg-purple-100 rounded-lg">
              <FileText className="w-6 h-6 text-purple-600" />
            </div>
          </div>
        </Card>

        {/* Em Andamento */}
        <Card className="p-6">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-sm text-gray-600 mb-2">Em Andamento</p>
              <p className="text-3xl font-bold text-gray-900">56</p>
              <p className="text-sm text-green-600 mt-2">+10% vs mês anterior</p>
            </div>
            <div className="p-3 bg-purple-100 rounded-lg">
              <Clock className="w-6 h-6 text-purple-600" />
            </div>
          </div>
        </Card>

        {/* Concluídas */}
        <Card className="p-6">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-sm text-gray-600 mb-2">Concluídas</p>
              <p className="text-3xl font-bold text-gray-900">362</p>
              <p className="text-sm text-green-600 mt-2">+22% vs mês anterior</p>
            </div>
            <div className="p-3 bg-green-100 rounded-lg">
              <CheckCircle className="w-6 h-6 text-green-600" />
            </div>
          </div>
        </Card>

        {/* Atrasadas */}
        <Card className="p-6">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-sm text-gray-600 mb-2">Atrasadas</p>
              <p className="text-3xl font-bold text-gray-900">14</p>
              <p className="text-sm text-red-600 mt-2">-5% vs mês anterior</p>
            </div>
            <div className="p-3 bg-pink-100 rounded-lg">
              <AlertCircle className="w-6 h-6 text-pink-600" />
            </div>
          </div>
        </Card>
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Ordens por Status */}
        <Card className="p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-900">Ordens por Status</h3>
            <Button variant="outline" size="sm">Este mês</Button>
          </div>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={orderStatusData}
                cx="50%"
                cy="50%"
                innerRadius={80}
                outerRadius={120}
                paddingAngle={2}
                dataKey="value"
              >
                {orderStatusData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
          <div className="mt-4 grid grid-cols-2 gap-4 text-sm">
            {orderStatusData.map((item) => (
              <div key={item.name} className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }} />
                <span className="text-gray-600">{item.name}</span>
                <span className="font-semibold text-gray-900">{item.value}</span>
              </div>
            ))}
          </div>
        </Card>

        {/* Performance da Equipe */}
        <Card className="p-6 bg-gradient-to-br from-purple-600 to-purple-800 text-white">
          <h3 className="text-lg font-semibold mb-2">Performance da Equipe</h3>
          <p className="text-sm text-purple-100 mb-6">Acompanhe o desempenho geral da sua equipe em tempo real.</p>
          
          <div className="flex items-center justify-between mb-6">
            <div>
              <p className="text-sm text-purple-100 mb-1">Taxa de Conclusão</p>
              <p className="text-4xl font-bold">87%</p>
              <p className="text-sm text-purple-100 mt-1">+12% vs mês anterior</p>
            </div>
            <div className="relative w-32 h-32">
              <svg className="w-full h-full" viewBox="0 0 120 120">
                <circle cx="60" cy="60" r="50" fill="none" stroke="rgba(255,255,255,0.2)" strokeWidth="8" />
                <circle
                  cx="60"
                  cy="60"
                  r="50"
                  fill="none"
                  stroke="white"
                  strokeWidth="8"
                  strokeDasharray={`${(87 / 100) * 314} 314`}
                  strokeLinecap="round"
                  transform="rotate(-90 60 60)"
                />
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-2xl font-bold">87%</span>
              </div>
            </div>
          </div>

          <Button className="w-full bg-white text-purple-600 hover:bg-purple-50">
            Ver relatório completo
          </Button>
        </Card>
      </div>

      {/* More Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Conclusões vs Atrasos */}
        <Card className="p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Conclusões vs Atrasos</h3>
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={performanceData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
              <XAxis dataKey="month" stroke="#9ca3af" />
              <YAxis stroke="#9ca3af" />
              <Tooltip />
              <Legend />
              <Bar dataKey="conclusoes" fill="#8b5cf6" name="conclusoes" />
              <Bar dataKey="atrasos" fill="#ec4899" name="atrasos" />
            </BarChart>
          </ResponsiveContainer>
        </Card>

        {/* Receita do Mês */}
        <Card className="p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Receita do Mês</h3>
          <div className="mb-6">
            <p className="text-sm text-gray-600">Receita Total</p>
            <p className="text-3xl font-bold text-gray-900">R$ 45.230,00</p>
            <p className="text-sm text-green-600 mt-2">+18% em relação ao mês anterior</p>
          </div>
          <ResponsiveContainer width="100%" height={200}>
            <LineChart data={revenueData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
              <XAxis dataKey="day" stroke="#9ca3af" />
              <YAxis stroke="#9ca3af" />
              <Tooltip />
              <Line type="monotone" dataKey="revenue" stroke="#8b5cf6" strokeWidth={2} dot={false} />
            </LineChart>
          </ResponsiveContainer>
          <div className="mt-4 text-sm text-gray-600">
            <p>Faturamento: <span className="font-semibold text-purple-600">R$ 38.750,00</span></p>
          </div>
        </Card>
      </div>

      {/* Bottom Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Agenda do Dia */}
        <Card className="p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-900">Agenda do Dia</h3>
            <Button variant="ghost" size="sm">Ver agenda</Button>
          </div>
          <div className="space-y-3">
            {agendaItems.map((item, index) => (
              <div key={index} className="border-b border-gray-200 pb-3 last:border-0">
                <p className="text-sm font-semibold text-gray-900">{item.title}</p>
                <p className="text-xs text-gray-600 mt-1">{item.time} - {item.technician}</p>
              </div>
            ))}
          </div>
        </Card>

        {/* Últimas Ordens */}
        <Card className="p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-900">Últimas Ordens</h3>
            <Button variant="ghost" size="sm">Ver todas</Button>
          </div>
          <div className="space-y-3">
            {recentOrders.map((order, index) => (
              <div key={index} className="border-b border-gray-200 pb-3 last:border-0">
                <p className="text-sm font-semibold text-gray-900">{order.id}</p>
                <div className="flex items-center justify-between mt-1">
                  <span className={`text-xs px-2 py-1 rounded ${getStatusColor(order.status)}`}>
                    {getStatusLabel(order.status)}
                  </span>
                  <p className="text-xs text-gray-600">{order.technician}</p>
                </div>
              </div>
            ))}
          </div>
        </Card>

        {/* Notificações */}
        <Card className="p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-900">Notificações</h3>
            <Button variant="ghost" size="sm">Ver todas</Button>
          </div>
          <div className="space-y-3">
            {notifications.map((notif, index) => (
              <div key={index} className="border-b border-gray-200 pb-3 last:border-0">
                <p className="text-sm font-semibold text-gray-900">{notif.title}</p>
                <p className="text-xs text-gray-600 mt-1">{notif.description}</p>
              </div>
            ))}
          </div>
        </Card>
      </div>

      {/* Quick Actions */}
      <Card className="p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Atalhos Rápidos</h3>
        <div className="flex flex-wrap gap-3">
          <Button className="bg-purple-600 hover:bg-purple-700">Nova OS</Button>
          <Button variant="outline">Clientes</Button>
          <Button variant="outline">Relatórios</Button>
          <Button variant="outline">Financeiro</Button>
          <Button variant="outline">Indicadores</Button>
        </div>
      </Card>
    </div>
  );
};

export default Dashboard;
