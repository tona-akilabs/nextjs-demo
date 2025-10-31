
export default async function AboutDetailPage(
    props: { params: Promise<{ id: string }> }
) {
    const { id } = await props.params; // ✅ unwrap the Promise
    return (
        <h1>Detail Page { id }</h1>
    )
}