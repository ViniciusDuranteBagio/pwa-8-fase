function Lista() {
    const nomes = ["Eu","sou","Renato"];
        return (
            <>
            <ul>
                {nomes.map(nome => (
                    <li>{nome}</li>
                ))}
            </ul>
            </>
        )
}

export default Lista