import * as React from "react"
import { useQuery } from "react-query";
import { TCategory } from "../../../logic/Types";
import { fetchCategories } from "../../../logic/Requests";
import MenuNav from "./MenuNav"
import Loading from "../shared/Loading";

const MenuFrame:React.FC = () => {

//Query
  const categories = useQuery<TCategory[], Error, TCategory[], ["categories"]>({
    queryKey: ['categories'],
    queryFn: fetchCategories,
  });

  //Checks
  if (categories.isLoading ||  categories.isRefetching ) {
    console.log('Loading...')
    return <Loading />;
  }

  if (categories.isError ||  typeof(categories.data) === 'undefined') {
    console.log('!!!Error: ',categories.error)
    return  <h2>Error</h2>;
  }

  return (
    <>
    <section className=" w-auto border-8">
        <header>
            <MenuNav categories={categories.data} />
        </header>
        <article>
            Menu Card Component
        </article>
    </section>
    </>
  )
}

export default MenuFrame