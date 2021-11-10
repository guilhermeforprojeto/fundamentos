import Link from 'next/link'
import Layout from '../component/Layout'

export default function Jsx (){
    return (
        <Layout titulo="Esta tem um Layout!">
        <div><hi> JSX<br></br></hi>
        <Link href="/">
        <button >Voltar</button>
        </Link>
        </div>
        </Layout>
    )
}