export default function LegacyProjectPage() { return null }
export function getServerSideProps() {
    return { redirect: { destination: '/projects/resource-allocation-tool', permanent: true } }
}
