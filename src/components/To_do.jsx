import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { TiPencil } from "react-icons/ti";
import { BsTrash } from "react-icons/bs";
import {
  setToDoList,
  addToDo,
  updateTodo,
  sortTodo,
  toggledCompleted,
} from "../features/todoSlice";

const ToDo = () => {
  const dispatch = useDispatch();
  const todoList = useSelector((state) => state.todo.todoList);
  const sortCriteria = useSelector((state) => state.todo.sortCriteria);
  const [showModel, setShowModel] = useState(false);
  const [currentTodo, setCurrentTodo] = useState(null);
  const [newTask, setNewTask] = useState("");

  const handleUpdateTodoList = (id, task) => {
    if (typeof task !== "string" || task.trim().length === 0) {
      alert("Please enter a valid task");
    } else {
      dispatch(updateTodo({ task: task, id: id }));
      setShowModel(false);
      setCurrentTodo(null);
      setNewTask("");
    }
  };

  const handleDeleteToDo = (id) => {
    const updatedToDoList = todoList.filter((todo) => todo.id !== id);
    dispatch(setToDoList(updatedToDoList));
    localStorage.setItem("todolist", JSON.stringify(updatedToDoList));
  };

  useEffect(() => {
    if (todoList.length > 0) {
      localStorage.setItem("todolist", JSON.stringify(todoList));
    }
  }, [todoList]);

  useEffect(() => {
    const localTodoList = JSON.parse(localStorage.getItem("todolist"));
    if (localTodoList) {
      dispatch(setToDoList(localTodoList));
    }
  }, [dispatch]);

  const handleAddTodo = (task) => {
    if (typeof task !== "string" || task.trim().length === 0) {
      alert("Please enter a valid task");
    } else {
      dispatch(
        addToDo({
          task: task,
          id: Date.now(),
        })
      );
      setNewTask("");
      setShowModel(false);
    }
  };

  const sortedTodoList = todoList.filter((todo) => {
    if (sortCriteria === "All") return true;
    if (sortCriteria === "Completed" && todo.completed) return true;
    if (sortCriteria === "Not Completed" && !todo.completed) return true;
    return false;
  });

  const handleToggleCompleted = (id) => {
    dispatch(toggledCompleted({ id }));
  };
  const handlesort = (sortCriteria) => {
    dispatch(sortTodo(sortCriteria));
  };

  return (
    <div className="bg-slate-100 border border-slate-400 backdrop-filter backdrop-blur-sm bg-opacity-30 w-11/12 max-w-md flex flex-col p-7 min-h-[550px] rounded-xl shadow-lg text-black">
      <div className="flex items-center justify-center ">
        <h1 className="text-4xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-200">
          To Do List
        </h1>
      </div>
      {showModel && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-8 rounded-md flex flex-col">
            <input
              type="text"
              placeholder={
                currentTodo ? "Update your task here" : "Enter your task here"
              }
              className="border p-2 rounded-md outline-none mb-4"
              value={newTask}
              onChange={(e) => setNewTask(e.target.value)}
            />
            <div className="flex justify-between mt-4">
              {currentTodo ? (
                <div className="flex justify-between">
                  <button
                    className="bg-customBlue text-white py-2 px-8 rounded-md mr-1"
                    onClick={() =>
                      handleUpdateTodoList(currentTodo.id, newTask)
                    }
                  >
                    Save
                  </button>
                  <button
                    className="bg-red-700 text-white py-2 px-5 rounded-md ml-1"
                    onClick={() => {
                      setShowModel(false);
                      handleUpdateTodoList(currentTodo.id, newTask);
                    }}
                  >
                    Cancel
                  </button>
                </div>
              ) : (
                <>
                  <button
                    className="bg-red-700 text-white py-2 px-5 rounded-md mr-1"
                    onClick={() => setShowModel(false)}
                  >
                    Cancel
                  </button>
                  <button
                    className="bg-customBlue text-white py-2 px-8 rounded-md ml-1"
                    onClick={() => handleAddTodo(newTask)}
                  >
                    Add
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      )}
      <div className="flex items-center justify-center flex-col">
        {todoList.length === 0 ? (
          <div>
            <p className="text-black text-2xl mb-5 mt-6">
              You have no todos. Please add one.
            </p>
          </div>
        ) : (
          <div className="container mx-auto mt-6">
            <div className="flex justify-center mb-6">
              <select
                className="p-1 outline-none text-sm rounded-sm"
                onChange={(e) => handlesort(e.target.value)}
              >
                <option value="All">All</option>
                <option value="Completed">Completed</option>
                <option value="Not Completed">Not Completed</option>
              </select>
            </div>
            {sortedTodoList.map((todo) => (
              <div
                key={todo.id}
                className="flex items-center justify-between mb-6 bg-gray-100 mx-auto w-full md:w-[75%] rounded-md p-4"
              >
                <div
                  className={`${
                    todo.completed
                      ? "line-through text-green-700"
                      : "text-black"
                  } cursor-pointer`}
                  onClick={() => handleToggleCompleted(todo.id)}
                >
                  {todo.task}
                </div>
                <div className="flex gap-4">
                  <button
                    className="bg-blue-600 text-white p-1 rounded-md"
                    onClick={() => {
                      setShowModel(true);
                      setCurrentTodo(todo);
                      setNewTask(todo.task);
                    }}
                  >
                    <TiPencil />
                  </button>
                  <button
                    className="bg-red-600 text-white p-1 rounded-md"
                    onClick={() => handleDeleteToDo(todo.id)}
                  >
                    <BsTrash />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="flex items-center justify-center mb-4">
        <button
          onClick={() => setShowModel(true)}
          className="bg-blue-500 text-center text-white py-3 px-10 rounded-md cursor-pointer"
        >
          Add Task
        </button>
      </div>
    </div>
  );
};

export default ToDo;
