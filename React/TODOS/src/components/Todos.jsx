import Todo from "./Todo";

export default function Todos (){
    
    const todoItems = [
        {
            id: 0,
            title: "Gå på butikken",
            content: "Hanlde spagetti og dorull"
        },
        {
            id: 1,
            title: "Skrive emnerapport",
            content: "Gå igjennom statestikk og skrive rapport og tilbakemelding"
        },
        {
            id: 2,
            title: "Kjøpe kattemat",
            content: "Kjøpe ny slankefôr..."
        },


    ]

    return(
        <section>
            <h2>Todos</h2>
            <Todo />
        </section>
    )
}