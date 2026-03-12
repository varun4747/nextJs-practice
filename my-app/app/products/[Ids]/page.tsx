export default async function ProductDetails({
  params,
}: {
  params: Promise<{ productId: string }>;
}) {

  const { productId } = await params;

  return (
    <div>
      <h2>This is productDetails page for {productId}</h2>
    </div>
  );
}