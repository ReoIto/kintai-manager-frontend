import { GetStaticProps, GetServerSideProps } from 'next'

export default function Index({
  drivers,
}: {
  drivers: {
    id: number
    name: string
    uid?: string
    hourly_pay: number
    minimum_guaranteed_salary: number
    deleted_at?: string
    created_at: string
    updated_at: string
  }[]
}) {
  return (
    <>
      <h1>Drivers</h1>
      <ul>
        {drivers.map((driver) => {
          return (
            <li key={driver.id}>
              <p>{`ID: ${driver.id}`}</p>
              <p>{`名前: ${driver.name}`}</p>
              <p>{`時給: ${driver.hourly_pay}`}</p>
              <p>{`最低保証金額: ${driver.minimum_guaranteed_salary}`}</p>
            </li>
          )
        })}
      </ul>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const res = await fetch('http://localhost:3000/api/v1/drivers')
  const driversData = await res.json()
  const drivers = driversData.drivers

  return {
    props: {
      drivers,
    },
  }
}

// export const getStaticProps: GetStaticProps = async () => {
//   const res = await fetch('http://localhost:3000/api/v1/drivers')
//   const allDriversData = await res.json()
//   const names = allDriversData.drivers.map((driver: any) => driver.name)

//   return {
//     props: {
//       names,
//     },
//   }
// }
