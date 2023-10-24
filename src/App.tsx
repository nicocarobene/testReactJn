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
    <section className='grid grid-cols-[450px,1fr] p-4 w-full'>
      <div>
        <h1 className='mb-5'>React Interview</h1>
        <form action="" onSubmit={handleList} className="flex gap-4 items-end pl-3" >
          <fieldset className='flex flex-col justify-center'>
            <label htmlFor="item">New Item: </label>
            <input type="text" name='item' className='p-2'/>
          </fieldset>
          <button >Add</button>
        </form>
      </div>
      <ul className='border-solid border-[1px] p-5 w-full'>
      { 
        list.map((item, index) => (
        <li>
          {item}
          <button onClick={handleRemove(index)}>❌</button>
        </li>
        )
        )
      } 
      </ul>

    </section>
  )
}

export default App
