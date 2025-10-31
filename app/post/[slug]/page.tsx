
export default async function PostDetail(
    props: { params: Promise<{ slug: string }> }
) {
    const { slug } = await props.params; // ✅ unwrap the Promise
    return (
        <h3>Hello Post Detail { slug }</h3>
    )
}