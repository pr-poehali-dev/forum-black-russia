import { useParams } from "react-router-dom";
import ForumHeader from "@/components/forum/ForumHeader";
import ForumSidebar from "@/components/forum/ForumSidebar";
import ForumFooter from "@/components/forum/ForumFooter";
import ForumTopicDetail from "@/components/forum/ForumTopicDetail";

const ForumTopic = () => {
  const { topicId } = useParams();
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
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          <div className="lg:col-span-3">
            <ForumTopicDetail topicId={topicId} />
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

export default ForumTopic;