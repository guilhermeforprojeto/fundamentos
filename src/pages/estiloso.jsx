import styles from '../styles/Estiloso.module.css'
import Link from 'next/link'
import Layout from '../component/Layout'

export default function Estiloso() {
    return (
        <Layout titulo="Esta é uma pagina Layout!">
            <div className={styles.roxo}>
                <h1>Estilo usando CSS Módulos</h1>
                <h4>Estilicos modularizados é o mesmo css porém com a extenção <p>
                    *.module.css isso faz com que o CSS global não entre</p>
                    em conflito quando o module.css for importado para <p>
                    dentro da pagina onde quer aṕlicar um estilo diferente do </p>
                    estilo global presente na pasta styles
                </h4>
                
            </div>

        </Layout>
    )
}