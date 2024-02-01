import * as React from "react"
import { useParams, Link, useNavigate } from "react-router-dom"
import { TCategory } from "./../../../logic/Types";
import { menuUrl } from "../../../logic/Config";

type Tprops ={
    categories:TCategory[];
}

const MenuNav:React.FC<Tprops>= (props:Tprops) => {
//React-Router-Dom-V6 elements  
    let { categoryId } = useParams();
    const navigate = useNavigate();

//Scroller for menu navigation
const scrollIntoViewHandler = () => {
    const element = document.querySelector('.active-link'); 
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

//Use Effect for wrong route or empty parameter
        React.useEffect(() => {
          //Alfabetik siraya sok ve ilk olani al
          let firstCategoryId = props.categories.sort((a, b) => a.categoryId.localeCompare(b.categoryId))[0].categoryId;
          props.categories.forEach((category) => {
                if (categoryId===category.categoryId) {
                  firstCategoryId = category.categoryId
                }
            });
            navigate('/menu/' + firstCategoryId )
            scrollIntoViewHandler();
        }, [categoryId])


  return (
    <>
        <div className="flex items-center  space-x-2 overflow-x-visible px-2 py-2 overflow-y-hidden sm:justify-center flex-nowrap bg-[#6e788862] text-gray-100 ">
        {props.categories && props.categories.length > 0  && props.categories
            .slice() // Orjinal diziyi değiştirmemek için kopyasını oluşturuyoruz
            .sort((a, b) => a.categoryId.localeCompare(b.categoryId)) // Alfabetik sıraya göre sıralama
            .map((category, index) => (
            <Link
              rel="noopener noreferrer"
              key={index}
              to={menuUrl + category.categoryId}
              className={categoryId === category.categoryId ? 'active-link' : 'deactive-link'}
            >
      {category.categoryId}
    </Link>
  ))
}

        </div>
    </>
  )
}

export default MenuNav