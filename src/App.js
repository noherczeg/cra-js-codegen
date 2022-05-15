import ApiClient from './api/src/ApiClient';
import PetApi from './api/src/api/PetApi';
import {useEffect, useState} from "react";

const api = new ApiClient();
const petApi = new PetApi(api);

function App() {
    const [data, setData] = useState([]);
    useEffect(() => {
        petApi.findPetsByStatus(['available'], (error, data, response) => {
            if (error) {
                console.error(error);
            } else {
                setData(data);
                console.log('API called successfully.');
            }
        });
    }, []);

  return (
    <div className="App">
      hello
        <ul>
            {data.map(d => (
                <li key={d.id}>{JSON.stringify(d)}</li>
            ))}
        </ul>
    </div>
  );
}

export default App;
