import { Col, Row, Input, Button, Select, Tag } from "antd";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { v4 as uuidV4 } from "uuid";
import { addTodo } from "../../redux/actions";
import remainingSelector from "../../redux/selectors";
import Todo from "../Todo";

export default function TodoList() {
  const todoList = useSelector(remainingSelector);
  const dispatch = useDispatch();
  const [todo, setTodo] = useState("");
  const [priority, setPriority] = useState("Medium");

  const handleChangeTodo = (e) => {
    setTodo(e.target.value);
  };
  const handleChangePriority = (value) => {
    setPriority(value);
  };
  const handleSubmit = () => {
    dispatch(
      addTodo({
        id: uuidV4(),
        name: todo,
        priority: priority,
        completed: false,
      })
    );
  };

  return (
    <Row style={{ height: "calc(100% - 40px)" }}>
      <Col span={24} style={{ height: "calc(100% - 40px)", overflowY: "auto" }}>
        {todoList.map((todo) => (
          <Todo
            key={todo.id}
            id={todo.id}
            name={todo.name}
            priority={todo.priority}
            completed={todo.completed}
          />
        ))}
      </Col>
      <Col span={24}>
        <Input.Group style={{ display: "flex" }} compact>
          <Input value={todo} onChange={handleChangeTodo} />
          <Select
            defaultValue="Medium"
            value={priority}
            onChange={handleChangePriority}
          >
            <Select.Option value="High" label="High">
              <Tag color="red">High</Tag>
            </Select.Option>
            <Select.Option value="Medium" label="Medium">
              <Tag color="blue">Medium</Tag>
            </Select.Option>
            <Select.Option value="Low" label="Low">
              <Tag color="gray">Low</Tag>
            </Select.Option>
          </Select>
          <Button type="primary" onClick={handleSubmit}>
            Add
          </Button>
        </Input.Group>
      </Col>
    </Row>
  );
}
