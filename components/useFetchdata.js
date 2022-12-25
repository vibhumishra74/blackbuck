import { useEffect, useState } from "react";
import axios from 'axios';
import { saveData, storeMoreData } from "../redux/actions";
import { useDispatch, useSelector } from "react-redux";


let useFetchdata =(page=0)=>{

    const [data,setdata] = useState([]);
let [Loading,setLoading] = useState(false);
let [errormsg,seterrormsg] = useState(false);

const dispatch=useDispatch();
const dataredux = useSelector((state)=>state.data.data) 
const savemore = useSelector((state)=>state.data.storedata)



useEffect(()=>{
        page == 0 && dataredux.length >0 && setdata(dataredux)
        dataredux.length > 0 && dispatch(storeMoreData(false))
        setLoading(true)
        let URL = `https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=pdiRET3l7Osnyk7IHvSPl0ziiWFCFly1&q=unitedstates&page=${page}`;
        axios.get(URL)
        .then((e)=>{
          setdata([...data,...e.data.response.docs]);
          page ==0 && savemore && dispatch(saveData(e.data.response.docs))
          page ==1 || page == 0 && dispatch(storeMoreData(false));
          setLoading(false);
          seterrormsg(false);
        }
        )
        .catch(e=>{
          console.log('error fetch',e);
          seterrormsg(true)
        });
      },[page])

      return {data,Loading,errormsg}
}

export default useFetchdata