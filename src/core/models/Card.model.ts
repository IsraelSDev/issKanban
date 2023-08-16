export type TaskModel = {
  title: string;
  description: string;
  subtasks: subtaskModel[];
  status: statusTask;
}

type subtaskModel = {
  title: string;
  status: statusTask;
}

export type statusTask = {
  doing: boolean;
  toDo: boolean;
  done: boolean;
}


