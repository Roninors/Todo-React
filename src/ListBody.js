export let ListBody = ({ todoName, id, deleteTodo, editTodo }) => {
  return (
    <div className="todo-names">
      <table>
        <tr>
          <th>To do</th>
        </tr>
        <tr>
          <td>{todoName}</td>
        </tr>
      </table>

      <button onClick={() => deleteTodo(id)}>Delete</button>
      <button onClick={() => editTodo(id)}>Edit</button>
    </div>
  );
};
