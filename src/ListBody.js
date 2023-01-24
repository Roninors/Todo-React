export let ListBody = (props, key) => {
  return (
    <div className="todo-names">
      <table>
        <tr>
          <th>To do</th>
        </tr>
        <tr>
          <td>{props.todoName}</td>
        </tr>
      </table>

      <button onClick={() => props.deleteTodo(props.id)}>Delete</button>
      <button onClick={() => props.editTodo(props.id)}>Edit</button>
    </div>
  );
};
