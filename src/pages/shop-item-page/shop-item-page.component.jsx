import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector, shallowEqual, useDispatch } from "react-redux";

import { fetchItemStart} from "../../redux/actions/collections.actions";
import { fetchSizesGuideStart } from "../../redux/actions/sizes-guide.actions";


import { selectItemByColor } from "../../redux/selectors/collections.selectors";
import { selectWishlistItems} from "../../redux/selectors/wishlist.selectors";


import ItemPictures from "../../components/shop-item/shop-item-extended/item-pictures/item-pictures.component";
import ItemData from "../../components/shop-item/shop-item-extended/item-data/item-data.component";
import RecentView from "../../components/shop-item/shop-item-extended/recent-view/recent-view.component"

import {
Container,
  ShopItemContainer,
ExtrasContainer,
  Title,

} from "./shop-item-page.styles";

const ShopItemPage = () => {
  const params = useParams();
  const dispatch = useDispatch();

  const { collection, section, reference, color } = params;
  const wishlistItems = useSelector(selectWishlistItems, shallowEqual);

  useEffect(() => {
    dispatch(fetchSizesGuideStart(collection, section));
  }, [fetchSizesGuideStart, collection, section]);

  const selectedItem = useSelector((state) =>
    selectItemByColor(state, reference, color, shallowEqual)
  );

  const [currentItem, setCurrentItem] = useState(selectedItem);
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

  useEffect(() => {
    if (selectedItem !== undefined && selectedItem !== null) setCurrentItem(selectedItem);
    else{
      dispatch(fetchItemStart(collection, section, reference, color,wishlistItems ));
    }
  }, [selectedItem, fetchItemStart,params]);


  useEffect(()=>{
    return()=>{ 
      if (selectedItem !== undefined && selectedItem !== null){ 
      const {url,collection,section,reference,description,color}=selectedItem;
      const newUrl=url[0]
      const itemData={newUrl,collection,section,reference,description,color}
      const newList=updateRecentViewedList(recentViewedList,itemData)
     localStorage.setItem("recentviewed",JSON.stringify(newList))
    }
    }
  },[])


  return (
    <Container>
      <ShopItemContainer>
        {currentItem && <ItemPictures url={currentItem.url} />}
        {currentItem && (
          <ItemData
            collection={collection}
            section={section}
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

export default ShopItemPage;
