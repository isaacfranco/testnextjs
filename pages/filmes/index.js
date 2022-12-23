import Link from "next/link"
import Image from 'next/image'

export default function Filmes({ filmes, page } ) {

  return (
    <>
    <h1>Filmes</h1>
    {(page > 1) &&
      <Link href={`/filmes?page=${page-1}`}>ant</Link>
    }
    {page}
    <Link href={`/filmes?page=${page+1}`}>prox</Link>
    <ul>
    {
      filmes.map((filme) => {
        return <li>
          <Image src={filme.Poster} width={150} height={150} />
          {filme.Title}</li>
      })
    }
    </ul>
    </>
  )
}

export async function getServerSideProps({ query }) {

  console.log('query', query.page)

  const page = parseInt(query.page)
  let calculatedPage = page ? page : 1


  // Fetch data from external API
  const url = `https://www.omdbapi.com/?s=Seven&apiKey=fe680ace&page=${calculatedPage}`
  console.log('url', url)
  const res = await fetch(url)
  const data = await res.json()

  // Pass data to the page via props
  return { props: { filmes: data.Search, page: calculatedPage } }
}
