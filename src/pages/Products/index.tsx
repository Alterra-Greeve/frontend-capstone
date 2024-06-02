import useFetch from "@/lib/hooks/useFetch";

export default function ProductsPage() {
  const { loading, error } = useFetch("products", { method: 'get' });

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;

  return (
    <>
      products
    </>
  )
}
