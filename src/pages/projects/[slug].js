import CaseStudy from "@/components/projects/case-study/CaseStudy"
import { caseStudies, getCaseStudy } from "@/data/caseStudies"

export default function ProjectPage({ slug }) {
    return <CaseStudy project={getCaseStudy(slug)} />
}
export function getStaticPaths() {
    return { paths: caseStudies.map(project => ({ params: { slug: project.slug } })), fallback: false }
}
export function getStaticProps({ params }) {
    return { props: { slug: params.slug } }
}
