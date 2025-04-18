import ForumHeader from "@/components/forum/ForumHeader";
import ForumCategories from "@/components/forum/ForumCategories";
import ForumSidebar from "@/components/forum/ForumSidebar";
import ForumStatistics from "@/components/forum/ForumStatistics";
import ForumFooter from "@/components/forum/ForumFooter";

const Forum = () => {
  // Здесь в реальном проекте могла бы быть проверка аутентификации
  const isLoggedIn = false;
  const username = "PlayerName";
  const avatarUrl = "/placeholder.svg";

  return (
    <div className="forum-container min-h-screen flex flex-col">
      <ForumHeader 
        isLoggedIn={isLoggedIn} 
        username={username} 
        avatarUrl={avatarUrl} 
      />
      
      <main className="flex-1 container mx-auto px-4 py-6">
        <ForumStatistics />
        
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          <div className="lg:col-span-3">
            <ForumCategories />
          </div>
          
          <div className="lg:col-span-1">
            <ForumSidebar />
          </div>
        </div>
      </main>
      
      <ForumFooter />
    </div>
  );
};

export default Forum;