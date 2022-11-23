import { NextPage } from "next";
import { Layout } from "../../components/layout";
import { Product } from "../../components/product";
import { useRouter } from "next/router";
const ProductPage: NextPage = () => {
  const router = useRouter();
  router.query.id;
  return (
    <Layout>
      <Product></Product>
    </Layout>
  );
};

export default ProductPage;
