
import { useLocalStorage } from './UseLocalStorage'


function DarkMode(initialValues) {

    const [values, setValues] = useLocalStorage()

    const handleChange = (e) => {
        setValues(e)
    }
    return[ handleChange, values, setValues ]
}

export default DarkMode
