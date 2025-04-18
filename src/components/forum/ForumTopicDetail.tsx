import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar } from "@/components/ui/avatar";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { MessageSquare, ThumbsUp, Flag, Reply, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

interface PostProps {
  author: {
    name: string;
    avatar: string;
    role?: string;
    joined: string;
    posts: number;
  };
  content: string;
  date: string;
  isTopicStarter?: boolean;
}

const ForumPost = ({ author, content, date, isTopicStarter = false }: PostProps) => {
  return (
    <Card className="forum-card mb-4">
      <div className="flex flex-col md:flex-row">
        <div className="p-4 md:w-48 bg-forum-bg border-r border-forum-border">
          <div className="flex flex-col items-center text-center">
            <Avatar className="w-20 h-20">
              <img src={author.avatar} alt={author.name} />
            </Avatar>
            <div className="mt-2 font-medium text-forum-text">{author.name}</div>
            {author.role && (
              <Badge className="mt-1">{author.role}</Badge>
            )}
            <div className="mt-3 text-xs text-forum-secondary-text">
              <div>Зарегистрирован: {author.joined}</div>
              <div>Сообщений: {author.posts}</div>
            </div>
          </div>
        </div>
        <div className="flex-1 p-4">
          {isTopicStarter && (
            <div className="text-lg font-bold text-forum-text mb-3">
              [Важно] Изменения в правилах сервера от 15.07.2023
            </div>
          )}
          <div className="forum-post-content text-forum-text">
            {content}
          </div>
          <div className="mt-4 flex justify-between items-center text-xs text-forum-secondary-text">
            <div>{date}</div>
            <div className="flex gap-3">
              <button className="flex items-center hover:text-forum-text">
                <ThumbsUp size={14} className="mr-1" /> Нравится
              </button>
              <button className="flex items-center hover:text-forum-text">
                <Reply size={14} className="mr-1" /> Цитировать
              </button>
              <button className="flex items-center hover:text-forum-text">
                <Flag size={14} className="mr-1" /> Пожаловаться
              </button>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
};

const ForumTopicDetail = ({ topicId }: { topicId?: string }) => {
  const topicTitle = "Изменения в правилах сервера от 15.07.2023";
  
  return (
    <div>
      <div className="mb-6">
        <Link to="/forum/category" className="flex items-center text-forum-secondary-text hover:text-forum-text mb-4">
          <ArrowLeft size={16} className="mr-1.5" /> Назад к списку тем
        </Link>
        <h1 className="text-2xl font-bold text-forum-text">{topicTitle}</h1>
        <div className="flex items-center gap-2 text-sm text-forum-secondary-text mt-2">
          <div className="flex items-center">
            <MessageSquare size={14} className="mr-1" /> 45 ответов
          </div>
          <span>•</span>
          <div>Создана 15.07.2023</div>
        </div>
      </div>

      <ForumPost
        author={{
          name: "Admin",
          avatar: "/placeholder.svg",
          role: "Администратор",
          joined: "01.01.2020",
          posts: 1524,
        }}
        content={`
          <p>Уважаемые игроки!</p>
          <p>Сообщаем вам о важных изменениях в правилах сервера, которые вступают в силу с сегодняшнего дня:</p>
          <ol>
            <li>Запрещается любая реклама сторонних серверов и проектов.</li>
            <li>Усилены наказания за использование читов и эксплойтов.</li>
            <li>Добавлены новые правила для государственных организаций.</li>
            <li>Обновлены правила РП-отыгрыша в зонах города.</li>
          </ol>
          <p>Пожалуйста, ознакомьтесь с полным списком изменений на нашем сайте.</p>
          <p>С уважением, Администрация Black Russia.</p>
        `}
        date="15.07.2023, 10:00"
        isTopicStarter={true}
      />

      <ForumPost
        author={{
          name: "Player123",
          avatar: "/placeholder.svg",
          joined: "15.03.2022",
          posts: 354,
        }}
        content={`
          <p>А можно подробнее про наказания за читы? Какие именно программы считаются читами?</p>
          <p>И ещё вопрос по РП-отыгрышу в зонах города, что именно изменилось?</p>
        `}
        date="15.07.2023, 10:32"
      />

      <ForumPost
        author={{
          name: "Moderator",
          avatar: "/placeholder.svg",
          role: "Модератор",
          joined: "05.06.2021",
          posts: 891,
        }}
        content={`
          <p>Отвечаю на вопросы:</p>
          <blockquote>
            <p>А можно подробнее про наказания за читы? Какие именно программы считаются читами?</p>
          </blockquote>
          <p>Читами считаются любые программы, модификации или скрипты, дающие преимущество над другими игроками. Наказание - перманентный бан аккаунта без возможности восстановления.</p>
          
          <blockquote>
            <p>И ещё вопрос по РП-отыгрышу в зонах города, что именно изменилось?</p>
          </blockquote>
          <p>Теперь в центральных районах города требуется более детальный РП-отыгрыш взаимодействий. Подробности можно прочитать в разделе 4.2 правил.</p>
        `}
        date="15.07.2023, 11:15"
      />

      <div className="mt-8">
        <h3 className="text-lg font-bold text-forum-text mb-4">Оставить ответ</h3>
        <Card className="forum-card p-4">
          <Textarea 
            placeholder="Введите текст сообщения..." 
            className="min-h-32 mb-4" 
          />
          <div className="flex justify-between">
            <Button variant="outline">Предпросмотр</Button>
            <Button>Отправить</Button>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default ForumTopicDetail;