export default function LegacyProjectPage() { return null }
export function getServerSideProps() {
    return { redirect: { destination: '/projects/automated-musicians', permanent: true } }
}
