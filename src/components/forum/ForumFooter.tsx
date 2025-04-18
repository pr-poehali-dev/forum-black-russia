import { Github, Heart } from "lucide-react";

const ForumFooter = () => {
  return (
    <footer className="bg-forum-card border-t border-forum-border mt-8 py-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-forum-secondary-text text-sm mb-4 md:mb-0">
            <div className="flex items-center justify-center md:justify-start">
              <img src="/logo-b.svg" alt="Black Russia" className="h-6 mr-2" />
              <span>Black Russia Forum © 2023</span>
            </div>
            <p className="mt-1">
              Все права защищены. Игровой портал Black Russia.
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
            <a 
              href="#" 
              className="text-forum-secondary-text hover:text-forum-text transition-colors"
            >
              Политика конфиденциальности
            </a>
          </div>
          
          <div className="flex items-center mt-4 md:mt-0">
            <a 
              href="#" 
              className="text-forum-secondary-text hover:text-forum-text transition-colors"
              title="Исходный код на GitHub"
            >
              <Github size={20} />
            </a>
            <span className="mx-2 text-forum-secondary-text">•</span>
            <span className="text-forum-secondary-text text-sm flex items-center">
              Сделано с <Heart size={14} className="text-forum-accent mx-1" /> к игрокам
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default ForumFooter;