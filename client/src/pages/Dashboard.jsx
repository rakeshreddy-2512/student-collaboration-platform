import { useEffect, useState } from 'react';
import { api } from '../services/api';

export default function Dashboard() {
  const [projects, setProjects] = useState([]);
  const [tasks, setTasks] = useState([]);
  const [chats, setChats] = useState([]);
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    const load = async () => {
      const [p, t, c, n] = await Promise.all([
        api.get('/projects'),
        api.get('/tasks'),
        api.get('/chats'),
        api.get('/notifications')
      ]);
      setProjects(p.data);
      setTasks(t.data);
      setChats(c.data);
      setNotifications(n.data);
    };
    load();
  }, []);

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-3xl font-bold">Student Collaboration Platform</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card title="Projects" value={projects.length} />
        <Card title="Tasks" value={tasks.length} />
        <Card title="Group Chats" value={chats.length} />
        <Card title="Notifications" value={notifications.length} />
      </div>
    </div>
  );
}

function Card({ title, value }) {
  return (
    <div className="rounded-xl bg-white shadow p-4 border border-slate-100">
      <p className="text-sm text-slate-500">{title}</p>
      <p className="text-2xl font-semibold">{value}</p>
    </div>
  );
}
