import { Card } from "@/components/ui/card";
import { MessageSquare, FileText, Users, Clock } from "lucide-react";

const StatItem = ({
  icon,
  value,
  label,
}: {
  icon: React.ReactNode;
  value: string;
  label: string;
}) => (
  <div className="flex items-center">
    <div className="text-forum-accent mr-3">{icon}</div>
    <div>
      <div className="text-forum-text font-bold text-lg">{value}</div>
      <div className="text-forum-secondary-text text-xs">{label}</div>
    </div>
  </div>
);

const ForumStatistics = () => {
  return (
    <Card className="forum-card mb-6">
      <div className="p-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <StatItem icon={<MessageSquare size={24} />} value="542,128" label="Сообщений" />
          <StatItem icon={<FileText size={24} />} value="12,345" label="Тем" />
          <StatItem icon={<Users size={24} />} value="98,765" label="Пользователей" />
          <StatItem
            icon={<Clock size={24} />}
            value="VeteranPlayer"
            label="Последний пользователь"
          />
        </div>
      </div>
    </Card>
  );
};

export default ForumStatistics;