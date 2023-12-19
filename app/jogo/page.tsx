'use client'
import React, { useEffect, useState } from "react";

export default function Game() {
    const [palavra, setPalavra] = useState<string[]>([]);

    useEffect(() => {
        fetch('../Words.json')
        .then((res) => {
            if (!res.ok) {
                throw new Error('Erro ao carregar os dados');
            }
            return res.json();
        })
        .then((data: { palavra: string[] }) => {
            const words: string[] = data.palavra; 
            setPalavra(words); 
        })
        .catch((error) => {
            console.error('Erro ao carregar as palavras:', error);
        });
    }, []);
    const arrays = (numero: number) =>{
      const letra:string[][] = palavra.map((palavra) => palavra.split(''));
      return console.log(letra[numero])
    }
    arrays(Math.floor(Math.random() * 20))
    
    
    return(
        <>
        <h1>Qual a palavra ?</h1>
        <p>{}</p>
        <form action="">
            <input type="text" disabled/>
            
        </form>

        <form action="">
        <input type="button" value="A"/>
        <input type="button" value="B"/>
        <input type="button" value="C"/>
        <input type="button" value="D"/>
        <input type="button" value="E"/>
        <input type="button" value="F"/>
        <input type="button" value="G"/>
        <input type="button" value="H"/>
        <input type="button" value="I"/>
        <input type="button" value="J"/>
        <input type="button" value="K"/>
        <input type="button" value="L"/>
        <input type="button" value="M"/>
        <input type="button" value="N"/>
        <input type="button" value="O"/>
        <input type="button" value="P"/>
        <input type="button" value="Q"/>
        <input type="button" value="R"/>
        <input type="button" value="S"/>
        <input type="button" value="T"/>
        <input type="button" value="U"/>
        <input type="button" value="V"/>
        <input type="button" value="W"/>
        <input type="button" value="X"/>
        <input type="button" value="Y"/>
        <input type="button" value="Z"/>

        </form>
        </>

    )
}