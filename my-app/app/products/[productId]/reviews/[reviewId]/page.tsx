export default async function reviewDetails({
  params,
}: {
  params: Promise<{ productId: string ,reviewId:string }>;
}) {

  const { productId,reviewId } = await params;

  return (
    <div>
      <h3>Review {reviewId} Product details for {productId}</h3>
    </div>
  );
}