import './CSS/TodoItems.css'
import icon from '../Components1/Assets/icon.png'
import check from '../Components1/Assets/checked.png'
import uncheck from '../Components1/Assets/unchecked.png'

const TodoItems = ({no, display, text, settodos}) => {

   const toggle = (no) =>{
        let data = JSON.parse(localStorage.getItem("todos"));
        for (let index = 0; index < data.length; index++) {
           if(data[index].no === no){
            if(data[index].display === ""){
                data[index].display = "line-through";
            }
            else{
                data[index].display = "";
            }
            break;
           }
            
        }
        settodos(data)
    }
    const delete1 = (no) =>{
        let data = JSON.parse(localStorage.getItem("todos"));
        data = data.filter((todo) => todo.no!==no);
        settodos(data);
    }
  return (
    <div className='todoitems'>
      <div className={`todoitems-container ${display}`} onClick={() =>{toggle(no)}}>
        {display === ""?<img src={uncheck} /> :  <img src={check} />}
        
        {/* {display === " "?<img src={uncheck} /> :  <img src={check} />} */}
        <div className='todoitems-text'>{text}</div>
      </div>
      <img className='todoitems-crossIcon' onClick={() => {delete1(no)}} src={icon} />
    </div>
  )
}

export default TodoItems
