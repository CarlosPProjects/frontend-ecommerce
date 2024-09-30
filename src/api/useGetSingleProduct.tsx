import { useState, useEffect } from "react";

const useGetSingleProduct = (productSlug: string | string[] | undefined) => {
  const url = `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/products?filters[slug][$eq]=${productSlug}&populate=*`;


  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    (async () => {
      try {
        const res = await fetch(url);
        const json = await res.json();
        setResult(json.data);
        setLoading(false);
      } catch (error: any) {
        setError(error.message);
        setLoading(false);
      }
    })();
  }, [url]);
  return { loading, error, result };
};

export default useGetSingleProduct;
