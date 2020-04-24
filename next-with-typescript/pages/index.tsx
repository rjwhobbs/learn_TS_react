interface Task {
  title: string
}

interface TaskListProps {
  tasks: Task[]
}

const TaskList = ({tasks}: TaskListProps) => {
  return (
    <ul>
      {tasks.map((task, i) => {
        return <li key={i}>{task.title}</li>;
      })}
    </ul>
  )
}

const tasks = [
  {title: 'One'},
  {title: 'Two'}
];

export default () => <div><TaskList tasks={tasks}/></div>;