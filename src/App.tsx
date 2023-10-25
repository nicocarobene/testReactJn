import {  useState } from 'react'
import './App.css'

function App() {
  const [list, setList] = useState<string[]>([])
  const handleList = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const {elements}= e.currentTarget
    const input= elements.namedItem('item') 
    if(input instanceof HTMLInputElement){
      if(input.value === ''){
        return;
      }
      setList([...list, input.value])
      input.value=''
    }
  }
  const handleRemove=(index: number)=>()=>{
    const newList= list.filter((_, i)=> i!==index)
    setList(newList)
  }
  return (
    <section className='flex justify-center items-center gap-14 flex-col md:grid md:grid-cols-[450px,1fr] place-content-center p-4 w-screen'>
      <div>
        <h1 className='mb-5'>React Interview</h1>
        <form action="" onSubmit={handleList} aria-label="list of item for to do" className="flex gap-4 items-end pl-3 w-full" >
          <fieldset className='flex flex-col justify-center w-full'>
            <label htmlFor="item">New Item: </label>
            <input type="text" name='item' className='p-2 w-full' placeholder='videogame 🕹️'/>
          </fieldset>
          <button >Add</button>
        </form>
      </div>
      <ul className='w-3/4 mt-10  border-solid border-[1px] border-opacity-5 p-5 md:w-full max-w-3xl rounded-sm'>
      { list.length  === 0 
        ? <p>Don`t have item already 😔</p> :
        list.map((item, index) => (
        <li className='flex gap-10 items-center'>
          {item}
          <button onClick={handleRemove(index)} className='rounded-full w-12 h-12 flex justify-center items-center'>❌</button>
        </li>
        ))
      } 
      </ul>

    </section>
  )
}

export default App
