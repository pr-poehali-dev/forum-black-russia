import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MessageSquare, Pin, Lock, ArrowUp, Eye, Plus } from "lucide-react";
import { Link } from "react-router-dom";

interface TopicProps {
  id: string;
  title: string;
  author: string;
  replies: number;
  views: number;
  isPinned?: boolean;
  isLocked?: boolean;
  isHot?: boolean;
  lastReply?: {
    author: string;
    date: string;
  };
}

const Topic = ({
  id,
  title,
  author,
  replies,
  views,
  isPinned = false,
  isLocked = false,
  isHot = false,
  lastReply,
}: TopicProps) => {
  return (
    <Card className="forum-card mb-3">
      <div className="flex p-4 items-center">
        <div className="mr-4 text-forum-secondary-text">
          <MessageSquare size={24} className={isHot ? "text-forum-accent" : ""} />
        </div>
        <div className="flex-1">
          <div className="flex items-center gap-2">
            <Link to={`/forum/topic/${id}`} className="forum-heading hover:text-forum-accent">
              {title}
            </Link>
            <div className="flex items-center gap-1">
              {isPinned && (
                <Badge variant="outline" className="flex items-center px-1.5">
                  <Pin size={10} className="mr-1" /> Закреплено
                </Badge>
              )}
              {isLocked && (
                <Badge variant="outline" className="flex items-center px-1.5">
                  <Lock size={10} className="mr-1" /> Закрыто
                </Badge>
              )}
              {isHot && (
                <Badge variant="outline" className="flex items-center px-1.5 border-forum-accent text-forum-accent">
                  <ArrowUp size={10} className="mr-1" /> Популярно
                </Badge>
              )}
            </div>
          </div>
          <p className="forum-subheading mt-1 text-sm">
            Автор: <span className="text-forum-accent">{author}</span>
          </p>
        </div>
        <div className="hidden md:flex items-center gap-6 text-forum-secondary-text text-sm">
          <div className="flex items-center">
            <MessageSquare size={16} className="mr-1.5" /> {replies}
          </div>
          <div className="flex items-center">
            <Eye size={16} className="mr-1.5" /> {views}
          </div>
        </div>
      </div>
      {lastReply && (
        <div className="px-4 py-2 bg-forum-bg border-t border-forum-border text-xs text-forum-secondary-text">
          <div className="flex justify-end">
            <div>
              Последний ответ от <span className="text-forum-accent">{lastReply.author}</span>, {lastReply.date}
            </div>
          </div>
        </div>
      )}
    </Card>
  );
};

const getCategoryName = (categoryId?: string) => {
  switch(categoryId) {
    case "news": return "Новости и объявления";
    case "rules": return "Правила сервера";
    case "gameplay": return "Игровой процесс";
    case "government": return "Государственные организации";
    case "criminal": return "Криминальные организации";
    case "business": return "Легальный бизнес";
    case "help": return "Помощь новичкам";
    case "support": return "Техническая поддержка";
    case "complaints": return "Жалобы на игроков";
    default: return "Категория форума";
  }
};

const ForumTopicList = ({ categoryId }: { categoryId?: string }) => {
  const categoryName = getCategoryName(categoryId);
  
  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-forum-text">{categoryName}</h1>
        <Button className="forum-button">
          <Plus size={16} className="mr-1.5" /> Создать тему
        </Button>
      </div>

      <div className="mb-6">
        {categoryId === "news" || !categoryId ? (
          <>
            <Topic
              id="1"
              title="[Важно] Изменения в правилах сервера от 15.07.2023"
              author="Admin"
              replies={45}
              views={1250}
              isPinned={true}
              lastReply={{
                author: "Player123",
                date: "вчера, 18:23",
              }}
            />
            <Topic
              id="2"
              title="Обновление сервера до версии 3.5.2"
              author="Moderator"
              replies={112}
              views={2345}
              isHot={true}
              lastReply={{
                author: "GameExpert",
                date: "сегодня, 10:15",
              }}
            />
            <Topic
              id="3"
              title="Результаты конкурса среди игроков"
              author="EventManager"
              replies={89}
              views={1734}
              lastReply={{
                author: "Winner777",
                date: "сегодня, 14:30",
              }}
            />
          </>
        ) : categoryId === "rules" ? (
          <>
            <Topic
              id="4"
              title="[Важно] Основные правила поведения на сервере"
              author="Admin"
              replies={32}
              views={8750}
              isPinned={true}
              isLocked={true}
              lastReply={{
                author: "Moderator",
                date: "12.06.2023, 15:40",
              }}
            />
            <Topic
              id="5"
              title="Правила для государственных организаций"
              author="Moderator"
              replies={64}
              views={3210}
              lastReply={{
                author: "OfficerMax",
                date: "вчера, 19:27",
              }}
            />
          </>
        ) : (
          // Общий случай для других категорий
          <>
            <Topic
              id="6"
              title="Подскажите, как начать игру на сервере?"
              author="NewPlayer"
              replies={28}
              views={450}
              lastReply={{
                author: "Helper",
                date: "сегодня, 08:15",
              }}
            />
            <Topic
              id="7"
              title="Не работает микрофон в игре"
              author="SoundProblem"
              replies={12}
              views={230}
              lastReply={{
                author: "TechSupport",
                date: "позавчера, 21:05",
              }}
            />
            <Topic
              id="8"
              title="[Гайд] Как быстро заработать деньги"
              author="RichPlayer"
              replies={156}
              views={5670}
              isHot={true}
              lastReply={{
                author: "Newbie",
                date: "сегодня, 16:22",
              }}
            />
            <Topic
              id="9"
              title="Вопрос по покупке дома в игре"
              author="HomeBuyer"
              replies={43}
              views={875}
              lastReply={{
                author: "RealEstate",
                date: "сегодня, 11:30",
              }}
            />
            <Topic
              id="10"
              title="Когда будет следующее обновление?"
              author="WaitingPlayer"
              replies={37}
              views={924}
              lastReply={{
                author: "Moderator",
                date: "вчера, 20:45",
              }}
            />
          </>
        )}
      </div>

      <div className="flex justify-between items-center">
        <Button variant="outline" className="text-forum-secondary-text">
          Назад
        </Button>
        <div className="text-forum-secondary-text text-sm">
          Страница 1 из 10
        </div>
        <Button variant="outline" className="text-forum-secondary-text">
          Вперед
        </Button>
      </div>
    </div>
  );
};

export default ForumTopicList;