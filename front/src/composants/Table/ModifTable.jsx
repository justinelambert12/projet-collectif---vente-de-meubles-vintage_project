import { useLocation} from 'react-router-dom';
import {  useEffect, useState} from 'react';
import { useNavigate } from 'react-router-dom';
import updateMeubleInfo from '../../function/updateDBMeuble';
const port=import.meta.env.VITE_PORT


function ModifTable(){
    const location=useLocation()
    console.log(location)
    const idTab= location.pathname.split('/')[2]
    console.log(idTab)
    let navigate = useNavigate()
    const [produitDetail, setproduitDetail] = useState({});


    useEffect(() => {
        fetchData();
    }, []);
    
    const fetchData = async () => {

    try {
      const response = await fetch(`http://localhost:${port}/meubles/${idTab}`);
      const jsonData = await response.json();

    //   console.log(jsonData);
      setproduitDetail(jsonData[0]);
    } catch (error) {
      console.log("Error:", error);
    }
  };


    // let navigate=useNavigate()
    return(
        
    <div className='flex flex-col bg-beige justify-around items-center min-h-[52vh] mt-3'>
        <table className='border-4  table-auto mx-auto'>
            <thead className="bg-white text-red-600">
                <tr>
                    <th className='border-2 text-2xl'>Titre</th>
                    <th className='border-2 text-2xl'>Prix</th>
                    <th className='border-2 text-2xl'>Description</th>
                    <th className='border-2 text-2xl'>Photo</th>
                    <th className='border-2 text-2xl'>Validation</th>
                </tr>
            </thead>
            <tbody className='bg-white border-4'>
                <tr key={produitDetail.id} className="border-2">
                    <td className='px-2'> <input type="text" id="titre" placeholder={produitDetail.titre} /></td>
                    <td className='border-2 px-2'><input type="text" id="prix" placeholder={produitDetail.prix}/> €</td>
                    <td className='border-2 px-2'><input type="text" id='description' placeholder={produitDetail.description}/> </td>
                    <td className='border-2 px-2'><input type="text" id='photo' placeholder={produitDetail.photo}/> </td>
                    <td className='flex mx-2 my-auto'>
                        <div className="text-beige my-2 font-semibold bg-dark-brown rounded-md p-3 text-center flex items-center justify-center">
                            <button onClick ={() => {
                                updateMeubleInfo(produitDetail.id)
                                navigate(`/admin`)
                                }}>Enregistrer modification
                            </button>
                        </div>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
    )  
}


export default ModifTable