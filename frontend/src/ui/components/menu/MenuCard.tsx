import * as React from "react"
import { TProduct } from "./../../../logic/Types";
import { fetchProductsByCategory } from "./../../../logic/Requests";
import { useQuery, useQueryClient } from "react-query";
import { useParams } from "react-router-dom";
import Skelaton from "../shared/Skelaton";


const MenuCard:React.FC = () => {
    //Get Param
    let category:string
    let { categoryId } = useParams();
    if (categoryId === undefined) {
      return <Skelaton />
    }else{
        category = categoryId
    }
    //Query
    let queryKeyDefault = ['products', category];
      const products = useQuery<TProduct[], Error, TProduct[],string[]>({
        queryKey:queryKeyDefault,
        queryFn:() => fetchProductsByCategory(category),
      });
    //Refetch Function
    const queryClient = useQueryClient();
    const refetchData = async () => {
      await queryClient.invalidateQueries('queryKey'); // Sorguyu geçersiz kıl
      await queryClient.refetchQueries('queryKey'); // Sorguyu yeniden al
    };
    //Refetch Then Category Change
    React.useEffect(() => {
        refetchData()
    }, [category])

    
    //Checks
      if (products.isLoading ||  products.isRefetching ) {
        console.log('Loading...')
        return <Skelaton />
      }

      if (products.isError ||  typeof(products.data) === 'undefined') {
        console.log('!!!Error: ',products.error)
        return  <h2>Error</h2>;
      }
  return (
    <>
<div className="flex items-center justify-center w-full h-full ">
    <section className="flex flex-col  m-2 mb-24  p-6 space-y-4 w-full  sm:w-[42rem] sm:p-10 divide-gray-500 bg-[#696161de] text-gray-100  rounded-md ">
        <h2 className="text-2xl font-semibold">{categoryId}</h2>
        <div className=" pt-4 w-full space-y-2">
        { products.data && products.data.length > 0 && products.data.map((product, index) => (
            <article key={index}>
                <div className="flex justify-between">
                    <span className="text-base sm:text-lg">{product.name}</span>
                    <span className="text-base sm:text-lg">{product.price} ₺</span>
                </div>
                <div className="flex items-center space-x-2 text-xs sm:text-sm ml-2">
                    <span className="text-gray-400">{product.content}</span>
                </div>
            </article>
      ))}
        </div>

    </section>
    </div>
    </>
  )
}

export default MenuCard