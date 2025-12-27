import "./List.css";
import TodoItem from "./TodoItem";
import { useState, useMemo } from "react";

const List = ({ todos, onUpdate, onDelete }) => {
  const [search, setSearch] = useState("");

  const onChangeSearch = (e) => {
    setSearch(e.target.value);
  };

  const getFilteredData = () => {
    if (search === "") {
      return todos;
    }
    return todos.filter((todo) =>
      todo.content.toLowerCase().includes(search.toLowerCase())
    );
  };

  const filteredTodos = getFilteredData();

  // *** 최적화
  // (useMemo 사용하기 위한) 현재 투두들의 상태를 분석해 수치로 제공하는 함수

  // 의존성 배열 : deps
  // deps에 포함된 값이 변경되었을 때만, 첫번째 인수로 전달한 콜백함수를 다시 실행
  // + 해당 콜백함수가 반환하는 값을 useMemo는 그대로 다시 반환해줌
  const { totalCount, doneCount, notDoneCount } = useMemo(() => {
    console.log("getAnalyzedData 호출");
    const totalCount = todos.length;
    const doneCount = todos.filter((todo) => todo.isDone).length;
    const notDoneCount = totalCount - doneCount;

    return {
      totalCount,
      doneCount,
      notDoneCount,
    };
  }, [todos]);

  // map -> map의 각 반복 요소 (todo 하나) 마다 <TodoItem /> 컴포넌트를 하나씩 생성
  // ...todo 는 아래와 완전 같은 의미) -> props를 하나한 쓰기 귀찮아서 쓰는 문법
  // id={todo.id}
  // isDone={todo.isDone}
  // content={todo.content}
  // date={todo.date}
  return (
    <div className="List">
      <h4>Todo List🌱</h4>

      <div>
        <div>total: {totalCount}</div>
        <div>done: {doneCount}</div>
        <div>notDone: {notDoneCount}</div>
      </div>

      <input
        value={search}
        onChange={onChangeSearch}
        placeholder="검색어를 입력하세요."
      />

      <div className="todos_srapper">
        {filteredTodos.map((todo) => {
          return (
            <TodoItem
              key={todo.id}
              {...todo}
              onUpdate={onUpdate}
              onDelete={onDelete}
            />
          );
        })}
      </div>
    </div>
  );
};

export default List;
