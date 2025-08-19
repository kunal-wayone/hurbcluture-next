import AuthGuard from "../components/common/AuthGuard";
import Wrapper from "../components/common/Wrapper";

// app/product/page.tsx
export default function page() {
  return (
    <AuthGuard>
      <Wrapper>
        <div>
          <h1>All Products</h1>
          {/* Map through product list here */}
        </div>
      </Wrapper>
    </AuthGuard>
  );
}
