export default function AddToDo (){
    return(
        <form>
            <lable htmlFor="todotitle">Todo tittel</lable>
            <input type="text" id="todotitle" placeholder="Dra på butikken"></input>
            <button>Make todo</button>
        </form>
    )
}