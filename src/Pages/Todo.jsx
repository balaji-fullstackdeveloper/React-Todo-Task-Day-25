import React from "react";
import "../Pages/Todo.css";

export default function Todo({ todo, updateStatus, editTodo, deleteTodo }) {
  return (
    <div className="">
      <div className="card " key={todo.id}>
        <table className="">
          <tbody className="text-left  ">
            <tr>
              <div>
                <td className="ps-2 " id="name">
                  {" "}
                  Name :
                </td>
              </div>
              <td colspan="2">{todo.taskName}</td>
            </tr>
            <tr>
              <div>
                <td className="ps-2 " id="description">
                  Description:
                </td>
              </div>
              <td colspan="2">{todo.description}</td>
            </tr>
            <tr>
              <td className="ps-2" id="status">
                <label htmlFor="status">
                  <p>Status:</p>
                </label>
              </td>
              <td colspan="2">
                <select
                  className={
                    todo.status === "Completed"
                      ? "bg-success text-white"
                      : "bg-danger text-white"
                  }
                  value={todo.status}
                  name="status"
                  onChange={(e) => updateStatus(todo.id, e.target.value)}
                >
                  <option
                    value="Completed"
                    className={todo.status === "Completed" ? "bg-success" : ""}
                  >
                    Completed
                  </option>
                  <option
                    value="Not Completed"
                    className={
                      todo.status !== "Completed" ? "bg-danger text-white" : ""
                    }
                  >
                    Not Completed
                  </option>
                </select>
              </td>
            </tr>
            <tr>
              <td></td>
              <td className="pb-2">
                <button
                  className="btn btn-success"
                  onClick={() => editTodo(todo.id)}
                  type="button"
                >
                  Edit
                </button>
              </td>
              <td className="pb-2">
                <button
                  className="btn btn-danger"
                  onClick={() => deleteTodo(todo.id)}
                  type="button"
                >
                  Delete
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
