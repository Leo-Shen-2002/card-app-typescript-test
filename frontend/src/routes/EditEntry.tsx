import {useState, useContext, ChangeEvent, MouseEvent, useEffect} from 'react'
import {useParams, useNavigate} from 'react-router-dom'
import {EntryContext} from '../utilities/globalContext'
import {Entry, EntryContextType} from '../@types/context'

export default function EditEntry(){
    const {id} = useParams()
    const emptyEntry: Entry = {title: "", description: "",created_at: new Date(), scheduled_date: new Date()}

    const { updateEntry, entries } = useContext(EntryContext) as EntryContextType
    const [newEntry,setNewEntry] = useState<Entry>(emptyEntry)

    useEffect(() =>{
        const entry = entries.filter(entry=> entry.id == id)[0]
        setNewEntry(entry)
    },[])
    const handleInputChange = (event: ChangeEvent<HTMLInputElement|HTMLTextAreaElement>) => {
        setNewEntry({
            ...newEntry,
            [event.target.name] : event.target.value
        })
    }
    const handleSend = (e: MouseEvent<HTMLButtonElement>) => {
        updateEntry(id as string,newEntry)
    }
    return(
        <section className="flex justify-center flex-col w-fit ml-auto mr-auto mt-10 gap-5 bg-gray-300 p-8 rounded-md dark:bg-gray-800 shadow-md shadow-gray-500 dark:shadow-gray-900 m-3 p-4 rounded">
            <div className="flex flex-col">
                <label htmlFor="title" className="mb-2 text-lg font-medium">Title</label>
                <input
                    className="w-full p-2 border rounded-md text-black dark:text-white bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-600"
                    type="text"
                    placeholder="Title"
                    name="title"
                    value={newEntry.title}
                    onChange={handleInputChange}
                />
            </div>
             {/* Description textarea */}
            <div className="flex flex-col">
                <label htmlFor="description" className="mb-2 text-lg font-medium">Description</label>
                <textarea
                    className="w-full p-2 border rounded-md text-black dark:text-white bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-600"
                    placeholder="Description"
                    name="description"
                    value={newEntry.description}
                    onChange={handleInputChange}
                />
            </div>
             {/* Created At input */}
            <div className="flex flex-col">
                <label htmlFor="created_at" className="mb-2 text-lg font-medium">Created At</label>
                <input
                    className="w-full p-2 border rounded-md text-black dark:text-white bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-600"
                    type="date"
                    name="created_at"
                    value={(new Date(newEntry.created_at)).toISOString().split('T')[0]}
                    onChange={handleInputChange}
                />
            </div>
            {/* Scheduled Date input */}
            <div className="flex flex-col">
                <label htmlFor="scheduled_date" className="mb-2 text-lg font-medium">Scheduled Date</label>
                <input
                    className="w-full p-2 border rounded-md text-black dark:text-white bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-600"
                    type="date"
                    name="scheduled_date"
                    value={(new Date(newEntry.scheduled_date)).toISOString().split('T')[0]}
                    onChange={handleInputChange}
                />
            </div>
            <button onClick={(e) => {handleSend(e)}} className="bg-blue-400 hover:bg-blue-600 font-semibold text-white p-3 rounded-md">Update</button>
        </section>
    )
}