import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector, shallowEqual, useDispatch } from "react-redux";

import { fetchItemByConditionStart} from "../../redux/actions/collections.actions";
import { fetchSizesGuideStart } from "../../redux/actions/sizes-guide.actions";


import { selectItemByColor } from "../../redux/selectors/collections.selectors";
import { selectWishlistItems} from "../../redux/selectors/wishlist.selectors";


import ShopItemPictures from "../../components/shop-item/shop-item-detailed/shop-item-pictures/shop-item-pictures.component";
import ShopItemData from "../../components/shop-item/shop-item-detailed/shop-item-data/shop-item-data.component";
import RecentView from "../../components/shop-item/shop-item-detailed/recent-view/recent-view.component"

import {
  Container,
  ShopItemContainer,
  Title,
  ExtrasContainer,
} from "./shop-item-page-by-condition.styles";

const ShopItemPageByCondition = () => {
  const params = useParams();
  const dispatch = useDispatch();

  const { collection, condition, reference, color } = params;

  const wishlistItems = useSelector(selectWishlistItems, shallowEqual);
  const selectedItem = useSelector((state) =>
    selectItemByColor(state, reference, color, shallowEqual)
  );

  const [currentItem, setCurrentItem] = useState(selectedItem);

  useEffect(() => {
    if (selectedItem !== undefined && selectedItem !== null) setCurrentItem(selectedItem);
    else{
      dispatch(fetchItemByConditionStart(collection, condition, reference, color,wishlistItems ));
    }
  }, [selectedItem, fetchItemByConditionStart,params]);


  useEffect(() => {
    if (selectedItem !== undefined && selectedItem !== null)
      dispatch(fetchSizesGuideStart(collection, selectedItem.section));
  }, [fetchSizesGuideStart, params, selectedItem]);

  const [recentViewedList, setRecentViewedList]=useState(JSON.parse(localStorage.getItem("recentviewed")))

  const updateRecentViewedList =(recentViewedList,item)=>{
      let viewedList=[];
    if (!recentViewedList) {
      viewedList.push(item)
    }else {
      viewedList=[...recentViewedList]
      viewedList.unshift(item)
        if (recentViewedList.length>6){
          viewedList.pop()
        }
      }
    
        const filteredList= viewedList.reduce((accum,item)=> {const found= accum.find(findItem=> { return (findItem.reference=== item.reference && findItem.color.code=== item.color.code)}) 
        return found !==undefined? accum: [...accum,item]},[])     
  return filteredList
  }

  useEffect(()=>{
    return()=>{ 
      if (selectedItem !== undefined && selectedItem !== null){ 
      const {url,collection,section,reference, color}=selectedItem;
      const newUrl=url[0]
      const itemData={newUrl,collection,section,reference, color}
      const newList=updateRecentViewedList(recentViewedList,itemData)
     localStorage.setItem("recentviewed",JSON.stringify(newList))
    }
    }
  },[])


  return (
    <Container>
      <ShopItemContainer>
        {currentItem && <ShopItemPictures url={currentItem.url} />}
        {currentItem && (
          <ShopItemData
            collection={collection}
            section={`featured/${condition}`}
            item={currentItem}
          />
        )}
      </ShopItemContainer>
      <Title>You may also like...</Title>
  <Title>The last thing you viewed...</Title>
   <ExtrasContainer>{ recentViewedList && recentViewedList.filter((item,index)=> index<6).map((item,index)=> <RecentView key={index} item={item}/>)}</ExtrasContainer>   
    </Container>
  );
};

export default ShopItemPageByCondition;
