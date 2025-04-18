import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Users, Clock, Award, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

const OnlineUsers = () => (
  <Card className="forum-card mb-4">
    <div className="p-4">
      <h3 className="forum-heading flex items-center">
        <Users size={18} className="mr-2 text-forum-accent" />
        Сейчас на форуме
      </h3>
      <div className="mt-3 space-y-2 text-sm">
        <div className="flex justify-between">
          <span className="text-forum-secondary-text">Пользователей:</span>
          <span className="text-forum-text font-medium">1,245</span>
        </div>
        <div className="flex justify-between">
          <span className="text-forum-secondary-text">Гостей:</span>
          <span className="text-forum-text font-medium">3,721</span>
        </div>
        <div className="flex justify-between">
          <span className="text-forum-secondary-text">Всего:</span>
          <span className="text-forum-text font-medium">4,966</span>
        </div>
      </div>
      <div className="mt-3 pt-3 border-t border-forum-border">
        <div className="text-xs text-forum-secondary-text">
          Рекорд посещаемости: <span className="text-forum-text">7,895</span> (05.07.2023)
        </div>
      </div>
    </div>
  </Card>
);

const RecentTopics = () => (
  <Card className="forum-card mb-4">
    <div className="p-4">
      <h3 className="forum-heading flex items-center">
        <Clock size={18} className="mr-2 text-forum-accent" />
        Последние темы
      </h3>
      <div className="mt-3 space-y-3">
        <div className="text-sm">
          <Link to="/forum/topic" className="text-forum-text hover:text-forum-accent">
            Как быстро заработать деньги на старте?
          </Link>
          <div className="text-xs text-forum-secondary-text mt-1">
            от <span className="text-forum-accent">NewPlayer</span>, сегодня, 16:45
          </div>
        </div>
        <div className="text-sm">
          <Link to="/forum/topic" className="text-forum-text hover:text-forum-accent">
            Баг с текстурами машин после обновления
          </Link>
          <div className="text-xs text-forum-secondary-text mt-1">
            от <span className="text-forum-accent">CarLover</span>, сегодня, 12:30
          </div>
        </div>
        <div className="text-sm">
          <Link to="/forum/topic" className="text-forum-text hover:text-forum-accent">
            Набор в клан [RUSH] открыт!
          </Link>
          <div className="text-xs text-forum-secondary-text mt-1">
            от <span className="text-forum-accent">ClanLeader</span>, вчера, 22:15
          </div>
        </div>
      </div>
      <Button variant="ghost" className="w-full mt-3 text-forum-secondary-text hover:text-forum-text">
        Показать больше <ChevronRight size={16} className="ml-1" />
      </Button>
    </div>
  </Card>
);

const TopUsers = () => (
  <Card className="forum-card">
    <div className="p-4">
      <h3 className="forum-heading flex items-center">
        <Award size={18} className="mr-2 text-forum-accent" />
        Топ пользователей
      </h3>
      <div className="mt-3 space-y-3">
        <div className="flex items-center">
          <div className="w-8 h-8 rounded-full bg-forum-accent flex items-center justify-center text-white font-bold">
            1
          </div>
          <div className="ml-3">
            <div className="text-forum-text">ProGamer</div>
            <div className="text-xs text-forum-secondary-text">Сообщений: 3,452</div>
          </div>
        </div>
        <div className="flex items-center">
          <div className="w-8 h-8 rounded-full bg-forum-accent/80 flex items-center justify-center text-white font-bold">
            2
          </div>
          <div className="ml-3">
            <div className="text-forum-text">AdminHelper</div>
            <div className="text-xs text-forum-secondary-text">Сообщений: 2,891</div>
          </div>
        </div>
        <div className="flex items-center">
          <div className="w-8 h-8 rounded-full bg-forum-accent/60 flex items-center justify-center text-white font-bold">
            3
          </div>
          <div className="ml-3">
            <div className="text-forum-text">VeteranPlayer</div>
            <div className="text-xs text-forum-secondary-text">Сообщений: 2,567</div>
          </div>
        </div>
      </div>
      <Button variant="ghost" className="w-full mt-3 text-forum-secondary-text hover:text-forum-text">
        Показать больше <ChevronRight size={16} className="ml-1" />
      </Button>
    </div>
  </Card>
);

const ForumSidebar = () => {
  return (
    <div>
      <OnlineUsers />
      <RecentTopics />
      <TopUsers />
    </div>
  );
};

export default ForumSidebar;