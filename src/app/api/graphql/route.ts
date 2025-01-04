import { NextRequest, NextResponse } from "next/server";
import { graphql, buildSchema } from "graphql";

// Определяем схему с несколькими типами и запросами
const schema = buildSchema(`
  type Query {
    hello: String
    getUser(id: Int!): User
    listUsers: [User]
  }

  type User {
    id: Int
    name: String
    email: String
  }
  `);

// Пример данных
const users = [
  { id: 1, name: "Alice", email: "alice@example.com" },
  { id: 2, name: "Bob", email: "bob@example.com" },
];

// Определяем резолверы
const root = {
  hello: "Hello world!",
  getUser: ({ id }: { id: number }) => users.find((user) => user.id === id),
  listUsers: users,
};

// Обрабатываем POST-запросы
export async function POST(req: NextRequest) {
  const body = await req.json(); // Получаем тело запроса
  const query = body.query;

  // Выполняем GraphQL-запрос
  const response = await graphql({
    schema,
    source: query,
    rootValue: root,
  });
  // Возвращаем JSON-ответ
  return NextResponse.json(response);
}
