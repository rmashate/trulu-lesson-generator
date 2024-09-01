import dynamic from 'next/dynamic'

const DynamicMyGamesComponent = dynamic(
  () => import('../components/MyGamesComponent'),
  { ssr: false }
)

export default function MyGames() {
  return (
    <>
      <DynamicMyGamesComponent />
    </>
  )
}