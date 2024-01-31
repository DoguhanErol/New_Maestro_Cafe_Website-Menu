import * as React from "react"
import { useParams, Link, useNavigate } from "react-router-dom"
import { TCategory } from "./../../../logic/Types";
import { menuUrl } from "../../../logic/Config";

type Tprops ={
    categories:TCategory[];
}


const MenuNav:React.FC<Tprops>= (props:Tprops) => {
    
const scrollIntoViewHandler = () => {
    const element = document.querySelector('.active-link'); // veya getElementById('specific-id')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

        let { categoryName } = useParams();
        const navigate = useNavigate();
        React.useEffect(() => {
            let firstCategoryName = props.categories[0].categoryName;
            props.categories.forEach((category) => {
                if (categoryName===category.categoryName) {
                    firstCategoryName = category.categoryName
                }
            });
            navigate('/menu/' + firstCategoryName )
            scrollIntoViewHandler();

            
        }, [categoryName])


  return (
    <>
        <div className="flex items-center  space-x-2 overflow-x-visible px-2 py-2 overflow-y-hidden sm:justify-center flex-nowrap bg-[#6e788862] text-gray-100 ">
            {props.categories && props.categories.length > 0  && props.categories.sort().map((category, index) => (
                <Link rel="noopener noreferrer" key={index} to={ menuUrl+category.categoryName}
                className={categoryName === category.categoryName ? 'active-link' : 'deactive-link'}
                > {category.categoryName} </Link>
            ))}
        </div>
    </>
  )
}

export default MenuNav