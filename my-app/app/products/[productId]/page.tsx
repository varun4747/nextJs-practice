export default async function ProductDetails({
  params,
}: {
  params: Promise<{ productId: string }>;
}) {

  const { productId } = await params;

  return (
    <div>
      <h3>Product details for {productId}</h3>
    </div>
  );
}