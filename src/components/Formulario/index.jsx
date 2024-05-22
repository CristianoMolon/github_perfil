import { useState, useEffect } from "react"

const Formulario = () => {
    const [materiaA, setMateriaA] = useState(0);
    const [materiaB, setMateriaB] = useState(0);
    const [materiaC, setMateriaC] = useState(0);
    const [nome, setNome] = useState('');

    useEffect(() => {
        console.log("o componente iniciou");

        return () => {
            console.log("o componente finalizou")
        }
    }, [])

    useEffect(() => {
        console.log("o estado nome mudou")
    }, [nome])

    useEffect(() => {
        console.log("materia mudou para: " + materiaA)
    }, [materiaA])

    const alteraNome = (evento) => {
        // setNome(evento.target.value);
        setNome(estadoAnterior => {

            return evento.target.value
        })
    }

    const renderizaResultado = () => {
        const soma = parseInt(materiaA) + parseInt(materiaB) + parseInt(materiaC);
        const media = soma / 3;

        if (media >= 6) {
            return (
                <p>{nome} foi aprovado</p>
            )
        } else {
            return (
                <p>{nome} foi reprovado</p>
            )
        }
    }

    return (
        <form>
            <ul>
                {[1, 2, 3, 4, 5].map(item => (
                    <li key={item}>{item}</li>
                ))}
            </ul>

            <input type="text" placeholder="Seu nome" onChange={alteraNome} />
            <input type="number" placeholder="Nota Matéria A" onChange={({target}) => setMateriaA(target.value)} />
            <input type="number" placeholder="Nota Matéria B" onChange={evento => setMateriaB(evento.target.value)} />
            <input type="number" placeholder="Nota Matéria C" onChange={evento => setMateriaC(evento.target.value)} />
            {renderizaResultado()}
        </form>
    )
}

export default Formulario;