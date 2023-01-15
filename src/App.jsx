import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, dicrement, reset } from "./store/count";
import { addTask, setTitle, clearTitle } from './store/task';
import { getPost } from './store/post';

const App = () => {

  // const {count, task} = useSelector(state=>state)

  // console.log(count, task);

  const num = useSelector((state) => state.count.num);
  const task = useSelector((state) => state.task.task);
  const title = useSelector((state) => state.task.title);
  const post = useSelector((state) => state.post);

  const dispatch = useDispatch();

  console.log(num);
  console.log(task);
  console.log(title);
  console.log(post);

  const newTask = {
    id: Date.now(),
    title,
  }

  console.log(newTask);

  useEffect(() => {
    dispatch(getPost());
  }, []);

  if (post.status === 'rejected') {
    return <h1>404 error</h1>
  }

  return (
    <>
      <h1>Redux-toolkit {num}</h1>
      <h2>{title}</h2>
      <button className="btn btn-success mx-5" onClick={() => dispatch(increment())}>INCREMENT</button>
      <button className="btn btn-danger mx-5" onClick={() => dispatch(dicrement())}>DICREMENT</button>
      <button className="btn btn-info mx-5" onClick={() => dispatch(reset())}>RESET</button>

      <div className="card w-75 mx-auto p-5 mt-5">
        <input type="text" className="form-control p-3" placeholder='enter new task' value={title} onChange={(e) => {
          dispatch(setTitle(e.target.value))
        }} />
        <button className="btn btn-primary my-5" onClick={() => {
          dispatch(addTask(newTask)),
            dispatch(clearTitle())
        }}>Add</button>

        <ul className="list-group">
          {
            post.status === 'pending' ? <h1>Loading . . .</h1> : post.post.map((el) => {
              return <li key={el.id} className='list-group-item'>{el.title}</li>
            })
          }
        </ul>
      </div>
    </>
  );
};

export default App;