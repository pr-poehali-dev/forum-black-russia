import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Gamepad2, Users, MessageSquare, Server, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

const ServerCard = ({
  name,
  image,
  players,
  description,
  tags,
}: {
  name: string;
  image: string;
  players: string;
  description: string;
  tags: string[];
}) => (
  <Card className="forum-card overflow-hidden flex flex-col md:flex-row transition-transform hover:scale-[1.01]">
    <div className="md:w-1/3 h-48 md:h-auto relative">
      <img 
        src={image} 
        alt={name} 
        className="w-full h-full object-cover"
      />
      <div className="absolute top-2 left-2 bg-forum-bg/80 text-forum-text px-2 py-1 rounded text-xs flex items-center">
        <Users size={12} className="mr-1" /> {players}
      </div>
    </div>
    <div className="flex-1 p-4 flex flex-col justify-between">
      <div>
        <h3 className="text-lg font-bold text-forum-text">{name}</h3>
        <p className="text-forum-secondary-text text-sm mt-2">{description}</p>
        <div className="flex flex-wrap gap-2 mt-3">
          {tags.map((tag, index) => (
            <span key={index} className="text-xs bg-forum-accent/20 text-forum-accent px-2 py-1 rounded-full">
              {tag}
            </span>
          ))}
        </div>
      </div>
      <div className="flex justify-between items-center mt-4">
        <Button variant="outline" className="text-forum-accent border-forum-accent hover:bg-forum-accent hover:text-white">
          Подключиться
        </Button>
        <Link to="/forum" className="text-forum-secondary-text hover:text-forum-text text-sm flex items-center">
          Перейти на форум <ChevronRight size={16} className="ml-1" />
        </Link>
      </div>
    </div>
  </Card>
);

const StatBox = ({ icon, value, label }: { icon: React.ReactNode; value: string; label: string }) => (
  <div className="bg-forum-card p-4 rounded-lg flex items-center">
    <div className="mr-4 text-forum-accent">{icon}</div>
    <div>
      <div className="text-2xl font-bold text-forum-text">{value}</div>
      <div className="text-forum-secondary-text text-sm">{label}</div>
    </div>
  </div>
);

const Index = () => {
  return (
    <div className="forum-container min-h-screen">
      {/* Хедер */}
      <div className="bg-forum-card border-b border-forum-border">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="text-forum-text font-bold text-xl flex items-center">
                <img src="/logo-b.svg" alt="Black Russia" className="h-10 mr-2" />
                <span>Black Russia</span>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <Link to="/forum">
                <Button className="forum-button">
                  <MessageSquare className="mr-1.5 h-4 w-4" /> Форум
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Главный баннер */}
      <div className="relative h-96 bg-gray-900 flex items-center">
        <div className="absolute inset-0 overflow-hidden">
          <img 
            src="/placeholder.svg" 
            alt="Игровой сервер Black Russia" 
            className="w-full h-full object-cover opacity-40"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Добро пожаловать на серверы Black Russia
            </h1>
            <p className="text-lg text-gray-300 mb-6">
              Погрузись в мир ролевой игры, создай своего персонажа и стань частью нашего сообщества
            </p>
            <div className="flex space-x-4">
              <Button className="forum-button">
                <Gamepad2 className="mr-2 h-5 w-5" /> Начать играть
              </Button>
              <Link to="/forum">
                <Button variant="outline" className="bg-transparent border-white text-white hover:bg-white/10">
                  <MessageSquare className="mr-2 h-5 w-5" /> Перейти на форум
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Статистика */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <StatBox 
            icon={<Server size={24} />} 
            value="12" 
            label="Игровых серверов" 
          />
          <StatBox 
            icon={<Users size={24} />} 
            value="15,421" 
            label="Активных игроков" 
          />
          <StatBox 
            icon={<MessageSquare size={24} />} 
            value="542,128" 
            label="Сообщений на форуме" 
          />
          <StatBox 
            icon={<Gamepad2 size={24} />} 
            value="3,742" 
            label="Онлайн сейчас" 
          />
        </div>
      </div>

      {/* Список серверов */}
      <div className="container mx-auto px-4 py-8">
        <h2 className="text-2xl font-bold mb-6 text-forum-text">Наши серверы</h2>
        <div className="space-y-6">
          <ServerCard 
            name="Black Russia | Moscow #1"
            image="/placeholder.svg"
            players="1250/2000"
            description="Основной сервер проекта с полным погружением в игровой процесс. Множество фракций, бизнесов и возможностей для развития."
            tags={["PvP", "RP", "Экономика", "Гангстеры"]}
          />
          <ServerCard 
            name="Black Russia | Saint Petersburg #2"
            image="/placeholder.svg"
            players="987/1500"
            description="Второй по популярности сервер с акцентом на криминальные разборки и полицейские погони."
            tags={["Криминал", "Полиция", "Погони", "Низкий пинг"]}
          />
          <ServerCard 
            name="Black Russia | Sochi RP"
            image="/placeholder.svg"
            players="754/1000"
            description="Курортный сервер с акцентом на отдых, развлечения и бизнес. Идеально для новичков!"
            tags={["Для новичков", "Бизнес", "Казино", "Автомобили"]}
          />
        </div>
        <div className="text-center mt-8">
          <Button className="forum-button">
            Показать все серверы <ChevronRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>

      {/* Футер */}
      <footer className="bg-forum-card border-t border-forum-border mt-8 py-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-forum-secondary-text text-sm mb-4 md:mb-0">
              <div className="flex items-center justify-center md:justify-start">
                <img src="/logo-b.svg" alt="Black Russia" className="h-6 mr-2" />
                <span>Black Russia © 2023</span>
              </div>
              <p className="mt-1">
                Все права защищены. Игровой проект Black Russia.
              </p>
            </div>
            
            <div className="flex items-center space-x-6">
              <a 
                href="#" 
                className="text-forum-secondary-text hover:text-forum-text transition-colors"
              >
                Правила
              </a>
              <a 
                href="#" 
                className="text-forum-secondary-text hover:text-forum-text transition-colors"
              >
                Контакты
              </a>
              <Link 
                to="/forum" 
                className="text-forum-secondary-text hover:text-forum-text transition-colors"
              >
                Форум
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;