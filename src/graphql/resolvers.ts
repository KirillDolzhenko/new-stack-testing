export interface IToDo {
  id: number;
  title: string;
  status: boolean;
}

const data: IToDo[] = [
  { id: 1, title: "Buy milk", status: false },
  { id: 2, title: "Walk the dog", status: false },
  { id: 3, title: "Learn GraphQL", status: false },
];

export const resolvers = {
  Query: {
    hello: () => "Hello, world!",

    todos: () => data,
  },

  Mutation: {
    addTodo(parent: unknown, { text }: { text: string }) {
      data.push({
        id: data.length + 1,
        title: text,
        status: false,
      });

      return data;
    },
    changeStatus(
      parent: unknown,
      { status, id }: { status: boolean; id: number }
    ) {
      const el = data.find((el) => el.id === id);

      el ? (el.status = status) : null;

      return el;
    },
  },
};
