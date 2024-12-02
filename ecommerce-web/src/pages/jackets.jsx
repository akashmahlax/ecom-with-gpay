import React from 'react'
import { useNavigate } from 'react-router-dom'

const Jackets = () => {
    
    const collections = [
        { id: 1, name: 'arjan', image: 'https://via.placeholder.com/300x200?text=Tommy+Collection' },
        { id: 2, name: 'sidhu', image: 'https://via.placeholder.com/300x200?text=puma+Collection' },
        { id: 3, name: 'aujla', image: 'https://via.placeholder.com/300x200?text=red leaf+Collection' },
        { id: 4, name: 'babbu maan', image: 'https://via.placeholder.com/300x200?text=peter-england+Collection' },

    ]
    const navigate = useNavigate();

    const click = (route) => {
        navigate(`${route.toLowerCase()}`)
    }
  return (
    <>
    <div  className="grid grid-cols-1 sm:grid-cols-2 bg-black lg:grid-cols-3 gap-6">
    {
        collections.map((route) => (
            <div
            key={route.id}
            className="bg-black text-slate-600 rounded-lg border  border-slate-600 shadow-md m-2 cursor-pointer"
           
            >
                <img src={route.image} 
                alt={route.name}
                className='rounded-t-lg w-full h-48 object-cover'
                 onClick={() => click(route.name)}
                />
               <div className="p-4">
              <h2 className="text-lg font-bold text-center">{route.name} Collection</h2>
            </div>
                
            </div>
        )

        )
    }

    </div>
    </>
  )
}

export default Jackets;