// import axios from 'axios'
import React,{useEffect,useState} from 'react'
import InfiniteScroll from 'react-infinite-scroll-component'

const ScrollDown = () => {

    const [items, setItems] = useState([])
    const [noMore, setNoMore] = useState(true)
    const [page, setPage] = useState(2)

    // Get First 10 Questions.
    useEffect(()=>{
        const getQuestions = async()=>{
            const res = await fetch(`http://localhost:3002/Questions?_page=1&_limit=10`)

            const data = await res.json()
            setItems(data)
        }
        getQuestions();
    },[])

    // Get next 10 Questions.
    const fetchQuestions = async()=>{
        const res = await fetch(`http://localhost:3002/Questions?_page=${page}&_limit=10`)
        const data = await res.json()
        return data
    }

    
    const fetchMore = async() =>{
        const qnsFromApi = await fetchQuestions();

        setTimeout(() => {
            setItems([...items, ...qnsFromApi]);
        }, 1400);

        if(qnsFromApi.length === 0 || qnsFromApi.length < 10){
            setNoMore(false)
        }

        setPage(page + 1)

    }
    return (
      <>
      <InfiniteScroll
      dataLength={items.length}
      next={fetchMore}
      hasMore={noMore}
      loader={<h4>Loading.....</h4>}
      endMessage={<p style={{textAlign:"center"}}>
          <b>You have seen it All !</b>
      </p>}
      >
     {items.map((item)=>{
         return <div key={item.id}>
            <div style={{height:"58px",width:"150px",background:"cyan"}}>
                <ul>
                    <li>{item.id}</li>
                    <li>{item.question}</li>
                </ul>
            </div>
         </div>
     })}
      </InfiniteScroll>

      </>
    )
}

export default ScrollDown
