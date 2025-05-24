import React, { useState } from 'react'

const Menu = () => {
  const menu = [
  {
    id: 1,
    title: 'buttermilk pancakes',
    category: 'breakfast',
    price: 15.99,
    img: 'https://images.unsplash.com/photo-1583503654530-a4ca08800292?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
  },
  {
    id: 2,
    title: 'diner double',
    category: 'lunch',
    price: 13.99,
    img: 'https://images.unsplash.com/photo-1571091718767-18b5b1457add?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,
  },
  {
    id: 3,
    title: 'godzilla milkshake',
    category: 'shakes',
    price: 6.99,
    img: 'https://plus.unsplash.com/premium_photo-1695035006524-ed99577324aa?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    desc: `ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`,
  },
  {
    id: 4,
    title: 'country delight',
    category: 'breakfast',
    price: 20.99,
    img: 'https://images.unsplash.com/photo-1643974148654-305f7c8cd76c?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `,
  },
  {
    id: 5,
    title: 'egg attack',
    category: 'lunch',
    price: 22.99,
    img: 'https://plus.unsplash.com/premium_photo-1695203200080-b04f4d324bf2?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    desc: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up `,
  },
  {
    id: 6,
    title: 'oreo dream',
    category: 'shakes',
    price: 18.99,
    img: 'https://images.unsplash.com/photo-1541658016709-82535e94bc69?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`,
  },
  {
    id: 7,
    title: 'bacon overflow',
    category: 'breakfast',
    price: 8.99,
    img: 'https://plus.unsplash.com/premium_photo-1693086421770-378af52dd95e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    desc: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird `,
  },
  {
    id: 8,
    title: 'american classic',
    category: 'lunch',
    price: 12.99,
    img: 'https://images.unsplash.com/photo-1576194555759-22b1e99820f1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    desc: `on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  `,
  },
  {
    id: 9,
    title: 'quarantine buddy',
    category: 'shakes',
    price: 16.99,
    img: 'https://plus.unsplash.com/premium_photo-1695927469352-8d8b1447748c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
]
const [filteredItems, setFilteredItems] = useState(menu)

function filterAll(){
  setFilteredItems(menu)
}
function filterBreakfast(){
  let breakfastItems = menu.filter((item) => item.category === "breakfast")
  setFilteredItems(breakfastItems)
}
function filterLunch(){
  let lunchItems = menu.filter((item) => item.category === "lunch")
  setFilteredItems(lunchItems)
}
function filterShakes(){
  let shakeItems = menu.filter((item) => item.category === "shakes")
  setFilteredItems(shakeItems)
}
  return (
    <div id='main-menu'>
      <div className='buttons-container'>
        <button id='filter-btn' onClick={filterAll}>All</button>
        <button id='filter-btn-1' onClick={filterBreakfast}>Breakfast</button>
        <button id='filter-btn-2' onClick={filterLunch}>Lunch</button>
        <button id='filter-btn-3' onClick={filterShakes}>Shakes</button>
      </div>
      <div className='menu-container'>
        {filteredItems.map((item) => {
          return (
            <div className='menu-item-container' key={item.id}>
              <img src={item.img} alt="Dish_Image"/>
              <div className='item-details'>
                <div className='item-heading'>
                  <h3>{item.title}</h3>
                  <p>$ {item.price}</p>
                </div>
                <p>{item.desc}</p>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Menu