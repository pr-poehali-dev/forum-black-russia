import { Card } from "@/components/ui/card";
import { Bookmark, MessageSquareText, AlertTriangle, Info, Gamepad2, Lightbulb, Users } from "lucide-react";
import { Link } from "react-router-dom";

interface CategoryProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  topics: number;
  messages: number;
  lastPost?: {
    title: string;
    author: string;
    date: string;
  };
}

const CategoryItem = ({
  icon,
  title,
  description,
  topics,
  messages,
  lastPost,
}: CategoryProps) => {
  return (
    <Card className="forum-card mb-3">
      <div className="flex p-4">
        <div className="mr-4 text-forum-accent">{icon}</div>
        <div className="flex-1">
          <Link to="/forum/category" className="forum-heading text-lg hover:text-forum-accent">
            {title}
          </Link>
          <p className="forum-subheading mt-1">{description}</p>
        </div>
        <div className="hidden md:block text-right text-forum-secondary-text text-sm">
          <div>
            <span className="font-medium">Темы:</span> {topics}
          </div>
          <div>
            <span className="font-medium">Сообщения:</span> {messages}
          </div>
        </div>
      </div>
      {lastPost && (
        <div className="px-4 py-2 bg-forum-bg border-t border-forum-border text-xs text-forum-secondary-text">
          <div className="flex justify-between">
            <div>
              <span className="font-medium">Последнее:</span>{" "}
              <Link to="/forum/topic" className="hover:text-forum-accent">
                {lastPost.title.length > 30
                  ? lastPost.title.substring(0, 30) + "..."
                  : lastPost.title}
              </Link>
            </div>
            <div>
              от <span className="text-forum-accent">{lastPost.author}</span>, {lastPost.date}
            </div>
          </div>
        </div>
      )}
    </Card>
  );
};

const ForumCategories = () => {
  return (
    <div>
      <div className="mb-6">
        <h2 className="text-xl font-bold mb-4 text-forum-text">Основные разделы</h2>
        <CategoryItem
          icon={<Info size={24} />}
          title="Новости и объявления"
          description="Важная информация и анонсы от администрации сервера"
          topics={142}
          messages={2453}
          lastPost={{
            title: "Обновление сервера 3.5.2",
            author: "Admin",
            date: "сегодня, 15:30",
          }}
        />
        <CategoryItem
          icon={<AlertTriangle size={24} />}
          title="Правила сервера"
          description="Обязательно к прочтению всем игрокам"
          topics={15}
          messages={207}
          lastPost={{
            title: "Изменения в правилах РП",
            author: "Moderator",
            date: "вчера, 20:15",
          }}
        />
        <CategoryItem
          icon={<Gamepad2 size={24} />}
          title="Игровой процесс"
          description="Обсуждение игрового процесса, вопросы и ответы"
          topics={328}
          messages={5690}
          lastPost={{
            title: "Как получить премиум-статус?",
            author: "Player123",
            date: "сегодня, 10:43",
          }}
        />
      </div>

      <div className="mb-6">
        <h2 className="text-xl font-bold mb-4 text-forum-text">Игровые фракции</h2>
        <CategoryItem
          icon={<Users size={24} />}
          title="Государственные организации"
          description="Полиция, медики, правительство и другие гос. структуры"
          topics={215}
          messages={4328}
          lastPost={{
            title: "Набор в полицию Los Santos",
            author: "Chief_Police",
            date: "сегодня, 12:10",
          }}
        />
        <CategoryItem
          icon={<Users size={24} />}
          title="Криминальные организации"
          description="Банды, мафии и другие неофициальные объединения"
          topics={189}
          messages={3210}
          lastPost={{
            title: "Вступление в La Cosa Nostra",
            author: "DonCorleone",
            date: "вчера, 23:45",
          }}
        />
        <CategoryItem
          icon={<Users size={24} />}
          title="Легальный бизнес"
          description="Всё о легальном бизнесе на сервере"
          topics={124}
          messages={1956}
          lastPost={{
            title: "Как открыть свой автосалон?",
            author: "BusinessMan",
            date: "22.07.2023, 16:20",
          }}
        />
      </div>

      <div>
        <h2 className="text-xl font-bold mb-4 text-forum-text">Помощь и поддержка</h2>
        <CategoryItem
          icon={<Lightbulb size={24} />}
          title="Помощь новичкам"
          description="Гайды, советы и помощь для новых игроков"
          topics={98}
          messages={1245}
          lastPost={{
            title: "С чего начать игру на сервере?",
            author: "Helper",
            date: "позавчера, 14:17",
          }}
        />
        <CategoryItem
          icon={<MessageSquareText size={24} />}
          title="Техническая поддержка"
          description="Проблемы с игрой, вопросы к администрации"
          topics={312}
          messages={2784}
          lastPost={{
            title: "Не могу зайти на сервер",
            author: "UserXYZ",
            date: "сегодня, 09:02",
          }}
        />
        <CategoryItem
          icon={<Bookmark size={24} />}
          title="Жалобы на игроков"
          description="Нарушения правил, жалобы на администрацию"
          topics={567}
          messages={8921}
          lastPost={{
            title: "Жалоба на игрока DarkSide",
            author: "Victim",
            date: "сегодня, 13:29",
          }}
        />
      </div>
    </div>
  );
};

export default ForumCategories;